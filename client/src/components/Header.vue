<template>
    <header class="header" @click="toggleMenu">
        <h1 class="menu">МЕНЮ</h1>
    </header>
    <div class="rainbow-border"></div>
    <div class="corner-shadow"></div>
</template>

<script>



    export default {
        methods: {
            toggleMenu() {


                this.$store.commit('toggleMenu')
            }
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
    justify-content: center;
    height: 40px;
    width: 100%;
    background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0),white);
    z-index: 1000;
}
.rainbow-border {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background: linear-gradient(to right, blue, red, orange, blueviolet, yellow);
    z-index: 500;
}

.corner-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background: linear-gradient(to left, white, rgba(255, 255, 255, 0),white);
    z-index: 700;
}

.menu {
    color: white;
}
</style>