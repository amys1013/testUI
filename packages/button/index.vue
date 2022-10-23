<template>
  <div class="t-button" :class="tClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>


<script>
export default {
  name: 'tButton'
}
</script>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: '',
  }
})

// 根据type动态地增加类名
console.log('props: ', props);
const tClass = computed(() => {
  return ["t-button",
    props.type !== '' ? `t-button-${props.type}` : '']
})


</script>

<style lang="scss" scoped>
.t-button {

  display: inline-block;
  margin: 2px;

  button {
    padding: 8px 15px;
    border: 1px solid #f0f0f0;
    background-color: none;
  }
}

.t-button-success {
  button {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}

.t-button-danger {
  button {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}


.t-button-primary {
  button {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}





button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
}
</style>