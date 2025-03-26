const { createRouter, createMemoryHistory } = require("vue-router");

const routes = [
  { path: "/", component: () => import("./views/HelloWorld.vue") },
  { path: "/pokedex", component: () => import("./views/Pokedex.vue") },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
