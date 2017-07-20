(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("immutable"), require("react-immutable-proptypes"), require("reselect"), require("react-router-dom"), require("serialize-error"), require("deep-extend"), require("react-collapse"), require("swagger-client"), require("base64-js"), require("ieee754"), require("isarray"), require("js-yaml"), require("memoizee"), require("react-dom"), require("react-redux"), require("react-remarkable"), require("react-split-pane"), require("redux"), require("redux-immutable"), require("sanitize-html"), require("scroll-to-element"), require("url-parse"), require("xml"), require("yaml-js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "immutable", "react-immutable-proptypes", "reselect", "react-router-dom", "serialize-error", "deep-extend", "react-collapse", "swagger-client", "base64-js", "ieee754", "isarray", "js-yaml", "memoizee", "react-dom", "react-redux", "react-remarkable", "react-split-pane", "redux", "redux-immutable", "sanitize-html", "scroll-to-element", "url-parse", "xml", "yaml-js"], factory);
	else if(typeof exports === 'object')
		exports["SwaggerUICore"] = factory(require("react"), require("prop-types"), require("immutable"), require("react-immutable-proptypes"), require("reselect"), require("react-router-dom"), require("serialize-error"), require("deep-extend"), require("react-collapse"), require("swagger-client"), require("base64-js"), require("ieee754"), require("isarray"), require("js-yaml"), require("memoizee"), require("react-dom"), require("react-redux"), require("react-remarkable"), require("react-split-pane"), require("redux"), require("redux-immutable"), require("sanitize-html"), require("scroll-to-element"), require("url-parse"), require("xml"), require("yaml-js"));
	else
		root["SwaggerUICore"] = factory(root["react"], root["prop-types"], root["immutable"], root["react-immutable-proptypes"], root["reselect"], root["react-router-dom"], root["serialize-error"], root["deep-extend"], root["react-collapse"], root["swagger-client"], root["base64-js"], root["ieee754"], root["isarray"], root["js-yaml"], root["memoizee"], root["react-dom"], root["react-redux"], root["react-remarkable"], root["react-split-pane"], root["redux"], root["redux-immutable"], root["sanitize-html"], root["scroll-to-element"], root["url-parse"], root["xml"], root["yaml-js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_214__, __WEBPACK_EXTERNAL_MODULE_215__, __WEBPACK_EXTERNAL_MODULE_216__, __WEBPACK_EXTERNAL_MODULE_495__, __WEBPACK_EXTERNAL_MODULE_496__, __WEBPACK_EXTERNAL_MODULE_497__, __WEBPACK_EXTERNAL_MODULE_498__, __WEBPACK_EXTERNAL_MODULE_499__, __WEBPACK_EXTERNAL_MODULE_500__, __WEBPACK_EXTERNAL_MODULE_501__, __WEBPACK_EXTERNAL_MODULE_502__, __WEBPACK_EXTERNAL_MODULE_503__, __WEBPACK_EXTERNAL_MODULE_504__, __WEBPACK_EXTERNAL_MODULE_505__, __WEBPACK_EXTERNAL_MODULE_506__, __WEBPACK_EXTERNAL_MODULE_507__, __WEBPACK_EXTERNAL_MODULE_508__, __WEBPACK_EXTERNAL_MODULE_509__, __WEBPACK_EXTERNAL_MODULE_510__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 511);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(158);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(286), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(275);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(274);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.shallowEqualKeys = exports.filterConfigs = exports.buildFormData = exports.sorters = exports.btoa = exports.parseSeach = exports.getSampleSchema = exports.validateParam = exports.validateFile = exports.validateInteger = exports.validateNumber = exports.propChecker = exports.errorLog = exports.memoize = exports.isImmutable = undefined;var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _getIterator2 = __webpack_require__(61);var _getIterator3 = _interopRequireDefault(_getIterator2);var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _typeof2 = __webpack_require__(24);var _typeof3 = _interopRequireDefault(_typeof2);var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);exports.














objectify = objectify;exports.







arrayify = arrayify;exports.









fromJSOrdered = fromJSOrdered;exports.












bindToState = bindToState;exports.







normalizeArray = normalizeArray;exports.





isFn = isFn;exports.



isObject = isObject;exports.



isFunc = isFunc;exports.



isArray = isArray;exports.






objMap = objMap;exports.






objReduce = objReduce;exports.









systemThunkMiddleware = systemThunkMiddleware;exports.




















defaultStatusCode = defaultStatusCode;exports.











getList = getList;exports.









formatXml = formatXml;exports.














































































highlight = highlight;exports.


































































































































































mapToList = mapToList;exports.





























pascalCase = pascalCase;exports.




pascalCaseFilename = pascalCaseFilename;var _immutable = __webpack_require__(8);var _immutable2 = _interopRequireDefault(_immutable);var _camelCase = __webpack_require__(472);var _camelCase2 = _interopRequireDefault(_camelCase);var _upperFirst = __webpack_require__(212);var _upperFirst2 = _interopRequireDefault(_upperFirst);var _memoize2 = __webpack_require__(210);var _memoize3 = _interopRequireDefault(_memoize2);var _find = __webpack_require__(205);var _find2 = _interopRequireDefault(_find);var _some = __webpack_require__(486);var _some2 = _interopRequireDefault(_some);var _eq = __webpack_require__(55);var _eq2 = _interopRequireDefault(_eq);var _fn = __webpack_require__(79);var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var DEFAULT_REPONSE_KEY = "default";var isImmutable = exports.isImmutable = function isImmutable(maybe) {return _immutable2.default.Iterable.isIterable(maybe);};function objectify(thing) {if (!isObject(thing)) return {};if (isImmutable(thing)) return thing.toObject();return thing;}function arrayify(thing) {if (!thing) return [];if (thing.toArray) return thing.toArray();return normalizeArray(thing);}function fromJSOrdered(js) {if (isImmutable(js)) return js; // Can't do much here
  if (js instanceof _window2.default.File) return js;return !isObject(js) ? js : Array.isArray(js) ? _immutable2.default.Seq(js).map(fromJSOrdered).toList() : _immutable2.default.Seq(js).map(fromJSOrdered).toOrderedMap();}function bindToState(obj, state) {var newObj = {};(0, _keys2.default)(obj).filter(function (key) {return typeof obj[key] === "function";}).forEach(function (key) {return newObj[key] = obj[key].bind(null, state);});return newObj;}function normalizeArray(arr) {if (Array.isArray(arr)) return arr;return [arr];}function isFn(fn) {return typeof fn === "function";}function isObject(obj) {return !!obj && (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object";}function isFunc(thing) {return typeof thing === "function";}function isArray(thing) {return Array.isArray(thing);} // I've changed memoize libs more than once, so I'm using this a way to make that simpler
var memoize = exports.memoize = _memoize3.default;function objMap(obj, fn) {return (0, _keys2.default)(obj).reduce(function (newObj, key) {newObj[key] = fn(obj[key], key);return newObj;}, {});}function objReduce(obj, fn) {return (0, _keys2.default)(obj).reduce(function (newObj, key) {var res = fn(obj[key], key);if (res && (typeof res === "undefined" ? "undefined" : (0, _typeof3.default)(res)) === "object") (0, _assign2.default)(newObj, res);return newObj;}, {});} // Redux middleware that exposes the system to async actions (like redux-thunk, but with out system instead of (dispatch, getState)
function systemThunkMiddleware(getSystem) {return function (_ref) {var dispatch = _ref.dispatch,getState = _ref.getState; // eslint-disable-line no-unused-vars
    return function (next) {return function (action) {if (typeof action === "function") {return action(getSystem());}return next(action);};};};}var errorLog = exports.errorLog = function errorLog(getSystem) {return function () {return function (next) {return function (action) {try {next(action);} catch (e) {getSystem().errActions.newThrownErr(e, action);}};};};};function defaultStatusCode(responses) {var codes = responses.keySeq();return codes.contains(DEFAULT_REPONSE_KEY) ? DEFAULT_REPONSE_KEY : codes.filter(function (key) {return (key + "")[0] === "2";}).sort().first();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Returns an Immutable List, safely
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Immutable.Iterable} iterable the iterable to get the key from
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {String|[String]} key either an array of keys, or a single key
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @returns {Immutable.List} either iterable.get(keys) or an empty Immutable.List
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */function getList(iterable, keys) {if (!_immutable2.default.Iterable.isIterable(iterable)) {return _immutable2.default.List();}var val = iterable.getIn(Array.isArray(keys) ? keys : [keys]);return _immutable2.default.List.isList(val) ? val : _immutable2.default.List();} // Adapted from http://stackoverflow.com/a/2893259/454004
// Note: directly ported from CoffeeScript
function formatXml(xml) {var contexp, fn, formatted, indent, l, lastType, len, lines, ln, reg, transitions, wsexp;reg = /(>)(<)(\/*)/g;wsexp = /[ ]*(.*)[ ]+\n/g;contexp = /(<.+>)(.+\n)/g;xml = xml.replace(/\r\n/g, "\n").replace(reg, "$1\n$2$3").replace(wsexp, "$1\n").replace(contexp, "$1\n$2");formatted = "";lines = xml.split("\n");indent = 0;lastType = "other";transitions = { "single->single": 0, "single->closing": -1, "single->opening": 0, "single->other": 0, "closing->single": 0, "closing->closing": -1, "closing->opening": 0, "closing->other": 0, "opening->single": 1, "opening->closing": 0, "opening->opening": 1, "opening->other": 1, "other->single": 0, "other->closing": -1, "other->opening": 0, "other->other": 0 };fn = function fn(ln) {var fromTo, key, padding, type, types, value;types = { single: Boolean(ln.match(/<.+\/>/)), closing: Boolean(ln.match(/<\/.+>/)), opening: Boolean(ln.match(/<[^!?].*>/)) };type = function () {var results;results = [];for (key in types) {value = types[key];if (value) {results.push(key);}}return results;}()[0];type = type === void 0 ? "other" : type;fromTo = lastType + "->" + type;lastType = type;padding = "";indent += transitions[fromTo];padding = function () {/* eslint-disable no-unused-vars */var m, ref1, results, j;results = [];for (j = m = 0, ref1 = indent; 0 <= ref1 ? m < ref1 : m > ref1; j = 0 <= ref1 ? ++m : --m) {results.push("  ");} /* eslint-enable no-unused-vars */return results;}().join("");if (fromTo === "opening->closing") {formatted = formatted.substr(0, formatted.length - 1) + ln + "\n";} else {formatted += padding + ln + "\n";}};for (l = 0, len = lines.length; l < len; l++) {ln = lines[l];fn(ln);}return formatted;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Adapted from http://github.com/asvd/microlight
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2016 asvd <heliosframework@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */function highlight(el) {var MAX_LENGTH = 5000;var _document = document,appendChild = "appendChild",test = "test";if (!el) return "";if (el.textContent.length > MAX_LENGTH) {return el.textContent;}var reset = function reset(el) {var text = el.textContent,pos = 0, // current position
    next1 = text[0], // next character
    chr = 1, // current character
    prev1, // previous character
    prev2, // the one before the previous
    token = // current token content
    el.innerHTML = "", // (and cleaning the node)
    // current token type:
    //  0: anything else (whitespaces / newlines)
    //  1: operator or brace
    //  2: closing braces (after which '/' is division not regex)
    //  3: (key)word
    //  4: regex
    //  5: string starting with "
    //  6: string starting with '
    //  7: xml comment  <!-- -->
    //  8: multiline comment /* */
    //  9: single-line comment starting with two slashes //
    // 10: single-line comment starting with hash #
    tokenType = 0, // kept to determine between regex and division
    lastTokenType, // flag determining if token is multi-character
    multichar,node; // running through characters and highlighting
    while (prev2 = prev1, // escaping if needed (with except for comments)
    // pervious character will not be therefore
    // recognized as a token finalize condition
    prev1 = tokenType < 7 && prev1 == "\\" ? 1 : chr) {chr = next1;next1 = text[++pos];multichar = token.length > 1; // checking if current token should be finalized
      if (!chr || // end of content
      // types 9-10 (single-line comments) end with a
      // newline
      tokenType > 8 && chr == "\n" || [// finalize conditions for other token types
      // 0: whitespaces
      /\S/[test](chr), // merged together
      // 1: operators
      1, // consist of a single character
      // 2: braces
      1, // consist of a single character
      // 3: (key)word
      !/[$\w]/[test](chr), // 4: regex
      (prev1 == "/" || prev1 == "\n") && multichar, // 5: string with "
      prev1 == "\"" && multichar, // 6: string with '
      prev1 == "'" && multichar, // 7: xml comment
      text[pos - 4] + prev2 + prev1 == "-->", // 8: multiline comment
      prev2 + prev1 == "*/"][tokenType]) {// appending the token to the result
        if (token) {// remapping token type into style
          // (some types are highlighted similarly)
          el[appendChild](node = _document.createElement("span")).setAttribute("style", [// 0: not formatted
          "color: #555; font-weight: bold;", // 1: keywords
          "", // 2: punctuation
          "", // 3: strings and regexps
          "color: #555;", // 4: comments
          ""][// not formatted
          !tokenType ? 0 : // punctuation
          tokenType < 3 ? 2 : // comments
          tokenType > 6 ? 4 : // regex and strings
          tokenType > 3 ? 3 : // otherwise tokenType == 3, (key)word
          // (1 if regexp matches, 0 otherwise)
          +/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/[test](token)]);node[appendChild](_document.createTextNode(token));} // saving the previous token type
        // (skipping whitespaces and comments)
        lastTokenType = tokenType && tokenType < 7 ? tokenType : lastTokenType; // initializing a new token
        token = ""; // determining the new token type (going up the
        // list until matching a token type start
        // condition)
        tokenType = 11;while (![1, //  0: whitespace
        //  1: operator or braces
        /[\/{}[(\-+*=<>:;|\\.,?!&@~]/[test](chr), // eslint-disable-line no-useless-escape
        /[\])]/[test](chr), //  2: closing brace
        /[$\w]/[test](chr), //  3: (key)word
        chr == "/" && //  4: regex
        // previous token was an
        // opening brace or an
        // operator (otherwise
        // division, not a regex)
        lastTokenType < 2 && // workaround for xml
        // closing tags
        prev1 != "<", chr == "\"", //  5: string with "
        chr == "'", //  6: string with '
        //  7: xml comment
        chr + next1 + text[pos + 1] + text[pos + 2] == "<!--", chr + next1 == "/*", //  8: multiline comment
        chr + next1 == "//", //  9: single-line comment
        chr == "#" // 10: hash-style comment
        ][--tokenType]) {}}token += chr;}};return reset(el);} /**
                                                               * Take an immutable map, and convert to a list.
                                                               * Where the keys are merged with the value objects
                                                               * @param {Immutable.Map} map, the map to convert
                                                               * @param {String} key the key to use, when merging the `key`
                                                               * @returns {Immutable.List}
                                                               */function mapToList(map) {var keyNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "key";var collectedKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _immutable2.default.Map();if (!_immutable2.default.Map.isMap(map) || !map.size) {return _immutable2.default.List();}if (!Array.isArray(keyNames)) {keyNames = [keyNames];}if (keyNames.length < 1) {return map.merge(collectedKeys);} // I need to avoid `flatMap` from merging in the Maps, as well as the lists
  var list = _immutable2.default.List();var keyName = keyNames[0];var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {for (var _iterator = (0, _getIterator3.default)(map.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var entry = _step.value;var _entry = (0, _slicedToArray3.default)(entry, 2),key = _entry[0],val = _entry[1];var nextList = mapToList(val, keyNames.slice(1), collectedKeys.set(keyName, key));if (_immutable2.default.List.isList(nextList)) {list = list.concat(nextList);} else {list = list.push(nextList);}}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}return list;} // PascalCase, aka UpperCamelCase
function pascalCase(str) {return (0, _upperFirst2.default)((0, _camelCase2.default)(str));} // Remove the ext of a filename, and pascalCase it
function pascalCaseFilename(filename) {return pascalCase(filename.replace(/\.[^./]*$/, ""));} // Check if ...
// - new props
// - If immutable, use .is()
// - if in explicit objectList, then compare using _.eq
// - else use ===
var propChecker = exports.propChecker = function propChecker(props, nextProps) {var objectList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var ignoreList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];if ((0, _keys2.default)(props).length !== (0, _keys2.default)(nextProps).length) {return true;}return (0, _some2.default)(props, function (a, name) {if (ignoreList.includes(name)) {return false;}var b = nextProps[name];if (_immutable2.default.Iterable.isIterable(a)) {return !_immutable2.default.is(a, b);} // Not going to compare objects
    if ((typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) === "object" && (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) === "object") {return false;}return a !== b;}) || objectList.some(function (objectPropName) {return !(0, _eq2.default)(props[objectPropName], nextProps[objectPropName]);});};var validateNumber = exports.validateNumber = function validateNumber(val) {if (!/^-?\d+(\.?\d+)?$/.test(val)) {return "Value must be a number";}};var validateInteger = exports.validateInteger = function validateInteger(val) {if (!/^-?\d+$/.test(val)) {return "Value must be an integer";}};var validateFile = exports.validateFile = function validateFile(val) {if (val && !(val instanceof _window2.default.File)) {return "Value must be a file";}}; // validation of parameters before execute
var validateParam = exports.validateParam = function validateParam(param, isXml) {var errors = [];var value = isXml && param.get("in") === "body" ? param.get("value_xml") : param.get("value");var required = param.get("required");var type = param.get("type");var stringCheck = type === "string" && !value;var arrayCheck = type === "array" && Array.isArray(value) && !value.length;var listCheck = type === "array" && _immutable2.default.List.isList(value) && !value.count();var fileCheck = type === "file" && !(value instanceof _window2.default.File);if (required && (stringCheck || arrayCheck || listCheck || fileCheck)) {errors.push("Required field is not provided");return errors;}if (value === null || value === undefined) {return errors;}if (type === "number") {var err = validateNumber(value);if (!err) return errors;errors.push(err);} else if (type === "integer") {var _err = validateInteger(value);if (!_err) return errors;errors.push(_err);} else if (type === "array") {var itemType = void 0;if (!value.count()) {return errors;}itemType = param.getIn(["items", "type"]);value.forEach(function (item, index) {var err = void 0;if (itemType === "number") {err = validateNumber(item);} else if (itemType === "integer") {err = validateInteger(item);}if (err) {errors.push({ index: index, error: err });}});} else if (type === "file") {var _err2 = validateFile(value);if (!_err2) return errors;errors.push(_err2);}return errors;};

var getSampleSchema = exports.getSampleSchema = function getSampleSchema(schema) {var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (/xml/.test(contentType)) {
    if (!schema.xml || !schema.xml.name) {
      schema.xml = schema.xml || {};

      if (schema.$$ref) {
        var match = schema.$$ref.match(/\S*\/(\S+)$/);
        schema.xml.name = match[1];
      } else if (schema.type || schema.items || schema.properties || schema.additionalProperties) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- XML example cannot be generated -->";
      } else {
        return null;
      }
    }
    return (0, _fn.memoizedCreateXMLExample)(schema, config);
  }

  return (0, _stringify2.default)((0, _fn.memoizedSampleFromSchema)(schema, config), null, 2);
};

var parseSeach = exports.parseSeach = function parseSeach() {
  var map = {};
  var search = window.location.search;

  if (search != "") {
    var params = search.substr(1).split("&");

    for (var i in params) {
      i = params[i].split("=");
      map[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
    }
  }

  return map;
};

var btoa = exports.btoa = function btoa(str) {
  var buffer = void 0;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = new Buffer(str.toString(), "utf-8");
  }

  return buffer.toString("base64");
};

var sorters = exports.sorters = {
  operationsSorter: {
    alpha: function alpha(a, b) {return a.get("path").localeCompare(b.get("path"));},
    method: function method(a, b) {return a.get("method").localeCompare(b.get("method"));} },

  tagsSorter: {
    alpha: function alpha(a, b) {return a.localeCompare(b);} } };



var buildFormData = exports.buildFormData = function buildFormData(data) {
  var formArr = [];

  for (var name in data) {
    var val = data[name];
    if (val !== undefined && val !== "") {
      formArr.push([name, "=", encodeURIComponent(val).replace(/%20/g, "+")].join(""));
    }
  }
  return formArr.join("&");
};

var filterConfigs = exports.filterConfigs = function filterConfigs(configs, allowed) {
  var i = void 0,filteredConfigs = {};

  for (i in configs) {
    if (allowed.indexOf(i) !== -1) {
      filteredConfigs[i] = configs[i];
    }
  }

  return filteredConfigs;
};

// Is this really required as a helper? Perhaps. TODO: expose the system of presets.apis in docs, so we know what is supported
var shallowEqualKeys = exports.shallowEqualKeys = function shallowEqualKeys(a, b, keys) {
  return !!(0, _find2.default)(keys, function (key) {
    return (0, _eq2.default)(a[key], b[key]);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(328).Buffer))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(92)('wks')
  , uid        = __webpack_require__(65)
  , Symbol     = __webpack_require__(14).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(273);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(61);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store  = __webpack_require__(347)('wks')
  , uid    = __webpack_require__(181)
  , Symbol = __webpack_require__(15).Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(194);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(14)
  , core      = __webpack_require__(9)
  , ctx       = __webpack_require__(36)
  , hide      = __webpack_require__(31)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(160)
  , toPrimitive    = __webpack_require__(95)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _getIterator2 = __webpack_require__(61);var _getIterator3 = _interopRequireDefault(_getIterator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function makeWindow() {
  var win = {
    location: {},
    history: {},
    open: function open() {},
    close: function close() {},
    File: function File() {} };


  if (typeof window === "undefined") {
    return win;
  }

  try {
    win = window;
    var props = ["File", "Blob", "FormData"];var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
      for (var _iterator = (0, _getIterator3.default)(props), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var prop = _step.value;
        if (prop in window) {
          win[prop] = window[prop];
        }
      }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
  } catch (e) {
    console.error(e);
  }

  return win;
}

module.exports = makeWindow();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(278);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(277);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(37)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-immutable-proptypes");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(287), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(158);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(21)
  , createDesc = __webpack_require__(44);
module.exports = __webpack_require__(25) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(161)
  , defined = __webpack_require__(86);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(387),
    getValue = __webpack_require__(427);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(183),
    baseKeys = __webpack_require__(389),
    isArrayLike = __webpack_require__(56);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(84);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(169)
  , enumBugKeys = __webpack_require__(88);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var $          = __webpack_require__(33)
  , createDesc = __webpack_require__(179);
module.exports = __webpack_require__(101) ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(16);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(86);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(312)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(164)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(68);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(99);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(42),
    getRawTag = __webpack_require__(426),
    objectToString = __webpack_require__(456);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  value = Object(value);
  return (symToStringTag && symToStringTag in value)
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(391),
    baseMatchesProperty = __webpack_require__(392),
    identity = __webpack_require__(206),
    isArray = __webpack_require__(11),
    property = __webpack_require__(483);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(186),
    baseAssignValue = __webpack_require__(187);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(207),
    isLength = __webpack_require__(118);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(400);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.CLEAR = exports.NEW_AUTH_ERR = exports.NEW_SPEC_ERR = exports.NEW_THROWN_ERR_BATCH = exports.NEW_THROWN_ERR = undefined;exports.







newThrownErr = newThrownErr;exports.






newThrownErrBatch = newThrownErrBatch;exports.






newSpecErr = newSpecErr;exports.






newAuthErr = newAuthErr;exports.






clear = clear;var _serializeError = __webpack_require__(121);var _serializeError2 = _interopRequireDefault(_serializeError);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var NEW_THROWN_ERR = exports.NEW_THROWN_ERR = "err_new_thrown_err";var NEW_THROWN_ERR_BATCH = exports.NEW_THROWN_ERR_BATCH = "err_new_thrown_err_batch";var NEW_SPEC_ERR = exports.NEW_SPEC_ERR = "err_new_spec_err";var NEW_AUTH_ERR = exports.NEW_AUTH_ERR = "err_new_auth_err";var CLEAR = exports.CLEAR = "err_clear";function newThrownErr(err, action) {return { type: NEW_THROWN_ERR, payload: { action: action, error: (0, _serializeError2.default)(err) } };}function newThrownErrBatch(errors) {return { type: NEW_THROWN_ERR_BATCH, payload: errors };}function newSpecErr(err) {return { type: NEW_SPEC_ERR, payload: err };}function newAuthErr(err) {return { type: NEW_AUTH_ERR, payload: err };}function clear() {var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // filter looks like: {type: 'spec'}, {source: 'parser'}
  return {
    type: CLEAR,
    payload: filter };

}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(280), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(21).f
  , has = __webpack_require__(30)
  , TAG = __webpack_require__(10)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(317);
var global        = __webpack_require__(14)
  , hide          = __webpack_require__(31)
  , Iterators     = __webpack_require__(39)
  , TO_STRING_TAG = __webpack_require__(10)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// add fake Function#toString
// for correct work wrapped methods / constructors with methods like LoDash isNative
var global    = __webpack_require__(15)
  , hide      = __webpack_require__(41)
  , SRC       = __webpack_require__(181)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(48).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  if(typeof val == 'function'){
    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    val.hasOwnProperty('name') || hide(val, 'name', key);
  }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe)delete O[key];
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(442),
    listCacheDelete = __webpack_require__(443),
    listCacheGet = __webpack_require__(444),
    listCacheHas = __webpack_require__(445),
    listCacheSet = __webpack_require__(446);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(55);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isKey = __webpack_require__(112),
    stringToPath = __webpack_require__(469),
    toString = __webpack_require__(58);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(440);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(51),
    isObjectLike = __webpack_require__(57);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.authorizeRequest = exports.authorizeAccessCode = exports.authorizeApplication = exports.authorizePassword = exports.preAuthorizeImplicit = exports.CONFIGURE_AUTH = exports.VALIDATE = exports.AUTHORIZE_OAUTH2 = exports.PRE_AUTHORIZE_OAUTH2 = exports.LOGOUT = exports.AUTHORIZE = exports.SHOW_AUTH_POPUP = undefined;var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);exports.












showDefinitions = showDefinitions;exports.






authorize = authorize;exports.






logout = logout;exports.




































authorizeOauth2 = authorizeOauth2;exports.

























































































































configureAuth = configureAuth;var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var SHOW_AUTH_POPUP = exports.SHOW_AUTH_POPUP = "show_popup";var AUTHORIZE = exports.AUTHORIZE = "authorize";var LOGOUT = exports.LOGOUT = "logout";var PRE_AUTHORIZE_OAUTH2 = exports.PRE_AUTHORIZE_OAUTH2 = "pre_authorize_oauth2";var AUTHORIZE_OAUTH2 = exports.AUTHORIZE_OAUTH2 = "authorize_oauth2";var VALIDATE = exports.VALIDATE = "validate";var CONFIGURE_AUTH = exports.CONFIGURE_AUTH = "configure_auth";var scopeSeparator = " ";function showDefinitions(payload) {return { type: SHOW_AUTH_POPUP, payload: payload };}function authorize(payload) {return { type: AUTHORIZE, payload: payload };}function logout(payload) {return { type: LOGOUT, payload: payload };}var preAuthorizeImplicit = exports.preAuthorizeImplicit = function preAuthorizeImplicit(payload) {return function (_ref) {var authActions = _ref.authActions,errActions = _ref.errActions;var auth = payload.auth,token = payload.token,isValid = payload.isValid;var schema = auth.schema,name = auth.name;var flow = schema.get("flow"); // remove oauth2 property from window after redirect from authentication
    delete _window2.default.swaggerUIRedirectOauth2;if (flow !== "accessCode" && !isValid) {errActions.newAuthErr({ authId: name, source: "auth", level: "warning", message: "Authorization may be unsafe, passed state was changed in server Passed state wasn't returned from auth server" });}if (token.error) {errActions.newAuthErr({ authId: name, source: "auth", level: "error", message: (0, _stringify2.default)(token) });return;}authActions.authorizeOauth2({ auth: auth, token: token });};};function authorizeOauth2(payload) {return { type: AUTHORIZE_OAUTH2, payload: payload };}var authorizePassword = exports.authorizePassword = function authorizePassword(auth) {return function (_ref2) {var authActions = _ref2.authActions;var schema = auth.schema,name = auth.name,username = auth.username,password = auth.password,passwordType = auth.passwordType,clientId = auth.clientId,clientSecret = auth.clientSecret;var form = { grant_type: "password", scopes: encodeURIComponent(auth.scopes.join(scopeSeparator)) };var query = {};var headers = {};if (passwordType === "basic") {headers.Authorization = "Basic " + (0, _utils.btoa)(username + ":" + password);} else {(0, _assign2.default)(form, { username: username }, { password: password });if (passwordType === "query") {if (clientId) {query.client_id = clientId;}if (clientSecret) {query.client_secret = clientSecret;}} else {headers.Authorization = "Basic " + (0, _utils.btoa)(clientId + ":" + clientSecret);}}return authActions.authorizeRequest({ body: (0, _utils.buildFormData)(form), url: schema.get("tokenUrl"), name: name, headers: headers, query: query, auth: auth });};};var authorizeApplication = exports.authorizeApplication = function authorizeApplication(auth) {return function (_ref3) {var authActions = _ref3.authActions;var schema = auth.schema,scopes = auth.scopes,name = auth.name,clientId = auth.clientId,clientSecret = auth.clientSecret;var headers = { Authorization: "Basic " + (0, _utils.btoa)(clientId + ":" + clientSecret) };var form = { grant_type: "client_credentials", scope: scopes.join(scopeSeparator) };return authActions.authorizeRequest({ body: (0, _utils.buildFormData)(form), name: name, url: schema.get("tokenUrl"), auth: auth, headers: headers });};};var authorizeAccessCode = exports.authorizeAccessCode = function authorizeAccessCode(_ref4) {var auth = _ref4.auth,redirectUrl = _ref4.redirectUrl;return function (_ref5) {var authActions = _ref5.authActions;var schema = auth.schema,name = auth.name,clientId = auth.clientId,clientSecret = auth.clientSecret;var form = { grant_type: "authorization_code", code: auth.code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUrl };return authActions.authorizeRequest({ body: (0, _utils.buildFormData)(form), name: name, url: schema.get("tokenUrl"), auth: auth });};};var authorizeRequest = exports.authorizeRequest = function authorizeRequest(data) {return function (_ref6) {var fn = _ref6.fn,authActions = _ref6.authActions,errActions = _ref6.errActions,authSelectors = _ref6.authSelectors;var body = data.body,_data$query = data.query,query = _data$query === undefined ? {} : _data$query,_data$headers = data.headers,headers = _data$headers === undefined ? {} : _data$headers,name = data.name,url = data.url,auth = data.auth;var _ref7 = authSelectors.getConfigs() || {},additionalQueryStringParams = _ref7.additionalQueryStringParams;var fetchUrl = url;for (var key in additionalQueryStringParams) {url += "&" + key + "=" + encodeURIComponent(additionalQueryStringParams[key]);}var _headers = (0, _assign2.default)({ "Accept": "application/json, text/plain, */*", "Access-Control-Allow-Origin": "*", "Content-Type": "application/x-www-form-urlencoded" }, headers);fn.fetch({ url: fetchUrl, method: "post", headers: _headers, query: query, body: body }).then(function (response) {var token = JSON.parse(response.data);var error = token && (token.error || "");var parseError = token && (token.parseError || "");if (!response.ok) {errActions.newAuthErr({ authId: name, level: "error", source: "auth", message: response.statusText });return;}if (error || parseError) {errActions.newAuthErr({ authId: name, level: "error", source: "auth", message: (0, _stringify2.default)(token) });return;}authActions.authorizeOauth2({ auth: auth, token: token });}).catch(function (e) {var err = new Error(e);errActions.newAuthErr({ authId: name, level: "error", source: "auth", message: err.message });});};};function configureAuth(payload) {return {
    type: CONFIGURE_AUTH,
    payload: payload };

}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.SHOW = exports.UPDATE_MODE = exports.UPDATE_FILTER = exports.UPDATE_LAYOUT = undefined;exports.








updateLayout = updateLayout;exports.






updateFilter = updateFilter;exports.






show = show;exports.








changeMode = changeMode;var _utils = __webpack_require__(7);var UPDATE_LAYOUT = exports.UPDATE_LAYOUT = "layout_update_layout";var UPDATE_FILTER = exports.UPDATE_FILTER = "layout_update_filter";var UPDATE_MODE = exports.UPDATE_MODE = "layout_update_mode";var SHOW = exports.SHOW = "layout_show"; // export const ONLY_SHOW = "layout_only_show"
function updateLayout(layout) {return { type: UPDATE_LAYOUT, payload: layout };}function updateFilter(filter) {return { type: UPDATE_FILTER, payload: filter };}function show(thing) {var shown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;thing = (0, _utils.normalizeArray)(thing);return { type: SHOW, payload: { thing: thing, shown: shown } };} // Simple string key-store, used for
function changeMode(thing) {var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";thing = (0, _utils.normalizeArray)(thing);return {
    type: UPDATE_MODE,
    payload: { thing: thing, mode: mode } };

}


// export function onlyShow(thing, shown=true) {
//   thing = normalizeArray(thing)
//   if(thing.length < 2)
//     throw new Error("layoutActions.onlyShow only works, when `thing` is an array with length > 1")
//   return {
//     type: ONLY_SHOW,
//     payload: {thing, shown}
//   }
// }

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.memoizedSampleFromSchema = exports.memoizedCreateXMLExample = exports.sampleXmlFromSchema = exports.inferSchema = exports.sampleFromSchema = undefined;exports.








































































































































































































































createXMLExample = createXMLExample;var _utils = __webpack_require__(7);var _xml = __webpack_require__(509);var _xml2 = _interopRequireDefault(_xml);var _memoizee = __webpack_require__(499);var _memoizee2 = _interopRequireDefault(_memoizee);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var primitives = { "string": function string() {return "string";}, "string_email": function string_email() {return "user@example.com";}, "string_date-time": function string_dateTime() {return new Date().toISOString();}, "number": function number() {return 0;}, "number_float": function number_float() {return 0.0;}, "integer": function integer() {return 0;}, "boolean": function boolean(schema) {return typeof schema.default === "boolean" ? schema.default : true;} };var primitive = function primitive(schema) {schema = (0, _utils.objectify)(schema);var _schema = schema,type = _schema.type,format = _schema.format;var fn = primitives[type + "_" + format] || primitives[type];if ((0, _utils.isFunc)(fn)) return fn(schema);return "Unknown Type: " + schema.type;};var sampleFromSchema = exports.sampleFromSchema = function sampleFromSchema(schema) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var _objectify = (0, _utils.objectify)(schema),type = _objectify.type,example = _objectify.example,properties = _objectify.properties,additionalProperties = _objectify.additionalProperties,items = _objectify.items;var includeReadOnly = config.includeReadOnly;if (example !== undefined) return example;if (!type) {if (properties) {type = "object";} else if (items) {type = "array";} else {return;}}if (type === "object") {var props = (0, _utils.objectify)(properties);var obj = {};for (var name in props) {if (!props[name].readOnly || includeReadOnly) {obj[name] = sampleFromSchema(props[name], { includeReadOnly: includeReadOnly });}}if (additionalProperties === true) {obj.additionalProp1 = {};} else if (additionalProperties) {var additionalProps = (0, _utils.objectify)(additionalProperties);var additionalPropVal = sampleFromSchema(additionalProps, { includeReadOnly: includeReadOnly });for (var i = 1; i < 4; i++) {obj["additionalProp" + i] = additionalPropVal;}}return obj;}if (type === "array") {return [sampleFromSchema(items, { includeReadOnly: includeReadOnly })];}if (schema["enum"]) {if (schema["default"]) return schema["default"];return (0, _utils.normalizeArray)(schema["enum"])[0];}if (type === "file") {return;}return primitive(schema);};var inferSchema = exports.inferSchema = function inferSchema(thing) {if (thing.schema) thing = thing.schema;if (thing.properties) {thing.type = "object";}return thing; // Hopefully this will have something schema like in it... `type` for example
};var sampleXmlFromSchema = exports.sampleXmlFromSchema = function sampleXmlFromSchema(schema) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var objectifySchema = (0, _utils.objectify)(schema);var type = objectifySchema.type,properties = objectifySchema.properties,additionalProperties = objectifySchema.additionalProperties,items = objectifySchema.items,example = objectifySchema.example;var includeReadOnly = config.includeReadOnly;var defaultValue = objectifySchema.default;var res = {};var _attr = {};var xml = schema.xml;var name = xml.name,prefix = xml.prefix,namespace = xml.namespace;var enumValue = objectifySchema.enum;var displayName = void 0,value = void 0;if (!type) {if (properties || additionalProperties) {type = "object";} else if (items) {type = "array";} else {return;}}name = name || "notagname"; // add prefix to name if exists
  displayName = (prefix ? prefix + ":" : "") + name;if (namespace) {//add prefix to namespace if exists
    var namespacePrefix = prefix ? "xmlns:" + prefix : "xmlns";_attr[namespacePrefix] = namespace;}if (type === "array") {if (items) {items.xml = items.xml || xml || {};items.xml.name = items.xml.name || xml.name;if (xml.wrapped) {res[displayName] = [];if (Array.isArray(example)) {example.forEach(function (v) {items.example = v;res[displayName].push(sampleXmlFromSchema(items, config));});} else if (Array.isArray(defaultValue)) {defaultValue.forEach(function (v) {items.default = v;res[displayName].push(sampleXmlFromSchema(items, config));});} else {res[displayName] = [sampleXmlFromSchema(items, config)];}if (_attr) {res[displayName].push({ _attr: _attr });}return res;}var _res = [];if (Array.isArray(example)) {example.forEach(function (v) {items.example = v;_res.push(sampleXmlFromSchema(items, config));});return _res;} else if (Array.isArray(defaultValue)) {defaultValue.forEach(function (v) {items.default = v;_res.push(sampleXmlFromSchema(items, config));});return _res;}return sampleXmlFromSchema(items, config);}}if (type === "object") {var props = (0, _utils.objectify)(properties);res[displayName] = [];example = example || {};for (var propName in props) {if (!props[propName].readOnly || includeReadOnly) {props[propName].xml = props[propName].xml || {};if (props[propName].xml.attribute) {var enumAttrVal = Array.isArray(props[propName].enum) && props[propName].enum[0];var attrExample = props[propName].example;var attrDefault = props[propName].default;_attr[props[propName].xml.name || propName] = attrExample !== undefined && attrExample || example[propName] !== undefined && example[propName] || attrDefault !== undefined && attrDefault || enumAttrVal || primitive(props[propName]);} else {props[propName].xml.name = props[propName].xml.name || propName;props[propName].example = props[propName].example !== undefined ? props[propName].example : example[propName];var t = sampleXmlFromSchema(props[propName]);if (Array.isArray(t)) {res[displayName] = res[displayName].concat(t);} else {res[displayName].push(t);}}}}if (additionalProperties === true) {res[displayName].push({ additionalProp: "Anything can be here" });} else if (additionalProperties) {res[displayName].push({ additionalProp: primitive(additionalProperties) });}if (_attr) {res[displayName].push({ _attr: _attr });}return res;}if (example !== undefined) {value = example;} else if (defaultValue !== undefined) {//display example if exists
    value = defaultValue;} else if (Array.isArray(enumValue)) {//display enum first value
    value = enumValue[0];} else {//set default value
    value = primitive(schema);}res[displayName] = _attr ? [{ _attr: _attr }, value] : value;return res;};function createXMLExample(schema, config) {var json = sampleXmlFromSchema(schema, config);if (!json) {return;}return (0, _xml2.default)(json, { declaration: true, indent: "\t" });}
var memoizedCreateXMLExample = exports.memoizedCreateXMLExample = (0, _memoizee2.default)(createXMLExample);

var memoizedSampleFromSchema = exports.memoizedSampleFromSchema = (0, _memoizee2.default)(sampleFromSchema);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.execute = exports.executeRequest = exports.logRequest = exports.setRequest = exports.setResponse = exports.formatIntoYaml = exports.resolveSpec = exports.parseToJson = exports.SET_SCHEME = exports.UPDATE_RESOLVED = exports.UPDATE_OPERATION_VALUE = exports.ClEAR_VALIDATE_PARAMS = exports.CLEAR_REQUEST = exports.CLEAR_RESPONSE = exports.LOG_REQUEST = exports.SET_REQUEST = exports.SET_RESPONSE = exports.VALIDATE_PARAMS = exports.UPDATE_PARAM = exports.UPDATE_JSON = exports.UPDATE_URL = exports.UPDATE_SPEC = undefined;var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _objectWithoutProperties2 = __webpack_require__(82);var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _typeof2 = __webpack_require__(24);var _typeof3 = _interopRequireDefault(_typeof2);exports.





















updateSpec = updateSpec;exports.

















updateResolved = updateResolved;exports.






updateUrl = updateUrl;exports.



updateJsonSpec = updateJsonSpec;exports.














































































changeParam = changeParam;exports.






validateParams = validateParams;exports.






clearValidateParams = clearValidateParams;exports.






changeConsumesValue = changeConsumesValue;exports.






changeProducesValue = changeProducesValue;exports.










































































clearResponse = clearResponse;exports.






clearRequest = clearRequest;exports.






setScheme = setScheme;var _jsYaml = __webpack_require__(498);var _jsYaml2 = _interopRequireDefault(_jsYaml);var _urlParse = __webpack_require__(508);var _urlParse2 = _interopRequireDefault(_urlParse);var _serializeError = __webpack_require__(121);var _serializeError2 = _interopRequireDefault(_serializeError);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Actions conform to FSA (flux-standard-actions)
// {type: string,payload: Any|Error, meta: obj, error: bool}
var UPDATE_SPEC = exports.UPDATE_SPEC = "spec_update_spec";var UPDATE_URL = exports.UPDATE_URL = "spec_update_url";var UPDATE_JSON = exports.UPDATE_JSON = "spec_update_json";var UPDATE_PARAM = exports.UPDATE_PARAM = "spec_update_param";var VALIDATE_PARAMS = exports.VALIDATE_PARAMS = "spec_validate_param";var SET_RESPONSE = exports.SET_RESPONSE = "spec_set_response";var SET_REQUEST = exports.SET_REQUEST = "spec_set_request";var LOG_REQUEST = exports.LOG_REQUEST = "spec_log_request";var CLEAR_RESPONSE = exports.CLEAR_RESPONSE = "spec_clear_response";var CLEAR_REQUEST = exports.CLEAR_REQUEST = "spec_clear_request";var ClEAR_VALIDATE_PARAMS = exports.ClEAR_VALIDATE_PARAMS = "spec_clear_validate_param";var UPDATE_OPERATION_VALUE = exports.UPDATE_OPERATION_VALUE = "spec_update_operation_value";var UPDATE_RESOLVED = exports.UPDATE_RESOLVED = "spec_update_resolved";var SET_SCHEME = exports.SET_SCHEME = "set_scheme";function updateSpec(spec) {if (spec instanceof Error) {return { type: UPDATE_SPEC, error: true, payload: spec };}if (typeof spec === "string") {return { type: UPDATE_SPEC, payload: spec.replace(/\t/g, "  ") || "" };}return { type: UPDATE_SPEC, payload: "" };}function updateResolved(spec) {return { type: UPDATE_RESOLVED, payload: spec };}function updateUrl(url) {return { type: UPDATE_URL, payload: url };}function updateJsonSpec(json) {if (!json || (typeof json === "undefined" ? "undefined" : (0, _typeof3.default)(json)) !== "object") {throw new Error("updateJson must only accept a simple JSON object");}return { type: UPDATE_JSON, payload: json };}var parseToJson = exports.parseToJson = function parseToJson(str) {return function (_ref) {var specActions = _ref.specActions,specSelectors = _ref.specSelectors,errActions = _ref.errActions;var specStr = specSelectors.specStr;var json = null;try {str = str || specStr();errActions.clear({ source: "parser" });json = _jsYaml2.default.safeLoad(str);} catch (e) {// TODO: push error to state
      console.error(e);return errActions.newSpecErr({ source: "parser", level: "error", message: e.reason, line: e.mark && e.mark.line ? e.mark.line + 1 : undefined });}return specActions.updateJsonSpec(json);};};var resolveSpec = exports.resolveSpec = function resolveSpec(json, url) {return function (_ref2) {var specActions = _ref2.specActions,specSelectors = _ref2.specSelectors,errActions = _ref2.errActions,_ref2$fn = _ref2.fn,fetch = _ref2$fn.fetch,resolve = _ref2$fn.resolve,AST = _ref2$fn.AST,getConfigs = _ref2.getConfigs;var _getConfigs = getConfigs(),modelPropertyMacro = _getConfigs.modelPropertyMacro,parameterMacro = _getConfigs.parameterMacro;if (typeof json === "undefined") {json = specSelectors.specJson();}if (typeof url === "undefined") {url = specSelectors.url();}var getLineNumberForPath = AST.getLineNumberForPath;var specStr = specSelectors.specStr();return resolve({ fetch: fetch, spec: json, baseDoc: url, modelPropertyMacro: modelPropertyMacro, parameterMacro: parameterMacro }).then(function (_ref3) {var spec = _ref3.spec,errors = _ref3.errors;errActions.clear({ type: "thrown" });if (errors.length > 0) {var preparedErrors = errors.map(function (err) {console.error(err);err.line = err.fullPath ? getLineNumberForPath(specStr, err.fullPath) : null;err.path = err.fullPath ? err.fullPath.join(".") : null;err.level = "error";err.type = "thrown";err.source = "resolver";Object.defineProperty(err, "message", { enumerable: true, value: err.message });return err;});errActions.newThrownErrBatch(preparedErrors);}return specActions.updateResolved(spec);});};};var formatIntoYaml = exports.formatIntoYaml = function formatIntoYaml() {return function (_ref4) {var specActions = _ref4.specActions,specSelectors = _ref4.specSelectors;var specStr = specSelectors.specStr;var updateSpec = specActions.updateSpec;try {var yaml = _jsYaml2.default.safeDump(_jsYaml2.default.safeLoad(specStr()), { indent: 2 });updateSpec(yaml);} catch (e) {updateSpec(e);}};};function changeParam(path, paramName, value, isXml) {return { type: UPDATE_PARAM, payload: { path: path, value: value, paramName: paramName, isXml: isXml } };}function validateParams(payload) {return { type: VALIDATE_PARAMS, payload: { pathMethod: payload } };}function clearValidateParams(payload) {return { type: ClEAR_VALIDATE_PARAMS, payload: { pathMethod: payload } };}function changeConsumesValue(path, value) {return { type: UPDATE_OPERATION_VALUE, payload: { path: path, value: value, key: "consumes_value" } };}function changeProducesValue(path, value) {return { type: UPDATE_OPERATION_VALUE, payload: { path: path, value: value, key: "produces_value" } };}var setResponse = exports.setResponse = function setResponse(path, method, res) {return { payload: { path: path, method: method, res: res }, type: SET_RESPONSE };};var setRequest = exports.setRequest = function setRequest(path, method, req) {return { payload: { path: path, method: method, req: req }, type: SET_REQUEST };}; // This is for debugging, remove this comment if you depend on this action
var logRequest = exports.logRequest = function logRequest(req) {return { payload: req, type: LOG_REQUEST };}; // Actually fire the request via fn.execute
// (For debugging) and ease of testing
var executeRequest = exports.executeRequest = function executeRequest(req) {return function (_ref5) {var fn = _ref5.fn,specActions = _ref5.specActions,specSelectors = _ref5.specSelectors;var pathName = req.pathName,method = req.method,operation = req.operation;var op = operation.toJS(); // if url is relative, parseUrl makes it absolute by inferring from `window.location`
    req.contextUrl = (0, _urlParse2.default)(specSelectors.url()).toString();if (op && op.operationId) {req.operationId = op.operationId;} else if (op && pathName && method) {req.operationId = fn.opId(op, pathName, method);}var parsedRequest = (0, _assign2.default)({}, req);parsedRequest = fn.buildRequest(parsedRequest);specActions.setRequest(req.pathName, req.method, parsedRequest); // track duration of request
    var startTime = Date.now();return fn.execute(req).then(function (res) {res.duration = Date.now() - startTime;specActions.setResponse(req.pathName, req.method, res);}).catch(function (err) {return specActions.setResponse(req.pathName, req.method, { error: true, err: (0, _serializeError2.default)(err) });});};}; // I'm using extras as a way to inject properties into the final, `execute` method - It's not great. Anyone have a better idea? @ponelat
var execute = function execute() {var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var path = _ref6.path,method = _ref6.method,extras = (0, _objectWithoutProperties3.default)(_ref6, ["path", "method"]);return function (system) {var fetch = system.fn.fetch,specSelectors = system.specSelectors,specActions = system.specActions;var spec = specSelectors.spec().toJS();var scheme = specSelectors.operationScheme(path, method);var _specSelectors$conten = specSelectors.contentTypeValues([path, method]).toJS(),requestContentType = _specSelectors$conten.requestContentType,responseContentType = _specSelectors$conten.responseContentType;var isXml = /xml/i.test(requestContentType);var parameters = specSelectors.parameterValues([path, method], isXml).toJS();return specActions.executeRequest((0, _extends3.default)({ fetch: fetch, spec: spec, pathName: path, method: method, parameters: parameters, requestContentType: requestContentType, scheme: scheme, responseContentType: responseContentType }, extras));};};exports.execute = execute;function clearResponse(path, method) {return { type: CLEAR_RESPONSE, payload: { path: path, method: method } };}function clearRequest(path, method) {return { type: CLEAR_REQUEST, payload: { path: path, method: method } };}function setScheme(scheme, path, method) {return { type: SET_SCHEME, payload: { scheme: scheme, path: path, method: method } };}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _utils = __webpack_require__(7);

var request = __webpack_require__(494);

request.keys().forEach(function (key) {
  if (key === "./index.js") {
    return;
  }

  // if( key.slice(2).indexOf("/") > -1) {
  //   // skip files in subdirs
  //   return
  // }

  var mod = request(key);
  module.exports[(0, _utils.pascalCaseFilename)(key)] = mod.default ? mod.default : mod;
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(272);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43)
  , TAG = __webpack_require__(10)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38)
  , document = __webpack_require__(14).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(19)
  , dPs         = __webpack_require__(306)
  , enumBugKeys = __webpack_require__(88)
  , IE_PROTO    = __webpack_require__(91)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(87)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(159).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(92)('keys')
  , uid    = __webpack_require__(65);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(93)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(38);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(14)
  , core           = __webpack_require__(9)
  , LIBRARY        = __webpack_require__(62)
  , wksExt         = __webpack_require__(97)
  , defineProperty = __webpack_require__(21).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(85)
  , ITERATOR  = __webpack_require__(10)('iterator')
  , Iterators = __webpack_require__(39);
module.exports = __webpack_require__(9).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(67)
  , TAG = __webpack_require__(13)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(332)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(33).setDesc
  , has = __webpack_require__(176)
  , TAG = __webpack_require__(13)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34),
    root = __webpack_require__(16);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(447),
    mapCacheDelete = __webpack_require__(448),
    mapCacheGet = __webpack_require__(449),
    mapCacheHas = __webpack_require__(450),
    mapCacheSet = __webpack_require__(451);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(70),
    stackClear = __webpack_require__(463),
    stackDelete = __webpack_require__(464),
    stackGet = __webpack_require__(465),
    stackHas = __webpack_require__(466),
    stackSet = __webpack_require__(467);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(382),
    createBaseEach = __webpack_require__(416);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(73),
    toKey = __webpack_require__(54);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(182);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(114),
    stubArray = __webpack_require__(211);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

module.exports = getSymbols;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(76);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(108);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(384),
    isObjectLike = __webpack_require__(57);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(16),
    stubFalse = __webpack_require__(487);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module)))

