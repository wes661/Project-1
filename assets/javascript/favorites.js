
//var favoriteRecipe = firebase.database();

//var key = "";

var favorites = [];

$(".addFav").on("click", function () {
    event.preventDefault();
    var recipeNumber = parseInt($(this).attr('id').replace('fav', ''));

    var clickedRecipe;
    database.ref("recipeCards/recipe" + recipeNumber).once("value", function (snapshot) {
        console.log(snapshot.val());
        clickedRecipe = snapshot.val();
        favorites.push(clickedRecipe);
        database.ref("favorites").set({
            recipes: favorites
        });
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
    console.log("Favorite Clicked");
    $(this).hide();
});

database.ref("favorites").on("value", function (snapshot) {
    favorites = snapshot.val().recipes;
    populateFavoritesView()
    console.log(favorites);
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

function populateFavoritesView() {
    var row = $('<div classs="row text-center inner2 ">');
    for (var i = 0; i < favorites.length; i++) {
        var card = $('<div class="card col-12 col-lg-3 card-pad">');
        var cardImage = $('<img class="card-img-top" src="' + favorites[i].picture + '" alt="Food Image">')
        var cardBody = $('<div class="card-body">');
        var cardButton = $('<a href="#!" class="btn btn-primary fav-recipe-btn truncate" id="favRecipe' + i + '">' + favorites[i].title + '</a>');
        console.log(cardImage);
        cardBody.append(cardButton);
        card.append(cardImage);
        card.append(cardBody);
        row.append(card);
    }
    $('#favoritesCardDisplay').html(row);
}

$(document).on('click', '.fav-recipe-btn', function () {
    $('#favoritesRecipeDisplay').html();
    var favIndex = $(this).attr('id').replace('favRecipe', '');
    console.log(favorites[favIndex]);

})
/* <div class="card col-12 col-lg-3 card-pad">
                    <img class="card-img-top" id="recipePic1" alt="">
                    <div class="card-body">
                        <a href="#!" class="btn btn-primary recipe-btn truncate" data-target=".bd-example-modal-lg" id="basicModal-1"></a>
                    </div>
                </div> */









