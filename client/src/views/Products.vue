<template>
    <h1>Фильтры</h1>
    <div class="vertical-centralize">
        <h2>Выбирите категорию</h2>
        <select class="my-select" @change="setCategory($event)">
            <option value="0">все категории</option>

            <option v-for="category in categories" :key="category.name" :value="category.name">{{category.name}}</option>
            
        </select>
    </div>

    <div style="width: 90%; margin: 10px auto;display: flex; justify-content: space-around; align-items: center">
        <h2 style="width: 80%">Показывать только товары, которые есть в наличии</h2>
        <div @click="checkbox = !checkbox" :style="{background: checkbox ? 'linear-gradient( white, black, white) ' : 'white'}" class="custom-checkbox"></div>
    </div>

    <hr style="margin-top: 30px">
    <div style="position: relative; padding-top: 10px">
        <h1 style="margin-bottom: 20px; margin-top: 5px">Товары</h1>
        <button class="btn new-product-btn" @click="$router.push(`/product/new`)">+1</button>

        <hr>

        <Product v-for="product in products" :key="product.id" :product-props="product" />

    </div>
</template>

<script>
    import Product from "../components/Product";

    export default {
        components: {Product},

        data: () => ({
            checkbox: false,
            category: '0'
        }),

        computed: {
            categories() {
                return this.$store.state.categories
            },

            products() {
                const products = this.$store.state.products;
                if (this.category === '0' && !this.checkbox) return products

                if (this.category === '0' && this.checkbox) return products.filter(product => {
                    if (product.stockBalance) return product.stockBalance
                })
                if (this.category !== '0' && !this.checkbox) return products.filter(product => product.category === this.category)
                return products.filter(product => {
                    if (product.stockBalance && product.category === this.category) return product
                })
            }
        },

        methods: {
            checkboxHandler() {

            },

            setCategory(event) {
                this.category = event.target.value
            }
        },

        mounted() {
            this.$store.dispatch('fetchCategories')
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>
.new-product-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 7px;
    border: 1px solid dimgrey;
    background: dimgrey;
    font-size: 20px;
    color: white;
    box-shadow: 0px 0px 1px 1px dimgrey;
}

.my-select {
    margin-top: 10px;
    height: 35px;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
}

.custom-checkbox {
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    border: 2px solid grey;
    border-radius: 5px;
}
</style>