const CACHE = 'exi-academy-pwa-v3';
const SHELL = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './vendor/jszip.min.js', './bundled-trainings.json', './assets/icon-192.png', './assets/icon-512.png',
  './assets/exi_academy_logo.webp', './assets/all_sports_training_hub.webp',
  './assets/section_tools.webp', './assets/category_winter.webp',
  './assets/category_summer.webp', './assets/category_other_sports.webp',
  './assets/category_hw.webp', './assets/category_other_training.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
    return res;
  }).catch(() => caches.match('./index.html'))));
});
