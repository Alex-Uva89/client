import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useCartStore } from './cartStore';


export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Chimay Blue', category: 'Birre', subcategory: 'Scura', price: 8, vigneto: '', annata: '', grado_alcolico: 9 },
      { id: 2, name: 'Chianti Classico', category: 'Vini', subcategory: 'Rosso', price: 15, vigneto: 'Vigneto Toscana', annata: 2018, grado_alcolico: 13 },
      { id: 3, name: 'Sauvignon Blanc', category: 'Vini', subcategory: 'Bianco', price: 12, vigneto: 'Vigneto Friuli', annata: 2020, grado_alcolico: 12.5 },
      { id: 4, name: 'Cerasuolo Di Vittoria', category: 'Vini', subcategory: 'Rosso', price: 11, vigneto: 'Vigneto Sicilia', annata: 2021, grado_alcolico: 12 },
      { id: 5, name: 'Heineken', category: 'Birre', subcategory: 'Bionda', price: 6, vigneto: '', annata: '', grado_alcolico: 5 },
      { id: 6, name: 'Guinness Draught', category: 'Birre', subcategory: 'Scura', price: 7, vigneto: '', annata: '', grado_alcolico: 4.2 },
      { id: 7, name: 'Pilsner Urquell', category: 'Birre', subcategory: 'Bionda', price: 6.5, vigneto: '', annata: '', grado_alcolico: 4.4 },
      { id: 8, name: 'Barolo', category: 'Vini', subcategory: 'Rosso', price: 30, vigneto: 'Vigneto Piemonte', annata: 2017, grado_alcolico: 14 },
      { id: 9, name: 'Chardonnay', category: 'Vini', subcategory: 'Bianco', price: 18, vigneto: 'Vigneto Sicilia', annata: 2019, grado_alcolico: 13 },
      { id: 10, name: 'Weihenstephaner Original', category: 'Birre', subcategory: 'Bionda', price: 7, vigneto: '', annata: '', grado_alcolico: 5.4 },
      { id: 11, name: 'Cannonau Di Sardegna', category: 'Vini', subcategory: 'Rosso', price: 14, vigneto: 'Vigneto Sardegna', annata: 2020, grado_alcolico: 13.5 },
      { id: 12, name: 'Pinot Grigio', category: 'Vini', subcategory: 'Bianco', price: 13, vigneto: 'Vigneto Trentino', annata: 2021, grado_alcolico: 12 },
      { id: 13, name: 'Zinfandel', category: 'Vini', subcategory: 'Rosso', price: 10, vigneto: 'Vigneto California', annata: 2020, grado_alcolico: 12 },
      { id: 14, name: 'Brooklyn Lager', category: 'Birre', subcategory: 'Ambrata', price: 7.5, vigneto: '', annata: '', grado_alcolico: 5.2 },
      { id: 15, name: 'Leffe Blonde', category: 'Birre', subcategory: 'Bionda', price: 6.8, vigneto: '', annata: '', grado_alcolico: 6.6 },
      { id: 16, name: 'Montepulciano D\'Abruzzo', category: 'Vini', subcategory: 'Rosso', price: 20, vigneto: 'Vigneto Abruzzo', annata: 2018, grado_alcolico: 14 },
      { id: 17, name: 'Riesling', category: 'Vini', subcategory: 'Bianco', price: 17, vigneto: 'Vigneto Alto Adige', annata: 2020, grado_alcolico: 12.5 },
      { id: 18, name: 'Sierra Nevada Stout', category: 'Birre', subcategory: 'Scura', price: 7.2, vigneto: '', annata: '', grado_alcolico: 6.8 },
      { id: 19, name: 'Lagunitas Ipa', category: 'Birre', subcategory: 'Ambrata', price: 8, vigneto: '', annata: '', grado_alcolico: 7.2 },
      { id: 20, name: 'Saint-Emilion', category: 'Vini', subcategory: 'Rosso', price: 25, vigneto: 'Vigneto Bordeaux', annata: 2016, grado_alcolico: 13.5 },
      { id: 21, name: 'Fiano Di Avellino', category: 'Vini', subcategory: 'Bianco', price: 12, vigneto: 'Vigneto Campania', annata: 2021, grado_alcolico: 12.5 },
      { id: 22, name: 'Pinot Noir', category: 'Vini', subcategory: 'Rosso', price: 14, vigneto: 'Vigneto Francia', annata: 2020, grado_alcolico: 13 },
      { id: 23, name: 'Budweiser', category: 'Birre', subcategory: 'Bionda', price: 6.5, vigneto: '', annata: '', grado_alcolico: 5 },
      { id: 24, name: 'Newcastle Brown Ale', category: 'Birre', subcategory: 'Ambrata', price: 7.8, vigneto: '', annata: '', grado_alcolico: 4.7 },
      { id: 25, name: 'Cabernet Sauvignon', category: 'Vini', subcategory: 'Rosso', price: 22, vigneto: 'Vigneto California', annata: 2018, grado_alcolico: 14 },
      { id: 26, name: 'Sauvignon Blanc', category: 'Vini', subcategory: 'Bianco', price: 16, vigneto: 'Vigneto Nuova Zelanda', annata: 2019, grado_alcolico: 12.5 },
      { id: 27, name: 'Pale Ale', category: 'Birre', subcategory: 'Ambrata', price: 9, vigneto: '', annata: '', grado_alcolico: 6.8 },
      { id: 28, name: 'Red Ale', category: 'Birre', subcategory: 'Ambrata', price: 7, vigneto: '', annata: '', grado_alcolico: 6 },
      { id: 29, name: 'Syrah', category: 'Vini', subcategory: 'Rosso', price: 19, vigneto: 'Vigneto Sicilia', annata: 2017, grado_alcolico: 14 },
      { id: 30, name: 'Vermentino', category: 'Vini', subcategory: 'Bianco', price: 13, vigneto: 'Vigneto Sardegna', annata: 2020, grado_alcolico: 12 },
      { id: 31, name: 'Brown Ale', category: 'Birre', subcategory: 'Ambrata', price: 7.5, vigneto: '', annata: '', grado_alcolico: 5.8 },
      { id: 32, name: 'Grenache', category: 'Vini', subcategory: 'Rosso', price: 12, vigneto: 'Vigneto Spagna', annata: 2020, grado_alcolico: 12.5 },
      { id: 33, name: 'Hefeweizen', category: 'Birre', subcategory: 'Bionda', price: 6.2, vigneto: '', annata: '', grado_alcolico: 5.5 },
      { id: 34, name: 'Imperial Stout', category: 'Birre', subcategory: 'Scura', price: 8, vigneto: '', annata: '', grado_alcolico: 8 },
      { id: 35, name: 'Pomerol', category: 'Vini', subcategory: 'Rosso', price: 20, vigneto: 'Vigneto Bordeaux', annata: 2019, grado_alcolico: 13 }
    ],
    searchQuery: ref(''),
    filteredProductsState: ref([]),
  }),
  getters: {
    getCategories: (state) => {
      return [...new Set(state.products.map(p => p.category))];
    },
    getSubcategories: (state) => (category) => {
      return [
        ...new Set(
          state.products
            .filter(p => p.category === category && p.subcategory)
            .map(p => p.subcategory)
        )
      ];
    },
    getFirstSubcategory: (state) => (category) => {
      const subcategories = state.getSubcategories(category);
      return subcategories.length > 0 ? subcategories[0] : null;
    },
    filteredProducts: (state) => {
        if (!state.searchQuery) return state.products;
        const query = state.searchQuery.toLowerCase();
        return state.products.filter((product) =>
          product.name.toLowerCase().includes(query)
        );
    },
  },
  actions: {
    setSearchQuery(query: string) {
        this.searchQuery = query;
        this.updateFilteredProducts();

        // console.log(this.searchQuery);
    },
    updateFilteredProducts() {
        const query = this.searchQuery.toLowerCase();
        if (!query) {
          this.filteredProductsState  = this.products; // Mostra tutti i prodotti se la query è vuota
        } else {
          this.filteredProductsState  = this.products.filter((product) =>
            product.name.toLowerCase().includes(query)
          );
        }

        // console.log("Prodotti filtrati:", this.filteredProducts);
    },
    addToCart(productId: number) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        const cartStore = useCartStore();
        cartStore.addProductToCart(product);
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    },
  },
});
