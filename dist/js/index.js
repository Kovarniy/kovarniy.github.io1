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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
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

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
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

/***/ "./src/algorithms/numeric.js":
/*!***********************************!*\
  !*** ./src/algorithms/numeric.js ***!
  \***********************************/
/*! exports provided: randomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInteger", function() { return randomInteger; });
// This file includes algorithms for numeric operations
var randomInteger = function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};



/***/ }),

/***/ "./src/algorithms/requests.js":
/*!************************************!*\
  !*** ./src/algorithms/requests.js ***!
  \************************************/
/*! exports provided: getJsonFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonFromUrl", function() { return getJsonFromUrl; });
// This file includes functions for requests to server and etc
// This function return Json from url
var getJsonFromUrl = function getJsonFromUrl(url) {
  return fetch(url).then(function (responce) {
    return responce.json();
  });
};



/***/ }),

/***/ "./src/algorithms/sounds.js":
/*!**********************************!*\
  !*** ./src/algorithms/sounds.js ***!
  \**********************************/
/*! exports provided: addSoundToEl, playSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSoundToEl", function() { return addSoundToEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSound", function() { return playSound; });
var addSoundToEl = function addSoundToEl(selector, pathToSound) {
  var element = document.querySelectorAll(selector);
  element.forEach(function (el) {
    el.onclick = function (pathToSound) {
      playSound(pathToSound);
    };
  });
};

var playSound = function playSound(pathToSound) {
  var audio = new Audio(); // Создаём новый элемент Audio

  audio.src = "".concat(pathToSound); // Указываем путь к звуку "клика"

  audio.autoplay = true; // Автоматически запускаем
};



/***/ }),

/***/ "./src/algorithms/stopwatch.js":
/*!*************************************!*\
  !*** ./src/algorithms/stopwatch.js ***!
  \*************************************/
/*! exports provided: Stopwatch, RenderingStopwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stopwatch", function() { return Stopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingStopwatch", function() { return RenderingStopwatch; });
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Stopwatch = /*#__PURE__*/function () {
  function Stopwatch() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Stopwatch);

    this.sec = this.min = this.hour = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Stopwatch, [{
    key: "reset",
    value: function reset() {
      this.sec = this.min = this.hour = 0;
    }
  }, {
    key: "tick",
    value: function tick(obj) {
      obj.sec++;

      if (obj.sec === 60) {
        obj.min += 1;
        obj.sec = 0;
      }

      if (obj.min === 60) {
        obj.hour += 1;
        obj.min = 0;
      }

      if (obj.hour === 24) {
        obj.hour = obj.msin = obj.sec = 0;
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.timerId = setInterval(this.tick, 1000, this);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timerId);
    }
  }, {
    key: "toString",
    value: function toString() {
      var sHour = this.hour < 10 ? "0".concat(this.hour) : this.hour;
      var timeString = "".concat(sHour, ":");
      var sMin = this.min < 10 ? "0".concat(this.min) : this.min;
      timeString += "".concat(sMin, ":");
      var sSec = this.sec < 10 ? "0".concat(this.sec) : this.sec;
      timeString += "".concat(sSec);
      return timeString;
    }
  }, {
    key: "getSecond",
    get: function get() {
      return this.sec + this.min * 60 + this.hour * 3600;
    }
  }]);

  return Stopwatch;
}();

var RenderingStopwatch = /*#__PURE__*/function (_Stopwatch) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(RenderingStopwatch, _Stopwatch);

  var _super = _createSuper(RenderingStopwatch);

  function RenderingStopwatch(elId) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, RenderingStopwatch);

    _this = _super.call(this);
    _this.elId = elId;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(RenderingStopwatch, [{
    key: "tick",
    value: function tick(obj) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RenderingStopwatch.prototype), "tick", this).call(this, obj);

      var timeEl = document.getElementById(obj.elId);
      timeEl.innerHTML = "<b>Time:</b> " + obj.toString();
    }
  }]);

  return RenderingStopwatch;
}(Stopwatch);



/***/ }),

/***/ "./src/engine/gameLayout.js":
/*!**********************************!*\
  !*** ./src/engine/gameLayout.js ***!
  \**********************************/
/*! exports provided: renderGameSettings, genetateGameField, showEndGameWindow, renderGameMenu, hiddenEndGameWindow, renderRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGameSettings", function() { return renderGameSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genetateGameField", function() { return genetateGameField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEndGameWindow", function() { return showEndGameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGameMenu", function() { return renderGameMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenEndGameWindow", function() { return hiddenEndGameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRating", function() { return renderRating; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_crads_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/crads-events.js */ "./src/events/crads-events.js");
/* harmony import */ var _gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _events_settnigs_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/settnigs-events */ "./src/events/settnigs-events.js");
/* harmony import */ var _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/buttons-clicks.js */ "./src/events/buttons-clicks.js");
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");
/* harmony import */ var _getDataFromDB_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getDataFromDB.js */ "./src/engine/getDataFromDB.js");








 // create settings selectors and buttons

var createSelector = function createSelector(inEl, selectorListner, parametrsArray, activEl) {
  var selector = document.createElement("select");
  selector.classList.add("settingsSelector");
  var inText = "";

  selector.onchange = function () {
    selectorListner(selector.value);
  };

  parametrsArray.forEach(function (el) {
    if (activEl === el) inText += "<option selected value=\"".concat(el, "\" >").concat(el, "</option>");else inText += "<option value=\"".concat(el, "\">").concat(el, "</option>");
  });
  selector.innerHTML = inText;
  inEl.append(selector);
};

var createBackBtn = function createBackBtn(context) {
  var button = document.createElement("button");

  button.onclick = function () {
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__["playSound"])("dist/sound/buttonClick.mp3");
    renderGameMenu("game-menu");
  };

  button.classList.add("menu-btn");
  button.innerText = "Back";
  button.setAttribute("id", "back-to-main-menu-btn");
  context.append(button);
}; //------------------------------------------------
// input parameter - elemet which must be removed


var removeField = function removeField(elemeintId) {
  var removedActivity = document.getElementById(elemeintId);
  removedActivity.remove();
};

var renderGameSettings = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var workSpace, settingsMenu, cardSets;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            removeField("game-menu");
            workSpace = document.getElementById("work-space");
            settingsMenu = document.createElement("div");
            settingsMenu.setAttribute("id", "game-menu");
            workSpace.append(settingsMenu);
            _context.next = 7;
            return Object(_getDataFromDB_js__WEBPACK_IMPORTED_MODULE_8__["gatCardsNames"])();

          case 7:
            cardSets = _context.sent;
            createSelector(settingsMenu, _events_settnigs_events__WEBPACK_IMPORTED_MODULE_4__["selDifLvl"], ["Easy", "Medium", "Hard"], _gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["levelOfDifficulty"]);
            createSelector(settingsMenu, _events_settnigs_events__WEBPACK_IMPORTED_MODULE_4__["selectSardSet"], cardSets, _gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getCardSetName"]);
            createBackBtn(settingsMenu);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderGameSettings() {
    return _ref.apply(this, arguments);
  };
}(); //------------------------------------------------
// game field


var addInfoBar = function addInfoBar() {
  var doc = document.getElementById("work-space");
  var gameField = document.createElement("div");
  gameField.setAttribute("id", "game-field");
  gameField.innerHTML = "<span id=\"infoBar\">\n                            <p id=\"countClick\"><b>Number of clicks:</b> 0</p> \n                            <p id=\"stopwatch\"><b>Time:</b> 00:00:00</p>\n                         </span>";
  doc.append(gameField);
};

var addCardsOnField = function addCardsOnField(fieldSize) {
  var doc = document.getElementById("game-field");

  var _loop = function _loop(i) {
    var div = document.createElement("div");
    div.classList.add("card");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getFieldSize"])() === 12) div.classList.add("easy");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getFieldSize"])() === 18) div.classList.add("medium");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getFieldSize"])() === 24) div.classList.add("hard"); //Alternative solution - use Event delegation on work-space

    div.onclick = function () {
      Object(_events_crads_events_js__WEBPACK_IMPORTED_MODULE_2__["rollCard"])(div);
    };

    div.setAttribute("activated", false);
    div.setAttribute("id", "".concat(i, "-card"));
    div.innerHTML = "<div class=\"front-card\" activated=\"false\"></div>\n          <div class=\"back-card\"></div>";
    doc.append(div);
  };

  for (var i = 0; i < fieldSize; i++) {
    _loop(i);
  }
};

