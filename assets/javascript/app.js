// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBduDTXB2PTUnzWhxbVATEwjbyLYMjgPf0",
//     authDomain: "cdc-project-1.firebaseapp.com",
//     databaseURL: "https://cdc-project-1.firebaseio.com",
//     projectId: "cdc-project-1",
//     storageBucket: "cdc-project-1.appspot.com",
//     messagingSenderId: "701148576356"
// };
// firebase.initializeApp(config);

$('#carousel').carousel({
    interval: 5000
})



// $("#recipeSearch").on("click", function () {
//     // var s3 = $("#ingredient3").val().trim();
//     // var s2 = $("#ingredient2").val().trim();
//     var s1 = $("#ingredient1").val().trim();

//     console.log(s1);
//     // console.log(s2);
//     // console.log(s3);


// })
var newId = 2;
$("#addMore").on("click", function () {
    var newForm = $(".input-group");

    if (newId != 6) {
        newForm.prepend('<input type="text"class="form-control" id=ingredient' + newId + ' placeholder="Additional Ingredient"/>');
        newId++;
        console.log(newId);
    }
 
})
