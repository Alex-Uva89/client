<template>
    <div>
      <HeaderDefault title="Checkout" />
  
      <form @submit.prevent="submitForm" class="checkout-form" aria-labelledby="formTitle">

        <div class="form-container">
            <div class="form-group">
                <label for="fullName" aria-label="Nome e Cognome">Nome e Cognome*</label>
                <img src="../assets/icons/account.svg" alt="icona nome e cognome">
                <input v-model="form.fullName" type="text" id="fullName" placeholder="Nome e Cognome" required aria-required="true" aria-describedby="fullNameHelp" />
                <small id="fullNameHelp">Inserisci il tuo nome completo</small>
            </div>

            <div class="form-group">
                <label for="address" aria-label="Indirizzo di Consegna">Indirizzo di Consegna*</label>
                <img src="../assets/icons/local.svg" alt="icona indirizzo">
                <input v-model="form.address" type="text" id="address" placeholder="Indirizzo" required aria-required="true" aria-describedby="addressHelp" />
                <small id="addressHelp">Inserisci l'indirizzo di consegna</small>
            </div>

            <div class="form-group">
                <label for="deliveryDate" aria-label="Data e Ora di Consegna">Data e Ora*</label>
                <img src="../assets/icons/date.svg" alt="icona data e ora">
                <input v-model="form.deliveryDate" type="datetime-local" @focus="hidePlaceholder" @blur="showPlaceholder" @click="openDate" id="deliveryDate" required aria-required="true" aria-describedby="deliveryDateHelp" class="input-date" />
                <span v-if="showPlaceholderText" class="placeholder-text">
                     dd/mm/yyyy --:--
                </span>
                <small id="deliveryDateHelp">Scegli la data e l'orario di consegna</small>
            </div>

            <div class="form-group">
                <label for="email" aria-label="Email">Email*</label>
                <img src="../assets/icons/mail.svg" alt="icona email">
                <input v-model="form.email" type="email" id="email" placeholder="Email" required aria-required="true" aria-describedby="emailHelp" />
                <small id="emailHelp">Inserisci il tuo indirizzo email</small>
            </div>

            <div class="form-group">
                <label for="phone" aria-label="Numero di Telefono">Numero di Telefono*</label>
                <img src="../assets/icons/phone.svg" alt="icona telefono">
                <input v-model="form.phone" type="tel" id="phone" placeholder="Numero di telefono" required aria-required="true" aria-describedby="phoneHelp" />
                <small id="phoneHelp">Inserisci il tuo numero di telefono</small>
            </div>

            <div class="form-group">
                <label for="additionalInfo" aria-label="Informazioni Aggiuntive">Informazioni Aggiuntive</label>
                <img src="../assets/icons/privacy.svg" alt="icona nome e cognome">
                <textarea v-model="form.additionalInfo" id="additionalInfo" placeholder="Altre info" aria-describedby="additionalInfoHelp"></textarea>
                <small id="additionalInfoHelp">Aggiungi eventuali informazioni aggiuntive</small>
            </div>

            <div class="form-group terms">
                <label>
                <input v-model="form.acceptTerms" type="checkbox" required aria-required="true" />
                Accetto i <a href="/terms" aria-label="Termini e condizioni">termini e condizioni</a>
                </label>
            </div>
        </div>

   


        <div class="form-group">
          <h3 class="title-list">Riepilogo Spesa</h3>
          <ListCartComponent :cartActions=false />
        </div>
  
        <div class="btn-send-list">
            <small v-if="!validateForm()" class="error-text">Compila i campi obbligatori</small>
            <ButtonComponent 
                :color="'var(--primary)'" 
                :width="'90vw'" 
                :disabled="!form.acceptTerms" 
                @click="submitForm">
                    Invia Lista
            </ButtonComponent>
        </div>
      </form>


    </div>
  </template>
  
  <script>
  import { useCartStore } from '~/store/cartStore';
  import HeaderDefault from '~/components/HeaderDefault.vue';
  import ButtonComponent from '~/components/ButtonComponent.vue';
  import ListCartComponent from '~/components/ListCartComponent.vue';
  
  export default {
    components: {
      HeaderDefault,
      ButtonComponent,
      ListCartComponent,
    },
    data() {
      return {
        form: {
          fullName: '',
          address: '',
          deliveryDate: '',
          email: '',
          phone: '',
          additionalInfo: '',
          acceptTerms: false,
        },
        errors: {
            fullName: false,
            address: false,
            deliveryDate: false,
            email: false,
            phone: false,
        },
        showPlaceholderText: true,
      };
    },
    computed: {
      cartStore() {
        return useCartStore();
      },
    },
    methods: {
        validateForm() {
            this.errors.fullName = !this.form.fullName.trim();
            this.errors.address = !this.form.address.trim();
            this.errors.deliveryDate = !this.form.deliveryDate.trim();
            this.errors.email = !this.form.email.trim() || !this.isValidEmail(this.form.email);
            this.errors.phone = !this.form.phone.trim();

            return !Object.values(this.errors).includes(true);
        },
        isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
        async submitForm() {
            const orderNumber = `${Math.random().toString(36).substring(2, 5).toUpperCase()}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;


            if (this.validateForm()) {
                const orderData = {
                ...this.form,
                orderNumber,
                cart: this.cartStore.getCartWithDetails,
                total: this.cartStore.getCartTotal.toFixed(2),
                };

                try {
                // Invia i dati del form allo store
                Object.keys(this.form).forEach(field => {
                    this.cartStore.updateOrderForm(field, this.form[field]);
                });

                this.cartStore.saveOrder(); // Salva l'ordine nello store

                localStorage.setItem('orderData', JSON.stringify(orderData));

                // Reindirizza alla pagina di conferma
                this.$router.push('/confirm');
                } catch (error) {
                console.error("Errore nell'invio dell'ordine:", error);
                alert('Si è verificato un errore. Riprova più tardi.');
                }
            } else {
                const input = document.getElementsByTagName('input');
                for (let i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    input[i].classList.add('error');
                } else {
                    input[i].classList.remove('error');
                }
                }
            }
        },
      hidePlaceholder() {
        this.showPlaceholderText = false;
      },
      showPlaceholder() {
        if (!this.form.deliveryDate) {
          this.showPlaceholderText = true;
        }
      },
        openDate() {
            const dateInput = document.getElementById('deliveryDate');
            console.log('dateInput:', dateInput);
            dateInput.showPicker();
        },
    },
    watch: {
      'form.acceptTerms': function (newValue) {
        console.log('acceptTerms changed:', newValue);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .checkout-form {
    max-height: 4000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: var(--font-primary);
    margin-bottom: 120px;
  }

  .form-container{
    margin: 30px 20px 0;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .form-group.terms{
    padding-top: 10px;
  }

    .form-group input {
        padding:5px 5px 5px 40px;
        border: 1px solid var(--text);
        border-radius: 5px;
    }

    .form-group input:focus {
        padding-left: 40px;
    }

    .form-group input::placeholder{
        font-size: var(--font-size-small);

    }

    .form-group input:focus::placeholder{
        color: white;
    }

    .form-group textarea::placeholder{
        font-size: var(--font-size-small);
        padding: 40px;
        line-height: 2.5;
    }

    .form-group textarea{
        display: flex;
        padding-left: 40px;
    }

    .form-group label{
        margin-bottom: 5px;
    }

    .form-group small {
        font-size: var(--font-size-small);
        color: var(--primary);
        text-align: right;
    }
  
  button:disabled {
    background-color: #ccc;
  }

.title-list {
        background-color: var(--primary);
        color: white;
        padding: 10px 20px;
        position: relative;
        display: flex;
        justify-content: start;
        align-items: center;
}

.btn-send-list{
    margin: 0 20px;
}

.placeholder-text{
    position: absolute;
    top: 45%;
    left: 12%;
    color: #aaa;
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: start;
    width: 200px;
}

.placeholder-text img{
    width: 20px;
}

.form-group img{
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    left: 10px;
    width: 18px;
}

.input-date{
    color: var(--label);
}

.input-date:focus{
    color: trasparent;
}

.input-date::-webkit-calendar-picker-indicator{
   display: none;
}

/* ERROR INPUT */

.form-group input.error {
  border: 1px solid red;
}

.form-group textarea.error {
  border: 1px solid red;
}

.form-group small.error {
  color: red;
}

.error-text {
    color: red;
    text-align: center;
    font-size: var(--font-size-small);
    margin: 10px;

}
  </style>
  