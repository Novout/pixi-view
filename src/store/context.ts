import { defineStore } from 'pinia';
// @ts-ignore
import { PathStorageRead } from '@/electron/fs';

export const useContextStore = defineStore({
  id: 'context',
  state: () =>
    PathStorageRead('context', {
      project: {
        path: 'C:Program Files' as string
      }
    }),
  getters: {},
  actions: {}
});
