<script setup>
import bannerImage4 from '@/assets/img/banner/banner-4.jpg';
import bannerImage5 from '@/assets/img/banner/banner-5.jpg';
import bannerImage6 from '@/assets/img/banner/banner-6.jpg';
</script>

<template>
   <section class="banner-area grey-bg">
      <div class="container">
          <div class="sections__wrapper white-bg pt-20 pl-50 pr-50 pb-30">
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="tpbanner__item mb-30">
                          <a href="shop-2.html">
                              <div class="tpbanner__text tpbanner__bg" data-background="../assets/img/banner/banner-4.jpg" :style="{ backgroundImage: `url(${bannerImage4})` }">
                                  <span class="tpbanner__sub-title mb-20">Các ưu đãi hàng đầu</span>
                                  <h4 class="tpbanner__title mb-20">Hải sản <br> Tươi & Ngon</h4>
                                  <p>Tự nhiên, giàu dinh dưỡng</p>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="tpbanner__item mb-30">
                          <a href="shop-2.html">
                              <div class="tpbanner__text tpbanner__bg" data-background="../assets/img/banner/banner-5.jpg" :style="{ backgroundImage: `url(${bannerImage5})` }">
                                  <span class="tpbanner__sub-title mb-20">Ưu đãi cuối tuần</span>
                                  <h4 class="tpbanner__title mb-20">Rau củ <br> Tốt nhất cho gia đình</h4>
                                  <p>Sản phẩm chất lượng cao</p>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="tpbanner__item mb-30">
                          <a href="shop-2.html">
                              <div class="tpbanner__text tpbanner__bg" data-background="../assets/img/banner/banner-6.jpg" :style="{ backgroundImage: `url(${bannerImage6})` }">
                                  <span class="tpbanner__sub-title mb-20">Bán chạy nhất</span>
                                  <h4 class="tpbanner__title mb-20">Thịt tươi <br> Tươi & Ngon</h4>
                                  <p>Giới hạn thời gian: Chỉ trực tuyến!</p>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
</template>
<style scoped>
.tpbanner__bg {
    background-position: right;
    background-size: cover;
    padding: 42px 20px 40px 40px;
    border-radius: 10px;
    background-position: calc(100% - 1px) center;
}
.tpbanner__bg .tpbanner__sub-title {
    color: var(--tp-theme-2);
}
.tpbanner__sub-title {
    color: var(--tp-text-5);
    font-weight: 500;
    font-size: 14px;
    display: block;
    text-transform: uppercase;
}
.tpbanner__bg .tpbanner__title {
    color: var(--tp-heading-primary);
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
}
.tpbanner__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.3px;
    color: var(--tp-common-white);
}
.tpbanner__bg p {
    font-size: 16px;
    color: var(--tp-heading-primary);
    margin-bottom: 0;
}
</style>
