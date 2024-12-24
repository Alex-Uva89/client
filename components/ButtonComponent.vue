<template>
  <div>
    <button 
    v-if="!isLink" 
    :type="type" 
    :disabled="disabled" 
    class="btn" 
    :style="{
        width: width, 
        backgroundColor: !disabled? (color === 'var(--primary)' ? 'var(--background)' : 'var(--primary)') : 'var(--disabled)',
        color: !disabled? (color === 'var(--primary)' ? 'var(--primary)' : 'var(--label)') : 'var(--text-secondary)', 
        border: !disabled? (color === 'var(--primary)' ? '1px solid var(--primary)' : 'none') : 'none',
        fontSize: fontSize
    }">
        <slot></slot>
    </button>
    <router-link v-else :to="link" class="btn" :style="{ backgroundColor: color, width: width, color: color === 'var(--primary)' ? 'var(--label)' : 'var(--primary)', border: color === 'var(--primary)' ? 'none' : '1px solid var(--primary)'}">
        <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        color: {
            type: String,
            default: 'var(--primary)',
        },
        width: {
            type: String,
            default: '90vw',
        },
        isLink: {
            type: Boolean,
            default: false,
        },
        link: {
            type: String,
            default: '/',
        },
        type: {
            type: String,
            default: 'button',
        },
        disabled: {
            type: Boolean || String,
            default: false,
        },
        fontSize: {
            type: String,
            default: '1rem',
        }
    }
}
</script>

<style scoped>

.btn{
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
    /* IOS */
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    appearance: none;
}

.btn:disabled{
    cursor: not-allowed;
}

p{
    height: 100px;
    display:flex;
    gap: 10px;
}


</style>