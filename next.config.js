const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  withCSS,
  optimizedImages
], {
  target: 'serverless',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});
