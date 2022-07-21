<template>
  <header class="bg-gray-300 ">
    
    <div class="flex justify-around pt-2">
      <div>
      <img height="42" @click="clickHandler" width="42" src="../assets/commande_img.png" alt="">
    </div>
      <div>
        <img height="42" width="42" src="../assets/logo.png" alt="">
      </div>
      <div>
        <img height="42" width="42" src="../assets/filtre.png" alt="">
      </div>
    </div>

  </header>

</template>

<script>
export default {


  name: 'Navbar',
  props: {
    clickHandler: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->