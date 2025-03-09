
<script>
import CharactherList from './CharactherList.vue';

export default {
  components: {
    CharactherList
  },
  data(){
    return{
    errorMessage:'Ooops, you cant go in negative numbers',
    characthers: ['Jovan', 'Ilija', 'Radovan', 'Sasa'],
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
  <h4>Hello from my frist Vue component</h4>
  <button @click="increaseCounter">+</button>
  <button @click="decreaseCounter">-</button>
  <hr>
 <CharactherList :characthers="characthers" />
</template>
