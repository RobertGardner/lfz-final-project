function Qc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ya = { exports: {} },
  pl = {},
  wa = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = Symbol.for('react.element'),
  Yc = Symbol.for('react.portal'),
  Gc = Symbol.for('react.fragment'),
  Xc = Symbol.for('react.strict_mode'),
  Zc = Symbol.for('react.profiler'),
  Jc = Symbol.for('react.provider'),
  qc = Symbol.for('react.context'),
  bc = Symbol.for('react.forward_ref'),
  ef = Symbol.for('react.suspense'),
  tf = Symbol.for('react.memo'),
  nf = Symbol.for('react.lazy'),
  nu = Symbol.iterator;
function rf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (nu && e[nu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ka = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sa = Object.assign,
  xa = {};
function fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xa),
    (this.updater = n || ka);
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ea() {}
Ea.prototype = fn.prototype;
function li(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xa),
    (this.updater = n || ka);
}
var oi = (li.prototype = new Ea());
oi.constructor = li;
Sa(oi, fn.prototype);
oi.isPureReactComponent = !0;
var ru = Array.isArray,
  Ca = Object.prototype.hasOwnProperty,
  ii = { current: null },
  Pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function _a(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Ca.call(t, r) && !Pa.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: rr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ii.current,
  };
}
function lf(e, t) {
  return {
    $$typeof: rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ui(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === rr;
}
function of(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lu = /\/+/g;
function Il(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? of('' + e.key)
    : t.toString(36);
}
function Lr(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case rr:
          case Yc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Il(i, 0) : r),
      ru(l)
        ? ((n = ''),
          e != null && (n = e.replace(lu, '$&/') + '/'),
          Lr(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (ui(l) &&
            (l = lf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(lu, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), ru(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Il(o, u);
      i += Lr(o, t, n, a, l);
    }
  else if (((a = rf(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Il(o, u++)), (i += Lr(o, t, n, a, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function uf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Rr = { transition: null },
  af = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: ii,
  };
z.Children = {
  map: fr,
  forEach: function (e, t, n) {
    fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ui(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
z.Component = fn;
z.Fragment = Gc;
z.Profiler = Zc;
z.PureComponent = li;
z.StrictMode = Xc;
z.Suspense = ef;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = af;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Sa({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ii.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ca.call(t, a) &&
        !Pa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: rr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: qc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Jc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = _a;
z.createFactory = function (e) {
  var t = _a.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: bc, render: e };
};
z.isValidElement = ui;
z.lazy = function (e) {
  return { $$typeof: nf, _payload: { _status: -1, _result: e }, _init: uf };
};
z.memo = function (e, t) {
  return { $$typeof: tf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
z.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
z.useContext = function (e) {
  return se.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
z.useId = function () {
  return se.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return se.current.useRef(e);
};
z.useState = function (e) {
  return se.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return se.current.useTransition();
};
z.version = '18.2.0';
wa.exports = z;
var S = wa.exports;
const Na = Kc(S),
  sf = Qc({ __proto__: null, default: Na }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cf = S,
  ff = Symbol.for('react.element'),
  df = Symbol.for('react.fragment'),
  pf = Object.prototype.hasOwnProperty,
  hf = cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function La(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) pf.call(t, r) && !mf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ff,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hf.current,
  };
}
pl.Fragment = df;
pl.jsx = La;
pl.jsxs = La;
ya.exports = pl;
var P = ya.exports,
  uo = {},
  Ra = { exports: {} },
  ke = {},
  Ta = { exports: {} },
  ja = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, T) {
    var j = C.length;
    C.push(T);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        J = C[Q];
      if (0 < l(J, T)) (C[Q] = T), (C[j] = J), (j = Q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var T = C[0],
      j = C.pop();
    if (j !== T) {
      C[0] = j;
      e: for (var Q = 0, J = C.length, sr = J >>> 1; Q < sr; ) {
        var kt = 2 * (Q + 1) - 1,
          Ol = C[kt],
          St = kt + 1,
          cr = C[St];
        if (0 > l(Ol, j))
          St < J && 0 > l(cr, Ol)
            ? ((C[Q] = cr), (C[St] = j), (Q = St))
            : ((C[Q] = Ol), (C[kt] = j), (Q = kt));
        else if (St < J && 0 > l(cr, j)) (C[Q] = cr), (C[St] = j), (Q = St);
        else break e;
      }
    }
    return T;
  }
  function l(C, T) {
    var j = C.sortIndex - T.sortIndex;
    return j !== 0 ? j : C.id - T.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    p = 1,
    h = null,
    m = 3,
    k = !1,
    g = !1,
    y = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var T = n(s); T !== null; ) {
      if (T.callback === null) r(s);
      else if (T.startTime <= C)
        r(s), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(s);
    }
  }
  function v(C) {
    if (((y = !1), d(C), !g))
      if (n(a) !== null) (g = !0), jl(x);
      else {
        var T = n(s);
        T !== null && zl(v, T.startTime - C);
      }
  }
  function x(C, T) {
    (g = !1), y && ((y = !1), f(L), (L = -1)), (k = !0);
    var j = m;
    try {
      for (
        d(T), h = n(a);
        h !== null && (!(h.expirationTime > T) || (C && !Le()));

      ) {
        var Q = h.callback;
        if (typeof Q == 'function') {
          (h.callback = null), (m = h.priorityLevel);
          var J = Q(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof J == 'function' ? (h.callback = J) : h === n(a) && r(a),
            d(T);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var sr = !0;
      else {
        var kt = n(s);
        kt !== null && zl(v, kt.startTime - T), (sr = !1);
      }
      return sr;
    } finally {
      (h = null), (m = j), (k = !1);
    }
  }
  var _ = !1,
    N = null,
    L = -1,
    H = 5,
    O = -1;
  function Le() {
    return !(e.unstable_now() - O < H);
  }
  function vn() {
    if (N !== null) {
      var C = e.unstable_now();
      O = C;
      var T = !0;
      try {
        T = N(!0, C);
      } finally {
        T ? gn() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var gn;
  if (typeof c == 'function')
    gn = function () {
      c(vn);
    };
  else if (typeof MessageChannel < 'u') {
    var tu = new MessageChannel(),
      Hc = tu.port2;
    (tu.port1.onmessage = vn),
      (gn = function () {
        Hc.postMessage(null);
      });
  } else
    gn = function () {
      R(vn, 0);
    };
  function jl(C) {
    (N = C), _ || ((_ = !0), gn());
  }
  function zl(C, T) {
    L = R(function () {
      C(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || k || ((g = !0), jl(x));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var j = m;
      m = T;
      try {
        return C();
      } finally {
        m = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, T) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var j = m;
      m = C;
      try {
        return T();
      } finally {
        m = j;
      }
    }),
    (e.unstable_scheduleCallback = function (C, T, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? Q + j : Q))
          : (j = Q),
        C)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (C = {
          id: p++,
          callback: T,
          priorityLevel: C,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > Q
          ? ((C.sortIndex = j),
            t(s, C),
            n(a) === null &&
              C === n(s) &&
              (y ? (f(L), (L = -1)) : (y = !0), zl(v, j - Q)))
          : ((C.sortIndex = J), t(a, C), g || k || ((g = !0), jl(x))),
        C
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (C) {
      var T = m;
      return function () {
        var j = m;
        m = T;
        try {
          return C.apply(this, arguments);
        } finally {
          m = j;
        }
      };
    });
})(ja);
Ta.exports = ja;
var vf = Ta.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za = S,
  we = vf;
function w(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Oa = new Set(),
  $n = {};
function It(e, t) {
  rn(e, t), rn(e + 'Capture', t);
}
function rn(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Oa.add(t[e]);
}
var Ke = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ao = Object.prototype.hasOwnProperty,
  gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ou = {},
  iu = {};
function yf(e) {
  return ao.call(iu, e)
    ? !0
    : ao.call(ou, e)
    ? !1
    : gf.test(e)
    ? (iu[e] = !0)
    : ((ou[e] = !0), !1);
}
function wf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function kf(e, t, n, r) {
  if (t === null || typeof t > 'u' || wf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ai = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ai, si);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ai, si);
    ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ai, si);
  ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ci(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (kf(t, n, l, r) && (n = null),
    r || l === null
      ? yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dr = Symbol.for('react.element'),
  Ft = Symbol.for('react.portal'),
  $t = Symbol.for('react.fragment'),
  fi = Symbol.for('react.strict_mode'),
  so = Symbol.for('react.profiler'),
  Ia = Symbol.for('react.provider'),
  Ma = Symbol.for('react.context'),
  di = Symbol.for('react.forward_ref'),
  co = Symbol.for('react.suspense'),
  fo = Symbol.for('react.suspense_list'),
  pi = Symbol.for('react.memo'),
  be = Symbol.for('react.lazy'),
  Da = Symbol.for('react.offscreen'),
  uu = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (uu && e[uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var W = Object.assign,
  Ml;
function _n(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || '';
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Dl = !1;
function Ul(e, t) {
  if (!e || Dl) return '';
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? _n(e) : '';
}
function Sf(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n('Lazy');
    case 13:
      return _n('Suspense');
    case 19:
      return _n('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return '';
  }
}
function po(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case $t:
      return 'Fragment';
    case Ft:
      return 'Portal';
    case so:
      return 'Profiler';
    case fi:
      return 'StrictMode';
    case co:
      return 'Suspense';
    case fo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ma:
        return (e.displayName || 'Context') + '.Consumer';
      case Ia:
        return (e._context.displayName || 'Context') + '.Provider';
      case di:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case pi:
        return (
          (t = e.displayName || null), t !== null ? t : po(e.type) || 'Memo'
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return po(e(t));
        } catch {}
    }
  return null;
}
function xf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return po(t);
    case 8:
      return t === fi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ua(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Ef(e) {
  var t = Ua(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = Ef(e));
}
function Fa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ua(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Br(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ho(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function au(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function $a(e, t) {
  (t = t.checked), t != null && ci(e, 'checked', t, !1);
}
function mo(e, t) {
  $a(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? vo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && vo(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function su(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function vo(e, t, n) {
  (t !== 'number' || Br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function go(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function Ba(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function fu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Aa(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function yo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Aa(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var hr,
  Wa = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        hr = hr || document.createElement('div'),
          hr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Tn).forEach(function (e) {
  Cf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function Va(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Ha(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Va(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Pf = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wo(e, t) {
  if (t) {
    if (Pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(w(62));
  }
}
function ko(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var So = null;
function hi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xo = null,
  Jt = null,
  qt = null;
function du(e) {
  if ((e = ir(e))) {
    if (typeof xo != 'function') throw Error(w(280));
    var t = e.stateNode;
    t && ((t = yl(t)), xo(e.stateNode, e.type, t));
  }
}
function Qa(e) {
  Jt ? (qt ? qt.push(e) : (qt = [e])) : (Jt = e);
}
function Ka() {
  if (Jt) {
    var e = Jt,
      t = qt;
    if (((qt = Jt = null), du(e), t)) for (e = 0; e < t.length; e++) du(t[e]);
  }
}
function Ya(e, t) {
  return e(t);
}
function Ga() {}
var Fl = !1;
function Xa(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Ya(e, t, n);
  } finally {
    (Fl = !1), (Jt !== null || qt !== null) && (Ga(), Ka());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(w(231, t, typeof n));
  return n;
}
var Eo = !1;
if (Ke)
  try {
    var wn = {};
    Object.defineProperty(wn, 'passive', {
      get: function () {
        Eo = !0;
      },
    }),
      window.addEventListener('test', wn, wn),
      window.removeEventListener('test', wn, wn);
  } catch {
    Eo = !1;
  }
function _f(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var jn = !1,
  Ar = null,
  Wr = !1,
  Co = null,
  Nf = {
    onError: function (e) {
      (jn = !0), (Ar = e);
    },
  };
function Lf(e, t, n, r, l, o, i, u, a) {
  (jn = !1), (Ar = null), _f.apply(Nf, arguments);
}
function Rf(e, t, n, r, l, o, i, u, a) {
  if ((Lf.apply(this, arguments), jn)) {
    if (jn) {
      var s = Ar;
      (jn = !1), (Ar = null);
    } else throw Error(w(198));
    Wr || ((Wr = !0), (Co = s));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function pu(e) {
  if (Mt(e) !== e) throw Error(w(188));
}
function Tf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return pu(l), e;
        if (o === r) return pu(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Ja(e) {
  return (e = Tf(e)), e !== null ? qa(e) : null;
}
function qa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ba = we.unstable_scheduleCallback,
  hu = we.unstable_cancelCallback,
  jf = we.unstable_shouldYield,
  zf = we.unstable_requestPaint,
  K = we.unstable_now,
  Of = we.unstable_getCurrentPriorityLevel,
  mi = we.unstable_ImmediatePriority,
  es = we.unstable_UserBlockingPriority,
  Vr = we.unstable_NormalPriority,
  If = we.unstable_LowPriority,
  ts = we.unstable_IdlePriority,
  hl = null,
  $e = null;
function Mf(e) {
  if ($e && typeof $e.onCommitFiberRoot == 'function')
    try {
      $e.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Ff,
  Df = Math.log,
  Uf = Math.LN2;
function Ff(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Df(e) / Uf) | 0)) | 0;
}
var mr = 64,
  vr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Ln(u)) : ((o &= i), o !== 0 && (r = Ln(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ln(i)) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function $f(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = $f(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ns() {
  var e = mr;
  return (mr <<= 1), !(mr & 4194240) && (mr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function vi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ls,
  gi,
  os,
  is,
  us,
  _o = !1,
  gr = [],
  it = null,
  ut = null,
  at = null,
  Wn = new Map(),
  Vn = new Map(),
  tt = [],
  Wf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function mu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      it = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ut = null;
      break;
    case 'mouseover':
    case 'mouseout':
      at = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Wn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Vn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ir(t)), t !== null && gi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Vf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (it = kn(it, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ut = kn(ut, e, t, n, r, l)), !0;
    case 'mouseover':
      return (at = kn(at, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Wn.set(o, kn(Wn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Vn.set(o, kn(Vn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function as(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Za(n)), t !== null)) {
          (e.blockedOn = t),
            us(e.priority, function () {
              os(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (So = r), n.target.dispatchEvent(r), (So = null);
    } else return (t = ir(n)), t !== null && gi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vu(e, t, n) {
  Tr(e) && n.delete(t);
}
function Hf() {
  (_o = !1),
    it !== null && Tr(it) && (it = null),
    ut !== null && Tr(ut) && (ut = null),
    at !== null && Tr(at) && (at = null),
    Wn.forEach(vu),
    Vn.forEach(vu);
}
function Sn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _o ||
      ((_o = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Hf)));
}
function Hn(e) {
  function t(l) {
    return Sn(l, e);
  }
  if (0 < gr.length) {
    Sn(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && Sn(it, e),
      ut !== null && Sn(ut, e),
      at !== null && Sn(at, e),
      Wn.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    as(n), n.blockedOn === null && tt.shift();
}
var bt = Ze.ReactCurrentBatchConfig,
  Qr = !0;
function Qf(e, t, n, r) {
  var l = M,
    o = bt.transition;
  bt.transition = null;
  try {
    (M = 1), yi(e, t, n, r);
  } finally {
    (M = l), (bt.transition = o);
  }
}
function Kf(e, t, n, r) {
  var l = M,
    o = bt.transition;
  bt.transition = null;
  try {
    (M = 4), yi(e, t, n, r);
  } finally {
    (M = l), (bt.transition = o);
  }
}
function yi(e, t, n, r) {
  if (Qr) {
    var l = No(e, t, n, r);
    if (l === null) Xl(e, t, r, Kr, n), mu(e, r);
    else if (Vf(l, e, t, n, r)) r.stopPropagation();
    else if ((mu(e, r), t & 4 && -1 < Wf.indexOf(e))) {
      for (; l !== null; ) {
        var o = ir(l);
        if (
          (o !== null && ls(o),
          (o = No(e, t, n, r)),
          o === null && Xl(e, t, r, Kr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var Kr = null;
function No(e, t, n, r) {
  if (((Kr = null), (e = hi(r)), (e = Ct(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Za(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Kr = e), null;
}
function ss(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Of()) {
        case mi:
          return 1;
        case es:
          return 4;
        case Vr:
        case If:
          return 16;
        case ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  wi = null,
  jr = null;
function cs() {
  if (jr) return jr;
  var e,
    t = wi,
    n = t.length,
    r,
    l = 'value' in rt ? rt.value : rt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yr() {
  return !0;
}
function gu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? yr
        : gu),
      (this.isPropagationStopped = gu),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = yr));
      },
      persist: function () {},
      isPersistent: yr,
    }),
    t
  );
}
var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ki = Se(dn),
  or = W({}, dn, { view: 0, detail: 0 }),
  Yf = Se(or),
  Bl,
  Al,
  xn,
  ml = W({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Si,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== xn &&
            (xn && e.type === 'mousemove'
              ? ((Bl = e.screenX - xn.screenX), (Al = e.screenY - xn.screenY))
              : (Al = Bl = 0),
            (xn = e)),
          Bl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Al;
    },
  }),
  yu = Se(ml),
  Gf = W({}, ml, { dataTransfer: 0 }),
  Xf = Se(Gf),
  Zf = W({}, or, { relatedTarget: 0 }),
  Wl = Se(Zf),
  Jf = W({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = Se(Jf),
  bf = W({}, dn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ed = Se(bf),
  td = W({}, dn, { data: 0 }),
  wu = Se(td),
  nd = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  rd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ld = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function od(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ld[e]) ? !!t[e] : !1;
}
function Si() {
  return od;
}
var id = W({}, or, {
    key: function (e) {
      if (e.key) {
        var t = nd[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = zr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? rd[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Si,
    charCode: function (e) {
      return e.type === 'keypress' ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? zr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  ud = Se(id),
  ad = W({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ku = Se(ad),
  sd = W({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Si,
  }),
  cd = Se(sd),
  fd = W({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dd = Se(fd),
  pd = W({}, ml, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hd = Se(pd),
  md = [9, 13, 27, 32],
  xi = Ke && 'CompositionEvent' in window,
  zn = null;
Ke && 'documentMode' in document && (zn = document.documentMode);
var vd = Ke && 'TextEvent' in window && !zn,
  fs = Ke && (!xi || (zn && 8 < zn && 11 >= zn)),
  Su = String.fromCharCode(32),
  xu = !1;
function ds(e, t) {
  switch (e) {
    case 'keyup':
      return md.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ps(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Bt = !1;
function gd(e, t) {
  switch (e) {
    case 'compositionend':
      return ps(t);
    case 'keypress':
      return t.which !== 32 ? null : ((xu = !0), Su);
    case 'textInput':
      return (e = t.data), e === Su && xu ? null : e;
    default:
      return null;
  }
}
function yd(e, t) {
  if (Bt)
    return e === 'compositionend' || (!xi && ds(e, t))
      ? ((e = cs()), (jr = wi = rt = null), (Bt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return fs && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var wd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!wd[e.type] : t === 'textarea';
}
function hs(e, t, n, r) {
  Qa(r),
    (t = Yr(t, 'onChange')),
    0 < t.length &&
      ((n = new ki('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var On = null,
  Qn = null;
function kd(e) {
  Ps(e, 0);
}
function vl(e) {
  var t = Vt(e);
  if (Fa(t)) return e;
}
function Sd(e, t) {
  if (e === 'change') return t;
}
var ms = !1;
if (Ke) {
  var Vl;
  if (Ke) {
    var Hl = 'oninput' in document;
    if (!Hl) {
      var Cu = document.createElement('div');
      Cu.setAttribute('oninput', 'return;'),
        (Hl = typeof Cu.oninput == 'function');
    }
    Vl = Hl;
  } else Vl = !1;
  ms = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Pu() {
  On && (On.detachEvent('onpropertychange', vs), (Qn = On = null));
}
function vs(e) {
  if (e.propertyName === 'value' && vl(Qn)) {
    var t = [];
    hs(t, Qn, e, hi(e)), Xa(kd, t);
  }
}
function xd(e, t, n) {
  e === 'focusin'
    ? (Pu(), (On = t), (Qn = n), On.attachEvent('onpropertychange', vs))
    : e === 'focusout' && Pu();
}
function Ed(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return vl(Qn);
}
function Cd(e, t) {
  if (e === 'click') return vl(t);
}
function Pd(e, t) {
  if (e === 'input' || e === 'change') return vl(t);
}
function _d(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : _d;
function Kn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ao.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = _u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _u(n);
  }
}
function gs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gs(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ys() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function Ei(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Nd(e) {
  var t = ys(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ei(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Nu(n, o));
        var i = Nu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ld = Ke && 'documentMode' in document && 11 >= document.documentMode,
  At = null,
  Lo = null,
  In = null,
  Ro = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ro ||
    At == null ||
    At !== Br(r) ||
    ((r = At),
    'selectionStart' in r && Ei(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (In && Kn(In, r)) ||
      ((In = r),
      (r = Yr(Lo, 'onSelect')),
      0 < r.length &&
        ((t = new ki('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = At))));
}
function wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Wt = {
    animationend: wr('Animation', 'AnimationEnd'),
    animationiteration: wr('Animation', 'AnimationIteration'),
    animationstart: wr('Animation', 'AnimationStart'),
    transitionend: wr('Transition', 'TransitionEnd'),
  },
  Ql = {},
  ws = {};
Ke &&
  ((ws = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  'TransitionEvent' in window || delete Wt.transitionend.transition);
function gl(e) {
  if (Ql[e]) return Ql[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ws) return (Ql[e] = t[n]);
  return e;
}
var ks = gl('animationend'),
  Ss = gl('animationiteration'),
  xs = gl('animationstart'),
  Es = gl('transitionend'),
  Cs = new Map(),
  Ru =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function gt(e, t) {
  Cs.set(e, t), It(t, [e]);
}
for (var Kl = 0; Kl < Ru.length; Kl++) {
  var Yl = Ru[Kl],
    Rd = Yl.toLowerCase(),
    Td = Yl[0].toUpperCase() + Yl.slice(1);
  gt(Rd, 'on' + Td);
}
gt(ks, 'onAnimationEnd');
gt(Ss, 'onAnimationIteration');
gt(xs, 'onAnimationStart');
gt('dblclick', 'onDoubleClick');
gt('focusin', 'onFocus');
gt('focusout', 'onBlur');
gt(Es, 'onTransitionEnd');
rn('onMouseEnter', ['mouseout', 'mouseover']);
rn('onMouseLeave', ['mouseout', 'mouseover']);
rn('onPointerEnter', ['pointerout', 'pointerover']);
rn('onPointerLeave', ['pointerout', 'pointerover']);
It(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
It(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
It('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
It(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
It(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
It(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Rn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  jd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Rn));
function Tu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Rf(r, t, void 0, e), (e.currentTarget = null);
}
function Ps(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Tu(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Tu(l, u, s), (o = a);
        }
    }
  }
  if (Wr) throw ((e = Co), (Wr = !1), (Co = null), e);
}
function U(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = new Set());
  var r = e + '__bubble';
  n.has(r) || (_s(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), _s(n, e, r, t);
}
var kr = '_reactListening' + Math.random().toString(36).slice(2);
function Yn(e) {
  if (!e[kr]) {
    (e[kr] = !0),
      Oa.forEach(function (n) {
        n !== 'selectionchange' && (jd.has(n) || Gl(n, !1, e), Gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || ((t[kr] = !0), Gl('selectionchange', !1, t));
  }
}
function _s(e, t, n, r) {
  switch (ss(t)) {
    case 1:
      var l = Qf;
      break;
    case 4:
      l = Kf;
      break;
    default:
      l = yi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Eo ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Ct(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Xa(function () {
    var s = o,
      p = hi(n),
      h = [];
    e: {
      var m = Cs.get(e);
      if (m !== void 0) {
        var k = ki,
          g = e;
        switch (e) {
          case 'keypress':
            if (zr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            k = ud;
            break;
          case 'focusin':
            (g = 'focus'), (k = Wl);
            break;
          case 'focusout':
            (g = 'blur'), (k = Wl);
            break;
          case 'beforeblur':
          case 'afterblur':
            k = Wl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            k = yu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            k = Xf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            k = cd;
            break;
          case ks:
          case Ss:
          case xs:
            k = qf;
            break;
          case Es:
            k = dd;
            break;
          case 'scroll':
            k = Yf;
            break;
          case 'wheel':
            k = hd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            k = ed;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            k = ku;
        }
        var y = (t & 4) !== 0,
          R = !y && e === 'scroll',
          f = y ? (m !== null ? m + 'Capture' : null) : m;
        y = [];
        for (var c = s, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = An(c, f)), v != null && y.push(Gn(c, v, d)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((m = new k(m, g, null, n, p)), h.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (k = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== So &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ct(g) || g[Ye]))
        )
          break e;
        if (
          (k || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          k
            ? ((g = n.relatedTarget || n.toElement),
              (k = s),
              (g = g ? Ct(g) : null),
              g !== null &&
                ((R = Mt(g)), g !== R || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((k = null), (g = s)),
          k !== g)
        ) {
          if (
            ((y = yu),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = ku),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (R = k == null ? m : Vt(k)),
            (d = g == null ? m : Vt(g)),
            (m = new y(v, c + 'leave', k, n, p)),
            (m.target = R),
            (m.relatedTarget = d),
            (v = null),
            Ct(p) === s &&
              ((y = new y(f, c + 'enter', g, n, p)),
              (y.target = d),
              (y.relatedTarget = R),
              (v = y)),
            (R = v),
            k && g)
          )
            t: {
              for (y = k, f = g, c = 0, d = y; d; d = Dt(d)) c++;
              for (d = 0, v = f; v; v = Dt(v)) d++;
              for (; 0 < c - d; ) (y = Dt(y)), c--;
              for (; 0 < d - c; ) (f = Dt(f)), d--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = Dt(y)), (f = Dt(f));
              }
              y = null;
            }
          else y = null;
          k !== null && ju(h, m, k, y, !1),
            g !== null && R !== null && ju(h, R, g, y, !0);
        }
      }
      e: {
        if (
          ((m = s ? Vt(s) : window),
          (k = m.nodeName && m.nodeName.toLowerCase()),
          k === 'select' || (k === 'input' && m.type === 'file'))
        )
          var x = Sd;
        else if (Eu(m))
          if (ms) x = Pd;
          else {
            x = Ed;
            var _ = xd;
          }
        else
          (k = m.nodeName) &&
            k.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (x = Cd);
        if (x && (x = x(e, s))) {
          hs(h, x, n, p);
          break e;
        }
        _ && _(e, m, s),
          e === 'focusout' &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === 'number' &&
            vo(m, 'number', m.value);
      }
      switch (((_ = s ? Vt(s) : window), e)) {
        case 'focusin':
          (Eu(_) || _.contentEditable === 'true') &&
            ((At = _), (Lo = s), (In = null));
          break;
        case 'focusout':
          In = Lo = At = null;
          break;
        case 'mousedown':
          Ro = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ro = !1), Lu(h, n, p);
          break;
        case 'selectionchange':
          if (Ld) break;
        case 'keydown':
        case 'keyup':
          Lu(h, n, p);
      }
      var N;
      if (xi)
        e: {
          switch (e) {
            case 'compositionstart':
              var L = 'onCompositionStart';
              break e;
            case 'compositionend':
              L = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              L = 'onCompositionUpdate';
              break e;
          }
          L = void 0;
        }
      else
        Bt
          ? ds(e, n) && (L = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (L = 'onCompositionStart');
      L &&
        (fs &&
          n.locale !== 'ko' &&
          (Bt || L !== 'onCompositionStart'
            ? L === 'onCompositionEnd' && Bt && (N = cs())
            : ((rt = p),
              (wi = 'value' in rt ? rt.value : rt.textContent),
              (Bt = !0))),
        (_ = Yr(s, L)),
        0 < _.length &&
          ((L = new wu(L, e, null, n, p)),
          h.push({ event: L, listeners: _ }),
          N ? (L.data = N) : ((N = ps(n)), N !== null && (L.data = N)))),
        (N = vd ? gd(e, n) : yd(e, n)) &&
          ((s = Yr(s, 'onBeforeInput')),
          0 < s.length &&
            ((p = new wu('onBeforeInput', 'beforeinput', null, n, p)),
            h.push({ event: p, listeners: s }),
            (p.data = N)));
    }
    Ps(h, t);
  });
}
function Gn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = An(e, n)),
      o != null && r.unshift(Gn(e, o, l)),
      (o = An(e, t)),
      o != null && r.push(Gn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = An(n, o)), a != null && i.unshift(Gn(n, a, u)))
        : l || ((a = An(n, o)), a != null && i.push(Gn(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var zd = /\r\n?/g,
  Od = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      zd,
      `
`
    )
    .replace(Od, '');
}
function Sr(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(w(425));
}
function Gr() {}
var To = null,
  jo = null;
function zo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Oo = typeof setTimeout == 'function' ? setTimeout : void 0,
  Id = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Ou = typeof Promise == 'function' ? Promise : void 0,
  Md =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Ou < 'u'
      ? function (e) {
          return Ou.resolve(null).then(e).catch(Dd);
        }
      : Oo;
function Dd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Hn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Iu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pn = Math.random().toString(36).slice(2),
  Fe = '__reactFiber$' + pn,
  Xn = '__reactProps$' + pn,
  Ye = '__reactContainer$' + pn,
  Io = '__reactEvents$' + pn,
  Ud = '__reactListeners$' + pn,
  Fd = '__reactHandles$' + pn;
function Ct(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Iu(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = Iu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ir(e) {
  return (
    (e = e[Fe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function yl(e) {
  return e[Xn] || null;
}
var Mo = [],
  Ht = -1;
function yt(e) {
  return { current: e };
}
function F(e) {
  0 > Ht || ((e.current = Mo[Ht]), (Mo[Ht] = null), Ht--);
}
function D(e, t) {
  Ht++, (Mo[Ht] = e.current), (e.current = t);
}
var vt = {},
  ie = yt(vt),
  pe = yt(!1),
  Rt = vt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Xr() {
  F(pe), F(ie);
}
function Mu(e, t, n) {
  if (ie.current !== vt) throw Error(w(168));
  D(ie, t), D(pe, n);
}
function Ns(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, xf(e) || 'Unknown', l));
  return W({}, n, r);
}
function Zr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Rt = ie.current),
    D(ie, e),
    D(pe, pe.current),
    !0
  );
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Ns(e, t, Rt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(ie),
      D(ie, e))
    : F(pe),
    D(pe, n);
}
var We = null,
  wl = !1,
  Jl = !1;
function Ls(e) {
  We === null ? (We = [e]) : We.push(e);
}
function $d(e) {
  (wl = !0), Ls(e);
}
function wt() {
  if (!Jl && We !== null) {
    Jl = !0;
    var e = 0,
      t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (wl = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), ba(mi, wt), l);
    } finally {
      (M = t), (Jl = !1);
    }
  }
  return null;
}
var Qt = [],
  Kt = 0,
  Jr = null,
  qr = 0,
  xe = [],
  Ee = 0,
  Tt = null,
  Ve = 1,
  He = '';
function xt(e, t) {
  (Qt[Kt++] = qr), (Qt[Kt++] = Jr), (Jr = e), (qr = t);
}
function Rs(e, t, n) {
  (xe[Ee++] = Ve), (xe[Ee++] = He), (xe[Ee++] = Tt), (Tt = e);
  var r = Ve;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ve = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = o + e);
  } else (Ve = (1 << o) | (n << l) | r), (He = e);
}
function Ci(e) {
  e.return !== null && (xt(e, 1), Rs(e, 1, 0));
}
function Pi(e) {
  for (; e === Jr; )
    (Jr = Qt[--Kt]), (Qt[Kt] = null), (qr = Qt[--Kt]), (Qt[Kt] = null);
  for (; e === Tt; )
    (Tt = xe[--Ee]),
      (xe[Ee] = null),
      (He = xe[--Ee]),
      (xe[Ee] = null),
      (Ve = xe[--Ee]),
      (xe[Ee] = null);
}
var ye = null,
  ge = null,
  $ = !1,
  ze = null;
function Ts(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Uo(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Uu(e, t)) {
        if (Do(e)) throw Error(w(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Uu(e, t)
          ? Ts(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (Do(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function xr(e) {
  if (e !== ye) return !1;
  if (!$) return Fu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !zo(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Do(e)) throw (js(), Error(w(418)));
    for (; t; ) Ts(e, t), (t = st(t.nextSibling));
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function js() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function on() {
  (ge = ye = null), ($ = !1);
}
function _i(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var Bd = Ze.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var br = yt(null),
  el = null,
  Yt = null,
  Ni = null;
function Li() {
  Ni = Yt = el = null;
}
function Ri(e) {
  var t = br.current;
  F(br), (e._currentValue = t);
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (el = e),
    (Ni = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (Ni !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (el === null) throw Error(w(308));
      (Yt = e), (el.dependencies = { lanes: 0, firstContext: e });
    } else Yt = Yt.next = e;
  return t;
}
var Pt = null;
function Ti(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function zs(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ti(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  );
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function ji(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Os(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ti(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function Or(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function tl(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
        (p.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (p = s = a = null), (u = o);
    do {
      var m = u.lane,
        k = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            y = u;
          switch (((m = t), (k = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == 'function')) {
                h = g.call(k, h, m);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (m = typeof g == 'function' ? g.call(k, h, m) : g),
                m == null)
              )
                break e;
              h = W({}, h, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (k = {
          eventTime: k,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = k), (a = h)) : (p = p.next = k),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (zt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Is = new za.Component().refs;
function $o(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = dt(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Ie(t, e, l, r), Or(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = dt(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Ie(t, e, l, r), Or(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = dt(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Ie(t, e, r, n), Or(t, e, r));
  },
};
function Au(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kn(n, r) || !Kn(l, o)
      : !0
  );
}
function Ms(e, t, n) {
  var r = !1,
    l = vt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = _e(o))
      : ((l = he(t) ? Rt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ln(e, l) : vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Wu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Bo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Is), ji(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = _e(o))
    : ((o = he(t) ? Rt : ie.current), (l.context = ln(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && ($o(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && kl.enqueueReplaceState(l, l.state, null),
      tl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Is && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Er(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Vu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ds(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = lo(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function a(f, c, d, v) {
    var x = d.type;
    return x === $t
      ? p(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === be &&
            Vu(x) === c.type))
      ? ((v = l(c, d.props)), (v.ref = En(f, c, d)), (v.return = f), v)
      : ((v = $r(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = En(f, c, d)),
        (v.return = f),
        v);
  }
  function s(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = oo(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, v, x) {
    return c === null || c.tag !== 7
      ? ((c = Lt(d, f.mode, v, x)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = lo('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case dr:
          return (
            (d = $r(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = En(f, null, c)),
            (d.return = f),
            d
          );
        case Ft:
          return (c = oo(c, f.mode, d)), (c.return = f), c;
        case be:
          var v = c._init;
          return h(f, v(c._payload), d);
      }
      if (Nn(c) || yn(c))
        return (c = Lt(c, f.mode, d, null)), (c.return = f), c;
      Er(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var x = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return x !== null ? null : u(f, c, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case dr:
          return d.key === x ? a(f, c, d, v) : null;
        case Ft:
          return d.key === x ? s(f, c, d, v) : null;
        case be:
          return (x = d._init), m(f, c, x(d._payload), v);
      }
      if (Nn(d) || yn(d)) return x !== null ? null : p(f, c, d, v, null);
      Er(f, d);
    }
    return null;
  }
  function k(f, c, d, v, x) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(c, f, '' + v, x);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case dr:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, x);
        case Ft:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, x);
        case be:
          var _ = v._init;
          return k(f, c, d, _(v._payload), x);
      }
      if (Nn(v) || yn(v)) return (f = f.get(d) || null), p(c, f, v, x, null);
      Er(c, v);
    }
    return null;
  }
  function g(f, c, d, v) {
    for (
      var x = null, _ = null, N = c, L = (c = 0), H = null;
      N !== null && L < d.length;
      L++
    ) {
      N.index > L ? ((H = N), (N = null)) : (H = N.sibling);
      var O = m(f, N, d[L], v);
      if (O === null) {
        N === null && (N = H);
        break;
      }
      e && N && O.alternate === null && t(f, N),
        (c = o(O, c, L)),
        _ === null ? (x = O) : (_.sibling = O),
        (_ = O),
        (N = H);
    }
    if (L === d.length) return n(f, N), $ && xt(f, L), x;
    if (N === null) {
      for (; L < d.length; L++)
        (N = h(f, d[L], v)),
          N !== null &&
            ((c = o(N, c, L)), _ === null ? (x = N) : (_.sibling = N), (_ = N));
      return $ && xt(f, L), x;
    }
    for (N = r(f, N); L < d.length; L++)
      (H = k(N, f, L, d[L], v)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? L : H.key),
          (c = o(H, c, L)),
          _ === null ? (x = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        N.forEach(function (Le) {
          return t(f, Le);
        }),
      $ && xt(f, L),
      x
    );
  }
  function y(f, c, d, v) {
    var x = yn(d);
    if (typeof x != 'function') throw Error(w(150));
    if (((d = x.call(d)), d == null)) throw Error(w(151));
    for (
      var _ = (x = null), N = c, L = (c = 0), H = null, O = d.next();
      N !== null && !O.done;
      L++, O = d.next()
    ) {
      N.index > L ? ((H = N), (N = null)) : (H = N.sibling);
      var Le = m(f, N, O.value, v);
      if (Le === null) {
        N === null && (N = H);
        break;
      }
      e && N && Le.alternate === null && t(f, N),
        (c = o(Le, c, L)),
        _ === null ? (x = Le) : (_.sibling = Le),
        (_ = Le),
        (N = H);
    }
    if (O.done) return n(f, N), $ && xt(f, L), x;
    if (N === null) {
      for (; !O.done; L++, O = d.next())
        (O = h(f, O.value, v)),
          O !== null &&
            ((c = o(O, c, L)), _ === null ? (x = O) : (_.sibling = O), (_ = O));
      return $ && xt(f, L), x;
    }
    for (N = r(f, N); !O.done; L++, O = d.next())
      (O = k(N, f, L, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? L : O.key),
          (c = o(O, c, L)),
          _ === null ? (x = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        N.forEach(function (vn) {
          return t(f, vn);
        }),
      $ && xt(f, L),
      x
    );
  }
  function R(f, c, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === $t &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case dr:
          e: {
            for (var x = d.key, _ = c; _ !== null; ) {
              if (_.key === x) {
                if (((x = d.type), x === $t)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = l(_, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === be &&
                    Vu(x) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = l(_, d.props)),
                    (c.ref = En(f, _, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === $t
              ? ((c = Lt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = $r(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = En(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Ft:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = oo(d, f.mode, v)), (c.return = f), (f = c);
          }
          return i(f);
        case be:
          return (_ = d._init), R(f, c, _(d._payload), v);
      }
      if (Nn(d)) return g(f, c, d, v);
      if (yn(d)) return y(f, c, d, v);
      Er(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = lo(d, f.mode, v)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return R;
}
var un = Ds(!0),
  Us = Ds(!1),
  ur = {},
  Be = yt(ur),
  Zn = yt(ur),
  Jn = yt(ur);
function _t(e) {
  if (e === ur) throw Error(w(174));
  return e;
}
function zi(e, t) {
  switch ((D(Jn, t), D(Zn, e), D(Be, ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yo(t, e));
  }
  F(Be), D(Be, t);
}
function an() {
  F(Be), F(Zn), F(Jn);
}
function Fs(e) {
  _t(Jn.current);
  var t = _t(Be.current),
    n = yo(t, e.type);
  t !== n && (D(Zn, e), D(Be, n));
}
function Oi(e) {
  Zn.current === e && (F(Be), F(Zn));
}
var B = yt(0);
function nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function Ii() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Ir = Ze.ReactCurrentDispatcher,
  bl = Ze.ReactCurrentBatchConfig,
  jt = 0,
  A = null,
  X = null,
  q = null,
  rl = !1,
  Mn = !1,
  qn = 0,
  Ad = 0;
function re() {
  throw Error(w(321));
}
function Mi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Di(e, t, n, r, l, o) {
  if (
    ((jt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ir.current = e === null || e.memoizedState === null ? Qd : Kd),
    (e = n(r, l)),
    Mn)
  ) {
    o = 0;
    do {
      if (((Mn = !1), (qn = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Ir.current = Yd),
        (e = n(r, l));
    } while (Mn);
  }
  if (
    ((Ir.current = ll),
    (t = X !== null && X.next !== null),
    (jt = 0),
    (q = X = A = null),
    (rl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Ui() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Ne() {
  if (X === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (X = e);
  else {
    if (e === null) throw Error(w(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function bn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function eo(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var p = s.lane;
      if ((jt & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (A.lanes |= p),
          (zt |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (zt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (de = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function $s() {}
function Bs(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Fi(Vs.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, Ws.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(w(349));
    jt & 30 || As(n, t, l);
  }
  return l;
}
function As(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ws(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Hs(t) && Qs(e);
}
function Vs(e, t, n) {
  return n(function () {
    Hs(t) && Qs(e);
  });
}
function Hs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Qs(e) {
  var t = Ge(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Hu(e) {
  var t = Ue();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ks() {
  return Ne().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Ue();
  (A.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function Sl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Mi(r, i.deps))) {
      l.memoizedState = er(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = er(1 | t, n, o, r));
}
function Qu(e, t) {
  return Mr(8390656, 8, e, t);
}
function Fi(e, t) {
  return Sl(2048, 8, e, t);
}
function Ys(e, t) {
  return Sl(4, 2, e, t);
}
function Gs(e, t) {
  return Sl(4, 4, e, t);
}
function Xs(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zs(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Sl(4, 4, Xs.bind(null, t, e), n)
  );
}
function $i() {}
function Js(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qs(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bs(e, t, n) {
  return jt & 21
    ? (Me(n, t) || ((n = ns()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Wd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (bl.transition = r);
  }
}
function ec() {
  return Ne().memoizedState;
}
function Vd(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tc(e))
  )
    nc(t, n);
  else if (((n = zs(e, t, n, r)), n !== null)) {
    var l = ae();
    Ie(n, e, r, l), rc(n, t, r);
  }
}
function Hd(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tc(e)) nc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Ti(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = zs(e, t, l, r)),
      n !== null && ((l = ae()), Ie(n, e, r, l), rc(n, t, r));
  }
}
function tc(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function nc(e, t) {
  Mn = rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
  }
}
var ll = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Qd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, Xs.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hu,
    useDebugValue: $i,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Hu(!1),
        t = e[0];
      return (e = Wd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Ue();
      if ($) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(w(349));
        jt & 30 || As(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Qu(Vs.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        er(9, Ws.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = Ve;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ad++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kd = {
    readContext: _e,
    useCallback: Js,
    useContext: _e,
    useEffect: Fi,
    useImperativeHandle: Zs,
    useInsertionEffect: Ys,
    useLayoutEffect: Gs,
    useMemo: qs,
    useReducer: eo,
    useRef: Ks,
    useState: function () {
      return eo(bn);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Ne();
      return bs(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(bn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: $s,
    useSyncExternalStore: Bs,
    useId: ec,
    unstable_isNewReconciler: !1,
  },
  Yd = {
    readContext: _e,
    useCallback: Js,
    useContext: _e,
    useEffect: Fi,
    useImperativeHandle: Zs,
    useInsertionEffect: Ys,
    useLayoutEffect: Gs,
    useMemo: qs,
    useReducer: to,
    useRef: Ks,
    useState: function () {
      return to(bn);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Ne();
      return X === null ? (t.memoizedState = e) : bs(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = to(bn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: $s,
    useSyncExternalStore: Bs,
    useId: ec,
    unstable_isNewReconciler: !1,
  };
function sn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Sf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gd = typeof WeakMap == 'function' ? WeakMap : Map;
function lc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      il || ((il = !0), (Jo = r)), Ao(e, t);
    }),
    n
  );
}
function oc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ao(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ao(e, t),
          typeof r != 'function' &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Ku(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ap.bind(null, e, t, n)), t.then(e, e));
}
function Yu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xd = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Us(t, null, n, r) : un(t, e.child, n, r);
}
function Xu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    en(t, l),
    (r = Di(e, t, n, r, o, l)),
    (n = Ui()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && n && Ci(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Zu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Yi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ic(e, t, o, r, l))
      : ((e = $r(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kn), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ic(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Kn(o, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Wo(e, t, n, r, l);
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Xt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Xt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Xt, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Xt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function ac(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Wo(e, t, n, r, l) {
  var o = he(n) ? Rt : ie.current;
  return (
    (o = ln(t, o)),
    en(t, l),
    (n = Di(e, t, n, r, o, l)),
    (r = Ui()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && r && Ci(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Ju(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Zr(t);
  } else o = !1;
  if ((en(t, l), t.stateNode === null))
    Dr(e, t), Ms(t, n, r), Bo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = _e(s))
      : ((s = he(n) ? Rt : ie.current), (s = ln(t, s)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || a !== s) && Wu(t, i, r, s)),
      (et = !1);
    var m = t.memoizedState;
    (i.state = m),
      tl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || m !== a || pe.current || et
        ? (typeof p == 'function' && ($o(t, n, p, r), (a = t.memoizedState)),
          (u = et || Au(t, n, u, r, m, a, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Os(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Te(t.type, u)),
      (i.props = s),
      (h = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = _e(a))
        : ((a = he(n) ? Rt : ie.current), (a = ln(t, a)));
    var k = n.getDerivedStateFromProps;
    (p =
      typeof k == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== h || m !== a) && Wu(t, i, r, a)),
      (et = !1),
      (m = t.memoizedState),
      (i.state = m),
      tl(t, r, i, l);
    var g = t.memoizedState;
    u !== h || m !== g || pe.current || et
      ? (typeof k == 'function' && ($o(t, n, k, r), (g = t.memoizedState)),
        (s = et || Au(t, n, s, r, m, g, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, g, a),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, g, a)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vo(e, t, n, r, o, l);
}
function Vo(e, t, n, r, l, o) {
  ac(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Du(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (Xd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = un(t, e.child, null, o)), (t.child = un(t, null, u, o)))
      : ue(e, t, u, o),
    (t.memoizedState = r.state),
    l && Du(t, n, !0),
    t.child
  );
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Mu(e, t.context, !1),
    zi(e, t.containerInfo);
}
function qu(e, t, n, r, l) {
  return on(), _i(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      Uo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Cl(i, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Qo(n)),
              (t.memoizedState = Ho),
              e)
            : Bi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Zd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = pt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = pt(u, o)) : ((o = Lt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Qo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ho),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bi(e, t) {
  return (
    (t = Cl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && _i(r),
    un(t, e.child, null, n),
    (e = Bi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Zd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = no(Error(w(422)))), Cr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Cl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = Lt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && un(t, e.child, null, i),
        (t.child.memoizedState = Qo(i)),
        (t.memoizedState = Ho),
        o);
  if (!(t.mode & 1)) return Cr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = no(o, r, void 0)), Cr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ge(e, l), Ie(r, e, l, -1));
    }
    return Ki(), (r = no(Error(w(421)))), Cr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ge = st(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (ze = null),
      e !== null &&
        ((xe[Ee++] = Ve),
        (xe[Ee++] = He),
        (xe[Ee++] = Tt),
        (Ve = e.id),
        (He = e.overflow),
        (Tt = t)),
      (t = Bi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function ro(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
        else if (e.tag === 19) bu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && nl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ro(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && nl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ro(t, !0, n, null, o);
        break;
      case 'together':
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jd(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), on();
      break;
    case 5:
      Fs(t);
      break;
    case 1:
      he(t.type) && Zr(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(br, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? cc(e, t, n)
          : (D(B, B.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uc(e, t, n);
  }
  return Xe(e, t, n);
}
var dc, Ko, pc, hc;
dc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ko = function () {};
pc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Be.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = ho(e, l)), (r = ho(e, r)), (o = []);
        break;
      case 'select':
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = go(e, l)), (r = go(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Gr);
    }
    wo(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            ($n.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              ($n.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && U('scroll', e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
hc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qd(e, t, n) {
  var r = t.pendingProps;
  switch ((Pi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Xr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        F(pe),
        F(ie),
        Ii(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (ei(ze), (ze = null)))),
        Ko(e, t),
        le(t),
        null
      );
    case 5:
      Oi(t);
      var l = _t(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return le(t), null;
        }
        if (((e = _t(Be.current)), xr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Fe] = t), (r[Xn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              U('cancel', r), U('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              U('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Rn.length; l++) U(Rn[l], r);
              break;
            case 'source':
              U('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              U('error', r), U('load', r);
              break;
            case 'details':
              U('toggle', r);
              break;
            case 'input':
              au(r, o), U('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U('invalid', r);
              break;
            case 'textarea':
              cu(r, o), U('invalid', r);
          }
          wo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : $n.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  U('scroll', r);
            }
          switch (n) {
            case 'input':
              pr(r), su(r, o, !0);
              break;
            case 'textarea':
              pr(r), fu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Gr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Aa(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Fe] = t),
            (e[Xn] = r),
            dc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ko(n, r)), n)) {
              case 'dialog':
                U('cancel', e), U('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                U('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Rn.length; l++) U(Rn[l], e);
                l = r;
                break;
              case 'source':
                U('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                U('error', e), U('load', e), (l = r);
                break;
              case 'details':
                U('toggle', e), (l = r);
                break;
              case 'input':
                au(e, r), (l = ho(e, r)), U('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  U('invalid', e);
                break;
              case 'textarea':
                cu(e, r), (l = go(e, r)), U('invalid', e);
                break;
              default:
                l = r;
            }
            wo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === 'style'
                  ? Ha(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && Wa(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Bn(e, a)
                    : typeof a == 'number' && Bn(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    ($n.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && U('scroll', e)
                      : a != null && ci(e, o, a, i));
              }
            switch (n) {
              case 'input':
                pr(e), su(e, r, !1);
                break;
              case 'textarea':
                pr(e), fu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + mt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Zt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Gr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(w(166));
        if (((n = _t(Jn.current)), _t(Be.current), xr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Sr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          js(), on(), (t.flags |= 98560), (o = !1);
        else if (((o = xr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[Fe] = t;
          } else
            on(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else ze !== null && (ei(ze), (ze = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Ki())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(), Ko(e, t), e === null && Yn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Ri(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Xr(), le(t), null;
    case 19:
      if ((F(B), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Cn(o, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = nl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Cn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > cn &&
            ((t.flags |= 128), (r = !0), Cn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = nl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - o.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Qi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function bd(e, t) {
  switch ((Pi(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Xr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        F(pe),
        F(ie),
        Ii(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Oi(t), null;
    case 13:
      if ((F(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        on();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(B), null;
    case 4:
      return an(), null;
    case 10:
      return Ri(t.type._context), null;
    case 22:
    case 23:
      return Qi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1,
  oe = !1,
  ep = typeof WeakSet == 'function' ? WeakSet : Set,
  E = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Yo(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var ea = !1;
function tp(e, t) {
  if (((To = Qr), (e = ys()), Ei(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var k;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (k = h.firstChild) !== null;

            )
              (m = h), (h = k);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++s === l && (u = i),
                m === o && ++p === r && (a = i),
                (k = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = k;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jo = { focusedElem: e, selectionRange: n }, Qr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    R = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Te(t.type, y),
                      R
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (v) {
          V(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (g = ea), (ea = !1), g;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Yo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function xl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Go(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function mc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Xn], delete t[Io], delete t[Ud], delete t[Fd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ta(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), (e = e.sibling);
}
function Zo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zo(e, t, n), e = e.sibling; e !== null; ) Zo(e, t, n), (e = e.sibling);
}
var ee = null,
  je = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) gc(e, t, n), (n = n.sibling);
}
function gc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == 'function')
    try {
      $e.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Gt(n, t);
    case 6:
      var r = ee,
        l = je;
      (ee = null),
        qe(e, t, n),
        (ee = r),
        (je = l),
        ee !== null &&
          (je
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (je
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            Hn(e))
          : Zl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = je),
        (ee = n.stateNode.containerInfo),
        (je = !0),
        qe(e, t, n),
        (ee = r),
        (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Yo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), qe(e, t, n), (oe = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function na(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ep()),
      t.forEach(function (r) {
        var l = cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (je = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(w(160));
        gc(o, i, l), (ee = null), (je = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        V(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yc(t, e), (t = t.sibling);
}
function yc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), De(e), r & 4)) {
        try {
          Dn(3, e, e.return), xl(3, e);
        } catch (y) {
          V(e, e.return, y);
        }
        try {
          Dn(5, e, e.return);
        } catch (y) {
          V(e, e.return, y);
        }
      }
      break;
    case 1:
      Re(t, e), De(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        De(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Bn(l, '');
        } catch (y) {
          V(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && $a(l, o),
              ko(u, i);
            var s = ko(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                h = a[i + 1];
              p === 'style'
                ? Ha(l, h)
                : p === 'dangerouslySetInnerHTML'
                ? Wa(l, h)
                : p === 'children'
                ? Bn(l, h)
                : ci(l, p, h, s);
            }
            switch (u) {
              case 'input':
                mo(l, o);
                break;
              case 'textarea':
                Ba(l, o);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? Zt(l, !!o.multiple, k, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Zt(l, !!o.multiple, o.defaultValue, !0)
                      : Zt(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Xn] = o;
          } catch (y) {
            V(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Re(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          V(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (y) {
          V(e, e.return, y);
        }
      break;
    case 4:
      Re(t, e), De(e);
      break;
    case 13:
      Re(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Vi = K())),
        r & 4 && na(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (s = oe) || p), Re(t, e), (oe = s)) : Re(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (E = e, p = e.child; p !== null; ) {
            for (h = E = p; E !== null; ) {
              switch (((m = E), (k = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, m, m.return);
                  break;
                case 1:
                  Gt(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      V(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Gt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    la(h);
                    continue;
                  }
              }
              k !== null ? ((k.return = m), (E = k)) : la(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (u.style.display = Va('display', i)));
              } catch (y) {
                V(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = s ? '' : h.memoizedProps;
              } catch (y) {
                V(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), De(e), r & 4 && na(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ''), (r.flags &= -33));
          var o = ta(e);
          Zo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ta(e);
          Xo(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      V(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function np(e, t, n) {
  (E = e), wc(e);
}
function wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pr;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || oe;
        u = Pr;
        var s = oe;
        if (((Pr = i), (oe = a) && !s))
          for (E = l; E !== null; )
            (i = E),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? oa(l)
                : a !== null
                ? ((a.return = i), (E = a))
                : oa(l);
        for (; o !== null; ) (E = o), wc(o), (o = o.sibling);
        (E = l), (Pr = u), (oe = s);
      }
      ra(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : ra(e);
  }
}
function ra(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Bu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Hn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        oe || (t.flags & 512 && Go(t));
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function la(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function oa(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xl(4, t);
          } catch (a) {
            V(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              V(t, l, a);
            }
          }
          var o = t.return;
          try {
            Go(t);
          } catch (a) {
            V(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Go(t);
          } catch (a) {
            V(t, i, a);
          }
      }
    } catch (a) {
      V(t, t.return, a);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var rp = Math.ceil,
  ol = Ze.ReactCurrentDispatcher,
  Ai = Ze.ReactCurrentOwner,
  Pe = Ze.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Xt = yt(0),
  Z = 0,
  tr = null,
  zt = 0,
  El = 0,
  Wi = 0,
  Un = null,
  fe = null,
  Vi = 0,
  cn = 1 / 0,
  Ae = null,
  il = !1,
  Jo = null,
  ft = null,
  _r = !1,
  lt = null,
  ul = 0,
  Fn = 0,
  qo = null,
  Ur = -1,
  Fr = 0;
function ae() {
  return I & 6 ? K() : Ur !== -1 ? Ur : (Ur = K());
}
function dt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Bd.transition !== null
      ? (Fr === 0 && (Fr = ns()), Fr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ss(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Fn) throw ((Fn = 0), (qo = null), Error(w(185)));
  lr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (El |= n), Z === 4 && nt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((cn = K() + 500), wl && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Bf(e, t);
  var r = Hr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hu(n), t === 1))
      e.tag === 0 ? $d(ia.bind(null, e)) : Ls(ia.bind(null, e)),
        Md(function () {
          !(I & 6) && wt();
        }),
        (n = null);
    else {
      switch (rs(r)) {
        case 1:
          n = mi;
          break;
        case 4:
          n = es;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = ts;
          break;
        default:
          n = Vr;
      }
      n = Nc(n, kc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kc(e, t) {
  if (((Ur = -1), (Fr = 0), I & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Hr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = xc();
    (b !== e || te !== t) && ((Ae = null), (cn = K() + 500), Nt(e, t));
    do
      try {
        ip();
        break;
      } catch (u) {
        Sc(e, u);
      }
    while (1);
    Li(),
      (ol.current = o),
      (I = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Po(e)), l !== 0 && ((r = l), (t = bo(e, l)))), t === 1)
    )
      throw ((n = tr), Nt(e, 0), nt(e, r), me(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !lp(l) &&
          ((t = al(e, r)),
          t === 2 && ((o = Po(e)), o !== 0 && ((r = o), (t = bo(e, o)))),
          t === 1))
      )
        throw ((n = tr), Nt(e, 0), nt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Et(e, fe, Ae);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Vi + 500 - K()), 10 < t))
          ) {
            if (Hr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Oo(Et.bind(null, e, fe, Ae), t);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oo(Et.bind(null, e, fe, Ae), r);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 5:
          Et(e, fe, Ae);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? kc.bind(null, e) : null;
}
function bo(e, t) {
  var n = Un;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && ei(t)),
    e
  );
}
function ei(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Wi,
      t &= ~El,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ia(e) {
  if (I & 6) throw Error(w(327));
  tn();
  var t = Hr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Po(e);
    r !== 0 && ((t = r), (n = bo(e, r)));
  }
  if (n === 1) throw ((n = tr), Nt(e, 0), nt(e, t), me(e, K()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, Ae),
    me(e, K()),
    null
  );
}
function Hi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((cn = K() + 500), wl && wt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(I & 6) && tn();
  var t = I;
  I |= 1;
  var n = Pe.transition,
    r = M;
  try {
    if (((Pe.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Pe.transition = n), (I = t), !(I & 6) && wt();
  }
}
function Qi() {
  (ve = Xt.current), F(Xt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Id(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Pi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xr();
          break;
        case 3:
          an(), F(pe), F(ie), Ii();
          break;
        case 5:
          Oi(r);
          break;
        case 4:
          an();
          break;
        case 13:
          F(B);
          break;
        case 19:
          F(B);
          break;
        case 10:
          Ri(r.type._context);
          break;
        case 22:
        case 23:
          Qi();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = pt(e.current, null)),
    (te = ve = t),
    (Z = 0),
    (tr = null),
    (Wi = El = zt = 0),
    (fe = Un = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function Sc(e, t) {
  do {
    var n = Y;
    try {
      if ((Li(), (Ir.current = ll), rl)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        rl = !1;
      }
      if (
        ((jt = 0),
        (q = X = A = null),
        (Mn = !1),
        (qn = 0),
        (Ai.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (tr = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var k = Yu(i);
          if (k !== null) {
            (k.flags &= -257),
              Gu(k, i, u, o, t),
              k.mode & 1 && Ku(o, s, t),
              (t = k),
              (a = s);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ku(o, s, t), Ki();
              break e;
            }
            a = Error(w(426));
          }
        } else if ($ && u.mode & 1) {
          var R = Yu(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Gu(R, i, u, o, t),
              _i(sn(a, u));
            break e;
          }
        }
        (o = a = sn(a, u)),
          Z !== 4 && (Z = 2),
          Un === null ? (Un = [o]) : Un.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = lc(o, a, t);
              $u(o, f);
              break e;
            case 1:
              u = a;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ft === null || !ft.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = oc(o, u, t);
                $u(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Cc(n);
    } catch (x) {
      (t = x), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xc() {
  var e = ol.current;
  return (ol.current = ll), e === null ? ll : e;
}
function Ki() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(zt & 268435455) && !(El & 268435455)) || nt(b, te);
}
function al(e, t) {
  var n = I;
  I |= 2;
  var r = xc();
  (b !== e || te !== t) && ((Ae = null), Nt(e, t));
  do
    try {
      op();
      break;
    } catch (l) {
      Sc(e, l);
    }
  while (1);
  if ((Li(), (I = n), (ol.current = r), Y !== null)) throw Error(w(261));
  return (b = null), (te = 0), Z;
}
function op() {
  for (; Y !== null; ) Ec(Y);
}
function ip() {
  for (; Y !== null && !jf(); ) Ec(Y);
}
function Ec(e) {
  var t = _c(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Cc(e) : (Y = t),
    (Ai.current = null);
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    } else if (((n = qd(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Et(e, t, n) {
  var r = M,
    l = Pe.transition;
  try {
    (Pe.transition = null), (M = 1), up(e, t, n, r);
  } finally {
    (Pe.transition = l), (M = r);
  }
  return null;
}
function up(e, t, n, r) {
  do tn();
  while (lt !== null);
  if (I & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Af(e, o),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _r ||
      ((_r = !0),
      Nc(Vr, function () {
        return tn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Pe.transition), (Pe.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ai.current = null),
      tp(e, n),
      yc(n, e),
      Nd(jo),
      (Qr = !!To),
      (jo = To = null),
      (e.current = n),
      np(n),
      zf(),
      (I = u),
      (M = i),
      (Pe.transition = o);
  } else e.current = n;
  if (
    (_r && ((_r = !1), (lt = e), (ul = l)),
    (o = e.pendingLanes),
    o === 0 && (ft = null),
    Mf(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw ((il = !1), (e = Jo), (Jo = null), e);
  return (
    ul & 1 && e.tag !== 0 && tn(),
    (o = e.pendingLanes),
    o & 1 ? (e === qo ? Fn++ : ((Fn = 0), (qo = e))) : (Fn = 0),
    wt(),
    null
  );
}
function tn() {
  if (lt !== null) {
    var e = rs(ul),
      t = Pe.transition,
      n = M;
    try {
      if (((Pe.transition = null), (M = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (ul = 0), I & 6)) throw Error(w(331));
        var l = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (E = s; E !== null; ) {
                  var p = E;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (E = h);
                  else
                    for (; E !== null; ) {
                      p = E;
                      var m = p.sibling,
                        k = p.return;
                      if ((mc(p), p === s)) {
                        E = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = k), (E = m);
                        break;
                      }
                      E = k;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var R = y.sibling;
                    (y.sibling = null), (y = R);
                  } while (y !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xl(9, u);
                  }
                } catch (x) {
                  V(u, u.return, x);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (E = v);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((I = l), wt(), $e && typeof $e.onPostCommitFiberRoot == 'function')
        )
          try {
            $e.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Pe.transition = t);
    }
  }
  return !1;
}
function ua(e, t, n) {
  (t = sn(n, t)),
    (t = lc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ae()),
    e !== null && (lr(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) ua(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ua(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ft === null || !ft.has(r)))
        ) {
          (e = sn(n, e)),
            (e = oc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ae()),
            t !== null && (lr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ap(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > K() - Vi)
        ? Nt(e, 0)
        : (Wi |= n)),
    me(e, t);
}
function Pc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Ge(e, t)), e !== null && (lr(e, t, n), me(e, n));
}
function sp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pc(e, n);
}
function cp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Pc(e, n);
}
var _c;
_c = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Jd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Rs(t, qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dr(e, t), (e = t.pendingProps);
      var l = ln(t, ie.current);
      en(t, n), (l = Di(null, t, r, e, l, n));
      var o = Ui();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((o = !0), Zr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ji(t),
            (l.updater = kl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Bo(t, r, e, n),
            (t = Vo(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && Ci(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = dp(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Wo(null, t, r, e, n);
            break e;
          case 1:
            t = Ju(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Zu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Wo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ju(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((sc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Os(e, t),
          tl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = sn(Error(w(423)), t)), (t = qu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sn(Error(w(424)), t)), (t = qu(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                ze = null,
                n = Us(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((on(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fs(t),
        e === null && Uo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        zo(r, l) ? (i = null) : o !== null && zo(r, o) && (t.flags |= 32),
        ac(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Uo(t), null;
    case 13:
      return cc(e, t, n);
    case 4:
      return (
        zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Xu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(br, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Qe(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Fo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Fo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Zu(e, t, r, l, n)
      );
    case 15:
      return ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Dr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Zr(t)) : (e = !1),
        en(t, n),
        Ms(t, r, l),
        Bo(t, r, l, n),
        Vo(null, t, r, !0, e, n)
      );
    case 19:
      return fc(e, t, n);
    case 22:
      return uc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Nc(e, t) {
  return ba(e, t);
}
function fp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new fp(e, t, n, r);
}
function Yi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dp(e) {
  if (typeof e == 'function') return Yi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === di)) return 11;
    if (e === pi) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $r(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Yi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case $t:
        return Lt(n.children, l, o, t);
      case fi:
        (i = 8), (l |= 8);
        break;
      case so:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = so), (e.lanes = o), e
        );
      case co:
        return (e = Ce(13, n, t, l)), (e.elementType = co), (e.lanes = o), e;
      case fo:
        return (e = Ce(19, n, t, l)), (e.elementType = fo), (e.lanes = o), e;
      case Da:
        return Cl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ia:
              i = 10;
              break e;
            case Ma:
              i = 9;
              break e;
            case di:
              i = 11;
              break e;
            case pi:
              i = 14;
              break e;
            case be:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Da),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function lo(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function oo(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Gi(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new pp(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ji(o),
    e
  );
}
function hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Ns(e, n, t);
  }
  return t;
}
function Rc(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Gi(n, r, !0, e, l, o, i, u, a)),
    (e.context = Lc(null)),
    (n = e.current),
    (r = ae()),
    (l = dt(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    ct(n, o, l),
    (e.current.lanes = l),
    lr(e, l, r),
    me(e, r),
    e
  );
}
function Pl(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = dt(l);
  return (
    (n = Lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, i)),
    e !== null && (Ie(e, l, i, o), Or(e, l, i)),
    i
  );
}
function sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function aa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xi(e, t) {
  aa(e, t), (e = e.alternate) && aa(e, t);
}
function mp() {
  return null;
}
var Tc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zi(e) {
  this._internalRoot = e;
}
_l.prototype.render = Zi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Pl(e, t, null, null);
};
_l.prototype.unmount = Zi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      Pl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = is();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && as(e);
  }
};
function Ji(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function sa() {}
function vp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = sl(i);
        o.call(s);
      };
    }
    var i = Rc(t, r, e, 0, null, !1, !1, '', sa);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Yn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var s = sl(a);
      u.call(s);
    };
  }
  var a = Gi(e, 0, !1, null, null, !1, !1, '', sa);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      Pl(t, a, n, r);
    }),
    a
  );
}
function Ll(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var a = sl(i);
        u.call(a);
      };
    }
    Pl(t, i, e, l);
  } else i = vp(n, t, e, l, r);
  return sl(i);
}
ls = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (vi(t, n | 1), me(t, K()), !(I & 6) && ((cn = K() + 500), wt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ae();
          Ie(r, e, 1, l);
        }
      }),
        Xi(e, 1);
  }
};
gi = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ae();
      Ie(t, e, 134217728, n);
    }
    Xi(e, 134217728);
  }
};
os = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = ae();
      Ie(n, e, t, r);
    }
    Xi(e, t);
  }
};
is = function () {
  return M;
};
us = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
xo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((mo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(w(90));
            Fa(r), mo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Ba(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Ya = Hi;
Ga = Ot;
var gp = { usingClientEntryPoint: !1, Events: [ir, Vt, yl, Qa, Ka, Hi] },
  Pn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  yp = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ja(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || mp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nr.isDisabled && Nr.supportsFiber)
    try {
      (hl = Nr.inject(yp)), ($e = Nr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ji(t)) throw Error(w(200));
  return hp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Ji(e)) throw Error(w(299));
  var n = !1,
    r = '',
    l = Tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Gi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    new Zi(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(w(188))
      : ((e = Object.keys(e).join(',')), Error(w(268, e)));
  return (e = Ja(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Ot(e);
};
ke.hydrate = function (e, t, n) {
  if (!Nl(t)) throw Error(w(200));
  return Ll(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Ji(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Rc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Yn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _l(t);
};
ke.render = function (e, t, n) {
  if (!Nl(t)) throw Error(w(200));
  return Ll(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Hi;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Ll(e, t, n, !1, r);
};
ke.version = '18.2.0-next-9e3b772b8-20220608';
function jc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc);
    } catch (e) {
      console.error(e);
    }
}
jc(), (Ra.exports = ke);
var wp = Ra.exports,
  ca = wp;
(uo.createRoot = ca.createRoot), (uo.hydrateRoot = ca.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
var ot;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ot || (ot = {}));
const fa = 'popstate';
function kp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ti(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : cl(l);
  }
  return xp(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function qi(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sp() {
  return Math.random().toString(36).substr(2, 8);
}
function da(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ti(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? hn(t) : t,
      { state: n, key: (t && t.key) || r || Sp() }
    )
  );
}
function cl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function hn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ot.Pop,
    a = null,
    s = p();
  s == null && ((s = 0), i.replaceState(nr({}, i.state, { idx: s }), ''));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = ot.Pop;
    let R = p(),
      f = R == null ? null : R - s;
    (s = R), a && a({ action: u, location: y.location, delta: f });
  }
  function m(R, f) {
    u = ot.Push;
    let c = ti(y.location, R, f);
    n && n(c, R), (s = p() + 1);
    let d = da(c, s),
      v = y.createHref(c);
    try {
      i.pushState(d, '', v);
    } catch (x) {
      if (x instanceof DOMException && x.name === 'DataCloneError') throw x;
      l.location.assign(v);
    }
    o && a && a({ action: u, location: y.location, delta: 1 });
  }
  function k(R, f) {
    u = ot.Replace;
    let c = ti(y.location, R, f);
    n && n(c, R), (s = p());
    let d = da(c, s),
      v = y.createHref(c);
    i.replaceState(d, '', v),
      o && a && a({ action: u, location: y.location, delta: 0 });
  }
  function g(R) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof R == 'string' ? R : cl(R);
    return (
      G(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(fa, h),
        (a = R),
        () => {
          l.removeEventListener(fa, h), (a = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: g,
    encodeLocation(R) {
      let f = g(R);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: k,
    go(R) {
      return i.go(R);
    },
  };
  return y;
}
var pa;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(pa || (pa = {}));
function Ep(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? hn(t) : t,
    l = bi(r.pathname || '/', n);
  if (l == null) return null;
  let o = zc(e);
  Cp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Op(o[u], Dp(l));
  return i;
}
function zc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith('/') &&
      (G(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = ht([r, a.relativePath]),
      p = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      zc(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: jp(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let a of Oc(o.path)) l(o, i, a);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Oc(r.join('/')),
    u = [];
  return (
    u.push(...i.map((a) => (a === '' ? o : [o, a].join('/')))),
    l && u.push(...i),
    u.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function Cp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : zp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Pp = /^:\w+$/,
  _p = 3,
  Np = 2,
  Lp = 1,
  Rp = 10,
  Tp = -2,
  ha = (e) => e === '*';
function jp(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ha) && (r += Tp),
    t && (r += Np),
    n
      .filter((l) => !ha(l))
      .reduce((l, o) => l + (Pp.test(o) ? _p : o === '' ? Lp : Rp), r)
  );
}
function zp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Op(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === '/' ? t : t.slice(l.length) || '/',
      p = Ip(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: ht([l, p.pathname]),
      pathnameBase: Bp(ht([l, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== '/' && (l = ht([l, p.pathnameBase]));
  }
  return o;
}
function Ip(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, h) => {
      if (p === '*') {
        let m = u[h] || '';
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, '$1');
      }
      return (s[p] = Up(u[h] || '', p)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Mp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    qi(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Dp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      qi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Up(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      qi(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function bi(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Fp(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? hn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : $p(n, t)) : t,
    search: Ap(r),
    hash: Wp(l),
  };
}
function $p(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function io(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ic(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Mc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = hn(e))
    : ((l = nr({}, e)),
      G(
        !l.pathname || !l.pathname.includes('?'),
        io('?', 'pathname', 'search', l)
      ),
      G(
        !l.pathname || !l.pathname.includes('#'),
        io('#', 'pathname', 'hash', l)
      ),
      G(!l.search || !l.search.includes('#'), io('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (h -= 1);
      l.pathname = m.join('/');
    }
    u = h >= 0 ? t[h] : '/';
  }
  let a = Fp(l, u),
    s = i && i !== '/' && i.endsWith('/'),
    p = (o || i === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || p) && (a.pathname += '/'), a;
}
const ht = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Bp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ap = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Wp = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Vp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Dc = ['post', 'put', 'patch', 'delete'];
new Set(Dc);
const Hp = ['get', ...Dc];
new Set(Hp);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
const eu = S.createContext(null),
  Qp = S.createContext(null),
  mn = S.createContext(null),
  Rl = S.createContext(null),
  Je = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Uc = S.createContext(null);
function Kp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ar() || G(!1);
  let { basename: r, navigator: l } = S.useContext(mn),
    { hash: o, pathname: i, search: u } = $c(e, { relative: n }),
    a = i;
  return (
    r !== '/' && (a = i === '/' ? r : ht([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function ar() {
  return S.useContext(Rl) != null;
}
function Tl() {
  return ar() || G(!1), S.useContext(Rl).location;
}
function Fc(e) {
  S.useContext(mn).static || S.useLayoutEffect(e);
}
function Yp() {
  let { isDataRoute: e } = S.useContext(Je);
  return e ? sh() : Gp();
}
function Gp() {
  ar() || G(!1);
  let e = S.useContext(eu),
    { basename: t, navigator: n } = S.useContext(mn),
    { matches: r } = S.useContext(Je),
    { pathname: l } = Tl(),
    o = JSON.stringify(Ic(r).map((a) => a.pathnameBase)),
    i = S.useRef(!1);
  return (
    Fc(() => {
      i.current = !0;
    }),
    S.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let p = Mc(a, JSON.parse(o), l, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : ht([t, p.pathname])),
          (s.replace ? n.replace : n.push)(p, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const Xp = S.createContext(null);
function Zp(e) {
  let t = S.useContext(Je).outlet;
  return t && S.createElement(Xp.Provider, { value: e }, t);
}
function Jp() {
  let { matches: e } = S.useContext(Je),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function $c(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(Je),
    { pathname: l } = Tl(),
    o = JSON.stringify(Ic(r).map((i) => i.pathnameBase));
  return S.useMemo(() => Mc(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function qp(e, t) {
  return bp(e, t);
}
function bp(e, t, n) {
  ar() || G(!1);
  let { navigator: r } = S.useContext(mn),
    { matches: l } = S.useContext(Je),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let a = Tl(),
    s;
  if (t) {
    var p;
    let y = typeof t == 'string' ? hn(t) : t;
    u === '/' || ((p = y.pathname) != null && p.startsWith(u)) || G(!1),
      (s = y);
  } else s = a;
  let h = s.pathname || '/',
    m = u === '/' ? h : h.slice(u.length) || '/',
    k = Ep(e, { pathname: m }),
    g = lh(
      k &&
        k.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: ht([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? u
                : ht([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && g
    ? S.createElement(
        Rl.Provider,
        {
          value: {
            location: fl(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              s
            ),
            navigationType: ot.Pop,
          },
        },
        g
      )
    : g;
}
function eh() {
  let e = ah(),
    t = Vp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? S.createElement('pre', { style: l }, n) : null,
    o
  );
}
const th = S.createElement(eh, null);
class nh extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          Je.Provider,
          { value: this.props.routeContext },
          S.createElement(Uc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function rh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = S.useContext(eu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Je.Provider, { value: t }, r)
  );
}
function lh(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    u >= 0 || G(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, a, s) => {
    let p = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      h = null;
    n && (h = a.route.errorElement || th);
    let m = t.concat(o.slice(0, s + 1)),
      k = () => {
        let g;
        return (
          p
            ? (g = h)
            : a.route.Component
            ? (g = S.createElement(a.route.Component, null))
            : a.route.element
            ? (g = a.route.element)
            : (g = u),
          S.createElement(rh, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? S.createElement(nh, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: p,
          children: k(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : k();
  }, null);
}
var Bc = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Bc || {}),
  dl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(dl || {});
function oh(e) {
  let t = S.useContext(eu);
  return t || G(!1), t;
}
function ih(e) {
  let t = S.useContext(Qp);
  return t || G(!1), t;
}
function uh(e) {
  let t = S.useContext(Je);
  return t || G(!1), t;
}
function Ac(e) {
  let t = uh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function ah() {
  var e;
  let t = S.useContext(Uc),
    n = ih(dl.UseRouteError),
    r = Ac(dl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function sh() {
  let { router: e } = oh(Bc.UseNavigateStable),
    t = Ac(dl.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Fc(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, fl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function ch(e) {
  return Zp(e.context);
}
function Ut(e) {
  G(!1);
}
function fh(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = ot.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  ar() && G(!1);
  let u = t.replace(/^\/*/, '/'),
    a = S.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == 'string' && (r = hn(r));
  let {
      pathname: s = '/',
      search: p = '',
      hash: h = '',
      state: m = null,
      key: k = 'default',
    } = r,
    g = S.useMemo(() => {
      let y = bi(s, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: h, state: m, key: k },
            navigationType: l,
          };
    }, [u, s, p, h, m, k, l]);
  return g == null
    ? null
    : S.createElement(
        mn.Provider,
        { value: a },
        S.createElement(Rl.Provider, { children: n, value: g })
      );
}
function dh(e) {
  let { children: t, location: n } = e;
  return qp(ni(t), n);
}
new Promise(() => {});
function ni(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, l) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === S.Fragment) {
        n.push.apply(n, ni(r.props.children, o));
        return;
      }
      r.type !== Ut && G(!1), !r.props.index || !r.props.children || G(!1);
      let i = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = ni(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ri() {
  return (
    (ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ri.apply(this, arguments)
  );
}
function ph(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function hh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mh(e, t) {
  return e.button === 0 && (!t || t === '_self') && !hh(e);
}
const vh = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  gh = 'startTransition',
  ma = sf[gh];
function yh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = S.useRef();
  o.current == null && (o.current = kp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, a] = S.useState({ action: i.action, location: i.location }),
    { v7_startTransition: s } = r || {},
    p = S.useCallback(
      (h) => {
        s && ma ? ma(() => a(h)) : a(h);
      },
      [a, s]
    );
  return (
    S.useLayoutEffect(() => i.listen(p), [i, p]),
    S.createElement(fh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
const wh =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  kh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nn = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: p,
      } = t,
      h = ph(t, vh),
      { basename: m } = S.useContext(mn),
      k,
      g = !1;
    if (typeof s == 'string' && kh.test(s) && ((k = s), wh))
      try {
        let c = new URL(window.location.href),
          d = s.startsWith('//') ? new URL(c.protocol + s) : new URL(s),
          v = bi(d.pathname, m);
        d.origin === c.origin && v != null
          ? (s = v + d.search + d.hash)
          : (g = !0);
      } catch {}
    let y = Kp(s, { relative: l }),
      R = Sh(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: p,
        relative: l,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || R(c);
    }
    return S.createElement(
      'a',
      ri({}, h, { href: k || y, onClick: g || o ? r : f, ref: n, target: a })
    );
  });
var va;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher');
})(va || (va = {}));
var ga;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(ga || (ga = {}));
function Sh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Yp(),
    a = Tl(),
    s = $c(e, { relative: i });
  return S.useCallback(
    (p) => {
      if (mh(p, n)) {
        p.preventDefault();
        let h = r !== void 0 ? r : cl(a) === cl(s);
        u(e, { replace: h, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, s, r, l, n, e, o, i]
  );
}
function xh() {
  return P.jsx('div', {
    className: 'about',
    children: P.jsx('div', { className: 'text', children: 'Happy Shopping!' }),
  });
}
async function Eh() {
  return Ph();
}
async function Ch(e) {
  return _h(e);
}
const Wc = [
  {
    productId: 1,
    name: 'Shake Weight',
    price: 2999,
    imageUrl: '//images/shake-weight.jpg',
    shortDescription:
      'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.',
    longDescription: `Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.

Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.`,
  },
  {
    productId: 2,
    name: 'ShamWow',
    price: 2595,
    imageUrl: '//images/shamwow.jpg',
    shortDescription:
      "It's like a chamois, towel, and sponge, all in one! Soaks up to 10x its weight in any liquid!",
    longDescription: `Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.

Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.`,
  },
  {
    productId: 3,
    name: 'Snuggie',
    price: 2900,
    imageUrl: '//images/snuggie.jpg',
    shortDescription:
      'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!',
    longDescription: `Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.

Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.`,
  },
  {
    productId: 4,
    name: 'Wax Vac',
    price: 999,
    imageUrl: '//images/wax-vac.jpg',
    shortDescription:
      'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.',
    longDescription: `Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.

Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.`,
  },
  {
    productId: 5,
    name: 'Ostrich Pillow',
    price: 9900,
    imageUrl: '//images/ostrich-pillow.jpg',
    shortDescription:
      'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.',
    longDescription: `Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.

Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.`,
  },
  {
    productId: 6,
    name: 'Tater Mitts',
    price: 830,
    imageUrl: '//images/tater-mitts.jpg',
    shortDescription:
      '8 Seconds is all you need with Tater Mitts. Quickly and easily prepare all your favorite potato dishes with Tater Mitts.',
    longDescription: `Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.

Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.`,
  },
];
async function Ph() {
  return Wc;
}
async function _h(e) {
  const t = Wc.find((n) => n.productId === e);
  if (!t) throw new Error(`${e} not found`);
  return t;
}
function Vc(e) {
  return '$' + (e / 100).toFixed(2);
}
function Nh() {
  const [e, t] = S.useState(),
    [n, r] = S.useState(!0),
    [l, o] = S.useState();
  return (
    S.useEffect(() => {
      async function i() {
        try {
          const u = await Eh();
          t(u);
        } catch (u) {
          o(u);
        } finally {
          r(!1);
        }
      }
      r(!0), i();
    }, []),
    n
      ? P.jsx('div', { children: 'Loading...' })
      : l
      ? P.jsxs('div', {
          children: [
            'Error Loading Catalog:',
            ' ',
            l instanceof Error ? l.message : 'Unknown Error',
          ],
        })
      : P.jsxs('div', {
          className: 'container',
          children: [
            P.jsx('h1', { children: 'Catalog' }),
            P.jsx('hr', {}),
            P.jsx('div', {
              className: 'row',
              children:
                e == null
                  ? void 0
                  : e.map((i) =>
                      P.jsx(
                        'div',
                        {
                          className: 'col-12 col-md-6 col-lg-4',
                          children: P.jsx(Lh, { product: i }),
                        },
                        i.productId
                      )
                    ),
            }),
          ],
        })
  );
}
function Lh({ product: e }) {
  const {
    productId: t,
    name: n,
    price: r,
    imageUrl: l,
    shortDescription: o,
  } = e;
  return P.jsxs(nn, {
    to: `details/${t}`,
    className: 'product text-dark card mb-4 shadow-sm text-decoration-none',
    children: [
      P.jsx('img', { src: l, className: 'image card-img-top', alt: n }),
      P.jsxs('div', {
        className: 'card-body',
        children: [
          P.jsx('h5', { className: 'card-title', children: n }),
          P.jsx('p', {
            className: 'card-text text-secondary',
            children: Vc(r),
          }),
          P.jsx('p', { className: 'description card-text', children: o }),
        ],
      }),
    ],
  });
}
function Rh() {
  return P.jsxs('div', {
    children: [
      P.jsx('nav', {
        className: 'navbar navbar-expand-sm navbar-dark bg-dark shadow-sm',
        children: P.jsx('div', {
          className: 'navbar-collapse',
          children: P.jsxs('ul', {
            className: 'navbar-nav mr-auto',
            children: [
              P.jsx('li', {
                className: 'nav-item nav-link',
                children: P.jsx(nn, {
                  to: '/about',
                  className: 'title',
                  children: 'About',
                }),
              }),
              P.jsx('li', {
                className: 'nav-item nav-link',
                children: P.jsx(nn, {
                  to: '/',
                  className: 'title',
                  children: 'Catalog',
                }),
              }),
              P.jsx('li', {
                className: 'nav-item nav-link',
                children: P.jsx(nn, {
                  to: '/',
                  className: 'title',
                  children: 'New Stuff',
                }),
              }),
            ],
          }),
        }),
      }),
      P.jsx(ch, {}),
    ],
  });
}
function Th() {
  return P.jsx('div', {
    className: 'Header-content',
    children: P.jsx('div', {
      className: 'row',
      children: P.jsxs('div', {
        className: 'col text-center mb-5',
        children: [
          P.jsx('h3', {
            children: 'Uh oh, we could not find the page you were looking for!',
          }),
          P.jsx(nn, {
            to: '/',
            className: 'text-muted',
            children: 'Return to the catalog',
          }),
        ],
      }),
    }),
  });
}
function jh() {
  const { productId: e } = Jp(),
    [t, n] = S.useState(),
    [r, l] = S.useState(!0),
    [o, i] = S.useState();
  if (
    (S.useEffect(() => {
      async function m(k) {
        try {
          const g = await Ch(k);
          n(g);
        } catch (g) {
          i(g);
        } finally {
          l(!1);
        }
      }
      e && (l(!0), m(+e));
    }, [e]),
    r)
  )
    return P.jsx('div', { children: 'Loading...' });
  if (o)
    return P.jsxs('div', {
      children: [
        'Error Loading Product ',
        e,
        ':',
        ' ',
        o instanceof Error ? o.message : 'Unknown Error',
      ],
    });
  if (!t) return null;
  const {
    name: u,
    imageUrl: a,
    price: s,
    shortDescription: p,
    longDescription: h,
  } = t;
  return P.jsx('div', {
    className: 'container',
    children: P.jsx('div', {
      className: 'card shadow-sm',
      children: P.jsxs('div', {
        className: 'card-body',
        children: [
          P.jsx('div', {
            className: 'row',
            children: P.jsx('div', {
              className: 'col',
              children: P.jsx(nn, {
                to: '/',
                className: 'btn text-secondary',
                children: '< Back to catalog',
              }),
            }),
          }),
          P.jsxs('div', {
            className: 'row mb-4',
            children: [
              P.jsx('div', {
                className: 'col-12 col-sm-6 col-md-5',
                children: P.jsx('img', { src: a, alt: u, className: 'image' }),
              }),
              P.jsxs('div', {
                className: 'col-12 col-sm-6 col-md-7',
                children: [
                  P.jsx('h2', { children: u }),
                  P.jsx('h5', { className: 'text-secondary', children: Vc(s) }),
                  P.jsx('p', { children: p }),
                ],
              }),
            ],
          }),
          P.jsx('div', {
            className: 'row',
            children: P.jsx('div', {
              className: 'col',
              children: P.jsx('p', {
                className: 'long-description',
                children: h,
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
function zh() {
  return P.jsx(dh, {
    children: P.jsxs(Ut, {
      path: '/',
      element: P.jsx(Rh, {}),
      children: [
        P.jsx(Ut, { index: !0, element: P.jsx(Nh, {}) }),
        P.jsx(Ut, { path: 'details/:productId', element: P.jsx(jh, {}) }),
        P.jsx(Ut, { path: 'about', element: P.jsx(xh, {}) }),
        P.jsx(Ut, { path: '*', element: P.jsx(Th, {}) }),
      ],
    }),
  });
}
uo.createRoot(document.getElementById('root')).render(
  P.jsx(Na.StrictMode, {
    children: P.jsx(yh, { basename: '/', children: P.jsx(zh, {}) }),
  })
);
