<script setup>
const props = defineProps({
  breadCrumbPath: {
    type: Array,
    required: true
  },
  isGrey:{
    type:Boolean,
  }
})
</script>

<template>
  <div class="breadcrumb__area pt-5x pb-5x" :class="{'grey-bg' : isGrey}">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-breadcrumb__content">
            <div class="tp-breadcrumb__list" >
              <span v-for="(breadcrumb, index) in breadCrumbPath" :key="index">
                <span v-if="breadcrumb.route" class="tp-breadcrumb__active"
                  ><a :href="breadcrumb.route">{{ breadcrumb.name }}</a></span
                >
                <span v-if="breadcrumb.route"  class="dvdr">/</span>
                <span v-else>{{ breadcrumb.name }}</span>
              </span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.breadcrumb__area{
    position: relative;
}
.tp-breadcrumb__content {
    padding: 8px 0;
}
.tp-breadcrumb__list span {
    font-size: 14px;
    color: var(--tp-theme-1);
    line-height: 30px;
    font-weight: 400;
}

.tp-breadcrumb__active {
    color: var(--tp-text-3) !important;
}
.tp-breadcrumb__active > a{
    color: inherit;
}

.tp-breadcrumb__list .dvdr {
    color: var(--tp-text-3);
    transform: translateY(0px);
    display: inline-block;
    padding: 0 5px;
}

.tp-breadcrumb__list span {
    font-size: 14px;
    color: var(--tp-theme-1);
    line-height: 30px;
    font-weight: 400;
}

.tp-breadcrumb__active a:hover {
    color: var(--tp-heading-secondary);
}

/* Responsive */
@media (max-width: 767.98px) {
  .tp-breadcrumb__list span{
    font-size:14px;
  }
}
</style>
