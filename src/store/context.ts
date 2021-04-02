import { defineStore } from "pinia"

export const useContextStore = defineStore({
  id: 'context',
  state: () => ({
    project: {
      path: "" as string
    }
  }),
  getters: {},
  actions: {},
})
