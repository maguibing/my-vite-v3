<script setup>
import * as echarts from 'echarts'

function initEchart() {
  const chart = echarts.init(document.querySelector('#mainPie'))
  chart.setOption({
    // title:{
    //   text:"这是一个图",
    //   show: true,
    //   textAlign:"bottom",
    //   link:"https://www.baidu.com",
    //   textStyle:{
    //     color: 'red'
    //   },
    //   subtext:"test",
    //   padding: 10
    // },
    legend: {
      // backgroundColor: "black",
      // left: 500,
      // orient: "horizontal",
      // tooltip:{
      //   show: true
      // },
      // formatter: function(name) {
      //   return name
      // }

      // data:[{
      //   name: '直接访问',
      //   // 强制设置图形为圆。
      //   icon: 'circle',
      //   // 设置文本为红色
      //   textStyle: {
      //       color: 'red'
      //   }
      // }]
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '直接访问',
          },
          {
            value: 234,
            name: '联盟广告',
          },
          {
            value: 1548,
            name: '搜索引擎',
          },
        ],
        radius: '50%',
      },
    ],
  })
}

onMounted(() => {
  initEchart()
})
</script>

<template>
  <div id="mainPie" style="width: 600px; height: 300px;" />

  <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.997 51.997" style="enable-background:new 0 0 51.997 51.997;" xml:space="preserve">
      <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z"/>
  </svg> -->
</template>

<style lang='scss' scoped>
</style>
