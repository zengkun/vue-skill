<template>
  <div>
    <GrandChild v-bind="$attrs" :prop1="prop1" :prop2="prop2" v-on="$listeners"></GrandChild>
  </div>
</template>
<script>
import GrandChild from "@/components/attrs-props/GrandChild.vue";

export default {
  name: "Child",
  inheritAttrs:false,
  data() {
    return {
      
    };
  },
  props:['prop1','prop2'],
  components: {
    GrandChild
  },
  methods: {
    
  }
};
</script>
