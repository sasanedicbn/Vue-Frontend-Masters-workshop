<script setup>
import BaseButton from '@/Base/Base-button.vue';
import {usersData} from '../composables/usersStore'
import UserCard from './UserCard.vue';
</script>

<template>
<h2>Welcome to Home Page</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Impedit magni veniam nam ut quidem earum ad distinctio, necessitatibus quis labore dolores 
facilis odio inventore, rem consectetur temporibus unde sunt assumenda.</p>
<BaseButton text="SUBMIT" type="warning"/>
<ul>
    <li v-for="user in usersData" :key="user.id">
        <UserCard :user="user" />
     </li>
</ul>
</template>

<style>
h2{
    color: rgb(97, 95, 95);
}
p{
    color: rgb(158, 157, 157);
}
</style>