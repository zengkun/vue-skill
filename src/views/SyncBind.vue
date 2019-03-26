<template>
  <div>
    <Divider>Sync 组件通信</Divider>
    <Sync :syncName.sync="name"></Sync>
    <p>父组件变化的值：{{name}}</p>
    <br>
    <span @click="reset">还原</span>
  </div>
</template>

<script>
import Sync from "@/components/sync/Sync.vue";

export default {
  name: "SyncBind",
  data() {
    return {
      name: "默认值"
    };
  },
  components: {
    Sync
  },
  methods: {
    reset() {
      this.name = "还原了~";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>