<template>
  <div class="bg-surface-off-white rounded-[40px] p-10 md:p-16 flex flex-col justify-center shadow-sm transition-all duration-300 hover:shadow-md">
    <!-- Icon header (only for text layout) -->
    <span v-if="icon && !specs" class="material-symbols-outlined text-[32px] mb-6 text-text-primary">
      {{ icon }}
    </span>

    <h3 class="font-headline-lg text-headline-lg" :class="specs ? 'mb-8' : 'mb-4'">
      {{ title }}
    </h3>

    <!-- Plain Text Layout -->
    <p v-if="description && !specs" class="font-body-md text-body-md text-text-secondary leading-relaxed">
      {{ description }}
    </p>

    <!-- Spec List Layout -->
    <ul v-if="specs" class="space-y-6">
      <li
        v-for="(spec, index) in specs"
        :key="index"
        class="flex items-start gap-4 pb-4"
        :class="index < specs.length - 1 ? 'border-b border-secondary-fixed-dim' : ''"
      >
        <span class="material-symbols-outlined text-text-secondary select-none">
          {{ spec.icon || 'check_circle' }}
        </span>
        <div>
          <div class="font-body-md text-body-md font-semibold text-text-primary">
            {{ spec.title }}
          </div>
          <div class="font-label-sm text-label-sm text-text-secondary mt-0.5">
            {{ spec.description }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  specs: {
    type: Array,
    default: null // Array of { title: string, description: string, icon?: string }
  }
})
</script>
