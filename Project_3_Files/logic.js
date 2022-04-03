// Creating the map object
var myMap = L.map("map", {
  center: [48.002777, 37.805279],
  zoom: 5,
});

// Adding the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

function getradius(fatality) {
  if (fatality> 30){
    return 30
  }
  else if (fatality>=1){
    return 15
  }
  else {
    return 10
  }
}
function getcolor(event_type) {
  if (event_type=="Explosions"){
    return "red"
  }
  else if (event_type=="Battles"){
    return "blue"
  }

  else if (event_type=="Violence against civilians"){
    return "yellow"
}
  else {
    return "green"
  }
}
function getstyle(feature){
  return {
    stroke:false,
    fillOpacity: .75,
    radius: getradius(feature.properties.FATALITIES),
    fillColor: getcolor(feature.properties.EVENT_TYPE)
  }
}
// Getting our GeoJSON data
d3.json("geojson.json").then(function (data) {
  // Creating a GeoJSON layer with the retrieved data
  console.log(data)
  L.geoJson(data,{
    pointToLayer:(feature, coord)=>{
      return L.circleMarker(coord)
    },
    style:getstyle,
    onEachFeature: (feature,layer)=>{
      layer.bindPopup(`<h3> ${feature.properties.LOCATION} </h3><b>Fatalities:</b> ${feature.properties.FATALITIES}
      <b>Event:</b> ${feature.properties.SUB_EVENT_TYPE}`)
    }
  }).addTo(myMap);
});