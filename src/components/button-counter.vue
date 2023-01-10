<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits({
  increment: null,
  decrement: null,
  // eventValidate: ({email,password}) => {
  //     // console.log(emia);
  //   if (email && password) {
  //     return true
  //   } else {
  //     console.warn('Invalid submit event payload!')
  //     return true
  //   }
  // }
})

function loser() {
  emits('increment')
}

watch(() => props.count, (n, o) => {
}, { immediate: true })
</script>

<template>
  <div style="text-align: center; margin-top: 20px;">
    <button @click="$emit('increment')">
      +
    </button>  {{ count }} <button @click="$emit('decrement')">
      -
    </button>
    <button @click="loser">
      loser
    </button>
    <!-- <button @click="$emit('eventValidate',{email:'kuse012@163.com', password: 0})">test</button> -->
  </div>
</template>

<style lang='scss' scoped>
</style>
