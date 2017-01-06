var webpack = require('webpack');

module.exports = {
  entry: './src/js/home.js',
  output: {
    filename: 'home-bundle.js',
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
