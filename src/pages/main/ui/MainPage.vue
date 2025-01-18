<template>
  <div class="main">
    <div class="container">
      <main-header class="main__header" />
      <main class="main__body">
        <w-input :options="['Option 1', 'Second option', 'Третья опция']" type="text" />
        <!--        <w-input type="password"/>-->
        <!--        <w-input type="email"/>-->
        <!--        <w-input type="date"/>-->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MainHeader } from "@/widgets/main-header"
import { WInput } from "@/shared/ui/w-input"
</script>

<style lang="scss" scoped>
.main__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
