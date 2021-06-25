import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colors:[],
        pickedColor:'',
        colorBack:'steelblue',
        mensajeNavbar:''
    },
    actions : {
        clickCuadradoVuex({commit},args) {
            commit('clickCuadrado',args)
        },
    },
    mutations : {
        clickCuadrado(state,args) {
            if(args[0] == state.pickedColor){
                state.colors = state.colors.map(()=>{
                return state.pickedColor
                });
            } else {
                state.colors.splice([args[1]], 1, '#232323')
            }
        },
    }
})
