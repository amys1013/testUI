


import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import TUI from "../packages/index.js";

const app = createApp(App);

// 注册后，就可以用它了
app.use(TUI);
app.mount("#app");

