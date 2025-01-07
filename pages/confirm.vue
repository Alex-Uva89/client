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
  
      // DATA
      const orderData = cartStore.order.form;
      const orderNumber = cartStore.order.orderNumber;
      const cartTotal = cartStore.getCartTotal.toFixed(2);
      const cartItems = cartStore.cart;

      console.log('dati nel carrello: ');
      console.log(cartItems)

  
      // CREATE PDF
      const downloadOrder = () => {
        const doc = new jsPDF();

        // RECTANGLE RED
        const drawHeader = (text, x, y) => {
          const pageWidth = doc.internal.pageSize.getWidth(); // width of the page
          const margin = 10;
          const rectWidth = pageWidth - 2 * margin; // width of the rectangle
          const textHeight = 8; // height of the rectangle

          doc.setFillColor(178, 34, 34); // Color
          doc.rect(margin, y - textHeight + 2, rectWidth, textHeight, 'F'); 
          doc.setTextColor(255, 255, 255);
          doc.text(text, x, y);
          doc.setTextColor(0, 0, 0); 
        };

        // INTESTAZIONE
        doc.setFontSize(26);
        doc.setTextColor(178, 34, 34);
        doc.text("Cambusa", 20, 20);

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(20);
        doc.text("Grazie per il tuo ordine!", 20, 30);

        // DATI ORDINE
        drawHeader("Dati ordine", 20, 50);
        doc.setFontSize(12);
        doc.text(`Numero ${orderNumber || 'N/A'}`, 20, 60);
        doc.text(`Data ${orderData.deliveryDate || 'N/A'}`, 20, 70);

        // DATI SPEDIZIONE
        drawHeader("Dati di spedizione", 20, 90);
        doc.text(`${orderData.fullName || 'N/A'}`, 20, 100);
        doc.text(`${orderData.address || 'N/A'}`, 20, 110);
        doc.text(`${orderData.phone || 'N/A'}`, 20, 120);
        doc.text(`${orderData.email || 'N/A'}`, 20, 130);

        // RIEPILOGO
        drawHeader("Riepilogo ordine", 20, 140);
        let startY = 150; 
        const pageHeight = doc.internal.pageSize.getHeight();
        const marginBottom = 20;
        const lineHeight = 8;

        doc.setFontSize(14);
        doc.text("Prodotti:", 20, startY);
        startY += lineHeight;

        // LISTA PRODOTTI
        doc.setFontSize(10);
        cartItems.forEach((item) => {
          if (startY + lineHeight > pageHeight - marginBottom) {
            doc.addPage(); 
            startY = 20;
            drawHeader("Riepilogo ordine (continua)", 20, startY);
            startY += lineHeight;
          }

          doc.text(`${item.name} - ${item.quantity}`, 20, startY);
          doc.text(`€${item.price.toFixed(2)}`, 180, startY);
          startY += lineHeight;
        });

        // TOTALE
        if (startY + lineHeight > pageHeight - marginBottom) {
          doc.addPage(); // NEW PAGE
          startY = 20;
          drawHeader("Riepilogo ordine (continua)", 20, startY);
          startY += lineHeight;
        }
        doc.setFontSize(12);
        doc.text("Totale", 20, startY);
        doc.setFontSize(14);
        doc.text(`€${cartTotal || 'N/A'}`, 180, startY);
        startY += lineHeight;

        // COMMENTI
        doc.setFontSize(14);
        if (startY + 20 > pageHeight - marginBottom) {
          doc.addPage();
          startY = 20;
          drawHeader("Commenti ordine", 20, startY);
          startY += lineHeight; // Aggiungi lineHeight per separare il titolo dai dati
        } else {
          doc.text("Commenti:", 20, startY);
          startY += lineHeight; // Mantieni la stessa altezza per il titolo
        }
        doc.text(`${orderData.additionalInfo || 'N/A'}`, 20, startY); // I dati dei commenti subito dopo il titolo

        // SERVIZIO CLIENTI
        startY += 20;
        if (startY + 20 > pageHeight - marginBottom) {
          doc.addPage();
          startY = 20;
        }
        doc.setFontSize(14);
        drawHeader("Servizio clienti", 20, startY);
        doc.setFontSize(12);
        doc.text("enoteca@mammaelvira.com", 20, startY + 10);

        // FOOTER
        doc.setFontSize(8);
        doc.text("CAMBUSA by Mamma Elvira | 73100 Lecce, Italia", 20, pageHeight - 10);

        const fileName = `CAMBUSA_ordineNumbero_${orderNumber || "N_A"}_${orderData.fullName || "Cliente"}.pdf`;
        doc.save(fileName);

        cartStore.clearOrderAndCart(); // Pulisce i dati dell'ordine e del carrello
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
  