const auth = firebase.auth();

// get html elemants
const txtEmail = document.querySelector("#txtEmail");
const txtPassword = document.querySelector("#txtPassword");
const btnLogin = document.querySelector("#btnLogin");
const btnSignUp = document.querySelector("#btnSignUp");
const btnLogout = document.querySelector("#btnLogout");
const btnAnony = document.querySelector("#btnAnony")

let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    firebase.auth().signInWithPopup(provider);
  

//  btnLogin.addEventListener('click', e => {
//      e.preventDefault();
//      auth.signInWithPopup(provider);
//      console.log("working");
//  })
