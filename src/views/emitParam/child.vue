<template>
</template>
<script>
export default {
    name: "Child",
    mounted() {
        this.$emit('test', 'emitParam1')
        this.$emit('test2', 'emitParam1', 'emitParam2')
        this.$emit('test3', 'emitParam1')
        this.$emit('test4', 'emitParam1', 'emitParam2')
    }
};
</script>
<style scoped lang="scss">
</style>