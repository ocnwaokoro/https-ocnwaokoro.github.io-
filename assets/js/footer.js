parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        ez7q: [
            function (require, module, exports) {
                var global = arguments[3];
                var t = arguments[3];
                function e(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                    }
                }
                function s(t, e, s) {
                    return e && i(t.prototype, e), s && i(t, s), t;
                }
                function n(t, e, i) {
                    return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
                }
                function o(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e &&
                            (s = s.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })),
                            i.push.apply(i, s);
                    }
                    return i;
                }
                function l(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2
                            ? o(Object(i), !0).forEach(function (e) {
                                  n(t, e, i[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : o(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              });
                    }
                    return t;
                }
                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && c(t, e);
                }
                function a(t) {
                    return (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                function c(t, e) {
                    return (c =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        })(t, e);
                }
                function h() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                function d(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function u(t, e) {
                    return !e || ("object" != typeof e && "function" != typeof e) ? d(t) : e;
                }
                function f(t) {
                    var e = h();
                    return function () {
                        var i,
                            s = a(t);
                        if (e) {
                            var n = a(this).constructor;
                            i = Reflect.construct(s, arguments, n);
                        } else i = s.apply(this, arguments);
                        return u(this, i);
                    };
                }
                function p(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)); );
                    return t;
                }
                function m(t, e, i) {
                    return (m =
                        "undefined" != typeof Reflect && Reflect.get
                            ? Reflect.get
                            : function (t, e, i) {
                                  var s = p(t, e);
                                  if (s) {
                                      var n = Object.getOwnPropertyDescriptor(s, e);
                                      return n.get ? n.get.call(i) : n.value;
                                  }
                              })(t, e, i || t);
                }
                function v(t, e) {
                    return w(t) || x(t, e) || S(t, e) || E();
                }
                function y(t) {
                    return b(t) || g(t) || S(t) || T();
                }
                function b(t) {
                    if (Array.isArray(t)) return k(t);
                }
                function w(t) {
                    if (Array.isArray(t)) return t;
                }
                function g(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }
                function x(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var i = [],
                            s = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value), !e || i.length !== e); s = !0);
                        } catch (a) {
                            (n = !0), (o = a);
                        } finally {
                            try {
                                s || null == r.return || r.return();
                            } finally {
                                if (n) throw o;
                            }
                        }
                        return i;
                    }
                }
                function S(t, e) {
                    if (t) {
                        if ("string" == typeof t) return k(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? k(t, e) : void 0;
                    }
                }
                function k(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
                    return s;
                }
                function T() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function E() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Smooth = exports.Native = exports.default = void 0);
                var A = {
                        el: document,
                        name: "scroll",
                        offset: [0, 0],
                        repeat: !1,
                        smooth: !1,
                        initPosition: { x: 0, y: 0 },
                        direction: "vertical",
                        gestureDirection: "vertical",
                        reloadOnContextChange: !1,
                        lerp: 0.1,
                        class: "is-inview",
                        scrollbarContainer: !1,
                        scrollbarClass: "c-scrollbar",
                        scrollingClass: "has-scroll-scrolling",
                        draggingClass: "has-scroll-dragging",
                        smoothClass: "has-scroll-smooth",
                        initClass: "has-scroll-init",
                        getSpeed: !1,
                        getDirection: !1,
                        scrollFromAnywhere: !1,
                        multiplier: 1,
                        firefoxMultiplier: 50,
                        touchMultiplier: 2,
                        resetNativeScroll: !0,
                        tablet: { smooth: !1, direction: "vertical", gestureDirection: "vertical", breakpoint: 1024 },
                        smartphone: { smooth: !1, direction: "vertical", gestureDirection: "vertical" },
                    },
                    O = (function () {
                        function t() {
                            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e(this, t),
                                Object.assign(this, A, i),
                                (this.smartphone = A.smartphone),
                                i.smartphone && Object.assign(this.smartphone, i.smartphone),
                                (this.tablet = A.tablet),
                                i.tablet && Object.assign(this.tablet, i.tablet),
                                (this.namespace = "locomotive"),
                                (this.html = document.documentElement),
                                (this.windowHeight = window.innerHeight),
                                (this.windowWidth = window.innerWidth),
                                (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }),
                                (this.els = {}),
                                (this.currentElements = {}),
                                (this.listeners = {}),
                                (this.hasScrollTicking = !1),
                                (this.hasCallEventSet = !1),
                                (this.checkScroll = this.checkScroll.bind(this)),
                                (this.checkResize = this.checkResize.bind(this)),
                                (this.checkEvent = this.checkEvent.bind(this)),
                                (this.instance = { scroll: { x: 0, y: 0 }, limit: { x: this.html.offsetWidth, y: this.html.offsetHeight }, currentElements: this.currentElements }),
                                this.isMobile ? (this.isTablet ? (this.context = "tablet") : (this.context = "smartphone")) : (this.context = "desktop"),
                                this.isMobile && (this.direction = this[this.context].direction),
                                "horizontal" === this.direction ? (this.directionAxis = "x") : (this.directionAxis = "y"),
                                this.getDirection && (this.instance.direction = null),
                                this.getDirection && (this.instance.speed = 0),
                                this.html.classList.add(this.initClass),
                                window.addEventListener("resize", this.checkResize, !1);
                        }
                        return (
                            s(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        this.initEvents();
                                    },
                                },
                                {
                                    key: "checkScroll",
                                    value: function () {
                                        this.dispatchScroll();
                                    },
                                },
                                {
                                    key: "checkResize",
                                    value: function () {
                                        var t = this;
                                        this.resizeTick ||
                                            ((this.resizeTick = !0),
                                            requestAnimationFrame(function () {
                                                t.resize(), (t.resizeTick = !1);
                                            }));
                                    },
                                },
                                { key: "resize", value: function () {} },
                                {
                                    key: "checkContext",
                                    value: function () {
                                        if (this.reloadOnContextChange) {
                                            (this.isMobile =
                                                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                                                ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
                                                this.windowWidth < this.tablet.breakpoint),
                                                (this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint);
                                            var t = this.context;
                                            if ((this.isMobile ? (this.isTablet ? (this.context = "tablet") : (this.context = "smartphone")) : (this.context = "desktop"), t != this.context))
                                                ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload();
                                        }
                                    },
                                },
                                {
                                    key: "initEvents",
                                    value: function () {
                                        var t = this;
                                        (this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"))),
                                            (this.setScrollTo = this.setScrollTo.bind(this)),
                                            this.scrollToEls.forEach(function (e) {
                                                e.addEventListener("click", t.setScrollTo, !1);
                                            });
                                    },
                                },
                                {
                                    key: "setScrollTo",
                                    value: function (t) {
                                        t.preventDefault(),
                                            this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                                                offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset")),
                                            });
                                    },
                                },
                                { key: "addElements", value: function () {} },
                                {
                                    key: "detectElements",
                                    value: function (t) {
                                        var e = this,
                                            i = this.instance.scroll.y,
                                            s = i + this.windowHeight,
                                            n = this.instance.scroll.x,
                                            o = n + this.windowWidth;
                                        Object.entries(this.els).forEach(function (l) {
                                            var r = v(l, 2),
                                                a = r[0],
                                                c = r[1];
                                            if ((!c || (c.inView && !t) || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)), c && c.inView))
                                                if ("horizontal" === e.direction) {
                                                    var h = c.right - c.left;
                                                    (c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth)), (o < c.left || n > c.right) && e.setOutOfView(c, a);
                                                } else {
                                                    var d = c.bottom - c.top;
                                                    (c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight)), (s < c.top || i > c.bottom) && e.setOutOfView(c, a);
                                                }
                                        }),
                                            (this.hasScrollTicking = !1);
                                    },
                                },
                                {
                                    key: "setInView",
                                    value: function (t, e) {
                                        (this.els[e].inView = !0), t.el.classList.add(t.class), (this.currentElements[e] = t), t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1));
                                    },
                                },
                                {
                                    key: "setOutOfView",
                                    value: function (t, e) {
                                        var i = this;
                                        (this.els[e].inView = !1),
                                            Object.keys(this.currentElements).forEach(function (t) {
                                                t === e && delete i.currentElements[t];
                                            }),
                                            t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                                            t.repeat && t.el.classList.remove(t.class);
                                    },
                                },
                                {
                                    key: "dispatchCall",
                                    value: function (t, e) {
                                        (this.callWay = e),
                                            (this.callValue = t.call.split(",").map(function (t) {
                                                return t.trim();
                                            })),
                                            (this.callObj = t),
                                            1 == this.callValue.length && (this.callValue = this.callValue[0]);
                                        var i = new Event(this.namespace + "call");
                                        this.el.dispatchEvent(i);
                                    },
                                },
                                {
                                    key: "dispatchScroll",
                                    value: function () {
                                        var t = new Event(this.namespace + "scroll");
                                        this.el.dispatchEvent(t);
                                    },
                                },
                                {
                                    key: "setEvents",
                                    value: function (t, e) {
                                        this.listeners[t] || (this.listeners[t] = []);
                                        var i = this.listeners[t];
                                        i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && ((this.hasCallEventSet = !0), this.detectElements(!0));
                                    },
                                },
                                {
                                    key: "unsetEvents",
                                    value: function (t, e) {
                                        if (this.listeners[t]) {
                                            var i = this.listeners[t],
                                                s = i.indexOf(e);
                                            s < 0 || (i.splice(s, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1));
                                        }
                                    },
                                },
                                {
                                    key: "checkEvent",
                                    value: function (t) {
                                        var e = this,
                                            i = t.type.replace(this.namespace, ""),
                                            s = this.listeners[i];
                                        s &&
                                            0 !== s.length &&
                                            s.forEach(function (t) {
                                                switch (i) {
                                                    case "scroll":
                                                        return t(e.instance);
                                                    case "call":
                                                        return t(e.callValue, e.callWay, e.callObj);
                                                    default:
                                                        return t();
                                                }
                                            });
                                    },
                                },
                                { key: "startScroll", value: function () {} },
                                { key: "stopScroll", value: function () {} },
                                {
                                    key: "setScroll",
                                    value: function (t, e) {
                                        this.instance.scroll = { x: 0, y: 0 };
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        var t = this;
                                        window.removeEventListener("resize", this.checkResize, !1),
                                            Object.keys(this.listeners).forEach(function (e) {
                                                t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                                            }),
                                            (this.listeners = {}),
                                            this.scrollToEls.forEach(function (e) {
                                                e.removeEventListener("click", t.setScrollTo, !1);
                                            }),
                                            this.html.classList.remove(this.initClass);
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    D = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
                function C(t, e) {
                    return t((e = { exports: {} }), e.exports), e.exports;
                }
                var L = C(function (t, e) {
                        !(function () {
                            t.exports = {
                                polyfill: function () {
                                    var t = window,
                                        e = document;
                                    if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                                        var i,
                                            s = t.HTMLElement || t.Element,
                                            n = 468,
                                            o = { scroll: t.scroll || t.scrollTo, scrollBy: t.scrollBy, elementScroll: s.prototype.scroll || a, scrollIntoView: s.prototype.scrollIntoView },
                                            l = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                            r = ((i = t.navigator.userAgent), new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                        (t.scroll = t.scrollTo = function () {
                                            void 0 !== arguments[0] &&
                                                (!0 !== c(arguments[0])
                                                    ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset)
                                                    : o.scroll.call(
                                                          t,
                                                          void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset,
                                                          void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset
                                                      ));
                                        }),
                                            (t.scrollBy = function () {
                                                void 0 !== arguments[0] &&
                                                    (c(arguments[0])
                                                        ? o.scrollBy.call(
                                                              t,
                                                              void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0,
                                                              void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0
                                                          )
                                                        : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
                                            }),
                                            (s.prototype.scroll = s.prototype.scrollTo = function () {
                                                if (void 0 !== arguments[0])
                                                    if (!0 !== c(arguments[0])) {
                                                        var t = arguments[0].left,
                                                            e = arguments[0].top;
                                                        p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
                                                    } else {
                                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                                        o.elementScroll.call(
                                                            this,
                                                            void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft,
                                                            void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop
                                                        );
                                                    }
                                            }),
                                            (s.prototype.scrollBy = function () {
                                                void 0 !== arguments[0] &&
                                                    (!0 !== c(arguments[0])
                                                        ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior })
                                                        : o.elementScroll.call(
                                                              this,
                                                              void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
                                                              void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
                                                          ));
                                            }),
                                            (s.prototype.scrollIntoView = function () {
                                                if (!0 !== c(arguments[0])) {
                                                    var i = (function (t) {
                                                            for (; t !== e.body && !1 === u(t); ) t = t.parentNode || t.host;
                                                            return t;
                                                        })(this),
                                                        s = i.getBoundingClientRect(),
                                                        n = this.getBoundingClientRect();
                                                    i !== e.body
                                                        ? (p.call(this, i, i.scrollLeft + n.left - s.left, i.scrollTop + n.top - s.top),
                                                          "fixed" !== t.getComputedStyle(i).position && t.scrollBy({ left: s.left, top: s.top, behavior: "smooth" }))
                                                        : t.scrollBy({ left: n.left, top: n.top, behavior: "smooth" });
                                                } else o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                                            });
                                    }
                                    function a(t, e) {
                                        (this.scrollLeft = t), (this.scrollTop = e);
                                    }
                                    function c(t) {
                                        if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                                        if ("object" == typeof t && "smooth" === t.behavior) return !1;
                                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.");
                                    }
                                    function h(t, e) {
                                        return "Y" === e ? t.clientHeight + r < t.scrollHeight : "X" === e ? t.clientWidth + r < t.scrollWidth : void 0;
                                    }
                                    function d(e, i) {
                                        var s = t.getComputedStyle(e, null)["overflow" + i];
                                        return "auto" === s || "scroll" === s;
                                    }
                                    function u(t) {
                                        var e = h(t, "Y") && d(t, "Y"),
                                            i = h(t, "X") && d(t, "X");
                                        return e || i;
                                    }
                                    function f(e) {
                                        var i,
                                            s,
                                            o,
                                            r,
                                            a = (l() - e.startTime) / n;
                                        (r = a = a > 1 ? 1 : a),
                                            (i = 0.5 * (1 - Math.cos(Math.PI * r))),
                                            (s = e.startX + (e.x - e.startX) * i),
                                            (o = e.startY + (e.y - e.startY) * i),
                                            e.method.call(e.scrollable, s, o),
                                            (s === e.x && o === e.y) || t.requestAnimationFrame(f.bind(t, e));
                                    }
                                    function p(i, s, n) {
                                        var r,
                                            c,
                                            h,
                                            d,
                                            u = l();
                                        i === e.body ? ((r = t), (c = t.scrollX || t.pageXOffset), (h = t.scrollY || t.pageYOffset), (d = o.scroll)) : ((r = i), (c = i.scrollLeft), (h = i.scrollTop), (d = a)),
                                            f({ scrollable: r, method: d, startTime: u, startX: c, startY: h, x: s, y: n });
                                    }
                                },
                            };
                        })();
                    }),
                    M = L.polyfill,
                    j = (function (t) {
                        r(n, t);
                        var i = f(n);
                        function n() {
                            var t,
                                s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (
                                e(this, n),
                                (t = i.call(this, s)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)),
                                window.addEventListener("scroll", t.checkScroll, !1),
                                void 0 === window.smoothscrollPolyfill && ((window.smoothscrollPolyfill = L), window.smoothscrollPolyfill.polyfill()),
                                t
                            );
                        }
                        return (
                            s(n, [
                                {
                                    key: "init",
                                    value: function () {
                                        (this.instance.scroll.y = window.pageYOffset), this.addElements(), this.detectElements(), m(a(n.prototype), "init", this).call(this);
                                    },
                                },
                                {
                                    key: "checkScroll",
                                    value: function () {
                                        var t = this;
                                        m(a(n.prototype), "checkScroll", this).call(this),
                                            this.getDirection && this.addDirection(),
                                            this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                                            (this.instance.scroll.y = window.pageYOffset),
                                            Object.entries(this.els).length &&
                                                (this.hasScrollTicking ||
                                                    (requestAnimationFrame(function () {
                                                        t.detectElements();
                                                    }),
                                                    (this.hasScrollTicking = !0)));
                                    },
                                },
                                {
                                    key: "addDirection",
                                    value: function () {
                                        window.pageYOffset > this.instance.scroll.y
                                            ? "down" !== this.instance.direction && (this.instance.direction = "down")
                                            : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up");
                                    },
                                },
                                {
                                    key: "addSpeed",
                                    value: function () {
                                        window.pageYOffset != this.instance.scroll.y ? (this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs)) : (this.instance.speed = 0);
                                    },
                                },
                                {
                                    key: "resize",
                                    value: function () {
                                        Object.entries(this.els).length && ((this.windowHeight = window.innerHeight), this.updateElements());
                                    },
                                },
                                {
                                    key: "addElements",
                                    value: function () {
                                        var t = this;
                                        (this.els = {}),
                                            this.el.querySelectorAll("[data-" + this.name + "]").forEach(function (e, i) {
                                                e.getBoundingClientRect();
                                                var s,
                                                    n,
                                                    o,
                                                    l = e.dataset[t.name + "Class"] || t.class,
                                                    r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                                                    a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                                    c = e.dataset[t.name + "Repeat"],
                                                    h = e.dataset[t.name + "Call"],
                                                    d = e.dataset[t.name + "Target"],
                                                    u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                                                (s = u.top + t.instance.scroll.y), (n = u.left + t.instance.scroll.x);
                                                var f = s + o.offsetHeight,
                                                    p = n + o.offsetWidth;
                                                c = "false" != c && (null != c || t.repeat);
                                                var m = t.getRelativeOffset(a),
                                                    v = { el: e, targetEl: o, id: r, class: l, top: (s += m[0]), bottom: (f -= m[1]), left: n, right: p, offset: a, progress: 0, repeat: c, inView: !1, call: h };
                                                (t.els[r] = v), e.classList.contains(l) && t.setInView(t.els[r], r);
                                            });
                                    },
                                },
                                {
                                    key: "updateElements",
                                    value: function () {
                                        var t = this;
                                        Object.entries(this.els).forEach(function (e) {
                                            var i = v(e, 2),
                                                s = i[0],
                                                n = i[1],
                                                o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                                                l = o + n.targetEl.offsetHeight,
                                                r = t.getRelativeOffset(n.offset);
                                            (t.els[s].top = o + r[0]), (t.els[s].bottom = l - r[1]);
                                        }),
                                            (this.hasScrollTicking = !1);
                                    },
                                },
                                {
                                    key: "getRelativeOffset",
                                    value: function (t) {
                                        var e = [0, 0];
                                        if (t)
                                            for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? (t[i].includes("%") ? (e[i] = parseInt((t[i].replace("%", "") * this.windowHeight) / 100)) : (e[i] = parseInt(t[i]))) : (e[i] = t[i]);
                                        return e;
                                    },
                                },
                                {
                                    key: "scrollTo",
                                    value: function (t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            i = parseInt(e.offset) || 0,
                                            s = !!e.callback && e.callback;
                                        if ("string" == typeof t) {
                                            if ("top" === t) t = this.html;
                                            else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                                            else if (!(t = document.querySelector(t))) return;
                                        } else if ("number" == typeof t) t = parseInt(t);
                                        else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                                        i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
                                        var n = function () {
                                            return parseInt(window.pageYOffset) === parseInt(i);
                                        };
                                        if (s) {
                                            if (n()) return void s();
                                            window.addEventListener("scroll", function t() {
                                                n() && (window.removeEventListener("scroll", t), s());
                                            });
                                        }
                                        window.scrollTo({ top: i, behavior: "smooth" });
                                    },
                                },
                                {
                                    key: "update",
                                    value: function () {
                                        this.addElements(), this.detectElements();
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        m(a(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1);
                                    },
                                },
                            ]),
                            n
                        );
                    })(O),
                    W = Object.getOwnPropertySymbols,
                    B = Object.prototype.hasOwnProperty,
                    _ = Object.prototype.propertyIsEnumerable;
                function P(t) {
                    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t);
                }
                function H() {
                    try {
                        if (!Object.assign) return !1;
                        var t = new String("abc");
                        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
                        for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                        if (
                            "0123456789" !==
                            Object.getOwnPropertyNames(e)
                                .map(function (t) {
                                    return e[t];
                                })
                                .join("")
                        )
                            return !1;
                        var s = {};
                        return (
                            "abcdefghijklmnopqrst".split("").forEach(function (t) {
                                s[t] = t;
                            }),
                            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
                        );
                    } catch (n) {
                        return !1;
                    }
                }
                var R = H()
                    ? Object.assign
                    : function (t, e) {
                          for (var i, s, n = P(t), o = 1; o < arguments.length; o++) {
                              for (var l in (i = Object(arguments[o]))) B.call(i, l) && (n[l] = i[l]);
                              if (W) {
                                  s = W(i);
                                  for (var r = 0; r < s.length; r++) _.call(i, s[r]) && (n[s[r]] = i[s[r]]);
                              }
                          }
                          return n;
                      };
                function I() {}
                I.prototype = {
                    on: function (t, e, i) {
                        var s = this.e || (this.e = {});
                        return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
                    },
                    once: function (t, e, i) {
                        var s = this;
                        function n() {
                            s.off(t, n), e.apply(i, arguments);
                        }
                        return (n._ = e), this.on(t, n, i);
                    },
                    emit: function (t) {
                        for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
                        return this;
                    },
                    off: function (t, e) {
                        var i = this.e || (this.e = {}),
                            s = i[t],
                            n = [];
                        if (s && e) for (var o = 0, l = s.length; o < l; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
                        return n.length ? (i[t] = n) : delete i[t], this;
                    },
                };
                var Y = I,
                    z = C(function (t, e) {
                        (function () {
                            (null !== e ? e : this).Lethargy = (function () {
                                function t(t, e, i, s) {
                                    (this.stability = null != t ? Math.abs(t) : 8),
                                        (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                                        (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                                        (this.delay = null != s ? s : 150),
                                        (this.lastUpDeltas = function () {
                                            var t, e, i;
                                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                            return i;
                                        }.call(this)),
                                        (this.lastDownDeltas = function () {
                                            var t, e, i;
                                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                            return i;
                                        }.call(this)),
                                        (this.deltasTimestamp = function () {
                                            var t, e, i;
                                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                            return i;
                                        }.call(this));
                                }
                                return (
                                    (t.prototype.check = function (t) {
                                        var e;
                                        return (
                                            null != (t = t.originalEvent || t).wheelDelta ? (e = t.wheelDelta) : null != t.deltaY ? (e = -40 * t.deltaY) : (null == t.detail && 0 !== t.detail) || (e = -40 * t.detail),
                                            this.deltasTimestamp.push(Date.now()),
                                            this.deltasTimestamp.shift(),
                                            e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                                        );
                                    }),
                                    (t.prototype.isInertia = function (t) {
                                        var e, i, s, n, o, l, r;
                                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                                            ? t
                                            : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) &&
                                                  ((s = e.slice(0, this.stability)),
                                                  (i = e.slice(this.stability, 2 * this.stability)),
                                                  (r = s.reduce(function (t, e) {
                                                      return t + e;
                                                  })),
                                                  (o = i.reduce(function (t, e) {
                                                      return t + e;
                                                  })),
                                                  (l = r / s.length),
                                                  (n = o / i.length),
                                                  Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t);
                                    }),
                                    (t.prototype.showLastUpDeltas = function () {
                                        return this.lastUpDeltas;
                                    }),
                                    (t.prototype.showLastDownDeltas = function () {
                                        return this.lastDownDeltas;
                                    }),
                                    t
                                );
                            })();
                        }.call(D));
                    }),
                    X = {
                        hasWheelEvent: "onwheel" in document,
                        hasMouseWheelEvent: "onmousewheel" in document,
                        hasTouch: "ontouchstart" in window || window.TouchEvent || (window.DocumentTouch && document instanceof DocumentTouch),
                        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown" in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
                    },
                    V = Object.prototype.toString,
                    F = Object.prototype.hasOwnProperty,
                    q = function (t) {
                        if (!t) return console.warn("bindAll requires at least one argument.");
                        var e = Array.prototype.slice.call(arguments, 1);
                        if (0 === e.length) for (var i in t) F.call(t, i) && "function" == typeof t[i] && "[object Function]" == V.call(t[i]) && e.push(i);
                        for (var s = 0; s < e.length; s++) {
                            var n = e[s];
                            t[n] = N(t[n], t);
                        }
                    };
                function N(t, e) {
                    return function () {
                        return t.apply(e, arguments);
                    };
                }
                var K = z.Lethargy,
                    U = "virtualscroll",
                    G = J,
                    $ = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
                function J(t) {
                    q(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
                        (this.el = window),
                        t && t.el && ((this.el = t.el), delete t.el),
                        (this.options = R({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: !1, unpreventTouchClass: "vs-touchmove-allowed", limitInertia: !1, useKeyboard: !0, useTouch: !0 }, t)),
                        this.options.limitInertia && (this._lethargy = new K()),
                        (this._emitter = new Y()),
                        (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
                        (this.touchStartX = null),
                        (this.touchStartY = null),
                        (this.bodyTouchAction = null),
                        void 0 !== this.options.passive && (this.listenerOptions = { passive: this.options.passive });
                }
                function Q(t, e, i) {
                    return (1 - i) * t + i * e;
                }
                function Z(t) {
                    var e = {};
                    if (window.getComputedStyle) {
                        var i = getComputedStyle(t),
                            s = i.transform || i.webkitTransform || i.mozTransform,
                            n = s.match(/^matrix3d\((.+)\)$/);
                        return (
                            n
                                ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0), (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
                                : ((n = s.match(/^matrix\((.+)\)$/)), (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0), (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
                            e
                        );
                    }
                }
                function tt(t) {
                    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
                    return e;
                }
                (J.prototype._notify = function (t) {
                    var e = this._event;
                    (e.x += e.deltaX), (e.y += e.deltaY), this._emitter.emit(U, { x: e.x, y: e.y, deltaX: e.deltaX, deltaY: e.deltaY, originalEvent: t });
                }),
                    (J.prototype._onWheel = function (t) {
                        var e = this.options;
                        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                            var i = this._event;
                            (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                                (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                                X.isFirefox && 1 == t.deltaMode && ((i.deltaX *= e.firefoxMultiplier), (i.deltaY *= e.firefoxMultiplier)),
                                (i.deltaX *= e.mouseMultiplier),
                                (i.deltaY *= e.mouseMultiplier),
                                this._notify(t);
                        }
                    }),
                    (J.prototype._onMouseWheel = function (t) {
                        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                            var e = this._event;
                            (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0), (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta), this._notify(t);
                        }
                    }),
                    (J.prototype._onTouchStart = function (t) {
                        var e = t.targetTouches ? t.targetTouches[0] : t;
                        (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
                    }),
                    (J.prototype._onTouchMove = function (t) {
                        var e = this.options;
                        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                        var i = this._event,
                            s = t.targetTouches ? t.targetTouches[0] : t;
                        (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier), (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier), (this.touchStartX = s.pageX), (this.touchStartY = s.pageY), this._notify(t);
                    }),
                    (J.prototype._onKeyDown = function (t) {
                        var e = this._event;
                        e.deltaX = e.deltaY = 0;
                        var i = window.innerHeight - 40;
                        switch (t.keyCode) {
                            case $.LEFT:
                            case $.UP:
                                e.deltaY = this.options.keyStep;
                                break;
                            case $.RIGHT:
                            case $.DOWN:
                                e.deltaY = -this.options.keyStep;
                                break;
                            case t.shiftKey:
                                e.deltaY = i;
                                break;
                            case $.SPACE:
                                e.deltaY = -i;
                                break;
                            default:
                                return;
                        }
                        this._notify(t);
                    }),
                    (J.prototype._bind = function () {
                        X.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
                            X.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                            X.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                            X.hasPointer &&
                                X.hasTouchWin &&
                                ((this.bodyTouchAction = document.body.style.msTouchAction),
                                (document.body.style.msTouchAction = "none"),
                                this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
                                this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
                            X.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown);
                    }),
                    (J.prototype._unbind = function () {
                        X.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
                            X.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
                            X.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)),
                            X.hasPointer &&
                                X.hasTouchWin &&
                                ((document.body.style.msTouchAction = this.bodyTouchAction), this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                            X.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
                    }),
                    (J.prototype.on = function (t, e) {
                        this._emitter.on(U, t, e);
                        var i = this._emitter.e;
                        i && i[U] && 1 === i[U].length && this._bind();
                    }),
                    (J.prototype.off = function (t, e) {
                        this._emitter.off(U, t, e);
                        var i = this._emitter.e;
                        (!i[U] || i[U].length <= 0) && this._unbind();
                    }),
                    (J.prototype.reset = function () {
                        var t = this._event;
                        (t.x = 0), (t.y = 0);
                    }),
                    (J.prototype.destroy = function () {
                        this._emitter.off(), this._unbind();
                    });
                var et = 4,
                    it = 0.001,
                    st = 1e-7,
                    nt = 10,
                    ot = 11,
                    lt = 1 / (ot - 1),
                    rt = "function" == typeof Float32Array;
                function at(t, e) {
                    return 1 - 3 * e + 3 * t;
                }
                function ct(t, e) {
                    return 3 * e - 6 * t;
                }
                function ht(t) {
                    return 3 * t;
                }
                function dt(t, e, i) {
                    return ((at(e, i) * t + ct(e, i)) * t + ht(e)) * t;
                }
                function ut(t, e, i) {
                    return 3 * at(e, i) * t * t + 2 * ct(e, i) * t + ht(e);
                }
                function ft(t, e, i, s, n) {
                    var o,
                        l,
                        r = 0;
                    do {
                        (o = dt((l = e + (i - e) / 2), s, n) - t) > 0 ? (i = l) : (e = l);
                    } while (Math.abs(o) > st && ++r < nt);
                    return l;
                }
                function pt(t, e, i, s) {
                    for (var n = 0; n < et; ++n) {
                        var o = ut(e, i, s);
                        if (0 === o) return e;
                        e -= (dt(e, i, s) - t) / o;
                    }
                    return e;
                }
                function mt(t) {
                    return t;
                }
                var vt = function (t, e, i, s) {
                        if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                        if (t === e && i === s) return mt;
                        for (var n = rt ? new Float32Array(ot) : new Array(ot), o = 0; o < ot; ++o) n[o] = dt(o * lt, t, i);
                        return function (o) {
                            return 0 === o
                                ? 0
                                : 1 === o
                                ? 1
                                : dt(
                                      (function (e) {
                                          for (var s = 0, o = 1, l = ot - 1; o !== l && n[o] <= e; ++o) s += lt;
                                          var r = s + ((e - n[--o]) / (n[o + 1] - n[o])) * lt,
                                              a = ut(r, t, i);
                                          return a >= it ? pt(e, r, t, i) : 0 === a ? r : ft(e, s, s + lt, t, i);
                                      })(o),
                                      e,
                                      s
                                  );
                        };
                    },
                    yt = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32, TAB: 9, PAGEUP: 33, PAGEDOWN: 34, HOME: 36, END: 35 },
                    bt = (function (t) {
                        r(n, t);
                        var i = f(n);
                        function n() {
                            var t,
                                s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (
                                e(this, n),
                                history.scrollRestoration && (history.scrollRestoration = "manual"),
                                window.scrollTo(0, 0),
                                (t = i.call(this, s)).inertia && (t.lerp = 0.1 * t.inertia),
                                (t.isScrolling = !1),
                                (t.isDraggingScrollbar = !1),
                                (t.isTicking = !1),
                                (t.hasScrollTicking = !1),
                                (t.parallaxElements = {}),
                                (t.stop = !1),
                                (t.scrollbarContainer = s.scrollbarContainer),
                                (t.checkKey = t.checkKey.bind(d(t))),
                                window.addEventListener("keydown", t.checkKey, !1),
                                t
                            );
                        }
                        return (
                            s(n, [
                                {
                                    key: "init",
                                    value: function () {
                                        var t = this;
                                        this.html.classList.add(this.smoothClass),
                                            this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                                            (this.instance = l({ delta: { x: this.initPosition.x, y: this.initPosition.y }, scroll: { x: this.initPosition.x, y: this.initPosition.y } }, this.instance)),
                                            (this.vs = new G({
                                                el: this.scrollFromAnywhere ? document : this.el,
                                                mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                                                firefoxMultiplier: this.firefoxMultiplier,
                                                touchMultiplier: this.touchMultiplier,
                                                useKeyboard: !1,
                                                passive: !0,
                                            })),
                                            this.vs.on(function (e) {
                                                t.stop ||
                                                    t.isDraggingScrollbar ||
                                                    requestAnimationFrame(function () {
                                                        t.updateDelta(e), t.isScrolling || t.startScrolling();
                                                    });
                                            }),
                                            this.setScrollLimit(),
                                            this.initScrollBar(),
                                            this.addSections(),
                                            this.addElements(),
                                            this.checkScroll(!0),
                                            this.transformElements(!0, !0),
                                            m(a(n.prototype), "init", this).call(this);
                                    },
                                },
                                {
                                    key: "setScrollLimit",
                                    value: function () {
                                        if (((this.instance.limit.y = this.el.offsetHeight - this.windowHeight), "horizontal" === this.direction)) {
                                            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                                            this.instance.limit.x = t - this.windowWidth;
                                        }
                                    },
                                },
                                {
                                    key: "startScrolling",
                                    value: function () {
                                        (this.startScrollTs = Date.now()), (this.isScrolling = !0), this.checkScroll(), this.html.classList.add(this.scrollingClass);
                                    },
                                },
                                {
                                    key: "stopScrolling",
                                    value: function () {
                                        cancelAnimationFrame(this.checkScrollRaf),
                                            this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), (this.scrollToRaf = null)),
                                            (this.isScrolling = !1),
                                            (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                                            this.html.classList.remove(this.scrollingClass);
                                    },
                                },
                                {
                                    key: "checkKey",
                                    value: function (t) {
                                        var e = this;
                                        if (this.stop)
                                            t.keyCode == yt.TAB &&
                                                requestAnimationFrame(function () {
                                                    (e.html.scrollTop = 0), (document.body.scrollTop = 0), (e.html.scrollLeft = 0), (document.body.scrollLeft = 0);
                                                });
                                        else {
                                            switch (t.keyCode) {
                                                case yt.TAB:
                                                    requestAnimationFrame(function () {
                                                        (e.html.scrollTop = 0), (document.body.scrollTop = 0), (e.html.scrollLeft = 0), (document.body.scrollLeft = 0), e.scrollTo(document.activeElement, { offset: -window.innerHeight / 2 });
                                                    });
                                                    break;
                                                case yt.UP:
                                                    this.instance.delta[this.directionAxis] -= 240;
                                                    break;
                                                case yt.DOWN:
                                                    this.instance.delta[this.directionAxis] += 240;
                                                    break;
                                                case yt.PAGEUP:
                                                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                                                    break;
                                                case yt.PAGEDOWN:
                                                    this.instance.delta[this.directionAxis] += window.innerHeight;
                                                    break;
                                                case yt.HOME:
                                                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                                    break;
                                                case yt.END:
                                                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                                    break;
                                                case yt.SPACE:
                                                    document.activeElement instanceof HTMLInputElement ||
                                                        document.activeElement instanceof HTMLTextAreaElement ||
                                                        (t.shiftKey ? (this.instance.delta[this.directionAxis] -= window.innerHeight) : (this.instance.delta[this.directionAxis] += window.innerHeight));
                                                    break;
                                                default:
                                                    return;
                                            }
                                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                                                this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                                                this.stopScrolling(),
                                                (this.isScrolling = !0),
                                                this.checkScroll(),
                                                this.html.classList.add(this.scrollingClass);
                                        }
                                    },
                                },
                                {
                                    key: "checkScroll",
                                    value: function () {
                                        var t = this,
                                            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                        if (e || this.isScrolling || this.isDraggingScrollbar) {
                                            this.hasScrollTicking ||
                                                ((this.checkScrollRaf = requestAnimationFrame(function () {
                                                    return t.checkScroll();
                                                })),
                                                (this.hasScrollTicking = !0)),
                                                this.updateScroll();
                                            var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                                s = Date.now() - this.startScrollTs;
                                            if (
                                                (!this.animatingScroll && s > 100 && ((i < 0.5 && 0 != this.instance.delta[this.directionAxis]) || (i < 0.5 && 0 == this.instance.delta[this.directionAxis])) && this.stopScrolling(),
                                                Object.entries(this.sections).forEach(function (i) {
                                                    var s = v(i, 2),
                                                        n = (s[0], s[1]);
                                                    n.persistent || (t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis])
                                                        ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]),
                                                          n.inView || ((n.inView = !0), (n.el.style.opacity = 1), (n.el.style.pointerEvents = "all"), n.el.setAttribute("data-".concat(t.name, "-section-inview"), "")))
                                                        : ((n.inView || e) && ((n.inView = !1), (n.el.style.opacity = 0), (n.el.style.pointerEvents = "none"), n.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                                                          t.transform(n.el, 0, 0));
                                                }),
                                                this.getDirection && this.addDirection(),
                                                this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                                                this.detectElements(),
                                                this.transformElements(),
                                                this.hasScrollbar)
                                            ) {
                                                var o = (this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis]) * this.scrollBarLimit[this.directionAxis];
                                                "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o);
                                            }
                                            m(a(n.prototype), "checkScroll", this).call(this), (this.hasScrollTicking = !1);
                                        }
                                    },
                                },
                                {
                                    key: "resize",
                                    value: function () {
                                        (this.windowHeight = window.innerHeight), (this.windowWidth = window.innerWidth), this.checkContext(), (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }), this.update();
                                    },
                                },
                                {
                                    key: "updateDelta",
                                    value: function (t) {
                                        var e,
                                            i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                                        (e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY),
                                            (this.instance.delta[this.directionAxis] -= e * this.multiplier),
                                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                                            this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]);
                                    },
                                },
                                {
                                    key: "updateScroll",
                                    value: function (t) {
                                        this.isScrolling || this.isDraggingScrollbar
                                            ? (this.instance.scroll[this.directionAxis] = Q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp))
                                            : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]
                                            ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis])
                                            : this.instance.scroll.y < 0
                                            ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                                            : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                                    },
                                },
                                {
                                    key: "addDirection",
                                    value: function () {
                                        this.instance.delta.y > this.instance.scroll.y
                                            ? "down" !== this.instance.direction && (this.instance.direction = "down")
                                            : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                                            this.instance.delta.x > this.instance.scroll.x
                                                ? "right" !== this.instance.direction && (this.instance.direction = "right")
                                                : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left");
                                    },
                                },
                                {
                                    key: "addSpeed",
                                    value: function () {
                                        this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]
                                            ? (this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs))
                                            : (this.instance.speed = 0);
                                    },
                                },
                                {
                                    key: "initScrollBar",
                                    value: function () {
                                        if (
                                            ((this.scrollbar = document.createElement("span")),
                                            (this.scrollbarThumb = document.createElement("span")),
                                            this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                                            this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                                            this.scrollbar.append(this.scrollbarThumb),
                                            this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                                            (this.getScrollBar = this.getScrollBar.bind(this)),
                                            (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                                            (this.moveScrollBar = this.moveScrollBar.bind(this)),
                                            this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                                            window.addEventListener("mouseup", this.releaseScrollBar),
                                            window.addEventListener("mousemove", this.moveScrollBar),
                                            (this.hasScrollbar = !1),
                                            "horizontal" == this.direction)
                                        ) {
                                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                                        (this.hasScrollbar = !0),
                                            (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                                            (this.scrollbarHeight = this.scrollbarBCR.height),
                                            (this.scrollbarWidth = this.scrollbarBCR.width),
                                            "horizontal" === this.direction
                                                ? (this.scrollbarThumb.style.width = "".concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), "px"))
                                                : (this.scrollbarThumb.style.height = "".concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), "px")),
                                            (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                                            (this.scrollBarLimit = { x: this.scrollbarWidth - this.scrollbarThumbBCR.width, y: this.scrollbarHeight - this.scrollbarThumbBCR.height });
                                    },
                                },
                                {
                                    key: "reinitScrollBar",
                                    value: function () {
                                        if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                                        (this.hasScrollbar = !0),
                                            (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                                            (this.scrollbarHeight = this.scrollbarBCR.height),
                                            (this.scrollbarWidth = this.scrollbarBCR.width),
                                            "horizontal" === this.direction
                                                ? (this.scrollbarThumb.style.width = "".concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), "px"))
                                                : (this.scrollbarThumb.style.height = "".concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), "px")),
                                            (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                                            (this.scrollBarLimit = { x: this.scrollbarWidth - this.scrollbarThumbBCR.width, y: this.scrollbarHeight - this.scrollbarThumbBCR.height });
                                    },
                                },
                                {
                                    key: "destroyScrollBar",
                                    value: function () {
                                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                                            window.removeEventListener("mouseup", this.releaseScrollBar),
                                            window.removeEventListener("mousemove", this.moveScrollBar),
                                            this.scrollbar.remove();
                                    },
                                },
                                {
                                    key: "getScrollBar",
                                    value: function (t) {
                                        (this.isDraggingScrollbar = !0), this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
                                    },
                                },
                                {
                                    key: "releaseScrollBar",
                                    value: function (t) {
                                        (this.isDraggingScrollbar = !1), this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
                                    },
                                },
                                {
                                    key: "moveScrollBar",
                                    value: function (t) {
                                        var e = this;
                                        this.isDraggingScrollbar &&
                                            requestAnimationFrame(function () {
                                                var i = (((100 * (t.clientX - e.scrollbarBCR.left)) / e.scrollbarWidth) * e.instance.limit.x) / 100,
                                                    s = (((100 * (t.clientY - e.scrollbarBCR.top)) / e.scrollbarHeight) * e.instance.limit.y) / 100;
                                                s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                                            });
                                    },
                                },
                                {
                                    key: "addElements",
                                    value: function () {
                                        var t = this;
                                        (this.els = {}),
                                            (this.parallaxElements = {}),
                                            this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function (e, i) {
                                                var s,
                                                    n,
                                                    o,
                                                    l = tt(e),
                                                    r = Object.entries(t.sections)
                                                        .map(function (t) {
                                                            var e = v(t, 2);
                                                            e[0];
                                                            return e[1];
                                                        })
                                                        .find(function (t) {
                                                            return l.includes(t.el);
                                                        }),
                                                    a = e.dataset[t.name + "Class"] || t.class,
                                                    c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                                                    h = e.dataset[t.name + "Repeat"],
                                                    d = e.dataset[t.name + "Call"],
                                                    u = e.dataset[t.name + "Position"],
                                                    f = e.dataset[t.name + "Delay"],
                                                    p = e.dataset[t.name + "Direction"],
                                                    m = "string" == typeof e.dataset[t.name + "Sticky"],
                                                    y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                                    b = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                                    w = e.dataset[t.name + "Target"],
                                                    g = (o = void 0 !== w ? document.querySelector("".concat(w)) : e).getBoundingClientRect();
                                                null === r
                                                    ? ((s = g.top + t.instance.scroll.y - Z(o).y), (n = g.left + t.instance.scroll.x - Z(o).x))
                                                    : r.inView
                                                    ? ((s = g.top + t.instance.scroll.y - Z(o).y), (n = g.left + t.instance.scroll.x - Z(o).x))
                                                    : ((s = g.top - Z(r.el).y - Z(o).y), (n = g.left - Z(r.el).x - Z(o).x));
                                                var x = s + o.offsetHeight,
                                                    S = n + o.offsetWidth,
                                                    k = { x: (S - n) / 2 + n, y: (x - s) / 2 + s };
                                                if (m) {
                                                    var T = e.getBoundingClientRect(),
                                                        E = T.top,
                                                        A = T.left,
                                                        O = { x: A - n, y: E - s };
                                                    (s += window.innerHeight),
                                                        (n += window.innerWidth),
                                                        (x = E + o.offsetHeight - e.offsetHeight - O[t.directionAxis]),
                                                        (k = { x: ((S = A + o.offsetWidth - e.offsetWidth - O[t.directionAxis]) - n) / 2 + n, y: (x - s) / 2 + s });
                                                }
                                                h = "false" != h && (null != h || t.repeat);
                                                var D = [0, 0];
                                                if (b)
                                                    if ("horizontal" === t.direction) {
                                                        for (var C = 0; C < b.length; C++)
                                                            "string" == typeof b[C] ? (b[C].includes("%") ? (D[C] = parseInt((b[C].replace("%", "") * t.windowWidth) / 100)) : (D[C] = parseInt(b[C]))) : (D[C] = b[C]);
                                                        (n += D[0]), (S -= D[1]);
                                                    } else {
                                                        for (C = 0; C < b.length; C++)
                                                            "string" == typeof b[C] ? (b[C].includes("%") ? (D[C] = parseInt((b[C].replace("%", "") * t.windowHeight) / 100)) : (D[C] = parseInt(b[C]))) : (D[C] = b[C]);
                                                        (s += D[0]), (x -= D[1]);
                                                    }
                                                var L = {
                                                    el: e,
                                                    id: c,
                                                    class: a,
                                                    section: r,
                                                    top: s,
                                                    middle: k,
                                                    bottom: x,
                                                    left: n,
                                                    right: S,
                                                    offset: b,
                                                    progress: 0,
                                                    repeat: h,
                                                    inView: !1,
                                                    call: d,
                                                    speed: y,
                                                    delay: f,
                                                    position: u,
                                                    target: o,
                                                    direction: p,
                                                    sticky: m,
                                                };
                                                (t.els[c] = L), e.classList.contains(a) && t.setInView(t.els[c], c), (!1 !== y || m) && (t.parallaxElements[c] = L);
                                            });
                                    },
                                },
                                {
                                    key: "addSections",
                                    value: function () {
                                        var t = this;
                                        this.sections = {};
                                        var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                                        0 === e.length && (e = [this.el]),
                                            e.forEach(function (e, i) {
                                                var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                                                    n = e.getBoundingClientRect(),
                                                    o = { x: n.left - 1.5 * window.innerWidth - Z(e).x, y: n.top - 1.5 * window.innerHeight - Z(e).y },
                                                    l = { x: o.x + n.width + 2 * window.innerWidth, y: o.y + n.height + 2 * window.innerHeight },
                                                    r = "string" == typeof e.dataset[t.name + "Persistent"];
                                                e.setAttribute("data-scroll-section-id", s);
                                                var a = { el: e, offset: o, limit: l, inView: !1, persistent: r, id: s };
                                                t.sections[s] = a;
                                            });
                                    },
                                },
                                {
                                    key: "transform",
                                    value: function (t, e, i, s) {
                                        var n;
                                        if (s) {
                                            var o = Z(t),
                                                l = Q(o.x, e, s),
                                                r = Q(o.y, i, s);
                                            n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)");
                                        } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                                        (t.style.webkitTransform = n), (t.style.msTransform = n), (t.style.transform = n);
                                    },
                                },
                                {
                                    key: "transformElements",
                                    value: function (t) {
                                        var e = this,
                                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            s = this.instance.scroll.x + this.windowWidth,
                                            n = this.instance.scroll.y + this.windowHeight,
                                            o = { x: this.instance.scroll.x + this.windowMiddle.x, y: this.instance.scroll.y + this.windowMiddle.y };
                                        Object.entries(this.parallaxElements).forEach(function (l) {
                                            var r = v(l, 2),
                                                a = (r[0], r[1]),
                                                c = !1;
                                            if ((t && (c = 0), a.inView || i))
                                                switch (a.position) {
                                                    case "top":
                                                        c = e.instance.scroll[e.directionAxis] * -a.speed;
                                                        break;
                                                    case "elementTop":
                                                        c = (n - a.top) * -a.speed;
                                                        break;
                                                    case "bottom":
                                                        c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                                                        break;
                                                    case "left":
                                                        c = e.instance.scroll[e.directionAxis] * -a.speed;
                                                        break;
                                                    case "elementLeft":
                                                        c = (s - a.left) * -a.speed;
                                                        break;
                                                    case "right":
                                                        c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                                                        break;
                                                    default:
                                                        c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed;
                                                }
                                            a.sticky &&
                                                (c = a.inView
                                                    ? "horizontal" === e.direction
                                                        ? e.instance.scroll.x - a.left + window.innerWidth
                                                        : e.instance.scroll.y - a.top + window.innerHeight
                                                    : "horizontal" === e.direction
                                                    ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2
                                                        ? 0
                                                        : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth
                                                    : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2
                                                    ? 0
                                                    : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight),
                                                !1 !== c && ("horizontal" === a.direction || ("horizontal" === e.direction && "vertical" !== a.direction) ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay));
                                        });
                                    },
                                },
                                {
                                    key: "scrollTo",
                                    value: function (t) {
                                        var e = this,
                                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            s = parseInt(i.offset) || 0,
                                            n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                                            o = i.easing || [0.25, 0, 0.35, 1],
                                            l = !!i.disableLerp,
                                            r = !!i.callback && i.callback;
                                        if (((o = vt.apply(void 0, y(o))), "string" == typeof t)) {
                                            if ("top" === t) t = 0;
                                            else if ("bottom" === t) t = this.instance.limit.y;
                                            else if ("left" === t) t = 0;
                                            else if ("right" === t) t = this.instance.limit.x;
                                            else if (!(t = document.querySelector(t))) return;
                                        } else if ("number" == typeof t) t = parseInt(t);
                                        else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                                        if ("number" != typeof t) {
                                            if (!tt(t).includes(this.el)) return;
                                            var a = t.getBoundingClientRect(),
                                                c = a.top,
                                                h = a.left,
                                                d = tt(t).find(function (t) {
                                                    return Object.entries(e.sections)
                                                        .map(function (t) {
                                                            var e = v(t, 2);
                                                            e[0];
                                                            return e[1];
                                                        })
                                                        .find(function (e) {
                                                            return e.el == t;
                                                        });
                                                }),
                                                u = 0;
                                            (u = d ? Z(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis]), (s = "horizontal" === this.direction ? h + s - u : c + s - u);
                                        } else s = t + s;
                                        var f = parseFloat(this.instance.delta[this.directionAxis]),
                                            p = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])) - f,
                                            m = function (t) {
                                                l ? ("horizontal" === e.direction ? e.setScroll(f + p * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, f + p * t)) : (e.instance.delta[e.directionAxis] = f + p * t);
                                            };
                                        (this.animatingScroll = !0), this.stopScrolling(), this.startScrolling();
                                        var b = Date.now();
                                        !(function t() {
                                            var i = (Date.now() - b) / n;
                                            i > 1 ? (m(1), (e.animatingScroll = !1), 0 == n && e.update(), r && r()) : ((e.scrollToRaf = requestAnimationFrame(t)), m(o(i)));
                                        })();
                                    },
                                },
                                {
                                    key: "update",
                                    value: function () {
                                        this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
                                    },
                                },
                                {
                                    key: "startScroll",
                                    value: function () {
                                        this.stop = !1;
                                    },
                                },
                                {
                                    key: "stopScroll",
                                    value: function () {
                                        this.stop = !0;
                                    },
                                },
                                {
                                    key: "setScroll",
                                    value: function (t, e) {
                                        this.instance = l(l({}, this.instance), {}, { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 });
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        m(a(n.prototype), "destroy", this).call(this),
                                            this.stopScrolling(),
                                            this.html.classList.remove(this.smoothClass),
                                            this.vs.destroy(),
                                            this.destroyScrollBar(),
                                            window.removeEventListener("keydown", this.checkKey, !1);
                                    },
                                },
                            ]),
                            n
                        );
                    })(O),
                    wt = (function () {
                        function t() {
                            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e(this, t),
                                (this.options = i),
                                Object.assign(this, A, i),
                                (this.smartphone = A.smartphone),
                                i.smartphone && Object.assign(this.smartphone, i.smartphone),
                                (this.tablet = A.tablet),
                                i.tablet && Object.assign(this.tablet, i.tablet),
                                this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
                                this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                                this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                                this.init();
                        }
                        return (
                            s(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        if (
                                            ((this.options.isMobile =
                                                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                                                ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
                                                window.innerWidth < this.tablet.breakpoint),
                                            (this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint),
                                            (this.smooth && !this.options.isMobile) || (this.tablet.smooth && this.options.isTablet) || (this.smartphone.smooth && this.options.isMobile && !this.options.isTablet)
                                                ? (this.scroll = new bt(this.options))
                                                : (this.scroll = new j(this.options)),
                                            this.scroll.init(),
                                            window.location.hash)
                                        ) {
                                            var t = window.location.hash.slice(1, window.location.hash.length),
                                                e = document.getElementById(t);
                                            e && this.scroll.scrollTo(e);
                                        }
                                    },
                                },
                                {
                                    key: "update",
                                    value: function () {
                                        this.scroll.update();
                                    },
                                },
                                {
                                    key: "start",
                                    value: function () {
                                        this.scroll.startScroll();
                                    },
                                },
                                {
                                    key: "stop",
                                    value: function () {
                                        this.scroll.stopScroll();
                                    },
                                },
                                {
                                    key: "scrollTo",
                                    value: function (t, e) {
                                        this.scroll.scrollTo(t, e);
                                    },
                                },
                                {
                                    key: "setScroll",
                                    value: function (t, e) {
                                        this.scroll.setScroll(t, e);
                                    },
                                },
                                {
                                    key: "on",
                                    value: function (t, e) {
                                        this.scroll.setEvents(t, e);
                                    },
                                },
                                {
                                    key: "off",
                                    value: function (t, e) {
                                        this.scroll.unsetEvents(t, e);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.scroll.destroy();
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                exports.Smooth = wt;
                var gt = (function () {
                    function t() {
                        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e(this, t),
                            (this.options = i),
                            Object.assign(this, A, i),
                            (this.smartphone = A.smartphone),
                            i.smartphone && Object.assign(this.smartphone, i.smartphone),
                            (this.tablet = A.tablet),
                            i.tablet && Object.assign(this.tablet, i.tablet),
                            this.init();
                    }
                    return (
                        s(t, [
                            {
                                key: "init",
                                value: function () {
                                    if (((this.scroll = new j(this.options)), this.scroll.init(), window.location.hash)) {
                                        var t = window.location.hash.slice(1, window.location.hash.length),
                                            e = document.getElementById(t);
                                        e && this.scroll.scrollTo(e);
                                    }
                                },
                            },
                            {
                                key: "update",
                                value: function () {
                                    this.scroll.update();
                                },
                            },
                            {
                                key: "start",
                                value: function () {
                                    this.scroll.startScroll();
                                },
                            },
                            {
                                key: "stop",
                                value: function () {
                                    this.scroll.stopScroll();
                                },
                            },
                            {
                                key: "scrollTo",
                                value: function (t, e) {
                                    this.scroll.scrollTo(t, e);
                                },
                            },
                            {
                                key: "setScroll",
                                value: function (t, e) {
                                    this.scroll.setScroll(t, e);
                                },
                            },
                            {
                                key: "on",
                                value: function (t, e) {
                                    this.scroll.setEvents(t, e);
                                },
                            },
                            {
                                key: "off",
                                value: function (t, e) {
                                    this.scroll.unsetEvents(t, e);
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.scroll.destroy();
                                },
                            },
                        ]),
                        t
                    );
                })();
                exports.Native = gt;
                var xt = wt;
                exports.default = xt;
            },
            {},
        ],
        TNS6: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function e(t, e) {
                    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports._colorExp = exports._getCache = exports._getSetter = exports._missingPlugin = exports._round = exports._roundModifier = exports._config = exports._ticker = exports._plugins = exports._checkPlugin = exports._replaceRandom = exports._colorStringFilter = exports._sortPropTweensByPriority = exports._forEachName = exports._removeLinkedListItem = exports._setDefaults = exports._relExp = exports._renderComplexString = exports._isUndefined = exports._isString = exports._numWithUnitExp = exports._numExp = exports._getProperty = exports.shuffle = exports.interpolate = exports.unitize = exports.pipe = exports.mapRange = exports.selector = exports.toArray = exports.splitColor = exports.clamp = exports.getUnit = exports.normalize = exports.snap = exports.random = exports.distribute = exports.wrapYoyo = exports.wrap = exports.Circ = exports.Expo = exports.Sine = exports.Bounce = exports.SteppedEase = exports.Back = exports.Elastic = exports.Strong = exports.Quint = exports.Quart = exports.Cubic = exports.Quad = exports.Linear = exports.Power4 = exports.Power3 = exports.Power2 = exports.Power1 = exports.Power0 = exports.default = exports.gsap = exports.PropTween = exports.TweenLite = exports.TweenMax = exports.Tween = exports.TimelineLite = exports.TimelineMax = exports.Timeline = exports.Animation = exports.GSCache = void 0);
                var r,
                    i,
                    n,
                    s,
                    o,
                    a,
                    u,
                    h,
                    _,
                    p = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                    l = { duration: 0.5, overwrite: !1, delay: 0 },
                    f = 1e8,
                    c = 1 / f,
                    d = 2 * Math.PI,
                    m = d / 4,
                    g = 0,
                    v = Math.sqrt,
                    x = Math.cos,
                    y = Math.sin,
                    T = function (t) {
                        return "string" == typeof t;
                    },
                    w = function (t) {
                        return "function" == typeof t;
                    },
                    b = function (t) {
                        return "number" == typeof t;
                    },
                    k = function (t) {
                        return void 0 === t;
                    },
                    D = function (t) {
                        return "object" == typeof t;
                    },
                    A = function (t) {
                        return !1 !== t;
                    },
                    C = function () {
                        return "undefined" != typeof window;
                    },
                    S = function (t) {
                        return w(t) || T(t);
                    },
                    M = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
                    P = Array.isArray,
                    E = /(?:-?\.?\d|\.)+/gi,
                    R = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                    z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                    O = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                    L = /[+-]=-?[.\d]+/,
                    F = /[^,'"\[\]\s]+/gi,
                    I = /[\d.+\-=]+(?:e[-+]\d*)*/i,
                    U = {},
                    B = {},
                    N = function (t) {
                        return (B = pt(t, U)) && dr;
                    },
                    Q = function (t, e) {
                        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
                    },
                    q = function (t, e) {
                        return !e && console.warn(t);
                    },
                    j = function (t, e) {
                        return (t && (U[t] = e) && B && (B[t] = e)) || U;
                    },
                    V = function () {
                        return 0;
                    },
                    G = {},
                    W = [],
                    Y = {},
                    H = {},
                    J = {},
                    K = 30,
                    X = [],
                    Z = "",
                    $ = function (t) {
                        var e,
                            r,
                            i = t[0];
                        if ((D(i) || w(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
                            for (r = X.length; r-- && !X[r].targetTest(i); );
                            e = X[r];
                        }
                        for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Ie(t[r], e)))) || t.splice(r, 1);
                        return t;
                    },
                    tt = function (t) {
                        return t._gsap || $(Yt(t))[0]._gsap;
                    },
                    et = function (t, e, r) {
                        return (r = t[e]) && w(r) ? t[e]() : (k(r) && t.getAttribute && t.getAttribute(e)) || r;
                    },
                    rt = function (t, e) {
                        return (t = t.split(",")).forEach(e) || t;
                    },
                    it = function (t) {
                        return Math.round(1e5 * t) / 1e5 || 0;
                    },
                    nt = function (t, e) {
                        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
                        return i < r;
                    },
                    st = function () {
                        var t,
                            e,
                            r = W.length,
                            i = W.slice(0);
                        for (Y = {}, W.length = 0, t = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
                    },
                    ot = function (t, e, r, i) {
                        W.length && st(), t.render(e, r, i), W.length && st();
                    },
                    at = function (t) {
                        var e = parseFloat(t);
                        return (e || 0 === e) && (t + "").match(F).length < 2 ? e : T(t) ? t.trim() : t;
                    },
                    ut = function (t) {
                        return t;
                    },
                    ht = function (t, e) {
                        for (var r in e) r in t || (t[r] = e[r]);
                        return t;
                    },
                    _t = function (t, e) {
                        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
                    },
                    pt = function (t, e) {
                        for (var r in e) t[r] = e[r];
                        return t;
                    },
                    lt = function t(e, r) {
                        for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = D(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
                        return e;
                    },
                    ft = function (t, e) {
                        var r,
                            i = {};
                        for (r in t) r in e || (i[r] = t[r]);
                        return i;
                    },
                    ct = function (t) {
                        var e = t.parent || i,
                            r = t.keyframes ? _t : ht;
                        if (A(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
                        return t;
                    },
                    dt = function (t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
                        return r < 0;
                    },
                    mt = function (t, e, r, i, n) {
                        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                        var s,
                            o = t[i];
                        if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
                        return o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = o), (e.parent = e._dp = t), e;
                    },
                    gt = function (t, e, r, i) {
                        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                        var n = e._prev,
                            s = e._next;
                        n ? (n._next = s) : t[r] === e && (t[r] = s), s ? (s._prev = n) : t[i] === e && (t[i] = n), (e._next = e._prev = e.parent = null);
                    },
                    vt = function (t, e) {
                        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
                    },
                    xt = function (t, e) {
                        if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
                        return t;
                    },
                    yt = function (t) {
                        for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                        return t;
                    },
                    Tt = function t(e) {
                        return !e || (e._ts && t(e.parent));
                    },
                    wt = function (t) {
                        return t._repeat ? bt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
                    },
                    bt = function (t, e) {
                        var r = Math.floor((t /= e));
                        return t && r === t ? r - 1 : r;
                    },
                    kt = function (t, e) {
                        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
                    },
                    Dt = function (t) {
                        return (t._end = it(t._start + (t._tDur / Math.abs(t._ts || t._rts || c) || 0)));
                    },
                    At = function (t, e) {
                        var r = t._dp;
                        return r && r.smoothChildTiming && t._ts && ((t._start = it(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Dt(t), r._dirty || xt(r, t)), t;
                    },
                    Ct = function (t, e) {
                        var r;
                        if (((e._time || (e._initted && !e._dur)) && ((r = kt(t.rawTime(), e)), (!e._dur || Qt(0, e.totalDuration(), r) - e._tTime > c) && e.render(r, !0)), xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                            if (t._dur < t.duration()) for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
                            t._zTime = -c;
                        }
                    },
                    St = function (t, e, r, n) {
                        return (
                            e.parent && vt(e),
                            (e._start = it((b(r) ? r : r || t !== i ? Ut(t, r, e) : t._time) + e._delay)),
                            (e._end = it(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                            mt(t, e, "_first", "_last", t._sort ? "_start" : 0),
                            Rt(e) || (t._recent = e),
                            n || Ct(t, e),
                            t
                        );
                    },
                    Mt = function (t, e) {
                        return (U.ScrollTrigger || Q("scrollTrigger", e)) && U.ScrollTrigger.create(e, t);
                    },
                    Pt = function (t, e, r, i) {
                        return Ge(t, e), t._initted ? (!r && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && u !== we.frame ? (W.push(t), (t._lazy = [e, i]), 1) : void 0) : 1;
                    },
                    Et = function t(e) {
                        var r = e.parent;
                        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
                    },
                    Rt = function (t) {
                        var e = t.data;
                        return "isFromStart" === e || "isStart" === e;
                    },
                    zt = function (t, e, r, i) {
                        var n,
                            s,
                            o,
                            a = t.ratio,
                            u = e < 0 || (!e && ((!t._start && Et(t) && (t._initted || !Rt(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Rt(t)))) ? 0 : 1,
                            h = t._rDelay,
                            _ = 0;
                        if (
                            (h && t._repeat && ((_ = Qt(0, t._tDur, e)), (s = bt(_, h)), (o = bt(t._tTime, h)), t._yoyo && 1 & s && (u = 1 - u), s !== o && ((a = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
                            u !== a || i || t._zTime === c || (!e && t._zTime))
                        ) {
                            if (!t._initted && Pt(t, e, i, r)) return;
                            for (o = t._zTime, t._zTime = e || (r ? c : 0), r || (r = e && !o), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = _, n = t._pt; n; ) n.r(u, n.d), (n = n._next);
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                t._onUpdate && !r && _e(t, "onUpdate"),
                                _ && t._repeat && !r && t.parent && _e(t, "onRepeat"),
                                (e >= t._tDur || e < 0) && t.ratio === u && (u && vt(t, 1), r || (_e(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                        } else t._zTime || (t._zTime = e);
                    },
                    Ot = function (t, e, r) {
                        var i;
                        if (r > e)
                            for (i = t._first; i && i._start <= r; ) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next;
                            }
                        else
                            for (i = t._last; i && i._start >= r; ) {
                                if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                i = i._prev;
                            }
                    },
                    Lt = function (t, e, r, i) {
                        var n = t._repeat,
                            s = it(e) || 0,
                            o = t._tTime / t._tDur;
                        return o && !i && (t._time *= s / t._dur), (t._dur = s), (t._tDur = n ? (n < 0 ? 1e10 : it(s * (n + 1) + t._rDelay * n)) : s), o && !i ? At(t, (t._tTime = t._tDur * o)) : t.parent && Dt(t), r || xt(t.parent, t), t;
                    },
                    Ft = function (t) {
                        return t instanceof Be ? xt(t) : Lt(t, t._dur);
                    },
                    It = { _start: 0, endTime: V, totalDuration: V },
                    Ut = function t(e, r, i) {
                        var n,
                            s,
                            o,
                            a = e.labels,
                            u = e._recent || It,
                            h = e.duration() >= f ? u.endTime(!1) : e._dur;
                        return T(r) && (isNaN(r) || r in a)
                            ? ((s = r.charAt(0)),
                              (o = "%" === r.substr(-1)),
                              (n = r.indexOf("=")),
                              "<" === s || ">" === s
                                  ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (o ? (n < 0 ? u : i).totalDuration() / 100 : 1))
                                  : n < 0
                                  ? (r in a || (a[r] = h), a[r])
                                  : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))), o && i && (s = (s / 100) * (P(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
                            : null == r
                            ? h
                            : +r;
                    },
                    Bt = function (t, e, r) {
                        var i,
                            n,
                            s = b(e[1]),
                            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                            a = e[o];
                        if ((s && (a.duration = e[1]), (a.parent = r), t)) {
                            for (i = a, n = r; n && !("immediateRender" in i); ) (i = n.vars.defaults || {}), (n = A(n.vars.inherit) && n.parent);
                            (a.immediateRender = A(i.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
                        }
                        return new Ke(e[0], a, e[o + 1]);
                    },
                    Nt = function (t, e) {
                        return t || 0 === t ? e(t) : e;
                    },
                    Qt = function (t, e, r) {
                        return r < t ? t : r > e ? e : r;
                    },
                    qt = function (t) {
                        if ("string" != typeof t) return "";
                        var e = I.exec(t);
                        return e ? t.substr(e.index + e[0].length) : "";
                    },
                    jt = function (t, e, r) {
                        return Nt(r, function (r) {
                            return Qt(t, e, r);
                        });
                    },
                    Vt = [].slice,
                    Gt = function (t, e) {
                        return t && D(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && D(t[0]))) && !t.nodeType && t !== n;
                    },
                    Wt = function (t, e, r) {
                        return (
                            void 0 === r && (r = []),
                            t.forEach(function (t) {
                                var i;
                                return (T(t) && !e) || Gt(t, 1) ? (i = r).push.apply(i, Yt(t)) : r.push(t);
                            }) || r
                        );
                    },
                    Yt = function (t, e, r) {
                        return !T(t) || r || (!s && be()) ? (P(t) ? Wt(t, r) : Gt(t) ? Vt.call(t, 0) : t ? [t] : []) : Vt.call((e || o).querySelectorAll(t), 0);
                    },
                    Ht = function (t) {
                        return (
                            (t = Yt(t)[0] || q("Invalid scope") || {}),
                            function (e) {
                                var r = t.current || t.nativeElement || t;
                                return Yt(e, r.querySelectorAll ? r : r === t ? q("Invalid scope") || o.createElement("div") : t);
                            }
                        );
                    },
                    Jt = function (t) {
                        return t.sort(function () {
                            return 0.5 - Math.random();
                        });
                    },
                    Kt = function (t) {
                        if (w(t)) return t;
                        var e = D(t) ? t : { each: t },
                            r = Re(e.ease),
                            i = e.from || 0,
                            n = parseFloat(e.base) || 0,
                            s = {},
                            o = i > 0 && i < 1,
                            a = isNaN(i) || o,
                            u = e.axis,
                            h = i,
                            _ = i;
                        return (
                            T(i) ? (h = _ = { center: 0.5, edges: 0.5, end: 1 }[i] || 0) : !o && a && ((h = i[0]), (_ = i[1])),
                            function (t, o, p) {
                                var l,
                                    c,
                                    d,
                                    m,
                                    g,
                                    x,
                                    y,
                                    T,
                                    w,
                                    b = (p || e).length,
                                    k = s[b];
                                if (!k) {
                                    if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, f])[1])) {
                                        for (y = -f; y < (y = p[w++].getBoundingClientRect().left) && w < b; );
                                        w--;
                                    }
                                    for (k = s[b] = [], l = a ? Math.min(w, b) * h - 0.5 : i % w, c = a ? (b * _) / w - 0.5 : (i / w) | 0, y = 0, T = f, x = 0; x < b; x++)
                                        (d = (x % w) - l), (m = c - ((x / w) | 0)), (k[x] = g = u ? Math.abs("y" === u ? m : d) : v(d * d + m * m)), g > y && (y = g), g < T && (T = g);
                                    "random" === i && Jt(k),
                                        (k.max = y - T),
                                        (k.min = T),
                                        (k.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (w > b ? b - 1 : u ? ("y" === u ? b / w : w) : Math.max(w, b / w)) || 0) * ("edges" === i ? -1 : 1)),
                                        (k.b = b < 0 ? n - b : n),
                                        (k.u = qt(e.amount || e.each) || 0),
                                        (r = r && b < 0 ? Pe(r) : r);
                                }
                                return (b = (k[t] - k.min) / k.max || 0), it(k.b + (r ? r(b) : b) * k.v) + k.u;
                            }
                        );
                    },
                    Xt = function (t) {
                        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                        return function (r) {
                            var i = Math.round(parseFloat(r) / t) * t * e;
                            return (i - (i % 1)) / e + (b(r) ? 0 : qt(r));
                        };
                    },
                    Zt = function (t, e) {
                        var r,
                            i,
                            n = P(t);
                        return (
                            !n && D(t) && ((r = n = t.radius || f), t.values ? ((t = Yt(t.values)), (i = !b(t[0])) && (r *= r)) : (t = Xt(t.increment))),
                            Nt(
                                e,
                                n
                                    ? w(t)
                                        ? function (e) {
                                              return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                                          }
                                        : function (e) {
                                              for (var n, s, o = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), u = f, h = 0, _ = t.length; _--; )
                                                  (n = i ? (n = t[_].x - o) * n + (s = t[_].y - a) * s : Math.abs(t[_] - o)) < u && ((u = n), (h = _));
                                              return (h = !r || u <= r ? t[h] : e), i || h === e || b(e) ? h : h + qt(e);
                                          }
                                    : Xt(t)
                            )
                        );
                    },
                    $t = function (t, e, r, i) {
                        return Nt(P(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
                            return P(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
                        });
                    },
                    te = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        return function (t) {
                            return e.reduce(function (t, e) {
                                return e(t);
                            }, t);
                        };
                    },
                    ee = function (t, e) {
                        return function (r) {
                            return t(parseFloat(r)) + (e || qt(r));
                        };
                    },
                    re = function (t, e, r) {
                        return ae(t, e, 0, 1, r);
                    },
                    ie = function (t, e, r) {
                        return Nt(r, function (r) {
                            return t[~~e(r)];
                        });
                    },
                    ne = function t(e, r, i) {
                        var n = r - e;
                        return P(e)
                            ? ie(e, t(0, e.length), r)
                            : Nt(i, function (t) {
                                  return ((n + ((t - e) % n)) % n) + e;
                              });
                    },
                    se = function t(e, r, i) {
                        var n = r - e,
                            s = 2 * n;
                        return P(e)
                            ? ie(e, t(0, e.length - 1), r)
                            : Nt(i, function (t) {
                                  return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
                              });
                    },
                    oe = function (t) {
                        for (var e, r, i, n, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
                            (i = t.indexOf(")", e)), (n = "[" === t.charAt(e + 7)), (r = t.substr(e + 7, i - e - 7).match(n ? F : E)), (o += t.substr(s, e - s) + $t(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)), (s = i + 1);
                        return o + t.substr(s, t.length - s);
                    },
                    ae = function (t, e, r, i, n) {
                        var s = e - t,
                            o = i - r;
                        return Nt(n, function (e) {
                            return r + (((e - t) / s) * o || 0);
                        });
                    },
                    ue = function t(e, r, i, n) {
                        var s = isNaN(e + r)
                            ? 0
                            : function (t) {
                                  return (1 - t) * e + t * r;
                              };
                        if (!s) {
                            var o,
                                a,
                                u,
                                h,
                                _,
                                p = T(e),
                                l = {};
                            if ((!0 === i && (n = 1) && (i = null), p)) (e = { p: e }), (r = { p: r });
                            else if (P(e) && !P(r)) {
                                for (u = [], h = e.length, _ = h - 2, a = 1; a < h; a++) u.push(t(e[a - 1], e[a]));
                                h--,
                                    (s = function (t) {
                                        t *= h;
                                        var e = Math.min(_, ~~t);
                                        return u[e](t - e);
                                    }),
                                    (i = r);
                            } else n || (e = pt(P(e) ? [] : {}, e));
                            if (!u) {
                                for (o in r) qe.call(l, e, o, "get", r[o]);
                                s = function (t) {
                                    return sr(t, l) || (p ? e.p : e);
                                };
                            }
                        }
                        return Nt(i, s);
                    },
                    he = function (t, e, r) {
                        var i,
                            n,
                            s,
                            o = t.labels,
                            a = f;
                        for (i in o) (n = o[i] - e) < 0 == !!r && n && a > (n = Math.abs(n)) && ((s = i), (a = n));
                        return s;
                    },
                    _e = function (t, e, r) {
                        var i,
                            n,
                            s = t.vars,
                            o = s[e];
                        if (o) return (i = s[e + "Params"]), (n = s.callbackScope || t), r && W.length && st(), i ? o.apply(n, i) : o.call(n);
                    },
                    pe = function (t) {
                        return vt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && _e(t, "onInterrupt"), t;
                    },
                    le = function (t) {
                        var e = (t = (!t.name && t.default) || t).name,
                            r = w(t),
                            i =
                                e && !r && t.init
                                    ? function () {
                                          this._props = [];
                                      }
                                    : t,
                            n = { init: V, render: sr, add: qe, kill: ar, modifier: or, rawVars: 0 },
                            s = { targetTest: 0, get: 0, getSetter: er, aliases: {}, register: 0 };
                        if ((be(), t !== i)) {
                            if (H[e]) return;
                            ht(i, ht(ft(t, n), s)), pt(i.prototype, pt(n, ft(t, s))), (H[(i.prop = e)] = i), t.targetTest && (X.push(i), (G[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                        }
                        j(e, i), t.register && t.register(dr, i, _r);
                    },
                    fe = 255,
                    ce = {
                        aqua: [0, fe, fe],
                        lime: [0, fe, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, fe],
                        navy: [0, 0, 128],
                        white: [fe, fe, fe],
                        olive: [128, 128, 0],
                        yellow: [fe, fe, 0],
                        orange: [fe, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [fe, 0, 0],
                        pink: [fe, 192, 203],
                        cyan: [0, fe, fe],
                        transparent: [fe, fe, fe, 0],
                    },
                    de = function (t, e, r) {
                        return ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * fe + 0.5) | 0;
                    },
                    me = function (t, e, r) {
                        var i,
                            n,
                            s,
                            o,
                            a,
                            u,
                            h,
                            _,
                            p,
                            l,
                            f = t ? (b(t) ? [t >> 16, (t >> 8) & fe, t & fe] : 0) : ce.black;
                        if (!f) {
                            if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ce[t])) f = ce[t];
                            else if ("#" === t.charAt(0)) {
                                if ((t.length < 6 && ((i = t.charAt(1)), (n = t.charAt(2)), (s = t.charAt(3)), (t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                                    return [(f = parseInt(t.substr(1, 6), 16)) >> 16, (f >> 8) & fe, f & fe, parseInt(t.substr(7), 16) / 255];
                                f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & fe, t & fe];
                            } else if ("hsl" === t.substr(0, 3))
                                if (((f = l = t.match(E)), e)) {
                                    if (~t.indexOf("=")) return (f = t.match(R)), r && f.length < 4 && (f[3] = 1), f;
                                } else
                                    (o = (+f[0] % 360) / 360),
                                        (a = +f[1] / 100),
                                        (i = 2 * (u = +f[2] / 100) - (n = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                                        f.length > 3 && (f[3] *= 1),
                                        (f[0] = de(o + 1 / 3, i, n)),
                                        (f[1] = de(o, i, n)),
                                        (f[2] = de(o - 1 / 3, i, n));
                            else f = t.match(E) || ce.transparent;
                            f = f.map(Number);
                        }
                        return (
                            e &&
                                !l &&
                                ((i = f[0] / fe),
                                (n = f[1] / fe),
                                (s = f[2] / fe),
                                (u = ((h = Math.max(i, n, s)) + (_ = Math.min(i, n, s))) / 2),
                                h === _ ? (o = a = 0) : ((p = h - _), (a = u > 0.5 ? p / (2 - h - _) : p / (h + _)), (o = h === i ? (n - s) / p + (n < s ? 6 : 0) : h === n ? (s - i) / p + 2 : (i - n) / p + 4), (o *= 60)),
                                (f[0] = ~~(o + 0.5)),
                                (f[1] = ~~(100 * a + 0.5)),
                                (f[2] = ~~(100 * u + 0.5))),
                            r && f.length < 4 && (f[3] = 1),
                            f
                        );
                    },
                    ge = function (t) {
                        var e = [],
                            r = [],
                            i = -1;
                        return (
                            t.split(xe).forEach(function (t) {
                                var n = t.match(z) || [];
                                e.push.apply(e, n), r.push((i += n.length + 1));
                            }),
                            (e.c = r),
                            e
                        );
                    },
                    ve = function (t, e, r) {
                        var i,
                            n,
                            s,
                            o,
                            a = "",
                            u = (t + a).match(xe),
                            h = e ? "hsla(" : "rgba(",
                            _ = 0;
                        if (!u) return t;
                        if (
                            ((u = u.map(function (t) {
                                return (t = me(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                            })),
                            r && ((s = ge(t)), (i = r.c).join(a) !== s.c.join(a)))
                        )
                            for (o = (n = t.replace(xe, "1").split(z)).length - 1; _ < o; _++) a += n[_] + (~i.indexOf(_) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
                        if (!n) for (o = (n = t.split(xe)).length - 1; _ < o; _++) a += n[_] + u[_];
                        return a + n[o];
                    },
                    xe = (function () {
                        var t,
                            e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                        for (t in ce) e += "|" + t + "\\b";
                        return new RegExp(e + ")", "gi");
                    })(),
                    ye = /hsl[a]?\(/,
                    Te = function (t) {
                        var e,
                            r = t.join(" ");
                        if (((xe.lastIndex = 0), xe.test(r))) return (e = ye.test(r)), (t[1] = ve(t[1], e)), (t[0] = ve(t[0], e, ge(t[1]))), !0;
                    },
                    we = (function () {
                        var t,
                            e,
                            r,
                            i,
                            u,
                            h,
                            p = Date.now,
                            l = 500,
                            f = 33,
                            d = p(),
                            m = d,
                            g = 1e3 / 240,
                            v = g,
                            x = [],
                            y = function r(n) {
                                var s,
                                    o,
                                    a,
                                    _,
                                    c = p() - m,
                                    y = !0 === n;
                                if ((c > l && (d += c - f), ((s = (a = (m += c) - d) - v) > 0 || y) && ((_ = ++i.frame), (u = a - 1e3 * i.time), (i.time = a /= 1e3), (v += s + (s >= g ? 4 : g - s)), (o = 1)), y || (t = e(r)), o))
                                    for (h = 0; h < x.length; h++) x[h](a, u, _, n);
                            };
                        return (i = {
                            time: 0,
                            frame: 0,
                            tick: function () {
                                y(!0);
                            },
                            deltaRatio: function (t) {
                                return u / (1e3 / (t || 60));
                            },
                            wake: function () {
                                a &&
                                    (!s &&
                                        C() &&
                                        ((n = s = window),
                                        (o = n.document || {}),
                                        (U.gsap = dr),
                                        (n.gsapVersions || (n.gsapVersions = [])).push(dr.version),
                                        N(B || n.GreenSockGlobals || (!n.gsap && n) || {}),
                                        (r = n.requestAnimationFrame)),
                                    t && i.sleep(),
                                    (e =
                                        r ||
                                        function (t) {
                                            return setTimeout(t, (v - 1e3 * i.time + 1) | 0);
                                        }),
                                    (_ = 1),
                                    y(2));
                            },
                            sleep: function () {
                                (r ? n.cancelAnimationFrame : clearTimeout)(t), (_ = 0), (e = V);
                            },
                            lagSmoothing: function (t, e) {
                                (l = t || 1 / c), (f = Math.min(e, l, 0));
                            },
                            fps: function (t) {
                                (g = 1e3 / (t || 240)), (v = 1e3 * i.time + g);
                            },
                            add: function (t) {
                                x.indexOf(t) < 0 && x.push(t), be();
                            },
                            remove: function (t) {
                                var e;
                                ~(e = x.indexOf(t)) && x.splice(e, 1) && h >= e && h--;
                            },
                            _listeners: x,
                        });
                    })(),
                    be = function () {
                        return !_ && we.wake();
                    },
                    ke = {},
                    De = /^[\d.\-M][\d.\-,\s]/,
                    Ae = /["']/g,
                    Ce = function (t) {
                        for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++)
                            (r = s[a]), (e = a !== u - 1 ? r.lastIndexOf(",") : r.length), (i = r.substr(0, e)), (n[o] = isNaN(i) ? i.replace(Ae, "").trim() : +i), (o = r.substr(e + 1).trim());
                        return n;
                    },
                    Se = function (t) {
                        var e = t.indexOf("(") + 1,
                            r = t.indexOf(")"),
                            i = t.indexOf("(", e);
                        return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
                    },
                    Me = function (t) {
                        var e = (t + "").split("("),
                            r = ke[e[0]];
                        return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Ce(e[1])] : Se(t).split(",").map(at)) : ke._CE && De.test(t) ? ke._CE("", t) : r;
                    },
                    Pe = function (t) {
                        return function (e) {
                            return 1 - t(1 - e);
                        };
                    },
                    Ee = function t(e, r) {
                        for (var i, n = e._first; n; )
                            n instanceof Be ? t(n, r) : !n.vars.yoyoEase || (n._yoyo && n._repeat) || n._yoyo === r || (n.timeline ? t(n.timeline, r) : ((i = n._ease), (n._ease = n._yEase), (n._yEase = i), (n._yoyo = r))), (n = n._next);
                    },
                    Re = function (t, e) {
                        return (t && (w(t) ? t : ke[t] || Me(t))) || e;
                    },
                    ze = function (t, e, r, i) {
                        void 0 === r &&
                            (r = function (t) {
                                return 1 - e(1 - t);
                            }),
                            void 0 === i &&
                                (i = function (t) {
                                    return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                                });
                        var n,
                            s = { easeIn: e, easeOut: r, easeInOut: i };
                        return (
                            rt(t, function (t) {
                                for (var e in ((ke[t] = U[t] = s), (ke[(n = t.toLowerCase())] = r), s)) ke[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e];
                            }),
                            s
                        );
                    },
                    Oe = function (t) {
                        return function (e) {
                            return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                        };
                    },
                    Le = function t(e, r, i) {
                        var n = r >= 1 ? r : 1,
                            s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
                            o = (s / d) * (Math.asin(1 / n) || 0),
                            a = function (t) {
                                return 1 === t ? 1 : n * Math.pow(2, -10 * t) * y((t - o) * s) + 1;
                            },
                            u =
                                "out" === e
                                    ? a
                                    : "in" === e
                                    ? function (t) {
                                          return 1 - a(1 - t);
                                      }
                                    : Oe(a);
                        return (
                            (s = d / s),
                            (u.config = function (r, i) {
                                return t(e, r, i);
                            }),
                            u
                        );
                    },
                    Fe = function t(e, r) {
                        void 0 === r && (r = 1.70158);
                        var i = function (t) {
                                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
                            },
                            n =
                                "out" === e
                                    ? i
                                    : "in" === e
                                    ? function (t) {
                                          return 1 - i(1 - t);
                                      }
                                    : Oe(i);
                        return (
                            (n.config = function (r) {
                                return t(e, r);
                            }),
                            n
                        );
                    };
                (exports._ticker = we),
                    (exports._colorStringFilter = Te),
                    (exports._colorExp = xe),
                    (exports.splitColor = me),
                    (exports.interpolate = ue),
                    (exports.mapRange = ae),
                    (exports._replaceRandom = oe),
                    (exports.wrapYoyo = se),
                    (exports.wrap = ne),
                    (exports.normalize = re),
                    (exports.unitize = ee),
                    (exports.pipe = te),
                    (exports.random = $t),
                    (exports.snap = Zt),
                    (exports._roundModifier = Xt),
                    (exports.distribute = Kt),
                    (exports.shuffle = Jt),
                    (exports.selector = Ht),
                    (exports.toArray = Yt),
                    (exports.clamp = jt),
                    (exports.getUnit = qt),
                    (exports._removeLinkedListItem = gt),
                    (exports._setDefaults = ht),
                    (exports._round = it),
                    (exports._forEachName = rt),
                    (exports._getProperty = et),
                    (exports._getCache = tt),
                    (exports._plugins = H),
                    (exports._missingPlugin = Q),
                    (exports._relExp = L),
                    (exports._numWithUnitExp = z),
                    (exports._numExp = R),
                    (exports._isUndefined = k),
                    (exports._isString = T),
                    (exports._config = p),
                    rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
                        var r = e < 5 ? e + 1 : e;
                        ze(
                            t + ",Power" + (r - 1),
                            e
                                ? function (t) {
                                      return Math.pow(t, r);
                                  }
                                : function (t) {
                                      return t;
                                  },
                            function (t) {
                                return 1 - Math.pow(1 - t, r);
                            },
                            function (t) {
                                return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
                            }
                        );
                    }),
                    (ke.Linear.easeNone = ke.none = ke.Linear.easeIn),
                    ze("Elastic", Le("in"), Le("out"), Le()),
                    (function (t, e) {
                        var r = 1 / e,
                            i = function (i) {
                                return i < r ? t * i * i : i < 0.7272727272727273 ? t * Math.pow(i - 1.5 / e, 2) + 0.75 : i < 0.9090909090909092 ? t * (i -= 2.25 / e) * i + 0.9375 : t * Math.pow(i - 2.625 / e, 2) + 0.984375;
                            };
                        ze(
                            "Bounce",
                            function (t) {
                                return 1 - i(1 - t);
                            },
                            i
                        );
                    })(7.5625, 2.75),
                    ze("Expo", function (t) {
                        return t ? Math.pow(2, 10 * (t - 1)) : 0;
                    }),
                    ze("Circ", function (t) {
                        return -(v(1 - t * t) - 1);
                    }),
                    ze("Sine", function (t) {
                        return 1 === t ? 1 : 1 - x(t * m);
                    }),
                    ze("Back", Fe("in"), Fe("out"), Fe()),
                    (ke.SteppedEase = ke.steps = U.SteppedEase = {
                        config: function (t, e) {
                            void 0 === t && (t = 1);
                            var r = 1 / t,
                                i = t + (e ? 0 : 1),
                                n = e ? 1 : 0,
                                s = 1 - c;
                            return function (t) {
                                return (((i * Qt(0, s, t)) | 0) + n) * r;
                            };
                        },
                    }),
                    (l.ease = ke["quad.out"]),
                    rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                        return (Z += t + "," + t + "Params,");
                    });
                var Ie = function (t, e) {
                    (this.id = g++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : et), (this.set = e ? e.getSetter : er);
                };
                exports.GSCache = Ie;
                var Ue = (function () {
                    function t(t) {
                        (this.vars = t),
                            (this._delay = +t.delay || 0),
                            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                            (this._ts = 1),
                            Lt(this, +t.duration, 1, 1),
                            (this.data = t.data),
                            _ || we.wake();
                    }
                    var e = t.prototype;
                    return (
                        (e.delay = function (t) {
                            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                        }),
                        (e.duration = function (t) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                        }),
                        (e.totalDuration = function (t) {
                            return arguments.length ? ((this._dirty = 0), Lt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                        }),
                        (e.totalTime = function (t, e) {
                            if ((be(), !arguments.length)) return this._tTime;
                            var r = this._dp;
                            if (r && r.smoothChildTiming && this._ts) {
                                for (At(this, t), !r._dp || r.parent || Ct(r, this); r.parent; )
                                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
                                !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && St(this._dp, this, this._start - this._delay);
                            }
                            return (
                                (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === c) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), ot(this, t, e)), this
                            );
                        }),
                        (e.time = function (t, e) {
                            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wt(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
                        }),
                        (e.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                        }),
                        (e.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                        }),
                        (e.iteration = function (t, e) {
                            var r = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? bt(this._tTime, r) + 1 : 1;
                        }),
                        (e.timeScale = function (t) {
                            if (!arguments.length) return this._rts === -c ? 0 : this._rts;
                            if (this._rts === t) return this;
                            var e = this.parent && this._ts ? kt(this.parent._time, this) : this._tTime;
                            return (this._rts = +t || 0), (this._ts = this._ps || t === -c ? 0 : this._rts), yt(this.totalTime(Qt(-this._delay, this._tDur, e), !0));
                        }),
                        (e.paused = function (t) {
                            return arguments.length
                                ? (this._ps !== t &&
                                      ((this._ps = t),
                                      t
                                          ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                          : (be(),
                                            (this._ts = this._rts),
                                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= c) && Math.abs(this._zTime) !== c))),
                                  this)
                                : this._ps;
                        }),
                        (e.startTime = function (t) {
                            if (arguments.length) {
                                this._start = t;
                                var e = this.parent || this._dp;
                                return e && (e._sort || !this.parent) && St(e, this, t - this._delay), this;
                            }
                            return this._start;
                        }),
                        (e.endTime = function (t) {
                            return this._start + (A(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
                        }),
                        (e.rawTime = function (t) {
                            var e = this.parent || this._dp;
                            return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? kt(e.rawTime(t), this) : this._tTime) : this._tTime;
                        }),
                        (e.globalTime = function (t) {
                            for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (e._ts || 1)), (e = e._dp);
                            return r;
                        }),
                        (e.repeat = function (t) {
                            return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Ft(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                        }),
                        (e.repeatDelay = function (t) {
                            return arguments.length ? ((this._rDelay = t), Ft(this)) : this._rDelay;
                        }),
                        (e.yoyo = function (t) {
                            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                        }),
                        (e.seek = function (t, e) {
                            return this.totalTime(Ut(this, t), A(e));
                        }),
                        (e.restart = function (t, e) {
                            return this.play().totalTime(t ? -this._delay : 0, A(e));
                        }),
                        (e.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                        }),
                        (e.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                        }),
                        (e.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0);
                        }),
                        (e.resume = function () {
                            return this.paused(!1);
                        }),
                        (e.reversed = function (t) {
                            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -c : 0)), this) : this._rts < 0;
                        }),
                        (e.invalidate = function () {
                            return (this._initted = this._act = 0), (this._zTime = -c), this;
                        }),
                        (e.isActive = function () {
                            var t,
                                e = this.parent || this._dp,
                                r = this._start;
                            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - c));
                        }),
                        (e.eventCallback = function (t, e, r) {
                            var i = this.vars;
                            return arguments.length > 1 ? (e ? ((i[t] = e), r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
                        }),
                        (e.then = function (t) {
                            var e = this;
                            return new Promise(function (r) {
                                var i = w(t) ? t : ut,
                                    n = function () {
                                        var t = e.then;
                                        (e.then = null), w(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), (e.then = t);
                                    };
                                (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? n() : (e._prom = n);
                            });
                        }),
                        (e.kill = function () {
                            pe(this);
                        }),
                        t
                    );
                })();
                (exports.Animation = Ue),
                    ht(Ue.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -c, _prom: 0, _ps: !1, _rts: 1 });
                var Be = (function (r) {
                    function n(e, n) {
                        var s;
                        return (
                            void 0 === e && (e = {}),
                            ((s = r.call(this, e) || this).labels = {}),
                            (s.smoothChildTiming = !!e.smoothChildTiming),
                            (s.autoRemoveChildren = !!e.autoRemoveChildren),
                            (s._sort = A(e.sortChildren)),
                            i && St(e.parent || i, t(s), n),
                            e.reversed && s.reverse(),
                            e.paused && s.paused(!0),
                            e.scrollTrigger && Mt(t(s), e.scrollTrigger),
                            s
                        );
                    }
                    e(n, r);
                    var s = n.prototype;
                    return (
                        (s.to = function (t, e, r) {
                            return Bt(0, arguments, this), this;
                        }),
                        (s.from = function (t, e, r) {
                            return Bt(1, arguments, this), this;
                        }),
                        (s.fromTo = function (t, e, r, i) {
                            return Bt(2, arguments, this), this;
                        }),
                        (s.set = function (t, e, r) {
                            return (e.duration = 0), (e.parent = this), ct(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Ke(t, e, Ut(this, r), 1), this;
                        }),
                        (s.call = function (t, e, r) {
                            return St(this, Ke.delayedCall(0, t, e), r);
                        }),
                        (s.staggerTo = function (t, e, r, i, n, s, o) {
                            return (r.duration = e), (r.stagger = r.stagger || i), (r.onComplete = s), (r.onCompleteParams = o), (r.parent = this), new Ke(t, r, Ut(this, n)), this;
                        }),
                        (s.staggerFrom = function (t, e, r, i, n, s, o) {
                            return (r.runBackwards = 1), (ct(r).immediateRender = A(r.immediateRender)), this.staggerTo(t, e, r, i, n, s, o);
                        }),
                        (s.staggerFromTo = function (t, e, r, i, n, s, o, a) {
                            return (i.startAt = r), (ct(i).immediateRender = A(i.immediateRender)), this.staggerTo(t, e, i, n, s, o, a);
                        }),
                        (s.render = function (t, e, r) {
                            var n,
                                s,
                                o,
                                a,
                                u,
                                h,
                                _,
                                p,
                                l,
                                f,
                                d,
                                m,
                                g = this._time,
                                v = this._dirty ? this.totalDuration() : this._tDur,
                                x = this._dur,
                                y = this !== i && t > v - c && t >= 0 ? v : t < c ? 0 : t,
                                T = this._zTime < 0 != t < 0 && (this._initted || !x);
                            if (y !== this._tTime || r || T) {
                                if ((g !== this._time && x && ((y += this._time - g), (t += this._time - g)), (n = y), (l = this._start), (h = !(p = this._ts)), T && (x || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                                    if (((d = this._yoyo), (u = x + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * u + t, e, r);
                                    if (
                                        ((n = it(y % u)),
                                        y === v ? ((a = this._repeat), (n = x)) : ((a = ~~(y / u)) && a === y / u && ((n = x), a--), n > x && (n = x)),
                                        (f = bt(this._tTime, u)),
                                        !g && this._tTime && f !== a && (f = a),
                                        d && 1 & a && ((n = x - n), (m = 1)),
                                        a !== f && !this._lock)
                                    ) {
                                        var w = d && 1 & f,
                                            b = w === (d && 1 & a);
                                        if (
                                            (a < f && (w = !w),
                                            (g = w ? 0 : x),
                                            (this._lock = 1),
                                            (this.render(g || (m ? 0 : it(a * u)), e, !x)._lock = 0),
                                            (this._tTime = y),
                                            !e && this.parent && _e(this, "onRepeat"),
                                            this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                                            (g && g !== this._time) || h !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                                        )
                                            return this;
                                        if (((x = this._dur), (v = this._tDur), b && ((this._lock = 2), (g = w ? x : -1e-4), this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), (this._lock = 0), !this._ts && !h))
                                            return this;
                                        Ee(this, m);
                                    }
                                }
                                if (
                                    (this._hasPause && !this._forcing && this._lock < 2 && (_ = Ot(this, it(g), it(n))) && (y -= n - (n = _._start)),
                                    (this._tTime = y),
                                    (this._time = n),
                                    (this._act = !p),
                                    this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (g = 0)),
                                    !g && n && !e && (_e(this, "onStart"), this._tTime !== y))
                                )
                                    return this;
                                if (n >= g && t >= 0)
                                    for (s = this._first; s; ) {
                                        if (((o = s._next), (s._act || n >= s._start) && s._ts && _ !== s)) {
                                            if (s.parent !== this) return this.render(t, e, r);
                                            if ((s.render(s._ts > 0 ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, e, r), n !== this._time || (!this._ts && !h))) {
                                                (_ = 0), o && (y += this._zTime = -c);
                                                break;
                                            }
                                        }
                                        s = o;
                                    }
                                else {
                                    s = this._last;
                                    for (var k = t < 0 ? t : n; s; ) {
                                        if (((o = s._prev), (s._act || k <= s._end) && s._ts && _ !== s)) {
                                            if (s.parent !== this) return this.render(t, e, r);
                                            if ((s.render(s._ts > 0 ? (k - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (k - s._start) * s._ts, e, r), n !== this._time || (!this._ts && !h))) {
                                                (_ = 0), o && (y += this._zTime = k ? -c : c);
                                                break;
                                            }
                                        }
                                        s = o;
                                    }
                                }
                                if (_ && !e && (this.pause(), (_.render(n >= g ? 0 : -c)._zTime = n >= g ? 1 : -1), this._ts)) return (this._start = l), Dt(this), this.render(t, e, r);
                                this._onUpdate && !e && _e(this, "onUpdate", !0),
                                    ((y === v && v >= this.totalDuration()) || (!y && g)) &&
                                        ((l !== this._start && Math.abs(p) === Math.abs(this._ts)) ||
                                            this._lock ||
                                            ((t || !x) && ((y === v && this._ts > 0) || (!y && this._ts < 0)) && vt(this, 1),
                                            e || (t < 0 && !g) || (!y && !g && v) || (_e(this, y === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())));
                            }
                            return this;
                        }),
                        (s.add = function (t, e) {
                            var r = this;
                            if ((b(e) || (e = Ut(this, e, t)), !(t instanceof Ue))) {
                                if (P(t))
                                    return (
                                        t.forEach(function (t) {
                                            return r.add(t, e);
                                        }),
                                        this
                                    );
                                if (T(t)) return this.addLabel(t, e);
                                if (!w(t)) return this;
                                t = Ke.delayedCall(0, t);
                            }
                            return this !== t ? St(this, t, e) : this;
                        }),
                        (s.getChildren = function (t, e, r, i) {
                            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -f);
                            for (var n = [], s = this._first; s; ) s._start >= i && (s instanceof Ke ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), (s = s._next);
                            return n;
                        }),
                        (s.getById = function (t) {
                            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
                        }),
                        (s.remove = function (t) {
                            return T(t) ? this.removeLabel(t) : w(t) ? this.killTweensOf(t) : (gt(this, t), t === this._recent && (this._recent = this._last), xt(this));
                        }),
                        (s.totalTime = function (t, e) {
                            return arguments.length
                                ? ((this._forcing = 1),
                                  !this._dp && this._ts && (this._start = it(we.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
                                  r.prototype.totalTime.call(this, t, e),
                                  (this._forcing = 0),
                                  this)
                                : this._tTime;
                        }),
                        (s.addLabel = function (t, e) {
                            return (this.labels[t] = Ut(this, e)), this;
                        }),
                        (s.removeLabel = function (t) {
                            return delete this.labels[t], this;
                        }),
                        (s.addPause = function (t, e, r) {
                            var i = Ke.delayedCall(0, e || V, r);
                            return (i.data = "isPause"), (this._hasPause = 1), St(this, i, Ut(this, t));
                        }),
                        (s.removePause = function (t) {
                            var e = this._first;
                            for (t = Ut(this, t); e; ) e._start === t && "isPause" === e.data && vt(e), (e = e._next);
                        }),
                        (s.killTweensOf = function (t, e, r) {
                            for (var i = this.getTweensOf(t, r), n = i.length; n--; ) Ne !== i[n] && i[n].kill(t, e);
                            return this;
                        }),
                        (s.getTweensOf = function (t, e) {
                            for (var r, i = [], n = Yt(t), s = this._first, o = b(e); s; )
                                s instanceof Ke
                                    ? nt(s._targets, n) && (o ? (!Ne || (s._initted && s._ts)) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s)
                                    : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                                    (s = s._next);
                            return i;
                        }),
                        (s.tweenTo = function (t, e) {
                            e = e || {};
                            var r,
                                i = this,
                                n = Ut(i, t),
                                s = e,
                                o = s.startAt,
                                a = s.onStart,
                                u = s.onStartParams,
                                h = s.immediateRender,
                                _ = Ke.to(
                                    i,
                                    ht(
                                        {
                                            ease: e.ease || "none",
                                            lazy: !1,
                                            immediateRender: !1,
                                            time: n,
                                            overwrite: "auto",
                                            duration: e.duration || Math.abs((n - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || c,
                                            onStart: function () {
                                                if ((i.pause(), !r)) {
                                                    var t = e.duration || Math.abs((n - (o && "time" in o ? o.time : i._time)) / i.timeScale());
                                                    _._dur !== t && Lt(_, t, 0, 1).render(_._time, !0, !0), (r = 1);
                                                }
                                                a && a.apply(_, u || []);
                                            },
                                        },
                                        e
                                    )
                                );
                            return h ? _.render(0) : _;
                        }),
                        (s.tweenFromTo = function (t, e, r) {
                            return this.tweenTo(e, ht({ startAt: { time: Ut(this, t) } }, r));
                        }),
                        (s.recent = function () {
                            return this._recent;
                        }),
                        (s.nextLabel = function (t) {
                            return void 0 === t && (t = this._time), he(this, Ut(this, t));
                        }),
                        (s.previousLabel = function (t) {
                            return void 0 === t && (t = this._time), he(this, Ut(this, t), 1);
                        }),
                        (s.currentLabel = function (t) {
                            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + c);
                        }),
                        (s.shiftChildren = function (t, e, r) {
                            void 0 === r && (r = 0);
                            for (var i, n = this._first, s = this.labels; n; ) n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
                            if (e) for (i in s) s[i] >= r && (s[i] += t);
                            return xt(this);
                        }),
                        (s.invalidate = function () {
                            var t = this._first;
                            for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
                            return r.prototype.invalidate.call(this);
                        }),
                        (s.clear = function (t) {
                            void 0 === t && (t = !0);
                            for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
                            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), xt(this);
                        }),
                        (s.totalDuration = function (t) {
                            var e,
                                r,
                                n,
                                s = 0,
                                o = this._last,
                                a = f;
                            if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
                            if (this._dirty) {
                                for (n = this.parent; o; )
                                    (e = o._prev),
                                        o._dirty && o.totalDuration(),
                                        (r = o._start) > a && this._sort && o._ts && !this._lock ? ((this._lock = 1), (St(this, o, r - o._delay, 1)._lock = 0)) : (a = r),
                                        r < 0 &&
                                            o._ts &&
                                            ((s -= r), ((!n && !this._dp) || (n && n.smoothChildTiming)) && ((this._start += r / this._ts), (this._time -= r), (this._tTime -= r)), this.shiftChildren(-r, !1, -Infinity), (a = 0)),
                                        o._end > s && o._ts && (s = o._end),
                                        (o = e);
                                Lt(this, this === i && this._time > s ? this._time : s, 1, 1), (this._dirty = 0);
                            }
                            return this._tDur;
                        }),
                        (n.updateRoot = function (t) {
                            if ((i._ts && (ot(i, kt(t, i)), (u = we.frame)), we.frame >= K)) {
                                K += p.autoSleep || 120;
                                var e = i._first;
                                if ((!e || !e._ts) && p.autoSleep && we._listeners.length < 2) {
                                    for (; e && !e._ts; ) e = e._next;
                                    e || we.sleep();
                                }
                            }
                        }),
                        n
                    );
                })(Ue);
                (exports.TimelineLite = exports.TimelineMax = exports.Timeline = Be), ht(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
                var Ne,
                    Qe = function (t, e, r, i, n, s, o) {
                        var a,
                            u,
                            h,
                            _,
                            p,
                            l,
                            f,
                            c,
                            d = new _r(this._pt, t, e, 0, 1, nr, null, n),
                            m = 0,
                            g = 0;
                        for (d.b = r, d.e = i, r += "", (f = ~(i += "").indexOf("random(")) && (i = oe(i)), s && (s((c = [r, i]), t, e), (r = c[0]), (i = c[1])), u = r.match(O) || []; (a = O.exec(i)); )
                            (_ = a[0]),
                                (p = i.substring(m, a.index)),
                                h ? (h = (h + 1) % 5) : "rgba(" === p.substr(-5) && (h = 1),
                                _ !== u[g++] &&
                                    ((l = parseFloat(u[g - 1]) || 0),
                                    (d._pt = { _next: d._pt, p: p || 1 === g ? p : ",", s: l, c: "=" === _.charAt(1) ? parseFloat(_.substr(2)) * ("-" === _.charAt(0) ? -1 : 1) : parseFloat(_) - l, m: h && h < 4 ? Math.round : 0 }),
                                    (m = O.lastIndex));
                        return (d.c = m < i.length ? i.substring(m, i.length) : ""), (d.fp = o), (L.test(i) || f) && (d.e = 0), (this._pt = d), d;
                    },
                    qe = function (t, e, r, i, n, s, o, a, u) {
                        w(i) && (i = i(n || 0, t, s));
                        var h,
                            _ = t[e],
                            l = "get" !== r ? r : w(_) ? (u ? t[e.indexOf("set") || !w(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]()) : _,
                            f = w(_) ? (u ? $e : Ze) : Xe;
                        if ((T(i) && (~i.indexOf("random(") && (i = oe(i)), "=" === i.charAt(1) && ((h = parseFloat(l) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (qt(l) || 0)) || 0 === h) && (i = h)), l !== i))
                            return isNaN(l * i) || "" === i
                                ? (!_ && !(e in t) && Q(e, i), Qe.call(this, t, e, l, i, f, a || p.stringFilter, u))
                                : ((h = new _r(this._pt, t, e, +l || 0, i - (l || 0), "boolean" == typeof _ ? ir : rr, 0, f)), u && (h.fp = u), o && h.modifier(o, this, t), (this._pt = h));
                    },
                    je = function (t, e, r, i, n) {
                        if ((w(t) && (t = Ye(t, n, e, r, i)), !D(t) || (t.style && t.nodeType) || P(t) || M(t))) return T(t) ? Ye(t, n, e, r, i) : t;
                        var s,
                            o = {};
                        for (s in t) o[s] = Ye(t[s], n, e, r, i);
                        return o;
                    },
                    Ve = function (t, e, r, i, n, s) {
                        var o, a, u, _;
                        if (H[t] && !1 !== (o = new H[t]()).init(n, o.rawVars ? e[t] : je(e[t], i, n, s, r), r, i, s) && ((r._pt = a = new _r(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)), r !== h))
                            for (u = r._ptLookup[r._targets.indexOf(n)], _ = o._props.length; _--; ) u[o._props[_]] = a;
                        return o;
                    },
                    Ge = function t(e, n) {
                        var s,
                            o,
                            a,
                            u,
                            h,
                            _,
                            p,
                            f,
                            d,
                            m,
                            g,
                            v,
                            x,
                            y = e.vars,
                            T = y.ease,
                            w = y.startAt,
                            b = y.immediateRender,
                            k = y.lazy,
                            D = y.onUpdate,
                            C = y.onUpdateParams,
                            S = y.callbackScope,
                            M = y.runBackwards,
                            P = y.yoyoEase,
                            E = y.keyframes,
                            R = y.autoRevert,
                            z = e._dur,
                            O = e._startAt,
                            L = e._targets,
                            F = e.parent,
                            I = F && "nested" === F.data ? F.parent._targets : L,
                            U = "auto" === e._overwrite && !r,
                            B = e.timeline;
                        if (
                            (B && (!E || !T) && (T = "none"),
                            (e._ease = Re(T, l.ease)),
                            (e._yEase = P ? Pe(Re(!0 === P ? T : P, l.ease)) : 0),
                            P && e._yoyo && !e._repeat && ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
                            (e._from = !B && !!y.runBackwards),
                            !B)
                        ) {
                            if (((v = (f = L[0] ? tt(L[0]).harness : 0) && y[f.prop]), (s = ft(y, G)), O && O.render(-1, !0).kill(), w))
                                if (
                                    (vt((e._startAt = Ke.set(L, ht({ data: "isStart", overwrite: !1, parent: F, immediateRender: !0, lazy: A(k), startAt: null, delay: 0, onUpdate: D, onUpdateParams: C, callbackScope: S, stagger: 0 }, w)))),
                                    n < 0 && !b && !R && e._startAt.render(-1, !0),
                                    b)
                                ) {
                                    if ((n > 0 && !R && (e._startAt = 0), z && n <= 0)) return void (n && (e._zTime = n));
                                } else !1 === R && (e._startAt = 0);
                            else if (M && z)
                                if (O) !R && (e._startAt = 0);
                                else if (
                                    (n && (b = !1),
                                    (a = ht({ overwrite: !1, data: "isFromStart", lazy: b && A(k), immediateRender: b, stagger: 0, parent: F }, s)),
                                    v && (a[f.prop] = v),
                                    vt((e._startAt = Ke.set(L, a))),
                                    n < 0 && e._startAt.render(-1, !0),
                                    b)
                                ) {
                                    if (!n) return;
                                } else t(e._startAt, c);
                            for (e._pt = 0, k = (z && A(k)) || (k && !z), o = 0; o < L.length; o++) {
                                if (
                                    ((p = (h = L[o])._gsap || $(L)[o]._gsap),
                                    (e._ptLookup[o] = m = {}),
                                    Y[p.id] && W.length && st(),
                                    (g = I === L ? o : I.indexOf(h)),
                                    f &&
                                        !1 !== (d = new f()).init(h, v || s, e, g, I) &&
                                        ((e._pt = u = new _r(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority)),
                                        d._props.forEach(function (t) {
                                            m[t] = u;
                                        }),
                                        d.priority && (_ = 1)),
                                    !f || v)
                                )
                                    for (a in s) H[a] && (d = Ve(a, s, e, g, h, I)) ? d.priority && (_ = 1) : (m[a] = u = qe.call(e, h, a, "get", s[a], g, I, 0, y.stringFilter));
                                e._op && e._op[o] && e.kill(h, e._op[o]), U && e._pt && ((Ne = e), i.killTweensOf(h, m, e.globalTime(0)), (x = !e.parent), (Ne = 0)), e._pt && k && (Y[p.id] = 1);
                            }
                            _ && hr(e), e._onInit && e._onInit(e);
                        }
                        (e._onUpdate = D), (e._initted = (!e._op || e._pt) && !x);
                    },
                    We = function (t, e) {
                        var r,
                            i,
                            n,
                            s,
                            o = t[0] ? tt(t[0]).harness : 0,
                            a = o && o.aliases;
                        if (!a) return e;
                        for (i in ((r = pt({}, e)), a)) if (i in r) for (n = (s = a[i].split(",")).length; n--; ) r[s[n]] = r[i];
                        return r;
                    },
                    Ye = function (t, e, r, i, n) {
                        return w(t) ? t.call(e, r, i, n) : T(t) && ~t.indexOf("random(") ? oe(t) : t;
                    },
                    He = Z + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                    Je = (He + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
                exports._checkPlugin = Ve;
                var Ke = (function (n) {
                    function s(e, s, o, a) {
                        var u;
                        "number" == typeof s && ((o.duration = s), (s = o), (o = null));
                        var h,
                            _,
                            l,
                            f,
                            d,
                            m,
                            g,
                            v,
                            x = (u = n.call(this, a ? s : ct(s)) || this).vars,
                            y = x.duration,
                            T = x.delay,
                            w = x.immediateRender,
                            k = x.stagger,
                            C = x.overwrite,
                            E = x.keyframes,
                            R = x.defaults,
                            z = x.scrollTrigger,
                            O = x.yoyoEase,
                            L = s.parent || i,
                            F = (P(e) || M(e) ? b(e[0]) : "length" in s) ? [e] : Yt(e);
                        if (((u._targets = F.length ? $(F) : q("GSAP target " + e + " not found. https://greensock.com", !p.nullTargetWarn) || []), (u._ptLookup = []), (u._overwrite = C), E || k || S(y) || S(T))) {
                            if (((s = u.vars), (h = u.timeline = new Be({ data: "nested", defaults: R || {} })).kill(), (h.parent = h._dp = t(u)), (h._start = 0), E))
                                ht(h.vars.defaults, { ease: "none" }),
                                    k
                                        ? F.forEach(function (t, e) {
                                              return E.forEach(function (r, i) {
                                                  return h.to(t, r, i ? ">" : e * k);
                                              });
                                          })
                                        : E.forEach(function (t) {
                                              return h.to(F, t, ">");
                                          });
                            else {
                                if (((f = F.length), (g = k ? Kt(k) : V), D(k))) for (d in k) ~He.indexOf(d) && (v || (v = {}), (v[d] = k[d]));
                                for (_ = 0; _ < f; _++) {
                                    for (d in ((l = {}), s)) Je.indexOf(d) < 0 && (l[d] = s[d]);
                                    (l.stagger = 0),
                                        O && (l.yoyoEase = O),
                                        v && pt(l, v),
                                        (m = F[_]),
                                        (l.duration = +Ye(y, t(u), _, m, F)),
                                        (l.delay = (+Ye(T, t(u), _, m, F) || 0) - u._delay),
                                        !k && 1 === f && l.delay && ((u._delay = T = l.delay), (u._start += T), (l.delay = 0)),
                                        h.to(m, l, g(_, m, F));
                                }
                                h.duration() ? (y = T = 0) : (u.timeline = 0);
                            }
                            y || u.duration((y = h.duration()));
                        } else u.timeline = 0;
                        return (
                            !0 !== C || r || ((Ne = t(u)), i.killTweensOf(F), (Ne = 0)),
                            St(L, t(u), o),
                            s.reversed && u.reverse(),
                            s.paused && u.paused(!0),
                            (w || (!y && !E && u._start === it(L._time) && A(w) && Tt(t(u)) && "nested" !== L.data)) && ((u._tTime = -c), u.render(Math.max(0, -T))),
                            z && Mt(t(u), z),
                            u
                        );
                    }
                    e(s, n);
                    var o = s.prototype;
                    return (
                        (o.render = function (t, e, r) {
                            var i,
                                n,
                                s,
                                o,
                                a,
                                u,
                                h,
                                _,
                                p,
                                l = this._time,
                                f = this._tDur,
                                d = this._dur,
                                m = t > f - c && t >= 0 ? f : t < c ? 0 : t;
                            if (d) {
                                if (m !== this._tTime || !t || r || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != t < 0)) {
                                    if (((i = m), (_ = this.timeline), this._repeat)) {
                                        if (((o = d + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * o + t, e, r);
                                        if (
                                            ((i = it(m % o)),
                                            m === f ? ((s = this._repeat), (i = d)) : ((s = ~~(m / o)) && s === m / o && ((i = d), s--), i > d && (i = d)),
                                            (u = this._yoyo && 1 & s) && ((p = this._yEase), (i = d - i)),
                                            (a = bt(this._tTime, o)),
                                            i === l && !r && this._initted)
                                        )
                                            return this;
                                        s !== a && (_ && this._yEase && Ee(_, u), !this.vars.repeatRefresh || u || this._lock || ((this._lock = r = 1), (this.render(it(o * s), !0).invalidate()._lock = 0)));
                                    }
                                    if (!this._initted) {
                                        if (Pt(this, t < 0 ? t : i, r, e)) return (this._tTime = 0), this;
                                        if (d !== this._dur) return this.render(t, e, r);
                                    }
                                    if (
                                        ((this._tTime = m),
                                        (this._time = i),
                                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                        (this.ratio = h = (p || this._ease)(i / d)),
                                        this._from && (this.ratio = h = 1 - h),
                                        i && !l && !e && _e(this, "onStart"),
                                        i && !l && !e && (_e(this, "onStart"), this._tTime !== m))
                                    )
                                        return this;
                                    for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
                                    (_ && _.render(t < 0 ? t : !i && u ? -c : _._dur * h, e, r)) || (this._startAt && (this._zTime = t)),
                                        this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), _e(this, "onUpdate")),
                                        this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && _e(this, "onRepeat"),
                                        (m !== this._tDur && m) ||
                                            this._tTime !== m ||
                                            (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                            (t || !d) && ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) && vt(this, 1),
                                            e || (t < 0 && !l) || (!m && !l) || (_e(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()));
                                }
                            } else zt(this, t, e, r);
                            return this;
                        }),
                        (o.targets = function () {
                            return this._targets;
                        }),
                        (o.invalidate = function () {
                            return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), n.prototype.invalidate.call(this);
                        }),
                        (o.kill = function (t, e) {
                            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? pe(this) : this;
                            if (this.timeline) {
                                var r = this.timeline.totalDuration();
                                return this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite)._first || pe(this), this.parent && r !== this.timeline.totalDuration() && Lt(this, (this._dur * this.timeline._tDur) / r, 0, 1), this;
                            }
                            var i,
                                n,
                                s,
                                o,
                                a,
                                u,
                                h,
                                _ = this._targets,
                                p = t ? Yt(t) : _,
                                l = this._ptLookup,
                                f = this._pt;
                            if ((!e || "all" === e) && dt(_, p)) return "all" === e && (this._pt = 0), pe(this);
                            for (
                                i = this._op = this._op || [],
                                    "all" !== e &&
                                        (T(e) &&
                                            ((a = {}),
                                            rt(e, function (t) {
                                                return (a[t] = 1);
                                            }),
                                            (e = a)),
                                        (e = We(_, e))),
                                    h = _.length;
                                h--;

                            )
                                if (~p.indexOf(_[h]))
                                    for (a in ((n = l[h]), "all" === e ? ((i[h] = e), (o = n), (s = {})) : ((s = i[h] = i[h] || {}), (o = e)), o))
                                        (u = n && n[a]) && (("kill" in u.d && !0 !== u.d.kill(a)) || gt(this, u, "_pt"), delete n[a]), "all" !== s && (s[a] = 1);
                            return this._initted && !this._pt && f && pe(this), this;
                        }),
                        (s.to = function (t, e) {
                            return new s(t, e, arguments[2]);
                        }),
                        (s.from = function (t, e) {
                            return Bt(1, arguments);
                        }),
                        (s.delayedCall = function (t, e, r, i) {
                            return new s(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i });
                        }),
                        (s.fromTo = function (t, e, r) {
                            return Bt(2, arguments);
                        }),
                        (s.set = function (t, e) {
                            return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
                        }),
                        (s.killTweensOf = function (t, e, r) {
                            return i.killTweensOf(t, e, r);
                        }),
                        s
                    );
                })(Ue);
                (exports.TweenLite = exports.TweenMax = exports.Tween = Ke),
                    ht(Ke.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
                    rt("staggerTo,staggerFrom,staggerFromTo", function (t) {
                        Ke[t] = function () {
                            var e = new Be(),
                                r = Vt.call(arguments, 0);
                            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
                        };
                    });
                var Xe = function (t, e, r) {
                        return (t[e] = r);
                    },
                    Ze = function (t, e, r) {
                        return t[e](r);
                    },
                    $e = function (t, e, r, i) {
                        return t[e](i.fp, r);
                    },
                    tr = function (t, e, r) {
                        return t.setAttribute(e, r);
                    },
                    er = function (t, e) {
                        return w(t[e]) ? Ze : k(t[e]) && t.setAttribute ? tr : Xe;
                    },
                    rr = function (t, e) {
                        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
                    },
                    ir = function (t, e) {
                        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
                    },
                    nr = function (t, e) {
                        var r = e._pt,
                            i = "";
                        if (!t && e.b) i = e.b;
                        else if (1 === t && e.e) i = e.e;
                        else {
                            for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i), (r = r._next);
                            i += e.c;
                        }
                        e.set(e.t, e.p, i, e);
                    },
                    sr = function (t, e) {
                        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
                    },
                    or = function (t, e, r, i) {
                        for (var n, s = this._pt; s; ) (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
                    },
                    ar = function (t) {
                        for (var e, r, i = this._pt; i; ) (r = i._next), (i.p === t && !i.op) || i.op === t ? gt(this, i, "_pt") : i.dep || (e = 1), (i = r);
                        return !e;
                    },
                    ur = function (t, e, r, i) {
                        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
                    },
                    hr = function (t) {
                        for (var e, r, i, n, s = t._pt; s; ) {
                            for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
                            (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s), (s._next = r) ? (r._prev = s) : (n = s), (s = e);
                        }
                        t._pt = i;
                    };
                (exports._sortPropTweensByPriority = hr), (exports._renderComplexString = nr), (exports._getSetter = er);
                var _r = (function () {
                    function t(t, e, r, i, n, s, o, a, u) {
                        (this.t = e), (this.s = i), (this.c = n), (this.p = r), (this.r = s || rr), (this.d = o || this), (this.set = a || Xe), (this.pr = u || 0), (this._next = t), t && (t._prev = this);
                    }
                    return (
                        (t.prototype.modifier = function (t, e, r) {
                            (this.mSet = this.mSet || this.set), (this.set = ur), (this.m = t), (this.mt = r), (this.tween = e);
                        }),
                        t
                    );
                })();
                (exports.PropTween = _r),
                    rt(
                        Z +
                            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
                        function (t) {
                            return (G[t] = 1);
                        }
                    ),
                    (U.TweenMax = U.TweenLite = Ke),
                    (U.TimelineLite = U.TimelineMax = Be),
                    (i = new Be({ sortChildren: !1, defaults: l, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
                    (p.stringFilter = Te);
                var pr = {
                    registerPlugin: function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        e.forEach(function (t) {
                            return le(t);
                        });
                    },
                    timeline: function (t) {
                        return new Be(t);
                    },
                    getTweensOf: function (t, e) {
                        return i.getTweensOf(t, e);
                    },
                    getProperty: function (t, e, r, i) {
                        T(t) && (t = Yt(t)[0]);
                        var n = tt(t || {}).get,
                            s = r ? ut : at;
                        return (
                            "native" === r && (r = ""),
                            t
                                ? e
                                    ? s(((H[e] && H[e].get) || n)(t, e, r, i))
                                    : function (e, r, i) {
                                          return s(((H[e] && H[e].get) || n)(t, e, r, i));
                                      }
                                : t
                        );
                    },
                    quickSetter: function (t, e, r) {
                        if ((t = Yt(t)).length > 1) {
                            var i = t.map(function (t) {
                                    return dr.quickSetter(t, e, r);
                                }),
                                n = i.length;
                            return function (t) {
                                for (var e = n; e--; ) i[e](t);
                            };
                        }
                        t = t[0] || {};
                        var s = H[e],
                            o = tt(t),
                            a = (o.harness && (o.harness.aliases || {})[e]) || e,
                            u = s
                                ? function (e) {
                                      var i = new s();
                                      (h._pt = 0), i.init(t, r ? e + r : e, h, 0, [t]), i.render(1, i), h._pt && sr(1, h);
                                  }
                                : o.set(t, a);
                        return s
                            ? u
                            : function (e) {
                                  return u(t, a, r ? e + r : e, o, 1);
                              };
                    },
                    isTweening: function (t) {
                        return i.getTweensOf(t, !0).length > 0;
                    },
                    defaults: function (t) {
                        return t && t.ease && (t.ease = Re(t.ease, l.ease)), lt(l, t || {});
                    },
                    config: function (t) {
                        return lt(p, t || {});
                    },
                    registerEffect: function (t) {
                        var e = t.name,
                            r = t.effect,
                            i = t.plugins,
                            n = t.defaults,
                            s = t.extendTimeline;
                        (i || "").split(",").forEach(function (t) {
                            return t && !H[t] && !U[t] && q(e + " effect requires " + t + " plugin.");
                        }),
                            (J[e] = function (t, e, i) {
                                return r(Yt(t), ht(e || {}, n), i);
                            }),
                            s &&
                                (Be.prototype[e] = function (t, r, i) {
                                    return this.add(J[e](t, D(r) ? r : (i = r) && {}, this), i);
                                });
                    },
                    registerEase: function (t, e) {
                        ke[t] = Re(e);
                    },
                    parseEase: function (t, e) {
                        return arguments.length ? Re(t, e) : ke;
                    },
                    getById: function (t) {
                        return i.getById(t);
                    },
                    exportRoot: function (t, e) {
                        void 0 === t && (t = {});
                        var r,
                            n,
                            s = new Be(t);
                        for (s.smoothChildTiming = A(t.smoothChildTiming), i.remove(s), s._dp = 0, s._time = s._tTime = i._time, r = i._first; r; )
                            (n = r._next), (!e && !r._dur && r instanceof Ke && r.vars.onComplete === r._targets[0]) || St(s, r, r._start - r._delay), (r = n);
                        return St(i, s, 0), s;
                    },
                    utils: {
                        wrap: ne,
                        wrapYoyo: se,
                        distribute: Kt,
                        random: $t,
                        snap: Zt,
                        normalize: re,
                        getUnit: qt,
                        clamp: jt,
                        splitColor: me,
                        toArray: Yt,
                        selector: Ht,
                        mapRange: ae,
                        pipe: te,
                        unitize: ee,
                        interpolate: ue,
                        shuffle: Jt,
                    },
                    install: N,
                    effects: J,
                    ticker: we,
                    updateRoot: Be.updateRoot,
                    plugins: H,
                    globalTimeline: i,
                    core: {
                        PropTween: _r,
                        globals: j,
                        Tween: Ke,
                        Timeline: Be,
                        Animation: Ue,
                        getCache: tt,
                        _removeLinkedListItem: gt,
                        suppressOverwrites: function (t) {
                            return (r = t);
                        },
                    },
                };
                rt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
                    return (pr[t] = Ke[t]);
                }),
                    we.add(Be.updateRoot),
                    (h = pr.to({}, { duration: 0 }));
                var lr = function (t, e) {
                        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
                        return r;
                    },
                    fr = function (t, e) {
                        var r,
                            i,
                            n,
                            s = t._targets;
                        for (r in e) for (i = s.length; i--; ) (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = lr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r));
                    },
                    cr = function (t, e) {
                        return {
                            name: t,
                            rawVars: 1,
                            init: function (t, r, i) {
                                i._onInit = function (t) {
                                    var i, n;
                                    if (
                                        (T(r) &&
                                            ((i = {}),
                                            rt(r, function (t) {
                                                return (i[t] = 1);
                                            }),
                                            (r = i)),
                                        e)
                                    ) {
                                        for (n in ((i = {}), r)) i[n] = e(r[n]);
                                        r = i;
                                    }
                                    fr(t, r);
                                };
                            },
                        };
                    },
                    dr =
                        pr.registerPlugin(
                            {
                                name: "attr",
                                init: function (t, e, r, i, n) {
                                    var s, o;
                                    for (s in e) (o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (o.op = s), this._props.push(s);
                                },
                            },
                            {
                                name: "endArray",
                                init: function (t, e) {
                                    for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
                                },
                            },
                            cr("roundProps", Xt),
                            cr("modifiers"),
                            cr("snap", Zt)
                        ) || pr;
                (exports.default = exports.gsap = dr), (Ke.version = Be.version = dr.version = "3.7.0"), (a = 1), C() && be();
                var mr = ke.Power0,
                    gr = ke.Power1,
                    vr = ke.Power2,
                    xr = ke.Power3,
                    yr = ke.Power4,
                    Tr = ke.Linear,
                    wr = ke.Quad,
                    br = ke.Cubic,
                    kr = ke.Quart,
                    Dr = ke.Quint,
                    Ar = ke.Strong,
                    Cr = ke.Elastic,
                    Sr = ke.Back,
                    Mr = ke.SteppedEase,
                    Pr = ke.Bounce,
                    Er = ke.Sine,
                    Rr = ke.Expo,
                    zr = ke.Circ;
                (exports.Circ = zr),
                    (exports.Expo = Rr),
                    (exports.Sine = Er),
                    (exports.Bounce = Pr),
                    (exports.SteppedEase = Mr),
                    (exports.Back = Sr),
                    (exports.Elastic = Cr),
                    (exports.Strong = Ar),
                    (exports.Quint = Dr),
                    (exports.Quart = kr),
                    (exports.Cubic = br),
                    (exports.Quad = wr),
                    (exports.Linear = Tr),
                    (exports.Power4 = yr),
                    (exports.Power3 = xr),
                    (exports.Power2 = vr),
                    (exports.Power1 = gr),
                    (exports.Power0 = mr);
            },
            {},
        ],
        bp4Z: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.checkPrefix = exports._createElement = exports._getBBox = exports.default = exports.CSSPlugin = void 0);
                var t,
                    e,
                    r,
                    n,
                    i,
                    s,
                    o,
                    a,
                    p = require("./gsap-core.js"),
                    u = function () {
                        return "undefined" != typeof window;
                    },
                    c = {},
                    f = 180 / Math.PI,
                    l = Math.PI / 180,
                    h = Math.atan2,
                    g = 1e8,
                    d = /([A-Z])/g,
                    x = /(?:left|right|width|margin|padding|x)/i,
                    m = /[\s,\(]\S/,
                    _ = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                    y = function (t, e) {
                        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                    },
                    v = function (t, e) {
                        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                    },
                    b = function (t, e) {
                        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
                    },
                    w = function (t, e) {
                        var r = e.s + e.c * t;
                        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
                    },
                    O = function (t, e) {
                        return e.set(e.t, e.p, t ? e.e : e.b, e);
                    },
                    P = function (t, e) {
                        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
                    },
                    M = function (t, e, r) {
                        return (t.style[e] = r);
                    },
                    C = function (t, e, r) {
                        return t.style.setProperty(e, r);
                    },
                    B = function (t, e, r) {
                        return (t._gsap[e] = r);
                    },
                    S = function (t, e, r) {
                        return (t._gsap.scaleX = t._gsap.scaleY = r);
                    },
                    A = function (t, e, r, n, i) {
                        var s = t._gsap;
                        (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
                    },
                    T = function (t, e, r, n, i) {
                        var s = t._gsap;
                        (s[e] = r), s.renderTransform(i, s);
                    },
                    E = "transform",
                    F = E + "Origin",
                    Y = function (t, r) {
                        var n = e.createElementNS ? e.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : e.createElement(t);
                        return n.style ? n : e.createElement(t);
                    },
                    X = function t(e, r, n) {
                        var i = getComputedStyle(e);
                        return i[r] || i.getPropertyValue(r.replace(d, "-$1").toLowerCase()) || i.getPropertyValue(r) || (!n && t(e, z(r) || r, 1)) || "";
                    },
                    k = "O,Moz,ms,Ms,Webkit".split(","),
                    z = function (t, e, r) {
                        var n = (e || i).style,
                            s = 5;
                        if (t in n && !r) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(k[s] + t in n); );
                        return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? k[s] : "") + t;
                    },
                    N = function () {
                        u() &&
                            window.document &&
                            ((t = window),
                            (e = t.document),
                            (r = e.documentElement),
                            (i = Y("div") || { style: {} }),
                            (s = Y("div")),
                            (E = z(E)),
                            (F = E + "Origin"),
                            (i.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                            (a = !!z("perspective")),
                            (n = 1));
                    },
                    U = function t(e) {
                        var n,
                            i = Y("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                            s = this.parentNode,
                            o = this.nextSibling,
                            a = this.style.cssText;
                        if ((r.appendChild(i), i.appendChild(this), (this.style.display = "block"), e))
                            try {
                                (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                            } catch (p) {}
                        else this._gsapBBox && (n = this._gsapBBox());
                        return s && (o ? s.insertBefore(this, o) : s.appendChild(this)), r.removeChild(i), (this.style.cssText = a), n;
                    },
                    W = function (t, e) {
                        for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
                    },
                    I = function (t) {
                        var e;
                        try {
                            e = t.getBBox();
                        } catch (r) {
                            e = U.call(t, !0);
                        }
                        return (e && (e.width || e.height)) || t.getBBox === U || (e = U.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +W(t, ["x", "cx", "x1"]) || 0, y: +W(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
                    },
                    V = function (t) {
                        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !I(t));
                    },
                    q = function (t, e) {
                        if (e) {
                            var r = t.style;
                            e in c && e !== F && (e = E), r.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), r.removeProperty(e.replace(d, "-$1").toLowerCase())) : r.removeAttribute(e);
                        }
                    },
                    D = function (t, e, r, n, i, s) {
                        var o = new p.PropTween(t._pt, e, r, 0, 1, s ? P : O);
                        return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
                    },
                    j = { deg: 1, rad: 1, turn: 1 },
                    G = function t(r, n, s, o) {
                        var a,
                            u,
                            f,
                            l,
                            h = parseFloat(s) || 0,
                            g = (s + "").trim().substr((h + "").length) || "px",
                            d = i.style,
                            m = x.test(n),
                            _ = "svg" === r.tagName.toLowerCase(),
                            y = (_ ? "client" : "offset") + (m ? "Width" : "Height"),
                            v = "px" === o,
                            b = "%" === o;
                        return o === g || !h || j[o] || j[g]
                            ? h
                            : ("px" !== g && !v && (h = t(r, n, s, "px")),
                              (l = r.getCTM && V(r)),
                              (!b && "%" !== g) || (!c[n] && !~n.indexOf("adius"))
                                  ? ((d[m ? "width" : "height"] = 100 + (v ? g : o)),
                                    (u = ~n.indexOf("adius") || ("em" === o && r.appendChild && !_) ? r : r.parentNode),
                                    l && (u = (r.ownerSVGElement || {}).parentNode),
                                    (u && u !== e && u.appendChild) || (u = e.body),
                                    (f = u._gsap) && b && f.width && m && f.time === p._ticker.time
                                        ? (0, p._round)((h / f.width) * 100)
                                        : ((b || "%" === g) && (d.position = X(r, "position")),
                                          u === r && (d.position = "static"),
                                          u.appendChild(i),
                                          (a = i[y]),
                                          u.removeChild(i),
                                          (d.position = "absolute"),
                                          m && b && (((f = (0, p._getCache)(u)).time = p._ticker.time), (f.width = u[y])),
                                          (0, p._round)(v ? (a * h) / 100 : a && h ? (100 / a) * h : 0)))
                                  : ((a = l ? r.getBBox()[m ? "width" : "height"] : r[y]), (0, p._round)(b ? (h / a) * 100 : (h / 100) * a)));
                    },
                    R = function (t, e, r, i) {
                        var s;
                        return (
                            n || N(),
                            e in _ && "transform" !== e && ~(e = _[e]).indexOf(",") && (e = e.split(",")[0]),
                            c[e] && "transform" !== e
                                ? ((s = it(t, i)), (s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : st(X(t, F)) + " " + s.zOrigin + "px"))
                                : (!(s = t.style[e]) || "auto" === s || i || ~(s + "").indexOf("calc(")) && (s = (J[e] && J[e](t, e, r)) || X(t, e) || (0, p._getProperty)(t, e) || ("opacity" === e ? 1 : 0)),
                            r && !~(s + "").trim().indexOf(" ") ? G(t, e, s, r) + r : s
                        );
                    },
                    L = function (t, e, r, n) {
                        if (!r || "none" === r) {
                            var i = z(e, t, 1),
                                s = i && X(t, i, 1);
                            s && s !== r ? ((e = i), (r = s)) : "borderColor" === e && (r = X(t, "borderTopColor"));
                        }
                        var o,
                            a,
                            u,
                            c,
                            f,
                            l,
                            h,
                            g,
                            d,
                            x,
                            m,
                            _,
                            y = new p.PropTween(this._pt, t.style, e, 0, 1, p._renderComplexString),
                            v = 0,
                            b = 0;
                        if (
                            ((y.b = r),
                            (y.e = n),
                            (r += ""),
                            "auto" === (n += "") && ((t.style[e] = n), (n = X(t, e) || n), (t.style[e] = r)),
                            (o = [r, n]),
                            (0, p._colorStringFilter)(o),
                            (n = o[1]),
                            (u = (r = o[0]).match(p._numWithUnitExp) || []),
                            (n.match(p._numWithUnitExp) || []).length)
                        ) {
                            for (; (a = p._numWithUnitExp.exec(n)); )
                                (h = a[0]),
                                    (d = n.substring(v, a.index)),
                                    f ? (f = (f + 1) % 5) : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) || (f = 1),
                                    h !== (l = u[b++] || "") &&
                                        ((c = parseFloat(l) || 0),
                                        (m = l.substr((c + "").length)),
                                        (_ = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)),
                                        (g = parseFloat(h)),
                                        (x = h.substr((g + "").length)),
                                        (v = p._numWithUnitExp.lastIndex - x.length),
                                        x || ((x = x || p._config.units[e] || m), v === n.length && ((n += x), (y.e += x))),
                                        m !== x && (c = G(t, e, l, x) || 0),
                                        (y._pt = { _next: y._pt, p: d || 1 === b ? d : ",", s: c, c: _ ? _ * g : g - c, m: (f && f < 4) || "zIndex" === e ? Math.round : 0 }));
                            y.c = v < n.length ? n.substring(v, n.length) : "";
                        } else y.r = "display" === e && "none" === n ? P : O;
                        return p._relExp.test(n) && (y.e = 0), (this._pt = y), y;
                    },
                    Z = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                    H = function (t) {
                        var e = t.split(" "),
                            r = e[0],
                            n = e[1] || "50%";
                        return ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) || ((t = r), (r = n), (n = t)), (e[0] = Z[r] || r), (e[1] = Z[n] || n), e.join(" ");
                    },
                    $ = function (t, e) {
                        if (e.tween && e.tween._time === e.tween._dur) {
                            var r,
                                n,
                                i,
                                s = e.t,
                                o = s.style,
                                a = e.u,
                                p = s._gsap;
                            if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
                            else for (i = (a = a.split(",")).length; --i > -1; ) (r = a[i]), c[r] && ((n = 1), (r = "transformOrigin" === r ? F : E)), q(s, r);
                            n && (q(s, E), p && (p.svg && s.removeAttribute("transform"), it(s, 1), (p.uncache = 1)));
                        }
                    },
                    J = {
                        clearProps: function (t, e, r, n, i) {
                            if ("isFromStart" !== i.data) {
                                var s = (t._pt = new p.PropTween(t._pt, e, r, 0, 0, $));
                                return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
                            }
                        },
                    },
                    K = [1, 0, 0, 1, 0, 0],
                    Q = {},
                    tt = function (t) {
                        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
                    },
                    et = function (t) {
                        var e = X(t, E);
                        return tt(e) ? K : e.substr(7).match(p._numExp).map(p._round);
                    },
                    rt = function (t, e) {
                        var n,
                            i,
                            s,
                            o,
                            a = t._gsap || (0, p._getCache)(t),
                            u = t.style,
                            c = et(t);
                        return a.svg && t.getAttribute("transform")
                            ? "1,0,0,1,0,0" === (c = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",")
                                ? K
                                : c
                            : (c !== K ||
                                  t.offsetParent ||
                                  t === r ||
                                  a.svg ||
                                  ((s = u.display),
                                  (u.display = "block"),
                                  ((n = t.parentNode) && t.offsetParent) || ((o = 1), (i = t.nextSibling), r.appendChild(t)),
                                  (c = et(t)),
                                  s ? (u.display = s) : q(t, "display"),
                                  o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : r.removeChild(t))),
                              e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
                    },
                    nt = function (t, e, r, n, i, s) {
                        var o,
                            a,
                            p,
                            u = t._gsap,
                            c = i || rt(t, !0),
                            f = u.xOrigin || 0,
                            l = u.yOrigin || 0,
                            h = u.xOffset || 0,
                            g = u.yOffset || 0,
                            d = c[0],
                            x = c[1],
                            m = c[2],
                            _ = c[3],
                            y = c[4],
                            v = c[5],
                            b = e.split(" "),
                            w = parseFloat(b[0]) || 0,
                            O = parseFloat(b[1]) || 0;
                        r
                            ? c !== K && (a = d * _ - x * m) && ((p = w * (-x / a) + O * (d / a) - (d * v - x * y) / a), (w = w * (_ / a) + O * (-m / a) + (m * v - _ * y) / a), (O = p))
                            : ((w = (o = I(t)).x + (~b[0].indexOf("%") ? (w / 100) * o.width : w)), (O = o.y + (~(b[1] || b[0]).indexOf("%") ? (O / 100) * o.height : O))),
                            n || (!1 !== n && u.smooth) ? ((y = w - f), (v = O - l), (u.xOffset = h + (y * d + v * m) - y), (u.yOffset = g + (y * x + v * _) - v)) : (u.xOffset = u.yOffset = 0),
                            (u.xOrigin = w),
                            (u.yOrigin = O),
                            (u.smooth = !!n),
                            (u.origin = e),
                            (u.originIsAbsolute = !!r),
                            (t.style[F] = "0px 0px"),
                            s && (D(s, u, "xOrigin", f, w), D(s, u, "yOrigin", l, O), D(s, u, "xOffset", h, u.xOffset), D(s, u, "yOffset", g, u.yOffset)),
                            t.setAttribute("data-svg-origin", w + " " + O);
                    },
                    it = function (t, e) {
                        var r = t._gsap || new p.GSCache(t);
                        if ("x" in r && !e && !r.uncache) return r;
                        var n,
                            i,
                            s,
                            o,
                            u,
                            c,
                            g,
                            d,
                            x,
                            m,
                            _,
                            y,
                            v,
                            b,
                            w,
                            O,
                            P,
                            M,
                            C,
                            B,
                            S,
                            A,
                            T,
                            Y,
                            k,
                            z,
                            N,
                            U,
                            W,
                            I,
                            q,
                            D,
                            j = t.style,
                            G = r.scaleX < 0,
                            R = X(t, F) || "0";
                        return (
                            (n = i = s = c = g = d = x = m = _ = 0),
                            (o = u = 1),
                            (r.svg = !(!t.getCTM || !V(t))),
                            (b = rt(t, r.svg)),
                            r.svg && ((Y = (!r.uncache || "0px 0px" === R) && !e && t.getAttribute("data-svg-origin")), nt(t, Y || R, !!Y || r.originIsAbsolute, !1 !== r.smooth, b)),
                            (y = r.xOrigin || 0),
                            (v = r.yOrigin || 0),
                            b !== K &&
                                ((M = b[0]),
                                (C = b[1]),
                                (B = b[2]),
                                (S = b[3]),
                                (n = A = b[4]),
                                (i = T = b[5]),
                                6 === b.length
                                    ? ((o = Math.sqrt(M * M + C * C)),
                                      (u = Math.sqrt(S * S + B * B)),
                                      (c = M || C ? h(C, M) * f : 0),
                                      (x = B || S ? h(B, S) * f + c : 0) && (u *= Math.abs(Math.cos(x * l))),
                                      r.svg && ((n -= y - (y * M + v * B)), (i -= v - (y * C + v * S))))
                                    : ((D = b[6]),
                                      (I = b[7]),
                                      (N = b[8]),
                                      (U = b[9]),
                                      (W = b[10]),
                                      (q = b[11]),
                                      (n = b[12]),
                                      (i = b[13]),
                                      (s = b[14]),
                                      (g = (w = h(D, W)) * f),
                                      w &&
                                          ((Y = A * (O = Math.cos(-w)) + N * (P = Math.sin(-w))),
                                          (k = T * O + U * P),
                                          (z = D * O + W * P),
                                          (N = A * -P + N * O),
                                          (U = T * -P + U * O),
                                          (W = D * -P + W * O),
                                          (q = I * -P + q * O),
                                          (A = Y),
                                          (T = k),
                                          (D = z)),
                                      (d = (w = h(-B, W)) * f),
                                      w && ((O = Math.cos(-w)), (q = S * (P = Math.sin(-w)) + q * O), (M = Y = M * O - N * P), (C = k = C * O - U * P), (B = z = B * O - W * P)),
                                      (c = (w = h(C, M)) * f),
                                      w && ((Y = M * (O = Math.cos(w)) + C * (P = Math.sin(w))), (k = A * O + T * P), (C = C * O - M * P), (T = T * O - A * P), (M = Y), (A = k)),
                                      g && Math.abs(g) + Math.abs(c) > 359.9 && ((g = c = 0), (d = 180 - d)),
                                      (o = (0, p._round)(Math.sqrt(M * M + C * C + B * B))),
                                      (u = (0, p._round)(Math.sqrt(T * T + D * D))),
                                      (w = h(A, T)),
                                      (x = Math.abs(w) > 2e-4 ? w * f : 0),
                                      (_ = q ? 1 / (q < 0 ? -q : q) : 0)),
                                r.svg && ((Y = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !tt(X(t, E))), Y && t.setAttribute("transform", Y))),
                            Math.abs(x) > 90 && Math.abs(x) < 270 && (G ? ((o *= -1), (x += c <= 0 ? 180 : -180), (c += c <= 0 ? 180 : -180)) : ((u *= -1), (x += x <= 0 ? 180 : -180))),
                            (r.x = n - ((r.xPercent = n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) + "px"),
                            (r.y = i - ((r.yPercent = i && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetHeight * r.yPercent) / 100 : 0) + "px"),
                            (r.z = s + "px"),
                            (r.scaleX = (0, p._round)(o)),
                            (r.scaleY = (0, p._round)(u)),
                            (r.rotation = (0, p._round)(c) + "deg"),
                            (r.rotationX = (0, p._round)(g) + "deg"),
                            (r.rotationY = (0, p._round)(d) + "deg"),
                            (r.skewX = x + "deg"),
                            (r.skewY = m + "deg"),
                            (r.transformPerspective = _ + "px"),
                            (r.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (j[F] = st(R)),
                            (r.xOffset = r.yOffset = 0),
                            (r.force3D = p._config.force3D),
                            (r.renderTransform = r.svg ? lt : a ? ft : at),
                            (r.uncache = 0),
                            r
                        );
                    },
                    st = function (t) {
                        return (t = t.split(" "))[0] + " " + t[1];
                    },
                    ot = function (t, e, r) {
                        var n = (0, p.getUnit)(e);
                        return (0, p._round)(parseFloat(e) + parseFloat(G(t, "x", r + "px", n))) + n;
                    },
                    at = function (t, e) {
                        (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), ft(t, e);
                    },
                    pt = "0deg",
                    ut = "0px",
                    ct = ") ",
                    ft = function (t, e) {
                        var r = e || this,
                            n = r.xPercent,
                            i = r.yPercent,
                            s = r.x,
                            o = r.y,
                            a = r.z,
                            p = r.rotation,
                            u = r.rotationY,
                            c = r.rotationX,
                            f = r.skewX,
                            h = r.skewY,
                            g = r.scaleX,
                            d = r.scaleY,
                            x = r.transformPerspective,
                            m = r.force3D,
                            _ = r.target,
                            y = r.zOrigin,
                            v = "",
                            b = ("auto" === m && t && 1 !== t) || !0 === m;
                        if (y && (c !== pt || u !== pt)) {
                            var w,
                                O = parseFloat(u) * l,
                                P = Math.sin(O),
                                M = Math.cos(O);
                            (O = parseFloat(c) * l), (w = Math.cos(O)), (s = ot(_, s, P * w * -y)), (o = ot(_, o, -Math.sin(O) * -y)), (a = ot(_, a, M * w * -y + y));
                        }
                        x !== ut && (v += "perspective(" + x + ct),
                            (n || i) && (v += "translate(" + n + "%, " + i + "%) "),
                            (b || s !== ut || o !== ut || a !== ut) && (v += a !== ut || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ct),
                            p !== pt && (v += "rotate(" + p + ct),
                            u !== pt && (v += "rotateY(" + u + ct),
                            c !== pt && (v += "rotateX(" + c + ct),
                            (f === pt && h === pt) || (v += "skew(" + f + ", " + h + ct),
                            (1 === g && 1 === d) || (v += "scale(" + g + ", " + d + ct),
                            (_.style[E] = v || "translate(0, 0)");
                    },
                    lt = function (t, e) {
                        var r,
                            n,
                            i,
                            s,
                            o,
                            a = e || this,
                            u = a.xPercent,
                            c = a.yPercent,
                            f = a.x,
                            h = a.y,
                            g = a.rotation,
                            d = a.skewX,
                            x = a.skewY,
                            m = a.scaleX,
                            _ = a.scaleY,
                            y = a.target,
                            v = a.xOrigin,
                            b = a.yOrigin,
                            w = a.xOffset,
                            O = a.yOffset,
                            P = a.forceCSS,
                            M = parseFloat(f),
                            C = parseFloat(h);
                        (g = parseFloat(g)),
                            (d = parseFloat(d)),
                            (x = parseFloat(x)) && ((d += x = parseFloat(x)), (g += x)),
                            g || d
                                ? ((g *= l),
                                  (d *= l),
                                  (r = Math.cos(g) * m),
                                  (n = Math.sin(g) * m),
                                  (i = Math.sin(g - d) * -_),
                                  (s = Math.cos(g - d) * _),
                                  d && ((x *= l), (o = Math.tan(d - x)), (i *= o = Math.sqrt(1 + o * o)), (s *= o), x && ((o = Math.tan(x)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
                                  (r = (0, p._round)(r)),
                                  (n = (0, p._round)(n)),
                                  (i = (0, p._round)(i)),
                                  (s = (0, p._round)(s)))
                                : ((r = m), (s = _), (n = i = 0)),
                            ((M && !~(f + "").indexOf("px")) || (C && !~(h + "").indexOf("px"))) && ((M = G(y, "x", f, "px")), (C = G(y, "y", h, "px"))),
                            (v || b || w || O) && ((M = (0, p._round)(M + v - (v * r + b * i) + w)), (C = (0, p._round)(C + b - (v * n + b * s) + O))),
                            (u || c) && ((o = y.getBBox()), (M = (0, p._round)(M + (u / 100) * o.width)), (C = (0, p._round)(C + (c / 100) * o.height))),
                            (o = "matrix(" + r + "," + n + "," + i + "," + s + "," + M + "," + C + ")"),
                            y.setAttribute("transform", o),
                            P && (y.style[E] = o);
                    },
                    ht = function (t, e, r, n, i, s) {
                        var o,
                            a,
                            u = (0, p._isString)(i),
                            c = parseFloat(i) * (u && ~i.indexOf("rad") ? f : 1),
                            l = s ? c * s : c - n,
                            h = n + l + "deg";
                        return (
                            u &&
                                ("short" === (o = i.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360),
                                "cw" === o && l < 0 ? (l = ((l + 360 * g) % 360) - 360 * ~~(l / 360)) : "ccw" === o && l > 0 && (l = ((l - 360 * g) % 360) - 360 * ~~(l / 360))),
                            (t._pt = a = new p.PropTween(t._pt, e, r, n, l, v)),
                            (a.e = h),
                            (a.u = "deg"),
                            t._props.push(r),
                            a
                        );
                    },
                    gt = function (t, e) {
                        for (var r in e) t[r] = e[r];
                        return t;
                    },
                    dt = function (t, e, r) {
                        var n,
                            i,
                            s,
                            o,
                            a,
                            u,
                            f,
                            l = gt({}, r._gsap),
                            h = r.style;
                        for (i in (l.svg
                            ? ((s = r.getAttribute("transform")), r.setAttribute("transform", ""), (h[E] = e), (n = it(r, 1)), q(r, E), r.setAttribute("transform", s))
                            : ((s = getComputedStyle(r)[E]), (h[E] = e), (n = it(r, 1)), (h[E] = s)),
                        c))
                            (s = l[i]) !== (o = n[i]) &&
                                "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
                                ((a = (0, p.getUnit)(s) !== (f = (0, p.getUnit)(o)) ? G(r, i, s, f) : parseFloat(s)), (u = parseFloat(o)), (t._pt = new p.PropTween(t._pt, n, i, a, u - a, y)), (t._pt.u = f || 0), t._props.push(i));
                        gt(n, l);
                    };
                (exports._getBBox = I),
                    (exports.checkPrefix = z),
                    (exports._createElement = Y),
                    (0, p._forEachName)("padding,margin,Width,Radius", function (t, e) {
                        var r = "Top",
                            n = "Right",
                            i = "Bottom",
                            s = "Left",
                            o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (r) {
                                return e < 2 ? t + r : "border" + r + t;
                            });
                        J[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
                            var s, a;
                            if (arguments.length < 4)
                                return (
                                    (s = o.map(function (e) {
                                        return R(t, e, r);
                                    })),
                                    5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
                                );
                            (s = (n + "").split(" ")),
                                (a = {}),
                                o.forEach(function (t, e) {
                                    return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                                }),
                                t.init(e, a, i);
                        };
                    });
                var xt = {
                    name: "css",
                    register: N,
                    targetTest: function (t) {
                        return t.style && t.nodeType;
                    },
                    init: function (t, e, r, i, s) {
                        var o,
                            a,
                            u,
                            f,
                            l,
                            h,
                            g,
                            d,
                            x,
                            v,
                            O,
                            P,
                            M,
                            C,
                            B,
                            S = this._props,
                            A = t.style,
                            T = r.vars.startAt;
                        for (g in (n || N(), e))
                            if ("autoRound" !== g && ((a = e[g]), !p._plugins[g] || !(0, p._checkPlugin)(g, e, r, i, t, s)))
                                if (((l = typeof a), (h = J[g]), "function" === l && (l = typeof (a = a.call(r, i, t, s))), "string" === l && ~a.indexOf("random(") && (a = (0, p._replaceRandom)(a)), h)) h(this, t, g, a, r) && (B = 1);
                                else if ("--" === g.substr(0, 2))
                                    (o = (getComputedStyle(t).getPropertyValue(g) + "").trim()),
                                        (a += ""),
                                        (p._colorExp.lastIndex = 0),
                                        p._colorExp.test(o) || ((d = (0, p.getUnit)(o)), (x = (0, p.getUnit)(a))),
                                        x ? d !== x && (o = G(t, g, o, x) + x) : d && (a += d),
                                        this.add(A, "setProperty", o, a, i, s, 0, 0, g),
                                        S.push(g);
                                else if ("undefined" !== l) {
                                    if (
                                        (T && g in T
                                            ? ((o = "function" == typeof T[g] ? T[g].call(r, i, t, s) : T[g]), g in p._config.units && !(0, p.getUnit)(o) && (o += p._config.units[g]), "=" === (o + "").charAt(1) && (o = R(t, g)))
                                            : (o = R(t, g)),
                                        (f = parseFloat(o)),
                                        (v = "string" === l && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                                        (u = parseFloat(a)),
                                        g in _ &&
                                            ("autoAlpha" === g && (1 === f && "hidden" === R(t, "visibility") && u && (f = 0), D(this, A, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                                            "scale" !== g && "transform" !== g && ~(g = _[g]).indexOf(",") && (g = g.split(",")[0])),
                                        (O = g in c))
                                    )
                                        if (
                                            (P ||
                                                (((M = t._gsap).renderTransform && !e.parseTransform) || it(t, e.parseTransform),
                                                (C = !1 !== e.smoothOrigin && M.smooth),
                                                ((P = this._pt = new p.PropTween(this._pt, A, E, 0, 1, M.renderTransform, M, 0, -1)).dep = 1)),
                                            "scale" === g)
                                        )
                                            (this._pt = new p.PropTween(this._pt, M, "scaleY", M.scaleY, (v ? v * u : u - M.scaleY) || 0)), S.push("scaleY", g), (g += "X");
                                        else {
                                            if ("transformOrigin" === g) {
                                                (a = H(a)), M.svg ? nt(t, a, 0, C, 0, this) : ((x = parseFloat(a.split(" ")[2]) || 0) !== M.zOrigin && D(this, M, "zOrigin", M.zOrigin, x), D(this, A, g, st(o), st(a)));
                                                continue;
                                            }
                                            if ("svgOrigin" === g) {
                                                nt(t, a, 1, C, 0, this);
                                                continue;
                                            }
                                            if (g in Q) {
                                                ht(this, M, g, f, a, v);
                                                continue;
                                            }
                                            if ("smoothOrigin" === g) {
                                                D(this, M, "smooth", M.smooth, a);
                                                continue;
                                            }
                                            if ("force3D" === g) {
                                                M[g] = a;
                                                continue;
                                            }
                                            if ("transform" === g) {
                                                dt(this, a, t);
                                                continue;
                                            }
                                        }
                                    else g in A || (g = z(g) || g);
                                    if (O || ((u || 0 === u) && (f || 0 === f) && !m.test(a) && g in A))
                                        u || (u = 0),
                                            (d = (o + "").substr((f + "").length)) !== (x = (0, p.getUnit)(a) || (g in p._config.units ? p._config.units[g] : d)) && (f = G(t, g, o, x)),
                                            (this._pt = new p.PropTween(this._pt, O ? M : A, g, f, v ? v * u : u - f, O || ("px" !== x && "zIndex" !== g) || !1 === e.autoRound ? y : w)),
                                            (this._pt.u = x || 0),
                                            d !== x && ((this._pt.b = o), (this._pt.r = b));
                                    else if (g in A) L.call(this, t, g, o, a);
                                    else {
                                        if (!(g in t)) {
                                            (0, p._missingPlugin)(g, a);
                                            continue;
                                        }
                                        this.add(t, g, o || t[g], a, i, s);
                                    }
                                    S.push(g);
                                }
                        B && (0, p._sortPropTweensByPriority)(this);
                    },
                    get: R,
                    aliases: _,
                    getSetter: function (t, e, r) {
                        var n = _[e];
                        return (
                            n && n.indexOf(",") < 0 && (e = n),
                            e in c && e !== F && (t._gsap.x || R(t, "x"))
                                ? r && o === r
                                    ? "scale" === e
                                        ? S
                                        : B
                                    : (o = r || {}) && ("scale" === e ? A : T)
                                : t.style && !(0, p._isUndefined)(t.style[e])
                                ? M
                                : ~e.indexOf("-")
                                ? C
                                : (0, p._getSetter)(t, e)
                        );
                    },
                    core: { _removeProperty: q, _getMatrix: rt },
                };
                (exports.default = exports.CSSPlugin = xt),
                    (p.gsap.utils.checkPrefix = z),
                    (function (t, e, r, n) {
                        var i = (0, p._forEachName)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                            c[t] = 1;
                        });
                        (0, p._forEachName)(e, function (t) {
                            (p._config.units[t] = "deg"), (Q[t] = 1);
                        }),
                            (_[i[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e),
                            (0, p._forEachName)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                                var e = t.split(":");
                                _[e[1]] = i[e[0]];
                            });
                    })(0, "rotation,rotationX,rotationY,skewX,skewY"),
                    (0, p._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                        p._config.units[t] = "px";
                    }),
                    p.gsap.registerPlugin(xt);
            },
            { "./gsap-core.js": "TNS6" },
        ],
        TpQl: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "Power0", {
                        enumerable: !0,
                        get: function () {
                            return e.Power0;
                        },
                    }),
                    Object.defineProperty(exports, "Power1", {
                        enumerable: !0,
                        get: function () {
                            return e.Power1;
                        },
                    }),
                    Object.defineProperty(exports, "Power2", {
                        enumerable: !0,
                        get: function () {
                            return e.Power2;
                        },
                    }),
                    Object.defineProperty(exports, "Power3", {
                        enumerable: !0,
                        get: function () {
                            return e.Power3;
                        },
                    }),
                    Object.defineProperty(exports, "Power4", {
                        enumerable: !0,
                        get: function () {
                            return e.Power4;
                        },
                    }),
                    Object.defineProperty(exports, "Linear", {
                        enumerable: !0,
                        get: function () {
                            return e.Linear;
                        },
                    }),
                    Object.defineProperty(exports, "Quad", {
                        enumerable: !0,
                        get: function () {
                            return e.Quad;
                        },
                    }),
                    Object.defineProperty(exports, "Cubic", {
                        enumerable: !0,
                        get: function () {
                            return e.Cubic;
                        },
                    }),
                    Object.defineProperty(exports, "Quart", {
                        enumerable: !0,
                        get: function () {
                            return e.Quart;
                        },
                    }),
                    Object.defineProperty(exports, "Quint", {
                        enumerable: !0,
                        get: function () {
                            return e.Quint;
                        },
                    }),
                    Object.defineProperty(exports, "Strong", {
                        enumerable: !0,
                        get: function () {
                            return e.Strong;
                        },
                    }),
                    Object.defineProperty(exports, "Elastic", {
                        enumerable: !0,
                        get: function () {
                            return e.Elastic;
                        },
                    }),
                    Object.defineProperty(exports, "Back", {
                        enumerable: !0,
                        get: function () {
                            return e.Back;
                        },
                    }),
                    Object.defineProperty(exports, "SteppedEase", {
                        enumerable: !0,
                        get: function () {
                            return e.SteppedEase;
                        },
                    }),
                    Object.defineProperty(exports, "Bounce", {
                        enumerable: !0,
                        get: function () {
                            return e.Bounce;
                        },
                    }),
                    Object.defineProperty(exports, "Sine", {
                        enumerable: !0,
                        get: function () {
                            return e.Sine;
                        },
                    }),
                    Object.defineProperty(exports, "Expo", {
                        enumerable: !0,
                        get: function () {
                            return e.Expo;
                        },
                    }),
                    Object.defineProperty(exports, "Circ", {
                        enumerable: !0,
                        get: function () {
                            return e.Circ;
                        },
                    }),
                    Object.defineProperty(exports, "TweenLite", {
                        enumerable: !0,
                        get: function () {
                            return e.TweenLite;
                        },
                    }),
                    Object.defineProperty(exports, "TimelineLite", {
                        enumerable: !0,
                        get: function () {
                            return e.TimelineLite;
                        },
                    }),
                    Object.defineProperty(exports, "TimelineMax", {
                        enumerable: !0,
                        get: function () {
                            return e.TimelineMax;
                        },
                    }),
                    Object.defineProperty(exports, "CSSPlugin", {
                        enumerable: !0,
                        get: function () {
                            return r.CSSPlugin;
                        },
                    }),
                    (exports.TweenMax = exports.default = exports.gsap = void 0);
                var e = require("./gsap-core.js"),
                    r = require("./CSSPlugin.js"),
                    t = e.gsap.registerPlugin(r.CSSPlugin) || e.gsap,
                    n = t.core.Tween;
                (exports.TweenMax = n), (exports.default = exports.gsap = t);
            },
            { "./gsap-core.js": "TNS6", "./CSSPlugin.js": "bp4Z" },
        ],
        TgBN: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = exports.ScrollTrigger = void 0);
                var e,
                    t,
                    r,
                    n,
                    o,
                    i,
                    s,
                    a,
                    l,
                    c,
                    u,
                    f,
                    p,
                    d,
                    h,
                    g,
                    v,
                    m,
                    x,
                    y,
                    b,
                    w,
                    C,
                    T,
                    k,
                    O,
                    E,
                    M = 1,
                    S = [],
                    P = [],
                    _ = Date.now,
                    R = _(),
                    A = 0,
                    z = 1,
                    B = function (e) {
                        return e;
                    },
                    L = function (e) {
                        return Math.round(1e5 * e) / 1e5 || 0;
                    },
                    I = function () {
                        return "undefined" != typeof window;
                    },
                    N = function () {
                        return e || (I() && (e = window.gsap) && e.registerPlugin && e);
                    },
                    F = function (e) {
                        return !!~s.indexOf(e);
                    },
                    D = function (e, t) {
                        return ~S.indexOf(e) && S[S.indexOf(e) + 1][t];
                    },
                    W = function (e, t) {
                        var r = t.s,
                            n = t.sc,
                            o = P.indexOf(e),
                            i = n === me.sc ? 1 : 2;
                        return (
                            !~o && (o = P.push(e) - 1),
                            P[o + i] ||
                                (P[o + i] =
                                    D(e, r) ||
                                    (F(e)
                                        ? n
                                        : function (t) {
                                              return arguments.length ? (e[r] = t) : e[r];
                                          }))
                        );
                    },
                    q = function (e) {
                        return (
                            D(e, "getBoundingClientRect") ||
                            (F(e)
                                ? function () {
                                      return (at.width = r.innerWidth), (at.height = r.innerHeight), at;
                                  }
                                : function () {
                                      return we(e);
                                  })
                        );
                    },
                    j = function (e, t, n) {
                        var o = n.d,
                            i = n.d2,
                            s = n.a;
                        return (s = D(e, "getBoundingClientRect"))
                            ? function () {
                                  return s()[o];
                              }
                            : function () {
                                  return (t ? r["inner" + i] : e["client" + i]) || 0;
                              };
                    },
                    H = function (e, t) {
                        return !t || ~S.indexOf(e)
                            ? q(e)
                            : function () {
                                  return at;
                              };
                    },
                    X = function (e, t) {
                        var n = t.s,
                            s = t.d2,
                            a = t.d,
                            l = t.a;
                        return (n = "scroll" + s) && (l = D(e, n)) ? l() - q(e)()[a] : F(e) ? Math.max(o[n], i[n]) - (r["inner" + s] || o["client" + s] || i["client" + s]) : e[n] - e["offset" + s];
                    },
                    Y = function (e, t) {
                        for (var r = 0; r < b.length; r += 3) (!t || ~t.indexOf(b[r + 1])) && e(b[r], b[r + 1], b[r + 2]);
                    },
                    V = function (e) {
                        return "string" == typeof e;
                    },
                    U = function (e) {
                        return "function" == typeof e;
                    },
                    Z = function (e) {
                        return "number" == typeof e;
                    },
                    $ = function (e) {
                        return "object" == typeof e;
                    },
                    G = function (e) {
                        return U(e) && e();
                    },
                    J = function (e, t) {
                        return function () {
                            var r = G(e),
                                n = G(t);
                            return function () {
                                G(r), G(n);
                            };
                        };
                    },
                    K = Math.abs,
                    Q = "scrollLeft",
                    ee = "scrollTop",
                    te = "left",
                    re = "top",
                    ne = "right",
                    oe = "bottom",
                    ie = "width",
                    se = "height",
                    ae = "Right",
                    le = "Left",
                    ce = "Top",
                    ue = "Bottom",
                    fe = "padding",
                    pe = "margin",
                    de = "Width",
                    he = "Height",
                    ge = "px",
                    ve = {
                        s: Q,
                        p: te,
                        p2: le,
                        os: ne,
                        os2: ae,
                        d: ie,
                        d2: de,
                        a: "x",
                        sc: function (e) {
                            return arguments.length ? r.scrollTo(e, me.sc()) : r.pageXOffset || n[Q] || o[Q] || i[Q] || 0;
                        },
                    },
                    me = {
                        s: ee,
                        p: re,
                        p2: ce,
                        os: oe,
                        os2: ue,
                        d: se,
                        d2: he,
                        a: "y",
                        op: ve,
                        sc: function (e) {
                            return arguments.length ? r.scrollTo(ve.sc(), e) : r.pageYOffset || n[ee] || o[ee] || i[ee] || 0;
                        },
                    },
                    xe = function (e) {
                        return r.getComputedStyle(e);
                    },
                    ye = function (e) {
                        var t = xe(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
                    },
                    be = function (e, t) {
                        for (var r in t) r in e || (e[r] = t[r]);
                        return e;
                    },
                    we = function (t, r) {
                        var n = r && "matrix(1, 0, 0, 1, 0, 0)" !== xe(t)[v] && e.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                            o = t.getBoundingClientRect();
                        return n && n.progress(0).kill(), o;
                    },
                    Ce = function (e, t) {
                        var r = t.d2;
                        return e["offset" + r] || e["client" + r] || 0;
                    },
                    Te = function (e) {
                        var t,
                            r = [],
                            n = e.labels,
                            o = e.duration();
                        for (t in n) r.push(n[t] / o);
                        return r;
                    },
                    ke = function (t) {
                        return function (r) {
                            return e.utils.snap(Te(t), r);
                        };
                    },
                    Oe = function (e) {
                        return function (t, r) {
                            var n,
                                o = Te(e);
                            if (
                                (o.sort(function (e, t) {
                                    return e - t;
                                }),
                                r.direction > 0)
                            ) {
                                for (t -= 1e-4, n = 0; n < o.length; n++) if (o[n] >= t) return o[n];
                                return o.pop();
                            }
                            for (n = o.length, t += 1e-4; n--; ) if (o[n] <= t) return o[n];
                            return o[0];
                        };
                    },
                    Ee = function (e, t, r, n) {
                        return r.split(",").forEach(function (r) {
                            return e(t, r, n);
                        });
                    },
                    Me = function (e, t, r) {
                        return e.addEventListener(t, r, { passive: !0 });
                    },
                    Se = function (e, t, r) {
                        return e.removeEventListener(t, r);
                    },
                    Pe = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
                    _e = { toggleActions: "play", anticipatePin: 0 },
                    Re = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
                    Ae = function (e, t) {
                        if (V(e)) {
                            var r = e.indexOf("="),
                                n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                            ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))), (e = n + (e in Re ? Re[e] * t : ~e.indexOf("%") ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0));
                        }
                        return e;
                    },
                    ze = function (e, t, r, o, s, a, l) {
                        var c = s.startColor,
                            u = s.endColor,
                            f = s.fontSize,
                            p = s.indent,
                            d = s.fontWeight,
                            h = n.createElement("div"),
                            g = F(r) || "fixed" === D(r, "pinType"),
                            v = -1 !== e.indexOf("scroller"),
                            m = g ? i : r,
                            x = -1 !== e.indexOf("start"),
                            y = x ? c : u,
                            b =
                                "border-color:" +
                                y +
                                ";font-size:" +
                                f +
                                ";color:" +
                                y +
                                ";font-weight:" +
                                d +
                                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                        return (
                            (b += "position:" + (v && g ? "fixed;" : "absolute;")),
                            (v || !g) && (b += (o === me ? ne : oe) + ":" + (a + parseFloat(p)) + "px;"),
                            l && (b += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"),
                            (h._isStart = x),
                            h.setAttribute("class", "gsap-marker-" + e),
                            (h.style.cssText = b),
                            (h.innerText = t || 0 === t ? e + "-" + t : e),
                            m.children[0] ? m.insertBefore(h, m.children[0]) : m.appendChild(h),
                            (h._offset = h["offset" + o.op.d2]),
                            Be(h, 0, o, x),
                            h
                        );
                    },
                    Be = function (t, r, n, o) {
                        var i = { display: "block" },
                            s = n[o ? "os2" : "p2"],
                            a = n[o ? "p2" : "os2"];
                        (t._isFlipped = o), (i[n.a + "Percent"] = o ? -100 : 0), (i[n.a] = o ? "1px" : 0), (i["border" + s + de] = 1), (i["border" + a + de] = 0), (i[n.p] = r + "px"), e.set(t, i);
                    },
                    Le = [],
                    Ie = {},
                    Ne = function () {
                        return c || (c = l(Ke));
                    },
                    Fe = function () {
                        c || ((c = l(Ke)), A || Ye("scrollStart"), (A = _()));
                    },
                    De = function () {
                        return !h && !T && !n.fullscreenElement && a.restart(!0);
                    },
                    We = {},
                    qe = [],
                    je = [],
                    He = function (n) {
                        var o,
                            i = e.ticker.frame,
                            s = [],
                            a = 0;
                        if (E !== i || M) {
                            for (Ze(); a < je.length; a += 4) (o = r.matchMedia(je[a]).matches) !== je[a + 3] && ((je[a + 3] = o), o ? s.push(a) : Ze(1, je[a]) || (U(je[a + 2]) && je[a + 2]()));
                            for (Ue(), a = 0; a < s.length; a++) (o = s[a]), (O = je[o]), (je[o + 2] = je[o + 1](n));
                            (O = 0), t && $e(0, 1), (E = i), Ye("matchMedia");
                        }
                    },
                    Xe = function e() {
                        return Se(pt, "scrollEnd", e) || $e(!0);
                    },
                    Ye = function (e) {
                        return (
                            (We[e] &&
                                We[e].map(function (e) {
                                    return e();
                                })) ||
                            qe
                        );
                    },
                    Ve = [],
                    Ue = function (e) {
                        for (var t = 0; t < Ve.length; t += 5) (e && Ve[t + 4] !== e) || ((Ve[t].style.cssText = Ve[t + 1]), Ve[t].getBBox && Ve[t].setAttribute("transform", Ve[t + 2] || ""), (Ve[t + 3].uncache = 1));
                    },
                    Ze = function (e, t) {
                        var r;
                        for (m = 0; m < Le.length; m++) (r = Le[m]), (t && r.media !== t) || (e ? r.kill(1) : r.revert());
                        t && Ue(t), t || Ye("revert");
                    },
                    $e = function (e, t) {
                        if (!A || e) {
                            var r = Ye("refreshInit");
                            w && pt.sort(),
                                t || Ze(),
                                Le.forEach(function (e) {
                                    return e.refresh();
                                }),
                                r.forEach(function (e) {
                                    return e && e.render && e.render(-1);
                                }),
                                P.forEach(function (e) {
                                    return "function" == typeof e && (e.rec = 0);
                                }),
                                a.pause(),
                                Ye("refresh");
                        } else Me(pt, "scrollEnd", Xe);
                    },
                    Ge = 0,
                    Je = 1,
                    Ke = function () {
                        var e = Le.length,
                            t = _(),
                            r = t - R >= 50,
                            n = e && Le[0].scroll();
                        if (((Je = Ge > n ? -1 : 1), (Ge = n), r && (A && !g && t - A > 200 && ((A = 0), Ye("scrollEnd")), (p = R), (R = t)), Je < 0)) {
                            for (m = e; m-- > 0; ) Le[m] && Le[m].update(0, r);
                            Je = 1;
                        } else for (m = 0; m < e; m++) Le[m] && Le[m].update(0, r);
                        c = 0;
                    },
                    Qe = [
                        te,
                        re,
                        oe,
                        ne,
                        pe + ue,
                        pe + ae,
                        pe + ce,
                        pe + le,
                        "display",
                        "flexShrink",
                        "float",
                        "zIndex",
                        "grid-column-start",
                        "grid-column-end",
                        "grid-row-start",
                        "grid-row-end",
                        "grid-area",
                        "justify-self",
                        "align-self",
                        "place-self",
                    ],
                    et = Qe.concat([ie, se, "boxSizing", "max" + de, "max" + he, "position", pe, fe, fe + ce, fe + ae, fe + ue, fe + le]),
                    tt = function (e, t, r) {
                        if ((ot(r), e.parentNode === t)) {
                            var n = t.parentNode;
                            n && (n.insertBefore(e, t), n.removeChild(t));
                        }
                    },
                    rt = function (e, t, r, n) {
                        if (e.parentNode !== t) {
                            for (var o, i = Qe.length, s = t.style, a = e.style; i--; ) s[(o = Qe[i])] = r[o];
                            (s.position = "absolute" === r.position ? "absolute" : "relative"),
                                "inline" === r.display && (s.display = "inline-block"),
                                (a[oe] = a[ne] = "auto"),
                                (s.overflow = "visible"),
                                (s.boxSizing = "border-box"),
                                (s[ie] = Ce(e, ve) + ge),
                                (s[se] = Ce(e, me) + ge),
                                (s[fe] = a[pe] = a[re] = a[te] = "0"),
                                ot(n),
                                (a[ie] = a["max" + de] = r[ie]),
                                (a[se] = a["max" + he] = r[se]),
                                (a[fe] = r[fe]),
                                e.parentNode.insertBefore(t, e),
                                t.appendChild(e);
                        }
                    },
                    nt = /([A-Z])/g,
                    ot = function (t) {
                        if (t) {
                            var r,
                                n,
                                o = t.t.style,
                                i = t.length,
                                s = 0;
                            for ((t.t._gsap || e.core.getCache(t.t)).uncache = 1; s < i; s += 2) (n = t[s + 1]), (r = t[s]), n ? (o[r] = n) : o[r] && o.removeProperty(r.replace(nt, "-$1").toLowerCase());
                        }
                    },
                    it = function (e) {
                        for (var t = et.length, r = e.style, n = [], o = 0; o < t; o++) n.push(et[o], r[et[o]]);
                        return (n.t = e), n;
                    },
                    st = function (e, t, r) {
                        for (var n, o = [], i = e.length, s = r ? 8 : 0; s < i; s += 2) (n = e[s]), o.push(n, n in t ? t[n] : e[s + 1]);
                        return (o.t = e.t), o;
                    },
                    at = { left: 0, top: 0 },
                    lt = function (e, t, r, n, s, a, l, c, f, p, d, h) {
                        if ((U(e) && (e = e(c)), V(e) && "max" === e.substr(0, 3) && (e = h + ("=" === e.charAt(4) ? Ae("0" + e.substr(3), r) : 0)), Z(e))) l && Be(l, r, n, !0);
                        else {
                            U(t) && (t = t(c));
                            var g,
                                v,
                                m,
                                x = u(t)[0] || i,
                                y = we(x) || {},
                                b = e.split(" ");
                            (y && (y.left || y.top)) || "none" !== xe(x).display || ((m = x.style.display), (x.style.display = "block"), (y = we(x)), m ? (x.style.display = m) : x.style.removeProperty("display")),
                                (g = Ae(b[0], y[n.d])),
                                (v = Ae(b[1] || "0", r)),
                                (e = y[n.p] - f[n.p] - p + g + s - v),
                                l && Be(l, v, n, r - v < 20 || (l._isStart && v > 20)),
                                (r -= r - v);
                        }
                        if (a) {
                            var w = e + r,
                                C = a._isStart;
                            (h = "scroll" + n.d2), Be(a, w, n, (C && w > 20) || (!C && (d ? Math.max(i[h], o[h]) : a.parentNode[h]) <= w + 1)), d && ((f = we(l)), d && (a.style[n.op.p] = f[n.op.p] - n.op.m - a._offset + ge));
                        }
                        return Math.round(e);
                    },
                    ct = /(?:webkit|moz|length|cssText|inset)/i,
                    ut = function (t, r, n, o) {
                        if (t.parentNode !== r) {
                            var s,
                                a,
                                l = t.style;
                            if (r === i) {
                                for (s in ((t._stOrig = l.cssText), (a = xe(t)))) +s || ct.test(s) || !a[s] || "string" != typeof l[s] || "0" === s || (l[s] = a[s]);
                                (l.top = n), (l.left = o);
                            } else l.cssText = t._stOrig;
                            (e.core.getCache(t).uncache = 1), r.appendChild(t);
                        }
                    },
                    ft = function (t, r) {
                        var n,
                            o,
                            i = W(t, r),
                            s = "_scroll" + r.p2,
                            a = function r(a, l, c, u, f) {
                                var p = r.tween,
                                    d = l.onComplete,
                                    h = {};
                                return (
                                    p && p.kill(),
                                    (n = Math.round(c)),
                                    (l[s] = a),
                                    (l.modifiers = h),
                                    (h[s] = function (e) {
                                        return (e = L(i())) !== n && e !== o && Math.abs(e - n) > 2 ? (p.kill(), (r.tween = 0)) : (e = c + u * p.ratio + f * p.ratio * p.ratio), (o = n), (n = L(e));
                                    }),
                                    (l.onComplete = function () {
                                        (r.tween = 0), d && d.call(p);
                                    }),
                                    (p = r.tween = e.to(t, l))
                                );
                            };
                        return (
                            (t[s] = i),
                            t.addEventListener("wheel", function () {
                                return a.tween && a.tween.kill() && (a.tween = 0);
                            }),
                            a
                        );
                    };
                ve.op = me;
                var pt = (function () {
                    function c(r, n) {
                        t || c.register(e) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(r, n);
                    }
                    return (
                        (c.prototype.init = function (t, s) {
                            if (((this.progress = this.start = 0), this.vars && this.kill(1), z)) {
                                var a,
                                    l,
                                    d,
                                    v,
                                    x,
                                    y,
                                    b,
                                    T,
                                    E,
                                    P,
                                    R,
                                    L,
                                    I,
                                    N,
                                    q,
                                    Y,
                                    G,
                                    J,
                                    Q,
                                    ee,
                                    te,
                                    re,
                                    ne,
                                    oe,
                                    Te,
                                    Ee,
                                    Re,
                                    Be,
                                    Ne,
                                    We,
                                    qe,
                                    je,
                                    He,
                                    Ye,
                                    Ve,
                                    Ue,
                                    Ze = (t = be(V(t) || Z(t) || t.nodeType ? { trigger: t } : t, _e)).horizontal ? ve : me,
                                    $e = t,
                                    Ge = $e.onUpdate,
                                    Ke = $e.toggleClass,
                                    Qe = $e.id,
                                    et = $e.onToggle,
                                    nt = $e.onRefresh,
                                    at = $e.scrub,
                                    ct = $e.trigger,
                                    pt = $e.pin,
                                    dt = $e.pinSpacing,
                                    ht = $e.invalidateOnRefresh,
                                    gt = $e.anticipatePin,
                                    vt = $e.onScrubComplete,
                                    mt = $e.onSnapComplete,
                                    xt = $e.once,
                                    yt = $e.snap,
                                    bt = $e.pinReparent,
                                    wt = !at && 0 !== at,
                                    Ct = u(t.scroller || r)[0],
                                    Tt = e.core.getCache(Ct),
                                    kt = F(Ct),
                                    Ot = "pinType" in t ? "fixed" === t.pinType : kt || "fixed" === D(Ct, "pinType"),
                                    Et = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                                    Mt = wt && t.toggleActions.split(" "),
                                    St = "markers" in t ? t.markers : _e.markers,
                                    Pt = kt ? 0 : parseFloat(xe(Ct)["border" + Ze.p2 + de]) || 0,
                                    _t = this,
                                    Rt =
                                        t.onRefreshInit &&
                                        function () {
                                            return t.onRefreshInit(_t);
                                        },
                                    At = j(Ct, kt, Ze),
                                    zt = H(Ct, kt),
                                    Bt = 0;
                                (_t.media = O),
                                    (gt *= 45),
                                    (_t.scroller = Ct),
                                    (_t.scroll = W(Ct, Ze)),
                                    (v = _t.scroll()),
                                    (_t.vars = t),
                                    (s = s || t.animation),
                                    "refreshPriority" in t && (w = 1),
                                    (Tt.tweenScroll = Tt.tweenScroll || { top: ft(Ct, me), left: ft(Ct, ve) }),
                                    (_t.tweenTo = a = Tt.tweenScroll[Ze.p]),
                                    s &&
                                        ((s.vars.lazy = !1),
                                        s._initted || (!1 !== s.vars.immediateRender && !1 !== t.immediateRender && s.render(0, !0, !0)),
                                        (_t.animation = s.pause()),
                                        (s.scrollTrigger = _t),
                                        (qe = Z(at) && at) &&
                                            (We = e.to(s, {
                                                ease: "power3",
                                                duration: qe,
                                                onComplete: function () {
                                                    return vt && vt(_t);
                                                },
                                            })),
                                        (Be = 0),
                                        Qe || (Qe = s.vars.id)),
                                    Le.push(_t),
                                    yt &&
                                        ($(yt) || (yt = { snapTo: yt }),
                                        "scrollBehavior" in i.style && e.set(kt ? [i, o] : Ct, { scrollBehavior: "auto" }),
                                        (d = U(yt.snapTo) ? yt.snapTo : "labels" === yt.snapTo ? ke(s) : "labelsDirectional" === yt.snapTo ? Oe(s) : e.utils.snap(yt.snapTo)),
                                        (je = yt.duration || { min: 0.1, max: 2 }),
                                        (je = $(je) ? f(je.min, je.max) : f(je, je)),
                                        (He = e
                                            .delayedCall(yt.delay || qe / 2 || 0.1, function () {
                                                if (Math.abs(_t.getVelocity()) < 10 && !g && Bt !== _t.scroll()) {
                                                    var t = s && !wt ? s.totalProgress() : _t.progress,
                                                        r = ((t - Ne) / (_() - p)) * 1e3 || 0,
                                                        n = e.utils.clamp(-_t.progress, 1 - _t.progress, (K(r / 2) * r) / 0.185),
                                                        o = _t.progress + (!1 === yt.inertia ? 0 : n),
                                                        i = f(0, 1, d(o, _t)),
                                                        l = _t.scroll(),
                                                        c = Math.round(y + i * I),
                                                        u = yt,
                                                        h = u.onStart,
                                                        v = u.onInterrupt,
                                                        m = u.onComplete,
                                                        x = a.tween;
                                                    if (l <= b && l >= y && c !== l) {
                                                        if (x && !x._initted && x.data <= Math.abs(c - l)) return;
                                                        !1 === yt.inertia && (n = i - _t.progress),
                                                            a(
                                                                c,
                                                                {
                                                                    duration: je(K((0.185 * Math.max(K(o - t), K(i - t))) / r / 0.05 || 0)),
                                                                    ease: yt.ease || "power3",
                                                                    data: Math.abs(c - l),
                                                                    onInterrupt: function () {
                                                                        return He.restart(!0) && v && v(_t);
                                                                    },
                                                                    onComplete: function () {
                                                                        (Bt = _t.scroll()), (Be = Ne = s && !wt ? s.totalProgress() : _t.progress), mt && mt(_t), m && m(_t);
                                                                    },
                                                                },
                                                                l,
                                                                n * I,
                                                                c - l - n * I
                                                            ),
                                                            h && h(_t, a.tween);
                                                    }
                                                } else _t.isActive && He.restart(!0);
                                            })
                                            .pause())),
                                    Qe && (Ie[Qe] = _t),
                                    (ct = _t.trigger = u(ct || pt)[0]),
                                    (pt = !0 === pt ? ct : u(pt)[0]),
                                    V(Ke) && (Ke = { targets: ct, className: Ke }),
                                    pt &&
                                        (!1 === dt || dt === pe || (dt = !(!dt && "flex" === xe(pt.parentNode).display) && fe),
                                        (_t.pin = pt),
                                        !1 !== t.force3D && e.set(pt, { force3D: !0 }),
                                        (l = e.core.getCache(pt)).spacer ? (N = l.pinState) : ((l.spacer = G = n.createElement("div")), G.setAttribute("class", "pin-spacer" + (Qe ? " pin-spacer-" + Qe : "")), (l.pinState = N = it(pt))),
                                        (_t.spacer = G = l.spacer),
                                        (Re = xe(pt)),
                                        (ne = Re[dt + Ze.os2]),
                                        (Q = e.getProperty(pt)),
                                        (ee = e.quickSetter(pt, Ze.a, ge)),
                                        rt(pt, G, Re),
                                        (Y = it(pt))),
                                    St &&
                                        ((L = $(St) ? be(St, Pe) : Pe),
                                        (P = ze("scroller-start", Qe, Ct, Ze, L, 0)),
                                        (R = ze("scroller-end", Qe, Ct, Ze, L, 0, P)),
                                        (J = P["offset" + Ze.op.d2]),
                                        (T = ze("start", Qe, Ct, Ze, L, J)),
                                        (E = ze("end", Qe, Ct, Ze, L, J)),
                                        Ot || (S.length && !0 === D(Ct, "fixedMarkers")) || (ye(kt ? i : Ct), e.set([P, R], { force3D: !0 }), (Te = e.quickSetter(P, Ze.a, ge)), (Ee = e.quickSetter(R, Ze.a, ge)))),
                                    (_t.revert = function (e) {
                                        var t = !1 !== e || !_t.enabled,
                                            r = h;
                                        t !== _t.isReverted &&
                                            (t && (_t.scroll.rec || (_t.scroll.rec = _t.scroll()), (Ve = Math.max(_t.scroll(), _t.scroll.rec || 0)), (Ye = _t.progress), (Ue = s && s.progress())),
                                            T &&
                                                [T, E, P, R].forEach(function (e) {
                                                    return (e.style.display = t ? "none" : "block");
                                                }),
                                            t && (h = 1),
                                            _t.update(t),
                                            (h = r),
                                            pt && (t ? tt(pt, G, N) : (!bt || !_t.isActive) && rt(pt, G, xe(pt), oe)),
                                            (_t.isReverted = t));
                                    }),
                                    (_t.refresh = function (r, n) {
                                        if ((!h && _t.enabled) || n)
                                            if (pt && r && A) Me(c, "scrollEnd", Xe);
                                            else {
                                                (h = 1), We && We.pause(), ht && s && s.progress(0).invalidate(), _t.isReverted || _t.revert();
                                                for (
                                                    var o,
                                                        a,
                                                        l,
                                                        f,
                                                        p,
                                                        d,
                                                        g,
                                                        m,
                                                        w,
                                                        k,
                                                        O = At(),
                                                        M = zt(),
                                                        S = X(Ct, Ze),
                                                        _ = 0,
                                                        z = 0,
                                                        B = t.end,
                                                        L = t.endTrigger || ct,
                                                        F = t.start || (0 !== t.start && ct ? (pt ? "0 0" : "0 100%") : 0),
                                                        D = t.pinnedContainer && u(t.pinnedContainer)[0],
                                                        j = (ct && Math.max(0, Le.indexOf(_t))) || 0,
                                                        H = j;
                                                    H--;

                                                )
                                                    (d = Le[H]).end || d.refresh(0, 1) || (h = 1), !(g = d.pin) || (g !== ct && g !== pt) || d.isReverted || (k || (k = []), k.unshift(d), d.revert());
                                                for (
                                                    y = lt(F, ct, O, Ze, _t.scroll(), T, P, _t, M, Pt, Ot, S) || (pt ? -0.001 : 0),
                                                        U(B) && (B = B(_t)),
                                                        V(B) && !B.indexOf("+=") && (~B.indexOf(" ") ? (B = (V(F) ? F.split(" ")[0] : "") + B) : ((_ = Ae(B.substr(2), O)), (B = V(F) ? F : y + _), (L = ct))),
                                                        b = Math.max(y, lt(B || (L ? "100% 0" : S), L, O, Ze, _t.scroll() + _, E, R, _t, M, Pt, Ot, S)) || -0.001,
                                                        I = b - y || ((y -= 0.01) && 0.001),
                                                        _ = 0,
                                                        H = j;
                                                    H--;

                                                )
                                                    (g = (d = Le[H]).pin) && d.start - d._pinPush < y && ((o = d.end - d.start), (g === ct || g === D) && (_ += o), g === pt && (z += o));
                                                if (((y += _), (b += _), (_t._pinPush = z), T && _ && (((o = {})[Ze.a] = "+=" + _), D && (o[Ze.p] = "-=" + _t.scroll()), e.set([T, E], o)), pt))
                                                    (o = xe(pt)),
                                                        (f = Ze === me),
                                                        (l = _t.scroll()),
                                                        (te = parseFloat(Q(Ze.a)) + z),
                                                        !S && b > 1 && ((kt ? i : Ct).style["overflow-" + Ze.a] = "scroll"),
                                                        rt(pt, G, o),
                                                        (Y = it(pt)),
                                                        (a = we(pt, !0)),
                                                        (m = Ot && W(Ct, f ? ve : me)()),
                                                        dt && (((oe = [dt + Ze.os2, I + z + ge]).t = G), (H = dt === fe ? Ce(pt, Ze) + I + z : 0) && oe.push(Ze.d, H + ge), ot(oe), Ot && _t.scroll(Ve)),
                                                        Ot &&
                                                            (((p = { top: a.top + (f ? l - y : m) + ge, left: a.left + (f ? m : l - y) + ge, boxSizing: "border-box", position: "fixed" })[ie] = p["max" + de] = Math.ceil(a.width) + ge),
                                                            (p[se] = p["max" + he] = Math.ceil(a.height) + ge),
                                                            (p[pe] = p[pe + ce] = p[pe + ae] = p[pe + ue] = p[pe + le] = "0"),
                                                            (p[fe] = o[fe]),
                                                            (p[fe + ce] = o[fe + ce]),
                                                            (p[fe + ae] = o[fe + ae]),
                                                            (p[fe + ue] = o[fe + ue]),
                                                            (p[fe + le] = o[fe + le]),
                                                            (q = st(N, p, bt))),
                                                        s
                                                            ? ((w = s._initted), C(1), s.render(s.duration(), !0, !0), (re = Q(Ze.a) - te + I + z), I !== re && q.splice(q.length - 2, 2), s.render(0, !0, !0), w || s.invalidate(), C(0))
                                                            : (re = I);
                                                else if (ct && _t.scroll()) for (a = ct.parentNode; a && a !== i; ) a._pinOffset && ((y -= a._pinOffset), (b -= a._pinOffset)), (a = a.parentNode);
                                                k &&
                                                    k.forEach(function (e) {
                                                        return e.revert(!1);
                                                    }),
                                                    (_t.start = y),
                                                    (_t.end = b),
                                                    (v = x = _t.scroll()) < Ve && _t.scroll(Ve),
                                                    _t.revert(!1),
                                                    (h = 0),
                                                    s && wt && s._initted && s.progress() !== Ue && s.progress(Ue, !0).render(s.time(), !0, !0),
                                                    Ye !== _t.progress && (We && s.totalProgress(Ye, !0), (_t.progress = Ye), _t.update()),
                                                    pt && dt && (G._pinOffset = Math.round(_t.progress * re)),
                                                    nt && nt(_t);
                                            }
                                    }),
                                    (_t.getVelocity = function () {
                                        return ((_t.scroll() - x) / (_() - p)) * 1e3 || 0;
                                    }),
                                    (_t.update = function (e, t) {
                                        var r,
                                            n,
                                            o,
                                            l,
                                            c,
                                            f = _t.scroll(),
                                            d = e ? 0 : (f - y) / I,
                                            g = d < 0 ? 0 : d > 1 ? 1 : d || 0,
                                            m = _t.progress;
                                        if ((t && ((x = v), (v = f), yt && ((Ne = Be), (Be = s && !wt ? s.totalProgress() : g))), gt && !g && pt && !h && !M && A && y < f + ((f - x) / (_() - p)) * gt && (g = 1e-4), g !== m && _t.enabled)) {
                                            if (
                                                ((l = (c = (r = _t.isActive = !!g && g < 1) !== (!!m && m < 1)) || !!g != !!m),
                                                (_t.direction = g > m ? 1 : -1),
                                                (_t.progress = g),
                                                wt || (!We || h || M ? s && s.totalProgress(g, !!h) : ((We.vars.totalProgress = g), We.invalidate().restart())),
                                                pt)
                                            )
                                                if ((e && dt && (G.style[dt + Ze.os2] = ne), Ot)) {
                                                    if (l) {
                                                        if (((o = !e && g > m && b + 1 > f && f + 1 >= X(Ct, Ze)), bt))
                                                            if (e || (!r && !o)) ut(pt, G);
                                                            else {
                                                                var w = we(pt, !0),
                                                                    C = f - y;
                                                                ut(pt, i, w.top + (Ze === me ? C : 0) + ge, w.left + (Ze === me ? 0 : C) + ge);
                                                            }
                                                        ot(r || o ? q : Y), (re !== I && g < 1 && r) || ee(te + (1 !== g || o ? 0 : re));
                                                    }
                                                } else ee(te + re * g);
                                            yt && !a.tween && !h && !M && He.restart(!0),
                                                Ke &&
                                                    (c || (xt && g && (g < 1 || !k))) &&
                                                    u(Ke.targets).forEach(function (e) {
                                                        return e.classList[r || xt ? "add" : "remove"](Ke.className);
                                                    }),
                                                Ge && !wt && !e && Ge(_t),
                                                l && !h
                                                    ? ((n = g && !m ? 0 : 1 === g ? 1 : 1 === m ? 2 : 3),
                                                      wt &&
                                                          ((o = (!c && "none" !== Mt[n + 1] && Mt[n + 1]) || Mt[n]),
                                                          s &&
                                                              ("complete" === o || "reset" === o || o in s) &&
                                                              ("complete" === o ? s.pause().totalProgress(1) : "reset" === o ? s.restart(!0).pause() : "restart" === o ? s.restart(!0) : s[o]()),
                                                          Ge && Ge(_t)),
                                                      (!c && k) || (et && c && et(_t), Et[n] && Et[n](_t), xt && (1 === g ? _t.kill(!1, 1) : (Et[n] = 0)), c || (Et[(n = 1 === g ? 1 : 3)] && Et[n](_t))))
                                                    : wt && Ge && !h && Ge(_t);
                                        }
                                        Ee && (Te(f + (P._isFlipped ? 1 : 0)), Ee(f));
                                    }),
                                    (_t.enable = function (e, t) {
                                        _t.enabled ||
                                            ((_t.enabled = !0), Me(Ct, "resize", De), Me(Ct, "scroll", Fe), Rt && Me(c, "refreshInit", Rt), !1 !== e && ((_t.progress = Ye = 0), (v = x = Bt = _t.scroll())), !1 !== t && _t.refresh());
                                    }),
                                    (_t.getTween = function (e) {
                                        return e && a ? a.tween : We;
                                    }),
                                    (_t.disable = function (e, t) {
                                        if (
                                            _t.enabled &&
                                            (!1 !== e && _t.revert(),
                                            (_t.enabled = _t.isActive = !1),
                                            t || (We && We.pause()),
                                            (Ve = 0),
                                            l && (l.uncache = 1),
                                            Rt && Se(c, "refreshInit", Rt),
                                            He && (He.pause(), a.tween && a.tween.kill() && (a.tween = 0)),
                                            !kt)
                                        ) {
                                            for (var r = Le.length; r--; ) if (Le[r].scroller === Ct && Le[r] !== _t) return;
                                            Se(Ct, "resize", De), Se(Ct, "scroll", Fe);
                                        }
                                    }),
                                    (_t.kill = function (e, t) {
                                        _t.disable(e, t), Qe && delete Ie[Qe];
                                        var r = Le.indexOf(_t);
                                        Le.splice(r, 1),
                                            r === m && Je > 0 && m--,
                                            s && ((s.scrollTrigger = null), e && s.render(-1), t || s.kill()),
                                            T &&
                                                [T, E, P, R].forEach(function (e) {
                                                    return e.parentNode && e.parentNode.removeChild(e);
                                                }),
                                            pt &&
                                                (l && (l.uncache = 1),
                                                (r = 0),
                                                Le.forEach(function (e) {
                                                    return e.pin === pt && r++;
                                                }),
                                                r || (l.spacer = 0));
                                    }),
                                    _t.enable(!1, !1),
                                    s && s.add && !I
                                        ? e.delayedCall(0.01, function () {
                                              return y || b || _t.refresh();
                                          }) &&
                                          (I = 0.01) &&
                                          (y = b = 0)
                                        : _t.refresh();
                            } else this.update = this.refresh = this.kill = B;
                        }),
                        (c.register = function (p) {
                            if (
                                !t &&
                                ((e = p || N()),
                                I() && window.document && ((r = window), (n = document), (o = n.documentElement), (i = n.body)),
                                e && ((u = e.utils.toArray), (f = e.utils.clamp), (C = e.core.suppressOverwrites || B), e.core.globals("ScrollTrigger", c), i))
                            ) {
                                (l =
                                    r.requestAnimationFrame ||
                                    function (e) {
                                        return setTimeout(e, 16);
                                    }),
                                    Me(r, "wheel", Fe),
                                    (s = [r, n, o, i]),
                                    Me(n, "scroll", Fe);
                                var h,
                                    m = i.style,
                                    w = m.borderTop;
                                (m.borderTop = "1px solid #000"),
                                    (h = we(i)),
                                    (me.m = Math.round(h.top + me.sc()) || 0),
                                    (ve.m = Math.round(h.left + ve.sc()) || 0),
                                    w ? (m.borderTop = w) : m.removeProperty("border-top"),
                                    (d = setInterval(Ne, 200)),
                                    e.delayedCall(0.5, function () {
                                        return (M = 0);
                                    }),
                                    Me(n, "touchcancel", B),
                                    Me(i, "touchstart", B),
                                    Ee(Me, n, "pointerdown,touchstart,mousedown", function () {
                                        return (g = 1);
                                    }),
                                    Ee(Me, n, "pointerup,touchend,mouseup", function () {
                                        return (g = 0);
                                    }),
                                    (v = e.utils.checkPrefix("transform")),
                                    et.push(v),
                                    (t = _()),
                                    (a = e.delayedCall(0.2, $e).pause()),
                                    (b = [
                                        n,
                                        "visibilitychange",
                                        function () {
                                            var e = r.innerWidth,
                                                t = r.innerHeight;
                                            n.hidden ? ((x = e), (y = t)) : (x === e && y === t) || De();
                                        },
                                        n,
                                        "DOMContentLoaded",
                                        $e,
                                        r,
                                        "load",
                                        function () {
                                            return A || $e();
                                        },
                                        r,
                                        "resize",
                                        De,
                                    ]),
                                    Y(Me);
                            }
                            return t;
                        }),
                        (c.defaults = function (e) {
                            for (var t in e) _e[t] = e[t];
                        }),
                        (c.kill = function () {
                            (z = 0),
                                Le.slice(0).forEach(function (e) {
                                    return e.kill(1);
                                });
                        }),
                        (c.config = function (e) {
                            "limitCallbacks" in e && (k = !!e.limitCallbacks);
                            var t = e.syncInterval;
                            (t && clearInterval(d)) || ((d = t) && setInterval(Ne, t)), "autoRefreshEvents" in e && (Y(Se) || Y(Me, e.autoRefreshEvents || "none"), (T = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                        }),
                        (c.scrollerProxy = function (e, t) {
                            var n = u(e)[0],
                                s = P.indexOf(n),
                                a = F(n);
                            ~s && P.splice(s, a ? 6 : 2), a ? S.unshift(r, t, i, t, o, t) : S.unshift(n, t);
                        }),
                        (c.matchMedia = function (e) {
                            var t, n, o, i, s;
                            for (n in e)
                                (o = je.indexOf(n)),
                                    (i = e[n]),
                                    (O = n),
                                    "all" === n
                                        ? i()
                                        : (t = r.matchMedia(n)) &&
                                          (t.matches && (s = i()),
                                          ~o ? ((je[o + 1] = J(je[o + 1], i)), (je[o + 2] = J(je[o + 2], s))) : ((o = je.length), je.push(n, i, s), t.addListener ? t.addListener(He) : t.addEventListener("change", He)),
                                          (je[o + 3] = t.matches)),
                                    (O = 0);
                            return je;
                        }),
                        (c.clearMatchMedia = function (e) {
                            e || (je.length = 0), (e = je.indexOf(e)) >= 0 && je.splice(e, 4);
                        }),
                        c
                    );
                })();
                (exports.default = exports.ScrollTrigger = pt),
                    (pt.version = "3.7.0"),
                    (pt.saveStyles = function (t) {
                        return t
                            ? u(t).forEach(function (t) {
                                  if (t && t.style) {
                                      var r = Ve.indexOf(t);
                                      r >= 0 && Ve.splice(r, 5), Ve.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), e.core.getCache(t), O);
                                  }
                              })
                            : Ve;
                    }),
                    (pt.revert = function (e, t) {
                        return Ze(!e, t);
                    }),
                    (pt.create = function (e, t) {
                        return new pt(e, t);
                    }),
                    (pt.refresh = function (e) {
                        return e ? De() : $e(!0);
                    }),
                    (pt.update = Ke),
                    (pt.maxScroll = function (e, t) {
                        return X(e, t ? ve : me);
                    }),
                    (pt.getScrollFunc = function (e, t) {
                        return W(u(e)[0], t ? ve : me);
                    }),
                    (pt.getById = function (e) {
                        return Ie[e];
                    }),
                    (pt.getAll = function () {
                        return Le.slice(0);
                    }),
                    (pt.isScrolling = function () {
                        return !!A;
                    }),
                    (pt.addEventListener = function (e, t) {
                        var r = We[e] || (We[e] = []);
                        ~r.indexOf(t) || r.push(t);
                    }),
                    (pt.removeEventListener = function (e, t) {
                        var r = We[e],
                            n = r && r.indexOf(t);
                        n >= 0 && r.splice(n, 1);
                    }),
                    (pt.batch = function (t, r) {
                        var n,
                            o = [],
                            i = {},
                            s = r.interval || 0.016,
                            a = r.batchMax || 1e9,
                            l = function (t, r) {
                                var n = [],
                                    o = [],
                                    i = e
                                        .delayedCall(s, function () {
                                            r(n, o), (n = []), (o = []);
                                        })
                                        .pause();
                                return function (e) {
                                    n.length || i.restart(!0), n.push(e.trigger), o.push(e), a <= n.length && i.progress(1);
                                };
                            };
                        for (n in r) i[n] = "on" === n.substr(0, 2) && U(r[n]) && "onRefreshInit" !== n ? l(0, r[n]) : r[n];
                        return (
                            U(a) &&
                                ((a = a()),
                                Me(pt, "refresh", function () {
                                    return (a = r.batchMax());
                                })),
                            u(t).forEach(function (e) {
                                var t = {};
                                for (n in i) t[n] = i[n];
                                (t.trigger = e), o.push(pt.create(t));
                            }),
                            o
                        );
                    }),
                    (pt.sort = function (e) {
                        return Le.sort(
                            e ||
                                function (e, t) {
                                    return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
                                }
                        );
                    }),
                    N() && e.registerPlugin(pt);
            },
            {},
        ],
        D78i: [
            function (require, module, exports) {
                function n(n, r) {
                    for (var e = -1, l = null == n ? 0 : n.length; ++e < l && !1 !== r(n[e], e, n); );
                    return n;
                }
                module.exports = n;
            },
            {},
        ],
        oVe7: [
            function (require, module, exports) {
                function r(r) {
                    return function (e, n, t) {
                        for (var o = -1, u = Object(e), f = t(e), a = f.length; a--; ) {
                            var c = f[r ? a : ++o];
                            if (!1 === n(u[c], c, u)) break;
                        }
                        return e;
                    };
                }
                module.exports = r;
            },
            {},
        ],
        mduf: [
            function (require, module, exports) {
                var e = require("./_createBaseFor"),
                    r = e();
                module.exports = r;
            },
            { "./_createBaseFor": "oVe7" },
        ],
        r8MY: [
            function (require, module, exports) {
                function r(r, o) {
                    for (var e = -1, n = Array(r); ++e < r; ) n[e] = o(e);
                    return n;
                }
                module.exports = r;
            },
            {},
        ],
        j3D9: [
            function (require, module, exports) {
                var global = arguments[3];
                var e = arguments[3],
                    t = "object" == typeof e && e && e.Object === Object && e;
                module.exports = t;
            },
            {},
        ],
        MIhM: [
            function (require, module, exports) {
                var e = require("./_freeGlobal"),
                    t = "object" == typeof self && self && self.Object === Object && self,
                    l = e || t || Function("return this")();
                module.exports = l;
            },
            { "./_freeGlobal": "j3D9" },
        ],
        wppe: [
            function (require, module, exports) {
                var o = require("./_root"),
                    r = o.Symbol;
                module.exports = r;
            },
            { "./_root": "MIhM" },
        ],
        uiOY: [
            function (require, module, exports) {
                var r = require("./_Symbol"),
                    t = Object.prototype,
                    e = t.hasOwnProperty,
                    o = t.toString,
                    a = r ? r.toStringTag : void 0;
                function l(r) {
                    var t = e.call(r, a),
                        l = r[a];
                    try {
                        r[a] = void 0;
                        var c = !0;
                    } catch (n) {}
                    var i = o.call(r);
                    return c && (t ? (r[a] = l) : delete r[a]), i;
                }
                module.exports = l;
            },
            { "./_Symbol": "wppe" },
        ],
        lPmd: [
            function (require, module, exports) {
                var t = Object.prototype,
                    o = t.toString;
                function r(t) {
                    return o.call(t);
                }
                module.exports = r;
            },
            {},
        ],
        e5TX: [
            function (require, module, exports) {
                var e = require("./_Symbol"),
                    r = require("./_getRawTag"),
                    o = require("./_objectToString"),
                    t = "[object Null]",
                    i = "[object Undefined]",
                    n = e ? e.toStringTag : void 0;
                function u(e) {
                    return null == e ? (void 0 === e ? i : t) : n && n in Object(e) ? r(e) : o(e);
                }
                module.exports = u;
            },
            { "./_Symbol": "wppe", "./_getRawTag": "uiOY", "./_objectToString": "lPmd" },
        ],
        OuyB: [
            function (require, module, exports) {
                function e(e) {
                    return null != e && "object" == typeof e;
                }
                module.exports = e;
            },
            {},
        ],
        pK4Y: [
            function (require, module, exports) {
                var e = require("./_baseGetTag"),
                    r = require("./isObjectLike"),
                    t = "[object Arguments]";
                function u(u) {
                    return r(u) && e(u) == t;
                }
                module.exports = u;
            },
            { "./_baseGetTag": "e5TX", "./isObjectLike": "OuyB" },
        ],
        tilN: [
            function (require, module, exports) {
                var e = require("./_baseIsArguments"),
                    r = require("./isObjectLike"),
                    t = Object.prototype,
                    l = t.hasOwnProperty,
                    n = t.propertyIsEnumerable,
                    u = e(
                        (function () {
                            return arguments;
                        })()
                    )
                        ? e
                        : function (e) {
                              return r(e) && l.call(e, "callee") && !n.call(e, "callee");
                          };
                module.exports = u;
            },
            { "./_baseIsArguments": "pK4Y", "./isObjectLike": "OuyB" },
        ],
        p0cq: [
            function (require, module, exports) {
                var r = Array.isArray;
                module.exports = r;
            },
            {},
        ],
        PYZb: [
            function (require, module, exports) {
                function e() {
                    return !1;
                }
                module.exports = e;
            },
            {},
        ],
        iyC2: [
            function (require, module, exports) {
                var e = require("./_root"),
                    o = require("./stubFalse"),
                    r = "object" == typeof exports && exports && !exports.nodeType && exports,
                    t = r && "object" == typeof module && module && !module.nodeType && module,
                    p = t && t.exports === r,
                    u = p ? e.Buffer : void 0,
                    d = u ? u.isBuffer : void 0,
                    s = d || o;
                module.exports = s;
            },
            { "./_root": "MIhM", "./stubFalse": "PYZb" },
        ],
        AGrE: [
            function (require, module, exports) {
                var e = 9007199254740991,
                    r = /^(?:0|[1-9]\d*)$/;
                function t(t, n) {
                    var o = typeof t;
                    return !!(n = null == n ? e : n) && ("number" == o || ("symbol" != o && r.test(t))) && t > -1 && t % 1 == 0 && t < n;
                }
                module.exports = t;
            },
            {},
        ],
        GmNU: [
            function (require, module, exports) {
                var e = 9007199254740991;
                function r(r) {
                    return "number" == typeof r && r > -1 && r % 1 == 0 && r <= e;
                }
                module.exports = r;
            },
            {},
        ],
        L2LX: [
            function (require, module, exports) {
                var e = require("./_baseGetTag"),
                    t = require("./isLength"),
                    r = require("./isObjectLike"),
                    o = "[object Arguments]",
                    b = "[object Array]",
                    c = "[object Boolean]",
                    j = "[object Date]",
                    a = "[object Error]",
                    n = "[object Function]",
                    i = "[object Map]",
                    A = "[object Number]",
                    y = "[object Object]",
                    u = "[object RegExp]",
                    g = "[object Set]",
                    l = "[object String]",
                    p = "[object WeakMap]",
                    s = "[object ArrayBuffer]",
                    m = "[object DataView]",
                    U = "[object Float32Array]",
                    f = "[object Float64Array]",
                    q = "[object Int8Array]",
                    F = "[object Int16Array]",
                    I = "[object Int32Array]",
                    d = "[object Uint8Array]",
                    h = "[object Uint8ClampedArray]",
                    k = "[object Uint16Array]",
                    x = "[object Uint32Array]",
                    B = {};
                function D(o) {
                    return r(o) && t(o.length) && !!B[e(o)];
                }
                (B[U] = B[f] = B[q] = B[F] = B[I] = B[d] = B[h] = B[k] = B[x] = !0), (B[o] = B[b] = B[s] = B[c] = B[m] = B[j] = B[a] = B[n] = B[i] = B[A] = B[y] = B[u] = B[g] = B[l] = B[p] = !1), (module.exports = D);
            },
            { "./_baseGetTag": "e5TX", "./isLength": "GmNU", "./isObjectLike": "OuyB" },
        ],
        PnXa: [
            function (require, module, exports) {
                function n(n) {
                    return function (r) {
                        return n(r);
                    };
                }
                module.exports = n;
            },
            {},
        ],
        PBPf: [
            function (require, module, exports) {
                var e = require("./_freeGlobal"),
                    o = "object" == typeof exports && exports && !exports.nodeType && exports,
                    r = o && "object" == typeof module && module && !module.nodeType && module,
                    t = r && r.exports === o,
                    p = t && e.process,
                    u = (function () {
                        try {
                            var e = r && r.require && r.require("util").types;
                            return e || (p && p.binding && p.binding("util"));
                        } catch (o) {}
                    })();
                module.exports = u;
            },
            { "./_freeGlobal": "j3D9" },
        ],
        kwIb: [
            function (require, module, exports) {
                var e = require("./_baseIsTypedArray"),
                    r = require("./_baseUnary"),
                    a = require("./_nodeUtil"),
                    i = a && a.isTypedArray,
                    s = i ? r(i) : e;
                module.exports = s;
            },
            { "./_baseIsTypedArray": "L2LX", "./_baseUnary": "PnXa", "./_nodeUtil": "PBPf" },
        ],
        VcLW: [
            function (require, module, exports) {
                var e = require("./_baseTimes"),
                    r = require("./isArguments"),
                    t = require("./isArray"),
                    i = require("./isBuffer"),
                    n = require("./_isIndex"),
                    s = require("./isTypedArray"),
                    u = Object.prototype,
                    f = u.hasOwnProperty;
                function a(u, a) {
                    var o = t(u),
                        p = !o && r(u),
                        y = !o && !p && i(u),
                        g = !o && !p && !y && s(u),
                        h = o || p || y || g,
                        l = h ? e(u.length, String) : [],
                        q = l.length;
                    for (var b in u) (!a && !f.call(u, b)) || (h && ("length" == b || (y && ("offset" == b || "parent" == b)) || (g && ("buffer" == b || "byteLength" == b || "byteOffset" == b)) || n(b, q))) || l.push(b);
                    return l;
                }
                module.exports = a;
            },
            { "./_baseTimes": "r8MY", "./isArguments": "tilN", "./isArray": "p0cq", "./isBuffer": "iyC2", "./_isIndex": "AGrE", "./isTypedArray": "kwIb" },
        ],
        nhsl: [
            function (require, module, exports) {
                var t = Object.prototype;
                function o(o) {
                    var r = o && o.constructor;
                    return o === (("function" == typeof r && r.prototype) || t);
                }
                module.exports = o;
            },
            {},
        ],
        oss3: [
            function (require, module, exports) {
                function n(n, r) {
                    return function (t) {
                        return n(r(t));
                    };
                }
                module.exports = n;
            },
            {},
        ],
        J1oc: [
            function (require, module, exports) {
                var e = require("./_overArg"),
                    r = e(Object.keys, Object);
                module.exports = r;
            },
            { "./_overArg": "oss3" },
        ],
        BNjb: [
            function (require, module, exports) {
                var r = require("./_isPrototype"),
                    e = require("./_nativeKeys"),
                    t = Object.prototype,
                    o = t.hasOwnProperty;
                function n(t) {
                    if (!r(t)) return e(t);
                    var n = [];
                    for (var u in Object(t)) o.call(t, u) && "constructor" != u && n.push(u);
                    return n;
                }
                module.exports = n;
            },
            { "./_isPrototype": "nhsl", "./_nativeKeys": "J1oc" },
        ],
        u9vI: [
            function (require, module, exports) {
                function n(n) {
                    var o = typeof n;
                    return null != n && ("object" == o || "function" == o);
                }
                module.exports = n;
            },
            {},
        ],
        dRuq: [
            function (require, module, exports) {
                var e = require("./_baseGetTag"),
                    r = require("./isObject"),
                    t = "[object AsyncFunction]",
                    n = "[object Function]",
                    o = "[object GeneratorFunction]",
                    c = "[object Proxy]";
                function u(u) {
                    if (!r(u)) return !1;
                    var i = e(u);
                    return i == n || i == o || i == t || i == c;
                }
                module.exports = u;
            },
            { "./_baseGetTag": "e5TX", "./isObject": "u9vI" },
        ],
        LN6c: [
            function (require, module, exports) {
                var e = require("./isFunction"),
                    n = require("./isLength");
                function r(r) {
                    return null != r && n(r.length) && !e(r);
                }
                module.exports = r;
            },
            { "./isFunction": "dRuq", "./isLength": "GmNU" },
        ],
        HI10: [
            function (require, module, exports) {
                var e = require("./_arrayLikeKeys"),
                    r = require("./_baseKeys"),
                    i = require("./isArrayLike");
                function u(u) {
                    return i(u) ? e(u) : r(u);
                }
                module.exports = u;
            },
            { "./_arrayLikeKeys": "VcLW", "./_baseKeys": "BNjb", "./isArrayLike": "LN6c" },
        ],
        xqjy: [
            function (require, module, exports) {
                var e = require("./_baseFor"),
                    r = require("./keys");
                function u(u, o) {
                    return u && e(u, o, r);
                }
                module.exports = u;
            },
            { "./_baseFor": "mduf", "./keys": "HI10" },
        ],
        Gl56: [
            function (require, module, exports) {
                var r = require("./isArrayLike");
                function e(e, n) {
                    return function (t, u) {
                        if (null == t) return t;
                        if (!r(t)) return e(t, u);
                        for (var i = t.length, f = n ? i : -1, o = Object(t); (n ? f-- : ++f < i) && !1 !== u(o[f], f, o); );
                        return t;
                    };
                }
                module.exports = e;
            },
            { "./isArrayLike": "LN6c" },
        ],
        z7ms: [
            function (require, module, exports) {
                var e = require("./_baseForOwn"),
                    r = require("./_createBaseEach"),
                    a = r(e);
                module.exports = a;
            },
            { "./_baseForOwn": "xqjy", "./_createBaseEach": "Gl56" },
        ],
        Jpv1: [
            function (require, module, exports) {
                function e(e) {
                    return e;
                }
                module.exports = e;
            },
            {},
        ],
        tAcL: [
            function (require, module, exports) {
                var e = require("./identity");
                function t(t) {
                    return "function" == typeof t ? t : e;
                }
                module.exports = t;
            },
            { "./identity": "Jpv1" },
        ],
        cTKO: [
            function (require, module, exports) {
                var r = require("./_arrayEach"),
                    e = require("./_baseEach"),
                    a = require("./_castFunction"),
                    u = require("./isArray");
                function i(i, c) {
                    return (u(i) ? r : e)(i, a(c));
                }
                module.exports = i;
            },
            { "./_arrayEach": "D78i", "./_baseEach": "z7ms", "./_castFunction": "tAcL", "./isArray": "p0cq" },
        ],
        nJZ0: [
            function (require, module, exports) {
                module.exports = require("./forEach");
            },
            { "./forEach": "cTKO" },
        ],
        CQHA: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.copyText = void 0);
                var e = function (e) {
                    var t = e.target.innerText,
                        o = document.createElement("textarea");
                    (o.width = "1px"), (o.height = "1px"), (o.background = "transparents"), (o.value = t), document.body.append(o), o.select(), document.execCommand("copy"), document.body.removeChild(o);
                };
                exports.copyText = e;
            },
            {},
        ],
        QvaY: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = l(require("locomotive-scroll")),
                    t = l(require("gsap")),
                    o = require("gsap/ScrollTrigger"),
                    r = l(require("lodash/each")),
                    n = require("./utils/index");
                function l(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                function a(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var r = t[o];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                function c(e, t, o) {
                    return t && a(e.prototype, t), o && a(e, o), e;
                }
                var u = document.querySelectorAll(".contact-scroll"),
                    s = document.getElementById("js-footer"),
                    d = document.querySelector("[data-scroll-container]"),
                    f = document.querySelector("button.email"),
                    g = document.querySelector(".to-copy span");
                t.default.registerPlugin(o.ScrollTrigger);
                var m = new e.default({ el: d, smooth: !0, lerp: 0.06, tablet: { breakpoint: 768 } });
                setTimeout(function () {
                    m.update();
                }, 1e3),
                    m.on("scroll", o.ScrollTrigger.update),
                    o.ScrollTrigger.scrollerProxy(m.el, {
                        scrollTop: function (e) {
                            return arguments.length ? m.scrollTo(e, 0, 0) : m.scroll.instance.scroll.y;
                        },
                        getBoundingClientRect: function () {
                            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                        },
                    });
                var h = (function () {
                    function e(t) {
                        i(this, e), (this.locomotive = t), this.heroTextAnimation(), this.homeIntro(), this.homeAnimations(), this.homeActions();
                    }
                    return (
                        c(e, [
                            {
                                key: "homeActions",
                                value: function () {
                                    var e = this;
                                    (0, r.default)(u, function (t) {
                                        t.onclick = function () {
                                            e.locomotive.scrollTo(s);
                                        };
                                    }),
                                        f.addEventListener("click", function (e) {
                                            (0, n.copyText)(e),
                                                (g.textContent = "copied"),
                                                setTimeout(function () {
                                                    g.textContent = "Click To Copy";
                                                }, 2e3);
                                        });
                                },
                            },
                            {
                                key: "homeIntro",
                                value: function () {
                                    var e = t.default.timeline();
                                    t.default.to(d, { autoAlpha: 1 }),
                                        e
                                            .from(".home__nav", { duration: 0.5, delay: 0.3, opacity: 0, yPercent: -100, ease: "power4.out" })
                                            .from(".hero__title [title-overflow]", { duration: 0.7, yPercent: 100, stagger: { amount: 0.2 }, ease: "power4.out" })
                                            .from(".hero__title .bottom__right", { duration: 1, yPercent: 100, opacity: 0, ease: "power4.out" }, "<20%")
                                            .set(".hero__title .overflow", { overflow: "unset" })
                                            .from(".hero__title .mobile", { duration: 0.7, yPercent: 100, stagger: { amount: 0.2 }, ease: "power4.out" }, "-=1.4");
                                },
                            },
                            {
                                key: "homeAnimations",
                                value: function () {
                                    (t.default.to(".home__projects__line", { autoAlpha: 1 }),
                                    t.default.utils.toArray(".home__projects__line").forEach(function (e) {
                                        var o = e.querySelector("span");
                                        t.default.from(o, { duration: 1.5, scrollTrigger: { trigger: e, scroller: "[data-scroll-container]" }, scaleX: 0 });
                                    }),
                                    t.default.utils.toArray("[data-fade-in]").forEach(function (e) {
                                        t.default.from(e, { scrollTrigger: { trigger: e, scroller: "[data-scroll-container]" }, duration: 1.5, yPercent: 100, opacity: 0, ease: "power4.out" });
                                    }),
                                    window.innerWidth <= 768) &&
                                        (t.default.utils.toArray(".home__projects__project").forEach(function (e) {
                                            var o = e.querySelector(".title__main"),
                                                r = e.querySelector(".project__link");
                                            t.default.from([o, r], { scrollTrigger: { trigger: e, scroller: "[data-scroll-container]" }, duration: 1.5, yPercent: 100, stagger: { amount: 0.2 }, ease: "power4.out" });
                                        }),
                                        t.default
                                            .timeline({ defaults: { ease: "power1.out" }, scrollTrigger: { trigger: ".home__awards", scroller: "[data-scroll-container]" } })
                                            .from(".awards-title span", { duration: 1, opacity: 0, yPercent: 100, stagger: { amount: 0.2 } }));
                                },
                            },
                            {
                                key: "heroTextAnimation",
                                value: function () {
                                    t.default.to(".hero__title__dash.desktop", { scrollTrigger: { trigger: ".hero__title", scroller: "[data-scroll-container]", scrub: !0, start: "-8% 9%", end: "110% 20%" }, scaleX: 4, ease: "none" });
                                },
                            },
                        ]),
                        e
                    );
                })();
                (exports.default = h), new h(m);
            },
            { "locomotive-scroll": "ez7q", gsap: "TpQl", "gsap/ScrollTrigger": "TgBN", "lodash/each": "nJZ0", "./utils/index": "CQHA" },
        ],
    },
    {},
    ["QvaY"],
    null
);
//# sourceMappingURL=js.ece49295.js.map
