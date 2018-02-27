require('babel-register')

const path = require('path')

const HappyPack = require('happypack')
const webpack = require('webpack')

const webpackConfig = require('../webpack/dev.babel').default

module.exports = {
  module: webpackConfig.module,

  plugins: [
    new HappyPack({ loaders: ['babel-loader'], verbose: false }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
