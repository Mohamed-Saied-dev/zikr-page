self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("zikr-cache").then(function (cache) {
      return cache.addAll([
        "/zikr-page/",
        "/zikr-page/index.html",
        "/zikr-page/main.css",
        "/zikr-page/script.js",
        "/zikr-page/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