/***/ }),
/* 118 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("serialize-error");

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Collapse = exports.Link = exports.Select = exports.Input = exports.TextArea = exports.Button = exports.Row = exports.Col = exports.Container = undefined;var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _objectWithoutProperties2 = __webpack_require__(82);var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactCollapse = __webpack_require__(215);var _reactCollapse2 = _interopRequireDefault(_reactCollapse);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function xclass() {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  return args.filter(function (a) {return !!a;}).join(" ").trim();
}var

Container = exports.Container = function (_React$Component) {(0, _inherits3.default)(Container, _React$Component);function Container() {(0, _classCallCheck3.default)(this, Container);return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).apply(this, arguments));}(0, _createClass3.default)(Container, [{ key: "render", value: function render()
    {var _props =
      this.props,fullscreen = _props.fullscreen,full = _props.full,rest = (0, _objectWithoutProperties3.default)(_props, ["fullscreen", "full"]);
      // Normal element

      if (fullscreen)
      return _react2.default.createElement("section", rest);

      var containerClass = "swagger-container" + (full ? "-full" : "");
      return (
        _react2.default.createElement("section", (0, _extends3.default)({}, rest, { className: xclass(rest.className, containerClass) })));

    } }]);return Container;}(_react2.default.Component);


Container.propTypes = {
  fullscreen: _propTypes2.default.bool,
  full: _propTypes2.default.bool,
  className: _propTypes2.default.string };


var DEVICES = {
  "mobile": "",
  "tablet": "-tablet",
  "desktop": "-desktop",
  "large": "-hd" };var


Col = exports.Col = function (_React$Component2) {(0, _inherits3.default)(Col, _React$Component2);function Col() {(0, _classCallCheck3.default)(this, Col);return (0, _possibleConstructorReturn3.default)(this, (Col.__proto__ || (0, _getPrototypeOf2.default)(Col)).apply(this, arguments));}(0, _createClass3.default)(Col, [{ key: "render", value: function render()

    {var _props2 =












      this.props,hide = _props2.hide,keepContents = _props2.keepContents,mobile = _props2.mobile,tablet = _props2.tablet,desktop = _props2.desktop,large = _props2.large,rest = (0, _objectWithoutProperties3.default)(_props2, ["hide", "keepContents", "mobile", "tablet", "desktop", "large"]);

      if (hide && !keepContents)
      return _react2.default.createElement("span", null);

      var classesAr = [];

      for (var device in DEVICES) {
        var deviceClass = DEVICES[device];
        if (device in this.props) {
          var val = this.props[device];

          if (val < 1) {
            classesAr.push("none" + deviceClass);
            continue;
          }

          classesAr.push("block" + deviceClass);
          classesAr.push("col-" + val + deviceClass);
        }
      }

      var classes = xclass.apply(undefined, [rest.className].concat(classesAr));

      return (
        _react2.default.createElement("section", (0, _extends3.default)({}, rest, { style: { display: hide ? "none" : null }, className: classes })));

    } }]);return Col;}(_react2.default.Component);



Col.propTypes = {
  hide: _propTypes2.default.bool,
  keepContents: _propTypes2.default.bool,
  mobile: _propTypes2.default.number,
  tablet: _propTypes2.default.number,
  desktop: _propTypes2.default.number,
  large: _propTypes2.default.number,
  className: _propTypes2.default.string };var


Row = exports.Row = function (_React$Component3) {(0, _inherits3.default)(Row, _React$Component3);function Row() {(0, _classCallCheck3.default)(this, Row);return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));}(0, _createClass3.default)(Row, [{ key: "render", value: function render()

    {
      return _react2.default.createElement("div", (0, _extends3.default)({}, this.props, { className: xclass(this.props.className, "wrapper") }));
    } }]);return Row;}(_react2.default.Component);



Row.propTypes = {
  className: _propTypes2.default.string };var


Button = exports.Button = function (_React$Component4) {(0, _inherits3.default)(Button, _React$Component4);function Button() {(0, _classCallCheck3.default)(this, Button);return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));}(0, _createClass3.default)(Button, [{ key: "render", value: function render()









    {
      return _react2.default.createElement("button", (0, _extends3.default)({}, this.props, { className: xclass(this.props.className, "button") }));
    } }]);return Button;}(_react2.default.Component);Button.propTypes = { className: _propTypes2.default.string };Button.defaultProps = { className: "" };




var TextArea = exports.TextArea = function TextArea(props) {return _react2.default.createElement("textarea", props);};

var Input = exports.Input = function Input(props) {return _react2.default.createElement("input", props);};var

Select = exports.Select = function (_React$Component5) {(0, _inherits3.default)(Select, _React$Component5);













  function Select(props, context) {(0, _classCallCheck3.default)(this, Select);var _this5 = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this,
    props, context));_initialiseProps.call(_this5);

    var value = void 0;

    if (props.value !== undefined) {
      value = props.value;
    } else {
      value = props.multiple ? [""] : "";
    }

    _this5.state = { value: value };return _this5;
  }(0, _createClass3.default)(Select, [{ key: "render", value: function render()























    {var _props3 =
      this.props,allowedValues = _props3.allowedValues,multiple = _props3.multiple,allowEmptyValue = _props3.allowEmptyValue;
      var value = this.state.value.toJS ? this.state.value.toJS() : this.state.value;

      return (
        _react2.default.createElement("select", { multiple: multiple, value: value, onChange: this.onChange },
          allowEmptyValue ? _react2.default.createElement("option", { value: "" }, "--") : null,

          allowedValues.map(function (item, key) {
            return _react2.default.createElement("option", { key: key, value: String(item) }, item);
          })));



    } }]);return Select;}(_react2.default.Component);Select.propTypes = { allowedValues: _propTypes2.default.array, value: _propTypes2.default.any, onChange: _propTypes2.default.func, multiple: _propTypes2.default.bool, allowEmptyValue: _propTypes2.default.bool };Select.defaultProps = { multiple: false, allowEmptyValue: true };var _initialiseProps = function _initialiseProps() {var _this8 = this;this.onChange = function (e) {var _props5 = _this8.props,onChange = _props5.onChange,multiple = _props5.multiple;var options = [].slice.call(e.target.options);var value = void 0;if (multiple) {value = options.filter(function (option) {return option.selected;}).map(function (option) {return option.value;});} else {value = e.target.value;}_this8.setState({ value: value });onChange && onChange(value);};};var


Link = exports.Link = function (_React$Component6) {(0, _inherits3.default)(Link, _React$Component6);function Link() {(0, _classCallCheck3.default)(this, Link);return (0, _possibleConstructorReturn3.default)(this, (Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).apply(this, arguments));}(0, _createClass3.default)(Link, [{ key: "render", value: function render()

    {
      return _react2.default.createElement("a", (0, _extends3.default)({}, this.props, { className: xclass(this.props.className, "link") }));
    } }]);return Link;}(_react2.default.Component);



Link.propTypes = {
  className: _propTypes2.default.string };


var NoMargin = function NoMargin(_ref) {var children = _ref.children;return _react2.default.createElement("div", { style: { height: "auto", border: "none", margin: 0, padding: 0 } }, " ", children, " ");};

NoMargin.propTypes = {
  children: _propTypes2.default.node };var


Collapse = exports.Collapse = function (_React$Component7) {(0, _inherits3.default)(Collapse, _React$Component7);function Collapse() {(0, _classCallCheck3.default)(this, Collapse);return (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).apply(this, arguments));}(0, _createClass3.default)(Collapse, [{ key: "renderNotAnimated", value: function renderNotAnimated()












    {
      if (!this.props.isOpened)
      return _react2.default.createElement("noscript", null);
      return (
        _react2.default.createElement(NoMargin, null,
          this.props.children));


    } }, { key: "render", value: function render()

    {var _props4 =
      this.props,animated = _props4.animated,isOpened = _props4.isOpened,children = _props4.children;

      if (!animated)
      return this.renderNotAnimated();

      children = isOpened ? children : null;
      return (
        _react2.default.createElement(_reactCollapse2.default, { isOpened: isOpened },
          _react2.default.createElement(NoMargin, null,
            children)));



    } }]);return Collapse;}(_react2.default.Component);Collapse.propTypes = { isOpened: _propTypes2.default.bool, children: _propTypes2.default.node.isRequired, animated: _propTypes2.default.bool };Collapse.defaultProps = { isOpened: false, animated: false };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _utils = __webpack_require__(7);

var request = __webpack_require__(492);

request.keys().forEach(function (key) {
  if (key === "./index.js") {
    return;
  }

  // if( key.slice(2).indexOf("/") > -1) {
  //   // skip files in subdirs
  //   return
  // }

  var mod = request(key);
  module.exports[(0, _utils.pascalCaseFilename)(key)] = mod.default ? mod.default : mod;
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getLineNumberForPathAsync = exports.positionRangeForPathAsync = exports.pathForPositionAsync = undefined;var _promise = __webpack_require__(276);var _promise2 = _interopRequireDefault(_promise);var _typeof2 = __webpack_require__(24);var _typeof3 = _interopRequireDefault(_typeof2);exports.









getLineNumberForPath = getLineNumberForPath;exports.












































































positionRangeForPath = positionRangeForPath;exports.







































































pathForPosition = pathForPosition;var _yamlJs = __webpack_require__(510);var _yamlJs2 = _interopRequireDefault(_yamlJs);var _isArray = __webpack_require__(11);var _isArray2 = _interopRequireDefault(_isArray);var _find = __webpack_require__(205);var _find2 = _interopRequireDefault(_find);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var cachedCompose = (0, _utils.memoize)(_yamlJs2.default.compose); // TODO: build a custom cache based on content
var MAP_TAG = "tag:yaml.org,2002:map";var SEQ_TAG = "tag:yaml.org,2002:seq";function getLineNumberForPath(yaml, path) {// Type check
  if (typeof yaml !== "string") {throw new TypeError("yaml should be a string");}if (!(0, _isArray2.default)(path)) {throw new TypeError("path should be an array of strings");}var i = 0;var ast = cachedCompose(yaml); // simply walks the tree using current path recursively to the point that
  // path is empty
  return find(ast, path);function find(current, path, last) {if (!current) {// something has gone quite wrong
      // return the last start_mark as a best-effort
      if (last && last.start_mark) return last.start_mark.line;return 0;}if (path.length && current.tag === MAP_TAG) {for (i = 0; i < current.value.length; i++) {var pair = current.value[i];var key = pair[0];var value = pair[1];if (key.value === path[0]) {return find(value, path.slice(1), current);}if (key.value === path[0].replace(/\[.*/, "")) {// access the array at the index in the path (example: grab the 2 in "tags[2]")
          var index = parseInt(path[0].match(/\[(.*)\]/)[1]);if (value.value.length === 1 && index !== 0 && !!index) {var nextVal = (0, _find2.default)(value.value[0], { value: index.toString() });} else {// eslint-disable-next-line no-redeclare
            var nextVal = value.value[index];}return find(nextVal, path.slice(1), value.value);}}}if (path.length && current.tag === SEQ_TAG) {var item = current.value[path[0]];if (item && item.tag) {return find(item, path.slice(1), current.value);}}if (current.tag === MAP_TAG && !Array.isArray(last)) {return current.start_mark.line;} else {return current.start_mark.line + 1;}}} /**
                                                                                                                                                                                                                                                                                                                                                                                              * Get a position object with given
                                                                                                                                                                                                                                                                                                                                                                                              * @param  {string}   yaml
                                                                                                                                                                                                                                                                                                                                                                                              * YAML or JSON string
                                                                                                                                                                                                                                                                                                                                                                                              * @param  {array}   path
                                                                                                                                                                                                                                                                                                                                                                                              * an array of stings that constructs a
                                                                                                                                                                                                                                                                                                                                                                                              * JSON Path similiar to JSON Pointers(RFC 6901). The difference is, each
                                                                                                                                                                                                                                                                                                                                                                                              * component of path is an item of the array intead of beinf seperated with
                                                                                                                                                                                                                                                                                                                                                                                              * slash(/) in a string
                                                                                                                                                                                                                                                                                                                                                                                              */function positionRangeForPath(yaml, path) {// Type check
  if (typeof yaml !== "string") {throw new TypeError("yaml should be a string");}if (!(0, _isArray2.default)(path)) {throw new TypeError("path should be an array of strings");}var invalidRange = { start: { line: -1, column: -1 }, end: { line: -1, column: -1 } };var i = 0;var ast = cachedCompose(yaml); // simply walks the tree using current path recursively to the point that
  // path is empty.
  return find(ast);function find(current) {if (current.tag === MAP_TAG) {for (i = 0; i < current.value.length; i++) {var pair = current.value[i];var key = pair[0];var value = pair[1];if (key.value === path[0]) {path.shift();return find(value);}}}if (current.tag === SEQ_TAG) {var item = current.value[path[0]];if (item && item.tag) {path.shift();return find(item);}} // if path is still not empty we were not able to find the node
    if (path.length) {return invalidRange;}return { /* jshint camelcase: false */start: { line: current.start_mark.line, column: current.start_mark.column }, end: { line: current.end_mark.line, column: current.end_mark.column } };}} /**
                                                                                                                                                                                                                                         * Get a JSON Path for position object in the spec
                                                                                                                                                                                                                                         * @param  {string} yaml
                                                                                                                                                                                                                                         * YAML or JSON string
                                                                                                                                                                                                                                         * @param  {object} position
                                                                                                                                                                                                                                         * position in the YAML or JSON string with `line` and `column` properties.
                                                                                                                                                                                                                                         * `line` and `column` number are zero indexed
                                                                                                                                                                                                                                         */function pathForPosition(yaml, position) {// Type check
  if (typeof yaml !== "string") {throw new TypeError("yaml should be a string");}if ((typeof position === "undefined" ? "undefined" : (0, _typeof3.default)(position)) !== "object" || typeof position.line !== "number" || typeof position.column !== "number") {throw new TypeError("position should be an object with line and column" + " properties");}try {var ast = cachedCompose(yaml);} catch (e) {console.error("Error composing AST", e);console.error("Problem area:\n", yaml.split("\n").slice(position.line - 5, position.line + 5).join("\n"));return null;}var path = [];return find(ast); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * recursive find function that finds the node matching the position
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param  {object} current - AST object to serach into
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */function find(current) {// algorythm:
    // is current a promitive?
    //   // finish recursion without modifying the path
    // is current a hash?
    //   // find a key or value that position is in their range
    //     // if key is in range, terminate recursion with exisiting path
    //     // if a value is in range push the corresponding key to the path
    //     //   andcontinue recursion
    // is current an array
    //   // find the item that position is in it"s range and push the index
    //   //  of the item to the path and continue recursion with that item.
    var i = 0;

    if (!current || [MAP_TAG, SEQ_TAG].indexOf(current.tag) === -1) {
      return path;
    }

    if (current.tag === MAP_TAG) {
      for (i = 0; i < current.value.length; i++) {
        var pair = current.value[i];
        var key = pair[0];
        var value = pair[1];

        if (isInRange(key)) {
          return path;
        } else if (isInRange(value)) {
          path.push(key.value);
          return find(value);
        }
      }
    }

    if (current.tag === SEQ_TAG) {
      for (i = 0; i < current.value.length; i++) {
        var item = current.value[i];

        if (isInRange(item)) {
          path.push(i.toString());
          return find(item);
        }
      }
    }

    return path;

    /**
                 * Determines if position is in node"s range
                 * @param  {object}  node - AST node
                 * @return {Boolean}      true if position is in node"s range
                 */
    function isInRange(node) {
      /* jshint camelcase: false */

      // if node is in a single line
      if (node.start_mark.line === node.end_mark.line) {

        return position.line === node.start_mark.line &&
        node.start_mark.column <= position.column &&
        node.end_mark.column >= position.column;
      }

      // if position is in the same line as start_mark
      if (position.line === node.start_mark.line) {
        return position.column >= node.start_mark.column;
      }

      // if position is in the same line as end_mark
      if (position.line === node.end_mark.line) {
        return position.column <= node.end_mark.column;
      }

      // if position is between start and end lines return true, otherwise
      // return false.
      return node.start_mark.line < position.line &&
      node.end_mark.line > position.line;
    }
  }
}

// utility fns


var pathForPositionAsync = exports.pathForPositionAsync = promisifySyncFn(pathForPosition);
var positionRangeForPathAsync = exports.positionRangeForPathAsync = promisifySyncFn(positionRangeForPath);
var getLineNumberForPathAsync = exports.getLineNumberForPathAsync = promisifySyncFn(getLineNumberForPath);

function promisifySyncFn(fn) {
  return function () {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    return new _promise2.default(function (resolve) {return resolve(fn.apply(undefined, args));});
  };
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =


function () {
  return {
    fn: { AST: AST },
    components: { JumpToPath: _jumpToPath2.default } };

};var _ast = __webpack_require__(124);var AST = _interopRequireWildcard(_ast);var _jumpToPath = __webpack_require__(126);var _jumpToPath2 = _interopRequireDefault(_jumpToPath);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Nothing by default- component can be overriden by another plugin.
var
JumpToPath = function (_React$Component) {(0, _inherits3.default)(JumpToPath, _React$Component);function JumpToPath() {(0, _classCallCheck3.default)(this, JumpToPath);return (0, _possibleConstructorReturn3.default)(this, (JumpToPath.__proto__ || (0, _getPrototypeOf2.default)(JumpToPath)).apply(this, arguments));}(0, _createClass3.default)(JumpToPath, [{ key: "render", value: function render()
    {
      return null;
    } }]);return JumpToPath;}(_react2.default.Component);exports.default = JumpToPath;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =




function () {
  return {
    statePlugins: {
      auth: {
        reducers: _reducers2.default,
        actions: actions,
        selectors: selectors },

      spec: {
        wrapActions: specWrapActionReplacements } } };



};var _reducers = __webpack_require__(128);var _reducers2 = _interopRequireDefault(_reducers);var _actions = __webpack_require__(77);var actions = _interopRequireWildcard(_actions);var _selectors = __webpack_require__(129);var selectors = _interopRequireWildcard(_selectors);var _specWrapActions = __webpack_require__(130);var specWrapActionReplacements = _interopRequireWildcard(_specWrapActions);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _SHOW_AUTH_POPUP$AUTH;var _immutable = __webpack_require__(8);var _utils = __webpack_require__(7);


var _actions = __webpack_require__(77);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = (_SHOW_AUTH_POPUP$AUTH = {}, (0, _defineProperty3.default)(_SHOW_AUTH_POPUP$AUTH, _actions.SHOW_AUTH_POPUP,








function (state, _ref) {var payload = _ref.payload;
  return state.set("showDefinitions", payload);
}), (0, _defineProperty3.default)(_SHOW_AUTH_POPUP$AUTH, _actions.AUTHORIZE,

function (state, _ref2) {var payload = _ref2.payload;
  var securities = (0, _immutable.fromJS)(payload);
  var map = state.get("authorized") || (0, _immutable.Map)();

  // refactor withMutations
  securities.entrySeq().forEach(function (_ref3) {var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),key = _ref4[0],security = _ref4[1];
    var type = security.getIn(["schema", "type"]);

    if (type === "apiKey") {
      map = map.set(key, security);
    } else if (type === "basic") {
      var username = security.getIn(["value", "username"]);
      var password = security.getIn(["value", "password"]);

      map = map.setIn([key, "value"], {
        username: username,
        header: "Basic " + (0, _utils.btoa)(username + ":" + password) });


      map = map.setIn([key, "schema"], security.get("schema"));
    }
  });

  return state.set("authorized", map);
}), (0, _defineProperty3.default)(_SHOW_AUTH_POPUP$AUTH, _actions.AUTHORIZE_OAUTH2,

function (state, _ref5) {var payload = _ref5.payload;var
  auth = payload.auth,token = payload.token;
  var parsedAuth = void 0;

  auth.token = token;
  parsedAuth = (0, _immutable.fromJS)(auth);

  return state.setIn(["authorized", parsedAuth.get("name")], parsedAuth);
}), (0, _defineProperty3.default)(_SHOW_AUTH_POPUP$AUTH, _actions.LOGOUT,

function (state, _ref6) {var payload = _ref6.payload;
  var result = state.get("authorized").withMutations(function (authorized) {
    payload.forEach(function (auth) {
      authorized.delete(auth);
    });
  });

  return state.set("authorized", result);
}), (0, _defineProperty3.default)(_SHOW_AUTH_POPUP$AUTH, _actions.CONFIGURE_AUTH,

function (state, _ref7) {var payload = _ref7.payload;
  return state.set("configs", payload);
}), _SHOW_AUTH_POPUP$AUTH);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getConfigs = exports.isAuthorized = exports.authorized = exports.getDefinitionsByNames = exports.definitionsToAuthorize = exports.shownDefinitions = undefined;var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _reselect = __webpack_require__(59);
var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var state = function state(_state) {return _state;};

var shownDefinitions = exports.shownDefinitions = (0, _reselect.createSelector)(
state,
function (auth) {return auth.get("showDefinitions");});


var definitionsToAuthorize = exports.definitionsToAuthorize = (0, _reselect.createSelector)(
state,
function () {return function (_ref) {var specSelectors = _ref.specSelectors;
    var definitions = specSelectors.securityDefinitions();
    var list = (0, _immutable.List)();

    //todo refactor
    definitions.entrySeq().forEach(function (_ref2) {var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),key = _ref3[0],val = _ref3[1];
      var map = (0, _immutable.Map)();

      map = map.set(key, val);
      list = list.push(map);
    });

    return list;
  };});



var getDefinitionsByNames = exports.getDefinitionsByNames = function getDefinitionsByNames(state, securities) {return function (_ref4) {var specSelectors = _ref4.specSelectors;
    var securityDefinitions = specSelectors.securityDefinitions();
    var result = (0, _immutable.List)();

    securities.valueSeq().forEach(function (names) {
      var map = (0, _immutable.Map)();
      names.entrySeq().forEach(function (_ref5) {var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),name = _ref6[0],scopes = _ref6[1];
        var definition = securityDefinitions.get(name);
        var allowedScopes = void 0;

        if (definition.get("type") === "oauth2" && scopes.size) {
          allowedScopes = definition.get("scopes");

          allowedScopes.keySeq().forEach(function (key) {
            if (!scopes.contains(key)) {
              allowedScopes = allowedScopes.delete(key);
            }
          });

          definition = definition.set("allowedScopes", allowedScopes);
        }

        map = map.set(name, definition);
      });

      result = result.push(map);
    });

    return result;
  };};

var authorized = exports.authorized = (0, _reselect.createSelector)(
state,
function (auth) {return auth.get("authorized") || (0, _immutable.Map)();});



var isAuthorized = exports.isAuthorized = function isAuthorized(state, securities) {return function (_ref7) {var authSelectors = _ref7.authSelectors;
    var authorized = authSelectors.authorized();

    if (!_immutable.List.isList(securities)) {
      return null;
    }

    return !!securities.toJS().filter(function (security) {
      var isAuthorized = true;

      return (0, _keys2.default)(security).map(function (key) {
        return !isAuthorized || !!authorized.get(key);
      }).indexOf(false) === -1;
    }).length;
  };};

var getConfigs = exports.getConfigs = (0, _reselect.createSelector)(
state,
function (auth) {return auth.get("configs");});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.execute = undefined;var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Add security to the final `execute` call ( via `extras` )
var execute = exports.execute = function execute(oriAction, _ref) {var authSelectors = _ref.authSelectors,specSelectors = _ref.specSelectors;return function (_ref2) {var path = _ref2.path,method = _ref2.method,operation = _ref2.operation,extras = _ref2.extras;
    var securities = {
      authorized: authSelectors.authorized() && authSelectors.authorized().toJS(),
      definitions: specSelectors.securityDefinitions() && specSelectors.securityDefinitions().toJS(),
      specSecurity: specSelectors.security() && specSelectors.security().toJS() };


    return oriAction((0, _extends3.default)({ path: path, method: method, operation: operation, securities: securities }, extras));
  };};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var setHash = exports.setHash = function setHash(value) {
  if (value) {
    return history.pushState(null, null, "#" + value);
  } else {
    return window.location.hash = "";
  }
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =





function () {
  return {
    statePlugins: {
      spec: {
        wrapActions: specWrapActions },

      layout: {
        wrapActions: layoutWrapActions } } };



};var _specWrapActions = __webpack_require__(134);var specWrapActions = _interopRequireWildcard(_specWrapActions);var _layoutWrapActions = __webpack_require__(133);var layoutWrapActions = _interopRequireWildcard(_layoutWrapActions);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.show = undefined;var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _helpers = __webpack_require__(131);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var show = exports.show = function show(ori, _ref) {var getConfigs = _ref.getConfigs;return function () {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    ori.apply(undefined, args);

    var isDeepLinkingEnabled = getConfigs().deepLinking;
    if (!isDeepLinkingEnabled || isDeepLinkingEnabled === "false") {
      return;
    }

    try {var
      thing = args[0],shown = args[1];var _thing = (0, _slicedToArray3.default)(
      thing, 1),type = _thing[0];

      if (type === "operations-tag" || type === "operations") {
        if (!shown) {
          return (0, _helpers.setHash)("/");
        }

        if (type === "operations") {var _thing2 = (0, _slicedToArray3.default)(
          thing, 3),tag = _thing2[1],operationId = _thing2[2];
          (0, _helpers.setHash)("/" + tag + "/" + operationId);
        }

        if (type === "operations-tag") {var _thing3 = (0, _slicedToArray3.default)(
          thing, 2),_tag = _thing3[1];
          (0, _helpers.setHash)("/" + _tag);
        }
      }

    } catch (e) {
      // This functionality is not mission critical, so if something goes wrong
      // we'll just move on
      console.error(e);
    }
  };};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.updateResolved = undefined;var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _scrollToElement = __webpack_require__(507);var _scrollToElement2 = _interopRequireDefault(_scrollToElement);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var SCROLL_OFFSET = -5;
var hasHashBeenParsed = false;


var updateResolved = exports.updateResolved = function updateResolved(ori, _ref) {var layoutActions = _ref.layoutActions,getConfigs = _ref.getConfigs;return function () {
    ori.apply(undefined, arguments);

    var isDeepLinkingEnabled = getConfigs().deepLinking;
    if (!isDeepLinkingEnabled || isDeepLinkingEnabled === "false") {
      return;
    }

    if (window.location.hash && !hasHashBeenParsed) {
      var hash = window.location.hash.slice(1); // # is first character

      if (hash[0] === "!") {
        // Parse UI 2.x shebangs
        hash = hash.slice(1);
      }

      if (hash[0] === "/") {
        // "/pet/addPet" => "pet/addPet"
        // makes the split result cleaner
        // also handles forgotten leading slash
        hash = hash.slice(1);
      }var _hash$split =

      hash.split("/"),_hash$split2 = (0, _slicedToArray3.default)(_hash$split, 2),tag = _hash$split2[0],operationId = _hash$split2[1];

      if (tag && operationId) {
        // Pre-expand and scroll to the operation
        layoutActions.show(["operations-tag", tag], true);
        layoutActions.show(["operations", tag, operationId], true);

        (0, _scrollToElement2.default)("#operations-" + tag + "-" + operationId, {
          offset: SCROLL_OFFSET });

      } else if (tag) {
        // Pre-expand and scroll to the tag
        layoutActions.show(["operations-tag", tag], true);

        (0, _scrollToElement2.default)("#operations-tag-" + tag, {
          offset: SCROLL_OFFSET });

      }
    }

    hasHashBeenParsed = true;
  };};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);exports.default =




