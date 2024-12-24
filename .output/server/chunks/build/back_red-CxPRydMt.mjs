import { defineStore } from 'pinia';
import { ref } from 'vue';
import { e as useCartStore } from './server.mjs';

const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      { id: 1, name: "Chianti Classico", category: "Vini", subcategory: "Rosso", price: 15, vigneto: "Vigneto Toscana", annata: 2018, grado_alcolico: 13, img: "/images/vino.jpeg", status: "false" },
      { id: 2, name: "Chimay Blue", category: "Birre", subcategory: "Scura", price: 8, vigneto: "", annata: "", grado_alcolico: 9, img: "/images/vino.jpeg", status: "true" },
      { id: 3, name: "Sauvignon Blanc", category: "Vini", subcategory: "Bianco", price: 12, vigneto: "Vigneto Friuli", annata: 2020, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" },
      { id: 4, name: "Cerasuolo Di Vittoria", category: "Vini", subcategory: "Rosso", price: 11, vigneto: "Vigneto Sicilia", annata: 2021, grado_alcolico: 12, img: "/images/vino.jpeg", status: "true" },
      { id: 5, name: "Heineken", category: "Birre", subcategory: "Bionda", price: 6, vigneto: "", annata: "", grado_alcolico: 5, img: "/images/vino.jpeg", status: "true" },
      { id: 6, name: "Guinness Draught", category: "Birre", subcategory: "Scura", price: 7, vigneto: "", annata: "", grado_alcolico: 4.2, img: "/images/vino.jpeg", status: "true" },
      { id: 7, name: "Pilsner Urquell", category: "Birre", subcategory: "Bionda", price: 6.5, vigneto: "", annata: "", grado_alcolico: 4.4, img: "/images/vino.jpeg", status: "true" },
      { id: 8, name: "Barolo", category: "Vini", subcategory: "Rosso", price: 30, vigneto: "Vigneto Piemonte", annata: 2017, grado_alcolico: 14, img: "/images/vino.jpeg", status: "true" },
      { id: 9, name: "Chardonnay", category: "Vini", subcategory: "Bianco", price: 18, vigneto: "Vigneto Sicilia", annata: 2019, grado_alcolico: 13, img: "/images/vino.jpeg", status: "true" },
      { id: 10, name: "Weihenstephaner Original", category: "Birre", subcategory: "Bionda", price: 7, vigneto: "", annata: "", grado_alcolico: 5.4, img: "/images/vino.jpeg", status: "true" },
      { id: 11, name: "Cannonau Di Sardegna", category: "Vini", subcategory: "Rosso", price: 14, vigneto: "Vigneto Sardegna", annata: 2020, grado_alcolico: 13.5, img: "/images/vino.jpeg", status: "true" },
      { id: 12, name: "Pinot Grigio", category: "Vini", subcategory: "Bianco", price: 13, vigneto: "Vigneto Trentino", annata: 2021, grado_alcolico: 12, img: "/images/vino.jpeg", status: "true" },
      { id: 13, name: "Zinfandel", category: "Vini", subcategory: "Rosso", price: 10, vigneto: "Vigneto California", annata: 2020, grado_alcolico: 12, img: "/images/vino.jpeg", status: "true" },
      { id: 14, name: "Brooklyn Lager", category: "Birre", subcategory: "Ambrata", price: 7.5, vigneto: "", annata: "", grado_alcolico: 5.2, img: "/images/vino.jpeg", status: "true" },
      { id: 15, name: "Leffe Blonde", category: "Birre", subcategory: "Bionda", price: 6.8, vigneto: "", annata: "", grado_alcolico: 6.6, img: "/images/vino.jpeg", status: "true" },
      { id: 16, name: "Montepulciano D'Abruzzo", category: "Vini", subcategory: "Rosso", price: 20, vigneto: "Vigneto Abruzzo", annata: 2018, grado_alcolico: 14, img: "/images/vino.jpeg", status: "true" },
      { id: 17, name: "Riesling", category: "Vini", subcategory: "Bianco", price: 17, vigneto: "Vigneto Alto Adige", annata: 2020, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" },
      { id: 18, name: "Sierra Nevada Stout", category: "Birre", subcategory: "Scura", price: 7.2, vigneto: "", annata: "", grado_alcolico: 6.8, img: "/images/vino.jpeg", status: "true" },
      { id: 19, name: "Lagunitas Ipa", category: "Birre", subcategory: "Ambrata", price: 8, vigneto: "", annata: "", grado_alcolico: 7.2, img: "/images/vino.jpeg", status: "true" },
      { id: 20, name: "Saint-Emilion", category: "Vini", subcategory: "Rosso", price: 25, vigneto: "Vigneto Bordeaux", annata: 2016, grado_alcolico: 13.5, img: "/images/vino.jpeg", status: "true" },
      { id: 21, name: "Fiano Di Avellino", category: "Vini", subcategory: "Bianco", price: 12, vigneto: "Vigneto Campania", annata: 2021, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" },
      { id: 22, name: "Pinot Noir", category: "Vini", subcategory: "Rosso", price: 14, vigneto: "Vigneto Francia", annata: 2020, grado_alcolico: 13, img: "/images/vino.jpeg", status: "true" },
      { id: 23, name: "Budweiser", category: "Birre", subcategory: "Bionda", price: 6.5, vigneto: "", annata: "", grado_alcolico: 5, img: "/images/vino.jpeg", status: "true" },
      { id: 24, name: "Newcastle Brown Ale", category: "Birre", subcategory: "Ambrata", price: 7.8, vigneto: "", annata: "", grado_alcolico: 4.7, img: "/images/vino.jpeg", status: "true" },
      { id: 25, name: "Cabernet Sauvignon", category: "Vini", subcategory: "Rosso", price: 22, vigneto: "Vigneto California", annata: 2018, grado_alcolico: 14, img: "/images/vino.jpeg", status: "true" },
      { id: 26, name: "Sauvignon Blanc", category: "Vini", subcategory: "Bianco", price: 16, vigneto: "Vigneto Nuova Zelanda", annata: 2019, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" },
      { id: 27, name: "Pale Ale", category: "Birre", subcategory: "Ambrata", price: 9, vigneto: "", annata: "", grado_alcolico: 6.8, img: "/images/vino.jpeg", status: "true" },
      { id: 28, name: "Red Ale", category: "Birre", subcategory: "Ambrata", price: 7, vigneto: "", annata: "", grado_alcolico: 6, img: "/images/vino.jpeg", status: "true" },
      { id: 29, name: "Syrah", category: "Vini", subcategory: "Rosso", price: 19, vigneto: "Vigneto Sicilia", annata: 2017, grado_alcolico: 14, img: "/images/vino.jpeg", status: "true" },
      { id: 30, name: "Vermentino", category: "Vini", subcategory: "Bianco", price: 13, vigneto: "Vigneto Sardegna", annata: 2020, grado_alcolico: 12, img: "/images/vino.jpeg", status: "true" },
      { id: 31, name: "Brown Ale", category: "Birre", subcategory: "Ambrata", price: 7.5, vigneto: "", annata: "", grado_alcolico: 5.8, img: "/images/vino.jpeg", status: "true" },
      { id: 32, name: "Grenache", category: "Vini", subcategory: "Rosso", price: 12, vigneto: "Vigneto Spagna", annata: 2020, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" },
      { id: 33, name: "Hefeweizen", category: "Birre", subcategory: "Bionda", price: 6.2, vigneto: "", annata: "", grado_alcolico: 5.5, img: "/images/vino.jpeg", status: "true" },
      { id: 34, name: "Imperial Stout", category: "Birre", subcategory: "Scura", price: 8, vigneto: "", annata: "", grado_alcolico: 8, img: "/images/vino.jpeg", status: "true" },
      { id: 35, name: "Pomerol", category: "Vini", subcategory: "Rosso", price: 20, vigneto: "Vigneto Bordeaux", annata: 2019, grado_alcolico: 13, img: "/images/vino.jpeg", status: "true" },
      { id: 36, name: "Sancerre", category: "Vini", subcategory: "Champagne", price: 18, vigneto: "Vigneto Francia", annata: 2020, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" },
      { id: 37, name: "SanPio", category: "Vini", subcategory: "Spumante", price: 18, vigneto: "Vigneto Italia", annata: 2020, grado_alcolico: 12.5, img: "/images/vino.jpeg", status: "true" }
    ],
    searchQuery: ref(""),
    filteredProductsState: ref([])
  }),
  getters: {
    getCategories: (state) => {
      return [...new Set(state.products.map((p) => p.category))];
    },
    getSubcategories: (state) => (category) => {
      return [
        ...new Set(
          state.products.filter((p) => p.category === category && p.subcategory).map((p) => p.subcategory)
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
      return state.products.filter(
        (product) => product.name.toLowerCase().includes(query)
      );
    }
  },
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
      this.updateFilteredProducts();
    },
    updateFilteredProducts() {
      const query = this.searchQuery.toLowerCase();
      if (!query) {
        this.filteredProductsState = this.products;
      } else {
        this.filteredProductsState = this.products.filter(
          (product) => product.name.toLowerCase().includes(query)
        );
      }
    },
    addToCart(productId) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        const cartStore = useCartStore();
        cartStore.addProductToCart(product);
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    }
  }
});
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2029%2029'%20style='enable-background:new%200%200%2029%2029;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M14.5,28C21.9,28,28,21.9,28,14.5S21.9,1,14.5,1S1,7.1,1,14.5S7.1,28,14.5,28z%20M14.5,2.1%20c6.9,0,12.4,5.6,12.4,12.4c0,6.9-5.6,12.4-12.4,12.4c-6.9,0-12.4-5.6-12.4-12.4C2.1,7.6,7.6,2.1,14.5,2.1z'/%3e%3cpath%20class='st0'%20d='M14.5,28.5c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S22.2,28.5,14.5,28.5z%20M14.5,1.5%20c-7.2,0-13,5.8-13,13c0,7.2,5.8,13,13,13c7.2,0,13-5.8,13-13C27.5,7.3,21.7,1.5,14.5,1.5z%20M14.5,27.4c-7.1,0-12.9-5.8-12.9-12.9%20c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9C27.4,21.6,21.6,27.4,14.5,27.4z%20M14.5,2.6C7.9,2.6,2.6,7.9,2.6,14.5%20s5.4,11.9,11.9,11.9c6.6,0,11.9-5.4,11.9-11.9S21.1,2.6,14.5,2.6z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M8,15h13.8c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H8c-0.3,0-0.5,0.2-0.5,0.5C7.5,14.8,7.7,15,8,15z'/%3e%3cpath%20class='st0'%20d='M21.8,15.5H8c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h13.8c0.6,0,1,0.5,1,1C22.9,15.1,22.4,15.5,21.8,15.5z%20M8,14.5%20L8,14.5l13.8,0.1L8,14.5z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M11.9,19.2c0.2,0,0.3-0.1,0.4-0.2c0.2-0.2,0.1-0.6-0.1-0.7l-1.6-1.3L8,14.5l4.4-3.8c0.2-0.2,0.2-0.5,0.1-0.7%20c-0.2-0.2-0.5-0.2-0.7-0.1l-4.8,4.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0.1,0.3,0.2,0.4l3.1,2.8l1.7,1.3%20C11.7,19.1,11.8,19.2,11.9,19.2z'/%3e%3cpath%20class='st0'%20d='M11.9,19.7c-0.2,0-0.5-0.1-0.6-0.2l-1.7-1.3l-3.1-2.8c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.4-0.8l4.8-4.2%20c0.4-0.4,1.1-0.3,1.5,0.1c0.4,0.4,0.3,1.1-0.1,1.5l-3.9,3.4l2.2,2l1.6,1.3c0.4,0.4,0.5,1,0.2,1.4C12.5,19.5,12.3,19.7,11.9,19.7z%20M12,10.4l-4.9,4.1l3.1,2.8l1.7,1.3c0,0,0,0,0,0l-1.7-1.3l-2.7-2.4c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1,0.1-0.3,0.2-0.4L12,10.4z'/%3e%3c/g%3e%3c/svg%3e";

export { _imports_0 as _, useProductStore as u };
//# sourceMappingURL=back_red-CxPRydMt.mjs.map
