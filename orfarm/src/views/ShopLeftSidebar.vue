<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import Pagination from '@/components/Pagination.vue'
import ProductSlider from '@/components/ProductSlider.vue'
import bannerImage from '@/assets/img/banner/shop-bg-1.jpg';
import DoubleRangeSlider from '@/components/MultiSlider.vue';
import {reactive} from 'vue';
const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, {name:'Cửa hàng' }]
const sortSelect = reactive({
  isSortSelectOpen: false,
  selectedOption: 'Sắp xếp mặc định',
  options: ['Sắp xếp mặc định', 'Hiển thị 08', 'Hiển thị 20']
});
const toggleSortSelect = ()=>{
   sortSelect.isSortSelectOpen=!sortSelect.isSortSelectOpen;
}
const selectOption = (option)=>{
   console.log(option);
   sortSelect.selectedOption = option;
}
</script>

<template>
    <BreadCrumb :breadCrumbPath="breadCrumbPath" isGrey="true"/>
    <section class="shop-area-start grey-bg pb-200">
            <div class="container">
               <div class="row">
                  <div class="col-xl-2 col-lg-12 col-md-12">
                     <div class="tpshop__leftbar">
    <div class="tpshop__widget mb-30 pb-25">
        <h4 class="tpshop__widget-title">Danh Mục Sản Phẩm</h4>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault9">
            <label class="form-check-label" for="flexCheckDefault9">
                Bánh quy &amp; Đồ ăn vặt (08)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
            <label class="form-check-label" for="flexCheckDefault2">
                Trái Cây Tươi (12)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault3">
            <label class="form-check-label" for="flexCheckDefault3">
                Trái Cây Ngoại (09)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault4">
            <label class="form-check-label" for="flexCheckDefault4">
                Bánh Mì &amp; Bánh Ngọt (05)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5">
            <label class="form-check-label" for="flexCheckDefault5">
                Bữa Sáng &amp; Sữa (09)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6">
            <label class="form-check-label" for="flexCheckDefault6">
                Mật Ong (05)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7">
            <label class="form-check-label" for="flexCheckDefault7">
                Sữa &amp; Sữa Hương Vị (04)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8">
            <label class="form-check-label" for="flexCheckDefault8">
                Thịt &amp; Hải Sản (08)
            </label>
        </div>
    </div>
    <div class="tpshop__widget mb-30 pb-25">
        <h4 class="tpshop__widget-title mb-20">LỌC THEO GIÁ</h4>
        <DoubleRangeSlider :min="0" :max="1000" @update:min="value => min = value" @update:max="value => max = value"></DoubleRangeSlider>
        <div class="productsidebar__btn mt-15 mb-15">
            <a href="#">LỌC</a>
        </div>
    </div>
    <div class="tpshop__widget mb-30 pb-25">
        <h4 class="tpshop__widget-title mb-20">Lọc Theo Màu Sắc</h4>
        <div class="tpshop__widget-color-box">
            <div class="form-check">
                <input class="form-check-input black-input" type="checkbox" value="" id="flexCheckDefault12">
                <label class="form-check-label" for="flexCheckDefault12">
                    Đen
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input blue-input" type="checkbox" value="" checked="" id="flexCheckChecked13">
                <label class="form-check-label" for="flexCheckChecked13">
                    Xanh Dương
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input brown-input" type="checkbox" value="" checked="" id="flexCheckChecked18">
                <label class="form-check-label" for="flexCheckChecked18">
                    Nâu
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input grey-input" type="checkbox" value="" id="flexCheckChecked14">
                <label class="form-check-label" for="flexCheckChecked14">
                    Xám
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input green-input" type="checkbox" value="" id="flexCheckChecked15">
                <label class="form-check-label" for="flexCheckChecked15">
                    Xanh Lá
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input orange-input" type="checkbox" value="" id="flexCheckChecked16">
                <label class="form-check-label" for="flexCheckChecked16">
                    Vàng
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input red-input" type="checkbox" value="" id="flexCheckChecked17">
                <label class="form-check-label" for="flexCheckChecked17">
                    Đỏ
                </label>
            </div>
        </div>
    </div>
    <div class="tpshop__widget mb-30 pb-25">
        <h4 class="tpshop__widget-title">LỌC THEO THƯƠNG HIỆU</h4>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18">
            <label class="form-check-label" for="flexCheckDefault18">
                Chrome Hearts (15)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19">
            <label class="form-check-label" for="flexCheckDefault19">
                Dominique Aurientis (15)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault20">
            <label class="form-check-label" for="flexCheckDefault20">
                Galliano (15)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault21">
            <label class="form-check-label" for="flexCheckDefault21">
                Georgine (15)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22">
            <label class="form-check-label" for="flexCheckDefault22">
                Matthew Christopher (15)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault23">
            <label class="form-check-label" for="flexCheckDefault23">
                Paul Gaultier (15)
            </label>
        </div>
    </div>
    <div class="tpshop__widget">
        <h4 class="tpshop__widget-title">LỌC THEO ĐÁNH GIÁ</h4>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault24">
            <label class="form-check-label" for="flexCheckDefault24">
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                (45)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault25">
            <label class="form-check-label" for="flexCheckDefault25">
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                (10)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked="" id="flexCheckDefault26">
            <label class="form-check-label" for="flexCheckDefault26">
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                (05)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27">
            <label class="form-check-label" for="flexCheckDefault27">
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                (02)
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault28">
            <label class="form-check-label" for="flexCheckDefault28">
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                <i class="icon-star_rate"></i>
                (02)
            </label>
        </div>
    </div>
