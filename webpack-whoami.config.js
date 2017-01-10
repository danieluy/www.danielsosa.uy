var webpack = require('webpack');

module.exports = {
  entry: './src/js/whoami/main.js',
  output: {
    filename: 'whoami-bundle.js',
    path: './public/whoami/js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
