const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: (config) => {
    // const svgRule = config.module.rule('svg')
    // console.log(svgRule)
    // svgRule.uses.clear()

    // svgRule
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader')
    // set svg-sprite-loader
    // console.log(resolve('src/icons'))
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()
    // Exclude SVG sprite directory from default svg rule
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // .use('svgo-loader')
    // .loader('svgo-loader')
    // .options(options)
    // .end()
  }
}
