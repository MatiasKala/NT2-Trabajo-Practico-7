<template>

<section class="headerStyle">
  <div id="headerStyle" :style="getBackgroundColor" >
		<h1>The Great <br>
			<span id="colorDisplay">RGB {{colorElegido | sacarRGB}}</span>
			<br>
			Guessing Game</h1>
	</div>
  <Navbar @resetearHeader="reset()" />
</section>

</template>

<script>

  import Navbar from "./Navbar.vue";

  export default  {
    name: 'header-component',
    props: [],
    mounted () {
      
    },
    components:{
      Navbar
    },
    data () {
      return {
        colorElegido:this.setColorElegido,
      }
    },
    methods: {
      reset(){
        this.colorBack=null
      },
    },
    filters:{
      sacarRGB:value => {
        if(value){ return value.slice(3)}
      }
    },
    computed: {
      getBackgroundColor(){
        return{
          'backgroundColor':this.$store.state.colorBack ? this.$store.state.colorBack : 'steelblue'
        }
      },
     setColorElegido(){
        return this.$store.state.pickedColor
      }
    }
}


</script>

<style scoped lang="css">
#headerStyle {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#colorDisplay {
	font-size: 200%;
}
</style>
