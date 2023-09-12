'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6ce322f62d42fd2625c6c509692cbe8c",
".git/config": "5391ae5e0107b0ff69e058ff28bf9905",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "157624e1cd47d5843d1643e8f8816c85",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "abb45266caccf7da6182f63f3a311c51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e55bac65edcf74a94f215cbe8c6b2893",
".git/logs/refs/heads/main": "450fac27d3bb41d0abe1615aa95fc6e2",
".git/logs/refs/remotes/origin/main": "fa896c704c9a00ec79ee7975fb014e5c",
".git/objects/00/0f4fb35f05aa25aa302ff740455fd263a28850": "ac9dc7df03f5650b449ff75f68b0d7a6",
".git/objects/02/c32bf47ce241e3e181416359af01890ac4ddc1": "fa9d6019352568ea7c01a26cc2555be3",
".git/objects/02/d7a34465d543d5529378df76ada9ecb80901cd": "7fb8e938702d07e08d155020e8cd93d7",
".git/objects/07/2931073d9992dd6768be12d16c3f417263e401": "09ff201820d8aa5611edd711c353c933",
".git/objects/09/03c266edb419e2289777507c027bd8252b82c9": "bf4ebd6a13b700b9e90e364e0c70a180",
".git/objects/12/e7f6db220e054678625cc511d41b210628dcd3": "17121a77c70d17edaad243bc7a13ef8d",
".git/objects/1b/4901564ddc1760b17f113a118e46209c8acf76": "1e4c2c2f811895c36b9d79f2bafadbf5",
".git/objects/20/27650617a794d4b10deb16d21f6d2af691ab0c": "159d73b386b84bd474f28486b76c2b42",
".git/objects/2b/ffc14ed7345d4c938f2f5ac91dec21f655e416": "d33bba9017f3da50f0bc5ec0a22faff5",
".git/objects/2c/6d51538afe4644311ae1cfaf57afe550163339": "2a7365a564ee1d51ff77461cb50d7c4e",
".git/objects/2d/e67a6520a5dad13392a5c318430652e1149bc5": "b12767c3f146784d9f5ccac8a0a00080",
".git/objects/32/b1c60eeca4f4d22d668491d7bc90fed4598066": "1ef8825b66d73340e11d6fb58d33bfd2",
".git/objects/33/a36855c8c38e890b91ed7ab751d26c8fdcaabc": "5d53a57b4a16f5966e60643eb09d4e28",
".git/objects/34/fdb2a76bbe8562c031e4c152441958fbf76a4c": "65109d33192008a9c890dc2f874d9275",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/ca6afe48c68f4236d72c68b665a1354b4d6360": "7164341683c53268a15d248f19c66919",
".git/objects/3b/8270665240608bacd787f7179b28b809007d10": "a3bf994b920d7eac235adccaa32f0da1",
".git/objects/3d/9de4937889fce27fc905c76eacde37da36496c": "659193c56882cec650a524a59b5dab1d",
".git/objects/3d/bdc80d018d7e8f7d5c5dc9590031bb0bb7959f": "aa6f8d667de4cf1248be10959c93575c",
".git/objects/3d/c86bec34b0631f57ab783a054b1392c9c70f92": "c409c3f53f29528a4e44b060cc49bbde",
".git/objects/40/190c4b898d9279769dbc140b251df338a6941e": "455df50cc44022bc2aca8c8ba338976f",
".git/objects/42/b442d840ccbe8c20b2be47b2f26852da4a9553": "8c5bb26aa20ea6fc221e2366c8f1c025",
".git/objects/44/d6eb6cdc14f0f44175f18a0c568d19078fd232": "65779e1be644f7c3dcf5f9c4477f317a",
".git/objects/47/7da9d348ef10f5feeb400d69f0d70d4ca9af22": "a09587230c7ff799c3db21dd98bead60",
".git/objects/48/aa42a2de7421f957dff0b4246bd08b1ba1a53f": "9bf456e7f6caf67467160dd05a299e28",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/bebdba22936342632116294ff1dfb02d2a59c0": "78b2d1b6e564edf1e4b5c9f24a0817ce",
".git/objects/5e/6d3e9da17bb15f84ee2ead9d999c8520f55aed": "07411655efd2beddc5ad8345d87443e0",
".git/objects/67/7860ed3d22741bfa9ea1af587f11c367ac572e": "6fe1a9efbb28d1a8cd25a0299020fba3",
".git/objects/69/5d619b5fc9f8e3a623851bed4bc38b1db685ce": "8d511da82219a222fec28d9e206f0081",
".git/objects/6b/59e304227bdcd41efde16dfa041fa6dd8f0af0": "5c84666a0e7c2b7a0c4b2f15f53a019c",
".git/objects/6b/ae12714497615ac0b7a599028020926831b966": "7efc1fc0ddc7c2b96a5f77c8e197e5a0",
".git/objects/6e/e98fb78e0f30528b2dc67b2021c41b8f182b03": "9913d87ca08321c5705289cd8bd5cd83",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/71/370e4ef73e1db2537398165c24692b1512e907": "f86ee3ff75906c27e6f80538e2e53769",
".git/objects/71/f17b2c4a60ca9790ad5957e610316de5e07576": "b220b88f95716e4efe4598a36c9ca3ec",
".git/objects/75/1387323ad28172b123772f46595d683d177e22": "5544ce6f29ced136db61cece3bbe1e60",
".git/objects/77/23d9761d33c9865d397aac1ea293755c5c3994": "ebb343c10010ca487c6f22e644631ee3",
".git/objects/79/15427f75ef5d1c1c535440b1f6bb339e3b3791": "4802bb0f96716ac798540215327feb56",
".git/objects/7a/474dfd38dae7a41fad793e3ea8db5fba783f21": "c59d845ead728bbf914648f6f1592d2a",
".git/objects/83/db077a10fd226862be5ca012522ed098a34f0b": "81d6b5769eb4149fc44cb5fcbf23a687",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6b80db284208b1ed8d752b947c0a4cf5b362da": "9a428110c0173b82416cdc99f05a2686",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/26ae9fe924a6f53a8b4de2c1a32ffff0423968": "9be0a1623875e773160d3031f72507be",
".git/objects/92/b9d2903cd68eb79d672fc7e3017cebefb8f394": "909822f549dce8bf28e97c4ed9249c97",
".git/objects/92/bf4ef17d2bf9b0a8c1765843d4b88b5a9a77c5": "e963733f0f0bc94050e64abc639c2f42",
".git/objects/95/8d470a2994ce14501ff082b0a6e51b028bc4a3": "cfbfa2c5548edd68ecb60310b8216f02",
".git/objects/99/1ebc44ea9f2cfa3a80e3a0dfc6c0d33c8ae3d1": "16e61eab72c5fa818a1fe98cfb9bcaae",
".git/objects/9a/feaa63d2c661d598352262a5267ec674cb4052": "1d5b81dd85ab722338ce37df95f2c297",
".git/objects/9b/a8db2628248885f94b61eb1e68a672b0895c25": "4365efed290b1ae38d7d5767517b0f31",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/17068567047609ecb003c7c89cd46952029d69": "59527e0d7f9023912ce216c38d26e8c3",
".git/objects/a1/d86d3eb7bddfb9973ef032b73cde6094b72a6f": "04551e9a250c16ffd19b0d4d6ea26782",
".git/objects/a2/f9151d795f1a4fbb33ce046bc63a2733d8e320": "5eb2567b1a0ccce6b74174e9c4e6778d",
".git/objects/a3/d194cd15827d40c0462466a4277e7918be8f87": "e86efd1c792feef475cb0676088b83ea",
".git/objects/a4/4565866d76cbfa1e85399cabe8fed506b59ff0": "eb6942b5373b18de685e8ff196678589",
".git/objects/a5/2c569066aeddf8b0a9af4cd3b1a8de14320bf1": "4eba011a82ea49a3001817ac83bba3ea",
".git/objects/ac/1fc925a30ca41f34190987a7e6a9a71f9a66ce": "3921fdd4135c101f2365101cc941af4d",
".git/objects/ac/c1353696c6af71f56e03d179fa3d0198ea6f00": "7beebe33d1790e9f67defdf667c4690b",
".git/objects/b1/d332dd0e85a92b4bdff20b33f9a76f9f21f6d5": "afdddd5f712df98f00e16be37cc14cee",
".git/objects/b6/6d8e5656bdb60e8652786c61121019db1eac08": "1b4fdd279b6166b8cb18995348a3d3e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3779ec5144d57d973f3658f33004096bb418f7": "3ff6293a2bf228aec24ce9e9f2740dd7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/46d365e99336b7bb0f6999a8fcab0ff891eb9c": "91a1d6f286458f15b15d48fc3c7d4b26",
".git/objects/ba/ab77f6a064b7d543f1bb1adb42d3fea059dfe4": "90db534b686c9e87bb7df76106f172c4",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/dd28bb73013a3bd82b49708f05ae38f4a1cfce": "4a3032deb6529e2650361194361b75aa",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cf/f5703284d63d555374b0c4e2fceed4c37da86a": "ac5219f381e5f1a024f74d4778aa2db6",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/99e4be4d7d73931fe67ea4594467a3eb726326": "560bb988f57374bb98ecbeeda9a3416e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/803e9e3de0f4c155ebd6ced0dd2914f4459693": "db25dc1ab50fb8b2ca7caff1cf88ca37",
".git/objects/d9/dd07e45e0b5057be07dafeccf853dc249ea2a0": "272879551b4541cfa82da286182a2b6a",
".git/objects/dc/40dcdcdc89e6cd34214751eb6d3af94a9ce5ca": "2529a97763d672b9fd98f49f851ff6e6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/998a437648a29e30358e1e752bcc9eb70e62c6": "645c4f892d1c26678e74c1b2ea85a079",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/40d3ad5747591841d755e2485dfc5690e5238d": "0353d02a8e5b27f0485c9b409b3dcc02",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/e731f42c8047fe4b54fb34a62be71ac375ee66": "eb08f97da08d2347e2f662013ffb75eb",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/ff/09e028a422574d4e400ad7c0ab193f89d9d15a": "fc8616263031cd72d3de2c676b3b7c64",
".git/ORIG_HEAD": "c81cc5f86a8067120e21cc678cce751c",
".git/refs/heads/main": "8af7b07e96ce21cb6d2ad11f1bffad96",
".git/refs/remotes/origin/main": "8af7b07e96ce21cb6d2ad11f1bffad96",
".github/workflows/static.yml": "a7a7262fcf1122fe02960d8508a43517",
"assets/AssetManifest.bin": "2b96f3120fb15153dafe35c639934190",
"assets/AssetManifest.json": "018c7924c9d95d459cdbf5202b95906f",
"assets/assets/cocuk.jpg": "edbbb459ba0c654e85bcdbfb95419616",
"assets/assets/cocuk2.jpg": "a7060674e8146f05a2f83e7e203e32f0",
"https://raw.githubusercontent.com/rag0nn/rag0nn.github.io/master/assets/logo.png": "12aca3d4683c0bac9bbfd297578ee948",
"assets/assets/office1.jpg": "8bc7a325bd55c69750756287e06bc851",
"assets/assets/office2.jpg": "c2166aba1bcea24cc6ca36472cb3e76e",
"assets/assets/office3.jpg": "508815b32c64ca9ac158025623368d3f",
"assets/assets/office4.jpg": "f0fb552600cf6c4e3811ed2131992e50",
"assets/assets/office5.jpg": "1f32ccf8b935a84d0b42185a776ca7cc",
"assets/assets/profil.jpg": "fb8c1a04dffd5a497b443302b1122e87",
"assets/FontManifest.json": "5618ab0a4e9a382cf3a59b9885cf1034",
"assets/fonts/BarlowCondensed-Black.ttf": "d89c21e67922f9b92bb8e8a5508962dc",
"assets/fonts/BarlowCondensed-BLackItalic.ttf": "eefd9ed0787565bb509aa2267e2b3e64",
"assets/fonts/BarlowCondensed-ExtraLight.ttf": "7d6dd53635f7b8018a98c8d78b692d93",
"assets/fonts/BarlowCondensed-Light.ttf": "c7ceaaeecca851109e59923c44c4b7bf",
"assets/fonts/BarlowCondensed-Regular.ttf": "53a17088024b346c54ca3e5bf8cc15ee",
"assets/fonts/BarlowCondensed-Semibold.ttf": "f4bfd4132df2d6be97ceabadf3853505",
"assets/fonts/BarlowCondensed-Thin.ttf": "207ddef11a4e07ceca13f0abd00a85b1",
"assets/fonts/BarlowCondensed-ThinItalic.ttf": "b66a2800f9f1bb7b84256c8c4c441a67",
"assets/fonts/MaterialIcons-Regular.otf": "ad0e63118da56d1c3b44b9afbd352da4",
"assets/NOTICES": "3945be0d1bf8c16f0d67872759aa8bbb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "12aca3d4683c0bac9bbfd297578ee948",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fa5ae9b1c262a4c69e27c91802d1263",
"/": "5fa5ae9b1c262a4c69e27c91802d1263",
"main.dart.js": "321f52ada2a6f0e45e11517f3b86803c",
"manifest.json": "2c8379c65d9ecb632927c6fc595ced9d",
"README.md": "b6e192e0f85abb147cb1d8fa75463b24",
"version.json": "f17f10678b62196c38d1fc8b582e90d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
