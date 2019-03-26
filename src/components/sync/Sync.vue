<template>
  <div>
    <span @click="edit">修改</span>
    <p>子组件变化的值：{{syncName}}</p>
  </div>
</template>

<script>
export default {
  name: "Sync",
  props: ["syncName"],
  methods: {
    edit() {        
      this.$emit("update:syncName", "我是修改后的值");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
