<template>
      <h1 class="intestate-category">{{ categoryStore.selectedCategory ? categoryStore.selectedCategory['category'].name : 'Tutti' }}</h1>
</template>

<script>
import { useCategoryStore } from '@/store/categoryStore';

export default {
    name: 'BannerCategory',
    setup() {
        const categoryStore = useCategoryStore();
        return {
            categoryStore,
        };
    },
}
</script>

<style scoped>

.intestate-category {
    width: 100%;
    display: flex;
    font-family: var(--font-primary);
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    height: 40px;
    color: var(--label);
    font-size: var(--font-size-xlarge);
    font-weight: var(--font-weight-secondary);
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
}



</style>