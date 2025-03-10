<template>
 <div>
  <h2>Display Charachters</h2>
  <ul>
    <!-- <li v-for="(char, index) of characthers" :key="index">{{ char }}</li> -->
     <li v-for="(fav, index) of favouritePokemons">-{{ fav }}</li>
     <p v-if="favouritePokemons.length === 0">You dont have yet fav pokemon?</p>
  </ul>
  <!-- <button @click="$emit('change-name')">OVDJE</button>
  <button @click="$emit('change-message')"> Change message</button> -->
  <CharactherCard :pokemon="names" @pokemon-emits="handlePokemonEmits"/>

 </div>
</template>

<script>
import BaseButton from './Base-button.vue';
import CharactherCard from './CharactherCard.vue';

export default{
    data() {
     return{
      names:['Re', 'Ale', 'Ole', 'Sanu', 'Oktagon'],
      favouritePokemons:[]
      }
    },
    props:{
        characthers:{
            type: Array,
            required: true,
        }
    },
    emits: ["change-name", "change-message", "pokemon-emits"],
    methods:{
      handlePokemonEmits(pokemon) {
        console.log('Primljeni podaci iz child komponente:', pokemon);
        this.favouritePokemons.push(pokemon)
      }
    },
    components: {
        CharactherCard,
        BaseButton
    }
}
</script>

