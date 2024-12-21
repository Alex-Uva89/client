<template>
    <div v-if="cartTotal.toFixed(2) > 0" class="container-cart">
      <ul class="list-product-container">
        <li
          v-for="product in cartWithDetails"
          :key="product.id"
          class="product-item"
        >
          <div class="row-item">
            {{ product.name }}
            <span v-if="product.vigneto"> - {{ product.vigneto }} </span>
          </div>
  
          <div class="row-item">
            <span v-if="product.annata">{{ product.annata }}</span>
            <span v-if="product.annata && product.grado_alcolico"> - </span>
            <span v-if="product.grado_alcolico">
              {{ product.grado_alcolico }}% vol.
            </span>
          </div>
  
          <div class="row-item">
            <span class="row-item">
              <img
                class="icon-price"
                src="../assets/icons/price.svg"
                alt="icona che indica il prezzo"
              />
              {{ product.price }}
            </span>
            <span class="counter">
              <span @click="decreaseQuantity(product)">-</span>
              <span>{{ getQuantity(product) }}</span>
              <span @click="increaseQuantity(product)">+</span>
            </span>
          </div>
  
          <!-- Tasto per rimuovere prodotto -->
          <span @click="openDeleteModal(product)">
            <img
              class="icon-delete"
              src="../assets/icons/trash.svg"
              alt="icona che indica la rimozione del prodotto totale dal carrello"
            />
          </span>
        </li>
      </ul>
  
      <!-- Totale del carrello -->
      <div class="cart-total-container">
        <div class="cart-total">
          <span>Subtotale: </span>
          <span>€{{ cartTotal.toFixed(2) }}</span>
        </div>
  
        <div v-if="cartActions" class="cart-actions">
          <router-link to="/">
            <ButtonComponent color="var(--background)">
              <span>Aggiungi altro al carrello</span>
            </ButtonComponent>
          </router-link>
  
          <router-link to="/checkout">
            <ButtonComponent isLink="true" link="/checkout">
              <span>Procedi all'acquisto</span>
            </ButtonComponent>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
  import ButtonComponent from "~/components/ButtonComponent.vue";
  import { useCartStore } from "@/store/cartStore";
  import { ref, onMounted } from "vue";
  
  const cartStore = useCartStore();
  
  // Stato per la modale e il prodotto da eliminare
  const isModalOpen = ref(false);
  const productToDelete = ref(null);
  
  const openDeleteModal = (product) => {
    productToDelete.value = product;
    isModalOpen.value = true;
  };
  
  const closeDeleteModal = () => {
    productToDelete.value = null;
    isModalOpen.value = false;
  };
  
  const confirmDeleteProduct = () => {
    if (productToDelete.value) {
      cartStore.removeProductFromCart(productToDelete.value.id);
      closeDeleteModal();
    }
  };
  
  const increaseQuantity = (product) => {
    cartStore.addProductToCart(product);
  };
  
  const decreaseQuantity = (product) => {
    const productId = product.id;
    const existingProduct = cartStore.cart.find((item) => item.id === productId);
  
    if (existingProduct && existingProduct.quantity > 1) {
      cartStore.updateQuantity(productId, existingProduct.quantity - 1);
    } else {
      openDeleteModal(product);
    }
  };
  
  const getQuantity = (product) => {
    const productId = product.id;
    const existingProduct = cartStore.cart.find((item) => item.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
  };
  
  onMounted(() => {
    cartStore.loadCartFromStorage();
  });
  
  const cartWithDetails = cartStore.getCartWithDetails;
  const cartTotal = cartStore.getCartTotal;

  defineProps({
  cartActions: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.list-product-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
}

.list-product-container ul{
  width: 100%;
}

.intestate-category {
  width: 100%;
  display: flex;
  font-family: var(--font-primary);
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  height: 40px;
  color: var(--label);
  font-size: var(--font-size-medium);
}

.product-item {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--primary);
  padding: 12px 0;
  gap: 4px;
  position: relative;
}

.row-item{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-secondary);
  color: var(--text-secondary);
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
}

.icon-delete{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 0;
}

.counter{
  display: flex;
  width: 80px;
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
  width: calc(100% / 3);
  border: 1px solid var(--primary);
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

.cart-total-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cart-total{
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: var(--font-secondary);
    font-size: var(--font-size-medium);
    color: var(--text);
    border-top: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
    padding: 12px 20px;
    background-color: var(--background);
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.5);
}

.cart-actions{
   margin:0 20px;
}
</style>