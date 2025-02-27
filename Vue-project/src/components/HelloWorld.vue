
<script>
export default {
  data(){
    return{
    counter:0,
    errorMessage:'Ooops, you cant go in negative numbers'
  }
  },
  methods:{
    increaseCounter(){
      this.counter++
    }
    decreaseCounter(){
      if(this.counter > 0){
        this.counter--
      } else{

      }
    }
  }
}
</script>

<template>
  <h1>Hello from my frist Vue component</h1>
  <button @click="increaseCounter">+</button>
  <button @click="increaseCounter">+</button>
  
  <span>{{ counter }}</span>
</template>
