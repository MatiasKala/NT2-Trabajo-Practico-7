<template>

    <div id="navigator">
		<button id="reset" @click="resetear()" > New colors</button>
		<span id="message">{{getMensaje}}</span>

		<button id="easy" :class="getClass(!this.$store.state.isHard)" @click="cambiarAfacil()">easy</button>
		<button id="hard" :class="getClass(this.$store.state.isHard)" @click="cambiarAdificil()">hard</button>
        <Body/>
	</div>

</template>

<script>

  import Body from "./Body.vue";

  export default  {
    name: 'navbar',
    components:{
        Body
    },
    methods: {
		cambiarAfacil(){
			if(this.$store.state.isHard){
				this.$store.state.isHard = false
				this.resetear()
			}
		},
		cambiarAdificil(){
			if(!this.$store.state.isHard){
				this.$store.state.isHard = true
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
			this.$store.state.mensajeNavbar=""
			this.$store.dispatch('reset')
		},
    },
    computed: {
		getMensaje(){
			return this.$store.state.mensajeNavbar
		}
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
