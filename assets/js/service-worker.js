const CACHE_NAME = 'pwa-restu-cache';
const urlsToCache = [
    '/index.html',
    '/assets/css/styles.css',
    '/assets/img/profile.png',
    '/assets/img/profilee.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
