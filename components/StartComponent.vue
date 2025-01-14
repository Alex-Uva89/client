<template>
    <div >
        <Transition name="fade">
            <div v-if="showWhiteScreen" class="white-screen"></div>
        </Transition>

        <Transition name="fade">
            <div v-if="showLoadingImage" class="loading-screen">
                <img src="/assets/images/image 2.png" alt="Loading" />
                <Logo class="loading-title" />
            </div>
        </Transition>
    </div>
</template>

<script setup>
import Logo from '~/components/LogoSection.vue'
import { ref, onMounted } from 'vue';

const showWhiteScreen = ref(true);
const showLoadingImage = ref(false);

onMounted(() => {
    setTimeout(() => {
        showLoadingImage.value = true;
        setTimeout(() => {
            showWhiteScreen.value = false;
        }, 500);
        
        setTimeout(() => {
            showLoadingImage.value = false;
        }, 5000);
    }, 500);
});
</script>

<style scoped>
.white-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 10000;
}

.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 10000;
}

.loading-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    opacity: 0;
    transition: opacity 1.5s ease;
}

.content.visible {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
