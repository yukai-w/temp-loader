const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  plugins: [
    new UglifyJsPlugin({ exclude: /\.js$/ })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /temp-loader/,
      use: {
        loader: path.resolve(__dirname, './temp-loader/index.js'),
        options: {
          name: 'Alice'
        }
      }
    }]
  }
}