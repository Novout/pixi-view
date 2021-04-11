import { Scene, Utils as SceneUtils } from '@pixiview/scene';

export interface RunnerConstructorOptions {
  platform: string;
  scenes: Array<Array<string | SceneUtils.ViewScene>>;
  notDestroyScenes?: boolean;
}

export interface RunnerApplicationOptions {
  width?: number;
  height?: number;
  background?: boolean;
}
