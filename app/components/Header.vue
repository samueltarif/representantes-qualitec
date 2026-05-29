<template>
  <header 
    class="w-full top-0 sticky z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant transition-transform duration-300"
    :class="isHidden ? '-translate-y-full' : 'translate-y-0'"
  >
    <div class="flex justify-between items-center h-16 px-4 lg:px-margin-desktop max-w-container-max mx-auto gap-4">
      <!-- Brand Logo / Name -->
      <NuxtLink to="/" class="text-[21px] font-semibold text-text-primary flex items-center gap-2 tracking-tight whitespace-nowrap flex-shrink-0">
        <span v-if="icon" class="material-symbols-outlined flex-shrink-0" style="font-variation-settings: 'FILL' 1;">
          {{ icon }}
        </span>
        {{ brand }}
      </NuxtLink>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink min-w-0">
        <NuxtLink
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          class="font-body-md transition-colors duration-200 whitespace-nowrap"
          :class="isLinkActive(link.url) ? 'text-link-blue font-semibold' : 'text-text-secondary hover:text-text-primary'"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4 flex-shrink-0">
        <!-- Search bar (customizable) -->
        <div v-if="showSearch" class="hidden md:flex items-center bg-surface border border-outline-variant rounded-full px-4 py-1.5 focus-within:border-primary transition-colors">
          <span class="material-symbols-outlined text-text-secondary text-[20px] mr-2">search</span>
          <input
            v-model="searchQuery"
            class="bg-transparent border-none focus:ring-0 text-body-md p-0 w-32 placeholder-text-secondary outline-none"
            placeholder="Buscar..."
            type="text"
            @keyup.enter="$emit('search', searchQuery)"
          />
        </div>

        <!-- Optional CTA Button -->
        <BaseButton v-if="ctaText" :to="ctaTo" variant="primary" size="sm" class="!px-5 !py-2">
          {{ ctaText }}
        </BaseButton>

        <!-- Mobile menu toggle -->
        <BaseButton variant="text" size="sm" class="md:hidden" @click="mobileOpen = !mobileOpen">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">
            {{ mobileOpen ? 'close' : 'menu' }}
          </span>
        </BaseButton>
      </div>
    </div>

    <!-- Mobile Navigation menu -->
    <div v-if="mobileOpen" class="md:hidden bg-background border-b border-surface-container px-margin-desktop py-4 flex flex-col gap-4">
      <NuxtLink
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        class="font-body-md py-2 transition-colors"
        :class="isLinkActive(link.url) ? 'text-link-blue font-semibold' : 'text-text-secondary hover:text-text-primary'"
        @click="mobileOpen = false"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from '#app'

const props = defineProps({
  brand: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  links: {
    type: Array,
    required: true,
    default: () => []
  },
  showSearch: {
    type: Boolean,
    default: false
  },
  ctaText: {
    type: String,
    default: ''
  },
  ctaTo: {
    type: String,
    default: ''
  }
})

defineEmits(['search'])

const route = useRoute()
const mobileOpen = ref(false)
const searchQuery = ref('')

const isHidden = ref(false)
let lastScrollTop = 0

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
  if (scrollTop > 80) {
    if (scrollTop > lastScrollTop) {
      // scrolling down - hide header
      isHidden.value = true
    } else {
      // scrolling up - show header
      isHidden.value = false
    }
  } else {
    // at the very top - show header
    isHidden.value = false
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isLinkActive = (url) => {
  if (url === '/' && route.path === '/') return true
  if (url !== '/' && route.path.startsWith(url)) return true
  return false
}
</script>
