<script setup>
import { ref, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Pokedex from "./Pokedex.vue";

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
  <HelloWorld />
  <h2>New App</h2>
  <Pokedex :pokemon="pokemon" />
</template>

<style scoped></style>
<!-- https://pokeapi.co/api/v2/pokemon?limit=151 -->
