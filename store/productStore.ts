import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getDrinks } from '~/services/api/drinks';
import { useCartStore } from './cartStore';
import { format } from 'mysql2';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    searchQuery: ref(''),
    filteredProductsState: ref([]),
    selectedCategory: null,
    selectedSubcategory: null,
  }),

  getters: {
    getCategories: (state) => {
      return [...new Set(state.products.map(p => p.category))];
    },
    
    filteredProducts: (state) => {
      console.log('STATE:', state)
      if (!state.searchQuery) return state.products;
      const query = state.searchQuery.toLowerCase();
      return state.products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    },

    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter(product => product.category_id === categoryId);
    }
  },

  actions: {
    async fetchProducts() {
      try {
        const drinks = await getDrinks()
        this.products = drinks.map((drink: any) => ({
          id: drink.id,
          name: drink.name,
          category_id: drink.category_id,
          subcategory: drink.color || 'N/A',
          price: drink.price,
          producer: drink.producer || '',
          vintage: drink.vintage || '',
          grape: drink.grape_variety || '',
          degrees: parseFloat(drink.degrees) || 0,
          image: drink.image || '/images/CAMBUSA.png',
          is_active: drink.is_active,
          description: drink.instructions || '',
          origin: drink.origin || '',
          production_method: drink.production_method || '',
          flavour: drink.flavour || '',
        }))
      } catch (error) {
        console.error('Errore nel recupero dei prodotti:', error)
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
      this.updateFilteredProducts();
    },

    updateFilteredProducts() {
      const query = this.searchQuery.toLowerCase();
      this.filteredProductsState = !query 
        ? this.products 
        : this.products.filter((product) =>
            product.name.toLowerCase().includes(query)
          );
    },

    addToCart(productId: number) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        const cartStore = useCartStore();
        cartStore.addProductToCart(product);
      }
    }
  },
});
