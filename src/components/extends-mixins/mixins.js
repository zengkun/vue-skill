export let mixins1 = {
  data() {
    return {
      name: "mixins1"
    };
  },
  mounted(){
    console.log('mixins1 mounted');
  }
};

export let mixins2 = {
  data() {
    return {
      name: "mixins2"
    };
  },
  mounted(){
    console.log('mixins2 mounted');
  }
};
