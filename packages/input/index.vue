<template>
  <div>
    <input type="text" name="" id="" :value="modelValue" @input="input">
  </div>
</template>
<script>
export default {
  name: 'tInput'
}
</script>
<script setup>

import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String | Number,
})

const input = (e) => {
  console.log(e.target.value);
  emits("update:modelValue", e.target.value)
}

</script>

<style lang="scss" scoped>

</style>