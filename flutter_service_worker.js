'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0c856696a077a6b0eac38220db8fc99e",
".git/config": "55734ba6b0d5ef7fb2ee6afc197df456",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "a9dfacdfd7d98193ddba08b11a4843c9",
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
".git/index": "95e128d958f3fde1d60b5e027bd07a16",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa1e729347b9ef43030879fd81bd2274",
".git/logs/refs/heads/master": "0f636574ac1b0be237969819989725a0",
".git/logs/refs/heads/Version1.0": "1247697d3658937423c50ad9176db7ee",
".git/logs/refs/remotes/origin/Version1.0": "5bb9d5283be1f85e381323025986062a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/433e153e9e35059e715e85cb294415d1d9512b": "15c16099f69b1a16520c42b4273e11ff",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/d0dfa7bb2739c04af080f8c14d6c3ee9c3c512": "4be467d02b270677b4711aa0774bfd9a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/42010294e31bcfde3131baa2bf01658303fe0d": "368aaac353e28093c9dd0ef57427eb9e",
".git/objects/26/091e6ed31ed1ea1adfc78321686844471be371": "d758279f6d906706760aa45ecefbfe81",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/bb58244035777f1894c6aacfa0a2359bbd5eca": "df14e70bada7f8a32dfe373f9c1177dd",
".git/objects/36/760a9f52b273fa567045d04b022c787210da71": "36ceabca2f1133abf4fc38526b78d817",
".git/objects/3f/321c49babb629de8f3e52830af52ef0e710c55": "0077738c316e0f8e777b15be2c27fdc6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/7717533e8e339701b500f0448ac374c6ee79ea": "f90f64c24e46f8d7b61b8ec798830eb7",
".git/objects/44/08f5d80d22fe0aec0b9e7133f1bb8fa8b6ba5e": "ac4c72c955714373d6728ba6856e20bc",
".git/objects/46/0bffb5c4e4e90802c73e3d0ed9dd90e34c7866": "e4f894f7f71a1efe9ecd0395903d7ad4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/4c/5b1362864b043823fd763be9993abb546b7e24": "d58be562437ae41c301af641379a5eb2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/95cf6b91ba8bb2490a4f083c5a96705d08a4fb": "7cf89cb25a5eaf03db1a4c99f355bc0a",
".git/objects/51/89366e3196a996f420bab864c8cc85a3a3d6c5": "b04b6a33089e9952c97c71676611920c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/20b500c0821dbe38dca3543b3f95847ea096e0": "3a56dbea93429f8c8215c14cca409b20",
".git/objects/58/90019d5d1f8940833b8586ebf27171c4b446c6": "d507bb7e41a2f6fc82be6e131aac4f68",
".git/objects/58/f96bc29a04750a40ebadf0f348159b5daa612b": "cca0a52c2070bc56dc1ad955dfb47bc9",
".git/objects/5a/bded1af6ac47cd3db76d691b675672b824c3f6": "a2e294a5db1e51702e2f3f18a33bac7e",
".git/objects/5e/384d7b6774c483553d54bad96c7e0ce27a25e3": "7a0a24ebc13f2e0a4a5cdbc73f9001e6",
".git/objects/5f/402ec3ed10e91fc52c16ca1e69201bf65c6fc6": "b166d3ae949db31122c232ed737af5bf",
".git/objects/63/718b51100f9f2ddeaba9810e7f158e786a5729": "7048272e0b4acb51ffe03df471f63c1e",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/068afd011589a282cffa62e135c455b4bf6d16": "f541f584ce73896f7c620afcfa1b6dde",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/2a1ee04b531830d8e52970e038f0d45c27ccc9": "b8d182b2380a4750f3c26c1441946347",
".git/objects/86/aac028e3237bc2a58e75e62a11ea7357202e0b": "aae98a00e683505cf8766be3a708e30b",
".git/objects/88/9d068029df011e403643791babed9f3f296969": "f136396bc4f21fdff33bb3024441a302",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/afb03341eb6aa3cb1f35f4e05c0197da020b73": "d418f0b4b4176bf5dfff1ee1b05eb5a7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/d1c7aa54c357215bb16036f191c858f1234163": "3a4e02a5ab8cdd77852d77f5ce4df2f9",
".git/objects/ad/fc99fff77115ba24466418eb9f036a15662f1d": "04ef6952b5f71cdddec6640df2f49dbf",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b2/df319b4fbbe2c60846b67ee77581ffa058c692": "51d7ec1c0de6ea2a919957106dce8c25",
".git/objects/b5/f969d5766a88072dfe71a41162b2db3eb8174c": "348a4885410f6bdc9fc59cde5a0597df",
".git/objects/b7/29ffbbedb213f278e3790a6cb02bcc7b0f0753": "723b35cd52bf9c46c9340f28a07221ea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/8629a6bf7b4dce8146543526952586bb0affd6": "8beb18ff194f304e0112b70766f4668f",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c8/9162aa2c587d2fca5ffb9c4aa0a1ba2a70ff63": "fd9d75432f33800e97c4a946dd64afbf",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/660fde004c5139ddab72b5e76f9c1b312ff6c0": "8872852097dd494252eb374822b47171",
".git/objects/d0/8b80cd38bebb8a8e1ed5f89770f618aa5666ce": "d5658a5bf59a93b9dbf1daec74aac1e6",
".git/objects/d4/03a008899418d0d64ae35c6cb91ace37ae9402": "665446a8f61686127938a908097e0602",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/fddebccda3262ed56d380d5a5297665e1bfedd": "df70081a435cfeee1785ad70b86accdb",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/ff/64966a9e4367aa12f3fbf9a5d59f66fc6dd90d": "a456c45b7b6495d49fe383613b413fa4",
".git/refs/heads/master": "53ed037c21f43d97d937a88d960981b3",
".git/refs/heads/Version1.0": "2fc31754107d5e66e17831b3ebb561b3",
".git/refs/remotes/origin/Version1.0": "2fc31754107d5e66e17831b3ebb561b3",
"assets/AssetManifest.json": "d0ff9fe5fa026d18f66a8c02d14b4cad",
"assets/assets/images/attachment3.gif": "98b4d335e1de461103ea5c193b228547",
"assets/assets/images/BlueDots.gif": "f821012317f50869ae0d8554779d6801",
"assets/assets/images/capture.PNG": "16ce1e77185f072f94449c640224042b",
"assets/assets/images/eacademia.PNG": "4a1bc50420f0f15d35dfcaf3282f689f",
"assets/assets/images/GCESAttendance.PNG": "01fff48c16ab266ebf1a0e129b359b7c",
"assets/assets/images/GreenDots.gif": "8e8ef9eb4bf83c38d15b14afbdefe722",
"assets/assets/images/khojlogo.png": "2a7b59cbe2fea5d125e8d97215d1375a",
"assets/assets/images/Khojnet.PNG": "b01ad5c510ab1ff8099ab51c720e8981",
"assets/assets/images/Khojnetlogo.png": "fae439b24321baaa2ed0399bcb1cde4f",
"assets/assets/images/logo2.jpg": "8c6e9b2643102330230e0cb3ead963c5",
"assets/assets/images/ToDo.jpg": "77ac3c86b76b509a7cf21229f8a2dd89",
"assets/assets/images/top.gif": "b99a2567c157aa0c0825f3cad1e1571d",
"assets/assets/images/topsection.gif": "9b663607b2aeab9ba49fd823c8471c15",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9175d805f6cb8b4d45dc6400db48c7e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4cdbd5341d3a354c7a2cc83f088cfa72",
"/": "4cdbd5341d3a354c7a2cc83f088cfa72",
"main.dart.js": "824d26ea649d54bc746ded57d353de1a",
"manifest.json": "82d57c6f6fcc602e59b5a44bf6e0b834",
"version.json": "b6b0d5a3e0304ffea9f1ae89a8dffb1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
