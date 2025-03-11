
<script>
import BaseLayout from './Base-Layout.vue';
import CharactherList from './CharactherList.vue';
import GridLayout from './Grid-Layout.vue';

export default {
  components: {
    CharactherList,
    BaseLayout,
    GridLayout
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
    <GridLayout>
      <template v-slot:one>
        <h4>Hello from my frist Vue component</h4>
      </template>
    </GridLayout>
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
