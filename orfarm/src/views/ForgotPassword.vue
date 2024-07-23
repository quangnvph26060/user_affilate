<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import SideBannerAuth from '@/components/SideBannerAuth.vue'
import Auth from '@/api/auth/index.js';
import { useRouter } from "vue-router";
import {reactive} from 'vue';
import axios from 'axios';
import { config } from '@/config/config';
import store from '../stores/auth.js';
const router = useRouter();
const{ submitForgotPassword,forgotPasswordForm,errors, otpSent, submitOtp, resetPasswordForm, submitNewPassword} = Auth();

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Quên mật khẩu' }];



</script>

<template>
  <BreadCrumb :breadCrumbPath="breadCrumbPath" />

  <section class="track-area pb-40">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-12">
          <div class="tptrack__product mb-40">
            <div class="tptrack__content grey-bg">
              <div class="tptrack__item d-flex mb-20">
                <div class="tptrack__item-icon">
                  <i class="fal fa-user-unlock"></i>
                </div>
                <div class="tptrack__item-content">
                    <h4 class="tptrack__item-title">
                        {{ resetPasswordForm ? 'Đặt lại mật khẩu' : otpSent ? 'Nhập OTP' : 'Quên mật khẩu' }}
                    </h4>        
                    <p class="tptrack__item-description">
                        {{ resetPasswordForm ? 'Nhập mật khẩu mới của bạn.' : otpSent ? 'Nhập mã OTP bạn đã nhận được để xác thực.' : 'Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.' }}
                    </p>
                </div>
              </div>
              <div class="tptrack__login mb-10">
                <form action="#" method="POST">
                    <div v-if="!otpSent && !resetPasswordForm">
                        <div class="tptrack_input">
                            <label for="email">Email:</label>
                            <div class="tptrack__email mb-1">
                                <span><i class="fal fa-envelope"></i></span>
                                <input type="email" placeholder="Địa chỉ email" name="email" v-model='forgotPasswordForm.email' />
                            </div>
                            <span class="text-danger error_message" v-if="errors.email">{{ errors.email }}</span>
                        </div>
                    </div>
                    <div v-else-if="otpSent && !resetPasswordForm">
                        <div class="tptrack_input">
                            <label for="otp">OTP:</label>
                            <div class="tptrack__email mb-1">
                                <span><i class="fal fa-key"></i></span>
                                <input type="text" placeholder="Mã OTP" name="otp" v-model='forgotPasswordForm.otp' />
                            </div>
                            <span class="text-danger error_message" v-if="errors.otp">{{ errors.otp }}</span>
                        </div>
                    </div>
                    <div v-else-if="resetPasswordForm">
                        <div class="tptrack_input">
                            <label for="password">Mật khẩu mới:</label>
                            <div class="tptrack__email mb-1">
                                <span><i class="fal fa-lock"></i></span>
                                <input type="password" placeholder="Mật khẩu mới" name="password" v-model='forgotPasswordForm.password' />
                            </div>
                            <span class="text-danger error_message" v-if="errors.password">{{ errors.password }}</span>
                        </div>
                        <div class="tptrack_input">
                            <label for="confirmPassword">Xác nhận mật khẩu:</label>
                            <div class="tptrack__email mb-1">
                                <span><i class="fal fa-lock"></i></span>
                                <input type="password" placeholder="Xác nhận mật khẩu" name="confirmPassword" v-model='forgotPasswordForm.confirmPassword' />
                            </div>
                            <span class="text-danger error_message" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="tptrack__btn">
                <button class="tptrack__submition active" @click="submitForgotPassword" v-if="!otpSent && !resetPasswordForm">
                    Gửi liên kết đặt lại mật khẩu<i class="fal fa-long-arrow-right"></i>
                </button>
                <button class="tptrack__submition active" @click="submitOtp" v-else-if="otpSent && !resetPasswordForm">
                    Gửi OTP<i class="fal fa-long-arrow-right"></i>
                </button>
                <button class="tptrack__submition active" @click="submitNewPassword" v-else-if="resetPasswordForm">
                    Đặt lại mật khẩu<i class="fal fa-long-arrow-right"></i>
                </button>
            </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <SideBannerAuth/>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped>

.tptrack__content {
  padding: 50px;
  border-radius: 10px;
}
.tptrack__item-icon {
  flex: 0 0 auto;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  background-color: var(--tp-common-white);
  border-radius: 6px;
  margin-right: 20px;
}

.tptrack__item-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--tp-heading-primary);
}
.tptrack__item-content p {
  font-size: 14px;
  color: var(--tp-text-body);
  line-height: 24px;
  margin-bottom: 0;
}

.tptrack__id ,
.tptrack__email {
  position: relative;
}
.tptrack__id span,
.tptrack__email span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  font-size: 16px;
}

.tptrack__id input,
.tptrack__email input {
  width: 100%;
  height: 60px;
  border: none;
  background-color: var(--tp-common-white);
  padding: 10px 60px;
  border-radius: 6px;
}
.tptrack__register input {
  width: 100%;
  height: 60px;
  border: none;
  background-color: var(--tp-common-white);
  padding: 10px 60px 10px 20px;
  border-radius: 6px;
}
.fa-user-unlock:before {
  content: '\f2f6';
  font: normal normal normal 18px/1 FontAwesome;
}
.fa-user:before {
  content: '\f007';
  font: normal normal normal 14px/1 FontAwesome;
}
.fa-key:before {
  content: '\f084';
  font: normal normal normal 14px/1 FontAwesome;
}

.fa-lock:before {
  content: '\f023';
  font: normal normal normal 18px/1 FontAwesome;
}

.fa-envelope:before {
  content: '\f0e0';
  font: normal normal normal 14px/1 FontAwesome;
}
.fa-key:before {
  content: '\f084';
  font: normal normal normal 14px/1 FontAwesome;
}
.fa-long-arrow-right:before {
  content: '\f178';
  font: normal normal normal 14px/1 FontAwesome;
}

.tptrack__submition {
  background: var(--tp-heading-primary);
  border-radius: 6px;
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
  padding: 22px 50px;
  text-align: center;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}
.tptrack__submition:hover,
.tptrack__submition.active {
  background-color: var(--tp-heading-secondary);
}
.tptrack__submition i {
  margin-left: 20px;
}
.tptrack__submition.active:hover {
  background-color: #859a00;
}
.tpsign__pass > a,
.tpsign__account > a {
  color: inherit;
}
.error_message{
  font-size:16px;
}
@media (max-width: 767px) {
  .tptrack__content {
      padding: 20px 15px;
  }
}
</style>