</div>

                     <div class="tpshop__widget">
                        <div class="tpshop__sidbar-thumb mt-35">
                           <img src="../assets/img/shape/sidebar-product-1.png" alt="">
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-10 col-lg-12 col-md-12">
                     <div class="tpshop__top ml-60">
                        <div class="tpshop__banner mb-30" data-background="../assets/img/banner/shop-bg-1.jpg"  :style="{ backgroundImage: `url(${bannerImage})` }" >
                           <div class="tpshop__content text-center">
    <span>Món Salad</span>
    <h4 class="tpshop__content-title mb-20">Tươi &amp; Tự Nhiên <br>Ưu Đãi Đặc Biệt Thực Phẩm Sức Khỏe</h4>
    <p>Đừng bỏ lỡ các ưu đãi hiện tại của chúng tôi!</p>
</div>

                        </div>
                        <div class="product__filter-content mb-40">
                           <div class="row align-items-center">
                              <div class="col-sm-4">
                                 <div class="product__item-count">
                                    <span>Hiển thị 1 - 18 trong 40 Sản Phẩm</span>
                                 </div>
                              </div>
                              <div class="col-sm-4">
                                 <div class="tpproductnav tpnavbar product-filter-nav d-flex align-items-center justify-content-center">
                                    <nav>
                                       <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                          <button class="nav-link" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="false" tabindex="-1">
                                             <i>
                                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="currentColor"></path>
                                                   <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"></path>
                                                   <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="currentColor"></path>
                                                   <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="currentColor"></path>
                                                   <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="currentColor"></path>
                                                   <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="currentColor"></path>
                                                   <path d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z" fill="currentColor"></path>
                                                   <path d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z" fill="currentColor"></path>
                                                   <path d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z" fill="currentColor"></path>
                                                   </svg>
                                             </i>
                                          </button>
                                          <button class="nav-link active" id="nav-popular-tab" data-bs-toggle="tab" data-bs-target="#nav-popular" type="button" role="tab" aria-controls="nav-popular" aria-selected="true">
                                             <i>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="currentColor"></path>
                                                   <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"></path>
                                                   <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="currentColor"></path>
                                                   <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="currentColor"></path>
                                                   <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="currentColor"></path>
                                                   <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="currentColor"></path>
                                                   </svg>
                                             </i>
                                          </button>
                                          <button class="nav-link" id="nav-product-tab" data-bs-toggle="tab" data-bs-target="#nav-product" type="button" role="tab" aria-controls="nav-product" aria-selected="false" tabindex="-1">
                                             <i>
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z" fill="currentColor"></path>
                                                   <path d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z" fill="currentColor"></path>
                                                   <path d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z" fill="currentColor"></path>
                                                </svg>
                                             </i>
                                          </button>
                                       </div>
                                    </nav>
                                 </div>
                              </div>
                              <div class="col-sm-4">
                                 <div class="product__navtabs d-flex justify-content-end align-items-center">
        <div class="tp-shop-selector">
         <div class="nice-select" :v-model='sortSelect.selectedOption' @mousedown="toggleSortSelect" :class="{ 'open': sortSelect.isSortSelectOpen }">
            <div class="current">
      {{ sortSelect.selectedOption }}
    </div>
    <ul class="list">
      <li class="tp-shop-option" v-for="option in sortSelect.options" :key="option" @mousedown="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
        </div>
    </div>
