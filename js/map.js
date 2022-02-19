const mapDiv = document.getElementById('map');
const infoPageFrame= document.getElementsByName('info-page')[0];

let map;
var markers = [];
var activeInfoWindow;

function initMap() {
  let mapProperties = {
    mapId: "b65c17b9e5891450",
    center: {lat: 40.19114241107592, lng: -85.38653861373},
    zoom: 15,
    mapTypeControl: false,
    gestureHandling: "greedy",
  }

  this.map = new google.maps.Map(document.getElementById("map"), mapProperties);

  fetch("../locations/locations.json")
    .then(response => response.json())
    .then(locations => createMarkersForAll(locations));
  
  this.map.addListener("click", () => {
    activeInfoWindow&&activeInfoWindow.close();
  });
}

function createMarkersForAll(locations) {
  locations.forEach(createMarkerForOne);
}

function createMarkerForOne(location) {
  const marker = new google.maps.Marker({
    position: location.position,
    draggable: false,
    map: this.map,
  });

  infoWindowContent =
  `<div class="info-window">
    <h2 class="info-window__header">${location.name}</h2>
    <p class="info-window__description">${location.description}</p>
    <a class="info-window__infolink" href="/locations/${location.infopage}" target="info-page" onclick="openInfoPage()">More info</a>
  </div>`;

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });

  marker.addListener("click", () => {
    activeInfoWindow&&activeInfoWindow.close();
    infoWindow.open(map, marker);
    activeInfoWindow = infoWindow;
  });

  markers.push(marker);
}

function openInfoPage() {
  mapDiv.style.display = "none";
  infoPageFrame.style.display = "block";
}

function returnToMap() {
  infoPageFrame.style.display = "none";
  mapDiv.style.display = "block";
}