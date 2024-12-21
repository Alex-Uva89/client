<template>
  <div class="search-bar-container">
    <img 
      src="../assets/icons/lens_input.svg" 
      alt="icona lente che indica la ricerca testuale"
      class="search-text-icon"
    />
    <input 
      :value="searchQuery"
      @input="updateSearchQuery($event.target.value)"
      aria-label="barra di ricerca dei prodotti" 
      type="text" 
      placeholder="Cerca"
      class="search-bar"
      id="search-bar"
    />
    <button class="voice-search" @click="onVoiceSearch">
      <img 
        src="../assets/icons/mic_input.svg" 
        alt="icona microfono che indica la ricerca vocale" 
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useProductStore } from '@/store/productStore';

export default defineComponent({
  setup() {
    let inputText: HTMLInputElement | null = null;
    const productStore = useProductStore();
    let transcribedText = '';

    // Funzione per aggiornare la ricerca nel prodotto store
    const updateSearchQuery = (query: string) => {
      productStore.setSearchQuery(query);
    };

    // Funzione di ricerca vocale
    const onVoiceSearch = () => {
      if (!('webkitSpeechRecognition' in window)) {
        alert('La funzionalità di ricerca vocale non è supportata dal tuo browser.');
        return;
      }

      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = true;

      recognition.start();

      recognition.onresult = (event: any) => {
        transcribedText = event.results[0][0].transcript;
        if (inputText) {
          inputText.value = transcribedText;
        }
        updateSearchQuery(transcribedText);
      };

      recognition.onerror = (event: any) => {
        console.error('Errore nel riconoscimento vocale:', event.error);
      };

      recognition.onend = () => {
        console.log('Riconoscimento vocale terminato');
      };
    };


    onMounted(() => {
      inputText = document.getElementById('search-bar') as HTMLInputElement;
    });

    return {
      searchQuery: productStore.searchQuery,
      updateSearchQuery,
      onVoiceSearch,
    };
  },
});
</script>


  
  <style scoped>
  .search-bar-container {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 27px auto 20px;
  }
  
  .search-bar-container .search-text-icon {
    position: absolute;
    left: 30px;
    top: 20px;
    transform: translateY(-50%);
    width: 15px;
  }
  
  .search-bar {
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0 31px;
    margin: 0 20px;
  }
  
  .search-bar:focus-visible {
    outline: 3px solid var(--primary);
    outline-offset: 0.5px;
  }
  
  .voice-search {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .voice-search img {
    width: 100%;
    height: 100%;
  }
  </style>
  