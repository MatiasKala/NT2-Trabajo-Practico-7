<template >

  <div id="container">
    <div class="squares">
      <Square :pos="0"/>
      <Square :pos="1"/>
      <Square :pos="2"/>
    </div>   
    <div v-show="this.$store.state.isHard" class="squares">
      <Square :pos="3"/>
      <Square :pos="4"/>
      <Square :pos="5"/>
    </div>   
  </div>

</template>

<script>

  import Square from "./Square.vue";

  export default  {
    name: 'body-component',
    props: [],
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
      }
    },
    methods: {
      init(){
        this.$store.state.colors = this.createNewColors(this.$store.state.isHard)
        this.$store.state.pickedColor = this.$store.state.colors[this.pickColor()]
        // this.$emit('colorElegido',this.pickedColor)
      },
      createNewColors(){
        let numbers= this.$store.state.isHard ? 6 : 3
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
        let cantidad= this.$store.state.isHard? 6 : 3 
        let number= Math.floor(Math.random() * cantidad);
        return number
      },
      changeData(estado){
        this.$store.state.isHard=estado
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
