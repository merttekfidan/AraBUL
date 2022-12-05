module.exports = {
    devServer: {
      proxy: {
        '^/v2': {
          target: 'https://newsapi.org',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }