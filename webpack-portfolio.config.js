const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const sharpAdaptor = require('responsive-loader/sharp')
const ImageminPlugin = require('imagemin-webpack-plugin').default

// grab detail files
const list =
  glob.sync('./lib/portfolio/**/details.js')
    .map(item => item.substr('./lib/portfolio/'.length))
    .map(item => item.substr(0, item.length - '/details.js'.length))

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false
  },
  entry: {
    thumbnails: './lib/portfolio/thumbnails.js',
    ...list.reduce((all, module) => {
      all[`${module}-details`] = `./lib/portfolio/${module}/details.js`
      return all
    }, {})
  },
  output: {
    path: path.resolve(__dirname, 'lib/portfolio-dist'),
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
          publicPath: '/static/portfolio/'
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
  ]
}
