<template>
  <three></three>
</template>
<script>
import Three from "@/components/provide-inject/Three.vue";

export default {
  name: "Second",
  components: {
    Three
  },
  data() {
    return {
      content: "second content"
    };
  }
};
</script>
