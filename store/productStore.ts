import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getDrinks } from '~/services/api/drinks';
import { useCartStore } from './cartStore';
import { useCategoryStore } from './categoryStore';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    searchQuery: '',
    filteredProductsState: [],
    selectedCategory: null,
    selectedSubcategory: null,
    activeFilters: {
      subcategory: [],
      origin: [],
      grape: [],
      vintage: [],
      priceRange: { min: 0, max: 600 }
    }

  }),

  getters: {
    getCategories: (state) => {
      return [...new Set(state.products.map(p => p.category))];
    },
    
    filteredProducts: (state) => {
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
    },
    
    // FILTRI
    
    applyFilters(filters: any) {
      const plainFilters = JSON.parse(JSON.stringify(filters));
  
      this.activeFilters = plainFilters;
      const categoryStore = useCategoryStore();
    
      // all filters
      let filteredResults = this.products.filter(product => {
        const productPrice = Number(product.price);
        const priceInRange = productPrice >= Number(filters.priceRange.min) && 
                            productPrice <= Number(filters.priceRange.max);
    
        const category = categoryStore.categories.find(cat => cat.id === product.category_id);
        const categoryMatch = filters.subcategory.length === 0 || 
                             (category && filters.subcategory.includes(category.name));
    
        const originMatch = filters.origin.length === 0 || 
                           filters.origin.includes(product.origin);
    
        const grapeMatch = filters.grape.length === 0 || 
                          filters.grape.includes(product.grape);
    
        const vintageMatch = filters.vintage.length === 0 || 
                            filters.vintage.includes(product.vintage);
    
        return priceInRange && categoryMatch && originMatch && grapeMatch && vintageMatch;
      });

    
      // order
      if (plainFilters.orderBy) {
        
        if (plainFilters.orderBy === 'abc') {
          filteredResults = [...filteredResults].sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (plainFilters.orderBy === 'priceDesc') {
          filteredResults = [...filteredResults].sort((a, b) => Number(b.price) - Number(a.price));
        }
        else if (plainFilters.orderBy === 'priceAsc') {
          filteredResults = [...filteredResults].sort((a, b) => Number(a.price) - Number(b.price));
        }
      }
    
      this.filteredProductsState = filteredResults;
    },
    
    
    
    resetFilters() {
      this.activeFilters = {
        subcategory: [],
        origin: [],
        grape: [],
        vintage: [],
        priceRange: { min: 0, max: 600 }
      };
      this.filteredProductsState = this.products;
    }
  },
});
