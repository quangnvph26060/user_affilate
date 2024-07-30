<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import ProductSlider from '@/components/ProductSlider.vue'
import StarRating from './StarRating.vue';
import { defineProps,onMounted,ref, reactive } from 'vue';
import axios from 'axios';
import apiURL  from "../connect.js";
import store from '../stores/index.js';
import Swal from 'sweetalert2';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Skeleton } from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css"
import Comment from '../api/comment/comment.js';
const { submitCommnent, getCommnentAll, responseComment }  = Comment();
const API_BACK_END = apiURL.baseURL;
const API_BACK_END_SUB = apiURL.URL;
const productInfor = ref('');
const productByCategory = ref('');
const productId = window.location.pathname.split('/').pop();

const notyf = new Notyf();
const cart = reactive({
    product_id: productId,
    amount: 1,
    user_id: store.state.auth.user.id,
})
const is_flag = ref('');
is_flag.value = store.state.auth.user.id;
const minusQuantity = () => {
    if (cart.amount > 1) {
        cart.amount--;
    }
};

const plusQuantity = (item) => {
    cart.amount++;
};

onMounted(async ()=>{
    await getCommnentAll(productId);
})
const fetchProduct = async () => {
    try {
        const response = await axios.post(`${API_BACK_END}products/${productId}`);
        if (response.data.status === 'success') {
            return response.data.data;
        } else {
            console.error('Failed to fetch product data');
            return null;
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
    }
};


const addCart = async () => {
    try {
        const response = await axios.post(`${API_BACK_END}cart`,cart);
        if (response.data.status === 'success') {
            store.dispatch('getCart');
            await  notyf.success({
					message: 'Thêm sản phẩm vào giỏ hàng thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
          
        } else {
            console.error('Failed to fetch product data');
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
};


const formatCurrency = (value) => {
  const formattedNumber = new Intl.NumberFormat('en-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
    return `${formattedNumber} VND`;
};

onMounted(async () => {
    productInfor.value = await fetchProduct();
    productByCategory.value = await fetchProductByCategory(); 
});
const fetchProductByCategory = async () => {
    try {
        const response = await axios.post(`${API_BACK_END}products/bycategory/${productInfor.value.category_id}`);
        if (response.data.status === 'success') {
            return response.data.data;
        } else {
            console.error('Failed to fetch product data');
            return null;
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
    }
};
const userRating = ref(0); 

const handleRatingUpdate = (rating) => {
  userRating.value = rating;
};
const name = ref('');
const email = ref('');
const content = ref('');
const error = reactive({
  name:"",
  email:"",
  content:"",
  
});
const validateComment = () => {
    let is_result = true;
    error.name = false;
    error.email = false;
    error.content = false;
    if(!name.value){
        const nameInput = document.querySelector('.is-invalid');
    if (nameInput) {
      nameInput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
        error.name = true;
        is_result = false;
    }
    if(!email.value){
        error.email = true;
        is_result = false;
    }
    if(!content.value){
        error.content = true;
        is_result = false;
    }
    return is_result;
}
const handleSubmit = async () => {
    if(!validateComment()){
      return;
    }
    const formDataOrder = {
      name: name.value,
      email: email.value,
      content: content.value,
      rate: userRating.value,
      product_id: productId,
    };
    try{
      await submitCommnent(formDataOrder);
      await getCommnentAll(productId);
    
    }catch (error){
    } finally {
      
    }
};
</script>
<template>
<BreadCrumb :breadCrumbPath="[{ route: '/', name: 'Trang chủ' }, { route:'shop', name: productInfor?.category?.name },{name: productInfor?.name}]" :isGrey='true'/>
<section class="shopdetails-area grey-bg pb-50">
            <div class="container">
               <div class="row">
                  <div class="col-lg-10 col-md-12">
                     <div class="tpdetails__area mr-60 pb-30">
                        <div class="tpdetails__product mb-30">
                           <div class="tpdetails__title-box">
                              <h3 class="tpdetails__title"><Skeleton :loading="!productInfor" :count='1'>{{productInfor?.name}}</Skeleton></h3>
                              <ul class="tpdetails__brand">
                                 <li> Nhãn hàng: <a href="#">{{productInfor?.brands?.name}}</a> </li>
                                 <li>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <b>{{ responseComment.count }} Đánh giá</b>
                                 </li>
                                 <li>
                                    SKU: <span>ORFARMVE005</span>
                                 </li>
                              </ul>
                           </div>
                           <div class="tpdetails__box">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <Skeleton height="450px" width="450px" :loading="!productInfor.images">
                                        <div class="tpproduct-details__nab">
                                          <div class="tab-content" id="nav-tabContents">
                                            <div v-for="(image, index) in productInfor?.images" :key="image?.id" class="tab-pane fade w-img" :class="{ 'show active': index === 0 }" :id="`nav-${index}`" role="tabpanel" :aria-labelledby="`nav-tab-${index}`" tabindex="0">
                                              <img :src="`${API_BACK_END_SUB}/${image?.image_path}`" :alt="image?.description" class='tpproduct-details__nab--image'>
                                              <div class="tpproduct__info bage">
                                                <span class="tpproduct__info-hot bage__hot">HOT</span>
                                                <span class="tpproduct__info-discount bage__discount" style='margin-left:5px;'>{{ productInfor.commission_rate }}%</span>
                                              </div>
                                            </div>
                                    
                                          </div>
                                          <nav>
                                            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                                              <button v-for="(image, index) in productInfor?.images" :key="image?.id" class="nav-link" :class="{ active: index === 0 }" :id="`nav-tab-${index}`" data-bs-toggle="tab" :data-bs-target="`#nav-${index}`" type="button" role="tab" :aria-controls="`nav-${index}`" :aria-selected="index === 0">
                                                <img :src="`${API_BACK_END_SUB}/${image?.image_path}`" alt="">
                                              </button>
                                            </div>
                                          </nav>
                                        </div>
                                    </Skeleton>
                                 </div>
                                 <div class="col-lg-6">
                                <div class="product__details">
                                    <div class="product__details-price-box">
                                    <h5 class="product__details-price"> <Skeleton :loading="!productInfor" :count='1'>{{formatCurrency(productInfor?.price)}} </Skeleton></h5>
                                    <ul class="product__details-info-list">
                                        <li>Nước sốt phô mai không sữa ngon</li>
                                        <li>Thân thiện với người ăn chay & dị ứng</li>
                                        <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
                                    </ul>
                                    </div>
                                    <div class="product__details-cart">
                                    <div class="product__details-quantity d-flex align-items-center mb-15">
                                        <b>Số lượng:</b>
                                        <div class="product__details-count mr-10">
                                        <span class="cart-minus" @click="minusQuantity"><i class="far fa-minus"></i></span>
                                        <input class="tp-cart-input" type="text" :value="cart.amount">
                                        <span class="cart-plus" @click="plusQuantity"><i class="far fa-plus"></i></span>
                                        </div>
                                        <div class="product__details-btn" @click='addCart'>
                                        <a href="#">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <ul class="product__details-check">
                                        <li>
                                        <a href="#"><i class="icon-heart icons"></i> Thêm vào danh sách yêu thích</a>
                                        </li>
                                        <li>
                                        <a href="#"><i class="icon-layers"></i> Thêm vào So Sánh</a>
                                        </li>
                                        <li>
                                        <a href="#"><i class="icon-share-2"></i> Chia sẻ</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div class="product__details-stock mb-25">
                                    <ul>
                                        <Skeleton :loading="!productInfor" :count='1'><li>Tình trạng:<i>{{productInfor?.quantity}} Còn hàng</i></li></Skeleton>
                                        <li>Danh mục: <span><Skeleton :loading="!productInfor" :count='1'>{{productInfor?.category?.name}}</Skeleton></span></li>
                                        <li>
                                            Tình trạng: 
                                            <span v-if="productInfor && productInfor?.status === 'published'">
                                              Đang bày bán
                                            </span>
                                            <span v-else>
                                              Ngừng bày bán
                                            </span>
                                          </li>
                                    </ul>
                                    </div>
                                    <div class="product__details-payment text-center">
                                    <img src="../assets/img/shape/payment-2.png" alt="">
                                    <span>Đảm bảo thanh toán an toàn & Bảo mật</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="tpdescription__box">
                           <div class="tpdescription__box-center d-flex align-items-center justify-content-center">
                              <nav>
                                 <div class="nav nav-tabs" role="tablist">
                                   <button class="nav-link active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Mô tả Sản Phẩm</button>
                                   <button class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false" tabindex="-1">Đánh giá ({{ responseComment.count ?? 0}})</button>
                                 </div>
                               </nav>
                           </div>
                           <div class="tab-content" id="nav-tabContent">
                              <div class="tab-pane fade active show" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab" tabindex="0">
                                 <div class="tpdescription__content">
                                    <Skeleton :loading="!productInfor" :count='25'>
                                    <p v-html="productInfor?.description"> </p>
                                    </Skeleton>
                                 </div>
                              </div>


                              <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
                            <div class="tpreview__wrapper">
                                <h4 class="tpreview__wrapper-title">Đánh giá {{ productInfor?.name }}</h4>
                                <div class="tpreview__comment" v-for="(item, index) in responseComment.data">
                                    <div class="tpreview__comment-text">
                                        <div class="tpreview__comment-autor-info d-flex align-items-center justify-content-between">
                                            <div class="tpreview__comment-author">
                                                <span>{{  item.user.name }}</span>
                                                <div class="tpreview__comment-star">
                                                    <i v-for="n in 5"
                                                        :key="n"
                                                        class="icon-star_outline1"
                                                        :class="{ 'yellow-star': n <= item.rate }"
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p>{{ item.content }}</p>
                                    </div>
                                </div>
                                <div class="tpreview__form">
                                    <h4 class="tpreview__form-title mb-25">Thêm đánh giá </h4>
                                    <p v-if="is_flag === undefined" class="error-message">Vui lòng chọn  <router-link to="/login">đăng nhập</router-link>  để đánh giá.</p>
                                    <form action="#" v-else @submit.prevent="handleSubmit">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="tpreview__input mb-30">
                                                    <input type="text" v-model="name" placeholder="Tên" :class="{'is-invalid': error.name}">
                                                    <span v-if="error.name" class="error-message"> Tên không được bỏ trống </span>
                                                </div>

                                            </div>
                                            <div class="col-lg-6">
                                                <div class="tpreview__input mb-30">
                                                    <input type="email" v-model="email" placeholder="Email" :class="{'is-invalid': error.email}">
                                                    <span v-if="error.email" class="error-message"> Email không được bỏ trống </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="tpreview__star mb-20">
                                                    <h4 class="title">Đánh giá của bạn</h4>
                                                    <div class="tpreview__star-icon">
                                                        <StarRating @update:rating="handleRatingUpdate"/>
                                                        <!-- <span v-for="n in 5" :key="n" @click="setRating(n)">
                                                            <i :class="getStarClass(n)"></i>
                                                        </span> -->
                                                    </div>
                                                </div>
                                                <div class="tpreview__input mb-30">
                                                    <textarea v-model="content" name="text" placeholder="Tin nhắn" :class="{'is-invalid': error.content}"></textarea>
                                                    <span v-if="error.content" class="error-message"> Tin nhắn không được bỏ trống </span>
                                                    <div class="tpreview__submit mt-30">
                                                        <button class="tp-btn" type="submit">Gửi</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                                        </div>
                                                    </div>
                                                </div>   
                                                </div>
                                            </div>
                            </div>
                                        <div class="col-lg-2 col-md-12">
                                            <div class="tpsidebar pb-30">
                                                <div class="tpsidebar__warning mb-30">
                            <ul>
                                <li>
                                    <div class="tpsidebar__warning-item">
                                        <div class="tpsidebar__warning-icon">
                                            <i class="icon-package"></i>
                                        </div>
                                        <div class="tpsidebar__warning-text">
                                            <p>Miễn phí vận chuyển áp dụng <br> cho tất cả các đơn hàng trên $90</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpsidebar__warning-item">
                                        <div class="tpsidebar__warning-icon">
                                            <i class="icon-shield"></i>
                                        </div>
                                        <div class="tpsidebar__warning-text">
                                            <p>Đảm bảo 100% hữu cơ <br> từ các trang trại tự nhiên</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpsidebar__warning-item">
                                        <div class="tpsidebar__warning-icon">
                                            <i class="icon-package"></i>
                                        </div>
                                        <div class="tpsidebar__warning-text">
                                            <p>Hoàn trả trong vòng 60 ngày <br> nếu bạn thay đổi ý định</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="tpsidebar__banner mb-30">
                           <img src="../assets/img/shape/sidebar-product-1.png" alt="">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

        <ProductSlider title='Sản phẩm tương tự' option='' fullscreen='true' :hasProcess="false" :slideOnShow='5' :products='productByCategory'/>
</template>
<style scoped>
.yellow-star{
    font-size: 14px;
    color: var(--tp-text-1) !important;
}
.tpreview__comment-star{
    font-size: 14px;
    color: gray !important;
}
.error-message {
   color: red;
   font-size: 12px;
}
.is-invalid {
   border: 2px solid red  !important;
   border-radius: 4px;
}
.tpdetails__product {
    background-color: var(--tp-common-white);
    padding: 35px 40px 45px 40px;
    border-radius: 10px;
}
.tpdetails__title-box {
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #E6ECF0;
}

.tpdetails__title {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: var(--tp-heading-primary);
}
.tpdetails__brand li {
    list-style: none;
    display: inline-block;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #455770;
    padding-right: 20px;
    position: relative;
    margin-right: 15px;
}

.tpdetails__brand li::before {
    position: absolute;
    content: "";
    right: 0;
    height: 12px;
    width: 1px;
    background-color: #E6ECF0;
    top: 50%;
    transform: translateY(-50%);
}
.tpdetails__brand li a {
    display: inline-block;
    font-weight: 500;
    color: var(--tp-heading-secondary);
}
.tpdetails__brand li i {
    margin-right: -5px;
    font-size: 14px;
    color: var(--tp-text-1);
}
.icon-star_outline1:before {
    content: "\e91f";
}
.tpdetails__brand li b {
    font-weight: 500;
    text-transform: uppercase;
    color: var(--tp-text-3);
    margin-left: 5px;
}
.tpdetails__brand li span {
    font-weight: 500;
    color: var(--tp-heading-secondary);
    display: inline-block;
}
.tpproduct-details__nab .tab-pane {
    position: relative;
}
.tpproduct__info {
    position: absolute;
    top: 17px;
    left: 17px;
}
.bage__hot {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-text-4);
    border-radius: 2px;
    color: var(--tp-theme-2);
    padding: 3px 9px;
}
.bage__discount {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-theme-3);
    border-radius: 2px;
    color: var(--tp-common-white);
    padding: 3px 9px;
}
.tpproduct-details__nab .nav-tabs {
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
}
.tpproduct-details__nab .nav-tabs .nav-link.active {
    border-color: var(--tp-heading-secondary);
}
.tpproduct-details__nab .nav-tabs .nav-link img {
    height: 60px;
    width: 60px;
    object-fit: cover;
}
.tpproduct-details__nab .nav-tabs .nav-link {
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0 5px;
    border: 1px solid #E6ECF0;
    border-radius: 5px;
}
.product__details-price-box {
    padding-bottom: 25px;
    border-bottom: 1px solid #E6ECF0;
    margin-bottom: 30px;
}
.product__details-price {
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: #EA0D42;
}
.product__details-info-list li {
    font-family: var(--tp-ff-jost);
    list-style: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--tp-text-body);
    position: relative;
    padding-left: 18px;
}
.product__details-info-list{
    padding:0;
}
.product__details-info-list li::after {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--tp-text-body);
    border-radius: 50%;
}
.product__details-cart {
    padding-bottom: 20px;
    border-bottom: 1px solid #E6ECF0;
    margin-bottom: 30px;
}

.product__details-quantity b {
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: #2D2A6E;
    flex: 0 0 auto;
    margin-right: 8px;
}
.product__details-count {
    flex: 0 0 auto;
    background-color: #F3F3F9;
    border-radius: 30px;
    display: inline-block;
    border: 1px solid #EBEFF4;
    padding: 10px 10px;
    color: var(--tp-text-body);
    cursor: pointer;
}
.fa-minus:before {
    content: "\f068";
    font: normal normal normal 14px/1 FontAwesome;
    margin-right:5px;
}
.fa-plus:before {
    content: "\f067";
    font: normal normal normal 14px/1 FontAwesome;
    margin-left:5px;
}
.cart-minus,.cart-plus{
    padding:10px;
   
}

.product__details-count input {
    user-select: none;
    background-color: #F3F3F9;
    border: none;
    width: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--tp-text-body);
}
.product__details-btn {
    flex: 0 0 auto;
}
.product__details-btn a {
    font-family: var(--tp-ff-jost);
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
    color: var(--tp-common-white);
    background-color: var(--tp-heading-secondary);
    padding: 13px 97px;
    border-radius: 30px;
    display: inline-block;
}
.product__details-check {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.product__details-check li {
    list-style: none;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
    margin-right: 25px;
    margin-bottom: 5px;
}
.tpproduct__product-category a{
   color:inherit;
}
.icon-share-2:before {
    content: "\f064";
    font: normal normal normal 12px / 1 FontAwesome;
}
.product__details-check{
    padding:0;
}
.product__details-check a{
    color:inherit;
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 12px;
}
.product__details-stock li {
    list-style: none;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: var(--tp-text-body);
    margin-bottom: 5px;
}

.product__details-stock li i {
    color: #00B853;
    font-style: normal;
}
.product__details-stock ul{
    padding:0;
}
.product__details-payment {
    background-color: var(--tp-grey-8);
    padding: 20px;
    border-radius: 5px;
}
.product__details-payment img {
    max-width: 100%;
}
.product__details-payment span {
    display: block;
    margin-top: 5px;
}
.product__details-payment {
    background-color: var(--tp-grey-8);
    padding: 20px;
    border-radius: 5px;
}
.tpdescription__box {
    background-color: var(--tp-common-white);
    padding: 20px 40px 16px 40px;
    border-radius: 10px;
}
.tpdescription__box-center {
    border-bottom: 1px solid #E6ECF0;
    margin-bottom: 30px;
}
.tpdescription__box-center .nav-tabs {
    border: none;
    outline: 0;
}
.tpdescription__box-center .nav-tabs .nav-link.active {
    color: var(--tp-heading-secondary);
    border-bottom: 2px solid var(--tp-heading-secondary);
}

.tpdescription__box-center .nav-tabs .nav-link {
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #79819C;
    padding: 0 0 14px 0;
    margin: 0 22px;
}
.tpdescription__content p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--tp-text-body);
}
.tpdescription__product-title {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
}
.tpdescription__product-info li {
    list-style: none;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--tp-text-body);
}
.tpdescription__product-info{
    padding:0;
}
.tpdescription__product-info p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--tp-text-body);
}
.tpdescription__product-thumb img {
    border-radius: 5px;
    max-width: 100%;
}
.tpdescription__video-wrapper img {
    border-radius: 5px;
}

