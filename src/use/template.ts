import path from 'path';
import fs from 'fs-extra';
import { ContentPath } from '@/utils';
// @ts-ignore
import { PathExists, WriteFile, DownloadAndSetImage, CreateFolder } from '@/electron/fs';
// @ts-ignore
import { installAndExecuteBuildInPackage, killLocalhost } from '@/electron/sh';
import {
  createBlankHTML,
  createBlankPackage,
  createBlankIndex,
  createBlankSnowpack,
  createBlankReset
} from '@/project/blank';
import { createPixiViewConfig } from '@/project/utils';

export const useTemplate = () => {
  const createBlankTemplate = (content: ContentPath): Promise<void> => {
    const _path = path.join(content.path, content.directory);

    return new Promise((resolve, reject) => {
      if (!PathExists(_path)) {
        // kill possible process in port
        killLocalhost();

        Promise.resolve(
          fs.mkdir(_path, (err: any) => {
            if (err) {
              return console.error(err);
            }
          })
        );
        // index.html
        const html = createBlankHTML();
        WriteFile({ path: path.join(_path, html.name), content: html.content });

        // package.json
        const pkg = createBlankPackage();
        WriteFile({ path: path.join(_path, pkg.name), content: pkg.content });

        // index.js
        const js = createBlankIndex();
        WriteFile({ path: path.join(_path, js.name), content: js.content });

        // snowpack.config.js
        const snowpack = createBlankSnowpack();
        WriteFile({ path: path.join(_path, snowpack.name), content: snowpack.content });

        // reset.css
        const css = createBlankReset();
        WriteFile({ path: path.join(_path, css.name), content: css.content });

        // pixiview.config.js
        const view = createPixiViewConfig();
        WriteFile({ path: path.join(_path, view.name), content: view.content });

        resolve(installAndExecuteBuildInPackage(_path, { yarn: false }));
      } else {
        reject({ exists: true });
      }
    });
  };

  return { createBlankTemplate };
};
