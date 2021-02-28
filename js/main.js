(function() {

  'use strict'

  /*alert("Entre ....");*/

  var map = L.map('mapa').setView([-29.970685, -71.261015], 17);



  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  }).addTo(map);



  L.marker([-29.970685, -71.261015]).addTo(map)

    .bindPopup('Calle Parque Nacional Hornopirén 560')

    .openPopup();

})();