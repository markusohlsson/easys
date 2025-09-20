<template>
  <form class="contact-form">
    <div class="contact-form-row">
      <input
        id="name"
        type="text"
        name="name"
        class="contact-form-input"
        placeholder=" "
      >
      <label
        for="name"
        class="contact-form-label"
      >Namn</label>
    </div>

    <div class="contact-form-row">
      <input
        id="email"
        type="email"
        name="email"
        class="contact-form-input"
        placeholder=" "
      >
      <label
        for="email"
        class="contact-form-label"
      >E-post</label>
    </div>

    <div class="contact-form-row">
      <input
        id="subject"
        type="text"
        name="subject"
        class="contact-form-input"
        placeholder=" "
      >
      <label
        for="subject"
        class="contact-form-label"
      >Ämne</label>
    </div>

    <div class="contact-form-row">
      <textarea
        id="message"
        name="message"
        class="contact-form-textarea"
        placeholder=" "
      />
      <label
        for="message"
        class="contact-form-label textarea-label"
      >Meddelande</label>
    </div>

    <button
      type="submit"
      class="cta-button"
    >
      Skicka
    </button>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
}

.contact-form-row {
  position: relative;
  width: 100%;
}

.contact-form-input,
.contact-form-textarea {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 16px;
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.5rem;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.contact-form-input:focus,
.contact-form-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
  outline: none;
}

.contact-form-textarea {
  min-height: 150px;
  resize: vertical;
  padding-top: 22px;
  line-height: 1.4rem;
}

.contact-form-label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color: var(--color-text-light);
  pointer-events: none;
  transition: all 0.25s ease;
  padding: 0 2px;
}

.contact-form-label.textarea-label {
  top: 16px;
  transform: none;
}

.contact-form-input:focus + .contact-form-label,
.contact-form-textarea:focus + .contact-form-label,
.contact-form-input:not(:placeholder-shown) + .contact-form-label,
.contact-form-textarea:not(:placeholder-shown) + .contact-form-label {
  top: -20px;
  left: 12px;
  transform: none;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary);
}

</style>
