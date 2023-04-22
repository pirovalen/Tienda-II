<template>
    <div class="container mt-5">
        <div class="row">
        <div class="col text-center">
            <img alt="Vue logo" src="../assets/logo.png" width="100"/>
            <p class="fst-italic py-5">El mejor lugar para aprender</p>
            
            <!-- <Button type="button" class="btn--ver" ><router-link class="nav-link px-3" to="/>Revisar cursos</router-link></Button> -->

            <div class="card" style="width: 18rem;"  v-for="curso in cursos" :key="curso.nombre">
                <img src="{{curso.img}}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{curso.nombre}}</h5>
                    <p class="card-text">{{curso.descripcion}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duración: {{curso.duracion  }}</li>
                    <li class="list-group-item">Cupos: {{curso.cupos }}</li>
                    <li class="list-group-item">Precio: ${{ curso.precio }}</li>

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
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "@/auth/auth.service";

    export default {
    name: "Home-Root",
    mounted(){
        this.extraerData()
    },
        data() {
        return {
          cursos: [],
        }
      },
        methods: {
      async extraerData() {

        const querySnapshot = await getDocs(collection(db, "adweb-online"));
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().nombre);
           this.cursos.push(doc.data());
       });
       
       console.log(this.cursos);
       console.log(this.cursos.img);
       },
    //    mostrarCurso(){
    //        this.cursos.forEach((element)=>{

    //            console.log(element.nombre)
    //        })
    //    }
      },
      
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
/*     -webkit-user-select: none; */
    touch-action: manipulation;
    font-family: 'Montserrat', sans-serif;
    }
    </style>