.tpreview__wrapper-title {
    font-size: 24px;
    color: var(--tp-heading-primary);
    margin-bottom: 20px;
    font-weight: 600;
}
.tpreview__comment {
    display: flex;
    margin-bottom: 20px;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--tp-border-1);
    width: 100%;
}
.tpreview__comment-img {
    flex: 0 0 auto;
}

.tpreview__comment-text {
    flex: 0 0 auto;
    border: 1px solid var(--tp-border-1);
    border-radius: 10px;
    padding: 10px;
    width: 100%;
}
.tpreview__comment-author {
    font-weight: 600;
    color: var(--tp-heading-primary);
    font-size: 13px;
    text-transform: uppercase;
    flex: 0 0 auto;
    margin-right: 10px;
}
.tpreview__comment-star {
    flex: 0 0 auto;
}
.tpreview__comment-star i {
    font-size: 14px;
    /* color: var(--tp-text-1); */
}
.icon-star_outline1:before {
    margin-right:5px;
    content: "\f005";
    font: normal normal normal 14px/1 FontAwesome;
}
.tpreview__comment-text .date {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
}
.tpreview__form-title {
    color: var(--tp-heading-primary);
    font-weight: 600;
    font-size: 20px;
}
.tpreview__input input {
    height: 60px;
    width: 100%;
    border: 1px solid var(--tp-border-1);
    border-radius: 30px;
    padding: 5px 30px;
}
.tpreview__star .title {
    font-size: 16px;
    font-weight: 600;
    color: var(--tp-heading-primary);
}
.tpreview__star-icon i {
    color: var(--tp-heading-primary);
}
.tpreview__input textarea {
    width: 100%;
    padding: 10px;
    height: 220px;
    border: 1px solid var(--tp-border-1);
    border-radius: 10px;
    outline: 0;
}
.tpsidebar__warning {
    border: 1px solid #E8C3C3;
    border-radius: 10px;
    padding: 25px 30px;
}
.tpsidebar__warning ul li {
    list-style: none;
    padding-bottom: 30px;
    margin-bottom: 26px;
    border-bottom: 1px dashed #E8C3C3;
}
.tpsidebar__warning-item {
    text-align: center;
}
.tpsidebar__warning-icon i {
    color: #B45353;
    font-size: 20px;
}
.icon-package:before {
    content: "\f466";
    font: normal normal normal 16px/1 FontAwesome;

}
.icon-shield:before {
    content: "\f3ed";
    font: normal normal normal 16px/1 FontAwesome;
}

