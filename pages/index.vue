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

/**
 * 响应式i18n
 */
const image_icons = computed(() => {
  return tm("shop.body.choose.shopIcons");
})

const style_images = computed(() => {
  return tm("shop.body.choose.shopList")
})
const qualityIcons = computed(() => {
  return tm("shop.body.qualityIcons")
})
const buyers = computed(() => {
  return tm("shop.body.buyer")
})
const populars = computed(() => {
  return tm("shop.body.popular")
})
const brandIcons = computed(() => {
  return tm("shop.body.brandIcons")
})
const photo_images = computed(() => {
  return tm("shop.body.photos")
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
  // console.log("屏幕尺寸", screenSize.value.width)
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
  // console.log("Image load successfully")
  home_image1_load.value = true;
}

</script>

<template>
  <v-app>
    <!-- 主图-->
    <v-sheet class="banner-container">
      <img src="~/assets/imgs/banner.jpg" alt="banner" class="banner-image" @load="image_load">
    </v-sheet>

    <!--  grocery shopping to hailing taxis, businesses across industries—healthcare, education, banking, and e-commerce—are shifting toward flexible and tailored solutions that meet the unique needs of customers. The manufacturing industry is no exception. On-demand manufacturing is a transformative approach that caters to the modern manufacturing demand for speed, flexibility, and precision. By enabling faster production cycles and unparalleled customization, on-demand manufacturing has become the go-to solution for turning innovative ideas into tangible results. -->
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

    <!-- Todo: 表格 -->
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

    <!-- When it comes to the product development journey, the differences between traditional manufacturing and on-demand manufacturing are clearly highlighted in the chart below, showcasing the distinct advantages and challenges of each approach. -->
    <v-sheet class="product-development-journey">
      <div class="container mx-auto">
        <div class="title">
          {{ $t('rp-center-text.product_development_journey') }}
        </div>
      </div>
    </v-sheet>

    <!-- Todo: 图片 -->
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
.on-demand-vs-traditional {
  background-color: #ffffff;
  color: #333333;
  padding: 1rem 0 0 0;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }
}

.product-development-journey {
  background-color: #ffffff;
  color: #333333;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }
}

.traditional-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
}

.on-demand-manufacturing {
  background-color: #ffffff;
  color: #333333;
  padding: 1rem 0;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }

  .title {
    @media (max-width: 768px) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }

  .content {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0.75rem 0;
    }
  }

  .content-first,
  .content-second,
  .content-fourth,
  .content-seventh {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      margin-top: 0.75rem;
    }

    .content-first-left,
    .content-fourth-left {
      flex: 1;
      margin-right: 1rem;

      @media (max-width: 768px) {
        margin-right: 0;
      }
    }

    .content-first-right,
    .content-fourth-right {
      flex: 1;

      @media (max-width: 768px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }

  .content-seventh {
    background-color: #f6f6f8;

    .content-first-left {
      padding: 20px;

      @media (max-width: 768px) {
        padding: 15px;
      }
    }
  }

  .content-third,
  .content-fifth,
  .content-sixth,
  .content-eighth {
    margin-top: 1rem;

    @media (max-width: 768px) {
      margin-top: 0.75rem;
      // padding: 0 0.5rem;
    }
  }

  // 列表样式优化
  .list-disc {
    padding-left: 1.25rem;

    @media (max-width: 768px) {
      padding-left: 1rem;
    }

    li {
      margin-bottom: 0.5rem;
      line-height: 1.4;

      @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
      }
    }
  }

  // 标题和段落样式
  .font-bold {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    line-height: 1.6;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
  }

  // 图片样式优化
  .feature-image {
    width: 100%;
    height: auto;
    // max-height: 200px;
    object-fit: cover;

    @media (max-width: 768px) {
      max-height: 180px;
    }
  }
}


.banner-container {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  // height: 10vh; 
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 18vh;
  }

  @media (max-width: 480px) {
    height: 10vh;
  }
}

.grocery-shopping-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0 16px 16px 16px;
  }
}

.grocery-shopping {
  max-width: 1182px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
  padding: 0 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 12px;
  }
}

/* 确保图片在移动端也能自适应 */
img {
  max-width: 100%;
  height: auto;
}

/* 容器响应式布局 */
.container {
  width: 100%;
  max-width: 1182px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
}

