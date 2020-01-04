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
var string = "#skin {\n    background-color: #FFE600;\n}\n\n.eye {\n    top: 60px;\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    background-color: #2E2E2E;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n}\n\n.eye.left {\n    transform: translateX(-152px);\n}\n\n.eye.right {\n    transform: translateX(88px);\n}\n\n.eye::after {\n    content: '';\n    border: 3px solid black;\n    width: 30px;\n    height: 30px;\n    background-color: #fff;\n    border-radius: 50%;\n    position: absolute;\n    left: 6px;\n}\n\n.nose {\n    border: 10px solid black;\n    border-color: black transparent transparent transparent;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 50%;\n    margin-left: -10px;\n    top: 108px;\n}\n\n.nose::after {\n    content: '';\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    border-radius: 20px 20px 0 0;\n    background-color: black;\n    top: -16px;\n    left: -10px;\n}\n\n\n\n.cheek {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    border-radius: 50%;\n    background-color: #FF0000;\n    position: absolute;\n    left: 50%;\n}\n\n.cheek.left {\n    transform: translateX(-210px);\n    top: 170px;\n}\n\n.cheek.right {\n    transform: translateX(122px);\n    top: 170px;\n}\n\n.mouth .lip {\n    border: 3px solid black;\n    height: 30px;\n    width: 90px;\n    background-color: #FFE600;\n    position: absolute;\n    left: 50%;\n    top: 134px;\n    z-index: 10;\n}\n\n.mouth .lip.left {\n    border-top: none;\n    border-right: none;\n    transform: translateX(-93px) rotate(-15deg);\n    border-radius: 0 0 0 45px;\n}\n\n.mouth .lip.right {\n    border-top: none;\n    border-left: none;\n    transform: rotate(15deg);\n    border-radius: 0 0 45px 0;\n}\n\n.mouth .lip::before {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0.5px;\n    background-color: #FFE600;\n}\n\n.mouth .lip.left::before {\n    right: -2px;\n}\n\n.mouth .lip.right::before {\n    left: -2px;\n}\n\n.mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 144px;\n    width: 100%;\n    overflow: hidden;\n}\n\n.mouth .down .oralCavity {\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background-color: #9B000A;\n}\n\n.mouth .down .oralCavity .tongue {\n    border: 1px solid red;\n    width: 200px;\n    height: 300px;\n    background-color: #FF485F;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n    bottom: -156px;\n}\n.mouth .down .oralCavity {\n    overflow:hidden;\n}";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//从css.js导入
var style = document.querySelector('#style');
var text = document.querySelector('#text');
var n = 1;
var rate = 40;

var run = function run() {
  if (n > _css.default.length) {
    window.clearInterval(run);
    return;
  }

  style.innerHTML = _css.default.substring(0, n);
  text.innerText = _css.default.substring(0, n);
  n++;
  text.scrollTop = text.scrollHeight;
};

var id = setInterval(run, rate);

pause.onclick = function () {
  window.clearInterval(id);
};

play.onclick = function () {
  window.clearInterval(id);
  id = setInterval(run, rate);
};

fast.onclick = function () {
  window.clearInterval(id);
  rate = 1;
  id = setInterval(run, rate);
};

medium.onclick = function () {
  window.clearInterval(id);
  rate = 40;
  id = setInterval(run, rate);
};

slow.onclick = function () {
  window.clearInterval(id);
  rate = 100;
  id = setInterval(run, rate);
};

replay.onclick = function () {
  window.clearInterval(id);
  text.innerText = '';
  style.innerHTML = '';
  n = 1;
  rate = 40;
  id = setInterval(run, rate);
};
},{"./css.js":"css.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50535" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map