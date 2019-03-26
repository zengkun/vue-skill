<template>
  <div>
    <Divider>v-model 语法糖</Divider>
    <Button @click="show">显示内容</Button>
    <Button @click="hide">隐藏内容</Button>
    <Model v-model="isShow"></Model>
  </div>
</template>

<script>
import Model from "@/components/v-model/Model.vue";

export default {
  name: "Vmodel",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  },
  components: {
    Model
  }
};
</script>

<style lang="scss" scoped>
</style>