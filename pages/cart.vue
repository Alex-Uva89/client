<template>
    <div>
      <Header title="La mia lista della spesa" />
  
      <div v-if="cartStore.getCartTotal.toFixed(2) > 0" class="container-cart">
        <CartComponent />
      </div>
  
      <div v-else class="cart-empty">
        <p>Il carrello è vuoto</p>
        <router-link to="/">
            <ButtonComponent>
                <span>Aggiungi i prodotti alla lista</span>
            </ButtonComponent>
        </router-link>
      </div>
  
      <!-- Modale di conferma -->
      <div v-if="isModalOpen" class="modal-overlay">
        <div class="modal-content">
          <p>
            Sei sicuro di voler rimuovere tutte le unità ( {{ productToDelete.quantity }} ) di "{{ productToDelete.name }}" dal
            carrello?
          </p>
          <div class="modal-buttons">
            <button @click="confirmDeleteProduct">Conferma</button>
            <button @click="closeDeleteModal">Annulla</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from "~/components/HeaderDefault.vue";
  import ButtonComponent from "~/components/ButtonComponent.vue";
  import CartComponent from "~/components/ListCartComponent.vue";
  import { useCartStore } from "@/store/cartStore";
  import { onMounted, ref } from "vue";
  
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
  </script>

<style scoped>
.container-cart{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 3000px;
    margin-bottom: 150px;
}

/* MODAL */

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  font-family: var(--font-secondary);
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin: 0 10px;
}

.modal-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.modal-buttons button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-buttons button:first-child {
  background-color: var(--primary);
  color: white;
}

.modal-buttons button:last-child {
  background-color: #bdc3c7;
  color: white;
}

.cart-empty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 180px);
    font-family: var(--font-secondary);
    font-size: var(--font-size-medium);
    color: var(--text-secondary);
    position: relative;
}

.cart-empty a{
    color: var(--primary);
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

</style>


  