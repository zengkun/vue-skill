<script>
export default {
  name: 'Render',
  props:{
    msg: String
  },
  methods:{
    click(){
      console.log('reder click');
    }
  },
  render: function(h) {
    return h("div",[
      h('h4', `render 使用 --- ${ this.$props.msg }`),
      h('div', this.$slots.default),
      h('a', {
        attrs:{
          href:'javascript:;'
        },
        on:{
          click:()=>{
            this.click()
          }
        }
      }, 'render click event')
    ]);
  }
}
</script>
