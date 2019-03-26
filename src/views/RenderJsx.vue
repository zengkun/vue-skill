<template>
  <div>
    <h1>render函数 和 jsx的使用</h1>

    <Divider>render</Divider>
    <render msg="render-props">
      <p>render slot content</p>
    </render>

    <Divider>jsx</Divider>
    <jsx msg="jsx-props">
      <p>jsx slot content</p>
      <p slot="slot">jsx slot content2</p>
    </jsx>

    <Divider>iview demo</Divider>
    <iview-render></iview-render>

  </div>
</template>

<script>
import Render from '@/components/render-jsx/Render.vue'
import Jsx from '@/components/render-jsx/Jsx.vue'
import IviewRender from '@/components/render-jsx/IviewRender.vue'

export default {
  name: 'RenderJsx',
  components:{
    Render,
    Jsx,
    IviewRender
  }
}
</script>

<style scoped lang="scss">

</style>
