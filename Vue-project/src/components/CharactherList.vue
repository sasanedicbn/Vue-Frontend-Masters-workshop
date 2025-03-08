<template>
 <div>
  <h2>Display Charachters</h2>
  <ul>
    <li v-for="(char, index) of characthers" :key="index">{{ char }}</li>
  </ul>
  <button @click="$emit("change-name")">OVDJE</button>
 </div>
</template>

<script>
export default{
    props:{
        characthers:{
            type: Array,
            required: true,
        }
    },
    emits: ["change-name"],
}
</script>

