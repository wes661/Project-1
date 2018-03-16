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
        modalImage.addClass("img-fluid col-12");
        modalImage.attr("src", data.val().picture);
        row.append(modalImage);

        for (let i = 0; i < data.val().ingredients.length; i++) {
            let div = $("<div>");
            let ul = $("<ul>");
            let li = $("<li>");
            li.text(data.val().ingredients[i]);
            ul.append(li);
            div.append(ul);
            row.append(div);
        }

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