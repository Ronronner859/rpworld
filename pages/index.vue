<script setup lang="ts">
import { onMounted, ref, onBeforeMount } from "vue";
// 用tm代替t，因为tm是响应式的而且可以解析对象
const { locale, setLocale, tm } = useI18n()


/**
 * 屏幕尺寸
 */
const screenSize = ref({ width: 0, height: 0 });

/**
 * 图片是否加载完成
 */
const home_image1_load = ref(false)

/**
 * 获取组元素组件的宽度
 */
const getGroupWidth: any = computed(() => {
  if (screenSize.value.width > 1470) {
    return 1440;
  } else if (screenSize.value.width > 1008) {
    return 1000;
  } else {
    return 560;
  }
})
// 国际化
const tableData = ref([
  {
    feature: 'Upfront Costs', 
    traditional: 'High (Tooling, Setup)',
    onDemand: 'Low (Minimal Setup)'
  },
  {
    feature: 'Production Time',
    traditional: 'Weeks to Months',
    onDemand: 'Days to Weeks'
  },
  {
    feature: 'Flexibility',
    traditional: 'Limited',
    onDemand: 'Highly Customizable'
  },
  {
    feature: 'Waste',
    traditional: 'High (Excess Inventory)',
    onDemand: 'Low (Production on Demand)'
  },
  {
    feature: 'Scalability',
    traditional: 'Best for Mass Production',
    onDemand: 'Ideal for Low-to-Mid Volume'
  }
]);

// 更新屏幕尺寸的方法
const updateScreenSize = () => {
  screenSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  // 初始化屏幕尺寸
  updateScreenSize();
})

// 组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

/**
 * 图片加载完成回调
 * @param val 图片地址
 */
const image_load = (val: any) => {
  home_image1_load.value = true;
}

</script>

