<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <img 
        :src="heroBannerUrl" 
        alt="泰田集团产品展示" 
        class="hero-bg"
        @load="onHeroLoad"
      />
      <div class="hero-content">
        <h1 class="hero-title">拧紧工具/空气动力设备解决方案服务商</h1>
        <p class="hero-subtitle">专精特新 · 智能制造 · 品质保障</p>
        <router-link to="/products" class="industrial-button">产品中心 >>></router-link>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- Company Intro -->
    <section class="company-intro">
      <div class="container">
        <h2 class="section-title">专精特新</h2>
        <p class="section-subtitle">高新技术企业 · 专精特新小巨人企业</p>
        
        <div class="intro-content">
          <p class="intro-text">
            泰田集团股份有限公司成立于2007年，注册资金6088万元，现拥有员工900余人，
            是一家集研发、生产与销售为一体的高新技术企业，也是"专精特新"小巨人企业。
            拥有精密机床/空气压缩机、压缩机主机、拧紧工具以及精密机械零件加工三大生产基地。
            公司始终坚信先进的装备是一流品质的保障，引进国外先进生产线，并配备2000多台CNC加工设备，
            全面部署MES+ERP系统，实现人机信息的高度一体化。
          </p>
        </div>

        <div class="stats">
          <div class="stat-item" v-for="stat in companyStats" :key="stat.label">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Section -->
    <section class="research-section">
      <div class="container">
        <p class="research-intro">
          我们拥有一支以行业专家为带头人，以中青年技术骨干为主体，梯队结构合理的技术创新团队，
          我们始终以自主创新为基础，坚持专研前沿性项目和跨界新锐领域项目，实施迭代研发，打造行业知识产权高地。
        </p>
        
        <div class="research-grid">
          <div class="research-card" v-for="item in researchItems" :key="item.title">
            <div class="research-image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="research-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="products-section">
      <div class="container">
        <h2 class="section-title">产品中心</h2>
        <p class="section-subtitle">为客户提供优质的产品与服务</p>

        <div class="products-grid">
          <div class="product-card card" v-for="product in products" :key="product.name">
            <div class="product-image">
              <img :src="product.image" :alt="product.name" loading="lazy" />
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
        
        <div class="products-action">
          <router-link to="/products" class="industrial-button">查看全部产品</router-link>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section">
      <div class="container">
        <h2 class="section-title">新闻动态</h2>
        <div class="news-grid">
          <div class="news-card" v-for="news in newsList" :key="news.id">
            <div class="news-image">
              <img :src="news.image" :alt="news.title" loading="lazy" />
            </div>
            <div class="news-info">
              <h3>{{ news.title }}</h3>
              <p>{{ news.summary }}</p>
              <span class="news-date">{{ news.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>联系我们</h2>
        <p>全国售后服务热线</p>
        <div class="phone-number">400-826-1128</div>
        <router-link to="/contact" class="industrial-button cta-btn">立即咨询</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 引入图片
import heroBanner from '@/assets/images/banners/hero-banner.jpg'
import researchConcept from '@/assets/images/banners/research-concept.jpg'
import researchPractice from '@/assets/images/banners/research-practice.jpg'
import researchResource from '@/assets/images/banners/research-resource.jpg'
import precisionMachine from '@/assets/images/products/precision-machine.png'
import screwCompressor from '@/assets/images/products/screw-compressor.jpg'
import industrialWrench from '@/assets/images/products/industrial-wrench.jpg'
import autoRepairTools from '@/assets/images/products/auto-repair-tools.png'
import news1 from '@/assets/images/news/news1.jpg'
import news2 from '@/assets/images/news/news2.jpg'
import news3 from '@/assets/images/news/news3.jpg'

const heroBannerUrl = ref(heroBanner)

const companyStats = [
  { value: '2007', label: '公司创立于' },
  { value: '6088万', label: '公司注册资金' },
  { value: '900+', label: '公司员工数' },
  { value: '2000+', label: 'CNC加工设备' },
  { value: '120+', label: '公司专利数' },
  { value: '20万', label: '年产压缩主机' },
  { value: '100万', label: '年产气动工具' }
]

const researchItems = [
  { 
    title: '研发理念', 
    description: '坚持自主研发 锻造品质产品',
    image: researchConcept
  },
  { 
    title: '研发实践', 
    description: '为客户创造效益',
    image: researchPractice
  },
  { 
    title: '研发资源', 
    description: '从客户需求出发',
    image: researchResource
  }
]

const products = [
  { name: '精密机床', description: '高精度、高效率的精密机床设备', image: precisionMachine },
  { name: '螺杆式空气压缩机', description: '节能高效的空气压缩解决方案', image: screwCompressor },
  { name: '工业级扳手系列', description: '专业的工业拧紧工具', image: industrialWrench },
  { name: '汽修工具系列', description: '全方位的汽修工具解决方案', image: autoRepairTools }
]

const newsList = [
  { 
    id: 1, 
    title: '2019年上海国际工业装配与传输技术展览会', 
    summary: '2019年上海国际工业装配与传输技术展览会，将于2019年7月...',
    date: '2020-04-11',
    image: news1
  },
  { 
    id: 2, 
    title: '泰田集团喜获"浙江名牌产品"称号', 
    summary: '"浙江名牌"荣誉是经区、市级质量监督管理部门严格审核通过...',
    date: '2018-10-29',
    image: news2
  },
  { 
    id: 3, 
    title: '《冲击式气扳机》"浙江制造"团体标准评审会在我司召开', 
    summary: '"浙江制造"是浙江省启动的将"浙江制造"打造成为具有严格认证...',
    date: '2020-04-11',
    image: news3
  }
]

const onHeroLoad = () => {
  console.log('Hero image loaded')
}
</script>

<style lang="scss" scoped>
.hero {
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .hero-content {
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 0 20px;
  }

  .hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  .hero-subtitle {
    font-size: 24px;
    margin-bottom: 40px;
    opacity: 0.95;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(44, 181, 190, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 1;
  }
  
  .industrial-button {
    text-decoration: none;
  }
}

.company-intro {
  padding: 80px 0;
  background: white;

  .intro-content {
    max-width: 1000px;
    margin: 0 auto 60px;
  }

  .intro-text {
    font-size: 16px;
    line-height: 2;
    color: #666;
    text-align: center;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    margin-top: 60px;
  }

  .stat-item {
    text-align: center;
    padding: 30px 15px;
    border-radius: 8px;
    background: #f8f9fa;
    transition: all 0.3s;

    &:hover {
      background: #2CB5BE;
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(44, 181, 190, 0.3);

      .stat-number, .stat-label {
        color: white;
      }
    }
  }

  .stat-number {
    font-size: 32px;
    font-weight: 700;
    color: #2CB5BE;
    margin-bottom: 10px;
  }

  .stat-label {
    font-size: 14px;
    color: #666;
  }
}

.research-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
  
  .research-intro {
    max-width: 900px;
    margin: 0 auto 50px;
    text-align: center;
    font-size: 16px;
    line-height: 1.8;
    color: #666;
  }
  
  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  
  .research-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }
    
    .research-image {
      height: 200px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }
    }
    
    &:hover .research-image img {
      transform: scale(1.05);
    }
    
    .research-info {
      padding: 25px;
      text-align: center;
      
      h3 {
        font-size: 20px;
        color: #2CB5BE;
        margin-bottom: 10px;
      }
      
      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
}

.products-section {
  padding: 80px 0;
  background: #f8f9fa;

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
  }

  .product-card {
    padding: 30px;
    text-align: center;
    background: white;

    .product-image {
      width: 100%;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      overflow: hidden;
      
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.3s;
      }
    }
    
    &:hover .product-image img {
      transform: scale(1.08);
    }

    h3 {
      font-size: 18px;
      color: #333;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }
  }
  
  .products-action {
    text-align: center;
    margin-top: 50px;
    
    .industrial-button {
      text-decoration: none;
    }
  }
}

