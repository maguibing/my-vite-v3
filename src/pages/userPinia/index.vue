<script setup>
import {useStore} from '@/store'
import { storeToRefs } from 'pinia';

import {useMessage} from 'naive-ui'
const message = useMessage()

const store = useStore()
/**
 * 使用storeToRefs '结构出来的变量' 只能用于展示 不能卸载逻辑里，否则失效
 */
const { count, name } = storeToRefs(store)


const increment = () => {
  if(store.count>=10) return message.warning('当前大于10')
  store.count++
}
const decrement = () => {
  if(store.count<=0) return message.warning('当前小于0')
  store.count--
}
/**
 *  可以直接修改 store.name = xxx
 *  or
 *  store.$patch({
 *    name:xxx,
 *    count: store.count++
 *  })
 * or (推荐)
 * store.$patch(state=>{
 *  state.count++
 *  state.name = xxxx
 * })
 * or 替换整个state
 * store.$state = {age: 18, name: 'maguibing'}
 */

// store.name = 'lisi'
// store.$patch({ name:"胡汉三", count: store.count = 10   // ?? 为什么不能直接使用 store.count++ })
const changeName = () => {
  store.$patch(state => {
    state.count++
    state.name = '李四'
  })
}



</script>
<template>
  <h3>usePinia</h3>
  <div>
    数量：{{ count }}  姓名：{{ name }} 
    可以直接访问 store的getters:
    {{ store.doublePlusOne }} -- {{ store.doublePlusTwo }} -- {{ store.doublePlusThree }} -- {{ store.allyPlusCount(100) }} -- {{ store.otherStorePlus }}
    <n-space>
      <n-button type="success" @click="increment">增加</n-button>
      <n-button type="error" @click="decrement">减少</n-button>
      <n-button type="success" @click="changeName">修改姓名</n-button>
      <n-button type="warning" @click="store.$reset()">重置</n-button>
      <n-button type="warning" @click="store.sotreIncrement()">使用storeAction</n-button>
    </n-space>
  </div>

   
</template>

<style lang='scss' scoped>
</style>