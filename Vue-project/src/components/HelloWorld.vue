
<script>
import CharactherList from './CharactherList.vue';

export default {
  components: {
    CharactherList
  },
  data(){
    return{
    counter:0,
    errorMessage:'Ooops, you cant go in negative numbers',
    characthers: ['Jovan', 'Ilija', 'Radovan', 'Sasa'],
    message: 'Sasa'
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
    changeName(){
     this.message = 'Sasa Nedic'
    }
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
  <p>With emit {{ message }}</p>
 <CharactherList :characthers="characthers" @change-name="changeName"/>
</template>
