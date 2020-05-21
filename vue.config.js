module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views'
      }
    }
  }
  /*
  ,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:8000/api/n3',  //对应服务器地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '~/api': ''
        }
      }
    }
  }
  */
}