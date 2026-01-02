import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import i18n, { supportedLocales, setLocale } from '@/i18n'

// 主要页面路由（带语言前缀）
const mainRoutes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: 'about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: 'products',
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: 'applications',
    name: 'Applications',
    component: () => import('@/views/Applications.vue')
  },
  {
    path: 'news',
    name: 'News',
    component: () => import('@/views/News.vue')
  },
  {
    path: 'contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  }
]

// 生成带语言前缀的路由
function createLocaleRoutes() {
  return supportedLocales.map(locale => ({
    path: `/${locale}`,
    component: () => import('@/layouts/MainLayout.vue'),
    children: mainRoutes.map(route => ({
      ...route,
      name: `${route.name}-${locale}`,
      meta: { ...route.meta, locale }
    }))
  }))
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 带语言前缀的主路由
    ...createLocaleRoutes(),
    
    // 管理后台路由（不带语言前缀）
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'AdminDashboard',
          component: () => import('@/views/admin/Dashboard.vue')
        },
        {
          path: 'media',
          name: 'AdminMedia',
          component: () => import('@/views/admin/MediaManagement.vue')
        }
      ]
    },
    
    // 登录页面（不带语言前缀）
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    
    // 根路径重定向到默认语言
    {
      path: '/',
      redirect: () => {
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale && supportedLocales.includes(savedLocale)) {
          return `/${savedLocale}`
        }
        const browserLang = navigator.language || navigator.userLanguage
        return browserLang.startsWith('zh') ? '/zh' : '/en'
      }
    },
    
    // 捕获所有未匹配的路由，重定向到默认语言首页
    {
      path: '/:pathMatch(.*)*',
      redirect: '/zh'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // 检查认证
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
    return
  }
  
  // 同步语言设置
  const pathLocale = to.path.split('/')[1]
  if (supportedLocales.includes(pathLocale)) {
    if (i18n.global.locale.value !== pathLocale) {
      setLocale(pathLocale)
    }
  }
  
  next()
})

export default router
