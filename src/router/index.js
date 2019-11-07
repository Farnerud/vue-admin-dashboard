import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recover from "../views/Authentication/Recover.vue";
import Request from "../views/Authentication/Request.vue";
import SignIn from "../views/Authentication/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
	{
    path: "/recover",
    name: "recover",
    component: Recover
  },
	{
    path: "/request",
    name: "request",
    component: Request
  },
	{
    path: "/signin",
    name: "signin",
    component: SignIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
