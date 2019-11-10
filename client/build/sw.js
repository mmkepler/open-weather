if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );
 
  if (workbox) {
    //console.log('Workbox loaded');

    workbox.setConfig({debug: false});

    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "2c28de63a191bd4326ae53a33f4edc2c"
  },
  {
    "url": "planetTitle.png",
    "revision": "ddd5ab6caa7969dcb7cfdf1aaa739e3e"
  },
  {
    "url": "precache-manifest.fb1e14b8ad1ad53e9358ff6501bf3a70.js",
    "revision": "fb1e14b8ad1ad53e9358ff6501bf3a70"
  },
  {
    "url": "service-worker.js",
    "revision": "929dd7fa73f44354ba944e190214a9c3"
  },
  {
    "url": "static/css/2.284129a3.chunk.css",
    "revision": "b62bfe042cdf970447c02349daa2f6b6"
  },
  {
    "url": "static/css/main.56f324d7.chunk.css",
    "revision": "b8450c7c929231205aea7d3a686a7f63"
  },
  {
    "url": "static/js/2.16e326b1.chunk.js",
    "revision": "7ce3255393b7741aa79383a435eb04c5"
  },
  {
    "url": "static/js/main.82d97740.chunk.js",
    "revision": "44b1949b72852efa87526b49cb228a14"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  },
  {
    "url": "static/media/hohenschwangau-bg-4.d4832cbc.jpg",
    "revision": "d4832cbcb3788921f88de78faec0d9de"
  }
]);
 
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