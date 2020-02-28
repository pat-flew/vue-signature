const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'build.js',
        publicPath: '/dev'
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    devtool: 'source-map',
});