<template>
    <div class="price-section">
        <h3 class="range-title">Prezzo</h3>
        <div class="dual-range-container">
          <div class="range-slider">
            <div class="slider-track"></div>
            <input
              type="range"
              :min="min"
              :max="max"
              v-model="minValue"
              @input="updateValues"
              class="range-input"
            />
            <input
              type="range"
              :min="min"
              :max="max"
              v-model="maxValue"
              @input="updateValues"
              class="range-input"
            />
          </div>
          <div class="range-values">
            <span>
                <p>Min</p>
                <div class="min-value">{{ minValue }}</div>
            </span>

            <span>
                <p>Max</p>
                <div class="max-value">{{ maxValue }}</div>
            </span>
          </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue'
  
  const props = defineProps({
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  })
  
  const minValue = ref(props.min)
  const maxValue = ref(props.max)
  
  const updateValues = () => {
    if (Number(minValue.value) > Number(maxValue.value)) {
      const temp = minValue.value
      minValue.value = maxValue.value
      maxValue.value = temp
    }
    updateSliderTrack()
  }
  
  const updateSliderTrack = () => {
    const sliderTrack = document.querySelector('.slider-track')
    const percent1 = ((minValue.value - props.min) / (props.max - props.min)) * 100
    const percent2 = ((maxValue.value - props.min) / (props.max - props.min)) * 100
    sliderTrack.style.background = `linear-gradient(to right, #e0e0e0 ${percent1}%, var(--primary) ${percent1}%, var(--primary) ${percent2}%, #e0e0e0 ${percent2}%)`
  }
  
  onMounted(() => {
    updateSliderTrack()
  })
  
  watch([minValue, maxValue], ([newMin, newMax]) => {
    emit('update:values', { min: Number(newMin), max: Number(newMax) })
  })
  
  const emit = defineEmits(['update:values'])
  </script>
  
  <style scoped>

    .price-section {
        width: 100%;
        margin:  20px 0;
    }

    .range-title {
        font-family: var(--font-primary);
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-secondary);
        color: var(--text);
        margin-bottom: 10px;
    }

  .dual-range-container {
    width: 100%;
    padding: 20px 0;
  }
  
  .range-slider {
    position: relative;
    width: 80%;
    height: 5px;
    margin: 0 auto;
  }
  
  .slider-track {
    position: absolute;
    width: 100%;
    height: 5px;
    background: #e0e0e0;
    border-radius: 3px;
  }
  
  .range-input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
  }
  
  .range-input::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--primary);
    pointer-events: auto;
    -webkit-appearance: none;
    cursor: pointer;
    margin-top: 0;
  }
  
  .range-input::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--primary);
    pointer-events: auto;
    cursor: pointer;
    border: none;
  }
  
  .range-values {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  } 

  .range-values span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  
  .min-value,
  .max-value {
    width: 50px;
    padding: 5px 10px;
    background: var(--label);
    border-radius: 4px;
    text-align: center;
  }
  </style>
  