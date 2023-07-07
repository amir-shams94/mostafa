import { defineStore } from 'pinia'

export const useBuyerStore = defineStore('buyer', {
  state: () => ({
    buyer: {},
  }),

  actions: {
    updateBuyer(buyerUpdate) {
      console.log(buyerUpdate)
      this.seller = {
        ...this.buyer,
        ...buyerUpdate,
      }
    },
  },
})
