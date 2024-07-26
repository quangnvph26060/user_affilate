<script setup>
import HeaderSearch from './HeaderSearch.vue'
import { ref, computed } from 'vue'
import { defineProps,onMounted, onUnmounted  } from 'vue';
import store from '../stores/index.js';
import { useRouter } from "vue-router";
import apiURL  from "../connect.js";
import Auth from '@/api/auth/index.js';
import axios from 'axios';
import { Notyf } from 'notyf';
import Cart from "../api/cart/cart.js";
import 'notyf/notyf.min.css';
import { useFormatCurrency } from "../composables/useFormatCurrency.js";
const { getToCart, responseCart, clearCartUser,delToCart } = Cart();
const notyf = new Notyf();

const URL_AFFILATE = apiURL.URL_AFFILATE;

const{logout } = Auth();
const router = useRouter();
const API_BACK_END = apiURL.URL;
const isMenuOpen = ref(false);
const props = defineProps({
  isHomePage: Boolean
});
const isCartMenuOpen = ref(false);
const isHeaderSticky = ref(false)
const isSearchBarOpened = ref(false)

const openSearchBar = () => {
  isSearchBarOpened.value = true
}

const globalStore = ref(store.state.global);

const total = computed(() => {
  let totalValue = 0;
  const cartItems = globalStore.value.cart; 

  if (cartItems && Array.isArray(cartItems)) { 
    cartItems.forEach(item => {
      totalValue += item.product.price * item.amount;
    });
  }

  return totalValue;
});


const closeSearchBar = () => {
  isSearchBarOpened.value = false
}

const toggleTopPriceSelect = () => {
  isTopPriceOpened.value = !isTopPriceOpened.value
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (window.scrollY > 400) {
    isHeaderSticky.value = true
  } else {
    isHeaderSticky.value = false
  }
}
const closeMenu = () =>{
        isCartMenuOpen.value = false;
        isMenuOpen.value = false;
        
}

const toggleCartMenu = () => {
        isCartMenuOpen.value = !isCartMenuOpen.value;
}
 
const openUserDetail = () => {
  router.push({name:'user'});
};

const getImageUrl = (imagePath) => {
      return `${API_BACK_END}/${imagePath}`;
    };


