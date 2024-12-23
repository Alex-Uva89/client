<template>
  <div>
    <div class="list-product-container">
      <ul>
        <li v-for="product in filteredProducts" :key="product.id" class="product-item">
          <router-link :to="`/product/${product.id}`">
            
            <div class="row-item">
              {{ product.name }} 
              <span v-if="product.vigneto">
                - {{ product.vigneto }}
              </span>
            </div>
            
            <div class="row-item">
              <span v-if="product.annata">
                  {{ product.annata }}
              </span>
              <span v-if="product.annata && product.grado_alcolico">
                - 
              </span>
              <span v-if="product.grado_alcolico">
                  {{ product.grado_alcolico }}% vol.
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

    const searchQuery = computed(() => productStore.searchQuery);

    const filteredProducts = computed(() => {
      let filtered = filteredProductsState.value.length > 0 ? filteredProductsState.value : productStore.products;

      // Filtro per categoria
      if (categoryStore.selectedSubcategory || categoryStore.selectedCategory) {

        filtered = filtered.filter(product => {
          if (categoryStore.selectedSubcategory) {
            return product.subcategory === categoryStore.selectedSubcategory;
          } else {
            return product.category === categoryStore.selectedCategory;
          }
        });
      }

      // Filtro per ricerca
      if (searchQuery.value) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }

      return filtered;
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
.list-product-container {
  display: flex;
  justify-content: start;
  margin: auto 20px;
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
  font-family: var(--font-secondary);
  color: var(--text-secondary);
}

.row-item:first-child{
  color: var(--text);
  font-size: var(--font-size-medium);
  font-weight: bold;
}

.row-item span {
  font-size: var(--font-size-small);
}

.row-item:last-child{
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
