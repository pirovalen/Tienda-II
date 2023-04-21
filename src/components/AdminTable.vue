<template>
  <div class="container">
  <div class="row">
  <h2 class="py-3">Administrador de Cursos</h2>
  </div>
  <div class="row justify-content-between align-items-center py-4" id="searchContainer">
      <div id="search"  class="col-8" style="display: flex; align-items: center;">
        <input id="input-search" class="w-100 mx-2"  type="text" placeholder="Ingrese su búsqueda" >
        <button id="buttonSearch" class="btn btn-primary" >
          <i class="fa fa-search"></i> Buscar
        </button>
      </div>
      <div class="col-2"> 
        <button type="button" class="btn btn-primary" id="new" data-bs-toggle="modal" data-bs-target="#createModal">Agregar Curso</button>
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
          <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td><button class="btn btn-primary" id="modificar" type="button" data-bs-toggle="modal" data-bs-target="#editModal">&#9998;</button></td>
              <td><button class="btn btn-primary" id="borrar" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">&#128465;</button></td>
          </tr>
      </TBody>
      </table>
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal edit -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar Curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="form" action="">
            <label for="code-obj" class="form-label">Código</label>
            <input type="text" class="form-control">
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Modificar</button>
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
            <label for="code-obj" class="form-label">Código</label>
            <input type="text" class="form-control">
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Crear</button>
        </div>
      </div>
    </div>
  </div>
  </template>
    
    <script>
    export default {
      name: 'AdminTable',
      props: {
        
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>