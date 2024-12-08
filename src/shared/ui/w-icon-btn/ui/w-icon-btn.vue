<template>
  <button
    class="btn"
    :disabled="props.disabled"
    :class="`btn-${props.variant} spacing-square-${props.spacing} radius-${props.radius}`"
  >
    <w-icon :size="props.iconSize" :icon="props.icon" />
  </button>
</template>

<script setup lang="ts">
import { WIcon } from "@/shared/ui/w-icon"
import type { Radius, Spacing, Variant } from "@/shared/ui"

const props = withDefaults(
  defineProps<{
    icon: string
    variant?: Variant
    iconSize?: string
    disabled?: boolean
    spacing?: Spacing
    radius?: Radius
  }>(),
  {
    variant: "text",
    iconSize: "1.5rem",
    disabled: false,
    spacing: "min",
    radius: "small",
  },
)
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
    transition: 0.2s;
  }
}
</style>
