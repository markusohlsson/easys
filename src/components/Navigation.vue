<template>
  <nav class="navigation">
    <section class="navigation-section logo">
      <h1>Easys Redovisning</h1>
    </section>
    <section class="navigation-section links">
      <ul class="navigation-links">
        <li>
          <router-link to="/">
            Hem
          </router-link>
        </li>
        <li>
          <router-link to="/tjanster">
            Tjänster
          </router-link>
        </li>
        <li>
          <router-link to="/om">
            Om
          </router-link>
        </li>
        <li>
          <router-link to="/kontakt">
            Kontakt
          </router-link>
        </li>
      </ul>
    </section>
    <section class="navigation-section cta">
      <router-link
        to="/kom-igang"
        class="cta-button"
      >
        Kom igång
      </router-link>
    </section>
  </nav>
</template>

<style>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2.5rem; /* a bit more padding for breathing room */
  background-color: var(--color-surface);
  box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
}

.logo h1 {
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.75rem; /* slightly bigger */
  letter-spacing: -0.5px; /* tighter for elegance */
}

.navigation-links {
  display: flex;
  list-style: none;
  gap: 2.5rem; /* more spacing between links */
  padding-left: 0;
}

.navigation-links li a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem; /* increased font size */
  letter-spacing: 0.2px;
  transition: color 0.3s;
}

.navigation-links li a:hover {
  color: var(--color-primary);
}

.cta-button {
  background-color: var(--color-primary);
  color: var(--color-button-text);
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem; /* bigger CTA */
  text-decoration: none;
  transition: background 0.3s, color 0.3s, transform 0.2s;
}

.cta-button:hover {
  background-color: var(--color-primary-dark);
  color: var(--color-button-text);
  transform: translateY(-2px); /* subtle hover lift */
}
</style>