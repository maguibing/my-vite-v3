<template>
  <div>{{flag?'正':'反'}}</div>
  <button @click="changeValue">按钮</button>
</template>

<script setup>
import {ref} from 'vue'
    const flag = ref(false)

    function changeValue(){
        flag.value  =  !flag.value
        flag.value  =  !flag.value
    }

</script>
