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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/animals.json":
/*!***************************!*\
  !*** ./data/animals.json ***!
  \***************************/
/*! exports provided: cat, mouse, tiger, default */
/***/ (function(module) {

eval("module.exports = {\"cat\":{\"name\":\"cat\",\"size\":\"medium\"},\"mouse\":{\"name\":\"mouse\",\"size\":\"small\"},\"tiger\":{\"name\":\"tiger\",\"size\":\"large\"}};\n\n//# sourceURL=webpack:///./data/animals.json?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n} // istanbul ignore next\n\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj['default'] = obj;\n    return newObj;\n  }\n}\n\nvar _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nvar base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.\n// (This is done to easily share code between commonjs and browse envs)\n\n\nvar _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ \"./node_modules/handlebars/dist/cjs/handlebars/safe-string.js\");\n\nvar _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);\n\nvar _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _handlebarsException2 = _interopRequireDefault(_handlebarsException);\n\nvar _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_handlebarsUtils);\n\nvar _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ \"./node_modules/handlebars/dist/cjs/handlebars/runtime.js\");\n\nvar runtime = _interopRequireWildcard(_handlebarsRuntime);\n\nvar _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ \"./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js\");\n\nvar _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace\n\n\nfunction create() {\n  var hb = new base.HandlebarsEnvironment();\n  Utils.extend(hb, base);\n  hb.SafeString = _handlebarsSafeString2['default'];\n  hb.Exception = _handlebarsException2['default'];\n  hb.Utils = Utils;\n  hb.escapeExpression = Utils.escapeExpression;\n  hb.VM = runtime;\n\n  hb.template = function (spec) {\n    return runtime.template(spec, hb);\n  };\n\n  return hb;\n}\n\nvar inst = create();\ninst.create = create;\n\n_handlebarsNoConflict2['default'](inst);\n\ninst['default'] = inst;\nexports['default'] = inst;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars.runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.HandlebarsEnvironment = HandlebarsEnvironment; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers.js\");\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators.js\");\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./node_modules/handlebars/dist/cjs/handlebars/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar VERSION = '4.1.2';\nexports.VERSION = VERSION;\nvar COMPILER_REVISION = 7;\nexports.COMPILER_REVISION = COMPILER_REVISION;\nvar REVISION_CHANGES = {\n  1: '<= 1.0.rc.2',\n  // 1.0.rc.2 is actually rev2 but doesn't report it\n  2: '== 1.0.0-rc.3',\n  3: '== 1.0.0-rc.4',\n  4: '== 1.x.x',\n  5: '== 2.0.0-alpha.x',\n  6: '>= 2.0.0-beta.1',\n  7: '>= 4.0.0'\n};\nexports.REVISION_CHANGES = REVISION_CHANGES;\nvar objectType = '[object Object]';\n\nfunction HandlebarsEnvironment(helpers, partials, decorators) {\n  this.helpers = helpers || {};\n  this.partials = partials || {};\n  this.decorators = decorators || {};\n\n  _helpers.registerDefaultHelpers(this);\n\n  _decorators.registerDefaultDecorators(this);\n}\n\nHandlebarsEnvironment.prototype = {\n  constructor: HandlebarsEnvironment,\n  logger: _logger2['default'],\n  log: _logger2['default'].log,\n  registerHelper: function registerHelper(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple helpers');\n      }\n\n      _utils.extend(this.helpers, name);\n    } else {\n      this.helpers[name] = fn;\n    }\n  },\n  unregisterHelper: function unregisterHelper(name) {\n    delete this.helpers[name];\n  },\n  registerPartial: function registerPartial(name, partial) {\n    if (_utils.toString.call(name) === objectType) {\n      _utils.extend(this.partials, name);\n    } else {\n      if (typeof partial === 'undefined') {\n        throw new _exception2['default']('Attempting to register a partial called \"' + name + '\" as undefined');\n      }\n\n      this.partials[name] = partial;\n    }\n  },\n  unregisterPartial: function unregisterPartial(name) {\n    delete this.partials[name];\n  },\n  registerDecorator: function registerDecorator(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple decorators');\n      }\n\n      _utils.extend(this.decorators, name);\n    } else {\n      this.decorators[name] = fn;\n    }\n  },\n  unregisterDecorator: function unregisterDecorator(name) {\n    delete this.decorators[name];\n  }\n};\nvar log = _logger2['default'].log;\nexports.log = log;\nexports.createFrame = _utils.createFrame;\nexports.logger = _logger2['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/base.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultDecorators = registerDefaultDecorators; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js\");\n\nvar _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);\n\nfunction registerDefaultDecorators(instance) {\n  _decoratorsInline2['default'](instance);\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/decorators.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerDecorator('inline', function (fn, props, container, options) {\n    var ret = fn;\n\n    if (!props.partials) {\n      props.partials = {};\n\n      ret = function (context, options) {\n        // Create a new partials stack frame prior to exec.\n        var original = container.partials;\n        container.partials = _utils.extend({}, original, props.partials);\n        var ret = fn(context, options);\n        container.partials = original;\n        return ret;\n      };\n    }\n\n    props.partials[options.args[0]] = options.fn;\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nvar errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];\n\nfunction Exception(message, node) {\n  var loc = node && node.loc,\n      line = undefined,\n      column = undefined;\n\n  if (loc) {\n    line = loc.start.line;\n    column = loc.start.column;\n    message += ' - ' + line + ':' + column;\n  }\n\n  var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.\n\n  for (var idx = 0; idx < errorProps.length; idx++) {\n    this[errorProps[idx]] = tmp[errorProps[idx]];\n  }\n  /* istanbul ignore else */\n\n\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, Exception);\n  }\n\n  try {\n    if (loc) {\n      this.lineNumber = line; // Work around issue under safari where we can't directly set the column value\n\n      /* istanbul ignore next */\n\n      if (Object.defineProperty) {\n        Object.defineProperty(this, 'column', {\n          value: column,\n          enumerable: true\n        });\n      } else {\n        this.column = column;\n      }\n    }\n  } catch (nop) {\n    /* Ignore if the browser is very particular */\n  }\n}\n\nException.prototype = new Error();\nexports['default'] = Exception;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/exception.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultHelpers = registerDefaultHelpers; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js\");\n\nvar _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);\n\nvar _helpersEach = __webpack_require__(/*! ./helpers/each */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js\");\n\nvar _helpersEach2 = _interopRequireDefault(_helpersEach);\n\nvar _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js\");\n\nvar _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);\n\nvar _helpersIf = __webpack_require__(/*! ./helpers/if */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js\");\n\nvar _helpersIf2 = _interopRequireDefault(_helpersIf);\n\nvar _helpersLog = __webpack_require__(/*! ./helpers/log */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js\");\n\nvar _helpersLog2 = _interopRequireDefault(_helpersLog);\n\nvar _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js\");\n\nvar _helpersLookup2 = _interopRequireDefault(_helpersLookup);\n\nvar _helpersWith = __webpack_require__(/*! ./helpers/with */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js\");\n\nvar _helpersWith2 = _interopRequireDefault(_helpersWith);\n\nfunction registerDefaultHelpers(instance) {\n  _helpersBlockHelperMissing2['default'](instance);\n\n  _helpersEach2['default'](instance);\n\n  _helpersHelperMissing2['default'](instance);\n\n  _helpersIf2['default'](instance);\n\n  _helpersLog2['default'](instance);\n\n  _helpersLookup2['default'](instance);\n\n  _helpersWith2['default'](instance);\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('blockHelperMissing', function (context, options) {\n    var inverse = options.inverse,\n        fn = options.fn;\n\n    if (context === true) {\n      return fn(this);\n    } else if (context === false || context == null) {\n      return inverse(this);\n    } else if (_utils.isArray(context)) {\n      if (context.length > 0) {\n        if (options.ids) {\n          options.ids = [options.name];\n        }\n\n        return instance.helpers.each(context, options);\n      } else {\n        return inverse(this);\n      }\n    } else {\n      if (options.data && options.ids) {\n        var data = _utils.createFrame(options.data);\n\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);\n        options = {\n          data: data\n        };\n      }\n\n      return fn(context, options);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports['default'] = function (instance) {\n  instance.registerHelper('each', function (context, options) {\n    if (!options) {\n      throw new _exception2['default']('Must pass iterator to #each');\n    }\n\n    var fn = options.fn,\n        inverse = options.inverse,\n        i = 0,\n        ret = '',\n        data = undefined,\n        contextPath = undefined;\n\n    if (options.data && options.ids) {\n      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';\n    }\n\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    if (options.data) {\n      data = _utils.createFrame(options.data);\n    }\n\n    function execIteration(field, index, last) {\n      if (data) {\n        data.key = field;\n        data.index = index;\n        data.first = index === 0;\n        data.last = !!last;\n\n        if (contextPath) {\n          data.contextPath = contextPath + field;\n        }\n      }\n\n      ret = ret + fn(context[field], {\n        data: data,\n        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])\n      });\n    }\n\n    if (context && typeof context === 'object') {\n      if (_utils.isArray(context)) {\n        for (var j = context.length; i < j; i++) {\n          if (i in context) {\n            execIteration(i, i, i === context.length - 1);\n          }\n        }\n      } else {\n        var priorKey = undefined;\n\n        for (var key in context) {\n          if (context.hasOwnProperty(key)) {\n            // We're running the iterations one step out of sync so we can detect\n            // the last iteration without have to scan the object twice and create\n            // an itermediate keys array.\n            if (priorKey !== undefined) {\n              execIteration(priorKey, i - 1);\n            }\n\n            priorKey = key;\n            i++;\n          }\n        }\n\n        if (priorKey !== undefined) {\n          execIteration(priorKey, i - 1, true);\n        }\n      }\n    }\n\n    if (i === 0) {\n      ret = inverse(this);\n    }\n\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports['default'] = function (instance) {\n  instance.registerHelper('helperMissing', function ()\n  /* [args, ]options */\n  {\n    if (arguments.length === 1) {\n      // A missing field in a {{foo}} construct.\n      return undefined;\n    } else {\n      // Someone is actually trying to call something, blow up.\n      throw new _exception2['default']('Missing helper: \"' + arguments[arguments.length - 1].name + '\"');\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('if', function (conditional, options) {\n    if (_utils.isFunction(conditional)) {\n      conditional = conditional.call(this);\n    } // Default behavior is to render the positive path if the value is truthy and not empty.\n    // The `includeZero` option may be set to treat the condtional as purely not empty based on the\n    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.\n\n\n    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {\n      return options.inverse(this);\n    } else {\n      return options.fn(this);\n    }\n  });\n  instance.registerHelper('unless', function (conditional, options) {\n    return instance.helpers['if'].call(this, conditional, {\n      fn: options.inverse,\n      inverse: options.fn,\n      hash: options.hash\n    });\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports['default'] = function (instance) {\n  instance.registerHelper('log', function ()\n  /* message, options */\n  {\n    var args = [undefined],\n        options = arguments[arguments.length - 1];\n\n    for (var i = 0; i < arguments.length - 1; i++) {\n      args.push(arguments[i]);\n    }\n\n    var level = 1;\n\n    if (options.hash.level != null) {\n      level = options.hash.level;\n    } else if (options.data && options.data.level != null) {\n      level = options.data.level;\n    }\n\n    args[0] = level;\n    instance.log.apply(instance, args);\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports['default'] = function (instance) {\n  instance.registerHelper('lookup', function (obj, field) {\n    if (!obj) {\n      return obj;\n    }\n\n    if (field === 'constructor' && !obj.propertyIsEnumerable(field)) {\n      return undefined;\n    }\n\n    return obj[field];\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('with', function (context, options) {\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    var fn = options.fn;\n\n    if (!_utils.isEmpty(context)) {\n      var data = options.data;\n\n      if (options.data && options.ids) {\n        data = _utils.createFrame(options.data);\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);\n      }\n\n      return fn(context, {\n        data: data,\n        blockParams: _utils.blockParams([context], [data && data.contextPath])\n      });\n    } else {\n      return options.inverse(this);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar logger = {\n  methodMap: ['debug', 'info', 'warn', 'error'],\n  level: 'info',\n  // Maps a given level value to the `methodMap` indexes above.\n  lookupLevel: function lookupLevel(level) {\n    if (typeof level === 'string') {\n      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());\n\n      if (levelMap >= 0) {\n        level = levelMap;\n      } else {\n        level = parseInt(level, 10);\n      }\n    }\n\n    return level;\n  },\n  // Can be overridden in the host environment\n  log: function log(level) {\n    level = logger.lookupLevel(level);\n\n    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {\n      var method = logger.methodMap[level];\n\n      if (!console[method]) {\n        // eslint-disable-line no-console\n        method = 'log';\n      }\n\n      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        message[_key - 1] = arguments[_key];\n      }\n\n      console[method].apply(console, message); // eslint-disable-line no-console\n    }\n  }\n};\nexports['default'] = logger;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/logger.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global window */\n\n\nexports.__esModule = true;\n\nexports['default'] = function (Handlebars) {\n  /* istanbul ignore next */\n  var root = typeof global !== 'undefined' ? global : window,\n      $Handlebars = root.Handlebars;\n  /* istanbul ignore next */\n\n  Handlebars.noConflict = function () {\n    if (root.Handlebars === Handlebars) {\n      root.Handlebars = $Handlebars;\n    }\n\n    return Handlebars;\n  };\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.checkRevision = checkRevision;\nexports.template = template;\nexports.wrapProgram = wrapProgram;\nexports.resolvePartial = resolvePartial;\nexports.invokePartial = invokePartial;\nexports.noop = noop; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n} // istanbul ignore next\n\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj['default'] = obj;\n    return newObj;\n  }\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_utils);\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nfunction checkRevision(compilerInfo) {\n  var compilerRevision = compilerInfo && compilerInfo[0] || 1,\n      currentRevision = _base.COMPILER_REVISION;\n\n  if (compilerRevision !== currentRevision) {\n    if (compilerRevision < currentRevision) {\n      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],\n          compilerVersions = _base.REVISION_CHANGES[compilerRevision];\n      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');\n    } else {\n      // Use the embedded version info since the runtime doesn't know about this revision yet\n      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');\n    }\n  }\n}\n\nfunction template(templateSpec, env) {\n  /* istanbul ignore next */\n  if (!env) {\n    throw new _exception2['default']('No environment passed to template');\n  }\n\n  if (!templateSpec || !templateSpec.main) {\n    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);\n  }\n\n  templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow\n  // for external users to override these as psuedo-supported APIs.\n\n  env.VM.checkRevision(templateSpec.compiler);\n\n  function invokePartialWrapper(partial, context, options) {\n    if (options.hash) {\n      context = Utils.extend({}, context, options.hash);\n\n      if (options.ids) {\n        options.ids[0] = true;\n      }\n    }\n\n    partial = env.VM.resolvePartial.call(this, partial, context, options);\n    var result = env.VM.invokePartial.call(this, partial, context, options);\n\n    if (result == null && env.compile) {\n      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);\n      result = options.partials[options.name](context, options);\n    }\n\n    if (result != null) {\n      if (options.indent) {\n        var lines = result.split('\\n');\n\n        for (var i = 0, l = lines.length; i < l; i++) {\n          if (!lines[i] && i + 1 === l) {\n            break;\n          }\n\n          lines[i] = options.indent + lines[i];\n        }\n\n        result = lines.join('\\n');\n      }\n\n      return result;\n    } else {\n      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');\n    }\n  } // Just add water\n\n\n  var container = {\n    strict: function strict(obj, name) {\n      if (!(name in obj)) {\n        throw new _exception2['default']('\"' + name + '\" not defined in ' + obj);\n      }\n\n      return obj[name];\n    },\n    lookup: function lookup(depths, name) {\n      var len = depths.length;\n\n      for (var i = 0; i < len; i++) {\n        if (depths[i] && depths[i][name] != null) {\n          return depths[i][name];\n        }\n      }\n    },\n    lambda: function lambda(current, context) {\n      return typeof current === 'function' ? current.call(context) : current;\n    },\n    escapeExpression: Utils.escapeExpression,\n    invokePartial: invokePartialWrapper,\n    fn: function fn(i) {\n      var ret = templateSpec[i];\n      ret.decorator = templateSpec[i + '_d'];\n      return ret;\n    },\n    programs: [],\n    program: function program(i, data, declaredBlockParams, blockParams, depths) {\n      var programWrapper = this.programs[i],\n          fn = this.fn(i);\n\n      if (data || depths || blockParams || declaredBlockParams) {\n        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);\n      } else if (!programWrapper) {\n        programWrapper = this.programs[i] = wrapProgram(this, i, fn);\n      }\n\n      return programWrapper;\n    },\n    data: function data(value, depth) {\n      while (value && depth--) {\n        value = value._parent;\n      }\n\n      return value;\n    },\n    merge: function merge(param, common) {\n      var obj = param || common;\n\n      if (param && common && param !== common) {\n        obj = Utils.extend({}, common, param);\n      }\n\n      return obj;\n    },\n    // An empty object to use as replacement for null-contexts\n    nullContext: Object.seal({}),\n    noop: env.VM.noop,\n    compilerInfo: templateSpec.compiler\n  };\n\n  function ret(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n    var data = options.data;\n\n    ret._setup(options);\n\n    if (!options.partial && templateSpec.useData) {\n      data = initData(context, data);\n    }\n\n    var depths = undefined,\n        blockParams = templateSpec.useBlockParams ? [] : undefined;\n\n    if (templateSpec.useDepths) {\n      if (options.depths) {\n        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;\n      } else {\n        depths = [context];\n      }\n    }\n\n    function main(context\n    /*, options*/\n    ) {\n      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);\n    }\n\n    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);\n    return main(context, options);\n  }\n\n  ret.isTop = true;\n\n  ret._setup = function (options) {\n    if (!options.partial) {\n      container.helpers = container.merge(options.helpers, env.helpers);\n\n      if (templateSpec.usePartial) {\n        container.partials = container.merge(options.partials, env.partials);\n      }\n\n      if (templateSpec.usePartial || templateSpec.useDecorators) {\n        container.decorators = container.merge(options.decorators, env.decorators);\n      }\n    } else {\n      container.helpers = options.helpers;\n      container.partials = options.partials;\n      container.decorators = options.decorators;\n    }\n  };\n\n  ret._child = function (i, data, blockParams, depths) {\n    if (templateSpec.useBlockParams && !blockParams) {\n      throw new _exception2['default']('must pass block params');\n    }\n\n    if (templateSpec.useDepths && !depths) {\n      throw new _exception2['default']('must pass parent depths');\n    }\n\n    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);\n  };\n\n  return ret;\n}\n\nfunction wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {\n  function prog(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n    var currentDepths = depths;\n\n    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {\n      currentDepths = [context].concat(depths);\n    }\n\n    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);\n  }\n\n  prog = executeDecorators(fn, prog, container, depths, data, blockParams);\n  prog.program = i;\n  prog.depth = depths ? depths.length : 0;\n  prog.blockParams = declaredBlockParams || 0;\n  return prog;\n}\n\nfunction resolvePartial(partial, context, options) {\n  if (!partial) {\n    if (options.name === '@partial-block') {\n      partial = options.data['partial-block'];\n    } else {\n      partial = options.partials[options.name];\n    }\n  } else if (!partial.call && !options.name) {\n    // This is a dynamic partial that returned a string\n    options.name = partial;\n    partial = options.partials[partial];\n  }\n\n  return partial;\n}\n\nfunction invokePartial(partial, context, options) {\n  // Use the current closure context to save the partial-block if this partial\n  var currentPartialBlock = options.data && options.data['partial-block'];\n  options.partial = true;\n\n  if (options.ids) {\n    options.data.contextPath = options.ids[0] || options.data.contextPath;\n  }\n\n  var partialBlock = undefined;\n\n  if (options.fn && options.fn !== noop) {\n    (function () {\n      options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure\n\n      var fn = options.fn;\n\n      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {\n        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block\n        // i.e. the part inside the block of the partial call.\n\n        options.data = _base.createFrame(options.data);\n        options.data['partial-block'] = currentPartialBlock;\n        return fn(context, options);\n      };\n\n      if (fn.partials) {\n        options.partials = Utils.extend({}, options.partials, fn.partials);\n      }\n    })();\n  }\n\n  if (partial === undefined && partialBlock) {\n    partial = partialBlock;\n  }\n\n  if (partial === undefined) {\n    throw new _exception2['default']('The partial ' + options.name + ' could not be found');\n  } else if (partial instanceof Function) {\n    return partial(context, options);\n  }\n}\n\nfunction noop() {\n  return '';\n}\n\nfunction initData(context, data) {\n  if (!data || !('root' in data)) {\n    data = data ? _base.createFrame(data) : {};\n    data.root = context;\n  }\n\n  return data;\n}\n\nfunction executeDecorators(fn, prog, container, depths, data, blockParams) {\n  if (fn.decorator) {\n    var props = {};\n    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);\n    Utils.extend(prog, props);\n  }\n\n  return prog;\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Build out our basic SafeString type\n\n\nexports.__esModule = true;\n\nfunction SafeString(string) {\n  this.string = string;\n}\n\nSafeString.prototype.toString = SafeString.prototype.toHTML = function () {\n  return '' + this.string;\n};\n\nexports['default'] = SafeString;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/safe-string.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.extend = extend;\nexports.indexOf = indexOf;\nexports.escapeExpression = escapeExpression;\nexports.isEmpty = isEmpty;\nexports.createFrame = createFrame;\nexports.blockParams = blockParams;\nexports.appendContextPath = appendContextPath;\nvar escape = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#x27;',\n  '`': '&#x60;',\n  '=': '&#x3D;'\n};\nvar badChars = /[&<>\"'`=]/g,\n    possible = /[&<>\"'`=]/;\n\nfunction escapeChar(chr) {\n  return escape[chr];\n}\n\nfunction extend(obj\n/* , ...source */\n) {\n  for (var i = 1; i < arguments.length; i++) {\n    for (var key in arguments[i]) {\n      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {\n        obj[key] = arguments[i][key];\n      }\n    }\n  }\n\n  return obj;\n}\n\nvar toString = Object.prototype.toString;\nexports.toString = toString; // Sourced from lodash\n// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt\n\n/* eslint-disable func-style */\n\nvar isFunction = function isFunction(value) {\n  return typeof value === 'function';\n}; // fallback for older versions of Chrome and Safari\n\n/* istanbul ignore next */\n\n\nif (isFunction(/x/)) {\n  exports.isFunction = isFunction = function (value) {\n    return typeof value === 'function' && toString.call(value) === '[object Function]';\n  };\n}\n\nexports.isFunction = isFunction;\n/* eslint-enable func-style */\n\n/* istanbul ignore next */\n\nvar isArray = Array.isArray || function (value) {\n  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;\n};\n\nexports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.\n\nfunction indexOf(array, value) {\n  for (var i = 0, len = array.length; i < len; i++) {\n    if (array[i] === value) {\n      return i;\n    }\n  }\n\n  return -1;\n}\n\nfunction escapeExpression(string) {\n  if (typeof string !== 'string') {\n    // don't escape SafeStrings, since they're already safe\n    if (string && string.toHTML) {\n      return string.toHTML();\n    } else if (string == null) {\n      return '';\n    } else if (!string) {\n      return string + '';\n    } // Force a string conversion as this will be done by the append regardless and\n    // the regex test will do this transparently behind the scenes, causing issues if\n    // an object's to string has escaped characters in it.\n\n\n    string = '' + string;\n  }\n\n  if (!possible.test(string)) {\n    return string;\n  }\n\n  return string.replace(badChars, escapeChar);\n}\n\nfunction isEmpty(value) {\n  if (!value && value !== 0) {\n    return true;\n  } else if (isArray(value) && value.length === 0) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction createFrame(object) {\n  var frame = extend({}, object);\n  frame._parent = object;\n  return frame;\n}\n\nfunction blockParams(params, ids) {\n  params.path = ids;\n  return params;\n}\n\nfunction appendContextPath(contextPath, id) {\n  return (contextPath ? contextPath + '.' : '') + id;\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/utils.js?");

/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Create a simple path alias to allow browserify to resolve\n// the runtime on a supported path.\nmodule.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ \"./node_modules/handlebars/dist/cjs/handlebars.runtime.js\")['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/runtime.js?");

/***/ }),

