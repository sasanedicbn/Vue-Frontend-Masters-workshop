
<script>
import BaseLayout from './Base-Layout.vue';
import CharactherList from './CharactherList.vue';

export default {
  components: {
    CharactherList,
    BaseLayout
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
<BaseLayout>
  <template v-slot:header>
    <h4>Hello from my frist Vue component</h4>
  </template>
  <template v-slot:main>
    <button @click="increaseCounter">+</button>
    <button @click="decreaseCounter">-</button>
  </template>
  <template v-slot:footer>
    <CharactherList :characthers="characthers" />
  </template>
</BaseLayout>
</template>
