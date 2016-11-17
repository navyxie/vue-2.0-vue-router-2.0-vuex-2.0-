var self = module.exports = {
  build: {
    assetsSubDirectory: 'act_assets/dianshang',
    assetsPublicPath: '/',
    assetsRoot: '../dist'
  },
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  },
  current: function () {
    return process.env.NODE_ENV === 'production' ? self.build : self.dev
  }
}
