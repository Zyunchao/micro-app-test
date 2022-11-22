<template>
    <h1 class="custom-title">我是 pink 索尔</h1>
</template>

<script lang="ts">
export default {
    name: 'ThorAbout'
}
</script>

<script lang="ts" setup>
import { toRaw, watch, ref, computed, reactive, toRefs } from 'vue'
</script>

<style lang="scss" scoped>
h1 {
    height: 100px;
    // background-color: pink;
}
</style>
<style lang="scss">
h1.custom-title {
    background-color: pink;
}
</style>
