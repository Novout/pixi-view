const path = require('path');
const pkg = require('./package.json');

module.exports = {
  chainWebpack: ({ resolve }) => {
    resolve
      .alias
      .set('_', path.resolve(__dirname, './public'));
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: `Konstanta Engine - ${pkg.version}`
        // publish: ['github']
      },
      mainProcessFile: "src/background.ts",
      preload: { fs: "src/electron/fs.ts" }
    },
  },
};
