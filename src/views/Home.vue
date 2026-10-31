<template>
  <div class="min-h-screen bg-digilaka-light text-digilaka-dark font-vazirmatn">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-digilaka-primary flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <span class="text-xl font-bold text-digilaka-dark tracking-tight">امیر شاپ</span>
          </div>

          <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" class="hover:text-digilaka-primary transition-colors">صفحه اصلی</a>
            <a href="#" class="hover:text-digilaka-primary transition-colors">دسته‌بندی‌ها</a>
            <a href="#" class="hover:text-digilaka-primary transition-colors">تخفیف‌ها</a>
            <a href="#" class="hover:text-digilaka-primary transition-colors">تماس با ما</a>
          </div>

          <div class="flex items-center gap-3">
            <button class="p-2 text-gray-600 hover:text-digilaka-primary transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-0 right-0 w-2 h-2 bg-digilaka-accent rounded-full border-2 border-white"></span>
            </button>
            <button class="bg-digilaka-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-digilaka-secondary transition-colors">
              سبد خرید
            </button>
          </div>
        </div>
      </nav>
    </header>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="relative rounded-2xl overflow-hidden mb-12 bg-digilaka-dark">
        <div class="absolute inset-0 opacity-30" style="background-image:url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80'); background-size:cover; background-position:center;"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center p-6 md:p-10 text-white">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <span class="inline-block bg-digilaka-accent/20 text-digilaka-accent px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-3">
              تخفیف ویژه الأنواع
            </span>
            <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              تازه‌ترین، بهترین، ارزان‌ترین
            </h1>
            <p class="text-gray-200 text-lg mb-6 max-w-md">
              خرید آنلاین کالاهای grocery با ارسال سریع در روزانه. بازدید کنید و سفارش خود را ثبت کنید.
            </p>
            <button class="bg-digilaka-accent text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2">
              خرید prochacları
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative w-full max-w-md">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" alt="Produce" class="rounded-xl shadow-2xl border-4 border-white/20" />
              <div class="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-digilaka-light flex items-center justify-center text-digilaka-primary font-bold">🛒</div>
                  <div>
                    <p class="text-sm font-medium text-gray-600">سفارش شما</p>
                    <p class="text-lg font-bold text-digilaka-dark">0 تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-digilaka-dark">دسته‌بندی‌ها</h2>
          <a href="#" class="text-sm font-medium text-digilaka-primary hover:underline">مشاهده همه</a>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CategoryCard name="میوه و سبزیجات" icon="🍎" count="142" />
          <CategoryCard name="لبنیات و تخم‌مرغ" icon="🥛" count="89" />
          <CategoryCard name="گوشت و مرغی" icon="🍗" count="64" />
          <CategoryCard name="نان و constitution" icon="🥖" count="51" />
          <CategoryCard name="آنبه و فيتامین" icon="💊" count="73" />
          <CategoryCard name="نوشیدگان" icon="🥤" count="120" />
        </div>
      </section>

      <section class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-digilaka-dark">محصولات ویژه</h2>
          <a href="#" class="text-sm font-medium text-digilaka-primary hover:underline">مشاهده همه</a>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </section>

      <section class="py-12 border-y border-gray-200 bg-white mb-12">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-lg font-semibold text-digilaka-dark">برندهای معتبر</h3>
          <div class="flex gap-2">
            <button class="px-3 py-1 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-digilaka-primary hover:text-digilaka-primary transition-colors">همه</button>
            <button class="px-3 py-1 rounded-full bg-digilaka-primary text-white text-sm">نظریه</button>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="https://via.placeholder.com/150x50?text=Brand+1" alt="Brand" class="h-10 w-auto object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Brand+2" alt="Brand" class="h-10 w-auto object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Brand+3" alt="Brand" class="h-10 w-auto object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Brand+4" alt="Brand" class="h-10 w-auto object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Brand+5" alt="Brand" class="h-10 w-auto object-contain" />
        </div>
      </section>

      <section class="bg-digilaka-dark rounded-2xl p-8 md:p-12 text-white text-center">
        <h3 class="text-2xl font-bold mb-3">ثبت‌نام در خبرنامه</h3>
        <p class="text-gray-300 mb-6 max-w-md mx-auto">آخرین تخفیف‌ها و اخبار امیر شاپ را در ایمیل خود دریافت کنید.</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input type="email" placeholder="ایمیل شما" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-digilaka-primary" />
          <button class="bg-digilaka-accent px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors">ثبت‌نام</button>
        </div>
      </section>
    </section>

    <footer class="bg-white border-t border-gray-200 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p class="text-digilaka-dark font-medium">امیر شاپ - خرید آنلاین کالاهای grocery</p>
          <p>کلیه حقوق برای امیر شاپ محفوظ است.</p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-digilaka-primary">کشف شرایط</a>
            <a href="#" class="hover:text-digilaka-primary">حریم خصوصی</a>
            <a href="#" class="hover:text-digilaka-primary">پشتیبانی</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import CategoryCard from '../components/CategoryCard.vue'
import ProductCard from '../components/ProductCard.vue'

const products = [
  { id: 1, name: 'گاو پیاز تازه', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80', price: 45000, discount: 30, rating: 4.5, badge: 'تازه' },
  { id: 2, name: 'سیب سرخ', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80', price: 28000, discount: null, rating: 4.8, badge: 'پرواز' },
  { id: 3, name: 'ماست طبیعی', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a341?w=400&q=80', price: 19000, discount: 15, rating: 4.2, badge: null },
  { id: 4, name: 'مرغ چرم‌دار', image: 'https://images.unsplash.com/photo-1604906219249-13cbf4e53b59?w=400&q=80', price: 89000, discount: null, rating: 4.6, badge: 'تازه' },
  { id: 5, name: 'نان سنتی', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80', price: 12000, discount: null, rating: 4.9, badge: 'نوزاد' },
  { id: 6, name: 'آبنوس', image: 'https://images.unsplash.com/photo-1611755587657-79f08c56078e?w=400&q=80', price: 55000, discount: 25, rating: 4.4, badge: null },
  { id: 7, name: 'زیتون', image: 'https://images.unsplash.com/photo-1590874282371-19513ee6d560?w=400&q=80', price: 38000, discount: null, rating: 4.1, badge: 'تازه' },
  { id: 8, name: 'زیتون سبز', image: 'https://images.unsplash.com/photo-1590874282371-19513ee6d560?w=400&q=80', price: 62000, discount: 10, rating: 4.7, badge: null },
]
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
