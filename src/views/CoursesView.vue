<template>
    <div class="titulo">
    <h2>Inscribite hoy y aprende desde tu casa</h2>
    </div>
    <div class="subtitulo">
    <p>Clases online en vivo dictadas por referentes de la industria, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de +210.000 estudiantes.</p></div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4 mb-5" v-for="curso in cursos" :key="curso.nombre"> 
            <div class=" card border-info mb-3 mx-auto" style="width: 18rem;"  >
                <img :src= "curso.img" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title">{{curso.nombre}}</h5>
                    <p class="card-text">{{curso.descripcion}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duración: {{curso.duracion  }}</li>
                    <li class="list-group-item">Cupos: {{curso.cupos }}</li>
                    <li class="list-group-item">Precio: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(curso.precio)}}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
    
    
    <script>
    // @ is an alias to /src
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'

    // import { collection, getDocs } from "firebase/firestore";
    // import { db } from "@/auth/auth.service";
    import {mapActions, mapState} from 'vuex' 

    export default {
    name: "Home-View",
    // mounted(){
    //     this.extraerData()
    // },
    //     data() {
    //     return {
    //       cursos: [],
    //     }
    //   },
        created(){
            this.getCursos()
        },
        methods: {
            ...mapActions(['getCursos'])
    //   async extraerData() {

    //     const querySnapshot = await getDocs(collection(db, "adweb-a1409"));
    //     console.log(querySnapshot)
    //     querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data().nombre);
    //        this.cursos.push(doc.data());
    //    });
       
    //    console.log(this.cursos);
    //    console.log(this.cursos.img);
    //    },

    //    mostrarCurso(){
    //        this.cursos.forEach((element)=>{

    //            console.log(element.nombre)
    //        })
    //    }
      },

      computed : {
        ...mapState(['cursos'])
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
/*     -webkit-user-select: none; */
    touch-action: manipulation;
    font-family: 'Montserrat', sans-serif;
    }
    </style>