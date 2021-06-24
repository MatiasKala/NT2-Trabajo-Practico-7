<template>

    <div id="navigator">
		<button id="reset" @click="resetear()" > New colors</button>
		<span id="message">{{message}}</span>

		<button id="easy" :class="getClass(!isHard)" @click="cambiarAfacil()">easy</button>
		<button id="hard" :class="getClass(isHard)" @click="cambiarAdificil()">hard</button>
        <Body :isHard="isHard" @colorElegido="setColorElegido($event)" @colorGanador="mostrarMensajeGanador()" @colorPerdedor="mostrarMensajePerdedor()"/>
	</div>

</template>

<script>

  import Body from "./Body.vue";

  export default  {
    name: 'navbar',
    props: [],
    mounted () {

    },
    components:{
        Body
    },
    data () {
      return {
        isHard:true,
		colorElegido:"",
		message:""
      }
    },
    methods: {
		cambiarAfacil(){
			if(this.isHard){
				this.isHard = false
				this.resetear()
			}
		},
		cambiarAdificil(){
			if(!this.isHard){
				this.isHard = true
				this.resetear()
			}
		},
		getClass(bool){
			if(bool){
				return [
                  'selected'
				]
			}
		},
		resetear(){
			this.message=""
			this.$emit('resetear',this.isHard)
			this.$emit('resetearHeader')
		},
		setColorElegido(color){
			this.$emit('colorElegidoHeader',color)
		},
		mostrarMensajeGanador(){
			this.message = "You Picked Right!"
			this.$emit('colorGanador')
		},
		mostrarMensajePerdedor(){
			this.message = "Try Again!"
		},
    },
    computed: {
		
    }
}


</script>

<style scoped lang="css">
#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}
#message {
	color: #000000;
	display: inline-block;
	width: 20%;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
.selected {
	background-color: steelblue;
	color: white;
}
</style>
