<template>
  <div>
    <Divider>First 组件</Divider>
    {{content}}
    <second></second>
  </div>
</template>
<script>
import Second from "@/components/provide-inject/Second.vue";

export default {
  name: "First",
  provide() {
    return {
      first: this,
      name: this.value,
      fun: val => {
        console.log(val);
        this.firstFun(val);
      }
    };
  },
  data() {
    return {
      value: "从first传入three的值",
      label: "3秒后我会改变~",
      content: "5秒后我会改变~"
    };
  },
  components: {
    Second
  },
  methods: {
    firstFun(val) {
      setTimeout(() => {
        this.content = val;
      }, 5000);
      console.log("firstFun 被调用了");
    },
    doSomething() {
      setTimeout(() => {
        this.label = "我改变了~~~";
      }, 3000);
      console.log("doSomething");
    }
  }
};
</script>
