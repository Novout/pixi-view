import { Scene } from './index';

export interface SceneConstructorOptions {
  platform: string;
}

export interface SceneApplicationOptions {
  width?: number;
  height?: number;
  background?: boolean;
}

export type ViewScene = Scene;
