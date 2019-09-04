import app from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC5EmvZVY0g02qglXhXc7gjBw8RC2NyUdY",
  authDomain: "budgetcation-2e122.firebaseapp.com",
  databaseURL: "https://budgetcation-2e122.firebaseio.com",
  projectId: "budgetcation-2e122",
  storageBucket: "",
  messagingSenderId: "340142123892",
  appId: "1:340142123892:web:522ad8c316dfc897"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
  }

  doCreateUserWithEmailAndPassword(email, password, displayName) {
    this.auth.createUserWithEmailAndPassword(email, password).then(
      (success) => {
        success.updateProfile({
          displayName: displayName
        })
      }
    )
  }
  
  doSignInWithEmailAndPassword = (email, password) => 
  this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);
}

export default Firebase;