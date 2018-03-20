
const auth = firebase.auth();

let key = "";
let loggedIn = false;

const txtEmail = document.querySelector("#txtEmail");
const txtPassword = document.querySelector("#txtPassword");
const btnLogin = document.querySelector("#btnLogin");
const btnSignUp = document.querySelector("#btnSignUp");
const btnLogout = document.querySelector("#btnLogout");
const btnAnony = document.querySelector("#btnAnony");

$("#txtEmail, #txtPassword, #btnAnony, #btnLogout").hide();


$("#btnLogin").on("click", function () {
    $("#txtEmail, #txtPassword").show();
    signIn();
    loggedIn = true;
});

$("#btnSignUp").on("click", function () {
    $("#txtEmail, #txtPassword").show();
    signUp();
});

function secondPageLoad() {
    if (loggedIn === true) {
        $("#spin").show();
        $("#spin").addClass("fa-spin");
        setTimeout(function () {
            window.location.href = 'index2.html'
        }, 5000)
    } else {
        $('#loginModal').modal('show');
    }
};

function signIn() {
        btnLogin.addEventListener("click", e => {
            
            //get email and password
            const email = txtEmail.value;
            const password = txtPassword.value;
            //sign in
            const promise = auth.signInWithEmailAndPassword(email, password);
            promise.catch(e => console.log(e.message));
        });

        btnSignUp.addEventListener("click", e => {
            //get email and password
            //TODO   check 4 real email
            const email = txtEmail.value;
            const password = txtPassword.value;
            //sign in
            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.catch(e => console.log(e.message));
        });
};

function signUp() {

    btnSignUp.addEventListener("click", e => {
        //get email and password
        //TODO   check 4 real email
        const email = txtEmail.value;
        const password = txtPassword.value;
        //sign in
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => alert(e.message));
    });

    btnLogin.addEventListener("click", e => {
        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;
        //sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });
};

btnLogout.addEventListener('click', e => {
    auth.signOut();
    $("#btnLogout").hide();
    loggedIn = false;
});

// add a realtime listener
auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        $("#btnLogout").show();
        $("#btnLogin, #btnSignUp, #txtEmail, #txtPassword").hide();
        key = firebaseUser.uid;
        console.log(key);
        updateRecipes()
    } else {
        console.log('not logged in');
        $("#btnLogin, #btnSignUp").show();
        updateRecipes();
    }
});



