<template>
  <div ref="inputArea" class="input" :class="`radius-${props.radius}`">
    <input
      :type="`${props.type}`"
      class="input__body w-body"
      :class="`radius-${props.radius} spacing-rectangle-${props.spacing}`"
      v-model="inputValue"
    />
    <transition name="fade" mode="out-in">
      <div
        v-if="props.options && isMenuOpened"
        class="input__popup custom-scroll"
        tabindex="0"
        :class="`bottom-radius-${props.radius}`"
      >
        <ul class="input__options">
          <li
            v-for="option in options"
            :key="option"
            class="input__option ellipsis"
            :title="option"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { InputType, Radius, Spacing } from "@/shared/ui"
import { computed, onMounted, onUnmounted, ref } from "vue"

const props = withDefaults(
  defineProps<{
    type: InputType
    options?: string[]
    radius?: Radius
    spacing?: Spacing
  }>(),
  {
    radius: "small",
    spacing: "min",
  },
)

const inputArea = ref<HTMLElement | null>(null)

const handleFocusIn = () => {
  isInputFocused.value = true
}

const handleFocusOut = () => {
  setTimeout(() => {
    if (!inputArea.value?.contains(document.activeElement)) {
      isInputFocused.value = false
    }
  }, 0)
}

onMounted(() => {
  inputArea.value?.addEventListener("focusin", handleFocusIn)
  inputArea.value?.addEventListener("focusout", handleFocusOut)
})

onUnmounted(() => {
  inputArea.value?.removeEventListener("focusin", handleFocusIn)
  inputArea.value?.removeEventListener("focusout", handleFocusOut)
})

const inputValue = ref<string>("")

const isInputFocused = ref<boolean>(false)
const isMenuOpened = computed(() => inputValue.value.length > 0 && isInputFocused.value)
</script>

<style lang="scss" scoped>
@import "@/app/styles/action-states";

.input {
  position: relative;
  width: fit-content;
  color: var(--color-on-secondary-container);
  background: var(--color-secondary-container);
  border: 2px solid var(--color-secondary);

  &:focus,
  &:focus-within {
    background: linear-gradient(
      -45deg,
      var(--color-secondary) -150%,
      var(--color-secondary-container) 100%
    );
  }

  &::after {
    opacity: 0;
  }

  @include action-states(var(--color-secondary));

  &__body {
    width: 100%;
    height: 100%;
    color: var(--color-on-secondary-container);
    background: none;
  }

  &__popup {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    height: 12rem;
    overflow-y: auto;
    color: var(--color-on-surface-high);
    background-color: var(--color-surface-high);
  }

  &__options {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    overflow: hidden;
  }

  &__option {
    position: relative;
    padding: 0.5rem;
    margin: 0 0.5rem;
    cursor: pointer;

    @include action-states(var(--color-secondary));
  }
}

/* Стили для фона автозаполнения */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  background-color: transparent !important; /* Прозрачный фон */
  outline: 3px solid var(--color-primary);
  box-shadow: 0 0 0 1000px transparent inset !important;
  transition: background-color 5000s ease-in-out 0s; /* Отключаем анимацию заливки */
  -webkit-text-fill-color: var(--color-on-primary-container);
}
</style>
