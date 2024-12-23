<template>

    <nav class="nav">
        <router-link to="/" class="item-nav">
            <img src="../assets/icons/lens.svg" alt="logo della lente d'ingrandimento">
            <span>
                Cerca
            </span>
        </router-link>
        <router-link to="/menu" class="item-nav">
            <img src="../assets/icons/mamma-elvira.svg" alt="logo aziendale, raffigurante volto di mamma elvira">
            <span>Menù</span>
        </router-link>
        <router-link to="/cart" class="item-nav">
            <img src="../assets/icons/basket.svg" alt="logo del carrello">
            <span>
                La mia spesa
            </span>
            <span v-if="cartStore.getCartTotalItems != 0" class="cart-counter">
                {{ cartStore.getCartTotalItems }}
            </span>
        </router-link>
    </nav>

</template>

<script>
import { useCartStore } from '@/store/cartStore';



export default {
    name: 'navigation',
    setup() {
        const cartStore = useCartStore();

        return {
            cartStore
        }
    }
}
</script>

<style scoped>
    .nav{
        background-color: var(--background);
        font-family: var(--font-secondary);
        font-weight: var(--font-weight-primary);
        font-size: var(--font-size-small);
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-top: 2px solid #74121D;
        box-shadow: 0px -2px 10px rgba(0, 0, 0, .35);
        .item-nav{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #000;
            gap: 8px;
            img{
                width: 30px;
                height: 30px;
            }
            &:last-child{
                position: relative;
            }
        }
    }

    .cart-counter{
        position: absolute;
        bottom: 50px;
        right: 30px;
        background-color: #74121D;
        color: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size-small);
    }

</style>
