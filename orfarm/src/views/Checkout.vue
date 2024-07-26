<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import {reactive,  ref, onMounted, computed} from 'vue'
import auth from '../stores/auth.js'
import store from '../stores/global.js';
import axios from 'axios';
import { useStore } from "vuex"
import Order from "../api/order/order.js";
import { useFormatCurrency } from "../composables/useFormatCurrency.js";
import Cart from "../api/cart/cart.js";
import { Notyf } from 'notyf';
const notyf = new Notyf();
const { submitOrder } = Order();
const { getToCart, responseCart, clearCartUser } = Cart();

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Thanh toán' }]
const store1 = useStore();
const data_user = ref('');
const data_cart = ref('');
const total_money = ref('');
const imageBank = ref("");
const name = ref('');
const phone = ref("");
const address = ref("");
const email = ref("");
const ward = ref("");
const data = ref([]);
onMounted(async()=>{
  const user = computed(() => store1.getters['user']);
  const admin = computed(() => store1.getters['admin']);
  if(user){
      name.value = user.value.name;
      phone.value = user.value.phone;
      address.value = user.value.address;
      email.value = user.value.email;
  }

  if (admin) {
		imageBank.value = admin.value.user_info[0].branch;
	}
  await getToCart();
  data_cart.value =  responseCart.data;
  total_money.value = responseCart.total;
})
const isShowLogin = ref(false);
const isShowCoupon = ref(false);
const cities = ref([]);
    const districts = ref([]);
    const wards = ref([]);
    const globalStore = ref(store.state);
const form = reactive({
  login: {
    username: '',
    password: '',
    rememberMe: false,
  },
  coupon: '',
  billingDetails: {
    province: 'Hà Nội',
    district: '',
    ward: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    createAccount: false,
    accountPassword: '',
  },
  shippingDetails: {
    shipToDifferentAddress: false,
    country: 'bangladesh',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
  },
  orderNotes: '',
  shippingMethod: '',
  paymentMethod: '',
});

