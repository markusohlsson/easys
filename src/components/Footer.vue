<template>
  <section class="footer">
    <div>
      <h1>Easys Redovisning</h1>
    </div>
    <div>
      <ul class="footer-links">
        <li>Privacy Policy</li>
        <li>Terms Of Services</li>
      </ul>
    </div>
    <div>
      <span>© 2025 Easys Redovisning</span>
    </div>
  </section>
</template>

<style scoped>
.footer {
    background-color: var(--color-primary-dark);
    color: var(--color-text-light);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.footer div h1 {
    color: var(--color-text-light);
}

.footer-links {
    display: flex;
    list-style-type: none;
    gap:20px;
}
</style>