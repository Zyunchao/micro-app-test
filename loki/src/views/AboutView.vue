<template>
  <h1 class="custom-title">我是 skyblue 洛基</h1>
</template>

<script lang="ts">
export default {
  name: "LokiAbout",
};
</script>

<script lang="ts" setup>
import { toRaw, watch, ref, computed, reactive, toRefs } from "vue";
</script>

<style lang="scss" scoped>
h1 {
  height: 100px;
  // background-color: skyblue;.
}
</style>
<style lang="scss">
h1.custom-title {
  background-color: skyblue;
}
</style>
