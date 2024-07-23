<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isSearchBarOpened: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['closeSearchBar']);

</script>
<template>
    <div class="tpsearchbar tp-sidebar-area" :class="{'tp-searchbar-opened':isSearchBarOpened}">
        <button class="tpsearchbar__close" @click="$emit('closeSearchBar')"><i class="icon-x"></i></button>
        <div class="search-wrap text-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 pt-100 pb-100">
                        <h2 class="tpsearchbar__title">Bạn Đang Tìm Kiếm Gì?</h2>
                        <div class="tpsearchbar__form">
                            <form action="#">
                                <input type="text" name="search" placeholder="Tìm sản phẩm...">
                                <button class="tpsearchbar__search-btn"><i class="fa fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div class="search-body-overlay" :class="{ 'opened': isSearchBarOpened }" @click="$emit('closeSearchBar')" ></div>
</template>
<style scoped>

.tpsearchbar.tp-searchbar-opened {
    transform: translateY(0);
}

.tpsearchbar {
    background-color: var(--tp-common-white);
    text-align: start;
    position: fixed;
    right: 0;
    left: 0;
    margin: 0 auto;
    top: 0;
    width: 100%;
    min-height: 320px;
    box-shadow: rgba(5, 13, 54, 0.05) 5px 15px 30px 0px;
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 9999999;
    padding: 30px;
    transform: translateY(-100%);
}
.search-body-overlay.opened {
    opacity: 1;
    visibility: visible;
}

.search-body-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out 0s;
}
.tpsearchbar__title {
    font-size: 18px;
    color: var(--tp-theme-1);
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
    margin-bottom: 35px;
}
.tpsearchbar__form input {
    width: 100%;
    height: 45px;
    border: 1px solid var(--tp-border-1);
    padding: 10px 45px 10px 20px;
    color: var(--tp-theme-1);
    font-size: 16px;
    font-weight: 500;
}
.tpsearchbar__form {
    position: relative;
}
.tpsearchbar__search-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    color: var(--tp-theme-1);
    font-size: 16px;
}
.tpsearchbar__close {
    color: var(--tp-theme-1);
    font-size: 30px;
    background: var(--tp-theme-secondary);
    width: 35px;
    height: 35px;
    position: absolute;
    top: 15%;
    right: 15%;
}
.icon-x:before {
    content: '\58';
    font: normal normal normal 25px/1 FontAwesome;
}
</style>