'use strict';


// Check that we're on the google maps page.

// This needs to be in a listener for "direction request sent / received".
var parameters = document.getElementsByClassName("tactile-searchbox-input");
var startLocation = parameters[0].value;
var endLocation = parameters[1].value;
console.log(startLocation, endLocation);

// we need to make some API calls to get the directions.

// We need to parse the directions for their type and calculate whatever we decide we want.
