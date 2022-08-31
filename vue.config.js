const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const cpns = path.join(__dirname, 'src/components')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 自动的打开浏览器, port, host
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    },
    resolve: {
      //配置路径
      //key路径别名  value绝对路径
      alias: {
        cpns,
      }
    }
  }
})