/***/ "./src/animals.jsx":
/*!*************************!*\
  !*** ./src/animals.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Animals extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  render() {\n    const {\n      match,\n      animal\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"I am the Animals page for \", match.params.animalName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"The animals size is \", animal[0].size));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return {\n    animal: state.animal\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Animals));\n\n//# sourceURL=webpack:///./src/animals.jsx?");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"app\":\"app___2x3cr\",\"content\":\"content___37dfQ\"};\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.jsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ \"./src/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: _app_css__WEBPACK_IMPORTED_MODULE_3___default.a.app\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: _app_css__WEBPACK_IMPORTED_MODULE_3___default.a.content\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(this.props.route.routes)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ }),

/***/ "./src/footer.css":
/*!************************!*\
  !*** ./src/footer.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"footer\":\"footer___3QyYY\"};\n\n//# sourceURL=webpack:///./src/footer.css?");

/***/ }),

/***/ "./src/footer.jsx":
/*!************************!*\
  !*** ./src/footer.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ \"./src/footer.css\");\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _footer_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer\n    }, \"I am the Footer\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/footer.jsx?");

/***/ }),

/***/ "./src/header.css":
/*!************************!*\
  !*** ./src/header.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"header\":\"header___3fKiU\"};\n\n//# sourceURL=webpack:///./src/header.css?");

/***/ }),

