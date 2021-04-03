import { defineStore } from 'pinia';
// @ts-ignore
import { PathStorageRead } from '@/electron/fs';

export const useConfigStore = defineStore({
  id: 'config',
  state: () =>
    PathStorageRead('config', {
      lang: 'en',
      theme: 'dark'
    }),
  getters: {},
  actions: {}
});
