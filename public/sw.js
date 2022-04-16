!function(){'use strict';try{self['workbox:sw:4.3.1']&&_()}catch(t){}const t='https://storage.googleapis.com/workbox-cdn/releases/4.3.1',e={backgroundSync:'background-sync',broadcastUpdate:'broadcast-update',cacheableResponse:'cacheable-response',core:'core',expiration:'expiration',googleAnalytics:'offline-ga',navigationPreload:'navigation-preload',precaching:'precaching',rangeRequests:'range-requests',routing:'routing',strategies:'strategies',streams:'streams'};self.workbox=new class{constructor(){return this.v={},this.t={debug:'localhost'===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.s=this.t.debug?'dev':'prod',this.o=!1,new Proxy(this,{get(t,s){if(t[s])return t[s];const o=e[s];return o&&t.loadModule(`workbox-${o}`),t[s]}})}setConfig(t={}){if(this.o)throw new Error('Config must be set before accessing workbox.* modules');Object.assign(this.t,t),this.s=this.t.debug?'dev':'prod'}loadModule(t){const e=this.i(t);try{importScripts(e),this.o=!0}catch(s){throw console.error(`Unable to import module '${t}' from '${e}'.`),s}}i(e){if(this.t.modulePathCb)return this.t.modulePathCb(e,this.t.debug);let s=[t];const o=`${e}.${this.s}.js`,r=this.t.modulePathPrefix;return r&&''===(s=r.split('/'))[s.length-1]&&s.splice(s.length-1,1),s.push(o),s.join('/')}}}();
//# sourceMappingURL=workbox-sw.js.map

// import "./models" 
const models = [
	'./models/face_expression_model-shard1', './models/face_expression_model-weights_manifest.json',
	'./models/face_landmark_68_model-shard1', './models/face_landmark_68_model-weights_manifest.json',
	'./models/face_landmark_68_tiny_model-shard1', './models/face_landmark_68_tiny_model-weights_manifest.json',
	'./models/face_recognition_model-shard1', './models/face_recognition_model-shard2',
	'./models/face_recognition_model-weights_manifest.json', './models/mtcnn_model-shard1',
	'./models/mtcnn_model-weights_manifest.json', './models/ssd_mobilenetv1_model-shard1',
	'./models/ssd_mobilenetv1_model-shard2', './models/ssd_mobilenetv1_model-weights_manifest.json',
	'./models/tiny_face_detector_model-shard1', './models/tiny_face_detector_model-weights_manifest.json',

]

const staticCacheName = 'site-static-v5';
const dynamicCacheName = 'site-dynamic-v5';
const size = 50

self.addEventListener('install', (evt) => {
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			cache.addAll(models)
		}).catch((err)=>{
			console.log(err)
		})
	); 
  
})
  
// cache size limit function
const limitCacheSize = (name, size) => {
	caches.open(name).then((cache) => {
		cache.keys().then((keys) => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size));
			}
		});
	});
};

workbox.core.setCacheNameDetails({prefix: 'FAS'});

// self.addEventListener('message', (event) => {
// 	if (event.data && event.data.type === 'SKIP_WAITING') {
// 		self.skipWaiting();
// 	}
// });
  
// activate event
  
self.addEventListener('activate', (event) => {
	if (caches) {
		caches.keys().then((arr) => {
			arr.forEach((key) => {
				if (key.indexOf('FAS-precache') < -1) {
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
self.addEventListener('fetch', (evt) => {
	if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
		evt.respondWith(
			caches.match(evt.request).then((cacheRes) => {
				return cacheRes || fetch(evt.request).then((fetchRes) => {
					return caches.open(dynamicCacheName).then((cache) => {
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

workbox.routing.registerRoute(
	/\.(?:png|gif|jpg|jpeg|svg|js|css)$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'all',
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
	new RegExp('https://(.*)'),
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'all',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30,
				maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
			})
		]
	})
);