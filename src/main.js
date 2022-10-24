


import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from './router'


import TUI from "../packages/index.js";

const app = createApp(App);


app.use(router);


// 注册后，就可以用它了
app.use(TUI);


app.mount("#app");

