<template>
    <header class="header">

    </header>
</template>

<script>
    export default {
        data: () => ({
            greeting: ''
        }),

        mounted() {
            const hours = new Date().getHours()
            console.log(hours)
        }
    }
</script>

<style scoped>

.header {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
}

</style>