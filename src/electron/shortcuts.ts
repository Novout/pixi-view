import { globalShortcut, BrowserWindow } from 'electron';
import { win } from '../background';

export const createShortcuts = () => {
  globalShortcut.register('CmdOrCtrl+D', () => {
    (win as BrowserWindow).webContents.openDevTools();
  });
  // globalShortcut.register('CmdOrCtrl+R', () => {});
};
