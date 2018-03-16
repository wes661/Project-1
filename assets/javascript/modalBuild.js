$("#basicModal-1").on("click", function() {

    database.ref('recipeCards/recipe1').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-2").on("click", function() {

    database.ref('recipeCards/recipe2').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-3").on("click", function() {

    database.ref('recipeCards/recipe3').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-4").on("click", function() {

    database.ref('recipeCards/recipe4').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-5").on("click", function() {

    database.ref('recipeCards/recipe5').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-6").on("click", function() {

    database.ref('recipeCards/recipe6').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-7").on("click", function() {

    database.ref('recipeCards/recipe7').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-8").on("click", function() {

    database.ref('recipeCards/recipe8').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});
$("#basicModal-9").on("click", function() {

    database.ref('recipeCards/recipe9').once('value', function(data){
        
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
        
        
        $("#modal").html(modalCard);
        

    });
});