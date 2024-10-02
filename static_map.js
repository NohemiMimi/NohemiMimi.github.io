let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.85338845158649, lng: -102.7298880974889 },
    zoom: 18,
  });

  new google.maps.Marker({
    position: map.getCenter(),
    map,
  });
}

initMap();

