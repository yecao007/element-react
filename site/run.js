const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack({
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, '../site'),
          path.join(__dirname, '../src'),
          path.join(__dirname, '../libs')
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader : 'file'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader : 'url'
      },
      {
        test: /\.md$/,
        loader : 'raw'
      }
    ]
  }
}), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', error => {
  if (error) {
    throw error;
  }
});
