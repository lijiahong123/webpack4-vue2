const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname, "..", "src/main.js"),
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  stats: "errors-only", // 只在发生错误时输出log
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "src"),
    },
    extensions: [".js", ".json", ".vue"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "static/img/[name].[ext]",
              limit: 2000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack",
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
      publicPath: "./",
      favicon: path.resolve(__dirname, "..", "public/favicon.ico"),
    }),
  ],
};
