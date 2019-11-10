if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );
 
  if (workbox) {
    //console.log('Workbox loaded');

    workbox.setConfig({debug: false});

    workbox.precaching.precacheAndRoute([]);
 
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

    /*I realize these image formats aren't all needed for this project */
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|webp|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'weather-images'
      })
    );

    workbox.routing.registerRoute(
      /\.(?:js|css|html)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'weather-files'
      })
    );
 
} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}