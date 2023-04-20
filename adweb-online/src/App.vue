<template>
<NavBar />
<Footer />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}

</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  margin:0px;
  padding:0px;
}
</style>
