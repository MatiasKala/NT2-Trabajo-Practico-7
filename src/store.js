import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colors:[],
        pickedColor:'',
        colorBack:'steelblue',
        mensajeNavbar:'',
        isHard:true,
    },
    actions : {
        clickCuadradoVuex({commit},args) {
            commit('clickCuadrado',args)
        },
    },
    mutations : {
        clickCuadrado(state,args) {
            if(args[0] == state.pickedColor){
                state.mensajeNavbar = "You Picked Right!"
                state.colors = state.colors.map(()=>{
                return state.pickedColor
                });
            } else {
                state.mensajeNavbar = "Try Again!"
                state.colors.splice([args[1]], 1, '#232323')
            }
        },
    }
})
