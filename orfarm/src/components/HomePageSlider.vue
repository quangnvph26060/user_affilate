<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade } from 'swiper/modules';
const options = ref({
  navigation: {
    prevEl: '.tpslider__arrow-prv',
    nextEl: '.tpslider__arrow-nxt'
  }
});
</script>

<template>
    <section class="slider-area tpslider__home-3 tpslider-delay grey-bg slider-three">
        <swiper  :slides-per-view="1" :space-between="20" :autoplay="true" :modules="[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade ]"  :loop="true" v-bind="options" class="slider-active p-relative">
            <swiper-slide>
                    <div class="tpslider grey-bg">
                        <div class="container">
                            <div class="row align-items-center" style="margin-left:4px;">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                                    <div class="tpslider__content text-center slider-three-content-two">
                                        <span class="tpslider__sub-title mb-15">Các Ưu Đãi Hàng Đầu</span>
                                        <h2 class="tpslider__title mb-25">Ưu Đãi Hấp Dẫn <br> Phục Hồi Sức Khỏe</h2>
                                        <p>Bề ngoài quan trọng. Cuộn rau cuốn Việt Nam tươi của chúng tôi <br> không chỉ ngon mà còn tuyệt vời hơn nữa.</p>
                                        <div class="tpslider__btn">
                                            <a class="tp-btn" href="shop-3.html">Mua Ngay</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                                    <div class="tpslider__thumb p-relative pt-50">
                                        <img class="tpslider__thumb-img tpslider__three" src="../assets/img/slider/slider-bg-7.png" alt="slider-bg">
                                        <div class="tpslider__shape d-none d-lg-block">
                                            <img class="three-shap-three" src="../assets/img/slider/slider-shape-5.png" alt="hình dạng">
                                            <img class="three-shap-four" src="../assets/img/slider/slider-shape-6.png" alt="hình dạng">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="tpslider grey-bg">
                        <div class="container">
                            <div class="row align-items-center" style="margin-left:4px;">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                                    <div class="tpslider__content text-center slider-three-content-two">
                                        <span class="tpslider__sub-title mb-15">Các Ưu Đãi Hàng Đầu</span>
                                        <h2 class="tpslider__title mb-25">Ưu Đãi Hấp Dẫn <br> Phục Hồi Sức Khỏe</h2>
                                        <p>Bề ngoài quan trọng. Cuộn rau cuốn Việt Nam tươi của chúng tôi <br> không chỉ ngon mà còn tuyệt vời hơn nữa.</p>
                                        <div class="tpslider__btn">
                                            <a class="tp-btn" href="shop-3.html">Mua Ngay</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                                    <div class="tpslider__thumb p-relative pt-50">
                                        <img class="tpslider__thumb-img tpslider__three" src="../assets/img/slider/slider-bg-7.png" alt="slider-bg">
                                        <div class="tpslider__shape d-none d-lg-block">
                                            <img class="three-shap-three" src="../assets/img/slider/slider-shape-5.png" alt="hình dạng">
                                            <img class="three-shap-four" src="../assets/img/slider/slider-shape-6.png" alt="hình dạng">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="tpslider__arrow d-none  d-xxl-block">
                <button class="tpsliderarrow tpslider__arrow-prv" tabindex="0" aria-label="Slide tiếp theo" aria-controls="swiper-wrapper-2c3686345fdfd0fc"><i class="icon-chevron-left"></i></button>
                <button class="tpsliderarrow tpslider__arrow-nxt" tabindex="0" aria-label="Slide trước" aria-controls="swiper-wrapper-2c3686345fdfd0fc"><i class="icon-chevron-right"></i></button>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
     
    </section>
    
</template>
<style scoped>
.tpslider__arrow{
    width:100%;
}
.icon-chevron-left{
    margin-left:95%;
}
.tpslider-delay:hover .tpsliderarrow {
    opacity: 1;
    visibility: visible;
}
@media only screen and (min-width: 1601px) and (max-width: 1700px) {
    .tpslider__arrow-nxt {
        right: 25px;
    }
}
.tpslider__arrow-nxt {
    left: auto;
    right: 100px;
}
@media only screen and (min-width: 1601px) and (max-width: 1700px) {
    .tpsliderarrow {
        left: 25px;
    }
}
.tpsliderarrow {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 100px;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
}
.tpslider__arrow-prv{
    right:100px;
}
.tpslider__arrow-nxt{
    left:100px;
}
.tpsliderarrow i {
    height: 60px;
    width: 60px;
    line-height: 60px;
    background-color: var(--tp-heading-secondary);
    border-radius: 50%;
    color: var(--tp-common-white);
    font-size: 18px;
    display: block;
    opacity: 0.5;
}
.icon-chevron-left:before {
    margin-left:4px;
    content: "\f054";
    font: normal normal normal 14px/1 FontAwesome;
}
.icon-chevron-right:before {
    content: "\f053";
    margin-right:4px;
    font: normal normal normal 14px/1 FontAwesome;
}
.slider-area{
    width:100vw;
    top:86px;
    position:relative;
    height: 600px;
    background-position: bottom;
    background-repeat: repeat;
    background-size: cover;
    z-index:1;
}
.three-shap-three {
    top: 120px;
    left: 20px;
}
.tpslider__shape img {
    position: absolute;
}
.three-shap-four {
    bottom: 300px;
    right: 65px;
    position: absolute;
}
.tpslider__sub-title {
    font-size: 16px;
    color: var(--tp-heading-secondary);
    text-transform: uppercase;
    font-weight: 500;
    display: block;
}
.tpslider__title {
    font-weight: 700;
    font-size: 65px;
    color: var(--tp-heading-primary);
    line-height: 1.02;
}
.slider-three .tpslider__title {
    font-size: 48px;
    letter-spacing: -0.3px;
    line-height: 1.05;
}
.tpslider__content p {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 60px;
}

/* Responsive */
@media (max-width: 767.98px) {
    .tpslider__sub-title{
        font-size:13px;
    }   
    .slider-three .tpslider__title{
        font-size:36px;
    }
    .tpslider__content p {
        font-size:18px;
    }
    .tpslider__content{
        margin-top:100px;
    }
    .slider-area{
        width:100vw;
        top:0px;
    }
}
</style>
