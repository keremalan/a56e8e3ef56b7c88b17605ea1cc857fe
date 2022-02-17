const path = require("path");
const vue = "./src";

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vue),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
