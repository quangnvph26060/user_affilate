<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';
import apiURL  from "../connect.js";
import store from '../stores/index.js';
import { defineProps,onMounted,ref, reactive } from 'vue';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf();
const API_BACK_END = apiURL.URL;
const API_BACK_END_V1 =apiURL.baseURL;
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


const haveMultiOption = (param)=>{
    if(param.includes('\\')){
        return true;
    }else{
        return false;
    }
}
const isValidOption = (option) => {
  return option && Object.keys(option).length > 0;
};

const discountPrice = (price, discount) => {
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  
  const discountedPrice = price - (price * (discount / 100));
  return discountedPrice;
};

const formatCurrency = (value) => {
  const formattedNumber = new Intl.NumberFormat('en-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
      return `${formattedNumber} VND`;
    };
    const getImageUrl = (imagePath) => {
      return `${API_BACK_END}/${imagePath}`;
    };

</script>
   <template>
      <section class="weekly-product-area whight-product" :class="fullscreen ? 'pt-75 pb-80' : 'grey-bg'">
         <div :class="{ container: !isValidOption(fullscreen) }">
            <div class="sections__wrapper white-bg pr-50 pl-50">
               <div class="row align-items-center brand-product-title-container" :class=" fullscreen ?? 'fullscreen'">
                  <div class="col-md-6 text-center">
                     <div class="tpsection mb-15">
                           <div class="tpnavtab__area tpnavtab__newitem" v-if="haveMultiOption(title)">
                              <nav>
                                 <div class="nav tp-nav-tabs" id="nav-tab" role="tablist">
                                 <button class="nav-link active" id="nav-arrivals-tab" data-bs-toggle="tab" data-bs-target="#nav-arrivals" type="button" role="tab" aria-controls="nav-arrivals" aria-selected="true">New Arrivals</button>
                                 <button class="nav-link" id="nav-features-tab" data-bs-toggle="tab" data-bs-target="#nav-features" type="button" role="tab" aria-controls="nav-features" aria-selected="false" tabindex="-1">Features</button>
                                 <button class="nav-link" id="nav-best-tab" data-bs-toggle="tab" data-bs-target="#nav-best" type="button" role="tab" aria-controls="nav-best" aria-selected="false" tabindex="-1">Best Rate</button>
                                 </div>
                              </nav>
                           </div>
                           <h4 v-else class="tpsection__title text-start brand-product-title" :class=" fullscreen ?? 'fullscreen'">{{title}}</h4>
                     </div>
                  </div>
                  <div class="col-md-6">
                     
                     <div v-if="isValidOption(option)">
                <div class="tpnavtab__area tp-navtab-style-2" v-if="haveMultiOption(option)">
                <nav>
                    <div class="nav nav-tabs" role="tablist">
                    <button class="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
                    <button class="nav-link" id="nav-meat-tab" data-bs-toggle="tab" data-bs-target="#nav-meat" type="button" role="tab" aria-controls="nav-meat" aria-selected="false" tabindex="-1">Sea Food</button>
                    <button class="nav-link" id="nav-vegetables-tab" data-bs-toggle="tab" data-bs-target="#nav-vegetables" type="button" role="tab" aria-controls="nav-vegetables" aria-selected="false" tabindex="-1">Vegetables</button>
                    <button class="nav-link" id="nav-snacks-tab" data-bs-toggle="tab" data-bs-target="#nav-snacks" type="button" role="tab" aria-controls="nav-snacks" aria-selected="false" tabindex="-1">Beans &amp; Peas</button>
                    </div>
                </nav>
                </div>
                <div class="tpproduct__all-item" v-else>
                <a href="#">Xem tất cả <i class="icon-chevron-right"></i></a>
                </div>
            </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tpnavtab__area pb-40" >
                        <div class="tpproduct__arrow p-relative container" >
                           <swiper :breakpoints="{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                              },
                            768: {
                              slidesPerView: slideOnShow,
                              spaceBetween: 20
                            }
                          }" :autoplay="true" :modules="[Autoplay]">
                            
                              <swiper-slide v-for="product in products">  
                                 <div class="tpproduct p-relative tpprogress__hover">
                                    <div class="tpproduct__thumb p-relative text-center">
                                        <a href="#"><img :src="getImageUrl(product.images[0]?.image_path)" alt=""></a>
                                        <a class="tpproduct__thumb-img"  :href="'product-details/' + product.id" ><img :src="getImageUrl(product.images[0]?.image_path)" alt=""></a>
                                        <div class="tpproduct__info bage">
                                            <span class="tpproduct__info-discount bage__discount">-50%</span>
                                            <span class="tpproduct__info-hot bage__hot">HOT</span>
                                        </div>
                                        <div class="tpproduct__shopping">
                                            <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                            <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                            <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                        </div>
                                    </div>
                                    <div class="tpproduct__content">
                                        <span class="tpproduct__content-weight">
                                            <a href="shop-details.html">{{product.brands.name}}</a>
                                        </span>
                                        <h4 class="tpproduct__title">
                                            <a href="shop-details-top-.html">{{product.name}}</a>
                                        </h4>
                                        <div class="tpproduct__rating">
                                            <a href="#"><i class="icon-star_outline1"></i></a>
                                            <a href="#"><i class="icon-star_outline1"></i></a>
                                            <a href="#"><i class="icon-star_outline1"></i></a>
                                            <a href="#"><i class="icon-star_outline1"></i></a>
                                            <a href="#"><i class="icon-star_outline1"></i></a>
                                        </div>
                                        <div class="tpproduct__price">
                                            <span class="mr-2">{{formatCurrency(discountPrice(product.price,30))}}</span> 
                                            <del>{{formatCurrency(product.price)}}</del>
                                        </div>
                                        <div class="tpproduct__progress" v-if="hasProcess">
                                            <div class="progress">
                                                <div class="progress-bar w-25" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Bán được: <b>16/{{product.quantity}}</b></span>
                                        </div>
                                    </div>
                                    <div class="tpproduct__hover-text">
                                        <div class="tpproduct__hover-btn d-flex justify-content-center mb-10" >
                                            <a class="tp-btn-2" href="#" @click.prevent="addCart(product.id)">Thêm vào giỏ</a>
                                        </div>
                                        <div class="tpproduct__descrip">
                                            <ul>
                                                <li>Loại: {{product.category.name}}</li>
                                                <li>NSX: 4 Tháng 8 năm 2021</li>
                                                <li>Hạn sử dụng: 60 ngày</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                 </swiper-slide>  
                              </swiper>
                           <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </template>
