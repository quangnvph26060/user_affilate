<script setup>
import { reactive, ref, onUnmounted, onMounted, computed} from 'vue';
import store from '../stores/index.js';
import { useRouter } from "vue-router";
import apiURL  from "../connect.js";
import Auth from '@/api/auth/index.js';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf();
const API_BACK_END_V1 =apiURL.baseURL;
const{logout } = Auth();
const router = useRouter();
const API_BACK_END = apiURL.URL;

const isMenuOpen = ref(false);
const isCartMenuOpen = ref(false);
const isHeaderSticky = ref(false);
const globalStore = ref(store.state.global);
const menuState = reactive({
      home: false,
      shop: false,
      blog: false,
      pages: false,
    });

    const toggleMenu = (menu) => {
        menuState[menu] = !menuState[menu];
    };

    const toggleMainMenu = () =>{
        isMenuOpen.value = !isMenuOpen.value;
    }
    const toggleCartMenu = () => {
        isCartMenuOpen.value = !isCartMenuOpen.value;
    }
    
    const closeMenu = () =>{
        isCartMenuOpen.value = false;
        isMenuOpen.value = false;
        
    }

 const handleScroll = () => {
  if (window.scrollY > 400) {
    isHeaderSticky.value = true
  } else {
    isHeaderSticky.value = false
  }
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

const deleteCart = async (id) => {
    try {
        const response = await axios.delete(`${API_BACK_END_V1}cart/${id}`);
        if (response.data.status === 'success') {
            store.dispatch('getCart');
            await  notyf.success({
					message: 'Đã xóa sản phẩm khỏi giỏ hàng!',
					duration: 2000,
					position: {
						x: 'left',
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


const routeForward = ($route) =>{
  router.push({ name: $route });
  closeMenu();
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
<template>
  
    <div id="header-sticky-2" class="tpmobile-menu d-xl-none" :class="{ 'header-sticky': isHeaderSticky }">
        <div class="container-fluid">
           <div class="row align-items-center" >
              <div class="col-lg-4 col-md-4 col-3 col-sm-3">
                 <div class="mobile-menu-icon">
                    <button class="tp-menu-toggle" @click='toggleMainMenu'><i class="icon-menu1"></i></button>
                 </div>
              </div>
              <div class="col-lg-4 col-md-4 col-6 col-sm-4">
                 <div class="header__logo text-center">
                    <a href="/"><img src="../assets/img/logo/logo.png" alt="logo"></a>
                 </div>
              </div>
              <div class="col-lg-4 col-md-4 col-3 col-sm-5">
                 <div class="header__info d-flex align-items-end">
                    <div class="header__info-search tpcolor__purple ml-10 d-none d-sm-block">
                       <button class="tp-search-toggle"><i class="icon-search"></i></button>
                    </div>
                    <div class="header__info-user tpcolor__yellow ml-10 d-none d-sm-block" @click="openUserDetail">
                       <a href="log-in.html"><i class="icon-user"></i></a>
                    </div>
                    <div class="header__info-wishlist tpcolor__greenish ml-10 d-none d-sm-block">
                       <a href="wishlist.html"><i class="icon-heart icons"></i></a>
                    </div>
                    <div class="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle" @click='toggleCartMenu'>
                       <button><i><img src="../assets/img/icon/cart-1.svg" alt=""></i>
                          <span>{{store.state?.global?.cart?.length??'0'}}</span>
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>

 <div class="body-overlay" :class="{'opened':isMenuOpen || isCartMenuOpen}" @click="closeMenu"></div>

 <div class="tpcartinfo tp-cart-info-area p-relative" :class="{'tp-sidebar-opened':isCartMenuOpen}">
    <button class="tpcart__close" @click="toggleCartMenu"><i class="icon-x"></i></button>
       <div class="tpcart">
          <h4 class="tpcart__title">Giỏ Hàng của bạn</h4>
          <div class="tpcart__product">
             <div class="tpcart__product-list">
                <ul>
                   <li v-for="item in store.state.global.cart" :key="item.id">
                      <div class="tpcart__item" >
                         <div class="tpcart__img">
                            <img :src="getImageUrl(item.product.images[0].image_path)" alt="">
                         </div>
                         <div class="tpcart__content">
                            <span class="tpcart__content-title"> <a :href="`/product-details/`+item.product_id" >{{ item.product.name }}</a>
                            </span>
                            <div class="tpcart__cart-price">
                                <span class="quantity">{{ item.amount }} x </span>
                                <span class="new-price">{{ formatCurrency(item.product.price) }}</span>
                            </div>
                            <div class="tpcart__del-item">
                                <a href="#" @click.prevent='deleteCart(item.id)'><i class="icon-x-circle"></i></a>
                            </div>
                         </div>
                      </div>
                   </li>
                </ul>
             </div>
             <div class="tpcart__checkout">
                <div class="tpcart__total-price d-flex justify-content-between align-items-center">
                   <span> Tổng Tiền:</span>
                   <span class="heilight-price">{{formatCurrency(total)}}</span>
                </div>
                <div class="tpcart__checkout-btn">
                   <a class="tpcart-btn mb-10" href="#" @click.prevent="routeForward('cart')">Xem Giỏ Hàng</a>
                   <a class="tpcheck-btn" href="#" @click.prevent="routeForward('checkout')">Thanh Toán</a>
                </div>
             </div>
          </div>
          <div class="tpcart__free-shipping text-center">
             <span>Miễn phí ship với đơn hàng <b>dưới 10km</b></span>
          </div>
       </div>
    </div>


    <div class="tpsideinfo " :class="{'tp-sidebar-opened':isMenuOpen}">
        <button class="tpsideinfo__close" @click="toggleMainMenu">Close<i class="fal fa-times ml-10"></i></button>
        <div class="tpsideinfo__search text-center pt-35">
           <span class="tpsideinfo__search-title mb-20">What Are You Looking For?</span>
           <form action="#">
              <input type="text" placeholder="Search Products...">
              <button class="search-button"><i class="icon-search" ></i></button>
           </form>
        </div>
        <div class="tpsideinfo__nabtab">
           <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Menu</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" tabindex="-1">Categories</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                 <div class="mobile-menu mean-container"><div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="right: 0px; left: auto; display: inline;"><span><span><span></span></span></span></a><nav class="mean-nav">
                          <ul>
                             <li class="has-dropdown has-homemenu">
                                <a href="index.html">Home</a>
                                <a class="mean-expand" href="#" style="font-size: 18px"  @click="toggleMenu('home')"><i class="fal fa-plus"></i></a>
                                <ul class="sub-menu phone_menu home-menu-style" :class="{'menu_height':menuState.home}">
                                   <li>
                                      <a href="index.html"><img src="../assets/img//header/home1-1.jpg" alt=""> Home Page V1</a>
                                   </li>
                                   <li>
                                      <a href="index-2.html"><img src="../assets/img//header/home2-1.jpg" alt=""> Home Page V2</a>
                                   </li>
                                   <li>
                                      <a href="index-3.html"><img src="../assets/img//header/home3-1.jpg" alt=""> Home Page V3</a>
                                   </li>
                                   <li>
                                      <a href="index-4.html"><img src="../assets/img//header/home4-1.jpg" alt=""> Home Page V4</a>
                                   </li>
                                   <li>
                                      <a href="index-5.html"><img src="../assets/img//header/home5-1.jpg" alt=""> Home Page V5</a>
                                   </li>
                                   <li>
                                      <a href="index-6.html"><img src="../assets/img//header/home6-1.jpg" alt=""> Home Page V6</a>
                                   </li>
                                </ul>
                            
                            </li>
                             <li class="has-dropdown has-megamenu">
                                <a href="course-grid.html">Shop</a>
                                <a class="mean-expand" href="#" style="font-size: 18px"   @click="toggleMenu('shop')"><i class="fal fa-plus"></i></a></li>
                                <ul class="sub-menu phone_menu mega-menu" :class="{'menu_height':menuState.shop}" data-background="../assets/img/banner/mega-menu-shop-1.jpg" style="background-image: url(&quot;../assets/img/banner/mega-menu-shop-1.jpg&quot;);" >
                                   <li>
                                      <a class="mega-menu-title">Shop layout</a>
                                      <a class="mean-expand" href="#" style="font-size: 18px"><i class="fal fa-plus"></i></a></li>
                                      <ul style="display: none;">
                                         <li><a href="shop-left-sidebar.html">Shop With Banner </a></li>
                                         <li><a href="shop-3.html">Shop Without Banner</a></li>
                                         <li><a href="shop-2.html">Shop Version</a></li>
                                         <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                         <li><a href="shop-right-sidebar.html">Shop Right sidebar</a></li>
                                         <li><a href="shop-list-view.html">Shop List view</a></li>
                                      </ul>
                                 
                                   <li>
                                      <a class="mega-menu-title">Product layout</a>
                                      <a class="mean-expand" href="#" style="font-size: 18px"><i class="fal fa-plus"></i></a></li>
                                      <ul style="display: none;">
                                         <li><a href="shop-details-3.html">Image scroll</a></li>
                                         <li><a href="shop-details-grid.html">Product grid</a></li>
                                         <li><a href="shop-details-top.html">Top Thumb Product</a></li>
                                         <li><a href="shop-details.html">Bottom Thumb Product</a></li>
                                         <li><a href="shop-details-4.html">Simple Product</a></li>
                                      </ul>
                                 
                                   <li>
                                      <a class="mega-menu-title">Product type</a>
                                      <a class="mean-expand" href="#" style="font-size: 18px"><i class="fal fa-plus"></i></a></li>
                                      <ul style="display: none;">
                                         <li><a href="shop-details.html">Products Simple</a></li>
                                         <li><a href="shop-details-grid.html">Products Group</a></li>
                                         <li><a href="shop-details-3.html">Products Variable</a></li>
                                         <li><a href="shop-details-3.html">Special</a></li>
                                         <li><a href="shop-details-4.html">Decoration</a></li>
                                         <li><a href="shop-details-top.html">Contruction</a></li>
                                      </ul>
                                   
                                   <li>
                                      <a class="mega-menu-title">Product category</a>
                                      <a class="mean-expand" href="#" style="font-size: 18px"><i class="fal fa-plus"></i></a></li>
                                      <ul style="display: none;">
                                         <li><a href="shop-details.html">Fresh bakery</a></li>
                                         <li><a href="shop-details-3.html">Fresh fruits</a></li>
                                         <li><a href="shop-details-4.html">Fresh meat</a></li>
                                         <li><a href="shop-details.html">Fruit drink</a></li>
                                         <li><a href="shop-details.html">Fresh bakery</a></li>
                                         <li><a href="shop-details-grid.html">Biscuits snack</a></li>
                                      </ul>
                               
                                </ul>
                            
                             <li class="has-dropdown">
                                <a href="blog.html">Blog</a>
                                <a class="mean-expand" href="#" style="font-size: 18px" @click="toggleMenu('blog')"><i class="fal fa-plus"></i></a></li>
                                <ul class="sub-menu phone_menu" :class="{'menu_height':menuState.blog}">
                                   <li><a href="blog.html">Big image</a></li>
                                   <li><a href="blog-right-sidebar.html">Right sidebar</a></li>
                                   <li><a href="blog-left-sidebar.html">Left sidebar</a></li>
                                   <li><a href="blog-details.html">Single Post</a></li>
                                </ul>
                          
                             <li class="has-dropdown">
                                <a href="about.html">Pages</a>
                                <a class="mean-expand" href="#" style="font-size: 18px" @click="toggleMenu('pages')"><i class="fal fa-plus"></i></a></li>
                                <ul class="sub-menu phone_menu" :class="{'menu_height':menuState.pages}">
                                   <li><a href="shop-location.html">Shop Location One</a></li>
                                   <li><a href="shop-location-2.html">Shop Location Two</a></li>
                                   <li><a href="faq.html">FAQs</a></li>
                                   <li><a href="checkout.html">Checkout</a></li>
                                   <li><a href="cart.html">Cart Page</a></li>
                                   <li><a href="wishlist.html">Wishlist</a></li>
                                   <li><a href="log-in.html">Sign In</a></li>
                                   <li><a href="comming-soon.html">Coming soon</a></li>
                                   <li><a href="404.html">Page 404</a></li>
                                </ul>
                             
                             <li><a href="about.html">About Us</a></li>
                             <li class="mean-last"><a href="contact.html">Contact Us</a></li>
                          </ul>
                       </nav></div></div>
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                 <div class="tpsidebar-categories">
                    <ul>
                       <li><a href="shop-details.html">Dairy Farm</a></li>
                       <li><a href="shop-details.html">Healthy Foods</a></li>
                       <li><a href="shop-details.html">Lifestyle</a></li>
                       <li><a href="shop-details.html">Organics</a></li>
                       <li><a href="shop-details.html">Photography</a></li>
                       <li><a href="shop-details.html">Shopping</a></li>
                       <li><a href="shop-details.html">Tips &amp; Tricks</a></li>
                    </ul>
                 </div>
              </div>
            </div>
        </div>
        <div class="tpsideinfo__account-link">							
           <a href="log-in.html"><i class="icon-user icons"></i> Login / Register</a>
        </div>
        <div class="tpsideinfo__wishlist-link"> 
           <a href="wishlist.html" target="_parent"><i class="icon-heart"></i> Wishlist</a>
        </div>
     </div>
</template>
<style>
.tpmobile-menu {
    padding: 20px 0;
    border-bottom: 1px solid var(--tp-border-1);
}
.mobile-menu-icon {
    font-size: 24px;
    color: var(--tp-heading-primary);
}
.tp-menu-toggle {
    font-size: 28px;
}
.icon-menu1:before {
    content: "\f0c9";
    font: normal normal normal 30px/1 FontAwesome;
}

.tpmobile-menu {
    padding: 20px 0;
    border-bottom: 1px solid var(--tp-border-1);
}
.mobile-menu-icon {
    font-size: 24px;
    color: var(--tp-heading-primary);
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

.header__info a i, .header__info button i {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background-color: var(--tp-grey-3);
    text-align: center;
    line-height: 40px;
    color: var(--tp-theme-1);
    display: block;
}
.tpcolor__yellow a i {
    background-color: var(--tp-grey-4);
}
.tpcolor__greenish a i {
    background-color: var(--tp-grey-5);
}
.tp-cart-toggle {
    font-size: 16px;
    line-height: 0;
}

.header__info-cart {
    position: relative;
}
.tpcolor__oasis a i, .tpcolor__oasis button i {
    background-color: var(--tp-grey-6);
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
    top: -2px;
    right: -3px;
}
.tpsideinfo.tp-sidebar-opened {
    transform: translateX(0);
}
@media (max-width: 767px) {
    .tpsideinfo {
        width: 275px;
    }
}
.tpsideinfo {
    background: #2D2A6E;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    padding: 30px;
    transform: translateX(-120%);
    transition: 0.3s;
    z-index: 999;
    overflow-y: scroll;
}
.tpsideinfo__close {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: var(--tp-common-white);
    width: 100%;
    display: block;
    min-height: 45px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    background-color: var(--tp-heading-secondary);
}
.tpsideinfo__nabtab button {
    width: 100%;
}
.fa-times:before {
    content: "\f00d";
    font: normal normal normal 16px/1 FontAwesome;
    
}
.search-button{
    top:45% !important;
}
.icon-search:before {
    content: "\f002";
    font: normal normal normal 16px/1 FontAwesome;
}
.tpsideinfo__search-title {
    color: var(--tp-common-white);
    font-size: 13px;
    text-transform: uppercase;
}
.tpsideinfo__search form {
    position: relative;
    padding-top: 13px;
    padding-bottom: 20px;
}

.tpsideinfo__search form input {
    width: 100%;
    height: 45px;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid transparent;
    background: #F3F3F9;
    padding: 10px 20px;
    padding-right: 45px;
}
.tpsideinfo__search button {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.tpsideinfo__nabtab .nav li {
    display: inline-block;
    width: 49%;
    margin-right: 4px;
}
.tpsideinfo__nabtab .nav-link.active {
    border: 0;
    padding: 10px 15px;
    position: relative;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    border-radius: 3px;
    background-color: var(--tp-heading-secondary);
}
.tpsideinfo__nabtab .nav li:last-child {
    margin-right: 0;
}
.tpsideinfo__nabtab .nav-link {
    border: 0;
    padding: 10px 15px;
    position: relative;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    border-radius: 3px;
    color: var(--tp-theme-1);
    background-color: var(--tp-common-white);
}

.tpsideinfo__nabtab .home-menu-style li {
    width: 50% !important;
}
.tpsideinfo__account-link, .tpsideinfo__wishlist-link {
    border-bottom: 1px #4D49A1 dotted;
    padding-top: 5px;
    padding-bottom: 5px;
    position:relative;
}
.tpsideinfo__account-link a, .tpsideinfo__wishlist-link a {
    font-size: 16px;
    color: var(--tp-common-white);
    padding-left:35px;
}

.tpsideinfo__account-link a i, .tpsideinfo__wishlist-link a i {
    font-size: 18px;
    color: var(--tp-common-white);
    line-height: 35px;
    text-align: center;
    margin-right: 10px;
    position:absolute;
    left:10px;
    bottom:-2px;
}
.icon-user:before {
    content: "\f007";
    font: normal normal normal 16px/1 FontAwesome;
}
.icon-heart:before {
    content: "\f004";
    font: normal normal normal 16px/1 FontAwesome;
}
/*Meanbar*/
.fa-plus:before {
    content: "\f067";
    font: normal normal normal 12px/1 FontAwesome;
}
.mean-bar{
    position:relative;
    height:auto;
    z-index:999;
}
.mean-container .mean-nav > ul > li > a:first-child {
    
}

.mean-bar ul li{
    height:auto;
}
.mean-container .mean-nav ul .home-menu-style li a {
    text-align: center;
}
.tpsideinfo__nabtab .home-menu-style li a {
    font-size: 13px !important;
    font-weight: 400 !important;
}
.mean-container .mean-nav > ul > li:first-child > a {
    border-top: 0;
}
.mean-container .mean-nav ul li a {
    width: 100%;
    padding: 10px 0;
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    text-transform: capitalize !important;
}
.mean-container .mean-nav ul li a {
    display: block;
    float: left;
    width: 90%;
    padding: 10px 5%;
    margin: 0;
    text-align: left;
    color: #fff;
    border-bottom: 1px #4D49A1 dotted;
    text-decoration: none;
    text-transform: uppercase;
}
.tpsideinfo__nabtab .mean-container .mean-nav ul {
    background-image: none !important;
}

.mean-container .mean-nav > ul {
    padding: 0;
    margin: 0;
    width: 100%;
    list-style-type: none;
    display: block !important;
}
.mean-container .mean-nav ul li a.mean-expand {
    margin-top: 8px;
    padding: 0 !important;
    line-height: 14px;
    border: 1px solid #3C3962 !important;
    height: 26px;
    width: 10%;
    line-height: 26px;
    color: #fff;
    font-weight: 400;
    top: 0;
}
.mean-container .mean-nav ul li a.mean-expand.mean-clicked {
    color: var(--tp-heading-secondary);
}
.mean-container .mean-nav ul li a.mean-expand.mean-clicked i {
    transform: rotate(45deg);
    color: var(--tp-heading-secondary);
}  

.mean-container .mean-nav ul {
    padding: 0;
    margin: 0;
    width: 100%;
    list-style-type: none;
    display:flex;
    flex-wrap:wrap;
}
.mean-container .mean-nav ul li li a {
    padding: 10px 5px;
    text-shadow: none !important;
    visibility: visible;
}
.mean-container .mean-nav ul li a img {
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    width: 100%;
    margin-bottom: 5px;
}

.mean-container .mean-nav ul li a:hover img {
    transform: scale(0.92);
}
.mean-container .mean-nav ul li a:hover {
    color: var(--tp-heading-secondary);
}
.sub-menu.phone_menu{
    max-height:0;
    overflow:hidden;
    transition: max-height 1s ease-in-out; 
}
.sub-menu.phone_menu.menu_height{
    max-height:fit-content;
}

.body-overlay.opened {
    opacity: 1;
    visibility: visible;
}

.body-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out 0s;
}
/* Cart Menu */
.tp-cart-info-area.tp-sidebar-opened {
    transform: translateX(0);
}

.tpcartinfo {
    background-color: var(--tp-common-white);
    text-align: start;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    box-shadow: rgba(5, 13, 54, 0.05) 5px 15px 30px 0px;
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 9999999;
    width: 380px;
    transform: translateX(100%);
}
@media (max-width: 767px) {
    .tpcartinfo {
        width: 280px;
    }
}
.tpcart__close {
    width: 30px;
    height: 30px;
}
.tpcart__close {
color: var(--tp-heading-secondary);
right: 10px;
font-size: 18px;
width: 35px;
height: 35px;
position: absolute;
top: 4px;
z-index: 2;
}
.tpcart__title {
    padding: 16px 30px;
    background-color: var(--tp-grey-1);
    font-weight: 700;
    font-size: 14px;
    color: var(--tp-heading-primary);
    text-transform: uppercase;
}
.tpcart {
    float: none;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;
    flex-direction: column;
}
.tpcart__product {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 0 30px;
}
.tpcart ul li {
    list-style: none;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--tp-border-1);
}
.tpcart ul{
    padding:0;
}
.tpcart__item {
    display: flex;
    align-items: center;
}
@media (max-width: 767px) {
    .tpcart__img {
        margin-right: 4px;
    }
}

.tpcart__img {
    margin-right: 20px;
    position: relative;
}
.tpcart__img img {
    width: 70px;
    height:70px;
    object-fit:cover;
    border-radius: 10px;
}
.tpcart__del {
    position: absolute;
    color: var(--tp-heading-secondary);
    right: 20px;
    top: 10px;
}
.tpcart__product{
    overflow:scroll;
}
.tpcart__product-list ul li {
    position:relative;
}

.tpcart__del-item{
    position:absolute;
    top:15px;
    right:-12px;
  }
.icon-x-circle:before {
    color: var(--tp-heading-secondary);
    content: "\f057 ";
    font: normal normal normal 14px/1 FontAwesome;
    
}
.tpcart__content-title a{
    font-size: 14px;
    font-weight: 400;
    color: var(--tp-heading-primary);
}

.tpcart__cart-price {
    font-weight: 600;
    font-size: 12px;
    color: var(--tp-heading-primary);
}
.tpcart__cart-price .new-price {
    color: var(--tp-heading-secondary);
}
.tpcart__total-price {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
    margin-bottom: 25px;
    padding-top: 25px;
    border-top: 1px solid var(--tp-border-1);
}
.tpcart__total-price .heilight-price {
    font-size: 18px;
    font-weight: 700;
}
.tpcart__free-shipping {
    padding: 13px 15px;
}
.tpcart__free-shipping span {
    color: var(--tp-common-white);
    font-size: 14px;
}
.tpcart__free-shipping span b {
    font-weight: 600;
    text-transform: uppercase;
}
.tpcart__free-shipping {
    padding: 13px 30px;
    background-color: var(--tp-theme-5);
}
@media (max-width: 767px) {
    .tpcart__free-shipping {
        padding: 13px 15px;
    }
}
.tpcart__checkout {
    margin-bottom: 30px;
}
.icon-x:before {
    content: "\58";
    font: normal normal normal 14px/1 FontAwesome;
}
</style>