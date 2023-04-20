<template>  
    <div class="container-fluid d-flex align-items-center border">
        <div id="logo">
            <a v-on:click="Home"><img src="../assets/logo.png" alt="" width="250"></a>
        </div>
        <div class="d-flex ms-auto me-3">
            <nav>
                <ul id="list-contenedor" class="d-flex justify-content-around align-items-center">
                    <router-link class="nav-link px-3" to="/HomeRoot">Inicio</router-link>
                    <router-link class="nav-link px-3" to="">Cursos</router-link>
                    <ShowCards></ShowCards>
                    <router-link class="nav-link px-3" to="">Login</router-link>
                    <FormLogin></FormLogin>
                    <!-- <p class="mb-0">{{usuarioConectado}}</p> -->
                </ul>
            </nav>
        </div>
    </div>
    </template>
    
    <script>
import FormLogin from './FormLogin.vue';
import ShowCards from './ShowCards.vue';
export default {
name: 'NavBar'
}
</script>

<style>
.titulo__pagina{
font-family: 'Montserrat', sans-serif;
padding-bottom: 1em;
}

#login{
    cursor: pointer;
}

#list-contenedor{
    list-style-type: none;

}

.list-item{
    cursor: pointer;
}

</style>