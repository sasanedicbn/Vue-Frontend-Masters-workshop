<script setup>
import BaseButton from "@/Base/Base-button.vue";
import { usersData } from "../composables/usersStore";
import UserCard from "../components/UserCard.vue";
import controlData from "../composables/countStore";
import { useRouter } from "vue-router";
import { watch } from "vue";
// import { useCounterStore } from "../stores/CountStore";
const { innerValue, incrementCounter } = controlData();
// const counter = useCounterStore();
console.log("innerCount", innerValue.value);
const router = useRouter();

watch(innerValue, () => {
  if (innerValue.value > 12) {
    router.push("/users");
  }
});
</script>

<template>
  <div :class="$style.wrapper">
    <!-- <p>From store counter:{{ counter.count }}</p> -->
    <h2>Welcome to Home Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni
      veniam nam ut quidem earum ad distinctio, necessitatibus quis labore
      dolores facilis odio inventore, rem consectetur temporibus unde sunt
      assumenda.
    </p>
    <p>Vrijednost value: {{ innerValue }}</p>
    <button @click="incrementCounter()">Increment</button>
    <BaseButton text="SUBMIT" type="warning" />
    <ul>
      <li v-for="user in usersData" :key="user.id">
        <UserCard :user="user" />
      </li>
    </ul>
  </div>
</template>

<style module>
h2 {
  color: rgb(97, 95, 95);
}
p {
  color: rgb(158, 157, 157);
}
</style>
