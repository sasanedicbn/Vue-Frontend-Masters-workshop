<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from 'vue'; 

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => {
      return ['default', 'success', 'warning'].includes(value);
    },
  },
});

// Computed svojstvo za dinamičke klase
const buttonClass = computed(() => {
  return `btn btn-${props.type}`;
});
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn-default {
  background-color: #ccc;
  color: #000;
}

.btn-success {
  background-color: #42b983;
  color: #fff;
}

.btn-warning {
  background-color: #ffcc00;
  color: #000;
}
</style>