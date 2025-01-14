<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/productStore';
import { useCartStore } from '@/store/cartStore';
import { ref, computed, onMounted, watch } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import AccordionComponent from '~/components/AccordionComponent.vue';

const route = useRoute();
const router = useRouter();
const productId = route.params.id;

const cartStore = useCartStore();

const productStore = useProductStore();
const product = ref(null);


 // COUNTER
 const increaseQuantity = (Item) => {
    if(Item){
      cartStore.addProductToCart(Item);
    }
    cartTotal = cartStore.getCartTotal;
  };

  const increaseQuantityAdd = (item) => {
    if(getQuantity(item) === 0 && item){
      cartStore.addProductToCart(item);
    }
    cartTotal = cartStore.getCartTotal;
  };
  
  const decreaseQuantity = (item) => {
    const productId = item.id;
    const existingProduct = cartStore.cart.find((i) => i.id === productId);
  
    if (existingProduct && existingProduct.quantity > 0) {
      cartStore.updateQuantity(productId, existingProduct.quantity - 1);
      cartTotal = cartStore.getCartTotal;
    } 
  };

  const updateQuantity = (item, value) => {
        const quantity = parseInt(value, 10);
        if (!isNaN(quantity) && quantity > 0) {
            const existingItem = cartStore.cart.find((i) => i.id === item.id);
            if (existingItem) {
                cartStore.updateQuantity(item.id, quantity);
            } else {
                cartStore.addProductToCart({ ...item, quantity });
            }
        } else if (quantity === 0) {
            cartStore.removeProductFromCart(item.id);
        }

        cartTotal = cartStore.getCartTotal;
    };

  const validateQuantity = (item) => {
    const existingProduct = cartStore.cart.find((i) => i.id === item.id);
    if (!existingProduct || existingProduct.quantity <= 0) {
      cartStore.updateQuantity(item.id, 1);
      cartTotal = cartStore.getCartTotal;
    }
  };

  
  const getQuantity = (item) => {
    const productId = item.id;
    const existingProduct = cartStore.cart.find((i) => i.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
  };

  let cartTotal = cartStore.getCartTotal;

// SHARING URL
const isCopied = ref(false);

const copyProductLink = async () => {
  const url = window.location.href;   
  try {
    await navigator.clipboard.writeText(url); 
    isCopied.value = true; 
    setTimeout(() => {
      isCopied.value = false; 
    }, 1000);
  } catch (error) {
    console.error('Errore durante la copia del link:', error);
    alert('Impossibile copiare il link. Riprova.');
  }
};

onMounted(async () => {
  await productStore.fetchProducts();
  product.value = productStore.products.find(p => p.id === parseInt(productId));
})

// DATA ACCORDION

const hasData = computed(() => {
  if (!product.value) return false;
  
  return !!(
    product.value.vintage || 
    product.value.degrees || 
    product.value.producer || 
    product.value.grape
  );
});

// ROUTING

const navigateToProduct = (id) => {
  router.push(`/product/${id}`);
};

watch(
  () => route.params.id,
  async (newId) => {
    product.value = productStore.products.find(p => p.id === parseInt(newId));
  }
);

</script>

<template>
  <div class="container-product-page"  v-if="product">
    <div class="header-product">
      <button class="btnBack" @click="router.back()">
          <img src="~/assets/icons/back_red.svg" alt="icona del tasto indietro">
      </button>
      <div class="img-container">
        <img 
          class="img-product" 
          :src="product.image"
          :alt="product.name" 
        />
      </div>
      <button class="btn btn-primary" @click="copyProductLink()">
        <img src="~/assets/icons/share.svg" alt="icona di condivisione">
      </button>
    </div>


    <div class="card-content">
      <h2>{{ product.name }} <span v-if="product.producer">-  {{ product.producer }} </span> </h2>
      <p class="product-info"> 
        <span v-if="product.grape">{{ product.grape }}</span> 
        <span v-if="product.vintage">{{ product.vintage }}</span> 
        <span v-if="product.degrees && product.vintage || product.degrees && product.grape "> - </span>
        <span v-if="product.degrees">{{ product.degrees }}% vol.</span>
      </p>
      
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

        <template v-if="product.description">
          <AccordionComponent title="Descrizione" >
            <p>{{ product.description }}</p>
          </AccordionComponent>
        </template>
    
  
        <AccordionComponent title="Scheda tecnica" content="Qui andranno i dati del vino" v-if="hasData">
          <ul class="technical-data">
            <li class="technical-data-item" v-if="product.vintage">
              <p>Annata</p>
              <p>{{ product.vintage }}</p>
            </li>
            <li class="technical-data-item">
              <p>Grado alcolico</p>
              <p>{{ product.degrees ? product.degrees : 'N/A' }}% vol.</p>
            </li>
            <li class="technical-data-item"  v-if="product.producer">
              <p>Produttore</p>
              <p>{{ product.producer }}</p>
            </li>
            <li class="technical-data-item" v-if="product.grape">
              <p>Vitigno</p>
              <p>{{ product.grape }}</p>
            </li>
            <li class="technical-data-item"  v-if="product.format">
              <p>Formato</p>
              <p>{{ product.format }}</p>
            </li>
            <li class="technical-data-item"  v-if="product.origin">
              <p>Origine</p>
              <p>{{ product.origin }}</p>
            </li>
            <li class="technical-data-item"  v-if="product.flavour">
              <p>Gusto</p>
              <p>{{ product.flavour }}</p>
            </li>
            <li class="technical-data-item"  v-if="product.subcategory">
              <p>Colore</p>
              <p>{{ product.subcategory }}</p>
            </li>
            <li class="technical-data-item"  v-if="product.production_method">
              <p>Metodo di produzione</p>
              <p>{{ product.production_method }}</p>
            </li>
        </ul>
        </AccordionComponent>
      </div>


      <!-- OTHER PRODUCTS -->
      <div v-if="productStore.products.filter(p => p.price < product.price && p.category_id === product.category_id)" >
        <h3 class="title-other-products">Guarda Anche:</h3>
        <ul class="other-products">
          <!-- PRODUCTS BY PRODUCER OR GRAPE OR BETWEEN-->
          <li 
            v-for="filteredProduct in productStore.products
            .filter(p => p.price >  p.price > product.price && p.grape === product.grape && p.producer === product.producer && p.id != product.id || product.price && p.producer === product.producer  && p.id != product.id || p.price > product.price && p.grape === product.grape  && p.id != product.id)
            .slice(0,4)" 
            :key="filteredProduct.id"
            class="card-other-products"
          >
            <div class="link-product" @click="navigateToProduct(filteredProduct.id)">
              <div>
                <h2>{{ filteredProduct.name }} <span v-if="filteredProduct.producer">-  {{ filteredProduct.producer }} </span></h2>
                <p class="product-info"> 
                  <span v-if="filteredProduct.grape">{{ filteredProduct.grape }}</span> 
                  <span v-if="filteredProduct.vintage">{{ filteredProduct.vintage }}</span>
                  <span v-if="filteredProduct.degrees && filteredProduct.vintage || filteredProduct.degrees && filteredProduct.grape "> - </span> 
                  <span v-if="filteredProduct.degrees">{{ filteredProduct.degrees }}% vol.</span>
                </p>
              </div>
                
            </div>

            <div class="info-container">
                  <div class="price">
                    <img src="~/assets/icons/price.svg" alt="" class="icon">
                    <p>{{ filteredProduct.price }}</p>
                  </div>

                  <span class="counter">
                  <span @click="decreaseQuantity(filteredProduct)">-</span>
                  <span>
                    <input 
                      type="number" 
                      :value="getQuantity(filteredProduct)" 
                      @input="updateQuantity(filteredProduct, $event.target.value)" 
                      @blur="validateQuantity(filteredProduct)" 
                      class="input-quantity"
                    />
                  </span>
                  <span @click="increaseQuantity(filteredProduct)">+</span>
                </span>

            </div>
          </li>
        </ul>
      </div>

      <!-- MODULE LINK COPIED -->

      <div v-if="isCopied" class="link-copied">
        <p>Link copiato negli appunti!</p>
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

.btn{
  border:none;
}

.header-product button.btnBack {
  width: 50px;
  position: absolute;
  bottom: 90%;
  left: 5px;
  border: none;
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

p.product-info{
  display:flex;
  gap: 5px;
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


/*  OTHER PRODUCTS */

.card-other-products{
  display: flex;
  min-height: 150px;
  max-height: 300px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  text-rendering: optimizeLegibility;
  box-shadow: 11px 10px 10px -5px rgba(0, 0, 0, 0.3);
}

.link-product{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-other-products{
  margin-left:20px;
}

.other-products{
  overflow-x: scroll;
  padding-left: 20px;
  padding-right: 2rem;
  min-width: 200px;
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
  padding: 20px;
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

/* LINK URL */

.link-copied{
  position: fixed;
  top: 50%;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: var(--primary);
  opacity: 0.8;
  color: var(--background);
  padding: 10px;
  text-align: center;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-copied div{
  background-color: white;
}

/* TECHNIQUE SECTION */

.technical-data{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 35px;
}

.technical-data-item{
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.technical-data-item p{
  max-width: 50%;
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
}

.technical-data-item p:first-child{
  text-align: left;
  font-weight: var(--font-weight-secondary);
  color: var(--primary);
}

.technical-data-item p:last-child{
  text-align: right;
  font-weight: var(--font-weight-tertiary);
  color: var(--text);
}

</style>
