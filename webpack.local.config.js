var config = require('./webpack.config.js')
var path = require('path')

config.devtool = 'cheap-module-eval-source-map'
config.devServer = {
  contentBase: path.join(__dirname, './dist'),
  progress: true,
  color: true,
  historyApiFallback: true,
  port: 8085,
  inline: true
}

module.exports = config
