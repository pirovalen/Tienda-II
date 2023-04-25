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
                  <button class="btn btn-modificar"  id="modificar" @click="getCurso(curso.id)" type="button" data-bs-toggle="modal" data-bs-target="#editModal">&#9998;</button>
                 
              </td>
              <td><button class="btn btn-modificar" id="borrar" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="idaBorrar(curso.id)">&#128465;</button></td>

          </tr>
      </tbody>
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
          <form class="form" @submit.prevent="getCursos(), modificarCurso(mostrarCurso)">
            <label for="code-obj" class="form-label">Código</label>
            <input type="text" class="form-control" v-model="mostrarCurso.codigo">
            <label for="name-obj" class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="mostrarCurso.nombre">
            <label for="state-obj" class="form-label">Estado</label>
            <input type="text" class="form-control" v-model="mostrarCurso.estado">
            <label for="price-obj" class="form-label">Precio</label>
            <input type="text" class="form-control" v-model="mostrarCurso.precio">
            <label for="duration-obj" class="form-label">Duración</label>
            <input type="text" class="form-control" v-model="mostrarCurso.duracion">
            <label for="description-obj" class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="mostrarCurso.descripcion">
            <label for="capacity-obj" class="form-label">Cupos</label>
            <input type="text" class="form-control" v-model="mostrarCurso.cupos">
            <label for="enrolled-obj" class="form-label">Inscritos</label>
            <input type="text" class="form-control" v-model="mostrarCurso.inscritos">
            <label for="img-obj" class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="mostrarCurso.img">
            <div class="modal-footer">
          <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-modificar" data-bs-dismiss="modal">Modificar</button>
        </div>
          </form>
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
          <button type="button" class="btn btn-eliminar" data-bs-dismiss="modal" @click="getCursos(), eliminarCurso(idBorrarCurso)">Eliminar</button>
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
          <form class="form" @submit.prevent="getCursos(),crearCurso(agregarCurso),resetearCurso(agregarCurso)">
            <label for="code-obj" class="form-label" >Código</label>
            <input type="text" class="form-control" v-model="agregarCurso.codigo">
            <label for="name-obj" class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="agregarCurso.nombre">
            <label for="state-obj" class="form-label">Estado</label>
            <input type="text" class="form-control" v-model="agregarCurso.estado">
            <label for="price-obj" class="form-label">Precio</label>
            <input type="text" class="form-control" v-model="agregarCurso.precio">
            <label for="duration-obj" class="form-label">Duración</label>
            <input type="text" class="form-control" v-model="agregarCurso.duracion">
            <label for="description-obj" class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="agregarCurso.descripcion">
            <label for="capacity-obj" class="form-label">Cupos</label>
            <input type="text" class="form-control" v-model="agregarCurso.cupos">
            <label for="enrolled-obj" class="form-label">Inscritos</label>
            <input type="text" class="form-control" v-model="agregarCurso.inscritos">
            <label for="img-obj" class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="agregarCurso.img">
            <div class="modal-footer">
              <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-crear" data-bs-dismiss="modal">Crear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
<!--   <button @click="extraerData">click</button>
  <button @click="mostrarCurso">click</button> -->
  </template>
    
    <script>

    import {mapActions, mapState} from 'vuex';

    export default {
      name: 'AdminTable',
      data(){
        return{
          agregarCurso: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''},
          idBorrarCurso: ''
        }
      },
      created(){
            this.getCursos()
            this.getCurso(this.idEditar)
        },
        methods: {
          ...mapActions(['getCursos', 'getCurso', 'crearCurso', 'modificarCurso','eliminarCurso']),

          idaBorrar(elemento){
            this.idBorrarCurso =  elemento
          },

          resetearCurso(){
            this.agregarCurso =  {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''}
          }

        },

        computed : {
        ...mapState(['cursos', 'mostrarCurso', 'agregarCurso'])
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