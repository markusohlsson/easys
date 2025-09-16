<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { BarChart, Menu, X, Home, Layers, Info, HelpCircle, Contact} from 'lucide-vue-next';
import { useRoute } from 'vue-router';
const route = useRoute();

const darkNav = ['Home'];
const width = ref(window.innerWidth)
const menuOpen = ref(false);

function handleResize() {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const isMobile = computed(() => width.value < 768)

const navClass = computed(() => {
  if (menuOpen.value && darkNav.includes(route.name)) {
    return 'open';
  } else {
    return 'closed';
  }
});
</script>

<template>
  <nav class="navigation" v-if="isMobile" :class="navClass">
  <section class="navigation-section logo">
          <h1 class="nav-logo"><BarChart class="nav-logo-icon"/><router-link to="/" >Easy's Redovisning</router-link></h1>
  </section>
  <section>
      <div class="icon-container">
        <Menu v-if="!menuOpen" @click="menuOpen = true" class="menu-icon"/>
        <X v-else @click="menuOpen = false" class="menu-icon"/>
      </div>
      <transition name="slide-fade">
        <ul class="navigation-links" v-if="menuOpen" :class="menuOpen ? 'open' : 'closed'">
          <li><router-link to="/"><Home />Hem</router-link></li>
          <li><router-link to="/tjanster"><Layers/>Tjänster</router-link></li>
          <li><router-link to="/om"><Info/>Om</router-link></li>
          <li><router-link to="/faq"><HelpCircle/>FAQ</router-link></li>
          <li><router-link to="/kontakt"><Contact />Kontakta oss</router-link></li>
        </ul>
      </transition>
  </section>
  </nav>
  <nav class="navigation" v-else>
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

@media screen and (max-width: 768px) {
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-25%);
    opacity: 0;
  }
  .navigation-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    width:100%;
    text-align: center;
    gap: 10px;
    align-items: center;
    background: rgba(15, 23, 42, 0.473); 
    backdrop-filter: blur(4px);
    padding-top: 20px;
    padding-bottom:20px;
  }
  .navigation-links li {
    width: 100%;
  }
  .navigation-links li a {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
  }
  .menu-icon {
    height:30px;
    width:30px;
    color: var(--color-primary);
  }
  .navigation {
    padding: 0rem 1.5rem;
  }
  .nav-logo a {
    color:inherit;
    text-decoration: none;
  }
  .open {
    background: rgba(15, 23, 42, 0.473) !important; 
  }
  .icon-container {
    height: 30px;
    width:30px;
  }
}
</style>
