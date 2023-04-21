<template>
    <NavBar></Navbar>
    <div class="container mt-5">
        <div class="row">
        <div class="col text-center">
            <img alt="Vue logo" src="../assets/logo.png" width="100"/>
            <p class="fst-italic py-5">El mejor lugar para aprender</p>
            <!-- <Button type="button" class="btn--ver" ><router-link class="nav-link px-3" to="/>Revisar cursos</router-link></Button> -->
        </div>
        </div>
    </div>
    <Footer></Footer>
    </template>
    
    
    <script>
    // @ is an alias to /src
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    export default {
    name: "Home-Root",
    components: {
        NavBar,
        Footer
        }
    }
    </script>
    
    <style>
    .btn--ver{
    background-color: #EA4C89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    margin-top: auto;
    text-align: center;
    transition: color 100ms;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: 'Montserrat', sans-serif;
    }
    </style>