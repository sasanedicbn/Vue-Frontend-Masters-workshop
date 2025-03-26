<script setup>
const props = defineProps({
  pokemon: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <ul>
    <li v-for="(fav, index) in pokemon" :key="index">- {{ fav.name }}</li>
  </ul>
</template>
