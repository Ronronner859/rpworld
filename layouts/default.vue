<script setup lang="ts">
const {locale, setLocale, tm} = useI18n()
import RpHeader from '~/components/rp-header.vue'
import RpFooter from '~/components/rp-footer.vue'

const seo_title = computed(() => {
  return tm("rp-world.title");
})
const seo_rpTitle = computed(() => {
  return tm("rp-world.ogTitle");
})
const seo_description = computed(() => {
  return tm("rp-world.description");
})
const seo_rpDescription = computed(() => {
  return tm("rp-world.ogDescription");
})

// SEO会根据中英文切换做不同的SEO 利于搜索引擎收录
useSeoMeta({
  title: seo_title,
  ogTitle: seo_rpTitle,
  description: seo_description,
  ogDescription: seo_rpDescription,
  ogImage: ''
})

</script>
<template>
  <v-app>
    <!--导航栏-->
    <RpHeader/>

    <!--主页面-->
    <NuxtPage/>

    <!--尾部-->
    <RpFooter/>
  </v-app>
</template>

<style scoped>

</style>