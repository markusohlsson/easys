<template>
  <section class="footer">
    <div>
      <h1 class="footer-logo"><router-link to="/">Easy's Redovisning</router-link></h1>
    </div>
    <div>
      <ul class="footer-links">
        <li><router-link to="/integritetspolicy">Integritetspolicy</router-link></li>
      </ul>
    </div>
    <div>
      <span>© 2025 Easy's Redovisning</span>
    </div>
  </section>
</template>

<style scoped>
.footer {
    background-color: var(--color-background-dark);
    color: var(--color-text);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.footer div h1 {
    color: var(--color-text);
}

.footer-links {
    display: flex;
    list-style-type: none;
    padding-left: 0;
}
.footer-links li a {
  text-decoration: none;
}
.footer-links li a:hover {
  text-decoration: underline;
}
.footer-logo a{
text-decoration: none;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: -0.5px;
}
@media screen and (max-width:768px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer-links {
    padding-left: 0;
  }
  .footer-logo {
    margin-bottom: 0;
  }
}
</style>