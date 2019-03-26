<template>
  <div>
    <Divider>extends > mixins</Divider>
    mixins2覆盖mixins1覆盖extends的值：{{name}}
    <new-extend></new-extend>
  </div>
</template>

<script>
import { mixins1, mixins2 } from "@/components/extends-mixins/mixins.js";
import extendsOption from "@/components/extends-mixins/extends.js";
import Extend from "@/components/extends-mixins/Extend.vue";

let NewExtend = {
  extends: Extend,
  data() {
    return {
      name: "extends Extend.vue"
    };
  },
  mounted() {
    console.log(this.name);
  }
};

export default {
  name: "ExtendsMixins",
  extends: extendsOption,
  mixins: [mixins1, mixins2],
  components: {
    NewExtend
  }
};
</script>

<style scoped lang="scss">
</style>
