const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  },
  devtool: 'hidden-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    publicPath: '/',
    hot: true
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: './dist/index.html',
      title: 'Neven Recchia',
      favicon: './dist/favicon.ico',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    }
  ), new webpack.HotModuleReplacementPlugin()]
};
