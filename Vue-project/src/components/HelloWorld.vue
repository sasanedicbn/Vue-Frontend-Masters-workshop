
<script>
export default {
  data(){
    return{
    counter:0,
    errorMessage:'Ooops, you cant go in negative numbers',
    characters: ['Jovan', 'Ilija', 'Radovan', 'Sasa']
  }
  },
  methods:{
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      if(this.counter === 0) return
        this.counter--
    },
  }
}
</script>

<template>
  <h1>Hello from my frist Vue component</h1>
  <button @click="increaseCounter">+</button>
  <button @click="decreaseCounter">-</button>
  
  <span>{{ counter }}</span>
  <p v-if="counter === 0">{{ errorMessage }}</p>
  <hr>
  <h2>Display list</h2>
  <ul>
    <li v-for="(char, index) in characters" :key="index">{{ char }}</li>
  </ul>
</template>
