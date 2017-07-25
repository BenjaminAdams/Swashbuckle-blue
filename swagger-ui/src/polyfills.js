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
