// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    // REMOVE a cópia automática da pasta public/ no modo dev (temporário)
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.delete('copy');
    }
  },
  devServer: { port: 8081 }
};