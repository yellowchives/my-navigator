<script setup lang="ts">
import type { NavItem } from '@/types'
import NavCard from './NavCard.vue'

defineProps<{
  category: string
  items: NavItem[]
}>()
</script>

<template>
  <section class="nav-section">
    <h2 class="nav-section__title">{{ category }}</h2>
    <div class="nav-section__grid">
      <NavCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>

<style scoped>
.nav-section {
  margin-bottom: 32px;
}

.nav-section__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 14px;
  padding-left: 10px;
  border-left: 3px solid hsla(160, 100%, 37%, 1);
}

.nav-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}
</style>
