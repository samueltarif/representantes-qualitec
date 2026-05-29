<template>
  <nav aria-label="Breadcrumb" class="flex text-sm text-text-secondary font-body-md">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <!-- Chevron separator for all items after the first one -->
        <span v-if="index > 0" class="material-symbols-outlined text-[16px] mx-1">
          chevron_right
        </span>
        
        <!-- Interactive link if item has 'to' and it's not the last one -->
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="hover:text-text-primary transition-colors flex items-center"
        >
          {{ item.text }}
        </NuxtLink>
        
        <!-- Active plain text for the last item or items without link -->
        <span
          v-else
          :class="index === items.length - 1 ? 'text-text-primary' : 'hover:text-text-primary transition-colors'"
        >
          {{ item.text }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
