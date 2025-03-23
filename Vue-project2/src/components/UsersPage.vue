<template>
  <div>
    <h2>List of users</h2>
    <ul>
      <li v-for="user in usersData" :key="user.id">
        <UserCard :user="user" />
      </li>
    </ul>
    <div>
      <p>{{ increment1 }} Increment1</p>
    </div>
    <div>
       <button v-on:click="incrementCounter1">Increment 1</button>
    </div>
    <div>
      <button v-on:click="incrementCounter2">Increment 2</button>
      <p>{{ increment2 }} Increment2</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserCard from './UserCard.vue';
import controlData from '../composables/countStore';
import {usersData} from '../composables/usersStore'

    const {innerValue:increment1 ,incrementCounter: incrementCounter1 } = controlData()
    const {innerValue:increment2 ,incrementCounter: incrementCounter2  } = controlData()
 

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
   
    usersData.value = await fetchUserList()
  

</script>

<style scoped>
button{
  border: 5px solid red;
  margin: 10px;
}
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