var genetateGameField = function genetateGameField(fieldSize) {
  removeField("game-menu");
  addInfoBar();
  addCardsOnField(fieldSize);
}; //------------------------------------------------
// Game menu


var renderGameMenu = function renderGameMenu(oldActivity) {
  removeField("".concat(oldActivity));
  var doc = document.getElementById("work-space");
  var div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  div.innerHTML = "<button class=\"menu-btn\" id=\"new-game-btn\">New Game</button>\n                   <button class=\"menu-btn\" id=\"rating-btn\">Rating</button>\n                   <button class=\"menu-btn\" id=\"options-btn\">Options</button>";
  doc.append(div);
  addGameMenuListner();
};

var addGameMenuListner = function addGameMenuListner() {
  var newGameBtn = document.getElementById("new-game-btn");
  var ratingBtn = document.getElementById("rating-btn");
  var optionsBtn = document.getElementById("options-btn");
  newGameBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__["newGame"];
  ratingBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__["openRating"];
  optionsBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__["openSettings"];
}; //------------------------------------------------
// rating


var renderRating = function renderRating() {
  removeField("game-menu");
  var workSpace = document.getElementById("work-space");
  var div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  workSpace.append(div);
  var ratingMenu = document.getElementById("game-menu");
  var gameResults = Object(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__["getGameResults"])();
  gameResults.forEach(function (element, key) {
    if (key !== 0) {
      var playerInfo = document.createElement("p");
      playerInfo.innerText = "".concat(key, " ").concat(element);
      ratingMenu.append(playerInfo);
    }
  });
  createBackBtn(ratingMenu);
}; //
// Modal window


var hiddenEndGameWindow = function hiddenEndGameWindow() {
  var modalWindow = document.getElementById("modalDialog");
  document.getElementById("nick-name").value = "";
  modalWindow.style.top = "-999px";
  setTimeout(function () {
    var backModal = document.getElementById("openModal");
    backModal.style.visibility = "hidden";
  }, 500);
};

var showEndGameWindow = function showEndGameWindow() {
  var backModal = document.getElementById("openModal");
  backModal.style.visibility = "visible";
  var modalWindow = document.getElementById("modalDialog");
  modalWindow.style.top = "0px";
  modalWindow.childNodes[3].innerText = "Travel time: ".concat(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__["gameState"].stopwatch.toString());
  modalWindow.childNodes[5].innerText = "Number of Clicks: ".concat(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__["gameState"].countClicks);
}; //




/***/ }),

/***/ "./src/engine/gameSettings.js":
/*!************************************!*\
  !*** ./src/engine/gameSettings.js ***!
  \************************************/
/*! exports provided: getCardSetName, getFieldSize, setLevel, setCardSet, levelOfDifficulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardSetName", function() { return getCardSetName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldSize", function() { return getFieldSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLevel", function() { return setLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCardSet", function() { return setCardSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelOfDifficulty", function() { return levelOfDifficulty; });
/* game settings are stored here */

/* This file may be convert to json if you need to create server side */
// TODO: rewrite this cod to Object!!!
var levelOfDifficulty = "Easy";
var cardSet = "Cats";

var getFieldSize = function getFieldSize() {
  switch (levelOfDifficulty) {
    case "Easy":
      return 12;

    case "Medium":
      return 18;

    case "Hard":
      return 24;

    default:
      return 12;
  }
};

var getCardSetName = function getCardSetName() {
  return cardSet;
};

var setCardSet = function setCardSet(value) {
  cardSet = value;
};

var setLevel = function setLevel(value) {
  levelOfDifficulty = value;
};



/***/ }),

/***/ "./src/engine/gameStatistics.js":
/*!**************************************!*\
  !*** ./src/engine/gameStatistics.js ***!
  \**************************************/
/*! exports provided: gameState, saveGameResult, getGameResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameState", function() { return gameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGameResult", function() { return saveGameResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameResults", function() { return getGameResults; });
/* harmony import */ var _algorithms_stopwatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/stopwatch.js */ "./src/algorithms/stopwatch.js");
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");


var gameState = {
  totalCountUpCards: 0,
  countClicks: 0,
  stopwatch: new _algorithms_stopwatch_js__WEBPACK_IMPORTED_MODULE_0__["RenderingStopwatch"]("stopwatch"),
  reset: function reset() {
    this.totalCountUpCards = 0;
    this.countClicks = 0;
    this.stopwatch.reset();
  }
};
var MAX_TIME = 600;

var saveGameResult = function saveGameResult() {
  var playerName = document.getElementById("nick-name").value;
  var countClicks = gameState.countClicks;
  var trevelTime = gameState.stopwatch.getSecond;
  var playerPoints;

  if (trevelTime < MAX_TIME) {
    playerPoints = Math.trunc((MAX_TIME - trevelTime) * countClicks / Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__["getFieldSize"])());
  } else {
    playerPoints = 100;
  }

  console.log(playerPoints);

  try {
    if (localStorage.getItem(playerName) === null && playerName !== "") {
      console.log("save to storige");
      localStorage.setItem(playerName, playerPoints.toString());
    } else {
      var oldCountPoints = localStorage.getItem(playerName);
      console.log(oldCountPoints);
      if (playerPoints > parseInt(oldCountPoints)) localStorage.setItem(playerName, playerPoints.toString());
    }
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      console.log("Превышен лимит");
    }
  }
};

var getGameResults = function getGameResults() {
  var gameRating = [localStorage.length];

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key !== 0) {
      gameRating.push([key, localStorage.getItem(key)]);
    }
  }

  return gameRating;
};



/***/ }),

/***/ "./src/engine/getDataFromDB.js":
/*!*************************************!*\
  !*** ./src/engine/getDataFromDB.js ***!
  \*************************************/
/*! exports provided: gatCardsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatCardsNames", function() { return gatCardsNames; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _algorithms_requests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/requests.js */ "./src/algorithms/requests.js");


 // TODO GAME_DATA_URL используется в нескольниких местах, есть смысл создать файл с
// переменными "среды окружения"

var GAME_DATA_URL = "/dist/data/gameData.json";

var gatCardsNames = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var gameDataResponse, cardSets, key;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_algorithms_requests_js__WEBPACK_IMPORTED_MODULE_2__["getJsonFromUrl"])(GAME_DATA_URL);

          case 2:
            gameDataResponse = _context.sent;
            cardSets = [];

            for (key in gameDataResponse) {
              cardSets.push(key);
            }

            return _context.abrupt("return", cardSets);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function gatCardsNames() {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/engine/newGame.js":
/*!*******************************!*\
  !*** ./src/engine/newGame.js ***!
  \*******************************/
/*! exports provided: startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/numeric.js */ "./src/algorithms/numeric.js");
/* harmony import */ var _algorithms_requests_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithms/requests.js */ "./src/algorithms/requests.js");
/* harmony import */ var _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../engine/gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _gameLayout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameLayout.js */ "./src/engine/gameLayout.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");



function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var GAME_DATA_URL = "/dist/data/gameData.json"; // It's functions need for formed game map
// this function get Json from server and formed map answer with cards links

