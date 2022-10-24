import { createRouter, createWebHashHistory } from "vue-router";
import routerPage from "./routerPage/page";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routerPage],
});

export default router
