// key
// c4YgIGcU8WmshZ3ig1VyeaajeldQp1cNxb7jsnu5l0L2zf7GbS

// apples%2Cflour%2Csugar //way to type multiple ingredients

// Url
//spoonacular-recipe-food-nutrition-v1.p.mashape.com
        
        
$("#recipeSearch").on("click", function(e) {
    e.preventDefault();
    
    let search = (search1 + "%2C" + search2 + "%2C" + search3 + "%2C" + search4 + "%2C" + search5);
    console.log(search);


    let queryUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=' + search;

    $.ajax({
      url: queryUrl,
      method: "GET",
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Key', 'c4YgIGcU8WmshZ3ig1VyeaajeldQp1cNxb7jsnu5l0L2zf7GbS');
        }
  }).then(function(response) {

    let recipes = response.recipes;

    console.log(response);

    

    for ( let i = 0; i < response.recipes.length; i++) {
      console.log(recipes[i]);
      console.log(recipes[i].image);
      console.log(recipes[i].title);

      let recipeTitle = recipes[i].title

      let cardDiv = $("<div>");
      cardDiv.addClass(" text-center  col-md-3");
      $("#test").append(cardDiv);

      let cardTitle = $("<h3>");
      cardTitle.addClass("card-header");
      cardTitle.text(recipeTitle);
      cardDiv.append(cardTitle);


      let cardImg= $("<img>");
      cardImg.addClass("img-fluid card-body");
      cardImg.attr("src", recipes[i].image);
      cardDiv.append(cardImg);




    }

    
    

  });

});  