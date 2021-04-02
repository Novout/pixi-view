const sh = require('shelljs');
const { exec, execSync } = require('child_process');

import { ExecuteOptions } from "@/utils";

module.exports = {
  installAndExecuteBuildInPackage: (path: string, options: ExecuteOptions) => {
    if(options.yarn) {
      sh.cd(path)
      exec('yarn && yarn dev', (err: any, stdout: any, stderr: any) => {
        if (err) { return; }
      });
    } else {
      sh.cd(path)
      execSync('npm i', (err: any, stdout: any, stderr: any) => {
        if (err) { return; }
      });
      const _runtime = exec('npm run dev', (err: any, stdout: any, stderr: any) => {
        if (err) { return; }
      });

      _runtime.stdout.on('data', (data: any) => {
        if(data.includes('watching for file changes...')) {
          const iframe  = document.getElementById('view') as HTMLIFrameElement
          iframe.src = iframe.src;
        }
      });
    }
  },
  killLocalhost: () => {
    execSync('npx kill-port 4000', (err: any, stdout: any, stderr: any) => {
      if (err) { return; }
    });
  }
}
