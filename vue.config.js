module.exports = {
  // publicPath: './',
  // outputDir: 'dist',
  pages: {
    // index: {
    //   // page 的入口
    //   entry: 'src/main.js',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: 'index.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'Index Page',
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ['chunk-vendors', 'chunk-common', 'index'],
    // },
    iconfont: 'src/components/iconfont/iconfont.json',
  },

  // transpileDependencies: ['element-ui'], //  对element-ui引用放入打包
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        const optionsUrl = `icon-${options}`;
        console.log('options', options);
        // 修改它的选项...
        return optionsUrl;
      });
  },
};
