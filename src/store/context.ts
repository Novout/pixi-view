import { defineStore } from 'pinia';
// @ts-ignore
import { PathStorageRead, getRootPixiViewConfig } from '@/electron/fs';
import path from 'path';

export const useContextStore = defineStore({
  id: 'context',
  state: () =>
    PathStorageRead('context', {
      project: {
        name: 'blank-project' as string,
        path: 'C:Program Files' as string,
        port: '4000' as string
      }
    }),
  getters: {},
  actions: {
    register() {
      const _path = path.join(this.project.path, this.project.name);
      console.log(getRootPixiViewConfig(_path));
    }
  }
});
