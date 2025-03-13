<script setup lang="ts">
import { ref } from "vue";

const { locale, setLocale } = useI18n()

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
      <nav class="flex items-center justify-between h-20">
        <!-- Left Side: Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="block">
            <img src="~/assets/imgs/logo.png" alt="RPWORLD" class="w-[337px] h-[50px]">
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
              class="text-[12px] text-[#555555] hover:text-red-600 transition-colors duration-200 font-bold"
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
              <div class="ml-4">
                <v-btn color="#e50012" icon="mdi-translate" v-bind="props"></v-btn>
              </div>
            </template>
            <v-list>
              <v-list-item @click="setLocale('en')">
                <v-list-item-title
                  :class="locale === 'en' ? 'text-[#177FD5]' : 'text-[#413E3A]'">English</v-list-item-title>
              </v-list-item>
              <!-- <v-list-item @click="setLocale('zh')">
                <v-list-item-title :class="locale === 'zh' ? 'text-[#177FD5]' : 'text-[#413E3A]'">Simplified
                  Chinese</v-list-item-title>
              </v-list-item> -->
              <v-list-item @click="setLocale('de')">
                <v-list-item-title
                  :class="locale === 'de' ? 'text-[#177FD5]' : 'text-[#413E3A]'">German</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('fr')">
                <v-list-item-title
                  :class="locale === 'fr' ? 'text-[#177FD5]' : 'text-[#413E3A]'">French</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('es')">
                <v-list-item-title
                  :class="locale === 'es' ? 'text-[#177FD5]' : 'text-[#413E3A]'">Japanese</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setLocale('it')">
                <v-list-item-title
                  :class="locale === 'it' ? 'text-[#177FD5]' : 'text-[#413E3A]'">Italian</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden text-gray-700" @click="toggleMobileMenu">
            <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-50">
        <div class="py-2 space-y-2">
          <!-- Language Switcher for Mobile -->
          <div class="px-4 py-2 border-b border-gray-100">
            <div class="flex items-center space-x-4">
              <button @click="setLocale('en')" class="flex-1 py-2 px-4 rounded-md text-[12px]"
                :class="locale === 'en' ? 'bg-red-50 text-red-600' : 'text-[#555555]'">
                English
              </button>
              <!-- <button @click="setLocale('zh')" class="flex-1 py-2 px-4 rounded-md text-[12px]"
                :class="locale === 'zh' ? 'bg-red-50 text-red-600' : 'text-[#555555]'">
                Simplified Chinese
              </button> -->
              <button @click="setLocale('de')" class="flex-1 py-2 px-4 rounded-md text-[12px]"
                :class="locale === 'de' ? 'bg-red-50 text-red-600' : 'text-[#555555]'">
                German
              </button>
              <button @click="setLocale('fr')" class="flex-1 py-2 px-4 rounded-md text-[12px]"
                :class="locale === 'fr' ? 'bg-red-50 text-red-600' : 'text-[#555555]'">
                French
              </button>
              <button @click="setLocale('es')" class="flex-1 py-2 px-4 rounded-md text-[12px]"
                :class="locale === 'es' ? 'bg-red-50 text-red-600' : 'text-[#555555]'">
                Spanish
              </button>
              <button @click="setLocale('it')" class="flex-1 py-2 px-4 rounded-md text-[12px]"
                :class="locale === 'it' ? 'bg-red-50 text-red-600' : 'text-[#555555]'">
                Italian
              </button>
            </div>
          </div>

          <!-- Navigation Links -->
          <NuxtLink v-for="(item, index) in menuItems" :key="item.name" :to="item.path"
            class="block px-4 py-2 text-[12px] text-[#555555] hover:bg-gray-100" @click="isMobileMenuOpen = false">
            {{ $t(`rp-header.menu[${index}].name`) }}
          </NuxtLink>

          <!-- Quote Button -->
          <NuxtLink to="/quote"
            class="block mx-4 my-3 text-center text-white text-[12px] bg-red-600 hover:bg-red-700 py-3 rounded"
            @click="isMobileMenuOpen = false">
            {{ $t('rp-header.title') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-20"></div>
</template>

<style scoped>
.container {
  max-width: 1100px;
}

@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 20px;
  }
}
</style>