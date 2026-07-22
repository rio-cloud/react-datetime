var Ne = Object.defineProperty;
var Ye = (s, n, e) => n in s ? Ne(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[n] = e;
var x = (s, n, e) => Ye(s, typeof n != "symbol" ? n + "" : n, e);
import { jsxs as W, jsx as d } from "react/jsx-runtime";
import H from "moment";
import q from "react";
function je(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ee = { exports: {} }, te = { exports: {} }, S = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function $e() {
  if (Te) return S;
  Te = 1;
  var s = typeof Symbol == "function" && Symbol.for, n = s ? Symbol.for("react.element") : 60103, e = s ? Symbol.for("react.portal") : 60106, t = s ? Symbol.for("react.fragment") : 60107, r = s ? Symbol.for("react.strict_mode") : 60108, i = s ? Symbol.for("react.profiler") : 60114, u = s ? Symbol.for("react.provider") : 60109, p = s ? Symbol.for("react.context") : 60110, w = s ? Symbol.for("react.async_mode") : 60111, O = s ? Symbol.for("react.concurrent_mode") : 60111, D = s ? Symbol.for("react.forward_ref") : 60112, P = s ? Symbol.for("react.suspense") : 60113, M = s ? Symbol.for("react.suspense_list") : 60120, R = s ? Symbol.for("react.memo") : 60115, N = s ? Symbol.for("react.lazy") : 60116, I = s ? Symbol.for("react.block") : 60121, k = s ? Symbol.for("react.fundamental") : 60117, Y = s ? Symbol.for("react.responder") : 60118, J = s ? Symbol.for("react.scope") : 60119;
  function A(c) {
    if (typeof c == "object" && c !== null) {
      var B = c.$$typeof;
      switch (B) {
        case n:
          switch (c = c.type, c) {
            case w:
            case O:
            case t:
            case i:
            case r:
            case P:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case p:
                case D:
                case N:
                case R:
                case u:
                  return c;
                default:
                  return B;
              }
          }
        case e:
          return B;
      }
    }
  }
  function V(c) {
    return A(c) === O;
  }
  return S.AsyncMode = w, S.ConcurrentMode = O, S.ContextConsumer = p, S.ContextProvider = u, S.Element = n, S.ForwardRef = D, S.Fragment = t, S.Lazy = N, S.Memo = R, S.Portal = e, S.Profiler = i, S.StrictMode = r, S.Suspense = P, S.isAsyncMode = function(c) {
    return V(c) || A(c) === w;
  }, S.isConcurrentMode = V, S.isContextConsumer = function(c) {
    return A(c) === p;
  }, S.isContextProvider = function(c) {
    return A(c) === u;
  }, S.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === n;
  }, S.isForwardRef = function(c) {
    return A(c) === D;
  }, S.isFragment = function(c) {
    return A(c) === t;
  }, S.isLazy = function(c) {
    return A(c) === N;
  }, S.isMemo = function(c) {
    return A(c) === R;
  }, S.isPortal = function(c) {
    return A(c) === e;
  }, S.isProfiler = function(c) {
    return A(c) === i;
  }, S.isStrictMode = function(c) {
    return A(c) === r;
  }, S.isSuspense = function(c) {
    return A(c) === P;
  }, S.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === t || c === O || c === i || c === r || c === P || c === M || typeof c == "object" && c !== null && (c.$$typeof === N || c.$$typeof === R || c.$$typeof === u || c.$$typeof === p || c.$$typeof === D || c.$$typeof === k || c.$$typeof === Y || c.$$typeof === J || c.$$typeof === I);
  }, S.typeOf = A, S;
}
var E = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Le() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var s = typeof Symbol == "function" && Symbol.for, n = s ? Symbol.for("react.element") : 60103, e = s ? Symbol.for("react.portal") : 60106, t = s ? Symbol.for("react.fragment") : 60107, r = s ? Symbol.for("react.strict_mode") : 60108, i = s ? Symbol.for("react.profiler") : 60114, u = s ? Symbol.for("react.provider") : 60109, p = s ? Symbol.for("react.context") : 60110, w = s ? Symbol.for("react.async_mode") : 60111, O = s ? Symbol.for("react.concurrent_mode") : 60111, D = s ? Symbol.for("react.forward_ref") : 60112, P = s ? Symbol.for("react.suspense") : 60113, M = s ? Symbol.for("react.suspense_list") : 60120, R = s ? Symbol.for("react.memo") : 60115, N = s ? Symbol.for("react.lazy") : 60116, I = s ? Symbol.for("react.block") : 60121, k = s ? Symbol.for("react.fundamental") : 60117, Y = s ? Symbol.for("react.responder") : 60118, J = s ? Symbol.for("react.scope") : 60119;
    function A(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === t || o === O || o === i || o === r || o === P || o === M || typeof o == "object" && o !== null && (o.$$typeof === N || o.$$typeof === R || o.$$typeof === u || o.$$typeof === p || o.$$typeof === D || o.$$typeof === k || o.$$typeof === Y || o.$$typeof === J || o.$$typeof === I);
    }
    function V(o) {
      if (typeof o == "object" && o !== null) {
        var L = o.$$typeof;
        switch (L) {
          case n:
            var Q = o.type;
            switch (Q) {
              case w:
              case O:
              case t:
              case i:
              case r:
              case P:
                return Q;
              default:
                var be = Q && Q.$$typeof;
                switch (be) {
                  case p:
                  case D:
                  case N:
                  case R:
                  case u:
                    return be;
                  default:
                    return L;
                }
            }
          case e:
            return L;
        }
      }
    }
    var c = w, B = O, re = p, ne = u, ie = n, se = D, X = t, ae = N, oe = R, Z = e, ce = i, $ = r, z = P, G = !1;
    function le(o) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(o) || V(o) === w;
    }
    function a(o) {
      return V(o) === O;
    }
    function l(o) {
      return V(o) === p;
    }
    function g(o) {
      return V(o) === u;
    }
    function v(o) {
      return typeof o == "object" && o !== null && o.$$typeof === n;
    }
    function f(o) {
      return V(o) === D;
    }
    function b(o) {
      return V(o) === t;
    }
    function h(o) {
      return V(o) === N;
    }
    function y(o) {
      return V(o) === R;
    }
    function T(o) {
      return V(o) === e;
    }
    function _(o) {
      return V(o) === i;
    }
    function C(o) {
      return V(o) === r;
    }
    function F(o) {
      return V(o) === P;
    }
    E.AsyncMode = c, E.ConcurrentMode = B, E.ContextConsumer = re, E.ContextProvider = ne, E.Element = ie, E.ForwardRef = se, E.Fragment = X, E.Lazy = ae, E.Memo = oe, E.Portal = Z, E.Profiler = ce, E.StrictMode = $, E.Suspense = z, E.isAsyncMode = le, E.isConcurrentMode = a, E.isContextConsumer = l, E.isContextProvider = g, E.isElement = v, E.isForwardRef = f, E.isFragment = b, E.isLazy = h, E.isMemo = y, E.isPortal = T, E.isProfiler = _, E.isStrictMode = C, E.isSuspense = F, E.isValidElementType = A, E.typeOf = V;
  })()), E;
}
var Se;
function Ve() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? te.exports = $e() : te.exports = Le()), te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ue, Ee;
function We() {
  if (Ee) return ue;
  Ee = 1;
  var s = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function t(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var u = {}, p = 0; p < 10; p++)
        u["_" + String.fromCharCode(p)] = p;
      var w = Object.getOwnPropertyNames(u).map(function(D) {
        return u[D];
      });
      if (w.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        O[D] = D;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ue = r() ? Object.assign : function(i, u) {
    for (var p, w = t(i), O, D = 1; D < arguments.length; D++) {
      p = Object(arguments[D]);
      for (var P in p)
        n.call(p, P) && (w[P] = p[P]);
      if (s) {
        O = s(p);
        for (var M = 0; M < O.length; M++)
          e.call(p, O[M]) && (w[O[M]] = p[O[M]]);
      }
    }
    return w;
  }, ue;
}
var de, Oe;
function we() {
  if (Oe) return de;
  Oe = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return de = s, de;
}
var pe, _e;
function Ae() {
  return _e || (_e = 1, pe = Function.call.bind(Object.prototype.hasOwnProperty)), pe;
}
var fe, Pe;
function qe() {
  if (Pe) return fe;
  Pe = 1;
  var s = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ we(), e = {}, t = /* @__PURE__ */ Ae();
    s = function(i) {
      var u = "Warning: " + i;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function r(i, u, p, w, O) {
    if (process.env.NODE_ENV !== "production") {
      for (var D in i)
        if (t(i, D)) {
          var P;
          try {
            if (typeof i[D] != "function") {
              var M = Error(
                (w || "React class") + ": " + p + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw M.name = "Invariant Violation", M;
            }
            P = i[D](u, D, w, p, null, n);
          } catch (N) {
            P = N;
          }
          if (P && !(P instanceof Error) && s(
            (w || "React class") + ": type specification of " + p + " `" + D + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in e)) {
            e[P.message] = !0;
            var R = O ? O() : "";
            s(
              "Failed " + p + " type: " + P.message + (R ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, fe = r, fe;
}
var he, xe;
function Ue() {
  if (xe) return he;
  xe = 1;
  var s = Ve(), n = We(), e = /* @__PURE__ */ we(), t = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ qe(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(p) {
    var w = "Warning: " + p;
    typeof console < "u" && console.error(w);
    try {
      throw new Error(w);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return he = function(p, w) {
    var O = typeof Symbol == "function" && Symbol.iterator, D = "@@iterator";
    function P(a) {
      var l = a && (O && a[O] || a[D]);
      if (typeof l == "function")
        return l;
    }
    var M = "<<anonymous>>", R = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: J(),
      arrayOf: A,
      element: V(),
      elementType: c(),
      instanceOf: B,
      node: se(),
      objectOf: ne,
      oneOf: re,
      oneOfType: ie,
      shape: ae,
      exact: oe
    };
    function N(a, l) {
      return a === l ? a !== 0 || 1 / a === 1 / l : a !== a && l !== l;
    }
    function I(a, l) {
      this.message = a, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    I.prototype = Error.prototype;
    function k(a) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, g = 0;
      function v(b, h, y, T, _, C, F) {
        if (T = T || M, C = C || y, F !== e) {
          if (w) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = T + ":" + y;
            !l[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            g < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[L] = !0, g++);
          }
        }
        return h[y] == null ? b ? h[y] === null ? new I("The " + _ + " `" + C + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new I("The " + _ + " `" + C + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : a(h, y, T, _, C);
      }
      var f = v.bind(null, !1);
      return f.isRequired = v.bind(null, !0), f;
    }
    function Y(a) {
      function l(g, v, f, b, h, y) {
        var T = g[v], _ = $(T);
        if (_ !== a) {
          var C = z(T);
          return new I(
            "Invalid " + b + " `" + h + "` of type " + ("`" + C + "` supplied to `" + f + "`, expected ") + ("`" + a + "`."),
            { expectedType: a }
          );
        }
        return null;
      }
      return k(l);
    }
    function J() {
      return k(u);
    }
    function A(a) {
      function l(g, v, f, b, h) {
        if (typeof a != "function")
          return new I("Property `" + h + "` of component `" + f + "` has invalid PropType notation inside arrayOf.");
        var y = g[v];
        if (!Array.isArray(y)) {
          var T = $(y);
          return new I("Invalid " + b + " `" + h + "` of type " + ("`" + T + "` supplied to `" + f + "`, expected an array."));
        }
        for (var _ = 0; _ < y.length; _++) {
          var C = a(y, _, f, b, h + "[" + _ + "]", e);
          if (C instanceof Error)
            return C;
        }
        return null;
      }
      return k(l);
    }
    function V() {
      function a(l, g, v, f, b) {
        var h = l[g];
        if (!p(h)) {
          var y = $(h);
          return new I("Invalid " + f + " `" + b + "` of type " + ("`" + y + "` supplied to `" + v + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(a);
    }
    function c() {
      function a(l, g, v, f, b) {
        var h = l[g];
        if (!s.isValidElementType(h)) {
          var y = $(h);
          return new I("Invalid " + f + " `" + b + "` of type " + ("`" + y + "` supplied to `" + v + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(a);
    }
    function B(a) {
      function l(g, v, f, b, h) {
        if (!(g[v] instanceof a)) {
          var y = a.name || M, T = le(g[v]);
          return new I("Invalid " + b + " `" + h + "` of type " + ("`" + T + "` supplied to `" + f + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return k(l);
    }
    function re(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), u;
      function l(g, v, f, b, h) {
        for (var y = g[v], T = 0; T < a.length; T++)
          if (N(y, a[T]))
            return null;
        var _ = JSON.stringify(a, function(F, o) {
          var L = z(o);
          return L === "symbol" ? String(o) : o;
        });
        return new I("Invalid " + b + " `" + h + "` of value `" + String(y) + "` " + ("supplied to `" + f + "`, expected one of " + _ + "."));
      }
      return k(l);
    }
    function ne(a) {
      function l(g, v, f, b, h) {
        if (typeof a != "function")
          return new I("Property `" + h + "` of component `" + f + "` has invalid PropType notation inside objectOf.");
        var y = g[v], T = $(y);
        if (T !== "object")
          return new I("Invalid " + b + " `" + h + "` of type " + ("`" + T + "` supplied to `" + f + "`, expected an object."));
        for (var _ in y)
          if (t(y, _)) {
            var C = a(y, _, f, b, h + "." + _, e);
            if (C instanceof Error)
              return C;
          }
        return null;
      }
      return k(l);
    }
    function ie(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var l = 0; l < a.length; l++) {
        var g = a[l];
        if (typeof g != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(g) + " at index " + l + "."
          ), u;
      }
      function v(f, b, h, y, T) {
        for (var _ = [], C = 0; C < a.length; C++) {
          var F = a[C], o = F(f, b, h, y, T, e);
          if (o == null)
            return null;
          o.data && t(o.data, "expectedType") && _.push(o.data.expectedType);
        }
        var L = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new I("Invalid " + y + " `" + T + "` supplied to " + ("`" + h + "`" + L + "."));
      }
      return k(v);
    }
    function se() {
      function a(l, g, v, f, b) {
        return Z(l[g]) ? null : new I("Invalid " + f + " `" + b + "` supplied to " + ("`" + v + "`, expected a ReactNode."));
      }
      return k(a);
    }
    function X(a, l, g, v, f) {
      return new I(
        (a || "React class") + ": " + l + " type `" + g + "." + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + f + "`."
      );
    }
    function ae(a) {
      function l(g, v, f, b, h) {
        var y = g[v], T = $(y);
        if (T !== "object")
          return new I("Invalid " + b + " `" + h + "` of type `" + T + "` " + ("supplied to `" + f + "`, expected `object`."));
        for (var _ in a) {
          var C = a[_];
          if (typeof C != "function")
            return X(f, b, h, _, z(C));
          var F = C(y, _, f, b, h + "." + _, e);
          if (F)
            return F;
        }
        return null;
      }
      return k(l);
    }
    function oe(a) {
      function l(g, v, f, b, h) {
        var y = g[v], T = $(y);
        if (T !== "object")
          return new I("Invalid " + b + " `" + h + "` of type `" + T + "` " + ("supplied to `" + f + "`, expected `object`."));
        var _ = n({}, g[v], a);
        for (var C in _) {
          var F = a[C];
          if (t(a, C) && typeof F != "function")
            return X(f, b, h, C, z(F));
          if (!F)
            return new I(
              "Invalid " + b + " `" + h + "` key `" + C + "` supplied to `" + f + "`.\nBad object: " + JSON.stringify(g[v], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var o = F(y, C, f, b, h + "." + C, e);
          if (o)
            return o;
        }
        return null;
      }
      return k(l);
    }
    function Z(a) {
      switch (typeof a) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !a;
        case "object":
          if (Array.isArray(a))
            return a.every(Z);
          if (a === null || p(a))
            return !0;
          var l = P(a);
          if (l) {
            var g = l.call(a), v;
            if (l !== a.entries) {
              for (; !(v = g.next()).done; )
                if (!Z(v.value))
                  return !1;
            } else
              for (; !(v = g.next()).done; ) {
                var f = v.value;
                if (f && !Z(f[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(a, l) {
      return a === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function $(a) {
      var l = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : ce(l, a) ? "symbol" : l;
    }
    function z(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var l = $(a);
      if (l === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function G(a) {
      var l = z(a);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function le(a) {
      return !a.constructor || !a.constructor.name ? M : a.constructor.name;
    }
    return R.checkPropTypes = r, R.resetWarningCache = r.resetWarningCache, R.PropTypes = R, R;
  }, he;
}
var me, Ie;
function Be() {
  if (Ie) return me;
  Ie = 1;
  var s = /* @__PURE__ */ we();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, me = function() {
    function t(u, p, w, O, D, P) {
      if (P !== s) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    t.isRequired = t;
    function r() {
      return t;
    }
    var i = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: r,
      element: t,
      elementType: t,
      instanceOf: r,
      node: t,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: e,
      resetWarningCache: n
    };
    return i.PropTypes = i, i;
  }, me;
}
var Me;
function ze() {
  if (Me) return ee.exports;
  if (Me = 1, process.env.NODE_ENV !== "production") {
    var s = Ve(), n = !0;
    ee.exports = /* @__PURE__ */ Ue()(s.isElement, n);
  } else
    ee.exports = /* @__PURE__ */ Be()();
  return ee.exports;
}
var He = /* @__PURE__ */ ze();
const Ze = /* @__PURE__ */ je(He);
function De({ onClickPrev: s, onClickSwitch: n, onClickNext: e, switchContent: t, switchColSpan: r, switchProps: i }) {
  return /* @__PURE__ */ W("tr", { children: [
    /* @__PURE__ */ d("th", { className: "rdtPrev", onClick: s, children: /* @__PURE__ */ d("span", { children: "‹" }) }),
    /* @__PURE__ */ d("th", { className: "rdtSwitch", colSpan: r, onClick: n, ...i, children: t }),
    /* @__PURE__ */ d("th", { className: "rdtNext", onClick: e, children: /* @__PURE__ */ d("span", { children: "›" }) })
  ] });
}
class ke extends q.Component {
  constructor() {
    super(...arguments);
    x(this, "_setDate", (e) => {
      this.props.updateDate(e);
    });
  }
  render() {
    return /* @__PURE__ */ d("div", { className: "rdtDays", children: /* @__PURE__ */ W("table", { children: [
      /* @__PURE__ */ W("thead", { children: [
        this.renderNavigation(),
        this.renderDayHeaders()
      ] }),
      /* @__PURE__ */ d("tbody", { children: this.renderDays() }),
      this.renderFooter()
    ] }) });
  }
  renderNavigation() {
    const e = this.props.viewDate, t = e.localeData();
    return /* @__PURE__ */ d(
      De,
      {
        onClickPrev: () => this.props.navigate(-1, "months"),
        onClickSwitch: () => this.props.showView("months"),
        onClickNext: () => this.props.navigate(1, "months"),
        switchContent: t.months(e) + " " + e.year(),
        switchColSpan: 5,
        switchProps: { "data-value": this.props.viewDate.month() }
      }
    );
  }
  renderDayHeaders() {
    const e = this.props.viewDate.localeData();
    let t = Je(e).map((r, i) => /* @__PURE__ */ d("th", { className: "dow", children: r }, r + i));
    return /* @__PURE__ */ d("tr", { children: t });
  }
  renderDays() {
    const e = this.props.viewDate, t = e.clone().startOf("month"), r = e.clone().endOf("month");
    let i = [[], [], [], [], [], []], u = e.clone().subtract(1, "months");
    u.date(u.daysInMonth()).startOf("week");
    let p = u.clone().add(42, "d"), w = 0;
    for (; u.isBefore(p); )
      Ke(i, w++).push(this.renderDay(u, t, r)), u.add(1, "d");
    return i.map((O, D) => /* @__PURE__ */ d("tr", { children: O }, `${p.month()}_${D}`));
  }
  renderDay(e, t, r) {
    let i = this.props.selectedDate;
    const u = e.format("M_D");
    let p = {
      "data-value": e.date(),
      "data-month": e.month(),
      "data-year": e.year()
    }, w = "rdtDay";
    return e.isBefore(t) ? w += " rdtOld" : e.isAfter(r) && (w += " rdtNew"), i && e.isSame(i, "day") && (w += " rdtActive"), e.isSame(this.props.moment(), "day") && (w += " rdtToday"), this.props.isValidDate(e) ? p.onClick = this._setDate : w += " rdtDisabled", p.className = w, q.cloneElement(
      this.props.renderDay(p, e.clone(), i && i.clone()),
      { key: u }
    );
  }
  renderFooter() {
    if (!this.props.timeFormat) return;
    const e = this.props.viewDate;
    return /* @__PURE__ */ d("tfoot", { children: /* @__PURE__ */ d("tr", { children: /* @__PURE__ */ d(
      "td",
      {
        onClick: () => this.props.showView("time"),
        colSpan: 7,
        className: "rdtTimeToggle",
        children: e.format(this.props.timeFormat)
      }
    ) }) });
  }
}
x(ke, "defaultProps", {
  isValidDate: () => !0,
  renderDay: (e, t) => /* @__PURE__ */ d("td", { ...e, children: t.date() })
});
function Ke(s, n) {
  return s[Math.floor(n / 7)];
}
function Je(s) {
  const n = s.firstDayOfWeek();
  let e = [], t = 0;
  return s._weekdaysMin.forEach(function(r) {
    e[(7 + t++ - n) % 7] = r;
  }), e;
}
class Xe extends q.Component {
  constructor() {
    super(...arguments);
    x(this, "_updateSelectedMonth", (e) => {
      this.props.updateDate(e);
    });
  }
  render() {
    return /* @__PURE__ */ W("div", { className: "rdtMonths", children: [
      /* @__PURE__ */ d("table", { children: /* @__PURE__ */ d("thead", { children: this.renderNavigation() }) }),
      /* @__PURE__ */ d("table", { children: /* @__PURE__ */ d("tbody", { children: this.renderMonths() }) })
    ] });
  }
  renderNavigation() {
    let e = this.props.viewDate.year();
    return /* @__PURE__ */ d(
      De,
      {
        onClickPrev: () => this.props.navigate(-1, "years"),
        onClickSwitch: () => this.props.showView("years"),
        onClickNext: () => this.props.navigate(1, "years"),
        switchContent: e,
        switchColSpan: "2"
      }
    );
  }
  renderMonths() {
    let e = [[], [], []];
    for (let t = 0; t < 12; t++)
      Ge(e, t).push(this.renderMonth(t));
    return e.map((t, r) => /* @__PURE__ */ d("tr", { children: t }, r));
  }
  renderMonth(e) {
    const t = this.props.selectedDate;
    let r = "rdtMonth", i;
    this.isDisabledMonth(e) ? r += " rdtDisabled" : i = this._updateSelectedMonth, t && t.year() === this.props.viewDate.year() && t.month() === e && (r += " rdtActive");
    let u = { className: r, "data-value": e, onClick: i };
    return this.props.renderMonth ? q.cloneElement(
      this.props.renderMonth(
        u,
        e,
        this.props.viewDate.year(),
        this.props.selectedDate && this.props.selectedDate.clone()
      ),
      { key: e }
    ) : /* @__PURE__ */ d("td", { ...u, children: this.getMonthText(e) }, e);
  }
  isDisabledMonth(e) {
    let t = this.props.isValidDate;
    if (!t)
      return !1;
    let r = this.props.viewDate.clone().set({ month: e }), i = r.endOf("month").date() + 1;
    for (; i-- > 1; )
      if (t(r.date(i)))
        return !1;
    return !0;
  }
  getMonthText(e) {
    const t = this.props.viewDate, r = t.localeData().monthsShort(t.month(e));
    return Qe(r.substring(0, 3));
  }
}
function Ge(s, n) {
  return n < 4 ? s[0] : n < 8 ? s[1] : s[2];
}
function Qe(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
class Fe extends q.Component {
  constructor() {
    super(...arguments);
    x(this, "disabledYearsCache", {});
    x(this, "_updateSelectedYear", (e) => {
      this.props.updateDate(e);
    });
  }
  render() {
    return /* @__PURE__ */ W("div", { className: "rdtYears", children: [
      /* @__PURE__ */ d("table", { children: /* @__PURE__ */ d("thead", { children: this.renderNavigation() }) }),
      /* @__PURE__ */ d("table", { children: /* @__PURE__ */ d("tbody", { children: this.renderYears() }) })
    ] });
  }
  renderNavigation() {
    const e = this.getViewYear();
    return /* @__PURE__ */ d(
      De,
      {
        onClickPrev: () => this.props.navigate(-10, "years"),
        onClickSwitch: () => this.props.showView("years"),
        onClickNext: () => this.props.navigate(10, "years"),
        switchContent: `${e}-${e + 9}`
      }
    );
  }
  renderYears() {
    const e = this.getViewYear();
    let t = [[], [], []];
    for (let r = e - 1; r < e + 11; r++)
      et(t, r - e).push(
        this.renderYear(r)
      );
    return t.map((r, i) => /* @__PURE__ */ d("tr", { children: r }, i));
  }
  renderYear(e) {
    const t = this.getSelectedYear();
    let r = "rdtYear", i;
    this.isDisabledYear(e) ? r += " rdtDisabled" : i = this._updateSelectedYear, t === e && (r += " rdtActive");
    let u = { className: r, "data-value": e, onClick: i };
    return q.cloneElement(
      this.props.renderYear(
        u,
        e,
        this.props.selectedDate && this.props.selectedDate.clone()
      ),
      { key: e }
    );
  }
  getViewYear() {
    return parseInt(this.props.viewDate.year() / 10, 10) * 10;
  }
  getSelectedYear() {
    return this.props.selectedDate && this.props.selectedDate.year();
  }
  isDisabledYear(e) {
    let t = this.disabledYearsCache;
    if (t[e] !== void 0)
      return t[e];
    let r = this.props.isValidDate;
    if (!r)
      return !1;
    let i = this.props.viewDate.clone().set({ year: e }), u = i.endOf("year").dayOfYear() + 1;
    for (; u-- > 1; )
      if (r(i.dayOfYear(u)))
        return t[e] = !1, !1;
    return t[e] = !0, !0;
  }
}
x(Fe, "defaultProps", {
  renderYear: (e, t) => /* @__PURE__ */ d("td", { ...e, children: t })
});
function et(s, n) {
  return n < 3 ? s[0] : n < 7 ? s[1] : s[2];
}
const Re = {
  hours: {
    min: 0,
    max: 23,
    step: 1
  },
  minutes: {
    min: 0,
    max: 59,
    step: 1
  },
  seconds: {
    min: 0,
    max: 59,
    step: 1
  },
  milliseconds: {
    min: 0,
    max: 999,
    step: 1
  }
};
function tt(s) {
  let n = {};
  return Object.keys(Re).forEach((e) => {
    n[e] = { ...Re[e], ...s[e] || {} };
  }), n;
}
class rt extends q.Component {
  constructor(n) {
    super(n), this.constraints = tt(n.timeConstraints), this.state = this.getTimeParts(n.selectedDate || n.viewDate);
  }
  render() {
    let n = [];
    const e = this.state;
    return this.getCounters().forEach((t, r) => {
      r && t !== "ampm" && n.push(
        /* @__PURE__ */ d("div", { className: "rdtCounterSeparator", children: ":" }, `sep${r}`)
      ), n.push(this.renderCounter(t, e[t]));
    }), /* @__PURE__ */ d("div", { className: "rdtTime", children: /* @__PURE__ */ W("table", { children: [
      this.renderHeader(),
      /* @__PURE__ */ d("tbody", { children: /* @__PURE__ */ d("tr", { children: /* @__PURE__ */ d("td", { children: /* @__PURE__ */ d("div", { className: "rdtCounters", children: n }) }) }) })
    ] }) });
  }
  renderCounter(n, e) {
    return n === "hours" && this.isAMPM() && (e = (e - 1) % 12 + 1, e === 0 && (e = 12)), n === "ampm" && (this.props.timeFormat.indexOf(" A") !== -1 ? e = this.props.viewDate.format("A") : e = this.props.viewDate.format("a")), /* @__PURE__ */ W("div", { className: "rdtCounter", children: [
      /* @__PURE__ */ d("span", { className: "rdtBtn", onMouseDown: (t) => this.onStartClicking(t, "increase", n), children: "▲" }),
      /* @__PURE__ */ d("div", { className: "rdtCount", children: e }),
      /* @__PURE__ */ d("span", { className: "rdtBtn", onMouseDown: (t) => this.onStartClicking(t, "decrease", n), children: "▼" })
    ] }, n);
  }
  renderHeader() {
    if (!this.props.dateFormat) return;
    const n = this.props.selectedDate || this.props.viewDate;
    return /* @__PURE__ */ d("thead", { children: /* @__PURE__ */ d("tr", { children: /* @__PURE__ */ d("td", { className: "rdtSwitch", colSpan: "4", onClick: () => this.props.showView("days"), children: n.format(this.props.dateFormat) }) }) });
  }
  onStartClicking(n, e, t) {
    if (n && n.button && n.button !== 0)
      return;
    if (t === "ampm") return this.toggleDayPart();
    let r = {}, i = document.body;
    r[t] = this[e](t), this.setState(r), this.timer = setTimeout(() => {
      this.increaseTimer = setInterval(() => {
        r[t] = this[e](t), this.setState(r);
      }, 70);
    }, 500), this.mouseUpListener = () => {
      clearTimeout(this.timer), clearInterval(this.increaseTimer), this.props.setTime(t, parseInt(this.state[t], 10)), i.removeEventListener("mouseup", this.mouseUpListener), i.removeEventListener("touchend", this.mouseUpListener);
    }, i.addEventListener("mouseup", this.mouseUpListener), i.addEventListener("touchend", this.mouseUpListener);
  }
  toggleDayPart() {
    let n = parseInt(this.state.hours, 10);
    n >= 12 ? n -= 12 : n += 12, this.props.setTime("hours", n);
  }
  increase(n) {
    const e = this.constraints[n];
    let t = parseInt(this.state[n], 10) + e.step;
    return t > e.max && (t = e.min + (t - (e.max + 1))), K(n, t);
  }
  decrease(n) {
    const e = this.constraints[n];
    let t = parseInt(this.state[n], 10) - e.step;
    return t < e.min && (t = e.max + 1 - (e.min - t)), K(n, t);
  }
  getCounters() {
    let n = [], e = this.props.timeFormat;
    return e.toLowerCase().indexOf("h") !== -1 && (n.push("hours"), e.indexOf("m") !== -1 && (n.push("minutes"), e.indexOf("s") !== -1 && (n.push("seconds"), e.indexOf("S") !== -1 && n.push("milliseconds")))), this.isAMPM() && n.push("ampm"), n;
  }
  isAMPM() {
    return this.props.timeFormat.toLowerCase().indexOf(" a") !== -1;
  }
  getTimeParts(n) {
    const e = n.hours();
    return {
      hours: K("hours", e),
      minutes: K("minutes", n.minutes()),
      seconds: K("seconds", n.seconds()),
      milliseconds: K("milliseconds", n.milliseconds()),
      ampm: e < 12 ? "am" : "pm"
    };
  }
  componentDidUpdate(n) {
    this.props.selectedDate ? this.props.selectedDate !== n.selectedDate && this.setState(this.getTimeParts(this.props.selectedDate)) : n.viewDate !== this.props.viewDate && this.setState(this.getTimeParts(this.props.viewDate));
  }
}
function K(s, n) {
  const e = {
    hours: 1,
    minutes: 2,
    seconds: 2,
    milliseconds: 3
  };
  let t = n + "";
  for (; t.length < e[s]; )
    t = "0" + t;
  return t;
}
const j = {
  YEARS: "years",
  MONTHS: "months",
  DAYS: "days",
  TIME: "time"
}, m = Ze, U = function() {
}, ve = m.oneOfType([m.instanceOf(H), m.instanceOf(Date), m.string]);
class ye extends q.Component {
  constructor(e) {
    super(e);
    x(this, "container", q.createRef());
    x(this, "_renderCalendar", () => {
      const e = this.props, t = this.state;
      let r = {
        viewDate: t.viewDate.clone(),
        selectedDate: this.getSelectedDate(),
        isValidDate: e.isValidDate,
        updateDate: this._updateDate,
        navigate: this._viewNavigate,
        moment: H,
        showView: this._showView
      };
      switch (t.currentView) {
        case j.YEARS:
          return r.renderYear = e.renderYear, /* @__PURE__ */ d(Fe, { ...r });
        case j.MONTHS:
          return r.renderMonth = e.renderMonth, /* @__PURE__ */ d(Xe, { ...r });
        case j.DAYS:
          return r.renderDay = e.renderDay, r.timeFormat = this.getFormat("time"), /* @__PURE__ */ d(ke, { ...r });
        default:
          return r.dateFormat = this.getFormat("date"), r.timeFormat = this.getFormat("time"), r.timeConstraints = e.timeConstraints, r.setTime = this._setTime, /* @__PURE__ */ d(rt, { ...r });
      }
    });
    x(this, "_showView", (e, t) => {
      const r = (t || this.state.viewDate).clone(), i = this.props.onBeforeNavigate(e, this.state.currentView, r);
      i && this.state.currentView !== i && (this.props.onNavigate(i), this.setState({ currentView: i }));
    });
    x(this, "viewToMethod", { days: "date", months: "month", years: "year" });
    x(this, "nextView", { days: "time", months: "days", years: "months" });
    x(this, "_updateDate", (e) => {
      let r = this.state.currentView, i = this.getUpdateOn(this.getFormat("date")), u = this.state.viewDate.clone();
      r === "days" && (u.month(parseInt(e.target.getAttribute("data-month"), 10)), u.year(parseInt(e.target.getAttribute("data-year"), 10))), u[this.viewToMethod[r]](
        parseInt(e.target.getAttribute("data-value"), 10)
      );
      let p = { viewDate: u };
      r === i ? (p.selectedDate = u.clone(), p.inputValue = u.format(this.getFormat("datetime")), this.props.open === void 0 && this.props.input && this.props.closeOnSelect && this._closeCalendar(), this.props.onChange(u.clone())) : this._showView(this.nextView[r], u), this.setState(p);
    });
    x(this, "_viewNavigate", (e, t) => {
      let r = this.state.viewDate.clone();
      r.add(e, t), e > 0 ? this.props.onNavigateForward(e, t) : this.props.onNavigateBack(-e, t), this.setState({ viewDate: r });
    });
    x(this, "_setTime", (e, t) => {
      let r = (this.getSelectedDate() || this.state.viewDate).clone();
      r[e](t), this.props.value || this.setState({
        selectedDate: r,
        viewDate: r.clone(),
        inputValue: r.format(this.getFormat("datetime"))
      }), this.props.onChange(r);
    });
    x(this, "_openCalendar", () => {
      this.isOpen() || this.setState({ open: !0 }, this.props.onOpen);
    });
    x(this, "_closeCalendar", () => {
      this.isOpen() && this.setState({ open: !1 }, () => {
        this.props.onClose(this.state.selectedDate || this.state.inputValue);
      });
    });
    x(this, "_handleClickOutside", () => {
      let e = this.props;
      e.input && this.state.open && e.open === void 0 && e.closeOnClickOutside && this._closeCalendar();
    });
    x(this, "_handleDocumentEvent", (e) => {
      const t = this.container.current, r = typeof e.composedPath == "function" ? e.composedPath() : [];
      t && !t.contains(e.target) && !r.includes(t) && this._handleClickOutside();
    });
    x(this, "_onInputFocus", (e) => {
      this.callHandler(this.props.inputProps.onFocus, e) && this._openCalendar();
    });
    x(this, "_onInputChange", (e) => {
      if (!this.callHandler(this.props.inputProps.onChange, e)) return;
      const t = e.target ? e.target.value : e, r = this.localMoment(t, this.getFormat("datetime"));
      let i = { inputValue: t };
      r.isValid() ? (i.selectedDate = r, i.viewDate = r.clone().startOf("month")) : i.selectedDate = null, this.setState(i, () => {
        this.props.onChange(r.isValid() ? r : this.state.inputValue);
      });
    });
    x(this, "_onInputClear", () => {
      let e = {
        inputValue: "",
        selectedDate: void 0
      };
      this.setState(e, () => {
        this.props.onChange("");
      });
    });
    x(this, "_onInputKeyDown", (e) => {
      this.callHandler(this.props.inputProps.onKeyDown, e) && (e.key === "Tab" || e.which === 9) && this.props.closeOnTab && this._closeCalendar();
    });
    x(this, "_onInputClick", (e) => {
      this.callHandler(this.props.inputProps.onClick, e) && this._openCalendar();
    });
    this.state = this.getInitialState();
  }
  render() {
    const e = {
      maxWidth: "100%"
    };
    return this.props.minWidth !== 0 && (e.width = `${this.props.minWidth}px`), /* @__PURE__ */ W("div", { className: this.getClassName(), ref: this.container, children: [
      /* @__PURE__ */ W("div", { className: "input-group", style: e, children: [
        /* @__PURE__ */ d("span", { className: "input-group-addon", children: /* @__PURE__ */ d("span", { className: "rioglyph rioglyph-calendar", "aria-hidden": "true" }) }),
        /* @__PURE__ */ W("div", { className: "ClearableInput input-group", children: [
          this.renderInput(),
          this.renderClearButton()
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "rdtPicker", children: this.renderView() })
    ] });
  }
  componentDidMount() {
    this.ownerDocument = this.container.current.ownerDocument, this.ownerDocument.addEventListener("mousedown", this._handleDocumentEvent), this.ownerDocument.addEventListener("touchstart", this._handleDocumentEvent);
  }
  componentWillUnmount() {
    this.ownerDocument.removeEventListener("mousedown", this._handleDocumentEvent), this.ownerDocument.removeEventListener("touchstart", this._handleDocumentEvent);
  }
  renderClearButton() {
    if (this.props.clearableInput && this.props.clearableInput)
      return /* @__PURE__ */ d("span", { className: "clearButton", onClick: this._onInputClear, children: /* @__PURE__ */ d("span", { className: "clearButtonIcon rioglyph rioglyph-remove-sign" }) });
  }
  renderInput() {
    if (!this.props.input) return;
    const e = {
      type: "text",
      className: "form-control",
      value: this.getInputValue(),
      ...this.props.inputProps,
      onFocus: this._onInputFocus,
      onChange: this._onInputChange,
      onKeyDown: this._onInputKeyDown,
      onClick: this._onInputClick
    };
    return this.props.renderInput ? /* @__PURE__ */ d("div", { children: this.props.renderInput(e, this._openCalendar, this._closeCalendar) }) : /* @__PURE__ */ d("input", { ...e });
  }
  renderView() {
    return this.props.renderView(this.state.currentView, this._renderCalendar);
  }
  getInitialState() {
    let e = this.props, t = this.getFormat("datetime"), r = this.parseDate(e.value || e.initialValue, t);
    return this.checkTZ(), {
      open: !e.input,
      currentView: e.initialViewMode || this.getInitialView(),
      viewDate: this.getInitialViewDate(r),
      selectedDate: r && r.isValid() ? r : void 0,
      inputValue: this.getInitialInputValue(r)
    };
  }
  getInitialViewDate(e) {
    const t = this.props.initialViewDate;
    let r;
    if (t) {
      if (r = this.parseDate(t, this.getFormat("datetime")), r && r.isValid())
        return r;
      ge('The initialViewDated given "' + t + '" is not valid. Using current date instead.');
    } else if (e && e.isValid())
      return e.clone();
    return this.getInitialDate();
  }
  getInitialDate() {
    let e = this.localMoment();
    return e.hour(0).minute(0).second(0).millisecond(0), e;
  }
  getInitialView() {
    const e = this.getFormat("date");
    return e ? this.getUpdateOn(e) : j.TIME;
  }
  parseDate(e, t) {
    let r;
    return e && typeof e == "string" ? r = this.localMoment(e, t) : e && (r = this.localMoment(e)), r && !r.isValid() && (r = null), r;
  }
  getClassName() {
    let e = "rdt", t = this.props, r = t.className;
    return Array.isArray(r) ? e += " " + r.join(" ") : r && (e += " " + r), t.input || (e += " rdtStatic"), this.isOpen() && (e += " rdtOpen"), e;
  }
  isOpen() {
    return !this.props.input || (this.props.open === void 0 ? this.state.open : this.props.open);
  }
  getUpdateOn(e) {
    return this.props.updateOnView ? this.props.updateOnView : e.match(/[lLD]/) ? j.DAYS : e.indexOf("M") !== -1 ? j.MONTHS : e.indexOf("Y") !== -1 ? j.YEARS : j.DAYS;
  }
  getLocaleData() {
    let e = this.props;
    return this.localMoment(e.value || e.defaultValue || /* @__PURE__ */ new Date()).localeData();
  }
  getDateFormat() {
    const e = this.getLocaleData();
    let t = this.props.dateFormat;
    return t === !0 ? e.longDateFormat("L") : t || "";
  }
  getTimeFormat() {
    const e = this.getLocaleData();
    let t = this.props.timeFormat;
    return t === !0 ? e.longDateFormat("LT") : t || "";
  }
  getFormat(e) {
    if (e === "date")
      return this.getDateFormat();
    if (e === "time")
      return this.getTimeFormat();
    let t = this.getDateFormat(), r = this.getTimeFormat();
    return t && r ? t + " " + r : t || r;
  }
  updateTime(e, t, r, i) {
    let u = {};
    const p = i ? "selectedDate" : "viewDate";
    u[p] = this.state[p].clone()[e](t, r), this.setState(u);
  }
  localMoment(e, t, r) {
    r = r || this.props;
    let i = null;
    return r.utc ? i = H.utc(e, t, r.strictParsing) : r.displayTimeZone ? i = H.tz(e, t, r.displayTimeZone) : i = H(e, t, r.strictParsing), r.locale && i.locale(r.locale), i;
  }
  checkTZ() {
    const { displayTimeZone: e } = this.props;
    e && !this.tzWarning && !H.tz && (this.tzWarning = !0, ge('displayTimeZone prop with value "' + e + '" is used but moment.js timezone is not loaded.', "error"));
  }
  componentDidUpdate(e) {
    if (e === this.props) return;
    let t = !1, r = this.props;
    ["locale", "utc", "displayZone", "dateFormat", "timeFormat"].forEach(function(i) {
      e[i] !== r[i] && (t = !0);
    }), t && this.regenerateDates(), r.value && r.value !== e.value && this.setViewDate(r.value), this.checkTZ();
  }
  regenerateDates() {
    const e = this.props;
    let t = this.state.viewDate.clone(), r = this.state.selectedDate && this.state.selectedDate.clone();
    e.locale && (t.locale(e.locale), r && r.locale(e.locale)), e.utc ? (t.utc(), r && r.utc()) : e.displayTimeZone ? (t.tz(e.displayTimeZone), r && r.tz(e.displayTimeZone)) : (t.locale(), r && r.locale());
    let i = { viewDate: t, selectedDate: r };
    r && r.isValid() && (i.inputValue = r.format(this.getFormat("datetime"))), this.setState(i);
  }
  getSelectedDate() {
    if (this.props.value === void 0) return this.state.selectedDate;
    let e = this.parseDate(this.props.value, this.getFormat("datetime"));
    return e && e.isValid() ? e : !1;
  }
  getInitialInputValue(e) {
    const t = this.props;
    return t.inputProps.value ? t.inputProps.value : e && e.isValid() ? e.format(this.getFormat("datetime")) : t.value && typeof t.value == "string" ? t.value : t.initialValue && typeof t.initialValue == "string" ? t.initialValue : "";
  }
  getInputValue() {
    let e = this.getSelectedDate();
    return e ? e.format(this.getFormat("datetime")) : this.state.inputValue;
  }
  /**
   * Set the date that is currently shown in the calendar.
   * This is independent from the selected date and it's the one used to navigate through months or days in the calendar.
   * @param dateType date
   * @public
   */
  setViewDate(e) {
    let t = function() {
      return ge("Invalid date passed to the `setViewDate` method: " + e);
    };
    if (!e) return t();
    let r;
    if (typeof e == "string" ? r = this.localMoment(e, this.getFormat("datetime")) : r = this.localMoment(e), !r || !r.isValid()) return t();
    this.setState({ viewDate: r });
  }
  /**
   * Set the view currently shown by the calendar. View modes shipped with react-datetime are 'years', 'months', 'days' and 'time'.
   * @param TYPES.string mode
   */
  navigate(e) {
    this._showView(e);
  }
  callHandler(e, t) {
    return e ? e(t) !== !1 : !0;
  }
}
x(ye, "propTypes", {
  value: ve,
  initialValue: ve,
  initialViewDate: ve,
  initialViewMode: m.oneOf([j.YEARS, j.MONTHS, j.DAYS, j.TIME]),
  onOpen: m.func,
  onClose: m.func,
  onChange: m.func,
  onNavigate: m.func,
  onBeforeNavigate: m.func,
  onNavigateBack: m.func,
  onNavigateForward: m.func,
  updateOnView: m.string,
  locale: m.string,
  utc: m.bool,
  displayTimeZone: m.string,
  input: m.bool,
  dateFormat: m.oneOfType([m.string, m.bool]),
  timeFormat: m.oneOfType([m.string, m.bool]),
  inputProps: m.object,
  timeConstraints: m.object,
  isValidDate: m.func,
  open: m.bool,
  strictParsing: m.bool,
  clearableInput: m.bool,
  closeOnSelect: m.bool,
  closeOnTab: m.bool,
  renderView: m.func,
  renderInput: m.func,
  renderDay: m.func,
  renderMonth: m.func,
  renderYear: m.func,
  minWidth: m.number
}), x(ye, "defaultProps", {
  onOpen: U,
  onClose: U,
  onCalendarOpen: U,
  onCalendarClose: U,
  onChange: U,
  onNavigate: U,
  onBeforeNavigate: function(e) {
    return e;
  },
  onNavigateBack: U,
  onNavigateForward: U,
  dateFormat: !0,
  timeFormat: !0,
  utc: !1,
  className: "",
  minWidth: 0,
  input: !0,
  inputProps: {},
  timeConstraints: {},
  isValidDate: function() {
    return !0;
  },
  strictParsing: !0,
  clearableInput: !1,
  closeOnSelect: !1,
  closeOnTab: !0,
  closeOnClickOutside: !0,
  renderView: (e, t) => t()
}), // Make moment accessible through the Datetime class
x(ye, "moment", H);
function ge(s, n) {
  let e = typeof window < "u" && window.console;
  e && (n || (n = "warn"), e[n]("***react-datetime:" + s));
}
export {
  ye as default
};
//# sourceMappingURL=react-datetime.esm.mjs.map
