// 单个组件的出口，则组件可以进行按需引入

import tInput from "./index.vue";


// 调用Install方法，才能让app来引用它
tInput.install = (app) => {
  app.component(tInput.name, tInput);
};


export default tInput
