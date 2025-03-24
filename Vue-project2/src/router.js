import HomePageVue from "./views/HomePage.vue";
import LoginPageVue from "./views/LoginPage.vue";

export const routers = [
  {
    path: "/",
    components: HomePageVue,
  },
  {
    path: "/login",
    components: LoginPageVue,
  },
];
