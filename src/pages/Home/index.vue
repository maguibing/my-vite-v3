<template>
    <div>
        <p>Has published books:</p>
        <span :class="classObject">{{ publishedBookMessage }}</span>
        <Login ref="LoginCompoents" title='这是父组件来的消息'>123123</Login>
        
        <ul>
            <li v-for="(item,index) in examples" :key="index" @click="getItem(item,$event)">{{item}}</li>
        </ul>

        <!-- https://cn.vuejs.org/guide/essentials/template-refs.html#function-refs 函数模板 -->

        <!-- https://cn.vuejs.org/guide/essentials/template-refs.html#function-refs 函数模板 -->



        <input type="text" name="" id=""  >

        <button @click="handle">handle</button>

    </div>
</template>

<script setup name="Home">
import Login from '@/pages/Login/index.vue'
import { computed, reactive, ref, onMounted,watch} from 'vue'

const classObject = {
    active: true,
    direction: false   
}

const LoginCompoents = ref(null)

const author = reactive({
    name:"zs",
    books:[
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
})

const watchObj = reactive({age:18, name:"zs"})

watch(watchObj,(n,o)=>{
    console.log("触发了", n,o);
})

const handle = () => {
    const {name,age} = LoginCompoents.value.baseForm
    console.log(name,age);
}

const examples = ref([1,2,3])

const firstName = ref("Advanced")
const lastName = ref("Smith")

const getItem = (item,index) => {
    console.log(item,index)
}

const fullName = computed({
    get(){
        return firstName.value + lastName.value
    },
    set(n){
        [firstName.value, lastName.value] = n.split('')
    }
})

const publishedBookMessage = computed(() => {
    return author.books.length > 0 ? "Yes" : "No"
})

</script>

<style lang="scss" scoped>
    .active {
        color: red;
        font-size: 20px;
    }
    .direction {
        text-decoration: line-through;
    }
</style>

