import 'regenerator-runtime';
import CacheHelper from './cache-helper';

const assetsToCache = [
    './',
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png',
    './index.html',
    './favicon.ico',
    './app.bundle.js',
    './manifest.json',
    './sw.bundle.js',
];

window.self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

window.self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
});

window.self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});
