<template>
  <div v-if="isShow">
    <div>Model.vue content~</div>
    <br>
    <span @click="hide">隐藏</span>
  </div>
</template>

<script>
export default {
  name: "Model",
  model: {
    prop: "isShow",
    event: "show-hide"
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
    // value:{
    //     type:Boolean,
    //     default:false,
    // }
  },
  methods: {
    hide() {
      this.$emit("show-hide", false);
      //   this.$emit("input", false);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
