<script setup>
import { Suspense } from 'vue';
import HomePage from './views/HomePage.vue';
import LoginPage from './views/LoginPage.vue';
import UsersPage from './components/UsersPage.vue';
import { ref } from 'vue';

  const currentPage = ref('HomePage')  

  const changePage = (page) => {
     currentPage.value = page;
    }
</script>

<template>
<header>
  <p class="logo">VUE</p>
  <nav>
    <router-link to="/" >Home</router-link>
    <router-link to="/login" >Log in</router-link>
    <!-- <a href="UsersPage" @click.prevent="changePage('UsersPage')" >Users</a> -->
  </nav>
</header>
<div class="content-wrapper">
  <!-- <Suspense>
   <component :is="currentPage"/>
   <template #fallback>
    <div class="spinner">Loading...</div>
  </template>
  </Suspense> -->
  <router-view/>
</div>
</template>
<style >
body{
  margin: 0;
}

.button{
  border: 5px solid green !important;
}
header{
  background-color: rgb(240, 236, 236);
  height: 52.5px;
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90.6%;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
nav{
  display: flex; 
  justify-content: flex-end;
  align-items: center;
  gap: 34px;
  height: 100%;
}
a{
    color: rgb(71, 69, 69);
    text-decoration: none;
    font-size: 18px;
  }
  .logo{
    font-size: 22px;
    font-weight: bold;
    line-height: 1.2;
    color: rgb(8, 128, 8);
  }
  .content-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 20rem;
    flex-direction: column;
    
  }

</style>
