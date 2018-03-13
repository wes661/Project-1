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
var database = firebase.database();

// main carousel speed // 
$('#carousel').carousel({
    interval: 5000
})
// start for the search function of the main page //
var newId = 2;
// on click for searching // 
$("#recipeSearch").on("click", function () {
    var search1 = $("#ingredient1").val().trim();
    console.log("first ingredient: " + search1)
    if (newID = 3) {
        var search2 = $("#ingredient2").val().trim(); 
        console.log("second ingredient: " + search2);
    } 
    if (newID = 4) {
        var search3 = $("#ingredient3").val().trim();
        console.log("third ingredient: " + search3);
    } 
    if (newID = 5) { 
        var search4 = $("#ingredient4").val().trim();
        console.log("fourth ingredient: " + search4);
    } 
    if (newID = 6) {
        var search5 = $("#ingredient5").val().trim();
        console.log("fifth ingredient: " + search5);
    }
})
// on click for adding more search fields // 
$("#addMore").on("click", function () {
    var newForm = $(".input-group");
    if (newId != 6) {
        newForm.prepend('<input type="text"class="form-control" id=ingredient' + newId + ' placeholder="Additional Ingredient"/>');
        newId++;
    }
})
