const CACHE_NAME = 'volran-v1';

const ASSETS = [
  './',
  './index.html',
  './main.js',
  './ranking.js',
  './songs.js',
  './style.css',
  './icon.png',
  './favicon.png',
  './bg.jpg',
  './title1.png',
  './jacket_SStar.png',
  './jacket_Tlabyrinth.png',
  './jacket_betrayal.png',
  './KIRAKIRA.mp3',
  './shining_star.mp3',
  './betrayal.mp3',
  './tokimeki_labyrinth.mp3',
  './tap.wav',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        ASSETS.map(asset => cache.add(asset).catch(() => {}))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // Only handle same-origin requests to avoid intercepting cross-origin API calls
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request);
    })
  );
});
