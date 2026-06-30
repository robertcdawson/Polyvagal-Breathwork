/*
 * Service worker for Advanced Breathwork.
 *
 * Strategy (no build step, no vendored assets):
 *  - App shell (index.html, manifest, icons) is precached on install.
 *  - Navigations are network-first with a cached index.html fallback, so the
 *    latest app is served when online but it still opens offline.
 *  - Other GET requests (Tailwind, Tone.js, fonts, icons) are cache-first and
 *    populated on demand, so a second visit works without a network.
 *  - Non-GET and Firebase API traffic are never cached (always go to network).
 */
const CACHE = 'breathwork-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isFirebaseApi(url) {
  return /(googleapis|firestore|firebaseio|identitytoolkit)\.com$/.test(url.hostname)
    || url.hostname.endsWith('firebaseio.com');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Realtime / auth traffic must always hit the network.
  if (isFirebaseApi(url)) return;

  // Network-first for navigations so updates are picked up while online.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Cache-first for everything else (static assets + CDN libraries).
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return res;
      });
    })
  );
});
