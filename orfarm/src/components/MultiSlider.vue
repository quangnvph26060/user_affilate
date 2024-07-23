<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps, defineEmits,computed } from 'vue';

const props = defineProps({
  minThreshold: {
    type: Number,
    default: 0
  },
  maxThreshold: {
    type: Number,
    default: 1000
  },
  step: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  }
});
const maxValue = ref(props.max);
const minValue = ref(props.min);
const emit = defineEmits(['update:min', 'update:max']);
const instance = ref(null);

const updateValues = (min, max) => {
  emit('update:min', parseFloat(min));
  emit('update:max', parseFloat(max));
  minValue.value = parseFloat(min);
  maxValue.value = parseFloat(max);
};



onMounted(async () => {
  const ZBRangeSlider = (await import('@/assets/js/ZbRangeSlider.js')).default;

  const sliderElement = document.getElementById('my-slider');
  if (sliderElement) {
    instance.value = new ZBRangeSlider('my-slider');
    instance.value.onChange = (min, max) => updateValues(min, max);
    instance.value.setMinValue(props.min);
    instance.value.setMaxValue(props.max);
  } else {
    console.error('Slider element not found');
  }
});

onBeforeUnmount(() => {
  if (instance.value) {
    instance.value = null;
  }
});

watch(
  () => [props.min, props.max],
  ([newMin, newMax]) => {
    if (instance.value) {
      instance.value.setMinValue(newMin);
      instance.value.setMaxValue(newMax);
    }
  }
);

const formattedValue = computed(()=>{
    return `${minValue.value}$ - ${maxValue.value}$`;
})
</script>

<template>
  <div class="content">
    <div
      id="my-slider"
      :se-min="minThreshold"
      :se-max="maxThreshold"
      :se-step="step"
      :se-min-value="min"
      :se-max-value="max"
      class="slider"
    >
      <div class="slider-touch-left">
        <span></span>
      </div>
      <div class="slider-touch-right">
        <span></span>
      </div>
      <div class="slider-line">
        <span></span>
      </div>
    </div>
    <div class="price-filter mt-10"><input type="text" id="amount" :value="formattedValue">
    </div>
  </div>
</template>

<style>
.slider {
  display: block;
  position: relative;
  right:10px;
  height: 14px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 14px;
  width: 22px;
  padding: 2px;
  z-index: 2;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  height: 14px;
  width: 14px;
  background-color: var(--tp-common-white);
  border: 4px solid var(--tp-heading-secondary);
  border-radius: 50%;
  position:relative;
  top:10px;
  left:10px;
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 20px);
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: #f0f0f0;
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: var(--tp-heading-secondary);  
}
.price-filter input {
    outline: none;
    border: none;
    font-size: 14px;
    color: #4D5574;
    font-weight: 400;
    margin-top: 5px;
}
</style>
