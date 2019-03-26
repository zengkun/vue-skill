<template>
  <div>
    <Divider>@hook:mounted 监听第三方组件生命周期</Divider>
    {{msg}}
    <hook-life @hook:mounted="childMounted"></hook-life>
  </div>
</template>

<script>
import HookLife from '@/components/some-methods/HookLife.vue'

export default {
  name: "HookLifeCycle",
  data() {
    return {
        msg:"..."
    };
  },
  components: {
    HookLife
  },
  methods: {
    childMounted() {
      this.msg='Child was mounted'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>