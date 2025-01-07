import { defineStore } from 'pinia'
import { getCategories } from '~/services/api/categories'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    selectedCategory: null,
    selectedSuperCategory: null,
    categories: []
  }),

  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories.find(category => category.id === id)
    },
    
    getActiveCategories: (state) => {
      return state.categories.filter(category => category.is_active)
    }
  },

  actions: {
    setCategory(category) {
      this.selectedSuperCategory = category['category'].super_category_id;
      this.selectedCategory = category
    },

    resetCategory() {
      this.selectedCategory = null
    },

    async fetchCategories() {
      try {
        const data = await getCategories()
        this.categories = data  
      } catch (error) {
        console.error('Errore nel caricamento delle categorie:', error)
      }
    }
  }
})
