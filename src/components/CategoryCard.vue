<template>
  <div class="group relative">
    <div class="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div class="relative h-48 bg-gray-100 overflow-hidden">
        <img :src="icon" :alt="name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span class="text-2xl">{{ icon }}</span>
        </div>
      </div>
      <div class="p-3">
        <h3 class="text-sm font-medium text-digilaka-dark line-clamp-1">{{ name }}</h3>
        <p class="text-xs text-gray-500 mt-1">{{ count }} محصول</p>
      </div>
    </div>
    <button class="absolute inset-0 opacity-0" aria-label="انتخاب دسته‌بندی {{ name }}"></button>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  count: { type: Number, required: true },
})
</script>

<style scoped>
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
