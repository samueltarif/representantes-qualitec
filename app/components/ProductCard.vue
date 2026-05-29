<template>
  <component
    :is="wide ? 'div' : 'NuxtLink'"
    :to="wide ? undefined : to"
    class="bg-surface-off-white rounded-[40px] overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-md"
    :class="[
      wide 
        ? 'col-span-1 md:col-span-2 p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 relative' 
        : 'p-10 flex flex-col h-full cursor-pointer col-span-1'
    ]"
  >
    <!-- Wide Horizontal Template -->
    <template v-if="wide">
      <div class="flex-grow flex-shrink z-10 md:w-1/2">
        <div v-if="tag" class="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-4 font-label-sm text-label-sm uppercase tracking-wider text-text-secondary select-none">
          {{ tag }}
        </div>
        <h2 class="font-headline-xl text-headline-xl mb-4 group-hover:text-link-blue transition-colors duration-200">
          {{ title }}
        </h2>
        <p class="font-body-lg text-body-lg text-text-secondary mb-8 leading-relaxed">
          {{ description }}
        </p>
        <NuxtLink :to="to" class="text-link-blue font-body-md text-body-md inline-flex items-center gap-1 hover:underline group-hover:translate-x-1 transition-transform duration-200">
          {{ linkText }}
          <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        </NuxtLink>
      </div>
      
      <div class="flex-grow-0 flex-shrink-0 w-full md:w-1/2 relative h-[400px] md:h-[500px]">
        <div class="absolute inset-0 bg-gradient-to-tr from-surface-off-white/80 to-transparent z-10 hidden md:block"></div>
        <img
          :src="image"
          :alt="imageAlt"
          class="w-full h-full object-cover rounded-2xl md:rounded-none group-hover:scale-[1.03] transition-transform duration-700 ease-in-out mix-blend-multiply"
        />
      </div>
    </template>

    <!-- Compact Standard Template -->
    <template v-else>
      <div class="mb-8 z-10">
        <h3 class="font-headline-lg text-headline-lg mb-3 group-hover:text-link-blue transition-colors duration-200">
          {{ title }}
        </h3>
        <p class="font-body-md text-body-md text-text-secondary leading-relaxed">
          {{ description }}
        </p>
      </div>
      <div class="mt-auto relative h-[300px] rounded-2xl overflow-hidden w-full">
        <img
          :src="image"
          :alt="imageAlt"
          class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
          :class="mixBlend ? 'mix-blend-multiply opacity-80' : ''"
        />
      </div>
    </template>
  </component>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true,
    default: '#'
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Imagem do produto'
  },
  tag: {
    type: String,
    default: ''
  },
  wide: {
    type: Boolean,
    default: false
  },
  linkText: {
    type: String,
    default: 'Ver especificações'
  },
  mixBlend: {
    type: Boolean,
    default: false
  }
})
</script>
