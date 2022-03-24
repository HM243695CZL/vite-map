<template>
    <div class='right-container'>
        right
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "Right"
    })
</script>

<style scoped lang='less'>
    .right-container{
        width: 435px;
        height: 800px;
        border-left: 1px dashed #fff;
    }
</style>
