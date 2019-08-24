firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("login_div").style.display = "none";
      document.getElementById("user_div").style.display = "block";

      var user = firebase.auth().currentUser;
        if(user != null){
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User: " + email;
        }


    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
  });

function login(){
    var userName = document.getElementById("email_Field").value;
    var createUserWithEmailAndPassword = document.getElementById("password_Field").value;

    firebase.auth().createUserWithEmailAndPassword(userName, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // ...
      });
}

function logout(){
    firebase.auth().signOut(); 
}