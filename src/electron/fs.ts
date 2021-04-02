const fs = require("fs-extra");
const path = require("path");
const { app } = require("electron").remote;
const pkg = require('../../pixi.config');

module.exports = {
  JsonFileSync: (file: any) => JSON.parse(fs.readFileSync(path.join(__dirname, `./data/${file}`)), 'utf8' as any),
  JsonWriteFile: (file: any, object: any) => {
    fs.writeFile(path.join(__dirname, `./${pkg.serializeLocalPath}/${file}`), JSON.stringify(object), 'utf8', () => {});
  },
  JsonWriteFileSync: (file: any, object: any) => {
    fs.writeFileSync(path.join(__dirname, `./${pkg.serializeLocalPath}/${file}`), JSON.stringify(object), { encoding: 'utf8' });
  },
  JsonFile: (file: any) => {
    fs.readFile(path.join(__dirname, `./${pkg.serializeLocalPath}/${file}`), (err: any, data: any) => {
      if (err) throw err;
      return JSON.parse(data);
    });
  },
  PathWrite: (file: any, object: any) => {
    const path_item = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}/${file}.json`);
    const path_full = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}`);

    if(!fs.existsSync(path_full)) {
      fs.mkdir(path_full, (err: any) => { if (err) { return console.error(err);}});
    }

    fs.writeFileSync(path_item, JSON.stringify(object), { encoding: 'utf8' });
  },
  PathRead: (file: any, initialize = []) => {
    const path_item = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}/${file}.json`);
    const path_full = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}`);

    if(!fs.existsSync(path_full)) {
      fs.mkdir(path_full, (err: any) => { if (err) { return console.error(err);}});
    }

    if(!fs.existsSync(path_item)) {
      fs.writeFileSync(path_item, JSON.stringify(initialize), { encoding: 'utf8' });
    }

    return JSON.parse(fs.readFileSync(path_item, 'utf8'));
  },
  CopyFolder: (origin: string, to: string): Promise<void> => {
    return fs.copy(origin, to)
  },
  WriteFile(path: any) {
    fs.writeFile(path, `
    import test from 'test';
    const foo = () => {
      console.log('foo')
    }
    foo()
    `, 'utf8', () => {});
  }
}
