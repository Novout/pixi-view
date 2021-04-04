import { defineStore } from 'pinia';
import { Maybe } from '@/utils';
import { useConfigStore } from '@/store/config';

export const useLoggerStore = defineStore({
  id: 'logger',
  state: () => ({
    list: [
      {
        content: '[PIXI-VIEW]: Initialize logger!',
        color: '#1AD500'
      }
    ]
  }),
  getters: {},
  actions: {
    emit(content: string, color = 'clean', type = 'view') {
      let _content: Maybe<string>;
      let _color: Maybe<string>;
      const config = useConfigStore();

      switch (color) {
        case 'success':
          _color = '#1AD500';
          break;
        case 'warning':
          _color = '#FFBD00';
          break;
        case 'error':
          _color = '#E70000';
          break;
        case 'clean':
          config.theme === 'dark' ? (_color = '#D8D8D8') : (_color = '#000000');
          break;
        default:
          throw new Error('[LOGGER]: emit() event breaker in color');
      }

      switch (type) {
        case 'view':
          _content = '[PIXI-VIEW]: ' + content;
          break;
        case 'pixi':
          _content = '[PIXI]: ' + content;
          break;
        case 'cmd':
          _content = '[INTERNAL]: ' + content;
          break;
        case 'logger':
          _content = '[LOGGER]: ' + content;
          break;
        default:
          throw new Error('[LOGGER]: emit() event breaker in type');
      }

      this.list.push({ content: _content as string, color: _color as string });
    },
    reset() {
      this.list = [];
      this.emit('Logger clear!', 'clean', 'logger');
    }
  }
});
