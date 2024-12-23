<template>
    <div class="accordion">
      <!-- LINK -->
      <div v-if="isLink" class="accordion-header">
        <router-link :to="link" class="accordion-title">
            <span>
                {{ title }}
            </span>

            <img src="../assets/icons/close-arrow.svg" alt="icona a freccia" class="arrow">
        </router-link>
      </div>
      <!-- NOT LINK - CONTENT VARIABLE -->
      <div v-else class="accordion-header" @click="toggleAccordion">
        <h2 class="accordion-title" :class="{'open-title': isOpen}" >
            <span>
                {{ title }}
            </span>
            <img src="../assets/icons/close-arrow.svg" alt="icona a freccia" class="arrow" :class="{ 'rotate': isOpen }">
        </h2>
      </div>
  
      <!-- Content -->
      <transition name="accordion">
        <div v-if="isOpen && !isLink" class="accordion-content">
          <p>
            <slot></slot>
          </p>
  
          <!-- Optional Input -->
            <div v-if="hasInput" class="accordion-input">
                <input
                :type="type"
                :placeholder="placeholder"
                v-model="email"
                />
                <ButtonComponent width="100%">Invia</ButtonComponent>
            </div>

            <!-- Optional Mail -->
            <div v-if="hasMail" class="accordion-input">
                <form action="">
                    <input 
                    type="email" 
                    placeholder="Inserisci la tua email" 
                    v-model="email">
                    <input 
                    type="text" 
                    placeholder="Inserisci il tuo messaggio" 
                    v-model="email" 
                    />
                    <ButtonComponent width="100%" @click="sendEmail">Invia</ButtonComponent>
                </form>
            </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import ButtonComponent from "./ButtonComponent.vue";
  
  export default defineComponent({
    name: "Accordion",
    props: {
      title: { type: String, required: true }, 
      content: { type: String, default: "" },
      hasInput: { type: Boolean, default: false },
      type: { type: String, default: "text" },
      placeholder: { type: String, default: "" },
      hasMail: { type: Boolean, default: false },
      isLink: { type: Boolean, default: false },
      link: { type: String, default: "#" },
    },
    components: {
      ButtonComponent,
    },
    setup(props) {
      const isOpen = ref(false); 
      const email = ref(""); 
  
      const toggleAccordion = () => {
        isOpen.value = !isOpen.value;
      };
  
      const sendEmail = () => {
        console.log(`Email inviata: ${email.value}`);
        email.value = "";
      };
  
      return { isOpen, email, toggleAccordion, sendEmail };
    },
  });
  </script>
  
  <style scoped>
  .accordion {
    flex: 1;
  }
  
  .accordion-header {
    
  }
  
  .accordion-title {
    position: relative;
    text-decoration: none;
    color: var(--text);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-primary);
    margin: 10px 0;
    transition: margin 0.3s ease;
  }

  .accordion-title.open-title {
    margin: 10px 0 35px;
  }

  .accordion-title .arrow{
    width: 10px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s;
  }

    .accordion-title .arrow.rotate{
        transform: translateY(-50%) rotate(90deg);
    }
  
  .accordion-content p{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .accordion-enter-active,
  .accordion-leave-active {
    transition: all 0.3s ease;
  }

  .accordion-input input {
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    border: 1px solid var(--text);
    border-radius: 5px;
  }
  
  .accordion-enter-from,
  .accordion-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }
  
  .accordion-enter-to,
  .accordion-leave-from {
    max-height: 500px;
    opacity: 1;
  }

  a.accordion-title{
    display: block;
  }
  </style>
  