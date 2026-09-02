const CACHE_NAME = 'turf-empire-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icon-192.png'
];

// Install the service worker and cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Serve cached content when offline or fetching files
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
