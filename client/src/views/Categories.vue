<template>
    <div class="vertical-centralize">
        <h1>Категории товаров</h1>

        <hr class="mt-10">

        <h2 class="mt-10">Новая категория</h2>

        <input @keydown="enterKeyHandler($event)" placeholder="Введите название" type="text" v-model="newCategory" class="input mt-10">

        <button class="btn btn-standard mt-20" @click="createCategory">Добавить</button>

        <hr class="mt-20">

        <h2 class="mt-10">Список категорий</h2>

        <Category v-for="category in categories" :key="category.name" :title="category.name" />
    </div>
</template>

<script>
    import Category from "../components/Category";

    export default {
        components: {Category},

        data: () => ({
            newCategory: ''
        }),

        methods: {
            createCategory() {
                if (this.newCategory.length > 0) {
                    this.$store.dispatch('createCategory', {name: this.newCategory})
                    this.newCategory = ''
                } else {
                    console.log('пустая строка')
                }
            },

            enterKeyHandler(event) {
                event.keyCode === 13 && this.createCategory()
            }
        },

        computed: {
            categories() {
                return this.$store.state.categories
            }
        },

        async mounted() {
            this.$store.dispatch('fetchCategories')
        }
    }
</script>

<style scoped>

</style>