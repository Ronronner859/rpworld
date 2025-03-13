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
                  <span class="industry-title">{{ $t('rp-center-text.medical_devices') }} </span>
                  <span class="industry-title-colon">:</span>
                  {{ $t('rp-center-text.medical_devices_text') }}
                </span>
              </li>
              <br>
              <li class="industry-item inline">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.scientific_instruments') }}</span>
                  <span class="industry-title-colon">:</span>
                  {{ $t('rp-center-text.scientific_instruments_text') }}
                </span>
              </li>
              <br>
              <li class="industry-item inline">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.automotive') }}</span>
                  <span class="industry-title-colon">:</span>
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
              <th class="text-center first-column">Feature</th>
              <th class="text-center">Traditional Manufacturing</th>
              <th class="text-center">On-Demand Manufacturing</th>
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
              Comparing Development Timelines:
            </h1>
            <h2 class="text-title font-bold pl-0 md:pl-0">
              On-Demand Manufacturing vs. Traditional Manufacturing
            </h2>
          </div>

          <!-- Timeline Container -->
          <div class="space-y-16">
            <!-- On-demand Manufacturing Timeline -->
            <div class="relative">
              <div class="flex items-start gap-1">
                <div class="w-48 md:w-48 text-left">
                  <span class="text-blue-600 text-xl font-bold">On-demand<br>Manufacturing</span>
                </div>
                <div class="flex-1 arrow-container-on-demand">
                  <div class="arrow-container">
                    <!-- Arrow 1 -->
                    <div class="arrow blue-arrow-1">
                      <div class="arrow-content">
                        <h3 class="text-white font-semibold text-lg">Rapid Prototyping</h3>
                        <div class="text-yellow-300 font-bold">2 <span class="text-white">weeks</span></div>
                      </div>
                    </div>
                    <!-- Arrow 2 -->
                    <div class="arrow blue-arrow-2">
                      <div class="arrow-content">
                        <h3 class="text-white font-semibold text-lg">Rapid Tooling</h3>
                        <div class="text-yellow-300 font-bold">3 <span class="text-white">weeks</span></div>
                      </div>
                    </div>
                    <!-- Arrow 3 -->
                    <div class="arrow blue-arrow-3">
                      <div class="arrow-content">
                        <h3 class="text-white font-semibold text-lg">Production Tooling</h3>
                        <div class="text-yellow-300 font-bold">6 <span class="text-white">weeks</span></div>
                      </div>
                    </div>
                    <!-- Time to Market -->
                    <div class="time-to-market">
                      <span class="text-gray-800 font-semibold block">Time to Market</span>
                      <span class="text-blue-600 font-bold text-2sm">11 weeks</span>
                    </div>
                  </div>
                  <!-- Process descriptions -->
                  <div class="process-descriptions">
                    <div class="process-item font-bold">
                      CNC Machining / Vacuum Casting<br>
                      3D Printing
                    </div>
                    <div class="process-item font-bold">
                      Injection Molding (Aluminum Tooling)
                    </div>
                    <div class="process-item font-bold">
                      Injection Molding
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Traditional Manufacturing Timeline -->
            <div class="relative arrow-container-mobile">
              <div class="flex items-start gap-1">
                <div class="w-48 md:w-48 text-left">
                  <span class="text-gray-700 text-xl font-bold">Traditional<br>Manufacturing</span>
                </div>
                <div class="flex-1 arrow-container-on-traditional">
                  <div class="arrow-container arrow-container-traditional">
                    <!-- Arrow 1 -->
                    <div class="arrow arrow-traditional gray-arrow-1">
                      <div class="arrow-content arrow-content-traditional">
                        <h3 class="text-white font-semibold text-lg">Rapid Prototyping</h3>
                        <div class="text-white font-bold">8 weeks</div>
                      </div>
                    </div>
                    <!-- Arrow 2 -->
                    <div class="arrow arrow-traditional gray-arrow-2">
                      <div class="arrow-content arrow-content-traditional">
                        <h3 class="text-white font-semibold text-lg">Rapid Tooling</h3>
                        <div class="text-white font-bold">16 weeks</div>
                      </div>
                    </div>
                    <!-- Arrow 3 -->
                    <div class="arrow arrow-traditional gray-arrow-3">
                      <div class="arrow-content arrow-content-traditional">
                        <h3 class="text-white font-semibold text-lg">Production Tooling</h3>
                        <div class="text-white font-bold">16 weeks</div>
                      </div>
                    </div>
                    <!-- Time to Market -->
                    <div class="time-to-market">
                      <span class="text-gray-800 font-semibold block">Time to Market</span>
                      <span class="text-gray-700 font-bold text-2sm">40 weeks</span>
                    </div>
                  </div>
                  <!-- Process descriptions -->
                  <div class="process-descriptions">
                    <div class="process-item font-bold">
                      CNC Machining / 3D Printing
                    </div>
                    <div class="process-item font-bold">
                      Injection Molding (Steel Tooling)
                    </div>
                    <div class="process-item font-bold">
                      Injection Molding
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
            <p class="font-bold mb-2">1. Flexibility and Personalization</p>
            <p>On-demand manufacturing enables businesses to produce exactly what is needed, precisely when it's needed.
              This is especially beneficial for:</p>
            <ul class="list-disc pl-5">
              <li>Prototyping and product testing</li>
              <li>Low-volume production runs</li>
              <li>Highly customized or specialty parts</li>
            </ul>
            <p>For instance, in the medical sector—where precision and personalization are critical—on-demand
              manufacturing allows for the rapid production of tailored components for advanced medical devices.</p>
          </div>
          <div class="content-first-right">
            <img src="~/assets/imgs/img-03.jpg" alt="Manufacturing Process" class="feature-image">
          </div>
        </div>
        <div class="content-second">
          <div class="content-second-left">
            <p class="font-bold mb-2">2. Faster Turnaround Times</p>
            <p>Time waits for no one, especially in industries where innovation drives competition. On-demand
              manufacturing's streamlined workflows and advanced technologies slash production timelines, enabling
              businesses to move from design to delivery in record time.
              <br>
              This rapid turnaround can be extremely beneficial for industries like automotive and consumer electronics,
              where staying ahead of trends can make or break a product's success. The ability to quickly iterate and
              refine designs ensures companies remain at the forefront of their markets.
            </p>
          </div>
        </div>
        <div class="content-third">
          <p class="font-bold mb-2">3. Cost Efficiency & Resource Optimization</p>
          <p>Traditional manufacturing relies on bulk production, leading to higher costs, excess inventory, and
            logistical inefficiencies. On-demand manufacturing eliminates these issues by:</p>
          <ul class="list-disc pl-5">
            <li>Producing only what is required, reducing waste</li>
            <li>Lowering storage and inventory costs</li>
            <li>Allowing smaller businesses to access high-quality manufacturing without massive investments</li>
          </ul>
        </div>
        <div class="content-fourth">
          <div class="content-fourth-left mr-10">
            <p class="font-bold mb-2">4. Innovation at Its Core</p>
            <p>With lower production barriers, startups, inventors, and established businesses can experiment with new
              ideas and iterate rapidly. Recent years have shown how on-demand manufacturing drives groundbreaking
              advancements, such as:</p>
            <ul class="list-disc pl-5">
              <li>Pandemic-related innovations – Rapid prototyping of ventilators and protective gear</li>
              <li>Next-gen scientific instruments – Agile development of cutting-edge laboratory equipment</li>
              <li>Smart home technology – Fast-tracking new devices for modern living</li>
            </ul>
          </div>
          <div class="content-fourth-right">
            <img src="~/assets/imgs/img-02.jpg" alt="Manufacturing Process" class="feature-image">
          </div>
        </div>
        <div class="content-fifth">
          <p class="font-bold mb-2">5. Sustainability and Environmental Impact</p>
          <p>As industries strive to reduce their environmental footprint, on-demand manufacturing offers a sustainable
            alternative to traditional methods. By producing only what is needed, it minimizes waste and reduces energy
            consumption. This model aligns seamlessly with the principles of the circular economy, allowing businesses
            to meet demand responsibly while appealing to eco-conscious consumers and stakeholders.</p>
        </div>
        <!-- RPWORLD is Your Reliable Partner for On-demand Manufacturing -->
        <div class="content-sixth">
          <p class="font-bold mb-2">RPWORLD is Your Reliable Partner for On-demand Manufacturing</p>
          <!-- At RPWORLD, we are passionate about delivering on-demand manufacturing solutions that combine speed, flexibility, and precision. Whether you need low-volume parts, or full production runs, our expertise ensures high-quality results with fast turnaround times. -->
          <p>At RPWORLD, we are passionate about delivering on-demand manufacturing solutions that combine speed,
            flexibility, and precision. Whether you need low-volume parts, or full production runs, our expertise
            ensures
            high-quality results with fast turnaround times.</p>
        </div>
        <div class="content-seventh">
          <div class="content-first-left">
            <p class="font-bold mb-2">Why Choose RPWORLD for On-demand Manufacturing?</p>
            <ul class="list-disc pl-5 pt-5">
              <li>20+ years of industry experience</li>
              <li>Cutting-edge CNC machining, injection molding, sheet metal fabrication, full suite of finishing
                options</li>
              <li>Trusted by leaders in medical, automotive, and technology industries</li>
              <li>Seamless production processes to bring your ideas to life</li>
            </ul>
          </div>
          <div class="content-first-right">
            <img src="~/assets/imgs/img-01.jpg" alt="Manufacturing Process" class="feature-image">
          </div>
        </div>
        <div class="content-eighth">
          <p class="mb-2">Ready to revolutionize your manufacturing approach? Let's build something amazing
            together. Contact us today to discuss your next project!</p>
        </div>
      </div>
    </v-sheet>
  </v-app>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>