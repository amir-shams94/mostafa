import { defineStore } from "pinia";
import axios from "axios";

export const useSellerStore = defineStore("seller", {
  state: () => ({
    seller: {},
  }),

  actions: {
    updateSeller(sellerUpdate) {
      console.log(sellerUpdate);
      this.seller = {
        ...this.seller,
        ...sellerUpdate,
      };
    },
    async postDataOfSeller(payload) {
      try {
        const res = await axios.post(
          "https://kshams.ir/realstate/api/new/seller",
          payload
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getSeller: (state) => state.seller,
  },
});
