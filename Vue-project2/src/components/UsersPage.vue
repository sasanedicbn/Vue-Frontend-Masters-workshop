<script>
export default({
    data: () => {
        return{
            usersList:[]
        }
    },
    methods:{
        async fetchUserList()  {
         this.usersList = await fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
        }
    },
    created() {
      this.fetchUserList()
    }
})
</script>

<template>
 <div>
   <ul>
     <li v-for="(user, index) of usersList" :key="index">{{ usersList }}</li>
   </ul>
 </div>
</template>

<style>
</style>