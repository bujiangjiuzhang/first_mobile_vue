const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const fileName = path.join(__dirname, './src/theme.less')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // // 修改navabar的背景色
            // 'nav-bar-background-color': 'red',
            // 上面方法的缺点是每次修改需要重启服务，所以用下面方法在theme.less中定义
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${fileName}";`,
          },
        },
      },
    },
  },
})
