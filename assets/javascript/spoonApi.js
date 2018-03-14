// key
// c4YgIGcU8WmshZ3ig1VyeaajeldQp1cNxb7jsnu5l0L2zf7GbS

// apples%2Cflour%2Csugar //way to typw multiple ingredients

// Url
//spoonacular-recipe-food-nutrition-v1.p.mashape.com
        
        
$("#button").on("click", function(e) {
    e.preventDefault();

   
    // let search = (search1);

    //recipe search url
    let queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=1&offset=0&query=" + search1;

    //recipe for title
    // let queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=http%3A%2F%2Fwww.melskitchencafe.com%2Fthe-best-fudgy-brownies%2F";

    console.log(ingredients);

    $.ajax({
      url: queryUrl,
      method: "GET",
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Key', 'c4YgIGcU8WmshZ3ig1VyeaajeldQp1cNxb7jsnu5l0L2zf7GbS');
        }
  }).then(function(response) {

    console.log(response);
    console.log(response.results[0].image);
    
    let picSrc = response.results[0].image;

    let image = $("<image>");
    image.attr("src", picSrc);
    $("#picDiv").append(image);

  });

});