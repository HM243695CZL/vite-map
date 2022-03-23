<template>
    <div class='left-container'>
        left
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "Left"
    })
</script>

<style scoped lang='less'>
    .left-container{
        width: 300px;
        height: 100%;
        border-right: 1px dashed #fff;
    }
</style>
