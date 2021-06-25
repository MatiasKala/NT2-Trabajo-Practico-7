<template>

  <div class="square" :style="{background: color}" @click="clickCudrado()">  
    <div>{{contador}}</div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'square',
    props: ['color','pos','contador'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      clickCudrado(){
        this.$store.dispatch('clickCuadradoVuex',[this.color,this.pos])
        // this.$emit('clickCuadrado',[this.color,this.pos])
      }
    },
    computed: {
      c:()=>{console.log('entre')
        return this.color
      }
    },
}


</script>

<style scoped lang="css">
.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}
</style>
