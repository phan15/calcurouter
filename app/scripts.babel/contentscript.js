'use strict';

var google = $.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyDiQd8NqaSESBmlH1ycGn4nFhijVsI9ykg&callback=loadMapsAPI");

function loadMapsAPI(response) {
	console.log("Google called you back.");
   var script = document.createElement( 'script' );
   script.src = response;
   document.body.appendChild( script );
   console.log("Their message as been appended.");
}

//Check that we're on the google maps page.
function mapsLoaded() {
	// This needs to be in a listener for "direction request sent / received".
	var parameters = document.getElementsByClassName('tactile-searchbox-input');
	var startLocation = parameters[0].value;
	var endLocation = parameters[1].value;
	console.log(startLocation, endLocation);

	// we need to make some API calls to get the directions.
	var directionsService = new google.maps.DirectionsService();
	directionsService.route({
	    origin: startLocation,
	    destination: endLocation,
	    travelMode: google.maps.TravelMode.DRIVING
	  }, function(response, status) {
	    if (status === google.maps.DirectionsStatus.OK) {
	      console.log(response);
	    } else {
	      console.log('Failed to retrieve driving directions.');
	    }
	  });
	// We need to parse the directions for their type and calculate whatever we decide we want.
}
console.log("content script loaded");