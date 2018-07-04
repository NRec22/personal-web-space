const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['env', 'react'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '_variables.sass': path.resolve(__dirname, 'src/_variables.sass'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'hidden-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: '/dist/',
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
