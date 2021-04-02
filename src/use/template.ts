import path from 'path';
import fs from 'fs-extra';
import { ContentPath } from "@/utils";
// @ts-ignore
import { PathExists, WriteFile } from '@/electron/fs';
import { createBlankHTML } from "@/project/blank";

export const useTemplate = () => {
  const createBlankTemplate = (content: ContentPath): Promise<boolean> => {
    const _path = path.join(content.path, content.directory)

    return new Promise((resolve, reject) => {
      if(!PathExists(_path)) {
        Promise.resolve(fs.mkdir(_path, (err: any) => { if (err) { return console.error(err);}}))

        if(!PathExists(_path)) reject();

        const html = createBlankHTML();
        WriteFile({ path: path.join(_path, html.name), content: html.content });

        resolve(true)
      } else {
        reject();
      }
    });
  }

  return { createBlankTemplate };
}
