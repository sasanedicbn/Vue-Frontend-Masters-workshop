import UsersPageVue from "./views/UsersPage.vue";
import HomePageVue from "./views/HomePage.vue";
import LoginPageVue from "./views/LoginPage.vue";

export const routes = [
  {
    path: "/",
    component: HomePageVue,
  },
  {
    path: "/login",
    component: LoginPageVue,
  },
  {
    path: "/users",
    component: UsersPageVue,
  },
];
