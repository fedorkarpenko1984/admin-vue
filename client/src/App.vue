<template>
  <Header />
  <Menu />
  <router-view/>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";

export default {
  components: {Header, Menu},
  computed: {
    showMenu() {
      return this.$store.state.showMenu
    }
  }
}

</script>

<style>



</style>
