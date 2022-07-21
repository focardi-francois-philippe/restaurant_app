<template>
  <div>
    <Navbar :clickHandler="showModal" />
  </div>
  <div>

    <div class="text-xl font-bold ml-2">
      <h2>Nos Boissons 🥂</h2>
    </div>

    <div v-for="item in row" :key="item.cle">
      <Produit :cle="item.cle" :nom="item.nom" :imageURL="item.imageURL" :prix="item.prix"></Produit>
    </div>

  </div>
  
  <div>
    <Commande v-if="modalIsVisible" :clickHandler="showModal"></Commande>
  </div>
  <!--<div>
    <div v-for="(item) in order.getters.getOrder" :key="item.id">
      <p>{{ item.name + " X" + item.quantite }}</p>
    </div>
  </div>-->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Produit from "./components/Produit.vue";
import Commande from "./components/Commande.vue";
import order from "./store/order.js";
// <div class="text-xl relative h-32 w-32 flex  justify-center">
//     <button class="bg-black text-white absolute inset-x-0 bottom-0 ">Commander</button>
//   </div>
export default {
  name: "App",
  components: {
    Navbar,
    Produit,
    Commande
  },
  data() {
    return {
      row: [
        {
          cle: "cocacola",
          nom: "Coca cola 33cl",
          prix: 2.50,
          imageURL: "coca.png",

        },
        {
          cle: "orangina",
          nom: "Orangina",
          prix: 2,
          imageURL: "coca.png"
        },
      ],
      modalIsVisible: false,
      order
    };
  },
  methods: {
    showModal() {
      this.modalIsVisible = !this.modalIsVisible

    }
  }

};
</script>

