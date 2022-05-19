<template>
  <Header />
  <Menu />
  <div class="my-app-container">
    <router-view/>
  </div>
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
