// FIXME this file could use some cleaning up...

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var validate = require('webpack-validator')

var envVariables = Object.assign({}, {
  'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'BUILD_ENV': JSON.stringify(process.env.BUILD_ENV)
})

module.exports = validate({
  entry: ['babel-polyfill', 'whatwg-fetch', './app/Root'],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-root-import']
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.json$/,
        loaders: ["json-loader"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({'process.env': envVariables})
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.css'],
    root: [path.join(__dirname, './app')]
  }
})
