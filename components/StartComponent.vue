<template>
    <div >
        <Transition name="fade">
            <div v-if="showWhiteScreen" class="white-screen"></div>
        </Transition>

        <Transition name="fade">
            <div v-if="showLoadingImage" class="loading-screen">
                <img src="/assets/images/image 2.png" alt="Loading" />
                <h1 class="loading-title">CAMBUSA</h1>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showWhiteScreen = ref(true);
const showLoadingImage = ref(false);

onMounted(() => {
    const hasVisited = window.localStorage.getItem('hasVisitedBefore') === 'true';
    setTimeout(() => {
        showLoadingImage.value = hasVisited ? true : false;
        setTimeout(() => {
            showWhiteScreen.value = hasVisited ? false : true;
        }, 500);
        
        setTimeout(() => {
            showLoadingImage.value = hasVisited ? false : true;
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
    color: var(--label);
    font-size: 5rem;
    font-weight: bold;
    text-shadow: 0px 0px 10px var(--primary);
    z-index: 10000;
    font-family: var(--font-primary);
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
