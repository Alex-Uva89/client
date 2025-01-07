<template>
    <div>
      <div class="categories-container">
          <button 
            class="btn" 
            :class="{ 'btn-selected': !categoryStore.selectedCategory }"
            @click="categoryStore.resetCategory"
          >
          <template v-if="categoryStore.selectedCategory">
            <!-- Icona SVG per "Indietro" -->
            <img src="@/assets/icons/back_red.svg" alt="Indietro" />
          </template>
          <template v-else>
            TUTTI
          </template>
          </button>
        <button 
          v-for="item in displayedCategories" 
          :key="item" 
          class="btn"
          :class="{ 'btn-selected': isSelected(item) }"
          @click="selectCategory(item)"
        >
          {{ item['category'].name }}
        </button>
      </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useCategoryStore } from '@/store/categoryStore'
import { useProductStore } from '@/store/productStore'

export default defineComponent({
  name: 'PillowCategoryComponent',
  setup() {
    const categoryStore = useCategoryStore()
    const productStore = useProductStore()

    const displayedCategories = computed(() => {
      return categoryStore.categories.map((category) => ({
        category
    }))
})

    const selectCategory = (item: string) => {
      categoryStore.setCategory(item)
      productStore.fetchProducts()
    }

    const isSelected = (item: string) => {
      if (!categoryStore.selectedCategory) {
        return false
      } else {
        return categoryStore.selectedCategory['category'].name === item['category'].name
      }
    }

    onMounted(() => {
        productStore.fetchProducts(),
        categoryStore.fetchCategories()
    })


    return {
      categoryStore,
      displayedCategories,
      selectCategory,
      isSelected
    }
  }
})
</script>
  

  
  <style scoped>
  .categories-container {
      max-width: 1000px;
      display: flex;
      justify-content: start;
      flex-wrap: nowrap;
      gap: 10px;
      padding: 0 20px;
      margin: 20px auto;
      overflow-x: scroll;
      scrollbar-width: none;
  }
  
  .btn {
      min-width: fit-content;
      max-width: 300px;
      padding: 0 10px;
      height: 40px;
      border-radius: 5px;
      background-color: var(--background);
      font-size: var(--font-size-medium);
  }
  
  .btn-selected {
      background-color: var(--primary);
      color: white;
  }

  button:has(img) {
      width: 20px;
      height: 30px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .btn img{
      width: 100%;
      height: 100%;
  }
  </style>
  