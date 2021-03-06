const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   loader: 'eslint',
    //   exclude: /node_modules/
    // }],
    loaders: [{
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
