<script setup >
import Hero from '../components/Hero.vue';
import HomeServices from '../components/HomeServices.vue';
import Reviews from '../components/Reviews.vue';
</script>

<template>
  <Hero />
  <HomeServices />
  <!-- Björn Lunden Trusted Section -->
  <section class="bl-trusted">
    <div class="container">
      <div class="bl-header">
        <div class="bl-image">
            <img
              src="../assets/img/bl.png"
              alt="Björn Lunden-certifierad"
            >
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
          <a
          class="cta-button"
            href="https://www.bjornlunden.se/hitta-din-redovisningsbyr%c3%a5/bjorn-lunden-certifierad-redovisningsbyr__4117"
            target="_blank"
            rel="noopener noreferrer"
          >
          Läs mer hos Björn Lunden
          </a>
      </div>
    </div>
  </section>

  <Reviews />
</template>

<style scoped>
/* ===== Björn Lunden Trusted Section ===== */
.bl-trusted {
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
  background-color: var(--color-background-dark);
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
  background-color: var(--color-background-dark);
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
  margin-bottom: 0.5rem;
}

.benefit p {
  line-height: 1.6;
}

.bl-cta {
  text-align: center;
}
</style>
