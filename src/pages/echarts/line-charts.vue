<script setup>
import * as echarts from 'echarts'
let initEchartPie = $ref('')
let initEchartPie2 = $ref('')

function initEchart() {
  initEchartPie = echarts.init(document.getElementById('main'))
  initEchartPie.setOption({
    title: {
      text: '实例1',
    },
    tooltip: {
      triggerOn: 'mousemove',
      textStyle: {
        color: 'pink',
      },
      // showDelay: 2000
      // showContent: true
    },
    xAxis: {
      // gridIndex: 2,

      name: 'xAxis',
      nameTextStyle: {
        color: 'red',
        fontStyle: 'normal',
      },
      axisLine: {
        show: true,
        onZero: true,
        symbol: ['none', 'arrow'],
        symbolOffset: [0, 12],
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        show: true,
      },
      axisPointer: {
        show: true,
        type: 'line',
      },
      inverse: false,
      // boundaryGap: ['30%','40%'],
      // nameLocation: 'middle',
      nameGap: 20,
      nameRotate: 270,
      show: true,
      position: 'bottom',
      // offset: 20,
      type: 'category',
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  })

  // window.addEventListener('resize', handleResize)
}

function initEchart2() {
  initEchartPie2 = echarts.init(document.getElementById('main2'))

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    legend: {},
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
      },
    ],
    yAxis: [
      {
        // show: true,
        type: 'value',
        name: '降水量',
        min: 0,
        max: 250,
        position: 'right',
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        position: 'left',
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: '降水量',
        type: 'bar',
        yAxisIndex: 0,
        data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
      },
      {
        name: '温度',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [
          6.0,
          10.2,
          10.3,
          11.5,
          10.3,
          13.2,
          14.3,
          16.4,
          18.0,
          16.5,
          12.0,
          5.2,
        ],
      },
    ],
  }
  initEchartPie2.setOption(option)
}

function handleResize() {
  // setTimeout(() => {
  // initEchartPie && initEchartPie.resize()

  initeEchartPie && initEchartPie.resize()
  // }, 2000);
}

// 销毁实例
function destory() {
  initEchartPie.dispose()
}

onMounted(() => {
  initEchart()
  initEchart2()
})
</script>

<template>
  <div class="line-chart">
    <!-- <n-space>
      <n-button type='error' @click='destory'>销毁实例1</n-button>
    </n-space> -->
    <div id="main" style="width: 600px; height: 300px;" />
    <div id="main2" style="width: 600px; height: 300px;" />
  </div>
</template>

<style lang='scss' scoped>
</style>
