<template>
    <section class="hero">
      <div class="hero-content">
      <h1>Easy's Redovisning</h1>
      <p>Din trygga partner inom bokföring, bokslut och skatterådgivning sedan 1994.</p>
      <router-link
        to="/kontakt"
        class="cta-button"
      >
        Kontakta oss
      </router-link>
    </div>
    <span class="credit"><a href="https://unsplash.com/@sadswim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ian dooley</a> on <a href="https://unsplash.com/photos/cup-of-coffee-near-macbook-pro-DJ7bWa-Gwks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>
    </section>
</template>
      

<style scoped>
.credit {
  position: absolute;
  right: 10px;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s;
}
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
.hero:hover .credit {
  opacity: 1;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;

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
  font-size: clamp(2.5rem, 5vw, 4rem);
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
  color: var(--color-text);
  text-shadow: 0 1px 4px rgb(0 0 0 / 40%);
}

@media screen and (max-width: 768px){
}
</style>
