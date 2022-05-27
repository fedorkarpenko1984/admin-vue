<template>
    <div class="vertical-centralize">
        <h1>{{product.name || 'Новый продукт'}}</h1>


    </div>

</template>

<script>
    export default {

        data: () => ({
            product: {
                photo: '',
                name: '',
                category: '',
                description: '',
                features: '',
                weightOrVolume: '',
                peacesPerPack: 1,
                price: 0,
                sale: {
                    sale: 0,
                    reason: ''
                },
                stockBalance: 0
            }
        }),

        async mounted() {
            await this.$store.dispatch('fetchProducts')
            this.product = {...this.product, ...this.$store.state.products.filter(product => product.id == this.$route.params.id)[0]}
            console.log(this.product)
        }


    }
</script>

<style scoped>

</style>