downloadUrlPlugin;var _reselect = __webpack_require__(59);var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /* global Promise */function downloadUrlPlugin(toolbox) {var
  fn = toolbox.fn;

  var actions = {
    download: function download(url) {return function (_ref) {var errActions = _ref.errActions,specSelectors = _ref.specSelectors,specActions = _ref.specActions;var
        fetch = fn.fetch;
        url = url || specSelectors.url();
        specActions.updateLoadingStatus("loading");
        fetch({
          url: url,
          loadSpec: true,
          credentials: "same-origin",
          headers: {
            "Accept": "application/json,*/*" } }).

        then(next, next);

        function next(res) {
          if (res instanceof Error || res.status >= 400) {
            specActions.updateLoadingStatus("failed");
            return errActions.newThrownErr(new Error(res.statusText + " " + url));
          }
          specActions.updateLoadingStatus("success");
          specActions.updateSpec(res.text);
          specActions.updateUrl(url);
        }

      };},

    updateLoadingStatus: function updateLoadingStatus(status) {
      var enums = [null, "loading", "failed", "success", "failedConfig"];
      if (enums.indexOf(status) === -1) {
        console.error("Error: " + status + " is not one of " + (0, _stringify2.default)(enums));
      }

      return {
        type: "spec_update_loading_status",
        payload: status };

    } };


  var reducers = {
    "spec_update_loading_status": function spec_update_loading_status(state, action) {
      return typeof action.payload === "string" ?
      state.set("loadingStatus", action.payload) :
      state;
    } };


  var selectors = {
    loadingStatus: (0, _reselect.createSelector)(
    function (state) {
      return state || (0, _immutable.Map)();
    },
    function (spec) {return spec.get("loadingStatus") || null;}) };



  return {
    statePlugins: {
      spec: { actions: actions, reducers: reducers, selectors: selectors } } };


}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =























transformErrors;var _reduce = __webpack_require__(484);var _reduce2 = _interopRequireDefault(_reduce);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var request = __webpack_require__(493);var errorTransformers = [];request.keys().forEach(function (key) {if (key === "./hook.js") {return;}if (!key.match(/js$/)) {return;}if (key.slice(2).indexOf("/") > -1) {// skip files in subdirs
    return;}errorTransformers.push({ name: toTitleCase(key).replace(".js", "").replace("./", ""), transform: request(key).transform });});function transformErrors(errors, system) {var inputs = {
    jsSpec: system.specSelectors.specJson().toJS() };


  var transformedErrors = (0, _reduce2.default)(errorTransformers, function (result, transformer) {
    try {
      var newlyTransformedErrors = transformer.transform(result, inputs);
      return newlyTransformedErrors.filter(function (err) {return !!err;}); // filter removed errors
    } catch (e) {
      console.error("Transformer error:", e);
      return result;
    }
  }, errors);

  return transformedErrors.
  filter(function (err) {return !!err;}) // filter removed errors
  .map(function (err) {
    if (!err.get("line") && err.get("path")) {
      // TODO: re-resolve line number if we've transformed it away
    }
    return err;
  });

}

function toTitleCase(str) {
  return str.
  split("-").
  map(function (substr) {return substr[0].toUpperCase() + substr.slice(1);}).
  join("");
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.transform = transform;function transform(errors) {
  // JSONSchema refers to the current object being validated
  // as 'instance'. This isn't helpful to users, so we remove it.
  return errors.
  map(function (err) {
    var seekStr = "is not of a type(s)";
    var i = err.get("message").indexOf(seekStr);
    if (i > -1) {
      var types = err.get("message").slice(i + seekStr.length).split(",");
      return err.set("message", err.get("message").slice(0, i) + makeNewMessage(types));
    } else {
      return err;
    }
  });
}

function makeNewMessage(types) {
  return types.reduce(function (p, c, i, arr) {
    if (i === arr.length - 1 && arr.length > 1) {
      return p + "or " + c;
    } else if (arr[i + 1] && arr.length > 2) {
      return p + c + ", ";
    } else if (arr[i + 1]) {
      return p + c + " ";
    } else {
      return p + c;
    }
  }, "should be a");
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.


transform = transform;var _get = __webpack_require__(115);var _get2 = _interopRequireDefault(_get);var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function transform(errors, _ref) {var jsSpec = _ref.jsSpec;
  // LOOK HERE THIS TRANSFORMER IS CURRENTLY DISABLED 😃
  // TODO: finish implementing, fix flattening problem
  /* eslint-disable no-unreachable */
  return errors;


  // JSONSchema gives us very little to go on
  var searchStr = "is not exactly one from <#/definitions/parameter>,<#/definitions/jsonReference>";
  return errors.
  map(function (err) {
    var message = err.get("message");
    var isParameterOneOfError = message.indexOf(searchStr) > -1;
    if (isParameterOneOfError) {
      // try to find what's wrong
      return createTailoredParameterError(err, jsSpec);
    } else {
      return err;
    }
  }).
  flatten(true); // shallow Immutable flatten
}

var VALID_IN_VALUES = ["path", "query", "header", "body", "formData"];
var VALID_COLLECTIONFORMAT_VALUES = ["csv", "ssv", "tsv", "pipes", "multi"];

function createTailoredParameterError(err, jsSpec) {
  var newErrs = [];
  var parameter = (0, _get2.default)(jsSpec, err.get("path"));

  // find addressable cases
  if (parameter.in && VALID_IN_VALUES.indexOf(parameter.in) === -1) {
    var message = "Wrong value for the \"in\" keyword. Expected one of: " + VALID_IN_VALUES.join(", ") + ".";
    newErrs.push({
      message: message,
      path: err.get("path") + ".in",
      type: "spec",
      source: "schema",
      level: "error" });

  }

  if (parameter.collectionFormat && VALID_COLLECTIONFORMAT_VALUES.indexOf(parameter.collectionFormat) === -1) {
    var _message = "Wrong value for the \"collectionFormat\" keyword. Expected one of: " + VALID_COLLECTIONFORMAT_VALUES.join(", ") + ".";
    newErrs.push({
      message: _message,
      path: err.get("path") + ".collectionFormat",
      type: "spec",
      source: "schema",
      level: "error" });

  }

  return newErrs.length ? (0, _immutable.fromJS)(newErrs) : err; // fall back to making no changes

}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.transform = transform;function transform(errors) {
  return errors.
  map(function (err) {
    return err.set("message", removeSubstring(err.get("message"), "instance."));
  });
}

function removeSubstring(str, substr) {
  return str.replace(new RegExp(substr, "g"), "");
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =



function (system) {
  return {
    statePlugins: {
      err: {
        reducers: (0, _reducers2.default)(system),
        actions: actions,
        selectors: selectors } } };



};var _reducers = __webpack_require__(141);var _reducers2 = _interopRequireDefault(_reducers);var _actions = __webpack_require__(60);var actions = _interopRequireWildcard(_actions);var _selectors = __webpack_require__(142);var selectors = _interopRequireWildcard(_selectors);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);exports.default =




















function (system) {var _ref6;
  return _ref6 = {}, (0, _defineProperty3.default)(_ref6, _actions.NEW_THROWN_ERR,
  function (state, _ref) {var payload = _ref.payload;
    var error = (0, _assign2.default)(DEFAULT_ERROR_STRUCTURE, payload, { type: "thrown" });
    return state.
    update("errors", function (errors) {return (errors || (0, _immutable.List)()).push((0, _immutable.fromJS)(error));}).
    update("errors", function (errors) {return (0, _hook2.default)(errors, system.getSystem());});
  }), (0, _defineProperty3.default)(_ref6, _actions.NEW_THROWN_ERR_BATCH,

  function (state, _ref2) {var payload = _ref2.payload;
    payload = payload.map(function (err) {
      return (0, _immutable.fromJS)((0, _assign2.default)(DEFAULT_ERROR_STRUCTURE, err, { type: "thrown" }));
    });
    return state.
    update("errors", function (errors) {return (errors || (0, _immutable.List)()).concat((0, _immutable.fromJS)(payload));}).
    update("errors", function (errors) {return (0, _hook2.default)(errors, system.getSystem());});
  }), (0, _defineProperty3.default)(_ref6, _actions.NEW_SPEC_ERR,

  function (state, _ref3) {var payload = _ref3.payload;
    var error = (0, _immutable.fromJS)(payload);
    error = error.set("type", "spec");
    return state.
    update("errors", function (errors) {return (errors || (0, _immutable.List)()).push((0, _immutable.fromJS)(error)).sortBy(function (err) {return err.get("line");});}).
    update("errors", function (errors) {return (0, _hook2.default)(errors, system.getSystem());});
  }), (0, _defineProperty3.default)(_ref6, _actions.NEW_AUTH_ERR,

  function (state, _ref4) {var payload = _ref4.payload;
    var error = (0, _immutable.fromJS)((0, _assign2.default)({}, payload));

    error = error.set("type", "auth");
    return state.
    update("errors", function (errors) {return (errors || (0, _immutable.List)()).push((0, _immutable.fromJS)(error));}).
    update("errors", function (errors) {return (0, _hook2.default)(errors, system.getSystem());});
  }), (0, _defineProperty3.default)(_ref6, _actions.CLEAR,

  function (state, _ref5) {var payload = _ref5.payload;
    if (!payload) {
      return;
    }
    // TODO: Rework, to use immutable only, no need for lodash
    var newErrors = _immutable2.default.fromJS((0, _reject2.default)((state.get("errors") || (0, _immutable.List)()).toJS(), payload));
    return state.merge({
      errors: newErrors });

  }), _ref6;

};var _actions = __webpack_require__(60);var _reject = __webpack_require__(485);var _reject2 = _interopRequireDefault(_reject);var _immutable = __webpack_require__(8);var _immutable2 = _interopRequireDefault(_immutable);var _hook = __webpack_require__(136);var _hook2 = _interopRequireDefault(_hook);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var DEFAULT_ERROR_STRUCTURE = { // defaults
  line: 0, level: "error", message: "Unknown error" };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.lastError = exports.allErrors = undefined;var _immutable = __webpack_require__(8);
var _reselect = __webpack_require__(59);

var state = function state(_state) {return _state;};

var allErrors = exports.allErrors = (0, _reselect.createSelector)(
state,
function (err) {return err.get("errors", (0, _immutable.List)());});


var lastError = exports.lastError = (0, _reselect.createSelector)(
allErrors,
function (all) {return all.last();});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =



function () {
  return {
    statePlugins: {
      layout: {
        reducers: _reducers2.default,
        actions: actions,
        selectors: selectors } } };



};var _reducers = __webpack_require__(144);var _reducers2 = _interopRequireDefault(_reducers);var _actions = __webpack_require__(78);var actions = _interopRequireWildcard(_actions);var _selectors = __webpack_require__(145);var selectors = _interopRequireWildcard(_selectors);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _UPDATE_LAYOUT$UPDATE;var _actions = __webpack_require__(78);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = (_UPDATE_LAYOUT$UPDATE = {}, (0, _defineProperty3.default)(_UPDATE_LAYOUT$UPDATE, _actions.UPDATE_LAYOUT,








function (state, action) {return state.set("layout", action.payload);}), (0, _defineProperty3.default)(_UPDATE_LAYOUT$UPDATE, _actions.UPDATE_FILTER,

function (state, action) {return state.set("filter", action.payload);}), (0, _defineProperty3.default)(_UPDATE_LAYOUT$UPDATE, _actions.SHOW,

function (state, action) {
  var thing = action.payload.thing;
  var shown = action.payload.shown;
  return state.setIn(["shown"].concat(thing), shown);
}), (0, _defineProperty3.default)(_UPDATE_LAYOUT$UPDATE, _actions.UPDATE_MODE,

function (state, action) {
  var thing = action.payload.thing;
  var mode = action.payload.mode;
  return state.setIn(["modes"].concat(thing), (mode || "") + "");
}), _UPDATE_LAYOUT$UPDATE);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.showSummary = exports.whatMode = exports.isShown = exports.currentFilter = exports.current = undefined;var _toConsumableArray2 = __webpack_require__(83);var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _reselect = __webpack_require__(59);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var state = function state(_state) {return _state;};

var current = exports.current = function current(state) {return state.get("layout");};

var currentFilter = exports.currentFilter = function currentFilter(state) {return state.get("filter");};

var isShown = exports.isShown = function isShown(state, thing, def) {
  thing = (0, _utils.normalizeArray)(thing);
  return Boolean(state.getIn(["shown"].concat((0, _toConsumableArray3.default)(thing)), def));
};

var whatMode = exports.whatMode = function whatMode(state, thing) {var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  thing = (0, _utils.normalizeArray)(thing);
  return state.getIn(["modes"].concat((0, _toConsumableArray3.default)(thing)), def);
};

var showSummary = exports.showSummary = (0, _reselect.createSelector)(
state,
function (state) {return !isShown(state, "editor");});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (_ref) {var configs = _ref.configs;

  var levels = {
    "debug": 0,
    "info": 1,
    "log": 2,
    "warn": 3,
    "error": 4 };


  var getLevel = function getLevel(level) {return levels[level] || -1;};var

  logLevel = configs.logLevel;
  var logLevelInt = getLevel(logLevel);

  function log(level) {var _console;for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}
    if (getLevel(level) >= logLevelInt)
      // eslint-disable-next-line no-console
      (_console = console)[level].apply(_console, args);
  }

  log.warn = log.bind(null, "warn");
  log.error = log.bind(null, "error");
  log.info = log.bind(null, "info");
  log.debug = log.bind(null, "debug");

  return { rootInjects: { log: log } };
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =

function () {
  return { fn: fn };
};var _fn = __webpack_require__(79);var fn = _interopRequireWildcard(_fn);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =




function () {
  return {
    statePlugins: {
      spec: {
        wrapActions: wrapActions,
        reducers: _reducers2.default,
        actions: actions,
        selectors: selectors } } };



};var _reducers = __webpack_require__(149);var _reducers2 = _interopRequireDefault(_reducers);var _actions = __webpack_require__(80);var actions = _interopRequireWildcard(_actions);var _selectors = __webpack_require__(150);var selectors = _interopRequireWildcard(_selectors);var _wrapActions = __webpack_require__(151);var wrapActions = _interopRequireWildcard(_wrapActions);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _toConsumableArray2 = __webpack_require__(83);var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _UPDATE_SPEC$UPDATE_U;var _immutable = __webpack_require__(8);var _utils = __webpack_require__(7);

var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);

var _actions = __webpack_require__(80);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = (_UPDATE_SPEC$UPDATE_U = {}, (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.UPDATE_SPEC,

















function (state, action) {
  return typeof action.payload === "string" ?
  state.set("spec", action.payload) :
  state;
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.UPDATE_URL,

function (state, action) {
  return state.set("url", action.payload + "");
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.UPDATE_JSON,

function (state, action) {
  return state.set("json", (0, _utils.fromJSOrdered)(action.payload));
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.UPDATE_RESOLVED,

function (state, action) {
  return state.setIn(["resolved"], (0, _utils.fromJSOrdered)(action.payload));
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.UPDATE_PARAM,

function (state, _ref) {var payload = _ref.payload;var
  path = payload.path,paramName = payload.paramName,value = payload.value,isXml = payload.isXml;
  return state.updateIn(["resolved", "paths"].concat((0, _toConsumableArray3.default)(path), ["parameters"]), (0, _immutable.fromJS)([]), function (parameters) {
    var index = parameters.findIndex(function (p) {return p.get("name") === paramName;});
    if (!(value instanceof _window2.default.File)) {
      value = (0, _utils.fromJSOrdered)(value);
    }
    return parameters.setIn([index, isXml ? "value_xml" : "value"], value);
  });
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.VALIDATE_PARAMS,

function (state, _ref2) {var pathMethod = _ref2.payload.pathMethod;
  var operation = state.getIn(["resolved", "paths"].concat((0, _toConsumableArray3.default)(pathMethod)));
  var isXml = /xml/i.test(operation.get("consumes_value"));

  return state.updateIn(["resolved", "paths"].concat((0, _toConsumableArray3.default)(pathMethod), ["parameters"]), (0, _immutable.fromJS)([]), function (parameters) {
    return parameters.withMutations(function (parameters) {
      for (var i = 0, len = parameters.count(); i < len; i++) {
        var errors = (0, _utils.validateParam)(parameters.get(i), isXml);
        parameters.setIn([i, "errors"], (0, _immutable.fromJS)(errors));
      }
    });
  });
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.ClEAR_VALIDATE_PARAMS,
function (state, _ref3) {var pathMethod = _ref3.payload.pathMethod;
  return state.updateIn(["resolved", "paths"].concat((0, _toConsumableArray3.default)(pathMethod), ["parameters"]), (0, _immutable.fromJS)([]), function (parameters) {
    return parameters.withMutations(function (parameters) {
      for (var i = 0, len = parameters.count(); i < len; i++) {
        parameters.setIn([i, "errors"], (0, _immutable.fromJS)({}));
      }
    });
  });
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.SET_RESPONSE,

function (state, _ref4) {var _ref4$payload = _ref4.payload,res = _ref4$payload.res,path = _ref4$payload.path,method = _ref4$payload.method;
  var result = void 0;
  if (res.error) {
    result = (0, _assign2.default)({
      error: true,
      name: res.err.name,
      message: res.err.message,
      statusCode: res.err.statusCode },
    res.err.response);
  } else {
    result = res;
  }

  // Ensure headers
  result.headers = result.headers || {};

  var newState = state.setIn(["responses", path, method], (0, _utils.fromJSOrdered)(result));

  // ImmutableJS messes up Blob. Needs to reset its value.
  if (_window2.default.Blob && res.data instanceof _window2.default.Blob) {
    newState = newState.setIn(["responses", path, method, "text"], res.data);
  }
  return newState;
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.SET_REQUEST,

function (state, _ref5) {var _ref5$payload = _ref5.payload,req = _ref5$payload.req,path = _ref5$payload.path,method = _ref5$payload.method;
  return state.setIn(["requests", path, method], (0, _utils.fromJSOrdered)(req));
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.UPDATE_OPERATION_VALUE,

function (state, _ref6) {var _ref6$payload = _ref6.payload,path = _ref6$payload.path,value = _ref6$payload.value,key = _ref6$payload.key;
  var operationPath = ["resolved", "paths"].concat((0, _toConsumableArray3.default)(path));
  if (!state.getIn(operationPath)) {
    return state;
  }
  return state.setIn([].concat((0, _toConsumableArray3.default)(operationPath), [key]), (0, _immutable.fromJS)(value));
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.CLEAR_RESPONSE,

function (state, _ref7) {var _ref7$payload = _ref7.payload,path = _ref7$payload.path,method = _ref7$payload.method;
  return state.deleteIn(["responses", path, method]);
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.CLEAR_REQUEST,

function (state, _ref8) {var _ref8$payload = _ref8.payload,path = _ref8$payload.path,method = _ref8$payload.method;
  return state.deleteIn(["requests", path, method]);
}), (0, _defineProperty3.default)(_UPDATE_SPEC$UPDATE_U, _actions.SET_SCHEME,

function (state, _ref9) {var _ref9$payload = _ref9.payload,scheme = _ref9$payload.scheme,path = _ref9$payload.path,method = _ref9$payload.method;
  if (path && method) {
    return state.setIn(["scheme", path, method], scheme);
  }

  if (!path && !method) {
    return state.setIn(["scheme", "_defaultScheme"], scheme);
  }

}), _UPDATE_SPEC$UPDATE_U);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.validateBeforeExecute = exports.canExecuteScheme = exports.operationScheme = exports.hasHost = exports.allowTryItOutFor = exports.requestFor = exports.responseFor = exports.requests = exports.responses = exports.taggedOperations = exports.operationsWithTags = exports.tagDetails = exports.tags = exports.operationsWithRootInherited = exports.schemes = exports.host = exports.basePath = exports.definitions = exports.findDefinition = exports.securityDefinitions = exports.security = exports.produces = exports.consumes = exports.operations = exports.paths = exports.semver = exports.version = exports.externalDocs = exports.info = exports.spec = exports.specResolved = exports.specJson = exports.specSource = exports.specStr = exports.url = exports.lastError = undefined;var _toConsumableArray2 = __webpack_require__(83);var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);exports.



















































































































































































































































getParameter = getParameter;exports.















parameterValues = parameterValues;exports.








parametersIncludeIn = parametersIncludeIn;exports.






parametersIncludeType = parametersIncludeType;exports.






contentTypeValues = contentTypeValues;exports.

















operationConsumes = operationConsumes;var _reselect = __webpack_require__(59);var _utils = __webpack_require__(7);var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var DEFAULT_TAG = "default";var OPERATION_METHODS = ["get", "put", "post", "delete", "options", "head", "patch"];var state = function state(_state) {return _state || (0, _immutable.Map)();};var lastError = exports.lastError = (0, _reselect.createSelector)(state, function (spec) {return spec.get("lastError");});var url = exports.url = (0, _reselect.createSelector)(state, function (spec) {return spec.get("url");});var specStr = exports.specStr = (0, _reselect.createSelector)(state, function (spec) {return spec.get("spec") || "";});var specSource = exports.specSource = (0, _reselect.createSelector)(state, function (spec) {return spec.get("specSource") || "not-editor";});var specJson = exports.specJson = (0, _reselect.createSelector)(state, function (spec) {return spec.get("json", (0, _immutable.Map)());});var specResolved = exports.specResolved = (0, _reselect.createSelector)(state, function (spec) {return spec.get("resolved", (0, _immutable.Map)());}); // Default Spec ( as an object )
var spec = exports.spec = function spec(state) {var res = specResolved(state);return res;};var info = exports.info = (0, _reselect.createSelector)(spec, function (spec) {return returnSelfOrNewMap(spec && spec.get("info"));});var externalDocs = exports.externalDocs = (0, _reselect.createSelector)(spec, function (spec) {return returnSelfOrNewMap(spec && spec.get("externalDocs"));});var version = exports.version = (0, _reselect.createSelector)(info, function (info) {return info && info.get("version");});var semver = exports.semver = (0, _reselect.createSelector)(version, function (version) {return (/v?([0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(version).slice(1));});var paths = exports.paths = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("paths");});var operations = exports.operations = (0, _reselect.createSelector)(paths, function (paths) {if (!paths || paths.size < 1) return (0, _immutable.List)();var list = (0, _immutable.List)();if (!paths || !paths.forEach) {return (0, _immutable.List)();}paths.forEach(function (path, pathName) {if (!path || !path.forEach) {return {};}path.forEach(function (operation, method) {if (OPERATION_METHODS.indexOf(method) === -1) {return;}list = list.push((0, _immutable.fromJS)({ path: pathName, method: method, operation: operation, id: method + "-" + pathName }));});});return list;});var consumes = exports.consumes = (0, _reselect.createSelector)(spec, function (spec) {return (0, _immutable.Set)(spec.get("consumes"));});var produces = exports.produces = (0, _reselect.createSelector)(spec, function (spec) {return (0, _immutable.Set)(spec.get("produces"));});var security = exports.security = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("security", (0, _immutable.List)());});var securityDefinitions = exports.securityDefinitions = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("securityDefinitions");});var findDefinition = exports.findDefinition = function findDefinition(state, name) {return specResolved(state).getIn(["definitions", name], null);};var definitions = exports.definitions = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("definitions") || (0, _immutable.Map)();});var basePath = exports.basePath = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("basePath");});var host = exports.host = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("host");});var schemes = exports.schemes = (0, _reselect.createSelector)(spec, function (spec) {return spec.get("schemes", (0, _immutable.Map)());});var operationsWithRootInherited = exports.operationsWithRootInherited = (0, _reselect.createSelector)(operations, consumes, produces, function (operations, consumes, produces) {return operations.map(function (ops) {return ops.update("operation", function (op) {if (op) {if (!_immutable.Map.isMap(op)) {return;}return op.withMutations(function (op) {if (!op.get("consumes")) {op.update("consumes", function (a) {return (0, _immutable.Set)(a).merge(consumes);});}if (!op.get("produces")) {op.update("produces", function (a) {return (0, _immutable.Set)(a).merge(produces);});}return op;});} else {// return something with Immutable methods
        return (0, _immutable.Map)();}});});});var tags = exports.tags = (0, _reselect.createSelector)(spec, function (json) {return json.get("tags", (0, _immutable.List)());});var tagDetails = exports.tagDetails = function tagDetails(state, tag) {var currentTags = tags(state) || (0, _immutable.List)();return currentTags.filter(_immutable.Map.isMap).find(function (t) {return t.get("name") === tag;}, (0, _immutable.Map)());};var operationsWithTags = exports.operationsWithTags = (0, _reselect.createSelector)(operationsWithRootInherited, tags, function (operations, tags) {return operations.reduce(function (taggedMap, op) {var tags = (0, _immutable.Set)(op.getIn(["operation", "tags"]));if (tags.count() < 1) return taggedMap.update(DEFAULT_TAG, (0, _immutable.List)(), function (ar) {return ar.push(op);});return tags.reduce(function (res, tag) {return res.update(tag, (0, _immutable.List)(), function (ar) {return ar.push(op);});}, taggedMap);}, tags.reduce(function (taggedMap, tag) {return taggedMap.set(tag.get("name"), (0, _immutable.List)());}, (0, _immutable.OrderedMap)()));});var taggedOperations = exports.taggedOperations = function taggedOperations(state) {return function (_ref) {var getConfigs = _ref.getConfigs;var _getConfigs = getConfigs(),tagsSorter = _getConfigs.tagsSorter,operationsSorter = _getConfigs.operationsSorter;return operationsWithTags(state).sortBy(function (val, key) {return key;}, // get the name of the tag to be passed to the sorter
    function (tagA, tagB) {var sortFn = typeof tagsSorter === "function" ? tagsSorter : _utils.sorters.tagsSorter[tagsSorter];return !sortFn ? null : sortFn(tagA, tagB);}).map(function (ops, tag) {var sortFn = typeof operationsSorter === "function" ? operationsSorter : _utils.sorters.operationsSorter[operationsSorter];var operations = !sortFn ? ops : ops.sort(sortFn);return (0, _immutable.Map)({ tagDetails: tagDetails(state, tag), operations: operations });});};};var responses = exports.responses = (0, _reselect.createSelector)(state, function (state) {return state.get("responses", (0, _immutable.Map)());});var requests = exports.requests = (0, _reselect.createSelector)(state, function (state) {return state.get("requests", (0, _immutable.Map)());});var responseFor = exports.responseFor = function responseFor(state, path, method) {return responses(state).getIn([path, method], null);};var requestFor = exports.requestFor = function requestFor(state, path, method) {return requests(state).getIn([path, method], null);};var allowTryItOutFor = exports.allowTryItOutFor = function allowTryItOutFor() {// This is just a hook for now.
  return true;}; // Get the parameter value by parameter name
function getParameter(state, pathMethod, name) {var params = spec(state).getIn(["paths"].concat((0, _toConsumableArray3.default)(pathMethod), ["parameters"]), (0, _immutable.fromJS)([]));return params.filter(function (p) {return _immutable.Map.isMap(p) && p.get("name") === name;}).first();}var hasHost = exports.hasHost = (0, _reselect.createSelector)(spec, function (spec) {var host = spec.get("host");return typeof host === "string" && host.length > 0 && host[0] !== "/";}); // Get the parameter values, that the user filled out
function parameterValues(state, pathMethod, isXml) {var params = spec(state).getIn(["paths"].concat((0, _toConsumableArray3.default)(pathMethod), ["parameters"]), (0, _immutable.fromJS)([]));return params.reduce(function (hash, p) {var value = isXml && p.get("in") === "body" ? p.get("value_xml") : p.get("value");return hash.set(p.get("name"), value);}, (0, _immutable.fromJS)({}));} // True if any parameter includes `in: ?`
function parametersIncludeIn(parameters) {var inValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";if (_immutable.List.isList(parameters)) {return parameters.some(function (p) {return _immutable.Map.isMap(p) && p.get("in") === inValue;});}} // True if any parameter includes `type: ?`
function parametersIncludeType(parameters) {var typeValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";if (_immutable.List.isList(parameters)) {return parameters.some(function (p) {return _immutable.Map.isMap(p) && p.get("type") === typeValue;});}} // Get the consumes/produces value that the user selected
function contentTypeValues(state, pathMethod) {var op = spec(state).getIn(["paths"].concat((0, _toConsumableArray3.default)(pathMethod)), (0, _immutable.fromJS)({}));var parameters = op.get("parameters") || new _immutable.List();var requestContentType = op.get("consumes_value") ? op.get("consumes_value") : parametersIncludeType(parameters, "file") ? "multipart/form-data" : parametersIncludeType(parameters, "formData") ? "application/x-www-form-urlencoded" : undefined;return (0, _immutable.fromJS)({ requestContentType: requestContentType, responseContentType: op.get("produces_value") });} // Get the consumes/produces by path
function operationConsumes(state, pathMethod) {return spec(state).getIn(["paths"].concat((0, _toConsumableArray3.default)(pathMethod), ["consumes"]), (0, _immutable.fromJS)({}));}var operationScheme = exports.operationScheme = function operationScheme(state, path, method) {var url = state.get("url");var matchResult = url.match(/^([a-z][a-z0-9+\-.]*):/);var urlScheme = Array.isArray(matchResult) ? matchResult[1] : null;return state.getIn(["scheme", path, method]) || state.getIn(["scheme", "_defaultScheme"]) || urlScheme || "";};

var canExecuteScheme = exports.canExecuteScheme = function canExecuteScheme(state, path, method) {
  return ["http", "https"].indexOf(operationScheme(state, path, method)) > -1;
};

var validateBeforeExecute = exports.validateBeforeExecute = function validateBeforeExecute(state, pathMethod) {
  var params = spec(state).getIn(["paths"].concat((0, _toConsumableArray3.default)(pathMethod), ["parameters"]), (0, _immutable.fromJS)([]));
  var isValid = true;

  params.forEach(function (p) {
    var errors = p.get("errors");
    if (errors && errors.count()) {
      isValid = false;
    }
  });

  return isValid;
};

function returnSelfOrNewMap(obj) {
  // returns obj if obj is an Immutable map, else returns a new Map
  return _immutable.Map.isMap(obj) ? obj : new _immutable.Map();
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var updateSpec = exports.updateSpec = function updateSpec(ori, _ref) {var specActions = _ref.specActions;return function () {
    ori.apply(undefined, arguments);
    specActions.parseToJson.apply(specActions, arguments);
  };};

var updateJsonSpec = exports.updateJsonSpec = function updateJsonSpec(ori, _ref2) {var specActions = _ref2.specActions;return function () {
    ori.apply(undefined, arguments);
    specActions.resolveSpec.apply(specActions, arguments);
  };};

// Log the request ( just for debugging, shouldn't affect prod )
var executeRequest = exports.executeRequest = function executeRequest(ori, _ref3) {var specActions = _ref3.specActions;return function (req) {
    specActions.logRequest(req);
    return ori(req);
  };};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactSplitPane = __webpack_require__(503);var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);
__webpack_require__(360);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var MODE_KEY = ["split-pane-mode"];
var MODE_LEFT = "left";
var MODE_RIGHT = "right";
var MODE_BOTH = "both"; // or anything other than left/right
var
SplitPaneMode = function (_React$Component) {(0, _inherits3.default)(SplitPaneMode, _React$Component);function SplitPaneMode() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, SplitPaneMode);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SplitPaneMode.__proto__ || (0, _getPrototypeOf2.default)(SplitPaneMode)).call.apply(_ref, [this].concat(args))), _this), _this.















    initializeComponent = function (c) {
      _this.splitPane = c;
    }, _this.

    onDragFinished = function () {var _this$props =
      _this.props,threshold = _this$props.threshold,layoutActions = _this$props.layoutActions;var _this$splitPane$state =
      _this.splitPane.state,position = _this$splitPane$state.position,draggedSize = _this$splitPane$state.draggedSize;
      _this.draggedSize = draggedSize;

      var nearLeftEdge = position <= threshold;
      var nearRightEdge = draggedSize <= threshold;

      layoutActions.
      changeMode(MODE_KEY,
      nearLeftEdge ?
      MODE_RIGHT : nearRightEdge ?
      MODE_LEFT : MODE_BOTH);

    }, _this.

    sizeFromMode = function (mode, defaultSize) {
      if (mode === MODE_LEFT) {
        _this.draggedSize = null;
        return "0px";
      } else if (mode === MODE_RIGHT) {
        _this.draggedSize = null;
        return "100%";
      }
      // mode === "both"
      return _this.draggedSize || defaultSize;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(SplitPaneMode, [{ key: "render", value: function render()

    {var _props =
      this.props,children = _props.children,layoutSelectors = _props.layoutSelectors;

      var mode = layoutSelectors.whatMode(MODE_KEY);
      var left = mode === MODE_RIGHT ? _react2.default.createElement("noscript", null) : children[0];
      var right = mode === MODE_LEFT ? _react2.default.createElement("noscript", null) : children[1];
      var size = this.sizeFromMode(mode, "50%");

      return (
        _react2.default.createElement(_reactSplitPane2.default, {
            disabledClass: "",
            ref: this.initializeComponent,
            split: "vertical",
            defaultSize: "50%",
            primary: "second",
            minSize: 0,
            size: size,
            onDragFinished: this.onDragFinished,
            allowResize: mode !== MODE_LEFT && mode !== MODE_RIGHT,
            resizerStyle: { "flex": "0 0 auto", "position": "relative" } },

          left,
          right));


    } }]);return SplitPaneMode;}(_react2.default.Component);SplitPaneMode.propTypes = { threshold: _propTypes2.default.number, children: _propTypes2.default.array, layoutSelectors: _propTypes2.default.object.isRequired, layoutActions: _propTypes2.default.object.isRequired };SplitPaneMode.defaultProps = { threshold: 100, // in pixels
  children: [] };exports.default = SplitPaneMode;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =

SplitPaneModePlugin;var _components = __webpack_require__(81);var components = _interopRequireWildcard(_components);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function SplitPaneModePlugin() {
  return {
    // statePlugins: {
    //   layout: {
    //     actions,
    //     selectors,
    //   }
    // },

    components: components };

}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _swaggerClient = __webpack_require__(216);var _swaggerClient2 = _interopRequireDefault(_swaggerClient);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

module.exports = function (_ref) {var configs = _ref.configs;
  return {
    fn: {
      fetch: _swaggerClient2.default.makeHttp(configs.preFetch, configs.postFetch),
      buildRequest: _swaggerClient2.default.buildRequest,
      execute: _swaggerClient2.default.execute,
      resolve: _swaggerClient2.default.resolve,
      serializeRes: _swaggerClient2.default.serializeRes,
      opId: _swaggerClient2.default.helpers.opId } };


};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =


function () {
  return {
    fn: { shallowEqualKeys: _utils.shallowEqualKeys, transformPathToArray: _pathTranslator.transformPathToArray } };

};var _utils = __webpack_require__(7);var _pathTranslator = __webpack_require__(267);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =


function (_ref) {var getComponents = _ref.getComponents,getStore = _ref.getStore,getSystem = _ref.getSystem;var

  getComponent = rootInjects.getComponent,render = rootInjects.render,makeMappedContainer = rootInjects.makeMappedContainer;

  // getComponent should be passed into makeMappedContainer, _already_ memoized... otherwise we have a big performance hit ( think, really big )
  var memGetComponent = (0, _utils.memoize)(getComponent.bind(null, getSystem, getStore, getComponents));
  var memMakeMappedContainer = (0, _utils.memoize)(makeMappedContainer.bind(null, getSystem, getStore, memGetComponent, getComponents));

  return {
    rootInjects: {
      getComponent: memGetComponent,
      makeMappedContainer: memMakeMappedContainer,
      render: render.bind(null, getSystem, getStore, getComponent, getComponents) } };


};var _rootInjects = __webpack_require__(157);var rootInjects = _interopRequireWildcard(_rootInjects);var _utils = __webpack_require__(7);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getComponent = exports.render = exports.makeMappedContainer = undefined;var _typeof2 = __webpack_require__(24);var _typeof3 = _interopRequireDefault(_typeof2);var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(500);var _reactDom2 = _interopRequireDefault(_reactDom);
var _reactRedux = __webpack_require__(501);
var _omit = __webpack_require__(482);var _omit2 = _interopRequireDefault(_omit);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var SystemWrapper = function SystemWrapper(getSystem, ComponentToWrap) {return function (_Component) {(0, _inherits3.default)(_class, _Component);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));}(0, _createClass3.default)(_class, [{ key: "render", value: function render()
      {
        return _react2.default.createElement(ComponentToWrap, (0, _extends3.default)({}, getSystem(), this.props, this.context));
      } }]);return _class;}(_react.Component);};


var RootWrapper = function RootWrapper(reduxStore, ComponentToWrap) {return function (_Component2) {(0, _inherits3.default)(_class2, _Component2);function _class2() {(0, _classCallCheck3.default)(this, _class2);return (0, _possibleConstructorReturn3.default)(this, (_class2.__proto__ || (0, _getPrototypeOf2.default)(_class2)).apply(this, arguments));}(0, _createClass3.default)(_class2, [{ key: "render", value: function render()
      {
        return (
          _react2.default.createElement(_reactRedux.Provider, { store: reduxStore },
            _react2.default.createElement(ComponentToWrap, (0, _extends3.default)({}, this.props, this.context))));


      } }]);return _class2;}(_react.Component);};


var makeContainer = function makeContainer(getSystem, component, reduxStore) {
  var wrappedWithSystem = SystemWrapper(getSystem, component, reduxStore);
  var connected = (0, _reactRedux.connect)(function (state) {return { state: state };})(wrappedWithSystem);
  if (reduxStore)
  return RootWrapper(reduxStore, connected);
  return connected;
};

