if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );
 
  if (workbox) {
    //console.log('Workbox loaded');

    workbox.setConfig({debug: false});

     /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);
 
} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}