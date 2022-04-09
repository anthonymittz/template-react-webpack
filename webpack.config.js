const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: 'src',
  },
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/i,
        use: 'asset/resource',
      },
    ],
  },
};
