// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.dog {\n  position: absolute;\n  top: 52%;\n  width: 50vmin;\n  height: 40vmin;\n  z-index: 0;\n}\n.heart {\n  position: absolute;\n  width: 6%;\n  height: 7%;\n  background-color: #e64356;\n  border-bottom-right-radius: 23%;\n  opacity: 0;\n  animation-fill-mode: both;\n}\n@keyframes heart-beat {\n  0% {\n    transform: scale(0.75) rotate(35deg);\n    opacity: 1;\n  }\n  5%, 15%, 25% {\n    transform: scale(1) rotate(35deg);\n  }\n  10%, 20% {\n    transform: scale(0.75) rotate(35deg);\n  }\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotate(35deg) translateY(-10px) translateX(-10px);\n    opacity: 0;\n  }\n}\n.heart--1 {\n  top: -25%;\n  left: 15%;\n  animation: heart-beat 2s ease-out infinite 1.5s;\n}\n.heart--2 {\n  top: -36%;\n  left: 7%;\n  animation: heart-beat 2s ease-out infinite 1s;\n}\n.heart--3 {\n  top: -48%;\n  left: 14%;\n  animation: heart-beat 2s ease-out infinite 0.5s;\n}\n.heart--4 {\n  top: -53%;\n  left: -3%;\n  animation: heart-beat 2s ease-out infinite;\n}\n.heart:before,\n.heart:after {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  border-radius: 50%;\n  background-color: #e64356;\n}\n.heart:after {\n  bottom: 0px;\n  left: -53%;\n}\n.heart:before {\n  top: -53%;\n  right: 0px;\n  transform: rotate(45deg);\n}\n.body {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background-color: #f79e38;\n  border-top-right-radius: 17% 40%;\n  border-top-left-radius: 25%;\n  border-bottom-right-radius: 5% 13%;\n  border-bottom-left-radius: 30% 40%;\n  z-index: 3;\n}\n.cheast {\n  position: absolute;\n  width: 45%;\n  height: 100%;\n  background-color: #fff;\n  border-top-right-radius: 17% 40%;\n  border-top-left-radius: 25%;\n  border-bottom-right-radius: 40% 40%;\n  border-bottom-left-radius: 40% 40%;\n  z-index: 4;\n}\n.cheast:after, .cheast:before {\n  position: absolute;\n  content: \"\";\n  width: 7%;\n  height: 55%;\n  border-radius: 39%;\n  background-color: #fff;\n}\n.cheast:after {\n  top: 36%;\n  left: 3%;\n  transform: rotate(-1deg);\n}\n.cheast:before {\n  top: 19%;\n  left: -4%;\n}\n\n.head {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  animation: dog-head 1s ease-out infinite;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes dog-head {\n  to {\n    transform: translateX(-3px) rotate(3deg);\n  }\n}\n.tail {\n  position: absolute;\n  top: -14%;\n  left: 92%;\n  width: 10%;\n  height: 45%;\n  background-color: #f79e38;\n  border-top-right-radius: 30% 30%;\n  border-top-left-radius: 40% 30%;\n  border-bottom-right-radius: 30% 40%;\n  border-bottom-left-radius: 40% 40%;\n  z-index: 2;\n  transform: rotate(20deg);\n  animation: dog-tail 170ms ease-out infinite;\n}\n@keyframes dog-tail {\n  from, to {\n    transform: rotate(10deg);\n  }\n  50%, 60% {\n    transform: rotate(70deg) translateX(10px) translateY(2px);\n  }\n}\n.tail:before {\n  position: absolute;\n  content: \"\";\n  top: -8%;\n  left: -7%;\n  width: 100%;\n  height: 50%;\n  background-color: #f79e38;\n  border-radius: 50%;\n  animation: dog-tail-before 160ms ease-out infinite;\n}\n@keyframes dog-tail-before {\n  from, to {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n}\n.legs {\n  position: absolute;\n  top: 97%;\n  left: 0;\n  width: 100%;\n  height: 30%;\n  z-index: 2;\n  animation: dog-legs 1s ease-out infinite 1.5s;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes dog-legs {\n  from {\n    transform: translateY(-1px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n.legs__front, .legs__back {\n  width: 10%;\n  height: 100%;\n  background-color: #f79e38;\n  position: absolute;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100%;\n}\n.legs__front:after, .legs__back:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  height: 49%;\n  background-color: #fff;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100%;\n}\n.legs__front--left {\n  left: 38%;\n  transform: rotate(1deg);\n}\n.legs__front--right {\n  left: 20%;\n  transform: rotate(-4deg);\n}\n.legs__back--left {\n  left: 69%;\n  transform: rotate(-7deg);\n}\n.legs__back--right {\n  left: 85%;\n  transform: rotate(2deg);\n}\n\n.face {\n  height: 40%;\n  width: 42%;\n  position: absolute;\n  top: -13%;\n  left: -3%;\n  background-color: #fff;\n  border-top-right-radius: 45% 50%;\n  border-top-left-radius: 35% 50%;\n  border-bottom-left-radius: 35% 21%;\n  z-index: 6;\n}\n.face:after, .face:before {\n  content: \"\";\n  position: absolute;\n  background-color: #f79e38;\n}\n.face:after {\n  width: 27%;\n  left: 7%;\n  height: 23%;\n  border-top-right-radius: 100% 100%;\n  border-bottom-left-radius: 49% 100%;\n  transform: rotate(-64deg);\n  top: -1%;\n  border-top-left-radius: 0% -20%;\n  border-bottom-right-radius: 52% 0%;\n  box-shadow: rgba(0, 0, 0, 0.1) 2px -6px 11px 1px;\n}\n.face:before {\n  width: 55%;\n  left: 42%;\n  top: 0%;\n  height: 35%;\n  border-radius: 23% 7% 16% 12%;\n  transform: rotate(0deg) scaleX(-1);\n}\n\n.eye {\n  width: 6%;\n  height: 6%;\n  position: absolute;\n  border-radius: 100%;\n  top: 24%;\n  background-color: #000;\n  z-index: 6;\n  animation: dog-eye 1800ms infinite;\n}\n@keyframes dog-eye {\n  from, to {\n    animation-timing-function: step-end;\n    opacity: 1;\n  }\n  50%, 55% {\n    animation-timing-function: step-start;\n    opacity: 0;\n  }\n}\n.eye--left {\n  left: 27%;\n}\n.eye--right {\n  left: 46%;\n}\n\n.mouth {\n  background-color: transparent;\n  border-color: #000;\n  width: 44%;\n  border-style: solid;\n  border-width: 0.7vmin;\n  height: 48%;\n  z-index: 6;\n  position: absolute;\n  bottom: 35%;\n  left: 14%;\n  border-top-color: transparent;\n  border-bottom-left-radius: 72% 100%;\n  border-bottom-right-radius: 77% 100%;\n  border-right-color: transparent;\n  border-top-right-radius: 50%;\n  border-left-color: transparent;\n  transform: rotate(-41deg);\n}\n\n.year {\n  position: absolute;\n}\n.year--left {\n  top: -40%;\n  left: 3%;\n  height: 47%;\n  width: 19%;\n  z-index: 1;\n  background-color: #e99036;\n  border-top-left-radius: 68% 100%;\n  border-top-right-radius: 100% 100%;\n  transform-origin: bottom center;\n  animation: left-year 1000ms ease-out infinite;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes left-year {\n  from {\n    transform: rotate(-26deg);\n  }\n  25% {\n    transform: rotate(-35deg);\n  }\n  50% {\n    transform: rotate(-26deg);\n  }\n  to {\n    transform: rotate(-40deg);\n  }\n}\n.year--right {\n  top: -39%;\n  left: 19%;\n  height: 38%;\n  width: 18%;\n  z-index: 1;\n  background-color: #f79e38;\n  border-top-left-radius: 56% 100%;\n  border-top-right-radius: 100% 100%;\n  transform-origin: bottom center;\n  border-bottom-right-radius: 14% 38%;\n  animation: right-year 1000ms ease-out infinite;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes right-year {\n  from {\n    transform: rotate(-331deg);\n  }\n  25% {\n    transform: rotate(-320deg);\n  }\n  50% {\n    transform: rotate(-331deg);\n  }\n  to {\n    transform: rotate(-320deg);\n  }\n}\n\n.nose {\n  position: absolute;\n  width: 24%;\n  height: 24%;\n  background-color: #fff;\n  z-index: 7;\n  left: -12%;\n  top: -3%;\n  border-bottom-left-radius: 50% 88%;\n  border-top-left-radius: 11% 43%;\n  transform: rotate(12deg);\n}\n.nose:after {\n  content: \"\";\n  position: absolute;\n  width: 50%;\n  height: 55%;\n  background-color: #000;\n  border-radius: 100%;\n  left: -7%;\n  top: -18%;\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 0,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init(); // let n = 1
// demo.innerText = string.substr(0, n)
// demo2.innerHTML = string.substr(0, n)
// let id = setInterval(() => {
//   n += 1
//   if (n > string.length){
//     window.clearInterval(id)
//     return
//   }
//   demo.innerText = string.substr(0, n)
//   demo2.innerHTML = string.substr(0, n)
// }, 300)
},{"./css.js":"css.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54063" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map