<template>
  <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({ name: 'SvgIcon' })

interface Props {
  /** 本地svg的文件名 */
  localIcon?: string
}

const props = defineProps<Props>()

const attrs = useAttrs()

const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || ''
}))

const symbolId = computed(() => {

  const icon = props.localIcon

  return `#icon-${icon}`
})


</script>

<style scoped></style>