<template>
  <v-app>
    <!-- 主图-->
    <v-sheet class="banner-container">
      <img src="~/assets/imgs/banner.jpg" alt="banner" class="banner-image" @load="image_load">
    </v-sheet>

    <!-- grocery shopping -->
    <v-sheet class="grocery-shopping-container">
      <div class="grocery-shopping">
        {{ $t('rp-center-text.grocery_shopping_text') }}
      </div>
    </v-sheet>

    <!-- company introduction-->
    <v-sheet class="company-intro">
      <div class="container mx-auto">
        <div class="intro-content">
          <div class="intro-text">
            <p class="intro-paragraph">
              {{ $t('rp-center-text.subtitle') }}
            </p>

            <ul class="industry-list">
              <li class="industry-item inline">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.medical_devices') }}
                    <span class="industry-title-colon">:</span>  
                  </span>
                  {{ $t('rp-center-text.medical_devices_text') }}
                </span>
              </li>
              <br>
              <li class="industry-item inline">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.scientific_instruments') }}
                    <span class="industry-title-colon">:</span>
                  </span>
                  {{ $t('rp-center-text.scientific_instruments_text') }}
                </span>
              </li>
              <br>
              <li class="industry-item inline">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.automotive') }}
                    <span class="industry-title-colon">:</span>
                  </span>
                  {{ $t('rp-center-text.automotive_text') }}
                </span>
              </li>
            </ul>
          </div>

          <div class="intro-image">
            <img src="~/assets/imgs/img-04.png" alt="Manufacturing Process" class="main-image">
          </div>
        </div>
      </div>
    </v-sheet>

    <!-- On-Demand Manufacturing vs. Traditional Manufacturing -->
    <v-sheet class="on-demand-vs-traditional">
      <div class="container mx-auto">
        <div class="title font-bold">
          {{ $t('rp-center-text.on_demand_vs_traditional') }}
        </div>
        <p class="traditional-text">{{ $t('rp-center-text.on_demand_vs_traditional_text') }}</p>
      </div>
    </v-sheet>

    <!-- Todo: table -->
    <div class="table-wrapper">
      <v-sheet class="table-container mx-auto my-8" elevation="1">
        <v-table>
          <thead>
            <tr class="header-row">
              <th class="text-center first-column">{{ $t('rp-center-text.feature') }}</th>
              <th class="text-center">{{ $t('rp-center-text.traditional_manufacturing') }}</th>
              <th class="text-center">{{ $t('rp-center-text.on_demand_manufacturing_table') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index" :class="index % 2 === 1 ? 'striped-row' : ''">
              <td class="text-center first-column">{{ item.feature }}</td>
              <td class="text-center">{{ item.traditional }}</td>
              <td class="text-center">{{ item.onDemand }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-sheet>
    </div>

    <!-- product development journey -->
    <v-sheet class="product-development-journey">
      <div class="container mx-auto">
        <div class="title">
          {{ $t('rp-center-text.product_development_journey') }}
        </div>
      </div>
    </v-sheet>

    <!-- Todo: timeline -->
    <v-sheet>
      <div class="outer-container">
        <div class="timeline-container mx-auto bg-[#f6f6f8]">
          <!-- Title Section -->
          <div class="text-left mb-6">
            <h1 class="text-title font-bold mb-2 pl-0 md:pl-0">
              {{ $t('rp-center-text.comparing_development_timelines') }}
            </h1>
            <h2 class="text-title font-bold pl-0 md:pl-0">
              {{ $t('rp-center-text.on_demand_manufacturing_vs_traditional_manufacturing') }}
            </h2>
          </div>

          <!-- Timeline Container -->
          <div class="space-y-16">
            <!-- On-demand Manufacturing Timeline -->
            <div class="relative">
              <div class="flex items-start gap-1">
                <div class="w-48 md:w-48 text-left">
                  <span class="text-blue-600 text-xl font-bold">{{ $t('rp-center-text.on_demand_manufacturing_timeline') }}</span>
                </div>
                <div class="flex-1 arrow-container-on-demand">
                  <div class="arrow-container">
                    <!-- Arrow 1 -->
                    <div class="arrow blue-arrow-1">
                      <div class="arrow-content">
                        <h3 class="text-white font-semibold text-lg">{{ $t('rp-center-text.rapid_prototyping') }}</h3>
                        <div class="text-yellow-300 font-bold">2 <span class="text-white">{{ $t('rp-center-text.weeks') }}</span></div>
                      </div>
                    </div>
                    <!-- Arrow 2 -->
                    <div class="arrow blue-arrow-2">
                      <div class="arrow-content">
                        <h3 class="text-white font-semibold text-lg">{{ $t('rp-center-text.rapid_tooling') }}</h3>
                        <div class="text-yellow-300 font-bold">3 <span class="text-white">{{ $t('rp-center-text.weeks') }}</span></div>
                      </div>
                    </div>
                    <!-- Arrow 3 -->
                    <div class="arrow blue-arrow-3">
                      <div class="arrow-content">
                        <h3 class="text-white font-semibold text-lg">{{ $t('rp-center-text.production_tooling') }}</h3>
                        <div class="text-yellow-300 font-bold">6 <span class="text-white">{{ $t('rp-center-text.weeks') }}</span></div>
                      </div>
                    </div>
                    <!-- Time to Market -->
                    <div class="time-to-market">
                      <span class="text-gray-800 font-semibold block">{{ $t('rp-center-text.time_to_market') }}</span>
                      <span class="text-blue-600 font-bold text-2sm"> 11 {{ $t('rp-center-text.weeks') }}</span>
                    </div>
                  </div>
                  <!-- Process descriptions -->
                  <div class="process-descriptions">
                    <div class="process-item font-bold">
                      {{ $t('rp-center-text.cnc_machining') }} / {{ $t('rp-center-text.vacuum_casting') }}<br>
                      {{ $t('rp-center-text.three_d_printing') }}
                    </div>
                    <div class="process-item font-bold">
                      {{ $t('rp-center-text.injection_molding') }} ({{ $t('rp-center-text.aluminum_tooling') }})
                    </div>
                    <div class="process-item font-bold">
                      {{ $t('rp-center-text.injection_molding') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Traditional Manufacturing Timeline -->
            <div class="relative arrow-container-mobile">
              <div class="flex items-start gap-1">
                <div class="w-48 md:w-48 text-left">
                  <span class="text-gray-700 text-xl font-bold">{{ $t('rp-center-text.traditional_manufacturing') }}</span>
                </div>
                <div class="flex-1 arrow-container-on-traditional">
                  <div class="arrow-container arrow-container-traditional">
                    <!-- Arrow 1 -->
                    <div class="arrow arrow-traditional gray-arrow-1">
                      <div class="arrow-content arrow-content-traditional">
                        <h3 class="text-white font-semibold text-lg">{{ $t('rp-center-text.rapid_prototyping') }}</h3>
                        <div class="text-white font-bold">{{ $t('rp-center-text.weeks') }}</div>
                      </div>
                    </div>
                    <!-- Arrow 2 -->
                    <div class="arrow arrow-traditional gray-arrow-2">
                      <div class="arrow-content arrow-content-traditional">
                        <h3 class="text-white font-semibold text-lg">{{ $t('rp-center-text.rapid_tooling') }}</h3>
                        <div class="text-white font-bold">{{ $t('rp-center-text.weeks') }}</div>
                      </div>
                    </div>
                    <!-- Arrow 3 -->
                    <div class="arrow arrow-traditional gray-arrow-3">
                      <div class="arrow-content arrow-content-traditional">
                        <h3 class="text-white font-semibold text-lg">{{ $t('rp-center-text.production_tooling') }}</h3>
                        <div class="text-white font-bold">{{ $t('rp-center-text.weeks') }}</div>
                      </div>
                    </div>
                    <!-- Time to Market -->
                    <div class="time-to-market">
                      <span class="text-gray-800 font-semibold block">{{ $t('rp-center-text.time_to_market') }}</span>
                      <span class="text-gray-700 font-bold text-2sm"> 40 {{ $t('rp-center-text.weeks') }}</span>
                    </div>
                  </div>
                  <!-- Process descriptions -->
                  <div class="process-descriptions">
                    <div class="process-item font-bold">
                      {{ $t('rp-center-text.cnc_machining') }} / {{ $t('rp-center-text.three_d_printing') }}
                    </div>
                    <div class="process-item font-bold">
                      {{ $t('rp-center-text.injection_molding') }} ({{ $t('rp-center-text.steel_tooling') }})
                    </div>
                    <div class="process-item font-bold">
                      {{ $t('rp-center-text.injection_molding') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-sheet>

    <!-- Why We Love On-Demand Manufacturing -->
    <v-sheet class="on-demand-manufacturing">
      <div class="container mx-auto">
        <div class="title font-bold">
          {{ $t('rp-center-text.on_demand_manufacturing') }}
        </div>
        <div class="content">
          {{ $t('rp-center-text.on_demand_manufacturing_text') }}
        </div>
        <div class="content-first">
          <div class="content-first-left mr-10">
            <!-- {{ $t('rp-center-text.on_demand_manufacturing_text_first') }} -->
            <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_first_title') }}</p>
            <p>{{ $t('rp-center-text.on_demand_manufacturing_text_first_text') }}</p>
            <ul class="list-disc pl-5">
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_first_list_item_1') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_first_list_item_2') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_first_list_item_3') }}</li>
            </ul>
            <p>{{ $t('rp-center-text.on_demand_manufacturing_text_first_text_2') }}</p>
          </div>
          <div class="content-first-right">
            <img src="~/assets/imgs/img-03.jpg" alt="Manufacturing Process" class="feature-image">
          </div>
        </div>
        <div class="content-second">
          <div class="content-second-left">
            <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_second_title') }}</p>
            <p>{{ $t('rp-center-text.on_demand_manufacturing_text_second_text') }}</p>
            <p>{{ $t('rp-center-text.on_demand_manufacturing_text_second_text_2') }}</p>
          </div>
        </div>
        <div class="content-third">
          <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_third_title') }}</p>
          <p>{{ $t('rp-center-text.on_demand_manufacturing_text_third_text') }}</p>
          <ul class="list-disc pl-5">
            <li>{{ $t('rp-center-text.on_demand_manufacturing_text_third_list_item_1') }}</li>
            <li>{{ $t('rp-center-text.on_demand_manufacturing_text_third_list_item_2') }}</li>
            <li>{{ $t('rp-center-text.on_demand_manufacturing_text_third_list_item_3') }}</li>
          </ul>
        </div>
        <div class="content-fourth">
          <div class="content-fourth-left mr-10">
            <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_fourth_title') }}</p>
            <p>{{ $t('rp-center-text.on_demand_manufacturing_text_fourth_text') }}</p>
            <ul class="list-disc pl-5">
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_fourth_list_item_1') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_fourth_list_item_2') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_fourth_list_item_3') }}</li>
            </ul>
          </div>
          <div class="content-fourth-right">
            <img src="~/assets/imgs/img-02.jpg" alt="Manufacturing Process" class="feature-image">
          </div>
        </div>
        <div class="content-fifth">
          <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_fifth_title') }}</p>
          <p>{{ $t('rp-center-text.on_demand_manufacturing_text_fifth_text') }}</p>
        </div>
        <!-- RPWORLD is Your Reliable Partner for On-demand Manufacturing -->
        <div class="content-sixth">
          <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_sixth_title') }}</p>
          <p>{{ $t('rp-center-text.on_demand_manufacturing_text_sixth_text') }}</p>
        </div>
        <div class="content-seventh">
          <div class="content-first-left">
            <p class="font-bold mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_seventh_title') }}</p>
            <ul class="list-disc pl-5 pt-5">
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_seventh_list_item_1') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_seventh_list_item_2') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_seventh_list_item_3') }}</li>
              <li>{{ $t('rp-center-text.on_demand_manufacturing_text_seventh_list_item_4') }}</li>
            </ul>
          </div>
          <div class="content-first-right">
            <img src="~/assets/imgs/img-01.jpg" alt="Manufacturing Process" class="feature-image">
          </div>
        </div>
        <div class="content-eighth">
          <p class="mb-2">{{ $t('rp-center-text.on_demand_manufacturing_text_eighth_text') }}</p>
        </div>
      </div>
    </v-sheet>
  </v-app>
</template>

<style scoped lang="scss" src="./index.scss"></style>