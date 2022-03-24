<template>
    <div class='left-container'>
        left - {{title}}
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "Left",
        props: {
            title: {
                type: String
            }
        }
    })
</script>

<style scoped lang='less'>
    .left-container{
        width: 400px;
        height: 100%;
        border-right: 1px dashed #fff;
    }
</style>
