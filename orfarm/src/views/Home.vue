<script setup>
import HomePageSlider from '@/components/HomePageSlider.vue'
import HomeBannerSection from '@/components/HomeBannerSection.vue'
import HomeBigBannerSection from '@/components/HomeBigBannerSection.vue'
import ProductSlider from '@/components/ProductSlider.vue'
import ProductNavTabs from '@/components/ProductNavTabs.vue'
import HomeBrandProduct from '@/components/HomeBrandProduct.vue'
import HomeReviewSlider from '@/components/HomeReviewSlider.vue'
import HomeCartArea from '@/components/HomeCartArea.vue'
import HomeBlogArea from '@/components/HomeBlogArea.vue'
import store from '../stores/index.js'
import Product from '../api/product/product.js'
import { ref, computed, onMounted } from 'vue'
const {getProduct, responseProduct, findProduct, searchProduct} = Product();
const data = ref([]);
onMounted(async()=>{
  await getProduct();
  data.value =  responseProduct.data;
 
})
</script>

<template>
<!-- HomePage Slider -->
<HomePageSlider></HomePageSlider>
<!-- HomePage Feature Section -->
<section class="feature-area whight-feature grey-bg feature-top">
   <div class="container">
      <div class="feature-bg-round white-bg pt-50 pb-15">
         <div class="tpfeature-border">
            <div class="row row-cols-lg-5 row-cols-md-3 row-cols-1">
               <div class="col">
                  <div class="mainfeature__item text-center mb-45">
                     <div class="mainfeature__icon">
                        <img src="../assets/img/icon/feature-icon-6.svg" alt="">
                     </div>
                     <div class="mainfeature__content">
                        <h4 class="mainfeature__title">Giao Hàng Nhanh</h4>
                        <p>Khắp Tây &amp; Đông Ấn Độ</p>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="mainfeature__item text-center mb-45">
                     <div class="mainfeature__icon">
                        <img src="../assets/img/icon/feature-icon-7.svg" alt="">
                     </div>
                     <div class="mainfeature__content">
                        <h4 class="mainfeature__title">Thanh Toán An Toàn</h4>
                        <p>Thanh Toán An Toàn 100%</p>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="mainfeature__item text-center mb-45">
                     <div class="mainfeature__icon">
                        <img src="../assets/img/icon/feature-icon-8.svg" alt="">
                     </div>
                     <div class="mainfeature__content">
                        <h4 class="mainfeature__title">Giảm Giá Trực Tuyến</h4>
                        <p>Giảm Giá Khi Mua Số Lượng Lớn</p>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="mainfeature__item text-center mb-45">
                     <div class="mainfeature__icon">
                        <img src="../assets/img/icon/feature-icon-9.svg" alt="">
                     </div>
                     <div class="mainfeature__content">
                        <h4 class="mainfeature__title">Trung Tâm Trợ Giúp</h4>
                        <p>Hỗ Trợ 24/7</p>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="mainfeature__item text-center mb-45">
                     <div class="mainfeature__icon">
                        <img src="../assets/img/icon/feature-icon-10.svg" alt="">
                     </div>
                     <div class="mainfeature__content">
                        <h4 class="mainfeature__title">Các Mặt Hàng Được Tuyển Chọn</h4>
                        <p>Từ Những Người Bán Uy Tín  </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
 <!-- HomePage Weekly Product -->
         <ProductSlider title='Sản phẩm' option='Xem tất cả ' fullscreen='' :hasProcess="true" :slideOnShow='5' :products='data'/>
         <HomeBannerSection/>
         <ProductSlider title='Sản phẩm thịnh hành hàng đầu' option='Xem tất cả ' fullscreen='' :hasProcess="true" :slideOnShow='5' :products='data'/>
         <ProductNavTabs/>
         <HomeBigBannerSection/> 
         <HomeBrandProduct :brandId="1"/>
         <HomeReviewSlider/> <!--bình luận-->
         <HomeCartArea/>
         <HomeBlogArea/>
</template>
<style scoped>
.feature-area{
   position: relative; 
   z-index:2;
}
.feature-bg-round {
   border-radius: 20px 20px 0 0;
   padding: 50px 50px;
   
}
.feature-bg-round .tpfeature-border {
   border-bottom: 1px solid var(--tp-border-1);
}
.mainfeature__icon {
   margin-bottom: 10px;
}
.mainfeature__icon img {
   height: 25px;
   width: 25px;
}
.whight-feature .mainfeature__title {
   color: var(--tp-heading-primary);
}

.mainfeature__title {
   text-transform: uppercase;
   font-weight: 700;
   font-size: 12px;
   color: var(--tp-common-white);
   margin-bottom: 2px;
}
.whight-feature .mainfeature__content p {
   color: var(--tp-text-body);
}

.mainfeature__content p {
   color: var(--tp-grey-10);
   font-size: 14px;
   margin-bottom: 0;
}

</style>
