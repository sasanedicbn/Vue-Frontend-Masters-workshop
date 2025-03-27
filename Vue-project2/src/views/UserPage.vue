<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <h2>Hello from User => {{ route.params.name }}</h2>
</template>
