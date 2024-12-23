<template>
    <div class="container-confirm">
      <!-- <button class="btnBack" @click="this.$router.go(-1);">
        <img src="~/assets/icons/back_red.svg" alt="icona del tasto indietro">
      </button> -->
      <img class="icon-confirm" src="@/assets/icons/send.svg" alt="">
  
        <div class="container-dates">
            <div class="container-title">
                <h2 class="title-confirm">

                    La tua lista è stata inviata
                </h2>
            <small>congratulazioni!</small>
            </div>
    
            <div class="banner-confirm">
                <span>
                    Riceverai la conferma dell'ordine all'indirizzo email selezionato:
                </span>
                <h3>
                    {{ orderData ? orderData.email : 'N/A' }}
                </h3>
            </div>
    
            
            <div>
                <h3>
                    il tuo numero ordine: 
                </h3>
                <span>{{ orderNumber ? orderNumber : 'N/A' }}</span>
            </div>

            <div>
                <h3>
                    riceverai la tua lista della spesa il: 
                </h3>
                <span>{{ orderData ? orderData.deliveryDate : 'N/A' }}</span>
            </div>

            <div>
                <h3>
                    All'indirizzo: 
                </h3>
                <span>{{ orderData ? orderData.address : 'N/A' }}</span>
            </div>

            <div>
                <h3>
                    Totale da pagare alla consegna: 
                </h3>
                <span>{{ cartTotal ?  cartTotal : 'N/A'}} €</span>
            </div>

            

        </div>
    
            <div class="container-actions">
                <ButtonComponent fontSize="18px" @click="downloadOrder" color="var(--background)">
                    Scarica l'ordine
                </ButtonComponent>
            </div>
    </div>
  </template>
  
  <script>
  import { jsPDF } from "jspdf";
  import { useCartStore } from "@/store/cartStore";
  import ButtonComponent from "~/components/ButtonComponent.vue";
  
  export default {
    name: "Confirm",
    components: {
      ButtonComponent,
    },
    setup() {
      const cartStore = useCartStore();
  
      // Prendi i dati dallo store
      const orderData = cartStore.order.form;
      const orderNumber = cartStore.order.orderNumber;
      const cartTotal = cartStore.getCartTotal.toFixed(2);

  
      const downloadOrder = () => {
        const doc = new jsPDF();
  
        doc.text(`Grazie ${orderData ? orderData.fullName : 'N/A'} per averci scelto!`, 20, 10);
        doc.text("Ordine Confermato", 20, 20);
        doc.text(`Numero ordine: ${orderNumber ? orderNumber : 'N/A'}`, 20, 30);
        doc.text(`Email: ${orderData ? orderData.email : 'N/A'}`, 20, 40);
        doc.text(`Data di consegna: ${orderData ? orderData.deliveryDate : 'N/A'}`, 20, 50);
        doc.text(`Indirizzo: ${orderData ? orderData.address : 'N/A'}`, 20, 60);
        doc.text(`Totale: ${cartTotal ? cartTotal : 'N/A'} €`, 20, 70);
  
        const fileName = `ordine_${orderNumber || "N_A"}_${orderData?.fullName || "Cliente"}.pdf`;
  
        doc.save(fileName);
  
        cartStore.clearOrderAndCart(); // Pulisce i dati dell'ordine e del carrello
        this.$router.push('/'); // Reindirizza alla home
      };
  
      return {
        orderData,
        orderNumber,
        downloadOrder,
        cartTotal,
      };
    },
    beforeRouteLeave(to, from, next) {
      console.log("Lascio la pagina di conferma");
      next();
    },
  };
  </script>
  
  <style scoped>
  .container-confirm {
    display: flex;
    flex-direction: column;
    font-family: var(--font-secondary);
    margin-bottom: 120px;
}
.container-dates {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
}

.container-dates h3 {
    color: var(--primary);
    margin-bottom: 5px;
}

.container-dates div span {
    font-size: var(--font-size-small);
    color: var(--text);
}

    .title-confirm {
        font-size: 1.3rem;
        color: var(--primary);;
    }

    .container-title{
        text-align: center;
    }

   
    .banner-confirm{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        background-color: var(--banner);
        align-items: center;
        border-radius: 10px;
        text-align:center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .banner-confirm h3{
        color: var(--text);
        
    }
  
  .btnBack {
    display: inline;
    width: 30px;
    border: none;
  }
  
  .icon-confirm {
    max-width: 200px;
    width: 200px;
    align-self: center;
  }
  
  .container-dates {
    margin-top: 20px;
    border-top: 2px solid var(--primary);
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.3);
    padding-top: 20px;
  }

  .container-actions{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

  </style>
  