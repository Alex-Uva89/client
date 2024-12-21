<template>
    <div>
      <div class="categories-container">
          <button 
            class="btn" 
            :class="{ 'btn-selected': !categoryStore.selectedCategory }"
            @click="categoryStore.resetCategory"
          >
            {{ categoryStore.selectedCategory ? '← Indietro' : 'TUTTI' }}
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
      display: flex;
      justify-content: start;
      flex-wrap: nowrap;
      gap: 10px;
      margin: 20px;
  }
  
  .btn {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      background-color: var(--background);
      font-size: var(--font-size-medium);
  }
  
  .btn-selected {
      background-color: var(--primary);
      color: white;
  }
  </style>
  