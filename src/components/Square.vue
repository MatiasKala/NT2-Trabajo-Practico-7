<template>

  <div class="square" :style="{background: this.$store.state.colors[this.pos]}" @click="clickCudrado()">  
  </div>

</template>

<script lang="js">

  export default  {
    name: 'square',
    props: ['pos'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      clickCudrado(){
        this.$store.dispatch('clickCuadradoVuex',[this.$store.state.colors[this.pos],this.pos])
      }
    },
    computed: {

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
