<template>
  <div>
    <div class="container-fix-header">
      <Header title="Menù" />
    </div>
    <div class="menu-container">
      <div class="menu-main-container">

        <div class="accordion-container">
          <img src="../assets/icons/basket.svg" alt="icona cestino della spesa">
          <Accordion title="La mia lista" isLink="true" link="/cart" icon="basket" />
        </div>

        <div class="accordion-group-container">

          <div class="accordion-container">
            <img src="../assets/icons/delivery.svg" alt="iconsa pacco delivery" class="accordion-icon">
            <Accordion
              title="Dove spediamo"
              content="Digita il tuo indirizzo, scopriamo assieme se inviamo da te"
              :hasInput="true"
              :type="'text'"
              :placeholder="'Inserisci il tuo indirizzo'"
              :isLink="false"
            />
          </div>
  
          <div class="accordion-container">
            <img src="../assets/icons/mail.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Chi siamo"
              content="Inserisci la tua email per iscriverti alla nostra newsletter."
              :hasInput="false"
              :isLink="false"
            />
          </div>
        </div>

        <div class="accordion-group-container">
          <div class="accordion-container">
            <img src="../assets/icons/privacy.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Altre info"
              content="Inserisci la tua email per iscriverti alla nostra newsletter."
              :hasInput="false"
              :isLink="false"
            />
          </div>

          <div class="accordion-container">
            <img src="../assets/icons/clock.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Orari assistenza clienti"
              content="Inserisci la tua email per iscriverti alla nostra newsletter."
              :hasInput="false"
              :isLink="false"
            />
          </div>

          <div class="accordion-container">
            <img src="../assets/icons/help-us.svg" alt=""  class="accordion-icon">
            <Accordion
              title="Aiutaci a migliorare l'app"
              content="Inviaci una mail con i tuoi feedback"
              :hasInput="false"
              :isLink="false"
              :hasMail="true"
            />
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