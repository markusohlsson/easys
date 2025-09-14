<template>
  <section class="footer">
    <div>
      <h1>Easy's Redovisning</h1>
    </div>
    <div>
      <ul class="footer-links">
        <li>Privacy Policy</li>
        <li>Terms Of Services</li>
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
    gap:20px;
}
</style>