import * as webpack from "webpack";
const TerserPlugin = require("terser-webpack-plugin");

/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
export default {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        extractComments: undefined,
        terserOptions: {
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
        },
      }),
    ],
    runtimeChunk: "single",
  },
  plugins: [],
} as webpack.Configuration;
