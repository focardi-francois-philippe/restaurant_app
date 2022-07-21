import { createStore } from "vuex";

const order = createStore({
  
  state() {
    return {
      table_id: 5,
      price: 0,
      content: {},
    };
  },
  mutations: {
    addInOrder(state,payload) {
      state.content[payload.key] = {
        name: payload.nom,
        quantite: payload.quantite,
        prix_unitaire: payload.prix_unitaire
      };
      state.price +=  state.content[payload.key].prix_unitaire
    },
    removeInOrder(state,payload) {
      if (state.content[payload.key].quantite > 0)
      {
        state.content[payload.key].quantite -= 1;
        
      } 
      else 
      {
        delete state.content[payload.key];
      }
      state.price -=  state.content[payload.key].prix_unitaire
    },
  },
  getters: {
    getOrder (state) {
      console.log("AZ2AESDDFGF")
     return state.content
    },
    getState (state) {
      return state
     }
  },
});

export default order;