const data = ref('');
onMounted(async()=>{
  let token = localStorage.getItem('token');
  if(token){
    await getToCart();
  }
  data.value = responseCart.data;
 
})
const delProduct= async(id)=> {
	 
   try {
      await delToCart(id);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
}
  

const goToShopDetail = (id) =>{ 
  router.push({ name: 'product-details',params: { product: id } });
}

const routeForward = ($route) =>{
  router.push({ name: $route });
}
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <header>
    <div class="header__top theme-bg-1 d-none d-md-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="header__top-left">
              <span
                >Do đợt dịch bệnh <strong>COVID-19</strong>, đơn hàng có thể được xử lý chậm hơn
                một chút.</span
              >
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="header__top-right d-flex align-items-center">
              <div class="header__top-link">
                <a :href="URL_AFFILATE">Tham gia công tác viên</a>
                <a href="#">Theo dõi đơn hàng</a>
                <a href="faq.html">FAQs</a>
              </div> 
              <div class="header__logout">
                <form @submit.prevent="logout">
                  
                  <button type="submit" class="header__logout-button"> Đăng xuất <i class="fa-solid fa-right-from-bracket header__logout-icon"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Header Menu-->
    <div id="header-sticky" class="header__main-area three d-none d-xl-block">
      <div class="container">
        <div class="header__for-megamenu p-relative" v-if='isHomePage'>
          <div class="row align-items-center header-logo-border">
                     <div class="col-xl-4">
                        <div class="header-three__search">
                           <form action="#">
                              <input type="email" placeholder="Search products...">
                              <i class="icon-search"></i>
                           </form>
                        </div>
                     </div>
                     <div class="col-xl-4">
                        <div class="header__logo text-center">
                           <a href="/"><img src="../assets/img/logo/logo.png" alt="logo"></a>
                        </div>
                     </div>
                     <div class="col-xl-4">
                        <div class="header__info d-flex align-items-center justify-content-end">
                           <div class="header__info-search tpcolor__purple ml-10">
                              <button class="tp-search-toggle"  @click="openSearchBar" ><i class="icon-search"></i></button>
                           </div>
                           <div class="header__info-user tpcolor__yellow ml-10" >
                              <a href="/user"><i class="icon-user"></i></a>
                           </div>
                           <div class="header__info-wishlist tpcolor__greenish ml-10">
                              <a href="#"><i class="icon-heart icons"></i></a>
                           </div>
                           <div class="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle" @click='toggleCartMenu'>
                              <button><i><img src="../assets/img/icon/cart-1.svg" alt=""></i>
                                 <span>{{responseCart.data.length ?? '0'}}</span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row justify-content-center" :class="{ 'header-sticky': isHeaderSticky }">  
                     <div class="col-xxl-6 col-xl-8">
              <div class="header__menu main-menu three text-center">
                <nav id="mobile-menu" style="display: block" >
                  <ul>
                    <li class="has-dropdown has-homemenu">
                      <a href="/">Trang chủ <i class="fa fa-chevron-down icon"></i></a>
                      <ul class="sub-menu home-menu-style">
                        <li>
                          <a href="/"
                            ><img src="../assets/img/header/home1-1.jpg" alt="" /> Trang chủ V1</a
                          >
                        </li>
                        <li>
                          <a href="/"
                            ><img src="../assets/img/header/home2-1.jpg" alt="" /> Trang chủ V2</a
                          >
                        </li>
                        <li>
                          <a href="/"
                            ><img src="../assets/img/header/home3-1.jpg" alt="" /> Trang chủ V3</a
                          >
                        </li>
                        <li>
                          <a href="index-4.html"
                            ><img src="../assets/img/header/home4-1.jpg" alt="" /> Trang chủ V4</a
                          >
                        </li>
                        <li>
                          <a href="index-5.html"
                            ><img src="../assets/img/header/home5-1.jpg" alt="" /> Trang chủ V5</a
                          >
                        </li>
                        <li>
                          <a href="index-6.html"
                            ><img src="../assets/img/header/home6-1.jpg" alt="" /> Trang chủ V6</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown has-megamenu">
                      <a href="course-grid.html"
                        >Cửa hàng <i class="fa fa-chevron-down icon"></i
                      ></a>
                      <ul
                        class="sub-menu mega-menu"
                        data-background="../assets/img/banner/mega-menu-shop-1.jpg"
                        style="background-image: url('../assets/img/banner/mega-menu-shop-1.jpg')"
                      >
                        <li>
                          <a class="mega-menu-title">Bố cục cửa hàng</a>
                          <ul>
                            <li><a href="shop-left-sidebar.html">Cửa hàng có Banner </a></li>
                            <li><a href="shop-3.html">Cửa hàng không Banner</a></li>
                            <li><a href="shop-2.html">Phiên bản Cửa hàng</a></li>
                            <li>
                              <a href="shop-left-sidebar.html">Thanh bên trái của cửa hàng</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">Thanh bên phải của cửa hàng</a>
                            </li>
                            <li><a href="shop-list-view.html">Chế độ xem danh sách cửa hàng</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Bố cục sản phẩm</a>
                          <ul>
                            <li><a href="shop-details-3.html">Cuộn ảnh</a></li>
                            <li><a href="shop-details-grid.html">Lưới sản phẩm</a></li>
                            <li><a href="shop-details-top.html">Sản phẩm có đầu ngón tay</a></li>
                            <li><a href="shop-details.html">Sản phẩm dưới đáy</a></li>
                            <li><a href="shop-details-4.html">Sản phẩm đơn giản</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Loại sản phẩm</a>
                          <ul>
                            <li><a href="shop-details.html">Sản phẩm đơn giản</a></li>
                            <li><a href="shop-details-grid.html">Nhóm sản phẩm</a></li>
                            <li><a href="shop-details-3.html">Sản phẩm biến thể</a></li>
                            <li><a href="shop-details-3.html">Đặc biệt</a></li>
                            <li><a href="shop-details-4.html">Trang trí</a></li>
                            <li><a href="shop-details-top.html">Xây dựng</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Danh mục sản phẩm</a>
                          <ul>
                            <li><a href="shop-details.html">Bánh ngọt tươi</a></li>
                            <li><a href="shop-details-3.html">Trái cây tươi</a></li>
                            <li><a href="shop-details-4.html">Thịt tươi</a></li>
                            <li><a href="shop-details.html">Nước trái cây</a></li>
                            <li><a href="shop-details.html">Bánh quy snack</a></li>
                            <li><a href="shop-details-grid.html">Bánh quy snack</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="blog.html">Blog <i class="fa fa-chevron-down icon"></i></a>
                      <ul class="sub-menu">
                        <li><a href="blog.html">Hình ảnh lớn</a></li>
                        <li><a href="blog-right-sidebar.html">Thanh bên phải</a></li>
                        <li><a href="blog-left-sidebar.html">Thanh bên trái</a></li>
                        <li><a href="blog-details.html">Bài đăng duy nhất</a></li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="about.html">Trang <i class="fa fa-chevron-down icon"></i></a>
                      <ul class="sub-menu">
                        <li><a href="shop-location.html">Địa điểm cửa hàng một</a></li>
                        <li><a href="shop-location-2.html">Địa điểm cửa hàng hai</a></li>
                        <li><a href="faq.html">Câu hỏi thường gặp</a></li>
                        <li><a href="checkout.html">Thanh toán</a></li>
                        <li><a href="cart.html">Trang giỏ hàng</a></li>
                        <li><a href="wishlist.html">Danh sách mong muốn</a></li>
                        <li><a href="log-in.html">Đăng nhập</a></li>
                        <li><a href="comming-soon.html">Sắp tới</a></li>
                        <li><a href="404.html">Trang 404</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">Thông tin</a></li>
                    <li><a href="contact.html">Liên hệ</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          </div>
          <div class="header__for-megamenu p-relative" v-else>
          <div class="row align-items-center" :class="{ 'header-sticky': isHeaderSticky }">
            <div class="col-xl-3">
              <div class="header__logo">
                <a href="/"><img src="../assets/img/logo/logo.png" alt="logo" /></a>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="header__menu main-menu text-center">
                <nav id="mobile-menu" style="display: block">
                  <ul>
                    <li class="has-dropdown has-homemenu">
                      <a href="/">Trang chủ <i class="fa fa-chevron-down icon"></i></a>
                      <ul class="sub-menu home-menu-style">
                        <li>
                          <a href="/"
                            ><img src="../assets/img/header/home1-1.jpg" alt="" /> Trang chủ V1</a
                          >
                        </li>
                        <li>
                          <a href="index-2.html"
                            ><img src="../assets/img/header/home2-1.jpg" alt="" /> Trang chủ V2</a
                          >
                        </li>
                        <li>
                          <a href="index-3.html"
                            ><img src="../assets/img/header/home3-1.jpg" alt="" /> Trang chủ V3</a
                          >
                        </li>
                        <li>
                          <a href="index-4.html"
                            ><img src="../assets/img/header/home4-1.jpg" alt="" /> Trang chủ V4</a
                          >
                        </li>
                        <li>
                          <a href="index-5.html"
                            ><img src="../assets/img/header/home5-1.jpg" alt="" /> Trang chủ V5</a
                          >
                        </li>
                        <li>
                          <a href="index-6.html"
                            ><img src="../assets/img/header/home6-1.jpg" alt="" /> Trang chủ V6</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown has-megamenu">
                      <a href="course-grid.html"
                        >Cửa hàng <i class="fa fa-chevron-down icon"></i
                      ></a>
                      <ul
                        class="sub-menu mega-menu"
                        data-background="../assets/img/banner/mega-menu-shop-1.jpg"
                        style="background-image: url('../assets/img/banner/mega-menu-shop-1.jpg')"
                      >
                        <li>
                          <a class="mega-menu-title">Bố cục cửa hàng</a>
                          <ul>
                            <li><a href="shop-left-sidebar.html">Cửa hàng có Banner </a></li>
                            <li><a href="shop-3.html">Cửa hàng không Banner</a></li>
                            <li><a href="shop-2.html">Phiên bản Cửa hàng</a></li>
                            <li>
                              <a href="shop-left-sidebar.html">Thanh bên trái của cửa hàng</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">Thanh bên phải của cửa hàng</a>
                            </li>
                            <li><a href="shop-list-view.html">Chế độ xem danh sách cửa hàng</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Bố cục sản phẩm</a>
                          <ul>
                            <li><a href="shop-details-3.html">Cuộn ảnh</a></li>
                            <li><a href="shop-details-grid.html">Lưới sản phẩm</a></li>
                            <li><a href="shop-details-top.html">Sản phẩm có đầu ngón tay</a></li>
                            <li><a href="shop-details.html">Sản phẩm dưới đáy</a></li>
                            <li><a href="shop-details-4.html">Sản phẩm đơn giản</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Loại sản phẩm</a>
                          <ul>
                            <li><a href="shop-details.html">Sản phẩm đơn giản</a></li>
                            <li><a href="shop-details-grid.html">Nhóm sản phẩm</a></li>
                            <li><a href="shop-details-3.html">Sản phẩm biến thể</a></li>
                            <li><a href="shop-details-3.html">Đặc biệt</a></li>
                            <li><a href="shop-details-4.html">Trang trí</a></li>
                            <li><a href="shop-details-top.html">Xây dựng</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Danh mục sản phẩm</a>
                          <ul>
                            <li><a href="shop-details.html">Bánh ngọt tươi</a></li>
                            <li><a href="shop-details-3.html">Trái cây tươi</a></li>
                            <li><a href="shop-details-4.html">Thịt tươi</a></li>
                            <li><a href="shop-details.html">Nước trái cây</a></li>
                            <li><a href="shop-details.html">Bánh quy snack</a></li>
                            <li><a href="shop-details-grid.html">Bánh quy snack</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="blog.html">Blog <i class="fa fa-chevron-down icon"></i></a>
                      <ul class="sub-menu">
                        <li><a href="blog.html">Hình ảnh lớn</a></li>
                        <li><a href="blog-right-sidebar.html">Thanh bên phải</a></li>
                        <li><a href="blog-left-sidebar.html">Thanh bên trái</a></li>
                        <li><a href="blog-details.html">Bài đăng duy nhất</a></li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="about.html">Trang <i class="fa fa-chevron-down icon"></i></a>
                      <ul class="sub-menu">
                        <li><a href="shop-location.html">Địa điểm cửa hàng một</a></li>
                        <li><a href="shop-location-2.html">Địa điểm cửa hàng hai</a></li>
                        <li><a href="faq.html">Câu hỏi thường gặp</a></li>
                        <li><a href="checkout.html">Thanh toán</a></li>
                        <li><a href="cart.html">Trang giỏ hàng</a></li>
                        <li><a href="wishlist.html">Danh sách mong muốn</a></li>
                        <li><a href="log-in.html">Đăng nhập</a></li>
                        <li><a href="comming-soon.html">Sắp tới</a></li>
                        <li><a href="404.html">Trang 404</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">Thông tin</a></li>
                    <li><a href="contact.html">Liên hệ</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="header__info d-flex align-items-center ">
                <div class="header__info-search tpcolor__purple ml-10">
                  <button class="tp-search-toggle" @click="openSearchBar">
                    <i class="icon-search"></i>
                  </button>
                </div>  
               
                <div class="header__info-user tpcolor__yellow ml-10" >
                  <a href="/user"><i class="icon-user"></i></a>
                </div>
                <div class="header__info-wishlist tpcolor__greenish ml-10">
                  <a href="wishlist.html"><i class="icon-heart icons"></i></a>
                </div>
                <div class="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle"  @click='toggleCartMenu'>
                  <button class="header__info-button">
                    <i><img src="../assets/img/icon/cart-1.svg" alt="" /></i>
                    <span >{{responseCart.data.length ?? '0'}}</span>
                  </button>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
    <HeaderSearch :isSearchBarOpened="isSearchBarOpened" @closeSearchBar="closeSearchBar" />
  <div class="body-overlay" :class="{'opened': isCartMenuOpen}" @click="closeMenu"></div>

 <div class="tpcartinfo tp-cart-info-area p-relative" :class="{'tp-sidebar-opened':isCartMenuOpen}">
    <button class="tpcart__close" @click="toggleCartMenu"><i class="icon-x"></i></button>
       <div class="tpcart">
          <h4 class="tpcart__title">Giỏ Hàng của bạn</h4>
          <div class="tpcart__product">
             <div class="tpcart__product-list">
              <ul v-if="responseCart.data.length > 0">
                <li v-for="item in responseCart.data" :key="item.id">
                  <div class="tpcart__item">
                    <div class="tpcart__img">
                      <img :src="getImageUrl(item.product.images[0].image_path)" alt="" />
                    </div>
                    <div class="tpcart__content">
                      <span class="tpcart__content-title">
                        <a :href="`/product-details/`+item.product_id"  >{{ item.product.name }}</a>
                      </span>
                      <div class="tpcart__cart-price">
                        <span class="quantity">{{ item.amount }} x </span>
                        <span class="new-price">{{ useFormatCurrency(item.product.price) }}</span>
                      </div>
                      <div class="tpcart__del">
                        <a href="#" @click.prevent='delProduct(item.id)'><i class="icon-x-circle"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
             </div>
             <div class="tpcart__checkout">
                <div class="tpcart__total-price d-flex justify-content-between align-items-center">
                   <span> Tổng Tiền:</span>
                   <span class="heilight-price"> {{ useFormatCurrency(responseCart.total) }}</span>
                </div>
                <div class="tpcart__checkout-btn">
                   <a class="tpcart-btn mb-10" href="#" @click.prevent="routeForward('cart')" >Xem Giỏ Hàng</a>
                   <a class="tpcheck-btn" href="#" @click.prevent="routeForward('checkout')">Thanh Toán</a>
                </div>
             </div>
          </div>
          <div class="tpcart__free-shipping text-center">
             <span>Miễn phí ship với đơn hàng <b>dưới 10km</b></span>
          </div>
       </div>
    </div>

  </header>
</template>

<style scoped>
.header__main-area {
    border: 1px solid #E6EAF0;
}
.header-sticky {
    position: fixed;
    left: 0;
    margin: auto;
    top: 0;
    width: 100%;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.07);
    z-index: 99999;
    animation: 300ms ease-in-out 0s normal none 1 running fadeInDown;
    background: var(--tp-common-white);
}

