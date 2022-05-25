<template>
    <div class="product">
        <div style="display: flex; justify-content: space-around">
            <h2>Категория</h2>
            <h2>{{productCategory}}</h2>
        </div>
        <div style="display: flex; justify-content: space-around">
            <h2>Название</h2>
            <h2>{{productName}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['category', 'name'],

        data: () => ({
            productCategory: '',
            productName: ''
        }),

        mounted() {
            this.productCategory = this.category
        }
    }
</script>

<style scoped>
.product {
    position: relative;
    box-sizing: border-box;
    border: 2px solid dimgrey;
    padding: 3px;
    border-radius: 5px;
    width: 90%;
    margin: 10px auto;
}
</style>