var handleProps = function handleProps(getSystem, mapping, props, oldProps) {
  for (var prop in mapping) {
    var fn = mapping[prop];
    if (typeof fn === "function")
    fn(props[prop], oldProps[prop], getSystem());
  }
};

var makeMappedContainer = exports.makeMappedContainer = function makeMappedContainer(getSystem, getStore, memGetComponent, getComponents, componentName, mapping) {

  return function (_Component3) {(0, _inherits3.default)(_class3, _Component3);

    function _class3(props, context) {(0, _classCallCheck3.default)(this, _class3);var _this3 = (0, _possibleConstructorReturn3.default)(this, (_class3.__proto__ || (0, _getPrototypeOf2.default)(_class3)).call(this,
      props, context));
      handleProps(getSystem, mapping, props, {});return _this3;
    }(0, _createClass3.default)(_class3, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(

      nextProps) {
        handleProps(getSystem, mapping, nextProps, this.props);
      } }, { key: "render", value: function render()

      {
        var cleanProps = (0, _omit2.default)(this.props, mapping ? (0, _keys2.default)(mapping) : []);
        var Comp = memGetComponent(componentName, "root");
        return _react2.default.createElement(Comp, cleanProps);
      } }]);return _class3;}(_react.Component);



};

var render = exports.render = function render(getSystem, getStore, getComponent, getComponents, dom) {
  var domNode = document.querySelector(dom);
  var App = getComponent(getSystem, getStore, getComponents, "App", "root");
  _reactDom2.default.render(_react2.default.createElement(App, null), domNode);
};

// Render try/catch wrapper
var createClass = function createClass(component) {return function (_Component4) {(0, _inherits3.default)(_class4, _Component4);function _class4() {(0, _classCallCheck3.default)(this, _class4);return (0, _possibleConstructorReturn3.default)(this, (_class4.__proto__ || (0, _getPrototypeOf2.default)(_class4)).apply(this, arguments));}(0, _createClass3.default)(_class4, [{ key: "render", value: function render()
      {
        return component(this.props);
      } }]);return _class4;}(_react.Component);};


var Fallback = function Fallback(_ref) {var name = _ref.name;return _react2.default.createElement("div", { style: { // eslint-disable-line react/prop-types
        padding: "1em",
        "color": "#aaa" } }, "\uD83D\uDE31 ",
    _react2.default.createElement("i", null, "Could not render ", name === "t" ? "this component" : name, ", see the console."));};

var wrapRender = function wrapRender(component) {
  var isStateless = function isStateless(component) {return !(component.prototype && component.prototype.isReactComponent);};

  var target = isStateless(component) ? createClass(component) : component;

  var ori = target.prototype.render;

  target.prototype.render = function render() {
    try {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      return ori.apply(this, args);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      return _react2.default.createElement(Fallback, { error: error, name: target.name });
    }
  };

  return target;
};


