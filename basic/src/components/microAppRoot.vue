<template>
    <div class="micro-app-root">
        <micro-app
            v-if="!reloadFlag"
            :name="currentAppName"
            :url="currentAppUrl"
            :baseroute="`/${currentAppName}`"
            :disable-scopecss="false"
            @created="microOnCreated"
            @beforemount="microOnBeforemount"
            @mounted="microOnMounted"
            @unmount="microOnUnmount"
            @error="microOnError"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'MicroAppRoot'
}
</script>

<script lang="ts" setup>
import { computed, watchEffect, watch, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const microAppList = [
    {
        name: 'thor',
        url: 'http://localhost:3001/'
    },
    {
        name: 'loki',
        url: 'http://localhost:3002/'
    }
]

const route = useRoute()

const currentAppName = computed(() => route.path.split('/')[1])
const currentAppUrl = computed(
    () => microAppList.find((item) => item.name === currentAppName.value)?.url
)

const reloadFlag = ref<boolean>(false)
watch(
    () => currentAppName.value,
    (name) => {
        reloadFlag.value = true
        nextTick(() => {
            reloadFlag.value = false
        })
    }
)

watchEffect(() => {
    console.log(`%c ${currentAppName.value} url ===== `, 'color: #67c23a;', currentAppUrl.value)
})

const microOnCreated = () => {
    console.log(
        `%c 1. ${currentAppName.value} microOnCreated.....................`,
        'color: #67c23a;',
        +new Date()
    )
}
const microOnBeforemount = () => {
    console.log(
        `%c 2. ${currentAppName.value} microOnBeforemount.....................`,
        'color: #67c23a;',
        +new Date()
    )
}
const microOnMounted = () => {
    console.log(
        `%c 3. ${currentAppName.value} microOnMounted.....................`,
        'color: #67c23a;',
        +new Date()
    )
}
const microOnUnmount = () => {
    console.log(`%c 4. microOnUnmount.....................`, 'color: #67c23a;', +new Date())
}
const microOnError = () => {
    console.log(`%c 5. microOnError.....................`, 'color: red;', +new Date())
}
</script>

<style lang="scss" scoped></style>