/***/ "./src/header.jsx":
/*!************************!*\
  !*** ./src/header.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ \"./src/header.css\");\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _header_css__WEBPACK_IMPORTED_MODULE_1___default.a.header\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"I am the Header\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/\"\n    }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/animals/tiger\"\n    }, \"Tiger\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/animals/mouse\"\n    }, \"Mouse\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/header.jsx?");

/***/ }),

/***/ "./src/home.jsx":
/*!**********************!*\
  !*** ./src/home.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"I am the homepage\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/home.jsx?");

/***/ }),

/***/ "./src/index.html.hbs":
/*!****************************!*\
  !*** ./src/index.html.hbs ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\";\n\n  return \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\\\" />\\n    <link rel=\\\"stylesheet\\\" href=\\\"/public/styles.css\\\" />\\n    <title>Test Application</title>\\n    <script>\\n        window.__INITIAL_DATA__ = \"\n    + ((stack1 = ((helper = (helper = helpers.initialData || (depth0 != null ? depth0.initialData : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"initialData\",\"hash\":{},\"data\":data}) : helper))) != null ? stack1 : \"\")\n    + \";\\n    </script>\\n</head>\\n<body>\\n    <main id=\\\"main\\\">\"\n    + ((stack1 = ((helper = (helper = helpers.markup || (depth0 != null ? depth0.markup : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"markup\",\"hash\":{},\"data\":data}) : helper))) != null ? stack1 : \"\")\n    + \"</main>\\n    <script src=\\\"/public/client.js\\\"></script>\\n</body>\\n</html>\\n\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./src/index.html.hbs?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.jsx\");\n/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animals */ \"./src/animals.jsx\");\n/* harmony import */ var _store_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/thunks */ \"./src/store/thunks.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/app.jsx\");\n\n\n\n\nconst routes = [{\n  component: _app__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  routes: [{\n    path: \"/\",\n    exact: true,\n    component: _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }, {\n    path: \"/home\",\n    component: _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }, {\n    path: \"/animals/:animalName\",\n    strict: false,\n    component: _animals__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    loadData: async (dispatch, data) => {\n      return await Object(_store_thunks__WEBPACK_IMPORTED_MODULE_2__[\"fetchAnimalData\"])(data)(dispatch);\n    }\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server.jsx":
