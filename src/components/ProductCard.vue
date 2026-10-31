<template>
  <div class="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
    <div class="relative h-48 bg-gray-100 overflow-hidden">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div class="absolute top-2 left-2">
        <span class="inline-block bg-digilaka-primary text-white text-xs font-bold px-2 py-1 rounded">{{ product.badge }}</span>
      </div>
      <div v-if="product.discount" class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        تخفیف {{ product.discount }}%
      </div>
      <button class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-digilaka-dark text-xs font-medium px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        افزودن به سبد
      </button>
    </div>
    <div class="p-3">
      <div class="flex justify-between items-start mb-1">
        <span class="text-xs font-medium text-gray-500">{{ $formatPrice(product.price) }}</span>
        <span v-if="product.discount" class="text-xs text-red-500 font-bold line-through">{{ $formatPrice(Math.round(product.price / (1 - product.discount / 100))) }}</span>
      </div>
      <h3 class="text-sm font-medium text-digilaka-dark line-clamp-2 mb-2">{{ product.name }}</h3>
      <div class="flex items-center gap-1">
        <span class="text-[10px] text-yellow-500">★</span>
        <span class="text-xs font-medium text-digilaka-dark">{{ product.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
})
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
