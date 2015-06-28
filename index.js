'use strict';

var Q = require('q'),
  _ = require('underscore'),
  GooglePlaces = require("googleplaces"),
  GooglePlacesPromises;

function googlePlacesMethodWrap(method, params){
  var promise = Q.defer();
  method(params, function(error, response){
    if(error) promise.reject(error);
    else promise.resolve(response);
  });
  return promise.promise;
}

GooglePlacesPromises = function(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT){
  var googlePlacesMethods,
    placesPromises = {};

  if(!GOOGLE_PLACES_OUTPUT_FORMAT) GOOGLE_PLACES_OUTPUT_FORMAT = 'json';

  googlePlacesMethods = new GooglePlaces(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT);

  _.each(googlePlacesMethods, function(method, methodName){
    placesPromises[methodName] = _.wrap(method, googlePlacesMethodWrap);
  });

  return placesPromises;
};

GooglePlacesPromises.API = {};

GooglePlacesPromises.setDefaultAPI = function(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT){
  return GooglePlacesPromises.API = new GooglePlacesPromises(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT)
};

module.exports = GooglePlacesPromises;
