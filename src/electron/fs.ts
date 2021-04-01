const fs = require("fs");
const path = require("path");
const { app } = require("electron").remote;
const pkg = require('../../pixi.config');

module.exports = {
  JsonFileSync: file => JSON.parse(fs.readFileSync(path.join(__dirname, `./data/${file}`)), 'utf8' as any),
  JsonWriteFile: (file, object) => {
    fs.writeFile(path.join(__dirname, `./${pkg.serializeLocalPath}/${file}`), JSON.stringify(object), 'utf8', () => {});
  },
  JsonWriteFileSync: (file, object) => {
    fs.writeFileSync(path.join(__dirname, `./${pkg.serializeLocalPath}/${file}`), JSON.stringify(object), { encoding: 'utf8' });
  },
  JsonFile: file => {
    fs.readFile(path.join(__dirname, `./${pkg.serializeLocalPath}/${file}`), (err, data) => {
      if (err) throw err;
      return JSON.parse(data);
    });
  },
  PathWrite: (file, object) => {
    const path_item = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}/${file}.json`);
    const path_full = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}`);

    if(!fs.existsSync(path_full)) {
      fs.mkdir(path_full, (err) => { if (err) { return console.error(err);}});
    }

    fs.writeFileSync(path_item, JSON.stringify(object), { encoding: 'utf8' });
  },
  PathRead: (file, initialize = []) => {
    const path_item = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}/${file}.json`);
    const path_full = path.resolve(app.getPath("userData") + `${pkg.serializeRoamingPath}`);

    if(!fs.existsSync(path_full)) {
      fs.mkdir(path_full, (err) => { if (err) { return console.error(err);}});
    }

    if(!fs.existsSync(path_item)) {
      fs.writeFileSync(path_item, JSON.stringify(initialize), { encoding: 'utf8' });
    }

    return JSON.parse(fs.readFileSync(path_item, 'utf8'));
  }
}
