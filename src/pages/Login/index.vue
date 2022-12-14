<template>
  <div class="login">
    子组件 {{dataBasic}}
    <hr>
    <strong>This is an Error for Demo Purposes</strong>
    <slot></slot>
    <br>
    {{title}}
  </div>
</template>

<script setup name="Login">
    import { ref,reactive } from 'vue';

    const props = defineProps(["title"])

    console.log(props.title);

    const dataBasic = ref("张三")
    const baseForm = reactive({
        name:"zs",
        age:15
    })

    defineExpose({
        dataBasic,
        baseForm
    })
</script>

<style lang="scss" scoped>
.login{
    color:rgb(155, 79, 79)
}
</style>