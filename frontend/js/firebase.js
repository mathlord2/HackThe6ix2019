firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        user.getIdToken().then(function (idToken) {
            userIdToken = idToken;
        });

        var user = firebase.auth().currentUser;
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        
        if (user != null){
            var email_id = user.email;
            $('.header h1').html("Welcome, " + email_id + ".");
        }

        window.alert("Login successful!");
    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
        $('.sidebar').css({ 'width': '0px' });
        $('.header i').css({ 'right': '10px' });
        $('#email_field').val('');
        $('#password_field').val('');
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }); 
}

window.onload = function() {
    $('#loginBtn').click(login);
    $('#signOut').click(logout);
}