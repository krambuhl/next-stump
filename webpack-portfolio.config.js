const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const sharpAdaptor = require('responsive-loader/sharp')
const glob = require('glob')

// grab detail files
const list =
  glob.sync('./lib/portfolio/**/details.js')
    .map(item => item.substr('./lib/portfolio/'.length))
    .map(item => item.substr(0, item.length - '/details.js'.length))

module.exports = {
  mode: 'development',
  // mode: 'production',
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
          placeholder: true,
          outputPath: '../../static/portfolio',
          publicPath: '/static/portfolio/'
        }
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ]
}
