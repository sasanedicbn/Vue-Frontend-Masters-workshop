<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import HelloWorld from "./views/HelloWorld.vue";
import Pokedex from "./views/Pokedex.vue";

const pokemon = ref([1, 2, 3]);

const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    pokemon.value = data.results;
  } catch (error) {
    console.error("Greška pri dohvaćanju Pokémona:", error);
  }
};
onMounted(() => {
  fetchPokemon();
});
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Go to Home</RouterLink></li>
      <li><RouterLink to="/pokedex">Go to Pokedex</RouterLink></li>
    </ul>
  </nav>

  <RouterView :pokemon="pokemon" />
</template>

<style scoped></style>
<!-- https://pokeapi.co/api/v2/pokemon?limit=151 -->
