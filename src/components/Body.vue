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
    mounted () {
      this.$store.dispatch('reset')
    },
    components:{
      Square
    },
}


</script>

<style scoped lang="css">
#container {
	margin: 20px auto;
	max-width: 600px;
} 
</style>
