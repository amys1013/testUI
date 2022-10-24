import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import markDown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include:[/\.vue$/,/\.md$/]
  }), markDown()],
  // 打包，会默认有个dist目录
  // 不知道为啥，name作为输出的文件名称没有作用，并且将dist目录的test01.js作为package.json 中的main的入口
  build: {
    lib: {
      entry: "./packages/index.js",
      name: "bundle",
    },
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
