<template>
    <div>
        <Start />
        <HeaderSearch />
        <BannerCategory />
        <ListProduct />
    </div>
</template>

<script>
import Start from '~/components/StartComponent.vue';
import HeaderSearch from '~/components/HeaderSearch.vue';
import ListProduct from '~/components/ListProductComponent.vue';
import BannerCategory from '~/components/BannerCategory.vue';

export default {
    name: 'home',
    components: {
        Start,
        HeaderSearch,
        ListProduct,
        BannerCategory,
    }
}
</script>