var getComponent = exports.getComponent = function getComponent(getSystem, getStore, getComponents, componentName, container) {

  if (typeof componentName !== "string")
  throw new TypeError("Need a string, to fetch a component. Was given a " + (typeof componentName === "undefined" ? "undefined" : (0, _typeof3.default)(componentName)));

  var component = getComponents(componentName);

  if (!component) {
    getSystem().log.warn("Could not find component", componentName);
    return null;
  }

  if (!container)
  return wrapRender(component);

  if (container === "root")
  return makeContainer(getSystem, component, getStore());

  // container == truthy
  return makeContainer(getSystem, component);
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(285), __esModule: true };

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14).document && document.documentElement;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(25) && !__webpack_require__(37)(function(){
  return Object.defineProperty(__webpack_require__(87)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(39)
  , ITERATOR   = __webpack_require__(10)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(62)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(171)
  , hide           = __webpack_require__(31)
  , has            = __webpack_require__(30)
  , Iterators      = __webpack_require__(39)
  , $iterCreate    = __webpack_require__(300)
  , setToStringTag = __webpack_require__(64)
  , getPrototypeOf = __webpack_require__(168)
  , ITERATOR       = __webpack_require__(10)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(10)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(63)
  , createDesc     = __webpack_require__(44)
  , toIObject      = __webpack_require__(32)
  , toPrimitive    = __webpack_require__(95)
  , has            = __webpack_require__(30)
  , IE8_DOM_DEFINE = __webpack_require__(160)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(169)
  , hiddenKeys = __webpack_require__(88).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(30)
  , toObject    = __webpack_require__(45)
  , IE_PROTO    = __webpack_require__(91)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(30)
  , toIObject    = __webpack_require__(32)
  , arrayIndexOf = __webpack_require__(294)(false)
  , IE_PROTO     = __webpack_require__(91)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(20)
  , core    = __webpack_require__(9)
  , fails   = __webpack_require__(37);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(36)
  , invoke             = __webpack_require__(298)
  , html               = __webpack_require__(159)
  , cel                = __webpack_require__(87)
  , global             = __webpack_require__(14)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(43)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 173 */
/***/ (function(module, exports) {



/***/ }),
/* 174 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(15)
  , core      = __webpack_require__(48)
  , hide      = __webpack_require__(41)
  , redefine  = __webpack_require__(69)
  , ctx       = __webpack_require__(49)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own)redefine(target, key, out);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ }),
/* 176 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(178)
  , $export        = __webpack_require__(175)
  , redefine       = __webpack_require__(69)
  , hide           = __webpack_require__(41)
  , has            = __webpack_require__(176)
  , Iterators      = __webpack_require__(50)
  , $iterCreate    = __webpack_require__(339)
  , setToStringTag = __webpack_require__(102)
  , getProto       = __webpack_require__(33).getProto
  , ITERATOR       = __webpack_require__(13)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(16);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(399),
    isArguments = __webpack_require__(116),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(117),
    isIndex = __webpack_require__(111),
    isTypedArray = __webpack_require__(208);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(187),
    eq = __webpack_require__(55);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(192);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(106),
    isArray = __webpack_require__(11);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(385),
    isObject = __webpack_require__(22),
    isObjectLike = __webpack_require__(57);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(71),
    deburr = __webpack_require__(475),
    words = __webpack_require__(491);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(365),
    arraySome = __webpack_require__(185),
    cacheHas = __webpack_require__(403);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(213)))

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(188),
    getSymbolsIn = __webpack_require__(197),
    keysIn = __webpack_require__(209);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(114);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(106),
    getPrototype = __webpack_require__(196),
    getSymbols = __webpack_require__(110),
    stubArray = __webpack_require__(211);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(361),
    Map = __webpack_require__(103),
    Promise = __webpack_require__(363),
    Set = __webpack_require__(364),
    WeakMap = __webpack_require__(366),
    baseGetTag = __webpack_require__(51),
    toSource = __webpack_require__(204);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 203 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(419),
    findIndex = __webpack_require__(476);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(51),
    isObject = __webpack_require__(22);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(388),
    baseUnary = __webpack_require__(401),
    nodeUtil = __webpack_require__(455);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(183),
    baseKeysIn = __webpack_require__(390),
    isArrayLike = __webpack_require__(56);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(104);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(418);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("deep-extend");

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("react-collapse");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("swagger-client");

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);var _typeof2 = __webpack_require__(24);var _typeof3 = _interopRequireDefault(_typeof2);var _deepExtend = __webpack_require__(214);var _deepExtend2 = _interopRequireDefault(_deepExtend);var _system = __webpack_require__(271);var _system2 = _interopRequireDefault(_system);var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);var _apis = __webpack_require__(268);var _apis2 = _interopRequireDefault(_apis);var _all = __webpack_require__(123);var




AllPlugins = _interopRequireWildcard(_all);var _utils = __webpack_require__(7);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var CONFIGS = [
"url",
"urls",
"urls.primaryName",
"spec",
"validatorUrl",
"onComplete",
"onFailure",
"authorizations",
"docExpansion",
"tagsSorter",
"maxDisplayedTags",
"filter",
"operationsSorter",
"supportedSubmitMethods",
"dom_id",
"defaultModelRendering",
"oauth2RedirectUrl",
"showRequestHeaders",
"custom",
"modelPropertyMacro",
"parameterMacro",
"displayOperationId",
"displayRequestDuration",
"deepLinking"];


// eslint-disable-next-line no-undef
var _buildInfo = {"PACKAGE_VERSION":"3.0.19","GIT_COMMIT":"g6eb8366","GIT_DIRTY":true,"HOSTNAME":"WN7X64-5GH7N22","BUILD_TIME":"Wed, 19 Jul 2017 21:57:28 GMT"},GIT_DIRTY = _buildInfo.GIT_DIRTY,GIT_COMMIT = _buildInfo.GIT_COMMIT,PACKAGE_VERSION = _buildInfo.PACKAGE_VERSION,HOSTNAME = _buildInfo.HOSTNAME,BUILD_TIME = _buildInfo.BUILD_TIME;

module.exports = function SwaggerUI(opts) {

  _window2.default.versions = _window2.default.versions || {};
  _window2.default.versions.swaggerUi = {
    version: PACKAGE_VERSION,
    gitRevision: GIT_COMMIT,
    gitDirty: GIT_DIRTY,
    buildTimestamp: BUILD_TIME,
    machine: HOSTNAME };


  var defaults = {
    // Some general settings, that we floated to the top
    dom_id: null,
    spec: {},
    url: "",
    urls: null,
    layout: "BaseLayout",
    docExpansion: "list",
    maxDisplayedTags: null,
    filter: null,
    validatorUrl: "https://online.swagger.io/validator",
    configs: {},
    custom: {},
    displayOperationId: false,
    displayRequestDuration: false,
    deepLinking: false,

    // Initial set of plugins ( TODO rename this, or refactor - we don't need presets _and_ plugins. Its just there for performance.
    // Instead, we can compile the first plugin ( it can be a collection of plugins ), then batch the rest.
    presets: [_apis2.default],



    // Plugins; ( loaded after presets )
    plugins: [],


    // Inline Plugin
    fn: {},
    components: {},
    state: {},

    // Override some core configs... at your own risk
    store: {} };


  var queryConfig = (0, _utils.parseSeach)();

  var constructorConfig = (0, _deepExtend2.default)({}, defaults, opts, queryConfig);

  var storeConfigs = (0, _deepExtend2.default)({}, constructorConfig.store, {
    system: {
      configs: constructorConfig.configs },

    plugins: constructorConfig.presets,
    state: {
      layout: {
        layout: constructorConfig.layout,
        filter: constructorConfig.filter },

      spec: {
        spec: "",
        url: constructorConfig.url } } });




  var inlinePlugin = function inlinePlugin() {
    return {
      fn: constructorConfig.fn,
      components: constructorConfig.components,
      state: constructorConfig.state };

  };

  var store = new _system2.default(storeConfigs);
  store.register([constructorConfig.plugins, inlinePlugin]);

  var system = store.getSystem();

  system.initOAuth = system.authActions.configureAuth;

  var downloadSpec = function downloadSpec(fetchedConfig) {
    if ((typeof constructorConfig === "undefined" ? "undefined" : (0, _typeof3.default)(constructorConfig)) !== "object") {
      return system;
    }

    var localConfig = system.specSelectors.getLocalConfig ? system.specSelectors.getLocalConfig() : {};
    var mergedConfig = (0, _deepExtend2.default)({}, localConfig, constructorConfig, fetchedConfig || {}, queryConfig);
    store.setConfigs((0, _utils.filterConfigs)(mergedConfig, CONFIGS));

    if (fetchedConfig !== null) {
      if (!queryConfig.url && (0, _typeof3.default)(mergedConfig.spec) === "object" && (0, _keys2.default)(mergedConfig.spec).length) {
        system.specActions.updateUrl("");
        system.specActions.updateLoadingStatus("success");
        system.specActions.updateSpec((0, _stringify2.default)(mergedConfig.spec));
      } else if (system.specActions.download && mergedConfig.url) {
        system.specActions.updateUrl(mergedConfig.url);
        system.specActions.download(mergedConfig.url);
      }
    }

    if (mergedConfig.dom_id) {
      system.render(mergedConfig.dom_id, "App");
    } else {
      console.error("Skipped rendering: no `dom_id` was specified");
    }

    return system;
  };

  var configUrl = queryConfig.config || constructorConfig.configUrl;

  if (!configUrl || !system.specActions.getConfigByUrl || system.specActions.getConfigByUrl && !system.specActions.getConfigByUrl(configUrl, downloadSpec)) {
    return downloadSpec();
  }

  return system;
};

// Add presets
module.exports.presets = {
  apis: _apis2.default


  // All Plugins
};module.exports.plugins = AllPlugins;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Promise global, Used ( at least ) by 'whatwg-fetch'. And required by IE 11
__webpack_require__(329);

/***/ }),
/* 219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

App = function (_React$Component) {(0, _inherits3.default)(App, _React$Component);function App() {(0, _classCallCheck3.default)(this, App);return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));}(0, _createClass3.default)(App, [{ key: "getLayout", value: function getLayout()

    {var _props =
      this.props,getComponent = _props.getComponent,layoutSelectors = _props.layoutSelectors;
      var layoutName = layoutSelectors.current();
      var Component = getComponent(layoutName, true);
      return Component ? Component : function () {return _react2.default.createElement("h1", null, " No layout defined for \"", layoutName, "\" ");};
    } }, { key: "render", value: function render()

    {
      var Layout = this.getLayout();

      return (
        _react2.default.createElement(Layout, null));

    } }]);return App;}(_react2.default.Component);exports.default = App;


App.propTypes = {
  getComponent: _propTypes2.default.func.isRequired,
  layoutSelectors: _propTypes2.default.object.isRequired };


App.defaultProps = {};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var propStyle = { color: "#999", fontStyle: "italic" };var

ArrayModel = function (_Component) {(0, _inherits3.default)(ArrayModel, _Component);function ArrayModel() {(0, _classCallCheck3.default)(this, ArrayModel);return (0, _possibleConstructorReturn3.default)(this, (ArrayModel.__proto__ || (0, _getPrototypeOf2.default)(ArrayModel)).apply(this, arguments));}(0, _createClass3.default)(ArrayModel, [{ key: "render", value: function render()










    {var _props =
      this.props,getComponent = _props.getComponent,required = _props.required,schema = _props.schema,depth = _props.depth,expandDepth = _props.expandDepth;
      var items = schema.get("items");
      var title = schema.get("title") || name;
      var properties = schema.filter(function (v, key) {return ["type", "items", "$$ref"].indexOf(key) === -1;});

      var ModelCollapse = getComponent("ModelCollapse");
      var Model = getComponent("Model");

      var titleEl = title &&
      _react2.default.createElement("span", { className: "model-title" },
        _react2.default.createElement("span", { className: "model-title__text" }, title));


      return _react2.default.createElement("span", { className: "model" },
        _react2.default.createElement(ModelCollapse, { title: titleEl, collapsed: depth > expandDepth, collapsedContent: "[...]" }, "[",

          _react2.default.createElement("span", null, _react2.default.createElement(Model, (0, _extends3.default)({}, this.props, { schema: items, required: false }))), "]",


          properties.size ? _react2.default.createElement("span", null,
            properties.entrySeq().map(function (_ref) {var _ref2 = (0, _slicedToArray3.default)(_ref, 2),key = _ref2[0],v = _ref2[1];return _react2.default.createElement("span", { key: key + "-" + v, style: propStyle },
                _react2.default.createElement("br", null), key + ":", String(v));}),
            _react2.default.createElement("br", null)) :
          null),


        required && _react2.default.createElement("span", { style: { color: "red" } }, "*"));

    } }]);return ArrayModel;}(_react.Component);ArrayModel.propTypes = { schema: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, name: _propTypes2.default.string, required: _propTypes2.default.bool, expandDepth: _propTypes2.default.number, depth: _propTypes2.default.number };exports.default = ArrayModel;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

ApiKeyAuth = function (_React$Component) {(0, _inherits3.default)(ApiKeyAuth, _React$Component);









  function ApiKeyAuth(props, context) {(0, _classCallCheck3.default)(this, ApiKeyAuth);var _this = (0, _possibleConstructorReturn3.default)(this, (ApiKeyAuth.__proto__ || (0, _getPrototypeOf2.default)(ApiKeyAuth)).call(this,
    props, context));_initialiseProps.call(_this);var _this$props =
    _this.props,name = _this$props.name,schema = _this$props.schema;
    var value = _this.getValue();

    _this.state = {
      name: name,
      schema: schema,
      value: value };return _this;

  }(0, _createClass3.default)(ApiKeyAuth, [{ key: "getValue", value: function getValue()

    {var _props =
      this.props,name = _props.name,authorized = _props.authorized;

      return authorized && authorized.getIn([name, "value"]);
    } }, { key: "render", value: function render()










    {var _props2 =
      this.props,schema = _props2.schema,getComponent = _props2.getComponent,errSelectors = _props2.errSelectors,name = _props2.name;
      var Input = getComponent("Input");
      var Row = getComponent("Row");
      var Col = getComponent("Col");
      var AuthError = getComponent("authError");
      var Markdown = getComponent("Markdown");
      var JumpToPath = getComponent("JumpToPath", true);
      var value = this.getValue();
      var errors = errSelectors.allErrors().filter(function (err) {return err.get("authId") === name;});

      return (
        _react2.default.createElement("div", null,
          _react2.default.createElement("h4", null, "Api key authorization", _react2.default.createElement(JumpToPath, { path: ["securityDefinitions", name] })),
          value && _react2.default.createElement("h6", null, "Authorized"),
          _react2.default.createElement(Row, null,
            _react2.default.createElement(Markdown, { source: schema.get("description") })),

          _react2.default.createElement(Row, null,
            _react2.default.createElement("p", null, "Name: ", _react2.default.createElement("code", null, schema.get("name")))),

          _react2.default.createElement(Row, null,
            _react2.default.createElement("p", null, "In: ", _react2.default.createElement("code", null, schema.get("in")))),

          _react2.default.createElement(Row, null,
            _react2.default.createElement("label", null, "Value:"),

            value ? _react2.default.createElement("code", null, " ****** ") :
            _react2.default.createElement(Col, null, _react2.default.createElement(Input, { type: "text", onChange: this.onChange }))),



          errors.valueSeq().map(function (error, key) {
            return _react2.default.createElement(AuthError, { error: error,
              key: key });
          })));



    } }]);return ApiKeyAuth;}(_react2.default.Component);ApiKeyAuth.propTypes = { authorized: _propTypes2.default.object, getComponent: _propTypes2.default.func.isRequired, errSelectors: _propTypes2.default.object.isRequired, schema: _propTypes2.default.object.isRequired, name: _propTypes2.default.string.isRequired, onChange: _propTypes2.default.func };var _initialiseProps = function _initialiseProps() {var _this2 = this;this.onChange = function (e) {var onChange = _this2.props.onChange;var value = e.target.value;var newState = (0, _assign2.default)({}, _this2.state, { value: value });_this2.setState(newState);onChange(newState);};};exports.default = ApiKeyAuth;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

AuthorizationPopup = function (_React$Component) {(0, _inherits3.default)(AuthorizationPopup, _React$Component);function AuthorizationPopup() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AuthorizationPopup);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AuthorizationPopup.__proto__ || (0, _getPrototypeOf2.default)(AuthorizationPopup)).call.apply(_ref, [this].concat(args))), _this), _this.
    close = function () {var
      authActions = _this.props.authActions;

      authActions.showDefinitions(false);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(AuthorizationPopup, [{ key: "render", value: function render()

    {var _props =
      this.props,authSelectors = _props.authSelectors,authActions = _props.authActions,getComponent = _props.getComponent,errSelectors = _props.errSelectors,specSelectors = _props.specSelectors,AST = _props.fn.AST;
      var definitions = authSelectors.shownDefinitions();
      var Auths = getComponent("auths");

      return (
        _react2.default.createElement("div", { className: "dialog-ux" },
          _react2.default.createElement("div", { className: "backdrop-ux" }),
          _react2.default.createElement("div", { className: "modal-ux" },
            _react2.default.createElement("div", { className: "modal-dialog-ux" },
              _react2.default.createElement("div", { className: "modal-ux-inner" },
                _react2.default.createElement("div", { className: "modal-ux-header" },
                  _react2.default.createElement("h3", null, "Available authorizations"),
                  _react2.default.createElement("button", { type: "button", className: "close-modal", onClick: this.close },
                    _react2.default.createElement("svg", { width: "20", height: "20" },
                      _react2.default.createElement("use", { xlinkHref: "#close" })))),



                _react2.default.createElement("div", { className: "modal-ux-content" },


                  definitions.valueSeq().map(function (definition, key) {
                    return _react2.default.createElement(Auths, { key: key,
                      AST: AST,
                      definitions: definition,
                      getComponent: getComponent,
                      errSelectors: errSelectors,
                      authSelectors: authSelectors,
                      authActions: authActions,
                      specSelectors: specSelectors });
                  })))))));







    } }]);return AuthorizationPopup;}(_react2.default.Component);AuthorizationPopup.

propTypes = {
  fn: _propTypes2.default.object.isRequired,
  getComponent: _propTypes2.default.func.isRequired,
  authSelectors: _propTypes2.default.object.isRequired,
  specSelectors: _propTypes2.default.object.isRequired,
  errSelectors: _propTypes2.default.object.isRequired,
  authActions: _propTypes2.default.object.isRequired };exports.default = AuthorizationPopup;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

AuthorizeBtn = function (_React$Component) {(0, _inherits3.default)(AuthorizeBtn, _React$Component);function AuthorizeBtn() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AuthorizeBtn);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AuthorizeBtn.__proto__ || (0, _getPrototypeOf2.default)(AuthorizeBtn)).call.apply(_ref, [this].concat(args))), _this), _this.




    onClick = function () {var _this$props =
      _this.props,authActions = _this$props.authActions,authSelectors = _this$props.authSelectors;
      var definitions = authSelectors.definitionsToAuthorize();

      authActions.showDefinitions(definitions);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(AuthorizeBtn, [{ key: "render", value: function render()

    {var _props =
      this.props,authSelectors = _props.authSelectors,getComponent = _props.getComponent;
      //must be moved out of button component
      var AuthorizationPopup = getComponent("authorizationPopup", true);
      var showPopup = !!authSelectors.shownDefinitions();
      var isAuthorized = !!authSelectors.authorized().size;

      return (
        _react2.default.createElement("div", { className: "auth-wrapper" },
          _react2.default.createElement("button", { className: isAuthorized ? "btn authorize locked" : "btn authorize unlocked", onClick: this.onClick },
            _react2.default.createElement("span", null, "Authorize"),
            _react2.default.createElement("svg", { width: "20", height: "20" },
              _react2.default.createElement("use", { xlinkHref: isAuthorized ? "#locked" : "#unlocked" }))),


          showPopup && _react2.default.createElement(AuthorizationPopup, null)));


    } }]);return AuthorizeBtn;}(_react2.default.Component);AuthorizeBtn.propTypes = { className: _propTypes2.default.string };AuthorizeBtn.


propTypes = {
  getComponent: _propTypes2.default.func.isRequired,
  authSelectors: _propTypes2.default.object.isRequired,
  errActions: _propTypes2.default.object.isRequired,
  authActions: _propTypes2.default.object.isRequired };exports.default = AuthorizeBtn;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

AuthorizeOperationBtn = function (_React$Component) {(0, _inherits3.default)(AuthorizeOperationBtn, _React$Component);function AuthorizeOperationBtn() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AuthorizeOperationBtn);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AuthorizeOperationBtn.__proto__ || (0, _getPrototypeOf2.default)(AuthorizeOperationBtn)).call.apply(_ref, [this].concat(args))), _this), _this.
    onClick = function (e) {
      e.stopPropagation();var _this$props =

      _this.props,security = _this$props.security,authActions = _this$props.authActions,authSelectors = _this$props.authSelectors;
      var definitions = authSelectors.getDefinitionsByNames(security);

      authActions.showDefinitions(definitions);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(AuthorizeOperationBtn, [{ key: "render", value: function render()

    {var _props =
      this.props,security = _props.security,authSelectors = _props.authSelectors;

      var isAuthorized = authSelectors.isAuthorized(security);

      if (isAuthorized === null) {
        return null;
      }

      return (
        _react2.default.createElement("button", { className: isAuthorized ? "authorization__btn locked" : "authorization__btn unlocked", onClick: this.onClick },
          _react2.default.createElement("svg", { width: "20", height: "20" },
            _react2.default.createElement("use", { xlinkHref: isAuthorized ? "#locked" : "#unlocked" }))));




    } }]);return AuthorizeOperationBtn;}(_react2.default.Component);AuthorizeOperationBtn.

propTypes = {
  authSelectors: _propTypes2.default.object.isRequired,
  authActions: _propTypes2.default.object.isRequired,
  security: _reactImmutableProptypes2.default.iterable.isRequired };exports.default = AuthorizeOperationBtn;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Auths = function (_React$Component) {(0, _inherits3.default)(Auths, _React$Component);








  function Auths(props, context) {(0, _classCallCheck3.default)(this, Auths);var _this = (0, _possibleConstructorReturn3.default)(this, (Auths.__proto__ || (0, _getPrototypeOf2.default)(Auths)).call(this,
    props, context));_this.




    onAuthChange = function (auth) {var
      name = auth.name;

      _this.setState((0, _defineProperty3.default)({}, name, auth));
    };_this.

    submitAuth = function (e) {
      e.preventDefault();var

      authActions = _this.props.authActions;

      authActions.authorize(_this.state);
    };_this.

    logoutClick = function (e) {
      e.preventDefault();var _this$props =

      _this.props,authActions = _this$props.authActions,definitions = _this$props.definitions;
      var auths = definitions.map(function (val, key) {
        return key;
      }).toArray();

      authActions.logout(auths);
    };_this.state = {};return _this;}(0, _createClass3.default)(Auths, [{ key: "render", value: function render()

    {var _this2 = this;var _props =
      this.props,definitions = _props.definitions,getComponent = _props.getComponent,authSelectors = _props.authSelectors,errSelectors = _props.errSelectors;
      var ApiKeyAuth = getComponent("apiKeyAuth");
      var BasicAuth = getComponent("basicAuth");
      var Oauth2 = getComponent("oauth2", true);
      var Button = getComponent("Button");

      var authorized = authSelectors.authorized();

      var authorizedAuth = definitions.filter(function (definition, key) {
        return !!authorized.get(key);
      });

      var nonOauthDefinitions = definitions.filter(function (schema) {return schema.get("type") !== "oauth2";});
      var oauthDefinitions = definitions.filter(function (schema) {return schema.get("type") === "oauth2";});

      return (
        _react2.default.createElement("div", { className: "auth-container" },

          !!nonOauthDefinitions.size && _react2.default.createElement("form", { onSubmit: this.submitAuth },

            nonOauthDefinitions.map(function (schema, name) {
              var type = schema.get("type");
              var authEl = void 0;

              switch (type) {
                case "apiKey":authEl = _react2.default.createElement(ApiKeyAuth, { key: name,
                    schema: schema,
                    name: name,
                    errSelectors: errSelectors,
                    authorized: authorized,
                    getComponent: getComponent,
                    onChange: _this2.onAuthChange });
                  break;
                case "basic":authEl = _react2.default.createElement(BasicAuth, { key: name,
                    schema: schema,
                    name: name,
                    errSelectors: errSelectors,
                    authorized: authorized,
                    getComponent: getComponent,
                    onChange: _this2.onAuthChange });
                  break;
                default:authEl = _react2.default.createElement("div", { key: name }, "Unknown security definition type ", type);}


              return _react2.default.createElement("div", { key: name + "-jump" },
                authEl);


            }).toArray(),

            _react2.default.createElement("div", { className: "auth-btn-wrapper" },

              nonOauthDefinitions.size === authorizedAuth.size ? _react2.default.createElement(Button, { className: "btn modal-btn auth", onClick: this.logoutClick }, "Logout") :
              _react2.default.createElement(Button, { type: "submit", className: "btn modal-btn auth authorize" }, "Authorize"))),






          oauthDefinitions && oauthDefinitions.size ? _react2.default.createElement("div", null,
            _react2.default.createElement("div", { className: "scope-def" },
              _react2.default.createElement("p", null, "Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes."),
              _react2.default.createElement("p", null, "API requires the following scopes. Select which ones you want to grant to Swagger UI.")),


            definitions.filter(function (schema) {return schema.get("type") === "oauth2";}).
            map(function (schema, name) {
              return _react2.default.createElement("div", { key: name },
                _react2.default.createElement(Oauth2, { authorized: authorized,
                  schema: schema,
                  name: name }));

            }).
            toArray()) :

          null));




    } }]);return Auths;}(_react2.default.Component);Auths.propTypes = { definitions: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, authSelectors: _propTypes2.default.object.isRequired, authActions: _propTypes2.default.object.isRequired, specSelectors: _propTypes2.default.object.isRequired };Auths.

propTypes = {
  errSelectors: _propTypes2.default.object.isRequired,
  getComponent: _propTypes2.default.func.isRequired,
  authSelectors: _propTypes2.default.object.isRequired,
  specSelectors: _propTypes2.default.object.isRequired,
  authActions: _propTypes2.default.object.isRequired,
  definitions: _reactImmutableProptypes2.default.iterable.isRequired };exports.default = Auths;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

BasicAuth = function (_React$Component) {(0, _inherits3.default)(BasicAuth, _React$Component);







  function BasicAuth(props, context) {(0, _classCallCheck3.default)(this, BasicAuth);var _this = (0, _possibleConstructorReturn3.default)(this, (BasicAuth.__proto__ || (0, _getPrototypeOf2.default)(BasicAuth)).call(this,
    props, context));_initialiseProps.call(_this);var _this$props =
    _this.props,schema = _this$props.schema,name = _this$props.name;

    var value = _this.getValue();
    var username = value.username;

    _this.state = {
      name: name,
      schema: schema,
      value: !username ? {} : {
        username: username } };return _this;


  }(0, _createClass3.default)(BasicAuth, [{ key: "getValue", value: function getValue()

    {var _props =
      this.props,authorized = _props.authorized,name = _props.name;

      return authorized && authorized.getIn([name, "value"]) || {};
    } }, { key: "render", value: function render()













    {var _props2 =
      this.props,schema = _props2.schema,getComponent = _props2.getComponent,name = _props2.name,errSelectors = _props2.errSelectors;
      var Input = getComponent("Input");
      var Row = getComponent("Row");
      var Col = getComponent("Col");
      var AuthError = getComponent("authError");
      var JumpToPath = getComponent("JumpToPath", true);
      var Markdown = getComponent("Markdown");
      var username = this.getValue().username;
      var errors = errSelectors.allErrors().filter(function (err) {return err.get("authId") === name;});

      return (
        _react2.default.createElement("div", null,
          _react2.default.createElement("h4", null, "Basic authorization", _react2.default.createElement(JumpToPath, { path: ["securityDefinitions", name] })),
          username && _react2.default.createElement("h6", null, "Authorized"),
          _react2.default.createElement(Row, null,
            _react2.default.createElement(Markdown, { source: schema.get("description") })),

          _react2.default.createElement(Row, null,
            _react2.default.createElement("label", null, "Username:"),

            username ? _react2.default.createElement("code", null, " ", username, " ") :
            _react2.default.createElement(Col, null, _react2.default.createElement(Input, { type: "text", required: "required", name: "username", onChange: this.onChange }))),


          _react2.default.createElement(Row, null,
            _react2.default.createElement("label", null, "Password:"),

            username ? _react2.default.createElement("code", null, " ****** ") :
            _react2.default.createElement(Col, null, _react2.default.createElement(Input, { required: "required",
                autoComplete: "new-password",
                name: "password",
                type: "password",
                onChange: this.onChange }))),



          errors.valueSeq().map(function (error, key) {
            return _react2.default.createElement(AuthError, { error: error,
              key: key });
          })));



    } }]);return BasicAuth;}(_react2.default.Component);BasicAuth.propTypes = { authorized: _propTypes2.default.object, getComponent: _propTypes2.default.func.isRequired, schema: _propTypes2.default.object.isRequired, onChange: _propTypes2.default.func.isRequired };BasicAuth.

propTypes = {
  name: _propTypes2.default.string.isRequired,
  errSelectors: _propTypes2.default.object.isRequired,
  getComponent: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func,
  schema: _reactImmutableProptypes2.default.map,
  authorized: _reactImmutableProptypes2.default.map };var _initialiseProps = function _initialiseProps() {var _this2 = this;this.onChange = function (e) {var onChange = _this2.props.onChange;var _e$target = e.target,value = _e$target.value,name = _e$target.name;var newValue = _this2.state.value;newValue[name] = value;_this2.setState({ value: newValue });onChange(_this2.state);};};exports.default = BasicAuth;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

AuthError = function (_React$Component) {(0, _inherits3.default)(AuthError, _React$Component);function AuthError() {(0, _classCallCheck3.default)(this, AuthError);return (0, _possibleConstructorReturn3.default)(this, (AuthError.__proto__ || (0, _getPrototypeOf2.default)(AuthError)).apply(this, arguments));}(0, _createClass3.default)(AuthError, [{ key: "render", value: function render()





    {var
      error = this.props.error;

      var level = error.get("level");
      var message = error.get("message");
      var source = error.get("source");

      return (
        _react2.default.createElement("div", { className: "errors", style: { backgroundColor: "#ffeeee", color: "red", margin: "1em" } },
          _react2.default.createElement("b", { style: { textTransform: "capitalize", marginRight: "1em" } }, source, " ", level),
          _react2.default.createElement("span", null, message)));


    } }]);return AuthError;}(_react2.default.Component);AuthError.propTypes = { error: _propTypes2.default.object.isRequired };exports.default = AuthError;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _oauth2Authorize = __webpack_require__(266);var _oauth2Authorize2 = _interopRequireDefault(_oauth2Authorize);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var IMPLICIT = "implicit";
var ACCESS_CODE = "accessCode";
var PASSWORD = "password";
var APPLICATION = "application";var

Oauth2 = function (_React$Component) {(0, _inherits3.default)(Oauth2, _React$Component);












  function Oauth2(props, context) {(0, _classCallCheck3.default)(this, Oauth2);var _this = (0, _possibleConstructorReturn3.default)(this, (Oauth2.__proto__ || (0, _getPrototypeOf2.default)(Oauth2)).call(this,
    props, context));_initialiseProps.call(_this);var _this$props =
    _this.props,name = _this$props.name,schema = _this$props.schema,authorized = _this$props.authorized,authSelectors = _this$props.authSelectors;
    var auth = authorized && authorized.get(name);
    var authConfigs = authSelectors.getConfigs() || {};
    var username = auth && auth.get("username") || "";
    var clientId = auth && auth.get("clientId") || authConfigs.clientId || "";
    var clientSecret = auth && auth.get("clientSecret") || authConfigs.clientSecret || "";
    var passwordType = auth && auth.get("passwordType") || "request-body";

    _this.state = {
      appName: authConfigs.appName,
      name: name,
      schema: schema,
      scopes: [],
      clientId: clientId,
      clientSecret: clientSecret,
      username: username,
      password: "",
      passwordType: passwordType };return _this;

  }(0, _createClass3.default)(Oauth2, [{ key: "render", value: function render()








































    {var _this2 = this;var _props =
      this.props,schema = _props.schema,getComponent = _props.getComponent,authSelectors = _props.authSelectors,errSelectors = _props.errSelectors,name = _props.name;
      var Input = getComponent("Input");
      var Row = getComponent("Row");
      var Col = getComponent("Col");
      var Button = getComponent("Button");
      var AuthError = getComponent("authError");
      var JumpToPath = getComponent("JumpToPath", true);
      var Markdown = getComponent("Markdown");

      var flow = schema.get("flow");
      var scopes = schema.get("allowedScopes") || schema.get("scopes");
      var authorizedAuth = authSelectors.authorized().get(name);
      var isAuthorized = !!authorizedAuth;
      var errors = errSelectors.allErrors().filter(function (err) {return err.get("authId") === name;});
      var isValid = !errors.filter(function (err) {return err.get("source") === "validation";}).size;
      var description = schema.get("description");

      return (
        _react2.default.createElement("div", null,
          _react2.default.createElement("h4", null, "OAuth2.0 ", _react2.default.createElement(JumpToPath, { path: ["securityDefinitions", name] })),
          !this.state.appName ? null : _react2.default.createElement("h5", null, "Application: ", this.state.appName, " "),
          description && _react2.default.createElement(Markdown, { source: schema.get("description") }),

          isAuthorized && _react2.default.createElement("h6", null, "Authorized"),

          (flow === IMPLICIT || flow === ACCESS_CODE) && _react2.default.createElement("p", null, "Authorization URL: ", _react2.default.createElement("code", null, schema.get("authorizationUrl"))),
          (flow === PASSWORD || flow === ACCESS_CODE || flow === APPLICATION) && _react2.default.createElement("p", null, "Token URL:", _react2.default.createElement("code", null, " ", schema.get("tokenUrl"))),
          _react2.default.createElement("p", { className: "flow" }, "Flow: ", _react2.default.createElement("code", null, schema.get("flow"))),


          flow !== PASSWORD ? null :
          _react2.default.createElement(Row, null,
            _react2.default.createElement(Row, null,
              _react2.default.createElement("label", { htmlFor: "oauth_username" }, "username:"),

              isAuthorized ? _react2.default.createElement("code", null, " ", this.state.username, " ") :
              _react2.default.createElement(Col, { tablet: 10, desktop: 10 },
                _react2.default.createElement("input", { id: "oauth_username", type: "text", "data-name": "username", onChange: this.onInputChange }))),






            _react2.default.createElement(Row, null,
              _react2.default.createElement("label", { htmlFor: "oauth_password" }, "password:"),

              isAuthorized ? _react2.default.createElement("code", null, " ****** ") :
              _react2.default.createElement(Col, { tablet: 10, desktop: 10 },
                _react2.default.createElement("input", { id: "oauth_password", type: "password", "data-name": "password", onChange: this.onInputChange }))),



            _react2.default.createElement(Row, null,
              _react2.default.createElement("label", { htmlFor: "password_type" }, "type:"),

              isAuthorized ? _react2.default.createElement("code", null, " ", this.state.passwordType, " ") :
              _react2.default.createElement(Col, { tablet: 10, desktop: 10 },
                _react2.default.createElement("select", { id: "password_type", "data-name": "passwordType", onChange: this.onInputChange },
                  _react2.default.createElement("option", { value: "request-body" }, "Request body"),
                  _react2.default.createElement("option", { value: "basic" }, "Basic auth"),
                  _react2.default.createElement("option", { value: "query" }, "Query parameters"))))),







          (flow === APPLICATION || flow === IMPLICIT || flow === ACCESS_CODE || flow === PASSWORD && this.state.passwordType !== "basic") && (
          !isAuthorized || isAuthorized && this.state.clientId) && _react2.default.createElement(Row, null,
            _react2.default.createElement("label", { htmlFor: "client_id" }, "client_id:"),

            isAuthorized ? _react2.default.createElement("code", null, " ****** ") :
            _react2.default.createElement(Col, { tablet: 10, desktop: 10 },
              _react2.default.createElement("input", { id: "client_id",
                type: "text",
                required: flow === PASSWORD,
                value: this.state.clientId,
                "data-name": "clientId",
                onChange: this.onInputChange }))),






          (flow === APPLICATION || flow === ACCESS_CODE || flow === PASSWORD && this.state.passwordType !== "basic") && _react2.default.createElement(Row, null,
            _react2.default.createElement("label", { htmlFor: "client_secret" }, "client_secret:"),

            isAuthorized ? _react2.default.createElement("code", null, " ****** ") :
            _react2.default.createElement(Col, { tablet: 10, desktop: 10 },
              _react2.default.createElement("input", { id: "client_secret",
                value: this.state.clientSecret,
                type: "text",
                "data-name": "clientSecret",
                onChange: this.onInputChange }))),







          !isAuthorized && scopes && scopes.size ? _react2.default.createElement("div", { className: "scopes" },
            _react2.default.createElement("h2", null, "Scopes:"),
            scopes.map(function (description, name) {
              return (
                _react2.default.createElement(Row, { key: name },
                  _react2.default.createElement("div", { className: "checkbox" },
                    _react2.default.createElement(Input, { "data-value": name,
                      id: name + "-checkbox-" + _this2.state.name,
                      disabled: isAuthorized,
                      type: "checkbox",
                      onChange: _this2.onScopeChange }),
                    _react2.default.createElement("label", { htmlFor: name + "-checkbox-" + _this2.state.name },
                      _react2.default.createElement("span", { className: "item" }),
                      _react2.default.createElement("div", { className: "text" },
                        _react2.default.createElement("p", { className: "name" }, name),
                        _react2.default.createElement("p", { className: "description" }, description))))));





            }).toArray()) :

          null,



          errors.valueSeq().map(function (error, key) {
            return _react2.default.createElement(AuthError, { error: error,
              key: key });
          }),

          _react2.default.createElement("div", { className: "auth-btn-wrapper" },
            isValid && (
            isAuthorized ? _react2.default.createElement(Button, { className: "btn modal-btn auth authorize", onClick: this.logout }, "Logout") :
            _react2.default.createElement(Button, { className: "btn modal-btn auth authorize", onClick: this.authorize }, "Authorize")))));






    } }]);return Oauth2;}(_react2.default.Component);Oauth2.propTypes = { name: _propTypes2.default.string, authorized: _propTypes2.default.object, getComponent: _propTypes2.default.func.isRequired, schema: _propTypes2.default.object.isRequired, authSelectors: _propTypes2.default.object.isRequired, authActions: _propTypes2.default.object.isRequired, errSelectors: _propTypes2.default.object.isRequired, errActions: _propTypes2.default.object.isRequired, getConfigs: _propTypes2.default.any };var _initialiseProps = function _initialiseProps() {var _this3 = this;this.authorize = function () {var _props2 = _this3.props,authActions = _props2.authActions,errActions = _props2.errActions,getConfigs = _props2.getConfigs,authSelectors = _props2.authSelectors;var configs = getConfigs();var authConfigs = authSelectors.getConfigs();errActions.clear({ authId: name, type: "auth", source: "auth" });(0, _oauth2Authorize2.default)({ auth: _this3.state, authActions: authActions, errActions: errActions, configs: configs, authConfigs: authConfigs });};this.onScopeChange = function (e) {var target = e.target;var checked = target.checked;var scope = target.dataset.value;if (checked && _this3.state.scopes.indexOf(scope) === -1) {var newScopes = _this3.state.scopes.concat([scope]);_this3.setState({ scopes: newScopes });} else if (!checked && _this3.state.scopes.indexOf(scope) > -1) {_this3.setState({ scopes: _this3.state.scopes.filter(function (val) {return val !== scope;}) });}};this.onInputChange = function (e) {var _e$target = e.target,name = _e$target.dataset.name,value = _e$target.value;var state = (0, _defineProperty3.default)({}, name, value);_this3.setState(state);};this.logout = function (e) {e.preventDefault();var _props3 = _this3.props,authActions = _props3.authActions,errActions = _props3.errActions,name = _props3.name;errActions.clear({ authId: name, type: "auth", source: "auth" });authActions.logout([name]);};};exports.default = Oauth2;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Clear = function (_Component) {(0, _inherits3.default)(Clear, _Component);function Clear() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Clear);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Clear.__proto__ || (0, _getPrototypeOf2.default)(Clear)).call.apply(_ref, [this].concat(args))), _this), _this.

    onClick = function () {var _this$props =
      _this.props,specActions = _this$props.specActions,path = _this$props.path,method = _this$props.method;
      specActions.clearResponse(path, method);
      specActions.clearRequest(path, method);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(Clear, [{ key: "render", value: function render()

    {
      return (
        _react2.default.createElement("button", { className: "btn btn-clear opblock-control__btn", onClick: this.onClick }, "Clear"));



    } }]);return Clear;}(_react.Component);Clear.

propTypes = {
  specActions: _propTypes2.default.object.isRequired,
  path: _propTypes2.default.string.isRequired,
  method: _propTypes2.default.string.isRequired };exports.default = Clear;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);
var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var noop = function noop() {};var

ContentType = function (_React$Component) {(0, _inherits3.default)(ContentType, _React$Component);function ContentType() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, ContentType);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContentType.__proto__ || (0, _getPrototypeOf2.default)(ContentType)).call.apply(_ref, [this].concat(args))), _this), _this.



















    onChangeWrapper = function (e) {return _this.props.onChange(e.target.value);}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(ContentType, [{ key: "componentDidMount", value: function componentDidMount() {// Needed to populate the form, initially
      this.props.onChange(this.props.contentTypes.first());} }, { key: "render", value: function render()
    {var _props =
      this.props,contentTypes = _props.contentTypes,className = _props.className,value = _props.value;

      if (!contentTypes || !contentTypes.size)
      return null;

      return (
        _react2.default.createElement("div", { className: "content-type-wrapper " + (className || "") },
          _react2.default.createElement("select", { className: "content-type", value: value, onChange: this.onChangeWrapper },
            contentTypes.map(function (val) {
              return _react2.default.createElement("option", { key: val, value: val }, val);
            }).toArray())));



    } }]);return ContentType;}(_react2.default.Component);ContentType.propTypes = { contentTypes: _propTypes2.default.oneOfType([_reactImmutableProptypes2.default.list, _reactImmutableProptypes2.default.set]), value: _propTypes2.default.string, onChange: _propTypes2.default.func, className: _propTypes2.default.string };ContentType.defaultProps = { onChange: noop, value: null, contentTypes: (0, _immutable.fromJS)(["application/json"]) };exports.default = ContentType;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _curlify = __webpack_require__(264);var _curlify2 = _interopRequireDefault(_curlify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


Curl = function (_React$Component) {(0, _inherits3.default)(Curl, _React$Component);function Curl() {(0, _classCallCheck3.default)(this, Curl);return (0, _possibleConstructorReturn3.default)(this, (Curl.__proto__ || (0, _getPrototypeOf2.default)(Curl)).apply(this, arguments));}(0, _createClass3.default)(Curl, [{ key: "handleFocus", value: function handleFocus(




    e) {
      e.target.select();
      document.execCommand("copy");
    } }, { key: "render", value: function render()

    {var
      request = this.props.request;
      var curl = (0, _curlify2.default)(request);

      return (
        _react2.default.createElement("div", null,
          _react2.default.createElement("h4", null, "Curl"),
          _react2.default.createElement("div", { className: "copy-paste" },
            _react2.default.createElement("textarea", { onFocus: this.handleFocus, readOnly: "true", className: "curl", style: { whiteSpace: "normal" }, value: curl }))));



    } }]);return Curl;}(_react2.default.Component);Curl.propTypes = { request: _propTypes2.default.object.isRequired };exports.default = Curl;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var EnumModel = function EnumModel(_ref) {var value = _ref.value,getComponent = _ref.getComponent;
  var ModelCollapse = getComponent("ModelCollapse");
  var collapsedContent = _react2.default.createElement("span", null, "Array [ ", value.count(), " ]");
  return _react2.default.createElement("span", { className: "prop-enum" }, "Enum:",
    _react2.default.createElement("br", null),
    _react2.default.createElement(ModelCollapse, { collapsedContent: collapsedContent }, "[ ",
      value.join(", "), " ]"));


};
EnumModel.propTypes = {
  value: _reactImmutableProptypes2.default.iterable,
  getComponent: _reactImmutableProptypes2.default.func };exports.default =


EnumModel;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);
var _reactCollapse = __webpack_require__(215);var _reactCollapse2 = _interopRequireDefault(_reactCollapse);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Errors = function (_React$Component) {(0, _inherits3.default)(Errors, _React$Component);function Errors() {(0, _classCallCheck3.default)(this, Errors);return (0, _possibleConstructorReturn3.default)(this, (Errors.__proto__ || (0, _getPrototypeOf2.default)(Errors)).apply(this, arguments));}(0, _createClass3.default)(Errors, [{ key: "render", value: function render()








    {var _props =
      this.props,editorActions = _props.editorActions,errSelectors = _props.errSelectors,layoutSelectors = _props.layoutSelectors,layoutActions = _props.layoutActions;

      if (editorActions && editorActions.jumpToLine) {
        var jumpToLine = editorActions.jumpToLine;
      }

      var errors = errSelectors.allErrors();

      // all thrown errors, plus error-level everything else
      var allErrorsToDisplay = errors.filter(function (err) {return err.get("type") === "thrown" ? true : err.get("level") === "error";});

      if (!allErrorsToDisplay || allErrorsToDisplay.count() < 1) {
        return null;
      }

      var isVisible = layoutSelectors.isShown(["errorPane"], true);
      var toggleVisibility = function toggleVisibility() {return layoutActions.show(["errorPane"], !isVisible);};

      var sortedJSErrors = allErrorsToDisplay.sortBy(function (err) {return err.get("line");});

      return (
        _react2.default.createElement("pre", { className: "errors-wrapper" },
          _react2.default.createElement("hgroup", { className: "error" },
            _react2.default.createElement("h4", { className: "errors__title" }, "Errors"),
            _react2.default.createElement("button", { className: "btn errors__clear-btn", onClick: toggleVisibility }, isVisible ? "Hide" : "Show")),

          _react2.default.createElement(_reactCollapse2.default, { isOpened: isVisible, animated: true },
            _react2.default.createElement("div", { className: "errors" },
              sortedJSErrors.map(function (err, i) {
                var type = err.get("type");
                if (type === "thrown" || type === "auth") {
                  return _react2.default.createElement(ThrownErrorItem, { key: i, error: err.get("error") || err, jumpToLine: jumpToLine });
                }
                if (type === "spec") {
                  return _react2.default.createElement(SpecErrorItem, { key: i, error: err, jumpToLine: jumpToLine });
                }
              })))));




    } }]);return Errors;}(_react2.default.Component);Errors.propTypes = { editorActions: _propTypes2.default.object, errSelectors: _propTypes2.default.object.isRequired, layoutSelectors: _propTypes2.default.object.isRequired, layoutActions: _propTypes2.default.object.isRequired };exports.default = Errors;


var ThrownErrorItem = function ThrownErrorItem(_ref) {var error = _ref.error,jumpToLine = _ref.jumpToLine;
  if (!error) {
    return null;
  }
  var errorLine = error.get("line");

  return (
    _react2.default.createElement("div", { className: "error-wrapper" },
      !error ? null :
      _react2.default.createElement("div", null,
        _react2.default.createElement("h4", null, error.get("source") && error.get("level") ?
          toTitleCase(error.get("source")) + " " + error.get("level") : "",
          error.get("path") ? _react2.default.createElement("small", null, " at ", error.get("path")) : null),
        _react2.default.createElement("span", { style: { whiteSpace: "pre-line", "maxWidth": "100%" } },
          error.get("message")),

        _react2.default.createElement("div", null,
          errorLine && jumpToLine ? _react2.default.createElement("a", { onClick: jumpToLine.bind(null, errorLine) }, "Jump to line ", errorLine) : null))));





};

var SpecErrorItem = function SpecErrorItem(_ref2) {var error = _ref2.error,jumpToLine = _ref2.jumpToLine;
  var locationMessage = null;

  if (error.get("path")) {
    if (_immutable.List.isList(error.get("path"))) {
      locationMessage = _react2.default.createElement("small", null, "at ", error.get("path").join("."));
    } else {
      locationMessage = _react2.default.createElement("small", null, "at ", error.get("path"));
    }
  } else if (error.get("line") && !jumpToLine) {
    locationMessage = _react2.default.createElement("small", null, "on line ", error.get("line"));
  }

  return (
    _react2.default.createElement("div", { className: "error-wrapper" },
      !error ? null :
      _react2.default.createElement("div", null,
        _react2.default.createElement("h4", null, toTitleCase(error.get("source")) + " " + error.get("level"), "\xA0", locationMessage),
        _react2.default.createElement("span", { style: { whiteSpace: "pre-line" } }, error.get("message")),
        _react2.default.createElement("div", { style: { "text-decoration": "underline", "cursor": "pointer" } },
          jumpToLine ?
          _react2.default.createElement("a", { onClick: jumpToLine.bind(null, error.get("line")) }, "Jump to line ", error.get("line")) :
          null))));





};

function toTitleCase(str) {
  return str.
  split(" ").
  map(function (substr) {return substr[0].toUpperCase() + substr.slice(1);}).
  join(" ");
}

ThrownErrorItem.propTypes = {
  error: _propTypes2.default.object.isRequired,
  jumpToLine: _propTypes2.default.func };


ThrownErrorItem.defaultProps = {
  jumpToLine: null };


SpecErrorItem.propTypes = {
  error: _propTypes2.default.object.isRequired,
  jumpToLine: _propTypes2.default.func };

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Execute = function (_Component) {(0, _inherits3.default)(Execute, _Component);function Execute() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Execute);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Execute.__proto__ || (0, _getPrototypeOf2.default)(Execute)).call.apply(_ref, [this].concat(args))), _this), _this.











    onClick = function () {var _this$props =
      _this.props,specSelectors = _this$props.specSelectors,specActions = _this$props.specActions,operation = _this$props.operation,path = _this$props.path,method = _this$props.method;

      specActions.validateParams([path, method]);

      if (specSelectors.validateBeforeExecute([path, method])) {
        if (_this.props.onExecute) {
          _this.props.onExecute();
        }
        specActions.execute({ operation: operation, path: path, method: method });
      }
    }, _this.

    onChangeProducesWrapper = function (val) {return _this.props.specActions.changeProducesValue([_this.props.path, _this.props.method], val);}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(Execute, [{ key: "render", value: function render()

    {
      return (
        _react2.default.createElement("button", { className: "btn execute opblock-control__btn", onClick: this.onClick }, "Execute"));



    } }]);return Execute;}(_react.Component);Execute.propTypes = { specSelectors: _propTypes2.default.object.isRequired, specActions: _propTypes2.default.object.isRequired, operation: _propTypes2.default.object.isRequired, path: _propTypes2.default.string.isRequired, getComponent: _propTypes2.default.func.isRequired, method: _propTypes2.default.string.isRequired, onExecute: _propTypes2.default.func };exports.default = Execute;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Footer = function (_React$Component) {(0, _inherits3.default)(Footer, _React$Component);function Footer() {(0, _classCallCheck3.default)(this, Footer);return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));}(0, _createClass3.default)(Footer, [{ key: "render", value: function render()
    {
      return (
        _react2.default.createElement("div", { className: "footer" }));

    } }]);return Footer;}(_react2.default.Component);exports.default = Footer;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);var _immutable2 = _interopRequireDefault(_immutable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Headers = function (_React$Component) {(0, _inherits3.default)(Headers, _React$Component);function Headers() {(0, _classCallCheck3.default)(this, Headers);return (0, _possibleConstructorReturn3.default)(this, (Headers.__proto__ || (0, _getPrototypeOf2.default)(Headers)).apply(this, arguments));}(0, _createClass3.default)(Headers, [{ key: "render", value: function render()





    {var

      headers = this.props.headers;

      if (!headers || !headers.size)
      return null;

      return (
        _react2.default.createElement("div", { className: "headers-wrapper" },
          _react2.default.createElement("h4", { className: "headers__title" }, "Headers:"),
          _react2.default.createElement("table", { className: "headers" },
            _react2.default.createElement("thead", null,
              _react2.default.createElement("tr", { className: "header-row" },
                _react2.default.createElement("th", { className: "header-col" }, "Name"),
                _react2.default.createElement("th", { className: "header-col" }, "Description"),
                _react2.default.createElement("th", { className: "header-col" }, "Type"))),


            _react2.default.createElement("tbody", null,

              headers.entrySeq().map(function (_ref) {var _ref2 = (0, _slicedToArray3.default)(_ref, 2),key = _ref2[0],header = _ref2[1];
                if (!_immutable2.default.Map.isMap(header)) {
                  return null;
                }
                return _react2.default.createElement("tr", { key: key },
                  _react2.default.createElement("td", { className: "header-col" }, key),
                  _react2.default.createElement("td", { className: "header-col" }, header.get("description")),
                  _react2.default.createElement("td", { className: "header-col" }, header.get("type")));

              }).toArray()))));





    } }]);return Headers;}(_react2.default.Component);Headers.propTypes = { headers: _propTypes2.default.object.isRequired };exports.default = Headers;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


HighlightCode = function (_Component) {(0, _inherits3.default)(HighlightCode, _Component);function HighlightCode() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, HighlightCode);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HighlightCode.__proto__ || (0, _getPrototypeOf2.default)(HighlightCode)).call.apply(_ref, [this].concat(args))), _this), _this.













    initializeComponent = function (c) {
      _this.el = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(HighlightCode, [{ key: "componentDidMount", value: function componentDidMount() {(0, _utils.highlight)(this.el);} }, { key: "componentDidUpdate", value: function componentDidUpdate() {(0, _utils.highlight)(this.el);} }, { key: "render", value: function render()

    {var _props =
      this.props,value = _props.value,className = _props.className;
      className = className || "";

      return _react2.default.createElement("pre", { ref: this.initializeComponent, className: className + " microlight" }, value);
    } }]);return HighlightCode;}(_react.Component);HighlightCode.propTypes = { value: _propTypes2.default.string.isRequired, className: _propTypes2.default.string };exports.default = HighlightCode;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


Path = function (_React$Component) {(0, _inherits3.default)(Path, _React$Component);function Path() {(0, _classCallCheck3.default)(this, Path);return (0, _possibleConstructorReturn3.default)(this, (Path.__proto__ || (0, _getPrototypeOf2.default)(Path)).apply(this, arguments));}(0, _createClass3.default)(Path, [{ key: "render", value: function render()





    {var _props =
      this.props,host = _props.host,basePath = _props.basePath;

      return (
        _react2.default.createElement("pre", { className: "base-url" }, "[ Base url: ",
          host, basePath, "]"));


    } }]);return Path;}(_react2.default.Component);Path.propTypes = { host: _propTypes2.default.string, basePath: _propTypes2.default.string };var



Contact = function (_React$Component2) {(0, _inherits3.default)(Contact, _React$Component2);function Contact() {(0, _classCallCheck3.default)(this, Contact);return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));}(0, _createClass3.default)(Contact, [{ key: "render", value: function render()




    {var
      data = this.props.data;
      var name = data.get("name") || "the developer";
      var url = data.get("url");
      var email = data.get("email");

      return (
        _react2.default.createElement("div", null,
          url && _react2.default.createElement("div", null, _react2.default.createElement("a", { href: url, target: "_blank" }, name, " - Website")),
          email &&
          _react2.default.createElement("a", { href: "mailto:" + email },
            url ? "Send email to " + name : "Contact " + name)));




    } }]);return Contact;}(_react2.default.Component);Contact.propTypes = { data: _propTypes2.default.object };var


License = function (_React$Component3) {(0, _inherits3.default)(License, _React$Component3);function License() {(0, _classCallCheck3.default)(this, License);return (0, _possibleConstructorReturn3.default)(this, (License.__proto__ || (0, _getPrototypeOf2.default)(License)).apply(this, arguments));}(0, _createClass3.default)(License, [{ key: "render", value: function render()




    {var
      license = this.props.license;
      var name = license.get("name") || "License";
      var url = license.get("url");

      return (
        _react2.default.createElement("div", null,

          url ? _react2.default.createElement("a", { target: "_blank", href: url }, name) :
          _react2.default.createElement("span", null, name)));



    } }]);return License;}(_react2.default.Component);License.propTypes = { license: _propTypes2.default.object };var


Info = function (_React$Component4) {(0, _inherits3.default)(Info, _React$Component4);function Info() {(0, _classCallCheck3.default)(this, Info);return (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).apply(this, arguments));}(0, _createClass3.default)(Info, [{ key: "render", value: function render()









    {var _props2 =
      this.props,info = _props2.info,url = _props2.url,host = _props2.host,basePath = _props2.basePath,getComponent = _props2.getComponent,externalDocs = _props2.externalDocs;
      var version = info.get("version");
      var description = info.get("description");
      var title = info.get("title");
      var termsOfService = info.get("termsOfService");
      var contact = info.get("contact");
      var license = info.get("license");var _toJS =
      (externalDocs || (0, _immutable.fromJS)({})).toJS(),externalDocsUrl = _toJS.url,externalDocsDescription = _toJS.description;

      var Markdown = getComponent("Markdown");

      return (
        _react2.default.createElement("div", { className: "info" },
          _react2.default.createElement("hgroup", { className: "main" },
            _react2.default.createElement("h2", { className: "title" }, title,
              version && _react2.default.createElement("small", null, _react2.default.createElement("pre", { className: "version" }, " ", version, " "))),

            host || basePath ? _react2.default.createElement(Path, { host: host, basePath: basePath }) : null,
            url && _react2.default.createElement("a", { target: "_blank", href: url }, _react2.default.createElement("span", { className: "url" }, " ", url, " "))),


          _react2.default.createElement("div", { className: "description" },
            _react2.default.createElement(Markdown, { source: description })),



          termsOfService && _react2.default.createElement("div", null,
            _react2.default.createElement("a", { target: "_blank", href: termsOfService }, "Terms of service")),



          contact && contact.size ? _react2.default.createElement(Contact, { data: contact }) : null,
          license && license.size ? _react2.default.createElement(License, { license: license }) : null,
          externalDocsUrl ?
          _react2.default.createElement("a", { target: "_blank", href: externalDocsUrl }, externalDocsDescription || externalDocsUrl) :
          null));



    } }]);return Info;}(_react2.default.Component);Info.propTypes = { info: _propTypes2.default.object, url: _propTypes2.default.string, host: _propTypes2.default.string, basePath: _propTypes2.default.string, externalDocs: _reactImmutableProptypes2.default.map, getComponent: _propTypes2.default.func.isRequired };exports.default = Info;



Info.propTypes = {
  title: _propTypes2.default.any,
  description: _propTypes2.default.any,
  version: _propTypes2.default.any,
  url: _propTypes2.default.string };

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRouterDom = __webpack_require__(120);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

BaseLayout = function (_React$Component) {(0, _inherits3.default)(BaseLayout, _React$Component);function BaseLayout() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, BaseLayout);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BaseLayout.__proto__ || (0, _getPrototypeOf2.default)(BaseLayout)).call.apply(_ref, [this].concat(args))), _this), _this.










        onFilterChange = function (e) {var
            value = e.target.value;
            _this.props.layoutActions.updateFilter(value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(BaseLayout, [{ key: "render", value: function render()

        {var _props =
            this.props,specSelectors = _props.specSelectors,specActions = _props.specActions,getComponent = _props.getComponent,layoutSelectors = _props.layoutSelectors;

            var taggedOps = specSelectors.taggedOperations();

            var info = specSelectors.info();
            var url = specSelectors.url();
            var basePath = specSelectors.basePath();
            var host = specSelectors.host();
            var securityDefinitions = specSelectors.securityDefinitions();
            var externalDocs = specSelectors.externalDocs();
            var schemes = specSelectors.schemes();

            var Info = getComponent("info");
            var Operations = getComponent("operations", true);
            var Operation = getComponent("operation", true);
            var Sidebar = getComponent("sidebar", true);
            var Models = getComponent("Models", true);
            var AuthorizeBtn = getComponent("authorizeBtn", true);
            var Row = getComponent("Row");
            var Col = getComponent("Col");
            var Errors = getComponent("errors", true);

            var isLoading = specSelectors.loadingStatus() === "loading";
            var isFailed = specSelectors.loadingStatus() === "failed";
            var filter = layoutSelectors.currentFilter();

            var inputStyle = {};
            if (isFailed) inputStyle.color = "red";
            if (isLoading) inputStyle.color = "#aaa";

            var Schemes = getComponent("schemes");

            var isSpecEmpty = !specSelectors.specStr();

            if (isSpecEmpty) {
                return _react2.default.createElement("h4", null, "No spec provided.");
            }

            return (
                _react2.default.createElement("div", { className: "swagger-ui" },

                    _react2.default.createElement(Sidebar, { taggedOps: taggedOps }),

                    _react2.default.createElement("div", { className: "collapseExpandIcon", title: "Collapse sidebar" }, "<<"),
                    _react2.default.createElement("div", { id: "swagger-ui-container" },
                        _react2.default.createElement(Errors, null),
                        _react2.default.createElement(Row, { className: "information-container" },
                            _react2.default.createElement(Col, { mobile: 12 },
                                info.count() ?
                                _react2.default.createElement(Info, { info: info, url: url, host: host, basePath: basePath, externalDocs: externalDocs, getComponent: getComponent }) :
                                null)),


                        schemes && schemes.size || securityDefinitions ?
                        _react2.default.createElement("div", { className: "scheme-container" },
                            _react2.default.createElement(Col, { className: "schemes wrapper", mobile: 12 },
                                schemes && schemes.size ?
                                _react2.default.createElement(Schemes, { schemes: schemes, specActions: specActions }) :
                                null,

                                securityDefinitions ?
                                _react2.default.createElement(AuthorizeBtn, null) :
                                null)) :


                        null,


                        filter === null || filter === false ? null :
                        _react2.default.createElement("div", { className: "filter-container" },
                            _react2.default.createElement(Col, { className: "filter wrapper", mobile: 12 },
                                _react2.default.createElement("input", { className: "operation-filter-input", placeholder: "Filter by tag", type: "text", onChange: this.onFilterChange, value: filter === true || filter === "true" ? "" : filter, disabled: isLoading, style: inputStyle }))),




                        _react2.default.createElement(Row, null,
                            _react2.default.createElement(Col, { mobile: 12, desktop: 12 },
                                _react2.default.createElement(Operations, null))),


                        _react2.default.createElement(Row, null,
                            _react2.default.createElement(Col, { mobile: 12, desktop: 12 },
                                _react2.default.createElement(Models, null))))));






        } }]);return BaseLayout;}(_react2.default.Component);BaseLayout.propTypes = { errSelectors: _propTypes2.default.object.isRequired, errActions: _propTypes2.default.object.isRequired, specActions: _propTypes2.default.object.isRequired, specSelectors: _propTypes2.default.object.isRequired, layoutSelectors: _propTypes2.default.object.isRequired, layoutActions: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired };exports.default = BaseLayout;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Headers = function Headers(_ref) {var headers = _ref.headers;
  return (
    _react2.default.createElement("div", null,
      _react2.default.createElement("h5", null, "Response headers"),
      _react2.default.createElement("pre", null, headers)));

};
Headers.propTypes = {
  headers: _propTypes2.default.array.isRequired };


var Duration = function Duration(_ref2) {var duration = _ref2.duration;
  return (
    _react2.default.createElement("div", null,
      _react2.default.createElement("h5", null, "Request duration"),
      _react2.default.createElement("pre", null, duration, " ms")));


};
Duration.propTypes = {
  duration: _propTypes2.default.number.isRequired };var



LiveResponse = function (_React$Component) {(0, _inherits3.default)(LiveResponse, _React$Component);function LiveResponse() {(0, _classCallCheck3.default)(this, LiveResponse);return (0, _possibleConstructorReturn3.default)(this, (LiveResponse.__proto__ || (0, _getPrototypeOf2.default)(LiveResponse)).apply(this, arguments));}(0, _createClass3.default)(LiveResponse, [{ key: "render", value: function render()






    {var _props =
      this.props,request = _props.request,response = _props.response,getComponent = _props.getComponent,displayRequestDuration = _props.displayRequestDuration;

      var status = response.get("status");
      var url = response.get("url");
      var headers = response.get("headers").toJS();
      var notDocumented = response.get("notDocumented");
      var isError = response.get("error");
      var body = response.get("text");
      var duration = response.get("duration");
      var headersKeys = (0, _keys2.default)(headers);
      var contentType = headers["content-type"];

      var Curl = getComponent("curl");
      var ResponseBody = getComponent("responseBody");
      var returnObject = headersKeys.map(function (key) {
        return _react2.default.createElement("span", { className: "headerline", key: key }, " ", key, ": ", headers[key], " ");
      });
      var hasHeaders = returnObject.length !== 0;

      return (
        _react2.default.createElement("div", null,
          request && _react2.default.createElement(Curl, { request: request }),
          _react2.default.createElement("h4", null, "Server response"),
          _react2.default.createElement("table", { className: "responses-table" },
            _react2.default.createElement("thead", null,
              _react2.default.createElement("tr", { className: "responses-header" },
                _react2.default.createElement("td", { className: "col col_header response-col_status" }, "Code"),
                _react2.default.createElement("td", { className: "col col_header response-col_description" }, "Details"))),


            _react2.default.createElement("tbody", null,
              _react2.default.createElement("tr", { className: "response" },
                _react2.default.createElement("td", { className: "col response-col_status" },
                  status,

                  notDocumented ? _react2.default.createElement("div", { className: "response-undocumented" },
                    _react2.default.createElement("i", null, " Undocumented ")) :

                  null),


                _react2.default.createElement("td", { className: "col response-col_description" },

                  isError ? _react2.default.createElement("span", null,
                    response.get("name") + ": " + response.get("message")) :

                  null,


                  body ? _react2.default.createElement(ResponseBody, { content: body,
                    contentType: contentType,
                    url: url,
                    headers: headers,
                    getComponent: getComponent }) :
                  null,


                  hasHeaders ? _react2.default.createElement(Headers, { headers: returnObject }) : null,


                  displayRequestDuration && duration ? _react2.default.createElement(Duration, { duration: duration }) : null))))));







    } }]);return LiveResponse;}(_react2.default.Component);LiveResponse.propTypes = { response: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, displayRequestDuration: _propTypes2.default.bool.isRequired };LiveResponse.

propTypes = {
  getComponent: _propTypes2.default.func.isRequired,
  request: _reactImmutableProptypes2.default.map,
  response: _reactImmutableProptypes2.default.map };exports.default = LiveResponse;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

ModelCollapse = function (_Component) {(0, _inherits3.default)(ModelCollapse, _Component);













  function ModelCollapse(props, context) {(0, _classCallCheck3.default)(this, ModelCollapse);var _this = (0, _possibleConstructorReturn3.default)(this, (ModelCollapse.__proto__ || (0, _getPrototypeOf2.default)(ModelCollapse)).call(this,
    props, context));_this.









    toggleCollapsed = function () {
      _this.setState({
        collapsed: !_this.state.collapsed });

    };var _this$props = _this.props,collapsed = _this$props.collapsed,collapsedContent = _this$props.collapsedContent;_this.state = { collapsed: collapsed !== undefined ? collapsed : ModelCollapse.defaultProps.collapsed, collapsedContent: collapsedContent || ModelCollapse.defaultProps.collapsedContent };return _this;}(0, _createClass3.default)(ModelCollapse, [{ key: "render", value: function render()

    {var
      title = this.props.title;
      return (
        _react2.default.createElement("span", null,
          title && _react2.default.createElement("span", { onClick: this.toggleCollapsed, style: { "cursor": "pointer" } }, title),
          _react2.default.createElement("span", { onClick: this.toggleCollapsed, style: { "cursor": "pointer" } },
            _react2.default.createElement("span", { className: "model-toggle" + (this.state.collapsed ? " collapsed" : "") })),

          this.state.collapsed ? this.state.collapsedContent : this.props.children));


    } }]);return ModelCollapse;}(_react.Component);ModelCollapse.propTypes = { collapsedContent: _propTypes2.default.any, collapsed: _propTypes2.default.bool, children: _propTypes2.default.any, title: _propTypes2.default.element };ModelCollapse.defaultProps = { collapsedContent: "{...}", collapsed: true, title: null };exports.default = ModelCollapse;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

ModelExample = function (_React$Component) {(0, _inherits3.default)(ModelExample, _React$Component);








  function ModelExample(props, context) {(0, _classCallCheck3.default)(this, ModelExample);var _this = (0, _possibleConstructorReturn3.default)(this, (ModelExample.__proto__ || (0, _getPrototypeOf2.default)(ModelExample)).call(this,
    props, context));_this.






    activeTab = function (e) {var
      name = e.target.dataset.name;

      _this.setState({
        activeTab: name });

    };_this.state = { activeTab: "example" };return _this;}(0, _createClass3.default)(ModelExample, [{ key: "render", value: function render()

    {var _props =
      this.props,getComponent = _props.getComponent,specSelectors = _props.specSelectors,schema = _props.schema,example = _props.example,isExecute = _props.isExecute;
      var ModelWrapper = getComponent("ModelWrapper");

      return _react2.default.createElement("div", null,
        _react2.default.createElement("ul", { className: "tab" },
          _react2.default.createElement("li", { className: "tabitem" + (isExecute || this.state.activeTab === "example" ? " active" : "") },
            _react2.default.createElement("a", { className: "tablinks", "data-name": "example", onClick: this.activeTab }, "Example Value")),

          _react2.default.createElement("li", { className: "tabitem" + (!isExecute && this.state.activeTab === "model" ? " active" : "") },
            _react2.default.createElement("a", { className: "tablinks" + (isExecute ? " inactive" : ""), "data-name": "model", onClick: this.activeTab }, "Model"))),


        _react2.default.createElement("div", null,

          (isExecute || this.state.activeTab === "example") && example,


          !isExecute && this.state.activeTab === "model" && _react2.default.createElement(ModelWrapper, { schema: schema,
            getComponent: getComponent,
            specSelectors: specSelectors,
            expandDepth: 1 })));





    } }]);return ModelExample;}(_react2.default.Component);ModelExample.propTypes = { getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, schema: _propTypes2.default.object.isRequired, example: _propTypes2.default.any.isRequired, isExecute: _propTypes2.default.bool };exports.default = ModelExample;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

ModelComponent = function (_Component) {(0, _inherits3.default)(ModelComponent, _Component);function ModelComponent() {(0, _classCallCheck3.default)(this, ModelComponent);return (0, _possibleConstructorReturn3.default)(this, (ModelComponent.__proto__ || (0, _getPrototypeOf2.default)(ModelComponent)).apply(this, arguments));}(0, _createClass3.default)(ModelComponent, [{ key: "render", value: function render()








    {var
      getComponent = this.props.getComponent;
      var Model = getComponent("Model");

      return _react2.default.createElement("div", { className: "model-box" },
        _react2.default.createElement(Model, (0, _extends3.default)({}, this.props, { depth: 1, expandDepth: this.props.expandDepth || 0 })));

    } }]);return ModelComponent;}(_react.Component);ModelComponent.propTypes = { schema: _propTypes2.default.object.isRequired, name: _propTypes2.default.string, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, expandDepth: _propTypes2.default.number };exports.default = ModelComponent;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Model = function (_Component) {(0, _inherits3.default)(Model, _Component);function Model() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Model);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Model.__proto__ || (0, _getPrototypeOf2.default)(Model)).call.apply(_ref, [this].concat(args))), _this), _this.











        getModelName = function (ref) {
            if (ref.indexOf("#/definitions/") !== -1) {
                return ref.replace(/^.*#\/definitions\//, "");
            }
        }, _this.

        getRefSchema = function (model) {var
            specSelectors = _this.props.specSelectors;

            return specSelectors.findDefinition(model);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(Model, [{ key: "render", value: function render()

        {var _props =
            this.props,schema = _props.schema,getComponent = _props.getComponent,required = _props.required,name = _props.name,isRef = _props.isRef;
            var ObjectModel = getComponent("ObjectModel");
            var ArrayModel = getComponent("ArrayModel");
            var PrimitiveModel = getComponent("PrimitiveModel");
            var $$ref = schema && schema.get("$$ref");
            var modelName = $$ref && this.getModelName($$ref);
            var modelSchema = void 0,type = void 0;

            if (schema && (schema.get("type") || schema.get("properties"))) {
                modelSchema = schema;
            } else if ($$ref) {
                modelSchema = this.getRefSchema(modelName);
            }

            modelSchema = modelSchema.delete('ignore');

            type = modelSchema && modelSchema.get("type");
            if (!type && modelSchema && modelSchema.get("properties")) {
                type = "object";
            }

            switch (type) {
                case "object":
                    return _react2.default.createElement(ObjectModel, (0, _extends3.default)({ className: "object" }, this.props, { schema: modelSchema,
                        name: name || modelName,
                        isRef: isRef !== undefined ? isRef : !!$$ref }));
                case "array":
                    return _react2.default.createElement(ArrayModel, (0, _extends3.default)({ className: "array" }, this.props, { schema: modelSchema, required: required }));
                case "string":
                case "number":
                case "integer":
                case "boolean":
                default:
                    return _react2.default.createElement(PrimitiveModel, { getComponent: getComponent, schema: modelSchema, required: required });}

        } }]);return Model;}(_react.Component);Model.propTypes = { schema: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, name: _propTypes2.default.string, isRef: _propTypes2.default.bool, required: _propTypes2.default.bool, expandDepth: _propTypes2.default.number, depth: _propTypes2.default.number };exports.default = Model;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Models = function (_Component) {(0, _inherits3.default)(Models, _Component);function Models() {(0, _classCallCheck3.default)(this, Models);return (0, _possibleConstructorReturn3.default)(this, (Models.__proto__ || (0, _getPrototypeOf2.default)(Models)).apply(this, arguments));}(0, _createClass3.default)(Models, [{ key: "render", value: function render()








        {var _props =
            this.props,specSelectors = _props.specSelectors,getComponent = _props.getComponent,layoutSelectors = _props.layoutSelectors,layoutActions = _props.layoutActions,getConfigs = _props.getConfigs;
            var definitions = specSelectors.definitions();var _getConfigs =
            getConfigs(),docExpansion = _getConfigs.docExpansion;
            var showModels = layoutSelectors.isShown("models", docExpansion === "full" || docExpansion === "list");

            var ModelWrapper = getComponent("ModelWrapper");
            var Collapse = getComponent("Collapse");

            if (!definitions.size) return null;

            return _react2.default.createElement("section", { className: showModels ? "models is-open" : "models" },
                _react2.default.createElement("h4", { onClick: function onClick() {return layoutActions.show("models", !showModels);} },
                    _react2.default.createElement("span", null, "Models"),
                    _react2.default.createElement("svg", { width: "20", height: "20" },
                        _react2.default.createElement("use", { xlinkHref: "#large-arrow" }))),


                _react2.default.createElement(Collapse, { isOpened: showModels },

                    definitions.entrySeq().map(function (_ref) {var _ref2 = (0, _slicedToArray3.default)(_ref, 2),name = _ref2[0],model = _ref2[1];
                        return _react2.default.createElement("div", { className: "model-container", key: "models-section-" + name },
                            _react2.default.createElement(ModelWrapper, { name: name,
                                schema: model,
                                isRef: true,
                                getComponent: getComponent,
                                specSelectors: specSelectors }));

                    }).toArray()));



        } }]);return Models;}(_react.Component);Models.propTypes = { getComponent: _propTypes2.default.func, specSelectors: _propTypes2.default.object, layoutSelectors: _propTypes2.default.object, layoutActions: _propTypes2.default.object, getConfigs: _propTypes2.default.func.isRequired };exports.default = Models;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _objectWithoutProperties2 = __webpack_require__(82);var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var braceOpen = "{";
var braceClose = "}";var

ObjectModel = function (_Component) {(0, _inherits3.default)(ObjectModel, _Component);function ObjectModel() {(0, _classCallCheck3.default)(this, ObjectModel);return (0, _possibleConstructorReturn3.default)(this, (ObjectModel.__proto__ || (0, _getPrototypeOf2.default)(ObjectModel)).apply(this, arguments));}(0, _createClass3.default)(ObjectModel, [{ key: "render", value: function render()










    {var _props =
      this.props,schema = _props.schema,name = _props.name,isRef = _props.isRef,getComponent = _props.getComponent,depth = _props.depth,props = (0, _objectWithoutProperties3.default)(_props, ["schema", "name", "isRef", "getComponent", "depth"]);var
      expandDepth = this.props.expandDepth;
      var description = schema.get("description");
      var properties = schema.get("properties");
      var additionalProperties = schema.get("additionalProperties");
      var title = schema.get("title") || name;
      var required = schema.get("required");

      var JumpToPath = getComponent("JumpToPath", true);
      var Markdown = getComponent("Markdown");
      var Model = getComponent("Model");
      var ModelCollapse = getComponent("ModelCollapse");

      var JumpToPathSection = function JumpToPathSection(_ref) {var name = _ref.name;return _react2.default.createElement("span", { className: "model-jump-to-path" }, _react2.default.createElement(JumpToPath, { path: "definitions." + name }));};
      var collapsedContent = _react2.default.createElement("span", null,
        _react2.default.createElement("span", null, braceOpen), "...", _react2.default.createElement("span", null, braceClose),

        isRef ? _react2.default.createElement(JumpToPathSection, { name: name }) : "");



      var titleEl = title && _react2.default.createElement("span", { className: "model-title" },
        isRef && schema.get("$$ref") && _react2.default.createElement("span", { className: "model-hint" }, schema.get("$$ref")),
        _react2.default.createElement("span", { className: "model-title__text" }, title));


      return _react2.default.createElement("span", { className: "model" },
        _react2.default.createElement(ModelCollapse, { title: titleEl, collapsed: depth > expandDepth, collapsedContent: collapsedContent },
          _react2.default.createElement("span", { className: "brace-open object" }, braceOpen),

          !isRef ? null : _react2.default.createElement(JumpToPathSection, { name: name }),

          _react2.default.createElement("span", { className: "inner-object" },

            _react2.default.createElement("table", { className: "model", style: { marginLeft: "2em" } }, _react2.default.createElement("tbody", null,

                !description ? null : _react2.default.createElement("tr", { style: { color: "#999", fontStyle: "italic" } },
                  _react2.default.createElement("td", null, "description:"),
                  _react2.default.createElement("td", null,
                    _react2.default.createElement(Markdown, { source: description }))),




                !(properties && properties.size) ? null : properties.entrySeq().map(
                function (_ref2) {var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),key = _ref3[0],value = _ref3[1];
                  var isRequired = _immutable.List.isList(required) && required.contains(key);
                  var propertyStyle = { verticalAlign: "top", paddingRight: "0.2em" };
                  if (isRequired) {
                    propertyStyle.fontWeight = "bold";
                  }

                  return _react2.default.createElement("tr", { key: key },
                    _react2.default.createElement("td", { style: propertyStyle }, key, ":"),
                    _react2.default.createElement("td", { style: { verticalAlign: "top" } },
                      _react2.default.createElement(Model, (0, _extends3.default)({ key: "object-" + name + "-" + key + "_" + value }, props, {
                        required: isRequired,
                        getComponent: getComponent,
                        schema: value,
                        depth: depth + 1 }))));


                }).toArray(),


                !additionalProperties || !additionalProperties.size ? null :
                _react2.default.createElement("tr", null,
                  _react2.default.createElement("td", null, "< * >:"),
                  _react2.default.createElement("td", null,
                    _react2.default.createElement(Model, (0, _extends3.default)({}, props, { required: false,
                      getComponent: getComponent,
                      schema: additionalProperties,
                      depth: depth + 1 }))))))),






          _react2.default.createElement("span", { className: "brace-close" }, braceClose)));


    } }]);return ObjectModel;}(_react.Component);ObjectModel.propTypes = { schema: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, name: _propTypes2.default.string, isRef: _propTypes2.default.bool, expandDepth: _propTypes2.default.number, depth: _propTypes2.default.number };exports.default = ObjectModel;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);var _typeof2 = __webpack_require__(24);var _typeof3 = _interopRequireDefault(_typeof2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

OnlineValidatorBadge = function (_React$Component) {(0, _inherits3.default)(OnlineValidatorBadge, _React$Component);






  function OnlineValidatorBadge(props, context) {(0, _classCallCheck3.default)(this, OnlineValidatorBadge);var _this = (0, _possibleConstructorReturn3.default)(this, (OnlineValidatorBadge.__proto__ || (0, _getPrototypeOf2.default)(OnlineValidatorBadge)).call(this,
    props, context));var
    specSelectors = props.specSelectors,getConfigs = props.getConfigs;var _getConfigs =
    getConfigs(),validatorUrl = _getConfigs.validatorUrl;
    _this.state = {
      url: specSelectors.url(),
      validatorUrl: validatorUrl === undefined ? "https://online.swagger.io/validator" : validatorUrl };return _this;

  }(0, _createClass3.default)(OnlineValidatorBadge, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(

    nextProps) {var
      specSelectors = nextProps.specSelectors,getConfigs = nextProps.getConfigs;var _getConfigs2 =
      getConfigs(),validatorUrl = _getConfigs2.validatorUrl;

      this.setState({
        url: specSelectors.url(),
        validatorUrl: validatorUrl === undefined ? "https://online.swagger.io/validator" : validatorUrl });

    } }, { key: "render", value: function render()

    {var
      getConfigs = this.props.getConfigs;var _getConfigs3 =
      getConfigs(),spec = _getConfigs3.spec;

      if ((typeof spec === "undefined" ? "undefined" : (0, _typeof3.default)(spec)) === "object" && (0, _keys2.default)(spec).length) return null;

      if (!this.state.url || !this.state.validatorUrl || this.state.url.indexOf("localhost") >= 0 ||
      this.state.url.indexOf("127.0.0.1") >= 0) {
        return null;
      }

      return _react2.default.createElement("span", { style: { float: "right" } },
        _react2.default.createElement("a", { target: "_blank", href: this.state.validatorUrl + "/debug?url=" + this.state.url },
          _react2.default.createElement(ValidatorImage, { src: this.state.validatorUrl + "?url=" + this.state.url, alt: "Online validator badge" })));


    } }]);return OnlineValidatorBadge;}(_react2.default.Component);OnlineValidatorBadge.propTypes = { getComponent: _propTypes2.default.func.isRequired, getConfigs: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired };exports.default = OnlineValidatorBadge;var



ValidatorImage = function (_React$Component2) {(0, _inherits3.default)(ValidatorImage, _React$Component2);





  function ValidatorImage(props) {(0, _classCallCheck3.default)(this, ValidatorImage);var _this2 = (0, _possibleConstructorReturn3.default)(this, (ValidatorImage.__proto__ || (0, _getPrototypeOf2.default)(ValidatorImage)).call(this,
    props));
    _this2.state = {
      loaded: false,
      error: false };return _this2;

  }(0, _createClass3.default)(ValidatorImage, [{ key: "componentDidMount", value: function componentDidMount()

    {var _this3 = this;
      var img = new Image();
      img.onload = function () {
        _this3.setState({
          loaded: true });

      };
      img.onerror = function () {
        _this3.setState({
          error: true });

      };
      img.src = this.props.src;
    } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

    nextProps) {var _this4 = this;
      if (nextProps.src !== this.props.src) {
        var img = new Image();
        img.onload = function () {
          _this4.setState({
            loaded: true });

        };
        img.onerror = function () {
          _this4.setState({
            error: true });

        };
        img.src = nextProps.src;
      }
    } }, { key: "render", value: function render()

    {
      if (this.state.error) {
        return _react2.default.createElement("img", { alt: "Error" });
      } else if (!this.state.loaded) {
        return _react2.default.createElement("img", { alt: "Loading..." });
      }
      return _react2.default.createElement("img", { src: this.props.src, alt: this.props.alt });
    } }]);return ValidatorImage;}(_react2.default.Component);ValidatorImage.propTypes = { src: _propTypes2.default.string, alt: _propTypes2.default.string };

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _utils = __webpack_require__(7);var _proptypes = __webpack_require__(270);var

CustomPropTypes = _interopRequireWildcard(_proptypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//import "less/opblock"
var
Operation = function (_PureComponent) {(0, _inherits3.default)(Operation, _PureComponent);




































  function Operation(props, context) {(0, _classCallCheck3.default)(this, Operation);var _this = (0, _possibleConstructorReturn3.default)(this, (Operation.__proto__ || (0, _getPrototypeOf2.default)(Operation)).call(this,
    props, context));_this.




























    toggleShown = function () {var _this$props =
      _this.props,layoutActions = _this$props.layoutActions,isShownKey = _this$props.isShownKey;
      layoutActions.show(isShownKey, !_this.isShown());
    };_this.

    isShown = function () {var _this$props2 =
      _this.props,layoutSelectors = _this$props2.layoutSelectors,isShownKey = _this$props2.isShownKey,getConfigs = _this$props2.getConfigs;var _getConfigs =
      getConfigs(),docExpansion = _getConfigs.docExpansion;

      return layoutSelectors.isShown(isShownKey, docExpansion === "full"); // Here is where we set the default
    };_this.

    onTryoutClick = function () {
      _this.setState({ tryItOutEnabled: !_this.state.tryItOutEnabled });
    };_this.

    onCancelClick = function () {var _this$props3 =
      _this.props,specActions = _this$props3.specActions,path = _this$props3.path,method = _this$props3.method;
      _this.setState({ tryItOutEnabled: !_this.state.tryItOutEnabled });
      specActions.clearValidateParams([path, method]);
    };_this.

    onExecute = function () {
      _this.setState({ executeInProgress: true });
    };_this.state = { tryItOutEnabled: false };return _this;}(0, _createClass3.default)(Operation, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(nextProps) {var defaultContentType = "application/json";var specActions = nextProps.specActions,path = nextProps.path,method = nextProps.method,operation = nextProps.operation;var producesValue = operation.get("produces_value");var produces = operation.get("produces");var consumes = operation.get("consumes");var consumesValue = operation.get("consumes_value");if (nextProps.response !== this.props.response) {this.setState({ executeInProgress: false });}if (producesValue === undefined) {producesValue = produces && produces.size ? produces.first() : defaultContentType;specActions.changeProducesValue([path, method], producesValue);}if (consumesValue === undefined) {consumesValue = consumes && consumes.size ? consumes.first() : defaultContentType;specActions.changeConsumesValue([path, method], consumesValue);}} }, { key: "render", value: function render()

    {var _props =



















      this.props,isShownKey = _props.isShownKey,jumpToKey = _props.jumpToKey,path = _props.path,method = _props.method,operation = _props.operation,showSummary = _props.showSummary,response = _props.response,request = _props.request,allowTryItOut = _props.allowTryItOut,displayOperationId = _props.displayOperationId,displayRequestDuration = _props.displayRequestDuration,fn = _props.fn,getComponent = _props.getComponent,specActions = _props.specActions,specSelectors = _props.specSelectors,authActions = _props.authActions,authSelectors = _props.authSelectors,getConfigs = _props.getConfigs;

      var summary = operation.get("summary");
      var description = operation.get("description");
      var deprecated = operation.get("deprecated");
      var externalDocs = operation.get("externalDocs");
      var responses = operation.get("responses");
      var security = operation.get("security") || specSelectors.security();
      var produces = operation.get("produces");
      var schemes = operation.get("schemes");
      var parameters = (0, _utils.getList)(operation, ["parameters"]);
      var operationId = operation.get("__originalOperationId");
      var operationScheme = specSelectors.operationScheme(path, method);

      var Responses = getComponent("responses");
      var Parameters = getComponent("parameters");
      var Execute = getComponent("execute");
      var Clear = getComponent("clear");
      var AuthorizeOperationBtn = getComponent("authorizeOperationBtn");
      var JumpToPath = getComponent("JumpToPath", true);
      var Collapse = getComponent("Collapse");
      var Markdown = getComponent("Markdown");
      var Schemes = getComponent("schemes");var _getConfigs2 =

      getConfigs(),deepLinking = _getConfigs2.deepLinking;

      var isDeepLinkingEnabled = deepLinking && deepLinking !== "false";

      // Merge in Live Response
      if (response && response.size > 0) {
        var notDocumented = !responses.get(String(response.get("status")));
        response = response.set("notDocumented", notDocumented);
      }var

      tryItOutEnabled = this.state.tryItOutEnabled;
      var shown = this.isShown();
      var onChangeKey = [path, method]; // Used to add values to _this_ operation ( indexed by path and method )

      return (
        _react2.default.createElement("div", { className: deprecated ? "opblock opblock-deprecated" : shown ? "opblock opblock-" + method + " is-open" : "opblock opblock-" + method, id: isShownKey.join("-") },
          _react2.default.createElement("div", { className: "opblock-summary opblock-summary-" + method, onClick: this.toggleShown },
            _react2.default.createElement("span", { className: "opblock-summary-method" }, method.toUpperCase()),
            _react2.default.createElement("span", { className: deprecated ? "opblock-summary-path__deprecated" : "opblock-summary-path" },
              _react2.default.createElement("a", {
                  className: "nostyle",
                  onClick: function onClick(e) {return e.preventDefault();},
                  href: isDeepLinkingEnabled ? "#/" + isShownKey[1] + "/" + isShownKey[2] : "" },
                _react2.default.createElement("span", null, path)),

              _react2.default.createElement(JumpToPath, { path: jumpToKey })),


            !showSummary ? null :
            _react2.default.createElement("div", { className: "opblock-summary-description" },
              summary),



            displayOperationId && operationId ? _react2.default.createElement("span", { className: "opblock-summary-operation-id" }, operationId) : null,


            !security || !security.count() ? null :
            _react2.default.createElement(AuthorizeOperationBtn, { authActions: authActions,
              security: security,
              authSelectors: authSelectors })),



          _react2.default.createElement(Collapse, { isOpened: shown, animated: true },
            _react2.default.createElement("div", { className: "opblock-body" },
              deprecated && _react2.default.createElement("h4", { className: "opblock-title_normal" }, " Warning: Deprecated"),
              description &&
              _react2.default.createElement("div", { className: "opblock-description-wrapper" },
                _react2.default.createElement("div", { className: "opblock-description" },
                  _react2.default.createElement(Markdown, { source: description }))),




              externalDocs && externalDocs.get("url") ?
              _react2.default.createElement("div", { className: "opblock-external-docs-wrapper" },
                _react2.default.createElement("h4", { className: "opblock-title_normal" }, "Find more details"),
                _react2.default.createElement("div", { className: "opblock-external-docs" },
                  _react2.default.createElement("span", { className: "opblock-external-docs__description" },
                    _react2.default.createElement(Markdown, { source: externalDocs.get("description") })),

                  _react2.default.createElement("a", { className: "opblock-external-docs__link", href: externalDocs.get("url") }, externalDocs.get("url")))) :

              null,

              _react2.default.createElement(Parameters, {
                parameters: parameters,
                onChangeKey: onChangeKey,
                onTryoutClick: this.onTryoutClick,
                onCancelClick: this.onCancelClick,
                tryItOutEnabled: tryItOutEnabled,
                allowTryItOut: allowTryItOut,

                fn: fn,
                getComponent: getComponent,
                specActions: specActions,
                specSelectors: specSelectors,
                pathMethod: [path, method] }),


              !tryItOutEnabled || !allowTryItOut ? null : schemes && schemes.size ? _react2.default.createElement("div", { className: "opblock-schemes" },
                _react2.default.createElement(Schemes, { schemes: schemes,
                  path: path,
                  method: method,
                  specActions: specActions,
                  operationScheme: operationScheme })) :
              null,


              _react2.default.createElement("div", { className: !tryItOutEnabled || !response || !allowTryItOut ? "execute-wrapper" : "btn-group" },
                !tryItOutEnabled || !allowTryItOut ? null :

                _react2.default.createElement(Execute, {
                  getComponent: getComponent,
                  operation: operation,
                  specActions: specActions,
                  specSelectors: specSelectors,
                  path: path,
                  method: method,
                  onExecute: this.onExecute }),


                !tryItOutEnabled || !response || !allowTryItOut ? null :
                _react2.default.createElement(Clear, {
                  onClick: this.onClearClick,
                  specActions: specActions,
                  path: path,
                  method: method })),



              this.state.executeInProgress ? _react2.default.createElement("div", { className: "loading-container" }, _react2.default.createElement("div", { className: "loading" })) : null,

              !responses ? null :
              _react2.default.createElement(Responses, {
                responses: responses,
                request: request,
                tryItOutResponse: response,
                getComponent: getComponent,
                specSelectors: specSelectors,
                specActions: specActions,
                produces: produces,
                producesValue: operation.get("produces_value"),
                pathMethod: [path, method],
                displayRequestDuration: displayRequestDuration,
                fn: fn })))));





    } }]);return Operation;}(_react.PureComponent);Operation.propTypes = { path: _propTypes2.default.string.isRequired, method: _propTypes2.default.string.isRequired, operation: _propTypes2.default.object.isRequired, showSummary: _propTypes2.default.bool, isShownKey: CustomPropTypes.arrayOrString.isRequired, jumpToKey: CustomPropTypes.arrayOrString.isRequired, allowTryItOut: _propTypes2.default.bool, displayOperationId: _propTypes2.default.bool, displayRequestDuration: _propTypes2.default.bool, response: _propTypes2.default.object, request: _propTypes2.default.object, getComponent: _propTypes2.default.func.isRequired, authActions: _propTypes2.default.object, authSelectors: _propTypes2.default.object, specActions: _propTypes2.default.object.isRequired, specSelectors: _propTypes2.default.object.isRequired, layoutActions: _propTypes2.default.object.isRequired, layoutSelectors: _propTypes2.default.object.isRequired, fn: _propTypes2.default.object.isRequired, getConfigs: _propTypes2.default.func.isRequired };Operation.defaultProps = { showSummary: true, response: null, allowTryItOut: true, displayOperationId: false, displayRequestDuration: false };exports.default = Operation;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

OperationWrapper = function (_React$Component) {(0, _inherits3.default)(OperationWrapper, _React$Component);function OperationWrapper() {(0, _classCallCheck3.default)(this, OperationWrapper);return (0, _possibleConstructorReturn3.default)(this, (OperationWrapper.__proto__ || (0, _getPrototypeOf2.default)(OperationWrapper)).apply(this, arguments));}(0, _createClass3.default)(OperationWrapper, [{ key: "render", value: function render()








    {var
      getComponent = this.props.getComponent;
      //const operation = getComponent("operation")

      console.log('inside of OperationWrapper');

      return _react2.default.createElement("div", { className: "model-boxxxxxxxxxxxxxxx" },
        _react2.default.createElement("div", null, "YAYYAYAYAYAYAYAYAYAYA"));

    } }]);return OperationWrapper;}(_react2.default.Component);OperationWrapper.propTypes = { schema: _propTypes2.default.object.isRequired, name: _propTypes2.default.string, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, expandDepth: _propTypes2.default.number };exports.default = OperationWrapper;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _swaggerClient = __webpack_require__(216);
var _reactRouterDom = __webpack_require__(120);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

opId = _swaggerClient.helpers.opId;var

Operations = function (_React$Component) {(0, _inherits3.default)(Operations, _React$Component);function Operations() {(0, _classCallCheck3.default)(this, Operations);return (0, _possibleConstructorReturn3.default)(this, (Operations.__proto__ || (0, _getPrototypeOf2.default)(Operations)).apply(this, arguments));}(0, _createClass3.default)(Operations, [{ key: "render", value: function render()











    {var _props =










      this.props,specSelectors = _props.specSelectors,specActions = _props.specActions,getComponent = _props.getComponent,layoutSelectors = _props.layoutSelectors,layoutActions = _props.layoutActions,authActions = _props.authActions,authSelectors = _props.authSelectors,getConfigs = _props.getConfigs,fn = _props.fn;

      var taggedOps = specSelectors.taggedOperations();

      var Operation = getComponent("operation");
      var OperationWrapper = getComponent("operationWrapper");
      var Collapse = getComponent("Collapse");

      var showSummary = layoutSelectors.showSummary();var _getConfigs =






      getConfigs(),docExpansion = _getConfigs.docExpansion,displayOperationId = _getConfigs.displayOperationId,displayRequestDuration = _getConfigs.displayRequestDuration,maxDisplayedTags = _getConfigs.maxDisplayedTags,deepLinking = _getConfigs.deepLinking;

      var isDeepLinkingEnabled = deepLinking && deepLinking !== "false";

      var filter = layoutSelectors.currentFilter();

      if (filter) {
        if (filter !== true) {
          taggedOps = taggedOps.filter(function (tagObj, tag) {
            return tag.indexOf(filter) !== -1;
          });
        }
      }

      if (maxDisplayedTags && !isNaN(maxDisplayedTags) && maxDisplayedTags >= 0) {
        taggedOps = taggedOps.slice(0, maxDisplayedTags);
      }

      return (
        _react2.default.createElement("div", null,


          taggedOps.map(function (tagObj, tag) {
            var operations = tagObj.get("operations");
            var tagDescription = tagObj.getIn(["tagDetails", "description"], null);

            //const operationId = op.getIn(["operation", "operationId"]) || op.getIn(["operation", "__originalOperationId"]) || opId(op.get("operation"), path, method) || op.get("id")

            // let isShownKey = ["operations-tag", tag]
            // let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

            operations.map(function (op) {return _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "#" + tag + "_" + op.get('id'), key: tag + "_" + op.get('id'), render: function render(x) {return console.log('inside render=', x);} });});
          }).toArray(),


          taggedOps.size < 1 ? _react2.default.createElement("h3", null, " No operations defined in spec! ") : null));


    } }]);return Operations;}(_react2.default.Component);Operations.propTypes = { specSelectors: _propTypes2.default.object.isRequired, specActions: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, layoutSelectors: _propTypes2.default.object.isRequired, layoutActions: _propTypes2.default.object.isRequired, authActions: _propTypes2.default.object.isRequired, authSelectors: _propTypes2.default.object.isRequired, getConfigs: _propTypes2.default.func.isRequired };exports.default = Operations;


Operations.propTypes = {
  layoutActions: _propTypes2.default.object.isRequired,
  specSelectors: _propTypes2.default.object.isRequired,
  specActions: _propTypes2.default.object.isRequired,
  layoutSelectors: _propTypes2.default.object.isRequired,
  getComponent: _propTypes2.default.func.isRequired,
  fn: _propTypes2.default.object.isRequired };

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.OperationLink = undefined;var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _layoutUtils = __webpack_require__(122);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


Overview = function (_React$Component) {(0, _inherits3.default)(Overview, _React$Component);

  function Overview() {var _ref;(0, _classCallCheck3.default)(this, Overview);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Overview.__proto__ || (0, _getPrototypeOf2.default)(Overview)).call.apply(_ref, [this].concat(
    args)));
    _this.setTagShown = _this._setTagShown.bind(_this);return _this;
  }(0, _createClass3.default)(Overview, [{ key: "_setTagShown", value: function _setTagShown(

    showTagId, shown) {
      this.props.layoutActions.show(showTagId, shown);
    } }, { key: "showOp", value: function showOp(

    key, shown) {var
      layoutActions = this.props.layoutActions;
      layoutActions.show(key, shown);
    } }, { key: "render", value: function render()

    {var _props =
      this.props,specSelectors = _props.specSelectors,layoutSelectors = _props.layoutSelectors,layoutActions = _props.layoutActions,getComponent = _props.getComponent;
      var taggedOps = specSelectors.taggedOperations();

      var Collapse = getComponent("Collapse");

      return (
        _react2.default.createElement("div", null,
          _react2.default.createElement("h4", { className: "overview-title" }, "Overview"),


          taggedOps.map(function (tagObj, tag) {
            var operations = tagObj.get("operations");

            var showTagId = ["overview-tags", tag];
            var showTag = layoutSelectors.isShown(showTagId, true);
            var toggleShow = function toggleShow() {return layoutActions.show(showTagId, !showTag);};

            return (
              _react2.default.createElement("div", { key: "overview-" + tag },


                _react2.default.createElement("h4", { onClick: toggleShow, className: "link overview-tag" }, " ", showTag ? "-" : "+", tag),

                _react2.default.createElement(Collapse, { isOpened: showTag, animated: true },

                  operations.map(function (op) {var _op$toObject =
                    op.toObject(),path = _op$toObject.path,method = _op$toObject.method,id = _op$toObject.id; // toObject is shallow
                    var showOpIdPrefix = "operations";
                    var showOpId = id;
                    var shown = layoutSelectors.isShown([showOpIdPrefix, showOpId]);
                    return _react2.default.createElement(OperationLink, { key: id,
                      path: path,
                      method: method,
                      id: path + "-" + method,
                      shown: shown,
                      showOpId: showOpId,
                      showOpIdPrefix: showOpIdPrefix,
                      href: "#operation-" + showOpId,
                      onClick: layoutActions.show });
                  }).toArray())));





          }).toArray(),


          taggedOps.size < 1 && _react2.default.createElement("h3", null, " No operations defined in spec! ")));


    } }]);return Overview;}(_react2.default.Component);exports.default = Overview;



Overview.propTypes = {
  layoutSelectors: _propTypes2.default.object.isRequired,
  specSelectors: _propTypes2.default.object.isRequired,
  layoutActions: _propTypes2.default.object.isRequired,
  getComponent: _propTypes2.default.func.isRequired };var


OperationLink = exports.OperationLink = function (_React$Component2) {(0, _inherits3.default)(OperationLink, _React$Component2);

  function OperationLink(props) {(0, _classCallCheck3.default)(this, OperationLink);var _this2 = (0, _possibleConstructorReturn3.default)(this, (OperationLink.__proto__ || (0, _getPrototypeOf2.default)(OperationLink)).call(this,
    props));
    _this2.onClick = _this2._onClick.bind(_this2);return _this2;
  }(0, _createClass3.default)(OperationLink, [{ key: "_onClick", value: function _onClick()

    {var _props2 =
      this.props,showOpId = _props2.showOpId,showOpIdPrefix = _props2.showOpIdPrefix,onClick = _props2.onClick,shown = _props2.shown;
      onClick([showOpIdPrefix, showOpId], !shown);
    } }, { key: "render", value: function render()

    {var _props3 =
      this.props,id = _props3.id,method = _props3.method,shown = _props3.shown,href = _props3.href;

      return (
        _react2.default.createElement(_layoutUtils.Link, { href: href, style: { fontWeight: shown ? "bold" : "normal" }, onClick: this.onClick, className: "block opblock-link" },
          _react2.default.createElement("div", null,
            _react2.default.createElement("small", { className: "bold-label-" + method }, method.toUpperCase()),
            _react2.default.createElement("span", { className: "bold-label" }, id))));



    } }]);return OperationLink;}(_react2.default.Component);



OperationLink.propTypes = {
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  id: _propTypes2.default.string.isRequired,
  method: _propTypes2.default.string.isRequired,
  shown: _propTypes2.default.bool.isRequired,
  showOpId: _propTypes2.default.string.isRequired,
  showOpIdPrefix: _propTypes2.default.string.isRequired };

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var NOOP = Function.prototype;var

ParamBody = function (_PureComponent) {(0, _inherits3.default)(ParamBody, _PureComponent);





















  function ParamBody(props, context) {(0, _classCallCheck3.default)(this, ParamBody);var _this = (0, _possibleConstructorReturn3.default)(this, (ParamBody.__proto__ || (0, _getPrototypeOf2.default)(ParamBody)).call(this,
    props, context));_initialiseProps.call(_this);

    _this.state = {
      isEditBox: false,
      value: "" };return _this;


  }(0, _createClass3.default)(ParamBody, [{ key: "componentDidMount", value: function componentDidMount()

    {
      this.updateValues.call(this, this.props);
    } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

    nextProps) {
      this.updateValues.call(this, nextProps);
    } }, { key: "render", value: function render()













































    {var _props =








      this.props,onChangeConsumes = _props.onChangeConsumes,param = _props.param,isExecute = _props.isExecute,specSelectors = _props.specSelectors,pathMethod = _props.pathMethod,getComponent = _props.getComponent;

      var Button = getComponent("Button");
      var TextArea = getComponent("TextArea");
      var HighlightCode = getComponent("highlightCode");
      var ContentType = getComponent("contentType");
      // for domains where specSelectors not passed
      var parameter = specSelectors ? specSelectors.getParameter(pathMethod, param.get("name")) : param;
      var errors = parameter.get("errors", (0, _immutable.List)());
      var consumesValue = specSelectors.contentTypeValues(pathMethod).get("requestContentType");
      var consumes = this.props.consumes && this.props.consumes.size ? this.props.consumes : ParamBody.defaultProp.consumes;var _state =

      this.state,value = _state.value,isEditBox = _state.isEditBox;

      return (
        _react2.default.createElement("div", { className: "body-param" },

          isEditBox && isExecute ?
          _react2.default.createElement(TextArea, { className: "body-param__text" + (errors.count() ? " invalid" : ""), value: value, onChange: this.handleOnChange }) :
          value && _react2.default.createElement(HighlightCode, { className: "body-param__example",
            value: value }),

          _react2.default.createElement("div", { className: "body-param-options" },

            !isExecute ? null :
            _react2.default.createElement("div", { className: "body-param-edit" },
              _react2.default.createElement(Button, { className: isEditBox ? "btn cancel body-param__example-edit" : "btn edit body-param__example-edit",
                  onClick: this.toggleIsEditBox }, isEditBox ? "Cancel" : "Edit")),



            _react2.default.createElement("label", { htmlFor: "" },
              _react2.default.createElement("span", null, "Parameter content type"),
              _react2.default.createElement(ContentType, { value: consumesValue, contentTypes: consumes, onChange: onChangeConsumes, className: "body-param-content-type" })))));






    } }]);return ParamBody;}(_react.PureComponent);ParamBody.propTypes = { param: _propTypes2.default.object, onChange: _propTypes2.default.func, onChangeConsumes: _propTypes2.default.func, consumes: _propTypes2.default.object, consumesValue: _propTypes2.default.string, fn: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, isExecute: _propTypes2.default.bool, specSelectors: _propTypes2.default.object.isRequired, pathMethod: _propTypes2.default.array.isRequired };ParamBody.defaultProp = { consumes: (0, _immutable.fromJS)(["application/json"]), param: (0, _immutable.fromJS)({}), onChange: NOOP, onChangeConsumes: NOOP };var _initialiseProps = function _initialiseProps() {var _this2 = this;this.updateValues = function (props) {var specSelectors = props.specSelectors,pathMethod = props.pathMethod,param = props.param,isExecute = props.isExecute,_props$consumesValue = props.consumesValue,consumesValue = _props$consumesValue === undefined ? "" : _props$consumesValue;var parameter = specSelectors ? specSelectors.getParameter(pathMethod, param.get("name")) : {};var isXml = /xml/i.test(consumesValue);var isJson = /json/i.test(consumesValue);var paramValue = isXml ? parameter.get("value_xml") : parameter.get("value");if (paramValue !== undefined) {var val = !paramValue && isJson ? "{}" : paramValue;_this2.setState({ value: val });_this2.onChange(val, { isXml: isXml, isEditBox: isExecute });} else {if (isXml) {_this2.onChange(_this2.sample("xml"), { isXml: isXml, isEditBox: isExecute });} else {_this2.onChange(_this2.sample(), { isEditBox: isExecute });}}};this.sample = function (xml) {var _props2 = _this2.props,param = _props2.param,inferSchema = _props2.fn.inferSchema;var schema = inferSchema(param.toJS());return (0, _utils.getSampleSchema)(schema, xml);};this.onChange = function (value, _ref) {var isEditBox = _ref.isEditBox,isXml = _ref.isXml;_this2.setState({ value: value, isEditBox: isEditBox });_this2._onChange(value, isXml);};this._onChange = function (val, isXml) {(_this2.props.onChange || NOOP)(_this2.props.param, val, isXml);};this.handleOnChange = function (e) {var consumesValue = _this2.props.consumesValue;var isJson = /json/i.test(consumesValue);var isXml = /xml/i.test(consumesValue);var inputValue = isJson ? e.target.value.trim() : e.target.value;_this2.onChange(inputValue, { isXml: isXml });};this.toggleIsEditBox = function () {return _this2.setState(function (state) {return { isEditBox: !state.isEditBox };});};};exports.default = ParamBody;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


ParameterRow = function (_Component) {(0, _inherits3.default)(ParameterRow, _Component);











  function ParameterRow(props, context) {(0, _classCallCheck3.default)(this, ParameterRow);var _this = (0, _possibleConstructorReturn3.default)(this, (ParameterRow.__proto__ || (0, _getPrototypeOf2.default)(ParameterRow)).call(this,
    props, context));_initialiseProps.call(_this);var

    specSelectors = props.specSelectors,pathMethod = props.pathMethod,param = props.param;
    var defaultValue = param.get("default");
    var parameter = specSelectors.getParameter(pathMethod, param.get("name"));
    var value = parameter ? parameter.get("value") : "";
    if (defaultValue !== undefined && value === undefined) {
      _this.onChangeWrapper(defaultValue);
    }return _this;
  }(0, _createClass3.default)(ParameterRow, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(

    props) {var
      specSelectors = props.specSelectors,pathMethod = props.pathMethod,param = props.param;
      var example = param.get("example");
      var defaultValue = param.get("default");
      var parameter = specSelectors.getParameter(pathMethod, param.get("name"));
      var paramValue = parameter ? parameter.get("value") : undefined;
      var enumValue = parameter ? parameter.get("enum") : undefined;
      var value = void 0;

      if (paramValue !== undefined) {
        value = paramValue;
      } else if (example !== undefined) {
        value = example;
      } else if (defaultValue !== undefined) {
        value = defaultValue;
      } else if (param.get("required") && enumValue && enumValue.size) {
        value = enumValue.first();
      }

      if (value !== undefined) {
        this.onChangeWrapper(value);
      }
    } }, { key: "render", value: function render()






    {var _props =
      this.props,param = _props.param,onChange = _props.onChange,getComponent = _props.getComponent,isExecute = _props.isExecute,fn = _props.fn,onChangeConsumes = _props.onChangeConsumes,specSelectors = _props.specSelectors,pathMethod = _props.pathMethod;

      // const onChangeWrapper = (value) => onChange(param, value)
      var JsonSchemaForm = getComponent("JsonSchemaForm");
      var ParamBody = getComponent("ParamBody");
      var inType = param.get("in");
      var bodyParam = inType !== "body" ? null :
      _react2.default.createElement(ParamBody, { getComponent: getComponent,
        fn: fn,
        param: param,
        consumes: specSelectors.operationConsumes(pathMethod),
        consumesValue: specSelectors.contentTypeValues(pathMethod).get("requestContentType"),
        onChange: onChange,
        onChangeConsumes: onChangeConsumes,
        isExecute: isExecute,
        specSelectors: specSelectors,
        pathMethod: pathMethod });


      var ModelExample = getComponent("modelExample");
      var Markdown = getComponent("Markdown");

      var schema = param.get("schema");

      var isFormData = inType === "formData";
      var isFormDataSupported = "FormData" in _window2.default;
      var required = param.get("required");
      var itemType = param.getIn(["items", "type"]);
      var parameter = specSelectors.getParameter(pathMethod, param.get("name"));
      var value = parameter ? parameter.get("value") : "";

      return (
        _react2.default.createElement("tr", null,
          _react2.default.createElement("td", { className: "col parameters-col_name" },
            _react2.default.createElement("div", { className: required ? "parameter__name required" : "parameter__name" },
              param.get("name"),
              !required ? null : _react2.default.createElement("span", { style: { color: "red" } }, "\xA0*")),

            _react2.default.createElement("div", { className: "parameter__type" }, param.get("type"), " ", itemType && "[" + itemType + "]"),
            _react2.default.createElement("div", { className: "parameter__in" }, "(", param.get("in"), ")")),


          _react2.default.createElement("td", { className: "col parameters-col_description" },
            _react2.default.createElement(Markdown, { source: param.get("description") }),
            isFormData && !isFormDataSupported && _react2.default.createElement("div", null, "Error: your browser does not support FormData"),

            bodyParam || !isExecute ? null :
            _react2.default.createElement(JsonSchemaForm, { fn: fn,
              getComponent: getComponent,
              value: value,
              required: required,
              description: param.get("description") ? param.get("name") + " - " + param.get("description") : "" + param.get("name"),
              onChange: this.onChangeWrapper,
              schema: param }),




            bodyParam && schema ? _react2.default.createElement(ModelExample, { getComponent: getComponent,
              isExecute: isExecute,
              specSelectors: specSelectors,
              schema: schema,
              example: bodyParam }) :
            null)));







    } }]);return ParameterRow;}(_react.Component);ParameterRow.propTypes = { onChange: _propTypes2.default.func.isRequired, param: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, fn: _propTypes2.default.object.isRequired, isExecute: _propTypes2.default.bool, onChangeConsumes: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, pathMethod: _propTypes2.default.array.isRequired };var _initialiseProps = function _initialiseProps() {var _this2 = this;this.onChangeWrapper = function (value) {var _props2 = _this2.props,onChange = _props2.onChange,param = _props2.param;return onChange(param, value);};};exports.default = ParameterRow;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactImmutableProptypes = __webpack_require__(26);var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);
var _immutable = __webpack_require__(8);var _immutable2 = _interopRequireDefault(_immutable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// More readable, just iterate over maps, only
var eachMap = function eachMap(iterable, fn) {return iterable.valueSeq().filter(_immutable2.default.Map.isMap).map(fn);};var

Parameters = function (_Component) {(0, _inherits3.default)(Parameters, _Component);function Parameters() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Parameters);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Parameters.__proto__ || (0, _getPrototypeOf2.default)(Parameters)).call.apply(_ref, [this].concat(args))), _this), _this.
























    onChange = function (param, value, isXml) {var _this$props =



      _this.props,changeParam = _this$props.specActions.changeParam,onChangeKey = _this$props.onChangeKey;

      changeParam(onChangeKey, param.get("name"), value, isXml);
    }, _this.

    onChangeConsumesWrapper = function (val) {var _this$props2 =



      _this.props,changeConsumesValue = _this$props2.specActions.changeConsumesValue,onChangeKey = _this$props2.onChangeKey;

      changeConsumesValue(onChangeKey, val);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(Parameters, [{ key: "render", value: function render()

    {var _this2 = this;var _props =












      this.props,onTryoutClick = _props.onTryoutClick,onCancelClick = _props.onCancelClick,parameters = _props.parameters,allowTryItOut = _props.allowTryItOut,tryItOutEnabled = _props.tryItOutEnabled,fn = _props.fn,getComponent = _props.getComponent,specSelectors = _props.specSelectors,pathMethod = _props.pathMethod;

      var ParameterRow = getComponent("parameterRow");
      var TryItOutButton = getComponent("TryItOutButton");

      var isExecute = tryItOutEnabled && allowTryItOut;

      return (
        _react2.default.createElement("div", { className: "opblock-section" },
          _react2.default.createElement("div", { className: "opblock-section-header" },
            _react2.default.createElement("h4", { className: "opblock-title" }, "Parameters"),
            allowTryItOut ?
            _react2.default.createElement(TryItOutButton, { enabled: tryItOutEnabled, onCancelClick: onCancelClick, onTryoutClick: onTryoutClick }) :
            null),

          !parameters.count() ? _react2.default.createElement("div", { className: "opblock-description-wrapper" }, _react2.default.createElement("p", null, "No parameters")) :
          _react2.default.createElement("div", { className: "table-container" },
            _react2.default.createElement("table", { className: "parameters" },
              _react2.default.createElement("thead", null,
                _react2.default.createElement("tr", null,
                  _react2.default.createElement("th", { className: "col col_header parameters-col_name" }, "Name"),
                  _react2.default.createElement("th", { className: "col col_header parameters-col_description" }, "Description"))),


              _react2.default.createElement("tbody", null,

                eachMap(parameters, function (parameter) {return (
                    _react2.default.createElement(ParameterRow, { fn: fn,
                      getComponent: getComponent,
                      param: parameter,
                      key: parameter.get("name"),
                      onChange: _this2.onChange,
                      onChangeConsumes: _this2.onChangeConsumesWrapper,
                      specSelectors: specSelectors,
                      pathMethod: pathMethod,
                      isExecute: isExecute }));}).
                toArray())))));







    } }]);return Parameters;}(_react.Component);Parameters.propTypes = { parameters: _reactImmutableProptypes2.default.list.isRequired, specActions: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, fn: _propTypes2.default.object.isRequired, tryItOutEnabled: _propTypes2.default.bool, allowTryItOut: _propTypes2.default.bool, onTryoutClick: _propTypes2.default.func, onCancelClick: _propTypes2.default.func, onChangeKey: _propTypes2.default.array, pathMethod: _propTypes2.default.array.isRequired };Parameters.defaultProps = { onTryoutClick: Function.prototype, onCancelClick: Function.prototype, tryItOutEnabled: false, allowTryItOut: true, onChangeKey: [] };exports.default = Parameters;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var propStyle = { color: "#999", fontStyle: "italic" };var

Primitive = function (_Component) {(0, _inherits3.default)(Primitive, _Component);function Primitive() {(0, _classCallCheck3.default)(this, Primitive);return (0, _possibleConstructorReturn3.default)(this, (Primitive.__proto__ || (0, _getPrototypeOf2.default)(Primitive)).apply(this, arguments));}(0, _createClass3.default)(Primitive, [{ key: "render", value: function render()






    {var _props =
      this.props,schema = _props.schema,getComponent = _props.getComponent,required = _props.required;

      if (!schema || !schema.get) {
        // don't render if schema isn't correctly formed
        return _react2.default.createElement("div", null);
      }

      var type = schema.get("type");
      var format = schema.get("format");
      var xml = schema.get("xml");
      var enumArray = schema.get("enum");
      var description = schema.get("description");
      var properties = schema.filter(function (v, key) {return ["enum", "type", "format", "description", "$$ref"].indexOf(key) === -1;});
      var style = required ? { fontWeight: "bold" } : {};
      var Markdown = getComponent("Markdown");
      var EnumModel = getComponent("EnumModel");

      return _react2.default.createElement("span", { className: "prop" },
        _react2.default.createElement("span", { className: "prop-type", style: style }, type), " ", required && _react2.default.createElement("span", { style: { color: "red" } }, "*"),
        format && _react2.default.createElement("span", { className: "prop-format" }, "($", format, ")"),

        properties.size ? properties.entrySeq().map(function (_ref) {var _ref2 = (0, _slicedToArray3.default)(_ref, 2),key = _ref2[0],v = _ref2[1];return _react2.default.createElement("span", { key: key + "-" + v, style: propStyle },
            _react2.default.createElement("br", null), key, ": ", String(v));}) :
        null,


        !description ? null :
        _react2.default.createElement(Markdown, { source: description }),


        xml && xml.size ? _react2.default.createElement("span", null, _react2.default.createElement("br", null), _react2.default.createElement("span", { style: propStyle }, "xml:"),

          xml.entrySeq().map(function (_ref3) {var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),key = _ref4[0],v = _ref4[1];return _react2.default.createElement("span", { key: key + "-" + v, style: propStyle }, _react2.default.createElement("br", null), "\xA0\xA0\xA0", key, ": ", String(v));}).toArray()) :

        null,


        enumArray && _react2.default.createElement(EnumModel, { value: enumArray, getComponent: getComponent }));


    } }]);return Primitive;}(_react.Component);Primitive.propTypes = { schema: _propTypes2.default.object.isRequired, getComponent: _propTypes2.default.func.isRequired, required: _propTypes2.default.bool };exports.default = Primitive;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRemarkable = __webpack_require__(502);var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);
var _sanitizeHtml = __webpack_require__(506);var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var sanitizeOptions = {
  textFilter: function textFilter(text) {
    return text.
    replace(/&quot;/g, "\"");
  } };


function Markdown(_ref) {var source = _ref.source;
  var sanitized = (0, _sanitizeHtml2.default)(source, sanitizeOptions);

  // sometimes the sanitizer returns "undefined" as a string
  if (!source || !sanitized || sanitized === "undefined") {
    return null;
  }

  return _react2.default.createElement("div", { className: "markdown" },
    _react2.default.createElement(_reactRemarkable2.default, {
      options: { html: true, typographer: true, breaks: true, linkify: true, linkTarget: "_blank" },
      source: sanitized }));


}

Markdown.propTypes = {
  source: _propTypes2.default.string.isRequired };exports.default =


Markdown;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);var _utils = __webpack_require__(7);

var _lowerCase = __webpack_require__(480);var _lowerCase2 = _interopRequireDefault(_lowerCase);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

ResponseBody = function (_React$Component) {(0, _inherits3.default)(ResponseBody, _React$Component);function ResponseBody() {(0, _classCallCheck3.default)(this, ResponseBody);return (0, _possibleConstructorReturn3.default)(this, (ResponseBody.__proto__ || (0, _getPrototypeOf2.default)(ResponseBody)).apply(this, arguments));}(0, _createClass3.default)(ResponseBody, [{ key: "render", value: function render()









    {var _props =
      this.props,content = _props.content,contentType = _props.contentType,url = _props.url,_props$headers = _props.headers,headers = _props$headers === undefined ? {} : _props$headers,getComponent = _props.getComponent;
      var HighlightCode = getComponent("highlightCode");
      var body = void 0,bodyEl = void 0;
      url = url || "";

      // JSON
      if (/json/i.test(contentType)) {
        try {
          body = (0, _stringify2.default)(JSON.parse(content), null, "  ");
        } catch (error) {
          body = "can't parse JSON.  Raw result:\n\n" + content;
        }

        bodyEl = _react2.default.createElement(HighlightCode, { value: body });

        // XML
      } else if (/xml/i.test(contentType)) {
        body = (0, _utils.formatXml)(content);
        bodyEl = _react2.default.createElement(HighlightCode, { value: body });

        // HTML or Plain Text
      } else if ((0, _lowerCase2.default)(contentType) === "text/html" || /text\/plain/.test(contentType)) {
        bodyEl = _react2.default.createElement(HighlightCode, { value: content });

        // Image
      } else if (/^image\//i.test(contentType)) {
        bodyEl = _react2.default.createElement("img", { src: url });

        // Audio
      } else if (/^audio\//i.test(contentType)) {
        bodyEl = _react2.default.createElement("pre", null, _react2.default.createElement("audio", { controls: true }, _react2.default.createElement("source", { src: url, type: contentType })));

        // Download
      } else if (
      /^application\/octet-stream/i.test(contentType) ||
      headers["Content-Disposition"] && /attachment/i.test(headers["Content-Disposition"]) ||
      headers["content-disposition"] && /attachment/i.test(headers["content-disposition"]) ||
      headers["Content-Description"] && /File Transfer/i.test(headers["Content-Description"]) ||
      headers["content-description"] && /File Transfer/i.test(headers["content-description"])) {

        var contentLength = headers["content-length"] || headers["Content-Length"];
        if (!+contentLength) return null;

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (!isSafari && "Blob" in window) {
          var type = contentType || "text/html";
          var blob = content instanceof Blob ? content : new Blob([content], { type: type });
          var href = window.URL.createObjectURL(blob);
          var fileName = url.substr(url.lastIndexOf("/") + 1);
          var download = [type, fileName, href].join(":");

          // Use filename from response header
          var disposition = headers["content-disposition"] || headers["Content-Disposition"];
          if (typeof disposition !== "undefined") {
            var responseFilename = /filename=([^;]*);?/i.exec(disposition);
            if (responseFilename !== null && responseFilename.length > 1) {
              download = responseFilename[1];
            }
          }

          bodyEl = _react2.default.createElement("div", null, _react2.default.createElement("a", { href: href, download: download }, "Download file"));
        } else {
          bodyEl = _react2.default.createElement("pre", null, "Download headers detected but your browser does not support downloading binary via XHR (Blob).");
        }

        // Anything else (CORS)
      } else if (typeof content === "string") {
        bodyEl = _react2.default.createElement(HighlightCode, { value: content });
      } else {
        bodyEl = _react2.default.createElement("div", null, "Unknown response type");
      }

      return !bodyEl ? null : _react2.default.createElement("div", null,
        _react2.default.createElement("h5", null, "Response body"),
        bodyEl);


    } }]);return ResponseBody;}(_react2.default.Component);ResponseBody.propTypes = { content: _propTypes2.default.any.isRequired, contentType: _propTypes2.default.string, getComponent: _propTypes2.default.func.isRequired, headers: _propTypes2.default.object, url: _propTypes2.default.string };exports.default = ResponseBody;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var getExampleComponent = function getExampleComponent(sampleResponse, examples, HighlightCode) {
  if (examples && examples.size) {
    return examples.entrySeq().map(function (_ref) {var _ref2 = (0, _slicedToArray3.default)(_ref, 2),key = _ref2[0],example = _ref2[1];
      var exampleValue = example;
      if (example.toJS) {
        try {
          exampleValue = (0, _stringify2.default)(example.toJS(), null, 2);
        }
        catch (e) {
          exampleValue = String(example);
        }
      }

      return _react2.default.createElement("div", { key: key },
        _react2.default.createElement("h5", null, key),
        _react2.default.createElement(HighlightCode, { className: "example", value: exampleValue }));

    }).toArray();
  }

  if (sampleResponse) {return _react2.default.createElement("div", null,
      _react2.default.createElement(HighlightCode, { className: "example", value: sampleResponse }));

  }
  return null;
};var

Response = function (_React$Component) {(0, _inherits3.default)(Response, _React$Component);function Response() {(0, _classCallCheck3.default)(this, Response);return (0, _possibleConstructorReturn3.default)(this, (Response.__proto__ || (0, _getPrototypeOf2.default)(Response)).apply(this, arguments));}(0, _createClass3.default)(Response, [{ key: "render", value: function render()















    {var _props =









      this.props,code = _props.code,response = _props.response,className = _props.className,fn = _props.fn,getComponent = _props.getComponent,specSelectors = _props.specSelectors,contentType = _props.contentType;var

      inferSchema = fn.inferSchema;

      var schema = inferSchema(response.toJS());
      var headers = response.get("headers");
      var examples = response.get("examples");
      var Headers = getComponent("headers");
      var HighlightCode = getComponent("highlightCode");
      var ModelExample = getComponent("modelExample");
      var Markdown = getComponent("Markdown");

      var sampleResponse = schema ? (0, _utils.getSampleSchema)(schema, contentType, { includeReadOnly: true }) : null;
      var example = getExampleComponent(sampleResponse, examples, HighlightCode);

      return (
        _react2.default.createElement("tr", { className: "response " + (className || "") },
          _react2.default.createElement("td", { className: "col response-col_status" },
            code),

          _react2.default.createElement("td", { className: "col response-col_description" },

            _react2.default.createElement("div", { className: "response-col_description__inner" },
              _react2.default.createElement(Markdown, { source: response.get("description") })),


            example ?
            _react2.default.createElement(ModelExample, {
              getComponent: getComponent,
              specSelectors: specSelectors,
              schema: (0, _immutable.fromJS)(schema),
              example: example }) :
            null,

            headers ?
            _react2.default.createElement(Headers, { headers: headers }) :
            null)));





    } }]);return Response;}(_react2.default.Component);Response.propTypes = { code: _propTypes2.default.string.isRequired, response: _propTypes2.default.object, className: _propTypes2.default.string, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, fn: _propTypes2.default.object.isRequired, contentType: _propTypes2.default.string };Response.defaultProps = { response: (0, _immutable.fromJS)({}) };exports.default = Response;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


Responses = function (_React$Component) {(0, _inherits3.default)(Responses, _React$Component);function Responses() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Responses);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Responses.__proto__ || (0, _getPrototypeOf2.default)(Responses)).call.apply(_ref, [this].concat(args))), _this), _this.






















    onChangeProducesWrapper = function (val) {return _this.props.specActions.changeProducesValue(_this.props.pathMethod, val);}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(Responses, [{ key: "render", value: function render()

    {var _props =
      this.props,responses = _props.responses,request = _props.request,tryItOutResponse = _props.tryItOutResponse,getComponent = _props.getComponent,specSelectors = _props.specSelectors,fn = _props.fn,producesValue = _props.producesValue,displayRequestDuration = _props.displayRequestDuration;
      var defaultCode = (0, _utils.defaultStatusCode)(responses);

      var ContentType = getComponent("contentType");
      var LiveResponse = getComponent("liveResponse");
      var Response = getComponent("response");

      var produces = this.props.produces && this.props.produces.size ? this.props.produces : Responses.defaultProps.produces;

      return (
        _react2.default.createElement("div", { className: "responses-wrapper" },
          _react2.default.createElement("div", { className: "opblock-section-header" },
            _react2.default.createElement("h4", null, "Responses"),
            _react2.default.createElement("label", null,
              _react2.default.createElement("span", null, "Response content type"),
              _react2.default.createElement(ContentType, { value: producesValue,
                onChange: this.onChangeProducesWrapper,
                contentTypes: produces,
                className: "execute-content-type" }))),


          _react2.default.createElement("div", { className: "responses-inner" },

            !tryItOutResponse ? null :
            _react2.default.createElement("div", null,
              _react2.default.createElement(LiveResponse, { request: request,
                response: tryItOutResponse,
                getComponent: getComponent,
                displayRequestDuration: displayRequestDuration }),
              _react2.default.createElement("h4", null, "Responses")),




            _react2.default.createElement("table", { className: "responses-table" },
              _react2.default.createElement("thead", null,
                _react2.default.createElement("tr", { className: "responses-header" },
                  _react2.default.createElement("td", { className: "col col_header response-col_status" }, "Code"),
                  _react2.default.createElement("td", { className: "col col_header response-col_description" }, "Description"))),


              _react2.default.createElement("tbody", null,

                responses.entrySeq().map(function (_ref2) {var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),code = _ref3[0],response = _ref3[1];

                  var className = tryItOutResponse && tryItOutResponse.get("status") == code ? "response_current" : "";
                  return (
                    _react2.default.createElement(Response, { key: code,
                      isDefault: defaultCode === code,
                      fn: fn,
                      className: className,
                      code: code,
                      response: response,
                      specSelectors: specSelectors,
                      contentType: producesValue,
                      getComponent: getComponent }));

                }).toArray())))));






    } }]);return Responses;}(_react2.default.Component);Responses.propTypes = { request: _propTypes2.default.object, tryItOutResponse: _propTypes2.default.object, responses: _propTypes2.default.object.isRequired, produces: _propTypes2.default.object, producesValue: _propTypes2.default.any, getComponent: _propTypes2.default.func.isRequired, specSelectors: _propTypes2.default.object.isRequired, specActions: _propTypes2.default.object.isRequired, pathMethod: _propTypes2.default.array.isRequired, displayRequestDuration: _propTypes2.default.bool.isRequired, fn: _propTypes2.default.object.isRequired };Responses.defaultProps = { request: null, tryItOutResponse: null, produces: (0, _immutable.fromJS)(["application/json"]), displayRequestDuration: false };exports.default = Responses;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Schemes = function (_React$Component) {(0, _inherits3.default)(Schemes, _React$Component);function Schemes() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Schemes);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Schemes.__proto__ || (0, _getPrototypeOf2.default)(Schemes)).call.apply(_ref, [this].concat(args))), _this), _this.























    onChange = function (e) {
      _this.setScheme(e.target.value);
    }, _this.

    setScheme = function (value) {var _this$props =
      _this.props,path = _this$props.path,method = _this$props.method,specActions = _this$props.specActions;

      specActions.setScheme(value, path, method);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}(0, _createClass3.default)(Schemes, [{ key: "componentWillMount", value: function componentWillMount() {var schemes = this.props.schemes; //fire 'change' event to set default 'value' of select
      this.setScheme(schemes.first());} }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(nextProps) {if (this.props.operationScheme && !nextProps.schemes.has(this.props.operationScheme)) {//fire 'change' event if our selected scheme is no longer an option
        this.setScheme(nextProps.schemes.first());}} }, { key: "render", value: function render() {var
      schemes = this.props.schemes;

      return (
        _react2.default.createElement("label", { htmlFor: "schemes" },
          _react2.default.createElement("span", { className: "schemes-title" }, "Schemes"),
          _react2.default.createElement("select", { onChange: this.onChange },
            schemes.valueSeq().map(
            function (scheme) {return _react2.default.createElement("option", { value: scheme, key: scheme }, scheme);}).
            toArray())));



    } }]);return Schemes;}(_react2.default.Component);Schemes.propTypes = { specActions: _propTypes2.default.object.isRequired, schemes: _propTypes2.default.object.isRequired, path: _propTypes2.default.string, method: _propTypes2.default.string, operationScheme: _propTypes2.default.string };exports.default = Schemes;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRouterDom = __webpack_require__(120);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

ListChildren = function (_React$Component) {(0, _inherits3.default)(ListChildren, _React$Component);function ListChildren() {(0, _classCallCheck3.default)(this, ListChildren);return (0, _possibleConstructorReturn3.default)(this, (ListChildren.__proto__ || (0, _getPrototypeOf2.default)(ListChildren)).apply(this, arguments));}(0, _createClass3.default)(ListChildren, [{ key: "render", value: function render()





    {var _props =
      this.props,operations = _props.operations,parentName = _props.parentName;

      var ops = operations.map(function (op) {
        var routeId = parentName + "_" + op.operation.operationId;

        return _react2.default.createElement("li", { key: routeId, className: "sidebarChild", title: op.operation.operationId },
          _react2.default.createElement(_reactRouterDom.Link, { to: "#" + routeId },
            _react2.default.createElement("div", { className: "methodBtn btn-get" }, op.method),
            _react2.default.createElement("div", { className: "childTxt" }, op.operation.operationId)));


      });

      return (
        _react2.default.createElement("ul", null, ops));

    } }]);return ListChildren;}(_react2.default.Component);ListChildren.propTypes = { operations: _propTypes2.default.array.isRequired, parentName: _propTypes2.default.string.isRequired };var


BaseLayout = function (_React$Component2) {(0, _inherits3.default)(BaseLayout, _React$Component2);function BaseLayout() {(0, _classCallCheck3.default)(this, BaseLayout);return (0, _possibleConstructorReturn3.default)(this, (BaseLayout.__proto__ || (0, _getPrototypeOf2.default)(BaseLayout)).apply(this, arguments));}(0, _createClass3.default)(BaseLayout, [{ key: "render", value: function render()




    {var
      taggedOps = this.props.taggedOps;

      var baseUrlSplit = window.location.pathname.split('/swagger/ui/index');
      var baseUrl = baseUrlSplit[0];

      var parentNodes = taggedOps.entrySeq().map(function (tagObj, tag) {
        // let operations = tagObj.get("operations").toJS()
        var operations = tagObj[1].get("operations").toJS();
        return _react2.default.createElement("li", { className: "sidebarParent" }, tagObj[0], _react2.default.createElement(ListChildren, { operations: operations, parentName: tagObj[0] }));
      });

      return _react2.default.createElement(_reactRouterDom.BrowserRouter, { basename: baseUrl + '/swagger/ui/index' },
        _react2.default.createElement("ul", { id: "sidebar" },
          _react2.default.createElement("li", null, _react2.default.createElement("ul", null, _react2.default.createElement(_reactRouterDom.Link, { to: "/" }, "Home"))),
          parentNodes));


    } }]);return BaseLayout;}(_react2.default.Component);BaseLayout.propTypes = { taggedOps: _propTypes2.default.object.isRequired };exports.default = BaseLayout;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

TryItOutButton = function (_React$Component) {(0, _inherits3.default)(TryItOutButton, _React$Component);function TryItOutButton() {(0, _classCallCheck3.default)(this, TryItOutButton);return (0, _possibleConstructorReturn3.default)(this, (TryItOutButton.__proto__ || (0, _getPrototypeOf2.default)(TryItOutButton)).apply(this, arguments));}(0, _createClass3.default)(TryItOutButton, [{ key: "render", value: function render()













    {var _props =
      this.props,onTryoutClick = _props.onTryoutClick,onCancelClick = _props.onCancelClick,enabled = _props.enabled;

      return (
        _react2.default.createElement("div", { className: "try-out" },

          enabled ? _react2.default.createElement("button", { className: "btn try-out__btn cancel", onClick: onTryoutClick }, "Cancel") :
          _react2.default.createElement("button", { className: "btn try-out__btn", onClick: onCancelClick }, "Try it out ")));



    } }]);return TryItOutButton;}(_react2.default.Component);TryItOutButton.propTypes = { onTryoutClick: _propTypes2.default.func, onCancelClick: _propTypes2.default.func, enabled: _propTypes2.default.bool // Try it out is enabled, ie: the user has access to the form
};TryItOutButton.defaultProps = { onTryoutClick: Function.prototype, onCancelClick: Function.prototype, enabled: false };exports.default = TryItOutButton;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _stringify = __webpack_require__(27);var _stringify2 = _interopRequireDefault(_stringify);var _slicedToArray2 = __webpack_require__(12);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _getIterator2 = __webpack_require__(61);var _getIterator3 = _interopRequireDefault(_getIterator2);exports.default =

curl;var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function curl(request) {
  var curlified = [];
  var type = "";
  var headers = request.get("headers");
  curlified.push("curl");
  curlified.push("-X", request.get("method"));
  curlified.push("\"" + request.get("url") + "\"");

  if (headers && headers.size) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
      for (var _iterator = (0, _getIterator3.default)(request.get("headers").entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var p = _step.value;var _p = (0, _slicedToArray3.default)(
        p, 2),h = _p[0],v = _p[1];
        type = v;
        curlified.push("-H ");
        curlified.push("\"" + h + ": " + v + "\"");
      }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
  }

  if (request.get("body")) {

    if (type === "multipart/form-data" && request.get("method") === "POST") {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
        for (var _iterator2 = (0, _getIterator3.default)(request.get("body").values()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),k = _step2$value[0],v = _step2$value[1];
          curlified.push("-F");
          if (v instanceof _window2.default.File) {
            curlified.push("\"" + k + "=@" + v.name + ";type=" + v.type + "\"");
          } else {
            curlified.push("\"" + k + "=" + v + "\"");
          }
        }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
    } else {
      curlified.push("-d");
      curlified.push((0, _stringify2.default)(request.get("body")).replace(/\\n/g, ""));
    }
  }

  return curlified.join(" ");
}

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.JsonSchema_boolean = exports.JsonSchema_array = exports.JsonSchema_string = exports.JsonSchemaForm = undefined;var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _extends2 = __webpack_require__(18);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);
var _immutable = __webpack_require__(8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//import "less/json-schema-form"

var noop = function noop() {};
var JsonSchemaPropShape = {
    getComponent: _propTypes2.default.func.isRequired,
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    keyName: _propTypes2.default.any,
    fn: _propTypes2.default.object.isRequired,
    schema: _propTypes2.default.object,
    required: _propTypes2.default.bool,
    //ignore: PropTypes.bool,
    description: _propTypes2.default.any };


var JsonSchemaDefaultProps = {
    value: "",
    onChange: noop,
    schema: {},
    keyName: "",
    required: false
    // ignore: false
};var

JsonSchemaForm = exports.JsonSchemaForm = function (_Component) {(0, _inherits3.default)(JsonSchemaForm, _Component);function JsonSchemaForm() {(0, _classCallCheck3.default)(this, JsonSchemaForm);return (0, _possibleConstructorReturn3.default)(this, (JsonSchemaForm.__proto__ || (0, _getPrototypeOf2.default)(JsonSchemaForm)).apply(this, arguments));}(0, _createClass3.default)(JsonSchemaForm, [{ key: "render", value: function render()



        {var _props =
            this.props,schema = _props.schema,value = _props.value,onChange = _props.onChange,getComponent = _props.getComponent,fn = _props.fn;

            if (schema.toJS)
            schema = schema.toJS();var _schema =

            schema,type = _schema.type,_schema$format = _schema.format,format = _schema$format === undefined ? "" : _schema$format;

            var Comp = getComponent("JsonSchema_" + type + "_" + format) || getComponent("JsonSchema_" + type) || getComponent("JsonSchema_string");
            return _react2.default.createElement(Comp, (0, _extends3.default)({}, this.props, { fn: fn, getComponent: getComponent, value: value, onChange: onChange, schema: schema }));
        } }]);return JsonSchemaForm;}(_react.Component);JsonSchemaForm.propTypes = JsonSchemaPropShape;JsonSchemaForm.defaultProps = JsonSchemaDefaultProps;var


JsonSchema_string = exports.JsonSchema_string = function (_Component2) {(0, _inherits3.default)(JsonSchema_string, _Component2);function JsonSchema_string() {var _ref;var _temp, _this2, _ret;(0, _classCallCheck3.default)(this, JsonSchema_string);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = JsonSchema_string.__proto__ || (0, _getPrototypeOf2.default)(JsonSchema_string)).call.apply(_ref, [this].concat(args))), _this2), _this2.


        onChange = function (e) {
            var value = _this2.props.schema["type"] === "file" ? e.target.files[0] : e.target.value;
            _this2.props.onChange(value, _this2.props.keyName);
        }, _this2.
        onEnumChange = function (val) {return _this2.props.onChange(val);}, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);}(0, _createClass3.default)(JsonSchema_string, [{ key: "render", value: function render()
        {var _props2 =
            this.props,getComponent = _props2.getComponent,value = _props2.value,schema = _props2.schema,required = _props2.required,description = _props2.description;
            var enumValue = schema["enum"];
            var errors = schema.errors || [];

            if (enumValue) {
                var Select = getComponent("Select");
                return _react2.default.createElement(Select, { allowedValues: enumValue,
                    value: value,
                    allowEmptyValue: !required,
                    onChange: this.onEnumChange });
            }

            var isDisabled = schema["in"] === "formData" && !("FormData" in window);
            var Input = getComponent("Input");
            if (schema["type"] === "file") {
                return _react2.default.createElement(Input, { type: "file", className: errors.length ? "invalid" : "", onChange: this.onChange, disabled: isDisabled });
            } else
            {
                return _react2.default.createElement(Input, { type: schema.format === "password" ? "password" : "text", className: errors.length ? "invalid" : "", value: value, placeholder: description, onChange: this.onChange, disabled: isDisabled });
            }
        } }]);return JsonSchema_string;}(_react.Component);JsonSchema_string.propTypes = JsonSchemaPropShape;JsonSchema_string.defaultProps = JsonSchemaDefaultProps;var


JsonSchema_array = exports.JsonSchema_array = function (_PureComponent) {(0, _inherits3.default)(JsonSchema_array, _PureComponent);



    function JsonSchema_array(props, context) {(0, _classCallCheck3.default)(this, JsonSchema_array);var _this3 = (0, _possibleConstructorReturn3.default)(this, (JsonSchema_array.__proto__ || (0, _getPrototypeOf2.default)(JsonSchema_array)).call(this,
        props, context));_this3.








        onChange = function () {return _this3.props.onChange(_this3.state.value);};_this3.

        onItemChange = function (itemVal, i) {
            _this3.setState(function (state) {return {
                    value: state.value.set(i, itemVal) };},
            _this3.onChange);
        };_this3.

        removeItem = function (i) {
            _this3.setState(function (state) {return {
                    value: state.value.remove(i) };},
            _this3.onChange);
        };_this3.

        addItem = function () {
            _this3.setState(function (state) {
                state.value = state.value || (0, _immutable.List)();
                return {
                    value: state.value.push("") };

            }, _this3.onChange);
        };_this3.

        onEnumChange = function (value) {
            _this3.setState(function () {return {
                    value: value };},
            _this3.onChange);
        };_this3.state = { value: props.value };return _this3;}(0, _createClass3.default)(JsonSchema_array, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(props) {if (props.value !== this.state.value) this.setState({ value: props.value });} }, { key: "render", value: function render()

        {var _this4 = this;var _props3 =
            this.props,getComponent = _props3.getComponent,required = _props3.required,schema = _props3.schema,fn = _props3.fn;

            var itemSchema = fn.inferSchema(schema.items);

            var JsonSchemaForm = getComponent("JsonSchemaForm");
            var Button = getComponent("Button");

            var enumValue = itemSchema["enum"];
            var value = this.state.value;

            if (enumValue) {
                var Select = getComponent("Select");
                return _react2.default.createElement(Select, { multiple: true,
                    value: value,
                    allowedValues: enumValue,
                    allowEmptyValue: !required,
                    onChange: this.onEnumChange });
            }

            var errors = schema.errors || [];

            return (
                _react2.default.createElement("div", null,
                    !value || value.count() < 1 ?
                    errors.length ? _react2.default.createElement("span", { style: { color: "red", fortWeight: "bold" } }, errors[0]) : null :
                    value.map(function (item, i) {
                        var schema = (0, _assign2.default)({}, itemSchema);
                        if (errors.length) {
                            var err = errors.filter(function (err) {return err.index === i;});
                            if (err.length) schema.errors = [err[0].error + i];
                        }
                        return (
                            _react2.default.createElement("div", { key: i, className: "json-schema-form-item" },
                                _react2.default.createElement(JsonSchemaForm, { fn: fn, getComponent: getComponent, value: item, onChange: function onChange(val) {return _this4.onItemChange(val, i);}, schema: schema }),
                                _react2.default.createElement(Button, { className: "json-schema-form-item-remove", onClick: function onClick() {return _this4.removeItem(i);} }, " - ")));


                    }).toArray(),

                    _react2.default.createElement(Button, { className: "json-schema-form-item-add", onClick: this.addItem }, " Add item ")));


        } }]);return JsonSchema_array;}(_react.PureComponent);JsonSchema_array.propTypes = JsonSchemaPropShape;JsonSchema_array.defaultProps = JsonSchemaDefaultProps;var


JsonSchema_boolean = exports.JsonSchema_boolean = function (_Component3) {(0, _inherits3.default)(JsonSchema_boolean, _Component3);function JsonSchema_boolean() {var _ref2;var _temp2, _this5, _ret2;(0, _classCallCheck3.default)(this, JsonSchema_boolean);for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return _ret2 = (_temp2 = (_this5 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = JsonSchema_boolean.__proto__ || (0, _getPrototypeOf2.default)(JsonSchema_boolean)).call.apply(_ref2, [this].concat(args))), _this5), _this5.



        onEnumChange = function (val) {return _this5.props.onChange(val);}, _temp2), (0, _possibleConstructorReturn3.default)(_this5, _ret2);}(0, _createClass3.default)(JsonSchema_boolean, [{ key: "render", value: function render()
        {var _props4 =
            this.props,getComponent = _props4.getComponent,required = _props4.required,value = _props4.value;
            var Select = getComponent("Select");

            return _react2.default.createElement(Select, { value: String(value),
                allowedValues: (0, _immutable.fromJS)(["true", "false"]),
                allowEmptyValue: !required,
                onChange: this.onEnumChange });
        } }]);return JsonSchema_boolean;}(_react.Component);JsonSchema_boolean.propTypes = JsonSchemaPropShape;JsonSchema_boolean.defaultProps = JsonSchemaDefaultProps;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =


authorize;var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function authorize(_ref) {var auth = _ref.auth,authActions = _ref.authActions,errActions = _ref.errActions,configs = _ref.configs,_ref$authConfigs = _ref.authConfigs,authConfigs = _ref$authConfigs === undefined ? {} : _ref$authConfigs;var
  schema = auth.schema,scopes = auth.scopes,name = auth.name,clientId = auth.clientId;
  var flow = schema.get("flow");
  var query = [];

  switch (flow) {
    case "password":
      authActions.authorizePassword(auth);
      return;

    case "application":
      authActions.authorizeApplication(auth);
      return;

    case "accessCode":
      query.push("response_type=code");
      break;

    case "implicit":
      query.push("response_type=token");
      break;}


  if (typeof clientId === "string") {
    query.push("client_id=" + encodeURIComponent(clientId));
  }

  var redirectUrl = configs.oauth2RedirectUrl;

  // todo move to parser
  if (typeof redirectUrl === "undefined") {
    errActions.newAuthErr({
      authId: name,
      source: "validation",
      level: "error",
      message: "oauth2RedirectUri configuration is not passed. Oauth2 authorization cannot be performed." });

    return;
  }
  query.push("redirect_uri=" + encodeURIComponent(redirectUrl));

  if (Array.isArray(scopes) && 0 < scopes.length) {
    var scopeSeparator = authConfigs.scopeSeparator || " ";

    query.push("scope=" + encodeURIComponent(scopes.join(scopeSeparator)));
  }

  var state = (0, _utils.btoa)(new Date());

  query.push("state=" + encodeURIComponent(state));

  if (typeof authConfigs.realm !== "undefined") {
    query.push("realm=" + encodeURIComponent(authConfigs.realm));
  }var

  additionalQueryStringParams = authConfigs.additionalQueryStringParams;

  for (var key in additionalQueryStringParams) {
    if (typeof additionalQueryStringParams[key] !== "undefined") {
      query.push([key, additionalQueryStringParams[key]].map(encodeURIComponent).join("="));
    }
  }

  var url = [schema.get("authorizationUrl"), query.join("&")].join("?");

  // pass action authorizeOauth2 and authentication data through window
  // to authorize with oauth2
  _window2.default.swaggerUIRedirectOauth2 = {
    auth: auth,
    state: state,
    redirectUrl: redirectUrl,
    callback: flow === "implicit" ? authActions.preAuthorizeImplicit : authActions.authorizeAccessCode,
    errCb: errActions.newAuthErr };


  _window2.default.open(url);
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.

transformPathToArray = transformPathToArray;var _get = __webpack_require__(115);var _get2 = _interopRequireDefault(_get);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function transformPathToArray(property, jsSpec) {
  if (property.slice(0, 9) === "instance.") {
    var str = property.slice(9);
  } else {// eslint-disable-next-line no-redeclare
    var str = property;
  }

  var pathArr = [];

  str.
  split(".").
  map(function (item) {
    // "key[0]" becomes ["key", "0"]
    if (item.includes("[")) {
      var index = parseInt(item.match(/\[(.*)\]/)[1]);
      var keyName = item.slice(0, item.indexOf("["));
      return [keyName, index.toString()];
    } else {
      return item;
    }
  }).
  reduce(function (a, b) {
    // flatten!
    return a.concat(b);
  }, []).
  concat([""]) // add an empty item into the array, so we don't get stuck with something in our buffer below
  .reduce(function (buffer, curr) {
    var obj = pathArr.length ? (0, _get2.default)(jsSpec, pathArr) : jsSpec;

    if ((0, _get2.default)(obj, makeAccessArray(buffer, curr))) {
      if (buffer.length) {
        pathArr.push(buffer);
      }
      if (curr.length) {
        pathArr.push(curr);
      }
      return "";
    } else {
      // attach key to buffer
      return "" + buffer + (buffer.length ? "." : "") + curr;
    }
  }, "");

  if (typeof (0, _get2.default)(jsSpec, pathArr) !== "undefined") {
    return pathArr;
  } else {
    // if our path is not correct (there is no value at the path),
    // return null
    return null;
  }
}

function makeAccessArray(buffer, curr) {
  var arr = [];

  if (buffer.length) {
    arr.push(buffer);
  }

  if (curr.length) {
    arr.push(curr);
  }

  return arr;
}

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =



PresetApis;var _base = __webpack_require__(269);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Just the base, for now.
function PresetApis() {
  return [_base2.default];


}

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =































































function () {
  var coreComponents = {
    components: {
      App: _app2.default,
      authorizationPopup: _authorizationPopup2.default,
      authorizeBtn: _authorizeBtn2.default,
      authorizeOperationBtn: _authorizeOperationBtn2.default,
      auths: _auths2.default,
      authError: _error2.default,
      oauth2: _oauth2.default,
      apiKeyAuth: _apiKeyAuth2.default,
      basicAuth: _basicAuth2.default,
      clear: _clear2.default,
      liveResponse: _liveResponse2.default,
      info: _info2.default,
      onlineValidatorBadge: _onlineValidatorBadge2.default,
      operations: _operations2.default,
      operation: _operation2.default,
      operationWrapper: _operationWrapper2.default,
      sidebar: _sidebar2.default,
      highlightCode: _highlightCode2.default,
      responses: _responses2.default,
      response: _response2.default,
      responseBody: _responseBody2.default,
      parameters: _parameters2.default,
      parameterRow: _parameterRow2.default,
      execute: _execute2.default,
      headers: _headers2.default,
      errors: _errors2.default,
      contentType: _contentType2.default,
      overview: _overview2.default,
      footer: _footer2.default,
      ParamBody: _paramBody2.default,
      curl: _curl2.default,
      schemes: _schemes2.default,
      modelExample: _modelExample2.default,
      ModelWrapper: _modelWrapper2.default,
      ModelCollapse: _modelCollapse2.default,
      Model: _model2.default,
      Models: _models2.default,
      EnumModel: _enumModel2.default,
      ObjectModel: _objectModel2.default,
      ArrayModel: _arrayModel2.default,
      PrimitiveModel: _primitiveModel2.default,
      TryItOutButton: _tryItOutButton2.default,
      Markdown: _markdown2.default,
      BaseLayout: _base2.default } };



  var formComponents = {
    components: LayoutUtils };


  var jsonSchemaComponents = {
    components: JsonSchemaComponents };


  return [_util2.default, _logs2.default, _view2.default, _spec2.default, _err2.default, _layout2.default, _samples2.default,







  coreComponents,
  formComponents, _swaggerJs2.default,

  jsonSchemaComponents, _auth2.default, _ast2.default, _splitPaneMode2.default, _downloadUrl2.default, _deepLinking2.default];






};var _err = __webpack_require__(140);var _err2 = _interopRequireDefault(_err);var _layout = __webpack_require__(143);var _layout2 = _interopRequireDefault(_layout);var _spec = __webpack_require__(148);var _spec2 = _interopRequireDefault(_spec);var _view = __webpack_require__(156);var _view2 = _interopRequireDefault(_view);var _samples = __webpack_require__(147);var _samples2 = _interopRequireDefault(_samples);var _logs = __webpack_require__(146);var _logs2 = _interopRequireDefault(_logs);var _ast = __webpack_require__(125);var _ast2 = _interopRequireDefault(_ast);var _swaggerJs = __webpack_require__(154);var _swaggerJs2 = _interopRequireDefault(_swaggerJs);var _auth = __webpack_require__(127);var _auth2 = _interopRequireDefault(_auth);var _util = __webpack_require__(155);var _util2 = _interopRequireDefault(_util);var _splitPaneMode = __webpack_require__(153);var _splitPaneMode2 = _interopRequireDefault(_splitPaneMode);var _downloadUrl = __webpack_require__(135);var _downloadUrl2 = _interopRequireDefault(_downloadUrl);var _deepLinking = __webpack_require__(132);var _deepLinking2 = _interopRequireDefault(_deepLinking);var _app = __webpack_require__(220);var _app2 = _interopRequireDefault(_app);var _authorizationPopup = __webpack_require__(223);var _authorizationPopup2 = _interopRequireDefault(_authorizationPopup);var _authorizeBtn = __webpack_require__(224);var _authorizeBtn2 = _interopRequireDefault(_authorizeBtn);var _authorizeOperationBtn = __webpack_require__(225);var _authorizeOperationBtn2 = _interopRequireDefault(_authorizeOperationBtn);var _auths = __webpack_require__(226);var _auths2 = _interopRequireDefault(_auths);var _error = __webpack_require__(228);var _error2 = _interopRequireDefault(_error);var _apiKeyAuth = __webpack_require__(222);var _apiKeyAuth2 = _interopRequireDefault(_apiKeyAuth);var _basicAuth = __webpack_require__(227);var _basicAuth2 = _interopRequireDefault(_basicAuth);var _oauth = __webpack_require__(229);var _oauth2 = _interopRequireDefault(_oauth);var _clear = __webpack_require__(230);var _clear2 = _interopRequireDefault(_clear);var _liveResponse = __webpack_require__(241);var _liveResponse2 = _interopRequireDefault(_liveResponse);var _onlineValidatorBadge = __webpack_require__(248);var _onlineValidatorBadge2 = _interopRequireDefault(_onlineValidatorBadge);var _operations = __webpack_require__(251);var _operations2 = _interopRequireDefault(_operations);var _operation = __webpack_require__(249);var _operation2 = _interopRequireDefault(_operation);var _operationWrapper = __webpack_require__(250);var _operationWrapper2 = _interopRequireDefault(_operationWrapper);var _sidebar = __webpack_require__(262);var _sidebar2 = _interopRequireDefault(_sidebar);var _highlightCode = __webpack_require__(238);var _highlightCode2 = _interopRequireDefault(_highlightCode);var _responses = __webpack_require__(260);var _responses2 = _interopRequireDefault(_responses);var _response = __webpack_require__(259);var _response2 = _interopRequireDefault(_response);var _responseBody = __webpack_require__(258);var _responseBody2 = _interopRequireDefault(_responseBody);var _parameters = __webpack_require__(255);var _parameters2 = _interopRequireDefault(_parameters);var _parameterRow = __webpack_require__(254);var _parameterRow2 = _interopRequireDefault(_parameterRow);var _execute = __webpack_require__(235);var _execute2 = _interopRequireDefault(_execute);var _headers = __webpack_require__(237);var _headers2 = _interopRequireDefault(_headers);var _errors = __webpack_require__(234);var _errors2 = _interopRequireDefault(_errors);var _contentType = __webpack_require__(231);var _contentType2 = _interopRequireDefault(_contentType);var _overview = __webpack_require__(252);var _overview2 = _interopRequireDefault(_overview);var _info = __webpack_require__(239);var _info2 = _interopRequireDefault(_info);var _footer = __webpack_require__(236);var _footer2 = _interopRequireDefault(_footer);var _paramBody = __webpack_require__(253);var _paramBody2 = _interopRequireDefault(_paramBody);var _curl = __webpack_require__(232);var _curl2 = _interopRequireDefault(_curl);var _schemes = __webpack_require__(261);var _schemes2 = _interopRequireDefault(_schemes);var _modelCollapse = __webpack_require__(242);var _modelCollapse2 = _interopRequireDefault(_modelCollapse);var _modelExample = __webpack_require__(243);var _modelExample2 = _interopRequireDefault(_modelExample);var _modelWrapper = __webpack_require__(244);var _modelWrapper2 = _interopRequireDefault(_modelWrapper);var _model = __webpack_require__(245);var _model2 = _interopRequireDefault(_model);var _models = __webpack_require__(246);var _models2 = _interopRequireDefault(_models);var _enumModel = __webpack_require__(233);var _enumModel2 = _interopRequireDefault(_enumModel);var _objectModel = __webpack_require__(247);var _objectModel2 = _interopRequireDefault(_objectModel);var _arrayModel = __webpack_require__(221);var _arrayModel2 = _interopRequireDefault(_arrayModel);var _primitiveModel = __webpack_require__(256);var _primitiveModel2 = _interopRequireDefault(_primitiveModel);var _tryItOutButton = __webpack_require__(263);var _tryItOutButton2 = _interopRequireDefault(_tryItOutButton);var _markdown = __webpack_require__(257);var _markdown2 = _interopRequireDefault(_markdown);var _base = __webpack_require__(240);var _base2 = _interopRequireDefault(_base);var _layoutUtils = __webpack_require__(122);var LayoutUtils = _interopRequireWildcard(_layoutUtils);var _jsonSchemaComponents = __webpack_require__(265);var JsonSchemaComponents = _interopRequireWildcard(_jsonSchemaComponents);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.objectWithFuncs = exports.arrayOrString = undefined;var _propTypes = __webpack_require__(6);var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Takes a list and proptype, and returns a PropType.shape({ [item]: propType })
var mapListToPropTypeShape = function mapListToPropTypeShape(list, propType) {return _propTypes2.default.shape(
  list.reduce(function (shape, propName) {
    shape[propName] = propType;
    return shape;
  }, {}));};


var arrayOrString = exports.arrayOrString = _propTypes2.default.oneOfType([
_propTypes2.default.arrayOf(_propTypes2.default.string),
_propTypes2.default.string]);


var objectWithFuncs = exports.objectWithFuncs = function objectWithFuncs(list) {return mapListToPropTypeShape(list, _propTypes2.default.func.isRequired);};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _keys = __webpack_require__(28);var _keys2 = _interopRequireDefault(_keys);var _defineProperty2 = __webpack_require__(29);var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _assign = __webpack_require__(17);var _assign2 = _interopRequireDefault(_assign);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(2);var _createClass3 = _interopRequireDefault(_createClass2);var _redux = __webpack_require__(504);
var _immutable = __webpack_require__(8);var _immutable2 = _interopRequireDefault(_immutable);
var _deepExtend = __webpack_require__(214);var _deepExtend2 = _interopRequireDefault(_deepExtend);
var _reduxImmutable = __webpack_require__(505);
var _serializeError = __webpack_require__(121);var _serializeError2 = _interopRequireDefault(_serializeError);var _actions = __webpack_require__(60);var _window = __webpack_require__(23);var _window2 = _interopRequireDefault(_window);var _utils = __webpack_require__(7);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}





var idFn = function idFn(a) {return a;};

// Apply middleware that gets sandwitched between `dispatch` and the reducer function(s)
function createStoreWithMiddleware(rootReducer, initialState, getSystem) {

  var middlwares = [
  // createLogger( {
  //   stateTransformer: state => state && state.toJS()
  // } ),
  // errorLog(getSystem), Need to properly handle errors that occur during a render. Ie: let them be...
  (0, _utils.systemThunkMiddleware)(getSystem)];


  var composeEnhancers = _window2.default.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  return (0, _redux.createStore)(rootReducer, initialState, composeEnhancers(
  _redux.applyMiddleware.apply(undefined, middlwares)));

}var

Store = function () {

  function Store() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};(0, _classCallCheck3.default)(this, Store);
    (0, _deepExtend2.default)(this, {
      state: {},
      plugins: [],
      system: {
        configs: {},
        fn: {},
        components: {},
        rootInjects: {},
        statePlugins: {} },

      boundSystem: {},
      toolbox: {} },
    opts);

    this.getSystem = this._getSystem.bind(this);

    // Bare system (nothing in it, besides the state)
    this.store = configureStore(idFn, (0, _immutable.fromJS)(this.state), this.getSystem);

    // will be the system + Im, we can add more tools when we need to
    this.buildSystem(false);

    // Bootstrap plugins
    this.register(this.plugins);
  }(0, _createClass3.default)(Store, [{ key: "getStore", value: function getStore()

    {
      return this.store;
    } }, { key: "register", value: function register(

    plugins) {var rebuild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var pluginSystem = combinePlugins(plugins, this.getSystem());
      systemExtend(this.system, pluginSystem);
      if (rebuild) {
        this.buildSystem();
      }
    } }, { key: "buildSystem", value: function buildSystem()

    {var buildReducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var dispatch = this.getStore().dispatch;
      var getState = this.getStore().getState;

      this.boundSystem = (0, _assign2.default)({},
      this.getRootInjects(),
      this.getWrappedAndBoundActions(dispatch),
      this.getBoundSelectors(getState, this.getSystem),
      this.getStateThunks(getState),
      this.getFn(),
      this.getConfigs());


      if (buildReducer)
      this.rebuildReducer();
    } }, { key: "_getSystem", value: function _getSystem()

    {
      return this.boundSystem;
    } }, { key: "getRootInjects", value: function getRootInjects()

    {
      return (0, _assign2.default)({
        getSystem: this.getSystem,
        getStore: this.getStore.bind(this),
        getComponents: this.getComponents.bind(this),
        getState: this.getStore().getState,
        getConfigs: this._getConfigs.bind(this),
        Im: _immutable2.default },
      this.system.rootInjects || {});
    } }, { key: "_getConfigs", value: function _getConfigs()

    {
      return this.system.configs;
    } }, { key: "getConfigs", value: function getConfigs()

    {
      return {
        configs: this.system.configs };

    } }, { key: "setConfigs", value: function setConfigs(

    configs) {
      this.system.configs = configs;
    } }, { key: "rebuildReducer", value: function rebuildReducer()

    {
      this.store.replaceReducer(buildReducer(this.system.statePlugins));
    }

    /**
       * Generic getter from system.statePlugins
       *
       */ }, { key: "getType", value: function getType(
    name) {
      var upName = name[0].toUpperCase() + name.slice(1);
      return (0, _utils.objReduce)(this.system.statePlugins, function (val, namespace) {
        var thing = val[name];
        if (thing)
        return (0, _defineProperty3.default)({}, namespace + upName, thing);
      });
    } }, { key: "getSelectors", value: function getSelectors()

    {
      return this.getType("selectors");
    } }, { key: "getActions", value: function getActions()

    {
      var actionHolders = this.getType("actions");

      return (0, _utils.objMap)(actionHolders, function (actions) {
        return (0, _utils.objReduce)(actions, function (action, actionName) {
          if ((0, _utils.isFn)(action))
          return (0, _defineProperty3.default)({}, actionName, action);
        });
      });
    } }, { key: "getWrappedAndBoundActions", value: function getWrappedAndBoundActions(

    dispatch) {var _this = this;
      var actionGroups = this.getBoundActions(dispatch);
      return (0, _utils.objMap)(actionGroups, function (actions, actionGroupName) {
        var wrappers = _this.system.statePlugins[actionGroupName.slice(0, -7)].wrapActions;
        if (wrappers) {
          return (0, _utils.objMap)(actions, function (action, actionName) {
            var wrap = wrappers[actionName];
            if (!wrap) {
              return action;
            }

            if (!Array.isArray(wrap)) {
              wrap = [wrap];
            }
            return wrap.reduce(function (acc, fn) {
              var newAction = function newAction() {
                return fn(acc, _this.getSystem()).apply(undefined, arguments);
              };
              if (!(0, _utils.isFn)(newAction)) {
                throw new TypeError("wrapActions needs to return a function that returns a new function (ie the wrapped action)");
              }
              return newAction;
            }, action || Function.prototype);
          });
        }
        return actions;
      });
    } }, { key: "getStates", value: function getStates(

    state) {
      return (0, _keys2.default)(this.system.statePlugins).reduce(function (obj, key) {
        obj[key] = state.get(key);
        return obj;
      }, {});
    } }, { key: "getStateThunks", value: function getStateThunks(

    getState) {
      return (0, _keys2.default)(this.system.statePlugins).reduce(function (obj, key) {
        obj[key] = function () {return getState().get(key);};
        return obj;
      }, {});
    } }, { key: "getFn", value: function getFn()

    {
      return {
        fn: this.system.fn };

    } }, { key: "getComponents", value: function getComponents(

    component) {
      if (typeof component !== "undefined")
      return this.system.components[component];
      return this.system.components;
    } }, { key: "getBoundSelectors", value: function getBoundSelectors(

    getState, getSystem) {
      return (0, _utils.objMap)(this.getSelectors(), function (obj, key) {
        var stateName = [key.slice(0, -9)]; // selectors = 9 chars
        var getNestedState = function getNestedState() {return getState().getIn(stateName);};

        return (0, _utils.objMap)(obj, function (fn) {
          return function () {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
            var res = fn.apply(null, [getNestedState()].concat(args));

            //  If a selector returns a function, give it the system - for advanced usage
            if (typeof res === "function")
            res = res(getSystem());

            return res;
          };
        });
      });
    } }, { key: "getBoundActions", value: function getBoundActions(

    dispatch) {

      dispatch = dispatch || this.getStore().dispatch;

      var process = function process(creator) {

        if (typeof creator !== "function") {
          return (0, _utils.objMap)(creator, function (prop) {return process(prop);});
        }

        return function () {
          var action = null;
          try {
            action = creator.apply(undefined, arguments);
          }
          catch (e) {
            action = { type: _actions.NEW_THROWN_ERR, error: true, payload: (0, _serializeError2.default)(e) };
          } finally
          {
            return action; // eslint-disable-line no-unsafe-finally
          }
        };

      };
      return (0, _utils.objMap)(this.getActions(), function (actionCreator) {return (0, _redux.bindActionCreators)(process(actionCreator), dispatch);});
    } }, { key: "getMapStateToProps", value: function getMapStateToProps()

    {var _this2 = this;
      return function () {
        var obj = (0, _assign2.default)({}, _this2.getSystem());
        return obj;
      };
    } }, { key: "getMapDispatchToProps", value: function getMapDispatchToProps(

    extras) {var _this3 = this;
      return function (dispatch) {
        return (0, _deepExtend2.default)({}, _this3.getWrappedAndBoundActions(dispatch), _this3.getFn(), extras);
      };
    } }]);return Store;}();exports.default = Store;