</div>

                           </div>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                           <div class="tab-pane fade" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                              <div class="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products21-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products1-min.jpg" alt=""></a>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>,
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top-.html">Mangosteen Organic From VietNamese</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products22-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products11-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top.html">Soda Sparkling Water Maker (Rose Gold)</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products4-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products23-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-10%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details.html">HOT - Lettuce Fresh Produce Fruit Vegetables</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products27-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products14-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-90%</span>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-grid.html">Pure Irish Organic Beef Quarter Pounder Burgers</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products16-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products11-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>,
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-3.html">Ginger Fresh, Whole, Organic - 250gram</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products17-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products37-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-grid.html">Laffy Taffy Laff Bites Gone Bananas - 4 Packs</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products29-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products30-min.jpg" alt=""></a>
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
                                             <a href="shop-details.html">Fresh Meat</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top-.html">Mangosteen Organic From VietNamese</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products9-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products10-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details.html">Fresh Meat</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top.html">Soda Sparkling Water Maker (Rose Gold)</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products13-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products35-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-10%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details.html">HOT - Lettuce Fresh Produce Fruit Vegetables</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products27-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products14-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-90%</span>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-grid.html">Pure Irish Organic Beef Quarter Pounder Burgers</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products15-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products32-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-3.html">Ginger Fresh, Whole, Organic - 250gram</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tab-pane fade show active whight-product" id="nav-popular" role="tabpanel" aria-labelledby="nav-popular-tab">
                              <div class="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products21-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products1-min.jpg" alt=""></a>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>,
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top-.html">Mangosteen Organic From VietNamese</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products22-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products11-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top.html">Soda Sparkling Water Maker (Rose Gold)</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products4-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products23-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-10%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details.html">HOT - Lettuce Fresh Produce Fruit Vegetables</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products16-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products11-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>,
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-3.html">Ginger Fresh, Whole, Organic - 250gram</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products17-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products37-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-grid.html">Laffy Taffy Laff Bites Gone Bananas - 4 Packs</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products29-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products30-min.jpg" alt=""></a>
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
                                             <a href="shop-details.html">Fresh Meat</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top-.html">Mangosteen Organic From VietNamese</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products9-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products10-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details.html">Fresh Meat</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top.html">Soda Sparkling Water Maker (Rose Gold)</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products13-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products35-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-10%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details.html">HOT - Lettuce Fresh Produce Fruit Vegetables</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products27-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products14-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-90%</span>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-grid.html">Pure Irish Organic Beef Quarter Pounder Burgers</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products15-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details.html"><img src="../assets/img/product/products32-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-3.html">Ginger Fresh, Whole, Organic - 250gram</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products21-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products1-min.jpg" alt=""></a>
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
                                             <a href="shop-details-3.html">Fresh Fruits</a>,
                                             <a href="shop-details-3.html">Vagetables</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top-.html">Mangosteen Organic From VietNamese</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="tpproduct p-relative mb-20">
                                       <div class="tpproduct__thumb p-relative text-center">
                                          <a href="#"><img src="../assets/img/product/products22-min.jpg" alt=""></a>
                                          <a class="tpproduct__thumb-img" href="shop-details-grid.html"><img src="../assets/img/product/products11-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-40%</span>
                                          </div>
                                          <div class="tpproduct__shopping">
                                             <a class="tpproduct__shopping-wishlist" href="wishlist.html"><i class="icon-heart icons"></i></a>
                                             <a class="tpproduct__shopping-wishlist" href="#"><i class="icon-layers"></i></a>
                                             <a class="tpproduct__shopping-cart" href="#"><i class="icon-eye"></i></a>
                                          </div>
                                       </div>
                                       <div class="tpproduct__content">
                                          <span class="tpproduct__content-weight">
                                             <a href="shop-details-3.html">Fresh Fruits</a>
                                          </span>
                                          <h4 class="tpproduct__title">
                                             <a href="shop-details-top.html">Soda Sparkling Water Maker (Rose Gold)</a>
                                          </h4>
                                          <div class="tpproduct__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <div class="tpproduct__price">
                                             <span>$56.00</span>
                                             <del>$19.00</del>
                                          </div>
                                       </div>
                                       <div class="tpproduct__hover-text">
                                          <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                             <a class="tp-btn-2" href="cart.html">Thêm vào giỏ hàng</a>
                                          </div>
                                          <div class="tpproduct__descrip">
                                         <ul>
    <li>Loại: Hữu cơ</li>
    <li>Ngày sản xuất: 4 tháng 8, 2021</li>
    <li>Hạn sử dụng: 60 ngày</li>
</ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tab-pane fade whight-product" id="nav-product" role="tabpanel" aria-labelledby="nav-product-tab">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products41-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products48-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Fresh Mangosteen 100% Organic From VietNamese</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products42-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products47-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Soda Sparkling Water Maker (Rose Gold)</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products43-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products46-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">HOT - Lettuce Fresh Produce Fruit Vegetables</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products44-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products45-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Ginger Fresh, Whole, Organic - 250gram</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products45-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products41-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Laffy Taffy Laff Bites Gone Bananas - 4 Packs</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products46-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products42-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Mangosteen Organic From VietNamese</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products47-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products43-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Pure Irish Organic Beef Quarter Pounder Burgers</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tplist__product d-flex align-items-center justify-content-between mb-20">
                                       <div class="tplist__product-img">
                                          <a href="#" class="tplist__product-img-one"><img src="../assets/img/product/products48-min.jpg" alt=""></a>
                                          <a class="tplist__product-img-two" href="shop-details.html"><img src="../assets/img/product/products44-min.jpg" alt=""></a>
                                          <div class="tpproduct__info bage">
                                             <span class="tpproduct__info-discount bage__discount">-50%</span>
                                             <span class="tpproduct__info-hot bage__hot">HOT</span>
                                          </div>
                                       </div>
                                       <div class="tplist__content">
                                          <span>500 gram</span>
                                          <h4 class="tplist__content-title"><a href="#">Fresh Mangosteen 100% Organic From VietNamese</a></h4>
                                          <div class="tplist__rating " style="margin-bottom:5px;">
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                             <a href="#"><i class="icon-star_outline1"></i></a>
                                          </div>
                                          <ul class="tplist__content-info">
    <li>Nước sốt phô mai không sữa thơm ngon</li>
    <li>Thân thiện với người ăn chay và không gây dị ứng</li>
    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
</ul>

                                       </div>
                                       <div class="tplist__price justify-content-end">
                                          <h4 class="tplist__instock">Số lượng còn lại: <span>92 in stock</span> </h4>
                                          <h3 class="tplist__count mb-15">$56.00</h3>
                                          <button class="tp-btn-2 mb-10">Thêm vào giỏ hàng</button>
                                          <div class="tplist__shopping">
                                             <a href="#"><i class="icon-heart icons"></i> Danh sách ưa thích</a>
                                             <a href="#"><i class="icon-layers"></i>So Sánh</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>   
                     <Pagination/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
</template>
<style scoped>
.tpshop__leftbar {
    margin-right: -60px;
    background-color: var(--tp-common-white);
    padding: 25px 30px 18px 30px;
    border-radius: 10px;
}
.tpshop__widget {
    border-bottom: dotted 1px #000;
}
.tpshop__widget-title {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
}
.tpshop__widget .form-check-input:checked {
    background-color: var(--tp-heading-secondary);
    border-color: var(--tp-border-1);
}
.tpshop__widget label {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: var(--tp-text-3);
}
.productsidebar__range .ui-slider-horizontal .ui-slider-range {
    background: var(--tp-heading-secondary);
}
.productsidebar__range .ui-state-default, .productsidebar__range .ui-widget-content .ui-state-default, .productsidebar__range .ui-widget-header .ui-state-default, .productsidebar__range .ui-button, .productsidebar__range html .ui-button.ui-state-disabled:hover, .productsidebar__range html .ui-button.ui-state-disabled:active {
    border: 4px solid var(--tp-heading-secondary);
    border-radius: 50%;
}
.productsidebar__range .ui-state-default,.productsidebar__range .ui-widget-content .ui-state-default{
    height:20px;
    width:20px;
}
.productsidebar__range .ui-slider-horizontal {
    height: 4px;
    background-color: #EBEFF4;
    border-radius: 10px;
    border: none;
}
.price-filter input {
    outline: none;
    border: none;
    font-size: 14px;
    color: #4D5574;
    font-weight: 400;
    margin-top: 5px;
}
.productsidebar__btn a {
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    background-color: var(--tp-heading-secondary);
    color: var(--tp-common-white);
    border-radius: 30px;
    display: block;
    padding: 10px 10px;
    text-align: center;
}
.tpshop__widget-color-box .form-check-input[type=checkbox] {
    border-radius: 50%;
    height: 15px;
    width: 15px;
    border: none;
    transform: translateY(3px);
}

