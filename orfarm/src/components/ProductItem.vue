<template>    
<div class="tpproduct p-relative mb-20" >
    <div class="tpproduct__thumb p-relative text-center">
                <a href="#"><img :src="getImageUrl(products.images[0]?.image_path)" alt=""></a>
                <a @click="redirectToProduct(products.id)" class="tpproduct__thumb-img">
                    <img :src="getImageUrl(products.images[0]?.image_path)" alt="">
                </a>
        <div class="tpproduct__info bage">
            <span class="tpproduct__info-discount bage__discount">-{{products.commission_rate}}%</span>
        </div>
        <div class="tpproduct__shopping">
            <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i
                    class="icon-heart icons"></i></a>
            <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
            <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
        </div>
    </div>
    <div class="tpproduct__content">
        <span class="tpproduct__content-weight">
            <a href="shop-details-3.html">{{products.brands.name}}</a>
        </span>
        <h4 class="tpproduct__title">
            <a href="shop-details-top.html">{{products.name}}</a>
        </h4>
        <div class="tpproduct__rating mb-5">
            <a href="#"><i class="icon-star_outline1"></i></a>
            <a href="#"><i class="icon-star_outline1"></i></a>
            <a href="#"><i class="icon-star_outline1"></i></a>
            <a href="#"><i class="icon-star_outline1"></i></a>
            <a href="#"><i class="icon-star_outline1"></i></a>
        </div>
        <div class="tpproduct__price">
            <span class="mr-2">{{formatCurrency(discountPrice(products.price,30))}}</span> 
            <del>{{formatCurrency(products.price)}}</del>
        </div>
    </div>
    <div class="tpproduct__hover-text">
        <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
            <a class="tp-btn-2" href="#" @click.prevent="addCart(products.id)">Thêm vào giỏ</a>
        </div>
        <div class="tpproduct__descrip">
            <ul>
                <li>Type: {{products.category.name}}</li>
                <li>MFG: August 4.2021</li>
                <li>LIFE: 60 days</li>
            </ul>
        </div>
    </div>
</div>
                      
</template>

<script setup>
import { defineProps,onMounted,ref, reactive } from 'vue';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import apiURL  from "../connect.js";
import store from '../stores/index.js';
const notyf = new Notyf();
const API_BACK_END_V1 =apiURL.baseURL;
const API_BACK_END = apiURL.URL;
const props = defineProps({
    title: {
    type: String,
    required: true,
  },
  option:{
    type:String,
  },
  fullscreen:{
   type:String,
  },
  hasProcess:{
   type:Boolean,
  },
  slideOnShow:{
   type:Number,
  },
  products:{
    type:Array,
  }
});
const redirectToProduct = (id)=>{
   return window.location.href =`/product-details/${id}`
}
const getImageUrl = (imagePath) => {
      return `${API_BACK_END}/${imagePath}`;
    };
const formatCurrency = (value) => {
   const formattedNumber = new Intl.NumberFormat('en-VN', {
   style: 'decimal',
   minimumFractionDigits: 0,
   maximumFractionDigits: 0
   }).format(value);
   return `${formattedNumber} VND`;
};
const discountPrice = (price, discount) => {
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  
  const discountedPrice = price - (price * (discount / 100));
  return discountedPrice;
};
const cart = reactive({
    product_id: '',
    amount: 1,
    user_id: store.state.auth.user.id,
})
const addCart = async (id) => {
    try {
        cart.product_id = id;
        const response = await axios.post(`${API_BACK_END_V1}cart`,cart);
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
</script>

<style scoped>
.whight-product .tpproduct:hover .tpproduct__hover-text {
    border: 1px solid #EBEFF4;
    border-top: none;
    background-color: var(--tp-common-white);
    position: absolute;
    z-index: 11;
}
@media(max-width:768px) {
    .main-mobi-option {
        justify-content: flex-start !important;
    }
}

.grey-bg {
    background: var(--tp-grey-1);
}

.custom-breadcrumb {
    background: var(--tp-grey-1);
}

.product__filter-content {
    background-color: var(--tp-common-white);
    border-radius: 10px;
    padding: 7px 20px;
}

.tp-shop-selector .nice-select {
    border: none;
}

.tp-shop-selector .nice-select .list {
    border-radius: 0;
    box-shadow: none;
    border: none;
    width: 100%;
}

.nice-select .list {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
    box-sizing: border-box;
    margin-top: 4px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(0.75) translateY(-21px);
    -ms-transform: scale(0.75) translateY(-21px);
    transform: scale(0.75) translateY(-21px);
    -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    z-index: 9;
}

.nice-select {
    -webkit-tap-highlight-color: transparent;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px #e8e8e8;
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    display: block;
    float: left;
    font-family: inherit;
    font-size: 14px;
    font-weight: normal;
    height: 42px;
    line-height: 40px;
    outline: none;
    padding-left: 18px;
    padding-right: 30px;
    position: relative;
    text-align: left !important;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto;
}

.tp-shop-selector {
    border: none;
}
</style>