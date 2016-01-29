var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/main.jsx",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8888,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
