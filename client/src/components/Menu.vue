<template>
    <div class="menu" :style="{left: this.showMenu ? '0' : '-100%'}">

        <button class="btn menu-btn"
                v-for="route in routes"
                :key="route.path" @click="navigate(route.path)">{{ route.ru }}</button>

        <img ref="icon" class="close-icon" @click="toggleMenu" src="@/assets/close-icon.svg" alt="">
    </div>
</template>

<script>
    import {routes} from "../router";

    export default {
        data: () => ({
            routes: routes.filter(route => route.ru !== '')
        }),

        computed: {
            showMenu() {
                return this.$store.state.showMenu
            }
        },

        methods: {
            navigate(path) {
                this.$router.push(path)
                this.$store.commit('toggleMenu')
            },
            toggleMenu() {
                this.$refs.icon.style.transform = 'rotate(360deg)'
                setTimeout(() => this.$store.commit('toggleMenu'), 500)
                setTimeout(() => {
                    this.$refs['icon'].style.transform = 'rotate(0deg)'
                }, 1000)
            }
        }
    }
</script>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    background: #89a5a5;
    position: absolute;
    top: 0;
    z-index: 2000;
    transition: all 1s;
    color: #44bede;
}

.menu-btn {
    margin: 10px;
    color: darkolivegreen;
    font-size: 24px;
    padding: 0px 10px;
    height: 50px;
    box-shadow: 0px 0px 3px 3px white;
}

.close-icon {
    position: absolute;
    bottom: 20px;
    width: 40px;
    height: 40px;
    transform: rotate(0deg);
    transition: all 1s;
}
</style>