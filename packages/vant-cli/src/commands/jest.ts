import jest from 'jest';
import { setNodeEnv } from '../common/index.js';
import { genPackageEntry } from '../compiler/gen-package-entry.js';
import {
  ROOT,
  JEST_CONFIG_FILE,
  PACKAGE_ENTRY_FILE,
} from '../common/constant.js';

export function test(command: any) {
  setNodeEnv('test');

  genPackageEntry({
    outputPath: PACKAGE_ENTRY_FILE,
  });

  const config = {
    rootDir: ROOT,
    watch: command.watch,
    debug: command.debug,
    config: JEST_CONFIG_FILE,
    runInBand: command.runInBand,
    clearCache: command.clearCache,
    changedSince: command.changedSince,
    logHeapUsage: command.logHeapUsage,
    // make jest tests faster
    // see: https://ivantanev.com/make-jest-faster/
    maxWorkers: '50%',
  } as any;

  jest
    .runCLI(config, [ROOT])
    .then((response) => {
      if (!response.results.success && !command.watch) {
        process.exit(1);
      }
    })
    .catch((err) => {
      console.log(err);

      if (!command.watch) {
        process.exit(1);
      }
    });
}
