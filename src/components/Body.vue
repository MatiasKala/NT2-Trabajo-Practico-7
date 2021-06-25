<template >

  <div id="container">
    <div class="squares">
      <Square :color="this.$store.state.colors[0]" :pos="0" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="this.$store.state.colors[1]" :pos="1" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="this.$store.state.colors[2]" :pos="2" @clickCuadrado="clickCuadrado($event)"/>
    </div>   
    <div v-show="isHard" class="squares">
      <Square :color="this.$store.state.colors[3]" :pos="3" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="this.$store.state.colors[4]" :pos="4" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="this.$store.state.colors[5]" :pos="5" @clickCuadrado="clickCuadrado($event)"/>
    </div>   
  </div>

</template>

<script>

  import Square from "./Square.vue";

  export default  {
    name: 'body-component',
    props: ['isHard'],
    beforeMount(){
      this.$parent.$on('resetear',this.changeData)
    },
    mounted () {
      this.init()
    },
    components:{
      Square
    },
    data () {
      return {
        colors:[],
        pickedColor:"",
        esDificil:true,
      }
    },
    methods: {
      init(){
        this.$store.state.colors = this.createNewColors(this.esDificil)
        this.$store.state.pickedColor = this.$store.state.colors[this.pickColor()]
        // this.$emit('colorElegido',this.pickedColor)
      },
      createNewColors(bool){
        let numbers= bool ? 6 : 3
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }
          return arr;
      },
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },
      randomInt(){
        return Math.floor(Math.random() * 256);
      },
      pickColor(){
        let cantidad= this.esDificil? 6 : 3 
        let number= Math.floor(Math.random() * cantidad);
        return number
      },
      changeData(estado){
        this.esDificil=estado
        this.init()
      },
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
#container {
	margin: 20px auto;
	max-width: 600px;
} 
</style>
