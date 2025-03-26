import HomePageVue from "./views/HomePage.vue";

export const routes = [
  {
    path: "/",
    component: HomePageVue,
  },
  {
    path: "/login",
    component: () => import("./views/LoginPage.vue"),
  },
  {
    path: "/users",
    component: () => import("./views/UsersPage.vue"),
  },
  {
    path: "/users/:name",
    component: () => import("./views/UserPage.vue"),
  },
];
