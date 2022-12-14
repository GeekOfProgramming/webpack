const path = require("path");

const entryPoint = "src/script-1.js";
const outputPoint = "dist";

module.exports = {
  //define entry point
  entry: path.resolve(__dirname, entryPoint),

  //define output
  output: {
    path: path.resolve(__dirname, outputPoint),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
