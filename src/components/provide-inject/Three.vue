<template>
  <div>
    <Divider size="small" orientation="left">Three 组件</Divider>
    {{newName}}
    <div>{{first.label}}</div>
  </div>
</template>
<script>
export default {
  name: "Three",
  inject: {
    first: "first",
    fun: {
      from: "fun"
    },
    newName: {
      from: "name",
      default: "first name 默认值"
    }
  },
  data() {
    return {
      threeName: "从three通过方法参数传过来的值"
    };
  },
  mounted() {
    this.fun(this.threeName);
    console.log(this.first);
    this.first.doSomething();
  }
};
</script>
