import {  createRouter, createWebHashHistory,  } from "vue-router";
import HelloWorldVue from "./views/HelloWorld.vue";
import PokedexVue from "./views/Pokedex.vue";

const routes = [
  { path: "/", component: HelloWorldVue},
  { path: "/pokedex", component: PokedexVue,  props: true  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
