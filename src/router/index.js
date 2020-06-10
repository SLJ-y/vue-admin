import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Home
  {
    path: "/",
    redirect: "login"
  },
  // 登录
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
