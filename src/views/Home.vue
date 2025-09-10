<script setup lang="ts">
import Hero from '../components/Hero.vue';
import { ClipboardListIcon, BookOpenIcon, UserCheckIcon, FileTextIcon } from 'lucide-vue-next';
import Card from '../components/Card.vue';
</script>

<template>
  <Hero />

  <!-- Services Section -->
  <section class="services">
    <div class="container">
      <h2>Tjänster</h2>
      <div class="services-grid">
        <Card 
          class="card-large"
          title="Kund- & Leverantörsreskontra" 
          description="Vi registrerar och hanterar dina kund- och leverantörsfakturor, kontrollerar betalningar och skickar påminnelser vid behov."
          :icon="ClipboardListIcon"
        />
        <Card 
          class="card-small"
          title="Bokföring"
          description="Löpande bokföring och redovisning till Skatteverket, inklusive moms och rapportering."
          :icon="BookOpenIcon" 
        />
        <Card 
          class="card-small"
          title="Löner"
          description="Fullständig lönehantering för dina anställda, inklusive kontrolluppgifter och rapportering."
          :icon="UserCheckIcon"
        />
        <Card 
          class="card-large"
          title="Bokslut & Årsredovisning"
          description="Upprättande av bokslut och årsredovisning med genomgång och förklaringar för ditt bolag."
          :icon="FileTextIcon"
        />
      </div>
      <div class="services-cta">
        <router-link
          to="/tjanster"
          class="cta-button"
        >
          Se alla tjänster
        </router-link>
      </div>
    </div>
  </section>

  <!-- Björn Lunden Trusted Section -->
  <section class="bl-trusted">
    <div class="container">
      <div class="bl-header">
        <div class="bl-image">
          <a
            href="https://www.bjornlunden.se/hitta-din-redovisningsbyr%c3%a5/bjorn-lunden-certifierad-redovisningsbyr__4117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/img/bl.png"
              alt="Björn Lunden-certifierad"
            >
          </a>
        </div>
        <div class="bl-intro">
          <h2>Björn Lunden-certifierad redovisningsbyrå</h2>
          <p>Som en certifierad byrå är vi en trygg partner som säkerställer att ditt företags redovisning alltid sköts korrekt och modernt.</p>
        </div>
      </div>

      <div class="bl-benefits-grid">
        <div class="benefit">
          <h3>Kontinuerligt uppdaterade</h3>
          <p>Våra medarbetare genomgår regelbundet utbildningar för att alltid ge bästa rådgivning.</p>
        </div>
        <div class="benefit">
          <h3>Effektiva digitala lösningar</h3>
          <p>Samarbeta i samma system och få direkt insyn i företagets ekonomiska situation.</p>
        </div>
        <div class="benefit">
          <h3>Trygghet och kontroll</h3>
          <p>Vi sköter bokföringen medan du kan fokusera på att utveckla ditt företag.</p>
        </div>
      </div>

      <div class="bl-cta">
        <router-link
          to="/kom-igang"
          class="cta-button"
        >
          Kom igång med oss idag
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== Services Section ===== */
.services {
  background-color: var(--color-background); /* light beige */
  color: var(--color-text);
  padding: 4rem 2rem;
  font-family: var(--font-body);
}

.services .container {
  max-width: 1100px;
  margin: 0 auto;
}

.services h2 {
  text-align: center;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-primary); /* deep green */
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card-large:nth-child(1) { grid-column: 1 / span 2; }
.card-small:nth-child(2) { grid-column: 3 / 4; }
.card-small:nth-child(3) { grid-column: 1 / 2; }
.card-large:nth-child(4) { grid-column: 2 / span 2; }

.services-cta {
  margin-top: 3rem;
  text-align: center;
}

.cta-button {
  background-color: var(--color-primary); /* deep green */
  color: var(--color-button-text); /* white */
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: background 0.3s;
}

.cta-button:hover {
  background-color: var(--color-primary-dark);
}

.services-cta .cta-button {
  background-color: var(--color-primary);
  color: var(--color-button-text);
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
}

.services-cta .cta-button:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}

/* ===== Björn Lunden Trusted Section ===== */
.bl-trusted {
  background-color: var(--color-background); /* white background */
  color: var(--color-text);
  padding: 4rem 2rem;
  font-family: var(--font-body);
}

.bl-trusted .container {
  max-width: 1100px;
  margin: 0 auto;
}

.bl-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bl-header:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 8%);
}

.bl-image {
  flex: 1;
  text-align: center;
  min-width: 200px;
}

.bl-image img {
  max-width: 250px;
  height: auto;
}

.bl-intro {
  flex: 2;
  min-width: 280px;
}

.bl-intro h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.bl-intro p {
  font-size: 1.125rem;
  line-height: 1.7;
}

.bl-benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.benefit {
  background-color: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
  text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.benefit:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 8%);
}

.benefit h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.benefit p {
  line-height: 1.6;
}

.bl-cta {
  text-align: center;
}
</style>
