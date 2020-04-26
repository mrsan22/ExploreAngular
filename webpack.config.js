const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = {
  target: 'web',
  entry: './app/main.ts',
  mode: 'production',
  output: {
    filename: 'bundle.es2015.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         warnings: false,
  //         parse: {},
  //         compress: {},
  //         mangle: true, // Note `mangle.properties` is `false` by default.
  //         module: false,
  //         output: null,
  //         toplevel: false,
  //         nameCache: null,
  //         ie8: false,
  //         keep_classnames: undefined,
  //         keep_fnames: false,
  //         safari10: false,
  //       },
  //     }),
  //   ],
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: './app/app.module.ts#AppModule',
      sourceMap: true,
    }),
  ],
};
