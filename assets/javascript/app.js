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

// Initialize Map //
var map;
var infoWindow;
function generateMap(kw, rad){
    console.log('running');
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pyrmont = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Your Location.');
        infoWindow.open(map);
        map.setCenter(pos);

        var request = {
            location: pyrmont,
            radius: rad,
            keyword: kw
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 32.2217, lng: -110.9265},
        zoom: 10
        });
}
    
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}    
    
function callback(results, status) {
    console.log("Running");
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
    }
}

function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0, place; place = places[i]; i++) {
    
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location 
    });

    bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}



//Get user location and radius of stores    
$(document).ready(function(){
    console.log('running');
    $('#getStores').on('click', function(){
        var rad = 4828.03;
        if($('#radiusInput').val() != 0){
            rad = $('#radiusInput').val()*1609.34;
        }
        generateMap(['grocery', 'store'], rad);
    })
})
