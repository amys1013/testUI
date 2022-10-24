<template>
  <div class="container">
    <div class="left">

      <li v-for="(item, index) in menuList[0].children">{{ item.name }}</li>

    </div>


    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import menuList from '@/router/routerPage/page.js'
console.log('menuList: ', menuList);


</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;

  .left {
    width: 20%;
    border-right: 1px solid #b9b8b8f0;
  }

  .right {
    flex: 1;
    border: 1px solid pink;
  }

  li {
    list-style: none;
    line-height: 30px;
    padding: 0px 20px;
    cursor: pointer;
    

    &:hover{
      padding-left: 18px;
      color: #409eff;
      border-left: 2px solid #409eff;
       background: rgba(14,128,235,.1);;

    }

  }
}
</style>