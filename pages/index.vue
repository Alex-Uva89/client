<template>
    <div>
        <HeaderSearch />
        <BannerCategory />
        <ListProduct />
    </div>
</template>

<script>
import HeaderSearch from '~/components/HeaderSearch.vue';
import ListProduct from '~/components/ListProductComponent.vue';
import BannerCategory from '~/components/BannerCategory.vue';

export default {
    name: 'home',
    components: {
        HeaderSearch,
        ListProduct,
        BannerCategory,
    }
}
</script>
