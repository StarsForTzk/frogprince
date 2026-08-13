<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isBackToTopVisible = ref(false)

function updateBackToTopVisibility() {
  isBackToTopVisible.value = window.scrollY > 480
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateBackToTopVisibility()
  window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateBackToTopVisibility)
})
</script>

<template>
  <NuxtPage />
  <Transition name="back-to-top">
    <button
      v-if="isBackToTopVisible"
      type="button"
      class="fixed bottom-5 right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-char text-paper transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-char md:bottom-8 md:right-8 md:h-12 md:w-12"
      aria-label="回到页面顶部"
      title="回到顶部"
      @click="scrollToTop"
    >
      <svg aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" />
      </svg>
    </button>
  </Transition>
</template>

<style>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
