const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");

const config = merge(base, {
  devServer: {
    static: {
      directory: path.join(__dirname, "..", "public"),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
});


module.exports = config;
