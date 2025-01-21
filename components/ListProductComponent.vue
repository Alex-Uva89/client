<template>
  <div>
    <div class="list-product-header">
      Prodotti: {{ filteredProducts.length > 0 ? filteredProducts.length : 'Nessun prodotto' }}
    </div>
    <div class="list-product-container"> 
      <ul v-if="filteredProducts.length > 0">
        <li v-for="product in filteredProducts" :key="product.id" class="product-item">
          <router-link :to="`/product/${product.id}`">
            
            <div class="row-item">
              {{ product.name }} 
              <span v-if="product.grape">
                - {{ product.grape }}
              </span>
            </div>
            
            <div class="row-item">
              <span v-if="product.vintage">
                  {{ product.vintage }}
              </span>
              <span v-if="product.vintage && product.degrees">
                - 
              </span>
              <span v-if="product.degrees">
                  {{ product.degrees }}% vol.
              </span>
            </div>

          </router-link>
            <div class="row-item">
              <span class="row-item">
                <img class="icon-price" src="../assets/icons/price.svg" alt="icona che indica il prezzo">
                {{ product.price }}
              </span>
              <span class="counter">
                <span @click="decreaseQuantity(product)">-</span>
                <span>
                  <input 
                    type="number" 
                    :value="getQuantity(product)" 
                    @input="updateQuantity(product, $event.target.value)" 
                    @blur="validateQuantity(product)" 
                    class="input-quantity"
                  />
                </span>
                <span @click="increaseQuantity(product)">+</span>
              </span>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCategoryStore } from '@/store/categoryStore';
import { useProductStore } from '@/store/productStore';
import { useCartStore } from '@/store/cartStore';
import { onMounted } from 'vue';

export default defineComponent({
  name: 'ListProduct',
  setup() {
    const categoryStore = useCategoryStore();
    const productStore = useProductStore();
    const cartStore = useCartStore();

    // Usa computed per rendere reattivo filteredProductsState
    const filteredProductsState = computed(() => productStore.filteredProductsState);
        
        // const searchQuery = computed(() => productStore.searchQuery);

        const filteredProducts = computed(() => {
          // Se ci sono risultati dai filtri, li mostriamo
          if (filteredProductsState.value.length > 0) {
            return filteredProductsState.value;
          }

          // Se i filtri sono attivi ma non ci sono risultati, ritorniamo array vuoto
          if (productStore.activeFilters.subcategory.length > 0 || 
              productStore.activeFilters.origin.length > 0 || 
              productStore.activeFilters.grape.length > 0 || 
              productStore.activeFilters.vintage.length > 0) {
            return [];
          }

          // Se c'è una categoria selezionata
          if (categoryStore.selectedCategory) {
            const selectedCategoryId = categoryStore.selectedCategory.category.id;
            const filteredByCategory = productStore.products.filter(product => 
              product.category_id === selectedCategoryId
            );
            return filteredByCategory.length > 0 ? filteredByCategory : [];
          }

          // Se non ci sono filtri attivi, ritorna tutti i prodotti
          return productStore.products;
        });


    const increaseQuantity = (product) => {
      cartStore.addProductToCart(product); 
    };

    const decreaseQuantity = (product) => {
      const productId = product.id;  // Recuperiamo l'ID del prodotto
      const existingProduct = cartStore.cart.find((item) => item.id === productId);

      if (existingProduct && existingProduct.quantity > 1) {
        cartStore.updateQuantity(productId, existingProduct.quantity - 1); // Riduce la quantità
      } else {
        cartStore.removeProductFromCart(productId); // Rimuove il prodotto
      }
    };

    const updateQuantity = (product, value) => {
        const quantity = parseInt(value, 10);
        if (!isNaN(quantity) && quantity > 0) {
            const existingItem = cartStore.cart.find((item) => item.id === product.id);
            if (existingItem) {
                cartStore.updateQuantity(product.id, quantity);
            } else {
                cartStore.addProductToCart({ ...product, quantity });
            }
        } else if (quantity === 0) {
            cartStore.removeProductFromCart(product.id);
        }

        cartTotal = cartStore.getCartTotal;
    };

  const validateQuantity = (product) => {
    const existingProduct = cartStore.cart.find((item) => item.id === product.id);
    if (!existingProduct || existingProduct.quantity <= 0) {
      cartStore.updateQuantity(product.id, 1);
      cartTotal = cartStore.getCartTotal;
    }
  };

  const getQuantity = (product) => {
    const productId = product.id;  // Recuperiamo l'ID del prodotto
    const existingProduct = cartStore.cart.find((item) => item.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
  };

  let cartTotal = cartStore.getCartTotal;

onMounted(() => {
  cartStore.loadCartFromStorage();
  
});


    return {
      categoryStore,
      filteredProducts,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      validateQuantity,
      getQuantity,
      cartTotal
    }
  }
});
</script>





<style scoped>
.list-product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 20px;
  font-family: var(--font-primary);
  color: var(--text-secondary);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-secondary);
  font-style: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
}


.list-product-container {
  display: flex;
  justify-content: start;
  margin: auto 20px 7rem;
}

.list-product-container ul{
  width: 100%;
}

.product-item {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--primary);
  padding: 12px 0;
  gap: 4px;
}

.row-item{
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-primary);
  color: var(--text-secondary);
  font-size: var(--font-size-large);
}

a .row-item:first-child{
  color: var(--text);
  font-size: var(--font-size-large);
  font-weight: bold;
}

.row-item span {
  font-size: var(--font-size-small);
}

.product-item > .row-item{
  justify-content: space-between;
}

.product-item > div:nth-child(1){
  font-weight: bold;
  color: var(--text);
  font-size: var(--font-size-medium);
}

.icon-price{
  width: var(--font-size-medium);
  height: 20px;
}

.counter{
  display: flex;
  width: 100px;
  height: 27px;
  align-items: center;
  font-size: var(--font-size-medium);
  font-weight: bold;
  color: var(--text);
  border-radius: 20px;
}

.counter span{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid var(--primary);
}

.counter .input-quantity{
    background-color: var(--background);
    width: 35px;
    height: inherit;
    text-align: center;
    border: none;
}

.counter span:first-child{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
}

.counter span:last-child{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.3);
}

</style>
