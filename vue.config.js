module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  // Se você tinha removido o CopyPlugin no dev, pode manter:
  chainWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.delete('copy');
    }
  },
  // Caso o ESLint esteja bloqueando build, você pode desativar provisoriamente:
  lintOnSave: false,
};