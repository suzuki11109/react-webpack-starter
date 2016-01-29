module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/main.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: "./public",
    port: 8888,
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