.news-section {
  padding: 80px 0;
  background: white;
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
  
  .news-card {
    background: #f8f9fa;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .news-image {
      height: 180px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }
    }
    
    &:hover .news-image img {
      transform: scale(1.05);
    }
    
    .news-info {
      padding: 20px;
      
      h3 {
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      p {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .news-date {
        font-size: 12px;
        color: #999;
      }
    }
  }
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a8a91 0%, #2CB5BE 100%);
  color: white;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
    opacity: 0.9;
  }

  .phone-number {
    font-size: 48px;
    font-weight: 700;
    margin: 30px 0;
    letter-spacing: 2px;
  }

  .cta-btn {
    background: white;
    color: #2CB5BE;
    text-decoration: none;
    
    &:hover {
      background: #f0f0f0;
    }
  }
}

@media (max-width: 992px) {
  .research-section .research-grid,
  .news-section .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 400px;

    .hero-title {
      font-size: 28px;
    }

    .hero-subtitle {
      font-size: 16px;
    }
  }

  .company-intro .stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .research-section .research-grid,
  .news-section .news-grid {
    grid-template-columns: 1fr;
  }

  .products-section .products-grid {
    grid-template-columns: 1fr;
  }

  .cta-section .phone-number {
    font-size: 32px;
  }
}
</style>
