import { createStore } from 'vuex'
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@/auth/auth.service"
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';


export default createStore({
  state: {
    cursos: [],
    login:false
  },
  getters: {
  },
  mutations: {
    [SET_LOGIN_STATE](state, payload) {
      state.login = payload;
    },
    getCursos(state,payload){
      state.cursos = payload
    }
  
    // async createCourse () {
    //   await setDoc(doc(db, "adweb-online", "LA"), {
    //     nombre: "Los Angeles",
    //     codigo: "CA",
    //     descripcion: "USA"
    //   });
    // }
  },


  actions: {
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

    // async createCourse ({}, payload) {
    //   await setDoc(doc(db, "adweb-online", payload.codigo), {
    //     nombre: payload.nombre,
    //     codigo: payload.codigo,
    //     descripcion: payload.descripcion
    //   });
    //   console.log(payload);
    // }
  },
  modules: {}
});

