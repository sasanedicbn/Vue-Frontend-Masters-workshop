<template>
 <div>
  <h2>Display Charachters</h2>
  <ul>
    <!-- <li v-for="(char, index) of characthers" :key="index">{{ char }}</li> -->
  </ul>
  <!-- <button @click="$emit('change-name')">OVDJE</button>
  <button @click="$emit('change-message')"> Change message</button> -->
  <p>ISPOD</p>
  <CharactherCard :pokemon="names"/>
 </div>
</template>

<script>
import CharactherCard from './CharactherCard.vue';

export default{
    data() {
     return{
      names:['Re', 'Ale', 'Ole', 'Sanu', 'Oktagon'],
      pokemons:[]
      }
    },
    props:{
        characthers:{
            type: Array,
            required: true,
        }
    },
    emits: ["change-name", "change-message"],
    components: {
        CharactherCard
    }
}
</script>

