require('babel-register')

const path = require('path')

const webpackConfig = require('../webpack/dev.babel').default

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },

  module: webpackConfig.module,
  plugins: webpackConfig.plugins,
}
