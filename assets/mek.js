/*
 AngularJS v1.0.9-3ccec13
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S, W, t) {
    'use strict';
    function p(b, a, c) {
        var d;
        if (b)
            if (L(b))
                for (d in b)
                    "prototype" != d && "length" != d && "name" != d && b.hasOwnProperty(d) && a.call(c, b[d], d);
            else if (b.forEach && b.forEach !== p)
                b.forEach(a, c);
            else {
                var e;
                e = b && "number" === typeof b.length ? "function" != typeof b.hasOwnProperty && "function" != typeof b.constructor ? !0 : b instanceof O || da && b instanceof da || "[object Object]" !== oa.call(b) || "function" === typeof b.callee : !1;
                if (e)
                    for (d = 0; d < b.length; d++)
                        a.call(c, b[d], d);
                else
                    for (d in b)
                        b.hasOwnProperty(d) && a.call(c, b[d], d)
            }
        return b
    }
    function rb(b) {
        var a = [], c;
        for (c in b)
            b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }
    function mc(b, a, c) {
        for (var d = rb(b), e = 0; e < d.length; e++)
            a.call(c, b[d[e]], d[e]);
        return d
    }
    function sb(b) {
        return function(a, c) {
            b(c, a)
        }
    }
    function za() {
        for (var b = ba.length, a; b; ) {
            b--;
            a = ba[b].charCodeAt(0);
            if (57 == a)
                return ba[b] = "A",
                ba.join("");
            if (90 == a)
                ba[b] = "0";
            else
                return ba[b] = String.fromCharCode(a + 1),
                ba.join("")
        }
        ba.unshift("0");
        return ba.join("")
    }
    function tb(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }
    function C(b) {
        var a = b.$$hashKey;
        p(arguments, function(a) {
            a !== b && p(a, function(a, c) {
                b[c] = a
            })
        });
        tb(b, a);
        return b
    }
    function J(b) {
        return parseInt(b, 10)
    }
    function Aa(b, a) {
        return C(new (C(function() {}, {
            prototype: b
        })), a)
    }
    function u() {}
    function pa(b) {
        return b
    }
    function M(b) {
        return function() {
            return b
        }
    }
    function z(b) {
        return "undefined" == typeof b
    }
    function x(b) {
        return "undefined" != typeof b
    }
    function P(b) {
        return null != b && "object" == typeof b
    }
    function E(b) {
        return "string" == typeof b
    }
    function Ua(b) {
        return "number" == typeof b
    }
    function qa(b) {
        return "[object Date]" == oa.apply(b)
    }
    function F(b) {
        return "[object Array]" == oa.apply(b)
    }
    function L(b) {
        return "function" == typeof b
    }
    function Va(b) {
        return "[object RegExp]" == oa.apply(b)
    }
    function ra(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }
    function Ba(b) {
        return b && b.$evalAsync && b.$watch
    }
    function nc(b) {
        return b && (b.nodeName || b.bind && b.find)
    }
    function Wa(b, a, c) {
        var d = [];
        p(b, function(b, g, h) {
            d.push(a.call(c, b, g, h))
        });
        return d
    }
    function Ca(b, a) {
        if (b.indexOf)
            return b.indexOf(a);
        for (var c = 0; c < b.length; c++)
            if (a === b[c])
                return c;
        return -1
    }
    function Xa(b, a) {
        var c = Ca(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }
    function X(b, a) {
        if (ra(b) || Ba(b))
            throw Error("Can't copy Window or Scope");
        if (a) {
            if (b === a)
                throw Error("Can't copy equivalent objects or arrays");
            if (F(b))
                for (var c = a.length = 0; c < b.length; c++)
                    a.push(X(b[c]));
            else {
                c = a.$$hashKey;
                p(a, function(b, c) {
                    delete a[c]
                });
                for (var d in b)
                    a[d] = X(b[d]);
                tb(a, c)
            }
        } else
            (a = b) && (F(b) ? a = X(b, []) : qa(b) ? a = new Date(b.getTime()) : Va(b) ? a = RegExp(b.source) : P(b) && (a = X(b, {})));
        return a
    }
    function oc(b, a) {
        a = a || {};
        for (var c in b)
            b.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (a[c] = b[c]);
        return a
    }
    function ha(b, a) {
        if (b === a)
            return !0;
        if (null === b || null === a)
            return !1;
        if (b !== b && a !== a)
            return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)
            if (F(b)) {
                if (!F(a))
                    return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!ha(b[d], a[d]))
                            return !1;
                    return !0
                }
            } else {
                if (qa(b))
                    return qa(a) && b.getTime() == a.getTime();
                if (Va(b) && Va(a))
                    return b.toString() == a.toString();
                if (Ba(b) || Ba(a) || ra(b) || ra(a) || F(a))
                    return !1;
                c = {};
                for (d in b)
                    if ("$" !== d.charAt(0) && !L(b[d])) {
                        if (!ha(b[d], a[d]))
                            return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c[d] && "$" !== d.charAt(0) && a[d] !== t && !L(a[d]))
                        return !1;
                return !0
            }
        return !1
    }
    function Ya(b, a, c) {
        return b.concat(Da.call(a, c))
    }
    function Za(b, a) {
        var c = 2 < arguments.length ? Da.call(arguments, 2) : [];
        return !L(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(Da.call(arguments, 0))) : a.apply(b, c)
        }
        : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }
    function pc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = t : ra(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Ba(a) && (c = "$SCOPE");
        return c
    }
    function ea(b, a) {
        return "undefined" === typeof b ? t : JSON.stringify(b, pc, a ? "  " : null)
    }
    function ub(b) {
        return E(b) ? JSON.parse(b) : b
    }
    function $a(b) {
        b && 0 !== b.length ? (b = G("" + b),
        b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }
    function sa(b) {
        b = A(b).clone();
        try {
            b.html("")
        } catch (a) {}
        var c = A("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? G(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + G(b)
            })
        } catch (d) {
            return G(c)
        }
    }
    function vb(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }
    function ab(b) {
        var a = {}, c, d;
        p((b || "").split("&"), function(b) {
            b && (c = b.split("="),
            d = vb(c[0]),
            x(d) && (a[d] = x(c[1]) ? vb(c[1]) : !0))
        });
        return a
    }
    function wb(b) {
        var a = [];
        p(b, function(b, d) {
            a.push(bb(d, !0) + (!0 === b ? "" : "=" + bb(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }
    function cb(b) {
        return bb(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function bb(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }
    function qc(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b], e, g, h = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        p(h, function(a) {
            h[a] = !0;
            c(W.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (p(b.querySelectorAll("." + a), c),
            p(b.querySelectorAll("." + a + "\\:"), c),
            p(b.querySelectorAll("[" + a + "]"), c))
        });
        p(d, function(a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a,
                g = (b[2] || "").replace(/\s+/g, ",")) : p(a.attributes, function(b) {
                    !e && h[b.name] && (e = a,
                    g = b.value)
                })
            }
        });
        e && a(e, g ? [g] : [])
    }
    function xb(b, a) {
        var c = function() {
            b = A(b);
            a = a || [];
            a.unshift(["$provide", function(a) {
                a.value("$rootElement", b)
            }
            ]);
            a.unshift("ng");
            var c = yb(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }
            ]);
            return c
        }
          , d = /^NG_DEFER_BOOTSTRAP!/;
        if (S && !d.test(S.name))
            return c();
        S.name = S.name.replace(d, "");
        db.resumeBootstrap = function(b) {
            p(b, function(b) {
                a.push(b)
            });
            c()
        }
    }
    function eb(b, a) {
        a = a || "_";
        return b.replace(rc, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }
    function fb(b, a, c) {
        if (!b)
            throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }
    function ta(b, a, c) {
        c && F(b) && (b = b[b.length - 1]);
        fb(L(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }
    function gb(b, a, c) {
        if (!a)
            return b;
        a = a.split(".");
        for (var d, e = b, g = a.length, h = 0; h < g; h++)
            d = a[h],
            b && (b = (e = b)[d]);
        return !c && L(b) ? Za(e, b) : b
    }
    function sc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }
        return a(a(b, "angular", Object), "module", function() {
            var b = {};
            return function(d, e, g) {
                e && b.hasOwnProperty(d) && (b[d] = null);
                return a(b, d, function() {
                    function a(c, d, e) {
                        return function() {
                            b[e || "push"]([c, d, arguments]);
                            return m
                        }
                    }
                    if (!e)
                        throw Error("No module: " + d);
                    var b = []
                      , c = []
                      , l = a("$injector", "invoke")
                      , m = {
                        _invokeQueue: b,
                        _runBlocks: c,
                        requires: e,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: l,
                        run: function(a) {
                            c.push(a);
                            return this
                        }
                    };
                    g && l(g);
                    return m
                })
            }
        })
    }
    function zb(b) {
        return b.replace(tc, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(uc, "Moz$1")
    }
    function hb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this], k = a, l, m, n, r, s, q;
            if (!d || null != b)
                for (; e.length; )
                    for (l = e.shift(),
                    m = 0,
                    n = l.length; m < n; m++)
                        for (r = A(l[m]),
                        k ? r.triggerHandler("$destroy") : k = !k,
                        s = 0,
                        r = (q = r.children()).length; s < r; s++)
                            e.push(da(q[s]));
            return g.apply(this, arguments)
        }
        var g = da.fn[b]
          , g = g.$original || g;
        e.$original = g;
        da.fn[b] = e
    }
    function O(b) {
        if (b instanceof O)
            return b;
        if (!(this instanceof O)) {
            if (E(b) && "<" != b.charAt(0))
                throw Error("selectors not implemented");
            return new O(b)
        }
        if (E(b)) {
            var a = W.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            ib(this, a.childNodes);
            this.remove()
        } else
            ib(this, b)
    }
    function jb(b) {
        return b.cloneNode(!0)
    }
    function ua(b) {
        Ab(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++)
            ua(b[a])
    }
    function Bb(b, a, c) {
        var d = ca(b, "events");
        ca(b, "handle") && (z(a) ? p(d, function(a, c) {
            kb(b, c, a);
            delete d[c]
        }) : z(c) ? (kb(b, a, d[a]),
        delete d[a]) : Xa(d[a] || [], c))
    }
    function Ab(b) {
        var a = b[Ea]
          , c = Fa[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"),
        Bb(b)),
        delete Fa[a],
        b[Ea] = t)
    }
    function ca(b, a, c) {
        var d = b[Ea]
          , d = Fa[d || -1];
        if (x(c))
            d || (b[Ea] = d = ++vc,
            d = Fa[d] = {}),
            d[a] = c;
        else
            return d && d[a]
    }
    function Cb(b, a, c) {
        var d = ca(b, "data")
          , e = x(c)
          , g = !e && x(a)
          , h = g && !P(a);
        d || h || ca(b, "data", d = {});
        if (e)
            d[a] = c;
        else if (g) {
            if (h)
                return d && d[a];
            C(d, a)
        } else
            return d
    }
    function Ga(b, a) {
        return -1 < (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ")
    }
    function Db(b, a) {
        a && p(a.split(" "), function(a) {
            b.className = V((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + V(a) + " ", " "))
        })
    }
    function Eb(b, a) {
        a && p(a.split(" "), function(a) {
            Ga(b, a) || (b.className = V(b.className + " " + V(a)))
        })
    }
    function ib(b, a) {
        if (a) {
            a = a.nodeName || !x(a.length) || ra(a) ? [a] : a;
            for (var c = 0; c < a.length; c++)
                b.push(a[c])
        }
    }
    function Fb(b, a) {
        return Ha(b, "$" + (a || "ngController") + "Controller")
    }
    function Ha(b, a, c) {
        b = A(b);
        for (9 == b[0].nodeType && (b = b.find("html")); b.length; ) {
            if (c = b.data(a))
                return c;
            b = b.parent()
        }
    }
    function Gb(b, a) {
        var c = Ia[a.toLowerCase()];
        return c && Hb[b.nodeName] && c
    }
    function wc(b, a) {
        var c = function(c, e) {
            c.preventDefault || (c.preventDefault = function() {
                c.returnValue = !1
            }
            );
            c.stopPropagation || (c.stopPropagation = function() {
                c.cancelBubble = !0
            }
            );
            c.target || (c.target = c.srcElement || W);
            if (z(c.defaultPrevented)) {
                var g = c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    g.call(c)
                }
                ;
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            }
            ;
            p(a[e || c.type], function(a) {
                a.call(b, c)
            });
            8 >= Y ? (c.preventDefault = null,
            c.stopPropagation = null,
            c.isDefaultPrevented = null) : (delete c.preventDefault,
            delete c.stopPropagation,
            delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }
    function ia(b) {
        var a = typeof b, c;
        "object" == a && null !== b ? "function" == typeof (c = b.$$hashKey) ? c = b.$$hashKey() : c === t && (c = b.$$hashKey = za()) : c = b;
        return a + ":" + c
    }
    function Ja(b) {
        p(b, this.put, this)
    }
    function lb() {}
    function Ib(b) {
        var a, c;
        "function" == typeof b ? (a = b.$inject) || (a = [],
        c = b.toString().replace(xc, ""),
        c = c.match(yc),
        p(c[1].split(zc), function(b) {
            b.replace(Ac, function(b, c, d) {
                a.push(d)
            })
        }),
        b.$inject = a) : F(b) ? (c = b.length - 1,
        ta(b[c], "fn"),
        a = b.slice(0, c)) : ta(b, "fn", !0);
        return a
    }
    function yb(b) {
        function a(a) {
            return function(b, c) {
                if (P(b))
                    p(b, sb(a));
                else
                    return a(b, c)
            }
        }
        function c(a, b) {
            if (L(b) || F(b))
                b = n.instantiate(b);
            if (!b.$get)
                throw Error("Provider " + a + " must define $get factory method.");
            return m[a + f] = b
        }
        function d(a, b) {
            return c(a, {
                $get: b
            })
        }
        function e(a) {
            var b = [];
            p(a, function(a) {
                if (!l.get(a))
                    if (l.put(a, !0),
                    E(a)) {
                        var c = va(a);
                        b = b.concat(e(c.requires)).concat(c._runBlocks);
                        try {
                            for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                                var g = d[c]
                                  , q = "$injector" == g[0] ? n : n.get(g[0]);
                                q[g[1]].apply(q, g[2])
                            }
                        } catch (h) {
                            throw h.message && (h.message += " from " + a),
                            h;
                        }
                    } else if (L(a))
                        try {
                            b.push(n.invoke(a))
                        } catch (k) {
                            throw k.message && (k.message += " from " + a),
                            k;
                        }
                    else if (F(a))
                        try {
                            b.push(n.invoke(a))
                        } catch (s) {
                            throw s.message && (s.message += " from " + String(a[a.length - 1])),
                            s;
                        }
                    else
                        ta(a, "module")
            });
            return b
        }
        function g(a, b) {
            function c(d) {
                if ("string" !== typeof d)
                    throw Error("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === h)
                        throw Error("Circular dependency: " + k.join(" <- "));
                    return a[d]
                }
                try {
                    return k.unshift(d),
                    a[d] = h,
                    a[d] = b(d)
                } finally {
                    k.shift()
                }
            }
            function d(a, b, e) {
                var f = [], l = Ib(a), g, h, q;
                h = 0;
                for (g = l.length; h < g; h++)
                    q = l[h],
                    f.push(e && e.hasOwnProperty(q) ? e[q] : c(q));
                a.$inject || (a = a[g]);
                switch (b ? -1 : f.length) {
                case 0:
                    return a();
                case 1:
                    return a(f[0]);
                case 2:
                    return a(f[0], f[1]);
                case 3:
                    return a(f[0], f[1], f[2]);
                case 4:
                    return a(f[0], f[1], f[2], f[3]);
                case 5:
                    return a(f[0], f[1], f[2], f[3], f[4]);
                case 6:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                case 7:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                case 8:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                case 9:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                case 10:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                default:
                    return a.apply(b, f)
                }
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {}, e;
                    c.prototype = (F(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return P(e) ? e : c
                },
                get: c,
                annotate: Ib
            }
        }
        var h = {}
          , f = "Provider"
          , k = []
          , l = new Ja
          , m = {
            $provide: {
                provider: a(c),
                factory: a(d),
                service: a(function(a, b) {
                    return d(a, ["$injector", function(a) {
                        return a.instantiate(b)
                    }
                    ])
                }),
                value: a(function(a, b) {
                    return d(a, M(b))
                }),
                constant: a(function(a, b) {
                    m[a] = b;
                    r[a] = b
                }),
                decorator: function(a, b) {
                    var c = n.get(a + f)
                      , d = c.$get;
                    c.$get = function() {
                        var a = s.invoke(d, c);
                        return s.invoke(b, null, {
                            $delegate: a
                        })
                    }
                }
            }
        }
          , n = g(m, function() {
            throw Error("Unknown provider: " + k.join(" <- "));
        })
          , r = {}
          , s = r.$injector = g(r, function(a) {
            a = n.get(a + f);
            return s.invoke(a.$get, a)
        });
        p(e(b), function(a) {
            s.invoke(a || u)
        });
        return s
    }
    function Bc() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        }
        ;
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                p(a, function(a) {
                    b || "a" !== G(a.nodeName) || (b = a)
                });
                return b
            }
            function g() {
                var b = c.hash(), d;
                b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }
            var h = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function() {
                d.$evalAsync(g)
            });
            return g
        }
        ]
    }
    function Cc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Da.call(arguments, 1))
            } finally {
                if (q--,
                0 === q)
                    for (; B.length; )
                        try {
                            B.pop()()
                        } catch (b) {
                            c.error(b)
                        }
            }
        }
        function g(a, b) {
            (function Dc() {
                p(v, function(a) {
                    a()
                });
                y = b(Dc, a)
            }
            )()
        }
        function h() {
            Q != f.url() && (Q = f.url(),
            p(N, function(a) {
                a(f.url())
            }))
        }
        var f = this
          , k = a[0]
          , l = b.location
          , m = b.history
          , n = b.setTimeout
          , r = b.clearTimeout
          , s = {};
        f.isMock = !1;
        var q = 0
          , B = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function() {
            q++
        }
        ;
        f.notifyWhenNoOutstandingRequests = function(a) {
            p(v, function(a) {
                a()
            });
            0 === q ? a() : B.push(a)
        }
        ;
        var v = [], y;
        f.addPollFn = function(a) {
            z(y) && g(100, n);
            v.push(a);
            return a
        }
        ;
        var Q = l.href
          , D = a.find("base")
          , K = null;
        f.url = function(a, b) {
            if (a) {
                if (Q != a)
                    return Q = a,
                    d.history ? b ? m.replaceState(null, "", a) : (m.pushState(null, "", a),
                    D.attr("href", D.attr("href"))) : b ? (l.replace(a),
                    K = a) : (l.href = a,
                    K = null),
                    f
            } else
                return K || l.href.replace(/%27/g, "'")
        }
        ;
        var N = []
          , H = !1;
        f.onUrlChange = function(a) {
            H || (d.history && A(b).bind("popstate", h),
            d.hashchange ? A(b).bind("hashchange", h) : f.addPollFn(h),
            H = !0);
            N.push(a);
            return a
        }
        ;
        f.baseHref = function() {
            var a = D.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        }
        ;
        var ja = {}
          , T = ""
          , w = f.baseHref();
        f.cookies = function(a, b) {
            var d, e, f, l;
            if (a)
                b === t ? k.cookie = escape(a) + "=;path=" + w + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : E(b) && (d = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + w).length + 1,
                4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (k.cookie !== T)
                    for (T = k.cookie,
                    d = T.split("; "),
                    ja = {},
                    f = 0; f < d.length; f++)
                        e = d[f],
                        l = e.indexOf("="),
                        0 < l && (a = unescape(e.substring(0, l)),
                        ja[a] === t && (ja[a] = unescape(e.substring(l + 1))));
                return ja
            }
        }
        ;
        f.defer = function(a, b) {
            var c;
            q++;
            c = n(function() {
                delete s[c];
                e(a)
            }, b || 0);
            s[c] = !0;
            return c
        }
        ;
        f.defer.cancel = function(a) {
            return s[a] ? (delete s[a],
            r(a),
            e(u),
            !0) : !1
        }
    }
    function Ec() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new Cc(b,d,a,c)
        }
        ]
    }
    function Fc() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != n && (r ? r == a && (r = a.n) : r = a,
                    g(a.n, a.p),
                    g(a, n),
                    n = a,
                    n.n = null)
                }
                function g(a, b) {
                    a != b && (a && (a.p = b),
                    b && (b.n = a))
                }
                if (b in a)
                    throw Error("cacheId " + b + " taken");
                var h = 0
                  , f = C({}, d, {
                    id: b
                })
                  , k = {}
                  , l = d && d.capacity || Number.MAX_VALUE
                  , m = {}
                  , n = null
                  , r = null;
                return a[b] = {
                    put: function(a, b) {
                        var c = m[a] || (m[a] = {
                            key: a
                        });
                        e(c);
                        z(b) || (a in k || h++,
                        k[a] = b,
                        h > l && this.remove(r.key))
                    },
                    get: function(a) {
                        var b = m[a];
                        if (b)
                            return e(b),
                            k[a]
                    },
                    remove: function(a) {
                        var b = m[a];
                        b && (b == n && (n = b.p),
                        b == r && (r = b.n),
                        g(b.n, b.p),
                        delete m[a],
                        delete k[a],
                        h--)
                    },
                    removeAll: function() {
                        k = {};
                        h = 0;
                        m = {};
                        n = r = null
                    },
                    destroy: function() {
                        m = f = k = null;
                        delete a[b]
                    },
                    info: function() {
                        return C({}, f, {
                            size: h
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                p(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            }
            ;
            b.get = function(b) {
                return a[b]
            }
            ;
            return b
        }
    }
    function Gc() {
        this.$get = ["$cacheFactory", function(b) {
            return b("templates")
        }
        ]
    }
    function Jb(b) {
        var a = {}
          , c = "Directive"
          , d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/
          , e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/
          , g = "Template must have exactly one root element. was: "
          , h = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function k(d, e) {
            E(d) ? (fb(e, "directive"),
            a.hasOwnProperty(d) || (a[d] = [],
            b.factory(d + c, ["$injector", "$exceptionHandler", function(b, c) {
                var e = [];
                p(a[d], function(a) {
                    try {
                        var g = b.invoke(a);
                        L(g) ? g = {
                            compile: M(g)
                        } : !g.compile && g.link && (g.compile = M(g.link));
                        g.priority = g.priority || 0;
                        g.name = g.name || d;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g)
                    } catch (h) {
                        c(h)
                    }
                });
                return e
            }
            ])),
            a[d].push(e)) : p(d, sb(k));
            return this
        }
        ;
        this.urlSanitizationWhitelist = function(a) {
            return x(a) ? (h = a,
            this) : h
        }
        ;
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function(b, l, m, n, r, s, q, B, v) {
            function y(a, b, c) {
                a instanceof A || (a = A(a));
                p(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0])
                });
                var d = D(a, b, a, c);
                return function(b, c) {
                    fb(b, "scope");
                    for (var e = c ? xa.clone.call(a) : a, g = 0, l = e.length; g < l; g++) {
                        var h = e[g];
                        1 != h.nodeType && 9 != h.nodeType || e.eq(g).data("$scope", b)
                    }
                    Q(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }
            function Q(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }
            function D(a, b, c, d) {
                function e(a, c, d, l) {
                    var h, k, m, q, s, n, r, v = [];
                    s = 0;
                    for (n = c.length; s < n; s++)
                        v.push(c[s]);
                    r = s = 0;
                    for (n = g.length; s < n; r++)
                        k = v[r],
                        c = g[s++],
                        h = g[s++],
                        c ? (c.scope ? (m = a.$new(P(c.scope)),
                        A(k).data("$scope", m)) : m = a,
                        (q = c.transclude) || !l && b ? c(h, m, k, d, function(b) {
                            return function(c) {
                                var d = a.$new();
                                d.$$transcluded = !0;
                                return b(d, c).bind("$destroy", Za(d, d.$destroy))
                            }
                        }(q || b)) : c(h, m, k, t, l)) : h && h(a, k.childNodes, t, l)
                }
                for (var g = [], l, h, k, m = 0; m < a.length; m++)
                    h = new ka,
                    l = K(a[m], [], h, d),
                    h = (l = l.length ? N(l, a[m], h, b, c) : null) && l.terminal || !a[m].childNodes || !a[m].childNodes.length ? null : D(a[m].childNodes, l ? l.transclude : b),
                    g.push(l),
                    g.push(h),
                    k = k || l || h;
                return k ? e : null
            }
            function K(a, b, c, g) {
                var l = c.$attr, h;
                switch (a.nodeType) {
                case 1:
                    H(b, fa(Ka(a).toLowerCase()), "E", g);
                    var k, m, q;
                    h = a.attributes;
                    for (var s = 0, n = h && h.length; s < n; s++)
                        if (k = h[s],
                        !Y || 8 <= Y || k.specified)
                            m = k.name,
                            q = fa(m.toLowerCase()),
                            l[q] = m,
                            c[q] = k = V(Y && "href" == m ? decodeURIComponent(a.getAttribute(m, 2)) : k.value),
                            Gb(a, q) && (c[q] = !0),
                            U(a, b, k, q),
                            H(b, q, "A", g);
                    a = a.className;
                    if (E(a) && "" !== a)
                        for (; h = e.exec(a); )
                            q = fa(h[2]),
                            H(b, q, "C", g) && (c[q] = V(h[3])),
                            a = a.substr(h.index + h[0].length);
                    break;
                case 3:
                    aa(b, a.nodeValue);
                    break;
                case 8:
                    try {
                        if (h = d.exec(a.nodeValue))
                            q = fa(h[1]),
                            H(b, q, "M", g) && (c[q] = V(h[2]))
                    } catch (r) {}
                }
                b.sort(w);
                return b
            }
            function N(a, b, c, d, e) {
                function l(a, b) {
                    a && (a.require = w.require,
                    r.push(a));
                    b && (b.require = w.require,
                    v.push(b))
                }
                function h(a, b) {
                    var c, d = "data", e = !1;
                    if (E(a)) {
                        for (; "^" == (c = a.charAt(0)) || "?" == c; )
                            a = a.substr(1),
                            "^" == c && (d = "inheritedData"),
                            e = e || "?" == c;
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e)
                            throw Error("No controller: " + a);
                    } else
                        F(a) && (c = [],
                        p(a, function(a) {
                            c.push(h(a, b))
                        }));
                    return c
                }
                function k(a, d, e, g, l) {
                    var n, B, w, I, Q;
                    n = b === e ? c : oc(c, new ka(A(e),c.$attr));
                    B = n.$$element;
                    if (N) {
                        var Hc = /^\s*([@=&])\s*(\w*)\s*$/
                          , y = d.$parent || d;
                        p(N.scope, function(a, b) {
                            var c = a.match(Hc) || [], e = c[2] || b, c = c[1], g, l, h;
                            d.$$isolateBindings[b] = c + e;
                            switch (c) {
                            case "@":
                                n.$observe(e, function(a) {
                                    d[b] = a
                                });
                                n.$$observers[e].$$scope = y;
                                break;
                            case "=":
                                l = s(n[e]);
                                h = l.assign || function() {
                                    g = d[b] = l(y);
                                    throw Error(Kb + n[e] + " (directive: " + N.name + ")");
                                }
                                ;
                                g = d[b] = l(y);
                                d.$watch(function() {
                                    var a = l(y);
                                    a !== d[b] && (a !== g ? g = d[b] = a : h(y, a = g = d[b]));
                                    return a
                                });
                                break;
                            case "&":
                                l = s(n[e]);
                                d[b] = function(a) {
                                    return l(y, a)
                                }
                                ;
                                break;
                            default:
                                throw Error("Invalid isolate scope definition for directive " + N.name + ": " + a);
                            }
                        })
                    }
                    aa && p(aa, function(a) {
                        var b = {
                            $scope: d,
                            $element: B,
                            $attrs: n,
                            $transclude: l
                        };
                        Q = a.controller;
                        "@" == Q && (Q = n[a.name]);
                        B.data("$" + a.name + "Controller", q(Q, b))
                    });
                    g = 0;
                    for (w = r.length; g < w; g++)
                        try {
                            I = r[g],
                            I(d, B, n, I.require && h(I.require, B))
                        } catch (D) {
                            m(D, sa(B))
                        }
                    a && a(d, e.childNodes, t, l);
                    g = 0;
                    for (w = v.length; g < w; g++)
                        try {
                            I = v[g],
                            I(d, B, n, I.require && h(I.require, B))
                        } catch (Ic) {
                            m(Ic, sa(B))
                        }
                }
                for (var n = -Number.MAX_VALUE, r = [], v = [], B = null, N = null, D = null, I = c.$$element = A(b), w, H, U, la, ga = d, aa, z, u, C = 0, G = a.length; C < G; C++) {
                    w = a[C];
                    U = t;
                    if (n > w.priority)
                        break;
                    if (u = w.scope)
                        wa("isolated scope", N, w, I),
                        P(u) && (Q(I, "ng-isolate-scope"),
                        N = w),
                        Q(I, "ng-scope"),
                        B = B || w;
                    H = w.name;
                    if (u = w.controller)
                        aa = aa || {},
                        wa("'" + H + "' controller", aa[H], w, I),
                        aa[H] = w;
                    if (u = w.transclude)
                        wa("transclusion", la, w, I),
                        la = w,
                        n = w.priority,
                        "element" == u ? (U = A(b),
                        I = c.$$element = A(W.createComment(" " + H + ": " + c[H] + " ")),
                        b = I[0],
                        x(e, A(U[0]), b),
                        ga = y(U, d, n)) : (U = A(jb(b)).contents(),
                        I.html(""),
                        ga = y(U, d));
                    if (u = w.template)
                        if (wa("template", D, w, I),
                        D = w,
                        u = Lb(u),
                        w.replace) {
                            U = A("<div>" + V(u) + "</div>").contents();
                            b = U[0];
                            if (1 != U.length || 1 !== b.nodeType)
                                throw Error(g + u);
                            x(e, I, b);
                            H = {
                                $attr: {}
                            };
                            a = a.concat(K(b, a.splice(C + 1, a.length - (C + 1)), H));
                            ja(c, H);
                            G = a.length
                        } else
                            I.html(u);
                    if (w.templateUrl)
                        wa("template", D, w, I),
                        D = w,
                        k = T(a.splice(C, a.length - C), k, I, c, e, w.replace, ga),
                        G = a.length;
                    else if (w.compile)
                        try {
                            z = w.compile(I, c, ga),
                            L(z) ? l(null, z) : z && l(z.pre, z.post)
                        } catch (J) {
                            m(J, sa(I))
                        }
                    w.terminal && (k.terminal = !0,
                    n = Math.max(n, w.priority))
                }
                k.scope = B && B.scope;
                k.transclude = la && ga;
                return k
            }
            function H(d, e, g, l) {
                var h = !1;
                if (a.hasOwnProperty(e)) {
                    var q;
                    e = b.get(e + c);
                    for (var n = 0, s = e.length; n < s; n++)
                        try {
                            q = e[n],
                            (l === t || l > q.priority) && -1 != q.restrict.indexOf(g) && (d.push(q),
                            h = !0)
                        } catch (r) {
                            m(r)
                        }
                }
                return h
            }
            function ja(a, b) {
                var c = b.$attr
                  , d = a.$attr
                  , e = a.$$element;
                p(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]),
                    a.$set(e, d, !0, c[e]))
                });
                p(b, function(b, g) {
                    "class" == g ? (Q(e, b),
                    a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == g ? e.attr("style", e.attr("style") + ";" + b) : "$" == g.charAt(0) || a.hasOwnProperty(g) || (a[g] = b,
                    d[g] = c[g])
                })
            }
            function T(a, b, c, d, e, l, h) {
                var k = [], m, q, s = c[0], v = a.shift(), B = C({}, v, {
                    controller: null,
                    templateUrl: null,
                    transclude: null,
                    scope: null
                });
                c.html("");
                n.get(v.templateUrl, {
                    cache: r
                }).success(function(n) {
                    var r, v;
                    n = Lb(n);
                    if (l) {
                        v = A("<div>" + V(n) + "</div>").contents();
                        r = v[0];
                        if (1 != v.length || 1 !== r.nodeType)
                            throw Error(g + n);
                        n = {
                            $attr: {}
                        };
                        x(e, c, r);
                        K(r, a, n);
                        ja(d, n)
                    } else
                        r = s,
                        c.html(n);
                    a.unshift(B);
                    m = N(a, r, d, h);
                    for (q = D(c[0].childNodes, h); k.length; ) {
                        var ka = k.pop();
                        n = k.pop();
                        v = k.pop();
                        var I = k.pop()
                          , w = r;
                        v !== s && (w = jb(r),
                        x(n, A(v), w));
                        m(function() {
                            b(q, I, w, e, ka)
                        }, I, w, e, ka)
                    }
                    k = null
                }).error(function(a, b, c, d) {
                    throw Error("Failed to load template: " + d.url);
                });
                return function(a, c, d, e, g) {
                    k ? (k.push(c),
                    k.push(d),
                    k.push(e),
                    k.push(g)) : m(function() {
                        b(q, c, d, e, g)
                    }, c, d, e, g)
                }
            }
            function w(a, b) {
                return b.priority - a.priority
            }
            function wa(a, b, c, d) {
                if (b)
                    throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + sa(d));
            }
            function aa(a, b) {
                var c = l(b, !0);
                c && a.push({
                    priority: 0,
                    compile: M(function(a, b) {
                        var d = b.parent()
                          , e = d.data("$binding") || [];
                        e.push(c);
                        Q(d.data("$binding", e), "ng-binding");
                        a.$watch(c, function(a) {
                            b[0].nodeValue = a
                        })
                    })
                })
            }
            function U(a, b, c, d) {
                var e = l(c, !0);
                e && b.push({
                    priority: 100,
                    compile: M(function(a, b, c) {
                        b = c.$$observers || (c.$$observers = {});
                        "class" === d && (e = l(c[d], !0));
                        c[d] = t;
                        (b[d] || (b[d] = [])).$$inter = !0;
                        (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function(a) {
                            c.$set(d, a)
                        })
                    })
                })
            }
            function x(a, b, c) {
                var d = b[0], e = d.parentNode, g, l;
                if (a)
                    for (g = 0,
                    l = a.length; g < l; g++)
                        if (a[g] == d) {
                            a[g] = c;
                            break
                        }
                e && e.replaceChild(c, d);
                c[A.expando] = d[A.expando];
                b[0] = c
            }
            var ka = function(a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            ka.prototype = {
                $normalize: fa,
                $set: function(a, b, c, d) {
                    var e = Gb(this.$$element[0], a)
                      , g = this.$$observers;
                    e && (this.$$element.prop(a, b),
                    d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = eb(a, "-"));
                    "A" === Ka(this.$$element[0]) && "href" === a && (I.setAttribute("href", b),
                    e = I.href,
                    "" === e || e.match(h) || (this[a] = b = "unsafe:" + e));
                    !1 !== c && (null === b || b === t ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    g && p(g[a], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            m(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this
                      , d = c.$$observers || (c.$$observers = {})
                      , e = d[a] || (d[a] = []);
                    e.push(b);
                    B.$evalAsync(function() {
                        e.$$inter || b(c[a])
                    });
                    return b
                }
            };
            var I = v[0].createElement("a")
              , la = l.startSymbol()
              , ga = l.endSymbol()
              , Lb = "{{" == la || "}}" == ga ? pa : function(a) {
                return a.replace(/\{\{/g, la).replace(/}}/g, ga)
            }
            ;
            return y
        }
        ]
    }
    function fa(b) {
        return zb(b.replace(Jc, ""))
    }
    function Kc() {
        var b = {};
        this.register = function(a, c) {
            P(a) ? C(b, a) : b[a] = c
        }
        ;
        this.$get = ["$injector", "$window", function(a, c) {
            return function(d, e) {
                if (E(d)) {
                    var g = d;
                    d = b.hasOwnProperty(g) ? b[g] : gb(e.$scope, g, !0) || gb(c, g, !0);
                    ta(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }
        ]
    }
    function Lc() {
        this.$get = ["$window", function(b) {
            return A(b.document)
        }
        ]
    }
    function Mc() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }
        ]
    }
    function Nc() {
        var b = "{{"
          , a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a,
            this) : b
        }
        ;
        this.endSymbol = function(b) {
            return b ? (a = b,
            this) : a
        }
        ;
        this.$get = ["$parse", function(c) {
            function d(d, f) {
                for (var k, l, m = 0, n = [], r = d.length, s = !1, q = []; m < r; )
                    -1 != (k = d.indexOf(b, m)) && -1 != (l = d.indexOf(a, k + e)) ? (m != k && n.push(d.substring(m, k)),
                    n.push(m = c(s = d.substring(k + e, l))),
                    m.exp = s,
                    m = l + g,
                    s = !0) : (m != r && n.push(d.substring(m)),
                    m = r);
                (r = n.length) || (n.push(""),
                r = 1);
                if (!f || s)
                    return q.length = r,
                    m = function(a) {
                        for (var b = 0, c = r, d; b < c; b++)
                            "function" == typeof (d = n[b]) && (d = d(a),
                            null == d || d == t ? d = "" : "string" != typeof d && (d = ea(d))),
                            q[b] = d;
                        return q.join("")
                    }
                    ,
                    m.exp = d,
                    m.parts = n,
                    m
            }
            var e = b.length
              , g = a.length;
            d.startSymbol = function() {
                return b
            }
            ;
            d.endSymbol = function() {
                return a
            }
            ;
            return d
        }
        ]
    }
    function Mb(b) {
        b = b.split("/");
        for (var a = b.length; a--; )
            b[a] = cb(b[a]);
        return b.join("/")
    }
    function ya(b, a) {
        var c = Nb.exec(b)
          , c = {
            protocol: c[1],
            host: c[3],
            port: J(c[5]) || Ob[c[1]] || null,
            path: c[6] || "/",
            search: c[8],
            hash: c[10]
        };
        a && (a.$$protocol = c.protocol,
        a.$$host = c.host,
        a.$$port = c.port);
        return c
    }
    function ma(b, a, c) {
        return b + "://" + a + (c == Ob[b] ? "" : ":" + c)
    }
    function Oc(b, a, c) {
        var d = ya(b);
        return decodeURIComponent(d.path) != a || z(d.hash) || 0 !== d.hash.indexOf(c) ? b : ma(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }
    function Pc(b, a, c) {
        var d = ya(b);
        if (decodeURIComponent(d.path) != a || z(d.hash) || 0 !== d.hash.indexOf(c)) {
            var e = d.search && "?" + d.search || ""
              , g = d.hash && "#" + d.hash || ""
              , h = a.substr(0, a.lastIndexOf("/"))
              , f = d.path.substr(h.length);
            if (0 !== d.path.indexOf(h))
                throw Error('Invalid url "' + b + '", missing path prefix "' + h + '" !');
            return ma(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
        }
        return b
    }
    function mb(b, a, c) {
        a = a || "";
        this.$$parse = function(b) {
            var c = ya(b, this);
            if (0 !== c.path.indexOf(a))
                throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = ab(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        }
        ;
        this.$$compose = function() {
            var b = wb(this.$$search)
              , c = this.$$hash ? "#" + cb(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ma(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        }
        ;
        this.$$rewriteAppUrl = function(a) {
            if (0 == a.indexOf(c))
                return a
        }
        ;
        this.$$parse(b)
    }
    function La(b, a, c) {
        var d;
        this.$$parse = function(b) {
            var c = ya(b, this);
            if (c.hash && 0 !== c.hash.indexOf(a))
                throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Qc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? ("/" == c[1].charAt(0) ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = ab(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
            this.$$compose()
        }
        ;
        this.$$compose = function() {
            var b = wb(this.$$search)
              , c = this.$$hash ? "#" + cb(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ma(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        }
        ;
        this.$$rewriteAppUrl = function(a) {
            if (0 == a.indexOf(c))
                return a
        }
        ;
        this.$$parse(b)
    }
    function Pb(b, a, c, d) {
        La.apply(this, arguments);
        this.$$rewriteAppUrl = function(b) {
            if (0 == b.indexOf(c))
                return c + d + "#" + a + b.substr(c.length)
        }
    }
    function Ma(b) {
        return function() {
            return this[b]
        }
    }
    function Qb(b, a) {
        return function(c) {
            if (z(c))
                return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }
    function Rc() {
        var b = ""
          , a = !1;
        this.hashPrefix = function(a) {
            return x(a) ? (b = a,
            this) : b
        }
        ;
        this.html5Mode = function(b) {
            return x(b) ? (a = b,
            this) : a
        }
        ;
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, g) {
            function h(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }
            var f, k, l, m = d.url(), n = ya(m);
            a ? (k = d.baseHref() || "/",
            l = k.substr(0, k.lastIndexOf("/")),
            n = ma(n.protocol, n.host, n.port) + l + "/",
            f = e.history ? new mb(Oc(m, k, b),l,n) : new Pb(Pc(m, k, b),b,n,k.substr(l.length + 1))) : (n = ma(n.protocol, n.host, n.port) + (n.path || "") + (n.search ? "?" + n.search : "") + "#" + b + "/",
            f = new La(m,b,n));
            g.bind("click", function(a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var b = A(a.target); "a" !== G(b[0].nodeName); )
                        if (b[0] === g[0] || !(b = b.parent())[0])
                            return;
                    var d = b.prop("href")
                      , e = f.$$rewriteAppUrl(d);
                    d && !b.attr("target") && e && (f.$$parse(e),
                    c.$apply(),
                    a.preventDefault(),
                    S.angular["ff-684208-preventDefault"] = !0)
                }
            });
            f.absUrl() != m && d.url(f.absUrl(), !0);
            d.onUrlChange(function(a) {
                f.absUrl() != a && (c.$broadcast("$locationChangeStart", a, f.absUrl()).defaultPrevented ? d.url(f.absUrl()) : (c.$evalAsync(function() {
                    var b = f.absUrl();
                    f.$$parse(a);
                    h(b)
                }),
                c.$$phase || c.$digest()))
            });
            var r = 0;
            c.$watch(function() {
                var a = d.url()
                  , b = f.$$replace;
                r && a == f.absUrl() || (r++,
                c.$evalAsync(function() {
                    c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b),
                    h(a))
                }));
                f.$$replace = !1;
                return r
            });
            return f
        }
        ]
    }
    function Sc() {
        this.$get = ["$window", function(b) {
            function a(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }
            function c(c) {
                var e = b.console || {}
                  , g = e[c] || e.log || u;
                return g.apply ? function() {
                    var b = [];
                    p(arguments, function(c) {
                        b.push(a(c))
                    });
                    return g.apply(e, b)
                }
                : function(a, b) {
                    g(a, b)
                }
            }
            return {
                log: c("log"),
                warn: c("warn"),
                info: c("info"),
                error: c("error")
            }
        }
        ]
    }
    function Tc(b, a) {
        function c(a) {
            return -1 != a.indexOf(v)
        }
        function d() {
            return q + 1 < b.length ? b.charAt(q + 1) : !1
        }
        function e(a) {
            return "0" <= a && "9" >= a
        }
        function g(a) {
            return " " == a || "\r" == a || "\t" == a || "\n" == a || "\v" == a || "\u00a0" == a
        }
        function h(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" == a || "$" == a
        }
        function f(a) {
            return "-" == a || "+" == a || e(a)
        }
        function k(a, c, d) {
            d = d || q;
            throw Error("Lexer Error: " + a + " at column" + (x(c) ? "s " + c + "-" + q + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }
        function l() {
            for (var a = "", c = q; q < b.length; ) {
                var g = G(b.charAt(q));
                if ("." == g || e(g))
                    a += g;
                else {
                    var l = d();
                    if ("e" == g && f(l))
                        a += g;
                    else if (f(g) && l && e(l) && "e" == a.charAt(a.length - 1))
                        a += g;
                    else if (!f(g) || l && e(l) || "e" != a.charAt(a.length - 1))
                        break;
                    else
                        k("Invalid exponent")
                }
                q++
            }
            a *= 1;
            r.push({
                index: c,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            })
        }
        function m() {
            for (var c = "", d = q, f, l, k, m; q < b.length; ) {
                m = b.charAt(q);
                if ("." == m || h(m) || e(m))
                    "." == m && (f = q),
                    c += m;
                else
                    break;
                q++
            }
            if (f)
                for (l = q; l < b.length; ) {
                    m = b.charAt(l);
                    if ("(" == m) {
                        k = c.substr(f - d + 1);
                        c = c.substr(0, f - d);
                        q = l;
                        break
                    }
                    if (g(m))
                        l++;
                    else
                        break
                }
            d = {
                index: d,
                text: c
            };
            if (Na.hasOwnProperty(c))
                d.fn = d.json = Na[c];
            else {
                var n = Rb(c, a);
                d.fn = C(function(a, b) {
                    return n(a, b)
                }, {
                    assign: function(a, b) {
                        return Sb(a, c, b)
                    }
                })
            }
            r.push(d);
            k && (r.push({
                index: f,
                text: ".",
                json: !1
            }),
            r.push({
                index: f + 1,
                text: k,
                json: !1
            }))
        }
        function n(a) {
            var c = q;
            q++;
            for (var d = "", e = a, f = !1; q < b.length; ) {
                var g = b.charAt(q)
                  , e = e + g;
                if (f)
                    "u" == g ? (g = b.substring(q + 1, q + 5),
                    g.match(/[\da-f]{4}/i) || k("Invalid unicode escape [\\u" + g + "]"),
                    q += 4,
                    d += String.fromCharCode(parseInt(g, 16))) : d = (f = Uc[g]) ? d + f : d + g,
                    f = !1;
                else if ("\\" == g)
                    f = !0;
                else {
                    if (g == a) {
                        q++;
                        r.push({
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function() {
                                return d
                            }
                        });
                        return
                    }
                    d += g
                }
                q++
            }
            k("Unterminated quote", c)
        }
        for (var r = [], s, q = 0, B = [], v, y = ":"; q < b.length; ) {
            v = b.charAt(q);
            if (c("\"'"))
                n(v);
            else if (e(v) || c(".") && e(d()))
                l();
            else if (h(v))
                m(),
                -1 != "{,".indexOf(y) && "{" == B[0] && (s = r[r.length - 1]) && (s.json = -1 == s.text.indexOf("."));
            else if (c("(){}[].,;:"))
                r.push({
                    index: q,
                    text: v,
                    json: -1 != ":[,".indexOf(y) && c("{[") || c("}]:,")
                }),
                c("{[") && B.unshift(v),
                c("}]") && B.shift(),
                q++;
            else if (g(v)) {
                q++;
                continue
            } else {
                var p = v + d()
                  , D = Na[v]
                  , K = Na[p];
                K ? (r.push({
                    index: q,
                    text: p,
                    fn: K
                }),
                q += 2) : D ? (r.push({
                    index: q,
                    text: v,
                    fn: D,
                    json: -1 != "[,:".indexOf(y) && c("+-")
                }),
                q += 1) : k("Unexpected next character ", q, q + 1)
            }
            y = v
        }
        return r
    }
    function Vc(b, a, c, d) {
        function e(a, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }
        function g() {
            if (0 === T.length)
                throw Error("Unexpected end of expression: " + b);
            return T[0]
        }
        function h(a, b, c, d) {
            if (0 < T.length) {
                var e = T[0]
                  , f = e.text;
                if (f == a || f == b || f == c || f == d || !(a || b || c || d))
                    return e
            }
            return !1
        }
        function f(b, c, d, f) {
            return (b = h(b, c, d, f)) ? (a && !b.json && e("is not valid json", b),
            T.shift(),
            b) : !1
        }
        function k(a) {
            f(a) || e("is unexpected, expecting [" + a + "]", h())
        }
        function l(a, b) {
            return function(c, d) {
                return a(c, d, b)
            }
        }
        function m(a, b, c) {
            return function(d, e) {
                return b(d, e, a, c)
            }
        }
        function n() {
            for (var a = []; ; )
                if (0 < T.length && !h("}", ")", ";", "]") && a.push(x()),
                !f(";"))
                    return 1 == a.length ? a[0] : function(b, c) {
                        for (var d, e = 0; e < a.length; e++) {
                            var f = a[e];
                            f && (d = f(b, c))
                        }
                        return d
                    }
        }
        function r() {
            for (var a = f(), b = c(a.text), d = []; ; )
                if (a = f(":"))
                    d.push(w());
                else {
                    var e = function(a, c, e) {
                        e = [e];
                        for (var f = 0; f < d.length; f++)
                            e.push(d[f](a, c));
                        return b.apply(a, e)
                    };
                    return function() {
                        return e
                    }
                }
        }
        function s() {
            for (var a = q(), b; ; )
                if (b = f("||"))
                    a = m(a, b.fn, q());
                else
                    return a
        }
        function q() {
            var a = B(), b;
            if (b = f("&&"))
                a = m(a, b.fn, q());
            return a
        }
        function B() {
            var a = v(), b;
            if (b = f("==", "!="))
                a = m(a, b.fn, B());
            return a
        }
        function v() {
            var a;
            a = y();
            for (var b; b = f("+", "-"); )
                a = m(a, b.fn, y());
            if (b = f("<", ">", "<=", ">="))
                a = m(a, b.fn, v());
            return a
        }
        function y() {
            for (var a = p(), b; b = f("*", "/", "%"); )
                a = m(a, b.fn, p());
            return a
        }
        function p() {
            var a;
            return f("+") ? D() : (a = f("-")) ? m(H, a.fn, p()) : (a = f("!")) ? l(a.fn, p()) : D()
        }
        function D() {
            var a;
            if (f("("))
                a = x(),
                k(")");
            else if (f("["))
                a = K();
            else if (f("{"))
                a = N();
            else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", "."); )
                "(" === b.text ? (a = z(a, c),
                c = null) : "[" === b.text ? (c = a,
                a = U(a)) : "." === b.text ? (c = a,
                a = aa(a)) : e("IMPOSSIBLE");
            return a
        }
        function K() {
            var a = [];
            if ("]" != g().text) {
                do
                    a.push(w());
                while (f(","))
            }
            k("]");
            return function(b, c) {
                for (var d = [], e = 0; e < a.length; e++)
                    d.push(a[e](b, c));
                return d
            }
        }
        function N() {
            var a = [];
            if ("}" != g().text) {
                do {
                    var b = f()
                      , b = b.string || b.text;
                    k(":");
                    var c = w();
                    a.push({
                        key: b,
                        value: c
                    })
                } while (f(","))
            }
            k("}");
            return function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }
        }
        var H = M(0), A, T = Tc(b, d), w = function() {
            var a = s(), c, d;
            return (d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d),
            c = s(),
            function(b, d) {
                return a.assign(b, c(b, d), d)
            }
            ) : a
        }, z = function(a, b) {
            var c = [];
            if (")" != g().text) {
                do
                    c.push(w());
                while (f(","))
            }
            k(")");
            return function(d, e) {
                for (var f = [], g = b ? b(d, e) : d, l = 0; l < c.length; l++)
                    f.push(c[l](d, e));
                l = a(d, e, g) || u;
                return l.apply ? l.apply(g, f) : l(f[0], f[1], f[2], f[3], f[4])
            }
        }, aa = function(a) {
            var b = f().text
              , c = Rb(b, d);
            return C(function(b, d, e) {
                return c(e || a(b, d), d)
            }, {
                assign: function(c, d, e) {
                    return Sb(a(c, e), b, d)
                }
            })
        }, U = function(a) {
            var b = w();
            k("]");
            return C(function(c, d) {
                var e = a(c, d), f = b(c, d), g;
                if (!e)
                    return t;
                (e = e[f]) && e.then && (g = e,
                "$$v"in e || (g.$$v = t,
                g.then(function(a) {
                    g.$$v = a
                })),
                e = e.$$v);
                return e
            }, {
                assign: function(c, d, e) {
                    return a(c, e)[b(c, e)] = d
                }
            })
        }, x = function() {
            for (var a = w(), b; ; )
                if (b = f("|"))
                    a = m(a, b.fn, r());
                else
                    return a
        };
        a ? (w = s,
        z = aa = U = x = function() {
            e("is not valid json", {
                text: b,
                index: 0
            })
        }
        ,
        A = D()) : A = n();
        0 !== T.length && e("is an unexpected token", T[0]);
        return A
    }
    function Sb(b, a, c) {
        a = a.split(".");
        for (var d = 0; 1 < a.length; d++) {
            var e = a.shift()
              , g = b[e];
            g || (g = {},
            b[e] = g);
            b = g
        }
        return b[a.shift()] = c
    }
    function Tb(b, a, c, d, e) {
        return function(g, h) {
            var f = h && h.hasOwnProperty(b) ? h : g, k;
            if (null === f || f === t)
                return f;
            (f = f[b]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!a || null === f || f === t)
                return f;
            (f = f[a]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!c || null === f || f === t)
                return f;
            (f = f[c]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!d || null === f || f === t)
                return f;
            (f = f[d]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!e || null === f || f === t)
                return f;
            (f = f[e]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            return f
        }
    }
    function Rb(b, a) {
        if (nb.hasOwnProperty(b))
            return nb[b];
        var c = b.split("."), d = c.length, e;
        if (a)
            e = 6 > d ? Tb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
                var e = 0, g;
                do
                    g = Tb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b),
                    b = t,
                    a = g;
                while (e < d);
                return g
            }
            ;
        else {
            var g = "var l, fn, p;\n";
            p(c, function(a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function() {
                return g
            }
        }
        return nb[b] = e
    }
    function Wc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function(a, c) {
            return function(d) {
                switch (typeof d) {
                case "string":
                    return b.hasOwnProperty(d) ? b[d] : b[d] = Vc(d, !1, a, c.csp);
                case "function":
                    return d;
                default:
                    return u
                }
            }
        }
        ]
    }
    function Xc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return Yc(function(a) {
                b.$evalAsync(a)
            }, a)
        }
        ]
    }
    function Yc(b, a) {
        function c(a) {
            return a
        }
        function d(a) {
            return h(a)
        }
        var e = function() {
            var f = [], k, l;
            return l = {
                resolve: function(a) {
                    if (f) {
                        var c = f;
                        f = t;
                        k = g(a);
                        c.length && b(function() {
                            for (var a, b = 0, d = c.length; b < d; b++)
                                a = c[b],
                                k.then(a[0], a[1])
                        })
                    }
                },
                reject: function(a) {
                    l.resolve(h(a))
                },
                promise: {
                    then: function(b, g) {
                        var l = e()
                          , h = function(d) {
                            try {
                                l.resolve((b || c)(d))
                            } catch (e) {
                                l.reject(e),
                                a(e)
                            }
                        }
                          , q = function(b) {
                            try {
                                l.resolve((g || d)(b))
                            } catch (c) {
                                l.reject(c),
                                a(c)
                            }
                        };
                        f ? f.push([h, q]) : k.then(h, q);
                        return l.promise
                    }
                }
            }
        }
          , g = function(a) {
            return a && a.then ? a : {
                then: function(c) {
                    var d = e();
                    b(function() {
                        d.resolve(c(a))
                    });
                    return d.promise
                }
            }
        }
          , h = function(a) {
            return {
                then: function(c, g) {
                    var h = e();
                    b(function() {
                        h.resolve((g || d)(a))
                    });
                    return h.promise
                }
            }
        };
        return {
            defer: e,
            reject: h,
            when: function(f, k, l) {
                var m = e(), n, r = function(b) {
                    try {
                        return (k || c)(b)
                    } catch (d) {
                        return a(d),
                        h(d)
                    }
                }, s = function(b) {
                    try {
                        return (l || d)(b)
                    } catch (c) {
                        return a(c),
                        h(c)
                    }
                };
                b(function() {
                    g(f).then(function(a) {
                        n || (n = !0,
                        m.resolve(g(a).then(r, s)))
                    }, function(a) {
                        n || (n = !0,
                        m.resolve(s(a)))
                    })
                });
                return m.promise
            },
            all: function(a) {
                var b = e()
                  , c = a.length
                  , d = [];
                c ? p(a, function(a, e) {
                    g(a).then(function(a) {
                        e in d || (d[e] = a,
                        --c || b.resolve(d))
                    }, function(a) {
                        e in d || b.reject(a)
                    })
                }) : b.resolve(d);
                return b.promise
            }
        }
    }
    function Zc() {
        var b = {};
        this.when = function(a, c) {
            b[a] = C({
                reloadOnSearch: !0
            }, c);
            if (a) {
                var d = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                b[d] = {
                    redirectTo: a
                }
            }
            return this
        }
        ;
        this.otherwise = function(a) {
            this.when(null, a);
            return this
        }
        ;
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(a, c, d, e, g, h, f) {
            function k(a, b) {
                b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                for (var c = "", d = [], e = {}, f = /:(\w+)/g, g, l = 0; null !== (g = f.exec(b)); )
                    c += b.slice(l, g.index),
                    c += "([^\\/]*)",
                    d.push(g[1]),
                    l = f.lastIndex;
                var c = c + b.substr(l)
                  , h = a.match(RegExp(c));
                h && p(d, function(a, b) {
                    e[a] = h[b + 1]
                });
                return h ? e : null
            }
            function l() {
                var b = m()
                  , l = s.current;
                if (b && l && b.$$route === l.$$route && ha(b.pathParams, l.pathParams) && !b.reloadOnSearch && !r)
                    l.params = b.params,
                    X(l.params, d),
                    a.$broadcast("$routeUpdate", l);
                else if (b || l)
                    r = !1,
                    a.$broadcast("$routeChangeStart", b, l),
                    (s.current = b) && b.redirectTo && (E(b.redirectTo) ? c.path(n(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()),
                    e.when(b).then(function() {
                        if (b) {
                            var a = [], c = [], d;
                            p(b.resolve || {}, function(b, d) {
                                a.push(d);
                                c.push(E(b) ? g.get(b) : g.invoke(b))
                            });
                            x(d = b.template) || x(d = b.templateUrl) && (d = h.get(d, {
                                cache: f
                            }).then(function(a) {
                                return a.data
                            }));
                            x(d) && (a.push("$template"),
                            c.push(d));
                            return e.all(c).then(function(b) {
                                var c = {};
                                p(b, function(b, d) {
                                    c[a[d]] = b
                                });
                                return c
                            })
                        }
                    }).then(function(c) {
                        b == s.current && (b && (b.locals = c,
                        X(b.params, d)),
                        a.$broadcast("$routeChangeSuccess", b, l))
                    }, function(c) {
                        b == s.current && a.$broadcast("$routeChangeError", b, l, c)
                    })
            }
            function m() {
                var a, d;
                p(b, function(b, e) {
                    !d && (a = k(c.path(), e)) && (d = Aa(b, {
                        params: C({}, c.search(), a),
                        pathParams: a
                    }),
                    d.$$route = b)
                });
                return d || b[null] && Aa(b[null], {
                    params: {},
                    pathParams: {}
                })
            }
            function n(a, b) {
                var c = [];
                p((a || "").split(":"), function(a, d) {
                    if (0 == d)
                        c.push(a);
                    else {
                        var e = a.match(/(\w+)(.*)/)
                          , f = e[1];
                        c.push(b[f]);
                        c.push(e[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }
            var r = !1
              , s = {
                routes: b,
                reload: function() {
                    r = !0;
                    a.$evalAsync(l)
                }
            };
            a.$on("$locationChangeSuccess", l);
            return s
        }
        ]
    }
    function $c() {
        this.$get = M({})
    }
    function ad() {
        var b = 10;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        }
        ;
        this.$get = ["$injector", "$exceptionHandler", "$parse", function(a, c, d) {
            function e() {
                this.$id = za();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {}
            }
            function g(a) {
                if (k.$$phase)
                    throw Error(k.$$phase + " already in progress");
                k.$$phase = a
            }
            function h(a, b) {
                var c = d(a);
                ta(c, b);
                return c
            }
            function f() {}
            e.prototype = {
                $new: function(a) {
                    if (L(a))
                        throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                    a ? (a = new e,
                    a.$root = this.$root) : (a = function() {}
                    ,
                    a.prototype = this,
                    a = new a,
                    a.$id = za());
                    a["this"] = a;
                    a.$$listeners = {};
                    a.$parent = this;
                    a.$$asyncQueue = [];
                    a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a
                },
                $watch: function(a, b, c) {
                    var d = h(a, "watch")
                      , e = this.$$watchers
                      , g = {
                        fn: b,
                        last: f,
                        get: d,
                        exp: a,
                        eq: !!c
                    };
                    if (!L(b)) {
                        var k = h(b || u, "listener");
                        g.fn = function(a, b, c) {
                            k(c)
                        }
                    }
                    e || (e = this.$$watchers = []);
                    e.unshift(g);
                    return function() {
                        Xa(e, g)
                    }
                },
                $digest: function() {
                    var a, d, e, h, s, q, p, v = b, y, t = [], D, K;
                    g("$digest");
                    do {
                        p = !1;
                        y = this;
                        do {
                            for (s = y.$$asyncQueue; s.length; )
                                try {
                                    y.$eval(s.shift())
                                } catch (N) {
                                    c(N)
                                }
                            if (h = y.$$watchers)
                                for (q = h.length; q--; )
                                    try {
                                        (a = h[q]) && (d = a.get(y)) !== (e = a.last) && !(a.eq ? ha(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e)) && (p = !0,
                                        a.last = a.eq ? X(d) : d,
                                        a.fn(d, e === f ? d : e, y),
                                        5 > v && (D = 4 - v,
                                        t[D] || (t[D] = []),
                                        K = L(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                        K += "; newVal: " + ea(d) + "; oldVal: " + ea(e),
                                        t[D].push(K)))
                                    } catch (H) {
                                        c(H)
                                    }
                            if (!(h = y.$$childHead || y !== this && y.$$nextSibling))
                                for (; y !== this && !(h = y.$$nextSibling); )
                                    y = y.$parent
                        } while (y = h);
                        if (p && !v--)
                            throw k.$$phase = null,
                            Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + ea(t));
                    } while (p || s.length);
                    k.$$phase = null
                },
                $destroy: function() {
                    if (k != this && !this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                    }
                },
                $eval: function(a, b) {
                    return d(a)(this, b)
                },
                $evalAsync: function(a) {
                    this.$$asyncQueue.push(a)
                },
                $apply: function(a) {
                    try {
                        return g("$apply"),
                        this.$eval(a)
                    } catch (b) {
                        c(b)
                    } finally {
                        k.$$phase = null;
                        try {
                            k.$digest()
                        } catch (d) {
                            throw c(d),
                            d;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    return function() {
                        c[Ca(c, b)] = null
                    }
                },
                $emit: function(a, b) {
                    var d = [], e, f = this, g = !1, h = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, k = Ya([h], arguments, 1), p, t;
                    do {
                        e = f.$$listeners[a] || d;
                        h.currentScope = f;
                        p = 0;
                        for (t = e.length; p < t; p++)
                            if (e[p])
                                try {
                                    if (e[p].apply(null, k),
                                    g)
                                        return h
                                } catch (D) {
                                    c(D)
                                }
                            else
                                e.splice(p, 1),
                                p--,
                                t--;
                        f = f.$parent
                    } while (f);
                    return h
                },
                $broadcast: function(a, b) {
                    var d = this, e = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, g = Ya([f], arguments, 1), h, k;
                    do {
                        d = e;
                        f.currentScope = d;
                        e = d.$$listeners[a] || [];
                        h = 0;
                        for (k = e.length; h < k; h++)
                            if (e[h])
                                try {
                                    e[h].apply(null, g)
                                } catch (p) {
                                    c(p)
                                }
                            else
                                e.splice(h, 1),
                                h--,
                                k--;
                        if (!(e = d.$$childHead || d !== this && d.$$nextSibling))
                            for (; d !== this && !(e = d.$$nextSibling); )
                                d = d.$parent
                    } while (d = e);
                    return f
                }
            };
            var k = new e;
            return k
        }
        ]
    }
    function bd() {
        this.$get = ["$window", function(b) {
            var a = {}
              , c = J((/android (\d+)/.exec(G(b.navigator.userAgent)) || [])[1]);
            return {
                history: !(!b.history || !b.history.pushState || 4 > c),
                hashchange: "onhashchange"in b && (!b.document.documentMode || 7 < b.document.documentMode),
                hasEvent: function(c) {
                    if ("input" == c && 9 == Y)
                        return !1;
                    if (z(a[c])) {
                        var e = b.document.createElement("div");
                        a[c] = "on" + c in e
                    }
                    return a[c]
                },
                csp: !1
            }
        }
        ]
    }
    function cd() {
        this.$get = M(S)
    }
    function Ub(b) {
        var a = {}, c, d, e;
        if (!b)
            return a;
        p(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = G(V(b.substr(0, e)));
            d = V(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + (", " + d) : d)
        });
        return a
    }
    function Vb(b) {
        var a = P(b) ? b : t;
        return function(c) {
            a || (a = Ub(b));
            return c ? a[G(c)] || null : a
        }
    }
    function Wb(b, a, c) {
        if (L(c))
            return c(b, a);
        p(c, function(c) {
            b = c(b, a)
        });
        return b
    }
    function dd() {
        var b = /^\s*(\[|\{[^\{])/
          , a = /[\}\]]\s*$/
          , c = /^\)\]\}',?\n/
          , d = this.defaults = {
            transformResponse: [function(d) {
                E(d) && (d = d.replace(c, ""),
                b.test(d) && a.test(d) && (d = ub(d, !0)));
                return d
            }
            ],
            transformRequest: [function(a) {
                return P(a) && "[object File]" !== oa.apply(a) ? ea(a) : a
            }
            ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                post: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                put: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }
        }
          , e = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, k, l, m) {
            function n(a) {
                function c(a) {
                    var b = C({}, a, {
                        data: Wb(a.data, a.headers, f)
                    });
                    a = a.status;
                    return 200 <= a && 300 > a ? b : l.reject(b)
                }
                a.method = na(a.method);
                var e = a.transformRequest || d.transformRequest, f = a.transformResponse || d.transformResponse, g = C({}, a.headers), k = C({
                    "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                }, d.headers.common, d.headers[G(a.method)]), m, n, s, q;
                a: for (m in k) {
                    n = G(m);
                    for (s in a.headers)
                        if (G(s) === n)
                            continue a;
                    g[m] = k[m]
                }
                if (z(a.data))
                    for (var t in g)
                        if ("content-type" === G(t)) {
                            delete g[t];
                            break
                        }
                e = Wb(a.data, Vb(g), e);
                q = r(a, e, g);
                q = q.then(c, c);
                p(B, function(a) {
                    q = a(q)
                });
                q.success = function(b) {
                    q.then(function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return q
                }
                ;
                q.error = function(b) {
                    q.then(null, function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return q
                }
                ;
                return q
            }
            function r(b, c, d) {
                function e(a, b, c) {
                    p && (200 <= a && 300 > a ? p.put(t, [a, b, Ub(c)]) : p.remove(t));
                    f(b, a, c);
                    k.$apply()
                }
                function f(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && 300 > c ? m.resolve : m.reject)({
                        data: a,
                        status: c,
                        headers: Vb(d),
                        config: b
                    })
                }
                function h() {
                    var a = Ca(n.pendingRequests, b);
                    -1 !== a && n.pendingRequests.splice(a, 1)
                }
                var m = l.defer(), r = m.promise, p, w, t = s(b.url, b.params);
                n.pendingRequests.push(b);
                r.then(h, h);
                b.cache && "GET" == b.method && (p = P(b.cache) ? b.cache : q);
                if (p)
                    if (w = p.get(t),
                    x(w)) {
                        if (w.then)
                            return w.then(h, h),
                            w;
                        F(w) ? f(w[1], w[0], X(w[2])) : f(w, 200, {})
                    } else
                        p.put(t, r);
                z(w) && a(b.method, t, c, e, d, b.timeout, b.withCredentials);
                return r
            }
            function s(a, b) {
                if (!b)
                    return a;
                var c = [];
                mc(b, function(a, b) {
                    null != a && a != t && (P(a) && (a = ea(a)),
                    c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                });
                return a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
            }
            var q = c("$http")
              , B = [];
            p(e, function(a) {
                B.push(E(a) ? m.get(a) : m.invoke(a))
            });
            n.pendingRequests = [];
            (function(a) {
                p(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(C(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }
            )("get", "delete", "head", "jsonp");
            (function(a) {
                p(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(C(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }
            )("post", "put");
            n.defaults = d;
            return n
        }
        ]
    }
    function ed() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return fd(b, gd, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
        }
        ]
    }
    function fd(b, a, c, d, e, g) {
        function h(a, b) {
            var c = e.createElement("script")
              , d = function() {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            Y ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            }
            : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }
        return function(e, k, l, m, n, r, s) {
            function q(a, c, d, e) {
                c = "file" == (k.match(Nb) || ["", g])[1] ? d ? 200 : 404 : c;
                a(1223 == c ? 204 : c, d, e);
                b.$$completeOutstandingRequest(u)
            }
            b.$$incOutstandingRequestCount();
            k = k || b.url();
            if ("jsonp" == G(e)) {
                var t = "_" + (d.counter++).toString(36);
                d[t] = function(a) {
                    d[t].data = a
                }
                ;
                h(k.replace("JSON_CALLBACK", "angular.callbacks." + t), function() {
                    d[t].data ? q(m, 200, d[t].data) : q(m, -2);
                    delete d[t]
                })
            } else {
                var v = new a;
                v.open(e, k, !0);
                p(n, function(a, b) {
                    a && v.setRequestHeader(b, a)
                });
                var y;
                v.onreadystatechange = function() {
                    if (4 == v.readyState) {
                        var a = v.getAllResponseHeaders()
                          , b = "Cache-Control Content-Language Content-Type Expires Last-Modified Pragma".split(" ");
                        a || (a = "",
                        p(b, function(b) {
                            var c = v.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        }));
                        q(m, y || v.status, v.responseText, a)
                    }
                }
                ;
                s && (v.withCredentials = !0);
                v.send(l || "");
                0 < r && c(function() {
                    y = -1;
                    v.abort()
                }, r)
            }
        }
    }
    function hd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }
    function id() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, f, k) {
                var l = c.defer()
                  , m = l.promise
                  , n = x(k) && !k;
                f = a.defer(function() {
                    try {
                        l.resolve(e())
                    } catch (a) {
                        l.reject(a),
                        d(a)
                    } finally {
                        delete g[m.$$timeoutId]
                    }
                    n || b.$apply()
                }, f);
                m.$$timeoutId = f;
                g[f] = l;
                return m
            }
            var g = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"),
                delete g[b.$$timeoutId],
                a.defer.cancel(b.$$timeoutId)) : !1
            }
            ;
            return e
        }
        ]
    }
    function Xb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }
        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }
        ];
        a("currency", Yb);
        a("date", Zb);
        a("filter", jd);
        a("json", kd);
        a("limitTo", ld);
        a("lowercase", md);
        a("number", $b);
        a("orderBy", ac);
        a("uppercase", nd)
    }
    function jd() {
        return function(b, a) {
            if (!F(b))
                return b;
            var c = [];
            c.check = function(a) {
                for (var b = 0; b < c.length; b++)
                    if (!c[b](a))
                        return !1;
                return !0
            }
            ;
            var d = function(a, b) {
                if ("!" === b.charAt(0))
                    return !d(a, b.substr(1));
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    return -1 < ("" + a).toLowerCase().indexOf(b);
                case "object":
                    for (var c in a)
                        if ("$" !== c.charAt(0) && d(a[c], b))
                            return !0;
                    return !1;
                case "array":
                    for (c = 0; c < a.length; c++)
                        if (d(a[c], b))
                            return !0;
                    return !1;
                default:
                    return !1
                }
            };
            switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
                a = {
                    $: a
                };
            case "object":
                for (var e in a)
                    "$" == e ? function() {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function(a) {
                            return d(a, b)
                        })
                    }() : function() {
                        var b = e
                          , f = ("" + a[e]).toLowerCase();
                        f && c.push(function(a) {
                            return d(gb(a, b), f)
                        })
                    }();
                break;
            case "function":
                c.push(a);
                break;
            default:
                return b
            }
            for (var g = [], h = 0; h < b.length; h++) {
                var f = b[h];
                c.check(f) && g.push(f)
            }
            return g
        }
    }
    function Yb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            z(d) && (d = a.CURRENCY_SYM);
            return bc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }
    function $b(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return bc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }
    function bc(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))
            return "";
        var g = 0 > b;
        b = Math.abs(b);
        var h = b + ""
          , f = ""
          , k = []
          , l = !1;
        if (-1 !== h.indexOf("e")) {
            var m = h.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? h = "0" : (f = h,
            l = !0)
        }
        if (l)
            0 < e && -1 < b && 1 > b && (f = b.toFixed(e));
        else {
            h = (h.split(cc)[1] || "").length;
            z(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            h = Math.pow(10, e);
            b = Math.round(b * h) / h;
            b = ("" + b).split(cc);
            h = b[0];
            b = b[1] || "";
            var l = 0
              , m = a.lgSize
              , n = a.gSize;
            if (h.length >= m + n)
                for (var l = h.length - m, r = 0; r < l; r++)
                    0 === (l - r) % n && 0 !== r && (f += c),
                    f += h.charAt(r);
            for (r = l; r < h.length; r++)
                0 === (h.length - r) % m && 0 !== r && (f += c),
                f += h.charAt(r);
            for (; b.length < e; )
                b += "0";
            e && "0" !== e && (f += d + b.substr(0, e))
        }
        k.push(g ? a.negPre : a.posPre);
        k.push(f);
        k.push(g ? a.negSuf : a.posSuf);
        return k.join("")
    }
    function ob(b, a, c) {
        var d = "";
        0 > b && (d = "-",
        b = -b);
        for (b = "" + b; b.length < a; )
            b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }
    function R(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c)
                e += c;
            0 === e && -12 == c && (e = 12);
            return ob(e, a, d)
        }
    }
    function Oa(b, a) {
        return function(c, d) {
            var e = c["get" + b]()
              , g = na(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }
    function Zb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var g = 0
                  , h = 0;
                b[9] && (g = J(b[9] + b[10]),
                h = J(b[9] + b[11]));
                a.setUTCFullYear(J(b[1]), J(b[2]) - 1, J(b[3]));
                a.setUTCHours(J(b[4] || 0) - g, J(b[5] || 0) - h, J(b[6] || 0), J(b[7] || 0))
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var g = "", h = [], f, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            E(c) && (c = od.test(c) ? J(c) : a(c));
            Ua(c) && (c = new Date(c));
            if (!qa(c))
                return c;
            for (; e; )
                (k = pd.exec(e)) ? (h = Ya(h, k, 1),
                e = h.pop()) : (h.push(e),
                e = null);
            p(h, function(a) {
                f = qd[a];
                g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }
    function kd() {
        return function(b) {
            return ea(b, !0)
        }
    }
    function ld() {
        return function(b, a) {
            if (!(b instanceof Array))
                return b;
            a = J(a);
            var c = [], d, e;
            if (!(b && b instanceof Array))
                return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0,
            e = a) : (d = b.length + a,
            e = b.length);
            for (; d < e; d++)
                c.push(b[d]);
            return c
        }
    }
    function ac(b) {
        return function(a, c, d) {
            function e(a, b) {
                return $a(b) ? function(b, c) {
                    return a(c, b)
                }
                : a
            }
            if (!F(a) || !c)
                return a;
            c = F(c) ? c : [c];
            c = Wa(c, function(a) {
                var c = !1
                  , d = a || pa;
                if (E(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))
                        c = "-" == a.charAt(0),
                        a = a.substring(1);
                    d = b(a)
                }
                return e(function(a, b) {
                    var c;
                    c = d(a);
                    var e = d(b)
                      , f = typeof c
                      , g = typeof e;
                    f == g ? ("string" == f && (c = c.toLowerCase(),
                    e = e.toLowerCase()),
                    c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            });
            for (var g = [], h = 0; h < a.length; h++)
                g.push(a[h]);
            return g.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)
                        return e
                }
                return 0
            }, d))
        }
    }
    function Z(b) {
        L(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return M(b)
    }
    function dc(b, a) {
        function c(a, c) {
            c = c ? "-" + eb(c, "-") : "";
            b.removeClass((a ? Pa : Qa) + c).addClass((a ? Qa : Pa) + c)
        }
        var d = this
          , e = b.parent().controller("form") || Ra
          , g = 0
          , h = d.$error = {};
        d.$name = a.name || a.ngForm;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Sa);
        c(!0);
        d.$addControl = function(a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        }
        ;
        d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            p(h, function(b, c) {
                d.$setValidity(c, !0, a)
            })
        }
        ;
        d.$setValidity = function(a, b, l) {
            var m = h[a];
            if (b)
                m && (Xa(m, l),
                m.length || (g--,
                g || (c(b),
                d.$valid = !0,
                d.$invalid = !1),
                h[a] = !1,
                c(!0, a),
                e.$setValidity(a, !0, d)));
            else {
                g || c(b);
                if (m) {
                    if (-1 != Ca(m, l))
                        return
                } else
                    h[a] = m = [],
                    g++,
                    c(!1, a),
                    e.$setValidity(a, !1, d);
                m.push(l);
                d.$valid = !1;
                d.$invalid = !0
            }
        }
        ;
        d.$setDirty = function() {
            b.removeClass(Sa).addClass(ec);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }
    function $(b) {
        return z(b) || "" === b || null === b || b !== b
    }
    function Ta(b, a, c, d, e, g) {
        var h = function() {
            var c = V(a.val());
            d.$viewValue !== c && b.$apply(function() {
                d.$setViewValue(c)
            })
        };
        if (e.hasEvent("input"))
            a.bind("input", h);
        else {
            var f, k = function() {
                f || (f = g.defer(function() {
                    h();
                    f = null
                }))
            };
            a.bind("keydown", function(a) {
                a = a.keyCode;
                91 === a || 15 < a && 19 > a || 37 <= a && 40 >= a || k()
            });
            a.bind("change", h);
            e.hasEvent("paste") && a.bind("paste cut", k)
        }
        d.$render = function() {
            a.val($(d.$viewValue) ? "" : d.$viewValue)
        }
        ;
        var l = c.ngPattern
          , m = function(a, b) {
            if ($(b) || a.test(b))
                return d.$setValidity("pattern", !0),
                b;
            d.$setValidity("pattern", !1);
            return t
        };
        l && (l.match(/^\/(.*)\/$/) ? (l = RegExp(l.substr(1, l.length - 2)),
        e = function(a) {
            return m(l, a)
        }
        ) : e = function(a) {
            var c = b.$eval(l);
            if (!c || !c.test)
                throw Error("Expected " + l + " to be a RegExp but was " + c);
            return m(c, a)
        }
        ,
        d.$formatters.push(e),
        d.$parsers.push(e));
        if (c.ngMinlength) {
            var n = J(c.ngMinlength);
            e = function(a) {
                if (!$(a) && a.length < n)
                    return d.$setValidity("minlength", !1),
                    t;
                d.$setValidity("minlength", !0);
                return a
            }
            ;
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var r = J(c.ngMaxlength);
            c = function(a) {
                if (!$(a) && a.length > r)
                    return d.$setValidity("maxlength", !1),
                    t;
                d.$setValidity("maxlength", !0);
                return a
            }
            ;
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }
    function pb(b, a) {
        b = "ngClass" + b;
        return Z(function(c, d, e) {
            function g(b) {
                if (!0 === a || c.$index % 2 === a)
                    k && !ha(b, k) && h(k),
                    f(b);
                k = X(b)
            }
            function h(a) {
                P(a) && !F(a) && (a = Wa(a, function(a, b) {
                    if (a)
                        return b
                }));
                d.removeClass(F(a) ? a.join(" ") : a)
            }
            function f(a) {
                P(a) && !F(a) && (a = Wa(a, function(a, b) {
                    if (a)
                        return b
                }));
                a && d.addClass(F(a) ? a.join(" ") : a)
            }
            var k = t;
            c.$watch(e[b], g, !0);
            e.$observe("class", function(a) {
                a = c.$eval(e[b]);
                g(a, a)
            });
            "ngClass" !== b && c.$watch("$index", function(d, g) {
                var k = d & 1;
                k !== g & 1 && (k === a ? f(c.$eval(e[b])) : h(c.$eval(e[b])))
            })
        })
    }
    var G = function(b) {
        return E(b) ? b.toLowerCase() : b
    }, na = function(b) {
        return E(b) ? b.toUpperCase() : b
    }, Y = J((/msie (\d+)/.exec(G(navigator.userAgent)) || [])[1]), A, da, Da = [].slice, rd = [].push, oa = Object.prototype.toString, db = S.angular || (S.angular = {}), va, Ka, ba = ["0", "0", "0"];
    u.$inject = [];
    pa.$inject = [];
    var V = function() {
        return String.prototype.trim ? function(b) {
            return E(b) ? b.trim() : b
        }
        : function(b) {
            return E(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
        }
    }();
    Ka = 9 > Y ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? na(b.scopeName + ":" + b.nodeName) : b.nodeName
    }
    : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    }
    ;
    var rc = /[A-Z]/g
      , sd = {
        full: "1.0.9-3ccec13",
        major: 1,
        minor: 0,
        dot: 9,
        codeName: "marc-todo"
    }
      , Fa = O.cache = {}
      , Ea = O.expando = "ng-" + (new Date).getTime()
      , vc = 1
      , fc = S.document.addEventListener ? function(b, a, c) {
        b.addEventListener(a, c, !1)
    }
    : function(b, a, c) {
        b.attachEvent("on" + a, c)
    }
      , kb = S.document.removeEventListener ? function(b, a, c) {
        b.removeEventListener(a, c, !1)
    }
    : function(b, a, c) {
        b.detachEvent("on" + a, c)
    }
      , tc = /([\:\-\_]+(.))/g
      , uc = /^moz([A-Z])/
      , xa = O.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0,
                b())
            }
            var c = !1;
            this.bind("DOMContentLoaded", a);
            O(S).bind("load", a)
        },
        toString: function() {
            var b = [];
            p(this, function(a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        },
        eq: function(b) {
            return 0 <= b ? A(this[b]) : A(this[this.length + b])
        },
        length: 0,
        push: rd,
        sort: [].sort,
        splice: [].splice
    }
      , Ia = {};
    p("multiple selected checked disabled readOnly required".split(" "), function(b) {
        Ia[G(b)] = b
    });
    var Hb = {};
    p("input select option textarea button form".split(" "), function(b) {
        Hb[na(b)] = !0
    });
    p({
        data: Cb,
        inheritedData: Ha,
        scope: function(b) {
            return Ha(b, "$scope")
        },
        controller: Fb,
        injector: function(b) {
            return Ha(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Ga,
        css: function(b, a, c) {
            a = zb(a);
            if (x(c))
                b.style[a] = c;
            else {
                var d;
                8 >= Y && (d = b.currentStyle && b.currentStyle[a],
                "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= Y && (d = "" === d ? t : d);
                return d
            }
        },
        attr: function(b, a, c) {
            var d = G(a);
            if (Ia[d])
                if (x(c))
                    c ? (b[a] = !0,
                    b.setAttribute(a, d)) : (b[a] = !1,
                    b.removeAttribute(d));
                else
                    return b[a] || (b.attributes.getNamedItem(a) || u).specified ? d : t;
            else if (x(c))
                b.setAttribute(a, c);
            else if (b.getAttribute)
                return b = b.getAttribute(a, 2),
                null === b ? t : b
        },
        prop: function(b, a, c) {
            if (x(c))
                b[a] = c;
            else
                return b[a]
        },
        text: C(9 > Y ? function(b, a) {
            if (1 == b.nodeType) {
                if (z(a))
                    return b.innerText;
                b.innerText = a
            } else {
                if (z(a))
                    return b.nodeValue;
                b.nodeValue = a
            }
        }
        : function(b, a) {
            if (z(a))
                return b.textContent;
            b.textContent = a
        }
        , {
            $dv: ""
        }),
        val: function(b, a) {
            if (z(a)) {
                if ("SELECT" === Ka(b) && b.multiple) {
                    var c = [];
                    p(b.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function(b, a) {
            if (z(a))
                return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++)
                ua(d[c]);
            b.innerHTML = a
        }
    }, function(b, a) {
        O.prototype[a] = function(a, d) {
            var e, g;
            if ((2 == b.length && b !== Ga && b !== Fb ? a : d) === t) {
                if (P(a)) {
                    for (e = 0; e < this.length; e++)
                        if (b === Cb)
                            b(this[e], a);
                        else
                            for (g in a)
                                b(this[e], g, a[g]);
                    return this
                }
                if (this.length)
                    return b(this[0], a, d)
            } else {
                for (e = 0; e < this.length; e++)
                    b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    p({
        removeData: Ab,
        dealoc: ua,
        bind: function a(c, d, e) {
            var g = ca(c, "events")
              , h = ca(c, "handle");
            g || ca(c, "events", g = {});
            h || ca(c, "handle", h = wc(c, g));
            p(d.split(" "), function(d) {
                var k = g[d];
                if (!k) {
                    if ("mouseenter" == d || "mouseleave" == d) {
                        var l = W.body.contains || W.body.compareDocumentPosition ? function(a, c) {
                            var d = 9 === a.nodeType ? a.documentElement : a
                              , e = c && c.parentNode;
                            return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                        }
                        : function(a, c) {
                            if (c)
                                for (; c = c.parentNode; )
                                    if (c === a)
                                        return !0;
                            return !1
                        }
                        ;
                        g[d] = [];
                        a(c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[d], function(a) {
                            var c = a.relatedTarget;
                            c && (c === this || l(this, c)) || h(a, d)
                        })
                    } else
                        fc(c, d, h),
                        g[d] = [];
                    k = g[d]
                }
                k.push(e)
            })
        },
        unbind: Bb,
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            ua(a);
            p(new O(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            p(a.childNodes, function(a) {
                1 === a.nodeType && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.childNodes || []
        },
        append: function(a, c) {
            p(new O(c), function(c) {
                1 === a.nodeType && a.appendChild(c)
            })
        },
        prepend: function(a, c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                p(new O(c), function(c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function(a, c) {
            c = A(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function(a) {
            ua(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function(a, c) {
            var d = a
              , e = a.parentNode;
            p(new O(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: Eb,
        removeClass: Db,
        toggleClass: function(a, c, d) {
            z(d) && (d = !Ga(a, c));
            (d ? Eb : Db)(a, c)
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            if (a.nextElementSibling)
                return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType; )
                a = a.nextSibling;
            return a
        },
        find: function(a, c) {
            return a.getElementsByTagName(c)
        },
        clone: jb,
        triggerHandler: function(a, c) {
            var d = (ca(a, "events") || {})[c];
            p(d, function(c) {
                c.call(a, null)
            })
        }
    }, function(a, c) {
        O.prototype[c] = function(c, e) {
            for (var g, h = 0; h < this.length; h++)
                g == t ? (g = a(this[h], c, e),
                g !== t && (g = A(g))) : ib(g, a(this[h], c, e));
            return g == t ? this : g
        }
    });
    Ja.prototype = {
        put: function(a, c) {
            this[ia(a)] = c
        },
        get: function(a) {
            return this[ia(a)]
        },
        remove: function(a) {
            var c = this[a = ia(a)];
            delete this[a];
            return c
        }
    };
    lb.prototype = {
        push: function(a, c) {
            var d = this[a = ia(a)];
            d ? d.push(c) : this[a] = [c]
        },
        shift: function(a) {
            var c = this[a = ia(a)];
            if (c)
                return 1 == c.length ? (delete this[a],
                c[0]) : c.shift()
        },
        peek: function(a) {
            if (a = this[ia(a)])
                return a[0]
        }
    };
    var yc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
      , zc = /,/
      , Ac = /^\s*(_?)(\S+?)\1\s*$/
      , xc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
      , Kb = "Non-assignable model expression: ";
    Jb.$inject = ["$provide"];
    var Jc = /^(x[\:\-_]|data[\:\-_])/i
      , Nb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/
      , gc = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/
      , Qc = gc
      , Ob = {
        http: 80,
        https: 443,
        ftp: 21
    };
    mb.prototype = {
        $$replace: !1,
        absUrl: Ma("$$absUrl"),
        url: function(a, c) {
            if (z(a))
                return this.$$url;
            var d = gc.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            (d[2] || d[1]) && this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        },
        protocol: Ma("$$protocol"),
        host: Ma("$$host"),
        port: Ma("$$port"),
        path: Qb("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function(a, c) {
            if (z(a))
                return this.$$search;
            x(c) ? null === c ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = E(a) ? ab(a) : a;
            this.$$compose();
            return this
        },
        hash: Qb("$$hash", pa),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    La.prototype = Aa(mb.prototype);
    Pb.prototype = Aa(La.prototype);
    var Na = {
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: u,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return x(d) ? x(e) ? d + e : d : x(e) ? e : t
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (x(d) ? d : 0) - (x(e) ? e : 0)
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c)
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c)
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c)
        },
        "^": function(a, c, d, e) {
            return d(a, c) ^ e(a, c)
        },
        "=": u,
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c)
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c)
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c)
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c)
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c)
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c)
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c)
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c)
        },
        "&": function(a, c, d, e) {
            return d(a, c) & e(a, c)
        },
        "|": function(a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        },
        "!": function(a, c, d) {
            return !d(a, c)
        }
    }
      , Uc = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\v",
        "'": "'",
        '"': '"'
    }
      , nb = {}
      , gd = S.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {}
        throw Error("This browser does not support XMLHttpRequest.");
    }
    ;
    Xb.$inject = ["$provide"];
    Yb.$inject = ["$locale"];
    $b.$inject = ["$locale"];
    var cc = "."
      , qd = {
        yyyy: R("FullYear", 4),
        yy: R("FullYear", 2, 0, !0),
        y: R("FullYear", 1),
        MMMM: Oa("Month"),
        MMM: Oa("Month", !0),
        MM: R("Month", 2, 1),
        M: R("Month", 1, 1),
        dd: R("Date", 2),
        d: R("Date", 1),
        HH: R("Hours", 2),
        H: R("Hours", 1),
        hh: R("Hours", 2, -12),
        h: R("Hours", 1, -12),
        mm: R("Minutes", 2),
        m: R("Minutes", 1),
        ss: R("Seconds", 2),
        s: R("Seconds", 1),
        EEEE: Oa("Day"),
        EEE: Oa("Day", !0),
        a: function(a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function(a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (ob(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + ob(Math.abs(a % 60), 2))
        }
    }
      , pd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
      , od = /^\d+$/;
    Zb.$inject = ["$locale"];
    var md = M(G)
      , nd = M(na);
    ac.$inject = ["$parse"];
    var td = M({
        restrict: "E",
        compile: function(a, c) {
            8 >= Y && (c.href || c.name || c.$set("href", ""),
            a.append(W.createComment("IE fix")));
            return function(a, c) {
                c.bind("click", function(a) {
                    c.attr("href") || a.preventDefault()
                })
            }
        }
    })
      , qb = {};
    p(Ia, function(a, c) {
        var d = fa("ng-" + c);
        qb[d] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(a, g, h) {
                        a.$watch(h[d], function(a) {
                            h.$set(c, !!a)
                        })
                    }
                }
            }
        }
    });
    p(["src", "href"], function(a) {
        var c = fa("ng-" + a);
        qb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, g) {
                    g.$observe(c, function(c) {
                        c && (g.$set(a, c),
                        Y && e.prop(a, g[a]))
                    })
                }
            }
        }
    });
    var Ra = {
        $addControl: u,
        $removeControl: u,
        $setValidity: u,
        $setDirty: u
    };
    dc.$inject = ["$element", "$attrs", "$scope"];
    var hc = function(a) {
        return ["$timeout", function(c) {
            var d = {
                name: "form",
                restrict: "E",
                controller: dc,
                compile: function() {
                    return {
                        pre: function(a, d, h, f) {
                            if (!h.action) {
                                var k = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                fc(d[0], "submit", k);
                                d.bind("$destroy", function() {
                                    c(function() {
                                        kb(d[0], "submit", k)
                                    }, 0, !1)
                                })
                            }
                            var l = d.parent().controller("form")
                              , m = h.name || h.ngForm;
                            m && (a[m] = f);
                            l && d.bind("$destroy", function() {
                                l.$removeControl(f);
                                m && (a[m] = t);
                                C(f, Ra)
                            })
                        }
                    }
                }
            };
            return a ? C(X(d), {
                restrict: "EAC"
            }) : d
        }
        ]
    }
      , ud = hc()
      , vd = hc(!0)
      , wd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
      , xd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/
      , yd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/
      , ic = {
        text: Ta,
        number: function(a, c, d, e, g, h) {
            Ta(a, c, d, e, g, h);
            e.$parsers.push(function(a) {
                var c = $(a);
                if (c || yd.test(a))
                    return e.$setValidity("number", !0),
                    "" === a ? null : c ? a : parseFloat(a);
                e.$setValidity("number", !1);
                return t
            });
            e.$formatters.push(function(a) {
                return $(a) ? "" : "" + a
            });
            if (d.min) {
                var f = parseFloat(d.min);
                a = function(a) {
                    if (!$(a) && a < f)
                        return e.$setValidity("min", !1),
                        t;
                    e.$setValidity("min", !0);
                    return a
                }
                ;
                e.$parsers.push(a);
                e.$formatters.push(a)
            }
            if (d.max) {
                var k = parseFloat(d.max);
                d = function(a) {
                    if (!$(a) && a > k)
                        return e.$setValidity("max", !1),
                        t;
                    e.$setValidity("max", !0);
                    return a
                }
                ;
                e.$parsers.push(d);
                e.$formatters.push(d)
            }
            e.$formatters.push(function(a) {
                if ($(a) || Ua(a))
                    return e.$setValidity("number", !0),
                    a;
                e.$setValidity("number", !1);
                return t
            })
        },
        url: function(a, c, d, e, g, h) {
            Ta(a, c, d, e, g, h);
            a = function(a) {
                if ($(a) || wd.test(a))
                    return e.$setValidity("url", !0),
                    a;
                e.$setValidity("url", !1);
                return t
            }
            ;
            e.$formatters.push(a);
            e.$parsers.push(a)
        },
        email: function(a, c, d, e, g, h) {
            Ta(a, c, d, e, g, h);
            a = function(a) {
                if ($(a) || xd.test(a))
                    return e.$setValidity("email", !0),
                    a;
                e.$setValidity("email", !1);
                return t
            }
            ;
            e.$formatters.push(a);
            e.$parsers.push(a)
        },
        radio: function(a, c, d, e) {
            z(d.name) && c.attr("name", za());
            c.bind("click", function() {
                c[0].checked && a.$apply(function() {
                    e.$setViewValue(d.value)
                })
            });
            e.$render = function() {
                c[0].checked = d.value == e.$viewValue
            }
            ;
            d.$observe("value", e.$render)
        },
        checkbox: function(a, c, d, e) {
            var g = d.ngTrueValue
              , h = d.ngFalseValue;
            E(g) || (g = !0);
            E(h) || (h = !1);
            c.bind("click", function() {
                a.$apply(function() {
                    e.$setViewValue(c[0].checked)
                })
            });
            e.$render = function() {
                c[0].checked = e.$viewValue
            }
            ;
            e.$formatters.push(function(a) {
                return a === g
            });
            e.$parsers.push(function(a) {
                return a ? g : h
            })
        },
        hidden: u,
        button: u,
        submit: u,
        reset: u
    }
      , jc = ["$browser", "$sniffer", function(a, c) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(d, e, g, h) {
                h && (ic[G(g.type)] || ic.text)(d, e, g, h, c, a)
            }
        }
    }
    ]
      , Qa = "ng-valid"
      , Pa = "ng-invalid"
      , Sa = "ng-pristine"
      , ec = "ng-dirty"
      , zd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, c, d, e, g) {
        function h(a, c) {
            c = c ? "-" + eb(c, "-") : "";
            e.removeClass((a ? Pa : Qa) + c).addClass((a ? Qa : Pa) + c)
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var f = g(d.ngModel)
          , k = f.assign;
        if (!k)
            throw Error(Kb + d.ngModel + " (" + sa(e) + ")");
        this.$render = u;
        var l = e.inheritedData("$formController") || Ra
          , m = 0
          , n = this.$error = {};
        e.addClass(Sa);
        h(!0);
        this.$setValidity = function(a, c) {
            n[a] !== !c && (c ? (n[a] && m--,
            m || (h(!0),
            this.$valid = !0,
            this.$invalid = !1)) : (h(!1),
            this.$invalid = !0,
            this.$valid = !1,
            m++),
            n[a] = !c,
            h(c, a),
            l.$setValidity(a, c, this))
        }
        ;
        this.$setViewValue = function(d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0,
            this.$pristine = !1,
            e.removeClass(Sa).addClass(ec),
            l.$setDirty());
            p(this.$parsers, function(a) {
                d = a(d)
            });
            this.$modelValue !== d && (this.$modelValue = d,
            k(a, d),
            p(this.$viewChangeListeners, function(a) {
                try {
                    a()
                } catch (d) {
                    c(d)
                }
            }))
        }
        ;
        var r = this;
        a.$watch(function() {
            var c = f(a);
            if (r.$modelValue !== c) {
                var d = r.$formatters
                  , e = d.length;
                for (r.$modelValue = c; e--; )
                    c = d[e](c);
                r.$viewValue !== c && (r.$viewValue = c,
                r.$render())
            }
        })
    }
    ]
      , Ad = function() {
        return {
            require: ["ngModel", "^?form"],
            controller: zd,
            link: function(a, c, d, e) {
                var g = e[0]
                  , h = e[1] || Ra;
                h.$addControl(g);
                c.bind("$destroy", function() {
                    h.$removeControl(g)
                })
            }
        }
    }
      , Bd = M({
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange)
            })
        }
    })
      , kc = function() {
        return {
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var g = function(a) {
                        if (d.required && ($(a) || !1 === a))
                            e.$setValidity("required", !1);
                        else
                            return e.$setValidity("required", !0),
                            a
                    };
                    e.$formatters.push(g);
                    e.$parsers.unshift(g);
                    d.$observe("required", function() {
                        g(e.$viewValue)
                    })
                }
            }
        }
    }
      , Cd = function() {
        return {
            require: "ngModel",
            link: function(a, c, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    var c = [];
                    a && p(a.split(g), function(a) {
                        a && c.push(V(a))
                    });
                    return c
                });
                e.$formatters.push(function(a) {
                    return F(a) ? a.join(", ") : t
                })
            }
        }
    }
      , Dd = /^(true|false|\d+)$/
      , Ed = function() {
        return {
            priority: 100,
            compile: function(a, c) {
                return Dd.test(c.ngValue) ? function(a, c, g) {
                    g.$set("value", a.$eval(g.ngValue))
                }
                : function(a, c, g) {
                    a.$watch(g.ngValue, function(a) {
                        g.$set("value", a)
                    })
                }
            }
        }
    }
      , Fd = Z(function(a, c, d) {
        c.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function(a) {
            c.text(a == t ? "" : a)
        })
    })
      , Gd = ["$interpolate", function(a) {
        return function(c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function(a) {
                d.text(a)
            })
        }
    }
    ]
      , Hd = [function() {
        return function(a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
            a.$watch(d.ngBindHtmlUnsafe, function(a) {
                c.html(a || "")
            })
        }
    }
    ]
      , Id = pb("", !0)
      , Jd = pb("Odd", 0)
      , Kd = pb("Even", 1)
      , Ld = Z({
        compile: function(a, c) {
            c.$set("ngCloak", t);
            a.removeClass("ng-cloak")
        }
    })
      , Md = [function() {
        return {
            scope: !0,
            controller: "@"
        }
    }
    ]
      , Nd = ["$sniffer", function(a) {
        return {
            priority: 1E3,
            compile: function() {
                a.csp = !0
            }
        }
    }
    ]
      , lc = {};
    p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave submit".split(" "), function(a) {
        var c = fa("ng-" + a);
        lc[c] = ["$parse", function(d) {
            return function(e, g, h) {
                var f = d(h[c]);
                g.bind(G(a), function(a) {
                    e.$apply(function() {
                        f(e, {
                            $event: a
                        })
                    })
                })
            }
        }
        ]
    });
    var Od = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, c, d, e) {
        return {
            restrict: "ECA",
            terminal: !0,
            compile: function(g, h) {
                var f = h.ngInclude || h.src
                  , k = h.onload || ""
                  , l = h.autoscroll;
                return function(g, h) {
                    var r = 0, s, q = function() {
                        s && (s.$destroy(),
                        s = null);
                        h.html("")
                    };
                    g.$watch(f, function(f) {
                        var p = ++r;
                        f ? a.get(f, {
                            cache: c
                        }).success(function(a) {
                            p === r && (s && s.$destroy(),
                            s = g.$new(),
                            h.html(a),
                            e(h.contents())(s),
                            !x(l) || l && !g.$eval(l) || d(),
                            s.$emit("$includeContentLoaded"),
                            g.$eval(k))
                        }).error(function() {
                            p === r && q()
                        }) : q()
                    })
                }
            }
        }
    }
    ]
      , Pd = Z({
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit)
                }
            }
        }
    })
      , Qd = Z({
        terminal: !0,
        priority: 1E3
    })
      , Rd = ["$locale", "$interpolate", function(a, c) {
        var d = /{}/g;
        return {
            restrict: "EA",
            link: function(e, g, h) {
                var f = h.count
                  , k = g.attr(h.$attr.when)
                  , l = h.offset || 0
                  , m = e.$eval(k)
                  , n = {}
                  , r = c.startSymbol()
                  , s = c.endSymbol();
                p(m, function(a, e) {
                    n[e] = c(a.replace(d, r + f + "-" + l + s))
                });
                e.$watch(function() {
                    var c = parseFloat(e.$eval(f));
                    if (isNaN(c))
                        return "";
                    c in m || (c = a.pluralCat(c - l));
                    return n[c](e, g, !0)
                }, function(a) {
                    g.text(a)
                })
            }
        }
    }
    ]
      , Sd = Z({
        transclude: "element",
        priority: 1E3,
        terminal: !0,
        compile: function(a, c, d) {
            return function(a, c, h) {
                var f = h.ngRepeat;
                h = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
                var k, l, m;
                if (!h)
                    throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
                f = h[1];
                k = h[2];
                h = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!h)
                    throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
                l = h[3] || h[1];
                m = h[2];
                var n = new lb;
                a.$watch(function(a) {
                    var e, f, h = a.$eval(k), p = c, t = new lb, A, D, u, x, z, C;
                    if (F(h))
                        z = h || [];
                    else {
                        z = [];
                        for (u in h)
                            h.hasOwnProperty(u) && "$" != u.charAt(0) && z.push(u);
                        z.sort()
                    }
                    A = z.length - 1;
                    e = 0;
                    for (f = z.length; e < f; e++)
                        u = h === z ? e : z[e],
                        x = h[u],
                        (C = n.shift(x)) ? (D = C.scope,
                        t.push(x, C),
                        e !== C.index && (C.index = e,
                        p.after(C.element)),
                        p = C.element) : D = a.$new(),
                        D[l] = x,
                        m && (D[m] = u),
                        D.$index = e,
                        D.$first = 0 === e,
                        D.$last = e === A,
                        D.$middle = !(D.$first || D.$last),
                        C || d(D, function(a) {
                            p.after(a);
                            C = {
                                scope: D,
                                element: p = a,
                                index: e
                            };
                            t.push(x, C)
                        });
                    for (u in n)
                        if (n.hasOwnProperty(u))
                            for (z = n[u]; z.length; )
                                x = z.pop(),
                                x.element.remove(),
                                x.scope.$destroy();
                    n = t
                })
            }
        }
    })
      , Td = Z(function(a, c, d) {
        a.$watch(d.ngShow, function(a) {
            c.css("display", $a(a) ? "" : "none")
        })
    })
      , Ud = Z(function(a, c, d) {
        a.$watch(d.ngHide, function(a) {
            c.css("display", $a(a) ? "none" : "")
        })
    })
      , Vd = Z(function(a, c, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && p(d, function(a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    })
      , Wd = M({
        restrict: "EA",
        require: "ngSwitch",
        controller: ["$scope", function() {
            this.cases = {}
        }
        ],
        link: function(a, c, d, e) {
            var g, h, f;
            a.$watch(d.ngSwitch || d.on, function(k) {
                h && (f.$destroy(),
                h.remove(),
                h = f = null);
                if (g = e.cases["!" + k] || e.cases["?"])
                    a.$eval(d.change),
                    f = a.$new(),
                    g(f, function(a) {
                        h = a;
                        c.append(a)
                    })
            })
        }
    })
      , Xd = Z({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(a, c, d) {
            return function(a, g, h, f) {
                f.cases["!" + c.ngSwitchWhen] = d
            }
        }
    })
      , Yd = Z({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(a, c, d) {
            return function(a, c, h, f) {
                f.cases["?"] = d
            }
        }
    })
      , Zd = Z({
        controller: ["$transclude", "$element", function(a, c) {
            a(function(a) {
                c.append(a)
            })
        }
        ]
    })
      , $d = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, c, d, e, g, h) {
        return {
            restrict: "ECA",
            terminal: !0,
            link: function(a, c, l) {
                function m() {
                    var l = d.current && d.current.locals
                      , m = l && l.$template;
                    if (m) {
                        c.html(m);
                        n && (n.$destroy(),
                        n = null);
                        var m = g(c.contents())
                          , p = d.current;
                        n = p.scope = a.$new();
                        p.controller && (l.$scope = n,
                        l = h(p.controller, l),
                        c.children().data("$ngControllerController", l));
                        m(n);
                        n.$emit("$viewContentLoaded");
                        n.$eval(r);
                        e()
                    } else
                        c.html(""),
                        n && (n.$destroy(),
                        n = null)
                }
                var n, r = l.onload || "";
                a.$on("$routeChangeSuccess", m);
                m()
            }
        }
    }
    ]
      , ae = ["$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text)
            }
        }
    }
    ]
      , be = M({
        terminal: !0
    })
      , ce = ["$compile", "$parse", function(a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/
          , e = {
            $setViewValue: u
        };
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                var k = this, l = {}, m = e, n;
                k.databound = d.ngModel;
                k.init = function(a, c, d) {
                    m = a;
                    n = d
                }
                ;
                k.addOption = function(c) {
                    l[c] = !0;
                    m.$viewValue == c && (a.val(c),
                    n.parent() && n.remove())
                }
                ;
                k.removeOption = function(a) {
                    this.hasOption(a) && (delete l[a],
                    m.$viewValue == a && this.renderUnknownOption(a))
                }
                ;
                k.renderUnknownOption = function(c) {
                    c = "? " + ia(c) + " ?";
                    n.val(c);
                    a.prepend(n);
                    a.val(c);
                    n.prop("selected", !0)
                }
                ;
                k.hasOption = function(a) {
                    return l.hasOwnProperty(a)
                }
                ;
                c.$on("$destroy", function() {
                    k.renderUnknownOption = u
                })
            }
            ],
            link: function(e, h, f, k) {
                function l(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (G.parent() && G.remove(),
                        c.val(a),
                        "" === a && y.prop("selected", !0)) : z(a) && y ? c.val("") : e.renderUnknownOption(a)
                    }
                    ;
                    c.bind("change", function() {
                        a.$apply(function() {
                            G.parent() && G.remove();
                            d.$setViewValue(c.val())
                        })
                    })
                }
                function m(a, c, d) {
                    var e;
                    d.$render = function() {
                        var a = new Ja(d.$viewValue);
                        p(c.find("option"), function(c) {
                            c.selected = x(a.get(c.value))
                        })
                    }
                    ;
                    a.$watch(function() {
                        ha(e, d.$viewValue) || (e = X(d.$viewValue),
                        d.$render())
                    });
                    c.bind("change", function() {
                        a.$apply(function() {
                            var a = [];
                            p(c.find("option"), function(c) {
                                c.selected && a.push(c.value)
                            });
                            d.$setViewValue(a)
                        })
                    })
                }
                function n(e, f, g) {
                    function h() {
                        var a = {
                            "": []
                        }, c = [""], d, k, u, x, y;
                        u = g.$modelValue;
                        x = s(e) || [];
                        var A = n ? rb(x) : x, G, B, E;
                        B = {};
                        y = !1;
                        var F, H;
                        q && (y = new Ja(u));
                        for (E = 0; G = A.length,
                        E < G; E++) {
                            k = E;
                            if (n) {
                                k = A[E];
                                if ("$" === k.charAt(0))
                                    continue;
                                B[n] = k
                            }
                            B[m] = x[k];
                            d = p(e, B) || "";
                            (k = a[d]) || (k = a[d] = [],
                            c.push(d));
                            q ? d = y.remove(r(e, B)) != t : (d = u === r(e, B),
                            y = y || d);
                            F = l(e, B);
                            F = F === t ? "" : F;
                            k.push({
                                id: n ? A[E] : E,
                                label: F,
                                selected: d
                            })
                        }
                        q || (v || null === u ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !y
                        }) : y || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        B = 0;
                        for (A = c.length; B < A; B++) {
                            d = c[B];
                            k = a[d];
                            z.length <= B ? (u = {
                                element: D.clone().attr("label", d),
                                label: k.label
                            },
                            x = [u],
                            z.push(x),
                            f.append(u.element)) : (x = z[B],
                            u = x[0],
                            u.label != d && u.element.attr("label", u.label = d));
                            F = null;
                            E = 0;
                            for (G = k.length; E < G; E++)
                                d = k[E],
                                (y = x[E + 1]) ? (F = y.element,
                                y.label !== d.label && F.text(y.label = d.label),
                                y.id !== d.id && F.val(y.id = d.id),
                                F[0].selected !== d.selected && F.prop("selected", y.selected = d.selected)) : ("" === d.id && v ? H = v : (H = C.clone()).val(d.id).attr("selected", d.selected).text(d.label),
                                x.push({
                                    element: H,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }),
                                F ? F.after(H) : u.element.append(H),
                                F = H);
                            for (E++; x.length > E; )
                                x.pop().element.remove()
                        }
                        for (; z.length > B; )
                            z.pop()[0].element.remove()
                    }
                    var k;
                    if (!(k = u.match(d)))
                        throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + u + "'.");
                    var l = c(k[2] || k[1])
                      , m = k[4] || k[6]
                      , n = k[5]
                      , p = c(k[3] || "")
                      , r = c(k[2] ? k[1] : m)
                      , s = c(k[7])
                      , z = [[{
                        element: f,
                        label: ""
                    }]];
                    v && (a(v)(e),
                    v.removeClass("ng-scope"),
                    v.remove());
                    f.html("");
                    f.bind("change", function() {
                        e.$apply(function() {
                            var a, c = s(e) || [], d = {}, h, k, l, p, u, v;
                            if (q)
                                for (k = [],
                                p = 0,
                                v = z.length; p < v; p++)
                                    for (a = z[p],
                                    l = 1,
                                    u = a.length; l < u; l++)
                                        (h = a[l].element)[0].selected && (h = h.val(),
                                        n && (d[n] = h),
                                        d[m] = c[h],
                                        k.push(r(e, d)));
                            else
                                h = f.val(),
                                "?" == h ? k = t : "" == h ? k = null : (d[m] = c[h],
                                n && (d[n] = h),
                                k = r(e, d));
                            g.$setViewValue(k)
                        })
                    });
                    g.$render = h;
                    e.$watch(h)
                }
                if (k[1]) {
                    var r = k[0], s = k[1], q = f.multiple, u = f.ngOptions, v = !1, y, C = A(W.createElement("option")), D = A(W.createElement("optgroup")), G = C.clone();
                    k = 0;
                    for (var E = h.children(), H = E.length; k < H; k++)
                        if ("" == E[k].value) {
                            y = v = E.eq(k);
                            break
                        }
                    r.init(s, v, G);
                    if (q && (f.required || f.ngRequired)) {
                        var F = function(a) {
                            s.$setValidity("required", !f.required || a && a.length);
                            return a
                        };
                        s.$parsers.push(F);
                        s.$formatters.unshift(F);
                        f.$observe("required", function() {
                            F(s.$viewValue)
                        })
                    }
                    u ? n(e, h, s) : q ? m(e, h, s) : l(e, h, s, r)
                }
            }
        }
    }
    ]
      , de = ["$interpolate", function(a) {
        var c = {
            addOption: u,
            removeOption: u
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (z(e.value)) {
                    var g = a(d.text(), !0);
                    g || e.$set("value", d.text())
                }
                return function(a, d, e) {
                    var l = d.parent()
                      , m = l.data("$selectController") || l.parent().data("$selectController");
                    m && m.databound ? d.prop("selected", !1) : m = c;
                    g ? a.$watch(g, function(a, c) {
                        e.$set("value", a);
                        a !== c && m.removeOption(c);
                        m.addOption(a)
                    }) : m.addOption(e.value);
                    d.bind("$destroy", function() {
                        m.removeOption(e.value)
                    })
                }
            }
        }
    }
    ]
      , ee = M({
        restrict: "E",
        terminal: !0
    });
    (da = S.jQuery) ? (A = da,
    C(da.fn, {
        scope: xa.scope,
        controller: xa.controller,
        injector: xa.injector,
        inheritedData: xa.inheritedData
    }),
    hb("remove", !0, !0, !1),
    hb("empty", !1, !1, !1),
    hb("html", !1, !1, !0)) : A = O;
    db.element = A;
    (function(a) {
        C(a, {
            bootstrap: xb,
            copy: X,
            extend: C,
            equals: ha,
            element: A,
            forEach: p,
            injector: yb,
            noop: u,
            bind: Za,
            toJson: ea,
            fromJson: ub,
            identity: pa,
            isUndefined: z,
            isDefined: x,
            isString: E,
            isFunction: L,
            isObject: P,
            isNumber: Ua,
            isElement: nc,
            isArray: F,
            version: sd,
            isDate: qa,
            lowercase: G,
            uppercase: na,
            callbacks: {
                counter: 0
            }
        });
        va = sc(S);
        try {
            va("ngLocale")
        } catch (c) {
            va("ngLocale", []).provider("$locale", hd)
        }
        va("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider("$compile", Jb).directive({
                a: td,
                input: jc,
                textarea: jc,
                form: ud,
                script: ae,
                select: ce,
                style: ee,
                option: de,
                ngBind: Fd,
                ngBindHtmlUnsafe: Hd,
                ngBindTemplate: Gd,
                ngClass: Id,
                ngClassEven: Kd,
                ngClassOdd: Jd,
                ngCsp: Nd,
                ngCloak: Ld,
                ngController: Md,
                ngForm: vd,
                ngHide: Ud,
                ngInclude: Od,
                ngInit: Pd,
                ngNonBindable: Qd,
                ngPluralize: Rd,
                ngRepeat: Sd,
                ngShow: Td,
                ngStyle: Vd,
                ngSwitch: Wd,
                ngSwitchWhen: Xd,
                ngSwitchDefault: Yd,
                ngOptions: be,
                ngView: $d,
                ngTransclude: Zd,
                ngModel: Ad,
                ngList: Cd,
                ngChange: Bd,
                required: kc,
                ngRequired: kc,
                ngValue: Ed
            }).directive(qb).directive(lc);
            a.provider({
                $anchorScroll: Bc,
                $browser: Ec,
                $cacheFactory: Fc,
                $controller: Kc,
                $document: Lc,
                $exceptionHandler: Mc,
                $filter: Xb,
                $interpolate: Nc,
                $http: dd,
                $httpBackend: ed,
                $location: Rc,
                $log: Sc,
                $parse: Wc,
                $route: Zc,
                $routeParams: $c,
                $rootScope: ad,
                $q: Xc,
                $sniffer: bd,
                $templateCache: Gc,
                $timeout: id,
                $window: cd
            })
        }
        ])
    }
    )(db);
    A(W).ready(function() {
        qc(W, xb)
    })
}
)(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";\n\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak],\n.ng-cloak, .x-ng-cloak {\n  display: none !important;\n}\n\nng\\:form {\n  display: block;\n}\n</style>');

(function() {
    var d, aa = aa || {}, h = this;
    function ba(a, b, c) {
        a = a.split(".");
        c = c || h;
        a[0]in c || !c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift()); )
            a.length || void 0 === b ? c = c[e] ? c[e] : c[e] = {} : c[e] = b
    }
    function m(a, b) {
        for (var c = a.split("."), e = b || h, f; f = c.shift(); )
            if (null != e[f])
                e = e[f];
            else
                return null;
        return e
    }
    function p() {}
    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function t(a) {
        return void 0 !== a
    }
    function v(a) {
        return "array" == ca(a)
    }
    function ea(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function w(a) {
        return "string" == typeof a
    }
    function fa(a) {
        return "number" == typeof a
    }
    function x(a) {
        return "function" == ca(a)
    }
    function ga(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , ia = 0;
    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ka(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, e);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function y(a, b, c) {
        y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return y.apply(null, arguments)
    }
    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    function z(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    var A = Date.now || function() {
        return +new Date
    }
    ;
    function B(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.TK = function(a, c, g) {
            var k = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, k)
        }
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return y.apply(null, c)
        }
        return y(this, a)
    }
    ;
    Function.prototype.yT = function(a) {
        var b = Array.prototype.slice.call(arguments);
        b.unshift(this, null);
        return y.apply(null, b)
    }
    ;
    Function.prototype.US = function(a) {
        B(this, a)
    }
    ;
    Function.prototype.xT = function(a) {
        z(this.prototype, a)
    }
    ;
    function ma() {}
    d = ma.prototype;
    d.Pl = !1;
    d.vl = function() {
        return this.Pl
    }
    ;
    d.$Q = ma.prototype.vl;
    d.Vb = function() {
        this.Pl || (this.Pl = !0,
        this.R())
    }
    ;
    d.HT = function(a) {
        this.kK(la(na, a))
    }
    ;
    d.kK = function(a, b) {
        this.rb || (this.rb = []);
        this.rb.push(y(a, b))
    }
    ;
    d.R = function() {
        if (this.rb)
            for (; this.rb.length; )
                this.rb.shift()()
    }
    ;
    function na(a) {
        a && "function" == typeof a.Vb && a.Vb()
    }
    function oa(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var e = arguments[b];
            ea(e) ? oa.apply(null, e) : na(e)
        }
    }
    ;function pa(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, pa) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    }
    B(pa, Error);
    pa.prototype.name = "CustomError";
    var qa;
    function sa(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    function ta(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    function ua(a, b) {
        var c = String(a).toLowerCase()
          , e = String(b).toLowerCase();
        return c < e ? -1 : c == e ? 0 : 1
    }
    function va(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function wa(a, b) {
        if (b)
            return a.replace(xa, "&amp;").replace(za, "&lt;").replace(Aa, "&gt;").replace(Ba, "&quot;").replace(Ca, "&#39;");
        if (!Da.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(xa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ca, "&#39;"));
        return a
    }
    var xa = /&/g
      , za = /</g
      , Aa = />/g
      , Ba = /"/g
      , Ca = /'/g
      , Da = /[&<>"']/;
    function D(a, b) {
        return -1 != a.indexOf(b)
    }
    function Ea(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    Math.random();
    function Fa(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }
    function Ga(a, b) {
        var c = w(b) ? String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
            return b + c.toUpperCase()
        })
    }
    ;var E = Array.prototype
      , Ha = E.indexOf ? function(a, b, c) {
        return E.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (w(a))
            return w(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , F = E.forEach ? function(a, b, c) {
        E.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = w(a) ? a.split("") : a, g = 0; g < e; g++)
            g in f && b.call(c, f[g], g, a)
    }
    ;
    function Ja(a, b, c) {
        for (var e = a.length, f = w(a) ? a.split("") : a, e = e - 1; 0 <= e; --e)
            e in f && b.call(c, f[e], e, a)
    }
    var Ka = E.filter ? function(a, b, c) {
        return E.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = [], g = 0, k = w(a) ? a.split("") : a, l = 0; l < e; l++)
            if (l in k) {
                var n = k[l];
                b.call(c, n, l, a) && (f[g++] = n)
            }
        return f
    }
      , La = E.map ? function(a, b, c) {
        return E.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = Array(e), g = w(a) ? a.split("") : a, k = 0; k < e; k++)
            k in g && (f[k] = b.call(c, g[k], k, a));
        return f
    }
      , Ma = E.some ? function(a, b, c) {
        return E.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = w(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && b.call(c, f[g], g, a))
                return !0;
        return !1
    }
      , Na = E.every ? function(a, b, c) {
        return E.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = w(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && !b.call(c, f[g], g, a))
                return !1;
        return !0
    }
    ;
    function Oa(a, b, c) {
        t: {
            for (var e = a.length, f = w(a) ? a.split("") : a, g = 0; g < e; g++)
                if (g in f && b.call(c, f[g], g, a)) {
                    b = g;
                    break t
                }
            b = -1
        }
        return 0 > b ? null : w(a) ? a.charAt(b) : a[b]
    }
    function G(a, b) {
        return 0 <= Ha(a, b)
    }
    function Pa(a, b) {
        var c = Ha(a, b), e;
        (e = 0 <= c) && E.splice.call(a, c, 1);
        return e
    }
    function Qa(a) {
        return E.concat.apply(E, arguments)
    }
    function Ra(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), e = 0; e < b; e++)
                c[e] = a[e];
            return c
        }
        return []
    }
    function Sa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var e = arguments[c], f;
            if (v(e) || (f = ea(e)) && Object.prototype.hasOwnProperty.call(e, "callee"))
                a.push.apply(a, e);
            else if (f)
                for (var g = a.length, k = e.length, l = 0; l < k; l++)
                    a[g + l] = e[l];
            else
                a.push(e)
        }
    }
    function Ta(a, b, c) {
        return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
    }
    function Ua(a, b, c) {
        b = b || a;
        c = c || function() {
            return ga(k) ? "o" + (k[ha] || (k[ha] = ++ia)) : (typeof k).charAt(0) + k
        }
        ;
        for (var e = {}, f = 0, g = 0; g < a.length; ) {
            var k = a[g++]
              , l = c(k);
            Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0,
            b[f++] = k)
        }
        b.length = f
    }
    function Va(a, b) {
        for (var c = [], e = 0; e < b; e++)
            c[e] = a;
        return c
    }
    function Wa(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var e = arguments[c];
            v(e) ? b.push.apply(b, Wa.apply(null, e)) : b.push(e)
        }
        return b
    }
    ;function $a(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return w(a) && a.match(/\S+/g) || []
    }
    function ab(a, b) {
        return a.classList ? a.classList.contains(b) : G($a(a), b)
    }
    function bb(a, b) {
        a.classList ? a.classList.add(b) : ab(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function cb(a, b) {
        if (a.classList)
            F(b, function(b) {
                bb(a, b)
            });
        else {
            var c = {};
            F($a(a), function(a) {
                c[a] = !0
            });
            F(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var e in c)
                a.className += 0 < a.className.length ? " " + e : e
        }
    }
    function db(a, b) {
        a.classList ? a.classList.remove(b) : ab(a, b) && (a.className = Ka($a(a), function(a) {
            return a != b
        }).join(" "))
    }
    function eb(a, b, c) {
        c ? bb(a, b) : db(a, b)
    }
    ;function fb(a) {
        return function() {
            return a
        }
    }
    fb(!1);
    fb(!0);
    fb(null);
    function gb(a, b) {
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    }
    ;function hb(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    ;function ib(a, b) {
        this.x = t(a) ? a : 0;
        this.y = t(b) ? b : 0
    }
    d = ib.prototype;
    d.clone = function() {
        return new ib(this.x,this.y)
    }
    ;
    d.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    d.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    d.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    d.BS = function(a, b) {
        a instanceof ib ? (this.x += a.x,
        this.y += a.y) : (this.x += a,
        fa(b) && (this.y += b));
        return this
    }
    ;
    d.AS = function(a, b) {
        var c = fa(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    function jb(a, b) {
        this.width = a;
        this.height = b
    }
    d = jb.prototype;
    d.clone = function() {
        return new jb(this.width,this.height)
    }
    ;
    d.vR = function() {
        return Math.max(this.width, this.height)
    }
    ;
    d.ZR = function() {
        return Math.min(this.width, this.height)
    }
    ;
    d.lK = function() {
        return this.width * this.height
    }
    ;
    d.CT = function() {
        return 2 * (this.width + this.height)
    }
    ;
    d.Bt = function() {
        return this.width / this.height
    }
    ;
    d.Za = function() {
        return !this.lK()
    }
    ;
    d.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    d.KQ = function(a) {
        return this.width <= a.width && this.height <= a.height
    }
    ;
    d.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    d.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    d.XJ = function(a, b) {
        var c = fa(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    d.RT = function(a) {
        a = this.Bt() > a.Bt() ? a.width / this.width : a.height / this.height;
        return this.XJ(a)
    }
    ;
    function kb(a, b, c) {
        for (var e in a)
            b.call(c, a[e], e, a)
    }
    function lb(a, b, c) {
        var e = {}, f;
        for (f in a)
            e[f] = b.call(c, a[f], f, a);
        return e
    }
    function mb(a, b, c) {
        for (var e in a)
            if (b.call(c, a[e], e, a))
                return !0;
        return !1
    }
    function nb(a) {
        for (var b in a)
            return b
    }
    function ob(a) {
        var b = [], c = 0, e;
        for (e in a)
            b[c++] = a[e];
        return b
    }
    function pb(a) {
        var b = [], c = 0, e;
        for (e in a)
            b[c++] = e;
        return b
    }
    function qb(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function rb(a, b, c) {
        for (var e in a)
            if (b.call(c, a[e], e, a))
                return e
    }
    function sb(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function tb(a, b, c) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }
    function ub(a, b, c) {
        return b in a ? a[b] : c
    }
    function vb(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    function wb(a) {
        var b = {}, c;
        for (c in a)
            b[a[c]] = c;
        return b
    }
    var xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function yb(a, b) {
        for (var c, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (c in e)
                a[c] = e[c];
            for (var g = 0; g < xb.length; g++)
                c = xb[g],
                Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
        }
    }
    ;var Bb, Cb, Db, Eb, Fb, Gb;
    function Hb() {
        return h.navigator ? h.navigator.userAgent : null
    }
    function Ib() {
        return h.navigator
    }
    Fb = Eb = Db = Cb = Bb = !1;
    var Jb;
    if (Jb = Hb()) {
        var Kb = Ib();
        Bb = 0 == Jb.lastIndexOf("Opera", 0);
        Cb = !Bb && (D(Jb, "MSIE") || D(Jb, "Trident"));
        Eb = (Db = !Bb && D(Jb, "WebKit")) && D(Jb, "Mobile");
        Fb = !Bb && !Db && !Cb && "Gecko" == Kb.product
    }
    var Lb = Bb
      , H = Cb
      , Mb = Fb
      , Nb = Db
      , Ob = Eb
      , Pb = Ib()
      , Qb = Pb && Pb.platform || "";
    Gb = D(Qb, "Mac");
    D(Qb, "Win");
    D(Qb, "Linux");
    Ib() && D(Ib().appVersion || "", "X11");
    var Rb = Hb();
    Rb && D(Rb, "Android");
    Rb && D(Rb, "iPhone");
    Rb && D(Rb, "iPad");
    function Sb() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var Tb;
    t: {
        var Ub = "", Vb;
        if (Lb && h.opera)
            var Wb = h.opera.version
              , Ub = "function" == typeof Wb ? Wb() : Wb;
        else if (Mb ? Vb = /rv\:([^\);]+)(\)|;)/ : H ? Vb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Nb && (Vb = /WebKit\/(\S+)/),
        Vb)
            var Xb = Vb.exec(Hb())
              , Ub = Xb ? Xb[1] : "";
        if (H) {
            var Yb = Sb();
            if (Yb > parseFloat(Ub)) {
                Tb = String(Yb);
                break t
            }
        }
        Tb = Ub
    }
    var Zb = Tb
      , $b = {};
    function I(a) {
        var b;
        if (!(b = $b[a])) {
            var c = 0;
            b = ta(String(Zb)).split(".");
            for (var e = ta(String(a)).split("."), f = Math.max(b.length, e.length), g = 0; 0 == c && g < f; g++) {
                var k = b[g] || ""
                  , l = e[g] || ""
                  , n = RegExp("(\\d*)(\\D*)", "g")
                  , q = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var s = n.exec(k) || ["", "", ""]
                      , r = q.exec(l) || ["", "", ""];
                    if (0 == s[0].length && 0 == r[0].length)
                        break;
                    var c = 0 == s[1].length ? 0 : parseInt(s[1], 10)
                      , u = 0 == r[1].length ? 0 : parseInt(r[1], 10)
                      , c = Ea(c, u) || Ea(0 == s[2].length, 0 == r[2].length) || Ea(s[2], r[2])
                } while (0 == c)
            }
            b = $b[a] = 0 <= c
        }
        return b
    }
    function ac(a) {
        return H && cc >= a
    }
    var dc = h.document
      , cc = dc && H ? Sb() || ("CSS1Compat" == dc.compatMode ? parseInt(Zb, 10) : 5) : void 0;
    var ec = !H || ac(9)
      , fc = !Mb && !H || H && ac(9) || Mb && I("1.9.1")
      , gc = H && !I("9")
      , hc = H || Lb || Nb;
    function ic(a) {
        a = a.className;
        return w(a) && a.match(/\S+/g) || []
    }
    function jc(a, b) {
        for (var c = ic(a), e = Ta(arguments, 1), f = c.length + e.length, g = c, k = 0; k < e.length; k++)
            G(g, e[k]) || g.push(e[k]);
        g = c.join(" ");
        a.className = g;
        return c.length == f
    }
    ;function kc(a, b) {
        return w(b) ? a.getElementById(b) : b
    }
    function lc(a, b) {
        var c = b || document
          , e = null;
        return (e = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : mc(document, "*", a, b)[0]) || null
    }
    function mc(a, b, c, e) {
        a = e || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                e = {};
                for (var f = 0, g = 0, k; k = a[g]; g++)
                    b == k.nodeName && (e[f++] = k);
                e.length = f;
                return e
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            e = {};
            for (g = f = 0; k = a[g]; g++)
                b = k.className,
                "function" == typeof b.split && G(b.split(/\s+/), c) && (e[f++] = k);
            e.length = f;
            return e
        }
        return a
    }
    function nc(a, b) {
        kb(b, function(b, e) {
            "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in oc ? a.setAttribute(oc[e], b) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, b) : a[e] = b
        })
    }
    var oc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function pc(a) {
        a = a.document;
        a = qc(a) ? a.documentElement : a.body;
        return new jb(a.clientWidth,a.clientHeight)
    }
    function rc(a) {
        var b = a.document
          , c = 0;
        if (b) {
            a = pc(a).height;
            var c = b.body
              , e = b.documentElement;
            if (qc(b) && e.scrollHeight)
                c = e.scrollHeight != a ? e.scrollHeight : e.offsetHeight;
            else {
                var b = e.scrollHeight
                  , f = e.offsetHeight;
                e.clientHeight != f && (b = c.scrollHeight,
                f = c.offsetHeight);
                c = b > a ? b > f ? b : f : b < f ? b : f
            }
        }
        return c
    }
    function sc(a) {
        return !Nb && qc(a) ? a.documentElement : a.body || a.documentElement
    }
    function tc(a, b, c, e) {
        function f(c) {
            c && b.appendChild(w(c) ? a.createTextNode(c) : c)
        }
        for (; e < c.length; e++) {
            var g = c[e];
            ea(g) && !uc(g) ? F(vc(g) ? Ra(g) : g, f) : f(g)
        }
    }
    function wc(a, b) {
        var c = a.createElement("div");
        H ? (c.innerHTML = "<br>" + b,
        c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (var e = a.createDocumentFragment(); c.firstChild; )
            e.appendChild(c.firstChild);
        return e
    }
    function qc(a) {
        return "CSS1Compat" == a.compatMode
    }
    function xc(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function yc(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    }
    function zc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    function Ac(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    function Bc(a) {
        return fc && void 0 != a.children ? a.children : Ka(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }
    function Cc(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
    function uc(a) {
        return ga(a) && 0 < a.nodeType
    }
    function Dc(a) {
        return ga(a) && 1 == a.nodeType
    }
    function Ec(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function Fc(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (var e = b; e.parentNode != c; )
            e = e.parentNode;
        return Hc(e, a)
    }
    function Hc(a, b) {
        for (var c = b; c = c.previousSibling; )
            if (c == a)
                return -1;
        return 1
    }
    function Ic(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function Jc(a) {
        return a.contentDocument || a.contentWindow.document
    }
    function Kc(a, b, c, e) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                e) || Kc(a, b, c, e))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    var Lc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Mc = {
        IMG: " ",
        BR: "\n"
    };
    function Nc(a) {
        return Oc(a) && Pc(a)
    }
    function Oc(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }
    function Pc(a) {
        a = a.tabIndex;
        return fa(a) && 0 <= a && 32768 > a
    }
    function Qc(a) {
        if (gc && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Rc(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        gc || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function Rc(a, b, c) {
        if (!(a.nodeName in Lc))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Mc)
                b.push(Mc[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Rc(a, b, c),
                    a = a.nextSibling
    }
    function vc(a) {
        if (a && "number" == typeof a.length) {
            if (ga(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (x(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function Sc(a, b, c) {
        if (!b && !c)
            return null;
        var e = b ? b.toUpperCase() : null;
        return Tc(a, function(a) {
            var b;
            if (b = !e || a.nodeName == e)
                (b = !c) || (b = G(ic(a), c));
            return b
        }, !0)
    }
    function Uc(a, b) {
        return Sc(a, null, b)
    }
    function Tc(a, b, c, e) {
        c || (a = a.parentNode);
        c = null == e;
        for (var f = 0; a && (c || f <= e); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            f++
        }
        return null
    }
    (function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    )(function() {
        var a = window
          , b = Mb && Ob;
        return t(a.devicePixelRatio) && !b ? a.devicePixelRatio : a.matchMedia ? Vc(0.75) || Vc(1.5) || Vc(2) || Vc(3) || 1 : 1
    });
    function Vc(a) {
        return window.matchMedia("(-webkit-min-device-pixel-ratio: " + a + "),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + a + "dppx)").matches ? a : 0
    }
    function Wc(a) {
        this.b = a || h.document || document
    }
    d = Wc.prototype;
    d.dR = function(a) {
        return a ? new Wc(Ic(a)) : qa || (qa = new Wc)
    }
    ;
    d.VT = function(a) {
        this.b = a
    }
    ;
    d.Ar = function() {
        return this.b
    }
    ;
    d.pK = function(a) {
        return kc(this.b, a)
    }
    ;
    d.RR = function(a) {
        return kc(this.b, a)
    }
    ;
    d.aL = Wc.prototype.pK;
    d.qK = function(a, b, c) {
        return mc(this.b, a, b, c)
    }
    ;
    d.gR = function(a, b) {
        var c = b || this.b
          , e = c || document;
        return e.querySelectorAll && e.querySelector ? e.querySelectorAll("." + a) : mc(document, "*", a, c)
    }
    ;
    d.fR = function(a, b) {
        return lc(a, b || this.b)
    }
    ;
    d.SR = function(a, b) {
        return lc(a, b || this.b)
    }
    ;
    d.bL = Wc.prototype.qK;
    d.fU = nc;
    d.gS = function(a) {
        a = a || this.Kt();
        return pc(a || window)
    }
    ;
    d.aR = function() {
        return rc(this.Kt())
    }
    ;
    d.nK = function(a, b, c) {
        var e = this.b
          , f = arguments
          , g = f[0]
          , k = f[1];
        if (!ec && k && (k.name || k.type)) {
            g = ["<", g];
            k.name && g.push(' name="', wa(k.name), '"');
            if (k.type) {
                g.push(' type="', wa(k.type), '"');
                var l = {};
                yb(l, k);
                delete l.type;
                k = l
            }
            g.push(">");
            g = g.join("")
        }
        g = e.createElement(g);
        k && (w(k) ? g.className = k : v(k) ? jc.apply(null, [g].concat(k)) : nc(g, k));
        2 < f.length && tc(e, g, f, 2);
        return g
    }
    ;
    d.cL = Wc.prototype.nK;
    d.createElement = function(a) {
        return this.b.createElement(a)
    }
    ;
    d.rS = function(a) {
        return this.b.createTextNode(String(a))
    }
    ;
    d.vQ = function(a, b, c) {
        var e = this.b
          , f = !!c;
        c = ["<tr>"];
        for (var g = 0; g < b; g++)
            c.push(f ? "<td>&nbsp;</td>" : "<td></td>");
        c.push("</tr>");
        c = c.join("");
        b = ["<table>"];
        for (g = 0; g < a; g++)
            b.push(c);
        b.push("</table>");
        a = e.createElement("DIV");
        a.innerHTML = b.join("");
        return a.removeChild(a.firstChild)
    }
    ;
    d.SS = function(a) {
        return wc(this.b, a)
    }
    ;
    d.$S = function() {
        return qc(this.b)
    }
    ;
    d.Kt = function() {
        var a = this.b;
        return a.parentWindow || a.defaultView
    }
    ;
    d.cR = function() {
        return sc(this.b)
    }
    ;
    d.bR = function() {
        var a = this.b
          , b = sc(a)
          , a = a.parentWindow || a.defaultView;
        return H && I("10") && a.pageYOffset != b.scrollTop ? new ib(b.scrollLeft,b.scrollTop) : new ib(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    d.MQ = function(a) {
        var b;
        t: {
            a = a || this.b;
            try {
                b = a && a.activeElement;
                break t
            } catch (c) {}
            b = null
        }
        return b
    }
    ;
    d.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    d.append = function(a, b) {
        tc(Ic(a), a, arguments, 1)
    }
    ;
    d.qS = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    d.KT = xc;
    d.YS = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    d.XS = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    ;
    d.WS = yc;
    d.vS = zc;
    d.NT = Ac;
    d.LQ = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode)
                return a.removeNode(!1);
            for (; b = a.firstChild; )
                c.insertBefore(b, a);
            return zc(a)
        }
    }
    ;
    d.sS = Bc;
    d.jR = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : Cc(a.firstChild, !0)
    }
    ;
    d.sR = function(a) {
        return void 0 != a.lastElementChild ? a.lastElementChild : Cc(a.lastChild, !1)
    }
    ;
    d.xR = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : Cc(a.nextSibling, !0)
    }
    ;
    d.MR = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : Cc(a.previousSibling, !1)
    }
    ;
    d.yR = function(a) {
        if (!a)
            return null;
        if (a.firstChild)
            return a.firstChild;
        for (; a && !a.nextSibling; )
            a = a.parentNode;
        return a ? a.nextSibling : null
    }
    ;
    d.NR = function(a) {
        if (!a)
            return null;
        if (!a.previousSibling)
            return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild; )
            a = a.lastChild;
        return a
    }
    ;
    d.gT = uc;
    d.tS = Dc;
    d.nT = function(a) {
        return ga(a) && a.window == a
    }
    ;
    d.KR = function(a) {
        if (hc && !(H && I("9") && !I("10") && h.SVGElement && a instanceof h.SVGElement))
            return a.parentElement;
        a = a.parentNode;
        return Dc(a) ? a : null
    }
    ;
    d.contains = Ec;
    d.tQ = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (H && !ac(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = 1 == a.nodeType
              , e = 1 == b.nodeType;
            if (c && e)
                return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode
              , g = b.parentNode;
            return f == g ? Hc(a, b) : !c && Ec(f, b) ? -1 * Fc(a, b) : !e && Ec(g, a) ? Fc(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (e ? b.sourceIndex : g.sourceIndex)
        }
        e = Ic(a);
        c = e.createRange();
        c.selectNode(a);
        c.collapse(!0);
        e = e.createRange();
        e.selectNode(b);
        e.collapse(!0);
        return c.compareBoundaryPoints(h.Range.START_TO_END, e)
    }
    ;
    d.DQ = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var e = []
          , f = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], k = arguments[b]; k; )
                g.unshift(k),
                k = k.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var k = e[0][b], l = 1; l < c; l++)
                if (k != e[l][b])
                    return g;
            g = k
        }
        return g
    }
    ;
    d.FR = Ic;
    d.kR = Jc;
    d.lR = function(a) {
        var b;
        (b = a.contentWindow) || (b = (a = Jc(a)) ? a.parentWindow || a.defaultView : window);
        return b
    }
    ;
    d.mU = function(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            xc(a);
            var c = Ic(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    ;
    d.ER = function(a) {
        if ("outerHTML"in a)
            return a.outerHTML;
        var b = Ic(a).createElement("div");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    }
    ;
    d.EQ = function(a, b) {
        var c = [];
        return Kc(a, b, c, !0) ? c[0] : void 0
    }
    ;
    d.FQ = function(a, b) {
        var c = [];
        Kc(a, b, c, !1);
        return c
    }
    ;
    d.bT = Nc;
    d.XT = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
    }
    ;
    d.uS = function(a) {
        var b;
        (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Oc(a) || Pc(a)) : Nc(a)) && H ? (a = x(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        },
        a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    }
    ;
    d.dS = Qc;
    d.AR = function(a) {
        return Qc(a).length
    }
    ;
    d.CR = function(a, b) {
        for (var c = b || Ic(a).body, e = []; a && a != c; ) {
            for (var f = a; f = f.previousSibling; )
                e.unshift(Qc(f));
            a = a.parentNode
        }
        return e.join("").replace(/^[\s\xa0]+/, "").replace(/ +/g, " ").length
    }
    ;
    d.zR = function(a, b, c) {
        a = [a];
        for (var e = 0, f = null; 0 < a.length && e < b; )
            if (f = a.pop(),
            !(f.nodeName in Lc))
                if (3 == f.nodeType)
                    var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ")
                      , e = e + g.length;
                else if (f.nodeName in Mc)
                    e += Mc[f.nodeName].length;
                else
                    for (g = f.childNodes.length - 1; 0 <= g; g--)
                        a.push(f.childNodes[g]);
        ga(c) && (c.IT = f ? f.nodeValue.length + b - e - 1 : 0,
        c.node = f);
        return f
    }
    ;
    d.hT = vc;
    d.RQ = Sc;
    d.QQ = Uc;
    d.PQ = Tc;
    function Xc(a, b, c) {
        w(b) ? Yc(a, c, b) : kb(b, la(Yc, a))
    }
    function Yc(a, b, c) {
        var e;
        t: if (e = Fa(c),
        void 0 === a.style[e] && (c = (Nb ? "Webkit" : Mb ? "Moz" : H ? "ms" : Lb ? "O" : null) + Ga(c),
        void 0 !== a.style[c])) {
            e = c;
            break t
        }
        e && (a.style[e] = b)
    }
    ;function Zc(a, b) {
        this.h = b || {};
        this.b = a && (a.$inject || a.inject) || []
    }
    B(Zc, ma);
    Zc.prototype.R = function() {
        this.b = this.h = null;
        Zc.A.R.call(this)
    }
    ;
    function $c(a, b, c) {
        if (!(a instanceof Function))
            throw Error("registerCallable called with a non-function, did you mean to call register?");
        Zc.call(this, a, c);
        this.g = a
    }
    B($c, Zc);
    $c.prototype.get = function(a) {
        return this.g.apply(null, a)
    }
    ;
    $c.prototype.R = function() {
        this.g = null;
        $c.A.R.call(this)
    }
    ;
    function ad(a) {
        for (var b = Array.prototype.slice.call(arguments), c; !c && b.length; )
            c = b.shift();
        for (var e = b.length, f, g = 0; g < e; ++g)
            f = b[g],
            f.id && !c.id && (c.id = f.id),
            cb(c, $a(f));
        return c
    }
    ;function bd(a, b, c) {
        if (!(a instanceof Function))
            throw "registerConstructor called with a non-function, did you mean to call register?";
        Zc.call(this, a, c);
        this.k = a
    }
    B(bd, Zc);
    bd.prototype.l = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            if (a.hasOwnProperty(f))
                a = a[f];
            else
                return !1
        }
        return a
    }
    ;
    bd.prototype.get = function(a) {
        var b = this.k;
        switch (a.length) {
        case 0:
            return new b;
        case 1:
            return new b(a[0]);
        case 2:
            return new b(a[0],a[1]);
        case 3:
            return new b(a[0],a[1],a[2]);
        case 4:
            return new b(a[0],a[1],a[2],a[3]);
        case 5:
            return new b(a[0],a[1],a[2],a[3],a[4]);
        case 6:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5]);
        case 7:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);
        case 8:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);
        case 9:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);
        case 10:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]);
        case 11:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10]);
        case 12:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
        case 13:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12]);
        case 14:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13]);
        case 15:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14]);
        default:
            var c = function() {};
            c.prototype = b.prototype;
            c = new c;
            a = b.apply(c, a);
            return Object(a) === a ? a : c
        }
    }
    ;
    bd.prototype.R = function() {
        this.k = null;
        bd.A.R.call(this)
    }
    ;
    function cd(a, b, c, e, f) {
        if (!(a instanceof Function))
            throw "registerComponent called with a non-function, did you mean to call register?";
        this.g = b;
        (this.j = e) && b.ha(e, void 0, f);
        bd.call(this, a, b, c)
    }
    B(cd, bd);
    cd.prototype.get = function(a) {
        a = cd.A.get.call(this, a);
        a.injector = this.g;
        a.qa();
        if (this.j) {
            var b = this.g.get(this.j);
            b instanceof Function ? a.K = ad(a.K, b()) : a.template = b
        }
        a.OB();
        a.createElement();
        return a
    }
    ;
    cd.prototype.R = function() {
        this.g = null;
        cd.A.R.call(this)
    }
    ;
    function dd(a, b, c) {
        a.h && a.h(b, c)
    }
    ;var ed = {
        fL: "branding",
        jL: "channel",
        kL: "channel_paid_info",
        hQ: "video_like_value",
        fQ: "video"
    }
      , fd = {
        name: "ALTERNATE_SEARCH_POSITION",
        id: 942E3
    }
      , gd = {
        name: "EVENT_SOUNDS_LAUNCH",
        id: 927906
    }
      , hd = {
        name: "LONG_POST_PLAY",
        id: 912522
    }
      , id = {
        name: "PAID_SCOPE",
        id: 938801
    }
      , jd = {
        name: "PREVIEW_NEXT_VIDEO",
        id: 927901
    }
      , kd = {
        name: "USE_CORS_LAUNCH",
        id: 938804
    }
      , ld = {
        name: "USE_INNERTUBE_LAUNCH",
        id: 943402
    }
      , md = {
        name: "USE_INNER_TUBE_WATCH_NEXT",
        id: 943400
    }
      , nd = {
        b: fd,
        g: {
            name: "EVENT_SOUNDS_HOLDBACK",
            id: 927905
        },
        h: gd,
        j: hd,
        k: {
            name: "LONG_POST_PLAY_HOLDBACK",
            id: 912523
        },
        l: id,
        o: jd,
        p: kd,
        w: ld,
        C: md,
        I: {
            name: "VIDEO_VERIFICATION_TOKENS",
            id: 932401
        }
    }
      , od = "AE AR AU BE BR CA CL CO CZ DE EG ES FR GB HK HU ID IE IL IN IT JO JP KR MA MX MY NL NZ PE PH PL RU SA SE SG TW ZA".split(" ")
      , pd = {
        settings: "Sign In & Settings"
    }
      , qd = {
        help: "request-view-help"
    }
      , rd = ["\u309b", "\u309c", "\u5c0f"]
      , sd = {
        "\u3042": ["\u3044", "\u3046", "\u3048", "\u304a"],
        "\u304b": ["\u304d", "\u304f", "\u3051", "\u3053"],
        "\u3055": ["\u3057", "\u3059", "\u305b", "\u305d"],
        "\u305f": ["\u3061", "\u3064", "\u3066", "\u3068"],
        "\u306a": ["\u306b", "\u306c", "\u306d", "\u306e"],
        "\u306f": ["\u3072", "\u3075", "\u3078", "\u307b"],
        "\u307e": ["\u307f", "\u3080", "\u3081", "\u3082"],
        "\u3084": ["\u3086", "\u3088"],
        "\u3089": ["\u308a", "\u308b", "\u308c", "\u308d"],
        "\u308f": ["\u3092", "\u3093"],
        "\u309b": ["\u309c", "\u5c0f", "\u30fc"]
    }
      , td = {
        "\u3131": ["\u3132"],
        "\u3137": ["\u3138"],
        "\u3142": ["\u3143"],
        "\u3145": ["\u3146"],
        "\u3148": ["\u3149"]
    }
      , ud = {
        "\u3131": "\u1100",
        "\u3132": "\u1101",
        "\u3134": "\u1102",
        "\u3137": "\u1103",
        "\u3138": "\u1104",
        "\u314f": "\u1161",
        "\u3153": "\u1165",
        "\u3157": "\u1169",
        "\u3139": "\u1105",
        "\u3141": "\u1106",
        "\u3142": "\u1107",
        "\u3143": "\u1108",
        "\u3145": "\u1109",
        "\u3151": "\u1163",
        "\u3155": "\u1167",
        "\u315b": "\u116d",
        "\u3146": "\u110a",
        "\u3147": "\u110b",
        "\u3148": "\u110c",
        "\u3149": "\u110d",
        "\u314a": "\u110e",
        "\u3161": "\u1173",
        "\u3163": "\u1175",
        "\u315c": "\u116e",
        "\u314b": "\u110f",
        "\u314c": "\u1110",
        "\u314d": "\u1111",
        "\u314e": "\u1112",
        "\u3150": "\u1162",
        "\u3154": "\u1166",
        "\u3160": "\u1172",
        "\u3152": "\u1164",
        "\u3156": "\u1168"
    }
      , vd = {
        "\u5c0f": {
            "\u3042": "\u3041",
            "\u3041": "\u3042",
            "\u3044": "\u3043",
            "\u3043": "\u3044",
            "\u3048": "\u3047",
            "\u3047": "\u3048",
            "\u304a": "\u3049",
            "\u3049": "\u304a",
            "\u3084": "\u3083",
            "\u3083": "\u3084",
            "\u3086": "\u3085",
            "\u3085": "\u3086",
            "\u3088": "\u3087",
            "\u3087": "\u3088",
            "\u308f": "\u308e",
            "\u308e": "\u308f",
            "\u304b": "\u3095",
            "\u3095": "\u304b",
            "\u304c": "\u3095",
            "\u3051": "\u3096",
            "\u3096": "\u3051",
            "\u3052": "\u3096",
            "\u3064": "\u3063",
            "\u3063": "\u3064",
            "\u3065": "\u3063",
            "\u3046": "\u3045",
            "\u3045": "\u3046",
            "\u3094": "\u3045"
        },
        "\u309b": {
            "\u304d": "\u304e",
            "\u304e": "\u304d",
            "\u304f": "\u3050",
            "\u3050": "\u304f",
            "\u3053": "\u3054",
            "\u3054": "\u3053",
            "\u3055": "\u3056",
            "\u3056": "\u3055",
            "\u3057": "\u3058",
            "\u3058": "\u3057",
            "\u3059": "\u305a",
            "\u305a": "\u3059",
            "\u305b": "\u305c",
            "\u305c": "\u305b",
            "\u305d": "\u305e",
            "\u305e": "\u305d",
            "\u305f": "\u3060",
            "\u3060": "\u305f",
            "\u3061": "\u3062",
            "\u3062": "\u3061",
            "\u3066": "\u3067",
            "\u3067": "\u3066",
            "\u3068": "\u3069",
            "\u3069": "\u3068",
            "\u304b": "\u304c",
            "\u304c": "\u304b",
            "\u3095": "\u304c",
            "\u3051": "\u3052",
            "\u3052": "\u3051",
            "\u3096": "\u3052",
            "\u3064": "\u3065",
            "\u3065": "\u3064",
            "\u3063": "\u3065",
            "\u3046": "\u3094",
            "\u3045": "\u3094",
            "\u3094": "\u3046",
            "\u3071": "\u3070",
            "\u3070": "\u306f",
            "\u306f": "\u3070",
            "\u3074": "\u3073",
            "\u3073": "\u3072",
            "\u3072": "\u3073",
            "\u3077": "\u3076",
            "\u3076": "\u3075",
            "\u3075": "\u3076",
            "\u307a": "\u3079",
            "\u3079": "\u3078",
            "\u3078": "\u3079",
            "\u307d": "\u307c",
            "\u307c": "\u307b",
            "\u307b": "\u307c"
        },
        "\u309c": {
            "\u306f": "\u3071",
            "\u3071": "\u306f",
            "\u3070": "\u3071",
            "\u3072": "\u3074",
            "\u3074": "\u3072",
            "\u3073": "\u3074",
            "\u3075": "\u3077",
            "\u3077": "\u3075",
            "\u3076": "\u3077",
            "\u3078": "\u307a",
            "\u307a": "\u3078",
            "\u3079": "\u307a",
            "\u307b": "\u307d",
            "\u307d": "\u307b",
            "\u307c": "\u307d"
        }
    }
      , wd = /lang-\w+/
      , xd = {
        lL: "zh_CN",
        DM: "zh_HK",
        JAPAN: "ja_JP",
        GP: "ko_KR",
        hK: "nb_NO",
        VP: "ru_RU",
        bQ: "zh_TW",
        cQ: "uk_UA"
    }
      , yd = "af_ZA am_ET bg_BG bn_BD ca_ES cs_CZ da_DK de_DE el_GR en_US en_GB es_ES es_MX et_EE eu_ES fa_IR fi_FI fil_PH fr_FR fr_CA gl_ES gu_IN hi_IN hr_HR hu_HU id_ID is_IS it_IT ja_JP kn_IN ko_KR lt_LT lv_LV ml_IN mr_IN ms_MY nb_NO nl_NL pl_PL pt_PT pt_BR ro_RO ru_RU sk_SK sl_SI sr_RS sv_SE sw_TZ ta_IN te_IN th_TH tr_TR uk_UA ur_PK vi_VN zh_CN zh_HK zh_TW zu_ZA".split(" ")
      , zd = {
        hK: ["no_NO"]
    };
    ba("yt.tv.constants.SmartglassPlaybackStatus", {
        CLOSED: 0,
        iL: 1,
        $P: 2,
        Ft: 3,
        Et: 4
    }, void 0);
    ba("yt.tv.constants.SmartglassPlaybackRate", {
        Et: 0,
        Ft: 1
    }, void 0);
    ba("yt.tv.constants.PlayerState", {
        gL: 3,
        qL: 0,
        ERROR: -1E3,
        Et: 2,
        Ft: 1,
        dQ: -1,
        gQ: 5
    }, void 0);
    var Ad = {
        EN: "abcdefghijklmnopqrstuvwxyz_",
        KO: "\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314a\u314b\u314c\u314d\u314e\n\u314f\u3151\u3153\u3155\u3157\u315b\u315c\u3160\u3161\u3163\u3150\u3152\u3154\u31561234567890_",
        RU: "\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f_",
        JP: "\u3042\u304b\u3055\u305f\u306a\u306f\u307e\u3084\u3089\u308f\u309b",
        NUMBERS: "1234567890"
    }
      , Bd = {
        CM: "HL",
        RP: "RC",
        aQ: "SU",
        iQ: "WL"
    }
      , Cd = {
        mqdefault: [0, 1280],
        hqdefault: [1281, Number.MAX_VALUE]
    }
      , Dd = {
        "channel.banner.tv.low.image.url": [0, 854],
        "channel.banner.tv.medium.image.url": [855, 1280],
        "channel.banner.tv.high.image.url": [1281, Number.MAX_VALUE]
    }
      , Gd = {
        ye: "icon-player-closedcaptions",
        mL: "disabled-button",
        Oe: "icon-dislike",
        nL: "icon-dislike-checked",
        cg: "icon-player-ff",
        dg: "icon-flag",
        Pe: "icon-like",
        HP: "icon-like-checked",
        vA: "icon-player-more",
        uA: "icon-player-less",
        NEXT: "icon-player-next",
        PAUSE: "icon-player-pause",
        PLAY: "icon-player-play",
        OP: "play-button",
        PREVIOUS: "icon-player-prev",
        REWIND: "icon-player-rew",
        Ph: "icon-search",
        gg: "icon-subscribe",
        eQ: "icon-unsubscribe"
    }
      , Hd = {
        ye: "transport-closed-captions-button",
        xe: "player-controls",
        Oe: "transport-dislike-button",
        cg: "transport-ff-button",
        dg: "transport-flag-button",
        Pe: "transport-like-button",
        yk: "more-actions-button_1",
        tA: "more-actions-button_2",
        NEXT: "next-button",
        NP: "player-controls",
        vk: "transport-playpause-button",
        PREVIOUS: "previous",
        bp: "progress-bar",
        REWIND: "transport-rw-button",
        Ph: "transport-search-button",
        dC: "transport-spacer",
        gg: "transport-subscribe-button",
        PLAY: "play",
        PAUSE: "pause"
    }
      , Id = {
        FRIEND_ADDED: "[[{{username}} added a friend|The message that describes user activity. Displayed when a user has added a friend.]]",
        USER_SUBSCRIPTION_ADDED: "[[{{username}} added a subscription|The message that describes user activity. Displayed when a user subscribed to a channel.]]",
        VIDEO_ADDED_TO_LEGO: "[[{{username}} added a video|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
        VIDEO_ADDED_TO_PLAYLIST: "[[{{username}} added a video to a playlist|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
        VIDEO_COMMENTED: "[[{{username}} commented a video|The message that describes user activity. Displayed when a user has commented on a video.]]",
        VIDEO_FAVORITED: "[[{{username}} favorited a video|The message that describes user activity. Displayed when a user has favorited a video.]]",
        VIDEO_RATED: "[[{{username}} rated a video|The message that describes user activity. Displayed when a user has rated a video.]]",
        VIDEO_RECOMMENDED: "[[video recommended|The message that describes that a video has been recommended.]]",
        VIDEO_SHARED: "[[{{username}} shared a video|The message that describes user activity. Displayed when a user has shared a video.]]",
        VIDEO_UPLOADED: "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    };
    function Jd(a, b) {
        for (var c = b.length, e = 0; e < c; ++e) {
            var f = a
              , g = b[e];
            Kd(f, g);
            Ld(f, g)
        }
    }
    function Kd(a, b) {
        Md(b);
        a.prototype.__defineGetter__(b, function() {
            return this[b + "_"]
        })
    }
    function Ld(a, b) {
        Md(b);
        var c = b + "_";
        a.prototype.__defineSetter__(b, function(a) {
            if (a !== this[c]) {
                var f = this[c];
                this[c] = a;
                this.T && x(this.T) && this.T(b + ":changed", a, f)
            }
        })
    }
    function Md(a) {
        if (!a.match(/^[a-zA-Z]+$/))
            throw Error("Invalid property name");
    }
    ;function Nd(a, b, c, e) {
        a = Ic(a).createEvent("Event");
        a.initEvent(b, c, !0);
        a.detail = e;
        return a
    }
    function Od(a, b, c, e, f) {
        a = Nd(a, b, e);
        a.which = c;
        a.charCode = c;
        a.keyCode = c;
        a.b = f;
        return a
    }
    function J(a, b, c) {
        a.stopPropagation();
        c && a.stopImmediatePropagation && a.stopImmediatePropagation();
        b || a.preventDefault()
    }
    ;var Pd = "StopIteration"in h ? h.StopIteration : Error("StopIteration");
    function Qd() {}
    Qd.prototype.next = function() {
        throw Pd;
    }
    ;
    Qd.prototype.Eb = function() {
        return this
    }
    ;
    function Rd(a) {
        if (a instanceof Qd)
            return a;
        if ("function" == typeof a.Eb)
            return a.Eb(!1);
        if (ea(a)) {
            var b = 0
              , c = new Qd;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw Pd;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function Sd(a, b, c) {
        if (ea(a))
            try {
                F(a, b, c)
            } catch (e) {
                if (e !== Pd)
                    throw e;
            }
        else {
            a = Rd(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (f) {
                if (f !== Pd)
                    throw f;
            }
        }
    }
    function Td(a) {
        if (ea(a))
            return Ra(a);
        a = Rd(a);
        var b = [];
        Sd(a, function(a) {
            b.push(a)
        });
        return b
    }
    ;function Ud(a, b) {
        this.g = {};
        this.b = [];
        this.j = this.h = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var e = 0; e < c; e += 2)
                this.Ub(arguments[e], arguments[e + 1])
        } else
            a && this.kw(a)
    }
    d = Ud.prototype;
    d.ma = function() {
        return this.h
    }
    ;
    d.ua = function() {
        this.ne();
        for (var a = [], b = 0; b < this.b.length; b++)
            a.push(this.g[this.b[b]]);
        return a
    }
    ;
    d.Jb = function() {
        this.ne();
        return this.b.concat()
    }
    ;
    d.Ih = function(a) {
        return Vd(this.g, a)
    }
    ;
    d.wg = function(a) {
        for (var b = 0; b < this.b.length; b++) {
            var c = this.b[b];
            if (Vd(this.g, c) && this.g[c] == a)
                return !0
        }
        return !1
    }
    ;
    d.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.h != a.ma())
            return !1;
        var c = b || Wd;
        this.ne();
        for (var e, f = 0; e = this.b[f]; f++)
            if (!c(this.get(e), a.get(e)))
                return !1;
        return !0
    }
    ;
    function Wd(a, b) {
        return a === b
    }
    d.Za = function() {
        return 0 == this.h
    }
    ;
    d.clear = function() {
        this.g = {};
        this.j = this.h = this.b.length = 0
    }
    ;
    d.remove = function(a) {
        return Vd(this.g, a) ? (delete this.g[a],
        this.h--,
        this.j++,
        this.b.length > 2 * this.h && this.ne(),
        !0) : !1
    }
    ;
    d.ne = function() {
        if (this.h != this.b.length) {
            for (var a = 0, b = 0; a < this.b.length; ) {
                var c = this.b[a];
                Vd(this.g, c) && (this.b[b++] = c);
                a++
            }
            this.b.length = b
        }
        if (this.h != this.b.length) {
            for (var e = {}, b = a = 0; a < this.b.length; )
                c = this.b[a],
                Vd(e, c) || (this.b[b++] = c,
                e[c] = 1),
                a++;
            this.b.length = b
        }
    }
    ;
    d.get = function(a, b) {
        return Vd(this.g, a) ? this.g[a] : b
    }
    ;
    d.Ub = function(a, b) {
        Vd(this.g, a) || (this.h++,
        this.b.push(a),
        this.j++);
        this.g[a] = b
    }
    ;
    d.kw = function(a) {
        var b;
        a instanceof Ud ? (b = a.Jb(),
        a = a.ua()) : (b = pb(a),
        a = ob(a));
        for (var c = 0; c < b.length; c++)
            this.Ub(b[c], a[c])
    }
    ;
    d.clone = function() {
        return new Ud(this)
    }
    ;
    d.CU = function() {
        for (var a = new Ud, b = 0; b < this.b.length; b++) {
            var c = this.b[b];
            a.Ub(this.g[c], c)
        }
        return a
    }
    ;
    d.AU = function() {
        this.ne();
        for (var a = {}, b = 0; b < this.b.length; b++) {
            var c = this.b[b];
            a[c] = this.g[c]
        }
        return a
    }
    ;
    d.pR = function() {
        return this.Eb(!0)
    }
    ;
    d.fS = function() {
        return this.Eb(!1)
    }
    ;
    d.Eb = function(a) {
        this.ne();
        var b = 0
          , c = this.b
          , e = this.g
          , f = this.j
          , g = this
          , k = new Qd;
        k.next = function() {
            for (; ; ) {
                if (f != g.j)
                    throw Error("The map has changed since the iterator was created");
                if (b >= c.length)
                    throw Pd;
                var k = c[b++];
                return a ? k : e[k]
            }
        }
        ;
        return k
    }
    ;
    function Vd(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function Xd(a, b) {
        this.h = a || null;
        this.j = !!b;
        this.g = new Ud;
        this.b = new Yd("",void 0);
        this.b.next = this.b.b = this.b
    }
    d = Xd.prototype;
    d.wr = function(a) {
        (a = this.g.get(a)) && this.j && (a.remove(),
        this.Vq(a));
        return a
    }
    ;
    d.get = function(a, b) {
        var c = this.wr(a);
        return c ? c.value : b
    }
    ;
    d.BT = function(a, b) {
        var c = this.g.get(a);
        return c ? c.value : b
    }
    ;
    d.Ef = function(a, b) {
        var c = this.wr(a);
        c ? c.value = b : (c = new Yd(a,b),
        this.g.Ub(a, c),
        this.Vq(c))
    }
    ;
    d.zT = function() {
        return this.b.next.value
    }
    ;
    d.AT = function() {
        return this.b.b.value
    }
    ;
    d.shift = function() {
        return this.Lq(this.b.next)
    }
    ;
    d.LS = function() {
        return this.Lq(this.b.b)
    }
    ;
    d.remove = function(a) {
        return (a = this.g.get(a)) ? (this.Mj(a),
        !0) : !1
    }
    ;
    d.Mj = function(a) {
        a.remove();
        this.g.remove(a.key)
    }
    ;
    d.ma = function() {
        return this.g.ma()
    }
    ;
    d.Za = function() {
        return this.g.Za()
    }
    ;
    d.bU = function(a) {
        this.h = a || null;
        null != this.h && this.fk(this.h)
    }
    ;
    d.Jb = function() {
        return this.map(function(a, b) {
            return b
        })
    }
    ;
    d.ua = function() {
        return this.map(function(a) {
            return a
        })
    }
    ;
    d.contains = function(a) {
        return this.some(function(b) {
            return b == a
        })
    }
    ;
    d.KS = function(a) {
        return this.g.Ih(a)
    }
    ;
    d.clear = function() {
        this.fk(0)
    }
    ;
    d.forEach = function(a, b) {
        for (var c = this.b.next; c != this.b; c = c.next)
            a.call(b, c.value, c.key, this)
    }
    ;
    d.map = function(a, b) {
        for (var c = [], e = this.b.next; e != this.b; e = e.next)
            c.push(a.call(b, e.value, e.key, this));
        return c
    }
    ;
    d.some = function(a, b) {
        for (var c = this.b.next; c != this.b; c = c.next)
            if (a.call(b, c.value, c.key, this))
                return !0;
        return !1
    }
    ;
    d.every = function(a, b) {
        for (var c = this.b.next; c != this.b; c = c.next)
            if (!a.call(b, c.value, c.key, this))
                return !1;
        return !0
    }
    ;
    d.Vq = function(a) {
        this.j ? (a.next = this.b.next,
        a.b = this.b,
        this.b.next = a,
        a.next.b = a) : (a.b = this.b.b,
        a.next = this.b,
        this.b.b = a,
        a.b.next = a);
        null != this.h && this.fk(this.h)
    }
    ;
    d.fk = function(a) {
        for (var b = this.g.ma(); b > a; b--)
            this.Mj(this.j ? this.b.b : this.b.next)
    }
    ;
    d.Lq = function(a) {
        this.b != a && this.Mj(a);
        return a.value
    }
    ;
    function Yd(a, b) {
        this.key = a;
        this.value = b
    }
    Yd.prototype.remove = function() {
        this.b.next = this.next;
        this.next.b = this.b;
        delete this.b;
        delete this.next
    }
    ;
    function K() {
        this.$a = null;
        this.hf = 0;
        this.et()
    }
    B(K, ma);
    K.prototype.et = function() {
        this.$a = new Xd
    }
    ;
    K.prototype.B = function(a, b) {
        var c = this.$a
          , e = String(this.hf++);
        c.Ef(e, {
            FH: a,
            ad: b
        });
        return function() {
            c.remove(e)
        }
    }
    ;
    K.prototype.T = function(a, b) {
        if (void 0 !== this.$a)
            for (var c = Array.prototype.slice.call(arguments, 1), e = this.$a.ua(), f = 0, g = e.length; f < g; ++f) {
                var k = e[f];
                k.FH === a && k.ad.apply(this, c)
            }
    }
    ;
    K.prototype.R = function() {
        this.$a && this.$a.clear();
        K.A.R.call(this)
    }
    ;
    function Zd() {
        K.call(this);
        this.Wa = !1;
        this.K = null
    }
    B(Zd, K);
    d = Zd.prototype;
    d.et = function() {}
    ;
    d.B = function(a, b) {
        if (this.K)
            return this.K.addEventListener(a, b, !1),
            y(this.K.removeEventListener, this.K, a, b, !1);
        throw Error("Attempt to register event on " + a + " before DOM element is available.");
    }
    ;
    d.T = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        this.Ht(a, !1, c)
    }
    ;
    d.L = function(a, b) {
        this.Ht(a, !0, b)
    }
    ;
    d.Ht = function(a, b, c) {
        this.Wa = this.Wa || !!this.K;
        if (this.K)
            a = Nd(this.K, a, b, c),
            this.K.dispatchEvent(a);
        else {
            if (this.Wa)
                throw Error("Attempt to dispatch " + a + " without DOM element.");
            if (!D(a, ":changed"))
                throw Error("Attempt to dispatch " + a + " before DOM element is available.");
        }
    }
    ;
    d.R = function() {
        zc(this.K);
        Zd.A.R.call(this)
    }
    ;
    function $d() {
        Zd.call(this);
        this.I = []
    }
    B($d, Zd);
    d = $d.prototype;
    d.B = function(a, b) {
        var c = $d.A.B.call(this, a, b);
        this.I.push({
            eb: this,
            event: a,
            zl: c
        });
        return c
    }
    ;
    d.ca = function(a, b, c) {
        this.I.push({
            eb: a,
            event: b,
            zl: a.B(b, c)
        })
    }
    ;
    d.xc = function() {
        for (var a = 0, b = this.I.length; a < b; ++a)
            this.I[a].zl();
        this.I.length = 0
    }
    ;
    d.fg = function(a, b) {
        for (var c = [], e = 0, f = this.I.length; e < f; ++e) {
            var g = this.I[e];
            g.eb !== a || null != b && b != g.event ? c.push(g) : g.zl()
        }
        this.I.length = 0;
        this.I = c
    }
    ;
    d.R = function() {
        this.xc();
        $d.A.R.call(this)
    }
    ;
    function ae(a, b, c) {
        Zc.call(this, a, c);
        this.g = a
    }
    B(ae, Zc);
    ae.prototype.get = function() {
        return this.g
    }
    ;
    ae.prototype.R = function() {
        na(this.g);
        this.g = null;
        ae.A.R.call(this)
    }
    ;
    function be(a, b, c) {
        $c.call(this, a, b, c);
        this.eb = null
    }
    B(be, $c);
    be.prototype.get = function(a) {
        this.eb || (this.eb = be.A.get.call(this, a));
        return this.eb
    }
    ;
    be.prototype.R = function() {
        na(this.eb);
        this.eb = null;
        be.A.R.call(this)
    }
    ;
    function ce(a, b, c) {
        if (!(a instanceof Function))
            throw Error("registerSingleton called with a non-function, did you mean to call register?");
        bd.call(this, a, b, c);
        this.eb = null
    }
    B(ce, bd);
    ce.prototype.get = function(a) {
        this.eb || (this.eb = ce.A.get.call(this, a));
        return this.eb
    }
    ;
    ce.prototype.R = function() {
        na(this.eb);
        this.eb = null;
        ce.A.R.call(this)
    }
    ;
    /*


 The MIT License.

 Copyright (c) 2010-2012 Google, Inc. http://angularjs.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @fileoverview JavaScript parser originally found in Angular.js. Modified for
 Google3 style and Closure integration. Where possible, methods that were
 defined inside of deeper, looped lexical scopes have been pulled up to only
 be defined once. Many definitions require the inner lexical scope to work
 properly and have therefore been left in place.
*/
    var de;
    (function() {
        function a(a) {
            if (zb.hasOwnProperty(a))
                return zb[a];
            var b, c = "var l, fn, p;\n";
            b = a.split(".");
            for (var e = b.length, f = 0; f < e; ++f)
                var g = b[f]
                  , c = c + ("if(!s) return s;\nl=s;\ns=" + (f ? "s" : '((k&&k.hasOwnProperty("' + g + '"))?k:s)') + '["' + g + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n');
            c += "return s;";
            b = Function("s", "k", c);
            b.toString = function() {
                return c
            }
            ;
            return zb[a] = b
        }
        function b(a, b, c) {
            b = b.split(".");
            for (var e = 0; 1 < b.length; e++) {
                var f = b.shift()
                  , g = a[f];
                g || (g = {},
                a[f] = g);
                a = g
            }
            return a[b.shift()] = c
        }
        function c(c) {
            function e(a) {
                var b = n;
                n++;
                for (var f = "", g = a, l = !1; n < c.length; ) {
                    var q = c.charAt(n)
                      , g = g + q;
                    if (l)
                        "u" == q ? (q = c.substring(n + 1, n + 5),
                        q.match(/[\da-f]{4}/i) || s("Invalid unicode escape [\\u" + q + "]", c, n),
                        n += 4,
                        f += String.fromCharCode(parseInt(q, 16))) : f = (l = Ya[q]) ? f + l : f + q,
                        l = !1;
                    else if ("\\" == q)
                        l = !0;
                    else {
                        if (q == a) {
                            n++;
                            k.push({
                                index: b,
                                text: g,
                                cC: f,
                                gd: !0,
                                Ua: function() {
                                    return f
                                }
                            });
                            return
                        }
                        f += q
                    }
                    n++
                }
                s("Unterminated quote", c, n, b)
            }
            function f() {
                for (var e = "", g = n, l, q, Ed; n < c.length; ) {
                    var s = c.charAt(n);
                    if ("." == s || O(s) || da(s))
                        "." == s && (l = n),
                        e += s;
                    else
                        break;
                    n++
                }
                if (l)
                    for (q = n; q < c.length; ) {
                        s = c.charAt(q);
                        if ("(" == s) {
                            Ed = e.substr(l - g + 1);
                            e = e.substr(0, l - g);
                            n = q;
                            break
                        }
                        if (X(s))
                            q++;
                        else
                            break
                    }
                g = {
                    index: g,
                    text: e
                };
                if (Ia.hasOwnProperty(e))
                    g.Ua = g.gd = Ia[e];
                else {
                    var r = a(e);
                    g.Ua = bc(function(a, b) {
                        return r(a, b)
                    }, {
                        assign: function(a, c) {
                            return b(a, e, c)
                        }
                    })
                }
                k.push(g);
                Ed && (k.push({
                    index: l,
                    text: ".",
                    gd: !1
                }),
                k.push({
                    index: l + 1,
                    text: Ed,
                    gd: !1
                }))
            }
            function g() {
                for (var a = "", b = n; n < c.length; ) {
                    var e = r(c.charAt(n));
                    if ("." == e || da(e))
                        a += e;
                    else {
                        var f = n + 1 < c.length ? c.charAt(n + 1) : !1;
                        if ("e" == e && u(f))
                            a += e;
                        else if (u(e) && f && da(f) && "e" == a.charAt(a.length - 1))
                            a += e;
                        else if (!u(e) || f && da(f) || "e" != a.charAt(a.length - 1))
                            break;
                        else
                            s("Invalid exponent", c, n)
                    }
                    n++
                }
                a = 1 * a;
                k.push({
                    index: b,
                    text: a,
                    gd: !0,
                    Ua: function() {
                        return a
                    }
                })
            }
            for (var k = [], l, n = 0, q = [], M, ya = ":"; n < c.length; ) {
                M = c.charAt(n);
                if (-1 != "\"'".indexOf(M))
                    e(M);
                else if (da(M) || -1 != ".".indexOf(M) && da(n + 1 < c.length ? c.charAt(n + 1) : !1))
                    g();
                else if (O(M))
                    f(),
                    -1 != "{,".indexOf(ya) && "{" == q[0] && (l = k[k.length - 1]) && (l.gd = -1 == l.text.indexOf("."));
                else if (-1 != "(){}[].,;:".indexOf(M))
                    k.push({
                        index: n,
                        text: M,
                        gd: -1 != ":[,".indexOf(ya) && -1 != "{[".indexOf(M) || -1 != "}]:,".indexOf(M)
                    }),
                    -1 != "{[".indexOf(M) && q.unshift(M),
                    -1 != "}]".indexOf(M) && q.shift(),
                    n++;
                else if (X(M)) {
                    n++;
                    continue
                } else {
                    var ra = M + (n + 1 < c.length ? c.charAt(n + 1) : !1)
                      , Ab = Ia[M]
                      , Za = Ia[ra];
                    Za ? (k.push({
                        index: n,
                        text: ra,
                        Ua: Za
                    }),
                    n += 2) : Ab ? (ya = -1 != "[,:".indexOf(ya) && -1 != "+-".indexOf(M),
                    k.push({
                        index: n,
                        text: M,
                        Ua: Ab,
                        gd: ya
                    }),
                    n += 1) : s("Unexpected next character ", c, n, n, n + 1)
                }
                ya = M
            }
            return k
        }
        function e(a, b, c) {
            return function(e, f) {
                return b(e, f, a, c)
            }
        }
        function f(a, b) {
            return function(c, e) {
                return a(c, e, b)
            }
        }
        function g(a, b, c, e) {
            k(a, b, c, e) || q("is unexpected, expecting [" + e + "]", c, n(b))
        }
        function k(a, b, c, e, f, g, k) {
            return (e = n(b, e, f, g, k)) ? (a && !e.gd && q("is not valid json", c, e),
            b.shift(),
            e) : !1
        }
        function l(a) {
            if (0 === a.length)
                throw Error("Unexpected end of expression.");
            return a[0]
        }
        function n(a, b, c, e, f) {
            if (0 < a.length) {
                a = a[0];
                var g = a.text;
                if (g == b || g == c || g == e || g == f || !(b || c || e || f))
                    return a
            }
            return !1
        }
        function q(a, b, c) {
            throw Error('Syntax Error: Token "' + c.text + '" ' + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }
        function s(a, b, c, e, f) {
            f = f || c;
            throw Error("Lexer Error: " + a + " at column" + (void 0 !== e ? "s " + e + "-" + c + " [" + b.substring(e, f) + "]" : " " + f) + " in expression [" + b + "].");
        }
        function r(a) {
            return a.toLowerCase()
        }
        function u(a) {
            return "-" == a || "+" == a || da(a)
        }
        function O(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" == a || "$" == a
        }
        function X(a) {
            return " " == a || "\r" == a || "\t" == a || "\n" == a || "\v" == a || "\u00a0" == a
        }
        function da(a) {
            return "0" <= a && "9" >= a
        }
        function ra() {}
        function bc(a, b) {
            for (var c = Array.prototype.slice.call(arguments, 1), e = c.length, f = 0; f < e; ++f) {
                var g = c[f], k;
                for (k in g)
                    a[k] = g[k]
            }
            return a
        }
        var Ya = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        }
          , Za = function(a) {
            return function() {
                return a
            }
        }(0)
          , Ia = {
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            b: ra,
            "+": function(a, b, c, e) {
                c = c(a, b);
                e = e(a, b);
                return (void 0 !== c ? c : 0) + (void 0 !== e ? e : 0)
            },
            "-": function(a, b, c, e) {
                c = c(a, b);
                e = e(a, b);
                return (void 0 !== c ? c : 0) - (void 0 !== e ? e : 0)
            },
            "*": function(a, b, c, e) {
                return c(a, b) * e(a, b)
            },
            "/": function(a, b, c, e) {
                return c(a, b) / e(a, b)
            },
            "%": function(a, b, c, e) {
                return c(a, b) % e(a, b)
            },
            "^": function(a, b, c, e) {
                return c(a, b) ^ e(a, b)
            },
            "=": ra,
            "==": function(a, b, c, e) {
                return c(a, b) == e(a, b)
            },
            "!=": function(a, b, c, e) {
                return c(a, b) != e(a, b)
            },
            "<": function(a, b, c, e) {
                return c(a, b) < e(a, b)
            },
            ">": function(a, b, c, e) {
                return c(a, b) > e(a, b)
            },
            "<=": function(a, b, c, e) {
                return c(a, b) <= e(a, b)
            },
            ">=": function(a, b, c, e) {
                return c(a, b) >= e(a, b)
            },
            "&&": function(a, b, c, e) {
                return c(a, b) && e(a, b)
            },
            "||": function(a, b, c, e) {
                return c(a, b) || e(a, b)
            },
            "&": function(a, b, c, e) {
                return c(a, b) & e(a, b)
            },
            "|": function(a, b, c, e) {
                return e(a, b) | c(a, b)
            },
            "!": function(a, b, c) {
                return !c(a, b)
            }
        }
          , zb = {};
        de = function(r, u, O) {
            function X() {
                var a = [];
                if ("}" != l(C).text) {
                    do {
                        var b = k(u, C, r)
                          , b = b.cC || b.text;
                        g(u, C, r, ":");
                        var c = Xa();
                        a.push({
                            key: b,
                            value: c
                        })
                    } while (k(u, C, r, ","))
                }
                g(u, C, r, "}");
                return function(b, c) {
                    for (var e = {}, f = 0; f < a.length; f++) {
                        var g = a[f]
                          , k = g.value(b, c);
                        e[g.key] = k
                    }
                    return e
                }
            }
            function da() {
                var a = [];
                if ("]" != l(C).text) {
                    do
                        a.push(Xa());
                    while (k(u, C, r, ","))
                }
                g(u, C, r, "]");
                return function(b, c) {
                    for (var e = [], f = 0; f < a.length; f++)
                        e.push(a[f](b, c));
                    return e
                }
            }
            function Ia() {
                var a;
                if (k(u, C, r, "("))
                    a = Fd(),
                    g(u, C, r, ")");
                else if (k(u, C, r, "["))
                    a = da();
                else if (k(u, C, r, "{"))
                    a = X();
                else {
                    var b = k(u, C, r);
                    a = b.Ua;
                    a || (b || (b = {
                        index: 1
                    }),
                    q("not a primary expression", r, b))
                }
                for (var c; b = k(u, C, r, "(", "[", "."); )
                    "(" === b.text ? (a = $e(a, c),
                    c = null) : "[" === b.text ? (c = a,
                    a = Ye(a)) : "." === b.text ? (c = a,
                    a = Ze(a)) : q("IMPOSSIBLE", r);
                return a
            }
            function Gc() {
                var a;
                return k(u, C, r, "+") ? Ia() : (a = k(u, C, r, "-")) ? e(Za, a.Ua, Gc()) : (a = k(u, C, r, "!")) ? f(a.Ua, Gc()) : Ia()
            }
            function zb() {
                for (var a = Gc(), b; b = k(u, C, r, "*", "/", "%"); )
                    a = e(a, b.Ua, Gc());
                return a
            }
            function M() {
                var a;
                a = zb();
                for (var b; b = k(u, C, r, "+", "-"); )
                    a = e(a, b.Ua, zb());
                if (b = k(u, C, r, "<", ">", "<=", ">="))
                    a = e(a, b.Ua, M());
                return a
            }
            function ya() {
                var a = M(), b;
                if (b = k(u, C, r, "==", "!="))
                    a = e(a, b.Ua, ya());
                return a
            }
            function Ya() {
                var a = ya(), b;
                if (b = k(u, C, r, "&&"))
                    a = e(a, b.Ua, Ya());
                return a
            }
            function Ab() {
                for (var a = Ya(), b; ; )
                    if (b = k(u, C, r, "||"))
                        a = e(a, b.Ua, Ya());
                    else
                        return a
            }
            function ih() {
                for (var a = []; ; )
                    if (0 < C.length && !n(C, "}", ")", ";", "]") && a.push(Fd()),
                    !k(u, C, r, ";"))
                        return 1 == a.length ? a[0] : function(b, c) {
                            for (var e, f = 0; f < a.length; f++) {
                                var g = a[f];
                                g && (e = g(b, c))
                            }
                            return e
                        }
            }
            function Ye(a) {
                var b = Xa();
                g(u, C, r, "]");
                return bc(function(c, e) {
                    var f = a(c, e), g = b(c, e), k;
                    if (f)
                        return (f = f[g]) && f.then && (k = f,
                        "$$v"in f || (k.Hq = void 0,
                        k.then(function(a) {
                            k.Hq = a
                        })),
                        f = f.Hq),
                        f
                }, {
                    assign: function(c, e, f) {
                        return a(c, f)[b(c, f)] = e
                    }
                })
            }
            function Ze(c) {
                var e = k(u, C, r).text
                  , f = a(e);
                return bc(function(a, b) {
                    return f(c(a, b), b)
                }, {
                    assign: function(a, f, g) {
                        return b(c(a, g), e, f)
                    }
                })
            }
            function $e(a, b) {
                var c = [];
                if (")" != l(C).text) {
                    do
                        c.push(Xa());
                    while (k(u, C, r, ","))
                }
                g(u, C, r, ")");
                return function(e, f) {
                    for (var g = [], k = b ? b(e, f) : e, l = 0; l < c.length; l++)
                        g.push(c[l](e, f));
                    l = a(e, f) || ra;
                    return l.apply ? l.apply(k, g) : l(g[0], g[1], g[2], g[3], g[4])
                }
            }
            function Xa() {
                var a = Ab(), b, c;
                return (c = k(u, C, r, "=")) ? (a.assign || s("implies assignment but [" + r.substring(0, c.index) + "] can not be assigned to", r, c.index, c),
                b = Ab(),
                function(c, e) {
                    return a.assign(c, b(c, e), e)
                }
                ) : a
            }
            function Fd() {
                for (var a = Xa(), b; ; )
                    if (b = k(u, C, r, "|"))
                        a = e(a, b.Ua, gh());
                    else
                        return a
            }
            function gh() {
                for (var a = k(u, C, r), b = O(a.text), c = []; ; )
                    if (a = k(u, C, r, ":"))
                        c.push(Xa());
                    else {
                        var e = function(a, e, f) {
                            f = [f];
                            for (var g = 0; g < c.length; g++)
                                f.push(c[g](a, e));
                            return b.apply(a, f)
                        };
                        return function() {
                            return e
                        }
                    }
            }
            var C = c(r), hh;
            u ? (Xa = Ab,
            $e = Ze = Ye = Fd = function() {
                q("is not valid JSON", r, {
                    text: r,
                    index: 0
                })
            }
            ,
            hh = Ia()) : hh = ih();
            0 !== C.length && q("is an unexpected token", r, C[0]);
            return hh
        }
    }
    )();
    function ee(a, b, c) {
        if (!a || !a.children)
            return null;
        var e;
        if (!c && (e = b(a),
        void 0 !== e && !e))
            return a;
        e = a.children;
        for (var f = e.length, g = 0; g < f; ++g)
            ee(e[g], b, c);
        c && b(a);
        return a
    }
    ;function fe(a) {
        if (!a.b && !a.h) {
            var b = [];
            ee(a, function(c) {
                var e = [];
                if (c !== a && -1 < c.className.indexOf("$"))
                    return !1;
                var f = c.dataset || {}, g;
                for (g in f)
                    e.push(ge(g, f[g]));
                f = c.attributes;
                g = "IMG" == c.tagName;
                for (var k = 0, l = f.length; k < l; ++k) {
                    var n = f.item(k)
                      , q = n.nodeName
                      , n = n.nodeValue
                      , s = he
                      , r = ie;
                    g && "x-src" == q && (q = "src");
                    n && !r.test(q) && s.test(n) && e.push(je(q, n))
                }
                0 === c.children.length && c.textContent && (f = c.textContent) && "SCRIPT" !== c.nodeName && he.test(f) && e.push(ke(f));
                0 < e.length && b.push(le(c, e))
            });
            me(a, b)
        }
    }
    function me(a, b) {
        a.g = b;
        a.h = function(b, e) {
            for (var f = 0, g = a.g.length; f < g; ++f)
                a.g[f](b, e)
        }
    }
    function le(a, b) {
        a.b = b;
        return function(b, e) {
            for (var f = 0, g = a.b.length; f < g; f++)
                a.b[f](a, b, e)
        }
    }
    function ne(a, b, c) {
        a.b && c.push(le(b, a.b));
        a = a.children;
        for (var e = 0, f = a.length; e < f; ++e) {
            var g = a[e];
            -1 == g.className.indexOf("$") && ne(g, b.children[e], c)
        }
    }
    var he = /\{\{(.*)\}\}/m
      , ie = /^data-/
      , oe = /^\{\{([^\{]*)\}\}$/
      , pe = /\{\{([^\{]*)\}\}/gm;
    function je(a, b) {
        var c = qe(b);
        return function(b, f) {
            b.setAttribute(a, c(f))
        }
    }
    function ke(a) {
        var b = qe(a);
        return function(a, e) {
            var f = b ? b(e) : null;
            f != a.textContent && (a.textContent = f)
        }
    }
    function qe(a) {
        return a && he.test(a) ? oe.test(a) ? function(b) {
            var c = oe.exec(a)[1];
            b = de(c, !1)(b);
            return null != b ? b : ""
        }
        : function(b) {
            return a.replace(pe, function(a, e) {
                var f = de(e, !1)(b);
                return null != f ? f : ""
            })
        }
        : null
    }
    function re(a) {
        if ("true" === a)
            return !0;
        if ("false" === a)
            return !1;
        var b = parseInt(a, 10);
        return isNaN(b) ? a : b
    }
    function ge(a, b) {
        if (he.test(b)) {
            var c = qe(b);
            return function(b, e, f) {
                e[a] = c(f)
            }
        }
        var e = !1
          , f = re(b);
        return function(b, c) {
            !e && c && (c[a] = f,
            e = !0)
        }
    }
    ;function se(a) {
        a = a && a.trim();
        if (!a)
            throw Error("Can not create Element from empty markup.");
        var b = wc(document, a);
        if (!(b instanceof Element))
            throw Error("Element must have a single root, but instead: " + a);
        return b
    }
    ;function te(a, b) {
        a = b.get("templatePreprocessor", {
            markup: a
        });
        var c = se(a);
        fe(c);
        return function() {
            var a = c.cloneNode(!0)
              , b = [];
            ne(c, a, b);
            me(a, b);
            return a
        }
    }
    te.inject = ["markup", "injector"];
    function ue(a) {
        this.J = a;
        this.responseType = ""
    }
    ue.prototype.get = function(a, b, c) {
        var e = new K
          , f = new XMLHttpRequest;
        f.responseType = this.responseType;
        var g = p
          , k = p;
        f.onreadystatechange = function() {
            if (f.readyState === XMLHttpRequest.DONE) {
                b && (g = e.B("success", b));
                c && (k = e.B("failure", c));
                var a = f.getResponseHeader("content-type");
                a && (a = a.match(/json/) ? this.J.JSON.parse(f.response) : a.match(/xml/) ? f.responseXML : "arraybuffer" === f.responseType ? f.response : f.responseText,
                e.T("success", a))
            }
        }
        ;
        f.open("GET", a, !0);
        f.send();
        return function() {
            g();
            k()
        }
    }
    ;
    function ve(a, b) {
        this.g = a;
        this.j = b;
        this.b = {}
    }
    ve.prototype.register = function(a, b, c) {
        b ? (this.b[a] && (this.b[a] = null),
        this.h(a, b, c)) : this.k(a, b, c)
    }
    ;
    ve.prototype.h = function(a, b, c) {
        b = {
            markup: b,
            injector: this.g
        };
        w(c) && (c = this.g.get(c, b));
        this.g.ir(a, c || te, b)
    }
    ;
    ve.prototype.k = function(a, b, c) {
        this.b[a] = {
            name: a,
            content: b,
            mz: c
        }
    }
    ;
    ve.prototype.execute = function(a) {
        function b() {
            0 === --c && a && a()
        }
        var c = 0, e;
        for (e in this.b) {
            c++;
            var f = this.b[e];
            if (f) {
                var g = y(function(a, c) {
                    this.h(a.name, c, a.mz);
                    b()
                }, this, f);
                this.j.get(f.name, g, b)
            }
        }
    }
    ;
    ve.inject = ["injector", "xhr"];
    function we(a, b) {
        Array.prototype.slice.call(arguments, 1).forEach(function(b) {
            for (var e in b)
                a[e] = b[e]
        });
        return a
    }
    function xe(a, b) {
        for (var c in a)
            b(a[c], c, a)
    }
    ;function ye() {
        this.id = ++ze;
        this.b = {};
        this.register("injector", this)
    }
    var ze = 0;
    ye.prototype.addChild = function(a) {
        a.parent = this;
        return a
    }
    ;
    d = ye.prototype;
    d.remove = function() {
        for (var a = this.Mq(), b = 0, c = a.length; b < c; ++b)
            na(this.b[a[b]]);
        this.b = {};
        this.parent = null
    }
    ;
    d.sK = function() {
        return this.parent ? this.parent.sK() : this
    }
    ;
    d.DT = function(a) {
        var b = new ye;
        a && a(b);
        return this.addChild(b)
    }
    ;
    d.ef = function(a, b) {
        na(this.b[a]);
        return this.b[a] = b
    }
    ;
    d.register = function(a, b, c) {
        return this.ef(a, new ae(b,this,c))
    }
    ;
    d.ir = function(a, b, c) {
        return this.ef(a, new be(b,this,c))
    }
    ;
    d.yl = function(a, b, c) {
        return this.ef(a, new $c(b,this,c))
    }
    ;
    d.ls = function(a, b, c) {
        return this.ef(a, new bd(b,this,c))
    }
    ;
    d.ks = function(a, b, c, e, f) {
        return this.ef(a, new cd(b,this,e,c,f))
    }
    ;
    d.ha = function(a, b, c) {
        return this.get("templateResolver").register(a, b, c)
    }
    ;
    d.oy = function(a) {
        this.get("templateResolver").execute(a)
    }
    ;
    d.li = function(a, b, c) {
        if (this.contains(a)) {
            var e = this.Fe(a);
            if (e && e.eb)
                throw Error('Unable to register singleton "' + a + '" with new constructor because this original was already registered and instantiated.');
        }
        return this.ef(a, new ce(b,this,c))
    }
    ;
    d.mQ = function(a, b) {
        return this.b[a] = this.b[b]
    }
    ;
    d.get = function(a, b, c) {
        function e(a) {
            var q = k.sA(a, b, c);
            if (!q)
                throw q = 'Error, injector cannot find declaration for "' + a + '"',
                g != a && (q += ' While attempting to create "' + g + '".'),
                Error(q);
            var s = f(q.h)
              , r = we({}, s, l)
              , s = (v(q.b) ? q.b : []).map(function(b) {
                if (b in r)
                    return r[b];
                if (b === g)
                    throw Error("Circular dependency found where " + g + " loaded " + a + " which then required " + b + ".");
                return l[b] = e(b)
            });
            return q.get(s)
        }
        function f(a) {
            a = a || {};
            var b = {};
            xe(a, function(a, c) {
                "string" === typeof a && /^\$/.test(a) && (a = e(a.replace(/^\$/, "")));
                b[c] = a
            });
            return b
        }
        var g = "function" === typeof a ? "temp" : a
          , k = this
          , l = b || {};
        return e(a)
    }
    ;
    d.sA = function(a, b, c) {
        return "function" === typeof a ? new (c || bd)(a,this,b) : this.Fe(a)
    }
    ;
    d.Fe = function(a) {
        return this.b[a] ? this.b[a] : this.parent && this.parent.Fe instanceof Function ? this.parent.Fe(a) : null
    }
    ;
    d.Mq = function() {
        return pb(this.b)
    }
    ;
    d.contains = function(a) {
        return a ? !!(this.b[a] || this.parent && this.parent.contains(a)) : !1
    }
    ;
    function L() {
        $d.call(this);
        this.children = [];
        this.p = {};
        this.model = this.template = this.b = null;
        this.isHidden = this.isActive = !1;
        this.onEnter = null;
        this.isSpeakable = !1;
        this.$ = null
    }
    B(L, $d);
    L.prototype.og = function() {
        this.$ && this.$.ki()
    }
    ;
    L.prototype.rg = function() {
        this.$ && this.$.Xf()
    }
    ;
    Jd(L, ["isActive", "isHidden", "model", "onEnter"]);
    d = L.prototype;
    d.qa = function() {}
    ;
    d.OB = function() {}
    ;
    d.createElement = function() {}
    ;
    d.Ya = function() {}
    ;
    d.wj = function() {
        this.B("onEnter:changed", y(this.eH, this));
        this.B("model:changed", y(this.Fa, this));
        this.B("activated", y(this.Gk, this));
        this.B("deactivated", y(this.cH, this))
    }
    ;
    d.ready = function() {}
    ;
    d.eH = function(a) {
        var b = this.lH(a);
        this.B("keyup", y(function(a) {
            13 == a.keyCode && b.apply(this, arguments)
        }, this.us()))
    }
    ;
    d.Fa = function(a) {
        this.fg(a.detail[1]);
        a.detail && this.ni()
    }
    ;
    d.pQ = function(a, b) {
        var c = this.injector.get(a, b, cd);
        if (c)
            this.addChild(c);
        else
            throw Error("Error while creating child " + a);
        return c
    }
    ;
    d.wU = function() {}
    ;
    d.ni = function() {}
    ;
    d.tg = function(a, b) {
        this.ca(this.model, a, b)
    }
    ;
    d.AQ = function(a, b) {
        return this.injector.get(a, b, $c)
    }
    ;
    d.focus = function() {
        this.b && this.b.isActive ? this.b.focus() : this.K.focus()
    }
    ;
    d.W = function() {
        this.isActive || (this.isActive = !0,
        this.b && this.b.W(),
        this.L("activated"),
        this.U(),
        this.focus())
    }
    ;
    d.Gk = function(a) {
        this.tk(a) && (this.W(),
        this.b != a.target.le && (this.b && this.b.ea(),
        this.b = a.target.le),
        J(a, !1, !0))
    }
    ;
    d.ea = function() {
        this.isActive && (this.isActive = !1,
        this.b && this.b.ea(),
        this.L("deactivated"),
        this.U())
    }
    ;
    d.cH = function(a) {
        this.tk(a) && (this.isActive && this.focus(),
        J(a, !1, !0))
    }
    ;
    d.tk = function(a) {
        return a.target.parentNode == this.K
    }
    ;
    d.Tb = function() {
        this.isHidden = !1
    }
    ;
    d.Xa = function() {
        this.isHidden = !0
    }
    ;
    d.addClass = function(a) {
        this.K && a && bb(this.K, a)
    }
    ;
    d.removeClass = function(a) {
        this.K && a && db(this.K, a)
    }
    ;
    d.$J = function(a, b) {
        var c = a(this, b);
        return this.ut(function(b) {
            return b.$J(a, c)
        }, this)
    }
    ;
    d.ZJ = function(a, b) {
        var c = this.ut(function(c) {
            return c.ZJ(a, b)
        }, this);
        return a(this, c)
    }
    ;
    d.ut = function(a, b) {
        var c = 0;
        return this.children.map(function(e) {
            return a.call(b, e, c++)
        })
    }
    ;
    L.prototype.addChild = function(a) {
        return this.Es(a, this.pi())
    }
    ;
    d = L.prototype;
    d.Es = function(a, b) {
        this.children.splice(b, 0, a);
        a.Vh() && (this.p[a.Vh()] = a);
        a.parent = this;
        return this
    }
    ;
    d.Ta = function(a) {
        return this.children[a]
    }
    ;
    d.Un = function(a) {
        return this.p[a]
    }
    ;
    d.removeChild = function(a) {
        a = this.children.indexOf(a);
        -1 < a && this.oi(a);
        return a
    }
    ;
    d.oi = function(a) {
        if (-1 < a && a < this.children.length) {
            var b = this.children[a];
            b == this.b && (this.b = null);
            this.children.splice(a, 1);
            b.Vh() && delete this.p[b.Vh()];
            na(b);
            return b
        }
        return null
    }
    ;
    d.JT = function() {
        for (var a = [], b = 0, c = this.pi(); b < c; ++b)
            a.push(this.oi(0));
        return a
    }
    ;
    d.pi = function() {
        return this.children.length
    }
    ;
    d.R = function() {
        this.ea();
        oa(this.children);
        this.parent && this.parent.removeChild(this);
        this.parent = null;
        na(this.$);
        L.A.R.call(this)
    }
    ;
    d.U = function(a) {
        dd(this.K, this, this.us());
        a && this.Ss(a)
    }
    ;
    d.us = function() {
        return this.parent || this.M || this
    }
    ;
    d.lH = function(a) {
        var b = a.detail && a.detail[0];
        a = a.detail && a.detail[1];
        if (b && a)
            throw Error("Cannot subscribe to press event more than once.");
        if (!x(b))
            throw Error("Event handler must be a function.");
        return b
    }
    ;
    d.Ss = function(a) {
        for (var b = 0, c = this.children.length; b < c; ++b)
            this.children[b].U(a)
    }
    ;
    d.Qb = function(a, b) {
        b ? db(a, "hidden") : bb(a, "hidden")
    }
    ;
    d.Vh = function() {
        return this.K ? this.K.id : ""
    }
    ;
    L.prototype.getStyles = function() {
        var a = [];
        this.isActive && a.push("active");
        this.isHidden && a.push("hidden");
        this.isSpeakable && a.push("speakable");
        this.model || a.push("no-model");
        return a.join(" ")
    }
    ;
    function Ae(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.g = !1;
        this.Ap = !0
    }
    Ae.prototype.xK = function() {}
    ;
    Ae.prototype.Vb = function() {}
    ;
    Ae.prototype.stopPropagation = function() {
        this.g = !0
    }
    ;
    Ae.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Ap = !1
    }
    ;
    function Be(a) {
        Be[" "](a);
        return a
    }
    Be[" "] = p;
    var Ce = !H || ac(9)
      , De = !H || ac(9)
      , Ee = H && !I("9");
    !Nb || I("528");
    Mb && I("1.9b") || H && I("8") || Lb && I("9.5") || Nb && I("528");
    Mb && !I("8") || H && I("9");
    function Fe(a) {
        return Nb ? "webkit" + a : Lb ? "o" + a.toLowerCase() : a.toLowerCase()
    }
    Fe("AnimationStart");
    Fe("AnimationEnd");
    Fe("AnimationIteration");
    Fe("TransitionEnd");
    function Ge(a, b) {
        Ae.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.h = this.screenY = this.screenX = this.clientY = this.clientX = this.l = this.k = 0;
        this.j = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.o = !1;
        this.b = null;
        a && this.Cw(a, b)
    }
    B(Ge, Ae);
    var He = [1, 4, 2];
    d = Ge.prototype;
    d.Cw = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (Mb) {
                var f;
                t: {
                    try {
                        Be(e.nodeName);
                        f = !0;
                        break t
                    } catch (g) {}
                    f = !1
                }
                f || (e = null)
            }
        } else
            "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        this.k = Nb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.l = Nb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.h = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.j = a.metaKey;
        this.o = Gb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    d.BK = function(a) {
        return Ce ? this.b.button == a : "click" == this.type ? 0 == a : !!(this.b.button & He[a])
    }
    ;
    d.eT = function() {
        return this.BK(0) && !(Nb && Gb && this.ctrlKey)
    }
    ;
    d.stopPropagation = function() {
        Ge.A.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    }
    ;
    d.preventDefault = function() {
        Ge.A.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Ee)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    d.TQ = function() {
        return this.b
    }
    ;
    d.xK = function() {}
    ;
    var Ie = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Je(a) {
        try {
            return !(!a || !a[Ie])
        } catch (b) {
            return !1
        }
    }
    var Ke = 0;
    function Le(a, b, c, e, f, g) {
        this.listener = a;
        this.g = b;
        this.src = c;
        this.type = e;
        this.capture = !!f;
        this.ad = g;
        this.key = ++Ke;
        this.Ie = this.Jh = !1
    }
    Le.prototype.b = function() {
        this.Ie = !0;
        this.ad = this.src = this.g = this.listener = null
    }
    ;
    function Me(a) {
        this.src = a;
        this.b = {};
        this.g = 0
    }
    d = Me.prototype;
    d.Jz = function() {
        return this.g
    }
    ;
    d.zS = function() {
        var a = 0, b;
        for (b in this.b)
            a += this.b[b].length;
        return a
    }
    ;
    d.add = function(a, b, c, e, f) {
        var g = this.b[a];
        g || (g = this.b[a] = [],
        this.g++);
        var k = Ne(g, b, e, f);
        -1 < k ? (a = g[k],
        c || (a.Jh = !1)) : (a = new Le(b,null,this.src,a,!!e,f),
        a.Jh = c,
        g.push(a));
        return a
    }
    ;
    d.remove = function(a, b, c, e) {
        if (!(a in this.b))
            return !1;
        var f = this.b[a];
        b = Ne(f, b, c, e);
        return -1 < b ? (f[b].b(),
        E.splice.call(f, b, 1),
        0 == f.length && (delete this.b[a],
        this.g--),
        !0) : !1
    }
    ;
    d.Cp = function(a) {
        var b = a.type;
        if (!(b in this.b))
            return !1;
        var c = Pa(this.b[b], a);
        c && (a.b(),
        0 == this.b[b].length && (delete this.b[b],
        this.g--));
        return c
    }
    ;
    d.qE = function(a) {
        var b = 0, c;
        for (c in this.b)
            if (!a || c == a) {
                for (var e = this.b[c], f = 0; f < e.length; f++)
                    ++b,
                    e[f].b();
                delete this.b[c];
                this.g--
            }
        return b
    }
    ;
    d.Br = function(a, b) {
        var c = this.b[a]
          , e = [];
        if (c)
            for (var f = 0; f < c.length; ++f) {
                var g = c[f];
                g.capture == b && e.push(g)
            }
        return e
    }
    ;
    d.hk = function(a, b, c, e) {
        a = this.b[a];
        var f = -1;
        a && (f = Ne(a, b, c, e));
        return -1 < f ? a[f] : null
    }
    ;
    d.pE = function(a, b) {
        var c = t(a)
          , e = t(b);
        return mb(this.b, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != a || e && f[g].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    function Ne(a, b, c, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.Ie && g.listener == b && g.capture == !!c && g.ad == e)
                return f
        }
        return -1
    }
    ;var Oe = "closure_lm_" + (1E6 * Math.random() | 0)
      , Pe = {}
      , Qe = 0;
    function Re(a, b, c, e, f) {
        if (v(b)) {
            for (var g = 0; g < b.length; g++)
                Re(a, b[g], c, e, f);
            return null
        }
        c = Se(c);
        return Je(a) ? a.Rc(b, c, e, f) : Te(a, b, c, !1, e, f)
    }
    function Te(a, b, c, e, f, g) {
        if (!b)
            throw Error("Invalid event type");
        var k = !!f
          , l = Ue(a);
        l || (a[Oe] = l = new Me(a));
        c = l.add(b, c, e, f, g);
        if (c.g)
            return c;
        e = Ve();
        c.g = e;
        e.src = a;
        e.listener = c;
        a.addEventListener ? a.addEventListener(b, e, k) : a.attachEvent(b in Pe ? Pe[b] : Pe[b] = "on" + b, e);
        Qe++;
        return c
    }
    function Ve() {
        var a = We
          , b = De ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function Xe(a, b, c, e, f) {
        if (v(b)) {
            for (var g = 0; g < b.length; g++)
                Xe(a, b[g], c, e, f);
            return null
        }
        c = Se(c);
        return Je(a) ? a.wK(b, c, e, f) : Te(a, b, c, !0, e, f)
    }
    function af(a, b, c, e, f) {
        if (v(b)) {
            for (var g = 0; g < b.length; g++)
                af(a, b[g], c, e, f);
            return null
        }
        c = Se(c);
        if (Je(a))
            return a.Lh(b, c, e, f);
        if (!a)
            return !1;
        e = !!e;
        if (a = Ue(a))
            if (b = a.hk(b, c, e, f))
                return bf(b);
        return !1
    }
    function bf(a) {
        if (fa(a) || !a || a.Ie)
            return !1;
        var b = a.src;
        if (Je(b))
            return b.yp(a);
        var c = a.type
          , e = a.g;
        b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent && b.detachEvent(c in Pe ? Pe[c] : Pe[c] = "on" + c, e);
        Qe--;
        (c = Ue(b)) ? (c.Cp(a),
        0 == c.Jz() && (c.src = null,
        b[Oe] = null)) : a.b();
        return !0
    }
    function cf(a, b, c, e) {
        var f = 1;
        if (a = Ue(a))
            if (b = a.b[b])
                for (b = Ra(b),
                a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.Ie && (f &= !1 !== df(g, e))
                }
        return Boolean(f)
    }
    function df(a, b) {
        var c = a.listener
          , e = a.ad || a.src;
        a.Jh && bf(a);
        return c.call(e, b)
    }
    function We(a, b) {
        if (a.Ie)
            return !0;
        if (!De) {
            var c = b || m("window.event")
              , e = new Ge(c,this)
              , f = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break t
                        } catch (k) {
                            g = !0
                        }
                    if (g || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (g = e.currentTarget; g; g = g.parentNode)
                    c.push(g);
                for (var g = a.type, l = c.length - 1; !e.g && 0 <= l; l--)
                    e.currentTarget = c[l],
                    f &= cf(c[l], g, !0, e);
                for (l = 0; !e.g && l < c.length; l++)
                    e.currentTarget = c[l],
                    f &= cf(c[l], g, !1, e)
            }
            return f
        }
        return df(a, new Ge(b,this))
    }
    function Ue(a) {
        a = a[Oe];
        return a instanceof Me ? a : null
    }
    var ef = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Se(a) {
        return x(a) ? a : a[ef] || (a[ef] = function(b) {
            return a.handleEvent(b)
        }
        )
    }
    ;function ff() {
        this.g = new Me(this);
        this.V = this
    }
    B(ff, ma);
    ff.prototype[Ie] = !0;
    d = ff.prototype;
    d.Cl = null;
    d.sr = function() {
        return this.Cl
    }
    ;
    d.eU = function(a) {
        this.Cl = a
    }
    ;
    d.addEventListener = function(a, b, c, e) {
        Re(this, a, b, c, e)
    }
    ;
    d.removeEventListener = function(a, b, c, e) {
        af(this, a, b, c, e)
    }
    ;
    d.dispatchEvent = function(a) {
        this.rr();
        var b, c = this.sr();
        if (c) {
            b = [];
            for (var e = 1; c; c = c.sr())
                b.push(c),
                ++e
        }
        c = this.V;
        e = a.type || a;
        if (w(a))
            a = new Ae(a,c);
        else if (a instanceof Ae)
            a.target = a.target || c;
        else {
            var f = a;
            a = new Ae(e,c);
            yb(a, f)
        }
        var f = !0, g;
        if (b)
            for (var k = b.length - 1; !a.g && 0 <= k; k--)
                g = a.currentTarget = b[k],
                f = g.hi(e, !0, a) && f;
        a.g || (g = a.currentTarget = c,
        f = g.hi(e, !0, a) && f,
        a.g || (f = g.hi(e, !1, a) && f));
        if (b)
            for (k = 0; !a.g && k < b.length; k++)
                g = a.currentTarget = b[k],
                f = g.hi(e, !1, a) && f;
        return f
    }
    ;
    d.R = function() {
        ff.A.R.call(this);
        this.RG();
        this.Cl = null
    }
    ;
    d.Rc = function(a, b, c, e) {
        this.rr();
        return this.g.add(String(a), b, !1, c, e)
    }
    ;
    d.wK = function(a, b, c, e) {
        return this.g.add(String(a), b, !0, c, e)
    }
    ;
    d.Lh = function(a, b, c, e) {
        return this.g.remove(String(a), b, c, e)
    }
    ;
    d.yp = function(a) {
        return this.g.Cp(a)
    }
    ;
    d.RG = function(a) {
        return this.g ? this.g.qE(a) : 0
    }
    ;
    d.hi = function(a, b, c) {
        a = this.g.b[String(a)];
        if (!a)
            return !0;
        a = Ra(a);
        for (var e = !0, f = 0; f < a.length; ++f) {
            var g = a[f];
            if (g && !g.Ie && g.capture == b) {
                var k = g.listener
                  , l = g.ad || g.src;
                g.Jh && this.yp(g);
                e = !1 !== k.call(l, c) && e
            }
        }
        return e && !1 != c.Ap
    }
    ;
    d.Br = function(a, b) {
        return this.g.Br(String(a), b)
    }
    ;
    d.Lz = function(a, b, c, e) {
        return this.g.hk(String(a), b, c, e)
    }
    ;
    d.yS = function(a, b) {
        var c = t(a) ? String(a) : void 0;
        return this.g.pE(c, b)
    }
    ;
    d.lU = function(a) {
        this.V = a
    }
    ;
    d.rr = function() {}
    ;
    function gf(a, b) {
        ff.call(this);
        this.b = a || 1;
        this.h = b || h;
        this.j = y(this.zx, this);
        this.k = A()
    }
    B(gf, ff);
    d = gf.prototype;
    d.enabled = !1;
    d.Pb = null;
    d.wl = function() {
        return this.b
    }
    ;
    d.Og = function(a) {
        this.b = a;
        this.Pb && this.enabled ? (this.vb(),
        this.Vc()) : this.Pb && this.vb()
    }
    ;
    d.zx = function() {
        if (this.enabled) {
            var a = A() - this.k;
            0 < a && a < 0.8 * this.b ? this.Pb = this.h.setTimeout(this.j, this.b - a) : (this.Pb && (this.h.clearTimeout(this.Pb),
            this.Pb = null),
            this.xx(),
            this.enabled && (this.Pb = this.h.setTimeout(this.j, this.b),
            this.k = A()))
        }
    }
    ;
    d.xx = function() {
        this.dispatchEvent("tick")
    }
    ;
    d.Vc = function() {
        this.enabled = !0;
        this.Pb || (this.Pb = this.h.setTimeout(this.j, this.b),
        this.k = A())
    }
    ;
    d.vb = function() {
        this.enabled = !1;
        this.Pb && (this.h.clearTimeout(this.Pb),
        this.Pb = null)
    }
    ;
    d.R = function() {
        gf.A.R.call(this);
        this.vb();
        delete this.h
    }
    ;
    function hf(a, b, c) {
        if (x(a))
            c && (a = y(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = y(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : h.setTimeout(a, b || 0)
    }
    ;function jf(a, b, c) {
        this.b = a;
        this.k = b || 0;
        this.g = c;
        this.j = y(this.h, this)
    }
    B(jf, ma);
    d = jf.prototype;
    d.yb = 0;
    d.R = function() {
        jf.A.R.call(this);
        this.Vg();
        delete this.b;
        delete this.g
    }
    ;
    d.od = function(a) {
        this.Vg();
        this.yb = hf(this.j, t(a) ? a : this.k)
    }
    ;
    d.Vg = function() {
        this.isActive() && h.clearTimeout(this.yb);
        this.yb = 0
    }
    ;
    d.tK = function() {
        this.Vg();
        this.h()
    }
    ;
    d.JQ = function() {
        this.isActive() && this.tK()
    }
    ;
    jf.prototype.isActive = function() {
        return 0 != this.yb
    }
    ;
    jf.prototype.h = function() {
        this.yb = 0;
        this.b && this.b.call(this.g)
    }
    ;
    function kf(a, b) {
        this.h = a;
        this.b = b;
        this.g = new jf(y(this.j, this),0,this)
    }
    B(kf, ma);
    d = kf.prototype;
    d.Mf = 0;
    d.zj = 0;
    d.yj = !1;
    d.R = function() {
        this.g.Vb();
        delete this.h;
        delete this.b;
        kf.A.R.call(this)
    }
    ;
    d.tB = function(a, b) {
        this.KD();
        this.yj = !1;
        var c = b || 0;
        this.Mf = Math.max(a || 0, 0);
        this.zj = 0 > c ? -1 : A() + c;
        this.g.od(0 > c ? this.Mf : Math.min(this.Mf, c))
    }
    ;
    d.KD = function() {
        this.g.Vg()
    }
    ;
    kf.prototype.isActive = function() {
        return this.g.isActive()
    }
    ;
    kf.prototype.l = function() {
        return this.yj
    }
    ;
    kf.prototype.Wc = function() {}
    ;
    kf.prototype.k = function() {}
    ;
    kf.prototype.j = function() {
        if (this.h.call(this.b))
            this.yj = !0,
            this.Wc();
        else if (0 > this.zj)
            this.g.od(this.Mf);
        else {
            var a = this.zj - A();
            0 >= a ? this.k() : this.g.od(Math.min(this.Mf, a))
        }
    }
    ;
    function lf(a, b, c) {
        this.j = a;
        this.h = b;
        this.g = c;
        this.b = y(this.mw, this)
    }
    B(lf, ma);
    d = lf.prototype;
    d.df = !1;
    d.xg = 0;
    d.yd = null;
    d.Xp = function() {
        this.yd || this.xg ? this.df = !0 : this.Sl()
    }
    ;
    d.dq = function() {
        this.yd && (h.clearTimeout(this.yd),
        this.yd = null,
        this.df = !1)
    }
    ;
    d.iB = function() {
        this.xg++
    }
    ;
    d.jB = function() {
        this.xg--;
        this.xg || !this.df || this.yd || (this.df = !1,
        this.Sl())
    }
    ;
    d.R = function() {
        lf.A.R.call(this);
        this.dq()
    }
    ;
    d.mw = function() {
        this.yd = null;
        this.df && !this.xg && (this.df = !1,
        this.Sl())
    }
    ;
    d.Sl = function() {
        this.yd = hf(this.b, this.h);
        this.j.call(this.g)
    }
    ;
    function mf(a, b) {
        var c = a;
        b && (c = y(a, b));
        x(h.setImmediate) ? h.setImmediate(c) : (nf || (nf = of()),
        nf(c))
    }
    var nf;
    function of() {
        var a = h.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , e = b.location.protocol + "//" + b.location.host
              , a = y(function(a) {
                if (a.origin == e || a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, e)
                }
            }
        }
        );
        if ("undefined" !== typeof a) {
            var b = new a
              , c = {}
              , e = c;
            b.port1.onmessage = function() {
                c = c.next;
                var a = c.Gt;
                c.Gt = null;
                a()
            }
            ;
            return function(a) {
                e.next = {
                    Gt: a
                };
                e = e.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
            var b = document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            }
            ;
            document.documentElement.appendChild(b)
        }
        : function(a) {
            h.setTimeout(a, 0)
        }
    }
    ;function pf(a) {
        mf(function() {
            throw a;
        })
    }
    function qf(a, b) {
        rf || (mf(sf),
        rf = !0);
        tf.push(new uf(a,b))
    }
    var rf = !1
      , tf = [];
    function sf() {
        for (; tf.length; ) {
            var a = tf;
            tf = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.Ua.call(c.scope)
                } catch (e) {
                    pf(e)
                }
            }
        }
        rf = !1
    }
    function uf(a, b) {
        this.Ua = a;
        this.scope = b
    }
    ;function vf(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_labs_Thenable = !0
    }
    function wf(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_labs_Thenable
        } catch (b) {
            return !1
        }
    }
    ;function xf(a, b) {
        this.g = 0;
        this.l = void 0;
        this.b = this.h = null;
        this.j = this.k = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                c.ee(2, a)
            }, function(a) {
                c.ee(3, a)
            })
        } catch (e) {
            this.ee(3, e)
        }
    }
    xf.prototype.then = function(a, b, c) {
        this.Tl(Error("then"));
        return this.tt(x(a) ? a : null, x(b) ? b : null, c)
    }
    ;
    vf(xf);
    d = xf.prototype;
    d.yU = function(a, b) {
        function c() {
            try {
                a.call(b)
            } catch (c) {
                yf.call(null, c)
            }
        }
        this.Tl(Error("thenAlways"));
        this.Sr({
            Tf: null,
            tl: c,
            sl: c
        });
        return this
    }
    ;
    d.zU = function(a, b) {
        this.Tl(Error("thenCatch"));
        return this.tt(null, a, b)
    }
    ;
    d.cancel = function(a) {
        0 == this.g && qf(function() {
            var b = new zf(a);
            this.Dp(b)
        }, this)
    }
    ;
    d.Dp = function(a) {
        0 == this.g && (this.h ? this.h.NC(this, a) : this.ee(3, a))
    }
    ;
    d.NC = function(a, b) {
        if (this.b) {
            for (var c = 0, e = -1, f = 0, g; g = this.b[f]; f++)
                if (g = g.Tf)
                    if (c++,
                    g == a && (e = f),
                    0 <= e && 1 < c)
                        break;
            0 <= e && (0 == this.g && 1 == c ? this.Dp(b) : (c = this.b.splice(e, 1)[0],
            this.io(c, 3, b)))
        }
    }
    ;
    d.Sr = function(a) {
        this.b && this.b.length || 2 != this.g && 3 != this.g || this.Ko();
        this.b || (this.b = []);
        this.b.push(a)
    }
    ;
    d.tt = function(a, b, c) {
        var e = {
            Tf: null,
            sl: null,
            tl: null
        };
        e.Tf = new xf(function(f, g) {
            e.sl = a ? function(b) {
                try {
                    var e = a.call(c, b);
                    f(e)
                } catch (n) {
                    g(n)
                }
            }
            : f;
            e.tl = b ? function(a) {
                try {
                    var e = b.call(c, a);
                    !t(e) && a instanceof zf ? g(a) : f(e)
                } catch (n) {
                    g(n)
                }
            }
            : g
        }
        );
        e.Tf.h = this;
        this.Sr(e);
        return e.Tf
    }
    ;
    d.fr = function(a) {
        this.g = 0;
        this.ee(2, a)
    }
    ;
    d.gr = function(a) {
        this.g = 0;
        this.ee(3, a)
    }
    ;
    d.ee = function(a, b) {
        if (0 == this.g) {
            if (this == b)
                a = 3,
                b = new TypeError("Promise cannot resolve to itself");
            else {
                if (wf(b)) {
                    this.g = 1;
                    b.then(this.fr, this.gr, this);
                    return
                }
                if (ga(b))
                    try {
                        var c = b.then;
                        if (x(c)) {
                            this.lD(b, c);
                            return
                        }
                    } catch (e) {
                        a = 3,
                        b = e
                    }
            }
            this.l = b;
            this.g = a;
            this.Ko();
            3 != a || b instanceof zf || Af(this, b)
        }
    }
    ;
    d.lD = function(a, b) {
        function c(a) {
            g || (g = !0,
            f.gr(a))
        }
        function e(a) {
            g || (g = !0,
            f.fr(a))
        }
        this.g = 1;
        var f = this
          , g = !1;
        try {
            b.call(a, e, c)
        } catch (k) {
            c(k)
        }
    }
    ;
    d.Ko = function() {
        this.k || (this.k = !0,
        qf(this.EG, this))
    }
    ;
    d.EG = function() {
        for (; this.b && this.b.length; ) {
            var a = this.b;
            this.b = [];
            for (var b = 0; b < a.length; b++)
                this.io(a[b], this.g, this.l)
        }
        this.k = !1
    }
    ;
    d.io = function(a, b, c) {
        2 == b ? a.sl(c) : (this.tJ(),
        a.tl(c))
    }
    ;
    d.Tl = function() {}
    ;
    d.aG = function() {}
    ;
    d.tJ = function() {
        var a;
        for (a = this; a && a.j; a = a.h)
            a.j = !1
    }
    ;
    function Af(a, b) {
        a.j = !0;
        qf(function() {
            a.j && (a.aG(b),
            yf.call(null, b))
        })
    }
    var yf = pf;
    function zf(a) {
        pa.call(this, a)
    }
    B(zf, pa);
    zf.prototype.name = "cancel";
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function Bf(a, b) {
        this.k = [];
        this.I = a;
        this.w = b || null;
        this.h = this.C = !1;
        this.g = void 0;
        this.p = this.H = this.o = !1;
        this.l = 0;
        this.b = null;
        this.j = 0
    }
    d = Bf.prototype;
    d.cancel = function(a) {
        if (this.of())
            this.g instanceof Bf && this.g.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : b.sx()
            }
            this.I ? this.I.call(this.w, this) : this.p = !0;
            this.of() || this.zh(new Cf(this))
        }
    }
    ;
    d.sx = function() {
        this.j--;
        0 >= this.j && this.cancel()
    }
    ;
    d.Dm = function(a, b) {
        this.o = !1;
        this.Bl(a, b)
    }
    ;
    d.Bl = function(a, b) {
        this.C = !0;
        this.g = b;
        this.h = !a;
        this.iq()
    }
    ;
    d.mt = function() {
        if (this.of()) {
            if (!this.p)
                throw new Df(this);
            this.p = !1
        }
    }
    ;
    d.callback = function(a) {
        this.mt();
        this.lt(a);
        this.Bl(!0, a)
    }
    ;
    d.zh = function(a) {
        this.mt();
        this.lt(a);
        this.Cm(a);
        this.Bl(!1, a)
    }
    ;
    d.Cm = function() {}
    ;
    d.lt = function() {}
    ;
    d.Df = function(a, b) {
        return this.Zd(a, null, b)
    }
    ;
    d.$o = function(a, b) {
        return this.Zd(null, a, b)
    }
    ;
    d.kQ = function(a, b) {
        return this.Zd(a, a, b)
    }
    ;
    d.Zd = function(a, b, c) {
        this.k.push([a, b, c]);
        this.of() && this.iq();
        return this
    }
    ;
    d.then = function(a, b, c) {
        var e, f, g = new xf(function(a, b) {
            e = a;
            f = b
        }
        );
        this.Zd(e, function(a) {
            a instanceof Cf ? g.cancel() : f(a)
        });
        return g.then(a, b, c)
    }
    ;
    vf(Bf);
    d = Bf.prototype;
    d.GA = function(a) {
        this.Zd(a.callback, a.zh, a);
        return this
    }
    ;
    d.oQ = function(a) {
        return this.Df(y(a.AJ, a))
    }
    ;
    d.AJ = function(a) {
        var b = new Bf;
        this.GA(b);
        a && (b.b = this,
        this.j++);
        return b
    }
    ;
    d.of = function() {
        return this.C
    }
    ;
    d.Au = function(a) {
        return a instanceof Error
    }
    ;
    d.Em = function() {
        return Ma(this.k, function(a) {
            return x(a[1])
        })
    }
    ;
    d.iq = function() {
        if (this.l && this.of() && this.Em()) {
            var a = this.l
              , b = Ef[a];
            b && (b.Bu(),
            delete Ef[a]);
            this.l = 0
        }
        this.b && (this.b.j--,
        delete this.b);
        for (var a = this.g, c = b = !1; this.k.length && !this.o; ) {
            var e = this.k.shift()
              , f = e[0]
              , g = e[1]
              , e = e[2];
            if (f = this.h ? g : f)
                try {
                    var k = f.call(e || this.w, a);
                    t(k) && (this.h = this.h && (k == a || this.Au(k)),
                    this.g = a = k);
                    wf(a) && (this.o = c = !0)
                } catch (l) {
                    a = l,
                    this.h = !0,
                    this.Cm(a),
                    this.Em() || (b = !0)
                }
        }
        this.g = a;
        c && (k = y(this.Dm, this, !0),
        c = y(this.Dm, this, !1),
        a instanceof Bf ? (a.Zd(k, c),
        a.H = !0) : a.then(k, c));
        b && (a = new Ff(a),
        Ef[a.yb] = a,
        this.l = a.yb)
    }
    ;
    function Df(a) {
        pa.call(this);
        this.b = a
    }
    B(Df, pa);
    Df.prototype.message = "Deferred has already fired";
    Df.prototype.name = "AlreadyCalledError";
    function Cf(a) {
        pa.call(this);
        this.b = a
    }
    B(Cf, pa);
    Cf.prototype.message = "Deferred was canceled";
    Cf.prototype.name = "CanceledError";
    function Ff(a) {
        this.yb = h.setTimeout(y(this.g, this), 0);
        this.b = a
    }
    Ff.prototype.g = function() {
        delete Ef[this.yb];
        throw this.b;
    }
    ;
    Ff.prototype.Bu = function() {
        h.clearTimeout(this.yb)
    }
    ;
    var Ef = {};
    function Gf(a, b) {
        var c = b || {}
          , e = c.document || document
          , f = document.createElement("SCRIPT")
          , g = {
            ct: f,
            ka: void 0
        }
          , k = new Bf(Hf,g)
          , l = null
          , n = null != c.timeout ? c.timeout : 5E3;
        0 < n && (l = window.setTimeout(function() {
            If(f, !0);
            k.zh(new Jf(1,"Timeout reached for loading script " + a))
        }, n),
        g.ka = l);
        f.onload = f.onreadystatechange = function() {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (If(f, c.qz || !1, l),
            k.callback(null))
        }
        ;
        f.onerror = function() {
            If(f, !0, l);
            k.zh(new Jf(0,"Error while loading script " + a))
        }
        ;
        nc(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        Kf(e).appendChild(f);
        return k
    }
    function Kf(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }
    function Hf() {
        if (this && this.ct) {
            var a = this.ct;
            a && "SCRIPT" == a.tagName && If(a, !0, this.ka)
        }
    }
    function If(a, b, c) {
        null != c && h.clearTimeout(c);
        a.onload = p;
        a.onerror = p;
        a.onreadystatechange = p;
        b && window.setTimeout(function() {
            zc(a)
        }, 0)
    }
    function Jf(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        pa.call(this, c);
        this.b = a
    }
    B(Jf, pa);
    function Lf(a) {
        if ("function" == typeof a.ma)
            a = a.ma();
        else if (ea(a) || w(a))
            a = a.length;
        else {
            var b = 0, c;
            for (c in a)
                b++;
            a = b
        }
        return a
    }
    function Mf(a) {
        if ("function" == typeof a.ua)
            return a.ua();
        if (w(a))
            return a.split("");
        if (ea(a)) {
            for (var b = [], c = a.length, e = 0; e < c; e++)
                b.push(a[e]);
            return b
        }
        return ob(a)
    }
    function Nf(a) {
        if ("function" == typeof a.Jb)
            return a.Jb();
        if ("function" != typeof a.ua) {
            if (ea(a) || w(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            return pb(a)
        }
    }
    function Of(a, b, c) {
        if ("function" == typeof a.forEach)
            a.forEach(b, c);
        else if (ea(a) || w(a))
            F(a, b, c);
        else
            for (var e = Nf(a), f = Mf(a), g = f.length, k = 0; k < g; k++)
                b.call(c, f[k], e && e[k], a)
    }
    function Pf(a, b, c) {
        if ("function" == typeof a.every)
            return a.every(b, c);
        if (ea(a) || w(a))
            return Na(a, b, c);
        for (var e = Nf(a), f = Mf(a), g = f.length, k = 0; k < g; k++)
            if (!b.call(c, f[k], e && e[k], a))
                return !1;
        return !0
    }
    ;function Qf(a) {
        this.b = new Ud;
        a && this.wq(a)
    }
    function Rf(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ha] || (a[ha] = ++ia)) : b.substr(0, 1) + a
    }
    d = Qf.prototype;
    d.ma = function() {
        return this.b.ma()
    }
    ;
    d.add = function(a) {
        this.b.Ub(Rf(a), a)
    }
    ;
    d.wq = function(a) {
        a = Mf(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.add(a[c])
    }
    ;
    d.zK = function(a) {
        a = Mf(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    }
    ;
    d.remove = function(a) {
        return this.b.remove(Rf(a))
    }
    ;
    d.clear = function() {
        this.b.clear()
    }
    ;
    d.Za = function() {
        return this.b.Za()
    }
    ;
    d.contains = function(a) {
        return this.b.Ih(Rf(a))
    }
    ;
    d.uQ = function(a) {
        return Pf(a, this.contains, this)
    }
    ;
    d.MS = function(a) {
        var b = new Qf;
        a = Mf(a);
        for (var c = 0; c < a.length; c++) {
            var e = a[c];
            this.contains(e) && b.add(e)
        }
        return b
    }
    ;
    d.jH = function(a) {
        var b = this.clone();
        b.zK(a);
        return b
    }
    ;
    d.ua = function() {
        return this.b.ua()
    }
    ;
    d.clone = function() {
        return new Qf(this)
    }
    ;
    d.equals = function(a) {
        return this.ma() == Lf(a) && this.UI(a)
    }
    ;
    d.UI = function(a) {
        var b = Lf(a);
        if (this.ma() > b)
            return !1;
        !(a instanceof Qf) && 5 < b && (a = new Qf(a));
        return Pf(this, function(b) {
            var e = a;
            return "function" == typeof e.contains ? e.contains(b) : "function" == typeof e.wg ? e.wg(b) : ea(e) || w(e) ? G(e, b) : qb(e, b)
        })
    }
    ;
    d.Eb = function() {
        return this.b.Eb(!1)
    }
    ;
    function Sf(a, b) {
        this.g = void 0 != a ? a : ",";
        this.b = void 0 != b ? b : "YYYY/MM/DD"
    }
    d = Sf.prototype;
    d.NF = function(a) {
        return a ? a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, this.g) : "0"
    }
    ;
    d.MF = function(a) {
        var b = this.pC(a)
          , c = this.oC(a);
        a = this.qC(a);
        switch (this.b) {
        case "DD/MM/YYYY":
            return [c, b, a].join("/");
        case "DD.MM.YYYY":
            return [c, b, a].join(".");
        case "MM/DD/YYYY":
            return [b, c, a].join("/");
        default:
            return [a, b, c].join("/")
        }
    }
    ;
    d.oC = function(a) {
        return ("0" + a.getDate()).slice(-2)
    }
    ;
    d.pC = function(a) {
        return ("0" + (a.getMonth() + 1)).slice(-2)
    }
    ;
    d.qC = function(a) {
        return a.getFullYear().toString()
    }
    ;
    d.OF = function(a) {
        var b = a % 60;
        a /= 60;
        var c = 0;
        return 60 <= a ? (c = a / 60,
        [Math.floor(c), this.bm(a % 60), this.bm(b)].join(":")) : [Math.floor(a), this.bm(b)].join(":")
    }
    ;
    d.bm = function(a) {
        a = Math.floor(a);
        return 9 < a ? a : "0" + a
    }
    ;
    function Tf(a, b) {
        switch (a) {
        case "de":
            return new Sf(".","DD.MM.YYYY");
        case "fr":
            return new Sf(" ","DD/MM/YYYY");
        case "ru":
            return new Sf(" ","DD.MM.YYYY");
        case "nl":
        case "es":
        case "it":
        case "pt":
            return new Sf("","DD/MM/YYYY");
        case "en":
            switch (b) {
            case "GB":
                return new Sf(",","DD/MM/YYYY")
            }
            return new Sf(",","MM/DD/YYYY");
        default:
            return new Sf(",","YYYY/MM/DD")
        }
    }
    ;function Uf(a) {
        var b = [];
        a = Vf(a);
        for (var c in a)
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
    function Vf(a) {
        var b = {}, c;
        for (c in a) {
            var e = a[c];
            "undefined" !== typeof e && null !== e && "" !== e && (b[c] = Wf(e || 0))
        }
        return b
    }
    function Wf(a) {
        if (!isNaN(a)) {
            var b = parseInt(a, 10);
            if (!isNaN(b))
                return Number(a)
        }
        if ("string" === typeof a && "" === a.trim())
            return a;
        b = String(a).toLowerCase();
        return "true" === b || !0 == a ? !0 : "false" === b || !1 == a ? !1 : a
    }
    function Xf(a) {
        a = a.replace(/^\?/, "");
        a = a.split("&");
        for (var b = {}, c, e = 0, f = a.length; e < f; ++e)
            c = a[e].split("="),
            b[c.shift()] = Wf(c.join("="));
        return b
    }
    function Yf(a, b) {
        sb(b) || (a += "?" + Uf(b));
        return a
    }
    ;function Zf(a, b) {
        this.g = a;
        this.l = b;
        this.b = null
    }
    Zf.$inject = ["applicationPath", "$http"];
    Zf.prototype.load = function(a, b) {
        var c = y(function(a) {
            this.k(a);
            b()
        }, this)
          , e = this.g + a.replace(/(.*)/, "/locale/messages-$1.json");
        this.l.get(e).success(c).error(gb(c))
    }
    ;
    Zf.prototype.h = function(a, b, c) {
        var e = a;
        sb(this.b) || (b = this.j(a, b),
        c && a == this.b[b] && this.b[c] ? e = this.b[c] : this.b[b] && (e = this.b[b]));
        return e
    }
    ;
    Zf.prototype.k = function(a) {
        this.b = a || {}
    }
    ;
    Zf.prototype.j = function(a, b) {
        var c = String(a + b).toLowerCase(), e = 0, f, g;
        for (f = 0; f < c.length; ++f)
            g = c.charCodeAt(f),
            e = (e << 5) - e + g,
            e &= -2147483649;
        return String(e)
    }
    ;
    function $f() {}
    d = $f.prototype;
    d.lf = function(a, b, c) {
        return new jf(a,b,c)
    }
    ;
    d.AB = function(a, b) {
        return new kf(a,b)
    }
    ;
    d.fu = function(a, b, c) {
        return new lf(a,b,c)
    }
    ;
    d.hc = function() {
        return new Date
    }
    ;
    d.Oi = function(a, b) {
        return setInterval(a, b)
    }
    ;
    d.Oh = function(a) {
        clearInterval(a)
    }
    ;
    d.setTimeout = function(a, b) {
        return setTimeout(a, b)
    }
    ;
    d.clearTimeout = function(a) {
        clearTimeout(a)
    }
    ;
    function ag(a, b, c) {
        this.J = a;
        this.k = b;
        this.l = c;
        this.j = this.b = this.Ea = this.h = null;
        this.g = 1;
        this.Lu()
    }
    ag.$inject = ["$window", "messages", "time"];
    d = ag.prototype;
    d.hH = function(a) {
        !this.Ea || this.ql(this.Ea) ? this.l.setTimeout(a, 0) : this.k.load(this.Ea, a)
    }
    ;
    d.P = function(a) {
        if (!a)
            return "";
        if (-1 == a.indexOf("[["))
            return a;
        var b = "", c, e = 0;
        do
            if (c = a.indexOf("[[", e),
            0 < e && (e += 2),
            0 <= c ? (b += a.slice(e, c),
            e = a.indexOf("]]", c)) : (b += a.slice(e),
            e = -1),
            0 <= c && 0 <= e)
                var f = a.slice(c + 2, e)
                  , b = b + this.FK(f);
        while (0 <= c && 0 <= e);
        return b
    }
    ;
    d.Yd = function(a) {
        return this.h.NF(a)
    }
    ;
    d.aj = function(a) {
        return this.h.OF(a)
    }
    ;
    d.zv = function(a) {
        return this.h.MF(a)
    }
    ;
    d.WE = function() {
        return G(["ja_JP", "zh_CN", "zh_HK", "zh_TW"], this.Ea)
    }
    ;
    d.Lu = function() {
        this.TD() ? this.g = 4 : this.RD() ? this.g = 2 : this.SD() ? this.g = 3 : this.UD();
        this.VD()
    }
    ;
    d.VD = function() {
        this.b = this.Ea.split("_")[0];
        this.h = Tf(this.b, this.j)
    }
    ;
    d.Il = function(a) {
        a && 1 < a.indexOf("_") && (this.j = a.split("_")[1])
    }
    ;
    d.FK = function(a) {
        var b = a.split("|");
        if (2 > b.length)
            return a;
        var c;
        (a = b[b.length - 1]) && !isNaN(a) && (c = b.pop());
        a = b.pop();
        b = b.join("|");
        return this.k.h(b, a, c)
    }
    ;
    d.TD = function() {
        var a = Xf(this.J.location.search).hl || ""
          , a = a.replace("-", "_");
        this.Ea = this.Ms(a);
        this.Il(a);
        return !!this.Ea
    }
    ;
    d.RD = function() {
        var a = this.J && this.J.environment && this.J.environment.language;
        if (a)
            for (var b = this.qH(a), c = 0; c < b.length; ++c)
                if (a = this.Ls(b[c])) {
                    if (this.ql(a))
                        break;
                    this.Ea = a;
                    this.Il(b[c]);
                    return !0
                }
        return !1
    }
    ;
    d.SD = function() {
        var a = (this.J.navigator.language || this.J.navigator.userLanguage || this.J.navigator.systemLanguage || this.J.navigator.browserLanguage || "").replace("-", "_");
        this.Ea = this.Ms(a);
        this.Il(a);
        return !!this.Ea
    }
    ;
    d.qH = function(a) {
        return La(a.split(","), function(a) {
            return ta(a.split(";")[0].replace("-", "_"))
        })
    }
    ;
    d.Ls = function(a) {
        if (/^[\s\xa0]*$/.test(null == a ? "" : String(a)) || 2 > a.length)
            return null;
        var b = Oa(yd, this.fm, a);
        if (!b)
            for (var c in zd)
                if (Oa(zd[c], this.fm, a)) {
                    b = xd[c];
                    break
                }
        !b && 1 < a.indexOf("_") && (b = Oa(yd, this.fm, a.split("_")[0]));
        return b
    }
    ;
    d.fm = function(a) {
        return 0 == ua(this, a.substr(0, this.length))
    }
    ;
    d.Ms = function(a) {
        a = this.Ls(a);
        return !this.ql(a) && a || null
    }
    ;
    d.ql = function(a) {
        return "en_US" == a
    }
    ;
    d.UD = function() {
        this.Ea = "en_US"
    }
    ;
    function bg(a, b) {
        var c = a.split(b)
          , e = c.shift();
        c.forEach(function(a) {
            var b = e;
            a = a && a.length ? a.charAt(0).toUpperCase() + a.slice(1) : a;
            e = b + a
        });
        return e
    }
    function cg(a) {
        return a ? a.toLowerCase().replace(/(^\s+|\s+$)/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9_\-]/g, "") : ""
    }
    function dg(a, b) {
        if (isNaN(a))
            return "0%";
        b = isNaN(b) ? 100 : b;
        return Math.round(a * b) + "%"
    }
    function eg(a, b, c) {
        return a.replace(/\{([^\{]*)\}([\/])*/gm, function(a, f, g) {
            (a = b[f]) && g && (a = a + "/");
            return void 0 !== a ? (c && (b[f] = null),
            a) : ""
        })
    }
    ;function fg(a) {
        this.J = a;
        this.b = {}
    }
    fg.prototype.qa = function(a) {
        switch (a) {
        case 7:
            this.b = {
                917525: 177,
                917526: 176
            };
            break;
        case 1:
            this.b = {
                412: 227,
                413: 178,
                415: 250,
                417: 228,
                424: 177,
                425: 176,
                461: 27
            };
            break;
        case 2:
            this.b = {
                917507: 19,
                917523: 227,
                917524: 228,
                917528: 250,
                917777: 27
            };
            break;
        case 3:
            this.b = {
                195: 227,
                196: 228,
                425: 176,
                424: 177
            };
            break;
        case 4:
            this.b = {
                29443: 13,
                29460: 38,
                29461: 40,
                4: 37,
                5: 39,
                27: -1,
                69: 227,
                70: 178,
                71: 250,
                72: 228,
                74: 19,
                88: 27,
                1078: 176,
                1080: 177
            };
            break;
        case 5:
            this.b = {
                415: 250,
                19: 19,
                413: 178,
                465: 228,
                417: 228,
                412: 227,
                425: 176,
                463: 177,
                424: 177
            };
            break;
        case 6:
            this.b = {
                238: 227,
                239: 228
            };
            break;
        case 8:
            this.b = {
                461: 27,
                415: 250,
                413: 178,
                417: 228,
                412: 227,
                48: 83
            };
            break;
        case 9:
            this.b = {
                166: 27,
                113: 227,
                114: 228,
                115: 177,
                116: 176
            }
        }
        this.J.VK_FAST_FWD && (this.b[this.J.VK_FAST_FWD] = 228);
        this.J.VK_REWIND && (this.b[this.J.VK_REWIND] = 227);
        this.J.VK_TRACK_PREV && (this.b[this.J.VK_TRACK_PREV] = 177);
        this.J.VK_TRACK_NEXT && (this.b[this.J.VK_TRACK_NEXT] = 176);
        this.J.VK_PLAY && (this.b[this.J.VK_PLAY] = 250);
        this.J.VK_STOP && (this.b[this.J.VK_STOP] = 178)
    }
    ;
    fg.prototype.g = function(a) {
        return this.b[a] || a
    }
    ;
    fg.inject = ["window"];
    function gg(a, b, c, e, f, g) {
        this.J = a;
        this.aa = b;
        this.O = c;
        this.wm = e;
        this.xm = f;
        this.Va = g;
        this.ia = this.J && this.J.location || {};
        this.$a = this.F = "";
        this.ac = [];
        this.Eg = [];
        this.OK = "TVHTML5";
        this.NK = "4";
        this.b = this.h = "";
        this.C = new Qf;
        this.Qd = {};
        this.om = this.Aa = this.Vd = this.lm = this.Ut = this.jm = this.Bi = this.Vt = this.Pa = this.pm = this.Wa = this.Z = this.km = this.Wt = this.V = this.Ei = this.qm = this.Di = this.zg = this.Bg = this.rb = this.Ag = this.za = this.um = this.Xt = this.Kc = this.Cg = this.Jc = !1;
        this.Rd = this.Wd = this.sm = this.H = this.Pd = this.Ha = this.Ja = "";
        this.gb = null;
        this.na = 0;
        this.G = {};
        this.forcedExperiments = this.Fg = this.ga = this.w = this.Dg = this.cssPrefix = this.Oa = "";
        this.Td = new Qf;
        this.forcedOffExperiments = "";
        this.kf = new Qf;
        this.gdataRegionId = "";
        this.initAutoplay = 1;
        this.initSearchQuery = this.initRow = this.initPlaylistId = this.initDialog = this.initChannelId = "";
        this.initTime = 0;
        this.additionalDataUrlForDial = this.initReversePairingCode = this.initVideoId = "";
        this.isChromelessContext = this.isPlayOnlyContext = this.j = this.Ud = this.k = this.Ci = this.l = this.g = this.yg = this.I = !1;
        this.tm = !0;
        this.QK = this.Sd = this.pa = this.isLowPerformingSearch = this.PK = this.N = this.Ai = this.isLimitedGraphics = this.usePaidScope = this.useInnerTubeWatchNext = this.useReleaseInnerTube = this.useTestInnerTube = this.useInnerTube = !1;
        this.keyMapId = 0;
        this.supportsSingleVideoTag = !1;
        this.hm = 5;
        this.reversedSelectionKeys = !1;
        this.nm = 300;
        this.RK = 1500;
        this.enableVideoVerificationTokens = !1;
        this.supportsAdaptiveBitrate = !0;
        this.supportsPaidContent = this.supportsNetworkRetry = this.supportsNativeOsk = this.supportsHardwareKeyboard = this.im = this.supportsDrm = this.vm = this.supportsCors = !1;
        this.supportsPairing = !0;
        this.supportsSearchSuggestion = this.supportsPointer = !1;
        this.supportsMouseOverSearch = !0;
        this.supportsAnimation = this.hf = this.jf = this.supportsSounds = !1;
        this.supportsTranslateZ = !0;
        this.isVideoInfoVisible = this.mm = this.supportsBackgrounds = this.enhanceHdDrmPlayback = this.supportsLive = this.useStageGdata = !1;
        this.requestVideoQuality = "";
        this.Ia = NaN;
        this.loopRows = !1;
        this.launch = "";
        this.o = !1;
        this.M = "hqdefault";
        this.qb = "channel.banner.tv.image.url";
        this.rm = !1;
        this.Yt = "debugjs env_cssPrefix env_enhanceHdDrmPlayback env_forcedExperiments env_forcedOffExperiments env_gdataRegionId env_isChromelessContext env_isLimitedGraphics env_isLowPerformingSearch env_isVideoInfoVisible env_keyMapId env_reversedSelectionKeys env_supportsAdaptiveBitrate env_supportsAnimation env_supportsBackgrounds env_supportsCors env_supportsDrm env_supportsHardwareKeyboard env_supportsLive env_supportsNetworkRetry env_supportsPaidContent env_supportsPairing env_supportsPointer env_supportsSearchSuggestion env_supportsMouseOverSearch env_supportsSingleVideoTag env_supportsSounds env_supportsTranslateZ env_useInnerTube env_useStageGdata env_useTestInnerTube env_useReleaseInnerTube env_useInnerTubeWatchNext env_requestVideoQuality label loader".split(" ");
        this.p = {
            additionalDataUrl: "additionalDataUrlForDial",
            e: "initErrorCode",
            isChromelessContext: "isChromelessContext",
            launch: "launch",
            loopRows: "loopRows",
            pairingCode: "initReversePairingCode",
            reversePairingCode: "initReversePairingCode",
            send_mdx_vvts: "enableVideoVerificationTokens"
        };
        this.p.autoplay = "initAutoplay";
        this.p.c = "initChannelId";
        this.p.dialog = "initDialog";
        this.p.list = "initPlaylistId";
        this.p.q = "initSearchQuery";
        this.p.row = "initRow";
        this.p.t = "initTime";
        this.p.v = "initVideoId";
        this.Zt()
    }
    d = gg.prototype;
    d.Zt = function() {
        this.eI();
        this.TH();
        this.cI();
        this.WH();
        this.VH();
        this.dI();
        this.fI();
        this.bI();
        this.hI();
        this.YH();
        this.ZH();
        this.XH();
        this.gI();
        this.aI();
        this.$H();
        this.UH()
    }
    ;
    d.eI = function() {
        this.sm = this.J.loader;
        this.Rd = this.J.label;
        var a = this.J.environment || {};
        this.H = a.platform || "";
        this.h = a.brand;
        this.b = a.model;
        this.F = a.browser;
        this.$a = a.browser_version;
        this.Ja = a.os;
        this.Ha = a.os_version;
        this.Pd = a.network;
        this.Oa = a.country;
        this.Ia = a.start_time;
        this.oz(a.experiments);
        this.I = !!a.debug;
        this.Qd = a;
        this.yg = window.devjs;
        this.gdataRegionId = G(od, this.Oa) ? this.Oa : ""
    }
    ;
    d.TH = function() {
        if ("Steel" == this.F)
            this.za = this.um = !0;
        else if (this.nd("Explorer"))
            this.Cg = !0;
        else if (this.nd("Opera"))
            this.l = !0;
        else if (this.nd("Firefox"))
            this.Kc = !0;
        else if (this.nd("Mozilla") || this.Kc)
            this.Xt = !0;
        else if (this.nd("Chrome") || this.nd("GoogleTV"))
            this.za = !0
    }
    ;
    d.cI = function() {
        this.rb = !(!this.h && !this.b);
        this.w = "YouTube TV";
        switch (this.h && this.h.toLowerCase()) {
        case "boxee":
            this.Jc = !0;
            this.w = "Boxee";
            break;
        case "cht":
            this.Ag = !0;
            break;
        case "grundig":
            this.zg = !0;
            break;
        case "humax":
        case "freesat":
        case "freesat/1.0":
            this.Di = !0;
            break;
        case "realtek":
            this.Wt = !0;
            break;
        case "roku":
            this.km = !0;
            break;
        case "sony":
            this.Wa = !0;
            "PS3" !== this.b && (this.pm = !0);
            break;
        case "samsung":
            this.Z = !0;
            break;
        case "lg":
            this.V = !0;
            break;
        case "panasonic":
            this.Pa = !0;
            this.N || (this.Vt = !0);
            break;
        case "philipstv":
            this.Bi = !0;
            break;
        case "pioneer":
            this.jm = !0;
            break;
        case "pure":
            this.Ut = !0;
            break;
        case "telecomitalia":
            this.qm = !0;
            break;
        case "toshiba":
            this.lm = !0;
            -1 < this.b.indexOf("13A_NAEU_") && (this.Aa = !0);
            break;
        case "tivo":
            this.Vd = !0;
            break;
        case "vizio":
            this.om = !0
        }
        switch (this.b && this.b.toLowerCase()) {
        case "ps3":
            this.Wa && (this.k = !0,
            this.w = "Sony PS3",
            "steel" == this.F.toLowerCase() && "2.00" == this.$a && (this.Ud = !0));
            break;
        case "eureka":
            "Google" === this.h && (this.g = !0,
            this.w = "Chromecast",
            this.isChromelessContext = !0);
            break;
        case "nexus foo":
            this.Ci = !0;
            break;
        case "ipc1100":
        case "vms1100":
            this.Ei = "MMI" === this.h;
            break;
        case "viera":
            this.w = "Viera";
            break;
        case "wiiu":
            this.j = !0;
            this.w = "Wii U";
            break;
        case "xboxone":
            this.o = !0,
            this.w = "Xbox One"
        }
        this.nd("GoogleTV") && (this.Bg = !0);
        this.za = this.za || this.V || this.Z;
        this.keyMapId = this.xu();
        this.gb = this.j ? "NINTENDO" : null;
        this.cssPrefix = this.wu();
        "tv" === this.H.toLowerCase() ? this.ga = "tv" : window.environment.cmodel || (this.ga = "desktop")
    }
    ;
    d.WH = function() {}
    ;
    d.VH = function() {
        this.tm = !this.Pa;
        this.vm = this.k || this.j || this.o;
        this.supportsSingleVideoTag = this.l && !this.Jc || this.g || this.Z || this.Bg || this.Ud || this.j;
        this.supportsDrm = !this.k;
        this.enhanceHdDrmPlayback = this.j || this.g || this.o || this.Ci;
        this.im = this.rb;
        this.supportsHardwareKeyboard = this.Pa && !this.l || this.um || this.V || !this.rb || this.Vd || this.om;
        this.supportsNativeOsk = this.j;
        this.supportsNetworkRetry = this.g;
        this.supportsPointer = this.V;
        this.jf = this.j;
        var a = Hb();
        if (a && this.g && (a = /CrKey [A-Za-z0-9_]+ ([0-9\.]+)/.exec(a)) && 1 < a.length) {
            var b = a[1].split(".")
              , a = 0 < b.length && parseInt(b[0], 10) || 0
              , b = 1 < b.length && parseInt(b[1], 10) || 0;
            if (1 < a || 1 == a && 1 <= b)
                this.hf = !0
        }
    }
    ;
    d.dI = function() {
        this.supportsPaidContent = !this.k
    }
    ;
    d.fI = function() {
        this.xm.isSupported() && (this.reversedSelectionKeys = this.xm.areKeysReversed)
    }
    ;
    d.bI = function() {
        this.N = this.Pa && ("DMP-BD79_89" === this.b || "DMP-MS10" === this.b || this.yc("BD 13S01") || this.yc("BD 13S02") || this.yc("BDT220"));
        this.Wa && (this.pa = !this.b || "N/A" == this.b || this.yc("BDP") || this.yc("CTV") || this.yc("Presto/2.10") || this.yc("BRAVIA") && this.yc("mips"));
        this.Sd = this.lm && ("BDX3400KU" === this.b || "BDX5400KU" === this.b || this.Aa);
        this.Dv = this.jm && "BDP-160" === this.b;
        this.isLimitedGraphics = this.pa || this.N || this.Sd || this.Dv || this.Jc || this.km;
        this.Ai = this.Wa && !this.k;
        this.supportsAnimation = !this.isLimitedGraphics;
        this.isLowPerformingSearch = this.N;
        this.supportsSearchSuggestion = !this.N && !this.j && !G(["zh_CN", "zh_HK", "ja_JP", "ko_KR", "zh_TW"], this.aa.Ea);
        this.supportsBackgrounds = !this.isLimitedGraphics && !this.isPlayOnlyContext && !this.g;
        if (this.pa || this.N || this.Sd)
            this.nm = 1E3;
        this.supportsTranslateZ = this.supportsAnimation && !this.l
    }
    ;
    d.ZH = function() {
        this.k || (this.enableVideoVerificationTokens = !0);
        this.useInnerTube = this.useInnerTube || this.useTestInnerTube || this.useReleaseInnerTube || !this.k && !this.o && this.sc(ld);
        this.useInnerTubeWatchNext = this.useInnerTubeWatchNext || this.sc(md);
        this.usePaidScope = this.sc(id);
        this.supportsSounds = this.supportsSounds || this.sc(gd) && this.k || this.cD(gd);
        this.mm = this.supportsBackgrounds && !this.Bi && !this.Vd;
        this.supportsCors = this.supportsCors || !(this.l && this.yc("11.10")) && this.sc(kd);
        if (this.k || this.j)
            this.rm = !0;
        this.sc(hd) && (this.hm = 10);
        this.supportsMouseOverSearch = !this.o
    }
    ;
    d.hI = function() {
        if (this.ia && (this.ia.search || this.ia.hash)) {
            var a = this.ia.search || ""
              , a = a + (this.ia.hash || "")
              , a = a.replace(/\#[^\?]*\??/, "&");
            this.OI(a)
        }
    }
    ;
    d.YH = function() {
        this.forcedExperiments && (this.Fs(String(this.forcedExperiments), this.Td),
        this.C.wq(this.Td));
        this.forcedOffExperiments && (this.Fs(String(this.forcedOffExperiments), this.kf),
        this.C = this.C.jH(this.kf))
    }
    ;
    d.XH = function() {
        this.Fg = this.C.ua().map(function(a) {
            return "exp-" + a
        }).join(" ")
    }
    ;
    d.gI = function() {
        var a = []
          , b = cg(this.h);
        b && a.push(b);
        (b = cg(this.b)) && a.push(b);
        this.ga && a.push(this.ga);
        this.l && a.push("opera");
        this.g && a.push("eureka");
        this.Aa && a.push("toshiba-mstar");
        this.reversedSelectionKeys && a.push("reversed-keys");
        this.aa && a.push("lang-" + this.aa.b);
        this.isLimitedGraphics && a.push("limited-graphics");
        this.I && this.O.Y() && a.push("debug");
        this.supportsPointer && a.push("pointer");
        this.Dg = a.join(" ")
    }
    ;
    d.aI = function() {
        this.wm.qa(this.keyMapId)
    }
    ;
    d.$H = function() {
        var a = m("screen.width", this.J);
        if (a) {
            var b = function(b) {
                return a >= b[0] && a <= b[1]
            };
            this.M = rb(Cd, b) || this.M;
            this.qb = rb(Dd, b) || this.qb
        }
    }
    ;
    d.UH = function() {
        "desktop" === this.ga ? (this.na = 100,
        this.G = {}) : this.N || this.pa ? (this.na = 0,
        this.G = {}) : (this.na = 0,
        this.G = {},
        this.G.branding = 10);
        this.G.channel_paid_info = 200;
        this.G.video_like_value = 200
    }
    ;
    d.OI = function(a) {
        a = Xf(a);
        var b = [], c;
        for (c in a) {
            var e = Wf(a[c])
              , f = 0 === c.indexOf("env_")
              , g = f ? c.substr(4) : c;
            this.Z && (g = this.AG(g, e));
            -1 < this.Yt.indexOf(c) ? (this.I = !0,
            this.Eg.push(c),
            f ? this[g] = e : "label" == c && (this.Wd = e)) : f ? this.ac.push(c + "=" + e) : (f = "isPlayOnlyContext" == g ? g : this.p[g]) && (this[f] = e);
            b.push(c + "=" + e)
        }
        0 < this.Eg.length && (this.O.push("WARNING: REMOVE DEBUG QUERY PARAMETERS "),
        this.O.push("[" + b.join(", ") + "] "),
        this.O.push("BEFORE PRODUCTION RELEASE."));
        0 < this.ac.length && (this.O.push("\n\n"),
        this.O.push("ERROR: UNEXPECTED PARAMETER(S): "),
        this.O.push(this.ac.join(", ")))
    }
    ;
    d.AG = function(a, b) {
        return "isChromelessContext" == a || "launch" == a && ("search" == b || "social" == b) ? "isPlayOnlyContext" : a
    }
    ;
    d.Fs = function(a, b) {
        var c = decodeURIComponent(a).split(","), e;
        for (e in c) {
            var f = parseInt(c[e], 10);
            b.add(f)
        }
    }
    ;
    d.xu = function() {
        return this.V || this.Di || this.zg ? 1 : this.Z ? 4 : this.qm ? 6 : this.Ei ? 2 : this.pm ? 5 : this.Ud || this.j || this.o ? 9 : this.Ag ? 7 : this.Aa ? 8 : this.l ? 3 : 0
    }
    ;
    d.oz = function(a) {
        if (a)
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                c && this.C.add(c)
            }
    }
    ;
    d.sc = function(a) {
        return this.C.contains(a.id)
    }
    ;
    d.cD = function(a) {
        return this.Td.contains(a.id) && !this.kf.contains(a.id)
    }
    ;
    d.fq = function(a) {
        return a in this.Qd && this.Qd[a]
    }
    ;
    d.nd = function(a) {
        var b = this.F || Hb() || "";
        return D(b, a)
    }
    ;
    d.yc = function(a) {
        var b = Hb() || "";
        return D(b, a)
    }
    ;
    d.wu = function() {
        return this.l ? "-O" : this.Kc ? "-moz" : this.Cg ? "-ms" : "-webkit"
    }
    ;
    d.tc = function() {
        return {
            c: "TVHTML5",
            cbr: this.F,
            cbrand: this.h,
            cbrver: this.$a,
            cmodel: this.b,
            cnetwork: this.Pd,
            cos: this.Ja,
            cosver: this.Ha,
            cplatform: this.H,
            cver: "4"
        }
    }
    ;
    d.hv = function() {
        var a = {};
        this.h && (a.cbrand = this.h);
        this.b && (a.cmodel = this.b);
        this.H && (a.cplatform = this.H);
        a.e = this.tf();
        a.lcl = this.aa.Ea;
        a.lex = this.aa.g;
        a.l_gr = this.isLimitedGraphics ? 1 : 0;
        return a
    }
    ;
    d.vF = function() {
        var a = {};
        this.h && (a.psd_brand = this.h);
        this.b && (a.psd_model = this.b);
        this.H && (a.psd_platform = this.H);
        a.hl = this.aa.Ea;
        return a
    }
    ;
    d.Rr = function(a) {
        this.Va.isSupported() && (a.platformUserName = this.Va.username,
        a.platformUserIcon = this.Va.avatarUrl)
    }
    ;
    d.qA = function(a) {
        return this.wm.g(a)
    }
    ;
    d.Oz = function(a) {
        return this.G[a] || this.na
    }
    ;
    d.oG = function() {
        var a = {
            "Loader, Label": this.sm + ", " + this.Rd,
            Device: "Unknown",
            "User Agent": Hb(),
            "Key Map": "None"
        };
        this.Wd && (a["Loader, Label"] += " (" + this.Wd + ")");
        var b = [];
        this.J.VK_FAST_FWD && b.push(" VK_FAST_FWD=" + this.J.VK_FAST_FWD);
        this.J.VK_REWIND && b.push(" VK_REWIND=" + this.J.VK_REWIND);
        this.J.VK_TRACK_PREV && b.push(" VK_TRACK_PREV=" + this.J.VK_TRACK_PREV);
        this.J.VK_TRACK_NEXT && b.push(" VK_TRACK_NEXT=" + this.J.VK_TRACK_NEXT);
        this.J.VK_PLAY && b.push(" VK_PLAY=" + this.J.VK_PLAY);
        this.J.VK_STOP && b.push(" VK_STOP=" + this.J.VK_STOP);
        0 < b.length && (a["Key Map"] = b.join());
        b = [];
        b.push(this.H || "Unknown Platform");
        b.push(this.h || "Unknown Brand");
        b.push(this.b || "Unknown Model");
        var c = "Unknown Browser";
        this.F && (c = this.F,
        this.$a && (c += " (" + this.$a + ")"));
        b.push(c);
        c = "Unknown OS";
        this.Ja && (c = this.Ja,
        this.Ha && (c += " (" + this.Ha + ")"));
        b.push(c);
        b.push(this.Pd || "Unknown Network");
        a.Device = b.join(", ");
        var b = "", e;
        for (e in nd)
            this.sc(nd[e]) && (b += nd[e].name + ", ");
        a["Active TV Experiments"] = b || "None";
        return a
    }
    ;
    d.tf = function() {
        return this.C && this.C.ua().join() || ""
    }
    ;
    gg.inject = "window locale debugModel keyMapModel systemApi accountApi".split(" ");
    function hg() {
        this.k = this.Pg = this.h = this.b = this.g = "";
        this.j = !1
    }
    hg.CACHE_TYPE = "branding";
    function ig(a, b) {
        this.imageUrl = "";
        this.Ba = a;
        this.serviceQuery = b;
        this.displayName = this.videoId = this.title = "";
        this.b = null;
        this.h = "";
        this.cw = 0;
        this.id = this.username = this.Qa = this.j = "";
        this.viewCount = this.videoCount = 0;
        this.kj = new hg;
        this.g = !1;
        this.platformUserIcon = this.platformUserName = ""
    }
    ig.CACHE_TYPE = "channel";
    function jg(a, b, c) {
        this.Ba = a;
        this.serviceQuery = b;
        this.Ka = c;
        this.H = this.F();
        this.C = null;
        this.Ng = "request-playback";
        this.activityDescription = "";
        this.Um = !1;
        this.k = null;
        this.Ni = this.Ji = "";
        this.channel = null;
        this.dislikesLabel = this.description = "";
        this.dislikesStyle = {};
        this.duration = 0;
        this.durationLabel = "";
        this.b = null;
        this.imageUrl = N.D + "/../img/no_thumbnail.jpg";
        this.I = this.o = !1;
        this.likesLabel = "";
        this.likesStyle = {};
        this.uploadedDate = null;
        this.videoId = this.title = this.uploadedDateLabel = "";
        this.viewCount = 0;
        this.viewCountLabel = "";
        this.p = this.g = !1;
        this.Wb = "videoTile"
    }
    jg.prototype.F = function() {
        return Bd[this.Ka] ? this.Ka : this.Ka + (this.serviceQuery || "")
    }
    ;
    jg.CACHE_TYPE = "video";
    function kg(a) {
        this.b = a;
        this.video = null;
        this.startTime = 0;
        this.g = this.xd = !1
    }
    kg.prototype.h = function(a, b, c) {
        var e = {
            list: this.video.H,
            start: this.startTime,
            video_id: this.video.videoId
        }, f;
        f = this.b.supportsNetworkRetry && !!this.b.fq("network_retry");
        f = Wf(f) ? "1" : "0";
        e.retryneterr = f;
        e.cenchd = Wf(this.b.enhanceHdDrmPlayback) ? "1" : "0";
        e.vq = this.b.requestVideoQuality;
        this.xd && (e.autoplay = "1");
        a && (e.oauth_token = a);
        this.video.k && (e.vvt = this.video.k);
        "RQ" == this.video.Ka && (e.feature = "RQdial" == this.video.H ? "ytremote_d" : "ytremote",
        e.mdx = "1");
        b && b.length && (e.ytr = b.join(","));
        c && (e.is_fling = "1");
        return e
    }
    ;
    kg.prototype.update = function(a, b, c, e) {
        this.j();
        this.video = a;
        this.startTime = b || 0;
        this.xd = !!c;
        this.g = !!e
    }
    ;
    kg.prototype.j = function() {
        this.videoId = "";
        this.startTime = 0;
        this.g = this.xd = !1
    }
    ;
    kg.inject = ["environmentModel"];
    function lg(a, b, c) {
        this.h = a;
        this.j = b;
        this.g = b[0];
        this.b = c
    }
    d = lg.prototype;
    d.ic = function(a) {
        a = a || this.h;
        a.$$phase || a.$digest()
    }
    ;
    d.zI = function() {
        return this.IJ() || this.JJ() || this.KJ()
    }
    ;
    d.IJ = function() {
        var a = this.g.activeElement !== this.g.body ? this.g.activeElement : null
          , b = this.oE(a);
        return a && b ? b : null
    }
    ;
    d.oE = function(a) {
        return angular.element(a).scope()
    }
    ;
    d.KJ = function() {
        return {
            $emit: function() {},
            $root: {}
        }
    }
    ;
    d.JJ = function() {
        return this.b && this.b.current && this.b.current.scope ? this.b.current.scope : null
    }
    ;
    lg.$inject = ["$rootScope", "$document", "$route"];
    function mg(a, b) {
        this.errorMessage = a;
        this.b = b;
        this.g = !1;
        this.h = null
    }
    ;function ng(a, b) {
        this.k = a;
        this.h = b
    }
    d = ng.prototype;
    d.get = function(a, b, c, e, f) {
        c = this.cm(c, e);
        b = Vf(b);
        a = eg(a, b, !0);
        a = Yf(a, b);
        c.send(a, "GET", null, f);
        return y(c.abort, c)
    }
    ;
    d.post = function(a, b, c, e, f, g) {
        e = this.cm(e, f);
        f = Vf(c);
        b = Vf(b);
        c = w(c) ? c : Uf(f);
        a = eg(a, b, !0);
        e.send(a, "POST", c, g);
        return y(e.abort, e)
    }
    ;
    d.MK = function(a, b, c, e, f, g) {
        e = this.cm(e, f);
        c = Vf(c);
        b = Vf(b);
        a = eg(a, b);
        a = Yf(a, c);
        e.send(a, "DELETE", null, g);
        return y(e.abort, e)
    }
    ;
    d.jsonp = function(a, b, c, e, f) {
        b = Vf(b);
        var g = !1
          , k = new this.h(eg(a, b),f);
        k.YC(3E4);
        var l = k.send(b, c, function(a) {
            if (e && !g) {
                var b = new mg;
                b.g = !0;
                b.h = a;
                e(b)
            }
        });
        return function() {
            g = !0;
            k.cancel(l)
        }
    }
    ;
    d.cm = function(a, b) {
        var c = new this.k;
        c.addEventListener("success", y(function(b) {
            b = b.target;
            a && a(this.transformResponse(b));
            b.Vb()
        }, this));
        c.addEventListener("error", function(a) {
            a = a.target;
            b && b(new mg(a.vh(),a.getStatus()));
            a.Vb()
        });
        return c
    }
    ;
    d.transformResponse = function(a) {
        var b = a.getResponseHeader("content-type"), c;
        0 <= b.indexOf("xml") ? c = a.qJ() : 0 <= b.indexOf("html") ? c = a.je() : 0 > b.indexOf("image") && (c = a.pJ());
        return c
    }
    ;
    ng.$inject = ["xhrBackend", "jsonpBackend"];
    function og(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
    function pg(a) {
        a = String(a);
        if (og(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function qg(a) {
        return eval("(" + a + ")")
    }
    function rg(a, b) {
        return (new sg(b)).g(a)
    }
    function sg(a) {
        this.b = a
    }
    sg.prototype.g = function(a) {
        var b = [];
        this.h(a, b);
        return b.join("")
    }
    ;
    sg.prototype.h = function(a, b) {
        switch (typeof a) {
        case "string":
            this.j(a, b);
            break;
        case "number":
            this.l(a, b);
            break;
        case "boolean":
            b.push(a);
            break;
        case "undefined":
            b.push("null");
            break;
        case "object":
            if (null == a) {
                b.push("null");
                break
            }
            if (v(a)) {
                this.k(a, b);
                break
            }
            this.o(a, b);
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof a);
        }
    }
    ;
    var tg = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , ug = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    sg.prototype.j = function(a, b) {
        b.push('"', a.replace(ug, function(a) {
            if (a in tg)
                return tg[a];
            var b = a.charCodeAt(0)
              , f = "\\u";
            16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
            return tg[a] = f + b.toString(16)
        }), '"')
    }
    ;
    sg.prototype.l = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? a : "null")
    }
    ;
    sg.prototype.k = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var e = "", f = 0; f < c; f++)
            b.push(e),
            e = a[f],
            this.h(this.b ? this.b.call(a, String(f), e) : e, b),
            e = ",";
        b.push("]")
    }
    ;
    sg.prototype.o = function(a, b) {
        b.push("{");
        var c = "", e;
        for (e in a)
            if (Object.prototype.hasOwnProperty.call(a, e)) {
                var f = a[e];
                "function" != typeof f && (b.push(c),
                this.j(e, b),
                b.push(":"),
                this.h(this.b ? this.b.call(a, e, f) : f, b),
                c = ",")
            }
        b.push("}")
    }
    ;
    function vg() {}
    ;function wg() {}
    B(wg, vg);
    wg.prototype.ma = function() {
        var a = 0;
        Sd(this.Eb(!0), function() {
            a++
        });
        return a
    }
    ;
    wg.prototype.clear = function() {
        var a = Td(this.Eb(!0))
          , b = this;
        F(a, function(a) {
            b.remove(a)
        })
    }
    ;
    function xg(a) {
        this.b = a
    }
    B(xg, wg);
    d = xg.prototype;
    d.xC = function() {
        if (!this.b)
            return !1;
        try {
            return this.b.setItem("__sak", "1"),
            this.b.removeItem("__sak"),
            !0
        } catch (a) {
            return !1
        }
    }
    ;
    d.gi = function(a, b) {
        try {
            this.b.setItem(a, b)
        } catch (c) {
            if (0 == this.b.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    d.get = function(a) {
        a = this.b.getItem(a);
        if (!w(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    d.remove = function(a) {
        this.b.removeItem(a)
    }
    ;
    d.ma = function() {
        return this.b.length
    }
    ;
    d.Eb = function(a) {
        var b = 0
          , c = this.b
          , e = new Qd;
        e.next = function() {
            if (b >= c.length)
                throw Pd;
            var e;
            e = c.key(b++);
            if (a)
                return e;
            e = c.getItem(e);
            if (!w(e))
                throw "Storage mechanism: Invalid value was encountered";
            return e
        }
        ;
        return e
    }
    ;
    d.clear = function() {
        this.b.clear()
    }
    ;
    d.key = function(a) {
        return this.b.key(a)
    }
    ;
    function yg() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.b = a
    }
    B(yg, xg);
    function zg(a, b) {
        if (H && !ac(9)) {
            Ag || (Ag = new Ud);
            this.fb = Ag.get(a);
            this.fb || (b ? this.fb = document.getElementById(b) : (this.fb = document.createElement("userdata"),
            this.fb.addBehavior("#default#userData"),
            document.body.appendChild(this.fb)),
            Ag.Ub(a, this.fb));
            this.Ql = a;
            try {
                this.GI()
            } catch (c) {
                this.fb = null
            }
        }
    }
    B(zg, wg);
    var Bg = {
        ".": ".2E",
        "!": ".21",
        "~": ".7E",
        "*": ".2A",
        "'": ".27",
        "(": ".28",
        ")": ".29",
        "%": "."
    }
      , Ag = null;
    d = zg.prototype;
    d.fb = null;
    d.Ql = null;
    function Cg(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
            return Bg[a]
        })
    }
    d.yC = function() {
        return !!this.fb
    }
    ;
    d.gi = function(a, b) {
        this.fb.setAttribute(Cg(a), b);
        this.Ul()
    }
    ;
    d.get = function(a) {
        a = this.fb.getAttribute(Cg(a));
        if (!w(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    d.remove = function(a) {
        this.fb.removeAttribute(Cg(a));
        this.Ul()
    }
    ;
    d.ma = function() {
        return this.am().attributes.length
    }
    ;
    d.Eb = function(a) {
        var b = 0
          , c = this.am().attributes
          , e = new Qd;
        e.next = function() {
            if (b >= c.length)
                throw Pd;
            var e;
            e = c[b++];
            if (a)
                return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            if (!w(e))
                throw "Storage mechanism: Invalid value was encountered";
            return e
        }
        ;
        return e
    }
    ;
    d.clear = function() {
        for (var a = this.am(), b = a.attributes.length; 0 < b; b--)
            a.removeAttribute(a.attributes[b - 1].nodeName);
        this.Ul()
    }
    ;
    d.GI = function() {
        this.fb.load(this.Ql)
    }
    ;
    d.Ul = function() {
        try {
            this.fb.save(this.Ql)
        } catch (a) {
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    d.am = function() {
        return this.fb.XMLDocument.documentElement
    }
    ;
    function Dg(a, b) {
        this.bf = a;
        this.Nd = b + "::"
    }
    B(Dg, wg);
    d = Dg.prototype;
    d.bf = null;
    d.Nd = "";
    d.gi = function(a, b) {
        this.bf.gi(this.Nd + a, b)
    }
    ;
    d.get = function(a) {
        return this.bf.get(this.Nd + a)
    }
    ;
    d.remove = function(a) {
        this.bf.remove(this.Nd + a)
    }
    ;
    d.Eb = function(a) {
        var b = this.bf.Eb(!0)
          , c = this
          , e = new Qd;
        e.next = function() {
            for (var e = b.next(); e.substr(0, c.Nd.length) != c.Nd; )
                e = b.next();
            return a ? e.substr(c.Nd.length) : c.bf.get(e)
        }
        ;
        return e
    }
    ;
    function Eg(a) {
        this.g = a;
        this.j = new sg
    }
    Eg.prototype.b = function(a, b) {
        t(b) ? this.g.gi(a, this.j.g(b)) : this.g.remove(a)
    }
    ;
    Eg.prototype.get = function(a) {
        var b;
        try {
            b = this.g.get(a)
        } catch (c) {
            return
        }
        if (null !== b)
            try {
                return pg(b)
            } catch (e) {
                throw "Storage: Invalid value was encountered";
            }
    }
    ;
    Eg.prototype.remove = function(a) {
        this.g.remove(a)
    }
    ;
    function Fg(a) {
        Eg.call(this, a)
    }
    B(Fg, Eg);
    function Gg(a) {
        this.data = a
    }
    function Hg(a) {
        return !t(a) || a instanceof Gg ? a : new Gg(a)
    }
    Fg.prototype.b = function(a, b) {
        Fg.A.b.call(this, a, Hg(b))
    }
    ;
    Fg.prototype.h = function(a) {
        a = Fg.A.get.call(this, a);
        if (!t(a) || a instanceof Object)
            return a;
        throw "Storage: Invalid value was encountered";
    }
    ;
    Fg.prototype.get = function(a) {
        if (a = this.h(a)) {
            if (a = a.data,
            !t(a))
                throw "Storage: Invalid value was encountered";
        } else
            a = void 0;
        return a
    }
    ;
    function Ig(a) {
        Eg.call(this, a)
    }
    B(Ig, Fg);
    Ig.prototype.b = function(a, b, c) {
        if (b = Hg(b)) {
            if (c) {
                if (c < A()) {
                    Ig.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = A()
        }
        Ig.A.b.call(this, a, b)
    }
    ;
    Ig.prototype.h = function(a, b) {
        var c = Ig.A.h.call(this, a);
        if (c) {
            var e;
            if (e = !b) {
                e = c.creation;
                var f = c.expiration;
                e = !!f && f < A() || !!e && e > A()
            }
            if (e)
                Ig.prototype.remove.call(this, a);
            else
                return c
        }
    }
    ;
    function Jg(a) {
        this.b = a
    }
    var Kg = /\s*;\s*/;
    d = Jg.prototype;
    d.GS = function() {
        return navigator.cookieEnabled
    }
    ;
    d.LJ = function(a) {
        return !/[;=\s]/.test(a)
    }
    ;
    d.MJ = function(a) {
        return !/[;\r\n]/.test(a)
    }
    ;
    d.jk = function(a, b, c, e, f, g) {
        if (!this.LJ(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (!this.MJ(b))
            throw Error('Invalid cookie value "' + b + '"');
        t(c) || (c = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(A() + 1E3 * c)).toUTCString();
        this.NJ(a + "=" + b + f + e + c + g)
    }
    ;
    d.get = function(a, b) {
        for (var c = a + "=", e = this.Zl(), f = 0, g; g = e[f]; f++) {
            if (0 == g.lastIndexOf(c, 0))
                return g.substr(c.length);
            if (g == a)
                return ""
        }
        return b
    }
    ;
    d.remove = function(a, b, c) {
        var e = this.SJ(a);
        this.jk(a, "", 0, b, c);
        return e
    }
    ;
    d.Jb = function() {
        return this.xi().keys
    }
    ;
    d.ua = function() {
        return this.xi().nt
    }
    ;
    d.Za = function() {
        return !this.$l()
    }
    ;
    d.ma = function() {
        return this.$l() ? this.Zl().length : 0
    }
    ;
    d.SJ = function(a) {
        return t(this.get(a))
    }
    ;
    d.wg = function(a) {
        for (var b = this.xi().nt, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    ;
    d.clear = function() {
        for (var a = this.xi().keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    d.NJ = function(a) {
        this.b.cookie = a
    }
    ;
    d.$l = function() {
        return this.b.cookie
    }
    ;
    d.Zl = function() {
        return (this.$l() || "").split(Kg)
    }
    ;
    d.xi = function() {
        for (var a = this.Zl(), b = [], c = [], e, f, g = 0; f = a[g]; g++)
            e = f.indexOf("="),
            -1 == e ? (b.push(""),
            c.push(f)) : (b.push(f.substring(0, e)),
            c.push(f.substring(e + 1)));
        return {
            keys: b,
            nt: c
        }
    }
    ;
    var Lg = new Jg(document);
    Lg.g = 3950;
    function Mg(a, b) {
        return Lg.get("yt-dev." + a, b)
    }
    function Ng(a, b, c) {
        return Lg.remove("yt-dev." + a, b || "/", c || "google.com")
    }
    ;function Og(a, b) {
        var c;
        b ? c = null : (c = new yg,
        (c = c.xC() ? a ? new Dg(c,a) : c : null) || (c = new zg(a || "UserDataSharedStore"),
        c = c.yC() ? c : null));
        this.b = c ? new Ig(c) : null
    }
    Og.prototype.g = function() {
        return !!this.b
    }
    ;
    Og.prototype.h = function(a, b, c, e) {
        c = c || 31104E3;
        this.remove(a);
        if (this.g())
            try {
                this.b.b(a, b, A() + 1E3 * c);
                return
            } catch (f) {}
        var g = "";
        if (e)
            try {
                g = escape(rg(b))
            } catch (k) {
                return
            }
        else
            g = escape(b);
        a = "yt-dev." + a;
        Lg.jk(a, g, c, "/", document.domain || "google.com")
    }
    ;
    Og.prototype.get = function(a, b) {
        var c = void 0
          , e = !this.g();
        if (!e)
            try {
                c = this.b.get(a)
            } catch (f) {
                e = !0
            }
        if (e && (c = Mg(a)) && (c = unescape(c),
        b))
            try {
                c = pg(c)
            } catch (g) {
                this.remove(a),
                c = void 0
            }
        return c
    }
    ;
    Og.prototype.remove = function(a) {
        this.g() && this.b.remove(a);
        Ng(a, "/", document.domain)
    }
    ;
    function P(a) {
        this.b = a
    }
    P.prototype.oc = function() {}
    ;
    function Pg(a) {
        this.b = a
    }
    B(Pg, P);
    Pg.prototype.oc = function() {
        var a = this.b.get("private_data");
        a && a["crash-data"] && (delete a["crash-data"],
        this.b.Da("private_data", a))
    }
    ;
    function Qg(a) {
        this.b = a
    }
    B(Qg, P);
    Qg.prototype.oc = function() {
        this.b.Da("needs_rental_auth_dialog", !0)
    }
    ;
    function Rg(a) {
        this.b = a
    }
    B(Rg, P);
    Rg.prototype.oc = function() {
        var a = this.b.get("recent-searches");
        if (a) {
            for (var b = 0, c = a.length; b < c; ++b) {
                var e = a[b];
                e.videoId = e.video ? e.video.videoId : null;
                delete e.video
            }
            this.b.Da("recent-searches", a)
        }
    }
    ;
    function Sg(a) {
        this.b = a
    }
    B(Sg, P);
    Sg.prototype.oc = function() {
        this.b.Da("needs_rental_auth_dialog", !0);
        var a = this.b.get("sound-enabled", void 0, !0);
        a && this.b.Da("sound-enabled", "false" !== a);
        for (var b = ["captions-settings", "mdx-paired-devices", "private_data", "device-retention-permission", "recent-searches"], a = 0, c = b.length; a < c; ++a)
            this.b.get(b[a], void 0);
        b = [["mdx-device-id", void 0], ["tv-refresh-token", 15768E3]];
        a = 0;
        for (c = b.length; a < c; ++a) {
            var e = this.b.get(b[a][0], void 0, !0);
            e && this.b.Da(b[a][0], e, b[a][1])
        }
    }
    ;
    function Tg(a) {
        this.b = a
    }
    B(Tg, P);
    Tg.prototype.oc = function() {
        this.b.remove("captions-settings")
    }
    ;
    function Ug(a) {
        this.b = a
    }
    B(Ug, P);
    Ug.prototype.oc = function() {
        for (var a = ["crash-count", "device-statistics", "activity-path", "spinner_log"], b = {}, c = a.length, e = 0; e < c; e++)
            b[a[e]] = this.b.get(a[e]);
        this.b.Da("private_data", b)
    }
    ;
    function Vg(a) {
        this.b = a
    }
    B(Vg, P);
    Vg.prototype.oc = function() {
        var a = this.b.get("private_data");
        if (a && a["crash-count"]) {
            var b = {
                startup: 0
            };
            b["crash-count"] = a["crash-count"];
            a["crash-data"] = b;
            delete a["crash-count"];
            this.b.Da("private_data", a)
        }
    }
    ;
    function Wg(a) {
        this.b = a
    }
    B(Wg, P);
    Wg.prototype.oc = function() {
        var a = this.b.get("leanback_oauth_renew");
        a && (this.b.get("tv-refresh-token") || this.b.Da("tv-refresh-token", a, 15768E3),
        this.b.remove("leanback_oauth_renew"))
    }
    ;
    function Xg(a) {
        this.b = a
    }
    B(Xg, P);
    Xg.prototype.oc = function() {
        for (var a = ["tv-access-token", "activity-path", "saved-searches", "spinner_log"], b = this.b.get("private_data"), c = 0, e = a.length; c < e; ++c) {
            var f = a[c];
            this.b.remove(f);
            b && delete b[f]
        }
        b && this.b.Da("private_data", b)
    }
    ;
    var Yg = {
        0: P,
        1: P,
        2: P,
        3: P,
        4: Ug,
        5: P,
        6: Vg,
        7: P,
        8: Wg,
        9: Xg,
        10: Pg,
        11: Qg,
        12: Rg,
        13: Sg,
        14: Tg
    }
      , Zg = {
        IP: "mdx-device-id",
        KP: "needs_rental_auth_dialog",
        MP: "mdx-paired-devices",
        PP: "private_data",
        QP: "device-retention-permission",
        SP: "recent-searches",
        TP: "tv-refresh-token",
        XP: "schema-version",
        YP: "sound-enabled"
    }
      , $g = {
        dL: "tv-access-token",
        eL: "activity-path",
        hL: "captions-settings",
        UP: "leanback_oauth_renew",
        WP: "saved-searches",
        ZP: "spinner_log"
    };
    function ah(a, b) {
        this.g = a;
        this.b = new Og("yt.leanback");
        if (this.b.g()) {
            var c = new Og("yt.leanback",!0);
            b.Ai && !this.xp(this.b) ? this.b = c : this.xp(c) && this.zz(c)
        }
        for (var e, c = this.get("schema-version", 31536E4) || 0; 15 > c; )
            e = Yg[c],
            e = new e(this),
            e.oc(),
            c++,
            this.Da("schema-version", c, 31536E4)
    }
    d = ah.prototype;
    d.xp = function(a) {
        return !!a.get("schema-version")
    }
    ;
    d.zz = function(a) {
        var b = Zg, c = [], e;
        for (e in b)
            c.push(b[e]);
        b = $g;
        for (e in b)
            c.push(b[e]);
        b = 0;
        for (e = c.length; b < e; ++b)
            a.remove(c[b])
    }
    ;
    d.Da = function(a, b, c, e) {
        this.b.h(a, b, c, !e)
    }
    ;
    d.get = function(a, b, c) {
        var e = this.b.get(a, !c);
        e && b && this.Da(a, e, b, c);
        return e
    }
    ;
    d.remove = function(a) {
        this.b.remove(a)
    }
    ;
    d.flush = function(a) {
        this.g.isSupported() && this.g.flush(a)
    }
    ;
    d.pG = function() {
        var a = {}, b;
        for (b in Zg) {
            var c = Zg[b]
              , e = this.get(c);
            "tv-refresh-token" == c && e && (e = "XXXX-" + e.substr(e.length - 5));
            a[c] = e
        }
        return JSON.stringify(a, null, " ")
    }
    ;
    ah.inject = ["storageApi", "environmentModel"];
    function bh(a, b, c, e) {
        K.call(this);
        this.b = a;
        this.p = b;
        this.o = c;
        this.O = e;
        this.H = this.G = 0;
        this.M = "SboVhoG9s0rNafixCSGGKXAT";
        this.N = [];
        this.C = null;
        this.I = 0;
        this.h = !!this.vf();
        this.g = !1;
        this.w = 0
    }
    B(bh, K);
    d = bh.prototype;
    d.ah = function(a) {
        a(!!this.vf(), this.h)
    }
    ;
    d.Ib = function(a) {
        var b = this.vf();
        if (b) {
            var c = this.ml();
            c ? a(c) : this.fp(b, a)
        } else
            a(null)
    }
    ;
    d.Ri = function() {
        return this.h
    }
    ;
    d.wd = function(a) {
        this.Dk();
        this.ys();
        this.WG();
        this.gs();
        this.fs(!1, a);
        this.w = 0
    }
    ;
    d.Dk = function() {
        this.p.clearTimeout(this.G);
        this.p.clearTimeout(this.H)
    }
    ;
    d.Sz = function(a) {
        a = a || 15;
        this.p.clearTimeout(this.H);
        this.H = this.p.setTimeout(y(function() {
            this.Dk()
        }, this), 1E3 * a)
    }
    ;
    d.fp = function(a, b) {
        var c = {
            client_id: this.ei(),
            client_secret: this.Yk(),
            refresh_token: a,
            grant_type: "refresh_token"
        };
        this.b.post("/o/oauth2/token", null, c, y(this.Sf, this, b), y(this.Fh, this, b))
    }
    ;
    d.Sf = function(a, b) {
        this.g && (this.g = !1,
        this.w++);
        var c = b.access_token
          , e = Math.round(0.9 * b.expires_in);
        this.qD(c, e);
        a(c)
    }
    ;
    d.Fh = function(a, b) {
        this.g = !1;
        b && 400 != b.b || this.wd(!0);
        a(null)
    }
    ;
    d.XF = function(a, b, c) {
        this.Dk();
        var e = {
            client_id: this.ei(),
            scope: "http://gdata.youtube.com"
        };
        this.b.post("/o/oauth2/device/code", null, e, y(function(c) {
            this.kC(c, a, b)
        }, this), y(function() {
            c()
        }, this))
    }
    ;
    d.OD = function(a) {
        (a && 401 == a.b || a.g) && (a = this.vf()) && !this.g && (5 <= this.w ? this.wd(!0) : (this.g = !0,
        this.fp(a, p)))
    }
    ;
    d.PD = function() {
        this.w = 0
    }
    ;
    d.kC = function(a, b, c) {
        this.ms(a.device_code, 1E3 * a.interval, c);
        b(a.user_code, 0.9 * Number(a.expires_in))
    }
    ;
    d.ms = function(a, b, c) {
        var e = {
            client_id: this.ei(),
            client_secret: this.Yk(),
            code: a,
            grant_type: "http://oauth.net/grant_type/device/1.0"
        }
          , f = y(function(e) {
            this.mC(e, a, b, c)
        }, this);
        this.b.post("/o/oauth2/token", null, e, f)
    }
    ;
    d.mC = function(a, b, c, e) {
        var f = "slow_down" == a.error;
        "authorization_pending" == a.error || f ? (f && (c *= 2),
        this.G = this.p.setTimeout(y(function() {
            this.ms(b, c, e)
        }, this), c)) : (this.ns(a.refresh_token),
        this.Sf(e, a))
    }
    ;
    d.ns = function(a) {
        this.o.Da("tv-refresh-token", a, 15768E3);
        this.o.flush()
    }
    ;
    d.vf = function() {
        return this.o.get("tv-refresh-token", 15768E3)
    }
    ;
    d.WG = function() {
        this.o.remove("tv-refresh-token");
        this.o.flush()
    }
    ;
    d.ys = function() {
        var a = this.vf();
        a && this.b.post("/o/oauth2/revoke", null, {
            token: a
        })
    }
    ;
    d.qD = function(a, b) {
        this.C = a;
        this.I = A() + 1E3 * b;
        this.fs(!0)
    }
    ;
    d.ml = function() {
        if (this.C && this.I > A())
            return this.C;
        this.gs();
        return ""
    }
    ;
    d.gs = function() {
        this.C = null;
        this.I = 0
    }
    ;
    d.fs = function(a, b) {
        var c = this.h;
        this.h = a;
        this.T("state:changed", a, c, b || !1)
    }
    ;
    d.Yk = function() {
        return "SboVhoG9s0rNafixCSGGKXAT"
    }
    ;
    d.ei = function() {
        return "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com"
    }
    ;
    bh.inject = ["ytHttp", "timeService", "localStorage", "environmentModel"];
    function ch(a, b, c) {
        this.J = a;
        this.k = c;
        this.b = {};
        this.h = b.hv();
        this.j = !1;
        this.g = [];
        this.J.jstiming && (this.b[this.J.jstiming.load.name] = this.J.jstiming.load,
        this.J.jstiming.load = null)
    }
    d = ch.prototype;
    d.vU = function(a) {
        var b = new this.J.jstiming.Timer;
        b.name = a;
        return this.b[a] = b
    }
    ;
    d.rG = function(a) {
        this.b[a] = null
    }
    ;
    d.bc = function(a) {
        return this.b[a] || null
    }
    ;
    d.xl = function(a, b) {
        var c = this.bc(a);
        return c && (b ? y(c.tick, c, b) : y(c.tick, c)) || p
    }
    ;
    d.pd = function(a, b) {
        var c = this.b[a];
        c && c.tick(b)
    }
    ;
    d.report = function(a, b) {
        var c = this.b[a];
        if (c)
            if (this.aw()) {
                var e = b && z(b, this.h) || this.h;
                this.J.jstiming.report(c, e);
                this.b[a] = null
            } else
                this.g.push(y(this.report, this, a, b)),
                this.j || (this.j = !0,
                this.bw())
    }
    ;
    d.bw = function() {
        Gf(N.Fj + "/csi-tail.js").Df(y(this.nJ, this))
    }
    ;
    d.nJ = function() {
        for (var a = this.g.length - 1; 0 <= a; --a) {
            var b = this.g[a];
            x(b) && b()
        }
        this.g.length = 0
    }
    ;
    d.aw = function() {
        return !!m("jstiming.report", this.J)
    }
    ;
    ch.inject = ["window", "environmentModel", "timeService"];
    function dh() {}
    dh.prototype.g = function(a, b) {
        var c = m("yt.player.embed");
        return c && c(a, b)
    }
    ;
    dh.prototype.b = function() {
        return !!m("yt.player.embed")
    }
    ;
    function eh() {
        K.call(this);
        this.w = -1;
        this.o = !1
    }
    B(eh, K);
    eh.prototype.Ke = function() {
        return this.w
    }
    ;
    eh.prototype.bg = function() {
        return this.o
    }
    ;
    eh.prototype.Ja = function(a, b) {
        if (a !== this.w || b !== this.o) {
            var c = {
                volume: this.w,
                muted: this.o
            };
            this.w = a;
            this.o = b;
            this.T("volumeData:changed", {
                volume: a,
                muted: b
            }, c)
        }
    }
    ;
    eh.prototype.Ia = function() {
        this.T("volumeData:changed", {
            volume: this.w,
            muted: this.o
        }, {
            volume: this.w,
            muted: this.o
        })
    }
    ;
    function fh(a, b, c, e, f, g, k, l, n, q, s, r) {
        eh.call(this);
        this.J = a;
        this.V = b;
        this.Z = c;
        this.k = e;
        this.gb = f;
        this.Jc = g;
        this.za = k;
        this.Wa = l;
        this.aa = n;
        this.g = q;
        this.Kc = s;
        this.Ha = [];
        this.na = !1;
        this.O = [];
        this.b = this.C = null;
        this.G = this.F = this.h = !1;
        this.Oa = this.pa = null;
        this.errorMessage = "";
        this.Va = 0;
        this.Pa = this.isPlayingAd = this.isPlaying = this.Aa = !1;
        this.ga = this.H = this.state = -1;
        this.I = !1;
        this.p = {};
        this.l = NaN;
        this.N = this.aa.fu(this.gu, 800, this);
        this.M = -1;
        this.subtitlesModuleGeneration = 0;
        this.subtitlesTrack = null;
        this.ac = y(this.Kg, this);
        this.ia = this.j = p;
        if (a = this.Z.bc("start_watch") || this.Z.bc("start_dial"))
            this.j = y(a.tick, a),
            this.ia = y(this.Z.report, this.Z, a.name);
        this.k.g && document.addEventListener("webkitvisibilitychange", y(function() {
            document.webkitHidden ? this.Hi() : 2 === this.state && this.Ii()
        }, this), !1);
        this.Jg();
        this.qb = r
    }
    B(fh, eh);
    ba("yt.tv.services.PlayerService", fh, void 0);
    Jd(fh, ["isPlaying", "isPlayingAd", "state", "subtitlesModuleGeneration", "subtitlesTrack"]);
    d = fh.prototype;
    d.uI = function(a) {
        this.Ha = a
    }
    ;
    d.lI = function() {
        this.Pa = !0
    }
    ;
    d.Fq = function() {
        return this.AK("captions")
    }
    ;
    d.pI = function() {
        if (!this.Fq())
            return !1;
        this.b.loadModule("captions");
        return !0
    }
    ;
    d.wI = function() {
        var a = this.Ed();
        a && a.unloadModule && (this.subtitlesTrack = null,
        this.b.unloadModule("captions"))
    }
    ;
    d.oI = function() {
        return this.dm("captions", "tracklist", {
            includeAsr: 1
        }) || []
    }
    ;
    d.at = function(a) {
        return this.yi("captions", "displaySettings", a)
    }
    ;
    d.rI = function() {
        this.yi("captions", "displaySettings", {
            reset: 1
        })
    }
    ;
    d.nI = function() {
        return this.dm("captions", "displaySettings") || {}
    }
    ;
    d.vI = function(a) {
        this.yi("captions", "sampleSubtitles", a)
    }
    ;
    d.mI = function() {
        return this.dm("captions", "track") || {}
    }
    ;
    d.tI = function(a) {
        a.style && this.at(a.style);
        return this.yi("captions", "track", a)
    }
    ;
    d.Ke = function() {
        if (!this.h)
            return this.nk(),
            fh.A.Ke.call(this);
        var a = this.b.getVolume();
        return fa(a) ? a : fh.A.Ke.call(this)
    }
    ;
    d.bg = function() {
        return this.h ? this.b.isMuted() : (this.nk(),
        fh.A.bg.call(this))
    }
    ;
    d.ai = function(a) {
        this.jc(y(function() {
            this.b.setVolume(a)
        }, this))
    }
    ;
    d.$h = function() {
        this.jc(y(function() {
            this.b.mute()
        }, this))
    }
    ;
    d.bi = function() {
        this.jc(y(function() {
            this.b.unMute()
        }, this))
    }
    ;
    d.Ed = function() {
        return this.h ? this.b : null
    }
    ;
    d.nk = function() {
        this.b || (this.pa = this.aa.AB(this.Wa.b),
        this.pa.Wc = y(this.EB, this, "leanback-player-container", this.BB()),
        this.DB(),
        this.CB())
    }
    ;
    d.DB = function() {
        this.F ? this.Je() : lc("html5-video-player") ? (this.F = !0,
        this.Je()) : (this.j("plht_rq"),
        this.Kc.get("/leanback.json", {
            action_player_template: 1,
            hl: this.gb.Ea,
            override_hl: 1
        }, y(this.qF, this)))
    }
    ;
    d.qF = function(a) {
        a = wc(document, a);
        document.body.appendChild(a);
        this.F = !0;
        this.j("plht_r");
        this.Je()
    }
    ;
    d.CB = function() {
        this.G ? this.Je() : this.Wa.b() ? (this.G = !0,
        this.Je()) : (this.j("pljs_rq"),
        Gf(this.J.environment.player_url, {
            timeout: 3E4
        }).Df(y(this.iA, this)))
    }
    ;
    d.iA = function() {
        this.G = !0;
        this.j("pljs_r");
        this.Je()
    }
    ;
    d.Je = function() {
        !this.b && this.F && this.G && this.pa.tB(0, 1E3)
    }
    ;
    d.EB = function(a, b) {
        this.b || (this.j("pem_rq"),
        this.b = this.Wa.g(a, b))
    }
    ;
    d.BB = function() {
        var a = this.J.swfConfig;
        z(a.args, {
            add_player_event_listeners: "0",
            autoplay: 0,
            BASE_YT_URL: null,
            controls: 0,
            el: "leanback",
            enablejsapi: 1,
            ps: "leanback",
            jsapicallback: y(this.dD, this),
            iv_load_policy: 3,
            cc_load_policy: 3,
            video_container_override: this.bD(),
            hl: this.gb.Ea,
            svt: this.k.supportsSingleVideoTag,
            canplaylive: this.k.supportsLive,
            canplaypaid: this.k.supportsPaidContent,
            store_user_volume: !1,
            use_media_volume: this.k.g && !this.k.hf
        });
        z(a.args, this.k.tc());
        a.assets.css = null;
        a.html5 = !0;
        a.disable = {
            flash: !0
        };
        a.fallback = y(function() {
            this.Sm()
        }, this);
        this.k.supportsAdaptiveBitrate || (a.args.noadapt = !0);
        return a
    }
    ;
    d.lJ = function() {
        return this.J.innerWidth + "x" + this.J.innerHeight
    }
    ;
    d.bD = function() {
        var a;
        this.qb.isSupported() && (a = this.qb.getVideoContainerSizeOverride());
        return a || this.lJ()
    }
    ;
    d.pf = function() {
        this.sh();
        this.M = this.aa.Oi(this.ac, 500)
    }
    ;
    d.sh = function() {
        this.aa.Oh(this.M);
        this.M = -1
    }
    ;
    d.Sp = function() {
        this.C = null;
        this.l = NaN
    }
    ;
    d.Jg = function() {
        this.g.timeLeft = 0;
        this.g.currentTime = 0;
        this.g.duration = 0;
        this.g.percentageLoaded = 0;
        this.g.percentagePlayed = 0
    }
    ;
    d.Kg = function() {
        var a = this.Ed();
        if (a && this.I) {
            var a = a.getVideoLoadedFraction(), b = this.rD(), c, e;
            0 == this.state ? (c = b,
            e = 1) : (c = this.sD(),
            e = !isNaN(c) && isFinite(c) && !isNaN(b) && isFinite(b) && 0 !== b ? c / b : c = b = 0);
            this.tD(c);
            0 !== b && (this.g.duration = b);
            this.g.currentTime = c;
            this.g.timeLeft = Math.max(Math.round(this.g.duration - this.g.currentTime), 1);
            this.g.percentageLoaded = this.th(a);
            this.g.percentagePlayed = this.th(e)
        } else
            this.Jg()
    }
    ;
    d.th = function(a) {
        return isNaN(a) || !isFinite(a) ? 0 : Math.round(1E3 * a) / 1E3
    }
    ;
    d.dD = function() {
        this.j("pem_r");
        this.h = !0;
        this.b.addEventListener("onStateChange", y(this.Xo, this));
        this.b.addEventListener("onAdStateChange", y(this.Wo, this));
        this.b.addEventListener("onDetailedError", y(this.Sm, this));
        this.b.addEventListener("onCaptionsTrackListChanged", y(this.Py, this));
        this.b.addEventListener("captionschanged", y(this.Oy, this));
        this.b.addEventListener("onVolumeChange", y(this.Ry, this));
        this.b.addEventListener("onApiChange", y(this.T, this, "api:changed"));
        this.Wi()
    }
    ;
    d.Wo = function(a, b) {
        this.Oa = b || null;
        this.ga = a;
        this.lq();
        this.V.ic()
    }
    ;
    d.Xo = function(a) {
        if (-1 !== a || 0 !== this.H) {
            switch (a) {
            case 3:
                3 !== this.H && this.N.iB();
                break;
            case -1:
            case 0:
                this.N.dq()
            }
            3 === this.H && 3 !== a && this.N.jB();
            0 === a && this.jc(y(function() {
                this.b.stopVideo()
            }, this));
            this.H = a;
            this.lq();
            1 != this.state || this.isPlayingAd || (this.Pa = !1);
            this.V.ic()
        }
    }
    ;
    d.yE = function() {
        var a = this.isPlayingAd;
        switch (this.ga) {
        case 0:
        case -1:
            this.isPlayingAd = !1;
            break;
        case 3:
        case 1:
            this.isPlayingAd = !0
        }
        return a != this.isPlayingAd
    }
    ;
    d.lq = function() {
        var a = this.yE();
        this.state = this.isPlayingAd ? this.ga : this.H;
        var b = this.I;
        switch (this.state) {
        case 3:
            this.Qi();
            break;
        case -1:
        case 0:
            this.Kg();
            this.I = this.isPlaying = !1;
            this.sh();
            break;
        case 2:
            this.isPlaying = !1;
            break;
        case 1:
            this.Qi(),
            this.I = this.isPlaying = !0
        }
        if (b = this.I && !b)
            this.j("pb_r"),
            this.ia(),
            this.ia = this.j = p;
        if (a || b)
            this.Kg(),
            -1 === this.M && this.pf()
    }
    ;
    d.Sm = function(a) {
        this.Sp();
        this.Jg();
        this.sh();
        this.Aa = !!a && 1 == a.errorDetail;
        this.Va = !!a && a.errorCode || 0;
        this.errorMessage = a && a.message ? this.Aa ? "[[To view this video, please confirm you are old enough by signing in.|Text message displayed when a user tries to watch age-restricted videos.]]" : a.message : "[[An error has occurred please try again later.|Text message displayed when a video cannot be played.]]";
        this.state = -1E3;
        this.V.ic()
    }
    ;
    d.Qi = function() {
        this.Aa = !1;
        this.Va = 0;
        this.errorMessage = ""
    }
    ;
    d.AK = function(a) {
        var b = this.Ed();
        a = b && b.getOptions && b.getOptions(a);
        return !(!a || !a.length)
    }
    ;
    d.dm = function(a, b, c) {
        var e = this.Ed();
        return e && e.getOption ? e.getOption(a, b, c) : null
    }
    ;
    d.yi = function(a, b, c) {
        var e = this.Ed();
        return e && e.setOption ? (e.setOption(a, b, c),
        !0) : !1
    }
    ;
    d.Oy = function(a) {
        this.subtitlesTrack = a
    }
    ;
    d.Ry = function(a) {
        a.volume = Math.round(a.volume);
        this.Ja(a.volume, a.muted)
    }
    ;
    d.Py = function() {
        this.subtitlesModuleGeneration++;
        this.V.ic()
    }
    ;
    d.jc = function(a) {
        this.O.push(a);
        this.h ? this.Wi() : this.nk()
    }
    ;
    d.zC = function(a) {
        this.h && this.jc(a)
    }
    ;
    d.Wi = function() {
        if (!this.na) {
            this.na = !0;
            for (var a = this.O.length, b = 0; b < a && this.h; ++b)
                this.O[b]();
            this.O.splice(0, b);
            this.na = !1
        }
    }
    ;
    d.rD = function() {
        return Math.ceil(this.wh())
    }
    ;
    d.wh = function() {
        var a = this.Ed();
        return a && a.getDuration ? a.getDuration() : 0
    }
    ;
    d.pg = function() {
        var a = this.Ed();
        return a && a.getCurrentTime ? this.th(a.getCurrentTime()) : 0
    }
    ;
    d.sD = function() {
        return isNaN(this.l) ? this.pg() : this.l
    }
    ;
    d.gu = function() {
        if (this.C) {
            var a = this.C;
            this.C = null;
            this.jc(a)
        }
    }
    ;
    d.qI = function(a) {
        this.za.startTime = a;
        this.Xs()
    }
    ;
    d.Xs = function() {
        this.In(!0);
        this.jc(y(function() {
            this.h = !1;
            this.Jc.Ib(y(function(a) {
                this.h = !0;
                this.Qi();
                a = this.za.h(a, this.Ha, this.Pa);
                this.za.g ? this.b.cueVideoByPlayerVars(a) : this.b.loadVideoByPlayerVars(a);
                this.k.isVideoInfoVisible ? this.b.showVideoInfo() : this.b.hideVideoInfo();
                this.T("video:changed");
                this.pf();
                this.Wi()
            }, this))
        }, this))
    }
    ;
    d.zd = function() {
        this.isPlaying ? this.Hi() : this.Ii()
    }
    ;
    d.Ii = function() {
        this.jc(y(function() {
            this.b.playVideo();
            this.pf()
        }, this))
    }
    ;
    d.In = function(a) {
        if (this.h && this.b) {
            var b = 0 != this.state && -1 != this.state;
            this.sh();
            this.Sp();
            this.Jg();
            b && this.jc(y(function() {
                this.b.pauseVideo();
                this.b.stopVideo()
            }, this));
            this.Oa = null;
            if (b || a)
                this.Xo(-1),
                this.Wo(-1)
        }
    }
    ;
    d.Hi = function() {
        this.jc(y(function() {
            this.b.pauseVideo()
        }, this))
    }
    ;
    d.dr = function(a, b) {
        a = Math.max(a, 0);
        a = Math.min(a, this.wh());
        a = this.th(a);
        a = Math.max(a, 0.001);
        this.C = y(function() {
            this.l = NaN;
            this.pf();
            this.b.seekTo(a, b)
        }, this);
        this.pf();
        this.l = a;
        this.Kg();
        this.N.Xp()
    }
    ;
    d.sI = function(a) {
        var b = isNaN(this.l) ? this.g.currentTime : this.l;
        a = 0 < a ? Math.min(this.wh(), b + a) : Math.max(0, b + a);
        a != b && this.dr(a, !0)
    }
    ;
    d.xI = function() {
        this.zC(y(function() {
            this.b && this.b.updateLastActiveTime()
        }, this))
    }
    ;
    d.jI = function(a, b, c, e) {
        this.g.currentTime >= b ? c() : this.p[a] = {
            time: b,
            ad: c,
            mode: e || 1
        }
    }
    ;
    d.tD = function(a) {
        var b, c;
        for (c in this.p)
            b = this.p[c],
            (!this.isPlayingAd || 1 !== b.mode) && a >= b.time && (b.ad(),
            delete this.p[c])
    }
    ;
    d.NS = function(a) {
        return a in this.p
    }
    ;
    d.kI = function() {
        this.p = {}
    }
    ;
    fh.inject = "window angularHelper csiService environmentModel locale authService playerVariablesModel playerFactoryService timeService progressModel templateClient systemApi".split(" ");
    function jh(a, b) {
        this.g = a;
        this.j = b
    }
    jh.prototype.h = function() {
        return this.g
    }
    ;
    jh.prototype.b = function() {
        return this.j
    }
    ;
    function kh(a, b, c) {
        this.k = a;
        this.g = null;
        this.b = {};
        this.h = b || p;
        this.j = c || p
    }
    d = kh.prototype;
    d.tC = function() {
        return this.h
    }
    ;
    d.uC = function() {
        return this.j
    }
    ;
    d.getName = function() {
        return this.k
    }
    ;
    d.hE = function(a) {
        this.g = a
    }
    ;
    d.NU = function() {
        return this.g
    }
    ;
    d.MU = function(a) {
        return this.oo(a.h(), a.b())
    }
    ;
    d.oo = function(a, b) {
        tb(this.b, a, new jh(a,b));
        return this
    }
    ;
    d.DR = function() {
        var a = 0, b;
        for (b in this.b)
            ++a;
        return a
    }
    ;
    d.XR = function(a) {
        return this.b[a] || null
    }
    ;
    d.mo = function(a) {
        return !!this.b[a] || !(!this.g || !this.g.mo(a))
    }
    ;
    d.rA = function(a) {
        return this.Fp(a, this.getName())
    }
    ;
    d.Fp = function(a, b) {
        return this.b[a] ? this.b[a].b() : this.g ? this.g.Fp(a, b) : b
    }
    ;
    function lh() {
        K.call(this);
        this.h = {};
        this.g = this.b = null;
        this.dx(this.cx(this.no()))
    }
    B(lh, K);
    d = lh.prototype;
    d.dx = function(a) {
        this.h = a
    }
    ;
    d.qa = function() {
        this.g && this.Tq(this.g)
    }
    ;
    d.no = function() {
        return []
    }
    ;
    d.Od = function(a, b, c) {
        return new kh(a,b,c)
    }
    ;
    d.Tq = function(a) {
        (a = this.h[a.getName()]) && this.$p(a)
    }
    ;
    d.XQ = function() {
        return this.b
    }
    ;
    d.LU = function(a) {
        return ub(this.h, a) || null
    }
    ;
    d.rl = function(a) {
        a = this.aq(a);
        if (!this.b.mo(a))
            return !1;
        a = this.b.rA(a);
        return a != this.b.getName() ? (this.$p(this.h[a]),
        !0) : !1
    }
    ;
    d.$p = function(a) {
        var b = this.b;
        b && b.uC()(b, a);
        this.b = a;
        this.b.tC()(this.b, b)
    }
    ;
    d.aq = function(a) {
        return a.name
    }
    ;
    d.cx = function(a) {
        for (var b = {}, c = 0, e = a.length; c < e; ++c) {
            for (var f = a[c], g = ub(f, "state"), k = ub(f, "rules", []), l = 0, n = k.length; l < n; ++l) {
                var q = k[l]
                  , s = ub(q, "name")
                  , r = ub(q, "nextState");
                if (s && r)
                    g.oo(s, r.getName());
                else
                    throw Error("Attempting to parse malformed rule: " + q);
            }
            g.hE(ub(f, "parent", null));
            if ("initial"in f) {
                if (this.g)
                    throw Error("Attempting to parse duplicate initial state: " + g);
                this.g = g
            }
            tb(b, g.getName(), g)
        }
        return b
    }
    ;
    function mh(a) {
        lh.call(this);
        this.l = a;
        this.ba = null;
        this.k = -1;
        this.spinnerState = this.j = 0
    }
    B(mh, lh);
    Jd(mh, ["spinnerState"]);
    mh.prototype.o = function(a) {
        this.ba = a;
        this.ba.B("state:changed", y(this.rl, this))
    }
    ;
    var nh = {
        Tr: "buffering-confirmed",
        Ur: "playing-confirmed"
    };
    d = mh.prototype;
    d.no = function() {
        for (var a = this.Od("unstarted"), b = this.Od("confirmingPlaying", y(this.KI, this), y(this.MI, this)), c = this.Od("confirmingBuffering", y(this.JI, this), y(this.LI, this)), e = this.Od("playing", y(this.Rl, this)), f = this.Od("paused", y(this.Rl, this)), g = this.Od("buffering", y(this.NI, this)), k = this.Od("error", y(this.Rl, this)), b = [{
            state: a,
            initial: !0,
            rules: [{
                name: 1,
                nextState: b
            }, {
                name: 3,
                nextState: c
            }]
        }, {
            state: k,
            rules: []
        }, {
            state: b,
            rules: [{
                name: nh.Ur,
                nextState: e
            }, {
                name: 3,
                nextState: c
            }]
        }, {
            state: c,
            rules: [{
                name: nh.Tr,
                nextState: g
            }, {
                name: 1,
                nextState: b
            }]
        }, {
            state: e,
            rules: [{
                name: 3,
                nextState: c
            }]
        }, {
            state: f,
            rules: [{
                name: 1,
                nextState: b
            }]
        }, {
            state: g,
            rules: [{
                name: 1,
                nextState: b
            }]
        }], c = 0, e = b.length; c < e; ++c)
            g = b[c],
            g.state !== f && g.state !== k && g.rules.push({
                name: 2,
                nextState: f
            }),
            g.state !== a && g.rules.push({
                name: -1,
                nextState: a
            }),
            g.state !== k && g.rules.push({
                name: -1E3,
                nextState: k
            });
        return b
    }
    ;
    d.KI = function() {
        this.vt(y(this.WJ, this), 100)
    }
    ;
    d.MI = function() {
        this.qg()
    }
    ;
    d.JI = function(a, b) {
        this.vt(y(this.VJ, this, b), 800)
    }
    ;
    d.LI = function() {
        this.qg()
    }
    ;
    d.vt = function(a, b) {
        this.qg();
        this.j = this.ba.pg();
        this.k = this.l.Oi(a, b)
    }
    ;
    d.qg = function() {
        this.l.Oh(this.k)
    }
    ;
    d.VJ = function(a) {
        this.qg();
        this.ba.pg() <= this.j ? this.rl(nh.Tr) : this.Tq(a)
    }
    ;
    d.WJ = function() {
        this.ba.pg() > this.j && (this.qg(),
        this.rl(nh.Ur))
    }
    ;
    d.Rl = function() {
        this.spinnerState = 0
    }
    ;
    d.NI = function() {
        this.spinnerState = 1
    }
    ;
    d.aq = function(a) {
        return String(a)
    }
    ;
    function oh(a, b) {
        K.call(this);
        this.ba = a;
        this.o = b;
        this.isPlayingAd = this.g = !1;
        this.k = 0;
        this.errorMessage = "";
        this.j = null;
        this.l = this.isPlaying = !1;
        this.state = -1;
        this.subtitlesModuleGeneration = 0;
        this.subtitlesTrack = null;
        this.b = new mh(b);
        this.h()
    }
    B(oh, K);
    Jd(oh, ["spinnerShowing"]);
    oh.prototype.h = function() {
        this.fB();
        this.b.o(this.ba);
        this.b.qa()
    }
    ;
    function ph(a) {
        oh.prototype.__defineGetter__(a, function() {
            return this.ba[a]
        });
        oh.prototype.__defineSetter__(a, function(b) {
            this.ba[a] = b
        })
    }
    ph("adVideoId");
    ph("errorCode");
    ph("errorMessage");
    ph("isPlaying");
    ph("isPlayingAd");
    ph("needsLogin");
    ph("state");
    ph("subtitlesModuleGeneration");
    ph("subtitlesTrack");
    d = oh.prototype;
    d.fB = function() {
        this.b.B("spinnerState:changed", y(this.vB, this));
        for (var a = "subtitlesModuleGeneration subtitlesTrack volumeData adPlaying video isPlaying isPlayingAd api".split(" "), b = 0, c = a.length; b < c; ++b) {
            var e = a[b] + ":changed";
            this.ba.B(e, y(this.sq, this, e))
        }
        e = "state:changed";
        this.ba.B(e, y(this.wB, this, e))
    }
    ;
    d.sq = function(a, b) {
        this.T.apply(this, arguments)
    }
    ;
    d.wB = function(a, b) {
        2 == b && this.ba.pg() == this.ba.wh() || this.sq(a, b)
    }
    ;
    d.vB = function(a) {
        this.g = 1 == a
    }
    ;
    d.$f = function(a, b, c, e) {
        this.ba.jI(a, b, c, e)
    }
    ;
    d.Zf = function() {
        this.ba.kI()
    }
    ;
    d.uB = function() {
        this.ba.lI()
    }
    ;
    d.fj = function() {
        return this.ba.mI()
    }
    ;
    d.ao = function() {
        return this.ba.oI()
    }
    ;
    d.Rn = function() {
        return this.ba.pI()
    }
    ;
    d.tq = function() {
        this.ba.Xs()
    }
    ;
    d.zc = function() {
        this.ba.Hi()
    }
    ;
    d.Oc = function() {
        this.ba.Ii()
    }
    ;
    d.rx = function(a) {
        this.ba.qI(a)
    }
    ;
    d.uf = function(a, b) {
        this.ba.dr(a, b)
    }
    ;
    d.rp = function(a) {
        return this.ba.tI(a)
    }
    ;
    d.Ch = function(a) {
        this.ba.uI(a)
    }
    ;
    d.Xj = function(a) {
        return this.ba.at(a)
    }
    ;
    d.Qy = function() {
        this.ba.rI()
    }
    ;
    d.gn = function() {
        return this.ba.nI()
    }
    ;
    d.uq = function(a) {
        this.ba.vI(a)
    }
    ;
    d.sk = function(a) {
        this.ba.In(a)
    }
    ;
    d.ek = function() {
        this.ba.wI()
    }
    ;
    d.Lb = function() {
        this.ba.xI()
    }
    ;
    d.co = function() {
        return this.ba.Fq()
    }
    ;
    d.zd = function() {
        this.ba.zd()
    }
    ;
    d.Kh = function(a) {
        this.ba.sI(a)
    }
    ;
    d.ai = function(a) {
        this.ba.ai(a)
    }
    ;
    d.Ke = function() {
        return this.ba.Ke()
    }
    ;
    d.bg = function() {
        return this.ba.bg()
    }
    ;
    d.$h = function() {
        this.ba.$h()
    }
    ;
    d.bi = function() {
        this.ba.bi()
    }
    ;
    oh.inject = ["playerService", "timeService"];
    function qh() {
        this.b = null
    }
    qh.prototype.h = function(a, b, c) {
        Xc(a, "background-image", "");
        this.g(a, b, c)
    }
    ;
    qh.prototype.g = function(a, b, c) {
        b && !c || Xc(a, "background-image", "");
        c && eb(a, c, !0);
        this.b || (this.b = new Image);
        this.b.onload = function() {
            c && eb(a, c, !1);
            Xc(a, "background-image", "url(" + this.src + ")")
        }
        ;
        this.b.src = "";
        this.b.src = b
    }
    ;
    qh.prototype.j = function(a, b) {
        return a && b ? a.replace(/\/[a-z0-9]+\.jpg/, "/" + b + ".jpg") : a
    }
    ;
    function rh(a, b, c) {
        L.call(this);
        this.h = a;
        this.j = b;
        this.g = this.imageSource = this.skipTime = this.remainingSeconds = this.remainingDuration = "";
        this.o = c;
        this.l = new qh;
        this.Xa();
        this.h.B("isPlayingAd:changed", y(this.w, this))
    }
    B(rh, L);
    rh.prototype.U = function(a) {
        this.imageSource = this.isHidden ? "" : this.g;
        rh.A.U.call(this, a)
    }
    ;
    rh.prototype.w = function(a) {
        a ? this.ca(this.j, "timeLeft:changed", y(this.k, this)) : (this.Xa(),
        this.fg(this.j, "timeLeft:changed"),
        this.g = "",
        this.U())
    }
    ;
    rh.prototype.k = function(a) {
        this.isHidden && this.h.isPlayingAd && 0 < a && this.Tb();
        this.remainingSeconds = String(a);
        this.remainingDuration = this.o.aj(a);
        this.U()
    }
    ;
    rh.prototype.C = function(a) {
        this.g = a ? this.l.j(a.imageUrl, "mqdefault") : "";
        this.U()
    }
    ;
    rh.inject = ["playerFacade", "progressModel", "locale"];
    function sh(a, b, c) {
        this.k = b;
        this.l = a;
        this.o = c;
        this.g = null;
        this.b = [];
        this.j = [];
        this.h = !0
    }
    B(sh, ma);
    sh.prototype.isSupported = function() {
        return this.l.isSupported()
    }
    ;
    d = sh.prototype;
    d.Gb = function(a) {
        this.g = a;
        this.g.isSpeakable = !0
    }
    ;
    d.Ga = function(a, b, c, e) {
        a = this.o.P(a);
        a = this.l.createCommand(a, b, c, e);
        this.b.push(a);
        this.h && this.k.addCommand(a)
    }
    ;
    d.Wz = function() {
        return !!this.b && 0 < this.b.length
    }
    ;
    d.Hf = function() {
        this.Xf();
        this.b.length = 0;
        this.j.length = 0
    }
    ;
    d.enable = function() {
        this.h = !0;
        this.ki()
    }
    ;
    d.disable = function() {
        this.h = !1;
        this.Xf()
    }
    ;
    d.FT = function() {
        return this.h
    }
    ;
    d.ki = function() {
        if (this.h) {
            for (var a = 0, b = this.b.length; a < b; ++a) {
                var c = this.b[a];
                this.k.addCommand(c);
                this.j.push(c)
            }
            this.ej(this.g, !0)
        }
    }
    ;
    d.Xf = function() {
        for (var a = 0, b = this.b.length; a < b; ++a)
            this.k.removeCommand(this.b[a]);
        this.j.length = 0;
        this.ej(this.g, !1)
    }
    ;
    d.Qs = function() {
        return this.j
    }
    ;
    d.ej = function(a, b) {
        for (var c = 0, e = a.pi(); c < e; ++c) {
            var f = a.Ta(c);
            b ? f.og() : f.rg();
            f.$ || this.ej(f, b)
        }
    }
    ;
    d.R = function() {
        this.Hf();
        this.j = this.b = this.g = null;
        sh.A.R.call(this)
    }
    ;
    sh.inject = ["speechApi", "voiceService", "locale"];
    function Q(a, b, c) {
        $d.call(this);
        this.id = b.attr("id") || "";
        this.name = this.name || this.id || "directive";
        this.scope = a;
        this.element = b;
        this.H = c;
        this.isSpeakable = this.isActive = !1;
        this.Pa = this.Pa || c.ytFocusable || !1;
        this.children = {};
        this.h = [];
        this.scope[this.name] = this;
        this.scope.focusable = this;
        this.scope.controller = this;
        this.Pa && this.element.attr("tabindex", "-1");
        this.K = this.element[0];
        this.$ = null;
        this.H.activateWhen && this.scope.$watch(this.H.activateWhen, y(this.wE, this));
        this.H.data && this.scope.$watch(this.H.data, y(this.uc, this));
        this.scope.$on("$destroy", y(this.xE, this));
        this.Ic()
    }
    B(Q, $d);
    d = Q.prototype;
    d.qa = function() {
        this.isSpeakable && this.addClass("speakable");
        this.L("added", this);
        this.B("added", y(this.Cb, this))
    }
    ;
    d.Ic = function() {
        this.af("elementIdEquals", this.uJ)
    }
    ;
    d.af = function(a, b) {
        this[a] = y(b, this)
    }
    ;
    d.xE = function() {
        this.data = null;
        this.scope[this.name] = null;
        this.scope.focusable = null;
        this.scope.controller = null;
        this.scope.VK = null;
        this.scope.UK = {};
        this.xc();
        this.Vf();
        this.$ && this.$.Hf()
    }
    ;
    d.uc = function(a) {
        this.data = a
    }
    ;
    d.setData = function(a) {
        this.data = a
    }
    ;
    d.Dd = function() {
        return this.gm()
    }
    ;
    d.gm = function() {
        return !0
    }
    ;
    d.U = function() {}
    ;
    d.W = function() {
        var a = this.isActive;
        this.isActive = !0;
        this.addClass("active");
        !a && this.Pa && this.focus()
    }
    ;
    d.ea = function() {
        this.isActive = !1;
        this.activeChildName = null;
        this.removeClass("active");
        this.se(this.C)
    }
    ;
    d.se = function(a) {
        a && (a.ea(),
        this.C = null)
    }
    ;
    d.ta = function(a) {
        a && (this.C ? this.C !== a ? (this.C.ea(),
        a.W(),
        this.C = a) : this.C === a && a.focus() : (a.W(),
        this.C = a))
    }
    ;
    d.wE = function(a) {
        a ? this.W() : this.isActive && this.ea()
    }
    ;
    d.focus = function() {
        this.element[0].focus();
        this.C && this.C.focus()
    }
    ;
    d.Cb = function(a) {
        var b = a.detail
          , c = b.element.attr("id");
        c && (this.children[c] = b);
        J(a);
        this.h.push(b)
    }
    ;
    d.Vf = function() {
        for (var a = this.h.length, b = 0; b < a; ++b) {
            var c = this.h[b];
            c instanceof L ? (na(c),
            zc(c.K)) : this.h[b].element.remove()
        }
        this.h.length = 0;
        this.children = {}
    }
    ;
    d.xQ = function(a) {
        var b = a.ot;
        a.ot = null;
        this.Ec(a);
        a.ot = b
    }
    ;
    d.wQ = function(a) {
        a in this.children && this.Ec(this.children[a].scope)
    }
    ;
    d.Ec = function(a) {
        a || (a = this.scope.$root);
        a.$$phase || a.$digest()
    }
    ;
    d.uJ = function(a) {
        return this.id === a
    }
    ;
    d.da = function(a) {
        return this.element[0].querySelector(a)
    }
    ;
    d.VQ = function(a) {
        return this.element[0].querySelectorAll(a)
    }
    ;
    d.hb = function(a, b) {
        a.textContent = b || ""
    }
    ;
    d.rd = function(a, b) {
        a.innerHTML = b || ""
    }
    ;
    d.tb = function(a, b) {
        angular.element(a).css("display", b ? "" : "none")
    }
    ;
    d.Ta = function(a) {
        return this.h[a]
    }
    ;
    d.pi = function() {
        return this.h.length
    }
    ;
    d.Ye = function(a) {
        return this.children[a]
    }
    ;
    d.sb = function(a, b, c) {
        a = this.K.getElementsByClassName("$" + a)[0];
        if (!a)
            return null;
        b = th(a, c, b);
        return this.Us(b)
    }
    ;
    d.FB = function() {
        for (var a = 0, b = this.h.length; a < b; ++a) {
            var c = this.h[a];
            c instanceof L && c.U()
        }
    }
    ;
    d.HB = function(a, b, c, e) {
        if (null === b)
            return null;
        a = uh(a, c, e);
        b.innerHTML = "";
        b.appendChild(a.K);
        return this.Us(a)
    }
    ;
    d.Us = function(a) {
        if (a) {
            this.k = {
                $destroy: p
            };
            this.h.push(a);
            var b = a.K.id;
            b && (this.children[b] = a)
        }
        return a
    }
    ;
    d.og = function() {
        this.$ && this.$.ki()
    }
    ;
    d.rg = function() {
        this.$ && this.$.Xf()
    }
    ;
    d.addClass = function(a) {
        this.K && a && bb(this.K, a)
    }
    ;
    d.removeClass = function(a) {
        this.K && a && db(this.K, a)
    }
    ;
    Q.$inject = ["$scope", "$element", "$attrs"];
    function R(a, b, c) {
        this.name = this.name || "focusable";
        this.Pa = !0;
        Q.call(this, a, b, c)
    }
    B(R, Q);
    R.$inject = ["$scope", "$element", "$attrs"];
    function vh(a, b) {
        L.call(this);
        this.h = a;
        this.l = b;
        this.g = !0
    }
    B(vh, L);
    vh.prototype.W = function() {
        vh.A.W.call(this);
        this.j = this.h.setTimeout(y(this.k, this), 3E5);
        this.g && (this.g = !1,
        this.l.report("start_browse"))
    }
    ;
    vh.prototype.ea = function() {
        vh.A.ea.call(this);
        this.j && this.h.clearTimeout(this.j)
    }
    ;
    vh.prototype.k = function() {
        this.L("exit-application")
    }
    ;
    vh.inject = ["timeService", "csiService"];
    function th(a, b, c) {
        w(a) && (a = se(a));
        if (a.le && b)
            return dd(b.K),
            null;
        var e = null;
        if (-1 < a.className.indexOf("$")) {
            if (!c)
                throw Error("Cannot create components without an injector.");
            e = wh(a, c, b);
            if (!e)
                return null;
            a = e.K
        }
        a.h || fe(a);
        ee(a, function(b) {
            if (a !== b && -1 < b.className.indexOf("$"))
                return th(b, e, c),
                !1;
            c && c.contains(b.nodeName) && !b.oF && (c.get(b.nodeName, {
                element: b
            }),
            b.oF = !0)
        });
        !e && b && (e = b);
        dd(a, e, b);
        e && e.ready instanceof Function && e.ready();
        return e
    }
    function wh(a, b, c) {
        for (var e = $a(a), f, g, k = null, l = e.length - 1; 0 <= l; --l)
            f = e[l],
            0 === f.indexOf("$") && "$" != f && (g = f.substr(1),
            a.j || (a.j = {}),
            a.j[g] || (db(a, f),
            bb(a, "{{getStyles()}}"),
            bb(a, String(g).replace(/([A-Z])/g, "-$1").toLowerCase()),
            k = b.get(g),
            k.template && !k.K && (w(k.template) ? k.K = se(k.template) : k.template instanceof Function && (k.K = k.template())),
            a && k.K ? (Ac(k.K, a),
            ad(k.K, a),
            a.className = k.K.className,
            fe(a),
            f = a,
            g = k.K,
            f.b && 0 < f.b.length && g.g && (g.b ? g.b = f.b.concat(g.b) : g.g.unshift(le(g, f.b)))) : k.K = a,
            k.K.le || (k.K.le = k),
            k.K.tabIndex = -1,
            k.Ya(),
            k.wj(),
            c && c.addChild instanceof Function ? c.addChild(k) : k.M = c || null));
        return k
    }
    ;function uh(a, b, c) {
        b = th('<div class="$' + a + '"></div>', c, b);
        if (!b)
            throw Error("Can not render " + a);
        return b
    }
    ;function xh() {
        K.call(this);
        this.length = 0;
        this.b = []
    }
    B(xh, K);
    d = xh.prototype;
    d.push = function(a) {
        this.Pt("push", a)
    }
    ;
    d.unshift = function(a) {
        this.Pt("unshift", a)
    }
    ;
    d.la = function() {
        return this.b.slice()
    }
    ;
    d.fa = function(a) {
        return this.b[a]
    }
    ;
    d.jJ = function(a) {
        return Ha(this.b, a)
    }
    ;
    d.ja = function(a) {
        this.b = a.slice();
        this.length = a.length;
        this.Fc(this.b)
    }
    ;
    d.ET = function(a, b) {
        this.b[a] = b;
        this.length = this.b.length;
        this.Fc(b)
    }
    ;
    d.Y = function() {
        return this.length
    }
    ;
    d.slice = function(a, b) {
        var c = new xh, e;
        switch (arguments.length) {
        case 0:
            e = this.b.slice();
            break;
        case 1:
            e = this.b.slice(a);
            break;
        case 2:
            e = this.b.slice(a, b)
        }
        c.push(e);
        return c
    }
    ;
    d.splice = function(a, b, c) {
        var e = new xh, f;
        switch (arguments.length) {
        case 0:
            f = this.b.splice();
            break;
        case 1:
            f = this.b.splice(a);
            break;
        case 2:
            f = this.b.splice(a, b);
            break;
        default:
            f = this.b.splice.apply(this.b, arguments)
        }
        this.length = this.b.length;
        this.Fc();
        e.push(f);
        return e
    }
    ;
    d.clear = function() {
        this.length = this.b.length = 0;
        this.Fc()
    }
    ;
    d.Fc = function(a) {
        this.T("items:changed", a)
    }
    ;
    d.Pt = function(a, b) {
        var c = v(b) ? b : [b]
          , e = c.length;
        0 < e && (this.b[a].apply(this.b, c),
        this.length += e,
        this.Fc(b))
    }
    ;
    function yh() {
        xh.call(this);
        this.k = -1
    }
    B(yh, xh);
    d = yh.prototype;
    d.lb = function(a) {
        if (this.ii(a)) {
            var b = this.k;
            this.k = a;
            this.T("selectedIndex:changed", a, b)
        }
    }
    ;
    d.lh = function(a) {
        a = this.jJ(a);
        0 <= a && this.lb(a)
    }
    ;
    d.Db = function() {
        return this.k
    }
    ;
    d.Nq = function(a) {
        this.lb(this.Db() + a)
    }
    ;
    d.Hb = function() {
        return this.fa(this.Db())
    }
    ;
    d.ii = function(a) {
        return 0 === this.Y() ? -1 === a : !isNaN(a) && 0 <= a && a < this.Y() && a !== this.Db()
    }
    ;
    d.Fc = function(a) {
        yh.A.Fc.call(this, a);
        0 === this.Y() && -1 !== this.Db() ? this.lb(-1) : 0 < this.Y() && -1 === this.Db() && this.lb(0)
    }
    ;
    function zh(a) {
        this.g = a;
        this.b = null
    }
    d = zh.prototype;
    d.dG = function(a) {
        this.b = a
    }
    ;
    d.ready = function() {
        this.b.catchKeyPress && (this.b.rateLimit ? this.b.B("keydown", this.g(this.b.rateLimit, y(this.lp, this))) : this.b.B("keydown", y(this.lp, this)));
        this.b.catchMouseMove && (this.b.B("mouseover", y(this.dk, this)),
        this.b.B("click", y(this.dk, this)),
        this.b.B("button-enter", y(this.dk, this)))
    }
    ;
    d.lp = function(a) {
        var b = 0
          , b = a.keyCode;
        if (40 == b && this.b.isVertical || 39 == b && !this.b.isVertical)
            b = 1;
        else if (38 == b && this.b.isVertical || 37 == b && !this.b.isVertical)
            b = -1;
        else
            return;
        J(a, !1, !0);
        this.b.model.Nq(b)
    }
    ;
    d.dk = function(a) {
        if (this.b.mouseAutoScroll || "mouseover" != a.type) {
            for (a = a.target; a && a.parentNode != this.b.K; )
                a = a.parentNode;
            (a = a && a.le && a.le.model) && this.b.model.lh(a)
        }
    }
    ;
    d.lF = function() {
        if (this.b.model instanceof yh) {
            var a = this.b.model.Db();
            -1 < a && this.b.Ta(a) && this.b.Ta(a).W()
        }
    }
    ;
    zh.inject = ["rateLimit"];
    function Ah(a) {
        L.call(this);
        this.j = a;
        this.rateLimit = this.itemFactory = this.model = null;
        this.catchMouseMove = !1;
        this.catchKeyPress = this.mouseAutoScroll = !0;
        this.elementLimit = -1;
        this.isVertical = !1;
        this.j.dG(this)
    }
    B(Ah, L);
    Jd(L, ["itemName"]);
    d = Ah.prototype;
    d.wj = function() {
        Ah.A.wj.call(this);
        this.B("itemName:changed", y(this.HG, this))
    }
    ;
    d.HG = function() {
        w(this.itemName) && this.itemName ? this.itemFactory = function() {
            return uh(this.itemName, this.injector)
        }
        : this.itemFactory = null;
        this.UJ();
        this.Zs()
    }
    ;
    d.UJ = function() {
        for (var a = this.K.children; a.length; )
            this.oi(0)
    }
    ;
    d.Ya = function() {
        this.K.children.length && this.zH()
    }
    ;
    d.zH = function() {
        for (var a = null, b, c = Bc(this.K), e = 0, f = c.length; e < f; ++e)
            if (Dc(c[e])) {
                a = zc(c[e]);
                break
            }
        a && (-1 == a.className.indexOf("$") && bb(a, "$component"),
        b = a.outerHTML,
        this.itemFactory = function() {
            return th(b, null, this.injector)
        }
        )
    }
    ;
    d.Zs = function() {
        var a = this.Js();
        0 <= this.elementLimit && (a = this.elementLimit);
        var b = this.K.children;
        if (a > b.length) {
            if (this.model)
                for (b = b.length; b < a; ++b)
                    this.As(this.model.fa(b))
        } else
            for (; a < b.length; )
                this.oi(b.length - 1)
    }
    ;
    d.Js = function() {
        return this.model ? this.model.Y() : 0
    }
    ;
    d.As = function(a, b) {
        if (a) {
            var c = this.Gs(a);
            t(b) ? (yc(this.K, c.K, b),
            this.Es(c, b)) : (this.K.appendChild(c.K),
            this.addChild(c));
            c.U()
        }
    }
    ;
    d.Gs = function(a) {
        if (this.itemFactory)
            return this.itemFactory(a);
        if (a && a.Wb)
            return uh(a.Wb, this.injector);
        throw Error("Attempt to create a list item without factory or name.");
    }
    ;
    d.ready = function() {
        this.j.ready();
        this.ul()
    }
    ;
    d.Gk = function(a) {
        Ah.A.Gk.call(this, a);
        this.b && this.yB(this.b)
    }
    ;
    d.U = function(a) {
        Ah.A.U.call(this, a);
        this.isActive && this.j.lF()
    }
    ;
    d.ni = function() {
        this.tg("selectedIndex:changed", y(this.U, this, !0));
        this.tg("items:changed", y(this.ul, this));
        this.model && this.ul()
    }
    ;
    d.ul = function() {
        this.Zs();
        this.U(!0)
    }
    ;
    d.Ss = function() {
        for (var a = 0, b = this.children.length; a < b; ++a) {
            var c = this.children[a]
              , e = this.model ? this.model.fa(a) : null;
            this.xH(c, e) && (na(c),
            this.As(e, a),
            c = this.children[a]);
            c.model = e;
            c.U()
        }
    }
    ;
    d.xH = function(a, b) {
        return a && b ? !a.model || !(!a.model || !b.Wb || a.model.Wb == b.Wb) : !1
    }
    ;
    d.wR = function(a) {
        return this.model.fa(a)
    }
    ;
    d.yB = function(a) {
        a = a.K;
        var b = this.isVertical ? "offsetTop" : "offsetLeft"
          , c = this.isVertical ? "offsetHeight" : "offsetWidth"
          , e = this.isVertical ? "scrollTop" : "scrollLeft"
          , f = a[b] >= this.K[e]
          , g = a[b] + a[c] <= this.K[e] + this.K[c];
        f && g || (this.K[e] = f ? a[b] + a[c] - this.K[c] : a[b])
    }
    ;
    Ah.inject = ["listSelectionManager"];
    function S(a, b, c, e) {
        this.label = a;
        this.type = b || "";
        this.payload = c || null;
        this.Wb = e || "button"
    }
    ;function Bh(a) {
        yh.call(this);
        this.h = 0;
        this.l = a || 0
    }
    B(Bh, yh);
    d = Bh.prototype;
    d.lb = function(a) {
        this.ii(a) && (this.h = a,
        this.T("selectedIndex:changed", a))
    }
    ;
    d.Nq = function(a) {
        this.lb(this.h + a)
    }
    ;
    d.ii = function(a) {
        return !!this.b[a]
    }
    ;
    d.Db = function() {
        return this.l
    }
    ;
    d.fa = function(a) {
        return this.b[this.h + a - this.l]
    }
    ;
    function Ch(a, b, c, e) {
        S.call(this, a, c, e, "subtitled-button");
        this.subtitle = b || ""
    }
    B(Ch, S);
    function Dh(a, b) {
        L.call(this);
        this.g = a;
        this.C = b;
        this.h = new Bh(1);
        this.o = new Bh(1);
        this.l = new Bh(1);
        this.w = new Bh(1);
        this.displayProperties = new Bh(1);
        this.k = this.j = null
    }
    B(Dh, L);
    var Eh = {
        LD: "background-color",
        ED: "color",
        MD: "font-color",
        FD: "display-option",
        GD: "language",
        HD: "off",
        LP: "on",
        ND: "window-color"
    }
      , Fh = {
        "#000": "[[Black|The color black.]]",
        "#f00": "[[Red|The color red.]]",
        "#f0f": "[[Magenta|The color magenta.]]",
        "#00f": "[[Blue|The color blue.]]",
        "#0ff": "[[Cyan|The color cyan.]]",
        "#0f0": "[[Green|The color green.]]",
        "#ff0": "[[Yellow|The color yellow.]]",
        "#fff": "[[White|The color white.]]",
        monoSerif: "[[Monospaced Serif|This is the text of the Monospaced Serif option for captions font family.]]",
        propSerif: "[[Proportional Serif|This is the text of the Proportional Serif option for captions font family.]]",
        monoSans: "[[Monospaced Sans-Serif|This is the text of the Monospaced Sans-Serif option for captions font family.]]",
        propSans: "[[Proportional Sans-Serif|This is the text of the Proportional Sans-Serif option for captions font family.]]",
        casual: "[[Casual|This is the text of the Casual option for captions font family.]]",
        cursive: "[[Cursive|This is the text of the Cursive option for captions font family.]]",
        smallCaps: "[[Small Capitals|This is the text of the Small Capitals option for captions font family.]]",
        none: "[[None|This is the text of the None option for character edge styles.]]",
        dropShadow: "[[Drop Shadow|This is the text of the Drop Shadow option for character edge styles.]]",
        raised: "[[Raised|This is the text of the Raised option for character edge styles.]]",
        depressed: "[[Depressed|This is the text of the Depressed option for character edge styles.]]",
        uniform: "[[Uniform|This is the text of the Uniform option for character edge styles.]]"
    }
      , Gh = {
        "-2": "50%",
        "-1": "75%",
        0: "100%",
        2: "200%",
        4: "300%"
    }
      , Hh = {
        Ew: "display-properties-list",
        Fw: "options-list"
    };
    d = Dh.prototype;
    d.qa = function() {
        this.ca(this.g, "subtitlesModuleGeneration:changed", y(this.tr, this));
        this.ca(this.g, "api:changed", y(this.tr, this));
        this.DD();
        this.BD();
        this.CD()
    }
    ;
    d.Ya = function() {
        this.B("button-enter", y(this.mH, this));
        this.B("keyup", y(this.nH, this))
    }
    ;
    d.ready = function() {
        this.j = this.Un(Hh.Ew);
        this.k = this.Un(Hh.Fw);
        this.ca(this.displayProperties, "selectedIndex:changed", y(this.k.U, this.k, !0));
        this.b = this.j;
        this.g.Rn() ? this.Gw() : this.Zm()
    }
    ;
    d.DD = function() {
        var a = this.g.fj() || this.g.subtitlesTrack || {}
          , a = ub(a, "displayName", "")
          , b = this.g.gn()
          , c = Fh[b.fontFamilyOption] || ""
          , e = Fh[b.color] || ""
          , f = Fh[b.background] || ""
          , g = Fh[b.windowColor]
          , k = Fh[b.charEdgeStyle] || ""
          , l = this.pk(b.textOpacity)
          , n = this.pk(b.backgroundOpacity)
          , q = this.pk(b.windowOpacity)
          , b = Gh[b.fontSizeIncrement] || "";
        this.displayProperties.ja([new Ch("[[Captions|Menu item to the captions settings.]]",a,"",this.h), new Ch("[[Font Family|Menu item to select font family of the captions.]]",c,"",this.eA()), new Ch("[[Font color|Menu item to select font color.]]",e,"font-color",this.o), new Ch("[[Caption Size|Menu item to select size of the captions.]]",b,"",this.fA()), new Ch("[[Background color|Menu item to select background color.]]",f,"background-color",this.l), new Ch("[[Background Opacity|Menu item for changing background opacity for caption text.]]",n,"",this.cA()), new Ch("[[Window color|Menu item to select the window color.]]",g,"window-color",this.w), new Ch("[[Window Opacity|Menu item for changing window opacity for caption text]]",q,"",this.hA()), new Ch("[[Character Edge Style|Menu item to select character edge styles of the captions.]]",k,"",this.dA()), new Ch("[[Text Opacity|Menu item to select text opacity of the captions.]]",l,"",this.gA())])
    }
    ;
    d.JD = function(a) {
        this.j.tk(a) || (this.displayProperties.Hb().subtitle = a.detail.label,
        this.j.U(!0))
    }
    ;
    Dh.prototype.getOptionsForCurrentDisplayProperty = function() {
        return this.displayProperties.Hb().payload
    }
    ;
    d = Dh.prototype;
    d.tr = function() {
        var a = this.g.ao()
          , b = this.g.fj() || this.g.subtitlesTrack || {};
        this.g.uq(!!a.length);
        if (a.length) {
            for (var c, e = [], f = 0; f < a.length; ++f) {
                var g = a[f]
                  , k = new S(g.displayName,"language",g);
                b && g.id === b.id && (c = k);
                e.push(k)
            }
            e.unshift(new S("[[Off|Title of a button that turns subtitles off.]]","off"));
            this.h.ja(e);
            c && this.h.lh(c)
        } else
            this.Zm();
        this.U(!0)
    }
    ;
    d.mH = function(a) {
        switch (a.detail.type) {
        case Eh.GD:
            this.g.rp(a.detail.payload);
            break;
        case Eh.FD:
            this.g.Xj(a.detail.payload);
            break;
        case Eh.HD:
            this.g.ek();
            break;
        case Eh.ED:
            this.ID(a.detail.payload.color)
        }
        this.JD(a);
        J(a)
    }
    ;
    d.ID = function(a) {
        var b = this.displayProperties.Hb(), c;
        b.type === Eh.MD ? c = "color" : b.type === Eh.LD ? c = "background" : b.type === Eh.ND && (c = "windowColor");
        b = {};
        b[c] = a;
        b[c + "Override"] = 1;
        this.g.Xj(b)
    }
    ;
    d.nH = function(a) {
        switch (a.keyCode) {
        case 39:
            this.k.W();
            break;
        case 37:
            this.j.W()
        }
    }
    ;
    d.CD = function() {
        this.h.ja(Va(new S(""), 6))
    }
    ;
    d.Zm = function() {
        this.h.ja([new S("[[Not available|Title that is displayed when subtitles are not available.]]")])
    }
    ;
    d.Gw = function() {
        this.h.ja([new S("[[Loading...|Tooltip displayed when some data is loading.]]")])
    }
    ;
    d.BD = function() {
        var a = [new S(Fh["#000"],"color",{
            color: "#000",
            "class": "black"
        },"color-button"), new S(Fh["#f00"],"color",{
            color: "#f00",
            "class": "red"
        },"color-button"), new S(Fh["#f0f"],"color",{
            color: "#f0f",
            "class": "magenta"
        },"color-button"), new S(Fh["#00f"],"color",{
            color: "#00f",
            "class": "blue"
        },"color-button"), new S(Fh["#0ff"],"color",{
            color: "#0ff",
            "class": "cyan"
        },"color-button"), new S(Fh["#0f0"],"color",{
            color: "#0f0",
            "class": "green"
        },"color-button"), new S(Fh["#ff0"],"color",{
            color: "#ff0",
            "class": "yellow"
        },"color-button"), new S(Fh["#fff"],"color",{
            color: "#fff",
            "class": "white"
        },"color-button")];
        this.l.ja(a);
        this.o.ja(a);
        this.w.ja(a)
    }
    ;
    d.eA = function() {
        var a = new Bh(1);
        a.ja(this.dt("fontFamilyOption", "display-option", "monoSerif propSerif monoSans propSans casual cursive smallCaps".split(" ")));
        return a
    }
    ;
    d.dA = function() {
        var a = new Bh(1);
        a.ja(this.dt("charEdgeStyle", "display-option", ["none", "dropShadow", "raised", "depressed", "uniform"]));
        return a
    }
    ;
    d.ea = function() {
        this.g.uq(!1);
        Dh.A.ea.call(this)
    }
    ;
    d.dt = function(a, b, c) {
        for (var e = [], f = 0, g = c.length; f < g; f++) {
            var k = c[f]
              , l = {};
            l[a] = k;
            e.push(new S(Fh[k],b,l))
        }
        return e
    }
    ;
    d.gA = function() {
        var a = new Bh(1);
        a.ja([new S("50%","display-option",{
            textOpacity: 0.5
        }), new S("75%","display-option",{
            textOpacity: 0.75
        }), new S("100%","display-option",{
            textOpacity: 1
        })]);
        return a
    }
    ;
    d.cA = function() {
        var a = new Bh(1);
        a.ja([new S("0%","display-option",{
            backgroundOpacity: 0
        }), new S("50%","display-option",{
            backgroundOpacity: 0.5
        }), new S("80%","display-option",{
            backgroundOpacity: 0.8
        }), new S("100%","display-option",{
            backgroundOpacity: 1
        })]);
        return a
    }
    ;
    d.hA = function() {
        var a = new Bh(1);
        a.ja([new S("0%","display-option",{
            windowOpacity: 0
        }), new S("50%","display-option",{
            windowOpacity: 0.5
        }), new S("100%","display-option",{
            windowOpacity: 1
        })]);
        return a
    }
    ;
    d.fA = function() {
        var a = new Bh(1);
        a.ja([new S(Gh["-2"],"display-option",{
            fontSizeIncrement: -2
        }), new S(Gh["-1"],"display-option",{
            fontSizeIncrement: -1
        }), new S(Gh["0"],"display-option",{
            fontSizeIncrement: 0
        }), new S(Gh["2"],"display-option",{
            fontSizeIncrement: 2
        }), new S(Gh["4"],"display-option",{
            fontSizeIncrement: 4
        })]);
        return a
    }
    ;
    d.pk = function(a) {
        return isNaN(a) ? "" : 100 * a + "%"
    }
    ;
    Dh.inject = ["playerFacade", "environmentModel"];
    function Ih(a) {
        L.call(this);
        this.stopPhrase = a.P("[[Stop listening|Speech command spoken to stop voice engagement.]]");
        this.goBackPhrase = a.P("[[Go back|Speech command for going back from the current screen.]]")
    }
    B(Ih, L);
    Ih.inject = ["locale"];
    function Jh(a) {
        L.call(this);
        this.iconClass = "icon";
        this.title = this.iconBackground = "";
        this.g = a
    }
    B(Jh, L);
    d = Jh.prototype;
    d.ready = function() {
        this.onEnter || (this.onEnter = y(this.HK, this))
    }
    ;
    d.Fa = function(a) {
        Jh.A.Fa.call(this, a);
        (a = this.model ? this.model.model : null) && !a.title && this.tg("model:changed", y(this.NG, this));
        this.ts(a);
        this.U()
    }
    ;
    d.NG = function() {
        var a = this.model.model;
        a && a.title && this.fg(this.model);
        this.ts(a);
        this.U()
    }
    ;
    d.ts = function(a) {
        this.title = "";
        this.iconClass = "icon";
        this.iconBackground = "";
        a && (this.title = this.g.P(a.title),
        this.yD(a.bb))
    }
    ;
    d.yD = function(a) {
        this.iconClass = "icon";
        this.iconBackground = "";
        a && (0 == a.lastIndexOf("/", 0) && 0 != a.lastIndexOf("//", 0) ? this.iconBackground = "url(" + N.fi + a + ")" : sa(a, ".jpg") || sa(a, ".png") ? this.iconBackground = "url(" + a + ")" : this.iconClass += " " + a)
    }
    ;
    d.HK = function(a) {
        ab(a.target, "icon") && (this.L("button-enter", this.model),
        J(a))
    }
    ;
    Jh.inject = ["locale"];
    function Kh(a, b) {
        L.call(this);
        this.g = a;
        this.$ = b;
        this.model = null;
        this.$.Gb(this)
    }
    B(Kh, L);
    d = Kh.prototype;
    d.ready = function() {
        this.onEnter || (this.onEnter = y(this.Vs, this))
    }
    ;
    d.Tb = function() {
        Kh.A.Tb.call(this);
        this.$.enable()
    }
    ;
    d.Xa = function() {
        Kh.A.Xa.call(this);
        this.$.disable()
    }
    ;
    d.Fa = function(a) {
        Kh.A.Fa.call(this, a);
        this.$.Hf();
        this.model && this.model.label && (this.model.label = this.g.P(this.model.label),
        this.$.Ga(this.model.label, y(this.mD, this)))
    }
    ;
    d.mD = function() {
        this.K && this.Vs()
    }
    ;
    d.Vs = function(a) {
        a && J(a);
        this.L("button-enter", this.model)
    }
    ;
    Kh.inject = ["locale", "voiceHelper"];
    function Lh(a) {
        yh.call(this);
        this.g = a || null;
        this.B("selectedIndex:changed", y(this.h, this))
    }
    B(Lh, yh);
    Lh.prototype.ja = function(a) {
        for (var b = [], c; a.length; )
            c = new yh,
            c.ja(a.splice(0, this.g || Number.MAX_VALUE)),
            b.push(c);
        Lh.A.ja.call(this, b)
    }
    ;
    Lh.prototype.lh = function(a) {
        for (var b = 0, c = this.Y(); b < c; ++b)
            G(this.fa(b).la(), a) && (this.lb(b),
            this.Hb().lh(a))
    }
    ;
    Lh.prototype.h = function(a, b) {
        this.fa(b) && this.fa(a).lb(this.fa(b).Db())
    }
    ;
    function Mh() {
        L.call(this);
        this.flagData = new Lh(2);
        this.flagData.ja([new S("[[Sexual Content|GTGC4NgMTyty-lg7bvKq5g]]","flag-normal"), new S("[[Child Abuse|IngFQG4SEoOLkyKZJEPR6g]]","flag-normal"), new S("[[Violent or Repulsive Content|qhVb-TasMDalcVlh0-bVNQ]]","flag-normal"), new S("[[Spam|Pnw-OErhkCrqYT5klcLesw]]","flag-normal"), new S("[[Hateful or Abusive Content|VlY1sRyrA4TwmawjC86xFw]]","flag-normal"), new S("[[Infringes My Rights|GwQ2vMHBH9Ls3VHHIixT-Q]]","flag-rights"), new S("[[Harmful Dangerous Acts|rCIBQRDFyfIBja9x497u6A]]","flag-normal")])
    }
    B(Mh, L);
    Mh.prototype.Ya = function() {
        Mh.A.Ya.call(this);
        this.B("button-enter", y(this.g, this))
    }
    ;
    Mh.prototype.W = function() {
        Mh.A.W.call(this);
        this.Ta(0).W()
    }
    ;
    Mh.prototype.g = function(a) {
        switch (a.detail.type) {
        case "flag-normal":
            this.L("request-flag-video");
            J(a);
            break;
        case "flag-rights":
            this.L("request-flag-claim"),
            J(a)
        }
    }
    ;
    function Nh(a) {
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.Qc = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "")
    }
    d = Nh.prototype;
    d.id = "";
    d.name = "";
    d.Qc = "";
    d.type = "REMOTE_CONTROL";
    d.username = "";
    d.Cd = !1;
    d.qs = function() {
        return {
            id: this.id,
            name: this.name,
            app: this.Qc,
            type: this.type,
            user: this.username
        }
    }
    ;
    d.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    function Oh(a) {
        var b = a.name || "";
        a.username && (b = b + " (" + a.username + ")");
        this.displayString = wa(b);
        var b = a.Cd ? "connected" : "disconnected"
          , c = "mdx-unknown ";
        "LOUNGE_SCREEN" == a.type ? c = "mdx-screen " : a.Qc && (c = 0 < a.Qc.search(/tablet|ipad/g) ? "mdx-tablet " : "mdx-mobile ");
        this.deviceClass = c + b
    }
    ;function Ph(a, b) {
        this.b = a;
        this.g = b
    }
    Ph.prototype.state = function(a, b) {
        var c = !1;
        void 0 !== a && (this.b.path("/" + a),
        c = !0);
        b && (this.b.search(b),
        c = !0);
        c && this.g.ic();
        return this.Kz()
    }
    ;
    d = Ph.prototype;
    d.Kz = function() {
        var a = this.b.path();
        a && (a = a.split("/").join(""));
        return a
    }
    ;
    d.mode = function(a) {
        void 0 !== a && (this.b.search("mode", a),
        this.g.ic());
        return this.b.search().mode
    }
    ;
    d.search = function(a, b) {
        return this.b.search(a, b)
    }
    ;
    d.url = function(a) {
        void 0 !== a && (this.b.url(a),
        this.g.ic());
        return this.b.url()
    }
    ;
    d.lr = function(a) {
        return this.mode() === a
    }
    ;
    d.sf = function() {
        var a = this.state() || ""
          , b = this.mode() || "";
        return {
            state: a,
            mode: b,
            url: this.url()
        }
    }
    ;
    Ph.inject = ["$location", "angularHelper"];
    function Qh(a, b, c, e, f, g) {
        ng.call(this, a, b);
        this.g = c;
        this.b = g;
        this.j = f
    }
    B(Qh, ng);
    Qh.prototype.get = function(a, b, c, e) {
        var f = this.b.contains(a) ? this.b.get(a) : this.j.get(a);
        f && c ? c(this.g.P(f)) : ng.prototype.get.call(this, a, b, c, e)
    }
    ;
    Qh.prototype.transformResponse = function(a) {
        a = ng.prototype.transformResponse.call(this, a);
        return this.g.P(a)
    }
    ;
    Qh.$inject = "xhrBackend jsonpBackend locale $injector $templateCache injector".split(" ");
    function Rh(a, b, c, e, f, g, k, l) {
        this.name = "dialog";
        R.call(this, a, b, c);
        k.pu(this);
        this.V = e;
        this.F = f;
        this.Z = g;
        this.k = null;
        this.w = l;
        this.O = this.da("#dialog-wrapper");
        this.l = this.da("#inner-dialog-container");
        this.M = this.da(".title");
        this.data = this.aa = this.o = this.b = this.g = null;
        this.B("keyup", y(this.qu, this));
        this.B("keydown", y(J, this));
        this.B("request-close-dialog", y(this.zm, this));
        this.j = {};
        this.p = null;
        this.N();
        a = N.D;
        this.j[a + "/dialogs/simple_dialog.html"] = this.Li;
        this.j[a + "/dialogs/scrollable_dialog.html"] = this.Li;
        this.j[a + "/dialogs/flag_claim.html"] = this.ju;
        this.j[a + "/dialogs/flag_video.html"] = this.ku;
        this.j[a + "/dialogs/logout_info.html"] = this.lu;
        this.j[a + "/dialogs/paid_channel_info.html"] = this.mu;
        this.j[a + "/dialogs/player_error_info.html"] = this.nu;
        this.j[a + "/dialogs/remote_reset_info.html"] = this.ou;
        this.j[a + "/dialogs/debug_info.html"] = this.iu;
        this.B("dialog:complete", y(this.Am, this));
        this.$ = this.w.get("voiceHelper");
        this.$.Gb(this)
    }
    B(Rh, R);
    Rh.prototype.N = function() {
        this.g = this.sb("button", this.w, this);
        this.b = this.sb("button", this.w, this)
    }
    ;
    Rh.prototype.cancelClickHandler = function(a) {
        a && J(a);
        this.data && this.data.p && this.data.p();
        this.zm()
    }
    ;
    Rh.prototype.okClickHandler = function(a) {
        J(a);
        this.Am()
    }
    ;
    d = Rh.prototype;
    d.Pi = function() {
        this.g.ea();
        this.b.ea();
        this.o && this.o.W()
    }
    ;
    d.it = function() {
        this.Cr() || this.cancelClickHandler()
    }
    ;
    d.Hm = function() {
        return !(!this.data || !this.data.b)
    }
    ;
    d.Cr = function() {
        return !(!this.data || !this.data.C)
    }
    ;
    d.uc = function(a) {
        Rh.A.uc.call(this, a);
        this.data ? (this.data.g ? this.Fu() : this.data.templateUrl && this.Z.get(a.templateUrl, {}, y(this.Eu, this)),
        this.G && this.element.removeClass(this.G),
        this.element.addClass(this.data.className),
        this.G = this.data.className,
        this.element.html() && (this.hb(this.M, this.F.P(this.data.title)),
        this.Hm() ? (this.data.k ? (this.g.model = new S(this.data.k,"confirm-dialog-cancel-button"),
        this.g.Tb()) : this.g.Xa(),
        this.data.h ? (this.b.model = new S(this.data.h,"confirm-dialog-ok-button"),
        this.b.Tb()) : this.b.Xa(),
        this.o = this.data.w == this.b.K.id ? this.b : this.g,
        this.Pi()) : (this.g.Xa(),
        this.b.Xa()),
        this.g.U(),
        this.b.U())) : this.Mi()
    }
    ;
    d.Mi = function() {
        this.k && (this.k.$destroy(),
        this.Vf())
    }
    ;
    d.Vf = function() {
        for (var a = this.h.length - 1; 0 <= a; --a) {
            var b = this.h[a];
            b instanceof Kh || (b instanceof L ? (na(b),
            zc(b.K)) : this.h[a].element.remove(),
            Pa(this.h, b),
            b.id in this.children && delete this.children[b.id])
        }
        this.p = null
    }
    ;
    d.Fu = function() {
        if (this.l) {
            var a = this.data.g;
            null != a && bb(this.O, this.IB(a));
            this.w.contains(a) ? (this.p = this.HB(a, this.l, this.w),
            this.p.model = this.data) : (this.rd(this.l, "<" + a + ' activate-when="dialog.isActive" data="dialog.data"></' + a + ">"),
            this.Li())
        }
    }
    ;
    d.IB = function(a) {
        return "dialog-wrapper-" + a
    }
    ;
    d.Eu = function(a) {
        this.rd(this.l, a);
        this.W();
        this.focus();
        (a = this.j[this.data.templateUrl]) && a.call(this)
    }
    ;
    d.Li = function() {
        this.Mi();
        this.k = this.scope.$new();
        this.V(angular.element(this.l).contents())(this.k);
        this.W()
    }
    ;
    d.W = function() {
        Rh.A.W.call(this);
        this.p && this.p.W();
        this.og()
    }
    ;
    d.qu = function(a) {
        J(a);
        var b = a.target;
        switch (a.keyCode) {
        case 8:
        case 27:
            this.it();
            break;
        case 13:
            a.target && Uc(b, "back") && this.it()
        }
        this.Hm() && this.fJ(a.keyCode, b);
        this.Ec(this.scope)
    }
    ;
    d.fJ = function(a) {
        switch (a) {
        case 39:
            this.b.isHidden || (this.o = this.b,
            this.Pi());
            break;
        case 37:
            this.g.isHidden || (this.o = this.g,
            this.Pi())
        }
    }
    ;
    d.zm = function(a) {
        this.Mi();
        this.k = null;
        a || this.L("request-close-dialog");
        this.rg()
    }
    ;
    d.ju = function() {
        this.hb(this.da(".text"), this.F.P(this.data.video.title));
        this.hb(this.da(".url"), this.data.o)
    }
    ;
    d.ku = function() {
        this.hb(this.da(".url"), this.data.o)
    }
    ;
    d.lu = function() {
        this.hb(this.da(".display-name"), this.data.j.displayName);
        this.hb(this.da(".platform-user-name"), this.data.j.platformUserName);
        this.da(".login-user-icon").style.backgroundImage = "url(" + this.data.j.imageUrl + ")";
        var a = this.data.j.platformUserIcon || "";
        this.da(".platform-user-icon").style.backgroundImage = "url(" + a + ")";
        a = "[[<div>You're signed in as <strong>" + this.data.j.displayName + "&nbsp;</strong></div>|Tooltip displaying the YouTube username of the currently signed-in user.]]";
        this.rd(this.da(".signed-in-message"), this.F.P(a))
    }
    ;
    d.mu = function() {
        this.hb(this.da(".channel-url"), this.data.H())
    }
    ;
    d.nu = function() {
        this.hb(this.da(".player-error"), this.F.P(this.data.G()))
    }
    ;
    d.ou = function() {
        var a = this.data.F().la();
        this.tb(this.l, 0 < a.length);
        var b = "";
        a.forEach(function(a) {
            a = new Oh(a);
            b += '<li class="' + a.deviceClass + '">' + a.displayString + "</li>"
        });
        this.rd(this.da(".devices"), b)
    }
    ;
    d.iu = function() {
        var a = "<ul>", b;
        for (b in this.data.l)
            a += "<li><span>" + b + ":</span> " + this.data.l[b] + "</li>";
        a += "</ul>";
        this.rd(this.da(".message"), a)
    }
    ;
    d.Am = function() {
        this.data.I()
    }
    ;
    Rh.$inject = "$scope $element $attrs $compile locale templateClient dialogService injector".split(" ");
    function T(a, b) {
        this.M = this.templateUrl = this.title = this.className = "";
        this.C = this.b = !1;
        this.I = a || p;
        this.p = b || p;
        this.h = "[[OK|Standard button title in a dialog popup. Accepts changes made by a user.]]";
        this.k = "[[Cancel|Standard button title in a dialog popup. Usually closes the dialog without performing any action.]]";
        this.w = "confirm-dialog-cancel-button"
    }
    ;function Sh(a, b) {
        T.call(this, a, b);
        this.title = "[[Captions Settings|Settings screen where the user can choose the language of subtitles or turn them off.]]";
        this.g = "closed-captions"
    }
    B(Sh, T);
    function Th(a, b) {
        T.call(this);
        this.title = "Debug Info";
        this.templateUrl = N.D + "/dialogs/debug_info.html";
        this.className = "text-dialog";
        this.l = a.oG();
        this.l.Storage = b.pG()
    }
    B(Th, T);
    function Uh(a, b) {
        T.call(this);
        this.title = "[[Tell us what you think or report an issue|Title of a page where user can submit their issue or provide a feedback.]]";
        this.g = "qrDialog";
        this.className = "feedback";
        this.baseUrl = "www.youtube.com/tv_feedback";
        a.k ? this.baseUrl = "www.youtube.com/ps3_feedback" : a.j ? this.baseUrl = "www.youtube.com/wiiu_feedback" : a.o && (this.baseUrl = "www.youtube.com/xb1_feedback");
        this.qrCodeUrl = this.baseUrl + "?" + Uf(b)
    }
    B(Uh, T);
    function Vh(a, b) {
        T.call(this, null, b);
        this.title = "[[Submit a claim for:|Displayed in a dialog when a user decides to claim that a video infringes copyrights. Followed by a list of options.]]";
        this.templateUrl = N.D + "/dialogs/flag_claim.html";
        this.video = a;
        this.o = "youtu.be/" + this.video.videoId
    }
    B(Vh, T);
    function Wh() {
        T.call(this);
        this.title = "[[Flag This Video For:|Displayed in a dialog when a user decides to claim that a video is inappropriate. Followed by a list of options.]]";
        this.g = "flagOptions"
    }
    B(Wh, T);
    function Xh(a, b) {
        T.call(this, null, b);
        this.title = "[[To Flag this video|Tooltip helping a user to mark a video as inappropriate. Followed by a list of steps that needs to be performed.]]";
        this.templateUrl = N.D + "/dialogs/flag_video.html";
        this.video = a;
        this.o = "youtu.be/" + this.video.videoId
    }
    B(Xh, T);
    function Yh(a) {
        T.call(this);
        this.title = "[[Get help with YouTube on TV|Title of a page where user can access to the help articles on how to use YouTube on TV application.]]";
        this.g = "qrDialog";
        this.className = "help";
        this.baseUrl = a ? "www.youtube.com/ps3_help" : "www.youtube.com/tv_help"
    }
    B(Yh, T);
    function Zh(a, b, c) {
        T.call(this, a, c);
        this.title = b || "[[Sign in to YouTube:|Dialog title helping a user to sign in to YouTube via this application.|12570103]]";
        this.g = "loginInfo"
    }
    B(Zh, T);
    function $h(a, b) {
        T.call(this, b);
        this.title = "[[Sign Out?|Dialog title asking a user if she wants to sign out from her YouTube account via this application.]]";
        this.templateUrl = N.D + "/dialogs/logout_info.html";
        this.b = !0;
        this.j = a
    }
    B($h, T);
    function ai(a, b, c) {
        T.call(this, b, c);
        this.title = "[[Payment Required|Title of a dialog that asks user to make a payment in order to play a video.]]";
        this.templateUrl = N.D + "/dialogs/paid_channel_info.html";
        this.channelName = a
    }
    B(ai, T);
    ai.prototype.H = function() {
        return "www.youtube.com/user/" + this.channelName
    }
    ;
    function bi(a, b) {
        T.call(this, a, b);
        this.title = "[[YouTube TV is requesting permission to:|Dialog title that tells users that the application is requestin new permissions. The list of permissions will follow this title.]]";
        this.templateUrl = N.D + "/dialogs/paid_scope.html";
        this.type = "remote-pair";
        this.C = this.b = !0;
        this.h = "[[Accept|Text on button that accepts new permissions]]";
        this.k = "[[Sign out|Text on button that signs user out of application]]";
        this.className = "text-dialog";
        this.w = "confirm-dialog-ok-button"
    }
    B(bi, T);
    function ci(a, b, c) {
        T.call(this, b, c);
        this.title = "[[Playback Error.|Tooltip displayed when a video cannot be played.]]";
        this.templateUrl = N.D + "/dialogs/player_error_info.html";
        this.b = !0;
        this.className = "player-error-dialog";
        this.h = "[[Next Video|Button title in a dialog popup. Proceeds playback to the next video.]]";
        this.k = "[[Back to Guide|Button title in a dialog popup. Navigates back to the main Guide page.]]";
        this.errorMessage = a
    }
    B(ci, T);
    ci.prototype.G = function() {
        return this.errorMessage
    }
    ;
    function di() {
        T.call(this);
        this.title = "[[Pair your phone, tablet or laptop.|Tooltip helping a user to connect their mobile device with the application.|11149392]]";
        this.g = "pairing";
        this.type = "remote-pair"
    }
    B(di, T);
    function ei(a) {
        K.call(this);
        this.length = 0;
        this.b = [];
        a && this.push(a)
    }
    B(ei, K);
    d = ei.prototype;
    d.push = function(a) {
        this.St("push", a)
    }
    ;
    d.unshift = function(a) {
        this.St("unshift", a)
    }
    ;
    d.la = function() {
        return this.b
    }
    ;
    d.fa = function(a) {
        return this.b[a]
    }
    ;
    d.ja = function(a) {
        this.b = a.slice();
        this.length = a.length;
        this.ng(this.b)
    }
    ;
    d.HU = function(a, b) {
        this.b[a] = b;
        this.length = this.b.length;
        this.ng(b)
    }
    ;
    d.Y = function() {
        return this.length
    }
    ;
    d.slice = function(a, b) {
        var c;
        switch (arguments.length) {
        case 0:
            c = this.b.slice();
            break;
        case 1:
            c = this.b.slice(a);
            break;
        case 2:
            c = this.b.slice(a, b)
        }
        return new ei(c)
    }
    ;
    d.splice = function(a, b, c) {
        var e;
        switch (arguments.length) {
        case 0:
            e = this.b.splice();
            break;
        case 1:
            e = this.b.splice(a);
            break;
        case 2:
            e = this.b.splice(a, b);
            break;
        default:
            e = this.b.splice.apply(this.b, arguments)
        }
        this.length = this.b.length;
        this.ng(this.b);
        return new ei(e)
    }
    ;
    d.clear = function() {
        this.length = this.b.length = 0;
        this.ng()
    }
    ;
    d.IG = function(a) {
        function b(a, b) {
            return a - b
        }
        this.b.sort(a || b);
        return this
    }
    ;
    d.ng = function(a) {
        this.T("items:changed", a)
    }
    ;
    d.St = function(a, b) {
        var c = v(b) ? b : [b]
          , e = c.length;
        0 < e && (this.b[a].apply(this.b, c),
        this.length += e,
        this.ng(b))
    }
    ;
    function fi(a, b) {
        T.call(this, b);
        this.title = "[[Remove Paired Devices?|Dialog title asking a user for a confirmation to disconnect any mobile devices paired with the application]]";
        this.templateUrl = N.D + "/dialogs/remote_reset_info.html";
        this.b = !0;
        this.className = "remote-reset-dialog";
        this.type = "remote-reset";
        this.N = a
    }
    B(fi, T);
    fi.prototype.F = function() {
        return this.N.Ig()
    }
    ;
    function gi(a, b) {
        T.call(this);
        this.templateUrl = N.D + "/dialogs/scrollable_dialog.html";
        this.title = a || "";
        this.contentUrl = b || ""
    }
    B(gi, T);
    function hi(a, b) {
        T.call(this, a, b);
        this.title = "[[Signed Out|Dialog title that informs the user that they are signed out of the application]]";
        this.templateUrl = N.D + "/dialogs/signed_out_info.html";
        this.b = !0;
        this.className = "text-dialog"
    }
    B(hi, T);
    function ii(a, b, c, e, f) {
        T.call(this, e, f);
        this.templateUrl = N.D + "/dialogs/simple_dialog.html";
        this.title = a || "";
        this.contentUrl = b || "";
        this.className = c || "text-dialog"
    }
    B(ii, T);
    function U(a, b, c, e, f, g, k) {
        this.b = a;
        this.Wb = b;
        this.Ng = c;
        this.title = e || "";
        this.iconClass = f || "";
        this.description = g || "";
        this.tileClass = k || "";
        this.P()
    }
    U.prototype.P = function() {
        this.title = this.b.P(this.title);
        this.description = this.b.P(this.description)
    }
    ;
    function ji(a, b, c, e) {
        this.channel = e || null;
        U.call(this, a, b, c)
    }
    B(ji, U);
    ji.prototype.getTitle = function() {
        return this.b.P("[[Sign Out|Title and voice command for action tile allowing users to sign out from the app.|1399182427]]")
    }
    ;
    ji.prototype.getUserName = function() {
        return this.channel && this.channel.displayName || ""
    }
    ;
    function ki(a, b, c, e, f, g, k, l, n, q, s, r, u, O, X) {
        K.call(this);
        this.k = b;
        this.l = c;
        this.N = a;
        this.b = e;
        this.h = f;
        this.C = g;
        this.I = k;
        this.j = l;
        this.p = n;
        this.G = q;
        this.F = s;
        this.w = r;
        this.o = u;
        this.rc = O;
        this.H = X;
        this.Ju()
    }
    B(ki, K);
    d = ki.prototype;
    d.pu = function(a) {
        this.g = a
    }
    ;
    d.Ju = function() {
        for (var a = [{
            eventName: "request-clear-cookies",
            handler: this.DE
        }, {
            eventName: "request-close-dialog",
            handler: this.mg
        }, {
            eventName: "request-flag-options",
            handler: this.gl
        }, {
            eventName: "request-flag-video",
            handler: this.HE
        }, {
            eventName: "request-flag-claim",
            handler: this.GE
        }, {
            eventName: "request-cc-options",
            handler: this.EE
        }, {
            eventName: "network-failure",
            handler: this.KE
        }, {
            eventName: "request-toggle-subscription",
            handler: this.OE
        }, {
            eventName: "request-debug-info",
            handler: this.FE
        }, {
            eventName: "request-logout",
            handler: this.JE
        }, {
            eventName: "request-login",
            handler: this.Fr
        }, {
            eventName: "request_paid_scope_dialog",
            handler: this.LE
        }, {
            eventName: "request-pairing",
            handler: this.ME
        }, {
            eventName: "request-remote-reset",
            handler: this.NE
        }, {
            eventName: "request-view-tos",
            handler: this.UE
        }, {
            eventName: "request-view-credits",
            handler: this.PE
        }, {
            eventName: "request-view-kenko",
            handler: this.SE
        }, {
            eventName: "request-view-shiyojo",
            handler: this.TE
        }, {
            eventName: "request-like-video",
            handler: this.IE
        }, {
            eventName: "request-view-help",
            handler: this.RE
        }, {
            eventName: "request-view-feedback",
            handler: this.QE
        }], b = 0, c = a.length; b < c; ++b)
            this.F.B(a[b].eventName, y(a[b].handler, this));
        a = y(this.VE, this);
        this.j.B("state:changed", a);
        this.j.ah(a)
    }
    ;
    d.ya = function(a) {
        this.g && this.g.uc(a);
        this.T("dialog:changed", !0)
    }
    ;
    d.mg = function() {
        this.g && this.g.uc(null);
        this.T("dialog:changed", !1)
    }
    ;
    d.dF = function() {
        return this.g.Cr()
    }
    ;
    d.ZC = function() {
        return this.g ? this.g.data : null
    }
    ;
    d.ve = function(a, b, c, e, f) {
        a = new ii(a,b,c,e,f);
        this.ya(a)
    }
    ;
    d.Jl = function(a, b) {
        this.ya(new gi(a,b))
    }
    ;
    d.Yn = function(a) {
        var b = new T;
        b.title = a;
        this.ya(b)
    }
    ;
    d.DE = function() {
        var a = new T(y(this.bA, this));
        a.className = "confirm-cookies";
        a.title = "[[Clear cookies|Prompt on a button for verifiying the user would like to clear the cookies on their device.]]";
        a.templateUrl = N.D + "/dialogs/confirm_cookies_clear.html";
        a.h = "[[Clear cookies|Prompt on a button for verifiying the user would like to clear the cookies on their device.]]";
        a.b = !0;
        this.ya(a)
    }
    ;
    d.bA = function() {
        this.o.isSupported() && (this.o.clear(),
        this.ve("[[Cookies cleared|Dialog title for a message informing the user that their cookies have been successfully removed.]]", N.D + "/dialogs/cookies_cleared_info.html"))
    }
    ;
    d.gl = function(a) {
        this.ya(new Wh);
        a && J(a)
    }
    ;
    d.HE = function(a) {
        this.ya(new Xh(this.k.currentVideo,y(this.gl, this)));
        J(a)
    }
    ;
    d.GE = function(a) {
        this.ya(new Vh(this.k.currentVideo,y(this.gl, this)));
        J(a)
    }
    ;
    d.EE = function(a) {
        var b = y(this.fC, this, this.b.isPlaying);
        this.ya(new Sh(b,b));
        a && J(a)
    }
    ;
    d.fC = function(a) {
        a && this.b.Oc()
    }
    ;
    d.FE = function() {
        this.ya(new Th(this.h,this.H))
    }
    ;
    d.kr = function(a, b) {
        this.j.Ib(y(function(c) {
            if (c)
                a(!1);
            else {
                var e = !1;
                this.b.isPlaying && (e = !0,
                this.b.zc());
                var f = y(function() {
                    e && this.b.Oc()
                }, this);
                this.ya(new Zh(y(function() {
                    a(!0);
                    f()
                }, this),b,f))
            }
        }, this))
    }
    ;
    d.IE = function(a) {
        var b = a.detail.videoId
          , c = a.detail.jA;
        this.kr(y(function(a) {
            this.C.send({
                likeValue: c,
                videoId: b
            });
            this.I.add("video_like_value", b, c);
            a && this.T("login:complete")
        }, this), "[[Please sign in to like or dislike...|Dialog title asking a user to sign in before they can like or dislike this video.]]")
    }
    ;
    d.OE = function(a) {
        a = a.detail;
        a.g ? this.aE(a) : this.kr(y(this.$D, this, a), "[[Please sign in to subscribe...|Dialog title asking a user to sign in before they can subscribe.]]")
    }
    ;
    d.$D = function(a, b) {
        this.G.send({
            channelName: a.username
        }, y(function() {
            this.rc.pr(a.username, !1);
            b ? this.T("login:complete") : this.l.j = !0
        }, this), y(function(a) {
            b && this.T("login:complete");
            this.WD(a)
        }, this))
    }
    ;
    d.aE = function(a) {
        var b = this.b.isPlaying;
        b && this.b.zc();
        this.ya(new ai(a.Qa,null,y(function() {
            b && this.b.Oc()
        }, this)))
    }
    ;
    d.WD = function(a) {
        var b = "[[A subscription error has occurred please try again later.|Text message displayed when an error occurs while user tries to subscribe to a channel.]]";
        a.errorMessage && -1 < a.errorMessage.indexOf("NoLinkedYouTubeAccount") && (b = "[[To subscribe, you need to initialize YouTube for your account. Sign into YouTube on your computer or mobile device to complete the process.|Text message displayed when an error occurs while user tries to subscribe to a channel.]]");
        this.ya(new ii(b))
    }
    ;
    d.JE = function(a) {
        a = a.detail.data.channel;
        this.h.Rr(a);
        this.ya(new $h(a,y(this.T, this, "logout:complete")))
    }
    ;
    d.VE = function(a, b, c) {
        !a && b && (c ? this.BH() : this.ya(new hi(y(this.Fr, this),y(this.T, this, "logout:confirmed"))))
    }
    ;
    d.BH = function() {
        this.ve("[[Sign in error|Dialog title that tells the user that he is no longer signed into YouTube account on TV due to error]]", N.D + "/dialogs/authentication_error_info.html")
    }
    ;
    d.Fr = function() {
        this.ya(new Zh(y(this.T, this, "login:complete")))
    }
    ;
    d.LE = function() {
        this.ya(new bi(y(this.T, this, "paidScope:changed", !0),y(this.T, this, "paidScope:changed", !1)))
    }
    ;
    d.ME = function() {
        this.ya(new di)
    }
    ;
    d.NE = function() {
        this.ya(new fi(this.p,y(this.QG, this)))
    }
    ;
    d.QG = function() {
        this.p.RF();
        this.T("dialog:changed", !1);
        this.l.Uq()
    }
    ;
    d.KE = function() {
        this.b.sk();
        this.k.Vp();
        this.ve("[[A network error has occurred|Dialog title that tells the user that a network error has occurred]]", N.D + "/dialogs/network_error_info.html")
    }
    ;
    d.UE = function() {
        this.ve("[[Terms of Service and Privacy Policy|Dialog title that shows links to terms of use and privacy documents on youtube.com.]]", N.D + "/dialogs/tos_info.html")
    }
    ;
    d.PE = function() {
        this.Jl("[[Credits|Dialog title that shows credit information, giving credit to all open-source software used in building this product.]]", N.D + "/dialogs/licenses.html")
    }
    ;
    d.SE = function() {
        this.Jl("\u5065\u5eb7\u306e\u305f\u3081\u306e\u3054\u6ce8\u610f", N.D + "/dialogs/kenko_warning.html")
    }
    ;
    d.TE = function() {
        this.Jl("\u4f7f\u7528\u4e0a\u306e\u3054\u6ce8\u610f", N.D + "/dialogs/shiyojo_warning.html")
    }
    ;
    d.RE = function() {
        this.w.isSupported() && this.w.triggerHelp() || this.ya(new Yh(this.h.k))
    }
    ;
    d.QE = function() {
        this.ya(new Uh(this.h,this.h.vF()))
    }
    ;
    ki.$inject = "locationService watchModel browseModel playerFacade environmentModel likeService cacheService authService remoteService subscribeService rootDispatcher systemApi cookiesApi subscriptionsModel localStorage".split(" ");
    function li(a) {
        K.call(this);
        this.h = this.g = this.k = this.j = this.l = null;
        this.o = !1;
        this.b = null;
        this.I = 150;
        this.w = a.jf ? 75 : 300;
        this.C = a.jf ? 75 : 200;
        this.H = 20;
        this.p = !1;
        this.Ki()
    }
    B(li, K);
    var mi = {
        Jy: 0,
        Ky: -90,
        Ly: 90,
        My: -180,
        Ny: 180
    }
      , ni = {
        $j: "V",
        Zj: "H"
    };
    d = li.prototype;
    d.Mo = function(a, b) {
        this.Ki();
        b || (this.h = a);
        this.Bk(a);
        this.p = !0
    }
    ;
    d.YA = function(a) {
        this.Bk(a)
    }
    ;
    d.XA = function(a) {
        this.p = !1;
        this.h ? (150 >= a.timeStamp - this.h.timeStamp || this.j <= this.w && this.l <= this.C && !this.o) && this.T("tap", a) : this.Bk(a);
        this.Ki();
        this.h = null
    }
    ;
    d.Ki = function() {
        this.j = this.l = 0;
        this.g = this.k = this.b = null;
        this.o = !1
    }
    ;
    d.Wf = function(a) {
        return null === this.k ? !0 : 20 >= Math.abs(this.k - a)
    }
    ;
    d.Bk = function(a) {
        var b = a && a.changedTouches && a.changedTouches[0] ? a.changedTouches[0] : a
          , b = {
            x: b.screenX,
            y: b.screenY
        };
        this.g || (this.g = b);
        this.l = Math.abs(this.g.y - b.y);
        this.j = Math.abs(this.g.x - b.x);
        b = this.LA(this.g, b);
        this.MA(a);
        this.k = b
    }
    ;
    d.MA = function(a) {
        (this.b === ni.Zj || !this.b) && this.j >= this.w && (this.Wf(mi.Ly) ? (this.Hh("swiperight", a),
        this.b = ni.Zj) : this.Wf(mi.Ky) && (this.Hh("swipeleft", a),
        this.b = ni.Zj));
        if ((this.b === ni.$j || !this.b) && this.l >= this.C)
            if (this.Wf(mi.Jy))
                this.Hh("swipedown", a),
                this.b = ni.$j;
            else if (this.Wf(mi.Ny) || this.Wf(mi.My))
                this.Hh("swipeup", a),
                this.b = ni.$j
    }
    ;
    d.Hh = function(a, b) {
        this.T(a, this.h);
        this.Mo(b, !0);
        this.o = !0
    }
    ;
    d.oK = function(a, b) {
        return a && b ? {
            x: b.x - a.x,
            y: b.y - a.y
        } : {
            x: 0,
            y: 0
        }
    }
    ;
    d.LA = function(a, b) {
        if (a && b) {
            var c = this.oK(a, b);
            return Math.round(180 * Math.atan2(c.x, c.y) / Math.PI)
        }
        return null
    }
    ;
    li.inject = ["environmentModel"];
    function oi(a, b, c, e, f, g, k, l, n, q) {
        this.j = a;
        this.I = b;
        this.o = c;
        this.b = e;
        this.w = f;
        this.k = g;
        this.g = k;
        this.l = q;
        this.C = l;
        this.p = n;
        this.Hu();
        this.Gu()
    }
    d = oi.prototype;
    d.Hu = function() {
        this.ed("keydown", this.jq);
        this.ed("keyup", this.jq);
        this.ed("mousedown", this.kq);
        this.ed("mouseup", this.kq);
        this.ed("mousewheel", this.w(10, y(this.RA, this)));
        this.ed("touchstart", y(this.b.Mo, this.b));
        this.ed("touchmove", y(this.b.YA, this.b));
        this.ed("touchend", y(this.b.XA, this.b));
        this.b.B("tap", y(this.WA, this));
        this.b.B("swipedown", y(this.SA, this));
        this.b.B("swipeleft", y(this.TA, this));
        this.b.B("swiperight", y(this.UA, this));
        this.b.B("swipeup", y(this.VA, this))
    }
    ;
    d.Gu = function() {
        this.g.isSupported() && (this.g.setMinimalConfidence(0.8),
        this.g.createEngagementCommand("You Tube", y(this.oD, this), "jutub", 0.8),
        this.g.setEngagementTimeout(1E4),
        this.g.addCommand(this.g.createCommand(this.p.P("[[Stop listening|Speech command spoken to stop voice engagement.]]"), y(this.pD, this))))
    }
    ;
    d.ed = function(a, b) {
        this.j.addEventListener(a, y(b, this), !0)
    }
    ;
    d.jq = function(a) {
        this.k.Lb();
        var b = this.o.qA(a.keyCode);
        16 === b ? J(a, !1, !0) : a.b || b == a.keyCode || (b = Od(a.target, a.type, b, !0, a),
        J(a, !1, !0),
        a.target.dispatchEvent(b))
    }
    ;
    d.PF = function() {
        return this.b.p
    }
    ;
    d.kq = function(a) {
        if (this.h)
            this.h = !1;
        else {
            var b = a.type.replace("mouse", "key");
            this.jd(a, 13, b)
        }
    }
    ;
    d.RA = function(a) {
        this.jd(a, 0 < a.wheelDelta ? 38 : 40)
    }
    ;
    d.WA = function(a) {
        this.h = !0;
        this.jd(a, 13, "keydown");
        this.jd(a, 13, "keyup")
    }
    ;
    d.SA = function(a) {
        this.h = !0;
        this.jd(a, 38)
    }
    ;
    d.VA = function(a) {
        this.h = !0;
        this.jd(a, 40)
    }
    ;
    d.TA = function(a) {
        this.h = !0;
        this.jd(a, 39)
    }
    ;
    d.UA = function(a) {
        this.h = !0;
        this.jd(a, 37)
    }
    ;
    d.jd = function(a, b, c) {
        b = Od(a.target, c ? c : "keydown", b, !0, a);
        J(a, !1, !0);
        a.target.dispatchEvent(b)
    }
    ;
    d.Hl = function(a) {
        this.It("keydown", a);
        this.It("keyup", a)
    }
    ;
    d.It = function(a, b) {
        this.k.Lb();
        var c = this.j.activeElement || this.j
          , e = Od(c, a, b, !0);
        c.dispatchEvent(e)
    }
    ;
    d.oD = function(a, b) {
        this.C.L("engage-change", a);
        b && this.l.Qk(b)
    }
    ;
    d.pD = function(a, b) {
        this.g.exitEngagementMode();
        this.l.Qk(b)
    }
    ;
    oi.inject = "document $route environmentModel gestureRecognizer rateLimit playerFacade speechApi rootDispatcher locale speechReporting".split(" ");
    function pi(a, b, c, e, f) {
        L.call(this);
        this.C = a;
        this.H = b;
        this.w = c;
        this.goBackLabel = e.P("[[Go back|Speech command for going back from the current screen.]]");
        this.searchLabel = e.P("[[Search|Speech command to goto search.]]");
        this.goHomeLabel = e.P("[[Go home|Speech command for going back to the home screen.]]");
        this.deleteLabel = e.P("[[Delete|Speech command to delete a video from a user's playlist]]");
        this.showMoreLabel = e.P("[[Show more|Speech command to enable browse while watching a video]]");
        this.o = f.get("voiceHelper");
        this.l = f.get("voiceHelper");
        this.g = f.get("voiceHelper");
        this.G = this.j = f.get("voiceHelper");
        this.F = this.g;
        this.h = "";
        this.k = null;
        this.Dw()
    }
    B(pi, L);
    d = pi.prototype;
    d.Dw = function() {
        var a = y(this.JA, this)
          , b = y(this.HA, this)
          , c = y(this.IA, this)
          , e = y(this.KA, this);
        this.j.Ga("[[Go back|Speech command for going back from the current screen.]]", b);
        this.j.Gb(this);
        this.j.disable();
        this.g.Ga("[[Go back|Speech command for going back from the current screen.]]", b);
        this.g.Ga("[[Show more|Speech command to enable browse while watching a video]]", e);
        this.g.Ga("[[Go home|Speech command for going back to the home screen.]]", c);
        this.g.Ga("[[Search|Speech command to goto search.]]", a);
        this.g.Gb(this);
        this.g.disable();
        this.l.Ga("[[Go back|Speech command for going back from the current screen.]]", b);
        this.l.Ga("[[Go home|Speech command for going back to the home screen.]]", c);
        this.l.Gb(this);
        this.l.disable();
        this.o.Ga("[[Search|Speech command to goto search.]]", a);
        this.o.Gb(this);
        this.$ = this.o
    }
    ;
    d.JA = function() {
        this.C.Hl(83)
    }
    ;
    d.HA = function() {
        this.C.Hl(27)
    }
    ;
    d.IA = function() {
        this.w.mg();
        this.H.state("browse", {})
    }
    ;
    d.KA = function() {
        this.C.Hl(40)
    }
    ;
    d.mJ = function(a) {
        this.h = a;
        switch (this.h) {
        case "browse":
            this.wy() ? this.De(this.l) : this.vy() ? this.De(this.F) : this.De(this.o);
            break;
        case "watch":
            this.De(this.g);
            break;
        case "dialog":
            this.Xn() ? this.$.disable() : this.De(this.j);
            break;
        case "search":
            this.De(this.G);
            break;
        default:
            this.$.disable()
        }
        this.xy("dialog" == this.h)
    }
    ;
    d.Xn = function() {
        return "dialog" == this.h && this.w.dF()
    }
    ;
    d.wy = function() {
        return "browse" == this.h && "search" == this.H.mode()
    }
    ;
    d.vy = function() {
        return "browse" == this.h && "post-play" == this.H.mode()
    }
    ;
    d.De = function(a) {
        this.$.isSupported() && (this.$.disable(),
        this.$ = a,
        this.$.enable())
    }
    ;
    d.xy = function(a) {
        var b = this.w.ZC()
          , b = b ? b.g : null;
        this.k && (this.removeClass(this.k),
        this.k = null);
        a && b && (this.k = "legend-for-dialog-" + b,
        this.addClass(this.k));
        a ? this.Xn() ? this.addClass("mandatory-dialog") : this.addClass("dialog") : (this.removeClass("dialog"),
        this.removeClass("mandatory-dialog"))
    }
    ;
    pi.inject = ["gestureService", "locationService", "dialogService", "locale", "injector"];
    function V() {
        this.b = Array;
        this.j = {}
    }
    d = V.prototype;
    d.Na = function(a, b) {
        this.j[a] = y(b, this)
    }
    ;
    d.parse = function(a, b) {
        if (b) {
            var c = null, e;
            for (e in b)
                c = this.rK(e),
                c.call(this, a, e, b[e])
        }
        return a
    }
    ;
    d.rK = function(a) {
        return this.j[a] || this.bG
    }
    ;
    d.bG = function(a, b, c) {
        b = bg(b, "_");
        b in a && (a[b] = this.sa(c));
        return a
    }
    ;
    d.sa = function(a) {
        return a
    }
    ;
    function qi() {
        V.call(this);
        this.Na("feed", this.AI);
        this.Na("entry", this.cf);
        this.Na("openSearch$startIndex", this.CI);
        this.Na("openSearch$totalResults", this.DI);
        this.Na("openSearch$itemsPerPage", this.BI)
    }
    B(qi, V);
    d = qi.prototype;
    d.AI = function(a, b, c) {
        return this.parse(a, c)
    }
    ;
    d.DI = function(a, b, c) {
        a.dc = this.sa(c);
        return a
    }
    ;
    d.CI = function(a, b, c) {
        a.$K = this.sa(c);
        return a
    }
    ;
    d.BI = function(a, b, c) {
        a.ZK = this.sa(c);
        return a
    }
    ;
    d.cf = function(a, b, c) {
        a.zQ = c;
        return a
    }
    ;
    d.al = function(a) {
        return v(a) ? a[0] : a
    }
    ;
    d.sa = function(a) {
        return (a = this.al(a)) && a.$t ? a.$t : ""
    }
    ;
    function ri(a, b) {
        this.model = a;
        this.cancel = b || p
    }
    ;var si = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    function ti(a) {
        if (ui) {
            ui = !1;
            var b = h.location;
            if (b) {
                var c = b.href;
                if (c && (c = vi(c)) && c != b.hostname)
                    throw ui = !0,
                    Error();
            }
        }
        return a.match(si)
    }
    var ui = Nb;
    function vi(a) {
        return (a = ti(a)[3] || null) && decodeURIComponent(a)
    }
    function wi(a, b, c) {
        if (v(b))
            for (var e = 0; e < b.length; e++)
                wi(a, String(b[e]), c);
        else
            null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }
    function xi(a, b) {
        for (var c in b)
            wi(c, b[c], a);
        return a
    }
    function yi(a, b) {
        var c = xi([a], b);
        if (c[1]) {
            var e = c[0]
              , f = e.indexOf("#");
            0 <= f && (c.push(e.substr(f)),
            c[0] = e = e.substr(0, f));
            f = e.indexOf("?");
            0 > f ? c[1] = "?" : f == e.length - 1 && (c[1] = void 0)
        }
        return c.join("")
    }
    ;function zi(a, b, c, e, f, g, k, l, n, q, s) {
        this.id = a;
        this.path = b || "";
        this.p = e;
        this.I = c;
        this.b = f;
        this.Z = g;
        this.ga = k;
        this.o = l;
        this.k = n;
        this.l = q || {};
        this.w = s || null;
        this.F = this.N = this.G = this.H = p
    }
    d = zi.prototype;
    d.ag = function() {
        return "ot"
    }
    ;
    d.$e = function() {
        return ""
    }
    ;
    d.Gc = function(a) {
        var b = this.$e() + this.path;
        return yi(b, a || {})
    }
    ;
    d.ug = function() {
        return "GET"
    }
    ;
    d.ec = function(a, b, c, e) {
        this.H = y(this.I.rG, this.I, a);
        this.G = b ? this.I.xl(a, b) : p;
        this.N = c ? this.I.xl(a, c) : p;
        this.F = e ? this.I.xl(a, e) : p
    }
    ;
    d.jl = function() {
        this.G();
        this.G = p
    }
    ;
    d.$k = function() {
        this.N();
        this.N = p
    }
    ;
    d.fl = function() {
        this.F();
        this.H = this.F = p
    }
    ;
    d.Io = function() {
        this.H();
        this.H = this.F = this.N = this.G = p
    }
    ;
    d.load = function(a, b) {
        return this.cl(a, b)
    }
    ;
    d.cl = function(a, b, c, e, f, g) {
        var k = {};
        this.Qr(this.l);
        this.nF(this.l);
        z(k, this.l);
        a && z(k, a);
        if (this.k && (a = this.mF(k[this.k])))
            return b && b(a),
            new ri(a);
        e = e ? e : this.jr();
        return new ri(e,this.Ve(e, k, b, c, f, g))
    }
    ;
    d.jr = function() {
        return new this.o.b
    }
    ;
    d.Ve = function(a, b, c, e, f, g) {
        c = c || p;
        var k = y(this.OG, this, a, b, c);
        a = y(this.PG, this, a, c, e);
        this.jl();
        return "GET" === this.ug() ? this.p.get(this.Gc(), b, k, a) : "JSONP" === this.ug() ? this.p.jsonp(this.Gc(), b, k, a) : "POST" == this.ug() ? (b = g ? rg(b) : b,
        this.p.post(this.Gc(), {}, b, k, a, f)) : p
    }
    ;
    d.OG = function(a, b, c, e) {
        this.$k();
        this.o.parse(a, e);
        this.zF(this.k && b[this.k], a);
        this.fl();
        c(a)
    }
    ;
    d.PG = function(a, b, c, e) {
        this.Io();
        this.ga.g(this.ag(), this.path, e.b);
        c ? c(e) : b(a)
    }
    ;
    d.SF = function(a, b, c) {
        c[a] && (c[b] = c[a],
        delete c[a]);
        return c
    }
    ;
    d.Qr = function(a) {
        a && "" === a.hl && (a.hl = this.w.Ea,
        a.override_hl = 1)
    }
    ;
    d.nF = function(a) {
        a && "" === a.regionId && this.b.gdataRegionId && (a.regionId = this.b.gdataRegionId)
    }
    ;
    d.ri = function() {
        return this.o.b.CACHE_TYPE
    }
    ;
    d.mF = function(a) {
        return a && this.ri() ? this.Z.get(this.ri(), a) : null
    }
    ;
    d.zF = function(a, b) {
        a && this.ri() && this.Z.add(this.ri(), a, b)
    }
    ;
    function Ai(a, b, c, e, f, g, k, l, n, q, s) {
        var r = {
            alt: "json",
            key: "AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            v: "2.1"
        };
        s && z(r, s);
        this.g = g;
        zi.call(this, a, b, c, e, f, k, l, n, q, r)
    }
    B(Ai, zi);
    d = Ai.prototype;
    d.ag = function() {
        return this.b.useStageGdata ? "sgd" : "gd"
    }
    ;
    d.$e = function() {
        return this.b.useStageGdata ? "https://yt2009.truehosting.net/feeds/api" : "https://yt2009.truehosting.net/feeds/api"
    }
    ;
    d.ug = function() {
        return this.b.supportsCors ? "GET" : "JSONP"
    }
    ;
    d.load = function(a, b, c) {
        var e;
        a && (e = a.query,
        delete a.query);
        return this.ab(e, b, a, c)
    }
    ;
    d.ab = function(a, b, c, e, f) {
        c = c || {};
        c[this.k] = a;
        this.pF(c, this.l);
        b = this.cl(c, b, e, f);
        f || (b.model.serviceQuery = a);
        return b
    }
    ;
    d.Ve = function(a, b, c, e) {
        var f = !1, g;
        this.g.Ib(y(function(k) {
            if (!f) {
                k && (b.access_token = k);
                k = y(function(a) {
                    c && c(a);
                    this.g.PD()
                }, this);
                var l = y(function(a) {
                    e && e(a);
                    this.g.OD(a)
                }, this);
                g = zi.prototype.Ve.call(this, a, b, k, l)
            }
        }, this));
        return function() {
            g ? g() : f = !0
        }
    }
    ;
    d.pF = function(a, b) {
        b && b.fields && this.gK(b.fields) && (a.fields = this.fK(b.fields))
    }
    ;
    d.gK = function(a) {
        return !!Oa(Bi, function(b) {
            return D(a, b[0])
        })
    }
    ;
    d.fK = function(a) {
        F(Bi, function(b) {
            a = a.replace(b[0], this.mK(b[1]))
        }, this);
        return a
    }
    ;
    d.mK = function(a) {
        a = ob(lb(a, function(a) {
            return x(a) ? a.call(this) : a
        }, this));
        return Ka(a, Boolean).join(" and ")
    }
    ;
    var Bi = [["$default-filter", {
        jK: "not(app:control/yt:state)",
        iK: function() {
            return this.b.supportsPaidContent ? "" : "not(yt:paidContent/@type)"
        },
        pL: "media:group/yt:duration/@seconds>0"
    }], ["$inline-filter", {
        jK: "not(link/entry/app:control/yt:state)",
        oL: "not(link/entry/app:control/app:draft)",
        iK: function() {
            return this.b.supportsPaidContent ? "" : "not(link/entry/yt:paidContent/@type)"
        }
    }], ["$banner-quality", {
        b: function() {
            return this.b.qb
        }
    }]];
    function Ci(a, b, c, e) {
        L.call(this);
        this.j = a;
        this.l = b;
        this.k = e;
        this.activationCode = c.P("[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]");
        this.g = p;
        this.h = 0
    }
    B(Ci, L);
    d = Ci.prototype;
    d.ready = function() {
        this.Dr()
    }
    ;
    d.R = function() {
        this.j.Sz();
        this.k.clearTimeout(this.h);
        this.g();
        this.g = p;
        Ci.A.R.call(this)
    }
    ;
    d.Dr = function() {
        this.j.XF(y(this.WF, this), y(this.YF, this), y(this.ZF, this))
    }
    ;
    d.WF = function(a, b) {
        this.activationCode = a;
        this.U();
        this.h = this.k.setTimeout(y(this.Dr, this), 1E3 * b)
    }
    ;
    d.YF = function() {
        this.g = this.l.ab("default", y(this.er, this), null, y(this.er, this)).cancel
    }
    ;
    d.ZF = function() {
        this.Qb(this.K.querySelector(".connection-steps"), !1);
        this.Qb(this.K.querySelector(".connection-error"), !0)
    }
    ;
    d.er = function() {
        this.g = p;
        this.L("dialog:complete")
    }
    ;
    Ci.inject = ["authService", "userProfileService", "locale", "timeService"];
    function Di(a, b) {
        var c;
        a instanceof Di ? (this.fd = t(b) ? b : a.KB(),
        this.Yh(a.Sk()),
        this.Zh(a.Tk()),
        this.hg(a.$c()),
        this.ig(a.Te()),
        this.Xh(a.jg()),
        this.kg(a.LB().clone()),
        this.Wh(a.Rk())) : a && (c = ti(String(a))) ? (this.fd = !!b,
        this.Yh(c[1] || "", !0),
        this.Zh(c[2] || "", !0),
        this.hg(c[3] || "", !0),
        this.ig(c[4]),
        this.Xh(c[5] || "", !0),
        this.kg(c[6] || "", !0),
        this.Wh(c[7] || "", !0)) : (this.fd = !!b,
        this.b = new Ei(null,null,this.fd))
    }
    d = Di.prototype;
    d.ff = "";
    d.Yl = "";
    d.Vl = "";
    d.wi = null;
    d.Xl = "";
    d.Wl = "";
    d.em = !1;
    d.fd = !1;
    d.toString = function() {
        var a = []
          , b = this.Sk();
        b && a.push(Fi(b, Gi), ":");
        if (b = this.$c()) {
            a.push("//");
            var c = this.Tk();
            c && a.push(Fi(c, Gi), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.Te();
            null != b && a.push(":", String(b))
        }
        if (b = this.jg())
            this.vg() && "/" != b.charAt(0) && a.push("/"),
            a.push(Fi(b, "/" == b.charAt(0) ? Hi : Ii));
        (b = this.bt()) && a.push("?", b);
        (b = this.Rk()) && a.push("#", Fi(b, Ji));
        return a.join("")
    }
    ;
    d.resolve = function(a) {
        var b = this.clone()
          , c = a.uH();
        c ? b.Yh(a.Sk()) : c = a.vH();
        c ? b.Zh(a.Tk()) : c = a.vg();
        c ? b.hg(a.$c()) : c = a.Ll();
        var e = a.jg();
        if (c)
            b.ig(a.Te());
        else if (c = a.Ns()) {
            if ("/" != e.charAt(0))
                if (this.vg() && !this.Ns())
                    e = "/" + e;
                else {
                    var f = b.jg().lastIndexOf("/");
                    -1 != f && (e = b.jg().substr(0, f + 1) + e)
                }
            f = e;
            if (".." == f || "." == f)
                e = "";
            else if (D(f, "./") || D(f, "/.")) {
                for (var e = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], k = 0; k < f.length; ) {
                    var l = f[k++];
                    "." == l ? e && k == f.length && g.push("") : ".." == l ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(),
                    e && k == f.length && g.push("")) : (g.push(l),
                    e = !0)
                }
                e = g.join("/")
            } else
                e = f
        }
        c ? b.Xh(e) : c = a.tH();
        c ? b.kg(a.rH()) : c = a.sH();
        c && b.Wh(a.Rk());
        return b
    }
    ;
    d.clone = function() {
        return new Di(this)
    }
    ;
    d.Sk = function() {
        return this.ff
    }
    ;
    d.Yh = function(a, b) {
        this.Zb();
        if (this.ff = b ? Ki(a) : a)
            this.ff = this.ff.replace(/:$/, "");
        return this
    }
    ;
    d.uH = function() {
        return !!this.ff
    }
    ;
    d.Tk = function() {
        return this.Yl
    }
    ;
    d.Zh = function(a, b) {
        this.Zb();
        this.Yl = b ? Ki(a) : a;
        return this
    }
    ;
    d.vH = function() {
        return !!this.Yl
    }
    ;
    d.$c = function() {
        return this.Vl
    }
    ;
    d.hg = function(a, b) {
        this.Zb();
        this.Vl = b ? Ki(a) : a;
        return this
    }
    ;
    d.vg = function() {
        return !!this.Vl
    }
    ;
    d.Te = function() {
        return this.wi
    }
    ;
    d.ig = function(a) {
        this.Zb();
        if (a) {
            a = Number(a);
            if (isNaN(a) || 0 > a)
                throw Error("Bad port number " + a);
            this.wi = a
        } else
            this.wi = null;
        return this
    }
    ;
    d.Ll = function() {
        return null != this.wi
    }
    ;
    d.jg = function() {
        return this.Xl
    }
    ;
    d.Xh = function(a, b) {
        this.Zb();
        this.Xl = b ? Ki(a) : a;
        return this
    }
    ;
    d.Ns = function() {
        return !!this.Xl
    }
    ;
    d.tH = function() {
        return "" !== this.b.toString()
    }
    ;
    d.kg = function(a, b) {
        this.Zb();
        a instanceof Ei ? (this.b = a,
        this.b.Iq(this.fd)) : (b || (a = Fi(a, Li)),
        this.b = new Ei(a,null,this.fd));
        return this
    }
    ;
    d.lS = function(a, b) {
        return this.kg(a, b)
    }
    ;
    d.bt = function() {
        return this.b.toString()
    }
    ;
    d.rH = function() {
        return this.b.AC()
    }
    ;
    d.LB = function() {
        return this.b
    }
    ;
    d.jS = function() {
        return this.bt()
    }
    ;
    d.wa = function(a, b) {
        this.Zb();
        this.b.iC(a, b);
        return this
    }
    ;
    d.fe = function(a, b) {
        this.Zb();
        v(b) || (b = [String(b)]);
        this.b.tp(a, b);
        return this
    }
    ;
    d.JR = function(a) {
        return this.b.ua(a)
    }
    ;
    d.IR = function(a) {
        return this.b.get(a)
    }
    ;
    d.Rk = function() {
        return this.Wl
    }
    ;
    d.Wh = function(a, b) {
        this.Zb();
        this.Wl = b ? Ki(a) : a;
        return this
    }
    ;
    d.sH = function() {
        return !!this.Wl
    }
    ;
    d.PS = function(a) {
        return (!this.vg() && !a.vg() || this.$c() == a.$c()) && (!this.Ll() && !a.Ll() || this.Te() == a.Te())
    }
    ;
    d.Le = function() {
        this.Zb();
        this.wa("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ A()).toString(36));
        return this
    }
    ;
    d.MT = function(a) {
        this.Zb();
        this.b.remove(a);
        return this
    }
    ;
    d.gU = function(a) {
        this.em = a;
        return this
    }
    ;
    d.jT = function() {
        return this.em
    }
    ;
    d.Zb = function() {
        if (this.em)
            throw Error("Tried to modify a read-only Uri");
    }
    ;
    d.kS = function(a) {
        this.fd = a;
        this.b && this.b.Iq(a);
        return this
    }
    ;
    d.KB = function() {
        return this.fd
    }
    ;
    function Mi(a, b) {
        return a instanceof Di ? a.clone() : new Di(a,b)
    }
    function Ni(a, b, c, e, f, g, k, l) {
        l = new Di(null,l);
        a && l.Yh(a);
        b && l.Zh(b);
        c && l.hg(c);
        e && l.ig(e);
        f && l.Xh(f);
        g && l.kg(g);
        k && l.Wh(k);
        return l
    }
    function Ki(a) {
        return a ? decodeURIComponent(a) : ""
    }
    function Fi(a, b) {
        return w(a) ? encodeURI(a).replace(b, Oi) : null
    }
    function Oi(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Gi = /[#\/\?@]/g
      , Ii = /[\#\?:]/g
      , Hi = /[\#\?]/g
      , Li = /[\#\?@]/g
      , Ji = /#/g;
    function Ei(a, b, c) {
        this.b = a || null;
        this.g = !!c
    }
    d = Ei.prototype;
    d.qc = function() {
        if (!this.ra && (this.ra = new Ud,
        this.pb = 0,
        this.b))
            for (var a = this.b.split("&"), b = 0; b < a.length; b++) {
                var c = a[b].indexOf("=")
                  , e = null
                  , f = null;
                0 <= c ? (e = a[b].substring(0, c),
                f = a[b].substring(c + 1)) : e = a[b];
                e = va(e);
                e = this.Id(e);
                this.add(e, f ? va(f) : "")
            }
    }
    ;
    d.ra = null;
    d.pb = null;
    d.ma = function() {
        this.qc();
        return this.pb
    }
    ;
    d.add = function(a, b) {
        this.qc();
        this.Ze();
        a = this.Id(a);
        var c = this.ra.get(a);
        c || this.ra.Ub(a, c = []);
        c.push(b);
        this.pb++;
        return this
    }
    ;
    d.remove = function(a) {
        this.qc();
        a = this.Id(a);
        return this.ra.Ih(a) ? (this.Ze(),
        this.pb -= this.ra.get(a).length,
        this.ra.remove(a)) : !1
    }
    ;
    d.clear = function() {
        this.Ze();
        this.ra = null;
        this.pb = 0
    }
    ;
    d.Za = function() {
        this.qc();
        return 0 == this.pb
    }
    ;
    d.Os = function(a) {
        this.qc();
        a = this.Id(a);
        return this.ra.Ih(a)
    }
    ;
    d.wg = function(a) {
        var b = this.ua();
        return G(b, a)
    }
    ;
    d.Jb = function() {
        this.qc();
        for (var a = this.ra.ua(), b = this.ra.Jb(), c = [], e = 0; e < b.length; e++)
            for (var f = a[e], g = 0; g < f.length; g++)
                c.push(b[e]);
        return c
    }
    ;
    d.ua = function(a) {
        this.qc();
        var b = [];
        if (w(a))
            this.Os(a) && (b = Qa(b, this.ra.get(this.Id(a))));
        else {
            a = this.ra.ua();
            for (var c = 0; c < a.length; c++)
                b = Qa(b, a[c])
        }
        return b
    }
    ;
    d.iC = function(a, b) {
        this.qc();
        this.Ze();
        a = this.Id(a);
        this.Os(a) && (this.pb -= this.ra.get(a).length);
        this.ra.Ub(a, [b]);
        this.pb++;
        return this
    }
    ;
    d.get = function(a, b) {
        var c = a ? this.ua(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    d.tp = function(a, b) {
        this.remove(a);
        0 < b.length && (this.Ze(),
        this.ra.Ub(this.Id(a), Ra(b)),
        this.pb += b.length)
    }
    ;
    d.toString = function() {
        if (this.b)
            return this.b;
        if (!this.ra)
            return "";
        for (var a = [], b = this.ra.Jb(), c = 0; c < b.length; c++)
            for (var e = b[c], f = encodeURIComponent(String(e)), e = this.ua(e), g = 0; g < e.length; g++) {
                var k = f;
                "" !== e[g] && (k += "=" + encodeURIComponent(String(e[g])));
                a.push(k)
            }
        return this.b = a.join("&")
    }
    ;
    d.AC = function() {
        return Ki(this.toString())
    }
    ;
    d.Ze = function() {
        this.b = null
    }
    ;
    d.CQ = function(a) {
        this.qc();
        Of(this.ra, function(b, c) {
            G(a, c) || this.remove(c)
        }, this);
        return this
    }
    ;
    d.clone = function() {
        var a = new Ei;
        a.b = this.b;
        this.ra && (a.ra = this.ra.clone(),
        a.pb = this.pb);
        return a
    }
    ;
    d.Id = function(a) {
        a = String(a);
        this.g && (a = a.toLowerCase());
        return a
    }
    ;
    d.Iq = function(a) {
        a && !this.g && (this.qc(),
        this.Ze(),
        Of(this.ra, function(a, c) {
            var e = c.toLowerCase();
            c != e && (this.remove(c),
            this.tp(e, a))
        }, this));
        this.g = a
    }
    ;
    d.iS = function(a) {
        for (var b = 0; b < arguments.length; b++)
            Of(arguments[b], function(a, b) {
                this.add(b, a)
            }, this)
    }
    ;
    function Pi() {
        this.b = A()
    }
    var Qi = new Pi;
    Pi.prototype.h = function(a) {
        this.b = a
    }
    ;
    Pi.prototype.g = function() {
        this.h(A())
    }
    ;
    Pi.prototype.get = function() {
        return this.b
    }
    ;
    function Ri(a) {
        this.g = a || "";
        this.b = Qi
    }
    d = Ri.prototype;
    d.nQ = !0;
    d.qU = !0;
    d.tU = !0;
    d.sU = !0;
    d.rU = !1;
    d.uU = !1;
    d.jU = function(a) {
        this.b = a
    }
    ;
    d.aS = function() {
        return this.b
    }
    ;
    d.PT = function() {
        this.b.g()
    }
    ;
    function Si(a) {
        a = new Date(a.Jt());
        return Ti(a.getFullYear() - 2E3) + Ti(a.getMonth() + 1) + Ti(a.getDate()) + " " + Ti(a.getHours()) + ":" + Ti(a.getMinutes()) + ":" + Ti(a.getSeconds()) + "." + Ti(Math.floor(a.getMilliseconds() / 10))
    }
    function Ti(a) {
        return 10 > a ? "0" + a : String(a)
    }
    function Ui(a, b) {
        var c = (a.Jt() - b) / 1E3
          , e = c.toFixed(3)
          , f = 0;
        if (1 > c)
            f = 2;
        else
            for (; 100 > c; )
                f++,
                c *= 10;
        for (; 0 < f--; )
            e = " " + e;
        return e
    }
    function Vi(a) {
        Ri.call(this, a)
    }
    B(Vi, Ri);
    Vi.prototype.h = function(a) {
        var b = [];
        b.push(this.g, " ");
        b.push("[", Si(a), "] ");
        b.push("[", Ui(a, this.b.get()), "s] ");
        b.push("[", a.Mz(), "] ");
        b.push(a.Ep());
        b.push("\n");
        return b.join("")
    }
    ;
    function Wi(a, b) {
        this.g = new sg(a);
        this.b = b ? qg : pg
    }
    Wi.prototype.h = function(a) {
        return this.g.g(a)
    }
    ;
    Wi.prototype.parse = function(a) {
        return this.b(a)
    }
    ;
    function Xi(a, b, c) {
        c = c || h;
        var e = c.onerror
          , f = !!b;
        Nb && !I("535.3") && (f = !f);
        c.onerror = function(b, c, l, n, q) {
            e && e(b, c, l, n, q);
            a({
                message: b,
                fileName: c,
                dK: l,
                YD: n,
                error: q
            });
            return f
        }
    }
    function Yi(a, b) {
        try {
            var c = Zi(a);
            return "Message: " + wa(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + wa(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa($i(b) + "-> ")
        } catch (e) {
            return "Exception trying to expose exception! You win, we lose. " + e
        }
    }
    function Zi(a) {
        var b = m("window.location.href");
        if (w(a))
            return {
                message: a,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: b,
                stack: "Not available"
            };
        var c, e, f = !1;
        try {
            c = a.lineNumber || a.dK || "Not available"
        } catch (g) {
            c = "Not available",
            f = !0
        }
        try {
            e = a.fileName || a.filename || a.sourceURL || h.$googDebugFname || b
        } catch (k) {
            e = "Not available",
            f = !0
        }
        return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
            message: a.message || "Not available",
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: e,
            stack: a.stack || "Not available"
        }
    }
    function $i(a) {
        return aj(a || arguments.callee.caller, [])
    }
    function aj(a, b) {
        var c = [];
        if (G(b, a))
            c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(bj(a) + "(");
            for (var e = a.arguments, f = 0; f < e.length; f++) {
                0 < f && c.push(", ");
                var g;
                g = e[f];
                switch (typeof g) {
                case "object":
                    g = g ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    g = String(g);
                    break;
                case "boolean":
                    g = g ? "true" : "false";
                    break;
                case "function":
                    g = (g = bj(g)) ? g : "[fn]";
                    break;
                default:
                    g = typeof g
                }
                40 < g.length && (g = g.substr(0, 40) + "...");
                c.push(g)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(aj(a.caller, b))
            } catch (k) {
                c.push("[exception trying to get caller]\n")
            }
        } else
            a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }
    function bj(a) {
        if (cj[a])
            return cj[a];
        a = String(a);
        if (!cj[a]) {
            var b = /function ([^\(]+)/.exec(a);
            cj[a] = b ? b[1] : "[Anonymous]"
        }
        return cj[a]
    }
    var cj = {};
    function dj(a, b, c, e, f) {
        this.uK(a, b, c, e, f)
    }
    dj.prototype.o = 0;
    dj.prototype.g = null;
    dj.prototype.b = null;
    var ej = 0;
    d = dj.prototype;
    d.uK = function(a, b, c, e, f) {
        this.o = "number" == typeof f ? f : ej++;
        this.j = e || A();
        this.h = a;
        this.l = b;
        this.k = c;
        delete this.g;
        delete this.b
    }
    ;
    d.Mz = function() {
        return this.k
    }
    ;
    d.hR = function() {
        return this.g
    }
    ;
    d.kE = function(a) {
        this.g = a
    }
    ;
    d.iR = function() {
        return this.b
    }
    ;
    d.lE = function(a) {
        this.b = a
    }
    ;
    d.aU = function(a) {
        this.k = a
    }
    ;
    d.mS = function() {
        return this.h
    }
    ;
    d.nS = function(a) {
        this.h = a
    }
    ;
    d.Ep = function() {
        return this.l
    }
    ;
    d.cU = function(a) {
        this.l = a
    }
    ;
    d.Jt = function() {
        return this.j
    }
    ;
    d.dU = function(a) {
        this.j = a
    }
    ;
    d.YR = function() {
        return this.o
    }
    ;
    function fj(a) {
        this.g = a
    }
    fj.prototype.h = null;
    fj.prototype.k = null;
    fj.prototype.b = null;
    fj.prototype.j = null;
    function gj(a, b) {
        this.name = a;
        this.value = b
    }
    gj.prototype.toString = function() {
        return this.name
    }
    ;
    var hj = new gj("OFF",Infinity);
    new gj("SHOUT",1200);
    var ij = new gj("SEVERE",1E3);
    new gj("WARNING",900);
    new gj("INFO",800);
    var jj = new gj("CONFIG",700);
    new gj("FINE",500);
    new gj("FINER",400);
    new gj("FINEST",300);
    new gj("ALL",0);
    d = fj.prototype;
    d.getName = function() {
        return this.g
    }
    ;
    d.lQ = function() {}
    ;
    d.LT = function() {
        return !1
    }
    ;
    d.EJ = function() {
        return this.h
    }
    ;
    d.vK = function() {
        this.b || (this.b = {});
        return this.b
    }
    ;
    d.Cs = function() {}
    ;
    d.oS = function() {
        return hj
    }
    ;
    d.eR = function() {
        return hj
    }
    ;
    d.dT = function() {
        return !1
    }
    ;
    d.log = function() {}
    ;
    d.uR = function(a, b, c) {
        var e = new dj(a,String(b),this.g);
        c && (e.kE(c),
        e.lE(Yi(c, arguments.callee.caller)));
        return e
    }
    ;
    d.pU = function() {}
    ;
    d.pS = function() {}
    ;
    d.Nm = function() {}
    ;
    d.info = function() {}
    ;
    d.config = function() {}
    ;
    d.GQ = function() {}
    ;
    d.HQ = function() {}
    ;
    d.IQ = function() {}
    ;
    d.tT = function() {}
    ;
    d.yQ = function(a) {
        var b = "log:" + a.Ep();
        h.console && (h.console.timeStamp ? h.console.timeStamp(b) : h.console.markTimeline && h.console.markTimeline(b));
        h.msWriteProfilerMark && h.msWriteProfilerMark(b);
        for (b = this; b; )
            b.BJ(a),
            b = b.EJ()
    }
    ;
    d.BJ = function() {}
    ;
    d.GJ = function(a) {
        this.h = a
    }
    ;
    d.zJ = function(a, b) {
        this.vK()[a] = b
    }
    ;
    var kj = {}
      , lj = null;
    function mj(a) {
        lj || (lj = new fj(""),
        kj[""] = lj,
        lj.Cs(jj));
        var b;
        if (!(b = kj[a])) {
            b = new fj(a);
            var c = a.lastIndexOf(".")
              , e = a.substr(0, c)
              , c = a.substr(c + 1)
              , e = mj(e);
            e.zJ(c, b);
            b.GJ(e);
            kj[a] = b
        }
        return b
    }
    ;function nj() {}
    ;function oj(a) {
        this.g = 0;
        this.h = a || 100;
        this.b = []
    }
    d = oj.prototype;
    d.add = function(a) {
        var b = this.b[this.g];
        this.b[this.g] = a;
        this.g = (this.g + 1) % this.h;
        return b
    }
    ;
    d.get = function(a) {
        a = this.Kq(a);
        return this.b[a]
    }
    ;
    d.JS = function(a, b) {
        a = this.Kq(a);
        this.b[a] = b
    }
    ;
    d.ma = function() {
        return this.b.length
    }
    ;
    d.Za = function() {
        return 0 == this.b.length
    }
    ;
    d.clear = function() {
        this.g = this.b.length = 0
    }
    ;
    d.ua = function() {
        return this.TI(this.ma())
    }
    ;
    d.TI = function(a) {
        var b = this.ma()
          , c = [];
        for (a = this.ma() - a; a < b; a++)
            c.push(this.get(a));
        return c
    }
    ;
    d.Jb = function() {
        for (var a = [], b = this.ma(), c = 0; c < b; c++)
            a[c] = c;
        return a
    }
    ;
    d.IS = function(a) {
        return a < this.ma()
    }
    ;
    d.wg = function(a) {
        for (var b = this.ma(), c = 0; c < b; c++)
            if (this.get(c) == a)
                return !0;
        return !1
    }
    ;
    d.rR = function() {
        return 0 == this.ma() ? null : this.get(this.ma() - 1)
    }
    ;
    d.Kq = function(a) {
        if (a >= this.b.length)
            throw Error("Out of bounds exception");
        return this.b.length < this.h ? a : (this.g + Number(a)) % this.h
    }
    ;
    function pj(a) {
        this.g = a;
        this.b = {}
    }
    B(pj, ma);
    var qj = [];
    d = pj.prototype;
    d.Rc = function(a, b, c, e) {
        return this.Nt(a, b, c, e)
    }
    ;
    d.pT = function(a, b, c, e, f) {
        return this.Nt(a, b, c, e, f)
    }
    ;
    d.Nt = function(a, b, c, e, f) {
        v(b) || (qj[0] = b,
        b = qj);
        for (var g = 0; g < b.length; g++) {
            var k = Re(a, b[g], c || this.handleEvent, e || !1, f || this.g || this);
            if (!k)
                break;
            this.b[k.key] = k
        }
        return this
    }
    ;
    d.xS = function(a, b, c, e) {
        return this.kk(a, b, c, e)
    }
    ;
    d.oT = function(a, b, c, e, f) {
        return this.kk(a, b, c, e, f)
    }
    ;
    d.kk = function(a, b, c, e, f) {
        if (v(b))
            for (var g = 0; g < b.length; g++)
                this.kk(a, b[g], c, e, f);
        else {
            a = Xe(a, b, c || this.handleEvent, e, f || this.g || this);
            if (!a)
                return this;
            this.b[a.key] = a
        }
        return this
    }
    ;
    d.qT = function(a, b, c, e) {
        return this.Mt(a, b, c, e)
    }
    ;
    d.rT = function(a, b, c, e, f) {
        return this.Mt(a, b, c, e, f)
    }
    ;
    d.Mt = function(a, b, c, e, f) {
        b.Rc(a, c, e, f || this.g || this, this);
        return this
    }
    ;
    d.wS = function() {
        var a = 0, b;
        for (b in this.b)
            Object.prototype.hasOwnProperty.call(this.b, b) && a++;
        return a
    }
    ;
    d.Lh = function(a, b, c, e, f) {
        if (v(b))
            for (var g = 0; g < b.length; g++)
                this.Lh(a, b[g], c, e, f);
        else
            c = c || this.handleEvent,
            f = f || this.g || this,
            c = Se(c),
            e = !!e,
            b = Je(a) ? a.Lz(b, c, e, f) : a ? (a = Ue(a)) ? a.hk(b, c, e, f) : null : null,
            b && (bf(b),
            delete this.b[b.key]);
        return this
    }
    ;
    d.DU = function(a, b, c, e, f) {
        b.Lh(a, c, e, f || this.g || this, this);
        return this
    }
    ;
    d.Gr = function() {
        kb(this.b, bf);
        this.b = {}
    }
    ;
    d.R = function() {
        pj.A.R.call(this);
        this.Gr()
    }
    ;
    d.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function rj() {}
    rj.prototype.b = null;
    rj.prototype.j = function() {
        return this.b || (this.b = this.l())
    }
    ;
    var sj;
    function tj() {}
    B(tj, rj);
    tj.prototype.g = function() {
        var a = this.h();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    }
    ;
    tj.prototype.l = function() {
        var a = {};
        this.h() && (a[0] = !0,
        a[1] = !0);
        return a
    }
    ;
    tj.prototype.h = function() {
        if (!this.k && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c),
                    this.k = c
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return this.k
    }
    ;
    sj = new tj;
    function uj(a, b, c, e, f) {
        this.g = a;
        this.b = b;
        this.l = c;
        this.h = e;
        this.j = f || 1;
        this.ka = 45E3;
        this.o = new pj(this);
        this.k = new gf;
        this.k.Og(250)
    }
    d = uj.prototype;
    d.hj = null;
    d.Nb = !1;
    d.We = null;
    d.Xk = null;
    d.Xg = null;
    d.Of = null;
    d.ud = null;
    d.ib = null;
    d.ge = null;
    d.Ca = null;
    d.Bf = 0;
    d.Xb = null;
    d.be = null;
    d.Bc = null;
    d.dn = -1;
    d.Pm = !0;
    d.vd = !1;
    d.ij = 0;
    d.Qg = null;
    function vj(a, b) {
        switch (a) {
        case 0:
            return "Non-200 return code (" + b + ")";
        case 1:
            return "XMLHTTP failure (no data)";
        case 2:
            return "HttpConnection timeout";
        default:
            return "Unknown error"
        }
    }
    var wj = {}
      , xj = {};
    d = uj.prototype;
    d.Kf = function(a) {
        this.hj = a
    }
    ;
    d.setTimeout = function(a) {
        this.ka = a
    }
    ;
    d.mA = function(a) {
        this.ij = a
    }
    ;
    d.Tp = function(a, b, c) {
        this.Of = 1;
        this.ud = a.clone().Le();
        this.ge = b;
        this.p = c;
        this.vs(null)
    }
    ;
    d.Ej = function(a, b, c, e) {
        this.Of = 1;
        this.ud = a.clone().Le();
        this.ge = null;
        this.p = b;
        e && (this.Pm = !1);
        this.vs(c)
    }
    ;
    d.vs = function(a) {
        this.Xg = A();
        this.$d();
        this.ib = this.ud.clone();
        this.ib.fe("t", this.j);
        this.Bf = 0;
        var b = this.g.Yg();
        this.Ca = this.g.gj(b ? a : null);
        0 < this.ij && (this.Qg = new lf(y(this.an, this, this.Ca),this.ij));
        this.o.Rc(this.Ca, "readystatechange", this.lv);
        a = this.hj ? vb(this.hj) : {};
        this.ge ? (this.be = "POST",
        a["Content-Type"] = "application/x-www-form-urlencoded",
        this.Ca.send(this.ib, this.be, this.ge, a)) : (this.be = "GET",
        this.Pm && !Nb && (a.Connection = "close"),
        this.Ca.send(this.ib, this.be, null, a));
        this.g.j(1);
        this.b.mv(this.be, this.ib, this.h, this.j, this.ge)
    }
    ;
    d.lv = function(a) {
        a = a.target;
        var b = this.Qg;
        b && 3 == a.Pc() ? (this.b.X("Throttling readystatechange."),
        b.Xp()) : this.an(a)
    }
    ;
    d.an = function(a) {
        try {
            a == this.Ca ? this.JB() : this.b.yf("Called back with an unexpected xmlhttp")
        } catch (b) {
            this.b.X("Failed call to OnXmlHttpReadyStateChanged_"),
            this.Ca && this.Ca.je() ? this.b.Uc(b, "ResponseText: " + this.Ca.je()) : this.b.Uc(b, "No response text")
        } finally {}
    }
    ;
    d.JB = function() {
        var a = this.Ca.Pc()
          , b = this.Ca.iv()
          , c = this.Ca.getStatus();
        if (H && !ac(10) || Nb && !I("420+")) {
            if (4 > a)
                return
        } else if (3 > a || 3 == a && !Lb && !this.Ca.je())
            return;
        this.vd || 4 != a || 7 == b || (8 == b || 0 >= c ? this.g.j(3) : this.g.j(2));
        this.Mg();
        this.dn = b = this.Ca.getStatus();
        (c = this.Ca.je()) || this.b.X("No response text for uri " + this.ib + " status " + b);
        this.Nb = 200 == b;
        this.b.kv(this.be, this.ib, this.h, this.j, a, b);
        this.Nb ? (4 == a && this.Tc(),
        this.p ? (this.cn(a, c),
        Lb && this.Nb && 3 == a && this.jv()) : (this.b.Cf(this.h, c, null),
        this.cj(c)),
        this.Nb && !this.vd && (4 == a ? this.g.Af(this) : (this.Nb = !1,
        this.$d()))) : (400 == b && 0 < c.indexOf("Unknown SID") ? (this.Bc = 3,
        W(13),
        this.b.yf("XMLHTTP Unknown SID (" + this.h + ")")) : (this.Bc = 0,
        W(14),
        this.b.yf("XMLHTTP Bad status " + b + " (" + this.h + ")")),
        this.Tc(),
        this.xf())
    }
    ;
    d.cn = function(a, b) {
        for (var c = !0; !this.vd && this.Bf < b.length; ) {
            var e = this.nA(b);
            if (e == xj) {
                4 == a && (this.Bc = 4,
                W(15),
                c = !1);
                this.b.Cf(this.h, null, "[Incomplete Response]");
                break
            } else if (e == wj) {
                this.Bc = 4;
                W(16);
                this.b.Cf(this.h, b, "[Invalid Chunk]");
                c = !1;
                break
            } else
                this.b.Cf(this.h, e, null),
                this.cj(e)
        }
        4 == a && 0 == b.length && (this.Bc = 1,
        W(17),
        c = !1);
        this.Nb = this.Nb && c;
        c || (this.b.Cf(this.h, b, "[Invalid Chunked Response]"),
        this.Tc(),
        this.xf())
    }
    ;
    d.uF = function() {
        var a = this.Ca.Pc()
          , b = this.Ca.je();
        this.Bf < b.length && (this.Mg(),
        this.cn(a, b),
        this.Nb && 4 != a && this.$d())
    }
    ;
    d.jv = function() {
        this.o.Rc(this.k, "tick", this.uF);
        this.k.Vc()
    }
    ;
    d.qQ = function() {
        this.Nb && this.b.Ac("Received browser offline event even though request completed successfully");
        this.b.VB(this.ib);
        this.Tc();
        this.Bc = 6;
        W(21);
        this.xf()
    }
    ;
    d.nA = function(a) {
        var b = this.Bf
          , c = a.indexOf("\n", b);
        if (-1 == c)
            return xj;
        b = a.substring(b, c);
        b = Number(b);
        if (isNaN(b))
            return wj;
        c += 1;
        if (c + b > a.length)
            return xj;
        a = a.substr(c, b);
        this.Bf = c + b;
        return a
    }
    ;
    d.bo = function(a, b) {
        this.Of = 3;
        this.ud = a.clone().Le();
        this.YI(b)
    }
    ;
    d.YI = function(a) {
        this.Xg = A();
        this.$d();
        var b = a ? window.location.hostname : "";
        this.ib = this.ud.clone();
        this.ib.wa("DOMAIN", b);
        this.ib.wa("t", this.j);
        try {
            this.Xb = new ActiveXObject("htmlfile")
        } catch (c) {
            this.b.Ac("ActiveX blocked");
            this.Tc();
            this.Bc = 7;
            W(22);
            this.xf();
            return
        }
        var e = "<html><body>";
        a && (e += '<script>document.domain="' + b + '"\x3c/script>');
        e += "</body></html>";
        this.Xb.open();
        this.Xb.write(e);
        this.Xb.close();
        this.Xb.parentWindow.m = y(this.Zv, this);
        this.Xb.parentWindow.d = y(this.Fn, this, !0);
        this.Xb.parentWindow.rpcClose = y(this.Fn, this, !1);
        a = this.Xb.createElement("div");
        this.Xb.parentWindow.document.body.appendChild(a);
        a.innerHTML = '<iframe src="' + this.ib + '"></iframe>';
        this.b.$v("GET", this.ib, this.h, this.j);
        this.g.j(1)
    }
    ;
    d.Zv = function(a) {
        yj(y(this.JK, this, a), 0)
    }
    ;
    d.JK = function(a) {
        this.vd || (this.b.pA(this.h, a),
        this.Mg(),
        this.cj(a),
        this.$d())
    }
    ;
    d.Fn = function(a) {
        yj(y(this.IK, this, a), 0)
    }
    ;
    d.IK = function(a) {
        this.vd || (this.b.dw(this.h, a),
        this.Tc(),
        this.Nb = a,
        this.g.Af(this),
        this.g.j(4))
    }
    ;
    d.ey = function(a) {
        this.Of = 2;
        this.ud = a.clone().Le();
        this.XI()
    }
    ;
    d.XI = function() {
        (new Image).src = this.ud;
        this.Xg = A();
        this.$d()
    }
    ;
    d.cancel = function() {
        this.vd = !0;
        this.Tc()
    }
    ;
    d.$d = function() {
        this.Xk = A() + this.ka;
        this.Dq(this.ka)
    }
    ;
    d.Dq = function(a) {
        if (null != this.We)
            throw Error("WatchDog timer not null");
        this.We = yj(y(this.yJ, this), a)
    }
    ;
    d.Mg = function() {
        this.We && (h.clearTimeout(this.We),
        this.We = null)
    }
    ;
    d.yJ = function() {
        this.We = null;
        var a = A();
        0 <= a - this.Xk ? this.eC() : (this.b.yf("WatchDog timer called too early"),
        this.Dq(this.Xk - a))
    }
    ;
    d.eC = function() {
        this.Nb && this.b.Ac("Received watchdog timeout even though request loaded successfully");
        this.b.ix(this.ib);
        2 != this.Of && this.g.j(3);
        this.Tc();
        this.Bc = 2;
        W(18);
        this.xf()
    }
    ;
    d.xf = function() {
        this.g.xr() || this.vd || this.g.Af(this)
    }
    ;
    d.Tc = function() {
        this.Mg();
        na(this.Qg);
        this.Qg = null;
        this.k.vb();
        this.o.Gr();
        if (this.Ca) {
            var a = this.Ca;
            this.Ca = null;
            a.abort();
            a.Vb()
        }
        this.Xb && (this.Xb = null)
    }
    ;
    d.ko = function() {
        return this.Nb
    }
    ;
    d.vh = function() {
        return this.Bc
    }
    ;
    d.Zg = function() {
        return this.dn
    }
    ;
    d.FS = function() {
        return this.l
    }
    ;
    d.NA = function() {
        return this.h
    }
    ;
    d.Aj = function() {
        return this.ge
    }
    ;
    d.Lj = function() {
        return this.Xg
    }
    ;
    d.cj = function(a) {
        try {
            this.g.uo(this, a),
            this.g.j(4)
        } catch (b) {
            this.b.Uc(b, "Error in httprequest callback")
        }
    }
    ;
    function zj() {
        this.b = null
    }
    d = zj.prototype;
    d.ES = function() {
        return null
    }
    ;
    d.VB = function(a) {
        this.info("BROWSER_OFFLINE: " + a)
    }
    ;
    d.mv = function(a, b, c, e, f) {
        this.info("XMLHTTP REQ (" + c + ") [attempt " + e + "]: " + a + "\n" + b + "\n" + this.GK(f))
    }
    ;
    d.kv = function(a, b, c, e, f, g) {
        this.info("XMLHTTP RESP (" + c + ") [ attempt " + e + "]: " + a + "\n" + b + "\n" + f + " " + g)
    }
    ;
    d.Cf = function(a, b, c) {
        this.info("XMLHTTP TEXT (" + a + "): " + this.Qt(b) + (c ? " " + c : ""))
    }
    ;
    d.$v = function(a, b, c, e) {
        this.info("TRIDENT REQ (" + c + ") [ attempt " + e + "]: " + a + "\n" + b)
    }
    ;
    d.pA = function(a, b) {
        this.info("TRIDENT TEXT (" + a + "): " + this.Qt(b))
    }
    ;
    d.dw = function(a, b) {
        this.info("TRIDENT TEXT (" + a + "): " + b ? "success" : "failure")
    }
    ;
    d.ix = function(a) {
        this.info("TIMEOUT: " + a)
    }
    ;
    d.X = function(a) {
        this.info(a)
    }
    ;
    d.Uc = function(a, b) {
        this.Ac((b || "Exception") + a)
    }
    ;
    d.info = function() {}
    ;
    d.yf = function() {}
    ;
    d.Ac = function() {}
    ;
    d.Qt = function(a) {
        if (!a || "y2f%" == a)
            return a;
        try {
            var b = qg(a);
            if (b)
                for (var c = 0; c < b.length; c++)
                    v(b[c]) && this.SH(b[c]);
            return rg(b)
        } catch (e) {
            return this.X("Exception parsing expected JS array - probably was not JS"),
            a
        }
    }
    ;
    d.SH = function(a) {
        if (!(2 > a.length || (a = a[1],
        !v(a) || 1 > a.length))) {
            var b = a[0];
            if ("noop" != b && "stop" != b)
                for (b = 1; b < a.length; b++)
                    a[b] = ""
        }
    }
    ;
    d.GK = function(a) {
        if (!a)
            return null;
        var b = "";
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var e = a[c].split("=");
            if (1 < e.length)
                var f = e[0]
                  , e = e[1]
                  , g = f.split("_")
                  , b = 2 <= g.length && "type" == g[1] ? b + (f + "=" + e + "&") : b + (f + "=redacted&")
        }
        return b
    }
    ;
    function Aj(a, b, c, e, f) {
        (new zj).X("TestLoadImageWithRetries: " + f);
        if (0 == e)
            c(!1);
        else {
            var g = f || 0;
            e--;
            Bj(a, b, function(f) {
                f ? c(!0) : h.setTimeout(function() {
                    Aj(a, b, c, e, g)
                }, g)
            })
        }
    }
    function Bj(a, b, c) {
        var e = new zj;
        e.X("TestLoadImage: loading " + a);
        var f = new Image;
        f.onload = function() {
            try {
                e.X("TestLoadImage: loaded"),
                Cj(f),
                c(!0)
            } catch (a) {
                e.Uc(a)
            }
        }
        ;
        f.onerror = function() {
            try {
                e.X("TestLoadImage: error"),
                Cj(f),
                c(!1)
            } catch (a) {
                e.Uc(a)
            }
        }
        ;
        f.onabort = function() {
            try {
                e.X("TestLoadImage: abort"),
                Cj(f),
                c(!1)
            } catch (a) {
                e.Uc(a)
            }
        }
        ;
        f.ontimeout = function() {
            try {
                e.X("TestLoadImage: timeout"),
                Cj(f),
                c(!1)
            } catch (a) {
                e.Uc(a)
            }
        }
        ;
        h.setTimeout(function() {
            if (f.ontimeout)
                f.ontimeout()
        }, b);
        f.src = a
    }
    function Cj(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }
    ;function Dj(a, b) {
        this.b = a;
        this.g = b;
        this.h = new Wi(null,!0)
    }
    d = Dj.prototype;
    d.ak = null;
    d.kb = null;
    d.kh = !1;
    d.pp = null;
    d.jh = null;
    d.rj = null;
    d.bk = null;
    d.zb = null;
    d.If = -1;
    d.Ff = null;
    d.wf = null;
    d.dB = function(a) {
        this.ak = a
    }
    ;
    d.eB = function(a) {
        this.h = a
    }
    ;
    d.cB = function(a) {
        this.bk = a;
        a = this.b.gp(this.bk);
        W(3);
        this.pp = A();
        var b = this.b.pz();
        null != b ? (this.Ff = this.b.bj(b[0]),
        (this.wf = b[1]) ? (this.zb = 1,
        this.dp()) : (this.zb = 2,
        this.Gj())) : (a.fe("MODE", "init"),
        this.kb = new uj(this,this.g,void 0,void 0,void 0),
        this.kb.Kf(this.ak),
        this.kb.Ej(a, !1, null, !0),
        this.zb = 0)
    }
    ;
    d.dp = function() {
        var a = this.b.Ak(this.wf, "/mail/images/cleardot.gif");
        a.Le();
        Aj(a.toString(), 5E3, y(this.BA, this), 3, 2E3);
        this.j(1)
    }
    ;
    d.BA = function(a) {
        a ? (this.zb = 2,
        this.Gj()) : (W(4),
        this.b.CA(this));
        a && this.j(2)
    }
    ;
    d.Gj = function() {
        this.g.X("TestConnection: starting stage 2");
        var a = this.b.jz();
        null != a ? (this.g.X("TestConnection: skipping stage 2, precomputed result is " + a ? "Buffered" : "Unbuffered"),
        W(5),
        a ? (W(11),
        this.b.Gf(this, !1)) : (W(12),
        this.b.Gf(this, !0))) : (this.kb = new uj(this,this.g,void 0,void 0,void 0),
        this.kb.Kf(this.ak),
        a = this.b.to(this.Ff, this.bk),
        W(5),
        !H || ac(10) ? (a.fe("TYPE", "xmlhttp"),
        this.kb.Ej(a, !1, this.Ff, !1)) : (a.fe("TYPE", "html"),
        this.kb.bo(a, Boolean(this.Ff))))
    }
    ;
    d.gj = function(a) {
        return this.b.gj(a)
    }
    ;
    d.abort = function() {
        this.kb && (this.kb.cancel(),
        this.kb = null);
        this.If = -1
    }
    ;
    d.xr = function() {
        return !1
    }
    ;
    d.uo = function(a, b) {
        this.If = a.Zg();
        if (0 == this.zb)
            if (this.g.X("TestConnection: Got data for stage 1"),
            b) {
                try {
                    var c = this.h.parse(b)
                } catch (e) {
                    this.g.Uc(e);
                    this.b.sj(this, 4);
                    return
                }
                this.Ff = this.b.bj(c[0]);
                this.wf = c[1]
            } else
                this.g.X("TestConnection: Null responseText"),
                this.b.sj(this, 4);
        else
            2 == this.zb && (this.kh ? (W(7),
            this.rj = A()) : "11111" == b ? (W(6),
            this.kh = !0,
            this.jh = A(),
            this.k() && (this.If = 200,
            this.kb.cancel(),
            this.g.X("Test connection succeeded; using streaming connection"),
            W(12),
            this.b.Gf(this, !0))) : (W(8),
            this.jh = this.rj = A(),
            this.kh = !1))
    }
    ;
    d.Af = function() {
        this.If = this.kb.Zg();
        if (!this.kb.ko())
            this.g.X("TestConnection: request failed, in state " + this.zb),
            0 == this.zb ? W(9) : 2 == this.zb && W(10),
            this.b.sj(this, this.kb.vh());
        else if (0 == this.zb)
            this.g.X("TestConnection: request complete for initial check"),
            this.wf ? (this.zb = 1,
            this.dp()) : (this.zb = 2,
            this.Gj());
        else if (2 == this.zb) {
            this.g.X("TestConnection: request complete for stage 2");
            var a = !1;
            (a = !H || ac(10) ? this.kh : 200 > this.rj - this.jh ? !1 : !0) ? (this.g.X("Test connection succeeded; using streaming connection"),
            W(12),
            this.b.Gf(this, !0)) : (this.g.X("Test connection failed; not using streaming"),
            W(11),
            this.b.Gf(this, !1))
        }
    }
    ;
    d.Uk = function() {
        return this.If
    }
    ;
    d.Yg = function() {
        return this.b.Yg()
    }
    ;
    Dj.prototype.isActive = function() {
        return this.b.isActive()
    }
    ;
    Dj.prototype.k = function() {
        var a = this.jh - this.pp;
        return !H || ac(10) || 500 > a
    }
    ;
    Dj.prototype.j = function(a) {
        this.b.j(a)
    }
    ;
    function Ej(a) {
        ff.call(this);
        this.headers = new Ud;
        this.G = a || null;
        this.h = !1;
        this.F = this.b = null;
        this.Z = this.p = "";
        this.o = 0;
        this.j = "";
        this.k = this.M = this.I = this.N = !1;
        this.l = 0;
        this.C = null;
        this.w = "";
        this.H = this.O = !1
    }
    B(Ej, ff);
    Ej.prototype.aa = null;
    var Fj = /^https?$/i
      , Gj = ["POST", "PUT"]
      , Hj = [];
    d = Ej.prototype;
    d.sQ = function() {
        this.Vb();
        Pa(Hj, this)
    }
    ;
    d.eS = function() {
        return this.l
    }
    ;
    d.nU = function(a) {
        this.l = Math.max(0, a)
    }
    ;
    d.hU = function(a) {
        this.w = a
    }
    ;
    d.WR = function() {
        return this.w
    }
    ;
    d.OJ = function(a) {
        this.O = a
    }
    ;
    d.hS = function() {
        return this.O
    }
    ;
    d.send = function(a, b, c, e) {
        if (this.b)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.p + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.p = a;
        this.j = "";
        this.o = 0;
        this.Z = b;
        this.N = !1;
        this.h = !0;
        this.b = this.Ku();
        this.F = this.G ? this.G.j() : sj.j();
        this.b.onreadystatechange = y(this.Km, this);
        try {
            nj(null, this.vc("Opening Xhr")),
            this.M = !0,
            this.b.open(b, String(a), !0),
            this.M = !1
        } catch (f) {
            nj(null, this.vc("Error opening Xhr: " + f.message));
            this.Mm(5, f);
            return
        }
        a = c || "";
        var g = this.headers.clone();
        e && Of(e, function(a, b) {
            g.Ub(b, a)
        });
        e = Oa(g.Jb(), Ij);
        c = h.FormData && a instanceof h.FormData;
        !G(Gj, b) || e || c || g.Ub("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        Of(g, function(a, b) {
            this.b.setRequestHeader(b, a)
        }, this);
        this.w && (this.b.responseType = this.w);
        "withCredentials"in this.b && (this.b.withCredentials = this.O);
        try {
            this.Lm(),
            0 < this.l && (this.H = Jj(this.b),
            nj(null, this.vc("Will abort after " + this.l + "ms if incomplete, xhr2 " + this.H)),
            this.H ? (this.b.timeout = this.l,
            this.b.ontimeout = y(this.ka, this)) : this.C = hf(this.ka, this.l, this)),
            nj(null, this.vc("Sending request")),
            this.I = !0,
            this.b.send(a),
            this.I = !1
        } catch (k) {
            nj(null, this.vc("Send error: " + k.message)),
            this.Mm(5, k)
        }
    }
    ;
    function Jj(a) {
        return H && I(9) && fa(a.timeout) && t(a.ontimeout)
    }
    function Ij(a) {
        return "content-type" == a.toLowerCase()
    }
    d.Ku = function() {
        return this.G ? this.G.g() : sj.g()
    }
    ;
    d.ka = function() {
        "undefined" != typeof aa && this.b && (this.j = "Timed out after " + this.l + "ms, aborting",
        this.o = 8,
        this.vc(this.j),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    d.Mm = function(a, b) {
        this.h = !1;
        this.b && (this.k = !0,
        this.b.abort(),
        this.k = !1);
        this.j = b;
        this.o = a;
        this.Vn();
        this.hh()
    }
    ;
    d.Vn = function() {
        this.N || (this.N = !0,
        this.dispatchEvent("complete"),
        this.dispatchEvent("error"))
    }
    ;
    d.abort = function(a) {
        this.b && this.h && (this.vc("Aborting"),
        this.h = !1,
        this.k = !0,
        this.b.abort(),
        this.k = !1,
        this.o = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        this.hh())
    }
    ;
    d.R = function() {
        this.b && (this.h && (this.h = !1,
        this.k = !0,
        this.b.abort(),
        this.k = !1),
        this.hh(!0));
        Ej.A.R.call(this)
    }
    ;
    d.Km = function() {
        this.vl() || (this.M || this.I || this.k ? this.Yr() : this.cG())
    }
    ;
    d.cG = function() {
        this.Yr()
    }
    ;
    d.Yr = function() {
        if (this.h && "undefined" != typeof aa)
            if (this.F[1] && 4 == this.Pc() && 2 == this.getStatus())
                this.vc("Local request error detected and ignored");
            else if (this.I && 4 == this.Pc())
                hf(this.Km, 0, this);
            else if (this.dispatchEvent("readystatechange"),
            this.Hj()) {
                this.vc("Request complete");
                this.h = !1;
                try {
                    this.PC() ? (this.dispatchEvent("complete"),
                    this.dispatchEvent("success")) : (this.o = 6,
                    this.j = this.OC() + " [" + this.getStatus() + "]",
                    this.Vn())
                } finally {
                    this.hh()
                }
            }
    }
    ;
    d.hh = function(a) {
        if (this.b) {
            this.Lm();
            var b = this.b
              , c = this.F[0] ? p : null;
            this.F = this.b = null;
            a || this.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (e) {}
        }
    }
    ;
    d.Lm = function() {
        this.b && this.H && (this.b.ontimeout = null);
        fa(this.C) && (h.clearTimeout(this.C),
        this.C = null)
    }
    ;
    Ej.prototype.isActive = function() {
        return !!this.b
    }
    ;
    d = Ej.prototype;
    d.Hj = function() {
        return 4 == this.Pc()
    }
    ;
    d.PC = function() {
        var a = this.getStatus(), b;
        t: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            b = !0;
            break t;
        default:
            b = !1
        }
        return b || 0 === a && !this.CK()
    }
    ;
    d.CK = function() {
        var a;
        a = ti(String(this.p))[1] || null;
        !a && self.location && (a = self.location.protocol,
        a = a.substr(0, a.length - 1));
        a = a ? a.toLowerCase() : "";
        return Fj.test(a)
    }
    ;
    d.Pc = function() {
        return this.b ? this.b.readyState : 0
    }
    ;
    d.getStatus = function() {
        try {
            return 2 < this.Pc() ? this.b.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    d.OC = function() {
        try {
            return 2 < this.Pc() ? this.b.statusText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    d.tR = function() {
        return String(this.p)
    }
    ;
    d.je = function() {
        try {
            return this.b ? this.b.responseText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    d.UR = function() {
        try {
            if (this.b && "responseBody"in this.b)
                return this.b.responseBody
        } catch (a) {}
        return null
    }
    ;
    d.qJ = function() {
        try {
            return this.b ? this.b.responseXML : null
        } catch (a) {
            return null
        }
    }
    ;
    d.pJ = function(a) {
        if (this.b) {
            var b = this.b.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return pg(b)
        }
    }
    ;
    d.TR = function() {
        try {
            if (!this.b)
                return null;
            if ("response"in this.b)
                return this.b.response;
            switch (this.w) {
            case "":
            case "text":
                return this.b.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in this.b)
                    return this.b.mozResponseArrayBuffer
            }
            return null
        } catch (a) {
            return null
        }
    }
    ;
    d.getResponseHeader = function(a) {
        return this.b && this.Hj() ? this.b.getResponseHeader(a) : void 0
    }
    ;
    d.yK = function() {
        return this.b && this.Hj() ? this.b.getAllResponseHeaders() : ""
    }
    ;
    d.VR = function() {
        for (var a = {}, b = this.yK().split("\r\n"), c = 0; c < b.length; c++)
            if (!/^[\s\xa0]*$/.test(b[c])) {
                var e;
                e = 2;
                for (var f = b[c].split(": "), g = []; 0 < e && f.length; )
                    g.push(f.shift()),
                    e--;
                f.length && g.push(f.join(": "));
                e = g;
                a[e[0]] = a[e[0]] ? a[e[0]] + (", " + e[1]) : e[1]
            }
        return a
    }
    ;
    d.iv = function() {
        return this.o
    }
    ;
    d.vh = function() {
        return w(this.j) ? this.j : String(this.j)
    }
    ;
    d.vc = function(a) {
        return a + " [" + this.Z + " " + this.p + " " + this.getStatus() + "]"
    }
    ;
    function Kj(a, b, c) {
        this.w = a || null;
        this.g = 1;
        this.h = [];
        this.k = [];
        this.b = new zj;
        this.o = new Wi(null,!0);
        this.C = b || null;
        this.I = null != c ? c : null
    }
    function Lj(a, b, c) {
        this.b = a;
        this.map = b;
        this.context = c || null
    }
    d = Kj.prototype;
    d.Ee = null;
    d.lg = null;
    d.Ma = null;
    d.xa = null;
    d.Nj = null;
    d.rh = null;
    d.$n = null;
    d.ph = null;
    d.Kl = !0;
    d.Rf = 0;
    d.ax = 0;
    d.zq = !1;
    d.oa = null;
    d.Yb = null;
    d.Hc = null;
    d.Jd = null;
    d.dd = null;
    d.qk = null;
    d.Vk = !0;
    d.Nf = -1;
    d.yq = -1;
    d.Cc = -1;
    d.Xc = 0;
    d.we = 0;
    d.Aq = 5E3;
    d.Bq = 1E4;
    d.zt = 2;
    d.Ek = 2E4;
    d.Up = 0;
    d.zi = !1;
    d.sd = 8;
    var Mj = new ff;
    function Nj(a, b) {
        Ae.call(this, "statevent", a);
        this.b = b
    }
    B(Nj, Ae);
    function Oj(a, b, c, e) {
        Ae.call(this, "timingevent", a);
        this.b = b;
        this.j = c;
        this.h = e
    }
    B(Oj, Ae);
    function Pj(a, b) {
        Ae.call(this, "serverreachability", a);
        this.b = b
    }
    B(Pj, Ae);
    d = Kj.prototype;
    d.UQ = function() {
        return this.b
    }
    ;
    d.UT = function(a) {
        null != a && (this.b = a)
    }
    ;
    d.Zi = function(a, b, c, e, f) {
        this.b.X("connect()");
        W(0);
        this.Nj = b;
        this.lg = c || {};
        e && t(f) && (this.lg.OSID = e,
        this.lg.OAID = f);
        this.WB(a)
    }
    ;
    d.Go = function() {
        this.b.X("disconnect()");
        this.wo();
        if (3 == this.g) {
            var a = this.Rf++
              , b = this.rh.clone();
            b.wa("SID", this.l);
            b.wa("RID", a);
            b.wa("TYPE", "terminate");
            this.Lf(b);
            (new uj(this,this.b,this.l,a,void 0)).ey(b)
        }
        this.xo()
    }
    ;
    d.Wm = function() {
        return this.l
    }
    ;
    d.WB = function(a) {
        this.b.X("connectTest_()");
        this.$i() && (this.dd = new Dj(this,this.b),
        this.dd.dB(this.Ee),
        this.dd.eB(this.o),
        this.dd.cB(a))
    }
    ;
    d.QB = function() {
        this.b.X("connectChannel_()");
        this.UB(1, 0);
        this.rh = this.gp(this.Nj);
        this.qj()
    }
    ;
    d.wo = function() {
        this.dd && (this.dd.abort(),
        this.dd = null);
        this.xa && (this.xa.cancel(),
        this.xa = null);
        this.Hc && (h.clearTimeout(this.Hc),
        this.Hc = null);
        this.nh();
        this.Ma && (this.Ma.cancel(),
        this.Ma = null);
        this.Yb && (h.clearTimeout(this.Yb),
        this.Yb = null)
    }
    ;
    d.vC = function() {
        return this.Ee
    }
    ;
    d.wC = function(a) {
        this.Ee = a
    }
    ;
    d.DS = function(a) {
        this.Up = a
    }
    ;
    d.kU = function(a) {
        this.zi = a
    }
    ;
    d.mR = function() {
        return this.oa
    }
    ;
    d.Xm = function(a) {
        this.oa = a
    }
    ;
    d.OQ = function() {
        return this.Kl
    }
    ;
    d.TT = function(a) {
        this.Kl = a
    }
    ;
    d.Jq = function() {
        return !this.qk
    }
    ;
    d.NQ = function() {
        return this.Vk
    }
    ;
    d.ST = function(a) {
        this.Vk = a
    }
    ;
    d.wn = function(a, b) {
        if (0 == this.g)
            throw Error("Invalid operation: sending map when state is closed");
        1E3 == this.h.length && this.b.Ac("Already have 1000 queued maps upon queueing " + rg(a));
        this.h.push(new Lj(this.ax++,a,b));
        2 != this.g && 3 != this.g || this.qj()
    }
    ;
    d.WT = function(a) {
        this.zq = a;
        this.b.info("setFailFast: " + a);
        (this.Ma || this.Yb) && this.Xc > this.ck() && (this.b.info("Retry count " + this.Xc + " > new maxRetries " + this.ck() + ". Fail immediately!"),
        this.Ma ? (this.Ma.cancel(),
        this.Af(this.Ma)) : (h.clearTimeout(this.Yb),
        this.Yb = null,
        this.Bb(2)))
    }
    ;
    d.ck = function() {
        return this.zq ? 0 : this.zt
    }
    ;
    d.YT = function(a) {
        this.zt = a
    }
    ;
    d.ZT = function(a) {
        this.Ek = a
    }
    ;
    d.hB = function() {
        return 3
    }
    ;
    d.xr = function() {
        return 0 == this.g
    }
    ;
    d.de = function() {
        return this.g
    }
    ;
    d.Bp = function() {
        return this.Cc
    }
    ;
    d.Vm = function() {
        return this.Nf
    }
    ;
    d.Tm = function() {
        return 0 != this.KK()
    }
    ;
    d.CS = function(a) {
        this.o = a
    }
    ;
    d.KK = function() {
        var a = 0;
        this.xa && a++;
        this.Ma && a++;
        return a
    }
    ;
    d.qj = function() {
        this.Ma || this.Yb || (this.Yb = yj(y(this.mp, this), 0),
        this.Xc = 0)
    }
    ;
    d.nx = function(a) {
        if (this.Ma || this.Yb)
            return this.b.Ac("Request already in progress"),
            !1;
        if (1 == this.g || this.Xc >= this.ck())
            return !1;
        this.b.X("Going to retry POST");
        this.Yb = yj(y(this.mp, this, a), this.Jo(this.Xc));
        this.Xc++;
        return !0
    }
    ;
    d.mp = function(a) {
        this.Yb = null;
        this.Yo(a)
    }
    ;
    d.Yo = function(a) {
        this.b.X("startForwardChannel_");
        this.$i() && (1 == this.g ? a ? this.b.Ac("Not supposed to retry the open") : (this.Yw(),
        this.g = 2) : 3 == this.g && (a ? this.ho(a) : 0 == this.h.length ? this.b.X("startForwardChannel_ returned: nothing to send") : this.Ma ? this.b.Ac("startForwardChannel_ returned: connection already in progress") : (this.ho(),
        this.b.X("startForwardChannel_ finished, sent request"))))
    }
    ;
    d.Yw = function() {
        this.b.X("open_()");
        this.Rf = Math.floor(1E5 * Math.random());
        var a = this.Rf++
          , b = new uj(this,this.b,"",a,void 0);
        b.Kf(this.Ee);
        var c = this.rk()
          , e = this.rh.clone();
        e.wa("RID", a);
        this.w && e.wa("CVER", this.w);
        this.Lf(e);
        b.Tp(e, c, !0);
        this.Ma = b
    }
    ;
    d.ho = function(a) {
        var b;
        a ? 6 < this.sd ? (this.OA(),
        b = this.Rf - 1,
        a = this.rk()) : (b = a.NA(),
        a = a.Aj()) : (b = this.Rf++,
        a = this.rk());
        var c = this.rh.clone();
        c.wa("SID", this.l);
        c.wa("RID", b);
        c.wa("AID", this.Nf);
        this.Lf(c);
        b = new uj(this,this.b,this.l,b,this.Xc + 1);
        b.Kf(this.Ee);
        b.setTimeout(Math.round(0.5 * this.Ek) + Math.round(0.5 * this.Ek * Math.random()));
        this.Ma = b;
        b.Tp(c, a, !0)
    }
    ;
    d.Lf = function(a) {
        if (this.oa) {
            var b = this.oa.$s(this);
            b && Of(b, function(b, e) {
                a.wa(e, b)
            })
        }
    }
    ;
    d.rk = function() {
        var a = Math.min(this.h.length, 1E3), b = ["count=" + a], c;
        6 < this.sd && 0 < a ? (c = this.h[0].b,
        b.push("ofs=" + c)) : c = 0;
        for (var e = 0; e < a; e++) {
            var f = this.h[e].b
              , g = this.h[e].map
              , f = 6 >= this.sd ? e : f - c;
            try {
                Of(g, function(a, c) {
                    b.push("req" + f + "_" + c + "=" + encodeURIComponent(a))
                })
            } catch (k) {
                b.push("req" + f + "_type=" + encodeURIComponent("_badmap")),
                this.oa && this.oa.F(this, g)
            }
        }
        this.k = this.k.concat(this.h.splice(0, a));
        return b.join("&")
    }
    ;
    d.OA = function() {
        this.h = this.k.concat(this.h);
        this.k.length = 0
    }
    ;
    d.Wn = function() {
        this.xa || this.Hc || (this.p = 1,
        this.Hc = yj(y(this.mq, this), 0),
        this.we = 0)
    }
    ;
    d.Kj = function() {
        if (this.xa || this.Hc)
            return this.b.Ac("Request already in progress"),
            !1;
        if (this.we >= this.hB())
            return !1;
        this.b.X("Going to retry GET");
        this.p++;
        this.Hc = yj(y(this.mq, this), this.Jo(this.we));
        this.we++;
        return !0
    }
    ;
    d.mq = function() {
        this.Hc = null;
        this.sJ()
    }
    ;
    d.sJ = function() {
        if (this.$i()) {
            this.b.X("Creating new HttpRequest");
            this.xa = new uj(this,this.b,this.l,"rpc",this.p);
            this.xa.Kf(this.Ee);
            this.xa.mA(this.Up);
            var a = this.$n.clone();
            a.wa("RID", "rpc");
            a.wa("SID", this.l);
            a.wa("CI", this.qk ? "0" : "1");
            a.wa("AID", this.Nf);
            this.Lf(a);
            !H || ac(10) ? (a.wa("TYPE", "xmlhttp"),
            this.xa.Ej(a, !0, this.ph, !1)) : (a.wa("TYPE", "html"),
            this.xa.bo(a, Boolean(this.ph)));
            this.b.X("New Request created")
        }
    }
    ;
    d.$i = function() {
        if (this.oa) {
            var a = this.oa.MB(this);
            if (0 != a)
                return this.b.X("Handler returned error code from okToMakeRequest"),
                this.Bb(a),
                !1
        }
        return !0
    }
    ;
    d.Gf = function(a, b) {
        this.b.X("Test Connection Finished");
        this.qk = this.Vk && b;
        this.Cc = a.Uk();
        this.QB()
    }
    ;
    d.sj = function(a) {
        this.b.X("Test Connection Failed");
        this.Cc = a.Uk();
        this.Bb(2)
    }
    ;
    d.CA = function() {
        this.b.X("Test Connection Blocked");
        this.Cc = this.dd.Uk();
        this.Bb(9)
    }
    ;
    d.uo = function(a, b) {
        if (0 != this.g && (this.xa == a || this.Ma == a))
            if (this.Cc = a.Zg(),
            this.Ma == a && 3 == this.g)
                if (7 < this.sd) {
                    var c;
                    try {
                        c = this.o.parse(b)
                    } catch (e) {
                        c = null
                    }
                    v(c) && 3 == c.length ? this.hy(c) : (this.b.X("Bad POST response data returned"),
                    this.Bb(11))
                } else
                    "y2f%" != b && (this.b.X("Bad data returned - missing/invald magic cookie"),
                    this.Bb(11));
            else
                this.xa == a && this.nh(),
                /^[\s\xa0]*$/.test(b) || (c = this.o.parse(b),
                v(c),
                this.iy(c))
    }
    ;
    d.hy = function(a) {
        if (0 == a[0])
            this.RB();
        else {
            this.yq = a[1];
            var b = this.yq - this.Nf;
            0 < b && (a = a[2],
            this.b.X(a + " bytes (in " + b + " arrays) are outstanding on the BackChannel"),
            this.TB(a) && !this.Jd && (this.Jd = yj(y(this.SB, this), 6E3)))
        }
    }
    ;
    d.RB = function() {
        this.b.X("Server claims our backchannel is missing.");
        if (this.Hc)
            this.b.X("But we are currently starting the request.");
        else {
            if (this.xa)
                if (this.xa.Lj() + 3E3 < this.Ma.Lj())
                    this.nh(),
                    this.xa.cancel(),
                    this.xa = null;
                else
                    return;
            else
                this.b.yf("We do not have a BackChannel established");
            this.Kj();
            W(19)
        }
    }
    ;
    d.TB = function(a) {
        return 37500 > a && !this.Jq() && 0 == this.we
    }
    ;
    d.bj = function(a) {
        return this.Kl ? this.oa ? this.oa.G(a) : a : null
    }
    ;
    d.SB = function() {
        null != this.Jd && (this.Jd = null,
        this.xa.cancel(),
        this.xa = null,
        this.Kj(),
        W(20))
    }
    ;
    d.nh = function() {
        null != this.Jd && (h.clearTimeout(this.Jd),
        this.Jd = null)
    }
    ;
    d.Af = function(a) {
        this.b.X("Request complete");
        var b;
        if (this.xa == a)
            this.nh(),
            this.xa = null,
            b = 2;
        else if (this.Ma == a)
            this.Ma = null,
            b = 1;
        else
            return;
        this.Cc = a.Zg();
        if (0 != this.g)
            if (a.ko())
                1 == b ? (b = a.Aj() ? a.Aj().length : 0,
                a = A() - a.Lj(),
                Mj.dispatchEvent(new Oj(Mj,b,a,this.Xc)),
                this.qj(),
                this.ox(),
                this.k.length = 0) : this.Wn();
            else {
                var c = a.vh();
                if (3 == c || 7 == c || 0 == c && 0 < this.Cc)
                    this.b.X("Not retrying due to error type");
                else {
                    this.b.X("Maybe retrying, last error: " + vj(c, this.Cc));
                    if (1 == b && this.nx(a) || 2 == b && this.Kj())
                        return;
                    this.b.X("Exceeded max number of retries")
                }
                this.b.X("Error: HTTP request failed");
                switch (c) {
                case 1:
                    this.Bb(5);
                    break;
                case 4:
                    this.Bb(10);
                    break;
                case 3:
                    this.Bb(6);
                    break;
                case 7:
                    this.Bb(12);
                    break;
                default:
                    this.Bb(2)
                }
            }
    }
    ;
    d.Jo = function(a) {
        var b = this.Aq + Math.floor(Math.random() * this.Bq);
        this.isActive() || (this.b.X("Inactive channel"),
        b *= 2);
        return b * a
    }
    ;
    d.iU = function(a, b) {
        this.Aq = a;
        this.Bq = b
    }
    ;
    d.iy = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            this.Nf = c[0];
            c = c[1];
            2 == this.g ? "c" == c[0] ? (this.l = c[1],
            this.ph = this.bj(c[2]),
            c = c[3],
            null != c ? this.sd = c : this.sd = 6,
            this.g = 3,
            this.oa && this.oa.ar(this),
            this.$n = this.to(this.ph, this.Nj),
            this.Wn()) : "stop" == c[0] && this.Bb(7) : 3 == this.g && ("stop" == c[0] ? this.Bb(7) : "noop" != c[0] && this.oa && this.oa.Zq(this, c),
            this.we = 0)
        }
    }
    ;
    d.UB = function(a) {
        if (!G(arguments, this.g))
            throw Error("Unexpected channel state: " + this.g);
    }
    ;
    d.Bb = function(a) {
        this.b.info("Error code " + a);
        if (2 == a || 9 == a) {
            var b = null;
            this.oa && (b = this.oa.ZB(this));
            var c = y(this.$B, this);
            b || (b = new Di("//www.google.com/images/cleardot.gif"),
            b.Le());
            Bj(b.toString(), 1E4, c)
        } else
            W(2);
        this.Gq(a)
    }
    ;
    d.$B = function(a) {
        a ? (this.b.info("Successfully pinged google.com"),
        W(2)) : (this.b.info("Failed to ping google.com"),
        W(1),
        this.Gq(8))
    }
    ;
    d.ox = function() {
        this.oa && this.oa.BG(this, this.k)
    }
    ;
    d.Gq = function(a) {
        this.b.X("HttpChannel: error - " + a);
        this.g = 0;
        this.oa && this.oa.qp(this, a);
        this.xo();
        this.wo()
    }
    ;
    d.xo = function() {
        this.g = 0;
        this.Cc = -1;
        if (this.oa)
            if (0 == this.k.length && 0 == this.h.length)
                this.oa.vj(this);
            else {
                this.b.X("Number of undelivered maps, pending: " + this.k.length + ", outgoing: " + this.h.length);
                var a = Ra(this.k)
                  , b = Ra(this.h);
                this.k.length = 0;
                this.h.length = 0;
                this.oa.vj(this, a, b)
            }
    }
    ;
    d.gp = function(a) {
        a = this.Ak(null, a);
        this.b.X("GetForwardChannelUri: " + a);
        return a
    }
    ;
    d.pz = function() {
        return this.C
    }
    ;
    d.jz = function() {
        return this.I
    }
    ;
    d.to = function(a, b) {
        var c = this.Ak(this.Yg() ? a : null, b);
        this.b.X("GetBackChannelUri: " + c);
        return c
    }
    ;
    d.Ak = function(a, b, c) {
        var e = Mi(b);
        if ("" != e.$c())
            a && e.hg(a + "." + e.$c()),
            e.ig(c || e.Te());
        else
            var f = window.location
              , e = Ni(f.protocol, null, a ? a + "." + f.hostname : f.hostname, c || f.port, b);
        this.lg && Of(this.lg, function(a, b) {
            e.wa(b, a)
        });
        e.wa("VER", this.sd);
        this.Lf(e);
        return e
    }
    ;
    d.gj = function(a) {
        if (a && !this.zi)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new Ej;
        a.OJ(this.zi);
        return a
    }
    ;
    Kj.prototype.isActive = function() {
        return !!this.oa && this.oa.isActive(this)
    }
    ;
    function yj(a, b) {
        if (!x(a))
            throw Error("Fn must not be null and must be a function");
        return h.setTimeout(function() {
            a()
        }, b)
    }
    Kj.prototype.j = function(a) {
        Mj.dispatchEvent(new Pj(Mj,a))
    }
    ;
    function W(a) {
        Mj.dispatchEvent(new Nj(Mj,a))
    }
    Kj.prototype.Yg = function() {
        return this.zi || !(!H || ac(10))
    }
    ;
    new oj(1E3);
    new Vi;
    function Qj() {}
    d = Qj.prototype;
    d.rQ = null;
    d.MB = function() {
        return 0
    }
    ;
    d.ar = function() {}
    ;
    d.Zq = function() {}
    ;
    d.BG = function() {}
    ;
    d.qp = function() {}
    ;
    d.vj = function() {}
    ;
    d.$s = function() {
        return {}
    }
    ;
    d.ZB = function() {
        return null
    }
    ;
    Qj.prototype.isActive = function() {
        return !0
    }
    ;
    Qj.prototype.F = function() {}
    ;
    Qj.prototype.G = function(a) {
        return a
    }
    ;
    function Rj(a, b) {
        this.b = a;
        this.params = b || null
    }
    ;function Sj() {
        this.b = [];
        this.g = {}
    }
    B(Sj, ma);
    d = Sj.prototype;
    d.Gp = 1;
    d.xh = 0;
    d.Vr = function(a, b, c) {
        var e = this.g[a];
        e || (e = this.g[a] = []);
        var f = this.Gp;
        this.b[f] = a;
        this.b[f + 1] = b;
        this.b[f + 2] = c;
        this.Gp = f + 3;
        e.push(f);
        return f
    }
    ;
    d.xU = function(a, b, c) {
        var e = this.Vr(a, function(a) {
            b.apply(c, arguments);
            this.Ae(e)
        }, this);
        return e
    }
    ;
    d.HF = function(a, b, c) {
        if (a = this.g[a]) {
            var e = this.b;
            if (a = Oa(a, function(a) {
                return e[a + 1] == b && e[a + 2] == c
            }))
                return this.Ae(a)
        }
        return !1
    }
    ;
    d.Ae = function(a) {
        if (0 != this.xh)
            return this.h || (this.h = []),
            this.h.push(a),
            !1;
        var b = this.b[a];
        if (b) {
            var c = this.g[b];
            c && Pa(c, a);
            delete this.b[a];
            delete this.b[a + 1];
            delete this.b[a + 2]
        }
        return !!b
    }
    ;
    d.GF = function(a, b) {
        var c = this.g[a];
        if (c) {
            this.xh++;
            for (var e = Ta(arguments, 1), f = 0, g = c.length; f < g; f++) {
                var k = c[f];
                this.b[k + 1].apply(this.b[k + 2], e)
            }
            this.xh--;
            if (this.h && 0 == this.xh)
                for (; c = this.h.pop(); )
                    this.Ae(c);
            return 0 != f
        }
        return !1
    }
    ;
    d.clear = function(a) {
        if (a) {
            var b = this.g[a];
            b && (F(b, this.Ae, this),
            delete this.g[a])
        } else
            this.b.length = 0,
            this.g = {}
    }
    ;
    d.ma = function(a) {
        if (a) {
            var b = this.g[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.g)
            a += this.ma(b);
        return a
    }
    ;
    d.R = function() {
        Sj.A.R.call(this);
        delete this.b;
        delete this.g;
        delete this.h
    }
    ;
    function Tj(a, b) {
        gf.call(this);
        if (x(a))
            b && (a = y(a, b));
        else if (a && x(a.handleEvent))
            a = y(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.l = a;
        Re(this, "tick", y(this.hs, this));
        this.$m()
    }
    B(Tj, gf);
    d = Tj.prototype;
    d.Fl = 0;
    d.hs = function() {
        if (this.DG()) {
            var a = this.wl();
            24E4 > 2 * a && (a *= 2);
            this.Og(a)
        }
        this.l()
    }
    ;
    d.nE = function() {
        this.enabled && (this.vb(),
        this.Vc(),
        this.hs())
    }
    ;
    d.Vc = function() {
        Tj.A.Vc.call(this);
        this.Fl = A() + this.wl()
    }
    ;
    d.vb = function() {
        this.Fl = 0;
        Tj.A.vb.call(this)
    }
    ;
    d.bE = function() {
        return this.Fl
    }
    ;
    d.$m = function() {
        this.vb();
        var a = 5E3 + 2E4 * Math.random();
        this.Og(a)
    }
    ;
    d.ap = function() {
        this.vb();
        this.Og(500)
    }
    ;
    d.DG = function() {
        return 500 < this.wl()
    }
    ;
    function Uj(a, b) {
        this.H = a;
        this.l = b;
        this.h = new Sj;
        this.g = new Tj(this.hu,this);
        this.C = mj("yt.mdx.Handler");
        this.b = null;
        this.I = !1;
        this.k = null;
        this.w = "";
        this.p = this.j = 0;
        this.o = []
    }
    B(Uj, Qj);
    d = Uj.prototype;
    d.bl = function(a, b, c) {
        return this.h.Vr(a, b, c)
    }
    ;
    d.GU = function(a, b, c) {
        return this.h.HF(a, b, c)
    }
    ;
    d.Ae = function(a) {
        return this.h.Ae(a)
    }
    ;
    d.$g = function(a, b) {
        return this.h.GF.apply(this.h, arguments)
    }
    ;
    d.Vb = function() {
        this.I || (this.I = !0,
        this.h.clear(),
        this.cq(),
        na(this.h))
    }
    ;
    d.vl = function() {
        return this.I
    }
    ;
    d.SQ = function() {
        return {
            firstTestResults: [""],
            secondTestResults: this.b.Jq(),
            sessionId: this.b.Wm(),
            arrayId: this.b.Vm()
        }
    }
    ;
    d.Sn = function(a) {
        return 2 == a && 401 == this.b.Bp()
    }
    ;
    d.Kn = function(a, b, c) {
        if (!this.b || 2 != this.b.de()) {
            this.w = "";
            this.g.vb();
            this.k = a || null;
            this.j = b || 0;
            a = this.H + "/test";
            b = this.H + "/bind";
            var e = this.ev(c)
              , f = this.b;
            f && f.Xm(null);
            e.Xm(this);
            this.b = e;
            f ? ((3 == f.de() || f.Tm()) && this.C.Nm("Unexpected state on old channel when reconnecting: " + f.de()),
            this.b.Zi(a, b, this.l, f.Wm(), f.Vm())) : c ? this.b.Zi(a, b, this.l, c.sessionId, c.arrayId) : this.b.Zi(a, b, this.l)
        }
    }
    ;
    d.ev = function(a) {
        return new Kj("1",a ? a.firstTestResults : null,a ? a.secondTestResults : null)
    }
    ;
    d.cq = function(a) {
        this.p = a || 0;
        this.g.vb();
        this.b && (3 == this.b.de() && this.b.Yo(),
        this.b.Go());
        this.p = 0
    }
    ;
    d.uD = function(a, b) {
        var c = {
            _sc: a
        };
        b && yb(c, b);
        this.bh() || 2 == this.Tn() ? (this.C.info("Queuing message while (re)connecting: " + a),
        this.o.push(c)) : this.QA() ? this.b.wn(c) : this.C.Nm("Ignoring message: " + a)
    }
    ;
    d.ar = function() {
        this.g.$m();
        this.k = null;
        this.j = 0;
        if (this.o.length) {
            var a = this.o;
            this.o = [];
            for (var b = 0, c = a.length; b < c; ++b)
                this.C.info("Sending queued message: " + a[b]._sc),
                this.b.wn(a[b])
        }
        this.$g("handlerOpened")
    }
    ;
    d.qp = function(a, b) {
        var c = this.Sn(b);
        4 == b || c || (6 != b && 410 != this.b.Bp() || this.g.ap(),
        this.g.Vc());
        this.$g("handlerError", b)
    }
    ;
    d.vj = function(a, b, c) {
        if (!this.bh())
            this.$g("handlerClosed");
        else if (c)
            for (a = 0,
            b = c.length; a < b; ++a)
                this.o.push(c[a].map)
    }
    ;
    d.$s = function() {
        var a = {
            v: 2
        };
        this.w && (a.gsessionid = this.w);
        0 != this.j && (a.ui = "" + this.j);
        0 != this.p && (a.ui = "" + this.p);
        this.k && yb(a, this.k);
        return a
    }
    ;
    d.Zq = function(a, b) {
        if ("S" == b[0])
            this.w = b[1];
        else if ("gracefulReconnect" == b[0])
            this.g.ap(),
            this.g.Vc(),
            this.b.Go();
        else {
            var c = this.Fy(b[0], b[1]);
            this.$g("handlerMessage", c)
        }
    }
    ;
    d.QA = function() {
        return !!this.b && 3 == this.b.de()
    }
    ;
    d.Tn = function() {
        return this.b ? this.b.de() : 0
    }
    ;
    d.Rq = function(a) {
        if (this.b) {
            var b = this.b.vC() || {};
            a ? b.Authorization = a : delete b.Authorization;
            this.b.wC(b)
        }
    }
    ;
    d.Fy = function(a, b) {
        return new Rj(a,b)
    }
    ;
    d.WC = function(a) {
        (this.l.loungeIdToken = a) || this.g.vb()
    }
    ;
    d.YQ = function() {
        return this.l.id
    }
    ;
    d.PR = function() {
        return this.bh() ? this.g.bE() - A() : NaN
    }
    ;
    d.bh = function() {
        return this.g.enabled
    }
    ;
    d.GT = function() {
        this.g.nE()
    }
    ;
    d.hu = function() {
        this.g.vb();
        this.b.Tm() ? this.g.Vc() : this.Kn(this.k, this.j)
    }
    ;
    function Vj(a) {
        a && (this.name = a.name,
        this.Ab = a.screenId,
        this.Mb = a.loungeToken,
        this.vi = a.dialId || "")
    }
    d = Vj.prototype;
    d.name = "";
    d.Ab = "";
    d.Mb = "";
    d.vi = "";
    d.lw = function() {
        return !!this.Ab
    }
    ;
    d.BQ = function() {
        return {
            key: this.Ab,
            name: this.name
        }
    }
    ;
    d.fw = function() {
        return {
            name: this.name,
            screenId: this.Ab,
            loungeToken: this.Mb,
            dialId: this.vi
        }
    }
    ;
    d.cT = function(a) {
        return a == this.Ab || a == this.vi
    }
    ;
    d.toString = function() {
        var a = this.Mb ? this.Mb.slice(-6) : "null";
        return "{name:" + this.name + ",screenId:" + this.Ab + ",loungeToken:..." + a + ",dialId:" + this.vi + "}"
    }
    ;
    A();
    function Wj(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, e = a.length; c < e; c++) {
            var f = a[c].split("=");
            if (1 == f.length && f[0] || 2 == f.length) {
                var g = va(f[0] || "")
                  , f = va(f[1] || "");
                g in b ? v(b[g]) ? Sa(b[g], f) : b[g] = [b[g], f] : b[g] = f
            }
        }
        return b
    }
    function Xj(a) {
        a = xi([], a);
        a[0] = "";
        return a.join("")
    }
    var Yj = vi;
    function Zj(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : ""
          , e = a.split("?", 2);
        a = e[0];
        var e = Wj(e[1] || ""), f;
        for (f in b)
            e[f] = b[f];
        return yi(a, e) + c
    }
    ;var ak = window.yt && window.yt.config_ || {};
    ba("yt.config_", ak, void 0);
    ba("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    ba("yt.msgs_", window.yt && window.yt.msgs_ || {}, void 0);
    function bk(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            ak[c] = b[1]
        } else
            for (c in b = b[0],
            b)
                ak[c] = b[c]
    }
    function ck(a, b) {
        return a in ak ? ak[a] : b
    }
    function dk(a, b) {
        if (x(a) && m("ytsched.enableSetTimeout")) {
            var c = m("yt.scheduler.instance.addJob");
            if (c)
                return c(a, 0, b);
            ba("ytsched.enableSetTimeout", !1, void 0)
        }
        x(a) && (a = ek(a));
        return window.setTimeout(a, b)
    }
    function fk(a) {
        m("ytsched.enableSetTimeout") ? m("yt.scheduler.instance.cancelJob")(a) : window.clearTimeout(a)
    }
    function ek(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                var c = b;
                if (window && window.yterr) {
                    var e = m("yt.www.errors.log");
                    e ? e(c, void 0) : (e = ck("ERRORS") || [],
                    e.push(c),
                    bk("ERRORS", e))
                }
                throw b;
            }
        }
        : a
    }
    ;var gk = null;
    "undefined" != typeof XMLHttpRequest ? gk = function() {
        return new XMLHttpRequest
    }
    : "undefined" != typeof ActiveXObject && (gk = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    function hk(a, b, c, e, f, g, k) {
        var l = gk && gk();
        if (!("open"in l))
            return null;
        l.onreadystatechange = function() {
            4 == (l && "readyState"in l ? l.readyState : 0) && b && ek(b)(l)
        }
        ;
        c = (c || "GET").toUpperCase();
        e = e || "";
        l.open(c, a, !0);
        g && (l.responseType = g);
        k && (l.withCredentials = !0);
        g = "POST" == c;
        if (f = ik(a, f))
            for (var n in f)
                l.setRequestHeader(n, f[n]),
                "content-type" == n.toLowerCase() && (g = !1);
        g && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        l.send(e);
        return l
    }
    function ik(a, b) {
        b = b || {};
        var c;
        if (c = ck("PAGE_CL"))
            if (c = ck("PAGE_BUILD_TIMESTAMP")) {
                c = void 0;
                c = window.location.href;
                var e = ti(a)[1] || null
                  , f = Yj(a);
                e && f ? (e = c,
                c = ti(a),
                e = ti(e),
                c = c[3] == e[3] && c[1] == e[1] && c[4] == e[4]) : c = f ? Yj(c) == f && (Number(ti(c)[4] || null) || null) == (Number(ti(a)[4] || null) || null) : !0;
                c = c || jk(a, ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"])
            }
        c && (b["X-YouTube-Page-CL"] = ck("PAGE_CL"),
        b["X-YouTube-Page-Timestamp"] = ck("PAGE_BUILD_TIMESTAMP"));
        return b
    }
    function jk(a, b) {
        var c = ck("CORS_HEADER_WHITELIST") || {}
          , e = Yj(a);
        if (!e)
            return !0;
        var f = c[e];
        return f ? Na(b, function(a) {
            return G(f, a)
        }) : !1
    }
    function kk(a, b) {
        var c = b.format || "JSON";
        b.WK && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var e = b.YK;
        e && (a = Zj(a, e));
        var f = b.XK || "";
        (e = b.di) && w(f) && (f = Wj(f),
        yb(f, e),
        f = Xj(f));
        var g = !1, k, l = hk(a, function(a) {
            if (!g) {
                g = !0;
                k && fk(k);
                var e;
                t: switch (a && "status"in a ? a.status : -1) {
                case 0:
                case 200:
                case 201:
                case 202:
                case 203:
                case 204:
                case 205:
                case 206:
                case 304:
                    e = !0;
                    break t;
                default:
                    e = !1
                }
                var f = null;
                if (e || 400 <= a.status && 500 > a.status)
                    f = lk(c, a);
                if (e)
                    t: {
                        e = f;
                        switch (c) {
                        case "XML":
                            e = 0 == parseInt(e && e.return_code, 10);
                            break t;
                        case "RAW":
                            e = !0;
                            break t
                        }
                        e = !!e
                    }
                var f = f || {}
                  , l = b.context || h;
                e ? b.Wc && b.Wc.call(l, a, f) : b.onError && b.onError.call(l, a, f);
                b.VI && b.VI.call(l, a, f)
            }
        }, b.method, f, b.headers, b.responseType, b.withCredentials);
        b.WI && 0 < b.timeout && (k = dk(function() {
            g || (g = !0,
            l.abort(),
            fk(k),
            b.WI.call(b.context || h, l))
        }, b.timeout));
        return l
    }
    function lk(a, b) {
        var c = null;
        switch (a) {
        case "JSON":
            var e = b.responseText
              , f = b.getResponseHeader("Content-Type") || "";
            e && 0 <= f.indexOf("json") && (c = qg(e));
            break;
        case "XML":
            if (e = (e = b.responseXML) ? mk(e) : null)
                c = {},
                e = e.getElementsByTagName("*"),
                F(e, function(a) {
                    c[a.tagName] = nk(a)
                })
        }
        return c
    }
    function mk(a) {
        return a ? (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }
    function nk(a) {
        var b = "";
        F(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    }
    ;function ok(a) {
        this.j = a || new Og("yt.leanback");
        a = this.j.get("yt_mdx_screen", !0);
        this.b = new Vj(a);
        this.b.lw() || this.Rm();
        this.Ln();
        this.g = [];
        this.h = []
    }
    d = ok.prototype;
    d.Ik = function() {
        return this.b
    }
    ;
    d.eg = function(a) {
        if (0 < this.g.length)
            this.g.push(a);
        else {
            var b = y(function(a) {
                !a && this.b && (this.b.Mb = "");
                this.b && this.j.h("yt_mdx_screen", this.b.fw(), 0, !0);
                a = this.g;
                this.g = [];
                F(a, function(a) {
                    a(this.b)
                }, this)
            }, this);
            this.b ? "" == this.b.Mb ? (this.g.push(a),
            this.Jn(this.b.Ab, b)) : a(this.b) : (this.g.push(a),
            this.ew(y(function(a) {
                this.Jn(a, b)
            }, this)))
        }
    }
    ;
    d.ZD = function(a, b, c, e) {
        this.h.push(e);
        if (!(1 < this.h.length)) {
            var f = y(function(a) {
                var b = this.h;
                this.h = [];
                F(b, function(b) {
                    b(a)
                })
            }, this);
            this.eg(y(this.Zp, this, a, b, c, y(function(e) {
                e ? f(e) : (this.b.Mb = "",
                this.eg(y(this.Zp, this, a, b, c, f)))
            }, this)))
        }
    }
    ;
    d.JF = function(a, b) {
        this.eg(y(this.FJ, this, a, !0, b))
    }
    ;
    d.YE = function(a, b) {
        var c = b;
        60 < c ? c = 60 * Math.floor((5 + c) / 60) : 10 < c && (c = 10 * Math.floor((1 + c) / 10));
        this.eg(y(this.HJ, this, a, c))
    }
    ;
    d.Rm = function(a) {
        if (a && this.b) {
            var b = this.Ne("/api/lounge/screens") + "/" + this.b.Ab;
            kk(b, {
                method: "DELETE",
                context: this,
                format: "RAW",
                headers: {
                    Authorization: "OAuth " + a
                }
            })
        }
        this.j.remove("yt_mdx_screen");
        this.b = null
    }
    ;
    d.Ne = function(a, b) {
        var c = Number(ti(document.location.href)[4] || null) || null || "";
        c && (c = ":" + c);
        c = "https://" + vi(document.location.href) + c + a;
        return yi(c, b || {})
    }
    ;
    d.Ln = function() {
        this.b && (this.b.Mb = "");
        dk(y(this.Ln, this), 864E5)
    }
    ;
    d.ew = function(a) {
        kk(this.Ne("/api/lounge/pairing/generate_screen_id"), {
            method: "GET",
            format: "RAW",
            Wc: function(b) {
                a(b.responseText)
            },
            onError: la(a, "")
        })
    }
    ;
    d.Zp = function(a, b, c, e) {
        a = {
            lounge_token: this.b.Mb,
            access_type: a ? "permanent" : "temporary",
            screen_id: this.b.Ab || "",
            screen_name: b
        };
        kk(this.Ne("/api/lounge/pairing/get_pairing_code", {
            ctx: c
        }), {
            di: a,
            method: "POST",
            format: "RAW",
            Wc: function(a) {
                e(a.responseText)
            },
            onError: la(e, "")
        })
    }
    ;
    d.FJ = function(a, b, c) {
        this.b ? kk(this.Ne("/api/lounge/pairing/register_pairing_code"), {
            di: {
                screen_id: this.b.Ab,
                pairing_code: a,
                access_type: b ? "permanent" : "temporary"
            },
            method: "POST",
            format: "RAW",
            Wc: y(c, this, !0),
            onError: y(c, this, !1)
        }) : c(!1)
    }
    ;
    d.HJ = function(a, b) {
        this.b && kk(this.Ne("/api/lounge/pairing/unregister_pairing_code", {
            s: b
        }), {
            di: {
                screen_id: this.b.Ab,
                pairing_code: a
            },
            method: "POST"
        })
    }
    ;
    d.Jn = function(a, b) {
        var c = y(function(c) {
            c = pg(c.responseText);
            var f = !1;
            c.screens && F(c.screens, function(b) {
                b.screenId == a && (this.b ? this.b.Mb = b.loungeToken : this.b = new Vj(b),
                f = !0)
            }, this);
            b(f)
        }, this);
        kk(this.Ne("/api/lounge/pairing/get_lounge_token_batch"), {
            di: {
                screen_ids: a
            },
            method: "POST",
            Wc: c,
            onError: la(b, !1)
        })
    }
    ;
    function pk(a, b, c) {
        this.videoId = a;
        this.g = b;
        this.error = c
    }
    pk.prototype.b = function() {
        return {
            videoId: this.videoId,
            reason: this.g,
            error: this.error
        }
    }
    ;
    function qk(a, b, c, e, f) {
        this.p = e;
        this.w = c;
        this.b = b;
        this.k = f;
        this.h = new ok(a);
        this.C = "";
        this.H = 0;
        this.g = null;
        this.j = {};
        this.I = !1;
        this.o = !0;
        this.l = []
    }
    B(qk, ma);
    d = qk.prototype;
    d.VC = function(a) {
        return new Uj("/api/lounge/bc",a)
    }
    ;
    d.Bh = function() {
        var a = {}, b = [], c, e, f;
        for (f in this.j)
            c = this.j[f],
            e = f.indexOf("#"),
            0 < e && (f = f.substr(0, e)),
            a[f] || (a[f] = !0,
            b.push(c));
        return b.sort()
    }
    ;
    d.dl = function(a) {
        this.k = a;
        this.g && this.g.Rq(a ? "OAuth " + a : "")
    }
    ;
    d.oj = function() {
        return !!this.k
    }
    ;
    d.sE = function() {
        return this.g && this.h.Ik() ? this.h.Ik().Ab || null : null
    }
    ;
    d.mk = function(a) {
        this.h.eg(a)
    }
    ;
    d.eE = function(a) {
        a && this.l.push(a);
        this.l.length < (a ? 2 : 1) && this.mk(y(this.Yp, this))
    }
    ;
    d.iE = function() {
        this.Ck(!1)
    }
    ;
    d.Ck = function(a) {
        this.g && (this.g.cq(),
        this.g.Vb(),
        this.g = null);
        this.j = {};
        a || this.He(!1)
    }
    ;
    d.R = function() {
        this.l.length = 0;
        this.g && this.g.Vb();
        qk.A.R.call(this)
    }
    ;
    d.sy = function() {
        this.Ck(!1);
        this.h.Rm(this.k || "");
        this.w.T("remote:status", [])
    }
    ;
    d.tE = function(a, b) {
        this.h.ZD(!0, this.p.name, a, y(function(a) {
            this.C = a;
            this.H = A();
            b(a)
        }, this))
    }
    ;
    d.uE = function() {
        var a = this.C;
        if (a) {
            this.C = "";
            var b = Math.floor((A() - this.H) / 1E3);
            300 > b && this.h.YE(a, b)
        }
    }
    ;
    d.fE = function(a, b) {
        this.h.JF(a, b)
    }
    ;
    d.yw = function(a) {
        if (this.b.xb()) {
            var b = a;
            -1E3 == a && (b = -1);
            var b = {
                currentTime: this.b.ce(),
                state: b
            }, c;
            -1E3 == a && (c = this.b.Eq(),
            b.currentError = rg(c.b()));
            this.lc("onStateChange", b);
            -1E3 == a && this.lc("onError", {
                errors: rg([c.b()])
            })
        }
    }
    ;
    d.Qn = function() {
        this.Uo()
    }
    ;
    d.Fm = function(a, b) {
        this.lc("onVolumeChanged", {
            volume: a,
            muted: b
        }, !0)
    }
    ;
    d.Oo = function(a) {
        this.To(a || [])
    }
    ;
    d.gk = function(a) {
        for (var b = [], c = 0, e = a.length; c < e; ++c)
            b.push(a[c].b());
        return rg(b)
    }
    ;
    d.Im = function(a) {
        this.lc("onError", {
            errors: this.gk(a)
        })
    }
    ;
    d.tn = function(a, b) {
        var c = {
            videoId: a
        };
        if (b && !sb(b)) {
            var e = b.languageCode || "";
            yb(c, {
                trackName: b.name || "",
                languageCode: e,
                sourceLanguageCode: b.sourceLanguageCode || e,
                languageName: b.languageName,
                format: b.format || 1,
                kind: b.kind || ""
            })
        }
        (e = this.b.jC()) && (c.style = rg(e));
        this.lc("onSubtitlesTrackChanged", c)
    }
    ;
    d.ur = function(a, b) {
        this.lc("updateUser", {
            username: a,
            authToken: b
        }, !0)
    }
    ;
    d.lc = function(a, b, c) {
        (c || this.I) && this.g && this.g.uD(a, b)
    }
    ;
    d.Uo = function(a, b) {
        if (this.g) {
            var c = {}
              , e = this.b.nj()
              , f = this.b.xb();
            if (f || e.length)
                f && 0 > e.indexOf(f) && console.warn("MDx send nowPlaying: Queue does not contain current video: " + f + " not in " + rg(e)),
                this.wp(c);
            this.vp(c, a);
            this.lc("nowPlaying", c, b)
        }
    }
    ;
    d.To = function(a, b, c) {
        if (this.g) {
            var e = {}
              , f = this.b.nj()
              , g = this.b.yz()
              , k = this.b.xb();
            if (k || 0 < f.length)
                k && 0 > f.indexOf(k) && (console.warn("MDx send nowPlayingPlaylist: Queue does not contain current video: " + k + " not in " + rg(f) + ". Adding to the end of queue."),
                f = Ra(f),
                f.push(k),
                g.push("x-missing")),
                e.video_ids = f.join(","),
                g.length == f.length ? e.videoSources = g.join(",") : console.warn("MDx send nowPlayingPlaylist: Sources and playlist length differ. " + g.length + " != " + f.length),
                this.wp(e),
                a.length && (e.errors = this.gk(a));
            this.vp(e, b);
            this.lc("nowPlayingPlaylist", e, c)
        }
    }
    ;
    d.He = function(a) {
        if (0 < this.l.length) {
            var b = this.l;
            this.l = [];
            for (var c = 0, e = b.length; c < e; ++c)
                b[c](a)
        }
    }
    ;
    d.Yp = function(a) {
        if (a)
            if (this.g)
                switch (this.g.Tn()) {
                case 3:
                    this.He(!0);
                    break;
                case 0:
                    this.He(!1)
                }
            else
                this.g = this.VC({
                    device: "LOUNGE_SCREEN",
                    id: this.p.id,
                    name: this.p.name,
                    app: this.p.Qc,
                    hasCc: ""
                }),
                this.g.WC(a.Mb),
                this.g.bl("handlerOpened", this.UC, this),
                this.g.bl("handlerError", this.TC, this),
                this.g.bl("handlerMessage", this.XC, this),
                this.g.Kn(),
                this.k && this.g.Rq("OAuth " + this.k);
        else
            this.He(!1)
    }
    ;
    d.UC = function() {
        this.He(!0)
    }
    ;
    d.TC = function(a) {
        this.g.bh() || (this.g.Sn(a) && this.k ? (this.k = null,
        this.h.Ik().Mb = "",
        this.Ck(!0),
        this.mk(y(this.Yp, this))) : this.He(!1))
    }
    ;
    d.XC = function(a) {
        var b = a.params || {};
        switch (a.b) {
        case "play":
            this.b.lj();
            break;
        case "pause":
            this.b.on();
            break;
        case "seekTo":
            this.b.mj(this.Vj(b));
            break;
        case "stopVideo":
            this.b.fn();
            break;
        case "setVideo":
            var c = this.Wj(b)
              , e = this.Vj(b)
              , b = this.b.nj()
              , f = b.indexOf(c);
            0 <= f ? this.b.Cy(c, f, e) : console.warn("MDx received setVideo without currently playing video: " + c + " not in " + rg(b));
            this.o = !1;
            break;
        case "setPlaylist":
            var c = this.Ro(b)
              , e = this.Vj(b)
              , g = parseInt(b.currentIndex, 10)
              , f = this.So(b)
              , b = this.Qo(b);
            isNaN(g) && (g = 0);
            this.b.dj(y(this.Po, this), c, f, b, g, e, this.o);
            this.o = !1;
            break;
        case "updatePlaylist":
            c = this.Ro(b);
            f = this.So(b);
            b = this.Qo(b);
            e = !0;
            (g = this.b.xb()) && (e = 0 <= c.indexOf(g));
            e ? this.b.dj(y(this.Po, this), c, f, b) : console.warn("MDx received updatePlaylist without currently playing video: " + g + " not in " + rg(c));
            this.o = !1;
            this.lc("confirmPlaylistUpdate", {
                updated: e
            }, !0);
            break;
        case "setVolume":
            e = this.b.Uj();
            c = parseInt(b.volume, 10) || 0;
            "delta"in b && (f = parseInt(b.delta, 10),
            0 <= e && !isNaN(f) && (c = Math.max(0, Math.min(e + f, 100))));
            this.b.pn(c);
            "true" == b.muted || "1" == b.muted ? this.b.nn() : this.b.qn();
            break;
        case "getVolume":
            this.Fm(this.b.Uj(), this.b.dh());
            break;
        case "setSubtitlesTrack":
            e = this.b.xb();
            c = this.Wj(b) || e;
            if (c == e) {
                f = {};
                if (b.trackName || b.languageCode)
                    f.name = b.trackName,
                    f.languageName = b.languageName,
                    f.languageCode = b.languageCode,
                    f.format = parseInt(b.format, 10) || 1,
                    f.kind = b.kind;
                this.b.By(c, f)
            }
            if ("style"in b)
                if (w(b.style)) {
                    try {
                        g = pg(b.style)
                    } catch (k) {
                        console.warn("Caption style not JSON, trying broken iOS style parsing for rich captions instead."),
                        g = this.yy(b.style || "")
                    }
                    g.fontFamilyOption || (g.fontFamilyOption = "propSans");
                    this.b.Vo(g)
                } else
                    this.b.Vo(null);
            break;
        case "getSubtitlesTrack":
            f = this.b.rn();
            e = this.b.xb();
            c = this.Wj(b) || e;
            c != e && (f = null);
            this.tn(c, f);
            break;
        case "getNowPlaying":
            this.Uo(a, !0);
            break;
        case "getPlaylist":
            this.b.zy(y(function(b) {
                this.To(b, a, !0)
            }, this));
            break;
        case "remoteConnected":
            e = new Nh(pg(b.device));
            b = !!b.ui;
            this.I = !0;
            sb(this.j) && b && (this.o = !0);
            this.j[e.id] = e.Qc;
            this.w.T("remote:connected", e, b);
            break;
        case "remoteDisconnected":
            e = new Nh(pg(b.device));
            b = !!b.ui;
            delete this.j[e.id];
            this.w.T("remote:disconnected", e, b);
            break;
        case "loungeStatus":
            c = [];
            b = pg(b.devices);
            if (v(b))
                for (f = 0,
                g = b.length; f < g; ++f)
                    e = new Nh(b[f]),
                    "REMOTE_CONTROL" == e.type && c.push(e);
            this.Ay(c);
            this.w.T("remote:status", c)
        }
    }
    ;
    d.vp = function(a, b) {
        b && b.params && b.params.recipientDevice && (a.recipientDevice = b.params.recipientDevice)
    }
    ;
    d.yy = function(a) {
        a = a.replace(/;\n}.*/, "");
        a = a.replace(/.*{/, "");
        a = a.split(/;\n/g);
        for (var b = {}, c, e, f = 0, g = a.length; f < g; ++f)
            c = a[f].split(/ = /),
            e = c.shift().trim(),
            c = c.shift().trim(),
            c = c.replace(/^"/, ""),
            c = c.replace(/"$/, ""),
            b[e] = c;
        return b
    }
    ;
    d.Wj = function(a) {
        return a.videoId || a.video_id || ""
    }
    ;
    d.Ro = function(a) {
        a = a.videoIds || a.video_ids || "";
        return 0 < a.length ? a.split(",") : []
    }
    ;
    d.So = function(a) {
        a = a.videoSources || "";
        return 0 < a.length ? a.split(",") : []
    }
    ;
    d.Qo = function(a) {
        var b = a.vvts || "";
        a = {};
        if (0 < b.length)
            for (var b = b.split(","), c = 0, e = b.length; c < e; ++c) {
                var f = b[c].split(":");
                a[f[0]] = f[1]
            }
        return a
    }
    ;
    d.Vj = function(a) {
        a = parseFloat(a.currentTime || a.newTime);
        if (isNaN(a) || 0 > a)
            a = 0;
        return a
    }
    ;
    d.Ay = function(a) {
        this.j = {};
        for (var b = 0, c = a.length; b < c; ++b)
            this.I = !0,
            this.j[a[b].id] = a[b].Qc
    }
    ;
    d.wp = function(a) {
        var b = this.b.xb();
        if (b) {
            var c = this.b.Jf()
              , e = c;
            -1E3 == c && (e = -1);
            a.video_id = b;
            a.current_time = this.b.ce();
            a.state = e;
            -1E3 == c && (b = this.b.Eq(),
            a.currentError = rg(b.b()))
        }
    }
    ;
    d.Po = function(a) {
        a.length && this.lc("onError", {
            errors: this.gk(a)
        })
    }
    ;
    var rk = m("yt.dom.getNextId_");
    if (!rk) {
        rk = function() {
            return ++sk
        }
        ;
        ba("yt.dom.getNextId_", rk, void 0);
        var sk = 0
    }
    ;function tk(a) {
        if (a = a || window.event) {
            for (var b in a)
                b in uk || (this[b] = a[b]);
            this.MC = a.scale;
            this.LC = a.rotation;
            this.pc = a;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget)
                try {
                    b = b.nodeName && b
                } catch (c) {
                    b = null
                }
            else
                "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0,
            this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform"in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30,
            this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2,
            this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3,
            this.wheelDeltaY = a.wheelDeltaY / -3);
            this.g = a.pageX;
            this.h = a.pageY
        }
    }
    d = tk.prototype;
    d.Sq = function() {
        if (document.body && document.documentElement) {
            var a = document.body.scrollTop + document.documentElement.scrollTop;
            this.g = this.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            this.h = this.clientY + a
        }
    }
    ;
    d.GR = function() {
        t(this.g) || this.Sq();
        return this.g
    }
    ;
    d.HR = function() {
        t(this.h) || this.Sq();
        return this.h
    }
    ;
    d.pc = null;
    d.type = "";
    d.target = null;
    d.relatedTarget = null;
    d.currentTarget = null;
    d.data = null;
    d.source = null;
    tk.prototype.state = null;
    d = tk.prototype;
    d.keyCode = 0;
    d.charCode = 0;
    d.altKey = !1;
    d.ctrlKey = !1;
    d.shiftKey = !1;
    d.clientX = 0;
    d.clientY = 0;
    d.wheelDeltaX = 0;
    d.wheelDeltaY = 0;
    d.LC = 0;
    d.MC = 1;
    d.FU = null;
    d.changedTouches = null;
    d.preventDefault = function() {
        this.pc.returnValue = !1;
        this.pc.preventDefault && this.pc.preventDefault()
    }
    ;
    d.stopPropagation = function() {
        this.pc.cancelBubble = !0;
        this.pc.stopPropagation && this.pc.stopPropagation()
    }
    ;
    d.stopImmediatePropagation = function() {
        this.pc.cancelBubble = !0;
        this.pc.stopImmediatePropagation && this.pc.stopImmediatePropagation()
    }
    ;
    d.OS = function() {
        return this.altKey || this.ctrlKey || this.shiftKey
    }
    ;
    var uk = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var vk = m("yt.events.listeners_") || {};
    ba("yt.events.listeners_", vk, void 0);
    var wk = m("yt.events.counter_") || {
        count: 0
    };
    ba("yt.events.counter_", wk, void 0);
    function xk(a, b, c, e) {
        return rb(vk, function(f) {
            return f[0] == a && f[1] == b && f[2] == c && f[4] == !!e
        })
    }
    function yk(a, b, c, e) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        e = !!e;
        var f = xk(a, b, c, e);
        if (f)
            return f;
        var f = ++wk.count + "", g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter"in document), k;
        k = g ? function(e) {
            e = new tk(e);
            if (!Tc(e.relatedTarget, function(b) {
                return b == a
            }, !0))
                return e.currentTarget = a,
                e.type = b,
                c.call(a, e)
        }
        : function(b) {
            b = new tk(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        k = ek(k);
        vk[f] = [a, b, c, k, e];
        a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover", k, e) : "mouseleave" == b && g ? a.addEventListener("mouseout", k, e) : "mousewheel" == b && "MozBoxSizing"in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", k, e) : a.addEventListener(b, k, e) : a.attachEvent("on" + b, k);
        return f
    }
    function zk(a) {
        a && ("string" == typeof a && (a = [a]),
        F(a, function(a) {
            if (a in vk) {
                var c = vk[a]
                  , e = c[0]
                  , f = c[1]
                  , g = c[3]
                  , c = c[4];
                e.removeEventListener ? e.removeEventListener(f, g, c) : e.detachEvent && e.detachEvent("on" + f, g);
                delete vk[a]
            }
        }))
    }
    ;function Ak() {
        this.b = new cast.receiver.Receiver("YouTube",["ramp"]);
        this.g = new cast.receiver.ChannelHandler("ramp");
        this.Qz()
    }
    B(Ak, ma);
    d = Ak.prototype;
    d.Qz = function() {
        this.g.addChannelFactory(this.b.createChannelFactory("ramp"))
    }
    ;
    d.Cv = function() {
        this.b.start()
    }
    ;
    d.Rc = function(a, b) {
        yk(this.g, a, b)
    }
    ;
    d.FF = function() {
        return this.g.getChannels()
    }
    ;
    d.vE = function() {
        return this.b.getConnectionService().isConnected()
    }
    ;
    d.Er = function(a) {
        this.b.getConnectionService().setAppData(a)
    }
    ;
    d.R = function() {
        var a = this.g, b;
        for (b in vk)
            vk[b][0] == a && zk(b);
        Ak.A.R.call(this)
    }
    ;
    var Bk = {
        "-1000": 0,
        "-1": 1,
        0: 1,
        1: 2,
        2: 1,
        3: 2,
        5: 1,
        1081: 1
    };
    function Ck(a, b) {
        this.b = a;
        this.h = b;
        this.j = 0;
        this.g = null;
        this.k = "";
        this.h.Rc(cast.receiver.Channel.EventType.OPEN, y(this.Bv, this));
        this.h.Rc(cast.receiver.Channel.EventType.MESSAGE, y(this.Av, this));
        this.h.Cv()
    }
    B(Ck, ma);
    d = Ck.prototype;
    d.R = function() {
        na(this.h);
        Ck.A.R.call(this)
    }
    ;
    d.Gi = function(a) {
        this.k = a;
        this.h.vE() && (a ? this.h.Er('<additionalData xmlns="http://www.youtube.com/dial"><screenId>' + a + "</screenId></additionalData>") : this.h.Er(""))
    }
    ;
    d.Bv = function(a) {
        this.ke(a.target, {
            cmd_id: 0,
            type: "STATUS",
            status: this.te()
        });
        this.Gi(this.k)
    }
    ;
    d.Av = function(a) {
        var b = a.target;
        a = a.message;
        t(a.cmd_id) && t(a.type) && this.LK(b, a)
    }
    ;
    d.ke = function(a, b) {
        try {
            a.send(b)
        } catch (c) {}
    }
    ;
    d.yr = function(a) {
        for (var b = this.h.FF(), c = b.length, e = 0; e < c; ++e)
            b[e].isOpen() && this.ke(b[e], a)
    }
    ;
    d.Ij = function() {
        var a = this.b.Uj();
        return 0 <= a ? a / 100 : 1
    }
    ;
    d.te = function(a, b) {
        var c = this.b.xb()
          , e = t(a) ? a : this.b.Jf();
        if (!ga(this.g) || !c || this.g.content_id != c)
            return {
                event_sequence: this.j++,
                state: 0,
                muted: this.b.dh(),
                volume: this.Ij()
            };
        if (-1E3 == e)
            return {
                event_sequence: this.j++,
                content_id: this.b.xb(),
                state: 0,
                error: {
                    domain: "YouTube.MDx",
                    code: 2
                }
            };
        var f = Bk[e] || 0
          , c = {
            event_sequence: this.j++,
            state: f,
            content_id: c,
            current_time: this.b.ce(),
            duration: this.g.duration,
            muted: this.b.dh(),
            time_progress: 1 == e,
            title: this.g.title,
            volume: this.Ij()
        };
        this.g.thumbnail_url && (c.image_url = this.g.thumbnail_url);
        ga(b) && yb(c, b);
        return c
    }
    ;
    d.rs = function(a) {
        this.yr({
            cmd_id: 0,
            type: "STATUS",
            status: this.te(a)
        })
    }
    ;
    d.Ts = function(a) {
        this.g = a || null;
        this.yr({
            cmd_id: 0,
            type: "STATUS",
            status: this.te()
        })
    }
    ;
    d.LK = function(a, b) {
        switch (b.type) {
        case "PLAY":
            var c = this.b.Jf()
              , e = 3;
            if (this.g && t(b.position) && fa(b.position)) {
                var f = Math.max(0, Math.min(b.position, this.g.duration));
                this.b.mj(f);
                2 == c && this.b.lj()
            } else
                this.b.lj();
            if (2 == c || 1 == c)
                e = 1;
            this.ke(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: this.te(e)
            });
            break;
        case "STOP":
            this.b.on();
            break;
        case "INFO":
            this.ke(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: this.te()
            });
            break;
        case "VOLUME":
            c = this.Ij();
            t(b.volume) && fa(b.volume) && (this.b.pn(Math.round(100 * b.volume)),
            c = b.volume);
            e = this.b.dh();
            t(b.muted) && (b.muted ? this.b.nn() : this.b.qn(),
            e = b.muted);
            this.ke(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: this.te(void 0, {
                    volume: c,
                    muted: e
                })
            });
            break;
        default:
            this.ke(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: {
                    event_sequence: this.j++,
                    original_operation: b.type,
                    error: {
                        domain: "YouTube.MDx",
                        code: 1
                    }
                }
            })
        }
    }
    ;
    function Dk(a, b) {
        this.g = b.l && b.isLimitedGraphics ? "http:" : a.location.protocol;
        this.b = /(lh[3-6].googleusercontent)/i;
        this.h = "yt3.ggpht"
    }
    d = Dk.prototype;
    d.Bj = function(a) {
        return a.replace(this.b, "yt3.ggpht")
    }
    ;
    d.cc = function(a) {
        return a ? this.Ct(this.bK(a), "i", "1") : ""
    }
    ;
    d.nf = function(a, b) {
        return this.Ct(a, "vi", b)
    }
    ;
    d.Ct = function(a, b, c) {
        return this.g + "//i1.ytimg.com/" + b + "/" + a + "/" + c + ".jpg"
    }
    ;
    d.bK = function(a) {
        return 24 == a.length ? a.substr(2) : a
    }
    ;
    Dk.inject = ["$window", "environmentModel"];
    function Ek(a, b, c) {
        this.videoId = a || "";
        this.playlistId = b || "";
        this.innerTubeEndpointParams = c || null
    }
    ;function Fk(a, b) {
        ei.call(this);
        this.h = a;
        this.g = {};
        b && this.push(b)
    }
    B(Fk, ei);
    d = Fk.prototype;
    d.clear = function() {
        this.g = {};
        Fk.A.clear.call(this)
    }
    ;
    d.slice = function(a, b) {
        return new Fk(this.h,Fk.A.slice.call(this, a, b).la())
    }
    ;
    d.push = function(a) {
        Fk.A.push.call(this, this.Hs(a))
    }
    ;
    d.unshift = function(a) {
        Fk.A.unshift.call(this, this.Hs(a, !0))
    }
    ;
    d.Hs = function(a, b) {
        return (v(a) ? a : [a]).filter(b ? this.eK : this.cK, this)
    }
    ;
    d.cK = function(a) {
        if ((a = a && a[this.h]) && this.g[a])
            return !1;
        a && (this.g[a] = !0);
        return !0
    }
    ;
    d.eK = function(a) {
        if (a = a && a[this.h]) {
            if (this.g[a]) {
                var b = this.hx(a);
                if (0 > b)
                    return !1;
                this.b.splice(b, 1);
                this.length = this.b.length
            }
            this.g[a] = !0
        }
        return !0
    }
    ;
    d.hx = function(a) {
        for (var b = 0; b < this.Y(); ++b)
            if (this.b[b][this.h] === a)
                return b;
        return -1
    }
    ;
    function Y() {
        this.title = this.serviceQuery = this.Ba = this.Ka = this.Rg = this.td = "";
        this.dc = 0;
        this.S = new Fk("videoId");
        this.b = null
    }
    Y.prototype.Y = function() {
        return this.S.Y()
    }
    ;
    Y.prototype.clone = function() {
        var a = new Y;
        a.td = this.td;
        a.Rg = this.Rg;
        a.Ka = this.Ka;
        a.Ba = this.Ba;
        a.serviceQuery = this.serviceQuery;
        a.title = this.title;
        a.dc = this.dc;
        a.S = this.S.slice(0, this.S.Y());
        return a
    }
    ;
    function Gk() {
        K.call(this);
        this.model = new Y;
        this.service = null;
        this.h = this.activeIndex = 0;
        this.g = new Ek;
        this.pe = !1;
        this.Wb = null
    }
    B(Gk, K);
    Jd(Gk, ["activeIndex", "model"]);
    function Hk(a, b, c, e, f) {
        var g = new Gk;
        Ik(g, a, b, c, e, f);
        return g
    }
    function Ik(a, b, c, e, f, g) {
        a.service = b;
        a.model.title = c || "";
        a.model.bb = e;
        a.model.Ba = b.id;
        a.model.serviceQuery = f || "";
        a.g = g || a.g;
        a.pe = b.pe;
        return a
    }
    d = Gk.prototype;
    d.Y = function() {
        return this.model ? this.model.S.Y() : 0
    }
    ;
    d.aC = function(a) {
        this.model.serviceQuery = a.model.serviceQuery;
        this.model.Ba = a.model.Ba;
        this.model.title = a.model.title;
        this.model.bb = a.model.bb;
        this.service = a.service;
        this.g = a.g;
        return this
    }
    ;
    d.equals = function(a) {
        return !!(a && a.model && this.model && a.model.Y() === this.model.Y() && a.model.serviceQuery === this.model.serviceQuery && a.model.title === this.model.title)
    }
    ;
    d.Hb = function() {
        return this.fa(this.activeIndex)
    }
    ;
    d.load = function(a, b) {
        var c = {
            query: this.model.serviceQuery
        };
        z(c, this.g);
        b && this.service.ec && this.service.ec("start_browse", "fr_rq", "fr_rs", "fr_r");
        this.service.load(c, y(function(b) {
            b.errorMessage && (this.errorMessage = b.errorMessage);
            this.clear();
            this.model.S.push(b.S.la());
            a && a(b)
        }, this))
    }
    ;
    d.clear = function() {
        this.model.S.clear()
    }
    ;
    d.fa = function(a) {
        return this.model && this.model.S ? this.model.S.fa(a) : null
    }
    ;
    d.Fk = function(a, b) {
        var c = -1;
        this.model && this.model.S && this.model.S.la().some(function(e, f) {
            if (e[a] === b)
                return c = f,
                !0
        });
        return c
    }
    ;
    d.Kr = function() {
        return this.model.S
    }
    ;
    d.Nk = function(a) {
        this.h += a
    }
    ;
    d.Uh = function() {
        return !1
    }
    ;
    d.ub = function(a) {
        this.activeIndex = a
    }
    ;
    function Jk() {
        this.b = [];
        this.j = [];
        this.l = !0;
        this.numLoadedPages = 0;
        this.Qa = "";
        this.w = null;
        Gk.call(this)
    }
    B(Jk, Gk);
    Jd(Jk, ["numLoadedPages"]);
    function Kk(a, b, c, e, f) {
        var g = new Jk;
        Ik(g, a, b, c, e, f);
        return g
    }
    d = Jk.prototype;
    d.clear = function() {
        this.oA();
        for (var a = 0, b = this.b.length; a < b; ++a)
            this.b[a] && (this.b[a].collection = null);
        a = 0;
        for (b = this.j.length; a < b; ++a) {
            var c = this.j[a];
            c.b && (c.b.cancel && c.b.cancel(),
            c.b = null)
        }
        this.numLoadedPages = 0;
        Jk.A.clear.call(this)
    }
    ;
    d.gx = function() {
        this.clear();
        this.b = [];
        this.l = !0;
        this.j = [];
        this.h = 0;
        this.ub(0)
    }
    ;
    d.Gv = function(a) {
        this.w = a
    }
    ;
    d.oA = function() {
        for (var a = this.Tg() - 2; 0 <= a; --a)
            this.b[a].collection && (this.activeIndex -= this.b[a].g)
    }
    ;
    d.Om = function(a) {
        return a.every(function(a) {
            a = this.b[a.index];
            return !(!a || !a.collection || a.error)
        }, this)
    }
    ;
    d.load = function(a, b) {
        var c = this.EA()
          , e = a || p;
        if (this.Om(c))
            e();
        else {
            var f, g = !!b;
            this.j = c;
            for (var k = 0, l = c.length; k < l; ++k) {
                var n = c[k];
                (f = this.b[n.index]) && f.collection && !f.error || this.FA(n, c, e, g);
                g && (g = !1)
            }
        }
    }
    ;
    d.FA = function(a, b, c, e) {
        var f = {}
          , g = null;
        this.b.length && a.index && (g = this.b[a.index - 1]);
        g && g.h ? f.continuation = g.h : (f["start-index"] = 25 * a.index + 1,
        f["max-results"] = 25);
        f.continuation || (f.query = this.model.serviceQuery);
        z(f, this.g);
        e && this.service.ec && this.service.ec("start_browse", "fr_rq", "fr_rs", "fr_r");
        a.b = this.service.load(f, y(this.Sg, this, a, b, c), y(this.$w, this, a, b, c))
    }
    ;
    d.Sg = function(a, b, c, e) {
        a.b = null;
        a.collection = e;
        a.g = e.S.Y();
        this.b[a.index] = a;
        a.error = !1;
        0 != a.index || a.g || (this.l = !0);
        a.h = e.b;
        this.model.dc = e.dc;
        if (this.Om(b)) {
            a = this.model.S;
            if (0 === a.Y())
                for (var f = 0, g = b.length; f < g; ++f) {
                    var k = this.b[b[f].index];
                    a.push(k.collection.S.la())
                }
            else
                for (var l = this.Tg(), f = 0, g = b.length; f < g; ++f)
                    k = this.b[b[f].index],
                    k.index >= l ? a.push(k.collection.S.la()) : (a.unshift(k.collection.S.la()),
                    this.activeIndex += k.g);
            this.numLoadedPages += b.length;
            this.j = [];
            c()
        }
        this.model.title || (e.td && "UU" == e.Ka ? (this.model.title = e.td,
        this.model.bb = this.w.cc(e.Rg),
        this.T("model:changed", this.model)) : e.title && (this.model.title = e.title,
        this.T("model:changed", this.model)))
    }
    ;
    d.$w = function(a, b, c) {
        this.Sg(a, b, c, new Y);
        this.b[a.index].error = !0;
        b.some(function(a) {
            return this.b[a.index].error
        }, this) && (this.j = [],
        c())
    }
    ;
    d.Tg = function() {
        if (0 === this.h)
            return 0;
        for (var a = 0, b = this.b.length, c, e = 0; e < b; ++e)
            if (c = this.b[e])
                if (a += c.g,
                this.h < a)
                    return c.index;
        return 0
    }
    ;
    d.WQ = function() {
        return this.b[this.Tg()]
    }
    ;
    d.EA = function() {
        var a = this.ol()
          , b = !!a.h || this.service instanceof Ai
          , a = [a];
        this.l || (a.unshift(this.ol(-1)),
        b && a.push(this.ol(1)));
        this.l = !1;
        return a.filter(function(a) {
            return 0 <= a.index && (a.error || !a.collection)
        })
    }
    ;
    d.ol = function(a) {
        a = a || 0;
        a = this.Tg() + a;
        var b = this.b[a];
        return b ? b : new Lk(a)
    }
    ;
    d.Uh = function(a) {
        return 0 < a ? this.activeIndex === this.Y() - 4 : 4 === this.activeIndex && 4 < this.h
    }
    ;
    function Lk(a) {
        this.collection = null;
        this.g = 0;
        this.b = null;
        this.index = a;
        this.h = null
    }
    ;function Mk() {
        K.call(this);
        this.timeLeft = this.percentagePlayed = this.percentageLoaded = this.percentagePlayedStyle = this.percentageLoadedStyle = this.duration = this.currentTime = 0
    }
    B(Mk, K);
    Jd(Mk, "currentTime duration percentageLoadedStyle percentagePlayedStyle percentageLoaded percentagePlayed timeLeft".split(" "));
    function Nk() {
        Jk.call(this);
        this.k = [];
        this.o = NaN
    }
    B(Nk, Jk);
    function Ok(a, b, c, e, f) {
        var g = new Nk;
        Ik(g, a, b, c, e, f);
        return g
    }
    Nk.prototype.p = function(a) {
        this.k.push(a)
    }
    ;
    Nk.prototype.C = function(a) {
        this.o = a
    }
    ;
    Nk.prototype.Sg = function(a, b, c, e) {
        var f = y(function() {
            this.Kr().unshift(this.k);
            !isNaN(this.o) && this.o < this.Y() && this.Kr().splice(this.o);
            c()
        }, this);
        Nk.A.Sg.call(this, a, b, f, e)
    }
    ;
    function Pk() {
        this.rows = [];
        this.cb = 0
    }
    d = Pk.prototype;
    d.fc = function() {
        return this.rows[this.cb]
    }
    ;
    d.Fd = function() {
        return this.rows
    }
    ;
    d.Y = function() {
        return this.rows.length
    }
    ;
    d.wD = function(a) {
        this.rows.push(a)
    }
    ;
    d.clear = function() {
        this.rows.length = 0
    }
    ;
    d.Pq = function(a) {
        for (var b = this.Y(), c = 0; c < b; ++c)
            if (a === this.rows[c].model.title)
                return c;
        return -1
    }
    ;
    function Qk() {
        this.b = new Xd(25,!0)
    }
    d = Qk.prototype;
    d.load = function(a, b) {
        for (var c = [], e = this.b.ua(), f = 0, g = e.length; f < g; ++f)
            c.push(e[f].video);
        e = new Y;
        e.S.push(c);
        b && b(e);
        return e
    }
    ;
    d.Ru = function(a) {
        return (a = this.b.get(a)) ? (a.nc.ub(a.activeIndex),
        a.nc) : null
    }
    ;
    d.Nz = function(a, b) {
        this.b.get(a.videoId) || this.b.Ef(a.videoId, {
            video: a,
            nc: this.hC(b),
            YB: b,
            activeIndex: b.activeIndex
        })
    }
    ;
    d.hC = function(a) {
        for (var b = this.b.ua(), c = 0, e = b.length; c < e; ++c)
            if (b[c].YB === a)
                return b[c].nc;
        b = new Jk;
        b.aC(a);
        return b
    }
    ;
    d.Y = function() {
        return this.b.ma()
    }
    ;
    function Rk(a, b, c, e, f, g, k) {
        Pk.call(this);
        this.o = a;
        this.k = b;
        this.w = c;
        this.l = e;
        this.g = f;
        this.j = g;
        this.currentVideo = this.b = null;
        this.h = this.zu();
        this.p = k
    }
    B(Rk, Pk);
    d = Rk.prototype;
    d.Hb = function() {
        var a = this.fc();
        return a ? a.Hb() : null
    }
    ;
    d.zu = function() {
        var a = Hk(this.g, "[[Current Watch History|Displays previously watched videos.]]", "icon-hourglass");
        a.model.Ka = "HL";
        return a
    }
    ;
    d.qf = function(a, b, c, e, f) {
        this.currentVideo = a;
        this.j.update(this.currentVideo, c, e, f);
        (f = b === this.h) && (b = this.g.Ru(a.videoId));
        c = this.Qu(a.channel);
        b && "[[Featured Playlist|Title for playlist.]]" !== b.model.title && (b.service !== this.k || b instanceof Nk) || (c.p(a),
        b = c);
        e = [];
        this.rows.length = 1;
        b !== this.b && (this.b = this.rows[0] = b,
        this.b.load(p));
        !f && this.currentVideo && this.Su(this.currentVideo.videoId);
        f = this.Pu(a);
        e.push(f);
        e.push(c);
        this.Nu(a);
        0 < this.g.Y() && e.push(this.Ui());
        this.Ou(e, this.rows);
        this.Bm([f, this.h]);
        return b
    }
    ;
    d.xD = function() {
        var a = this.b;
        this.currentVideo && a && this.g.Nz(this.currentVideo, a)
    }
    ;
    d.Vp = function() {
        this.currentVideo = null
    }
    ;
    d.Ou = function(a, b) {
        for (var c, e = a.length, f = 0; f < e; ++f)
            (c = a[f]) && (b.some(function(a) {
                return c.model.title === a.model.title
            }) || b.push(c))
    }
    ;
    d.Qu = function(a) {
        return Ok(this.w, "[[Uploads for channel:|sWqBGwb2WdBVvjLS_6hayw]] " + a.displayName, a.imageUrl, a.username)
    }
    ;
    d.Pu = function(a) {
        return Kk(this.k, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", "icon-related", a.videoId)
    }
    ;
    d.Nu = function(a) {
        a.o && this.o.ab(a.channel.username, y(function(b) {
            if (b.Pg.length) {
                var c = Kk(this.l, "[[Featured Playlist|Title for playlist.]]", "icon-subscribe");
                c.serviceQuery = b.Pg;
                c.g = new Ek(a.videoId,b.Pg);
                this.rows.push(c)
            }
        }, this))
    }
    ;
    d.LR = function() {
        return this.j
    }
    ;
    d.Su = function(a) {
        a = this.b.Fk("videoId", a);
        this.b.ub(Math.max(a, 0))
    }
    ;
    d.Ui = function() {
        return this.h
    }
    ;
    d.qx = function() {
        return this.b ? this.b.model : null
    }
    ;
    d.eh = function() {
        return this.rows[0]
    }
    ;
    d.Vi = function() {
        var a = this.eh()
          , b = -1;
        this.currentVideo && (b = a.Fk("videoId", this.currentVideo.videoId));
        -1 == b && (b = a.activeIndex);
        return b < a.Y() - 1 ? a.fa(++b) : this.p.loopRows ? a.fa(0) : null
    }
    ;
    d.next = function(a) {
        var b = this.Vi();
        if (b) {
            var c = this.eh();
            this.qf(b, c, 0, a);
            c.Nk(1);
            c.Uh(1) && c.load(p);
            return this.currentVideo.videoId
        }
        return ""
    }
    ;
    d.AH = function() {
        if (this.currentVideo) {
            var a = this.b
              , b = a.Fk("videoId", this.currentVideo.videoId);
            if (0 < b)
                return this.qf(a.fa(--b), a),
                a.Nk(-1),
                a.Uh(-1) && a.load(p),
                this.currentVideo.videoId
        }
        return ""
    }
    ;
    d.Bm = function(a) {
        (a || [this.Ui()]).forEach(function(a) {
            a.ub(0)
        });
        this.cb = 0
    }
    ;
    Rk.inject = "brandingService relatedVideosService userUploadsService vevoPlaylistService watchHistoryModel playerVariablesModel environmentModel".split(" ");
    function Sk() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }
    ;function Tk(a, b) {
        eh.call(this);
        this.J = a;
        this.j = b;
        this.g = [];
        this.h = !1;
        this.b = null
    }
    B(Tk, eh);
    d = Tk.prototype;
    d.cu = function(a) {
        this.j.g && (this.h ? a() : (this.g.push(a),
        1 < this.g.length || Gf("https://www.gstatic.com/cast/js/receiver/1.0/cast_receiver.js", {
            timeout: 3E4
        }).Df(y(this.PA, this))))
    }
    ;
    d.PA = function() {
        if (m("cast.receiver.Receiver")) {
            var a = m("cast.receiver.logger.setLevelValue");
            a && a(900);
            if (this.b = m("cast.receiver.platform"))
                this.b.addEventListener(cast.receiver.Platform.EventType.VOLUME_CHANGED, y(this.ro, this)),
                this.b.isReady() && this.ro();
            a = this.g;
            this.g = [];
            this.h = !0;
            for (var b = a.length, c = 0; c < b; ++c)
                a[c]()
        }
    }
    ;
    d.ro = function() {
        var a = this.b.getVolume()
          , b = !!this.b.getMuted()
          , a = fa(a) ? hb(Math.round(100 * a), 0, 100) : -1;
        this.Ja(a, b)
    }
    ;
    d.ai = function(a) {
        this.b ? this.b.setVolume(a / 100) : this.Ia()
    }
    ;
    d.Rt = function(a) {
        this.b ? this.b.setMuted(a) : this.Ia()
    }
    ;
    d.$h = function() {
        this.Rt(!0)
    }
    ;
    d.bi = function() {
        this.Rt(!1)
    }
    ;
    Tk.$inject = ["$window", "environmentModel"];
    function Uk(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && a.setAttribute(c, b[c])
    }
    function Vk() {
        var a = new ActiveXObject("MSXML2.DOMDocument");
        if (a) {
            a.resolveExternals = !1;
            a.validateOnParse = !1;
            try {
                a.setProperty("ProhibitDTD", !0),
                a.setProperty("MaxXMLSize", 2048),
                a.setProperty("MaxElementDepth", 256)
            } catch (b) {}
        }
        return a
    }
    ;function Wk(a) {
        var b = {};
        if (1 == a.nodeType && 0 < a.attributes.length)
            for (var c = 0; c < a.attributes.length; ++c) {
                var e = a.attributes.item(c);
                b[e.nodeName.replace(":", "$")] = e.nodeValue
            }
        if (a.hasChildNodes())
            for (a = a.firstChild; a; )
                3 == a.nodeType ? (c = "$t",
                e = a.nodeValue) : (c = a.nodeName.replace(":", "$"),
                e = Wk(a)),
                c in b ? (v(b[c]) || (b[c] = [b[c]]),
                b[c].push(e)) : b[c] = e,
                a = a.nextSibling;
        return b
    }
    ;function Xk(a, b, c) {
        qi.call(this);
        this.b = Y;
        this.g = a;
        this.k = b;
        this.h = c;
        this.Na("author", this.Hw);
        this.Na("logo", this.Iw);
        this.Na("title", this.Jw)
    }
    B(Xk, qi);
    d = Xk.prototype;
    d.Hw = function(a, b, c) {
        c && (a.td = this.sa(c[0].name),
        a.Rg = this.sa(c[0].yt$userId));
        return a
    }
    ;
    d.Jw = function(a, b, c) {
        a.title = this.sa(c);
        return a
    }
    ;
    d.Iw = function(a, b, c) {
        a.imageUrl = this.sa(c);
        return a
    }
    ;
    d.cf = function(a, b, c) {
        if (v(c)) {
            b = 0;
            for (var e = c.length; b < e; ++b)
                this.Tt(a, c[b])
        } else
            this.Tt(a, c);
        return a
    }
    ;
    d.Tt = function(a, b) {
        var c = this.ji(a, b);
        a && a.S && c && a.S.push(c)
    }
    ;
    d.ji = function(a, b) {
        var c = new jg(a.Ba,a.serviceQuery,a.Ka)
          , e = new ig(a.Ba,a.serviceQuery);
        if (this.wv(b))
            return this.ov(c, b),
            this.nv(e, b),
            c.channel = e,
            c;
        c.activityDescription = this.Yi();
        c.description = this.sv(b);
        c.channel = this.rv(e, b);
        c.duration = this.en(b);
        c.durationLabel = this.g.aj(c.duration);
        c.imageUrl = this.h.nf(this.jj(b), this.k.M);
        c.I = this.uv(b);
        c.o = this.pv(b);
        c.title = this.tv(b);
        c.videoId = this.jj(b);
        c.viewCount = this.vv(b);
        c.viewCountLabel = this.g.Yd(c.viewCount);
        c.uploadedDate = this.qv(b);
        e = new Date(Date.parse(c.uploadedDate));
        c.uploadedDateLabel = this.g.zv(e);
        this.xv(c, b);
        this.yv(c, b);
        if (b.app$control && b.app$control.yt$state)
            for (var e = v(b.app$control.yt$state) ? b.app$control.yt$state : [b.app$control.yt$state], f = 0, g = e.length; f < g; ++f)
                if (e[f] && "restricted" == e[f].name) {
                    c.b = e[f].reasonCode;
                    break
                }
        return c
    }
    ;
    d.xv = function(a, b) {
        var c = this.Uz(b)
          , e = this.Tz(b)
          , f = c + e;
        0 < f ? (a.h = e / f,
        a.j = c / f) : (a.h = 0,
        a.j = 0);
        a.l = e;
        a.dislikesLabel = this.g.Yd(a.l);
        a.dislikesStyle = {
            width: dg(a.h)
        };
        a.w = c;
        a.likesLabel = this.g.Yd(a.w);
        a.likesStyle = {
            width: dg(a.j)
        }
    }
    ;
    d.yv = function(a, b) {
        a.g = !!b.yt$paidContent;
        a.p = !!b.yt$paidContent && "free" === b.yt$paidContent.type
    }
    ;
    d.Tz = function(a) {
        if (a && a.yt$rating && a.yt$rating.numDislikes)
            return parseInt(a.yt$rating.numDislikes, 10)
    }
    ;
    d.Uz = function(a) {
        if (a && a.yt$rating && a.yt$rating.numLikes)
            return parseInt(a.yt$rating.numLikes, 10)
    }
    ;
    d.Yi = function() {
        return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    }
    ;
    d.qv = function(a) {
        return a && a.media$group && a.media$group.yt$uploaded ? new Date(this.sa(a.media$group.yt$uploaded)) : null
    }
    ;
    d.jj = function(a) {
        return a && a.media$group && a.media$group.yt$videoid ? a.media$group.yt$videoid.$t : ""
    }
    ;
    d.sv = function(a) {
        return a && a.media$group && a.media$group.media$description && a.media$group.media$description.$t ? a.media$group.media$description.$t.slice(0, 165) : ""
    }
    ;
    d.tv = function(a) {
        return a && a.title ? a.title.$t : ""
    }
    ;
    d.en = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration.seconds, 10) : 0
    }
    ;
    d.uv = function(a) {
        return !!a.yt$hd
    }
    ;
    d.pv = function(a) {
        return !!a.yt$claimed
    }
    ;
    d.rv = function(a, b) {
        b.media$group && b.media$group.yt$uploaderId && (a.Qa = b.media$group.yt$uploaderId.$t);
        b.media$group && b.media$group.media$credit && (a.username = this.al(b.media$group.media$credit).$t,
        a.displayName = this.al(b.media$group.media$credit).yt$display);
        a.Qa && (a.imageUrl = this.h.cc(a.Qa));
        b.yt$paidContent && b.yt$paidContent.link && b.yt$paidContent.link.length && (a.g = Ma(b.yt$paidContent.link, function(a) {
            return a.rel && -1 < a.rel.indexOf("channel.indirectOffer")
        }));
        return a
    }
    ;
    d.vv = function(a) {
        return a.yt$statistics ? a.yt$statistics.viewCount : 0
    }
    ;
    d.wv = function(a) {
        return a.batch$status && "200" != a.batch$status.code
    }
    ;
    d.ov = function(a, b) {
        a.videoId = b.batch$id.$t;
        a.b = "notAvailable"
    }
    ;
    d.nv = function(a, b) {
        a.videoId = b.batch$id.$t
    }
    ;
    Xk.inject = ["locale", "environmentModel", "ytThumbnails"];
    function Yk(a, b, c, e, f, g, k, l, n, q, s, r, u) {
        this.ia = f;
        this.rb = g;
        this.na = n;
        this.V = new Xd;
        this.h = [];
        this.M = {};
        this.aa = 1;
        this.O = 0;
        this.j = {};
        this.C = {};
        this.$a = 1;
        t: if (document.implementation && document.implementation.createDocument)
            g = document.implementation.createDocument("http://www.w3.org/2005/Atom", "feed", null);
        else {
            if ("undefined" != typeof ActiveXObject && (g = Vk())) {
                g.appendChild(g.createNode(1, "feed", "http://www.w3.org/2005/Atom"));
                break t
            }
            throw Error("Your browser does not support creating new documents");
        }
        this.g = new Wc(g);
        zi.call(this, a, b, c, e, f, k, l, s, r, u)
    }
    B(Yk, zi);
    d = Yk.prototype;
    d.Nn = function(a, b) {
        this.h = a;
        this.M = b
    }
    ;
    d.nw = function(a) {
        yb(this.j, a);
        a = 0;
        for (var b = this.h.length; a < b; ++a) {
            var c = this.h[a];
            if (this.j[c]) {
                var e = this.Ce(c);
                if (e = this.V.get(e))
                    e.k = this.j[c]
            }
        }
    }
    ;
    d.CE = function() {
        for (var a = [], b = 0, c = this.h.length; b < c; ++b)
            a.push(this.M[this.h[b]] || "x-unknown");
        return a
    }
    ;
    d.pl = function() {
        return this.h
    }
    ;
    d.Gc = function(a) {
        a = a || {};
        a.vpsid = this.id;
        return Yk.A.Gc.call(this, a)
    }
    ;
    d.ag = function() {
        return this.b.useStageGdata ? "sgd" : "gd"
    }
    ;
    d.$e = function() {
        return this.ia.useStageGdata ? "https://yt2009.truehosting.net/feeds/api" : "https://yt2009.truehosting.net/feeds/api"
    }
    ;
    d.bH = function(a, b, c, e) {
        var f = this.aa++
          , g = p
          , k = !1;
        this.rb.Ib(y(function(l) {
            k || (l && (b.access_token = l),
            g = this.DH(b, c, y(this.CH, this, e, a, f)))
        }, this));
        return function() {
            k = !0;
            g()
        }
    }
    ;
    d.CH = function(a, b, c, e) {
        if (this.O > c)
            this.Io(),
            a(!1);
        else {
            this.O = c;
            c = 0;
            for (var f = e.length; c < f; ++c) {
                var g;
                g = e[c];
                if ("string" == typeof g)
                    if ("undefined" != typeof DOMParser)
                        g = (new DOMParser).parseFromString(g, "application/xml");
                    else if ("undefined" != typeof ActiveXObject) {
                        var k = Vk();
                        k.loadXML(g);
                        g = k
                    } else
                        throw Error("Your browser does not support loading xml documents");
                g = Wk(g);
                this.o.parse(b, g)
            }
            this.fl();
            a(!0)
        }
    }
    ;
    d.Ve = function(a, b, c) {
        var e = {}
          , f = this.aH(e);
        a.serviceQuery = b.query;
        a.Ka = this.na;
        if (0 < f.length)
            return this.bH(a, b, f, y(function(b, c, f) {
                f && this.Bs(a, c, e);
                b(a)
            }, this, c || p, this.pl()));
        this.O = this.aa++;
        this.Bs(a, this.pl(), e);
        c && c(a);
        return p
    }
    ;
    d.Ce = function(a, b) {
        var c = this.$e() + "/videos/" + a
          , e = vb(this.l || {});
        b && yb(e, b);
        return yi(c, e)
    }
    ;
    d.aH = function(a) {
        for (var b = [], c = 0, e = this.h.length; c < e; ++c) {
            var f = this.h[c]
              , g = this.Ce(f)
              , k = this.V.get(g);
            k ? a[g] = k : b.push(f)
        }
        return b
    }
    ;
    d.DH = function(a, b, c) {
        for (var e = [], f = [], g = 0, k = b.length; g < k; ++g) {
            var l = b[g]
              , n = {};
            l in this.j ? e.push({
                video: l,
                jF: this.j[l]
            }) : f.push(l)
        }
        for (k = 0; k < f.length; )
            n = Math.min(k + 50, f.length),
            e.push({
                Or: f.slice(k, n)
            }),
            k += 50;
        var q = 0
          , s = []
          , f = y(function(a, b) {
            s[a] = b;
            ++q == e.length && (this.$k(),
            c(s))
        }, this);
        b = {
            v: a.v
        };
        k = {
            v: a.v
        };
        k.access_token = a.access_token;
        a = {
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "Content-Type": "application/atom+xml"
        };
        g = this.Gc(k);
        l = [];
        this.jl();
        for (var r = 0, k = e.length; r < k; ++r) {
            var n = e[r]
              , u = la(f, r);
            n.Or ? l.push(this.p.post(g, null, this.hF(g, n.Or), u, null, a)) : l.push(this.iF(n.video, b, n.jF, u))
        }
        return la(function(a) {
            for (var b = 0, c = a.length; b < c; ++b)
                a[b]()
        }, l)
    }
    ;
    d.iF = function(a, b, c, e) {
        a = this.Ce(a, b);
        b = c + ":" + a;
        var f = this.$a++, g;
        b in this.C ? (g = this.C[b],
        g.mi.push(f),
        g.Kd[f] = e) : (g = {
            mi: [f],
            Kd: {},
            cancel: p
        },
        g.Kd[f] = e,
        this.C[b] = g,
        e = y(function(a, b, c) {
            delete this.C[b];
            b = 0;
            for (var e = a.mi.length; b < e; ++b) {
                var f = a.mi[b];
                if (f in a.Kd)
                    a.Kd[f](c)
            }
            a.mi.length = 0;
            a.Kd = {}
        }, this, g, b),
        g.cancel = this.p.get(a, null, e, null, {
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "X-YouTube-VVT": c
        }));
        return y(function(a, b, c) {
            delete a.Kd[b];
            sb(a.Kd) && (delete this.C[c],
            a.cancel())
        }, this, g, f, b)
    }
    ;
    d.nD = function(a, b) {
        var c = new jg(this.id,b,"RQ");
        c.channel = new ig(this.id,b);
        c.videoId = a;
        c.b = "notAvailable";
        c.channel.videoId = a;
        return c
    }
    ;
    d.Bs = function(a, b, c) {
        if (0 < a.S.Y()) {
            for (var e = a.S.la(), f = 0, g = e.length; f < g; ++f) {
                var k = e[f]
                  , l = this.Ce(k.videoId);
                this.V.Ef(l, k);
                c[l] = k
            }
            a.S.clear()
        }
        f = 0;
        for (g = b.length; f < g; ++f)
            e = b[f],
            l = this.Ce(e),
            k = c[l] || this.nD(e, a.serviceQuery),
            e in this.M && (k.C = this.M[e]),
            e in this.j && (k.k = this.j[e]),
            a.S.push(k);
        a.title = "[[Queued Videos|Title above a list of videos that are queued up to be viewed.]]";
        a.bb = "icon-playlist"
    }
    ;
    d.createElement = function(a, b) {
        var c = this.g.Ar();
        return c.createElementNS(b || c.documentElement.namespaceURI, a)
    }
    ;
    d.gE = function(a) {
        var b = this.Ce(a)
          , c = this.createElement("entry")
          , e = this.createElement("id");
        this.g.append(e, b);
        var f = this.createElement("batch:id", "http://schemas.google.com/gdata/batch");
        this.g.append(f, a);
        a = this.createElement("link");
        Uk(a, {
            rel: "http://schemas.google.com/g/2005#batch",
            type: "application/atom+xml",
            href: b
        });
        this.g.appendChild(c, e);
        this.g.appendChild(c, f);
        this.g.appendChild(c, a);
        return c
    }
    ;
    d.hF = function(a, b) {
        var c = this.g.Ar().documentElement;
        xc(c);
        var e = this.createElement("id");
        this.g.append(e, a);
        var f = this.createElement("batch:operation", "http://schemas.google.com/gdata/batch");
        Uk(f, {
            type: "query"
        });
        this.g.appendChild(c, e);
        this.g.appendChild(c, f);
        e = 0;
        for (f = b.length; e < f; ++e)
            this.g.appendChild(c, this.gE(b[e]));
        if ("undefined" != typeof XMLSerializer)
            c = (new XMLSerializer).serializeToString(c);
        else if (c = c.xml,
        !c)
            throw Error("Your browser does not support serializing XML documents");
        return '<?xml version="1.0" encoding="UTF-8"?>' + c
    }
    ;
    function Zk(a, b, c, e, f, g, k, l, n, q, s, r, u, O, X) {
        K.call(this);
        this.qb = O;
        this.ac = a;
        this.ia = b;
        this.Wa = c;
        this.O = e;
        this.b = f;
        this.Ja = g;
        this.pa = k;
        this.Aa = n;
        this.F = l;
        this.za = r;
        this.N = q;
        this.w = s;
        this.na = u;
        this.l = X;
        this.h = this.Pa = this.p = null;
        this.j = "";
        this.o = null;
        this.M = new ei;
        this.Ia = !1;
        this.C = new ei;
        this.I = this.Ha = "";
        this.k = -1;
        this.aa = 0;
        this.ga = this.Va = null;
        this.Z = this.w.hf ? this.Ja : this.b;
        this.H = this.g = this.V = null;
        this.Oa = this.w.initReversePairingCode;
        this.G = p;
        if (a = a.bc("start_watch") || a.bc("start_dial"))
            this.G = y(a.tick, a);
        this.au();
        this.du();
        this.w.g && this.Ja.cu(y(function() {
            this.H = new Ck(this,new Ak);
            this.H.Gi(this.Gg() || "");
            this.bu();
            this.ym(this.o)
        }, this));
        this.Fi()
    }
    B(Zk, K);
    d = Zk.prototype;
    d.au = function() {
        var a = this.O.get("mdx-device-id");
        a || (a = Sk(),
        this.O.Da("mdx-device-id", a));
        this.Ha = a;
        a = new Nh({
            id: this.Ha,
            name: this.w.w,
            type: "LOUNGE_SCREEN",
            app: "lb-v4"
        });
        this.g = new qk(this.O.b,this,this,a,"");
        if (a = this.O.get("mdx-paired-devices", 31536E3))
            this.C.ja(a.map(function(a) {
                return new Nh(a)
            })),
            this.uh(null)
    }
    ;
    d.du = function() {
        this.na.B("mdxClearVideo", y(this.qw, this));
        this.na.B("mdxPlaylistChange", y(this.ww, this));
        this.b.B("subtitlesModuleGeneration:changed", y(this.uw, this));
        this.b.B("subtitlesTrack:changed", y(this.vw, this));
        this.b.B("state:changed", y(this.fh, this));
        this.b.B("adPlaying:changed", y(this.ow, this));
        this.b.B("video:changed", y(this.pw, this));
        this.Z.B("volumeData:changed", y(function(a) {
            this.g.Fm(a.volume, a.muted)
        }, this));
        this.B("currentVideoId:changed", y(this.g.Qn, this.g));
        this.B("currentPlayerState:changed", y(this.g.yw, this.g));
        this.B("remote:connected", y(this.rw, this));
        this.B("remote:disconnected", y(this.sw, this));
        this.B("remote:status", y(this.tw, this));
        this.pa.B("currentTime:changed", y(function() {
            var a = this.ce();
            2 <= Math.abs(this.aa - a) && this.fh(this.k);
            this.Fi();
            this.aa = a
        }, this));
        this.l.isSupported() && this.l.setSeekCallback(y(this.xw, this));
        this.Aa.B("state:changed", y(this.zw, this))
    }
    ;
    d.qa = function() {
        this.Aa.Ib(y(function(a) {
            this.EI(a)
        }, this))
    }
    ;
    d.bu = function() {
        this.Z.B("volumeData:changed", y(function() {
            this.H.rs()
        }, this));
        this.B("currentPlayerState:changed", y(this.H.rs, this.H));
        this.B("currentVideoModel:changed", y(this.ym, this))
    }
    ;
    d.eD = function() {
        this.g.Qn();
        this.g.iE()
    }
    ;
    d.EI = function(a) {
        this.g.dl(a);
        if (!this.Gg() && (a = this.Oa,
        this.Oa = "",
        a || this.g.oj() || this.C.Y())) {
            this.Cq(a);
            return
        }
        this.Sj()
    }
    ;
    d.Cj = function(a) {
        this.g.eE(y(function(b) {
            a && a(b);
            this.Sj()
        }, this))
    }
    ;
    d.Sj = function() {
        var a = this.Gg() || "";
        this.w.SK && this.H && this.H.Gi(a);
        if (this.w.additionalDataUrlForDial) {
            var b = decodeURIComponent(this.w.additionalDataUrlForDial)
              , c = new Di(b);
            "localhost" != c.$c() ? console.warn("Given additionalDataUrl with non-localhost domain: " + c) : a ? this.hr(c, a) : this.g.mk(y(function(a) {
                this.hr(c, a ? a.Ab : "")
            }, this))
        }
    }
    ;
    d.hr = function(a, b) {
        this.qb.post(a.toString(), null, {
            screenId: b
        });
        a.wa("screenId", b);
        this.qb.get(a.toString())
    }
    ;
    d.Cq = function(a) {
        this.Cj(y(function() {
            a && this.g.fE(a, p)
        }, this))
    }
    ;
    d.ym = function(a) {
        a ? this.H.Ts({
            content_id: a.videoId,
            title: a.title,
            duration: a.duration,
            thumbnail_url: a.imageUrl
        }) : this.H.Ts()
    }
    ;
    d.xw = function(a) {
        this.mj(a / 1E3)
    }
    ;
    d.RF = function() {
        this.O.remove("mdx-paired-devices");
        this.O.flush();
        this.C.clear();
        this.M.clear();
        this.g.sy();
        this.b.Ch(this.g.Bh());
        this.g.oj() ? this.Cj() : this.Sj()
    }
    ;
    d.lj = function() {
        this.uj();
        this.b.Lb();
        this.re(this.xb()) && this.qe()
    }
    ;
    d.on = function() {
        this.b.Lb();
        this.b.zc();
        this.qe()
    }
    ;
    d.fn = function() {
        this.b.Lb();
        this.b.sk();
        this.re("")
    }
    ;
    d.mj = function(a) {
        this.b.Lb();
        var b = this.Jf();
        1081 != b && (0 == b || -1 == b ? this.re(this.xb(), a) && this.qe() : (this.b.uf(a, !0),
        this.qe()))
    }
    ;
    d.Cy = function(a, b, c) {
        this.uj();
        this.b.Lb();
        this.re(a, c) && this.qe()
    }
    ;
    d.pn = function(a) {
        this.b.Lb();
        this.Z.ai(a)
    }
    ;
    d.Uj = function() {
        return this.Z.Ke()
    }
    ;
    d.dh = function() {
        return this.Z.bg()
    }
    ;
    d.nn = function() {
        this.b.Lb();
        this.Z.$h()
    }
    ;
    d.qn = function() {
        this.b.Lb();
        this.Z.bi()
    }
    ;
    d.By = function(a, b) {
        this.b.Lb();
        (b.name || b.languageCode) && this.b.Rn() ? (this.ga = b,
        this.ga.videoId = a) : (this.ga = null,
        this.b.ek())
    }
    ;
    d.Vo = function(a) {
        this.w.g && (a ? this.b.Xj(a) : this.b.Qy())
    }
    ;
    d.jC = function() {
        var a = null;
        this.w.g && (a = this.b.gn(),
        sb(a) && (a = null));
        return a
    }
    ;
    d.rn = function() {
        var a = vb(this.b.subtitlesTrack);
        return !sb(a) && a || null
    }
    ;
    d.ce = function() {
        return this.j != this.I || this.b.isPlayingAd ? 0 : 1 == this.k || 2 == this.k || 3 == this.k || 0 == this.k ? this.pa.currentTime : 0
    }
    ;
    d.Jf = function() {
        return this.b.isPlayingAd ? 1081 : this.j != this.I ? 3 : -1E3 == this.k ? -1E3 : this.k
    }
    ;
    d.xb = function() {
        return this.j || ""
    }
    ;
    d.uy = function(a, b) {
        this.g.tE(a, b)
    }
    ;
    d.Gg = function() {
        return this.g.sE() || ""
    }
    ;
    d.Iy = function() {
        this.g.uE()
    }
    ;
    d.Xd = function(a, b) {
        this.G("r_s_vid");
        return a != this.j ? (this.k = (this.j = a) ? 3 : -1,
        this.aa = 0,
        this.ga = null,
        b || this.T("currentVideoId:changed", this.j),
        this.Nc(this.Mc()),
        !0) : !1
    }
    ;
    d.Hn = function(a, b) {
        this.G("r_f");
        this.p && (this.p.model.serviceQuery = "dial");
        this.dj(y(this.g.Oo, this.g), [a], ["fling"], {}, 0, b, !0, !0)
    }
    ;
    d.dj = function(a, b, c, e, f, g, k, l) {
        this.G("r_s_plylst");
        this.b.Lb();
        this.V && (this.V(),
        this.V = null);
        if (0 == b.length)
            this.fn(),
            this.F.Nn([], {}),
            this.p && this.p.load(p),
            this.h = null,
            a([]);
        else {
            this.p || (this.p = Hk(this.F, "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]", "icon-remote", this.w.initReversePairingCode || l ? "dial" : "mdx"));
            var n = ""
              , q = !1;
            this.h && this.h === this.p || (this.h = this.p,
            q = !0);
            var s = !1;
            if (void 0 === f) {
                var r = this.xb();
                f = r ? b.indexOf(r) : -1;
                q && r && this.N.qf(this.N.currentVideo, this.h)
            } else
                0 > f ? (this.I = "",
                this.re("")) : (this.uj(),
                n = b[f],
                s = this.Xd(n, !0) || !!k);
            for (var q = {}, r = 0, u = c.length; r < u; ++r)
                q[b[r]] = c[r];
            0 <= f && this.p.ub(f);
            e && this.w.enableVideoVerificationTokens && this.F.nw(e);
            this.F.Nn(b, q);
            s && (this.T("currentVideoId:changed", this.j),
            this.Nc(this.Mc()));
            this.p.load(y(function() {
                n && n == this.j && (this.Nc(this.Mc()),
                this.re(n, g, k, l) && this.qe());
                a(this.Lg())
            }, this))
        }
    }
    ;
    d.Eh = function(a) {
        if (this.h)
            if (this.h instanceof Nk && 0 == this.h.numLoadedPages)
                for (var b = this.h.k, c = 0, e = b.length; c < e && !a(b[c]); ++c)
                    ;
            else
                for (b = this.h.model.S.la(),
                c = 0,
                e = b.length; c < e && !a(b[c]); ++c)
                    ;
    }
    ;
    d.nj = function() {
        var a = [];
        this.h && (this.h.service && this.h.service.id == this.F.id ? a = this.F.pl() : this.Eh(function(b) {
            a.push(b.videoId)
        }));
        return a
    }
    ;
    d.yz = function() {
        var a = [];
        this.h && (this.h.service && this.h.service.id == this.F.id ? a = this.F.CE() : this.Eh(function(b) {
            b.C ? a.push(b.C) : a.push("lb-" + b.Ka.toLowerCase())
        }));
        return a
    }
    ;
    d.zy = function(a) {
        this.h ? a(this.Lg()) : a([])
    }
    ;
    d.Eq = function() {
        var a = "unknown";
        this.o && (this.o.b || (this.o.b = "notAvailable"),
        a = this.o.b);
        return new pk(this.j,a,"PLAYER_ERROR")
    }
    ;
    d.ow = function() {
        this.fh(this.k)
    }
    ;
    d.fh = function(a) {
        this.I != this.j || !this.j || -1E3 == this.k && -1 == a || (this.aa = this.ce(),
        this.k = a,
        this.za.clearTimeout(this.gb),
        0 == a ? this.vr() : this.gb = this.za.setTimeout(y(this.vr, this), 50))
    }
    ;
    d.vr = function() {
        this.gb = 0;
        if (this.I == this.j) {
            var a = this.Jf();
            1 == a && this.o && this.o.b && (this.o.b = null,
            this.g.Im(this.Lg()));
            this.Fi();
            this.T("currentPlayerState:changed", a)
        }
    }
    ;
    d.pw = function() {
        var a = this.N.currentVideo;
        this.aa = (this.I = a = a ? a.videoId : "") ? this.ce() : 0;
        this.Xd(a) || (this.Nc(this.Mc()),
        this.fh(this.k))
    }
    ;
    d.Fi = function() {
        if (this.l.isSupported()) {
            var a = this.o
              , b = 0
              , c = 2;
            1 == this.k ? (b = 1,
            c = 3) : 2 == this.k ? (b = 0,
            c = 4) : -1 == this.k && (b = 0,
            c = 1);
            -1 != this.k || this.o || (c = 2);
            2 == c && (a = null);
            var e = "browse" === this.ia.mode();
            this.l.status = c;
            this.l.appMediaId = a && a.videoId || "";
            this.l.videoTitle = a && a.title || "";
            this.l.playbackRate = b;
            this.l.minSeekTime = 0;
            this.l.mediaStartTime = 0;
            this.l.mediaEndTime = a ? 1E3 * this.pa.duration : 0;
            this.l.maxSeekTime = e ? 0 : this.l.mediaEndTime;
            this.l.playbackPosition = a ? 1E3 * this.pa.currentTime : 0;
            this.l.sendMediaInfo();
            this.uk()
        }
    }
    ;
    d.uk = function() {
        if (this.l.isSupported()) {
            var a = this.b.isPlaying
              , b = this.b.isPlayingAd
              , c = "browse" === this.ia.mode()
              , e = {};
            e.PLAY = c ? !1 : !a;
            e.PAUSE = c ? !1 : a;
            e.REWIND = c ? !1 : !b;
            e.FASTFORWARD = c ? !1 : !b;
            e.PREVIOUS = c ? !1 : !b;
            e.NEXT = c ? !1 : !b;
            e.BACK = !0;
            this.l.updateButtonState(e)
        }
    }
    ;
    d.qw = function() {
        this.I = "";
        this.Xd("")
    }
    ;
    d.ww = function(a) {
        this.hp(a.detail)
    }
    ;
    d.hp = function(a) {
        var b = !1;
        if (!this.h || !this.h.equals(a)) {
            var c = "";
            c = a && a != this.p ? (b = a.Hb()) ? b.videoId || "" : "" : this.j;
            b = this.Xd(c, !0);
            this.I = c;
            this.aa = 0;
            this.V && (this.V(),
            this.V = null);
            a instanceof Jk && (this.V = a.B("numLoadedPages:changed", y(function() {
                this.hp(a)
            }, this)))
        }
        c = !(!a.service || a.service.id != this.F.id);
        this.h = a;
        var e = this.Lg();
        c ? (b && this.T("currentVideoId:changed", this.j),
        e && e.length && this.g.Im(e)) : this.g.Oo(e);
        this.Nc(this.Mc())
    }
    ;
    d.zw = function(a, b) {
        if (a) {
            var c = !1;
            this.Aa.Ib(y(function(a) {
                c || (c = !0,
                this.g.dl(a),
                b || this.g.ur("default", a))
            }, this))
        } else
            this.g.dl(""),
            b && this.g.ur("", "")
    }
    ;
    d.xj = function() {
        this.Pa || (this.Pa = this.Wa.zI().application);
        return this.Pa
    }
    ;
    d.Gm = function(a, b, c, e) {
        this.G("r_rq_ply");
        e && a && this.b.uB();
        this.na.L("request-playback", {
            data: a,
            nc: b,
            startTime: c
        })
    }
    ;
    d.BC = function(a, b) {
        this.G("r_a_ply");
        var c = this.N.qx();
        c && c.Ba && c.Ba != this.h.service.id && this.N.qf(this.N.currentVideo, this.h);
        c = this.b.state;
        if ((0 == c || -1 == c || 2 == c) && this.xj().Zn()) {
            this.N.currentVideo = null;
            this.ia.state("browse", {});
            this.na.T("request-close-dialog");
            var e = this.Mc()
              , f = this.h;
            this.za.lf(y(function() {
                e.videoId == this.j && this.Gm(e, f, a, b)
            }, this)).od(250);
            return !0
        }
        if (0 == c)
            return this.b.rx(a || 0),
            !1;
        this.b.Oc();
        void 0 === a || b || this.b.uf(a, !0);
        return !1
    }
    ;
    d.Oq = function(a, b, c, e, f) {
        this.G("r_m_ply");
        e && f && !this.g.oj() && a.g && !a.p && this.w.enableVideoVerificationTokens && !a.k || (this.Gm(a, b, c, e),
        this.Wa.ic())
    }
    ;
    d.re = function(a, b, c, e) {
        this.G("r_p_f");
        var f = this.xj();
        if (!a)
            return this.Xd("", !0),
            this.T("currentVideoId:changed", ""),
            this.Nc(null),
            f.va() && (this.ia.state("browse", {}),
            this.na.T("request-close-dialog"),
            this.Wa.ic()),
            !1;
        if (!this.h)
            return !1;
        this.Xd(a);
        if ((f.va() || f.Zn()) && this.N.currentVideo && this.N.currentVideo.videoId == a)
            return !this.BC(b, c);
        f = this.Mc();
        if (!f) {
            var g = this.h;
            this.p.load(y(function() {
                if (a == this.j && g == this.h) {
                    var f = this.Mc();
                    this.Nc(f);
                    f ? this.Oq(f, g, b, c, e) : console.warn("MDx ensurePlayerFocus failed to load video for playback request: " + a + ", time=" + b)
                }
            }, this));
            return !1
        }
        this.Nc(f);
        this.Oq(f, this.h, b, c, e);
        return !1
    }
    ;
    d.Lg = function() {
        var a = [];
        this.Eh(function(b) {
            b.b && "limitedSyndication" != b.b && a.push(new pk(b.videoId,b.b,"NOT_PLAYABLE"))
        });
        return a
    }
    ;
    d.Mc = function() {
        var a = null
          , b = this.j;
        this.Eh(function(c) {
            if (c.videoId == b)
                return a = c,
                !0
        });
        return a
    }
    ;
    d.Nc = function(a) {
        this.G("r_u_v");
        this.o && a && this.o.videoId == a.videoId || !this.o && !a || (this.o = a,
        this.T("currentVideoModel:changed", a))
    }
    ;
    d.qe = function() {
        var a = this.xj();
        !a.va() || a.w && !a.ae() || this.ia.mode("transport")
    }
    ;
    d.uh = function(a) {
        if (a) {
            var b = new Nh(a.qs());
            a = b.id.indexOf("#");
            0 < a && (b.id = b.id.substr(0, a));
            var c = !1;
            a = this.C.la();
            this.C.ja(a.map(function(a) {
                return a.id == b.id ? (c = !0,
                b) : a
            }));
            c || (this.C.unshift(b),
            this.O.Da("mdx-paired-devices", this.C.la().map(function(a) {
                return a.qs()
            }), 31536E3),
            this.O.flush())
        }
        this.C.IG(function(a, b) {
            var c = (a.Cd ? 0 : 1) - (b.Cd ? 0 : 1);
            if (0 != c)
                return c;
            var c = (new Oh(a)).displayString
              , k = (new Oh(b)).displayString;
            return ua(c, k)
        })
    }
    ;
    d.tw = function(a) {
        for (var b = this.C.la(), c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            f.Cd = !1
        }
        this.M.ja(a);
        a = this.M.la();
        c = 0;
        for (e = a.length; c < e; ++c)
            f = a[c],
            f.Cd = !0,
            this.uh(f);
        this.b.Ch(this.g.Bh());
        this.T("pairing:changed")
    }
    ;
    d.rw = function(a) {
        var b = this.M.la().filter(function(b) {
            return b.id != a.id
        });
        a.Cd = !0;
        b.unshift(a);
        this.M.ja(b);
        this.uh(a);
        this.b.Ch(this.g.Bh());
        this.T("pairing:changed")
    }
    ;
    d.sw = function(a) {
        this.M.ja(this.M.la().filter(function(b) {
            return b.id != a.id
        }));
        for (var b = this.C.la(), c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            f.id == a.id && (f.Cd = !1)
        }
        this.uh(null);
        this.b.Ch(this.g.Bh());
        this.T("pairing:changed")
    }
    ;
    d.vw = function() {
        if (this.j && this.j == this.I) {
            var a = this.rn();
            !a || a.name || a.languageCode || (a = null);
            this.fo(this.Va, a) || (this.Va = a,
            this.g.tn(this.j, a))
        }
    }
    ;
    d.fo = function(a, b) {
        return a && b ? a.id && b.id && a.id == b.id ? !0 : (!a.type || !b.type || a.type === b.type) && (!a.format || !b.format || a.format === b.format) && (!a.name || !b.name || a.name === b.name) && a.languageCode === b.languageCode : !a == !b
    }
    ;
    d.uw = function() {
        var a = this.ga;
        this.ga = null;
        if (a && a.videoId && a.videoId == this.xb()) {
            for (var b = this.b.ao(), c = !1, e = 0, f = b.length; e < f; ++e)
                if (this.fo(b[e], a)) {
                    this.b.rp(b[e]);
                    c = !0;
                    break
                }
            c || this.b.ek()
        }
    }
    ;
    d.Hg = function() {
        return this.M
    }
    ;
    d.Ig = function() {
        return this.C
    }
    ;
    d.uj = function() {
        this.Ia || (this.Ia = !0,
        this.ac.pd("start_dial", "rply_rqd"))
    }
    ;
    Zk.inject = "csiService locationService angularHelper localStorage playerFacade eurekaService progressModel remoteQueueService authService watchModel environmentModel timeService rootDispatcher ytHttp remoteApi".split(" ");
    var $k = angular.module("yt.tv.localization", ["ng"]);
    $k.service("locale", ag);
    $k.service("messages", Zf);
    $k.service("time", $f);
    $k.value("applicationPath", "");
    $k.config(["$provide", "$httpProvider", function(a, b) {
        a.decorator("$interpolate", ["$delegate", "locale", function(a, e) {
            b.defaults.transformResponse.push(function(a) {
                return angular.isString(a) ? e.P(a) : a
            });
            var f = la($k.PH, e, a);
            f.startSymbol = a.startSymbol;
            f.endSymbol = a.endSymbol;
            return f
        }
        ])
    }
    ]);
    $k.PH = function(a, b, c, e) {
        var f = a.P(c)
          , g = b(f, f == c && e);
        return g ? function(b) {
            b = g(b);
            return a.P(b)
        }
        : null
    }
    ;
    function al(a, b, c, e) {
        this.name = "pair";
        L.call(this);
        this.j = b;
        this.k = a;
        this.H = this.g = 0;
        this.C = !0;
        this.context = "pair";
        this.h = !1;
        this.displayPairingCode = this.F = e.P("[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]");
        this.qrCodeImageUrl = "";
        this.G = this.o = this.w = this.l = null;
        this.connectedDevices = new ei;
        this.j.Hg().B("items:changed", y(this.mn, this))
    }
    B(al, L);
    d = al.prototype;
    d.Ya = function() {
        al.A.Ya.call(this);
        this.w = this.K.querySelector(".dial-upsell");
        this.o = this.K.querySelector(".connection-steps");
        this.G = this.K.querySelector(".qr-code-wrapper");
        this.l = this.K.querySelector(".connected-list")
    }
    ;
    d.ready = function() {
        al.A.ready.call(this);
        this.mn()
    }
    ;
    d.ea = function() {
        al.A.ea.call(this);
        0 != this.g && (this.k.clearTimeout(this.g),
        this.g = 0)
    }
    ;
    d.W = function() {
        this.H = 0;
        this.j.Cj(y(function() {
            this.Lo()
        }, this))
    }
    ;
    d.U = function(a) {
        al.A.U.call(this, a);
        this.Qb(this.w, this.h);
        this.Qb(this.o, !this.h);
        this.Qb(this.G, !this.h)
    }
    ;
    d.ty = function(a) {
        return a.match(/.../g).join(" ")
    }
    ;
    d.Lo = function() {
        this.displayPairingCode = this.F;
        this.qrCodeImageUrl = "";
        this.U();
        this.g && (this.k.clearTimeout(this.g),
        this.g = 0);
        if (this.C && 4 < ++this.H)
            this.L("request-close-dialog");
        else if (!this.h) {
            var a = this.context;
            0 < this.j.Ig().Y() && (a += "-ytr");
            this.g = this.k.setTimeout(y(this.Lo, this), 3E5);
            this.j.uy(a, y(function(a) {
                this.displayPairingCode = this.ty(a);
                this.qrCodeImageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=http%3A%2F%2Fm.youtube.com%2Fpair%3FpairingCode%3D" + a;
                this.U()
            }, this))
        }
    }
    ;
    d.mn = function() {
        var a = this.j.Hg().la();
        this.Qb(this.l, 0 < a.length);
        this.connectedDevices.clear();
        for (var b = 0, c = a.length; b < c; ++b)
            this.connectedDevices.push(new Oh(a[b]));
        this.U()
    }
    ;
    al.inject = ["timeService", "remoteService", "environmentModel", "locale"];
    function bl(a, b, c) {
        Pk.call(this);
        this.h = a;
        this.g = b;
        this.j = c;
        this.b = !1
    }
    B(bl, Pk);
    bl.prototype.load = function() {
        this.clear();
        this.b = !0;
        var a = Ok(this.h, this.g.eh().model.title, "", this.g.currentVideo.videoId);
        a.Wb = "postPlayTile";
        var b = this.g.Vi();
        b && a.p(b);
        a.C(3);
        this.rows.push(a)
    }
    ;
    bl.inject = ["relatedVideosService", "watchModel", "environmentModel"];
    function Z(a, b, c) {
        this.b = a;
        this.I = b;
        this.C = null;
        this.aa = c || null
    }
    Z.prototype.Z = function(a) {
        return a ? (a = this.b.fq(a),
        !!a && 100 * Math.random() < a) : !0
    }
    ;
    Z.prototype.Mk = function() {
        null === this.C && (this.C = this.Z(this.aa));
        return this.C
    }
    ;
    Z.prototype.h = function(a, b, c, e) {
        this.Mk() && this.I.yH(a, b, c, e)
    }
    ;
    function cl(a, b, c) {
        Z.call(this, a, b, "post_play_sw");
        this.j = c
    }
    B(cl, Z);
    cl.prototype.l = function() {
        this.g = this.j.hc()
    }
    ;
    cl.prototype.k = function(a, b, c) {
        this.g && (this.h("/gen_204", this.o(a, b, c)),
        this.g = null)
    }
    ;
    cl.prototype.o = function(a, b, c) {
        var e = dl
          , f = {
            a: "tv_postplay"
        };
        f[e.lx] = a;
        f[e.jx] = b;
        c && (f[e.kx] = c);
        f.t = ((this.j.hc() - this.g) / 1E3).toFixed(1);
        f.e = this.b.tf();
        z(f, this.b.tc());
        return f
    }
    ;
    var dl = {
        jx: "v",
        kx: "next",
        lx: "outcome"
    };
    cl.inject = ["environmentModel", "privateDataService", "timeService"];
    function el(a, b) {
        L.call(this);
        this.o = a;
        this.w = -1;
        this.$ = b;
        this.$.Gb(this)
    }
    B(el, L);
    d = el.prototype;
    d.Ya = function() {
        el.A.Ya.call(this);
        this.B("keyup", y(this.FG, this))
    }
    ;
    d.Fa = function(a) {
        el.A.Fa.call(this, a);
        this.isHidden = !this.model
    }
    ;
    d.FG = function(a) {
        13 === a.keyCode && (J(a),
        this.model && (this.isActive || a.b && ("mouseup" === a.b.type || "touchend" === a.b.type)) && this.Hk())
    }
    ;
    d.Hk = function() {
        this.L("play-sound", "cross-enter");
        this.L(this.model.Ng, {
            data: this.model
        })
    }
    ;
    d.nl = function(a, b) {
        var c = !1;
        if (this.$.isSupported()) {
            this.$.Hf();
            this.w = b;
            var e = this.getSpeechPhrase();
            e && a && (this.$.Ga(e, y(this.Hk, this)),
            c = !0);
            this.U()
        }
        return c
    }
    ;
    el.prototype.getSpeechPhrase = function() {
        return this.model ? this.model.getTitle ? this.model.getTitle() : this.model.title : ""
    }
    ;
    el.inject = ["locale", "voiceHelper"];
    function fl(a, b, c, e, f, g, k, l, n) {
        el.call(this, a, b);
        this.l = c;
        this.g = e;
        this.F = f;
        this.H = g;
        this.C = k;
        this.V = l;
        this.O = n;
        this.countdown = this.N = this.G = null;
        this.k = -1;
        this.h = !1;
        this.j = y(this.mf, this);
        this.Ww()
    }
    B(fl, el);
    d = fl.prototype;
    d.Ya = function() {
        fl.A.Ya.call(this);
        this.G = this.K.querySelector(".default-title");
        this.N = this.K.querySelector(".next-up-title");
        this.B("keydown", y(this.yF, this));
        this.B("request-playback", y(this.Z, this))
    }
    ;
    d.R = function() {
        fl.A.R.call(this);
        this.C.removeEventListener("mousemove", this.j, !1);
        this.l.Oh(this.k)
    }
    ;
    d.Fa = function(a) {
        fl.A.Fa.call(this, a);
        this.fv() && (this.g.b = !1,
        this.mf(),
        this.countdown = this.O.hm,
        this.k = this.l.Oi(y(this.gv, this), 1E3),
        this.h = !0);
        this.U(!0)
    }
    ;
    d.fv = function() {
        var a = this.g.fc();
        return !!a && !!this.model && a.fa(0) == this.model && a.k.length && this.g.b
    }
    ;
    d.nl = function(a, b) {
        this.children[0].nl(a, b)
    }
    ;
    d.Ww = function() {
        this.C.addEventListener("mousemove", this.j, !1);
        this.ca(this.V, "engage-change", this.j)
    }
    ;
    d.yF = function(a) {
        this.mf();
        switch (a.keyCode) {
        case 8:
        case 27:
            this.H.k("back", this.F.currentVideo.videoId)
        }
    }
    ;
    d.mf = function() {
        this.h && (this.h = !1,
        this.l.Oh(this.k),
        this.U())
    }
    ;
    d.gv = function() {
        this.model ? (--this.countdown,
        0 === this.countdown && (this.mf(),
        this.L("request-playback", {
            data: this.model,
            xd: !0
        })),
        this.U()) : this.mf()
    }
    ;
    fl.prototype.getRowTitle = function() {
        var a = this.g.fc();
        return this.o.P(a && a.model.title || "")
    }
    ;
    fl.prototype.Z = function() {
        var a = this.model, b;
        0 === this.countdown ? b = "timeout" : (b = Ha(this.g.fc().model.S.la(), a),
        b = eg("play{n}", {
            n: b + 1
        }));
        this.H.k(b, this.F.currentVideo.videoId, a.videoId)
    }
    ;
    fl.prototype.getStyles = function() {
        var a = fl.A.getStyles.call(this);
        this.h && (a += " countdown-active");
        this.g.fc().k.length || (a += " last-video");
        return a
    }
    ;
    fl.inject = "locale voiceHelper timeService postPlayModel watchModel postPlayReportingService document rootDispatcher environmentModel".split(" ");
    function gl(a, b) {
        L.call(this);
        this.g = a;
        this.h = b;
        this.j = this.k = 0;
        this.l = !1
    }
    B(gl, L);
    gl.prototype.enable = function() {
        this.j = this.g.percentageLoaded;
        this.k = this.g.percentagePlayed;
        this.Pp(this.h.isPlayingAd);
        this.aA()
    }
    ;
    gl.prototype.disable = function() {
        this.xc()
    }
    ;
    gl.prototype.getLoadedWidth = function() {
        return dg(this.j)
    }
    ;
    gl.prototype.getPlayedWidth = function() {
        return dg(this.k)
    }
    ;
    gl.prototype.getRootClassName = function() {
        return this.l ? "ad-active" : ""
    }
    ;
    d = gl.prototype;
    d.aA = function() {
        this.xc();
        this.ca(this.h, "isPlayingAd:changed", y(this.Pp, this));
        this.ca(this.g, "percentageLoaded:changed", y(this.CC, this));
        this.ca(this.g, "percentagePlayed:changed", y(this.DC, this));
        this.ca(this, "keyup", y(this.EC, this))
    }
    ;
    d.CC = function(a) {
        this.j = a;
        this.U()
    }
    ;
    d.DC = function(a) {
        this.k = a;
        this.U()
    }
    ;
    d.Pp = function(a) {
        this.l = a;
        this.U()
    }
    ;
    d.EC = function(a) {
        J(a);
        if (!this.h.isPlayingAd) {
            a = a.b;
            var b = this.K
              , c = 0
              , e = 0;
            a instanceof MouseEvent ? (c = b.offsetWidth,
            e = a.offsetX) : (b = b.getBoundingClientRect(),
            c = b.width,
            e = a.changedTouches[0].pageX - b.left);
            this.h.uf(e / c * this.g.duration, !0)
        }
    }
    ;
    gl.inject = ["progressModel", "playerFacade"];
    function hl() {
        L.call(this);
        this.model = null;
        this.qrCodeImageUrl = this.displayUrl = ""
    }
    B(hl, L);
    hl.prototype.Fa = function(a) {
        hl.A.Fa.call(this, a);
        this.displayUrl = this.model.baseUrl;
        this.qrCodeImageUrl = this.g()
    }
    ;
    hl.prototype.g = function() {
        return "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=" + encodeURIComponent(this.model.qrCodeUrl || this.model.baseUrl)
    }
    ;
    function il(a, b) {
        Kh.call(this, a, b)
    }
    B(il, Kh);
    il.prototype.Fa = function(a) {
        il.A.Fa.call(this, a);
        this.model && this.model.subtitle && (this.model.subtitle = this.g.P(this.model.subtitle))
    }
    ;
    il.inject = ["locale", "voiceHelper"];
    function jl(a, b, c, e, f, g, k, l, n, q, s) {
        s = {
            client: "youtube",
            ds: "yt",
            hl: s.b
        };
        z(s, q);
        zi.call(this, a, b, c, e, f, g, k, l, n, s)
    }
    B(jl, zi);
    jl.prototype.load = function(a, b) {
        var c = []
          , e = {};
        z(e, this.l);
        a && z(e, this.SF("query", "q", a));
        this.jl();
        var f = this.Gc()
          , e = this.p.jsonp(f, e, y(function(a) {
            this.$k();
            a = a[1];
            for (var e = 0, f = a.length; e < f; ++e)
                c.push(a[e][0]);
            this.fl();
            b && b(c)
        }, this));
        return new ri(c,e)
    }
    ;
    jl.prototype.ag = function() {
        return "c1"
    }
    ;
    jl.prototype.$e = function() {
        return "//clients1.google.com"
    }
    ;
    function kl(a) {
        K.call(this);
        this.g = a;
        this.suggestions = new yh;
        this.b = null
    }
    B(kl, K);
    kl.prototype.update = function(a) {
        this.b && (this.b(),
        this.b = null);
        a ? this.b = this.g.load({
            query: a
        }, y(function(a) {
            this.suggestions.clear();
            this.suggestions.push(a)
        }, this)).cancel : this.suggestions.clear()
    }
    ;
    kl.inject = ["suggestionService"];
    function ll(a) {
        L.call(this);
        this.model = a;
        this.g = null
    }
    B(ll, L);
    d = ll.prototype;
    d.Ya = function() {
        this.B("keyup", y(this.pH, this))
    }
    ;
    d.ready = function() {
        this.g = this.Ta(0)
    }
    ;
    d.W = function() {
        ll.A.W.call(this);
        this.g.W()
    }
    ;
    d.ea = function() {
        this.g.ea();
        ll.A.ea.call(this)
    }
    ;
    d.update = function(a) {
        this.model.update(a)
    }
    ;
    d.pH = function(a) {
        13 == a.keyCode && 0 <= this.model.suggestions.Db() && (a.stopPropagation(),
        this.L("suggest", this.model.suggestions.Hb()))
    }
    ;
    ll.inject = ["suggestionsModel"];
    function ml(a) {
        Bh.call(this);
        this.g = this.j = a
    }
    B(ml, Bh);
    d = ml.prototype;
    d.Fc = function(a) {
        this.g = this.j > this.length ? this.j : this.length;
        ml.A.Fc.call(this, a)
    }
    ;
    d.lb = function(a) {
        a %= this.g;
        0 > a && (a += this.g);
        ml.A.lb.call(this, a)
    }
    ;
    d.ii = function() {
        return !0
    }
    ;
    d.fa = function(a) {
        return this.b[(this.h + a) % this.g]
    }
    ;
    d.Y = function() {
        return this.j
    }
    ;
    function nl() {
        L.call(this);
        this.model = null;
        this.h = !1;
        this.j = null;
        this.collection = new ml(12);
        this.collection.lb(-2)
    }
    B(nl, L);
    nl.prototype.Fa = function(a) {
        nl.A.Fa.call(this, a);
        a = Math.min(this.model.length, 12);
        1 < this.model.length && this.collection.Y() != a && (this.collection = new ml(a),
        this.U(!0));
        this.collection.ja(this.model)
    }
    ;
    nl.prototype.select = function(a) {
        this.collection.lb(a + -2)
    }
    ;
    nl.prototype.g = function(a) {
        this.h = a;
        this.U()
    }
    ;
    nl.prototype.getStyles = function() {
        var a = nl.A.getStyles.call(this);
        this.h && (a += " enabled");
        return a
    }
    ;
    function ol(a, b, c, e) {
        L.call(this);
        this.j = b;
        this.l = a;
        this.k = e.lf(this.ky, 500, this);
        this.g = "";
        this.o = c;
        this.langCodePair = null;
        this.transliterations = new yh;
        this.h = null
    }
    B(ol, L);
    d = ol.prototype;
    d.qa = function() {
        this.o.WE() && this.ca(this.j, "query:changed", y(this.XE, this))
    }
    ;
    d.Ya = function() {
        this.B("button-enter", y(this.oH, this))
    }
    ;
    d.ready = function() {
        this.b = this.children[0]
    }
    ;
    d.XE = function(a) {
        a && a != this.g ? (this.g = a,
        this.k.od()) : (this.g = "",
        this.Jk())
    }
    ;
    d.ky = function() {
        this.h && (this.h(),
        this.h = null);
        this.h = this.l.g(this.g, this.langCodePair, y(this.sB, this))
    }
    ;
    d.sB = function(a) {
        if (this.g) {
            for (var b = [], c = 0, e = a.length; c < e; ++c)
                b.push(new S(a[c]));
            this.transliterations.ja(b)
        } else
            this.Jk()
    }
    ;
    d.Jk = function() {
        this.transliterations.clear()
    }
    ;
    d.oH = function(a) {
        var b = a.detail.label;
        this.g = b;
        this.j.Ob(b);
        this.Jk();
        this.L("transliteration-selected");
        J(a)
    }
    ;
    d.R = function() {
        this.h = null;
        ol.A.R.call(this)
    }
    ;
    ol.inject = ["transliterationService", "searchQueryModel", "locale", "timeService"];
    function pl(a, b) {
        this.imageUrl = "";
        this.Ba = a;
        this.serviceQuery = b;
        this.videoId = this.title = "";
        this.b = [];
        this.videoString = this.videoCount = this.h = this.id = this.td = "";
        this.Ng = "request-playlist-playback";
        this.channel = null;
        this.videoPosition = this.firstVideoTitle = "";
        this.Wb = "playlistTile"
    }
    ;function ql(a, b) {
        el.call(this, a, b);
        this.C = new qh;
        this.l = "";
        this.model = this.h = this.k = this.j = this.g = null
    }
    B(ql, el);
    ql.prototype.R = function() {
        this.C = null;
        ql.A.R.call(this)
    }
    ;
    ql.prototype.Ya = function() {
        ql.A.Ya.call(this);
        this.g = this.K.querySelector(".video-thumb");
        this.j = this.K.querySelector(".details");
        this.h = this.K.querySelector(".activity");
        this.k = this.K.querySelector(".duration")
    }
    ;
    ql.prototype.Fa = function(a) {
        ql.A.Fa.call(this, a);
        this.model && !this.model.Um && (a = this.model.channel.Qa == this.model.channel.serviceQuery ? this.model.Ni || this.model.channel.displayName : this.o.P(this.model.activityDescription),
        this.model.activityDescription = a,
        this.model.Um = !0,
        this.model.activityDescription = this.model.activityDescription.replace("{{username}}", this.model.Ni || this.model.channel.displayName))
    }
    ;
    ql.prototype.U = function(a) {
        ql.A.U.call(this, a);
        this.Qb(this.K, !!this.model);
        this.model && (this.model instanceof jg && (this.Qb(this.k, !!this.model.durationLabel),
        this.Qb(this.h, !!this.model.activityDescription)),
        Xc(this.j, "background-image", "url(" + (this.model.Ji || this.model.channel.imageUrl || "") + ")"),
        this.H())
    }
    ;
    ql.prototype.getDescriptionText = function() {
        var a;
        if (this.model) {
            a = this.model.description;
            var b = 86;
            a = a || "";
            if (!(a.length < b || 0 > b)) {
                for (var c = b; 0 < c; c--)
                    if (" " == a[c]) {
                        b = c;
                        break
                    }
                a = a.substr(0, b) + "..."
            }
        } else
            a = "";
        return a
    }
    ;
    ql.prototype.H = function() {
        this.model && this.model.imageUrl !== this.l && this.g && (this.C.h(this.g, this.model.imageUrl, "preloaded"),
        this.l = this.model.imageUrl)
    }
    ;
    ql.prototype.getSpeechPhrase = function() {
        return this.$.isSupported() ? this.o.P("[[Play video {{n}}|Speech command to play video number n.]]".replace("{{n}}", String(this.w))) : ""
    }
    ;
    ql.prototype.Hk = function() {
        this.model && this.L(this.model.Ng || "request-playback", {
            data: this.model
        })
    }
    ;
    ql.inject = ["locale", "voiceHelper"];
    function rl(a, b, c, e) {
        L.call(this);
        this.C = a;
        this.w = c;
        this.j = e;
        this.h = NaN;
        this.channelName = this.videoTitle = this.channelAvatarUrl = "";
        this.k = null;
        this.viewCountLabel = this.uploadedDate = "";
        this.o = null;
        this.videoCount = this.videoIndex = 0;
        this.playlistTitle = "";
        this.model = this.l = null;
        this.H = b
    }
    B(rl, L);
    d = rl.prototype;
    d.Ya = function() {
        this.k = this.K.querySelector(".username");
        this.o = this.K.querySelector(".view-count");
        this.l = this.K.querySelector(".set-context")
    }
    ;
    d.qa = function() {
        this.C.B("isPlayingAd:changed", y(function(a) {
            a ? this.Xa() : this.Tb(!0)
        }, this))
    }
    ;
    d.Tb = function(a) {
        a && (this.h = this.j.setTimeout(y(this.Wp, this), 3E3));
        rl.A.Tb.call(this);
        this.U()
    }
    ;
    d.Xa = function() {
        this.is();
        rl.A.Xa.call(this);
        this.U()
    }
    ;
    d.kH = function() {
        this.g = this.j.lf(y(this.Wp, this), 3E3)
    }
    ;
    d.is = function() {
        isNaN(this.h) || (this.j.clearTimeout(this.h),
        this.h = NaN)
    }
    ;
    d.Wp = function() {
        this.C.isPlaying ? this.Xa() : (this.is(),
        this.kH())
    }
    ;
    d.Fa = function(a) {
        rl.A.Fa.call(this, a);
        this.model && (this.channelAvatarUrl = this.model.channel.imageUrl,
        this.videoTitle = this.model.title,
        a = this.H.fc(),
        this.w.useInnerTube && a && a.service && "playlistService" == a.service.id ? (this.playlistTitle = a.model.title,
        this.videoIndex = a.activeIndex + 1,
        this.videoCount = a.model.dc) : this.channelName = this.model.channel.displayName || "",
        this.uploadedDate = this.model.uploadedDateLabel,
        this.viewCountLabel = this.model.viewCountLabel)
    }
    ;
    d.U = function() {
        rl.A.U.call(this);
        if (this.model) {
            this.channelAvatarUrl = this.model.channel.imageUrl;
            this.videoTitle = this.model.title;
            var a = this.H.fc()
              , a = this.w.useInnerTube && a && a.service && "playlistService" == a.service.id;
            this.Qb(this.l, !!a);
            this.Qb(this.k, !a);
            this.Qb(this.o, !!this.model.viewCount)
        }
    }
    ;
    rl.inject = ["playerFacade", "watchModel", "environmentModel", "timeService"];
    function sl(a, b, c, e, f, g, k, l, n, q) {
        Pk.call(this);
        this.p = c;
        this.M = a;
        this.O = n;
        this.l = e;
        this.F = f;
        this.k = b;
        this.N = l;
        this.G = k;
        this.w = g;
        this.C = q;
        this.b = this.g = this.h = null;
        this.j = this.o = !1
    }
    B(sl, Pk);
    d = sl.prototype;
    d.load = function(a) {
        this.M.Ib(y(function(b) {
            var c = y(function(b) {
                this.Hr(b);
                this.k.pd("start_browse", "ar_r");
                a && a()
            }, this);
            this.k.pd("start_browse", "ar_rq");
            b ? this.F.load(c) : this.l.ec && (this.l.ec("start_browse", "", "feed_rs", "feed_r"),
            this.l.load({}, c))
        }, this))
    }
    ;
    d.Hr = function(a) {
        this.rows = a;
        this.g || (this.g = this.G.o());
        a = this.rows.length;
        a = this.p.sc(fd) ? Math.min(a, 1) : a;
        this.rows.splice(a, 0, this.g);
        a = this.p.initChannelId;
        !this.h && a && (this.h = Kk(this.O, "", this.C.cc(a), a),
        this.h.Gv(this.C));
        this.h && this.rows.unshift(this.h);
        this.b || (this.b = this.N.Hv());
        this.b.clear();
        this.rows.push(this.b)
    }
    ;
    d.Uq = function() {
        this.b && this.b.load()
    }
    ;
    d.Wq = function(a) {
        a && a.service && "searchService" === a.service.id && (this.w.xq(a.model.serviceQuery, a.fa(0), a.model.dc),
        this.g && this.mr())
    }
    ;
    d.vD = function() {
        this.w.clear();
        this.mr()
    }
    ;
    d.mr = function() {
        this.g.load();
        this.g.ub(0)
    }
    ;
    sl.inject = "authService csiService environmentModel featuredService personalDataService searchHistoryService searchRowService settingsRowService userUploadsService ytThumbnails".split(" ");
    function tl(a, b, c, e, f, g, k, l, n, q, s) {
        sl.call(this, a, b, c, e, f, g, k, l, n, q);
        this.H = s
    }
    B(tl, sl);
    tl.prototype.load = function(a) {
        this.k.pd("start_browse", "ar_rq");
        this.H.load({}, y(this.I, this, a || p))
    }
    ;
    tl.prototype.I = function(a, b) {
        this.Hr(b);
        this.rows = b;
        this.k.pd("start_browse", "ar_r");
        a()
    }
    ;
    tl.inject = "authService csiService environmentModel featuredService personalDataService searchHistoryService searchRowService settingsRowService userUploadsService ytThumbnails guideService".split(" ");
    function ul(a, b) {
        V.call(this);
        this.b = Y;
        this.h = a;
        this.o = b
    }
    B(ul, V);
    ul.prototype.parse = function(a, b) {
        var c = m("contents.sectionListRenderer", b) || m("continuationContents.sectionListContinuation", b)
          , e = m("contents", c);
        e ? (this.l(a, e),
        (c = m("continuations", c)) && this.k(a, c)) : a.errorMessage = "Can not parse response. Found keys: " + pb(b).join(", ");
        return a
    }
    ;
    ul.prototype.l = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = m("itemSectionRenderer.playlistVideoListRenderer", b[c]) || m("itemSectionRenderer", b[c]);
            if (f)
                this.g(a, f);
            else {
                a.errorMessage = "Can not parse item. Found keys: " + pb(b[c]).join(", ");
                a.S.clear();
                break
            }
        }
    }
    ;
    ul.prototype.g = function(a, b) {
        var c = b.contents;
        if (c)
            for (var e = 0, f = c.length; e < f; ++e) {
                var g = c[e];
                if (g.videoRenderer || g.playlistVideoRenderer)
                    this.h.Pk(a, g.videoRenderer || g.playlistVideoRenderer);
                else if (g.playlistRenderer)
                    this.o.xB(a, g.playlistRenderer);
                else if (g.playlistVideoListRenderer)
                    this.g(a, g.playlistVideoListRenderer);
                else
                    for (var k in g)
                        if (0 <= k.indexOf("Renderer")) {
                            this.h.Pk(a, g[k]);
                            break
                        }
            }
    }
    ;
    ul.prototype.k = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c)
            b[c].nextContinuationData && (a.b = m("nextContinuationData.continuation", b[c]))
    }
    ;
    ul.inject = ["innerTubeVideoParser", "innerTubePlaylistParser"];
    function vl(a) {
        if (w(a))
            return a;
        if (!a || !m("runs.length", a))
            return "";
        for (var b = "", c = 0, e = a.runs.length; c < e; ++c) {
            var f = a.runs[c]
              , g = f.text;
            f.bold && (g = "<strong>" + g + "</strong>");
            f.italics && (g = "<em>" + g + "</em>");
            b += g
        }
        return b
    }
    ;function wl(a, b, c) {
        V.call(this);
        this.h = a;
        this.g = b;
        this.k = c
    }
    B(wl, V);
    d = wl.prototype;
    d.parse = function(a, b) {
        for (var c = b.contents || b.items, e = 0, f = c.length; e < f; ++e) {
            var g = c[e].guideSectionRenderer || c[e].guideSubscriptionsSectionRenderer;
            g ? Array.prototype.push.apply(a, this.Qq(g)) : a.push(Hk({}, 'UNSUPPORTED "' + nb(c[e]) + '"', ""))
        }
    }
    ;
    d.Qq = function(a) {
        a = a.items || a.section.items;
        for (var b = [], c = 0, e = a.length; c < e; ++c) {
            var f;
            f = {};
            var g = a[c].guideEntryRenderer || a[c];
            if (g.hasOwnProperty("guideCollectionEntryRenderer"))
                f = this.Qq(g.guideCollectionEntryRenderer),
                b = b.concat(f);
            else {
                var k = g.navigationEndpoint;
                if (k && "browseEndpoint"in k || "mobileV2UserFeedEndpoint"in k) {
                    f.title = this.GC(g);
                    f.IC = this.FC(g);
                    var l = new Ek;
                    l.innerTubeEndpointParams = k.browseEndpoint;
                    var n = ""
                      , q = this.h;
                    if ("what_to_watch" == m("mobileV2UserFeedEndpoint.feedName", k))
                        q = this.g,
                        l = null,
                        n = "default";
                    else if (!k.browseEndpoint)
                        continue;
                    f = Kk(q, f.title, f.IC, n, l);
                    f.Qa = this.HC(k);
                    f.pe = !!f.Qa && "PLAYLISTS" != m("icon.iconType", g)
                } else
                    g = rb(k, function(a, b) {
                        return 0 <= b.indexOf("Endpoint")
                    }),
                    f.title = "Can't render \"" + g + '"',
                    f = Hk({}, f.title, "");
                b.push(f)
            }
        }
        return b
    }
    ;
    d.FC = function(a) {
        var b = "";
        switch (m("icon.iconType", a)) {
        case "WHAT_TO_WATCH":
            b = "icon-guide-what-to-watch";
            break;
        case "SUBSCRIPTIONS":
            b = "icon-guide-my-subs";
            break;
        case "SOCIAL":
            b = "icon-guide-social";
            break;
        case "PLAYLISTS":
            b = "icon-guide-playlists";
            break;
        case "WATCH_HISTORY":
            b = "icon-guide-history";
            break;
        case "WATCH_LATER":
            b = "icon-guide-watch-later";
            break;
        case "LIKES_PLAYLIST":
            b = "icon-like"
        }
        return b ? b : (a = m("thumbnail.thumbnails.0.url", a) || "",
        this.k.Bj(a))
    }
    ;
    d.GC = function(a) {
        return vl(a.title)
    }
    ;
    d.HC = function(a) {
        var b = "";
        (a = m("browseEndpoint.browseId", a)) && 0 == a.indexOf("UC") && (b = a.substr(2));
        return b
    }
    ;
    wl.inject = ["browseService", "riverService", "ytThumbnails"];
    function xl(a, b, c) {
        V.call(this);
        this.b = Y;
        this.k = a;
        this.h = b;
        this.l = c;
        this.g = vl
    }
    B(xl, V);
    d = xl.prototype;
    d.xB = function(a, b) {
        var c = this.Nl(a, b);
        a && a.S && c && a.S.push(c)
    }
    ;
    d.Nl = function(a, b) {
        var c = new pl(a.Ba,a.serviceQuery)
          , e = new ig(a.Ba,a.serviceQuery)
          , f = this.wz(b);
        if (!f)
            return c.title = "Not a playlist renderer.",
            c.channel = e,
            console.error("InnerTube playlist parser: not a playlist!", nb(m("data.target", b))),
            c;
        c.b = this.vz(b, e, a);
        if (!c.b.length)
            return null;
        var g = c.b[0];
        c.channel = this.rz(e, b);
        c.imageUrl = this.tz(b);
        c.title = this.sz(b);
        c.id = f;
        c.firstVideoTitle = g.title;
        c.videoId = g.videoId;
        c.videoCount = this.uz(b);
        c.Ji = this.h.cc(m("shortBylineText.runs.0.navigationEndpoint.browseEndpoint.browseId", b));
        c.videoString = 1 == c.videoCount ? this.l.P("[[video|Label describing a single video.]]") : this.l.P("[[videos|Label describing multiple videos.]]");
        c.uploadedDateLabel = this.xz(b);
        return c
    }
    ;
    d.rz = function(a, b) {
        a.Qa = m("owner.channelId", b);
        a.username = m("owner.title", b);
        a.displayName = this.g(m("shortBylineText", b));
        a.Qa && (a.imageUrl = this.h.cc(a.Qa));
        return a
    }
    ;
    d.wz = function(a) {
        return m("playlistId", a)
    }
    ;
    d.tz = function(a) {
        var b = "";
        a.thumbnails && 0 < a.thumbnails.length && (b = (b = m("thumbnails.0.thumbnails.0.url", a)) ? b.replace("mqdefault", this.k.M) : "");
        return b
    }
    ;
    d.xz = function(a) {
        return this.g(m("publishedTimeText", a))
    }
    ;
    d.vz = function(a, b, c) {
        a = m("videos", a);
        var e = [];
        if (a)
            for (var f = 0, g = a.length; f < g; ++f) {
                var k = new jg(c.Ba,c.serviceQuery,c.Ka);
                k.videoId = m("childVideoRenderer.videoId", a[f]);
                k.title = this.g(m("childVideoRenderer.title", a[f]));
                k.channel = b;
                k.durationLabel = this.g(m("childVideoRenderer.lengthText", a[f]));
                k.videoId && (k.imageUrl = this.h.nf(k.videoId, this.k.M));
                e.push(k)
            }
        return e
    }
    ;
    d.sz = function(a) {
        return this.g(m("title", a))
    }
    ;
    d.uz = function(a) {
        return m("videoCount", a)
    }
    ;
    xl.inject = ["environmentModel", "ytThumbnails", "locale"];
    function yl(a, b) {
        ul.call(this, a, b)
    }
    B(yl, ul);
    yl.prototype.parse = function(a, b) {
        a.dc = m("estimatedResults", b);
        return yl.A.parse.call(this, a, b)
    }
    ;
    yl.inject = ["innerTubeVideoParser", "innerTubePlaylistParser"];
    function zl(a, b, c) {
        V.call(this);
        this.b = Y;
        this.h = a;
        this.l = b;
        this.k = c;
        this.g = vl
    }
    B(zl, V);
    d = zl.prototype;
    d.Pk = function(a, b) {
        var c = this.QH(a, b);
        a && a.S && c && a.S.push(c)
    }
    ;
    d.QH = function(a, b) {
        var c = new jg(a.Ba,a.serviceQuery,a.Ka)
          , e = new ig(a.Ba,a.serviceQuery)
          , f = this.Yy(b);
        if (!f)
            return c.title = "Not a video renderer.",
            c.channel = e,
            console.error("InnerTube video parser: not a video!", nb(m("data.target", b))),
            c;
        c.activityDescription = this.Sy();
        c.description = this.Vy(b);
        c.channel = this.Uy(e, b);
        c.duration = this.Xy(b);
        c.durationLabel = this.Wy(b);
        c.imageUrl = this.k.nf(f, this.l.M);
        c.I = this.$y(b);
        c.o = this.Ty(b);
        c.title = this.Zy(b);
        c.videoId = f;
        c.viewCount = this.bz(b);
        c.viewCountLabel = this.az(b);
        c.uploadedDateLabel = this.ez(b);
        this.cz(c, b);
        this.dz(c, b);
        if (e = m("app$control.yt$state", b))
            for (var e = v(e) ? e : [e], f = 0, g = e.length; f < g; ++f)
                if (e[f] && "restricted" == e[f].name) {
                    c.b = e[f].reasonCode;
                    break
                }
        return c
    }
    ;
    d.Vy = function(a) {
        return (a = this.g(m("descriptionSnippet", a))) && a.slice(0, 165) || ""
    }
    ;
    d.Uy = function(a, b) {
        a.Qa = m("shortBylineText.runs.0.navigationEndpoint.browseEndpoint.browseId", b);
        a.username = a.Qa;
        a.displayName = this.g(m("shortBylineText", b));
        a.imageUrl = this.k.cc(a.Qa);
        return a
    }
    ;
    d.Xy = function(a) {
        return parseInt(m("lengthMs", a) / 1E3, 10)
    }
    ;
    d.Wy = function(a) {
        return this.g(m("lengthText", a))
    }
    ;
    d.Yy = function(a) {
        return m("videoId", a)
    }
    ;
    d.Ty = function() {
        return !1
    }
    ;
    d.Zy = function(a) {
        return this.g(m("title", a))
    }
    ;
    d.bz = function(a) {
        return m("viewCount", a)
    }
    ;
    d.az = function(a) {
        return this.g(m("viewCountText", a))
    }
    ;
    d.ez = function(a) {
        return this.g(m("publishedTimeText", a))
    }
    ;
    d.cz = function(a, b) {
        var c = this.KC(b)
          , e = this.JC(b)
          , f = c + e;
        0 < f ? (a.h = e / f,
        a.j = c / f) : (a.h = 0,
        a.j = 0);
        a.l = e;
        a.dislikesLabel = this.h.Yd(a.l);
        a.dislikesStyle = {
            width: dg(a.h)
        };
        a.w = c;
        a.likesLabel = this.h.Yd(a.w);
        a.likesStyle = {
            width: dg(a.j)
        }
    }
    ;
    d.KC = function(a) {
        return m("likes", a)
    }
    ;
    d.JC = function(a) {
        return m("dislikes", a)
    }
    ;
    d.Sy = function() {
        return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    }
    ;
    d.dz = function(a) {
        a.g = !1;
        a.p = !1
    }
    ;
    d.$y = function() {
        return !1
    }
    ;
    zl.inject = ["locale", "environmentModel", "ytThumbnails"];
    function Al(a, b) {
        V.call(this);
        this.b = Y;
        this.h = a;
        this.k = b
    }
    B(Al, V);
    Al.prototype.parse = function(a, b) {
        var c = m("contents.singleColumnWatchNextResults.results.results.contents", b);
        a.Ka = "RV";
        if (c) {
            for (var e = 0, f = c.length; e < f; ++e) {
                var g = m("itemSectionPreviewRenderer.fullContents.sectionListWithoutPreviewRenderer.contents.0.itemSectionRenderer", c[e]);
                g && this.g(a, g)
            }
            a.dc = a.S.length;
            return a
        }
        a.errorMessage = "Can not parse response. Found keys: " + pb(b).join(", ");
        return a
    }
    ;
    Al.prototype.g = function(a, b) {
        var c = b.contents;
        if (c)
            for (var e = 0, f = c.length; e < f; ++e) {
                var g = c[e];
                g.compactVideoRenderer && this.h.Pk(a, g.compactVideoRenderer)
            }
    }
    ;
    Al.inject = ["innerTubeVideoParser", "innerTubePlaylistParser"];
    function Bl(a, b, c, e, f, g, k, l, n, q, s, r, u, O) {
        this.h = g;
        this.pe = !!u;
        this.g = f.o ? n.getApiKey() : "AIzaSyAd-YEOqZz9nXVzGtn3KWzYLbLaajhqIDA";
        g = {
            context: {
                client: {
                    acceptLanguage: "en",
                    acceptRegion: "US",
                    clientName: "TVHTML5",
                    clientVersion: "4"
                }
            }
        };
        z(m("context.client", g), m("context.client", s));
        z(m("context", g), m("context", s));
        zi.call(this, a, b, c, e, f, k, l, q, O, g, r)
    }
    B(Bl, zi);
    d = Bl.prototype;
    d.ag = function() {
        return this.b.useTestInnerTube ? "tit" : this.b.useReleaseInnerTube ? "sit" : "it"
    }
    ;
    d.$e = function() {
        return this.b.useTestInnerTube ? "//www-googleapis-test.sandbox.google.com/youtubei/vi" : this.b.useReleaseInnerTube ? "//www-googleapis-staging.sandbox.google.com/youtubei/v1release" : "//www.googleapis.com/youtubei/vi"
    }
    ;
    d.Gc = function(a) {
        a = a || {};
        z(a, {
            key: this.g
        });
        return Bl.A.Gc.call(this, a)
    }
    ;
    d.ug = function() {
        return "POST"
    }
    ;
    d.load = function(a, b) {
        var c = !1, e, f = new ri(null,function() {
            e ? e.cancel() : c = !0
        }
        );
        this.h.Ib(y(function(f) {
            if (!c) {
                var k = a || {};
                k && k.hasOwnProperty("innerTubeEndpointParams") && (z(k, k.innerTubeEndpointParams),
                delete k.innerTubeEndpointParams);
                var l = {
                    "Content-Type": "application/json"
                };
                f && (l.Authorization = "Bearer " + f);
                f = this.jr();
                f.serviceQuery = k.query;
                f.serviceQuery && this.k && (k[this.k] = f.serviceQuery);
                e = this.cl(k, b, null, f, l, !0)
            }
        }, this));
        return f
    }
    ;
    d.Qr = function(a) {
        a && this.w && (this.w.b && (a.context.client.acceptLanguage = this.w.b),
        this.w.j && (a.context.client.acceptRegion = this.w.j))
    }
    ;
    Bl.inject = "name path csiService ytHttp environmentModel authService cacheService backendErrorReporting ssoApi parser params locale brandable paramKey".split(" ");
    function Cl(a, b, c, e, f, g, k, l, n) {
        Bl.call(this, "searchService", "/search", a, b, c, e, f, g, k, l, {}, n, !1)
    }
    B(Cl, Bl);
    Cl.prototype.load = function(a, b) {
        if (!a || !a.query && !a.continuation) {
            var c = new this.o.b;
            b && b(c);
            return new ri(c)
        }
        return Cl.A.load.call(this, a, b)
    }
    ;
    Cl.inject = "csiService ytHttp environmentModel authService cacheService backendErrorReporting ssoApi searchParser locale".split(" ");
    function Dl(a, b, c, e) {
        this.deviceCount = e;
        this.j = this.g = "";
        U.call(this, a, b, c)
    }
    B(Dl, U);
    Dl.prototype.P = function() {
        Dl.A.P.call(this);
        this.g = this.b.P("[[PAIR DEVICE|Title of menu item that allows a user to pair one mobile device with the application.]]");
        this.h = this.b.P("[[PAIR ANOTHER DEVICE|Title of menu item that allows a user to pair an additional mobile device with the application.]]")
    }
    ;
    Dl.prototype.getTitle = function() {
        return 0 < this.deviceCount ? this.h : this.g
    }
    ;
    Dl.prototype.getTitleClass = function() {
        return 0 < this.deviceCount ? "long-title" : ""
    }
    ;
    function El(a, b, c, e, f, g) {
        this.g = f;
        this.imageUrl = g;
        this.totalResultsLocalized = "";
        U.call(this, a, b, c, e)
    }
    B(El, U);
    El.prototype.P = function() {
        El.A.P.call(this);
        this.totalResultsLocalized = this.b.Yd(this.g)
    }
    ;
    function Fl(a, b, c, e, f) {
        U.call(this, a, b, c, e);
        this.deviceCount = f
    }
    B(Fl, U);
    function Gl(a, b, c, e) {
        this.searchCount = e;
        U.call(this, a, b, c)
    }
    B(Gl, U);
    function Hl(a, b, c, e, f, g) {
        this.j = g || p;
        this.g = this.h = null;
        U.call(this, a, b, c, e, "", f)
    }
    B(Hl, U);
    Hl.prototype.P = function() {
        Hl.A.P.call(this);
        this.h = this.b.P("[[Enabled|Explanatory text that says a feature is currently enabled.]]");
        this.g = this.b.P("[[Disabled|Explanatory text that says a feature is currently Disabled.]]")
    }
    ;
    Hl.prototype.getToggleStatus = function() {
        return this.j() && this.h || this.g || ""
    }
    ;
    Hl.prototype.getToggleClass = function() {
        return this.j() ? "enabled" : "disabled"
    }
    ;
    function Il(a) {
        this.h = a;
        this.b = {};
        this.g = []
    }
    Il.prototype.get = function(a) {
        return this.b[a]
    }
    ;
    Il.prototype.Jb = function() {
        return this.g
    }
    ;
    Il.prototype.add = function(a, b) {
        var c = this.get(a);
        this.b[a] = b;
        !c && this.g.push(a) > this.h && (c = this.g.shift(),
        delete this.b[c])
    }
    ;
    function Jl() {
        this.b = !1
    }
    Jl.CACHE_TYPE = "channel_paid_info";
    function Kl(a, b, c) {
        this.content = a || null;
        this.tileClass = b || null;
        this.b = c || null
    }
    ;function Ll(a, b, c, e) {
        this.name = a;
        this.b = b;
        this.rows = c;
        this.g = e || new Ml(0,0)
    }
    ;function Nl() {
        K.call(this);
        this.message = ""
    }
    B(Nl, K);
    Jd(Nl, ["message"]);
    function Ml(a, b) {
        this.top = a || 0;
        this.left = b || 0
    }
    ;function Ol() {
        this.b = this.className = this.message = this.id = "";
        this.j = !1;
        this.g = this.h = 0
    }
    ;function Pl() {
        K.call(this);
        this.percentageScrolled = 0
    }
    B(Pl, K);
    Jd(Pl, ["percentageScrolled"]);
    function Ql(a) {
        Pk.call(this);
        this.b = Kk(a, "", "icon-search")
    }
    B(Ql, Pk);
    Ql.prototype.load = function() {
        this.rows.push(this.b)
    }
    ;
    Ql.prototype.g = function() {
        return this.b
    }
    ;
    Ql.inject = ["searchService", "environmentModel"];
    function Rl(a, b, c, e, f) {
        K.call(this);
        this.o = c;
        this.w = a;
        this.k = b;
        this.h = f.g();
        this.p = 1500;
        this.l = e.lf(this.yu, 1500, this);
        this.b = "";
        this.g = null;
        this.j = !1
    }
    B(Rl, K);
    d = Rl.prototype;
    d.IU = function() {
        this.b = ""
    }
    ;
    d.fx = function() {
        this.g = new Y
    }
    ;
    d.yu = function() {
        this.b && (this.j = !0,
        this.h.load(this.nz(this.b)))
    }
    ;
    d.Za = function() {
        return !this.b
    }
    ;
    d.nz = function(a) {
        return y(function() {
            this.j = !1;
            this.b === a && (this.g = this.h.model,
            this.T("results:changed", this.g))
        }, this)
    }
    ;
    d.Si = function() {
        return this.b
    }
    ;
    d.Ob = function(a) {
        a != this.b && (this.h.gx(),
        a && (a = a.replace("\n", "")),
        this.b = (a = this.k.ex(a) ? "" : a) || "",
        this.T("query:changed", this.b),
        this.o.serviceQuery = this.b,
        this.h.model.serviceQuery = this.b,
        this.fx(),
        this.l.od())
    }
    ;
    d.DA = function(a) {
        this.Ob(this.b + a)
    }
    ;
    d.Yj = function() {
        this.b.length && this.Ob(this.b.slice(0, -1))
    }
    ;
    Rl.inject = ["environmentModel", "debugCallService", "searchService", "timeService", "searchModel"];
    function Sl(a) {
        this.b = null;
        this.h = a
    }
    Sl.prototype.g = function(a, b) {
        var c = new ue(window);
        c.responseType = "arraybuffer";
        c.get(this.h, y(function(c) {
            a.decodeAudioData(c, y(function(a) {
                this.b = a;
                b()
            }, this), function(a) {
                console.error("Error in loading sound:", a)
            })
        }, this))
    }
    ;
    function Tl(a) {
        this.id = Sk();
        this.o = this.w = a.Ia;
        this.k = 0;
        this.p = a.Oa;
        this.l = this.b = this.g = this.j = 0;
        this.h = ""
    }
    Tl.prototype.C = function() {
        return rg({
            id: this.id,
            recentActive: this.w,
            firstActive: this.o,
            prevActive: this.k,
            firstActiveGeo: this.p,
            loginState: this.j,
            recentLogin: this.g,
            firstLogin: this.b,
            prevLogin: this.l,
            uga: this.h
        })
    }
    ;
    function Ul() {
        K.call(this);
        this.b = {}
    }
    B(Ul, K);
    Ul.prototype.pr = function(a, b) {
        this.b[a] = !!b;
        this.T("subscription:added")
    }
    ;
    Ul.prototype.clear = function() {
        this.b = {}
    }
    ;
    Ul.prototype.g = function() {
        for (var a in this.b)
            if (!this.b[a])
                return !0;
        return !1
    }
    ;
    Ul.prototype.h = function(a) {
        return void 0 !== this.b[a]
    }
    ;
    function Vl(a, b, c) {
        Xk.call(this, a, b, c);
        this.Na("videoFromEntry", this.ji)
    }
    B(Vl, Xk);
    d = Vl.prototype;
    d.ji = function(a, b) {
        for (var c = this.bF(b), e = c.length, f = 0; f < e; ++f) {
            var g = c[f];
            if (this.cF(g))
                return c = Vl.A.ji.call(this, a, g.entry[0]),
                c.activityDescription = this.Yi(b),
                c.Ni = this.Jr(b),
                e = this.aF(b),
                c.Ji = this.h.cc(e),
                c
        }
        return null
    }
    ;
    d.aF = function(a) {
        return a.author && a.author[0] ? this.sa(a.author[0].yt$userId) : ""
    }
    ;
    d.Jr = function(a) {
        return a.author && a.author[0] ? this.sa(a.author[0].name) : ""
    }
    ;
    d.jj = function(a) {
        return a && a.id && a.id.$t || ""
    }
    ;
    d.en = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration, 10) : 0
    }
    ;
    d.cF = function(a) {
        return a.rel && "http://gdata.youtube.com/schemas/2007#video" === a.rel
    }
    ;
    d.bF = function(a) {
        return a && a.link || []
    }
    ;
    d.Yi = function(a) {
        if (!a)
            return "";
        var b = this.Jr(a)
          , c = a.category && a.category[1] && a.category[1].term && a.category[1].term.toUpperCase();
        return b && c && Id[c] || this.sa(a.title)
    }
    ;
    Vl.inject = ["locale", "environmentModel", "ytThumbnails"];
    function Wl(a) {
        V.call(this);
        this.b = hg;
        this.h = a;
        this.Na("entry", this.k);
        this.Na("yt$option", this.g)
    }
    B(Wl, V);
    Wl.prototype.k = function(a, b, c) {
        this.parse(a, c)
    }
    ;
    Wl.prototype.g = function(a, b, c) {
        if (v(c)) {
            b = 0;
            for (var e = c.length; b < e; ++b) {
                var f = m("name", c[b])
                  , g = m("$t", c[b])
                  , g = this.h.Bj(g);
                switch (f) {
                case "device_watchpage.watermark.image.url":
                    a.g = g;
                    break;
                case "generictv_watchpage.banner.image.url":
                    a.b = g;
                    break;
                case "channel.banner.tv.image.url":
                case "channel.banner.tv.low.image.url":
                case "channel.banner.tv.medium.image.url":
                case "channel.banner.tv.high.image.url":
                    a.h = g;
                    break;
                case "watchpage.global.featured_playlist.id":
                    a.Pg = g;
                    break;
                case "channel.featured_video_module.video_id.string":
                    a.k = g
                }
            }
        }
    }
    ;
    Wl.inject = ["ytThumbnails"];
    function Xl() {
        V.call(this);
        this.b = Jl;
        this.Na("entry", this.g);
        this.Na("yt$paidContent", this.h)
    }
    B(Xl, V);
    Xl.prototype.g = function(a, b, c) {
        this.parse(a, c)
    }
    ;
    Xl.prototype.h = function(a, b, c) {
        a.b = !!c
    }
    ;
    function Yl() {
        qi.call(this);
        this.b = Y
    }
    B(Yl, qi);
    Yl.prototype.cf = function(a, b, c) {
        c.forEach(function(b) {
            var c = new ig(a.Ba,a.serviceQuery);
            this.parse(c, b);
            a.S.push(this.Ml(c, b))
        }, this);
        return a
    }
    ;
    Yl.prototype.Ml = function(a, b) {
        a.displayName = this.g(b) || a.username;
        a.id = this.h(b);
        return a
    }
    ;
    Yl.prototype.g = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.sa(a.content.entry[0].title) : ""
    }
    ;
    Yl.prototype.h = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.sa(a.content.entry[0].yt$channelId) : ""
    }
    ;
    function Zl(a, b) {
        V.call(this);
        this.l = a;
        this.o = b;
        this.g = {
            trends: "icon-trends",
            music: "icon-music",
            gaming: "icon-gaming",
            sports: "icon-sport",
            film: "icon-film",
            entertainment: "icon-entertainment",
            comedy: "icon-lol",
            news: "icon-news",
            people: "icon-people",
            tech: "icon-rocket",
            howto: "icon-lips",
            education: "icon-education",
            animals: "icon-pets",
            popular: "icon-star",
            featured: "/icon-music-awards.png"
        };
        this.Na("sets", this.k)
    }
    B(Zl, V);
    Zl.prototype.k = function(a, b, c) {
        c.forEach(function(b) {
            this.EK(a, b)
        }, this);
        return a
    }
    ;
    Zl.prototype.EK = function(a, b) {
        var c = b.title
          , e = b.gdata_list_id
          , f = e.substr(0, 2)
          , g = e.substr(2);
        try {
            var k = this.l.get(f)
              , l = this.h(e, g, b.icon)
              , n = Kk(k, c || "", l, g);
            a.push(n)
        } catch (q) {}
    }
    ;
    Zl.prototype.h = function(a, b, c) {
        c = this.g[c];
        !c && a.match(/^UU.+/) && (c = this.o.cc(b));
        return c || "icon-star"
    }
    ;
    Zl.inject = ["$injector", "ytThumbnails"];
    function $l() {
        qi.call(this);
        this.b = Y
    }
    B($l, qi);
    d = $l.prototype;
    d.cf = function(a, b, c) {
        c.forEach(function(b) {
            var c = new pl(a.Ba,a.serviceQuery);
            this.parse(c, b);
            a.S.push(this.Nl(c, b))
        }, this);
        return a
    }
    ;
    d.Nl = function(a, b) {
        a.id = this.dJ(b);
        a.serviceQuery = a.id;
        a.imageUrl = this.$I(b);
        a.videoCount = this.bJ(b);
        a.td = this.aJ(b);
        a.imageUrl && (a.videoId = this.ZI(a));
        return a
    }
    ;
    d.dJ = function(a) {
        return this.sa(a.yt$playlistId)
    }
    ;
    d.$I = function(a) {
        return a.media$group && a.media$group.media$thumbnail && a.media$group.media$thumbnail[0].url || ""
    }
    ;
    d.bJ = function(a) {
        return this.sa(a.yt$countHint)
    }
    ;
    d.aJ = function(a) {
        return a.author && a.author[0].name ? this.sa(a.author[0].name) : ""
    }
    ;
    d.ZI = function(a) {
        a = a.imageUrl.split("/");
        return a[a.length - 2]
    }
    ;
    function am(a) {
        qi.call(this);
        this.b = Y;
        this.rc = a
    }
    B(am, qi);
    d = am.prototype;
    d.cf = function(a, b, c) {
        c.forEach(function(b) {
            var c = new ig(a.Ba,a.serviceQuery);
            this.parse(c, b);
            c = this.Ml(c, b);
            c.displayName && (a.S.push(c),
            this.rc.pr(c.username, !0))
        }, this);
        return a
    }
    ;
    d.Ml = function(a, b) {
        a.id = this.QJ(b);
        a.username = this.RJ(b);
        a.displayName = this.PJ(b) || a.username;
        return a
    }
    ;
    d.RJ = function(a) {
        return this.sa(a.yt$username)
    }
    ;
    d.PJ = function(a) {
        return a && a.yt$username && a.yt$username.display ? a.yt$username.display : ""
    }
    ;
    d.QJ = function(a) {
        return this.sa(a.yt$channelId)
    }
    ;
    d.bS = function(a) {
        return this.sa(a.id)
    }
    ;
    am.$inject = ["subscriptionsModel"];
    function bm(a) {
        qi.call(this);
        this.b = ig;
        this.g = a;
        this.Na("yt$username", this.Hz);
        this.Na("title", this.Iz);
        this.Na("media$thumbnail", this.Fz);
        this.Na("yt$statistics", this.Gz)
    }
    B(bm, qi);
    d = bm.prototype;
    d.cf = function(a, b, c) {
        this.parse(a, c);
        a.displayName || (a.displayName = a.title)
    }
    ;
    d.Hz = function(a, b, c) {
        a.username = this.sa(c);
        c.display && (a.displayName = c.display)
    }
    ;
    d.Iz = function(a, b, c) {
        a.title = this.sa(c)
    }
    ;
    d.Fz = function(a, b, c) {
        a.imageUrl = this.g.Bj(c.url)
    }
    ;
    d.Gz = function(a, b, c) {
        a.cw = c.subscriberCount;
        a.viewCount = c.totalUploadViews
    }
    ;
    bm.inject = ["ytThumbnails"];
    function cm(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , e = c.shift();
        if ("undefined" == typeof e)
            throw Error("[goog.string.format] Template required");
        return e.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, e, l, n, q, s, r) {
            if ("%" == q)
                return "%";
            var u = c.shift();
            if ("undefined" == typeof u)
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = u;
            return dm[q].apply(null, arguments)
        })
    }
    var dm = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
        },
        f: function(a, b, c, e, f) {
            e = a.toString();
            isNaN(f) || "" == f || (e = a.toFixed(f));
            var g;
            g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= a && (e = g + e);
            if (isNaN(c) || e.length >= c)
                return e;
            e = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
            a = c - e.length - g.length;
            0 <= b.indexOf("-", 0) ? e = g + e + Array(a + 1).join(" ") : (b = 0 <= b.indexOf("0", 0) ? "0" : " ",
            e = g + Array(a + 1).join(b) + e);
            return e
        },
        d: function(a, b, c, e, f, g, k, l) {
            return dm.f(parseInt(a, 10), b, c, e, 0, g, k, l)
        }
    };
    dm.i = dm.d;
    dm.u = dm.d;
    function em(a, b) {
        Ah.call(this, a);
        this.h = b;
        this.l = this.k = this.model = null;
        this.g = [];
        this.wA()
    }
    B(em, Ah);
    d = em.prototype;
    d.ni = function() {
        em.A.ni.call(this);
        this.tg("selectedIndex:changed", y(this.Ds, this));
        this.tg("items:changed", y(this.Ds, this))
    }
    ;
    d.Ta = function(a) {
        return this.children[a % this.model.Md()]
    }
    ;
    d.Js = function() {
        return this.model && this.model.Md() || 0
    }
    ;
    d.Ds = function() {
        for (var a = this.g.length = 0, b = this.children.length; a < b; ++a)
            this.jE(this.children[a], a),
            this.mE(this.children[a], a)
    }
    ;
    d.wA = function() {
        var a = this.h.cssPrefix
          , b = this.h.supportsTranslateZ ? "translateZ(0)" : "";
        this.k = cm("%s-transform: translateX(%s) %s; %s-transition: %s-transform %s; transition: %s-transform %s;", a, "%position", b, a, a, "200ms", a, "200ms");
        this.l = cm("%s-transform: translateX(%s) %s; %s-transition: none 0s; transition: none 0s;", a, "%position", b, a)
    }
    ;
    d.jE = function(a, b) {
        b = this.model.Kk(b);
        var c = this.eF(b) ? this.k : this.l
          , e = dg(104 * b, 1);
        a.K.style.cssText = c.replace("%position", e)
    }
    ;
    d.eF = function(a) {
        return this.h.supportsAnimation && this.model.IF(a)
    }
    ;
    d.mE = function(a, b) {
        if (a instanceof el) {
            var c = this.model.Kk(b);
            a.nl(!a.isHidden && 0 <= c && 3 > c, c + 1) && this.g.push(a)
        }
    }
    ;
    d.Ad = function() {
        for (var a = 0, b = this.g.length; a < b; ++a)
            this.g[a].$.enable()
    }
    ;
    d.Bd = function() {
        for (var a = 0, b = this.g.length; a < b; ++a)
            this.g[a].$.disable()
    }
    ;
    em.inject = ["listSelectionManager", "environmentModel"];
    function fm(a) {
        Ah.call(this, a);
        this.isVertical = !0
    }
    B(fm, Ah);
    fm.prototype.Gs = function() {
        return th('<ul class="$list" data-item-factory="{{itemFactory}}" data-item-name="{{itemName}}" data-is-vertical="false"></ul>', null, this.injector)
    }
    ;
    fm.inject = ["listSelectionManager"];
    function gm(a) {
        yh.call(this);
        this.g = a || 7
    }
    B(gm, yh);
    d = gm.prototype;
    d.fa = function(a) {
        var b = Math.max(0, this.Db() - 2);
        a = this.Kk(a) - this.ws();
        return gm.A.fa.call(this, b + a)
    }
    ;
    d.Md = function() {
        return this.g
    }
    ;
    d.la = function() {
        for (var a = [], b = 0, c = this.Md(); b < c; ++b)
            a.push(this.fa(b));
        return a
    }
    ;
    d.Kk = function(a) {
        a -= this.hJ();
        a += this.jt();
        a %= this.Md();
        0 > a && (a += this.Md());
        return a + this.ws()
    }
    ;
    d.IF = function(a) {
        return -2 != a && a != this.Md() - 1 - this.jt()
    }
    ;
    d.jt = function() {
        return Math.min(this.Db(), 2)
    }
    ;
    d.ws = function() {
        return Math.max(-this.Db(), -2)
    }
    ;
    d.hJ = function() {
        return this.Db() % this.Md()
    }
    ;
    function hm() {}
    B(hm, sh);
    hm.prototype.isSupported = function() {
        return !1
    }
    ;
    d = hm.prototype;
    d.Gb = p;
    d.Ga = p;
    d.Hf = p;
    d.ki = p;
    d.Xf = p;
    d.Qs = function() {
        return []
    }
    ;
    function im(a) {
        ye.call(this);
        this.J = a || {};
        this.h()
    }
    B(im, ye);
    im.prototype.Fe = function(a) {
        return this.contains(a) || !this.g ? im.A.Fe.call(this, a) : new ae(this.g(a),this)
    }
    ;
    im.prototype.h = function() {
        function a(a) {
            return a
        }
        this.register("window", this.J);
        this.register("document", this.J.document || {});
        this.register("location", this.J.location || {});
        a.inject = ["markup"];
        this.yl("templatePreprocessor", a);
        this.li("xhr", ue);
        this.li("templateResolver", ve)
    }
    ;
    function jm() {
        this.enabled = !1
    }
    jm.prototype.Ra = function() {
        this.enabled = !this.enabled
    }
    ;
    function km() {}
    km.prototype.isSupported = function() {
        return !1
    }
    ;
    function lm(a, b, c, e, f) {
        Z.call(this, a, b, "activity_sw");
        this.l = c;
        this.p = e;
        this.o = f;
        this.g = null;
        this.j = !1
    }
    B(lm, Z);
    var mm = {
        state: "exit"
    };
    d = lm.prototype;
    d.QC = function() {
        var a = this.k;
        this.k = this.p.hc();
        return a ? ((this.k - a) / 1E3).toFixed(1) : null
    }
    ;
    d.zr = function(a) {
        a = this.bn(a);
        var b = this.RC(a, this.QC());
        this.h("/gen_204", b);
        this.g = a
    }
    ;
    d.gD = function() {
        this.zr(mm)
    }
    ;
    d.RC = function(a, b) {
        var c = nm
          , e = {
            a: "tv_activity"
        };
        e[c.iw] = a;
        e.logged_in = this.l.Ri() ? 1 : 0;
        null != this.g && (e[c.hw] = this.g);
        null != b && (e.t = b);
        !this.j && this.o.jw() && (e[c.gw] = 1,
        this.j = !0);
        e.e = this.b.tf();
        z(e, this.b.tc());
        return e
    }
    ;
    d.bn = function(a) {
        return a.mode ? a.state + ":" + a.mode : a.state
    }
    ;
    var nm = {
        hw: "prev",
        gw: "first_activation",
        iw: "state"
    };
    lm.inject = ["environmentModel", "privateDataService", "authService", "timeService", "statsService"];
    function om(a, b, c) {
        Z.call(this, a, b, "backend_error_sw");
        this.j = c
    }
    B(om, Z);
    var pm = {
        gz: "be",
        hz: "path",
        iz: "rcode"
    };
    om.prototype.g = function(a, b, c) {
        var e = {
            a: "tv_berror"
        };
        e[pm.gz] = a;
        e[pm.hz] = b;
        c && (e[pm.iz] = c);
        e.logged_in = this.j.Ri() ? 1 : 0;
        e.e = this.b.tf();
        z(e, this.b.tc());
        this.h("/gen_204", e)
    }
    ;
    om.inject = ["environmentModel", "privateDataService", "authService"];
    function qm(a, b, c) {
        this.g = a;
        this.b = b;
        this.j = c
    }
    qm.prototype.qa = function() {
        var a = y(this.h, this);
        this.b.B("state:changed", a);
        this.b.ah(a)
    }
    ;
    qm.prototype.h = function(a) {
        a && this.g.gb && this.b.Ib(y(function(a) {
            a && this.j.get("/vendor_signin", {
                access_token: a,
                vendor: this.g.gb
            })
        }, this))
    }
    ;
    qm.inject = ["environmentModel", "authService", "ytHttp"];
    function rm(a, b) {
        Z.call(this, a, b);
        this.p = "crash-data";
        this.l = this.j = this.g = this.k = 0;
        this.o = !1
    }
    B(rm, Z);
    d = rm.prototype;
    d.qa = function() {
        this.BF();
        this.CF() && this.h("/gen_204", this.EF());
        this.DF()
    }
    ;
    d.BF = function() {
        var a = this.I.Mp("crash-data");
        a && (this.k = a["startup-count"],
        this.g = a["clean-exits"],
        this.j = a["crash-count"],
        this.l = a.startup,
        this.o = !0)
    }
    ;
    d.CF = function() {
        return this.o && this.j < this.Bo()
    }
    ;
    d.DF = function() {
        this.j = this.Bo();
        this.k++;
        this.l = this.b.Ia;
        this.Gn()
    }
    ;
    d.Bo = function() {
        return this.k - this.g
    }
    ;
    d.fD = function() {
        this.g++;
        this.Gn()
    }
    ;
    d.EF = function() {
        var a = {
            a: "tv_crash"
        };
        a.startups = this.k;
        a.exits = this.g;
        a.last_count = this.j;
        a.start = this.l;
        z(a, this.b.tc());
        return a
    }
    ;
    d.Gn = function() {
        var a = {};
        a["startup-count"] = this.k;
        a["clean-exits"] = this.g;
        a["crash-count"] = this.j;
        a.startup = this.l;
        this.I.jn("crash-data", a)
    }
    ;
    rm.inject = ["environmentModel", "privateDataService"];
    function sm(a, b, c) {
        Z.call(this, a, b);
        this.j = c
    }
    B(sm, Z);
    sm.prototype.g = function() {
        var a = this.b.tc();
        z(a, this.j.kz());
        this.h("//www.youtube-nocookie.com/device_204", a, null, !0)
    }
    ;
    sm.inject = ["environmentModel", "privateDataService", "statsService"];
    function tm(a, b, c, e, f) {
        this.J = a;
        this.l = b;
        this.j = c;
        this.k = e;
        this.o = f;
        this.b = !1
    }
    tm.prototype.qa = function() {
        var a = y(this.g, this);
        this.J.addEventListener("beforeunload", a, !1);
        this.J.addEventListener("unload", a, !1)
    }
    ;
    tm.prototype.h = function() {
        this.k.fD();
        this.j.gD();
        this.o.eD();
        this.l.flush()
    }
    ;
    tm.prototype.g = function() {
        this.b || (this.h(),
        this.b = !0)
    }
    ;
    tm.inject = ["window", "localStorage", "activityReportingService", "crashReportingService", "remoteService"];
    function um(a, b) {
        this.g = a;
        this.h = b;
        this.j = !1;
        this.p = "pairingCode";
        this.C = "v";
        this.w = "t"
    }
    um.prototype.qa = function() {
        if (!this.b && this.h.isSupported())
            try {
                this.b = this.k(),
                this.b.addRequestHandler("GET", "/", y(this.l, this)),
                this.b.addRequestHandler("POST", "/", y(this.o, this))
            } catch (a) {
                console.error("Steel Dial Server Creation exception: " + a)
            }
    }
    ;
    um.prototype.k = function() {
        return this.h.createServer("YouTube")
    }
    ;
    um.prototype.l = function(a, b) {
        var c = this.g.Gg()
          , e = '<?xml version="1.0" encoding="UTF-8"?><service xmlns="urn:dial-multiscreen-org:schemas:dial"><name>YouTube</name><options allowStop="false" /><state>' + (null != c || this.j ? "running" : "stopped") + "</state>";
        null != c && (e += '<additionalData xmlns="http://www.youtube.com/dial"><screenId>' + c + "</screenId></additionalData>");
        b.mimeType = 'text/xml; charset="utf-8"';
        b.responseCode = 200;
        b.body = e + "</service>";
        return !0
    }
    ;
    um.prototype.o = function(a, b) {
        var c = Xf(a.body);
        if (c.hasOwnProperty("pairingCode") && c.pairingCode) {
            this.g.Cq(c.pairingCode);
            this.j = !0;
            if (c.v) {
                var e = parseFloat(c.t);
                this.g.Hn(c.v, isNaN(e) ? 0 : e)
            }
            b.responseCode = 201;
            b.addHeader("LOCATION", "http://" + a.host + a.path + "/run");
            b.mimeType = 'text/plain; charset="utf-8"';
            b.body = "";
            return !0
        }
        return !1
    }
    ;
    um.inject = ["remoteService", "dialApi"];
    function vm(a, b, c, e, f, g, k, l, n, q, s, r, u) {
        this.w = a;
        this.b = b;
        this.k = c;
        this.p = e;
        this.g = f;
        this.j = g;
        this.o = k;
        this.C = l;
        this.l = n;
        this.H = q;
        this.F = s;
        this.I = r;
        this.h = u
    }
    d = vm.prototype;
    d.bootstrap = function() {
        this.ry();
        this.ny();
        this.my();
        this.qy();
        this.py();
        if (this.g.yg && this.b.contains("templateResolver"))
            this.b.oy();
        else {
            var a = this.b;
            a.ha(N.D + "/rebound/advertisement_callout.html", '<div>  <div class="advertisement-tooltip">    [[Advertisement|Tooltip stating that the video currently playing is an advertisement.]]    (<span class="remaining_duration">{{remainingDuration}}</span>)  </div>  <div class="countdown-ad-callout">    <div class="time-left-label">      [[Your video will play in <span class="time-left">{{remainingSeconds}}</span>s|Label preceeding the number of seconds countdown for when the currently playing ad will finish, and when the main video will begin.]]    </div>    <div class="skip-time-label" style="display: none">      [[You can skip to video in <span class="skip-time">{{skipTime}}</span>|Label preceeding the number of seconds before the user can skip the remainder of the ad and begin playing the main video.]]    </div>    <img class="thumbnail" x-src="{{imageSource}}"/>  </div>  <div class="skip-ad-callout" style="display: none">    <span class="icon">&nbsp;</span>    <span class="label">[[Skip ad|Label indicating action that the user can take to skip the ad.]]</span>  </div></div>');
            a.ha(N.D + "/rebound/button.html", "<div>{{model.label}}</div>");
            a.ha(N.D + "/rebound/call_to_cast.html", '<div>  <h2 class="call-to-cast-text">[[Ready to watch?|Title of the instructions screen encouraging user to take action.]]</h2>  <h3 class="call-to-cast-text">[[Choose a YouTube video on your mobile device or laptop, then watch it here.|Steps to be taken on paired device such as phone, laptop or tablet, to trigger a playback on TV, acting as a screen.]]</h3></div>');
            a.ha(N.D + "/rebound/color_button.html", '<div class="button">  <div class="preview {{model.payload.class}}"></div>  <span>{{model.label}}</span></div>');
            a.ha(N.D + "/rebound/dialogs/closed_captions.html", '<div id="closed-captions">  <div class="$list" id="display-properties-list" data-model="{{displayProperties}}" data-is-vertical="true" data-element-limit="6" data-catch-mouse-move="true" data-mouse-auto-scroll="false"></div>  <div class="$list" id="options-list" data-model="{{getOptionsForCurrentDisplayProperty()}}" data-is-vertical="true" data-element-limit="6" data-catch-mouse-move="true" data-mouse-auto-scroll="false"></div></div>');
            a.ha(N.D + "/rebound/dialogs/flag_options.html", '<div class="flag-list-container">  <div class="$grid flag-list" data-model="{{flagData}}"></div></div>');
            a.ha(N.D + "/rebound/dialogs/login_info.html", '<div>  <div class="connection-instructions">    <div class="remote-pair-icon"/></div>    <div class="connection-steps">      [[<div class="step1">Go To</div>      <div class="activation-url">youtube.com/activate</div>|Tells user that there\'s a URL here to navigate to]]      [[<div class="step2">and enter</div>      <div class="activation-code">{{activationCode}}</div>|Tells user this is the string to enter into the device.]]    </div>    <div class="connection-error hidden">[[Sign in is temporarily unavailable.<br/><br/>Please try again later.|Error message displayed when device fails to load activation code.]]</div>  </div></div>');
            a.ha(N.D + "/rebound/dialogs/qr_dialog.html", '<div>  <div class="box">[[On your phone or tablet, go to: <a class="base-url">{{displayUrl}}</a>|Explanation on how to access help and feedback web pages.]]</div>  <div class="box qr-code-wrapper">[[Or scan: <br><img class="qr" x-src="{{qrCodeImageUrl}}"/>|Explains alternative way of accessing help and feedback pages by scanning QR code.]]</div></div>');
            a.ha(N.D + "/rebound/dialogs/remote_pairing_info.html", '<div class="pairing">  <div class="connection-instructions">    <div class="remote-pair-icon"/></div>    <div class="dial-upsell">      [[Connect your mobile device to the same WiFi network, open YouTube and tap the <div class="cast-icon">&nbsp;</div> icon.|        A message hinting the user about the possibility to use the automatically detected send-to-TV function of the YouTube mobile client to connect.]]    </div>    <div class="connection-steps">      [[<div class="step1">Go to</div>        <div class="pair-url">youtube.com/pair</div>|Tells user that there\'s a URL here to navigate to]]      [[<div class="step2">and enter</div>        <div class="pair-code">{{displayPairingCode}}</div>|Tells user this is the string to enter into the device]]    </div>    <div class="qr-code-wrapper">      <div class="qr-code">        <div class="scan">[[Or scan|Title above QR code telling a user that it is possible to sign into account by using QR-code scanner.]]</div>        <img class="qr-code-image" x-src="{{qrCodeImageUrl}}" />      </div>    </div>    <div class="connected-list">      <div class="connected-header">[[Connected|Heading for a list of devices connected to the application.]]</div>      <ul class="$list devices" data-model="{{connectedDevices}}">        <li class="{{model.deviceClass}}">{{model.displayString}}</li>      </ul>    </div>  </div></div>');
            a.ha(N.D + "/rebound/engagement_indicator.html", '<div>  <div class="stop-listening">    <span class="icon"></span>    <span class="title">{{stopPhrase}}</span>  </div></div>');
            a.ha(N.D + "/rebound/feed_icon.html", '<div>  <div class="{{iconClass}}" style="background-image:{{iconBackground}}"></div>  <h2>{{title}}</h2></div>');
            a.ha(N.D + "/rebound/legend.html", '<div>  <div class="more"><span class="icon"></span><span class="title">{{showMoreLabel}}</span></div>  <div class="back"><span class="icon"></span><span class="title">{{goBackLabel}}</span></div>  <div class="reversed-back"><span class="icon"></span><span class="title">{{goBackLabel}}</span></div>  <div class="search"><span class="icon"></span><span class="title">{{searchLabel}}</span></div>  <div class="home"><span class="icon"></span><span class="title">{{goHomeLabel}}</span></div>  <div class="delete"><span class="icon"></span><span class="title">{{deleteLabel}}</span></div></div>');
            a.ha(N.D + "/rebound/progress_bar.html", '<div class="{{getRootClassName()}}">  <div class="loaded" style="width:{{getLoadedWidth()}}" ></div>  <div class="played" style="width:{{getPlayedWidth()}}"></div></div>');
            a.ha(N.D + "/rebound/subtitled_button.html", '<div class="button">  <span>{{model.label}}</span>  <span class="subtitle">{{model.subtitle}}</span></div>');
            a.ha(N.D + "/rebound/suggestions.html", '<div>  <ul class="$list" data-model="{{model.suggestions}}" data-catch-mouse-move="true">    <li>{{model}}</li>  </ul></div>');
            a.ha(N.D + "/rebound/super_scroller.html", '<div>  <div class="$list" data-model="{{collection}}">    <div class="$feed-icon"></div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/action.html", '<div class="item action-tile">  <div class="content {{model.tileClass}}">    <div class="title">{{model.title}}</div>    <div class="large-action-icon {{model.iconClass}}"></div>    <div class="description">{{model.description}}</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/kenko.html", '<div class="item action-tile">  <div class="content">    <div class="title">\u5065\u5eb7\u306e\u305f\u3081\u306e<br>\u3054\u6ce8\u610f</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/playlist_tile.html", '<div class="item video-tile playlist-tile">  <div class="top">    <div class="video-thumb"></div>    <div class="voice-command">{{getSpeechPhrase()}}</div>    <div class="count-overlay"><span class="video-count">{{model.videoCount}}</span> <span>{{model.videoString}}</span></div>  </div>  <div class="bottom">    <div class="title">{{model.title}}</div>    <div class="details">      <span class="name">{{model.channel.displayName}}</span>      <span class="updated">{{model.uploadedDateLabel}}</span>    </div>    <div class="set">      <span class="title">{{model.firstVideoTitle}}</span>      <span class="count">[[1 of {{model.videoCount}}|Label describing the position of the first video in the playlist.]]</span>    </div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/post_play_tile.html", '<div>  <div class="post-play-title">    <span class="default-title">[[You may also like...|Label informing the user that they may enjoy these videos.]]</span>    <span class="next-up-title">[[Next up in <span class="row-title">{{getRowTitle()}}</span>|Informs the user of the next video that will play in this playlist. This is followed by the title of the playlist.]]</span>  </div>  <div class="$videoTile" data-model="{{model}}"></div>  <div class="post-play-countdown">{{countdown}}</div></div>');
            a.ha(N.D + "/rebound/tiles/recent_search.html", '<div class="item action-tile">  <div class="content recent-search-tile">    <div class="top">      <div class="video-thumb" style="background-image: url({{model.imageUrl}});"></div>    </div>    <div class="bottom">      <div class="title">{{model.title.toLowerCase()}}</div>      <div class="overlay">[[{{model.totalResultsLocalized}} results|Displays how many different searches a user has performed.]]</div>    </div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/remote_pairing.html", '<div class="item action-tile">  <div class="content">    <div class="title {{model.getTitleClass()}}">{{model.getTitle()}}</div>    <div class="remote-pair-icon"></div>    <div class="remote-pair-text">[[Find videos on your mobile device and watch on your TV.|Tooltip explains that a user will be able to use their mobile device to find videos and watch them via the application.]]</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/reset_pairing.html", '<div class="item action-tile">  <div class="content">    <div class="title">{{model.title}}</div>    <div class="remote-reset-phone">      <div class="remote-count">{{model.deviceCount}}</div>    </div>    <div class="remote-reset-help">[[Delete all paired devices?|Button that allows a user to disconnect mobile phones from the application.]]</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/search.html", '<div class="item action-tile">  <div class="content search-tile">    <div class="title">[[Search|Clicking this launches the search interface.]]</div>    <div class="large-action-icon search-icon"></div>    <div class="description">[[{{model.searchCount}} recent search(es)|Displays how many search a user has performed recently.]]</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/shiyojo.html", '<div class="item action-tile">  <div class="content">    <div class="title">\u4f7f\u7528\u4e0a\u306e<br>\u3054\u6ce8\u610f</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/sign_out.html", '<div class="item action-tile">  <div class="content">    <div class="title display-name">{{model.getTitle()}}</div>    <div class="platform-container">      <div class="platform-user-icon" style="background-image:url({{model.channel.platformUserIcon}})"></div>      <span class="platform-user-name">{{model.channel.platformUserName}}</span>    </div>    <div class="sign-out-user-icon" style="background-image:url({{model.channel.imageUrl}})"></div>    <div class="sign-out-username">{{model.getUserName()}}</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/togglable.html", '<div class="item action-tile">  <div class="content">    <div class="title">{{model.title}}</div>    <div class="status">      <div>{{model.getToggleStatus()}}</div>      <div class="icon {{model.getToggleClass()}}"></div>    </div>    <div class="description">{{model.description}}</div>  </div></div>');
            a.ha(N.D + "/rebound/tiles/video_tile.html", '<div class="item video-tile">  <div class="top">    <div class="video-thumb"></div>    <div class="voice-command">{{getSpeechPhrase()}}</div>    <div class="duration hidden">{{model.durationLabel}}</div>  </div>  <div class="bottom">    <div class="title">{{model.title}}</div>    <div class="overlay">      [[Published on <span class="updated">{{model.uploadedDateLabel}}</span> by <span class="name">{{model.channel.displayName}}</span>|Label that represents the date when a video was uploaded.]]    </div>    <div class="details">      <div class="activity">{{model.activityDescription}}</div>      <div class="description">{{getDescriptionText()}}</div>    </div>  </div></div>');
            a.ha(N.D + "/rebound/transliteration.html", '<div>  <div class="$list" data-model="{{transliterations}}">  </div></div>');
            a.ha(N.D + "/rebound/voice_footer.html", "<ul>  <li>{{model}}</li></ul>");
            a.ha(N.D + "/rebound/watch_title_tray.html", '<div class="title-card">  <div class="player-meta">    <div class="player-video-avatar" style="background-image:url(\'{{channelAvatarUrl}}\')"></div>    <div class="player-video-title">{{videoTitle}}</div>    <div class="player-video-details">      <div class="username">{{channelName}}</div>      <div class="set-context hidden">[[{{playlistTitle}}: {{videoIndex}} of {{videoCount}}|The playlist title and the index of the current video in the playlist.]]</div>      <div class="uploaded-date">{{uploadedDate}}</div>      <div class="view-count"><span>[[Views:|VIEWS]] </span><span class="view-count-label">{{viewCountLabel}}</span></div>    </div>  </div></div>')
        }
        this.C.flush()
    }
    ;
    d.ry = function() {
        this.w.body.className = this.g.Dg
    }
    ;
    d.ny = function() {
        for (var a = ["gestureService", "resizeService", "soundService"], b = 0, c = a.length; b < c; ++b)
            this.b.get(a[b])
    }
    ;
    d.my = function() {
        this.j.qa();
        this.o.qa();
        this.l.qa();
        this.I.qa()
    }
    ;
    d.qy = function() {
        this.k.g();
        this.p.qa()
    }
    ;
    d.py = function() {
        this.h.isSupported() && this.h.registerExperiments(this.g.tf())
    }
    ;
    vm.inject = "document injector retentionReportingService crashReportingService environmentModel bountyService steelDialService localStorage shutdownService activityReportingService backendErrorReporting remoteService systemApi".split(" ");
    function wm(a) {
        K.call(this);
        this.g = a;
        this.b = {};
        this.Rz()
    }
    B(wm, K);
    d = wm.prototype;
    d.Rz = function() {
        for (var a in ed)
            this.il(ed[a])
    }
    ;
    d.il = function(a) {
        var b = this.g.Oz(a);
        this.b[a] = new Il(b)
    }
    ;
    d.get = function(a, b) {
        return this.b[a] && this.b[a].get(b)
    }
    ;
    d.qR = function(a) {
        return this.b[a] && this.b[a].Jb()
    }
    ;
    d.add = function(a, b, c) {
        this.b[a] && (this.b[a].add(b, c),
        this.T("cache:changed", a))
    }
    ;
    d.jQ = function(a, b) {
        if (this.b[a]) {
            for (var c in b)
                this.b[a].add(c, b[c]);
            this.T("cache:changed", a)
        }
    }
    ;
    wm.inject = ["environmentModel"];
    function xm(a) {
        this.g = a;
        this.b = new Xd(10,!0);
        this.Pz()
    }
    d = xm.prototype;
    d.xq = function(a, b, c) {
        this.b.Ef(a, this.zp(a, b ? b.videoId : null, c));
        a = this.b.map(function(a, b) {
            return this.zp(b, a.videoId, a.totalResults)
        }, this);
        this.g.Da("recent-searches", a)
    }
    ;
    d.load = function() {
        return this.b.ua()
    }
    ;
    d.clear = function() {
        this.b.clear();
        this.g.remove("recent-searches");
        this.g.flush()
    }
    ;
    d.zp = function(a, b, c) {
        return {
            query: a,
            videoId: b,
            totalResults: c
        }
    }
    ;
    d.Pz = function() {
        var a = this.g.get("recent-searches") || [];
        Ja(a, function(a) {
            this.b.Ef(a.query, a)
        }, this)
    }
    ;
    xm.inject = ["localStorage"];
    function ym(a, b, c) {
        K.call(this);
        this.J = a;
        this.b = b;
        this.h = c;
        this.g = {
            exp: y(this.Nw, this),
            f5: y(this.Rw, this),
            hl: y(this.Tw, this),
            http: y(this.Sw, this),
            keys: y(this.Pw, this),
            lbl: y(this.Ow, this),
            lclr: y(this.Lw, this),
            ld: y(this.Kw, this),
            llock: y(this.Uw, this),
            mdiag: y(this.Qw, this),
            movies: y(this.Mw, this),
            stagegdata: y(this.Vw, this)
        }
    }
    B(ym, K);
    var zm = /[-_]/
      , Am = /^[a-z]+$/
      , Bm = /^[a-f0-9]{8}$|^[a-z]+$/
      , Cm = /^[a-z]+$/;
    ym.prototype.isActive = function() {
        return !!this.b.I
    }
    ;
    d = ym.prototype;
    d.ex = function(a) {
        if (a && " " == a[a.length - 1]) {
            var b = a.toLowerCase().split(" ")
              , c = b[0];
            if (c)
                if (this.isActive()) {
                    if (c in this.g)
                        return b = b.slice(1, b.length - 1),
                        (c = this.g[c](b)) && this.h.xq(a, null, 0),
                        c
                } else
                    return this.SC(c)
        }
        return !1
    }
    ;
    d.SC = function(a) {
        this.b.I = "mcvpanta" == a;
        return this.isActive()
    }
    ;
    d.Rw = function() {
        this.J.location.hash = "";
        this.J.location.reload(!0);
        return !0
    }
    ;
    d.Tw = function(a) {
        a = a[0];
        if (!a)
            return !1;
        a = a.replace(zm, "");
        if (!Am.test(a))
            return !1;
        3 < a.length && (a = a.substr(0, 2) + "_" + a.substr(2).toUpperCase());
        this.gf(Yf("/tv", {
            hl: a
        }));
        return !0
    }
    ;
    d.Sw = function() {
        this.gf("http://www.youtube.com/tv");
        return !0
    }
    ;
    d.Pw = function() {
        this.gf("https://kcdsfrdvcs.appspot.com");
        return !0
    }
    ;
    d.Ow = function(a) {
        return 1 == a.length && (a = a[0],
        Bm.test(a)) ? (a = Yf("/tv", {
            label: a
        }),
        this.gf(a),
        !0) : !1
    }
    ;
    d.Kw = function(a) {
        return 1 == a.length && (a = a[0],
        Cm.test(a)) ? (a = Yf("/tv", {
            loader: a
        }),
        this.gf(a),
        !0) : !1
    }
    ;
    d.Qw = function() {
        Gf(N.Fj + "/modules/media-diagnostics.js");
        return !0
    }
    ;
    d.Mw = function() {
        return this.b.supportsDrm = !0
    }
    ;
    d.Vw = function() {
        return this.b.useStageGdata = !0
    }
    ;
    d.gf = function(a) {
        this.J.location.href = a
    }
    ;
    d.Nw = function(a) {
        var b = 0 < a.length && "" === a.pop() && a;
        return v(b) && !Ma(b, isNaN) ? (a = Yf("/tv", {
            env_forcedExperiments: a.join(",")
        }),
        this.gf(a),
        !0) : !1
    }
    ;
    d.Uw = function(a) {
        return 1 == a.length && (a = a[0],
        Bm.test(a)) ? (Lg.jk("yt-dev.stickyLabel", a, 86400, "/", document.domain || "google.com"),
        !0) : !1
    }
    ;
    d.Lw = function() {
        Ng("stickyLabel", "/", document.domain);
        return !0
    }
    ;
    ym.inject = ["window", "environmentModel", "searchHistoryService"];
    function Dm(a, b, c) {
        this.j = a;
        this.b = b;
        this.h = [];
        this.g = (a = this.b.get("device-retention-permission", 31536E4)) ? a.enabled : !0;
        this.k = c.lf(this.b.flush, 1E3, this.b);
        this.l = "private_data"
    }
    d = Dm.prototype;
    d.QD = function(a) {
        this.g = a;
        this.b.Da("device-retention-permission", {
            enabled: a
        }, 31536E4);
        this.jy();
        this.k.od()
    }
    ;
    d.Kv = function(a) {
        this.h.push(a)
    }
    ;
    d.jy = function() {
        this.b.remove("private_data");
        this.h.forEach(function(a) {
            a()
        }, this)
    }
    ;
    d.jn = function(a, b) {
        this.g && this.rE(a, b)
    }
    ;
    d.Mp = function(a) {
        var b = this.b.get("private_data", 31536E3);
        return b ? b[a] : null
    }
    ;
    d.rE = function(a, b) {
        var c = this.b.get("private_data") || {};
        c[a] = b;
        this.b.Da("private_data", c, 31536E3)
    }
    ;
    d.yH = function(a, b, c, e) {
        this.g ? e ? this.j.jsonp(a, b, c) : this.j.get(a, b, c) : c && c()
    }
    ;
    Dm.inject = ["ytHttp", "localStorage", "timeService"];
    function Em(a, b, c, e, f) {
        Z.call(this, c, e, "h5_exceptions_sw");
        this.j = a;
        this.J = b;
        this.k = f;
        this.g = {};
        Xi(y(this.rB, this))
    }
    B(Em, Z);
    d = Em.prototype;
    d.Mk = function() {
        return this.b.im && Em.A.Mk.call(this) || this.b.I
    }
    ;
    d.rB = function(a) {
        this.js(a.error, a)
    }
    ;
    d.js = function(a, b) {
        var c = this.cE(a)
          , e = b ? b.YD : ""
          , f = Zi(b || a)
          , g = f.message;
        console.error(c ? c : g);
        this.g[g] || (this.dE(f.name, g, f.fileName, f.lineNumber, e, c),
        this.g[g] = !0)
    }
    ;
    d.cE = function(a) {
        return a ? a.stacktrace || a.stack : ""
    }
    ;
    d.dE = function(a, b, c, e, f, g) {
        var k = {
            a: "logerror"
        }
          , l = this.j.get("watchModel");
        k.type = a;
        k.msg = b;
        k.vid = l.currentVideo ? l.currentVideo.videoId : "";
        a = this.j.get("locationService").sf();
        a = this.k.bn(a);
        k.screen = a;
        z(k, this.b.tc());
        k.t = "jserror";
        k.file = c;
        k.line = e;
        k.col = f;
        k.url = this.J.location.href;
        k.label = this.b.Rd;
        c = Vf(k);
        c = 2047 - Yf("/gen_204", c).length + 26;
        g = encodeURIComponent(g);
        g = g.substr(0, c);
        c = g.lastIndexOf("%");
        2 >= g.length - c && (g = g.substr(0, c));
        k.stack = decodeURIComponent(g);
        this.h("/gen_204", k)
    }
    ;
    Em.inject = ["injector", "window", "environmentModel", "privateDataService", "activityReportingService"];
    function Mm(a, b, c, e, f) {
        this.l = b;
        this.k = this.j(a, c);
        this.o = e;
        this.b = f
    }
    Mm.prototype.j = function(a, b) {
        switch (b) {
        case "delete":
            return y(a.MK, a);
        case "post":
            return y(a.post, a);
        default:
            return y(a.get, a)
        }
    }
    ;
    Mm.prototype.send = function(a, b, c) {
        var e = "https://yt2009.truehosting.net/feeds/api" + this.o
          , f = "";
        if (this.b && a)
            var g = eg(this.b, a)
              , f = eg(this.g(), {
                body: g
            });
        this.l.Ib(y(function(g) {
            g && this.k(e, a, f, b, c, this.h(g))
        }, this))
    }
    ;
    Mm.prototype.h = function(a) {
        return {
            Authorization: "Bearer " + a,
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "Content-Type": "application/atom+xml",
            "GData-Version": "2"
        }
    }
    ;
    Mm.prototype.g = function() {
        return '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom" xmlns:yt="http://gdata.youtube.com/schemas/2007">{body}</entry>'
    }
    ;
    function Nm(a) {
        this.b = [];
        this.g = a
    }
    d = Nm.prototype;
    d.nR = function() {
        return this.b
    }
    ;
    d.zD = function(a) {
        this.ik(a) && (this.rC(a),
        this.b.push(a))
    }
    ;
    d.CG = function() {
        this.b.pop();
        return this.b.pop()
    }
    ;
    d.rC = function(a) {
        this.ik(a) && (this.b = this.b.filter(function(b) {
            return !this.sC(b, a)
        }, this))
    }
    ;
    d.kD = function() {
        this.b.length = 0
    }
    ;
    d.br = function(a) {
        this.ik(a) && this.g.zr(a)
    }
    ;
    d.ik = function(a) {
        return "state"in a && "mode"in a
    }
    ;
    d.sC = function(a, b) {
        var c = a.mode
          , e = b.mode
          , f = c === e
          , g = "" !== c && "" !== e
          , k = a.state === b.state;
        return k && f || f && g || k && g && c !== e
    }
    ;
    Nm.inject = ["activityReportingService"];
    function Om(a, b, c, e, f, g, k, l, n, q, s, r, u, O) {
        this.F = a;
        this.H = b;
        this.M = c;
        this.h = e;
        this.G = f;
        this.N = g;
        this.C = k;
        this.l = l;
        this.o = n;
        this.O = q;
        this.j = s;
        this.p = r;
        this.I = u;
        this.w = O
    }
    Om.prototype.load = function(a) {
        function b() {
            0 == --e && a(Wa(c))
        }
        var c = [];
        c[0] = [this.b({
            Lc: this.F,
            title: "[[What to Watch|Title of a list of videos which mix therecommendations and the subscriptions of a user.]]",
            bb: "icon-star"
        }), this.b({
            Lc: this.I,
            title: "[[My Subscriptions|Title for a list of videos that includes all of the channels that this user has subscribed to.|9186267]]",
            bb: "icon-subscribe"
        })];
        c[3] = [this.b({
            Lc: this.G,
            title: "[[My Favorites|Title of playlist of the users favorite videos.]]",
            bb: "icon-star"
        })];
        c[6] = [{
            Lc: this.H,
            title: "[[Recommended Videos for You|Title of playlist with videos recommended to a user.]]",
            bb: "icon-reward"
        }, {
            Lc: this.h,
            title: "[[My Uploads|Playlist title for videos uploaded by the current user.]]",
            bb: "icon-upload"
        }, {
            Lc: this.N,
            title: "[[My Watch History|Title of a playlist with recently watched videos.]]",
            bb: "icon-hourglass"
        }, {
            Lc: this.C,
            title: "[[My Activity|Title of a playlist with videos a user recently liked, or subscribed to.]]",
            bb: "icon-speechbubble"
        }, {
            Lc: this.M,
            title: "[[My Watch Later Videos|Title of a playlist with videos a user was planning to watch later.]]",
            bb: "icon-player-watchlater"
        }].map(y(this.b, this));
        var e = 4;
        this.o.ec("start_browse", "", "us_rs", "us_r");
        var f = y(function(a, e) {
            var l = 50 * a;
            e && l > Math.min(e.dc, 100) ? this.g(c, b, e, this.h, "displayName", 1, y(function(a) {
                return this.w.cc(a)
            }, this)) : (l += 1,
            this.o.ab("default", y(function(b) {
                e ? e.S.push(b.S.la()) : e = b;
                f(a + 1, e)
            }, this), {
                "start-index": l
            }, function() {
                e || (e = new Y);
                f(a + 1, e)
            }))
        }, this);
        f(0);
        this.l.ec("start_browse", "", "up_rs", "up_r");
        this.l.ab("default", y(function(a) {
            this.g(c, b, a, this.O, "title", 2, function() {
                return "icon-playlist"
            })
        }, this), null, y(this.k, this, c, b, 2));
        this.p.ec("start_browse", "", "feed_rs", "feed_r");
        this.p.load({}, y(function(a) {
            c[4] = a;
            b()
        }, this));
        this.j.ec("start_browse", "", "si_rs", "si_r");
        this.j.load({
            query: "default",
            type: "channel"
        }, y(function(a) {
            this.g(c, b, a, this.h, "displayName", 5, y(function(a) {
                return this.w.cc(a)
            }, this))
        }, this), y(this.k, this, c, b, 5))
    }
    ;
    Om.prototype.g = function(a, b, c, e, f, g, k) {
        a[g] = c.S.la().map(function(a) {
            return Kk(e, a[f], k(a.id), a.id)
        }, this);
        b()
    }
    ;
    Om.prototype.k = function(a, b, c) {
        a[c] = [];
        b()
    }
    ;
    Om.prototype.b = function(a) {
        return Kk(a.Lc, a.title, a.bb, "default")
    }
    ;
    Om.inject = "riverService recommendedVideosService watchLaterService userUploadsService userFavoritesService watchHistoryService activityService userPlaylistsService userSubscriptionsService playlistService channelSuggestionService featuredService newSubscriptionsService ytThumbnails".split(" ");
    function Pm(a) {
        this.b = a.document.body;
        a.addEventListener("resize", y(this.g, this), !1);
        this.g()
    }
    Pm.prototype.g = function() {
        Xc(this.b, "fontSize", dg(this.b.offsetHeight / 720))
    }
    ;
    Pm.inject = ["window"];
    function Qm(a, b) {
        K.call(this);
        this.J = b;
        this.k = "";
        this.h = {};
        this.l = "";
        this.j = this.p(a)
    }
    B(Qm, K);
    Qm.prototype.p = function(a) {
        var b = a.$on("$routeChangeStart", y(function(a, b, f) {
            this.T("beforeRouteChange", b, f)
        }, this));
        a = a.$on("$routeChangeSuccess", y(function(a, b, f) {
            this.T("afterRouteChange", b, f)
        }, this));
        return [b, a]
    }
    ;
    Qm.prototype.R = function() {
        for (var a = 0, b = this.j.length; a < b; ++a)
            this.j[a]();
        this.j = null;
        Qm.A.R.call(this)
    }
    ;
    var Rm = /#\/?(.*?)(?:\?|$)(.*)/;
    Qm.prototype.b = function() {
        this.o();
        return this.k
    }
    ;
    Qm.prototype.g = function() {
        this.o();
        return this.h
    }
    ;
    Qm.prototype.o = function() {
        var a = this.J.location.hash;
        this.l != a && (this.l = a,
        this.h = {},
        Rm.test(a) && (a = a.match(Rm),
        this.k = a[1],
        a[2] && this.w(a[2])))
    }
    ;
    Qm.prototype.w = function(a) {
        a = a.split("&");
        for (var b = 0, c = a.length; b < c; ++b) {
            var e = a[b].split("=")
              , f = decodeURIComponent(e[0])
              , e = decodeURIComponent(e[1]);
            this.h[f] = e
        }
    }
    ;
    Qm.inject = ["$rootScope", "window"];
    function Sm(a, b, c, e) {
        Z.call(this, a, b);
        this.G = c;
        this.$a = e;
        this.k = !1;
        this.l = this.N = this.V = this.H = this.F = 0;
        this.j = [];
        this.g = [];
        this.w = 0;
        this.p = "";
        this.M = 0;
        this.o = -1;
        this.O = null
    }
    B(Sm, Z);
    var Tm = {
        Xi: "a",
        cv: "tt",
        bv: "qt",
        Xu: "hwl",
        Wu: "features",
        Vu: "ed",
        av: "ql",
        $u: "oc",
        Zu: "kpc",
        Yu: "kb",
        rL: "flt",
        dv: "slot"
    };
    d = Sm.prototype;
    d.sF = function() {
        this.k || (this.H = this.F = this.G.hc().getTime(),
        this.l = 0,
        this.p = "",
        this.o = -1,
        this.g.length = 0,
        this.j.length = 0,
        this.k = !0)
    }
    ;
    d.gF = function() {
        return this.k
    }
    ;
    d.vT = function(a) {
        var b = this.g.length;
        0 != b && this.g[b - 1] == a || this.g.push(a)
    }
    ;
    d.Gy = function() {
        var a = this.g.length;
        1 < a && (this.g[0] = this.g[a - 1],
        this.g.length = 1)
    }
    ;
    d.wF = function() {
        this.k && (this.p = "",
        this.Mr(),
        this.k = !1)
    }
    ;
    d.$z = function(a) {
        var b = this.G.hc().getTime();
        this.V = b - this.H;
        this.H = b;
        this.p = a;
        this.Mr()
    }
    ;
    d.Mr = function() {
        this.N = this.l;
        this.l = 0
    }
    ;
    d.$F = function() {
        ++this.M
    }
    ;
    d.Mh = function(a) {
        ++this.l;
        a && ++this.w
    }
    ;
    d.ep = function(a) {
        this.O = a;
        this.GH()
    }
    ;
    d.Zo = function() {
        this.w = 0
    }
    ;
    d.bq = function(a) {
        for (var b = 0, c = this.j.length; b < c; ++b)
            if (this.j[b] == a)
                return;
        this.j.push(a)
    }
    ;
    d.TF = function(a) {
        this.o = a
    }
    ;
    d.KF = function() {
        var a = {};
        a[Tm.Xi] = "tv_search";
        a[Tm.cv] = this.G.hc() - this.F;
        a[Tm.bv] = this.V;
        a[Tm.Zu] = this.N;
        0 < this.j.length && (a[Tm.Wu] = this.j.join(","));
        a[Tm.Vu] = this.w;
        a[Tm.av] = this.p.length;
        a[Tm.$u] = this.O;
        a[Tm.Xu] = this.M;
        a[Tm.Yu] = this.g.join(",");
        -1 != this.o && (a[Tm.dv] = this.o);
        z(a, this.b.tc());
        return a
    }
    ;
    d.GH = function() {
        this.h("/gen_204", this.KF())
    }
    ;
    Sm.$inject = ["environmentModel", "privateDataService", "timeService", "locale"];
    function Um(a, b, c, e, f) {
        this.p = a;
        this.k = b;
        this.g = c;
        this.j = e;
        this.l = f;
        this.b = new Gl(c,"searchTile","request-search",0);
        this.h = new U(c,"actionTile","request-clear-searches","[[CLEAR|A button that clears all of a users recent searches.]]","clear-search-icon","[[Clear search history|Displayed as menu item subtitle. Explains to a user that this item will clear previous search history.]]","search-tile")
    }
    Um.prototype.load = function(a, b) {
        var c = new Y
          , e = this.k.load();
        this.b.searchCount = e.length;
        c.S.push(this.b);
        for (var f = this.j.M, g = 0, k = e.length; g < k; ++g) {
            var l = e[g];
            c.S.push(new El(this.g,"recentSearchTile","request-recent-search",l.query,l.totalResults,l.videoId ? this.l.nf(l.videoId, f) : ""))
        }
        0 < e.length && c.S.push(this.h);
        b && b(c)
    }
    ;
    Um.prototype.o = function() {
        var a = this.g.P("[[Search|Clicking this launches the search interface.]]");
        return Hk(this, a, "icon-search", "searchRow")
    }
    ;
    Um.inject = ["$rootScope", "searchHistoryService", "locale", "environmentModel", "ytThumbnails"];
    function Vm(a, b, c, e, f, g, k, l, n, q, s, r, u) {
        Ai.call(this, a, b, c, e, f, g, k, l, s, r, u);
        this.M = n;
        this.pe = q
    }
    B(Vm, Ai);
    Vm.prototype.Ve = function(a, b, c, e) {
        a.Ka = this.M;
        return Ai.prototype.Ve.call(this, a, b, c, e)
    }
    ;
    Vm.inject = "name path csiService ytHttp environmentModel authService cacheService backendErrorReporting listType brandable parser paramKey params".split(" ");
    function Wm(a, b, c, e, f, g, k) {
        Vm.call(this, "searchService", "/videos", a, b, c, e, f, g, "SR", !1, k, "q", {
            fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaded,yt:uploaderId,media:credit,media:description)),openSearch:totalResults",
            "max-results": 50
        });
        this.C = {};
        this.h = "relevance";
        this.serviceQuery = ""
    }
    B(Wm, Vm);
    Wm.prototype.load = function(a, b) {
        var c = this.j(a);
        return c.query ? Wm.A.load.call(this, c, b) : (c = new this.o.b,
        b && b(c),
        new ri(c))
    }
    ;
    Wm.prototype.j = function(a) {
        var b = {};
        z(b, this.C);
        !1 === b.hd && delete b.hd;
        a && z(b, a);
        this.h && (b.orderby = this.h);
        return b
    }
    ;
    Wm.prototype.O = function() {
        this.serviceQuery = ""
    }
    ;
    Wm.inject = "csiService ytHttp environmentModel authService cacheService backendErrorReporting videoParser".split(" ");
    function Xm(a, b, c, e, f, g, k, l, n, q, s) {
        this.O = a;
        this.I = b;
        this.H = c;
        this.N = e;
        this.j = f;
        this.h = g;
        this.F = k;
        this.G = l;
        this.g = n;
        this.w = q;
        this.l = s;
        this.M = {};
        this.C = new U(n,"actionTile","request-login","[[SIGN IN|Title of menu item which allows a user to sign in to the application with a YouTube account and see personalized content.]]","sign-in-user-icon","[[View your subscriptions, uploads, playlists, likes and more.|Explanatory text on a menu item. Explains access to what features a user will get access when she logs in.]]");
        this.p = new ji(n,"signOutTile","request-logout");
        this.o = this.h.supportsPairing && new Dl(n,"pairTile","request-pairing",this.j.Hg().Y()) || null;
        this.k = this.h.supportsPairing && new Fl(n,"resetPairingTile","request-remote-reset","[[DELETE|Title of the button that disconnects mobile phones from the application]]",this.j.Ig().Y()) || null;
        this.b = null;
        this.h.supportsPairing && this.j.B("pairing:changed", y(this.eu, this))
    }
    d = Xm.prototype;
    d.Xw = function() {
        this.b = [];
        if (this.h.supportsSounds) {
            var a = new Hl(this.g,"toggleTile","request-toggle-sounds","[[Sounds|Title for a tile that toggles sounds.]]","[[Turn on or off application sounds.|Description for a tile that toggles sounds made by the YouTube TV application]]",y(function() {
                return this.G.enabled
            }, this));
            this.b.push(a)
        }
        a = new U(this.g,"actionTile","request-view-help","[[Help|A button title that provides an access to the help page.]]","help-icon");
        this.b.push(a);
        a = new U(this.g,"actionTile","request-view-feedback","[[Feedback|A button title that provides an access to the feedback page.]]","feedback-icon");
        this.b.push(a);
        a = new Hl(this.g,"toggleTile","request-device-retention","[[Improve YouTube|Title for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]","[[Help improve YouTube by sending anonymous usage data.|Description for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]",y(function() {
            return this.F.g
        }, this));
        this.b.push(a);
        if (this.l.isSupported() && this.l.isUiRequired()) {
            var a = new Hl(this.g,"toggleTile","request-toggle-cookies","[[Cookies|Title for a tile that toggles cookies]]","[[Enable or disable cookies.|Description for a tile that toggles cookies]]",y(function() {
                return this.l.enabled
            }, this))
              , b = new U(this.g,"actionTile","request-clear-cookies","[[Clear Cookies|Title for a tile that removes cookies]]","warning");
            this.b.push(a);
            this.b.push(b)
        }
        this.h.I && (a = new Hl(this.g,"toggleTile","request-toggle-video-info","Show Video Info","",y(function() {
            return this.h.isVideoInfoVisible
        }, this)),
        b = new U(this.g,"actionTile","request-debug-info","SHOW DEBUG INFO","warning"),
        this.b.push(a),
        this.b.push(b));
        this.h.vm && (a = new U(this.g,"actionTile","request-view-credits","[[CREDITS|Button that shows credit information, giving credit to all open-source software used in building this product.]]"),
        this.b.push(a));
        this.w.isSupported() && this.w.showUsageWarning && (a = new U(this.g,"kenkoTile","request-view-kenko"),
        b = new U(this.g,"shiyojoTile","request-view-shiyojo"),
        this.b.push(a),
        this.b.push(b));
        a = new U(this.g,"actionTile","request-view-tos","[[Terms of Service and Privacy|Title of menu item which shows links to terms of service and privacy documents on youtube.com]]");
        this.b.push(a)
    }
    ;
    d.eu = function() {
        this.wH();
        this.I.ic()
    }
    ;
    d.wH = function() {
        this.o.deviceCount = this.j.Hg().Y();
        this.k.deviceCount = this.j.Ig().Y()
    }
    ;
    d.load = function(a, b) {
        var c = b || p;
        this.H.Ib(y(function(a) {
            a ? this.N.ab("default", y(this.zs, this, c), null, y(this.zs, this, c, null)) : this.Lr(c, null)
        }, this))
    }
    ;
    d.zs = function(a, b) {
        b || (b = new ig("",""));
        this.h.Rr(b);
        this.Lr(a, b)
    }
    ;
    d.Lr = function(a, b) {
        this.p.channel = b;
        var c = [];
        c.push(b ? this.p : this.C);
        this.h.supportsPairing && (c.push(this.o),
        0 < this.k.deviceCount && c.push(this.k));
        this.b && !this.h.I || this.Xw();
        var e = new Y;
        e.S.ja(c.concat(this.b));
        a(e)
    }
    ;
    d.Hv = function() {
        var a = this.g.P("[[Sign In & Settings|Menu item title that allows a user to sign in or change settings of the application.]]");
        return Hk(this, a, "icon-player-settings", "settingsRowService")
    }
    ;
    Xm.inject = "locationService angularHelper authService userProfileService remoteService environmentModel privateDataService soundService locale systemApi cookiesApi".split(" ");
    function Ym(a, b, c) {
        this.j = b;
        this.h = new Il(50);
        this.enabled = this.j.get("sound-enabled");
        void 0 === this.enabled && this.Ra();
        b = typeof a.webkitAudioContext;
        a = typeof a.AudioContext;
        if ("function" == b || "object" == b)
            this.b = new webkitAudioContext;
        else if ("function" == a || "object" == a)
            this.b = new AudioContext;
        this.b ? c.B("play-sound", y(this.k, this)) : console.error("Sound Service was created, but the platform has no audio context!")
    }
    Ym.prototype.k = function(a) {
        if (this.enabled) {
            a = a.detail;
            var b = this.h.get(a);
            b ? this.g(b) : (b = new Sl(N.Fj + "/sound/" + a + ".wav"),
            this.h.add(a, b),
            b.g(this.b, y(this.g, this, b)))
        }
    }
    ;
    Ym.prototype.g = function(a) {
        if (a.b) {
            var b = this.b.createBufferSource();
            b.buffer = a.b;
            b.connect(this.b.destination);
            b.start(0)
        }
    }
    ;
    Ym.prototype.Ra = function() {
        this.enabled = !this.enabled;
        this.j.Da("sound-enabled", this.enabled)
    }
    ;
    Ym.$inject = ["window", "localStorage", "rootDispatcher"];
    function Zm(a, b, c) {
        Z.call(this, a, b);
        this.k = c;
        this.g = !1;
        this.j = []
    }
    B(Zm, Z);
    var $m = {
        Xi: "a",
        AA: "t",
        zA: "s",
        yA: "alt"
    };
    d = Zm.prototype;
    d.LF = function() {
        var a = {};
        a[$m.Xi] = "tv_speech";
        var b = this.j.shift();
        a[$m.AA] = b.text;
        a[$m.zA] = b.mx;
        a[$m.yA] = b.alternates;
        z(a, this.b.tc());
        return a
    }
    ;
    d.JU = function() {
        return this.g
    }
    ;
    d.Qk = function(a) {
        if (this.g) {
            var b, c, e = [];
            if (a && a.text && 0 < a.confidenceScore) {
                b = a.text.toLowerCase();
                c = (100 * a.confidenceScore).toFixed();
                for (var f = 0, g = Math.min(3, a.alternates.length); f < g; ++f) {
                    var k = a.alternates[f];
                    e.push(k.text.toLowerCase() + "_" + (100 * k.confidenceScore).toFixed())
                }
            } else
                b = "",
                c = 0;
            this.j.push({
                text: b,
                mx: c,
                alternates: e.join("-")
            });
            this.aD()
        }
    }
    ;
    d.vu = function() {
        this.g = !0
    }
    ;
    d.KU = function() {
        this.g = !1
    }
    ;
    d.aD = function() {
        this.h("/gen_204", this.LF())
    }
    ;
    Zm.inject = ["environmentModel", "privateDataService", "timeService"];
    function an(a, b, c, e, f) {
        bh.call(this, a, b, c, e);
        this.j = this.k = !1;
        this.l = [];
        this.F = f
    }
    B(an, bh);
    d = an.prototype;
    d.ah = function(a) {
        this.k ? a(this.j, this.h) : this.Xq(y(function(a, c) {
            a(!!c, !!c)
        }, this, a))
    }
    ;
    d.Ib = function(a) {
        var b = this.ml();
        !b && this.j || !this.k ? this.Xq(a) : a(b)
    }
    ;
    d.wd = function() {
        this.j = !1;
        an.A.wd.call(this)
    }
    ;
    d.ys = function() {
        this.b.post("https://www.youtube.com/api/xbox/deregister", null, {
            style: "json"
        })
    }
    ;
    d.ns = function(a) {
        this.b.post("https://www.youtube.com/api/xbox/register", null, {
            token: a
        })
    }
    ;
    d.Sf = function(a, b) {
        this.k = !0;
        an.A.Sf.call(this, a, b);
        this.j = !!this.ml()
    }
    ;
    d.Fh = function(a, b) {
        this.k && this.wd();
        this.k = !0;
        this.j = !1;
        an.A.Fh.call(this, a, b)
    }
    ;
    d.Yk = function() {
        return this.F.getOauthClientSecret()
    }
    ;
    d.ei = function() {
        return this.F.getOauthClientId()
    }
    ;
    d.Xq = function(a) {
        var b = y(this.bB, this);
        this.l.push(a);
        1 == this.l.length && this.b.post("https://www.youtube.com/api/xbox/refresh", null, {
            style: "json"
        }, y(this.Sf, this, b), y(this.Fh, this, b))
    }
    ;
    d.bB = function(a) {
        for (var b = 0, c = this.l.length; b < c; ++b)
            this.l[b](a);
        this.l = []
    }
    ;
    an.inject = ["ytHttp", "timeService", "localStorage", "environmentModel", "ssoApi"];
    function bn(a, b, c) {
        this.b = new Tl(a);
        this.j = a;
        this.g = b;
        this.h = c;
        (a = this.Mv()) && this.Ov(pg(a));
        this.Ym();
        this.g.Kv(y(this.Lv, this));
        a = y(this.Nv, this);
        this.h.B("state:changed", a);
        this.h.ah(a)
    }
    d = bn.prototype;
    d.jw = function() {
        return !this.b.k
    }
    ;
    d.Nv = function(a, b) {
        this.b.j = a ? 1 : 0;
        a && (this.b.h = b || this.b.h,
        this.b.l = this.b.g,
        this.b.g = this.j.Ia,
        this.b.b || (this.b.b = this.b.g));
        this.Ym()
    }
    ;
    d.kz = function() {
        return {
            app_anon_id: this.b.id,
            firstactive: this.b.o,
            prevactive: this.b.k,
            firstactivegeo: this.b.p,
            loginstate: this.b.j,
            firstlogin: this.b.b,
            prevlogin: this.b.l,
            uga: this.b.h
        }
    }
    ;
    d.Ym = function() {
        this.g.jn("device-statistics", this.b.C())
    }
    ;
    d.Mv = function() {
        return this.g.Mp("device-statistics")
    }
    ;
    d.Ov = function(a) {
        this.b.id = a.id;
        this.b.o = a.firstActive;
        this.b.p = a.firstActiveGeo;
        this.b.g = a.recentLogin;
        this.b.b = a.firstLogin;
        this.b.l = a.prevLogin;
        this.b.h = a.uga;
        this.b.j = a.loginState ? 1 : 0;
        this.b.k = a.recentActive
    }
    ;
    d.Lv = function() {
        this.b = new Tl(this.j)
    }
    ;
    bn.inject = ["environmentModel", "privateDataService", "authService"];
    !H || I(9);
    var cn = {
        EM: "zh-hant-t-i0-array-1992",
        FM: "zh-hans-t-i0-cangjie-1982",
        HM: "zh-hans-t-i0-cangjie-1987",
        GM: "zh-hant-t-i0-cangjie-1982",
        IM: "zh-hant-t-i0-cangjie-1987",
        JM: "yue-hant-t-i0-und",
        KM: "zh-t-i0-pinyin",
        LM: "zh-hant-t-i0-pinyin",
        MM: "am-t-i0-und",
        NM: "ar-t-i0-und",
        OM: "be-t-i0-und",
        PM: "bn-t-i0-und",
        QM: "bg-t-i0-und",
        SM: "en-t-i0-und",
        RM: "nl-t-i0-und",
        TM: "fr-t-i0-und",
        UM: "de-t-i0-und",
        VM: "el-t-i0-und",
        WM: "gu-t-i0-und",
        XM: "he-t-i0-und",
        YM: "hi-t-i0-und",
        ZM: "ja-hira-t-i0-und",
        $M: "it-t-i0-und",
        aN: "ja-t-ja-hira-i0-und",
        bN: "kn-t-i0-und",
        cN: "ml-t-i0-und",
        dN: "mr-t-i0-und",
        eN: "ne-t-i0-und",
        fN: "or-t-i0-und",
        gN: "fa-t-i0-und",
        hN: "pl-t-i0-und",
        iN: "pt-t-i0-und",
        jN: "pa-t-i0-und",
        kN: "ru-t-i0-und",
        lN: "sa-t-i0-und",
        mN: "sr-t-i0-und",
        nN: "si-t-i0-und",
        oN: "es-t-i0-und",
        pN: "ta-t-i0-und",
        qN: "te-t-i0-und",
        rN: "ti-t-i0-und",
        sN: "tr-t-i0-und",
        tN: "uk-t-i0-und",
        uN: "ur-t-i0-und",
        vN: "vi-t-i0-und",
        wN: "zh-t-i0-wubi-1986",
        xN: "zh-hant-t-i0-und",
        yN: "sq-t-k0-und",
        zN: "ar-t-k0-und",
        AN: "hy-hyr-t-k0-und",
        BN: "hy-hyt-t-k0-und",
        CN: "eu-t-k0-und",
        DN: "be-t-k0-und",
        FN: "bn-t-k0-und",
        GN: "bn-t-und-latn-k0-und",
        HN: "bs-t-k0-und",
        IN: "pt-br-t-k0-und",
        JN: "bg-t-k0-und",
        KN: "bg-t-k0-qwerty",
        LN: "ca-t-k0-und",
        MN: "chr-t-k0-und",
        NN: "chr-t-und-latn-k0-und",
        ON: "hr-t-k0-und",
        PN: "cs-t-k0-und",
        QN: "cs-t-k0-qwertz",
        RN: "da-t-k0-und",
        SN: "prs-t-k0-und",
        TN: "hi-t-k0-qwerty",
        UN: "nl-t-k0-und",
        VN: "dz-t-k0-und",
        WN: "en-t-k0-und",
        XN: "en-t-k0-dvorak",
        YN: "et-t-k0-und",
        ZN: "und-ethi-t-k0-und",
        $N: "fi-t-k0-und",
        aO: "fr-t-k0-und",
        bO: "gl-t-k0-und",
        cO: "ka-t-k0-und",
        dO: "ka-t-k0-legacy",
        eO: "de-t-k0-und",
        fO: "el-t-k0-und",
        gO: "gu-t-k0-und",
        hO: "gu-t-und-latn-k0-qwerty",
        iO: "pa-guru-t-k0-und",
        jO: "pa-guru-t-und-latn-k0-und",
        kO: "he-t-k0-und",
        lO: "hi-t-k0-und",
        mO: "hu-t-k0-101key",
        nO: "is-t-k0-und",
        oO: "it-t-k0-und",
        pO: "kn-t-k0-und",
        qO: "kn-t-und-latn-k0-und",
        rO: "kk-t-k0-und",
        sO: "km-t-k0-und",
        tO: "ko-t-k0-und",
        uO: "ky-cyrl-t-k0-und",
        vO: "lo-t-k0-und",
        wO: "lv-t-k0-und",
        xO: "lt-t-k0-und",
        yO: "mk-t-k0-und",
        zO: "ml-t-k0-und",
        AO: "ml-t-und-latn-k0-und",
        BO: "mt-t-k0-und",
        FO: "my-t-k0-und",
        CO: "mi-t-k0-und",
        DO: "mn-cyrl-t-k0-und",
        EO: "srp-t-k0-und",
        IO: "no-t-k0-und",
        JO: "or-t-k0-und",
        LO: "or-t-und-latn-k0-und",
        MO: "latn-002-t-k0-und",
        NO: "ps-t-k0-und",
        OO: "fa-t-k0-und",
        PO: "pl-t-k0-und",
        QO: "pt-pt-t-k0-und",
        RO: "rom-t-k0-und",
        SO: "ro-t-k0-und",
        TO: "ro-t-k0-legacy",
        UO: "ro-t-k0-extended",
        VO: "ru-t-k0-und",
        WO: "ru-t-k0-qwerty",
        XO: "sa-t-und-latn-k0-und",
        YO: "sr-cyrl-t-k0-und",
        ZO: "sr-latn-t-k0-und",
        $O: "si-t-k0-und",
        aP: "sk-t-k0-und",
        bP: "sk-t-k0-qwerty",
        cP: "sl-t-k0-und",
        dP: "uzs-t-k0-und",
        eP: "es-t-k0-und",
        fP: "sv-t-k0-und",
        gP: "de-ch-t-k0-und",
        hP: "ta-t-k0-ta99",
        iP: "ta-t-k0-und",
        kP: "ta-t-und-latn-k0-und",
        lP: "ta-t-k0-typewriter",
        jP: "ta-t-k0-itrans",
        mP: "tt-t-k0-und",
        nP: "te-t-k0-und",
        oP: "te-t-und-latn-k0-und",
        pP: "th-t-k0-und",
        qP: "th-t-k0-pattajoti",
        rP: "th-t-k0-tis",
        sP: "tr-t-k0-legacy",
        tP: "tr-t-k0-und",
        uP: "ug-t-k0-und",
        vP: "uk-t-k0-101key",
        wP: "ur-t-k0-und",
        yP: "uz-cyrl-t-k0-und",
        zP: "uz-cyrl-t-k0-legacy",
        AP: "uz-latn-t-k0-und",
        BP: "vi-t-k0-und",
        CP: "vi-t-k0-legacy",
        DP: "vi-t-k0-viqr",
        EP: "vi-t-k0-vni",
        FP: "yi-t-k0-und",
        GO: "ne-t-k0-und",
        HO: "ne-t-und-latn-k0-und",
        xP: "en-us-t-k0-intl",
        sL: "af-t-i0-handwrit",
        vL: "be-t-i0-handwrit",
        wL: "bg-t-i0-handwrit",
        xL: "ca-t-i0-handwrit",
        CL: "cs-t-i0-handwrit",
        AM: "cy-t-i0-handwrit",
        DL: "da-t-i0-handwrit",
        ML: "de-t-i0-handwrit",
        NL: "el-t-i0-handwrit",
        FL: "en-t-i0-handwrit",
        GL: "eo-t-i0-handwrit",
        tM: "es-t-i0-handwrit",
        HL: "et-t-i0-handwrit",
        uL: "eu-t-i0-handwrit",
        JL: "fi-t-i0-handwrit",
        IL: "fil-t-i0-handwrit",
        KL: "fr-t-i0-handwrit",
        VL: "ga-t-i0-handwrit",
        LL: "gl-t-i0-handwrit",
        OL: "gu-t-i0-handwrit",
        QL: "he-t-i0-handwrit",
        RL: "hi-t-i0-handwrit",
        BL: "hr-t-i0-handwrit",
        PL: "ht-t-i0-handwrit",
        SL: "hu-t-i0-handwrit",
        UL: "id-t-i0-handwrit",
        TL: "is-t-i0-handwrit",
        WL: "it-t-i0-handwrit",
        XL: "ja-t-i0-handwrit",
        YL: "jv-t-i0-handwrit",
        ZL: "ko-t-i0-handwrit",
        $L: "la-t-i0-handwrit",
        bM: "lt-t-i0-handwrit",
        aM: "lv-t-i0-handwrit",
        eM: "mi-t-i0-handwrit",
        cM: "mk-t-i0-handwrit",
        fM: "mr-t-i0-handwrit",
        dM: "ms-t-i0-handwrit",
        hM: "nb-t-i0-handwrit",
        EL: "nl-t-i0-handwrit",
        iM: "nn-t-i0-handwrit",
        gM: "no-t-i0-handwrit",
        nM: "pa-t-i0-handwrit",
        jM: "pl-t-i0-handwrit",
        kM: "pt-t-i0-handwrit",
        lM: "pt-br-t-i0-handwrit",
        mM: "pt-pt-t-i0-handwrit",
        oM: "ro-t-i0-handwrit",
        pM: "ru-t-i0-handwrit",
        rM: "sk-t-i0-handwrit",
        sM: "sl-t-i0-handwrit",
        tL: "sq-t-i0-handwrit",
        qM: "sr-t-i0-handwrit",
        vM: "sv-t-i0-handwrit",
        uM: "sw-t-i0-handwrit",
        wM: "th-t-i0-handwrit",
        xM: "tr-t-i0-handwrit",
        yM: "uk-t-i0-handwrit",
        zM: "vi-t-i0-handwrit",
        yL: "zh-t-i0-handwrit",
        zL: "zh-hans-t-i0-handwrit",
        AL: "zh-hant-t-i0-handwrit",
        BM: "zu-t-i0-handwrit"
    };
    function dn(a) {
        this.b = a;
        this.type = null;
        this.j = this.h = "en";
        this.yx();
        this.k = a
    }
    var en = "ar-t-k0-und prs-t-k0-und he-t-k0-und ps-t-k0-und fa-t-k0-und uzs-t-k0-und ug-t-k0-und ur-t-k0-und yi-t-k0-und".split(" ")
      , fn = ["ar-t-i0-und", "he-t-i0-und", "fa-t-i0-und", "ur-t-i0-und"]
      , gn = {};
    function hn(a) {
        if (!a)
            return null;
        qb(cn, a) || (a = jn(a));
        a = a.replace(/_/g, "-");
        qb(cn, a) || (a = jn(a + "-und"));
        return gn[a] ? gn[a] : qb(cn, a) ? (gn[a] = new dn(a),
        gn[a]) : null
    }
    var kn = "bn gu pa kn ml or sa ta te ne".split(" ")
      , ln = {
        im_pinyin_zh_hans: "zh-t-i0-pinyin",
        im_wubi_zh_hans: "zh-t-i0-wubi-1986",
        im_pinyin_zh_hant: "zh-hant-t-i0-pinyin",
        im_zhuyin_zh_hant: "zh-hant-t-i0-und",
        im_t13n_ja: "ja-t-ja-hira-i0-und",
        "im_t13n_ja-Hira": "ja-hira-t-i0-und",
        vkd_en_dvorak: "en-t-k0-dvorak",
        vkd_hy_east: "hy-hyr-t-k0-und",
        vkd_hy_west: "hy-hyt-t-k0-und",
        vkd_bg_phone: "bg-t-k0-qwerty",
        vkd_cs_qwertz: "cs-t-k0-qwertz",
        vkd_deva_phone: "hi-t-k0-qwerty",
        vkd_ethi: "und-ethi-t-k0-und",
        vkd_ka_qwerty: "ka-t-k0-und",
        vkd_ka_typewriter: "ka-t-k0-legacy",
        vkd_guru_inscript: "pa-guru-t-k0-und",
        vkd_guru_phone: "pa-guru-t-und-latn-k0-und",
        vkd_gu_phone: "gu-t-und-latn-k0-qwerty",
        vkd_hu_101: "hu-t-k0-101key",
        vkd_ro_sr13392_primary: "ro-t-k0-legacy",
        vkd_ro_sr13392_secondary: "ro-t-k0-extended",
        vkd_sk_qwerty: "sk-t-k0-qwerty",
        vkd_es_es: "es-t-k0-und",
        vkd_ta_tamil99: "ta-t-k0-ta99",
        vkd_ta_typewriter: "ta-t-k0-typewriter",
        vkd_ta_itrans: "ta-t-k0-itrans",
        vkd_tr_f: "tr-t-k0-legacy",
        vkd_tr_q: "tr-t-k0-und",
        vkd_uk_101: "uk-t-k0-101key",
        vkd_uz_cyrl_phone: "uz-cyrl-t-k0-und",
        vkd_uz_cyrl_type: "uz-cyrl-t-k0-legacy",
        vkd_vi_tcvn: "vi-t-k0-und",
        vkd_vi_telex: "vi-t-k0-legacy",
        vkd_vi_viqr: "vi-t-k0-viqr",
        vkd_chr_phone: "chr-t-und-latn-k0-und",
        vkd_th_pattajoti: "th-t-k0-pattajoti",
        vkd_th_tis: "th-t-k0-tis"
    }
      , mn = wb(ln);
    function jn(a) {
        if (ln[a])
            return ln[a];
        if ("vkd_iw" == a)
            return "he-t-k0-und";
        if ("im_t13n_iw" == a)
            return "he-t-i0-und";
        if ("tr-t-k0-lagacy" == a)
            return "tr-t-k0-legacy";
        var b = a.split("_")
          , b = 0 == a.lastIndexOf("im_t13n", 0) ? b[2] + "-t-i0-und" : 2 == b.length ? b[1] + "-t-k0-und" : G(kn, b[1]) ? "inscript" == b[2] ? b[1] + "-t-k0-und" : b[1] + "-t-und-latn-k0-und" : b[1] + "-" + b[2] + "-t-k0-und";
        return qb(cn, b) ? b : a
    }
    d = dn.prototype;
    d.lz = function() {
        if (mn[this.b])
            this.g = mn[this.b].slice(4);
        else {
            var a = this.b.split("-t-")
              , b = a[0]
              , a = a[1]
              , b = b.replace(/-/g, "_");
            "en_us" == b && (b = "us");
            !G(kn, b) || "und-latn-k0-und" != a && "k0-und" != a ? "k0-und" == a ? this.g = b : (a = a.match(/k0-(.*)/),
            a[1] && (this.g = b + "_" + a[1].replace("qwerty", "phone"))) : this.g = b + ("k0-und" == a ? "_inscript" : "_phone")
        }
    }
    ;
    d.yx = function() {
        0 <= this.b.indexOf("-i0") ? (this.type = "im",
        sa(this.b, "-handwrit") && (this.type = "hw")) : 0 <= this.b.indexOf("-k0") && (this.type = "vkd");
        var a = this.b.split(/-t|-i0|-k0/);
        "yue-hant" == a[0] && (a[0] = "zh-Hant");
        switch (this.b) {
        case "yue-hant-t-i0-und":
            a[0] = "zh-Hant";
            break;
        case "zh-t-i0-pinyin":
        case "zh-t-i0-wubi-1986":
            a[0] = "zh-Hans"
        }
        this.h = this.op(a[0]);
        a[1] && (this.j = this.op(a[1]));
        "vkd" == this.type && this.lz()
    }
    ;
    d.toString = function() {
        return this.b
    }
    ;
    d.ZQ = function() {
        return this.DK() ? "rtl" : "ltr"
    }
    ;
    d.DK = function() {
        return G(fn, this.b) || G(en, this.b)
    }
    ;
    d.QS = function() {
        return "im" == this.type ? /^(zh|yue)/.test(this.b) : !1
    }
    ;
    d.op = function(a) {
        if ("und-ethi" == a)
            return "et";
        a = a.split("-");
        return 2 == a.length ? 2 == a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() + a[1].slice(1) : a[0]
    }
    ;
    d.lT = function() {
        return "im" == this.type && !/^(zh|yue|ja)/.test(this.b)
    }
    ;
    function nn(a, b) {
        this.g = a;
        this.b = b;
        this.h = [a, b].join("|")
    }
    var on = {};
    function pn(a, b) {
        "iw" == a ? a = "he" : "iw" == b && (b = "he");
        var c = [a, b].join("|");
        return on[c] || (on[c] = new nn(a,b))
    }
    nn.prototype.toString = function() {
        return this.h
    }
    ;
    nn.prototype.j = function() {
        return pn(this.b, this.g)
    }
    ;
    var qn, rn, sn, tn, un, vn, wn;
    wn = vn = un = tn = sn = rn = qn = !1;
    var xn = Hb();
    xn && (-1 != xn.indexOf("Firefox") ? qn = !0 : -1 != xn.indexOf("Camino") ? rn = !0 : -1 != xn.indexOf("iPhone") || -1 != xn.indexOf("iPod") ? sn = !0 : -1 != xn.indexOf("iPad") ? tn = !0 : -1 != xn.indexOf("Chrome") ? vn = !0 : -1 != xn.indexOf("Android") ? un = !0 : -1 != xn.indexOf("Safari") && (wn = !0));
    var yn = qn
      , zn = rn
      , An = sn
      , Bn = tn
      , Cn = un
      , Dn = vn
      , En = wn;
    function Fn(a) {
        return (a = a.exec(Hb())) ? a[1] : ""
    }
    (function() {
        if (yn)
            return Fn(/Firefox\/([0-9.]+)/);
        if (H || Lb)
            return Zb;
        if (Dn)
            return Fn(/Chrome\/([0-9.]+)/);
        if (En)
            return Fn(/Version\/([0-9.]+)/);
        if (An || Bn) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Hb()))
                return a[1] + "." + a[2]
        } else {
            if (Cn)
                return (a = Fn(/Android\s+([0-9.]+)/)) ? a : Fn(/Version\/([0-9.]+)/);
            if (zn)
                return Fn(/Camino\/([0-9.]+)/)
        }
        return ""
    }
    )();
    function Gn(a, b, c) {
        this.url = a;
        this.payload = b;
        this.data = c ? c : null
    }
    ;function Hn(a, b) {
        null != a && this.append.apply(this, arguments)
    }
    d = Hn.prototype;
    d.md = "";
    d.HS = function(a) {
        this.md = "" + a
    }
    ;
    d.append = function(a, b, c) {
        this.md += a;
        if (null != b)
            for (var e = 1; e < arguments.length; e++)
                this.md += arguments[e];
        return this
    }
    ;
    d.clear = function() {
        this.md = ""
    }
    ;
    d.Y = function() {
        return this.md.length
    }
    ;
    d.toString = function() {
        return this.md
    }
    ;
    function In(a, b, c) {
        this.text = v(a) ? a : [a];
        this.l = !!b;
        this.priority = void 0 == c ? 0 : c;
        this.status = "i"
    }
    In.prototype.Is = function() {
        return this.text[0]
    }
    ;
    In.prototype.w = function() {
        return "s" == this.status || "f" == this.status
    }
    ;
    function Jn(a, b, c, e, f) {
        In.call(this, a, c);
        this.g = this.h = 1;
        this.k = !!e;
        this.I = this.C = !1;
        this.j = "";
        this.p = !0;
        this.b = null;
        this.o = f ? Ra(f) : null;
        b instanceof dn ? this.b = b : (a = b.b,
        this.b = "zh" == a || "zh-Hans" == a ? hn("zh-t-i0-pinyin") : "zh-Hant" == a ? hn("zh-hant-t-i0-und") : "ja" == a ? hn("ja-t-ja-hira-i0-und") : hn(a + "-t-i0-und"))
    }
    B(Jn, In);
    d = Jn.prototype;
    d.fT = function() {
        return !1
    }
    ;
    d.EU = function() {
        return this.p
    }
    ;
    d.oU = function(a) {
        this.p = a
    }
    ;
    d.$T = function(a) {
        this.j = a
    }
    ;
    d.OR = function() {
        return this.g || 0
    }
    ;
    d.zn = function(a) {
        this.g = 0 < a ? a : 0
    }
    ;
    d.Gh = function() {
        return this.h || 0
    }
    ;
    d.un = function(a) {
        this.h = 0 < a ? a : 0
    }
    ;
    d.Is = function() {
        return Jn.A.Is.call(this)
    }
    ;
    d.RS = function() {
        return [this.b.toString()]
    }
    ;
    d.wT = function(a) {
        return this.b != a.b || this.k || a.k || this.l || a.l || !(5 > this.text.length + a.text.length) || 0 != this.priority || 0 != a.priority ? !1 : (G(this.text, a.text) || Sa(this.text, a.text),
        a.Gh() > this.Gh() && this.un(a.Gh()),
        !0)
    }
    ;
    d.QT = function(a) {
        return Na(a.text, function(b) {
            return G(this.text, b) && 0 == a.priority
        }, this) && this.h >= a.Gh()
    }
    ;
    d.oR = function() {
        return this.b.b
    }
    ;
    d.ln = function(a) {
        for (var b = new Hn, c = 0; c < a.length; c++) {
            var e = a.charAt(c);
            switch (e) {
            case ",":
                b.append("%2C");
                break;
            case "|":
                b.append("%7C");
                break;
            case "%":
                b.append("%25");
                break;
            default:
                b.append(e)
            }
        }
        return b.toString()
    }
    ;
    d.TJ = function(a, b) {
        var c = "";
        switch (this.b.h) {
        case "ja-Hira":
        case "ja":
            c = ",||t:1"
        }
        var e = new Hn;
        this.j && (e.append("|"),
        e.append(this.ln(this.j)),
        e.append(","));
        F(this.text, function(a, b) {
            e.append(this.ln(a));
            b != this.text.length - 1 && e.append(",")
        }, this);
        e.append(c);
        c = {
            text: e.toString(),
            itc: this.b.b,
            num: this.g,
            cp: "0",
            cs: "1",
            ie: "utf-8",
            oe: "utf-8",
            app: "jsapi"
        };
        a.Iv && (c.sct = a.Iv);
        yb(c, b);
        var f = this.o ? {
            feedback: La(this.o, function(a) {
                return a.toJSON()
            })
        } : null;
        return new Gn("/request",c,f)
    }
    ;
    d.$R = function(a) {
        var b = "";
        0 <= a && a < this.text.length && (b = this.text[a]);
        a = new Jn(b,this.b,this.l,this.k);
        a.zn(this.g);
        a.un(this.h);
        return a
    }
    ;
    function Kn(a) {
        this.h = a
    }
    Kn.prototype.b = function(a, b) {
        var c = new Jn(a,b);
        c.zn(15);
        c = c.TJ({}, {});
        c.payload.app = "youtubetv";
        return Zj("//inputtools.google.com" + c.url, c.payload)
    }
    ;
    Kn.prototype.g = function(a, b, c) {
        return this.h.jsonp(this.b(a, b), null, function(a) {
            var b = [];
            if (0 < a[1][0].length) {
                a = a[1][0][1];
                for (var g = 0, k = a.length; g < k; ++g)
                    b.push(a[g])
            }
            c(b)
        }, null, "cb")
    }
    ;
    Kn.inject = ["ytHttp"];
    function Ln(a, b) {
        this.b = a;
        this.g = b
    }
    Ln.prototype.load = function(a, b) {
        var c = b || p
          , e = new Y;
        this.b.load({
            query: a.playlistId
        }, y(function(b) {
            e.S.push(b.S.la());
            this.g.load({
                query: a.videoId
            }, y(function(a) {
                e.S.push(a.S.la());
                c(e)
            }, this))
        }, this), la(c, e))
    }
    ;
    Ln.inject = ["playlistService", "relatedVideosService"];
    function Mn(a, b, c) {
        K.call(this);
        this.h = {};
        this.l = {};
        this.b = {};
        this.g = {};
        this.p = b;
        this.o = c;
        this.w = y(this.tu, this);
        this.k = 0;
        this.j = a;
        this.C = y(this.uu, this);
        this.o.vu()
    }
    B(Mn, K);
    d = Mn.prototype;
    d.addCommand = function(a) {
        if (!this.g[a.rulename]) {
            this.kn();
            if (!this.h[a.text]) {
                var b = this.j.createCommand(a.text, this.C, a.pronunciation, a.minimalConfidence);
                this.h[a.text] = b
            }
            this.b[a.text] = this.b[a.text] || 0;
            this.b[a.text]++;
            this.g[a.rulename] = this.B(a.text, a.callback)
        }
    }
    ;
    d.removeCommand = function(a) {
        this.g[a.rulename] && (this.kn(),
        this.b[a.text] = this.b[a.text] || 0,
        this.b[a.text]--,
        this.g[a.rulename](),
        delete this.g[a.rulename])
    }
    ;
    d.kn = function() {
        this.p.clearTimeout(this.k);
        this.k = this.p.setTimeout(this.w, 200)
    }
    ;
    d.tu = function() {
        for (var a in this.b) {
            var b = this.b[a]
              , c = this.l[a] || 0
              , e = c + b
              , f = this.h[a];
            this.l[a] = c + b;
            f && (0 < e && 0 == c ? this.j.addCommand(f) : 0 >= e && (this.j.removeCommand(f),
            this.h[a] = null))
        }
        this.b = {}
    }
    ;
    d.uu = function(a, b) {
        0.8 <= b.confidenceScore && this.T(a.text, a);
        this.o.Qk(b)
    }
    ;
    Mn.inject = ["speechApi", "timeService", "speechReporting"];
    for (var Nn = "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" "), On = {
        "\u1104": "\u1104",
        "\u1108": "\u1108",
        "\u110d": "\u110d"
    }, Pn = 0; Pn < Nn.length; ++Pn)
        On[Nn[Pn]] = String.fromCharCode(4520 + Pn);
    var Qn = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
    }
      , Rn = /[\u11a8-\u11c3]/g
      , Sn = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g")
      , Tn = /[\uac00-\ud7af]/g
      , Un = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g
      , Vn = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])", "g")
      , Wn = RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))", "g")
      , Xn = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))", "g")
      , Yn = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))", "g");
    function Zn(a) {
        a = a.charCodeAt(0) - 44032;
        var b = 4449 + a % 588 / 28
          , c = 4519 + a % 28;
        return String.fromCharCode(4352 + a / 588) + String.fromCharCode(b) + (4519 == c ? "" : String.fromCharCode(c))
    }
    function $n(a) {
        return a.replace(Rn, function(a) {
            return Nn[a.charCodeAt(0) - 4519 - 1]
        })
    }
    function ao(a) {
        return a.replace(Sn, function(a) {
            return Qn[a]
        })
    }
    function bo(a) {
        return a.replace(Tn, Zn)
    }
    function co(a) {
        var b = a.charCodeAt(0) - 4352
          , c = a.charCodeAt(1) - 4449;
        a = 3 <= a.length ? a.charCodeAt(2) - 4519 : 0;
        return String.fromCharCode(28 * (21 * b + c) + a + 44032)
    }
    function eo(a) {
        return a.replace(Un, co)
    }
    function fo(a, b, c, e) {
        return b + On[c] + e
    }
    function go(a) {
        return ao($n(a)).replace(Vn, fo).replace(Vn, fo).replace(Wn, fo).replace(Xn, fo).replace(Yn, fo)
    }
    ;function ho(a) {
        return function(b, c, e) {
            var f = 0
              , g = 1E3 / b;
            return function(b) {
                var l = a.hc() - f
                  , n = !0;
                e && (n = e.apply(this, arguments));
                n && (!isNaN(l) && l <= g ? J(b) : (c.apply(this, arguments),
                f = a.hc()))
            }
        }
    }
    ho.inject = ["timeService"];
    function io(a, b, c, e, f, g, k, l, n, q, s, r, u, O, X, da, ra, bc, Ya, Za, Ia, zb, Fm, Ed, Gm, Hm, Im, Jm, Gc, Km, M, ya, Lm, Ab, ih, Ye, Ze, $e, Xa, Fd, gh, C) {
        this.name = "application";
        Q.call(this, a, b, c);
        this.Td = da;
        this.Pd = X;
        this.Ha = s;
        this.l = r;
        this.Ci = e;
        this.Qd = f;
        this.ka = g;
        this.J = k;
        this.za = l;
        this.Z = this.qb = null;
        this.g = zb;
        this.aa = Fm;
        this.M = Ed;
        this.watchModel = bc;
        this.ia = n;
        this.b = q;
        this.Cg = ra;
        this.ac = u;
        this.pa = O;
        this.na = Ya;
        this.Vd = Za;
        this.O = Ia;
        this.Ag = Gm;
        this.Ud = Hm;
        this.Eg = Im;
        this.Bi = Jm;
        this.Jc = Gc;
        this.Rd = Km;
        this.Fg = M;
        this.o = ya;
        this.zg = Lm;
        this.p = Ab;
        this.Ia = ih;
        this.yg = Ye;
        this.Sd = Ze;
        this.F = Xa;
        this.Wd = Fd;
        this.rc = gh;
        this.Kc = new qh;
        this.j = this.l.state();
        this.w = this.l.mode();
        this.Aa = this.ru();
        this.Ei = this.Ai = null;
        this.Di = 0;
        this.gb = !1;
        this.Oa = "";
        this.Dg = this.da("#spinner-container");
        this.Va = -1;
        this.V = null;
        this.Bg = $e;
        this.Ja = !1;
        this.G = C;
        this.ga = null;
        this.N = p;
        this.su()
    }
    B(io, Q);
    d = io.prototype;
    d.su = function() {
        var a = this.na.bc("start_watch") || this.na.bc("start_dial") || this.na.bc("start_browse");
        this.N = y(a.tick, a);
        this.N("app_i");
        this.UG();
        this.aa.load();
        a = this.za[0].getElementById("loader");
        zc(a);
        this.TG();
        this.Qe();
        this.wc();
        this.Ok();
        this.SG();
        this.N("app_rdy")
    }
    ;
    d.Cb = function(a) {
        io.A.Cb.call(this, a);
        a.detail instanceof Rh && this.b.initDialog && this.L(qd[this.b.initDialog])
    }
    ;
    d.SG = function() {
        this.sb("engagement-indicator", this.Ha);
        this.qb = this.sb("legend", this.Ha);
        this.b.isChromelessContext && (this.Z = this.sb("call-to-cast", this.Ha))
    }
    ;
    d.vo = function() {
        var a = this.g.o;
        if (!a || this.g.j)
            this.g.load(y(function() {
                this.b.initRow && pd[this.b.initRow] && this.Mn(pd[this.b.initRow]);
                this.rf();
                a || this.J.requestAnimationFrame(y(function() {
                    this.na.pd("start_browse", "b_rn")
                }, this))
            }, this)),
            this.g.o = !0,
            this.g.j = !1
    }
    ;
    d.Mn = function(a) {
        a = this.g.Pq(a);
        -1 < a && (this.g.cb = a)
    }
    ;
    d.ru = function() {
        return {
            browse: {
                search: {
                    down: this.he,
                    up: this.Wg,
                    enter: this.he,
                    esc: this.OH
                },
                none: {
                    esc: this.HH
                }
            },
            watch: {
                browse: {
                    esc: this.NH
                },
                search: {
                    down: this.he,
                    up: this.Wg,
                    enter: this.he,
                    esc: this.MH
                },
                title: {
                    down: this.qi,
                    esc: this.cd,
                    enter: this.Sb,
                    fastforward: this.Sb,
                    rewind: this.Sb
                },
                transport: {
                    up: this.LH,
                    down: this.qi,
                    esc: this.IH
                },
                "post-play": {
                    esc: this.JH
                },
                none: {
                    up: this.Sb,
                    down: this.qi,
                    esc: this.KH,
                    enter: this.Sb,
                    pause: this.Sb,
                    fastforward: this.Sb,
                    rewind: this.Sb,
                    mousemove: this.Sb
                }
            },
            dialog: {
                none: {
                    esc: this.qi
                }
            }
        }
    }
    ;
    d.UG = function() {
        "loading" == this.za[0].readyState ? this.b.l ? this.J.document.addEventListener("readystatechange", y(this.Rj, this), !1) : this.za.ready(y(this.Rj, this)) : this.O.setTimeout(y(this.Rj, this), 1);
        this.ca(this.p, "spinnerShowing:changed", y(this.Gx, this));
        this.ca(this.p, "state:changed", y(this.Zx, this));
        this.ca(this.p, "isPlayingAd:changed", y(this.wc, this));
        this.ca(this.G, "beforeRouteChange", y(this.Ax, this));
        this.ca(this.G, "afterRouteChange", y(this.Sx, this));
        this.B("keydown", y(this.Ux, this));
        this.B("keyup", y(this.Vx, this));
        this.B("mousemove", this.yg(2, y(this.Xx, this)));
        this.B("loaded", y(this.Qx, this));
        this.B("row-changed", y(this.Px, this));
        this.B("item-changed", y(this.so, this));
        this.B("toggle-loading", y(this.Rx, this));
        this.B("row-loaded", y(this.by, this));
        this.B("next-video", y(function() {
            this.Be()
        }, this));
        this.B("previous-video", y(this.Fx, this));
        this.B("request-playlist-playback", y(this.ay, this));
        this.B("request-device-retention", y(this.Ix, this));
        this.B("request-recent-search", y(this.Lx, this));
        this.B("request-search", y(this.Eo, this));
        this.B("request-clear-searches", y(this.Hx, this));
        this.B("request-playback-authorization", y(this.Jx, this));
        this.B("request-player-error", y(this.Kx, this));
        this.B("request-toggle-cookies", y(this.Mx, this));
        this.B("request-toggle-video-info", y(this.Ox, this));
        this.B("request-toggle-sounds", y(this.Nx, this));
        this.B("focus-search", y(this.Wg, this));
        this.B("exit-application", y(this.yh, this));
        this.ca(this.o, "dialog:changed", y(this.Bx, this));
        this.ca(this.o, "login:complete", y(this.Co, this));
        this.ca(this.o, "logout:complete", y(this.Cx, this));
        this.ca(this.o, "logout:confirmed", y(this.Dx, this));
        this.ca(this.o, "paidScope:changed", y(this.Ex, this));
        this.ca(this.ia, "state:changed", y(this.Wx, this));
        this.ca(this.Pd, "pairing:changed", y(this.Yx, this));
        this.ca(this.Ia, "request-playback", y(this.$x, this));
        this.ca(this.Ia, "engage-change", y(this.Tx, this))
    }
    ;
    d.Rj = function() {
        var a = this.G.g();
        this.l.state() || (a.pairingCode ? this.zf() : this.Yc())
    }
    ;
    d.Zx = function(a) {
        switch (a) {
        case 1:
            this.rJ();
            break;
        case 0:
            this.oJ(),
            this.Qe()
        }
    }
    ;
    d.Gx = function(a) {
        this.va() && this.gt(a)
    }
    ;
    d.pq = function() {
        return this.wb() ? this.aa : this.va() ? this.watchModel : this.g
    }
    ;
    d.Rx = function(a) {
        this.va() || this.gt(!!a.detail)
    }
    ;
    d.gt = function(a) {
        this.tb(this.Dg, a);
        this.children.watch.cJ(a)
    }
    ;
    d.rJ = function() {
        this.Pf() ? this.eo() : (this.ka(y(function() {
            var a = this.Ag.duration;
            0 < a && (a = Math.min(a / 4, 10),
            this.p.$f("add-to-history", a, y(this.LG, this)))
        }, this), 500, !1),
        this.p.$f("first-progress", 0.01, y(this.MG, this), 2))
    }
    ;
    d.LG = function() {
        this.watchModel.xD();
        !this.gb && 0 < this.Cg.Y() && (this.g.wD(this.watchModel.Ui()),
        this.gb = !0)
    }
    ;
    d.MG = function() {
        this.eJ();
        this.La(!1)
    }
    ;
    d.Qx = function() {
        this.wb() && this.L("active-item-changed", this.aa.Fd()[0].Hb());
        this.O.setTimeout(y(this.Ec, this), 0)
    }
    ;
    d.by = function(a) {
        (this.Uf() || this.wb()) && this.L("active-item-changed", a.detail.Hb())
    }
    ;
    d.mT = function(a) {
        return "UU" === a.Ka
    }
    ;
    d.zB = function(a) {
        this.O.clearTimeout(this.Va);
        this.Va = this.O.setTimeout(y(function() {
            this.Eg.ab(a, y(this.Jj, this), null, y(function() {
                this.Jj(null)
            }, this))
        }, this), 500)
    }
    ;
    d.Px = function(a) {
        var b = this.pq().Fd()[a.detail.rowIndex];
        if (this.b.mm && this.Pf() && b) {
            var c = b.model.serviceQuery || b.Qa;
            b.pe && c ? this.zB(c) : (this.V = null,
            this.Qe())
        }
        this.so(a)
    }
    ;
    d.so = function(a) {
        if (this.Uf() || this.wb()) {
            var b = a.detail.rowIndex;
            a = a.detail.Qp;
            (b = this.pq().Fd()[b].fa(a)) && this.L("active-item-changed", b)
        }
    }
    ;
    d.Fb = function(a) {
        var b = this.w || "none";
        this.Aa[this.j] && this.Aa[this.j][b] && ("esc" === a && this.L("play-sound", "cross-back"),
        b = this.Aa[this.j][b][a]) && (b.call(this, a),
        this.Ec())
    }
    ;
    d.Wg = function() {
        this.ze("search");
        this.wc();
        this.ta(this.children.search)
    }
    ;
    d.he = function() {
        this.ze("browse");
        this.wc();
        this.b.usePaidScope && this.Sd.get("needs_rental_auth_dialog") && this.ia.Ri() && this.L("request_paid_scope_dialog")
    }
    ;
    d.Ex = function(a) {
        this.Sd.Da("needs_rental_auth_dialog", !1);
        a ? this.La(!1) : this.ia.wd()
    }
    ;
    d.vx = function() {
        this.ze("watch");
        this.wc()
    }
    ;
    d.KH = function() {
        this.b.isChromelessContext ? (this.L("mdxClearVideo"),
        this.zf()) : this.b.isPlayOnlyContext ? this.yh() : (this.L("mdxClearVideo"),
        this.cd())
    }
    ;
    d.JH = function() {
        this.cd();
        this.Pf() && this.gJ()
    }
    ;
    d.cd = function() {
        var a = this.ac.CG();
        a && a.url ? this.l.url(a.url) : this.Yc()
    }
    ;
    d.OH = function() {
        this.Ia.L("report-search-outcome", "back");
        this.cd()
    }
    ;
    d.mh = function() {
        this.l.mode("search")
    }
    ;
    d.Yc = function(a) {
        this.l.state("browse", a ? {
            mode: a
        } : {})
    }
    ;
    d.qi = function() {
        this.b.isPlayOnlyContext || this.b.isChromelessContext || this.p.isPlayingAd || this.l.mode("browse")
    }
    ;
    d.Sb = function() {
        this.ka.cancel(this.jf);
        this.jf = this.ka(y(function() {
            this.va() && this.l.mode("transport")
        }, this), 250, !1)
    }
    ;
    d.IH = function() {
        this.Qf() ? this.o.mg() : this.l.mode(null)
    }
    ;
    d.nC = function() {
        this.l.mode("post-play");
        this.Fg.l()
    }
    ;
    d.oJ = function() {
        !this.va() || this.Uf() || this.wb() || this.iI()
    }
    ;
    d.iI = function() {
        this.b.isPlayOnlyContext || this.b.isChromelessContext ? this.Be(!0) : this.nC()
    }
    ;
    d.MH = function() {
        0 === this.p.state ? this.Be() : this.cd()
    }
    ;
    d.NH = function(a) {
        0 === this.p.state ? this.Be(a) : this.Sb()
    }
    ;
    d.Fx = function() {
        var a = this.watchModel.AH();
        a && (this.Qe(),
        this.Pj(a),
        this.L("active-item-changed", this.watchModel.currentVideo))
    }
    ;
    d.Be = function(a) {
        (a = this.watchModel.next(a)) ? (this.Qe(),
        this.Pj(a),
        this.L("active-item-changed", this.watchModel.currentVideo)) : this.b.isChromelessContext ? this.zf() : this.b.isPlayOnlyContext ? this.yh() : this.Yc()
    }
    ;
    d.LH = function() {
        this.l.mode(null)
    }
    ;
    d.Ux = function(a) {
        switch (a.keyCode) {
        case 40:
            this.Fb("down");
            break;
        case 38:
            this.Fb("up");
            break;
        case 37:
            this.Fb("left");
            break;
        case 39:
            this.Fb("right");
            break;
        case 75:
        case 19:
        case 32:
            this.Fb("pause");
            break;
        case 228:
        case 76:
            this.Fb("fastforward");
            break;
        case 227:
        case 74:
            this.Fb("rewind");
            break;
        case 8:
        case 27:
            this.Ws() || J(a)
        }
    }
    ;
    d.Vx = function(a) {
        switch (a.keyCode) {
        case 170:
        case 83:
            this.wb() || this.mh();
            break;
        case 172:
        case 71:
            this.Yc();
            break;
        case 8:
        case 27:
            this.Ws() || J(a);
            this.Fb("esc");
            break;
        case 13:
            J(a);
            this.EH(a.target) || this.Fb("enter");
            break;
        case 178:
            this.va() && this.Yc()
        }
    }
    ;
    d.EH = function(a) {
        return !(!a || !Tc(a, y(function(a) {
            a = (a.className || "").split(" ");
            return G(a, "more") ? (this.Fb("down"),
            !0) : G(a, "back") || G(a, "reversed-back") ? (this.Fb("esc"),
            this.va() && !this.w && this.Fb("esc"),
            !0) : G(a, "search") ? (this.mh(),
            !0) : G(a, "home") ? (this.La(!1),
            this.Yc(),
            !0) : G(a, "delete") ? (this.M.Yj(),
            !0) : !1
        }, this)))
    }
    ;
    d.Xx = function() {
        this.Fb("mousemove")
    }
    ;
    d.ue = function() {
        this.g.Uq()
    }
    ;
    d.Pj = function(a) {
        this.N("app_s_w_st");
        this.l.state("watch", a ? {
            v: a
        } : {});
        this.rf()
    }
    ;
    d.Ax = function(a, b) {
        this.XG();
        this.ZG(a, b) && this.YG(a);
        var c = a.params.q;
        c && "search" === a.params.mode && this.M.Ob(decodeURI(c));
        var c = a.params.dialog
          , e = a.params.row;
        "browse" === a.state() && (c || e) && ((c = qd[c]) && this.L(c),
        e = pd[e]) && (this.Mn(e),
        this.La(!1))
    }
    ;
    d.XG = function() {
        switch (this.G.b()) {
        case "":
            this.bx();
            break;
        case "resume":
            this.g.j = !0
        }
    }
    ;
    d.bx = function() {
        var a = this.G.g();
        a.q ? (this.M.Ob(a.q),
        this.Yc("search")) : a.list && this.nr(a.list)
    }
    ;
    d.ZG = function(a, b) {
        if (!b || "watch" != a.state())
            return !1;
        var c = b.state()
          , e = this.watchModel.currentVideo;
        return "watch" === c || e ? "watch" == c ? (c = a.params.v,
        b.params.v != c && !!e && e.videoId != c) : !1 : !0
    }
    ;
    d.YG = function(a) {
        var b = a.params.v
          , c = this.DJ(a);
        a = this.CJ(a);
        this.jo(b, c, a)
    }
    ;
    d.CJ = function(a) {
        a = a.params.autoplay;
        return void 0 !== a && 0 == parseInt(a, 10) || "pause" == this.G.b()
    }
    ;
    d.DJ = function(a) {
        a = parseInt(a.params.t, 10);
        return isNaN(a) ? 0 : a
    }
    ;
    d.Sx = function(a) {
        if (this.Qd.current && (a = a || this.Qd.current) && a.$$route && a.$$route.state) {
            var b = this.w
              , c = this.j;
            this.w = a.params.mode;
            this.j = a.$$route.state();
            a.scope = this.children[this.j].scope;
            if (this.l.state()) {
                a = !0;
                this.wb() ? (this.ux(),
                this.Wg()) : this.Qf() ? this.b.isChromelessContext && this.Pf() ? this.zf() : this.ze("dialog") : this.Uf() ? this.b.isChromelessContext ? this.zf() : (this.vo(),
                this.he()) : (this.Z && this.Z.ea(),
                this.tx(),
                this.vx(),
                this.ae() || (a = !1));
                if (this.Pf())
                    this.eo(),
                    this.wb() || this.watchModel.Bm();
                else if (this.va())
                    if ("browse" !== this.w && ("watch" !== c || "browse" === b))
                        this.watchModel.currentVideo && this.L("active-item-changed", this.watchModel.currentVideo);
                    else if ("browse" === this.w) {
                        var e = this.watchModel.Hb();
                        e && this.L("active-item-changed", e)
                    }
                this.wx(c, b) && this.rf();
                this.wc();
                c != this.j && this.Jj(this.V);
                this.tb(this.da("#browse"), a)
            }
        }
    }
    ;
    d.wx = function(a, b) {
        return a !== this.j || this.VF(b) || this.UF(b) || this.ae()
    }
    ;
    d.UF = function(a) {
        return this.wb() || "search" === a
    }
    ;
    d.VF = function(a) {
        return this.va() && "post-play" == a
    }
    ;
    d.Ok = function() {
        this.N("app_p");
        var a = this.b.initErrorCode
          , b = this.b.initPlaylistId
          , c = this.b.initSearchQuery
          , e = this.b.initTime
          , f = this.b.initVideoId || this.G.g().v
          , g = !1;
        0 === this.b.initAutoplay && (g = !0);
        this.b.o && 0 < e && (e = 0);
        a ? this.o.Yn("[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]") : f && this.va() ? this.watchModel.currentVideo || (this.b.initReversePairingCode ? this.Pd.Hn(f, e) : this.jo(f, e, g, !0)) : b && this.va() ? this.watchModel.currentVideo || this.pa.ab(b, y(function(a) {
            var b = Hk(this.pa, a.title, a.serviceQuery);
            b.model = a;
            this.oh(b.fa(0), b, e)
        }, this)) : c && this.wb() && (this.M.Ob(decodeURI(c)),
        this.mh())
    }
    ;
    d.jo = function(a, b, c, e) {
        this.ga || (this.ga = this.Td.ab(a, y(function(a) {
            this.ga = null;
            if (a && a.S && a.S.fa(0)) {
                var e = a.S.fa(0)
                  , k = Hk(this.Td, e.title, e.channel.imageUrl);
                a.title = e.title;
                k.model = a;
                k.model.bb = e.channel.imageUrl;
                this.oh(e, k, b, !1, c)
            } else
                this.cd(),
                this.o.Yn("[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]")
        }, this), null, y(function() {
            this.ga = null;
            e && this.qG()
        }, this)))
    }
    ;
    d.eo = function() {
        this.p.sk();
        this.watchModel.Vp()
    }
    ;
    d.wc = function() {
        var a = [this.b.Fg, (this.j || "no") + "-state", (this.w || "no") + "-mode", this.activeChildName + "-active", this.p.isPlayingAd ? "playing-ad" : "", this.Ja ? "engaged" : ""].join(" ")
          , b = this.element[0];
        b.className != a && (b.className = a)
    }
    ;
    d.TG = function() {
        var a = Math.floor(57 * Math.random() + 1);
        this.Oa = N.fi + "/bg" + a + ".jpg"
    }
    ;
    d.Qe = function(a) {
        if (this.b.supportsBackgrounds) {
            a = a || this.V && this.V.h || this.Oa;
            var b = this.element.css("background-image");
            (!b || 0 > b.indexOf(a)) && this.Kc.g(this.element[0], a)
        }
    }
    ;
    d.eJ = function() {
        this.element.css("background-image") && this.Kc.g(this.element[0], "")
    }
    ;
    d.Ys = function() {
        this.g.vD();
        this.M.Ob("")
    }
    ;
    d.Jj = function(a) {
        this.V = a;
        this.Qe()
    }
    ;
    d.gJ = function() {
        this.ac.br(this.l.sf())
    }
    ;
    d.Ws = function() {
        return this.Uf() && !this.wb() && !this.Qf() && !this.va()
    }
    ;
    d.Uf = function() {
        return "browse" === this.w || "browse" === this.j
    }
    ;
    d.wb = function() {
        return "search" === this.w
    }
    ;
    d.va = function() {
        return "watch" === this.j || "play" === this.j || "pause" === this.j
    }
    ;
    d.ae = function() {
        return "post-play" == this.w && this.va()
    }
    ;
    d.Zn = function() {
        return "call-to-cast" == this.j
    }
    ;
    d.Qf = function() {
        return "dialog" === this.activeChildName
    }
    ;
    d.Pf = function() {
        return "browse" === this.j
    }
    ;
    d.La = function(a, b) {
        a && b ? this.o.ya(b) : this.Qf() && this.o.mg()
    }
    ;
    d.Bx = function(a) {
        this.ze(a ? "dialog" : this.j);
        a || this.vo();
        this.wc();
        this.Ec()
    }
    ;
    d.ze = function(a) {
        this.activeChildName = a;
        this.qb.mJ(a)
    }
    ;
    d.zf = function() {
        this.Z.W();
        this.ze("call-to-cast");
        this.j = "call-to-cast";
        this.wc()
    }
    ;
    d.Jx = function(a) {
        a = a.detail;
        this.b.g ? this.o.ve("", N.D + "/dialogs/eureka_authorization_info.html", "status-dialog") : (this.La(!0, new Zh(y(this.gy, this),a,y(this.fy, this))),
        this.b.loopRows && this.Do())
    }
    ;
    d.gy = function() {
        this.Co();
        this.p.Zf();
        this.p.tq()
    }
    ;
    d.fy = function() {
        this.La(!1);
        this.cd()
    }
    ;
    d.Co = function() {
        this.La(!1);
        var a;
        this.g.fc() && (a = this.g.fc().model.title);
        this.g.load(y(function() {
            this.g.j = this.rc.g();
            var b = a ? this.g.Pq(a) : -1;
            this.g.cb = -1 != b ? b : this.g.Y() - 1;
            this.rf()
        }, this));
        this.va() && this.Ok()
    }
    ;
    d.Cx = function() {
        this.La(!1);
        this.ia.wd();
        this.Ys()
    }
    ;
    d.Dx = function() {
        this.va() && this.Ok()
    }
    ;
    d.ay = function(a) {
        this.g.Wq(a.detail.nc);
        this.nr(a.detail.data.id)
    }
    ;
    d.nr = function(a) {
        this.pa.ab(a, y(function(a) {
            var c = Hk(this.pa, a.title, a.serviceQuery);
            c.model = a;
            this.oh(c.fa(0), c)
        }, this))
    }
    ;
    d.$x = function(a) {
        this.oh(a.detail.data, a.detail.nc, a.detail.startTime, a.detail.xd)
    }
    ;
    d.Tx = function(a) {
        (this.Ja = !!a.detail) && this.va() && !this.ae() && this.Sb();
        this.wc()
    }
    ;
    d.oh = function(a, b, c, e, f) {
        this.N("app_rq_ply");
        if (!b || "remoteQueueService" != b.service.id && "playlistService" != b.service.id)
            this.wb() ? (this.g.Wq(b),
            b = Ok(this.Rd, "[[Now Playing|Title for currently playing playlists.]]", N.fi + "/icon-related.png", a.videoId),
            b.p(a)) : this.ae() && (b = "RV" === a.Ka ? Kk(this.Rd, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", N.fi + "/icon-related.png", a.videoId) : this.watchModel.eh());
        this.La(!1);
        b = this.watchModel.qf(a, b, c, e, f);
        this.L("mdxPlaylistChange", b);
        this.Pj(a.videoId);
        this.Sb()
    }
    ;
    d.rf = function() {
        this.wb() ? this.Ye("browse").setData(this.aa) : this.ae() ? (this.Ud.load(),
        this.Ye("browse").setData(this.Ud),
        this.he()) : this.va() ? this.Ye("browse").setData(this.watchModel) : this.Ye("browse").setData(this.g)
    }
    ;
    d.ux = function() {
        var a = this.Ye("browse");
        a && a.isSpeakable && a.Ad()
    }
    ;
    d.tx = function() {
        var a = this.Ye("browse");
        a && a.isSpeakable && a.Bd()
    }
    ;
    d.Ix = function() {
        this.Vd.QD(!this.Vd.g);
        this.ue()
    }
    ;
    d.Lx = function(a) {
        this.Eo(a);
        this.Bg.bq("history")
    }
    ;
    d.Eo = function(a) {
        (a = a.detail) && this.M.Ob(a.data ? a.data.title : "");
        this.mh()
    }
    ;
    d.Hx = function() {
        this.Ys()
    }
    ;
    d.Ox = function() {
        this.b.isVideoInfoVisible = !this.b.isVideoInfoVisible;
        this.ue()
    }
    ;
    d.Nx = function() {
        this.zg.Ra();
        this.ue()
    }
    ;
    d.Mx = function() {
        if (this.F && this.F.isSupported())
            if (this.F.enabled) {
                var a = new T(y(this.Xz, this),y(this.La, this, !1));
                a.className = "confirm-cookies";
                a.title = "[[Disable cookies|Title for a dialog confirming that the uses wishes to disable cookies.]]";
                a.templateUrl = N.D + "/dialogs/confirm_cookies_disable.html";
                a.b = !0;
                a.h = "[[Disable cookies|Label for a button confirming that the uses wishes to disable cookies.]]";
                this.La(!0, a)
            } else
                this.F.enabled = !0,
                this.ue()
    }
    ;
    d.Xz = function() {
        this.La(!1);
        this.F && this.F.isSupported() && (this.F.enabled = !1,
        this.ue())
    }
    ;
    d.Yx = function() {
        this.ue()
    }
    ;
    d.Kx = function(a) {
        var b = a.detail;
        this.va() && (this.b.g ? this.o.ve("", N.D + "/dialogs/eureka_player_error_info.html", "status-dialog") : this.La(!0, new ci(b,y(this.dy, this),y(this.cy, this))));
        J(a);
        this.b.loopRows && this.Do()
    }
    ;
    d.qG = function() {
        var a = y(this.xF, this)
          , a = new ci("[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]",a,a);
        a.h = "";
        this.La(!0, a)
    }
    ;
    d.dy = function() {
        this.La(!1);
        this.Be()
    }
    ;
    d.cy = function() {
        this.La(!1);
        this.cd()
    }
    ;
    d.xF = function() {
        this.La(!1);
        this.Yc()
    }
    ;
    d.Do = function() {
        this.O.clearTimeout(this.kf);
        this.kf = this.O.setTimeout(y(function() {
            this.La(!1);
            this.Be(!0)
        }, this), 5E3)
    }
    ;
    d.Wx = function(a, b) {
        !a && b && (this.g.load(y(function() {
            this.g.cb = this.g.Y() - 1;
            this.rf()
        }, this)),
        this.Jc.il("video_like_value"),
        this.Jc.il("channel"),
        this.rc.clear())
    }
    ;
    d.HH = function() {
        this.Qf() ? this.o.mg() : this.yh()
    }
    ;
    d.yh = function() {
        this.b.V && this.J.NetCastBack ? this.J.NetCastBack() : this.b.Z && this.J.curWidget ? this.J.curWidget.setPreference("return", "true") : this.b.o && this.Wd.isSupported() ? this.Wd.minimize() : this.b.rb && this.J.close && this.J.close()
    }
    ;
    io.$inject = "$scope $element $attrs $rootScope $route $timeout $window $document authService environmentModel injector locationService navigationService playlistService remoteService videoPlaybackInfoService watchHistoryModel watchModel csiService privateDataService timeService browseModel searchModel searchQueryModel progressModel postPlayModel brandingService subscribeService cacheService relatedVideosService postPlayReportingService dialogService soundService playerFacade rootDispatcher rateLimit localStorage searchReporting cookiesApi systemApi subscriptionsModel routerService".split(" ");
    function jo(a, b, c, e, f, g) {
        R.call(this, a, b, c);
        this.g = e;
        this.N = f;
        this.na = g
    }
    B(jo, R);
    d = jo.prototype;
    d.W = function() {
        R.prototype.W.call(this);
        var a = this.g.sf();
        this.kl() && this.qq(a);
        this.ll() && this.rq(a)
    }
    ;
    d.ea = function() {
        R.prototype.ea.call(this);
        this.Sc()
    }
    ;
    d.kl = function() {
        return !0
    }
    ;
    d.ll = function() {
        return !0
    }
    ;
    d.rq = function(a) {
        a = a || this.g.sf();
        this.N.br(a)
    }
    ;
    d.qq = function(a) {
        a = a || this.g.sf();
        this.N.zD(a)
    }
    ;
    d.Sc = function(a) {
        this.na.message = a || ""
    }
    ;
    function ko(a, b, c, e, f, g, k, l, n, q, s, r, u, O, X) {
        this.name = "browse";
        jo.call(this, a, b, c, g, k, l);
        this.M = f;
        this.ka = n;
        this.J = e;
        this.w = q;
        this.aa = s;
        this.ga = O;
        this.ia = X;
        this.O = r;
        this.pa = "nav-arrows-enabled";
        this.F = 0;
        this.o = !0;
        this.p = !1;
        this.j = this.sb("super-scroller", u);
        this.Z = this.sb("voice-footer", u);
        this.b = u.get("voiceHelper");
        this.l = u.get("voiceHelper");
        this.Bw();
        this.Aw()
    }
    B(ko, jo);
    d = ko.prototype;
    d.Bw = function() {
        var a = y(this.Re, this, 2)
          , b = y(this.Re, this, -2)
          , c = y(this.Hd, this, -1)
          , e = y(this.Hd, this, 1);
        this.l.Ga("[[Scroll left|Speech command to move selection left.]]", b);
        this.l.Ga("[[Scroll right|Speech command to move selection back.]]", a);
        this.l.Gb(this);
        this.l.disable();
        this.b.Ga("[[Scroll left|Speech command to move selection left.]]", b);
        this.b.Ga("[[Scroll down|Speech command to move selection down.]]", e);
        this.b.Ga("[[Scroll up|Speech command to move selection up.]]", c);
        this.b.Ga("[[Scroll right|Speech command to move selection back.]]", a);
        this.b.Gb(this);
        this.$ = this.b
    }
    ;
    d.Aw = function() {
        this.w.supportsPointer && this.B("keyup", y(this.kG, this));
        this.$.isSupported() && this.B("keyup", y(this.iG, this));
        this.B("button-enter", y(this.jG, this));
        this.B("mousemove", this.O(2, y(this.lG, this)));
        this.B("request-playback", y(this.mG, this));
        this.B("request-playlist-playback", y(this.nG, this));
        this.$r(100, this.hG);
        this.$r(8, this.gG);
        this.element[0].addEventListener("scroll", y(function() {
            this.element[0].scrollTop = 0;
            this.element[0].scrollLeft = 0
        }, this))
    }
    ;
    d.W = function() {
        "browse" != this.g.state() || this.g.mode() || this.N.kD();
        this.Ad();
        ko.A.W.call(this);
        this.ta(this.qd());
        this.data && this.setData(this.data);
        this.ia.uk()
    }
    ;
    d.ea = function() {
        ko.A.ea.call(this);
        this.Bd()
    }
    ;
    d.Ad = function() {
        "browse" != this.g.state() || this.g.mode() ? this.Dh(this.l) : this.Dh(this.b);
        var a = this.qd();
        a && a.Ad()
    }
    ;
    d.Bd = function() {
        if ("browse" == this.g.state() && "search" == this.g.mode())
            this.Dh(this.l);
        else {
            this.$.disable();
            this.cr();
            var a = this.qd();
            a && a.Bd()
        }
    }
    ;
    d.Dh = function(a) {
        this.$.isSupported() && (this.$.disable(),
        this.$ = a,
        this.$.enable(),
        this.cr())
    }
    ;
    d.cr = function() {
        for (var a = this.$.Qs(), b = new xh, c = 0, e = a.length; c < e; ++c)
            b.push(a[c].text);
        this.Z.model = b
    }
    ;
    d.kl = function() {
        return "browse" == this.g.state()
    }
    ;
    d.ll = function() {
        return "search" != this.g.mode()
    }
    ;
    d.setData = function(a) {
        var b = a != this.data || this.j && this.j.model != a.Fd();
        this.data = a;
        this.j && (this.j.model = a.Fd());
        (b || this.data.cb != this.F) && this.nq(this.data.cb);
        (a = this.qd()) && a.setData(this.Kb())
    }
    ;
    d.kG = function(a) {
        switch (a.keyCode) {
        case 38:
        case 40:
        case 37:
        case 39:
            J(a);
            this.Ks();
            break;
        case 13:
            this.aK(a.target)
        }
    }
    ;
    d.iG = function(a) {
        switch (a.keyCode) {
        case 27:
            this.Dh(this.b)
        }
    }
    ;
    d.jG = function(a) {
        for (var b = 0, c = this.data.rows.length, e; b < c; b++)
            if (e = this.data.rows[b],
            e.equals(a.detail)) {
                a = b - this.data.cb;
                0 != a && this.Hd(a);
                break
            }
    }
    ;
    d.lG = function() {
        this.kt()
    }
    ;
    d.$r = function(a, b) {
        this.B("keydown", this.O(a, y(b, this)))
    }
    ;
    d.gG = function(a) {
        switch (a.keyCode) {
        case 37:
            this.Re(-1);
            break;
        case 39:
            this.Re(1)
        }
    }
    ;
    d.Re = function(a) {
        var b = this.Kb()
          , c = this.ok()
          , e = c + a
          , f = b.Y() - 1;
        0 <= e && e <= f ? (this.L("play-sound", "same-toggle"),
        this.iH(c + a, a),
        b.Uh(a) && this.xk()) : 0 > e && this.L("play-sound", "same-heavy")
    }
    ;
    d.hG = function(a) {
        switch (a.keyCode) {
        case 38:
        case 33:
            this.Hd(-1);
            break;
        case 40:
        case 34:
            this.Hd(1)
        }
    }
    ;
    d.Hd = function(a) {
        !this.data || 1 >= this.data.Y() || (this.p = !0,
        this.j.g(!0),
        this.L("play-sound", "same-light"),
        this.nq(this.data.cb, a))
    }
    ;
    d.nq = function(a, b) {
        if (this.data) {
            b = b || 0;
            var c = this.data.Y()
              , e = (a + b) % c || 0;
            0 > e && (e += c);
            this.j.select(e);
            e != this.data.cb && (this.qd().element.toggleClass("disabled", !0),
            "watch" === this.g.state() && 0 === this.data.cb || this.gC(),
            this.se(this.qd()),
            this.data.cb = e);
            this.F = e;
            this.xk()
        }
    }
    ;
    d.QR = function(a) {
        a = this.data.cb + a;
        var b = this.data.length;
        0 > a ? a += b : a >= b && (a %= b);
        return this.data.Fd()[a]
    }
    ;
    d.ZS = function(a) {
        return this.isActive && this.Kb() === a
    }
    ;
    d.Kb = function() {
        return this.data ? this.data.fc() : null
    }
    ;
    d.ok = function() {
        var a = this.Kb();
        return a ? a.activeIndex : 0
    }
    ;
    d.kT = function(a) {
        return !!this.data.Fd()[a].Y()
    }
    ;
    d.kt = function() {
        bb(this.element[0], "nav-arrows-enabled");
        this.ka.cancel(this.G);
        this.G = this.ka(y(function() {
            this.Ks()
        }, this), 3E3, !1)
    }
    ;
    d.Ks = function() {
        this.ka.cancel(this.G);
        db(this.element[0], "nav-arrows-enabled")
    }
    ;
    d.aK = function(a) {
        this.kt();
        switch (a.id) {
        case "up-arrow":
            this.Hd(-1);
            break;
        case "down-arrow":
            this.Hd(1);
            break;
        case "left-arrow":
            this.Re(-2);
            break;
        case "right-arrow":
            this.Re(2)
        }
    }
    ;
    d.gC = function() {
        var a = this.Kb();
        a && (a.clear(),
        this.focus())
    }
    ;
    d.iH = function(a, b) {
        var c = this.Kb();
        c.ub(a);
        c.Nk(b);
        this.L("item-changed", {
            rowIndex: this.data.cb,
            Qp: this.ok()
        })
    }
    ;
    d.xk = function() {
        this.ka.cancel(this.V);
        this.V = this.ka(y(function() {
            this.JG()
        }, this), this.w.nm, !1);
        this.isActive && this.Sc()
    }
    ;
    d.JG = function() {
        var a = this.Kb();
        a && (this.p && this.ga.PF() ? this.xk() : (this.p = !1,
        this.isActive && this.L("toggle-loading", !0),
        a.load(y(this.QF, this), this.o)))
    }
    ;
    d.QF = function() {
        var a = this.Kb();
        this.L("row-loaded", a);
        if (0 == a.Y() && this.isActive) {
            var b = a.model.serviceQuery;
            !this.w.supportsPaidContent && b ? (a = y(this.kA, this, b),
            this.aa.ab(b, a, null, a)) : this.Sc(a.errorMessage || "[[No videos are available|The message shown when a row has no videos to show.]]")
        } else
            0 < a.Y() && this.Sc();
        this.j.g(!1);
        b = this.qd();
        b.setData(this.Kb());
        this.L("toggle-loading", !1);
        this.L("row-changed", {
            rowIndex: this.data.cb,
            Qp: this.ok()
        });
        b.element.toggleClass("disabled", !1);
        this.isActive && this.ta(this.children["browse-row"]);
        this.o && (this.o = !1,
        this.J.requestAnimationFrame(y(function() {
            this.M.pd("start_browse", "fr_rn");
            this.M.report("start_browse")
        }, this)))
    }
    ;
    d.mG = function(a) {
        if (a.target != this.K) {
            J(a);
            var b = a.detail.nc || this.Kb();
            b && this.L("request-playback", {
                data: a.detail.data,
                nc: b,
                startTime: a.detail.startTime,
                xd: a.detail.xd
            })
        }
    }
    ;
    d.nG = function(a) {
        a.target !== this.K && (J(a),
        this.L("request-playlist-playback", {
            data: a.detail.data,
            nc: this.Kb()
        }))
    }
    ;
    d.qd = function() {
        return this.children["browse-row"]
    }
    ;
    d.cS = function() {
        return this.children["super-scroller"]
    }
    ;
    d.kA = function(a, b) {
        var c = this.Kb();
        a === (c && c.model && c.model.serviceQuery) && (b && b.b ? this.Sc("[[Paid channels are not available on this device.|Message that is displayed for a video channel on a device that doesn't support paid subscriptions.]]") : this.Sc("[[No videos are available|The message shown when a row has no videos to show.]]"))
    }
    ;
    ko.$inject = "$scope $element $attrs $window csiService locationService navigationService messageModel $timeout environmentModel channelPaidInfoService rateLimit injector gestureService remoteService".split(" ");
    function lo(a, b, c, e) {
        this.name = "browseRow";
        R.call(this, a, b, c);
        this.l = e;
        this.g = this.b = null;
        this.ly()
    }
    B(lo, R);
    d = lo.prototype;
    d.ly = function() {
        this.b = this.l.get("browseList", {
            element: this.K.querySelector("#tile-row"),
            context: this
        });
        this.g = this.b.model
    }
    ;
    d.W = function() {
        lo.A.W.call(this);
        this.b && this.ta(this.b)
    }
    ;
    d.ea = function() {
        lo.A.ea.call(this);
        this.b && this.se(this.b)
    }
    ;
    d.xc = function() {
        this.j && this.j();
        lo.A.xc.call(this)
    }
    ;
    d.setData = function(a) {
        a && a !== this.data && (this.data = a,
        this.xc(),
        this.ca(a, "model:changed", y(this.GB, this)),
        this.ca(a, "activeIndex:changed", y(this.g.lb, this.g)),
        this.j = a.model.S.B("items:changed", y(this.ci, this)),
        this.ci())
    }
    ;
    d.GB = function(a) {
        this.j && this.j();
        this.j = a.S.B("items:changed", y(this.ci, this));
        this.ci()
    }
    ;
    d.ci = function() {
        var a = this.data.model.S.la()
          , b = !(!a || !a.length);
        this.tb(this.K, b);
        b ? (this.g.ja(a),
        this.g.lb(this.data.activeIndex)) : this.g.clear()
    }
    ;
    lo.prototype.getComponentRendererName = function() {
        return this.data ? this.data.Wb : ""
    }
    ;
    lo.prototype.Ad = function() {
        this.b && this.b.Ad && this.b.Ad()
    }
    ;
    lo.prototype.Bd = function() {
        this.b && this.b.Bd && this.b.Bd()
    }
    ;
    lo.$inject = ["$scope", "$element", "$attrs", "injector"];
    function mo(a, b, c, e, f, g, k, l) {
        this.name = "keyboard";
        R.call(this, a, b, c);
        this.F = e;
        this.G = f;
        this.g = g;
        this.p = k;
        this.o = this.Az();
        this.l = 0;
        this.j = !1;
        this.O = [];
        this.B("keyup", y(this.Cz, this));
        this.B("keydown", l(20, y(this.Dz, this)));
        this.B("letter-tile-key-press", y(this.Ug, this));
        this.B("grid-point-change", y(this.Bz, this));
        this.F.supportsMouseOverSearch && this.B("mouseover", y(this.Ez, this))
    }
    B(mo, R);
    d = mo.prototype;
    d.W = function() {
        mo.A.W.call(this);
        this.Ip();
        this.bd();
        this.Dc()
    }
    ;
    d.ea = function() {
        this.ob();
        mo.A.ea.call(this);
        this.VG()
    }
    ;
    d.Cb = function(a) {
        mo.A.Cb.call(this, a);
        "keyboard-grid" == a.detail.id && this.Kp()
    }
    ;
    d.Ic = function() {
        mo.A.Ic.call(this);
        this.af("isLetterSuggestVisible", this.Rh);
        this.af("getKeyRepeatRate", this.dH)
    }
    ;
    d.bd = function() {
        var a = this.$b();
        a.isActive || this.ta(a)
    }
    ;
    d.VG = function() {
        this.se(this.$b())
    }
    ;
    d.oq = function() {
        this.ta(this.Ld())
    }
    ;
    d.$b = function() {
        return this.children["keyboard-grid"]
    }
    ;
    d.Ld = function() {
        return this.children["letter-suggest"]
    }
    ;
    d.getSelection = function() {
        return this.kc().g
    }
    ;
    d.Xe = function() {
        return []
    }
    ;
    d.Zk = function(a) {
        for (var b = [], c = 0, e = a.length; c < e; ++c)
            b.push(new Kl(a[c]));
        return b
    }
    ;
    d.dH = function() {
        return this.F.isLowPerformingSearch ? 4 : 20
    }
    ;
    d.Qh = function() {
        return this.$b().isActive
    }
    ;
    d.Sh = function() {
        return this.Ld().isActive
    }
    ;
    d.Rh = function() {
        var a = this.Xe();
        return !!(this.wJ() && a && a.length)
    }
    ;
    d.wJ = function() {
        return this.Ld().element.hasClass("enabled")
    }
    ;
    d.kc = function() {
        return this.o[this.l]
    }
    ;
    d.Wk = function() {
        return this.kc().rows[this.getSelection().top][this.getSelection().left]
    }
    ;
    d.Cz = function(a) {
        switch (a.keyCode) {
        case 83:
            this.ob();
            break;
        case 8:
        case 27:
            this.Rh() && (J(a),
            this.ob())
        }
    }
    ;
    d.Dz = function(a) {
        switch (a.keyCode) {
        case 37:
            this.RI() && J(a);
            break;
        case 39:
            this.SI() && J(a);
            break;
        case 40:
            this.si() && J(a);
            break;
        case 38:
            this.ti() && J(a);
            break;
        case 172:
        case 71:
            this.ob()
        }
    }
    ;
    d.Ez = function(a) {
        var b = angular.element(a.target).scope();
        b.tile && (a = b.lk,
        b = b.$parent.$parent.lk,
        fa(a) && fa(b) && (this.L("focus-search"),
        this.getSelection().left = a,
        this.getSelection().top = b,
        a = this.$b(),
        this.bd(),
        a.Ra(!0),
        a.sg(this.getSelection()),
        this.Dc()))
    }
    ;
    d.Ug = function(a) {
        this.ob();
        this.Tj(a) || (a = a.detail,
        a != this.Wk() && this.yI(a),
        this.Dc())
    }
    ;
    d.Bz = function(a) {
        if (!this.j) {
            a = a.detail;
            this.getSelection().top = a.top;
            var b = this.kF(a.left);
            this.getSelection().left = a.left;
            this.isActive && (this.Dc(),
            this.p.Mh(0 != b))
        }
    }
    ;
    d.kF = function(a) {
        a -= this.getSelection().left;
        return 1 < a ? -1 : -1 > a ? 1 : a
    }
    ;
    d.xs = function(a) {
        if (this.Sh()) {
            var b = this.$b();
            b.Ra(!0);
            this.getSelection().left += a;
            b.sg(this.getSelection());
            (a = this.Xe()) && a.length && b.Ra(!1);
            this.Dc();
            return !0
        }
        return !1
    }
    ;
    d.lA = function(a) {
        for (var b = 0, c = this.o.length; b < c; ++b)
            if (this.o[b].name === a)
                return b;
        return -1
    }
    ;
    d.Tj = function(a) {
        var b = a.detail
          , b = b && b.b ? this.lA(b.b) : -1;
        return 0 <= b && b != this.l ? (this.l = b,
        this.G.o = this.kc().b,
        this.Kp(),
        this.Ip(),
        this.Dc(),
        J(a),
        !0) : !1
    }
    ;
    d.Kp = function() {
        this.j = !0;
        this.$b().setData(this.kc().rows);
        this.j = !1;
        this.$b().sg(this.getSelection())
    }
    ;
    d.ob = function() {
        this.Lk(0);
        this.$b().Ra(!0);
        this.bd();
        this.Rs(!1)
    }
    ;
    d.Lk = function(a) {
        this.Ld().ub(a)
    }
    ;
    d.si = function() {
        if (this.Qh() && this.Rh())
            return this.Lk(0),
            this.oq(),
            this.$b().Ra(!1),
            !0;
        this.ob();
        return !1
    }
    ;
    d.RI = function() {
        this.p.Mh(!0);
        return this.xs(-1)
    }
    ;
    d.SI = function() {
        this.p.Mh(!0);
        return this.xs(1)
    }
    ;
    d.ti = function() {
        if (this.Sh())
            return this.ob(),
            !0;
        this.ob();
        return !1
    }
    ;
    d.or = function() {
        this.Rs(!0);
        var a = this.$b().fa(this.getSelection());
        a && (a = a.element[0].getBoundingClientRect(),
        this.Ld().element.css("left", a.left + "px").css("top", a.bottom + "px"))
    }
    ;
    d.Dc = function() {
        var a = this.Xe();
        a && a.length ? this.or() : this.ob();
        this.Ld().setData(a || [])
    }
    ;
    d.yI = function(a) {
        F(this.kc().rows, function(b, c) {
            if (v(b)) {
                var e = Ha(b, a);
                0 <= e && (this.getSelection().left = e,
                this.getSelection().top = c,
                e = this.$b(),
                e.sg(this.getSelection()),
                e.Ra(!0),
                this.bd())
            }
        }, this)
    }
    ;
    d.Az = function() {
        var a = []
          , b = this.vJ()
          , c = "RU" == b;
        b && (a.push(this.pt(b, c, "EN")),
        c && a.push(this.qt(b)));
        a.push(this.pt("EN", !0, b, !!b));
        a.push(this.qt("EN"));
        return a
    }
    ;
    d.pt = function(a, b, c, e) {
        var f = this.wt(a)
          , g = f[f.length - 1];
        b && g.push(new Kl("123","numbers-toggle-tile",this.xt(a)));
        g.push(new Kl(null,"delete-tile"));
        b = null;
        c && (g.push(new Kl(null,"language-toggle-tile",c)),
        e && (b = new Ml(f.length - 1,g.length - 1)));
        return new Ll(a,a,f,b)
    }
    ;
    d.qt = function(a) {
        var b = this.wt("NUMBERS")
          , c = b[b.length - 1];
        c.push(new Kl(Ad[a].substr(0, 3),"numbers-toggle-tile",a));
        var e = new Ml(b.length - 1,c.length - 1);
        c.push(new Kl(null,"delete-tile"));
        return new Ll(this.xt(a),"NUMBERS",b,e)
    }
    ;
    d.xt = function(a) {
        return a + "_NUMBERS"
    }
    ;
    d.wt = function(a) {
        a = String(Ad[a]).split("\n");
        return La(a, y(function(a) {
            return this.Zk(a.split(""))
        }, this))
    }
    ;
    d.Rs = function(a) {
        this.Ld().element.toggleClass("enabled", a)
    }
    ;
    d.Ip = function() {
        var a = "lang-" + this.kc().name.toLowerCase();
        this.element.hasClass(a) || (a = this.element.attr("class").replace(wd, "") + " " + a,
        this.element.attr("class", a))
    }
    ;
    d.vJ = function() {
        switch (this.G.Ea) {
        case "ru_RU":
        case "uk_UA":
            return "RU";
        case "ko_KR":
            return "KO";
        case "ja_JP":
            return "JP";
        default:
            return null
        }
    }
    ;
    mo.$inject = "$scope $element $attrs environmentModel locale searchQueryModel searchReporting rateLimit".split(" ");
    function no(a, b, c, e, f, g, k, l, n) {
        mo.call(this, a, b, c, e, f, g, k, l);
        this.b = "keyboard-grid";
        this.M = this.sb("transliteration", n, this);
        this.element.addClass("transliterable");
        this.B("transliteration-selected", y(function() {
            this.bd();
            this.Dc()
        }, this))
    }
    B(no, mo);
    no.prototype.w = function() {
        return this.children.transliteration.isActive
    }
    ;
    no.prototype.W = function() {
        this.FB();
        mo.prototype.W.call(this);
        this.children["keyboard-grid"].Ra(!0);
        "keyboard-grid" === this.b ? this.bd() : "transliteration" === this.b && this.ta(this.children.transliteration);
        this.activeChildName = this.b
    }
    ;
    no.prototype.si = function() {
        if (this.w())
            return this.bd(),
            this.Dc(),
            !0;
        if (this.Qh() && this.Rh())
            return this.Lk(0),
            this.oq(),
            this.children["keyboard-grid"].Ra(!1),
            !0;
        this.b = "keyboard-grid";
        this.ob();
        return !1
    }
    ;
    no.prototype.ti = function() {
        if (this.Qh() && this.M.transliterations.Y())
            return this.ob(),
            this.ta(this.children.transliteration),
            !0;
        if (this.Sh())
            return this.bd(),
            this.children["keyboard-grid"].Ra(!0),
            !0;
        this.w() ? this.b = "transliteration" : (this.b = "keyboard-grid",
        this.ob());
        return !1
    }
    ;
    no.$inject = "$scope $element $attrs environmentModel locale searchQueryModel searchReporting rateLimit injector".split(" ");
    function oo(a, b, c, e, f, g, k, l, n) {
        no.call(this, a, b, c, e, f, g, k, l, n);
        this.langCodePair = pn("en", "zh-Hans")
    }
    B(oo, no);
    oo.$inject = "$scope $element $attrs environmentModel locale searchQueryModel searchReporting rateLimit injector".split(" ");
    function po(a, b, c, e, f) {
        this.name = "debug";
        Q.call(this, a, b, c);
        this.J = e;
        this.b = f;
        this.b.B("items:changed", y(this.U, this));
        this.b.Y() && this.U()
    }
    B(po, Q);
    po.prototype.U = function() {
        bb(this.J.document.body, "debug");
        this.element[0].textContent = this.b.la().join("");
        this.element[0].innerHTML = this.element[0].innerHTML.replace(/\n/g, "<br />")
    }
    ;
    po.$inject = ["$scope", "$element", "$attrs", "$window", "debugModel"];
    function qo(a, b, c, e) {
        R.call(this, a, b, c);
        this.ka = e;
        this.M = 0;
        this.ga = 5E3;
        this.Aa = y(this.Dl, this)
    }
    B(qo, R);
    qo.prototype.W = function() {
        R.prototype.W.call(this);
        this.mc()
    }
    ;
    qo.prototype.ea = function() {
        this.ka.cancel(this.M);
        R.prototype.ea.call(this)
    }
    ;
    qo.prototype.mc = function() {
        this.ka.cancel(this.M);
        this.M = this.ka(this.Aa, this.ga)
    }
    ;
    qo.prototype.Dl = function() {}
    ;
    function ro(a, b, c, e, f) {
        this.name = "grid";
        R.call(this, a, b, c);
        this.o = e;
        this.l = f;
        this.b = new Ml;
        this.Jm = c.itemRenderer || "";
        this.p = c.loop || !1;
        this.j = Number(this.scope.$eval(c.rowCount));
        this.g = c.repeatRate;
        this.B("keydown", y(this.Fv, this));
        this.B("list-item-index-change", y(this.Ev, this))
    }
    B(ro, R);
    d = ro.prototype;
    d.W = function() {
        ro.A.W.call(this);
        this.ta(this.Ta(this.b.top))
    }
    ;
    d.ea = function() {
        ro.A.ea.call(this);
        this.se(this.Ta(this.b.top))
    }
    ;
    d.setData = function(a) {
        ro.A.setData.call(this, a);
        this.Dd();
        this.Th(0, 0)
    }
    ;
    d.Dd = function() {
        if (!ro.A.Dd.call(this))
            return !1;
        for (var a = "", b = 0, c = this.data.length; b < c; ++b)
            a += this.ZE(b);
        this.np() && (a += this.$E());
        this.k && (this.k.$destroy(),
        this.Vf());
        this.k = this.scope.$new();
        this.element.html(a);
        this.o(this.element.contents())(this.k);
        this.Qj();
        this.Ec();
        return !0
    }
    ;
    d.Ic = function() {
        ro.A.Ic.call(this);
        this.af("getDataRow", this.fH)
    }
    ;
    d.sg = function(a) {
        a && this.b != a && this.Th(a.top, a.left, !0)
    }
    ;
    d.ZE = function(a) {
        a = ' class="grid-row" data="grid.getDataRow(' + a + ')" item-renderer="' + this.Jm + '" loop="' + this.p + '" orientation="horizontal"';
        this.g && (a += ' repeat-rate="' + this.g + '"');
        return "<yt:list " + a + "></yt:list>"
    }
    ;
    d.$E = function() {
        return '<yt:scrollbar class="grid-scrollbar"></yt:scrollbar>'
    }
    ;
    d.Fv = function(a) {
        switch (a.keyCode) {
        case 40:
            this.Ot(1) && J(a);
            break;
        case 38:
            this.Ot(-1) && J(a)
        }
    }
    ;
    d.Ot = function(a) {
        if (!t(this.H.consumeKeys) || this.scope.$eval(this.H.consumeKeys))
            if (a = this.b.top + a,
            this.data[a])
                return this.Th(a, this.b.left),
                !0;
        return !1
    }
    ;
    d.Ev = function(a) {
        this.Th(this.b.top, a.detail, !1, !0);
        J(a)
    }
    ;
    d.Th = function(a, b, c, e) {
        this.b.top = a;
        this.b.left = b;
        this.PB();
        e || this.Op();
        c || this.L("grid-point-change", this.b);
        this.Qj()
    }
    ;
    d.Qj = function() {
        if (this.np()) {
            var a = 100 / this.data.length;
            this.l.b = a;
            this.l.percentageScrolled = this.b.top * a
        }
    }
    ;
    d.Cb = function(a) {
        ro.A.Cb.call(this, a);
        a = a.detail;
        var b = this.h.length - 1;
        a.scope.lk = b;
        this.isActive && b == this.b.top && this.Op();
        a.element.hasClass("scrollbar") && this.Qj()
    }
    ;
    d.Op = function() {
        var a = this.Ta(this.b.top);
        a && (this.ta(a),
        a.ub(this.b.left))
    }
    ;
    d.PB = function() {
        this.data && this.data.length && (this.b.top = hb(this.b.top, 0, this.data.length - 1),
        this.b.left = hb(this.b.left, 0, this.data[this.b.top].length - 1))
    }
    ;
    d.fH = function(a) {
        return this.data ? this.data[a] : null
    }
    ;
    d.Ra = function(a) {
        var b = this.Ta(this.b.top);
        b && (b = b.Ta(this.b.left)) && b.Ra(a)
    }
    ;
    d.fa = function(a) {
        var b = this.Ta(a.top);
        return b && b.Ta(a.left)
    }
    ;
    d.np = function() {
        return !!(this.j && this.data && this.data.length > this.j)
    }
    ;
    ro.$inject = ["$scope", "$element", "$attrs", "$compile", "scrollbarModel"];
    function so(a, b, c, e, f, g, k, l, n) {
        no.call(this, a, b, c, e, f, g, k, l, n);
        this.langCodePair = pn("ja-Hira", "ja")
    }
    B(so, no);
    so.prototype.Ug = function(a) {
        if (!this.Tj(a)) {
            var b = a.detail;
            if (b.content && this.N(b.content)) {
                var c = this.g.Si()
                  , e = c.slice(-1);
                if (b = vd[b.content][e])
                    c = c.slice(0, c.length - 1) + b,
                    this.g.Ob(c),
                    this.L("letter-tile-key-press");
                J(a)
            }
            this.Xe() && this.or()
        }
    }
    ;
    so.prototype.Xe = function() {
        var a = sd[this.Wk().content];
        return a ? this.Zk(a) : []
    }
    ;
    so.prototype.N = function(a) {
        return G(rd, a)
    }
    ;
    so.$inject = "$scope $element $attrs environmentModel locale searchQueryModel searchReporting rateLimit injector".split(" ");
    function to(a, b, c, e, f, g, k, l) {
        mo.call(this, a, b, c, e, f, g, k, l);
        this.b = wb(ud);
        this.g.B("query:changed", y(this.fz, this))
    }
    B(to, mo);
    d = to.prototype;
    d.fz = function(a) {
        a = La(a.split(""), function(a) {
            return ud[a] || a
        }).join("");
        a = eo(go(bo(a.replace("\u001d", ""))));
        a = La(a.split(""), function(a) {
            return this.b[a] || a
        }, this).join("");
        this.g.Ob(a)
    }
    ;
    d.si = function() {
        return this.Sh() && this.ft(1) || mo.prototype.si.call(this)
    }
    ;
    d.ti = function() {
        return this.Qh() && this.ft(-1) || mo.prototype.ti.call(this)
    }
    ;
    d.ft = function(a) {
        return this.kc() && this.kc().rows[this.getSelection().top + a] ? (this.ob(),
        this.getSelection().top += a,
        this.children["keyboard-grid"].sg(this.getSelection()),
        this.Dc(),
        !0) : !1
    }
    ;
    d.Xe = function() {
        if ("KO" != this.kc().b)
            return [];
        var a = td[this.Wk().content];
        return a ? this.Zk(a) : []
    }
    ;
    d.Ug = function(a) {
        "KO" != this.kc().b ? to.A.Ug.call(this, a) : (this.ob(),
        this.Tj(a))
    }
    ;
    to.$inject = "$scope $element $attrs environmentModel locale searchQueryModel searchReporting rateLimit".split(" ");
    function uo(a, b, c, e, f) {
        this.name = this.name || "list";
        R.call(this, a, b, c);
        this.l = e;
        this.activeIndex = 0;
        this.o = c.orientation || "vertical";
        this.b = this.scope.$eval(c.displayCount);
        this.g = c.loop ? !!this.scope.$eval(c.loop) : !1;
        this.j = c.paging ? !!this.scope.$eval(c.paging) : !0;
        this.k = null;
        this.p = f;
        c.activeIndex && this.scope.$watch(c.activeIndex, y(this.ub, this));
        this.B("keyup", y(this.Mu, this));
        c.repeatRate ? this.B("keydown", this.p(this.scope.$eval(c.repeatRate), y(this.Ti, this))) : this.B("keydown", y(this.Ti, this));
        this.scope.list = this
    }
    B(uo, R);
    d = uo.prototype;
    d.W = function() {
        uo.A.W.call(this);
        this.Zc(this.activeIndex, !1)
    }
    ;
    d.uc = function(a) {
        a && this.data && a.length === this.data.length ? this.data = a : (this.data = a,
        this.Gd(),
        this.data && this.Dd())
    }
    ;
    d.setData = function(a) {
        uo.A.setData.call(this, a);
        this.Dd() || (this.El(),
        this.isActive && this.Gd())
    }
    ;
    d.El = function() {
        for (var a = this.h.length, b = 0; b < a; ++b)
            this.h[b].setData(this.fa(b))
    }
    ;
    d.Dd = function() {
        if (!uo.A.Dd.call(this))
            return !1;
        for (var a = "", b = Math.min(this.b ? this.b : this.data.length, this.data.length), c = 0; c < b; ++c)
            a += this.Lp(this.data[c].Jm, c);
        this.k && (this.k.$destroy(),
        this.Vf());
        this.k = this.scope.$new();
        this.element.html(a);
        this.l(this.element.contents())(this.k);
        this.Ec();
        this.isActive && this.Gd();
        return !0
    }
    ;
    d.Lp = function(a) {
        a = a || this.H.itemRenderer;
        return "<" + a + ' class="item"></' + a + ">"
    }
    ;
    d.Cb = function(a) {
        var b = a.detail;
        uo.A.Cb.call(this, a);
        a = this.h.length - 1;
        b.setData(this.fa(a));
        b.scope.lk = a;
        this.isActive && a == this.activeIndex && this.ta(b)
    }
    ;
    d.ub = function(a) {
        a != this.activeIndex && this.st(a, !1)
    }
    ;
    d.rt = function() {}
    ;
    d.At = function() {}
    ;
    d.Mu = function(a) {
        switch (a.keyCode) {
        case 37:
        case 39:
            this.Xr() || J(a)
        }
        this.At(a)
    }
    ;
    d.Ti = function(a) {
        var b = this.xJ(a.keyCode);
        0 !== b && this.st(this.activeIndex + b, !0, a);
        this.rt(a)
    }
    ;
    d.xJ = function(a) {
        if (this.Xr())
            switch (a) {
            case 40:
                return 1;
            case 38:
                return -1
            }
        else
            switch (a) {
            case 37:
                return -1;
            case 39:
                return 1
            }
        if (this.j)
            switch (a) {
            case 176:
                return 8;
            case 177:
                return -8
            }
        return 0
    }
    ;
    d.Lt = function() {
        return !0
    }
    ;
    d.XD = function(a) {
        return this.Lt(a) && this.activeIndex !== a
    }
    ;
    d.Gd = function() {
        this.ta(this.Ta(this.activeIndex))
    }
    ;
    d.Zc = function(a, b) {
        this.activeIndex = a;
        this.ta(this.Ta(this.activeIndex));
        b && this.L("list-item-index-change", this.activeIndex)
    }
    ;
    d.st = function(a, b, c) {
        var e = this.data ? this.data.length : 0
          , f = this.g ? (a + e) % e : hb(a, 0, e - 1);
        if (f != this.activeIndex) {
            a = a < this.activeIndex ? -1 : 1;
            for (var e = this.g ? e : 0 > a ? f + 1 : e - f, g = 0; g < e; ++g) {
                var k = f + g * a;
                if (this.XD(k)) {
                    c && J(c);
                    this.Zc(k, b);
                    break
                }
            }
        }
    }
    ;
    d.fa = function(a) {
        return this.data ? this.data[a] : null
    }
    ;
    d.Ra = function(a) {
        this.h[this.activeIndex].Ra(a)
    }
    ;
    d.Xr = function() {
        return "vertical" === this.o
    }
    ;
    uo.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function vo(a, b, c, e, f) {
        uo.call(this, a, b, c, e, f)
    }
    B(vo, uo);
    vo.prototype.Gd = function() {
        if (!this.data || this.activeIndex >= this.data.length)
            this.activeIndex = hb(this.activeIndex, 0, this.data.length - 1);
        vo.A.Gd.call(this)
    }
    ;
    vo.prototype.gm = function() {
        return this.data.length !== this.h.length
    }
    ;
    vo.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function wo(a, b, c) {
        this.name = "tile";
        R.call(this, a, b, c);
        this.b = "letter-tile";
        this.g = this.element[0].children[0];
        this.B("keydown", y(function(a) {
            13 == a.keyCode && this.L("letter-tile-key-press", this.data)
        }, this))
    }
    B(wo, R);
    d = wo.prototype;
    d.setData = function(a) {
        wo.A.setData.call(this, a);
        this.U()
    }
    ;
    d.uc = function(a) {
        wo.A.uc.call(this, a);
        this.U()
    }
    ;
    d.U = function() {
        this.tb(this.element[0], this.data);
        if (this.data) {
            var a = "\u00a0"
              , b = null;
            if (w(this.data))
                a = this.data;
            else
                var c = this.data
                  , a = c.content || a
                  , b = c.tileClass;
            this.hb(this.element[0], a);
            a = ["letter-tile"];
            b && a.push(c.tileClass);
            this.QI(a)
        }
    }
    ;
    d.QI = function(a) {
        var b = this.element[0].className.split(" ");
        b.push.apply(b, a);
        Ua(b);
        this.element[0].className = b.join(" ")
    }
    ;
    d.Ra = function(a) {
        this.element.toggleClass("disabled", !a)
    }
    ;
    wo.$inject = ["$scope", "$element", "$attrs"];
    function xo(a, b, c, e, f) {
        this.name = "message";
        Q.call(this, a, b, c);
        this.g = e;
        this.data = f;
        this.b(this.data.message);
        this.data.B("message:changed", y(this.b, this))
    }
    B(xo, Q);
    xo.prototype.b = function(a) {
        this.hb(this.element[0], this.g.P(a || ""))
    }
    ;
    xo.$inject = ["$scope", "$element", "$attrs", "locale", "messageModel"];
    function yo(a, b, c) {
        Q.call(this, a, b, c);
        setInterval(y(this.b, this), 3E3)
    }
    B(yo, Q);
    yo.prototype.b = function() {
        var a = (this.scope.$root.$perfLog || []).slice(-15);
        this.element[0].innerHTML = a.map(function(a) {
            return "<li>" + a + "</li>"
        }, this).join("")
    }
    ;
    yo.$inject = ["$scope", "$element", "$attrs"];
    function zo(a, b, c, e, f) {
        uo.call(this, a, b, c, e, f);
        this.w = 2;
        this.b = 12
    }
    B(zo, uo);
    zo.prototype.Ti = function() {}
    ;
    zo.prototype.fa = function(a) {
        a = a + this.activeIndex - 2;
        0 > a && (a += this.data.length);
        a = a % this.data.length;
        return this.data ? this.data[a] : null
    }
    ;
    zo.prototype.Zc = function(a, b) {
        this.activeIndex = a;
        b && this.L("list-item-index-change", this.activeIndex)
    }
    ;
    zo.prototype.ub = function(a) {
        zo.A.ub.call(this, a);
        this.El()
    }
    ;
    zo.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function Ao(a, b, c, e) {
        this.name = "scrollpane";
        R.call(this, a, b, c);
        this.g = e;
        this.B("keydown", y(this.j, this))
    }
    B(Ao, R);
    Ao.prototype.j = function(a) {
        switch (a.keyCode) {
        case 40:
            this.b(1);
            break;
        case 38:
            this.b(-1)
        }
    }
    ;
    Ao.prototype.b = function(a) {
        var b = this.element[0]
          , c = Math.min(b.scrollHeight / 100, 0.5 * b.offsetHeight);
        b.scrollTop += a * c;
        a = b.scrollHeight - b.offsetHeight;
        this.g.percentageScrolled = 0 == a ? 0 : 100 * b.scrollTop / a
    }
    ;
    Ao.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];
    function Bo(a, b, c, e) {
        this.name = "scrollbar";
        Q.call(this, a, b, c);
        this.j = e;
        this.g = this.da(".handle");
        this.ca(this.j, "percentageScrolled:changed", y(this.l, this))
    }
    B(Bo, Q);
    Bo.prototype.l = function() {
        this.b || (this.b = 0.01 * (this.element[0].offsetHeight - this.g.offsetHeight));
        this.g.style.top = Math.floor(this.b * this.j.percentageScrolled) + "px"
    }
    ;
    Bo.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];
    function Co(a, b, c, e, f, g, k, l, n, q, s, r, u) {
        this.name = "search";
        jo.call(this, a, b, c, e, f, g);
        this.l = k;
        this.ga = l;
        this.b = n;
        this.aa = s;
        this.V = q;
        this.O = this.F = !1;
        this.o = this.da("#search-input");
        this.M = this.l.supportsHardwareKeyboard || this.l.supportsNativeOsk;
        this.Z = this.da("#search-query");
        this.w = this.p = null;
        this.G = u;
        this.j = r;
        this.Pv();
        this.M || this.o.setAttribute("disabled", "true");
        this.l.supportsSearchSuggestion ? (this.p = this.sb("suggestions", this.V),
        this.hn(this.p)) : this.tb(this.da("#search-suggestions"), !1);
        this.o.addEventListener("keydown", y(this.Rv, this), !0);
        this.o.addEventListener("keyup", y(this.Sv, this), !0);
        this.o.addEventListener("input", y(this.Qv, this), !0);
        this.B("letter-tile-key-press", y(this.Tv, this));
        this.B("keydown", y(this.Wv, this));
        this.B("keyup", y(this.Xv, this));
        this.b.B("query:changed", y(this.Yv, this));
        this.b.B("results:changed", y(this.Uv, this));
        this.B("suggest", y(this.Vv, this))
    }
    B(Co, jo);
    d = Co.prototype;
    d.Pv = function() {
        this.l.j || (this.w = this.sb("pairing", this.V),
        this.w.context = "search",
        this.l.rm && (this.w.h = !0),
        this.w.C = !1)
    }
    ;
    d.Fo = function() {
        this.w && (this.isActive && this.b.Za() ? (this.tb(this.da(".search-pairing"), !0),
        this.tb(this.da(".search-hint"), !0),
        this.w.W()) : (this.tb(this.da(".search-pairing"), !1),
        this.tb(this.da(".search-hint"), !1),
        this.w.ea()))
    }
    ;
    d.Rv = function(a) {
        this.Hp(a.keyCode) && (this.j.$F(),
        J(a, !0))
    }
    ;
    d.Sv = function(a) {
        this.Hp(a.keyCode) && (this.O = !0,
        J(a, !0));
        switch (a.keyCode) {
        case 8:
            J(a, !0);
        case 13:
        case 27:
            if (this.l.j && !this.b.Za()) {
                J(a);
                var b = Od(a.target, "keydown", 40, !0, a.b);
                a.target.dispatchEvent(b)
            }
        }
    }
    ;
    d.W = function() {
        Co.A.W.call(this);
        this.ga.setTimeout(y(this.Nr, this), 0);
        this.Fo();
        this.j.gF() || this.fF()
    }
    ;
    d.ea = function() {
        Co.A.ea.call(this);
        this.$G() && this.Pr()
    }
    ;
    d.$G = function() {
        return "search" != this.g.mode()
    }
    ;
    d.Qv = function(a) {
        this.b.Ob(a.target.value)
    }
    ;
    d.Hp = function(a) {
        return 27 != a && 172 != a && 40 != a && 37 != a && 39 != a
    }
    ;
    d.Vv = function(a) {
        this.b.Ob(a.detail);
        this.j.bq("qs");
        this.j.Zo()
    }
    ;
    d.Cb = function(a) {
        var b = a.detail;
        Co.A.Cb.call(this, a);
        this.hn(b);
        this.Nr()
    }
    ;
    d.hn = function(a) {
        this.l.supportsMouseOverSearch && a.B("mouseover", y(this.eG, this, a))
    }
    ;
    d.fF = function() {
        this.j.sF();
        this.ca(this.G, "request-playback", y(this.tF, this));
        this.ca(this.G, "report-search-outcome", y(this.rF, this))
    }
    ;
    d.Pr = function() {
        this.j.wF();
        this.fg(this.G, "request-playback");
        this.fg(this.G, "report-search-outcome")
    }
    ;
    d.tF = function(a) {
        this.j.TF(a.detail.nc.activeIndex + 1);
        this.Wr("select")
    }
    ;
    d.rF = function(a) {
        this.Wr(a.detail)
    }
    ;
    d.Wr = function(a) {
        this.j.ep(a);
        this.Pr()
    }
    ;
    d.Ic = function() {
        Co.A.Ic.call(this)
    }
    ;
    d.Nr = function() {
        this.isActive && (this.l.supportsNativeOsk ? this.wk() : this.ta(this.Me()))
    }
    ;
    d.Xv = function(a) {
        switch (a.keyCode) {
        case 13:
        case 172:
        case 71:
            J(a, !0)
        }
    }
    ;
    d.Wv = function(a) {
        switch (a.keyCode) {
        case 40:
            this.$A() && J(a);
            break;
        case 38:
            this.aB() && J(a);
            break;
        case 172:
            J(a, !0);
            this.l.supportsNativeOsk || this.b.Yj();
            break;
        default:
            !this.l.supportsHardwareKeyboard || 37 == a.keyCode || 39 == a.keyCode || 40 == a.keyCode || 27 == a.keyCode || 170 == a.keyCode || 13 == a.keyCode && (!a.b || a.b instanceof MouseEvent) || (this.l.tm || 8 != a.keyCode) && this.wk()
        }
    }
    ;
    d.eG = function(a) {
        a && a != this.C && this.ta(a)
    }
    ;
    d.GG = function() {
        return this.Me().isActive
    }
    ;
    d.hq = function() {
        var a = this.Ps();
        return a && a.isActive
    }
    ;
    d.ZA = function() {
        return this.C == this.p
    }
    ;
    d.$A = function() {
        if (this.hq()) {
            if (this.gq())
                return this.ta(this.p),
                !0;
            if (this.Me())
                return this.ta(this.Me()),
                !0
        } else if (this.ZA() && this.Me())
            return this.ta(this.Me()),
            !0;
        return this.b.Za() || !this.F
    }
    ;
    d.aB = function() {
        return this.GG() && this.gq() ? (this.ta(this.p),
        !0) : this.O && !this.hq() ? (this.wk(),
        !0) : !1
    }
    ;
    d.gq = function() {
        return !!this.p && 0 < this.p.model.suggestions.Y()
    }
    ;
    d.aT = function() {
        return !!this.b.g && 0 === this.b.g.Y()
    }
    ;
    d.Tv = function(a) {
        if (a = a.detail)
            this.j.Mh(!1),
            a.content ? this.b.DA(a.content.replace("_", " ")) : "delete-tile" === a.tileClass && this.b.Yj()
    }
    ;
    d.Yv = function() {
        var a = this.b.Si();
        this.tb(this.o, this.M || this.b.Za());
        this.M ? this.o.value != a && (this.o.value = a,
        this.o.scrollLeft = this.o.scrollWidth - this.o.clientWidth) : this.hb(this.Z, a);
        this.F = !1;
        this.Fo();
        this.Sc();
        this.Hy();
        this.L("toggle-loading", !this.b.Za());
        this.L("loaded");
        this.b.Za() ? (this.j.ep("clear"),
        this.j.Zo(),
        this.j.Gy()) : this.aa.Iy()
    }
    ;
    d.Hy = function() {
        this.l.supportsSearchSuggestion && this.p.update(this.b.Si())
    }
    ;
    d.Uv = function(a) {
        this.j.$z(a.serviceQuery);
        this.L("toggle-loading", !1);
        this.L("loaded", a);
        0 === a.Y() ? (this.F = !1,
        this.b.Za() || this.Sc("[[No videos are available|The message shown when a row has no videos to show.]]")) : this.F = !0
    }
    ;
    d.Me = function() {
        return this.children["search-keyboard"]
    }
    ;
    d.Ps = function() {
        return this.children["search-input"]
    }
    ;
    d.wk = function() {
        this.L("focus-search");
        this.ta(this.Ps());
        this.Ec()
    }
    ;
    Co.$inject = "$scope $element $attrs locationService navigationService messageModel environmentModel timeService searchQueryModel injector remoteService searchReporting rootDispatcher".split(" ");
    function Do() {
        this.b = !1
    }
    Do.prototype.g = function() {
        this.b = !1
    }
    ;
    Do.prototype.Ue = function(a) {
        return a ? "icon-unsubscribe" : "icon-subscribe"
    }
    ;
    Do.prototype.gh = function() {
        this.b = !0
    }
    ;
    Do.prototype.Se = function(a) {
        return a ? this.b ? "[[Now Subscribed!|Tooltip suggesting that the user has just subscribed to the current video.]]" : "[[Already Subscribed!|Tooltip stating that the user is subscribed to the current video, but has tried to subscribe again.]]" : "[[Subscribe?|Tooltip suggesting that the user can subscribe tothe current video.]]"
    }
    ;
    function Eo(a, b, c, e, f, g, k, l, n) {
        this.name = "toasts";
        R.call(this, a, b, c);
        this.j = e;
        this.p = g;
        this.o = k;
        this.b = [];
        this.w = null;
        this.g = this.da(".toasts");
        this.l = this.Tu();
        this.o.g || l.B("volumeData:changed", y(this.Uu, this));
        this.ca(n, "remote:connected", y(this.Qm, this, !0));
        this.ca(n, "remote:disconnected", y(this.Qm, this, !1))
    }
    B(Eo, R);
    d = Eo.prototype;
    d.kp = function() {
        return 0 < this.b.length || !1
    }
    ;
    d.Tu = function() {
        return {
            "android-phone": {
                "true": "android-phone-connected",
                "false": "android-phone-disconnected"
            },
            "android-tablet": {
                "true": "android-tablet-connected",
                "false": "android-tablet-disconnected"
            },
            "youtube-desktop": {
                "true": "laptop-connected",
                "false": "laptop-disconnected"
            },
            "blazer-phone": {
                "true": "remote-connected",
                "false": "remote-disconnected"
            },
            "blazer-tablet": {
                "true": "remote-connected",
                "false": "remote-disconnected"
            },
            "ytios-phone": {
                "true": "ios-phone-connected",
                "false": "ios-phone-disconnected"
            },
            "ytios-tablet": {
                "true": "ios-tablet-connected",
                "false": "ios-tablet-disconnected"
            }
        }
    }
    ;
    d.ip = function() {
        0 < this.b.length && this.p.get(N.D + "/rolling_toast.html", {}, y(this.gB, this))
    }
    ;
    d.gB = function(a) {
        this.rd(this.g, "");
        for (var b, c, e, f = 0, g = this.b.length; f < g; ++f)
            this.g.innerHTML += a,
            b = this.g.children,
            e = this.b[f],
            b = b[b.length - 1],
            b.id = this.ih(e.id),
            b.className += " " + e.className,
            c = b.querySelector(".toast-icon"),
            c.className += " " + e.b,
            c = b.querySelector(".toast-progress"),
            c.style.display = e.j ? "" : "none",
            c = b.querySelector(".progress"),
            c.style.width = e.h + "%",
            b = b.querySelector(".toast-msg"),
            this.rd(b, e.message)
    }
    ;
    d.Uu = function(a, b) {
        if (-1 != b.volume) {
            var c = a.volume;
            if (fa(c) && !(0 > c || 100 < c || isNaN(c))) {
                var e = this.jp("vol", !0, 7500)
                  , f = Math.round(c / 10);
                e.className = "volume-toast";
                e.j = !0;
                e.h = c;
                e.message = "" + f;
                e.b = a.muted ? "volume-muted" : 8 <= f ? "volume-high" : 4 <= f ? "volume-mid" : 1 <= f ? "volume-low" : "volume-muted";
                this.ip();
                this.tb(this.element[0], this.kp())
            }
        }
    }
    ;
    d.Qm = function(a, b, c) {
        if ("remote-pair" != this.data && "remote-reset" != this.data && c) {
            c = this.jp(b.id, !1, 5E3);
            c.className = "remote-connect";
            var e = b.Qc.match(/^[^-]+-[^-]+/);
            c.b = this.bC(e ? e[0] : "", a);
            c.message = (new Oh(b)).displayString;
            this.ip();
            this.tb(this.element[0], this.kp())
        }
    }
    ;
    d.bC = function(a, b) {
        return a in this.l ? this.l[a][b] : b ? "remote-connected" : "remote-disconnected"
    }
    ;
    d.jp = function(a, b, c) {
        for (var e = null, f = 0, g = this.b.length; f < g; ++f)
            if (this.b[f].id === a) {
                e = this.b[f];
                break
            }
        e ? (this.j.clearTimeout(e.g),
        (a = document.getElementById(this.ih(e.id))) && db(a, "toast-roll")) : (e = new Ol,
        e.id = a,
        b ? this.b.unshift(e) : this.b.push(e));
        e.g = this.j.setTimeout(y(this.px, this, e), c);
        return e
    }
    ;
    d.px = function(a) {
        var b = document.getElementById(this.ih(a.id));
        b && bb(b, "toast-roll");
        a.g = this.j.setTimeout(y(this.$C, this, a.id), 700)
    }
    ;
    d.$C = function(a) {
        this.b = this.b.filter(function(b) {
            return b.id != a
        });
        zc(document.getElementById(this.ih(a)))
    }
    ;
    d.ih = function(a) {
        return "toast-" + a
    }
    ;
    Eo.$inject = "$scope $element $attrs timeService rootDispatcher templateClient environmentModel playerFacade remoteService".split(" ");
    function Fo(a, b, c, e) {
        this.k = a;
        this.h = b;
        this.o = c;
        this.j = e;
        this.b = {};
        this.l = {};
        this.g = null;
        this.Iu()
    }
    d = Fo.prototype;
    d.qa = function(a) {
        this.g = a;
        this.j.Gb(a)
    }
    ;
    d.ss = function(a) {
        var b = this.j.Wz();
        if (!b && a) {
            a = y(this.Vz, this);
            for (var c in this.b)
                this.l[c] ? this.j.Ga(this.b[c], a, "", this.l[c]) : this.j.Ga(this.b[c], a)
        } else
            a ? this.j.enable() : b && this.j.disable()
    }
    ;
    d.Iu = function() {
        this.l["transport-flag-button"] = 0.9;
        this.b["transport-closed-captions-button"] = this.h.P("[[captions|Voice command choose the state of closed captions.]]");
        this.b["transport-dislike-button"] = this.h.P('[[dislike|Voice command to "dislike" the video.]]');
        this.b["transport-ff-button"] = this.h.P("[[forward|Voice command to jump the video forward.]]");
        this.b["transport-flag-button"] = this.h.P("[[flag|Voice command to flag the video.]]");
        this.b["transport-like-button"] = this.h.P('[[like|Voice command to "like" the video.]]');
        this.b["more-actions-button_1"] = this.h.P("[[more actions|Voice command to show the other set of actions.]]");
        this.b["next-button"] = this.h.P("[[skip forward|Voice command to skip to the next video.]]");
        this.b.previous = this.h.P("[[skip backward|Voice command skip back to previous video.|1754686650]]");
        this.b["transport-rw-button"] = this.h.P("[[rewind|Voice command to jump the video backward.]]");
        this.b["transport-search-button"] = this.h.P("[[search|Voice command to go to the search page.]]");
        this.b["transport-subscribe-button"] = this.h.P("[[subscribe|Voice command to subscribe to the video's channel]]");
        this.b.pause = this.h.P("[[pause|Voice command to pause the video.]]");
        this.b.play = this.h.P("[[play|Voice command to play the video]]")
    }
    ;
    d.KG = function(a) {
        return "transport-playpause-button" == a ? this.b[this.k.isPlaying ? "pause" : "play"] : this.b[a]
    }
    ;
    d.Vz = function(a) {
        if ("watch" == this.o.state())
            switch (a.text) {
            case this.b["transport-closed-captions-button"]:
                this.k.co() && this.g.Bn();
                break;
            case this.b["transport-dislike-button"]:
                this.g.On() || this.g.qh(!1);
                break;
            case this.b["transport-flag-button"]:
                this.g.Dn();
                break;
            case this.b["transport-ff-button"]:
                this.g.xn();
                break;
            case this.b["transport-like-button"]:
                this.g.Pn() || this.g.qh(!0);
                break;
            case this.b["more-actions-button_1"]:
                this.g.Zw();
                break;
            case this.b["next-button"]:
                this.g.An();
                break;
            case this.b.pause:
                this.k.zc();
                break;
            case this.b.play:
                this.k.Oc();
                break;
            case this.b.previous:
                this.g.Cn();
                break;
            case this.b["transport-rw-button"]:
                this.g.yn();
                break;
            case this.b["transport-subscribe-button"]:
                this.g.pj() || this.g.gh();
                break;
            case this.b["transport-search-button"]:
                this.g.En()
            }
    }
    ;
    Fo.inject = ["playerFacade", "locale", "locationService", "voiceHelper"];
    function Go(a, b, c, e, f, g, k, l, n, q, s, r, u, O, X, da) {
        this.name = "transport";
        qo.call(this, a, b, c, e);
        this.g = f;
        this.na = g;
        this.Ia = k;
        this.N = l;
        this.O = n;
        this.l = q;
        this.aa = s;
        this.pa = r;
        this.o = null;
        this.ga = 3E3;
        this.j = Gd;
        this.b = Hd;
        this.gc = null;
        this.G = lc("html5-video-controls");
        this.V = this.da(".player-time-elapsed");
        this.Z = this.da(".player-time-total");
        this.Ja = this.da(".button-tooltip");
        this.gb = kc(document, "transport-voice");
        this.za = this.da(".player-controls-widget");
        this.Oa = u;
        this.Va = O;
        this.rc = da;
        this.ia = !1;
        this.F = this.w = this.p = 0;
        this.Du(X);
        this.sb("progress-bar", X, this);
        this.gc = this.Cu()
    }
    B(Go, qo);
    d = Go.prototype;
    d.jb = function() {
        return !!this.o
    }
    ;
    d.TS = function() {
        return this.F == this.p
    }
    ;
    d.Cu = function() {
        var a = [];
        Array.prototype.push.apply(a, this.uG());
        this.p = a.length - 1;
        this.jb() || (Array.prototype.push.apply(a, this.es()),
        this.p = a.length - 1,
        Array.prototype.push.apply(a, this.as()));
        Array.prototype.push.apply(a, this.yG());
        Array.prototype.push.apply(a, this.wG());
        this.Ha = a.length - 2;
        Array.prototype.push.apply(a, this.xG());
        this.jb() || Array.prototype.push.apply(a, this.bs());
        Array.prototype.push.apply(a, this.sG());
        Array.prototype.push.apply(a, this.zG());
        this.w = a.length - 1;
        this.jb() && (Array.prototype.push.apply(a, this.es()),
        Array.prototype.push.apply(a, this.as()));
        Array.prototype.push.apply(a, this.vG());
        this.jb() && (Array.prototype.push.apply(a, this.bs()),
        Array.prototype.push.apply(a, this.tG()));
        return a
    }
    ;
    d.uG = function() {
        return this.jb() ? [{
            disabled: !1,
            id: this.b.yk,
            className: this.j.vA + " playback",
            Rb: y(function() {
                this.scope.transport.Jp()
            }, this),
            mb: this.nb(this.b.yk)
        }] : []
    }
    ;
    d.zG = function() {
        return this.jb() ? [{
            disabled: !1,
            id: this.b.tA,
            className: this.j.uA + " social",
            Rb: y(function() {
                this.scope.transport.tj()
            }, this),
            mb: this.nb(this.b.yk)
        }] : []
    }
    ;
    d.yG = function() {
        return this.jb() ? [{
            disabled: !1,
            id: this.b.PREVIOUS,
            className: this.j.PREVIOUS + " playback",
            Nh: y(function() {
                this.scope.transport.Cn()
            }, this),
            mb: this.nb(this.b.PREVIOUS)
        }] : []
    }
    ;
    d.bs = function() {
        return [{
            id: this.b.Ph,
            className: this.j.Ph + " social",
            Rb: y(function() {
                this.scope.transport.En()
            }, this),
            mb: this.nb(this.b.Ph)
        }]
    }
    ;
    d.tG = function() {
        return [{
            id: this.b.dC,
            disabled: !0,
            className: "social",
            Rb: p,
            mb: ""
        }]
    }
    ;
    d.wG = function() {
        return [{
            disabled: !0,
            id: this.b.REWIND,
            className: this.j.REWIND + " playback",
            Nh: y(function() {
                this.scope.transport.yn()
            }, this),
            mb: this.nb(this.b.REWIND)
        }, {
            Yz: !0,
            id: this.b.vk,
            className: this.j.PAUSE + " playback",
            Rb: y(function() {
                this.scope.transport.zd()
            }, this),
            mb: this.nb("transport-playpause-button")
        }, {
            disabled: !0,
            id: this.b.cg,
            className: this.j.cg + " playback",
            Nh: y(function() {
                this.scope.transport.xn()
            }, this),
            mb: this.nb(this.b.cg)
        }]
    }
    ;
    d.es = function() {
        var a = this.O;
        return [{
            checked: !1,
            id: this.b.gg,
            Ue: function() {
                return a.Ue(this.checked) + " social"
            },
            Rb: y(function() {
                this.scope.transport.gh()
            }, this),
            mb: this.nb(this.b.gg),
            disabled: !0,
            Se: function() {
                return a.Se(this.checked)
            }
        }]
    }
    ;
    d.as = function() {
        return [{
            checked: !1,
            id: this.b.Pe,
            Ue: function() {
                return (this.checked ? "icon-like-checked" : "icon-like") + " social"
            },
            Rb: y(function() {
                this.scope.transport.qh(!0)
            }, this),
            mb: this.nb(this.b.Pe),
            disabled: !0,
            Se: function() {
                return this.checked ? "[[Liked!|Tooltip stating that the user has liked the current video.]]" : "[[Like?|Tooltip stating that the user can like the video by clicking the button.]]"
            }
        }, {
            checked: !1,
            id: this.b.Oe,
            Ue: function() {
                return (this.checked ? "icon-dislike-checked" : "icon-dislike") + " social"
            },
            Rb: y(function() {
                this.scope.transport.qh(!1)
            }, this),
            mb: this.nb(this.b.Oe),
            disabled: !0,
            Se: function() {
                return this.checked ? "[[Disliked!|Tooltip stating that the user has disliked the current video.]]" : "[[Dislike?|Tooltip stating that the user can dislike the video by clicking the button.]]"
            }
        }]
    }
    ;
    d.sG = function() {
        return [{
            lo: !1,
            disabled: !0,
            id: this.b.ye,
            className: this.j.ye + " playback",
            Rb: y(function() {
                this.scope.transport.Bn()
            }, this),
            mb: this.nb(this.b.ye)
        }]
    }
    ;
    d.vG = function() {
        return [{
            disabled: !0,
            id: this.b.dg,
            className: this.j.dg + " social",
            Rb: y(this.scope.transport.Dn, this.scope.transport),
            mb: this.nb(this.b.dg)
        }]
    }
    ;
    d.xG = function() {
        return this.jb() ? [{
            disabled: !1,
            id: this.b.NEXT,
            className: this.j.NEXT + " playback",
            Rb: y(this.scope.transport.An, this.scope.transport),
            mb: this.nb(this.b.NEXT)
        }] : []
    }
    ;
    d.qa = function() {
        Go.A.qa.call(this);
        this.g.B("video:changed", y(this.jD, this));
        this.aa.B("cache:changed", y(this.iD, this));
        this.rc.B("subscription:added", y(this.qo, this));
        this.po()
    }
    ;
    d.Du = function(a) {
        this.Va.isSupported() && (this.o = a.get("transportVoiceHelper"),
        this.o.qa(this),
        this.pa.B("engage-change", y(this.fG, this)))
    }
    ;
    d.VS = function() {
        var a = this.jb() ? ".xboxone " : "";
        this.V = this.da(a + ".player-time-elapsed");
        this.Z = this.da(a + ".player-time-total")
    }
    ;
    d.nb = function(a) {
        return this.jb() ? this.o.KG(a) : ""
    }
    ;
    d.po = function() {
        this.B("list-item-index-change", y(function(a) {
            this.Yq();
            J(a)
        }, this));
        this.B("keydown", y(function(a) {
            this.mc();
            switch (a.keyCode) {
            case 37:
            case 39:
                J(a)
            }
        }, this));
        this.B("keyup", y(function(a, b) {
            this.mc();
            switch (b) {
            case 37:
            case 39:
                J(a)
            }
        }, this));
        this.ca(this.pa, "mousemove", this.Oa(2, y(this.hD, this)));
        this.ca(this.g, "isPlaying:changed", y(this.yo, this));
        this.ca(this.g, "isPlayingAd:changed", y(this.zo, this));
        this.ca(this.g, "state:changed", y(this.Ao, this));
        this.ca(this.N, "duration:changed", y(this.Ah, this, this.Z));
        this.ca(this.N, "currentTime:changed", y(this.Ah, this, this.V))
    }
    ;
    d.W = function() {
        this.ta(this.children[this.b.xe]);
        this.enable();
        this.g.isPlaying ? qo.prototype.W.call(this) : R.prototype.W.call(this);
        this.No();
        this.L("transport-activated");
        this.jb() && (this.tj(),
        this.children["player-controls"].Zc(this.Ha, !1))
    }
    ;
    d.ea = function() {
        qo.prototype.ea.call(this);
        this.No();
        this.se(this.children[this.b.xe]);
        this.disable()
    }
    ;
    d.enable = function() {
        this.zo(this.g.isPlayingAd);
        this.yo(this.g.isPlaying);
        this.Ao(this.g.state);
        this.Ah(this.Z, this.N.duration);
        this.Ah(this.V, this.N.currentTime);
        this.qo();
        this.xc();
        this.po();
        var a = this.children[this.b.bp];
        a && a.enable()
    }
    ;
    d.disable = function() {
        this.xc();
        this.children[this.b.bp].disable()
    }
    ;
    d.og = function() {
        this.o && this.o.ss(!0)
    }
    ;
    d.rg = function() {
        this.o && this.o.ss(!1)
    }
    ;
    d.Dl = function() {
        this.g.isPlaying && this.isActive && !this.ia ? (this.Ia.mode(null),
        this.L("transport-hidden")) : this.mc()
    }
    ;
    d.Cb = function(a) {
        var b = a.detail;
        Go.A.Cb.call(this, a);
        b.id === this.b.xe && this.Ge()
    }
    ;
    d.zo = function() {
        this.Yf();
        this.children[this.b.xe].Gd()
    }
    ;
    d.Ah = function(a, b) {
        this.hb(a, this.na.aj(b))
    }
    ;
    d.yo = function(a) {
        a && this.mc();
        this.Yf();
        this.zk();
        a ? this.Sa(this.b.vk).className = this.j.PAUSE + " playback" : this.Sa(this.b.vk).className = this.j.PLAY + " playback";
        this.Ge();
        this.xA(a)
    }
    ;
    d.Ao = function(a) {
        -1E3 === a && this.Yf();
        this.zk()
    }
    ;
    d.hD = function() {
        this.mc()
    }
    ;
    d.fG = function(a) {
        this.ia = !!a.detail;
        this.Dl()
    }
    ;
    d.iD = function(a) {
        "video_like_value" === a && this.qr()
    }
    ;
    d.qo = function() {
        this.Sa(this.b.gg).checked = this.pj();
        this.Ge()
    }
    ;
    d.qr = function() {
        this.l.currentVideo && (this.Sa(this.b.Pe).checked = this.Pn(),
        this.Sa(this.b.Oe).checked = this.On(),
        this.Ge())
    }
    ;
    d.pj = function() {
        return this.rc.h(this.AF())
    }
    ;
    d.Pn = function() {
        return this.l.currentVideo.videoId ? "like" == this.aa.get("video_like_value", this.l.currentVideo.videoId) : !1
    }
    ;
    d.On = function() {
        return this.l.currentVideo.videoId ? "dislike" == this.aa.get("video_like_value", this.l.currentVideo.videoId) : !1
    }
    ;
    d.zk = function() {
        var a = this.g.co()
          , b = this.Sa(this.b.ye);
        b.disabled = !a;
        a && (b.lo = !sb(this.g.fj()))
    }
    ;
    d.xA = function() {
        if (this.jb()) {
            var a = this.da(".icon-player-pause div, .icon-player-play div");
            this.hb(a, this.nb("transport-playpause-button"))
        }
    }
    ;
    d.Yf = function() {
        var a = !this.FI();
        a || !this.jb() ? this.HI(a) : this.II();
        this.zk();
        this.Ge()
    }
    ;
    d.HI = function(a) {
        this.Sa(this.b.cg).disabled = a;
        this.Sa(this.b.REWIND).disabled = a;
        this.Sa(this.b.dg).disabled = a;
        this.Sa(this.b.ye).disabled = a;
        this.Sa(this.b.Pe).disabled = a;
        this.Sa(this.b.Oe).disabled = a;
        this.Sa(this.b.gg).disabled = a;
        var b = this.Sa(this.b.NEXT);
        b && (b.disabled = a);
        if (b = this.Sa(this.b.PREVIOUS))
            b.disabled = a
    }
    ;
    d.II = function() {
        var a = this.F >= this.w, b;
        for (b = 0; b < this.w; ++b)
            this.gc[b].disabled = a;
        a = !a;
        for (b = this.w; b < this.gc.length; ++b)
            this.gc[b].disabled = a;
        this.ta(this.Ta(this.scope.transport.activeIndex))
    }
    ;
    d.iT = function() {
        return !this.g.isPlayingAd && (this.g.isPlaying || 1 == this.g.state)
    }
    ;
    d.FI = function() {
        return !this.g.isPlayingAd && (this.g.isPlaying || 2 == this.g.state)
    }
    ;
    d.zd = function() {
        this.g.zd()
    }
    ;
    d.An = function() {
        this.L("next-video")
    }
    ;
    d.Cn = function() {
        this.L("previous-video")
    }
    ;
    d.Zw = function() {
        this.F == this.p ? this.Jp() : this.tj()
    }
    ;
    d.tj = function() {
        this.Zr("player-controls-social", "player-controls-playback");
        this.children["player-controls"].Zc(this.p, !1);
        this.F = this.p;
        this.Yf()
    }
    ;
    d.Jp = function() {
        this.Zr("player-controls-playback", "player-controls-social");
        this.children["player-controls"].Zc(this.w, !1);
        this.F = this.w;
        this.Yf()
    }
    ;
    d.Zr = function(a, b) {
        var c = kc(document, "player-controls");
        db(c, a);
        bb(c, b)
    }
    ;
    d.gh = function() {
        this.O.gh();
        !this.pj() && this.l.currentVideo && this.L("request-toggle-subscription", this.l.currentVideo.channel)
    }
    ;
    d.jD = function() {
        this.qr();
        this.O.g()
    }
    ;
    d.qh = function(a) {
        var b = this.Sa(this.b.Pe)
          , c = this.Sa(this.b.Oe);
        !(a ? b : c).checked && this.l.currentVideo && this.L("request-like-video", {
            videoId: this.l.currentVideo.videoId,
            jA: a ? "like" : "dislike"
        })
    }
    ;
    d.BU = function(a) {
        a.checked = !a.checked;
        this.Ge()
    }
    ;
    d.xn = function() {
        this.mc();
        this.g.Kh(10)
    }
    ;
    d.yn = function() {
        this.mc();
        this.g.Kh(-10)
    }
    ;
    d.En = function() {
        this.L("request-search")
    }
    ;
    d.Dn = function() {
        this.g.zc();
        this.L("request-flag-options")
    }
    ;
    d.Bn = function() {
        this.g.zc();
        this.L("request-cc-options")
    }
    ;
    d.Sa = function(a) {
        return Oa(this.gc, function(b) {
            return b.id === a
        })
    }
    ;
    d.uT = function() {
        this.gc = this.gc.slice()
    }
    ;
    d.Ge = function() {
        this.children[this.b.xe].setData(this.gc);
        this.U()
    }
    ;
    d.U = function() {
        this.Yq()
    }
    ;
    d.Yq = function() {
        var a = this.gc[this.children[this.b.xe].activeIndex];
        this.jb() || (a = a.Se ? this.na.P(a.Se()) : "",
        this.hb(this.Ja, a))
    }
    ;
    d.AF = function() {
        var a = this.l.currentVideo;
        return a && a.channel ? a.channel.username : ""
    }
    ;
    d.No = function() {
        if (this.G = this.G || lc("html5-video-controls")) {
            var a = this.za.getBoundingClientRect()
              , b = "2em";
            a.top && (b = Math.round(rc(window) - a.top) + "px");
            Xc(this.G, "bottom", b)
        }
    }
    ;
    Go.$inject = "$scope $element $attrs $timeout playerFacade locale locationService progressModel subscribeLogic watchModel cacheService rootDispatcher rateLimit speechApi injector subscriptionsModel".split(" ");
    function Ho(a, b, c, e, f, g) {
        this.name = "transportControlsList";
        this.w = g;
        uo.call(this, a, b, c, e, f)
    }
    B(Ho, uo);
    d = Ho.prototype;
    d.W = function() {
        Ho.A.W.call(this);
        for (var a = this.scope.transport.gc.length, b = 0; b < a; ++b)
            if (this.data[b].Yz) {
                this.Zc(b, !1);
                break
            }
    }
    ;
    d.gm = function() {
        return 0 === this.element.children().length
    }
    ;
    d.Lp = function(a, b) {
        var c = '<div yt:focusable id="' + this.data[b].id + '">';
        this.w.isSupported() && (c += '<div class="voice-command transport">' + this.data[b].mb + "</div>");
        return c + "</div>"
    }
    ;
    d.El = function() {
        for (var a = this.element.children(), b = a.length, c = 0; c < b; ++c)
            a[c].className = this.Ol(c)
    }
    ;
    d.Ol = function(a) {
        var b = ["item"];
        if (this.data) {
            var c = this.data[a];
            c && (b.push(c.className),
            c.Ue && b.push(c.Ue()),
            c.disabled && b.push("disabled-button"),
            c.lo && b.push("highlighted"))
        }
        a === this.activeIndex && b.push("active");
        return b.join(" ")
    }
    ;
    d.rt = function(a) {
        if (this.isActive)
            switch (this.scope.transport.mc(),
            a.keyCode) {
            case 37:
            case 39:
                J(a);
                break;
            case 13:
                this.iJ(this.data[this.ht(a.target)]),
                J(a)
            }
    }
    ;
    d.At = function(a) {
        if (this.isActive)
            switch (this.scope.transport.mc(),
            a.keyCode) {
            case 37:
            case 39:
                J(a);
                break;
            case 13:
                this.kJ(this.data[this.ht(a.target)]),
                J(a)
            }
    }
    ;
    d.ht = function(a) {
        if (a && a.id)
            for (var b = this.data, c = 0; c < b.length; ++c)
                if (b[c].id == a.id)
                    return c;
        return this.activeIndex
    }
    ;
    d.kJ = function(a) {
        a && !a.disabled && a.Rb && a.Rb(this.activeIndex)
    }
    ;
    d.iJ = function(a) {
        a && !a.disabled && a.Nh && a.Nh()
    }
    ;
    d.Lt = function(a) {
        return "transport-spacer" != this.data[a].id && !this.data[a].disabled
    }
    ;
    d.Gd = function() {}
    ;
    d.Zc = function(a, b) {
        var c = this.element.children()
          , e = this.activeIndex;
        this.activeIndex = a;
        var f = c[e];
        f && (f.className = this.Ol(e));
        if (c = c[this.activeIndex])
            c.className = this.Ol(this.activeIndex),
            c.focus();
        b && this.L("list-item-index-change", this.activeIndex)
    }
    ;
    Ho.$inject = "$scope $element $attrs $compile rateLimit speechApi".split(" ");
    function Io(a, b, c, e, f, g, k, l, n, q, s, r, u, O, X, da, ra, bc, Ya, Za) {
        this.name = "watch";
        jo.call(this, a, b, c, l, n, e);
        this.gb = c;
        this.Oa = k;
        this.pa = f;
        this.Ia = g;
        this.ia = s;
        this.za = r;
        this.w = u;
        this.Aa = O;
        this.Va = X;
        this.G = this.p = null;
        this.Z = 0;
        this.M = null;
        this.b = q;
        this.V = this.da("#branding-container");
        this.l = this.F = this.O = this.o = null;
        this.Ha = da;
        this.ga = bc;
        this.Ja = Ya;
        this.j = this.sb("watch-title-tray", ra, this);
        this.aa = p;
        if (a = Za.bc("start_watch") || Za.bc("start_dial"))
            this.aa = y(a.tick, a);
        this.$ = ra.get("voiceHelper");
        this.$.Gb(this);
        this.Jv();
        this.sb("advertisement-callout", ra)
    }
    B(Io, jo);
    d = Io.prototype;
    d.W = function() {
        this.g.lr("transport") && this.Oj();
        Io.A.W.call(this);
        this.og();
        this.Ja.uk()
    }
    ;
    d.kl = function() {
        return this.g.lr("search") || !this.g.mode()
    }
    ;
    d.ll = function() {
        return !1
    }
    ;
    d.ea = function() {
        this.j.Xa();
        jo.prototype.ea.call(this);
        this.L("toggle-loading", 0);
        this.rg()
    }
    ;
    d.uc = function(a) {
        var b = !!this.G;
        this.j.isHidden || this.j.Xa();
        if (this.G = a)
            this.aa("w_ld_vid"),
            this.rq(),
            this.qq(),
            this.qb = a.videoId,
            this.AE(),
            this.BE(),
            this.zE(),
            this.Ir() && this.Ir().C(this.me()),
            this.j.Tb(b)
    }
    ;
    d.Ic = function() {
        Io.A.Ic.call(this);
        this.af("getCurrentVideo", this.me);
        this.af("isTransportActive", this.Dj)
    }
    ;
    d.zE = function() {
        this.lC();
        this.b.Zf();
        this.b.tq()
    }
    ;
    d.Dj = function() {
        return this.isActive && "transport" === this.activeChildName
    }
    ;
    d.Oj = function() {
        this.activeChildName = "transport";
        this.b.isPlayingAd || this.j.Tb()
    }
    ;
    d.Jv = function() {
        this.ca(this.ga, "afterRouteChange", y(this.oB, this));
        this.B("transport-hidden", y(this.nB, this));
        this.B("transport-activated", y(this.mB, this));
        this.B("keyup", y(this.qB, this));
        this.B("keydown", this.Ha(5, y(this.pB, this), function(a) {
            return 228 === a.keyCode || 76 === a.keyCode || 227 === a.keyCode || 74 === a.keyCode
        }));
        this.b.B("isPlayingAd:changed", y(this.kB, this));
        this.b.B("state:changed", y(this.lB, this))
    }
    ;
    d.oB = function(a, b) {
        var c = a.params.autoplay
          , e = parseInt(c, 10)
          , e = isNaN(e) ? -1 : e;
        if (this.Ey(a, b))
            this.Oj();
        else if (this.isActive || 1 === e)
            this.activeChildName = null,
            this.focus();
        c && this.w.currentVideo && this.Dy(e);
        c = this.ga.b();
        "pause" == c ? this.b.zc() : this.w.currentVideo && ("play" == c || b && "search" == m("mode", b.params)) && this.b.Oc();
        c = parseInt(a.params.t, 10);
        !isNaN(c) && this.w.currentVideo && (this.b.uf(c, !0),
        this.g.search("t", null))
    }
    ;
    d.Ey = function(a, b) {
        var c = b ? parseInt(b.params.autoplay, 10) : -1;
        return a && a.params && "transport" === a.params.mode || 0 === c
    }
    ;
    d.Dy = function(a) {
        1 === a ? (0 === this.b.state && this.b.uf(0, !0),
        this.b.Oc()) : 0 === a && this.b.zc();
        this.g.search("autoplay", null)
    }
    ;
    d.nB = function() {
        this.Z = this.ia.hc().getTime();
        this.j.Xa()
    }
    ;
    d.mB = function() {
        this.b.isPlayingAd || this.j.Tb()
    }
    ;
    d.kB = function(a) {
        a ? this.V.style.display = "none" : (this.V.style.display = "block",
        this.RH())
    }
    ;
    d.lB = function(a) {
        switch (a) {
        case 2:
            this.Dt(!1);
            break;
        case 1:
            this.Dt(!0);
            break;
        case -1E3:
            this.YJ()
        }
    }
    ;
    d.OT = function(a) {
        this.L("toggle-loading", a)
    }
    ;
    d.lC = function() {
        this.element.toggleClass("play", !1);
        this.element.toggleClass("pause", !1)
    }
    ;
    d.Dt = function(a) {
        this.element.toggleClass("play", a);
        this.element.toggleClass("pause", !a)
    }
    ;
    d.cJ = function(a) {
        this.element.toggleClass("loading", a)
    }
    ;
    d.sT = function(a) {
        this.Oa.ab(a, y(function(a) {
            if (a = a.S.fa(0))
                this.p = a,
                this.M = this.Ia.ab(this.p.channel.username).model
        }, this))
    }
    ;
    d.RH = function() {
        this.M = this.p = null
    }
    ;
    d.pB = function(a) {
        switch (a.keyCode) {
        case 228:
        case 76:
            this.b.Kh(10);
            this.Oj();
            break;
        case 227:
        case 74:
            this.b.Kh(-10)
        }
    }
    ;
    d.qB = function(a) {
        switch (a.keyCode) {
        case 39:
        case 176:
            this.b.isPlayingAd || this.L("next-video");
            J(a);
            break;
        case 37:
        case 177:
            this.b.isPlayingAd || this.L("previous-video");
            J(a);
            break;
        case 38:
        case 27:
            this.j.Xa();
            break;
        case 75:
        case 179:
        case 32:
            this.b.zd();
            J(a);
            break;
        case 19:
            this.b.zc();
            break;
        case 250:
            this.b.Oc();
            J(a);
            break;
        case 8:
        case 27:
            this.b.isPlaying && this.Dj() && (this.g.mode(null),
            J(a),
            this.L("play-sound", "cross-back"));
            break;
        case 13:
            this.Dj() && this.b.zd()
        }
        (27 === a.keyCode || 8 === a.keyCode) && this.Z + 1E3 > this.ia.hc().getTime() && J(a)
    }
    ;
    d.vn = function() {
        var a = this.me();
        return a && a.channel ? a.channel.kj : null
    }
    ;
    d.AE = function() {
        var a = this.me();
        a && (this.Np(),
        this.b.Zf(),
        this.pa.ab(a.channel.username, y(this.XB, this)))
    }
    ;
    d.Ho = function() {
        this.o || (this.o = this.da("#branding-banner"),
        this.O = this.da("#branding-banner-image"),
        this.F = this.da("#branding-banner-overlay"));
        this.l || (this.l = this.da("#branding-watermark"))
    }
    ;
    d.XB = function(a) {
        var b = this.me();
        if (b) {
            b.channel.kj = a;
            var c = 15;
            this.Ho();
            this.b.Zf();
            if (a && a.b)
                this.b.$f("show-branding-banner-start", 0.1, y(this.Rp, this)),
                this.b.$f("hide-branding-banner", 5, y(this.Zz, this));
            else if (this.za.sc(jd)) {
                c = this.w.Vi();
                if (!c || !c.channel)
                    return;
                a = new hg;
                a.j = !0;
                a.b = this.Va.nf(c.videoId, "mqdefault");
                b.channel.kj = a;
                c = 8
            } else {
                this.Np();
                this.b.Zf();
                return
            }
            this.b.$f("show-branding-banner-end", b.duration - c, y(this.Rp, this))
        }
    }
    ;
    d.Np = function() {
        this.Ho();
        this.o.style.display = "none";
        this.l.style.display = "none"
    }
    ;
    d.Zz = function() {
        this.o.style.display = "none";
        this.F.style.display = "none";
        var a = this.vn();
        this.l.style.display = a && a.g ? "block" : "none"
    }
    ;
    d.Rp = function() {
        var a = this.vn();
        this.l.src = a.g;
        this.O.src = a.b;
        this.l.style.display = "none";
        this.o.style.display = "block";
        this.F.style.display = a.j ? "block" : "none"
    }
    ;
    d.BE = function() {
        var a = this.me();
        a && a.g && a.channel.Qa && this.Aa.ab(a.channel.Qa, y(this.AD, this, a.channel))
    }
    ;
    d.AD = function(a, b) {
        a.g = b.b
    }
    ;
    d.YJ = function() {
        this.L("request-player-error", this.b.errorMessage)
    }
    ;
    d.me = function() {
        return this.b.isPlayingAd ? this.NB() : this.G
    }
    ;
    d.NB = function() {
        return this.p
    }
    ;
    d.Ir = function() {
        return this.children["ad-callout"]
    }
    ;
    Io.$inject = "$scope $element $attrs messageModel brandingService userProfileService videoPlaybackInfoService locationService navigationService playerFacade timeService environmentModel watchModel channelPaidInfoService ytThumbnails rateLimit injector routerService remoteService csiService".split(" ");
    function Jo(a, b) {
        this.g = new Di(a);
        this.b = b ? b : "callback";
        this.ka = 5E3
    }
    var Ko = 0;
    Jo.prototype.YC = function(a) {
        this.ka = a
    }
    ;
    Jo.prototype.h = function() {
        return this.ka
    }
    ;
    Jo.prototype.send = function(a, b, c, e) {
        a = a || null;
        e = e || "_" + (Ko++).toString(36) + A().toString(36);
        h._callbacks_ || (h._callbacks_ = {});
        var f = this.g.clone();
        if (a)
            for (var g in a)
                a.hasOwnProperty && !a.hasOwnProperty(g) || f.fe(g, a[g]);
        b && (b = Lo(e, b),
        h._callbacks_[e] = b,
        f.fe(this.b, "_callbacks_." + e));
        b = Gf(f.toString(), {
            timeout: this.ka,
            qz: !0
        });
        c = Mo(e, a, c);
        b.$o(c);
        return {
            yb: e,
            sp: b
        }
    }
    ;
    Jo.prototype.cancel = function(a) {
        a && (a.sp && a.sp.cancel(),
        a.yb && No(a.yb, !1))
    }
    ;
    function Mo(a, b, c) {
        return function() {
            No(a, !1);
            c && c(b)
        }
    }
    function Lo(a, b) {
        return function(c) {
            No(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function No(a, b) {
        h._callbacks_[a] && (b ? delete h._callbacks_[a] : h._callbacks_[a] = p)
    }
    ;var N = angular.module("leanback-app", ["leanback-templates", $k.name]);
    N.config(["$routeProvider", "$locationProvider", "$provide", function(a, b, c) {
        a.when("/browse", {
            state: function() {
                return "browse"
            }
        });
        a.when("/watch", {
            state: function() {
                return "watch"
            }
        });
        a.when("/pause", {
            state: function() {
                return "watch"
            }
        });
        a.when("/play", {
            state: function() {
                return "watch"
            }
        });
        a.when("", {
            state: function() {
                return -1 < window.location.href.indexOf("pairingCode=") ? "dialog" : "browse"
            }
        });
        a.otherwise({
            redirectTo: "/browse",
            state: function() {
                return "browse"
            }
        });
        Oo(window);
        Po(c)
    }
    ]);
    N.run(["$injector", function(a) {
        var b = $;
        b.g = y(a.get, a);
        a.get = y(b.get, b)
    }
    ]);
    N.run(["bootstrapService", function(a) {
        a.bootstrap()
    }
    ]);
    var $ = null;
    function Oo(a) {
        function b(a, b, c, e) {
            c.className += b.isLimitedGraphics ? " $list" : " $carousel";
            b.isLimitedGraphics && c.setAttribute("data-element-limit", "3");
            c = th(c, e, a);
            c.model = a.get(b.isLimitedGraphics ? Bh : gm);
            return c
        }
        function c(a, b) {
            return b.P(a)
        }
        $ = $ || new im(a);
        for (var e = new km, f = [{
            name: "accountApi",
            source: "environment.ytshell.accountInfo"
        }, {
            name: "cookiesApi",
            source: "environment.ytshell.storage.cookies"
        }, {
            name: "ssoApi",
            source: "environment.ytshell.sso"
        }, {
            name: "storageApi",
            source: "environment.ytshell.storage"
        }, {
            name: "systemApi",
            source: "environment.ytshell.system"
        }, {
            name: "remoteApi",
            source: "environment.ytshell.remote"
        }, {
            name: "dialApi",
            source: "environment.ytshell.dial"
        }], g = 0, k = f.length; g < k; ++g) {
            var l = f[g];
            $.register(l.name, m(l.source, a) || e)
        }
        a = m("environment.ytshell.speech", a) || e;
        $.register("speechApi", a);
        a.isSupported() ? $.ls("voiceHelper", sh) : $.li("voiceHelper", hm);
        e = [{
            name: "activityParser",
            constructor: Vl
        }, {
            name: "activityReportingService",
            constructor: lm
        }, {
            name: "angularHelper",
            constructor: lg
        }, {
            name: "authService",
            constructor: bh
        }, {
            name: "backendErrorReporting",
            constructor: om
        }, {
            name: "bootstrapService",
            constructor: vm
        }, {
            name: "bountyService",
            constructor: qm
        }, {
            name: "brandingParser",
            constructor: Wl
        }, {
            name: "browseParser",
            constructor: ul
        }, {
            name: "cacheService",
            constructor: wm
        }, {
            name: "channelPaidInfoParser",
            constructor: Xl
        }, {
            name: "channelSuggestionParser",
            constructor: Yl
        }, {
            name: "crashReportingService",
            constructor: rm
        }, {
            name: "csiService",
            constructor: ch
        }, {
            name: "debugModel",
            constructor: ei
        }, {
            name: "debugCallService",
            constructor: ym
        }, {
            name: "dialogService",
            constructor: ki
        }, {
            name: "environmentModel",
            constructor: gg
        }, {
            name: "exceptionLogger",
            constructor: Em
        }, {
            name: "eurekaService",
            constructor: Tk
        }, {
            name: "featuredParser",
            constructor: Zl
        }, {
            name: "gestureRecognizer",
            constructor: li
        }, {
            name: "gestureService",
            constructor: oi
        }, {
            name: "guideParser",
            constructor: wl
        }, {
            name: "keyMapModel",
            constructor: fg
        }, {
            name: "localStorage",
            constructor: ah
        }, {
            name: "locationService",
            constructor: Ph
        }, {
            name: "messageModel",
            constructor: Nl
        }, {
            name: "navigationService",
            constructor: Nm
        }, {
            name: "personalDataService",
            constructor: Om
        }, {
            name: "playerFacade",
            constructor: oh
        }, {
            name: "playerFactoryService",
            constructor: dh
        }, {
            name: "playerService",
            constructor: fh
        }, {
            name: "playerVariablesModel",
            constructor: kg
        }, {
            name: "playlistParser",
            constructor: $l
        }, {
            name: "postPlayModel",
            constructor: bl
        }, {
            name: "postPlayReportingService",
            constructor: cl
        }, {
            name: "privateDataService",
            constructor: Dm
        }, {
            name: "progressModel",
            constructor: Mk
        }, {
            name: "remoteService",
            constructor: Zk
        }, {
            name: "resizeService",
            constructor: Pm
        }, {
            name: "retentionReportingService",
            constructor: sm
        }, {
            name: "routerService",
            constructor: Qm
        }, {
            name: "scrollbarModel",
            constructor: Pl
        }, {
            name: "searchModel",
            constructor: Ql
        }, {
            name: "searchReporting",
            constructor: Sm
        }, {
            name: "speechReporting",
            constructor: Zm
        }, {
            name: "searchRowService",
            constructor: Um
        }, {
            name: "settingsRowService",
            constructor: Xm
        }, {
            name: "searchHistoryService",
            constructor: xm
        }, {
            name: "searchParser",
            constructor: yl
        }, {
            name: "searchQueryModel",
            constructor: Rl
        }, {
            name: "shutdownService",
            constructor: tm
        }, {
            name: "statsService",
            constructor: bn
        }, {
            name: "steelDialService",
            constructor: um
        }, {
            name: "subscribeLogic",
            constructor: Do
        }, {
            name: "subscriptionsModel",
            constructor: Ul
        }, {
            name: "subscriptionsParser",
            constructor: am
        }, {
            name: "suggestionsModel",
            constructor: kl
        }, {
            name: "templateClient",
            constructor: Qh
        }, {
            name: "timeService",
            constructor: $f
        }, {
            name: "transliterationService",
            constructor: Kn
        }, {
            name: "userProfileParser",
            constructor: bm
        }, {
            name: "vevoPlaylistService",
            constructor: Ln
        }, {
            name: "videoParser",
            constructor: Xk
        }, {
            name: "innerTubeVideoParser",
            constructor: zl
        }, {
            name: "innerTubePlaylistParser",
            constructor: xl
        }, {
            name: "voiceService",
            constructor: Mn
        }, {
            name: "watchHistoryModel",
            constructor: Qk
        }, {
            name: "watchModel",
            constructor: Rk
        }, {
            name: "watchNextParser",
            constructor: Al
        }, {
            name: "ytHttp",
            constructor: ng
        }, {
            name: "ytThumbnails",
            constructor: Dk
        }];
        g = 0;
        for (k = e.length; g < k; ++g)
            f = e[g],
            $.li(f.name, f.constructor);
        a = [{
            name: "advertisement-callout",
            constructor: rh,
            templateUrl: "/rebound/advertisement_callout.html"
        }, {
            name: "color-button",
            constructor: Kh,
            templateUrl: "/rebound/color_button.html"
        }, {
            name: "button",
            constructor: Kh,
            templateUrl: "/rebound/button.html"
        }, {
            name: "subtitled-button",
            constructor: il,
            templateUrl: "/rebound/subtitled_button.html"
        }, {
            name: "buttonDecorator",
            constructor: Kh
        }, {
            name: "call-to-cast",
            constructor: vh,
            templateUrl: "/rebound/call_to_cast.html"
        }, {
            name: "carousel",
            constructor: em
        }, {
            name: "closed-captions",
            constructor: Dh,
            templateUrl: "/rebound/dialogs/closed_captions.html"
        }, {
            name: "component",
            constructor: L
        }, {
            name: "engagement-indicator",
            constructor: a.isSupported() ? Ih : L,
            templateUrl: a.isSupported() ? "/rebound/engagement_indicator.html" : ""
        }, {
            name: "feed-icon",
            constructor: Jh,
            templateUrl: "/rebound/feed_icon.html"
        }, {
            name: "flagOptions",
            constructor: Mh,
            templateUrl: "/rebound/dialogs/flag_options.html"
        }, {
            name: "grid",
            constructor: fm
        }, {
            name: "list",
            constructor: Ah
        }, {
            name: "loginInfo",
            constructor: Ci,
            templateUrl: "/rebound/dialogs/login_info.html"
        }, {
            name: "legend",
            constructor: pi,
            templateUrl: "/rebound/legend.html"
        }, {
            name: "pairing",
            constructor: al,
            templateUrl: "/rebound/dialogs/remote_pairing_info.html"
        }, {
            name: "progress-bar",
            constructor: gl,
            templateUrl: "/rebound/progress_bar.html"
        }, {
            name: "qrDialog",
            constructor: hl,
            templateUrl: "/rebound/dialogs/qr_dialog.html"
        }, {
            name: "suggestions",
            constructor: ll,
            templateUrl: "/rebound/suggestions.html"
        }, {
            name: "super-scroller",
            constructor: nl,
            templateUrl: "/rebound/super_scroller.html"
        }, {
            name: "transliteration",
            constructor: ol,
            templateUrl: "/rebound/transliteration.html"
        }, {
            name: "voice-footer",
            constructor: Ah,
            templateUrl: "/rebound/voice_footer.html"
        }, {
            name: "watch-title-tray",
            constructor: rl,
            templateUrl: "/rebound/watch_title_tray.html"
        }];
        g = 0;
        for (k = a.length; g < k; ++g)
            e = a[g],
            $.ks(e.name, e.constructor, e.templateUrl ? N.D + e.templateUrl : "");
        a = [{
            name: "actionTile",
            templateUrl: "/rebound/tiles/action.html"
        }, {
            name: "kenkoTile",
            templateUrl: "/rebound/tiles/kenko.html"
        }, {
            name: "pairTile",
            templateUrl: "/rebound/tiles/remote_pairing.html"
        }, {
            name: "postPlayTile",
            Al: fl,
            templateUrl: "/rebound/tiles/post_play_tile.html"
        }, {
            name: "recentSearchTile",
            templateUrl: "/rebound/tiles/recent_search.html"
        }, {
            name: "resetPairingTile",
            templateUrl: "/rebound/tiles/reset_pairing.html"
        }, {
            name: "searchTile",
            templateUrl: "/rebound/tiles/search.html"
        }, {
            name: "signOutTile",
            templateUrl: "/rebound/tiles/sign_out.html"
        }, {
            name: "shiyojoTile",
            templateUrl: "/rebound/tiles/shiyojo.html"
        }, {
            name: "toggleTile",
            templateUrl: "/rebound/tiles/togglable.html"
        }, {
            name: "videoTile",
            Al: ql,
            templateUrl: "/rebound/tiles/video_tile.html"
        }, {
            name: "playlistTile",
            Al: ql,
            templateUrl: "/rebound/tiles/playlist_tile.html"
        }];
        g = 0;
        for (k = a.length; g < k; ++g)
            e = a[g],
            $.ks(e.name, e.Al || el, N.D + e.templateUrl);
        e = [{
            name: "rootDispatcher",
            factory: function(a) {
                var b = new $d;
                b.K = a;
                return b
            },
            kd: ["document"]
        }, {
            name: "$exceptionHandler",
            factory: function(a) {
                return y(a.js, a)
            },
            kd: ["exceptionLogger"]
        }, {
            name: "rateLimit",
            factory: ho,
            kd: ho.inject
        }, {
            name: "soundService",
            factory: function(a, b) {
                return a.get(b.supportsSounds ? Ym : jm)
            },
            kd: ["injector", "environmentModel"]
        }, {
            name: "browseModel",
            factory: function(a, b) {
                return a.get(b.useInnerTube ? tl : sl)
            },
            kd: ["injector", "environmentModel"]
        }, {
            name: "searchService",
            factory: function(a, b) {
                return a.get(b.useInnerTube ? Cl : Wm)
            },
            kd: ["injector", "environmentModel"]
        }, {
            name: "authService",
            factory: function(a, b) {
                var c = b.isSupported() ? an : bh;
                return a.get(c)
            },
            kd: ["injector", "ssoApi"]
        }, {
            name: "relatedVideosService",
            factory: function(a, b) {
                return b.useInnerTubeWatchNext ? a.get(Bl, {
                    brandable: !1,
                    name: "watchNextService",
                    path: "/next",
                    parser: a.get("watchNextParser"),
                    paramKey: "videoId",
                    params: {}
                }) : a.get(Vm, {
                    brandable: !1,
                    name: "relatedVideos",
                    listType: "RV",
                    path: "/videos/{relatedId}/related",
                    paramKey: "relatedId",
                    parser: a.get("videoParser"),
                    params: {
                        fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                })
            },
            kd: ["injector", "environmentModel"]
        }];
        g = 0;
        for (k = e.length; g < k; ++g)
            a = e[g],
            a.factory.inject = a.kd,
            $.ir(a.name, a.factory);
        c.inject = ["markup", "locale"];
        $.yl("templatePreprocessor", c);
        e = [{
            name: "listSelectionManager",
            constructor: zh
        }, {
            name: "transportVoiceHelper",
            constructor: Fo
        }];
        g = 0;
        for (k = e.length; g < k; ++g)
            a = e[g],
            $.ls(a.name, a.constructor);
        b.inject = ["injector", "environmentModel", "element", "context"];
        $.yl("browseList", b)
    }
    function Po(a) {
        for (var b = $.Mq(), c = 0, e = b.length; c < e; ++c)
            a.factory(b[c], y($.get, $, b[c]))
    }
    function Qo(a, b) {
        function c(a) {
            a.controller && a.controller.qa()
        }
        function e(b, c) {
            a.factory(b.name, ["$injector", function(a) {
                return a.instantiate(c, b)
            }
            ]);
            b.altName && a.factory(b.altName, [b.name, function(a) {
                return a
            }
            ])
        }
        N.value("locale", b);
        N.value("brandable", !1);
        for (var f = [{
            name: "likeService",
            httpMethod: "post",
            path: "/videos/{videoId}/ratings",
            template: '<yt:rating value="{likeValue}"/>'
        }, {
            name: "subscribeService",
            httpMethod: "post",
            path: "/users/default/subscriptions",
            template: '<category scheme="http://gdata.youtube.com/schemas/2007/subscriptiontypes.cat" term="channel"/><yt:username>{channelName}</yt:username>'
        }, {
            name: "unsubscribeService",
            httpMethod: "delete",
            path: "/users/default/subscriptions/{subscriptionId}",
            template: ""
        }], g = 0, k = f.length; g < k; ++g)
            e(f[g], ["ytHttp", "authService", "httpMethod", "path", "template", Mm]);
        f = [{
            name: "brandingService",
            path: "/partners/{userName}/branding/default",
            parser: "brandingParser",
            paramKey: "userName",
            params: {
                fields: "yt:option[@name='device_watchpage.watermark.image.url' or @name='generictv_watchpage.banner.image.url' or @name='$banner-quality' or @name='watchpage.global.featured_playlist.id' or @name='channel.featured_video_module.video_id.string']"
            }
        }, {
            name: "userPlaylistsService",
            path: "/users/{userName}/playlists",
            parser: "playlistParser",
            paramKey: "userName",
            params: {
                fields: "entry(yt:playlistId,title,summary,author,yt:countHint)"
            }
        }, {
            name: "channelPaidInfoService",
            path: "/channels/{channelId}",
            parser: "channelPaidInfoParser",
            paramKey: "channelId",
            params: {
                fields: "yt:paidContent"
            }
        }, {
            name: "channelPaidInfoService",
            path: "/channels/{channelId}",
            parser: "channelPaidInfoParser",
            paramKey: "channelId",
            params: {
                fields: "yt:paidContent"
            }
        }, {
            name: "userSubscriptionsService",
            path: "/users/{userName}/subscriptions",
            parser: "subscriptionsParser",
            paramKey: "userName",
            params: {
                fields: "entry(id,yt:username,yt:channelId),openSearch:totalResults",
                "max-results": 50
            }
        }, {
            name: "userProfileService",
            path: "/users/{userName}",
            parser: "userProfileParser",
            paramKey: "userName",
            params: {
                fields: "yt:userId,yt:username,title,media:thumbnail,yt:statistics"
            }
        }, {
            name: "channelSuggestionService",
            path: "/users/{userName}/suggestion",
            parser: "channelSuggestionParser",
            paramKey: "userName",
            params: {
                fields: "entry",
                inline: !0,
                "max-results": 3
            }
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", "backendErrorReporting", f[g].parser, "paramKey", "params", "locale", f[g].altConstructor || Ai]);
        f = [{
            altConstructor: Yk,
            listType: "RQ",
            name: "remoteQueueService",
            path: "/videos/batch",
            paramKey: null,
            params: {
                v: "2.1"
            }
        }, {
            altName: "FL",
            listType: "FL",
            name: "userFavoritesService",
            path: "/users/{userName}/favorites",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            altName: "UU",
            listType: "UU",
            brandable: !0,
            name: "userUploadsService",
            path: "/users/{userName}/uploads",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            altName: "SF",
            listType: "SF",
            name: "videoService",
            path: "/standardfeeds/{regionId}/{feedName}",
            paramKey: "feedName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults",
                regionId: ""
            }
        }, {
            name: "newSubscriptionsService",
            listType: "SU",
            path: "/users/default/newsubscriptionvideos",
            paramKey: "noParamKeyRequired",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            altName: "ST",
            listType: "SF",
            name: "standardFeedService",
            path: "/standardfeeds/{regionId}/{feedName}",
            paramKey: "feedName",
            params: {
                time: "today",
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults",
                regionId: ""
            }
        }, {
            name: "activityService",
            listType: "AF",
            path: "/users/{userName}/events",
            parser: "activityParser",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[$inline-filter],openSearch:totalResults",
                inline: !0
            }
        }, {
            name: "riverService",
            listType: "HP",
            path: "/users/{userName}/river",
            parser: "activityParser",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[$inline-filter],openSearch:totalResults",
                inline: !0
            }
        }, {
            name: "playlistService",
            altName: "PL",
            listType: "PL",
            path: "/playlists/{playlistId}",
            paramKey: "playlistId",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "videoPlaybackInfoService",
            listType: "VI",
            path: "/videos/{videoId}",
            paramKey: "videoId",
            params: {
                fields: "title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)"
            }
        }, {
            name: "recommendedVideosService",
            listType: "RC",
            path: "/users/{userName}/recommendations",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "watchLaterService",
            listType: "WL",
            path: "/users/{userName}/watch_later",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "watchHistoryService",
            listType: "HL",
            path: "/users/{userName}/watch_history",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", "backendErrorReporting", "listType", "brandable", f[g].parser || "videoParser", "paramKey", "params", "locale", f[g].altConstructor || Vm]);
        f = [{
            name: "featuredService",
            path: "/leanback.json",
            parser: "featuredParser",
            paramKey: null,
            params: {
                action_featured: 1,
                client: "lb4",
                hl: ""
            }
        }, {
            altConstructor: jl,
            name: "suggestionService",
            path: "/complete/search",
            parser: "videoParser",
            paramKey: "q",
            params: {}
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "cacheService", "backendErrorReporting", f[g].parser, "paramKey", "params", "locale", f[g].altConstructor || zi]);
        f = [{
            name: "guideService",
            path: "/guide",
            parser: "guideParser",
            params: {}
        }, {
            name: "browseService",
            path: "/browse",
            parser: "browseParser",
            brandable: !0,
            params: {}
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", "backendErrorReporting", "ssoApi", f[g].parser, "params", "locale", "brandable", f[g].altConstructor || Bl]);
        [{
            name: "ytApplication",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/app.html",
            controller: io
        }, {
            name: "ytBrowserow",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/browse_row.html",
            controller: lo
        }, {
            name: "ytDebug",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/debug.html",
            controller: po
        }, {
            name: "ytDialog",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/dialogs/dialog.html",
            controller: Rh
        }, {
            name: "ytGrid",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/grid.html",
            controller: ro
        }, {
            name: "ytLettertile",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/letter_tile.html",
            controller: wo
        }, {
            name: "ytLettersuggestlist",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/list.html",
            controller: vo
        }, {
            name: "ytList",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/list.html",
            controller: uo
        }, {
            name: "ytMessage",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/message.html",
            controller: xo
        }, {
            name: "ytPerflog",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/perflog.html",
            controller: yo
        }, {
            name: "ytRotatelist",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/list.html",
            controller: zo
        }, {
            name: "ytScrollpane",
            restrict: "A",
            replace: !1,
            scope: !0,
            controller: Ao
        }, {
            name: "ytScrollbar",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/scrollbar.html",
            controller: Bo
        }, {
            name: "ytToasts",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/toasts.html",
            controller: Eo
        }, {
            name: "ytTransportcontrols",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/transport_controls.html",
            controller: Go
        }, {
            name: "ytTransportcontrolslist",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: N.D + "/list.html",
            controller: Ho
        }, {
            name: "ytWatch",
            restrict: "E",
            replace: !1,
            scope: !0,
            templateUrl: N.D + "/watch.html",
            controller: Io
        }].forEach(function(b) {
            a.directive(b.name, function() {
                var a = {
                    restrict: b.restrict,
                    replace: b.replace,
                    scope: b.scope,
                    templateUrl: b.templateUrl,
                    controller: b.controller
                };
                "E" === b.restrict && (a.link = c);
                return a
            })
        });
        a.directive("ytFocusable", ["timeService", function(a) {
            return {
                restrict: "A",
                replace: !1,
                scope: !0,
                controller: R,
                link: function(b) {
                    a.setTimeout(function() {
                        c(b)
                    }, 0)
                }
            }
        }
        ]);
        a.directive("ytBrowse", ["environmentModel", function(a) {
            return {
                restrict: "E",
                replace: !0,
                scope: !0,
                templateUrl: N.D + (a.isChromelessContext ? "/empty.html" : "/browse.html"),
                controller: a.isChromelessContext ? Q : ko,
                link: c
            }
        }
        ]);
        a.directive("ytSearch", ["$injector", "environmentModel", function(a, b) {
            var e = {
                restrict: "E",
                replace: !1,
                scope: !0,
                templateUrl: N.D + "/search.html",
                controller: Co,
                link: c
            };
            b.isChromelessContext && (e.templateUrl = N.D + "/empty.html",
            e.controller = Q);
            return e
        }
        ]);
        a.directive("ytKeyboard", ["$injector", "locale", "environmentModel", function(a, b, e) {
            a = mo;
            switch (b.Ea) {
            case "ja_JP":
                a = so;
                break;
            case "ko_KR":
                a = to;
                break;
            case "zh_CN":
            case "zh_HK":
            case "zh_TW":
                a = oo
            }
            return e.supportsNativeOsk ? {
                restrict: "E",
                replace: !0,
                template: ""
            } : {
                restrict: "E",
                replace: !0,
                scope: !0,
                templateUrl: N.D + "/keyboard.html",
                controller: a,
                link: c
            }
        }
        ]);
        a.value("xhrBackend", Ej);
        a.value("jsonpBackend", Jo)
    }
    ;ba("yt.tv.initializer", function(a) {
        var b = "start_browse";
        window.location.href.match(/[?&]v=[\w\+\/\-_=]+/) ? b = "start_watch" : window.location.href.match(/[?&]reversePairingCode=/) && (b = "start_dial");
        window.jstiming.load.name = b;
        if (b = Mg("stickyLabel"))
            if (0 <= window.location.href.indexOf("stick=0"))
                Ng("stickyLabel", "/", document.domain);
            else if (!window.location.href.match("label=")) {
                window.location.href = window.location.href.replace(/\/tv\??/, "/tv?label=" + b + "&");
                return
            }
        mj("goog.net.BrowserChannel").Cs(ij);
        a && (N.Fj = a,
        N.D = a + "/html",
        N.fi = a + "/img");
        qg = pg = JSON.parse;
        rg = JSON.stringify;
        Wi.prototype.parse = function(a) {
            return JSON.parse(a)
        }
        ;
        window.requestAnimationFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 16)
            }
        }();
        $k.value("applicationPath", a);
        b = angular.injector([$k.name]).get("locale");
        Qo(N, b);
        var c = {
            Gl: 0,
            gH: 0,
            complete: function() {
                if (this.Gl <= ++this.gH) {
                    window.jstiming.load.tick("app_r");
                    var a = [];
                    a.push('<div id="app-container">');
                    a.push("<yt:application></yt:application>");
                    a.push("</div>");
                    var b = document.getElementById("leanback");
                    angular.element(b).html(a.join(""));
                    angular.bootstrap(b, ["leanback-app"])
                }
            }
        };
        c.Gl++;
        window.jstiming.load.tick("msg_rq");
        b.hH(y(Ro, window, c));
        "Steel" == m("environment.browser", window) && (a += "/api-compiled.js",
        c.Gl++,
        window.jstiming.load.tick("yts_rq"),
        Gf(a).Df(function() {
            ytshell.ready(y(So, window, c))
        }).$o(function() {
            c.complete()
        }))
    }, void 0);
    function So(a, b) {
        window.jstiming.load.tick("yts_r");
        null == m("environment.ytshell", window) && (window.environment.ytshell = b);
        a.complete()
    }
    function Ro(a) {
        window.jstiming.load.tick("msg_r");
        a.complete()
    }
    ;angular.module("leanback-templates", []).run(["$templateCache", function(a) {
        a.put(N.D + "/app.html", '<div id="app-markup">  <yt:watch id="watch" activate-when="focusable.elementIdEquals(application.activeChildName)" data="application.watchModel.currentVideo"></yt:watch>  <yt:browse id="browse" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:browse>  <yt:search id="search" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:search>  <div class="$call-to-cast"></div>  <div class="logo-container icon-youtube-logo"></div>  <yt:message id="message"></yt:message>  <div id="spinner-container" style="display: none;">    <div class="fallback-loading-indicator">[[LOADING...|Indicator that content is loading from the network.]]</div>    <div class="carousel-loading-indicator"></div>  </div>  <yt:debug id="debug-watermark"></yt:debug>  <yt:dialog id="dialog" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:dialog>  <div class="$legend" id="legend"></div>  <yt:toasts data="application.getCurrentDialogType()"></yt:toasts>  <div class="$engagement-indicator"></div></div>');
        a.put(N.D + "/browse.html", '<div>  <yt:browserow id="browse-row" class="item"></yt:browserow>  <div class="$super-scroller" id="super-scroller"></div>  <div id="up-arrow" class="nav-arrow"></div>  <div id="down-arrow" class="nav-arrow"></div>  <div id="left-arrow" class="nav-arrow"></div>  <div id="right-arrow" class="nav-arrow"></div>  <div id="scroller-background"></div>  <ul class=\'$voice-footer\'></ul></div>');
        a.put(N.D + "/browse_row.html", '<div class="browse-row">  <ul id="tile-row" class="feed-row" data-catch-key-press="false" data-item-name="{{getComponentRendererName()}}"></ul></div>');
        a.put(N.D + "/button.html", '<div class="button"></div>');
        a.put(N.D + "/debug.html", "<h1></h1>");
        a.put(N.D + "/dialogs/authentication_error_info.html", "<div>[[Your account couldn't be accessed. Please sign in again or use a different account.|Error dialog that is shown when sign in credentials are no longer valid and user is automatically signed out]]</div>");
        a.put(N.D + "/dialogs/confirm_cookies_clear.html", "<div>[[Are you sure you'd like to clear all cookies on this device?|Dialog title for a message confirming that the user wants to clear their cookies.]]</div>");
        a.put(N.D + "/dialogs/confirm_cookies_disable.html", "<div>[[Are you sure you'd like to disable cookies? Disabling cookies is not advised and may lead to performance issues.|Dialog title for a message confirming that the user wishes to disable cookies for the app on their device.]]</div>");
        a.put(N.D + "/dialogs/cookies_cleared_info.html", "<div>[[Your cookies have successfully been cleared.|Dialog informing the user that the cookies on their device have been removed successfully.]]</div>");
        a.put(N.D + "/dialogs/debug_info.html", '<div id="debug-info" class="message"></div>');
        a.put(N.D + "/dialogs/dialog.html", '<div>  <div id="dialog-wrapper">    <div class="dialog-icon"></div>    <div class="dialog-contents">      <div class="title"></div>      <div id="inner-dialog-container"></div>      <div class="buttons">        <div class="$button" id="confirm-dialog-cancel-button" data-on-enter="{{cancelClickHandler}}"></div>        <div class="$button" id="confirm-dialog-ok-button" data-on-enter="{{okClickHandler}}"></div>      </div>    </div>  </div></div>');
        a.put(N.D + "/dialogs/eureka_authorization_info.html", '<div class="icon"></div><div class="info">  <div class="title">[[This video can\'t be played on this device.|Informs the user that this video can\'t be played on this device.]]</div>  <div class="message">    [[Please choose another video.|Informs the user to please choose another video for playback.]]  </div></div>');
        a.put(N.D + "/dialogs/eureka_player_error_info.html", '<div class="icon"></div><div class="info">  <div class="title">[[There was an error playing this video.|Informs the user of a video playback error.]]</div>  <div class="message">    [[Please choose another video.|Informs the user to please choose another video for playback.]]  </div></div>');
        a.put(N.D + "/dialogs/flag_claim.html", '<div class="flag-claim">  <div class="metadata">    <span class="text"></span>    <div class="url"></div>  </div>  <div class="copyright-infringment">    [[<div class="subtitle">Infringes my copyright</div> youtube.com/t/dmca_policy <div class="email">or email</div> copyright@youtube.com|Provides a way, via email or web site, to claim that a video infringes the current user\'s copyright.]]  </div>  <div class="privacy-invasion">    [[<div class="subtitle">Invades my privacy</div> youtube.com/t/privacy_guidelines|Provides a way to claim, via email or web site, that a given video invades the current user\'s privacy.]]  </div></div>');
        a.put(N.D + "/dialogs/flag_video.html", '<div class="flag-video">  [[Visit this video on your computer or laptop and click the flag icon to submit a claim:|Provides a URL which a user can access in order to flag the video as inappropriate. Followed by actual URL.]]  <span class="url"></span></div><div class="flag-example"></div>');
        a.put(N.D + "/dialogs/kenko_warning.html", '\x3c!--  Kenko is a health warning required for PS3 devices licensed in JAPAN.  - The first warning is about flashing lights and seizures.  - The second warning is about fatigue and pain.  - The third warning is about limiting exposure of young children to 3D content.  - The last warning is about sleep deprivation.//--\x3e<div>  <div id="kenko">    <div>      <p><div class="warning"></div>\u8b66\u544a</p>      <p>\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u5f15\u304d\u8d77\u3053\u3055\u308c\u308b\u767a\u4f5c\u306b\u3064\u3044\u3066</p>      <p>\u70b9\u6ec5\u3092\u7e70\u308a\u8fd4\u3059\u753b\u9762\u3084\u3001\u305d\u306e\u4ed6\u306e\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u3001\u307e\u308c\u306b\u3001\u76ee\u306e\u75db\u307f\u3001\u8996\u899a\u7570\u5e38\u3001\u504f\u982d\u75db\u3001\u3051\u3044\u308c\u3093\u3084\u610f\u8b58\u969c\u5bb3\uff08\u5931\u795e\u306a\u3069\uff09\u306a\u3069\u306e\u75c7\u72b6\uff08\u5149\u611f\u53d7\u6027\u767a\u4f5c\uff09\u304c\u8d77\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3057\u305f\u75c7\u72b6\u306e\u3042\u308b\u65b9\u306f\u3001\u4e8b\u524d\u306b\u5fc5\u305a\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044</p>    </div>    <div>      <p><div class="warning"></div>\u6ce8\u610f</p>      <p>\u3053\u3093\u306a\u3068\u304d\u306f\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3059\u308b</p>      <p>\u4e0a\u8a18\u306e\u75c7\u72b6\u306b\u52a0\u3048\u3001\u982d\u75db\u3001\u3081\u307e\u3044\u3001\u5410\u304d\u6c17\u3001\u75b2\u52b4\u611f\u3001\u4e57\u308a\u7269\u9154\u3044\u306b\u4f3c\u305f\u75c7\u72b6\u306a\u3069\u3092\u611f\u3058\u305f\u3068\u304d\u3084\u3001\u76ee\u3001\u8033\u3001\u624b\u3001\u8155\u3001\u8db3\u306a\u3069\u3001\u8eab\u4f53\u306e\u4e00\u90e8\u306b\u4e0d\u5feb\u611f\u3084\u75db\u307f\u3092\u611f\u3058\u305f\u3068\u304d\u306f\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u3082\u6cbb\u3089\u306a\u3044\u3068\u304d\u306f\u3001\u533b\u5e2b\u306e\u8a3a\u5bdf\u3092\u53d7\u3051\u3066\u304f\u3060\u3055\u3044\u3002</p>    </div>    <div>      <p>3D\u6620\u50cf\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u306b\u3064\u3044\u3066</p>    3D\u6620\u50cf\u306e\u898b\u3048\u65b9\u306b\u306f\u500b\u4eba\u5dee\u304c\u3042\u308a\u307e\u3059\u3002\u9055\u548c\u611f\u3092\u611f\u3058\u305f\u308a\u3001\u7acb\u4f53\u306b\u898b\u3048\u306a\u3044\u5834\u5408\u306f\u30013D\u6a5f\u80fd\u306e\u3054\u4f7f\u7528\u3092\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002\u6700\u65b0\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18URL\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002    http://www.jp.playstation.com/support/</p>      <p>\u306a\u304a\u3001\u304a\u5b50\u3055\u307e\uff08\u7279\u306b6\u6b73\u672a\u6e80\u306e\u5b50\uff09\u306e\u8996\u899a\u306f\u767a\u9054\u6bb5\u968e\u306b\u3042\u308a\u307e\u3059\u3002\u304a\u5b50\u3055\u307e\u304c3D\u6620\u50cf\u3092\u8996\u8074\u3057\u305f\u308a\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u3092\u30d7\u30ec\u30a4\u3059\u308b\u524d\u306b\u3001\u5c0f\u5150\u79d1\u3084\u773c\u79d1\u306a\u3069\u306e\u533b\u5e2b\u306b\u3054\u76f8\u8ac7\u3044\u305f\u3060\u304f\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002</p>    </div>    <div>      <p>\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u632f\u52d5\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u3064\u3044\u3066</p>      <p>\u632f\u52d5\u969c\u5bb3\u306e\u3042\u308b\u65b9\u306f\u3001\u30d0\u30a4\u30d6\u30ec\u30fc\u30b7\u30e7\u30f3\uff08\u632f\u52d5\uff09\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</p>      <p>\u203b\u632f\u52d5\u6a5f\u80fd\u306e\u5165\uff0f\u5207\u306f\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306ePS\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>    </div>    <div>      <ul class="ul">        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u3001\u90e8\u5c4b\u3092\u660e\u308b\u304f\u3057\u3001\u3067\u304d\u308b\u3060\u3051\u753b\u9762\u304b\u3089\u96e2\u308c\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u75b2\u308c\u3066\u3044\u308b\u3068\u304d\u3084\u7761\u7720\u4e0d\u8db3\u306e\u3068\u304d\u306f\u3001\u30d7\u30ec\u30a4\u3092\u907f\u3051\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u5065\u5eb7\u306e\u305f\u3081\u30011\u6642\u9593\u3054\u3068\u306b15\u5206\u7a0b\u5ea6\u306e\u4f11\u61a9\u3092\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u4e2d\u306b\u4f53\u8abf\u304c\u60aa\u304f\u306a\u3063\u305f\u3089\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u3084\u3081\u3066\u304f\u3060\u3055\u3044\u3002</li>      </ul>    </div>  </div></div>');
        a.put(N.D + "/dialogs/logout_info.html", '<div>  <div class="logout-authenticated-info">    <div class="login-user-icon"></div>    <div class="login-user-info">      <h3 class="display-name"></h3>      <div class="platform-container">        <div class="platform-user-icon"></div>        <span class="platform-user-name"></span>      </div>      <div class="signed-in-message"></div>    </div>  </div></div>');
        a.put(N.D + "/dialogs/network_error_info.html", "<div>[[A network error has occurred. Please check your network connection.|Dialog subtitle telling user that a network error has occurred, and asking the user to check their network connection]]</div>");
        a.put(N.D + "/dialogs/paid_channel_info.html", '<div class="paid-channel-info">[[This is a paid channel, which requires a recurring subscription payment to view the content. To find out more about this channel visit <span class="channel-url"></span> on your computer.|Message that is displayed when user tries to subscribe to a paid channel.]]</div>');
        a.put(N.D + "/dialogs/paid_scope.html", "<div>[[View and manage your rental and purchase history. Please note: This means your rental and purchase history may be displayed and accessible on this device.|This is a dialog subtitle that list a permission that the application is requesting.]]</div>");
        a.put(N.D + "/dialogs/player_error_info.html", '<span class="player-error"></span>');
        a.put(N.D + "/dialogs/remote_reset_info.html", '<div class="connected-list">  <div class="connected-header">[[Paired Devices|Tooltip showing status of paired devices, connected to the application or not.]]</div>  <ul class="devices"></ul></div><span class="reset-help">[[Selecting \'OK\' will disconnect all paired devices.|Tooltip displayed when a user is going to disconnect her mobile device from the application.]]</span>');
        a.put(N.D + "/dialogs/scrollable_dialog.html", '<div yt-scrollpane activate-when="dialog.isActive" class="scrolling-text" ng-include="dialog.data.contentUrl"></div><yt:scrollbar id="dialog-scrollbar"></yt:scrollbar>');
        a.put(N.D + "/dialogs/shiyojo_warning.html", '\x3c!--  Shiyojo is a warning required for PS3 devices licensed in Japan.  - This is a PS3 only app.  - When displayed in a TV other than an LCD TV an afterimage may be burned  into the device if the game/app is left paused for too long.//--\x3e<div id="shiyojo">  <ul>    <li>\u3053\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306fPlayStation&#174;3\u5c02\u7528\u3067\u3059\u3002</li>    <li>PlayStation&#174;3\u3092\u30d7\u30e9\u30ba\u30de\u30c6\u30ec\u30d3\u3084\u3001\u6db2\u6676\u65b9\u5f0f\u4ee5\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30c6\u30ec\u30d3\uff08\u30b9\u30af\u30ea\u30fc\u30f3\u6295\u5f71\u65b9\u5f0f\u30c6\u30ec\u30d3\uff09\u306b\u3064\u306a\u3050\u3068\u3001\u753b\u50cf\u306e\u713c\u304d\u4ed8\u304d\uff08\u6b8b\u50cf\u6620\u50cf\uff09\u304c\u8d77\u3053\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u306b\u3001\u9759\u6b62\u753b\u3092\u30c6\u30ec\u30d3\u753b\u9762\u306b\u8868\u793a\u3057\u305f\u307e\u307e\u9577\u6642\u9593\u653e\u7f6e\u3059\u308b\u3068\u3001\u713c\u304d\u4ed8\u304d\u304c\u8d77\u3053\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002</li>    <li>PlayStation&#174;3\u306e\u30b7\u30b9\u30c6\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u5e38\u306b\u6700\u65b0\u306e\u3082\u306e\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002</li>  </ul>  <div class="small-print">    "<div class="playstation-logo"></div>", "PlayStation", "<div class="ps3-logo"></div>", "PSN logo", "DUALSHOCK" and "SIXAXIS" are registered trademarks of Sony Computer Entertainment Inc.    <p>"XMB" and "\u30af\u30ed\u30b9\u30e1\u30c7\u30a3\u30a2\u30d0\u30fc" are trademarks of Sony Corporation and Sony Computer Entertainment Inc.</p>    <p>Library programs &#169;Sony Computer Entertainment Inc.</p>    "<div class="playstation-logo"></div>"&#169;1994 Sony Computer Entertainment Inc.</p>  <div></div>');
        a.put(N.D + "/dialogs/signed_out_info.html", "<div>  [[You have been signed out by the application.|Message that tells the user that they have been signed out by the application]]</div><div>  [[Would you like to sign in again?|Message that asks the user if they would like to sign in again]]</div>");
        a.put(N.D + "/dialogs/simple_dialog.html", '<div ng-include="dialog.data.contentUrl"></div>');
        a.put(N.D + "/dialogs/tos_info.html", "<div>[[To view the Terms of Service go to:|Dialog subtitle telling user to go to the following URL to view youtube terms of service.]]</div><div class='url'>http://www.youtube.com/terms</div><div>[[To view the Privacy Policy go to:|Dialog subtitle telling user to go to the following URL to view youtube privacy policy document]]</div><div class='url'>http://www.youtube.com/privacy</div>");
        a.put(N.D + "/empty.html", "<div></div>");
        a.put(N.D + "/grid.html", '<div class="grid-content"></div>');
        a.put(N.D + "/keyboard.html", '<div>  <div id="transliteration-container">    <div id="transliteration" class="$transliteration" data-lang-code-pair="{{langCodePair}}"></div>  </div>  <yt:grid id="keyboard-grid" item-renderer="yt:lettertile" loop="true" consume-keys="!keyboard.isLetterSuggestVisible()" repeat-rate="keyboard.getKeyRepeatRate()"></yt:grid>  <yt:lettersuggestlist id="letter-suggest" class="letter-suggest" item-renderer="yt:lettertile" orientation="vertical"></yt:lettersuggestlist></div>');
        a.put(N.D + "/letter_tile.html", "<li></li>");
        a.put(N.D + "/list.html", '<div class="list-content"></div>');
        a.put(N.D + "/message.html", "<div></div>");
        a.put(N.D + "/perflog.html", "<ul></ul>");
        a.put(N.D + "/rolling_toast.html", '<div class="toast">  <div class="toast-container">    <div class="toast-icon">&nbsp;</div>    <div class="toast-progress">      <div class="progress">&nbsp;</div>    </div>    <div class="toast-msg"></div>  </div></div>');
        a.put(N.D + "/scrollbar.html", '<div class="scrollbar">  <div class="handle"></div></div>');
        a.put(N.D + "/search.html", '<div class="controls">  <div id="search-text-box">    <input id="search-input" autocomplete="off" yt:focusable placeholder="[[Search...|Placeholder indicating that a user can start searching within a text box]]"/>    <span id="search-query"></span>  </div>  <div id="search-suggestions" class="$suggestions"></div>  <yt:keyboard id="search-keyboard"></yt:keyboard></div><div class="search-hint">  [[Voice search is not supported.|Message that tells Xbox One users that voice doesn\'t work for search.|1391152342]]</div><div class="search-pairing">  <div class="search-message">    <div class="title">[[Search Faster|Search pairing hint title]]</div>    [[Find videos with your mobile device or laptop and watch them here.|Search pairing hint that you can search on the remote and play on the TV screen.]]  </div>  <div class="$pairing"></div></div>');
        a.put(N.D + "/toasts.html", '<div id="toast">  <div class="toasts"></div></div>');
        a.put(N.D + "/transliteration.html", '<div>  <yt:list id="transliteration" orientation="horizontal" item-renderer="yt:lettertile" loop="true"></yt:list></div>');
        a.put(N.D + "/transport_controls.html", '<div id="player-controls-container">  <div class="player-controls-widget">    <div class="player-controls-border"></div>    <div class="button-tooltip"></div>    <yt:transportcontrolslist id="player-controls" class="player-controls" orientation="horizontal" paging="false"></yt:transportcontrolslist>    <div class="player-seekbar">      <div id="progress-bar" class="$progress-bar"></div>      <div class="player-time-elapsed"></div>      <div class="player-time-total"></div>    </div>  </div></div>');
        a.put(N.D + "/watch.html", '<div id="leanback-player-container"></div><div class="$watch-title-tray" data-model="{{getCurrentVideo()}}"></div><div id="eureka-player-controls-container">  <div id="eureka-player-controls"></div></div><yt:transportcontrols activate-when="watch.isTransportActive()"></yt:transportcontrols><div id="ad-callout" class="$advertisement-callout"></div><div id="branding-container">  <div class="branding-element">    <div id="branding-banner">      <img id="branding-banner-image" />      <div id="branding-banner-overlay">[[Up Next|Message indicating what video is coming next.]]</div>    </div>  </div>  <img id="branding-watermark" class="branding-element" /></div>')
    }
    ]);
}
)();
