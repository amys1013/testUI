// 用来管理所有的组件 - 整体导入 - 直接用testui，则引用所有的组件

import tButton from "./button/index.js"; // 该导出了一个实例，然后实例有install方法
import tInput from "./input/index.js";


// 这里也提供一个全局方法
const install = (app) => {
  app.use(tButton);
  app.use(tInput);
};

const TUI = {
  install,
};

// 为了支持按需引入组件；
export { tButton,tInput };

// 如果使用TUI的话，就可以拿到所有的组件
export default TUI;
