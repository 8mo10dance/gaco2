const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery'
    })
  ],
  devServer: {
    compress: true,
    port: 9000
  }
}
