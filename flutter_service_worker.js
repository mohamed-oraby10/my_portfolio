'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ff800ebf8a7523fe5c1434c3d9607862",
"assets/AssetManifest.bin.json": "9e0de4b48745110915ced092399c3213",
"assets/AssetManifest.json": "96a39c8ce08142ddd4aafc62f9a67a6e",
"assets/assets/cv/Mohamed_Oraby_CV.pdf": "a5e7dbf17c62cdd549102e1895ab5b64",
"assets/assets/fonts/inter/Inter_24pt-Bold.ttf": "a041f18d0d0c67b376bec0343f7c0cf0",
"assets/assets/fonts/inter/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/inter/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/inter/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/images/212832%2520(1).png": "bbf9a0a1687db31926dadd67de746849",
"assets/assets/images/Add%2520a%2520heading.png": "f6fecf226331a86875ced3abef37f59e",
"assets/assets/images/ava.svg": "e667ee31fb7f004454408edcd1a00060",
"assets/assets/images/bloc.png": "ba12f059d53bda301d7fe2295d07ba88",
"assets/assets/images/cancel.svg": "6c2ce261dfc5cfe58c1f55634209daa9",
"assets/assets/images/Cells--Streamline-Atlas.svg": "3a8e8634a76c11ef75daa2f03c7d484b",
"assets/assets/images/Coding-Apps-Website-Web-Dev-Api-Cloud--Streamline-Ultimate.svg": "7bb08d1c37f238febb42ec8918c52087",
"assets/assets/images/dark.svg": "027bfa4a972432623be05c29e0d39483",
"assets/assets/images/Dart--Streamline-Svg-Logos.svg": "81237d249602fe0308adaf4da904105c",
"assets/assets/images/Firebase--Streamline-Svg-Logos.svg": "2aca2c72ae8a81c7c53566a3962596c7",
"assets/assets/images/Flutter--Streamline-Svg-Logos.svg": "ecb9f721c26e213ead5401ff09c9330e",
"assets/assets/images/git.svg": "29373236fee63ec10cfbfffa267bef07",
"assets/assets/images/Icon%2520Button-1.svg": "e2d8f41fe716f5ef338d5decbc977777",
"assets/assets/images/Icon%2520Button.svg": "9d73bc4b1a5207b26955e03b76952712",
"assets/assets/images/Icon-1.svg": "7b1a25f673eb819692b1c6885c30037d",
"assets/assets/images/Icon-2.svg": "6f3c2d07aaefa9463a5593b2129c664b",
"assets/assets/images/Icon-3.svg": "a1f8b11f90b67350cbc84156d6d1d414",
"assets/assets/images/icon-figma.svg": "0d6e8d7f442b7a5b1b7ba1d94f453b50",
"assets/assets/images/icon-git.svg": "a12428bdd0e8010db6aa7fef06f572b1",
"assets/assets/images/Icon.svg": "201ec9f264efd138616dbca21293d230",
"assets/assets/images/list.svg": "6b2ab59ec4a7dce930698844fa89fd01",
"assets/assets/images/ommerce%2520(2).png": "b460c92da5a9e450c8f1ea85301555a7",
"assets/assets/images/profile_image.jpeg": "8bfec32ec8cce11b4f520081465421ee",
"assets/assets/images/uil_linkedin.svg": "8a318847f3fba8356fe043b892965d93",
"assets/assets/images/WhatsApp%2520Image%25202025-09-27%2520at%252002.28.03_5542a57b.jpg": "9da5963da22d6d19f77ec4980dc77ad6",
"assets/FontManifest.json": "fd974a9762d2e70647deb10ee0aaabd1",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "45408bf02417f986cd0c783aa449b32b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "be870ee622ba66e7ac293b38c6b59fc1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d9b095ed77b1428191e4db1d780d0879",
"/": "d9b095ed77b1428191e4db1d780d0879",
"main.dart.js": "cac5cac2cdac2e7330042ad091ed2a32",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
