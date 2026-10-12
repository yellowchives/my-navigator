<script setup lang="ts">
import type { NavItem } from '@/types'

defineProps<{
  item: NavItem
}>()
</script>

<template>
  <a
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
    class="nav-card"
  >
    <div class="nav-card__logo">
      <img v-if="item.logo" :src="item.logo" :alt="item.title" loading="lazy" @error="onImgError" />
      <span v-else class="nav-card__placeholder">{{ item.title.charAt(0) }}</span>
    </div>
    <span class="nav-card__title">{{ item.title }}</span>
  </a>
</template>

<script lang="ts">
function onImgError(e: Event) {
  const img = e.target as HTMLImageElement
  img.style.display = 'none'
  const fallback = img.parentElement
  if (fallback) {
    fallback.textContent = '?'
    fallback.style.fontSize = '1.5rem'
    fallback.style.fontWeight = '700'
    fallback.style.color = 'var(--color-text)'
  }
}
</script>

<style scoped>
.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 10px;
  border-radius: 12px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
  color: var(--color-text);
  text-align: center;
}

.nav-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--color-border-hover);
}

.nav-card__logo {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
}

.nav-card__logo img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.nav-card__placeholder {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
}

.nav-card__title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-heading);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
