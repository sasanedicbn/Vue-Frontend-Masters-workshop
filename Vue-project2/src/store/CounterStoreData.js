import { defineStore } from "pinia";

export const useCounterStoreData = defineStore("CountStore", {
  state: () => ({
    count: 0,
    incrementAmount: 80,
  }),
  getters: {},
  actions: {
    incrementAmountBy80() {
      this.count += this.incrementAmount;
    },
  },
});

export default sasa = "nedic";
