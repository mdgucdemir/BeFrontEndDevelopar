const path = require('path');

module.exports = {
  entry: ["@babel/polyfill",'./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  mode:"production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname,'dist')
    },
    port: 3200,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};