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

function switchToSignUp(none, block) {
    none.style.display = "none";
    block.style.display = "block";
}

// Submit form
function submitForm(e) {
    var name = getInputVal('name');
    var email = getInputVal('email');
    var password = getInputVal('password');
    var homeLocation = getInputVal('homeLocation');
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/email-already-in-use') {
            alert('This username is already in use.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });

    e.preventDefault();

    // Save message
    saveMessage(name, password, email, homeLocation);

    // Show alert
    window.alert('Sign up successful!');

    document.getElementById('newUserForm').style.display = 'none';
    document.getElementById('main').style.display = 'block';

    // Clear form
    document.getElementById('newUserForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save data to firebase
function saveMessage(name, email, password, homeLocation) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name, name,
        email: email,
        password: password,
        homeLocation: homeLocation
    });
}

window.onload = function() {
    $('#loginBtn').click(login);
    $('#signOut').click(logout);
    $('#switch1').click(function() {
        switchToSignUp(document.getElementById('login_div'), document.getElementById('newUserForm'));
    });
    $('#switch2').click(function() {
        switchToSignUp(document.getElementById('newUserForm'), document.getElementById('login_div'));
    });
    $('#newUserForm').submit(submitForm);
}