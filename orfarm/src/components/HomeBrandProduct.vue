<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  brandId: {
    type: Number,
    default: 0
  },
});

</script>

<template>
   <section class="brand-product grey-bg pb-60">
      <div class="container">
         <div class="sections__wrapper white-bg pl-50 pr-50 pb-40 brand-product">
            <div class="row align-items-center">
               <div class="col-md-6 text-center">
                  <div class="tpsection mb-15">
                     <h4 class="tpsection__title text-start brand-product-title">Sản phẩm thương hiệu nổi bật</h4>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="tpproduct__all-item">
                     <a href="#">Xem tất cả <i class="icon-chevron-right"></i></a>
                  </div>
               </div>
            </div>
            <div class="row gx-3">
               <div class="col-lg-3">
                  <div class="tpbrandproduct__main text-center">
                     <div class="tpbrandproduct__main-thumb mb-20">
                        <img src="../assets/img/brand/brand-thumb-1.png" alt="">
                     </div>
                     <div class="tpbrandproduct__main-contetn">
                        <h4 class="tpbrandproduct__title">Siêu thị</h4>
                        <p>Nam liber tempor cum soluta nobis eleifend congue doming quod mazim placerat facer possim assum typi.</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9">
                  <div class="row gx-3">
                     <div class="col-xl-4 col-lg-6">
                        <div class="tpbrandproduct__item d-flex mb-20">
                           <div class="tpbrandproduct__img p-relative">
                              <img src="../assets/img/product/products15-min.jpg" alt="">
                              <div class="tpproduct__info bage tpbrandproduct__bage">
                                 <span class="tpproduct__info-discount bage__discount">-50%</span>
                              </div>
                           </div>
                           <div class="tpbrandproduct__contact">
                              <span class="tpbrandproduct__product-title"><a href="shop-details.html">Rau xanh tươi sạch Lettuce</a></span>
                              <div class="tpproduct__rating">
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
                        </div>
                     </div>
                     <div class="col-xl-4 col-lg-6">
                        <div class="tpbrandproduct__item d-flex mb-20">
                           <div class="tpbrandproduct__img p-relative">
                              <img src="../assets/img/product/products30-min.jpg" alt="">
                              <div class="tpproduct__info bage tpbrandproduct__bage">
                                 <span class="tpproduct__info-discount bage__discount">-50%</span>
                              </div>
                           </div>
                           <div class="tpbrandproduct__contact">
                              <span class="tpbrandproduct__product-title"><a href="shop-details.html">Thịt gà tươi ngon và rẻ Lettuce</a></span>
                              <div class="tpproduct__rating">
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
                        </div>
                     </div>
                     <div class="col-xl-4 col-lg-6">
                        <div class="tpbrandproduct__item d-flex mb-20">
                           <div class="tpbrandproduct__img p-relative">
                              <img src="../assets/img/product/products2-min.jpg" alt="">
                              <div class="tpproduct__info bage tpbrandproduct__bage">
                                 <span class="tpproduct__info-discount bage__discount">-50%</span>
                              </div>
                           </div>
                           <div class="tpbrandproduct__contact">
                              <span class="tpbrandproduct__product-title"><a href="shop-details.html">Sữa sôcôla sữa tươi Quaker Popped Rice Crisps</a></span>
                              <div class="tpproduct__rating">
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
                        </div>
                     </div>
                     <div class="col-xl-4 col-lg-6">
                        <div class="tpbrandproduct__item d-flex mb-20">
                           <div class="tpbrandproduct__img p-relative">
                              <img src="../assets/img/product/products33-min.jpg" alt="">
                              <div class="tpproduct__info bage tpbrandproduct__bage">
                                 <span class="tpproduct__info-discount bage__discount">-50%</span>
                              </div>
                           </div>
                           <div class="tpbrandproduct__contact">
                              <span class="tpbrandproduct__product-title"><a href="shop-details.html">Hành tím 1kg / Hành / Hành khô Kinh môn</a></span>
                              <div class="tpproduct__rating">
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
                        </div>
                     </div>
                     <div class="col-xl-4 col-lg-6">
                        <div class="tpbrandproduct__item d-flex mb-20">
                           <div class="tpbrandproduct__img p-relative">
                              <img src="../assets/img/product/products38-min.jpg" alt="">
                              <div class="tpproduct__info bage tpbrandproduct__bage">
                                 <span class="tpproduct__info-discount bage__discount">-50%</span>
                              </div>
                           </div>
                           <div class="tpbrandproduct__contact">
                              <span class="tpbrandproduct__product-title"><a href="shop-details.html">Thịt tươi ngon đầu tiên từ Mỹ 500g</a></span>
                              <div class="tpproduct__rating">
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
                        </div>
                     </div>
                     <div class="col-xl-4 col-lg-6">
                        <div class="tpbrandproduct__item d-flex mb-20">
                           <div class="tpbrandproduct__img p-relative">
                              <img src="../assets/img/product/products7-min.jpg" alt="">
                              <div class="tpproduct__info bage tpbrandproduct__bage">
                                 <span class="tpproduct__info-discount bage__discount">-50%</span>
                              </div>
                           </div>
                           <div class="tpbrandproduct__contact">
                              <span class="tpbrandproduct__product-title"><a href="shop-details.html">Cà chua cherry hữu cơ tươi 100g</a></span>
                              <div class="tpproduct__rating">
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
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   
</template>
<style scoped>
.brand-product {
    border-radius: 0 0 10px 10px;
}
.brand-product-title {
    font-size: 22px;
}
.tpproduct__all-item {
    text-align: end;
    margin-bottom: 15px;
}
.tpproduct__all-item a {
    font-size: 15px;
    font-weight: 400;
    color: var(--tp-text-3);
}
.tpproduct__all-item a i {
    margin-left: 4px;
}
.icon-chevron-right:before {
    content: "\f105";
    font: normal normal normal 16px/1 FontAwesome;

}
.tpbrandproduct__main {
    border: 1px solid #EBEFF4;
    padding: 55px 30px 35px 30px;
    border-radius: 10px;
}
.tpbrandproduct__title {
    margin-bottom: 15px;
    color: var(--tp-heading-primary);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
}
.tpbrandproduct__main-contetn p {
    font-size: 15px;
    color: var(--tp-text-3);
}
.tpbrandproduct__product-title a:hover {
   color: var(--tp-heading-secondary);
}
.tpbrandproduct__item {
    border: 1px solid #EBEFF4;
    border-radius: 10px;
    align-items: center;
    padding: 22px 20px;
}
.tpbrandproduct__img {
    flex: 0 0 auto;
    margin-right: 18px;
}
.tpbrandproduct__img img {
    height: 100px;
    width: 100px;
    object-fit: cover;
}
.tpbrandproduct__bage {
    top: 0;
    left: 0;
}
.tpproduct__info {
    position: absolute;
}
.bage__discount {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-theme-3);
    border-radius: 2px;
    color: var(--tp-common-white);
    padding: 3px 9px;
}
.tpbrandproduct__product-title {
    font-size: 16px;
    font-weight: 400;
    color: var(--tp-heading-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-bottom: 5px;
    line-height: 20px;
}
.tpbrandproduct__product-title a{
    color:inherit;
}
.tpproduct__rating a i {
    margin-right: -5px;
    font-size: 14px;
    color: var(--tp-text-1);
}
.icon-star_outline1:before {
   margin-right:2px;
   content: "\f005";
   font: normal normal normal 12px/1 FontAwesome;
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
</style>
