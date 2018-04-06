const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: ['./src/js/app.js'],
    module: {
      rules: [
        {
          test: /.js?$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            presets: ['es2015']
          }
        }, {
          test: /\.(jpg|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name]_dist.[ext]',
                publicPath: function(path) {
                  return '../' + path;
                }
              }
            }
          ]
        }, {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    output: {
      filename: 'js/bundle.js',
      path: path.join(__dirname)
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new ExtractTextPlugin('css/style_release.css'),
      new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ]
  }
];
