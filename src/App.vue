<template>
  <NavBar />
  <LoginView/>
  <Footer/>
  <!-- <router-view /> -->
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue"
  import Footer from "@/components/Footer.vue"
  import LoginView from "@/views/LoginView.vue"
  export default {
    name: 'App',
    components: {
      NavBar,
      LoginView,
      Footer
    }
  }
  </script>
  
  <style>

  </style>