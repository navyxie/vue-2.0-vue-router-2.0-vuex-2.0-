// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var PROXY_TABLE = require('../src/proxy')
var BUILD = require('../src/build')
var distPath = BUILD.build.assetsRoot || '../dist'
var assetsPublicPath = BUILD.build.assetsPublicPath || '/'
var assetsSubDirectory = BUILD.build.assetsSubDirectory || 'static'

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(path.join(__dirname, distPath, assetsSubDirectory) + '/index.html'),
    assetsRoot: path.resolve(__dirname, distPath),
    assetsSubDirectory: assetsSubDirectory,
    assetsPublicPath: assetsPublicPath,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: PROXY_TABLE || {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
