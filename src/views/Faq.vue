<script setup>
import { ChevronDown } from 'lucide-vue-next';
</script>

<template>
    <section class="hero-container">
        <div class="text-container">
            <h1>Frequently Asked Questions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga esse obcaecati libero explicabo voluptatem error temporibus, facilis voluptas consequuntur placeat in, qui repellendus delectus at iste doloremque. Ex, iure.</p>
        </div>
    </section>
    <div class="container-wrap">
        <details>
            <summary><h3>Vad är ert företag specialiserat på?</h3><ChevronDown class="icon"/></summary>
            <div class="divider"></div>
            <p>Vi erbjuder bokföring, skatteplanering och ekonomisk rådgivning för små och medelstora företag.</p>
        </details>
            <details>
      <summary>
        <h3>Hur kan jag boka en konsultation?</h3>
        <ChevronDown class="icon" />
      </summary>
      <div class="divider"></div>
      <p>Du kan boka en konsultation via vårt kontaktformulär på hemsidan eller ringa oss direkt på 012-345678.</p>
    </details>

    <details>
      <summary>
        <h3>Vilka tjänster erbjuder ni?</h3>
        <ChevronDown class="icon" />
      </summary>
      <div class="divider"></div>
      <p>Vi erbjuder tjänster som bokföring, löneadministration, deklaration och ekonomisk rådgivning anpassad efter småföretag.</p>
    </details>

    <details>
      <summary>
        <h3>Hur snabbt kan jag få hjälp?</h3>
        <ChevronDown class="icon" />
      </summary>
      <div class="divider"></div>
      <p>Vi försöker alltid återkoppla samma dag eller inom 24 timmar beroende på ärendets art.</p>
    </details>
    </div>
</template>

<style scoped>
.container-wrap {
    margin: 0 auto;
    max-width: 1100px;
    padding:2rem;
}
details {
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 1rem;
  background-color: var(--color-background-light);
  color: var(--color-text);
}

summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  color:var(--color-text-light);
}

.divider {
    height: 1px;
    width: 90%;
    margin: 0 auto;
    content: " ";
    background-color: var(--color-border);
}
.icon {
  width: 2rem;
  height: 2rem;
  stroke: var(--color-primary);
  transition: transform 0.3s;
}

details[open] .icon {
  transform: rotate(180deg); /* flips the icon when open */
}

details p {
  padding: 1.5rem;
  margin: 0;
  color: var(--color-text);
}
.hero-container {
    height:60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-dark);
    color: var(--color-text-light)
}
.text-container {
    max-width: 1000px;
    text-align: center;
}

.text-container h1 {
    font-family: var(--font-heading);
    font-size: 3rem; /* slightly larger for emphasis */
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text-light);
}

.text-container p {
    font-family: var(--font-body);
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--color-text);
}
</style>