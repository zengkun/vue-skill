<template>
  <div>
    <Child attr1="1" attr2="2" :prop1="3" :prop2="4" @listenerFn="testListeners"></Child>
  </div>
</template>
<script>
import Child from "@/components/attrs-props/Child.vue";

export default {
  name: "Parent",
  data() {
    return {
      
    };
  },
  components: {
    Child
  },
  methods: {
    testListeners(){
      console.log("listeners 触发成功~");
      
    }
  }
};
</script>
