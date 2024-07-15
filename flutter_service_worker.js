'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f223ce77423026c7c5820c4a185867fb",
"version.json": "b6b0d5a3e0304ffea9f1ae89a8dffb1f",
"index.html": "f3c86531805e0f0287750179e2cdee75",
"/": "f3c86531805e0f0287750179e2cdee75",
"CNAME": "89eab2b7ff199837c798f4d8f2162511",
"main.dart.js": "c2b043052fd841e60a49cf9d956c763a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"loader.json": "4802a81baa0498bd960df7c0919741d6",
"manifest.json": "ff3dffd5567262163a05975502bdcd85",
"lib/Abiral%20Pokhrel%20CV.pdf": "6c29f5d15bc1caa6504b7573fe473829",
"animation.gif": "1c72ffdce994616caf1c416dc997e955",
".git/config": "6bba8c41b512ab900ccc2e901b9a58a1",
".git/objects/0c/75e2a8756cba77661e45f8a14a6f32daf0e2ad": "ebfa67ccebe70e0ba154b47f68ebbc2e",
".git/objects/0c/d8206f0588cb0a92d52ce09e76df3ae451d75d": "fddc6e8a77c409be9b9cdba6da01ab68",
".git/objects/66/dee92847c78e73004e1545e9829347cd9f4e79": "6a07ec1e1638a99d4640a5158cb713f2",
".git/objects/3e/e31dbad3eb2a5b23fade189aca380996dafeda": "9acd78c70b51d0f07b5cbfb3732dd230",
".git/objects/6f/764fb9e877580517abfaeb1799661969ae3f26": "7a03a1238a3988bddf65fe87cbeb447a",
".git/objects/58/ceb3aab6df4e159260c5c4d175560f5f58a8c2": "afe6afa360339f8e2e9f88fffb04a6a6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/20b500c0821dbe38dca3543b3f95847ea096e0": "3a56dbea93429f8c8215c14cca409b20",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/402ec3ed10e91fc52c16ca1e69201bf65c6fc6": "b166d3ae949db31122c232ed737af5bf",
".git/objects/33/476c239ff26c481b716376ba3a1c1556adf7be": "7a6c3231a345f956ef77bc77b586c75d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/b32c929ab8f59f53a7c3b425c99ad266e16020": "f365e2c171629f6e4daa7106f4395c0c",
".git/objects/ab/4fbb0b3223099f72fea68a39f5f7cf65cc487f": "75d992a37b5e9f1cd823e0c4b8a9f590",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4fdf8cd00d8ab124d4a4be7d6af3f58cb43126": "5fd312681a9979d24b1ef34b6ca16594",
".git/objects/e3/127728e3dd915836d542e762dcf0fc78c2f1af": "a7e10a62f038cc4e923309b5aaa1983b",
".git/objects/c8/9162aa2c587d2fca5ffb9c4aa0a1ba2a70ff63": "fd9d75432f33800e97c4a946dd64afbf",
".git/objects/fb/a03e68a71fe9d93892e56b13c971b4c37e8875": "4e037280ad6f4d2c39065374157e8cba",
".git/objects/ed/b9ceebff353625c13d99b2608ddae12cbede0b": "ca9ae2a90ef1c23ec882b720043a1e2d",
".git/objects/4e/95cf6b91ba8bb2490a4f083c5a96705d08a4fb": "7cf89cb25a5eaf03db1a4c99f355bc0a",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/3e1aeb49cef62904ec62b3faf5ef4c640499dc": "e05d4070902ea342e71fe13431456b10",
".git/objects/42/7717533e8e339701b500f0448ac374c6ee79ea": "f90f64c24e46f8d7b61b8ec798830eb7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/3f9f812493f97d44d59175912c07c1048c55bd": "a9c7f90906ff40c72826e51e7b0f2b46",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9d068029df011e403643791babed9f3f296969": "f136396bc4f21fdff33bb3024441a302",
".git/objects/00/409c34c22899e8c99dbeb6398c882546fa9d54": "2959661a039ef6a5174ecba273ad2550",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/4af9370f783bc0ac176324ae8ac9b05db21496": "dd1b9648cfd47be39553cf1f9851a6f0",
".git/objects/53/c6f865da3cbe11122f9cc4944ec25a06c6555a": "efa4dcb61fed673250269c7783ce1d50",
".git/objects/3f/321c49babb629de8f3e52830af52ef0e710c55": "0077738c316e0f8e777b15be2c27fdc6",
".git/objects/5e/384d7b6774c483553d54bad96c7e0ce27a25e3": "7a0a24ebc13f2e0a4a5cdbc73f9001e6",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/d9b1c65d2108db38cb048fd87d1f3328327014": "c2daca141697a5dbfe235d129a62a272",
".git/objects/63/718b51100f9f2ddeaba9810e7f158e786a5729": "7048272e0b4acb51ffe03df471f63c1e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/03a008899418d0d64ae35c6cb91ace37ae9402": "665446a8f61686127938a908097e0602",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/60ca189158ef4ec58bbb3f7554028fcb505629": "928a03ffedd26c355f104e84025ca093",
".git/objects/a7/53dcbd3de153164f9e005404b31cc0d805a8e1": "e6f5f8268308fec8507f6f6f7f9be11f",
".git/objects/a9/afb03341eb6aa3cb1f35f4e05c0197da020b73": "d418f0b4b4176bf5dfff1ee1b05eb5a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/29ffbbedb213f278e3790a6cb02bcc7b0f0753": "723b35cd52bf9c46c9340f28a07221ea",
".git/objects/a8/b8b3019c7967198ff5b639eee00d87669601d4": "d0313862d9b4cf5f894c568e58728824",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/efc7c417672b91d86283365b9cf3b5419fb91b": "58e160ed9ffc603fa6e3e03d7b17d982",
".git/objects/c3/26963f443fb8c655e930b8c78999e996911848": "fd31358c6a060594a68f0e6d84d20578",
".git/objects/f0/e4379c796fb7679a3ed6f32d1056c3380119dd": "daeec533e8de23cf0c632b836d68fd26",
".git/objects/ff/64966a9e4367aa12f3fbf9a5d59f66fc6dd90d": "a456c45b7b6495d49fe383613b413fa4",
".git/objects/f6/ffeb686ebf0ae8d129f33ff97d8a189fde488d": "6ec7c3e116c15f70e757b128e4652929",
".git/objects/ce/36bb6e8ae08e5a1a6cd0a136cf79d602556256": "f8b06a1c7518ed9f124e2a404ec85fb2",
".git/objects/46/0bffb5c4e4e90802c73e3d0ed9dd90e34c7866": "e4f894f7f71a1efe9ecd0395903d7ad4",
".git/objects/1b/3faeb610c1b694b0da82a492618a6d37d72cf5": "1811eb7d149b21afb639a62a6217010c",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/1e/0fa0a59da4e34a89ec54ab25d285f2ccf5fd9a": "674b1a363a9128a5c0718b980bf5c148",
".git/objects/1e/976c1f4c6a19db592feb977c1f95274939ad9e": "07b402204c59f32c09312a42e5daa0e3",
".git/objects/23/d0dfa7bb2739c04af080f8c14d6c3ee9c3c512": "4be467d02b270677b4711aa0774bfd9a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/46a96238e14860d55a6caac682efce95541fe1": "ec7f991f2f2418754adf35384d9e6076",
".git/objects/8b/34fe40284179b502c3497a63b977e909f7e587": "8e0760d1ffde7d57ab7d6195aa711321",
".git/objects/13/eae5253df0ca41437f525bea0767f273a8a130": "b409cc5029781e9ce880c7aa5d46ea54",
".git/objects/7a/97e8fa585cba05803ecfc41563e1014ef1321c": "d6c31000f73931b4c08cab4c1dd49523",
".git/objects/22/64884d8c730d953a3ab04b1915f17ba2032ce9": "bdfb63571c60955f0a94051650a127ec",
".git/HEAD": "f6567004727cfd46909faadeaa29f829",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "991a0a2e24f2d57edb10656f91eede7a",
".git/logs/refs/heads/main": "b02205332103a8711f156ef39093dca4",
".git/logs/refs/heads/Version3.0": "97efe07a025325f93e720e3cafb98e6e",
".git/logs/refs/remotes/origin/Version3.0": "fbe5c82a47cd1153f634333fd3f6cfc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d07e9f1534c9417c5aafd9e35a9dca29",
".git/refs/heads/Version3.0": "9fd605fddb607fc3bd9a16d7dc3ace7d",
".git/refs/remotes/origin/Version3.0": "9fd605fddb607fc3bd9a16d7dc3ace7d",
".git/index": "940e390d4c512b4663da0287ce2b5cf4",
".git/COMMIT_EDITMSG": "d95fcd59f227848edd936133854c9806",
"assets/AssetManifest.json": "9a5d0cf9b7b9ac5403eccfb760586580",
"assets/NOTICES": "85a8181742396971f10a4db47d786f84",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "e31ea76e48f2ee68f8bc8b162248821d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b953105e9091858ab5a131c383675cf6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f00d9d4056f8279c5b62b9204c282819",
"assets/fonts/MaterialIcons-Regular.otf": "cc3864aeb0172c38c89bdf41ee8bb591",
"assets/assets/images/eacademia.PNG": "4a1bc50420f0f15d35dfcaf3282f689f",
"assets/assets/images/khojlogo.png": "2a7b59cbe2fea5d125e8d97215d1375a",
"assets/assets/images/top.gif": "b99a2567c157aa0c0825f3cad1e1571d",
"assets/assets/images/Khojnetlogo.png": "fae439b24321baaa2ed0399bcb1cde4f",
"assets/assets/images/BlueDots.gif": "f821012317f50869ae0d8554779d6801",
"assets/assets/images/attendanceTracker.png": "e28bcfbeb240fc1ff9e72d645235a1c6",
"assets/assets/images/banner.json": "ac26449753397c1aab4c6a662364dfec",
"assets/assets/images/khojnep.png": "8b86dcda83a2631848e5054b8a219755",
"assets/assets/images/ToDo.jpg": "77ac3c86b76b509a7cf21229f8a2dd89",
"assets/assets/images/Khojnet.PNG": "b01ad5c510ab1ff8099ab51c720e8981",
"assets/assets/images/e-academia.png": "5910c4e555e3f5291d5568132d2ba272",
"assets/assets/images/ePauna.png": "a538c6e81048c2beb627dce39895c919",
"assets/assets/images/toDoApp.png": "1822762c0a0feac9aba75f53f6558d17",
"assets/assets/images/logo2.jpg": "8c6e9b2643102330230e0cb3ead963c5",
"assets/assets/images/mountain.jpg": "1a7d955d40b72baba8798bdc926f895c",
"assets/assets/images/capture.PNG": "16ce1e77185f072f94449c640224042b",
"assets/assets/images/animation.gif": "1c72ffdce994616caf1c416dc997e955",
"assets/assets/images/GreenDots.gif": "8e8ef9eb4bf83c38d15b14afbdefe722",
"assets/assets/images/GCESAttendance.PNG": "01fff48c16ab266ebf1a0e129b359b7c",
"assets/assets/images/attachment3.gif": "98b4d335e1de461103ea5c193b228547",
"assets/assets/images/topsection.gif": "9b663607b2aeab9ba49fd823c8471c15",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