.tpsidebar {
    margin-left: -60px;
}

.tpsidebar__warning ul{
    padding:0;
}
.tpsidebar__warning-text p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #B45353;
    margin-bottom: 0px;
}
.tpsidebar__banner img {
    max-width: 100%;
}

.tpsidebar__product {
    background: var(--tp-common-white);
    border-radius: 10px;
    padding: 35px 30px 25px 30px;
}
.tpsidebar__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.03em;
    color: var(--tp-heading-primary);
}
.tpsidebar__product-item {
    border-bottom: 1px dashed #E6ECF0;
    margin-bottom: 15px;
    padding-bottom: 12px;
}
.tpsidebar__product-thumb img {
    max-width: 100%;
}
.tpsidebar__info {
    position: absolute;
    top: 0;
    left: 0;
}
.bage__hot {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-text-4);
    border-radius: 2px;
    color: var(--tp-theme-2);
    padding: 3px 9px;
}
.tpsidebar__product-title a{
    word-break: break-word;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--tp-heading-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.tpproduct__rating a i {
    margin-right: -5px;
    font-size: 14px;
    color: var(--tp-text-1);
}
.tpproduct__price span {
    color: var(--tp-theme-2);
    font-weight: 500;
    font-size: 18px;
}
.tpproduct__price del {
    font-weight: 400;
    font-size: 14px;
}
/* Responsive */
@media (max-width: 767.98px) {
    .tpdetails__area{
        margin-right:0;
    }
    .tpdetails__title{
        font-size:24px;
    }
    .tpdetails__brand{
        padding:0;
    }
    .product__details{
        padding-top:20px;
    }
    .product__details-quantity{
        display:block !important;
        justify-content:center;
        align-items:center;
    }
    .product__details-btn a{
        padding:13px 40px;
        margin-left:20%;
        margin-top:30px;
    }
    .tpdetails__product{
        padding: 20px 20px 16px 20px;
    }
    .tpdetails__brand li{
        padding-right:0;
        margin:0;
    }
    .tpdescription__box-center .nav-tabs .nav-link {
        margin: 0 8px 10px 8px;
        font-size: 13px;
    }
    .tpdescription__box {
        padding: 20px 20px 16px 20px;
    }
    .tpdescription__product-wrapper {
        flex-wrap: wrap;
    }
    .tpsidebar {
        margin-left: 0;
    }
    .tpsidebar__banner img{
        width:100%;
    }
}

.tpproduct-details__nab--image{
    height:430px;
    object-fit:cover;
    margin-bottom:40px;
}
</style>
