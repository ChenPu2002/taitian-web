<template>
  <div class="about-page">
    <div class="page-header">
      <img 
        :src="backgroundImage" 
        alt="关于泰田" 
        class="header-bg"
      />
      <div class="header-content">
        <h1>关于泰田</h1>
        <p>专注于工业制造领域的创新与发展</p>
      </div>
      <div class="header-overlay"></div>
    </div>

    <section class="about-content">
      <div class="container">
        <div class="content-section">
          <h2>企业信息</h2>
          <p>泰田集团股份有限公司成立于2007年，注册资金6088万元，现拥有员工900余人，是一家集研发、生产与销售为一体的高新技术企业，也是"专精特新"小巨人企业。</p>
          <p>公司拥有精密机床/空气压缩机、压缩机主机、拧紧工具以及精密机械零件加工三大生产基地。</p>
          <p>公司始终坚信先进的装备是一流品质的保障，引进国外先进生产线，并配备2000多台CNC加工设备，全面部署MES+ERP系统，实现人机信息的高度一体化，构建起泰田独有的"一人多机、人机物协同"的多环节制程管控新体系，形成了泰田"专、精、尖"的智造模式。</p>
        </div>

        <div class="stats-section">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-unit">{{ stat.unit }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <div class="content-section">
          <h2>企业理念</h2>
          <div class="philosophy-grid">
            <div class="philosophy-item card" v-for="item in philosophyItems" :key="item.title">
              <div class="philosophy-icon">{{ item.icon }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="content-section">
          <h2>研发实力</h2>
          <p>我们拥有一支以行业专家为带头人，以中青年技术骨干为主体，梯队结构合理的技术创新团队。我们始终以自主创新为基础，坚持专研前沿性项目和跨界新锐领域项目，实施迭代研发，打造行业知识产权高地。</p>
          
          <div class="research-grid">
            <div class="research-item" v-for="item in researchItems" :key="item.title">
              <img :src="item.image" :alt="item.title" loading="lazy" />
              <div class="research-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import bgImage from '@/assets/images/backgrounds/in-bg1.jpg'
import researchConcept from '@/assets/images/banners/research-concept.jpg'
import researchPractice from '@/assets/images/banners/research-practice.jpg'
import researchResource from '@/assets/images/banners/research-resource.jpg'

const backgroundImage = ref(bgImage)

const stats = [
  { value: '2007', unit: '年', label: '公司创立' },
  { value: '6088', unit: '万', label: '注册资金' },
  { value: '900', unit: '+', label: '公司员工' },
  { value: '2000', unit: '+', label: 'CNC设备' },
  { value: '120', unit: '+', label: '专利数量' }
]

const philosophyItems = [
  { icon: '💡', title: '创新', description: '坚持自主创新，打造行业知识产权高地' },
  { icon: '⭐', title: '品质', description: '先进装备保障一流品质' },
  { icon: '🤝', title: '服务', description: '为客户创造效益，提供优质服务' },
  { icon: '🎯', title: '专精', description: '专、精、尖的智造模式' }
]

const researchItems = [
  { title: '研发理念', description: '坚持自主研发 锻造品质产品', image: researchConcept },
  { title: '研发实践', description: '为客户创造效益', image: researchPractice },
  { title: '研发资源', description: '从客户需求出发', image: researchResource }
]
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  
  .header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    
    h1 {
      font-size: 48px;
      margin-bottom: 15px;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    p {
      font-size: 20px;
      opacity: 0.95;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }
  }
  
  .header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(44, 181, 190, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }
}

.about-content {
  padding: 80px 0;

  .content-section {
    margin-bottom: 60px;

    h2 {
      font-size: 32px;
      color: #333;
      margin-bottom: 30px;
      position: relative;
      padding-left: 20px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 32px;
        background: #2CB5BE;
      }
    }

    p {
      font-size: 16px;
      line-height: 1.9;
      color: #666;
      margin-bottom: 20px;
    }
  }
  
  .stats-section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin: 60px 0;
    
    .stat-card {
      background: linear-gradient(135deg, #2CB5BE 0%, #1a8a91 100%);
      border-radius: 12px;
      padding: 30px 20px;
      text-align: center;
      color: white;
      transition: all 0.3s;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(44, 181, 190, 0.4);
      }
      
      .stat-value {
        font-size: 36px;
        font-weight: 700;
      }
      
      .stat-unit {
        font-size: 18px;
        opacity: 0.9;
        margin-bottom: 10px;
      }
      
      .stat-label {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  .philosophy-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-top: 40px;
  }

  .philosophy-item {
    padding: 35px 25px;
    text-align: center;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s;
    
    &:hover {
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .philosophy-icon {
      font-size: 40px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 20px;
      color: #2CB5BE;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin: 0;
    }
  }
  
  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
    
    .research-item {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      }
      
      img {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }
      
      .research-info {
        padding: 20px;
        background: white;
        text-align: center;
        
        h4 {
          font-size: 18px;
          color: #2CB5BE;
          margin-bottom: 8px;
        }
        
        p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .about-content {
    .stats-section {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .philosophy-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .research-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .page-header {
    height: 280px;
    
    .header-content h1 {
      font-size: 32px;
    }
  }
  
  .about-content {
    .stats-section {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .philosophy-grid,
    .research-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
