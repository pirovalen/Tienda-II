import { createStore } from 'vuex'
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc} from "firebase/firestore";
import { db } from "@/auth/auth.service"

export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';



export default createStore({
  state: {
    cursos: [],
    mostrarCurso: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''},
    login:false,

    usuarioConectado:"",
    carga: false,
  },

  getters: {
  },

  mutations: {
    [SET_LOGIN_STATE](state, payload) {
      state.login = payload;
    },
    getCursos(state,payload){
      state.cursos = payload
    },
    getCurso(state,payload){
      state.mostrarCurso = payload 
    },

    cambiaEstadoLogin (state) {
      state.login = true
    }

  },


  actions: {

    // CRUD -> READ 

    async getCursos ({commit}){
      const cursos = [];
      const listado = await getDocs(collection(db, "adweb-online"))
          listado.forEach(doc => {
            // console.log(doc.id)
            // console.log(doc.data())      
            let curso =  doc.data()
            curso.id = doc.id
            cursos.push(curso)
          });
          commit('getCursos', cursos)
    },

    // Obtiene datos del curso seleccionado 

    async getCurso ({commit}, idCurso){
      const datosCurso = await getDoc(doc(db, "adweb-online", idCurso));
      const curso = datosCurso.data();
      curso.id = datosCurso.id;
      curso.nombre = datosCurso.data().nombre;
      curso.estado = datosCurso.data().estado;
      curso.precio = datosCurso.data().precio;
      curso.duracion = datosCurso.data().duracion;
      curso.descripcion = datosCurso.data().descripcion;
      curso.cupos = datosCurso.data().cupos;
      curso.inscritos = datosCurso.data().inscritos;
      curso.img = datosCurso.data().img;
      commit('getCurso', curso)
      },

      // CRUD -> UPDATE 

    async modificarCurso({commit}, mostrarCurso){
      await setDoc(doc(db, "adweb-online", mostrarCurso.codigo), {
        codigo: mostrarCurso.codigo,
        nombre: mostrarCurso.nombre,
        estado: mostrarCurso.estado,
        precio: mostrarCurso.precio,
        duracion: mostrarCurso.duracion,
        descripcion: mostrarCurso.descripcion,
        cupos: mostrarCurso.cupos,
        inscritos: mostrarCurso.inscritos,
        img: mostrarCurso.img
      });
    },

    // CRUD -> CREATE 

    async crearCurso({commit}, agregarCurso){
      await setDoc(doc(db, "adweb-online", agregarCurso.codigo), {
        codigo: agregarCurso.codigo,
        nombre: agregarCurso.nombre,
        estado: agregarCurso.estado,
        precio: agregarCurso.precio,
        duracion: agregarCurso.duracion,
        descripcion: agregarCurso.descripcion,
        cupos: agregarCurso.cupos,
        inscritos: agregarCurso.inscritos,
        img: agregarCurso.img
      })
      agregarCurso = '';
    },

    // CRUD -> DELETE 

    async eliminarCurso({commit}, idBorrar){
      console.log("borrarDatooos")
      await deleteDoc(doc(db,"adweb-online", idBorrar))
    }
  },

  modules: {
  }

})

