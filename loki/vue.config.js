const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
