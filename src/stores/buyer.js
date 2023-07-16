import { defineStore } from "pinia";

export const useBuyerStore = defineStore("buyer", {
  state: () => ({
    buyer: {},
  }),

  actions: {
    updateBuyer(buyerUpdate) {
      console.log(buyerUpdate);
      this.buyer = {
        ...this.buyer,
        ...buyerUpdate,
      };
    },
  },
  getters: {
    dataBuyer: (state) => state.buyer,
  },
});
