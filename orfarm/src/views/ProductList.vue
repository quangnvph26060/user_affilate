<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import ProductItem from '@/components/ProductItem.vue';
import Product from '../api/product/product.js'
import { defineProps,onMounted,ref, reactive } from 'vue';
const {getProduct, responseProduct, findProduct, searchProduct} = Product();
const data = ref([]);
onMounted(async()=>{
  await getProduct();
  data.value =  responseProduct.data;
  console.log(data.value);
 
})

const breadCrumbPath = [{ route: '/product-list', name: 'Trang chủ' }, { name: 'Danh sách sản phẩm' }];

</script>
<template>
    <BreadCrumb :breadCrumbPath="breadCrumbPath" class="custom-breadcrumb" />
    <section class="track-area grey-bg pb-40">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="product__filter-content mb-30">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="product__item-count">
                                    <span>Đang hiển thị 1 - 18 và 40 Sản phẩm</span>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div
                                    class="product__navtabs d-flex justify-content-end align-items-center main-mobi-option">
                                    <div class="tp-shop-selector">
                                        <select id="sort-options" class="form-select">
                                            <option value="default">Default sorting</option>
                                            <option value="show14">Show 14</option>
                                            <option value="show08">Show 08</option>
                                            <option value="show20">Show 20</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade whight-product active show" id="nav-popular" role="tabpanel"
                    aria-labelledby="nav-popular-tab">
                    <div class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                        <div class="col" v-for="(item, index) in data" :key="index">
                            <ProductItem :products="item" />
                        </div>
                    </div>
                </div>
                <div class="basic-pagination text-center mt-35">
                    <nav>
                        <ul>
                            <li>
                                <span class="current">1</span>
                            </li>
                            <li>
                                <a href="blog.html">2</a>
                            </li>
                            <li>
                                <a href="blog.html">3</a>
                            </li>
                            <li>
                                <a href="blog.html">
                                    <i class="icon-chevrons-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.whight-product .tpproduct:hover .tpproduct__hover-text {
    border: 1px solid #EBEFF4;
    border-top: none;
    background-color: var(--tp-common-white);
    position: absolute;
    z-index: 11;
}
@media(max-width:768px) {
    .main-mobi-option {
        justify-content: flex-start !important;
    }
}

.grey-bg {
    background: var(--tp-grey-1);
}

.custom-breadcrumb {
    background: var(--tp-grey-1);
}

.product__filter-content {
    background-color: var(--tp-common-white);
    border-radius: 10px;
    padding: 7px 20px;
}

.tp-shop-selector .nice-select {
    border: none;
}

.tp-shop-selector .nice-select .list {
    border-radius: 0;
    box-shadow: none;
    border: none;
    width: 100%;
}

.nice-select .list {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
    box-sizing: border-box;
    margin-top: 4px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(0.75) translateY(-21px);
    -ms-transform: scale(0.75) translateY(-21px);
    transform: scale(0.75) translateY(-21px);
    -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    z-index: 9;
}

.nice-select {
    -webkit-tap-highlight-color: transparent;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px #e8e8e8;
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    display: block;
    float: left;
    font-family: inherit;
    font-size: 14px;
    font-weight: normal;
    height: 42px;
    line-height: 40px;
    outline: none;
    padding-left: 18px;
    padding-right: 30px;
    position: relative;
    text-align: left !important;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto;
}

.tp-shop-selector {
    border: none;
}
</style>
