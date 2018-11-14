const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoidmljbTE1OSIsImEiOiJjam9nZW92bmIwZWg0M3dwZmF4eWc4bzZtIn0.Su7-95lcAKVfmIbRC-jZVQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-120.659, 35.286], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-120.7, 35.3]).addTo(map);

const markerDomEl1 = document.createElement('div'); // Create a new, detached DIV
markerDomEl1.style.width = '32px';
markerDomEl1.style.height = '39px';
markerDomEl1.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';

new mapboxgl.Marker(markerDomEl1).setLngLat([-120.6747, 35.2674]).addTo(map);

const markerDomEl2 = document.createElement('div'); // Create a new, detached DIV
markerDomEl2.style.width = '32px';
markerDomEl2.style.height = '39px';
markerDomEl2.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl2)
  .setLngLat([-120.840357, 35.328646])
  .addTo(map);
