<template>
    <div class="vertical-centralize">
        <h1>{{product.name || 'Новый продукт'}}</h1>

        <div class="photo-wrap">
            <input class="file-input" accept="image/*" @change="photoPreview($event)" type="file">

            <div v-if="!product.photo">
                <h2>Изображение не выбрано</h2>
            </div>

            <img class="photo" v-else :src="product.photo" alt="">

            <h3 class="photo-label" :style="
            !product.photo
            ? {position: 'relative'}
            : {position: 'absolute', bottom: '0px'}
            ">{{ photoLabel }}</h3>
        </div>

        <select>
            <option v-if="product.category" selected :value="product.category">{{ product.category }}</option>

            <option v-for="category in categories" :key="category" :value="category.name">{{ category.name }}</option>

        </select>

    </div>

</template>

<script>


    export default {
// http://localhost:5000/images/debag.jpg
        data: () => ({
            product: {
                photo: null,
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
            },

            inputFile: null
        }),

        computed: {
            photoLabel() {
                return !this.product.photo
                    ? 'Для выбора файла изображения нажмите сюда'
                    : 'Для выбора другого изображения нажмите на фото'
            },

            categories() {
                return this.$store.state.categories.filter(category => category.name !== this.product.category)
            }
        },

        methods: {
            photoPreview(event) {
                this.inputFile = event.target.files[0]
                const reader = new FileReader()

                reader.onload = () => {
                    this.product.photo = reader.result
                }
                if ( /\.(jpe?g|png|gif)$/i.test( this.inputFile.name ) ) {
                    reader.readAsDataURL( this.inputFile );
                }
            }
        },

        async mounted() {


            await this.$store.dispatch('fetchCategories')
            await this.$store.dispatch('fetchProducts')
            this.product = {...this.product, ...this.$store.state.products.filter(product => product.id == this.$route.params.id)[0]}
        }


    }
</script>

<style scoped>
.photo-wrap {
    margin-top: 10px;
    position: relative;
    width: 80%;
    height: auto;
    min-height: 100px;
    border: 2px solid grey;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.file-input {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    opacity: 0;
}

.photo {
    width: 100%;
    height: auto;
}

.photo-label {
    background: white;
}
</style>