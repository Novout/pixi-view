import { Application } from 'pixi.js';
import Loader from '@pixiview/loader';
import { SceneApplicationOptions } from './types';

export class Scene {
  private app: Application;
  private id: string;

  constructor() {}

  public set() {}

  public init(options?: SceneApplicationOptions) {
    this.app = new Application({
      autoStart: false,
      antialias: true,
      width: options.width || window.innerWidth,
      height: options.height || window.innerHeight,
      backgroundAlpha: options.background ? 1 : 0
    });

    Loader.load(() => {
      this.app.ticker.add(() => {
        console.log('test');
      });
    });
  }

  public destroy() {
    this.app.destroy(true);
  }

  public context(): Application {
    return this.app;
  }

  public render() {
    this.app.start();
    this.app.render();
  }
}

export * as Utils from './types';
