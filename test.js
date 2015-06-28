'use strict';

var Q = require('q'),
  GooglePlacesPromises = require('./'),
  placesPromises = GooglePlacesPromises.setDefaultAPI('YOUR_API_KEY'),
  placeSearchParams = {
    location: [40.7127, -74.0059],
    types: "doctor"
  },
  textSearchParams = {
    query: "restaurants in dublin"
  },
  placeSearch = placesPromises.placeSearch(placeSearchParams),
  textSearch = placesPromises.textSearch(textSearchParams),
  promises = [placeSearch, textSearch];

Q.all(promises).spread(function () {
  console.log(arguments);
}).done();



