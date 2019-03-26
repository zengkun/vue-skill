<template>
  <div>
    <div class="nav">
      <Button to="renderjsx">render-jsx</Button>
      <Button to="provideinject">provide-inject</Button>
      <Button to="extendsmixins">extends-mixins</Button>
      <Button to="vmodel">v-model</Button>
      <Button to="syncbind">sync</Button>
      <Button to="hooklifecycle">hook-life-cycle</Button>
      <Button to="attrsprops">attrs-props</Button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.logo{
  width: 120px;
}
.nav{
  margin:20px;
  text-align: center;
}
</style>