function combinePlugins(plugins, toolbox) {
  if ((0, _utils.isObject)(plugins) && !(0, _utils.isArray)(plugins))
  return plugins;

  if ((0, _utils.isFunc)(plugins))
  return combinePlugins(plugins(toolbox), toolbox);

  if ((0, _utils.isArray)(plugins)) {
    return plugins.
    map(function (plugin) {return combinePlugins(plugin, toolbox);}).
    reduce(systemExtend, {});
  }

  return {};
}

// Wraps deepExtend, to account for certain fields, being wrappers.
// Ie: we need to convert some fields into arrays, and append to them.
// Rather than overwrite
function systemExtend() {var dest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!(0, _utils.isObject)(dest)) {
    return {};
  }
  if (!(0, _utils.isObject)(src)) {
    return dest;
  }

  // Account for wrapActions, make it an array and append to it
  // Modifies `src`
  // 80% of this code is just safe traversal. We need to address that ( ie: use a lib )
  var statePlugins = dest.statePlugins;
  if ((0, _utils.isObject)(statePlugins)) {
    for (var namespace in statePlugins) {
      var namespaceObj = statePlugins[namespace];
      if (!(0, _utils.isObject)(namespaceObj) || !(0, _utils.isObject)(namespaceObj.wrapActions)) {
        continue;
      }var
      wrapActions = namespaceObj.wrapActions;
      for (var actionName in wrapActions) {
        var action = wrapActions[actionName];

        // This should only happen if dest is the first plugin, since invocations after that will ensure its an array
        if (!Array.isArray(action)) {
          action = [action];
          wrapActions[actionName] = action; // Put the value inside an array
        }

        if (src && src.statePlugins && src.statePlugins[namespace] && src.statePlugins[namespace].wrapActions && src.statePlugins[namespace].wrapActions[actionName]) {
          src.statePlugins[namespace].wrapActions[actionName] = wrapActions[actionName].concat(src.statePlugins[namespace].wrapActions[actionName]);
        }

      }
    }
  }

  return (0, _deepExtend2.default)(dest, src);
}

