<template>
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
</template>
<script setup>
</script>

<style scoped>
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

@media screen and (max-width: 768px) {
  .bl-image img {
    max-width: 200px;
    height: auto;
  }
  .bl-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bl-intro h2 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .bl-intro p {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
</style>