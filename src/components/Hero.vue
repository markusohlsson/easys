<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Easys Redovisning</h1>
      <p>Din trygga partner inom bokföring, bokslut och skatterådgivning sedan 1994.</p>
      <router-link
        to="/kontakt"
        class="cta-button"
      >
        Kontakta oss
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('../assets/img/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;

  /* darker overlay for readability */
  background: rgb(0 0 0 / 55%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: var(--color-text-light);
  max-width: 800px;
  padding: 1.5rem;
}

.hero-content h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem); /* responsive */
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 2px 6px rgb(0 0 0 / 40%);
}

.hero-content p {
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #f1f5f9;
  text-shadow: 0 1px 4px rgb(0 0 0 / 40%);
}

.cta-button {
  background-color: var(--color-primary);
  color: var(--color-button-text);
  padding: 0.85rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: background 0.3s;
}

.cta-button:hover {
  background-color: var(--color-primary-dark);
}
</style>
