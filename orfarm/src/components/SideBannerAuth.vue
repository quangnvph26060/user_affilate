<script setup>
import Banner from '@/assets/img/banner/login_banner.jpg';
</script>
<template>
    <div class="tpbanner__auth" data-background="../assets/img/banner/login_banner.jpg" :style="{ backgroundImage: `url(${Banner})` }"></div>
</template>
<style scoped>
.tpbanner__auth {
    height: 1000px;
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
  }
</style>
