<template>
  <p>{{ user.name }}: {{ user.id }}</p>
</template>

<script>
export default{
    name:'UserCard',
    props:{
       user: {
        type: Object,
        required: true,
       }
    }
}
</script>

<style>

</style>