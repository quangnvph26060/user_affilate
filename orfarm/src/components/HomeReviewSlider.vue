<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
const options = ref({
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});
</script>

<template>
    <section class="testimonial-area pt-60 pb-60">
        <div class="container">
            <div class="testimonial__shape p-relative">
                <img src="../assets/img/shape/tree-leaf-4.svg" alt="" class="testimonial__shape-one">
                <img src="../assets/img/shape/tree-leaf-5.svg" alt="" class="testimonial__shape-two">
                <img src="../assets/img/shape/tree-leaf-6.png" alt="" class="testimonial__shape-three">
            </div>
            <swiper  :slides-per-view="1" :space-between="20" :autoplay="true" :modules="[Navigation, Pagination, Scrollbar, A11y, Autoplay]"  v-bind="options" class="p-relative">
            <swiper-slide>
                <div class="row justify-content-center p-relative">
                    <div class="col-md-8">
                        <div class="tptestimonial__item text-center">
                            <div class="tptestimonial__avata mb-25">
                                <img src="../assets/img/testimonial/test-avata-3.png" alt="">
                            </div>
                            <div class="tptestimonial__content">
                                <p>"Tôi cũng thích việc có thể chọn các sản phẩm chính trong các bao giấy nâu và bình thủy tinh <br/> ở khu vực không chất thải, nhằm mục đích giảm nhựa và cũng tiện lợi hơn."</p>
                                <div class="tptestimonial__rating" style="margin-bottom:5px;">
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                </div>
                                <h4 class="tptestimonial__title">Lionel</h4>
                                <span class="tptestimonial__avata-position">Thiết Kế Web tại Blueskytechco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row justify-content-center p-relative">
                    <div class="col-md-8">
                        <div class="tptestimonial__item text-center">
                            <div class="tptestimonial__avata mb-25">
                                <img src="../assets/img/testimonial/test-avata-1.png" alt="">
                            </div>
                            <div class="tptestimonial__content">
                                <p>"Tôi cũng thích việc có thể chọn các sản phẩm chính trong các bao giấy nâu và bình thủy tinh <br/> ở khu vực không chất thải, nhằm mục đích <br/>giảm nhựa và cũng tiện lợi hơn."</p>
                                <div class="tptestimonial__rating" style="margin-bottom:5px;">
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                </div>
                                <h4 class="tptestimonial__title">Algistino Lionel</h4>
                                <span class="tptestimonial__avata-position">Thiết Kế Web tại Blueskytechco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row justify-content-center p-relative">
                    <div class="col-md-8">
                        <div class="tptestimonial__item text-center">
                            <div class="tptestimonial__avata mb-25">
                                <img src="../assets/img/testimonial/test-avata-2.png" alt="">
                            </div>
                            <div class="tptestimonial__content">
                                <p>"Tôi cũng thích việc có thể chọn các sản phẩm chính <br/> trong các bao giấy nâu và bình thủy tinh ở khu vực không chất thải, <br/>nhằm mục đích giảm nhựa và cũng tiện lợi hơn."</p>
                                <div class="tptestimonial__rating" style="margin-bottom:5px;">
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                    <a href="#"><i class="icon-star_outline1"></i></a>
                                </div>
                                <h4 class="tptestimonial__title">Jackson Roben</h4>
                                <span class="tptestimonial__avata-position">Thiết Kế Web tại Blueskytechco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
              
                <div class="tptestimonial-arrow  d-md-block">
                    <button class="testi-arrow tptestimonial-arrow-left swiper-button-disabled swiper-button-next"  tabindex="-1" aria-label="Slide trước" aria-controls="swiper-wrapper-396bb5bddafbd292" aria-disabled="true"><i class="icon-chevron-left"></i></button>
                    <button class="testi-arrow tptestimonial-arrow-right swiper-button-disabled swiper-button-prev" tabindex="-1" aria-label="Slide tiếp theo" aria-controls="swiper-wrapper-396bb5bddafbd292" aria-disabled="true"><i class="icon-chevron-right"></i></button>
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </swiper>
            </div>
      
    </section>
    
</template>
<style scoped>
.testimonial__shape img {
    position: absolute;
}
.testimonial__shape-one {
    top: -25px;
    left: 230px;
    animation: slider-anim 2s infinite linear alternate;
}
.testimonial__shape-two {
    top: -85px;
    right: 335px;
    animation: up-down 3s infinite linear alternate;
}
.testimonial__shape-three {
    bottom: -440px;
    left: 420px;
    animation: up-down 2.5s infinite linear alternate;
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.tptestimonial__avata img {
    height: 70px;
    width: 70px;
    border-radius: 50px;
}
.tptestimonial__content p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    padding-bottom: 5px;
}   
.tptestimonial__rating {
    color: var(--tp-text-1);
}
.tptestimonial__rating a {
    margin: 0 3px;
}
.icon-star_outline1:before {
    color:#FFBD13;
    content: "\f005";
    font: normal normal normal 14px/1 FontAwesome;
}
.tptestimonial__title {
    font-weight: 700;
    font-size: 13px;
    color: var(--tp-heading-primary);
    text-transform: uppercase;
    margin-bottom: 0;
}
.testi-arrow.tptestimonial-arrow-left {
    position:absolute;
    left: 550px;
}
.testi-arrow i {
    height: 50px;
    width: 50px;
    background-color: var(--tp-heading-secondary);
    opacity: 0.3;
    line-height: 50px;
    border-radius: 50%;
    font-size: 14px;
    color: var(--tp-common-white);
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    transition:all 0.2s;

}
.icon-chevron-left:before {
    margin-left:4px;
    content: "\f054";
    font: normal normal normal 14px/1 FontAwesome;
}
.testi-arrow.tptestimonial-arrow-right {
    position:absolute;
    right: 250px;
    left: 0 auto;
}
.tptestimonial-arrow{
    position:absolute;
    z-index:999;
    left:40%;
    top:40%;
}

.icon-chevron-right:before {
    content: "\f053";
    margin-right:4px;
    font: normal normal normal 14px/1 FontAwesome;
}
.testi-arrow i:hover {
    opacity: 1;
}   

@media screen and (max-width: 768px) {
    .tptestimonial-arrow {
      display: none;
    }
    .testimonial__shape img{
        display:none;
    }
  }

</style>