// site/vue.config.js
module.exports = {
  outputDir: 'dist',          // <- garante que sai em dist/
  publicPath: '/',
  chainWebpack: (config) => {
    // Só remove o CopyPlugin no DEV
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.delete('copy');
    }
  },
};