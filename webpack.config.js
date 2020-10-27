const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImagesConfigWebpackPlugin = require('image-config-webpack-plugin');
const JsConfigWebpackPlugin = require('js-config-webpack-plugin');
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    chunkFilename: '[id].js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json']
  },
  plugins: [
    // Generate a base html file and injects all generated css and js files
    new HtmlWebpackPlugin({
      title: 'Yauheni Yafimenka',
      favicon: './src/favicon/favicon.ico',
      template: 'index.html',
    }),
    // File loader configuration for .gif .jpg .jpeg .png and .svg files
    // see https://github.com/namics/webpack-config-plugins/tree/master/packages/image-config-webpack-plugin/config
    new ImagesConfigWebpackPlugin(),
    // Multi threading babel loader configuration with caching for .js and .jsx files
    // see https://github.com/namics/webpack-config-plugins/tree/master/packages/js-config-webpack-plugin/config
    new JsConfigWebpackPlugin(),
    // SCSS Configuration for .css .module.css and .scss .module.scss files
    // see https://github.com/namics/webpack-config-plugins/tree/master/packages/scss-config-webpack-plugin/config
    new ScssConfigWebpackPlugin(),
  ],
};
