<script setup>
import { ref, watch } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import HeaderMobile from '@/components/HeaderMobile.vue';
import { useRoute } from 'vue-router';
import store from './stores/index.js';

const route = useRoute();
const isHomePage = ref(route.path === '/');
const isGrey = ref(route.path==='/shop-left-sidebar')
watch(route, () => {
  isHomePage.value = route.path === '/';
  isGrey.value = route.path === '/shop-left-sidebar';
});

// store.dispatch('getProduct');
</script>

<template>
  <HeaderMobile ></HeaderMobile>
  <Header :isHomePage="isHomePage" :key="route.fullPath"></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer :isHomePage="isHomePage" :isGrey="isGrey"></Footer>
</template>

<style scoped>
/* CSS cho App */
</style>
