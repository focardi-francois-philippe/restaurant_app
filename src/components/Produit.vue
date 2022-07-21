<template>
    <div class="bg-white rounded shadow border p-6 flex">
        <div>
            <img height="42" width="60" src="../Images/coca.png" alt="">
        </div>

        <div class="ml-6 w-52">
            <h5 class="text-xl font-bold  mt-0">{{ nom }}</h5>
            <div class="flex ">
                <h2 class="text-sm font-bold  mt-0">{{ prix + " €" }}</h2>
            </div>
            
        </div>
        <div class="flex justify-end mt-12 text-base">
            <button @click="retirer"
                class="bg-gray-400  text-white text-center w-6 h-6 font-bold rounded-full ">-</button>
            <p class="ml-2 mr-2">{{ this.privateState.quantite }}</p>
            <button @click="ajouter"
                class="bg-gray-400 text-white text-center w-6 h-6 font-bold   rounded-full ">+</button>
        </div>
    </div>

</template>

<script>
import order from "../store/order.js"
// <div id="ingredient" class="flex ">
//                 <p class="text-xs mt-0">Poulet salade tomates cheddar Poulet salade tomates cheddar Poulet salade tomates cheddar</p>
//             </div>
export default {
    name: 'Produit',
    props: {
        cle: String,
        nom: String,
        prix: Number,
        imageURL: String
    },
    data() {
        return {
            privateState: {
                quantite: 0,
                categorie: "Boissons",
            },
            sharedState: {
                order
            }
        }

    },
    methods: {
        ajouter: function () {
            this.privateState.quantite += 1
   
            this.sharedState.order.commit("addInOrder", {
                key: this.cle,
                nom: this.nom,
                quantite: this.privateState.quantite,
                prix_unitaire: this.prix
            })
        },
        retirer: function () {
            this.privateState.quantite -= 1

            this.sharedState.order.commit("removeInOrder", {
                key: this.cle,
                nom: this.nom,
                quantite: this.privateState.quantite,
                prix_unitaire: this.prix
            })
        },
        getImage: function(img)
        {
            return require('../Images/'+img)
        }
    }
    /**{ */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->