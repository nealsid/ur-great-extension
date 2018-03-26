const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/entrypoint.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'extension')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery', // eslint-disable-line quote-props
      jQuery: 'jquery', // eslint-disable-line quote-props
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
