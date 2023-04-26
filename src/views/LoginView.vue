<template>
  <div id="login" class="mt-5">
    <form @submit.prevent="login" ref="form">
      <div class="form-group">
        <label>Correo Electrónico</label>
        <input name="email" type="email" v-model.trim="loginForm.email" required />
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input name="password" type="password" v-model.trim="loginForm.password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
      <br /><br />
      <div id="login" class="mt-2"> 
        <h5>¿No tienes cuenta?</h5>
        <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Regístrate!</button>
      <!-- <button @click="accessToken()">Access Token</button> -->
      </div>
    </form>
    <br />
    <div v-if="error">{{ error }}</div>
  </div>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="Email1" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" v-model.trim="loginForm.email1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="Password1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" v-model.trim="loginForm.password1">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <!-- <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
        <button type="submit" data-bs-dismiss="modal">Cerrar</button>
        <button @click="registrarUsuario()" type="submit" data-bs-dismiss="modal">Aceptar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { auth } from "@/auth/auth.service";
import { SET_LOGIN_STATE } from "@/store/index";
import {mapMutations, mapState} from 'vuex';


export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
        email1:"",
        password1:""
      },
      error: "",
    };
  },
  methods: {
...mapMutations(['cambiaEstadoLogin']),
    async login() {
      try {
        if (!this.$refs.form.checkValidity()) return;
        await auth.signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password,

          this.$store.state.usuarioConectado= this.loginForm.email
        );

        console.log("Successfully logged in");
        this.$store.commit(SET_LOGIN_STATE, true);
        this.$router.push({ name: "CoursesView" });
        this.error= "";
        cambiaEstadoLogin();
      } catch (err) {
        console.log(err.message);
        this.error = "Usuario o clave incorrecta";
      }
    },
    
    registrarUsuario (){
      auth.createUserWithEmailAndPassword(this.loginForm.email1,this.loginForm.password1)
        .then((userCredential)=> {
        this.$store.state.usuarioConectado = this.loginForm.email1
        this.$router.push("/loginView")
      })
      .catch((error) => {
        this.$store.state.usuarioConectado='';
        this.codigoError = error.code;
        this.mensajeError = error.message;
      });
    },
    showAlert(action){
      if(action==="login"){
        Swal.fire({
        title:"Sesión iniciada",
        icon:"success",  
        confirmButtonText:"Ok",
        })
      }
    }
  },
  mounted() {
    auth.onAuthStateChanged((user) =>{
      alert("hola")
      this.$store.state.usuarioConectado=user.email
      this.showAlert("login")
    });
  },
}

</script>
<style>
#login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  margin-top: -20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.form-group label {
  margin-bottom: 5px;
  font-weight: 500;
}
.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}
button[type="submit"] {
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 10px 20px;
  background-color: #F57ED2;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
button[type="submit"]:hover {
  background-color: #82daf0;
}
</style>