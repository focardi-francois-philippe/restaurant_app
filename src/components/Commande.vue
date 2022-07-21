<template>
    <div id="large-modal" tabindex="-1" class="overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full">
        <div class="relative  w-full h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full w-full">
                <!-- Modal header -->
                <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Récapitulatif de la commande
                    </h3>
                    <button type="button" @click="clickHandler"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="large-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div v-for="(item) in order.getters.getOrder" :key="item.id" class="p-2 space-y-6">
                    <p>{{ item.name + " X" + item.quantite }}</p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="large-modal" @click="sendCommande" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                        accept</button>
                    <button data-modal-toggle="large-modal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import order from '../store/order'
import axios from 'axios'
export default {
    name: 'Commande',
    props: {
        clickHandler: Function
    },
    data() {
        return {
            order,
            urlServeur: "http://152.228.171.171:8085"
        }
    },
    // beforeMount() {
    //     this.sendCommande()
        
    //     this.getCommande()
    // },
    methods: {
        sendCommande() {
            // const options = {
            //     method: "GET",
            //     url: this.urlServeur + "/order",
            //     data: order.getters.getState
            // }

            // axios(options).then((response) => {
            //     console.log(response.data.orders)

            // }).catch(error => {
            //     if (!error.response) {
            //         // network error
            //         this.errorStatus = 'Error: Network Error';
            //     } else {
            //         this.errorStatus = error.response.status.message;
            //     }
            // })
            const options = {
                method: "post",
                url: this.urlServeur + "/table/5/order",
                Headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                data: order.getters.getState
            }
            console.log(options.data)
            axios(options).then((response) => {
                console.log("POST")
                console.log(response.data)

            }).catch(function (error) {
                console.log(error);
            });
        },
        getCommande(){
            const options = {
                method: "GET",
                url: this.urlServeur + "/table/5/order",
                Headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                
            }
            axios(options).then((response) => {
                console.log("GET")
                console.log(response.data)

            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->