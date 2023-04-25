<template>
  <div id="login" class="mt-5">
    <form @submit.prevent="login" ref="form">
      <div class="form-group">
        <label>Correo</label>
        <input name="email" type="email" v-model.trim="loginForm.email" required />
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input name="password" type="password" v-model.trim="loginForm.password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
      <br /><br />
      <!-- <button @click="accessToken()">Access Token</button> -->
    </form>
    <br />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { auth } from "@/auth/auth.service";
import { SET_LOGIN_STATE } from "@/store/index";


export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        if (!this.$refs.form.checkValidity()) return;
        await auth.signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        );
        console.log("Successfully logged in");
        this.$store.commit(SET_LOGIN_STATE, true);
        this.error= ""
      } catch (err) {
        console.log(err.message);
        this.error = "Usuario o clave incorrecta";
      }
    },
    async accessToken() {
      const token = await auth.currentUser?.getIdToken();
      console.log(token);
    },
  },
};
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