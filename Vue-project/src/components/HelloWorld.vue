
<script>
export default {
  data(){
    return{
    counter:0}
  },
  methods:{
    increaseCounter(){
      this.counter++
    }
  }
}
</script>

<template>
  <h1>Hello from my frist Vue component</h1>
  <button>+</button>
  <span>{{ counter }}</span>
</template>
