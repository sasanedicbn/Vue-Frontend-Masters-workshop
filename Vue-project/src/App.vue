<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue';

export default {
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      pokemon: [1,2,3]
    }
  },
};
</script>

<template>
  <!-- <HelloWorld/> -->
   <h2>New App</h2>
  <ul>
    <li v-for="(fav, _) of pokemon" >{{ fav }}</li>
  </ul>
</template>

<style scoped>
/* Stilovi */
</style>








