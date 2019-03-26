<script>
export default {
  name: "Jsx",
  props: {
    msg: String
  },
  methods: {
    click() {
      console.log(this.$refs.clickBtn);
      
      console.log("jsx click");
    }
  },
  render: function(h) {
    return (
      <div>
        <h4>jsx 使用 --- {this.$props.msg}</h4>
        <div>{this.$slots.default}</div>
        <a
          domPropsInnerHTML="jsx click event"
          href="javascript:;"
          on-click={this.click}
          ref="clickBtn"
          refInFor={true}
          key="btn"
          class={['class1',{'class2':true,'class3':false}]}
        />
      </div>
    );
  }
};
</script>
