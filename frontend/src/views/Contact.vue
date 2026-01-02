<template>
  <div class="contact-page">
    <div class="page-header">
      <img 
        :src="headerBg" 
        alt="联系我们" 
        class="header-bg"
      />
      <div class="header-content">
        <h1>联系我们</h1>
        <p>期待与您的合作</p>
      </div>
      <div class="header-overlay"></div>
    </div>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>联系方式</h2>
            
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-text">
                <h4>服务热线</h4>
                <p>400-826-1128</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-text">
                <h4>公司邮箱</h4>
                <p>sales@chinatuta.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-text">
                <h4>公司地址</h4>
                <p>浙江省台州市椒江区海韵路528号</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📮</div>
              <div class="info-text">
                <h4>邮政编码</h4>
                <p>318000</p>
              </div>
            </div>
            
            <div class="qrcode-section">
              <img :src="qrcodeImg" alt="微信公众号" class="qrcode" loading="lazy" />
              <p>扫码关注微信公众号</p>
            </div>
          </div>

          <div class="contact-form card">
            <h2>在线咨询</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label>姓名</label>
                <input v-model="form.name" type="text" placeholder="请输入您的姓名" />
              </div>
              
              <div class="form-group">
                <label>联系电话</label>
                <input v-model="form.phone" type="tel" placeholder="请输入您的联系电话" />
              </div>
              
              <div class="form-group">
                <label>电子邮箱</label>
                <input v-model="form.email" type="email" placeholder="请输入您的电子邮箱" />
              </div>
              
              <div class="form-group">
                <label>咨询内容</label>
                <textarea 
                  v-model="form.message" 
                  rows="5"
                  placeholder="请输入您的咨询内容"
                ></textarea>
              </div>
              
              <button type="submit" class="submit-button industrial-button">
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import bgImage from '@/assets/images/backgrounds/in-bg2.jpg'
import qrcode from '@/assets/images/misc/qrcode.jpg'

const headerBg = ref(bgImage)
const qrcodeImg = ref(qrcode)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const submitForm = () => {
  if (!form.name || !form.phone || !form.message) {
    alert('请填写完整信息')
    return
  }
  
  alert('提交成功，我们会尽快与您联系！')
  
  // 清空表单
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
}
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  height: 300px;
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

.contact-content {
  padding: 80px 0;
  background: #f8f9fa;

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
    align-items: start;
  }

  .contact-info {
    h2 {
      font-size: 28px;
      color: #333;
      margin-bottom: 40px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 20px;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
      transition: all 0.3s;
      
      &:hover {
        transform: translateX(5px);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      }

      .info-icon {
        font-size: 28px;
        flex-shrink: 0;
      }

      .info-text {
        h4 {
          font-size: 16px;
          color: #333;
          margin-bottom: 8px;
        }

        p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }
      }
    }
    
    .qrcode-section {
      margin-top: 30px;
      text-align: center;
      padding: 25px;
      background: white;
      border-radius: 12px;
      
      .qrcode {
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
      }
      
      p {
        font-size: 14px;
        color: #666;
        margin: 0;
      }
    }
  }

  .contact-form {
    padding: 40px;
    background: white;
    border-radius: 12px;

    h2 {
      font-size: 28px;
      color: #333;
      margin-bottom: 30px;
    }
    
    .form-group {
      margin-bottom: 20px;
      
      label {
        display: block;
        font-size: 14px;
        color: #333;
        margin-bottom: 8px;
        font-weight: 500;
      }
      
      input, textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.3s;
        box-sizing: border-box;
        
        &:focus {
          outline: none;
          border-color: #2CB5BE;
          box-shadow: 0 0 0 3px rgba(44, 181, 190, 0.1);
        }
        
        &::placeholder {
          color: #aaa;
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .submit-button {
      width: 100%;
      height: 50px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}

@media (max-width: 768px) {
  .page-header {
    height: 250px;
    
    .header-content h1 {
      font-size: 32px;
    }
  }
  
  .contact-content .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
