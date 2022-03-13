'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "90a80a4d3769370166737769d3745eac",
".git/config": "55734ba6b0d5ef7fb2ee6afc197df456",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "e71700964cb3794b622a6832114c649c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "5e4ab0711cd295568e616042853c18a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e387a679a252ff948a6f4773775faf3",
".git/logs/refs/heads/master": "a446b373686829bc8d2e1c9deb56b494",
".git/logs/refs/heads/new2": "e9735ced324e94cb1e1647c3d32cb507",
".git/logs/refs/remotes/origin/new2": "99fe1f60312ce2da303d9d2462ce080a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/433e153e9e35059e715e85cb294415d1d9512b": "15c16099f69b1a16520c42b4273e11ff",
".git/objects/18/7fff61462b396fa91c2d76e65644dfb729a4b1": "8d9bcc2717e45e6821985e8c2f4506dd",
".git/objects/1d/11f650988ed9ab13117ab8a0d098e22630077b": "650fc6052c77db39bd2238ac564eff84",
".git/objects/1f/f488f6c9255498b421ead4b280a5352308fc70": "14f7fa19e183b0e33868f93a127e2f6d",
".git/objects/23/4a8d18a113783565a27570732fbbc36f7ca3cc": "279b9ec73328464080ed5df1fa7ffe39",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/bb58244035777f1894c6aacfa0a2359bbd5eca": "df14e70bada7f8a32dfe373f9c1177dd",
".git/objects/36/760a9f52b273fa567045d04b022c787210da71": "36ceabca2f1133abf4fc38526b78d817",
".git/objects/3b/9ec1ed6ed64da3b764ba9c06507512aa8abaf8": "7afbb50721ad2f4902e12e0995e7a0ee",
".git/objects/46/0bffb5c4e4e90802c73e3d0ed9dd90e34c7866": "e4f894f7f71a1efe9ecd0395903d7ad4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/5b1362864b043823fd763be9993abb546b7e24": "d58be562437ae41c301af641379a5eb2",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/95cf6b91ba8bb2490a4f083c5a96705d08a4fb": "7cf89cb25a5eaf03db1a4c99f355bc0a",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/649f255753ec293117027229a9cb096aff532d": "30da5b03e0a7be0b19503e8230b1b2b9",
".git/objects/58/20b500c0821dbe38dca3543b3f95847ea096e0": "3a56dbea93429f8c8215c14cca409b20",
".git/objects/58/90019d5d1f8940833b8586ebf27171c4b446c6": "d507bb7e41a2f6fc82be6e131aac4f68",
".git/objects/58/f96bc29a04750a40ebadf0f348159b5daa612b": "cca0a52c2070bc56dc1ad955dfb47bc9",
".git/objects/5a/bded1af6ac47cd3db76d691b675672b824c3f6": "a2e294a5db1e51702e2f3f18a33bac7e",
".git/objects/5e/c5117e577342d4a3f324d16e60b9810568c68c": "ec5d82b8661ca043132b9311086dc8b7",
".git/objects/5f/402ec3ed10e91fc52c16ca1e69201bf65c6fc6": "b166d3ae949db31122c232ed737af5bf",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/ae45a3a6b598b3e64d25c7b0256f6b59e67500": "cca2d5ee334794926c9a21907a0059e2",
".git/objects/6e/7035727ed4259d21463637b032b889fa6385ee": "e0f5fb0f6d6ce8ec67d309dcaa8b2882",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/068afd011589a282cffa62e135c455b4bf6d16": "f541f584ce73896f7c620afcfa1b6dde",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/6d8055213273263597cfe7c4902172e2d80606": "b1d13f53c8d6607905b9c6eec7bd5459",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/5b2899e4fe6bdaa8923ce3e97127f6ab2dd23b": "d71e496803e5ad6fc9834d9b96c487b6",
".git/objects/88/9d068029df011e403643791babed9f3f296969": "f136396bc4f21fdff33bb3024441a302",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/d1c7aa54c357215bb16036f191c858f1234163": "3a4e02a5ab8cdd77852d77f5ce4df2f9",
".git/objects/b2/df319b4fbbe2c60846b67ee77581ffa058c692": "51d7ec1c0de6ea2a919957106dce8c25",
".git/objects/b5/f969d5766a88072dfe71a41162b2db3eb8174c": "348a4885410f6bdc9fc59cde5a0597df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c8/9162aa2c587d2fca5ffb9c4aa0a1ba2a70ff63": "fd9d75432f33800e97c4a946dd64afbf",
".git/objects/cd/0be02c9bf88e23a828204cf9eaddc9a16ee638": "6c5d8a06ef5c9ac14d1131d31cffd851",
".git/objects/ce/660fde004c5139ddab72b5e76f9c1b312ff6c0": "8872852097dd494252eb374822b47171",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/7bc6fa922054aee9d7c941010d7b8da4fa57cd": "785d13bf8a997a62adf6cb77ae3d6692",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "47c489b018de1cdb94d1b0e7a1424830",
".git/refs/heads/new2": "47c489b018de1cdb94d1b0e7a1424830",
".git/refs/remotes/origin/new2": "47c489b018de1cdb94d1b0e7a1424830",
"assets/AssetManifest.json": "c37605243af36a8069734df0254806c5",
"assets/assets/images/attachment3.gif": "98b4d335e1de461103ea5c193b228547",
"assets/assets/images/attachment4.gif": "1fb1a94ff8eeb960817245c54c7e3d5a",
"assets/assets/images/attachment5.gif": "a34fcb0c240699296823646aa04d8727",
"assets/assets/images/capture.PNG": "16ce1e77185f072f94449c640224042b",
"assets/assets/images/GCESAttendance.PNG": "01fff48c16ab266ebf1a0e129b359b7c",
"assets/assets/images/red.jpg": "c66df33104db5e68aa7e9f2c86a74492",
"assets/assets/images/ToDo.jpg": "77ac3c86b76b509a7cf21229f8a2dd89",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "6574bed611ec843a724d269ddc776952",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1574af027e5a9f48ff34c68d71682708",
"/": "1574af027e5a9f48ff34c68d71682708",
"main.dart.js": "1620250a66355c5742cf73c781cf848c",
"manifest.json": "82d57c6f6fcc602e59b5a44bf6e0b834",
"version.json": "b6b0d5a3e0304ffea9f1ae89a8dffb1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
