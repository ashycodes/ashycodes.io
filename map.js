



// Initialize and add the map
function initMap() {
    // The location of Uluru
    const met = { lat: 32.93777369510322, lng: -97.30827204986383 }; 
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: met,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: met,
      map: map,
    });
  }
  
  window.initMap = initMap;