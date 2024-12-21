<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/productStore';
import { useCartStore } from '@/store/cartStore';
import ButtonComponent from '@/components/ButtonComponent.vue';
import AccordionComponent from '~/components/AccordionComponent.vue';

const route = useRoute();
const productId = route.params.id;

const cartStore = useCartStore();

const productStore = useProductStore();
const product = productStore.products.find(p => p.id === parseInt(productId));

const shareProduct = () => {

}

 // COUNTER
 const increaseQuantity = (product) => {
    if(product.status){
      cartStore.addProductToCart(product);
    }
    cartTotal = cartStore.getCartTotal;
  };

  const increaseQuantityAdd = (product) => {
    if(getQuantity(product) === 0 && product.status){
      cartStore.addProductToCart(product);
    }
    cartTotal = cartStore.getCartTotal;
  };
  
  const decreaseQuantity = (product) => {
    const productId = product.id;
    const existingProduct = cartStore.cart.find((item) => item.id === productId);
  
    if (existingProduct && existingProduct.quantity > 0) {
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

  

</script>

<template>
  <div class="container-product-page">
    <div class="header-product">
      <router-link class="btnBack" to="/">
          <img src="~/assets/icons/back_red.svg" alt="icona del tasto indietro">
      </router-link>
      <div class="img-container">
        <img class="img-product" :src="product.img" :alt="product.name" />
      </div>
      <button class="btn btn-primary" @click="shareProduct">
        <!-- <img src="~/assets/icons/arrow.svg" alt=""> -->
         condividi
      </button>
    </div>


    <div class="card-content">
      <h2>{{ product.name }} - produttore</h2>
      <p>{{ product.vigneto ? product.vigneto : 'vigneto N/A' }} {{ product.annata? product.annata : 'anno N/A' }} - {{ product.grado_alcolico? product.grado_alcolico : 'N/A' }}% vol.</p>
      
      <div class="info-container">
        <div class="price">
          <img src="~/assets/icons/price.svg" alt="" class="icon">
          <p>{{ product.price }}</p>
        </div>

        <div class="format">
          <img src="~/assets/icons/bottle-full- wine.svg" alt="" class="icon">
          <p>75cl</p>
        </div>
      </div>

      <div class="container-actions">
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

        <span v-if="product.status == 'true'">
          <ButtonComponent
          isLink="true"
          link="/cart"
          color="var(--background)"
          width="100%"
          @click="increaseQuantityAdd(product)"
          >
            Aggiungi al carrello
          </ButtonComponent>
        </span>
      </div>


    </div>
      <div class="container-status">
        <div v-if="product.status == 'true'">
          <span class="green-ball"></span>
          <span>disponibile</span>
        </div>
        <div v-else>
          <span class="red-ball"></span>
          <span>non disponibile</span>
        </div>
      </div>

      <div class="container-accordion">

        <AccordionComponent title="Descrizione" content="Qui andrà la descrizione del vino" />
    
  
        <AccordionComponent title="Scheda tecnica" content="Qui andranno i dati del vino" />
      </div>

      <div v-if="productStore.products.filter(p => p.price < product.price && p.category === product.category)" >
        <h3 class="title-other-products">Guarda Anche:</h3>
        <ul class="other-products">
          <li 
            v-for="filteredProduct in productStore.products.filter(p => p.price < product.price && p.category === product.category)" 
            :key="filteredProduct.id"
            class="card-other-products"
          >
            <router-link :to="'/product/' + filteredProduct.id">
              <h2>{{ filteredProduct.name }} - produttore</h2>
                <p>{{ filteredProduct.vigneto ? filteredProduct.vigneto : 'vigneto N/A' }} {{ filteredProduct.annata? filteredProduct.annata : 'anno N/A' }} - {{ filteredProduct.grado_alcolico? filteredProduct.grado_alcolico : 'N/A' }}% vol.</p>
                
                <div class="info-container">
                  <div class="price">
                    <img src="~/assets/icons/price.svg" alt="" class="icon">
                    <p>{{ filteredProduct.price }}</p>
                  </div>
                </div>
            </router-link>
          </li>
        </ul>
      </div>

  </div>
</template>



<style scoped>

.container-product-page{
  margin-bottom: 150px;
  width: 99vw;
  overflow: hidden;
}

.header-product {
  position: relative;
}

.header-product button{
  width:  50px;
  position: absolute;
  bottom: 100%;
  right: 25px;
}

.btnBack {
  width: 50px;
  position: absolute;
  bottom: 90%;
  left: 5px;
}

.btnBack img {
  width: 30px;
  margin:20px;
}

.img-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.img-product {
  width: 200px;
}

.card-content, .container-accordion {
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
}

.icon{
  max-width: 30px;
  margin-right: 5px;
  height: 20px;
}

.price {
  display: flex;
  align-items: center;
}

.format {
  display: flex;
  align-items: center;
  height: 30px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.container-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container-status {
  display: flex;
  justify-content: start;
  align-items: center;
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid var(--primary);
  padding: 10px 20px;
}

.green-ball, .red-ball {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}
.green-ball {
  background-color: green;
}
.red-ball {
  background-color: red;
}

.accordion{
  border-bottom: 1px solid var(--primary);
}

.title-other-products{
  margin-left:20px;
}

.other-products{
  overflow-x: scroll;
  padding-left: 20px;
  padding-right: 60px;
  min-width: 1000px;
  max-width: 4000px;
  display: flex;
  gap: 25px;
  list-style: none;
  flex-wrap: nowrap;
  scrollbar-width: none;
  margin-top: 20px;
  padding-bottom: 20px;
}

.other-products li{
  min-width: 250px;
  max-width: 600px;
  padding: 10px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  text-rendering: optimizeLegibility;
  box-shadow: 11px 10px 10px -5px rgba(0, 0, 0, 0.3);
}

.other-products li a{
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--text);
}

.other-products li a .info-container{
  margin-top: 10px;
}

</style>
