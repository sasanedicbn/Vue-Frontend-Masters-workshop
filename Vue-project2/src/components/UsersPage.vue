<template>
  <div>
    <h2>List of users</h2>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        <UserCard :user="user"/>
      </li>
    </ul>
   
  </div>
</template>

<script>
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard
  },
  name: 'UsersPage',
  data() {
    return {
      usersList: [],
    };
  },
  methods: {
    async fetchUserList() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.usersList = await response.json();
      } catch (error) {
        console.error('Greška pri dohvatu korisnika:', error);
      }
    },
  },
  created() {
    this.fetchUserList();
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