/*!************************!*\
  !*** ./src/server.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_animals_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/animals.json */ \"./data/animals.json\");\nvar _data_animals_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/animals.json */ \"./data/animals.json\", 1);\n/* harmony import */ var _index_html_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.html.hbs */ \"./src/index.html.hbs\");\n/* harmony import */ var _index_html_hbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_html_hbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _hapi_hapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hapi/hapi */ \"@hapi/hapi\");\n/* harmony import */ var _hapi_hapi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hapi_hapi__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hapi_inert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hapi/inert */ \"@hapi/inert\");\n/* harmony import */ var _hapi_inert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hapi_inert__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction sleep(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nconst init = async () => {\n  const server = _hapi_hapi__WEBPACK_IMPORTED_MODULE_6___default.a.server({\n    host: \"localhost\",\n    port: 3000\n  });\n  await server.register(_hapi_inert__WEBPACK_IMPORTED_MODULE_7___default.a);\n  server.route([{\n    method: \"GET\",\n    path: \"/api/animals/{animalName}\",\n    handler: async request => {\n      await sleep(2000);\n\n      try {\n        const animalName = request.params.animalName;\n        const data = _data_animals_json__WEBPACK_IMPORTED_MODULE_3__[animalName];\n        return JSON.stringify([data]);\n      } catch (e) {\n        return e;\n      }\n    }\n  }, {\n    path: \"/favicon.ico\",\n    method: \"get\",\n    config: {\n      auth: false,\n      cache: {\n        expiresIn: 1000 * 60 * 60 * 24 * 21\n      }\n    },\n    handler: function (request, h) {\n      return h.response().code(204).type(\"image/x-icon\");\n    }\n  }, {\n    method: \"GET\",\n    path: \"/public/{path*}\",\n    handler: {\n      directory: {\n        path: \"./dist/public/\",\n        redirectToSlash: true,\n        index: true\n      }\n    }\n  }, {\n    method: \"GET\",\n    path: \"/{p*}\",\n    handler: async request => {\n      try {\n        const matchingRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"], request.url.pathname);\n        const store = Object(_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        const dataCalls = matchingRoutes.map(({\n          route,\n          match\n        }) => {\n          const {\n            loadData\n          } = route;\n\n          if (loadData) {\n            return route.loadData(store.dispatch, match.params || {});\n          }\n\n          return Promise.resolve();\n        });\n        await Promise.all(dataCalls);\n        const initialData = store.getState();\n        const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_9___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n          store: store\n        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n          context: {},\n          location: request.url.pathname\n        }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]))));\n        const fullHTML = _index_html_hbs__WEBPACK_IMPORTED_MODULE_4___default()({\n          initialData: JSON.stringify(initialData),\n          markup\n        });\n        return fullHTML;\n      } catch (e) {\n        // eslint-disable-next-line no-console\n        console.log(e);\n      }\n    }\n  }]);\n  await server.start(); // eslint-disable-next-line no-console\n\n  console.log(\"Server online\");\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/server.jsx?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! exports provided: FETCH_ANIMAL, FETCH_ANIMAL_SUCCESS, FETCH_ANIMAL_FAILURE, fetchAnimalAction, fetchAnimalSuccessAction, fetchAnimalFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ANIMAL\", function() { return FETCH_ANIMAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ANIMAL_SUCCESS\", function() { return FETCH_ANIMAL_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ANIMAL_FAILURE\", function() { return FETCH_ANIMAL_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAnimalAction\", function() { return fetchAnimalAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAnimalSuccessAction\", function() { return fetchAnimalSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAnimalFailureAction\", function() { return fetchAnimalFailureAction; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FETCH_ANIMAL = \"myapp/animal/fetch-animal\";\nconst FETCH_ANIMAL_SUCCESS = \"myapp/animal/fetch-animal-success\";\nconst FETCH_ANIMAL_FAILURE = \"myapp/animal/fetch-animal-failure\";\nconst fetchAnimalAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(FETCH_ANIMAL);\nconst fetchAnimalSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(FETCH_ANIMAL_SUCCESS);\nconst fetchAnimalFailureAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(FETCH_ANIMAL_FAILURE);\n\n//# sourceURL=webpack:///./src/store/actions.js?");

/***/ }),

