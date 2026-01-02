<template>
  <div class="products-page">
    <div class="page-header">
      <img 
        :src="productBanner" 
        alt="泰田产品展示" 
        class="header-bg"
        loading="eager"
      />
      <div class="header-content">
        <h1>{{ t('productsPage.title') }}</h1>
        <p>{{ t('productsPage.subtitle') }}</p>
      </div>
      <div class="header-overlay"></div>
    </div>

    <section class="products-content">
      <div class="container">
        <div class="products-list">
          <div 
            class="product-item card" 
            v-for="product in products" 
            :key="product.nameKey"
          >
            <div class="product-image">
              <img 
                :src="product.image" 
                :alt="t(product.nameKey)" 
                loading="lazy"
              />
            </div>
            <div class="product-info">
              <h3>{{ t(product.nameKey) }}</h3>
              <p>{{ t(product.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工业之心 泰田智造 -->
    <section class="slogan-section">
      <div class="container">
        <h2 class="slogan-title">{{ t('productsPage.slogan') }}</h2>
        <div class="slogan-items">
          <p>{{ t('productsPage.sloganItem1') }}</p>
          <p>{{ t('productsPage.sloganItem2') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLocale } from '@/composables/useLocale'

// 引入图片
import productAllBanner from '@/assets/images/banners/product-all.jpg'
import precisionMachine from '@/assets/images/products/precision-machine.png'
import screwCompressor from '@/assets/images/products/screw-compressor.jpg'
import industrialWrench from '@/assets/images/products/industrial-wrench.jpg'
import compressorHost from '@/assets/images/products/compressor-host.jpg'
import autoRepairTools from '@/assets/images/products/auto-repair-tools.png'
import lubricationEquipment from '@/assets/images/products/lubrication-equipment.jpg'

const { t } = useLocale()

const productBanner = ref(productAllBanner)

const products = [
  { 
    nameKey: 'productsPage.items.precisionMachine', 
    descKey: 'productsPage.items.precisionMachineDesc',
    image: precisionMachine
  },
  { 
    nameKey: 'productsPage.items.screwCompressor', 
    descKey: 'productsPage.items.screwCompressorDesc',
    image: screwCompressor
  },
  { 
    nameKey: 'productsPage.items.industrialWrench', 
    descKey: 'productsPage.items.industrialWrenchDesc',
    image: industrialWrench
  },
  { 
    nameKey: 'productsPage.items.compressorHost', 
    descKey: 'productsPage.items.compressorHostDesc',
    image: compressorHost
  },
  { 
    nameKey: 'productsPage.items.autoRepairTools', 
    descKey: 'productsPage.items.autoRepairToolsDesc',
    image: autoRepairTools
  },
  { 
    nameKey: 'productsPage.items.lubricationEquipment', 
    descKey: 'productsPage.items.lubricationEquipmentDesc',
    image: lubricationEquipment
  }
]
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  height: 400px;
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
    background: linear-gradient(135deg, rgba(44, 181, 190, 0.4) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }
}

.products-content {
  padding: 80px 0;
  background: #f8f9fa;

  .products-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
      
      .product-image img {
        transform: scale(1.05);
      }
    }

    .product-image {
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
      padding: 20px;
      overflow: hidden;
      
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.5s;
      }
    }

    .product-info {
      padding: 25px;

      h3 {
        font-size: 20px;
        color: #333;
        margin-bottom: 12px;
      }

      p {
        font-size: 14px;
        color: #666;
        line-height: 1.7;
        margin: 0;
      }
    }
  }
}

.slogan-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #2CB5BE 0%, #1a8a91 100%);
  text-align: center;
  color: white;
  
  .slogan-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  
  .slogan-items {
    p {
      font-size: 18px;
      opacity: 0.9;
      margin: 10px 0;
    }
  }
}

@media (max-width: 768px) {
  .page-header {
    height: 300px;
    
    .header-content {
      h1 {
        font-size: 32px;
      }
      
      p {
        font-size: 16px;
      }
    }
  }
  
  .products-content .products-list {
    grid-template-columns: 1fr;
  }

  .product-item {
    flex-direction: column;
    text-align: center;
  }
  
  .slogan-section .slogan-title {
    font-size: 28px;
  }
}
</style>
