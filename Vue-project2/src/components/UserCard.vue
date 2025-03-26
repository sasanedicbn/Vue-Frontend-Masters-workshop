<template>
  <router-link :to="`/users/${user.name}`">
    <p>{{ user.name }}: {{ user.id }}</p>
  </router-link>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
