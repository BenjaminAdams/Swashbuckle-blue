// Promise global, Used ( at least ) by 'whatwg-fetch'. And required by IE 11
require("core-js/fn/promise");


//localstorage polyfill
(function () {
  function isSupported() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
  }

  if (!isSupported()) {
    function init(undef) {
      var store = {
        setItem: function (id, val) {
          return store[id] = String(val);
        },
        getItem: function (id) {
          return store.hasOwnProperty(id) ? String(store[id]) : undef;
        },
        removeItem: function (id) {
          return delete store[id];
        },
        clear: function () {
          init();
        }
      };

      window.localStorage = store;
    }
    init();
  }
}());

//history.pushState polyfill
(function () {
  if (!history && !history.pushState) {
      window.history = {
        pushState: function(){
            console.log('History.pushState not available')
        }
      }
}}());



// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}