var getCards = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fieldSize, cardSetName) {
    var gameDataResponse, pictureStore, hasEl, index, id, link;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_algorithms_requests_js__WEBPACK_IMPORTED_MODULE_4__["getJsonFromUrl"])(GAME_DATA_URL);

          case 2:
            gameDataResponse = _context.sent;
            pictureStore = new Map(); // Данный set нужен для недопуска добавления повторяющихся жл в map

            hasEl = new Set();
            index = 0;

            while (pictureStore.size < fieldSize / 2) {
              id = Object(_algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_3__["randomInteger"])(0, 14);
              link = gameDataResponse[cardSetName][id]["link"];

              if (!hasEl.has(id)) {
                hasEl.add(id);
                pictureStore.set(index, link);
                index++;
              }
            }

            return _context.abrupt("return", pictureStore);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCards(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var generateCardPosition = function generateCardPosition(fieldSize) {
  var cardSet = new Set();
  var posArray = [];
  var index = 0;

  while (cardSet.size < fieldSize) {
    var countUniqEl = 0; // Generate two uniq pos for equal cards

    while (countUniqEl < 2) {
      var pos = Object(_algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_3__["randomInteger"])(0, fieldSize - 1);

      if (!cardSet.has(pos)) {
        cardSet.add(pos);
        posArray[pos] = index;
        countUniqEl++;
      }
    }

    index++;
  }

  console.log(posArray);
  return posArray;
};

var renderBackSide = function renderBackSide(posArray, cardsMap) {
  console.log(cardsMap);
  var doc = document.getElementById("game-field");
  var index = 0;

  var _iterator = _createForOfIteratorHelper(doc.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.tagName !== "SPAN") {
        var numOfCard = posArray[index];
        var link = cardsMap.get(numOfCard);
        node.children[1].style.backgroundImage = "url(".concat(link, ")");
        node.children[1].style.backgroundSize = "100%";
        index++;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var createGameMatrix = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fieldSize, cardSetName) {
    var pictureStore, posArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getCards(fieldSize, cardSetName);

          case 2:
            pictureStore = _context2.sent;
            posArray = generateCardPosition(fieldSize, pictureStore);
            renderBackSide(posArray, pictureStore);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createGameMatrix(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //


var startGame = function startGame() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__["playSound"])("dist/sound/cardsLayout.mp3");
  var fieldSize = Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__["getFieldSize"])();
  var cardSetName = Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__["getCardSetName"])();
  Object(_gameLayout_js__WEBPACK_IMPORTED_MODULE_6__["genetateGameField"])(fieldSize);
  createGameMatrix(fieldSize, cardSetName);
  _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_5__["gameState"].stopwatch.start();
};



/***/ }),

/***/ "./src/events/buttons-clicks.js":
/*!**************************************!*\
  !*** ./src/events/buttons-clicks.js ***!
  \**************************************/
/*! exports provided: newGame, openRating, openSettings, endGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRating", function() { return openRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettings", function() { return openSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endGame", function() { return endGame; });
/* harmony import */ var _engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameLayout.js */ "./src/engine/gameLayout.js");
/* harmony import */ var _engine_newGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/newGame.js */ "./src/engine/newGame.js");
/* harmony import */ var _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");



 // This btn removed game-menu and uploaded game-field wich cards

var newGame = function newGame() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_newGame_js__WEBPACK_IMPORTED_MODULE_1__["startGame"])();
};

var openSettings = function openSettings() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderGameSettings"])();
};

var openRating = function openRating() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderRating"])();
};

var endGame = function endGame() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_2__["saveGameResult"])();
  _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_2__["gameState"].reset();
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["hiddenEndGameWindow"])();
  setTimeout(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderGameMenu"], 300, "game-field");
  return false;
};



/***/ }),

/***/ "./src/events/crads-events.js":
/*!************************************!*\
  !*** ./src/events/crads-events.js ***!
  \************************************/
/*! exports provided: rollCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollCard", function() { return rollCard; });
/* harmony import */ var _engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/gameLayout.js */ "./src/engine/gameLayout.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");





var clickCounter = function clickCounter(count) {
  var clickBar = document.getElementById("countClick");
  clickBar.innerHTML = "<b>Number of clicks:</b> ".concat(count);
};

var checkCardsMatches = function checkCardsMatches() {
  var invertedСards = document.querySelectorAll("[activated=\"true\"]"); // In this version comparison is performed for url to backround-image
  // This solution can be replaced by comparison by id

  var card1Back = invertedСards[0].lastChild;
  var card2Back = invertedСards[1].lastChild;

  if (card1Back.style.backgroundImage === card2Back.style.backgroundImage) {
    invertedСards[0].setAttribute("selected", true);
    invertedСards[1].setAttribute("selected", true);
    _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].totalCountUpCards += 2;
    invertedСards[0].setAttribute("activated", false);
    invertedСards[1].setAttribute("activated", false);
    setTimeout(checkEndGame, 1000);
  } else {
    rollDisabled();
    setTimeout(function () {
      invertedСards[0].setAttribute("activated", false);
      invertedСards[1].setAttribute("activated", false);
    }, 1500);
    setTimeout(rollEnabled, 2000);
  }
};

var rollDisabled = function rollDisabled() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (item) {
    item.onclick = null;
  });
};

var rollEnabled = function rollEnabled() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (item) {
    item.onclick = function () {
      rollCard(item);
    };
  });
};

var checkEndGame = function checkEndGame() {
  if (Object(_engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__["getFieldSize"])() == _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].totalCountUpCards) {
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/endGame.mp3");
    _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].stopwatch.stop();
    Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_2__["showEndGameWindow"])();
  }
};

var countUpCards = 0;

var rollCard = function rollCard(div) {
  // this code work only with non selected and not activated functions
  if (!div.hasAttribute("selected") && div.getAttribute("activated") === "false") {
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/upCard.mp3");
    _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].countClicks += 1;
    clickCounter(_engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].countClicks);
    console.log(_engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"]);

    if (countUpCards < 2) {
      div.setAttribute("activated", true);
      countUpCards++;
    }

    if (countUpCards == 2) {
      countUpCards = 0;
      checkCardsMatches();
    }
  }
};



/***/ }),

/***/ "./src/events/settnigs-events.js":
/*!***************************************!*\
  !*** ./src/events/settnigs-events.js ***!
  \***************************************/
/*! exports provided: selDifLvl, selectSardSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selDifLvl", function() { return selDifLvl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSardSet", function() { return selectSardSet; });
/* harmony import */ var _engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameSettings.js */ "./src/engine/gameSettings.js");


var selDifLvl = function selDifLvl(value) {
  Object(_engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__["setLevel"])(value);
};

