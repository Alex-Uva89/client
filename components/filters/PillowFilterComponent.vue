<template>
    <div class="filter-content-pillow">
        <h3>{{ title }}</h3>
            <div class="filter-content-order-buttons">
                <slot></slot>
            </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';


defineProps({
    title: {
        type: String,
        required: true
    },
});


</script>

<style scoped>
.filter-content-pillow {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-content-pillow h3{
    font-family: var(--font-primary);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-secondary);
    color: var(--text);
}

.filter-content-order-buttons {
    display: gird;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px 5px;
}


</style>