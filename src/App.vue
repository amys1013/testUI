<template>
  <router-view />
  <!-- <div>
      <t-button>花花的世界</t-button>
      <t-button type="primary">花花的世界</t-button>
      <t-button type="success">花花的世界</t-button>
      <t-button type="danger">花花的世界</t-button>
    </div>

    <div>
      {{val}}
      <t-input v-model="val"></t-input>
    </div> -->

</template>

<script setup>

import { ref } from 'vue';
const val = ref("");

</script>


<style scoped>

#app{
  width: 100%;
  height: 100%;
}

</style>