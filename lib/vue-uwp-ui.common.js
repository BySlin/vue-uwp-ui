module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0066":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _electron_IS_ELECTRON_ENV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1dd");

var IS_NODE_ENV;

try {
  IS_NODE_ENV = global && global.process && !_electron_IS_ELECTRON_ENV__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
} catch (e) {
  IS_NODE_ENV = false;
}

/* harmony default export */ __webpack_exports__["a"] = (IS_NODE_ENV);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "0567":
/***/ (function(module, exports, __webpack_require__) {

/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 * 
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 * 
 * @param {string} key ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash 
 */

function murmurhash3_32_gc(key, seed) {
	var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
	
	remainder = key.length & 3; // key.length % 4
	bytes = key.length - remainder;
	h1 = seed;
	c1 = 0xcc9e2d51;
	c2 = 0x1b873593;
	i = 0;
	
	while (i < bytes) {
	  	k1 = 
	  	  ((key.charCodeAt(i) & 0xff)) |
	  	  ((key.charCodeAt(++i) & 0xff) << 8) |
	  	  ((key.charCodeAt(++i) & 0xff) << 16) |
	  	  ((key.charCodeAt(++i) & 0xff) << 24);
		++i;
		
		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}
	
	k1 = 0;
	
	switch (remainder) {
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);
		
		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}
	
	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	return h1 >>> 0;
}

if(true) {
  module.exports = murmurhash3_32_gc
}

/***/ }),

/***/ "0623":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedKeyframes;
function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
  var prefixedKeyframes = 'keyframes';

  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
    return cssPrefix + prefixedKeyframes;
  }
  return prefixedKeyframes;
}
module.exports = exports['default'];

/***/ }),

/***/ "07d6":
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1173":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "189c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
    return (0, _getPrefixedValue2.default)(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ea8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__("7638");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__("3e9f");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__("b5aa");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__("60f6");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "2289":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/segmdl2.3d45c175.ttf";

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "24c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var global = __webpack_require__("e53d");
var ctx = __webpack_require__("d864");
var classof = __webpack_require__("40c3");
var $export = __webpack_require__("63b6");
var isObject = __webpack_require__("f772");
var aFunction = __webpack_require__("79aa");
var anInstance = __webpack_require__("1173");
var forOf = __webpack_require__("a22a");
var speciesConstructor = __webpack_require__("f201");
var task = __webpack_require__("4178").set;
var microtask = __webpack_require__("aba2")();
var newPromiseCapabilityModule = __webpack_require__("656e");
var perform = __webpack_require__("4439");
var userAgent = __webpack_require__("bc13");
var promiseResolve = __webpack_require__("cd78");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("5168")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("5c95")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("45f2")($Promise, PROMISE);
__webpack_require__("4c95")(PROMISE);
Wrapper = __webpack_require__("584a")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("4ee1")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2bf4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageSet(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
    return (0, _getPrefixedValue2.default)(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "2c20":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = __webpack_require__("ea02");

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _cursor = __webpack_require__("310c");

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__("eef8");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__("189c");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__("3229");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__("3b8c");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__("7c9a");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__("2bf4");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__("3f77");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__("d335");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__("9b25");

var _transition2 = _interopRequireDefault(_transition);

var _static = __webpack_require__("bcb1");

var _static2 = _interopRequireDefault(_static);

var _dynamicData = __webpack_require__("3045");

var _dynamicData2 = _interopRequireDefault(_dynamicData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

var Prefixer = (0, _createPrefixer2.default)({
  prefixMap: _dynamicData2.default.prefixMap,
  plugins: plugins
}, _static2.default);
exports.default = Prefixer;
module.exports = exports['default'];

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fbd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/segmdl2.96bc7b83.eot";

/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "3009":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "3024":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
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
  } return fn.apply(that, args);
};


/***/ }),

/***/ "3045":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: [],
  prefixMap: { "chrome": { "appearance": 64, "userSelect": 53, "textEmphasisPosition": 64, "textEmphasis": 64, "textEmphasisStyle": 64, "textEmphasisColor": 64, "boxDecorationBreak": 64, "clipPath": 54, "maskImage": 64, "maskMode": 64, "maskRepeat": 64, "maskPosition": 64, "maskClip": 64, "maskOrigin": 64, "maskSize": 64, "maskComposite": 64, "mask": 64, "maskBorderSource": 64, "maskBorderMode": 64, "maskBorderSlice": 64, "maskBorderWidth": 64, "maskBorderOutset": 64, "maskBorderRepeat": 64, "maskBorder": 64, "maskType": 64, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49, "writingMode": 47 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 11, "userSelect": 11, "backdropFilter": 11, "fontKerning": 9, "scrollSnapType": 10.1, "scrollSnapPointsX": 10.1, "scrollSnapPointsY": 10.1, "scrollSnapDestination": 10.1, "scrollSnapCoordinate": 10.1, "boxDecorationBreak": 11, "clipPath": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textDecorationStyle": 11, "textDecorationSkip": 11, "textDecorationLine": 11, "textDecorationColor": 11, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 11, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8, "writingMode": 11 }, "firefox": { "appearance": 58, "userSelect": 58, "textAlignLast": 48, "tabSize": 58, "hyphens": 42, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 49, "userSelect": 40, "fontKerning": 19, "textEmphasisPosition": 49, "textEmphasis": 49, "textEmphasisStyle": 49, "textEmphasisColor": 49, "boxDecorationBreak": 49, "clipPath": 41, "maskImage": 49, "maskMode": 49, "maskRepeat": 49, "maskPosition": 49, "maskClip": 49, "maskOrigin": 49, "maskSize": 49, "maskComposite": 49, "mask": 49, "maskBorderSource": 49, "maskBorderMode": 49, "maskBorderSlice": 49, "maskBorderWidth": 49, "maskBorderOutset": 49, "maskBorderRepeat": 49, "maskBorder": 49, "maskType": 49, "textDecorationStyle": 43, "textDecorationSkip": 43, "textDecorationLine": 43, "textDecorationColor": 43, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36, "writingMode": 34 }, "ie": { "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11, "writingMode": 11 }, "edge": { "userSelect": 16, "wrapFlow": 16, "wrapThrough": 16, "wrapMargin": 16, "scrollSnapType": 16, "scrollSnapPointsX": 16, "scrollSnapPointsY": 16, "scrollSnapDestination": 16, "scrollSnapCoordinate": 16, "hyphens": 16, "flowInto": 16, "flowFrom": 16, "breakBefore": 16, "breakAfter": 16, "breakInside": 16, "regionFragment": 16, "gridTemplateColumns": 15, "gridTemplateRows": 15, "gridTemplateAreas": 15, "gridTemplate": 15, "gridAutoColumns": 15, "gridAutoRows": 15, "gridAutoFlow": 15, "grid": 15, "gridRowStart": 15, "gridColumnStart": 15, "gridRowEnd": 15, "gridRow": 15, "gridColumn": 15, "gridColumnEnd": 15, "gridColumnGap": 15, "gridRowGap": 15, "gridArea": 15, "gridGap": 15 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 11, "userSelect": 11, "backdropFilter": 11, "fontKerning": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "boxDecorationBreak": 11, "clipPath": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textSizeAdjust": 11, "textDecorationStyle": 11, "textDecorationSkip": 11, "textDecorationLine": 11, "textDecorationColor": 11, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 11, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1, "writingMode": 11 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 56, "userSelect": 4.4, "fontKerning": 4.4, "textEmphasisPosition": 56, "textEmphasis": 56, "textEmphasisStyle": 56, "textEmphasisColor": 56, "boxDecorationBreak": 56, "clipPath": 4.4, "maskImage": 56, "maskMode": 56, "maskRepeat": 56, "maskPosition": 56, "maskClip": 56, "maskOrigin": 56, "maskSize": 56, "maskComposite": 56, "mask": 56, "maskBorderSource": 56, "maskBorderMode": 56, "maskBorderSlice": 56, "maskBorderWidth": 56, "maskBorderOutset": 56, "maskBorderRepeat": 56, "maskBorder": 56, "maskType": 56, "filter": 4.4, "fontFeatureSettings": 4.4, "breakAfter": 4.4, "breakBefore": 4.4, "breakInside": 4.4, "columnCount": 4.4, "columnFill": 4.4, "columnGap": 4.4, "columnRule": 4.4, "columnRuleColor": 4.4, "columnRuleStyle": 4.4, "columnRuleWidth": 4.4, "columns": 4.4, "columnSpan": 4.4, "columnWidth": 4.4, "writingMode": 4.4 }, "and_chr": { "appearance": 61, "textEmphasisPosition": 61, "textEmphasis": 61, "textEmphasisStyle": 61, "textEmphasisColor": 61, "boxDecorationBreak": 61, "maskImage": 61, "maskMode": 61, "maskRepeat": 61, "maskPosition": 61, "maskClip": 61, "maskOrigin": 61, "maskSize": 61, "maskComposite": 61, "mask": 61, "maskBorderSource": 61, "maskBorderMode": 61, "maskBorderSlice": 61, "maskBorderWidth": 61, "maskBorderOutset": 61, "maskBorderRepeat": 61, "maskBorder": 61, "maskType": 61 }, "and_uc": { "flex": 11.4, "flexBasis": 11.4, "flexDirection": 11.4, "flexGrow": 11.4, "flexFlow": 11.4, "flexShrink": 11.4, "flexWrap": 11.4, "alignContent": 11.4, "alignItems": 11.4, "alignSelf": 11.4, "justifyContent": 11.4, "order": 11.4, "transform": 11.4, "transformOrigin": 11.4, "transformOriginX": 11.4, "transformOriginY": 11.4, "backfaceVisibility": 11.4, "perspective": 11.4, "perspectiveOrigin": 11.4, "transformStyle": 11.4, "transformOriginZ": 11.4, "animation": 11.4, "animationDelay": 11.4, "animationDirection": 11.4, "animationFillMode": 11.4, "animationDuration": 11.4, "animationIterationCount": 11.4, "animationName": 11.4, "animationPlayState": 11.4, "animationTimingFunction": 11.4, "appearance": 11.4, "userSelect": 11.4, "textEmphasisPosition": 11.4, "textEmphasis": 11.4, "textEmphasisStyle": 11.4, "textEmphasisColor": 11.4, "clipPath": 11.4, "maskImage": 11.4, "maskMode": 11.4, "maskRepeat": 11.4, "maskPosition": 11.4, "maskClip": 11.4, "maskOrigin": 11.4, "maskSize": 11.4, "maskComposite": 11.4, "mask": 11.4, "maskBorderSource": 11.4, "maskBorderMode": 11.4, "maskBorderSlice": 11.4, "maskBorderWidth": 11.4, "maskBorderOutset": 11.4, "maskBorderRepeat": 11.4, "maskBorder": 11.4, "maskType": 11.4, "textSizeAdjust": 11.4, "filter": 11.4, "hyphens": 11.4, "fontFeatureSettings": 11.4, "breakAfter": 11.4, "breakBefore": 11.4, "breakInside": 11.4, "columnCount": 11.4, "columnFill": 11.4, "columnGap": 11.4, "columnRule": 11.4, "columnRuleColor": 11.4, "columnRuleStyle": 11.4, "columnRuleWidth": 11.4, "columns": 11.4, "columnSpan": 11.4, "columnWidth": 11.4, "writingMode": 11.4 }, "op_mini": {} }
};
module.exports = exports["default"];

/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "310c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grabValues = {
  grab: true,
  grabbing: true
};


var zoomValues = {
  'zoom-in': true,
  'zoom-out': true
};

function cursor(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of
  // version until a reliable browser support info can be found
  // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
  if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }

  if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "3229":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  flex: true,
  'inline-flex': true
};
function flex(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "37c8":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("2b4c");


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3a72":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var LIBRARY = __webpack_require__("2d00");
var wksExt = __webpack_require__("37c8");
var defineProperty = __webpack_require__("86cc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "3b8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};


var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "3c11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var speciesConstructor = __webpack_require__("f201");
var promiseResolve = __webpack_require__("cd78");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "3e9f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "3f77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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

/***/ "4178":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var invoke = __webpack_require__("3024");
var html = __webpack_require__("32fc");
var cel = __webpack_require__("1ec9");
var global = __webpack_require__("e53d");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("6b4c")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "43fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("63b6");
var newPromiseCapability = __webpack_require__("656e");
var perform = __webpack_require__("4439");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "4439":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4856":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c95":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var dP = __webpack_require__("d9f6");
var DESCRIPTORS = __webpack_require__("8e60");
var SPECIES = __webpack_require__("5168")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5c95":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("35e8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df2":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var $parseFloat = __webpack_require__("d752");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "60f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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

/***/ "656e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("79aa");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "66cb":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "696e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c207");
__webpack_require__("1654");
__webpack_require__("6c1c");
__webpack_require__("24c5");
__webpack_require__("3c11");
__webpack_require__("43fc");
module.exports = __webpack_require__("584a").Promise;


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "734c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__("c8a8");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__("a4ce");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__("4856");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "736f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/segmdl2.6b3639cb.svg";

/***/ }),

/***/ "7638":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__("4856");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "795b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("696e");

/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7b9e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),

/***/ "7bbc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6821");
var gOPN = __webpack_require__("9093").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "7c9a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
function gradient(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "81c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedValue;
function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
  if (keepUnprefixed) {
    return [prefixedValue, value];
  }
  return prefixedValue;
}
module.exports = exports["default"];

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "840c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "8689":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8a81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var DESCRIPTORS = __webpack_require__("9e1e");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var META = __webpack_require__("67ab").KEY;
var $fails = __webpack_require__("79e5");
var shared = __webpack_require__("5537");
var setToStringTag = __webpack_require__("7f20");
var uid = __webpack_require__("ca5a");
var wks = __webpack_require__("2b4c");
var wksExt = __webpack_require__("37c8");
var wksDefine = __webpack_require__("3a72");
var enumKeys = __webpack_require__("d4c0");
var isArray = __webpack_require__("1169");
var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var toObject = __webpack_require__("4bf8");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var createDesc = __webpack_require__("4630");
var _create = __webpack_require__("2aeb");
var gOPNExt = __webpack_require__("7bbc");
var $GOPD = __webpack_require__("11e9");
var $GOPS = __webpack_require__("2621");
var $DP = __webpack_require__("86cc");
var $keys = __webpack_require__("0d58");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("52a7").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2d00")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("32e9")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__("c8a8");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var requiresPrefixDashCased = void 0;

function transition(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    // memoize the prefix array for later use
    if (!requiresPrefixDashCased) {
      requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateProperty2.default)(prop);
      });
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    requiresPrefixDashCased.forEach(function (prop) {
      multipleValues.forEach(function (val, index) {
        if (val.indexOf(prop) > -1 && prop !== 'order') {
          multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
        }
      });
    });

    return multipleValues.join(',');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a22a":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var anObject = __webpack_require__("e4ae");
var toLength = __webpack_require__("b447");
var getIterFn = __webpack_require__("7cd6");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a4ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "a6e4":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) __webpack_require__("07d6")(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aaf9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__("a4ce");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "aba2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var macrotask = __webpack_require__("4178").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("6b4c")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b1dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);


var userAgent = typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase() || "";
var isElectronEnv = userAgent.includes(" electron/");
/* harmony default export */ __webpack_exports__["a"] = (isElectronEnv);

/***/ }),

/***/ "b26d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/segmdl2.e7736af1.woff";

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b5aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b953":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "bc13":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "bcb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = __webpack_require__("1ea8");

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = __webpack_require__("7b9e");

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = __webpack_require__("8689");

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__("aaf9");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__("ed91");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__("f5ea");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__("cada");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__("e9fa");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__("d8a1");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__("840c");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__("b953");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__("734c");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c2ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/segmdl2.b310d020.woff2";

/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__("3009");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cada":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd78":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var newPromiseCapability = __webpack_require__("656e");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d335":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};

var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true

  // TODO: chrome & opera support it
};function sizing(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d752":
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__("7726").parseFloat;
var $trim = __webpack_require__("aa77").trim;

module.exports = 1 / $parseFloat(__webpack_require__("fdef") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__("a4ce");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e265":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ed33");

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e9fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__("a4ce");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "ea02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPrefixer;

var _getBrowserInformation = __webpack_require__("fdb5");

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = __webpack_require__("0623");

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = __webpack_require__("4856");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _addNewValuesOnly = __webpack_require__("b5aa");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__("60f6");

var _isObject2 = _interopRequireDefault(_isObject);

var _prefixValue = __webpack_require__("3e9f");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
    return style;
  };

  return function () {
    /**
    * Instantiante a new prefixer
    * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
    * @param {string} keepUnprefixed - keeps unprefixed properties and values
    */
    function Prefixer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prefixer);

      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

      this._userAgent = options.userAgent || defaultUserAgent;
      this._keepUnprefixed = options.keepUnprefixed || false;

      if (this._userAgent) {
        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
      }

      // Checks if the userAgent was resolved correctly
      if (this._browserInfo && this._browserInfo.cssPrefix) {
        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
      } else {
        this._useFallback = true;
        return false;
      }

      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
      if (prefixData) {
        this._requiresPrefix = {};

        for (var property in prefixData) {
          if (prefixData[property] >= this._browserInfo.browserVersion) {
            this._requiresPrefix[property] = true;
          }
        }

        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
      } else {
        this._useFallback = true;
      }

      this._metaData = {
        browserVersion: this._browserInfo.browserVersion,
        browserName: this._browserInfo.browserName,
        cssPrefix: this._browserInfo.cssPrefix,
        jsPrefix: this._browserInfo.jsPrefix,
        keepUnprefixed: this._keepUnprefixed,
        requiresPrefix: this._requiresPrefix
      };
    }

    _createClass(Prefixer, [{
      key: 'prefix',
      value: function prefix(style) {
        // use static prefixer as fallback if userAgent can not be resolved
        if (this._useFallback) {
          return fallback(style);
        }

        // only add prefixes if needed
        if (!this._hasPropsRequiringPrefix) {
          return style;
        }

        return this._prefixStyle(style);
      }
    }, {
      key: '_prefixStyle',
      value: function _prefixStyle(style) {
        for (var property in style) {
          var value = style[property];

          // handle nested objects
          if ((0, _isObject2.default)(value)) {
            style[property] = this.prefix(value);
            // handle array values
          } else if (Array.isArray(value)) {
            var combinedValue = [];

            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (_processedValue) {
              style[property] = _processedValue;
            }

            // add prefixes to properties
            if (this._requiresPrefix.hasOwnProperty(property)) {
              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
              if (!this._keepUnprefixed) {
                delete style[property];
              }
            }
          }
        }

        return style;
      }

      /**
      * Returns a prefixed version of the style object using all vendor prefixes
      * @param {Object} styles - Style object that gets prefixed properties added
      * @returns {Object} - Style object with prefixed properties and values
      */

    }], [{
      key: 'prefixAll',
      value: function prefixAll(styles) {
        return fallback(styles);
      }
    }]);

    return Prefixer;
  }();
}
module.exports = exports['default'];

/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "ed91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__("a4ce");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "eef8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _getPrefixedValue = __webpack_require__("81c8");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossFade(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
    return (0, _getPrefixedValue2.default)(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f201":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("e4ae");
var aFunction = __webpack_require__("79aa");
var SPECIES = __webpack_require__("5168")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f5ea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("e265");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__("66cb");

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/dynamic/index.js
var dynamic = __webpack_require__("2c20");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);

// EXTERNAL MODULE: ./src/common/nodeJS/IS_NODE_ENV.js
var IS_NODE_ENV = __webpack_require__("0066");

// CONCATENATED MODULE: ./src/common/prefixAll.js





function prefixAll(userAgent) {
  var isServer = IS_NODE_ENV["a" /* default */];

  if (userAgent === false) {
    return function (style) {
      return style;
    };
  }

  if (!isServer && userAgent === void 0) {
    userAgent = navigator.userAgent;
  }

  if (!isServer || isServer && userAgent !== void 0 && userAgent !== "all") {
    var prefixer = new dynamic_default.a({
      userAgent: userAgent
    });
    return function (style) {
      if (!style) return;
      return prefixer.prefix(style);
    };
  } else {
    return function (style) {
      if (!style) return;
      var stylePrefixed = dynamic_default.a.prefixAll(style);
      var isFlex = ["flex", "inline-flex"].includes(style.display); // We can't apply this join with react-dom:
      // #https://github.com/facebook/react/issues/6467

      if (isFlex) {
        stylePrefixed.display = stylePrefixed.display.join("; display: ") + ";";
      }

      return stylePrefixed;
    };
  }
}

/* harmony default export */ var common_prefixAll = (prefixAll);
// CONCATENATED MODULE: ./node_modules/stackblur-canvas/dist/stackblur-es.js
function stackblur_es_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    stackblur_es_typeof = function (obj) {
      return typeof obj;
    };
  } else {
    stackblur_es_typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return stackblur_es_typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}
* @module StackBlur
* @version 0.5
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @returns {undefined}
 */

function processImage(img, canvas, radius, blurAlphaChannel) {
  if (typeof img === 'string') {
    img = document.getElementById(img);
  }

  if (!img || !('naturalWidth' in img)) {
    return;
  }

  var w = img.naturalWidth;
  var h = img.naturalHeight;

  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || !('getContext' in canvas)) {
    return;
  }

  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);

  if (isNaN(radius) || radius < 1) {
    return;
  }

  if (blurAlphaChannel) {
    processCanvasRGBA(canvas, 0, 0, w, h, radius);
  } else {
    processCanvasRGB(canvas, 0, 0, w, h, radius);
  }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */


function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || stackblur_es_typeof(canvas) !== 'object' || !('getContext' in canvas)) {
    throw new TypeError('Expecting canvas with `getContext` method in processCanvasRGB(A) calls!');
  }

  var context = canvas.getContext('2d');

  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, rSum, gSum, bSum, aSum, rOutSum, gOutSum, bOutSum, aOutSum, rInSum, gInSum, bInSum, aInSum, pr, pg, pb, pa, rbs;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = aInSum = rSum = gSum = bSum = aSum = 0;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    aOutSum = radiusPlus1 * (pa = pixels[yi + 3]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    aSum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      aSum += (stack.a = pa = pixels[p + 3]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      aInSum += pa;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi + 3] = pa = aSum * mulSum >> shgSum;

      if (pa !== 0) {
        pa = 255 / pa;
        pixels[yi] = (rSum * mulSum >> shgSum) * pa;
        pixels[yi + 1] = (gSum * mulSum >> shgSum) * pa;
        pixels[yi + 2] = (bSum * mulSum >> shgSum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      aInSum += stackIn.a = pixels[p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      aOutSum += pa = stackOut.a;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      aInSum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = aInSum = rInSum = gSum = bSum = aSum = rSum = 0;
    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    aOutSum = radiusPlus1 * (pa = pixels[yi + 3]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    aSum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;
      aSum += (stack.a = pa = pixels[yi + 3]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      aInSum += pa;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p + 3] = pa = aSum * mulSum >> shgSum;

      if (pa > 0) {
        pa = 255 / pa;
        pixels[p] = (rSum * mulSum >> shgSum) * pa;
        pixels[p + 1] = (gSum * mulSum >> shgSum) * pa;
        pixels[p + 2] = (bSum * mulSum >> shgSum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];
      aSum += aInSum += stackIn.a = pixels[p + 3];
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      aOutSum += pa = stackOut.a;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      aInSum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGB(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGB(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, rSum, gSum, bSum, rOutSum, gOutSum, bOutSum, rInSum, gInSum, bInSum, pr, pg, pb, rbs;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = rSum = gSum = bSum = 0;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi] = rSum * mulSum >> shgSum;
      pixels[yi + 1] = gSum * mulSum >> shgSum;
      pixels[yi + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = rInSum = gSum = bSum = rSum = 0;
    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = rSum * mulSum >> shgSum;
      pixels[p + 1] = gSum * mulSum >> shgSum;
      pixels[p + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 *
 */


var BlurStack = function BlurStack() {
  _classCallCheck(this, BlurStack);

  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
};



// CONCATENATED MODULE: ./src/styles/generateAcrylicTexture.js


function generateAcrylicTexture(image) {
  var tintColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
  var tintOpacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.4;
  var blurSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 24;
  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  if (!image) return "none";
  var id = "react-uwp-AcrylicTexture-".concat(tintColor, "-").concat(tintOpacity);
  var canvas = document.getElementById(id);

  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = id;
    document.body.appendChild(canvas);
  }

  canvas.style.display = "none";
  var context = canvas.getContext("2d");
  var imageNode = new Image();
  imageNode.crossOrigin = "Anonymous";

  imageNode.onload = function () {
    var naturalWidth = imageNode.naturalWidth,
        naturalHeight = imageNode.naturalHeight;

    if (naturalWidth > 1000) {
      naturalHeight = naturalHeight / naturalWidth * 1000;
      naturalWidth = 1000;
    }

    if (naturalHeight > 1000) {
      naturalWidth = naturalWidth / naturalHeight * 1000;
      naturalHeight = 1000;
    }

    canvas.width = naturalWidth;
    canvas.height = naturalHeight;
    context.drawImage(imageNode, 0, 0, naturalWidth, naturalHeight);
    processCanvasRGBA(canvas, 0, 0, naturalWidth, naturalHeight, blurSize);
    context.fillStyle = tinycolor(tintColor).setAlpha(tintOpacity).toRgbString();
    context.fillRect(0, 0, naturalWidth, naturalHeight); // const noiseWidth = 40;
    // const noiseHeight = 40;
    // const noiseImageDate = generateNoise(canvas, context, noiseWidth, noiseHeight, noiseSize, noiseOpacity);

    if (HTMLCanvasElement.prototype.toBlob) {
      canvas.toBlob(function (blob) {
        var url = URL.createObjectURL(blob);
        callback(url);
      });
    } else if (HTMLCanvasElement.prototype.msToBlob) {
      var blob = canvas.msToBlob();
      var url = URL.createObjectURL(blob);
      callback(url);
    } else {
      callback(canvas.toDataURL("image/jpg"));
    }
  };

  imageNode.src = image;
}
function generateNoise(canvas, context, width, height, noiseSize, opacity) {
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var numb = Math.floor(Math.random() * 60);
      context.fillStyle = "rgba(".concat(numb, ", ").concat(numb, ", ").concat(numb, ", ").concat(opacity, ")");
      context.fillRect(x, y, noiseSize, noiseSize);
    }
  }

  return context.getImageData(0, 0, width, height);
}
// CONCATENATED MODULE: ./src/common/browser/addCSSRule.js

function addCSSRule(styleSheetStr) {
  var styleSheet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.styleSheets[0];
  if (!styleSheet) styleSheet = document.styleSheets[0];

  var insertToRule = function insertToRule(styleSheet) {
    try {
      if (Array.isArray(styleSheetStr)) {
        styleSheetStr.forEach(function (str) {
          styleSheet.insertRule(str, 0);
        });
      } else {
        styleSheet.insertRule(styleSheetStr, 0);
      }
    } catch (e) {
      console.error(e);
      console.log(styleSheet, styleSheetStr);
    }
  };

  if (!styleSheet) {
    var styleElm = document.createElement("style");
    document.head.appendChild(styleElm);
    insertToRule(styleElm.sheet);
  } else {
    insertToRule(styleSheet);
  }
}
// CONCATENATED MODULE: ./src/styles/fonts/index.js

function setSegoeMDL2AssetsFonts() {
  addCSSRule("@font-face {\n      font-family: \"Segoe MDL2 Assets\";\n      font-style: normal;\n      font-weight: 400;\n      src:\n        local(\"Segoe MDL2 Assets\"),\n        url(\"".concat(__webpack_require__("2fbd"), "\"),\n        url(\"").concat(__webpack_require__("c2ca"), "\") format(\"woff2\"),\n        url(\"").concat(__webpack_require__("b26d"), "\") format(\"woff\"),\n        url(\"").concat(__webpack_require__("736f"), "#SegoeMDL2Assets\") format(\"svg\"),\n        url(\"").concat(__webpack_require__("2289"), "\") format(\"truetype\");\n    }"));
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/murmurhash-js/murmurhash3_gc.js
var murmurhash3_gc = __webpack_require__("0567");

// CONCATENATED MODULE: ./src/common/react/isUnitlessNumber.js
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/* harmony default export */ var react_isUnitlessNumber = (isUnitlessNumber);
// CONCATENATED MODULE: ./src/styles/StyleManager.js










var replace2Dashes = function replace2Dashes(key) {
  return key.replace(/[A-Z]/g, function ($1) {
    return "-".concat($1.toLowerCase());
  });
};
var StyleManager_getStyleValue = function getStyleValue(key, value) {
  return typeof value === "number" && !react_isUnitlessNumber[key] ? "".concat(value, "px") : value;
};
var extendsStyleKeys = {
  "&:hover": true,
  "&:active": true,
  "&:focus": true,
  "&:disabled": true
};

var StyleManager_StyleManager = function StyleManager(_config) {
  var _this = this;

  classCallCheck_classCallCheck(this, StyleManager);

  _defineProperty(this, "prefixClassName", void 0);

  _defineProperty(this, "theme", void 0);

  _defineProperty(this, "themeId", 0);

  _defineProperty(this, "styleElement", null);

  _defineProperty(this, "sheets", {});

  _defineProperty(this, "styleDidUpdate", function () {});

  _defineProperty(this, "CSSText", "");

  _defineProperty(this, "addedCSSText", {});

  _defineProperty(this, "setupTheme", function (theme) {
    _this.theme = theme;
    _this.themeId = murmurhash3_gc([theme.accent, theme.themeName, theme.useFluentDesign].join(", "));
  });

  _defineProperty(this, "setupStyleElement", function () {
    if (IS_NODE_ENV["a" /* default */]) return;

    if (!_this.styleElement) {
      var name = "data-uwp-jss-".concat(_this.themeId);
      _this.styleElement = document.createElement("style");

      _this.styleElement.setAttribute(name, "");

      document.head.appendChild(_this.styleElement);
    }
  });

  _defineProperty(this, "cleanStyleSheet", function () {
    if (_this.styleElement) document.head.removeChild(_this.styleElement);
    _this.theme = null;
    _this.sheets = {};
    _this.CSSText = "";
    _this.styleElement = null;
  });

  _defineProperty(this, "style2CSSText", function (style) {
    return style ? Object.keys(style).map(function (key) {
      return "  ".concat(replace2Dashes(key), ": ").concat(StyleManager_getStyleValue(key, style[key]), ";");
    }).join("\n") : void 0;
  });

  _defineProperty(this, "sheetsToString", function () {
    return "\n".concat(Object.keys(_this.sheets).map(function (id) {
      return _this.sheets[id].CSSText;
    }).join(""));
  });

  _defineProperty(this, "addStyle", function (style) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var id = murmurhash3_gc("".concat(_this.themeId, ": ").concat(JSON.stringify(style)));
    if (_this.sheets[id]) return _this.sheets[id];
    var classNameWithHash = "".concat(_this.prefixClassName).concat(className, "-").concat(id);
    var styleKeys = Object.keys(style);
    var CSSText = "";
    var contentCSSText = "";
    var extendsCSSText = "";

    for (var _i = 0, _styleKeys = styleKeys; _i < _styleKeys.length; _i++) {
      var styleKey = _styleKeys[_i];

      if (extendsStyleKeys[styleKey]) {
        var extendsStyle = style[styleKey];

        if (extendsStyle) {
          extendsCSSText += ".".concat(classNameWithHash).concat(styleKey.slice(1), " {\n").concat(_this.style2CSSText(extendsStyle), "\n}\n");
        }
      } else {
        if (style[styleKey] !== void 0) {
          contentCSSText += "  ".concat(replace2Dashes(styleKey), ": ").concat(StyleManager_getStyleValue(styleKey, style[styleKey]), ";\n");
        }
      }
    }

    CSSText += ".".concat(classNameWithHash, " {\n").concat(contentCSSText, "\n}\n");
    CSSText += extendsCSSText;
    _this.sheets[id] = {
      CSSText: CSSText,
      classNameWithHash: classNameWithHash,
      id: id,
      className: className
    };
    callback();
    return _this.sheets[id];
  });

  _defineProperty(this, "addStyleWithUpdate", function (style) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return _this.addStyle(style, className, _this.renderSheets);
  });

  _defineProperty(this, "addCSSText", function (CSSText) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var hash = murmurhash3_gc(CSSText);
    var shouldUpdate = !_this.addedCSSText[hash];

    if (shouldUpdate) {
      _this.addedCSSText[hash] = true;
      _this.CSSText += CSSText;
    }

    callback(shouldUpdate);
  });

  _defineProperty(this, "addCSSTextWithUpdate", function (CSSText) {
    _this.addCSSText(CSSText, function (shouldUpdate) {
      if (_this.styleElement && shouldUpdate) {
        _this.updateStyleElement(_this.styleElement.textContent += CSSText);
      }
    });
  });

  _defineProperty(this, "setStyleToManager", function (config, callback) {
    var newStyles = {};

    var _ref = config || {},
        style = _ref.style,
        className = _ref.className;

    if (callback) style = callback(_this.theme);

    var _style = style,
        dynamicStyle = _style.dynamicStyle,
        styleProperties = _objectWithoutProperties(_style, ["dynamicStyle"]);

    className = className || "";

    var sheet = _this.addStyleWithUpdate(styleProperties, className);

    newStyles = {
      className: sheet.classNameWithHash,
      style: dynamicStyle
    };
    return newStyles;
  });

  _defineProperty(this, "setStylesToManager", function (config, callback) {
    var newStyles = {};
    var className = config.className,
        styles = config.styles;
    if (callback) styles = callback(_this.theme);
    className = className || "";
    var keys = Object.keys(styles); // eslint-disable-next-line no-unused-vars

    var CSSText = "";

    for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
      var key = _keys[_i2];
      var styleItem = styles[key];
      if (!styleItem) continue;
      var isStyleClasses = styleItem.className || styleItem.style;
      var secondClassName = "-".concat(key);

      if (isStyleClasses) {
        secondClassName = styleItem.className;
        secondClassName = secondClassName ? "-".concat(secondClassName) : "";
        secondClassName = "-".concat(key).concat(secondClassName);
      }

      var _ref2 = isStyleClasses ? styleItem.style : styleItem,
          dynamicStyle = _ref2.dynamicStyle,
          styleProperties = _objectWithoutProperties(_ref2, ["dynamicStyle"]);

      var sheet = _this.addStyleWithUpdate(styleProperties, "".concat(className).concat(secondClassName));

      newStyles[key] = {
        className: sheet.classNameWithHash,
        style: dynamicStyle
      };
      CSSText += "".concat(sheet.CSSText, "\n");
    }

    return newStyles;
  });

  _defineProperty(this, "renderSheets", function () {
    var textContent = _this.sheetsToString();

    textContent += _this.CSSText;

    _this.updateStyleElement(textContent);
  });

  _defineProperty(this, "updateStyleElement", function (textContent) {
    // const name = `data-uwp-jss-${this.themeId}`;
    if (_this.styleElement) {
      _this.styleElement.textContent = textContent;

      _this.styleDidUpdate();
    }
  });

  var prefixClassName = _config.prefixClassName,
      _theme = _config.theme,
      styleDidUpdate = _config.styleDidUpdate;

  this.styleDidUpdate = styleDidUpdate || function () {};

  this.prefixClassName = prefixClassName ? "".concat(prefixClassName, "-") : "";
  this.setupTheme(_theme);
  this.setupStyleElement();
};


// CONCATENATED MODULE: ./src/styles/getTheme.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








if (!IS_NODE_ENV["a" /* default */]) {
  setSegoeMDL2AssetsFonts();
}

function darken(color, coefficient) {
  var hsl = tinycolor(color).toHsl();
  hsl.l = hsl.l * (1 - coefficient);
  return tinycolor(hsl).toRgbString();
}
function lighten(color, coefficient) {
  var hsl = tinycolor(color).toHsl();
  hsl.l = hsl.l + (100 - hsl.l) * coefficient;
  return tinycolor(hsl).toRgbString();
}
function getTheme() {
  var themeConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var themeName = themeConfig.themeName,
      accent = themeConfig.accent,
      useFluentDesign = themeConfig.useFluentDesign,
      desktopBackgroundImage = themeConfig.desktopBackgroundImage,
      useInlineStyle = themeConfig.useInlineStyle;
  themeName = themeName || "dark";
  accent = accent || "#0078D7";
  useFluentDesign = useFluentDesign === void 0 ? false : useFluentDesign;
  var isDark = themeName === "dark";
  var baseHigh = isDark ? "#fff" : "#000";
  var altHigh = isDark ? "#000" : "#fff";
  var baseHighColor = tinycolor(baseHigh);
  var altHighColor = tinycolor(altHigh);
  var accentColor = tinycolor(accent);
  var altMediumLow = altHighColor.setAlpha(0.4).toRgbString();
  var altMedium = altHighColor.setAlpha(0.6).toRgbString();
  var altMediumHigh = altHighColor.setAlpha(0.8).toRgbString();
  var theme = {
    themeName: themeName,
    fonts: {
      sansSerifFonts: "Segoe UI, Microsoft YaHei, Open Sans, sans-serif, Hiragino Sans GB, Arial, Lantinghei SC, STHeiti, WenQuanYi Micro Hei, SimSun",
      segoeMDL2Assets: "Segoe MDL2 Assets"
    },
    useInlineStyle: Boolean(useInlineStyle),
    styleManager: void 0,
    useFluentDesign: useFluentDesign,
    desktopBackground: void 0,
    desktopBackgroundImage: desktopBackgroundImage,
    haveAcrylicTextures: false,
    acrylicTexture40: {
      background: altMediumLow
    },
    acrylicTexture60: {
      background: altMedium
    },
    acrylicTexture80: {
      background: altMediumHigh
    },
    scrollReveals: [],
    scrollRevealListener: void 0,
    accent: accent,
    accentLighter1: lighten(accentColor.toHexString(), 0.5),
    accentLighter2: lighten(accentColor.toHexString(), 0.7),
    accentLighter3: lighten(accentColor.toHexString(), 0.9),
    accentDarker1: darken(accentColor.toHexString(), 0.5),
    accentDarker2: darken(accentColor.toHexString(), 0.7),
    accentDarker3: darken(accentColor.toHexString(), 0.9),
    baseLow: baseHighColor.setAlpha(0.2).toRgbString(),
    baseMediumLow: baseHighColor.setAlpha(0.4).toRgbString(),
    baseMedium: baseHighColor.setAlpha(0.6).toRgbString(),
    baseMediumHigh: baseHighColor.setAlpha(0.8).toRgbString(),
    baseHigh: baseHigh,
    altLow: altHighColor.setAlpha(0.2).toRgbString(),
    altMediumLow: altMediumLow,
    altMedium: altMedium,
    altMediumHigh: altMediumHigh,
    altHigh: altHigh,
    listLow: baseHighColor.setAlpha(0.1).toRgbString(),
    listMedium: baseHighColor.setAlpha(0.2).toRgbString(),
    listAccentLow: accentColor.setAlpha(0.6).toRgbString(),
    listAccentMedium: accentColor.setAlpha(0.8).toRgbString(),
    listAccentHigh: accentColor.setAlpha(0.9).toRgbString(),
    chromeLow: isDark ? "#171717" : "#f2f2f2",
    chromeMediumLow: isDark ? "#2b2b2b" : "#f2f2f2",
    chromeMedium: isDark ? "#1f1f1f" : "#e6e6e6",
    chromeHigh: isDark ? "#767676" : "#ccc",
    chromeAltLow: isDark ? "#f2f2f2" : "#171717",
    chromeDisabledLow: isDark ? "#858585" : "#7a7a7a",
    chromeDisabledHigh: isDark ? "#333" : "#ccc",
    chromeBlackLow: tinycolor("#000").setAlpha(0.2).toRgbString(),
    chromeBlackMediumLow: tinycolor("#000").setAlpha(0.4).toRgbString(),
    chromeBlackMedium: tinycolor("#000").setAlpha(0.8).toRgbString(),
    chromeBlackHigh: "#000",
    chromeWhite: "#fff",
    isDarkTheme: isDark,
    prefixStyle: common_prefixAll(),
    fixStyle: function fixStyle(style) {
      if (!style) {
        return;
      }

      Object.keys(style).forEach(function (key) {
        style[key] = StyleManager_getStyleValue(key, style[key]);
      });
    },
    prepareStyle: function prepareStyle(config, callback) {
      if (!this.styleManager) return;

      var extendsClassName = config.extendsClassName,
          managerConfig = _objectWithoutProperties(config, ["extendsClassName"]);

      if (this.useInlineStyle) {
        managerConfig.className += extendsClassName ? " ".concat(extendsClassName) : "";
        var style = managerConfig.style;
        this.fixStyle(style);
        return managerConfig;
      } else {
        var styleClasses = this.styleManager.setStyleToManager(managerConfig, callback);
        styleClasses.className += extendsClassName ? " ".concat(extendsClassName) : "";
        return styleClasses;
      }
    },
    prepareStyles: function prepareStyles(config, callback) {
      if (!this.styleManager) return;

      if (this.useInlineStyle) {
        var styles = config.styles;
        var result = {};

        for (var key in styles) {
          var style = styles[key];
          this.fixStyle(style);
          result[key] = {
            style: style
          };
        }

        return result;
      } else {
        var styleClasses = this.styleManager.setStylesToManager(config, callback);
        return styleClasses;
      }
    },
    classNames: function classNames() {
      for (var _len = arguments.length, _classNames = new Array(_len), _key = 0; _key < _len; _key++) {
        _classNames[_key] = arguments[_key];
      }

      return _classNames.reduce(function (prev, curr) {
        return (prev || "") + (curr ? " ".concat(curr) : "");
      });
    },
    generateAcrylicTextures: function generateAcrylicTextures(currTheme) {
      var _this = this;

      var themeCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.acrylicTextureCount = 0;
      var baseConfig = {
        blurSize: 24,
        noiseSize: 1,
        noiseOpacity: 0.2
      };

      var callback = function callback(image, key) {
        if (key === 4) {
          _this.acrylicTextureCount += 1;
          Object.assign(currTheme.acrylicTexture40, _objectSpread({
            tintColor: currTheme.chromeMediumLow,
            tintOpacity: 0.4,
            background: "url(".concat(image, ") no-repeat fixed top left / cover")
          }, baseConfig));
        }

        if (key === 6) {
          _this.acrylicTextureCount += 1;
          Object.assign(currTheme.acrylicTexture60, _objectSpread({
            tintColor: currTheme.chromeLow,
            tintOpacity: 0.6,
            background: "url(".concat(image, ") no-repeat fixed top left / cover")
          }, baseConfig));
        }

        if (key === 8) {
          _this.acrylicTextureCount += 1;
          Object.assign(currTheme.acrylicTexture80, _objectSpread({
            tintColor: currTheme.chromeLow,
            tintOpacity: 0.8,
            background: "url(".concat(image, ") no-repeat fixed top left / cover")
          }, baseConfig));
        }

        if (_this.acrylicTextureCount === 3) {
          currTheme.haveAcrylicTextures = true;
          if (themeCallback) themeCallback(currTheme);

          if (_this.generateAcrylicTextures.callback) {
            _this.generateAcrylicTextures.callback(currTheme);
          }

          return currTheme;
        }
      };

      generateAcrylicTexture(currTheme.desktopBackgroundImage, currTheme.chromeMediumLow, 0.4, void 0, void 0, void 0, function (image) {
        return callback(image, 4);
      });
      generateAcrylicTexture(currTheme.desktopBackgroundImage, currTheme.chromeLow, 0.6, void 0, void 0, void 0, function (image) {
        return callback(image, 6);
      });
      generateAcrylicTexture(currTheme.desktopBackgroundImage, currTheme.chromeLow, 0.8, void 0, void 0, void 0, function (image) {
        return callback(image, 8);
      });
    },
    toasts: {},
    typographyStyles: {
      header: {
        fontWeight: "lighter",
        fontSize: 46,
        lineHeight: "56px"
      },
      subHeader: {
        fontWeight: "lighter",
        fontSize: 34,
        lineHeight: "40px"
      },
      title: {
        fontWeight: "lighter",
        fontSize: 24,
        lineHeight: "28px"
      },
      subTitle: {
        fontWeight: "normal",
        fontSize: 20,
        lineHeight: "24px"
      },
      subTitleAlt: {
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: "20px"
      },
      base: {
        fontWeight: 300,
        fontSize: 15,
        lineHeight: "20px"
      },
      baseAlt: {
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: "20px"
      },
      body: {
        fontWeight: 200,
        fontSize: 15,
        lineHeight: "20px"
      },
      captionAlt: {
        fontWeight: "lighter",
        fontSize: 13,
        lineHeight: "16px"
      },
      caption: {
        fontWeight: "lighter",
        fontSize: 12,
        lineHeight: "14px"
      }
    },
    zIndex: {
      listView: 10,
      calendarView: 20,
      dropDownMenu: 102,
      commandBar: 200,
      tooltip: 201,
      flyout: 202,
      contentDialog: 300,
      header: 301,
      mediaPlayer: 2147483647,
      toast: 310
    }
  };
  return theme;
}
// CONCATENATED MODULE: ./src/styles/darkTheme.js

var darkTheme = getTheme({
  themeName: "dark"
});
/* harmony default export */ var styles_darkTheme = (darkTheme);
// CONCATENATED MODULE: ./src/components/Animate/CustomAnimate.js










function CustomAnimate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CustomAnimate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CustomAnimate_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CustomAnimate_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var CustomAnimate_baseStyle = {
  display: "inline-block",
  verticalAlign: "middle"
};
var slideBottomInProps = {
  leaveStyle: {
    transform: "translateY(100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateY(0)",
    opacity: 1
  },
  wrapperStyle: {
    overflow: "hidden"
  },
  speed: 500,
  useWrapper: true
};
var slideTopInProps = {
  leaveStyle: {
    transform: "translateY(-100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateY(0)",
    opacity: 1
  },
  wrapperStyle: {
    overflow: "hidden"
  },
  speed: 500,
  useWrapper: true
};
var slideLeftInProps = {
  leaveStyle: {
    transform: "translateX(-100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateX(0)",
    opacity: 1
  },
  wrapperStyle: {
    overflow: "hidden"
  },
  speed: 500,
  useWrapper: true
};
var slideRightInProps = {
  leaveStyle: {
    transform: "translateX(100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateX(0)",
    opacity: 1
  },
  wrapperStyle: {
    overflow: "hidden"
  },
  appearAnimate: true,
  speed: 500,
  useWrapper: true
};
var scaleInProps = {
  leaveStyle: {
    transform: "scale(0)",
    opacity: 0
  },
  enterStyle: {
    transform: "scale(1)",
    opacity: 1
  },
  appearAnimate: true,
  speed: 500,
  useWrapper: true
};
var fadeInProps = {
  leaveStyle: {
    opacity: 0
  },
  enterStyle: {
    opacity: 1
  },
  appearAnimate: true,
  speed: 500,
  useWrapper: true
};

var props = {
  appearAnimate: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: "in-out",
    validator: function validator(value) {
      return ["in", "out", "in-out"].includes(value);
    }
  },
  leaveStyle: Object,
  enterStyle: Object,
  speed: {
    type: Number,
    default: 500
  },
  transitionTimingFunction: {
    type: String,
    default: ""
  },
  enterDelay: {
    type: Number,
    default: 0
  },
  leaveDelay: {
    type: Number,
    default: 0
  },
  component: {
    type: String,
    default: "span"
  },
  useWrapper: {
    type: Boolean,
    default: true
  },
  wrapperStyle: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};
/* harmony default export */ var CustomAnimate = ({
  name: "CustomAnimate",
  props: props,
  data: function data() {
    return {
      enterTimer: null,
      leaveTimer: null,
      displayStyleTimer: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    setBeforeEnterStyle: function setBeforeEnterStyle(el) {
      var speed = this.speed,
          enterStyle = this.enterStyle,
          leaveStyle = this.leaveStyle,
          transitionTimingFunction = this.transitionTimingFunction,
          appearAnimate = this.appearAnimate,
          style = this.$vnode.data.style,
          theme = this.context.theme;
      var currStyle = theme.prefixStyle(CustomAnimate_objectSpread({
        transition: "all ".concat(speed, "ms").concat(transitionTimingFunction ? " ".concat(transitionTimingFunction) : "")
      }, style, {}, appearAnimate ? leaveStyle : Object.assign({}, leaveStyle, enterStyle)));
      Object.assign(el.style, currStyle);
    },
    setEnterStyle: function setEnterStyle(el) {
      var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var speed = this.speed,
          enterDelay = this.enterDelay,
          enterStyle = this.enterStyle,
          theme = this.context.theme;
      Object.assign(el.style, theme.prefixStyle(enterStyle));
      this.enterTimer = setTimeout(done, speed + enterDelay);
    },
    setLeaveStyle: function setLeaveStyle(el) {
      var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var leaveStyle = this.leaveStyle,
          theme = this.context.theme;
      Object.assign(el.style, theme.prefixStyle(leaveStyle));
      done();
    },
    setBeforeAppearStyle: function setBeforeAppearStyle(el) {
      var mode = this.mode,
          appearAnimate = this.appearAnimate;

      if (appearAnimate) {
        this.setBeforeEnterStyle(el);

        if (mode !== "out") {
          this.setLeaveStyle(el);
        }
      }
    },
    setAppearStyle: function setAppearStyle(el, done) {
      var _this = this;

      var mode = this.mode,
          enterDelay = this.enterDelay,
          appearAnimate = this.appearAnimate;

      if (appearAnimate) {
        if (mode !== "out") {
          this.enterTimer = setTimeout(function () {
            _this.setEnterStyle(el, done);
          }, enterDelay);
        }
      }
    },
    enter: function enter(el, done) {
      var _this2 = this;

      var mode = this.mode,
          speed = this.speed,
          enterDelay = this.enterDelay;
      clearTimeout(this.leaveTimer);
      var style = el.style;
      var display = el.style.display;
      style.display = "none";
      this.displayStyleTimer = setTimeout(function () {
        style.display = display;
      }, (mode === "in" ? 0 : speed) + enterDelay);

      if (mode === "out") {
        this.enterTimer = setTimeout(function () {
          _this2.setEnterStyle(el);

          done();
        }, speed);
        return;
      }

      this.setLeaveStyle(el);
      this.enterTimer = setTimeout(function () {
        style.display = display;

        _this2.setEnterStyle(el);

        done();
      }, mode === "in" ? 40 + enterDelay : speed + 40 + enterDelay);
    },
    leave: function leave(el, done) {
      var mode = this.mode,
          speed = this.speed,
          leaveDelay = this.leaveDelay;

      if (mode !== "in") {
        this.setLeaveStyle(el);
        this.leaveTimer = setTimeout(function () {
          el.style.display = "none";
          done();
        }, speed + leaveDelay);
      } else {
        el.display = "none";
        done();
      }
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clearTimeout(this.displayStyleTimer);
  },
  render: function render(h) {
    var appearAnimate = this.appearAnimate,
        leaveStyle = this.leaveStyle,
        wrapperStyle = this.wrapperStyle,
        component = this.component,
        useWrapper = this.useWrapper;
    var event = {
      on: {
        enter: this.enter,
        leave: this.leave,
        beforeEnter: this.setBeforeEnterStyle,
        beforeAppear: this.setBeforeAppearStyle,
        appear: this.setAppearStyle
      }
    };
    var vNodes = this.$slots.default;
    var newVNodes = vNodes.map(function (n, index) {
      var _n$key = n.key,
          key = _n$key === void 0 ? ".$null/.".concat(index) : _n$key;
      var child = n;

      if (useWrapper && n.tag) {
        child = h("span", {
          key: key,
          style: CustomAnimate_objectSpread({}, CustomAnimate_baseStyle, {
            width: "100%"
          })
        }, [n]);
      }

      return child;
    });
    return h(useWrapper ? "transition-group" : "transition", CustomAnimate_objectSpread({
      style: CustomAnimate_objectSpread({}, CustomAnimate_baseStyle, {}, useWrapper ? wrapperStyle : leaveStyle),
      props: {
        tag: useWrapper ? component : null,
        css: false,
        appear: appearAnimate
      }
    }, event), newVNodes);
  }
});
// CONCATENATED MODULE: ./src/components/Animate/ScaleInOut.js







function ScaleInOut_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ScaleInOut_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ScaleInOut_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ScaleInOut_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var ScaleInOut = ({
  name: "ScaleInOut",
  components: {
    CustomAnimate: CustomAnimate
  },
  props: ScaleInOut_objectSpread({}, props, {
    leaveStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "scale(0)"
        };
      }
    },
    enterStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "scale(1)"
        };
      }
    },
    minScale: Number,
    maxScale: Number
  }),
  render: function render(h) {
    return h("CustomAnimate", {
      props: this.$props
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/Animate/SlideInOut.js








function SlideInOut_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SlideInOut_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SlideInOut_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SlideInOut_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var SlideInOut = ({
  name: "SlideInOut",
  components: {
    CustomAnimate: CustomAnimate
  },
  props: SlideInOut_objectSpread({}, props, {
    position: {
      type: String,
      default: "100%"
    },
    direction: {
      type: String,
      default: "bottom",
      validator: function validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      }
    }
  }),
  render: function render(h) {
    var position = this.position,
        wrapperStyle = this.wrapperStyle;
    return h("CustomAnimate", {
      props: SlideInOut_objectSpread({}, this.$props, {
        leaveStyle: {
          transform: "translate3d(0, ".concat(position, ", 0)"),
          opacity: 0
        },
        enterStyle: {
          transform: "translate3d(0, 0, 0)",
          opacity: 1
        },
        wrapperStyle: SlideInOut_objectSpread({
          overflow: "hidden"
        }, wrapperStyle)
      })
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/Animate/FadeInOut.js






function FadeInOut_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FadeInOut_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FadeInOut_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FadeInOut_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var FadeInOut = ({
  name: "FadeInOut",
  components: {
    CustomAnimate: CustomAnimate
  },
  props: FadeInOut_objectSpread({}, props, {
    leaveStyle: {
      type: Object,
      default: function _default() {
        return {
          opacity: 0
        };
      }
    },
    enterStyle: {
      type: Object,
      default: function _default() {
        return {
          opacity: 1
        };
      }
    }
  }),
  render: function render(h) {
    return h("CustomAnimate", {
      props: this.$props
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/Animate/index.js






/* harmony default export */ var Animate = ({
  install: function install(Vue) {
    Vue.component(CustomAnimate.name, CustomAnimate);
    Vue.component(ScaleInOut.name, ScaleInOut);
    Vue.component(SlideInOut.name, SlideInOut);
    Vue.component(FadeInOut.name, FadeInOut);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./src/components/Theme/getBaseCSSText.js


function getBaseCSS(theme) {
  var themeClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "uwp-base";
  var scrollBarStyleSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "*";
  return "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.".concat(themeClassName, " * {\n  font-family: ").concat(theme.fonts.sansSerifFonts.split(", ").map(function (font) {
    return "\"".concat(font, "\"");
  }).join(", "), ";\n}\n\nbody {\n  margin: 0;\n}\n\n").concat(scrollBarStyleSelector, "::-webkit-scrollbar-track {\n  background-color: ").concat(theme.chromeLow, ";\n}\n\n").concat(scrollBarStyleSelector, "::-webkit-scrollbar-thumb {\n  background-color: ").concat(theme.useFluentDesign ? theme.baseLow : theme.baseMediumLow, ";\n}\n\n").concat(scrollBarStyleSelector, "::-webkit-scrollbar:vertical {\n  width: 6px;\n}\n\n").concat(scrollBarStyleSelector, "::-webkit-scrollbar:horizontal {\n  height: 6px\n}\n\n").concat(scrollBarStyleSelector, "::-webkit-scrollbar {\n  -webkit-appearance: none\n}\n\n.").concat(themeClassName, " *:after, .").concat(themeClassName, " *:before {\n  box-sizing: border-box;\n}\n\n.").concat(themeClassName, " {\n  -webkit-text-size-adjust: none;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.").concat(themeClassName, " input, .").concat(themeClassName, " textarea {\n  box-shadow: none;\n  border-radius: none;\n}\n");
}

/* harmony default export */ var getBaseCSSText = (getBaseCSS);
// CONCATENATED MODULE: ./src/components/RenderToBody.js
/* harmony default export */ var RenderToBody = ({
  name: "RenderToBody",
  mounted: function mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild);
  },
  render: function render(h) {
    return h("div", this.$slots.default);
  },
  destroyed: function destroyed() {
    document.body.removeChild(this.$el);
  }
});
// CONCATENATED MODULE: ./src/components/Toast/ToastWrapper.js






function ToastWrapper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ToastWrapper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ToastWrapper_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ToastWrapper_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var ToastWrapper = ({
  name: "ToastWrapper",
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  props: {
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      toasts: {}
    };
  },
  methods: {
    addToast: function addToast(toastId, toast) {
      var theme = this.context.theme;
      toast.key = toastId;
      theme.toasts[toastId] = toast;
      this.toasts = theme.toasts;
      this.$forceUpdate();
    },
    updateToast: function updateToast(toastId, toast) {
      var theme = this.context.theme;
      toast.key = toastId;
      theme.toasts[toastId] = toast;
      this.toasts = theme.toasts;
      this.$forceUpdate();
    },
    deleteToast: function deleteToast(toastId) {
      var theme = this.context.theme;
      delete theme.toasts[toastId];
      this.toasts = theme.toasts;
      this.$forceUpdate();
    }
  },
  render: function render(h) {
    var theme = this.context.theme,
        toasts = this.toasts,
        className = this.className,
        styles = this.styles;
    var rootStyleClasses = theme.prepareStyle({
      className: "toast-wrapper",
      style: theme.prefixStyle(ToastWrapper_objectSpread({
        top: 0,
        right: 0,
        height: "100%",
        width: 360,
        padding: "10px 4px",
        position: "fixed",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        pointerEvents: "none",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: theme.zIndex.toast
      }, styles)),
      extendsClassName: className
    });
    var params = {
      style: rootStyleClasses.style,
      class: rootStyleClasses.className
    };
    var keys = Object.keys(toasts);

    if (keys.length > 0) {
      return keys.map(function (key) {
        return h("div", ToastWrapper_objectSpread({}, params), [toasts[key]]);
      });
    }

    return null;
  }
});
// CONCATENATED MODULE: ./src/components/Theme/Theme.js









function Theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Theme_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Theme_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var baseClassName = "vue-uwp-theme";
var customLocalStorageName = "__VUE_UWP__";
/* harmony default export */ var Theme = ({
  name: "Theme",
  props: {
    theme: {
      type: Object,
      require: false,
      default: function _default() {
        return styles_darkTheme;
      }
    },
    onGeneratedAcrylic: {
      type: Function,
      require: false,
      default: function _default() {
        return function () {};
      }
    },
    needGenerateAcrylic: {
      type: Boolean,
      require: false,
      default: true
    },
    scrollBarStyleSelector: {
      type: String,
      require: false,
      default: "*"
    },
    themeWillUpdate: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    autoSaveTheme: Boolean,
    styles: Object
  },
  provide: function provide() {
    var _this = this;

    var context = {};
    Object.defineProperty(context, "theme", {
      enumerable: true,
      get: function get() {
        return _this.currTheme;
      }
    });
    return {
      context: context
    };
  },
  computed: {
    themeClassName: function themeClassName() {
      return "".concat(baseClassName, "-").concat(this.currTheme.themeName);
    }
  },
  data: function data() {
    return {
      currTheme: this.getDefaultTheme(),
      acrylicTextureCount: 0,
      toastId: -1,
      findToastNodeTimers: [],
      cacheDarkAcrylicTextures: {},
      cacheLightAcrylicTextures: {},
      toastWrapper: null,
      prevStyleManager: null
    };
  },
  watch: {
    theme: function theme(_theme) {
      this.updateTheme(_theme);
    },
    currTheme: {
      immediate: true,
      handler: function handler() {
        if (this.prevStyleManager) {
          this.prevStyleManager.cleanStyleSheet();
          this.prevStyleManager = null;
        }

        this.bindNewThemeMethods();
        this.handleNewTheme();
      }
    }
  },
  methods: {
    getDefaultTheme: function getDefaultTheme() {
      var theme = this.theme,
          autoSaveTheme = this.autoSaveTheme;

      if (autoSaveTheme) {
        return this.getLocalStorageTheme();
      } else {
        theme = theme || styles_darkTheme;
      }

      return theme;
    },
    getLocalStorageTheme: function getLocalStorageTheme() {
      var themeConfig = {};
      var theme = this.theme;

      if (theme) {
        Object.assign(themeConfig, {
          themeName: theme.themeName,
          accent: theme.accent,
          useFluentDesign: theme.useFluentDesign,
          desktopBackgroundImage: theme.desktopBackgroundImage
        });
      }

      var result;
      var storageString = localStorage.getItem(customLocalStorageName);

      if (storageString) {
        var data = {};

        try {
          data = JSON.parse(storageString);
          var _data = data,
              themeName = _data.themeName,
              accent = _data.accent,
              useFluentDesign = _data.useFluentDesign,
              desktopBackgroundImage = _data.desktopBackgroundImage;
          result = getTheme({
            themeName: themeName === void 0 ? themeConfig.themeName : themeName,
            accent: accent === void 0 ? themeConfig.accent : accent,
            useFluentDesign: useFluentDesign === void 0 ? themeConfig.useFluentDesign : useFluentDesign,
            desktopBackgroundImage: desktopBackgroundImage === void 0 ? themeConfig.desktopBackgroundImage : desktopBackgroundImage
          });
        } catch (error) {
          result = this.theme || styles_darkTheme;
        }
      } else {
        result = this.theme || styles_darkTheme;
      }

      return result;
    },
    bindNewThemeMethods: function bindNewThemeMethods() {
      var theme = this.currTheme;
      var scrollBarStyleSelector = this.scrollBarStyleSelector;
      var styleManager = new StyleManager_StyleManager({
        theme: theme
      });
      styleManager.addCSSTextWithUpdate(getBaseCSSText(theme, "uwp-base", scrollBarStyleSelector));
      Object.assign(theme, {
        desktopBackground: "url(".concat(theme.desktopBackgroundImage, ") no-repeat fixed top left / cover"),
        updateTheme: this.updateTheme,
        addToast: this.addToast,
        updateToast: this.updateToast,
        deleteToast: this.deleteToast,
        scrollRevealListener: this.handleScrollReveal,
        forceUpdateTheme: this.forceUpdateTheme,
        styleManager: styleManager
      });
    },
    handleNewTheme: function handleNewTheme() {
      var currTheme = this.currTheme;
      this.themeWillUpdate(currTheme);
      this.prevStyleManager = currTheme.styleManager;
    },
    addToast: function addToast(toast, callback) {
      var _this2 = this;

      var increaseId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var currToastId = arguments.length > 3 ? arguments[3] : undefined;
      var toastId = currToastId !== void 0 ? currToastId : this.toastId;

      if (increaseId) {
        toastId += 1;
        this.toastId = toastId;
      }

      if (this.toastWrapper) {
        clearTimeout(this.findToastNodeTimers[toastId]);
        this.toastWrapper.addToast(toastId, toast);
        if (callback) callback(toastId);
      } else {
        this.findToastNodeTimers[toastId] = setTimeout(function () {
          _this2.addToast(toast, callback, false, toastId);
        }, 100);
      }
    },
    updateToast: function updateToast(toastId, toast) {
      if (this.toastWrapper) {
        this.toastWrapper.updateToast(toastId, toast);
      }
    },
    deleteToast: function deleteToast(toastId) {
      if (this.toastWrapper) {
        this.toastWrapper.deleteToast(toastId);
      }
    },
    handleScrollReveal: function handleScrollReveal() {
      var currTheme = this.currTheme;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = currTheme.scrollReveals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var scrollReveal = _step.value;
          var rootElm = scrollReveal.$el,
              animated = scrollReveal.animated,
              setEnterStyle = scrollReveal.setEnterStyle,
              setLeaveStyle = scrollReveal.setLeaveStyle,
              topOffset = scrollReveal.topOffset,
              bottomOffset = scrollReveal.bottomOffset;
          if (!rootElm) return;

          var _rootElm$getBoundingC = rootElm.getBoundingClientRect(),
              top = _rootElm$getBoundingC.top,
              height = _rootElm$getBoundingC.height;

          var _window = window,
              innerHeight = _window.innerHeight;
          var isIn = false;

          if (height > innerHeight) {
            isIn = top < innerHeight - height * height && top > -height * 0.5;
          } else {
            isIn = top > 0 + topOffset && top + height + bottomOffset < innerHeight;
          }

          if (isIn) {
            if (!animated) {
              setEnterStyle();
              scrollReveal.animated = true;
            }
          } else {
            if (animated) {
              setLeaveStyle();
              scrollReveal.animated = false;
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    updateTheme: function updateTheme(newTheme) {
      var _this3 = this;

      if (this.autoSaveTheme) {
        localStorage.setItem(customLocalStorageName, JSON.stringify({
          themeName: newTheme.themeName,
          accent: newTheme.accent,
          useFluentDesign: newTheme.useFluentDesign,
          desktopBackgroundImage: newTheme.desktopBackgroundImage
        }));
      }

      var needGenerateAcrylic = this.sureNeedGenerateAcrylic(newTheme);
      this.currTheme = newTheme;
      this.$nextTick(function () {
        if (needGenerateAcrylic) {
          newTheme.generateAcrylicTextures(newTheme, function (currTheme) {
            return _this3.currTheme = Theme_objectSpread({}, _this3.currTheme, {}, currTheme);
          });
        }
      });
    },
    forceUpdateTheme: function forceUpdateTheme(currTheme) {
      this.currTheme = currTheme;
    },
    sureNeedGenerateAcrylic: function sureNeedGenerateAcrylic(newTheme) {
      var currTheme = this.currTheme;
      var needGenerateAcrylic = newTheme.desktopBackgroundImage && this.needGenerateAcrylic;

      if (needGenerateAcrylic && newTheme.desktopBackgroundImage === currTheme.desktopBackgroundImage) {
        if (currTheme.useFluentDesign) {
          Object.assign(currTheme.isDarkTheme ? this.cacheDarkAcrylicTextures : this.cacheLightAcrylicTextures, {
            acrylicTexture40: currTheme.acrylicTexture40,
            acrylicTexture60: currTheme.acrylicTexture60,
            acrylicTexture80: currTheme.acrylicTexture80
          });
          needGenerateAcrylic = false;
        }

        if (newTheme.useFluentDesign) {
          if (newTheme.isDarkTheme && this.cacheDarkAcrylicTextures.acrylicTexture40 || !newTheme.isDarkTheme && this.cacheLightAcrylicTextures.acrylicTexture40) {
            Object.assign(newTheme, newTheme.isDarkTheme ? this.cacheDarkAcrylicTextures : this.cacheLightAcrylicTextures);
            needGenerateAcrylic = false;
          } else {
            needGenerateAcrylic = true;
          }
        } else {
          needGenerateAcrylic = false;
          Object.assign(newTheme, {
            acrylicTexture40: currTheme.acrylicTexture40,
            acrylicTexture60: currTheme.acrylicTexture60,
            acrylicTexture80: currTheme.acrylicTexture80
          });
        }
      }

      needGenerateAcrylic = needGenerateAcrylic && newTheme.useFluentDesign && this.needGenerateAcrylic;
      return needGenerateAcrylic;
    },
    cleanLocalStorage: function cleanLocalStorage() {
      localStorage.setItem(customLocalStorageName, "");
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.toastWrapper = this.$refs.toastWrapper;
    var currTheme = this.currTheme;

    if (IS_NODE_ENV["a" /* default */] && this.autoSaveTheme) {
      var _currTheme = this.getLocalStorageTheme();

      this.themeWillUpdate(_currTheme);
      this.currTheme = _currTheme;
    }

    if (IS_NODE_ENV["a" /* default */]) {
      setSegoeMDL2AssetsFonts();
    }

    if (currTheme.useFluentDesign && currTheme.desktopBackgroundImage && this.needGenerateAcrylic) {
      currTheme.generateAcrylicTextures(currTheme, function (currTheme) {
        return _this4.currTheme = currTheme;
      });
    }

    window.addEventListener("scroll", this.handleScrollReveal);
  },
  destroyed: function destroyed() {
    var currTheme = this.currTheme;
    var acrylicTexture40 = currTheme.acrylicTexture40,
        acrylicTexture60 = currTheme.acrylicTexture60,
        acrylicTexture80 = currTheme.acrylicTexture80;
    URL.revokeObjectURL(acrylicTexture40.background);
    URL.revokeObjectURL(acrylicTexture60.background);
    URL.revokeObjectURL(acrylicTexture80.background);
    currTheme.styleManager.cleanStyleSheet();
    window.removeEventListener("scroll", this.handleScrollReveal);
  },
  render: function render(h) {
    var onGeneratedAcrylic = this.onGeneratedAcrylic,
        className = this.className,
        needGenerateAcrylic = this.needGenerateAcrylic,
        currTheme = this.currTheme,
        themeClassName = this.themeClassName,
        styles = this.styles;
    var vm = this;
    var rootStyle = styles_darkTheme.prefixStyle(Theme_objectSpread({
      fontSize: 14,
      fontFamily: currTheme.fonts.sansSerifFonts,
      color: currTheme.baseHigh,
      display: "inline-block",
      verticalAlign: "middle",
      background: currTheme.useFluentDesign ? this.acrylicTextureCount === 3 ? "none" : needGenerateAcrylic ? currTheme.altMediumHigh : "none" : currTheme.altHigh,
      width: "100%",
      height: "100%"
    }, styles));
    var backgroundStyle = {
      position: "fixed",
      zIndex: -1,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: currTheme.useFluentDesign && currTheme.desktopBackgroundImage ? currTheme.desktopBackground : currTheme.altHigh,
      pointerEvents: "none"
    };

    currTheme.generateAcrylicTextures.callback = function (theme) {
      var backgroundEl = vm.$refs.backgroundEl;

      if (backgroundEl) {
        Object.assign(backgroundEl.$el.style, backgroundStyle, {
          background: theme.desktopBackground
        });
      }

      if (onGeneratedAcrylic) onGeneratedAcrylic();
    };

    var prepareStyle = currTheme.prepareStyle({
      style: rootStyle,
      className: "currTheme-root",
      extendsClassName: className ? "".concat(themeClassName, " ").concat(className) : themeClassName
    });
    var backgroundPrepareStyle = currTheme.prepareStyle({
      style: backgroundStyle,
      className: "fluent-background"
    });
    var backgroundParams = {
      class: backgroundPrepareStyle.className,
      style: backgroundPrepareStyle.style,
      ref: "backgroundEl"
    };
    var themeParams = {
      class: prepareStyle.className,
      style: prepareStyle.style
    };
    return h("div", themeParams, [h(RenderToBody, backgroundParams), h(RenderToBody, {}, [h(ToastWrapper, {
      ref: "toastWrapper"
    })]), this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/Theme/index.js



Theme.install = function (Vue) {
  Vue.component(Theme.name, Theme);
};

/* harmony default export */ var components_Theme = (Theme);
// CONCATENATED MODULE: ./src/common/spreadObject.js
function spreadObject(obj, keys) {
  var primaryObject = {};
  var secondaryObject = {};
  var canCheckObjectSymbol = obj !== null && typeof Object.getOwnPropertySymbols === "function";
  var symbols = canCheckObjectSymbol ? Object.getOwnPropertySymbols(obj) : null;
  var symbolsSize = canCheckObjectSymbol ? symbols.length : 0;

  for (var property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property) && keys.indexOf(property) < 0) {
      primaryObject[property] = obj[property];
    } else {
      secondaryObject[property] = obj[property];
    }

    if (canCheckObjectSymbol) {
      for (var i = 0; i < symbolsSize; i++) {
        if (keys.indexOf(symbols[i]) < 0) {
          primaryObject[property[i]] = obj[property[i]];
        } else {
          secondaryObject[property[i]] = obj[property[i]];
        }
      }
    }
  }

  return {
    primaryObject: primaryObject,
    secondaryObject: secondaryObject
  };
}
/* harmony default export */ var common_spreadObject = (spreadObject);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./src/common/setStyleToElement.js



var setStyleToElement_isUnitlessNumber = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridRow", "gridColumn", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", // SVG-related properties
"fillOpacity", "floodOpacity", "stopOpacity", "strokeDasharray", "strokeDashoffset", "strokeMiterlimit", "strokeOpacity", "strokeWidth"];
function setStyleToElement(elm, style) {
  var setToCSSText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cssText = "";

  if (setToCSSText) {
    for (var property in style) {
      var propertyNow = [].map.call(property, function (str) {
        return str === str.toUpperCase() ? "-".concat(str.toLowerCase()) : str;
      }).join("");
      var value = style[property];
      if (typeof value === "number" && !setStyleToElement_isUnitlessNumber.includes(property)) value = "".concat(value, "px");

      if (typeof_typeof(value) === "object") {
        if (Array.isArray(value)) {
          value = value[value.length - 1];
        } else {
          throw Error("".concat(propertyNow, ": ").concat(value, " is Wrong!"));
        }
      }

      cssText += "".concat(propertyNow, ": ").concat(value, ";");
    }

    elm.style.cssText = cssText;
  } else {
    for (var _property in style) {
      var _value = style[_property];

      if (typeof _value === "number" && !setStyleToElement_isUnitlessNumber.includes(_property)) {
        style[_property] = "".concat(_value, "px");
      }
    }

    Object.assign(elm.style, style);
  }
}
// CONCATENATED MODULE: ./src/components/ElementState.js






function ElementState_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ElementState_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ElementState_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ElementState_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var emptyFunc = function emptyFunc() {};

/* harmony default export */ var ElementState = ({
  name: "ElementState",
  props: {
    hoverStyle: Object,
    activeStyle: Object,
    visitedStyle: Object,
    focusStyle: Object,
    disabledStyle: Object,
    disabled: Boolean,
    rootElm: HTMLElement,
    styles: Object,
    event: {
      type: Object,
      default: function _default() {
        return {
          onHover: emptyFunc,
          onFocus: emptyFunc,
          onActive: emptyFunc,
          onVisited: emptyFunc,
          unHover: emptyFunc,
          unFocus: emptyFunc,
          unActive: emptyFunc,
          unVisited: emptyFunc,
          onMouseEnter: emptyFunc,
          onMouseLeave: emptyFunc,
          onMouseDown: emptyFunc,
          onMouseUp: emptyFunc,
          onClick: emptyFunc
        };
      }
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  data: function data() {
    return {
      originStyle: {},
      currVisitedStyle: {}
    };
  },
  mounted: function mounted() {
    if (this.rootElm) {
      this.originStyle = ElementState_objectSpread({}, this.rootElm.style);
    }
  },
  updated: function updated() {
    if (this.rootElm) {
      this.originStyle = ElementState_objectSpread({}, this.rootElm.style);
    }
  },
  methods: {
    setStyle: function setStyle(style) {
      setStyleToElement(this.rootElm, this.context.theme.prefixStyle(ElementState_objectSpread({}, this.styles, {}, style)));
    },
    hover: function hover() {
      this.setStyle(this.hoverStyle);
      this.event.onMouseEnter();
      this.event.onHover();
    },
    unHover: function unHover() {
      this.resetStyle();
      this.event.onMouseLeave();
      this.event.unHover();
    },
    active: function active() {
      this.setStyle(this.activeStyle);
      this.event.onMouseDown();
      this.event.onActive();
    },
    unActive: function unActive() {
      this.setStyle(this.hoverStyle);
      this.event.onMouseUp();
      this.event.unActive();
    },
    focus: function focus() {
      this.setStyle(this.focusStyle);
      this.event.onFocus();
    },
    unFocus: function unFocus() {
      this.resetStyle();
      this.event.unFocus();
    },
    visited: function visited() {
      this.setStyle(this.visitedStyle);
      this.event.onClick();
      this.event.onVisited();
      this.currVisitedStyle = this.visitedStyle;
    },
    unVisited: function unVisited() {
      this.resetStyle(true);
      this.event.onClick();
      this.event.unVisited();
    },
    resetStyle: function resetStyle() {
      var resetVisited = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (resetVisited) {
        this.visitedStyle = void 0;
      }

      setStyleToElement(this.rootElm, ElementState_objectSpread({}, this.styles, {}, this.currVisitedStyle), true);
    }
  },
  render: function render() {
    var theme = this.context.theme,
        disabled = this.disabled,
        styles = this.styles,
        hoverStyle = this.hoverStyle,
        focusStyle = this.focusStyle,
        activeStyle = this.activeStyle,
        visitedStyle = this.visitedStyle,
        disabledStyle = this.disabledStyle;
    var vNodes = this.$slots.default;

    if (vNodes.length === 1) {
      var vNode = vNodes[0];
      vNode.data.style = theme.prefixStyle(ElementState_objectSpread({
        transition: "all .25s"
      }, styles, {}, disabled ? disabledStyle : void 0));

      var _ref = vNode.data.on === void 0 ? {} : vNode.data.on,
          _ref$mouseenter = _ref.mouseenter,
          mouseenter = _ref$mouseenter === void 0 ? emptyFunc : _ref$mouseenter,
          _ref$mouseleave = _ref.mouseleave,
          mouseleave = _ref$mouseleave === void 0 ? emptyFunc : _ref$mouseleave,
          _ref$mousedown = _ref.mousedown,
          mousedown = _ref$mousedown === void 0 ? emptyFunc : _ref$mousedown,
          _ref$mouseup = _ref.mouseup,
          mouseup = _ref$mouseup === void 0 ? emptyFunc : _ref$mouseup,
          _ref$click = _ref.click,
          click = _ref$click === void 0 ? emptyFunc : _ref$click,
          _ref$focus = _ref.focus,
          focus = _ref$focus === void 0 ? emptyFunc : _ref$focus;

      vNode.data.on = ElementState_objectSpread({}, vNode.data.on, {
        mouseenter: hoverStyle && !disabled ? this.hover : mouseenter,
        mouseleave: hoverStyle && !disabled ? this.unHover : mouseleave,
        mousedown: activeStyle && !disabled ? this.active : mousedown,
        mouseup: activeStyle && !disabled ? this.unActive : mouseup,
        click: visitedStyle && !disabled ? this.visited : click,
        focus: focusStyle && !disabled ? this.focus : focus
      });
      return vNode;
    }

    return vNodes;
  }
});
// CONCATENATED MODULE: ./src/common/eventUtil.js
var eventUtil_emptyFunc = function emptyFunc() {};

function bindEvent(vm) {
  return {
    click: function click() {
      vm.$emit("click");
    },
    focus: function focus() {
      vm.$emit("focus");
    },
    mouseenter: function mouseenter() {
      vm.$emit("mouseenter");
    },
    mouseleave: function mouseleave() {
      vm.$emit("mouseleave");
    },
    mousedown: function mousedown() {
      vm.$emit("mousedown");
    },
    mouseup: function mouseup() {
      vm.$emit("mouseup");
    }
  };
}
function renameEvent(event) {
  if (event === void 0) {
    return {
      onHover: eventUtil_emptyFunc,
      onFocus: eventUtil_emptyFunc,
      onActive: eventUtil_emptyFunc,
      onVisited: eventUtil_emptyFunc,
      unHover: eventUtil_emptyFunc,
      unFocus: eventUtil_emptyFunc,
      unActive: eventUtil_emptyFunc,
      unVisited: eventUtil_emptyFunc,
      onMouseEnter: eventUtil_emptyFunc,
      onMouseLeave: eventUtil_emptyFunc,
      onMouseDown: eventUtil_emptyFunc,
      onMouseUp: eventUtil_emptyFunc,
      onClick: eventUtil_emptyFunc
    };
  } else {
    var _event$mouseenter = event.mouseenter,
        mouseenter = _event$mouseenter === void 0 ? eventUtil_emptyFunc : _event$mouseenter,
        _event$mouseleave = event.mouseleave,
        mouseleave = _event$mouseleave === void 0 ? eventUtil_emptyFunc : _event$mouseleave,
        _event$mousedown = event.mousedown,
        mousedown = _event$mousedown === void 0 ? eventUtil_emptyFunc : _event$mousedown,
        _event$mouseup = event.mouseup,
        mouseup = _event$mouseup === void 0 ? eventUtil_emptyFunc : _event$mouseup,
        _event$click = event.click,
        click = _event$click === void 0 ? eventUtil_emptyFunc : _event$click,
        _event$focus = event.focus,
        focus = _event$focus === void 0 ? eventUtil_emptyFunc : _event$focus,
        _event$onHover = event.onHover,
        onHover = _event$onHover === void 0 ? eventUtil_emptyFunc : _event$onHover,
        _event$onActive = event.onActive,
        onActive = _event$onActive === void 0 ? eventUtil_emptyFunc : _event$onActive,
        _event$onVisited = event.onVisited,
        onVisited = _event$onVisited === void 0 ? eventUtil_emptyFunc : _event$onVisited,
        _event$unHover = event.unHover,
        unHover = _event$unHover === void 0 ? eventUtil_emptyFunc : _event$unHover,
        _event$unFocus = event.unFocus,
        unFocus = _event$unFocus === void 0 ? eventUtil_emptyFunc : _event$unFocus,
        _event$unActive = event.unActive,
        unActive = _event$unActive === void 0 ? eventUtil_emptyFunc : _event$unActive,
        _event$unVisited = event.unVisited,
        unVisited = _event$unVisited === void 0 ? eventUtil_emptyFunc : _event$unVisited;
    return {
      onHover: onHover,
      onFocus: focus,
      onActive: onActive,
      onVisited: onVisited,
      unHover: unHover,
      unFocus: unFocus,
      unActive: unActive,
      unVisited: unVisited,
      onMouseEnter: mouseenter,
      onMouseLeave: mouseleave,
      onMouseDown: mousedown,
      onMouseUp: mouseup,
      onClick: click
    };
  }
}
// CONCATENATED MODULE: ./src/components/PseudoClasses.js




var pseudoClassesNames = ["&:hover", "&:active", "&:visited", "&:focus", "&:disabled"];
/* harmony default export */ var PseudoClasses = ({
  name: "PseudoClasses",
  props: {
    props: {
      type: Object,
      require: false
    }
  },
  data: function data() {
    return {
      rootElm: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  mounted: function mounted() {
    if (this.$refs.ElementState) {
      this.rootElm = this.$refs.ElementState.$el;
    }
  },
  render: function render(h) {
    var theme = this.context.theme,
        _this$props = this.props,
        style = _this$props.style,
        _this$props$disabled = _this$props.disabled,
        disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
        on = _this$props.on,
        rootElm = this.rootElm;

    if (theme.useInlineStyle && style) {
      var _spreadObject = spreadObject(style, pseudoClassesNames),
          primaryObject = _spreadObject.primaryObject,
          secondaryObject = _spreadObject.secondaryObject;

      return h(ElementState, {
        props: {
          hoverStyle: secondaryObject["&:hover"],
          activeStyle: secondaryObject["&:active"],
          visitedStyle: secondaryObject["&:visited"],
          focusStyle: secondaryObject["&:focus"],
          disabledStyle: secondaryObject["&:disabled"],
          styles: primaryObject,
          event: renameEvent(on),
          rootElm: rootElm,
          disabled: disabled
        },
        ref: "ElementState"
      }, this.$slots.default);
    } else {
      return this.$slots.default;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tooltip/Tooltip.js









function Tooltip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tooltip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tooltip_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tooltip_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Tooltip = ({
  name: "Tooltip",
  props: {
    verticalPosition: {
      type: String,
      require: false,
      validator: function validator(value) {
        return ["top", "bottom", "center"].includes(value);
      },
      default: "top"
    },
    horizontalPosition: {
      type: String,
      validator: function validator(value) {
        return ["left", "right", "center"].includes(value);
      },
      default: "center"
    },
    margin: {
      type: Number,
      default: 4
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseTimeout: {
      type: Number,
      default: 750
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    background: String,
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      rootElm: null,
      tooltipElm: null,
      show: false,
      unShowTimer: null,
      timer: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  computed: {
    tooltipStyle: function tooltipStyle() {
      return this.getTooltipStyle();
    }
  },
  methods: {
    showTooltip: function showTooltip() {
      var _this = this;

      clearTimeout(this.unShowTimer);
      this.show = true;

      if (this.autoClose) {
        this.show = true;
        this.timer = setTimeout(function () {
          _this.show = false;
        }, this.autoCloseTimeout);
      } else {
        this.show = true;
      }
    },
    unShowTooltip: function unShowTooltip() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        _this2.show = false;
      }, this.closeDelay);
    },
    getStyle: function getStyle() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var positionStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var theme = this.context.theme,
          background = this.background,
          styles = this.styles;
      return theme.prefixStyle(Tooltip_objectSpread({
        height: 28,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        padding: "4px 8px",
        transition: "all .25s 0s ease-in-out",
        border: "1px solid ".concat(theme.useFluentDesign ? theme.listLow : theme.baseLow),
        color: theme.baseMediumHigh,
        background: background || theme.chromeMedium,
        opacity: show ? 1 : 0,
        transform: "translateY(".concat(show ? "0px" : "10px", ")"),
        position: "absolute",
        fontSize: 14,
        pointerEvents: show ? "all" : "none",
        zIndex: theme.zIndex.tooltip
      }, styles, {}, positionStyle));
    },
    getTooltipStyle: function getTooltipStyle() {
      var rootElm = this.rootElm,
          tooltipElm = this.tooltipElm;
      if (!(rootElm && tooltipElm)) return this.getStyle();
      var verticalPosition = this.verticalPosition,
          horizontalPosition = this.horizontalPosition,
          margin = this.margin;

      var _rootElm$getBoundingC = rootElm.getBoundingClientRect(),
          width = _rootElm$getBoundingC.width,
          height = _rootElm$getBoundingC.height;

      var containerWidth = tooltipElm.getBoundingClientRect().width;
      var containerHeight = tooltipElm.getBoundingClientRect().height;
      var show = this.show;
      var positionStyle = {};
      var isVerticalCenter = verticalPosition === "center";

      if (width !== void 0 && height !== void 0) {
        switch (horizontalPosition) {
          case "left":
            {
              positionStyle.right = isVerticalCenter ? width + margin : 0;
              break;
            }

          case "center":
            {
              positionStyle.left = (width - containerWidth) / 2;
              break;
            }

          case "right":
            {
              positionStyle.left = isVerticalCenter ? -width - margin : 0;
              break;
            }

          default:
            {
              break;
            }
        }

        switch (verticalPosition) {
          case "top":
            {
              positionStyle.top = -containerHeight - margin;
              break;
            }

          case "center":
            {
              positionStyle.top = (height - containerHeight) / 2;
              break;
            }

          case "bottom":
            {
              positionStyle.top = height + margin;
              break;
            }

          default:
            {
              break;
            }
        }
      }

      return this.getStyle(show, positionStyle);
    }
  },
  mounted: function mounted() {
    this.rootElm = this.$el;
    this.tooltipElm = this.$refs.tooltipElm;
  },
  render: function render(h) {
    var className = this.className,
        tooltipStyle = this.tooltipStyle,
        showTooltip = this.showTooltip,
        unShowTooltip = this.unShowTooltip;
    var theme = this.context.theme;
    var events = bindEvent(this);
    var event = {
      on: Tooltip_objectSpread({}, events, {
        mouseenter: function mouseenter() {
          events.mouseenter();
          showTooltip();
        },
        click: function click() {
          events.click();
          showTooltip();
        },
        mouseleave: function mouseleave() {
          events.mouseleave();
          unShowTooltip();
        }
      })
    };
    var prepareStyle = theme.prepareStyle({
      className: "tooltip",
      style: tooltipStyle,
      extendsClassName: className
    });
    var params = {
      class: prepareStyle.className,
      style: prepareStyle.style
    };
    return h("div", Tooltip_objectSpread({
      style: {
        position: "relative",
        display: "inline-block"
      }
    }, event), [h("span", Tooltip_objectSpread({}, params, {
      ref: "tooltipElm"
    }), this.$slots.content), this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/Tooltip/index.js



Tooltip.install = function (Vue) {
  Vue.component(Tooltip.name, Tooltip);
};

/* harmony default export */ var components_Tooltip = (Tooltip);
// CONCATENATED MODULE: ./src/components/Icon/icons.js
/* harmony default export */ var icons = ({
  CheckMarkLegacy: "\uE001",
  CheckboxFillLegacy: "\uE002",
  CheckboxLegacy: "\uE003",
  CheckboxIndeterminateLegacy: "\uE004",
  CheckboxCompositeReversedLegacy: "\uE005",
  HeartLegacy: "\uE006",
  HeartBrokenLegacy: "\uE007",
  CheckMarkZeroWidthLegacy: "\uE008",
  CheckboxFillZeroWidthLegacy: "\uE009",
  RatingStarFillZeroWidthLegacy: "\uE00A",
  HeartFillZeroWidthLegacy: "\uE00B",
  HeartBrokenZeroWidthLegacy: "\uE00C",
  ScrollChevronLeftLegacy: "\uE00E",
  ScrollChevronRightLegacy: "\uE00F",
  ScrollChevronUpLegacy: "\uE010",
  ScrollChevronDownLegacy: "\uE011",
  ChevronLeft3Legacy: "\uE012",
  ChevronRight3Legacy: "\uE013",
  ChevronUp3Legacy: "\uE014",
  ChevronDown3Legacy: "\uE015",
  ScrollChevronLeftBoldLegacy: "\uE016",
  ScrollChevronRightBoldLegacy: "\uE017",
  ScrollChevronUpBoldLegacy: "\uE018",
  ScrollChevronDownBoldLegacy: "\uE019",
  RevealPasswordLegacy: "\uE052",
  EaseOfAccessLegacy: "\uE07F",
  CheckmarkListviewLegacy: "\uE081",
  RatingStarFillReducedPaddingHTMLLegacy: "\uE082",
  KeyboardStandardLegacy: "\uE087",
  KeyboardSplitLegacy: "\uE08F",
  SearchboxLegacy: "\uE094",
  ChevronLeft1Legacy: "\uE096",
  ChevronRight1Legacy: "\uE097",
  ChevronUp1Legacy: "\uE098",
  ChevronDown1Legacy: "\uE099",
  ChevronLeft2Legacy: "\uE09A",
  ChevronRight2Legacy: "\uE09B",
  ChevronUp2Legacy: "\uE09C",
  ChevronDown2Legacy: "\uE09D",
  ChevronLeft4Legacy: "\uE09E",
  ChevronRight4Legacy: "\uE09F",
  ChevronUp4Legacy: "\uE0A0",
  ChevronDown4Legacy: "\uE0A1",
  CheckboxCompositeLegacy: "\uE0A2",
  HeartFillLegacy: "\uE0A5",
  BackBttnArrow42Legacy: "\uE0A6",
  BackBttnMirroredArrow42Legacy: "\uE0AB",
  BackBttnMirroredArrow20Legacy: "\uE0AD",
  ArrowHTMLLegacyMirrored: "\uE0AE",
  RatingStarFillLegacy: "\uE0B4",
  RatingStarFillSmallLegacy: "\uE0B5",
  SemanticZoomLegacy: "\uE0B8",
  BackBttnArrow20Legacy: "\uE0C4",
  ArrowHTMLLegacy: "\uE0D5",
  ChevronFlipLeftLegacy: "\uE0E2",
  ChevronFlipRightLegacy: "\uE0E3",
  ChevronFlipUpLegacy: "\uE0E4",
  ChevronFlipDownLegacy: "\uE0E5",
  CheckmarkMenuLegacy: "\uE0E7",
  PreviousLegacy: "\uE100",
  NextLegacy: "\uE101",
  PlayLegacy: "\uE102",
  PauseLegacy: "\uE103",
  EditLegacy: "\uE104",
  SaveLegacy: "\uE105",
  ClearLegacy: "\uE106",
  DeleteLegacy: "\uE107",
  RemoveLegacy: "\uE108",
  AddLegacy: "\uE109",
  CancelLegacy: "\uE10A",
  AcceptLegacy: "\uE10B",
  MoreLegacy: "\uE10C",
  RedoLegacy: "\uE10D",
  UndoLegacy: "\uE10E",
  HomeLegacy: "\uE10F",
  UpLegacy: "\uE110",
  ForwardLegacy: "\uE111",
  BackLegacy: "\uE112",
  FavoriteLegacy: "\uE113",
  CameraLegacy: "\uE114",
  SettingsLegacy: "\uE115",
  VideoLegacy: "\uE116",
  SyncLegacy: "\uE117",
  DownloadLegacy: "\uE118",
  MailLegacy: "\uE119",
  FindLegacy: "\uE11A",
  HelpLegacy: "\uE11B",
  UploadLegacy: "\uE11C",
  EmojiLegacy: "\uE11D",
  TwoPageLegacy: "\uE11E",
  LeaveChatLegacy: "\uE11F",
  MailForwardLegacy: "\uE120",
  ClockLegacy: "\uE121",
  SendLegacy: "\uE122",
  CropLegacy: "\uE123",
  RotateCameraLegacy: "\uE124",
  PeopleLegacy: "\uE125",
  ClosePaneLegacy: "\uE126",
  OpenPaneLegacy: "\uE127",
  WorldLegacy: "\uE128",
  FlagLegacy: "\uE129",
  PreviewLinkLegacy: "\uE12A",
  GlobeLegacy: "\uE12B",
  TrimLegacy: "\uE12C",
  AttachCameraLegacy: "\uE12D",
  ZoomInLegacy: "\uE12E",
  BookmarksLegacy: "\uE12F",
  DocumentLegacy: "\uE130",
  ProtectedDocumentLegacy: "\uE131",
  PageFillLegacy: "\uE132",
  MultiSelectLegacy: "\uE133",
  CommentLegacy: "\uE134",
  MailFillLegacy: "\uE135",
  ContactInfoLegacy: "\uE136",
  HangUpLegacy: "\uE137",
  ViewAllLegacy: "\uE138",
  MapPinLegacy: "\uE139",
  PhoneLegacy: "\uE13A",
  VideoChatLegacy: "\uE13B",
  SwitchLegacy: "\uE13C",
  ContactLegacy: "\uE13D",
  RenameLegacy: "\uE13E",
  ExpandTileLegacy: "\uE13F",
  ReduceTileLegacy: "\uE140",
  PinLegacy: "\uE141",
  MusicInfoLegacy: "\uE142",
  GoLegacy: "\uE143",
  KeyBoardLegacy: "\uE144",
  DockLeftLegacy: "\uE145",
  DockRightLegacy: "\uE146",
  DockBottomLegacy: "\uE147",
  RemoteLegacy: "\uE148",
  RefreshLegacy: "\uE149",
  RotateLegacy: "\uE14A",
  ShuffleLegacy: "\uE14B",
  ListLegacy: "\uE14C",
  ShopLegacy: "\uE14D",
  SelectAllLegacy: "\uE14E",
  OrientationLegacy: "\uE14F",
  ImportLegacy: "\uE150",
  ImportAllLegacy: "\uE151",
  ShowAllFiles3Legacy: "\uE152",
  ShowAllFiles1Legacy: "\uE153",
  ShowAllFilesLegacy: "\uE154",
  BrowsePhotosLegacy: "\uE155",
  WebcamLegacy: "\uE156",
  PictureLegacy: "\uE158",
  SaveLocalLegacy: "\uE159",
  CaptionLegacy: "\uE15A",
  StopLegacy: "\uE15B",
  ShowResultsLegacy: "\uE15C",
  VolumeLegacy: "\uE15D",
  RepairLegacy: "\uE15E",
  MessageLegacy: "\uE15F",
  PageLegacy: "\uE160",
  CalendarDayLegacy: "\uE161",
  CalendarWeekLegacy: "\uE162",
  CalendarLegacy: "\uE163",
  CharactersLegacy: "\uE164",
  MailReplyAllLegacy: "\uE165",
  ReadLegacy: "\uE166",
  LinkLegacy: "\uE167",
  AccountsLegacy: "\uE168",
  ShowBccLegacy: "\uE169",
  HideBccLegacy: "\uE16A",
  CutLegacy: "\uE16B",
  AttachLegacy: "\uE16C",
  PasteLegacy: "\uE16D",
  FilterLegacy: "\uE16E",
  CopyLegacy: "\uE16F",
  Emoji2Legacy: "\uE170",
  ImportantLegacy: "\uE171",
  MailReplyLegacy: "\uE172",
  SlideshowLegacy: "\uE173",
  SortLegacy: "\uE174",
  ListLegacyMirrored: "\uE175",
  ExpandTileLegacyMirrored: "\uE176",
  ReduceTileLegacyMirrored: "\uE177",
  ManageLegacy: "\uE178",
  AllAppsLegacy: "\uE179",
  DisconnectDriveLegacy: "\uE17A",
  MapDriveLegacy: "\uE17B",
  NewWindowLegacy: "\uE17C",
  OpenWithLegacy: "\uE17D",
  ContactPresenceLegacy: "\uE181",
  PriorityLegacy: "\uE182",
  UploadSkyDriveLegacy: "\uE183",
  GotoTodayLegacy: "\uE184",
  FontLegacy: "\uE185",
  FontColorLegacy: "\uE186",
  Contact2Legacy: "\uE187",
  FolderLegacy: "\uE188",
  AudioLegacy: "\uE189",
  PlaceFolderLegacy: "\uE18A",
  ViewLegacy: "\uE18B",
  SetlockScreenLegacy: "\uE18C",
  SetTileLegacy: "\uE18D",
  CCJapanLegacy: "\uE18E",
  CCEuroLegacy: "\uE18F",
  CCLegacy: "\uE190",
  StopSlideshowLegacy: "\uE191",
  PermissionsLegacy: "\uE192",
  HighlightLegacy: "\uE193",
  DisableUpdatesLegacy: "\uE194",
  UnfavoriteLegacy: "\uE195",
  UnpinLegacy: "\uE196",
  OpenLocalLegacy: "\uE197",
  MuteLegacy: "\uE198",
  ItalicLegacy: "\uE199",
  UnderlineLegacy: "\uE19A",
  BoldLegacy: "\uE19B",
  MoveToFolderLegacy: "\uE19C",
  LikeDislikeLegacy: "\uE19D",
  DislikeLegacy: "\uE19E",
  LikeLegacy: "\uE19F",
  AlignRightLegacy: "\uE1A0",
  AlignCenterLegacy: "\uE1A1",
  AlignLeftLegacy: "\uE1A2",
  ZoomLegacy: "\uE1A3",
  ZoomOutLegacy: "\uE1A4",
  OpenFileLegacy: "\uE1A5",
  OtherUserLegacy: "\uE1A6",
  AdminLegacy: "\uE1A7",
  MailForwardLegacyMirrored: "\uE1A8",
  GoLegacyMirrored: "\uE1AA",
  DockLeftLegacyMirrored: "\uE1AB",
  DockRightLegacyMirrored: "\uE1AC",
  ImportLegacyMirrored: "\uE1AD",
  ImportAllLegacyMirrored: "\uE1AE",
  MailReplyLegacyMirrored: "\uE1AF",
  ItalicCLegacy: "\uE1B0",
  BoldGLegacy: "\uE1B1",
  UnderlineSLegacy: "\uE1B2",
  BoldFLegacy: "\uE1B3",
  ItalicKLegacy: "\uE1B4",
  UnderlineULegacy: "\uE1B5",
  ItalicILegacy: "\uE1B6",
  BoldNLegacy: "\uE1B7",
  UnderlineRussianLegacy: "\uE1B8",
  BoldRussionLegacy: "\uE1B9",
  FontStyleKoreanLegacy: "\uE1BA",
  UnderlineLKoreanLegacy: "\uE1BB",
  ItalicKoreanLegacy: "\uE1BC",
  BoldKoreanLegacy: "\uE1BD",
  FontColorKoreanLegacy: "\uE1BE",
  ClosePaneLegacyMirrored: "\uE1BF",
  OpenPaneLegacyMirrored: "\uE1C0",
  EditLegacyMirrored: "\uE1C2",
  StreetLegacy: "\uE1C3",
  MapLegacy: "\uE1C4",
  ClearSelectionLegacy: "\uE1C5",
  FontDecreaseLegacy: "\uE1C6",
  FontIncreaseLegacy: "\uE1C7",
  FontSizeLegacy: "\uE1C8",
  CellPhoneLegacy: "\uE1C9",
  ReshareLegacy: "\uE1CA",
  TagLegacy: "\uE1CB",
  RepeatOneLegacy: "\uE1CC",
  RepeatAllLegacy: "\uE1CD",
  OutlineStarLegacy: "\uE1CE",
  SolidStarLegacy: "\uE1CF",
  CalculatorLegacy: "\uE1D0",
  DirectionsLegacy: "\uE1D1",
  LocationLegacy: "\uE1D2",
  LibraryLegacy: "\uE1D3",
  PhoneBookLegacy: "\uE1D4",
  MemoLegacy: "\uE1D5",
  MicrophoneLegacy: "\uE1D6",
  PostUpdateLegacy: "\uE1D7",
  BackToWindowLegacy: "\uE1D8",
  FullScreenLegacy: "\uE1D9",
  NewFolderLegacy: "\uE1DA",
  CalendarReplyLegacy: "\uE1DB",
  CalendarLegacyMirrored: "\uE1DC",
  UnsyncFolderLegacy: "\uE1DD",
  ReportHackedLegacy: "\uE1DE",
  SyncFolderLegacy: "\uE1DF",
  BlockContactLegacy: "\uE1E0",
  SwitchAppsLegacy: "\uE1E1",
  AddFriendLegacy: "\uE1E2",
  TouchPointerLegacy: "\uE1E3",
  GoToStartLegacy: "\uE1E4",
  ZeroBarsLegacy: "\uE1E5",
  OneBarLegacy: "\uE1E6",
  TwoBarsLegacy: "\uE1E7",
  ThreeBarsLegacy: "\uE1E8",
  FourBarsLegacy: "\uE1E9",
  ItalicRussianLegacy: "\uE1EA",
  AllAppsLegacyMirrored: "\uE1EC",
  OpenWithLegacyMirrored: "\uE1ED",
  BookmarksLegacyMirrored: "\uE1EE",
  MultiSelectLegacyMirrored: "\uE1EF",
  ShowResultsLegacyMirrored: "\uE1F1",
  MailReplyAllLegacyMirrored: "\uE1F2",
  HelpLegacyMirrored: "\uE1F3",
  ClearSelectionLegacyMirrored: "\uE1F4",
  RecordLegacy: "\uE1F5",
  LockLegacy: "\uE1F6",
  UnlockLegacy: "\uE1F7",
  DownLegacy: "\uE1FD",
  CommentInlineLegacy: "\uE206",
  FavoriteInlineLegacy: "\uE208",
  LikeInlineLegacy: "\uE209",
  VideoInlineLegacy: "\uE20A",
  MailMessageLegacy: "\uE20B",
  PC1Legacy: "\uE211",
  DevicesLegacy: "\uE212",
  RatingStarLegacy: "\uE224",
  ChevronDownSmLegacy: "\uE228",
  ReplyLegacy: "\uE248",
  Favorite2Legacy: "\uE249",
  Unfavorite2Legacy: "\uE24A",
  MobileContactLegacy: "\uE25A",
  BlockedLegacy: "\uE25B",
  TypingIndicatorLegacy: "\uE25C",
  PresenceChickletVideoLegacy: "\uE25D",
  PresenceChickletLegacy: "\uE25E",
  ChevronRightSmLegacy: "\uE26B",
  ChevronLeftSmLegacy: "\uE26C",
  SaveAsLegacy: "\uE28F",
  DecreaseIndentLegacy: "\uE290",
  IncreaseIndentLegacy: "\uE291",
  BulletedListLegacy: "\uE292",
  ScanLegacy: "\uE294",
  PreviewLegacy: "\uE295",
  DecreaseIndentLegacyMirrored: "\uE297",
  IncreaseIndentLegacyMirrored: "\uE298",
  BulletedListLegacyMirrored: "\uE299",
  PlayOnLegacy: "\uE29B",
  ResolutionLegacy: "\uE2AC",
  LengthLegacy: "\uE2AD",
  LayoutLegacy: "\uE2AE",
  Contact3Legacy: "\uE2AF",
  TypeLegacy: "\uE2B0",
  ColorLegacy: "\uE2B1",
  SizeLegacy: "\uE2B2",
  ReturnToWindowLegacy: "\uE2B3",
  OpenInNewWindowLegacy: "\uE2B4",
  PrintLegacy: "\uE2F6",
  Printer3DLegacy: "\uE2F7",
  GlobalNavButton: "\uE700",
  Wifi: "\uE701",
  Bluetooth: "\uE702",
  Connect: "\uE703",
  InternetSharing: "\uE704",
  VPN: "\uE705",
  Brightness: "\uE706",
  MapPin: "\uE707",
  QuietHours: "\uE708",
  Airplane: "\uE709",
  Tablet: "\uE70A",
  QuickNote: "\uE70B",
  RememberedDevice: "\uE70C",
  ChevronDown: "\uE70D",
  ChevronUp: "\uE70E",
  Edit: "\uE70F",
  Add: "\uE710",
  Cancel: "\uE711",
  More: "\uE712",
  Settings: "\uE713",
  Video: "\uE714",
  Mail: "\uE715",
  People: "\uE716",
  Phone: "\uE717",
  Pin: "\uE718",
  Shop: "\uE719",
  Stop: "\uE71A",
  Link: "\uE71B",
  Filter: "\uE71C",
  AllApps: "\uE71D",
  Zoom: "\uE71E",
  ZoomOut: "\uE71F",
  Microphone: "\uE720",
  Search: "\uE721",
  Camera: "\uE722",
  Attach: "\uE723",
  Send: "\uE724",
  SendFill: "\uE725",
  WalkSolid: "\uE726",
  InPrivate: "\uE727",
  FavoriteList: "\uE728",
  PageSolid: "\uE729",
  Forward: "\uE72A",
  Back: "\uE72B",
  Refresh: "\uE72C",
  Share: "\uE72D",
  Lock: "\uE72E",
  ReportHacked: "\uE730",
  FavoriteStar: "\uE734",
  FavoriteStarFill: "\uE735",
  Remove: "\uE738",
  Checkbox: "\uE739",
  CheckboxComposite: "\uE73A",
  CheckboxFill: "\uE73B",
  CheckboxIndeterminate: "\uE73C",
  CheckboxCompositeReversed: "\uE73D",
  CheckMark: "\uE73E",
  BackToWindow: "\uE73F",
  FullScreen: "\uE740",
  ResizeTouchLarger: "\uE741",
  ResizeTouchSmaller: "\uE742",
  ResizeMouseSmall: "\uE743",
  ResizeMouseMedium: "\uE744",
  ResizeMouseWide: "\uE745",
  ResizeMouseTall: "\uE746",
  ResizeMouseLarge: "\uE747",
  SwitchUser: "\uE748",
  Print: "\uE749",
  Up: "\uE74A",
  Down: "\uE74B",
  OEM: "\uE74C",
  Delete: "\uE74D",
  Save: "\uE74E",
  Mute: "\uE74F",
  BackSpaceQWERTY: "\uE750",
  ReturnKey: "\uE751",
  UpArrowShiftKey: "\uE752",
  Cloud: "\uE753",
  Flashlight: "\uE754",
  RotationLock: "\uE755",
  CommandPrompt: "\uE756",
  SIPMove: "\uE759",
  SIPUndock: "\uE75A",
  SIPRedock: "\uE75B",
  EraseTool: "\uE75C",
  UnderscoreSpace: "\uE75D",
  GripperTool: "\uE75E",
  Dialpad: "\uE75F",
  PageLeft: "\uE760",
  PageRight: "\uE761",
  MultiSelect: "\uE762",
  KeyboardLeftHanded: "\uE763",
  KeyboardRightHanded: "\uE764",
  KeyboardClassic: "\uE765",
  KeyboardSplit: "\uE766",
  Volume: "\uE767",
  Play: "\uE768",
  Pause: "\uE769",
  ChevronLeft: "\uE76B",
  ChevronRight: "\uE76C",
  InkingTool: "\uE76D",
  Emoji2: "\uE76E",
  GripperBarHorizontal: "\uE76F",
  System: "\uE770",
  Personalize: "\uE771",
  Devices: "\uE772",
  SearchAndApps: "\uE773",
  Globe: "\uE774",
  TimeLanguage: "\uE775",
  EaseOfAccess: "\uE776",
  UpdateRestore: "\uE777",
  HangUp: "\uE778",
  ContactInfo: "\uE779",
  Unpin: "\uE77A",
  Contact: "\uE77B",
  Memo: "\uE77C",
  Paste: "\uE77F",
  PhoneBook: "\uE780",
  LEDLight: "\uE781",
  Error: "\uE783",
  GripperBarVertical: "\uE784",
  Unlock: "\uE785",
  Slideshow: "\uE786",
  Calendar: "\uE787",
  GripperResize: "\uE788",
  Megaphone: "\uE789",
  Trim: "\uE78A",
  NewWindow: "\uE78B",
  SaveLocal: "\uE78C",
  Color: "\uE790",
  DataSense: "\uE791",
  SaveAs: "\uE792",
  Light: "\uE793",
  AspectRatio: "\uE799",
  DataSenseBar: "\uE7A5",
  Redo: "\uE7A6",
  Undo: "\uE7A7",
  Crop: "\uE7A8",
  OpenWith: "\uE7AC",
  Rotate: "\uE7AD",
  SetlockScreen: "\uE7B5",
  MapPin2: "\uE7B7",
  Package: "\uE7B8",
  Warning: "\uE7BA",
  ReadingList: "\uE7BC",
  Education: "\uE7BE",
  ShoppingCart: "\uE7BF",
  Train: "\uE7C0",
  Flag: "\uE7C1",
  Page: "\uE7C3",
  Multitask: "\uE7C4",
  BrowsePhotos: "\uE7C5",
  HalfStarLeft: "\uE7C6",
  HalfStarRight: "\uE7C7",
  Record: "\uE7C8",
  TouchPointer: "\uE7C9",
  LangJPN: "\uE7DE",
  Ferry: "\uE7E3",
  Highlight: "\uE7E6",
  ActionCenterNotification: "\uE7E7",
  PowerButton: "\uE7E8",
  ResizeTouchNarrower: "\uE7EA",
  ResizeTouchShorter: "\uE7EB",
  DrivingMode: "\uE7EC",
  RingerSilent: "\uE7ED",
  OtherUser: "\uE7EE",
  Admin: "\uE7EF",
  CC: "\uE7F0",
  SDCard: "\uE7F1",
  CallForwarding: "\uE7F2",
  SettingsDisplaySound: "\uE7F3",
  TVMonitor: "\uE7F4",
  Speakers: "\uE7F5",
  Headphone: "\uE7F6",
  DeviceLaptopPic: "\uE7F7",
  DeviceLaptopNoPic: "\uE7F8",
  DeviceMonitorRightPic: "\uE7F9",
  DeviceMonitorLeftPic: "\uE7FA",
  DeviceMonitorNoPic: "\uE7FB",
  Game: "\uE7FC",
  HorizontalTabKey: "\uE7FD",
  StreetsideSplitMinimize: "\uE802",
  StreetsideSplitExpand: "\uE803",
  Car: "\uE804",
  Walk: "\uE805",
  Bus: "\uE806",
  TiltUp: "\uE809",
  TiltDown: "\uE80A",
  RotateMapRight: "\uE80C",
  RotateMapLeft: "\uE80D",
  Home: "\uE80F",
  ParkingLocation: "\uE811",
  MapCompassTop: "\uE812",
  MapCompassBottom: "\uE813",
  IncidentTriangle: "\uE814",
  Touch: "\uE815",
  MapDirections: "\uE816",
  StartPoint: "\uE819",
  StopPoint: "\uE81A",
  EndPoint: "\uE81B",
  History: "\uE81C",
  Location: "\uE81D",
  MapLayers: "\uE81E",
  Accident: "\uE81F",
  Work: "\uE821",
  Construction: "\uE822",
  Recent: "\uE823",
  Bank: "\uE825",
  DownloadMap: "\uE826",
  InkingToolFill2: "\uE829",
  HighlightFill2: "\uE82A",
  EraseToolFill: "\uE82B",
  EraseToolFill2: "\uE82C",
  Dictionary: "\uE82D",
  DictionaryAdd: "\uE82E",
  ToolTip: "\uE82F",
  ChromeBack: "\uE830",
  ProvisioningPackage: "\uE835",
  AddRemoteDevice: "\uE836",
  Ethernet: "\uE839",
  " ShareBroadband": "\uE83A",
  DirectAccess: "\uE83B",
  " DialUp": "\uE83C",
  DefenderApp: "\uE83D",
  BatteryCharging9: "\uE83E",
  Battery10: "\uE83F",
  Pinned: "\uE840",
  PinFill: "\uE841",
  PinnedFill: "\uE842",
  PeriodKey: "\uE843",
  PuncKey: "\uE844",
  RevToggleKey: "\uE845",
  RightArrowKeyTime1: "\uE846",
  RightArrowKeyTime2: "\uE847",
  LeftQuote: "\uE848",
  RightQuote: "\uE849",
  DownShiftKey: "\uE84A",
  UpShiftKey: "\uE84B",
  PuncKey0: "\uE84C",
  PuncKeyLeftBottom: "\uE84D",
  RightArrowKeyTime3: "\uE84E",
  RightArrowKeyTime4: "\uE84F",
  Battery0: "\uE850",
  Battery1: "\uE851",
  Battery2: "\uE852",
  Battery3: "\uE853",
  Battery4: "\uE854",
  Battery5: "\uE855",
  Battery6: "\uE856",
  Battery7: "\uE857",
  Battery8: "\uE858",
  Battery9: "\uE859",
  BatteryCharging0: "\uE85A",
  BatteryCharging1: "\uE85B",
  BatteryCharging2: "\uE85C",
  BatteryCharging3: "\uE85D",
  BatteryCharging4: "\uE85E",
  BatteryCharging5: "\uE85F",
  BatteryCharging6: "\uE860",
  BatteryCharging7: "\uE861",
  BatteryCharging8: "\uE862",
  BatterySaver0: "\uE863",
  BatterySaver1: "\uE864",
  BatterySaver2: "\uE865",
  BatterySaver3: "\uE866",
  BatterySaver4: "\uE867",
  BatterySaver5: "\uE868",
  BatterySaver6: "\uE869",
  BatterySaver7: "\uE86A",
  BatterySaver8: "\uE86B",
  SignalBars1: "\uE86C",
  SignalBars2: "\uE86D",
  SignalBars3: "\uE86E",
  SignalBars4: "\uE86F",
  SignalBars5: "\uE870",
  SignalNotConnected: "\uE871",
  Wifi1: "\uE872",
  Wifi2: "\uE873",
  Wifi3: "\uE874",
  SIMLock: "\uE875",
  SIMMissing: "\uE876",
  Vibrate: "\uE877",
  RoamingInternational: "\uE878",
  RoamingDomestic: "\uE879",
  CallForwardInternational: "\uE87A",
  CallForwardRoaming: "\uE87B",
  JpnRomanji: "\uE87C",
  JpnRomanjiLock: "\uE87D",
  JpnRomanjiShift: "\uE87E",
  JpnRomanjiShiftLock: "\uE87F",
  StatusDataTransfer: "\uE880",
  StatusDataTransferVPN: "\uE881",
  StatusDualSIM2: "\uE882",
  StatusDualSIM2VPN: "\uE883",
  StatusDualSIM1: "\uE884",
  StatusDualSIM1VPN: "\uE885",
  StatusSGLTE: "\uE886",
  StatusSGLTECell: "\uE887",
  StatusSGLTEDataVPN: "\uE888",
  StatusVPN: "\uE889",
  WifiHotspot: "\uE88A",
  LanguageKor: "\uE88B",
  LanguageCht: "\uE88C",
  LanguageChs: "\uE88D",
  USB: "\uE88E",
  InkingToolFill: "\uE88F",
  View: "\uE890",
  HighlightFill: "\uE891",
  Previous: "\uE892",
  Next: "\uE893",
  Clear: "\uE894",
  Sync: "\uE895",
  Download: "\uE896",
  Help: "\uE897",
  Upload: "\uE898",
  Emoji: "\uE899",
  TwoPage: "\uE89A",
  LeaveChat: "\uE89B",
  MailForward: "\uE89C",
  RotateCamera: "\uE89E",
  ClosePane: "\uE89F",
  OpenPane: "\uE8A0",
  PreviewLink: "\uE8A1",
  AttachCamera: "\uE8A2",
  ZoomIn: "\uE8A3",
  Bookmarks: "\uE8A4",
  Document: "\uE8A5",
  ProtectedDocument: "\uE8A6",
  OpenInNewWindow: "\uE8A7",
  MailFill: "\uE8A8",
  ViewAll: "\uE8A9",
  VideoChat: "\uE8AA",
  Switch: "\uE8AB",
  Rename: "\uE8AC",
  Go: "\uE8AD",
  SurfaceHub: "\uE8AE",
  Remote: "\uE8AF",
  Click: "\uE8B0",
  Shuffle: "\uE8B1",
  Movies: "\uE8B2",
  SelectAll: "\uE8B3",
  Orientation: "\uE8B4",
  Import: "\uE8B5",
  ImportAll: "\uE8B6",
  Folder: "\uE8B7",
  Webcam: "\uE8B8",
  Picture: "\uE8B9",
  Caption: "\uE8BA",
  ChromeClose: "\uE8BB",
  ShowResults: "\uE8BC",
  Message: "\uE8BD",
  Leaf: "\uE8BE",
  CalendarDay: "\uE8BF",
  CalendarWeek: "\uE8C0",
  Characters: "\uE8C1",
  MailReplyAll: "\uE8C2",
  Read: "\uE8C3",
  ShowBcc: "\uE8C4",
  HideBcc: "\uE8C5",
  Cut: "\uE8C6",
  Copy: "\uE8C8",
  Important: "\uE8C9",
  MailReply: "\uE8CA",
  Sort: "\uE8CB",
  MobileTablet: "\uE8CC",
  DisconnectDrive: "\uE8CD",
  MapDrive: "\uE8CE",
  ContactPresence: "\uE8CF",
  Priority: "\uE8D0",
  GotoToday: "\uE8D1",
  Font: "\uE8D2",
  FontColor: "\uE8D3",
  Contact2: "\uE8D4",
  FolderFill: "\uE8D5",
  Audio: "\uE8D6",
  Permissions: "\uE8D7",
  DisableUpdates: "\uE8D8",
  Unfavorite: "\uE8D9",
  OpenLocal: "\uE8DA",
  Italic: "\uE8DB",
  Underline: "\uE8DC",
  Bold: "\uE8DD",
  MoveToFolder: "\uE8DE",
  LikeDislike: "\uE8DF",
  Dislike: "\uE8E0",
  Like: "\uE8E1",
  AlignRight: "\uE8E2",
  AlignCenter: "\uE8E3",
  AlignLeft: "\uE8E4",
  OpenFile: "\uE8E5",
  ClearSelection: "\uE8E6",
  FontDecrease: "\uE8E7",
  FontIncrease: "\uE8E8",
  FontSize: "\uE8E9",
  CellPhone: "\uE8EA",
  Reshare: "\uE8EB",
  Tag: "\uE8EC",
  RepeatOne: "\uE8ED",
  RepeatAll: "\uE8EE",
  Calculator: "\uE8EF",
  Directions: "\uE8F0",
  Library: "\uE8F1",
  ChatBubbles: "\uE8F2",
  PostUpdate: "\uE8F3",
  NewFolder: "\uE8F4",
  CalendarReply: "\uE8F5",
  UnsyncFolder: "\uE8F6",
  SyncFolder: "\uE8F7",
  BlockContact: "\uE8F8",
  SwitchApps: "\uE8F9",
  AddFriend: "\uE8FA",
  Accept: "\uE8FB",
  GoToStart: "\uE8FC",
  BulletedList: "\uE8FD",
  Scan: "\uE8FE",
  Preview: "\uE8FF",
  ZeroBars: "\uE904",
  OneBar: "\uE905",
  TwoBars: "\uE906",
  ThreeBars: "\uE907",
  FourBars: "\uE908",
  World: "\uE909",
  Comment: "\uE90A",
  MusicInfo: "\uE90B",
  DockLeft: "\uE90C",
  DockRight: "\uE90D",
  DockBottom: "\uE90E",
  Repair: "\uE90F",
  Accounts: "\uE910",
  DullSound: "\uE911",
  Manage: "\uE912",
  Street: "\uE913",
  Printer3D: "\uE914",
  RadioBullet: "\uE915",
  Stopwatch: "\uE916",
  Photo: "\uE91B",
  ActionCenter: "\uE91C",
  FullCircleMask: "\uE91F",
  ChromeMinimize: "\uE921",
  ChromeMaximize: "\uE922",
  ChromeRestore: "\uE923",
  Annotation: "\uE924",
  BackSpaceQWERTYSm: "\uE925",
  BackSpaceQWERTYMd: "\uE926",
  Swipe: "\uE927",
  Fingerprint: "\uE928",
  Handwriting: "\uE929",
  ChromeBackToWindow: "\uE92C",
  ChromeFullScreen: "\uE92D",
  KeyboardStandard: "\uE92E",
  KeyboardDismiss: "\uE92F",
  Completed: "\uE930",
  ChromeAnnotate: "\uE931",
  Label: "\uE932",
  IBeam: "\uE933",
  IBeamOutline: "\uE934",
  FlickDown: "\uE935",
  FlickUp: "\uE936",
  FlickLeft: "\uE937",
  FlickRight: "\uE938",
  FeedbackApp: "\uE939",
  MusicAlbum: "\uE93C",
  Streaming: "\uE93E",
  Code: "\uE943",
  ReturnToWindow: "\uE944",
  LightningBolt: "\uE945",
  Info: "\uE946",
  CalculatorMultiply: "\uE947",
  CalculatorAddition: "\uE948",
  CalculatorSubtract: "\uE949",
  CalculatorDivide: "\uE94A",
  CalculatorSquareroot: "\uE94B",
  CalculatorPercentage: "\uE94C",
  CalculatorNegate: "\uE94D",
  CalculatorEqualTo: "\uE94E",
  CalculatorBackspace: "\uE94F",
  Component: "\uE950",
  DMC: "\uE951",
  Dock: "\uE952",
  MultimediaDMS: "\uE953",
  MultimediaDVR: "\uE954",
  MultimediaPMP: "\uE955",
  PrintfaxPrinterFile: "\uE956",
  Sensor: "\uE957",
  StorageOptical: "\uE958",
  Communications: "\uE95A",
  Headset: "\uE95B",
  Projector: "\uE95D",
  Health: "\uE95E",
  Webcam2: "\uE960",
  Input: "\uE961",
  Mouse: "\uE962",
  Smartcard: "\uE963",
  SmartcardVirtual: "\uE964",
  MediaStorageTower: "\uE965",
  ReturnKeySm: "\uE966",
  GameConsole: "\uE967",
  Network: "\uE968",
  StorageNetworkWireless: "\uE969",
  StorageTape: "\uE96A",
  ChevronUpSmall: "\uE96D",
  ChevronDownSmall: "\uE96E",
  ChevronLeftSmall: "\uE96F",
  ChevronRightSmall: "\uE970",
  ChevronUpMed: "\uE971",
  ChevronDownMed: "\uE972",
  ChevronLeftMed: "\uE973",
  ChevronRightMed: "\uE974",
  Devices2: "\uE975",
  ExpandTile: "\uE976",
  PC1: "\uE977",
  PresenceChicklet: "\uE978",
  PresenceChickletVideo: "\uE979",
  Reply: "\uE97A",
  SetTile: "\uE97B",
  Type: "\uE97C",
  Korean: "\uE97D",
  HalfAlpha: "\uE97E",
  FullAlpha: "\uE97F",
  Key12On: "\uE980",
  ChineseChangjie: "\uE981",
  QWERTYOn: "\uE982",
  QWERTYOff: "\uE983",
  ChineseQuick: "\uE984",
  Japanese: "\uE985",
  FullHiragana: "\uE986",
  FullKatakana: "\uE987",
  HalfKatakana: "\uE988",
  ChineseBoPoMoFo: "\uE989",
  ChinesePinyin: "\uE98A",
  ConstructionCone: "\uE98F",
  XboxOneConsole: "\uE990",
  Volume0: "\uE992",
  Volume1: "\uE993",
  Volume2: "\uE994",
  Volume3: "\uE995",
  BatteryUnknown: "\uE996",
  WifiAttentionOverlay: "\uE998",
  Robot: "\uE99A",
  TapAndSend: "\uE9A1",
  PasswordKeyShow: "\uE9A8",
  PasswordKeyHide: "\uE9A9",
  BidiLtr: "\uE9AA",
  BidiRtl: "\uE9AB",
  ForwardSm: "\uE9AC",
  CommaKey: "\uE9AD",
  DashKey: "\uE9AE",
  DullSoundKey: "\uE9AF",
  HalfDullSound: "\uE9B0",
  RightDoubleQuote: "\uE9B1",
  LeftDoubleQuote: "\uE9B2",
  PuncKeyRightBottom: "\uE9B3",
  PuncKey1: "\uE9B4",
  PuncKey2: "\uE9B5",
  PuncKey3: "\uE9B6",
  PuncKey4: "\uE9B7",
  PuncKey5: "\uE9B8",
  PuncKey6: "\uE9B9",
  PuncKey9: "\uE9BA",
  PuncKey7: "\uE9BB",
  PuncKey8: "\uE9BC",
  Frigid: "\uE9CA",
  Diagnostic: "\uE9D9",
  Process: "\uE9F3",
  DisconnectDisplay: "\uEA14",
  Info2: "\uEA1F",
  ActionCenterAsterisk: "\uEA21",
  Beta: "\uEA24",
  SaveCopy: "\uEA35",
  List: "\uEA37",
  Asterisk: "\uEA38",
  ErrorBadge: "\uEA39",
  CircleRing: "\uEA3A",
  CircleFill: "\uEA3B",
  AllAppsMirrored: "\uEA40",
  BookmarksMirrored: "\uEA41",
  BulletedListMirrored: "\uEA42",
  CallForwardInternationalMirrored: "\uEA43",
  CallForwardRoamingMirrored: "\uEA44",
  ChromeBackMirrored: "\uEA47",
  ClearSelectionMirrored: "\uEA48",
  ClosePaneMirrored: "\uEA49",
  ContactInfoMirrored: "\uEA4A",
  DockRightMirrored: "\uEA4B",
  DockLeftMirrored: "\uEA4C",
  ExpandTileMirrored: "\uEA4E",
  GoMirrored: "\uEA4F",
  GripperResizeMirrored: "\uEA50",
  HelpMirrored: "\uEA51",
  ImportMirrored: "\uEA52",
  ImportAllMirrored: "\uEA53",
  LeaveChatMirrored: "\uEA54",
  ListMirrored: "\uEA55",
  MailForwardMirrored: "\uEA56",
  MailReplyMirrored: "\uEA57",
  MailReplyAllMirrored: "\uEA58",
  OpenPaneMirrored: "\uEA5B",
  OpenWithMirrored: "\uEA5C",
  ParkingLocationMirrored: "\uEA5E",
  ResizeMouseMediumMirrored: "\uEA5F",
  ResizeMouseSmallMirrored: "\uEA60",
  ResizeMouseTallMirrored: "\uEA61",
  ResizeTouchNarrowerMirrored: "\uEA62",
  SendMirrored: "\uEA63",
  SendFillMirrored: "\uEA64",
  ShowResultsMirrored: "\uEA65",
  Media: "\uEA69",
  SyncError: "\uEA6A",
  Devices3: "\uEA6C",
  Lightbulb: "\uEA80",
  StatusCircle: "\uEA81",
  StatusTriangle: "\uEA82",
  StatusError: "\uEA83",
  StatusWarning: "\uEA84",
  Puzzle: "\uEA86",
  CalendarSolid: "\uEA89",
  HomeSolid: "\uEA8A",
  ParkingLocationSolid: "\uEA8B",
  ContactSolid: "\uEA8C",
  ConstructionSolid: "\uEA8D",
  AccidentSolid: "\uEA8E",
  Ringer: "\uEA8F",
  ThoughtBubble: "\uEA91",
  HeartBroken: "\uEA92",
  BatteryCharging10: "\uEA93",
  BatterySaver9: "\uEA94",
  BatterySaver10: "\uEA95",
  CallForwardingMirrored: "\uEA97",
  MultiSelectMirrored: "\uEA98",
  Broom: "\uEA99",
  Trackers: "\uEADF",
  PieSingle: "\uEB05",
  StockDown: "\uEB0F",
  StockUp: "\uEB11",
  Drop: "\uEB42",
  BusSolid: "\uEB47",
  FerrySolid: "\uEB48",
  StartPointSolid: "\uEB49",
  StopPointSolid: "\uEB4A",
  EndPointSolid: "\uEB4B",
  AirplaneSolid: "\uEB4C",
  TrainSolid: "\uEB4D",
  WorkSolid: "\uEB4E",
  ReminderFill: "\uEB4F",
  Reminder: "\uEB50",
  Heart: "\uEB51",
  HeartFill: "\uEB52",
  EthernetError: "\uEB55",
  EthernetWarning: "\uEB56",
  StatusConnecting1: "\uEB57",
  StatusConnecting2: "\uEB58",
  StatusUnsecure: "\uEB59",
  WifiError0: "\uEB5A",
  WifiError1: "\uEB5B",
  WifiError2: "\uEB5C",
  WifiError3: "\uEB5D",
  WifiError4: "\uEB5E",
  WifiWarning0: "\uEB5F",
  WifiWarning1: "\uEB60",
  WifiWarning2: "\uEB61",
  WifiWarning3: "\uEB62",
  WifiWarning4: "\uEB63",
  Devices4: "\uEB66",
  NUIIris: "\uEB67",
  NUIFace: "\uEB68",
  EditMirrored: "\uEB7E",
  NUIFPStartSlideHand: "\uEB82",
  NUIFPStartSlideAction: "\uEB83",
  NUIFPContinueSlideHand: "\uEB84",
  NUIFPContinueSlideAction: "\uEB85",
  NUIFPRollRightHand: "\uEB86",
  NUIFPRollRightHandAction: "\uEB87",
  NUIFPRollLeftHand: "\uEB88",
  NUIFPRollLeftAction: "\uEB89",
  NUIFPPressHand: "\uEB8A",
  NUIFPPressAction: "\uEB8B",
  NUIFPPressRepeatHand: "\uEB8C",
  NUIFPPressRepeatAction: "\uEB8D",
  StatusErrorFull: "\uEB90",
  MultitaskExpanded: "\uEB91",
  Certificate: "\uEB95",
  BackSpaceQWERTYLg: "\uEB96",
  ReturnKeyLg: "\uEB97",
  FastForward: "\uEB9D",
  Rewind: "\uEB9E",
  Photo2: "\uEB9F",
  " MobBattery0": "\uEBA0",
  " MobBattery1": "\uEBA1",
  " MobBattery2": "\uEBA2",
  " MobBattery3": "\uEBA3",
  " MobBattery4": "\uEBA4",
  " MobBattery5": "\uEBA5",
  " MobBattery6": "\uEBA6",
  " MobBattery7": "\uEBA7",
  " MobBattery8": "\uEBA8",
  " MobBattery9": "\uEBA9",
  MobBattery10: "\uEBAA",
  " MobBatteryCharging0": "\uEBAB",
  " MobBatteryCharging1": "\uEBAC",
  " MobBatteryCharging2": "\uEBAD",
  " MobBatteryCharging3": "\uEBAE",
  " MobBatteryCharging4": "\uEBAF",
  " MobBatteryCharging5": "\uEBB0",
  " MobBatteryCharging6": "\uEBB1",
  " MobBatteryCharging7": "\uEBB2",
  " MobBatteryCharging8": "\uEBB3",
  " MobBatteryCharging9": "\uEBB4",
  " MobBatteryCharging10": "\uEBB5",
  " MobBatterySaver0": "\uEBB6",
  " MobBatterySaver1": "\uEBB7",
  " MobBatterySaver2": "\uEBB8",
  " MobBatterySaver3": "\uEBB9",
  " MobBatterySaver4": "\uEBBA",
  " MobBatterySaver5": "\uEBBB",
  " MobBatterySaver6": "\uEBBC",
  " MobBatterySaver7": "\uEBBD",
  " MobBatterySaver8": "\uEBBE",
  " MobBatterySaver9": "\uEBBF",
  " MobBatterySaver10": "\uEBC0",
  DictionaryCloud: "\uEBC3",
  ResetDrive: "\uEBC4",
  VolumeBars: "\uEBC5",
  Project: "\uEBC6",
  AdjustHologram: "\uEBD2",
  WifiCallBars: "\uEBD4",
  WifiCall0: "\uEBD5",
  WifiCall1: "\uEBD6",
  WifiCall2: "\uEBD7",
  WifiCall3: "\uEBD8",
  WifiCall4: "\uEBD9",
  DeviceDiscovery: "\uEBDE",
  WindDirection: "\uEBE6",
  RightArrowKeyTime0: "\uEBE7",
  TabletMode: "\uEBFC",
  StatusCircleLeft: "\uEBFD",
  StatusTriangleLeft: "\uEBFE",
  StatusErrorLeft: "\uEBFF",
  StatusWarningLeft: "\uEC00",
  MobBatteryUnknown: "\uEC02",
  NetworkTower: "\uEC05",
  CityNext: "\uEC06",
  CityNext2: "\uEC07",
  Courthouse: "\uEC08",
  Groceries: "\uEC09",
  Sustainable: "\uEC0A",
  BuildingEnergy: "\uEC0B",
  ToggleFilled: "\uEC11",
  ToggleBorder: "\uEC12",
  SliderThumb: "\uEC13",
  ToggleThumb: "\uEC14",
  MiracastLogoSmall: "\uEC15",
  MiracastLogoLarge: "\uEC16",
  PLAP: "\uEC19",
  Badge: "\uEC1B",
  SignalRoaming: "\uEC1E",
  MobileLocked: "\uEC20",
  InsiderHubApp: "\uEC24",
  PersonalFolder: "\uEC25",
  HomeGroup: "\uEC26",
  MyNetwork: "\uEC27",
  KeyboardFull: "\uEC31",
  MobSignal1: "\uEC37",
  MobSignal2: "\uEC38",
  MobSignal3: "\uEC39",
  MobSignal4: "\uEC3A",
  MobSignal5: "\uEC3B",
  MobWifi1: "\uEC3C",
  MobWifi2: "\uEC3D",
  MobWifi3: "\uEC3E",
  MobWifi4: "\uEC3F",
  MobAirplane: "\uEC40",
  MobBluetooth: "\uEC41",
  MobActionCenter: "\uEC42",
  MobLocation: "\uEC43",
  MobWifiHotspot: "\uEC44",
  LanguageJpn: "\uEC45",
  MobQuietHours: "\uEC46",
  MobDrivingMode: "\uEC47",
  SpeedOff: "\uEC48",
  SpeedMedium: "\uEC49",
  SpeedHigh: "\uEC4A",
  ThisPC: "\uEC4E",
  MusicNote: "\uEC4F",
  FileExplorer: "\uEC50",
  FileExplorerApp: "\uEC51",
  LeftArrowKeyTime0: "\uEC52",
  MicOff: "\uEC54",
  MicSleep: "\uEC55",
  MicError: "\uEC56",
  PlaybackRate1x: "\uEC57",
  PlaybackRateOther: "\uEC58",
  CashDrawer: "\uEC59",
  BarcodeScanner: "\uEC5A",
  ReceiptPrinter: "\uEC5B",
  MagStripeReader: "\uEC5C",
  CompletedSolid: "\uEC61",
  CompanionApp: "\uEC64",
  SwipeRevealArt: "\uEC6D",
  MicOn: "\uEC71",
  MicClipping: "\uEC72",
  TabletSelected: "\uEC74",
  MobileSelected: "\uEC75",
  LaptopSelected: "\uEC76",
  TVMonitorSelected: "\uEC77",
  DeveloperTools: "\uEC7A",
  MobCallForwarding: "\uEC7E",
  MobCallForwardingMirrored: "\uEC7F",
  BodyCam: "\uEC80",
  PoliceCar: "\uEC81",
  Draw: "\uEC87",
  DrawSolid: "\uEC88",
  LowerBrightness: "\uEC8A",
  ScrollUpDown: "\uEC8F",
  DateTime: "\uEC92",
  Tiles: "\uECA5",
  PartyLeader: "\uECA7",
  AppIconDefault: "\uECAA",
  AddSurfaceHub: "\uECC4",
  DevUpdate: "\uECC5",
  Unit: "\uECC6",
  AddTo: "\uECC8",
  RemoveFrom: "\uECC9",
  RadioBtnOff: "\uECCA",
  RadioBtnOn: "\uECCB",
  RadioBullet2: "\uECCC",
  ExploreContent: "\uECCD",
  ScrollMode: "\uECE7",
  ZoomMode: "\uECE8",
  PanMode: "\uECE9",
  "WiredUSB ": "\uECF0",
  WirelessUSB: "\uECF1",
  USBSafeConnect: "\uECF3",
  ActionCenterNotificationMirrored: "\uED0C",
  ActionCenterMirrored: "\uED0D",
  ResetDevice: "\uED10",
  Feedback: "\uED15",
  Subtitles: "\uED1E",
  SubtitlesAudio: "\uED1F",
  CalendarMirrored: "\uED28",
  eSIM: "\uED2A",
  eSIMNoProfile: "\uED2B",
  eSIMLocked: "\uED2C",
  eSIMBusy: "\uED2D",
  SignalError: "\uED2E",
  StreamingEnterprise: "\uED2F",
  Headphone0: "\uED30",
  Headphone1: "\uED31",
  Headphone2: "\uED32",
  Headphone3: "\uED33",
  KeyboardBrightness: "\uED39",
  KeyboardLowerBrightness: "\uED3A",
  SkipBack10: "\uED3C",
  SkipForward30: "\uED3D",
  TreeFolderFolder: "\uED41",
  TreeFolderFolderFill: "\uED42",
  TreeFolderFolderOpen: "\uED43",
  TreeFolderFolderOpenFill: "\uED44",
  MultimediaDMP: "\uED47",
  KeyboardOneHanded: "\uED4C",
  Narrator: "\uED4D",
  EmojiTabPeople: "\uED53",
  EmojiTabSmilesAnimals: "\uED54",
  EmojiTabCelebrationObjects: "\uED55",
  EmojiTabFoodPlants: "\uED56",
  EmojiTabTransitPlaces: "\uED57",
  EmojiTabSymbols: "\uED58",
  EmojiTabTextSmiles: "\uED59",
  EmojiTabFavorites: "\uED5A",
  EmojiSwatch: "\uED5B",
  ConnectApp: "\uED5C",
  CompanionDeviceFramework: "\uED5D",
  Ruler: "\uED5E",
  FingerInking: "\uED5F",
  StrokeErase: "\uED60",
  PointErase: "\uED61",
  ClearAllInk: "\uED62",
  Pencil: "\uED63",
  Marker: "\uED64",
  InkingCaret: "\uED65",
  InkingColorOutline: "\uED66",
  InkingColorFill: "\uED67",
  HardDrive: "\uEDA2",
  NetworkAdapter: "\uEDA3",
  Touchscreen: "\uEDA4",
  NetworkPrinter: "\uEDA5",
  CloudPrinter: "\uEDA6",
  KeyboardShortcut: "\uEDA7",
  BrushSize: "\uEDA8",
  NarratorForward: "\uEDA9",
  NarratorForwardMirrored: "\uEDAA",
  SyncBadge12: "\uEDAB",
  RingerBadge12: "\uEDAC",
  AsteriskBadge12: "\uEDAD",
  ErrorBadge12: "\uEDAE",
  CircleRingBadge12: "\uEDAF",
  CircleFillBadge12: "\uEDB0",
  ImportantBadge12: "\uEDB1",
  MailBadge12: "\uEDB3",
  PauseBadge12: "\uEDB4",
  PlayBadge12: "\uEDB5",
  PenWorkspace: "\uEDC6",
  Export: "\uEDE1",
  ExportMirrored: "\uEDE2",
  CaligraphyPen: "\uEDFB",
  ReplyMirrored: "\uEE35",
  LockscreenDesktop: "\uEE3F",
  Multitask16: "\uEE40",
  Play36: "\uEE4A",
  PenPalette: "\uEE56",
  GuestUser: "\uEE57",
  SettingsBattery: "\uEE63",
  TaskbarPhone: "\uEE64",
  LockScreenGlance: "\uEE65",
  ImageExport: "\uEE71",
  WifiEthernet: "\uEE77",
  ActionCenterQuiet: "\uEE79",
  ActionCenterQuietNotification: "\uEE7A",
  TrackersMirrored: "\uEE92",
  DateTimeMirrored: "\uEE93",
  Wheel: "\uEE94",
  PenWorkspaceMirrored: "\uEF15",
  PenPaletteMirrored: "\uEF16",
  StrokeEraseMirrored: "\uEF17",
  PointEraseMirrored: "\uEF18",
  ClearAllInkMirrored: "\uEF19",
  BackgroundToggle: "\uEF1F",
  Marquee: "\uEF20"
});
// CONCATENATED MODULE: ./src/components/Icon/Icon.js







function Icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Icon_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Icon_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var Icon = ({
  name: "Icon",
  props: {
    size: {
      type: [Number, String]
    },
    hoverStyle: Object,
    activeStyle: Object,
    useSVGElement: {
      type: Boolean,
      default: false
    },
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      hovered: false,
      styleClasses: {}
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleMouseEnter: function handleMouseEnter() {
      this.hovered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.hovered = false;
    },
    value: function value() {
      var defaultNode = this.$slots.default ? this.$slots.default.length > 0 ? this.$slots.default[0] : null : null;

      if (defaultNode) {
        var text = defaultNode.text.trim();
        return icons[text] ? icons[text] : text;
      }

      return null;
    }
  },
  render: function render(h) {
    var theme = this.context.theme,
        size = this.size,
        className = this.className,
        hoverStyle = this.hoverStyle,
        activeStyle = this.activeStyle,
        hovered = this.hovered,
        handleMouseEnter = this.handleMouseEnter,
        handleMouseLeave = this.handleMouseLeave,
        styles = this.styles,
        value = this.value;
    var inlineStyle = theme.prefixStyle(Icon_objectSpread({
      display: "inline-block",
      textAlign: "center",
      verticalAlign: "middle",
      fontFamily: theme.fonts.segoeMDL2Assets,
      transition: "all .25s",
      border: "none",
      outline: "none",
      userSelect: "none",
      width: size,
      height: size,
      lineHeight: size ? "".concat(size, "px") : "inherit",
      fontSize: size || "inherit",
      color: "inherit"
    }, styles, {
      "&:hover": hovered ? hoverStyle : void 0,
      "&:active": activeStyle
    }));
    var prepareStyle = theme.prepareStyle({
      className: "icon",
      style: inlineStyle,
      extendsClassName: className
    });
    var icon;
    var events = bindEvent(this);
    var event = {
      on: Icon_objectSpread({}, events, {
        mouseenter: function mouseenter() {
          events.mouseenter();
          handleMouseEnter();
        },
        mouseleave: function mouseleave() {
          events.mouseleave();
          handleMouseLeave();
        }
      })
    };

    var params = Icon_objectSpread({
      class: prepareStyle.className,
      style: prepareStyle.style
    }, event);

    if (this.useSVGElement) {
      icon = h("text", params, value());
    } else {
      icon = h("span", params, value());
    }

    return h(PseudoClasses, {
      props: {
        props: params
      }
    }, [icon]);
  }
});
// CONCATENATED MODULE: ./src/components/Icon/index.js



Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

/* harmony default export */ var components_Icon = (Icon);
// CONCATENATED MODULE: ./src/components/Button/Button.js








function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var labelStyle = {
  verticalAlign: "middle"
};
/* harmony default export */ var Button = ({
  name: "Button",
  props: {
    borderSize: {
      type: String,
      default: "2px"
    },
    hoverStyle: Object,
    activeStyle: Object,
    icon: String,
    iconStyle: Object,
    iconPosition: {
      type: String,
      validator: function validator(value) {
        return ["left", "right"].includes(value);
      },
      default: "left"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tooltip: String,
    background: String,
    className: String,
    styles: Object
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var theme = this.context.theme,
        borderSize = this.borderSize,
        className = this.className,
        icon = this.icon,
        iconStyle = this.iconStyle,
        iconPosition = this.iconPosition,
        disabled = this.disabled,
        tooltip = this.tooltip,
        background = this.background,
        styles = this.styles;
    var event = {
      on: bindEvent(this)
    };
    var buttonPrepareStyle = theme.prepareStyle({
      className: "button-root",
      style: Button_objectSpread({
        display: "inline-block",
        verticalAlign: "middle",
        cursor: "pointer",
        color: theme.baseHigh,
        outline: "none",
        padding: "4px 16px",
        transition: "all .25s",
        border: "".concat(borderSize, " solid transparent"),
        background: background || theme.baseLow
      }, theme.prefixStyle(styles), {
        "&:hover": disabled ? void 0 : {
          border: "2px solid ".concat(theme.baseMediumLow)
        },
        "&:active": disabled ? void 0 : {
          background: theme.baseMediumLow
        },
        "&:disabled": {
          background: theme.baseMedium,
          cursor: "not-allowed",
          color: theme.baseMedium
        }
      }),
      extendsClassName: className
    });
    var iconPrepareStyle = theme.prepareStyle({
      className: "button-icon",
      style: Button_objectSpread({
        padding: "0 4px",
        display: "inline-block"
      }, theme.prefixStyle(iconStyle))
    });
    var buttonStyles = {
      style: buttonPrepareStyle.style,
      class: buttonPrepareStyle.className
    };
    var result;

    var buttonParams = Button_objectSpread({}, buttonStyles, {}, event);

    if (icon) {
      var iconChild = h(components_Icon, {
        props: {
          styles: iconPrepareStyle.style,
          className: iconPrepareStyle.className
        }
      }, icon);
      var spanChild = h("span", {
        style: labelStyle
      }, this.$slots.default);
      result = h("button", buttonParams, iconPosition === "right" ? [spanChild, iconChild] : [iconChild, spanChild]);
    } else {
      result = h("button", buttonParams, this.$slots.default);
    }

    var normalRender = h(PseudoClasses, {
      props: {
        props: Button_objectSpread({}, buttonParams, {}, this.$props)
      },
      attrs: {
        disabled: disabled
      }
    }, [result]);
    var tooltipSlot = this.$slots.tooltip;
    var tooltipNode = tooltip ? h("span", {
      slot: "content"
    }, tooltip) : tooltipSlot ? h("template", {
      slot: "content"
    }, tooltipSlot) : void 0;
    return tooltipNode ? h(components_Tooltip, [tooltipNode, normalRender]) : normalRender;
  }
});
// CONCATENATED MODULE: ./src/components/Button/index.js



Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

/* harmony default export */ var components_Button = (Button);
// CONCATENATED MODULE: ./src/components/AppBarButton/AppBarButton.js








function AppBarButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppBarButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppBarButton_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppBarButton_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var AppBarButton = ({
  name: "AppBarButton",
  props: {
    icon: String,
    iconStyle: Object,
    hoverStyle: Object,
    label: String,
    labelPosition: {
      type: String,
      validator: function validator(value) {
        return ["right", "bottom", "collapsed"].includes(value);
      },
      default: "bottom"
    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var theme = this.context.theme,
        label = this.label,
        icon = this.icon,
        className = this.className,
        labelPosition = this.labelPosition;
    var inlineStyles = getStyles(this);
    var styles = theme.prepareStyles({
      styles: inlineStyles,
      className: "app-bar-button"
    });
    var event = {
      on: bindEvent(this)
    };

    var appBarButtonParams = AppBarButton_objectSpread({
      class: theme.classNames(className, styles.root.className),
      style: styles.root.style
    }, event);

    return h(PseudoClasses, {
      props: {
        props: AppBarButton_objectSpread({}, appBarButtonParams, {}, this.$props)
      }
    }, [h("div", AppBarButton_objectSpread({}, appBarButtonParams), [h(components_Icon, {
      props: {
        styles: inlineStyles.icon
      }
    }, icon), labelPosition !== "collapsed" && h("p", {
      style: styles.label.style,
      class: styles.label.className
    }, label)])]);
  }
});

function getStyles(AppBarButtonButton) {
  var theme = AppBarButtonButton.context.theme,
      labelPosition = AppBarButtonButton.labelPosition,
      iconStyle = AppBarButtonButton.iconStyle,
      hoverStyle = AppBarButtonButton.hoverStyle,
      styles = AppBarButtonButton.styles;
  var prefixStyle = theme.prefixStyle;
  var flexDirection = {
    bottom: "column",
    right: "row",
    left: "row-reverse"
  };
  var isRight = labelPosition === "right";
  return {
    root: prefixStyle(AppBarButton_objectSpread({
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: "none",
      display: "flex",
      flexDirection: flexDirection[labelPosition],
      alignItems: "center",
      justifyContent: "flex-start",
      flex: "0 0 auto",
      height: "100%",
      padding: "0 10px",
      maxWidth: isRight ? 120 : 72,
      cursor: "default",
      transition: "all .25s",
      "&:hover": hoverStyle || {
        background: theme.listAccentLow
      }
    }, styles)),
    label: {
      lineHeight: isRight ? void 0 : 1,
      height: isRight ? void 0 : 28,
      fontSize: 12,
      width: "100%",
      textAlign: "center",
      textOverflow: "ellipsis",
      overflow: "hidden"
    },
    icon: prefixStyle(AppBarButton_objectSpread({
      width: 48,
      height: 48,
      lineHeight: "48px",
      fontSize: 18
    }, iconStyle))
  };
}
// CONCATENATED MODULE: ./src/components/AppBarButton/index.js



AppBarButton.install = function (Vue) {
  Vue.component(AppBarButton.name, AppBarButton);
};

/* harmony default export */ var components_AppBarButton = (AppBarButton);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/components/Toast/Toast.js









function Toast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Toast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Toast_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Toast_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var Toast = ({
  name: "Toast",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    description: {
      type: [String, Array]
    },
    closeDelay: Number,
    showCloseIcon: {
      type: Boolean,
      default: false
    },
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      h: null,
      toastId: null,
      hiddenTimer: null,
      closeTimer: null,
      showToast: this.value
    };
  },
  watch: {
    value: function value(v) {
      this.showToast = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var theme = this.context.theme;
    theme.addToast(this.trueRender(), function (toastId) {
      _this.toastId = toastId;

      _this.addCloseDelay();
    });
  },
  updated: function updated() {
    var _this2 = this;

    if (this.toastId !== void 0) {
      this.context.theme.updateToast(this.toastId, this.trueRender());
    }

    if (!this.customAnimateElm) {
      this.customAnimateElm = this.$refs.customAnimate.$el;
    }

    var style = this.customAnimateElm.style;

    if (this.showToast && this.customAnimateElm && style) {
      Object.assign(style, {
        height: "auto",
        margin: "10px 0"
      });
      clearTimeout(this.hiddenTimer);
    } else if (!this.showToast && this.customAnimateElm && style) {
      this.hiddenTimer = setTimeout(function () {
        Object.assign(style, {
          height: "0px",
          margin: "0px"
        });
        clearTimeout(_this2.hiddenTimer);
      }, 250);
    }

    this.addCloseDelay();
  },
  destroyed: function destroyed() {
    var deleteToast = this.context.theme.deleteToast;
    deleteToast(this.toastId);
    clearTimeout(this.hiddenTimer);
    clearTimeout(this.closeTimer);
  },
  methods: {
    addCloseDelay: function addCloseDelay() {
      var _this3 = this;

      clearTimeout(this.closeTimer);
      var closeDelay = this.closeDelay;

      if (closeDelay !== void 0 && this.showToast) {
        this.closeTimer = setTimeout(function () {
          _this3.toggleShowToast(false);
        }, closeDelay);
      }
    },
    toggleShowToast: function toggleShowToast(showToast) {
      this.$emit("input", showToast);
    },
    trueRender: function trueRender() {
      var title = this.title,
          description = this.description,
          showCloseIcon = this.showCloseIcon,
          className = this.className,
          h = this.h,
          toggleShowToast = this.toggleShowToast;
      var theme = this.context.theme;
      var styles = Toast_getStyles(this);
      var styleClasses = theme.prepareStyles({
        className: "toast",
        styles: styles
      });
      var _this$$slots = this.$slots,
          _this$$slots$logoNode = _this$$slots.logoNode,
          logoNode = _this$$slots$logoNode === void 0 ? [] : _this$$slots$logoNode,
          vNodes = _this$$slots.default;
      return h(CustomAnimate, {
        props: Toast_objectSpread({}, slideRightInProps, {
          appearAnimate: false,
          wrapperStyle: Toast_objectSpread({}, styles.root)
        }),
        ref: "customAnimate"
      }, [h("div", {
        style: styleClasses.wrapper.style,
        class: theme.classNames(styleClasses.wrapper.className, className)
      }, [h("div", {
        style: styleClasses.card.style,
        class: styleClasses.card.className
      }, [].concat(_toConsumableArray(logoNode), [h("span", {
        style: styleClasses.descContent.style,
        class: styleClasses.descContent.className
      }, [h("p", {
        style: styleClasses.title.style,
        class: styleClasses.title.className
      }, title), typeof description === "string" ? h("p", {
        style: styleClasses.description.style,
        class: styleClasses.description.className
      }, description) : description && description.map(function (desc, index) {
        return h("p", {
          key: index,
          style: styleClasses.description.style,
          class: styleClasses.description.className
        }, desc);
      })])])), showCloseIcon ? h(components_Icon, {
        props: {
          hoverStyle: {
            color: theme.baseHigh
          },
          styles: styles.closeIcon
        },
        on: {
          click: function click() {
            toggleShowToast(false);
          }
        }
      }, "ClearLegacy") : null, vNodes])]);
    }
  },
  render: function render(h) {
    this.h = h;
    return null;
  }
});

function Toast_getStyles(Toast) {
  var theme = Toast.context.theme,
      showCloseIcon = Toast.showCloseIcon,
      showToast = Toast.showToast,
      styles = Toast.styles;
  var prefixStyle = theme.prefixStyle;
  return {
    root: {
      display: "inherit",
      overflow: "hidden",
      transition: "transform .75s, opacity .75s",
      margin: "10px 0",
      opacity: showToast ? 1 : 0.5,
      transform: "translate3d(".concat(showToast ? 0 : "100%", ", 0, 0)")
    },
    wrapper: prefixStyle(Toast_objectSpread({
      width: 320,
      padding: 10,
      position: "relative",
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: theme.chromeLow,
      border: "1px solid ".concat(theme.listLow),
      pointerEvents: "all",
      flex: "0 0 auto",
      overflow: "hidden",
      height: "auto"
    }, styles)),
    closeIcon: {
      fontSize: 12,
      position: "absolute",
      top: 10,
      right: 10,
      cursor: "pointer"
    },
    card: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: 18,
      lineHeight: 1.6
    }),
    descContent: {
      marginLeft: 10,
      marginRight: showCloseIcon ? 16 : 0,
      width: "100%"
    },
    title: {
      fontSize: 14,
      color: theme.baseHigh,
      lineHeight: 1.6
    },
    description: {
      fontSize: 12,
      color: theme.baseMedium,
      lineHeight: 1.4
    }
  };
}
// CONCATENATED MODULE: ./src/components/Toast/index.js



Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast);
};

/* harmony default export */ var components_Toast = (Toast);
// CONCATENATED MODULE: ./src/components/Separator/Separator.js








function Separator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Separator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Separator_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Separator_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var SeparatorProps = {
  direction: {
    type: String,
    default: "row",
    validator: function validator(value) {
      return ["row", "column"].includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  styles: Object
};
/* harmony default export */ var Separator = ({
  name: "Separator",
  props: Separator_objectSpread({}, SeparatorProps),
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var direction = this.direction,
        styles = this.styles,
        className = this.className;
    var isColumn = direction === "column";
    var theme = this.context.theme;
    var styleClasses = theme.prepareStyle({
      style: theme.prefixStyle(Separator_objectSpread({
        display: isColumn ? "inline-block" : "block",
        flex: "0 0 auto",
        width: isColumn ? 1 : "100%",
        height: isColumn ? "100%" : 1,
        background: theme.baseLow,
        margin: "0 auto"
      }, styles)),
      className: "separator",
      extendsClassName: className
    });
    return h("span", {
      style: styleClasses.style,
      class: styleClasses.className
    });
  }
});
// CONCATENATED MODULE: ./src/components/Separator/index.js




Separator.install = function (Vue) {
  Vue.component(Separator.name, Separator);
};

/* harmony default export */ var components_Separator = (Separator);
// CONCATENATED MODULE: ./src/components/AppBarSeparator/AppBarSeparator.js








function AppBarSeparator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppBarSeparator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppBarSeparator_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppBarSeparator_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var AppBarSeparator = ({
  name: "AppBarSeparator",
  props: AppBarSeparator_objectSpread({}, SeparatorProps, {
    direction: {
      type: String,
      default: "column",
      validator: function validator(value) {
        return ["row", "column"].includes(value);
      }
    }
  }),
  render: function render(h) {
    var direction = this.direction,
        styles = this.styles;
    return h(components_Separator, {
      props: {
        direction: direction,
        styles: AppBarSeparator_objectSpread({
          margin: "10px 0"
        }, styles)
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/AppBarSeparator/index.js



AppBarSeparator.install = function (Vue) {
  Vue.component(AppBarSeparator.name, AppBarSeparator);
};

/* harmony default export */ var components_AppBarSeparator = (AppBarSeparator);
// CONCATENATED MODULE: ./src/components/CheckBox/CheckBox.js









function CheckBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CheckBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CheckBox_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CheckBox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var CheckBox_CheckBox = ({
  name: "CheckBox",
  props: {
    value: {
      type: Boolean,
      default: null
    },
    labelPosition: {
      type: String,
      default: "right",
      validator: function validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    size: {
      type: [String, Number],
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    background: String,
    styles: Object
  },
  data: function data() {
    return {
      checked: this.value
    };
  },
  watch: {
    value: function value(v) {
      this.checked = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    toggleChecked: function toggleChecked() {
      if (!this.disabled) {
        var checked = !this.value;
        this.checked = checked;
        this.$emit("input", checked);
      }
    }
  },
  render: function render(h) {
    var label = this.label,
        disabled = this.disabled,
        toggleChecked = this.toggleChecked;
    var theme = this.context.theme;
    var inlineStyles = CheckBox_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "checkbox",
      styles: inlineStyles
    });
    var checkBoxStyles = {
      style: styleClasses.iconParent.style,
      class: styleClasses.iconParent.className
    };
    var haveLabel = label !== void 0;
    var checkbox = h(PseudoClasses, {
      props: {
        props: CheckBox_objectSpread({}, checkBoxStyles, {}, this.$props)
      },
      attrs: {
        disabled: disabled
      }
    }, [h("div", CheckBox_objectSpread({}, checkBoxStyles), [h(components_Icon, {
      props: {
        styles: inlineStyles.icon
      }
    }, "CheckMarkZeroWidthLegacy")])]);
    return h("div", {
      class: styleClasses.wrapper.className,
      style: styleClasses.wrapper.style,
      on: {
        click: function click() {
          toggleChecked();
        }
      }
    }, [haveLabel ? h("div", {
      class: styleClasses.root.className,
      style: styleClasses.root.style
    }, [checkbox, h("span", {
      class: styleClasses.label.className,
      style: styleClasses.label.style
    }, label)]) : checkbox]);
  }
});

function CheckBox_getStyles(CheckBox) {
  var context = CheckBox.context,
      style = CheckBox.style,
      size = CheckBox.size,
      disabled = CheckBox.disabled,
      labelPosition = CheckBox.labelPosition,
      background = CheckBox.background,
      checked = CheckBox.checked;
  var theme = context.theme;
  var checkedIsNull = checked === null;
  var iconParentBase = theme.prefixStyle({
    transition: "all .25s",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.altHigh,
    border: "2px solid ".concat(theme.baseMediumHigh),
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    background: background || "none",
    cursor: "default",
    overflow: "hidden"
  });
  var iconParentHover = {
    border: "2px solid ".concat(theme.baseHigh)
  };
  var iconParent;

  switch (checked) {
    case true:
      {
        iconParent = CheckBox_objectSpread({}, iconParentBase, {
          border: disabled ? "2px solid ".concat(theme.baseLow) : "2px solid ".concat(theme.accent),
          "&:hover": disabled ? void 0 : iconParentHover,
          "&:disabled": {
            border: "2px solid ".concat(theme.baseLow)
          }
        });
        break;
      }

    case false:
      {
        iconParent = CheckBox_objectSpread({}, iconParentBase, {
          border: disabled ? "2px solid ".concat(theme.baseLow) : "2px solid ".concat(theme.baseMediumHigh),
          "&:hover": disabled ? void 0 : iconParentHover,
          "&:disabled": {
            border: "2px solid ".concat(theme.baseLow)
          }
        });
        break;
      }

    case null:
      {
        iconParent = CheckBox_objectSpread({}, iconParentBase, {
          border: disabled ? "2px solid ".concat(theme.baseLow) : "2px solid ".concat(theme.baseMediumHigh),
          "&:hover": disabled ? void 0 : iconParentHover,
          "&:disabled": {
            border: "2px solid ".concat(theme.baseLow)
          }
        });
        break;
      }

    default:
      {
        break;
      }
  }

  var leftLabelPosition = labelPosition === "left";
  return {
    wrapper: theme.prefixStyle(CheckBox_objectSpread({
      display: "inline-block",
      verticalAlign: "middle"
    }, style)),
    root: theme.prefixStyle({
      display: "flex",
      flex: "0 0 auto",
      justifyContent: leftLabelPosition ? "flex-end" : "flex-start",
      flexDirection: leftLabelPosition ? "row-reverse" : "row",
      alignItems: "center"
    }),
    iconParent: iconParent,
    icon: theme.prefixStyle({
      transition: "all .25s",
      color: disabled ? checkedIsNull ? "transparent" : theme.baseLow : checkedIsNull ? theme.accent : "#fff",
      flex: "0 0 auto",
      padding: 0,
      margin: 0,
      width: size,
      height: size,
      fontSize: 18,
      transform: checked ? "scale(1)" : checkedIsNull ? "scale(0.6125)" : "scale(0)",
      background: disabled ? checkedIsNull ? theme.baseLow : void 0 : theme.accent
    }),
    label: theme.prefixStyle(_defineProperty({
      color: disabled ? theme.baseLow : theme.baseMediumHigh
    }, "margin".concat(leftLabelPosition ? "Right" : "Left"), 8))
  };
}
// CONCATENATED MODULE: ./src/components/CheckBox/index.js



CheckBox_CheckBox.install = function (Vue) {
  Vue.component(CheckBox_CheckBox.name, CheckBox_CheckBox);
};

/* harmony default export */ var components_CheckBox = (CheckBox_CheckBox);
// CONCATENATED MODULE: ./src/components/Link/Link.js






function Link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Link_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Link_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var Link = ({
  name: "Link",
  props: {
    styles: Object,
    className: String,
    href: String,
    target: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var styles = this.styles,
        className = this.className,
        href = this.href,
        target = this.target;
    var theme = this.context.theme;
    var inlineStyle = theme.prefixStyle(Link_objectSpread({
      fontSize: 14,
      color: theme.accent,
      cursor: "pointer",
      textDecoration: "none",
      transition: "all .25s 0s ease-in-out",
      background: "none",
      "&:hover": {
        color: theme.baseMedium
      }
    }, styles));
    var styleClasses = theme.prepareStyle({
      className: "link",
      style: inlineStyle,
      extendsClassName: className
    });
    var event = {
      on: bindEvent(this)
    };

    var linkParams = Link_objectSpread({
      style: styleClasses.style,
      class: styleClasses.className
    }, event);

    return h(PseudoClasses, {
      props: {
        props: Link_objectSpread({}, linkParams, {}, this.$props)
      }
    }, [h("a", {
      attrs: {
        href: href,
        target: target
      }
    }, this.$slots.default)]);
  }
});
// CONCATENATED MODULE: ./src/components/Link/index.js



Link.install = function (Vue) {
  Vue.component(Link.name, Link);
};

/* harmony default export */ var components_Link = (Link);
// CONCATENATED MODULE: ./src/components/IconButton/IconButton.js







function IconButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function IconButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { IconButton_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { IconButton_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var IconButton = ({
  name: "IconButton",
  props: {
    hoverStyle: Object,
    activeStyle: Object,
    size: {
      type: Number,
      default: 48
    },
    disabled: Boolean,
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var styles = this.styles,
        hoverStyle = this.hoverStyle,
        activeStyle = this.activeStyle,
        size = this.size,
        disabled = this.disabled;
    var theme = this.context.theme;
    var events = bindEvent(this);
    return h(components_Icon, {
      props: {
        styles: IconButton_objectSpread({
          display: "inline-block",
          fontFamily: theme.fonts.segoeMDL2Assets,
          verticalAlign: "middle",
          textAlign: "center",
          userSelect: "none",
          background: disabled ? theme.baseLow : "none",
          border: "none",
          outline: "none",
          fontSize: size / 2,
          width: size,
          height: size,
          cursor: "pointer",
          color: disabled ? theme.baseMedium : theme.baseHigh,
          padding: 0,
          flexShrink: 0,
          lineHeight: "".concat(size, "px"),
          transition: "background .25s ease-in-out"
        }, styles),
        hoverStyle: disabled ? void 0 : hoverStyle || {
          background: theme.listLow
        },
        activeStyle: disabled ? void 0 : activeStyle || {
          background: theme.baseLow
        }
      },
      on: events
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/IconButton/index.js



IconButton.install = function (Vue) {
  Vue.component(IconButton.name, IconButton);
};

/* harmony default export */ var components_IconButton = (IconButton);
// CONCATENATED MODULE: ./src/components/HyperLink/HyperLink.js






function HyperLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function HyperLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HyperLink_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HyperLink_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var HyperLink = ({
  name: "HyperLink",
  props: {
    href: String,
    target: String,
    styles: Object
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var href = this.href,
        target = this.target,
        styles = this.styles;
    return h(components_Link, {
      props: {
        styles: HyperLink_objectSpread({
          textDecoration: "underline"
        }, styles),
        href: href,
        target: target
      }
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/HyperLink/index.js



HyperLink.install = function (Vue) {
  Vue.component(HyperLink.name, HyperLink);
};

/* harmony default export */ var components_HyperLink = (HyperLink);
// CONCATENATED MODULE: ./src/components/Img/Placeholder.js






function Placeholder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Placeholder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Placeholder_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Placeholder_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Placeholder = ({
  name: "Placeholder",
  props: {
    styles: Object
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var styles = this.styles;
    var theme = this.context.theme;
    return h("div", {
      style: theme.prefixStyle(Placeholder_objectSpread({
        background: theme.chromeMedium,
        padding: "20px",
        display: "inline-block",
        verticalAlign: "middle",
        cursor: "default"
      }, styles))
    }, [h(components_Icon, {
      props: {
        styles: {
          color: theme.baseMedium,
          fontSize: 80,
          verticalAlign: "middle",
          display: "block"
        },
        hoverStyle: {}
      }
    }, "Photo2")]);
  }
});
// CONCATENATED MODULE: ./src/components/Img/Img.js






function Img_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Img_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Img_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Img_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Img_Img = ({
  name: "Img",
  props: {
    useLazyLoad: Boolean,
    useDivContainer: Boolean,
    src: {
      type: String,
      require: true
    },
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      showEmptyImage: false
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    errorHandler: function errorHandler() {
      this.showEmptyImage = true;
    }
  },
  render: function render(h) {
    var useLazyLoad = this.useLazyLoad,
        useDivContainer = this.useDivContainer,
        styles = this.styles,
        src = this.src,
        errorHandler = this.errorHandler;
    var lazy = useLazyLoad && this.$root.$options.directives["lazy"] !== void 0;

    if (useLazyLoad && !lazy) {
      console.warn("please add vue-lazyload to dependencies");
    }

    var theme = this.context.theme;
    var placeholder = this.$slots.placeholder;
    var currPlaceholder = placeholder || h(Placeholder, {
      attrs: {
        src: src
      },
      props: {
        styles: styles
      }
    });
    var baseStyle = theme.prefixStyle(Img_objectSpread({
      background: "url(".concat(src, ") no-repeat center center / cover"),
      display: "inline-block",
      verticalAlign: "middle"
    }, styles));
    var Img;
    var on = {
      error: function error() {
        errorHandler();
      }
    };

    if (lazy) {
      Img = h("img", {
        style: baseStyle,
        directives: [{
          name: "lazy",
          value: src
        }],
        on: on
      });
    } else {
      Img = h("img", {
        attrs: {
          src: src
        },
        style: baseStyle,
        on: on
      });
    }

    var ImageOrDiv = useDivContainer ? h("div", {
      style: baseStyle
    }) : Img;

    if (!src || this.showEmptyImage) {
      return useLazyLoad ? currPlaceholder : null;
    }

    return ImageOrDiv;
  }
});
// CONCATENATED MODULE: ./src/components/Img/index.js



Img_Img.install = function (Vue) {
  Vue.component(Img_Img.name, Img_Img);
};

/* harmony default export */ var components_Img = (Img_Img);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-float.js
var es6_number_parse_float = __webpack_require__("5df2");

// CONCATENATED MODULE: ./src/components/Slider/Slider.js











function Slider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Slider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Slider_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Slider_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Slider = ({
  name: "Slider",
  props: {
    styles: Object,
    className: String,
    displayMode: {
      type: String,
      validator: function validator(value) {
        return ["vertical", "horizon"].includes(value);
      },
      default: "horizon"
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: Number,
      default: 2
    },
    height: {
      type: [String, Number],
      default: 24
    },
    width: {
      type: [String, Number]
    },
    controllerWidth: {
      type: Number,
      default: 8
    },
    showValueInfo: {
      type: Boolean,
      default: false
    },
    numberToFixed: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "all 0.25s"
    },
    throttleTimer: {
      type: Number,
      default: 120 / 1000
    },
    barBackground: String,
    barBackgroundImage: String,
    customControllerStyle: Object,
    useSimpleController: {
      type: Boolean,
      default: false
    },
    label: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  data: function data() {
    return {
      originBodyStyle: IS_NODE_ENV["a" /* default */] ? void 0 : Slider_objectSpread({}, document.body.style),
      currValue: this.value,
      valueRatio: this.value / (this.maxValue - this.minValue),
      throttleNow: null,
      throttleNowTimer: null,
      onChangedValueTimer: null,
      hovered: null,
      dragging: null
    };
  },
  watch: {
    value: function value(v) {
      this.currValue = v;
    }
  },
  methods: {
    handelMouseEnter: function handelMouseEnter() {
      this.hovered = true;
    },
    handelMouseLeave: function handelMouseLeave() {
      this.hovered = false;
    },
    handleDraggingStart: function handleDraggingStart(e) {
      e.preventDefault();
      Object.assign(document.body.style, {
        userSelect: "none",
        msUserSelect: "none",
        webkitUserSelect: "none",
        cursor: "default"
      });
      document.documentElement.addEventListener("mousemove", this.setValueByEvent);
      document.documentElement.addEventListener("touchmove", this.setValueByEvent);
      document.documentElement.addEventListener("mouseup", this.handleDragged);
      document.documentElement.addEventListener("touchend", this.handleDragged);
    },
    handleDragged: function handleDragged() {
      Object.assign(document.body.style, Slider_objectSpread({
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0,
        cursor: void 0
      }, this.originBodyStyle));

      if (this.dragging) {
        this.dragging = false;
      }

      document.documentElement.removeEventListener("mousemove", this.setValueByEvent);
      document.documentElement.removeEventListener("touchmove", this.setValueByEvent);
      document.documentElement.removeEventListener("mouseup", this.handleDragged);
      document.documentElement.removeEventListener("touchend", this.handleDragged);
    },
    setValueByEvent: function setValueByEvent(e, type) {
      var _this = this;

      var isTouchEvent = e.type.includes("touch");
      clearTimeout(this.onChangedValueTimer);
      var isDraggingEvent = e.type === "mousemove" || e.type === "touchmove";

      if (isDraggingEvent && !this.dragging) {
        e.preventDefault();
        this.dragging = true;
      }

      if (isDraggingEvent) {
        var nowTime = performance ? performance.now() : Date.now();

        if (!this.throttleNow || nowTime - this.throttleNow > this.throttleTimer) {
          clearTimeout(this.throttleNowTimer);
          this.throttleNow = nowTime;
        } else {
          this.throttleNowTimer = setTimeout(function () {
            _this.setValueByEvent(e, type);
          }, this.throttleTimer);
          return;
        }
      }

      var displayMode = this.displayMode,
          maxValue = this.maxValue,
          minValue = this.minValue,
          barBackground = this.barBackground,
          barBackgroundImage = this.barBackgroundImage,
          label = this.label,
          numberToFixed = this.numberToFixed,
          unit = this.unit;
      var isHorizonMode = displayMode === "horizon";
      var useCustomBackground = barBackground || barBackgroundImage;

      var _this$$refs$rootElm$g = this.$refs.rootElm.getBoundingClientRect(),
          left = _this$$refs$rootElm$g.left,
          width = _this$$refs$rootElm$g.width,
          bottom = _this$$refs$rootElm$g.bottom,
          height = _this$$refs$rootElm$g.height;

      var _ref = isTouchEvent ? e.changedTouches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var controllerClientRect = this.$refs.controllerElm.getBoundingClientRect();
      var controllerWidth = controllerClientRect.width;
      var controllerHeight = controllerClientRect.height;
      var valueRatio = isHorizonMode ? (clientX - left) / (width - controllerWidth) : -(clientY - bottom) / (height - controllerHeight);
      valueRatio = valueRatio < 0 ? 0 : valueRatio > 1 ? 1 : valueRatio;
      var currValue = minValue + (maxValue - minValue) * valueRatio;
      this.currValue = currValue;
      this.valueRatio = valueRatio;

      if (e.type === "click" || e.type === "touchstart") {
        this.currValue = currValue;
      } else {
        if (!useCustomBackground) {
          var barTransform = "translate".concat(isHorizonMode ? "X" : "Y", "(").concat((isHorizonMode ? valueRatio - 1 : 1 - valueRatio) * 100, "%)");
          Object.assign(this.$refs.barElm.style, {
            transform: barTransform,
            webKitTransform: barTransform,
            msTransform: barTransform,
            mozTransform: barTransform
          });
        }

        var transform = "translate".concat(isHorizonMode ? "X" : "Y", "(").concat((isHorizonMode ? valueRatio : 1 - valueRatio) * 100, "%)");
        Object.assign(this.$refs.controllerWrapperElm.style, {
          transform: transform,
          webKitTransform: transform,
          msTransform: transform,
          mozTransform: transform
        });
        if (label) this.$refs.labelElm.innerText = "".concat(currValue.toFixed(numberToFixed)).concat(unit);
      }

      this.$emit("changeValue", currValue);
      this.$emit("changeValueRatio", valueRatio);
      this.onChangedValueTimer = setTimeout(function () {
        _this.$emit("changedValue", currValue);

        _this.$emit("input", currValue);

        _this.$emit("changeValueRatio", valueRatio);
      }, 0);
    }
  },
  mounted: function mounted() {
    this.$refs.rootElm.addEventListener("touchstart", this.handleDraggingStart, false);
    this.$refs.rootElm.addEventListener("touchend", this.handleDragged, false);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.throttleNowTimer);
    clearTimeout(this.onChangedValueTimer);
    this.$refs.rootElm.removeEventListener("touchstart", this.handleDraggingStart, false);
    this.$refs.rootElm.removeEventListener("touchend", this.handleDragged, false);
  },
  render: function render(h) {
    var showValueInfo = this.showValueInfo,
        numberToFixed = this.numberToFixed,
        unit = this.unit,
        currValue = this.currValue,
        handelMouseEnter = this.handelMouseEnter,
        handelMouseLeave = this.handelMouseLeave,
        setValueByEvent = this.setValueByEvent,
        handleDraggingStart = this.handleDraggingStart,
        handleDragged = this.handleDragged;
    var theme = this.context.theme;
    var inlineStyles = Slider_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "slider",
      styles: inlineStyles
    });
    var normalRender = h("div", {
      ref: "rootElm",
      class: styleClasses.root.className,
      style: styleClasses.root.style,
      on: {
        mouseenter: handelMouseEnter,
        mouseleave: handelMouseLeave,
        click: setValueByEvent,
        touchStart: setValueByEvent,
        mousedown: handleDraggingStart,
        mouseup: handleDragged
      }
    }, [h("div", {
      class: styleClasses.barContainer.className,
      style: styleClasses.barContainer.style
    }, [h("div", {
      ref: "barElm",
      class: styleClasses.bar.className,
      style: styleClasses.bar.style
    })]), h("div", {
      ref: "controllerWrapperElm",
      class: styleClasses.controllerWrapper.className,
      style: styleClasses.controllerWrapper.style
    }, [h("div", {
      ref: "controllerElm",
      class: styleClasses.controller.className,
      style: styleClasses.controller.style
    })])]);
    return h("div", {
      class: styleClasses.wrapper.className,
      style: styleClasses.wrapper.style
    }, [showValueInfo ? h("div", {
      class: styleClasses.infoWrapper.className,
      style: styleClasses.infoWrapper.style
    }, [normalRender, h("span", {
      class: styleClasses.label.className,
      style: styleClasses.label.style,
      ref: "labelElm"
    }, "".concat(currValue.toFixed(numberToFixed)).concat(unit))]) : normalRender]);
  }
});

function Slider_getStyles(Slider) {
  var theme = Slider.context.theme,
      transition = Slider.transition,
      maxValue = Slider.maxValue,
      styles = Slider.styles,
      height = Slider.height,
      barHeight = Slider.barHeight,
      controllerWidth = Slider.controllerWidth,
      barBackground = Slider.barBackground,
      barBackgroundImage = Slider.barBackgroundImage,
      useSimpleController = Slider.useSimpleController,
      customControllerStyle = Slider.customControllerStyle,
      showValueInfo = Slider.showValueInfo,
      displayMode = Slider.displayMode,
      currValue = Slider.currValue,
      dragging = Slider.dragging,
      hovered = Slider.hovered;
  var prefixStyle = theme.prefixStyle;
  var isHorizonMode = displayMode === "horizon";
  var height2px = Number.parseFloat(height);
  var barHeight2px = Number.parseFloat(barHeight);
  var controllerWidth2px = Number.parseFloat(controllerWidth);
  var currTransition = dragging ? void 0 : transition || void 0;
  var useCustomBackground = barBackground || barBackgroundImage;
  var valueRatio = currValue / maxValue;
  return {
    wrapper: prefixStyle(Slider_objectSpread({
      width: isHorizonMode ? 320 : height2px,
      height: isHorizonMode ? height2px : 320,
      display: "inline-block",
      verticalAlign: "middle"
    }, styles)),
    root: prefixStyle({
      flex: showValueInfo ? "0 0 auto" : void 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: isHorizonMode ? "100%" : height2px,
      height: isHorizonMode ? height2px : "100%",
      cursor: "default",
      position: "relative"
    }),
    barContainer: {
      background: theme.baseLow,
      position: "absolute",
      width: isHorizonMode ? "100%" : barHeight,
      height: isHorizonMode ? barHeight : "100%",
      overflow: "hidden",
      left: isHorizonMode ? 0 : "calc(50% - ".concat(barHeight2px / 2, "px)"),
      top: isHorizonMode ? "calc(50% - ".concat(barHeight2px / 2, "px)") : 0
    },
    infoWrapper: prefixStyle({
      display: "flex",
      flexDirection: displayMode === "horizon" ? "row" : "column",
      alignItems: "center",
      height: isHorizonMode ? void 0 : "100%"
    }),
    bar: prefixStyle({
      transition: currTransition,
      background: useCustomBackground ? barBackground : theme.listAccentLow,
      backgroundImage: barBackgroundImage,
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      dynamicStyle: {
        transform: useCustomBackground ? void 0 : "translate".concat(isHorizonMode ? "X" : "Y", "(").concat((isHorizonMode ? valueRatio - 1 : 1 - valueRatio) * 100, "%)")
      }
    }),
    controllerWrapper: prefixStyle({
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      transition: currTransition,
      dynamicStyle: {
        transform: "translate".concat(isHorizonMode ? "X" : "Y", "(").concat((isHorizonMode ? valueRatio : 1 - valueRatio) * 100, "%)")
      }
    }),
    controller: prefixStyle(Slider_objectSpread({
      pointerEvents: "none",
      transition: currTransition,
      display: "inline-block",
      background: useSimpleController || dragging || hovered ? theme.baseHigh : theme.accent,
      borderRadius: controllerWidth2px / 2,
      width: isHorizonMode ? controllerWidth2px : height2px,
      height: isHorizonMode ? height2px : controllerWidth2px,
      float: "left",
      transform: "translate3d(".concat(isHorizonMode ? -controllerWidth2px / 2 : 0, "px, 0, 0)")
    }, customControllerStyle)),
    label: {
      flex: showValueInfo ? "0 0 auto" : void 0,
      display: "inline-block",
      marginLeft: 12,
      fontSize: height2px / 1.5,
      lineHeight: "".concat(height2px / 1.5, "px"),
      color: theme.baseMediumHigh
    }
  };
}
// CONCATENATED MODULE: ./src/components/Slider/index.js



Slider.install = function (Vue) {
  Vue.component(Slider.name, Slider);
};

/* harmony default export */ var components_Slider = (Slider);
// CONCATENATED MODULE: ./src/components/Toggle/Toggle.js







function Toggle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Toggle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Toggle_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Toggle_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var Toggle = ({
  name: "Toggle",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 18
    },
    label: String,
    background: String,
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      currToggled: this.value
    };
  },
  watch: {
    value: function value(v) {
      this.currToggled = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    toggleToggle: function toggleToggle() {
      var toggled = !this.value;
      this.currToggled = toggled;
      this.$emit("input", toggled);
    }
  },
  render: function render(h) {
    var className = this.className,
        label = this.label,
        toggleToggle = this.toggleToggle;
    var theme = this.context.theme;
    var styleClasses = theme.prepareStyles({
      styles: Toggle_getStyles(this),
      className: "toggle"
    });
    return h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className)
    }, [h("div", {
      style: styleClasses.wrapper.style,
      class: styleClasses.wrapper.className,
      on: {
        click: toggleToggle
      }
    }, [h("div", {
      style: styleClasses.button.style,
      class: styleClasses.button.className
    })]), label ? h("span", {
      style: styleClasses.label.style,
      class: styleClasses.label.className
    }, label) : void 0]);
  }
});

function Toggle_getStyles(Toggle) {
  var size = Toggle.size,
      background = Toggle.background,
      styles = Toggle.styles,
      currToggled = Toggle.currToggled;
  var theme = Toggle.context.theme;
  return {
    root: theme.prefixStyle(Toggle_objectSpread({
      display: "inline-block",
      verticalAlign: "middle",
      cursor: "default"
    }, styles)),
    wrapper: theme.prefixStyle({
      userSelect: "none",
      position: "relative",
      display: "inline-block",
      verticalAlign: "middle",
      boxSizing: "content-box",
      width: size * 2.5,
      height: size,
      background: currToggled ? theme.accent : background || "none",
      border: "".concat(size / 9, "px solid ").concat(currToggled ? theme.accent : theme.baseMediumHigh),
      borderRadius: size * 2,
      transition: "all .25s ease-in-out"
    }),
    button: theme.prefixStyle({
      transform: "translateX(".concat(currToggled ? size * 2.5 - size / 1.5 - size / 9 : size / 4.5, "px)"),
      flex: "0 0 auto",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      margin: "auto",
      width: size / 1.5,
      height: size / 1.5,
      borderRadius: size / 1.5,
      background: currToggled ? "#fff" : theme.baseMediumHigh,
      transition: "all .25s 0s ease-in-out"
    }),
    label: {
      marginLeft: size / 4,
      verticalAlign: "middle",
      fontSize: size / 1.5,
      lineHeight: "".concat(size / 1.5, "px")
    }
  };
}
// CONCATENATED MODULE: ./src/components/Toggle/index.js



Toggle.install = function (Vue) {
  Vue.component(Toggle.name, Toggle);
};

/* harmony default export */ var components_Toggle = (Toggle);
// CONCATENATED MODULE: ./src/components/TextBox/TextBox.js







function TextBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TextBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TextBox_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TextBox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var TextBox = ({
  name: "TextBox",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    hoverStyle: Object,
    focusStyle: Object,
    textBoxStyle: {
      type: Object,
      default: function _default() {
        return {
          fontSize: "inherit",
          outline: "none",
          transition: "all .25s"
        };
      }
    },
    placeholder: String,
    disabled: Boolean,
    background: {
      type: String,
      default: "none"
    },
    type: String,
    className: String,
    styles: Object,
    maxLength: Number
  },
  data: function data() {
    return {
      hovered: null,
      focused: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.hovered = false;
    },
    handleHover: function handleHover() {
      this.hovered = true;
    },
    handleUnHover: function handleUnHover() {
      this.hovered = false;
    },
    handleFocus: function handleFocus(e) {
      this.focused = true;
      this.$emit("focus", e);
    },
    handleBlur: function handleBlur(e) {
      this.focused = false;
      this.$emit("blur", e);
    },
    handleInput: function handleInput(e) {
      this.$emit("input", e.target.value);
    }
  },
  render: function render(h) {
    var value = this.value,
        placeholder = this.placeholder,
        type = this.type,
        styles = this.styles,
        className = this.className,
        textBoxStyle = this.textBoxStyle,
        background = this.background,
        maxLength = this.maxLength,
        disabled = this.disabled,
        handleClick = this.handleClick,
        handleFocus = this.handleFocus,
        handleBlur = this.handleBlur,
        handleHover = this.handleHover,
        handleUnHover = this.handleUnHover,
        handleInput = this.handleInput;
    var hovered = this.hovered,
        focused = this.focused;
    var children = this.$slots.default;
    var _this$$slots = this.$slots,
        leftNode = _this$$slots.leftNode,
        rightNode = _this$$slots.rightNode;
    var haveChild = leftNode || rightNode || children;
    var theme = this.context.theme;
    var currBackground = background === void 0 ? theme.altHigh : background;
    var hoverProps = {
      mouseenter: handleHover,
      mouseleave: handleUnHover
    };
    var rootWrapperStyle = {
      lineHeight: "32px",
      height: 32,
      width: 296,
      padding: !haveChild ? "0 8px" : 0,
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: focused ? "#000" : theme.baseHigh,
      background: focused ? "#fff" : currBackground || "none",
      boxShadow: focused ? "inset 0px 0px 0 2px ".concat(theme.accent) : hovered ? "inset 0px 0px 0 2px ".concat(theme.baseMedium) : "inset 0px 0px 0 2px ".concat(theme.baseLow),
      border: "none",
      transition: "all .25s"
    };
    var inlineStyles = {
      root: haveChild ? theme.prefixStyle(TextBox_objectSpread({}, rootWrapperStyle, {}, styles)) : {},
      input: theme.prefixStyle(TextBox_objectSpread({}, haveChild ? {
        paddingLeft: rightNode ? 8 : void 0,
        paddingRight: leftNode ? 8 : void 0,
        width: "100%",
        height: "100%",
        background: "none",
        border: "none",
        outline: "none",
        color: "inherit",
        transition: "all .25s"
      } : rootWrapperStyle, {}, haveChild ? void 0 : styles, {}, textBoxStyle))
    };
    var styleClasses = theme.prepareStyles({
      className: "text-box",
      styles: inlineStyles
    });
    var normalRender = h("input", {
      style: styleClasses.input.style,
      class: theme.classNames(className, styleClasses.input.className),
      on: TextBox_objectSpread({
        focus: handleFocus,
        blur: handleBlur,
        input: handleInput
      }, haveChild ? void 0 : hoverProps),
      domProps: {
        value: value,
        placeholder: placeholder,
        type: type,
        maxLength: maxLength,
        disabled: disabled
      },
      ref: "inputElm"
    });
    return haveChild ? h("div", {
      class: styleClasses.root.className,
      style: styleClasses.root.style,
      on: TextBox_objectSpread({
        click: handleClick
      }, hoverProps)
    }, [leftNode, normalRender, children, rightNode]) : normalRender;
  }
});
// CONCATENATED MODULE: ./src/components/TextBox/index.js



TextBox.install = function (Vue) {
  Vue.component(TextBox.name, TextBox);
};

/* harmony default export */ var components_TextBox = (TextBox);
// CONCATENATED MODULE: ./src/components/PasswordBox/PasswordBox.js







function PasswordBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PasswordBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PasswordBox_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PasswordBox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var PasswordBox = ({
  name: "PasswordBox",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: String,
    passwordBoxHeight: {
      type: Number,
      default: 32
    },
    defaultShowPassword: {
      type: Boolean,
      default: false
    },
    maxLength: Number
  },
  data: function data() {
    return {
      showPassword: this.defaultShowPassword
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    toggleShowPassword: function toggleShowPassword() {
      var showPassword = !this.showPassword;
      this.showPassword = showPassword;
      this.$emit("update:defaultShowPassword", showPassword);
    },
    handleInput: function handleInput(v) {
      this.$emit("input", v);
    }
  },
  render: function render(h) {
    var value = this.value,
        placeholder = this.placeholder,
        showPassword = this.showPassword,
        passwordBoxHeight = this.passwordBoxHeight,
        toggleShowPassword = this.toggleShowPassword,
        maxLength = this.maxLength,
        handleInput = this.handleInput;
    var theme = this.context.theme;
    var styleClasses = PasswordBox_getStyles(this);
    return h(components_TextBox, {
      props: {
        type: showPassword ? "text" : "password",
        styles: styleClasses.root,
        hoverStyle: {
          border: "2px solid ".concat(theme.accent)
        },
        value: value,
        placeholder: placeholder,
        maxLength: maxLength
      },
      on: {
        input: handleInput
      }
    }, [h(components_Icon, {
      slot: "rightNode",
      props: {
        hoverStyle: {
          color: "#fff",
          background: theme.accent
        },
        styles: theme.prefixStyle({
          width: passwordBoxHeight,
          height: passwordBoxHeight,
          fontSize: passwordBoxHeight / 2,
          lineHeight: "".concat(passwordBoxHeight, "px"),
          cursor: "pointer",
          background: "none",
          color: theme.baseHigh,
          flex: "0 0 auto",
          transition: "all .25s"
        })
      },
      on: {
        click: toggleShowPassword
      }
    }, "RevealPasswordLegacy")]);
  }
});

function PasswordBox_getStyles(PasswordBox) {
  var context = PasswordBox.context,
      styles = PasswordBox.styles,
      passwordBoxHeight = PasswordBox.passwordBoxHeight;
  var theme = context.theme;
  return {
    root: theme.prefixStyle(PasswordBox_objectSpread({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
      fontWeight: "lighter",
      fontSize: passwordBoxHeight / 2,
      padding: 0
    }, styles, {
      height: passwordBoxHeight
    }))
  };
}
// CONCATENATED MODULE: ./src/components/PasswordBox/index.js



PasswordBox.install = function (Vue) {
  Vue.component(PasswordBox.name, PasswordBox);
};

/* harmony default export */ var components_PasswordBox = (PasswordBox);
// CONCATENATED MODULE: ./src/components/RadioButton/RadioButton.js







function RadioButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RadioButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RadioButton_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RadioButton_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var RadioButton_rootStyle = {
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default"
};
/* harmony default export */ var RadioButton = ({
  name: "RadioButton",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 24
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    background: String,
    styles: Object,
    className: String,
    radioStyle: Object,
    radioCheckedStyle: Object,
    radioDotStyle: Object,
    radioDotCheckedStyle: Object
  },
  data: function data() {
    return {
      hovered: false,
      currChecked: this.value
    };
  },
  watch: {
    value: function value(v) {
      this.currChecked = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleClick: function handleClick() {
      var checked = !this.value;

      if (checked) {
        this.currChecked = checked;
        this.$emit("input", checked);
      }
    },
    handleMouseEnter: function handleMouseEnter() {
      this.hovered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.hovered = false;
    }
  },
  render: function render(h) {
    var disabled = this.disabled,
        label = this.label,
        className = this.className,
        handleClick = this.handleClick,
        handleMouseEnter = this.handleMouseEnter,
        handleMouseLeave = this.handleMouseLeave;
    var theme = this.context.theme;
    var inlineStyles = RadioButton_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "radio-button",
      styles: inlineStyles
    });
    var normalRender = h("div", {
      style: styleClasses.radioShape.style,
      class: styleClasses.radioShape.className,
      on: {
        click: disabled ? void 0 : handleClick,
        mouseenter: disabled ? void 0 : handleMouseEnter,
        mouseleave: disabled ? void 0 : handleMouseLeave
      }
    }, [h("div", {
      style: styleClasses.radioDot.style,
      class: styleClasses.radioDot.className
    })]);
    return h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className),
      attrs: {
        disabled: disabled
      }
    }, [label ? h("div", {
      style: styleClasses.label.style,
      class: styleClasses.label.className
    }, [normalRender, h("span", {
      style: styleClasses.labelText.style,
      class: styleClasses.labelText.className
    }, label)]) : normalRender]);
  }
});

function RadioButton_getStyles(RadioButton) {
  var currChecked = RadioButton.currChecked,
      styles = RadioButton.styles,
      size = RadioButton.size,
      disabled = RadioButton.disabled,
      radioStyle = RadioButton.radioStyle,
      radioCheckedStyle = RadioButton.radioCheckedStyle,
      radioDotStyle = RadioButton.radioDotStyle,
      radioDotCheckedStyle = RadioButton.radioDotCheckedStyle,
      hovered = RadioButton.hovered,
      theme = RadioButton.context.theme;
  var dotSize = size / 2.5;
  return {
    root: styles ? theme.prefixStyle(RadioButton_objectSpread({}, RadioButton_rootStyle, {}, styles)) : RadioButton_rootStyle,
    radioShape: theme.prefixStyle(RadioButton_objectSpread({
      position: "relative",
      flex: "0 0 auto",
      display: "inline-block",
      borderRadius: size,
      color: theme.altHigh,
      border: disabled ? "".concat(size / 12, "px solid ").concat(theme.baseLow) : "".concat(size / 12, "px solid ").concat(currChecked ? theme.accent : hovered ? theme.baseHigh : theme.baseMediumHigh),
      width: size,
      height: size,
      overflow: "hidden",
      transition: "all .25s ease-in-out"
    }, radioStyle, {}, currChecked ? radioCheckedStyle : void 0)),
    radioDot: theme.prefixStyle(RadioButton_objectSpread({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      background: disabled ? theme.baseLow : hovered ? theme.baseHigh : theme.baseMediumHigh,
      transition: "all .25s",
      borderRadius: dotSize,
      width: dotSize,
      height: dotSize,
      transform: "scale(".concat(currChecked ? 1 : 0, ")")
    }, radioDotStyle, {}, currChecked ? radioDotCheckedStyle : void 0)),
    label: theme.prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }),
    labelText: {
      fontSize: size / 2,
      lineHeight: "".concat(size, "px"),
      color: disabled ? theme.baseLow : theme.baseMediumHigh,
      marginLeft: size / 4,
      cursor: "text"
    }
  };
}
// CONCATENATED MODULE: ./src/components/RadioButton/index.js



RadioButton.install = function (Vue) {
  Vue.component(RadioButton.name, RadioButton);
};

/* harmony default export */ var components_RadioButton = (RadioButton);
// CONCATENATED MODULE: ./src/components/ListView/ListView.js







function ListView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ListView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ListView_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ListView_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var ListView = ({
  name: "ListView",
  props: {
    listItemStyle: Object,
    styles: Object,
    background: String,
    defaultFocusListIndex: Number
  },
  data: function data() {
    return {
      focusIndex: this.defaultFocusListIndex
    };
  },
  watch: {
    defaultFocusListIndex: function defaultFocusListIndex(v) {
      this.focusIndex = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    onChooseItem: function onChooseItem(index) {
      this.$emit("chooseItem", index);
    },
    getItemNode: function getItemNode(h, itemNode, index, itemStyles, disabled, focus, styles) {
      var theme = this.context.theme;
      var onChooseItem = this.onChooseItem,
          focusIndex = this.focusIndex;
      var isFocus = focus || focusIndex === index;
      var defaultBG = isFocus ? theme.listAccentLow : "none";
      var focusBG = isFocus ? theme.listAccentHigh : theme.useFluentDesign ? theme.acrylicTexture40.background : theme.listLow;
      var itemStyleClasses = theme.prepareStyle({
        className: "list-view-item",
        style: theme.prefixStyle(ListView_objectSpread({
          background: defaultBG,
          color: disabled ? theme.baseLow : theme.baseHigh,
          "&:hover": {
            background: focusBG
          },
          "&:active": {
            transform: "scale(0.99)"
          }
        }, itemStyles, {}, styles))
      });
      var event = {
        on: bindEvent(this)
      };

      var itemParams = ListView_objectSpread({
        style: itemStyleClasses.style,
        class: itemStyleClasses.className
      }, event);

      var vm = this;
      return h(PseudoClasses, {
        props: {
          props: ListView_objectSpread({}, itemParams, {}, this.$props)
        },
        attrs: {
          disabled: disabled
        },
        key: "".concat(index)
      }, [h("div", ListView_objectSpread({}, itemParams, {
        on: {
          click: function click(e) {
            vm.$emit("itemClick", e, index);
          },
          mousedown: function mousedown() {
            if (disabled === void 0) {
              onChooseItem(index);
            }
          }
        }
      }), [itemNode])]);
    }
  },
  render: function render(h) {
    var _this = this;

    var theme = this.context.theme;
    var listSource = this.$slots.default;
    var inlineStyles = ListView_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "list-view",
      styles: inlineStyles
    });
    return h("div", {
      style: styleClasses.root.style,
      class: styleClasses.root.className
    }, listSource.filter(function (item) {
      return item.tag !== void 0;
    }).map(function (listItem, index) {
      var itemStyles = inlineStyles.item;
      var componentOptions = listItem.componentOptions;
      var vNodeData = listItem.data;
      var disabled, styles, focus;

      if (componentOptions) {
        var props = componentOptions.propsData;

        if (props) {
          disabled = props.disabled;
          styles = props.styles;
          focus = props.focus;
        }
      }

      if (vNodeData) {
        focus = focus || vNodeData.attrs && vNodeData.attrs.focus !== void 0;
      }

      return _this.getItemNode(h, listItem, index, itemStyles, disabled, focus, styles);
    }));
  }
});

function ListView_getStyles(ListView) {
  var context = ListView.context,
      listItemStyle = ListView.listItemStyle,
      background = ListView.background,
      styles = ListView.styles;
  var theme = context.theme;
  return {
    root: theme.prefixStyle(ListView_objectSpread({
      width: 320,
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: 14,
      padding: "8px 0",
      color: theme.baseMediumHigh,
      border: "1px solid ".concat(theme.useFluentDesign ? theme.listLow : theme.altHigh),
      background: background || (theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow),
      transition: "all .25s"
    }, styles)),
    item: theme.prefixStyle(ListView_objectSpread({
      cursor: "default",
      padding: 8,
      width: "100%",
      transition: "all 0.25s"
    }, listItemStyle))
  };
}
// CONCATENATED MODULE: ./src/components/ListView/index.js



ListView.install = function (Vue) {
  Vue.component(ListView.name, ListView);
};

/* harmony default export */ var components_ListView = (ListView);
// CONCATENATED MODULE: ./src/common/AddBlurEvent.js





var AddBlurEvent_AddBlurEvent = function AddBlurEvent() {
  var _this = this;

  classCallCheck_classCallCheck(this, AddBlurEvent);

  _defineProperty(this, "clickListener", null);

  _defineProperty(this, "keydownListener", null);

  _defineProperty(this, "cleanEvent", function () {
    if (_this.clickListener) {
      document.documentElement.removeEventListener("click", _this.clickListener);
      _this.clickListener = null;
    }

    if (_this.keydownListener) {
      document.documentElement.removeEventListener("keydown", _this.keydownListener);
      _this.keydownListener = null;
    }
  });

  _defineProperty(this, "setConfig", function (config) {
    var addListener = config.addListener,
        blurCallback = config.blurCallback,
        clickIncludeElm = config.clickIncludeElm,
        clickExcludeElm = config.clickExcludeElm,
        blurKeyCodes = config.blurKeyCodes;

    if (addListener) {
      if (!_this.clickListener) {
        _this.clickListener = function (e) {
          if (clickIncludeElm) {
            if (Array.isArray(clickIncludeElm) ? clickIncludeElm.some(function (elm) {
              return elm === e.target;
            }) : clickIncludeElm === e.target) {
              _this.cleanEvent();

              blurCallback(e);
            }

            return;
          }

          if (clickExcludeElm) {
            if (Array.isArray(clickExcludeElm) ? clickExcludeElm.some(function (elm) {
              return elm.contains(e.target);
            }) : clickExcludeElm.contains(e.target)) {
              return;
            } else {
              _this.cleanEvent();

              blurCallback(e);
            }
          }
        }; //变更执行顺序


        setTimeout(function () {
          document.documentElement.addEventListener("click", _this.clickListener);
        }, 0);
      }

      if (!_this.keydownListener && blurKeyCodes) {
        _this.keydownListener = function (e) {
          var keyCode = e.keyCode;

          if (blurKeyCodes.includes(keyCode)) {
            blurCallback(e);
          }

          _this.cleanEvent();
        };

        document.documentElement.addEventListener("keydown", _this.keydownListener);
      }
    } else {
      _this.cleanEvent();
    }
  });
};


// CONCATENATED MODULE: ./src/components/CommandBar/CommandBar.js











function CommandBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CommandBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CommandBar_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CommandBar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var CommandBar = ({
  name: "CommandBar",
  props: {
    contentStyle: Object,
    content: String,
    labelPosition: {
      type: String,
      default: "bottom",
      validator: function validator(value) {
        return ["right", "bottom", "collapsed"].includes(value);
      }
    },
    verticalPosition: {
      type: String,
      default: "top",
      validator: function validator(value) {
        return ["top", "bottom"].includes(value);
      }
    },
    flowDirection: {
      type: String,
      validator: function validator(value) {
        return ["row", "row-reverse"].includes(value);
      }
    },
    expanded: {
      type: Boolean,
      default: false
    },
    isMinimal: Boolean,
    background: String,
    styles: Object,
    className: String
  },
  watch: {
    expanded: function expanded(v) {
      this.currExpanded = v;
    }
  },
  data: function data() {
    return {
      currExpanded: this.expanded,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    toggleExpanded: function toggleExpanded() {
      var expanded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.currExpanded;
      this.currExpanded = expanded;
      this.$emit("update:expanded", expanded);
    },
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.currExpanded,
        clickExcludeElm: this.$el,
        blurCallback: function blurCallback() {
          _this.toggleExpanded(false);
        },
        blurKeyCodes: [27]
      });
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var content = this.content,
        labelPosition = this.labelPosition,
        expanded = this.expanded,
        isMinimal = this.isMinimal,
        currExpanded = this.currExpanded,
        toggleExpanded = this.toggleExpanded;
    var _this$$slots = this.$slots,
        contentNode = _this$$slots.contentNode,
        primaryCommands = _this$$slots.primaryCommands,
        secondaryCommands = _this$$slots.secondaryCommands;
    var theme = this.context.theme;
    var defaultHeight = isMinimal ? 24 : 48;
    var inlineStyles = CommandBar_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "command-bar",
      styles: inlineStyles
    });
    var primaryCommandsNode = isMinimal && !currExpanded ? [] : primaryCommands.filter(function (child) {
      if (child.componentOptions) {
        return child.componentOptions.tag === components_AppBarButton.name || child.componentOptions.tag === components_AppBarSeparator.name;
      }
    }).map(function (child, index) {
      Object.assign(child.componentOptions.propsData, {
        labelPosition: labelPosition,
        key: index,
        styles: child.componentOptions.tag === components_AppBarSeparator.name ? {
          height: 24
        } : void 0
      });
      return child;
    });
    var secondaryCommandsNode = secondaryCommands.map(function (itemNode) {
      if (itemNode.componentOptions) {
        if (itemNode.componentOptions.tag === components_AppBarSeparator.name) {
          Object.assign(itemNode.componentOptions.propsData, {
            disabled: true,
            direction: "row",
            styles: {
              padding: "0 8px"
            }
          });
        } else {
          var clickFunc = function clickFunc() {
            var itemClick = itemNode.data.on.click;

            if (itemClick) {
              itemClick();
            }

            toggleExpanded();
          };

          Object.assign(itemNode.data.on, {
            click: clickFunc
          });
        }
      }

      return itemNode;
    });
    return h("div", {
      style: styleClasses.wrapper.style,
      class: styleClasses.wrapper.className
    }, [h("div", {
      style: styleClasses.root.style,
      class: styleClasses.root.className
    }, [(content !== void 0 || contentNode !== void 0) && h("div", {
      style: styleClasses.content.style,
      class: styleClasses.content.className
    }, [content || contentNode]), h("div", {
      style: styleClasses.commands.style,
      class: styleClasses.commands.className
    }, [].concat(_toConsumableArray(primaryCommandsNode), [h(components_AppBarButton, {
      props: {
        styles: inlineStyles.moreLegacy,
        labelPosition: "bottom",
        iconStyle: {
          maxWidth: defaultHeight,
          height: defaultHeight,
          lineHeight: isMinimal ? expanded ? "48px" : "24px" : "48px"
        },
        icon: "MoreLegacy"
      },
      on: {
        click: toggleExpanded
      }
    }), secondaryCommands && h(components_ListView, {
      props: {
        styles: inlineStyles.secondaryCommands
      }
    }, secondaryCommandsNode)]))])]);
  }
});

function CommandBar_getStyles(CommandBar) {
  var theme = CommandBar.context.theme,
      styles = CommandBar.styles,
      flowDirection = CommandBar.flowDirection,
      labelPosition = CommandBar.labelPosition,
      content = CommandBar.content,
      contentStyle = CommandBar.contentStyle,
      isMinimal = CommandBar.isMinimal,
      verticalPosition = CommandBar.verticalPosition,
      background = CommandBar.background,
      currExpanded = CommandBar.currExpanded;
  var _CommandBar$$slots = CommandBar.$slots,
      contentNode = _CommandBar$$slots.contentNode,
      primaryCommands = _CommandBar$$slots.primaryCommands;
  var prefixStyle = theme.prefixStyle;
  var inBottom = verticalPosition !== "top";
  var notChangeHeight = labelPosition !== "bottom";
  var haveContent = content || contentNode;
  var transition = "all .125s ease-in-out";
  var isReverse = flowDirection === "row-reverse";
  var defaultHeight = isMinimal ? 24 : 48;
  var expandedHeight = 72;
  var changedHeight;

  if (isMinimal) {
    changedHeight = currExpanded ? notChangeHeight ? 48 : 72 : defaultHeight;
  } else {
    changedHeight = currExpanded && !notChangeHeight && primaryCommands ? expandedHeight : defaultHeight;
  }

  return {
    wrapper: theme.prefixStyle(CommandBar_objectSpread({
      height: inBottom ? "auto" : defaultHeight,
      display: "block",
      zIndex: currExpanded ? theme.zIndex.commandBar : void 0
    }, styles)),
    root: prefixStyle({
      position: "relative",
      display: "flex",
      flexDirection: flowDirection || (haveContent ? "row" : "row-reverse"),
      alignItems: "flex-start",
      justifyContent: haveContent ? "space-between" : "flex-start",
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: background || (theme.useFluentDesign ? theme.listLow : theme.altHigh),
      height: changedHeight,
      transition: transition
    }),
    content: prefixStyle(CommandBar_objectSpread({
      height: defaultHeight,
      lineHeight: "".concat(defaultHeight, "px"),
      paddingLeft: 10,
      paddingRight: 10
    }, contentStyle)),
    commands: prefixStyle({
      display: "flex",
      flexDirection: flowDirection,
      alignItems: "flex-start",
      height: "100%"
    }),
    moreLegacy: theme.prefixStyle({
      height: changedHeight,
      transition: transition
    }),
    secondaryCommands: {
      width: "auto",
      maxWidth: 240,
      zIndex: theme.zIndex.commandBar,
      position: "absolute",
      right: isReverse ? void 0 : 0,
      left: isReverse ? 0 : void 0,
      top: inBottom ? void 0 : changedHeight,
      bottom: inBottom ? changedHeight : void 0,
      transform: "translate3d(0, ".concat(currExpanded ? 0 : -8, "px, 0)"),
      opacity: currExpanded ? 1 : 0,
      pointerEvents: currExpanded ? "all" : "none"
    }
  };
}
// CONCATENATED MODULE: ./src/components/CommandBar/index.js



CommandBar.install = function (Vue) {
  Vue.component(CommandBar.name, CommandBar);
};

/* harmony default export */ var components_CommandBar = (CommandBar);
// CONCATENATED MODULE: ./src/components/AutoSuggestBox/AutoSuggestBox.js







function AutoSuggestBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AutoSuggestBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AutoSuggestBox_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AutoSuggestBox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var AutoSuggestBox = ({
  name: "AutoSuggestBox",
  props: {
    value: {
      require: true
    },
    searchAction: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    iconSize: {
      type: Number,
      default: 32
    },
    background: {
      type: String,
      default: "none"
    },
    placeholder: String,
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      typing: void 0,
      showListSource: void 0,
      focusListSourceIndex: void 0,
      inputTimer: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleInput: function handleInput(value) {
      var _this = this;

      this.$emit("input", value);
      clearTimeout(this.inputTimer);
      this.inputTimer = setTimeout(function () {
        if (value) {
          _this.typing = true;
          _this.showListSource = true;
        } else {
          _this.typing = false;
          _this.showListSource = false;
        }
      }, 150);
    },
    handleShowListSource: function handleShowListSource() {
      this.showListSource = true;
    },
    toggleShowListSource: function toggleShowListSource() {
      this.showListSource = !this.showListSource;
    },
    handleButtonAction: function handleButtonAction() {
      if (this.typing) {
        this.handleInput("");
        this.typing = false;
        this.showListSource = false;
        this.$refs.textBox.$refs.inputElm.focus();
      } else {
        this.searchAction(this.value);
      }
    },
    handleChooseItem: function handleChooseItem(index) {
      var _this2 = this;

      var chooseTimer = setTimeout(function () {
        _this2.toggleShowListSource(false);

        clearTimeout(chooseTimer);
      }, 250);
      var vNode = this.$slots.default.filter(function (item) {
        return item.tag !== void 0;
      })[index];
      var data = vNode.data;

      if (data && data.attrs) {
        this.handleInput(data.attrs.value);
      }
    },
    handleInputKeyDown: function handleInputKeyDown(e) {
      var keyCode = e.keyCode;
      var focusListSourceIndex = this.focusListSourceIndex,
          showListSource = this.showListSource,
          searchAction = this.searchAction;
      var listSourceLength = this.$slots.default != null ? this.$slots.default.filter(function (item) {
        return item.tag !== void 0;
      }).length : 0;

      if (showListSource) {
        switch (keyCode) {
          case 38:
            {
              if (focusListSourceIndex === void 0) {
                this.focusListSourceIndex = 0;
              } else {
                var temp = focusListSourceIndex - 1;

                if (temp >= 0) {
                  this.focusListSourceIndex = temp;
                }
              }

              break;
            }

          case 40:
            {
              if (focusListSourceIndex === void 0) {
                this.focusListSourceIndex = 0;
              } else {
                var _temp = focusListSourceIndex + 1;

                if (_temp < listSourceLength) {
                  this.focusListSourceIndex = _temp;
                }
              }

              break;
            }

          case 13:
            {
              if (focusListSourceIndex === void 0) {
                searchAction(this.value);
                this.showListSource = false;
              } else {
                this.handleChooseItem(focusListSourceIndex);
                this.focusListSourceIndex = void 0;
              }

              break;
            }

          default:
            {
              break;
            }
        }
      } else {
        if (keyCode === 13) {
          searchAction(this.value);
        }
      }
    },
    checkLayerClick: function checkLayerClick(e) {
      if (!this.$refs.textBox.$el.contains(e.target)) {
        this.showListSource = false;
      }
    },
    checkLayerKeydown: function checkLayerKeydown(e) {
      var keyCode = e.keyCode;

      if (this.$refs.textBox.$refs.inputElm.matches(":focus") && keyCode === 27) {
        this.showListSource = false;
      }
    },
    itemClick: function itemClick(e, index) {
      this.$emit("itemClick", e, index);
    }
  },
  mounted: function mounted() {
    document.documentElement.addEventListener("click", this.checkLayerClick);
    document.documentElement.addEventListener("keydown", this.checkLayerKeydown);
  },
  destroyed: function destroyed() {
    document.documentElement.removeEventListener("click", this.checkLayerClick);
    document.documentElement.removeEventListener("keydown", this.checkLayerKeydown);
  },
  render: function render(h) {
    var value = this.value,
        placeholder = this.placeholder,
        className = this.className,
        background = this.background,
        typing = this.typing,
        focusListSourceIndex = this.focusListSourceIndex,
        handleButtonAction = this.handleButtonAction,
        handleInput = this.handleInput,
        handleShowListSource = this.handleShowListSource,
        handleInputKeyDown = this.handleInputKeyDown,
        handleChooseItem = this.handleChooseItem,
        itemClick = this.itemClick;
    var theme = this.context.theme;
    var inlineStyles = AutoSuggestBox_getStyles(this);
    var styleClasses = theme.prepareStyles({
      styles: inlineStyles,
      className: "autosuggest-box"
    });
    return h(components_TextBox, {
      props: {
        styles: inlineStyles.root,
        className: theme.classNames(className, styleClasses.root.className),
        background: background,
        placeholder: placeholder,
        value: value
      },
      on: {
        click: handleShowListSource,
        input: handleInput
      },
      nativeOn: {
        keydown: handleInputKeyDown
      },
      ref: "textBox"
    }, [h(PseudoClasses, {
      props: {
        props: {
          style: inlineStyles.icon
        },
        on: {
          click: handleButtonAction
        }
      },
      slot: "rightNode"
    }, [h(components_Icon, {
      props: {
        styles: inlineStyles.icon
      },
      on: {
        click: handleButtonAction
      }
    }, typing ? "CancelLegacy" : "Search")]), this.$slots.default && this.$slots.default.length > 0 && h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: {
          fontSize: 12
        }
      },
      on: {
        chooseItem: handleChooseItem,
        itemClick: itemClick
      }
    }, this.$slots.default.filter(function (item) {
      return item.tag !== void 0;
    }).map(function (item, index) {
      if (index === focusListSourceIndex) {
        item.data.attrs.focus = true;
      } else {
        if (item.data.attrs) {
          delete item.data.attrs.focus;
        }
      }

      return item;
    }))]);
  }
});

function AutoSuggestBox_getStyles(AutoSuggestBox) {
  var context = AutoSuggestBox.context,
      styles = AutoSuggestBox.styles,
      iconSize = AutoSuggestBox.iconSize,
      showListSource = AutoSuggestBox.showListSource;
  var theme = context.theme;
  return {
    root: theme.prefixStyle(AutoSuggestBox_objectSpread({
      display: "inline-block",
      verticalAlign: "middle"
    }, styles, {
      position: "relative"
    })),
    listView: theme.prefixStyle({
      position: "absolute",
      width: "100%",
      top: "100%",
      left: 0,
      zIndex: 2,
      border: "1px solid ".concat(theme.baseLow),
      transform: "translate3d(0, ".concat(showListSource ? 0 : "-10px", ", 0)"),
      opacity: showListSource ? 1 : 0,
      pointerEvents: showListSource ? void 0 : "none",
      transition: "all .25s"
    }),
    icon: {
      position: "absolute",
      top: 0,
      right: 0,
      cursor: "pointer !important",
      height: iconSize,
      width: iconSize,
      color: "#a9a9a9",
      "&:hover": {
        color: theme.accent
      }
    }
  };
}
// CONCATENATED MODULE: ./src/components/AutoSuggestBox/index.js



AutoSuggestBox.install = function (Vue) {
  Vue.component(AutoSuggestBox.name, AutoSuggestBox);
};

/* harmony default export */ var components_AutoSuggestBox = (AutoSuggestBox);
// CONCATENATED MODULE: ./src/components/ContentDialog/ContentDialog.js







function ContentDialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ContentDialog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ContentDialog_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ContentDialog_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var iconButtonHoverStyle = {
  background: "#d00f2a",
  color: "#fff"
};
/* harmony default export */ var ContentDialog = ({
  name: "ContentDialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    statusBarTitle: String,
    showCloseButton: Boolean,
    title: String,
    content: String,
    primaryButtonText: {
      type: String,
      default: "Delete"
    },
    secondaryButtonText: {
      type: String,
      default: "Cancel"
    },
    background: String,
    className: String,
    styles: Object,
    padding: {
      type: Number,
      default: 16
    }
  },
  data: function data() {
    return {
      showDialog: this.value,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    value: function value(v) {
      this.showDialog = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.showDialog,
        clickExcludeElm: this.$refs.rootElm,
        blurCallback: function blurCallback() {
          _this.closeDialog();
        },
        blurKeyCodes: [27]
      });
    },
    closeDialog: function closeDialog() {
      this.showDialog = false;
      this.$emit("closeDialog");
      this.$emit("input", false);
    },
    containerMouseEnterHandle: function containerMouseEnterHandle(e) {
      e.currentTarget.style.border = "1px solid ".concat(this.context.theme.accent);
    },
    containerMouseLeaveHandle: function containerMouseLeaveHandle(e) {
      e.currentTarget.style.border = "1px solid ".concat(this.context.theme.baseLow);
    },
    closeButtonAction: function closeButtonAction(e) {
      this.$emit("closeButtonAction", e);
      this.closeDialog();
    },
    primaryButtonAction: function primaryButtonAction(e) {
      this.$emit("primaryButtonAction", e);
      this.closeDialog();
    },
    secondaryButtonAction: function secondaryButtonAction(e) {
      this.$emit("secondaryButtonAction", e);
      this.closeDialog();
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var statusBarTitle = this.statusBarTitle,
        title = this.title,
        primaryButtonText = this.primaryButtonText,
        secondaryButtonText = this.secondaryButtonText,
        showCloseButton = this.showCloseButton,
        content = this.content,
        className = this.className,
        containerMouseEnterHandle = this.containerMouseEnterHandle,
        containerMouseLeaveHandle = this.containerMouseLeaveHandle,
        closeButtonAction = this.closeButtonAction,
        primaryButtonAction = this.primaryButtonAction,
        secondaryButtonAction = this.secondaryButtonAction;
    var contentNode = this.$slots.contentNode;
    var theme = this.context.theme;
    var inlineStyles = ContentDialog_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "content-dialog",
      styles: inlineStyles
    });
    return h(RenderToBody, {}, [h("div", {
      style: styleClasses.mask.style,
      class: theme.classNames(styleClasses.mask.className, className)
    }, [h("div", {
      ref: "rootElm",
      on: {
        mouseenter: containerMouseEnterHandle,
        mouseleave: containerMouseLeaveHandle
      },
      style: styleClasses.container.style,
      class: styleClasses.container.className
    }, [statusBarTitle && h("div", {
      style: styleClasses.statusBar.style,
      class: styleClasses.statusBar.className
    }, [h("p", {
      style: styleClasses.statusBarTitle.style,
      class: styleClasses.statusBarTitle.className
    }, statusBarTitle), showCloseButton ? h(components_IconButton, {
      props: {
        styles: inlineStyles.iconButton,
        size: 24,
        hoverStyle: iconButtonHoverStyle,
        activeStyle: iconButtonHoverStyle
      },
      on: {
        click: closeButtonAction
      }
    }, "\uE894") : null]), h("div", {
      style: styleClasses.titleWrapper.style,
      class: styleClasses.titleWrapper.className
    }, [title ? h("h5", {
      style: styleClasses.title.style,
      class: styleClasses.title.className
    }, title) : null, content && h("p", {}, [content])]), contentNode, h("div", {
      style: styleClasses.content.style,
      class: styleClasses.content.className
    }, [(primaryButtonText || secondaryButtonText) && h("div", {
      style: styleClasses.buttonGroup.style,
      class: styleClasses.buttonGroup.className
    }, [primaryButtonText && h(components_Button, {
      props: {
        styles: inlineStyles.button
      },
      on: {
        click: primaryButtonAction
      }
    }, [primaryButtonText]), secondaryButtonText && h(components_Button, {
      props: {
        styles: inlineStyles.button
      },
      on: {
        click: secondaryButtonAction
      }
    }, [secondaryButtonText])])])])])]);
  }
});

function ContentDialog_getStyles(ContentDialog) {
  var context = ContentDialog.context,
      styles = ContentDialog.styles,
      background = ContentDialog.background,
      padding = ContentDialog.padding,
      primaryButtonText = ContentDialog.primaryButtonText,
      secondaryButtonText = ContentDialog.secondaryButtonText,
      showDialog = ContentDialog.showDialog;
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    mask: prefixStyle(ContentDialog_objectSpread({
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      zIndex: 2000,
      opacity: showDialog ? 1 : 0,
      pointerEvents: showDialog ? "all" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: theme.baseHigh,
      background: theme.altMediumHigh,
      transition: "all .25s ".concat(showDialog ? 0 : 0.25, "s ease-in-out")
    }, styles)),
    container: prefixStyle({
      background: background || (theme.useFluentDesign ? theme.acrylicTexture80.background : theme.altHigh),
      border: "1px solid ".concat(theme.baseLow),
      flex: "0 0 auto",
      width: "80%",
      maxWidth: 720,
      cursor: "default",
      transform: "scale(".concat(showDialog ? 1 : 0, ")"),
      opacity: showDialog ? 1 : 0,
      transition: "all .25s ".concat(showDialog ? 0.25 : 0, "s ease-in-out")
    }),
    statusBar: prefixStyle({
      color: "#fff",
      background: theme.accent,
      height: 28,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: 18
    }),
    statusBarTitle: {
      fontSize: 12,
      lineHeight: "28x"
    },
    iconButton: prefixStyle({
      color: "#fff",
      display: "flex",
      alignSelf: "flex-start",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      width: 40,
      lineHeight: "28px",
      height: 28
    }),
    content: prefixStyle({
      boxSizing: "border-box",
      width: "100%",
      padding: padding,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    titleWrapper: {
      padding: padding,
      minHeight: 160
    },
    title: {
      fontWeight: 500,
      fontSize: 18,
      margin: 0
    },
    buttonGroup: prefixStyle({
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    button: {
      width: primaryButtonText && secondaryButtonText ? "calc(50% - 2px)" : "100%"
    }
  };
}
// CONCATENATED MODULE: ./src/components/ContentDialog/index.js



ContentDialog.install = function (Vue) {
  Vue.component(ContentDialog.name, ContentDialog);
};

/* harmony default export */ var components_ContentDialog = (ContentDialog);
// CONCATENATED MODULE: ./src/components/Dialog/Dialog.js






function Dialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Dialog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Dialog_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Dialog_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var Dialog = ({
  name: "Dialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    isControlled: Boolean,
    contentStyle: Object,
    contentEnterStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "scale(1)"
        };
      }
    },
    contentLeaveStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "scale(0)"
        };
      }
    },
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      showDialog: this.value,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    value: function value(v) {
      this.showDialog = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    toggleShow: function toggleShow() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showDialog;
      this.showDialog = show;
      this.$emit("input", show);

      if (show === false) {
        this.$emit("closeDialog");
      }
    },
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      var isControlled = this.isControlled;
      this.addBlurEvent.setConfig({
        addListener: this.showDialog,
        clickIncludeElm: this.$refs.renderToBody.$el,
        blurCallback: function blurCallback() {
          if (isControlled) return;

          _this.toggleShow(false);
        },
        blurKeyCodes: [27]
      });
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var className = this.className;
    var theme = this.context.theme;
    var inlineStyles = Dialog_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "dialog",
      styles: inlineStyles
    });
    return h(RenderToBody, {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className),
      ref: "renderToBody"
    }, [h("div", {
      style: styleClasses.content.style,
      class: styleClasses.content.className
    }, this.$slots.default)]);
  }
});

function Dialog_getStyles(Dialog) {
  var context = Dialog.context,
      showDialog = Dialog.showDialog,
      styles = Dialog.styles,
      contentStyle = Dialog.contentStyle,
      contentEnterStyle = Dialog.contentEnterStyle,
      contentLeaveStyle = Dialog.contentLeaveStyle;
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(Dialog_objectSpread({
      color: theme.baseMediumHigh,
      background: theme.altMediumHigh,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all .25s",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: theme.zIndex.contentDialog
    }, styles, {
      pointerEvents: showDialog ? "all" : "none",
      opacity: showDialog ? 1 : 0
    })),
    content: prefixStyle(Dialog_objectSpread({
      display: "inline-block",
      transition: "all .25s"
    }, contentStyle, {}, showDialog ? contentEnterStyle : contentLeaveStyle))
  };
}
// CONCATENATED MODULE: ./src/components/Dialog/index.js



Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog);
};

/* harmony default export */ var components_Dialog = (Dialog);
// CONCATENATED MODULE: ./src/components/DropDownMenu/DropDownMenu.js








function DropDownMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DropDownMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DropDownMenu_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DropDownMenu_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var DropDownMenu = ({
  name: "DropDownMenu",
  props: {
    value: {
      type: [String, Number]
    },
    values: {
      type: Array
    },
    background: String,
    itemWidth: {
      type: Number,
      default: 132
    },
    padding: {
      type: Number,
      default: 4
    },
    itemHeight: {
      type: Number,
      default: 28
    },
    styles: Object,
    className: String,
    wrapperAttributes: Object
  },
  data: function data() {
    return {
      currentValue: this.value || Array.isArray(this.values) && this.values[0],
      currentValues: this.resetCurrentValues(),
      showList: false,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    value: function value(v) {
      this.currentValue = v;
    },
    values: function values() {
      this.resetCurrentValues();
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    resetCurrentValues: function resetCurrentValues() {
      var _values;

      var values = this.values,
          value = this.value;
      values = _toConsumableArray(values);
      value = value || values[0];

      (_values = values).unshift.apply(_values, _toConsumableArray(values.splice(values.indexOf(value), 1)));

      return values;
    },
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.showList,
        clickExcludeElm: this.$el,
        blurCallback: function blurCallback() {
          var currentValue = _this.currentValue,
              currentValues = _this.currentValues;
          currentValues.unshift.apply(currentValues, _toConsumableArray(currentValues.splice(currentValues.indexOf(currentValue), 1)));
          _this.showList = false;
        },
        blurKeyCodes: [27]
      });
    },
    toggleShowList: function toggleShowList(currentValue) {
      var currentValues = this.currentValues,
          showList = this.showList;

      if (showList) {
        currentValues.unshift.apply(currentValues, _toConsumableArray(currentValues.splice(currentValues.indexOf(currentValue), 1)));
      }

      if (currentValue !== this.currentValue) {
        this.$emit("input", currentValue);
        this.$emit("change", currentValue);
        this.currentValue = currentValue;
      }

      this.showList = !this.showList;
      this.currentValues = showList ? currentValues : _toConsumableArray(this.values);
    }
  },
  created: function created() {
    this.$emit("input", this.currentValue);
    this.$emit("change", this.currentValue);
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var itemHeight = this.itemHeight,
        showList = this.showList,
        currentValue = this.currentValue,
        currentValues = this.currentValues,
        toggleShowList = this.toggleShowList;
    var vm = this;
    var theme = this.context.theme;
    var inlineStyles = DropDownMenu_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "dropDownMenu",
      styles: inlineStyles
    });
    return h("div", {
      style: styleClasses.root.style,
      class: styleClasses.root.className
    }, [h("div", {
      ref: "wrapperElm",
      style: DropDownMenu_objectSpread({}, styleClasses.wrapper.style, {
        border: "".concat(showList ? "1px" : "2px", " solid ").concat(theme.baseLow)
      }),
      class: styleClasses.wrapper.className,
      on: {
        mouseenter: function mouseenter(e) {
          if (!showList) {
            e.currentTarget.style.border = "2px solid ".concat(showList ? theme.baseLow : theme.baseHigh);
          }

          vm.$emit("wrapperMouseEnter", e);
        },
        mouseleave: function mouseleave(e) {
          if (!showList) {
            e.currentTarget.style.border = "2px solid ".concat(theme.baseLow);
          }

          vm.$emit("wrapperMouseLeave", e);
        }
      }
    }, currentValues.map(function (value, index) {
      var isCurrent = currentValue === value;
      return h("div", {
        class: styleClasses.value.className,
        style: DropDownMenu_objectSpread({}, styleClasses.value.style, {
          height: (isCurrent || showList ? itemHeight : 0) + "px",
          background: isCurrent && showList ? theme.listAccentLow : "none"
        }),
        on: {
          click: function click() {
            return toggleShowList(value);
          },
          mouseenter: !showList ? function (e) {
            return vm.$emit("itemMouseEnter", e);
          } : function (e) {
            e.currentTarget.style.background = isCurrent ? theme.listAccentMedium : theme.useFluentDesign ? theme.listLow : theme.chromeMedium;
            vm.$emit("itemMouseEnter", e);
          },
          mouseleave: !showList ? function (e) {
            return vm.$emit("itemMouseLeave", e);
          } : function (e) {
            e.currentTarget.style.background = isCurrent ? theme.listAccentLow : "transparent";
            vm.$emit("itemMouseLeave", e);
          }
        },
        key: "".concat(index)
      }, [h("p", {
        style: styleClasses.content.style,
        class: styleClasses.content.className
      }, value), !showList && isCurrent ? h(components_Icon, {
        props: {
          styles: {
            fontSize: itemHeight / 2
          }
        }
      }, "ChevronDown4Legacy") : null]);
    }))]);
  }
});

function DropDownMenu_getStyles(DropDownMenu) {
  var theme = DropDownMenu.context.theme,
      styles = DropDownMenu.styles,
      itemHeight = DropDownMenu.itemHeight,
      itemWidth = DropDownMenu.itemWidth,
      padding = DropDownMenu.padding,
      wrapperAttributes = DropDownMenu.wrapperAttributes,
      background = DropDownMenu.background,
      values = DropDownMenu.values,
      showList = DropDownMenu.showList;
  var prefixStyle = theme.prefixStyle;
  var currBackground = background || (theme.useFluentDesign ? theme.acrylicTexture80.background : theme.chromeLow);
  var haveWrapperStyle = wrapperAttributes && wrapperAttributes.style;
  var zIndex = styles && styles.zIndex ? styles.zIndex : showList ? theme.zIndex.dropDownMenu : 1;
  return {
    root: prefixStyle(DropDownMenu_objectSpread({
      position: "relative",
      display: "inline-block",
      verticalAlign: "middle",
      width: itemWidth,
      height: itemHeight + padding
    }, styles, {
      zIndex: zIndex
    })),
    wrapper: prefixStyle(DropDownMenu_objectSpread({
      position: "absolute",
      top: 0,
      left: 0,
      color: theme.baseMediumHigh,
      background: currBackground,
      width: itemWidth,
      height: showList ? values.length * itemHeight + 16 : itemHeight + padding,
      overflowX: "hidden",
      zIndex: zIndex,
      padding: showList ? "6px 0" : 0,
      transition: "all .25s 0s ease-in-out"
    }, showList && haveWrapperStyle ? wrapperAttributes.style : void 0, {
      overflowY: showList && haveWrapperStyle ? wrapperAttributes.style.overflowY : "hidden"
    })),
    value: prefixStyle({
      width: itemWidth,
      display: "flex",
      padding: "0 8px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    content: {
      textAlign: "left",
      cursor: "default",
      height: "100%",
      width: "100%",
      overflow: "hidden",
      wordWrap: "normal",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      textOverflow: "ellipsis"
    }
  };
}
// CONCATENATED MODULE: ./src/components/DropDownMenu/index.js



DropDownMenu.install = function (Vue) {
  Vue.component(DropDownMenu.name, DropDownMenu);
};

/* harmony default export */ var components_DropDownMenu = (DropDownMenu);
// CONCATENATED MODULE: ./src/components/Swipe/Swipe.js










function Swipe_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Swipe_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Swipe_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Swipe_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Swipe = ({
  name: "Swipe",
  props: {
    initialFocusIndex: {
      type: Number,
      default: 0
    },
    stopSwipe: {
      type: Boolean,
      default: false
    },
    autoSwipe: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      validator: function validator(value) {
        return ["vertical", "horizontal"].includes(value);
      },
      default: "horizontal"
    },
    speed: {
      type: Number,
      default: 1500
    },
    easy: {
      type: Number,
      default: 0.85
    },
    delay: {
      type: Number,
      default: 5000
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    },
    navigationIconSize: Number,
    showIcon: Boolean,
    animate: {
      type: String,
      validator: function validator(value) {
        return ["slide", "opacity"].includes(value);
      },
      default: "slide"
    },
    supportPcDrag: {
      type: Boolean,
      default: false
    },
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      isHorizontal: this.direction === "horizontal",
      focusIndex: this.isSingleChildren() ? this.initialFocusIndex : this.initialFocusIndex + 1,
      currStopSwipe: this.stopSwipe,
      haveAnimate: false,
      swiping: false,
      originBodyStyle: IS_NODE_ENV["a" /* default */] ? void 0 : Swipe_objectSpread({}, document.body.style),
      timeoutId: null,
      swipeTimer: null,
      startClientX: null,
      startClientY: null,
      endClientX: null,
      endClientY: null
    };
  },
  watch: {
    direction: function direction(_direction) {
      this.isHorizontal = _direction === "horizontal";
    },
    autoSwipe: function autoSwipe(_autoSwipe) {
      this.currStopSwipe = !_autoSwipe;
      this.updateState();
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    isSingleChildren: function isSingleChildren() {
      return this.$slots.default && this.$slots.default.filter(function (v) {
        return v.tag !== void 0;
      }).length === 1;
    },
    childrenLength: function childrenLength() {
      return this.$slots.default.filter(function (v) {
        return v.tag !== void 0;
      }).length;
    },
    checkIsToucheEvent: function checkIsToucheEvent(e) {
      return e.type.includes("touch");
    },
    updateState: function updateState(autoSwipe) {
      var _this = this;

      clearTimeout(this.timeoutId);
      var childrenLength = this.childrenLength();
      var isSingleChildren = childrenLength === 1;

      if (autoSwipe && !isSingleChildren) {
        this.timeoutId = setTimeout(function () {
          _this.swipeForward();

          _this.setNextSlider();
        }, this.delay);
        this.setNextSlider.funStartTime = Date.now();
      }
    },
    setNextSlider: function setNextSlider() {
      var _this2 = this;

      var delay = this.delay;
      if (this.currStopSwipe || this.setNextSlider.funStartTime && Date.now() - this.setNextSlider.funStartTime < delay) return;
      this.timeoutId = setTimeout(function () {
        if (!_this2.currStopSwipe) _this2.swipeForward();

        _this2.setNextSlider();
      }, delay);
      this.setNextSlider.funStartTime = Date.now();
    },
    swipeForward: function swipeForward() {
      var _this3 = this;

      var focusIndex = this.focusIndex,
          swiping = this.swiping;
      if (swiping) return;

      if (!this.isSingleChildren()) {
        this.$emit("changeSwipe", focusIndex);
      }

      this.swiping = true;
      var isLast = focusIndex === this.getItemsLength() - 2;

      if (isLast) {
        this.focusIndex = this.setRightFocusIndex(focusIndex + 1);
        this.haveAnimate = true;
        this.$nextTick(function () {
          _this3.swipeTimer = setTimeout(function () {
            _this3.focusIndex = 1;
            _this3.haveAnimate = false;
            _this3.swiping = false;
          }, _this3.speed);
        });
      } else {
        this.focusIndex = this.setRightFocusIndex(focusIndex + 1);
        this.haveAnimate = true;
        this.swipeTimer = setTimeout(function () {
          _this3.swiping = false;
        }, this.speed);
      }
    },
    swipeBackWord: function swipeBackWord() {
      var _this4 = this;

      var focusIndex = this.focusIndex,
          swiping = this.swiping;
      if (swiping || !this.autoSwipe) return;

      if (!this.isSingleChildren()) {
        this.$emit("changeSwipe", focusIndex);
      }

      this.swiping = true;
      var isFirst = focusIndex === 1;

      if (isFirst) {
        this.focusIndex = this.setRightFocusIndex(focusIndex - 1);
        this.haveAnimate = true;
        this.$nextTick(function () {
          _this4.swipeTimer = setTimeout(function () {
            _this4.focusIndex = _this4.getItemsLength() - 2;
            _this4.haveAnimate = false;
            _this4.swiping = false;
          }, _this4.speed);
        });
      } else {
        this.focusIndex = this.setRightFocusIndex(focusIndex - 1);
        this.haveAnimate = true;
        this.swipeTimer = setTimeout(function () {
          _this4.swiping = false;
        }, this.speed);
      }
    },
    swipeToIndex: function swipeToIndex(focusIndex) {
      clearTimeout(this.timeoutId);
      focusIndex = focusIndex + 1;
      this.haveAnimate = true;
      this.focusIndex = this.setRightFocusIndex(focusIndex);
      this.currStopSwipe = true;
    },
    setRightFocusIndex: function setRightFocusIndex(focusIndex) {
      var length = this.getItemsLength();
      return focusIndex < 0 ? length - Math.abs(focusIndex) % length : focusIndex % length;
    },
    getItemsLength: function getItemsLength() {
      var childrenSize = this.childrenLength();
      return childrenSize > 1 ? childrenSize + 2 : childrenSize;
    },
    mouseOrTouchDownHandler: function mouseOrTouchDownHandler(e) {
      Object.assign(document.body.style, {
        userSelect: "none",
        msUserSelect: "none",
        webkitUserSelect: "none"
      });
      this.endClientX = void 0;
      this.endClientY = void 0;
      var isHorizontal = this.isHorizontal;
      this.currStopSwipe = true;
      var isToucheEvent = this.checkIsToucheEvent(e);
      if (!isToucheEvent && !this.supportPcDrag) return;

      if (isToucheEvent) {
        window.addEventListener("touchmove", this.mouseOrTouchMoveHandler);
        window.addEventListener("touchend", this.mouseOrTouchUpHandler);
      } else {
        window.addEventListener("mousemove", this.mouseOrTouchMoveHandler);
        window.addEventListener("mouseup", this.mouseOrTouchUpHandler);
      }

      if (isToucheEvent) {
        if (isHorizontal) {
          this.startClientX = e.changedTouches[0].clientX;
        } else {
          this.startClientY = e.changedTouches[0].clientY;
        }
      } else {
        if (isHorizontal) {
          this.startClientX = e.clientX;
        } else {
          this.startClientY = e.clientY;
        }
      }

      this.$refs.content.style.webkitTransition = "all 0.06125s 0s linear";
    },
    mouseOrTouchMoveHandler: function mouseOrTouchMoveHandler(e) {
      Object.assign(document.body.style, Swipe_objectSpread({
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0
      }, this.originBodyStyle));
      var isToucheEvent = this.checkIsToucheEvent(e);
      var focusIndex = this.focusIndex,
          isHorizontal = this.isHorizontal;

      if (isToucheEvent) {
        if (isHorizontal) {
          this.endClientX = e.changedTouches[0].clientX;
        } else {
          this.endClientY = e.changedTouches[0].clientY;
        }
      } else {
        if (isHorizontal) {
          this.endClientX = e.clientX;
        } else {
          this.endClientY = e.clientY;
        }
      }

      this.$refs.content.style.webkitTransform = "translate".concat(isHorizontal ? "X" : "Y", "(").concat(this.$refs.container.getBoundingClientRect()[isHorizontal ? "width" : "height"] * -focusIndex - this[isHorizontal ? "startClientX" : "startClientY"] + this[isHorizontal ? "endClientX" : "endClientY"], "px)");
    },
    mouseOrTouchUpHandler: function mouseOrTouchUpHandler(e) {
      Object.assign(document.body.style, Swipe_objectSpread({
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0,
        cursor: void 0
      }, this.originBodyStyle));
      var isHorizontal = this.isHorizontal;
      var transitionTimingFunction = this.transitionTimingFunction,
          speed = this.speed;
      var isToucheEvent = this.checkIsToucheEvent(e);

      if (isToucheEvent) {
        window.removeEventListener("touchmove", this.mouseOrTouchMoveHandler);
        window.removeEventListener("touchend", this.mouseOrTouchUpHandler);
      } else {
        window.removeEventListener("mousemove", this.mouseOrTouchMoveHandler);
        window.removeEventListener("mouseup", this.mouseOrTouchUpHandler);
      }

      if (isHorizontal && this.endClientX === void 0 || !isHorizontal && this.endClientY === void 0) {
        return;
      }

      var transition = "all ".concat(speed, "ms 0s ").concat(transitionTimingFunction);
      this.$refs.content.style.webkitTransition = transition;
      this.currStopSwipe = false;
      var easy = this.easy;
      if (easy < 0) easy = 0;
      if (easy > 1) easy = 1;
      var movePosition = this.endClientX - this.startClientX;
      var isNext = movePosition < 0;
      var focusIndex = this.focusIndex + movePosition / this.$refs.container.getBoundingClientRect().width;
      focusIndex = isNext ? Math.ceil(focusIndex + easy / 2) : Math.floor(focusIndex - easy / 2);
      focusIndex = this.setRightFocusIndex(focusIndex);

      if (focusIndex === this.focusIndex) {
        this.$refs.content.style.webkitTransform = "translateX(".concat(this.$refs.container.getBoundingClientRect().width * (-focusIndex / this.childrenLength()) - this.startClientX + this.endClientX, "px)");
      } else {
        if (isNext) {
          this.swipeForward();
        } else {
          this.swipeBackWord();
        }
      }

      if (this.autoSwipe && !this.isSingleChildren() && 0) {
        this.setNextSlider();
      }
    }
  },
  mounted: function mounted() {
    this.updateState(this.autoSwipe);
  },
  destroyed: function destroyed() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.swipeTimer);
  },
  render: function render(h) {
    var className = this.className,
        stopSwipe = this.stopSwipe,
        speed = this.speed,
        transitionTimingFunction = this.transitionTimingFunction;
    var focusIndex = this.focusIndex,
        isSingleChildren = this.isSingleChildren,
        mouseOrTouchDownHandler = this.mouseOrTouchDownHandler,
        isHorizontal = this.isHorizontal,
        haveAnimate = this.haveAnimate;
    var childrenLength = this.childrenLength();
    var theme = this.context.theme;
    var vNodes = this.$slots.default.filter(function (v) {
      return v.tag !== void 0;
    });
    var childrenSize = vNodes.length;

    if (childrenSize > 1) {
      vNodes.push(vNodes[0]);
      vNodes.unshift(vNodes[childrenSize - 1]);
    }

    var transition = "transform ".concat(speed, "ms 0s ").concat(transitionTimingFunction);
    var inlineStyles = Swipe_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "swipe",
      styles: inlineStyles
    });
    return h("div", {
      ref: "container",
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className)
    }, [h("div", {
      ref: "content",
      on: {
        mousedown: !stopSwipe && !isSingleChildren() ? mouseOrTouchDownHandler : void 0,
        touchStart: !stopSwipe && !isSingleChildren() ? this.mouseOrTouchDownHandler : void 0
      },
      style: theme.prefixStyle(Swipe_objectSpread({}, styleClasses.content.style, {
        transform: "translate".concat(isHorizontal ? "X" : "Y", "(").concat(-focusIndex * 100 / childrenLength, "%)"),
        transition: haveAnimate ? transition : void 0
      })),
      class: styleClasses.content.className
    }, vNodes.map(function (child, index) {
      return h("div", {
        attrs: {
          "data-index": index
        },
        key: "".concat(index),
        class: styleClasses.item.className,
        style: styleClasses.item.style
      }, [child]);
    }))]);
  }
});

function Swipe_getStyles(Swipe) {
  var styles = Swipe.styles,
      isHorizontal = Swipe.isHorizontal;
  var childrenLength = Swipe.childrenLength();
  var isSingleChildren = Swipe.isSingleChildren();
  var prefixStyle = Swipe.context.theme.prefixStyle;
  return {
    root: prefixStyle(Swipe_objectSpread({
      position: "relative",
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      flex: "0 0 auto"
    }, styles)),
    content: prefixStyle({
      position: "relative",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      height: isHorizontal ? "100%" : "".concat(childrenLength * 100, "%"),
      width: isHorizontal ? "".concat(childrenLength * 100, "%") : "100%",
      left: isHorizontal && !isSingleChildren ? "".concat(((isSingleChildren ? 0 : 2 + childrenLength) / 2 - 0.5) * 100, "%") : void 0,
      top: isHorizontal ? void 0 : "".concat(((isSingleChildren ? 0 : 2 + childrenLength) / 2 - 0.5) * 100, "%")
    }),
    item: prefixStyle({
      position: "relative",
      overflow: "hidden",
      width: isHorizontal ? "".concat(100 / childrenLength, "%") : "100%",
      height: isHorizontal ? "100%" : "".concat(100 / childrenLength, "%"),
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none"
    })
  };
}
// CONCATENATED MODULE: ./src/components/Swipe/index.js



Swipe.install = function (Vue) {
  Vue.component(Swipe.name, Swipe);
};

/* harmony default export */ var components_Swipe = (Swipe);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// CONCATENATED MODULE: ./src/components/FlipView/Dots.js





/* harmony default export */ var Dots = ({
  name: "Dots",
  props: {
    count: Number,
    showControl: Boolean,
    controlStyle: Object,
    controlContentStyle: Object,
    iconStyle: Object,
    handleSwipeToIndex: Function,
    defaultFocusSwipeIndex: Number,
    toggleCanAutoSwipe: Function,
    currCanAutoSwipe: Boolean
  },
  data: function data() {
    return {
      focusSwipeIndex: this.defaultFocusSwipeIndex
    };
  },
  methods: {
    setFocusIndex: function setFocusIndex(focusSwipeIndex) {
      this.focusSwipeIndex = focusSwipeIndex % this.count;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var count = this.count,
        showControl = this.showControl,
        controlStyle = this.controlStyle,
        controlContentStyle = this.controlContentStyle,
        iconStyle = this.iconStyle,
        handleSwipeToIndex = this.handleSwipeToIndex,
        toggleCanAutoSwipe = this.toggleCanAutoSwipe,
        currCanAutoSwipe = this.currCanAutoSwipe;
    var focusSwipeIndex = this.focusSwipeIndex;
    var theme = this.context.theme;
    var vm = this;
    var styleClasses = theme.prepareStyles({
      className: "flip-view-control",
      styles: {
        controlStyle: controlStyle,
        controlContentStyle: controlContentStyle
      }
    });
    var playOrPause = currCanAutoSwipe ? "Pause" : "Play";
    return count > 1 && showControl && h("div", {
      style: styleClasses.controlStyle.style,
      class: styleClasses.controlStyle.className
    }, [h("div", {
      style: styleClasses.controlContentStyle.style,
      class: styleClasses.controlContentStyle.className
    }, [Array(count).fill(0).map(function (num, index) {
      return h(components_Icon, {
        props: {
          styles: iconStyle
        },
        on: {
          click: function click() {
            vm.focusSwipeIndex = index;
            handleSwipeToIndex(index);
          }
        }
      }, focusSwipeIndex === index ? "FullCircleMask" : "CircleRing");
    }), h(IconButton, {
      props: {
        styles: {
          marginLeft: 2
        },
        size: 32
      },
      on: {
        click: toggleCanAutoSwipe
      }
    }, playOrPause)])]);
  }
});
// CONCATENATED MODULE: ./src/components/FlipView/FlipView.js









function FlipView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FlipView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FlipView_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FlipView_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var FlipView = ({
  name: "FlipView",
  props: {
    initialFocusIndex: Number,
    stopSwipe: {
      type: Boolean,
      default: false
    },
    autoSwipe: {
      type: Boolean,
      default: true
    },
    speed: Number,
    easy: Number,
    direction: {
      type: String,
      validator: function validator(value) {
        return ["vertical", "horizontal"].includes(value);
      },
      default: "horizontal"
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    controlledNavigation: {
      type: Boolean,
      default: true
    },
    showControl: {
      type: Boolean,
      default: true
    },
    supportPcDrag: {
      type: Boolean,
      default: false
    },
    navigationIconSize: {
      type: Number,
      default: 24
    },
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      mounted: false,
      focusSwipeIndex: 0,
      currCanAutoSwipe: this.autoSwipe,
      currShowNavigation: this.showNavigation
    };
  },
  watch: {
    autoSwipe: function autoSwipe(v) {
      this.currCanAutoSwipe = v;
    },
    showNavigation: function showNavigation(v) {
      this.currShowNavigation = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  mounted: function mounted() {
    this.mounted = true;
  },
  methods: {
    swipeForward: function swipeForward() {
      this.$refs.swipe.swipeForward();
    },
    swipeBackWord: function swipeBackWord() {
      this.$refs.swipe.swipeBackWord();
    },
    handleChangeSwipe: function handleChangeSwipe(focusSwipeIndex) {
      var count = this.childrenLength();

      if (this.mounted) {
        this.focusSwipeIndex = focusSwipeIndex % count;
      }
    },
    toggleCanAutoSwipe: function toggleCanAutoSwipe() {
      this.currCanAutoSwipe = !this.currCanAutoSwipe;
    },
    handleSwipeToIndex: function handleSwipeToIndex(index) {
      this.focusSwipeIndex = index;
      this.$refs.swipe.swipeToIndex(index);
    },
    handleMouseEnter: function handleMouseEnter() {
      if (!this.currShowNavigation) {
        this.currShowNavigation = true;
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      if (this.currShowNavigation) {
        this.currShowNavigation = false;
      }
    },
    childrenLength: function childrenLength() {
      return this.$slots.default.filter(function (v) {
        return v.tag !== void 0;
      }).length;
    }
  },
  render: function render(h) {
    var className = this.className,
        showNavigation = this.showNavigation,
        initialFocusIndex = this.initialFocusIndex,
        stopSwipe = this.stopSwipe,
        speed = this.speed,
        easy = this.easy,
        direction = this.direction,
        navigationIconSize = this.navigationIconSize,
        supportPcDrag = this.supportPcDrag,
        showControl = this.showControl,
        controlledNavigation = this.controlledNavigation,
        handleMouseEnter = this.handleMouseEnter,
        handleMouseLeave = this.handleMouseLeave,
        swipeForward = this.swipeForward,
        swipeBackWord = this.swipeBackWord;
    var vm = this;
    var theme = this.context.theme;
    var focusSwipeIndex = this.focusSwipeIndex,
        currCanAutoSwipe = this.currCanAutoSwipe,
        currShowNavigation = this.currShowNavigation;
    var count = this.childrenLength();
    var isHorizontal = direction === "horizontal";

    var _showNavigation = controlledNavigation ? showNavigation : currShowNavigation;

    var inlineStyles = FlipView_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "flip-view",
      styles: inlineStyles
    });
    return h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className),
      on: {
        mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave
      }
    }, [count > 1 && _showNavigation && h(components_IconButton, {
      on: {
        click: swipeBackWord
      },
      props: {
        styles: inlineStyles.iconLeft,
        hoverStyle: {
          background: theme.baseLow
        },
        activeStyle: {
          background: theme.accent,
          color: "#fff"
        }
      }
    }, isHorizontal ? "ChevronLeft3Legacy" : "ScrollChevronUpLegacy"), h(components_Swipe, {
      ref: "swipe",
      on: {
        changeSwipe: function changeSwipe(index) {
          vm.$refs.dots.setFocusIndex(index);
        }
      },
      props: {
        initialFocusIndex: initialFocusIndex,
        stopSwipe: stopSwipe,
        autoSwipe: currCanAutoSwipe,
        speed: speed,
        easy: easy,
        direction: direction,
        navigationIconSize: navigationIconSize,
        supportPcDrag: supportPcDrag
      }
    }, this.$slots.default), count > 1 && _showNavigation && h(components_IconButton, {
      on: {
        click: swipeForward
      },
      props: {
        styles: inlineStyles.iconRight,
        hoverStyle: {
          background: theme.baseLow
        },
        activeStyle: {
          background: theme.accent,
          color: "#fff"
        }
      }
    }, isHorizontal ? "ChevronRight3Legacy" : "ScrollChevronDownLegacy"), h(Dots, {
      ref: "dots",
      props: {
        count: count,
        showControl: showControl,
        controlStyle: inlineStyles.control,
        controlContentStyle: inlineStyles.controlContent,
        iconStyle: inlineStyles.icon,
        handleSwipeToIndex: this.handleSwipeToIndex,
        defaultFocusSwipeIndex: focusSwipeIndex,
        toggleCanAutoSwipe: this.toggleCanAutoSwipe,
        currCanAutoSwipe: currCanAutoSwipe
      }
    })]);
  }
});

function FlipView_getStyles(FlipView) {
  var navigationIconSize = FlipView.navigationIconSize,
      direction = FlipView.direction,
      styles = FlipView.styles;
  var theme = FlipView.context.theme;
  var prefixStyle = theme.prefixStyle;
  var isHorizontal = direction === "horizontal";
  var baseIconStyle = {
    position: "absolute",
    background: theme.listLow,
    zIndex: 20,
    fontSize: navigationIconSize / 2,
    width: navigationIconSize * (isHorizontal ? 1 : 2),
    lineHeight: "".concat(navigationIconSize * (isHorizontal ? 2 : 1), "px"),
    height: navigationIconSize * (isHorizontal ? 2 : 1)
  };
  return {
    root: prefixStyle(FlipView_objectSpread({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 0,
      width: "100%",
      background: theme.chromeLow,
      height: "auto",
      minHeight: baseIconStyle.height
    }, styles)),
    iconLeft: FlipView_objectSpread({}, baseIconStyle, {
      top: isHorizontal ? "calc(50% - ".concat(navigationIconSize, "px)") : 0,
      left: isHorizontal ? 0 : "calc(50% - ".concat(navigationIconSize, "px)")
    }),
    iconRight: FlipView_objectSpread({}, baseIconStyle, {
      bottom: isHorizontal ? "calc(50% - ".concat(navigationIconSize, "px)") : 0,
      right: isHorizontal ? 0 : "calc(50% - ".concat(navigationIconSize, "px)")
    }),
    control: FlipView_objectSpread({
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      pointerEvents: "none"
    }, isHorizontal ? {
      flexDirection: "row",
      width: "100%",
      bottom: 4,
      left: 0
    } : {
      flexDirection: "column",
      height: "100%",
      top: 0,
      right: 4
    }),
    controlContent: prefixStyle({
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      alignItems: "center",
      pointerEvents: "all"
    }),
    icon: {
      fontSize: 6,
      margin: 2,
      cursor: "pointer"
    }
  };
}
// CONCATENATED MODULE: ./src/components/FlipView/index.js



FlipView.install = function (Vue) {
  Vue.component(FlipView.name, FlipView);
};

/* harmony default export */ var components_FlipView = (FlipView);
// CONCATENATED MODULE: ./src/components/Flyout/FlyoutContent.js










function FlyoutContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FlyoutContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FlyoutContent_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FlyoutContent_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var FlyoutContent = ({
  name: "FlyoutContent",
  props: {
    verticalPosition: {
      type: String,
      validator: function validator(value) {
        return ["top", "bottom", "center"].includes(value);
      },
      default: "top"
    },
    horizontalPosition: {
      type: String,
      validator: function validator(value) {
        return ["left", "right", "center"].includes(value);
      },
      default: "center"
    },
    show: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 4
    },
    isControlled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseTimeout: {
      type: Number,
      default: 1250
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      currShow: this.show,
      autoHideTimer: null,
      hideTimer: null
    };
  },
  watch: {
    show: function show(v) {
      this.currShow = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    showFlyoutContent: function showFlyoutContent() {
      var _this = this;

      clearTimeout(this.autoHideTimer);
      clearTimeout(this.hideTimer);
      this.toggleShowFlyoutContent(true);

      if (this.autoClose) {
        this.autoHideTimer = setTimeout(function () {
          _this.hideFlyoutContent();
        }, this.autoCloseTimeout);
      }
    },
    hideFlyoutContent: function hideFlyoutContent() {
      var _this2 = this;

      this.hideTimer = setTimeout(function () {
        _this2.toggleShowFlyoutContent(false);
      }, 250);
    },
    toggleShowFlyoutContent: function toggleShowFlyoutContent() {
      var currShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.currShow;
      this.currShow = currShow;
    },
    getStaticStyle: function getStaticStyle() {
      var currShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currShow;
      var theme = this.context.theme,
          styles = this.styles;
      var enterDelay = currShow ? this.enterDelay : 0;
      return theme.prefixStyle(FlyoutContent_objectSpread({
        width: 280,
        boxSizing: "content-box",
        padding: 8,
        border: "1px solid ".concat(theme.baseLow),
        color: theme.baseMediumHigh,
        background: theme.chromeLow,
        pointerEvents: currShow ? "all" : "none",
        opacity: currShow ? 1 : 0,
        transform: "translateY(".concat(currShow ? "0px" : "10px", ")"),
        position: "absolute",
        zIndex: theme.zIndex.flyout,
        transition: "transform .25s ".concat(enterDelay, "ms ease-in-out, opacity .25s ").concat(enterDelay, "ms ease-in-out, border ").concat(enterDelay, "ms .25s ease-in-out")
      }, styles));
    },
    getDynamicStyle: function getDynamicStyle() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (!this.$el) return;
      var parentElement = this.$el.parentElement;
      var verticalPosition = this.verticalPosition,
          horizontalPosition = this.horizontalPosition,
          margin = this.margin;

      var _parentElement$getBou = parentElement.getBoundingClientRect(),
          width = _parentElement$getBou.width,
          height = _parentElement$getBou.height;

      var containerWidth = this.$el.getBoundingClientRect().width;
      var containerHeight = this.$el.getBoundingClientRect().height;
      var positionStyle = {};

      if (width !== void 0 && height !== void 0) {
        switch (horizontalPosition) {
          case "left":
            {
              positionStyle.right = unit ? "0".concat(unit) : 0;
              break;
            }

          case "center":
            {
              var left = (width - containerWidth) / 2;
              positionStyle.left = unit ? "".concat(left).concat(unit) : left;
              break;
            }

          case "right":
            {
              positionStyle.left = unit ? "0".concat(unit) : 0;
              break;
            }

          default:
            {
              break;
            }
        }

        switch (verticalPosition) {
          case "top":
            {
              var top = -containerHeight - margin;
              positionStyle.top = unit ? "".concat(top).concat(unit) : top;
              break;
            }

          case "center":
            {
              var _top = (height - containerHeight) / 2;

              positionStyle.top = unit ? "".concat(_top).concat(unit) : _top;
              break;
            }

          case "bottom":
            {
              var _top2 = height + margin;

              positionStyle.top = unit ? "".concat(_top2).concat(unit) : _top2;
              break;
            }

          default:
            {
              break;
            }
        }
      }

      return positionStyle;
    },
    handelMouseEnter: function handelMouseEnter(e) {
      clearTimeout(this.autoHideTimer);
      clearTimeout(this.hideTimer);
      e.currentTarget.style.border = "1px solid ".concat(this.context.theme.listAccentLow);
      if (!this.isControlled) this.showFlyoutContent();
      this.$emit("mouseenter", e);
    },
    handelMouseLeave: function handelMouseLeave(e) {
      e.currentTarget.style.border = "1px solid ".concat(this.context.theme.baseLow);
      this.hideFlyoutContent();
      this.$emit("mouseleave", e);
    }
  },
  mounted: function mounted() {
    Object.assign(this.$el.style, this.getDynamicStyle("px"));

    if (!this.isControlled) {
      this.$el.parentElement.addEventListener("mouseenter", this.showFlyoutContent);
      this.$el.parentElement.addEventListener("mouseleave", this.hideFlyoutContent);
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.autoHideTimer);

    if (!this.isControlled) {
      this.$el.parentElement.removeEventListener("mouseenter", this.showFlyoutContent);
      this.$el.parentElement.removeEventListener("mouseleave", this.hideFlyoutContent);
    }
  },
  render: function render(h) {
    var handelMouseEnter = this.handelMouseEnter,
        handelMouseLeave = this.handelMouseLeave;
    var theme = this.context.theme;
    var staticStyle = this.getStaticStyle();
    var stylesClasses = theme.prepareStyle({
      className: "flyout-content",
      style: staticStyle
    });
    var dynamicStyle = this.getDynamicStyle();
    return h("div", {
      style: dynamicStyle ? FlyoutContent_objectSpread({}, stylesClasses.style, {}, dynamicStyle) : stylesClasses.style,
      class: stylesClasses.className,
      on: {
        mouseenter: handelMouseEnter,
        mouseleave: handelMouseLeave
      }
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/Flyout/Flyout.js







function Flyout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Flyout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Flyout_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Flyout_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Flyout = ({
  name: "Flyout",
  props: {
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var styles = this.styles;
    var theme = this.context.theme;
    var flyoutContents = [];
    var renderChild = [];
    var vNodes = this.$slots.default;
    vNodes.forEach(function (child) {
      if (child.componentOptions) {
        if (child.componentOptions.tag === FlyoutContent.name) {
          flyoutContents.push(child);
          return;
        }
      }

      renderChild.push(child);
    });
    return h("div", {
      style: theme.prefixStyle(Flyout_objectSpread({
        display: "inline-block"
      }, styles, {
        position: "relative"
      }))
    }, [].concat(flyoutContents, renderChild));
  }
});
// CONCATENATED MODULE: ./src/components/Flyout/index.js




Flyout.install = function (Vue) {
  Vue.component(Flyout.name, Flyout);
  Vue.component(FlyoutContent.name, FlyoutContent);
};

/* harmony default export */ var components_Flyout = (Flyout);
// CONCATENATED MODULE: ./src/components/FloatNav/FloatNavExpandedItem.js
/* harmony default export */ var FloatNavExpandedItem = ({
  name: "FloatNavExpandedItem",
  props: {
    title: String,
    href: String,
    focusColor: String
  },
  render: function render() {
    return this.$slots.default;
  }
});
// CONCATENATED MODULE: ./src/components/FloatNav/FloatNav.js









function FloatNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FloatNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FloatNav_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FloatNav_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var FloatNav = ({
  name: "FloatNav",
  props: {
    isFloatRight: {
      type: Boolean,
      default: true
    },
    initWidth: {
      type: Number,
      default: 48
    },
    expandedWidth: {
      type: Number,
      default: 240
    },
    focusItemIndex: Number,
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      currFocusItemIndex: this.focusItemIndex,
      hoverItem: null,
      hoverIndexArray: []
    };
  },
  watch: {
    focusItemIndex: function focusItemIndex(v) {
      this.currFocusItemIndex = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    getExpandedItems: function getExpandedItems(h) {
      var _this = this;

      return this.$slots.default.filter(function (vNode) {
        return vNode.componentOptions && vNode.componentOptions.tag === FloatNavExpandedItem.name;
      }).map(function (vNode, index) {
        var _ref = vNode.componentOptions.propsData || {},
            focusColor = _ref.focusColor,
            title = _ref.title,
            href = _ref.href;

        var _ref2 = vNode.componentOptions.listeners || {},
            _click = _ref2.click;

        var initWidth = _this.initWidth,
            currFocusItemIndex = _this.currFocusItemIndex,
            hoverItem = _this.hoverItem,
            hoverIndexArray = _this.hoverIndexArray,
            isFloatRight = _this.isFloatRight,
            expandedWidth = _this.expandedWidth,
            theme = _this.context.theme;
        var isFirst = currFocusItemIndex === index;
        var isHovered = hoverItem === index;
        var padding = initWidth / 2;
        var linkStyle = theme.prefixStyle({
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          transition: "all .25s",
          textDecoration: "none",
          height: initWidth
        });
        var linkStyleClasses = theme.prepareStyle({
          className: "float-nav-link",
          style: linkStyle
        });
        var iconNode = vNode.componentOptions.children && vNode.componentOptions.children[0];

        if (iconNode !== void 0 && iconNode.componentOptions.tag === components_IconButton.name) {
          Object.assign(iconNode.componentOptions.propsData, {
            styles: {
              color: hoverIndexArray[index] || isFirst ? "#fff" : theme.baseHigh
            }
          });
        }

        var vm = _this;
        return h("a", {
          key: "expandedItem-".concat(index),
          on: {
            mouseenter: function mouseenter() {
              vm.hoverIndexArray[index] = true;
              vm.hoverItem = index;
            },
            mouseleave: function mouseleave() {
              vm.hoverIndexArray[index] = false;
              vm.hoverItem = void 0;
            },
            click: function click() {
              vm.$emit("focusItem", index);

              if (_click) {
                _click();
              }
            }
          },
          attrs: {
            href: href
          },
          style: theme.prefixStyle(FloatNav_objectSpread({}, linkStyleClasses.style, {
            flexDirection: isFloatRight ? "row" : "row-reverse",
            justifyContent: isHovered ? "space-between" : "center",
            color: hoverIndexArray[index] ? "#fff" : theme.baseHigh,
            background: isFirst || isHovered ? theme.accent || focusColor : theme.altHigh,
            width: (hoverIndexArray[index] ? expandedWidth : initWidth) + "px"
          })),
          class: linkStyleClasses.className
        }, [isHovered && h("span", {
          style: {
            cursor: "default",
            color: "#fff",
            margin: "0 ".concat(padding, "px"),
            whiteSpace: "nowrap"
          }
        }, title), iconNode]);
      });
    }
  },
  render: function render(h) {
    var initWidth = this.initWidth;
    var theme = this.context.theme;
    var itemStyle = theme.prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      background: theme.altHigh,
      transition: "all .25s 0s cubic-bezier(.04, .89, .44, 1.07)",
      fontSize: 12
    });
    var inlineStyles = FloatNav_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "float-nav",
      styles: inlineStyles
    });
    var _this$$slots = this.$slots,
        topNode = _this$$slots.topNode,
        bottomNode = _this$$slots.bottomNode;
    var expandedItems = this.getExpandedItems(h);
    return h("div", {
      style: styleClasses.root.style,
      class: styleClasses.root.className
    }, [h("div", {
      style: styleClasses.wrapper.style,
      class: styleClasses.wrapper.className
    }, [topNode.map(function (vNode, index) {
      vNode.data.style = vNode.data.style || {};
      Object.assign(vNode.data.style, {
        width: initWidth + "px",
        height: initWidth + "px"
      });
      return h("div", {
        key: "topNode-".concat(index),
        style: theme.prefixStyle(FloatNav_objectSpread({}, itemStyle, {
          width: initWidth + "px",
          height: initWidth + "px"
        }))
      }, [vNode]);
    }), expandedItems, bottomNode.map(function (vNode, index) {
      vNode.data.style = vNode.data.style || {};
      Object.assign(vNode.data.style, {
        width: initWidth,
        height: initWidth + "px"
      });
      return h("div", {
        key: "bottomNode-".concat(index),
        style: theme.prefixStyle(FloatNav_objectSpread({}, itemStyle, {
          width: initWidth,
          height: initWidth + "px"
        }))
      }, [vNode]);
    })])]);
  }
});

function FloatNav_getStyles(FloatNav) {
  var styles = FloatNav.styles,
      initWidth = FloatNav.initWidth,
      isFloatRight = FloatNav.isFloatRight,
      theme = FloatNav.context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(FloatNav_objectSpread({
      width: 48,
      background: theme.altHigh
    }, styles)),
    wrapper: prefixStyle({
      width: initWidth,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isFloatRight ? "flex-end" : "flex-start"
    }),
    button: {
      background: theme.accent,
      color: "#fff"
    }
  };
}
// CONCATENATED MODULE: ./src/components/FloatNav/index.js




FloatNav.install = function (Vue) {
  Vue.component(FloatNav.name, FloatNav);
  Vue.component(FloatNavExpandedItem.name, FloatNavExpandedItem);
};

/* harmony default export */ var components_FloatNav = (FloatNav);
// CONCATENATED MODULE: ./src/components/Menu/MenuItem.js










function MenuItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MenuItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MenuItem_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MenuItem_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var MenuItem = ({
  name: "MenuItem",
  props: {
    styles: Object,
    className: String,
    itemHeight: {
      type: Number,
      default: 44
    },
    itemWidth: {
      type: Number,
      default: 240
    },
    expandedMethod: {
      type: String,
      validator: function validator(value) {
        return ["active", "hover"].includes(value);
      },
      default: "hover"
    },
    icon: String,
    label: String,
    defaultExpanded: Boolean,
    hoverStyle: Object
  },
  data: function data() {
    return {
      expanded: this.defaultExpanded,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    defaultExpanded: function defaultExpanded(v) {
      this.expanded = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.expanded,
        clickExcludeElm: this.$el,
        blurCallback: function blurCallback() {
          _this.expanded = false;
        },
        blurKeyCodes: [27]
      });
    },
    toggleExpanded: function toggleExpanded() {
      var expanded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.expanded;
      this.expanded = expanded;
    },
    getMenuItems: function getMenuItems() {
      var _this2 = this;

      var itemWidth = this.itemWidth,
          itemHeight = this.itemHeight,
          hoverStyle = this.hoverStyle,
          expandedMethod = this.expandedMethod;
      return this.$slots.default && this.$slots.default.filter(function (vNode) {
        return vNode.tag !== void 0 && vNode.componentOptions;
      }).map(function (vNode) {
        if (vNode.componentOptions.tag === _this2.$options._componentTag) {
          Object.assign(vNode.componentOptions.propsData, {
            itemWidth: itemWidth,
            itemHeight: itemHeight,
            hoverStyle: hoverStyle,
            expandedMethod: expandedMethod
          });
        }

        return vNode;
      });
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var icon = this.icon,
        label = this.label,
        itemHeight = this.itemHeight,
        className = this.className,
        expandedMethod = this.expandedMethod,
        toggleExpanded = this.toggleExpanded;
    var theme = this.context.theme;
    var menuItems = this.getMenuItems();
    var inlineStyles = MenuItem_getStyles(this, menuItems);
    var styleClasses = theme.prepareStyles({
      className: "menu",
      styles: inlineStyles
    });
    var isHoverToggled = expandedMethod === "hover";
    var iconProps = {
      size: itemHeight,
      styles: {
        fontSize: itemHeight / 3
      }
    };
    var events = bindEvent(this);
    var event = {
      on: MenuItem_objectSpread({}, events, {
        mouseenter: function mouseenter() {
          events.mouseenter();

          if (isHoverToggled) {
            toggleExpanded(true);
          }
        },
        mouseleave: function mouseleave() {
          events.mouseleave();

          if (isHoverToggled) {
            toggleExpanded(false);
          }
        }
      })
    };

    var params = MenuItem_objectSpread({
      class: theme.classNames(styleClasses.root.className, className),
      style: styleClasses.root.style
    }, event);

    return h(PseudoClasses, {
      props: {
        props: params
      }
    }, [h("div", params, [h(components_Icon, {
      props: iconProps
    }, icon), h("span", {
      class: styleClasses.label.className,
      style: styleClasses.label.style
    }, label), menuItems && h(components_Icon, {
      props: {
        size: iconProps.size,
        styles: MenuItem_objectSpread({}, iconProps.styles, {
          fontSize: itemHeight / 3,
          cursor: "pointer",
          pointerEvents: "all"
        })
      },
      on: {
        click: function click() {
          if (isHoverToggled) {
            toggleExpanded();
          }
        }
      }
    }, "ScrollChevronRightLegacy"), menuItems && h("div", {
      class: styleClasses.child.className,
      style: styleClasses.child.style
    }, menuItems)])]);
  }
});

function MenuItem_getStyles(MenuItem, menuItems) {
  var theme = MenuItem.context.theme,
      hoverStyle = MenuItem.hoverStyle,
      styles = MenuItem.styles,
      itemWidth = MenuItem.itemWidth,
      itemHeight = MenuItem.itemHeight,
      expanded = MenuItem.expanded;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(MenuItem_objectSpread({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "default",
      height: itemHeight,
      fontSize: itemHeight / 3,
      lineHeight: "".concat(itemHeight, "px"),
      width: "100%",
      position: menuItems ? "relative" : void 0,
      "&:hover": hoverStyle || {
        background: theme.listLow
      }
    }, styles)),
    label: {
      width: itemWidth - itemHeight - (menuItems ? itemHeight : 0),
      height: itemHeight,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    child: prefixStyle({
      transform: "translate3d(".concat(expanded ? 0 : "-".concat(itemHeight, "px"), ", 0, 0)"),
      opacity: expanded ? 1 : 0,
      pointerEvents: expanded ? "all" : "none",
      transition: "all .25s",
      position: "absolute",
      top: -1,
      left: "100%",
      width: "100%",
      background: theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow,
      border: "1px solid ".concat(theme.listLow)
    })
  };
}
// CONCATENATED MODULE: ./src/components/Menu/Menu.js











function Menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Menu_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Menu_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Menu = ({
  name: "Menu",
  props: {
    menuItemHeight: {
      type: Number,
      default: 44
    },
    menuItemWidth: {
      type: Number,
      default: 240
    },
    menuItemHoverStyle: Object,
    expandedMethod: {
      type: String,
      validator: function validator(value) {
        return ["active", "hover"].includes(value);
      },
      default: "hover"
    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    getMenuItems: function getMenuItems() {
      var menuItemWidth = this.menuItemWidth,
          menuItemHeight = this.menuItemHeight,
          menuItemHoverStyle = this.menuItemHoverStyle,
          expandedMethod = this.expandedMethod;
      return this.$slots.default.filter(function (vNode) {
        return vNode.tag !== void 0 && vNode.componentOptions;
      }).map(function (vNode) {
        if (vNode.componentOptions.tag === MenuItem.name) {
          Object.assign(vNode.componentOptions.propsData, {
            itemWidth: menuItemWidth,
            itemHeight: menuItemHeight,
            hoverStyle: menuItemHoverStyle,
            expandedMethod: expandedMethod
          });
        }

        return vNode;
      });
    }
  },
  render: function render(h) {
    var className = this.className;
    var theme = this.context.theme;
    var styles = Menu_getStyles(this);
    var styleClasses = theme.prepareStyle({
      className: "menu",
      style: styles.root,
      extendsClassName: className
    });
    var menuItems = this.getMenuItems();
    return h("div", {
      class: styleClasses.className,
      style: styleClasses.style
    }, menuItems);
  }
});

function Menu_getStyles(Menu) {
  var theme = Menu.context.theme,
      styles = Menu.styles,
      menuItemWidth = Menu.menuItemWidth;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(Menu_objectSpread({
      width: menuItemWidth,
      color: theme.baseHigh,
      background: theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow,
      border: "1px solid ".concat(theme.listLow)
    }, styles))
  };
}
// CONCATENATED MODULE: ./src/components/Menu/index.js




Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu);
  Vue.component(MenuItem.name, MenuItem);
};

/* harmony default export */ var components_Menu = (Menu);
// CONCATENATED MODULE: ./src/common/browser/vendors.js
/* harmony default export */ var vendors = (["webkit", "moz", "ms", "o", ""]);
// CONCATENATED MODULE: ./src/components/ProgressBar/ProgressBar.js








function ProgressBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProgressBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProgressBar_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProgressBar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var vendorPrefixes = vendors.map(function (str) {
  return str ? "-".concat(str, "-") : str;
});
/* harmony default export */ var ProgressBar = ({
  name: "ProgressBar",
  props: {
    defaultProgressValue: {
      type: Number,
      default: 0.5
    },
    speed: {
      type: Number,
      default: 4000
    },
    barWidth: {
      type: Number,
      default: 320
    },
    barHeight: {
      type: Number,
      default: 4
    },
    isIndeterminate: {
      type: Boolean,
      default: false
    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    getOnlyClassName: function getOnlyClassName() {
      var speed = this.speed;
      return "react-uwp-progress-bar_".concat(speed);
    },
    getCSSText: function getCSSText(className) {
      var speed = this.speed,
          barHeight = this.barHeight,
          barWidth = this.barWidth;
      return ".".concat(className, " {\n        }\n        ").concat(Array(5).fill(0).map(function (name, index) {
        return [".".concat(className, "-item-") + index + " {", vendorPrefixes.map(function (str) {
          return "    ".concat(str, "animation: ProgressBar ").concat(speed, "ms ").concat(index * barHeight * barWidth * speed / 5 / 10e3, "ms cubic-bezier(0.25, 0.75, 0.75, 0.25) infinite normal forwards;");
        }).join("\n"), "  }"].join("");
      }).join(""), "\n        \n        ").concat(vendorPrefixes.map(function (str) {
        return "@".concat(str, "keyframes ProgressBar {\n          0% {\n            left: -").concat(barHeight, "px;\n          }\n          15% {\n            left: -").concat(barHeight, "px;\n          }\n          85% {\n            left: ").concat(barWidth + barHeight, "px;\n          }\n          100% {\n            left: ").concat(barWidth + barHeight, "px;\n          }\n        }");
      }), ".join(\"\")");
    }
  },
  render: function render(h) {
    var isIndeterminate = this.isIndeterminate,
        className = this.className;
    var theme = this.context.theme;
    var inlineStyles = ProgressBar_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "progress-bar",
      styles: inlineStyles
    });
    var onlyClassName = this.getOnlyClassName();
    theme.styleManager.addCSSTextWithUpdate(this.getCSSText(onlyClassName));
    return h("div", {
      class: theme.classNames(styleClasses.root.className, className),
      style: styleClasses.root.style
    }, [h("div", {
      class: styleClasses.bar.className,
      style: styleClasses.bar.style
    }, isIndeterminate ? Array(5).fill(0).map(function (numb, index) {
      return h("div", {
        key: "".concat(index),
        class: theme.classNames(styleClasses.item.className, "".concat(onlyClassName, "-item-").concat(index)),
        style: styleClasses.item.style
      });
    }) : null)]);
  }
});

function ProgressBar_getStyles(ProgressBar) {
  var theme = ProgressBar.context.theme,
      styles = ProgressBar.styles,
      barWidth = ProgressBar.barWidth,
      barHeight = ProgressBar.barHeight,
      isIndeterminate = ProgressBar.isIndeterminate,
      defaultProgressValue = ProgressBar.defaultProgressValue;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(ProgressBar_objectSpread({
      display: "inline-block",
      verticalAlign: "middle",
      background: isIndeterminate ? void 0 : theme.chromeLow,
      overflow: "hidden",
      width: barWidth,
      height: barHeight
    }, styles)),
    bar: prefixStyle({
      overflow: "hidden",
      background: isIndeterminate ? void 0 : theme.accent,
      position: "relative",
      width: "100%",
      height: "100%",
      transform: isIndeterminate ? void 0 : "translate3d(-".concat((1 - defaultProgressValue) * 100, "%, 0, 0)")
    }),
    item: {
      background: theme.listAccentHigh,
      position: "absolute",
      top: 0,
      left: -barHeight,
      width: barHeight,
      height: barHeight,
      borderRadius: barHeight
    }
  };
}
// CONCATENATED MODULE: ./src/components/ProgressBar/index.js



ProgressBar.install = function (Vue) {
  Vue.component(ProgressBar.name, ProgressBar);
};

/* harmony default export */ var components_ProgressBar = (ProgressBar);
// CONCATENATED MODULE: ./src/components/ProgressRing/ProgressRing.js








function ProgressRing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProgressRing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProgressRing_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProgressRing_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ProgressRing_vendorPrefixes = vendors.map(function (str) {
  return str ? "-".concat(str, "-") : str;
});
/* harmony default export */ var ProgressRing = ({
  name: "ProgressRing",
  props: {
    dotsNumber: {
      type: Number,
      default: 6
    },
    speed: {
      type: Number,
      default: 5000
    },
    size: {
      type: Number,
      default: 100
    },
    dotsStyle: Object,
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    getOnlyClassName: function getOnlyClassName() {
      var dotsNumber = this.dotsNumber,
          speed = this.speed;
      return "react-uwp-progress-ring_".concat(dotsNumber, "_").concat(speed);
    },
    getCSSText: function getCSSText(className) {
      var dotsNumber = this.dotsNumber,
          speed = this.speed;
      return ".".concat(className, " {\n          }\n          ").concat(Array(dotsNumber).fill(0).map(function (name, index) {
        return [".".concat(className, "-item-") + index + " {", ProgressRing_vendorPrefixes.map(function (str) {
          return "    ".concat(str, "animation: CircleLoopFade ").concat(speed, "ms ").concat(index * speed / 40, "ms linear infinite normal forwards;");
        }).join("\n"), "  }"].join("");
      }).join(""), "\n          \n          ").concat(ProgressRing_vendorPrefixes.map(function (str) {
        return "@".concat(str, "keyframes CircleLoopFade {\n            0% {\n              transform: rotateZ(0deg);\n              opacity: 1;\n            }\n            12.5% {\n              transform: rotateZ(180deg);\n              opacity: 0.8;\n            }\n            25% {\n              transform: rotateZ(270deg);\n              opacity: 0.8;\n            }\n            37.5% {\n              transform: rotateZ(300deg);\n              opacity: 0.8;\n            }\n            50% {\n              transform: rotateZ(360deg);\n              opacity: 1;\n            }\n            62.5% {\n              transform: rotateZ(540deg);\n              opacity: 0;\n            }\n            75% {\n              transform: rotateZ(630deg);\n              opacity: 0;\n            }\n            87.5% {\n              transform: rotateZ(660deg);\n              opacity: 0;\n            }\n            100% {\n              transform: rotateZ(720deg);\n              opacity: 1;\n            }\n          }");
      }), ".join(\"\")");
    }
  },
  render: function render(h) {
    var className = this.className;
    var theme = this.context.theme;
    var onlyClassName = this.getOnlyClassName();
    theme.styleManager.addCSSTextWithUpdate(this.getCSSText(onlyClassName));
    var inlineStyles = ProgressRing_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "progress-ring",
      styles: inlineStyles
    });
    return h("div", {
      class: theme.classNames(styleClasses.root.className, className),
      style: styleClasses.root.style
    }, [h("div", null, Array(5).fill(0).map(function (numb, index) {
      return h("div", {
        key: "".concat(index),
        class: theme.classNames(styleClasses.item.className, "".concat(onlyClassName, "-item-").concat(index)),
        style: styleClasses.item.style
      });
    }))]);
  }
});

function ProgressRing_getStyles(ProgressRing) {
  var styles = ProgressRing.styles,
      dotsStyle = ProgressRing.dotsStyle,
      size = ProgressRing.size,
      theme = ProgressRing.context.theme;
  var dotsSize = size / 12;
  return {
    root: theme.prefixStyle(ProgressRing_objectSpread({
      display: "inline-block"
    }, styles, {
      width: size,
      height: size,
      position: "relative"
    })),
    item: theme.prefixStyle(ProgressRing_objectSpread({
      background: theme.accent
    }, dotsStyle, {
      position: "absolute",
      top: 0,
      left: size / 2,
      width: dotsSize,
      height: dotsSize,
      opacity: 0,
      transformOrigin: "0px ".concat(size / 2, "px"),
      borderRadius: dotsSize
    }))
  };
}
// CONCATENATED MODULE: ./src/components/ProgressRing/index.js



ProgressRing.install = function (Vue) {
  Vue.component(ProgressRing.name, ProgressRing);
};

/* harmony default export */ var components_ProgressRing = (ProgressRing);
// CONCATENATED MODULE: ./src/components/RatingControl/RatingControl.js








function RatingControl_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RatingControl_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RatingControl_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RatingControl_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var RatingControl = ({
  name: "RatingControl",
  props: {
    value: {
      type: Number,
      default: 2.5
    },
    maxRating: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: "FavoriteStarFill"
    },
    iconStyle: Object,
    iconRatedStyle: Object,
    label: String,
    isReadOnly: {
      type: Boolean,
      default: false
    },
    iconPadding: {
      type: Number,
      default: 10
    },
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      currRating: this.value
    };
  },
  watch: {
    value: function value(v) {
      this.currRating = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleRationClick: function handleRationClick(e, index) {
      var iconPadding = this.iconPadding,
          maxRating = this.maxRating;
      var lastIndex = maxRating - 1;
      var clientRect = e.currentTarget.getBoundingClientRect();
      var left = e.clientX - clientRect.left;
      var offset = left / (index === lastIndex ? clientRect.width : clientRect.width - iconPadding);
      if (offset > 1) offset = 1;
      var currRating = index + offset;
      this.currRating = currRating;
      this.$emit("input", currRating);
    }
  },
  render: function render(h) {
    var maxRating = this.maxRating,
        icon = this.icon,
        iconStyle = this.iconStyle,
        iconRatedStyle = this.iconRatedStyle,
        label = this.label,
        isReadOnly = this.isReadOnly,
        iconPadding = this.iconPadding,
        currRating = this.currRating,
        handleRationClick = this.handleRationClick;
    var theme = this.context.theme;
    var fontSize = iconStyle ? +Number(iconStyle.fontSize) || 24 : 24;
    var offset = Math.floor(currRating) * (fontSize + iconPadding) + currRating % 1 * fontSize;
    var lastIndex = maxRating - 1;
    var inlineStyles = RatingControl_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "rating-control",
      styles: inlineStyles
    });

    var renderRatings = function renderRatings() {
      var notRated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return h("div", {
        style: theme.prefixStyle(RatingControl_objectSpread({}, notRated ? styleClasses.group.style : styleClasses.groupMask.style, {}, notRated ? void 0 : {
          clipPath: "polygon(0% 0%, ".concat(offset, "px 0%, ").concat(offset, "px 100%, 0% 100%)")
        })),
        class: notRated ? styleClasses.group.className : styleClasses.groupMask.className
      }, Array(maxRating).fill(0).map(function (zero, index) {
        return h(components_Icon, {
          key: "".concat(index),
          props: {
            styles: RatingControl_objectSpread({
              fontSize: 24,
              paddingRight: index === lastIndex ? 0 : iconPadding
            }, iconStyle, {}, notRated ? void 0 : iconRatedStyle)
          },
          nativeOn: {
            click: function click(e) {
              if (!isReadOnly) {
                handleRationClick(e, index);
              }
            }
          }
        }, icon);
      }));
    };

    var normalRender = h("div", {
      class: styleClasses.root.className,
      style: styleClasses.root.style
    }, [renderRatings(), renderRatings(false)]);
    return label ? h("div", {
      style: {
        display: "inline-block"
      }
    }, [h("div", {
      class: styleClasses.labelWrapper.className,
      style: styleClasses.labelWrapper.style
    }, [normalRender, h("span", {}, label)])]) : normalRender;
  }
});

function RatingControl_getStyles(RatingControl) {
  var theme = RatingControl.context.theme,
      styles = RatingControl.styles;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(RatingControl_objectSpread({
      color: theme.baseMediumHigh,
      display: "inline-block",
      position: "relative",
      cursor: "default"
    }, styles)),
    group: prefixStyle({
      display: "inline-block",
      transition: "all .25s"
    }),
    groupMask: prefixStyle({
      display: "inline-block",
      transition: "all .25s",
      color: theme.accent,
      position: "absolute",
      top: 0,
      left: 0
    }),
    labelWrapper: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    })
  };
}
// CONCATENATED MODULE: ./src/components/RatingControl/index.js



RatingControl.install = function (Vue) {
  Vue.component(RatingControl.name, RatingControl);
};

/* harmony default export */ var components_RatingControl = (RatingControl);
// CONCATENATED MODULE: ./src/components/ScrollReveal/ScrollReveal.js





/* harmony default export */ var ScrollReveal = ({
  name: "ScrollReveal",
  props: {
    speed: {
      type: Number,
      default: 250
    },
    leaveStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "scale(0)"
        };
      }
    },
    enterStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "scale(1)"
        };
      }
    },
    transitionTimingFunction: String,
    topOffset: {
      type: Number,
      default: 0
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    useWrapper: {
      type: Boolean,
      default: false
    },
    wrapperStyle: Object,
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      animated: false
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  updated: function updated() {
    if (!this.context.theme.scrollReveals.includes(this)) {
      this.context.theme.scrollReveals.push(this);
    }
  },
  mounted: function mounted() {
    this.context.theme.scrollReveals.push(this);
    this.setBeforeEnterStyle(this.$el);
  },
  destroyed: function destroyed() {
    var scrollReveals = this.context.theme.scrollReveals;
    scrollReveals.splice(scrollReveals.indexOf(this), 1);
  },
  methods: {
    setBeforeEnterStyle: function setBeforeEnterStyle() {
      this.$refs.customAnimate.setBeforeEnterStyle(this.$el);
    },
    setEnterStyle: function setEnterStyle() {
      this.$refs.customAnimate.setEnterStyle(this.$el);
    },
    setLeaveStyle: function setLeaveStyle() {
      this.$refs.customAnimate.setLeaveStyle(this.$el);
    }
  },
  render: function render(h) {
    var styles = this.styles,
        leaveStyle = this.leaveStyle,
        enterStyle = this.enterStyle,
        speed = this.speed,
        transitionTimingFunction = this.transitionTimingFunction,
        useWrapper = this.useWrapper,
        wrapperStyle = this.wrapperStyle;
    return h(CustomAnimate, {
      props: {
        styles: styles,
        speed: speed,
        transitionTimingFunction: transitionTimingFunction,
        leaveStyle: leaveStyle,
        enterStyle: enterStyle,
        appearAnimate: false,
        useWrapper: useWrapper,
        wrapperStyle: wrapperStyle
      },
      ref: "customAnimate"
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/ScrollReveal/index.js



ScrollReveal.install = function (Vue) {
  Vue.component(ScrollReveal.name, ScrollReveal);
};

/* harmony default export */ var components_ScrollReveal = (ScrollReveal);
// CONCATENATED MODULE: ./src/components/SplitView/SplitViewPane.js

/* harmony default export */ var SplitViewPane = ({
  name: "SplitViewPane",
  props: {
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var styles = this.styles,
        className = this.className;
    var theme = this.context.theme;
    return h("div", {
      style: theme.prefixStyle(styles),
      class: className
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/SplitView/SplitView.js












function SplitView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SplitView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SplitView_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SplitView_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var SplitView = ({
  name: "SplitView",
  props: {
    styles: Object,
    className: String,
    paneStyle: Object,
    value: {
      type: Boolean,
      default: false
    },
    displayMode: {
      type: String,
      validator: function validator(value) {
        return ["compact", "overlay"].includes(value);
      },
      default: "compact"
    },
    expandedWidth: {
      type: Number,
      default: 320
    },
    panePosition: {
      type: String,
      validator: function validator(value) {
        return ["left", "right"].includes(value);
      },
      default: "right"
    },
    clickExcludeElms: {
      type: Array
    }
  },
  data: function data() {
    return {
      expanded: this.value,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    value: function value(v) {
      this.expanded = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      var clickExcludeElms = this.clickExcludeElms;
      this.addBlurEvent.setConfig({
        addListener: this.expanded,
        clickExcludeElm: clickExcludeElms ? [].concat(_toConsumableArray(clickExcludeElms), [this.rootElm]) : this.rootElm,
        blurCallback: function blurCallback() {
          _this.expanded = false;

          _this.$emit("input", false);

          _this.$emit("closePane");
        },
        blurKeyCodes: [27]
      });
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var className = this.className;
    var theme = this.context.theme;
    var splitViewPanes = [];
    var childView = [];
    var inlineStyles = SplitView_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "split-view",
      styles: inlineStyles
    });
    var children = this.$slots.default;

    if (children) {
      children.forEach(function (child) {
        if (child.componentOptions && child.componentOptions.tag === SplitViewPane.name) {
          Object.assign(child.componentOptions.propsData, {
            styles: SplitView_objectSpread({}, styleClasses.pane.style, {}, child.componentOptions.propsData.styles),
            className: styleClasses.pane.className
          });
          splitViewPanes.push(child);
        } else {
          childView.push(child);
        }
      });
    }

    return h("div", {
      class: theme.classNames(styleClasses.root.className, className),
      style: styleClasses.root.style
    }, [].concat(childView, splitViewPanes));
  }
});

function SplitView_getStyles(SplitView) {
  var context = SplitView.context,
      styles = SplitView.styles,
      expandedWidth = SplitView.expandedWidth,
      displayMode = SplitView.displayMode,
      panePosition = SplitView.panePosition,
      paneStyle = SplitView.paneStyle,
      expanded = SplitView.expanded;
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  var isCompact = displayMode === "compact";
  var isOverlay = displayMode === "overlay";
  var panePositionIsRight = panePosition === "right";
  var transition = "all .25s ease-in-out";
  return {
    root: prefixStyle(SplitView_objectSpread({
      color: theme.baseHigh,
      background: theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow,
      display: "inline-block",
      position: "relative",
      margin: 0,
      padding: 0,
      transition: transition
    }, isCompact ? {
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "auto",
      height: "auto"
    } : void 0, {}, isOverlay ? {
      width: "100%"
    } : void 0, {}, styles, {
      overflow: "hidden"
    })),
    pane: prefixStyle(SplitView_objectSpread({
      background: theme.useFluentDesign ? theme.acrylicTexture40.background : theme.altHigh,
      transition: transition,
      boxShadow: theme.useFluentDesign ? "rgba(0, 0, 0, 0.34) 0px 4px 24px" : void 0
    }, isCompact ? {
      height: "100%",
      width: expandedWidth,
      transform: "translate3d(".concat(expanded ? 0 : expandedWidth, "px, 0, 0)")
    } : void 0, {}, isOverlay ? {
      position: "absolute",
      top: 0,
      right: panePositionIsRight ? 0 : void 0,
      left: panePositionIsRight ? void 0 : 0,
      height: "100%",
      width: expandedWidth,
      transform: "translate3d(".concat(expanded ? 0 : expandedWidth, "px, 0, 0)")
    } : void 0, {}, paneStyle))
  };
}
// CONCATENATED MODULE: ./src/components/SplitView/index.js




SplitView.install = function (Vue) {
  Vue.component(SplitView.name, SplitView);
  Vue.component(SplitViewPane.name, SplitViewPane);
};

/* harmony default export */ var components_SplitView = (SplitView);
// CONCATENATED MODULE: ./src/components/SplitViewCommand/SplitViewCommand.js






function SplitViewCommand_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SplitViewCommand_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SplitViewCommand_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SplitViewCommand_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var SplitViewCommand = ({
  name: "SplitViewCommand",
  props: {
    label: String,
    icon: String,
    visited: Boolean,
    iconStyle: Object,
    isTenFt: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var className = this.className,
        label = this.label,
        icon = this.icon,
        visited = this.visited,
        isTenFt = this.isTenFt;
    var theme = this.context.theme;
    var inlineStyles = SplitViewCommand_getStyles(this);
    var rootStyleClasses = theme.prepareStyle({
      className: "split-view-command",
      style: inlineStyles.root,
      extendsClassName: className
    });
    var iconStyleClasses = theme.prepareStyle({
      className: "split-view-command-icon",
      style: inlineStyles.icon,
      extendsClassName: className
    });
    var labelStyleClasses = theme.prepareStyle({
      className: "split-view-command-label",
      style: inlineStyles.label,
      extendsClassName: className
    });
    var visitedBorderStyleClasses = theme.prepareStyle({
      className: "split-view-command-border",
      style: inlineStyles.visitedBorder,
      extendsClassName: className
    });
    var event = {
      on: bindEvent(this)
    };

    var splitViewParams = SplitViewCommand_objectSpread({
      style: rootStyleClasses.style,
      class: rootStyleClasses.className
    }, event);

    return h(PseudoClasses, {
      props: {
        props: SplitViewCommand_objectSpread({}, splitViewParams, {}, this.$props)
      }
    }, [h("div", splitViewParams, [visited && !isTenFt ? h("div", {
      style: visitedBorderStyleClasses.style,
      class: visitedBorderStyleClasses.className
    }) : null, h(components_Icon, {
      props: {
        styles: iconStyleClasses.style,
        className: iconStyleClasses.className
      }
    }, icon), label && h("div", {
      style: labelStyleClasses.style,
      class: labelStyleClasses.className
    }, label)])]);
  }
});

function SplitViewCommand_getStyles(SplitViewCommand) {
  var context = SplitViewCommand.context,
      styles = SplitViewCommand.styles,
      iconStyle = SplitViewCommand.iconStyle,
      visited = SplitViewCommand.visited,
      isTenFt = SplitViewCommand.isTenFt,
      showLabel = SplitViewCommand.showLabel;
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(SplitViewCommand_objectSpread({
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: isTenFt ? visited ? theme.listAccentLow : "none" : "none",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      transition: "all .25s 0s ease-in-out",
      "&:hover": {
        background: isTenFt ? theme.accent : theme.baseLow
      }
    }, styles)),
    visitedBorder: {
      width: 0,
      borderLeft: "4px solid ".concat(theme.accent),
      height: "50%",
      left: 0,
      top: "25%",
      position: "absolute"
    },
    icon: prefixStyle(SplitViewCommand_objectSpread({
      cursor: "default",
      flex: "0 0 auto",
      width: 48,
      height: 48,
      lineHeight: "48px",
      color: isTenFt ? void 0 : visited ? theme.accent : theme.baseHigh,
      fontSize: 16
    }, iconStyle)),
    label: {
      color: isTenFt ? void 0 : visited ? theme.accent : theme.baseHigh,
      cursor: "default",
      opacity: showLabel ? 1 : 0,
      transition: "opacity .25s"
    }
  };
}
// CONCATENATED MODULE: ./src/components/SplitViewCommand/index.js



SplitViewCommand.install = function (Vue) {
  Vue.component(SplitViewCommand.name, SplitViewCommand);
};

/* harmony default export */ var components_SplitViewCommand = (SplitViewCommand);
// CONCATENATED MODULE: ./src/components/Tabs/Tab.js






function Tab_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tab_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tab_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var Tab = ({
  name: "Tab",
  props: {
    styles: Object,
    className: String,
    title: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var styles = this.styles;
    var theme = this.context.theme;
    return h("div", {
      style: Tab_objectSpread({
        display: "inline-block",
        verticalAlign: "middle"
      }, theme.prefixStyle(styles))
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/Tabs.js










function Tabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tabs_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tabs_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var Tabs = ({
  name: "Tabs",
  props: {
    value: {
      type: Number,
      default: 0
    },
    tabTitleStyle: Object,
    tabTitleFocusStyle: Object,
    tabStyle: Object,
    useAnimate: {
      type: Boolean,
      default: true
    },
    animateMode: {
      type: String,
      validator: function validator(value) {
        return ["in", "out", "in-out"].includes(value);
      },
      default: "in"
    },
    animateSpeed: {
      type: Number,
      default: 500
    },
    animateEnterStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "translateX(0)",
          opacity: 1
        };
      }
    },
    animateLeaveStyle: {
      type: Object,
      default: function _default() {
        return {
          transform: "translateX(100%)",
          opacity: 0
        };
      }
    },
    styles: Object,
    className: String,
    renderTitle: {
      type: Function,
      default: function _default(h, title) {
        return title;
      }
    }
  },
  data: function data() {
    return {
      tabFocusIndex: this.value || 0
    };
  },
  watch: {
    value: function value(v) {
      this.tabFocusIndex = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var tabStyle = this.tabStyle,
        renderTitle = this.renderTitle,
        useAnimate = this.useAnimate,
        animateMode = this.animateMode,
        animateSpeed = this.animateSpeed,
        animateEnterStyle = this.animateEnterStyle,
        animateLeaveStyle = this.animateLeaveStyle,
        tabFocusIndex = this.tabFocusIndex;
    var theme = this.context.theme;
    var childrenArray = this.$slots.default;
    var isAvailableArray = childrenArray && childrenArray.length > 0;
    var tabs = isAvailableArray && childrenArray.filter(function (child) {
      return child.componentOptions && child.componentOptions.tag === Tab.name;
    });
    var currTab = tabs && tabs[tabFocusIndex];
    var inlineStyles = Tabs_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "tabs",
      styles: inlineStyles
    });
    var vm = this;
    var normalRender = h("div", {
      key: "tabStyle-".concat(tabFocusIndex),
      class: styleClasses.tabStyle.className,
      style: styleClasses.tabStyle.style
    }, [currTab]);
    return h("div", {
      class: styleClasses.root.className,
      style: styleClasses.root.style
    }, [h("div", {
      class: styleClasses.titles.className,
      style: styleClasses.titles.style
    }, tabs && tabs.map(function (tab, index) {
      var tabTitle = tab.componentOptions.propsData.title || "Tabs Items ".concat(index + 1);
      return h("span", Tabs_objectSpread({}, index === tabFocusIndex ? {
        class: styleClasses.titleFocus.className,
        style: styleClasses.titleFocus.style
      } : {
        class: styleClasses.title.className,
        style: styleClasses.title.style
      }, {
        on: {
          click: function click() {
            vm.tabFocusIndex = index;
            vm.$emit("input", index);
          }
        }
      }), [renderTitle(h, tabTitle)]);
    })), useAnimate ? h(CustomAnimate, {
      props: {
        mode: animateMode,
        speed: animateSpeed,
        enterStyle: animateEnterStyle,
        leaveStyle: animateLeaveStyle,
        wrapperStyle: Tabs_objectSpread({
          width: "100%",
          height: "100%"
        }, tabStyle),
        appearAnimate: false
      }
    }, [normalRender]) : normalRender]);
  }
});

function Tabs_getStyles(Tabs) {
  var theme = Tabs.context.theme,
      tabTitleStyle = Tabs.tabTitleStyle,
      tabTitleFocusStyle = Tabs.tabTitleFocusStyle,
      tabStyle = Tabs.tabStyle,
      styles = Tabs.styles;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(Tabs_objectSpread({
      color: theme.baseMediumHigh,
      display: "inline-block",
      verticalAlign: "middle",
      overflow: "hidden"
    }, styles)),
    titles: prefixStyle({
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      width: "100%",
      overflow: "auto"
    }),
    title: prefixStyle(Tabs_objectSpread({
      color: theme.baseHigh,
      borderBottom: "1px solid transparent",
      fontWeight: "lighter",
      cursor: "pointer",
      fontSize: 18,
      padding: "4px 12px",
      transition: "all .25s"
    }, tabTitleStyle)),
    titleFocus: prefixStyle(Tabs_objectSpread({
      color: theme.baseHigh,
      fontWeight: "lighter",
      cursor: "pointer",
      fontSize: 18,
      padding: "4px 12px",
      transition: "all .25s"
    }, tabTitleStyle, {
      borderBottom: "2px solid ".concat(theme.accent)
    }, tabTitleFocusStyle)),
    tabStyle: prefixStyle(Tabs_objectSpread({
      width: "100%",
      height: "100%"
    }, tabStyle))
  };
}
// CONCATENATED MODULE: ./src/components/Tabs/index.js




Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tab.name, Tab);
};

/* harmony default export */ var components_Tabs = (Tabs);
// CONCATENATED MODULE: ./src/components/TransformCard/TransformCard.js








function TransformCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TransformCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TransformCard_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TransformCard_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var TransformCard = ({
  name: "TransformCard",
  props: {
    perspective: {
      type: [String, Number],
      default: 200
    },
    xMaxRotate: {
      type: Number,
      default: 15
    },
    yMaxRotate: {
      type: Number,
      default: 15
    },
    defaultRotateX: {
      type: Number,
      default: 0
    },
    defaultRotateY: {
      type: Number,
      default: 0
    },
    leaveSpeed: {
      type: Number,
      default: 750
    },
    leaveTimingFunction: {
      type: String,
      default: ""
    },
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      isEnter: null
    };
  },
  methods: {
    handleMouseMove: function handleMouseMove(e) {
      var xMaxRotate = this.xMaxRotate,
          yMaxRotate = this.yMaxRotate,
          defaultRotateX = this.defaultRotateX,
          defaultRotateY = this.defaultRotateY;
      var currentTarget = e.currentTarget,
          clientX = e.clientX,
          clientY = e.clientY;

      var _currentTarget$getBou = currentTarget.getBoundingClientRect(),
          width = _currentTarget$getBou.width,
          height = _currentTarget$getBou.height,
          left = _currentTarget$getBou.left,
          top = _currentTarget$getBou.top;

      var xOffset = (left + width - clientX) / width;
      var yOffset = (top + height - clientY) / height;
      Object.assign(this.$refs.wrapperElm.style, {
        transition: "all 0ms",
        transform: "rotateX(".concat(defaultRotateX + (yOffset - 0.5) * xMaxRotate, "deg) rotateY(").concat(defaultRotateY + (0.5 - xOffset) * yMaxRotate, "deg)")
      });
    },
    handleMouseLeave: function handleMouseLeave() {
      var defaultRotateX = this.defaultRotateX,
          defaultRotateY = this.defaultRotateY,
          leaveSpeed = this.leaveSpeed,
          leaveTimingFunction = this.leaveTimingFunction;
      var transition = "all ".concat(leaveSpeed, "ms ").concat(leaveTimingFunction ? " " + leaveTimingFunction : "");
      Object.assign(this.$refs.wrapperElm.style, {
        transition: transition,
        transform: "rotateX(".concat(defaultRotateX, "deg) rotateY(").concat(defaultRotateY, "deg)")
      });
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var handleMouseLeave = this.handleMouseLeave,
        handleMouseMove = this.handleMouseMove;
    var styleClasses = TransformCard_getStyles(this);
    return h("div", {
      style: styleClasses.root,
      on: {
        mouseleave: handleMouseLeave,
        mousemove: handleMouseMove
      }
    }, [h("div", {
      style: styleClasses.wrapper,
      ref: "wrapperElm",
      on: {
        mouseleave: handleMouseLeave,
        mousemove: handleMouseMove
      }
    }, this.$slots.default)]);
  }
});

function TransformCard_getStyles(TransformCard) {
  var theme = TransformCard.context.theme,
      perspective = TransformCard.perspective,
      styles = TransformCard.styles,
      defaultRotateX = TransformCard.defaultRotateX,
      defaultRotateY = TransformCard.defaultRotateY,
      leaveSpeed = TransformCard.leaveSpeed,
      leaveTimingFunction = TransformCard.leaveTimingFunction;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(TransformCard_objectSpread({
      display: "inline-block",
      perspective: perspective
    }, styles)),
    wrapper: theme.prefixStyle({
      display: "inline-block",
      transition: "all ".concat(leaveSpeed, "ms ").concat(leaveTimingFunction ? " " + leaveTimingFunction : ""),
      transform: "rotateX(".concat(defaultRotateX, "deg) rotateY(").concat(defaultRotateY, "deg)")
    })
  };
}
// CONCATENATED MODULE: ./src/components/TransformCard/index.js



TransformCard.install = function (Vue) {
  Vue.component(TransformCard.name, TransformCard);
};

/* harmony default export */ var components_TransformCard = (TransformCard);
// CONCATENATED MODULE: ./src/components/TreeView/TreeView.js












function TreeView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TreeView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TreeView_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TreeView_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var TreeView = ({
  name: "TreeView",
  props: {
    listSource: {
      type: Array,
      require: true
    },
    iconDirection: {
      type: String,
      validator: function validator(value) {
        return ["left", "right"].includes(value);
      },
      default: "left"
    },
    itemHeight: {
      type: Number,
      default: 32
    },
    itemPadding: Number,
    iconPadding: {
      type: Number,
      default: 2
    },
    background: String,
    showFocus: Boolean,
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      init: true,
      chooseTreeItem: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    setChooseItem: function setChooseItem(chooseTreeItem) {
      if (this.chooseTreeItem && chooseTreeItem !== this.chooseTreeItem) {
        this.chooseTreeItem.visited = false;
      }

      chooseTreeItem.visited = true;

      if (chooseTreeItem.children) {
        chooseTreeItem.expanded = !chooseTreeItem.expanded;
      }

      this.chooseTreeItem = chooseTreeItem;
      this.init = false;
      this.$emit("chooseTreeItem", chooseTreeItem);
      this.$forceUpdate();
    },
    renderTree: function renderTree(h) {
      var _this = this;

      var theme = this.context.theme;
      var iconDirection = this.iconDirection,
          showFocus = this.showFocus,
          itemHeight = this.itemHeight,
          iconPadding = this.iconPadding,
          itemPadding = this.itemPadding,
          listSource = this.listSource,
          init = this.init;
      var _this$$slots = this.$slots,
          headerIcon = _this$$slots.headerIcon,
          itemIcon = _this$$slots.itemIcon;
      var styles = TreeView_getStyles(this);

      var renderList = function renderList(item, index, isChild) {
        var prevIndexArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var indexArray = prevIndexArray.concat(index);

        if (typeof item === "string" || typeof item === "number") {
          var lastIndex = indexArray.splice(-1)[0];
          var itemParent = listSource;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = indexArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var numb = _step.value;
              itemParent = itemParent.children ? itemParent.children[numb] : itemParent[numb];
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var newData = {
            title: item
          };

          if (itemParent.children) {
            itemParent.children[lastIndex] = newData;
          } else {
            itemParent[lastIndex] = newData;
          }

          item = newData;
        }

        var _item = item,
            title = _item.title,
            expanded = _item.expanded,
            disabled = _item.disabled,
            visited = _item.visited,
            focus = _item.focus,
            children = _item.children,
            hidden = _item.hidden,
            style = _item.style,
            hoverStyle = _item.hoverStyle;
        var titleNode = item.render ? item.render(h, item) : title;
        var haveChild = Array.isArray(children) && children.length !== 0;
        var isRight = iconDirection === "right";
        var isVisited = visited && !haveChild || visited && init;
        var inlineStyles = hidden ? null : {
          root: {
            paddingLeft: isChild ? isRight ? itemHeight / 2.8 : itemPadding || itemHeight * 2 / 3 : void 0
          },
          title: TreeView_objectSpread({
            color: disabled ? theme.baseLow : void 0
          }, styles.title),
          titleNode: TreeView_objectSpread({
            cursor: disabled ? "not-allowed" : "pointer",
            pointerEvents: disabled ? "none" : void 0,
            paddingLeft: isRight ? 0 : haveChild ? iconPadding : itemHeight / 8,
            fontSize: itemHeight / 2.25,
            height: "100%",
            lineHeight: "".concat(itemHeight, "px")
          }, styles.titleNode, {}, style),
          icon: {
            cursor: disabled ? "not-allowed" : "pointer",
            color: disabled ? theme.baseLow : void 0,
            fontSize: itemHeight / 2,
            lineHeight: "".concat(itemHeight / 2, "px"),
            width: itemHeight / 2,
            height: itemHeight / 2,
            flex: "0 0 auto",
            zIndex: 1,
            transform: "rotateZ(".concat(expanded ? "-180deg" : isRight ? "0deg" : "-90deg", ")")
          },
          behindBG: TreeView_objectSpread({
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 0.25s",
            zIndex: 0,
            background: focus && showFocus ? theme.accent : isVisited ? theme.listAccentLow : "none"
          }, styles.behindBG),
          child: haveChild ? theme.prefixStyle({
            height: "auto",
            overflow: expanded ? void 0 : "hidden",
            opacity: expanded ? 1 : 0,
            transform: "translateY(".concat(expanded ? 0 : -10, "px)"),
            transformOrigin: "top",
            transition: "all .25s"
          }) : void 0
        };
        var listStyles = hidden ? null : theme.prepareStyles({
          className: "tree-view",
          styles: inlineStyles
        });
        var vm = _this;
        return hidden ? null : h("div", {
          key: "".concat(index),
          class: listStyles.root.className,
          style: listStyles.root.style
        }, [h("div", {
          class: listStyles.title.className,
          style: listStyles.title.style,
          on: {
            mouseenter: function mouseenter(e) {
              if (!disabled) {
                var targetChild = e.target.children;
                var behindElm = targetChild[targetChild.length - 1];

                if (behindElm.classList.contains(listStyles.behindBG.className)) {
                  Object.assign(behindElm.style, TreeView_objectSpread({
                    background: isVisited ? theme.accent : theme.baseLow
                  }, hoverStyle));
                }
              }
            },
            mouseleave: function mouseleave(e) {
              if (!disabled) {
                var targetChild = e.target.children;
                var behindElm = targetChild[targetChild.length - 1];

                if (behindElm.classList.contains(listStyles.behindBG.className)) {
                  Object.assign(behindElm.style, {
                    background: isVisited ? theme.listAccentLow : "none"
                  });
                }
              }
            }
          }
        }, [h("div", {
          class: listStyles.titleNode.className,
          style: listStyles.titleNode.style,
          on: {
            click: function click() {
              if (!disabled) {
                vm.setChooseItem(item);
              }
            }
          }
        }, titleNode), haveChild ? headerIcon : itemIcon, (headerIcon || itemIcon ? headerIcon && itemIcon : true) && haveChild && h(components_Icon, {
          props: {
            styles: listStyles.icon.style,
            className: listStyles.icon.className
          },
          on: {
            click: function click() {
              if (!disabled) {
                vm.setChooseItem(item);
              }
            }
          }
        }, "ScrollChevronDownLegacy"), h("div", {
          class: listStyles.behindBG.className,
          style: TreeView_objectSpread({}, listStyles.behindBG.style, {
            background: focus && showFocus ? theme.accent : isVisited ? theme.listAccentLow : "none"
          }),
          on: {
            click: function click() {
              if (!disabled) {
                vm.setChooseItem(item);
              }
            }
          }
        })]), haveChild && h("div", {
          class: listStyles.child.className,
          style: listStyles.child.style
        }, expanded ? children.map(function (item, index) {
          return renderList(item, index, true, indexArray);
        }) : null)]);
      };

      return listSource.map(function (list, index) {
        return renderList(list, index);
      });
    }
  },
  render: function render(h) {
    var listSource = this.listSource,
        className = this.className;
    var styles = TreeView_getStyles(this);
    var prepareStyle = this.context.theme.prepareStyle({
      style: styles.root,
      className: "tree-view",
      extendsClassName: className
    });
    return h("div", {
      class: prepareStyle.className,
      style: prepareStyle.style
    }, listSource ? this.renderTree(h) : null);
  }
});

function TreeView_getStyles(TreeView) {
  var context = TreeView.context,
      iconDirection = TreeView.iconDirection,
      itemHeight = TreeView.itemHeight,
      styles = TreeView.styles,
      background = TreeView.background;
  var isRight = iconDirection === "right";
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(TreeView_objectSpread({
      fontSize: 14,
      overflowX: "hidden",
      overflowY: "auto",
      color: theme.baseMediumHigh,
      background: background || (theme.useFluentDesign ? theme.acrylicTexture60.background : "none"),
      width: itemHeight * 10,
      padding: "0 16px"
    }, styles)),
    title: prefixStyle({
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      width: "100%",
      position: "relative",
      fontSize: 14,
      display: "flex",
      height: itemHeight,
      flexDirection: "row".concat(isRight ? "" : "-reverse"),
      alignItems: "center",
      justifyContent: isRight ? "space-between" : "flex-end",
      transition: "all .25s 0s ease-in-out"
    }),
    titleNode: prefixStyle({
      color: "inherit",
      zIndex: 1,
      width: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }),
    behindBG: {
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "400%",
      height: "100%"
    }
  };
}
// CONCATENATED MODULE: ./src/components/TreeView/index.js



TreeView.install = function (Vue) {
  Vue.component(TreeView.name, TreeView);
};

/* harmony default export */ var components_TreeView = (TreeView);
// CONCATENATED MODULE: ./src/common/VNodeClone.js

function cloneVNode(h, vnode, _ref) {
  var props = _ref.props,
      on = _ref.on,
      key = _ref.key,
      style = _ref.style,
      className = _ref.class,
      attrs = _ref.attrs,
      domProps = _ref.domProps,
      ref = _ref.ref,
      refInFor = _ref.refInFor,
      slot = _ref.slot;

  if (!vnode.tag) {
    return vnode;
  }

  var children = vnode.children ? vnode.children.map(function (x) {
    return cloneVNode(h, x, {});
  }) : [];
  var isComponent = !!vnode.componentOptions;
  var tag = isComponent ? vnode.componentOptions.Ctor : vnode.tag;
  var data = isComponent ? cloneComponentData(vnode) : Object.assign({}, vnode.data);

  if (props) {
    data.props = Object.assign(data.props || {}, props);
  }

  if (on) {
    data.on = Object.assign(data.on || {}, on);
  }

  if (key) {
    data.key = key;
  }

  if (style) {
    data.style = Object.assign(data.style || {}, style);
  }

  if (attrs) {
    data.attrs = Object.assign(data.attrs || {}, style);
  }

  if (className) {
    data.class = className;
  }

  if (domProps) {
    data.domProps = Object.assign(data.domProps || {}, style);
  }

  if (ref) {
    data.ref = ref;
  }

  if (refInFor) {
    data.refInFor = refInFor;
  }

  if (slot) {
    data.slot = slot;
  }

  return h(tag, data, children);
}
function cloneComponentData(vnode) {
  var data = Object.assign({}, vnode.data, {
    hooks: undefined
  });
  data.props = vnode.componentOptions.propsData;
  data.on = Object.assign(data.on || {}, vnode.componentOptions.listeners);
  return data;
}
// CONCATENATED MODULE: ./src/components/NavigationView/NavigationView.js












function NavigationView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NavigationView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NavigationView_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NavigationView_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* harmony default export */ var NavigationView = ({
  name: "NavigationView",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    background: String,
    initWidth: {
      type: Number,
      default: 48
    },
    expandedWidth: {
      type: Number,
      default: 320
    },
    isControlled: Boolean,
    displayMode: {
      type: String,
      validator: function validator(value) {
        return ["overlay", "compact", "minimal"].includes(value);
      },
      default: "compact"
    },
    pageTitle: String,
    paneStyle: Object,
    isTenFt: {
      type: Boolean,
      default: false
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    focusNavigationNodeIndex: Number,
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      expanded: this.value,
      focusNodeIndex: this.focusNavigationNodeIndex,
      currDisplayMode: this.displayMode,
      currInitWidth: this.initWidth,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    value: function value(v) {
      this.expanded = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.expanded,
        clickExcludeElm: this.$refs.paneElm,
        blurCallback: function blurCallback() {
          _this.toggleExpanded(false);
        },
        blurKeyCodes: [27]
      });
    },
    toggleExpanded: function toggleExpanded() {
      var expanded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.expanded;
      this.expanded = expanded;
      this.$emit("input", expanded);
    },
    autoResizeFunc: function autoResizeFunc() {
      if (window.innerWidth < 1280) {
        if (this.currDisplayMode !== "compact") {
          this.currDisplayMode = "compact";
          this.currInitWidth = 0;
        }
      } else {
        if (this.state.currDisplayMode === "compact") {
          this.currDisplayMode = "minimal";
          this.currInitWidth = 48;
        }
      }
    },
    topIcon: function topIcon(h, inlineStyles) {
      var isControlled = this.isControlled,
          theme = this.context.theme;
      var topIcon = this.$slots.topIcon;
      var vm = this;

      if (topIcon) {
        topIcon.forEach(function (item) {
          var _ref = item.data.on || {},
              _click = _ref.click;

          Object.assign(item.data.on, {
            click: function click() {
              if (!isControlled) {
                vm.toggleExpanded();

                if (_click) {
                  _click();
                }
              }
            }
          });
        });
        return topIcon;
      }

      return [h(components_IconButton, {
        props: {
          styles: inlineStyles.icon,
          hoverStyle: {
            background: theme.baseLow
          },
          activeStyle: {
            background: theme.baseMediumLow
          }
        },
        on: {
          click: function click() {
            if (!isControlled) {
              vm.toggleExpanded();
            }
          }
        }
      }, "GlobalNavButton")];
    },
    getNewNode: function getNewNode(currNode, index, expanded, haveExpandedNode) {
      var focusNodeIndex = this.focusNodeIndex;
      var vm = this;

      var _ref2 = currNode.componentOptions.listeners || {},
          _click2 = _ref2.click;

      var data = {
        key: "".concat(index, " ").concat(expanded),
        props: {
          visited: focusNodeIndex === void 0 ? void 0 : focusNodeIndex === index
        },
        on: {
          click: function click(e) {
            vm.focusNodeIndex = index;
            vm.expanded = haveExpandedNode ? true : vm.expanded;

            if (_click2) {
              _click2(e);
            }
          }
        }
      };
      var isSplitViewCommand = currNode.componentOptions && currNode.componentOptions.tag === components_SplitViewCommand.name;

      if (isSplitViewCommand) {
        data.props.showLabel = this.expanded;
      }

      return cloneVNode(this.$createElement, currNode, data);
    }
  },
  mounted: function mounted() {
    if (this.autoResize) {
      this.autoResizeFunc();
      window.addEventListener("resize", this.autoResizeFunc);
    }

    if (!this.isControlled) {
      this.addBlurEventMethod();
    }
  },
  updated: function updated() {
    if (!this.isControlled) {
      this.addBlurEventMethod();
    }
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var topIcon = this.topIcon,
        pageTitle = this.pageTitle,
        className = this.className,
        expanded = this.expanded,
        getNewNode = this.getNewNode;
    var theme = this.context.theme;
    var _this$$slots = this.$slots,
        navigationTopNodes = _this$$slots.navigationTopNodes,
        navigationBottomNodes = _this$$slots.navigationBottomNodes;
    var inlineStyles = NavigationView_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "navigation-view",
      styles: inlineStyles
    });
    var nodeIndex = -1;
    return h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className)
    }, [h("div", {
      style: styleClasses.paneParent.style,
      class: styleClasses.paneParent.className,
      ref: "paneElm"
    }, [h("div", {
      style: styleClasses.pane.style,
      class: styleClasses.pane.className
    }, [h("div", {
      style: styleClasses.paneTop.style,
      class: styleClasses.paneTop.className
    }, [h("div", {
      style: styleClasses.topIcon.style,
      class: styleClasses.topIcon.className
    }, [].concat(_toConsumableArray(topIcon(h, inlineStyles)), [h("p", {
      style: styleClasses.pageTitle.style,
      class: styleClasses.pageTitle.className
    }, pageTitle)])), h("div", {
      style: styleClasses.paneTopIcons.style,
      class: styleClasses.paneTopIcons.className
    }, navigationTopNodes && navigationTopNodes.filter(function (node) {
      return node.tag !== void 0;
    }).map(function (node, index) {
      var currNode = node;
      var haveExpandedNode = "expanded" in node;
      if (node.default) currNode = node.default;
      if (haveExpandedNode && expanded) currNode = node.expanded;
      ++nodeIndex;
      return h(SlideInOut, {
        props: {
          appearAnimate: false,
          mode: "in",
          direction: "right",
          key: "".concat(index),
          styles: {
            height: 48
          }
        }
      }, [getNewNode(currNode, nodeIndex, Boolean(expanded && haveExpandedNode), haveExpandedNode)]);
    }))]), h("div", {
      style: styleClasses.paneBottomIcons.style,
      class: styleClasses.paneBottomIcons.className
    }, navigationBottomNodes && navigationBottomNodes.filter(function (node) {
      return node.tag !== void 0;
    }).map(function (node, index) {
      var currNode = node;
      var haveExpandedNode = "expanded" in node;
      if (node.default) currNode = node.default;
      if (haveExpandedNode && expanded) currNode = node.expanded;
      ++nodeIndex;
      return h(SlideInOut, {
        props: {
          appearAnimate: false,
          mode: "in",
          direction: "right",
          key: "".concat(index),
          styles: {
            height: 48
          }
        }
      }, [getNewNode(currNode, nodeIndex, Boolean(expanded && haveExpandedNode), haveExpandedNode)]);
    }))])]), h("div", {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden"
      }
    }, this.$slots.default)]);
  }
});

function NavigationView_getStyles(NavigationView) {
  var context = NavigationView.context,
      expandedWidth = NavigationView.expandedWidth,
      styles = NavigationView.styles,
      paneStyle = NavigationView.paneStyle,
      background = NavigationView.background,
      currInitWidth = NavigationView.currInitWidth,
      expanded = NavigationView.expanded,
      currDisplayMode = NavigationView.currDisplayMode;
  var _NavigationView$$slot = NavigationView.$slots,
      navigationTopNodes = _NavigationView$$slot.navigationTopNodes,
      navigationBottomNodes = _NavigationView$$slot.navigationBottomNodes;
  var isOverLay = currDisplayMode === "overlay";
  var isMinimal = currDisplayMode === "minimal";
  var isCompact = currDisplayMode === "compact";
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle; // eslint-disable-next-line no-unused-vars

  var minHeight = isMinimal ? 0 : 48;

  if (navigationTopNodes) {
    minHeight += 48 * navigationTopNodes.length;
  }

  if (navigationBottomNodes) {
    minHeight += 48 * navigationBottomNodes.length;
  }

  var currBackground = background || (theme.useFluentDesign ? theme.acrylicTexture40.background : theme.altHigh);
  var transition = "width .25s ease-in-out";
  return {
    root: prefixStyle(NavigationView_objectSpread({
      display: isCompact ? "flex" : "inline-block",
      fontSize: 16,
      color: theme.baseHigh,
      height: isCompact ? "100%" : void 0,
      position: "relative"
    }, styles)),
    topIcon: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: isMinimal ? "100%" : expandedWidth,
      background: currBackground,
      flex: "0 0 auto",
      zIndex: 1
    }),
    pageTitle: prefixStyle({
      paddingLeft: 2,
      opacity: expanded || isMinimal ? 1 : 0,
      width: isMinimal ? expandedWidth : "100%",
      wordWrap: "normal",
      whiteSpace: "nowrap",
      overflow: isMinimal ? void 0 : "hidden",
      textOverflow: "ellipsis"
    }),
    paneParent: prefixStyle({
      display: "inline-block",
      verticalAlign: "top",
      width: isMinimal ? "100%" : isOverLay ? currInitWidth : expanded ? expandedWidth : currInitWidth,
      flex: "0 0 auto",
      height: isMinimal ? currInitWidth : "100%",
      zIndex: isOverLay || isMinimal ? 1 : void 0,
      position: isOverLay ? "absolute" : void 0,
      top: isOverLay ? 0 : void 0,
      background: isMinimal ? currBackground : void 0,
      transition: transition
    }),
    pane: prefixStyle(NavigationView_objectSpread({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      background: currBackground,
      overflow: isMinimal ? void 0 : "hidden",
      width: expanded ? expandedWidth : isMinimal ? 0 : currInitWidth
    }, isMinimal ? {
      position: "absolute",
      top: 0,
      left: 0,
      background: currBackground
    } : void 0, {
      height: "100%",
      transition: transition
    }, prefixStyle(paneStyle))),
    paneTop: prefixStyle({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      flex: "0 0 auto"
    }),
    paneTopIcons: prefixStyle({
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      width: isMinimal && !expanded ? 0 : expandedWidth,
      flex: "0 0 auto",
      zIndex: 1
    }),
    paneBottomIcons: prefixStyle({
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      width: isMinimal && !expanded ? 0 : expandedWidth,
      flex: "0 0 auto",
      zIndex: 1
    }),
    iconButton: {
      cursor: "pointer",
      fontSize: 16,
      width: 48,
      height: 48,
      background: "none"
    }
  };
}
// CONCATENATED MODULE: ./src/components/NavigationView/index.js



NavigationView.install = function (Vue) {
  Vue.component(NavigationView.name, NavigationView);
};

/* harmony default export */ var components_NavigationView = (NavigationView);
// CONCATENATED MODULE: ./src/common/browser/scrollToYEasing.js
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

var requestAnimationFrame;

if (IS_NODE_ENV["a" /* default */]) {
  requestAnimationFrame = function requestAnimationFrame(callback) {
    return setTimeout(callback, 1000 / 60);
  };
} else {
  var oldWindow = window;

  requestAnimationFrame = oldWindow.requestAnimationFrame || oldWindow.webkitRequestAnimationFrame || oldWindow.mozRequestAnimationFrame || oldWindow.msRequestAnimationFrame || function (callback) {
    return setTimeout(callback, 1000 / 60);
  };
}

var easingEquations = {
  easeOutSine: function easeOutSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  },
  easeInOutSine: function easeInOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  },
  easeInOutQuint: function easeInOutQuint(pos) {
    return (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 5) : 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
};

var scrollToY = function scrollToY() {
  var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var scrollTargetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
  var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "easeOutSine";
  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var scrollY = window.scrollY;
  var currentTime = 0;
  var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  if (targetElement) {
    scrollY = targetElement.scrollTop;
  }

  var scrollToFunc = function scrollToFunc(top) {
    if (targetElement) {
      targetElement.scrollTop = top;
    } else {
      window.scrollTo(0, top);
    }
  };

  function tick() {
    currentTime += 1 / 60;
    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
      scrollToFunc(scrollY + (scrollTargetY - scrollY) * t);
      requestAnimationFrame(tick);
    } else {
      scrollToFunc(scrollTargetY);
    }

    callback();
  }

  tick();
};

/* harmony default export */ var scrollToYEasing = (scrollToY);
// CONCATENATED MODULE: ./src/components/TimePicker/TimePicker.js









function TimePicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TimePicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TimePicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TimePicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* harmony default export */ var TimePicker = ({
  name: "TimePicker",
  props: {
    disabledHour: {
      type: Boolean,
      default: false
    },
    disabledMinute: {
      type: Boolean,
      default: false
    },
    disabledSecond: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: "12:30:00"
    },
    defaultShowPicker: {
      type: Boolean,
      default: false
    },
    inputItemHeight: {
      type: Number,
      default: 28
    },
    pickerItemHeight: {
      type: Number,
      default: 44
    },
    background: String,
    className: String,
    styles: Object
  },
  data: function data() {
    var currTimeArray = this.currTimeArray();
    return {
      showPicker: this.defaultShowPicker,
      currHour: currTimeArray[0],
      currMinute: currTimeArray[1],
      currSecond: currTimeArray[2],
      addBlurEvent: new AddBlurEvent_AddBlurEvent(),
      hourIndex: 0,
      minuteIndex: 0,
      secondIndex: 0,
      prevState: {
        currHour: currTimeArray[0],
        currMinute: currTimeArray[1],
        currSecond: currTimeArray[2]
      }
    };
  },
  watch: {
    defaultShowPicker: function defaultShowPicker(v) {
      this.showPicker = v;
    },
    value: function value() {
      var currTimeArray = this.currTimeArray();
      this.currHour = currTimeArray[0];
      this.currMinute = currTimeArray[1];
      this.currSecond = currTimeArray[2];
    }
  },
  computed: {
    currTime: function currTime() {
      var formatValue = this.formatValue,
          disabledHour = this.disabledHour,
          disabledMinute = this.disabledMinute,
          disabledSecond = this.disabledSecond;
      var result = [];

      if (!disabledHour) {
        result.push(this.currHour);
      }

      if (!disabledMinute) {
        result.push(this.currMinute);
      }

      if (!disabledSecond) {
        result.push(this.currSecond);
      }

      return result.map(function (i) {
        return formatValue(i);
      }).join(":");
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.showPicker,
        clickExcludeElm: this.$refs.rootElm,
        blurCallback: function blurCallback() {
          var _this$prevState = _this.prevState,
              currHour = _this$prevState.currHour,
              currMinute = _this$prevState.currMinute,
              currSecond = _this$prevState.currSecond;
          _this.showPicker = false;
          _this.currHour = currHour;
          _this.currMinute = currMinute;
          _this.currSecond = currSecond;
        },
        blurKeyCodes: [27]
      });
    },
    toggleShowPicker: function toggleShowPicker() {
      var showPicker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showPicker;
      this.showPicker = showPicker;
    },
    formatValue: function formatValue(v) {
      return v < 10 ? "0" + v : v;
    },
    currTimeArray: function currTimeArray() {
      return this.value.split(":").map(function (i) {
        return parseInt(i);
      });
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    var pickerItemHeight = this.pickerItemHeight;

    if (this.$refs.hourListView) {
      scrollToYEasing(this.$refs.hourListView.$el, this.hourIndex * pickerItemHeight, 0.1);
    }

    if (this.$refs.minuteListView) {
      scrollToYEasing(this.$refs.minuteListView.$el, this.minuteIndex * pickerItemHeight, 0.1);
    }

    if (this.$refs.secondListView) {
      scrollToYEasing(this.$refs.secondListView.$el, this.secondIndex * pickerItemHeight, 0.1);
    }

    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var className = this.className,
        pickerItemHeight = this.pickerItemHeight,
        currHour = this.currHour,
        currMinute = this.currMinute,
        currSecond = this.currSecond,
        currTime = this.currTime,
        disabledHour = this.disabledHour,
        disabledMinute = this.disabledMinute,
        disabledSecond = this.disabledSecond,
        hourIndex = this.hourIndex,
        minuteIndex = this.minuteIndex,
        secondIndex = this.secondIndex,
        toggleShowPicker = this.toggleShowPicker,
        formatValue = this.formatValue;
    var theme = this.context.theme;
    var inlineStyles = TimePicker_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "date-picker",
      styles: inlineStyles
    });
    var hourArray = Array(24).fill(0).map(function (zero, index) {
      return index;
    });
    var minuteArray = Array(60).fill(0).map(function (zero, index) {
      return index;
    });
    var secondArray = minuteArray;
    this.hourIndex = hourArray.indexOf(currHour);
    this.minuteIndex = minuteArray.indexOf(currMinute);
    this.secondIndex = secondArray.indexOf(currSecond);
    var vm = this;
    return h(PseudoClasses, {
      props: {
        props: TimePicker_objectSpread({
          style: styleClasses.root.style,
          class: styleClasses.root.className
        }, this.$props)
      }
    }, [h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className),
      ref: "rootElm"
    }, [h("div", {
      style: styleClasses.pickerModal.style,
      class: theme.classNames(styleClasses.pickerModal.className, className)
    }, [h("div", {
      style: styleClasses.listViews.style,
      class: styleClasses.listViews.className
    }, [!disabledHour && h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: inlineStyles.listItem,
        defaultFocusListIndex: hourIndex
      },
      on: {
        chooseItem: function chooseItem(hourIndex) {
          vm.currHour = hourIndex;
        }
      },
      ref: "hourListView"
    }, hourArray.map(function (child) {
      return h("span", {}, formatValue(child));
    })), !disabledMinute && h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: inlineStyles.listItem,
        defaultFocusListIndex: minuteIndex
      },
      on: {
        chooseItem: function chooseItem(minuteIndex) {
          vm.currMinute = minuteIndex;
        }
      },
      ref: "minuteListView"
    }, minuteArray.map(function (child) {
      return h("span", {}, formatValue(child));
    })), !disabledSecond && h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: inlineStyles.listItem,
        defaultFocusListIndex: secondIndex
      },
      on: {
        chooseItem: function chooseItem(secondIndex) {
          vm.currSecond = secondIndex;
        }
      },
      ref: "secondListView"
    }, secondArray.map(function (child) {
      return h("span", {}, formatValue(child));
    }))]), h("div", {
      style: styleClasses.iconButtonGroup.style,
      class: styleClasses.iconButtonGroup.className
    }, [h(components_IconButton, {
      props: {
        styles: inlineStyles.iconButton,
        size: pickerItemHeight
      },
      on: {
        click: function click() {
          vm.showPicker = false;
          vm.$emit("input", currTime);
          vm.prevState = {
            currHour: currHour,
            currMinute: currMinute,
            currSecond: currSecond
          };
        }
      }
    }, "AcceptLegacy"), h(components_IconButton, {
      props: {
        styles: inlineStyles.iconButton,
        size: pickerItemHeight
      },
      on: {
        click: function click() {
          var _vm$prevState = vm.prevState,
              currHour = _vm$prevState.currHour,
              currMinute = _vm$prevState.currMinute,
              currSecond = _vm$prevState.currSecond;
          vm.showPicker = false;
          vm.currHour = currHour;
          vm.currMinute = currMinute;
          vm.currSecond = currSecond;
        }
      }
    }, "ClearLegacy")])]), !disabledHour && h("span", {
      style: styleClasses.button.style,
      class: styleClasses.button.className,
      on: {
        click: function click() {
          toggleShowPicker();
        }
      }
    }, formatValue(currHour)), h(components_Separator, {
      props: {
        direction: "column",
        styles: {
          margin: 0
        }
      }
    }), !disabledMinute && h("span", {
      style: styleClasses.button.style,
      class: styleClasses.button.className,
      on: {
        click: function click() {
          toggleShowPicker();
        }
      }
    }, formatValue(currMinute)), h(components_Separator, {
      props: {
        direction: "column",
        styles: {
          margin: 0
        }
      }
    }), !disabledSecond && h("span", {
      style: styleClasses.button.style,
      class: styleClasses.button.className,
      on: {
        click: function click() {
          toggleShowPicker();
        }
      }
    }, formatValue(currSecond))])]);
  }
});

function TimePicker_getStyles(TimePicker) {
  var theme = TimePicker.context.theme,
      styles = TimePicker.styles,
      inputItemHeight = TimePicker.inputItemHeight,
      pickerItemHeight = TimePicker.pickerItemHeight,
      background = TimePicker.background,
      showPicker = TimePicker.showPicker,
      disabledHour = TimePicker.disabledHour,
      disabledMinute = TimePicker.disabledMinute,
      disabledSecond = TimePicker.disabledSecond;
  var disabledLength = [disabledHour, disabledMinute, disabledSecond].filter(function (i) {
    return i;
  }).length;
  var prefixStyle = theme.prefixStyle;
  var currBackground = background || (theme.useFluentDesign ? theme.acrylicTexture80.background : theme.chromeLow);
  return {
    root: prefixStyle(TimePicker_objectSpread({
      width: 320 - 320 / 3 * disabledLength,
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      verticalAlign: "middle",
      color: theme.baseMediumHigh,
      boxShadow: "inset 0 0 0 2px ".concat(theme.baseMediumLow),
      height: inputItemHeight,
      lineHeight: "".concat(inputItemHeight, "px"),
      position: "relative",
      transition: "all .25s ease-in-out",
      "&:hover": {
        boxShadow: "inset 0 0 0 2px ".concat(theme.baseMediumHigh)
      }
    }, styles)),
    pickerModal: prefixStyle({
      overflow: "hidden",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      background: currBackground,
      top: 0,
      left: 0,
      width: "100%",
      opacity: showPicker ? 1 : 0,
      transform: "scaleY(".concat(showPicker ? 1 : 0, ") translateY(-50%)"),
      transformOrigin: "top",
      pointerEvents: showPicker ? "all" : "none",
      zIndex: theme.zIndex.flyout,
      transition: "all .25s ease-in-out"
    }),
    listViews: prefixStyle({
      border: "1px solid ".concat(theme.listLow),
      flex: "0 0 auto",
      width: "100%",
      height: pickerItemHeight * 7,
      display: "flex",
      flexDirection: "row"
    }),
    listView: prefixStyle({
      userSelect: "none",
      border: "none",
      borderLeft: "1px solid ".concat(theme.listLow),
      width: "100%",
      padding: "".concat(pickerItemHeight * 3, "px 0"),
      height: pickerItemHeight * 7,
      overflowY: "inherit",
      overflowX: "hidden",
      flex: "1 1 auto"
    }),
    listItem: {
      padding: "0 8px",
      height: pickerItemHeight,
      lineHeight: "".concat(pickerItemHeight, "px"),
      flex: "0 0 auto",
      fontSize: pickerItemHeight / 3
    },
    button: {
      flex: "1 1 auto",
      display: "inline-block",
      cursor: "default",
      verticalAlign: "top",
      height: inputItemHeight - 4,
      lineHeight: "".concat(inputItemHeight - 4, "px"),
      padding: "0 ".concat(inputItemHeight - 4, "px")
    },
    iconButtonGroup: {
      boxShadow: "inset 0 0 0 1px ".concat(theme.baseLow),
      zIndex: theme.zIndex.flyout + 1
    },
    iconButton: {
      verticalAlign: "top",
      width: "50%",
      height: pickerItemHeight
    }
  };
}
// CONCATENATED MODULE: ./src/components/TimePicker/index.js



TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

/* harmony default export */ var components_TimePicker = (TimePicker);
// CONCATENATED MODULE: ./src/common/date.utils.js
var dayShortList = ["一", "二", "三", "四", "五", "六", "日"];
var dayList = ["Sunday ", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthShortList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthList = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
function addDays(d, days) {
  var newDate = cloneDate(d);
  newDate.setDate(d.getDate() + days);
  return newDate;
}
function addMonths(d, months) {
  var newDate = cloneDate(d);
  newDate.setMonth(d.getMonth() + months);
  return newDate;
}
function addYears(d, years) {
  var newDate = cloneDate(d);
  newDate.setFullYear(d.getFullYear() + years);
  return newDate;
}
function cloneDate(d) {
  return new Date(d.getTime());
}
function cloneAsDate(d) {
  var clonedDate = cloneDate(d);
  clonedDate.setHours(0, 0, 0, 0);
  return clonedDate;
}
function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function getLastDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
function getLastDayOfPrevMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 0);
}

// CONCATENATED MODULE: ./src/components/DatePicker/DatePicker.js








function DatePicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DatePicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DatePicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DatePicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ var DatePicker = ({
  name: "DatePicker",
  props: {
    value: {
      type: Date,
      default: new Date()
    },
    maxYear: {
      type: Number,
      default: new Date().getFullYear() + 50
    },
    minYear: {
      type: Number,
      default: new Date().getFullYear() - 50
    },
    inputItemHeight: {
      type: Number,
      default: 28
    },
    pickerItemHeight: {
      type: Number,
      default: 44
    },
    background: String,
    className: String,
    styles: Object
  },
  data: function data() {
    return {
      showPicker: false,
      currDate: this.value,
      addBlurEvent: new AddBlurEvent_AddBlurEvent(),
      monthIndex: 0,
      dateIndex: 0,
      yearIndex: 0,
      prevDate: this.value
    };
  },
  watch: {
    value: function value(v) {
      this.currDate = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.showPicker,
        clickExcludeElm: this.$refs.rootElm,
        blurCallback: function blurCallback() {
          _this.showPicker = false;
          _this.currDate = _this.prevDate;
        },
        blurKeyCodes: [27]
      });
    },
    setDate: function setDate(date, month, year) {
      var currDate = this.currDate;
      var currDateNumb = date === void 0 ? currDate.getDate() : date;
      var currMonth = month === void 0 ? currDate.getMonth() : month;
      var currYear = year === void 0 ? currDate.getFullYear() : year;
      this.currDate = new Date(currYear, currMonth, currDateNumb);
    },
    toggleShowPicker: function toggleShowPicker() {
      var showPicker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showPicker;
      this.showPicker = showPicker;

      if (showPicker) {
        this.prevDate = this.currDate;
      }
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    var pickerItemHeight = this.pickerItemHeight;

    if (this.$refs.monthListView) {
      scrollToYEasing(this.$refs.monthListView.$el, this.monthIndex * pickerItemHeight, 0.1);
    }

    if (this.$refs.dateListView) {
      scrollToYEasing(this.$refs.dateListView.$el, this.dateIndex * pickerItemHeight, 0.1);
    }

    if (this.$refs.yearListView) {
      scrollToYEasing(this.$refs.yearListView.$el, this.yearIndex * pickerItemHeight, 0.1);
    }

    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var maxYear = this.maxYear,
        minYear = this.minYear,
        pickerItemHeight = this.pickerItemHeight,
        className = this.className,
        currDate = this.currDate,
        dateIndex = this.dateIndex,
        yearIndex = this.yearIndex,
        monthIndex = this.monthIndex,
        toggleShowPicker = this.toggleShowPicker;
    var theme = this.context.theme;
    var inlineStyles = DatePicker_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "date-picker",
      styles: inlineStyles
    });
    var currYear = currDate.getFullYear();
    var currMonth = currDate.getMonth() + 1;
    var currDateNumb = currDate.getDate();
    var monthArray = Array(12).fill(0).map(function (numb, index) {
      return index + 1;
    });
    var dateArray = Array(getLastDayOfMonth(currDate).getDate()).fill(0).map(function (numb, index) {
      return index + 1;
    });
    var yearArray = Array(maxYear - minYear).fill(0).map(function (numb, index) {
      return minYear + index;
    });
    this.monthIndex = monthArray.indexOf(currMonth);
    this.dateIndex = dateArray.indexOf(currDateNumb);
    this.yearIndex = yearArray.indexOf(currYear);
    var vm = this;
    return h(PseudoClasses, {
      props: {
        props: DatePicker_objectSpread({
          style: styleClasses.root.style,
          class: styleClasses.root.className
        }, this.$props)
      }
    }, [h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className),
      ref: "rootElm"
    }, [h("div", {
      style: styleClasses.pickerModal.style,
      class: theme.classNames(styleClasses.pickerModal.className, className)
    }, [h("div", {
      style: styleClasses.listViews.style,
      class: styleClasses.listViews.className
    }, [h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: inlineStyles.listItem,
        defaultFocusListIndex: yearIndex
      },
      on: {
        chooseItem: function chooseItem(yearIndex) {
          vm.setDate(void 0, void 0, minYear + yearIndex);
        }
      },
      ref: "yearListView"
    }, yearArray.map(function (child) {
      return h("span", {}, child);
    })), h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: inlineStyles.listItem,
        defaultFocusListIndex: monthIndex
      },
      on: {
        chooseItem: function chooseItem(month) {
          vm.setDate(void 0, month, void 0);
        }
      },
      ref: "monthListView"
    }, monthArray.map(function (child) {
      return h("span", {}, child);
    })), h(components_ListView, {
      props: {
        styles: inlineStyles.listView,
        listItemStyle: inlineStyles.listItem,
        defaultFocusListIndex: dateIndex
      },
      on: {
        chooseItem: function chooseItem(dayIndex) {
          vm.setDate(dayIndex + 1, void 0, void 0);
        }
      },
      ref: "dateListView"
    }, dateArray.map(function (child) {
      return h("span", {}, child);
    }))]), h("div", {
      style: styleClasses.iconButtonGroup.style,
      class: styleClasses.iconButtonGroup.className
    }, [h(components_IconButton, {
      props: {
        styles: inlineStyles.iconButton,
        size: pickerItemHeight
      },
      on: {
        click: function click() {
          vm.showPicker = false;
          vm.$emit("input", currDate);
        }
      }
    }, "AcceptLegacy"), h(components_IconButton, {
      props: {
        styles: inlineStyles.iconButton,
        size: pickerItemHeight
      },
      on: {
        click: function click() {
          vm.showPicker = false;
          vm.currDate = vm.prevDate;
        }
      }
    }, "ClearLegacy")])]), h("span", {
      style: styleClasses.button.style,
      class: styleClasses.button.className,
      on: {
        click: function click() {
          toggleShowPicker();
        }
      }
    }, currYear), h(components_Separator, {
      props: {
        direction: "column",
        styles: {
          margin: 0
        }
      }
    }), h("span", {
      style: styleClasses.button.style,
      class: styleClasses.button.className,
      on: {
        click: function click() {
          toggleShowPicker();
        }
      }
    }, currMonth), h(components_Separator, {
      props: {
        direction: "column",
        styles: {
          margin: 0
        }
      }
    }), h("span", {
      style: styleClasses.button.style,
      class: styleClasses.button.className,
      on: {
        click: function click() {
          toggleShowPicker();
        }
      }
    }, currDateNumb)])]);
  }
});

function DatePicker_getStyles(DatePicker) {
  var theme = DatePicker.context.theme,
      styles = DatePicker.styles,
      inputItemHeight = DatePicker.inputItemHeight,
      pickerItemHeight = DatePicker.pickerItemHeight,
      background = DatePicker.background,
      showPicker = DatePicker.showPicker;
  var prefixStyle = theme.prefixStyle;
  var currBackground = background || (theme.useFluentDesign ? theme.acrylicTexture80.background : theme.chromeLow);
  return {
    root: prefixStyle(DatePicker_objectSpread({
      width: 320,
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      verticalAlign: "middle",
      color: theme.baseMediumHigh,
      boxShadow: "inset 0 0 0 2px ".concat(theme.baseMediumLow),
      height: inputItemHeight,
      lineHeight: "".concat(inputItemHeight, "px"),
      position: "relative",
      transition: "all .25s ease-in-out",
      "&:hover": {
        boxShadow: "inset 0 0 0 2px ".concat(theme.baseMediumHigh)
      }
    }, styles)),
    pickerModal: prefixStyle({
      overflow: "hidden",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      background: currBackground,
      top: 0,
      left: 0,
      width: "100%",
      opacity: showPicker ? 1 : 0,
      transform: "scaleY(".concat(showPicker ? 1 : 0, ") translateY(-50%)"),
      transformOrigin: "top",
      pointerEvents: showPicker ? "all" : "none",
      zIndex: theme.zIndex.flyout,
      transition: "all .25s ease-in-out"
    }),
    listViews: prefixStyle({
      border: "1px solid ".concat(theme.listLow),
      flex: "0 0 auto",
      width: "100%",
      height: pickerItemHeight * 7,
      display: "flex",
      flexDirection: "row"
    }),
    listView: prefixStyle({
      userSelect: "none",
      border: "none",
      borderLeft: "1px solid ".concat(theme.listLow),
      width: "100%",
      height: pickerItemHeight * 7,
      padding: "".concat(pickerItemHeight * 3, "px 0"),
      overflowY: "inherit",
      overflowX: "hidden",
      flex: "1 1 auto"
    }),
    listItem: {
      padding: "0 8px",
      height: pickerItemHeight,
      lineHeight: "".concat(pickerItemHeight, "px"),
      flex: "0 0 auto",
      fontSize: pickerItemHeight / 3
    },
    button: {
      flex: "1 1 auto",
      display: "inline-block",
      cursor: "default",
      verticalAlign: "top",
      height: inputItemHeight - 4,
      lineHeight: "".concat(inputItemHeight - 4, "px"),
      padding: "0 ".concat(inputItemHeight - 4, "px")
    },
    iconButtonGroup: {
      boxShadow: "inset 0 0 0 1px ".concat(theme.baseLow),
      zIndex: theme.zIndex.flyout + 1
    },
    iconButton: {
      verticalAlign: "top",
      width: "50%",
      height: pickerItemHeight
    }
  };
}
// CONCATENATED MODULE: ./src/components/DatePicker/index.js



DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

/* harmony default export */ var components_DatePicker = (DatePicker);
// CONCATENATED MODULE: ./src/components/CalendarView/SlideInOutChild.js







function SlideInOutChild_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SlideInOutChild_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SlideInOutChild_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SlideInOutChild_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var SlideInOutChild = ({
  name: "SlideInOutChild",
  props: {
    styles: Object,
    speed: {
      type: Number,
      default: 500
    }
  },
  render: function render(h) {
    var speed = this.speed,
        styles = this.styles;
    return h("div", {
      style: SlideInOutChild_objectSpread({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "all ".concat(speed, "ms ease-in-out")
      }, styles)
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/CalendarView/SlideInOut.js










function CalendarView_SlideInOut_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CalendarView_SlideInOut_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarView_SlideInOut_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarView_SlideInOut_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var CalendarView_SlideInOut = ({
  name: "SlideInOut",
  props: {
    appearAnimate: {
      type: Boolean,
      default: true
    },
    direction: {
      validator: function validator(value) {
        return ["left", "right", "top", "bottom"].includes(value);
      },
      default: "left"
    },
    distance: {
      type: [String, Number],
      default: "100%"
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    leaveDelay: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 500
    },
    mode: {
      validator: function validator(value) {
        return ["in", "out", "both"].includes(value);
      },
      default: "both"
    },
    styles: Object,
    className: String,
    childStyles: Object
  },
  data: function data() {
    return {
      enterTimer: null,
      leaveTimer: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    setAppearStyle: function setAppearStyle(el, done) {
      var appearAnimate = this.appearAnimate;

      if (appearAnimate) {
        this.enter(el, done);
      }
    },
    enter: function enter(el, done) {
      var _this = this;

      var mode = this.mode;

      if (mode !== "out") {
        this.initializeAnimation(el, function () {
          _this.animate(el, done);
        });
      }
    },
    leave: function leave(el, done) {
      var mode = this.mode;

      if (mode !== "in") {
        this.initializeAnimation(el, done, true);
      } else {
        el.style.display = "none";
        done();
      }
    },
    animate: function animate(el) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var speed = this.speed,
          enterDelay = this.enterDelay;
      var transform = "translate(0, 0)";
      Object.assign(el.style, {
        transform: transform,
        webkitTransform: transform,
        opacity: "1"
      });
      this.enterTimer = setTimeout(callback, speed + enterDelay);
    },
    initializeAnimation: function initializeAnimation(el) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var revers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (el.parentElement) {
        Object.assign(el.parentElement.style, {
          overflow: "hidden"
        });
      }

      var direction = this.direction,
          speed = this.speed,
          leaveDelay = this.leaveDelay,
          distance = this.distance;
      distance = typeof distance === "string" ? distance : "".concat(distance, "px");
      var x = direction === "left" ? "".concat(revers ? "-" : "").concat(distance) : direction === "right" ? "".concat(revers ? "" : "-").concat(distance) : "0";
      var y = direction === "top" ? "".concat(revers ? "" : "-").concat(distance) : direction === "bottom" ? "".concat(revers ? "-" : "").concat(distance) : "0";
      var transform = "translate(".concat(x, ", ").concat(y, ")");
      Object.assign(el.style, {
        transform: transform,
        webkitTransform: transform,
        opacity: "0"
      });
      this.leaveTimer = setTimeout(callback, speed / 2 + leaveDelay);
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  },
  render: function render(h) {
    var appearAnimate = this.appearAnimate,
        childStyles = this.childStyles,
        speed = this.speed;
    var styleClasses = SlideInOut_getStyles(this);
    var event = {
      on: {
        enter: this.enter,
        leave: this.leave,
        appear: this.setAppearStyle
      }
    };
    return h("transition-group", CalendarView_SlideInOut_objectSpread({
      style: styleClasses.root,
      props: {
        tag: "div",
        css: false,
        appear: appearAnimate
      }
    }, event), this.$slots.default && this.$slots.default.filter(function (i) {
      return i.tag !== void 0;
    }).map(function (child) {
      return h(SlideInOutChild, {
        key: child.key,
        props: {
          speed: speed,
          styles: childStyles
        }
      }, [child]);
    }));
  }
});

function SlideInOut_getStyles(SlideInOut) {
  var styles = SlideInOut.styles,
      speed = SlideInOut.speed;
  return {
    root: CalendarView_SlideInOut_objectSpread({
      position: "relative",
      width: "100%",
      height: "100%",
      transition: "all ".concat(speed, "ms ease-in-out")
    }, styles)
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/DayPicker.js








function DayPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DayPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DayPicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DayPicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var DayPicker = ({
  name: "DayPicker",
  props: {
    date: {
      type: Date,
      default: new Date()
    },
    direction: {
      type: String,
      validator: function validator(value) {
        return ["bottom", "top"].includes(value);
      },
      default: "bottom"
    },
    chooseISODates: {
      type: Array,
      default: []
    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleMouseEnter: function handleMouseEnter(e, date, isCurrMonth, isNow) {
      if (isNow) return;
      var theme = this.context.theme;
      var chooseISODates = this.chooseISODates;
      var isChoose = chooseISODates.includes(date.toISOString());
      e.currentTarget.style.boxShadow = isChoose ? "inset 0 0 0 2px ".concat(theme.accent, ", inset 0 0 0px 4px ").concat(theme.altHigh) : "inset 0 0 0 2px ".concat(theme.baseMedium);
      e.currentTarget.style.background = isChoose ? theme.accent : isCurrMonth ? theme.useFluentDesign ? theme.altLow : theme.altHigh : theme.useFluentDesign ? theme.listLow : theme.chromeLow;
    },
    handleMouseLeave: function handleMouseLeave(e, date, isCurrMonth, isNow) {
      if (isNow) return;
      var theme = this.context.theme;
      var chooseISODates = this.chooseISODates;
      var isChoose = chooseISODates.includes(date.toISOString());
      e.currentTarget.style.boxShadow = isChoose ? "inset 0 0 0 2px ".concat(theme.accent, ", inset 0 0 0px 4px ").concat(theme.altMedium) : "inset 0 0 0 2px ".concat(theme.baseLow);
      e.currentTarget.style.background = isChoose ? theme.accent : isCurrMonth ? theme.useFluentDesign ? theme.altLow : theme.altHigh : theme.useFluentDesign ? theme.listLow : theme.chromeLow;
    },
    getDaysArray: function getDaysArray() {
      var date = this.date;
      var currMonth = date.getMonth();
      var currYear = date.getFullYear();
      var daysArray = [];
      var prevMonthLast = getLastDayOfPrevMonth(date);
      var prevMonthLastDay = prevMonthLast.getDay();
      var prevMonthLastDate = prevMonthLast.getDate();
      var monthFirst = getFirstDayOfMonth(date);
      var monthFirstDate = monthFirst.getDate();
      var monthLastDate = getLastDayOfMonth(date).getDate();

      for (var i = 0; i < 42; i++) {
        daysArray[i] = {};
        var day = void 0;

        if (i < prevMonthLastDay) {
          day = prevMonthLastDate - prevMonthLastDay + i + 1;
          daysArray[i]["date"] = new Date(currYear, currMonth - 1, day);
          daysArray[i]["isCurrMonth"] = false;
        } else if (i < monthLastDate + prevMonthLastDay) {
          day = monthFirstDate - prevMonthLastDay + i;
          daysArray[i]["date"] = new Date(currYear, currMonth, day);
          daysArray[i]["isCurrMonth"] = true;
        } else {
          day = i - prevMonthLastDay - monthLastDate + 1;
          daysArray[i]["date"] = new Date(currYear, currMonth + 1, day);
          daysArray[i]["isCurrMonth"] = false;
        }

        daysArray[i]["day"] = day;
      }

      return daysArray;
    }
  },
  render: function render(h) {
    var date = this.date,
        direction = this.direction,
        chooseISODates = this.chooseISODates,
        handleMouseEnter = this.handleMouseEnter,
        handleMouseLeave = this.handleMouseLeave;
    var theme = this.context.theme;
    var inlineStyles = DayPicker_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "calendar-view-day",
      styles: inlineStyles
    });
    var days = this.getDaysArray();
    var vm = this;
    return h("div", {
      class: styleClasses.container.className,
      style: styleClasses.container.style
    }, [h("div", {
      class: styleClasses.weeklyHead.className,
      style: styleClasses.weeklyHead.style
    }, dayShortList.map(function (str, index) {
      return h("button", {
        key: "".concat(index),
        class: styleClasses.weeklyHeadItem.className,
        style: styleClasses.weeklyHeadItem.style
      }, str);
    })), h(CalendarView_SlideInOut, {
      props: {
        styles: inlineStyles.root,
        mode: "both",
        speed: 350,
        direction: direction,
        appearAnimate: false
      }
    }, [h("div", {
      key: "".concat(date.getFullYear(), ", ").concat(date.getMonth(), " ").concat(date.getDate())
    }, days.map(function (_ref, index) {
      var day = _ref.day,
          isCurrMonth = _ref.isCurrMonth,
          date = _ref.date;
      var dateISOString = date.toISOString();
      var isChoose = chooseISODates.includes(dateISOString);
      var nowDate = new Date();
      var isNow = date.getFullYear() === nowDate.getFullYear() && date.getMonth() === nowDate.getMonth() && date.getDate() === nowDate.getDate();
      return h("button", {
        key: "".concat(index),
        class: styleClasses.dayItem.className,
        style: DayPicker_objectSpread({}, styleClasses.dayItem.style, {
          boxShadow: isNow ? "inset 0 0 0 2px ".concat(theme.accent, ", inset 0 0 0px 4px ").concat(theme.altHigh) : isChoose ? "inset 0 0 0 2px ".concat(theme.accent, ", inset 0 0 0px 4px ").concat(theme.altMedium) : "inset 0 0 0 2px ".concat(theme.baseLow),
          color: isCurrMonth ? theme.baseHigh : theme.baseLow,
          background: isNow || isChoose ? theme.accent : isCurrMonth ? theme.useFluentDesign ? theme.altLow : theme.altHigh : theme.useFluentDesign ? theme.listLow : theme.chromeLow
        }),
        on: {
          click: function click() {
            vm.$emit("chooseDay", date);
          },
          mouseenter: function mouseenter(e) {
            handleMouseEnter(e, date, isCurrMonth, isNow);
          },
          mouseleave: function mouseleave(e) {
            handleMouseLeave(e, date, isCurrMonth, isNow);
          }
        }
      }, day);
    }))])]);
  }
});

function DayPicker_getStyles(DayPicker) {
  var theme = DayPicker.context.theme,
      styles = DayPicker.styles;
  var prefixStyle = theme.prefixStyle;
  return {
    container: prefixStyle({
      height: 292,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexGrow: 0
    }),
    root: prefixStyle(DayPicker_objectSpread({
      width: 296 + "px",
      height: 292 / 7 * 6 - 2 + "px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }, styles)),
    weeklyHead: prefixStyle({
      display: "flex",
      flexDirection: "row"
    }),
    weeklyHeadItem: {
      background: "none",
      border: "none",
      outline: "none",
      color: theme.baseHigh,
      width: 292 / 7,
      height: 40
    },
    dayItem: {
      transition: "all .25s 0s ease-in-out",
      border: "none",
      background: "none",
      outline: "none",
      color: theme.baseHigh,
      width: 292 / 7,
      height: 292 / 7
    }
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/MonthPicker.js








function MonthPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MonthPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MonthPicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MonthPicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var MonthPicker = ({
  name: "MonthPicker",
  props: {
    date: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    direction: {
      type: String,
      validator: function validator(value) {
        return ["bottom", "top"].includes(value);
      },
      default: "bottom"
    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleMouseEnter: function handleMouseEnter(e, isNow) {
      var theme = this.context.theme;
      e.currentTarget.style.border = "2px solid ".concat(isNow ? theme.baseHigh : theme.baseLow);
    },
    handleMouseLeave: function handleMouseLeave(e) {
      e.currentTarget.style.border = "2px solid transparent";
    },
    getMonthsArray: function getMonthsArray() {
      var months = [];

      for (var i = 0; i < 16; i++) {
        months[i] = i < 12 ? i + 1 : i % 12 + 1;
      }

      return months;
    }
  },
  render: function render(h) {
    var date = this.date,
        direction = this.direction,
        handleMouseEnter = this.handleMouseEnter,
        handleMouseLeave = this.handleMouseLeave;
    var theme = this.context.theme;
    var inlineStyles = MonthPicker_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "calendar-view-month",
      styles: inlineStyles
    });
    var months = this.getMonthsArray();
    var vm = this;
    return h(CalendarView_SlideInOut, {
      props: {
        styles: inlineStyles.root,
        mode: "both",
        speed: 350,
        direction: direction,
        appearAnimate: false
      }
    }, [h("div", {
      key: "".concat(date.getFullYear(), ", ").concat(date.getMonth(), " ").concat(date.getDate())
    }, months.map(function (month, index) {
      var isCurrYear = index < 12;
      var isNow = isCurrYear && date.getFullYear() === new Date().getFullYear() && month === new Date().getMonth() + 1;
      return h("button", {
        key: "".concat(index),
        class: styleClasses.monthItem.className,
        style: MonthPicker_objectSpread({}, styleClasses.monthItem.style, {
          background: isNow ? theme.accent : theme.useFluentDesign ? isCurrYear ? theme.altLow : theme.listLow : isCurrYear ? theme.altHigh : theme.chromeLow,
          border: "2px solid transparent"
        }),
        on: {
          click: function click() {
            vm.$emit("chooseMonth", index);
          },
          mouseenter: function mouseenter(e) {
            handleMouseEnter(e, isNow);
          },
          mouseleave: function mouseleave(e) {
            handleMouseLeave(e, isNow);
          }
        }
      }, "".concat(month));
    }))]);
  }
});

function MonthPicker_getStyles(MonthPicker) {
  var theme = MonthPicker.context.theme,
      styles = MonthPicker.styles;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(MonthPicker_objectSpread({
      width: 296 + "px",
      height: 292 + "px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }, styles)),
    monthItem: {
      transition: "all .25s 0s ease-in-out",
      background: "none",
      outline: "none",
      color: theme.baseHigh,
      border: "none",
      width: 292 / 4,
      height: 292 / 4
    }
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/YearPicker.js









function YearPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function YearPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { YearPicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { YearPicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var YearPicker = ({
  name: "YearPicker",
  props: {
    date: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    direction: {
      type: String,
      validator: function validator(value) {
        return ["bottom", "top"].includes(value);
      },
      default: "bottom"
    },
    maxYear: {
      type: Number,
      default: 2117 // MAX Year is 275760

    },
    minYear: {
      type: Number,
      default: 1920 // MIN Year is -271821

    },
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    handleMouseEnter: function handleMouseEnter(e, isNow) {
      var theme = this.context.theme;
      e.currentTarget.style.border = "2px solid ".concat(isNow ? theme.baseHigh : theme.baseLow);
    },
    handleMouseLeave: function handleMouseLeave(e) {
      e.currentTarget.style.border = "2px solid transparent";
    },
    getYearsArray: function getYearsArray() {
      var date = this.date;
      var year = date.getFullYear();
      var minYearOfTen = Math.floor(year / 10) * 10;
      var years = [];

      for (var i = 0; i < 16; i++) {
        years[i] = minYearOfTen + i;
      }

      return years;
    }
  },
  render: function render(h) {
    var date = this.date,
        direction = this.direction,
        handleMouseEnter = this.handleMouseEnter,
        handleMouseLeave = this.handleMouseLeave;
    var theme = this.context.theme;
    var inlineStyles = YearPicker_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "calendar-view-year",
      styles: inlineStyles
    });
    var years = this.getYearsArray();
    var vm = this;
    return h(CalendarView_SlideInOut, {
      props: {
        styles: inlineStyles.root,
        mode: "both",
        speed: 350,
        direction: direction,
        appearAnimate: false
      }
    }, [h("div", {
      key: "".concat(date.getFullYear(), ", ").concat(date.getMonth(), " ").concat(date.getDate())
    }, years.map(function (year, index) {
      var isNow = year === new Date().getFullYear();
      return h("button", {
        key: "".concat(index),
        class: styleClasses.monthItem.className,
        style: YearPicker_objectSpread({}, styleClasses.monthItem.style, {
          background: isNow ? theme.accent : theme.useFluentDesign ? theme.altLow : theme.altHigh,
          border: "2px solid transparent"
        }),
        on: {
          click: function click() {
            vm.$emit("chooseYear", year);
          },
          mouseenter: function mouseenter(e) {
            handleMouseEnter(e, isNow);
          },
          mouseleave: function mouseleave(e) {
            handleMouseLeave(e, isNow);
          }
        }
      }, "".concat(year));
    }))]);
  }
});

function YearPicker_getStyles(YearPicker) {
  var theme = YearPicker.context.theme,
      styles = YearPicker.styles;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(YearPicker_objectSpread({
      width: 296 + "px",
      height: 292 + "px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }, styles)),
    monthItem: {
      transition: "all .25s 0s ease-in-out",
      background: "none",
      outline: "none",
      color: theme.baseHigh,
      border: "none",
      width: 292 / 4,
      height: 292 / 4
    }
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/FadeInOutChild.js







function FadeInOutChild_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FadeInOutChild_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FadeInOutChild_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FadeInOutChild_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var FadeInOutChild = ({
  name: "FadeInOutChild",
  props: {
    styles: Object,
    speed: {
      type: Number,
      default: 500
    }
  },
  render: function render(h) {
    var speed = this.speed,
        styles = this.styles;
    var $slots = this.$slots;
    var children = $slots.default && $slots.default[0];
    return children && children.tag === void 0 ? [h("span", {
      style: FadeInOutChild_objectSpread({
        transition: "all ".concat(speed, "ms ease-in-out")
      }, styles)
    }, [children])] : cloneVNode(h, children, {
      style: {
        transition: "all ".concat(speed, "ms ease-in-out")
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/CalendarView/FadeInOut.js










function CalendarView_FadeInOut_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CalendarView_FadeInOut_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarView_FadeInOut_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarView_FadeInOut_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var CalendarView_FadeInOut = ({
  name: "FadeInOut",
  props: {
    appearAnimate: {
      type: Boolean,
      default: true
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    leaveDelay: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 1
    },
    minValue: {
      type: Number,
      default: 0
    },
    mode: {
      validator: function validator(value) {
        return ["in", "out", "both"].includes(value);
      },
      default: "both"
    },
    speed: {
      type: Number,
      default: 500
    },
    styles: Object,
    className: String,
    childStyles: Object
  },
  data: function data() {
    return {
      enterTimer: null,
      leaveTimer: null,
      displayStyleTimer: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    setAppearStyle: function setAppearStyle(el, done) {
      var appearAnimate = this.appearAnimate;

      if (appearAnimate) {
        this.enter(el, done);
      }
    },
    enter: function enter(el, done) {
      var _this = this;

      var mode = this.mode;

      if (mode !== "out") {
        var display = el.style.display;
        el.style.display = "none";
        this.displayStyleTimer = setTimeout(function () {
          el.style.display = display;

          _this.initializeAnimation(el, function () {
            _this.animate(el, done);
          });
        }, this.speed / 2 + this.enterDelay);
      } else {
        done();
      }
    },
    leave: function leave(el, done) {
      var mode = this.mode;

      if (mode !== "in") {
        this.initializeAnimation(el, done);
      } else {
        done();
      }
    },
    animate: function animate(el) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var speed = this.speed,
          maxValue = this.maxValue,
          enterDelay = this.enterDelay;
      Object.assign(el.style, {
        opacity: "".concat(maxValue)
      });
      this.enterTimer = setTimeout(callback, speed + enterDelay);
    },
    initializeAnimation: function initializeAnimation(el) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var minValue = this.minValue,
          speed = this.speed,
          leaveDelay = this.leaveDelay;
      Object.assign(el.style, {
        opacity: "".concat(minValue)
      });
      this.leaveTimer = setTimeout(callback, speed / 2 + leaveDelay);
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clearTimeout(this.displayStyleTimer);
  },
  render: function render(h) {
    var appearAnimate = this.appearAnimate,
        speed = this.speed,
        childStyles = this.childStyles;
    var styleClasses = FadeInOut_getStyles(this);
    var event = {
      on: {
        enter: this.enter,
        leave: this.leave,
        appear: this.setAppearStyle
      }
    };
    return h("transition-group", CalendarView_FadeInOut_objectSpread({
      style: styleClasses.root,
      props: {
        tag: "span",
        css: false,
        appear: appearAnimate
      }
    }, event), this.$slots.default && this.$slots.default.filter(function (i) {
      return i.tag !== void 0;
    }).map(function (child) {
      return h(FadeInOutChild, {
        key: child.key,
        props: {
          speed: speed,
          styles: childStyles
        }
      }, [child]);
    }));
  }
});

function FadeInOut_getStyles(FadeInOut) {
  var styles = FadeInOut.styles;
  return {
    root: CalendarView_FadeInOut_objectSpread({
      overflow: "hidden"
    }, styles)
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/ScaleInOutChild.js







function ScaleInOutChild_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ScaleInOutChild_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ScaleInOutChild_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ScaleInOutChild_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var ScaleInOutChild = ({
  name: "ScaleInOutChild",
  props: {
    styles: Object,
    speed: {
      type: Number,
      default: 500
    }
  },
  render: function render(h) {
    var speed = this.speed,
        styles = this.styles;
    return h("div", {
      style: ScaleInOutChild_objectSpread({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "all ".concat(speed, "ms ease-in-out")
      }, styles)
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/CalendarView/ScaleInOut.js










function CalendarView_ScaleInOut_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CalendarView_ScaleInOut_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarView_ScaleInOut_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarView_ScaleInOut_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var CalendarView_ScaleInOut = ({
  name: "ScaleInOut",
  props: {
    appearAnimate: {
      type: Boolean,
      default: true
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    leaveDelay: {
      type: Number,
      default: 0
    },
    maxScale: {
      type: Number,
      default: 1
    },
    minScale: {
      type: Number,
      default: 0
    },
    mode: {
      validator: function validator(value) {
        return ["in", "out", "both"].includes(value);
      },
      default: "both"
    },
    speed: {
      type: Number,
      default: 500
    },
    styles: Object,
    className: String,
    childStyles: Object
  },
  data: function data() {
    return {
      enterTimer: null,
      leaveTimer: null,
      displayStyleTimer: null
    };
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    setAppearStyle: function setAppearStyle(el, done) {
      var appearAnimate = this.appearAnimate;

      if (appearAnimate) {
        this.enter(el, done);
      }
    },
    enter: function enter(el, done) {
      var _this = this;

      var mode = this.mode;

      if (mode !== "out") {
        var display = el.style.display;
        el.style.display = "none";
        this.displayStyleTimer = setTimeout(function () {
          el.style.display = display;

          _this.initializeAnimation(el, function () {
            _this.animate(el, done);
          });
        }, this.speed / 2 + this.enterDelay);
      }
    },
    leave: function leave(el, done) {
      var mode = this.mode;

      if (mode !== "in") {
        this.initializeAnimation(el, done);
      } else {
        done();
      }
    },
    animate: function animate(el) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var speed = this.speed,
          maxScale = this.maxScale,
          enterDelay = this.enterDelay;
      var transform = "scale(".concat(maxScale, ")");
      Object.assign(el.style, {
        transform: transform,
        webkitTransform: transform,
        opacity: "1"
      });
      this.enterTimer = setTimeout(callback, speed + enterDelay);
    },
    initializeAnimation: function initializeAnimation(el) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var minScale = this.minScale,
          speed = this.speed,
          leaveDelay = this.leaveDelay;
      var transform = "scale(".concat(minScale, ")");
      Object.assign(el.style, {
        transform: transform,
        webkitTransform: transform,
        opacity: "0"
      });
      this.leaveTimer = setTimeout(callback, speed + leaveDelay);
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clearTimeout(this.displayStyleTimer);
  },
  render: function render(h) {
    var appearAnimate = this.appearAnimate,
        childStyles = this.childStyles,
        speed = this.speed,
        className = this.className;
    var styleClasses = ScaleInOut_getStyles(this);
    var event = {
      on: {
        enter: this.enter,
        leave: this.leave,
        appear: this.setAppearStyle
      }
    };
    return h("transition-group", CalendarView_ScaleInOut_objectSpread({
      style: styleClasses.root,
      class: className,
      props: {
        tag: "div",
        css: false,
        appear: appearAnimate
      }
    }, event), this.$slots.default && this.$slots.default.filter(function (i) {
      return i.tag !== void 0;
    }).map(function (child) {
      return h(ScaleInOutChild, {
        key: child.key,
        props: {
          speed: speed,
          styles: childStyles
        }
      }, [child]);
    }));
  }
});

function ScaleInOut_getStyles(ScaleInOut) {
  var styles = ScaleInOut.styles,
      speed = ScaleInOut.speed;
  return {
    root: CalendarView_ScaleInOut_objectSpread({
      position: "relative",
      overflow: "inherit",
      transition: "transform ".concat(speed, "ms 0s ease-in-out")
    }, styles)
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/CalendarView.js









function CalendarView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CalendarView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarView_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarView_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ var CalendarView = ({
  name: "CalendarView",
  props: {
    value: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    pickerMode: {
      type: String,
      default: "day",
      validator: function validator(value) {
        return ["year", "month", "day"].includes(value);
      }
    },
    selectSingleDay: {
      type: Boolean,
      default: true
    },
    background: String,
    styles: Object,
    className: String
  },
  data: function data() {
    return {
      viewDate: new Date(),
      direction: "bottom",
      chooseISODates: [],
      currPickerMode: this.pickerMode
    };
  },
  watch: {
    pickerMode: function pickerMode(v) {
      this.currPickerMode = v;
    }
  },
  methods: {
    nextAction: function nextAction() {
      var viewDate = this.viewDate,
          currPickerMode = this.currPickerMode;

      switch (currPickerMode) {
        case "day":
          {
            this.viewDate = addMonths(viewDate, 1);
            this.direction = "bottom";
            break;
          }

        case "month":
          {
            this.viewDate = addYears(viewDate, 1);
            this.direction = "bottom";
            break;
          }

        case "year":
          {
            this.viewDate = addYears(viewDate, 10);
            this.direction = "bottom";
            break;
          }

        default:
          {
            break;
          }
      }
    },
    prevAction: function prevAction() {
      var viewDate = this.viewDate,
          currPickerMode = this.currPickerMode;

      switch (currPickerMode) {
        case "day":
          {
            this.viewDate = addMonths(viewDate, -1);
            this.direction = "top";
            break;
          }

        case "month":
          {
            this.viewDate = addYears(viewDate, -1);
            this.direction = "top";
            break;
          }

        case "year":
          {
            this.viewDate = addYears(viewDate, -10);
            this.direction = "top";
            break;
          }

        default:
          {
            break;
          }
      }
    },
    handleChooseDay: function handleChooseDay(date) {
      var chooseISODates = this.chooseISODates,
          viewDate = this.viewDate;
      var selectSingleDay = this.selectSingleDay;
      var dateISOString = date.toISOString();
      var index = chooseISODates.indexOf(dateISOString);
      index > -1 ? chooseISODates.splice(index, 1) : chooseISODates = selectSingleDay ? [dateISOString] : [].concat(_toConsumableArray(chooseISODates), [dateISOString]);

      if (viewDate.getMonth() === date.getMonth()) {
        this.chooseISODates = chooseISODates;
      } else {
        this.chooseISODates = chooseISODates;
        this.viewDate = date;
      }

      this.$emit("input", date);
      this.$emit("changeDate", date);
    },
    onChooseMonth: function onChooseMonth(month) {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.getFullYear(), month, viewDate.getDate());
      this.viewDate = new Date(viewDate.getFullYear(), month, viewDate.getDate());
      this.currPickerMode = "day";
      this.$emit("input", newDate);
      this.$emit("changeDate", newDate);
    },
    onChooseYear: function onChooseYear(year) {
      var viewDate = this.viewDate;
      var newDate = new Date(year, viewDate.getMonth(), viewDate.getDate());
      this.viewDate = newDate;
      this.currPickerMode = "month";
      this.$emit("input", newDate);
      this.$emit("changeDate", newDate);
    },
    getTitle: function getTitle() {
      var viewDate = this.viewDate,
          currPickerMode = this.currPickerMode;

      switch (currPickerMode) {
        case "day":
          {
            return "".concat(viewDate.getFullYear(), "\u5E74").concat(monthList[viewDate.getMonth()]);
          }

        case "month":
          {
            var year = viewDate.getFullYear();
            return "".concat(year, "\u5E74");
          }

        case "year":
          {
            var _year = viewDate.getFullYear();

            var minYearOfTen = Math.floor(_year / 10) * 10;
            var maxYearOfTen = Math.ceil(_year / 10) * 10;
            return "".concat(minYearOfTen, "\u5E74-").concat(maxYearOfTen, "\u5E74");
          }

        default:
          {
            break;
          }
      }
    },
    togglePickerMode: function togglePickerMode(e) {
      if (typeof e === "string") {
        this.currPickerMode = e;
      }

      switch (this.currPickerMode) {
        case "day":
          {
            this.currPickerMode = "month";
            break;
          }

        case "month":
          {
            this.currPickerMode = "year";
            break;
          }

        case "year":
          {
            break;
          }

        default:
          {
            break;
          }
      }
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  render: function render(h) {
    var className = this.className,
        viewDate = this.viewDate,
        direction = this.direction,
        chooseISODates = this.chooseISODates,
        currPickerMode = this.currPickerMode,
        togglePickerMode = this.togglePickerMode,
        prevAction = this.prevAction,
        nextAction = this.nextAction,
        handleChooseDay = this.handleChooseDay,
        onChooseMonth = this.onChooseMonth,
        onChooseYear = this.onChooseYear;
    var theme = this.context.theme;
    var inlineStyles = CalendarView_getStyles(this);
    var styleClasses = theme.prepareStyles({
      className: "calendar-view",
      styles: inlineStyles
    });
    var title = this.getTitle();
    return h("div", {
      style: styleClasses.root.style,
      class: theme.classNames(styleClasses.root.className, className)
    }, [h("div", {
      style: styleClasses.title.style,
      class: styleClasses.title.className
    }, [h(CalendarView_FadeInOut, {
      props: {
        appearAnimate: false,
        speed: 250,
        direction: direction,
        styles: {
          overflow: "hidden",
          height: 24
        },
        childStyles: theme.prefixStyle({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
        })
      }
    }, [h("p", {
      style: {
        cursor: "pointer",
        height: "100%"
      },
      on: {
        click: togglePickerMode
      },
      key: title
    }, title)]), h("div", {
      style: theme.prefixStyle({
        display: "flex",
        flexDirection: "row"
      })
    }, [h(components_Icon, {
      props: {
        styles: styleClasses.titleIcon.style,
        className: styleClasses.titleIcon.className,
        hoverStyle: {
          color: theme.baseMedium
        }
      },
      on: {
        click: prevAction
      }
    }, "ChevronUp"), h(components_Icon, {
      props: {
        styles: styleClasses.titleIcon.style,
        className: styleClasses.titleIcon.className,
        hoverStyle: {
          color: theme.baseMedium
        }
      },
      on: {
        click: nextAction
      }
    }, "ChevronDown")])]), h(CalendarView_ScaleInOut, {
      props: {
        appearAnimate: false,
        styles: styleClasses.body.style,
        className: styleClasses.body.className,
        mode: "both",
        minScale: 0.4,
        speed: 250
      }
    }, [currPickerMode === "day" ? h(DayPicker, {
      props: {
        date: viewDate,
        direction: direction,
        chooseISODates: chooseISODates
      },
      on: {
        chooseDay: handleChooseDay
      },
      key: currPickerMode
    }) : currPickerMode === "month" ? h(MonthPicker, {
      props: {
        date: viewDate,
        direction: direction
      },
      on: {
        chooseMonth: onChooseMonth
      },
      key: currPickerMode
    }) : h(YearPicker, {
      props: {
        date: viewDate,
        direction: direction
      },
      key: currPickerMode,
      on: {
        chooseYear: onChooseYear
      }
    })])]);
  }
});

function CalendarView_getStyles(CalendarView) {
  var context = CalendarView.context,
      styles = CalendarView.styles,
      background = CalendarView.background;
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(CalendarView_objectSpread({
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: 14,
      color: theme.baseHigh,
      width: 296,
      background: background || (theme.useFluentDesign ? theme.acrylicTexture80.background : theme.altHigh),
      border: "2px solid ".concat(theme.baseLow)
    }, styles)),
    title: prefixStyle({
      fontSize: 14,
      height: 42,
      padding: "0 16px",
      fontWeight: "lighter",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    titleIcon: {
      fontSize: 16,
      paddingLeft: 8,
      cursor: "pointer"
    },
    body: prefixStyle({
      width: 296,
      height: 292
    })
  };
}
// CONCATENATED MODULE: ./src/components/CalendarView/index.js



CalendarView.install = function (Vue) {
  Vue.component(CalendarView.name, CalendarView);
};

/* harmony default export */ var components_CalendarView = (CalendarView);
// CONCATENATED MODULE: ./src/components/CalendarDatePicker/CalendarDatePicker.js







function CalendarDatePicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CalendarDatePicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CalendarDatePicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CalendarDatePicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var CalendarDatePicker = ({
  name: "CalendarDatePicker",
  props: {
    placeholder: {
      type: String,
      default: "yyyy/mm/dd"
    },
    value: {
      type: Date
    },
    width: {
      type: Number,
      default: 296
    },
    height: {
      type: Number,
      default: 32
    }
  },
  data: function data() {
    return {
      currDate: this.value ? this.value : new Date(),
      isInit: !this.value,
      showCalendarView: false,
      addBlurEvent: new AddBlurEvent_AddBlurEvent()
    };
  },
  watch: {
    value: function value(v) {
      this.currDate = v;
    }
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  methods: {
    addBlurEventMethod: function addBlurEventMethod() {
      var _this = this;

      this.addBlurEvent.setConfig({
        addListener: this.showCalendarView,
        clickExcludeElm: this.$el,
        blurCallback: function blurCallback() {
          _this.showCalendarView = false;
        },
        blurKeyCodes: [27]
      });
    },
    toggleShowCalendarView: function toggleShowCalendarView(showCalendarView) {
      if (!this.$refs.textBox.$el.contains(showCalendarView.target)) return;
      this.$emit("click", showCalendarView);
      this.showCalendarView = !this.showCalendarView;
    },
    handleChangeDate: function handleChangeDate(date) {
      this.currDate = date;
      this.isInit = false;
      this.$emit("changeDate", date);
      this.$emit("input", date);
    }
  },
  mounted: function mounted() {
    this.addBlurEventMethod();
  },
  updated: function updated() {
    this.addBlurEventMethod();
  },
  destroyed: function destroyed() {
    this.addBlurEvent.cleanEvent();
  },
  render: function render(h) {
    var value = this.value,
        placeholder = this.placeholder,
        currDate = this.currDate,
        isInit = this.isInit,
        toggleShowCalendarView = this.toggleShowCalendarView,
        handleChangeDate = this.handleChangeDate;
    var theme = this.context.theme;
    var inlineStyles = CalendarDatePicker_getStyles(this);
    var styleClasses = theme.prepareStyles({
      styles: inlineStyles,
      className: "calendar-picker"
    });
    var day = currDate.getDate();
    var month = currDate.getMonth() + 1;
    if (day < 10) day = "0".concat(day);
    if (month < 10) month = "0".concat(month);
    var yymmdd = [currDate.getFullYear(), month, day].join("/");
    return h("div", {
      class: styleClasses.root.className,
      style: styleClasses.root.style,
      on: {
        click: toggleShowCalendarView
      }
    }, [h(components_TextBox, {
      ref: "textBox",
      props: {
        styles: inlineStyles.input,
        placeholder: isInit ? placeholder : yymmdd,
        disabled: true
      }
    }, [h(components_Icon, {
      slot: "rightNode",
      props: {
        styles: inlineStyles.icon
      }
    }, "Calendar")]), h(components_CalendarView, {
      props: {
        value: value,
        styles: inlineStyles.calendarView
      },
      on: {
        changeDate: handleChangeDate
      }
    })]);
  }
});

function CalendarDatePicker_getStyles(CalendarDatePicker) {
  var context = CalendarDatePicker.context,
      width = CalendarDatePicker.width,
      height = CalendarDatePicker.height,
      style = CalendarDatePicker.style,
      showCalendarView = CalendarDatePicker.showCalendarView;
  var theme = context.theme;
  var prefixStyle = theme.prefixStyle;
  return {
    root: prefixStyle(CalendarDatePicker_objectSpread({
      display: "inline-block",
      verticalAlign: "middle",
      position: "relative"
    }, style)),
    input: {
      width: width,
      height: height
    },
    icon: {
      margin: "0 8px",
      cursor: "pointer",
      color: theme.baseHigh
    },
    calendarView: {
      position: "absolute",
      top: height,
      left: 0,
      transform: "translate3d(0, ".concat(showCalendarView ? "4px" : typeof height === "number" ? "-".concat(height, "px") : "-".concat(height), ", 0)"),
      zIndex: showCalendarView ? theme.zIndex.flyout : void 0,
      opacity: showCalendarView ? 1 : 0,
      pointerEvents: showCalendarView ? "all" : "none",
      transition: "all .25s ease"
    }
  };
}
// CONCATENATED MODULE: ./src/components/CalendarDatePicker/index.js



CalendarDatePicker.install = function (Vue) {
  Vue.component(CalendarDatePicker.name, CalendarDatePicker);
};

/* harmony default export */ var components_CalendarDatePicker = (CalendarDatePicker);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("795b");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./src/components/ColorPicker/ColorPicker.js













function ColorPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ColorPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ColorPicker_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ColorPicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var ColorPicker_ColorPicker = ({
  name: "ColorPicker",
  props: {
    value: {
      type: String,
      default: "#ff0000"
    },
    size: {
      type: Number,
      default: 336
    },
    onChangedColorTimeout: {
      type: Number,
      default: 1000
    },
    styles: Object,
    className: String
  },
  data: function data() {
    return ColorPicker_objectSpread({
      originBodyStyle: IS_NODE_ENV["a" /* default */] ? void 0 : ColorPicker_objectSpread({}, document.body.style)
    }, tinycolor(this.value).toHsv(), {
      dragging: false,
      clickTimer: null,
      moveColorTimer: null,
      colorBarTimer: null,
      canvas: null,
      ctx: null,
      colorSelectorElm: null,
      colorMainBarElm: null,
      slider: null
    });
  },
  inject: {
    context: {
      default: {
        theme: styles_darkTheme
      }
    }
  },
  mounted: function mounted() {
    var _this$$refs = this.$refs,
        canvas = _this$$refs.canvas,
        colorSelectorElm = _this$$refs.colorSelectorElm,
        colorMainBarElm = _this$$refs.colorMainBarElm,
        slider = _this$$refs.slider;
    this.canvas = canvas;
    this.colorSelectorElm = colorSelectorElm;
    this.colorMainBarElm = colorMainBarElm;
    this.slider = slider;
    this.renderCanvas();
    this.canvas.addEventListener("touchstart", this.handleChooseColor, false);
    this.canvas.addEventListener("touchend", this.handleEnd, false);
  },
  updated: function updated() {
    this.renderCanvas();
  },
  destroyed: function destroyed() {
    clearTimeout(this.moveColorTimer);
    this.canvas.removeEventListener("touchstart", this.handleChooseColor, false);
    this.canvas.removeEventListener("touchend", this.handleEnd, false);
  },
  methods: {
    renderCanvas: function () {
      var _renderCanvas = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var size, _xPosition, _yPosition, _r, _pi_2, ctx, v, i, radialGradient;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                size = this.size;
                size = size * 0.8125;
                Object.assign(this.canvas, {
                  width: size,
                  height: size
                });
                _xPosition = size / 2;
                _yPosition = _xPosition;
                _r = _xPosition;
                _pi_2 = Math.PI * 2;
                this.ctx = this.canvas.getContext("2d");
                ctx = this.ctx;
                this.setCanvas2devicePixelRatio(); // use save when using clip Path

                ctx.save();
                ctx.arc(_xPosition, _yPosition, _r, 0, _pi_2, true);
                ctx.clip();
                v = this.v;

                for (i = -1; i < 360; i++) {
                  ctx.beginPath();
                  ctx.moveTo(_xPosition, _yPosition);

                  if (i === -1) {
                    ctx.arc(_xPosition, _yPosition, _r, -_pi_2 / 360, 0, true);
                  } else {
                    ctx.arc(_xPosition, _yPosition, _r, 0, _pi_2 * i / 360, true);
                  }

                  ctx.closePath();
                  radialGradient = ctx.createRadialGradient(_xPosition, _yPosition, 0, _xPosition, _yPosition, _r);
                  radialGradient.addColorStop(0, tinycolor("hsv(".concat(Math.abs(i), ", 0%, ").concat(v * 100, "%)")).toHexString());
                  radialGradient.addColorStop(1, tinycolor("hsv(".concat(Math.abs(i), ", 100%, ").concat(v * 100, "%)")).toHexString());
                  ctx.fillStyle = radialGradient;
                  ctx.fill();
                } // reset clip to default


                ctx.restore();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderCanvas() {
        return _renderCanvas.apply(this, arguments);
      }

      return renderCanvas;
    }(),
    setCanvas2devicePixelRatio: function () {
      var _setCanvas2devicePixelRatio = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _window, devicePixelRatio, canvas, ctx, width, height;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _window = window, devicePixelRatio = _window.devicePixelRatio;
                canvas = this.canvas, ctx = this.ctx;

                if (devicePixelRatio) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                width = canvas.width, height = canvas.height;
                Object.assign(canvas, {
                  width: width * devicePixelRatio,
                  height: height * devicePixelRatio
                });
                Object.assign(canvas.style, {
                  width: "".concat(width, "px"),
                  height: "".concat(height, "px")
                });
                ctx.scale(devicePixelRatio, devicePixelRatio);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setCanvas2devicePixelRatio() {
        return _setCanvas2devicePixelRatio.apply(this, arguments);
      }

      return setCanvas2devicePixelRatio;
    }(),
    handleColorBarChange: function () {
      var _handleColorBarChange = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(v) {
        var _this = this;

        var h, s, onChangedColorTimeout, colorHexString;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                clearTimeout(this.colorBarTimer);
                h = this.h, s = this.s;
                onChangedColorTimeout = this.onChangedColorTimeout;
                colorHexString = tinycolor({
                  h: h,
                  s: s,
                  v: v
                }).toHexString();
                this.v = v;
                this.$emit("input", colorHexString);
                this.$emit("changeColor", colorHexString);
                this.colorBarTimer = setTimeout(function () {
                  _this.$emit("changedColor", colorHexString);
                }, onChangedColorTimeout);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleColorBarChange(_x) {
        return _handleColorBarChange.apply(this, arguments);
      }

      return handleColorBarChange;
    }(),
    handleChooseColor: function () {
      var _handleChooseColor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(e) {
        var _this2 = this;

        var isClickEvent,
            isTouchEvent,
            prefixStyle,
            size,
            onChangedColorTimeout,
            v,
            clientReact,
            colorPickerBoardSize,
            _ref,
            clientX,
            clientY,
            x,
            y,
            r,
            h,
            s,
            colorHexString,
            halfLightColor,
            _r2,
            _x3,
            _y,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                isClickEvent = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;
                e.preventDefault();
                isTouchEvent = e.type.includes("touch");
                prefixStyle = this.context.theme.prefixStyle;

                if (isClickEvent && (e.type === "mousedown" || e.type === "touchstart")) {
                  document.documentElement.addEventListener("mousemove", this.handleTouchMouseMove, false);
                  document.documentElement.addEventListener("mouseup", this.handleEnd);
                  this.canvas.addEventListener("touchmove", this.handleTouchMouseMove, false);
                  document.documentElement.addEventListener("touchend", this.handleEnd);
                  Object.assign(document.body.style, {
                    userSelect: "none",
                    msUserSelect: "none",
                    webkitUserSelect: "none",
                    cursor: "default"
                  });
                }

                size = this.size, onChangedColorTimeout = this.onChangedColorTimeout;
                v = this.v;
                clientReact = this.canvas.getBoundingClientRect();
                colorPickerBoardSize = size * 0.8125 / 2;
                _ref = isTouchEvent ? e.changedTouches[0] : e, clientX = _ref.clientX, clientY = _ref.clientY;
                x = clientX - clientReact.left - colorPickerBoardSize;
                y = clientReact.top - clientY + colorPickerBoardSize;
                r = Math.sqrt(x * x + y * y);
                h = Math.asin(y / r) / Math.PI * 180;
                if (x > 0 && y > 0) h = 360 - h;
                if (x > 0 && y < 0) h = -h;
                if (x < 0 && y < 0) h = 180 + h;
                if (x < 0 && y > 0) h = 180 + h;
                s = r / colorPickerBoardSize;
                if (s > 1) s = 1;
                colorHexString = tinycolor({
                  h: h,
                  s: s,
                  v: v
                }).toHexString();

                if (this.slider) {
                  halfLightColor = tinycolor({
                    h: h,
                    s: s,
                    v: 1
                  });
                  this.slider.$refs.barElm.style.backgroundImage = "linear-gradient(90deg, #000, ".concat(halfLightColor.toHexString(), ")");
                }

                if (isClickEvent && e.type === "click") {
                  this.$emit("changeColor", colorHexString);
                  this.$emit("input", colorHexString);
                  this.h = h;
                  this.s = s;
                  this.$nextTick(function () {
                    clearTimeout(_this2.clickTimer);
                    _this2.clickTimer = setTimeout(function () {
                      _this2.$emit("changedColor", colorHexString);
                    }, 0);
                  });
                } else {
                  this.$emit("changeColor", colorHexString);
                  this.$emit("input", colorHexString);
                  clearTimeout(this.moveColorTimer);
                  _r2 = colorPickerBoardSize * s;
                  _x3 = Math.cos(h / 180 * Math.PI) * _r2;
                  _y = Math.sin(h / 180 * Math.PI) * _r2;
                  Object.assign(this.colorSelectorElm.style, prefixStyle({
                    transform: "translate3d(".concat(_x3, "px, ").concat(_y, "px, 0)")
                  }));

                  if (this.colorMainBarElm) {
                    this.colorMainBarElm.style.background = colorHexString;
                  }

                  this.moveColorTimer = setTimeout(function () {
                    // onChangedColor(colorHexString);
                    _this2.$emit("changedColor", colorHexString); // this.setState({ h, s });


                    _this2.h = h;
                    _this2.s = s;
                  }, onChangedColorTimeout);
                }

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleChooseColor(_x2) {
        return _handleChooseColor.apply(this, arguments);
      }

      return handleChooseColor;
    }(),
    handleTouchMouseMove: function () {
      var _handleTouchMouseMove = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(e) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.dragging) {
                  this.dragging = true;
                }

                this.handleChooseColor(e, false);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleTouchMouseMove(_x4) {
        return _handleTouchMouseMove.apply(this, arguments);
      }

      return handleTouchMouseMove;
    }(),
    handleEnd: function () {
      var _handleEnd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.dragging) {
                  this.dragging = false;
                }

                clearTimeout(this.moveColorTimer);
                Object.assign(document.body.style, ColorPicker_objectSpread({
                  userSelect: void 0,
                  msUserSelect: void 0,
                  webkitUserSelect: void 0,
                  cursor: void 0
                }, this.originBodyStyle));
                document.documentElement.removeEventListener("mousemove", this.handleTouchMouseMove);
                this.canvas.removeEventListener("touchmove", this.handleTouchMouseMove);
                document.documentElement.removeEventListener("mouseup", this.handleEnd);
                document.documentElement.removeEventListener("touchend", this.handleEnd);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function handleEnd() {
        return _handleEnd.apply(this, arguments);
      }

      return handleEnd;
    }()
  },
  render: function render(createElement) {
    var size = this.size,
        className = this.className,
        h = this.h,
        s = this.s,
        v = this.v,
        handleColorBarChange = this.handleColorBarChange,
        handleChooseColor = this.handleChooseColor,
        handleEnd = this.handleEnd,
        theme = this.context.theme;
    var halfLightColor = tinycolor({
      h: h,
      s: s,
      v: 1
    });
    var colorPickerBoardSize = size * 0.8125 / 2;
    var r = colorPickerBoardSize * s;
    var mainBoardDotSize = size / 25;
    var x = Math.cos(h / 180 * Math.PI) * r;
    var y = Math.sin(h / 180 * Math.PI) * r;
    var selectorSize = colorPickerBoardSize - mainBoardDotSize / 2;
    var styles = ColorPicker_getStyles(this);
    styles.colorSelector = ColorPicker_objectSpread({}, styles.colorSelector, {
      top: selectorSize,
      left: selectorSize,
      width: mainBoardDotSize,
      height: mainBoardDotSize,
      borderRadius: mainBoardDotSize,
      background: "none",
      boxShadow: "0 0 0 4px #fff"
    });
    var classes = theme.prepareStyles({
      className: "color-picker",
      styles: styles
    });
    return createElement("div", {
      style: classes.root.style,
      class: theme.classNames(classes.root.className, className)
    }, [createElement("div", {
      style: classes.board.style,
      class: classes.board.className
    }, [createElement("div", {
      style: {
        position: "relative"
      }
    }, [createElement("canvas", {
      ref: "canvas",
      style: classes.mainBoard.style,
      class: classes.mainBoard.className,
      on: {
        click: handleChooseColor,
        mousedown: handleChooseColor,
        mouseup: handleEnd
      }
    }, " Your Browser not support canvas."), createElement("div", {
      ref: "colorSelectorElm",
      style: theme.prefixStyle(ColorPicker_objectSpread({}, classes.colorSelector.style, {
        transform: "translate3d(".concat(x, "px, ").concat(y, "px, 0)")
      })),
      class: classes.colorSelector.className
    })]), createElement("div", {
      ref: "colorMainBarElm",
      style: classes.colorMainBar.style,
      class: classes.colorMainBar.className
    })]), createElement(components_Slider, {
      ref: "slider",
      props: {
        maxValue: 1,
        styles: {
          marginTop: size * 0.0125,
          width: "100%"
        },
        value: v,
        width: size,
        barHeight: size * 0.025,
        barBackgroundImage: "linear-gradient(90deg, #000, ".concat(halfLightColor.toHexString(), ")"),
        useSimpleController: true
      },
      on: {
        changedValue: handleColorBarChange
      }
    })]);
  }
});

function ColorPicker_getStyles(ColorPicker) {
  var theme = ColorPicker.context.theme,
      h = ColorPicker.h,
      s = ColorPicker.s,
      v = ColorPicker.v,
      size = ColorPicker.size,
      styles = ColorPicker.styles;
  var prefixStyle = theme.prefixStyle;
  var currColor = tinycolor({
    h: h,
    s: s,
    v: v
  }).toHslString();
  return {
    root: prefixStyle(ColorPicker_objectSpread({
      display: "inline-block",
      verticalAlign: "middle",
      width: size,
      flexDirection: "column"
    }, styles)),
    board: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    mainBoard: prefixStyle({
      userDrag: "none",
      margin: 0,
      userSelect: "none"
    }),
    colorMainBar: {
      height: size * 0.8125,
      marginLeft: size * 0.025,
      width: size * 0.125,
      background: currColor
    },
    colorSelector: prefixStyle({
      pointerEvents: "none",
      userDrag: "none",
      position: "absolute"
    })
  };
}
// CONCATENATED MODULE: ./src/components/ColorPicker/index.js



ColorPicker_ColorPicker.install = function (Vue) {
  Vue.component(ColorPicker_ColorPicker.name, ColorPicker_ColorPicker);
};

/* harmony default export */ var components_ColorPicker = (ColorPicker_ColorPicker);
// CONCATENATED MODULE: ./src/index.js
















































var components = {
  Animate: Animate,
  Theme: components_Theme,
  Button: components_Button,
  AppBarButton: components_AppBarButton,
  Icon: components_Icon,
  Tooltip: components_Tooltip,
  Toast: components_Toast,
  Separator: components_Separator,
  AppBarSeparator: components_AppBarSeparator,
  CheckBox: components_CheckBox,
  Link: components_Link,
  IconButton: components_IconButton,
  HyperLink: components_HyperLink,
  Img: components_Img,
  Slider: components_Slider,
  Toggle: components_Toggle,
  TextBox: components_TextBox,
  PasswordBox: components_PasswordBox,
  RadioButton: components_RadioButton,
  CommandBar: components_CommandBar,
  ListView: components_ListView,
  AutoSuggestBox: components_AutoSuggestBox,
  ContentDialog: components_ContentDialog,
  Dialog: components_Dialog,
  DropDownMenu: components_DropDownMenu,
  Swipe: components_Swipe,
  FlipView: components_FlipView,
  Flyout: components_Flyout,
  FloatNav: components_FloatNav,
  Menu: components_Menu,
  ProgressBar: components_ProgressBar,
  ProgressRing: components_ProgressRing,
  RatingControl: components_RatingControl,
  ScrollReveal: components_ScrollReveal,
  SplitView: components_SplitView,
  SplitViewCommand: components_SplitViewCommand,
  Tabs: components_Tabs,
  TransformCard: components_TransformCard,
  TreeView: components_TreeView,
  NavigationView: components_NavigationView,
  TimePicker: components_TimePicker,
  DatePicker: components_DatePicker,
  CalendarView: components_CalendarView,
  CalendarDatePicker: components_CalendarDatePicker,
  ColorPicker: components_ColorPicker
};

var src_install = function install(Vue) {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach(function (key) {
    Vue.use(components[key].install);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src_0 = ({
  install: src_install
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return components; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fdb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBrowserInformation;

var _bowser = __webpack_require__("a6e4");

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixByBrowser = {
  chrome: 'Webkit',
  safari: 'Webkit',
  ios: 'Webkit',
  android: 'Webkit',
  phantom: 'Webkit',
  opera: 'Webkit',
  webos: 'Webkit',
  blackberry: 'Webkit',
  bada: 'Webkit',
  tizen: 'Webkit',
  chromium: 'Webkit',
  vivaldi: 'Webkit',
  firefox: 'Moz',
  seamoney: 'Moz',
  sailfish: 'Moz',
  msie: 'ms',
  msedge: 'ms'
};


var browserByCanIuseAlias = {
  chrome: 'chrome',
  chromium: 'chrome',
  safari: 'safari',
  firfox: 'firefox',
  msedge: 'edge',
  opera: 'opera',
  vivaldi: 'opera',
  msie: 'ie'
};

function getBrowserName(browserInfo) {
  if (browserInfo.firefox) {
    return 'firefox';
  }

  if (browserInfo.mobile || browserInfo.tablet) {
    if (browserInfo.ios) {
      return 'ios_saf';
    } else if (browserInfo.android) {
      return 'android';
    } else if (browserInfo.opera) {
      return 'op_mini';
    }
  }

  for (var browser in browserByCanIuseAlias) {
    if (browserInfo.hasOwnProperty(browser)) {
      return browserByCanIuseAlias[browser];
    }
  }
}

/**
 * Uses bowser to get default browser browserInformation such as version and name
 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
 * @param {string} userAgent - userAgent that gets evaluated
 */
function getBrowserInformation(userAgent) {
  var browserInfo = _bowser2.default._detect(userAgent);

  if (browserInfo.yandexbrowser) {
    browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
  }

  for (var browser in prefixByBrowser) {
    if (browserInfo.hasOwnProperty(browser)) {
      var prefix = prefixByBrowser[browser];

      browserInfo.jsPrefix = prefix;
      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
      break;
    }
  }

  browserInfo.browserName = getBrowserName(browserInfo);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  if (browserInfo.version) {
    browserInfo.browserVersion = parseFloat(browserInfo.version);
  } else {
    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
  }

  browserInfo.osVersion = parseFloat(browserInfo.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
    browserInfo.browserName = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // Samsung browser are basically build on Chrome > 44
  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
    browserInfo.browserName = 'and_chr';
    browserInfo.browserVersion = 44;
  }

  return browserInfo;
}
module.exports = exports['default'];

/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });