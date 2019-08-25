var firebaseConfig = {
    apiKey: "AIzaSyCIsJXzbLiJwO-IJAUkFMn-eA4QXKsAlyg",
    authDomain: "budgetcation.firebaseapp.com",
    databaseURL: "https://budgetcation.firebaseio.com",
    projectId: "budgetcation",
    storageBucket: "",
    messagingSenderId: "482826966898",
    appId: "1:482826966898:web:01ee6d899297d331"
  };
firebase.initializeApp(firebaseConfig);

document.getElementById("signUpButton").addEventListener('click', e => {
  // Get values
  var name = getInputVal('name');
  var password = getInputVal('password');
  var email = getInputVal('email');
  var homeLocation = getInputVal('homeLocation');
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    if (errorCode == 'auth/email-already-in-use') {
      alert('This username is already in use.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
});

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('newUserForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Save message
  saveMessage(password, email, homeLocation);

  // Show alert
  window.alert('Sign up successful!');

  document.getElementById('newUserForm').style.display = 'none';
  document.getElementById('main').style.display = 'block';

  // Clear form
  document.getElementById('newUserForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save data to firebase
function saveMessage(email, password, homeLocation){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email:email,
    password:password,
    homeLocation:homeLocation
  });
}