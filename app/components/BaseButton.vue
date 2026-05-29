<template>
  <component
    :is="componentType"
    :to="to ? to : undefined"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center font-body-md font-semibold text-[15px] rounded-full transition-all duration-200 ease-in-out select-none active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-link-blue focus:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      (disabled || loading) ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
      customClass
    ]"
    v-bind="$attrs"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>

    <!-- Slot for prepended icon -->
    <slot name="icon-left" />

    <!-- Default slot content -->
    <slot />

    <!-- Slot for appended icon -->
    <slot name="icon-right" />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  to: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  }
})

// Dynamically determine the wrapper element based on whether a path/url 'to' is specified.
const componentType = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink')
  }
  return 'button'
})

// Variant Classes
const variantClasses = {
  primary: 'bg-link-blue hover:bg-opacity-95 text-on-primary shadow-sm hover:shadow-md active:shadow-sm',
  secondary: 'bg-surface-off-white hover:bg-surface-container text-text-primary',
  outline: 'border border-outline/30 hover:bg-surface-container text-text-primary',
  text: 'text-text-primary hover:text-text-secondary bg-transparent active:scale-100 p-0 focus:ring-0 focus:ring-offset-0'
}

// Size Classes
const sizeClasses = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-8 py-4 text-[17px]'
}
</script>
