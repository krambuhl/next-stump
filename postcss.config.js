module.exports = {
  plugins: [
    require('postcss-easy-import')(),
    require('postcss-nested')(),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': false
      }
    })
  ]
}
