import { defineStore } from 'pinia';

const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
    order: {
      form: {
        fullName: "",
        address: "",
        deliveryDate: "",
        email: "",
        phone: "",
        additionalInfo: "",
        acceptTerms: false
      },
      orderNumber: null
    }
  }),
  actions: {
    // Metodo per caricare il carrello da localStorage (se esiste)
    loadCartFromStorage() {
    },
    addProductToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCartToStorage();
    },
    updateQuantity(productId, newQuantity) {
      const item = this.cart.find((item2) => item2.id === productId);
      if (item) {
        if (newQuantity > 0) {
          item.quantity = newQuantity;
        } else {
          this.removeProductFromCart(productId);
        }
        this.saveCartToStorage();
      }
    },
    removeProductFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCartToStorage();
    },
    clearCart() {
      this.cart = [];
      this.saveCartToStorage();
    },
    // Metodo per salvare il carrello in localStorage
    saveCartToStorage() {
    },
    updateOrderForm(field, value) {
      this.order.form[field] = value;
    },
    // Metodo per generare un numero ordine
    generateOrderNumber() {
      const timestamp = Date.now();
      const randomPart = Math.floor(Math.random() * 1e4);
      this.order.orderNumber = `ORD-${timestamp}-${randomPart}`;
    },
    // Metodo per salvare l'ordine
    saveOrder() {
      this.generateOrderNumber();
      const orderData = {
        ...this.order.form,
        orderNumber: this.order.orderNumber,
        cart: this.cart,
        total: this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
      };
      localStorage.setItem("orderData", JSON.stringify(orderData));
      return orderData;
    },
    // Metodo per resettare l'ordine e il carrello
    clearOrderAndCart() {
      this.cart = [];
      this.order = {
        form: {
          fullName: "",
          address: "",
          deliveryDate: "",
          email: "",
          phone: "",
          additionalInfo: "",
          acceptTerms: false
        },
        orderNumber: null
      };
      this.saveCartToStorage();
    }
  },
  getters: {
    getCartWithDetails: (state) => state.cart,
    getCartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
});

export { useCartStore as u };
//# sourceMappingURL=cartStore-Cbt4EuRL.mjs.map
