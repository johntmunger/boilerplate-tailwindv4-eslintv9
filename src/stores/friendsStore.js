import { defineStore } from "pinia";

export const friendStore = defineStore("friends", {
  state: () => ({
    names: [],
  }),

  actions: {
    addFriend(name) {
      this.names.push(name);
    },
  },
});
