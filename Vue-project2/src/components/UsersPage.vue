<template>
  <div>
    <h2>List of users</h2>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        <UserCard :user="user" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserCard from './UserCard.vue';

 
    const usersList = ref([]);
    console.log(usersList)

    const fetchUserList = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      } catch (error) {
        console.error('Greška pri dohvatu korisnika:', error);
      }
    };
   
    usersList.value = await fetchUserList()
  

</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f4f4f4;
  margin: 5px 0;
  border-radius: 5px;
}
</style>