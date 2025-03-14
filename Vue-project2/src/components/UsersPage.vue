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

<script>
import { ref, onMounted } from 'vue';
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard,
  },
  setup() {
    const usersList = ref([]);

    const fetchUserList = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        usersList.value = await response.json(); 
      } catch (error) {
        console.error('Greška pri dohvatu korisnika:', error);
      }
    };

    onMounted(() => {
      fetchUserList();
    });

    return {
      usersList,
    };
  },
};
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