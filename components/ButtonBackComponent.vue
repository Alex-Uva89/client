<template>
    <button class="btnBack" @click="goBack">
      <img src="~/assets/icons/back.svg" alt="icona del tasto indietro">
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonBack',
    methods: {
      goBack() {
        if (this.$route.name) {
          this.$router.go(-1);
        } else {
          this.$router.push('/'); 
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .btnBack {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    width: 30px;
    cursor: pointer; /* Indica che il pulsante è interattivo */
  }
  </style>
  