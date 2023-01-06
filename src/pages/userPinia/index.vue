<script setup>
import {useStore} from '@/store'
import { storeToRefs } from 'pinia';

import {useMessage} from 'naive-ui'
const message = useMessage()

const store = useStore()
/**
 * 使用storeToRefs '结构出来的变量' 只能用于展示 不能卸载逻辑里，否则失效
 */
const { count } = storeToRefs(store)


const increment = () => {
  if(store.count>=10) return message.warning('当前大于10')
  store.count++
}
const decrement = () => {
  if(store.count<=0) return message.warning('当前小于0')
  store.count--
}



</script>
<template>
  <h3>usePinia</h3>
  <div>
    数量：{{ count }} 
    <n-space>
      <n-button type="success" @click="increment">增加</n-button>
      <n-button type="error" @click="decrement">减少</n-button>
      <n-button type="warning" @click="store.$reset()">重置</n-button>
    </n-space>
  </div>

   
</template>

<style lang='scss' scoped>
</style>