var webpack = require('webpack');

module.exports = {
  entry: './src/js/dev.js',
  output: {
    filename: 'dev-bundle.js',
    path: './public/js/'
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
