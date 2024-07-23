<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import SideBannerAuth from '@/components/SideBannerAuth.vue'
import Auth from '@/api/auth/index.js';
import { useRouter } from "vue-router";
import { computed, reactive} from 'vue';
import axios from 'axios';
import { config } from '@/config/config';
import store from '../stores/index.js';
const router = useRouter();
const{loginForm, submitLogin, errors, resultOtp,submitResgiter } = Auth();

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Thông tin người dùng' }];
const user = computed(() => store.state.auth.user);
const form = reactive({
    name : user.value.name,
    address : user.value.address,
    phone : user.value.phone,
});

const updateUserInfor = async (id) => {
    try {
        const response = await axios.put(`${API_BACK_END_V1}user/${id}`);
        if (response.data.status === 'success') {
            store.dispatch('getUser');
            await  notyf.success({
					message: 'Đã sửa thông tin thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
        } else {
            console.error('Failed to update data');
        }
    } catch (error) {
        console.error('Error update data:', error);
    }
};
</script>

<template>
    <BreadCrumb :breadCrumbPath="breadCrumbPath" />

    <section class="track-area pb-40">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-sm-12">
                <SideBannerAuth/>
              </div>
          <div class="col-lg-6 col-sm-12">
            <div class="tptrack__product mb-40">
              <div class="tptrack__content grey-bg">
                <div class="tptrack__item d-flex mb-20">
                  <div class="tptrack__item-icon">
                    <i class="fal fa-user"></i>
                  </div>
                  <div class="tptrack__item-content">
                    <h4 class="tptrack__item-title">Cập nhật thông tin người dùng</h4>
                    <p>
                      Bạn có thể cập nhật thông tin cá nhân của mình tại đây.
                    </p>
                  </div>
                </div>
                <div class="tptrack__login mb-10">
                  <form @submit.prevent="updateUserInfo">
                    <div class="tptrack_input">
                      <label for="name">Họ và tên:</label>
                      <div class="tptrack__email mb-1">
                        <span><i class="fal fa-user"></i> </span>
                        <input type="text" placeholder="Họ và tên" name="name" v-model="form.name" />
                      </div>
                      <span class="text-danger error_message" v-if="errors.name">{{ errors.name }}</span>
                    </div>
                    <div class="tptrack_input">
                      <label for="phone">Số điện thoại:</label>
                      <div class="tptrack__email tptrack__normal mb-1">
                        <input type="text" placeholder="Số điện thoại" name="phone" v-model="form.phone" />
                      </div>
                      <span class="text-danger error_message" v-if="errors.phone">{{ errors.phone }}</span>
                    </div>
                    <div class="tptrack_input">
                      <label for="address">Địa chỉ:</label>
                      <div class="tptrack__email tptrack__normal mb-1">
                        <input type="text" placeholder="Địa chỉ" name="address" v-model="form.address" />
                      </div>
                      <span class="text-danger error_message" v-if="errors.address">{{ errors.address }}</span>
                    </div>
                    <div class="tptrack__btn">
                      <button class="tptrack__submition active" type="submit">
                        Cập nhật thông tin<i class="fal fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

<style scoped>
.tptrack__email.tptrack__normal input{
    padding-left:10px;
}
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
