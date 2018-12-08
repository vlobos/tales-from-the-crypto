const path = require("path");
const ENTRY_DIR = path.join(__dirname, "/client");
const OUTPUT_DIR = path.join(__dirname, "/public");

module.exports = {
  entry:`${ENTRY_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: OUTPUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [ "transform-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"}, {loader: "css-loader"}
        ]
      }
    ]
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    compress: true,
    port: 8080
  }
};