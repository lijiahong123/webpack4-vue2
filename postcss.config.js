module.exports = {
  plugins: [
    "postcss-preset-env", // 高级语法预设
    require("autoprefixer"), // 添加前缀， 与.browserslistrc 有关
    require("postcss-nested"), // 拆解scss less 嵌套
  ],
};
