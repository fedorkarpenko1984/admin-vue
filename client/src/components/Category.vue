<template>
    <div class="category mt-10">
        <div class="title">{{ title }}</div>
        <img class="delete-icon" src="@/assets/delete-icon.svg" @click="deleteCategory" alt="">
    </div>
</template>

<script>
    export default {
        props: ['title'],

        methods: {
            deleteCategory() {
                this.$store.dispatch('deleteCategory', this.title)
            }
        }
    }
</script>

<style scoped>
.category {
    width: 90%;
    display: flex;
    align-items: center;justify-content: space-around;
    border-radius: 10px;
    border: 2px solid #89a5a5;
    box-shadow: 0px 0px 1px 1px dimgrey;
    padding: 10px 0px;
}

.title {
    font-size: 24px;
    width: 80%;
    font-family: monospace;
}
.delete-icon {
    width: auto;
    height: 30px;
}
</style>