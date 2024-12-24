<template>
  <div>
    <div class="container-fix-header">
      <Header title="Menù" />
    </div>
    <div class="menu-container">
      <div class="menu-main-container">

        <div class="accordion-container">
          <img src="../assets/icons/basket.svg" alt="icona cestino della spesa"  class="accordion-icon">
          <Accordion title="La mia Cambusa" isLink="true" link="/cart" icon="basket" />
        </div>

        <div class="accordion-group-container">

          <div class="accordion-container">
            <img src="../assets/icons/delivery.svg" alt="iconsa pacco delivery" class="accordion-icon">
            <Accordion
              title="Dove spediamo"
              :hasInput="true"
              :type="'text'"
              :placeholder="'Inserisci il tuo indirizzo'"
              :isLink="false"
            >
            <span>
              In Cambusa troverai un’ampia selezione di vino, bevande e cibo di qualità. Offriamo servizio
              di consegna a domicilio presso la location del tuo soggiorno nel Salento.
            </span>
            <span>
              La consegna è gratuita per gli ordini superiori a 79 euro.
            </span>
            <span>
              Inserisci qui sotto un indirizzo valido e scopri se la tua zona è coperta dal nostro servizio.
            </span>
            </Accordion>
          </div>
  
          <div class="accordion-container">
            <img src="../assets/icons/mail.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Chi siamo"
              :hasInput="false"
              :isLink="false"
            >
            <p>
              Cambusa è un servizio di consegna a domicilio per il tuo soggiorno nel Salento. 
            </p>
            <p>
              Hai in programma una festa o aperitivo a casa, in masseria o in villa? Ordina dall’app Cambusa e
            ricevi comodamente tutta la spesa in tempi rapidissimi.
            </p> 
            
            <p>
            Inserisci l’indirizzo di consegna nella sezione <strong>“Indirizzi”</strong> e verifica subito la copertura del nostro servizio (garantiamo la consegna
            in tutto il territorio salentino)!
            </p>
            </Accordion>

          </div>
        </div>

        <div class="accordion-group-container">
          <div class="accordion-container">
            <img src="../assets/icons/privacy.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Altre info"
              :hasInput="false"
              :isLink="false"
            >
            <p>
              La tua privacy è importante per noi. I dati che raccogliamo vengono utilizzati esclusivamente per:
            </p>

              <ul class="list-info">
                <li>
                  Analisi di mercato, al fine di migliorare i nostri servizi e offrirti un'esperienza personalizzata.
                </li>
                <li>
                  Ricordare le tue preferenze e fornirti un servizio più efficiente.
                </li>
                <li>
                  Non condividiamo i tuoi dati con terze parti non autorizzate e li conserviamo in conformità con le normative vigenti sulla protezione dei dati personali.
                </li>
              </ul>

            </Accordion>
          </div>

          <div class="accordion-container">
            <img src="../assets/icons/clock.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Assistenza clienti"
              :hasInput="false"
              :isLink="false"
            >
            <p>
              Contattaci per qualsiasi dubbio riguardante ordini, disponibilità e istruzioni di consegna.
            </p>
            </Accordion>
          </div>

          <div class="accordion-container">
            <img src="../assets/icons/help-us.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Aiutaci a migliorare l'app"
              :hasInput="false"
              :isLink="false"
              :hasMail="true"
            >
            <h2>
              Aiutaci a migliorare!!
            </h2>
            <p>
              Cosa ne pensi del servizio CAMBUSA e del funzionamento di questa app?
            </p>
            <p>
              Scrivici e segnala tutto quello che vuoi rispetto alla tua esperienza con noi.
            </p>
            </Accordion>
          </div>
        </div>


      </div>

      <div class="footer">
        <Logo />
        <router-link to="/login" class="login">Sei un amministratore?</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/HeaderDefault.vue'
import Logo from '@/components/LogoSection.vue'
import { defineComponent, onMounted } from "vue";
import Accordion from "@/components/AccordionComponent.vue";

export default defineComponent({
  components: { 
    Accordion,
    Header,
    Logo
   },

});
</script>

<style scoped>

.menu-container {
  width: 100vw;
  padding-top: 120px;
  overflow: scroll;
  margin-bottom: 120px;
}

.container-fix-header{
  position: fixed;
  width: 100%;
  z-index: 100;
}

.accordion-group-container{
  margin: 27px 0;
}

.menu-main-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.accordion-icon{
  width: 30px;
  height: 30px;
  align-self: start;
  margin-top: 5px;
}

.accordion-container{
  display:flex;
  align-items: center;
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid var(--primary);
  padding: 20px;
  gap: 20px;
}

.list-info{
  list-style-type: disc;
  padding-left: 20px;
}

.list-info li{
  margin-bottom: 10px;
}

.list-info li::marker{
  color: var(--primary);
}


.footer{
  width: 100%;
  background-color: var(--background);
  padding: 20px;
  text-align: center;
}

.footer .login{
  color: var(--primary)
}
  
</style>