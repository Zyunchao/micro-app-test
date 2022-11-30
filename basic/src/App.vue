<template>
  <h1 class="custom-title">我是绿色的奥丁</h1>
  <router-view v-if="create" />
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<script lang="ts" setup>
import { toRaw, watch, ref, computed, reactive, toRefs } from "vue";

const create = ref<boolean>(false);

setTimeout(() => {
  create.value = true;
}, 1000);
</script>

<style lang="scss" scoped></style>
