// router/index.js

import { createRouter, createWebHistory } from "vue-router";
import UserManagement from "@/views/UserManagement.vue";

const routes = [
  {
    path: "/",
    name: "UserManagement",
    component: UserManagement,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
