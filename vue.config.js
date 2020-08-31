// eslint-disable-next-line no-undef
module.exports = {
  //关闭eslint
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  lintOnSave: false
};
