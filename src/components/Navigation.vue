<script setup>
import { BarChart } from 'lucide-vue-next';
</script>

<template>
  <nav class="navigation">
    <section class="navigation-section logo">
      <h1 class="nav-logo"><BarChart class="nav-logo-icon"/>Easy's Redovisning</h1>
    </section>
    <section class="navigation-section links">
      <ul class="navigation-links">
        <li><router-link to="/">Hem</router-link></li>
        <li class="divider"></li>
        <li><router-link to="/tjanster">Tjänster</router-link></li>
        <li class="divider"></li>
        <li><router-link to="/om">Om</router-link></li>
        <li class="divider"></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
    </section>
    <section class="navigation-section cta">
      <router-link to="/kontakt" class="cta-button">Kontakta oss</router-link>
    </section>
  </nav>
</template>

<style scoped>
.nav-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-logo-icon {
  height: 28px;
  width: 28px;
  color: var(--color-primary);
}
.navigation-links li a::after {
  content: "";
  position: absolute;
  bottom: -4px; /* space below text */
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}
.navigation-links li a:hover::after {
  transform: translateX(-50%) scaleX(1); /* expand underline */
}

.divider {
  content: " ";
  height: 20px;
  width: 2px;
  background-color: white;
}
.navigation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem; /* top & bottom padding */
}

.navigation-links .router-link-active:not(.cta-button) {
  color: var(--color-primary) !important;
}

.logo h1 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: -0.5px;
}

.navigation-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  padding-left: 0;
}

.navigation-links li a {
  position: relative; 
  display: inline-block;
  color: var(--color-text-light);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.2px;
  transition: color 0.3s;
}

.navigation-links li a:hover {
  color: var(--color-primary);
}
</style>
