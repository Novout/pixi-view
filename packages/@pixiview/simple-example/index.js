import * as PIXI from 'pixi.js';
import { Runner } from '@pixiview/runner';
import { Scene } from '@pixiview/scene';

PIXI.utils.skipHello();

const runner = new Runner({
  platform: 'blank',
  scenes: [
    ['default', new Scene()]
  ]
})

runner.run();

if (import.meta.hot) {
  import.meta.hot.accept(({module}) => {
    // Accept the module, apply it into your application.
  });
}
