<script setup>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const whiteBgRoutes = ['Home', 'About'];
const darkNavRoutes = ['About'];
const blueBtnRoutes = ['Home', 'About'];
</script>

<template>
  <Navigation 
    :class="{
      'dark-nav': darkNavRoutes.includes(route.name),
      'blue-btns': blueBtnRoutes.includes(route.name)
    }"
    />
  <div :class="{ 'white-bg': whiteBgRoutes.includes(route.name) }">
  <router-view />
  </div>
  <Footer />
</template>

<style scoped>
.white-bg {
  background-color: #FFF;
}

/* Apply styles to everything inside white-bg */
.white-bg :deep(h1),
.white-bg :deep(h2),
.white-bg :deep(h3),
.white-bg :deep(h4),
.white-bg :deep(h5),
.white-bg :deep(h6) {
  color: #0F172A;
}
.white-bg :deep(p),
.white-bg :deep(li),
.white-bg :deep(a),
.white-bg :deep(span) {
  color: #64748B;
}

.white-bg :deep(.service-card) {
  background-color: #F8FAFC;
}
.white-bg :deep(.service-card) {
  p {
    color: #64748B;
  }
  .icon {
    background-color: transparent;
    color: #0F172A;
  }
}

.white-bg :deep(.bl-header,), .white-bg :deep(.benefit) {
  background-color: #F8FAFC;
}

.white-bg :deep(.cta-button) {
  background-color: #0D47A1;
  color: #fff;
  transition: background 0.3s
}
.white-bg :deep(.cta-button):hover {
  background-color: #0a3474;
}

.white-bg :deep(.hero-container) {
  background-color: #fff;
  h1 {
    color: #0F172A;
  }
  p {
    color: #64748B;
  }
}
.white-bg :deep(.card-link) {
  color:#0D47A1;
}

.white-bg :deep(.container) {
  p {
    color: #64748B;
  }
}
.dark-nav {
  background-color: #0F172A;
}
.blue-btns :deep(.cta-button),
.dark-nav :deep(.cta-button) {
  background-color: #0D47A1;
  color: #fff;
  transition: background 0.3s;
}
.blue-btns :deep(.cta-button:hover),
.dark-nav :deep(.cta-button:hover) {
  background-color: #0a3474;
}
</style>
