<template>
    <div class="vertical-centralize">

        <input placeholder="Название продукта" type="text" class="input title-input" v-model="product.name">

        <div class="photo-wrap">
            <input class="file-input" accept="image/*" @change="photoPreview($event)" type="file">

            <div v-if="!product.photo">
                <h2>Изображение не выбрано</h2>
            </div>

            <img class="photo" v-else :src="photoUrl" alt="">

            <h3 class="photo-label" :style="
            !product.photo
            ? {position: 'relative'}
            : {position: 'absolute', bottom: '0px'}
            ">{{ photoLabel }}</h3>
        </div>

        <h2 style="margin-top: 10px" v-if="!product.category">Выберите категорию</h2>
        <select class="my-select" @change="setCategory($event)">
            <option v-if="product.category" selected :value="product.category">{{ product.category }}</option>
            <option v-for="category in categories" :key="category" :value="category.name">{{ category.name }}</option>
        </select>

        <textarea class="textarea mt-20" v-model="product.description" placeholder="Описание товара" rows="5"></textarea>

        <textarea class="textarea mt-20" v-model="product.features" placeholder="Характеристики товара" rows="5"></textarea>


        <div class="mt-20" style="display: flex;justify-content: space-between;width: 80%;align-items: center">
            <h2>Масса/объём</h2>
            <input type="text" v-model="product.weightOrVolume" class="input small-input">
        </div>

        <div class="mt-20" style="display: flex;justify-content: space-between;width: 80%;align-items: center">
            <h2>В упаковке(шт)</h2>
            <input type="text" v-model.number="product.peacesPerPack" class="input small-input">
        </div>

        <div class="mt-20" style="display: flex;justify-content: space-between;width: 80%;align-items: center">
            <h2>Цена</h2>
            <input type="text" v-model.number="product.price" class="input small-input" >
        </div>

        <div class="mt-20" style="display: flex;justify-content: space-between;width: 80%;align-items: center">
            <h2>В наличии(шт)</h2>
            <input type="text" v-model.number="product.stockBalance" class="input small-input" readonly>
        </div>

        <h1 class="mt-20">Скидки</h1>
        <div  style="display: flex;justify-content: space-between;width: 80%;align-items: center">
            <h2>Размер скидки(%)</h2>
            <input type="text" v-model.number="product.sale" class="input small-input">
        </div>
        <textarea class="textarea mt-20" v-model="product.saleReason" placeholder="Причина скидки" rows="2"></textarea>


        <div style="display: flex;justify-content: space-between;width: 80%;align-items: center;margin: 30px 0">
            <button style="color: cornflowerblue" class="btn btn-standard" @click="$router.push('/products')">Назад</button>
            <button style="color: #2f902f" class="btn btn-standard"
                    @click="$route.params.id === 'new' ? saveProduct() : changeProduct()">Сохранить</button>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
// http://localhost:5000/images/debag.jpg
        data: () => ({
            product: {
                id: '',
                photo: null,
                name: '',
                category: '',
                description: '',
                features: '',
                weightOrVolume: '',
                peacesPerPack: 1,
                price: 0,
                sale: 0,
                saleReason: '',
                stockBalance: 0
            },

            photoUrl: '',

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

            // photoUrl() {
            //     return this.product.photo === null
            //         ? 'http://localhost:5000/images/' + this.product.photo
            //         : ''
            // }
        },

        methods: {
            photoPreview(event) {
                this.inputFile = event.target.files[0]
                const reader = new FileReader()

                reader.onload = () => {
                    !this.product.photo ? this.product.photo = ' ' : console.log('not empty')
                    this.photoUrl = reader.result
                }
                if ( /\.(jpe?g|png|gif)$/i.test( this.inputFile.name ) ) {
                    reader.readAsDataURL( this.inputFile );
                }
            },

            setCategory(event) {
                this.product.category = event.target.value
            },

            saveProduct() {

                const formData = new FormData()
                for (let key in this.product) {
                    formData.append(key, this.product[key])
                }

                if (!this.inputFile) {
                    axios.post("http://localhost:5000/api/products/create", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then(res => {
                        console.log(res)
                    })
                    this.$router.push('/products')
                    return
                }

                const reader = new FileReader()
                reader.onload = () => {

                    formData.append('photo', this.inputFile)

                    console.log(formData)

                    axios.post("http://localhost:5000/api/products/create", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then(res => {
                        console.log(res)
                        this.$router.push('/products')
                    })

                }
                reader.readAsArrayBuffer(this.inputFile);
            },

            changeProduct() {
                const formData = new FormData()
                for (let key in this.product) {
                    formData.append(key, this.product[key])
                }

                if (!this.inputFile) {
                    axios.post("http://localhost:5000/api/products/replace", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then(res => {
                        console.log(res)
                    })
                    this.$router.push('/products')
                    return
                }
                const reader = new FileReader()
                reader.onload = () => {

                    formData.append('photo', this.inputFile)

                    console.log(formData)

                    axios.post("http://localhost:5000/api/products/replace", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then(res => {
                        console.log(res)
                        this.$router.push('/products')
                    })

                }
                reader.readAsArrayBuffer(this.inputFile);
            }



        },

        async mounted() {
            await this.$store.dispatch('fetchCategories')
            await this.$store.dispatch('fetchProducts')
            this.product = {...this.product, ...this.$store.state.products.filter(product => product.id == this.$route.params.id)[0]}
            this.photoUrl = this.product.photo !== null ? 'http://localhost:5000/images/' + this.product.photo : ''
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

.textarea {
    resize: none;
    outline: none;
    border: none;
    border-radius: 5px;
    border: 1px solid dimgrey;
    font-size: 20px;
    width: 70%;
    padding: 0px 5%;
    color: dimgrey;
    caret-color: dimgrey;

}

.textarea::placeholder {
    text-align: center;
}

.small-input {
    width: 70px !important;
    padding: 0px 5px !important;
}

.title-input {
    color: black !important;
    font-size: 28px;
    border: none !important;
    text-align: center;
}
.title-input::placeholder {
    color: black;
    font-size: 28px;
}
</style>