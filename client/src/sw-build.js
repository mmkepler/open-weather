const workboxBuild = require('workbox-build');

const buildSW = () => {
  
  return workboxBuild.injectManifest({
    swSrc: 'src/custom-sw.js', 
    swDest: 'build/sw.js', 
    globDirectory: 'build',
    globPatterns: [
      '**\/*.{js,css,html,png,jpg,eot,woff,woff2,json,eot,svg,ttf}',
    ]
  }).then(({count, size, warnings}) => {
    //console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}
buildSW();