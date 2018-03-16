$(".recipe-btn").on("click", function () {
    var idArr = $(this).attr('id').split('');
    var j = idArr[idArr.length - 1];
    //console.log(idArr);
    database.ref('recipeCards/recipe' + j).once('value', function (data) {

        let modalCard = $("<div>");
        modalCard.addClass("card text-center");

        let modalHeader = $("<div>");
        modalHeader.addClass("card-header");
        modalHeader.html("<h2>" + data.val().title);
        modalCard.append(modalHeader);

        let row = $('<div>');
        row.addClass("row");


        let modalImage = $("<img>");
        modalImage.addClass("img-fluid col-8");
        modalImage.attr("src", data.val().picture);
        row.append(modalImage);

        let modalingredients = $("<p>");
        modalingredients.addClass("col-4");
        modalingredients.text(data.val().ingredients);
        row.append(modalingredients);

        modalCard.append(row);

        let modalBody = $("<div>");
        modalBody.addClass("card-body");
        modalCard.append(modalBody);

        let modalInstructions = $("<p>");
        modalInstructions.text(data.val().instructions);
        modalBody.append(modalInstructions);


        $("#modal-body").html(modalCard);


    });
});