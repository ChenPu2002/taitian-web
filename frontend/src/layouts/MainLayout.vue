<template>
  <div class="main-layout">
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <router-link :to="localePath('/')">
            <img src="@/assets/images/logos/logo.png" alt="泰田集团" class="logo-img" />
          </router-link>
        </div>
        <nav class="nav">
          <router-link :to="localePath('/')" class="nav-item">{{ t('nav.home') }}</router-link>
          <router-link :to="localePath('/about')" class="nav-item">{{ t('nav.about') }}</router-link>
          <router-link :to="localePath('/products')" class="nav-item">{{ t('nav.products') }}</router-link>
          <router-link :to="localePath('/applications')" class="nav-item">{{ t('nav.applications') }}</router-link>
          <router-link :to="localePath('/news')" class="nav-item">{{ t('nav.news') }}</router-link>
          <router-link :to="localePath('/contact')" class="nav-item">{{ t('nav.contact') }}</router-link>
        </nav>
        <div class="header-actions">
          <LanguageSwitcher />
          <router-link to="/admin" class="admin-link">{{ t('nav.admin') }}</router-link>
        </div>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>{{ t('footer.contactUs') }}</h3>
            <p>{{ t('footer.serviceLine') }}</p>
            <p>{{ t('footer.email') }}</p>
            <p>{{ t('footer.address') }}</p>
          </div>
          <div class="footer-section">
            <h3>{{ t('footer.quickLinks') }}</h3>
            <router-link :to="localePath('/about')">{{ t('footer.aboutUs') }}</router-link>
            <router-link :to="localePath('/products')">{{ t('nav.products') }}</router-link>
            <router-link :to="localePath('/news')">{{ t('nav.news') }}</router-link>
            <router-link :to="localePath('/contact')">{{ t('nav.contact') }}</router-link>
          </div>
          <div class="footer-section">
            <h3>{{ t('footer.followUs') }}</h3>
            <div class="qrcode-wrapper">
              <img src="@/assets/images/misc/qrcode.jpg" alt="微信公众号" class="qrcode-img" loading="lazy" />
              <p>{{ t('footer.wechat') }}</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>{{ t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useLocale } from '@/composables/useLocale'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t, localePath } = useLocale()
</script>

<style lang="scss" scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  .logo {
    a {
      display: flex;
      align-items: center;
    }
    
    .logo-img {
      height: 50px;
      width: auto;
    }
  }

  .nav {
    display: flex;
    gap: 40px;

    .nav-item {
      color: #333;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      position: relative;
      transition: color 0.3s;

      &:hover, &.router-link-active {
        color: #2CB5BE;
      }

      &.router-link-active::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 3px;
        background: #2CB5BE;
      }
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 20px;
    
    .admin-link {
      color: #666;
      text-decoration: none;
      font-size: 14px;
      
      &:hover {
        color: #2CB5BE;
      }
    }
  }
}

.main-content {
  flex: 1;
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 20px;
  margin-top: 80px;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    margin-bottom: 40px;
  }

  .footer-section {
    h3 {
      color: #2CB5BE;
      font-size: 18px;
      margin-bottom: 20px;
    }

    p, a {
      color: #ccc;
      margin: 10px 0;
      font-size: 14px;
      text-decoration: none;
      display: block;

      &:hover {
        color: #2CB5BE;
      }
    }
    
    .qrcode-wrapper {
      text-align: center;
      
      .qrcode-img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #333;
    padding-top: 20px;
    text-align: center;

    p {
      color: #666;
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
  .header {
    .header-content {
      flex-wrap: wrap;
      height: auto;
      padding: 15px 0;
    }

    .nav {
      width: 100%;
      flex-wrap: wrap;
      gap: 15px;
    }
  }

  .footer {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
}
</style>
