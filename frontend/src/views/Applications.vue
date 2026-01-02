<template>
  <div class="applications-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('applicationsPage.title') }}</h1>
        <p>{{ t('applicationsPage.subtitle') }}</p>
      </div>
    </div>

    <section class="applications-content">
      <div class="container">
        <div class="applications-grid">
          <div class="application-card card" v-for="app in applications" :key="app.titleKey">
            <div class="card-icon">{{ app.icon }}</div>
            <h3>{{ t(app.titleKey) }}</h3>
            <p>{{ t(app.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

const applications = [
  { 
    icon: '🚗', 
    titleKey: 'applicationsPage.automotive', 
    descKey: 'applicationsPage.automotiveDesc' 
  },
  { 
    icon: '⚙️', 
    titleKey: 'applicationsPage.precision', 
    descKey: 'applicationsPage.precisionDesc' 
  },
  { 
    icon: '🤖', 
    titleKey: 'applicationsPage.automation', 
    descKey: 'applicationsPage.automationDesc' 
  },
  { 
    icon: '🔧', 
    titleKey: 'applicationsPage.repair', 
    descKey: 'applicationsPage.repairDesc' 
  },
  { 
    icon: '💧', 
    titleKey: 'applicationsPage.fluid', 
    descKey: 'applicationsPage.fluidDesc' 
  }
]
</script>

<style lang="scss" scoped>
.page-header {
  background: linear-gradient(135deg, #2CB5BE 0%, #1a8a91 100%);
  color: white;
  padding: 80px 0;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    opacity: 0.9;
  }
}

.applications-content {
  padding: 80px 0;
  background: white;

  .applications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .application-card {
    padding: 40px 30px;
    text-align: center;

    .card-icon {
      font-size: 64px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 22px;
      color: #333;
      margin-bottom: 15px;
    }

    p {
      font-size: 15px;
      color: #666;
      line-height: 1.8;
      margin: 0;
    }

    &:hover {
      .card-icon {
        transform: scale(1.1);
        transition: transform 0.3s;
      }
    }
  }
}

@media (max-width: 768px) {
  .applications-content .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>
