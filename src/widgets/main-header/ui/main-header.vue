<template>
  <header class="header">
    <div class="header__row">
      <div class="header__block_logo">
        <div class="header__logo-icon">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div class="header__logo-text w-headline">Wisest</div>
      </div>
      <div class="header__block_search">
        <base-search />
      </div>
      <div class="header__block_profile">
        <div class="header__profile-icon">
          <img v-if="pathToImg" :src="pathToImg" alt="Profile" />
          <w-icon v-else icon="person" />
        </div>
        <div class="header__profile-text w-subtitle-large">Brother</div>
      </div>
    </div>
    <div class="header__row">
      <div class="header__menu">
        <ul class="header__menu-block_items">
          <li class="header__menu-block-item"></li>
        </ul>
        <ul class="header__menu-block_settings">
          <li class="header__menu-block_setting"></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { WIcon } from "@/shared/ui/w-icon"
import { BaseSearch } from "@/features/search-issue"

const pathToImg = ref<string | null>(null)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  &__block {
    &_logo {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    &_profile {
      display: flex;
      flex-direction: row-reverse;
      gap: 1rem;
      align-items: center;
    }
  }

  &__logo-icon {
    height: 26pt;

    img {
      height: 100%;
    }
  }

  &__profile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26pt;
    height: 26pt;
    overflow: hidden;
    color: var(--color-on-secondary);
    background-color: var(--color-secondary);
    border-radius: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
