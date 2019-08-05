const {environment} = require('@rails/webpacker')
const typescript = require('./loaders/typescript')

environment.loaders.prepend('typescript', typescript)

const {InjectManifest} = require('workbox-webpack-plugin')

environment.plugins.prepend('workbox',
  new InjectManifest({
    swSrc: './app/javascript/srcsw.js',
    swDest: '../sw.js'
  })
);

module.exports = environment