const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const sharpAdaptor = require('responsive-loader/sharp')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')

// grab detail files
const list =
  glob.sync('./content/portfolio/**/details.js')
    .map(item => item.substr('./content/portfolio/'.length))
    .map(item => item.substr(0, item.length - '/details.js'.length))

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false
  },
  entry: {
    thumbnails: './content/portfolio/thumbnails.js',
    ...list.reduce((all, module) => {
      all[`${module}-details`] = `./content/portfolio/${module}/details.js`
      return all
    }, {})
  },
  output: {
    path: path.resolve(__dirname, 'content/portfolio-dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/,
        loader: 'responsive-loader',
        options: {
          adapter: sharpAdaptor,
          name: '[name]-[width]-[hash].[ext]',
          outputPath: '../../static/portfolio',
          publicPath: '/static/portfolio/',
          format: 'jpg'
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new ImageminPlugin({
      test: /\.(jpeg|jpg|png|gif|svg)$/i,
      jpegtran: {
        progressive: true
      }
    })
  ]
}
