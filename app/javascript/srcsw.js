importScripts('http://storage.googleapis.com/workbox-cdn/releases/5.0.0-alpha.0/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  '/robots.txt',
]);
