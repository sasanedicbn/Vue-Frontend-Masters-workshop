<template>
 <div>
  <h2>Display Charachters</h2>
  <ul>
    <li v-for="(char, index) of characthers" :key="index">{{ char }}</li>
  </ul>

 </div>
</template>

<script>
export default{
    props:{
        characthers:{
            type: Array,
            required: true,
        }
    }
}
</script>

