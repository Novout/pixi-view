import { RunnerConstructorOptions } from './types';
import { Scene, Utils as SceneUtils } from '@pixiview/scene';
export class Runner {
  constructor(options: RunnerConstructorOptions) {
    this.scenes = new Map();
    this._register = [];
    this.__RUN = false;
    this.options = options;

    this.options.scenes.forEach((scene: Array<string | SceneUtils.ViewScene>) =>
      this.scenes.set(scene[0] as string, scene[1] as SceneUtils.ViewScene)
    );
  }

  private __RUN: boolean;

  private _register: Array<string>;

  private _scene: Scene;

  private options: RunnerConstructorOptions;

  private scenes: Map<string, SceneUtils.ViewScene>;

  private destroyScene() {
    this._scene.destroy();
  }

  private setScene(key: string) {
    this._scene = this.scenes.get(key) as SceneUtils.ViewScene;
    if (!this.options.notDestroyScenes) this.scenes.delete(key);
  }

  public register(plugin: any) {
    this._register.push(plugin.name);
  }

  public run(key?: string) {
    if (!this.__RUN && !key) {
      this._scene = this.scenes.get('default');
      if (!this.options.notDestroyScenes) this.scenes.delete('default');
    } else if (!this.__RUN && key) {
      this.setScene(key);
    }

    this._scene.init({});
    this._scene.render();
    this.__RUN = true;
  }

  public nextScene(key: string) {
    this.destroyScene();
    this.setScene(key);
    this.run();
  }
}
