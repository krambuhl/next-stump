const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const sharpAdaptor = require('responsive-loader/sharp')
const list = require('./lib/portfolio/list')

module.exports = {
  mode: 'development',
  entry: {
    thumbnails: './lib/portfolio/thumbnails.js',
    ...list.reduce((all, module) => {
      all[`${module}-details`] = `./lib/portfolio/${module}/details.js`
      return all
    }, {})
  },
  output: {
    path: path.resolve(__dirname, 'static/portfolio'),
    filename: '[name].js',
    publicPath: '/static/portfolio/',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)/,
        loader: 'responsive-loader',
        options: {
          adapter: sharpAdaptor,
          name: '[name]-[width]-[hash].[ext]',
          placeholder: true,
          outputPath: 'images',
          publicPath: '/static/portfolio/images/'
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ]
}