const fetchLocationData = async () => {
      try {
        const response = await axios({
          url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
          method: "GET",
        });
        cities.value = response.data;
      
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
};


const toggleFormLogin = ()=>{
    isShowLogin.value = !isShowLogin.value;
}
const toggleFormCoupon = ()=>{
    isShowCoupon.value = !isShowCoupon.value;
}

const onProvinceChange = (event) => {
      const selectedProvinceName = event.target.value;
      const selectedProvince = cities.value.find(province => province.Name === selectedProvinceName);
      form.billingDetails.district = null;
      form.billingDetails.ward = null;
      districts.value = selectedProvince ? selectedProvince.Districts : [];
      wards.value = [];
};

const onDistrictChange = (event) => {
      const selectedDistrictName = event.target.value;
      const selectedDistrict = districts.value.find(district => district.Name === selectedDistrictName);
      form.billingDetails.ward = null;
      wards.value = selectedDistrict ? selectedDistrict.Wards : [];
};


onMounted(fetchLocationData);
const randomUpperCase = ref("");
const isModalVisible = ref(false);

const showModal = () => {
  if(!validateFormOder()){
    return;
  }
  var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
	  var randomIndex = Math.floor(Math.random() * charactersLength);
	  var randomChar = characters.charAt(randomIndex);
	  result += randomChar;
	}
  
	randomUpperCase.value = result;
  
	if (responseCart.data.length > 0) {
	  isModalVisible.value = true;
	}
  isModalVisible.value = true;

};
const hideModal = () => {

  isModalVisible.value = false;
}
const isLoading = ref(false);
const error = reactive({
  name:"",
  address: "",
  phone: '',
  list_product: [],
  zip_code: '',
  total_money: 0,
  email:"",
  
});
function validateFormOder (){
  let is_flag = true;
  error.email = false;
  error.address = false;
  error.name = false;
  error.phone = false;
  if(responseCart.data.length <= 0){
      notyf.error({
					message: 'Thêm sản phẩm vào giỏ hàng thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
    is_flag = false;
  }
  if(name.value === ""){
    error.name = true;
    is_flag = false;
  }
  if(email.value === ""){
    error.email = true;
    is_flag = false;
  }else{
    error.email = false;
  }
  if(phone.value === ""){
    error.phone = true;
    is_flag = false;
  }
  
  if(address.value === null || address.value === ""){
    error.address = true;
    is_flag = false;
  }
  return is_flag;
}
const handleOk = async () => {
	  isLoading.value  = true;
    const formDataOrder = {
      name: name.value,
      receive_address: address.value,
      phone: phone.value,
      list_product: data_cart.value,
      zip_code: randomUpperCase.value,
      total_money: responseCart.total,
    };
   
    try{
      await submitOrder(formDataOrder);
      await clearCartUser();
      isModalVisible.value = false;
    }catch (error){
    } finally {
      isLoading.value = false;
    }
  };
const handleCancel = () => {
	isModalVisible.value = false;
  };
 

</script>

<template>
    <BreadCrumb :breadCrumbPath="breadCrumbPath" />
    <section class="coupon-area pt-10 pb-30">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="coupon-accordion" v-if="!auth.state.user">
          <!-- ACCORDION START -->
          <h3>Đã có tài khoản? <span id="showlogin" @click="toggleFormLogin()">Nhấn vào đây để đăng nhập</span></h3>
          <div id="checkout-login" class="coupon-content" :class="{ open: isShowLogin }">
            <div class="coupon-info">
              <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
              <form @submit.prevent="handleLogin">
                <p class="form-row-first">
                  <label>Tên đăng nhập hoặc email <span class="required">*</span></label>
                  <input type="text" v-model="form.login.username">
                </p>
                <p class="form-row-last">
                  <label>Mật khẩu <span class="required">*</span></label>
                  <input type="password" v-model="form.login.password">
                </p>
                <p class="form-row">
                  <button class="tp-btn tp-color-btn" type="submit">Đăng nhập</button>
                  <label>
                    <input type="checkbox" v-model="form.login.rememberMe">
                    Ghi nhớ đăng nhập
                  </label>
                </p>
                <p class="lost-password">
                  <a href="#">Quên mật khẩu?</a>
                </p>
              </form>
            </div>
          </div>
          <!-- ACCORDION END -->
        </div>
      </div>
      <div class="col-md-6">
        <div class="coupon-accordion">
          <!-- ACCORDION START -->
          <h3>Có mã giảm giá? <span id="showcoupon" @click="toggleFormCoupon()">Nhấn vào đây để nhập mã của bạn</span></h3>
          <div id="checkout_coupon" class="coupon-checkout-content" :class="{ open: isShowCoupon }">
            <div class="coupon-info">
              <form @submit.prevent="applyCoupon">
                <p class="checkout-coupon">
                  <input type="text" placeholder="Mã giảm giá" v-model="form.coupon">
                  <button class="tp-btn tp-color-btn" type="submit">Áp dụng mã giảm giá</button>
                </p>
              </form>
            </div>
          </div>
          <!-- ACCORDION END -->
        </div>
      </div>
    </div>
  </div>
</section>

<section class="checkout-area pb-50">
  <div class="container">
    <form @submit.prevent="handleCheckout">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="checkbox-form">
            <h3>Chi tiết thanh toán</h3>
            <div class="row">
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label>Họ và tên <span class="required">*</span></label>
                  <input type="text" v-model="name"  :class="{'is-invalid': error.name}">
                  <span v-if="error.name" class="error-message">Tên không được bỏ trống</span>
                </div>
              </div>
             
              <div class="col-md-12">
                <div class="country-select">
                  <label>Tỉnh/Thành Phố <span class="required">*</span></label>
                  <select v-model="form.billingDetails.province" @change="onProvinceChange($event)">
                    <option v-for="province in cities" :value="province.Name" :data="province">{{province.Name}}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="country-select">
                  <label>Quận/Huyện <span class="required">*</span></label>
                  <select v-model="form.billingDetails.district"   @change="onDistrictChange($event)">
                    <option v-for="district in districts" :value="district.Name">{{district.Name}}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="country-select">
                  <label>Phường/Xã <span class="required">*</span></label>
                  <select v-model="form.billingDetails.ward" >
                    <option v-for="ward in wards" :value="ward.Name">{{ward.Name}}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label>Địa chỉ <span class="required">*</span></label>
                  <input type="text" placeholder="Địa chỉ đường" v-model="address" :class="{'is-invalid': error.address}">
                  <span v-if="error.address" class="error-message"> Địa chỉ không được bỏ trống </span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>Địa chỉ email <span class="required">*</span></label>
                  <input type="email" v-model="email" :class="{'is-invalid': error.email}">
                   <span v-if="error.email" class="error-message"> Email không được bỏ trống </span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>Số điện thoại <span class="required">*</span></label>
                  <input type="text" v-model="phone" :class="{'is-invalid': error.phone}">
                  <span v-if="error.phone" class="error-message"> Số điện thoại không được bỏ trống </span>
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list create-acc">
                  <input id="cbox" type="checkbox" v-model="form.billingDetails.createAccount">
                  <label>Tạo tài khoản?</label>
                </div>
                <div id="cbox_info" class="checkout-form-list create-account" :class="{ open: form.billingDetails.createAccount }">
                  <p>Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn là khách hàng cũ, vui lòng đăng nhập ở đầu trang.</p>
                  <label>Mật khẩu tài khoản <span class="required">*</span></label>
                  <input type="password" placeholder="mật khẩu" v-model="form.billingDetails.accountPassword">
                </div>
              </div>
            </div>
            <!-- <div class="different-address">
              <div class="ship-different-title">
                <h3>
                  <label>Giao hàng đến địa chỉ khác?</label>
                  <input id="ship-box" type="checkbox" v-model="form.shippingDetails.shipToDifferentAddress">
                </h3>
              </div>
              <div id="ship-box-info" class="ship-box-info" :class="{ open: form.shippingDetails.shipToDifferentAddress }">
                <div class="row">
                  <div class="col-md-12">
                    <div class="country-select">
                      <label>Quốc gia <span class="required">*</span></label>
                      <select v-model="form.shippingDetails.country">
                        <option value="bangladesh">Bangladesh</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Albania">Albania</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Dominican Republic">Cộng hòa Dominica</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>Tên <span class="required">*</span></label>
                      <input type="text" v-model="form.shippingDetails.firstName">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>Họ <span class="required">*</span></label>
                      <input type="text" v-model="form.shippingDetails.lastName">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>Tên công ty</label>
                      <input type="text" v-model="form.shippingDetails.companyName">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>Địa chỉ <span class="required">*</span></label>
                          <input type="text" placeholder="Street address" v-model="form.shippingDetails.address">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <input type="text" placeholder="Apartment, suite, unit etc. (optional)" v-model="form.shippingDetails.apartment">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>Thị trấn / Thành phố <span class="required">*</span></label>
                          <input type="text" placeholder="Town / City" v-model="form.shippingDetails.city">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Bang <span class="required">*</span></label>
                          <input type="text" v-model="form.shippingDetails.state">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Mã bưu điện / Zip <span class="required">*</span></label>
                          <input type="text" placeholder="Postcode / Zip" v-model="form.shippingDetails.zip">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Địa chỉ email <span class="required">*</span></label>
                          <input type="email" v-model="form.shippingDetails.email">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Số điện thoại <span class="required">*</span></label>
                          <input type="text" v-model="form.shippingDetails.phone">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="order-notes">
                    <div class="checkout-form-list checkout-form-list-2">
                      <label>Ghi chú đơn hàng</label>
                      <textarea id="checkout-mess" cols="30" rows="10" placeholder="Lưu ý về đơn đặt hàng của bạn, ví dụ: ghi chú đặc biệt để giao hàng." v-model="form.orderNotes"></textarea>
                    </div>
                  </div>
                </div> -->
              </div>
            </div> 
            <div class="col-lg-6 col-md-12">
                <div class="your-order mb-30 ">
                              <h3>Đơn hàng của bạn</h3>
                              <div class="your-order-table table-responsive">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th class="product-name"> <strong>Sản phẩm</strong></th>
                                             <th class="product-total"><strong>Giá tiền</strong></th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                        <tr v-for="(item, index) in responseCart.data" :key="index" class="cart_item">
                                          <td class="product-name">
                                            {{ item.product.name }} <strong class="product-quantity"> × {{ item.amount }}</strong>
                                          </td>
                                          <td class="product-total">
                                            <span class="amount">{{ useFormatCurrency(item.amount*item.product.price) }}</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                       <tfoot>
                                       
                                          <tr class="shipping">
                                                <th>Giao hàng</th>
                                                <td>
                                                   <ul>
                                                      <li>
                                                            <input type="radio" name="shipping" :v-model='form.shippingMethod'>
                                                            <label>
                                                                Giá cố định: <span class="amount">$7.00</span>
                                                            </label>
                                                      </li>
                                                      <li>
                                                            <input type="radio" name="shipping" :v-model='form.shippingMethod'>
                                                            <label>Miễn phí giao hàng</label>
                                                      </li>
                                                   </ul>
                                                </td>
                                          </tr>
                                          <tr class="order-total">
                                                <th>Tổng tiền</th>
                                                <td><strong><span class="amount">{{useFormatCurrency(total_money)}}</span></strong>
                                                </td>
                                          </tr>
                                       </tfoot>
                                    </table>
                              </div>
                              <div class="payment-method">
   <div class="accordion" id="checkoutAccordion">
      <div class="accordion-item">
         <h2 class="accordion-header" id="checkoutOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
            Chuyển khoản ngân hàng trực tiếp
            </button>
         </h2>
         <div id="bankOne" class="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion" style="">
            <div class="accordion-body">
            Thực hiện thanh toán của bạn trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng ID Đơn hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được vận chuyển cho đến khi tiền đã được chuyển vào tài khoản của chúng tôi.
            </div>
         </div>
      </div>
      <div class="accordion-item">
         <h2 class="accordion-header" id="paymentTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
            Thanh toán bằng séc
            </button>
         </h2>
         <div id="payment" class="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
            <div class="accordion-body">
            Vui lòng gửi séc của bạn đến Tên cửa hàng, Đường phố cửa hàng, Thị trấn cửa hàng, Bang / Quận cửa hàng, Mã bưu điện cửa hàng.
            </div>
         </div>
      </div>
      <div class="accordion-item">
         <h2 class="accordion-header" id="paypalThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
            PayPal
            </button>
         </h2>
         <div id="paypal" class="accordion-collapse collapse" aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
            <div class="accordion-body">
            Thanh toán qua PayPal; bạn có thể thanh toán bằng thẻ tín dụng nếu bạn không có tài khoản PayPal.
            </div>
         </div>
      </div>
   </div>
   <div class="order-button-payment mt-20">
      <button type="submit" class="tp-btn tp-color-btn w-100 banner-animation"  @click="showModal">Đặt hàng</button>
   </div>
  
</div>

          </div>
          
            </div>
          </div>
          
        </form>
        <div v-if="isModalVisible" class="modal-overlay" @click="hideModal">
      <div class="modal-text" @click.stop>
         <h4>Thanh toán</h4>
         <img :src="imageBank" alt="Hình ảnh" style="width: 80%;" />
         <p style="text-align: center">
           Nội dung chuyển khoản:
           <span class="font-weight-bold">{{ randomUpperCase }}</span>
         </p>
         <div class="button-container">
            <button class="btn bg-green" @click="handleOk" v-if="!isLoading">Xác nhận</button>
            <button class="btn bg-green" v-else>Loading...</button>
         </div>
      </div>
   </div>
      </div>
    </section>
  </template>
<style scoped>
.modal-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
}

.modal-text {
   background: white;
   padding: 20px;
   border-radius: 5px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
}

.button-container {
   width: 100%;
   display: flex;
   justify-content: flex-end;
}

.btn.bg-green {
  background-color: var(--tp-heading-secondary);
   color: white;
   border: none;
   padding: 10px 20px;
   border-radius: 5px;
   cursor: pointer;
}

.btn.bg-green:hover {
   background-color: darkgreen;
}
.error-message {
   color: red;
   font-size: 12px;
}
.is-invalid {
   border: 2px solid red  !important;
   border-radius: 4px;
}
.coupon-accordion h3 {
    background-color: #f6f6f6;
    border-top: 3px solid rgba(150, 174, 0, 0.3);
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 25px;
    padding: 1em 2em 1em 3.5em;
    position: relative;
    width: auto;
}

.coupon-accordion h3::before {
    content: "\f07b";
    left: 15px;
    top: 13px;
    position: absolute;
    color: #6f7172;
    font: normal normal normal 14px/1 FontAwesome;
    font-weight: 700;
}
.coupon-accordion span {
    color: #6f7172;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
}
.coupon-content {
    margin-bottom: 20px;
}
.coupon-info p.coupon-text {
    margin-bottom: 15px;
}

.coupon-info p {
    margin-bottom: 0;
}
.checkbox-form h3 {
    border-bottom: 1px solid #eaedff;
    font-size: 24px;
    font-family: var(--tp-ff-jost);
    margin: 0 0 20px;
    padding-bottom: 10px;
    width: 100%;
}
.country-select {
    margin-bottom: 30px;
    position: relative;
}
.country-select label, .checkout-form-list label {
    color: #6f7172;
    display: block;
    margin: 0 0 5px;
}
.country-select label span.required, .checkout-form-list label span.required {
    color: red;
}
.country-select select {
    width: 100%;
    background-color: transparent;
    border: 1px solid #eaedff;
    padding: 0 10px;
    height: 50px;
}
.country-select .nice-select {
    border: 1px solid #eaedff;
    height: 45px;
    padding-left: 10px;
    width: 100%;
    color: #6f7172;
    margin-bottom: 20px;
}
.checkout-form-list input[type=text], .checkout-form-list input[type=password], .checkout-form-list input[type=email] {
    background: #ffffff;
    border: 1px solid #eaedff;
    border-radius: 0;
    height: 45px;
    padding: 0 0 0 10px;
    width: 100%;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}
.checkout-form-list {
    margin-bottom: 30px;
}

.checkout-form-list input[type=checkbox] {
    display: inline-block;
    margin-right: 10px;
    position: relative;
    top: 4px;
    transform: translateY(-3px);
}
.create-account,
.ship-box-info{
    overflow: hidden;
    max-height: 0;
    transition: max-height 1s ease-in-out; 
  }
  .create-account.open,
  .ship-box-info.open {
    max-height:1000px;
  }
  .coupon-checkout-content,
.coupon-content {
  border: 1px solid #ffffff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease-out; 
}

.coupon-checkout-content.open,
.coupon-content.open {
  border: 1px solid #eaedff;
  max-height: 1000px;
  transition: max-height 1s ease-in; 
}

.create-acc label {
    color: #6f7172;
    display: inline-block;
}

.ship-different-title h3 label {
    display: inline-block;
    margin-right: 20px;
    color: #6f7172;
    font-family: var(--tp-ff-jost);
}
.order-notes textarea {
    border: 1px solid #eaedff;
    height: 120px;
    padding: 15px;
    width: 100%;
    outline: 0;
    resize: none;
}
.coupon-info p.form-row-first input, .coupon-info p.form-row-last input {
    border: 1px solid #eaedff;
    height: 45px;
    margin: 0 0 14px;
    max-width: 100%;
    padding: 0 0 0 10px;
    width: 100%;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}
.form-row > label {
    margin-top: 15px;
    margin-left: 15px;
    color: #6f7172;
}
.coupon-info{
  padding:30px;
}
.coupon-info p.form-row-last label span.required {
    color: red;
    font-weight: 700;
}

p.lost-password a {
    color: #6f6f6f;
}
p.lost-password {
    margin-top: 15px;
}
p.checkout-coupon input[type=text] {
    height: 45px;
    padding: 0 15px;
    width: 100%;
    border: 1px solid #eaedff;
    margin-bottom: 15px;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}

.your-order {
    padding: 30px 40px 45px;
    border: 3px solid rgba(150, 174, 0, 0.3);
}
.your-order h3 {
    border-bottom: 1px solid #eaedff;
    font-size: 30px;
    margin: 0 0 20px;
    padding-bottom: 10px;
    font-family: var(--tp-ff-jost);
    width: 100%;
}
.your-order-table table th {
    border-top: medium none;
    color: #6f7172;
    font-weight: normal;
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
    width: 250px;
}
.your-order-table table th, .your-order-table table td {
    border-bottom: 1px solid #eaedff;
    border-right: medium none;
    color: #6f7172;
    font-size: 14px;
    padding: 15px 0;
    text-align: left;
}
.your-order-table table .shipping ul li input {
    margin-right:5px;
    position: relative;
    top: 2px;
}
.your-order-table table tr.order-total td span {
    color: var(--tp-theme-primary);
    font-size: 18px;
    font-weight: 500;
}
.payment-method .accordion-button:not(.collapsed) {
    color: var(--tp-theme-primary);
    background-color: var(--tp-common-white);
    box-shadow: none;
}
.payment-method .accordion-body {
    padding: 8px 0;
    padding-bottom: 40px;
}
.payment-method .accordion-button::after {
    position: absolute;
    content: "\f067";
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: FontAwesome;
    font-size: 16px;
    font-weight: 400;
    margin-left: 0;
    background-image: none;
}
.payment-method .accordion-button:not(.collapsed)::after {
    content: "\f068";
}
.payment-method .accordion-collapse {
    border: none;
}
.payment-method .accordion-item {
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid var(--tp-border-primary);
}
.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: var(--bs-accordion-inner-border-radius);
    border-top-right-radius: var(--bs-accordion-inner-border-radius);
}

.payment-method .accordion-button {
    font-size: 16px;
    font-weight: 500;
    color: var(--tp-theme-primary);
    padding: 23px 0;
    border: none;
}
.your-order-table table .shipping ul li {
    list-style: none;
}
.your-order-table table .shipping ul{
    padding-left:0;
}
.your-order-table table .order-total td {
    border-bottom: medium none;
}
.your-order-table table .order-total th {
    border-bottom: 0;
    font-size: 14px;
}
</style>
