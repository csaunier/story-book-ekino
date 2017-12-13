import HappyPack from 'happypack'
import webpack from 'webpack'
import merge from 'webpack-merge'

import paths from './paths'
import loaderOptions from './loaderOptions'
import webpackConfig from './base'

const { PORT } = process.env

export default merge.strategy({
  entry: 'prepend',
})(webpackConfig, {
  devtool: 'eval',

  entry: {
    app: ['react-hot-loader/patch'],
  },

  output: {
    publicPath: `http://localhost:${PORT}/`,
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'happypack/loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: loaderOptions.cssLoader,
          },
          {
            loader: 'sass-loader',
            options: loaderOptions.sassLoader,
          },
          {
            loader: 'postcss-loader',
            options: loaderOptions.postcssLoader,
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HappyPack({ loaders: ['babel-loader'], verbose: false }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    contentBase: paths.public,
    historyApiFallback: {
      index: '/',
      disableDotRule: true,
    },
    hot: true,
    port: PORT,
    inline: true,
    stats: 'errors-only',
  },
})
