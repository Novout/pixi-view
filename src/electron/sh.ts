const sh = require('shelljs');
const { execSync } = require('child_process');

import { ExecuteOptions } from "@/utils";

module.exports = {
  installAndExecuteBuildInPackage: (path: string, options: ExecuteOptions) => {
    if(options.yarn) {
      sh.cd(path)
      execSync('yarn && yarn build', (err: any, stdout: any, stderr: any) => {
        if (err) { return; }
      });
    } else {
      sh.cd(path)
      execSync('npm i && npm run build', (err: any, stdout: any, stderr: any) => {
        if (err) { return; }
      });
    }
  }
}
