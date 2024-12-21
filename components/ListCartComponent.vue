<template>
    <div v-if="cartTotal.toFixed(2) > 0" class="container-cart">
      <ul class="list-product-container">
        <li
          v-for="product in cartWithDetails"
          :key="product.id"
          class="product-item"
        >
        <template v-if="getQuantity(product) > 0">
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
  
          <!-- Tasto per rimuovere prodotto -->
          <span @click="openDeleteModal(product)">
            <img
              class="icon-delete"
              src="../assets/icons/trash.svg"
              alt="icona che indica la rimozione del prodotto totale dal carrello"
            />
          </span>
        </template>
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
  

  // COUNTER
  const increaseQuantity = (product) => {
    cartStore.addProductToCart(product);
    cartTotal = cartStore.getCartTotal;
  };
  
  const decreaseQuantity = (product) => {
    const productId = product.id;
    const existingProduct = cartStore.cart.find((item) => item.id === productId);
  
    if (existingProduct && existingProduct.quantity > 1) {
      cartStore.updateQuantity(productId, existingProduct.quantity - 1);
      cartTotal = cartStore.getCartTotal;
    } 
  };

  const updateQuantity = (product, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      cartStore.updateQuantity(product.id, quantity);
      cartTotal = cartStore.getCartTotal;
    }
  };

  const validateQuantity = (product) => {
    const existingProduct = cartStore.cart.find((item) => item.id === product.id);
    if (!existingProduct || existingProduct.quantity <= 0) {
      cartStore.updateQuantity(product.id, 1);
      cartTotal = cartStore.getCartTotal;
    }
  };

  
  const getQuantity = (product) => {
    const productId = product.id;
    const existingProduct = cartStore.cart.find((item) => item.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
  };
  // END COUNTER

  
  // RICHIAMO IL CARRELLO
  onMounted(() => {
    cartStore.loadCartFromStorage();
  });
  
  const cartWithDetails = cartStore.getCartWithDetails;
  let cartTotal = cartStore.getCartTotal;

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

.product-item:has(.row-item) {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--primary);
  padding: 12px 0;
  gap: 4px;
  position: relative;
}

.product-item:has(.row-item):last-child {
  margin-block: 20px;
}

li{
  list-style-type: none;
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

/* COUNTER */

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

.counter .input-quantity{
    background-color: var(--background);
    width: 35px;
    height: inherit;
    text-align: center;
    border: none;
}

.counter span{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

/* END COUNTER */

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
</style>