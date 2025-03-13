import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 设置兼容日期
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // 设置是否开启服务端渲染
  ssr: true,
  // 设置全局css
  css: [
    '~/assets/css/global.css',
    'vuetify/lib/styles/main.css', //确保正确导入 Vuetify CSS
  ],
  build: {
    transpile: ['vuetify'], //  确保 Vuetify 被正确转译
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'vite-plugin-vuetify',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  i18n: {
    strategy: 'no_prefix', // 添加路由前缀的方式
    locales: ["en", "zh", "es", "fr", "de", "it"], //配置语种
    defaultLocale: 'en', // 默认语种
    vueI18n: '@/i18n/config.ts', //配置
  },
  // i18n: {
  //   locales: [
  //       { name: "English",code: "en", iso: "en-US", dir: "ltr" },
  //       { name: "español",code: "es", iso: "es-LA", dir: "ltr" },
  //       { name: "En français",code: "fr", iso: "fr-FR", dir: "ltr" },
  //       { name: "العربية",code: "ar", iso: "ar-EG", dir: "rtl" },],
  //   defaultLocale: "en",
  //   detectBrowserLanguage: false,
  //  // 👇 Reference the Vue I18n config file
  //  vueI18n: "./i18n.config.ts",
  // }, 
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
    optimizeDeps: {
      include: ['vuetify'],
    },
    vue: {
      template: { transformAssetUrls },
    },
  }
})
