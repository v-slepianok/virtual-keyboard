const path = require('path');
const sass = require('sass');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  entry: ['./src/js/index.js', './src/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/scss'),
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {},
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: sass,
          sourceMap: true,
        },
      },
      ],
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.bundle.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/icons',
          to: 'icons',
        },
        {
          from: 'src/*.html',
          to: '[name][ext]',
        },
      ],
    }),
  ],
};

module.exports = config;
