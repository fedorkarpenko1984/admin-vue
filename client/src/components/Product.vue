<template>
    <div class="product" @click="$router.push(`/product/${productProps.id}`)">
        <div style="display: flex; justify-content: space-between">
            <h2>Категория</h2>
            <h2 class="black-font">{{productProps.category}}</h2>
        </div>
        <div style="display: flex; justify-content: space-between">
            <h2>Название</h2>
            <h2 class="black-font">{{productProps.name}}</h2>
        </div>
        <div style="display: flex; justify-content: space-between">
            <h2>Остаток</h2>
            <h2 class="black-font">{{productProps.stockBalance ? productProps.stockBalance : 0}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['productProps'],

        data: () => ({
            product: {}
        }),

        mounted() {
            this.product = this.productProps
        }
    }
</script>

<style scoped>
.product {
    position: relative;
    box-sizing: border-box;
    border: 2px solid dimgrey;
    padding: 0px 10px;
    border-radius: 5px;
    width: 90%;
    margin: 10px auto;
}

.black-font {
    color: black;
}
</style>