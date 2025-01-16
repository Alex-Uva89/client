<template>
    <div>
        <button class="btn-filter" @click="showFilter = !showFilter">
            <img src="/assets/icons/filter.svg" class="icon-filter" alt="Icona per aprire la pagina filtri">
        </button>

        <div  class="filter-container" v-if="showFilter">
            <!-- HEADER -->
            <div class="filter-header">
                <img src="/assets/icons/annul.svg" alt="icona per chiudere la pagina filtri" class="icon-close" @click="showFilter = false">
                <div class="filter-header-content">
                    <h2 class="filter-header-title">Filtri</h2>
                    <div class="filter-header-buttons">
                        <button class="btn apply">Applica filtri</button>
                        <button class="btn reset" >Reset</button>
                    </div>
                </div>
                
            </div>
            <!-- FILTERS -->
            <div class="filter-content">
                <!-- ORDER BY  -->
                <pillow-filter title="Ordina per">
                    <button id="abc" class="btn mono" @click="activeFilterMono()">Alfabetico</button>
                    <button id="crescent" class="btn mono" @click="activeFilterMono()">Prezzo decrescente</button>
                    <button id="decrescent" class="btn mono" @click="activeFilterMono()">Prezzo crescente</button>
                </pillow-filter>
                
                <range-component :min="0" :max="600" @update:values="handleValues"  />

                <pillow-filter title="Colore">
                <button 
                    v-for="color in displayedColors" 
                    :key="color"
                    class="btn" 
                    @click="activeFilterMultiple(color, 'subcategory')"
                    :class="{ active: activeFilters.subcategory.includes(color) }"
                >
                    {{ color }}
                </button>
                <div class="filter-controls" v-if="uniqueColors.length > INITIAL_DISPLAY">
                    <div 
                        v-if="uniqueColors.length > displayLimits.subcategory"
                        class="show-toggle"
                        @click="loadMore('subcategory')"
                    >
                        Mostra di più
                    </div>

                    <div 
                        v-if="displayLimits.subcategory > INITIAL_DISPLAY" 
                        class="show-toggle"
                        @click="showLess('subcategory')"
                    >
                        Mostra meno
                    </div>
                    
                </div>
                </pillow-filter>

                <pillow-filter title="Provenienza">
                <button 
                    v-for="origin in displayedOrigins" 
                    :key="origin"
                    class="btn" 
                    @click="activeFilterMultiple(origin, 'origin')"
                    :class="{ active: activeFilters.origin.includes(origin) }"
                >
                    {{ origin }}
                </button>
                <div class="filter-controls" v-if="uniqueColors.length > INITIAL_DISPLAY">
                    <div 
                        v-if="uniqueColors.length > displayLimits.subcategory"
                        class="show-toggle"
                        @click="loadMore('subcategory')"
                    >
                        Mostra di più
                    </div>
                    
                    <div 
                        v-if="displayLimits.subcategory > INITIAL_DISPLAY" 
                        class="show-toggle"
                        @click="showLess('subcategory')"
                    >
                        Mostra meno
                    </div>
                    
                </div>
                </pillow-filter>

                <pillow-filter title="Vitigno">
                <button 
                    v-for="grape in displayedGrapes" 
                    :key="grape"
                    class="btn" 
                    @click="activeFilterMultiple(grape, 'grape')"
                    :class="{ active: activeFilters.grape.includes(grape) }"
                >
                    {{ grape }}
                </button>
                <div class="filter-controls" v-if="uniqueColors.length > INITIAL_DISPLAY">
                    <div 
                        v-if="uniqueColors.length > displayLimits.subcategory"
                        class="show-toggle"
                        @click="loadMore('subcategory')"
                    >
                        Mostra di più
                    </div>
                    
                    <div 
                        v-if="displayLimits.subcategory > INITIAL_DISPLAY" 
                        class="show-toggle"
                        @click="showLess('subcategory')"
                    >
                        Mostra meno
                    </div>
                    
                </div>
                </pillow-filter>

                <pillow-filter title="Annata">
                <button 
                    v-for="vintage in displayedVintages" 
                    :key="vintage"
                    class="btn" 
                    @click="activeFilterMultiple(vintage, 'vintage')"
                    :class="{ active: activeFilters.vintage.includes(vintage) }"
                >
                    {{ vintage }}
                </button>
                <div class="filter-controls" v-if="uniqueColors.length > INITIAL_DISPLAY">
                    <div 
                        v-if="uniqueColors.length > displayLimits.subcategory"
                        class="show-toggle"
                        @click="loadMore('subcategory')"
                    >
                        Mostra di più
                    </div>
                    
                    <div 
                        v-if="displayLimits.subcategory > INITIAL_DISPLAY" 
                        class="show-toggle"
                        @click="showLess('subcategory')"
                    >
                        Mostra meno
                    </div>
                    
                </div>
                </pillow-filter>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '~/store/productStore';
