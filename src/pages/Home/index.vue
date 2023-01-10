<script setup name="Home">
// import userPinia from '@/pages/userPinia'
import ButtonCounter from '~/src/components/button-counter.vue'
import inputComponent from '@/components/input-cop.vue'
// const { proxy } =  getCurrentInstance() // 获取全局api 相当于this
import { getLovers } from '@/api/home'
import echarts from '@/pages/echarts'
let lovers = $ref([])
const count = $ref(0)

onMounted(() => {
  // console.log(import.meta.env.VITE_APP_BASE_URL);

  // proxy.$axios.get(`/path/content/wxapp/loversProfile/json/lovers-1.json`).then(res => {
  //   console.log(res);
  // })

  getLovers().then((res) => {
    lovers = res.data.list
  })
})

function eventValidate() {
}
</script>

<template>
  <div class="home">
    <!-- <userPinia></userPinia> -->
    <ButtonCounter :count="count" @increment.once="count++" @decrement.once="count--" @event-validate="eventValidate" />
    <!-- <input-component v-model.number="count"></input-component> -->
    <!-- <echarts></echarts> -->
  </div>
</template>

<style lang='scss' scoped>
</style>
