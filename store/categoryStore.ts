import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    selectedCategory: null as string | null,
    selectedSubcategory: null as string | null
  }),
  actions: {
    setCategory(category: string) {
    //   console.log("setCategory", category)
      this.selectedCategory = category
      this.selectedSubcategory = null
    },
    setSubcategory(subcategory: string) {
        // console.log("setSubcategory", subcategory)
      this.selectedSubcategory = subcategory
    },
    resetCategory() {

      this.selectedCategory = null
      this.selectedSubcategory = null
    //   console.log("resetCategory", this.selectedSubcategory)
    //   console.log("resetCategory", this.selectedCategory)
    }
  }
})





