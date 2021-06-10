const path = require("path");
const webpack = require("webpack");
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "/home/matin/Programming/reeesi/backend+django/framemaker/staticfiles/home/"),
    filename: "[name].bundle.js",
    
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        
        use: ["style-loader", "css-loader","less-loader"],
        
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use  : 'url-loader'
      },
      
    ],
  },
  
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: '../../webpack-stats.json'}),
  ],


};
