<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default Leaflet icon path for Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});
// Example coordinates
const center = [59.4500312, 18.2530396]; // Stockholm
const zoom = ref(8); // Start zoom
const targetZoom = 12; // End zoom
const duration = 1.5; // seconds

function onMapReady(map) {
  // Smoothly fly to the same center but with target zoom
  L.marker(center)
  .addTo(map)
  .bindPopup('Valsättravägen 27, 184 94 Åkersberga')
  .openPopup();

  map.flyTo(center, targetZoom, { duration });
}
</script>

<template>
  <LMap
    :zoom="zoom"
    :center="center"
    style="height:400px; width:100%; border-radius:12px;box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
    @ready="onMapReady"
  >
    <LTileLayer
      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      attribution='&copy; OpenStreetMap contributors &copy; CARTO'
    />
    <LMarker :lat-lng="center" />
  </LMap>
</template>
