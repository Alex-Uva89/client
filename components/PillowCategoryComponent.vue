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
          @click="selectCategoryOrSubcategory(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useCategoryStore } from '@/store/categoryStore'
  import { useProductStore } from '@/store/productStore'
  
  export default defineComponent({
    name: 'PillowCategoryComponent',
    setup() {
      const categoryStore = useCategoryStore()
      const { getCategories, getSubcategories, getFirstSubcategory } = useProductStore()
  
      const displayedCategories = computed(() => {
        return categoryStore.selectedCategory
          ? getSubcategories(categoryStore.selectedCategory)
          : getCategories
      })
  
      const selectCategoryOrSubcategory = (item: string) => {
        if (!categoryStore.selectedCategory) {
          categoryStore.setCategory(item)
          const firstSub = getFirstSubcategory(item)
          if (firstSub) categoryStore.setSubcategory(firstSub)
        } else {
          categoryStore.setSubcategory(item)
        }
      }
  
      const isSelected = (item: string) => {
        return categoryStore.selectedCategory === item || categoryStore.selectedSubcategory === item
      }
  
      return {
        categoryStore,
        displayedCategories,
        selectCategoryOrSubcategory,
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
      min-width: 120px;
      max-width: 300px;
      height: 40px;
      border-radius: 5px;
      background-color: var(--background);
      font-size: var(--font-size-medium);
  }
  
  .btn-selected {
      background-color: var(--primary);
      color: white;
  }

  .btn:has(img) {
    min-width: 30px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  </style>
  