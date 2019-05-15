<template>
    <div>
        <h1>$emit 传参</h1>
        <p style="color:red;">请打开控制台查看结果</p>
        <child @test="test($event,'otherParam1','otherParam2')"></child>
        <child @test2="test2(arguments,'otherParam1','otherParam2')"></child>
        <child @test3="(p1)=>{test3(p1,'otherParam1','otherParam2')}"></child>
        <child @test4="(p1,p2)=>{test4(p1,p2,'otherParam1','otherParam2')}"></child>
    </div>
</template>
<script>
import Child from "./child.vue";

export default {
    name: "Parent",
    components: {
        Child
    },
    methods: {
        test(p1, p2, p3) {
            console.log(p1, p2, p3, '-- $event接收单个$emit参数');
        },
        test2(p1, p2, p3) {
            console.log([...p1].join(' '), p2, p3, '-- arguments接收多个$emit参数');
        },
        test3(p1, p2, p3) {
            console.log(p1, p2, p3, '-- 箭头函数转换接收单个$emit参数');
        },
        test4(p1, p2, p3, p4) {
            console.log(p1, p2, p3, p4, '-- 箭头函数转换接收单个$emit参数');
        }
    }
};
</script>
<style scoped lang="scss">
</style>