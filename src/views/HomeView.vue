<script setup lang="ts">
import { navItems } from '@/data/navItems'
import NavSection from '@/components/NavSection.vue'
import type { NavItem } from '@/types'

const grouped = (() => {
  const map = new Map<string, NavItem[]>()
  for (const item of navItems) {
    if (!map.has(item.category)) map.set(item.category, [])
    map.get(item.category)!.push(item)
  }
  return Array.from(map.entries())
})()
</script>

<template>
  <main class="home">
    <NavSection
      v-for="[category, items] in grouped"
      :key="category"
      :category="category"
      :items="items"
    />
  </main>
</template>

<style scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
}
</style>
