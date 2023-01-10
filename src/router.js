import { createRouter, createWebHistory } from "vue-router";
import userdata from './components/UserData.vue';
import viewuserdata from './components/ViewUserData.vue'

const routes = [
  {
    name: "userdata",
    component: userdata,
    path: "/userdata",
  },
  {
    name: "viewuserdata",
    component: viewuserdata,
    path: "/viewuserdata",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router
