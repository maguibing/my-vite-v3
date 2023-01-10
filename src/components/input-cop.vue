<script setup>
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<style lang='scss' scoped>
</style>