.tpshop__widget .form-check-input[type=checkbox] {
    border-radius: 3px;
    height: 15px;
    width: 15px;
    border: 1px solid var(--tp-border-3);
    transform: translateY(3px);
}
.tpshop__widget-color-box .form-check-input.blue-input {
    background-color: #1E73BE;
}
.tpshop__widget-color-box .form-check-input.brown-input {
    background-color: #49271D;
}
.tpshop__widget-color-box .form-check-input.grey-input {
    background-color: #BFBFBF;
}
.tpshop__widget-color-box .form-check-input.green-input {
    background-color: #50B948;
}
.tpshop__widget-color-box .form-check-input.orange-input {
    background-color: #FF7900;
}
.tpshop__widget-color-box .form-check-input.red-input {
    background-color: #CB2028;
}
.tpshop__widget .form-check i {
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: -0.3em;
    color: #FFB800;
    transform: translateY(-2px);
}

.icon-star_rate:before {
   content:"\f005";
   font: normal normal normal 12px/1 FontAwesome;
   margin:0 3px;
}
.tpshop__banner {
    padding: 45px 0;
    border-radius: 10px;
}

.tpshop__content span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: var(--tp-text-1);
    display: inline-block;
    margin-bottom: 8px;
}
.tpshop__content-title{
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercas;
    color: var(--tp-common-white);
}
.tpshop__content p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: var(--tp-common-white);
    margin-bottom: 0;
}

.product__filter-content {
    background-color: var(--tp-common-white);
    border-radius: 10px;
    padding: 7px 20px;
}
.tpproductnav .nav-tabs {
    border-bottom: none;
}
.tpproductnav .nav-tabs .nav-link {
    border: none;
}
.tpproductnav .nav-tabs .nav-link i {
    color: #D6D6E5;
}
.tpproductnav .nav-tabs .nav-link.active {
    color: var(--tp-heading-secondary);
    background-color: transparent;
    border-color: none;
    border: none;
}
.tpproductnav .nav-tabs .nav-link.active i{
   color: var(--tp-heading-secondary);
}
.tpproductnav .nav-tabs .nav-link {
    border: none;
}
.tp-shop-selector .nice-select {
    border: none;
}
.tpproduct__shop-item {
    position: relative;
    z-index: 1;
}
.whight-product .tpproduct {
    border: 1px solid #EBEFF4;
}

.tpproduct {
    background-color: var(--tp-common-white);
    border-radius: 10px;
    border: 1px solid var(--tp-common-white);
}
.tplist__content {
    margin-left: -140px;
}
.tp-shop-option{
   cursor: pointer;
    font-weight: 400;
    line-height: 40px;
    list-style: none;
    min-height: 40px;
    outline: none;
    padding: 10px 29px 10px 18px;
    text-align: left;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
/* Responsive */
@media (max-width: 767.98px) {
      .tpshop__top{
         margin-left:0;
         padding-top:30px;
      }
      .tpshop__leftbar {
         margin-right: 0;
      }
      .tpshop__sidbar-thumb img{
         width:100%;
      }
      .tpshop__banner {
         background-repeat: no-repeat;
         background-size: cover;
     }
     .product__navtabs{
      justify-content:center !important;
     }
     .tplist__product {
      flex-wrap: wrap;
  }
  .tplist__content {
   margin-left: 0;
}
}
</style>
