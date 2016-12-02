(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.domEventStopped = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = domEventStopped;
  exports.returnCancels = returnCancels;
  function domEventStopped(event, callback) {
    var returnValue = void 0;
    if (callback) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      returnValue = callback.apply(undefined, [event].concat(args));
    }
    return returnCancels(returnValue) || event.defaultPrevented;
  }

  function returnCancels(returnValue) {
    return returnValue !== undefined && !returnValue;
  }
});
