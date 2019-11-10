if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
  );
 
  if (workbox) {
    //console.log("Workbox loaded");

    workbox.setConfig({debug: false});

     /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "8e396ad72e41f1082d596686d25b49d2"
  },
  {
    "url": "index.html",
    "revision": "821de012a5101ab5e8e0d6b6eaffaf14"
  },
  {
    "url": "manifest.json",
    "revision": "36af21416ab32fdf58521a667e598ae5"
  },
  {
    "url": "planetTitle.png",
    "revision": "ddd5ab6caa7969dcb7cfdf1aaa739e3e"
  },
  {
    "url": "precache-manifest.1eced2337e94defd91cbcf3b03d7745e.js",
    "revision": "1eced2337e94defd91cbcf3b03d7745e"
  },
  {
    "url": "service-worker.js",
    "revision": "b196dc733c765d7f183743cf360bea33"
  },
  {
    "url": "static/css/2.284129a3.chunk.css",
    "revision": "b62bfe042cdf970447c02349daa2f6b6"
  },
  {
    "url": "static/css/main.3bb42c84.chunk.css",
    "revision": "622576fcc692b26ea779c55423b610b4"
  },
  {
    "url": "static/js/2.16e326b1.chunk.js",
    "revision": "7ce3255393b7741aa79383a435eb04c5"
  },
  {
    "url": "static/js/main.3423b589.chunk.js",
    "revision": "4f980e274aeeb1fe902fe6c387922caf"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  },
  {
    "url": "static/media/hohenschwangau-bg-4.c989de78.jpg",
    "revision": "c989de78b8e5de8035178c22ddd19a10"
  },
  {
    "url": "static/media/roboto-latin-100.5cb7edfc.woff",
    "revision": "5cb7edfceb233100075dc9a1e12e8da3"
  },
  {
    "url": "static/media/roboto-latin-100.7370c367.woff2",
    "revision": "7370c3679472e9560965ff48a4399d0b"
  },
  {
    "url": "static/media/roboto-latin-100italic.f8b1df51.woff2",
    "revision": "f8b1df51ba843179fa1cc9b53d58127a"
  },
  {
    "url": "static/media/roboto-latin-100italic.f9e8e590.woff",
    "revision": "f9e8e590b4e0f1ff83469bb2a55b8488"
  },
  {
    "url": "static/media/roboto-latin-300.b00849e0.woff",
    "revision": "b00849e00f4c2331cddd8ffb44a6720b"
  },
  {
    "url": "static/media/roboto-latin-300.ef7c6637.woff2",
    "revision": "ef7c6637c68f269a882e73bcb57a7f6a"
  },
  {
    "url": "static/media/roboto-latin-300italic.14286f3b.woff2",
    "revision": "14286f3ba79c6627433572dfa925202e"
  },
  {
    "url": "static/media/roboto-latin-300italic.4df32891.woff",
    "revision": "4df32891a5f2f98a363314f595482e08"
  },
  {
    "url": "static/media/roboto-latin-400.479970ff.woff2",
    "revision": "479970ffb74f2117317f9d24d9e317fe"
  },
  {
    "url": "static/media/roboto-latin-400.60fa3c06.woff",
    "revision": "60fa3c0614b8fb2f394fa29944c21540"
  },
  {
    "url": "static/media/roboto-latin-400italic.51521a2a.woff2",
    "revision": "51521a2a8da71e50d871ac6fd2187e87"
  },
  {
    "url": "static/media/roboto-latin-400italic.fe65b833.woff",
    "revision": "fe65b8335ee19dd944289f9ed3178c78"
  },
  {
    "url": "static/media/roboto-latin-500.020c97dc.woff2",
    "revision": "020c97dc8e0463259c2f9df929bb0c69"
  },
  {
    "url": "static/media/roboto-latin-500.87284894.woff",
    "revision": "87284894879f5b1c229cb49c8ff6decc"
  },
  {
    "url": "static/media/roboto-latin-500italic.288ad9c6.woff",
    "revision": "288ad9c6e8b43cf02443a1f499bdf67e"
  },
  {
    "url": "static/media/roboto-latin-500italic.db4a2a23.woff2",
    "revision": "db4a2a231f52e497c0191e8966b0ee58"
  },
  {
    "url": "static/media/roboto-latin-700.2735a3a6.woff2",
    "revision": "2735a3a69b509faf3577afd25bdf552e"
  },
  {
    "url": "static/media/roboto-latin-700.adcde98f.woff",
    "revision": "adcde98f1d584de52060ad7b16373da3"
  },
  {
    "url": "static/media/roboto-latin-700italic.81f57861.woff",
    "revision": "81f57861ed4ac74741f5671e1dff2fd9"
  },
  {
    "url": "static/media/roboto-latin-700italic.da0e7178.woff2",
    "revision": "da0e717829e033a69dec97f1e155ae42"
  },
  {
    "url": "static/media/roboto-latin-900.9b3766ef.woff2",
    "revision": "9b3766ef4a402ad3fdeef7501a456512"
  },
  {
    "url": "static/media/roboto-latin-900.bb1e4dc6.woff",
    "revision": "bb1e4dc6333675d11ada2e857e7f95d7"
  },
  {
    "url": "static/media/roboto-latin-900italic.28f91510.woff",
    "revision": "28f9151055c950874d2c6803a39b425b"
  },
  {
    "url": "static/media/roboto-latin-900italic.ebf6d164.woff2",
    "revision": "ebf6d1640ccddb99fb49f73c052c55a8"
  },
  {
    "url": "static/media/weathericons-regular-webfont.1cd48d78.woff2",
    "revision": "1cd48d78f06d33973d9d761d426e69bf"
  },
  {
    "url": "static/media/weathericons-regular-webfont.4618f0de.ttf",
    "revision": "4618f0de2a818e7ad3fe880e0b74d04a"
  },
  {
    "url": "static/media/weathericons-regular-webfont.4b658767.eot",
    "revision": "4b658767da6bd92ce2addb3ce512784d"
  },
  {
    "url": "static/media/weathericons-regular-webfont.8cac70eb.woff",
    "revision": "8cac70ebda3f23ce472110d9f21e8593"
  },
  {
    "url": "static/media/weathericons-regular-webfont.ecaf8b48.svg",
    "revision": "ecaf8b481729b18f6a8494d9f691cdae"
  }
]);
 
} else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}