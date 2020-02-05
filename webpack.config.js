const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  console.info("running in mode:", argv.mode);

  let config = {
    mode: argv.mode,
    entry: "./src/index.js",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Development",
        template: "./src/index.html"
      }),
      new CopyPlugin([
        { from: "./src/style-px.css", to: "style-px.css" },
        { from: "./src/style-rem.css", to: "style-rem.css" }
      ])
    ]
  };

  if (argv.mode === "development") {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devServer = {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    };
  }

  return config;
};
