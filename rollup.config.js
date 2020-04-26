import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/main.js',
  output: {
    file: 'dist/bundle.es2015.js',
    format: 'iife',
  },
  treeshake: true,
  plugins: [
    nodeResolve({
      mainFields: ['module', 'main'],
    }),
    terser(),
  ],
};