/* 响应式间距 */
.pt-8 {
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
}

.pb-10 {
  @media (max-width: 768px) {
    padding-bottom: 2.5rem;
  }
}

/* 响应式文本大小 */
.text-2xl {
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
}

.text-3xl {
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}

/* 响应式间距调整 */
.gap-8 {
  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
}

/* 移动端文本对齐 */
@media (max-width: 768px) {
  .text-center-mobile {
    text-align: center;
  }

  .flex-col-mobile {
    flex-direction: column;
  }

  .w-full-mobile {
    width: 100%;
  }
}

// company introduction
.company-intro {
  background-color: #ffffff;
  color: #333333;
}

.container {
  max-width: 1182px;
  // margin: 0 auto;
  padding: 0;
}

.intro-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 0 40px;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.intro-text {
  flex: 1;
}

.intro-paragraph {
  font-size: 1rem;
  color: #413E3A;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.intro-image {
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    order: -1; // Show image first on mobile
    width: 100%;
  }
}

.main-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;

  @media (min-width: 992px) {
    max-width: none;
  }
}

.industry-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.industry-item {
  // display: flex;
  position: relative;
  padding-left: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
  }

  &:before {
    content: "•";
    color: #3B82F6;
    font-weight: bold;
    position: absolute;
    left: 0;

    @media (max-width: 768px) {
      top: 1.25rem;
    }
  }
}

.industry-title {
  font-weight: bold;
  color: #295598;
  min-width: 160px;
  text-decoration: underline;

  @media (max-width: 768px) {
    display: block;
    padding: 0 16px;
  }
}

