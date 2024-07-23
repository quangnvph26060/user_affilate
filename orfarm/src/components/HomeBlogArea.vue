<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
const options = ref({
  autoplay: {
    delay: 4000, 
    disableOnInteraction: false
  }
});
</script>

<template>
    <section class="blog-area pb-20 pt-50">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <div class="tpsection mb-15">
                        <h4 class="tpsection__title text-start brand-product-title">Các Tin Tức Mới Nhất</h4>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="tpproduct__all-item">
                        <a href="blog.html">Xem Tất Cả <i class="icon-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <swiper   :breakpoints="{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 20
                }
              }" :autoplay="options.autoplay" :modules="[Autoplay]"  v-bind="options" class=" tpblog-active">
    
                <swiper-slide>
                
                        <div class="tpblog__item">
                            <div class="tpblog__thumb fix">
                                <a href="blog-details.html"><img src="../assets/img/blog/blog-bg-1.jpg" alt=""></a>
                            </div>
                            <div class="tpblog__wrapper">
                                <div class="tpblog__entry-wap">
                                    <span class="cat-links"><a href="shop-details.html">Lối Sống</a></span>
                                    <span class="author-by"><a href="#">Admin</a></span>
                                    <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                                </div>
                                <h4 class="tpblog__title"><a href="blog-details.html">Cá Hồi Nướng Bơ Lành Mạnh Cho Cơ Thể</a></h4>
                            </div>
                        </div>
              
                    </swiper-slide>
                    <swiper-slide>
                        <div class="tpblog__item">
                            <div class="tpblog__thumb fix">
                                <a href="blog-details.html"><img src="../assets/img/blog/blog-bg-2.jpg" alt=""></a>
                            </div>
                            <div class="tpblog__wrapper">
                                <div class="tpblog__entry-wap">
                                    <span class="cat-links"><a href="shop-details.html">Hữu Cơ</a></span>
                                    <span class="author-by"><a href="#">Admin</a></span>
                                    <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                                </div>
                                <h4 class="tpblog__title"><a href="blog-details.html">Những Lợi Ích Tuyệt Vời Của Thịt Bò Tươi Sức Khỏe Cho Phụ Nữ</a></h4>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                  
                        <div class="tpblog__item">
                            <div class="tpblog__thumb fix">
                                <a href="blog-details.html"><img src="../assets/img/blog/blog-bg-3.jpg" alt=""></a>
                            </div>
                            <div class="tpblog__wrapper">
                                <div class="tpblog__entry-wap">
                                    <span class="cat-links"><a href="shop-details.html">Hữu Cơ</a></span>
                                    <span class="author-by"><a href="#">Admin</a></span>
                                    <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                                </div>
                                <h4 class="tpblog__title"><a href="blog-details.html">Cách Chọn Trái Cây & Hải Sản Tốt Cho Thai Kỳ</a></h4>
                            </div>
                       
                    </div>
                </swiper-slide>
                <swiper-slide>
                        <div class="tpblog__item">
                            <div class="tpblog__thumb fix">
                                <a href="blog-details.html"><img src="../assets/img/blog/blog-bg-4.jpg" alt=""></a>
                            </div>
                            <div class="tpblog__wrapper">
                                <div class="tpblog__entry-wap">
                                    <span class="cat-links"><a href="shop-details.html">Mua Sắm</a></span>
                                    <span class="author-by"><a href="#">Admin</a></span>
                                    <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                                </div>
                                <h4 class="tpblog__title"><a href="blog-details.html">Bữa Sáng Mùa Hè Cho Một Buổi Sáng Khỏe Mạnh Với Cà Chua</a></h4>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                
                        <div class="tpblog__item">
                            <div class="tpblog__thumb fix">
                                <a href="blog-details.html"><img src="../assets/img/blog/blog-bg-1.jpg" alt=""></a>
                            </div>
                            <div class="tpblog__wrapper">
                                <div class="tpblog__entry-wap">
                                    <span class="cat-links"><a href="shop-details.html">Lối Sống</a></span>
                                    <span class="author-by"><a href="#">Admin</a></span>
                                    <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                                </div>
                                <h4 class="tpblog__title"><a href="blog-details.html">Cá Hồi Nướng Bơ Lành Mạnh Cho Cơ Thể</a></h4>
                            </div>
                        </div>
              
                    </swiper-slide>
                    <swiper-slide>
                        <div class="tpblog__item">
                            <div class="tpblog__thumb fix">
                                <a href="blog-details.html"><img src="../assets/img/blog/blog-bg-2.jpg" alt=""></a>
                            </div>
                            <div class="tpblog__wrapper">
                                <div class="tpblog__entry-wap">
                                    <span class="cat-links"><a href="shop-details.html">Hữu Cơ</a></span>
                                    <span class="author-by"><a href="#">Admin</a></span>
                                    <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                                </div>
                                <h4 class="tpblog__title"><a href="blog-details.html">Những Lợi Ích Tuyệt Vời Của Thịt Bò Tươi Sức Khỏe Cho Phụ Nữ</a></h4>
                            </div>
                        </div>
                    </swiper-slide>

                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </swiper>
        </div>
    </section>    
</template>
<style scoped>
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
    font: normal normal normal 10px/1 FontAwesome;
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
.tpblog__thumb {
    border-radius: 10px 10px 0 0;
}
.tpblog__thumb img {
    width: 100%;
    -webkit-transition: all 1s ease-out 0s;
    -moz-transition: all 1s ease-out 0s;
    -ms-transition: all 1s ease-out 0s;
    -o-transition: all 1s ease-out 0s;
    transition: all 1s ease-out 0s;
}
.tpblog__wrapper {
    border-radius: 0 0 10px 10px;
    background-color: var(--tp-common-white);
    padding: 20px 28px 20px 30px;
}
.tpblog__entry-wap .cat-links a {
    color: var(--tp-heading-secondary);
}

.tpblog__entry-wap span {
    margin-right: 8px;
    padding-right: 10px;
    position: relative;
    display: inline-block;
    margin-bottom: 8px;
}
.tpblog__entry-wap span a{
    color:inherit;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
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
.tpblog__entry-wap span:last-child {
    margin-right: 0;
    padding-right: 0;
}
.tpblog__title {
   
    margin-bottom: 15px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-break: break-word;
}
.tpblog__title a{
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 18px;
    color: var(--tp-theme-1);
}
/* Responsive */
@media (max-width: 767.98px) {
    .tpsection{
        margin-bottom:0;
    }
}
</style>
