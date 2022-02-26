importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


const staticCacheName = 'site-static-v4';
const dynamicCacheName = 'site-dynamic-v4';


self.addEventListener('install', (evt) => {
    // console.log('service worker has been installed' )
  
    // console.log(evt);
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
        // console.log('caching stuff');
        cache.addAll(asset)
      }).catch((err)=>{
        console.log(err)
      })
    ); 
  
  })
  
  // cache size limit function
  const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if (keys.length > size) {
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };

  workbox.core.setCacheNameDetails({prefix: "KAA"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
  
  // activate event
  
  self.addEventListener('activate', (event) => {
    if (caches) {
      caches.keys().then((arr) => {
        arr.forEach((key) => {
          if (key.indexOf('KAA-precache') < -1) {
            caches.delete(key).then(() => console.log(`%c Cleared ${key}`, 'background: #333; color: #ff0000'))
          } else {
            caches.open(key).then((cache) => {
              cache.match('version').then((res) => {
                if (!res) {
                  cache.put('version', new Response(staticCacheName, { status: 200, statusText: staticCacheName }))
                } else if (res.statusText !== staticCacheName) {
                  caches.delete(key).then(() => console.log(`%c Cleared Cache ${staticCacheName}`, 'background: #333; color: #ff0000'))
                } else console.log(`%c Great you have the latest version ${staticCacheName}`, 'background: #333; color: #00ff00')
              })
            })
          }
        })
      })
    }
  })
  
  
  // fetch event
  self.addEventListener('fetch', evt => {
    if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
      evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              // check cached items size
              limitCacheSize(dynamicCacheName, 100000);
              return fetchRes;
            })
          });
        }).catch(() => {
          if (
            evt.request.url.indexOf('.html') > -1 ||
            evt.request.url.indexOf('.js') > -1 ||
            evt.request.url.indexOf('.cs') > -1
          
          
          ) {
            return caches.match('./fallback.html');
          }
        })
      );
    }
  });
  
//Background Sync
const backgroundSync = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

// console.log(workbox.strategies)
// console.log(workbox.routing)
// Cache images:
workbox.routing.registerRoute(
 /\.(?:png|gif|jpg|jpeg|svg|js|css)$/,
 new workbox.strategies.StaleWhileRevalidate({
   cacheName: "all",
   plugins: [
    backgroundSync,
     new workbox.expiration.Plugin({
       maxEntries: 60,
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);

// Cache Google fonts:
workbox.routing.registerRoute(
 new RegExp("https://(.*)"),
 new workbox.strategies.StaleWhileRevalidate({
   cacheName: "all",
   plugins: [
     new workbox.expiration.Plugin({
       maxEntries: 30,
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);