function buildReducer(states) {
  var reducerObj = (0, _utils.objMap)(states, function (val) {
    return val.reducers;
  });
  return allReducers(reducerObj);
}

function allReducers(reducerSystem) {
  var reducers = (0, _keys2.default)(reducerSystem).reduce(function (obj, key) {
    obj[key] = makeReducer(reducerSystem[key]);
    return obj;
  }, {});

  if (!(0, _keys2.default)(reducers).length) {
    return idFn;
  }

  return (0, _reduxImmutable.combineReducers)(reducers);
}

function makeReducer(reducerObj) {
  return function () {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _immutable.Map();var action = arguments[1];
    if (!reducerObj)
    return state;

    var redFn = reducerObj[action.type];
    if (redFn) {
      return redFn(state, action);
    }
    return state;
  };
}

function configureStore(rootReducer, initialState, getSystem) {
  var store = createStoreWithMiddleware(rootReducer, initialState, getSystem);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept("reducers/index", () => {
  //     const nextRootReducer = require("reducers/index")
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store;
}

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(281), __esModule: true };

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(288), __esModule: true };

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(289), __esModule: true };

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(290), __esModule: true };

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(291), __esModule: true };

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(316);
module.exports = __webpack_require__(9).Array.from;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(46);
module.exports = __webpack_require__(314);

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(46);
module.exports = __webpack_require__(315);

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(9)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(318);
module.exports = __webpack_require__(9).Object.assign;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(319);
var $Object = __webpack_require__(9).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(320);
var $Object = __webpack_require__(9).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(321);
module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(322);
module.exports = __webpack_require__(9).Object.keys;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(323);
module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
__webpack_require__(46);
__webpack_require__(66);
__webpack_require__(324);
module.exports = __webpack_require__(9).Promise;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(325);
__webpack_require__(173);
__webpack_require__(326);
__webpack_require__(327);
module.exports = __webpack_require__(9).Symbol;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(66);
module.exports = __webpack_require__(97).f('iterator');

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32)
  , toLength  = __webpack_require__(94)
  , toIndex   = __webpack_require__(313);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(21)
  , createDesc      = __webpack_require__(44);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(40)
  , gOPS    = __webpack_require__(90)
  , pIE     = __webpack_require__(63);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(36)
  , call        = __webpack_require__(163)
  , isArrayIter = __webpack_require__(162)
  , anObject    = __webpack_require__(19)
  , toLength    = __webpack_require__(94)
  , getIterFn   = __webpack_require__(98)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 298 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(89)
  , descriptor     = __webpack_require__(44)
  , setToStringTag = __webpack_require__(64)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(31)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(40)
  , toIObject = __webpack_require__(32);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(65)('meta')
  , isObject = __webpack_require__(38)
  , has      = __webpack_require__(30)
  , setDesc  = __webpack_require__(21).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(37)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(14)
  , macrotask = __webpack_require__(172).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(43)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(40)
  , gOPS     = __webpack_require__(90)
  , pIE      = __webpack_require__(63)
  , toObject = __webpack_require__(45)
  , IObject  = __webpack_require__(161)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(37)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(21)
  , anObject = __webpack_require__(19)
  , getKeys  = __webpack_require__(40);

