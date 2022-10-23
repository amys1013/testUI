// 单个组件的出口，则组件可以进行按需引入

import tButton from "./index.vue";


// 调用Install方法，才能让app来引用它
tButton.install = (app) => {
  app.component(tButton.name, tButton);
};


export default tButton
