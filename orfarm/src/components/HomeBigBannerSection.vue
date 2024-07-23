<script setup>
import bannerImage from '@/assets/img/banner/tpbanner-1.jpg';
</script>

<template>
    <section class="tpbanner-area grey-bg">
        <div class="container">
            <div class="sections__wrapper white-bg pl-50 pr-50 pt-30">
                <div class="row">
                    <div class="col-12">
                        <div class="tpbannertwo text-center pt-40 pb-45 tpbannertwo__bg" data-background="../assets/img/banner/tpbanner-1.jpg" :style="{ backgroundImage: `url(${bannerImage})` }">
                            <span class="tpbannertwo__sub-title" style="margin-bottom:5px;">Món Salad</span>
                            <h5 class="tpbannertwo__title mb-30">Thực Phẩm Tươi Sạch <br> Đặc Biệt Giảm Giá</h5>
                            <p>Đừng bỏ lỡ các chương trình khuyến mãi hiện tại của chúng tôi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>
<style scoped>
.tpbannertwo__sub-title {
    text-transform: uppercase;
    color: var(--tp-text-1);
    font-weight: 500;
    font-size: 14px;
    display: inline-block;
}
.tpbannertwo__title {
    color: var(--tp-common-white);
    font-weight: 700;
    font-size: 24px;
}
.tpbannertwo p {
    color: var(--tp-common-white);
    font-weight: 400;
    font-size: 16px;
}
.tpbannertwo__bg {
    background-repeat: no-repeat;
    border-radius: 10px;
}
/* Responsive */
@media (max-width: 767.98px) {
    .tpbannertwo p {
       padding:0 15px;
}
}
</style>