module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(32)
  , gOPN      = __webpack_require__(167).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(31);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(38)
  , anObject = __webpack_require__(19);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(36)(Function.call, __webpack_require__(166).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(14)
  , core        = __webpack_require__(9)
  , dP          = __webpack_require__(21)
  , DESCRIPTORS = __webpack_require__(25)
  , SPECIES     = __webpack_require__(10)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(19)
  , aFunction = __webpack_require__(84)
  , SPECIES   = __webpack_require__(10)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(93)
  , defined   = __webpack_require__(86);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(93)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19)
  , get      = __webpack_require__(98);
module.exports = __webpack_require__(9).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(85)
  , ITERATOR  = __webpack_require__(10)('iterator')
  , Iterators = __webpack_require__(39);
module.exports = __webpack_require__(9).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(36)
  , $export        = __webpack_require__(20)
  , toObject       = __webpack_require__(45)
  , call           = __webpack_require__(163)
  , isArrayIter    = __webpack_require__(162)
  , toLength       = __webpack_require__(94)
  , createProperty = __webpack_require__(295)
  , getIterFn      = __webpack_require__(98);

$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(292)
  , step             = __webpack_require__(301)
  , Iterators        = __webpack_require__(39)
  , toIObject        = __webpack_require__(32);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(164)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(20);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(305)});

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(89)});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(25), 'Object', {defineProperty: __webpack_require__(21).f});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(45)
  , $getPrototypeOf = __webpack_require__(168);

__webpack_require__(170)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(45)
  , $keys    = __webpack_require__(40);

__webpack_require__(170)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(20);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(309).set});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(62)
  , global             = __webpack_require__(14)
  , ctx                = __webpack_require__(36)
  , classof            = __webpack_require__(85)
  , $export            = __webpack_require__(20)
  , isObject           = __webpack_require__(38)
  , aFunction          = __webpack_require__(84)
  , anInstance         = __webpack_require__(293)
  , forOf              = __webpack_require__(297)
  , speciesConstructor = __webpack_require__(311)
  , task               = __webpack_require__(172).set
  , microtask          = __webpack_require__(304)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(10)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(308)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(64)($Promise, PROMISE);
__webpack_require__(310)(PROMISE);
Wrapper = __webpack_require__(9)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(14)
  , has            = __webpack_require__(30)
  , DESCRIPTORS    = __webpack_require__(25)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(171)
  , META           = __webpack_require__(303).KEY
  , $fails         = __webpack_require__(37)
  , shared         = __webpack_require__(92)
  , setToStringTag = __webpack_require__(64)
  , uid            = __webpack_require__(65)
  , wks            = __webpack_require__(10)
  , wksExt         = __webpack_require__(97)
  , wksDefine      = __webpack_require__(96)
  , keyOf          = __webpack_require__(302)
  , enumKeys       = __webpack_require__(296)
  , isArray        = __webpack_require__(299)
  , anObject       = __webpack_require__(19)
  , toIObject      = __webpack_require__(32)
  , toPrimitive    = __webpack_require__(95)
  , createDesc     = __webpack_require__(44)
  , _create        = __webpack_require__(89)
  , gOPNExt        = __webpack_require__(307)
  , $GOPD          = __webpack_require__(166)
  , $DP            = __webpack_require__(21)
  , $keys          = __webpack_require__(40)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(167).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(63).f  = $propertyIsEnumerable;
  __webpack_require__(90).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(62)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(31)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96)('asyncIterator');

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96)('observable');

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(495)
var ieee754 = __webpack_require__(496)
var isArray = __webpack_require__(497)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(213)))

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(356);
__webpack_require__(358);
__webpack_require__(359);
__webpack_require__(357);
module.exports = __webpack_require__(48).Promise;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(13)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(41)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(68)
  , document = __webpack_require__(15).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(49)
  , call        = __webpack_require__(338)
  , isArrayIter = __webpack_require__(337)
  , anObject    = __webpack_require__(47)
  , toLength    = __webpack_require__(353)
  , getIterFn   = __webpack_require__(354);
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15).document && document.documentElement;

/***/ }),
/* 335 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(67);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(50)
  , ITERATOR   = __webpack_require__(13)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(47);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $              = __webpack_require__(33)
  , descriptor     = __webpack_require__(179)
  , setToStringTag = __webpack_require__(102)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(41)(IteratorPrototype, __webpack_require__(13)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(13)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(15)
  , macrotask = __webpack_require__(351).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(67)(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(69);
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};

/***/ }),
/* 344 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = __webpack_require__(33).getDesc
  , isObject = __webpack_require__(68)
  , anObject = __webpack_require__(47);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(49)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(15)
  , $           = __webpack_require__(33)
  , DESCRIPTORS = __webpack_require__(101)
  , SPECIES     = __webpack_require__(13)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(47)
  , aFunction = __webpack_require__(99)
  , SPECIES   = __webpack_require__(13)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(180)
  , defined   = __webpack_require__(174);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(49)
  , invoke             = __webpack_require__(335)
  , html               = __webpack_require__(334)
  , cel                = __webpack_require__(331)
  , global             = __webpack_require__(15)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(67)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(336)
  , defined = __webpack_require__(174);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(180)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(100)
  , ITERATOR  = __webpack_require__(13)('iterator')
  , Iterators = __webpack_require__(50);
module.exports = __webpack_require__(48).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(330)
  , step             = __webpack_require__(341)
  , Iterators        = __webpack_require__(50)
  , toIObject        = __webpack_require__(352);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(177)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(100)
  , test    = {};
test[__webpack_require__(13)('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  __webpack_require__(69)(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $          = __webpack_require__(33)
  , LIBRARY    = __webpack_require__(178)
  , global     = __webpack_require__(15)
  , ctx        = __webpack_require__(49)
  , classof    = __webpack_require__(100)
  , $export    = __webpack_require__(175)
  , isObject   = __webpack_require__(68)
  , anObject   = __webpack_require__(47)
  , aFunction  = __webpack_require__(99)
  , strictNew  = __webpack_require__(349)
  , forOf      = __webpack_require__(333)
  , setProto   = __webpack_require__(345).set
  , same       = __webpack_require__(344)
  , SPECIES    = __webpack_require__(13)('species')
  , speciesConstructor = __webpack_require__(348)
  , asap       = __webpack_require__(342)
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , empty      = function(){ /* empty */ }
  , Wrapper;

var testResolve = function(sub){
  var test = new P(empty), promise;
  if(sub)test.constructor = function(exec){
    exec(empty, empty);
  };
  (promise = P.resolve(test))['catch'](empty);
  return promise === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && __webpack_require__(101)){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  __webpack_require__(343)(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
__webpack_require__(102)(P, PROMISE);
__webpack_require__(346)(PROMISE);
Wrapper = __webpack_require__(48)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(340)(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(350)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(177)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(355);
var global      = __webpack_require__(15)
  , hide        = __webpack_require__(41)
  , Iterators   = __webpack_require__(50)
  , ITERATOR    = __webpack_require__(13)('iterator')
  , NL          = global.NodeList
  , HTC         = global.HTMLCollection
  , NLProto     = NL && NL.prototype
  , HTCProto    = HTC && HTC.prototype
  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ }),
/* 360 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34),
    root = __webpack_require__(16);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(430),
    hashDelete = __webpack_require__(431),
    hashGet = __webpack_require__(432),
    hashHas = __webpack_require__(433),
    hashSet = __webpack_require__(434);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34),
    root = __webpack_require__(16);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34),
    root = __webpack_require__(16);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(104),
    setCacheAdd = __webpack_require__(459),
    setCacheHas = __webpack_require__(460);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(34),
    root = __webpack_require__(16);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 367 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 368 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 369 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 370 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 371 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 372 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 373 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(53),
    keys = __webpack_require__(35);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(53),
    keysIn = __webpack_require__(209);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(105),
    arrayEach = __webpack_require__(370),
    assignValue = __webpack_require__(186),
    baseAssign = __webpack_require__(374),
    baseAssignIn = __webpack_require__(375),
    cloneBuffer = __webpack_require__(405),
    copyArray = __webpack_require__(412),
    copySymbols = __webpack_require__(413),
    copySymbolsIn = __webpack_require__(414),
    getAllKeys = __webpack_require__(424),
    getAllKeysIn = __webpack_require__(195),
    getTag = __webpack_require__(198),
    initCloneArray = __webpack_require__(435),
    initCloneByTag = __webpack_require__(436),
    initCloneObject = __webpack_require__(437),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(117),
    isObject = __webpack_require__(22),
    keys = __webpack_require__(35);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(107);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 379 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(106),
    isFlattenable = __webpack_require__(438);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(417);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(381),
    keys = __webpack_require__(35);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 383 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(51),
    isObjectLike = __webpack_require__(57);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(105),
    equalArrays = __webpack_require__(193),
    equalByTag = __webpack_require__(421),
    equalObjects = __webpack_require__(422),
    getTag = __webpack_require__(198),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(117),
    isTypedArray = __webpack_require__(208);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(105),
    baseIsEqual = __webpack_require__(189);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(207),
    isMasked = __webpack_require__(441),
    isObject = __webpack_require__(22),
    toSource = __webpack_require__(204);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(51),
    isLength = __webpack_require__(118),
    isObjectLike = __webpack_require__(57);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(113),
    nativeKeys = __webpack_require__(453);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22),
    isPrototype = __webpack_require__(113),
    nativeKeysIn = __webpack_require__(454);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(386),
    getMatchData = __webpack_require__(425),
    matchesStrictComparable = __webpack_require__(202);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(189),
    get = __webpack_require__(115),
    hasIn = __webpack_require__(478),
    isKey = __webpack_require__(112),
    isStrictComparable = __webpack_require__(200),
    matchesStrictComparable = __webpack_require__(202),
    toKey = __webpack_require__(54);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 393 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(108);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 395 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 396 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(474),
    defineProperty = __webpack_require__(192),
    identity = __webpack_require__(206);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(107);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),
/* 399 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(42),
    arrayMap = __webpack_require__(184),
    isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 401 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(73),
    last = __webpack_require__(479),
    parent = __webpack_require__(458),
    toKey = __webpack_require__(54);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 403 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(190);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(16);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module)))

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(109);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(367),
    arrayReduce = __webpack_require__(71),
    mapToArray = __webpack_require__(201);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 408 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(368),
    arrayReduce = __webpack_require__(71),
    setToArray = __webpack_require__(203);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(42);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(109);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 412 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(53),
    getSymbols = __webpack_require__(110);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(53),
    getSymbolsIn = __webpack_require__(197);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(16);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(56);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 417 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(404),
    hasUnicode = __webpack_require__(199),
    stringToArray = __webpack_require__(468),
    toString = __webpack_require__(58);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(52),
    isArrayLike = __webpack_require__(56),
    keys = __webpack_require__(35);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(395);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(42),
    Uint8Array = __webpack_require__(182),
    eq = __webpack_require__(55),
    equalArrays = __webpack_require__(193),
    mapToArray = __webpack_require__(201),
    setToArray = __webpack_require__(203);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(35);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(477),
    overRest = __webpack_require__(457),
    setToString = __webpack_require__(461);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(188),
    getSymbols = __webpack_require__(110),
    keys = __webpack_require__(35);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(200),
    keys = __webpack_require__(35);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(42);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 427 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(73),
    isArguments = __webpack_require__(116),
    isArray = __webpack_require__(11),
    isIndex = __webpack_require__(111),
    isLength = __webpack_require__(118),
    toKey = __webpack_require__(54);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 429 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(75);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 431 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(75);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(75);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(75);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 435 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(109),
    cloneDataView = __webpack_require__(406),
    cloneMap = __webpack_require__(407),
    cloneRegExp = __webpack_require__(408),
    cloneSet = __webpack_require__(409),
    cloneSymbol = __webpack_require__(410),
    cloneTypedArray = __webpack_require__(411);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(377),
    getPrototype = __webpack_require__(196),
    isPrototype = __webpack_require__(113);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(42),
    isArguments = __webpack_require__(116),
    isArray = __webpack_require__(11);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(55),
    isArrayLike = __webpack_require__(56),
    isIndex = __webpack_require__(111),
    isObject = __webpack_require__(22);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 440 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(415);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 442 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(72);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(72);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(72);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(72);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(362),
    ListCache = __webpack_require__(70),
    Map = __webpack_require__(103);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(74);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(74);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(74);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(74);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(210);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(114);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 454 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(194);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module)))

/***/ }),
/* 456 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(369);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(108),
    baseSlice = __webpack_require__(190);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 459 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 460 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(397),
    shortOut = __webpack_require__(462);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 462 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(70);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 464 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 465 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 466 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(70),
    Map = __webpack_require__(103),
    MapCache = __webpack_require__(104);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(372),
    hasUnicode = __webpack_require__(199),
    unicodeToArray = __webpack_require__(470);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(452);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 470 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 471 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(473),
    createCompounder = __webpack_require__(191);

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(58),
    upperFirst = __webpack_require__(212);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),
/* 474 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(420),
    toString = __webpack_require__(58);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(379),
    baseIteratee = __webpack_require__(52),
    toInteger = __webpack_require__(489);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(380);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(383),
    hasPath = __webpack_require__(428);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 479 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(191);

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * _.lowerCase('fooBar');
 * // => 'foo bar'
 *
 * _.lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */
var lowerCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toLowerCase();
});

module.exports = lowerCase;


/***/ }),
/* 481 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(184),
    baseClone = __webpack_require__(376),
    baseUnset = __webpack_require__(402),
    castPath = __webpack_require__(73),
    copyObject = __webpack_require__(53),
    flatRest = __webpack_require__(423),
    getAllKeysIn = __webpack_require__(195);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(393),
    basePropertyDeep = __webpack_require__(394),
    isKey = __webpack_require__(112),
    toKey = __webpack_require__(54);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(71),
    baseEach = __webpack_require__(107),
    baseIteratee = __webpack_require__(52),
    baseReduce = __webpack_require__(396),
    isArray = __webpack_require__(11);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(371),
    baseFilter = __webpack_require__(378),
    baseIteratee = __webpack_require__(52),
    isArray = __webpack_require__(11),
    negate = __webpack_require__(481);

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, negate(baseIteratee(predicate, 3)));
}

module.exports = reject;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(185),
    baseIteratee = __webpack_require__(52),
    baseSome = __webpack_require__(398),
    isArray = __webpack_require__(11),
    isIterateeCall = __webpack_require__(439);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),
/* 487 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(490);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(488);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22),
    isSymbol = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(373),
    hasUnicodeWord = __webpack_require__(429),
    toString = __webpack_require__(58),
    unicodeWords = __webpack_require__(471);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all.js": 123,
	"./ast/ast.js": 124,
	"./ast/index.js": 125,
	"./ast/jump-to-path.jsx": 126,
	"./auth/actions.js": 77,
	"./auth/index.js": 127,
	"./auth/reducers.js": 128,
	"./auth/selectors.js": 129,
	"./auth/spec-wrap-actions.js": 130,
	"./deep-linking/helpers.js": 131,
	"./deep-linking/index.js": 132,
	"./deep-linking/layout-wrap-actions.js": 133,
	"./deep-linking/spec-wrap-actions.js": 134,
	"./download-url.js": 135,
	"./err/actions.js": 60,
	"./err/error-transformers/hook.js": 136,
	"./err/error-transformers/transformers/not-of-type.js": 137,
	"./err/error-transformers/transformers/parameter-oneof.js": 138,
	"./err/error-transformers/transformers/strip-instance.js": 139,
	"./err/index.js": 140,
	"./err/reducers.js": 141,
	"./err/selectors.js": 142,
	"./layout/actions.js": 78,
	"./layout/index.js": 143,
	"./layout/reducers.js": 144,
	"./layout/selectors.js": 145,
	"./logs/index.js": 146,
	"./samples/fn.js": 79,
	"./samples/index.js": 147,
	"./spec/actions.js": 80,
	"./spec/index.js": 148,
	"./spec/reducers.js": 149,
	"./spec/selectors.js": 150,
	"./spec/wrap-actions.js": 151,
	"./split-pane-mode/components/index.js": 81,
	"./split-pane-mode/components/split-pane-mode.jsx": 152,
	"./split-pane-mode/index.js": 153,
	"./swagger-js/index.js": 154,
	"./util/index.js": 155,
	"./view/index.js": 156,
	"./view/root-injects.js": 157
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 492;

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./not-of-type.js": 137,
	"./parameter-oneof.js": 138,
	"./strip-instance.js": 139
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 493;

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 81,
	"./split-pane-mode.jsx": 152
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 494;

/***/ }),
/* 495 */
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),
/* 496 */
/***/ (function(module, exports) {

module.exports = require("ieee754");

/***/ }),
/* 497 */
/***/ (function(module, exports) {

module.exports = require("isarray");

/***/ }),
/* 498 */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),
/* 499 */
/***/ (function(module, exports) {

module.exports = require("memoizee");

/***/ }),
/* 500 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 501 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 502 */
/***/ (function(module, exports) {

module.exports = require("react-remarkable");

/***/ }),
/* 503 */
/***/ (function(module, exports) {

module.exports = require("react-split-pane");

/***/ }),
/* 504 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 505 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 506 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 507 */
/***/ (function(module, exports) {

module.exports = require("scroll-to-element");

/***/ }),
/* 508 */
/***/ (function(module, exports) {

module.exports = require("url-parse");

/***/ }),
/* 509 */
/***/ (function(module, exports) {

module.exports = require("xml");

/***/ }),
/* 510 */
/***/ (function(module, exports) {

module.exports = require("yaml-js");

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(219);
__webpack_require__(218);
module.exports = __webpack_require__(217);


/***/ })
/******/ ]);
});
//# sourceMappingURL=swagger-ui.js.map