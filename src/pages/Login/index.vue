<script setup name="Login">
let message = $ref('123')
function changeMsg() {
  message = '内容'
}

const num = 1
const count = computed(() => num * 2 + 2)

onMounted(() => {

})
</script>

<template>
  <div class="login">
    {{ message }} --- {{ count }}
    <button @click="changeMsg">
      修改
    </button>
  </div>
</template>

<style lang='scss' scoped>

</style>
