<template>
    <div class="menu" :style="{left}">

        <button class="btn menu-btn"
                v-for="route in routes"
                :key="route.path" @click="navigate(route.path)">{{ route.ru }}</button>

        <img class="close-icon" @click="$store.commit('toggleMenu')" src="@/assets/close-icon.svg" alt="">
    </div>
</template>

<script>
    import {routes} from "../router";

    export default {
        data: () => ({
            routes: routes.filter(route => route.path !== '/')
        }),

        computed: {
            left() {
                return this.$store.state.showMenu ? '0' : '-100%'
            },
        },

        methods: {
            navigate(path) {
                this.$router.push(path)
                this.$store.commit('toggleMenu')
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
    font-weight: bold;
}

.close-icon {
    position: absolute;
    bottom: 20px;
    width: 40px;
    height: 40px;
}
</style>