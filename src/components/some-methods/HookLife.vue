<template>
  <div>
    <Divider>this.$forceUpdate() 强制更新视图</Divider>
    <p>3秒后更新视图</p>
    {{obj.msg}}
  </div>
</template>

<script>
export default {
  name: "HookLife",
  data() {
    return {
      obj: {}
    };
  },
  mounted() {
    setTimeout(() => {
      this.obj.msg = "值改变了~";
      this.$forceUpdate();
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
</style>