var selectSardSet = function selectSardSet(value) {
  Object(_engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__["setCardSet"])(value);
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/buttons-clicks.js */ "./src/events/buttons-clicks.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/gameLayout.js */ "./src/engine/gameLayout.js");




window.onload = function () {
  var newGameBtn = document.getElementById("new-game-btn");
  var ratingBtn = document.getElementById("rating-btn");
  var optionsBtn = document.getElementById("options-btn");
  var endGameBtn = document.getElementById("modalDialog");
  newGameBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["newGame"];
  ratingBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["openRating"];
  optionsBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["openSettings"];
  endGameBtn.onsubmit = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["endGame"]; //showEndGameWindow();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2V0RGF0YUZyb21EQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2NyYWRzLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3NldHRuaWdzLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJnZXRKc29uRnJvbVVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbmNlIiwianNvbiIsImFkZFNvdW5kVG9FbCIsInNlbGVjdG9yIiwicGF0aFRvU291bmQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwib25jbGljayIsInBsYXlTb3VuZCIsImF1ZGlvIiwiQXVkaW8iLCJzcmMiLCJhdXRvcGxheSIsIlN0b3B3YXRjaCIsInNlYyIsImhvdXIiLCJvYmoiLCJtc2luIiwidGltZXJJZCIsInNldEludGVydmFsIiwidGljayIsImNsZWFySW50ZXJ2YWwiLCJzSG91ciIsInRpbWVTdHJpbmciLCJzTWluIiwic1NlYyIsIlJlbmRlcmluZ1N0b3B3YXRjaCIsImVsSWQiLCJ0aW1lRWwiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiY3JlYXRlU2VsZWN0b3IiLCJpbkVsIiwic2VsZWN0b3JMaXN0bmVyIiwicGFyYW1ldHJzQXJyYXkiLCJhY3RpdkVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImluVGV4dCIsIm9uY2hhbmdlIiwidmFsdWUiLCJhcHBlbmQiLCJjcmVhdGVCYWNrQnRuIiwiY29udGV4dCIsImJ1dHRvbiIsInJlbmRlckdhbWVNZW51IiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRmllbGQiLCJlbGVtZWludElkIiwicmVtb3ZlZEFjdGl2aXR5IiwicmVtb3ZlIiwicmVuZGVyR2FtZVNldHRpbmdzIiwid29ya1NwYWNlIiwic2V0dGluZ3NNZW51IiwiZ2F0Q2FyZHNOYW1lcyIsImNhcmRTZXRzIiwic2VsRGlmTHZsIiwibGV2ZWxPZkRpZmZpY3VsdHkiLCJzZWxlY3RTYXJkU2V0IiwiZ2V0Q2FyZFNldE5hbWUiLCJhZGRJbmZvQmFyIiwiZG9jIiwiZ2FtZUZpZWxkIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiaSIsImRpdiIsImdldEZpZWxkU2l6ZSIsInJvbGxDYXJkIiwiZ2VuZXRhdGVHYW1lRmllbGQiLCJvbGRBY3Rpdml0eSIsImFkZEdhbWVNZW51TGlzdG5lciIsIm5ld0dhbWVCdG4iLCJyYXRpbmdCdG4iLCJvcHRpb25zQnRuIiwibmV3R2FtZSIsIm9wZW5SYXRpbmciLCJvcGVuU2V0dGluZ3MiLCJyZW5kZXJSYXRpbmciLCJyYXRpbmdNZW51IiwiZ2FtZVJlc3VsdHMiLCJnZXRHYW1lUmVzdWx0cyIsImtleSIsInBsYXllckluZm8iLCJoaWRkZW5FbmRHYW1lV2luZG93IiwibW9kYWxXaW5kb3ciLCJzdHlsZSIsInRvcCIsInNldFRpbWVvdXQiLCJiYWNrTW9kYWwiLCJ2aXNpYmlsaXR5Iiwic2hvd0VuZEdhbWVXaW5kb3ciLCJjaGlsZE5vZGVzIiwiZ2FtZVN0YXRlIiwic3RvcHdhdGNoIiwiY291bnRDbGlja3MiLCJjYXJkU2V0Iiwic2V0Q2FyZFNldCIsInNldExldmVsIiwidG90YWxDb3VudFVwQ2FyZHMiLCJyZXNldCIsIk1BWF9USU1FIiwic2F2ZUdhbWVSZXN1bHQiLCJwbGF5ZXJOYW1lIiwidHJldmVsVGltZSIsImdldFNlY29uZCIsInBsYXllclBvaW50cyIsInRydW5jIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwib2xkQ291bnRQb2ludHMiLCJwYXJzZUludCIsImUiLCJRVU9UQV9FWENFRURFRF9FUlIiLCJnYW1lUmF0aW5nIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiR0FNRV9EQVRBX1VSTCIsImdhbWVEYXRhUmVzcG9uc2UiLCJnZXRDYXJkcyIsImNhcmRTZXROYW1lIiwicGljdHVyZVN0b3JlIiwiTWFwIiwiaGFzRWwiLCJTZXQiLCJpbmRleCIsInNpemUiLCJpZCIsImxpbmsiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZUNhcmRQb3NpdGlvbiIsInBvc0FycmF5IiwiY291bnRVbmlxRWwiLCJwb3MiLCJyZW5kZXJCYWNrU2lkZSIsImNhcmRzTWFwIiwiY2hpbGRyZW4iLCJub2RlIiwidGFnTmFtZSIsIm51bU9mQ2FyZCIsImdldCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY3JlYXRlR2FtZU1hdHJpeCIsInN0YXJ0R2FtZSIsInN0YXJ0IiwiZW5kR2FtZSIsImNsaWNrQ291bnRlciIsImNvdW50IiwiY2xpY2tCYXIiLCJjaGVja0NhcmRzTWF0Y2hlcyIsImludmVydGVk0KFhcmRzIiwiY2FyZDFCYWNrIiwibGFzdENoaWxkIiwiY2FyZDJCYWNrIiwiY2hlY2tFbmRHYW1lIiwicm9sbERpc2FibGVkIiwicm9sbEVuYWJsZWQiLCJjYXJkcyIsIml0ZW0iLCJzdG9wIiwiY291bnRVcENhcmRzIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwid2luZG93Iiwib25sb2FkIiwiZW5kR2FtZUJ0biIsIm9uc3VibWl0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkEsb0JBQW9CLG1CQUFPLENBQUMsK0VBQWlCOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDUEEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7Ozs7QUNqQkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekMsNEJBQTRCLG1CQUFPLENBQUMsK0ZBQXlCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNUQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQjs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgYWxnb3JpdGhtcyBmb3IgbnVtZXJpYyBvcGVyYXRpb25zXG5cbmNvbnN0IHJhbmRvbUludGVnZXIgPSAobWluLCBtYXgpID0+IHtcbiAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xuICByZXR1cm4gTWF0aC5mbG9vcihyYW5kKTtcbn07XG5cbmV4cG9ydCB7IHJhbmRvbUludGVnZXIgfTtcbiIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBmdW5jdGlvbnMgZm9yIHJlcXVlc3RzIHRvIHNlcnZlciBhbmQgZXRjXG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJuIEpzb24gZnJvbSB1cmxcbmNvbnN0IGdldEpzb25Gcm9tVXJsID0gKHVybCkgPT4ge1xuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKChyZXNwb25jZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25jZS5qc29uKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZ2V0SnNvbkZyb21VcmwgfTtcbiIsImNvbnN0IGFkZFNvdW5kVG9FbCA9IChzZWxlY3RvciwgcGF0aFRvU291bmQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlbGVtZW50LmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwub25jbGljayA9IGZ1bmN0aW9uIChwYXRoVG9Tb3VuZCkge1xuICAgICAgcGxheVNvdW5kKHBhdGhUb1NvdW5kKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IHBsYXlTb3VuZCA9IChwYXRoVG9Tb3VuZCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpOyAvLyDQodC+0LfQtNCw0ZHQvCDQvdC+0LLRi9C5INGN0LvQtdC80LXQvdGCIEF1ZGlvXG4gIGF1ZGlvLnNyYyA9IGAke3BhdGhUb1NvdW5kfWA7IC8vINCj0LrQsNC30YvQstCw0LXQvCDQv9GD0YLRjCDQuiDQt9Cy0YPQutGDIFwi0LrQu9C40LrQsFwiXG4gIGF1ZGlvLmF1dG9wbGF5ID0gdHJ1ZTsgLy8g0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LfQsNC/0YPRgdC60LDQtdC8XG59O1xuXG5leHBvcnQgeyBhZGRTb3VuZFRvRWwsIHBsYXlTb3VuZCB9O1xuIiwiY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWMgPSB0aGlzLm1pbiA9IHRoaXMuaG91ciA9IDA7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNlYyA9IHRoaXMubWluID0gdGhpcy5ob3VyID0gMDtcbiAgfVxuXG4gIHRpY2sob2JqKSB7XG4gICAgb2JqLnNlYysrO1xuICAgIGlmIChvYmouc2VjID09PSA2MCkge1xuICAgICAgb2JqLm1pbiArPSAxO1xuICAgICAgb2JqLnNlYyA9IDA7XG4gICAgfVxuICAgIGlmIChvYmoubWluID09PSA2MCkge1xuICAgICAgb2JqLmhvdXIgKz0gMTtcbiAgICAgIG9iai5taW4gPSAwO1xuICAgIH1cbiAgICBpZiAob2JqLmhvdXIgPT09IDI0KSB7XG4gICAgICBvYmouaG91ciA9IG9iai5tc2luID0gb2JqLnNlYyA9IDA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLCAxMDAwLCB0aGlzKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICB9XG5cbiAgZ2V0IGdldFNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWMgKyB0aGlzLm1pbiAqIDYwICsgdGhpcy5ob3VyICogMzYwMDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBzSG91ciA9IHRoaXMuaG91ciA8IDEwID8gYDAke3RoaXMuaG91cn1gIDogdGhpcy5ob3VyO1xuICAgIGxldCB0aW1lU3RyaW5nID0gYCR7c0hvdXJ9OmA7XG4gICAgbGV0IHNNaW4gPSB0aGlzLm1pbiA8IDEwID8gYDAke3RoaXMubWlufWAgOiB0aGlzLm1pbjtcbiAgICB0aW1lU3RyaW5nICs9IGAke3NNaW59OmA7XG4gICAgbGV0IHNTZWMgPSB0aGlzLnNlYyA8IDEwID8gYDAke3RoaXMuc2VjfWAgOiB0aGlzLnNlYztcbiAgICB0aW1lU3RyaW5nICs9IGAke3NTZWN9YDtcbiAgICByZXR1cm4gdGltZVN0cmluZztcbiAgfVxufVxuXG5jbGFzcyBSZW5kZXJpbmdTdG9wd2F0Y2ggZXh0ZW5kcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcihlbElkKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVsSWQgPSBlbElkO1xuICB9XG5cbiAgdGljayhvYmopIHtcbiAgICBzdXBlci50aWNrKG9iaik7XG4gICAgbGV0IHRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5lbElkKTtcbiAgICB0aW1lRWwuaW5uZXJIVE1MID0gXCI8Yj5UaW1lOjwvYj4gXCIgKyBvYmoudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTdG9wd2F0Y2gsIFJlbmRlcmluZ1N0b3B3YXRjaCB9O1xuIiwiaW1wb3J0IHsgcm9sbENhcmQgfSBmcm9tIFwiLi4vZXZlbnRzL2NyYWRzLWV2ZW50cy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVN0YXRlLCBnZXRHYW1lUmVzdWx0cyB9IGZyb20gXCIuL2dhbWVTdGF0aXN0aWNzLmpzXCI7XG5pbXBvcnQgeyBzZWxEaWZMdmwsIHNlbGVjdFNhcmRTZXQgfSBmcm9tIFwiLi4vZXZlbnRzL3NldHRuaWdzLWV2ZW50c1wiO1xuaW1wb3J0IHsgbmV3R2FtZSwgb3BlblJhdGluZywgb3BlblNldHRpbmdzIH0gZnJvbSBcIi4uL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qc1wiO1xuaW1wb3J0IHtcbiAgZ2V0RmllbGRTaXplLFxuICBsZXZlbE9mRGlmZmljdWx0eSxcbiAgZ2V0Q2FyZFNldE5hbWUsXG59IGZyb20gXCIuL2dhbWVTZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5pbXBvcnQgeyBnYXRDYXJkc05hbWVzIH0gZnJvbSBcIi4vZ2V0RGF0YUZyb21EQi5qc1wiO1xuXG4vLyBjcmVhdGUgc2V0dGluZ3Mgc2VsZWN0b3JzIGFuZCBidXR0b25zXG5jb25zdCBjcmVhdGVTZWxlY3RvciA9IChpbkVsLCBzZWxlY3Rvckxpc3RuZXIsIHBhcmFtZXRyc0FycmF5LCBhY3RpdkVsKSA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2VsZWN0b3JcIik7XG5cbiAgbGV0IGluVGV4dCA9IFwiXCI7XG4gIHNlbGVjdG9yLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGVjdG9yTGlzdG5lcihzZWxlY3Rvci52YWx1ZSk7XG4gIH07XG5cbiAgcGFyYW1ldHJzQXJyYXkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoYWN0aXZFbCA9PT0gZWwpXG4gICAgICBpblRleHQgKz0gYDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIke2VsfVwiID4ke2VsfTwvb3B0aW9uPmA7XG4gICAgZWxzZSBpblRleHQgKz0gYDxvcHRpb24gdmFsdWU9XCIke2VsfVwiPiR7ZWx9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHNlbGVjdG9yLmlubmVySFRNTCA9IGluVGV4dDtcblxuICBpbkVsLmFwcGVuZChzZWxlY3Rvcik7XG59O1xuXG5jb25zdCBjcmVhdGVCYWNrQnRuID0gKGNvbnRleHQpID0+IHtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICAgIHJlbmRlckdhbWVNZW51KFwiZ2FtZS1tZW51XCIpO1xuICB9O1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBidXR0b24uaW5uZXJUZXh0ID0gXCJCYWNrXCI7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stdG8tbWFpbi1tZW51LWJ0blwiKTtcbiAgY29udGV4dC5hcHBlbmQoYnV0dG9uKTtcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGlucHV0IHBhcmFtZXRlciAtIGVsZW1ldCB3aGljaCBtdXN0IGJlIHJlbW92ZWRcbmNvbnN0IHJlbW92ZUZpZWxkID0gKGVsZW1laW50SWQpID0+IHtcbiAgY29uc3QgcmVtb3ZlZEFjdGl2aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVpbnRJZCk7XG4gIHJlbW92ZWRBY3Rpdml0eS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVTZXR0aW5ncyA9IGFzeW5jICgpID0+IHtcbiAgcmVtb3ZlRmllbGQoXCJnYW1lLW1lbnVcIik7XG4gIGNvbnN0IHdvcmtTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcbiAgbGV0IHNldHRpbmdzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHRpbmdzTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcbiAgd29ya1NwYWNlLmFwcGVuZChzZXR0aW5nc01lbnUpO1xuXG4gIGNvbnN0IGNhcmRTZXRzID0gYXdhaXQgZ2F0Q2FyZHNOYW1lcygpO1xuXG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNldHRpbmdzTWVudSxcbiAgICBzZWxEaWZMdmwsXG4gICAgW1wiRWFzeVwiLCBcIk1lZGl1bVwiLCBcIkhhcmRcIl0sXG4gICAgbGV2ZWxPZkRpZmZpY3VsdHlcbiAgKTtcbiAgY3JlYXRlU2VsZWN0b3Ioc2V0dGluZ3NNZW51LCBzZWxlY3RTYXJkU2V0LCBjYXJkU2V0cywgZ2V0Q2FyZFNldE5hbWUpO1xuICBjcmVhdGVCYWNrQnRuKHNldHRpbmdzTWVudSk7XG59O1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZ2FtZSBmaWVsZFxuY29uc3QgYWRkSW5mb0JhciA9ICgpID0+IHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xuICBjb25zdCBnYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLWZpZWxkXCIpO1xuICBnYW1lRmllbGQuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiaW5mb0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY291bnRDbGlja1wiPjxiPk51bWJlciBvZiBjbGlja3M6PC9iPiAwPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInN0b3B3YXRjaFwiPjxiPlRpbWU6PC9iPiAwMDowMDowMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgZG9jLmFwcGVuZChnYW1lRmllbGQpO1xufTtcblxuY29uc3QgYWRkQ2FyZHNPbkZpZWxkID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtZmllbGRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZFNpemU7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGlmIChnZXRGaWVsZFNpemUoKSA9PT0gMTIpIGRpdi5jbGFzc0xpc3QuYWRkKFwiZWFzeVwiKTtcbiAgICBpZiAoZ2V0RmllbGRTaXplKCkgPT09IDE4KSBkaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICBpZiAoZ2V0RmllbGRTaXplKCkgPT09IDI0KSBkaXYuY2xhc3NMaXN0LmFkZChcImhhcmRcIik7XG5cbiAgICAvL0FsdGVybmF0aXZlIHNvbHV0aW9uIC0gdXNlIEV2ZW50IGRlbGVnYXRpb24gb24gd29yay1zcGFjZVxuICAgIGRpdi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm9sbENhcmQoZGl2KTtcbiAgICB9O1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l9LWNhcmRgKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmcm9udC1jYXJkXCIgYWN0aXZhdGVkPVwiZmFsc2VcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFjay1jYXJkXCI+PC9kaXY+YDtcbiAgICBkb2MuYXBwZW5kKGRpdik7XG4gIH1cbn07XG5cbmNvbnN0IGdlbmV0YXRlR2FtZUZpZWxkID0gKGZpZWxkU2l6ZSkgPT4ge1xuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcbiAgYWRkSW5mb0JhcigpO1xuICBhZGRDYXJkc09uRmllbGQoZmllbGRTaXplKTtcbn07XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBHYW1lIG1lbnVcbmNvbnN0IHJlbmRlckdhbWVNZW51ID0gKG9sZEFjdGl2aXR5KSA9PiB7XG4gIHJlbW92ZUZpZWxkKGAke29sZEFjdGl2aXR5fWApO1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcbiAgZGl2LmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwibWVudS1idG5cIiBpZD1cIm5ldy1nYW1lLWJ0blwiPk5ldyBHYW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnRuXCIgaWQ9XCJyYXRpbmctYnRuXCI+UmF0aW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnRuXCIgaWQ9XCJvcHRpb25zLWJ0blwiPk9wdGlvbnM8L2J1dHRvbj5gO1xuICBkb2MuYXBwZW5kKGRpdik7XG4gIGFkZEdhbWVNZW51TGlzdG5lcigpO1xufTtcblxuY29uc3QgYWRkR2FtZU1lbnVMaXN0bmVyID0gKCkgPT4ge1xuICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZS1idG5cIik7XG4gIGNvbnN0IHJhdGluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nLWJ0blwiKTtcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9ucy1idG5cIik7XG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XG4gIHJhdGluZ0J0bi5vbmNsaWNrID0gb3BlblJhdGluZztcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3BlblNldHRpbmdzO1xufTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHJhdGluZ1xuY29uc3QgcmVuZGVyUmF0aW5nID0gKCkgPT4ge1xuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcbiAgY29uc3Qgd29ya1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1tZW51XCIpO1xuICB3b3JrU3BhY2UuYXBwZW5kKGRpdik7XG4gIGNvbnN0IHJhdGluZ01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtbWVudVwiKTtcblxuICBjb25zdCBnYW1lUmVzdWx0cyA9IGdldEdhbWVSZXN1bHRzKCk7XG4gIGdhbWVSZXN1bHRzLmZvckVhY2goKGVsZW1lbnQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgIT09IDApIHtcbiAgICAgIGNvbnN0IHBsYXllckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHBsYXllckluZm8uaW5uZXJUZXh0ID0gYCR7a2V5fSAke2VsZW1lbnR9YDtcbiAgICAgIHJhdGluZ01lbnUuYXBwZW5kKHBsYXllckluZm8pO1xuICAgIH1cbiAgfSk7XG4gIGNyZWF0ZUJhY2tCdG4ocmF0aW5nTWVudSk7XG59O1xuXG4vL1xuXG4vLyBNb2RhbCB3aW5kb3dcbmNvbnN0IGhpZGRlbkVuZEdhbWVXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbERpYWxvZ1wiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaWNrLW5hbWVcIikudmFsdWUgPSBcIlwiO1xuICBtb2RhbFdpbmRvdy5zdHlsZS50b3AgPSBcIi05OTlweFwiO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBiYWNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbFwiKTtcbiAgICBiYWNrTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIH0sIDUwMCk7XG59O1xuXG5jb25zdCBzaG93RW5kR2FtZVdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgYmFja01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxcIik7XG4gIGJhY2tNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbERpYWxvZ1wiKTtcbiAgbW9kYWxXaW5kb3cuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgbW9kYWxXaW5kb3cuY2hpbGROb2Rlc1szXS5pbm5lclRleHQgPSBgVHJhdmVsIHRpbWU6ICR7Z2FtZVN0YXRlLnN0b3B3YXRjaC50b1N0cmluZygpfWA7XG4gIG1vZGFsV2luZG93LmNoaWxkTm9kZXNbNV0uaW5uZXJUZXh0ID0gYE51bWJlciBvZiBDbGlja3M6ICR7Z2FtZVN0YXRlLmNvdW50Q2xpY2tzfWA7XG59O1xuLy9cblxuZXhwb3J0IHtcbiAgcmVuZGVyR2FtZVNldHRpbmdzLFxuICBnZW5ldGF0ZUdhbWVGaWVsZCxcbiAgc2hvd0VuZEdhbWVXaW5kb3csXG4gIHJlbmRlckdhbWVNZW51LFxuICBoaWRkZW5FbmRHYW1lV2luZG93LFxuICByZW5kZXJSYXRpbmcsXG59O1xuIiwiLyogZ2FtZSBzZXR0aW5ncyBhcmUgc3RvcmVkIGhlcmUgKi9cbi8qIFRoaXMgZmlsZSBtYXkgYmUgY29udmVydCB0byBqc29uIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzZXJ2ZXIgc2lkZSAqL1xuLy8gVE9ETzogcmV3cml0ZSB0aGlzIGNvZCB0byBPYmplY3QhISFcblxubGV0IGxldmVsT2ZEaWZmaWN1bHR5ID0gXCJFYXN5XCI7XG5sZXQgY2FyZFNldCA9IFwiQ2F0c1wiO1xuXG5jb25zdCBnZXRGaWVsZFNpemUgPSAoKSA9PiB7XG4gIHN3aXRjaCAobGV2ZWxPZkRpZmZpY3VsdHkpIHtcbiAgICBjYXNlIFwiRWFzeVwiOlxuICAgICAgcmV0dXJuIDEyO1xuICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgIHJldHVybiAxODtcbiAgICBjYXNlIFwiSGFyZFwiOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMTI7XG4gIH1cbn07XG5cbmNvbnN0IGdldENhcmRTZXROYW1lID0gKCkgPT4ge1xuICByZXR1cm4gY2FyZFNldDtcbn07XG5cbmNvbnN0IHNldENhcmRTZXQgPSAodmFsdWUpID0+IHtcbiAgY2FyZFNldCA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2V0TGV2ZWwgPSAodmFsdWUpID0+IHtcbiAgbGV2ZWxPZkRpZmZpY3VsdHkgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENhcmRTZXROYW1lLFxuICBnZXRGaWVsZFNpemUsXG4gIHNldExldmVsLFxuICBzZXRDYXJkU2V0LFxuICBsZXZlbE9mRGlmZmljdWx0eSxcbn07XG4iLCJpbXBvcnQgeyBSZW5kZXJpbmdTdG9wd2F0Y2ggfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zdG9wd2F0Y2guanNcIjtcbmltcG9ydCB7IGdldEZpZWxkU2l6ZSB9IGZyb20gXCIuL2dhbWVTZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBnYW1lU3RhdGUgPSB7XG4gIHRvdGFsQ291bnRVcENhcmRzOiAwLFxuICBjb3VudENsaWNrczogMCxcbiAgc3RvcHdhdGNoOiBuZXcgUmVuZGVyaW5nU3RvcHdhdGNoKFwic3RvcHdhdGNoXCIpLFxuICByZXNldCgpIHtcbiAgICB0aGlzLnRvdGFsQ291bnRVcENhcmRzID0gMDtcbiAgICB0aGlzLmNvdW50Q2xpY2tzID0gMDtcbiAgICB0aGlzLnN0b3B3YXRjaC5yZXNldCgpO1xuICB9LFxufTtcblxuY29uc3QgTUFYX1RJTUUgPSA2MDA7XG5jb25zdCBzYXZlR2FtZVJlc3VsdCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmljay1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBjb3VudENsaWNrcyA9IGdhbWVTdGF0ZS5jb3VudENsaWNrcztcbiAgY29uc3QgdHJldmVsVGltZSA9IGdhbWVTdGF0ZS5zdG9wd2F0Y2guZ2V0U2Vjb25kO1xuXG4gIGxldCBwbGF5ZXJQb2ludHM7XG4gIGlmICh0cmV2ZWxUaW1lIDwgTUFYX1RJTUUpIHtcbiAgICBwbGF5ZXJQb2ludHMgPSBNYXRoLnRydW5jKFxuICAgICAgKChNQVhfVElNRSAtIHRyZXZlbFRpbWUpICogY291bnRDbGlja3MpIC8gZ2V0RmllbGRTaXplKClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHBsYXllclBvaW50cyA9IDEwMDtcbiAgfVxuICBjb25zb2xlLmxvZyhwbGF5ZXJQb2ludHMpO1xuXG4gIHRyeSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBsYXllck5hbWUpID09PSBudWxsICYmIHBsYXllck5hbWUgIT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSB0byBzdG9yaWdlXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGxheWVyTmFtZSwgcGxheWVyUG9pbnRzLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRDb3VudFBvaW50cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBsYXllck5hbWUpO1xuICAgICAgY29uc29sZS5sb2cob2xkQ291bnRQb2ludHMpO1xuICAgICAgaWYgKHBsYXllclBvaW50cyA+IHBhcnNlSW50KG9sZENvdW50UG9pbnRzKSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGxheWVyTmFtZSwgcGxheWVyUG9pbnRzLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlID09IFFVT1RBX0VYQ0VFREVEX0VSUikge1xuICAgICAgY29uc29sZS5sb2coXCLQn9GA0LXQstGL0YjQtdC9INC70LjQvNC40YJcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRHYW1lUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZVJhdGluZyA9IFtsb2NhbFN0b3JhZ2UubGVuZ3RoXTtcbiAgZm9yIChsZXQga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09IDApIHtcbiAgICAgIGdhbWVSYXRpbmcucHVzaChba2V5LCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnYW1lUmF0aW5nO1xufTtcblxuZXhwb3J0IHsgZ2FtZVN0YXRlLCBzYXZlR2FtZVJlc3VsdCwgZ2V0R2FtZVJlc3VsdHMgfTtcbiIsImltcG9ydCB7IGdldEpzb25Gcm9tVXJsIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvcmVxdWVzdHMuanNcIjtcbi8vIFRPRE8gR0FNRV9EQVRBX1VSTCDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LIg0L3QtdGB0LrQvtC70YzQvdC40LrQuNGFINC80LXRgdGC0LDRhSwg0LXRgdGC0Ywg0YHQvNGL0YHQuyDRgdC+0LfQtNCw0YLRjCDRhNCw0LnQuyDRgVxuLy8g0L/QtdGA0LXQvNC10L3QvdGL0LzQuCBcItGB0YDQtdC00Ysg0L7QutGA0YPQttC10L3QuNGPXCJcbmNvbnN0IEdBTUVfREFUQV9VUkwgPSBcIi9kaXN0L2RhdGEvZ2FtZURhdGEuanNvblwiO1xuXG5jb25zdCBnYXRDYXJkc05hbWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnYW1lRGF0YVJlc3BvbnNlID0gYXdhaXQgZ2V0SnNvbkZyb21VcmwoR0FNRV9EQVRBX1VSTCk7XG4gIGxldCBjYXJkU2V0cyA9IFtdO1xuICBmb3IgKGxldCBrZXkgaW4gZ2FtZURhdGFSZXNwb25zZSkge1xuICAgIGNhcmRTZXRzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gY2FyZFNldHM7XG59O1xuXG5leHBvcnQgeyBnYXRDYXJkc05hbWVzIH07XG4iLCJpbXBvcnQgeyBnZXRDYXJkU2V0TmFtZSwgZ2V0RmllbGRTaXplIH0gZnJvbSBcIi4vZ2FtZVNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvbnVtZXJpYy5qc1wiO1xuaW1wb3J0IHsgZ2V0SnNvbkZyb21VcmwgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9yZXF1ZXN0cy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVN0YXRlIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXRhdGVHYW1lRmllbGQgfSBmcm9tIFwiLi9nYW1lTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zb3VuZHMuanNcIjtcblxuY29uc3QgR0FNRV9EQVRBX1VSTCA9IFwiL2Rpc3QvZGF0YS9nYW1lRGF0YS5qc29uXCI7XG5cbi8vIEl0J3MgZnVuY3Rpb25zIG5lZWQgZm9yIGZvcm1lZCBnYW1lIG1hcFxuLy8gdGhpcyBmdW5jdGlvbiBnZXQgSnNvbiBmcm9tIHNlcnZlciBhbmQgZm9ybWVkIG1hcCBhbnN3ZXIgd2l0aCBjYXJkcyBsaW5rc1xuY29uc3QgZ2V0Q2FyZHMgPSBhc3luYyAoZmllbGRTaXplLCBjYXJkU2V0TmFtZSkgPT4ge1xuICBjb25zdCBnYW1lRGF0YVJlc3BvbnNlID0gYXdhaXQgZ2V0SnNvbkZyb21VcmwoR0FNRV9EQVRBX1VSTCk7XG4gIGNvbnN0IHBpY3R1cmVTdG9yZSA9IG5ldyBNYXAoKTtcbiAgLy8g0JTQsNC90L3Ri9C5IHNldCDQvdGD0LbQtdC9INC00LvRjyDQvdC10LTQvtC/0YPRgdC60LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0L/QvtCy0YLQvtGA0Y/RjtGJ0LjRhdGB0Y8g0LbQuyDQsiBtYXBcbiAgbGV0IGhhc0VsID0gbmV3IFNldCgpO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAocGljdHVyZVN0b3JlLnNpemUgPCBmaWVsZFNpemUgLyAyKSB7XG4gICAgY29uc3QgaWQgPSByYW5kb21JbnRlZ2VyKDAsIDE0KTtcbiAgICBjb25zdCBsaW5rID0gZ2FtZURhdGFSZXNwb25zZVtjYXJkU2V0TmFtZV1baWRdW1wibGlua1wiXTtcbiAgICBpZiAoIWhhc0VsLmhhcyhpZCkpIHtcbiAgICAgIGhhc0VsLmFkZChpZCk7XG4gICAgICBwaWN0dXJlU3RvcmUuc2V0KGluZGV4LCBsaW5rKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBpY3R1cmVTdG9yZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZFBvc2l0aW9uID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBsZXQgY2FyZFNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IHBvc0FycmF5ID0gW107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGNhcmRTZXQuc2l6ZSA8IGZpZWxkU2l6ZSkge1xuICAgIGxldCBjb3VudFVuaXFFbCA9IDA7XG4gICAgLy8gR2VuZXJhdGUgdHdvIHVuaXEgcG9zIGZvciBlcXVhbCBjYXJkc1xuICAgIHdoaWxlIChjb3VudFVuaXFFbCA8IDIpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHJhbmRvbUludGVnZXIoMCwgZmllbGRTaXplIC0gMSk7XG4gICAgICBpZiAoIWNhcmRTZXQuaGFzKHBvcykpIHtcbiAgICAgICAgY2FyZFNldC5hZGQocG9zKTtcbiAgICAgICAgcG9zQXJyYXlbcG9zXSA9IGluZGV4O1xuICAgICAgICBjb3VudFVuaXFFbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpbmRleCsrO1xuICB9XG4gIGNvbnNvbGUubG9nKHBvc0FycmF5KTtcbiAgcmV0dXJuIHBvc0FycmF5O1xufTtcblxuY29uc3QgcmVuZGVyQmFja1NpZGUgPSAocG9zQXJyYXksIGNhcmRzTWFwKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNhcmRzTWFwKTtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWZpZWxkXCIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBub2RlIG9mIGRvYy5jaGlsZHJlbikge1xuICAgIGlmIChub2RlLnRhZ05hbWUgIT09IFwiU1BBTlwiKSB7XG4gICAgICBsZXQgbnVtT2ZDYXJkID0gcG9zQXJyYXlbaW5kZXhdO1xuICAgICAgbGV0IGxpbmsgPSBjYXJkc01hcC5nZXQobnVtT2ZDYXJkKTtcbiAgICAgIG5vZGUuY2hpbGRyZW5bMV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2xpbmt9KWA7XG4gICAgICBub2RlLmNoaWxkcmVuWzFdLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlXCI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlR2FtZU1hdHJpeCA9IGFzeW5jIChmaWVsZFNpemUsIGNhcmRTZXROYW1lKSA9PiB7XG4gIGNvbnN0IHBpY3R1cmVTdG9yZSA9IGF3YWl0IGdldENhcmRzKGZpZWxkU2l6ZSwgY2FyZFNldE5hbWUpO1xuICBjb25zdCBwb3NBcnJheSA9IGdlbmVyYXRlQ2FyZFBvc2l0aW9uKGZpZWxkU2l6ZSwgcGljdHVyZVN0b3JlKTtcbiAgcmVuZGVyQmFja1NpZGUocG9zQXJyYXksIHBpY3R1cmVTdG9yZSk7XG59O1xuLy9cblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2NhcmRzTGF5b3V0Lm1wM1wiKTtcbiAgY29uc3QgZmllbGRTaXplID0gZ2V0RmllbGRTaXplKCk7XG4gIGNvbnN0IGNhcmRTZXROYW1lID0gZ2V0Q2FyZFNldE5hbWUoKTtcbiAgZ2VuZXRhdGVHYW1lRmllbGQoZmllbGRTaXplKTtcbiAgY3JlYXRlR2FtZU1hdHJpeChmaWVsZFNpemUsIGNhcmRTZXROYW1lKTtcbiAgZ2FtZVN0YXRlLnN0b3B3YXRjaC5zdGFydCgpO1xufTtcblxuZXhwb3J0IHsgc3RhcnRHYW1lIH07XG4iLCJpbXBvcnQge1xuICByZW5kZXJHYW1lU2V0dGluZ3MsXG4gIHJlbmRlckdhbWVNZW51LFxuICBoaWRkZW5FbmRHYW1lV2luZG93LFxuICByZW5kZXJSYXRpbmcsXG59IGZyb20gXCIuLi9lbmdpbmUvZ2FtZUxheW91dC5qc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4uL2VuZ2luZS9uZXdHYW1lLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUsIHNhdmVHYW1lUmVzdWx0IH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5cbi8vIFRoaXMgYnRuIHJlbW92ZWQgZ2FtZS1tZW51IGFuZCB1cGxvYWRlZCBnYW1lLWZpZWxkIHdpY2ggY2FyZHNcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICBzdGFydEdhbWUoKTtcbn07XG5cbmNvbnN0IG9wZW5TZXR0aW5ncyA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHJlbmRlckdhbWVTZXR0aW5ncygpO1xufTtcblxuY29uc3Qgb3BlblJhdGluZyA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHJlbmRlclJhdGluZygpO1xufTtcblxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHNhdmVHYW1lUmVzdWx0KCk7XG4gIGdhbWVTdGF0ZS5yZXNldCgpO1xuICBoaWRkZW5FbmRHYW1lV2luZG93KCk7XG4gIHNldFRpbWVvdXQocmVuZGVyR2FtZU1lbnUsIDMwMCwgXCJnYW1lLWZpZWxkXCIpO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBuZXdHYW1lLCBvcGVuUmF0aW5nLCBvcGVuU2V0dGluZ3MsIGVuZEdhbWUgfTtcbiIsImltcG9ydCB7IGdldEZpZWxkU2l6ZSB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZVNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzXCI7XG5pbXBvcnQgeyBzaG93RW5kR2FtZVdpbmRvdyB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZUxheW91dC5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5cbmNvbnN0IGNsaWNrQ291bnRlciA9IChjb3VudCkgPT4ge1xuICBjb25zdCBjbGlja0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRDbGlja1wiKTtcbiAgY2xpY2tCYXIuaW5uZXJIVE1MID0gYDxiPk51bWJlciBvZiBjbGlja3M6PC9iPiAke2NvdW50fWA7XG59O1xuXG5jb25zdCBjaGVja0NhcmRzTWF0Y2hlcyA9ICgpID0+IHtcbiAgY29uc3QgaW52ZXJ0ZWTQoWFyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbYWN0aXZhdGVkPVwidHJ1ZVwiXWApO1xuICAvLyBJbiB0aGlzIHZlcnNpb24gY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIHVybCB0byBiYWNrcm91bmQtaW1hZ2VcbiAgLy8gVGhpcyBzb2x1dGlvbiBjYW4gYmUgcmVwbGFjZWQgYnkgY29tcGFyaXNvbiBieSBpZFxuICBjb25zdCBjYXJkMUJhY2sgPSBpbnZlcnRlZNChYXJkc1swXS5sYXN0Q2hpbGQ7XG4gIGNvbnN0IGNhcmQyQmFjayA9IGludmVydGVk0KFhcmRzWzFdLmxhc3RDaGlsZDtcbiAgaWYgKGNhcmQxQmFjay5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT09IGNhcmQyQmFjay5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICBpbnZlcnRlZNChYXJkc1swXS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBpbnZlcnRlZNChYXJkc1sxXS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBnYW1lU3RhdGUudG90YWxDb3VudFVwQ2FyZHMgKz0gMjtcbiAgICBpbnZlcnRlZNChYXJkc1swXS5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuICAgIGludmVydGVk0KFhcmRzWzFdLnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG4gICAgc2V0VGltZW91dChjaGVja0VuZEdhbWUsIDEwMDApO1xuICB9IGVsc2Uge1xuICAgIHJvbGxEaXNhYmxlZCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW52ZXJ0ZWTQoWFyZHNbMF0uc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIGZhbHNlKTtcbiAgICAgIGludmVydGVk0KFhcmRzWzFdLnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG4gICAgfSwgMTUwMCk7XG4gICAgc2V0VGltZW91dChyb2xsRW5hYmxlZCwgMjAwMCk7XG4gIH1cbn07XG5cbmNvbnN0IHJvbGxEaXNhYmxlZCA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLm9uY2xpY2sgPSBudWxsO1xuICB9KTtcbn07XG5cbmNvbnN0IHJvbGxFbmFibGVkID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvbGxDYXJkKGl0ZW0pO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgY2hlY2tFbmRHYW1lID0gKCkgPT4ge1xuICBpZiAoZ2V0RmllbGRTaXplKCkgPT0gZ2FtZVN0YXRlLnRvdGFsQ291bnRVcENhcmRzKSB7XG4gICAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9lbmRHYW1lLm1wM1wiKTtcbiAgICBnYW1lU3RhdGUuc3RvcHdhdGNoLnN0b3AoKTtcbiAgICBzaG93RW5kR2FtZVdpbmRvdygpO1xuICB9XG59O1xuXG5sZXQgY291bnRVcENhcmRzID0gMDtcbmNvbnN0IHJvbGxDYXJkID0gKGRpdikgPT4ge1xuICAvLyB0aGlzIGNvZGUgd29yayBvbmx5IHdpdGggbm9uIHNlbGVjdGVkIGFuZCBub3QgYWN0aXZhdGVkIGZ1bmN0aW9uc1xuICBpZiAoXG4gICAgIWRpdi5oYXNBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSAmJlxuICAgIGRpdi5nZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIikgPT09IFwiZmFsc2VcIlxuICApIHtcbiAgICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL3VwQ2FyZC5tcDNcIik7XG4gICAgZ2FtZVN0YXRlLmNvdW50Q2xpY2tzICs9IDE7XG4gICAgY2xpY2tDb3VudGVyKGdhbWVTdGF0ZS5jb3VudENsaWNrcyk7XG4gICAgY29uc29sZS5sb2coZ2FtZVN0YXRlKTtcblxuICAgIGlmIChjb3VudFVwQ2FyZHMgPCAyKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIHRydWUpO1xuICAgICAgY291bnRVcENhcmRzKys7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50VXBDYXJkcyA9PSAyKSB7XG4gICAgICBjb3VudFVwQ2FyZHMgPSAwO1xuICAgICAgY2hlY2tDYXJkc01hdGNoZXMoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJvbGxDYXJkIH07XG4iLCJpbXBvcnQgeyBzZXRMZXZlbCwgc2V0Q2FyZFNldCB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZVNldHRpbmdzLmpzXCI7XG5cbmNvbnN0IHNlbERpZkx2bCA9ICh2YWx1ZSkgPT4ge1xuICBzZXRMZXZlbCh2YWx1ZSk7XG59O1xuXG5jb25zdCBzZWxlY3RTYXJkU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHNldENhcmRTZXQodmFsdWUpO1xufTtcblxuZXhwb3J0IHsgc2VsRGlmTHZsLCBzZWxlY3RTYXJkU2V0IH07XG4iLCJpbXBvcnQge1xuICBuZXdHYW1lLFxuICBvcGVuUmF0aW5nLFxuICBvcGVuU2V0dGluZ3MsXG4gIGVuZEdhbWUsXG59IGZyb20gXCIuL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qc1wiO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXCI7XG5pbXBvcnQgeyBzaG93RW5kR2FtZVdpbmRvdyB9IGZyb20gXCIuL2VuZ2luZS9nYW1lTGF5b3V0LmpzXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1nYW1lLWJ0blwiKTtcbiAgY29uc3QgcmF0aW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpbmctYnRuXCIpO1xuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zLWJ0blwiKTtcbiAgY29uc3QgZW5kR2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxEaWFsb2dcIik7XG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XG4gIHJhdGluZ0J0bi5vbmNsaWNrID0gb3BlblJhdGluZztcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3BlblNldHRpbmdzO1xuICBlbmRHYW1lQnRuLm9uc3VibWl0ID0gZW5kR2FtZTtcbiAgLy9zaG93RW5kR2FtZVdpbmRvdygpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=