/***/ "./src/store/animal-reducer.js":
/*!*************************************!*\
  !*** ./src/store/animal-reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/store/actions.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst fetchAnimalReducer = state => {\n  return { ...state,\n    isFetching: true\n  };\n};\n\nconst fetchAnimalSuccessReducer = (state, action) => {\n  return { ...state,\n    isFetching: false,\n    ...action.payload\n  };\n};\n\nconst fetchAnimalFailureReducer = (state, action) => {\n  return { ...state,\n    isFetching: false,\n    error: action.error\n  };\n};\n\nconst reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])({\n  [_actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ANIMAL\"]]: fetchAnimalReducer,\n  [_actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ANIMAL_SUCCESS\"]]: fetchAnimalSuccessReducer,\n  [_actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ANIMAL_FAILURE\"]]: fetchAnimalFailureReducer\n}, {});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/store/animal-reducer.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animal_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal-reducer */ \"./src/store/animal-reducer.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  animal: _animal_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\nconst generateStore = (initialState = {}) => {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(rootReducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateStore);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/thunks.js":
/*!*****************************!*\
  !*** ./src/store/thunks.js ***!
  \*****************************/
/*! exports provided: fetchAnimalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAnimalData\", function() { return fetchAnimalData; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/actions.js\");\n\n\nconst fetchAnimalData = ({\n  animalName\n}) => {\n  return async dispatch => {\n    const url = `http://localhost:3000/api/animals/${animalName}`;\n\n    try {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"fetchAnimalAction\"])());\n      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url);\n      const data = await response.json();\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"fetchAnimalSuccessAction\"])(data));\n    } catch (e) {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"fetchAnimalFailureAction\"])(e));\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/store/thunks.js?");

/***/ }),

/***/ "@hapi/hapi":
/*!*****************************!*\
  !*** external "@hapi/hapi" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/hapi\");\n\n//# sourceURL=webpack:///external_%22@hapi/hapi%22?");

/***/ }),

/***/ "@hapi/inert":
/*!******************************!*\
  !*** external "@hapi/inert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/inert\");\n\n//# sourceURL=webpack:///external_%22@hapi/inert%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");\n\n//# sourceURL=webpack:///external_%22redux-actions%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });