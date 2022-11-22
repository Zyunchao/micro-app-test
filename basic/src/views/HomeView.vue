<template>
    <button @click="router.push('/loki/about')">toLoki</button>
    <button @click="router.push('/thor/about')">toThor</button>
    <h1 class="custom-title">我是绿色的奥丁</h1>
    <router-view />
</template>

<script lang="ts">
export default {
    name: 'Layout'
}
</script>

<script lang="ts" setup>
import { toRaw, watch, ref, computed, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
button {
    font-size: 20px;
    margin-right: 20px;
}

h1 {
    height: 100px;
    background-color: rgb(45, 150, 54);
    color: #fff;
}
</style>
<style lang="scss">
.custom-title {
    background-color: rgb(45, 150, 54);
}
</style>
