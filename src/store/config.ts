import { defineStore } from "pinia"

export const useConfigStore = defineStore({
  id: 'config',
  state: () => ({
    lang: "en",
  }),
  getters: {},
  actions: {},
})
