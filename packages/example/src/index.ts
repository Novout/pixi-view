import { Callback } from './types';

export const test: Callback<void> = () => {
  console.log('test');
};

export * as Utils from './types';