import PillowFilter from '/components/filters/PillowFilterComponent.vue';
import RangeComponent from '/components/filters/RangeComponent.vue';

const productStore = useProductStore();
const INITIAL_DISPLAY = 6;
const LOAD_MORE_COUNT = 6;

const showFilter = ref(false);

const activeFilters = ref({
  subcategory: [],
  origin: [],
  grape: [],
  vintage: []
});

const displayLimits = ref({
  subcategory: INITIAL_DISPLAY,
  origin: INITIAL_DISPLAY,
  grape: INITIAL_DISPLAY,
  vintage: INITIAL_DISPLAY
});

// Computed per i valori unici
const uniqueColors = computed(() => [...new Set(productStore.products.map(p => p.subcategory))]);
const uniqueOrigins = computed(() => [...new Set(productStore.products.map(p => p.origin))]);
const uniqueGrapes = computed(() => [...new Set(productStore.products.map(p => p.grape))]);
const uniqueVintages = computed(() => [...new Set(productStore.products.map(p => p.vintage))]);

// Computed per gli elementi visualizzati
const displayedColors = computed(() => uniqueColors.value.slice(0, displayLimits.value.subcategory));
const displayedOrigins = computed(() => uniqueOrigins.value.slice(0, displayLimits.value.origin));
const displayedGrapes = computed(() => uniqueGrapes.value.slice(0, displayLimits.value.grape));
const displayedVintages = computed(() => uniqueVintages.value.slice(0, displayLimits.value.vintage));

console.log(displayedColors);

const loadMore = (filterType) => {
  displayLimits.value[filterType] += LOAD_MORE_COUNT;
};

const showLess = (filterType) => {
  displayLimits.value[filterType] = INITIAL_DISPLAY;
};

const activeFilterMultiple = (value, filterType) => {
  if (activeFilters.value[filterType].includes(value)) {
    activeFilters.value[filterType] = activeFilters.value[filterType].filter(v => v !== value);
  } else {
    activeFilters.value[filterType].push(value);
  }
  updateFilteredProducts();
};

const updateFilteredProducts = () => {
  let filteredProducts = productStore.products;
  
  Object.entries(activeFilters.value).forEach(([filterType, values]) => {
    if (values.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        values.includes(product[filterType])
      );
    }
  });

  productStore.filteredProductsState = filteredProducts;
};
</script>


<style scoped>

/* button open page filter */

.btn-filter {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
}

.icon-filter {
    width: 90%;
    height: 90%;
}

/* page filter */

.filter-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    border: 1px solid #ccc;
    z-index: 1;
    overflow-y: hidden;
}

/* header */

.filter-header {
    background-color: var(--primary);
    display: flex;
    height: 64px;
    align-items: center;
}

.icon-close {
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: 10px;
}

.filter-header-content {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: start;
}

.filter-header-title {
    font-family: var(--font-primary);
    color: var(--label);
    font-size: var(--font-size-xlarge);
    font-weight: var(--font-weight-secondary);
    margin-left: 20px;
}

/* buttons */

.filter-header-buttons{
    position: absolute;
    right: 10px;
    display: flex;
    max-width: 2000px; 
    gap: 5     px;
}

.btn {
    background-color: trasparent;
    border: 1px solid var(--primary);
    color: var(--text);
    width: calc(100% / 3 - 10px);
    margin-left: 5px;
    padding: 10px 12px;
    border-radius: 5px;
    border: 1px solid var(--primary);
    font-size: var(--font-size-small);

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

button.btn:not(.apply , .reset) {
    margin-bottom: 15px;
}

.btn.active {
    background-color: var(--primary);
    color: var(--label);
}

.filter-header .btn{
    color: var(--label);
    border: none;
    box-shadow: 0 0 2px var(--label); 
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-tertiary);
    width: 100px;
    background-color: transparent;
    margin: 0 5px;
}

/* content */

.filter-content {
    padding: 20px;
    height: calc(100% - 64px);
    overflow-y: auto;
    padding-bottom: 20px;
}

/* show more */

.show-more {
  cursor: pointer;
  color: var(--primary);
  font-size: 0.9em;
  margin-top: 8px;
  text-decoration: underline;
  padding: 0.5rem;
}

.show-more:hover {
  color: var(--label);
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 8px;
}

.show-toggle {
  cursor: pointer;
  color: #007bff;
  font-size: 0.9em;
  text-decoration: underline;
  padding: 0.5rem;
}

.show-toggle:hover {
  color: #0056b3;
}

</style>