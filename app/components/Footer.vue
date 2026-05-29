<template>
  <footer class="w-full mt-24 bg-surface-container-lowest border-t border-outline-variant">
    <div class="py-16 px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-8 max-w-container-max mx-auto">
      <div>
        <NuxtLink to="/" class="text-[21px] font-semibold text-text-primary flex items-center gap-2 mb-4 tracking-tight">
          <span v-if="icon" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">
            {{ icon }}
          </span>
          {{ brand }}
        </NuxtLink>
        <p class="text-[15px] text-text-secondary mb-6 max-w-sm leading-relaxed">
          {{ description }}
        </p>
        <p class="text-[13px] text-text-secondary">
          © {{ currentYear }} {{ brand }}. Todos os direitos reservados. Engenharia de Precisão para Infraestrutura Global.
        </p>
      </div>
      <div class="flex flex-col md:items-end justify-center">
        <nav class="flex flex-col md:flex-row gap-4 md:gap-8">
          <NuxtLink
            v-for="link in links"
            :key="link.url"
            :to="link.url"
            class="text-[14px] text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  brand: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentYear = computed(() => new Date().getFullYear())
</script>
