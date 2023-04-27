<template>
    <div class="titulo">
    <h2>Inscribite hoy y aprende desde tu casa</h2>
    </div>
    <div class="subtitulo">
    <p>Clases online en vivo dictadas por referentes de la industria, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de +210.000 estudiantes.</p></div>
    <div class="container mt-5">
        <div class="row justify-content-center py-5" v-if="($store.state.cursos.length) == 0">
    <div class="col-auto">
    <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
    </div>
    </div>
        <div class="row" v-else>
            <div class="col-lg-4 mb-5" v-for="curso in cursos" :key="curso.nombre"> 
            <div class=" card border-info mb-3 mx-auto" style="width: 18rem;"  >
                <img :src= "curso.img" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title text-center">{{curso.nombre}}</h5>
                    <p class="card-text text-center">{{curso.descripcion}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duración: {{curso.duracion  }}</li>
                    <li class="list-group-item">Cupos: {{curso.cupos }}</li>
                    <li class="list-group-item">Precio: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(curso.precio)}}</li>
                </ul>
                <button class=" btnInscribir p-2">Inscribirme</button>
            </div>
        </div>
    </div>
    </div>
</template>
    
    
    <script>
    import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
    import {mapActions, mapState} from 'vuex' 

    export default {
        name: "Home-View",
        data() {
            return {
            color:'#d676ab'
        }
        },

        components: {
            FadeLoader
        }, 

        created(){
            this.getCursos()
        },

        methods: {
            ...mapActions(['getCursos'])
        },

        computed : {
            ...mapState(['cursos'])
        },

        showAlert(texto1, texto2){
            Swal.fire({
                title:texto1,
                text: texto2,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        },

        async mounted(){
            this.$store.state.cursos=[]
            if(this.$store.state.usuarioConectado===''){    
                this.showAlert('No hay usuario conectado', 'Debe loguearse')
                this.$router.push('/login')
            }
        }
    }
    
    </script>
    
    <style>
        .titulo{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        }

        .subtitulo{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        padding-inline: 15rem ;
        }

        .card{
            font-family: 'Montserrat', sans-serif;
        }

        .card-img-top{
        max-width: 8rem;
        height: 160px;
        align-self: center;
        padding-top: 2rem;
        }

        .card-body{
        padding-top: 7rem;
        }

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
        touch-action: manipulation;
        font-family: 'Montserrat', sans-serif;
        }

        .btnInscribir {
            background-color: #71c3d7;
            color: white;
            border: 1px solid #71c3d7;
            letter-spacing: 3px;
        }

        .btnInscribir:hover{
            background-color: #f082bf;
        }


    </style>