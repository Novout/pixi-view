import { resolve } from 'node:path';
import path from 'path';
import { ReadJsonFile, WriteJsonFile } from './json';

export default class Defines {
  private readonly _path: string = path.resolve(process.cwd(), './src/defines');

  public get(arq: string): Promise<any> {
    const content = path.resolve(this._path, arq);

    if (!content.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.toml|.json)$/i))
      throw new Error('@pixiview/defines: not support file extension!');

    if (content.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.json)$/i)) {
      return new Promise<Record<any, any>>((resolve, reject) => {
        resolve(ReadJsonFile(content));
      });
    } else {
      return new Promise<Record<any, any>>((resolve, reject) => {
        resolve(ReadJsonFile(content));
      });
    }
  }

  public set(arq: string, data: any): Promise<any> {
    const content = path.resolve(this._path, arq);

    if (!content.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.toml|.json)$/i))
      throw new Error('@pixiview/defines: not support file extension!');

    if (content.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.json)$/i)) {
      return new Promise<any>((resolve, reject) => {
        resolve(WriteJsonFile(content, data));
      });
    } else {
      return new Promise<any>((resolve, reject) => {
        resolve(WriteJsonFile(content, data));
      });
    }
  }
}

export * as Utils from './types';
