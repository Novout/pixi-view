import { Loader as loader } from 'pixi.js';
import { Callback, TexturesList } from './types';

export class Loader {
  private readonly path: string = 'assets';

  private readonly shared: loader = loader.shared;

  private __CACHE: boolean = false;

  constructor() {
    this.shared.baseUrl = this.path;
  }

  public load(setup: Callback<void>, textures?: TexturesList) {
    if (!this.__CACHE) {
      textures?.forEach((texture) => {
        this.shared.add(texture[0], texture[1]);
      });

      this.__CACHE = true;
    }

    this.shared.load(setup);
  }
}

export default new Loader();

export * as Utils from './types';
