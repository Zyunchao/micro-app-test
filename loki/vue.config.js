const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 9002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
