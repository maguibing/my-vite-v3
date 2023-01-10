<script setup name="Home">
// import userPinia from '@/pages/userPinia'
import { getLovers } from '@/api/home'
import echarts from '@/pages/echarts'
// const { proxy } =  getCurrentInstance() // 获取全局api 相当于this

let lovers = $ref([])

onMounted(()=>{
  // console.log(import.meta.env.VITE_APP_BASE_URL);

  // proxy.$axios.get(`/path/content/wxapp/loversProfile/json/lovers-1.json`).then(res => {
  //   console.log(res);
  // })

  getLovers().then(res=>{
    lovers = res.data.list
  })
})


</script>
<template>
  <div class="home">
   <!-- <userPinia></userPinia> -->
   <echarts></echarts>
  </div>
</template>

<style lang='scss' scoped>
</style>