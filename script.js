! function(e) {
    "use strict";

    function n(e) {
        if ("undefined" == typeof e.length) o(e, "click", t);
        else if ("string" != typeof e && !(e instanceof String))
            for (var n = 0; n < e.length; n++) o(e[n], "click", t)
    }

    function t(e) {
        var t, o, i, d;
        return e = e || window.event, t = e.currentTarget || e.srcElement, i = t.getAttribute("href"), i && (d = e.ctrlKey || e.shiftKey || e.metaKey, o = t.getAttribute("target"), d || o && !r(o)) ? (n.open(i), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1) : void 0
    }

    function o(e, n, t) {
        var o, i;
        return e.addEventListener ? e.addEventListener(n, t, !1) : (o = "on" + n, e.attachEvent ? e.attachEvent(o, t) : e[o] ? (i = e[o], e[o] = function() {
            t(), i()
        }) : e[o] = t, void 0)
    }

    function i(e, n, t) {
        var o, i, r, d, u;
        return o = document.createElement("iframe"), o.style.display = "none", document.body.appendChild(o), i = o.contentDocument || o.contentWindow.document, d = '"' + e + '"', n && (d += ', "' + n + '"'), t && (d += ', "' + t + '"'), r = i.createElement("script"), r.type = "text/javascript", r.text = "window.parent = null; window.top = null;window.frameElement = null; var child = window.open(" + d + ");child.opener = null", i.body.appendChild(r), u = o.contentWindow.child, document.body.removeChild(o), u
    }

    function r(e) {
        return "_top" === e || "_self" === e || "_parent" === e
    }
    var d = -1 !== navigator.userAgent.indexOf("MSIE"),
        u = window.open;
    n.open = function(e, n, t) {
        var o;
        return r(n) ? u.apply(window, arguments) : d ? (o = u.apply(window, arguments), o.opener = null, o) : i(e, n, t)
    }, n.patch = function() {
        window.open = function() {
            return n.open.apply(this, arguments)
        }
    }, "undefined" != typeof exports && ("undefined" != typeof module && module.exports ? module.exports = n : exports.blankshield = n), "function" == typeof define && "object" == typeof define.amd && define("blankshield", [], function() {
        return n
    }), e.blankshield = n
}(this);
document.addEventListener('DOMContentLoaded', function() {
    blankshield(document.querySelectorAll('a[target=_blank]'));
});

function moveParallax() {
    jQuery(".parallax-content").filter(function(t, e) {
        return jQuery(e).visible(!0)
    }).each(function(t) {
        var e = parseInt(jQuery(this).offset().top),
            i = jQuery(window).scrollTop() - e,
            n = .1 * i;
        isChrome && "undefined" != typeof TweenLite ? TweenLite.to(jQuery(this).find(".parallax-image"), .2, {
            y: n
        }) : jQuery(this).find(".parallax-image").css({
            transform: "translateY(" + n + "px)",
            "moz-transform": "translateY(" + n + "px)",
            "webkit-transform": "translateY(" + n + "px)"
        })
    })
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = "length" in t && t.length,
            i = K.type(t);
        return "function" !== i && !K.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function n(t, e, i) {
        if (K.isFunction(e)) return K.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return K.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (at.test(e)) return K.filter(e, t, i);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return W.call(e, t) >= 0 !== i
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = ft[t] = {};
        return K.each(t.match(ht) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        Z.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), K.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(_t, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : xt.test(i) ? K.parseJSON(i) : i)
                } catch (t) {}
                yt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function c() {
        return !0
    }

    function $() {
        return !1
    }

    function u() {
        try {
            return Z.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function h(t) {
        var e = Ft.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function f(t, e) {
        for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
    }

    function g(t, e) {
        var i, n, r, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (o = vt.access(t), s = vt.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (i = 0, n = c[r].length; n > i; i++) K.event.add(e, r, c[r][i])
            }
            yt.hasData(t) && (a = yt.access(t), l = K.extend({}, a), yt.set(e, l))
        }
    }

    function m(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
    }

    function v(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && St.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function y(e, i) {
        var n, r = K(i.createElement(e)).appendTo(i.body),
            o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : K.css(r[0], "display");
        return r.detach(), o
    }

    function x(t) {
        var e = Z,
            i = It[t];
        return i || (i = y(t, e), "none" !== i && i || (zt = (zt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = zt[0].contentDocument, e.write(), e.close(), i = y(t, e), zt.detach()), It[t] = i), i
    }

    function _(t, e, i) {
        var n, r, o, s, a = t.style;
        return i = i || Bt(t), i && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)), Ht.test(s) && Xt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function w(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function b(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Gt.length; r--;)
            if (e = Gt[r] + i, e in t) return e;
        return n
    }

    function T(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function S(t, e, i, n, r) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += K.css(t, i + bt[o], !0, r)), n ? ("content" === i && (s -= K.css(t, "padding" + bt[o], !0, r)), "margin" !== i && (s -= K.css(t, "border" + bt[o] + "Width", !0, r))) : (s += K.css(t, "padding" + bt[o], !0, r), "padding" !== i && (s += K.css(t, "border" + bt[o] + "Width", !0, r)));
        return s
    }

    function k(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Bt(t),
            s = "border-box" === K.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = _(t, e, o), (0 > r || null == r) && (r = t.style[e]), Ht.test(r)) return r;
            n = s && (Q.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, i || (s ? "border" : "content"), n, o) + "px"
    }

    function C(t, e) {
        for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = vt.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (o[s] = vt.access(n, "olddisplay", x(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : K.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function P(t, e, i, n, r) {
        return new P.prototype.init(t, e, i, n, r)
    }

    function O() {
        return setTimeout(function() {
            Qt = void 0
        }), Qt = K.now()
    }

    function A(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = bt[n], r["margin" + i] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function M(t, e, i) {
        for (var n, r = (ie[e] || []).concat(ie["*"]), o = 0, s = r.length; s > o; o++)
            if (n = r[o].call(i, e, t)) return n
    }

    function E(t, e, i) {
        var n, r, o, s, a, l, c, u, p = this,
            d = {},
            h = t.style,
            f = t.nodeType && Tt(t),
            g = vt.get(t, "fxshow");
        i.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = K.css(t, "display"), u = "none" === c ? vt.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === u && "none" === K.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], Jt.exec(r)) {
                if (delete e[n], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || K.style(t, n)
            } else c = void 0;
        if (K.isEmptyObject(d)) "inline" === ("none" === c ? x(t.nodeName) : c) && (h.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = vt.access(t, "fxshow", {}), o && (g.hidden = !f), f ? K(t).show() : p.done(function() {
                K(t).hide()
            }), p.done(function() {
                var e;
                vt.remove(t, "fxshow");
                for (e in d) K.style(t, e, d[e])
            });
            for (n in d) s = M(f ? g[n] : 0, n, p), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function N(t, e) {
        var i, n, r, o, s;
        for (i in t)
            if (n = K.camelCase(i), r = e[n], o = t[i], K.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = K.cssHooks[n], s && "expand" in s) {
                o = s.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = r)
            } else e[n] = r
    }

    function L(t, e, i) {
        var n, r, o = 0,
            s = ee.length,
            a = K.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Qt || O(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: K.extend({}, e),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Qt || O(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = K.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (N(u, c.opts.specialEasing); s > o; o++)
            if (n = ee[o].call(c, t, u, c.opts)) return n;
        return K.map(u, M, c), K.isFunction(c.opts.start) && c.opts.start.call(t, c), K.fx.timer(K.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function R(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                o = e.toLowerCase().match(ht) || [];
            if (K.isFunction(i))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function D(t, e, i, n) {
        function r(a) {
            var l;
            return o[a] = !0, K.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            s = t === xe;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function F(t, e) {
        var i, n, r = K.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && K.extend(!0, t, n), t
    }

    function j(t, e, i) {
        for (var n, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (r in a)
                if (a[r] && a[r].test(n)) {
                    l.unshift(r);
                    break
                } if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function z(t, e, i, n) {
        var r, o, s, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = c[l + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    } if (s !== !0)
                if (s && t.throws) e = s(e);
                else try {
                    e = s(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: s ? t : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function I(t, e, i, n) {
        var r;
        if (K.isArray(e)) K.each(e, function(e, r) {
            i || Se.test(t) ? n(t, r) : I(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== K.type(e)) n(t, e);
        else
            for (r in e) I(t + "[" + r + "]", e[r], i, n)
    }

    function X(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var H = [],
        B = H.slice,
        Y = H.concat,
        q = H.push,
        W = H.indexOf,
        V = {},
        U = V.toString,
        G = V.hasOwnProperty,
        Q = {},
        Z = t.document,
        J = "2.1.4",
        K = function(t, e) {
            return new K.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) {
            return e.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: J,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: q,
        sort: H.sort,
        splice: H.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, i, n, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (c && n && (K.isPlainObject(n) || (r = K.isArray(n))) ? (r ? (r = !1, o = i && K.isArray(i) ? i : []) : o = i && K.isPlainObject(i) ? i : {}, s[e] = K.extend(c, o, n)) : void 0 !== n && (s[e] = n));
        return s
    }, K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" === K.type(t) && !t.nodeType && !K.isWindow(t) && !(t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[U.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var r, o = 0,
                s = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], n), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], n), r === !1) break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : q.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : W.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) n = !e(t[o], o), n !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, n) {
            var r, o = 0,
                s = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; s > o; o++) r = e(t[o], o, n), null != r && l.push(r);
            else
                for (o in t) r = e(t[o], o, n), null != r && l.push(r);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t) ? (n = B.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(B.call(arguments)))
            }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
        },
        now: Date.now,
        support: Q
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        V["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = function(t) {
        function e(t, e, i, n) {
            var r, o, s, a, l, c, p, h, f, g;
            if ((e ? e.ownerDocument || e : X) !== N && E(e), e = e || N, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && R) {
                if (11 !== a && (r = yt.exec(t)))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return i;
                            if (o.id === s) return i.push(o), i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && z(e, o) && o.id === s) return i.push(o), i
                    } else {
                        if (r[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = r[3]) && w.getElementsByClassName) return K.apply(i, e.getElementsByClassName(s)), i
                    } if (w.qsa && (!D || !D.test(t))) {
                    if (h = p = I, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = k(t), (p = e.getAttribute("id")) ? h = p.replace(_t, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + d(c[l]);
                        f = xt.test(t) && u(e.parentNode) || e, g = c.join(",")
                    }
                    if (g) try {
                        return K.apply(i, f.querySelectorAll(g)), i
                    } catch (t) {} finally {
                        p || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(ct, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > b.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[I] = !0, t
        }

        function r(t) {
            var e = N.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) b.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function p() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function h(t, e, i) {
            var n = e.dir,
                r = i && "parentNode" === n,
                o = B++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, o)
            } : function(e, i, s) {
                var a, l, c = [H, o];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) {
                            if (l = e[I] || (e[I] = {}), (a = l[n]) && a[0] === H && a[1] === o) return c[2] = a[2];
                            if (l[n] = c, c[2] = t(e, i, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
            return n
        }

        function m(t, e, i, n, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, r)) && (s.push(o), c && e.push(a));
            return s
        }

        function v(t, e, i, r, o, s) {
            return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, s)), n(function(n, s, a, l) {
                var c, u, p, d = [],
                    h = [],
                    f = s.length,
                    v = n || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : m(v, d, t, a, l),
                    x = i ? o || (n ? t : f || r) ? [] : s : y;
                if (i && i(y, x, a, l), r)
                    for (c = m(x, h), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (x[h[u]] = !(y[h[u]] = p));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = x.length; u--;)(p = x[u]) && c.push(y[u] = p);
                            o(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(p = x[u]) && (c = o ? et(n, p) : d[u]) > -1 && (n[c] = !(s[c] = p))
                    }
                } else x = m(x === s ? x.splice(f, x.length) : x), o ? o(null, s, x, l) : K.apply(s, x)
            })
        }

        function y(t) {
            for (var e, i, n, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = h(function(t) {
                    return t === e
                }, s, !0), c = h(function(t) {
                    return et(e, t) > -1
                }, s, !0), u = [function(t, i, n) {
                    var r = !o && (n || i !== O) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, r
                }]; r > a; a++)
                if (i = b.relative[t[a].type]) u = [h(f(u), i)];
                else {
                    if (i = b.filter[t[a].type].apply(null, t[a].matches), i[I]) {
                        for (n = ++a; r > n && !b.relative[t[n].type]; n++);
                        return v(a > 1 && f(u), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ct, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && d(t))
                    }
                    u.push(i)
                } return f(u)
        }

        function x(t, i) {
            var r = i.length > 0,
                o = t.length > 0,
                s = function(n, s, a, l, c) {
                    var u, p, d, h = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = O,
                        x = n || o && b.find.TAG("*", c),
                        _ = H += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (c && (O = s !== N && s); f !== w && null != (u = x[f]); f++) {
                        if (o && u) {
                            for (p = 0; d = t[p++];)
                                if (d(u, s, a)) {
                                    l.push(u);
                                    break
                                } c && (H = _)
                        }
                        r && ((u = !d && u) && h--, n && g.push(u))
                    }
                    if (h += f, r && f !== h) {
                        for (p = 0; d = i[p++];) d(g, v, s, a);
                        if (n) {
                            if (h > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = Z.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (H = _, O = y), g
                };
            return r ? n(s) : s
        }
        var _, w, b, T, S, k, C, P, O, A, M, E, N, L, R, D, F, j, z, I = "sizzle" + 1 * new Date,
            X = t.document,
            H = 0,
            B = 0,
            Y = i(),
            q = i(),
            W = i(),
            V = function(t, e) {
                return t === e && (M = !0), 0
            },
            U = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            Z = Q.pop,
            J = Q.push,
            K = Q.push,
            tt = Q.slice,
            et = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = rt.replace("w", "w#"),
            st = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
            at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            lt = new RegExp(nt + "+", "g"),
            ct = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            pt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(at),
            ft = new RegExp("^" + ot + "$"),
            gt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + it + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            _t = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            bt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Tt = function() {
                E()
            };
        try {
            K.apply(Q = tt.call(X.childNodes), X.childNodes), Q[X.childNodes.length].nodeType
        } catch (t) {
            K = {
                apply: Q.length ? function(t, e) {
                    J.apply(t, tt.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, E = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : X;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, L = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), R = !S(n), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = $.test(n.getElementsByClassName), w.getById = r(function(t) {
                return L.appendChild(t).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), w.getById ? (b.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && R) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, b.filter.ID = function(t) {
                var e = t.replace(wt, bt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(wt, bt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), b.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, b.find.CLASS = w.getElementsByClassName && function(t, e) {
                return R ? e.getElementsByClassName(t) : void 0
            }, F = [], D = [], (w.qsa = $.test(n.querySelectorAll)) && (r(function(t) {
                L.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + nt + "*(?:value|" + it + ")"), t.querySelectorAll("[id~=" + I + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || D.push(".#.+[+~]")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
            })), (w.matchesSelector = $.test(j = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), F.push("!=", at)
            }), D = D.length && new RegExp(D.join("|")), F = F.length && new RegExp(F.join("|")), e = $.test(L.compareDocumentPosition), z = e || $.test(L.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e) return M = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === X && z(X, t) ? -1 : e === n || e.ownerDocument === X && z(X, e) ? 1 : A ? et(A, t) - et(A, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return M = !0, 0;
                var i, r = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : A ? et(A, t) - et(A, e) : 0;
                if (o === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) c.unshift(i);
                for (; l[r] === c[r];) r++;
                return r ? s(l[r], c[r]) : l[r] === X ? -1 : c[r] === X ? 1 : 0
            }, n) : N
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== N && E(t), i = i.replace(dt, "='$1']"), !(!w.matchesSelector || !R || F && F.test(i) || D && D.test(i))) try {
                var n = j.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {}
            return e(i, N, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== N && E(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== N && E(t);
            var i = b.attrHandle[e.toLowerCase()],
                n = i && G.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
            return void 0 !== n ? n : w.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                r = 0;
            if (M = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(V), M) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, T = e.getText = function(t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[n++];) i += T(e);
            return i
        }, b = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: gt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return gt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = Y[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && Y(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(lt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, u, p, d, h, f, g = o !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (u = m[I] || (m[I] = {}), c = u[t] || [], h = c[0] === H && c[1], d = c[0] === H && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (d = h = 0) || f.pop();)
                                    if (1 === p.nodeType && ++d && p === e) {
                                        u[t] = [H, h, d];
                                        break
                                    }
                            } else if (y && (c = (e[I] || (e[I] = {}))[t]) && c[0] === H) d = c[1];
                            else
                                for (;
                                    (p = ++h && p && p[g] || (d = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[I] || (p[I] = {}))[t] = [H, d]), p !== e)););
                            return d -= r, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[I] ? o(i) : o.length > 1 ? (r = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = o(t, i), s = r.length; s--;) n = et(t, r[s]), t[n] = !(e[n] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        r = C(t.replace(ct, "$1"));
                    return r[I] ? n(function(t, e, i, n) {
                        for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, n, o) {
                        return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, bt),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                header: function(t) {
                    return vt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[_] = a(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) b.pseudos[_] = l(_);
        return p.prototype = b.filters = b.pseudos, b.setFilters = new p, k = e.tokenize = function(t, i) {
            var n, r, o, s, a, l, c, u = q[t + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = t, l = [], c = b.preFilter; a;) {
                (!n || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = pt.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(ct, " ")
                }), a = a.slice(n.length));
                for (s in b.filter) !(r = gt[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
        }, C = e.compile = function(t, e) {
            var i, n = [],
                r = [],
                o = W[t + " "];
            if (!o) {
                for (e || (e = k(t)), i = e.length; i--;) o = y(e[i]), o[I] ? n.push(o) : r.push(o);
                o = W(t, x(r, n)), o.selector = t
            }
            return o
        }, P = e.select = function(t, e, i, n) {
            var r, o, s, a, l, c = "function" == typeof t && t,
                p = !n && k(t = c.selector || t);
            if (i = i || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && R && b.relative[o[1].type]) {
                    if (e = (b.find.ID(s.matches[0].replace(wt, bt), e) || [])[0], !e) return i;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = gt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (n = l(s.matches[0].replace(wt, bt), xt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = n.length && d(o), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (c || C(t, p))(n, e, !R, i, xt.test(t) && u(e.parentNode) || e), i
        }, w.sortStable = I.split("").sort(V).join("") === I, w.detectDuplicates = !!M, E(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(N.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(it, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    K.find = rt, K.expr = rt.selectors,
        K.expr[":"] = K.expr.pseudos, K.unique = rt.uniqueSort, K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
    var ot = K.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (K.contains(r[e], this)) return !0
            }));
            for (e = 0; i > e; e++) K.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? K.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ot.test(t) ? K(t) : t || [], !1).length
        }
    });
    var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ut = K.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), st.test(i[1]) && K.isPlainObject(e))
                        for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
        };
    ut.prototype = K.fn, lt = K(Z);
    var pt = /^(?:parents|prev(?:Until|All))/,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.extend({
        dir: function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && K(t).is(i)) break;
                    n.push(t)
                } return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), K.fn.extend({
        has: function(t) {
            var e = K(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (K.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    } return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? W.call(K(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return K.dir(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return K.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return K.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(i, n) {
            var r = K.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = K.filter(n, r)), this.length > 1 && (dt[t] || K.unique(r), pt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var ht = /\S+/g,
        ft = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || o(t) : K.extend({}, t);
        var e, i, n, r, s, a, l = [],
            c = !t.once && [],
            u = function(o) {
                for (e = t.memory && o, i = !0, a = r || 0, r = 0, s = l.length, n = !0; l && s > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    } n = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function e(i) {
                            K.each(i, function(i, n) {
                                var r = K.type(n);
                                "function" === r ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && e(n)
                            })
                        }(arguments), n ? s = l.length : e && (r = i, u(e))
                    }
                    return this
                },
                remove: function() {
                    return l && K.each(arguments, function(t, e) {
                        for (var i;
                            (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, e || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : u(e)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, K.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return K.Deferred(function(i) {
                            K.each(e, function(e, o) {
                                var s = K.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? K.extend(t, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, K.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                n[o[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? n : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e = 0,
                i = B.call(arguments),
                n = i.length,
                r = 1 !== n || t && K.isFunction(t.promise) ? n : 0,
                o = 1 === r ? t : K.Deferred(),
                s = function(t, e, i) {
                    return function(n) {
                        e[t] = this, i[t] = arguments.length > 1 ? B.call(arguments) : n, i === a ? o.notifyWith(e, i) : --r || o.resolveWith(e, i)
                    }
                },
                a, l, c;
            if (n > 1)
                for (a = new Array(n), l = new Array(n), c = new Array(n); n > e; e++) i[e] && K.isFunction(i[e].promise) ? i[e].promise().done(s(e, c, i)).fail(o.reject).progress(s(e, l, a)) : --r;
            return r || o.resolveWith(c, i), o.promise()
        }
    });
    var gt;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (gt.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
        }
    }), K.ready.promise = function(e) {
        return gt || (gt = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), gt.promise(e)
    }, K.ready.promise();
    var mt = K.access = function(t, e, i, n, r, o, s) {
        var a = 0,
            l = t.length,
            c = null == i;
        if ("object" === K.type(i)) {
            r = !0;
            for (a in i) K.access(t, e, a, i[a], !0, o, s)
        } else if (void 0 !== n && (r = !0, K.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                return c.call(K(t), i)
            })), e))
            for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, K.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, r = this.key(t),
                o = this.cache[r];
            if ("string" == typeof e) o[e] = i;
            else if (K.isEmptyObject(o)) K.extend(this.cache[r], e);
            else
                for (n in e) o[n] = e[n];
            return o
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, r, o = this.key(t),
                s = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in s ? n = [e, r] : (n = r, n = n in s ? [n] : n.match(ht) || [])), i = n.length;
                for (; i--;) delete s[n[i]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new a,
        yt = new a,
        xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _t = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return yt.hasData(t) || vt.hasData(t)
        },
        data: function(t, e, i) {
            return yt.access(t, e, i)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        _removeData: function(t, e) {
            vt.remove(t, e)
        }
    }), K.fn.extend({
        data: function(t, e) {
            var i, n, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)), l(o, n, r[n])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : mt(this, function(e) {
                var i, n = K.camelCase(t);
                if (o && void 0 === e) {
                    if (i = yt.get(o, t), void 0 !== i) return i;
                    if (i = yt.get(o, n), void 0 !== i) return i;
                    if (i = l(o, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = yt.get(this, n);
                    yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), K.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || K.isArray(i) ? n = vt.access(t, e, K.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = K.queue(t, e),
                n = i.length,
                r = i.shift(),
                o = K._queueHooks(t, e),
                s = function() {
                    K.dequeue(t, e)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return vt.get(t, i) || vt.access(t, i, {
                empty: K.Callbacks("once memory").add(function() {
                    vt.remove(t, [e + "queue", i])
                })
            })
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = K.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = vt.get(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        bt = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        },
        St = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Z.createDocumentFragment(),
            e = t.appendChild(Z.createElement("div")),
            i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    Q.focusinBubbles = "onfocusin" in t;
    var Ct = /^key/,
        Pt = /^(?:mouse|pointer|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        At = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var o, s, a, l, c, u, p, d, h, f, g, m = vt.get(t);
            if (m)
                for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = K.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return typeof K !== kt && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(ht) || [""], c = e.length; c--;) a = At.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (p = K.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, p = K.event.special[h] || {}, u = K.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && K.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(h, s, !1)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), K.event.global[h] = !0)
        },
        remove: function(t, e, i, n, r) {
            var o, s, a, l, c, u, p, d, h, f, g, m = vt.hasData(t) && vt.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(ht) || [""], c = e.length; c--;)
                    if (a = At.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (p = K.event.special[h] || {}, h = (n ? p.delegateType : p.bindType) || h, d = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                        s && !d.length && (p.teardown && p.teardown.call(t, f, m.handle) !== !1 || K.removeEvent(t, h, m.handle), delete l[h])
                    } else
                        for (h in l) K.event.remove(t, h + e[c], i, n, !0);
                K.isEmptyObject(l) && (delete m.handle, vt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, r) {
            var o, s, a, l, c, u, p, d = [n || Z],
                h = G.call(e, "type") ? e.type : e,
                f = G.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(h + K.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[K.expando] ? e : new K.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]), p = K.event.special[h] || {}, r || !p.trigger || p.trigger.apply(n, i) !== !1)) {
                if (!r && !p.noBubble && !K.isWindow(n)) {
                    for (l = p.delegateType || h, Ot.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (n.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : p.bindType || h, u = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle"), u && u.apply(s, i), u = c && s[c], u && u.apply && K.acceptData(s) && (e.result = u.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = h, r || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), i) !== !1 || !K.acceptData(n) || c && K.isFunction(n[h]) && !K.isWindow(n) && (a = n[c], a && (n[c] = null), K.event.triggered = h, n[h](), K.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, i, n, r, o, s = [],
                a = B.call(arguments),
                l = (vt.get(this, "events") || {})[t.type] || [],
                c = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = K.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, n = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; a > i; i++) o = e[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), n[r] && n.push(o);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    } return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, o = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[K.expando]) return t;
            var e, i, n, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pt.test(r) ? this.mouseHooks : Ct.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new K.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var r = K.extend(new K.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, K.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : $) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== n && !K.contains(n, r)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), Q.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e);
                r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e) - 1;
                r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
            }
        }
    }), K.fn.extend({
        on: function(t, e, i, n, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t) this.on(s, e, i, t[s], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = $;
            else if (!n) return this;
            return 1 === r && (o = n, n = function(t) {
                return K().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = $), this.each(function() {
                K.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? K.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Et = /<([\w:]+)/,
        Nt = /<|&#?\w+;/,
        Lt = /<(?:script|style|link)/i,
        Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^$|\/(?:java|ecma)script/i,
        Ft = /^true\/(.*)/,
        jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        $t = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td, K.extend({
        clone: function(t, e, i) {
            var n, r, o, s, a = t.cloneNode(!0),
                l = K.contains(t.ownerDocument, t);
            if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (s = m(a), o = m(t), n = 0, r = o.length; r > n; n++) v(o[n], s[n]);
            if (e)
                if (i)
                    for (o = o || m(t), s = s || m(a), n = 0, r = o.length; r > n; n++) g(o[n], s[n]);
                else g(t, a);
            return s = m(a, "script"), s.length > 0 && f(s, !l && m(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var r, o, s, a, l, c, u = e.createDocumentFragment(), p = [], d = 0, h = t.length; h > d; d++)
                if (r = t[d], r || 0 === r)
                    if ("object" === K.type(r)) K.merge(p, r.nodeType ? [r] : r);
                    else if (Nt.test(r)) {
                for (o = o || u.appendChild(e.createElement("div")), s = (Et.exec(r) || ["", ""])[1].toLowerCase(), a = $t[s] || $t._default, o.innerHTML = a[1] + r.replace(Mt, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                K.merge(p, o.childNodes), o = u.firstChild, o.textContent = ""
            } else p.push(e.createTextNode(r));
            for (u.textContent = "", d = 0; r = p[d++];)
                if ((!n || -1 === K.inArray(r, n)) && (l = K.contains(r.ownerDocument, r), o = m(u.appendChild(r), "script"), l && f(o), i))
                    for (c = 0; r = o[c++];) Dt.test(r.type || "") && i.push(r);
            return u
        },
        cleanData: function(t) {
            for (var e, i, n, r, o = K.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                if (K.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events)
                        for (n in e.events) o[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[i[yt.expando]]
            }
        }
    }), K.fn.extend({
        text: function(t) {
            return mt(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? K.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || K.cleanData(m(i)), i.parentNode && (e && K.contains(i.ownerDocument, i) && f(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(m(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return mt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Lt.test(t) && !$t[(Et.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Mt, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (K.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var i, n, r, o, s, a, l = 0,
                c = this.length,
                u = this,
                p = c - 1,
                f = t[0],
                g = K.isFunction(f);
            if (g || c > 1 && "string" == typeof f && !Q.checkClone && Rt.test(f)) return this.each(function(i) {
                var n = u.eq(i);
                g && (t[0] = f.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = K.map(m(i, "script"), d), o = r.length; c > l; l++) s = i, l !== p && (s = K.clone(s, !0, !0), o && K.merge(r, m(s, "script"))), e.call(this[l], s, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, K.map(r, h), l = 0; o > l; l++) s = r[l], Dt.test(s.type || "") && !vt.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(jt, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var i, n = [], r = K(t), o = r.length - 1, s = 0; o >= s; s++) i = s === o ? this : this.clone(!0), K(r[s])[e](i), q.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var zt, It = {},
        Xt = /^margin/,
        Ht = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        Bt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(o)
        }
        var i, n, r = Z.documentElement,
            o = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && K.extend(Q, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = s.appendChild(Z.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(o), s.removeChild(i), e
            }
        }))
    }(), K.swap = function(t, e, i, n) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = i.apply(t, n || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var Yt = /^(none|table(?!-c[ea]).+)/,
        qt = new RegExp("^(" + wt + ")(.*)$", "i"),
        Wt = new RegExp("^([+-])=(" + wt + ")", "i"),
        Vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Gt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = _(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = K.camelCase(e),
                    l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = b(l, a)), s = K.cssHooks[e] || K.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i, "string" === o && (r = Wt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), o = "number"), void(null != i && i === i && ("number" !== o || K.cssNumber[a] || (i += "px"), Q.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var r, o, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = b(t.style, a)), s = K.cssHooks[e] || K.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = _(t, e, n)), "normal" === r && e in Ut && (r = Ut[e]), "" === i || i ? (o = parseFloat(r), i === !0 || K.isNumeric(o) ? o || 0 : r) : r
        }
    }), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Yt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Vt, function() {
                    return k(t, e, n)
                }) : k(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r = n && Bt(t);
                return T(t, i, n ? S(t, e, n, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), K.cssHooks.marginRight = w(Q.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {
            display: "inline-block"
        }, _, [t, "marginRight"]) : void 0
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + bt[n] + e] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, Xt.test(t) || (K.cssHooks[t + e].set = T)
    }), K.fn.extend({
        css: function(t, e) {
            return mt(this, function(t, e, i) {
                var n, r, o = {},
                    s = 0;
                if (K.isArray(e)) {
                    for (n = Bt(t), r = e.length; r > s; s++) o[e[s]] = K.css(t, e[s], !1, n);
                    return o
                }
                return void 0 !== i ? K.style(t, e, i) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = P, P.prototype = {
        constructor: P,
        init: function(t, e, i, n, r, o) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (K.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = P.propHooks[this.prop];
            return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = P.prototype.init, K.fx.step = {};
    var Qt, Zt, Jt = /^(?:toggle|show|hide)$/,
        Kt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [E],
        ie = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    r = Kt.exec(e),
                    o = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                    s = (K.cssNumber[t] || "px" !== o && +n) && Kt.exec(K.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +n || 1;
                    do a = a || ".5", s /= a, K.style(i.elem, t, s + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    K.Animation = K.extend(L, {
            tweener: function(t, e) {
                K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), K.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? K.extend({}, t) : {
                complete: i || !i && e || K.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !K.isFunction(e) && e
            };
            return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
            }, n
        }, K.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = K.isEmptyObject(t),
                    o = K.speed(e, i, n),
                    s = function() {
                        var e = L(this, K.extend({}, t), o);
                        (r || vt.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = K.timers,
                        s = vt.get(this);
                    if (r) s[r] && s[r].stop && n(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && te.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                    (e || !i) && K.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = vt.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        o = K.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), K.each(["toggle", "show", "hide"], function(t, e) {
            var i = K.fn[e];
            K.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(A(e, !0), t, n, r)
            }
        }), K.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            K.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), K.timers = [], K.fx.tick = function() {
            var t, e = 0,
                i = K.timers;
            for (Qt = K.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || K.fx.stop(), Qt = void 0
        }, K.fx.timer = function(t) {
            K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
        }, K.fx.interval = 13, K.fx.start = function() {
            Zt || (Zt = setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fn.delay = function(t, e) {
            return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = Z.createElement("input"),
                e = Z.createElement("select"),
                i = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = i.selected, e.disabled = !0, Q.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", Q.radioValue = "t" === t.value
        }();
    var ne, re, oe = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return mt(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function(t, e, i) {
            var n, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === kt ? K.prop(t, e, i) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                o = e && e.match(ht);
            if (o && 1 === t.nodeType)
                for (; i = o[r++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Q.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), re = {
        set: function(t, e, i) {
            return e === !1 ? K.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = oe[e] || K.find.attr;
        oe[e] = function(t, e, n) {
            var r, o;
            return n || (o = oe[e], oe[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = o), r
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return mt(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, i) {
            var n, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !K.isXMLDoc(t), o && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, i, n, r, o, s, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(ht) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                        for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        s = K.trim(n), i.className !== s && (i.className = s)
                    } return this
        },
        removeClass: function(t) {
            var e, i, n, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(ht) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        s = t ? K.trim(n) : "", i.className !== s && (i.className = s)
                    } return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(i) {
                K(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, r = K(this), o = t.match(ht) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === kt || "boolean" === i) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = K.isFunction(t), this.each(function(i) {
                var r;
                1 === this.nodeType && (r = n ? t.call(this, i, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)) : void 0
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (Q.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                            if (e = K(i).val(), o) return e;
                            s.push(e)
                        } return s
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, o = K.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = K.inArray(n.value, o) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        }, Q.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ce = K.now(),
        ue = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var pe = /#.*$/,
        de = /([?&])_=[^&]*/,
        he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ge = /^(?:GET|HEAD)$/,
        me = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ye = {},
        xe = {},
        _e = "*/".concat("*"),
        we = t.location.href,
        be = ve.exec(we.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we,
            type: "GET",
            isLocal: fe.test(be[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? F(F(t, K.ajaxSettings), e) : F(K.ajaxSettings, t)
        },
        ajaxPrefilter: R(ye),
        ajaxTransport: R(xe),
        ajax: function(t, e) {
            function i(t, e, i, s) {
                var l, u, v, y, _, b = e;
                2 !== x && (x = 2, a && clearTimeout(a), n = void 0, o = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = j(p, w, i)), y = z(p, y, w, l), l ? (p.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (K.lastModified[r] = _), _ = w.getResponseHeader("etag"), _ && (K.etag[r] = _)), 204 === t || "HEAD" === p.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = y.state, u = y.data, v = y.error, l = !v)) : (v = b, (t || !b) && (b = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || b) + "", l ? f.resolveWith(d, [u, b, w]) : f.rejectWith(d, [w, b, v]), w.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? u : v]), g.fireWith(d, [w, b]), c && (h.trigger("ajaxComplete", [w, p]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, o, s, a, l, c, u, p = K.ajaxSetup({}, e),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? K(d) : K.event,
                f = K.Deferred(),
                g = K.Callbacks("once memory"),
                m = p.statusCode || {},
                v = {},
                y = {},
                x = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; e = he.exec(o);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return x || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || we) + "").replace(pe, "").replace(me, be[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = K.trim(p.dataType || "*").toLowerCase().match(ht) || [""], null == p.crossDomain && (l = ve.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === be[1] && l[2] === be[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (be[3] || ("http:" === be[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)), D(ye, p, e, w), 2 === x) return w;
            c = K.event && p.global, c && 0 === K.active++ && K.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ge.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (ue.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = de.test(r) ? r.replace(de, "$1_=" + ce++) : r + (ue.test(r) ? "&" : "?") + "_=" + ce++)), p.ifModified && (K.lastModified[r] && w.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && w.setRequestHeader("If-None-Match", K.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) w.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
            _ = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[u](p[u]);
            if (n = D(xe, p, e, w)) {
                w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, n.send(v, i)
                } catch (t) {
                    if (!(2 > x)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return K.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, i, n, r) {
            return K.isFunction(i) && (r = r || n, n = i, i = void 0), K.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            } : function() {
                var e = K(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(i) {
                K(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    };
    var Te = /%20/g,
        Se = /\[\]$/,
        ke = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                e = K.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) I(i, t[i], e, r);
        return n.join("&").replace(Te, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && Pe.test(this.nodeName) && !Ce.test(t) && (this.checked || !St.test(t))
            }).map(function(t, e) {
                var i = K(this).val();
                return null == i ? null : K.isArray(i) ? K.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ke, "\r\n")
                }
            }).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Oe = 0,
        Ae = {},
        Me = {
            0: 200,
            1223: 204
        },
        Ee = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ae) Ae[t]()
    }), Q.cors = !!Ee && "withCredentials" in Ee, Q.ajax = Ee = !!Ee, K.ajaxTransport(function(t) {
        var e;
        return Q.cors || Ee && !t.crossDomain ? {
            send: function(i, n) {
                var r, o = t.xhr(),
                    s = ++Oe;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) o.setRequestHeader(r, i[r]);
                e = function(t) {
                    return function() {
                        e && (delete Ae[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(Me[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = Ae[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (t) {
                    if (e) throw t
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, r) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Ne = [],
        Le = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ne.pop() || K.expando + "_" + ce++;
            return this[t] = !0, t
        }
    }), K.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, o, s, a = e.jsonp !== !1 && (Le.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Le, "$1" + r) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || K.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, n.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Ne.push(r)), s && K.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), K.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Z;
        var n = st.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], n.childNodes))
    };
    var Re = K.fn.load;
    K.fn.load = function(t, e, i) {
        if ("string" != typeof t && Re) return Re.apply(this, arguments);
        var n, r, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            s.each(i, o || [t.responseText, e, t])
        }), this
    }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var De = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, i) {
            var n, r, o, s, a, l, c, u = K.css(t, "position"),
                p = K(t),
                d = {};
            "static" === u && (t.style.position = "relative"), a = p.offset(), o = K.css(t, "top"), l = K.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = p.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : p.css(d)
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            return o ? (e = o.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== kt && (r = n.getBoundingClientRect()), i = X(o), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === K.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (n = t.offset()), n.top += K.css(t[0], "borderTopWidth", !0), n.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - K.css(i, "marginTop", !0),
                    left: e.left - n.left - K.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || De; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                return t || De
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        K.fn[e] = function(r) {
            return mt(this, function(e, r, o) {
                var s = X(e);
                return void 0 === o ? s ? s[i] : e[r] : void(s ? s.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = w(Q.pixelPosition, function(t, i) {
            return i ? (i = _(t, e), Ht.test(i) ? K(t).position()[e] + "px" : i) : void 0
        })
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            K.fn[n] = function(n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || r === !0 ? "margin" : "border");
                return mt(this, function(e, i, n) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? K.css(e, i, s) : K.style(e, i, n, s)
                }, e, o ? n : void 0, o, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Fe = t.jQuery,
        je = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = je), e && t.jQuery === K && (t.jQuery = Fe), K
    }, typeof e === kt && (t.jQuery = t.$ = K), K
}),
function(t, e, i) {
    function n(i) {
        var n = e.console;
        o[i] || (o[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
    }

    function r(e, i, r, o) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(e, i, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return n(o), r
                },
                set: function(t) {
                    n(o), r = t
                }
            })
        } catch (t) {}
        t._definePropertyBroken = !0, e[i] = r
    }
    var o = {};
    t.migrateWarnings = [], t.migrateMute = !0, !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function() {
        o = {}, t.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
    var s = t("<input/>", {
            size: 1
        }).attr("size") && t.attrFn,
        a = t.attr,
        l = t.attrHooks.value && t.attrHooks.value.get || function() {
            return null
        },
        c = t.attrHooks.value && t.attrHooks.value.set || function() {
            return i
        },
        u = /^(?:input|button)$/i,
        p = /^[238]$/,
        d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        h = /^(?:checked|selected)$/i;
    r(t, "attrFn", s || {}, "jQuery.attrFn is deprecated"), t.attr = function(e, r, o, l) {
        var c = r.toLowerCase(),
            f = e && e.nodeType;
        return l && (a.length < 4 && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !p.test(f) && (s ? r in s : t.isFunction(t.fn[r]))) ? t(e)[r](o) : ("type" === r && o !== i && u.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[c] && d.test(c) && (t.attrHooks[c] = {
            get: function(e, n) {
                var r, o = t.prop(e, n);
                return o === !0 || "boolean" != typeof o && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : i
            },
            set: function(e, i, n) {
                var r;
                return i === !1 ? t.removeAttr(e, n) : (r = t.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, h.test(c) && n("jQuery.fn.attr('" + c + "') may use property instead of attribute")), a.call(t, e, r, o))
    }, t.attrHooks.value = {
        get: function(t, e) {
            var i = (t.nodeName || "").toLowerCase();
            return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
        },
        set: function(t, e) {
            var i = (t.nodeName || "").toLowerCase();
            return "button" === i ? c.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value', val) no longer sets properties"), void(t.value = e))
        }
    };
    var f, g, m = t.fn.init,
        v = t.parseJSON,
        y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    t.fn.init = function(e, i, r) {
        var o;
        return e && "string" == typeof e && !t.isPlainObject(i) && (o = y.exec(t.trim(e))) && o[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? m.call(this, t.parseHTML(o[2], i, !0), i, r) : m.apply(this, arguments)
    }, t.fn.init.prototype = t.fn, t.parseJSON = function(t) {
        return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
    }, t.uaMatch = function(t) {
        t = t.toLowerCase();
        var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
        return {
            browser: e[1] || "",
            version: e[2] || "0"
        }
    }, t.browser || (f = t.uaMatch(navigator.userAgent), g = {}, f.browser && (g[f.browser] = !0, g.version = f.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), t.browser = g), r(t, "browser", t.browser, "jQuery.browser is deprecated"), t.sub = function() {
        function e(t, i) {
            return new e.fn.init(t, i)
        }
        t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(r, o) {
            return o && o instanceof t && !(o instanceof e) && (o = e(o)), t.fn.init.call(this, r, o, i)
        }, e.fn.init.prototype = e.fn;
        var i = e(document);
        return n("jQuery.sub() is deprecated"), e
    }, t.ajaxSetup({
        converters: {
            "text json": t.parseJSON
        }
    });
    var x = t.fn.data;
    t.fn.data = function(e) {
        var r, o, s = this[0];
        return !s || "events" !== e || 1 !== arguments.length || (r = t.data(s, e), o = t._data(s, e), r !== i && r !== o || o === i) ? x.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), o)
    };
    var _ = /\/(java|ecma)script/i,
        w = t.fn.andSelf || t.fn.addBack;
    t.fn.andSelf = function() {
        return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, t.clean || (t.clean = function(e, i, r, o) {
        i = i || document, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, n("jQuery.clean() is deprecated");
        var s, a, l, c, u = [];
        if (t.merge(u, t.buildFragment(e, i).childNodes), r)
            for (l = function(t) {
                    if (!t.type || _.test(t.type)) return o ? o.push(t.parentNode ? t.parentNode.removeChild(t) : t) : r.appendChild(t)
                }, s = 0; null != (a = u[s]); s++) t.nodeName(a, "script") && l(a) || (r.appendChild(a), "undefined" != typeof a.getElementsByTagName && (c = t.grep(t.merge([], a.getElementsByTagName("script")), l), u.splice.apply(u, [s + 1, 0].concat(c)), s += c.length));
        return u
    });
    var b = t.event.add,
        T = t.event.remove,
        S = t.event.trigger,
        k = t.fn.toggle,
        C = t.fn.live,
        P = t.fn.die,
        O = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        A = new RegExp("\\b(?:" + O + ")\\b"),
        M = /(?:^|\s)hover(\.\S+|)\b/,
        E = function(e) {
            return "string" != typeof e || t.event.special.hover ? e : (M.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(M, "mouseenter$1 mouseleave$1"))
        };
    t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && r(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function(t, e, i, r, o) {
        t !== document && A.test(e) && n("AJAX events should be attached to document: " + e), b.call(this, t, E(e || ""), i, r, o)
    }, t.event.remove = function(t, e, i, n, r) {
        T.call(this, t, E(e) || "", i, n, r)
    }, t.fn.error = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return n("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
    }, t.fn.toggle = function(e, i) {
        if (!t.isFunction(e) || !t.isFunction(i)) return k.apply(this, arguments);
        n("jQuery.fn.toggle(handler, handler...) is deprecated");
        var r = arguments,
            o = e.guid || t.guid++,
            s = 0,
            a = function(i) {
                var n = (t._data(this, "lastToggle" + e.guid) || 0) % s;
                return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), r[n].apply(this, arguments) || !1
            };
        for (a.guid = o; s < r.length;) r[s++].guid = o;
        return this.click(a)
    }, t.fn.live = function(e, i, r) {
        return n("jQuery.fn.live() is deprecated"), C ? C.apply(this, arguments) : (t(this.context).on(e, this.selector, i, r), this)
    }, t.fn.die = function(e, i) {
        return n("jQuery.fn.die() is deprecated"), P ? P.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
    }, t.event.trigger = function(t, e, i, r) {
        return i || A.test(t) || n("Global events are undocumented and deprecated"), S.call(this, t, e, i || document, r)
    }, t.each(O.split("|"), function(e, i) {
        t.event.special[i] = {
            setup: function() {
                var e = this;
                return e !== document && (t.event.add(document, i + "." + t.guid, function() {
                    t.event.trigger(i, null, e, !0)
                }), t._data(this, i, t.guid++)), !1
            },
            teardown: function() {
                return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
            }
        }
    })
}(jQuery, window),
function() {
    var t, e, i, n, r, o, s, a, l, c, u, p, d, h, f, g, m, v, y, x, _, w, b, T, S, k, C, P, O, A, M, E, N, L, R, D, F, j, z, I, X, H, B, Y, q, W, V, U, G, Q = [].slice,
        Z = {}.hasOwnProperty,
        J = function(t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) Z.call(e, n) && (t[n] = e[n]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        $ = [].indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    for (_ = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, O = function() {
            var t;
            return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
        }, M = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, x = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == M && (M = function(t) {
            return setTimeout(t, 50)
        }, x = function(t) {
            return clearTimeout(t)
        }), N = function(t) {
            var e, i;
            return e = O(), (i = function() {
                var n;
                return n = O() - e, n >= 33 ? (e = O(), t(n, function() {
                    return M(i)
                })) : setTimeout(i, 33 - n)
            })()
        }, E = function() {
            var t, e, i;
            return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? Q.call(arguments, 2) : [], "function" == typeof i[e] ? i[e].apply(i, t) : i[e]
        }, w = function() {
            var t, e, i, n, r, o, s;
            for (e = arguments[0], n = 2 <= arguments.length ? Q.call(arguments, 1) : [], o = 0, s = n.length; s > o; o++)
                if (i = n[o])
                    for (t in i) Z.call(i, t) && (r = i[t], null != e[t] && "object" == typeof e[t] && null != r && "object" == typeof r ? w(e[t], r) : e[t] = r);
            return e
        }, m = function(t) {
            var e, i, n, r, o;
            for (i = e = 0, r = 0, o = t.length; o > r; r++) n = t[r], i += Math.abs(n), e++;
            return i / e
        }, T = function(t, e) {
            var i, n, r;
            if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
                if (i = r.getAttribute("data-pace-" + t), !e) return i;
                try {
                    return JSON.parse(i)
                } catch (t) {
                    return n = t, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0
                }
            }
        }, s = function() {
            function t() {}
            return t.prototype.on = function(t, e, i, n) {
                var r;
                return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[t] && (r[t] = []), this.bindings[t].push({
                    handler: e,
                    ctx: i,
                    once: n
                })
            }, t.prototype.once = function(t, e, i) {
                return this.on(t, e, i, !0)
            }, t.prototype.off = function(t, e) {
                var i, n, r;
                if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
                    if (null == e) return delete this.bindings[t];
                    for (i = 0, r = []; i < this.bindings[t].length;) r.push(this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : i++);
                    return r
                }
            }, t.prototype.trigger = function() {
                var t, e, i, n, r, o, s, a, l;
                if (i = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], null != (s = this.bindings) ? s[i] : void 0) {
                    for (r = 0, l = []; r < this.bindings[i].length;) a = this.bindings[i][r], n = a.handler, e = a.ctx, o = a.once, n.apply(null != e ? e : this, t), l.push(o ? this.bindings[i].splice(r, 1) : r++);
                    return l
                }
            }, t
        }(), c = window.Pace || {}, window.Pace = c, w(c, s.prototype), A = c.options = w({}, _, window.paceOptions, T()), V = ["ajax", "document", "eventLag", "elements"], B = 0, q = V.length; q > B; B++) F = V[B], A[F] === !0 && (A[F] = _[F]);
    l = function(t) {
        function e() {
            return U = e.__super__.constructor.apply(this, arguments)
        }
        return J(e, t), e
    }(Error), e = function() {
        function t() {
            this.progress = 0
        }
        return t.prototype.getElement = function() {
            var t;
            if (null == this.el) {
                if (t = document.querySelector(A.target), !t) throw new l;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
            }
            return this.el
        }, t.prototype.finish = function() {
            var t;
            return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, t.prototype.update = function(t) {
            return this.progress = t, this.render()
        }, t.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (t) {
                l = t
            }
            return this.el = void 0
        }, t.prototype.render = function() {
            var t, e, i, n, r, o, s;
            if (null == document.querySelector(A.target)) return !1;
            for (t = this.getElement(), n = "translate3d(" + this.progress + "%, 0, 0)", s = ["webkitTransform", "msTransform", "transform"], r = 0, o = s.length; o > r; r++) e = s[r], t.children[0].style[e] = n;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
        }, t.prototype.done = function() {
            return this.progress >= 100
        }, t
    }(), a = function() {
        function t() {
            this.bindings = {}
        }
        return t.prototype.trigger = function(t, e) {
            var i, n, r, o, s;
            if (null != this.bindings[t]) {
                for (o = this.bindings[t], s = [], n = 0, r = o.length; r > n; n++) i = o[n], s.push(i.call(this, e));
                return s
            }
        }, t.prototype.on = function(t, e) {
            var i;
            return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e)
        }, t
    }(), H = window.XMLHttpRequest, X = window.XDomainRequest, I = window.WebSocket, b = function(t, e) {
        var i, n, r, o;
        o = [];
        for (n in e.prototype) try {
            r = e.prototype[n], o.push(null == t[n] && "function" != typeof r ? t[n] = r : void 0)
        } catch (t) {
            i = t
        }
        return o
    }, C = [], c.ignore = function() {
        var t, e, i;
        return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], C.unshift("ignore"), i = e.apply(null, t), C.shift(), i
    }, c.track = function() {
        var t, e, i;
        return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], C.unshift("track"), i = e.apply(null, t), C.shift(), i
    }, D = function(t) {
        var e;
        if (null == t && (t = "GET"), "track" === C[0]) return "force";
        if (!C.length && A.ajax) {
            if ("socket" === t && A.ajax.trackWebSockets) return !0;
            if (e = t.toUpperCase(), $.call(A.ajax.trackMethods, e) >= 0) return !0
        }
        return !1
    }, u = function(t) {
        function e() {
            var t, i = this;
            e.__super__.constructor.apply(this, arguments), t = function(t) {
                var e;
                return e = t.open, t.open = function(n, r) {
                    return D(n) && i.trigger("request", {
                        type: n,
                        url: r,
                        request: t
                    }), e.apply(t, arguments)
                }
            }, window.XMLHttpRequest = function(e) {
                var i;
                return i = new H(e), t(i), i
            };
            try {
                b(window.XMLHttpRequest, H)
            } catch (t) {}
            if (null != X) {
                window.XDomainRequest = function() {
                    var e;
                    return e = new X, t(e), e
                };
                try {
                    b(window.XDomainRequest, X)
                } catch (t) {}
            }
            if (null != I && A.ajax.trackWebSockets) {
                window.WebSocket = function(t, e) {
                    var n;
                    return n = null != e ? new I(t, e) : new I(t), D("socket") && i.trigger("request", {
                        type: "socket",
                        url: t,
                        protocols: e,
                        request: n
                    }), n
                };
                try {
                    b(window.WebSocket, I)
                } catch (t) {}
            }
        }
        return J(e, t), e
    }(a), Y = null, S = function() {
        return null == Y && (Y = new u), Y
    }, R = function(t) {
        var e, i, n, r;
        for (r = A.ajax.ignoreURLs, i = 0, n = r.length; n > i; i++)
            if (e = r[i], "string" == typeof e) {
                if (-1 !== t.indexOf(e)) return !0
            } else if (e.test(t)) return !0;
        return !1
    }, S().on("request", function(e) {
        var i, n, r, o, s;
        return o = e.type, r = e.request, s = e.url, R(s) ? void 0 : c.running || A.restartOnRequestAfter === !1 && "force" !== D(o) ? void 0 : (n = arguments, i = A.restartOnRequestAfter || 0, "boolean" == typeof i && (i = 0), setTimeout(function() {
            var e, i, s, a, l, u;
            if (e = "socket" === o ? r.readyState < 2 : 0 < (a = r.readyState) && 4 > a) {
                for (c.restart(), l = c.sources, u = [], i = 0, s = l.length; s > i; i++) {
                    if (F = l[i], F instanceof t) {
                        F.watch.apply(F, n);
                        break
                    }
                    u.push(void 0)
                }
                return u
            }
        }, i))
    }), t = function() {
        function t() {
            var t = this;
            this.elements = [], S().on("request", function() {
                return t.watch.apply(t, arguments)
            })
        }
        return t.prototype.watch = function(t) {
            var e, i, n, r;
            return n = t.type, e = t.request, r = t.url, R(r) ? void 0 : (i = "socket" === n ? new h(e) : new f(e), this.elements.push(i))
        }, t
    }(), f = function() {
        function t(t) {
            var e, i, n, r, o, s, a = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (i = null, t.addEventListener("progress", function(t) {
                        return a.progress = t.lengthComputable ? 100 * t.loaded / t.total : a.progress + (100 - a.progress) / 2
                    }, !1), s = ["load", "abort", "timeout", "error"], n = 0, r = s.length; r > n; n++) e = s[n], t.addEventListener(e, function() {
                    return a.progress = 100
                }, !1);
            else o = t.onreadystatechange, t.onreadystatechange = function() {
                var e;
                return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
            }
        }
        return t
    }(), h = function() {
        function t(t) {
            var e, i, n, r, o = this;
            for (this.progress = 0, r = ["error", "open"], i = 0, n = r.length; n > i; i++) e = r[i], t.addEventListener(e, function() {
                return o.progress = 100
            }, !1)
        }
        return t
    }(), n = function() {
        function t(t) {
            var e, i, n, o;
            for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, i = 0, n = o.length; n > i; i++) e = o[i], this.elements.push(new r(e))
        }
        return t
    }(), r = function() {
        function t(t) {
            this.selector = t, this.progress = 0, this.check()
        }
        return t.prototype.check = function() {
            var t = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return t.check()
            }, A.elements.checkInterval)
        }, t.prototype.done = function() {
            return this.progress = 100
        }, t
    }(), i = function() {
        function t() {
            var t, e, i = this;
            this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
                return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
            }
        }
        return t.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, t
    }(), o = function() {
        function t() {
            var t, e, i, n, r, o = this;
            this.progress = 0, t = 0, r = [], n = 0, i = O(), e = setInterval(function() {
                var s;
                return s = O() - i - 50, i = O(), r.push(s), r.length > A.eventLag.sampleCount && r.shift(), t = m(r), ++n >= A.eventLag.minSamples && t < A.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
            }, 50)
        }
        return t
    }(), d = function() {
        function t(t) {
            this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = A.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress"))
        }
        return t.prototype.tick = function(t, e) {
            var i;
            return null == e && (e = E(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / A.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), i = 1 - Math.pow(this.progress / 100, A.easeFactor), this.progress += i * this.rate * t, this.progress = Math.min(this.lastProgress + A.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, t
    }(), j = null, L = null, v = null, z = null, g = null, y = null, c.running = !1, k = function() {
        return A.restartOnPushState ? c.restart() : void 0
    }, null != window.history.pushState && (W = window.history.pushState, window.history.pushState = function() {
        return k(), W.apply(window.history, arguments)
    }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function() {
        return k(), G.apply(window.history, arguments)
    }), p = {
        ajax: t,
        elements: n,
        document: i,
        eventLag: o
    }, (P = function() {
        var t, i, n, r, o, s, a, l;
        for (c.sources = j = [], s = ["ajax", "elements", "document", "eventLag"], i = 0, r = s.length; r > i; i++) t = s[i], A[t] !== !1 && j.push(new p[t](A[t]));
        for (l = null != (a = A.extraSources) ? a : [], n = 0, o = l.length; o > n; n++) F = l[n], j.push(new F(A));
        return c.bar = v = new e, L = [], z = new d
    })(), c.stop = function() {
        return c.trigger("stop"), c.running = !1, v.destroy(), y = !0, null != g && ("function" == typeof x && x(g), g = null), P()
    }, c.restart = function() {
        return c.trigger("restart"), c.stop(), c.start()
    }, c.go = function() {
        var t;
        return c.running = !0, v.render(), t = O(), y = !1, g = N(function(e, i) {
            var n, r, o, s, a, l, u, p, h, f, g, m, x, _, w, b;
            for (p = 100 - v.progress, r = g = 0, o = !0, l = m = 0, _ = j.length; _ > m; l = ++m)
                for (F = j[l], f = null != L[l] ? L[l] : L[l] = [], a = null != (b = F.elements) ? b : [F], u = x = 0, w = a.length; w > x; u = ++x) s = a[u], h = null != f[u] ? f[u] : f[u] = new d(s), o &= h.done, h.done || (r++, g += h.tick(e));
            return n = g / r, v.update(z.tick(e, n)), v.done() || o || y ? (v.update(100), c.trigger("done"), setTimeout(function() {
                return v.finish(), c.running = !1, c.trigger("hide")
            }, Math.max(A.ghostTime, Math.max(A.minTime - (O() - t), 0)))) : i()
        })
    }, c.start = function(t) {
        w(A, t), c.running = !0;
        try {
            v.render()
        } catch (t) {
            l = t
        }
        return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
    }, "function" == typeof define && define.amd ? define(function() {
        return c
    }) : "object" == typeof exports ? module.exports = c : A.startOnPageLoad && c.start()
}.call(this), window.Modernizr = function(t, e, i) {
    function n(t) {
        x.cssText = t
    }

    function r(t, e) {
        return n(T.join(t + ";") + (e || ""))
    }

    function o(t, e) {
        return typeof t === e
    }

    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function a(t, e) {
        for (var n in t) {
            var r = t[n];
            if (!s(r, "-") && x[r] !== i) return "pfx" != e || r
        }
        return !1
    }

    function l(t, e, n) {
        for (var r in t) {
            var s = e[t[r]];
            if (s !== i) return n === !1 ? t[r] : o(s, "function") ? s.bind(n || e) : s
        }
        return !1
    }

    function c(t, e, i) {
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = (t + " " + k.join(n + " ") + n).split(" ");
        return o(e, "string") || o(e, "undefined") ? a(r, e) : (r = (t + " " + C.join(n + " ") + n).split(" "), l(r, e, i))
    }

    function u() {
        f.input = function(i) {
            for (var n = 0, r = i.length; r > n; n++) M[i[n]] = !!(i[n] in _);
            return M.list && (M.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), M
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
            for (var n, r, o, s = 0, a = t.length; a > s; s++) _.setAttribute("type", r = t[s]), n = "text" !== _.type, n && (_.value = w, _.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && _.style.WebkitAppearance !== i ? (m.appendChild(_), o = e.defaultView, n = o.getComputedStyle && "textfield" !== o.getComputedStyle(_, null).WebkitAppearance && 0 !== _.offsetHeight, m.removeChild(_)) : /^(search|tel)$/.test(r) || (n = /^(url|email)$/.test(r) ? _.checkValidity && _.checkValidity() === !1 : _.value != w)), A[t[s]] = !!n;
            return A
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var p, d, h = "2.8.2",
        f = {},
        g = !0,
        m = e.documentElement,
        v = "modernizr",
        y = e.createElement(v),
        x = y.style,
        _ = e.createElement("input"),
        w = ":)",
        b = {}.toString,
        T = " -webkit- -moz- -o- -ms- ".split(" "),
        S = "Webkit Moz O ms",
        k = S.split(" "),
        C = S.toLowerCase().split(" "),
        P = {
            svg: "http://www.w3.org/2000/svg"
        },
        O = {},
        A = {},
        M = {},
        E = [],
        N = E.slice,
        L = function(t, i, n, r) {
            var o, s, a, l, c = e.createElement("div"),
                u = e.body,
                p = u || e.createElement("body");
            if (parseInt(n, 10))
                for (; n--;) a = e.createElement("div"), a.id = r ? r[n] : v + (n + 1), c.appendChild(a);
            return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (u ? c : p).innerHTML += o, p.appendChild(c), u || (p.style.background = "", p.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(p)), s = i(c, t), u ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), m.style.overflow = l), !!s
        },
        R = function(e) {
            var i = t.matchMedia || t.msMatchMedia;
            if (i) return i(e) && i(e).matches || !1;
            var n;
            return L("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
                n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            }), n
        },
        D = function() {
            function t(t, r) {
                r = r || e.createElement(n[t] || "div"), t = "on" + t;
                var s = t in r;
                return s || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), s = o(r[t], "function"), o(r[t], "undefined") || (r[t] = i), r.removeAttribute(t))), r = null, s
            }
            var n = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return t
        }(),
        F = {}.hasOwnProperty;
    d = o(F, "undefined") || o(F.call, "undefined") ? function(t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined")
    } : function(t, e) {
        return F.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError;
        var i = N.call(arguments, 1),
            n = function() {
                if (this instanceof n) {
                    var r = function() {};
                    r.prototype = e.prototype;
                    var o = new r,
                        s = e.apply(o, i.concat(N.call(arguments)));
                    return Object(s) === s ? s : o
                }
                return e.apply(t, i.concat(N.call(arguments)))
            };
        return n
    }), O.flexbox = function() {
        return c("flexWrap")
    }, O.flexboxlegacy = function() {
        return c("boxDirection")
    }, O.canvas = function() {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }, O.canvastext = function() {
        return !(!f.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"))
    }, O.webgl = function() {
        return !!t.WebGLRenderingContext
    }, O.touch = function() {
        var i;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : L(["@media (", T.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
            i = 9 === t.offsetTop
        }), i
    }, O.geolocation = function() {
        return "geolocation" in navigator
    }, O.postmessage = function() {
        return !!t.postMessage
    }, O.websqldatabase = function() {
        return !!t.openDatabase
    }, O.indexedDB = function() {
        return !!c("indexedDB", t)
    }, O.hashchange = function() {
        return D("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
    }, O.history = function() {
        return !(!t.history || !history.pushState)
    }, O.draganddrop = function() {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t
    }, O.websockets = function() {
        return "WebSocket" in t || "MozWebSocket" in t
    }, O.rgba = function() {
        return n("background-color:rgba(150,255,150,.5)"), s(x.backgroundColor, "rgba")
    }, O.hsla = function() {
        return n("background-color:hsla(120,40%,100%,.5)"), s(x.backgroundColor, "rgba") || s(x.backgroundColor, "hsla")
    }, O.multiplebgs = function() {
        return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(x.background)
    }, O.backgroundsize = function() {
        return c("backgroundSize")
    }, O.borderimage = function() {
        return c("borderImage")
    }, O.borderradius = function() {
        return c("borderRadius")
    }, O.boxshadow = function() {
        return c("boxShadow")
    }, O.textshadow = function() {
        return "" === e.createElement("div").style.textShadow
    }, O.opacity = function() {
        return r("opacity:.55"), /^0.55$/.test(x.opacity)
    }, O.cssanimations = function() {
        return c("animationName")
    }, O.csscolumns = function() {
        return c("columnCount")
    }, O.cssgradients = function() {
        var t = "background-image:",
            e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            i = "linear-gradient(left top,#9f9, white);";
        return n((t + "-webkit- ".split(" ").join(e + t) + T.join(i + t)).slice(0, -t.length)), s(x.backgroundImage, "gradient")
    }, O.cssreflections = function() {
        return c("boxReflect")
    }, O.csstransforms = function() {
        return !!c("transform")
    }, O.csstransforms3d = function() {
        var t = !!c("perspective");
        return t && "webkitPerspective" in m.style && L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), t
    }, O.csstransitions = function() {
        return c("transition")
    }, O.fontface = function() {
        var t;
        return L('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
            var r = e.getElementById("smodernizr"),
                o = r.sheet || r.styleSheet,
                s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(n.split(" ")[0])
        }), t
    }, O.generatedcontent = function() {
        var t;
        return L(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
            t = e.offsetHeight >= 3
        }), t
    }, O.video = function() {
        var t = e.createElement("video"),
            i = !1;
        try {
            (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (t) {}
        return i
    }, O.audio = function() {
        var t = e.createElement("audio"),
            i = !1;
        try {
            (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {}
        return i
    }, O.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, O.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, O.webworkers = function() {
        return !!t.Worker
    }, O.applicationcache = function() {
        return !!t.applicationCache
    }, O.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(P.svg, "svg").createSVGRect
    }, O.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == P.svg
    }, O.smil = function() {
        return !!e.createElementNS && /SVGAnimate/.test(b.call(e.createElementNS(P.svg, "animate")))
    }, O.svgclippaths = function() {
        return !!e.createElementNS && /SVGClipPath/.test(b.call(e.createElementNS(P.svg, "clipPath")))
    };
    for (var j in O) d(O, j) && (p = j.toLowerCase(), f[p] = O[j](), E.push((f[p] ? "" : "no-") + p));
    return f.input || u(), f.addTest = function(t, e) {
            if ("object" == typeof t)
                for (var n in t) d(t, n) && f.addTest(n, t[n]);
            else {
                if (t = t.toLowerCase(), f[t] !== i) return f;
                e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (m.className += " " + (e ? "" : "no-") + t), f[t] = e
            }
            return f
        }, n(""), y = _ = null,
        function(t, e) {
            function i(t, e) {
                var i = t.createElement("p"),
                    n = t.getElementsByTagName("head")[0] || t.documentElement;
                return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
            }

            function n() {
                var t = y.elements;
                return "string" == typeof t ? t.split(" ") : t
            }

            function r(t) {
                var e = v[t[g]];
                return e || (e = {}, m++, t[g] = m, v[m] = e), e
            }

            function o(t, i, n) {
                if (i || (i = e), u) return i.createElement(t);
                n || (n = r(i));
                var o;
                return o = n.cache[t] ? n.cache[t].cloneNode() : f.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !o.canHaveChildren || h.test(t) || o.tagUrn ? o : n.frag.appendChild(o)
            }

            function s(t, i) {
                if (t || (t = e), u) return t.createDocumentFragment();
                i = i || r(t);
                for (var o = i.frag.cloneNode(), s = 0, a = n(), l = a.length; l > s; s++) o.createElement(a[s]);
                return o
            }

            function a(t, e) {
                e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                    return y.shivMethods ? o(i, t, e) : e.createElem(i)
                }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(y, e.frag)
            }

            function l(t) {
                t || (t = e);
                var n = r(t);
                return !y.shivCSS || c || n.hasCSS || (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, n), t
            }
            var c, u, p = "3.7.0",
                d = t.html5 || {},
                h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                g = "_html5shiv",
                m = 0,
                v = {};
            ! function() {
                try {
                    var t = e.createElement("a");
                    t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                    }()
                } catch (t) {
                    c = !0, u = !0
                }
            }();
            var y = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: p,
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: u,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: l,
                createElement: o,
                createDocumentFragment: s
            };
            t.html5 = y, l(e)
        }(this, e), f._version = h, f._prefixes = T, f._domPrefixes = C, f._cssomPrefixes = k, f.mq = R, f.hasEvent = D, f.testProp = function(t) {
            return a([t])
        }, f.testAllProps = c, f.testStyles = L, f.prefixed = function(t, e, i) {
            return e ? c(t, e, i) : c(t, "pfx")
        }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + E.join(" ") : ""), f
}(this, this.document), ! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
}(this, function() {
    "use strict";
    var t = function() {};
    t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(n) {
        var o, s, a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            u = "PAUSED",
            p = i.defaults,
            d = this,
            h = r.extend({}, p, n),
            f = [],
            g = !1,
            m = 0,
            v = u,
            y = !0,
            x = 0,
            _ = !0,
            w = function() {
                for (var t in h) p.hasOwnProperty(t) || delete h[t];
                if (h.container = r.get.elements(h.container)[0], !h.container) throw a + " init failed.";
                y = h.container === window || h.container === document.body || !document.body.contains(h.container), y && (h.container = window), x = S(), h.container.addEventListener("resize", O), h.container.addEventListener("scroll", O), h.refreshInterval = parseInt(h.refreshInterval) || p.refreshInterval, b()
            },
            b = function() {
                h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval))
            },
            T = function() {
                return h.vertical ? r.get.scrollTop(h.container) : r.get.scrollLeft(h.container)
            },
            S = function() {
                return h.vertical ? r.get.height(h.container) : r.get.width(h.container)
            },
            k = this._setScrollPos = function(t) {
                h.vertical ? y ? window.scrollTo(r.get.scrollLeft(), t) : h.container.scrollTop = t : y ? window.scrollTo(t, r.get.scrollTop()) : h.container.scrollLeft = t
            },
            C = function() {
                if (_ && g) {
                    var t = r.type.Array(g) ? g : f.slice(0);
                    g = !1;
                    var e = m;
                    m = d.scrollPos();
                    var i = m - e;
                    0 !== i && (v = i > 0 ? l : c), v === c && t.reverse(), t.forEach(function(t) {
                        t.update(!0)
                    })
                }
            },
            P = function() {
                o = r.rAF(C)
            },
            O = function(t) {
                "resize" == t.type && (x = S(), v = u), g !== !0 && (g = !0, P())
            },
            A = function() {
                if (!y && x != S()) {
                    var t;
                    try {
                        t = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (e) {
                        t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                    }
                    h.container.dispatchEvent(t)
                }
                f.forEach(function(t) {
                    t.refresh()
                }), b()
            };
        this._options = h;
        var M = function(t) {
            if (t.length <= 1) return t;
            var e = t.slice(0);
            return e.sort(function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }), e
        };
        return this.addScene = function(e) {
            if (r.type.Array(e)) e.forEach(function(t) {
                d.addScene(t)
            });
            else if (e instanceof t.Scene)
                if (e.controller() !== d) e.addTo(d);
                else if (f.indexOf(e) < 0) {
                f.push(e), f = M(f), e.on("shift.controller_sort", function() {
                    f = M(f)
                });
                for (var i in h.globalSceneOptions) e[i] && e[i].call(e, h.globalSceneOptions[i])
            }
            return d
        }, this.removeScene = function(t) {
            if (r.type.Array(t)) t.forEach(function(t) {
                d.removeScene(t)
            });
            else {
                var e = f.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), t.remove())
            }
            return d
        }, this.updateScene = function(e, i) {
            return r.type.Array(e) ? e.forEach(function(t) {
                d.updateScene(t, i)
            }) : i ? e.update(!0) : g !== !0 && e instanceof t.Scene && (g = g || [], -1 == g.indexOf(e) && g.push(e), g = M(g), P()), d
        }, this.update = function(t) {
            return O({
                type: "resize"
            }), t && C(), d
        }, this.scrollTo = function(i, n) {
            if (r.type.Number(i)) k.call(h.container, i, n);
            else if (i instanceof t.Scene) i.controller() === d && d.scrollTo(i.scrollOffset(), n);
            else if (r.type.Function(i)) k = i;
            else {
                var o = r.get.elements(i)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(e);) o = o.parentNode;
                    var s = h.vertical ? "top" : "left",
                        a = r.get.offset(h.container),
                        l = r.get.offset(o);
                    y || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], n)
                }
            }
            return d
        }, this.scrollPos = function(t) {
            return arguments.length ? (r.type.Function(t) && (T = t), d) : T.call(d)
        }, this.info = function(t) {
            var e = {
                size: x,
                vertical: h.vertical,
                scrollPos: m,
                scrollDirection: v,
                container: h.container,
                isDocument: y
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
        }, this.loglevel = function() {
            return d
        }, this.enabled = function(t) {
            return arguments.length ? (_ != t && (_ = !!t, d.updateScene(f, !0)), d) : _
        }, this.destroy = function(t) {
            window.clearTimeout(s);
            for (var e = f.length; e--;) f[e].destroy(t);
            return h.container.removeEventListener("resize", O), h.container.removeEventListener("scroll", O), r.cAF(o), null
        }, w(), d
    };
    var i = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    t.Controller.addOption = function(t, e) {
        i.defaults[t] = e
    }, t.Controller.extend = function(e) {
        var i = this;
        t.Controller = function() {
            return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
        }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
    }, t.Scene = function(i) {
        var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            u = n.defaults,
            p = this,
            d = r.extend({}, u, i),
            h = a,
            f = 0,
            g = {
                start: 0,
                end: 0
            },
            m = 0,
            v = !0,
            y = function() {
                for (var t in d) u.hasOwnProperty(t) || delete d[t];
                for (var e in u) P(e);
                k()
            },
            x = {};
        this.on = function(t, e) {
            return r.type.Function(e) && (t = t.trim().split(" "), t.forEach(function(t) {
                var i = t.split("."),
                    n = i[0],
                    r = i[1];
                "*" != n && (x[n] || (x[n] = []), x[n].push({
                    namespace: r || "",
                    callback: e
                }))
            })), p
        }, this.off = function(t, e) {
            return t ? (t = t.trim().split(" "), t.forEach(function(t) {
                var i = t.split("."),
                    n = i[0],
                    r = i[1] || "",
                    o = "*" === n ? Object.keys(x) : [n];
                o.forEach(function(t) {
                    for (var i = x[t] || [], n = i.length; n--;) {
                        var o = i[n];
                        !o || r !== o.namespace && "*" !== r || e && e != o.callback || i.splice(n, 1)
                    }
                    i.length || delete x[t]
                })
            }), p) : p
        }, this.trigger = function(e, i) {
            if (e) {
                var n = e.trim().split("."),
                    r = n[0],
                    o = n[1],
                    s = x[r];
                s && s.forEach(function(e) {
                    o && o !== e.namespace || e.callback.call(p, new t.Event(r, e.namespace, p, i))
                })
            }
            return p
        }, p.on("change.internal", function(t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? b() : "reverse" === t.what && p.update())
        }).on("shift.internal", function() {
            _(), p.update()
        }), this.addTo = function(e) {
            return e instanceof t.Controller && s != e && (s && s.removeScene(p), s = e, k(), w(!0), b(!0), _(), s.info("container").addEventListener("resize", T), e.addScene(p), p.trigger("add", {
                controller: s
            }), p.update()), p
        }, this.enabled = function(t) {
            return arguments.length ? (v != t && (v = !!t, p.update(!0)), p) : v
        }, this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", T);
                var t = s;
                s = void 0, t.removeScene(p), p.trigger("remove")
            }
            return p
        }, this.destroy = function(t) {
            return p.trigger("destroy", {
                reset: t
            }), p.remove(), p.off("*.*"), null
        }, this.update = function(t) {
            if (s)
                if (t)
                    if (s.enabled() && v) {
                        var e, i = s.info("scrollPos");
                        e = d.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0, p.trigger("update", {
                            startPos: g.start,
                            endPos: g.end,
                            scrollPos: i
                        }), p.progress(e)
                    } else O && h === l && M(!0);
            else s.updateScene(p, !1);
            return p
        }, this.refresh = function() {
            return w(), b(), p
        }, this.progress = function(t) {
            if (arguments.length) {
                var e = !1,
                    i = h,
                    n = s ? s.info("scrollDirection") : "PAUSED",
                    r = d.reverse || t >= f;
                if (0 === d.duration ? (e = f != t, f = 1 > t && r ? 0 : 1, h = 0 === f ? a : l) : 0 > t && h !== a && r ? (f = 0, h = a, e = !0) : t >= 0 && 1 > t && r ? (f = t, h = l, e = !0) : t >= 1 && h !== c ? (f = 1, h = c, e = !0) : h !== l || r || M(), e) {
                    var o = {
                            progress: f,
                            state: h,
                            scrollDirection: n
                        },
                        u = h != i,
                        g = function(t) {
                            p.trigger(t, o)
                        };
                    u && i !== l && (g("enter"), g(i === a ? "start" : "end")), g("progress"), u && h !== l && (g(h === a ? "start" : "end"), g("leave"))
                }
                return p
            }
            return f
        };
        var _ = function() {
                g = {
                    start: m + d.offset
                }, s && d.triggerElement && (g.start -= s.info("size") * d.triggerHook), g.end = g.start + d.duration
            },
            w = function(t) {
                if (o) {
                    var e = "duration";
                    C(e, o.call(p)) && !t && (p.trigger("change", {
                        what: e,
                        newval: d[e]
                    }), p.trigger("shift", {
                        reason: e
                    }))
                }
            },
            b = function(t) {
                var i = 0,
                    n = d.triggerElement;
                if (s && n) {
                    for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                    var c = r.get.offset(n);
                    o.isDocument || (a[l] -= s.scrollPos()), i = c[l] - a[l]
                }
                var u = i != m;
                m = i, u && !t && p.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            T = function() {
                d.triggerHook > 0 && p.trigger("shift", {
                    reason: "containerResize"
                })
            },
            S = r.extend(n.validate, {
                duration: function(t) {
                    if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                        var e = parseFloat(t) / 100;
                        t = function() {
                            return s ? s.info("size") * e : 0
                        }
                    }
                    if (r.type.Function(t)) {
                        o = t;
                        try {
                            t = parseFloat(o())
                        } catch (e) {
                            t = -1
                        }
                    }
                    if (t = parseFloat(t), !r.type.Number(t) || 0 > t) throw o ? (o = void 0, 0) : 0;
                    return t
                }
            }),
            k = function(t) {
                t = arguments.length ? [t] : Object.keys(S), t.forEach(function(t) {
                    var e;
                    if (S[t]) try {
                        e = S[t](d[t])
                    } catch (i) {
                        e = u[t]
                    } finally {
                        d[t] = e
                    }
                })
            },
            C = function(t, e) {
                var i = !1,
                    n = d[t];
                return d[t] != e && (d[t] = e, k(t), i = n != d[t]), i
            },
            P = function(t) {
                p[t] || (p[t] = function(e) {
                    return arguments.length ? ("duration" === t && (o = void 0), C(t, e) && (p.trigger("change", {
                        what: t,
                        newval: d[t]
                    }), n.shifts.indexOf(t) > -1 && p.trigger("shift", {
                        reason: t
                    })), p) : d[t]
                })
            };
        this.controller = function() {
            return s
        }, this.state = function() {
            return h
        }, this.scrollOffset = function() {
            return g.start
        }, this.triggerPosition = function() {
            var t = d.offset;
            return s && (t += d.triggerElement ? m : s.info("size") * p.triggerHook()), t
        };
        var O, A;
        p.on("shift.internal", function(t) {
            var e = "duration" === t.reason;
            (h === c && e || h === l && 0 === d.duration) && M(), e && E()
        }).on("progress.internal", function() {
            M()
        }).on("add.internal", function() {
            E()
        }).on("destroy.internal", function(t) {
            p.removePin(t.reset)
        });
        var M = function(t) {
                if (O && s) {
                    var e = s.info(),
                        i = A.spacer.firstChild;
                    if (t || h !== l) {
                        var n = {
                                position: A.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            o = r.css(i, "position") != n.position;
                        A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(r.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(r.css(A.spacer, "padding-bottom")) && (o = !0)) : n[e.vertical ? "top" : "left"] = d.duration * f, r.css(i, n), o && E()
                    } else {
                        "fixed" != r.css(i, "position") && (r.css(i, {
                            position: "fixed"
                        }), E());
                        var u = r.get.offset(A.spacer, !0),
                            p = d.reverse || 0 === d.duration ? e.scrollPos - g.start : Math.round(f * d.duration * 10) / 10;
                        u[e.vertical ? "top" : "left"] += p, r.css(A.spacer.firstChild, {
                            top: u.top,
                            left: u.left
                        })
                    }
                }
            },
            E = function() {
                if (O && s && A.inFlow) {
                    var t = h === l,
                        e = s.info("vertical"),
                        i = A.spacer.firstChild,
                        n = r.isMarginCollapseType(r.css(A.spacer, "display")),
                        o = {};
                    A.relSize.width || A.relSize.autoFullWidth ? t ? r.css(O, {
                        width: r.get.width(A.spacer)
                    }) : r.css(O, {
                        width: "100%"
                    }) : (o["min-width"] = r.get.width(e ? O : i, !0, !0), o.width = t ? o["min-width"] : "auto"), A.relSize.height ? t ? r.css(O, {
                        height: r.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
                    }) : r.css(O, {
                        height: "100%"
                    }) : (o["min-height"] = r.get.height(e ? i : O, !0, !n), o.height = t ? o["min-height"] : "auto"), A.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = d.duration * f, o["padding" + (e ? "Bottom" : "Right")] = d.duration * (1 - f)), r.css(A.spacer, o)
                }
            },
            N = function() {
                s && O && h === l && !s.info("isDocument") && M()
            },
            L = function() {
                s && O && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && r.get.width(window) != r.get.width(A.spacer.parentNode) || A.relSize.height && r.get.height(window) != r.get.height(A.spacer.parentNode)) && E()
            },
            R = function(t) {
                s && O && h === l && !s.info("isDocument") && (t.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
            };
        this.setPin = function(t, i) {
            var n = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (i = r.extend({}, n, i), t = r.get.elements(t)[0], !t) return p;
            if ("fixed" === r.css(t, "position")) return p;
            if (O) {
                if (O === t) return p;
                p.removePin()
            }
            O = t;
            var o = O.parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            O.parentNode.style.display = "none";
            var a = "absolute" != r.css(O, "position"),
                l = r.css(O, s.concat(["display"])),
                c = r.css(O, ["width", "height"]);
            O.parentNode.style.display = o, !a && i.pushFollowers && (i.pushFollowers = !1);
            var u = O.parentNode.insertBefore(document.createElement("div"), O),
                d = r.extend(l, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (a || r.extend(d, r.css(O, ["width", "height"])), r.css(u, d), u.setAttribute(e, ""), r.addClass(u, i.spacerClass), A = {
                    spacer: u,
                    relSize: {
                        width: "%" === c.width.slice(-1),
                        height: "%" === c.height.slice(-1),
                        autoFullWidth: "auto" === c.width && a && r.isMarginCollapseType(l.display)
                    },
                    pushFollowers: i.pushFollowers,
                    inFlow: a
                }, !O.___origStyle) {
                O.___origStyle = {};
                var h = O.style,
                    f = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                f.forEach(function(t) {
                    O.___origStyle[t] = h[t] || ""
                })
            }
            return A.relSize.width && r.css(u, {
                width: c.width
            }), A.relSize.height && r.css(u, {
                height: c.height
            }), u.appendChild(O), r.css(O, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (A.relSize.width || A.relSize.autoFullWidth) && r.css(O, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", L), O.addEventListener("mousewheel", R), O.addEventListener("DOMMouseScroll", R), M(), p
        }, this.removePin = function(t) {
            if (O) {
                if (h === l && M(!0), t || !s) {
                    var i = A.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                        var n = A.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function(t) {
                            margins[t] = n[t] || ""
                        }), r.css(i, margins)
                    }
                    A.spacer.parentNode.insertBefore(i, A.spacer), A.spacer.parentNode.removeChild(A.spacer), O.parentNode.hasAttribute(e) || (r.css(O, O.___origStyle), delete O.___origStyle)
                }
                window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", L), O.removeEventListener("mousewheel", R), O.removeEventListener("DOMMouseScroll", R), O = void 0
            }
            return p
        };
        var D, F = [];
        return p.on("destroy.internal", function(t) {
            p.removeClassToggle(t.reset)
        }), this.setClassToggle = function(t, e) {
            var i = r.get.elements(t);
            return 0 !== i.length && r.type.String(e) ? (F.length > 0 && p.removeClassToggle(), D = e, F = i, p.on("enter.internal_class leave.internal_class", function(t) {
                var e = "enter" === t.type ? r.addClass : r.removeClass;
                F.forEach(function(t) {
                    e(t, D)
                })
            }), p) : p
        }, this.removeClassToggle = function(t) {
            return t && F.forEach(function(t) {
                r.removeClass(t, D)
            }), p.off("start.internal_class end.internal_class"), D = void 0, F = [], p
        }, y(), p
    };
    var n = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(t) {
                if (t = parseFloat(t), !r.type.Number(t)) throw 0;
                return t
            },
            triggerElement: function(t) {
                if (t = t || void 0) {
                    var e = r.get.elements(t)[0];
                    if (!e) throw 0;
                    t = e
                }
                return t
            },
            triggerHook: function(t) {
                var e = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                else {
                    if (!(t in e)) throw 0;
                    t = e[t]
                }
                return t
            },
            reverse: function(t) {
                return !!t
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function(t, e, i, r) {
        t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, r && n.shifts.push(t))
    }, t.Scene.extend = function(e) {
        var i = this;
        t.Scene = function() {
            return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
        }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
    }, t.Event = function(t, e, i, n) {
        n = n || {};
        for (var r in n) this[r] = n[r];
        return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var r = t._util = function(t) {
        var e, i = {},
            n = function(t) {
                return parseFloat(t) || 0
            },
            r = function(e) {
                return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
            },
            o = function(e, i, o, s) {
                if (i = i === document ? t : i, i === t) s = !1;
                else if (!p.DomElement(i)) return 0;
                e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                if (o && s) {
                    var l = r(i);
                    a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                }
                return a
            },
            s = function(t) {
                return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                    return t[1].toUpperCase()
                })
            };
        i.extend = function(t) {
            for (t = t || {}, e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }, i.isMarginCollapseType = function(t) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
        };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = t.requestAnimationFrame,
            u = t.cancelAnimationFrame;
        for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        c || (c = function(e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - a)),
                r = t.setTimeout(function() {
                    e(i + n)
                }, n);
            return a = i + n, r
        }), u || (u = function(e) {
            t.clearTimeout(e)
        }), i.rAF = c.bind(t), i.cAF = u.bind(t);
        var p = i.type = function(t) {
            return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        p.String = function(t) {
            return "string" === p(t)
        }, p.Function = function(t) {
            return "function" === p(t)
        }, p.Array = function(t) {
            return Array.isArray(t)
        }, p.Number = function(t) {
            return !p.Array(t) && t - parseFloat(t) + 1 >= 0
        }, p.DomElement = function(t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        };
        var d = i.get = {};
        return d.elements = function(e) {
            var i = [];
            if (p.String(e)) try {
                e = document.querySelectorAll(e)
            } catch (t) {
                return i
            }
            if ("nodelist" === p(e) || p.Array(e))
                for (var n = 0, r = i.length = e.length; r > n; n++) {
                    var o = e[n];
                    i[n] = p.DomElement(o) ? o : d.elements(o)
                } else(p.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
        }, d.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
        }, d.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
        }, d.width = function(t, e, i) {
            return o("width", t, e, i)
        }, d.height = function(t, e, i) {
            return o("height", t, e, i)
        }, d.offset = function(t, e) {
            var i = {
                top: 0,
                left: 0
            };
            if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect();
                i.top = n.top, i.left = n.left, e || (i.top += d.scrollTop(), i.left += d.scrollLeft())
            }
            return i
        }, i.addClass = function(t, e) {
            e && (t.classList ? t.classList.add(e) : t.className += " " + e)
        }, i.removeClass = function(t, e) {
            e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, i.css = function(t, e) {
            if (p.String(e)) return r(t)[s(e)];
            if (p.Array(e)) {
                var i = {},
                    n = r(t);
                return e.forEach(function(t) {
                    i[t] = n[s(t)]
                }), i
            }
            for (var o in e) {
                var a = e[o];
                a == parseFloat(a) && (a += "px"), t.style[s(o)] = a
            }
        }, i
    }(window || {});
    return t
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    o = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                    },
                    s = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    c = a.isArray,
                    u = o.prototype = i.to({}, .1, {}),
                    p = [];
                o.version = "1.18.5", u.constructor = o, u.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || o)
                        for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                    return this
                }, u.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, o, l, c, u, p, d, h = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        g = this._totalTime,
                        m = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= h - 1e-7 ? (this._totalTime = h, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > y || 0 >= t && t >= -1e-7 || y === s && "isPause" !== this.data) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === v && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = d = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (c = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / v < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && m === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = g, this._rawPrevTime = y, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === s && d !== s && (this._rawPrevTime = 0))
                }, o.to = function(t, e, i) {
                    return new o(t, e, i)
                }, o.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                }, o.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                }, o.staggerTo = o.allTo = function(t, e, s, a, u, d, h) {
                    a = a || 0;
                    var f, g, m, v, y = 0,
                        x = [],
                        _ = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(h || s.callbackScope || this, d || p)
                        },
                        w = s.cycle,
                        b = s.startAt && s.startAt.cycle;
                    for (c(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        g = {};
                        for (v in s) g[v] = s[v];
                        if (w && (r(g, t, m), null != g.duration && (e = g.duration, delete g.duration)), b) {
                            b = g.startAt = {};
                            for (v in s.startAt) b[v] = s.startAt[v];
                            r(g.startAt, t, m)
                        }
                        g.delay = y + (g.delay || 0), m === f && u && (g.onComplete = _), x[m] = new o(t[m], e, g), y += a
                    }
                    return x
                }, o.staggerFrom = o.allFrom = function(t, e, i, n, r, s, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, s, a)
                }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, s, a, l)
                }, o.delayedCall = function(t, e, i, n, r) {
                    return new o(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, o.set = function(t, e) {
                    return new o(t, 0, e)
                }, o.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var d = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(d(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    h = o.getAllTweens = function(e) {
                        return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
                    };
                o.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, s, a, l = h(0 != r),
                        c = l.length,
                        u = i && n && r;
                    for (a = 0; c > a; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, o.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, s, u, p, d, h = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), c(t))
                            for (p = t.length; --p > -1;) o.killChildTweensOf(t[p], e);
                        else {
                            r = [];
                            for (u in h)
                                for (s = h[u].target.parentNode; s;) s === t && (r = r.concat(h[u].tweens)), s = s.parentNode;
                            for (d = r.length, p = 0; d > p; p++) e && r[p].totalTime(r[p].totalDuration()), r[p]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var o, s, a = h(r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                };
                return o.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, o.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, o.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    o = i._internals,
                    s = n._internals = {},
                    a = o.isSelector,
                    l = o.isArray,
                    c = o.lazyTweens,
                    u = o.lazyRender,
                    p = _gsScope._gsDefine.globals,
                    d = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    h = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    f = s.pauseCallback = function() {},
                    g = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.18.5", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, r) {
                    var o = n.repeat && p.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, m.from = function(t, e, n, r) {
                    return this.add((n.repeat && p.TweenMax || i).from(t, e, n), r)
                }, m.fromTo = function(t, e, n, r, o) {
                    var s = r.repeat && p.TweenMax || i;
                    return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, m.staggerTo = function(t, e, r, o, s, l, c, u) {
                    var p, f, m = new n({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = g(t)), o = o || 0, 0 > o && (t = g(t), t.reverse(), o *= -1), f = 0; f < t.length; f++) p = d(r), p.startAt && (p.startAt = d(p.startAt), p.startAt.cycle && h(p.startAt, t, f)), v && (h(p, t, f), null != p.duration && (e = p.duration, delete p.duration)), m.to(t[f], e, p, f * o);
                    return this.add(m, s)
                }, m.staggerFrom = function(t, e, i, n, r, o, s, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                }, m.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                }, m.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, s = new n(t),
                        a = s._timeline;
                    for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                    return a.add(s, 0), s
                }, m.add = function(r, o, s, a) {
                    var c, u, p, d, h, f;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (s = s || "normal", a = a || 0, c = o, u = r.length, p = 0; u > p; p++) l(d = r[p]) && (d = new n({
                                tweens: d
                            })), this.add(d, c), "string" != typeof d && "function" != typeof d && ("sequence" === s ? c = d._startTime + d.totalDuration() / d._timeScale : "start" === s && (d._startTime -= d.delay())), c += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (h = this, f = h.rawTime() > r._startTime; h._timeline;) f && h._timeline.smoothChildTiming ? h.totalTime(h._totalTime, !0) : h._gc && h._enabled(!0, !1), h = h._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, r) {
                    var o = i.delayedCall(0, f, n, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, r) {
                    var o;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, s, a, l, p, d, h = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        g = this._startTime,
                        m = this._timeScale,
                        v = this._paused;
                    if (t >= h - 1e-7) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = h + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (n = this._first; n && n._startTime <= t && !p;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !p;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n), n = n._prev;
                            p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || p) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), d = this._time, d >= f)
                            for (n = this._first; n && (s = n._next, d === this._time && (!this._paused || v));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, d === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (p === n) {
                                        for (p = n._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                        p = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = s
                            }
                        this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (o && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                    return o
                }, m.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                    return o && this._enabled(!1, !0), s
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    o = e._internals,
                    s = o.lazyTweens,
                    a = o.lazyRender,
                    l = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.18.5", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, o, s = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) s[r] = i[r];
                    return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new e(this, n, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart")
                    }, o
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, l, c, u, p, d, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._duration,
                        m = this._time,
                        v = this._totalTime,
                        y = this._startTime,
                        x = this._timeScale,
                        _ = this._rawPrevTime,
                        w = this._paused,
                        b = this._cycle;
                    if (t >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > _ || _ === r) && _ !== t && this._first && (u = !0, _ > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === g && _ !== r && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = o = !0, c = "onReverseComplete") : _ >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else if (0 === g && 0 > _ && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = g + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                        d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & b),
                            S = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            C = this._cycle,
                            P = this._rawPrevTime,
                            O = this._time;
                        if (this._totalTime = b * g, this._cycle < b ? T = !T : this._totalTime += g, this._time = m, this._rawPrevTime = 0 === g ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, m = T ? 0 : g, this.render(m, e, 0 === g), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                        if (S && (m = T ? g + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
                        this._time = O, this._totalTime = k, this._cycle = C, this._rawPrevTime = P
                    }
                    if (!(this._time !== m && this._first || i || u || d)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), h = this._time, h >= m)
                        for (n = this._first; n && (l = n._next, h === this._time && (!this._paused || w));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, h === this._time && (!this._paused || w));) {
                            if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                if (d === n) {
                                    for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                    d = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), c && (this._locked || this._gc || (y === this._startTime || x !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this._callback(c)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        s = this.getChildren(t, e, i),
                        a = 0,
                        l = s.length;
                    for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
                    return o
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    o = _gsScope._gsDefine.globals,
                    s = function(t, e, i, n) {
                        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            o = {},
                            s = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            c = (e + i) / 2,
                            u = (i + n) / 2,
                            p = (l + c) / 2,
                            d = (c + u) / 2,
                            h = (d - p) / 8;
                        return r.b = l + (t - l) / 4, o.b = p + h, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (p + d) / 2, s.b = d - h, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                    },
                    c = function(t, r, o, s, a) {
                        var c, u, p, d, h, f, g, m, v, y, x, _, w, b = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (c = 0; b > c; c++) h = t[T], u = h.a, p = h.d, d = t[T + 1].d, a ? (x = e[c], _ = i[c], w = (_ + x) * r * .25 / (s ? .5 : n[c] || .5), f = p - (p - u) * (s ? .5 * r : 0 !== x ? w / x : 0), g = p + (d - p) * (s ? .5 * r : 0 !== _ ? w / _ : 0), m = p - (f + ((g - f) * (3 * x / (x + _) + .5) / 4 || 0))) : (f = p - (p - u) * r * .5, g = p + (d - p) * r * .5, m = p - (f + g) / 2), f += m, g += m, h.c = v = f, 0 !== c ? h.b = S : h.b = S = h.a + .6 * (h.c - h.a), h.da = p - u, h.ca = v - u, h.ba = S - u, o ? (y = l(u, S, v, p), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = g;
                        h = t[T], h.b = S, h.c = S + .4 * (h.d - S), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = S - h.a, o && (y = l(h.a, S, h.c, h.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    u = function(t, n, r, o) {
                        var a, l, c, u, p, d, h = [];
                        if (o)
                            for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
                        if (a = t.length - 2, 0 > a) return h[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), h;
                        for (l = 0; a > l; l++) c = t[l][n], u = t[l + 1][n], h[l] = new s(c, 0, 0, u), r && (p = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (p - u) * (p - u));
                        return h[l] = new s(t[l][n], 0, 0, t[l + 1][n]), h
                    },
                    p = function(t, o, s, l, p, d) {
                        var h, f, g, m, v, y, x, _, w = {},
                            b = [],
                            T = d || t[0];
                        p = "string" == typeof p ? "," + p + "," : a, null == o && (o = 1);
                        for (f in t[0]) b.push(f);
                        if (t.length > 1) {
                            for (_ = t[t.length - 1], x = !0, h = b.length; --h > -1;)
                                if (f = b[h], Math.abs(T[f] - _[f]) > .05) {
                                    x = !1;
                                    break
                                } x && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, h = b.length; --h > -1;) f = b[h], r[f] = -1 !== p.indexOf("," + f + ","), w[f] = u(t, f, r[f], d);
                        for (h = e.length; --h > -1;) e[h] = Math.sqrt(e[h]), i[h] = Math.sqrt(i[h]);
                        if (!l) {
                            for (h = b.length; --h > -1;)
                                if (r[f])
                                    for (g = w[b[h]], y = g.length - 1, m = 0; y > m; m++) v = g[m + 1].da / i[m] + g[m].da / e[m] || 0, n[m] = (n[m] || 0) + v * v;
                            for (h = n.length; --h > -1;) n[h] = Math.sqrt(n[h])
                        }
                        for (h = b.length, m = s ? 4 : 1; --h > -1;) f = b[h], g = w[f], c(g, o, s, l, r[f]), x && (g.splice(0, m), g.splice(g.length - m, m));
                        return w
                    },
                    d = function(t, e, i) {
                        e = e || "soft";
                        var n, r, o, a, l, c, u, p, d, h, f, g = {},
                            m = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (d in t[0]) y.push(d);
                        for (c = y.length; --c > -1;) {
                            for (d = y[c], g[d] = l = [], h = 0, p = t.length, u = 0; p > u; u++) n = null == i ? t[u][d] : "string" == typeof(f = t[u][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && u > 1 && p - 1 > u && (l[h++] = (n + l[h - 2]) / 2), l[h++] = n;
                            for (p = h - m + 1, h = 0, u = 0; p > u; u += m) n = l[u], r = l[u + 1], o = l[u + 2], a = 2 === m ? 0 : l[u + 3], l[h++] = f = 3 === m ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                            l.length = h
                        }
                        return g
                    },
                    h = function(t, e, i) {
                        for (var n, r, o, s, a, l, c, u, p, d, h, f = 1 / i, g = t.length; --g > -1;)
                            for (d = t[g], o = d.a, s = d.d - o, a = d.c - o, l = d.b - o, n = r = 0, u = 1; i >= u; u++) c = f * u, p = 1 - c, n = r - (r = (c * c * s + 3 * p * (c * a + p * l)) * c), h = g * i + u - 1, e[h] = (e[h] || 0) + n * n
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, o, s = [],
                            a = [],
                            l = 0,
                            c = 0,
                            u = e - 1,
                            p = [],
                            d = [];
                        for (i in t) h(t[i], s, e);
                        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, d[o] = l, o === u && (c += l, o = n / e >> 0, p[o] = d, a[o] = c, l = 0, d = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: p
                        }
                    },
                    g = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.6",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, o, s, a, l = e.values || [],
                                c = {},
                                u = l[0],
                                h = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = h ? h instanceof Array ? h : [
                                ["x", "y", "rotation", h === !0 ? 0 : Number(h) || 0]
                            ] : null;
                            for (n in u) this._props.push(n);
                            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var g = f(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (h = this._autoRotate)
                                for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), o = h.length; --o > -1;) {
                                    for (s = 0; 3 > s; s++) n = h[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = h[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, o, s, a, l, c, u, p, d = this._segCount,
                                h = this._func,
                                f = this._target,
                                g = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, p = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                                    for (c = d - 1; c > r && (this._l2 = u[++r]) <= e;);
                                    this._l1 = u[r - 1], this._li = r, this._curSeg = p = this._segments[r], this._s2 = p[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = p = this._segments[r], this._s1 = p[(this._si = p.length - 1) - 1] || 0, this._s2 = p[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < p.length - 1) {
                                    for (c = p.length - 1; c > r && (this._s2 = p[++r]) <= e;);
                                    this._s1 = p[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = p[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = p[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), h[o] ? f[o](l) : f[o] = l;
                            if (this._autoRotate) {
                                var m, v, y, x, _, w, b, T = this._autoRotate;
                                for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, b = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], m = this._beziers[T[r][1]], s && m && (s = s[i], m = m[i], v = s.a + (s.b - s.a) * a, x = s.b + (s.c - s.b) * a, v += (x - v) * a, x += (s.c + (s.d - s.c) * a - x) * a, y = m.a + (m.b - m.a) * a, _ = m.b + (m.c - m.b) * a, y += (_ - y) * a, _ += (m.c + (m.d - m.c) * a - _) * a, l = g ? Math.atan2(_ - y, x - v) * b + w : this._initialRotations[r], h[o] ? f[o](l) : f[o] = l)
                            }
                        }
                    }),
                    m = g.prototype;
                g.bezierThrough = p, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
                    return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, g._cssRegister = function() {
                    var t = o.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, o, s, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new g;
                                var c, u, p, d = e.values,
                                    h = d.length - 1,
                                    f = [],
                                    m = {};
                                if (0 > h) return a;
                                for (c = 0; h >= c; c++) p = i(t, d[c], s, a, l, h !== c), f[c] = p.end;
                                for (u in e) m[u] = e[u];
                                return m.values = f, a = new r(t, "bezier", 0, 0, p.pt, 2), a.data = p, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != p.end.left ? [
                                    ["left", "top", "rotation", c, !1]
                                ] : null != p.end.x && [
                                    ["x", "y", "rotation", c, !1]
                                ]), m.autoRotate && (s._transform || s._enableTransforms(!1), p.autoRotate = s._target._gsTransform, p.proxy.rotation = p.autoRotate.rotation || 0), l._onInitTween(p.proxy, m, s._tween), a
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, o, s = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = s.prototype = new t("css");
                c.constructor = s, s.version = "1.18.5", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
                    top: c,
                    right: c,
                    bottom: c,
                    left: c,
                    width: c,
                    height: c,
                    fontSize: c,
                    padding: c,
                    margin: c,
                    perspective: c,
                    lineHeight: ""
                };
                var u, p, d, h, f, g, m = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    _ = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    b = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    N = /,(?=[^\)]*(?:\(|$))/gi,
                    L = /[\s,\(]/i,
                    R = Math.PI / 180,
                    D = 180 / Math.PI,
                    F = {},
                    j = document,
                    z = function(t) {
                        return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t)
                    },
                    I = z("div"),
                    X = z("img"),
                    H = s._internals = {
                        _specialProps: l
                    },
                    B = navigator.userAgent,
                    Y = function() {
                        var t = B.indexOf("Android"),
                            e = z("a");
                        return d = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), f = d && Number(B.substr(B.indexOf("Version/") + 8, 1)) < 6, h = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    q = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    U = "",
                    G = function(t, e) {
                        e = e || I;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (U = 3 === n ? "ms" : i[n], V = "-" + U.toLowerCase() + "-", U + t) : null
                    },
                    Q = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                    Z = s.getStyle = function(t, e, i, n, r) {
                        var o;
                        return Y || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || Q(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : q(t)
                    },
                    J = H.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, c, u = A.test(i),
                            p = t,
                            d = I.style,
                            h = 0 > n,
                            f = 1 === n;
                        if (h && (n = -n), f && (n *= 100), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== r && p.appendChild && "v" !== r.charAt(0) && "rem" !== r) d[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (p = t.parentNode || j.body, l = p._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                                d[u ? "width" : "height"] = n + r
                            }
                            p.appendChild(I), a = parseFloat(I[u ? "offsetWidth" : "offsetHeight"]), p.removeChild(I), u && "%" === r && s.cacheWidths !== !1 && (l = p._gsCache = p._gsCache || {}, l.time = c, l.width = a / n * 100), 0 !== a || o || (a = J(t, i, n, r, !0))
                        }
                        return f && (a /= 100), h ? -a : a
                    },
                    $ = H.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Z(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Z(t, "margin" + n, i);
                        return t["offset" + n] - (J(t, e, parseFloat(r), r.replace(_, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, n, r, o = {};
                        if (e = e || Q(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Ct === r) && (o[r.replace(C, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || kt === i) && (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(C, O)] = e[i]);
                        return Y || (o.opacity = q(t)), n = zt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Ot && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    tt = function(t, e, i, n, r) {
                        var o, s, a, l = {},
                            c = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(x, "") ? o : 0 : $(t, s), void 0 !== c[s] && (a = new gt(c, s, c[s], a)));
                        if (n)
                            for (s in n) "className" !== s && (l[s] = n[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    et = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    it = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    nt = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Q(t))[e] || 0;
                        if (t.getBBox && Ft(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = et[e],
                            o = r.length;
                        for (i = i || Q(t, null); --o > -1;) n -= parseFloat(Z(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Z(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    rt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, n = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(rt(n[i]));
                            return t.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(o.replace(x, "")), e.v = t), e || t
                    },
                    ot = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    at = function(t, e, i, n) {
                        var r, o, s, a, l, c = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), c > a && a > -c && (a = 0), a
                    },
                    lt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ct = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ut = s.parseColor = function(t, e) {
                        var i, n, r, o, s, a, l, c, u, p, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), lt[t]) i = lt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(m), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(v)
                                    } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = ct(s + 1 / 3, n, r), i[1] = ct(s, n, r), i[2] = ct(s - 1 / 3, n, r);
                                else i = t.match(m) || lt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = lt.black;
                        return e && !d && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, c = Math.max(n, r, o), u = Math.min(n, r, o), l = (c + u) / 2, c === u ? s = a = 0 : (p = c - u, a = l > .5 ? p / (2 - c - u) : p / (c + u), s = c === n ? (r - o) / p + (o > r ? 6 : 0) : c === r ? (o - n) / p + 2 : (n - r) / p + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    pt = function(t, e) {
                        var i, n, r, o = t.match(dt) || [],
                            s = 0,
                            a = o.length ? "" : t;
                        for (i = 0; i < o.length; i++) n = o[i], r = t.substr(s, t.indexOf(n, s) - s), s += r.length + n.length, n = ut(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(s)
                    },
                    dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (c in lt) dt += "|" + c + "\\b";
                dt = new RegExp(dt + ")", "gi"), s.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), dt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                var ht = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(dt) || [""])[0] : "",
                            s = t.split(o).join("").match(y) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            u = s.length,
                            p = u > 0 ? s[0].replace(m, "") : "";
                        return u ? r = e ? function(t) {
                            var e, d, h, f;
                            if ("number" == typeof t) t += p;
                            else if (n && N.test(t)) {
                                for (f = t.replace(N, "|").split("|"), h = 0; h < f.length; h++) f[h] = r(f[h]);
                                return f.join(",")
                            }
                            if (e = (t.match(dt) || [o])[0], d = t.split(e).join("").match(y) || [], h = d.length, u > h--)
                                for (; ++h < u;) d[h] = i ? d[(h - 1) / 2 | 0] : s[h];
                            return a + d.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, d;
                            if ("number" == typeof t) t += p;
                            else if (n && N.test(t)) {
                                for (o = t.replace(N, "|").split("|"), d = 0; d < o.length; d++) o[d] = r(o[d]);
                                return o.join(",")
                            }
                            if (e = t.match(y) || [], d = e.length, u > d--)
                                for (; ++d < u;) e[d] = i ? e[(d - 1) / 2 | 0] : s[d];
                            return a + e.join(c) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ft = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, s, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    gt = (H._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, c = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : c > e && e > -c && (e = 0), l.t[l.p] = e, l = l._next;
                        if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                            for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[o] = r
                                    }
                                } else i[o] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    mt = (H._parseToProxy = function(t, e, i, n, r, o) {
                        var s, a, l, c, u, p = n,
                            d = {},
                            h = {},
                            f = i._transform,
                            g = F;
                        for (i._transform = null, F = e, n = u = i.parse(t, e, n, r), F = g, o && (i._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); n && n !== p;) {
                            if (n.type <= 1 && (a = n.p, h[a] = n.s + n.c, d[a] = n.s, o || (c = new gt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, h[a] = n.data[l], d[a] = n[l], o || (c = new gt(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: h,
                            firstMPT: c,
                            pt: u
                        }
                    }, H.CSSPropTween = function(t, e, n, r, s, a, l, c, u, p, d) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof mt || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === p ? n : p, this.e = void 0 === d ? n + r : d, s && (this._next = s, s._prev = this)
                    }),
                    vt = function(t, e, i, n, r, o) {
                        var s = new mt(t, e, i, n - i, r, -1, o);
                        return s.b = i, s.e = s.xs0 = n, s
                    },
                    yt = s.parseComplex = function(t, e, i, n, r, o, a, l, c, p) {
                        i = i || o || "", a = new mt(t, e, 0, 0, a, p ? 2 : 1, null, !1, l, i, n), n += "", r && dt.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
                        var d, h, f, g, y, x, _, w, b, T, S, k, C, P = i.split(", ").join(",").split(" "),
                            O = n.split(", ").join(",").split(" "),
                            A = P.length,
                            M = u !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace(N, ", ").split(" "), O = O.join(" ").replace(N, ", ").split(" "), A = P.length), A !== O.length && (P = (o || "").split(" "), A = P.length), a.plugin = c, a.setRatio = p, dt.lastIndex = 0, d = 0; A > d; d++)
                            if (g = P[d], y = O[d], w = parseFloat(g), w || 0 === w) a.appendXtra("", w, ot(y, w), y.replace(v, ""), M && -1 !== y.indexOf("px"), !0);
                            else if (r && dt.test(g)) k = y.indexOf(")") + 1, k = ")" + (k ? y.substr(k) : ""), C = -1 !== y.indexOf("hsl") && Y, g = ut(g, C), y = ut(y, C), b = g.length + y.length > 6, b && !Y && 0 === y[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[d]).join("transparent")) : (Y || (b = !1), C ? a.appendXtra(b ? "hsla(" : "hsl(", g[0], ot(y[0], g[0]), ",", !1, !0).appendXtra("", g[1], ot(y[1], g[1]), "%,", !1).appendXtra("", g[2], ot(y[2], g[2]), b ? "%," : "%" + k, !1) : a.appendXtra(b ? "rgba(" : "rgb(", g[0], y[0] - g[0], ",", !0, !0).appendXtra("", g[1], y[1] - g[1], ",", !0).appendXtra("", g[2], y[2] - g[2], b ? "," : k, !0), b && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (y.length < 4 ? 1 : y[3]) - g, k, !1))), dt.lastIndex = 0;
                        else if (x = g.match(m)) {
                            if (_ = y.match(v), !_ || _.length !== x.length) return a;
                            for (f = 0, h = 0; h < x.length; h++) S = x[h], T = g.indexOf(S, f), a.appendXtra(g.substr(f, T - f), Number(S), ot(_[h], S), "", M && "px" === g.substr(T + S.length, 2), 0 === h), f = T + S.length;
                            a["xs" + a.l] += g.substr(f)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + y : y;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, d = 1; d < a.l; d++) k += a["xs" + d] + a.data["xn" + d];
                            a.e = k + a["xs" + d]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    xt = 9;
                for (c = mt.prototype, c.l = c.pr = 0; --xt > 0;) c["xn" + xt] = 0, c["xs" + xt] = "";
                c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new mt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var _t = function(t, e) {
                        e = e || {}, this.p = e.prefix ? G(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    wt = H._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new _t(o[n], e)
                    },
                    bt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            wt(t, {
                                parser: function(t, i, n, r, o, s, c) {
                                    var u = a.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, c)) : (W("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                c = _t.prototype, c.parseComplex = function(t, e, i, n, r, o) {
                    var s, a, l, c, u, p, d = this.keyword;
                    if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : d && (a = [e], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, d && (u = e.indexOf(d), p = i.indexOf(d), u !== p && (-1 === p ? a[s] = a[s].split(d).join("") : -1 === u && (a[s] += " " + d)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return yt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, c.parse = function(t, e, i, n, o, s, a) {
                    return this.parseComplex(t.style, this.format(Z(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, s.registerSpecialProp = function(t, e, i) {
                    wt(t, {
                        parser: function(t, n, r, o, s, a, l) {
                            var c = new mt(t, r, 0, 0, s, 2, r, !1, i);
                            return c.plugin = a, c.setRatio = e(t, n, o._tween, r), c
                        },
                        priority: i
                    })
                }, s.useSVGTransformAttr = d || h;
                var Tt, St = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    kt = G("transform"),
                    Ct = V + "transform",
                    Pt = G("transformOrigin"),
                    Ot = null !== G("perspective"),
                    At = H.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !Ot) && (s.defaultForce3D || "auto")
                    },
                    Mt = window.SVGElement,
                    Et = function(t, e, i) {
                        var n, r = j.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Nt = j.documentElement,
                    Lt = function() {
                        var t, e, i, n = g || /Android/i.test(B) && !window.chrome;
                        return j.createElementNS && !n && (t = Et("svg", Nt), e = Et("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[kt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(h && Ot), Nt.removeChild(t)), n
                    }(),
                    Rt = function(t, e, i, n, r, o) {
                        var a, l, c, u, p, d, h, f, g, m, v, y, x, _, w = t._gsTransform,
                            b = $t(t, !0);
                        w && (x = w.xOrigin, _ = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (h = t.getBBox(), e = rt(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = p = parseFloat(a[1]), n && b !== jt && (d = b[0], h = b[1], f = b[2], g = b[3], m = b[4], v = b[5], y = d * g - h * f, l = u * (g / y) + p * (-f / y) + (f * v - g * m) / y, c = u * (-h / y) + p * (d / y) - (d * v - h * m) / y, u = i.xOrigin = a[0] = l, p = i.yOrigin = a[1] = c), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = u - x, c = p - _, w.xOffset += l * b[0] + c * b[2] - l, w.yOffset += l * b[1] + c * b[3] - c) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Dt = function(t) {
                        try {
                            return t.getBBox()
                        } catch (t) {}
                    },
                    Ft = function(t) {
                        return !!(Mt && t.getBBox && t.getCTM && Dt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    jt = [1, 0, 0, 1, 0, 0],
                    $t = function(t, e) {
                        var i, n, r, o, s, a, l = t._gsTransform || new At,
                            c = 1e5,
                            u = t.style;
                        if (kt ? n = Z(t, Ct, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(M), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, i && kt && ((a = "none" === Q(t).display) || !t.parentNode) && (a && (o = u.display, u.display = "block"), t.parentNode || (s = 1, Nt.appendChild(t)), n = Z(t, Ct, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? u.display = o : a && Bt(u, "display"), s && Nt.removeChild(t)), (l.svg || t.getBBox && Ft(t)) && (i && -1 !== (u[kt] + "").indexOf("matrix") && (n = u[kt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return jt;
                        for (r = (n || "").match(m) || [], xt = r.length; --xt > -1;) o = Number(r[xt]), r[xt] = (s = o - (o |= 0)) ? (s * c + (0 > s ? -.5 : .5) | 0) / c + o : o;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    zt = H.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var o, a, l, c, u, p, d = n ? t._gsTransform || new At : new At,
                            h = d.scaleX < 0,
                            f = 2e-5,
                            g = 1e5,
                            m = Ot ? parseFloat(Z(t, Pt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                            v = parseFloat(s.defaultTransformPerspective) || 0;
                        if (d.svg = !(!t.getBBox || !Ft(t)), d.svg && (Rt(t, Z(t, Pt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Tt = s.useSVGTransformAttr || Lt), o = $t(t), o !== jt) {
                            if (16 === o.length) {
                                var y, x, _, w, b, T = o[0],
                                    S = o[1],
                                    k = o[2],
                                    C = o[3],
                                    P = o[4],
                                    O = o[5],
                                    A = o[6],
                                    M = o[7],
                                    E = o[8],
                                    N = o[9],
                                    L = o[10],
                                    R = o[12],
                                    F = o[13],
                                    j = o[14],
                                    z = o[11],
                                    I = Math.atan2(A, L);
                                d.zOrigin && (j = -d.zOrigin, R = E * j - o[12], F = N * j - o[13], j = L * j + d.zOrigin - o[14]), d.rotationX = I * D, I && (w = Math.cos(-I), b = Math.sin(-I), y = P * w + E * b, x = O * w + N * b, _ = A * w + L * b, E = P * -b + E * w, N = O * -b + N * w, L = A * -b + L * w, z = M * -b + z * w, P = y, O = x, A = _), I = Math.atan2(-k, L), d.rotationY = I * D, I && (w = Math.cos(-I), b = Math.sin(-I), y = T * w - E * b, x = S * w - N * b, _ = k * w - L * b, N = S * b + N * w, L = k * b + L * w, z = C * b + z * w, T = y, S = x, k = _), I = Math.atan2(S, T), d.rotation = I * D, I && (w = Math.cos(-I), b = Math.sin(-I), T = T * w + P * b, x = S * w + O * b, O = S * -b + O * w, A = k * -b + A * w, S = x), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), d.scaleX = (Math.sqrt(T * T + S * S) * g + .5 | 0) / g, d.scaleY = (Math.sqrt(O * O + N * N) * g + .5 | 0) / g, d.scaleZ = (Math.sqrt(A * A + L * L) * g + .5 | 0) / g, d.rotationX || d.rotationY ? d.skewX = 0 : (d.skewX = P || O ? Math.atan2(P, O) * D + d.rotation : d.skewX || 0, Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (h ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180))), d.perspective = z ? 1 / (0 > z ? -z : z) : 0, d.x = R, d.y = F, d.z = j, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * P), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * O))
                            } else if (!Ot || r || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                                var X = o.length >= 6,
                                    H = X ? o[0] : 1,
                                    B = o[1] || 0,
                                    Y = o[2] || 0,
                                    q = X ? o[3] : 1;
                                d.x = o[4] || 0, d.y = o[5] || 0, l = Math.sqrt(H * H + B * B), c = Math.sqrt(q * q + Y * Y), u = H || B ? Math.atan2(B, H) * D : d.rotation || 0, p = Y || q ? Math.atan2(Y, q) * D + u : d.skewX || 0, Math.abs(p) > 90 && Math.abs(p) < 270 && (h ? (l *= -1, p += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), d.scaleX = l, d.scaleY = c, d.rotation = u, d.skewX = p, Ot && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * H + d.yOrigin * Y), d.y -= d.yOrigin - (d.xOrigin * B + d.yOrigin * q))
                            }
                            d.zOrigin = m;
                            for (a in d) d[a] < f && d[a] > -f && (d[a] = 0)
                        }
                        return n && (t._gsTransform = d, d.svg && (Tt && t.style[kt] ? e.delayedCall(.001, function() {
                            Bt(t.style, kt)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), d
                    },
                    It = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * R,
                            o = r + n.skewX * R,
                            s = 1e5,
                            a = (Math.cos(r) * n.scaleX * s | 0) / s,
                            l = (Math.sin(r) * n.scaleX * s | 0) / s,
                            c = (Math.sin(o) * -n.scaleY * s | 0) / s,
                            u = (Math.cos(o) * n.scaleY * s | 0) / s,
                            p = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -c, c = -i, e = d.filter, p.filter = "";
                            var h, f, m = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== d.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                                b = n.x + m * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (h = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, b += h - (h * a + f * l), T += f - (h * c + f * u)), y ? (h = m / 2, f = v / 2, x += ", Dx=" + (h - (h * a + f * l) + b) + ", Dy=" + (f - (h * c + f * u) + T) + ")") : x += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? p.filter = e.replace(E, x) : p.filter = x + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === x.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !y) {
                                var S, k, C, P = 8 > g ? 1 : -1;
                                for (h = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * m)) / 2 + T), xt = 0; 4 > xt; xt++) k = it[xt], S = d[k], i = -1 !== S.indexOf("px") ? parseFloat(S) : J(this.t, k, parseFloat(S), S.replace(_, "")) || 0, C = i !== n[k] ? 2 > xt ? -n.ieOffsetX : -n.ieOffsetY : 2 > xt ? h - n.ieOffsetX : f - n.ieOffsetY, p[k] = (n[k] = Math.round(i - C * (0 === xt || 2 === xt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Xt = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, c, u, p, d, f, g, m, v, y, x, _, w, b, T, S, k = this.data,
                            C = this.t.style,
                            P = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            M = k.scaleX,
                            E = k.scaleY,
                            N = k.scaleZ,
                            L = k.x,
                            D = k.y,
                            F = k.z,
                            j = k.svg,
                            z = k.perspective,
                            I = k.force3D;
                        if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !F && !z && !A && !O && 1 === N || Tt && j || !Ot) return void(P || k.skewX || j ? (P *= R, T = k.skewX * R, S = 1e5, e = Math.cos(P) * M, r = Math.sin(P) * M, i = Math.sin(P - T) * -E, o = Math.cos(P - T) * E, T && "simple" === k.skewType && (y = Math.tan(T), y = Math.sqrt(1 + y * y), i *= y, o *= y, k.skewY && (e *= y, r *= y)), j && (L += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, D += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset, Tt && (k.xPercent || k.yPercent) && (g = this.t.getBBox(), L += .01 * k.xPercent * g.width, D += .01 * k.yPercent * g.height), g = 1e-6, g > L && L > -g && (L = 0), g > D && D > -g && (D = 0)), _ = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (o * S | 0) / S + "," + L + "," + D + ")", j && Tt ? this.t.setAttribute("transform", "matrix(" + _) : C[kt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + _) : C[kt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + E + "," + L + "," + D + ")");
                        if (h && (g = 1e-4, g > M && M > -g && (M = N = 2e-5), g > E && E > -g && (E = N = 2e-5), !z || k.z || k.rotationX || k.rotationY || (z = 0)), P || k.skewX) P *= R, m = e = Math.cos(P), v = r = Math.sin(P), k.skewX && (P -= k.skewX * R, m = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (y = Math.tan(k.skewX * R), y = Math.sqrt(1 + y * y), m *= y, v *= y, k.skewY && (e *= y, r *= y))), i = -v, o = m;
                        else {
                            if (!(A || O || 1 !== N || z || j)) return void(C[kt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + D + "px," + F + "px)" + (1 !== M || 1 !== E ? " scale(" + M + "," + E + ")" : ""));
                            e = o = 1, i = r = 0
                        }
                        c = 1, n = s = a = l = u = p = 0, d = z ? -1 / z : 0, f = k.zOrigin, g = 1e-6, w = ",", b = "0", P = A * R, P && (m = Math.cos(P), v = Math.sin(P), a = -v,
                            u = d * -v, n = e * v, s = r * v, c = m, d *= m, e *= m, r *= m), P = O * R, P && (m = Math.cos(P), v = Math.sin(P), y = i * m + n * v, x = o * m + s * v, l = c * v, p = d * v, n = i * -v + n * m, s = o * -v + s * m, c *= m, d *= m, i = y, o = x), 1 !== N && (n *= N, s *= N, c *= N, d *= N), 1 !== E && (i *= E, o *= E, l *= E, p *= E), 1 !== M && (e *= M, r *= M, a *= M, u *= M), (f || j) && (f && (L += n * -f, D += s * -f, F += c * -f + f), j && (L += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, D += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset), g > L && L > -g && (L = b), g > D && D > -g && (D = b), g > F && F > -g && (F = 0)), _ = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", _ += (g > e && e > -g ? b : e) + w + (g > r && r > -g ? b : r) + w + (g > a && a > -g ? b : a), _ += w + (g > u && u > -g ? b : u) + w + (g > i && i > -g ? b : i) + w + (g > o && o > -g ? b : o), O || A || 1 !== N ? (_ += w + (g > l && l > -g ? b : l) + w + (g > p && p > -g ? b : p) + w + (g > n && n > -g ? b : n), _ += w + (g > s && s > -g ? b : s) + w + (g > c && c > -g ? b : c) + w + (g > d && d > -g ? b : d) + w) : _ += ",0,0,0,0,1,0,", _ += L + w + D + w + F + w + (z ? 1 + -F / z : 1) + ")", C[kt] = _
                    };
                c = At.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._lastParsedTransform === l) return o;
                        n._lastParsedTransform = l;
                        var c, u, p, d, h, f, g, m, v, y = t._gsTransform,
                            x = t.style,
                            _ = 1e-6,
                            w = St.length,
                            b = l,
                            T = {},
                            S = "transformOrigin",
                            k = zt(t, r, !0, l.parseTransform);
                        if (n._transform = k, "string" == typeof b.transform && kt) u = I.style, u[kt] = b.transform, u.display = "block", u.position = "absolute", j.body.appendChild(I), c = zt(I, null, !1), k.svg && (g = k.xOrigin, m = k.yOrigin, c.x -= k.xOffset, c.y -= k.yOffset, (b.transformOrigin || b.svgOrigin) && (p = {}, Rt(t, rt(b.transformOrigin), p, b.svgOrigin, b.smoothOrigin, !0), g = p.xOrigin, m = p.yOrigin, c.x -= p.xOffset - k.xOffset, c.y -= p.yOffset - k.yOffset), (g || m) && (v = $t(I, !0), c.x -= g - (g * v[0] + m * v[2]), c.y -= m - (g * v[1] + m * v[3]))), j.body.removeChild(I), c.perspective || (c.perspective = k.perspective), null != b.xPercent && (c.xPercent = st(b.xPercent, k.xPercent)), null != b.yPercent && (c.yPercent = st(b.yPercent, k.yPercent));
                        else if ("object" == typeof b) {
                            if (c = {
                                    scaleX: st(null != b.scaleX ? b.scaleX : b.scale, k.scaleX),
                                    scaleY: st(null != b.scaleY ? b.scaleY : b.scale, k.scaleY),
                                    scaleZ: st(b.scaleZ, k.scaleZ),
                                    x: st(b.x, k.x),
                                    y: st(b.y, k.y),
                                    z: st(b.z, k.z),
                                    xPercent: st(b.xPercent, k.xPercent),
                                    yPercent: st(b.yPercent, k.yPercent),
                                    perspective: st(b.transformPerspective, k.perspective)
                                }, f = b.directionalRotation, null != f)
                                if ("object" == typeof f)
                                    for (u in f) b[u] = f[u];
                                else b.rotation = f;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (c.x = 0, c.xPercent = st(b.x, k.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (c.y = 0, c.yPercent = st(b.y, k.yPercent)), c.rotation = at("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : k.rotation - k.skewY, k.rotation - k.skewY, "rotation", T), Ot && (c.rotationX = at("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", T), c.rotationY = at("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", T)), c.skewX = at(b.skewX, k.skewX - k.skewY), (c.skewY = at(b.skewY, k.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                        }
                        for (Ot && null != b.force3D && (k.force3D = b.force3D, h = !0), k.skewType = b.skewType || k.skewType || s.defaultSkewType, d = k.force3D || k.z || k.rotationX || k.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == b.scale || (c.scaleZ = 1); --w > -1;) i = St[w], p = c[i] - k[i], (p > _ || -_ > p || null != b[i] || null != F[i]) && (h = !0, o = new mt(k, i, k[i], p, o), i in T && (o.e = T[i]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return p = b.transformOrigin, k.svg && (p || b.svgOrigin) && (g = k.xOffset, m = k.yOffset, Rt(t, rt(p), c, b.svgOrigin, b.smoothOrigin), o = vt(k, "xOrigin", (y ? k : c).xOrigin, c.xOrigin, o, S), o = vt(k, "yOrigin", (y ? k : c).yOrigin, c.yOrigin, o, S), (g !== k.xOffset || m !== k.yOffset) && (o = vt(k, "xOffset", y ? g : k.xOffset, k.xOffset, o, S), o = vt(k, "yOffset", y ? m : k.yOffset, k.yOffset, o, S)), p = Tt ? null : "0px 0px"), (p || Ot && d && k.zOrigin) && (kt ? (h = !0, i = Pt, p = (p || Z(t, i, r, !1, "50% 50%")) + "", o = new mt(x, i, 0, 0, o, -1, S), o.b = x[i], o.plugin = a, Ot ? (u = k.zOrigin, p = p.split(" "), k.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new mt(k, "zOrigin", 0, 0, o, -1, o.n), o.b = u, o.xs0 = o.e = k.zOrigin) : o.xs0 = o.e = p) : rt(p + "", k)), h && (n._transformType = k.svg && Tt || !d && 3 !== this._transformType ? 2 : 3), o
                    },
                    prefix: !0
                }), wt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), wt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, s, a) {
                        e = this.format(e);
                        var l, c, u, p, d, h, f, g, m, v, y, x, _, w, b, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = G(S[c])), d = p = Z(t, S[c], r, !1, "0px"), -1 !== d.indexOf(" ") && (p = d.split(" "), d = p[0], p = p[1]), h = u = l[c], f = parseFloat(d), x = d.substr((f + "").length), _ = "=" === h.charAt(1), _ ? (g = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), g *= parseFloat(h), y = h.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(h), y = h.substr((g + "").length)), "" === y && (y = n[i] || x), y !== x && (w = J(t, "borderLeft", f, x), b = J(t, "borderTop", f, x), "%" === y ? (d = w / m * 100 + "%", p = b / v * 100 + "%") : "em" === y ? (T = J(t, "borderLeft", 1, "em"), d = w / T + "em", p = b / T + "em") : (d = w + "px", p = b + "px"), _ && (h = parseFloat(d) + g + y, u = parseFloat(p) + g + y)), s = yt(k, S[c], d + " " + p, h + " " + u, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: ht("0px 0px 0px 0px", !1, !0)
                }), wt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, o, s) {
                        return yt(t.style, i, this.format(Z(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                    },
                    prefix: !0,
                    formatter: ht("0px 0px", !1, !0)
                }), wt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c, u, p, d, h = "background-position",
                            f = r || Q(t, null),
                            m = this.format((f ? g ? f.getPropertyValue(h + "-x") + " " + f.getPropertyValue(h + "-y") : f.getPropertyValue(h) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = Z(t, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                            for (a = m.split(" "), l = v.split(" "), X.setAttribute("src", d), c = 2; --c > -1;) m = a[c], u = -1 !== m.indexOf("%"), u !== (-1 !== l[c].indexOf("%")) && (p = 0 === c ? t.offsetWidth - X.width : t.offsetHeight - X.height, a[c] = u ? parseFloat(m) / 100 * p + "px" : parseFloat(m) / p * 100 + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(t.style, m, v, o, s)
                    },
                    formatter: rt
                }), wt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: rt
                }), wt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), wt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), wt("transformStyle", {
                    prefix: !0
                }), wt("backfaceVisibility", {
                    prefix: !0
                }), wt("userSelect", {
                    prefix: !0
                }), wt("margin", {
                    parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                }), wt("padding", {
                    parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), wt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c;
                        return 9 > g ? (l = t.currentStyle, c = 8 > g ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(Z(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), wt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), wt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), wt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, s) {
                        var a = Z(t, "borderTopWidth", r, !1, "0px"),
                            l = this.format(e).split(" "),
                            c = l[0].replace(_, "");
                        return "px" !== c && (a = parseFloat(a) / J(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + Z(t, "borderTopStyle", r, !1, "solid") + " " + Z(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                    }
                }), wt("borderWidth", {
                    parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), wt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, o) {
                        var s = t.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new mt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                    }
                });
                var Ht = function(t) {
                    var e, i = this.t,
                        n = i.filter || Z(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
                };
                wt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, s) {
                        var a = parseFloat(Z(t, "opacity", r, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === Z(t, "visibility", r) && 0 !== e && (a = 0), Y ? o = new mt(l, "opacity", a, e - a, o) : (o = new mt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Ht), c && (o = new mt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Bt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Yt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Bt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                wt("className", {
                    parser: function(t, e, n, o, s, a, l) {
                        var c, u, p, d, h, f = t.getAttribute("class") || "",
                            g = t.style.cssText;
                        if (s = o._classNamePT = new mt(t, n, 0, 0, s, 2), s.setRatio = Yt, s.pr = -11, i = !0, s.b = f, u = K(t, r), p = t._gsClassPT) {
                            for (d = {}, h = p.data; h;) d[h.p] = 1, h = h._next;
                            p.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), c = tt(t, u, K(t), l, d), t.setAttribute("class", f), s.data = c.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, c.difs, s, a)
                    }
                });
                var qt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o, s = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pt : l[i].p), Bt(s, i);
                        r && (Bt(s, kt), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (wt("clearProps", {
                        parser: function(t, e, n, r, o) {
                            return o = new mt(t, n, 0, 0, o, 2), o.setRatio = qt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), xt = c.length; xt--;) bt(c[xt]);
                c = s.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = Q(t, ""), o = this._overwriteProps;
                    var c, h, g, m, v, y, x, _, w, T = t.style;
                    if (p && "" === T.zIndex && (c = Z(t, "zIndex", r), ("auto" === c || "" === c) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, c = K(t, r), T.cssText = m + ";" + e, c = tt(t, c, K(t)).difs, !Y && b.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, T.cssText = m), e.className ? this._firstPT = h = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = h = this.parse(t, e, null), this._transformType) {
                        for (w = 3 === this._transformType, kt ? d && (p = !0, "" === T.zIndex && (x = Z(t, "zIndex", r), ("auto" === x || "" === x) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : T.zoom = 1, g = h; g && g._next;) g = g._next;
                        _ = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, g), _.setRatio = kt ? Xt : It, _.data = this._transform || zt(t, r, !0), _.tween = a, _.pr = -1, o.pop()
                    }
                    if (i) {
                        for (; h;) {
                            for (y = h._next, g = m; g && g.pr > h.pr;) g = g._next;
                            (h._prev = g ? g._prev : v) ? h._prev._next = h: m = h, (h._next = g) ? g._prev = h : v = h, h = y
                        }
                        this._firstPT = m
                    }
                    return !0
                }, c.parse = function(t, e, i, o) {
                    var s, a, c, p, d, h, f, g, m, v, y = t.style;
                    for (s in e) h = e[s], a = l[s], a ? i = a.parse(t, h, s, this, i, o, e) : (d = Z(t, s, r) + "", m = "string" == typeof h, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && S.test(h) ? (m || (h = ut(h), h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), i = yt(y, s, d, h, !0, "transparent", i, 0, o)) : m && L.test(h) ? i = yt(y, s, d, h, !0, null, i, 0, o) : (c = parseFloat(d), f = c || 0 === c ? d.substr((c + "").length) : "", ("" === d || "auto" === d) && ("width" === s || "height" === s ? (c = nt(t, s, r), f = "px") : "left" === s || "top" === s ? (c = $(t, s, r), f = "px") : (c = "opacity" !== s ? 0 : 1, f = "")), v = m && "=" === h.charAt(1), v ? (p = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), p *= parseFloat(h), g = h.replace(_, "")) : (p = parseFloat(h), g = m ? h.replace(_, "") : ""), "" === g && (g = s in n ? n[s] : f), h = p || 0 === p ? (v ? p + c : p) + g : e[s], f !== g && "" !== g && (p || 0 === p) && c && (c = J(t, s, c, f), "%" === g ? (c /= J(t, s, 100, "%") / 100, e.strictUnits !== !0 && (d = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= J(t, s, 1, g) : "px" !== g && (p = J(t, s, p, g), g = "px"), v && (p || 0 === p) && (h = p + c + g)), v && (p += c), !c && 0 !== c || !p && 0 !== p ? void 0 !== y[s] && (h || h + "" != "NaN" && null != h) ? (i = new mt(y, s, p || c || 0, 0, i, -1, s, !1, 0, d, h), i.xs0 = "none" !== h || "display" !== s && -1 === s.indexOf("Style") ? h : d) : W("invalid " + s + " tween value: " + e[s]) : (i = new mt(y, s, c, p - c, i, 0, s, u !== !1 && ("px" === g || "zIndex" === s), 0, d, h), i.xs0 = g))), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, c.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, c._enableTransforms = function(t) {
                    this._transform = this._transform || zt(this._target, r, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Wt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                c._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Wt, n.data = this
                }, c._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, c._kill = function(e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
                };
                var Vt = function(t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Vt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(K(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Vt(o, e, i)
                };
                return s.cascadeTo = function(t, i, n) {
                    var r, o, s, a, l = e.to(t, i, n),
                        c = [l],
                        u = [],
                        p = [],
                        d = [],
                        h = e._internals.reservedProps;
                    for (t = l._targets || l.target, Vt(t, u, d), l.render(i, !0, !0), Vt(t, p), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;)
                        if (o = tt(d[r], u[r], p[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) h[s] && (o[s] = n[s]);
                            a = {};
                            for (s in o) a[s] = u[r][s];
                            c.push(e.fromTo(d[r], i, a, o))
                        } return c
                }, t.activate([s]), s
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = 1;
                    for (s = o.length; --s > -1;)
                        for (t = o[s], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e, i) {
                        var n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, o, s, a, l, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = s - o, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= c, a !== a % (c / 2) && (a = 0 > a ? a + c : a - c)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * c) % c - (a / c | 0) * c : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * c) % c - (a / c | 0) * c)), (a > u || -u > a) && (this._addTween(t, n, o, o + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    c = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    u = t.register || function() {},
                    p = function(t, e, i, n, r) {
                        var o = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return u(o, t), o
                    },
                    d = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    h = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    f = p("Back", h("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), h("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), h("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    g = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = g.prototype = new t;
                return m.constructor = g, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
                    return new g(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, o, s, a, l = e.taper || "none", c = [], u = 0, p = 0 | (e.points || 20), h = p, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --h > -1;) i = f ? Math.random() : 1 / p * h, n = m ? m.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = o * o * .5 * v) : (o = 2 * (1 - i), r = o * o * .5 * v), f ? n += Math.random() * r - .5 * r : h % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new d(1, 1, null), h = p; --h > -1;) s = c[h], a = new d(s.x, s.y, a);
                    this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, p("Bounce", c("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), c("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), c("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), p("Circ", c("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), c("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), c("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, p("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), p("Expo", c("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), c("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), c("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), p("Sine", c("SineOut", function(t) {
                    return Math.sin(t * a)
                }), c("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), c("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var r, o, s, a, l, c = function(t) {
                    var e, i = t.split("."),
                        r = n;
                    for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                    return r
                },
                u = c("com.greensock"),
                p = 1e-10,
                d = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                h = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                g = {},
                m = function(r, o, s, a) {
                    this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = s;
                    var l = [];
                    this.check = function(u) {
                        for (var p, d, h, f, v, y = o.length, x = y; --y > -1;)(p = g[o[y]] || new m(o[y], [])).gsClass ? (l[y] = p.gsClass, x--) : u && p.sc.push(this);
                        if (0 === x && s) {
                            if (d = ("com.greensock." + r).split("."), h = d.pop(), f = c(d.join("."))[h] = this.gsClass = s.apply(s, l), a)
                                if (n[h] = f, v = "undefined" != typeof module && module.exports, !v && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                    return f
                                });
                                else if (v)
                                if (r === e) {
                                    module.exports = i[e] = f;
                                    for (y in i) f[y] = i[y]
                                } else i[e] && (i[e][h] = f);
                            for (y = 0; y < this.sc.length; y++) this.sc[y].check()
                        }
                    }, this.check(!0)
                },
                v = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                y = u._class = function(t, e, i) {
                    return e = e || function() {}, v(t, [], function() {
                        return e
                    }, i), e
                };
            v.globals = n;
            var x = [0, 0, 1, 1],
                _ = [],
                w = y("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
                }, !0),
                b = w.map = {},
                T = w.register = function(t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), c = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (o = l[c], r = n ? y("easing." + o, null, !0) : u.easing[o] || {}, s = p.length; --s > -1;) a = p[s], b[o + "." + a] = b[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = w.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = r.length; --o > -1;) s = r[o] + ",Power" + o, T(new w(null, null, 1, o), s, "easeOut", !0), T(new w(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), T(new w(null, null, 3, o), s, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var S = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = S.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, s, c = this._listeners[t],
                    u = 0;
                for (this !== a || l || a.wake(), null == c && (this._listeners[t] = c = []), s = c.length; --s > -1;) o = c[s], o.c === e && o.s === i ? c.splice(s, 1) : 0 === u && o.pr < r && (u = s + 1);
                c.splice(u, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                })
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                O = P();
            for (r = ["ms", "moz", "webkit", "o"], o = r.length; --o > -1 && !k;) k = t[r[o] + "RequestAnimationFrame"], C = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, n, r, o, s, c = this,
                    u = P(),
                    d = !(e === !1 || !k) && "auto",
                    f = 500,
                    g = 33,
                    m = "tick",
                    v = function(t) {
                        var e, a, l = P() - O;
                        l > f && (u += l - g), O += l, c.time = (O - u) / 1e3, e = c.time - s, (!i || e > 0 || t === !0) && (c.frame++, s += e + (e >= o ? .004 : o - e), a = !0), t !== !0 && (r = n(v)), a && c.dispatchEvent(m)
                    };
                S.call(c), c.time = c.frame = 0, c.tick = function() {
                    v(!0)
                }, c.lagSmoothing = function(t, e) {
                    f = t || 1 / p, g = Math.min(e, f, 0)
                }, c.sleep = function() {
                    null != r && (d && C ? C(r) : clearTimeout(r), n = h, r = null, c === a && (l = !1))
                }, c.wake = function(t) {
                    null !== r ? c.sleep() : t ? u += -O + (O = P()) : c.frame > 10 && (O = P() - f + 5), n = 0 === i ? h : d && k ? k : function(t) {
                        return setTimeout(t, 1e3 * (s - c.time) + 1 | 0)
                    }, c === a && (l = !0), v(2)
                }, c.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), s = this.time + o, void c.wake()) : i
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), d = t, void c.fps(i)) : d
                }, c.fps(t), setTimeout(function() {
                    "auto" === d && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
                }, 1500)
            }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
            var A = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, G) {
                    l || a.wake();
                    var i = this.vars.useFrames ? U : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new u.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var M = function() {
                l && P() - O > 2e3 && a.wake(), setTimeout(M, 2e3)
            };
            M(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function(t, e, i) {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, s._enabled = function(t, e) {
                return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (l || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (D.length && Z(), this.render(t, e, !1), D.length && Z())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || p, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var E = y("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = E.prototype = new A, s.constructor = E, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e, i, n) {
                var r, o;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return l || a.wake(), this._totalTime
            };
            var N = y("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = N.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : N.selector(e) || e;
                    var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? V[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = s = d(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(d(o))) : (this._siblings[r] = J(o, this, !1), 1 === l && this._siblings[r].length > 1 && K(o, this, null, 1, this._siblings[r])) : (o = s[r--] = N.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -p, this.render(Math.min(0, -this._delay)))
                }, !0),
                L = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function(t, e) {
                    var i, n = {};
                    for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = N.prototype = new A, s.constructor = N, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, N.version = "1.18.5", N.defaultEase = s._ease = new w(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = a, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, N.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (N.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var D = [],
                F = {},
                j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                z = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                I = function(t, e, i, n) {
                    var r, o, s, a, l, c, u, p = [t, e],
                        d = 0,
                        h = "",
                        f = 0;
                    for (p.start = t, i && (i(p), t = p[0], e = p[1]), p.length = 0, r = t.match(j) || [], o = e.match(j) || [], n && (n._next = null, n.blob = 1, p._firstPT = n), l = o.length, a = 0; l > a; a++) u = o[a], c = e.substr(d, e.indexOf(u, d) - d), h += c || !a ? c : ",", d += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), u === r[a] || r.length <= a ? h += u : (h && (p.push(h), h = ""), s = parseFloat(r[a]), p.push(s), p._firstPT = {
                        _next: p._firstPT,
                        t: p,
                        p: p.length - 1,
                        s: s,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                        f: 0,
                        r: f && 4 > f
                    }), d += u.length;
                    return h += e.substr(d), h && p.push(h), p.setRatio = z, p
                },
                X = function(t, e, i, n, r, o, s, a) {
                    var l, c, u = "get" === i ? t[e] : i,
                        p = typeof t[e],
                        d = "string" == typeof n && "=" === n.charAt(1),
                        h = {
                            t: t,
                            p: e,
                            s: u,
                            f: "function" === p,
                            pg: 0,
                            n: r || e,
                            r: o,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
                        };
                    return "number" !== p && ("function" === p && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), h.s = u = s ? t[c](s) : t[c]()), "string" == typeof u && (s || isNaN(u)) ? (h.fp = s, l = I(u, n, a || N.defaultStringFilter, h), h = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : d || (h.s = parseFloat(u), h.c = parseFloat(n) - h.s || 0)), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h, h) : void 0
                },
                H = N._internals = {
                    isArray: f,
                    isSelector: L,
                    lazyTweens: D,
                    blobDif: I
                },
                B = N._plugins = {},
                Y = H.tweenLookup = {},
                q = 0,
                W = H.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                U = A._rootFramesTimeline = new E,
                G = A._rootTimeline = new E,
                Q = 30,
                Z = H.lazyRender = function() {
                    var t, e = D.length;
                    for (F = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    D.length = 0
                };
            G._startTime = a.time, U._startTime = a.frame, G._active = U._active = !0, setTimeout(Z, 1), A._updateRoot = N.render = function() {
                var t, e, i;
                if (D.length && Z(), G.render((a.time - G._startTime) * G._timeScale, !1, !1), U.render((a.frame - U._startTime) * U._timeScale, !1, !1), D.length && Z(), a.frame >= Q) {
                    Q = a.frame + (parseInt(N.autoSleep, 10) || 120);
                    for (i in Y) {
                        for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i]
                    }
                    if (i = G._first, (!i || i._paused) && N.autoSleep && !U._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var J = function(t, e, i) {
                    var n, r, o = t._gsTweenID;
                    if (Y[o || (t._gsTweenID = o = "t" + q++)] || (Y[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = Y[o].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return Y[o].tweens
                },
                $ = function(t, e, i, n) {
                    var r, o, s = t.vars.onOverwrite;
                    return s && (r = s(t, e, i, n)), s = N.onOverwrite, s && (o = s(t, e, i, n)), r !== !1 && o !== !1
                },
                K = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                            else if (5 === n) break;
                        return s
                    }
                    var c, u = e._startTime + p,
                        d = [],
                        h = 0,
                        f = 0 === e._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || tt(e, 0, f), 0 === tt(a, c, f) && (d[h++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && u - a._startTime <= 2e-10 || (d[h++] = a)));
                    for (o = h; --o > -1;)
                        if (a = d[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !$(a, e)) continue;
                            a._enabled(!1, !1) && (s = !0)
                        } return s
                },
                tt = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * p > o - e ? p : (o += t.totalDuration() / t._timeScale / r) > e + p ? 0 : o - e - p
                };
            s._init = function() {
                var t, e, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = N.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in o) W[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = N.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, o.easeParams) : b[c] || N.defaultEase : N.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (e && N._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var o, s, a, l, c, u;
                if (null == e) return !1;
                F[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && B.css && this.vars.autoCSS !== !1 && R(this.vars, e);
                for (o in this.vars)
                    if (u = this.vars[o], W[o]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if (B[o] && (l = new B[o])._onInitTween(e, this.vars[o], this)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: l._priority
                        }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = X.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > c || 0 >= t && t >= -1e-7 || c === p && "isPause" !== this.data) && c !== t && (i = !0, c > p && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : p);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== p || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : p)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        d = this._easeType,
                        h = this._easePower;
                    (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === d ? this.ratio = 1 - u : 2 === d ? this.ratio = u : .5 > t / l ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, D.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === p && s !== p && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                var n, r, o, s, a, l, c, u, p, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || L(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                            for (o in c) a[o] && (p || (p = []), p.push(o));
                            if ((p || !t) && !$(this, i, e, p)) return !1
                        }
                        for (o in c)(s = a[o]) && (d && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -p, this.render(Math.min(0, -this._delay))), this
            }, s._enabled = function(t, e) {
                if (l || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, N.to = function(t, e, i) {
                return new N(t, e, i)
            }, N.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
            }, N.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new N(t, e, n)
            }, N.delayedCall = function(t, e, i, n, r) {
                return new N(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, N.set = function(t, e) {
                return new N(t, 0, e)
            }, N.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : N.selector(t) || t;
                var i, n, r, o;
                if ((f(t) || L(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(N.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = J(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = N.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var et = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (s = et.prototype, et.version = "1.18.0", et.API = 2, s._firstPT = null, s._addTween = X, s.setRatio = z, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, N._onPluginEvent = function(t, e) {
                    var i, n, r, o, s, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, et.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === et.API && (B[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = s.prototype = new et(i);
                    a.constructor = s, s.API = t.API;
                    for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return s.version = t.version, et.activate([s]), s
                }, r = t._gsQueue) {
                for (o = 0; o < r.length; o++) r[o]();
                for (s in g) g[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), ! function(t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
    }(this, function(t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function(t) {
            return !!t
        }), t.Scene.extend(function() {
            var t, n = this;
            n.on("progress.plugin_gsap", function() {
                r()
            }), n.on("destroy.plugin_gsap", function(t) {
                n.removeTween(t.reset)
            });
            var r = function() {
                if (t) {
                    var e = n.progress(),
                        i = n.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            n.setTween = function(o, s, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = s, s = 1), o = e.to(o, s, a));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(o) : o, l.pause()
                } catch (t) {
                    return n
                }
                return t && n.removeTween(), t = l, o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), r(), n
            }, n.removeTween = function(e) {
                return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n
            }
        })
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], e) : "object" == typeof exports ? e(require("scrollmagic"), require("jquery")) : e(t.ScrollMagic, t.jQuery)
    }(this, function(t, e) {
        "use strict";
        t._util.get.elements = function(t) {
            return e(t).toArray()
        }, t._util.addClass = function(t, i) {
            e(t).addClass(i)
        }, t._util.removeClass = function(t, i) {
            e(t).removeClass(i)
        }, e.ScrollMagic = t
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(t, e, i, n) {
            var r, o, s, a, l = function(e, i) {
                    t.call(this, "throwProps"), this._overwriteProps.length = 0
                },
                c = 999999999999999,
                u = 1e-10,
                p = _gsScope._gsDefine.globals,
                d = !1,
                h = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                },
                f = function(t, e, i, n, r) {
                    var o, s, a, l, u = e.length,
                        p = 0,
                        d = c;
                    if ("object" == typeof t) {
                        for (; --u > -1;) {
                            o = e[u], s = 0;
                            for (a in t) l = o[a] - t[a], s += l * l;
                            d > s && (p = u, d = s)
                        }
                        if (c > (r || c) && r < Math.sqrt(d)) return t
                    } else
                        for (; --u > -1;) o = e[u], s = o - t, 0 > s && (s = -s), d > s && o >= n && i >= o && (p = u, d = s);
                    return e[p]
                },
                g = function(t, e, i, n, r, o) {
                    if ("auto" === t.end) return t;
                    var s, a, l = t.end;
                    if (i = isNaN(i) ? c : i, n = isNaN(n) ? -c : n, "object" == typeof e) {
                        if (s = e.calculated ? e : ("function" == typeof l ? l(e) : f(e, l, i, n, o)) || e, !e.calculated) {
                            for (a in s) e[a] = s[a];
                            e.calculated = !0
                        }
                        s = s[r]
                    } else s = "function" == typeof l ? l(e) : l instanceof Array ? f(e, l, i, n, o) : Number(l);
                    return s > i ? s = i : n > s && (s = n), {
                        max: s,
                        min: s,
                        unitFactor: t.unitFactor
                    }
                },
                m = function(t, e, i) {
                    for (var n in e) void 0 === t[n] && n !== i && (t[n] = e[n]);
                    return t
                },
                v = l.calculateChange = function(t, n, r, o) {
                    null == o && (o = .05);
                    var s = n instanceof i ? n : n ? new i(n) : e.defaultEase;
                    return r * o * t / s.getRatio(o)
                },
                y = l.calculateDuration = function(t, n, r, o, s) {
                    s = s || .05;
                    var a = o instanceof i ? o : o ? new i(o) : e.defaultEase;
                    return Math.abs((n - t) * a.getRatio(s) / r / s)
                },
                x = l.calculateTweenDuration = function(t, r, o, s, a, c) {
                    if ("string" == typeof t && (t = e.selector(t)), !t) return 0;
                    null == o && (o = 10), null == s && (s = .2), null == a && (a = 1), t.length && (t = t[0] || t);
                    var p, h, f, x, _, w, b, T, S, k, C, P, O, A = 0,
                        M = 9999999999,
                        E = r.throwProps || r,
                        N = r.ease instanceof i ? r.ease : r.ease ? new i(r.ease) : e.defaultEase,
                        L = isNaN(E.checkpoint) ? .05 : Number(E.checkpoint),
                        R = isNaN(E.resistance) ? l.defaultResistance : Number(E.resistance);
                    if (E.linkedProps)
                        for (P = E.linkedProps.split(","), C = {}, O = 0; O < P.length; O++) p = P[O], h = E[p], h && (void 0 !== h.velocity && "number" == typeof h.velocity ? x = Number(h.velocity) || 0 : (S = S || n.getByTarget(t), x = S && S.isTrackingProp(p) ? S.getVelocity(p) : 0), _ = isNaN(h.resistance) ? R : Number(h.resistance), f = x * _ > 0 ? x / _ : x / -_, w = "function" == typeof t[p] ? t[p.indexOf("set") || "function" != typeof t["get" + p.substr(3)] ? p : "get" + p.substr(3)]() : t[p] || 0, C[p] = w + v(x, N, f, L));
                    for (p in E) "resistance" !== p && "checkpoint" !== p && "preventOvershoot" !== p && "linkedProps" !== p && "radius" !== p && (h = E[p], "object" != typeof h && (S = S || n.getByTarget(t), S && S.isTrackingProp(p) ? h = "number" == typeof h ? {
                        velocity: h
                    } : {
                        velocity: S.getVelocity(p)
                    } : (x = Number(h) || 0, f = x * R > 0 ? x / R : x / -R)), "object" == typeof h && (void 0 !== h.velocity && "number" == typeof h.velocity ? x = Number(h.velocity) || 0 : (S = S || n.getByTarget(t), x = S && S.isTrackingProp(p) ? S.getVelocity(p) : 0), _ = isNaN(h.resistance) ? R : Number(h.resistance), f = x * _ > 0 ? x / _ : x / -_, w = "function" == typeof t[p] ? t[p.indexOf("set") || "function" != typeof t["get" + p.substr(3)] ? p : "get" + p.substr(3)]() : t[p] || 0, b = w + v(x, N, f, L), void 0 !== h.end && (h = g(h, C && p in C ? C : b, h.max, h.min, p, E.radius), (c || d) && (E[p] = m(h, E[p], "end"))), void 0 !== h.max && b > Number(h.max) + u ? (k = h.unitFactor || l.defaultUnitFactors[p] || 1, T = w > h.max && h.min !== h.max || x * k > -15 && 45 > x * k ? s + .1 * (o - s) : y(w, h.max, x, N, L), M > T + a && (M = T + a)) : void 0 !== h.min && b < Number(h.min) - u && (k = h.unitFactor || l.defaultUnitFactors[p] || 1, T = w < h.min && h.min !== h.max || x * k > -45 && 15 > x * k ? s + .1 * (o - s) : y(w, h.min, x, N, L), M > T + a && (M = T + a)), T > A && (A = T)), f > A && (A = f));
                    return A > M && (A = M), A > o ? o : s > A ? s : A
                },
                _ = l.prototype = new t("throwProps");
            return _.constructor = l, l.version = "0.11.1", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.defaultUnitFactors = {
                time: 1e3,
                totalTime: 1e3
            }, l.track = function(t, e, i) {
                return n.track(t, e, i)
            }, l.untrack = function(t, e) {
                n.untrack(t, e)
            }, l.isTracking = function(t, e) {
                return n.isTracking(t, e)
            }, l.getVelocity = function(t, e) {
                var i = n.getByTarget(t);
                return i ? i.getVelocity(e) : NaN
            }, l._cssRegister = function() {
                var t = p.com.greensock.plugins.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        s = e._setPluginRatio,
                        a = e.CSSPropTween;
                    e._registerComplexSpecialProp("throwProps", {
                        parser: function(t, e, c, u, p, d) {
                            d = new l;
                            var f, g, m, v, y, x = {},
                                _ = {},
                                w = {},
                                b = {},
                                T = {},
                                S = {};
                            o = {};
                            for (m in e) "resistance" !== m && "preventOvershoot" !== m && "linkedProps" !== m && "radius" !== m && (g = e[m], "object" == typeof g ? (void 0 !== g.velocity && "number" == typeof g.velocity ? x[m] = Number(g.velocity) || 0 : (y = y || n.getByTarget(t), x[m] = y && y.isTrackingProp(m) ? y.getVelocity(m) : 0), void 0 !== g.end && (b[m] = g.end), void 0 !== g.min && (_[m] = g.min), void 0 !== g.max && (w[m] = g.max), g.preventOvershoot && (S[m] = !0), void 0 !== g.resistance && (f = !0, T[m] = g.resistance)) : "number" == typeof g ? x[m] = g : (y = y || n.getByTarget(t), y && y.isTrackingProp(m) ? x[m] = y.getVelocity(m) : x[m] = g || 0), h[m] && u._enableTransforms(2 === h[m]));
                            v = i(t, x, u, p, d), r = v.proxy, x = v.end;
                            for (m in r) o[m] = {
                                velocity: x[m],
                                min: _[m],
                                max: w[m],
                                end: b[m],
                                resistance: T[m],
                                preventOvershoot: S[m]
                            };
                            return null != e.resistance && (o.resistance = e.resistance), null != e.linkedProps && (o.linkedProps = e.linkedProps), null != e.radius && (o.radius = e.radius), e.preventOvershoot && (o.preventOvershoot = !0), p = new a(t, "throwProps", 0, 0, v.pt, 2), u._overwriteProps.pop(), p.plugin = d, p.setRatio = s, p.data = v, d._onInitTween(r, o, u._tween), p
                        }
                    })
                }
            }, l.to = function(t, i, n, l, c) {
                i.throwProps || (i = {
                    throwProps: i
                }), 0 === c && (i.throwProps.preventOvershoot = !0), d = !0;
                var u = new e(t, l || 1, i);
                return u.render(0, !0, !0), u.vars.css ? (u.duration(x(r, {
                    throwProps: o,
                    ease: i.ease
                }, n, l, c)), u._delay && !u.vars.immediateRender ? u.invalidate() : s._onInitTween(r, a, u), d = !1, u) : (u.kill(), u = new e(t, x(t, i, n, l, c), i), d = !1, u)
            }, _._onInitTween = function(t, e, i, r) {
                this.target = t, this._props = [], s = this, a = e;
                var o, l, c, u, p, h, f, y, x, _, w, b, T = i._ease,
                    S = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint),
                    k = i._duration,
                    C = e.preventOvershoot,
                    P = 0;
                if (e.linkedProps)
                    for (w = e.linkedProps.split(","), _ = {}, b = 0; b < w.length; b++) o = w[b], l = e[o], l && (void 0 !== l.velocity && "number" == typeof l.velocity ? p = Number(l.velocity) || 0 : (x = x || n.getByTarget(t), p = x && x.isTrackingProp(o) ? x.getVelocity(o) : 0), c = "function" == typeof t[o] ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : t[o] || 0, _[o] = c + v(p, T, k, S));
                for (o in e)
                    if ("resistance" !== o && "checkpoint" !== o && "preventOvershoot" !== o && "linkedProps" !== o && "radius" !== o) {
                        if (l = e[o], "function" == typeof l && (l = l(r, t)), "number" == typeof l) p = Number(l) || 0;
                        else if ("object" != typeof l || isNaN(l.velocity)) {
                            if (x = x || n.getByTarget(t), !x || !x.isTrackingProp(o)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + o;
                            p = x.getVelocity(o)
                        } else p = Number(l.velocity);
                        h = v(p, T, k, S), y = 0, u = "function" == typeof t[o], c = u ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : t[o], "object" == typeof l && (f = c + h, void 0 !== l.end && (l = g(l, _ && o in _ ? _ : f, l.max, l.min, o, e.radius), d && (e[o] = m(l, e[o], "end"))), void 0 !== l.max && Number(l.max) < f ? C || l.preventOvershoot ? h = l.max - c : y = l.max - c - h : void 0 !== l.min && Number(l.min) > f && (C || l.preventOvershoot ? h = l.min - c : y = l.min - c - h)), this._overwriteProps[P] = o, this._props[P++] = {
                            p: o,
                            s: c,
                            c1: h,
                            c2: y,
                            f: u,
                            r: !1
                        }
                    } return !0
            }, _._kill = function(e) {
                for (var i = this._props.length; --i > -1;) null != e[this._props[i].p] && this._props.splice(i, 1);
                return t.prototype._kill.call(this, e)
            }, _._mod = function(t) {
                for (var e, i = this._props, n = i.length; --n > -1;) e = t[i[n].p] || t.throwProps, "function" == typeof e && (i[n].m = e)
            }, _.setRatio = function(t) {
                for (var e, i, n = this._props.length; --n > -1;) e = this._props[n], i = e.s + e.c1 * t + e.c2 * t * t, e.m ? i = e.m(i, this.target) : 1 === t && (i = (1e4 * i + (0 > i ? -.5 : .5) | 0) / 1e4), e.f ? this.target[e.p](i) : this.target[e.p] = i
            }, t.activate([l]), l
        }, !0), _gsScope._gsDefine("utils.VelocityTracker", ["TweenLite"], function(t) {
            var e, i, n, r, o = /([A-Z])/g,
                s = {},
                a = _gsScope.document,
                l = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                },
                c = a.defaultView ? a.defaultView.getComputedStyle : function() {},
                u = function(t, e, i) {
                    var n = (t._gsTransform || s)[e];
                    return n || 0 === n ? n : (t.style[e] ? n = t.style[e] : (i = i || c(t, null)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(o, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), parseFloat(n) || 0)
                },
                p = t.ticker,
                d = function(t, e, i) {
                    this.p = t, this.f = e, this.v1 = this.v2 = 0, this.t1 = this.t2 = p.time, this.css = !1, this.type = "", this._prev = null, i && (this._next = i, i._prev = this)
                },
                h = function() {
                    var t, i, o = e,
                        s = p.time;
                    if (s - n >= .03)
                        for (r = n, n = s; o;) {
                            for (i = o._firstVP; i;) t = i.css ? u(o.target, i.p) : i.f ? o.target[i.p]() : o.target[i.p], (t !== i.v1 || s - i.t1 > .15) && (i.v2 = i.v1, i.v1 = t, i.t2 = i.t1, i.t1 = s), i = i._next;
                            o = o._next
                        }
                },
                f = function(t) {
                    this._lookup = {}, this.target = t, this.elem = !(!t.style || !t.nodeType), i || (p.addEventListener("tick", h, null, !1, -100), n = r = p.time, i = !0), e && (this._next = e, e._prev = this), e = this
                },
                g = f.getByTarget = function(t) {
                    for (var i = e; i;) {
                        if (i.target === t) return i;
                        i = i._next
                    }
                },
                m = f.prototype;
            return m.addProp = function(e, i) {
                if (!this._lookup[e]) {
                    var n = this.target,
                        r = "function" == typeof n[e],
                        o = r ? this._altProp(e) : e,
                        s = this._firstVP;
                    this._firstVP = this._lookup[e] = this._lookup[o] = s = new d(o !== e && 0 === e.indexOf("set") ? o : e, r, s), s.css = this.elem && (void 0 !== this.target.style[s.p] || l[s.p]), s.css && l[s.p] && !n._gsTransform && t.set(n, {
                        x: "+=0",
                        overwrite: !1
                    }), s.type = i || s.css && 0 === e.indexOf("rotation") ? "deg" : "", s.v1 = s.v2 = s.css ? u(n, s.p) : r ? n[s.p]() : n[s.p]
                }
            }, m.removeProp = function(t) {
                var e = this._lookup[t];
                e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next), e._next && (e._next._prev = e._prev), this._lookup[t] = 0, e.f && (this._lookup[this._altProp(t)] = 0))
            }, m.isTrackingProp = function(t) {
                return this._lookup[t] instanceof d
            }, m.getVelocity = function(t) {
                var e, i, n, r = this._lookup[t],
                    o = this.target;
                if (!r) throw "The velocity of " + t + " is not being tracked.";
                return e = r.css ? u(o, r.p) : r.f ? o[r.p]() : o[r.p], i = e - r.v2, ("rad" === r.type || "deg" === r.type) && (n = "rad" === r.type ? 2 * Math.PI : 360, i %= n, i !== i % (n / 2) && (i = 0 > i ? i + n : i - n)), i / (p.time - r.t2)
            }, m._altProp = function(t) {
                var e = t.substr(0, 3),
                    i = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);
                return "function" == typeof this.target[i] ? i : t
            }, f.getByTarget = function(i) {
                var n = e;
                for ("string" == typeof i && (i = t.selector(i)), i.length && i !== window && i[0] && i[0].style && !i.nodeType && (i = i[0]); n;) {
                    if (n.target === i) return n;
                    n = n._next
                }
            }, f.track = function(t, e, i) {
                var n = g(t),
                    r = e.split(","),
                    o = r.length;
                for (i = (i || "").split(","), n || (n = new f(t)); --o > -1;) n.addProp(r[o], i[o] || i[0]);
                return n
            }, f.untrack = function(t, i) {
                var n = g(t),
                    r = (i || "").split(","),
                    o = r.length;
                if (n) {
                    for (; --o > -1;) n.removeProp(r[o]);
                    n._firstVP && i || (n._prev ? n._prev._next = n._next : n === e && (e = n._next), n._next && (n._next._prev = n._prev))
                }
            }, f.isTracking = function(t, e) {
                var i = g(t);
                return !!i && (!(e || !i._firstVP) || i.isTrackingProp(e))
            }, f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
    }("ThrowPropsPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(t, e, i) {
            var n, r, o, s, a, l, c, u, p, d = {
                    css: {}
                },
                h = {
                    css: {}
                },
                f = {
                    css: {}
                },
                g = {
                    css: {}
                },
                m = _gsScope._gsDefine.globals,
                v = {},
                y = {
                    style: {}
                },
                x = _gsScope.document || {
                    createElement: function() {
                        return y
                    }
                },
                _ = x.documentElement || {},
                w = function(t) {
                    return x.createElementNS ? x.createElementNS("http://www.w3.org/1999/xhtml", t) : x.createElement(t)
                },
                b = w("div"),
                T = [],
                S = function() {
                    return !1
                },
                k = 180 / Math.PI,
                C = 999999999999999,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                O = !(x.addEventListener || !x.all),
                A = x.createElement("div"),
                M = [],
                E = {},
                N = 0,
                L = /^(?:a|input|textarea|button|select)$/i,
                R = 0,
                D = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"),
                F = 0,
                j = {},
                z = {},
                I = function(t) {
                    if ("string" == typeof t && (t = e.selector(t)), !t || t.nodeType) return [t];
                    var i, n = [],
                        r = t.length;
                    for (i = 0; i !== r; n.push(t[i++]));
                    return n
                },
                X = function(t, e) {
                    var i, n = {};
                    if (e)
                        for (i in t) n[i] = t[i] * e;
                    else
                        for (i in t) n[i] = t[i];
                    return n
                },
                H = function() {
                    for (var t = M.length; --t > -1;) M[t]()
                },
                B = function(t) {
                    M.push(t), 1 === M.length && e.ticker.addEventListener("tick", H, this, !1, 1)
                },
                Y = function(t) {
                    for (var i = M.length; --i > -1;) M[i] === t && M.splice(i, 1);
                    e.to(q, 0, {
                        overwrite: "all",
                        delay: 15,
                        onComplete: q
                    })
                },
                q = function() {
                    M.length || e.ticker.removeEventListener("tick", H)
                },
                W = function(t, e) {
                    var i;
                    for (i in e) void 0 === t[i] && (t[i] = e[i]);
                    return t
                },
                V = function() {
                    return null != window.pageYOffset ? window.pageYOffset : null != x.scrollTop ? x.scrollTop : _.scrollTop || x.body.scrollTop || 0
                },
                U = function() {
                    return null != window.pageXOffset ? window.pageXOffset : null != x.scrollLeft ? x.scrollLeft : _.scrollLeft || x.body.scrollLeft || 0;
                },
                G = function(t, e) {
                    Dt(t, "scroll", e), Z(t.parentNode) || G(t.parentNode, e)
                },
                Q = function(t, e) {
                    Ft(t, "scroll", e), Z(t.parentNode) || Q(t.parentNode, e)
                },
                Z = function(t) {
                    return !(t && t !== _ && t !== x && t !== x.body && t !== window && t.nodeType && t.parentNode)
                },
                J = function(t, e) {
                    var i = "x" === e ? "Width" : "Height",
                        n = "scroll" + i,
                        r = "client" + i,
                        o = x.body;
                    return Math.max(0, Z(t) ? Math.max(_[n], o[n]) - (window["inner" + i] || _[r] || o[r]) : t[n] - t[r])
                },
                $ = function(t) {
                    var e = Z(t),
                        i = J(t, "x"),
                        n = J(t, "y");
                    e ? t = z : $(t.parentNode), t._gsMaxScrollX = i, t._gsMaxScrollY = n, t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0
                },
                K = function(t, e) {
                    return t = t || window.event, v.pageX = t.clientX + x.body.scrollLeft + _.scrollLeft, v.pageY = t.clientY + x.body.scrollTop + _.scrollTop, e && (t.returnValue = !1), v
                },
                tt = function(t) {
                    return t ? ("string" == typeof t && (t = e.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === window || t.nodeType && t.style ? t : null) : t
                },
                et = function(t, e) {
                    var i, r, o, s = t.style;
                    if (void 0 === s[e]) {
                        for (o = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5, i = e.charAt(0).toUpperCase() + e.substr(1); --r > -1 && void 0 === s[o[r] + i];);
                        if (0 > r) return "";
                        n = 3 === r ? "ms" : o[r], e = n + i
                    }
                    return e
                },
                it = function(t, e, i) {
                    var n = t.style;
                    n && (void 0 === n[e] && (e = et(t, e)), null == i ? n.removeProperty ? n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(e) : void 0 !== n[e] && (n[e] = i))
                },
                nt = x.defaultView ? x.defaultView.getComputedStyle : S,
                rt = /(?:Left|Right|Width)/i,
                ot = /(?:\d|\-|\+|=|#|\.)*/g,
                st = function(t, e, i, n, r) {
                    if ("px" === n || !n) return i;
                    if ("auto" === n || !i) return 0;
                    var o, s = rt.test(e),
                        a = t,
                        l = b.style,
                        c = 0 > i;
                    return c && (i = -i), "%" === n && -1 !== e.indexOf("border") ? o = i / 100 * (s ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + lt(t, "position", !0) + ";line-height:0;", "%" !== n && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || x.body, l[s ? "width" : "height"] = i + n), a.appendChild(b), o = parseFloat(b[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(b), 0 !== o || r || (o = st(t, e, i, n, !0))), c ? -o : o
                },
                at = function(t, e) {
                    if ("absolute" !== lt(t, "position", !0)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        n = lt(t, "margin" + i, !0);
                    return t["offset" + i] - (st(t, e, parseFloat(n), (n + "").replace(ot, "")) || 0)
                },
                lt = function(t, e, i) {
                    var n, r = (t._gsTransform || {})[e];
                    return r || 0 === r ? r : (t.style[e] ? r = t.style[e] : (n = nt(t)) ? (r = n.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()), r = r || n.length ? r : n[e]) : t.currentStyle && (r = t.currentStyle[e]), "auto" !== r || "top" !== e && "left" !== e || (r = at(t, e)), i ? r : parseFloat(r) || 0)
                },
                ct = function(t, e, i) {
                    var n = t.vars,
                        r = n[i],
                        o = t._listeners[e];
                    "function" == typeof r && r.apply(n[i + "Scope"] || n.callbackScope || t, n[i + "Params"] || [t.pointerEvent]), o && t.dispatchEvent(e)
                },
                ut = function(t, e) {
                    var i, n, r, o = tt(t);
                    return o ? Mt(o, e) : void 0 !== t.left ? (r = St(e), {
                        left: t.left - r.x,
                        top: t.top - r.y,
                        width: t.width,
                        height: t.height
                    }) : (n = t.min || t.minX || t.minRotation || 0, i = t.min || t.minY || 0, {
                        left: n,
                        top: i,
                        width: (t.max || t.maxX || t.maxRotation || 0) - n,
                        height: (t.max || t.maxY || 0) - i
                    })
                },
                pt = function() {
                    if (!x.createElementNS) return s = 0, void(a = !1);
                    var t, e, i, n, r = w("div"),
                        o = x.createElementNS("http://www.w3.org/2000/svg", "svg"),
                        p = w("div"),
                        d = r.style,
                        h = x.body || _,
                        f = "flex" === lt(h, "display", !0);
                    x.body && ft && (d.position = "absolute", h.appendChild(p), p.appendChild(r), n = r.offsetParent, p.style[ft] = "rotate(1deg)", u = r.offsetParent === n, p.style.position = "absolute", d.height = "10px", n = r.offsetTop, p.style.border = "5px solid red", c = n !== r.offsetTop, h.removeChild(p)), d = o.style, o.setAttributeNS(null, "width", "400px"), o.setAttributeNS(null, "height", "400px"), o.setAttributeNS(null, "viewBox", "0 0 400 400"), d.display = "block", d.boxSizing = "border-box", d.border = "0px solid red", d.transform = "none", r.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", h.appendChild(r), r.appendChild(o), i = o.createSVGPoint().matrixTransform(o.getScreenCTM()), e = i.y, r.scrollTop = 100, i.x = i.y = 0, i = i.matrixTransform(o.getScreenCTM()), l = e - i.y < 100.1 ? 0 : e - i.y - 150, r.removeChild(o), h.removeChild(r), h.appendChild(o), f && (h.style.display = "block"), t = o.getScreenCTM(), e = t.e, d.border = "50px solid red", t = o.getScreenCTM(), 0 === e && 0 === t.e && 0 === t.f && 1 === t.a ? (s = 1, a = !0) : (s = e !== t.e ? 1 : 0, a = 1 !== t.a), f && (h.style.display = "flex"), h.removeChild(o)
                },
                dt = "" !== et(b, "perspective"),
                ht = et(b, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                ft = et(b, "transform"),
                gt = ft.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                mt = {},
                vt = {},
                yt = _gsScope.SVGElement,
                xt = function(t) {
                    return !!(yt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                _t = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
                wt = [],
                bt = [],
                Tt = function(t) {
                    if (!t.getBoundingClientRect || !t.parentNode || !ft) return {
                        offsetTop: 0,
                        offsetLeft: 0,
                        scaleX: 1,
                        scaleY: 1,
                        offsetParent: _
                    };
                    if (qt.cacheSVGData !== !1 && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                    var i, n, r, o, c, u, p, d, h, f, g, m, v = t,
                        y = kt(t);
                    if (y.lastUpdate = e.ticker.frame, t.getBBox && !y.isSVGRoot) {
                        for (v = t.parentNode, i = t.getBBox(); v && "svg" !== (v.nodeName + "").toLowerCase();) v = v.parentNode;
                        return o = Tt(v), y.offsetTop = i.y * o.scaleY, y.offsetLeft = i.x * o.scaleX, y.scaleX = o.scaleX, y.scaleY = o.scaleY, y.offsetParent = v || _, y
                    }
                    for (r = y.offsetParent, r === x.body && (r = _), bt.length = wt.length = 0; v && (c = lt(v, ft, !0), "matrix(1, 0, 0, 1, 0, 0)" !== c && "none" !== c && "translate3d(0px, 0px, 0px)" !== c && (bt.push(v), wt.push(v.style[ft]), v.style[ft] = "none"), v !== r);) v = v.parentNode;
                    for (n = r.getBoundingClientRect(), c = t.getScreenCTM(), d = t.createSVGPoint(), p = d.matrixTransform(c), d.x = d.y = 10, d = d.matrixTransform(c), y.scaleX = (d.x - p.x) / 10, y.scaleY = (d.y - p.y) / 10, void 0 === s && pt(), y.borderBox && !a && t.getAttribute("width") && (o = nt(t) || {}, h = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth) || 0, f = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) || 0, g = parseFloat(o.width) || 0, m = parseFloat(o.height) || 0, y.scaleX *= (g - h) / g, y.scaleY *= (m - f) / m), l ? (i = t.getBoundingClientRect(), y.offsetLeft = i.left - n.left, y.offsetTop = i.top - n.top) : (y.offsetLeft = p.x - n.left, y.offsetTop = p.y - n.top), y.offsetParent = r, u = bt.length; --u > -1;) bt[u].style[ft] = wt[u];
                    return y
                },
                St = function(t, i) {
                    if (i = i || {}, !t || t === _ || !t.parentNode || t === window) return {
                        x: 0,
                        y: 0
                    };
                    var n = nt(t),
                        r = ht && n ? n.getPropertyValue(ht) : "50% 50%",
                        o = r.split(" "),
                        s = -1 !== r.indexOf("left") ? "0%" : -1 !== r.indexOf("right") ? "100%" : o[0],
                        a = -1 !== r.indexOf("top") ? "0%" : -1 !== r.indexOf("bottom") ? "100%" : o[1];
                    return ("center" === a || null == a) && (a = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), t.getBBox && xt(t) ? (t._gsTransform || (e.set(t, {
                        x: "+=0",
                        overwrite: !1
                    }), void 0 === t._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), r = t.getBBox(), i.x = t._gsTransform.xOrigin - r.x, i.y = t._gsTransform.yOrigin - r.y) : (t.getBBox && -1 !== (s + a).indexOf("%") && (t = t.getBBox(), t = {
                        offsetWidth: t.width,
                        offsetHeight: t.height
                    }), i.x = -1 !== s.indexOf("%") ? t.offsetWidth * parseFloat(s) / 100 : parseFloat(s), i.y = -1 !== a.indexOf("%") ? t.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), i
                },
                kt = function(t) {
                    if (qt.cacheSVGData !== !1 && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                    var i, n = t._dCache = t._dCache || {},
                        r = nt(t),
                        o = t.getBBox && xt(t),
                        s = "svg" === (t.nodeName + "").toLowerCase();
                    if (n.isSVG = o, n.isSVGRoot = s, n.borderBox = "border-box" === r.boxSizing, n.computedStyle = r, s) i = t.parentNode || _, i.insertBefore(b, t), n.offsetParent = b.offsetParent || _, i.removeChild(b);
                    else if (o) {
                        for (i = t.parentNode; i && "svg" !== (i.nodeName + "").toLowerCase();) i = i.parentNode;
                        n.offsetParent = i
                    } else n.offsetParent = t.offsetParent;
                    return n
                },
                Ct = function(t, e, i, n, r) {
                    if (t === window || !t || !t.style || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                    var o, a, l, p, d, h, f, g, m, v, y, w, b, T, S = t._dCache || kt(t),
                        k = t.parentNode,
                        C = k._dCache || kt(k),
                        P = S.computedStyle,
                        O = S.isSVG ? C.offsetParent : k.offsetParent;
                    return o = S.isSVG && -1 !== (t.style[ft] + "").indexOf("matrix") ? t.style[ft] : P ? P.getPropertyValue(gt) : t.currentStyle ? t.currentStyle[ft] : "1,0,0,1,0,0", t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") && (o = t.getAttribute("transform")), o = (o + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0], o.length > 6 && (o = [o[0], o[1], o[4], o[5], o[12], o[13]]), n ? o[4] = o[5] = 0 : S.isSVG && (d = t._gsTransform) && (d.xOrigin || d.yOrigin) && (o[0] = parseFloat(o[0]), o[1] = parseFloat(o[1]), o[2] = parseFloat(o[2]), o[3] = parseFloat(o[3]), o[4] = parseFloat(o[4]) - (d.xOrigin - (d.xOrigin * o[0] + d.yOrigin * o[2])), o[5] = parseFloat(o[5]) - (d.yOrigin - (d.xOrigin * o[1] + d.yOrigin * o[3]))), e && (void 0 === s && pt(), l = S.isSVG || S.isSVGRoot ? Tt(t) : t, S.isSVG ? (p = t.getBBox(), v = C.isSVGRoot ? {
                        x: 0,
                        y: 0
                    } : k.getBBox(), l = {
                        offsetLeft: p.x - v.x,
                        offsetTop: p.y - v.y,
                        offsetParent: S.offsetParent
                    }) : S.isSVGRoot ? (y = parseInt(P.borderTopWidth, 10) || 0, w = parseInt(P.borderLeftWidth, 10) || 0, b = (o[0] - s) * w + o[2] * y, T = o[1] * w + (o[3] - s) * y, h = e.x, f = e.y, g = h - (h * o[0] + f * o[2]), m = f - (h * o[1] + f * o[3]), o[4] = parseFloat(o[4]) + g, o[5] = parseFloat(o[5]) + m, e.x -= g, e.y -= m, h = l.scaleX, f = l.scaleY, r || (e.x *= h, e.y *= f), o[0] *= h, o[1] *= f, o[2] *= h, o[3] *= f, _t || (e.x += b, e.y += T), O === x.body && l.offsetParent === _ && (O = _)) : !c && t.offsetParent && (e.x += parseInt(lt(t.offsetParent, "borderLeftWidth"), 10) || 0, e.y += parseInt(lt(t.offsetParent, "borderTopWidth"), 10) || 0), a = k === _ || k === x.body, o[4] = Number(o[4]) + e.x + (l.offsetLeft || 0) - i.x - (a ? 0 : k.scrollLeft || 0), o[5] = Number(o[5]) + e.y + (l.offsetTop || 0) - i.y - (a ? 0 : k.scrollTop || 0), k && "fixed" === lt(t, "position", P) && (o[4] += U(), o[5] += V()), !k || k === _ || O !== l.offsetParent || C.isSVG || u && "100100" !== Ct(k).join("") || (l = C.isSVGRoot ? Tt(k) : k, o[4] -= l.offsetLeft || 0, o[5] -= l.offsetTop || 0, c || !C.offsetParent || S.isSVG || S.isSVGRoot || (o[4] -= parseInt(lt(C.offsetParent, "borderLeftWidth"), 10) || 0, o[5] -= parseInt(lt(C.offsetParent, "borderTopWidth"), 10) || 0))), o
                },
                Pt = function(t, e) {
                    if (!t || t === window || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                    for (var i, n, r, o, s, a, l, c, u = St(t, mt), p = St(t.parentNode, vt), d = Ct(t, u, p, !1, !0);
                        (t = t.parentNode) && t.parentNode && t !== _;) u = p, p = St(t.parentNode, u === mt ? vt : mt), l = Ct(t, u, p), i = d[0], n = d[1], r = d[2], o = d[3], s = d[4], a = d[5], d[0] = i * l[0] + n * l[2], d[1] = i * l[1] + n * l[3], d[2] = r * l[0] + o * l[2], d[3] = r * l[1] + o * l[3], d[4] = s * l[0] + a * l[2] + l[4], d[5] = s * l[1] + a * l[3] + l[5];
                    return e && (i = d[0], n = d[1], r = d[2], o = d[3], s = d[4], a = d[5], c = i * o - n * r, d[0] = o / c, d[1] = -n / c, d[2] = -r / c, d[3] = i / c, d[4] = (r * a - o * s) / c, d[5] = -(i * a - n * s) / c), d
                },
                Ot = function(t, e, i, n, r) {
                    t = tt(t);
                    var o = Pt(t, !1, r),
                        s = e.x,
                        a = e.y;
                    return i && (St(t, e), s -= e.x, a -= e.y), n = n === !0 ? e : n || {}, n.x = s * o[0] + a * o[2] + o[4], n.y = s * o[1] + a * o[3] + o[5], n
                },
                At = function(t, e, i) {
                    var n = t.x * e[0] + t.y * e[2] + e[4],
                        r = t.x * e[1] + t.y * e[3] + e[5];
                    return t.x = n * i[0] + r * i[2] + i[4], t.y = n * i[1] + r * i[3] + i[5], t
                },
                Mt = function(t, e, i) {
                    if (!(t = tt(t))) return null;
                    e = tt(e);
                    var n, r, o, s, a, l, c, u, p, d, h, f, g, m, v, y, w, b, T, S, k, C, P = t.getBBox && xt(t);
                    if (t === window) s = V(), r = U(), o = r + (_.clientWidth || t.innerWidth || x.body.clientWidth || 0), a = s + ((t.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : t.innerHeight || x.body.clientHeight || 0);
                    else {
                        if (void 0 === e || e === window) return t.getBoundingClientRect();
                        n = St(t), r = -n.x, s = -n.y, P ? (f = t.getBBox(), g = f.width, m = f.height) : "svg" !== (t.nodeName + "").toLowerCase() && t.offsetWidth ? (g = t.offsetWidth, m = t.offsetHeight) : (k = nt(t), g = parseFloat(k.width), m = parseFloat(k.height)), o = r + g, a = s + m, "svg" !== t.nodeName.toLowerCase() || O || (v = Tt(t), C = v.computedStyle || {}, b = (t.getAttribute("viewBox") || "0 0").split(" "), T = parseFloat(b[0]), S = parseFloat(b[1]), y = parseFloat(C.borderLeftWidth) || 0, w = parseFloat(C.borderTopWidth) || 0, o -= g - (g - y) / v.scaleX - T, a -= m - (m - w) / v.scaleY - S, r -= y / v.scaleX - T, s -= w / v.scaleY - S, k && (o += (parseFloat(C.borderRightWidth) + y) / v.scaleX, a += (w + parseFloat(C.borderBottomWidth)) / v.scaleY))
                    }
                    return t === e ? {
                        left: r,
                        top: s,
                        width: o - r,
                        height: a - s
                    } : (l = Pt(t), c = Pt(e, !0), u = At({
                        x: r,
                        y: s
                    }, l, c), p = At({
                        x: o,
                        y: s
                    }, l, c), d = At({
                        x: o,
                        y: a
                    }, l, c), h = At({
                        x: r,
                        y: a
                    }, l, c), r = Math.min(u.x, p.x, d.x, h.x), s = Math.min(u.y, p.y, d.y, h.y), j.x = j.y = 0, i && St(e, j), {
                        left: r + j.x,
                        top: s + j.y,
                        width: Math.max(u.x, p.x, d.x, h.x) - r,
                        height: Math.max(u.y, p.y, d.y, h.y) - s
                    })
                },
                Et = function(t) {
                    return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                },
                Nt = function(t) {
                    var e, i, n, r = [],
                        o = t.length;
                    for (e = 0; o > e; e++)
                        if (i = t[e], Et(i))
                            for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                        else i && 0 !== i.length && r.push(i);
                    return r
                },
                Lt = "ontouchstart" in _ && "orientation" in window,
                Rt = function(t) {
                    for (var e = t.split(","), i = (void 0 !== b.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== b.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), n = {}, r = 8; --r > -1;) n[e[r]] = i[r], n[i[r]] = e[r];
                    return n
                }("touchstart,touchmove,touchend,touchcancel"),
                Dt = function(t, e, i, n) {
                    t.addEventListener ? t.addEventListener(Rt[e] || e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
                },
                Ft = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(Rt[e] || e, i) : t.detachEvent && t.detachEvent("on" + e, i)
                },
                jt = function(t, e) {
                    for (var i = t.length; --i > -1;)
                        if (t[i].identifier === e) return !0;
                    return !1
                },
                $t = function(t) {
                    r = t.touches && R < t.touches.length, Ft(t.target, "touchend", $t)
                },
                zt = function(t) {
                    r = t.touches && R < t.touches.length, Dt(t.target, "touchend", $t)
                },
                It = function(t, e, i, n, r, o) {
                    var s, a, l, c = {};
                    if (e)
                        if (1 !== r && e instanceof Array) {
                            if (c.end = s = [], l = e.length, "object" == typeof e[0])
                                for (a = 0; l > a; a++) s[a] = X(e[a], r);
                            else
                                for (a = 0; l > a; a++) s[a] = e[a] * r;
                            i += 1.1, n -= 1.1
                        } else "function" == typeof e ? c.end = function(i) {
                            var n, o, s = e.call(t, i);
                            if (1 !== r && "object" == typeof s) {
                                n = {};
                                for (o in s) n[o] = s[o] * r;
                                s = n
                            }
                            return s
                        } : c.end = e;
                    return (i || 0 === i) && (c.max = i), (n || 0 === n) && (c.min = n), o && (c.velocity = 0), c
                },
                Xt = function(t) {
                    var e;
                    return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !L.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || Xt(t.parentNode))
                },
                Ht = function(t, e) {
                    for (var i, n = t.length; --n > -1;) i = t[n], i.ondragstart = i.onselectstart = e ? null : S, it(i, "userSelect", e ? "text" : "none")
                },
                Bt = function() {
                    var t, e = x.createElement("div"),
                        i = x.createElement("div"),
                        n = i.style,
                        r = x.body || b;
                    return n.display = "inline-block", n.position = "relative", e.style.cssText = i.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", e.appendChild(i), r.appendChild(e), p = i.offsetHeight + 18 > e.scrollHeight, n.width = "100%", ft || (n.paddingRight = "500px", t = e.scrollLeft = e.scrollWidth - e.clientWidth, n.left = "-90px", t = t !== e.scrollLeft), r.removeChild(e), t
                }(),
                Yt = function(t, i) {
                    t = tt(t), i = i || {};
                    var n, r, o, s, a, l, c = x.createElement("div"),
                        u = c.style,
                        d = t.firstChild,
                        h = 0,
                        f = 0,
                        g = t.scrollTop,
                        m = t.scrollLeft,
                        v = t.scrollWidth,
                        y = t.scrollHeight,
                        _ = 0,
                        w = 0,
                        b = 0;
                    dt && i.force3D !== !1 ? (a = "translate3d(", l = "px,0px)") : ft && (a = "translate(", l = "px)"), this.scrollTop = function(t, e) {
                        return arguments.length ? void this.top(-t, e) : -this.top()
                    }, this.scrollLeft = function(t, e) {
                        return arguments.length ? void this.left(-t, e) : -this.left()
                    }, this.left = function(n, r) {
                        if (!arguments.length) return -(t.scrollLeft + f);
                        var o = t.scrollLeft - m,
                            s = f;
                        return (o > 2 || -2 > o) && !r ? (m = t.scrollLeft, e.killTweensOf(this, !0, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-m), void(i.onKill && i.onKill())) : (n = -n, 0 > n ? (f = n - .5 | 0, n = 0) : n > w ? (f = n - w | 0, n = w) : f = 0, (f || s) && (a ? this._suspendTransforms || (u[ft] = a + -f + "px," + -h + l) : u.left = -f + "px", Bt && f + _ >= 0 && (u.paddingRight = f + _ + "px")), t.scrollLeft = 0 | n, void(m = t.scrollLeft))
                    }, this.top = function(n, r) {
                        if (!arguments.length) return -(t.scrollTop + h);
                        var o = t.scrollTop - g,
                            s = h;
                        return (o > 2 || -2 > o) && !r ? (g = t.scrollTop, e.killTweensOf(this, !0, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-g), void(i.onKill && i.onKill())) : (n = -n, 0 > n ? (h = n - .5 | 0, n = 0) : n > b ? (h = n - b | 0, n = b) : h = 0, (h || s) && (a ? this._suspendTransforms || (u[ft] = a + -f + "px," + -h + l) : u.top = -h + "px"), t.scrollTop = 0 | n, void(g = t.scrollTop))
                    }, this.maxScrollTop = function() {
                        return b
                    }, this.maxScrollLeft = function() {
                        return w
                    }, this.disable = function() {
                        for (d = c.firstChild; d;) s = d.nextSibling, t.appendChild(d), d = s;
                        t === c.parentNode && t.removeChild(c)
                    }, this.enable = function() {
                        if (d = t.firstChild, d !== c) {
                            for (; d;) s = d.nextSibling, c.appendChild(d), d = s;
                            t.appendChild(c), this.calibrate()
                        }
                    }, this.calibrate = function(e) {
                        var i, s, a = t.clientWidth === n;
                        g = t.scrollTop, m = t.scrollLeft, (!a || t.clientHeight !== r || c.offsetHeight !== o || v !== t.scrollWidth || y !== t.scrollHeight || e) && ((h || f) && (i = this.left(), s = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), (!a || e) && (u.display = "block", u.width = "auto", u.paddingRight = "0px", _ = Math.max(0, t.scrollWidth - t.clientWidth), _ && (_ += lt(t, "paddingLeft") + (p ? lt(t, "paddingRight") : 0))), u.display = "inline-block", u.position = "relative", u.overflow = "visible", u.verticalAlign = "top", u.width = "100%", u.paddingRight = _ + "px", p && (u.paddingBottom = lt(t, "paddingBottom", !0)), O && (u.zoom = "1"), n = t.clientWidth, r = t.clientHeight, v = t.scrollWidth, y = t.scrollHeight, w = t.scrollWidth - n, b = t.scrollHeight - r, o = c.offsetHeight, u.display = "block", (i || s) && (this.left(i), this.top(s)))
                    }, this.content = c, this.element = t, this._suspendTransforms = !1, this.enable()
                },
                qt = function(n, s) {
                    t.call(this, n), n = tt(n), o || (o = m.com.greensock.plugins.ThrowPropsPlugin), this.vars = s = X(s || {}), this.target = n, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(s.dragResistance) || 0, this.edgeResistance = isNaN(s.edgeResistance) ? 1 : parseFloat(s.edgeResistance) || 0, this.lockAxis = s.lockAxis, this.autoScroll = s.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!s.allowEventDefault;
                    var a, l, c, u, p, v, y, w, b, S, M, L, H, q, V, U, J, et, nt, rt, ot, st, at, pt, dt, ht, ft, gt, mt, vt, yt, _t, wt, bt, Tt = (s.type || (O ? "top,left" : "x,y")).toLowerCase(),
                        St = -1 !== Tt.indexOf("x") || -1 !== Tt.indexOf("y"),
                        kt = -1 !== Tt.indexOf("rotation"),
                        Ct = kt ? "rotation" : St ? "x" : "left",
                        At = St ? "y" : "top",
                        Mt = -1 !== Tt.indexOf("x") || -1 !== Tt.indexOf("left") || "scroll" === Tt,
                        Et = -1 !== Tt.indexOf("y") || -1 !== Tt.indexOf("top") || "scroll" === Tt,
                        Nt = s.minimumMovement || 2,
                        $t = this,
                        Bt = I(s.trigger || s.handle || n),
                        Wt = {},
                        Vt = 0,
                        Ut = !1,
                        Qt = s.clickableTest || Xt,
                        Zt = 0,
                        Jt = function(t) {
                            return $t.isPressed && t.which < 2 ? void $t.endDrag() : (t.preventDefault(), t.stopPropagation(), !1)
                        },
                        Kt = function(t) {
                            if ($t.autoScroll && $t.isDragging && (Ut || et)) {
                                var e, i, r, o, s, a, c, u, p = n,
                                    d = 15 * $t.autoScroll;
                                for (Ut = !1, z.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != _.scrollTop ? _.scrollTop : x.body.scrollTop, z.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != _.scrollLeft ? _.scrollLeft : x.body.scrollLeft, o = $t.pointerX - z.scrollLeft, s = $t.pointerY - z.scrollTop; p && !i;) i = Z(p.parentNode), e = i ? z : p.parentNode, r = i ? {
                                    bottom: Math.max(_.clientHeight, window.innerHeight || 0),
                                    right: Math.max(_.clientWidth, window.innerWidth || 0),
                                    left: 0,
                                    top: 0
                                } : e.getBoundingClientRect(), a = c = 0, Et && (u = e._gsMaxScrollY - e.scrollTop, 0 > u ? c = u : s > r.bottom - 40 && u ? (Ut = !0, c = Math.min(u, d * (1 - Math.max(0, r.bottom - s) / 40) | 0)) : s < r.top + 40 && e.scrollTop && (Ut = !0, c = -Math.min(e.scrollTop, d * (1 - Math.max(0, s - r.top) / 40) | 0)), c && (e.scrollTop += c)), Mt && (u = e._gsMaxScrollX - e.scrollLeft, 0 > u ? a = u : o > r.right - 40 && u ? (Ut = !0, a = Math.min(u, d * (1 - Math.max(0, r.right - o) / 40) | 0)) : o < r.left + 40 && e.scrollLeft && (Ut = !0, a = -Math.min(e.scrollLeft, d * (1 - Math.max(0, o - r.left) / 40) | 0)), a && (e.scrollLeft += a)), i && (a || c) && (window.scrollTo(e.scrollLeft, e.scrollTop), he($t.pointerX + a, $t.pointerY + c)), p = e
                            }
                            if (et) {
                                var h = $t.x,
                                    f = $t.y,
                                    g = 1e-6;
                                g > h && h > -g && (h = 0), g > f && f > -g && (f = 0), kt ? ($t.deltaX = h - mt.data.rotation, mt.data.rotation = $t.rotation = h, mt.setRatio(1)) : l ? (Et && ($t.deltaY = f - l.top(), l.top(f)), Mt && ($t.deltaX = h - l.left(), l.left(h))) : St ? (Et && ($t.deltaY = f - mt.data.y, mt.data.y = f), Mt && ($t.deltaX = h - mt.data.x, mt.data.x = h), mt.setRatio(1)) : (Et && ($t.deltaY = f - parseFloat(n.style.top || 0), n.style.top = f + "px"), Mt && ($t.deltaY = h - parseFloat(n.style.left || 0), n.style.left = h + "px")), !w || t || _t || (_t = !0, ct($t, "drag", "onDrag"), _t = !1)
                            }
                            et = !1
                        },
                        te = function(t, i) {
                            var r, o = $t.x,
                                s = $t.y;
                            n._gsTransform || !St && !kt || e.set(n, {
                                x: "+=0",
                                overwrite: !1
                            }), St ? ($t.y = n._gsTransform.y, $t.x = n._gsTransform.x) : kt ? $t.x = $t.rotation = n._gsTransform.rotation : l ? ($t.y = l.top(), $t.x = l.left()) : ($t.y = parseInt(n.style.top, 10) || 0, $t.x = parseInt(n.style.left, 10) || 0), (rt || ot || st) && !i && ($t.isDragging || $t.isThrowing) && (st && (j.x = $t.x, j.y = $t.y, r = st(j), r.x !== $t.x && ($t.x = r.x, et = !0), r.y !== $t.y && ($t.y = r.y, et = !0)), rt && (r = rt($t.x), r !== $t.x && ($t.x = r, kt && ($t.rotation = r), et = !0)), ot && (r = ot($t.y), r !== $t.y && ($t.y = r), et = !0)), et && Kt(!0), t || ($t.deltaX = $t.x - o, $t.deltaY = $t.y - s, ct($t, "throwupdate", "onThrowUpdate"))
                        },
                        ee = function() {
                            var t, e, i, r;
                            y = !1, l ? (l.calibrate(), $t.minX = S = -l.maxScrollLeft(), $t.minY = L = -l.maxScrollTop(), $t.maxX = b = $t.maxY = M = 0, y = !0) : s.bounds && (t = ut(s.bounds, n.parentNode), kt ? ($t.minX = S = t.left, $t.maxX = b = t.left + t.width, $t.minY = L = $t.maxY = M = 0) : void 0 !== s.bounds.maxX || void 0 !== s.bounds.maxY ? (t = s.bounds, $t.minX = S = t.minX, $t.minY = L = t.minY, $t.maxX = b = t.maxX, $t.maxY = M = t.maxY) : (e = ut(n, n.parentNode), $t.minX = S = lt(n, Ct) + t.left - e.left, $t.minY = L = lt(n, At) + t.top - e.top, $t.maxX = b = S + (t.width - e.width), $t.maxY = M = L + (t.height - e.height)), S > b && ($t.minX = b, $t.maxX = b = S, S = $t.minX), L > M && ($t.minY = M, $t.maxY = M = L, L = $t.minY), kt && ($t.minRotation = S, $t.maxRotation = b), y = !0), s.liveSnap && (i = s.liveSnap === !0 ? s.snap || {} : s.liveSnap, r = i instanceof Array || "function" == typeof i, kt ? (rt = ce(r ? i : i.rotation, S, b, 1), ot = null) : i.points ? st = ue(r ? i : i.points, S, b, L, M, i.radius, l ? -1 : 1) : (Mt && (rt = ce(r ? i : i.x || i.left || i.scrollLeft, S, b, l ? -1 : 1)), Et && (ot = ce(r ? i : i.y || i.top || i.scrollTop, L, M, l ? -1 : 1))))
                        },
                        ie = function() {
                            $t.isThrowing = !1, ct($t, "throwcomplete", "onThrowComplete")
                        },
                        ne = function() {
                            $t.isThrowing = !1
                        },
                        re = function(t, e) {
                            var i, r, a, c;
                            t && o ? (t === !0 && (i = s.snap || s.liveSnap || {}, r = i instanceof Array || "function" == typeof i, t = {
                                resistance: (s.throwResistance || s.resistance || 1e3) / (kt ? 10 : 1)
                            }, kt ? t.rotation = It($t, r ? i : i.rotation, b, S, 1, e) : (Mt && (t[Ct] = It($t, r ? i : i.points || i.x || i.left || i.scrollLeft, b, S, l ? -1 : 1, e || "x" === $t.lockedAxis)), Et && (t[At] = It($t, r ? i : i.points || i.y || i.top || i.scrollTop, M, L, l ? -1 : 1, e || "y" === $t.lockedAxis)), (i.points || i instanceof Array && "object" == typeof i[0]) && (t.linkedProps = Ct + "," + At, t.radius = i.radius))), $t.isThrowing = !0, c = isNaN(s.overshootTolerance) ? 1 === s.edgeResistance ? 0 : 1 - $t.edgeResistance + .2 : s.overshootTolerance, $t.tween = a = o.to(l || n, {
                                throwProps: t,
                                ease: s.ease || m.Power3.easeOut,
                                onComplete: ie,
                                onOverwrite: ne,
                                onUpdate: s.fastMode ? ct : te,
                                onUpdateParams: s.fastMode ? [$t, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : T
                            }, isNaN(s.maxDuration) ? 2 : s.maxDuration, isNaN(s.minDuration) ? 0 === c || "object" == typeof t && t.resistance > 1e3 ? 0 : .5 : s.minDuration, c), s.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), te(!0, !0), $t.endX = $t.x, $t.endY = $t.y, kt && ($t.endRotation = $t.x), a.play(0), te(!0, !0), l && (l._suspendTransforms = !1))) : y && $t.applyBounds()
                        },
                        oe = function(t) {
                            var e, i, r, o, s, a, l, p, d, h = dt || [1, 0, 0, 1, 0, 0];
                            dt = Pt(n.parentNode, !0), t && $t.isPressed && h.join(",") !== dt.join(",") && (e = h[0], i = h[1], r = h[2], o = h[3], s = h[4], a = h[5], l = e * o - i * r, p = c * (o / l) + u * (-r / l) + (r * a - o * s) / l, d = c * (-i / l) + u * (e / l) + -(e * a - i * s) / l, u = p * dt[1] + d * dt[3] + dt[5], c = p * dt[0] + d * dt[2] + dt[4]), dt[1] || dt[2] || 1 != dt[0] || 1 != dt[3] || 0 != dt[4] || 0 != dt[5] || (dt = null)
                        },
                        se = function() {
                            var t = 1 - $t.edgeResistance;
                            oe(!1), dt && (c = $t.pointerX * dt[0] + $t.pointerY * dt[2] + dt[4], u = $t.pointerX * dt[1] + $t.pointerY * dt[3] + dt[5]), et && (he($t.pointerX, $t.pointerY), Kt(!0)), l ? (ee(), v = l.top(), p = l.left()) : (ae() ? (te(!0, !0), ee()) : $t.applyBounds(), kt ? (J = $t.rotationOrigin = Ot(n, {
                                x: 0,
                                y: 0
                            }), te(!0, !0), p = $t.x, v = $t.y = Math.atan2(J.y - $t.pointerY, $t.pointerX - J.x) * k) : (ft = n.parentNode ? n.parentNode.scrollTop || 0 : 0, gt = n.parentNode ? n.parentNode.scrollLeft || 0 : 0, v = lt(n, At), p = lt(n, Ct))), y && t && (p > b ? p = b + (p - b) / t : S > p && (p = S - (S - p) / t), kt || (v > M ? v = M + (v - M) / t : L > v && (v = L - (L - v) / t))), $t.startX = p, $t.startY = v
                        },
                        ae = function() {
                            return $t.tween && $t.tween.isActive()
                        },
                        le = function() {
                            !A.parentNode || ae() || $t.isDragging || A.parentNode.removeChild(A)
                        },
                        ce = function(t, e, i, n) {
                            return "function" == typeof t ? function(r) {
                                var o = $t.isPressed ? 1 - $t.edgeResistance : 1;
                                return t.call($t, r > i ? i + (r - i) * o : e > r ? e + (r - e) * o : r) * n
                            } : t instanceof Array ? function(n) {
                                for (var r, o, s = t.length, a = 0, l = C; --s > -1;) r = t[s], o = r - n, 0 > o && (o = -o), l > o && r >= e && i >= r && (a = s, l = o);
                                return t[a]
                            } : isNaN(t) ? function(t) {
                                return t
                            } : function() {
                                return t * n
                            }
                        },
                        ue = function(t, e, i, n, r, o, s) {
                            return o = o && C > o ? o * o : C, "function" == typeof t ? function(a) {
                                var l, c, u, p = $t.isPressed ? 1 - $t.edgeResistance : 1,
                                    d = a.x,
                                    h = a.y;
                                return a.x = d = d > i ? i + (d - i) * p : e > d ? e + (d - e) * p : d, a.y = h = h > r ? r + (h - r) * p : n > h ? n + (h - n) * p : h, l = t.call($t, a), l !== a && (a.x = l.x, a.y = l.y), 1 !== s && (a.x *= s, a.y *= s), C > o && (c = a.x - d, u = a.y - h, c * c + u * u > o && (a.x = d, a.y = h)), a
                            } : t instanceof Array ? function(e) {
                                for (var i, n, r, s, a = t.length, l = 0, c = C; --a > -1;) r = t[a], i = r.x - e.x, n = r.y - e.y, s = i * i + n * n, c > s && (l = a, c = s);
                                return o >= c ? t[l] : e
                            } : function(t) {
                                return t
                            }
                        },
                        pe = function(t) {
                            var i;
                            if (!(!a || $t.isPressed || !t || ("mousedown" === t.type || "pointerdown" === t.type) && P() - Zt < 30 && Rt[$t.pointerEvent.type])) {
                                if (ht = ae(), $t.pointerEvent = t, Rt[t.type] ? (pt = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : x, Dt(pt, "touchend", fe), Dt(pt, "touchmove", de), Dt(pt, "touchcancel", fe), Dt(x, "touchstart", zt)) : (pt = null, Dt(x, "mousemove", de)), yt = null, Dt(x, "mouseup", fe), t && t.target && Dt(t.target, "mouseup", fe), at = Qt.call($t, t.target) && !s.dragClickables) return Dt(t.target, "change", fe), ct($t, "press", "onPress"), void Ht(Bt, !0);
                                if (vt = !(!pt || Mt === Et || $t.vars.allowNativeTouchScrolling === !1) && (Mt ? "y" : "x"), O ? t = K(t, !0) : vt || $t.allowEventDefault || (t.preventDefault(), t.preventManipulation && t.preventManipulation()), t.changedTouches ? (t = V = t.changedTouches[0], U = t.identifier) : t.pointerId ? U = t.pointerId : V = U = null, R++, B(Kt), u = $t.pointerY = t.pageY, c = $t.pointerX = t.pageX, (vt || $t.autoScroll) && $(n.parentNode), n.parentNode && (l || $t.autoScroll && !kt && n.parentNode._gsMaxScrollX && !A.parentNode) && !n.getBBox && (A.style.width = n.parentNode.scrollWidth + "px", n.parentNode.appendChild(A)), se(), $t.tween && $t.tween.kill(), $t.isThrowing = !1, e.killTweensOf(l || n, !0, Wt), l && e.killTweensOf(n, !0, {
                                        scrollTo: 1
                                    }), $t.tween = $t.lockedAxis = null, (s.zIndexBoost || !kt && !l && s.zIndexBoost !== !1) && (n.style.zIndex = qt.zIndex++), $t.isPressed = !0, w = !(!s.onDrag && !$t._listeners.drag), !kt)
                                    for (i = Bt.length; --i > -1;) it(Bt[i], "cursor", s.cursor || "move");
                                ct($t, "press", "onPress")
                            }
                        },
                        de = function(t) {
                            var e, i, n, o, s, l, p = t;
                            if (a && !r && $t.isPressed && t) {
                                if ($t.pointerEvent = t, e = t.changedTouches) {
                                    if (t = e[0], t !== V && t.identifier !== U) {
                                        for (o = e.length; --o > -1 && (t = e[o]).identifier !== U;);
                                        if (0 > o) return
                                    }
                                } else if (t.pointerId && U && t.pointerId !== U) return;
                                if (O) t = K(t, !0);
                                else {
                                    if (pt && vt && !yt && (i = t.pageX, n = t.pageY, dt && (o = i * dt[0] + n * dt[2] + dt[4], n = i * dt[1] + n * dt[3] + dt[5], i = o), s = Math.abs(i - c), l = Math.abs(n - u), (s !== l && (s > Nt || l > Nt) || D && vt === yt) && (yt = s > l && Mt ? "x" : "y", $t.vars.lockAxisOnTouchScroll !== !1 && ($t.lockedAxis = "x" === yt ? "y" : "x", "function" == typeof $t.vars.onLockAxis && $t.vars.onLockAxis.call($t, p)), D && vt === yt))) return void fe(p);
                                    $t.allowEventDefault || vt && (!yt || vt === yt) || p.cancelable === !1 || (p.preventDefault(), p.preventManipulation && p.preventManipulation())
                                }
                                $t.autoScroll && (Ut = !0), he(t.pageX, t.pageY)
                            }
                        },
                        he = function(t, e) {
                            var i, n, r, o, s, a, l = 1 - $t.dragResistance,
                                d = 1 - $t.edgeResistance;
                            $t.pointerX = t, $t.pointerY = e, kt ? (o = Math.atan2(J.y - e, t - J.x) * k, s = $t.y - o, $t.y = o, s > 180 ? v -= 360 : -180 > s && (v += 360), r = p + (v - o) * l) : (dt && (a = t * dt[0] + e * dt[2] + dt[4], e = t * dt[1] + e * dt[3] + dt[5], t = a), n = e - u, i = t - c, Nt > n && n > -Nt && (n = 0), Nt > i && i > -Nt && (i = 0), ($t.lockAxis || $t.lockedAxis) && (i || n) && (a = $t.lockedAxis, a || ($t.lockedAxis = a = Mt && Math.abs(i) > Math.abs(n) ? "y" : Et ? "x" : null, a && "function" == typeof $t.vars.onLockAxis && $t.vars.onLockAxis.call($t, $t.pointerEvent)), "y" === a ? n = 0 : "x" === a && (i = 0)), r = p + i * l, o = v + n * l), (rt || ot || st) && ($t.x !== r || $t.y !== o && !kt) ? (st && (j.x = r, j.y = o, a = st(j), r = a.x, o = a.y), rt && (r = rt(r)), ot && (o = ot(o))) : y && (r > b ? r = b + (r - b) * d : S > r && (r = S + (r - S) * d), kt || (o > M ? o = M + (o - M) * d : L > o && (o = L + (o - L) * d))), kt || dt || (r = Math.round(r), o = Math.round(o)), ($t.x !== r || $t.y !== o && !kt) && (kt ? ($t.endRotation = $t.x = $t.endX = r, et = !0) : (Et && ($t.y = $t.endY = o, et = !0), Mt && ($t.x = $t.endX = r, et = !0)), !$t.isDragging && $t.isPressed && ($t.isDragging = !0, ct($t, "dragstart", "onDragStart")))
                        },
                        fe = function(t, i) {
                            if (a && $t.isPressed && (!t || null == U || i || !(t.pointerId && t.pointerId !== U || t.changedTouches && !jt(t.changedTouches, U)))) {
                                $t.isPressed = !1;
                                var r, o, l, c, u, p = t,
                                    d = $t.isDragging,
                                    h = e.delayedCall(.001, le);
                                if (pt ? (Ft(pt, "touchend", fe), Ft(pt, "touchmove", de), Ft(pt, "touchcancel", fe), Ft(x, "touchstart", zt)) : Ft(x, "mousemove", de), Ft(x, "mouseup", fe), t && t.target && Ft(t.target, "mouseup", fe), et = !1, at) return t && Ft(t.target, "change", fe), Ht(Bt, !1), ct($t, "release", "onRelease"), ct($t, "click", "onClick"), void(at = !1);
                                if (Y(Kt), !kt)
                                    for (o = Bt.length; --o > -1;) it(Bt[o], "cursor", s.cursor || "move");
                                if (d && (Vt = F = P(), $t.isDragging = !1), R--, t) {
                                    if (O && (t = K(t, !1)), r = t.changedTouches, r && (t = r[0], t !== V && t.identifier !== U)) {
                                        for (o = r.length; --o > -1 && (t = r[o]).identifier !== U;);
                                        if (0 > o) return
                                    }
                                    $t.pointerEvent = p, $t.pointerX = t.pageX, $t.pointerY = t.pageY
                                }
                                return p && !d ? (ht && (s.snap || s.bounds) && re(s.throwProps), ct($t, "release", "onRelease"), D && "touchmove" === p.type || (ct($t, "click", "onClick"), c = p.target || p.srcElement || n, Zt = P(), u = function() {
                                    Zt !== wt && $t.enabled() && !$t.isPressed && (c.click ? c.click() : x.createEvent && (l = x.createEvent("MouseEvents"), l.initMouseEvent("click", !0, !0, window, 1, $t.pointerEvent.screenX, $t.pointerEvent.screenY, $t.pointerX, $t.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(l)))
                                }, D || p.defaultPrevented || e.delayedCall(1e-5, u))) : (re(s.throwProps), O || $t.allowEventDefault || !p || !s.dragClickables && Qt.call($t, p.target) || !d || vt && (!yt || vt !== yt) || p.cancelable === !1 || (p.preventDefault(), p.preventManipulation && p.preventManipulation()), ct($t, "release", "onRelease")), ae() && h.duration($t.tween.duration()), d && ct($t, "dragend", "onDragEnd"), !0
                            }
                        },
                        ge = function(t) {
                            if (t && $t.isDragging && !l) {
                                var e = t.target || t.srcElement || n.parentNode,
                                    i = e.scrollLeft - e._gsScrollX,
                                    r = e.scrollTop - e._gsScrollY;
                                (i || r) && (dt ? (c -= i * dt[0] + r * dt[2], u -= r * dt[3] + i * dt[1]) : (c -= i, u -= r), e._gsScrollX += i, e._gsScrollY += r, he($t.pointerX, $t.pointerY))
                            }
                        },
                        me = function(t) {
                            var e = P(),
                                i = 40 > e - Zt,
                                n = 40 > e - Vt,
                                r = i && wt === Zt,
                                o = !!t.preventDefault,
                                s = $t.pointerEvent && $t.pointerEvent.defaultPrevented,
                                a = i && bt === Zt,
                                l = t.isTrusted || null == t.isTrusted && i && r;
                            return o && (r || n && $t.vars.suppressClickOnDrag !== !1) && t.stopImmediatePropagation(), !i || $t.pointerEvent && $t.pointerEvent.defaultPrevented || r && l === a ? void(($t.isPressed || n || i) && (o ? l && t.detail && i && !s || (t.preventDefault(), t.preventManipulation && t.preventManipulation()) : t.returnValue = !1)) : (l && r && (bt = Zt), void(wt = Zt))
                        };
                    nt = qt.get(this.target), nt && nt.kill(), this.startDrag = function(t) {
                        pe(t), $t.isDragging || ($t.isDragging = !0, ct($t, "dragstart", "onDragStart"))
                    }, this.drag = de, this.endDrag = function(t) {
                        fe(t, !0)
                    }, this.timeSinceDrag = function() {
                        return $t.isDragging ? 0 : (P() - Vt) / 1e3
                    }, this.hitTest = function(t, e) {
                        return qt.hitTest($t.target, t, e)
                    }, this.getDirection = function(t, e) {
                        var i, n, r, s, a, l, c = "velocity" === t && o ? t : "object" != typeof t || kt ? "start" : "element";
                        return "element" === c && (a = Gt($t.target), l = Gt(t)), i = "start" === c ? $t.x - p : "velocity" === c ? o.getVelocity(this.target, Ct) : a.left + a.width / 2 - (l.left + l.width / 2), kt ? 0 > i ? "counter-clockwise" : "clockwise" : (e = e || 2, n = "start" === c ? $t.y - v : "velocity" === c ? o.getVelocity(this.target, At) : a.top + a.height / 2 - (l.top + l.height / 2), r = Math.abs(i / n), s = 1 / e > r ? "" : 0 > i ? "left" : "right", e > r && ("" !== s && (s += "-"), s += 0 > n ? "up" : "down"), s)
                    }, this.applyBounds = function(t) {
                        var e, i, r, o, a, l;
                        if (t && s.bounds !== t) return s.bounds = t, $t.update(!0);
                        if (te(!0), ee(), y) {
                            if (e = $t.x, i = $t.y, e > b ? e = b : S > e && (e = S), i > M ? i = M : L > i && (i = L), ($t.x !== e || $t.y !== i) && (r = !0, $t.x = $t.endX = e, kt ? $t.endRotation = e : $t.y = $t.endY = i, et = !0, Kt(!0), $t.autoScroll && !$t.isDragging))
                                for ($(n.parentNode), o = n, z.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != _.scrollTop ? _.scrollTop : x.body.scrollTop, z.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != _.scrollLeft ? _.scrollLeft : x.body.scrollLeft; o && !l;) l = Z(o.parentNode), a = l ? z : o.parentNode, Et && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), Mt && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), o = a;
                            $t.isThrowing && (r || $t.endX > b || $t.endX < S || $t.endY > M || $t.endY < L) && re(s.throwProps, r)
                        }
                        return $t
                    }, this.update = function(t, e, i) {
                        var r = $t.x,
                            o = $t.y;
                        return oe(!e), t ? $t.applyBounds() : (et && i && Kt(!0), te(!0)), e && (he($t.pointerX, $t.pointerY), et && Kt(!0)), $t.isPressed && !e && (Mt && Math.abs(r - $t.x) > .01 || Et && Math.abs(o - $t.y) > .01 && !kt) && se(), $t.autoScroll && ($(n.parentNode), Ut = $t.isDragging, Kt(!0)), $t.autoScroll && (Q(n, ge), G(n, ge)), $t
                    }, this.enable = function(t) {
                        var r, c, u;
                        if ("soft" !== t) {
                            for (c = Bt.length; --c > -1;) u = Bt[c], Dt(u, "mousedown", pe), Dt(u, "touchstart", pe), Dt(u, "click", me, !0), kt || it(u, "cursor", s.cursor || "move"), it(u, "touchCallout", "none"), it(u, "touchAction", Mt === Et ? "none" : Mt ? "pan-y" : "pan-x"), xt(u) && it(u.ownerSVGElement || u, "touchAction", Mt === Et ? "none" : Mt ? "pan-y" : "pan-x"), this.vars.allowContextMenu || Dt(u, "contextmenu", Jt);
                            Ht(Bt, !1)
                        }
                        return G(n, ge), a = !0, o && "soft" !== t && o.track(l || n, St ? "x,y" : kt ? "rotation" : "top,left"), l && l.enable(), n._gsDragID = r = "d" + N++, E[r] = this, l && (l.element._gsDragID = r), e.set(n, {
                                x: "+=0",
                                overwrite: !1
                            }), mt = {
                                t: n,
                                data: O ? q : n._gsTransform,
                                tween: {},
                                setRatio: O ? function() {
                                    e.set(n, H)
                                } : i._internals.setTransformRatio || i._internals.set3DTransformRatio
                            }, se(), $t.update(!0),
                            $t
                    }, this.disable = function(t) {
                        var e, i, r = $t.isDragging;
                        if (!kt)
                            for (e = Bt.length; --e > -1;) it(Bt[e], "cursor", null);
                        if ("soft" !== t) {
                            for (e = Bt.length; --e > -1;) i = Bt[e], it(i, "touchCallout", null), it(i, "touchAction", null), Ft(i, "mousedown", pe), Ft(i, "touchstart", pe), Ft(i, "click", me), Ft(i, "contextmenu", Jt);
                            Ht(Bt, !0), pt && (Ft(pt, "touchcancel", fe), Ft(pt, "touchend", fe), Ft(pt, "touchmove", de)), Ft(x, "mouseup", fe), Ft(x, "mousemove", de)
                        }
                        return Q(n, ge), a = !1, o && "soft" !== t && o.untrack(l || n, St ? "x,y" : kt ? "rotation" : "top,left"), l && l.disable(), Y(Kt), $t.isDragging = $t.isPressed = at = !1, r && ct($t, "dragend", "onDragEnd"), $t
                    }, this.enabled = function(t, e) {
                        return arguments.length ? t ? $t.enable(e) : $t.disable(e) : a
                    }, this.kill = function() {
                        return $t.isThrowing = !1, e.killTweensOf(l || n, !0, Wt), $t.disable(), delete E[n._gsDragID], $t
                    }, -1 !== Tt.indexOf("scroll") && (l = this.scrollProxy = new Yt(n, W({
                        onKill: function() {
                            $t.isPressed && fe(null)
                        }
                    }, s)), n.style.overflowY = Et && !Lt ? "auto" : "hidden", n.style.overflowX = Mt && !Lt ? "auto" : "hidden", n = l.content), s.force3D !== !1 && e.set(n, {
                        force3D: !0
                    }), kt ? Wt.rotation = 1 : (Mt && (Wt[Ct] = 1), Et && (Wt[At] = 1)), kt ? (H = g, q = H.css, H.overwrite = !1) : St && (H = Mt && Et ? d : Mt ? h : f, q = H.css, H.overwrite = !1), this.enable()
                },
                Wt = qt.prototype = new t;
            Wt.constructor = qt, Wt.pointerX = Wt.pointerY = Wt.startX = Wt.startY = Wt.deltaX = Wt.deltaY = 0, Wt.isDragging = Wt.isPressed = !1, qt.version = "0.15.1", qt.zIndex = 1e3, Dt(x, "touchcancel", function() {}), Dt(x, "contextmenu", function(t) {
                var e;
                for (e in E) E[e].isPressed && E[e].endDrag()
            }), qt.create = function(t, i) {
                "string" == typeof t && (t = e.selector(t));
                for (var n = t && 0 !== t.length ? Et(t) ? Nt(t) : [t] : [], r = n.length; --r > -1;) n[r] = new qt(n[r], i);
                return n
            }, qt.get = function(t) {
                return E[(tt(t) || {})._gsDragID]
            }, qt.timeSinceDrag = function() {
                return (P() - F) / 1e3
            };
            var Vt = {},
                Ut = function(t) {
                    var e, i, n = 0,
                        r = 0;
                    for (t = tt(t), e = t.offsetWidth, i = t.offsetHeight; t;) n += t.offsetTop, r += t.offsetLeft, t = t.offsetParent;
                    return {
                        top: n,
                        left: r,
                        width: e,
                        height: i
                    }
                },
                Gt = function(t, e) {
                    if (t === window) return Vt.left = Vt.top = 0, Vt.width = Vt.right = _.clientWidth || t.innerWidth || x.body.clientWidth || 0, Vt.height = Vt.bottom = (t.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : t.innerHeight || x.body.clientHeight || 0, Vt;
                    var i = t.pageX !== e ? {
                        left: t.pageX - U(),
                        top: t.pageY - V(),
                        right: t.pageX - U() + 1,
                        bottom: t.pageY - V() + 1
                    } : t.nodeType || t.left === e || t.top === e ? O ? Ut(t) : tt(t).getBoundingClientRect() : t;
                    return i.right === e && i.width !== e ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : i.width === e && (i = {
                        width: i.right - i.left,
                        height: i.bottom - i.top,
                        right: i.right,
                        left: i.left,
                        bottom: i.bottom,
                        top: i.top
                    }), i
                };
            return qt.hitTest = function(t, e, i) {
                if (t === e) return !1;
                var n, r, o, s = Gt(t),
                    a = Gt(e),
                    l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
                return l || !i ? !l : (o = -1 !== (i + "").indexOf("%"), i = parseFloat(i) || 0, n = {
                    left: Math.max(s.left, a.left),
                    top: Math.max(s.top, a.top)
                }, n.width = Math.min(s.right, a.right) - n.left, n.height = Math.min(s.bottom, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (o ? (i *= .01, r = n.width * n.height, r >= s.width * s.height * i || r >= a.width * a.height * i) : n.width > i && n.height > i))
            }, A.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", qt
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), require("../plugins/CSSPlugin.min.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite", "CSSPlugin"], e)
    }("Draggable");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, n, r, o, s = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                },
                a = _gsScope._gsDefine.globals,
                l = {},
                c = s.prototype = new t("css");
            c.constructor = s, s.version = "1.20.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
                top: c,
                right: c,
                bottom: c,
                left: c,
                width: c,
                height: c,
                fontSize: c,
                padding: c,
                margin: c,
                perspective: c,
                lineHeight: ""
            };
            var u, p, d, h, f, g, m, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                S = /opacity:([^;]*)/i,
                k = /alpha\(opacity *=.+?\)/i,
                C = /^(rgb|hsl)/,
                P = /([A-Z])/g,
                O = /-([a-z])/gi,
                A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                M = function(t, e) {
                    return e.toUpperCase()
                },
                E = /(?:Left|Right|Width)/i,
                N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                R = /,(?=[^\)]*(?:\(|$))/gi,
                D = /[\s,\(]/i,
                F = Math.PI / 180,
                j = 180 / Math.PI,
                z = {},
                I = {
                    style: {}
                },
                X = _gsScope.document || {
                    createElement: function() {
                        return I
                    }
                },
                H = function(t, e) {
                    return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                },
                B = H("div"),
                Y = H("img"),
                q = s._internals = {
                    _specialProps: l
                },
                W = (_gsScope.navigator || {}).userAgent || "",
                V = function() {
                    var t = W.indexOf("Android"),
                        e = H("a");
                    return d = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), f = d && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, h = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                }(),
                U = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                G = function(t) {
                    _gsScope.console && console.log(t)
                },
                Q = "",
                Z = "",
                J = function(t, e) {
                    e = e || B;
                    var i, n, r = e.style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                    return n >= 0 ? (Z = 3 === n ? "ms" : i[n], Q = "-" + Z.toLowerCase() + "-", Z + t) : null
                },
                $ = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                K = s.getStyle = function(t, e, i, n, r) {
                    var o;
                    return V || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || $(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : U(t)
                },
                tt = q.convertToPixels = function(t, i, n, r, o) {
                    if ("px" === r || !r && "lineHeight" !== i) return n;
                    if ("auto" === r || !n) return 0;
                    var a, l, c, u = E.test(i),
                        p = t,
                        d = B.style,
                        h = 0 > n,
                        f = 1 === n;
                    if (h && (n = -n), f && (n *= 100), "lineHeight" !== i || r)
                        if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && p.appendChild && "v" !== r.charAt(0) && "rem" !== r) d[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (p = t.parentNode || X.body, -1 !== K(p, "display").indexOf("flex") && (d.position = "absolute"), l = p._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                                d[u ? "width" : "height"] = n + r
                            }
                            p.appendChild(B), a = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), p.removeChild(B), u && "%" === r && s.cacheWidths !== !1 && (l = p._gsCache = p._gsCache || {}, l.time = c, l.width = a / n * 100), 0 !== a || o || (a = tt(t, i, n, r, !0))
                        }
                    else l = $(t).lineHeight, t.style.lineHeight = n, a = parseFloat($(t).lineHeight), t.style.lineHeight = l;
                    return f && (a /= 100), h ? -a : a
                },
                et = q.calculateOffset = function(t, e, i) {
                    if ("absolute" !== K(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        r = K(t, "margin" + n, i);
                    return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(b, "")) || 0)
                },
                it = function(t, e) {
                    var i, n, r, o = {};
                    if (e = e || $(t, null))
                        if (i = e.length)
                            for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || At === r) && (o[r.replace(O, M)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Ot === i) && (o[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(O, M)] = e[i]);
                    return V || (o.opacity = U(t)), n = Bt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Et && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                },
                nt = function(t, e, i, n, r) {
                    var o, s, a, l = {},
                        c = t.style;
                    for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(w, "") ? o : 0 : et(t, s), void 0 !== c[s] && (a = new yt(c, s, c[s], a)));
                    if (n)
                        for (s in n) "className" !== s && (l[s] = n[s]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                rt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                st = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || $(t))[e] || 0;
                    if (t.getCTM && It(t)) return t.getBBox()[e] || 0;
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = rt[e],
                        o = r.length;
                    for (i = i || $(t, null); --o > -1;) n -= parseFloat(K(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[o] + "Width", i, !0)) || 0;
                    return n
                },
                at = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i, n = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                    if (n.length > 3 && !e) {
                        for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                        return t.join(",")
                    }
                    return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(o.replace(w, "")), e.v = t), e || t
                },
                lt = function(t, e) {
                    return "function" == typeof t && (t = t(v, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                ct = function(t, e) {
                    return "function" == typeof t && (t = t(v, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                ut = function(t, e, i, n) {
                    var r, o, s, a, l, c = 1e-6;
                    return "function" == typeof t && (t = t(v, m)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), c > a && a > -c && (a = 0), a
                },
                pt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                dt = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                ht = s.parseColor = function(t, e) {
                    var i, n, r, o, s, a, l, c, u, p, d;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = d = t.match(y), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(x)
                                } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = dt(s + 1 / 3, n, r), i[1] = dt(s, n, r), i[2] = dt(s - 1 / 3, n, r);
                            else i = t.match(y) || pt.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                        }
                    else i = pt.black;
                    return e && !d && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, c = Math.max(n, r, o), u = Math.min(n, r, o), l = (c + u) / 2, c === u ? s = a = 0 : (p = c - u, a = l > .5 ? p / (2 - c - u) : p / (c + u), s = c === n ? (r - o) / p + (o > r ? 6 : 0) : c === r ? (o - n) / p + 2 : (n - r) / p + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                ft = function(t, e) {
                    var i, n, r, o = t.match(gt) || [],
                        s = 0,
                        a = "";
                    if (!o.length) return t;
                    for (i = 0; i < o.length; i++) n = o[i], r = t.substr(s, t.indexOf(n, s) - s), s += r.length + n.length, n = ht(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return a + t.substr(s)
                },
                gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (c in pt) gt += "|" + c + "\\b";
            gt = new RegExp(gt + ")", "gi"), s.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), gt.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
            var mt = function(t, e, i, n) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var r, o = e ? (t.match(gt) || [""])[0] : "",
                        s = t.split(o).join("").match(_) || [],
                        a = t.substr(0, t.indexOf(s[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        c = -1 !== t.indexOf(" ") ? " " : ",",
                        u = s.length,
                        p = u > 0 ? s[0].replace(y, "") : "";
                    return u ? r = e ? function(t) {
                        var e, d, h, f;
                        if ("number" == typeof t) t += p;
                        else if (n && R.test(t)) {
                            for (f = t.replace(R, "|").split("|"), h = 0; h < f.length; h++) f[h] = r(f[h]);
                            return f.join(",")
                        }
                        if (e = (t.match(gt) || [o])[0], d = t.split(e).join("").match(_) || [], h = d.length, u > h--)
                            for (; ++h < u;) d[h] = i ? d[(h - 1) / 2 | 0] : s[h];
                        return a + d.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, o, d;
                        if ("number" == typeof t) t += p;
                        else if (n && R.test(t)) {
                            for (o = t.replace(R, "|").split("|"), d = 0; d < o.length; d++) o[d] = r(o[d]);
                            return o.join(",")
                        }
                        if (e = t.match(_) || [], d = e.length, u > d--)
                            for (; ++d < u;) e[d] = i ? e[(d - 1) / 2 | 0] : s[d];
                        return a + e.join(c) + l
                    } : function(t) {
                        return t
                    }
                },
                vt = function(t) {
                    return t = t.split(","),
                        function(e, i, n, r, o, s, a) {
                            var l, c = (i + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                            return r.parse(e, a, o, s)
                        }
                },
                yt = (q._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, c = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : c > e && e > -c && (e = 0), l.t[l.p] = e, l = l._next;
                    if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                        for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                            if (i = l.t, i.type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i[o] = r
                                }
                            } else i[o] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, n, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                }),
                xt = (q._parseToProxy = function(t, e, i, n, r, o) {
                    var s, a, l, c, u, p = n,
                        d = {},
                        h = {},
                        f = i._transform,
                        g = z;
                    for (i._transform = null, z = e, n = u = i.parse(t, e, n, r), z = g, o && (i._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); n && n !== p;) {
                        if (n.type <= 1 && (a = n.p, h[a] = n.s + n.c, d[a] = n.s, o || (c = new yt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                            for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, h[a] = n.data[l], d[a] = n[l], o || (c = new yt(n, l, a, c, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: d,
                        end: h,
                        firstMPT: c,
                        pt: u
                    }
                }, q.CSSPropTween = function(t, e, n, r, s, a, l, c, u, p, d) {
                    this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof xt || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === p ? n : p, this.e = void 0 === d ? n + r : d, s && (this._next = s, s._prev = this)
                }),
                _t = function(t, e, i, n, r, o) {
                    var s = new xt(t, e, i, n - i, r, -1, o);
                    return s.b = i, s.e = s.xs0 = n, s
                },
                wt = s.parseComplex = function(t, e, i, n, r, o, a, l, c, p) {
                    i = i || o || "", "function" == typeof n && (n = n(v, m)), a = new xt(t, e, 0, 0, a, p ? 2 : 1, null, !1, l, i, n), n += "", r && gt.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
                    var d, h, f, g, _, w, b, T, S, k, C, P, O, A = i.split(", ").join(",").split(" "),
                        M = n.split(", ").join(",").split(" "),
                        E = A.length,
                        N = u !== !1;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(R, ", ").split(" "), M = M.join(" ").replace(R, ", ").split(" "), E = A.length), E !== M.length && (A = (o || "").split(" "), E = A.length), a.plugin = c, a.setRatio = p, gt.lastIndex = 0, d = 0; E > d; d++)
                        if (g = A[d], _ = M[d], T = parseFloat(g), T || 0 === T) a.appendXtra("", T, lt(_, T), _.replace(x, ""), N && -1 !== _.indexOf("px"), !0);
                        else if (r && gt.test(g)) P = _.indexOf(")") + 1, P = ")" + (P ? _.substr(P) : ""), O = -1 !== _.indexOf("hsl") && V, k = _, g = ht(g, O), _ = ht(_, O), S = g.length + _.length > 6, S && !V && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(M[d]).join("transparent")) : (V || (S = !1), O ? a.appendXtra(k.substr(0, k.indexOf("hsl")) + (S ? "hsla(" : "hsl("), g[0], lt(_[0], g[0]), ",", !1, !0).appendXtra("", g[1], lt(_[1], g[1]), "%,", !1).appendXtra("", g[2], lt(_[2], g[2]), S ? "%," : "%" + P, !1) : a.appendXtra(k.substr(0, k.indexOf("rgb")) + (S ? "rgba(" : "rgb("), g[0], _[0] - g[0], ",", !0, !0).appendXtra("", g[1], _[1] - g[1], ",", !0).appendXtra("", g[2], _[2] - g[2], S ? "," : P, !0), S && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (_.length < 4 ? 1 : _[3]) - g, P, !1))), gt.lastIndex = 0;
                    else if (w = g.match(y)) {
                        if (b = _.match(x), !b || b.length !== w.length) return a;
                        for (f = 0, h = 0; h < w.length; h++) C = w[h], k = g.indexOf(C, f), a.appendXtra(g.substr(f, k - f), Number(C), lt(b[h], C), "", N && "px" === g.substr(k + C.length, 2), 0 === h), f = k + C.length;
                        a["xs" + a.l] += g.substr(f)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + _ : _;
                    if (-1 !== n.indexOf("=") && a.data) {
                        for (P = a.xs0 + a.data.s, d = 1; d < a.l; d++) P += a["xs" + d] + a.data["xn" + d];
                        a.e = P + a["xs" + d]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                bt = 9;
            for (c = xt.prototype, c.l = c.pr = 0; --bt > 0;) c["xn" + bt] = 0, c["xs" + bt] = "";
            c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, r, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new xt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                    s: e + i
                }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
            };
            var Tt = function(t, e) {
                    e = e || {}, this.p = e.prefix ? J(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                St = q._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, r, o = t.split(","),
                        s = e.defaultValue;
                    for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new Tt(o[n], e)
                },
                kt = q._registerPluginProp = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        St(t, {
                            parser: function(t, i, n, r, o, s, c) {
                                var u = a.com.greensock.plugins[e];
                                return u ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, c)) : (G("Error: " + e + " js file not loaded."), o)
                            }
                        })
                    }
                };
            c = Tt.prototype, c.parseComplex = function(t, e, i, n, r, o) {
                var s, a, l, c, u, p, d = this.keyword;
                if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : d && (a = [e], l = [i])), l) {
                    for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, d && (u = e.indexOf(d), p = i.indexOf(d), u !== p && (-1 === p ? a[s] = a[s].split(d).join("") : -1 === u && (a[s] += " " + d)));
                    e = a.join(", "), i = l.join(", ")
                }
                return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
            }, c.parse = function(t, e, i, n, o, s, a) {
                return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
            }, s.registerSpecialProp = function(t, e, i) {
                St(t, {
                    parser: function(t, n, r, o, s, a, l) {
                        var c = new xt(t, r, 0, 0, s, 2, r, !1, i);
                        return c.plugin = a, c.setRatio = e(t, n, o._tween, r), c
                    },
                    priority: i
                })
            }, s.useSVGTransformAttr = !0;
            var Ct, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ot = J("transform"),
                At = Q + "transform",
                Mt = J("transformOrigin"),
                Et = null !== J("perspective"),
                Nt = q.Transform = function() {
                    this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !Et) && (s.defaultForce3D || "auto")
                },
                Lt = _gsScope.SVGElement,
                Rt = function(t, e, i) {
                    var n, r = X.createElementNS("http://www.w3.org/2000/svg", t),
                        o = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r
                },
                Dt = X.documentElement || {},
                Ft = function() {
                    var t, e, i, n = g || /Android/i.test(W) && !_gsScope.chrome;
                    return X.createElementNS && !n && (t = Rt("svg", Dt), e = Rt("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[Mt] = "50% 50%", e.style[Ot] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(h && Et), Dt.removeChild(t)), n
                }(),
                jt = function(t, e, i, n, r, o) {
                    var a, l, c, u, p, d, h, f, g, m, v, y, x, _, w = t._gsTransform,
                        b = Ht(t, !0);
                    w && (x = w.xOrigin, _ = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (h = t.getBBox(), 0 === h.x && 0 === h.y && h.width + h.height === 0 && (h = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), e = at(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = p = parseFloat(a[1]), n && b !== Xt && (d = b[0], h = b[1], f = b[2], g = b[3], m = b[4], v = b[5], y = d * g - h * f, y && (l = u * (g / y) + p * (-f / y) + (f * v - g * m) / y, c = u * (-h / y) + p * (d / y) - (d * v - h * m) / y, u = i.xOrigin = a[0] = l, p = i.yOrigin = a[1] = c)), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = u - x, c = p - _, w.xOffset += l * b[0] + c * b[2] - l, w.yOffset += l * b[1] + c * b[3] - c) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                },
                $t = function(t) {
                    var e, i = H("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        n = this.parentNode,
                        r = this.nextSibling,
                        o = this.style.cssText;
                    if (Dt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = $t
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? n.insertBefore(this, r) : n.appendChild(this), Dt.removeChild(i), this.style.cssText = o, e
                },
                zt = function(t) {
                    try {
                        return t.getBBox()
                    } catch (e) {
                        return $t.call(t, !0)
                    }
                },
                It = function(t) {
                    return !(!(Lt && t.getCTM && zt(t)) || t.parentNode && !t.ownerSVGElement)
                },
                Xt = [1, 0, 0, 1, 0, 0],
                Ht = function(t, e) {
                    var i, n, r, o, s, a, l = t._gsTransform || new Nt,
                        c = 1e5,
                        u = t.style;
                    if (Ot ? n = K(t, At, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(N), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Ot || !(a = "none" === $(t).display) && t.parentNode || (a && (o = u.display, u.display = "block"), t.parentNode || (s = 1, Dt.appendChild(t)), n = K(t, At, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? u.display = o : a && Vt(u, "display"), s && Dt.removeChild(t)), (l.svg || t.getCTM && It(t)) && (i && -1 !== (u[Ot] + "").indexOf("matrix") && (n = u[Ot], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Xt;
                    for (r = (n || "").match(y) || [], bt = r.length; --bt > -1;) o = Number(r[bt]), r[bt] = (s = o - (o |= 0)) ? (s * c + (0 > s ? -.5 : .5) | 0) / c + o : o;
                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Bt = q.getTransform = function(t, i, n, r) {
                    if (t._gsTransform && n && !r) return t._gsTransform;
                    var o, a, l, c, u, p, d = n ? t._gsTransform || new Nt : new Nt,
                        h = d.scaleX < 0,
                        f = 2e-5,
                        g = 1e5,
                        m = Et ? parseFloat(K(t, Mt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                        v = parseFloat(s.defaultTransformPerspective) || 0;
                    if (d.svg = !(!t.getCTM || !It(t)), d.svg && (jt(t, K(t, Mt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Ct = s.useSVGTransformAttr || Ft), o = Ht(t), o !== Xt) {
                        if (16 === o.length) {
                            var y, x, _, w, b, T = o[0],
                                S = o[1],
                                k = o[2],
                                C = o[3],
                                P = o[4],
                                O = o[5],
                                A = o[6],
                                M = o[7],
                                E = o[8],
                                N = o[9],
                                L = o[10],
                                R = o[12],
                                D = o[13],
                                F = o[14],
                                z = o[11],
                                I = Math.atan2(A, L);
                            d.zOrigin && (F = -d.zOrigin, R = E * F - o[12], D = N * F - o[13], F = L * F + d.zOrigin - o[14]), d.rotationX = I * j, I && (w = Math.cos(-I), b = Math.sin(-I), y = P * w + E * b, x = O * w + N * b, _ = A * w + L * b, E = P * -b + E * w, N = O * -b + N * w, L = A * -b + L * w, z = M * -b + z * w, P = y, O = x, A = _), I = Math.atan2(-k, L), d.rotationY = I * j, I && (w = Math.cos(-I), b = Math.sin(-I), y = T * w - E * b, x = S * w - N * b, _ = k * w - L * b, N = S * b + N * w, L = k * b + L * w, z = C * b + z * w, T = y, S = x, k = _), I = Math.atan2(S, T), d.rotation = I * j, I && (w = Math.cos(I), b = Math.sin(I), y = T * w + S * b, x = P * w + O * b, _ = E * w + N * b, S = S * w - T * b, O = O * w - P * b, N = N * w - E * b, T = y, P = x, E = _), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), I = Math.atan2(P, O), d.scaleX = (Math.sqrt(T * T + S * S + k * k) * g + .5 | 0) / g, d.scaleY = (Math.sqrt(O * O + A * A) * g + .5 | 0) / g, d.scaleZ = (Math.sqrt(E * E + N * N + L * L) * g + .5 | 0) / g, T /= d.scaleX, P /= d.scaleY, S /= d.scaleX, O /= d.scaleY, Math.abs(I) > f ? (d.skewX = I * j, P = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(I))) : d.skewX = 0, d.perspective = z ? 1 / (0 > z ? -z : z) : 0, d.x = R, d.y = D, d.z = F, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * P), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * O))
                        } else if (!Et || r || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                            var X = o.length >= 6,
                                H = X ? o[0] : 1,
                                B = o[1] || 0,
                                Y = o[2] || 0,
                                q = X ? o[3] : 1;
                            d.x = o[4] || 0, d.y = o[5] || 0, l = Math.sqrt(H * H + B * B), c = Math.sqrt(q * q + Y * Y), u = H || B ? Math.atan2(B, H) * j : d.rotation || 0, p = Y || q ? Math.atan2(Y, q) * j + u : d.skewX || 0, d.scaleX = l, d.scaleY = c, d.rotation = u, d.skewX = p, Et && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * H + d.yOrigin * Y), d.y -= d.yOrigin - (d.xOrigin * B + d.yOrigin * q))
                        }
                        Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (h ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = m;
                        for (a in d) d[a] < f && d[a] > -f && (d[a] = 0)
                    }
                    return n && (t._gsTransform = d, d.svg && (Ct && t.style[Ot] ? e.delayedCall(.001, function() {
                        Vt(t.style, Ot)
                    }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), d
                },
                Yt = function(t) {
                    var e, i, n = this.data,
                        r = -n.rotation * F,
                        o = r + n.skewX * F,
                        s = 1e5,
                        a = (Math.cos(r) * n.scaleX * s | 0) / s,
                        l = (Math.sin(r) * n.scaleX * s | 0) / s,
                        c = (Math.sin(o) * -n.scaleY * s | 0) / s,
                        u = (Math.cos(o) * n.scaleY * s | 0) / s,
                        p = this.t.style,
                        d = this.t.currentStyle;
                    if (d) {
                        i = l, l = -c, c = -i, e = d.filter, p.filter = "";
                        var h, f, m = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            y = "absolute" !== d.position,
                            x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                            _ = n.x + m * n.xPercent / 100,
                            w = n.y + v * n.yPercent / 100;
                        if (null != n.ox && (h = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, _ += h - (h * a + f * l), w += f - (h * c + f * u)), y ? (h = m / 2, f = v / 2, x += ", Dx=" + (h - (h * a + f * l) + _) + ", Dy=" + (f - (h * c + f * u) + w) + ")") : x += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? p.filter = e.replace(L, x) : p.filter = x + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !y) {
                            var S, k, C, P = 8 > g ? 1 : -1;
                            for (h = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + _), n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * m)) / 2 + w), bt = 0; 4 > bt; bt++) k = ot[bt], S = d[k], i = -1 !== S.indexOf("px") ? parseFloat(S) : tt(this.t, k, parseFloat(S), S.replace(b, "")) || 0, C = i !== n[k] ? 2 > bt ? -n.ieOffsetX : -n.ieOffsetY : 2 > bt ? h - n.ieOffsetX : f - n.ieOffsetY, p[k] = (n[k] = Math.round(i - C * (0 === bt || 2 === bt ? 1 : P))) + "px"
                        }
                    }
                },
                qt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
                    var e, i, n, r, o, s, a, l, c, u, p, d, f, g, m, v, y, x, _, w, b, T, S, k = this.data,
                        C = this.t.style,
                        P = k.rotation,
                        O = k.rotationX,
                        A = k.rotationY,
                        M = k.scaleX,
                        E = k.scaleY,
                        N = k.scaleZ,
                        L = k.x,
                        R = k.y,
                        D = k.z,
                        j = k.svg,
                        z = k.perspective,
                        I = k.force3D,
                        X = k.skewY,
                        H = k.skewX;
                    if (X && (H += X, P += X), ((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !D && !z && !A && !O && 1 === N || Ct && j || !Et) return void(P || H || j ? (P *= F, T = H * F, S = 1e5, i = Math.cos(P) * M, o = Math.sin(P) * M, n = Math.sin(P - T) * -E, s = Math.cos(P - T) * E, T && "simple" === k.skewType && (e = Math.tan(T - X * F), e = Math.sqrt(1 + e * e), n *= e, s *= e, X && (e = Math.tan(X * F), e = Math.sqrt(1 + e * e), i *= e, o *= e)), j && (L += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, R += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, Ct && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), L += .01 * k.xPercent * m.width, R += .01 * k.yPercent * m.height), m = 1e-6, m > L && L > -m && (L = 0), m > R && R > -m && (R = 0)), _ = (i * S | 0) / S + "," + (o * S | 0) / S + "," + (n * S | 0) / S + "," + (s * S | 0) / S + "," + L + "," + R + ")", j && Ct ? this.t.setAttribute("transform", "matrix(" + _) : C[Ot] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + _) : C[Ot] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + E + "," + L + "," + R + ")");
                    if (h && (m = 1e-4, m > M && M > -m && (M = N = 2e-5), m > E && E > -m && (E = N = 2e-5), !z || k.z || k.rotationX || k.rotationY || (z = 0)), P || H) P *= F, v = i = Math.cos(P), y = o = Math.sin(P), H && (P -= H * F, v = Math.cos(P), y = Math.sin(P), "simple" === k.skewType && (e = Math.tan((H - X) * F), e = Math.sqrt(1 + e * e), v *= e, y *= e, k.skewY && (e = Math.tan(X * F), e = Math.sqrt(1 + e * e), i *= e, o *= e))), n = -y, s = v;
                    else {
                        if (!(A || O || 1 !== N || z || j)) return void(C[Ot] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + R + "px," + D + "px)" + (1 !== M || 1 !== E ? " scale(" + M + "," + E + ")" : ""));
                        i = s = 1, n = o = 0
                    }
                    u = 1, r = a = l = c = p = d = 0, f = z ? -1 / z : 0, g = k.zOrigin, m = 1e-6, w = ",", b = "0", P = A * F, P && (v = Math.cos(P), y = Math.sin(P), l = -y, p = f * -y, r = i * y, a = o * y, u = v, f *= v, i *= v, o *= v), P = O * F, P && (v = Math.cos(P), y = Math.sin(P), e = n * v + r * y, x = s * v + a * y, c = u * y, d = f * y, r = n * -y + r * v, a = s * -y + a * v, u *= v, f *= v, n = e, s = x), 1 !== N && (r *= N, a *= N, u *= N, f *= N), 1 !== E && (n *= E, s *= E, c *= E, d *= E), 1 !== M && (i *= M, o *= M, l *= M, p *= M), (g || j) && (g && (L += r * -g, R += a * -g, D += u * -g + g), j && (L += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, R += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), m > L && L > -m && (L = b), m > R && R > -m && (R = b), m > D && D > -m && (D = 0)), _ = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", _ += (m > i && i > -m ? b : i) + w + (m > o && o > -m ? b : o) + w + (m > l && l > -m ? b : l), _ += w + (m > p && p > -m ? b : p) + w + (m > n && n > -m ? b : n) + w + (m > s && s > -m ? b : s), O || A || 1 !== N ? (_ += w + (m > c && c > -m ? b : c) + w + (m > d && d > -m ? b : d) + w + (m > r && r > -m ? b : r), _ += w + (m > a && a > -m ? b : a) + w + (m > u && u > -m ? b : u) + w + (m > f && f > -m ? b : f) + w) : _ += ",0,0,0,0,1,0,", _ += L + w + R + w + D + w + (z ? 1 + -D / z : 1) + ")", C[Ot] = _
                };
            c = Nt.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, o, a, l) {
                    if (n._lastParsedTransform === l) return o;
                    n._lastParsedTransform = l;
                    var c, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    "function" == typeof l[i] && (c = l[i], l[i] = e), u && (l.scale = u(v, t));
                    var p, d, h, f, g, y, x, _, w, b = t._gsTransform,
                        T = t.style,
                        S = 1e-6,
                        k = Pt.length,
                        C = l,
                        P = {},
                        O = "transformOrigin",
                        A = Bt(t, r, !0, C.parseTransform),
                        M = C.transform && ("function" == typeof C.transform ? C.transform(v, m) : C.transform);
                    if (A.skewType = C.skewType || A.skewType || s.defaultSkewType, n._transform = A, M && "string" == typeof M && Ot) d = B.style, d[Ot] = M, d.display = "block", d.position = "absolute", X.body.appendChild(B), p = Bt(B, null, !1), "simple" === A.skewType && (p.scaleY *= Math.cos(p.skewX * F)), A.svg && (y = A.xOrigin, x = A.yOrigin, p.x -= A.xOffset, p.y -= A.yOffset, (C.transformOrigin || C.svgOrigin) && (M = {}, jt(t, at(C.transformOrigin), M, C.svgOrigin, C.smoothOrigin, !0), y = M.xOrigin, x = M.yOrigin, p.x -= M.xOffset - A.xOffset, p.y -= M.yOffset - A.yOffset), (y || x) && (_ = Ht(B, !0), p.x -= y - (y * _[0] + x * _[2]), p.y -= x - (y * _[1] + x * _[3]))), X.body.removeChild(B), p.perspective || (p.perspective = A.perspective), null != C.xPercent && (p.xPercent = ct(C.xPercent, A.xPercent)), null != C.yPercent && (p.yPercent = ct(C.yPercent, A.yPercent));
                    else if ("object" == typeof C) {
                        if (p = {
                                scaleX: ct(null != C.scaleX ? C.scaleX : C.scale, A.scaleX),
                                scaleY: ct(null != C.scaleY ? C.scaleY : C.scale, A.scaleY),
                                scaleZ: ct(C.scaleZ, A.scaleZ),
                                x: ct(C.x, A.x),
                                y: ct(C.y, A.y),
                                z: ct(C.z, A.z),
                                xPercent: ct(C.xPercent, A.xPercent),
                                yPercent: ct(C.yPercent, A.yPercent),
                                perspective: ct(C.transformPerspective, A.perspective)
                            }, g = C.directionalRotation, null != g)
                            if ("object" == typeof g)
                                for (d in g) C[d] = g[d];
                            else C.rotation = g;
                        "string" == typeof C.x && -1 !== C.x.indexOf("%") && (p.x = 0, p.xPercent = ct(C.x, A.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (p.y = 0, p.yPercent = ct(C.y, A.yPercent)), p.rotation = ut("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : A.rotation, A.rotation, "rotation", P), Et && (p.rotationX = ut("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", P), p.rotationY = ut("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", P)), p.skewX = ut(C.skewX, A.skewX), p.skewY = ut(C.skewY, A.skewY)
                    }
                    for (Et && null != C.force3D && (A.force3D = C.force3D, f = !0), h = A.force3D || A.z || A.rotationX || A.rotationY || p.z || p.rotationX || p.rotationY || p.perspective,
                        h || null == C.scale || (p.scaleZ = 1); --k > -1;) w = Pt[k], M = p[w] - A[w], (M > S || -S > M || null != C[w] || null != z[w]) && (f = !0, o = new xt(A, w, A[w], M, o), w in P && (o.e = P[w]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                    return M = C.transformOrigin, A.svg && (M || C.svgOrigin) && (y = A.xOffset, x = A.yOffset, jt(t, at(M), p, C.svgOrigin, C.smoothOrigin), o = _t(A, "xOrigin", (b ? A : p).xOrigin, p.xOrigin, o, O), o = _t(A, "yOrigin", (b ? A : p).yOrigin, p.yOrigin, o, O), (y !== A.xOffset || x !== A.yOffset) && (o = _t(A, "xOffset", b ? y : A.xOffset, A.xOffset, o, O), o = _t(A, "yOffset", b ? x : A.yOffset, A.yOffset, o, O)), M = "0px 0px"), (M || Et && h && A.zOrigin) && (Ot ? (f = !0, w = Mt, M = (M || K(t, w, r, !1, "50% 50%")) + "", o = new xt(T, w, 0, 0, o, -1, O), o.b = T[w], o.plugin = a, Et ? (d = A.zOrigin, M = M.split(" "), A.zOrigin = (M.length > 2 && (0 === d || "0px" !== M[2]) ? parseFloat(M[2]) : d) || 0, o.xs0 = o.e = M[0] + " " + (M[1] || "50%") + " 0px", o = new xt(A, "zOrigin", 0, 0, o, -1, o.n), o.b = d, o.xs0 = o.e = A.zOrigin) : o.xs0 = o.e = M) : at(M + "", A)), f && (n._transformType = A.svg && Ct || !h && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), u && (l.scale = u), o
                },
                prefix: !0
            }), St("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), St("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, o, s, a) {
                    e = this.format(e);
                    var l, c, u, p, d, h, f, g, m, v, y, x, _, w, b, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        k = t.style;
                    for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = J(S[c])), d = p = K(t, S[c], r, !1, "0px"), -1 !== d.indexOf(" ") && (p = d.split(" "), d = p[0], p = p[1]), h = u = l[c], f = parseFloat(d), x = d.substr((f + "").length), _ = "=" === h.charAt(1), _ ? (g = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), g *= parseFloat(h), y = h.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(h), y = h.substr((g + "").length)), "" === y && (y = n[i] || x), y !== x && (w = tt(t, "borderLeft", f, x), b = tt(t, "borderTop", f, x), "%" === y ? (d = w / m * 100 + "%", p = b / v * 100 + "%") : "em" === y ? (T = tt(t, "borderLeft", 1, "em"), d = w / T + "em", p = b / T + "em") : (d = w + "px", p = b + "px"), _ && (h = parseFloat(d) + g + y, u = parseFloat(p) + g + y)), s = wt(k, S[c], d + " " + p, h + " " + u, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: mt("0px 0px 0px 0px", !1, !0)
            }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, o, s) {
                    return wt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                },
                prefix: !0,
                formatter: mt("0px 0px", !1, !0)
            }), St("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, o, s) {
                    var a, l, c, u, p, d, h = "background-position",
                        f = r || $(t, null),
                        m = this.format((f ? g ? f.getPropertyValue(h + "-x") + " " + f.getPropertyValue(h + "-y") : f.getPropertyValue(h) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = K(t, "backgroundImage").replace(A, ""), d && "none" !== d)) {
                        for (a = m.split(" "), l = v.split(" "), Y.setAttribute("src", d), c = 2; --c > -1;) m = a[c], u = -1 !== m.indexOf("%"), u !== (-1 !== l[c].indexOf("%")) && (p = 0 === c ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[c] = u ? parseFloat(m) / 100 * p + "px" : parseFloat(m) / p * 100 + "%");
                        m = a.join(" ")
                    }
                    return this.parseComplex(t.style, m, v, o, s)
                },
                formatter: at
            }), St("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return t += "", at(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), St("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), St("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), St("transformStyle", {
                prefix: !0
            }), St("backfaceVisibility", {
                prefix: !0
            }), St("userSelect", {
                prefix: !0
            }), St("margin", {
                parser: vt("marginTop,marginRight,marginBottom,marginLeft")
            }), St("padding", {
                parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), St("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, o, s) {
                    var a, l, c;
                    return 9 > g ? (l = t.currentStyle, c = 8 > g ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                }
            }), St("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), St("autoRound,strictUnits", {
                parser: function(t, e, i, n, r) {
                    return r
                }
            }), St("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, o, s) {
                    var a = K(t, "borderTopWidth", r, !1, "0px"),
                        l = this.format(e).split(" "),
                        c = l[0].replace(b, "");
                    return "px" !== c && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
                }
            }), St("borderWidth", {
                parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), St("float,cssFloat,styleFloat", {
                parser: function(t, e, i, n, r, o) {
                    var s = t.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new xt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                }
            });
            var Wt = function(t) {
                var e, i = this.t,
                    n = i.filter || K(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
            };
            St("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, o, s) {
                    var a = parseFloat(K(t, "opacity", r, !1, "1")),
                        l = t.style,
                        c = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), V ? o = new xt(l, "opacity", a, e - a, o) : (o = new xt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Wt), c && (o = new xt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                }
            });
            var Vt = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Ut = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Vt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            St("className", {
                parser: function(t, e, n, o, s, a, l) {
                    var c, u, p, d, h, f = t.getAttribute("class") || "",
                        g = t.style.cssText;
                    if (s = o._classNamePT = new xt(t, n, 0, 0, s, 2), s.setRatio = Ut, s.pr = -11, i = !0, s.b = f, u = it(t, r), p = t._gsClassPT) {
                        for (d = {}, h = p.data; h;) d[h.p] = 1, h = h._next;
                        p.setRatio(1)
                    }
                    return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), c = nt(t, u, it(t), l, d), t.setAttribute("class", f), s.data = c.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, c.difs, s, a)
                }
            });
            var Gt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, o, s = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) s.cssText = "", r = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Mt : l[i].p), Vt(s, i);
                    r && (Vt(s, Ot), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (St("clearProps", {
                    parser: function(t, e, n, r, o) {
                        return o = new xt(t, n, 0, 0, o, 2), o.setRatio = Gt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                    }
                }), c = "bezier,throwProps,physicsProps,physics2D".split(","), bt = c.length; bt--;) kt(c[bt]);
            c = s.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, a, c) {
                if (!t.nodeType) return !1;
                this._target = m = t, this._tween = a, this._vars = e, v = c, u = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = $(t, ""), o = this._overwriteProps;
                var h, g, y, x, _, w, b, T, k, C = t.style;
                if (p && "" === C.zIndex && (h = K(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (x = C.cssText, h = it(t, r), C.cssText = x + ";" + e, h = nt(t, h, it(t)).difs, !V && S.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, C.cssText = x), e.className ? this._firstPT = g = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = g = this.parse(t, e, null), this._transformType) {
                    for (k = 3 === this._transformType, Ot ? d && (p = !0, "" === C.zIndex && (b = K(t, "zIndex", r), ("auto" === b || "" === b) && this._addLazySet(C, "zIndex", 0)), f && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : C.zoom = 1, y = g; y && y._next;) y = y._next;
                    T = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Ot ? qt : Yt, T.data = this._transform || Bt(t, r, !0), T.tween = a, T.pr = -1, o.pop()
                }
                if (i) {
                    for (; g;) {
                        for (w = g._next, y = x; y && y.pr > g.pr;) y = y._next;
                        (g._prev = y ? y._prev : _) ? g._prev._next = g: x = g, (g._next = y) ? y._prev = g : _ = g, g = w
                    }
                    this._firstPT = x
                }
                return !0
            }, c.parse = function(t, e, i, o) {
                var s, a, c, p, d, h, f, g, y, x, _ = t.style;
                for (s in e) {
                    if (h = e[s], "function" == typeof h && (h = h(v, m)), a = l[s]) i = a.parse(t, h, s, this, i, o, e);
                    else {
                        if ("--" === s.substr(0, 2)) {
                            this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", $(t).getPropertyValue(s) + "", h + "", s, !1, s);
                            continue
                        }
                        d = K(t, s, r) + "", y = "string" == typeof h, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || y && C.test(h) ? (y || (h = ht(h), h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), i = wt(_, s, d, h, !0, "transparent", i, 0, o)) : y && D.test(h) ? i = wt(_, s, d, h, !0, null, i, 0, o) : (c = parseFloat(d), f = c || 0 === c ? d.substr((c + "").length) : "", ("" === d || "auto" === d) && ("width" === s || "height" === s ? (c = st(t, s, r), f = "px") : "left" === s || "top" === s ? (c = et(t, s, r), f = "px") : (c = "opacity" !== s ? 0 : 1, f = "")), x = y && "=" === h.charAt(1), x ? (p = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), p *= parseFloat(h), g = h.replace(b, "")) : (p = parseFloat(h), g = y ? h.replace(b, "") : ""), "" === g && (g = s in n ? n[s] : f), h = p || 0 === p ? (x ? p + c : p) + g : e[s], f !== g && ("" !== g || "lineHeight" === s) && (p || 0 === p) && c && (c = tt(t, s, c, f), "%" === g ? (c /= tt(t, s, 100, "%") / 100, e.strictUnits !== !0 && (d = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= tt(t, s, 1, g) : "px" !== g && (p = tt(t, s, p, g), g = "px"), x && (p || 0 === p) && (h = p + c + g)), x && (p += c), !c && 0 !== c || !p && 0 !== p ? void 0 !== _[s] && (h || h + "" != "NaN" && null != h) ? (i = new xt(_, s, p || c || 0, 0, i, -1, s, !1, 0, d, h), i.xs0 = "none" !== h || "display" !== s && -1 === s.indexOf("Style") ? h : d) : G("invalid " + s + " tween value: " + e[s]) : (i = new xt(_, s, c, p - c, i, 0, s, u !== !1 && ("px" === g || "zIndex" === s), 0, d, h), i.xs0 = g))
                    }
                    o && i && !i.plugin && (i.plugin = o)
                }
                return i
            }, c.setRatio = function(t) {
                var e, i, n, r = this._firstPT,
                    o = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
                                if (1 === r.type)
                                    if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, c._enableTransforms = function(t) {
                this._transform = this._transform || Bt(this._target, r, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
            };
            var Qt = function(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            c._addLazySet = function(t, e, i) {
                var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Qt, n.data = this
            }, c._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, c._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, c._kill = function(e) {
                var i, n, r, o = e;
                if (e.autoAlpha || e.alpha) {
                    o = {};
                    for (n in e) o[n] = e[n];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                }
                for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                return t.prototype._kill.call(this, o)
            };
            var Zt = function(t, e, i) {
                var n, r, o, s;
                if (t.slice)
                    for (r = t.length; --r > -1;) Zt(t[r], e, i);
                else
                    for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(it(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Zt(o, e, i)
            };
            return s.cascadeTo = function(t, i, n) {
                var r, o, s, a, l = e.to(t, i, n),
                    c = [l],
                    u = [],
                    p = [],
                    d = [],
                    h = e._internals.reservedProps;
                for (t = l._targets || l.target, Zt(t, u, d), l.render(i, !0, !0), Zt(t, p), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;)
                    if (o = nt(d[r], u[r], p[r]), o.firstMPT) {
                        o = o.difs;
                        for (s in n) h[s] && (o[s] = n[s]);
                        a = {};
                        for (s in o) a[s] = u[r][s];
                        c.push(e.fromTo(d[r], i, a, o))
                    } return c
            }, t.activate([s]), s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
    }("CSSPlugin"),
    function($, t, e, i) {
        "use strict";

        function n(t, e) {
            this.element = t, this.$context = $(t).data("api", this), this.$layers = this.$context.find(".layer");
            var i = {
                calibrateX: this.$context.data("calibrate-x") || null,
                calibrateY: this.$context.data("calibrate-y") || null,
                invertX: this.$context.data("invert-x") || null,
                invertY: this.$context.data("invert-y") || null,
                limitX: parseFloat(this.$context.data("limit-x")) || null,
                limitY: parseFloat(this.$context.data("limit-y")) || null,
                scalarX: parseFloat(this.$context.data("scalar-x")) || null,
                scalarY: parseFloat(this.$context.data("scalar-y")) || null,
                frictionX: parseFloat(this.$context.data("friction-x")) || null,
                frictionY: parseFloat(this.$context.data("friction-y")) || null,
                originX: parseFloat(this.$context.data("origin-x")) || null,
                originY: parseFloat(this.$context.data("origin-y")) || null,
                pointerEvents: this.$context.data("pointer-events") || !0,
                precision: parseFloat(this.$context.data("precision")) || 1
            };
            for (var n in i) null === i[n] && delete i[n];
            $.extend(this, s, e, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
        }
        var r = "parallax",
            o = 30,
            s = {
                relativeInput: !1,
                clipRelativeInput: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5,
                pointerEvents: !0,
                precision: 1
            };
        n.prototype.transformSupport = function(n) {
            for (var r = e.createElement("div"), o = !1, s = null, a = !1, l = null, c = null, u = 0, p = this.vendors.length; u < p; u++)
                if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), r.style[c] !== i) {
                    o = !0;
                    break
                } switch (n) {
                case "2D":
                    a = o;
                    break;
                case "3D":
                    if (o) {
                        var d = e.body || e.createElement("body"),
                            h = e.documentElement,
                            f = h.style.overflow,
                            g = !1;
                        e.body || (g = !0, h.style.overflow = "hidden", h.appendChild(d), d.style.overflow = "hidden", d.style.background = ""), d.appendChild(r), r.style[c] = "translate3d(1px,1px,1px)", s = t.getComputedStyle(r).getPropertyValue(l), a = s !== i && s.length > 0 && "none" !== s, h.style.overflow = f, d.removeChild(r), g && (d.removeAttribute("style"), d.parentNode.removeChild(d))
                    }
            }
            return a
        }, n.prototype.ww = null, n.prototype.wh = null, n.prototype.wcx = null, n.prototype.wcy = null, n.prototype.wrx = null, n.prototype.wry = null, n.prototype.portrait = null, n.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), n.prototype.vendors = [null, ["-webkit-", "webkit"],
            ["-moz-", "Moz"],
            ["-o-", "O"],
            ["-ms-", "ms"]
        ], n.prototype.motionSupport = !!t.DeviceMotionEvent, n.prototype.orientationSupport = !!t.DeviceOrientationEvent, n.prototype.orientationStatus = 0, n.prototype.transform2DSupport = n.prototype.transformSupport("2D"), n.prototype.transform3DSupport = n.prototype.transformSupport("3D"), n.prototype.propertyCache = {}, n.prototype.initialise = function() {
            "static" === this.$context.css("position") && this.$context.css({
                position: "relative"
            }), this.pointerEvents || this.$context.css({
                pointerEvents: "none"
            }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
        }, n.prototype.updateLayers = function() {
            this.$layers = this.$context.find(".layer"), this.depthsX = [], this.depthsY = [], this.$layers.css({
                position: "absolute",
                display: "block",
                left: 0,
                top: 0
            }), this.$layers.first().css({
                position: "relative"
            }), this.accelerate(this.$layers), this.$layers.each($.proxy(function(t, e) {
                var i = $(e).data("depth") || 0;
                this.depthsX.push($(e).data("depth-x") || i), this.depthsY.push($(e).data("depth-y") || i)
            }, this))
        }, n.prototype.updateDimensions = function() {
            this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
        }, n.prototype.updateBounds = function() {
            this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
        }, n.prototype.queueCalibration = function(t) {
            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
        }, n.prototype.enable = function() {
            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
        }, n.prototype.disable = function() {
            this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
        }, n.prototype.calibrate = function(t, e) {
            this.calibrateX = t === i ? this.calibrateX : t, this.calibrateY = e === i ? this.calibrateY : e
        }, n.prototype.invert = function(t, e) {
            this.invertX = t === i ? this.invertX : t, this.invertY = e === i ? this.invertY : e
        }, n.prototype.friction = function(t, e) {
            this.frictionX = t === i ? this.frictionX : t, this.frictionY = e === i ? this.frictionY : e
        }, n.prototype.scalar = function(t, e) {
            this.scalarX = t === i ? this.scalarX : t, this.scalarY = e === i ? this.scalarY : e
        }, n.prototype.limit = function(t, e) {
            this.limitX = t === i ? this.limitX : t, this.limitY = e === i ? this.limitY : e
        }, n.prototype.origin = function(t, e) {
            this.originX = t === i ? this.originX : t, this.originY = e === i ? this.originY : e
        }, n.prototype.clamp = function(t, e, i) {
            return t = Math.max(t, e), t = Math.min(t, i)
        }, n.prototype.css = function(t, e, n) {
            var r = this.propertyCache[e];
            if (!r)
                for (var o = 0, s = this.vendors.length; o < s; o++)
                    if (r = null !== this.vendors[o] ? $.camelCase(this.vendors[o][1] + "-" + e) : e, t.style[r] !== i) {
                        this.propertyCache[e] = r;
                        break
                    } t.style[r] = n
        }, n.prototype.accelerate = function(t) {
            for (var e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
            }
        }, n.prototype.setPosition = function(t, e, i) {
            e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
        }, n.prototype.onOrientationTimer = function(t) {
            this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
        }, n.prototype.onCalibrationTimer = function(t) {
            this.calibrationFlag = !0
        }, n.prototype.onWindowResize = function(t) {
            this.updateDimensions()
        }, n.prototype.onAnimationFrame = function() {
            this.updateBounds();
            var t = this.ix - this.cx,
                e = this.iy - this.cy;
            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
            for (var i = 0, n = this.$layers.length; i < n; i++) {
                var r = this.depthsX[i],
                    o = this.depthsY[i],
                    s = this.$layers[i],
                    a = this.vx * (r * (this.invertX ? -1 : 1)),
                    l = this.vy * (o * (this.invertY ? -1 : 1));
                this.setPosition(s, a, l)
            }
            this.raf = requestAnimationFrame(this.onAnimationFrame)
        }, n.prototype.onDeviceOrientation = function(e) {
            if (!this.desktop && null !== e.beta && null !== e.gamma) {
                this.orientationStatus = 1;
                var i = (e.beta || 0) / o,
                    n = (e.gamma || 0) / o,
                    r = t.innerHeight > t.innerWidth;
                this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
            }
        }, n.prototype.onMouseMove = function(t) {
            var e = t.clientX,
                i = t.clientY;
            !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
        };
        var a = {
            enable: n.prototype.enable,
            disable: n.prototype.disable,
            updateLayers: n.prototype.updateLayers,
            calibrate: n.prototype.calibrate,
            friction: n.prototype.friction,
            invert: n.prototype.invert,
            scalar: n.prototype.scalar,
            limit: n.prototype.limit,
            origin: n.prototype.origin
        };
        $.fn[r] = function(t) {
            var e = arguments;
            return this.each(function() {
                var i = $(this),
                    o = i.data(r);
                o || (o = new n(this, t), i.data(r, o)), a[t] && o[t].apply(o, Array.prototype.slice.call(e, 1))
            })
        }
    }(window.jQuery || window.Zepto, window, document),
    function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - t)),
                o = window.setTimeout(function() {
                    e(n + r)
                }, r);
            return t = n + r, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, n, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var r = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= r.slideCount) return !1;
            r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : n === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                r = this;
            r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                left: e
            }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                top: e
            }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), t({
                animStart: r.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(t) {
                    t = Math.ceil(t), r.options.vertical === !1 ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (r.applyTransition(), e = Math.ceil(e), r.options.vertical === !1 ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
                r.disableTransition(), i.call()
            }, r.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, r, o, s, a = this;
            if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; r > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = t * s + (e * a.options.slidesPerRow + i);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, r, o, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                r = null;
                for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, r, o, s = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll !== 0, n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                    break;
                case "next":
                    r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var r in e) {
                    if (t < e[r]) {
                        t = i;
                        break
                    }
                    i = e[r]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, r = this,
                o = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + o, r.options.variableWidth === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = r.options.rtl === !0 ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, r.options.centerMode === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = r.options.rtl === !0 ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                r = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n, r = this;
            return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(e, o) {
                return o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * r.swipeLeft ? (i = o, !1) : void 0
            }), e = Math.abs(t(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                    }, n.src = i
                })
            }
            var i, n, r, o, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(r + s.options.slidesToShow), s.options.fade === !0 && (r > 0 && r--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(r, o), e(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, r, o = this,
                s = t("img[data-lazy]", o.$slider);
            s.length ? (i = s.first(), n = i.attr("data-lazy"), r = document.createElement("img"), r.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad()
            }, r.onerror = function() {
                3 > e ? setTimeout(function() {
                    o.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad())
            }, r.src = n) : o.$slider.trigger("allImagesLoaded", [o])
        }, e.prototype.refresh = function(e) {
            var i, n, r = this;
            n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {
                currentSlide: i
            }), r.init(), e || r.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, r = this,
                o = r.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                r.respondTo = r.options.respondTo || "window";
                for (e in o)
                    if (n = r.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                        r.breakpoints.push(i), r.breakpointSettings[i] = o[e].settings
                    } r.breakpoints.sort(function(t, e) {
                    return r.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                r = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, r) {
                e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(r).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(r).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, r, o, s = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) s.options[n] = r;
            else if ("multiple" === o) t.each(n, function(t, e) {
                s.options[t] = e
            });
            else if ("responsive" === o)
                for (i in r)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[i]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(r[i])
                    } a && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, r, o = this;
            i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), o.options.centerMode === !0 ? (e = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = o.options.infinite === !0 ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, r = this;
            if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
                for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1) i = e - 1, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (e = 0; n > e; e += 1) i = e, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                r = parseInt(n.attr("data-slick-index"));
            return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, r, o, s, a, l = null,
                c = this;
            return e = e || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), r = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
                c.postSlide(r)
            })) : c.postSlide(r), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
                c.postSlide(r)
            }) : c.postSlide(r))))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, r, o, s = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), r = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + n * r : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * r, s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * r), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                r = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = n.length;
            for (t = 0; s > t; t++)
                if ("object" == typeof r || "undefined" == typeof r ? n[t].slick = new e(n[t], r) : i = n[t].slick[r].apply(n[t].slick, o), "undefined" != typeof i) return i;
            return n
        }
    });
var objectFitImages = function() {
    "use strict";

    function t(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }

    function e(t) {
        if (t.srcset && !g && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                reselect: !0
            })), t.currentSrc = t[e.ns].curSrc || t.src
        }
    }

    function i(t) {
        for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = u.exec(i));) n[e[1]] = e[2];
        return n
    }

    function n(e, i, n) {
        var r = t(i || 1, n || 0);
        m.call(e, "src") !== r && v.call(e, "src", r)
    }

    function r(t, e) {
        t.naturalWidth ? e(t) : setTimeout(r, 100, t, e)
    }

    function o(t) {
        var o = i(t),
            a = t[c];
        if (o["object-fit"] = o["object-fit"] || "fill", !a.img) {
            if ("fill" === o["object-fit"]) return;
            if (!a.skipTest && d && !o["object-position"]) return
        }
        if (!a.img) {
            a.img = new Image(t.width, t.height), a.img.srcset = m.call(t, "data-ofi-srcset") || t.srcset, a.img.src = m.call(t, "data-ofi-src") || t.src, v.call(t, "data-ofi-src", t.src), t.srcset && v.call(t, "data-ofi-srcset", t.srcset), n(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                s(t)
            } catch (t) {
                window.console && console.log("http://bit.ly/ofi-old-browser")
            }
        }
        e(a.img), t.style.backgroundImage = 'url("' + (a.img.currentSrc || a.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = o["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", /scale-down/.test(o["object-fit"]) ? r(a.img, function() {
            a.img.naturalWidth > t.width || a.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), r(a.img, function(e) {
            n(t, e.naturalWidth, e.naturalHeight)
        })
    }

    function s(t) {
        var e = {
            get: function(e) {
                return t[c].img[e ? e : "src"]
            },
            set: function(e, i) {
                return t[c].img[i ? i : "src"] = e, v.call(t, "data-ofi-" + i, e), o(t), e
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function() {
                return e.get("currentSrc")
            }
        }), Object.defineProperty(t, "srcset", {
            get: function() {
                return e.get("srcset")
            },
            set: function(t) {
                return e.set(t, "srcset")
            }
        })
    }

    function a() {
        function t(t, e) {
            return t[c] && t[c].img && ("src" === e || "srcset" === e) ? t[c].img : t
        }
        h || (HTMLImageElement.prototype.getAttribute = function(e) {
            return m.call(t(this, e), e)
        }, HTMLImageElement.prototype.setAttribute = function(e, i) {
            return v.call(t(this, e), e, String(i))
        })
    }

    function l(t, e) {
        var i = !y && !t;
        if (e = e || {}, t = t || "img", h && !e.skipTest || !f) return !1;
        "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var n = 0; n < t.length; n++) t[n][c] = t[n][c] || {
            skipTest: e.skipTest
        }, o(t[n]);
        i && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && l(t.target, {
                skipTest: e.skipTest
            })
        }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", l.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    var c = "bfred-it:object-fit-images",
        u = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        p = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        d = "object-fit" in p.style,
        h = "object-position" in p.style,
        f = "background-size" in p.style,
        g = "string" == typeof p.currentSrc,
        m = p.getAttribute,
        v = p.setAttribute,
        y = !1;
    return l.supportsObjectFit = d, l.supportsObjectPosition = h, a(), l
}();
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function($) {
        return e($, t, t.document, t.Math)
    }) : "object" == typeof exports && exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function($, t, e, i, n) {
    "use strict";
    var r = "fullpage-wrapper",
        o = "." + r,
        s = "fp-scrollable",
        a = "." + s,
        l = "fp-responsive",
        c = "fp-notransition",
        u = "fp-destroyed",
        p = "fp-enabled",
        d = "fp-viewing",
        h = "active",
        f = "." + h,
        g = "fp-completely",
        m = "." + g,
        v = ".section",
        y = "fp-section",
        x = "." + y,
        _ = x + f,
        w = x + ":first",
        b = x + ":last",
        T = "fp-tableCell",
        S = "." + T,
        k = "fp-auto-height",
        C = ".fp-auto-height",
        P = "fp-normal-scroll",
        O = ".fp-normal-scroll",
        A = "fp-nav",
        M = "#" + A,
        E = "fp-tooltip",
        N = "." + E,
        L = "fp-show-active",
        R = ".slide",
        D = "fp-slide",
        F = "." + D,
        j = F + f,
        z = "fp-slides",
        I = "." + z,
        X = "fp-slidesContainer",
        H = "." + X,
        B = "fp-table",
        Y = "fp-slidesNav",
        q = "." + Y,
        W = q + " a",
        V = "fp-controlArrow",
        U = "." + V,
        G = "fp-prev",
        Q = "." + G,
        Z = V + " " + G,
        J = U + Q,
        K = "fp-next",
        tt = "." + K,
        et = V + " " + K,
        it = U + tt,
        nt = $(t),
        rt = $(e),
        ot = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    $.fn.fullpage = function(s) {
        function a(t, e) {
            t || ti(0), oi("autoScrolling", t, e);
            var i = $(_);
            s.autoScrolling && !s.scrollBar ? (li.css({
                overflow: "hidden",
                height: "100%"
            }), C(Li.recordHistory, "internal"), fi.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), i.length && ti(i.position().top)) : (li.css({
                overflow: "visible",
                height: "initial"
            }), C(!1, "internal"), fi.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), i.length && li.scrollTop(i.position().top))
        }

        function C(t, e) {
            oi("recordHistory", t, e)
        }

        function O(t, e) {
            oi("scrollingSpeed", t, e)
        }

        function V(t, e) {
            oi("fitToSection", t, e)
        }

        function Q(t) {
            s.lockAnchors = t
        }

        function K(t) {
            t ? (We(), Ve()) : (qe(), Ue())
        }

        function tt(t, e) {
            "undefined" != typeof e ? (e = e.replace(/ /g, "").split(","), $.each(e, function(e, i) {
                ii(t, i, "m")
            })) : t ? (K(!0), Ge()) : (K(!1), Qe())
        }

        function at(t, e) {
            "undefined" != typeof e ? (e = e.replace(/ /g, "").split(","), $.each(e, function(e, i) {
                ii(t, i, "k")
            })) : s.keyboardScrolling = t
        }

        function lt() {
            var t = $(_).prev(x);
            t.length || !s.loopTop && !s.continuousVertical || (t = $(x).last()), t.length && Vt(t, null, !0)
        }

        function ct() {
            var t = $(_).next(x);
            t.length || !s.loopBottom && !s.continuousVertical || (t = $(x).first()), t.length && Vt(t, null, !1)
        }

        function ut(t, e) {
            O(0, "internal"), pt(t, e), O(Li.scrollingSpeed, "internal")
        }

        function pt(t, e) {
            var i = De(t);
            "undefined" != typeof e ? je(t, e) : i.length > 0 && Vt(i)
        }

        function dt(t) {
            Yt("right", t)
        }

        function ht(t) {
            Yt("left", t)
        }

        function ft(t) {
            if (!fi.hasClass(u)) {
                mi = !0, gi = nt.height(), $(x).each(function() {
                    var t = $(this).find(I),
                        e = $(this).find(F);
                    s.verticalCentered && $(this).find(S).css("height", Le($(this)) + "px"), $(this).css("height", gi + "px"), s.scrollOverflow && (e.length ? e.each(function() {
                        Ee($(this))
                    }) : Ee($(this))), e.length > 1 && ye(t, t.find(j))
                });
                var e = $(_),
                    i = e.index(x);
                i && ut(i + 1), mi = !1, $.isFunction(s.afterResize) && t && s.afterResize.call(fi), $.isFunction(s.afterReBuild) && !t && s.afterReBuild.call(fi)
            }
        }

        function gt(t) {
            var e = ci.hasClass(l);
            t ? e || (a(!1, "internal"), V(!1, "internal"), $(M).hide(), ci.addClass(l), $.isFunction(s.afterResponsive) && s.afterResponsive.call(fi, t)) : e && (a(Li.autoScrolling, "internal"), V(Li.autoScrolling, "internal"), $(M).show(), ci.removeClass(l), $.isFunction(s.afterResponsive) && s.afterResponsive.call(fi, t))
        }

        function mt() {
            s.css3 && (s.css3 = Ye()), s.scrollBar = s.scrollBar || s.hybrid, yt(), xt(), tt(!0), a(s.autoScrolling, "internal"), Te(), Be(), "complete" === e.readyState && oe(), nt.on("load", oe)
        }

        function vt() {
            nt.on("scroll", Nt).on("hashchange", se).blur(he).resize(be), rt.keydown(ae).keyup(ce).on("click touchstart", M + " a", fe).on("click touchstart", W, ge).on("click", N, le), $(x).on("click touchstart", U, de), s.normalScrollElements && (rt.on("mouseenter", s.normalScrollElements, function() {
                K(!1)
            }), rt.on("mouseleave", s.normalScrollElements, function() {
                K(!0)
            }))
        }

        function yt() {
            var t = fi.find(s.sectionSelector);
            s.anchors.length || (s.anchors = t.filter("[data-anchor]").map(function() {
                return $(this).data("anchor").toString()
            }).get()), s.navigationTooltips.length || (s.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                return $(this).data("tooltip").toString()
            }).get())
        }

        function xt() {
            fi.css({
                height: "100%",
                position: "relative"
            }), fi.addClass(r), $("html").addClass(p), gi = nt.height(), fi.removeClass(u), Tt(), $(x).each(function(t) {
                var e = $(this),
                    i = e.find(F),
                    n = i.length;
                wt(e, t), bt(e, t), n > 0 ? _t(e, i, n) : s.verticalCentered && Ne(e)
            }), s.fixedElements && s.css3 && $(s.fixedElements).appendTo(ci), s.navigation && kt(), Pt(), s.scrollOverflow ? ("complete" === e.readyState && Ct(), nt.on("load", Ct)) : Mt()
        }

        function _t(t, e, i) {
            var n = 100 * i,
                r = 100 / i;
            e.wrapAll('<div class="' + X + '" />'), e.parent().wrap('<div class="' + z + '" />'), t.find(H).css("width", n + "%"), i > 1 && (s.controlArrows && St(t), s.slidesNavigation && ze(t, i)), e.each(function(t) {
                $(this).css("width", r + "%"), s.verticalCentered && Ne($(this))
            });
            var o = t.find(j);
            o.length && (0 !== $(_).index(x) || 0 === $(_).index(x) && 0 !== o.index()) ? Ke(o, "internal") : e.eq(0).addClass(h)
        }

        function wt(t, e) {
            e || 0 !== $(_).length || t.addClass(h), Ti = $(_), t.css("height", gi + "px"), s.paddingTop && t.css("padding-top", s.paddingTop), s.paddingBottom && t.css("padding-bottom", s.paddingBottom), "undefined" != typeof s.sectionsColor[e] && t.css("background-color", s.sectionsColor[e]), "undefined" != typeof s.anchors[e] && t.attr("data-anchor", s.anchors[e])
        }

        function bt(t, e) {
            "undefined" != typeof s.anchors[e] && t.hasClass(h) && Oe(s.anchors[e], e), s.menu && s.css3 && $(s.menu).closest(o).length && $(s.menu).appendTo(ci)
        }

        function Tt() {
            fi.find(s.sectionSelector).addClass(y), fi.find(s.slideSelector).addClass(D)
        }

        function St(t) {
            t.find(I).after('<div class="' + Z + '"></div><div class="' + et + '"></div>'), "#fff" != s.controlArrowColor && (t.find(it).css("border-color", "transparent transparent transparent " + s.controlArrowColor), t.find(J).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || t.find(J).hide()
        }

        function kt() {
            $("#root").append('<div id="' + A + '"><ul></ul></div>');
            var t = $(M);
            t.addClass(function() {
                return s.showActiveTooltip ? L + " " + s.navigationPosition : s.navigationPosition
            });
            for (var e = 0; e < $(x).length; e++) {
                var i = "";
                s.anchors.length && (i = s.anchors[e]);
                var n = '<li><a href="#' + i + '"><span></span></a>',
                    r = s.navigationTooltips[e];
                "undefined" != typeof r && "" !== r && (n += '<div class="' + E + " " + s.navigationPosition + '">' + r + "</div>"), n += "</li>", t.find("ul").append(n)
            }
            $(M).css("margin-top", "-" + $(M).height() / 2 + "px"), $(M).find("li").eq($(_).index(x)).find("a").addClass(h)
        }

        function Ct() {
            $(x).each(function() {
                var t = $(this).find(F);
                t.length ? t.each(function() {
                    Ee($(this))
                }) : Ee($(this))
            }), Mt()
        }

        function Pt() {
            fi.find('iframe[src*="youtube.com/embed/"]').each(function() {
                Ot($(this), "enablejsapi=1")
            })
        }

        function Ot(t, e) {
            var i = t.attr("src");
            t.attr("src", i + At(i) + e)
        }

        function At(t) {
            return /\?/.test(t) ? "&" : "?"
        }

        function Mt() {
            var t = $(_);
            t.addClass(g), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(t), te(t), ee(t), s.scrollOverflowHandler.afterLoad(), Et() && $.isFunction(s.afterLoad) && s.afterLoad.call(t, t.data("anchor"), t.index(x) + 1), $.isFunction(s.afterRender) && s.afterRender.call(fi)
        }

        function Et() {
            var e = t.location.hash.replace("#", "").split("/"),
                i = De(decodeURIComponent(e[0]));
            return !i.length || i.length && i.index() === Ti.index()
        }

        function Nt() {
            var t;
            if (!s.autoScrolling || s.scrollBar) {
                var i = nt.scrollTop(),
                    n = Dt(i),
                    r = 0,
                    o = i + nt.height() / 2,
                    a = ci.height() - nt.height() === i,
                    l = e.querySelectorAll(x);
                if (a) r = l.length - 1;
                else if (i)
                    for (var c = 0; c < l.length; ++c) {
                        var u = l[c];
                        u.offsetTop <= o && (r = c)
                    } else r = 0;
                if (Rt(n) && ($(_).hasClass(g) || $(_).addClass(g).siblings().removeClass(g)), t = $(l).eq(r), !t.hasClass(h)) {
                    Ri = !0;
                    var p = $(_),
                        d = p.index(x) + 1,
                        f = Ae(t),
                        m = t.data("anchor"),
                        v = t.index(x) + 1,
                        y = t.find(j),
                        w, b;
                    y.length && (b = y.data("anchor"), w = y.index()), _i && (t.addClass(h).siblings().removeClass(h), $.isFunction(s.onLeave) && s.onLeave.call(p, d, v, f), $.isFunction(s.afterLoad) && s.afterLoad.call(t, m, v), ne(p), te(t), ee(t), Oe(m, v - 1), s.anchors.length && (yi = m), Ie(w, b, m, v)), clearTimeout(Mi), Mi = setTimeout(function() {
                        Ri = !1
                    }, 100)
                }
                s.fitToSection && (clearTimeout(Ei), Ei = setTimeout(function() {
                    s.fitToSection && Lt()
                }, s.fitToSectionDelay))
            }
        }

        function Lt() {
            _i && (mi = !0, Vt($(_)), mi = !1)
        }

        function Rt(t) {
            var e = $(_).position().top,
                i = e + nt.height();
            return "up" == t ? i >= nt.scrollTop() + nt.height() : e <= nt.scrollTop()
        }

        function Dt(t) {
            var e = t > Di ? "down" : "up";
            return Di = t, Xi = t, e
        }

        function Ft(t, e) {
            if (Si.m[t]) {
                var i = "down" === t ? "bottom" : "top",
                    n = "down" === t ? ct : lt;
                if (e.length > 0) {
                    if (!s.scrollOverflowHandler.isScrolled(i, e)) return !0;
                    n()
                } else n()
            }
        }

        function jt(t) {
            var e = t.originalEvent;
            !zt(t.target) && s.autoScrolling && It(e) && t.preventDefault()
        }

        function $t(t) {
            var e = t.originalEvent,
                n = $(e.target).closest(x);
            if (!zt(t.target) && It(e)) {
                s.autoScrolling && t.preventDefault();
                var r = s.scrollOverflowHandler.scrollable(n),
                    o = Je(e);
                $i = o.y, zi = o.x, n.find(I).length && i.abs(ji - zi) > i.abs(Fi - $i) ? !pi && i.abs(ji - zi) > nt.outerWidth() / 100 * s.touchSensitivity && (ji > zi ? Si.m.right && dt(n) : Si.m.left && ht(n)) : s.autoScrolling && _i && i.abs(Fi - $i) > nt.height() / 100 * s.touchSensitivity && (Fi > $i ? Ft("down", r) : $i > Fi && Ft("up", r))
            }
        }

        function zt(t, e) {
            e = e || 0;
            var i = $(t).parent();
            return !!(e < s.normalScrollElementTouchThreshold && i.is(s.normalScrollElements)) || e != s.normalScrollElementTouchThreshold && zt(i, ++e)
        }

        function It(t) {
            return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
        }

        function Xt(t) {
            var e = t.originalEvent;
            if (s.fitToSection && li.stop(), It(e)) {
                var i = Je(e);
                Fi = i.y, ji = i.x
            }
        }

        function Ht(t, e) {
            for (var n = 0, r = t.slice(i.max(t.length - e, 1)), o = 0; o < r.length; o++) n += r[o];
            return i.ceil(n / e)
        }

        function Bt(e) {
            var n = (new Date).getTime(),
                r = $(m).hasClass(P);
            if (s.autoScrolling && !bi && !r) {
                e = e || t.event;
                var o = e.wheelDelta || -e.deltaY || -e.detail,
                    a = i.max(-1, i.min(1, o)),
                    l = "undefined" != typeof e.wheelDeltaX || "undefined" != typeof e.deltaX,
                    c = i.abs(e.wheelDeltaX) < i.abs(e.wheelDelta) || i.abs(e.deltaX) < i.abs(e.deltaY) || !l;
                wi.length > 149 && wi.shift(), wi.push(i.abs(o)), s.scrollBar && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                var u = $(_),
                    p = s.scrollOverflowHandler.scrollable(u),
                    d = n - Ii;
                if (Ii = n, d > 200 && (wi = []), _i) {
                    var h = Ht(wi, 10),
                        f = Ht(wi, 70),
                        g = h >= f;
                    g && c && (a < 0 ? Ft("down", p) : Ft("up", p))
                }
                return !1
            }
            s.fitToSection && li.stop()
        }

        function Yt(t, e) {
            var i = "undefined" == typeof e ? $(_) : e,
                n = i.find(I),
                r = n.find(F).length;
            if (!(!n.length || pi || r < 2)) {
                var o = n.find(j),
                    a = null;
                if (a = "left" === t ? o.prev(F) : o.next(F), !a.length) {
                    if (!s.loopHorizontal) return;
                    a = "left" === t ? o.siblings(":last") : o.siblings(":first")
                }
                pi = !0, ye(n, a, t)
            }
        }

        function qt() {
            $(j).each(function() {
                Ke($(this), "internal")
            })
        }

        function Wt(t) {
            var e = t.position(),
                i = e.top,
                n = e.top > Xi,
                r = i - gi + t.outerHeight(),
                o = s.bigSectionsDestination;
            return t.outerHeight() > gi ? (n || o) && "bottom" !== o || (i = r) : (n || mi && t.is(":last-child")) && (i = r), Xi = i, i
        }

        function Vt(t, e, i) {
            if ("undefined" != typeof t) {
                var n = Wt(t),
                    r, o, a = {
                        element: t,
                        callback: e,
                        isMovementUp: i,
                        dtop: n,
                        yMovement: Ae(t),
                        anchorLink: t.data("anchor"),
                        sectionIndex: t.index(x),
                        activeSlide: t.find(j),
                        activeSection: $(_),
                        leavingSection: $(_).index(x) + 1,
                        localIsResizing: mi
                    };
                a.activeSection.is(t) && !mi || s.scrollBar && nt.scrollTop() === a.dtop && !t.hasClass(k) || (a.activeSlide.length && (r = a.activeSlide.data("anchor"), o = a.activeSlide.index()), s.autoScrolling && s.continuousVertical && "undefined" != typeof a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = Qt(a)), $.isFunction(s.onLeave) && !a.localIsResizing && s.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) === !1 || (a.localIsResizing || ne(a.activeSection), s.scrollOverflowHandler.beforeLeave(), t.addClass(h).siblings().removeClass(h), te(t), s.scrollOverflowHandler.onLeave(), _i = !1, Ie(o, r, a.anchorLink, a.sectionIndex), Ut(a), yi = a.anchorLink, Oe(a.anchorLink, a.sectionIndex)))
            }
        }

        function Ut(t) {
            if (s.css3 && s.autoScrolling && !s.scrollBar) {
                var e = "translate3d(0px, -" + i.round(t.dtop) + "px, 0px)";
                Re(e, !0), s.scrollingSpeed ? (clearTimeout(Oi), Oi = setTimeout(function() {
                    Jt(t)
                }, s.scrollingSpeed)) : Jt(t)
            } else {
                var n = Gt(t);
                $(n.element).animate(n.options, s.scrollingSpeed, s.easing).promise().done(function() {
                    s.scrollBar ? setTimeout(function() {
                        Jt(t)
                    }, 30) : Jt(t)
                })
            }
        }

        function Gt(t) {
            var e = {};
            return s.autoScrolling && !s.scrollBar ? (e.options = {
                top: -t.dtop
            }, e.element = o) : (e.options = {
                scrollTop: t.dtop
            }, e.element = "html, body"), e
        }

        function Qt(t) {
            return t.isMovementUp ? $(_).before(t.activeSection.nextAll(x)) : $(_).after(t.activeSection.prevAll(x).get().reverse()), ti($(_).position().top), qt(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = Ae(t.element), t
        }

        function Zt(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? $(w).before(t.wrapAroundElements) : $(b).after(t.wrapAroundElements), ti($(_).position().top), qt())
        }

        function Jt(t) {
            Zt(t), $.isFunction(s.afterLoad) && !t.localIsResizing && s.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), s.scrollOverflowHandler.afterLoad(), t.localIsResizing || ee(t.element), t.element.addClass(g).siblings().removeClass(g), _i = !0, $.isFunction(t.callback) && t.callback.call(this)
        }

        function Kt(t, e) {
            t.attr(e, t.data(e)).removeAttr("data-" + e)
        }

        function te(t) {
            if (s.lazyLoading) {
                var e = re(t),
                    i;
                e.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    i = $(this), $.each(["src", "srcset"], function(t, e) {
                        var n = i.attr("data-" + e);
                        "undefined" != typeof n && n && Kt(i, e)
                    }), i.is("source") && i.closest("video").get(0).load()
                })
            }
        }

        function ee(t) {
            var e = re(t);
            e.find("video, audio").each(function() {
                var t = $(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
            }), e.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = $(this).get(0);
                t.hasAttribute("data-autoplay") && ie(t), t.onload = function() {
                    t.hasAttribute("data-autoplay") && ie(t)
                }
            })
        }

        function ie(t) {
            t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function ne(t) {
            var e = re(t);
            e.find("video, audio").each(function() {
                var t = $(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
            }), e.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = $(this).get(0);
                /youtube\.com\/embed\//.test($(this).attr("src")) && !t.hasAttribute("data-keepplaying") && $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function re(t) {
            var e = t.find(j);
            return e.length && (t = $(e)), t
        }

        function oe() {
            var e = t.location.hash.replace("#", "").split("/"),
                i = decodeURIComponent(e[0]),
                n = decodeURIComponent(e[1]);
            i && (s.animateAnchor ? je(i, n) : ut(i, n))
        }

        function se() {
            if (!Ri && !s.lockAnchors) {
                var e = t.location.hash.replace("#", "").split("/"),
                    i = decodeURIComponent(e[0]),
                    n = decodeURIComponent(e[1]),
                    r = "undefined" == typeof yi,
                    o = "undefined" == typeof yi && "undefined" == typeof n && !pi;
                i.length && (i && i !== yi && !r || o || !pi && xi != n) && je(i, n)
            }
        }

        function ae(t) {
            clearTimeout(Ni);
            var e = $(":focus");
            if (!e.is("textarea") && !e.is("input") && !e.is("select") && "true" !== e.attr("contentEditable") && "" !== e.attr("contentEditable") && s.keyboardScrolling && s.autoScrolling) {
                var i = t.which,
                    n = [40, 38, 32, 33, 34];
                $.inArray(i, n) > -1 && t.preventDefault(), bi = t.ctrlKey, Ni = setTimeout(function() {
                    me(t)
                }, 150)
            }
        }

        function le() {
            $(this).prev().trigger("click")
        }

        function ce(t) {
            vi && (bi = t.ctrlKey)
        }

        function ue(t) {
            2 == t.which && (Hi = t.pageY, fi.on("mousemove", ve))
        }

        function pe(t) {
            2 == t.which && fi.off("mousemove")
        }

        function de() {
            var t = $(this).closest(x);
            $(this).hasClass(G) ? Si.m.left && ht(t) : Si.m.right && dt(t)
        }

        function he() {
            vi = !1, bi = !1
        }

        function fe(t) {
            t.preventDefault();
            var e = $(this).parent().index();
            Vt($(x).eq(e))
        }

        function ge(t) {
            t.preventDefault();
            var e = $(this).closest(x).find(I),
                i = e.find(F).eq($(this).closest("li").index());
            ye(e, i)
        }

        function me(t) {
            var e = t.shiftKey;
            if (_i || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
                case 38:
                case 33:
                    Si.k.up && lt();
                    break;
                case 32:
                    if (e && Si.k.up) {
                        lt();
                        break
                    }
                    case 40:
                    case 34:
                        Si.k.down && ct();
                        break;
                    case 36:
                        Si.k.up && pt(1);
                        break;
                    case 35:
                        Si.k.down && pt($(x).length);
                        break;
                    case 37:
                        Si.k.left && ht();
                        break;
                    case 39:
                        Si.k.right && dt();
                        break;
                    default:
                        return
            }
        }

        function ve(t) {
            _i && (t.pageY < Hi && Si.m.up ? lt() : t.pageY > Hi && Si.m.down && ct()), Hi = t.pageY
        }

        function ye(t, e, i) {
            var n = t.closest(x),
                r = {
                    slides: t,
                    destiny: e,
                    direction: i,
                    destinyPos: e.position(),
                    slideIndex: e.index(),
                    section: n,
                    sectionIndex: n.index(x),
                    anchorLink: n.data("anchor"),
                    slidesNav: n.find(q),
                    slideAnchor: He(e),
                    prevSlide: n.find(j),
                    prevSlideIndex: n.find(j).index(),
                    localIsResizing: mi
                };
            return r.xMovement = Me(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (_i = !1), s.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && $.isFunction(s.onSlideLeave) && s.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex) === !1 ? void(pi = !1) : (e.addClass(h).siblings().removeClass(h), r.localIsResizing || (ne(r.prevSlide), te(e)), !s.loopHorizontal && s.controlArrows && (n.find(J).toggle(0 !== r.slideIndex), n.find(it).toggle(!e.is(":last-child"))), n.hasClass(h) && !r.localIsResizing && Ie(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), void _e(t, r, !0))
        }

        function xe(t) {
            we(t.slidesNav, t.slideIndex), t.localIsResizing || ($.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), _i = !0, ee(t.destiny)), pi = !1
        }

        function _e(t, e, n) {
            var r = e.destinyPos;
            if (s.css3) {
                var o = "translate3d(-" + i.round(r.left) + "px, 0px, 0px)";
                Se(t.find(H)).css(ei(o)), Ai = setTimeout(function() {
                    n && xe(e)
                }, s.scrollingSpeed, s.easing)
            } else t.animate({
                scrollLeft: i.round(r.left)
            }, s.scrollingSpeed, s.easing, function() {
                n && xe(e)
            })
        }

        function we(t, e) {
            t.find(f).removeClass(h), t.find("li").eq(e).find("a").addClass(h)
        }

        function be() {
            if (Te(), di) {
                var t = $(e.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var n = nt.height();
                    i.abs(n - Bi) > 20 * i.max(Bi, n) / 100 && (ft(!0), Bi = n)
                }
            } else clearTimeout(Pi), Pi = setTimeout(function() {
                ft(!0)
            }, 350)
        }

        function Te() {
            var t = s.responsive || s.responsiveWidth,
                e = s.responsiveHeight,
                i = t && nt.outerWidth() < t,
                n = e && nt.height() < e;
            t && e ? gt(i || n) : t ? gt(i) : e && gt(n)
        }

        function Se(t) {
            var e = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
            return t.removeClass(c), t.css({
                "-webkit-transition": e,
                transition: e
            })
        }

        function ke(t) {
            return t.addClass(c)
        }

        function Ce(t, e) {
            s.navigation && ($(M).find(f).removeClass(h), t ? $(M).find('a[href="#' + t + '"]').addClass(h) : $(M).find("li").eq(e).find("a").addClass(h))
        }

        function Pe(t) {
            s.menu && ($(s.menu).find(f).removeClass(h), $(s.menu).find('[data-menuanchor="' + t + '"]').addClass(h))
        }

        function Oe(t, e) {
            Pe(t), Ce(t, e)
        }

        function Ae(t) {
            var e = $(_).index(x),
                i = t.index(x);
            return e == i ? "none" : e > i ? "up" : "down"
        }

        function Me(t, e) {
            return t == e ? "none" : t > e ? "left" : "right"
        }

        function Ee(t) {
            if (!t.hasClass("fp-noscroll")) {
                t.css("overflow", "hidden");
                var e = s.scrollOverflowHandler,
                    i = e.wrapContent(),
                    n = t.closest(x),
                    r = e.scrollable(t),
                    o;
                r.length ? o = e.scrollHeight(t) : (o = t.get(0).scrollHeight, s.verticalCentered && (o = t.find(S).get(0).scrollHeight));
                var a = gi - parseInt(n.css("padding-bottom")) - parseInt(n.css("padding-top"));
                o > a ? r.length ? e.update(t, a) : (s.verticalCentered ? t.find(S).wrapInner(i) : t.wrapInner(i), e.create(t, a)) : e.remove(t), t.css("overflow", "")
            }
        }

        function Ne(t) {
            t.hasClass(B) || t.addClass(B).wrapInner('<div class="' + T + '" style="height:' + Le(t) + 'px;" />')
        }

        function Le(t) {
            var e = gi;
            if (s.paddingTop || s.paddingBottom) {
                var i = t;
                i.hasClass(y) || (i = t.closest(x));
                var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                e = gi - n
            }
            return e
        }

        function Re(t, e) {
            e ? Se(fi) : ke(fi), fi.css(ei(t)), setTimeout(function() {
                fi.removeClass(c)
            }, 10)
        }

        function De(t) {
            if (!t) return [];
            var e = fi.find(x + '[data-anchor="' + t + '"]');
            return e.length || (e = $(x).eq(t - 1)), e
        }

        function Fe(t, e) {
            var i = e.find(I),
                n = i.find(F + '[data-anchor="' + t + '"]');
            return n.length || (n = i.find(F).eq(t)), n
        }

        function je(t, e) {
            var i = De(t);
            i.length && ("undefined" == typeof e && (e = 0), t === yi || i.hasClass(h) ? $e(i, e) : Vt(i, function() {
                $e(i, e)
            }))
        }

        function $e(t, e) {
            if ("undefined" != typeof e) {
                var i = t.find(I),
                    n = Fe(e, t);
                n.length && ye(i, n)
            }
        }

        function ze(t, e) {
            t.append('<div class="' + Y + '"><ul></ul></div>');
            var i = t.find(q);
            i.addClass(s.slidesNavPosition);
            for (var n = 0; n < e; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(h)
        }

        function Ie(t, e, i, n) {
            var r = "";
            s.anchors.length && !s.lockAnchors && (t ? ("undefined" != typeof i && (r = i), "undefined" == typeof e && (e = t), xi = e, Xe(r + "/" + e)) : "undefined" != typeof t ? (xi = e, Xe(i)) : Xe(i)), Be()
        }

        function Xe(e) {
            if (s.recordHistory) location.hash = e;
            else if (di || hi) t.history.replaceState(n, n, "#" + e);
            else {
                var i = t.location.href.split("#")[0];
                t.location.replace(i + "#" + e)
            }
        }

        function He(t) {
            var e = t.data("anchor"),
                i = t.index();
            return "undefined" == typeof e && (e = i), e
        }

        function Be() {
            var t = $(_),
                e = t.find(j),
                i = He(t),
                n = He(e),
                r = String(i);
            e.length && (r = r + "-" + n), r = r.replace("/", "-").replace("#", "");
            var o = new RegExp("\\b\\s?" + d + "-[^\\s]+\\b", "g");
            ci[0].className = ci[0].className.replace(o, ""), ci.addClass(d + "-" + r)
        }

        function Ye() {
            var i = e.createElement("p"),
                r, o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            e.body.insertBefore(i, null);
            for (var s in o) i.style[s] !== n && (i.style[s] = "translate3d(1px,1px,1px)", r = t.getComputedStyle(i).getPropertyValue(o[s]));
            return e.body.removeChild(i), r !== n && r.length > 0 && "none" !== r
        }

        function qe() {
            e.addEventListener ? (e.removeEventListener("mousewheel", Bt, !1), e.removeEventListener("wheel", Bt, !1), e.removeEventListener("MozMousePixelScroll", Bt, !1)) : e.detachEvent("onmousewheel", Bt)
        }

        function We() {
            var i = "",
                r;
            t.addEventListener ? r = "addEventListener" : (r = "attachEvent", i = "on");
            var o = "onwheel" in e.createElement("div") ? "wheel" : e.onmousewheel !== n ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == o ? e[r](i + "MozMousePixelScroll", Bt, !1) : e[r](i + o, Bt, !1)
        }

        function Ve() {
            fi.on("mousedown", ue).on("mouseup", pe)
        }

        function Ue() {
            fi.off("mousedown", ue).off("mouseup", pe)
        }

        function Ge() {
            (di || hi) && (s.autoScrolling && ci.off(Ci.touchmove).on(Ci.touchmove, jt), $(o).off(Ci.touchstart).on(Ci.touchstart, Xt).off(Ci.touchmove).on(Ci.touchmove, $t))
        }

        function Qe() {
            (di || hi) && $(o).off(Ci.touchstart).off(Ci.touchmove)
        }

        function Ze() {
            var e;
            return e = t.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Je(t) {
            var e = [];
            return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, hi && It(t) && s.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
        }

        function Ke(t, e) {
            O(0, "internal"), "undefined" != typeof e && (mi = !0), ye(t.closest(I), t), "undefined" != typeof e && (mi = !1), O(Li.scrollingSpeed, "internal")
        }

        function ti(t) {
            var e = i.round(t);
            if (s.css3 && s.autoScrolling && !s.scrollBar) {
                var n = "translate3d(0px, -" + e + "px, 0px)";
                Re(n, !1)
            } else s.autoScrolling && !s.scrollBar ? fi.css("top", -e) : li.scrollTop(e)
        }

        function ei(t) {
            return {
                "-webkit-transform": t,
                "-moz-transform": t,
                "-ms-transform": t,
                transform: t
            }
        }

        function ii(t, e, i) {
            switch (e) {
                case "up":
                    Si[i].up = t;
                    break;
                case "down":
                    Si[i].down = t;
                    break;
                case "left":
                    Si[i].left = t;
                    break;
                case "right":
                    Si[i].right = t;
                    break;
                case "all":
                    "m" == i ? tt(t) : at(t)
            }
        }

        function ni(t) {
            a(!1, "internal"), tt(!1), at(!1), fi.addClass(u), clearTimeout(Ai), clearTimeout(Oi), clearTimeout(Pi), clearTimeout(Mi), clearTimeout(Ei), nt.off("scroll", Nt).off("hashchange", se).off("resize", be), rt.off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", W).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), $(x).off("click touchstart", U), clearTimeout(Ai), clearTimeout(Oi), t && ri()
        }

        function ri() {
            ti(0), fi.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                Kt($(this), "src")
            }), fi.find("img[data-srcset]").each(function() {
                Kt($(this), "srcset")
            }), $(M + ", " + q + ", " + U).remove(), $(x).css({
                height: "",
                "background-color": "",
                padding: ""
            }), $(F).css({
                width: ""
            }), fi.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), li.css({
                overflow: "",
                height: ""
            }), $("html").removeClass(p), ci.removeClass(l), $.each(ci.get(0).className.split(/\s+/), function(t, e) {
                0 === e.indexOf(d) && ci.removeClass(e)
            }), $(x + ", " + F).each(function() {
                s.scrollOverflowHandler.remove($(this)), $(this).removeClass(B + " " + h)
            }), ke(fi), fi.find(S + ", " + H + ", " + I).each(function() {
                $(this).replaceWith(this.childNodes)
            }), fi.css({
                "-webkit-transition": "none",
                transition: "none"
            }), li.scrollTop(0);
            var t = [y, D, X];
            $.each(t, function(t, e) {
                $("." + e).removeClass(e)
            })
        }

        function oi(t, e, i) {
            s[t] = e, "internal" !== i && (Li[t] = e)
        }

        function si() {
            var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return $("html").hasClass(p) ? void ai("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, ai("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && ai("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !s.continuousVertical || !s.scrollBar && s.autoScrolling || (s.continuousVertical = !1, ai("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), $.each(t, function(t, e) {
                s[e] && ai("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + e)
            }), void $.each(s.anchors, function(t, e) {
                var i = rt.find("[name]").filter(function() {
                        return $(this).attr("name") && $(this).attr("name").toLowerCase() == e.toLowerCase()
                    }),
                    n = rt.find("[id]").filter(function() {
                        return $(this).attr("id") && $(this).attr("id").toLowerCase() == e.toLowerCase()
                    });
                (n.length || i.length) && (ai("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && ai("error", '"' + e + '" is is being used by another element `id` property'), i.length && ai("error", '"' + e + '" is is being used by another element `name` property'))
            }))
        }

        function ai(t, e) {
            console && console[t] && console[t]("fullPage: " + e)
        }
        if ($("html").hasClass(p)) return void si();
        var li = $("html, body"),
            ci = $("body"),
            ui = $.fn.fullpage;
        s = $.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: st,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: v,
            slideSelector: R,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, s);
        var pi = !1,
            di = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            hi = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            fi = $(this),
            gi = nt.height(),
            mi = !1,
            vi = !0,
            yi, xi, _i = !0,
            wi = [],
            bi, Ti, Si = {};
        Si.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, Si.k = $.extend(!0, {}, Si.m);
        var ki = Ze(),
            Ci = {
                touchmove: "ontouchmove" in t ? "touchmove" : ki.move,
                touchstart: "ontouchstart" in t ? "touchstart" : ki.down
            },
            Pi, Oi, Ai, Mi, Ei, Ni, Li = $.extend(!0, {}, s);
        si(), ot.click = hi, ot = $.extend(ot, s.scrollOverflowOptions), $.extend($.easing, {
            easeInOutCubic: function(t, e, i, n, r) {
                return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
            }
        }), $(this).length && (ui.setAutoScrolling = a, ui.setRecordHistory = C, ui.setScrollingSpeed = O, ui.setFitToSection = V, ui.setLockAnchors = Q,
            ui.setMouseWheelScrolling = K, ui.setAllowScrolling = tt, ui.setKeyboardScrolling = at, ui.moveSectionUp = lt, ui.moveSectionDown = ct, ui.silentMoveTo = ut, ui.moveTo = pt, ui.moveSlideRight = dt, ui.moveSlideLeft = ht, ui.fitToSection = Lt, ui.reBuild = ft, ui.setResponsive = gt, ui.destroy = ni, mt(), vt());
        var Ri = !1,
            Di = 0,
            Fi = 0,
            ji = 0,
            $i = 0,
            zi = 0,
            Ii = (new Date).getTime(),
            Xi = 0,
            Hi = 0,
            Bi = gi
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var st = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(t) {
            var e = $(_).find(a);
            e.each(function() {
                var e = $(this).data("iscrollInstance");
                "undefined" != typeof e && e && (t ? e.wheelOn() : e.wheelOff())
            })
        },
        onLeave: function() {
            st.toggleWheel(!1)
        },
        beforeLeave: function() {
            st.onLeave()
        },
        afterLoad: function() {
            st.toggleWheel(!0)
        },
        create: function(t, e) {
            var i = t.find(a);
            i.height(e), i.each(function() {
                var t = $(this),
                    e = t.data("iscrollInstance");
                e && $.each(st.iScrollInstances, function() {
                    $(this).destroy()
                }), e = new IScroll(t.get(0), ot), st.iScrollInstances.push(e), e.wheelOff(), t.data("iscrollInstance", e)
            })
        },
        isScrolled: function(t, e) {
            var i = e.data("iscrollInstance");
            return !i || ("top" === t ? i.y >= 0 && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)
        },
        scrollable: function(t) {
            return t.find(I).length ? t.find(j).find(a) : t.find(a)
        },
        scrollHeight: function(t) {
            return t.find(a).children().first().get(0).scrollHeight
        },
        remove: function(t) {
            var e = t.find(a);
            if (e.length) {
                var i = e.data("iscrollInstance");
                i.destroy(), e.data("iscrollInstance", null)
            }
            t.find(a).children().first().children().first().unwrap().unwrap()
        },
        update: function(t, e) {
            clearTimeout(st.refreshId), st.refreshId = setTimeout(function() {
                $.each(st.iScrollInstances, function() {
                    $(this).get(0).refresh()
                })
            }, 150), t.find(a).css("height", e + "px").parent().css("height", e + "px")
        },
        wrapContent: function() {
            return '<div class="' + s + '"><div class="fp-scroller"></div></div>'
        }
    }
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, n = t.split("."),
                r = e;
            for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
            return r
        },
        n = i("com.greensock.utils"),
        r = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        o = document,
        s = o.defaultView ? o.defaultView.getComputedStyle : function() {},
        a = /([A-Z])/g,
        l = function(t, e, i, n) {
            var r;
            return (i = i || s(t, null)) ? (t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
        },
        c = function(t) {
            return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        },
        u = function(t) {
            var e, i, n, r = [],
                o = t.length;
            for (e = 0; o > e; e++)
                if (i = t[e], c(i))
                    for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                else r.push(i);
            return r
        },
        p = /(?:\r|\n|\t\t)/g,
        d = /(?:\s\s+)/g,
        h = 55296,
        f = 56319,
        g = 56320,
        m = 127462,
        v = 127487,
        y = 127995,
        x = 127999,
        _ = function(t) {
            return (t.charCodeAt(0) - h << 10) + (t.charCodeAt(1) - g) + 65536
        },
        w = o.all && !o.addEventListener,
        b = " style='position:relative;display:inline-block;" + (w ? "*display:inline;*zoom:1;'" : "'"),
        T = function(t, e) {
            t = t || "";
            var i = -1 !== t.indexOf("++"),
                n = 1;
            return i && (t = t.split("++").join("")),
                function() {
                    return "<" + e + b + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                }
        },
        S = n.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = S.selector(t)), !t) throw "cannot split a null element.";
            this.elements = c(t) ? u(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        k = function(t, e, i) {
            var n = t.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (t = t.firstChild; t; t = t.nextSibling) k(t, e, i);
            else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        C = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        P = function(t) {
            var e, i = [],
                n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        },
        O = function(t, e, i) {
            for (var n; t && t !== e;) {
                if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
            return !1
        },
        A = function(t) {
            var e, i, n = P(t.childNodes),
                r = n.length;
            for (e = 0; r > e; e++) i = n[e], i._isSplit ? A(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
        },
        M = function(t, e, i, n, r, a, c) {
            var u, p, d, h, f, g, m, v, y, x, _, w, b = s(t),
                T = l(t, "paddingLeft", b),
                S = -999,
                P = l(t, "borderBottomWidth", b) + l(t, "borderTopWidth", b),
                M = l(t, "borderLeftWidth", b) + l(t, "borderRightWidth", b),
                E = l(t, "paddingTop", b) + l(t, "paddingBottom", b),
                N = l(t, "paddingLeft", b) + l(t, "paddingRight", b),
                L = .2 * l(t, "fontSize"),
                R = l(t, "textAlign", b, !0),
                D = [],
                F = [],
                j = [],
                z = e.wordDelimiter || " ",
                I = e.span ? "span" : "div",
                X = e.type || e.split || "chars,words,lines",
                H = r && -1 !== X.indexOf("lines") ? [] : null,
                B = -1 !== X.indexOf("words"),
                Y = -1 !== X.indexOf("chars"),
                q = "absolute" === e.position || e.absolute === !0,
                W = e.linesClass,
                V = -1 !== (W || "").indexOf("++");
            for (H && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), V && (W = W.split("++").join("")), p = t.getElementsByTagName("*"), d = p.length, f = [], u = 0; d > u; u++) f[u] = p[u];
            if (H || q)
                for (u = 0; d > u; u++) h = f[u], g = h.parentNode === t, (g || q || Y && !B) && (w = h.offsetTop, H && g && Math.abs(w - S) > L && "BR" !== h.nodeName && (m = [], H.push(m), S = w), q && (h._x = h.offsetLeft, h._y = w, h._w = h.offsetWidth, h._h = h.offsetHeight), H && ((h._isSplit && g || !Y && g || B && g || !B && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (m.push(h), h._x -= T, O(h, t, z) && (h._wordEnd = !0)), "BR" === h.nodeName && h.nextSibling && "BR" === h.nextSibling.nodeName && H.push([])));
            for (u = 0; d > u; u++) h = f[u], g = h.parentNode === t, "BR" !== h.nodeName ? (q && (y = h.style, B || g || (h._x += h.parentNode._x, h._y += h.parentNode._y), y.left = h._x + "px", y.top = h._y + "px", y.position = "absolute", y.display = "block", y.width = h._w + 1 + "px", y.height = h._h + "px"), !B && Y ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), f.splice(u--, 1), d--) : g || (w = !h.nextSibling && O(h.parentNode, t, z), h.parentNode._parent && h.parentNode._parent.appendChild(h), w && h.parentNode.appendChild(o.createTextNode(" ")), e.span && (h.style.display = "inline"), D.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? F.push(h) : Y && !h._isSplit && (e.span && (h.style.display = "inline"), D.push(h))) : H || q ? (t.removeChild(h), f.splice(u--, 1), d--) : B || t.appendChild(h);
            if (H) {
                for (q && (x = o.createElement(I), t.appendChild(x), _ = x.offsetWidth + "px", w = x.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(x)), y = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (v = " " === z && (!q || !B && !Y), u = 0; u < H.length; u++) {
                    for (m = H[u], x = o.createElement(I), x.style.cssText = "display:block;text-align:" + R + ";position:" + (q ? "absolute;" : "relative;"), W && (x.className = W + (V ? u + 1 : "")), j.push(x), d = m.length, p = 0; d > p; p++) "BR" !== m[p].nodeName && (h = m[p], x.appendChild(h), v && h._wordEnd && x.appendChild(o.createTextNode(" ")), q && (0 === p && (x.style.top = h._y + "px", x.style.left = T + w + "px"), h.style.top = "0px", w && (h.style.left = h._x - w + "px")));
                    0 === d ? x.innerHTML = "&nbsp;" : B || Y || (A(x), k(x, String.fromCharCode(160), " ")), q && (x.style.width = _, x.style.height = h._h + "px"), t.appendChild(x)
                }
                t.style.cssText = y
            }
            q && (c > t.clientHeight && (t.style.height = c - E + "px", t.clientHeight < c && (t.style.height = c + P + "px")), a > t.clientWidth && (t.style.width = a - N + "px", t.clientWidth < a && (t.style.width = a + M + "px"))), C(i, D), C(n, F), C(r, j)
        },
        E = function(t, e, i, n) {
            var s, a, l, c, u, g, w, b, T, S = e.span ? "span" : "div",
                C = e.type || e.split || "chars,words,lines",
                P = (-1 !== C.indexOf("words"), -1 !== C.indexOf("chars")),
                O = "absolute" === e.position || e.absolute === !0,
                A = e.wordDelimiter || " ",
                M = " " !== A ? "" : O ? "&#173; " : " ",
                E = e.span ? "</span>" : "</div>",
                N = !0,
                L = o.createElement("div"),
                R = t.parentNode;
            for (R.insertBefore(L, t), L.textContent = t.nodeValue, R.removeChild(t), t = L, s = r(t), w = -1 !== s.indexOf("<"), e.reduceWhiteSpace !== !1 && (s = s.replace(d, " ").replace(p, "")), w && (s = s.split("<").join("{{LT}}")), u = s.length, a = (" " === s.charAt(0) ? M : "") + i(), l = 0; u > l; l++)
                if (g = s.charAt(l), g === A && s.charAt(l - 1) !== A && l) {
                    for (a += N ? E : "", N = !1; s.charAt(l + 1) === A;) a += M, l++;
                    l === u - 1 ? a += M : ")" !== s.charAt(l + 1) && (a += M + i(), N = !0)
                } else "{" === g && "{{LT}}" === s.substr(l, 6) ? (a += P ? n() + "{{LT}}</" + S + ">" : "{{LT}}", l += 5) : g.charCodeAt(0) >= h && g.charCodeAt(0) <= f || s.charCodeAt(l + 1) >= 65024 && s.charCodeAt(l + 1) <= 65039 ? (b = _(s.substr(l, 2)), T = _(s.substr(l + 2, 2)), c = b >= m && v >= b && T >= m && v >= T || T >= y && x >= T ? 4 : 2, a += P && " " !== g ? n() + s.substr(l, c) + "</" + S + ">" : s.substr(l, c), l += c - 1) : a += P && " " !== g ? n() + g + "</" + S + ">" : g;
            t.outerHTML = a + (N ? E : ""), w && k(R, "{{LT}}", "<")
        },
        N = function(t, e, i, n) {
            var r, o, s = P(t.childNodes),
                a = s.length,
                c = "absolute" === e.position || e.absolute === !0;
            if (3 !== t.nodeType || a > 1) {
                for (e.absolute = !1, r = 0; a > r; r++) o = s[r], (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (c && 3 !== o.nodeType && "inline" === l(o, "display", null, !0) && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, N(o, e, i, n));
                return e.absolute = c, void(t._isSplit = !0)
            }
            E(t, e, i, n)
        },
        L = S.prototype;
    L.split = function(t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, i, n, r = this.elements.length, o = t.span ? "span" : "div", s = ("absolute" === t.position || t.absolute === !0, T(t.wordsClass, o)), a = T(t.charsClass, o); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, N(n, t, s, a), M(n, t, this.chars, this.words, this.lines, i, e);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, L.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, S.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (S.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, S.version = "0.5.6"
}(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText"),
function(t) {
    t.fn.visible = function(e, i) {
        var n = t(this).eq(0),
            r = n.get(0),
            o = t(window),
            s = o.scrollTop();
        o = s + o.height();
        var a = n.offset().top,
            l = a + n.height();
        return n = e === !0 ? l : a, a = e === !0 ? a : l, !!(i !== !0 || r.offsetWidth * r.offsetHeight) && a <= o && n >= s
    }
}(jQuery);
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
jQuery(window).width() > 1024 && jQuery(window).scroll(function() {
        moveParallax()
    }),
    function(t) {
        t.fn.extend({
            parallaxImage: function(t) {
                return this.each(function() {
                    var t = jQuery(this),
                        e = new Image;
                    e.onload = function() {
                        if (imgH = this.height, imgW = this.width, $(".parallax").addClass("loaded"), jQuery(window).width() > 1024) {
                            var e = jQuery(window).height(),
                                i = -((jQuery(window).height() - t.height()) / 2);
                            jQuery(window).height() < t.height() && (e = t.height()), "absolute" !== t.css("position") && t.css({
                                position: "relative"
                            }), t.append('<div class="parallax-content" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;overflow:hidden;"><div class="parallax-image" style="background: url(' + t.data("parallax-image") + ") center center;background-size:cover; width:100%;height:" + e + "px;position:absolute;top:" + i + 'px;"></div></div>'), moveParallax()
                        } else t.css({
                            background: "url(" + t.data("parallax-image") + ") center center",
                            "background-attachment": "inherit",
                            "background-size": "cover"
                        })
                    }, e.src = t.data("parallax-image")
                })
            }
        })
    }(jQuery),
    function($, t, e, i) {
        window.onload = function() {
            setTimeout(function() {
                window.scrollTo(0, 0)
            }, 0)
        };
        var n = $(document),
            r = $(t),
            o = $("html"),
            s = $("body"),
            a = $("#preloader"),
            l = $("#root"),
            c = $("#header"),
            u = $("#footer"),
            p = r.width(),
            d = function(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            },
            h = function(t, e, i) {
                e || (e = 250);
                var n, r;
                return function() {
                    var o = i || this,
                        s = +new Date,
                        a = arguments;
                    n && s < n + e ? (clearTimeout(r), r = setTimeout(function() {
                        n = s, t.apply(o, a)
                    }, e)) : (n = s, t.apply(o, a))
                }
            },
            f = function(t, e, i) {
                var n;
                return function() {
                    var r = this,
                        o = arguments,
                        s = function() {
                            n = null, i || t.apply(r, o)
                        },
                        a = i && !n;
                    clearTimeout(n), n = setTimeout(s, e), a && t.apply(r, o)
                }
            },
            g = function(t) {
                return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            m = function(t) {
                return JSON.parse(JSON.stringify(t))
            },
            v = function() {
                layout_scroll(), r.width() < 1024 && p != $(window).width() && reload();
                var t = parseInt(r.width() / 2 - 250),
                    e = parseInt(r.width() / 2 - 250);
                $(".single-project .nav-projects").css({
                    left: t,
                    right: e
                }), r.width() <= 767 && ($("#full-menu").css("height", r.height()), $("#root").css("min-height", r.height()))
            },
            y = function(t) {
                function e() {
                    n++, n == t.length && r(i)
                }
                for (var i = [], n = 0, r = function() {}, t = "object" != typeof t ? [t] : t, o = 0; o < t.length; o++) i[o] = new Image, i[o].src = t[o], i[o].onload = function() {
                    e()
                }, i[o].onerror = function() {
                    e()
                };
                return {
                    done: function(t) {
                        r = t || r
                    }
                }
            };
        layout_scroll = function() {
            var t = r.scrollTop();
            t > 100 ? o.addClass("scrolled") : o.removeClass("scrolled"), in_view($(".check-viewport")), $(".single-project").length > 0 && (t > parseInt($(".project-slider").offset().top) - 60 && t < parseInt($(".project-slider").offset().top + $(".project-slider").outerHeight()) - 60 ? $("#logo").addClass("white") : $("#logo").removeClass("white")), r.width() > 767 && (t >= l.outerHeight() - r.height() - 120 ? $(".nav-projects").addClass("expand") : $(".nav-projects").removeClass("expand"))
        }, check_browser = function() {
            var t = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
                e = "undefined" != typeof InstallTrigger,
                i = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
                n = !!document.documentMode,
                r = !n && !!window.StyleMedia,
                s = !!window.chrome && !!window.chrome.webstore,
                a = (s || t) && !!window.CSS;
            t ? o.addClass("browser-opera") : e ? o.addClass("browser-firefox") : i ? o.addClass("browser-safari") : n ? o.addClass("browser-ie") : r ? o.addClass("browser-edge") : s ? o.addClass("browser-chrome") : a && o.addClass("is-blink")
        }, smooth_scroll = function() {}, sliders = function() {
            $(".project-slider-wrapper").not(".slick-initialized").slick({
                dots: !0,
                infinite: !0,
                swipe: !0,
                draggable: !0,
                speed: 300,
                arrows: !1,
                centerMode: !0,
                variableWidth: !0,
                customPaging: function(t, e) {
                    return '<a class="tabs-single-' + e + '" href="#"><span></span><i></i></a>'
                }
            })
        }, scroll_animation = function() {
            if (r.width() > 1024 && !$("html").hasClass("touch")) var t = new ScrollMagic.Controller({}),
                e = (new TimelineMax).add([TweenMax.fromTo(".home-top-slider .title h2", 1, {
                    y: -40,
                    ease: Linear.easeNone
                }, {
                    y: 40,
                    ease: Linear.easeNone
                }), TweenMax.fromTo("#scroll-down .animate", 1, {
                    y: -50,
                    ease: Linear.easeNone
                }, {
                    y: 0,
                    ease: Linear.easeNone
                })]),
                i = new ScrollMagic.Scene({
                    triggerElement: ".home-top-slider",
                    duration: r.height(),
                    offset: 10
                }).setTween(e).addTo(t);
            else t && (t.destroy(), i.destroy())
        }, full_page = function() {
            r.width() > 767 && $(".projects-wrapper").fullpage({
                touchSensitivity: 0,
                easingcss3: "ease-out",
                verticalCentered: !0,
                navigation: !0,
                navigationPosition: "left",
                scrollingSpeed: 800
            })
        }, in_view = function(t) {
            if (t.length > 0) {
                var e = r.height(),
                    i = r.scrollTop(),
                    n = i + e,
                    o = t.outerHeight(),
                    s = t.offset().top + 100,
                    a = s + o;
                a > i && s < n && t.addClass("in-view")
            }
        }, in_view_revert = function(t) {
            if (t.length > 0) {
                var e = r.height(),
                    i = r.scrollTop(),
                    n = i + e,
                    o = t.outerHeight(),
                    s = t.offset().top + 100,
                    a = s + o;
                a > i && s < n ? t.addClass("in-view") : t.removeClass("in-view")
            }
        }, split_text = function() {
            if ($("#full-menu .menu-text").length > 0) var t = new SplitText($("#full-menu .menu-text"), {
                type: "words"
            });
            if ($("#about-me").length > 0) var t = new SplitText($("#about-me .about-text"), {
                type: "words"
            });
            if ($(".single-project").length > 0) var t = new SplitText($(".hero-left .title"), {
                    type: "words"
                }),
                t = new SplitText($(".hero-left .desc"), {
                    type: "words"
                })
        }, reload = function() {
            o.removeClass("ready"), setTimeout(function() {
                location.reload()
            }, 100)
        }, home = function() {
            var t = Draggable.create("#home-slides", {
                type: "scroll",
                edgeResistance: .5,
                throwProps: !0,
                autoScroll: 2
            });
            setTimeout(function() {
                $(".slide-0").addClass("loaded")
            }, 500), setInterval(function() {
                $(".slide-1, .slide-2, .slide-3, .slide-4, .slide-5, .slide-6, .slide-7, .slide-8").toggleClass("animation")
            }, 3e3), r.width() < 768 && $("#home-slides-mobile").fullpage({
                touchSensitivity: 0,
                easingcss3: "ease-out",
                verticalCentered: !0,
                navigation: !1,
                scrollingSpeed: 800
            })
        }, doc_ready = function() {
            check_browser(), smooth_scroll(), objectFitImages(), v(), home(), sliders(), scroll_animation(), split_text(), full_page(), $(".home-hero").parallax(), $(".parallax-image").parallaxImage(), o.addClass("ready")
        };
        var x = new TimelineMax({
            paused: !0,
            reversed: !0
        });
        x.add(TweenMax.staggerTo(".menu-stripe-red", .5, {
            y: "-100%",
            ease: Sine.easeInOut
        }, .15), "=-0.15").add(TweenMax.staggerTo("#full-menu", .5, {
            y: 0,
            ease: Sine.easeInOut
        }, .15), "=-0.15").add(TweenMax.staggerTo("#full-menu .menu-left", .4, {
            y: 0,
            opacity: 1,
            ease: Sine.easeInOut
        }, .15), "=-0.15").add(TweenMax.staggerTo("#full-menu .menu-right .home", .3, {
            y: 0,
            opacity: 1,
            ease: Sine.easeInOut
        }, .15), "=-0.15").add(TweenMax.staggerTo("#full-menu .menu-right .about", .3, {
            y: 0,
            opacity: 1,
            ease: Sine.easeInOut
        }, .15), "=-0.15").add(TweenMax.staggerTo("#full-menu .menu-right .projects", .3, {
            y: 0,
            opacity: 1,
            ease: Sine.easeInOut
        }, .15), "=-0.15").add(TweenMax.staggerTo("#full-menu .credits div", .4, {
            y: 0,
            opacity: 1,
            ease: Sine.easeInOut
        }, .15), "=-0.15"), paceOptions = {
            ajax: !1,
            document: !0,
            eventLag: !1,
            elements: {
                selectors: ["img"]
            }
        }, Pace.on("done", function() {
            doc_ready()
        }), r.resize(f(v)).scroll(h(layout_scroll)), n.ready(function() {}).on("click", "a", function(t) {
            var e = this.href;
            /#/.test(e) && d(t)
        }).on("keydown", function(t) {
            27 == t.keyCode && (t.preventDefault(), o.removeClass("no-scroll"))
        }).on("click", "#menu-opener", function(t) {
            d(t), $(this).toggleClass("open"), $("#full-menu").toggleClass("open"), o.toggleClass("no-scroll"), x.reversed() ? x.play() : x.reverse()
        }).on("click", "#scroll-down", function(t) {
            d(t), $("html, body").animate({
                scrollTop: $(".home-top-slider").outerHeight()
            }, 300)
        }).on("click touchstart", ".top-menu li", function(t) {
            d(t), o.removeClass("no-scroll"), $(".top-menu li").removeClass("selected"), $(this).addClass("selected");
            var e = $(this).find("a").attr("href"),
                i = $(e.substring(e.indexOf("#")));
            i.length && $("html, body").animate({
                scrollTop: i.offset().top
            }, 300), setTimeout(function() {
                $("#open-menu a").removeClass("open"), $("#full-menu").removeClass("open")
            }, 500)
        }).on("click touchstart", ".menu-right ul li a", function(t) {
            d(t);
            var e = $(this).attr("href");
            $("#menu-opener").removeClass("open"), x.reversed() ? x.play() : x.reverse(), setTimeout(function() {
                TweenLite.to("#root", 1, {
                    opacity: 0
                })
            }, 1500), setTimeout(function() {
                location.href = e
            }, 2e3)
        }).on("click touchstart", "#logo a, .projects-slide .cta a, .home-link", function(t) {
            d(t);
            var e = $(this).attr("href");
            r.width() > 1024 ? (TweenLite.to("#preloader", 1, {
                y: "-100%"
            }), setTimeout(function() {
                TweenLite.to("#root", 1, {
                    opacity: 0
                })
            }, 100), setTimeout(function() {
                location.href = e
            }, 400)) : location.href = e
        }).on("click touchstart", ".prev-project", function(t) {
            d(t);
            var e = $(this).attr("href");
            r.width() > 1024 ? (TweenLite.to("#preloader-prev", 1, {
                x: "-100%"
            }), setTimeout(function() {
                TweenLite.to("#root", 1, {
                    opacity: 0
                })
            }, 100), setTimeout(function() {
                location.href = e
            }, 400)) : location.href = e
        }).on("click touchstart", ".next-project", function(t) {
            d(t);
            var e = $(this).attr("href");
            r.width() > 1024 ? (TweenLite.to("#preloader-next", 1, {
                x: "100%"
            }), setTimeout(function() {
                TweenLite.to("#root", 1, {
                    opacity: 0
                })
            }, 100), setTimeout(function() {
                location.href = e
            }, 400)) : location.href = e
        }).on("click touchstart", ".projects-scroll-up", function(t) {
            $.fn.fullpage.moveSectionUp()
        }).on("click touchstart", ".projects-scroll-down", function(t) {
            $.fn.fullpage.moveSectionDown()
        }).on({
            mouseenter: function() {
                o.hasClass("touch") || $(this).addClass("hover")
            },
            mouseleave: function() {
                $(this).removeClass("hover")
            },
            click: function() {
                o.hasClass("touch") && $(this).toggleClass("hover")
            }
        }, ".top-menu li, .track-hover").on({
            mouseenter: function() {
                o.hasClass("touch") || $(".nav-projects").addClass("prev-hover")
            },
            mouseleave: function() {
                $(".nav-projects").removeClass("prev-hover")
            }
        }, ".prev-projects").on({
            mouseenter: function() {
                o.hasClass("touch") || $(".nav-projects").addClass("next-hover")
            },
            mouseleave: function() {
                $(".nav-projects").removeClass("next-hover")
            }
        }, ".next-projects")
    }(jQuery, window, document);;