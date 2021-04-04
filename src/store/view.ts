import { defineStore } from 'pinia';
// @ts-ignore
import { PathStorageRead } from '@/electron/fs';

export const useViewStore = defineStore({
  id: 'view',
  state: () =>
    PathStorageRead('view', {
      generics: {
        fontSize: '10px',
        fontFamily: 'Raleway Normal'
      }
    }),
  getters: {},
  actions: {}
});
