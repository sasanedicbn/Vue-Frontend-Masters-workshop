<template>
  <p>{{ user.name }}: {{ user.id }}</p>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true,
    }
})    
    
</script>

<style>

</style>
<!-- next => learn about composables -->