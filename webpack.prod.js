const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/lib/index.js',
  output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: './dist/',
      filename: 'vue-signature.js',
  }
});