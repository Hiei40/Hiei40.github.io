'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "038d866cc6d86bdebf9c67b1a4b09577",
"assets/AssetManifest.bin.json": "94eb1cf358aca2ae59f8c58defbcc611",
"assets/AssetManifest.json": "3a10328f9676f1ca07bfbaf8f791f3fd",
"assets/assets/font/Abhaya_Libre/AbhayaLibre-Bold.ttf": "72a974edeea4cbeae7378f35335cd2ec",
"assets/assets/font/Abhaya_Libre/AbhayaLibre-ExtraBold.ttf": "feaf25f77450f8a62b6daba3f453d1db",
"assets/assets/font/Abhaya_Libre/AbhayaLibre-Medium.ttf": "397ce5f3ce408c0c2ce999b48cbc4ea8",
"assets/assets/font/Abhaya_Libre/AbhayaLibre-Regular.ttf": "a0a7b073c52e4a89a9afe42c78772ce9",
"assets/assets/font/Abhaya_Libre/AbhayaLibre-SemiBold.ttf": "87faade5dc32db83512f6507508f3800",
"assets/assets/font/Cairo-Black.ttf": "d5cfdef0ee5e1b9765295e3b58f43233",
"assets/assets/font/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/font/Cairo-ExtraBold.ttf": "92ae313db90f497a9b8fec09433a70de",
"assets/assets/font/Cairo-ExtraLight.ttf": "a699568a2cf9e5794c5eccf7909b39c5",
"assets/assets/font/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/font/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/font/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/font/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/font/lexend/Lexend-Black.ttf": "82186656fa6ebf260227c0bb491622a8",
"assets/assets/font/lexend/Lexend-Bold.ttf": "718f2aad8612745b0ca6eb1d48b37d96",
"assets/assets/font/lexend/Lexend-ExtraBold.ttf": "76711dcbeffebb272a1bd9e04b11f93a",
"assets/assets/font/lexend/Lexend-ExtraLight.ttf": "c36b3aef5d8dfdd7abf9c463ef51b383",
"assets/assets/font/lexend/Lexend-Light.ttf": "cdb31ca1dcb97666830870ed30a842c9",
"assets/assets/font/lexend/Lexend-Medium.ttf": "15c1a10bfb6fbe6caa9d5592bd890054",
"assets/assets/font/lexend/Lexend-Regular.ttf": "0d86bcd13a1526d605f31db8d067a37e",
"assets/assets/font/lexend/Lexend-SemiBold.ttf": "42fd5432a875a34e7cf4e685bdf3e3c9",
"assets/assets/font/lexend/Lexend-Thin.ttf": "0ca64c3838fda1844ca9dfbc003a9fee",
"assets/assets/font/lexend/Lexend-VariableFont_wght.ttf": "92d3f85e37b34f85f9cbb7ed3283fe69",
"assets/assets/image/account_circle.png": "7f9f03fda053b821dcb2e0bc28d1ff7e",
"assets/assets/image/alert-02.png": "fbd69523d45bfe487c7b9f9a3c57fafc",
"assets/assets/image/apps.png": "b9f7bd39c3f85c5d89664b75d36b376d",
"assets/assets/image/briefcas.png": "4a782cda8f896e482024904fc23976fc",
"assets/assets/image/Currency.png": "a9bf8a32076d6fd748c9c972629523ee",
"assets/assets/image/folder.png": "a08dd6c9b5ae053f06c2ae408caad130",
"assets/assets/image/icon.png": "de66704c0441d1b2cc79bea9522453f5",
"assets/assets/image/lahjcenter-removebg-preview.png": "649eadbd3e33ed834fe2543d9a64bf0e",
"assets/assets/image/lahjcenter.png": "ffba9eae237ffcb045533b77b7250ab3",
"assets/assets/image/shoppingbag.png": "b9c4c337abe36f7fefa107ab16749367",
"assets/FontManifest.json": "18f604576711b266a2627aaed0c17b03",
"assets/fonts/MaterialIcons-Regular.otf": "198497ee6528771a1dd13a7ea8c619ed",
"assets/NOTICES": "c6464a94cb6844ee52fcc4734e03256f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "854336949c72850f127376a0d4d7601f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "744ec1f4f08d84136bb8d28fb5bbb7df",
"/": "744ec1f4f08d84136bb8d28fb5bbb7df",
"main.dart.js": "899bf721978894ae26cc3f8796544841",
"manifest.json": "7ed0eb7191fd75f56e1528adca7face0",
"version.json": "8575c5afd4d13e4b0598dfc8636b2dea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
