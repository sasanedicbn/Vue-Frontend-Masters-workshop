<template>
 <button :class="buttonClass">
    {{ text }}
 </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props:{
    text:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        default: 'default',
        validatior: (value) =>{
            return ['defaut', 'success', 'warning'].includes(value)
        }
    }
  },
  computed: {
   buttonClass() {
    return `btn btn-${this.type}`
   }
  }
};
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.btn-success {
  background-color: #42b983;
  color: #fff;
}

.btn-warning {
  background-color: #ffcc00;
  color: #000;
}
</style>