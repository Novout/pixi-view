const fs = require('fs-extra');
const https = require('https');
const path = require('path');
const rimraf = require('rimraf');
const Stream = require('stream').Transform;
const { app } = require('electron').remote;

import { TemplateMontage, TemplateToPath } from '@/utils';

module.exports = {
  PathStorageWrite: (file: any, object: any) => {
    const path_item = path.resolve(app.getPath('userData') + `/data/${file}.json`);
    const path_full = path.resolve(app.getPath('userData') + `/data`);

    if (!fs.existsSync(path_full)) {
      fs.mkdir(path_full, (err: any) => {
        if (err) {
          return console.error(err);
        }
      });
    }

    fs.writeFileSync(path_item, JSON.stringify(object), { encoding: 'utf8' });
  },
  PathStorageRead: (file: any, initialize = []) => {
    const path_item = path.resolve(app.getPath('userData') + `/data/${file}.json`);
    const path_full = path.resolve(app.getPath('userData') + `/data`);

    if (!fs.existsSync(path_full)) {
      fs.mkdir(path_full, (err: any) => {
        if (err) {
          return console.error(err);
        }
      });
    }

    if (!fs.existsSync(path_item)) {
      fs.writeFileSync(path_item, JSON.stringify(initialize), { encoding: 'utf8' });
    }

    return JSON.parse(fs.readFileSync(path_item, 'utf8'));
  },
  PathExists: (path: string) => {
    return fs.existsSync(path);
  },
  CopyFolder: (origin: string, to: string): Promise<void> => {
    return fs.copy(origin, to);
  },
  WriteFile: (item: TemplateMontage) => {
    fs.writeFileSync(item.path, item.content, 'utf8', () => {});
  },
  ReadFile: (path: string) => {
    return fs.readFileSync(path);
  },
  CopyAndPaste: (path: TemplateToPath) => {
    fs.readFile(path.origin, function (err: any, data: any) {
      if (err) throw err;

      fs.writeFile(path.to, data, function (err: any) {
        if (err) throw err;
      });
    });
  },
  DownloadAndSetImage: async (url: string, path: string) => {
    try {
      await https
        .request(url, (response: any) => {
          const data = new Stream();

          response.on('data', (chunk: any) => {
            data.push(chunk);
          });

          response.on('end', () => {
            fs.writeFileSync(path, data.read());
          });
        })
        .end();
    } catch (e) {
      console.error(e);
    }
  },
  DeleteFolder: (path: string) => {
    rimraf(path, () => {});
  },
  CreateFolder: (path: string) => {
    fs.mkdir(path, (err: any) => {
      if (err) {
        return console.error(err);
      }
    });
  },
  getRootPixiViewConfig: (_path: string) => {
    return fs.readFileSync(path.join(_path, 'pixiview.config.js'));
  }
};
