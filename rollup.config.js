import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
// export default {
//   input: 'dist/main.js',
//   output: [
//     {
//       file: 'dist/bundle.es2015.js',
//       format: 'cjs',
//       plugins: [],
//     },
//     {
//       file: 'dist/bundle.es2015.min.js',
//       format: 'es',
//       plugins: [terser()],
//     },
//   ],
//   treeshake: true,
//   plugins: [
//     nodeResolve({
//       mainFields: ['module', 'main'],
//     }),
//     // terser(),
//   ],
// };

export default {
  input: 'dist/main.js',
  output: [
    {
      file: 'dist/bundle.es2015.js',
      format: 'es',
    },
  ],
  treeshake: true,
  plugins: [
    resolve({
      browser: true,
    }),
    terser(),
  ],
};
