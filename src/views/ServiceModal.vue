<template>
  <div v-if="visible" class="modal-backdrop" @click.self="close">
        <section class="modal" 
            :style="modalStyle"
            >
        <div class="icon-bg" v-if="icon">
        <component :is="icon" class="icon-svg" />
        </div>
        <span class="close-btn" @click="close"><X/></span>
        <h1>{{ service.title }}</h1>
        <p>{{ service.longDesc }}</p>
        <ul class="keypoints">
            <li v-for="(keypoint, index) in service.keyPoints" :key="index">
            <Check class="icon-check"/> {{ keypoint }}
            </li>
        </ul>
        </section>
  </div>
</template>

<script setup>
import { Check, X } from 'lucide-vue-next';
import { ref, nextTick, computed, watch } from 'vue';

const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: () => ({ id: '', title: '', longDesc: '', keyPoints: [] })
  },
  visible: {
    type: Boolean,
    required: true
  },
  icon: {
    type: [Object, Function],
    default: () => null
  },
  startPosition: {
    type: Object,
    default: null
  }
});
const emit = defineEmits(['close']);

const isClosing = ref(false);

function close() {
  if (!props.startPosition) {
    emit('close'); // fallback
    return;
  }

  // Start "shrink back" animation
  const modalEl = document.querySelector('.modal'); // or use ref
  const { top, left, width, height } = props.startPosition;

  modalEl.style.transition = 'all 0.4s ease';
  modalEl.style.top = `${top}px`;
  modalEl.style.left = `${left}px`;
  modalEl.style.width = `${width}px`;
  modalEl.style.height = `${height}px`;
  modalEl.style.transform = 'none';
  modalEl.style.opacity = 0.1;

  // Wait for transition to finish, then emit close
  modalEl.addEventListener(
    'transitionend',
    () => {
      emit('close');
    },
    { once: true }
  );
}

const startStyle = computed(() => {
  if (!props.startPosition) return {};
  return {
    top: props.startPosition.top + "px",
    left: props.startPosition.left + "px",
    width: props.startPosition.width + "px",
    height: props.startPosition.height + "px",
    opacity: 0.1,
    position: "fixed",
  };
});

const modalStyle = ref({ ...startStyle.value });

watch(() => props.visible, async (val) => {
  if (val) {
    if (props.startPosition) {
      // Animate from card
      modalStyle.value = { ...startStyle.value };

      await nextTick();
      setTimeout(() => {
        modalStyle.value = {
          top: '50%',
          left: '50%',
          width: '70vw',
          maxWidth: '800px',
          height: '60vh',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          opacity: 1,
          transition: 'all 0.4s ease',
        };
      }, 20);
    } else {
      // Direct route load fallback (open immediately with final style)
      modalStyle.value = {
        top: '50%',
        left: '50%',
        width: '70vw',
        maxWidth: '800px',
        height: '60vh',
        transform: 'translate(-50%, -50%)',
        position: 'fixed',
        opacity: 1,
      };
    }
  }
}, { immediate: true });
</script>

<style scoped>
.modal :deep(h1) {
    color: #0f172A;
}
.modal :deep(p) {
    color: #64748B;
}
.modal :deep(li) {
    color: #64748B;
}
.modal :deep(.close-btn) {
    color: #0f172A;
    transition: background 0.3s ease, color 0.4s ease;
    border-radius:50%;
}
.modal:deep(.close-btn):hover {
    color: var(--color-primary);
    background-color: #0f172A;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  overflow-y: auto;
  border-radius: 10px;
  position: relative;
  text-align: center;
  position:fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal p {
    width:80%;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  height: 25px;
  width:25px;
  padding:3px;
}

.keypoints {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap:10px;
}

.keypoints li {
    display: flex;
    justify-content: start;
    align-items: center;
    gap:5px;
}
.icon-check {
    color: var(--color-primary);
    height:25px;
    width:25px;
    border-radius:50%;
    background-color: var(--color-icon-bg);
    padding:3px;
}
.icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Clicks go through */
  z-index: 0;
}

.icon-bg .icon-svg {
  width: 12rem;       /* Size of the background icon */
  height: 12rem;
  opacity: 0.07;      /* Subtle */
  color: #0f172A;     /* Lighter color */
}
</style>
