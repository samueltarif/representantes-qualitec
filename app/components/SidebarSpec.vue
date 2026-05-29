<template>
  <aside class="hidden lg:flex flex-col gap-2 h-max sticky top-32">
    <div class="mb-6">
      <div class="text-text-primary font-headline-lg mb-1 tracking-tight">
        {{ title }}
      </div>
      <div class="text-text-secondary font-body-md">
        {{ subtitle }}
      </div>
    </div>
    <nav class="flex flex-col gap-1">
      <NuxtLink
        v-for="item in items"
        :key="item.text"
        :to="item.to || '#'"
        class="rounded-lg px-4 py-3 flex items-center gap-3 text-[15px] transition-all"
        :class="item.active ? 'text-link-blue font-semibold bg-link-blue/10' : 'text-text-secondary hover:bg-surface-variant/50'"
      >
        <span v-if="item.icon" class="material-symbols-outlined text-[20px]">
          {{ item.icon }}
        </span>
        {{ item.text }}
      </NuxtLink>
    </nav>
    <div v-if="ctaText" class="mt-8">
      <BaseButton
        variant="secondary"
        class="w-full !border !border-outline-variant !text-text-primary !font-semibold !text-[14px] !py-3 !rounded-xl !hover:bg-surface-variant flex items-center justify-center gap-2"
        @click="$emit('cta-click')"
      >
        <span v-if="ctaIcon" class="material-symbols-outlined text-[18px]">{{ ctaIcon }}</span>
        {{ ctaText }}
      </BaseButton>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  ctaText: {
    type: String,
    default: ''
  },
  ctaIcon: {
    type: String,
    default: ''
  }
})

defineEmits(['cta-click'])
</script>
