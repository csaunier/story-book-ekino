import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

import paths from './paths'

import config from '../src/config'
import * as globals from '../src/globals'

require('dotenv').config()

export default {
  entry: {
    app: ['babel-polyfill', './src/client'],
  },

  resolve: {
    modules: [paths.src, paths.nodeModules],
  },

  output: {
    path: `${paths.public}`,
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: `${config.imagesFolder}/[hash].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              minetype: 'application/font-woff',
              name: 'assets/fonts/[hash].[ext]',
            },
          },
        ],
        include: path.normalize(`${paths.src}/${config.fontsFolder}`),
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[hash].[ext]',
            },
          },
        ],
        include: path.normalize(`${paths.src}/${config.fontsFolder}`),
      },
      {
        test: /\.yml$/,
        use: ['js-yaml-loader'],
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new Dotenv(),

    new webpack.DefinePlugin({
      ...globals,
      'process.env.NODE_ENV': JSON.stringify(globals.__ENV__),
    }),

    new HtmlWebpackPlugin({
      favicon: `${paths.src}/assets/favicon.ico`,
      template: `${paths.src}/templates/layout.tpl.ejs`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      description: process.env.DESCRIPTION,
    }),

    new CopyWebpackPlugin([{ from: 'src/assets/img/team/', to: 'assets/img/team/' }]),
  ],
}
