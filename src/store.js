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
        reset({commit}){
            commit('resetState')
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
        resetState(state){
            state.mensajeNavbar = ''
            let numbers= state.isHard ? 6 : 3
            var arr = [];
            for (var i = 0; i < numbers; i++) {
            arr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")");
            }
            state.colors = arr
            let cantidad= state.isHard? 6 : 3 
            let number= Math.floor(Math.random() * cantidad);
            state.pickedColor = state.colors[number]
            // this.$emit('colorElegido',this.pickedColor)
        },

    }
}
)
