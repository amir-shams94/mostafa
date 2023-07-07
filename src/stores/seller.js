import { defineStore } from 'pinia'

export const useSellerStore = defineStore('seller', {
  state: () => ({
    seller: {

    },
  }),

  actions: {
    updateSeller(sellerUpdate) {
      console.log(sellerUpdate)
      this.seller = {
        ...this.seller,
        ...sellerUpdate,
      }
    },
  },
})
