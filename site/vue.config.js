// site/vue.config.js
module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  chainWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.delete('copy'); // só remove no DEV
    }
  }
};