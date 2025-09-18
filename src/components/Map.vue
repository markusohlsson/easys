<script setup>
import { ref, onMounted } from 'vue';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const center = [59.4500312, 18.2530396]; 
const zoom = ref(8); 
const targetZoom = 12; 
const duration = 1.5;

// Function to get CSS variable dynamically
function getCssVariable(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

// Create a dynamic SVG marker icon based on --color-primary
function createColoredMarker() {
  const fillColor = getCssVariable('--color-primary') || '#D9A066'; // fallback color

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="24" height="40" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 10.5 12 28 12 28s12-17.5 12-28c0-6.627-5.373-12-12-12z"
              fill="${fillColor}"/>
        <circle cx="12" cy="12" r="5" fill="white"/>
      </svg>
    `,
    iconSize: [24, 40],
    iconAnchor: [12, 40], // bottom point of marker
    popupAnchor: [0, -40],
  });
}

function onMapReady(map) {
  const marker = L.marker(center, { icon: createColoredMarker() })
    .addTo(map)
    .bindPopup('Valsättravägen 27, 184 94 Åkersberga')
    .openPopup();

  map.flyTo(center, targetZoom, { duration });
}
</script>

<template>
  <section class="map-container">
    <LMap
      :zoom="zoom"
      :center="center"
      style="height:400px; width:100%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
      @ready="onMapReady"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
      />
    </LMap>
  </section>
</template>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Optional: style for the SVG marker wrapper */
.custom-marker svg {
  display: block;
}
</style>
