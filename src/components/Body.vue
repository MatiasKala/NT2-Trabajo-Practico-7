<template >

  <div id="container">
    <div class="squares">
      <Square :color="colors[0]" :pos="0" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="colors[1]" :pos="1" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="colors[2]" :pos="2" @clickCuadrado="clickCuadrado($event)"/>
    </div>   
    <div v-show="isHard" class="squares">
      <Square :color="colors[3]" :pos="3" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="colors[4]" :pos="4" @clickCuadrado="clickCuadrado($event)"/>
      <Square :color="colors[5]" :pos="5" @clickCuadrado="clickCuadrado($event)"/>
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
        this.colors = this.createNewColors(this.esDificil)
        this.pickedColor = this.colors[this.pickColor()]
        this.$emit('colorElegido',this.pickedColor)
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
      clickCuadrado(color){
        if(color[0] == this.pickedColor){
          this.$emit('colorGanador')
          // for (let i = 0; i < this.colors.length; i++) {
          // this.colors.splice(i, 1, this.pickedColor) 
          // }
          this.colors = this.colors.map(()=>{
            return this.pickedColor
          });
        } else {
          this.$emit('colorPerdedor')
          this.colors.splice([color[1]], 1, '#232323')
        }
      }
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