.header-logo-border {
    padding: 30px 0;
    border-bottom: 1px solid var(--tp-border-1);
}
.header__top-left span {
  color: var(--tp-common-white);
  font-size: 13px;
}

.header__top-left span strong {
  font-weight: 400;
  color: var(--tp-text-1);
  font-size: 13px;
}
.header__top-right {
  justify-content: end;
}
.header__top-link a {
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 13px;
  margin-left: 14px;
  cursor: pointer;
}
.header__top-link a:hover {
  color: var(--tp-heading-secondary);
}


.main-menu ul li.has-homemenu {
  position: static;
}

.main-menu ul{
  padding-left:0;
}
.main-menu ul li {
  position: relative;
  display: inline-block;
  line-height: 1;
  list-style: none;
}

.main-menu ul li.has-dropdown > a {
  position: relative;
  padding: 32px 20px 32px 12px;
}
.main-menu ul li.has-dropdown > a > .icon {
  position: absolute;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  padding: 0 0 0 5px;
}

.main-menu ul li:hover.has-dropdown a::after {
  color: var(--tp-heading-secondary);
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-menu ul li a {
    padding: 32px 10px;
  }
}
.main-menu ul li a {
  color: inherit;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  padding: 32px 20px;
}

.main-menu ul li.has-dropdown > a::after {
  font-size: 14px;
  color: var(--tp-common-black);
  font-family: 'icon-dukamarket';
  font-weight: 400;
  margin-left: 6px;
  display: inline-block;
  font-weight: var(--tp-fw-bold);
}

