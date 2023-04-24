<template>
  <div class="container">
  <div class="row">
  <h2 class="titulo">Administrador de Cursos</h2>
  </div>
  <div class="row justify-content-between py-4" id="searchContainer">
      <div id="search"  class="col-8" style="display: flex;">
        <input id="input-search" class="w-100 mx-2"  type="text" placeholder="Ingrese su búsqueda" >
        <button id="buttonSearch" class="btn btn-buscar" >
          <i class="fa fa-search"></i> Buscar
        </button>
      </div>
      <div class="col-2"> 
        <button type="button" class="btn btn-agregar" id="new" data-bs-toggle="modal" data-bs-target="#createModal" >Agregar Curso</button>
      </div>
    </div>
  <div class="row">
      <table class="table table-bordered">
      <thead class="table-primary">
          <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Precio</th>
              <th scope="col">Duración</th>
              <th scope="col">Descripción</th>
              <th scope="col">Cupos</th>
              <th scope="col">Inscritos</th>
              <th scope="col">IMG</th>
              <th scope="col">Modificar</th>
              <th scope="col">Eliminar</th>
          </tr>
      </thead>
      <TBody>
          <tr v-for="curso in cursos" :key="curso.nombre">
              <td>{{curso.id}}</td>
              <td>{{curso.nombre}}</td>
              <td>{{curso.estado}}</td>
              <td>{{curso.precio}}</td>
              <td>{{curso.duracion}}</td>
              <td>{{curso.descripcion}}</td>
              <td>{{curso.cupos}}</td>
              <td>{{curso.inscritos}}</td>
              <td>{{curso.img}}</td>
              <td>
                  <button class="btn btn-modificar"  id="modificar" @click="editar(curso.id)" type="button" data-bs-toggle="modal" data-bs-target="#editModal">&#9998;</button>
                 
              </td>
              <td><button class="btn btn-modificar" id="borrar" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal"  @click="borrarCurso(curso.id)">&#128465;</button></td>
          </tr>
      </TBody>
      </table>
  </div>
  </div>

      
  <!-- Modal edit -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar Curso</h1>
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{  }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="form" action="">
            <label for="code-obj" class="form-label">Código</label>
            <input type="text" class="form-control" >
            <label for="name-obj" class="form-label">Nombre</label>
            <input type="text" class="form-control">
            <label for="state-obj" class="form-label">Estado</label>
            <input type="text" class="form-control">
            <label for="price-obj" class="form-label">Precio</label>
            <input type="text" class="form-control">
            <label for="duration-obj" class="form-label">Duración</label>
            <input type="text" class="form-control">
            <label for="description-obj" class="form-label">Descripción</label>
            <input type="text" class="form-control">
            <label for="capacity-obj" class="form-label">Cupos</label>
            <input type="text" class="form-control">
            <label for="enrolled-obj" class="form-label">Inscritos</label>
            <input type="text" class="form-control">
            <label for="img-obj" class="form-label">Imagen</label>
            <input type="text" class="form-control">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-modificar">Modificar</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal delete -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar Curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         ¿Estás seguro que deseas eliminar este curso?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-eliminar" data-bs-dismiss="this.modal" @click="deleteCourse()">Eliminar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal create -->
  <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Crear Curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="form" action="">
            <label for="code-obj" class="form-label" >Código</label>
            <input type="text" class="form-control" v-model="codigo">
            <label for="name-obj" class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="nombre">
            <label for="state-obj" class="form-label">Estado</label>
            <input type="text" class="form-control" v-model="estado">
            <label for="price-obj" class="form-label">Precio</label>
            <input type="text" class="form-control" v-model="precio">
            <label for="duration-obj" class="form-label">Duración</label>
            <input type="text" class="form-control" v-model="duracion">
            <label for="description-obj" class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="descripcion">
            <label for="capacity-obj" class="form-label">Cupos</label>
            <input type="text" class="form-control" v-model="cupos">
            <label for="enrolled-obj" class="form-label">Inscritos</label>
            <input type="text" class="form-control" v-model="inscritos">
            <label for="img-obj" class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="img">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-crear" @click="createCourse()">Crear</button>
        </div>
      </div>
    </div>
  </div>
  <button @click="extraerData">click</button>
  <button @click="mostrarCurso">click</button>
  </template>
    
    <script>
    import {mapActions, mapState} from 'vuex';
    import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
    import { db } from "@/auth/auth.service"


    export default {
      name: 'AdminTable',
      data(){
        return{
          id: null,
          codigo: "",
          nombre: "",
          estado: true,
          precio: "",
          duracion: "",
          descripcion: "",
          cupos: 0,
          inscritos: 0,
          img: "",
          idBorrar: ""
        }
      },
      created(){
            this.getCursos()
            // this.getCurso(this.id)
        },
        methods: {
            ...mapActions(['getCursos', 'createCourse']),

    async createCourse () {
      await setDoc(doc(db, "adweb-online", this.codigo), {
        codigo: this.codigo,
        nombre: this.nombre,
        estado: this.estado,
        precio: this.precio,
        duracion: this.duracion,
        descripcion: this.descripcion,
        cupos: this.cupos,
        inscritos: this.inscritos,
        img: this.img
        // nombre: payload.nombre,
        // codigo: payload.codigo,
        // descripcion: payload.descripcion
      });
    },
    borrarCurso(element){
      this.idBorrar = element
    },

    async deleteCourse (){
      await deleteDoc(doc(db,"adweb-online", this.idBorrar))
    }

      },
        computed : {
        ...mapState(['cursos'])
      },
      


      }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style>
.container{
  font-family: 'Montserrat', sans-serif;
}

.titulo{
  padding-top: 5rem;
}

.table.table-bordered{
  font-family: 'Montserrat', sans-serif;
}

.modal-content{
font-family: 'Montserrat', sans-serif;
}

#search{
  border-radius: 50px;
}

.btn.btn-crear,.btn.btn-modificar{
        background-color: #82daf0;
        color: azure;
        font-family: 'Montserrat', sans-serif;
    }
    .btn.btn-crear:hover,.btn.btn-modificar:hover{
        background-color: #71c3d7;
        color: azure;
    }
    .btn.btn-cancelar,.btn.btn-agregar,.btn.btn-buscar{
        background-color: #f082bf;
        color: azure;
        font-family: 'Montserrat', sans-serif;
    }
    .btn.btn-cancelar:hover,.btn.btn-agregar:hover,.btn.btn-buscar:hover{
        background-color: #d676ab;
        color: azure;
    }

    .btn.btn-eliminar{
        background-color: #964a74;
        color: azure;
    }
    .btn.btn-eliminar:hover{
        background-color: #693a54;
        color: azure;
    }

    </style>