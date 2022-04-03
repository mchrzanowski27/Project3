// Creating the map object
var myMap = L.map("map", {
  center: [48.002777, 37.805279],
  zoom: 11,
});

// Adding the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);


// Getting our GeoJSON data
d3.json("geojson.json").then(function (data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});

// var EventMarker=[]

d3.json("geojson.json").then(function (data) {
  for (var i = 0; i < LOCATION.length; i++) {
    var city = LOCATION[i];
    L.marker(city.LOCATION)
      // .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.title.toLocaleString()}</h3>`)
      .addTo(myMap);
  }

  var marker = L.marker([city.latitude, city.longitude], {
    draggable: true,
    title: LOCATION,
  }).addTo(myMap);

  L.geoJson(data).addTo(myMap);
});

// var marker = L.marker([48.002777, 37.805279], {
//   draggable: true,
//   title: "My First Marker"
// }).addTo(myMap);
