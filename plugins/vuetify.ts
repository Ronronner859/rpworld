import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // ✅ 确保正确导入 CSS

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false, // 关键！防止 SSR 处理 `.css` 文件错误
    components,
    directives
  })

  nuxtApp.vueApp.use(vuetify)
})