// 标题：Fabrication à la demande vs. fabrication traditionnelle
.fabrication-title {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.manufacturing-box {
  background-color: #ffffff;
}

.manufacturing-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.manufacturing-item {
  .item-header {
    margin-bottom: 1.5rem;
  }

  .item-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
  }

  .item-content {
    display: flex;
    gap: 2rem;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .text-content {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  .image-content {
    flex: 1;

    @media (max-width: 768px) {
      width: 100%;
      order: -1;
    }
  }

  .feature-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
}

.benefit-list {
  list-style: none;
  padding-left: 1.5rem;
  margin: 1rem 0;

  li {
    position: relative;
    margin-bottom: 0.5rem;

    &:before {
      content: "•";
      color: #3B82F6;
      position: absolute;
      left: -1.5rem;
      font-weight: bold;
    }
  }
}

@media (max-width: 768px) {
  .manufacturing-box {
    padding: 2rem 1rem;
  }

  .manufacturing-grid {
    gap: 2rem;
  }

  .manufacturing-item {
    .item-header {
      margin-bottom: 1rem;
    }

    .item-title {
      font-size: 1.125rem;
    }

    .item-content {
      gap: 1rem;
    }
  }
}

/* 表格 */
.table-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.table-container {
  width: 1100px;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .table-container {
    width: 95%;
  }
}

.v-table {
  overflow: hidden;
  width: 100%;
  table-layout: fixed;
}

.header-row {
  background-color: #2c5aa0 !important;
  color: white !important;
  font-weight: 500;
  height: 56px;
}

.header-row th {
  color: white !important;
  font-size: 16px;
  padding: 16px;
  text-align: left !important;
}

.first-column {
  padding-left: 60px !important;
  width: 33.33%;
}

.striped-row {
  background-color: #e6f0fa !important;
}

tbody tr {
  height: 52px;
}

tbody td {
  padding: 16px;
  font-size: 15px;
  text-align: left !important;
  width: 33.33%;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .v-table {
    font-size: 14px;
  }

  .header-row th {
    font-size: 14px;
    padding: 12px 8px;
  }

  tbody td {
    padding: 12px 8px;
    font-size: 13px;
  }

  .first-column {
    padding-left: 16px !important;
  }
}

// 图片
.outer-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
}

/* Set fixed width for desktop and center it */
.timeline-container {
  width: 100%;
  max-width: 1100px;
  padding: 20px 60px;
}

/* Title text size */
.text-title {
  font-size: 20px;
}

.arrow-container {
  display: flex;
  position: relative;
  height: 76px;
  width: 80%;
}

.arrow-container-mobile {
  margin-top: 15px !important;
}

.arrow-container-traditional {
  height: 56px;
}

.arrow {
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.arrow::after {
  content: '';
  position: absolute;
  right: -15px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 38px solid transparent;
  border-bottom: 38px solid transparent;
  z-index: 2;
}


.arrow-traditional::after {
  content: '';
  position: absolute;
  right: -15px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 28px solid transparent;
  border-bottom: 28px solid transparent;
  z-index: 2;
}

/* Blue arrows with exact colors */
.blue-arrow-1 {
  background-color: #3E8BC7;
}

.blue-arrow-1::after {
  border-left: 15px solid #3E8BC7;
}

.blue-arrow-2 {
  background-color: #2F6EBE;
}

.blue-arrow-2::after {
  border-left: 15px solid #2F6EBE;
}

.blue-arrow-3 {
  background-color: #2F57A1;
}

.blue-arrow-3::after {
  border-left: 15px solid #2F57A1;
}

/* Gray arrows with exact colors */
.gray-arrow-1 {
  background-color: #898989;
}

.gray-arrow-1::after {
  border-left: 15px solid #898989;
}

.gray-arrow-2 {
  background-color: #707070;
}

.gray-arrow-2::after {
  border-left: 15px solid #707070;
}

.gray-arrow-3 {
  background-color: #595758;
}

.gray-arrow-3::after {
  border-left: 15px solid #595758;
}

.arrow-content {
  width: 100%;
  text-align: center;
}

.time-to-market {
  position: absolute;
  right: -150px;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 20px;
  width: 140px;

  span:nth-child(2) {
    // 居中
    display: flex;
    justify-content: center;
  }
}

.process-descriptions {
  display: flex;
  margin-top: 8px;
  width: 80%;
}

.process-item {
  flex: 1;
  text-align: center;
  font-size: 0.675rem;
}

/* Enhanced Mobile Responsive Styles */
@media (max-width: 768px) {
  .timeline-container {
    width: 100%;
    padding: 1rem;
  }

  .flex {
    flex-direction: column;
    align-items: center;
  }

  .w-48 {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }

  .text-left {
    text-align: center;
  }

  .arrow-container-mobile {
    margin: 0 !important;
  }

  .arrow-container-on-demand,
  .arrow-container-on-traditional {
    width: 100%;
    // 居中
    display: flex;
    justify-content: center;
  }

  /* Mobile arrow container */
  .arrow-container {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: center;
  }

  /* Mobile arrow styling */
  .arrow {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 6px;
    flex-direction: column;
  }

  .arrow::after {
    display: none;
  }

  /* Mobile arrow content */
  .arrow-content {
    margin-bottom: 10px;
  }

  /* Mobile process descriptions */
  .process-descriptions {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .process-item {
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
    padding: 0 10px;
  }

  /* Mobile time to market */
  .time-to-market {
    position: static;
    transform: none;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 20px 0;
  }

  /* Mobile arrow descriptions */
  .blue-arrow-1::after,
  .blue-arrow-2::after,
  .blue-arrow-3::after,
  .gray-arrow-1::after,
  .gray-arrow-2::after,
  .gray-arrow-3::after {
    display: none;
  }

  /* Add description text below each arrow */
  .blue-arrow-1 .arrow-content::after {
    content: "CNC Machining / Vacuum Casting\A 3D Printing";
    white-space: pre;
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: white;
  }

  .blue-arrow-2 .arrow-content::after {
    content: "Injection Molding (Aluminum Tooling)";
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: white;
  }

  .blue-arrow-3 .arrow-content::after {
    content: "Injection Molding";
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: white;
  }

  .gray-arrow-1 .arrow-content::after {
    content: "CNC Machining / 3D Printing";
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: white;
  }

  .gray-arrow-2 .arrow-content::after {
    content: "Injection Molding (Steel Tooling)";
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: white;
  }

  .gray-arrow-3 .arrow-content::after {
    content: "Injection Molding";
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: white;
  }

  /* Hide desktop process descriptions on mobile */
  .process-descriptions {
    display: none;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .arrow-content h3 {
    font-size: 1rem;
  }

  .p-6 {
    padding: 0.75rem;
  }

  .space-y-16 {
    margin-top: 2rem;
  }

  .gap-8 {
    gap: 1rem;
  }
}
</style>