const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // < THIS

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      },
    },
  ];
  // if (isDev) {
  //   loaders.push('eslint-loader');
  // }
  return loaders;
};

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
    // {
    //   test: /\.m?js$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: "babel-loader",
    //     options: {
    //       presets: ['@babel/preset-env']
    //     }
    //   }
    // },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        "css-loader",
        'sass-loader',
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      // use: {
      //   loader: "babel-loader",
      //   options: {
      //     presets: ['@babel/preset-env']
      //   },
      // }
      use: jsLoaders(),
    },
    ]
  },
  devServer: {
    port: 3000
  }
}