.main-menu ul li.has-dropdown:hover .sub-menu {
  justify-content:center;
  visibility: visible;
  opacity: 1;
  top: 100%;
}
.main-menu ul li .home-menu-style {
  display: flex;
  width: 100%;
}
.main-menu ul li .sub-menu {
  position: absolute;
  top: 120%;
  left: 0;
  min-width: 270px;
  padding: 30px 0;
  background-color: var(--tp-common-white);
  z-index: 2;
  transition:
    opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    visibility 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 8px 20px rgba(61, 110, 168, 0.1);
  border-radius: 0px 0px 10px 10px;
  border-top: 2px solid var(--tp-heading-secondary);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.main-menu ul li .home-menu-style li a {
  text-align: center;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.main-menu ul li .sub-menu > li > a {
  display: block;
  font-family: var(--font-body);
  text-transform: none;
  padding: 10px 0;
  padding-left: 0px;
  color: #334763;
  font-size: var(--menu-font-size);
  font-weight: normal;
  white-space: normal;
  word-wrap: break-word;
  word-break: normal;
  transition: 0.3s;
  line-height: 131%;
  text-align: left;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.main-menu ul li .home-menu-style li a:hover {
  padding-left: 0px;
  transform: scale(0.92);
}

.main-menu ul li .sub-menu > li > a:hover {
  color: var(--tp-heading-secondary);
  padding-left: 8px;
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-menu ul li a {
    padding: 32px 10px;
  }
}
.main-menu ul li a {
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  padding: 32px 20px;
}
.main-menu ul li .home-menu-style li a img {
  border: 1px solid rgba(222, 226, 230, 0.5607843137);
  border-radius: 10px;
  width: 100%;
  display: block;
  margin-bottom: 25px;
}

.main-menu ul li.has-megamenu {
  position: static;
}

.main-menu ul li {
  position: relative;
  display: inline-block;
  line-height: 1;
  list-style: none;
}

.main-menu ul li a:hover {
  color: var(--tp-heading-secondary);
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
  .main-menu ul li .home-menu-style li {
    width: 220px;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-menu ul li .home-menu-style li {
    width: 175px;
  }
}

.main-menu ul li .home-menu-style li {
  display: inline-block;
  padding: 0 10px;
  width: 230px;
}
.main-menu ul li .sub-menu > li {
  margin: 0;
  list-style: none;
  display: block;
}

.main-menu ul li:nth-of-type(3) .sub-menu,
.main-menu ul li:nth-of-type(4) .sub-menu {
  padding: 0 20px 0 40px;
}

.main-menu ul li .home-menu-style li a img {
  border: 1px solid rgba(222, 226, 230, 0.5607843137);
  border-radius: 10px;
  width: 100%;
  display: block;
  margin-bottom: 25px;
}

.main-menu ul li .mega-menu {
  padding: 35px 40px 26px 40px;
  position: absolute;
  top: 120%;
  width: 1200px;
  background-color: var(--tp-common-white);
  left: 0;
  right: 0;
  z-index: 9999;
  transform-origin: top;
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  margin: 0 auto;
  box-shadow: 0px 8px 20px rgba(61, 110, 168, 0.1);
  border-radius: 0px 0px 10px 10px;
  border-top: 2px solid var(--tp-heading-secondary);
}

.main-menu ul li.has-megamenu {
  position: static;
}

.main-menu ul li .mega-menu li .mega-menu-title {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  position: relative;
  text-transform: uppercase;
  color: var(--tp-heading-secondary);
  font-family: 'Jost', sans-serif;
  margin-bottom: 10px;
}

.main-menu ul li .mega-menu li ul li {
  padding-left: 0;
  text-align: left;
}

.main-menu ul li .mega-menu li {
  width: 260px;
  text-align: left;
  padding-left: 0;
  padding-right: 0;
}
.main-menu ul li .mega-menu li ul {
  padding-left: 0;
  text-align: left;
}
.main-menu ul li .mega-menu li ul li a {
  position: relative;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  color: var(--tp-text-body);
  text-transform: capitalize;
  text-align: start;
  margin: 0;
  padding-left: 0;
}
.main-menu ul li .mega-menu li ul li a:hover {
  color: var(--tp-heading-secondary);
  padding-left: 8px;
}

#mobile-menu > ul {
  margin-bottom: 0;
}

.header__info a i,
.header__info button i {
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-color: var(--tp-grey-3);
  text-align: center;
  line-height: 40px;
  color: var(--tp-theme-1);
  display: block;
}
.header-three__search form {
    position: relative;
}
.header-three__search form input {
    height: 40px;
    width: 260px;
    border-radius: 30px;
    border: none;
    background-color: #F4F4F4;
    display: block;
    padding: 5px 20px 5px 45px;
}
.header-three__search form i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    margin-right: 8px;
    font-size: 16px;
    color: var(--tp-common-black);
}
.icon-search:before {
  content: '\f002';
  font: normal normal normal 14px/1 FontAwesome;
}

.icon-user:before {
  font: normal normal normal 14px/1 FontAwesome;
  content: '\f007';
}

.icon-heart:before {
  font: normal normal normal 14px/1 FontAwesome;
  content: '\f004';
}
.fa-chevron-down:before  {
    content: "\f107";
    font: normal normal normal 16px/1 FontAwesome;
}
.tpcolor__yellow a i,
.tpcolor__greenish a i,
.tpcolor__oasis button i {
  background-color: var(--tp-grey-4);
}

.tpcolor__greenish a i {
  background-color: var(--tp-grey-5);
}

.tpcolor__oasis button i {
  background-color: var(--tp-grey-6);
}

.header__info {
  justify-content: end;
}

.header__info-button {
  position: relative;
}
.header__info-cart{
  position:relative;
}

.header__info-cart span {
  position: absolute;
  font-size: 11px;
  background-color: red;
  color: var(--tp-common-white);
  height: 18px;
  width: 18px;
  text-align: center;
  line-height: 18px;
  display: block;
  border-radius: 50px;
  top: 0px;
  right: -3px;
}
.main-menu.three ul li a {
  padding: 22px 20px;
}

.header__logout-button {
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 14px;
  margin-left: 14px;
  cursor: pointer;
  padding:10px 15px;
}

.header__logout-button:hover {
  color: var(--tp-heading-secondary);
}
.header__logout-icon:before  {
  padding-left:5px;
  content: "\f2f5";
  font: normal normal normal 14px/1 FontAwesome;
}
.tpcart__del{
  position:absolute;
  top:15px;
  right:-5px;
}
.tpcart__product-list ul li {
  position:relative;
}
</style>
