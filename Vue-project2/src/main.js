import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routers } from "./router";

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory,
  routers,
});
app.use(router);
app.mount("#app");
