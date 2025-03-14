<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { locale, setLocale } = useI18n()

// 屏幕尺寸
const screenSize = ref({
  width: 0,
  height: 0
});

// 更新屏幕尺寸
const updateScreenSize = () => {
  screenSize.value = {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

// 监听窗口大小变化
onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

// 导航菜单项
const menuItems = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  // { name: 'MATERIALS', path: '/materials' },
  // { name: 'RESOURCES', path: '/resources' },
  // { name: 'NEWS', path: '/news' },
  // { name: 'ABOUT US', path: '/about' },
];

// 控制移动端菜单
const isMobileMenuOpen = ref(false);

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between header-height">
        <!-- Left Side: Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="block">
            <img src="~/assets/imgs/logo.png" alt="RPWORLD" class="logo-image">
          </NuxtLink>
        </div>

        <!-- Right Side: Navigation and Button -->
        <div class="flex items-center">
          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-5 mr-5">
            <NuxtLink
              v-for="(item, index) in menuItems"
              :key="item.name"
              :to="item.path"
              class="nav-item text-[#555555] hover:text-red-600 transition-colors duration-200 font-bold"
            >
              {{ $t(`rp-header.menu[${index}].name`) }}
            </NuxtLink>
          </div>

          <!-- Get A Quote Button -->
          <NuxtLink to="/quote"
            class="hidden lg:block bg-red-600 text-white text-[12px] px-6 py-2 rounded hover:bg-red-700 transition-colors duration-200">
            <!-- GET A QUOTE -->
            {{
              $t('rp-header.title')
            }}
          </NuxtLink>

          <!-- 中英文切换-->
          <v-menu>
            <template v-slot:activator="{ props }">
              <div class="ml-4 language-switch">
                <v-btn 
                  color="#e50012" 
                  icon="mdi-translate" 
                  v-bind="props"
                  class="language-btn"
                  :class="{'mobile-lang-btn': screenSize.width <= 768}"
                >
                  {{ locale.toUpperCase() }}
                </v-btn>
              </div>
            </template>
            <v-list class="language-list">
              <v-list-item @click="setLocale('en')" class="lang-item">
                <v-list-item-title
                  :class="locale === 'en' ? 'text-[#177FD5]' : 'text-[#413E3A]'">English</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('de')" class="lang-item">
                <v-list-item-title
                  :class="locale === 'de' ? 'text-[#177FD5]' : 'text-[#413E3A]'">German</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('fr')" class="lang-item">
                <v-list-item-title
                  :class="locale === 'fr' ? 'text-[#177FD5]' : 'text-[#413E3A]'">French</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('es')" class="lang-item">
                <v-list-item-title
                  :class="locale === 'es' ? 'text-[#177FD5]' : 'text-[#413E3A]'">Japanese</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('it')" class="lang-item">
                <v-list-item-title
                  :class="locale === 'it' ? 'text-[#177FD5]' : 'text-[#413E3A]'">Italian</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden text-gray-700" @click="toggleMobileMenu">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="lg:hidden fixed left-0 right-0 bg-white shadow-lg z-50 mobile-menu">
        <div class="py-2">
          <!-- Language Switcher for Mobile -->
          <div class="px-4 py-2 border-b border-gray-100">
            <div class="grid grid-cols-2 gap-2 mobile-lang-grid">
              <button 
                v-for="lang in [
                  { code: 'en' as const, name: 'English' },
                  { code: 'de' as const, name: 'German' },
                  { code: 'fr' as const, name: 'French' },
                  { code: 'es' as const, name: 'Japanese' },
                  { code: 'it' as const, name: 'Italian' }
                ]"
                :key="lang.code"
                @click="setLocale(lang.code)"
                class="mobile-lang-btn"
                :class="locale === lang.code ? 'mobile-lang-btn-active' : ''"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="mobile-nav-links">
            <NuxtLink 
              v-for="(item, index) in menuItems" 
              :key="item.name" 
              :to="item.path"
              class="mobile-nav-item"
              @click="isMobileMenuOpen = false"
            >
              {{ $t(`rp-header.menu[${index}].name`) }}
            </NuxtLink>
          </div>

          <!-- Quote Button -->
          <NuxtLink 
            to="/quote"
            class="mobile-quote-btn"
            @click="isMobileMenuOpen = false"
          >
            {{ $t('rp-header.title') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-20"></div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1100px;
}

@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 20px;
  }
}

.language-switch {
  position: relative;
}

.language-btn {
  font-size: 14px;
  height: 36px !important;
  width: 36px !important;
}

.mobile-lang-btn {
  height: 32px !important;
  width: 32px !important;
  font-size: 12px;
}

.language-list {
  min-width: 150px;
}

.lang-item {
  padding: 8px 16px;
}

@media (max-width: 480px) {
  .language-btn {
    margin-right: 8px;
  }
  
  .lang-item {
    padding: 6px 12px;
  }
}

/* 移动端菜单样式优化 */
.mobile-menu {
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  top: 60px;
  background-color: white;
  border-top: 1px solid #eee;
}

.mobile-lang-grid {
  max-width: 100%;
  margin: 0 auto;
  padding: 8px 0;
}

.mobile-lang-btn {
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  background-color: #f5f5f5;
  color: #555555;
  border: 1px solid transparent;
}

.mobile-lang-btn-active {
  background-color: #fff;
  color: #e50012;
  border-color: #e50012;
}

.mobile-nav-links {
  padding: 8px 16px;
}

.mobile-nav-item {
  display: block;
  padding: 12px 16px;
  margin: 4px 0;
  font-size: 14px;
  color: #555555;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-nav-item:hover {
  background-color: #f5f5f5;
  color: #e50012;
}

.mobile-quote-btn {
  display: block;
  margin: 16px;
  padding: 12px;
  text-align: center;
  background-color: #e50012;
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.mobile-quote-btn:hover {
  background-color: #cc0010;
}

@media (max-width: 480px) {
  .mobile-menu {
    top: 50px;
  }

  .mobile-lang-btn {
    padding: 8px;
    font-size: 13px;
  }

  .mobile-nav-item {
    padding: 10px 14px;
    font-size: 13px;
  }

  .mobile-quote-btn {
    margin: 12px;
    padding: 10px;
    font-size: 13px;
  }
}

/* 添加滚动条样式 */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.mobile-menu::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Logo 响应式调整 */
.logo-image {
  width: 337px;
  height: 50px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .logo-image {
    width: 270px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .logo-image {
    width: 200px;
    height: 30px;
  }
}

/* Header 高度响应式调整 */
.header-height {
  height: 80px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .header-height {
    height: 70px;
  }
}

@media (max-width: 480px) {
  .header-height {
    height: 60px;
  }
}
</style>