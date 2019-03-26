<template>
  <div>
    <Button @click="goStart">开始执行</Button>
  </div>
</template>
<script>

export default {
  name: "GrandChild",
  inheritAttrs:false,
  data() {
    return {
      
    };
  },
  props:['prop1','prop2'],
  mounted() {
      console.log('$attrs：',this.$attrs)
      console.log('$props：',this.$props)
      console.log('$listeners：',this.$listeners);
      
  },
  methods: {
    goStart(){
        this.$emit("listenerFn")
    }
  }
};
</script>
