<template>
  <svg
    :style="{
      width: props.size,
      height: props.size,
      display: props.inline ? 'inline-block' : 'block',
    }"
    class="icon"
  >
    <use :xlink:href="`#${props.icon}`" />
  </svg>
</template>

<script lang="ts">
export default {
  name: "WIcon",
  inheritAttrs: true,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string
    size?: string
    inline?: boolean
  }>(),
  {
    size: "1.5rem",
    inline: false,
  },
)
</script>

<style scoped>
.icon {
  line-height: 1;
  fill: currentcolor;
}
</style>
