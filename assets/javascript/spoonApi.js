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

    console.log(response);
    

  });

});  