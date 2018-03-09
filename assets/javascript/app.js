// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBduDTXB2PTUnzWhxbVATEwjbyLYMjgPf0",
    authDomain: "cdc-project-1.firebaseapp.com",
    databaseURL: "https://cdc-project-1.firebaseio.com",
    projectId: "cdc-project-1",
    storageBucket: "cdc-project-1.appspot.com",
    messagingSenderId: "701148576356"
  };
  firebase.initializeApp(config);


  const auth = firebase.auth();

  // get html elemants
  const txtEmail = document.querySelector("#txtEmail");
  const txtPassword = document.querySelector("#txtPassword");
  const btnLogin = document.querySelector("#btnLogin");
  const btnSignUp = document.querySelector("#btnSignUp");
  const btnLogout = document.querySelector("#btnLogout");
  const btnAnony = document.querySelector("#btnAnony")

  //add login event
  btnLogin.addEventListener("click", e => {
      //get email and password
      const email = txtEmail.value;
      const password = txtPassword.value;
      //sign in
      const promise = auth.signInWithEmailAndPassword(email, password);
      promise.catch(e => console.log(e.message));
  });
    // add signup event
    btnSignUp.addEventListener("click", e => {
        //get email and password
        //TODO   check 4 real email
      const email = txtEmail.value;
      const password = txtPassword.value;
      //sign in
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.catch(e => console.log(e.message));
    });
    btnLogout.addEventListener('click', e=> {
        auth.signOut();
    });

    // add a realtime listener
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });

    btnAnony.addEventListener('click', e => {
        auth.signInAnonymously();
    });

    auth.onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
    })