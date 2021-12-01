import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: path.join(__dirname, 'src', 'index.ts'),
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
    },
  ],
  plugins: [esbuild(), nodeResolve()],
};