<style scoped>
.tpsection__title.true{
   font-family: var(--tp-ff-jost);
   font-style: normal;
   font-weight: 600;
   font-size: 13px;
   line-height: 19px;
   text-transform: uppercase;
   color: var(--tp-heading-primary);
   padding-left:60px;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
 }
 .brand-product-title {
    font-size: 22px;
 }
 .brand-product-title-container.true{
   margin: 0 7%;
 }
 
 .tpproduct__all-item a {
    font-size: 15px;
    font-weight: 400;
    color: var(--tp-text-3);
 }
 .tpproduct__all-item {
   
     text-align: end;
     margin-bottom: 15px;
 }
 .whight-product .tpproduct {
    border: 1px solid #EBEFF4;
 }
 
 .tpproduct {
    background-color: var(--tp-common-white);
    border-radius: 10px;
    border: 1px solid var(--tp-common-white);
 }
 .tpproduct__thumb {
    padding: 20px 20px;
    overflow: hidden;
    border-radius: 10px;
 }
 .tpproduct__thumb img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit:cover;
 }
 .tpproduct__thumb-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.2s ease-out 0s;
    -moz-transition: all 0.2s ease-out 0s;
    -ms-transition: all 0.2s ease-out 0s;
    -o-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
 }
 .tpproduct__thumb img {
    width: 100%;
 }
 .tpproduct__info {
    position: absolute;
    top: 17px;
    left: 17px;
 }
 .bage__discount {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-theme-3);
    border-radius: 2px;
    color: var(--tp-common-white);
    padding: 3px 9px;
 }
 .bage__hot {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-text-4);
    border-radius: 2px;
    color: var(--tp-theme-2);
    padding: 3px 9px;
 }
 .tpproduct__shopping {
    position: absolute;
    top: 17px;
    right: 17px;
 }
 .tpproduct__shopping a:first-child {
    transition-delay: 100ms;
 }
 
 .tpproduct__shopping a {
    opacity: 0;
    visibility: hidden;
 }
 .tpproduct__shopping a > i {
    font-size: 12px;
    height: 32px;
    width: 32px;
    line-height: 30px;
    text-align: center;
    background: var(--tp-common-white);
    border: 1px solid var(--tp-border-1);
    border-radius: 50%;
    display: block;
    margin-bottom: 5px;
 }
 .tpproduct__shopping a:nth-child(2) {
    transition-delay: 150ms;
 }
 .tpproduct__shopping a:last-child {
    transition-delay: 200ms;
 }
 .tpproduct__shopping a {
    opacity: 0;
    visibility: hidden;
 }
 .tpproduct:hover .tpproduct__thumb-img {
    opacity: 1;
    visibility: visible;
    transform: scale(1.09);
 }
 .tpproduct:hover .tpproduct__shopping a {
    opacity: 1;
    visibility: visible;
    transform: translateY(-10px);
 }
 
 .whight-product .tpproduct__content {
    background-color: var(--tp-common-white);
 }
 
 .tpproduct__content {
    background-color: var(--tp-grey-8);
    padding: 11px 22px 20px 18px;
    border-radius: 10px;
 }
 .tpproduct__content-weight {
    font-size: 13px;
    color: var(--tp-text-3);
    display: block;
 }
 .tpproduct__content a{
    color:inherit;
 }
 @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .tpproduct__title {
        font-size: 15px;
    }
 }
 
 .tpproduct__title {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    color: var(--tp-heading-primary);
    margin-bottom: 5px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-break: break-word;
    overflow: hidden;
    line-height: 1.5;
    height: 3em; 
    white-space: pre-wrap;
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
 .tpproduct__progress .progress {
    height: 7px;
    width: 100%;
 }
 .tpproduct__progress .progress-bar {
    color: #ECF0E8;
    background-color: var(--tp-heading-secondary);
 }
 .tpproduct__progress span {
    font-size: 14px;
    color: var(--tp-heading-primary);
    font-weight: 400;
 }
 .tpproduct__progress span b {
    font-weight: 500;
    color: var(--tp-heading-primary);
 }
 .tpproduct__descrip ul li {
    font-size: 13px;
    color: var(--tp-text-3);
    list-style: none;
    padding-left: 10px;
    position: relative;
 }  
 .tpproduct__descrip ul li::before {
    position: absolute;
    content: "";
    height: 3px;
    width: 3px;
    background-color: var(--tp-grey-7);
    border-radius: 50%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
 }
 .tpproduct__descrip ul{
    padding:0;
 }
 .tpproduct__hover-text {
    background-color: #FFFFFF;
    padding: 11px 21px 20px 19px;
    position: absolute;
    bottom: -125px;
    left: -1px;
    right: -1px;
    border: 1px solid var(--tp-common-white);
    border-top: transparent;
    opacity: 0;
    visibility: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #EBEFF4;
    z-index:999;
   border-top: none;
    -webkit-transition: all 0.2s ease-out 0s;
    -moz-transition: all 0.2s ease-out 0s;
    -ms-transition: all 0.2s ease-out 0s;
    -o-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
 }
 .swiper{
   overflow-y: visible;
overflow-x: clip;
 }
 .tpproduct:hover .tpproduct__hover-text {
    opacity: 1;
    visibility: visible;
  }
  .tpprogress__hover .tpproduct__hover-text {
    bottom: -110px;
 }
 .icon-heart:before {
    content: "\f004";
    font: normal normal normal 10px/1 FontAwesome;
 }
 .icon-layers:before {
    content: "\f5fd";
    font: normal normal normal 10px/1 FontAwesome;
 }
 .icon-eye:before {
    content: "\f06e";
    font: normal normal normal 10px/1 FontAwesome;
 }
 .tpproduct__shopping a > i:hover {
    background-color: var(--tp-heading-secondary);
    border: 1px solid var(--tp-heading-secondary);
    color: var(--tp-common-white);
 }
 .tpproduct__shopping a{
    color:inherit;
 }
 .tpnavtab__newitem {
    display: flex;
    align-items: flex-start;
}
.tpnavtab__area{
   position:relative;
   width:100%;
}
.tpnavtab__area nav {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}
.tpnavtab__newitem.tpnavtab__area nav .nav-link.active {
    color: var(--tp-heading-primary);
}

.tpnavtab__newitem.tpnavtab__area nav .nav-link {
    color: var(--tp-text-3);
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 0;
    background: 0 0;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 0 0;
    margin-right: 28px;
    margin-bottom: 10px;
    font-family: "Quicksand";
}
.tpnavtab__area nav .nav-link.active {
    color: var(--tp-heading-secondary);
    background-color: transparent;
    border: none;
}
.tpnavtab__area nav .nav-link {
    color: var(--tp-text-body);
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 0;
    background: 0 0;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 0 22px;
    margin-bottom: 8px;
}
.tpnavtab__area nav .nav-tabs {
    border-bottom: none;
}
.tp-navtab-style-2 {
    display: flex;
    justify-content: end;
}

/* Responsive */
@media (max-width: 767.98px) {
    .brand-product-title{
        font-size:18px;
    }
    .tpnavtab__newitem.tpnavtab__area nav .nav-link {
        font-size:18px;
        margin-right:10px;
    }
    .tpnavtab__area nav{
        margin-bottom:0;
    }
}
</style>