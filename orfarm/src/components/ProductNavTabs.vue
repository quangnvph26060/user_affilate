<template>
    <section class="tpbanner-area grey-bg">
        <div class="container">
            <div class="sections__wrapper white-bg pl-30 pr-30 ">
                <div class="">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="tpnavtab__area tpnavtab__newitem">
                           <nav>
                              <div class="nav tp-nav-tabs" id="nav-tab" role="tablist">
                              <button class="nav-link" id="nav-arrivals-tab" data-bs-toggle="tab" data-bs-target="#nav-arrivals" type="button" role="tab" aria-controls="nav-arrivals" aria-selected="false" tabindex="-1">Hàng mới về</button>
                              <button class="nav-link active" id="nav-features-tab" data-bs-toggle="tab" data-bs-target="#nav-features" type="button" role="tab" aria-controls="nav-features" aria-selected="true">Tính năng</button>
                              <button class="nav-link" id="nav-best-tab" data-bs-toggle="tab" data-bs-target="#nav-best" type="button" role="tab" aria-controls="nav-best" aria-selected="false" tabindex="-1">Giá tốt</button>
                              </div>
                           </nav>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="tpproduct__all-item">
                            <router-link to="/product-list">
                                Xem tất cả <i class="icon-chevron-right"></i>
                            </router-link>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-lg-12">
                        <div class="tpnavtab__area pb-40 main-product-nav">
                           <div class="tab-content" id="nav-tabContent-tp">
                                <div class="tab-pane fade show active" id="nav-arrivals" role="tabpanel" aria-labelledby="nav-arrivals-tab" tabindex="0">
                                    <ProductSlider title='' option='' fullscreen='' :hasProcess="true" :slideOnShow='5' :products='data'/>
                                </div>
                                <div class="tab-pane fade" id="nav-features" role="tabpanel" aria-labelledby="nav-features-tab" tabindex="0">
                                    <ProductSlider title='' option='' fullscreen='' :hasProcess="true" :slideOnShow='5' :products='data'/>
                                </div>
                                <div class="tab-pane fade" id="nav-best" role="tabpanel" aria-labelledby="nav-best-tab" tabindex="0">
                                    <ProductSlider title='' option='' fullscreen='' :hasProcess="true" :slideOnShow='5' :products='data'/>
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
<script setup>
import ProductSlider from '@/components/ProductSlider.vue'
import Product from '../api/product/product.js'
import { ref, computed, onMounted } from 'vue'
const {getProduct, responseProduct, findProduct, searchProduct} = Product();
const data = ref([]);
onMounted(async()=>{
  await getProduct();
  data.value =  responseProduct.data;
 
})
</script>
<style >
.tpproduct__all-item a{
    font-size: 15px;
    font-weight: 400;
    color: var(--tp-text-3) !important;
    padding: 44px;
}

.nav-link{
    font-family: var(--tp-ff-heading);
    font-weight: 700;
    font-size: 22px;
    line-height: 38px;
    color: var(--tp-heading-primary);
    letter-spacing: -.3px;
}
.main-product-nav .main-product{
    padding-left: 1px !important;
    padding-right: 1px !important;
}
.main-product-nav .main-product .brand-product-title-container .col-md-6{
    display: none !important;
}
.main-product-nav .weekly-product-area  {
    background: white;
}
</style>