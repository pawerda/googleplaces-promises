googleplaces-promises
=========

Based on IMO the best google places module created by Srirangan - [googleplaces](https://www.npmjs.com/package/googleplaces)

## Usage:

```text
$npm install googleplaces-promises
```

#### then:

```javascript
var GooglePlacesPromises = require('googleplaces-promises');
```

#### API setup:

Constructor takes 2 arguments API_KEY and OUTPUT_TYPE (not required, default is json)

```javascript

var placesPromises = new GooglePlacesPromises('YOUR_API_KEY');


//OR


var placesPromises = GooglePlacesPromises.setDefaultAPI('YOUR_API_KEY'); 

//every next require('googleplaces-promises').API on app scope will be your default API
//useful when you are going to use module multiple times in one app

//placesPromises == GooglePlacesPromises.API // true
//placesPromises instanceof GooglePlacesPromises //true
 
```

##### Single promise:

```javascript

var searchParams = {
        location: [40.7127, -74.0059],
        types: "doctor"
    },
    placeSearch = placesPromises.placeSearch(searchParams);

placeSearch
    .then(function(response){
        console.log(response)
    })
    .fail(function(error){
        console.log(error)
    })

```

##### Parallel execution example:

```javascript

var Q = require('q')
    placeSearchParams = {
        location: [40.7127, -74.0059],
        types: "doctor"
    },
    textSearchParams = {
        query: 'restaurants in dublin'
    },
    placeSearch = placesPromises.placeSearch(placeSearchParams),
    textSearch = placesPromises.textSearch(textSearchParams),
    promises = [placeSearch, textSearch];

Q.all(promises)
    .spread(function () {
        console.log(arguments);
    })
    .done();

```

### Implemented methods

#### GooglePlacesPromises module

* **new GooglePlacesPromises**(API_KEY, OUTPUT_FORMAT) - returning wrapped [googleplaces](https://www.npmjs.com/package/googleplaces)
* GooglePlacesPromises.**setDefaultAPI(API_KEY, OUTPUT_FORMAT)** - setting **new GooglePlacesPromises**(*args) as:
* GooglePlacesPromises.API - default API if set.

#### GooglePlacesPromises instance

instance has the same methods as [googleplaces'](https://www.npmjs.com/package/googleplaces) 

* placesPromises.**placeSearch(params)**
* placesPromises.**radarSearch(params)**
* placesPromises.**textSearch(params)**
* placesPromises.**placeDetailsRequest(params)**
* placesPromises.**placeAutocomplete(params)**
* placesPromises.**addEvent(params)**
* placesPromises.**deleteEvent(params)**
* placesPromises.**eventDetails(params)**
* placesPromises.**imageFetch(params)**

#### Run test.js

But first paste you api key inside test.js
