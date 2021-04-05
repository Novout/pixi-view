import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

const optionsForCompile = ['esm', 'amd'];

const createPlugins = () => {
  return [typescript(), json(), resolve(), commonjs(), babel({ exclude: 'node_modules/**' })];
};

const createConfig = () => {
  const list = [];

  optionsForCompile.forEach((format) => {
    list.push({
      input: `./src/index.ts`,
      output: {
        file: `./lib/index.${format}.js`,
        format,
        exports: 'named',
      },
      plugins: createPlugins(),
    });

    list.push({
      input: `./src/index.ts`,
      output: {
        file: `./lib/bundle.${format}.min.js`,
        format,
        exports: 'named',
      },
      plugins: [
        ...createPlugins(),
        terser({
          format: {
            comments: false,
          },
        }),
      ],
    });
  });

  list.push({
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  });

  return list;
};

export default createConfig();
