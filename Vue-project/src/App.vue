<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue';

export default {
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      pokemon: [1, 2, 3]
    };
  },
  methods:{
    async fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    this.pokemon = data.results;
   },
  },
  created(){
    this.fetchPokemon()
  },
};
</script>

<template>
  <!-- <HelloWorld/> -->
  <h2>New App</h2>
  <ul>
    <li v-for="(fav, index) in pokemon" :key="index">-{{ fav }}</li>
  </ul>
</template>

<style scoped>
</style>
<!-- https://pokeapi.co/api/v2/pokemon?limit=151 -->







