$("#basicModal-1").on("click", function() {

    database.ref('recipeCards/recipe1').once('value', function(data){
        $("#modal-body").append(data.val().title);
    });

});