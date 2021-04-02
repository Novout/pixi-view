import { TemplateCreate } from '../utils';

export const createBlankHTML = (): TemplateCreate => {
  return {
    name: 'index.html',
    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Blank Template" />
    <link rel="stylesheet" href="reset.css">
    <title>Pixi View Blank Template</title>
  </head>
  <body></body>
  <script type="module" src="/index.js"></script>
</html>
`
  }
}

export const createBlankPackage = (): TemplateCreate => {
  return {
    name: 'package.json',
    content: `{
  "name": "blank-template",
  "author": "guest",
  "license": "MIT",
  "version": "0.1.0",
  "description": "A blank template generate by pixi-view.",
  "contributors": [
    "Guest <guest@gmail.com>"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/guest/blank-template"
  },
  "scripts": {
    "dev": "snowpack dev --polyfill-node",
    "build": "snowpack build --polyfill-node"
  },
  "keywords": [
    "pixi",
    "pixijs"
  ],
  "dependencies": {
    "pixi.js": "^6.0.0"
  },
  "devDependencies": {
    "snowpack": "^3.0.13"
  }
}
`
  }
}

export const createBlankIndex = (): TemplateCreate => {
  return {
    name: 'index.js',
    content: `import * as PIXI from 'pixi.js';

PIXI.utils.skipHello();

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  autoResize: true,
});

document.body.appendChild(app.view);

window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

app.loader.add('example', 'images/example.png').load((loader, resources) => {

  const sprite = new PIXI.Sprite(resources.example.texture);

  sprite.x = 50;
  sprite.y = 50;
  sprite.width = 150;
  sprite.height = 150;

  app.stage.addChild(sprite);

  app.ticker.add(() => {});
});

if (import.meta.hot) {
  import.meta.hot.accept(({module}) => {
    // Accept the module, apply it into your application.
  });
}
`
  }
}

export const createBlankSnowpack = (): TemplateCreate => {
  return {
    name: 'snowpack.config.js',
    content: `module.exports = {
  devOptions: {
    port: 4000
  },
};
`
  }
}

export const createBlankReset = (): TemplateCreate => {
  return {
    name: 'reset.css',
    content: `* {
  padding: 0;
  margin: 0;
  outline: 0;
}
`
  }
}
