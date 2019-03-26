<template>
  <div>
    <Divider>extend</Divider>
    从Extend.vue引用的值：{{name}}
  </div>
</template>

<script>
export default {
  name: "Extend",
  data() {
    return {
      name: ""
    };
  }
};
</script>

<style scoped lang="scss">
</style>
