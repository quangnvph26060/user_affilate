<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

</script>
<template>
   <section class="blog-area pt-30">
       <div class="container-fluid tpblog_slider">
           <swiper :modules="[Virtual]" :breakpoints="{
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }" virtual>
               <swiper-slide>      
                   <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                           <img src="../assets/img/blog/blog-single-1.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                           <div class="tpblog__entry-wap">
                               <span class="cat-links"><a href="shop-details.html">Lối Sống</a></span>
                               <span class="author-by"><a href="#">Quản Trị Viên</a></span>
                               <span class="post-data"><a href="#">15 THÁNG 9, 2022</a></span>
                           </div>
                           <h4 class="tpblog__single-title mb-20">
                               <a href="blog-details.html">Những Lý Do Phổ Biến Bạn Phải Uống Nước Ép Hàng Ngày</a>
                           </h4>
                           <a href="blog-details.html">Tiếp tục đọc</a>
                       </div>
                   </div>
               </swiper-slide>  

               <swiper-slide>  
                   <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                           <img src="../assets/img/blog/blog-single-2.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                           <div class="tpblog__entry-wap">
                               <span class="cat-links"><a href="shop-details.html">Lối Sống</a></span>
                               <span class="author-by"><a href="#">Quản Trị Viên</a></span>
                               <span class="post-data"><a href="#">15 THÁNG 9, 2022</a></span>
                           </div>
                           <h4 class="tpblog__single-title mb-20">
                               <a href="blog-details.html">Những Lý Do Phổ Biến Bạn Phải Uống Nước Ép Hàng Ngày</a>
                           </h4>
                           <a href="blog-details.html">Tiếp tục đọc</a>
                       </div>
                   </div>
               </swiper-slide>  

               <swiper-slide>  
                   <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                           <img src="../assets/img/blog/blog-single-3.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                           <div class="tpblog__entry-wap">
                               <span class="cat-links"><a href="shop-details.html">Lối Sống</a></span>
                               <span class="author-by"><a href="#">Quản Trị Viên</a></span>
                               <span class="post-data"><a href="#">15 THÁNG 9, 2022</a></span>
                           </div>
                           <h4 class="tpblog__single-title mb-20">
                               <a href="blog-details.html">Những Lý Do Phổ Biến Bạn Phải Uống Nước Ép Hàng Ngày</a>
                           </h4>
                           <a href="blog-details.html">Tiếp tục đọc</a>
                       </div>
                   </div>
               </swiper-slide>  

               <swiper-slide>  
                   <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                           <img src="../assets/img/blog/blog-single-1.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                           <div class="tpblog__entry-wap">
                               <span class="cat-links"><a href="shop-details.html">Lối Sống</a></span>
                               <span class="author-by"><a href="#">Quản Trị Viên</a></span>
                               <span class="post-data"><a href="#">15 THÁNG 9, 2022</a></span>
                           </div>
                           <h4 class="tpblog__single-title mb-20">
                               <a href="blog-details.html">Những Lý Do Phổ Biến Bạn Phải Uống Nước Ép Hàng Ngày</a>
                           </h4>
                           <a href="blog-details.html">Tiếp tục đọc</a>
                       </div>
                   </div>
               </swiper-slide>  
           </swiper>
       
           <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
       </div>
   </section>
</template>
<style scoped>
.tpblog_slider{
   width:100vw;
   position:relative;
   overflow:hidden;
}
.tpblog__single-img {
    position: relative;
}
.tpblog__single-img::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background: rgba(10, 12, 31, 0.5);
}
.tpblog__single-img img {
    width: 100%;
    border-radius: 10px;
}
.tpblog__single-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
}
.tpblog__single-text .tpblog__entry-wap span {
    color: var(--tp-common-white);
}

.tpblog__entry-wap .cat-links {
    color: var(--tp-heading-secondary);
}
.tpblog__entry-wap span::after {
    position: absolute;
    content: "";
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background-color: #CFD4DE;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
}
.tpblog__single-text .tpblog__entry-wap span {
    color: var(--tp-common-white);
}

@media only screen and (min-width: 1400px) and (max-width: 1600px), only screen and (min-width: 1200px) and (max-width: 1399px), only screen and (min-width: 576px) and (max-width: 767px) {
    .tpblog__entry-wap span {
        margin-right: 4px;
        padding-right: 7px;
    }
}
.tpblog__entry-wap span {
  
    margin-right: 8px;
    padding-right: 10px;
    position: relative;
    display: inline-block;
    margin-bottom: 8px;
}
.tpblog__entry-wap span a{
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--tp-common-white);
}
.tpblog__entry-wap span:last-child {
    margin-right: 0;
    padding-right: 0;
}
.tpblog__single-title a {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.22;
    color: var(--tp-common-white);
}
.tpblog__entry-wap span a:hover {
    color: var(--tp-heading-secondary);
}
.tpblog__single-text > a {
    font-family: var(--tp-ff-jost);
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    align-items: center;
    text-transform: uppercase;
    color: var(--tp-common-white);
}
.swiper-wrapper {
    display:flex;
}
/* Responsive */
@media (max-width: 767.98px) {
    .tpblog__single-title a{
        font-size: 16px;
        margin-bottom: 8px;
    }
}

</style>