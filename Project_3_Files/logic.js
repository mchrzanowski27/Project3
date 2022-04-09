// Creating the map object
var myMap = L.map("map", {
  center:[48.01, 34.01],
  zoom: 6,
});

// Adding the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

function getradius(fatality) {
  if (fatality> 30){
    return 55
  }
  else if (fatality>=5){
    return 35
  }
  else if (fatality>=1){
    return 18
  }
  else {
    return 7
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
      <br /<b>Event:</b> ${feature.properties.SUB_EVENT_TYPE} <br /<b>Actor:</b> ${feature.properties.ACTOR1}`)

      // marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.", {maxWidth: 500});
    }
  }).addTo(myMap);

   // Set up the legend.
   var legend = L.control({position: 'bottomleft'});
   legend.onAdd = function (map) {

   var div = L.DomUtil.create('div', 'info legend');
   labels = ['<strong>Event Catagory</strong>'],
   categories = ['Explosions','Battles','Violence against civilians','Strategic developments'];

   for (var i = 0; i < categories.length; i++) {

           div.innerHTML += 
           labels.push(
              '<i class="circle" style="background:' + getcolor(categories[i]) + '"></i> ' +
           (categories[i] ? categories[i] : '+'));
          }
        div.innerHTML = labels.join('<br>');
   return div;
   };
   legend.addTo(myMap);
 
});


