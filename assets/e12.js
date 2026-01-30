/*
 AngularJS v1.0.4-cec17a7f
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U, ca, p) {
    'use strict';
    function m(b, a, c) {
        var d;
        if (b)
            if (N(b))
                for (d in b)
                    d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d);
            else if (b.forEach && b.forEach !== m)
                b.forEach(a, c);
            else if (L(b) && wa(b.length))
                for (d = 0; d < b.length; d++)
                    a.call(c, b[d], d);
            else
                for (d in b)
                    b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }
    function lb(b) {
        var a = [], c;
        for (c in b)
            b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }
    function ec(b, a, c) {
        for (var d = lb(b), e = 0; e < d.length; e++)
            a.call(c, b[d[e]], d[e]);
        return d
    }
    function mb(b) {
        return function(a, c) {
            b(c, a)
        }
    }
    function xa() {
        for (var b = Z.length, a; b; ) {
            b--;
            a = Z[b].charCodeAt(0);
            if (a == 57)
                return Z[b] = "A",
                Z.join("");
            if (a == 90)
                Z[b] = "0";
            else
                return Z[b] = String.fromCharCode(a + 1),
                Z.join("")
        }
        Z.unshift("0");
        return Z.join("")
    }
    function x(b) {
        m(arguments, function(a) {
            a !== b && m(a, function(a, d) {
                b[d] = a
            })
        });
        return b
    }
    function G(b) {
        return parseInt(b, 10)
    }
    function ya(b, a) {
        return x(new (x(function() {}, {
            prototype: b
        })), a)
    }
    function D() {}
    function ma(b) {
        return b
    }
    function I(b) {
        return function() {
            return b
        }
    }
    function t(b) {
        return typeof b == "undefined"
    }
    function v(b) {
        return typeof b != "undefined"
    }
    function L(b) {
        return b != null && typeof b == "object"
    }
    function F(b) {
        return typeof b == "string"
    }
    function wa(b) {
        return typeof b == "number"
    }
    function na(b) {
        return Sa.apply(b) == "[object Date]"
    }
    function J(b) {
        return Sa.apply(b) == "[object Array]"
    }
    function N(b) {
        return typeof b == "function"
    }
    function oa(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }
    function R(b) {
        return F(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
    }
    function fc(b) {
        return b && (b.nodeName || b.bind && b.find)
    }
    function Ta(b, a, c) {
        var d = [];
        m(b, function(b, g, i) {
            d.push(a.call(c, b, g, i))
        });
        return d
    }
    function gc(b, a) {
        var c = 0, d;
        if (J(b) || F(b))
            return b.length;
        else if (L(b))
            for (d in b)
                (!a || b.hasOwnProperty(d)) && c++;
        return c
    }
    function za(b, a) {
        if (b.indexOf)
            return b.indexOf(a);
        for (var c = 0; c < b.length; c++)
            if (a === b[c])
                return c;
        return -1
    }
    function Ua(b, a) {
        var c = za(b, a);
        c >= 0 && b.splice(c, 1);
        return a
    }
    function V(b, a) {
        if (oa(b) || b && b.$evalAsync && b.$watch)
            throw B("Can't copy Window or Scope");
        if (a) {
            if (b === a)
                throw B("Can't copy equivalent objects or arrays");
            if (J(b)) {
                for (; a.length; )
                    a.pop();
                for (var c = 0; c < b.length; c++)
                    a.push(V(b[c]))
            } else
                for (c in m(a, function(b, c) {
                    delete a[c]
                }),
                b)
                    a[c] = V(b[c])
        } else
            (a = b) && (J(b) ? a = V(b, []) : na(b) ? a = new Date(b.getTime()) : L(b) && (a = V(b, {})));
        return a
    }
    function hc(b, a) {
        var a = a || {}, c;
        for (c in b)
            b.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (a[c] = b[c]);
        return a
    }
    function ha(b, a) {
        if (b === a)
            return !0;
        if (b === null || a === null)
            return !1;
        if (b !== b && a !== a)
            return !0;
        var c = typeof b, d;
        if (c == typeof a && c == "object")
            if (J(b)) {
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!ha(b[d], a[d]))
                            return !1;
                    return !0
                }
            } else if (na(b))
                return na(a) && b.getTime() == a.getTime();
            else {
                if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || oa(b) || oa(a))
                    return !1;
                c = {};
                for (d in b) {
                    if (d.charAt(0) !== "$" && !N(b[d]) && !ha(b[d], a[d]))
                        return !1;
                    c[d] = !0
                }
                for (d in a)
                    if (!c[d] && d.charAt(0) !== "$" && !N(a[d]))
                        return !1;
                return !0
            }
        return !1
    }
    function Va(b, a) {
        var c = arguments.length > 2 ? ia.call(arguments, 2) : [];
        return N(a) && !(a instanceof RegExp) ? c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(ia.call(arguments, 0))) : a.apply(b, c)
        }
        : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
        : a
    }
    function ic(b, a) {
        var c = a;
        /^\$+/.test(b) ? c = p : oa(a) ? c = "$WINDOW" : a && ca === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
        return c
    }
    function da(b, a) {
        return JSON.stringify(b, ic, a ? "  " : null)
    }
    function nb(b) {
        return F(b) ? JSON.parse(b) : b
    }
    function Wa(b) {
        b && b.length !== 0 ? (b = E("" + b),
        b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
        return b
    }
    function pa(b) {
        b = u(b).clone();
        try {
            b.html("")
        } catch (a) {}
        return u("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
            return "<" + E(b)
        })
    }
    function Xa(b) {
        var a = {}, c, d;
        m((b || "").split("&"), function(b) {
            b && (c = b.split("="),
            d = decodeURIComponent(c[0]),
            a[d] = v(c[1]) ? decodeURIComponent(c[1]) : !0)
        });
        return a
    }
    function ob(b) {
        var a = [];
        m(b, function(b, d) {
            a.push(Ya(d, !0) + (b === !0 ? "" : "=" + Ya(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }
    function Za(b) {
        return Ya(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function Ya(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(a ? null : /%20/g, "+")
    }
    function jc(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b], e, g, i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        m(i, function(a) {
            i[a] = !0;
            c(ca.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (m(b.querySelectorAll("." + a), c),
            m(b.querySelectorAll("." + a + "\\:"), c),
            m(b.querySelectorAll("[" + a + "]"), c))
        });
        m(d, function(a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a,
                g = (b[2] || "").replace(/\s+/g, ",")) : m(a.attributes, function(b) {
                    if (!e && i[b.name])
                        e = a,
                        g = b.value
                })
            }
        });
        e && a(e, g ? [g] : [])
    }
    function pb(b, a) {
        b = u(b);
        a = a || [];
        a.unshift(["$provide", function(a) {
            a.value("$rootElement", b)
        }
        ]);
        a.unshift("ng");
        var c = qb(a);
        c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, i) {
            a.$apply(function() {
                b.data("$injector", i);
                c(b)(a)
            })
        }
        ]);
        return c
    }
    function $a(b, a) {
        a = a || "_";
        return b.replace(kc, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }
    function qa(b, a, c) {
        if (!b)
            throw new B("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }
    function ra(b, a, c) {
        c && J(b) && (b = b[b.length - 1]);
        qa(N(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
        return b
    }
    function lc(b) {
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
                            return j
                        }
                    }
                    if (!e)
                        throw B("No module: " + d);
                    var b = []
                      , c = []
                      , k = a("$injector", "invoke")
                      , j = {
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
                        config: k,
                        run: function(a) {
                            c.push(a);
                            return this
                        }
                    };
                    g && k(g);
                    return j
                })
            }
        })
    }
    function rb(b) {
        return b.replace(mc, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(nc, "Moz$1")
    }
    function ab(b, a) {
        function c() {
            var e;
            for (var b = [this], c = a, i, f, h, k, j, l; b.length; ) {
                i = b.shift();
                f = 0;
                for (h = i.length; f < h; f++) {
                    k = u(i[f]);
                    c ? k.triggerHandler("$destroy") : c = !c;
                    j = 0;
                    for (e = (l = k.children()).length,
                    k = e; j < k; j++)
                        b.push(ja(l[j]))
                }
            }
            return d.apply(this, arguments)
        }
        var d = ja.fn[b]
          , d = d.$original || d;
        c.$original = d;
        ja.fn[b] = c
    }
    function Q(b) {
        if (b instanceof Q)
            return b;
        if (!(this instanceof Q)) {
            if (F(b) && b.charAt(0) != "<")
                throw B("selectors not implemented");
            return new Q(b)
        }
        if (F(b)) {
            var a = ca.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            bb(this, a.childNodes);
            this.remove()
        } else
            bb(this, b)
    }
    function cb(b) {
        return b.cloneNode(!0)
    }
    function sa(b) {
        sb(b);
        for (var a = 0, b = b.childNodes || []; a < b.length; a++)
            sa(b[a])
    }
    function tb(b, a, c) {
        var d = $(b, "events");
        $(b, "handle") && (t(a) ? m(d, function(a, c) {
            db(b, c, a);
            delete d[c]
        }) : t(c) ? (db(b, a, d[a]),
        delete d[a]) : Ua(d[a], c))
    }
    function sb(b) {
        var a = b[Aa]
          , c = Ba[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"),
        tb(b)),
        delete Ba[a],
        b[Aa] = p)
    }
    function $(b, a, c) {
        var d = b[Aa]
          , d = Ba[d || -1];
        if (v(c))
            d || (b[Aa] = d = ++oc,
            d = Ba[d] = {}),
            d[a] = c;
        else
            return d && d[a]
    }
    function ub(b, a, c) {
        var d = $(b, "data")
          , e = v(c)
          , g = !e && v(a)
          , i = g && !L(a);
        !d && !i && $(b, "data", d = {});
        if (e)
            d[a] = c;
        else if (g)
            if (i)
                return d && d[a];
            else
                x(d, a);
        else
            return d
    }
    function Ca(b, a) {
        return (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
    }
    function vb(b, a) {
        a && m(a.split(" "), function(a) {
            b.className = R((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + R(a) + " ", " "))
        })
    }
    function wb(b, a) {
        a && m(a.split(" "), function(a) {
            if (!Ca(b, a))
                b.className = R(b.className + " " + R(a))
        })
    }
    function bb(b, a) {
        if (a)
            for (var a = !a.nodeName && v(a.length) && !oa(a) ? a : [a], c = 0; c < a.length; c++)
                b.push(a[c])
    }
    function xb(b, a) {
        return Da(b, "$" + (a || "ngController") + "Controller")
    }
    function Da(b, a, c) {
        b = u(b);
        for (b[0].nodeType == 9 && (b = b.find("html")); b.length; ) {
            if (c = b.data(a))
                return c;
            b = b.parent()
        }
    }
    function yb(b, a) {
        var c = Ea[a.toLowerCase()];
        return c && zb[b.nodeName] && c
    }
    function pc(b, a) {
        var c = function(c, e) {
            if (!c.preventDefault)
                c.preventDefault = function() {
                    c.returnValue = !1
                }
                ;
            if (!c.stopPropagation)
                c.stopPropagation = function() {
                    c.cancelBubble = !0
                }
                ;
            if (!c.target)
                c.target = c.srcElement || ca;
            if (t(c.defaultPrevented)) {
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
            m(a[e || c.type], function(a) {
                a.call(b, c)
            });
            aa <= 8 ? (c.preventDefault = null,
            c.stopPropagation = null,
            c.isDefaultPrevented = null) : (delete c.preventDefault,
            delete c.stopPropagation,
            delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }
    function ga(b) {
        var a = typeof b, c;
        if (a == "object" && b !== null)
            if (typeof (c = b.$$hashKey) == "function")
                c = b.$$hashKey();
            else {
                if (c === p)
                    c = b.$$hashKey = xa()
            }
        else
            c = b;
        return a + ":" + c
    }
    function Fa(b) {
        m(b, this.put, this)
    }
    function eb() {}
    function Ab(b) {
        var a, c;
        if (typeof b == "function") {
            if (!(a = b.$inject))
                a = [],
                c = b.toString().replace(qc, ""),
                c = c.match(rc),
                m(c[1].split(sc), function(b) {
                    b.replace(tc, function(b, c, d) {
                        a.push(d)
                    })
                }),
                b.$inject = a
        } else
            J(b) ? (c = b.length - 1,
            ra(b[c], "fn"),
            a = b.slice(0, c)) : ra(b, "fn", !0);
        return a
    }
    function qb(b) {
        function a(a) {
            return function(b, c) {
                if (L(b))
                    m(b, mb(a));
                else
                    return a(b, c)
            }
        }
        function c(a, b) {
            N(b) && (b = l.instantiate(b));
            if (!b.$get)
                throw B("Provider " + a + " must define $get factory method.");
            return j[a + f] = b
        }
        function d(a, b) {
            return c(a, {
                $get: b
            })
        }
        function e(a) {
            var b = [];
            m(a, function(a) {
                if (!k.get(a))
                    if (k.put(a, !0),
                    F(a)) {
                        var c = ta(a);
                        b = b.concat(e(c.requires)).concat(c._runBlocks);
                        try {
                            for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                                var h = d[c]
                                  , g = h[0] == "$injector" ? l : l.get(h[0]);
                                g[h[1]].apply(g, h[2])
                            }
                        } catch (n) {
                            throw n.message && (n.message += " from " + a),
                            n;
                        }
                    } else if (N(a))
                        try {
                            b.push(l.invoke(a))
                        } catch (i) {
                            throw i.message && (i.message += " from " + a),
                            i;
                        }
                    else if (J(a))
                        try {
                            b.push(l.invoke(a))
                        } catch (j) {
                            throw j.message && (j.message += " from " + String(a[a.length - 1])),
                            j;
                        }
                    else
                        ra(a, "module")
            });
            return b
        }
        function g(a, b) {
            function c(d) {
                if (typeof d !== "string")
                    throw B("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === i)
                        throw B("Circular dependency: " + h.join(" <- "));
                    return a[d]
                } else
                    try {
                        return h.unshift(d),
                        a[d] = i,
                        a[d] = b(d)
                    } finally {
                        h.shift()
                    }
            }
            function d(a, b, e) {
                var f = [], k = Ab(a), g, n, i;
                n = 0;
                for (g = k.length; n < g; n++)
                    i = k[n],
                    f.push(e && e.hasOwnProperty(i) ? e[i] : c(i, h));
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
                    c.prototype = (J(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return L(e) ? e : c
                },
                get: c,
                annotate: Ab
            }
        }
        var i = {}
          , f = "Provider"
          , h = []
          , k = new Fa
          , j = {
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
                    return d(a, I(b))
                }),
                constant: a(function(a, b) {
                    j[a] = b;
                    o[a] = b
                }),
                decorator: function(a, b) {
                    var c = l.get(a + f)
                      , d = c.$get;
                    c.$get = function() {
                        var a = r.invoke(d, c);
                        return r.invoke(b, null, {
                            $delegate: a
                        })
                    }
                }
            }
        }
          , l = g(j, function() {
            throw B("Unknown provider: " + h.join(" <- "));
        })
          , o = {}
          , r = o.$injector = g(o, function(a) {
            a = l.get(a + f);
            return r.invoke(a.$get, a)
        });
        m(e(b), function(a) {
            r.invoke(a || D)
        });
        return r
    }
    function uc() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        }
        ;
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                m(a, function(a) {
                    !b && E(a.nodeName) === "a" && (b = a)
                });
                return b
            }
            function g() {
                var b = c.hash(), d;
                b ? (d = i.getElementById(b)) ? d.scrollIntoView() : (d = e(i.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }
            var i = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function() {
                d.$evalAsync(g)
            });
            return g
        }
        ]
    }
    function vc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ia.call(arguments, 1))
            } finally {
                if (n--,
                n === 0)
                    for (; w.length; )
                        try {
                            w.pop()()
                        } catch (b) {
                            c.error(b)
                        }
            }
        }
        function g(a, b) {
            (function ea() {
                m(q, function(a) {
                    a()
                });
                s = b(ea, a)
            }
            )()
        }
        function i() {
            O != f.url() && (O = f.url(),
            m(A, function(a) {
                a(f.url())
            }))
        }
        var f = this
          , h = a[0]
          , k = b.location
          , j = b.history
          , l = b.setTimeout
          , o = b.clearTimeout
          , r = {};
        f.isMock = !1;
        var n = 0
          , w = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function() {
            n++
        }
        ;
        f.notifyWhenNoOutstandingRequests = function(a) {
            m(q, function(a) {
                a()
            });
            n === 0 ? a() : w.push(a)
        }
        ;
        var q = [], s;
        f.addPollFn = function(a) {
            t(s) && g(100, l);
            q.push(a);
            return a
        }
        ;
        var O = k.href
          , C = a.find("base");
        f.url = function(a, b) {
            if (a) {
                if (O != a)
                    return O = a,
                    d.history ? b ? j.replaceState(null, "", a) : (j.pushState(null, "", a),
                    C.attr("href", C.attr("href"))) : b ? k.replace(a) : k.href = a,
                    f
            } else
                return k.href.replace(/%27/g, "'")
        }
        ;
        var A = []
          , K = !1;
        f.onUrlChange = function(a) {
            K || (d.history && u(b).bind("popstate", i),
            d.hashchange ? u(b).bind("hashchange", i) : f.addPollFn(i),
            K = !0);
            A.push(a);
            return a
        }
        ;
        f.baseHref = function() {
            var a = C.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : a
        }
        ;
        var W = {}
          , y = ""
          , M = f.baseHref();
        f.cookies = function(a, b) {
            var d, e, f, k;
            if (a)
                if (b === p)
                    h.cookie = escape(a) + "=;path=" + M + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
                else {
                    if (F(b))
                        d = (h.cookie = escape(a) + "=" + escape(b) + ";path=" + M).length + 1,
                        d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"),
                        W.length > 20 && c.warn("Cookie '" + a + "' possibly not set or overflowed because too many cookies were already set (" + W.length + " > 20 )")
                }
            else {
                if (h.cookie !== y) {
                    y = h.cookie;
                    d = y.split("; ");
                    W = {};
                    for (f = 0; f < d.length; f++)
                        e = d[f],
                        k = e.indexOf("="),
                        k > 0 && (W[unescape(e.substring(0, k))] = unescape(e.substring(k + 1)))
                }
                return W
            }
        }
        ;
        f.defer = function(a, b) {
            var c;
            n++;
            c = l(function() {
                delete r[c];
                e(a)
            }, b || 0);
            r[c] = !0;
            return c
        }
        ;
        f.defer.cancel = function(a) {
            return r[a] ? (delete r[a],
            o(a),
            e(D),
            !0) : !1
        }
    }
    function wc() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new vc(b,d,a,c)
        }
        ]
    }
    function xc() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    if (a != l) {
                        if (o) {
                            if (o == a)
                                o = a.n
                        } else
                            o = a;
                        g(a.n, a.p);
                        g(a, l);
                        l = a;
                        l.n = null
                    }
                }
                function g(a, b) {
                    if (a != b) {
                        if (a)
                            a.p = b;
                        if (b)
                            b.n = a
                    }
                }
                if (b in a)
                    throw B("cacheId " + b + " taken");
                var i = 0
                  , f = x({}, d, {
                    id: b
                })
                  , h = {}
                  , k = d && d.capacity || Number.MAX_VALUE
                  , j = {}
                  , l = null
                  , o = null;
                return a[b] = {
                    put: function(a, b) {
                        var c = j[a] || (j[a] = {
                            key: a
                        });
                        e(c);
                        t(b) || (a in h || i++,
                        h[a] = b,
                        i > k && this.remove(o.key))
                    },
                    get: function(a) {
                        var b = j[a];
                        if (b)
                            return e(b),
                            h[a]
                    },
                    remove: function(a) {
                        var b = j[a];
                        if (b) {
                            if (b == l)
                                l = b.p;
                            if (b == o)
                                o = b.n;
                            g(b.n, b.p);
                            delete j[a];
                            delete h[a];
                            i--
                        }
                    },
                    removeAll: function() {
                        h = {};
                        i = 0;
                        j = {};
                        l = o = null
                    },
                    destroy: function() {
                        j = f = h = null;
                        delete a[b]
                    },
                    info: function() {
                        return x({}, f, {
                            size: i
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                m(a, function(a, e) {
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
    function yc() {
        this.$get = ["$cacheFactory", function(b) {
            return b("templates")
        }
        ]
    }
    function Bb(b) {
        var a = {}
          , c = "Directive"
          , d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/
          , e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/
          , g = "Template must have exactly one root element. was: ";
        this.directive = function f(d, e) {
            F(d) ? (qa(e, "directive"),
            a.hasOwnProperty(d) || (a[d] = [],
            b.factory(d + c, ["$injector", "$exceptionHandler", function(b, c) {
                var e = [];
                m(a[d], function(a) {
                    try {
                        var f = b.invoke(a);
                        if (N(f))
                            f = {
                                compile: I(f)
                            };
                        else if (!f.compile && f.link)
                            f.compile = I(f.link);
                        f.priority = f.priority || 0;
                        f.name = f.name || d;
                        f.require = f.require || f.controller && f.name;
                        f.restrict = f.restrict || "A";
                        e.push(f)
                    } catch (k) {
                        c(k)
                    }
                });
                return e
            }
            ])),
            a[d].push(e)) : m(d, mb(f));
            return this
        }
        ;
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", function(b, h, k, j, l, o, r, n) {
            function w(a, b, c) {
                a instanceof u || (a = u(a));
                m(a, function(b, c) {
                    b.nodeType == 3 && (a[c] = u(b).wrap("<span></span>").parent()[0])
                });
                var d = s(a, b, a, c);
                return function(b, c) {
                    qa(b, "scope");
                    var e = c ? ua.clone.call(a) : a;
                    e.data("$scope", b);
                    q(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }
            function q(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }
            function s(a, b, c, d) {
                function e(a, c, d, k) {
                    for (var g, h, j, n, o, l = 0, r = 0, q = f.length; l < q; r++)
                        j = c[r],
                        g = f[l++],
                        h = f[l++],
                        g ? (g.scope ? (n = a.$new(L(g.scope)),
                        u(j).data("$scope", n)) : n = a,
                        (o = g.transclude) || !k && b ? g(h, n, j, d, function(b) {
                            return function(c) {
                                var d = a.$new();
                                return b(d, c).bind("$destroy", Va(d, d.$destroy))
                            }
                        }(o || b)) : g(h, n, j, p, k)) : h && h(a, j.childNodes, p, k)
                }
                for (var f = [], k, g, h, j = 0; j < a.length; j++)
                    g = new ea,
                    k = O(a[j], [], g, d),
                    g = (k = k.length ? C(k, a[j], g, b, c) : null) && k.terminal || !a[j].childNodes.length ? null : s(a[j].childNodes, k ? k.transclude : b),
                    f.push(k),
                    f.push(g),
                    h = h || k || g;
                return h ? e : null
            }
            function O(a, b, c, f) {
                var k = c.$attr, g;
                switch (a.nodeType) {
                case 1:
                    A(b, fa(Cb(a).toLowerCase()), "E", f);
                    var h, j, n;
                    g = a.attributes;
                    for (var o = 0, l = g && g.length; o < l; o++)
                        if (h = g[o],
                        h.specified)
                            j = h.name,
                            n = fa(j.toLowerCase()),
                            k[n] = j,
                            c[n] = h = R(aa && j == "href" ? decodeURIComponent(a.getAttribute(j, 2)) : h.value),
                            yb(a, n) && (c[n] = !0),
                            X(a, b, h, n),
                            A(b, n, "A", f);
                    a = a.className;
                    if (F(a) && a !== "")
                        for (; g = e.exec(a); )
                            n = fa(g[2]),
                            A(b, n, "C", f) && (c[n] = R(g[3])),
                            a = a.substr(g.index + g[0].length);
                    break;
                case 3:
                    H(b, a.nodeValue);
                    break;
                case 8:
                    try {
                        if (g = d.exec(a.nodeValue))
                            n = fa(g[1]),
                            A(b, n, "M", f) && (c[n] = R(g[2]))
                    } catch (r) {}
                }
                b.sort(y);
                return b
            }
            function C(a, b, c, d, e) {
                function f(a, b) {
                    if (a)
                        a.require = z.require,
                        l.push(a);
                    if (b)
                        b.require = z.require,
                        ba.push(b)
                }
                function h(a, b) {
                    var c, d = "data", e = !1;
                    if (F(a)) {
                        for (; (c = a.charAt(0)) == "^" || c == "?"; )
                            a = a.substr(1),
                            c == "^" && (d = "inheritedData"),
                            e = e || c == "?";
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e)
                            throw B("No controller: " + a);
                    } else
                        J(a) && (c = [],
                        m(a, function(a) {
                            c.push(h(a, b))
                        }));
                    return c
                }
                function j(a, d, e, f, g) {
                    var n, q, w, K, s;
                    n = b === e ? c : hc(c, new ea(u(e),c.$attr));
                    q = n.$$element;
                    if (C) {
                        var zc = /^\s*([@=&])\s*(\w*)\s*$/
                          , O = d.$parent || d;
                        m(C.scope, function(a, b) {
                            var c = a.match(zc) || [], e = c[2] || b, f, g, k;
                            switch (c[1]) {
                            case "@":
                                n.$observe(e, function(a) {
                                    d[b] = a
                                });
                                n.$$observers[e].$$scope = O;
                                break;
                            case "=":
                                g = o(n[e]);
                                k = g.assign || function() {
                                    f = d[b] = g(O);
                                    throw B(Db + n[e] + " (directive: " + C.name + ")");
                                }
                                ;
                                f = d[b] = g(O);
                                d.$watch(function() {
                                    var a = g(O);
                                    a !== d[b] && (a !== f ? f = d[b] = a : k(O, a = f = d[b]));
                                    return a
                                });
                                break;
                            case "&":
                                g = o(n[e]);
                                d[b] = function(a) {
                                    return g(O, a)
                                }
                                ;
                                break;
                            default:
                                throw B("Invalid isolate scope definition for directive " + C.name + ": " + a);
                            }
                        })
                    }
                    t && m(t, function(a) {
                        var b = {
                            $scope: d,
                            $element: q,
                            $attrs: n,
                            $transclude: g
                        };
                        s = a.controller;
                        s == "@" && (s = n[a.name]);
                        q.data("$" + a.name + "Controller", r(s, b))
                    });
                    f = 0;
                    for (w = l.length; f < w; f++)
                        try {
                            K = l[f],
                            K(d, q, n, K.require && h(K.require, q))
                        } catch (y) {
                            k(y, pa(q))
                        }
                    a && a(d, e.childNodes, p, g);
                    f = 0;
                    for (w = ba.length; f < w; f++)
                        try {
                            K = ba[f],
                            K(d, q, n, K.require && h(K.require, q))
                        } catch (Ha) {
                            k(Ha, pa(q))
                        }
                }
                for (var n = -Number.MAX_VALUE, l = [], ba = [], s = null, C = null, A = null, y = c.$$element = u(b), z, H, X, D, v = d, t, x, Y, E = 0, G = a.length; E < G; E++) {
                    z = a[E];
                    X = p;
                    if (n > z.priority)
                        break;
                    if (Y = z.scope)
                        M("isolated scope", C, z, y),
                        L(Y) && (q(y, "ng-isolate-scope"),
                        C = z),
                        q(y, "ng-scope"),
                        s = s || z;
                    H = z.name;
                    if (Y = z.controller)
                        t = t || {},
                        M("'" + H + "' controller", t[H], z, y),
                        t[H] = z;
                    if (Y = z.transclude)
                        M("transclusion", D, z, y),
                        D = z,
                        n = z.priority,
                        Y == "element" ? (X = u(b),
                        y = c.$$element = u("<\!-- " + H + ": " + c[H] + " --\>"),
                        b = y[0],
                        Ga(e, u(X[0]), b),
                        v = w(X, d, n)) : (X = u(cb(b)).contents(),
                        y.html(""),
                        v = w(X, d));
                    if (Y = z.template)
                        if (M("template", A, z, y),
                        A = z,
                        Y = Ha(Y),
                        z.replace) {
                            X = u("<div>" + R(Y) + "</div>").contents();
                            b = X[0];
                            if (X.length != 1 || b.nodeType !== 1)
                                throw new B(g + Y);
                            Ga(e, y, b);
                            H = {
                                $attr: {}
                            };
                            a = a.concat(O(b, a.splice(E + 1, a.length - (E + 1)), H));
                            K(c, H);
                            G = a.length
                        } else
                            y.html(Y);
                    if (z.templateUrl)
                        M("template", A, z, y),
                        A = z,
                        j = W(a.splice(E, a.length - E), j, y, c, e, z.replace, v),
                        G = a.length;
                    else if (z.compile)
                        try {
                            x = z.compile(y, c, v),
                            N(x) ? f(null, x) : x && f(x.pre, x.post)
                        } catch (I) {
                            k(I, pa(y))
                        }
                    if (z.terminal)
                        j.terminal = !0,
                        n = Math.max(n, z.priority)
                }
                j.scope = s && s.scope;
                j.transclude = D && v;
                return j
            }
            function A(d, e, g, h) {
                var j = !1;
                if (a.hasOwnProperty(e))
                    for (var n, e = b.get(e + c), o = 0, l = e.length; o < l; o++)
                        try {
                            if (n = e[o],
                            (h === p || h > n.priority) && n.restrict.indexOf(g) != -1)
                                d.push(n),
                                j = !0
                        } catch (r) {
                            k(r)
                        }
                return j
            }
            function K(a, b) {
                var c = b.$attr
                  , d = a.$attr
                  , e = a.$$element;
                m(a, function(d, e) {
                    e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]),
                    a.$set(e, d, !0, c[e]))
                });
                m(b, function(b, f) {
                    f == "class" ? (q(e, b),
                    a["class"] = (a["class"] ? a["class"] + " " : "") + b) : f == "style" ? e.attr("style", e.attr("style") + ";" + b) : f.charAt(0) != "$" && !a.hasOwnProperty(f) && (a[f] = b,
                    d[f] = c[f])
                })
            }
            function W(a, b, c, d, e, f, k) {
                var h = [], n, o, r = c[0], q = a.shift(), w = x({}, q, {
                    controller: null,
                    templateUrl: null,
                    transclude: null,
                    scope: null
                });
                c.html("");
                j.get(q.templateUrl, {
                    cache: l
                }).success(function(j) {
                    var l, q, j = Ha(j);
                    if (f) {
                        q = u("<div>" + R(j) + "</div>").contents();
                        l = q[0];
                        if (q.length != 1 || l.nodeType !== 1)
                            throw new B(g + j);
                        j = {
                            $attr: {}
                        };
                        Ga(e, c, l);
                        O(l, a, j);
                        K(d, j)
                    } else
                        l = r,
                        c.html(j);
                    a.unshift(w);
                    n = C(a, c, d, k);
                    for (o = s(c.contents(), k); h.length; ) {
                        var ba = h.pop()
                          , j = h.pop();
                        q = h.pop();
                        var y = h.pop()
                          , m = l;
                        q !== r && (m = cb(l),
                        Ga(j, u(q), m));
                        n(function() {
                            b(o, y, m, e, ba)
                        }, y, m, e, ba)
                    }
                    h = null
                }).error(function(a, b, c, d) {
                    throw B("Failed to load template: " + d.url);
                });
                return function(a, c, d, e, f) {
                    h ? (h.push(c),
                    h.push(d),
                    h.push(e),
                    h.push(f)) : n(function() {
                        b(o, c, d, e, f)
                    }, c, d, e, f)
                }
            }
            function y(a, b) {
                return b.priority - a.priority
            }
            function M(a, b, c, d) {
                if (b)
                    throw B("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + pa(d));
            }
            function H(a, b) {
                var c = h(b, !0);
                c && a.push({
                    priority: 0,
                    compile: I(function(a, b) {
                        var d = b.parent()
                          , e = d.data("$binding") || [];
                        e.push(c);
                        q(d.data("$binding", e), "ng-binding");
                        a.$watch(c, function(a) {
                            b[0].nodeValue = a
                        })
                    })
                })
            }
            function X(a, b, c, d) {
                var e = h(c, !0);
                e && b.push({
                    priority: 100,
                    compile: I(function(a, b, c) {
                        b = c.$$observers || (c.$$observers = {});
                        d === "class" && (e = h(c[d], !0));
                        c[d] = p;
                        (b[d] || (b[d] = [])).$$inter = !0;
                        (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function(a) {
                            c.$set(d, a)
                        })
                    })
                })
            }
            function Ga(a, b, c) {
                var d = b[0], e = d.parentNode, f, g;
                if (a) {
                    f = 0;
                    for (g = a.length; f < g; f++)
                        if (a[f] == d) {
                            a[f] = c;
                            break
                        }
                }
                e && e.replaceChild(c, d);
                c[u.expando] = d[u.expando];
                b[0] = c
            }
            var ea = function(a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            ea.prototype = {
                $normalize: fa,
                $set: function(a, b, c, d) {
                    var e = yb(this.$$element[0], a)
                      , f = this.$$observers;
                    e && (this.$$element.prop(a, b),
                    d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = $a(a, "-"));
                    c !== !1 && (b === null || b === p ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    f && m(f[a], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            k(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this
                      , d = c.$$observers || (c.$$observers = {})
                      , e = d[a] || (d[a] = []);
                    e.push(b);
                    n.$evalAsync(function() {
                        e.$$inter || b(c[a])
                    });
                    return b
                }
            };
            var D = h.startSymbol()
              , ba = h.endSymbol()
              , Ha = D == "{{" || ba == "}}" ? ma : function(a) {
                return a.replace(/\{\{/g, D).replace(/}}/g, ba)
            }
            ;
            return w
        }
        ]
    }
    function fa(b) {
        return rb(b.replace(Ac, ""))
    }
    function Bc() {
        var b = {};
        this.register = function(a, c) {
            L(a) ? x(b, a) : b[a] = c
        }
        ;
        this.$get = ["$injector", "$window", function(a, c) {
            return function(d, e) {
                if (F(d)) {
                    var g = d
                      , d = b.hasOwnProperty(g) ? b[g] : fb(e.$scope, g, !0) || fb(c, g, !0);
                    ra(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }
        ]
    }
    function Cc() {
        this.$get = ["$window", function(b) {
            return u(b.document)
        }
        ]
    }
    function Dc() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }
        ]
    }
    function Ec() {
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
                for (var h, k, j = 0, l = [], o = d.length, r = !1, n = []; j < o; )
                    (h = d.indexOf(b, j)) != -1 && (k = d.indexOf(a, h + e)) != -1 ? (j != h && l.push(d.substring(j, h)),
                    l.push(j = c(r = d.substring(h + e, k))),
                    j.exp = r,
                    j = k + g,
                    r = !0) : (j != o && l.push(d.substring(j)),
                    j = o);
                if (!(o = l.length))
                    l.push(""),
                    o = 1;
                if (!f || r)
                    return n.length = o,
                    j = function(a) {
                        for (var b = 0, c = o, d; b < c; b++) {
                            if (typeof (d = l[b]) == "function")
                                d = d(a),
                                d == null || d == p ? d = "" : typeof d != "string" && (d = da(d));
                            n[b] = d
                        }
                        return n.join("")
                    }
                    ,
                    j.exp = d,
                    j.parts = l,
                    j
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
    function Eb(b) {
        for (var b = b.split("/"), a = b.length; a--; )
            b[a] = Za(b[a]);
        return b.join("/")
    }
    function va(b, a) {
        var c = Fb.exec(b)
          , c = {
            protocol: c[1],
            host: c[3],
            port: G(c[5]) || Gb[c[1]] || null,
            path: c[6] || "/",
            search: c[8],
            hash: c[10]
        };
        if (a)
            a.$$protocol = c.protocol,
            a.$$host = c.host,
            a.$$port = c.port;
        return c
    }
    function ka(b, a, c) {
        return b + "://" + a + (c == Gb[b] ? "" : ":" + c)
    }
    function Fc(b, a, c) {
        var d = va(b);
        return decodeURIComponent(d.path) != a || t(d.hash) || d.hash.indexOf(c) !== 0 ? b : ka(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }
    function Gc(b, a, c) {
        var d = va(b);
        if (decodeURIComponent(d.path) == a)
            return b;
        else {
            var e = d.search && "?" + d.search || ""
              , g = d.hash && "#" + d.hash || ""
              , i = a.substr(0, a.lastIndexOf("/"))
              , f = d.path.substr(i.length);
            if (d.path.indexOf(i) !== 0)
                throw B('Invalid url "' + b + '", missing path prefix "' + i + '" !');
            return ka(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
        }
    }
    function gb(b, a, c) {
        a = a || "";
        this.$$parse = function(b) {
            var c = va(b, this);
            if (c.path.indexOf(a) !== 0)
                throw B('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = Xa(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        }
        ;
        this.$$compose = function() {
            var b = ob(this.$$search)
              , c = this.$$hash ? "#" + Za(this.$$hash) : "";
            this.$$url = Eb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        }
        ;
        this.$$rewriteAppUrl = function(a) {
            if (a.indexOf(c) == 0)
                return a
        }
        ;
        this.$$parse(b)
    }
    function Ia(b, a, c) {
        var d;
        this.$$parse = function(b) {
            var c = va(b, this);
            if (c.hash && c.hash.indexOf(a) !== 0)
                throw B('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Hc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = Xa(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
            this.$$compose()
        }
        ;
        this.$$compose = function() {
            var b = ob(this.$$search)
              , c = this.$$hash ? "#" + Za(this.$$hash) : "";
            this.$$url = Eb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        }
        ;
        this.$$rewriteAppUrl = function(a) {
            if (a.indexOf(c) == 0)
                return a
        }
        ;
        this.$$parse(b)
    }
    function Hb(b, a, c, d) {
        Ia.apply(this, arguments);
        this.$$rewriteAppUrl = function(b) {
            if (b.indexOf(c) == 0)
                return c + d + "#" + a + b.substr(c.length)
        }
    }
    function Ja(b) {
        return function() {
            return this[b]
        }
    }
    function Ib(b, a) {
        return function(c) {
            if (t(c))
                return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }
    function Ic() {
        var b = ""
          , a = !1;
        this.hashPrefix = function(a) {
            return v(a) ? (b = a,
            this) : b
        }
        ;
        this.html5Mode = function(b) {
            return v(b) ? (a = b,
            this) : a
        }
        ;
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, g) {
            function i(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }
            var f, h, k, j = d.url(), l = va(j);
            a ? (h = d.baseHref() || "/",
            k = h.substr(0, h.lastIndexOf("/")),
            l = ka(l.protocol, l.host, l.port) + k + "/",
            f = e.history ? new gb(Fc(j, h, b),k,l) : new Hb(Gc(j, h, b),b,l,h.substr(k.length + 1))) : (l = ka(l.protocol, l.host, l.port) + (l.path || "") + (l.search ? "?" + l.search : "") + "#" + b + "/",
            f = new Ia(j,b,l));
            g.bind("click", function(a) {
                if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                    for (var b = u(a.target); E(b[0].nodeName) !== "a"; )
                        if (b[0] === g[0] || !(b = b.parent())[0])
                            return;
                    var d = b.prop("href")
                      , e = f.$$rewriteAppUrl(d);
                    d && !b.attr("target") && e && (f.$$parse(e),
                    c.$apply(),
                    a.preventDefault(),
                    U.angular["ff-684208-preventDefault"] = !0)
                }
            });
            f.absUrl() != j && d.url(f.absUrl(), !0);
            d.onUrlChange(function(a) {
                f.absUrl() != a && (c.$evalAsync(function() {
                    var b = f.absUrl();
                    f.$$parse(a);
                    i(b)
                }),
                c.$$phase || c.$digest())
            });
            var o = 0;
            c.$watch(function() {
                var a = d.url()
                  , b = f.$$replace;
                if (!o || a != f.absUrl())
                    o++,
                    c.$evalAsync(function() {
                        c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b),
                        i(a))
                    });
                f.$$replace = !1;
                return o
            });
            return f
        }
        ]
    }
    function Jc() {
        this.$get = ["$window", function(b) {
            function a(a) {
                a instanceof B && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }
            function c(c) {
                var e = b.console || {}
                  , g = e[c] || e.log || D;
                return g.apply ? function() {
                    var b = [];
                    m(arguments, function(c) {
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
    function Kc(b, a) {
        function c(a) {
            return a.indexOf(q) != -1
        }
        function d() {
            return n + 1 < b.length ? b.charAt(n + 1) : !1
        }
        function e(a) {
            return "0" <= a && a <= "9"
        }
        function g(a) {
            return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
        }
        function i(a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }
        function f(a) {
            return a == "-" || a == "+" || e(a)
        }
        function h(a, c, d) {
            d = d || n;
            throw B("Lexer Error: " + a + " at column" + (v(c) ? "s " + c + "-" + n + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }
        function k() {
            for (var a = "", c = n; n < b.length; ) {
                var k = E(b.charAt(n));
                if (k == "." || e(k))
                    a += k;
                else {
                    var g = d();
                    if (k == "e" && f(g))
                        a += k;
                    else if (f(k) && g && e(g) && a.charAt(a.length - 1) == "e")
                        a += k;
                    else if (f(k) && (!g || !e(g)) && a.charAt(a.length - 1) == "e")
                        h("Invalid exponent");
                    else
                        break
                }
                n++
            }
            a *= 1;
            o.push({
                index: c,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            })
        }
        function j() {
            for (var c = "", d = n, f, k, h; n < b.length; ) {
                var j = b.charAt(n);
                if (j == "." || i(j) || e(j))
                    j == "." && (f = n),
                    c += j;
                else
                    break;
                n++
            }
            if (f)
                for (k = n; k < b.length; ) {
                    j = b.charAt(k);
                    if (j == "(") {
                        h = c.substr(f - d + 1);
                        c = c.substr(0, f - d);
                        n = k;
                        break
                    }
                    if (g(j))
                        k++;
                    else
                        break
                }
            d = {
                index: d,
                text: c
            };
            if (Ka.hasOwnProperty(c))
                d.fn = d.json = Ka[c];
            else {
                var l = Jb(c, a);
                d.fn = x(function(a, b) {
                    return l(a, b)
                }, {
                    assign: function(a, b) {
                        return Kb(a, c, b)
                    }
                })
            }
            o.push(d);
            h && (o.push({
                index: f,
                text: ".",
                json: !1
            }),
            o.push({
                index: f + 1,
                text: h,
                json: !1
            }))
        }
        function l(a) {
            var c = n;
            n++;
            for (var d = "", e = a, f = !1; n < b.length; ) {
                var k = b.charAt(n);
                e += k;
                if (f)
                    k == "u" ? (k = b.substring(n + 1, n + 5),
                    k.match(/[\da-f]{4}/i) || h("Invalid unicode escape [\\u" + k + "]"),
                    n += 4,
                    d += String.fromCharCode(parseInt(k, 16))) : (f = Lc[k],
                    d += f ? f : k),
                    f = !1;
                else if (k == "\\")
                    f = !0;
                else if (k == a) {
                    n++;
                    o.push({
                        index: c,
                        text: e,
                        string: d,
                        json: !0,
                        fn: function() {
                            return d
                        }
                    });
                    return
                } else
                    d += k;
                n++
            }
            h("Unterminated quote", c)
        }
        for (var o = [], r, n = 0, w = [], q, s = ":"; n < b.length; ) {
            q = b.charAt(n);
            if (c("\"'"))
                l(q);
            else if (e(q) || c(".") && e(d()))
                k();
            else if (i(q)) {
                if (j(),
                "{,".indexOf(s) != -1 && w[0] == "{" && (r = o[o.length - 1]))
                    r.json = r.text.indexOf(".") == -1
            } else if (c("(){}[].,;:"))
                o.push({
                    index: n,
                    text: q,
                    json: ":[,".indexOf(s) != -1 && c("{[") || c("}]:,")
                }),
                c("{[") && w.unshift(q),
                c("}]") && w.shift(),
                n++;
            else if (g(q)) {
                n++;
                continue
            } else {
                var m = q + d()
                  , C = Ka[q]
                  , A = Ka[m];
                A ? (o.push({
                    index: n,
                    text: m,
                    fn: A
                }),
                n += 2) : C ? (o.push({
                    index: n,
                    text: q,
                    fn: C,
                    json: "[,:".indexOf(s) != -1 && c("+-")
                }),
                n += 1) : h("Unexpected next character ", n, n + 1)
            }
            s = q
        }
        return o
    }
    function Mc(b, a, c, d) {
        function e(a, c) {
            throw B("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }
        function g() {
            if (M.length === 0)
                throw B("Unexpected end of expression: " + b);
            return M[0]
        }
        function i(a, b, c, d) {
            if (M.length > 0) {
                var e = M[0]
                  , f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d)
                    return e
            }
            return !1
        }
        function f(b, c, d, f) {
            return (b = i(b, c, d, f)) ? (a && !b.json && e("is not valid json", b),
            M.shift(),
            b) : !1
        }
        function h(a) {
            f(a) || e("is unexpected, expecting [" + a + "]", i())
        }
        function k(a, b) {
            return function(c, d) {
                return a(c, d, b)
            }
        }
        function j(a, b, c) {
            return function(d, e) {
                return b(d, e, a, c)
            }
        }
        function l() {
            for (var a = []; ; )
                if (M.length > 0 && !i("}", ")", ";", "]") && a.push(v()),
                !f(";"))
                    return a.length == 1 ? a[0] : function(b, c) {
                        for (var d, e = 0; e < a.length; e++) {
                            var f = a[e];
                            f && (d = f(b, c))
                        }
                        return d
                    }
        }
        function o() {
            for (var a = f(), b = c(a.text), d = []; ; )
                if (a = f(":"))
                    d.push(H());
                else {
                    var e = function(a, c, e) {
                        for (var e = [e], f = 0; f < d.length; f++)
                            e.push(d[f](a, c));
                        return b.apply(a, e)
                    };
                    return function() {
                        return e
                    }
                }
        }
        function r() {
            for (var a = n(), b; ; )
                if (b = f("||"))
                    a = j(a, b.fn, n());
                else
                    return a
        }
        function n() {
            var a = w(), b;
            if (b = f("&&"))
                a = j(a, b.fn, n());
            return a
        }
        function w() {
            var a = q(), b;
            if (b = f("==", "!="))
                a = j(a, b.fn, w());
            return a
        }
        function q() {
            var a;
            a = s();
            for (var b; b = f("+", "-"); )
                a = j(a, b.fn, s());
            if (b = f("<", ">", "<=", ">="))
                a = j(a, b.fn, q());
            return a
        }
        function s() {
            for (var a = m(), b; b = f("*", "/", "%"); )
                a = j(a, b.fn, m());
            return a
        }
        function m() {
            var a;
            return f("+") ? C() : (a = f("-")) ? j(W, a.fn, m()) : (a = f("!")) ? k(a.fn, m()) : C()
        }
        function C() {
            var a;
            if (f("("))
                a = v(),
                h(")");
            else if (f("["))
                a = A();
            else if (f("{"))
                a = K();
            else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", "."); )
                b.text === "(" ? (a = u(a, c),
                c = null) : b.text === "[" ? (c = a,
                a = ea(a)) : b.text === "." ? (c = a,
                a = t(a)) : e("IMPOSSIBLE");
            return a
        }
        function A() {
            var a = [];
            if (g().text != "]") {
                do
                    a.push(H());
                while (f(","))
            }
            h("]");
            return function(b, c) {
                for (var d = [], e = 0; e < a.length; e++)
                    d.push(a[e](b, c));
                return d
            }
        }
        function K() {
            var a = [];
            if (g().text != "}") {
                do {
                    var b = f()
                      , b = b.string || b.text;
                    h(":");
                    var c = H();
                    a.push({
                        key: b,
                        value: c
                    })
                } while (f(","))
            }
            h("}");
            return function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e]
                      , k = f.value(b, c);
                    d[f.key] = k
                }
                return d
            }
        }
        var W = I(0), y, M = Kc(b, d), H = function() {
            var a = r(), c, d;
            return (d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d),
            c = r(),
            function(b, d) {
                return a.assign(b, c(b, d), d)
            }
            ) : a
        }, u = function(a, b) {
            var c = [];
            if (g().text != ")") {
                do
                    c.push(H());
                while (f(","))
            }
            h(")");
            return function(d, e) {
                for (var f = [], k = b ? b(d, e) : d, h = 0; h < c.length; h++)
                    f.push(c[h](d, e));
                h = a(d, e) || D;
                return h.apply ? h.apply(k, f) : h(f[0], f[1], f[2], f[3], f[4])
            }
        }, t = function(a) {
            var b = f().text
              , c = Jb(b, d);
            return x(function(b, d) {
                return c(a(b, d), d)
            }, {
                assign: function(c, d, e) {
                    return Kb(a(c, e), b, d)
                }
            })
        }, ea = function(a) {
            var b = H();
            h("]");
            return x(function(c, d) {
                var e = a(c, d), f = b(c, d), k;
                if (!e)
                    return p;
                if ((e = e[f]) && e.then) {
                    k = e;
                    if (!("$$v"in e))
                        k.$$v = p,
                        k.then(function(a) {
                            k.$$v = a
                        });
                    e = e.$$v
                }
                return e
            }, {
                assign: function(c, d, e) {
                    return a(c, e)[b(c, e)] = d
                }
            })
        }, v = function() {
            for (var a = H(), b; ; )
                if (b = f("|"))
                    a = j(a, b.fn, o());
                else
                    return a
        };
        a ? (H = r,
        u = t = ea = v = function() {
            e("is not valid json", {
                text: b,
                index: 0
            })
        }
        ,
        y = C()) : y = l();
        M.length !== 0 && e("is an unexpected token", M[0]);
        return y
    }
    function Kb(b, a, c) {
        for (var a = a.split("."), d = 0; a.length > 1; d++) {
            var e = a.shift()
              , g = b[e];
            g || (g = {},
            b[e] = g);
            b = g
        }
        return b[a.shift()] = c
    }
    function fb(b, a, c) {
        if (!a)
            return b;
        for (var a = a.split("."), d, e = b, g = a.length, i = 0; i < g; i++)
            d = a[i],
            b && (b = (e = b)[d]);
        return !c && N(b) ? Va(e, b) : b
    }
    function Lb(b, a, c, d, e) {
        return function(g, i) {
            var f = i && i.hasOwnProperty(b) ? i : g, h;
            if (f === null || f === p)
                return f;
            if ((f = f[b]) && f.then) {
                if (!("$$v"in f))
                    h = f,
                    h.$$v = p,
                    h.then(function(a) {
                        h.$$v = a
                    });
                f = f.$$v
            }
            if (!a || f === null || f === p)
                return f;
            if ((f = f[a]) && f.then) {
                if (!("$$v"in f))
                    h = f,
                    h.$$v = p,
                    h.then(function(a) {
                        h.$$v = a
                    });
                f = f.$$v
            }
            if (!c || f === null || f === p)
                return f;
            if ((f = f[c]) && f.then) {
                if (!("$$v"in f))
                    h = f,
                    h.$$v = p,
                    h.then(function(a) {
                        h.$$v = a
                    });
                f = f.$$v
            }
            if (!d || f === null || f === p)
                return f;
            if ((f = f[d]) && f.then) {
                if (!("$$v"in f))
                    h = f,
                    h.$$v = p,
                    h.then(function(a) {
                        h.$$v = a
                    });
                f = f.$$v
            }
            if (!e || f === null || f === p)
                return f;
            if ((f = f[e]) && f.then) {
                if (!("$$v"in f))
                    h = f,
                    h.$$v = p,
                    h.then(function(a) {
                        h.$$v = a
                    });
                f = f.$$v
            }
            return f
        }
    }
    function Jb(b, a) {
        if (hb.hasOwnProperty(b))
            return hb[b];
        var c = b.split("."), d = c.length, e;
        if (a)
            e = d < 6 ? Lb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
                var e = 0, k;
                do
                    k = Lb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b),
                    b = p,
                    a = k;
                while (e < d);
                return k
            }
            ;
        else {
            var g = "var l, fn, p;\n";
            m(c, function(a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function() {
                return g
            }
        }
        return hb[b] = e
    }
    function Nc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function(a, c) {
            return function(d) {
                switch (typeof d) {
                case "string":
                    return b.hasOwnProperty(d) ? b[d] : b[d] = Mc(d, !1, a, c.csp);
                case "function":
                    return d;
                default:
                    return D
                }
            }
        }
        ]
    }
    function Oc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return Pc(function(a) {
                b.$evalAsync(a)
            }, a)
        }
        ]
    }
    function Pc(b, a) {
        function c(a) {
            return a
        }
        function d(a) {
            return i(a)
        }
        var e = function() {
            var f = [], h, k;
            return k = {
                resolve: function(a) {
                    if (f) {
                        var c = f;
                        f = p;
                        h = g(a);
                        c.length && b(function() {
                            for (var a, b = 0, d = c.length; b < d; b++)
                                a = c[b],
                                h.then(a[0], a[1])
                        })
                    }
                },
                reject: function(a) {
                    k.resolve(i(a))
                },
                promise: {
                    then: function(b, k) {
                        var g = e()
                          , i = function(d) {
                            try {
                                g.resolve((b || c)(d))
                            } catch (e) {
                                a(e),
                                g.reject(e)
                            }
                        }
                          , n = function(b) {
                            try {
                                g.resolve((k || d)(b))
                            } catch (c) {
                                a(c),
                                g.reject(c)
                            }
                        };
                        f ? f.push([i, n]) : h.then(i, n);
                        return g.promise
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
          , i = function(a) {
            return {
                then: function(c, k) {
                    var g = e();
                    b(function() {
                        g.resolve((k || d)(a))
                    });
                    return g.promise
                }
            }
        };
        return {
            defer: e,
            reject: i,
            when: function(f, h, k) {
                var j = e(), l, o = function(b) {
                    try {
                        return (h || c)(b)
                    } catch (d) {
                        return a(d),
                        i(d)
                    }
                }, r = function(b) {
                    try {
                        return (k || d)(b)
                    } catch (c) {
                        return a(c),
                        i(c)
                    }
                };
                b(function() {
                    g(f).then(function(a) {
                        l || (l = !0,
                        j.resolve(g(a).then(o, r)))
                    }, function(a) {
                        l || (l = !0,
                        j.resolve(r(a)))
                    })
                });
                return j.promise
            },
            all: function(a) {
                var b = e()
                  , c = a.length
                  , d = [];
                c ? m(a, function(a, e) {
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
    function Qc() {
        var b = {};
        this.when = function(a, c) {
            b[a] = x({
                reloadOnSearch: !0
            }, c);
            if (a) {
                var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
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
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(a, c, d, e, g, i, f) {
            function h() {
                var b = k()
                  , h = r.current;
                if (b && h && b.$route === h.$route && ha(b.pathParams, h.pathParams) && !b.reloadOnSearch && !o)
                    h.params = b.params,
                    V(h.params, d),
                    a.$broadcast("$routeUpdate", h);
                else if (b || h)
                    o = !1,
                    a.$broadcast("$routeChangeStart", b, h),
                    (r.current = b) && b.redirectTo && (F(b.redirectTo) ? c.path(j(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()),
                    e.when(b).then(function() {
                        if (b) {
                            var a = [], c = [], d;
                            m(b.resolve || {}, function(b, d) {
                                a.push(d);
                                c.push(F(b) ? g.get(b) : g.invoke(b))
                            });
                            if (!v(d = b.template))
                                if (v(d = b.templateUrl))
                                    d = i.get(d, {
                                        cache: f
                                    }).then(function(a) {
                                        return a.data
                                    });
                            v(d) && (a.push("$template"),
                            c.push(d));
                            return e.all(c).then(function(b) {
                                var c = {};
                                m(b, function(b, d) {
                                    c[a[d]] = b
                                });
                                return c
                            })
                        }
                    }).then(function(c) {
                        if (b == r.current) {
                            if (b)
                                b.locals = c,
                                V(b.params, d);
                            a.$broadcast("$routeChangeSuccess", b, h)
                        }
                    }, function(c) {
                        b == r.current && a.$broadcast("$routeChangeError", b, h, c)
                    })
            }
            function k() {
                var a, d;
                m(b, function(b, e) {
                    if (!d && (a = l(c.path(), e)))
                        d = ya(b, {
                            params: x({}, c.search(), a),
                            pathParams: a
                        }),
                        d.$route = b
                });
                return d || b[null] && ya(b[null], {
                    params: {},
                    pathParams: {}
                })
            }
            function j(a, b) {
                var c = [];
                m((a || "").split(":"), function(a, d) {
                    if (d == 0)
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
            var l = function(a, b) {
                var c = "^" + b.replace(/([\.\\\(\)\^\$])/g, "\\$1") + "$"
                  , d = []
                  , e = {};
                m(b.split(/\W/), function(a) {
                    if (a) {
                        var b = RegExp(":" + a + "([\\W])");
                        c.match(b) && (c = c.replace(b, "([^\\/]*)$1"),
                        d.push(a))
                    }
                });
                var f = a.match(RegExp(c));
                f && m(d, function(a, b) {
                    e[a] = f[b + 1]
                });
                return f ? e : null
            }
              , o = !1
              , r = {
                routes: b,
                reload: function() {
                    o = !0;
                    a.$evalAsync(h)
                }
            };
            a.$on("$locationChangeSuccess", h);
            return r
        }
        ]
    }
    function Rc() {
        this.$get = I({})
    }
    function Sc() {
        var b = 10;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        }
        ;
        this.$get = ["$injector", "$exceptionHandler", "$parse", function(a, c, d) {
            function e() {
                this.$id = xa();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {}
            }
            function g(a) {
                if (h.$$phase)
                    throw B(h.$$phase + " already in progress");
                h.$$phase = a
            }
            function i(a, b) {
                var c = d(a);
                ra(c, b);
                return c
            }
            function f() {}
            e.prototype = {
                $new: function(a) {
                    if (N(a))
                        throw B("API-CHANGE: Use $controller to instantiate controllers.");
                    a ? (a = new e,
                    a.$root = this.$root) : (a = function() {}
                    ,
                    a.prototype = this,
                    a = new a,
                    a.$id = xa());
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
                    var d = i(a, "watch")
                      , e = this.$$watchers
                      , g = {
                        fn: b,
                        last: f,
                        get: d,
                        exp: a,
                        eq: !!c
                    };
                    if (!N(b)) {
                        var h = i(b || D, "listener");
                        g.fn = function(a, b, c) {
                            h(c)
                        }
                    }
                    if (!e)
                        e = this.$$watchers = [];
                    e.unshift(g);
                    return function() {
                        Ua(e, g)
                    }
                },
                $digest: function() {
                    var a, d, e, i, r, n, m, q = b, s, p = [], C, A;
                    g("$digest");
                    do {
                        m = !1;
                        s = this;
                        do {
                            for (r = s.$$asyncQueue; r.length; )
                                try {
                                    s.$eval(r.shift())
                                } catch (K) {
                                    c(K)
                                }
                            if (i = s.$$watchers)
                                for (n = i.length; n--; )
                                    try {
                                        if (a = i[n],
                                        (d = a.get(s)) !== (e = a.last) && !(a.eq ? ha(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e)))
                                            m = !0,
                                            a.last = a.eq ? V(d) : d,
                                            a.fn(d, e === f ? d : e, s),
                                            q < 5 && (C = 4 - q,
                                            p[C] || (p[C] = []),
                                            A = N(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            A += "; newVal: " + da(d) + "; oldVal: " + da(e),
                                            p[C].push(A))
                                    } catch (W) {
                                        c(W)
                                    }
                            if (!(i = s.$$childHead || s !== this && s.$$nextSibling))
                                for (; s !== this && !(i = s.$$nextSibling); )
                                    s = s.$parent
                        } while (s = i);
                        if (m && !q--)
                            throw h.$$phase = null,
                            B(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(p));
                    } while (m || r.length);
                    h.$$phase = null
                },
                $destroy: function() {
                    if (!(h == this || this.$$destroyed)) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (a.$$childHead == this)
                            a.$$childHead = this.$$nextSibling;
                        if (a.$$childTail == this)
                            a.$$childTail = this.$$prevSibling;
                        if (this.$$prevSibling)
                            this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                        if (this.$$nextSibling)
                            this.$$nextSibling.$$prevSibling = this.$$prevSibling;
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
                        h.$$phase = null;
                        try {
                            h.$digest()
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
                        c[za(c, b)] = null
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
                    }, i = [h].concat(ia.call(arguments, 1)), m, p;
                    do {
                        e = f.$$listeners[a] || d;
                        h.currentScope = f;
                        m = 0;
                        for (p = e.length; m < p; m++)
                            if (e[m])
                                try {
                                    if (e[m].apply(null, i),
                                    g)
                                        return h
                                } catch (C) {
                                    c(C)
                                }
                            else
                                e.splice(m, 1),
                                m--,
                                p--;
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
                    }, g = [f].concat(ia.call(arguments, 1)), h, i;
                    do {
                        d = e;
                        f.currentScope = d;
                        e = d.$$listeners[a] || [];
                        h = 0;
                        for (i = e.length; h < i; h++)
                            if (e[h])
                                try {
                                    e[h].apply(null, g)
                                } catch (m) {
                                    c(m)
                                }
                            else
                                e.splice(h, 1),
                                h--,
                                i--;
                        if (!(e = d.$$childHead || d !== this && d.$$nextSibling))
                            for (; d !== this && !(e = d.$$nextSibling); )
                                d = d.$parent
                    } while (d = e);
                    return f
                }
            };
            var h = new e;
            return h
        }
        ]
    }
    function Tc() {
        this.$get = ["$window", function(b) {
            var a = {}
              , c = G((/android (\d+)/.exec(E(b.navigator.userAgent)) || [])[1]);
            return {
                history: !(!b.history || !b.history.pushState || c < 4),
                hashchange: "onhashchange"in b && (!b.document.documentMode || b.document.documentMode > 7),
                hasEvent: function(c) {
                    if (c == "input" && aa == 9)
                        return !1;
                    if (t(a[c])) {
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
    function Uc() {
        this.$get = I(U)
    }
    function Mb(b) {
        var a = {}, c, d, e;
        if (!b)
            return a;
        m(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = E(R(b.substr(0, e)));
            d = R(b.substr(e + 1));
            c && (a[c] ? a[c] += ", " + d : a[c] = d)
        });
        return a
    }
    function Nb(b) {
        var a = L(b) ? b : p;
        return function(c) {
            a || (a = Mb(b));
            return c ? a[E(c)] || null : a
        }
    }
    function Ob(b, a, c) {
        if (N(c))
            return c(b, a);
        m(c, function(c) {
            b = c(b, a)
        });
        return b
    }
    function Vc() {
        var b = /^\s*(\[|\{[^\{])/
          , a = /[\}\]]\s*$/
          , c = /^\)\]\}',?\n/
          , d = this.defaults = {
            transformResponse: [function(d) {
                F(d) && (d = d.replace(c, ""),
                b.test(d) && a.test(d) && (d = nb(d, !0)));
                return d
            }
            ],
            transformRequest: [function(a) {
                return L(a) && Sa.apply(a) !== "[object File]" ? da(a) : a
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
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, h, k, j) {
            function l(a) {
                function c(a) {
                    var b = x({}, a, {
                        data: Ob(a.data, a.headers, f)
                    });
                    return 200 <= a.status && a.status < 300 ? b : k.reject(b)
                }
                a.method = la(a.method);
                var e = a.transformRequest || d.transformRequest, f = a.transformResponse || d.transformResponse, h = d.headers, h = x({
                    "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                }, h.common, h[E(a.method)], a.headers), e = Ob(a.data, Nb(h), e), g;
                t(a.data) && delete h["Content-Type"];
                g = o(a, e, h);
                g = g.then(c, c);
                m(w, function(a) {
                    g = a(g)
                });
                g.success = function(b) {
                    g.then(function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return g
                }
                ;
                g.error = function(b) {
                    g.then(null, function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return g
                }
                ;
                return g
            }
            function o(b, c, d) {
                function e(a, b, c) {
                    m && (200 <= a && a < 300 ? m.put(w, [a, b, Mb(c)]) : m.remove(w));
                    f(b, a, c);
                    h.$apply()
                }
                function f(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && c < 300 ? j.resolve : j.reject)({
                        data: a,
                        status: c,
                        headers: Nb(d),
                        config: b
                    })
                }
                function i() {
                    var a = za(l.pendingRequests, b);
                    a !== -1 && l.pendingRequests.splice(a, 1)
                }
                var j = k.defer(), o = j.promise, m, p, w = r(b.url, b.params);
                l.pendingRequests.push(b);
                o.then(i, i);
                b.cache && b.method == "GET" && (m = L(b.cache) ? b.cache : n);
                if (m)
                    if (p = m.get(w))
                        if (p.then)
                            return p.then(i, i),
                            p;
                        else
                            J(p) ? f(p[1], p[0], V(p[2])) : f(p, 200, {});
                    else
                        m.put(w, o);
                p || a(b.method, w, c, e, d, b.timeout, b.withCredentials);
                return o
            }
            function r(a, b) {
                if (!b)
                    return a;
                var c = [];
                ec(b, function(a, b) {
                    a == null || a == p || (L(a) && (a = da(a)),
                    c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                });
                return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
            }
            var n = c("$http")
              , w = [];
            m(e, function(a) {
                w.push(F(a) ? j.get(a) : j.invoke(a))
            });
            l.pendingRequests = [];
            (function(a) {
                m(arguments, function(a) {
                    l[a] = function(b, c) {
                        return l(x(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }
            )("get", "delete", "head", "jsonp");
            (function(a) {
                m(arguments, function(a) {
                    l[a] = function(b, c, d) {
                        return l(x(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }
            )("post", "put");
            l.defaults = d;
            return l
        }
        ]
    }
    function Wc() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return Xc(b, Yc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
        }
        ]
    }
    function Xc(b, a, c, d, e, g) {
        function i(a, b) {
            var c = e.createElement("script")
              , d = function() {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            aa ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            }
            : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }
        return function(e, h, k, j, l, o, r) {
            function n(a, c, d, e) {
                c = (h.match(Fb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                a(c == 1223 ? 204 : c, d, e);
                b.$$completeOutstandingRequest(D)
            }
            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if (E(e) == "jsonp") {
                var p = "_" + (d.counter++).toString(36);
                d[p] = function(a) {
                    d[p].data = a
                }
                ;
                i(h.replace("JSON_CALLBACK", "angular.callbacks." + p), function() {
                    d[p].data ? n(j, 200, d[p].data) : n(j, -2);
                    delete d[p]
                })
            } else {
                var q = new a;
                q.open(e, h, !0);
                m(l, function(a, b) {
                    a && q.setRequestHeader(b, a)
                });
                var s;
                q.onreadystatechange = function() {
                    q.readyState == 4 && n(j, s || q.status, q.responseText, q.getAllResponseHeaders())
                }
                ;
                if (r)
                    q.withCredentials = !0;
                q.send(k || "");
                o > 0 && c(function() {
                    s = -1;
                    q.abort()
                }, o)
            }
        }
    }
    function Zc() {
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
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return b === 1 ? "one" : "other"
                }
            }
        }
    }
    function $c() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, f, h) {
                var k = c.defer()
                  , j = k.promise
                  , l = v(h) && !h
                  , f = a.defer(function() {
                    try {
                        k.resolve(e())
                    } catch (a) {
                        k.reject(a),
                        d(a)
                    }
                    l || b.$apply()
                }, f)
                  , h = function() {
                    delete g[j.$$timeoutId]
                };
                j.$$timeoutId = f;
                g[f] = k;
                j.then(h, h);
                return j
            }
            var g = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"),
                a.defer.cancel(b.$$timeoutId)) : !1
            }
            ;
            return e
        }
        ]
    }
    function Pb(b) {
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
        a("currency", Qb);
        a("date", Rb);
        a("filter", ad);
        a("json", bd);
        a("limitTo", cd);
        a("lowercase", dd);
        a("number", Sb);
        a("orderBy", Tb);
        a("uppercase", ed)
    }
    function ad() {
        return function(b, a) {
            if (!(b instanceof Array))
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
                if (b.charAt(0) === "!")
                    return !d(a, b.substr(1));
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    return ("" + a).toLowerCase().indexOf(b) > -1;
                case "object":
                    for (var c in a)
                        if (c.charAt(0) !== "$" && d(a[c], b))
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
                    e == "$" ? function() {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function(a) {
                            return d(a, b)
                        })
                    }() : function() {
                        var b = e
                          , f = ("" + a[e]).toLowerCase();
                        f && c.push(function(a) {
                            return d(fb(a, b), f)
                        })
                    }();
                break;
            case "function":
                c.push(a);
                break;
            default:
                return b
            }
            for (var g = [], i = 0; i < b.length; i++) {
                var f = b[i];
                c.check(f) && g.push(f)
            }
            return g
        }
    }
    function Qb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            if (t(d))
                d = a.CURRENCY_SYM;
            return Ub(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }
    function Sb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Ub(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }
    function Ub(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))
            return "";
        var g = b < 0
          , b = Math.abs(b)
          , i = b + ""
          , f = ""
          , h = []
          , k = !1;
        if (i.indexOf("e") !== -1) {
            var j = i.match(/([\d\.]+)e(-?)(\d+)/);
            j && j[2] == "-" && j[3] > e + 1 ? i = "0" : (f = i,
            k = !0)
        }
        if (!k) {
            i = (i.split(Vb)[1] || "").length;
            t(e) && (e = Math.min(Math.max(a.minFrac, i), a.maxFrac));
            var i = Math.pow(10, e)
              , b = Math.round(b * i) / i
              , b = ("" + b).split(Vb)
              , i = b[0]
              , b = b[1] || ""
              , k = 0
              , j = a.lgSize
              , l = a.gSize;
            if (i.length >= j + l)
                for (var k = i.length - j, o = 0; o < k; o++)
                    (k - o) % l === 0 && o !== 0 && (f += c),
                    f += i.charAt(o);
            for (o = k; o < i.length; o++)
                (i.length - o) % j === 0 && o !== 0 && (f += c),
                f += i.charAt(o);
            for (; b.length < e; )
                b += "0";
            e && (f += d + b.substr(0, e))
        }
        h.push(g ? a.negPre : a.posPre);
        h.push(f);
        h.push(g ? a.negSuf : a.posSuf);
        return h.join("")
    }
    function ib(b, a, c) {
        var d = "";
        b < 0 && (d = "-",
        b = -b);
        for (b = "" + b; b.length < a; )
            b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }
    function P(b, a, c, d) {
        return function(e) {
            e = e["get" + b]();
            if (c > 0 || e > -c)
                e += c;
            e === 0 && c == -12 && (e = 12);
            return ib(e, a, d)
        }
    }
    function La(b, a) {
        return function(c, d) {
            var e = c["get" + b]()
              , g = la(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }
    function Rb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                var a = new Date(0)
                  , g = 0
                  , i = 0;
                b[9] && (g = G(b[9] + b[10]),
                i = G(b[9] + b[11]));
                a.setUTCFullYear(G(b[1]), G(b[2]) - 1, G(b[3]));
                a.setUTCHours(G(b[4] || 0) - g, G(b[5] || 0) - i, G(b[6] || 0), G(b[7] || 0))
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var g = "", i = [], f, h, e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e;
            F(c) && (c = fd.test(c) ? G(c) : a(c));
            wa(c) && (c = new Date(c));
            if (!na(c))
                return c;
            for (; e; )
                (h = gd.exec(e)) ? (i = i.concat(ia.call(h, 1)),
                e = i.pop()) : (i.push(e),
                e = null);
            m(i, function(a) {
                f = hd[a];
                g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }
    function bd() {
        return function(b) {
            return da(b, !0)
        }
    }
    function cd() {
        return function(b, a) {
            if (!(b instanceof Array))
                return b;
            var a = G(a), c = [], d, e;
            if (!b || !(b instanceof Array))
                return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            a > 0 ? (d = 0,
            e = a) : (d = b.length + a,
            e = b.length);
            for (; d < e; d++)
                c.push(b[d]);
            return c
        }
    }
    function Tb(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Wa(b) ? function(b, c) {
                    return a(c, b)
                }
                : a
            }
            if (!(a instanceof Array))
                return a;
            if (!c)
                return a;
            for (var c = J(c) ? c : [c], c = Ta(c, function(a) {
                var c = !1
                  , d = a || ma;
                if (F(a)) {
                    if (a.charAt(0) == "+" || a.charAt(0) == "-")
                        c = a.charAt(0) == "-",
                        a = a.substring(1);
                    d = b(a)
                }
                return e(function(a, b) {
                    var c;
                    c = d(a);
                    var e = d(b)
                      , f = typeof c
                      , g = typeof e;
                    f == g ? (f == "string" && (c = c.toLowerCase()),
                    f == "string" && (e = e.toLowerCase()),
                    c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            }), g = [], i = 0; i < a.length; i++)
                g.push(a[i]);
            return g.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0)
                        return e
                }
                return 0
            }, d))
        }
    }
    function S(b) {
        N(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return I(b)
    }
    function Wb(b, a) {
        function c(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            b.removeClass((a ? Ma : Na) + c).addClass((a ? Na : Ma) + c)
        }
        var d = this
          , e = b.parent().controller("form") || Oa
          , g = 0
          , i = d.$error = {};
        d.$name = a.name;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Pa);
        c(!0);
        d.$addControl = function(a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        }
        ;
        d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            m(i, function(b, c) {
                d.$setValidity(c, !0, a)
            })
        }
        ;
        d.$setValidity = function(a, b, k) {
            var j = i[a];
            if (b) {
                if (j && (Ua(j, k),
                !j.length)) {
                    g--;
                    if (!g)
                        c(b),
                        d.$valid = !0,
                        d.$invalid = !1;
                    i[a] = !1;
                    c(!0, a);
                    e.$setValidity(a, !0, d)
                }
            } else {
                g || c(b);
                if (j) {
                    if (za(j, k) != -1)
                        return
                } else
                    i[a] = j = [],
                    g++,
                    c(!1, a),
                    e.$setValidity(a, !1, d);
                j.push(k);
                d.$valid = !1;
                d.$invalid = !0
            }
        }
        ;
        d.$setDirty = function() {
            b.removeClass(Pa).addClass(Xb);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }
    function T(b) {
        return t(b) || b === "" || b === null || b !== b
    }
    function Qa(b, a, c, d, e, g) {
        var i = function() {
            var c = R(a.val());
            d.$viewValue !== c && b.$apply(function() {
                d.$setViewValue(c)
            })
        };
        if (e.hasEvent("input"))
            a.bind("input", i);
        else {
            var f;
            a.bind("keydown", function(a) {
                a = a.keyCode;
                a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || f || (f = g.defer(function() {
                    i();
                    f = null
                }))
            });
            a.bind("change", i)
        }
        d.$render = function() {
            a.val(T(d.$viewValue) ? "" : d.$viewValue)
        }
        ;
        var h = c.ngPattern
          , k = function(a, b) {
            return T(b) || a.test(b) ? (d.$setValidity("pattern", !0),
            b) : (d.$setValidity("pattern", !1),
            p)
        };
        h && (h.match(/^\/(.*)\/$/) ? (h = RegExp(h.substr(1, h.length - 2)),
        e = function(a) {
            return k(h, a)
        }
        ) : e = function(a) {
            var c = b.$eval(h);
            if (!c || !c.test)
                throw new B("Expected " + h + " to be a RegExp but was " + c);
            return k(c, a)
        }
        ,
        d.$formatters.push(e),
        d.$parsers.push(e));
        if (c.ngMinlength) {
            var j = G(c.ngMinlength)
              , e = function(a) {
                return !T(a) && a.length < j ? (d.$setValidity("minlength", !1),
                p) : (d.$setValidity("minlength", !0),
                a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var l = G(c.ngMaxlength)
              , c = function(a) {
                return !T(a) && a.length > l ? (d.$setValidity("maxlength", !1),
                p) : (d.$setValidity("maxlength", !0),
                a)
            };
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }
    function jb(b, a) {
        b = "ngClass" + b;
        return S(function(c, d, e) {
            function g(b, d) {
                if (a === !0 || c.$index % 2 === a)
                    d && b !== d && i(d),
                    f(b)
            }
            function i(a) {
                L(a) && !J(a) && (a = Ta(a, function(a, b) {
                    if (a)
                        return b
                }));
                d.removeClass(J(a) ? a.join(" ") : a)
            }
            function f(a) {
                L(a) && !J(a) && (a = Ta(a, function(a, b) {
                    if (a)
                        return b
                }));
                a && d.addClass(J(a) ? a.join(" ") : a)
            }
            c.$watch(e[b], g, !0);
            e.$observe("class", function() {
                var a = c.$eval(e[b]);
                g(a, a)
            });
            b !== "ngClass" && c.$watch("$index", function(d, g) {
                var j = d % 2;
                j !== g % 2 && (j == a ? f(c.$eval(e[b])) : i(c.$eval(e[b])))
            })
        })
    }
    var E = function(b) {
        return F(b) ? b.toLowerCase() : b
    }, la = function(b) {
        return F(b) ? b.toUpperCase() : b
    }, B = U.Error, aa = G((/msie (\d+)/.exec(E(navigator.userAgent)) || [])[1]), u, ja, ia = [].slice, Ra = [].push, Sa = Object.prototype.toString, Yb = U.angular || (U.angular = {}), ta, Cb, Z = ["0", "0", "0"];
    D.$inject = [];
    ma.$inject = [];
    Cb = aa < 9 ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && b.scopeName != "HTML" ? la(b.scopeName + ":" + b.nodeName) : b.nodeName
    }
    : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    }
    ;
    var kc = /[A-Z]/g
      , id = {
        full: "1.0.4-cec17a7f",
        major: 1,
        minor: 0,
        dot: 4,
        codeName: "bewildering-hair"
    }
      , Ba = Q.cache = {}
      , Aa = Q.expando = "ng-" + (new Date).getTime()
      , oc = 1
      , Zb = U.document.addEventListener ? function(b, a, c) {
        b.addEventListener(a, c, !1)
    }
    : function(b, a, c) {
        b.attachEvent("on" + a, c)
    }
      , db = U.document.removeEventListener ? function(b, a, c) {
        b.removeEventListener(a, c, !1)
    }
    : function(b, a, c) {
        b.detachEvent("on" + a, c)
    }
      , mc = /([\:\-\_]+(.))/g
      , nc = /^moz([A-Z])/
      , ua = Q.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0,
                b())
            }
            var c = !1;
            this.bind("DOMContentLoaded", a);
            Q(U).bind("load", a)
        },
        toString: function() {
            var b = [];
            m(this, function(a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        },
        eq: function(b) {
            return b >= 0 ? u(this[b]) : u(this[this.length + b])
        },
        length: 0,
        push: Ra,
        sort: [].sort,
        splice: [].splice
    }
      , Ea = {};
    m("multiple,selected,checked,disabled,readOnly,required".split(","), function(b) {
        Ea[E(b)] = b
    });
    var zb = {};
    m("input,select,option,textarea,button,form".split(","), function(b) {
        zb[la(b)] = !0
    });
    m({
        data: ub,
        inheritedData: Da,
        scope: function(b) {
            return Da(b, "$scope")
        },
        controller: xb,
        injector: function(b) {
            return Da(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Ca,
        css: function(b, a, c) {
            a = rb(a);
            if (v(c))
                b.style[a] = c;
            else {
                var d;
                aa <= 8 && (d = b.currentStyle && b.currentStyle[a],
                d === "" && (d = "auto"));
                d = d || b.style[a];
                aa <= 8 && (d = d === "" ? p : d);
                return d
            }
        },
        attr: function(b, a, c) {
            var d = E(a);
            if (Ea[d])
                if (v(c))
                    c ? (b[a] = !0,
                    b.setAttribute(a, d)) : (b[a] = !1,
                    b.removeAttribute(d));
                else
                    return b[a] || (b.attributes.getNamedItem(a) || D).specified ? d : p;
            else if (v(c))
                b.setAttribute(a, c);
            else if (b.getAttribute)
                return b = b.getAttribute(a, 2),
                b === null ? p : b
        },
        prop: function(b, a, c) {
            if (v(c))
                b[a] = c;
            else
                return b[a]
        },
        text: x(aa < 9 ? function(b, a) {
            if (b.nodeType == 1) {
                if (t(a))
                    return b.innerText;
                b.innerText = a
            } else {
                if (t(a))
                    return b.nodeValue;
                b.nodeValue = a
            }
        }
        : function(b, a) {
            if (t(a))
                return b.textContent;
            b.textContent = a
        }
        , {
            $dv: ""
        }),
        val: function(b, a) {
            if (t(a))
                return b.value;
            b.value = a
        },
        html: function(b, a) {
            if (t(a))
                return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++)
                sa(d[c]);
            b.innerHTML = a
        }
    }, function(b, a) {
        Q.prototype[a] = function(a, d) {
            var e, g;
            if ((b.length == 2 && b !== Ca && b !== xb ? a : d) === p)
                if (L(a)) {
                    for (e = 0; e < this.length; e++)
                        if (b === ub)
                            b(this[e], a);
                        else
                            for (g in a)
                                b(this[e], g, a[g]);
                    return this
                } else {
                    if (this.length)
                        return b(this[0], a, d)
                }
            else {
                for (e = 0; e < this.length; e++)
                    b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    m({
        removeData: sb,
        dealoc: sa,
        bind: function a(c, d, e) {
            var g = $(c, "events")
              , i = $(c, "handle");
            g || $(c, "events", g = {});
            i || $(c, "handle", i = pc(c, g));
            m(d.split(" "), function(d) {
                var h = g[d];
                if (!h) {
                    if (d == "mouseenter" || d == "mouseleave") {
                        var k = 0;
                        g.mouseenter = [];
                        g.mouseleave = [];
                        a(c, "mouseover", function(a) {
                            k++;
                            k == 1 && i(a, "mouseenter")
                        });
                        a(c, "mouseout", function(a) {
                            k--;
                            k == 0 && i(a, "mouseleave")
                        })
                    } else
                        Zb(c, d, i),
                        g[d] = [];
                    h = g[d]
                }
                h.push(e)
            })
        },
        unbind: tb,
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            sa(a);
            m(new Q(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            m(a.childNodes, function(a) {
                a.nodeName != "#text" && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.childNodes
        },
        append: function(a, c) {
            m(new Q(c), function(c) {
                a.nodeType === 1 && a.appendChild(c)
            })
        },
        prepend: function(a, c) {
            if (a.nodeType === 1) {
                var d = a.firstChild;
                m(new Q(c), function(c) {
                    d ? a.insertBefore(c, d) : (a.appendChild(c),
                    d = c)
                })
            }
        },
        wrap: function(a, c) {
            var c = u(c)[0]
              , d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function(a) {
            sa(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function(a, c) {
            var d = a
              , e = a.parentNode;
            m(new Q(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: wb,
        removeClass: vb,
        toggleClass: function(a, c, d) {
            t(d) && (d = !Ca(a, c));
            (d ? wb : vb)(a, c)
        },
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        next: function(a) {
            return a.nextSibling
        },
        find: function(a, c) {
            return a.getElementsByTagName(c)
        },
        clone: cb,
        triggerHandler: function(a, c) {
            var d = ($(a, "events") || {})[c];
            m(d, function(c) {
                c.call(a, null)
            })
        }
    }, function(a, c) {
        Q.prototype[c] = function(c, e) {
            for (var g, i = 0; i < this.length; i++)
                g == p ? (g = a(this[i], c, e),
                g !== p && (g = u(g))) : bb(g, a(this[i], c, e));
            return g == p ? this : g
        }
    });
    Fa.prototype = {
        put: function(a, c) {
            this[ga(a)] = c
        },
        get: function(a) {
            return this[ga(a)]
        },
        remove: function(a) {
            var c = this[a = ga(a)];
            delete this[a];
            return c
        }
    };
    eb.prototype = {
        push: function(a, c) {
            var d = this[a = ga(a)];
            d ? d.push(c) : this[a] = [c]
        },
        shift: function(a) {
            var c = this[a = ga(a)];
            if (c)
                return c.length == 1 ? (delete this[a],
                c[0]) : c.shift()
        },
        peek: function(a) {
            if (a = this[ga(a)])
                return a[0]
        }
    };
    var rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
      , sc = /,/
      , tc = /^\s*(_?)(\S+?)\1\s*$/
      , qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
      , Db = "Non-assignable model expression: ";
    Bb.$inject = ["$provide"];
    var Ac = /^(x[\:\-_]|data[\:\-_])/i
      , Fb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/
      , $b = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/
      , Hc = $b
      , Gb = {
        http: 80,
        https: 443,
        ftp: 21
    };
    gb.prototype = {
        $$replace: !1,
        absUrl: Ja("$$absUrl"),
        url: function(a, c) {
            if (t(a))
                return this.$$url;
            var d = $b.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            if (d[2] || d[1])
                this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        },
        protocol: Ja("$$protocol"),
        host: Ja("$$host"),
        port: Ja("$$port"),
        path: Ib("$$path", function(a) {
            return a.charAt(0) == "/" ? a : "/" + a
        }),
        search: function(a, c) {
            if (t(a))
                return this.$$search;
            v(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = F(a) ? Xa(a) : a;
            this.$$compose();
            return this
        },
        hash: Ib("$$hash", ma),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    Ia.prototype = ya(gb.prototype);
    Hb.prototype = ya(Ia.prototype);
    var Ka = {
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: D,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return v(d) ? v(e) ? d + e : d : v(e) ? e : p
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (v(d) ? d : 0) - (v(e) ? e : 0)
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
        "=": D,
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
      , Lc = {
        n: "\n",
        f: "\u000c",
        r: "\r",
        t: "\t",
        v: "\u000b",
        "'": "'",
        '"': '"'
    }
      , hb = {}
      , Yc = U.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {}
        throw new B("This browser does not support XMLHttpRequest.");
    }
    ;
    Pb.$inject = ["$provide"];
    Qb.$inject = ["$locale"];
    Sb.$inject = ["$locale"];
    var Vb = "."
      , hd = {
        yyyy: P("FullYear", 4),
        yy: P("FullYear", 2, 0, !0),
        y: P("FullYear", 1),
        MMMM: La("Month"),
        MMM: La("Month", !0),
        MM: P("Month", 2, 1),
        M: P("Month", 1, 1),
        dd: P("Date", 2),
        d: P("Date", 1),
        HH: P("Hours", 2),
        H: P("Hours", 1),
        hh: P("Hours", 2, -12),
        h: P("Hours", 1, -12),
        mm: P("Minutes", 2),
        m: P("Minutes", 1),
        ss: P("Seconds", 2),
        s: P("Seconds", 1),
        EEEE: La("Day"),
        EEE: La("Day", !0),
        a: function(a, c) {
            return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function(a) {
            a = a.getTimezoneOffset();
            return ib(a / 60, 2) + ib(Math.abs(a % 60), 2)
        }
    }
      , gd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
      , fd = /^\d+$/;
    Rb.$inject = ["$locale"];
    var dd = I(E)
      , ed = I(la);
    Tb.$inject = ["$parse"];
    var jd = I({
        restrict: "E",
        compile: function(a, c) {
            c.href || c.$set("href", "");
            return function(a, c) {
                c.bind("click", function(a) {
                    if (!c.attr("href"))
                        return a.preventDefault(),
                        !1
                })
            }
        }
    })
      , kb = {};
    m(Ea, function(a, c) {
        var d = fa("ng-" + c);
        kb[d] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(a, g, i) {
                        a.$watch(i[d], function(a) {
                            i.$set(c, !!a)
                        })
                    }
                }
            }
        }
    });
    m(["src", "href"], function(a) {
        var c = fa("ng-" + a);
        kb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, g) {
                    g.$observe(c, function(c) {
                        c && (g.$set(a, c),
                        aa && e.prop(a, c))
                    })
                }
            }
        }
    });
    var Oa = {
        $addControl: D,
        $removeControl: D,
        $setValidity: D,
        $setDirty: D
    };
    Wb.$inject = ["$element", "$attrs", "$scope"];
    var Ra = function(a) {
        return ["$timeout", function(c) {
            var d = {
                name: "form",
                restrict: "E",
                controller: Wb,
                compile: function() {
                    return {
                        pre: function(a, d, i, f) {
                            if (!i.action) {
                                var h = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                Zb(d[0], "submit", h);
                                d.bind("$destroy", function() {
                                    c(function() {
                                        db(d[0], "submit", h)
                                    }, 0, !1)
                                })
                            }
                            var k = d.parent().controller("form")
                              , j = i.name || i.ngForm;
                            j && (a[j] = f);
                            k && d.bind("$destroy", function() {
                                k.$removeControl(f);
                                j && (a[j] = p);
                                x(f, Oa)
                            })
                        }
                    }
                }
            };
            return a ? x(V(d), {
                restrict: "EAC"
            }) : d
        }
        ]
    }
      , kd = Ra()
      , ld = Ra(!0)
      , md = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
      , nd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
      , od = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/
      , ac = {
        text: Qa,
        number: function(a, c, d, e, g, i) {
            Qa(a, c, d, e, g, i);
            e.$parsers.push(function(a) {
                var c = T(a);
                return c || od.test(a) ? (e.$setValidity("number", !0),
                a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1),
                p)
            });
            e.$formatters.push(function(a) {
                return T(a) ? "" : "" + a
            });
            if (d.min) {
                var f = parseFloat(d.min)
                  , a = function(a) {
                    return !T(a) && a < f ? (e.$setValidity("min", !1),
                    p) : (e.$setValidity("min", !0),
                    a)
                };
                e.$parsers.push(a);
                e.$formatters.push(a)
            }
            if (d.max) {
                var h = parseFloat(d.max)
                  , d = function(a) {
                    return !T(a) && a > h ? (e.$setValidity("max", !1),
                    p) : (e.$setValidity("max", !0),
                    a)
                };
                e.$parsers.push(d);
                e.$formatters.push(d)
            }
            e.$formatters.push(function(a) {
                return T(a) || wa(a) ? (e.$setValidity("number", !0),
                a) : (e.$setValidity("number", !1),
                p)
            })
        },
        url: function(a, c, d, e, g, i) {
            Qa(a, c, d, e, g, i);
            a = function(a) {
                return T(a) || md.test(a) ? (e.$setValidity("url", !0),
                a) : (e.$setValidity("url", !1),
                p)
            }
            ;
            e.$formatters.push(a);
            e.$parsers.push(a)
        },
        email: function(a, c, d, e, g, i) {
            Qa(a, c, d, e, g, i);
            a = function(a) {
                return T(a) || nd.test(a) ? (e.$setValidity("email", !0),
                a) : (e.$setValidity("email", !1),
                p)
            }
            ;
            e.$formatters.push(a);
            e.$parsers.push(a)
        },
        radio: function(a, c, d, e) {
            t(d.name) && c.attr("name", xa());
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
              , i = d.ngFalseValue;
            F(g) || (g = !0);
            F(i) || (i = !1);
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
                return a ? g : i
            })
        },
        hidden: D,
        button: D,
        submit: D,
        reset: D
    }
      , bc = ["$browser", "$sniffer", function(a, c) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(d, e, g, i) {
                i && (ac[E(g.type)] || ac.text)(d, e, g, i, c, a)
            }
        }
    }
    ]
      , Na = "ng-valid"
      , Ma = "ng-invalid"
      , Pa = "ng-pristine"
      , Xb = "ng-dirty"
      , pd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, c, d, e, g) {
        function i(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            e.removeClass((a ? Ma : Na) + c).addClass((a ? Na : Ma) + c)
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
          , h = f.assign;
        if (!h)
            throw B(Db + d.ngModel + " (" + pa(e) + ")");
        this.$render = D;
        var k = e.inheritedData("$formController") || Oa
          , j = 0
          , l = this.$error = {};
        e.addClass(Pa);
        i(!0);
        this.$setValidity = function(a, c) {
            if (l[a] !== !c) {
                if (c) {
                    if (l[a] && j--,
                    !j)
                        i(!0),
                        this.$valid = !0,
                        this.$invalid = !1
                } else
                    i(!1),
                    this.$invalid = !0,
                    this.$valid = !1,
                    j++;
                l[a] = !c;
                i(c, a);
                k.$setValidity(a, c, this)
            }
        }
        ;
        this.$setViewValue = function(d) {
            this.$viewValue = d;
            if (this.$pristine)
                this.$dirty = !0,
                this.$pristine = !1,
                e.removeClass(Pa).addClass(Xb),
                k.$setDirty();
            m(this.$parsers, function(a) {
                d = a(d)
            });
            if (this.$modelValue !== d)
                this.$modelValue = d,
                h(a, d),
                m(this.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
        }
        ;
        var o = this;
        a.$watch(function() {
            var c = f(a);
            if (o.$modelValue !== c) {
                var d = o.$formatters
                  , e = d.length;
                for (o.$modelValue = c; e--; )
                    c = d[e](c);
                if (o.$viewValue !== c)
                    o.$viewValue = c,
                    o.$render()
            }
        })
    }
    ]
      , qd = function() {
        return {
            require: ["ngModel", "^?form"],
            controller: pd,
            link: function(a, c, d, e) {
                var g = e[0]
                  , i = e[1] || Oa;
                i.$addControl(g);
                c.bind("$destroy", function() {
                    i.$removeControl(g)
                })
            }
        }
    }
      , rd = I({
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange)
            })
        }
    })
      , cc = function() {
        return {
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var g = function(a) {
                        if (d.required && (T(a) || a === !1))
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
      , sd = function() {
        return {
            require: "ngModel",
            link: function(a, c, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    var c = [];
                    a && m(a.split(g), function(a) {
                        a && c.push(R(a))
                    });
                    return c
                });
                e.$formatters.push(function(a) {
                    return J(a) ? a.join(", ") : p
                })
            }
        }
    }
      , td = /^(true|false|\d+)$/
      , ud = function() {
        return {
            priority: 100,
            compile: function(a, c) {
                return td.test(c.ngValue) ? function(a, c, g) {
                    g.$set("value", a.$eval(g.ngValue))
                }
                : function(a, c, g) {
                    a.$watch(g.ngValue, function(a) {
                        g.$set("value", a, !1)
                    })
                }
            }
        }
    }
      , vd = S(function(a, c, d) {
        c.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function(a) {
            c.text(a == p ? "" : a)
        })
    })
      , wd = ["$interpolate", function(a) {
        return function(c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function(a) {
                d.text(a)
            })
        }
    }
    ]
      , xd = [function() {
        return function(a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
            a.$watch(d.ngBindHtmlUnsafe, function(a) {
                c.html(a || "")
            })
        }
    }
    ]
      , yd = jb("", !0)
      , zd = jb("Odd", 0)
      , Ad = jb("Even", 1)
      , Bd = S({
        compile: function(a, c) {
            c.$set("ngCloak", p);
            a.removeClass("ng-cloak")
        }
    })
      , Cd = [function() {
        return {
            scope: !0,
            controller: "@"
        }
    }
    ]
      , Dd = ["$sniffer", function(a) {
        return {
            priority: 1E3,
            compile: function() {
                a.csp = !0
            }
        }
    }
    ]
      , dc = {};
    m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function(a) {
        var c = fa("ng-" + a);
        dc[c] = ["$parse", function(d) {
            return function(e, g, i) {
                var f = d(i[c]);
                g.bind(E(a), function(a) {
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
    var Ed = S(function(a, c, d) {
        c.bind("submit", function() {
            a.$apply(d.ngSubmit)
        })
    })
      , Fd = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, c, d, e) {
        return {
            restrict: "ECA",
            terminal: !0,
            compile: function(g, i) {
                var f = i.ngInclude || i.src
                  , h = i.onload || ""
                  , k = i.autoscroll;
                return function(g, i) {
                    var o = 0, m, n = function() {
                        m && (m.$destroy(),
                        m = null);
                        i.html("")
                    };
                    g.$watch(f, function(f) {
                        var p = ++o;
                        f ? a.get(f, {
                            cache: c
                        }).success(function(a) {
                            p === o && (m && m.$destroy(),
                            m = g.$new(),
                            i.html(a),
                            e(i.contents())(m),
                            v(k) && (!k || g.$eval(k)) && d(),
                            m.$emit("$includeContentLoaded"),
                            g.$eval(h))
                        }).error(function() {
                            p === o && n()
                        }) : n()
                    })
                }
            }
        }
    }
    ]
      , Gd = S({
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit)
                }
            }
        }
    })
      , Hd = S({
        terminal: !0,
        priority: 1E3
    })
      , Id = ["$locale", "$interpolate", function(a, c) {
        var d = /{}/g;
        return {
            restrict: "EA",
            link: function(e, g, i) {
                var f = i.count
                  , h = g.attr(i.$attr.when)
                  , k = i.offset || 0
                  , j = e.$eval(h)
                  , l = {}
                  , o = c.startSymbol()
                  , r = c.endSymbol();
                m(j, function(a, e) {
                    l[e] = c(a.replace(d, o + f + "-" + k + r))
                });
                e.$watch(function() {
                    var c = parseFloat(e.$eval(f));
                    return isNaN(c) ? "" : (j[c] || (c = a.pluralCat(c - k)),
                    l[c](e, g, !0))
                }, function(a) {
                    g.text(a)
                })
            }
        }
    }
    ]
      , Jd = S({
        transclude: "element",
        priority: 1E3,
        terminal: !0,
        compile: function(a, c, d) {
            return function(a, c, i) {
                var f = i.ngRepeat, i = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/), h, k, j;
                if (!i)
                    throw B("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
                f = i[1];
                h = i[2];
                i = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!i)
                    throw B("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
                k = i[3] || i[1];
                j = i[2];
                var l = new eb;
                a.$watch(function(a) {
                    var e, f, i = a.$eval(h), m = gc(i, !0), p, u = new eb, C, A, v, t, y = c;
                    if (J(i))
                        v = i || [];
                    else {
                        v = [];
                        for (C in i)
                            i.hasOwnProperty(C) && C.charAt(0) != "$" && v.push(C);
                        v.sort()
                    }
                    e = 0;
                    for (f = v.length; e < f; e++) {
                        C = i === v ? e : v[e];
                        A = i[C];
                        if (t = l.shift(A)) {
                            p = t.scope;
                            u.push(A, t);
                            if (e !== t.index)
                                t.index = e,
                                y.after(t.element);
                            y = t.element
                        } else
                            p = a.$new();
                        p[k] = A;
                        j && (p[j] = C);
                        p.$index = e;
                        p.$first = e === 0;
                        p.$last = e === m - 1;
                        p.$middle = !(p.$first || p.$last);
                        t || d(p, function(a) {
                            y.after(a);
                            t = {
                                scope: p,
                                element: y = a,
                                index: e
                            };
                            u.push(A, t)
                        })
                    }
                    for (C in l)
                        if (l.hasOwnProperty(C))
                            for (v = l[C]; v.length; )
                                A = v.pop(),
                                A.element.remove(),
                                A.scope.$destroy();
                    l = u
                })
            }
        }
    })
      , Kd = S(function(a, c, d) {
        a.$watch(d.ngShow, function(a) {
            c.css("display", Wa(a) ? "" : "none")
        })
    })
      , Ld = S(function(a, c, d) {
        a.$watch(d.ngHide, function(a) {
            c.css("display", Wa(a) ? "none" : "")
        })
    })
      , Md = S(function(a, c, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && m(d, function(a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    })
      , Nd = I({
        restrict: "EA",
        compile: function(a, c) {
            var d = c.ngSwitch || c.on
              , e = {};
            a.data("ng-switch", e);
            return function(a, i) {
                var f, h, k;
                a.$watch(d, function(d) {
                    h && (k.$destroy(),
                    h.remove(),
                    h = k = null);
                    if (f = e["!" + d] || e["?"])
                        a.$eval(c.change),
                        k = a.$new(),
                        f(k, function(a) {
                            h = a;
                            i.append(a)
                        })
                })
            }
        }
    })
      , Od = S({
        transclude: "element",
        priority: 500,
        compile: function(a, c, d) {
            a = a.inheritedData("ng-switch");
            qa(a);
            a["!" + c.ngSwitchWhen] = d
        }
    })
      , Pd = S({
        transclude: "element",
        priority: 500,
        compile: function(a, c, d) {
            a = a.inheritedData("ng-switch");
            qa(a);
            a["?"] = d
        }
    })
      , Qd = S({
        controller: ["$transclude", "$element", function(a, c) {
            a(function(a) {
                c.append(a)
            })
        }
        ]
    })
      , Rd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, c, d, e, g, i) {
        return {
            restrict: "ECA",
            terminal: !0,
            link: function(a, c, k) {
                function j() {
                    var j = d.current && d.current.locals
                      , k = j && j.$template;
                    if (k) {
                        c.html(k);
                        l && (l.$destroy(),
                        l = null);
                        var k = g(c.contents())
                          , p = d.current;
                        l = p.scope = a.$new();
                        if (p.controller)
                            j.$scope = l,
                            j = i(p.controller, j),
                            c.contents().data("$ngControllerController", j);
                        k(l);
                        l.$emit("$viewContentLoaded");
                        l.$eval(m);
                        e()
                    } else
                        c.html(""),
                        l && (l.$destroy(),
                        l = null)
                }
                var l, m = k.onload || "";
                a.$on("$routeChangeSuccess", j);
                j()
            }
        }
    }
    ]
      , Sd = ["$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                d.type == "text/ng-template" && a.put(d.id, c[0].text)
            }
        }
    }
    ]
      , Td = I({
        terminal: !0
    })
      , Ud = ["$compile", "$parse", function(a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/
          , e = {
            $setViewValue: D
        };
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                var h = this, k = {}, j = e, l;
                h.databound = d.ngModel;
                h.init = function(a, c, d) {
                    j = a;
                    l = d
                }
                ;
                h.addOption = function(c) {
                    k[c] = !0;
                    j.$viewValue == c && (a.val(c),
                    l.parent() && l.remove())
                }
                ;
                h.removeOption = function(a) {
                    this.hasOption(a) && (delete k[a],
                    j.$viewValue == a && this.renderUnknownOption(a))
                }
                ;
                h.renderUnknownOption = function(c) {
                    c = "? " + ga(c) + " ?";
                    l.val(c);
                    a.prepend(l);
                    a.val(c);
                    l.prop("selected", !0)
                }
                ;
                h.hasOption = function(a) {
                    return k.hasOwnProperty(a)
                }
                ;
                c.$on("$destroy", function() {
                    h.renderUnknownOption = D
                })
            }
            ],
            link: function(e, i, f, h) {
                function k(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (A.parent() && A.remove(),
                        c.val(a),
                        a === "" && s.prop("selected", !0)) : t(a) && s ? c.val("") : e.renderUnknownOption(a)
                    }
                    ;
                    c.bind("change", function() {
                        a.$apply(function() {
                            A.parent() && A.remove();
                            d.$setViewValue(c.val())
                        })
                    })
                }
                function j(a, c, d) {
                    var e;
                    d.$render = function() {
                        var a = new Fa(d.$viewValue);
                        m(c.children(), function(c) {
                            c.selected = v(a.get(c.value))
                        })
                    }
                    ;
                    a.$watch(function() {
                        ha(e, d.$viewValue) || (e = V(d.$viewValue),
                        d.$render())
                    });
                    c.bind("change", function() {
                        a.$apply(function() {
                            var a = [];
                            m(c.children(), function(c) {
                                c.selected && a.push(c.value)
                            });
                            d.$setViewValue(a)
                        })
                    })
                }
                function l(e, f, g) {
                    function h() {
                        var a = {
                            "": []
                        }, c = [""], d, i, s, t, u;
                        s = g.$modelValue;
                        t = r(e) || [];
                        var y = l ? lb(t) : t, A, w, x;
                        w = {};
                        u = !1;
                        var z, B;
                        if (n)
                            u = new Fa(s);
                        else if (s === null || q)
                            a[""].push({
                                selected: s === null,
                                id: "",
                                label: ""
                            }),
                            u = !0;
                        for (x = 0; A = y.length,
                        x < A; x++) {
                            w[k] = t[l ? w[l] = y[x] : x];
                            d = m(e, w) || "";
                            if (!(i = a[d]))
                                i = a[d] = [],
                                c.push(d);
                            n ? d = u.remove(o(e, w)) != p : (d = s === o(e, w),
                            u = u || d);
                            z = j(e, w);
                            z = z === p ? "" : z;
                            i.push({
                                id: l ? y[x] : x,
                                label: z,
                                selected: d
                            })
                        }
                        !n && !u && a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        });
                        w = 0;
                        for (y = c.length; w < y; w++) {
                            d = c[w];
                            i = a[d];
                            if (v.length <= w)
                                s = {
                                    element: C.clone().attr("label", d),
                                    label: i.label
                                },
                                t = [s],
                                v.push(t),
                                f.append(s.element);
                            else if (t = v[w],
                            s = t[0],
                            s.label != d)
                                s.element.attr("label", s.label = d);
                            z = null;
                            x = 0;
                            for (A = i.length; x < A; x++)
                                if (d = i[x],
                                u = t[x + 1]) {
                                    z = u.element;
                                    if (u.label !== d.label)
                                        z.text(u.label = d.label);
                                    if (u.id !== d.id)
                                        z.val(u.id = d.id);
                                    if (u.element.selected !== d.selected)
                                        z.prop("selected", u.selected = d.selected)
                                } else
                                    d.id === "" && q ? B = q : (B = D.clone()).val(d.id).attr("selected", d.selected).text(d.label),
                                    t.push({
                                        element: B,
                                        label: d.label,
                                        id: d.id,
                                        selected: d.selected
                                    }),
                                    z ? z.after(B) : s.element.append(B),
                                    z = B;
                            for (x++; t.length > x; )
                                t.pop().element.remove()
                        }
                        for (; v.length > w; )
                            v.pop()[0].element.remove()
                    }
                    var i;
                    if (!(i = w.match(d)))
                        throw B("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + w + "'.");
                    var j = c(i[2] || i[1])
                      , k = i[4] || i[6]
                      , l = i[5]
                      , m = c(i[3] || "")
                      , o = c(i[2] ? i[1] : k)
                      , r = c(i[7])
                      , v = [[{
                        element: f,
                        label: ""
                    }]];
                    q && (a(q)(e),
                    q.removeClass("ng-scope"),
                    q.remove());
                    f.html("");
                    f.bind("change", function() {
                        e.$apply(function() {
                            var a, c = r(e) || [], d = {}, h, i, j, m, q, s;
                            if (n) {
                                i = [];
                                m = 0;
                                for (s = v.length; m < s; m++) {
                                    a = v[m];
                                    j = 1;
                                    for (q = a.length; j < q; j++)
                                        if ((h = a[j].element)[0].selected)
                                            h = h.val(),
                                            l && (d[l] = h),
                                            d[k] = c[h],
                                            i.push(o(e, d))
                                }
                            } else
                                h = f.val(),
                                h == "?" ? i = p : h == "" ? i = null : (d[k] = c[h],
                                l && (d[l] = h),
                                i = o(e, d));
                            g.$setViewValue(i)
                        })
                    });
                    g.$render = h;
                    e.$watch(h)
                }
                if (h[1]) {
                    for (var o = h[0], r = h[1], n = f.multiple, w = f.ngOptions, q = !1, s, D = u(ca.createElement("option")), C = u(ca.createElement("optgroup")), A = D.clone(), h = 0, x = i.children(), E = x.length; h < E; h++)
                        if (x[h].value == "") {
                            s = q = x.eq(h);
                            break
                        }
                    o.init(r, q, A);
                    if (n && (f.required || f.ngRequired)) {
                        var y = function(a) {
                            r.$setValidity("required", !f.required || a && a.length);
                            return a
                        };
                        r.$parsers.push(y);
                        r.$formatters.unshift(y);
                        f.$observe("required", function() {
                            y(r.$viewValue)
                        })
                    }
                    w ? l(e, i, r) : n ? j(e, i, r) : k(e, i, r, o)
                }
            }
        }
    }
    ]
      , Vd = ["$interpolate", function(a) {
        var c = {
            addOption: D,
            removeOption: D
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (t(e.value)) {
                    var g = a(d.text(), !0);
                    g || e.$set("value", d.text())
                }
                return function(a, d, e) {
                    var k = d.parent()
                      , j = k.data("$selectController") || k.parent().data("$selectController");
                    j && j.databound ? d.prop("selected", !1) : j = c;
                    g ? a.$watch(g, function(a, c) {
                        e.$set("value", a);
                        a !== c && j.removeOption(c);
                        j.addOption(a)
                    }) : j.addOption(e.value);
                    d.bind("$destroy", function() {
                        j.removeOption(e.value)
                    })
                }
            }
        }
    }
    ]
      , Wd = I({
        restrict: "E",
        terminal: !0
    });
    (ja = U.jQuery) ? (u = ja,
    x(ja.fn, {
        scope: ua.scope,
        controller: ua.controller,
        injector: ua.injector,
        inheritedData: ua.inheritedData
    }),
    ab("remove", !0),
    ab("empty"),
    ab("html")) : u = Q;
    Yb.element = u;
    (function(a) {
        x(a, {
            bootstrap: pb,
            copy: V,
            extend: x,
            equals: ha,
            element: u,
            forEach: m,
            injector: qb,
            noop: D,
            bind: Va,
            toJson: da,
            fromJson: nb,
            identity: ma,
            isUndefined: t,
            isDefined: v,
            isString: F,
            isFunction: N,
            isObject: L,
            isNumber: wa,
            isElement: fc,
            isArray: J,
            version: id,
            isDate: na,
            lowercase: E,
            uppercase: la,
            callbacks: {
                counter: 0
            }
        });
        ta = lc(U);
        try {
            ta("ngLocale")
        } catch (c) {
            ta("ngLocale", []).provider("$locale", Zc)
        }
        ta("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider("$compile", Bb).directive({
                a: jd,
                input: bc,
                textarea: bc,
                form: kd,
                script: Sd,
                select: Ud,
                style: Wd,
                option: Vd,
                ngBind: vd,
                ngBindHtmlUnsafe: xd,
                ngBindTemplate: wd,
                ngClass: yd,
                ngClassEven: Ad,
                ngClassOdd: zd,
                ngCsp: Dd,
                ngCloak: Bd,
                ngController: Cd,
                ngForm: ld,
                ngHide: Ld,
                ngInclude: Fd,
                ngInit: Gd,
                ngNonBindable: Hd,
                ngPluralize: Id,
                ngRepeat: Jd,
                ngShow: Kd,
                ngSubmit: Ed,
                ngStyle: Md,
                ngSwitch: Nd,
                ngSwitchWhen: Od,
                ngSwitchDefault: Pd,
                ngOptions: Td,
                ngView: Rd,
                ngTransclude: Qd,
                ngModel: qd,
                ngList: sd,
                ngChange: rd,
                required: cc,
                ngRequired: cc,
                ngValue: ud
            }).directive(kb).directive(dc);
            a.provider({
                $anchorScroll: uc,
                $browser: wc,
                $cacheFactory: xc,
                $controller: Bc,
                $document: Cc,
                $exceptionHandler: Dc,
                $filter: Pb,
                $interpolate: Ec,
                $http: Vc,
                $httpBackend: Wc,
                $location: Ic,
                $log: Jc,
                $parse: Nc,
                $route: Qc,
                $routeParams: Rc,
                $rootScope: Sc,
                $q: Oc,
                $sniffer: Tc,
                $templateCache: yc,
                $timeout: $c,
                $window: Uc
            })
        }
        ])
    }
    )(Yb);
    u(ca).ready(function() {
        jc(ca, pb)
    })
}
)(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.0.3
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A, e, w) {
    'use strict';
    e.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse", function(x, y) {
        function k(a, f) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(f ? null : /%20/g, "+")
        }
        function t(a, f) {
            this.template = a += "#";
            this.defaults = f || {};
            var b = this.urlParams = {};
            l(a.split(/\W/), function(d) {
                d && a.match(RegExp("[^\\\\]:" + d + "\\W")) && (b[d] = !0)
            });
            this.template = a.replace(/\\:/g, ":")
        }
        function u(a, f, b) {
            function d(b, c) {
                var a = {}
                  , c = i({}, f, c);
                l(c, function(o, c) {
                    var d;
                    o.charAt && o.charAt(0) == "@" ? (d = o.substr(1),
                    d = y(d)(b)) : d = o;
                    a[c] = d
                });
                return a
            }
            function h(a) {
                v(a || {}, this)
            }
            var e = new t(a)
              , b = i({}, z, b);
            l(b, function(g, c) {
                var k = g.method == "POST" || g.method == "PUT" || g.method == "PATCH";
                h[c] = function(a, b, c, f) {
                    var s = {}, j, m = p, q = null;
                    switch (arguments.length) {
                    case 4:
                        q = f,
                        m = c;
                    case 3:
                    case 2:
                        if (r(b)) {
                            if (r(a)) {
                                m = a;
                                q = b;
                                break
                            }
                            m = b;
                            q = c
                        } else {
                            s = a;
                            j = b;
                            m = c;
                            break
                        }
                    case 1:
                        r(a) ? m = a : k ? j = a : s = a;
                        break;
                    case 0:
                        break;
                    default:
                        throw "Expected between 0-4 arguments [params, data, success, error], got " + arguments.length + " arguments.";
                    }
                    var n = this instanceof h ? this : g.isArray ? [] : new h(j);
                    x({
                        method: g.method,
                        url: e.url(i({}, d(j, g.params || {}), s)),
                        data: j
                    }).then(function(a) {
                        var b = a.data;
                        if (b)
                            g.isArray ? (n.length = 0,
                            l(b, function(a) {
                                n.push(new h(a))
                            })) : v(b, n);
                        (m || p)(n, a.headers)
                    }, q);
                    return n
                }
                ;
                h.bind = function(c) {
                    return u(a, i({}, f, c), b)
                }
                ;
                h.prototype["$" + c] = function(a, b, f) {
                    var g = d(this), e = p, j;
                    switch (arguments.length) {
                    case 3:
                        g = a;
                        e = b;
                        j = f;
                        break;
                    case 2:
                    case 1:
                        r(a) ? (e = a,
                        j = b) : (g = a,
                        e = b || p);
                    case 0:
                        break;
                    default:
                        throw "Expected between 1-3 arguments [params, success, error], got " + arguments.length + " arguments.";
                    }
                    h[c].call(this, g, k ? this : w, e, j)
                }
            });
            return h
        }
        var z = {
            get: {
                method: "GET"
            },
            save: {
                method: "POST"
            },
            query: {
                method: "GET",
                isArray: !0
            },
            remove: {
                method: "DELETE"
            },
            "delete": {
                method: "DELETE"
            }
        }
          , p = e.noop
          , l = e.forEach
          , i = e.extend
          , v = e.copy
          , r = e.isFunction;
        t.prototype = {
            url: function(a) {
                var f = this, b = this.template, d, h, a = a || {};
                l(this.urlParams, function(g, c) {
                    d = a.hasOwnProperty(c) ? a[c] : f.defaults[c];
                    e.isDefined(d) && d !== null ? (h = k(d, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"),
                    b = b.replace(RegExp(":" + c + "(\\W)", "g"), h + "$1")) : b = b.replace(RegExp("/?:" + c + "(\\W)", "g"), "$1")
                });
                var b = b.replace(/\/?#$/, "")
                  , i = [];
                l(a, function(a, b) {
                    f.urlParams[b] || i.push(k(b) + "=" + k(a))
                });
                i.sort();
                b = b.replace(/\/*$/, "");
                return b + (i.length ? "?" + i.join("&") : "")
            }
        };
        return u
    }
    ])
}
)(window, window.angular);

(function() {
    function d(a) {
        throw a;
    }
    var h = void 0, i = !0, j = null, k = !1, n, aa = aa || {}, p = this, t = function(a, b, c) {
        a = a.split(".");
        c = c || p;
        !(a[0]in c) && c.execScript && c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift()); )
            !a.length && q(b) ? c[e] = b : c = c[e] ? c[e] : c[e] = {}
    }, ba = function(a, b) {
        for (var c = a.split("."), e = b || p, f; f = c.shift(); )
            if (e[f] != j)
                e = e[f];
            else
                return j;
        return e
    }, v = function() {}, ca = function(a) {
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
    }, q = function(a) {
        return a !== h
    }, w = function(a) {
        return "array" == ca(a)
    }, da = function(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, y = function(a) {
        return "string" == typeof a
    }, ea = function(a) {
        return "number" == typeof a
    }, fa = function(a) {
        return "function" == ca(a)
    }, ga = function(a) {
        var b = typeof a;
        return "object" == b && a != j || "function" == b
    }, ja = function(a) {
        return a[ha] || (a[ha] = ++ia)
    }, ha = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ia = 0, ka = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, la = function(a, b, c) {
        a || d(Error());
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
    }, z = function(a, b, c) {
        z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
        return z.apply(j, arguments)
    }, ma = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }, B = function(a, b) {
        for (var c in b)
            a[c] = b[c]
    }, E = Date.now || function() {
        return +new Date
    }
    , F = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.superClass_ = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return z.apply(j, c)
        }
        return z(this, a)
    }
    ;
    Function.prototype.partial = function(a) {
        var b = Array.prototype.slice.call(arguments);
        b.unshift(this, j);
        return z.apply(j, b)
    }
    ;
    Function.prototype.inherits = function(a) {
        F(this, a)
    }
    ;
    Function.prototype.mixin = function(a) {
        B(this.prototype, a)
    }
    ;
    var na = "AE AR AU BE BR CA CL CO CZ DE EG ES FR GB HK HU ID IE IL IN IT JO JP KR MA MX MY NL NZ PE PH PL RU SA SE SG TW ZA".split(" ")
      , oa = ["\u309b", "\u309c", "\u5c0f"]
      , pa = {
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
      , qa = {
        "\u3131": ["\u3132"],
        "\u3137": ["\u3138"],
        "\u3142": ["\u3143"],
        "\u3145": ["\u3146"],
        "\u3148": ["\u3149"]
    }
      , ra = {
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
      , sa = {
        "\u5c0f": {
            "\u3042": "\u3041",
            "\u3041": "\u3042",
            "\u3044": "\u3043",
            "\u3043": "\u3044",
            "\u3046": "\u3045",
            "\u3045": "\u3046",
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
            "\u3065": "\u3063"
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
      , ta = {
        CHINA: "zh_CN",
        HONG_KONG: "zh_HK",
        JAPAN: "ja_JP",
        KOREA: "ko_KR",
        NORWAY: "nb_NO",
        RUSSIA: "ru_RU",
        TAIWAN: "zh_TW",
        UKRAINE: "uk_UA"
    }
      , ua = "af_ZA am_ET bg_BG bn_BD ca_ES cs_CZ da_DK de_DE el_GR en_US en_GB es_ES es_MX et_EE eu_ES fa_IR fi_FI fil_PH fr_FR fr_CA gl_ES gu_IN hi_IN hr_HR hu_HU id_ID is_IS it_IT ja_JP kn_IN ko_KR lt_LT lv_LV ml_IN mr_IN ms_MY nb_NO nl_NL pl_PL pt_PT pt_BR ro_RO ru_RU sk_SK sl_SI sr_RS sv_SE sw_TZ ta_IN te_IN th_TH tr_TR uk_UA ur_PK vi_VN zh_CN zh_HK zh_TW zu_ZA".split(" ")
      , va = {
        NORWAY: ["no_NO"]
    };
    t("yt.tv.constants.PlayerState", {
        BUFFERING: 3,
        ENDED: 0,
        ERROR: -1E3,
        PAUSED: 2,
        PLAYING: 1,
        UNSTARTED: -1,
        VIDEO_CUED: 5
    }, h);
    var wa = {
        EN: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        KO: "\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314a\u314b\u314c\u314d\u314e\n\u314f\u3151\u3153\u3155\u3157\u315b\u315c\u3160\u3161\u3163\u1162\u1164\u1166\u1168",
        RU: "\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f",
        JP: "\u3042\u304b\u3055\u305f\u306a\u306f\u307e\u3084\u3089\u308f\u309b",
        NUMBERS: "1234567890_"
    }
      , xa = {
        HL: "HL",
        RC: "RC",
        SU: "SU",
        WL: "WL"
    }
      , ya = {
        FRIEND_ADDED: "[[{{username}} has added a friend|The message that describes user activity. Displayed when a user has added a friend.]]",
        USER_SUBSCRIPTION_ADDED: "[[{{username}} has added a subscription|The message that describes user activity. Displayed when a user subscribed to a channel.]]",
        VIDEO_ADDED_TO_LEGO: "[[{{username}} added a video|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
        VIDEO_ADDED_TO_PLAYLIST: "[[{{username}} added a video to a playlist|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
        VIDEO_COMMENTED: "[[{{username}} has commented a video|The message that describes user activity. Displayed when a user has commented on a video.]]",
        VIDEO_FAVORITED: "[[{{username}} has favorited a video|The message that describes user activity. Displayed when a user has favorited a video.]]",
        VIDEO_RATED: "[[{{username}} has rated a video|The message that describes user activity. Displayed when a user has rated a video.]]",
        VIDEO_RECOMMENDED: "[[video recommended|The message that describes that a video has been recommended.]]",
        VIDEO_SHARED: "[[{{username}} has shared a video|The message that describes user activity. Displayed when a user has shared a video.]]",
        VIDEO_UPLOADED: "[[{{username}} has uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    };
    var G = function(a, b, c) {
        this.helper_ = c;
        this.lastPressedAt_ = j;
        this.buttonCode = a;
        this.keyCode = b;
        this.keyRepeatInterval_ = 500;
        this.isPressed = k
    };
    G.prototype.pressed = function() {
        this.isPressed || (this.isPressed = i);
        var a = new Date
          , b = a - this.lastPressedAt_;
        if (!this.lastPressedAt_ || b > this.keyRepeatInterval_)
            this.lastPressedAt_ && (this.keyRepeatInterval_ = 100),
            this.lastPressedAt_ = a,
            this.emit("keydown", this.keyCode)
    }
    ;
    G.prototype.released = function() {
        this.isPressed && (this.isPressed = k,
        this.lastPressedAt_ = j,
        this.keyRepeatInterval_ = 500,
        this.emit("keyup", this.keyCode))
    }
    ;
    G.prototype.emit = function(a, b) {
        var c = this.helper_.getActiveScope();
        c && c.$emit(a, b)
    }
    ;
    var za = function(a, b) {
        this.stick_ = a;
        this.left_ = new G(-1,37,b);
        this.right_ = new G(-1,39,b);
        this.up_ = new G(-1,38,b);
        this.down_ = new G(-1,40,b)
    };
    za.prototype.update = function() {
        var a = this.stick_.movementX
          , b = this.stick_.movementY;
        -0.5 > a ? this.left_.pressed() : this.left_.released();
        0.5 < a ? this.right_.pressed() : this.right_.released();
        -0.5 > b ? this.up_.pressed() : this.up_.released();
        0.5 < b ? this.down_.pressed() : this.down_.released()
    }
    ;
    var Aa = function(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, Aa) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    F(Aa, Error);
    Aa.prototype.name = "CustomError";
    var Ba = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
      , Ca = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
      , Da = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
      , Ja = function(a, b) {
        if (b)
            return a.replace(Ea, "&amp;").replace(Fa, "&lt;").replace(Ga, "&gt;").replace(Ha, "&quot;");
        if (!Ia.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;"));
        return a
    }
      , Ea = /&/g
      , Fa = /</g
      , Ga = />/g
      , Ha = /\"/g
      , Ia = /[&<>\"]/
      , Ka = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c),
            b %= 4294967296;
        return b
    };
    Math.random();
    var H = Array.prototype
      , La = H.indexOf ? function(a, b, c) {
        return H.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = c == j ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (y(a))
            return !y(b) || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , I = H.forEach ? function(a, b, c) {
        H.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = y(a) ? a.split("") : a, g = 0; g < e; g++)
            g in f && b.call(c, f[g], g, a)
    }
      , Ma = H.filter ? function(a, b, c) {
        return H.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = [], g = 0, l = y(a) ? a.split("") : a, m = 0; m < e; m++)
            if (m in l) {
                var s = l[m];
                b.call(c, s, m, a) && (f[g++] = s)
            }
        return f
    }
      , Na = H.map ? function(a, b, c) {
        return H.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = Array(e), g = y(a) ? a.split("") : a, l = 0; l < e; l++)
            l in g && (f[l] = b.call(c, g[l], l, a));
        return f
    }
      , Oa = H.some ? function(a, b, c) {
        return H.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = y(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && b.call(c, f[g], g, a))
                return i;
        return k
    }
      , Pa = H.every ? function(a, b, c) {
        return H.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = y(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && !b.call(c, f[g], g, a))
                return k;
        return i
    }
      , Ra = function(a, b, c) {
        b = Qa(a, b, c);
        return 0 > b ? j : y(a) ? a.charAt(b) : a[b]
    }
      , Qa = function(a, b, c) {
        for (var e = a.length, f = y(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && b.call(c, f[g], g, a))
                return g;
        return -1
    }
      , J = function(a, b) {
        return 0 <= La(a, b)
    }
      , Sa = function(a, b) {
        var c = La(a, b), e;
        (e = 0 <= c) && H.splice.call(a, c, 1);
        return e
    }
      , Ta = function(a) {
        return H.concat.apply(H, arguments)
    }
      , Ua = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), e = 0; e < b; e++)
                c[e] = a[e];
            return c
        }
        return []
    }
      , Va = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var e = arguments[c], f;
            if (w(e) || (f = da(e)) && Object.prototype.hasOwnProperty.call(e, "callee"))
                a.push.apply(a, e);
            else if (f)
                for (var g = a.length, l = e.length, m = 0; m < l; m++)
                    a[g + m] = e[m];
            else
                a.push(e)
        }
    }
      , Wa = function(a, b, c) {
        return 2 >= arguments.length ? H.slice.call(a, b) : H.slice.call(a, b, c)
    }
      , Xa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var e = arguments[c];
            w(e) ? b.push.apply(b, Xa.apply(j, e)) : b.push(e)
        }
        return b
    };
    var Ya = "StopIteration"in p ? p.StopIteration : Error("StopIteration")
      , Za = function() {};
    Za.prototype.next = function() {
        d(Ya)
    }
    ;
    Za.prototype.__iterator__ = function() {
        return this
    }
    ;
    var ab = function(a) {
        if (a instanceof Za)
            return a;
        if ("function" == typeof a.__iterator__)
            return a.__iterator__(k);
        if (da(a)) {
            var b = 0
              , c = new Za;
            c.next = function() {
                for (; ; ) {
                    b >= a.length && d(Ya);
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        d(Error("Not implemented"))
    }
      , bb = function(a, b, c) {
        if (da(a))
            try {
                I(a, b, c)
            } catch (e) {
                e !== Ya && d(e)
            }
        else {
            a = ab(a);
            try {
                for (; ; )
                    b.call(c, a.next(), h, a)
            } catch (f) {
                f !== Ya && d(f)
            }
        }
    };
    var cb = function(a, b, c) {
        for (var e in a)
            b.call(c, a[e], e, a)
    }
      , db = function(a) {
        var b = [], c = 0, e;
        for (e in a)
            b[c++] = a[e];
        return b
    }
      , eb = function(a) {
        var b = [], c = 0, e;
        for (e in a)
            b[c++] = e;
        return b
    }
      , fb = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return i;
        return k
    }
      , gb = function(a) {
        for (var b in a)
            return k;
        return i
    }
      , hb = function(a) {
        var b = {}, c;
        for (c in a)
            b[a[c]] = c;
        return b
    }
      , ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
      , jb = function(a, b) {
        for (var c, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (c in e)
                a[c] = e[c];
            for (var g = 0; g < ib.length; g++)
                c = ib[g],
                Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
        }
    };
    var kb = function(a) {
        if ("function" == typeof a.getValues)
            return a.getValues();
        if (y(a))
            return a.split("");
        if (da(a)) {
            for (var b = [], c = a.length, e = 0; e < c; e++)
                b.push(a[e]);
            return b
        }
        return db(a)
    }
      , lb = function(a, b, c) {
        if ("function" == typeof a.forEach)
            a.forEach(b, c);
        else if (da(a) || y(a))
            I(a, b, c);
        else {
            var e;
            if ("function" == typeof a.getKeys)
                e = a.getKeys();
            else if ("function" != typeof a.getValues)
                if (da(a) || y(a)) {
                    e = [];
                    for (var f = a.length, g = 0; g < f; g++)
                        e.push(g)
                } else
                    e = eb(a);
            else
                e = h;
            for (var f = kb(a), g = f.length, l = 0; l < g; l++)
                b.call(c, f[l], e && e[l], a)
        }
    };
    var mb = function(a, b) {
        this.map_ = {};
        this.keys_ = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && d(Error("Uneven number of arguments"));
            for (var e = 0; e < c; e += 2)
                this.set(arguments[e], arguments[e + 1])
        } else
            a && this.addAll(a)
    };
    n = mb.prototype;
    n.count_ = 0;
    n.version_ = 0;
    n.getCount = function() {
        return this.count_
    }
    ;
    n.getValues = function() {
        this.cleanupKeysArray_();
        for (var a = [], b = 0; b < this.keys_.length; b++)
            a.push(this.map_[this.keys_[b]]);
        return a
    }
    ;
    n.getKeys = function() {
        this.cleanupKeysArray_();
        return this.keys_.concat()
    }
    ;
    n.containsKey = function(a) {
        return nb(this.map_, a)
    }
    ;
    n.containsValue = function(a) {
        for (var b = 0; b < this.keys_.length; b++) {
            var c = this.keys_[b];
            if (nb(this.map_, c) && this.map_[c] == a)
                return i
        }
        return k
    }
    ;
    n.equals = function(a, b) {
        if (this === a)
            return i;
        if (this.count_ != a.getCount())
            return k;
        var c = b || ob;
        this.cleanupKeysArray_();
        for (var e, f = 0; e = this.keys_[f]; f++)
            if (!c(this.get(e), a.get(e)))
                return k;
        return i
    }
    ;
    var ob = function(a, b) {
        return a === b
    };
    n = mb.prototype;
    n.isEmpty = function() {
        return 0 == this.count_
    }
    ;
    n.clear = function() {
        this.map_ = {};
        this.version_ = this.count_ = this.keys_.length = 0
    }
    ;
    n.remove = function(a) {
        return nb(this.map_, a) ? (delete this.map_[a],
        this.count_--,
        this.version_++,
        this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(),
        i) : k
    }
    ;
    n.cleanupKeysArray_ = function() {
        if (this.count_ != this.keys_.length) {
            for (var a = 0, b = 0; a < this.keys_.length; ) {
                var c = this.keys_[a];
                nb(this.map_, c) && (this.keys_[b++] = c);
                a++
            }
            this.keys_.length = b
        }
        if (this.count_ != this.keys_.length) {
            for (var e = {}, b = a = 0; a < this.keys_.length; )
                c = this.keys_[a],
                nb(e, c) || (this.keys_[b++] = c,
                e[c] = 1),
                a++;
            this.keys_.length = b
        }
    }
    ;
    n.get = function(a, b) {
        return nb(this.map_, a) ? this.map_[a] : b
    }
    ;
    n.set = function(a, b) {
        nb(this.map_, a) || (this.count_++,
        this.keys_.push(a),
        this.version_++);
        this.map_[a] = b
    }
    ;
    n.addAll = function(a) {
        var b;
        a instanceof mb ? (b = a.getKeys(),
        a = a.getValues()) : (b = eb(a),
        a = db(a));
        for (var c = 0; c < b.length; c++)
            this.set(b[c], a[c])
    }
    ;
    n.clone = function() {
        return new mb(this)
    }
    ;
    n.transpose = function() {
        for (var a = new mb, b = 0; b < this.keys_.length; b++) {
            var c = this.keys_[b];
            a.set(this.map_[c], c)
        }
        return a
    }
    ;
    n.toObject = function() {
        this.cleanupKeysArray_();
        for (var a = {}, b = 0; b < this.keys_.length; b++) {
            var c = this.keys_[b];
            a[c] = this.map_[c]
        }
        return a
    }
    ;
    n.getKeyIterator = function() {
        return this.__iterator__(i)
    }
    ;
    n.getValueIterator = function() {
        return this.__iterator__(k)
    }
    ;
    n.__iterator__ = function(a) {
        this.cleanupKeysArray_();
        var b = 0
          , c = this.keys_
          , e = this.map_
          , f = this.version_
          , g = this
          , l = new Za;
        l.next = function() {
            for (; ; ) {
                f != g.version_ && d(Error("The map has changed since the iterator was created"));
                b >= c.length && d(Ya);
                var l = c[b++];
                return a ? l : e[l]
            }
        }
        ;
        return l
    }
    ;
    var nb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var qb = function(a, b) {
        this.maxCount_ = a || j;
        this.cache_ = !!b;
        this.map_ = new mb;
        this.head_ = new pb("",h);
        this.head_.next = this.head_.prev = this.head_
    };
    n = qb.prototype;
    n.findAndMoveToTop_ = function(a) {
        if ((a = this.map_.get(a)) && this.cache_)
            a.remove(),
            this.insert_(a);
        return a
    }
    ;
    n.get = function(a, b) {
        var c = this.findAndMoveToTop_(a);
        return c ? c.value : b
    }
    ;
    n.peekValue = function(a, b) {
        var c = this.map_.get(a);
        return c ? c.value : b
    }
    ;
    n.set = function(a, b) {
        var c = this.findAndMoveToTop_(a);
        c ? c.value = b : (c = new pb(a,b),
        this.map_.set(a, c),
        this.insert_(c))
    }
    ;
    n.peek = function() {
        return this.head_.next.value
    }
    ;
    n.peekLast = function() {
        return this.head_.prev.value
    }
    ;
    n.shift = function() {
        return this.popNode_(this.head_.next)
    }
    ;
    n.pop = function() {
        return this.popNode_(this.head_.prev)
    }
    ;
    n.remove = function(a) {
        return (a = this.map_.get(a)) ? (this.removeNode(a),
        i) : k
    }
    ;
    n.removeNode = function(a) {
        a.remove();
        this.map_.remove(a.key)
    }
    ;
    n.getCount = function() {
        return this.map_.getCount()
    }
    ;
    n.isEmpty = function() {
        return this.map_.isEmpty()
    }
    ;
    n.setMaxCount = function(a) {
        this.maxCount_ = a || j;
        this.maxCount_ != j && this.truncate_(this.maxCount_)
    }
    ;
    n.getKeys = function() {
        return this.map(function(a, b) {
            return b
        })
    }
    ;
    n.getValues = function() {
        return this.map(function(a) {
            return a
        })
    }
    ;
    n.contains = function(a) {
        return this.some(function(b) {
            return b == a
        })
    }
    ;
    n.containsKey = function(a) {
        return this.map_.containsKey(a)
    }
    ;
    n.clear = function() {
        this.truncate_(0)
    }
    ;
    n.forEach = function(a, b) {
        for (var c = this.head_.next; c != this.head_; c = c.next)
            a.call(b, c.value, c.key, this)
    }
    ;
    n.map = function(a, b) {
        for (var c = [], e = this.head_.next; e != this.head_; e = e.next)
            c.push(a.call(b, e.value, e.key, this));
        return c
    }
    ;
    n.some = function(a, b) {
        for (var c = this.head_.next; c != this.head_; c = c.next)
            if (a.call(b, c.value, c.key, this))
                return i;
        return k
    }
    ;
    n.every = function(a, b) {
        for (var c = this.head_.next; c != this.head_; c = c.next)
            if (!a.call(b, c.value, c.key, this))
                return k;
        return i
    }
    ;
    n.insert_ = function(a) {
        this.cache_ ? (a.next = this.head_.next,
        a.prev = this.head_,
        this.head_.next = a,
        a.next.prev = a) : (a.prev = this.head_.prev,
        a.next = this.head_,
        this.head_.prev = a,
        a.prev.next = a);
        this.maxCount_ != j && this.truncate_(this.maxCount_)
    }
    ;
    n.truncate_ = function(a) {
        for (var b = this.map_.getCount(); b > a; b--)
            this.removeNode(this.cache_ ? this.head_.prev : this.head_.next)
    }
    ;
    n.popNode_ = function(a) {
        this.head_ != a && this.removeNode(a);
        return a.value
    }
    ;
    var pb = function(a, b) {
        this.key = a;
        this.value = b
    };
    pb.prototype.remove = function() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        delete this.prev;
        delete this.next
    }
    ;
    var K = function() {
        this.handlers_ = new qb;
        this.counter_ = 0
    };
    K.prototype.on = function(a, b) {
        var c = ++this.counter_
          , e = this.handlers_;
        e.set(c.toString(), {
            eventName: a,
            handler: b
        });
        return function() {
            e.remove(c.toString())
        }
    }
    ;
    K.prototype.trigger = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        this.handlers_.getValues().forEach(function(b) {
            b.eventName === a && b.handler.apply(this, c)
        }, this)
    }
    ;
    var rb = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        d(Error("Invalid JSON string: " + a))
    }
      , sb = function(a) {
        return eval("(" + a + ")")
    }
      , ub = function(a, b) {
        return (new tb(b)).serialize(a)
    }
      , tb = function(a) {
        this.replacer_ = a
    };
    tb.prototype.serialize = function(a) {
        var b = [];
        this.serialize_(a, b);
        return b.join("")
    }
    ;
    tb.prototype.serialize_ = function(a, b) {
        switch (typeof a) {
        case "string":
            this.serializeString_(a, b);
            break;
        case "number":
            this.serializeNumber_(a, b);
            break;
        case "boolean":
            b.push(a);
            break;
        case "undefined":
            b.push("null");
            break;
        case "object":
            if (a == j) {
                b.push("null");
                break
            }
            if (w(a)) {
                this.serializeArray(a, b);
                break
            }
            this.serializeObject_(a, b);
            break;
        case "function":
            break;
        default:
            d(Error("Unknown type: " + typeof a))
        }
    }
    ;
    var vb = {
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
      , wb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    tb.prototype.serializeString_ = function(a, b) {
        b.push('"', a.replace(wb, function(a) {
            if (a in vb)
                return vb[a];
            var b = a.charCodeAt(0)
              , f = "\\u";
            16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
            return vb[a] = f + b.toString(16)
        }), '"')
    }
    ;
    tb.prototype.serializeNumber_ = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? a : "null")
    }
    ;
    tb.prototype.serializeArray = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var e = "", f = 0; f < c; f++)
            b.push(e),
            e = a[f],
            this.serialize_(this.replacer_ ? this.replacer_.call(a, String(f), e) : e, b),
            e = ",";
        b.push("]")
    }
    ;
    tb.prototype.serializeObject_ = function(a, b) {
        b.push("{");
        var c = "", e;
        for (e in a)
            if (Object.prototype.hasOwnProperty.call(a, e)) {
                var f = a[e];
                "function" != typeof f && (b.push(c),
                this.serializeString_(e, b),
                b.push(":"),
                this.serialize_(this.replacer_ ? this.replacer_.call(a, e, f) : f, b),
                c = ",")
            }
        b.push("}")
    }
    ;
    var xb = function() {};
    var yb = function() {};
    F(yb, xb);
    yb.prototype.getCount = function() {
        var a = 0;
        bb(this.__iterator__(i), function() {
            a++
        });
        return a
    }
    ;
    yb.prototype.clear = function() {
        var a;
        a = this.__iterator__(i);
        if (da(a))
            a = Ua(a);
        else {
            a = ab(a);
            var b = [];
            bb(a, function(a) {
                b.push(a)
            });
            a = b
        }
        var c = this;
        I(a, function(a) {
            c.remove(a)
        })
    }
    ;
    var zb = function(a) {
        this.storage_ = a
    };
    F(zb, yb);
    n = zb.prototype;
    n.isAvailable = function() {
        if (!this.storage_)
            return k;
        try {
            return this.storage_.setItem("__sak", "1"),
            this.storage_.removeItem("__sak"),
            i
        } catch (a) {
            return k
        }
    }
    ;
    n.set = function(a, b) {
        try {
            this.storage_.setItem(a, b)
        } catch (c) {
            0 == this.storage_.length && d("Storage mechanism: Storage disabled"),
            d("Storage mechanism: Quota exceeded")
        }
    }
    ;
    n.get = function(a) {
        a = this.storage_.getItem(a);
        !y(a) && a !== j && d("Storage mechanism: Invalid value was encountered");
        return a
    }
    ;
    n.remove = function(a) {
        this.storage_.removeItem(a)
    }
    ;
    n.getCount = function() {
        return this.storage_.length
    }
    ;
    n.__iterator__ = function(a) {
        var b = 0
          , c = this.storage_
          , e = new Za;
        e.next = function() {
            b >= c.length && d(Ya);
            var e;
            e = c.key(b++);
            if (a)
                return e;
            e = c.getItem(e);
            y(e) || d("Storage mechanism: Invalid value was encountered");
            return e
        }
        ;
        return e
    }
    ;
    n.clear = function() {
        this.storage_.clear()
    }
    ;
    var Ab = function() {
        var a = j;
        try {
            a = window.localStorage || j
        } catch (b) {}
        this.storage_ = a
    };
    F(Ab, zb);
    var Bb, Cb, Db, Eb, Fb, Gb = function() {
        return p.navigator ? p.navigator.userAgent : j
    }, Hb = function() {
        return p.navigator
    };
    Eb = Db = Cb = Bb = k;
    var Ib;
    if (Ib = Gb()) {
        var Jb = Hb();
        Bb = 0 == Ib.indexOf("Opera");
        Cb = !Bb && -1 != Ib.indexOf("MSIE");
        (Db = !Bb && -1 != Ib.indexOf("WebKit")) && Ib.indexOf("Mobile");
        Eb = !Bb && !Db && "Gecko" == Jb.product
    }
    var Kb = Bb
      , L = Cb
      , Lb = Eb
      , M = Db
      , Mb = Hb()
      , Nb = Mb && Mb.platform || "";
    Fb = -1 != Nb.indexOf("Mac");
    Nb.indexOf("Win");
    Nb.indexOf("Linux");
    Hb() && (Hb().appVersion || "").indexOf("X11");
    var Ob = function() {
        var a = p.document;
        return a ? a.documentMode : h
    }, Pb;
    a: {
        var Qb = "", Rb;
        if (Kb && p.opera)
            var Sb = p.opera.version
              , Qb = "function" == typeof Sb ? Sb() : Sb;
        else if (Lb ? Rb = /rv\:([^\);]+)(\)|;)/ : L ? Rb = /MSIE\s+([^\);]+)(\)|;)/ : M && (Rb = /WebKit\/(\S+)/),
        Rb)
            var Tb = Rb.exec(Gb())
              , Qb = Tb ? Tb[1] : "";
        if (L) {
            var Ub = Ob();
            if (Ub > parseFloat(Qb)) {
                Pb = String(Ub);
                break a
            }
        }
        Pb = Qb
    }
    var Vb = Pb
      , Wb = {}
      , N = function(a) {
        var b;
        if (!(b = Wb[a])) {
            var c = 0;
            b = Ca(String(Vb)).split(".");
            for (var e = Ca(String(a)).split("."), f = Math.max(b.length, e.length), g = 0; 0 == c && g < f; g++) {
                var l = b[g] || ""
                  , m = e[g] || ""
                  , s = RegExp("(\\d*)(\\D*)", "g")
                  , r = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var A = s.exec(l) || ["", "", ""]
                      , u = r.exec(m) || ["", "", ""];
                    if (0 == A[0].length && 0 == u[0].length)
                        break;
                    var c = 0 == A[1].length ? 0 : parseInt(A[1], 10)
                      , D = 0 == u[1].length ? 0 : parseInt(u[1], 10)
                      , c = (c < D ? -1 : c > D ? 1 : 0) || ((0 == A[2].length) < (0 == u[2].length) ? -1 : (0 == A[2].length) > (0 == u[2].length) ? 1 : 0) || (A[2] < u[2] ? -1 : A[2] > u[2] ? 1 : 0)
                } while (0 == c)
            }
            b = Wb[a] = 0 <= c
        }
        return b
    }
      , O = function(a) {
        return L && Xb >= a
    }
      , Yb = p.document
      , Xb = !Yb || !L ? h : Ob() || ("CSS1Compat" == Yb.compatMode ? parseInt(Vb, 10) : 5);
    var $b = function(a, b) {
        if (L && !O(9)) {
            Zb || (Zb = new mb);
            this.storageNode_ = Zb.get(a);
            this.storageNode_ || (b ? this.storageNode_ = document.getElementById(b) : (this.storageNode_ = document.createElement("userdata"),
            this.storageNode_.addBehavior("#default#userData"),
            document.body.appendChild(this.storageNode_)),
            Zb.set(a, this.storageNode_));
            this.storageKey_ = a;
            try {
                this.loadNode_()
            } catch (c) {
                this.storageNode_ = j
            }
        }
    };
    F($b, yb);
    var ac = {
        ".": ".2E",
        "!": ".21",
        "~": ".7E",
        "*": ".2A",
        "'": ".27",
        "(": ".28",
        ")": ".29",
        "%": "."
    }
      , Zb = j;
    $b.prototype.storageNode_ = j;
    $b.prototype.storageKey_ = j;
    var bc = function(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
            return ac[a]
        })
    };
    n = $b.prototype;
    n.isAvailable = function() {
        return !!this.storageNode_
    }
    ;
    n.set = function(a, b) {
        this.storageNode_.setAttribute(bc(a), b);
        this.saveNode_()
    }
    ;
    n.get = function(a) {
        a = this.storageNode_.getAttribute(bc(a));
        !y(a) && a !== j && d("Storage mechanism: Invalid value was encountered");
        return a
    }
    ;
    n.remove = function(a) {
        this.storageNode_.removeAttribute(bc(a));
        this.saveNode_()
    }
    ;
    n.getCount = function() {
        return this.getNode_().attributes.length
    }
    ;
    n.__iterator__ = function(a) {
        var b = 0
          , c = this.getNode_().attributes
          , e = new Za;
        e.next = function() {
            b >= c.length && d(Ya);
            var e;
            e = c[b++];
            if (a)
                return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            y(e) || d("Storage mechanism: Invalid value was encountered");
            return e
        }
        ;
        return e
    }
    ;
    n.clear = function() {
        for (var a = this.getNode_(), b = a.attributes.length; 0 < b; b--)
            a.removeAttribute(a.attributes[b - 1].nodeName);
        this.saveNode_()
    }
    ;
    n.loadNode_ = function() {
        this.storageNode_.load(this.storageKey_)
    }
    ;
    n.saveNode_ = function() {
        try {
            this.storageNode_.save(this.storageKey_)
        } catch (a) {
            d("Storage mechanism: Quota exceeded")
        }
    }
    ;
    n.getNode_ = function() {
        return this.storageNode_.XMLDocument.documentElement
    }
    ;
    var cc = function(a, b) {
        this.mechanism_ = a;
        this.prefix_ = b + "::"
    };
    F(cc, yb);
    n = cc.prototype;
    n.mechanism_ = j;
    n.prefix_ = "";
    n.set = function(a, b) {
        this.mechanism_.set(this.prefix_ + a, b)
    }
    ;
    n.get = function(a) {
        return this.mechanism_.get(this.prefix_ + a)
    }
    ;
    n.remove = function(a) {
        this.mechanism_.remove(this.prefix_ + a)
    }
    ;
    n.__iterator__ = function(a) {
        var b = this.mechanism_.__iterator__(i)
          , c = this
          , e = new Za;
        e.next = function() {
            for (var e = b.next(); e.substr(0, c.prefix_.length) != c.prefix_; )
                e = b.next();
            return a ? e.substr(c.prefix_.length) : c.mechanism_.get(e)
        }
        ;
        return e
    }
    ;
    var dc = function(a) {
        this.mechanism = a;
        this.serializer_ = new tb
    };
    n = dc.prototype;
    n.mechanism = j;
    n.serializer_ = j;
    n.set = function(a, b) {
        q(b) ? this.mechanism.set(a, this.serializer_.serialize(b)) : this.mechanism.remove(a)
    }
    ;
    n.get = function(a) {
        a = this.mechanism.get(a);
        if (a !== j)
            try {
                return rb(a)
            } catch (b) {
                d("Storage: Invalid value was encountered")
            }
    }
    ;
    n.remove = function(a) {
        this.mechanism.remove(a)
    }
    ;
    var ec = function(a) {
        dc.call(this, a)
    };
    F(ec, dc);
    var fc = function(a) {
        this.data = a
    }
      , gc = function(a) {
        return !q(a) || a instanceof fc ? a : new fc(a)
    };
    ec.prototype.set = function(a, b) {
        ec.superClass_.set.call(this, a, gc(b))
    }
    ;
    ec.prototype.getWrapper = function(a) {
        a = ec.superClass_.get.call(this, a);
        if (!q(a) || a instanceof Object)
            return a;
        d("Storage: Invalid value was encountered")
    }
    ;
    ec.prototype.get = function(a) {
        (a = this.getWrapper(a)) ? (a = a.data,
        q(a) || d("Storage: Invalid value was encountered")) : a = h;
        return a
    }
    ;
    var hc = function(a) {
        dc.call(this, a)
    };
    F(hc, ec);
    hc.prototype.set = function(a, b, c) {
        if (b = gc(b)) {
            if (c) {
                if (c < E()) {
                    hc.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = E()
        }
        hc.superClass_.set.call(this, a, b)
    }
    ;
    hc.prototype.getWrapper = function(a, b) {
        var c = hc.superClass_.getWrapper.call(this, a);
        if (c) {
            var e;
            if (e = !b) {
                e = c.creation;
                var f = c.expiration;
                e = !!f && f < E() || !!e && e > E()
            }
            if (e)
                hc.prototype.remove.call(this, a);
            else
                return c
        }
    }
    ;
    var ic = function(a) {
        this.document_ = a
    }
      , jc = /\s*;\s*/;
    n = ic.prototype;
    n.isEnabled = function() {
        return navigator.cookieEnabled
    }
    ;
    n.isValidName = function(a) {
        return !/[;=\s]/.test(a)
    }
    ;
    n.isValidValue = function(a) {
        return !/[;\r\n]/.test(a)
    }
    ;
    n.set = function(a, b, c, e, f, g) {
        this.isValidName(a) || d(Error('Invalid cookie name "' + a + '"'));
        this.isValidValue(b) || d(Error('Invalid cookie value "' + b + '"'));
        q(c) || (c = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(E() + 1E3 * c)).toUTCString();
        this.setCookie_(a + "=" + b + f + e + c + g)
    }
    ;
    n.get = function(a, b) {
        for (var c = a + "=", e = this.getParts_(), f = 0, g; g = e[f]; f++) {
            if (0 == g.lastIndexOf(c, 0))
                return g.substr(c.length);
            if (g == a)
                return ""
        }
        return b
    }
    ;
    n.remove = function(a, b, c) {
        var e = this.containsKey(a);
        this.set(a, "", 0, b, c);
        return e
    }
    ;
    n.getKeys = function() {
        return this.getKeyValues_().keys
    }
    ;
    n.getValues = function() {
        return this.getKeyValues_().values
    }
    ;
    n.isEmpty = function() {
        return !this.getCookie_()
    }
    ;
    n.getCount = function() {
        return !this.getCookie_() ? 0 : this.getParts_().length
    }
    ;
    n.containsKey = function(a) {
        return q(this.get(a))
    }
    ;
    n.containsValue = function(a) {
        for (var b = this.getKeyValues_().values, c = 0; c < b.length; c++)
            if (b[c] == a)
                return i;
        return k
    }
    ;
    n.clear = function() {
        for (var a = this.getKeyValues_().keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    n.setCookie_ = function(a) {
        this.document_.cookie = a
    }
    ;
    n.getCookie_ = function() {
        return this.document_.cookie
    }
    ;
    n.getParts_ = function() {
        return (this.getCookie_() || "").split(jc)
    }
    ;
    n.getKeyValues_ = function() {
        for (var a = this.getParts_(), b = [], c = [], e, f, g = 0; f = a[g]; g++)
            e = f.indexOf("="),
            -1 == e ? (b.push(""),
            c.push(f)) : (b.push(f.substring(0, e)),
            c.push(f.substring(e + 1)));
        return {
            keys: b,
            values: c
        }
    }
    ;
    var kc = new ic(document);
    kc.MAX_COOKIE_LENGTH = 3950;
    var lc = document.domain;
    var mc = function(a) {
        var b = new Ab;
        if (!(b = b.isAvailable() ? a ? new cc(b,a) : b : j))
            a = new $b(a || "UserDataSharedStore"),
            b = a.isAvailable() ? a : j;
        this.expiringStorage_ = (a = b) ? new hc(a) : j
    };
    mc.prototype.hasLocalStorage_ = function() {
        return !!this.expiringStorage_
    }
    ;
    mc.prototype.set = function(a, b, c, e) {
        c = c || 31104E3;
        if (this.hasLocalStorage_())
            try {
                this.expiringStorage_.set(a, b, E() + 1E3 * c);
                return
            } catch (f) {}
        this.remove(a);
        var g = "";
        if (e)
            try {
                g = escape(ub(b))
            } catch (l) {
                return
            }
        else
            g = escape(b);
        a = "yt-dev." + a;
        kc.set(a, g, c, "/", lc)
    }
    ;
    mc.prototype.get = function(a, b) {
        var c = "";
        if (this.hasLocalStorage_())
            try {
                c = this.expiringStorage_.get(a)
            } catch (e) {}
        if (!c && (c = "yt-dev." + a,
        c = kc.get(c, "")))
            if (c = unescape(c),
            b)
                try {
                    c = rb(c)
                } catch (f) {
                    this.remove(a),
                    c = ""
                }
        return c
    }
    ;
    mc.prototype.remove = function(a) {
        this.hasLocalStorage_() && this.expiringStorage_.remove(a);
        a = "yt-dev." + a;
        kc.remove(a, "/", lc)
    }
    ;
    var nc = function(a, b) {
        this.x = q(a) ? a : 0;
        this.y = q(b) ? b : 0
    };
    n = nc.prototype;
    n.clone = function() {
        return new nc(this.x,this.y)
    }
    ;
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof nc ? (this.x += a.x,
        this.y += a.y) : (this.x += a,
        ea(b) && (this.y += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        var c = ea(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    var oc = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = oc.prototype;
    n.clone = function() {
        return new oc(this.width,this.height)
    }
    ;
    n.getLongest = function() {
        return Math.max(this.width, this.height)
    }
    ;
    n.getShortest = function() {
        return Math.min(this.width, this.height)
    }
    ;
    n.area = function() {
        return this.width * this.height
    }
    ;
    n.perimeter = function() {
        return 2 * (this.width + this.height)
    }
    ;
    n.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    n.isEmpty = function() {
        return !this.area()
    }
    ;
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    n.fitsInside = function(a) {
        return this.width <= a.width && this.height <= a.height
    }
    ;
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    n.scale = function(a, b) {
        var c = ea(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    n.scaleToFit = function(a) {
        a = this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height;
        return this.scale(a)
    }
    ;
    var pc, qc = !L || O(9), rc = !Lb && !L || L && O(9) || Lb && N("1.9.1"), sc = L && !N("9"), tc = L || Kb || M;
    var uc = function(a) {
        a = a.className;
        return y(a) && a.match(/\S+/g) || []
    }
      , vc = function(a, b) {
        for (var c = uc(a), e = Wa(arguments, 1), f = c.length + e.length, g = c, l = 0; l < e.length; l++)
            J(g, e[l]) || g.push(e[l]);
        a.className = c.join(" ");
        return c.length == f
    }
      , wc = function(a, b) {
        var c = uc(a), e = Wa(arguments, 1), f, g = e;
        f = Ma(c, function(a) {
            return !J(g, a)
        });
        a.className = f.join(" ");
        return f.length == c.length - e.length
    };
    var zc = function(a) {
        return a ? new xc(yc(a)) : pc || (pc = new xc)
    }
      , Ac = function(a) {
        return y(a) ? document.getElementById(a) : a
    }
      , Cc = function(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Bc(document, "*", a, b)
    }
      , Dc = function(a, b) {
        var c = b || document
          , e = j;
        return (e = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Cc(a, b)[0]) || j
    }
      , Bc = function(a, b, c, e) {
        a = e || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                e = {};
                for (var f = 0, g = 0, l; l = a[g]; g++)
                    b == l.nodeName && (e[f++] = l);
                e.length = f;
                return e
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            e = {};
            for (g = f = 0; l = a[g]; g++)
                b = l.className,
                "function" == typeof b.split && J(b.split(/\s+/), c) && (e[f++] = l);
            e.length = f;
            return e
        }
        return a
    }
      , Fc = function(a, b) {
        cb(b, function(b, e) {
            "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in Ec ? a.setAttribute(Ec[e], b) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, b) : a[e] = b
        })
    }
      , Ec = {
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
    }
      , Hc = function(a) {
        a = a.document;
        a = Gc(a) ? a.documentElement : a.body;
        return new oc(a.clientWidth,a.clientHeight)
    }
      , Ic = function(a) {
        var b = a.document
          , c = 0;
        if (b) {
            a = Hc(a).height;
            var c = b.body
              , e = b.documentElement;
            if (Gc(b) && e.scrollHeight)
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
      , Lc = function(a, b, c, e) {
        function f(c) {
            c && b.appendChild(y(c) ? a.createTextNode(c) : c)
        }
        for (; e < c.length; e++) {
            var g = c[e];
            da(g) && !Jc(g) ? I(Kc(g) ? Ua(g) : g, f) : f(g)
        }
    }
      , Gc = function(a) {
        return "CSS1Compat" == a.compatMode
    }
      , Mc = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
      , Nc = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : j
    }
      , Oc = function(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
      , Jc = function(a) {
        return ga(a) && 0 < a.nodeType
    }
      , Pc = function(a) {
        return ga(a) && 1 == a.nodeType
    }
      , Qc = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , Sc = function(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (var e = b; e.parentNode != c; )
            e = e.parentNode;
        return Rc(e, a)
    }
      , Rc = function(a, b) {
        for (var c = b; c = c.previousSibling; )
            if (c == a)
                return -1;
        return 1
    }
      , yc = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , Tc = function(a) {
        return a.contentDocument || a.contentWindow.document
    }
      , Uc = function(a, b, c, e) {
        if (a != j)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                e) || Uc(a, b, c, e))
                    return i;
                a = a.nextSibling
            }
        return k
    }
      , Vc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Wc = {
        IMG: " ",
        BR: "\n"
    }
      , Yc = function(a) {
        if (sc && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Xc(a, b, i);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        sc || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
      , Xc = function(a, b, c) {
        if (!(a.nodeName in Vc))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Wc)
                b.push(Wc[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Xc(a, b, c),
                    a = a.nextSibling
    }
      , Kc = function(a) {
        if (a && "number" == typeof a.length) {
            if (ga(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (fa(a))
                return "function" == typeof a.item
        }
        return k
    }
      , $c = function(a, b, c) {
        if (!b && !c)
            return j;
        var e = b ? b.toUpperCase() : j;
        return Zc(a, function(a) {
            return (!e || a.nodeName == e) && (!c || J(uc(a), c))
        }, i)
    }
      , ad = function(a, b) {
        return $c(a, j, b)
    }
      , Zc = function(a, b, c, e) {
        c || (a = a.parentNode);
        c = e == j;
        for (var f = 0; a && (c || f <= e); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            f++
        }
        return j
    }
      , xc = function(a) {
        this.document_ = a || p.document || document
    };
    n = xc.prototype;
    n.getDomHelper = zc;
    n.setDocument = function(a) {
        this.document_ = a
    }
    ;
    n.getDocument = function() {
        return this.document_
    }
    ;
    n.getElement = function(a) {
        return y(a) ? this.document_.getElementById(a) : a
    }
    ;
    n.$ = xc.prototype.getElement;
    n.getElementsByTagNameAndClass = function(a, b, c) {
        return Bc(this.document_, a, b, c)
    }
    ;
    n.getElementsByClass = function(a, b) {
        return Cc(a, b || this.document_)
    }
    ;
    n.getElementByClass = function(a, b) {
        return Dc(a, b || this.document_)
    }
    ;
    n.$$ = xc.prototype.getElementsByTagNameAndClass;
    n.setProperties = Fc;
    n.getViewportSize = function(a) {
        a = a || this.getWindow();
        return Hc(a || window)
    }
    ;
    n.getDocumentHeight = function() {
        return Ic(this.getWindow())
    }
    ;
    n.createDom = function(a, b, c) {
        var e = this.document_
          , f = arguments
          , g = f[0]
          , l = f[1];
        if (!qc && l && (l.name || l.type)) {
            g = ["<", g];
            l.name && g.push(' name="', Ja(l.name), '"');
            if (l.type) {
                g.push(' type="', Ja(l.type), '"');
                var m = {};
                jb(m, l);
                delete m.type;
                l = m
            }
            g.push(">");
            g = g.join("")
        }
        g = e.createElement(g);
        l && (y(l) ? g.className = l : w(l) ? vc.apply(j, [g].concat(l)) : Fc(g, l));
        2 < f.length && Lc(e, g, f, 2);
        return g
    }
    ;
    n.$dom = xc.prototype.createDom;
    n.createElement = function(a) {
        return this.document_.createElement(a)
    }
    ;
    n.createTextNode = function(a) {
        return this.document_.createTextNode(a)
    }
    ;
    n.createTable = function(a, b, c) {
        var e = this.document_
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
    n.htmlToDocumentFragment = function(a) {
        var b;
        var c = this.document_;
        b = c.createElement("div");
        L ? (b.innerHTML = "<br>" + a,
        b.removeChild(b.firstChild)) : b.innerHTML = a;
        if (1 == b.childNodes.length)
            b = b.removeChild(b.firstChild);
        else {
            for (a = c.createDocumentFragment(); b.firstChild; )
                a.appendChild(b.firstChild);
            b = a
        }
        return b
    }
    ;
    n.getCompatMode = function() {
        return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
    }
    ;
    n.isCss1CompatMode = function() {
        return Gc(this.document_)
    }
    ;
    n.getWindow = function() {
        return this.document_.parentWindow || this.document_.defaultView
    }
    ;
    n.getDocumentScrollElement = function() {
        return !M && Gc(this.document_) ? this.document_.documentElement : this.document_.body
    }
    ;
    n.getDocumentScroll = function() {
        var a = this.document_
          , b = !M && Gc(a) ? a.documentElement : a.body
          , a = a.parentWindow || a.defaultView;
        return new nc(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    n.getActiveElement = function(a) {
        var b;
        a: {
            a = a || this.document_;
            try {
                b = a && a.activeElement;
                break a
            } catch (c) {}
            b = j
        }
        return b
    }
    ;
    n.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    n.append = function(a, b) {
        Lc(yc(a), a, arguments, 1)
    }
    ;
    n.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return k;
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
            return k
        }
        return i
    }
    ;
    n.removeChildren = Mc;
    n.insertSiblingBefore = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    n.insertSiblingAfter = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    ;
    n.insertChildAt = function(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || j)
    }
    ;
    n.removeNode = Nc;
    n.replaceNode = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    ;
    n.flattenElement = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode)
                return a.removeNode(k);
            for (; b = a.firstChild; )
                c.insertBefore(b, a);
            return Nc(a)
        }
    }
    ;
    n.getChildren = function(a) {
        return rc && a.children != h ? a.children : Ma(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }
    ;
    n.getFirstElementChild = function(a) {
        return a.firstElementChild != h ? a.firstElementChild : Oc(a.firstChild, i)
    }
    ;
    n.getLastElementChild = function(a) {
        return a.lastElementChild != h ? a.lastElementChild : Oc(a.lastChild, k)
    }
    ;
    n.getNextElementSibling = function(a) {
        return a.nextElementSibling != h ? a.nextElementSibling : Oc(a.nextSibling, i)
    }
    ;
    n.getPreviousElementSibling = function(a) {
        return a.previousElementSibling != h ? a.previousElementSibling : Oc(a.previousSibling, k)
    }
    ;
    n.getNextNode = function(a) {
        if (!a)
            return j;
        if (a.firstChild)
            return a.firstChild;
        for (; a && !a.nextSibling; )
            a = a.parentNode;
        return a ? a.nextSibling : j
    }
    ;
    n.getPreviousNode = function(a) {
        if (!a)
            return j;
        if (!a.previousSibling)
            return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild; )
            a = a.lastChild;
        return a
    }
    ;
    n.isNodeLike = Jc;
    n.isElement = Pc;
    n.isWindow = function(a) {
        return ga(a) && a.window == a
    }
    ;
    n.getParentElement = function(a) {
        if (tc)
            return a.parentElement;
        a = a.parentNode;
        return Pc(a) ? a : j
    }
    ;
    n.contains = Qc;
    n.compareNodeOrder = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (L && !O(9)) {
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
            return f == g ? Rc(a, b) : !c && Qc(f, b) ? -1 * Sc(a, b) : !e && Qc(g, a) ? Sc(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (e ? b.sourceIndex : g.sourceIndex)
        }
        e = yc(a);
        c = e.createRange();
        c.selectNode(a);
        c.collapse(i);
        e = e.createRange();
        e.selectNode(b);
        e.collapse(i);
        return c.compareBoundaryPoints(p.Range.START_TO_END, e)
    }
    ;
    n.findCommonAncestor = function(a) {
        var b, c = arguments.length;
        if (c) {
            if (1 == c)
                return arguments[0]
        } else
            return j;
        var e = []
          , f = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], l = arguments[b]; l; )
                g.unshift(l),
                l = l.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = j;
        for (b = 0; b < f; b++) {
            for (var l = e[0][b], m = 1; m < c; m++)
                if (l != e[m][b])
                    return g;
            g = l
        }
        return g
    }
    ;
    n.getOwnerDocument = yc;
    n.getFrameContentDocument = Tc;
    n.getFrameContentWindow = function(a) {
        var b;
        if (!(b = a.contentWindow))
            a = Tc(a),
            b = a.parentWindow || a.defaultView;
        return b
    }
    ;
    n.setTextContent = function(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            Mc(a);
            var c = yc(a);
            a.appendChild(c.createTextNode(b))
        }
    }
    ;
    n.getOuterHtml = function(a) {
        if ("outerHTML"in a)
            return a.outerHTML;
        var b = yc(a).createElement("div");
        b.appendChild(a.cloneNode(i));
        return b.innerHTML
    }
    ;
    n.findNode = function(a, b) {
        var c = [];
        return Uc(a, b, c, i) ? c[0] : h
    }
    ;
    n.findNodes = function(a, b) {
        var c = [];
        Uc(a, b, c, k);
        return c
    }
    ;
    n.isFocusableTabIndex = function(a) {
        var b = a.getAttributeNode("tabindex");
        return b && b.specified ? (a = a.tabIndex,
        ea(a) && 0 <= a && 32768 > a) : k
    }
    ;
    n.setFocusableTabIndex = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
    }
    ;
    n.getTextContent = Yc;
    n.getNodeTextLength = function(a) {
        return Yc(a).length
    }
    ;
    n.getNodeTextOffset = function(a, b) {
        for (var c = b || yc(a).body, e = []; a && a != c; ) {
            for (var f = a; f = f.previousSibling; )
                e.unshift(Yc(f));
            a = a.parentNode
        }
        return e.join("").replace(/^[\s\xa0]+/, "").replace(/ +/g, " ").length
    }
    ;
    n.getNodeAtOffset = function(a, b, c) {
        a = [a];
        for (var e = 0, f = j; 0 < a.length && e < b; )
            if (f = a.pop(),
            !(f.nodeName in Vc))
                if (3 == f.nodeType)
                    var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ")
                      , e = e + g.length;
                else if (f.nodeName in Wc)
                    e += Wc[f.nodeName].length;
                else
                    for (g = f.childNodes.length - 1; 0 <= g; g--)
                        a.push(f.childNodes[g]);
        ga(c) && (c.remainder = f ? f.nodeValue.length + b - e - 1 : 0,
        c.node = f);
        return f
    }
    ;
    n.isNodeList = Kc;
    n.getAncestorByTagNameAndClass = $c;
    n.getAncestorByClass = ad;
    n.getAncestor = Zc;
    var bd = function(a, b) {
        this.numericDelimiter_ = a != h ? a : ",";
        this.dateFormatter_ = b != h ? b : "YYYY/MM/DD"
    };
    n = bd.prototype;
    n.formatNumber = function(a) {
        return a ? a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, this.numericDelimiter_) : "0"
    }
    ;
    n.formatDate = function(a) {
        var b = this.getMonthLabel_(a)
          , c = this.getDayLabel_(a);
        a = this.getYearLabel_(a);
        switch (this.dateFormatter_) {
        case "DD/MM/YYYY":
            return [c, b, a].join("/");
        case "DD.MM.YYYY":
            return [c, b, a].join(".");
        default:
            return [a, b, c].join("/")
        }
    }
    ;
    n.getDayLabel_ = function(a) {
        return ("0" + a.getDate()).slice(-2)
    }
    ;
    n.getMonthLabel_ = function(a) {
        return ("0" + (a.getMonth() + 1)).slice(-2)
    }
    ;
    n.getYearLabel_ = function(a) {
        return a.getFullYear().toString()
    }
    ;
    n.formatTime = function(a) {
        var b = a % 60;
        a /= 60;
        var c = 0;
        return 60 <= a ? (c = a / 60,
        [Math.floor(c), this.addLeadingZero_(a % 60), this.addLeadingZero_(b)].join(":")) : [Math.floor(a), this.addLeadingZero_(b)].join(":")
    }
    ;
    n.addLeadingZero_ = function(a) {
        a = Math.floor(a);
        return 9 < a ? a : "0" + a
    }
    ;
    var cd = function(a, b) {
        switch (a) {
        case "de":
            return new bd(".","DD.MM.YYYY");
        case "fr":
            return new bd(" ","DD/MM/YYYY");
        case "ru":
            return new bd(" ","DD.MM.YYYY");
        case "nl":
        case "es":
        case "it":
        case "pt":
            return new bd("","DD/MM/YYYY");
        case "en":
            switch (b) {
            case "GB":
                return new bd(",","DD/MM/YYYY")
            }
        default:
            return new bd(",","YYYY/MM/DD")
        }
    };
    var ed = function(a) {
        var b = [];
        a = dd(a);
        for (var c in a)
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
      , dd = function(a) {
        newParams = {};
        for (var b in a)
            value = a[b],
            "undefined" !== typeof value && (value !== j && "" !== value) && (newParams[b] = value);
        return newParams
    }
      , fd = function(a, b) {
        gb(b) || (a += "?" + ed(b));
        return a
    };
    var gd = function(a, b, c) {
        this.window_ = a;
        this.applicationPath_ = b || "";
        this.http_ = c || j;
        this.setIsoLocale(this.getBrowserLocale_())
    };
    n = gd.prototype;
    n.setIsoLocale = function(a) {
        a || d("Unexpected locale provided, " + a);
        this.isoLocale = a;
        this.language = a.split("_")[0];
        this.originalLocale_ && 1 < this.originalLocale_.indexOf("_") && (this.region = this.originalLocale_.split("_")[1]);
        this.formatter_ = cd(this.language, this.region)
    }
    ;
    n.localize = function(a) {
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
                  , b = b + this.localizeString_(f);
        while (0 <= c && 0 <= e);
        return b
    }
    ;
    n.setMessages = function(a) {
        this.messages_ = a
    }
    ;
    n.formatNumber = function(a) {
        return this.formatter_.formatNumber(a)
    }
    ;
    n.formatTime = function(a) {
        return this.formatter_.formatTime(a)
    }
    ;
    n.formatDate = function(a) {
        return this.formatter_.formatDate(a)
    }
    ;
    n.localizeString_ = function(a) {
        var b = a.split("|");
        if (2 > b.length)
            return a;
        var c;
        (a = b[b.length - 1]) && !isNaN(a) && (c = b.pop());
        a = b.pop();
        b = b.join("|");
        return this.getLocalizedMessage_(b, a, c)
    }
    ;
    n.getMsgId = function(a, b) {
        var c = String(a + b).toLowerCase(), e = 0, f, g;
        for (f = 0; f < c.length; ++f)
            g = c.charCodeAt(f),
            e = (e << 5) - e + g,
            e &= 33554431;
        return String(e)
    }
    ;
    n.getLocalizedMessage_ = function(a, b, c) {
        var e = this.messages_;
        if (gb(e))
            return a;
        b = this.getMsgId(a, b);
        return c && a === e[b] && e[c] ? e[c] : e[b] || a
    }
    ;
    n.requiresTransliteration = function() {
        return J(["ja_JP", "zh_CN", "zh_HK", "zh_TW"], this.isoLocale)
    }
    ;
    n.loadMessages = function(a) {
        if (this.http_) {
            var b = z(function(b) {
                this.messages_ = b || {};
                a && a(b)
            }, this);
            if (this.isDefaultLocale())
                b();
            else {
                var c = this.applicationPath_ + this.isoLocale.replace(/(.*)/, "/locale/messages-$1.json");
                this.http_.get(c).success(b).error(function() {
                    b()
                })
            }
        }
    }
    ;
    n.isDefaultLocale = function() {
        return "en_US" === this.isoLocale
    }
    ;
    n.getBrowserLocale_ = function() {
        return this.extractFromUrl_() || this.extractFromAcceptHeader_() || this.extractFromNavigator_() || "en_US"
    }
    ;
    n.extractFromUrl_ = function() {
        var a = this.window_.location.search, a = a.replace(/^\?/, ""), b = {}, c;
        a.split("&").forEach(function(a) {
            c = a.split("=");
            b[c.shift()] = c.shift()
        });
        return (a = b.hl) ? this.getForeignLocale_(a.replace("-", "_")) : j
    }
    ;
    n.extractFromAcceptHeader_ = function() {
        var a = this.window_;
        if (a = a && a.environment && a.environment.language)
            for (var a = this.getLocalesFromAcceptLanguage_(a), b = 0; b < a.length; ++b) {
                var c = this.getSanitizedLocale(a[b]);
                if ("en_US" == c)
                    break;
                else if (c)
                    return c
            }
        return j
    }
    ;
    n.extractFromNavigator_ = function() {
        var a = this.window_
          , a = (a.navigator.language || a.navigator.userLanguage || a.navigator.systemLanguage || a.navigator.browserLanguage || "").replace("-", "_");
        return this.getForeignLocale_(a)
    }
    ;
    n.getLocalesFromAcceptLanguage_ = function(a) {
        return Na(a.split(","), function(a) {
            return Ca(a.replace("-", "_")).split(";")[0]
        })
    }
    ;
    n.getSanitizedLocale = function(a) {
        if (/^[\s\xa0]*$/.test(a == j ? "" : String(a)) || 2 > a.length)
            return j;
        this.originalLocale_ = a;
        var b = function(a) {
            a = a.toLowerCase();
            var b = this.toLowerCase();
            return 0 == a.lastIndexOf(b, 0)
        }
          , c = Ra(ua, b, a);
        if (!c)
            for (var e in va)
                if (Ra(va[e], b, a)) {
                    c = ta[e];
                    break
                }
        !c && 1 < a.indexOf("_") && (c = Ra(ua, b, a.split("_")[0]));
        return c
    }
    ;
    n.getForeignLocale_ = function(a) {
        a = this.getSanitizedLocale(a);
        return "en_US" != a && a || j
    }
    ;
    gd.$inject = ["$window", "applicationPath", "$http"];
    var hd = function(a) {
        this.keyMapId_ = a;
        this.deviceKeyMap_ = {};
        this.initialize_()
    };
    hd.prototype.initialize_ = function() {
        switch (this.keyMapId_) {
        case 7:
            this.deviceKeyMap_ = {
                917525: 177,
                917526: 176
            };
            break;
        case 1:
            this.deviceKeyMap_ = {
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
            this.deviceKeyMap_ = {
                917507: 19,
                917523: 227,
                917524: 228,
                917528: 250,
                917777: 27
            };
            break;
        case 3:
            this.deviceKeyMap_ = {
                195: 227,
                196: 228,
                425: 176,
                424: 177
            };
            break;
        case 4:
            this.deviceKeyMap_ = {
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
            this.deviceKeyMap_ = {
                415: 250,
                19: 19,
                413: 178,
                465: 228,
                412: 227,
                425: 176,
                463: 177
            };
            break;
        case 6:
            this.deviceKeyMap_ = {
                238: 227,
                239: 228
            }
        }
    }
    ;
    hd.prototype.mapKeyCode = function(a) {
        return this.deviceKeyMap_[a] || a
    }
    ;
    var id = function(a, b) {
        var c = a.environment || {};
        this.window_ = a;
        this.locale_ = b || {};
        this.deviceInterface = "TVHTML5";
        this.deviceInterfaceVersion = "4";
        this.platform = c.platform;
        this.deviceBrand = c.brand;
        this.deviceModel = c.model;
        this.browser = c.browser;
        this.browserVersion = c.browserVersion;
        this.os = c.os;
        this.osVersion = c.osVersion;
        this.network = c.network;
        this.country = c.country;
        this.startupTime = c.start_time;
        this.experiments = c.experiments || [];
        this.isIe = this.browserContains_("Explorer");
        this.isOpera = this.browserContains_("Opera");
        this.isFirefox = this.browserContains_("Firefox");
        this.isGecko = this.browserContains_("Mozilla") || this.isFirefox;
        this.isWebkit = this.browserContains_("Chrome");
        this.isDevice = this.deviceBrand || this.deviceModel;
        this.isWiiU = !!this.window_.nsf || "Nintendo" == this.deviceBrand && "WiiU" == this.deviceModel;
        this.isBoxee = "Boxee" == this.deviceBrand;
        this.isLgTv = "LG" == this.deviceBrand && "NetCast" == this.deviceModel;
        this.isSamsung = "Samsung" == this.deviceBrand;
        this.isPs3 = "Sony" == this.deviceBrand && "PS3" == this.deviceModel;
        this.isEureka = "Google" == this.deviceBrand && "Eureka" == this.deviceModel;
        this.isSonyCE = (this.isSony = "Sony" == this.deviceBrand) && !this.isPs3;
        this.isMstar = "TOSHIBA" == this.deviceBrand && ("58L7350U" == this.deviceModel || "50L7300U" == this.deviceModel || "32L4300U" == this.deviceModel);
        this.isLowPeformingSony = k;
        this.isPanasonic = "Panasonic" == this.deviceBrand;
        this.isLowPerformingPanasonicBDP = k;
        this.isPanasonicTV = this.isPanasonic && !this.isLowPerformingPanasonicBDP;
        this.isHumaxFreesat_ = "Humax" == this.deviceBrand && "Freesat" == this.deviceModel;
        this.isTelecomItalia_ = "TelecomItalia" == this.deviceBrand;
        this.isMotorolaFios_ = "MMI" == this.deviceBrand && "IPC1100" == this.deviceModel;
        this.isWebkit = this.isWebkit || this.isLgTv || this.isSamsung;
        this.isChromelessContext = this.is720pVideo = this.isEureka;
        this.supportsSearchSuggestion = this.isLowPeformingSearch = this.supportsAnimation = this.isLimitedGraphics = k;
        this.requiresSingleVideoTag = this.isOpera || this.isEureka || this.isSamsung;
        this.supportsCors = this.isOpera && !this.userAgentContains_("11.10");
        this.supportsPointer = this.isLgTv;
        this.supportsPairing = !this.isWiiU;
        this.devicePlugin_ = Ac("devicePlugin");
        this.reversedSelectionKeys = !!this.devicePlugin_ && this.devicePlugin_.crossMeansAdvance !== h && !this.devicePlugin_.crossMeansAdvance;
        this.cssPrefix = this.getCSSPrefix_();
        this.keyMap_ = j;
        this.styleName = "";
        this.platformUserName = this.getPlatformUserName_();
        this.platformUserIcon = this.getPlatformUserIcon_();
        this.platformLicenseArea = this.getPlatformLicenseArea_();
        this.bountyVendor = this.getBountyVendorName_();
        this.searchDelay = 1500;
        this.initialize_()
    };
    n = id.prototype;
    n.initialize_ = function() {
        var a = [];
        this.configureLimitedSettings_();
        this.deviceBrand && a.push(this.deviceBrand.toLowerCase());
        this.deviceModel && a.push(this.deviceModel.toLowerCase());
        this.isOpera && a.push("opera");
        this.isEureka && a.push("eureka");
        this.isMstar && a.push("mstar");
        this.reversedSelectionKeys && a.push("reversed-keys");
        this.locale_ && a.push("lang-" + this.locale_.language);
        this.isLimitedGraphics && a.push("limited-graphics");
        this.styleName = a.join(" ");
        this.keyMap_ = new hd(this.getKeyMapId_())
    }
    ;
    n.configureLimitedSettings_ = function() {
        this.isLowPerformingPanasonicBDP = this.isPanasonic && ("DMP-BD79_89" === this.deviceModel || this.userAgentContains_("BD 13S01") || this.userAgentContains_("BD 13S02") || this.userAgentContains_("BDT220"));
        this.isSony && (this.isLowPeformingSony = this.userAgentContains_("BDP") || this.userAgentContains_("CTV") || this.userAgentContains_("BRAVIA") && this.userAgentContains_("mips"));
        this.isLimitedGraphics = this.isLowPeformingSony || this.isLowPerformingPanasonicBDP;
        this.supportsAnimation = !this.isLimitedGraphics;
        this.isLowPeformingSearch = this.isLowPerformingPanasonicBDP;
        this.supportsSearchSuggestion = !this.isLowPerformingPanasonicBDP
    }
    ;
    n.getKeyMapId_ = function() {
        return this.isLgTv || this.isHumaxFreesat_ ? 1 : this.isSamsung ? 4 : this.isTelecomItalia_ ? 6 : this.isMotorolaFios_ ? 2 : this.isSonyCE ? 5 : "CHT" === this.deviceBrand ? 7 : this.isOpera ? 3 : 0
    }
    ;
    n.isExperimentActive = function(a) {
        return J(this.experiments, a)
    }
    ;
    n.browserContains_ = function(a) {
        return -1 != (this.browser || Gb() || "").indexOf(a)
    }
    ;
    n.userAgentContains_ = function(a) {
        return -1 != (Gb() || "").indexOf(a)
    }
    ;
    n.getCSSPrefix_ = function() {
        return this.isOpera ? "-O" : this.isFirefox ? "-moz" : this.isIe ? "-ms" : "-webkit"
    }
    ;
    n.asDeviceParameters = function() {
        return {
            c: this.deviceInterface,
            cbr: this.browser,
            cbrand: this.deviceBrand,
            cbrver: this.browserVersion,
            cmodel: this.deviceModel,
            cnetwork: this.network,
            cos: this.os,
            cosver: this.osVersion,
            cplatform: this.platform,
            cver: this.deviceInterfaceVersion
        }
    }
    ;
    n.getPlatformUserName_ = function() {
        return this.isPs3 && this.devicePlugin_ && this.devicePlugin_.psnOnlineName ? this.devicePlugin_.psnOnlineName : ""
    }
    ;
    n.getPlatformUserIcon_ = function() {
        return this.isPs3 && this.devicePlugin_ && this.devicePlugin_.psnAvatarURL ? this.devicePlugin_.psnAvatarURL : ""
    }
    ;
    n.getPlatformLicenseArea_ = function() {
        return this.isPs3 && this.devicePlugin_ ? this.devicePlugin_.licenseArea : -1
    }
    ;
    n.getBountyVendorName_ = function() {
        return this.isWiiU ? "NINTENDO" : j
    }
    ;
    n.getCrashCount = function() {
        return this.isPs3 && this.devicePlugin_ && this.devicePlugin_.programStartupCount ? Math.max(0, this.devicePlugin_.programStartupCount - this.devicePlugin_.programCleanExitCount) : 0
    }
    ;
    n.providePlatformData = function(a) {
        a.platformUserName = this.platformUserName;
        a.platformUserIcon = this.platformUserIcon
    }
    ;
    n.flushLocalStorage = function() {
        this.isPs3 && (this.devicePlugin_ && this.devicePlugin_.requestSavegameSync) && this.devicePlugin_.requestSavegameSync()
    }
    ;
    n.getApplicationKeyCode = function(a) {
        return this.keyMap_.mapKeyCode(a)
    }
    ;
    n.exitApplication = function() {
        this.isChromelessContext ? (this.window_.open("", "_self", ""),
        this.window_.close()) : this.isLgTv && this.window_.NetCastBack ? this.window_.NetCastBack() : this.isDevice && this.window_.close && this.window_.close()
    }
    ;
    id.$inject = ["$window", "locale"];
    var jd = function(a) {
        this.environment_ = a;
        this.localStorage = new mc("yt.leanback")
    };
    jd.prototype.set = function(a, b, c, e) {
        this.localStorage.set(a, b, c, e);
        this.environment_.flushLocalStorage()
    }
    ;
    jd.prototype.get = function(a, b) {
        return this.localStorage.get(a, b)
    }
    ;
    jd.prototype.remove = function(a) {
        this.localStorage.remove(a);
        this.environment_.flushLocalStorage()
    }
    ;
    jd.$inject = ["environmentModel"];
    var kd = function(a) {
        this.localStorage_ = a
    };
    kd.prototype.upgrade = function() {
        console.error("Migration.upgrade() should be overriden!")
    }
    ;
    var ld = function(a) {
        this.localStorage_ = a
    };
    F(ld, kd);
    ld.prototype.upgrade = function() {}
    ;
    var md = function(a) {
        this.localStorage_ = a
    };
    F(md, kd);
    md.prototype.upgrade = function() {}
    ;
    var nd = function(a) {
        this.localStorage_ = a
    };
    F(nd, kd);
    nd.prototype.upgrade = function() {}
    ;
    var od = function(a) {
        this.localStorage_ = a
    };
    F(od, kd);
    od.prototype.upgrade = function() {}
    ;
    var pd = function(a) {
        this.localStorage_ = a
    };
    F(pd, kd);
    pd.prototype.upgrade = function() {
        for (var a = qd, b = [a.CRASH_COUNT, a.DEVICE_STATISTICS, a.ACTIVITY_PATH, a.SPINNER_LOG], c = {}, e = b.length, f = 0; f < e; f++)
            c[b[f]] = this.localStorage_.get(b[f]);
        this.localStorage_.set(a.PRIVATE_DATA, c)
    }
    ;
    var P = function(a, b) {
        this.dialogType = this.templateUrl = this.title = this.className = "";
        this.isConfirmType = k;
        this.completeHandler = a || v;
        this.cancelHandler = b || v;
        this.completeButtonName = "[[OK|Standard button title in a dialog popup. Accepts changes made by a user.]]";
        this.cancelButtonName = "[[Cancel|Standard button title in a dialog popup. Usually closes the dialog without performing any action.]]"
    };
    var rd = function() {
        P.call(this);
        this.title = "[[Captions Settings|Settings screen where the user can choose the language of subtitles or turn them off.]]";
        this.widgetName = "yt:closedcaptions"
    };
    F(rd, P);
    var sd = function(a, b) {
        this.xhr_ = a;
        this.jsonp_ = b
    };
    n = sd.prototype;
    n.get = function(a, b, c, e) {
        b = dd(b);
        c = this.createXhr_(c, e);
        a = this.replaceKeys_(a, b);
        a = fd(a, b);
        c.send(a)
    }
    ;
    n.post = function(a, b, c, e, f) {
        var g = dd(b);
        c = this.createXhr_(c, e);
        b = y(b) ? b : ed(g);
        c.send(this.replaceKeys_(a, g), "POST", b, f)
    }
    ;
    n.jsonp = function(a, b, c, e, f) {
        b = dd(b);
        a = new this.jsonp_(this.replaceKeys_(a, b),f);
        a.setRequestTimeout(3E4);
        a.send(b, c, e)
    }
    ;
    n.createXhr_ = function(a, b) {
        var c = new this.xhr_;
        c.addEventListener("success", z(function(b) {
            b = b.target;
            a && a(this.transformResponse(b));
            b.dispose()
        }, this));
        c.addEventListener("error", function(a) {
            a = a.target;
            b && b(a.getLastError());
            a.dispose()
        });
        return c
    }
    ;
    n.transformResponse = function(a) {
        var b = a.getResponseHeader("content-type");
        return 0 <= b.indexOf("xml") ? a.getResponseXml() : 0 <= b.indexOf("html") ? a.getResponseText() : a.getResponseJson()
    }
    ;
    n.replaceKeys_ = function(a, b) {
        return a.replace(/:[a-zA-Z]*/g, function(a) {
            a = a.substr(1);
            var e = b[a];
            b[a] = j;
            return e || ""
        }).replace(/([^:])\/\//g, "$1/")
    }
    ;
    sd.$inject = ["xhrBackend", "jsonpBackend"];
    var td = function(a) {
        this.currentVersion_ = a.get("schema-version", i) || 0;
        this.upgradeToVersion_ = 5;
        this.localStorage_ = a;
        this.upgradeClasses_ = {
            "0": ld,
            1: md,
            2: nd,
            3: od,
            4: pd
        }
    }
      , qd = {
        ACCESS_TOKEN: "tv-access-token",
        ACTIVITY_PATH: "activity-path",
        CRASH_COUNT: "crash-count",
        DEVICE_RETENTION_PERMISSION: "device-retention-permission",
        DEVICE_STATISTICS: "device-statistics",
        SPINNER_LOG: "spinner_log",
        RECENT_SEARCHES: "recent-searches",
        REFRESH_TOKEN: "tv-refresh-token",
        REFRESH_TOKEN_V3: "leanback_oauth_renew",
        SAVED_SEARCHES: "saved-searches",
        SCHEMA_VERSION: "schema-version",
        PRIVATE_DATA: "private_data"
    };
    td.prototype.upgradeSchema = function() {
        for (var a; this.currentVersion_ < this.upgradeToVersion_; )
            a = new this.upgradeClasses_[this.currentVersion_](this.localStorage_),
            a.upgrade(),
            this.currentVersion_++,
            this.localStorage_.set("schema-version", this.currentVersion_)
    }
    ;
    td.$inject = ["localStorage"];
    var ud = function(a, b) {
        this.http_ = a;
        this.localStorage_ = b;
        this.clearDataListeners_ = [];
        var c = this.localStorage_.get("device-retention-permission");
        this.shouldRetainTrackingData = c ? c.enabled : i;
        this.privateStorageKey_ = "private_data"
    };
    n = ud.prototype;
    n.setDeviceRetentionPermission = function(a) {
        this.shouldRetainTrackingData = a;
        this.localStorage_.set("device-retention-permission", {
            enabled: a
        })
    }
    ;
    n.addClearDataListener = function(a) {
        this.clearDataListeners_.push(a)
    }
    ;
    n.clearPrivateData = function() {
        this.localStorage_.remove(this.privateStorageKey_);
        this.clearDataListeners_.forEach(function(a) {
            a()
        }, this)
    }
    ;
    n.saveToLocalStorage = function(a, b) {
        this.shouldRetainTrackingData && this.updateLocalStorage_(a, b)
    }
    ;
    n.getFromLocalStorage = function(a) {
        var b = this.localStorage_.get(this.privateStorageKey_);
        return b ? b[a] : j
    }
    ;
    n.removeFromLocalStorage = function(a) {
        this.localStorage_.remove(a)
    }
    ;
    n.updateLocalStorage_ = function(a, b) {
        var c = this.localStorage_.get(this.privateStorageKey_) || {};
        c[a] = b;
        this.localStorage_.set(this.privateStorageKey_, c)
    }
    ;
    n.storeModel = function(a, b) {
        this.saveToLocalStorage(a, ub(b))
    }
    ;
    n.loadModel = function(a) {
        a = this.getFromLocalStorage(a);
        return !/^[\s\xa0]*$/.test(a == j ? "" : String(a)) ? sb(a) : j
    }
    ;
    n.makeRequest = function(a, b, c, e) {
        this.shouldRetainTrackingData ? e ? this.http_.jsonp(a, b, c) : this.http_.get(a, b, c) : c && c()
    }
    ;
    ud.$inject = ["ytHttp", "localStorage"];
    var vd = function(a, b) {
        P.call(this, b);
        this.privateDataService = a;
        this.title = "[[Improve YouTube|Title for a dialog that indicates whether a user can enable or disable whether the application gathers statistics about them.]]";
        this.templateUrl = R.htmlPath + "/dialogs/device_retention_info.html";
        this.isConfirmType = i;
        this.className = "text-dialog";
        this.enableText_ = "[[Yes, I would like anonymous application usage to be included in tracking statistics to help YouTube provide a better experience. This does not release any of your personal information to YouTube.|Message explaining a user that statistics on this device will be gathered and sent to YouTube|16563440]]";
        this.disableText_ = "[[No, please turn off tracking statistics. This disables YouTube from including your YouTube use in answering the question \u201cHow many people in total have ever used YouTube?\u201c.|Message displayed when a user decides to turn off statistics gathering.|12600475]]"
    };
    F(vd, P);
    vd.prototype.getDisplayText = function() {
        return this.privateDataService.shouldRetainTrackingData ? this.disableText_ : this.enableText_
    }
    ;
    var wd = function(a, b) {
        P.call(this, j, b);
        this.title = "[[Submit a claim for:|Displayed in a dialog when a user decides to claim that a video infringes copyrights. Followed by a list of options.]]";
        this.templateUrl = R.htmlPath + "/dialogs/flag_claim.html";
        this.video = a;
        this.videoUrl = "youtu.be/" + this.video.videoId
    };
    F(wd, P);
    var xd = function() {
        P.call(this);
        this.title = "[[Flag This Video For:|Displayed in a dialog when a user decides to claim that a video is inappropriate. Followed by a list of options.]]";
        this.widgetName = "yt:flagoptions"
    };
    F(xd, P);
    var yd = function(a, b) {
        P.call(this, j, b);
        this.title = "[[To Flag this video|Tooltip helping a user to mark a video as inappropriate. Followed by a list of steps that needs to be performed.]]";
        this.templateUrl = R.htmlPath + "/dialogs/flag_video.html";
        this.video = a;
        this.videoUrl = "youtu.be/" + this.video.videoId
    };
    F(wd, P);
    var zd = function(a, b, c) {
        P.call(this, a, c);
        this.title = b ? b : "[[To sign in to YouTube on your TV...|Dialog title helping a user to sign in to YouTube via this application.]]";
        this.widgetName = "yt:logininfo"
    };
    F(zd, P);
    var Ad = function() {
        this.promotedVideoId = this.featuredPlaylistId = this.brandingBannerUrl = this.watermarkUrl = "";
        this.hasOverlay = k
    };
    var Bd = function(a, b) {
        this.serviceId = a;
        this.serviceQuery = b;
        this.displayName = this.title = "";
        this.lastUpdated = j;
        this.lastUpdatedThumbnail = "";
        this.subscriberCount = 0;
        this.username = this.userId = this.summary = "";
        this.unreadCount = 0;
        this.id = "";
        this.viewCount = this.videoCount = 0;
        this.branding = new Ad
    };
    var Cd = function(a, b) {
        P.call(this, b);
        this.title = "[[Sign Out?|Dialog title asking a user if she wants to sign out from her YouTube account via this application.]]";
        this.templateUrl = R.htmlPath + "/dialogs/logout_info.html";
        this.isConfirmType = i;
        this.user = a
    };
    F(Cd, P);
    var Dd = function(a, b, c) {
        P.call(this, b, c);
        this.title = "[[Playback Error.|Tooltip displayed when a video cannot be played.]]";
        this.templateUrl = R.htmlPath + "/dialogs/player_error_info.html";
        this.isConfirmType = i;
        this.className = "player-error-dialog";
        this.completeButtonName = "[[Next Video|Button title in a dialog popup. Proceeds playback to the next video.]]";
        this.cancelButtonName = "[[Back to Guide|Button title in a dialog popup. Navigates back to the main Guide page.]]";
        this.errorMessage = a
    };
    F(Dd, P);
    Dd.prototype.getErrorMessage = function() {
        return this.errorMessage
    }
    ;
    var Ed = function() {
        P.call(this);
        this.title = "[[Pair your mobile or tablet device...|Tooltip helping a user to connect their mobile device with the application.]]";
        this.widgetName = "yt:pair";
        this.type = "remote-pair"
    };
    F(Ed, P);
    var Fd = function(a) {
        a || (a = {});
        this.id = a.id;
        this.name = a.name;
        this.app = a.app;
        this.type = a.type || "REMOTE_CONTROL";
        this.username = a.user || "";
        this.connected = k
    };
    Fd.prototype.getData = function() {
        return {
            id: this.id,
            name: this.name,
            app: this.app,
            type: this.type,
            user: this.username
        }
    }
    ;
    Fd.prototype.displayString = function() {
        var a = this.name;
        0 < this.username.length && (a = a + " (" + this.username + ")");
        return Ja(a)
    }
    ;
    Fd.prototype.deviceClass = function() {
        var a = this.connected ? "connected" : "disconnected";
        return "LOUNGE_SCREEN" == this.type ? "mdx-screen " + a : this.app ? (0 < this.app.search(/tablet|ipad/g) ? "mdx-tablet " : "mdx-mobile ") + a : "mdx-unknown " + a
    }
    ;
    var Gd = function(a) {
        K.call(this);
        this.length_ = 0;
        this.items_ = [];
        a && this.push(a)
    };
    F(Gd, K);
    n = Gd.prototype;
    n.push = function(a) {
        this.applyValue_("push", a)
    }
    ;
    n.unshift = function(a) {
        this.applyValue_("unshift", a)
    }
    ;
    n.getItems = function() {
        return this.items_
    }
    ;
    n.getItemAt = function(a) {
        return this.items_[a]
    }
    ;
    n.setItems = function(a) {
        this.items_ = a.slice();
        this.length_ = a.length;
        this.triggerChanged_(this.items_)
    }
    ;
    n.setItemAt = function(a, b) {
        this.items_[a] = b;
        this.length_ = this.items_.length;
        this.triggerChanged_(b)
    }
    ;
    n.getLength = function() {
        return this.length_
    }
    ;
    n.slice = function(a, b) {
        var c;
        switch (arguments.length) {
        case 0:
            c = this.items_.slice();
            break;
        case 1:
            c = this.items_.slice(a);
            break;
        case 2:
            c = this.items_.slice(a, b)
        }
        return new Gd(c)
    }
    ;
    n.clear = function() {
        this.length_ = this.items_.length = 0;
        this.triggerChanged_()
    }
    ;
    n.sort = function(a) {
        var b = function(a, b) {
            return a - b
        };
        this.items_.sort(a || b);
        return this
    }
    ;
    n.triggerChanged_ = function(a) {
        this.trigger("items:changed", a)
    }
    ;
    n.applyValue_ = function(a, b) {
        var c = w(b) ? b : [b]
          , e = c.length;
        0 < e && (this.items_[a].apply(this.items_, c),
        this.length_ += e,
        this.triggerChanged_(b))
    }
    ;
    var Hd = function(a, b) {
        P.call(this, b);
        this.title = "[[Remove Paired Devices?|Dialog title asking a user for a confirmation to disconnect any mobile devices paired with the application]]";
        this.templateUrl = R.htmlPath + "/dialogs/remote_reset_info.html";
        this.isConfirmType = i;
        this.className = "remote-reset-dialog";
        this.type = "remote-reset";
        this.remoteService_ = a
    };
    F(Hd, P);
    Hd.prototype.getDevices = function() {
        return this.remoteService_.getPairedDevices()
    }
    ;
    var Id = function(a, b) {
        P.call(this);
        this.templateUrl = R.htmlPath + "/dialogs/scrollable_dialog.html";
        this.title = a || "";
        this.contentUrl = b || ""
    };
    F(Id, P);
    var Jd = function(a) {
        P.call(this, a);
        this.title = "[[Signed Out|Dialog title that informs the user that they are signed out of the application]]";
        this.templateUrl = R.htmlPath + "/dialogs/signed_out_info.html";
        this.isConfirmType = i;
        this.className = "text-dialog"
    };
    F(Jd, P);
    var Kd = function(a, b) {
        P.call(this);
        this.templateUrl = R.htmlPath + "/dialogs/simple_dialog.html";
        this.title = a || "";
        this.contentUrl = b || "";
        this.className = "text-dialog"
    };
    F(Kd, P);
    var Ld = function(a, b, c) {
        this.templateUrl = a;
        this.actionEventName = b;
        this.className = c && c.className ? c.className : "action-tile";
        this.actionData = c
    };
    var Nd = function(a, b) {
        b.forEach(function(b) {
            Md(b);
            a.prototype.__defineGetter__(b, function() {
                return this[b + "_"]
            });
            Md(b);
            var e = b + "_";
            a.prototype.__defineSetter__(b, function(a) {
                if (a !== this[e]) {
                    var g = this[e];
                    this[e] = a;
                    this.trigger && fa(this.trigger) && this.trigger(b + ":changed", a, g)
                }
            })
        })
    }
      , Md = function(a) {
        a.match(/^[a-zA-Z]+$/) || d("Invalid property name")
    };
    var Od = function(a, b) {
        Gd.call(this);
        this.distinctProperty_ = b;
        this.valuesMap_ = {};
        a && this.push(a)
    };
    F(Od, Gd);
    n = Od.prototype;
    n.clear = function() {
        this.valuesMap_ = {};
        Od.superClass_.clear.call(this)
    }
    ;
    n.slice = function(a, b) {
        return new Od(Od.superClass_.slice.call(this, a, b).getItems(),this.distinctProperty_)
    }
    ;
    n.push = function(a) {
        Od.superClass_.push.call(this, this.getDistinctValues_(a))
    }
    ;
    n.unshift = function(a) {
        Od.superClass_.unshift.call(this, this.getDistinctValues_(a))
    }
    ;
    n.getDistinctValues_ = function(a) {
        if (!this.distinctProperty_)
            return a;
        a = w(a) ? a : [a];
        return Ma(a, this.isDistinct_, this)
    }
    ;
    n.isDistinct_ = function(a) {
        if ((a = a && a[this.distinctProperty_]) && this.valuesMap_[a])
            return k;
        a && (this.valuesMap_[a] = i);
        return i
    }
    ;
    var S = function() {
        this.listType = "";
        this.watchables = new Od(j,"videoId")
    };
    S.prototype.getLength = function() {
        return this.watchables.getLength()
    }
    ;
    S.prototype.clone = function() {
        var a = new S;
        a.listType = this.listType;
        a.serviceId = this.serviceId;
        a.serviceQuery = this.serviceQuery;
        a.title = this.title;
        a.totalResults = this.totalResults;
        a.unreadCount = this.unreadCount;
        a.watchables = this.watchables.slice(0, this.watchables.getLength());
        return a
    }
    ;
    var Pd = function() {
        K.call(this);
        this.model_ = new S;
        this.absoluteIndex = this.activeIndex_ = 0;
        this.watchablesToAdd = new Gd;
        this.widgetName = "videotile"
    };
    F(Pd, K);
    Nd(Pd, ["activeIndex", "model"]);
    var Rd = function(a, b, c, e, f, g, l) {
        var m = new Pd;
        Qd(m, a, b, c, e, f, g, l);
        return m
    }
      , Qd = function(a, b, c, e, f, g, l, m) {
        a.service = b;
        a.model.title = c || "";
        a.model.feedIconUrl = e;
        a.model.serviceQuery = f || "";
        a.serviceParams = g || {};
        a.model.unreadCount = l || 0;
        a.widgetName = m || a.widgetName;
        return a
    };
    n = Pd.prototype;
    n.getLength = function() {
        return this.model ? this.model.watchables.getLength() : 0
    }
    ;
    n.copyFrom = function(a) {
        this.model.serviceQuery = a.model.serviceQuery;
        this.model.serviceId = a.model.serviceId;
        this.model.title = a.model.title;
        this.model.feedIconUrl = a.model.feedIconUrl;
        this.service = a.service;
        this.serviceParams = a.serviceParams;
        this.widgetName = a.widgetName;
        return this
    }
    ;
    n.equals = function(a) {
        return !(!a || !a.model || !this.model || !(a.model.length === this.model.length && a.model.serviceQuery === this.model.serviceQuery && a.model.serviceId === this.model.serviceId))
    }
    ;
    n.getCurrentItem = function() {
        return this.getItemAt(this.activeIndex)
    }
    ;
    n.load = function(a) {
        var b = {
            query: this.model.serviceQuery
        };
        angular.extend(b, this.serviceParams);
        this.service.load(b, z(function(b) {
            this.clear();
            var e = this.model.watchables;
            e.push(this.watchablesToAdd.getItems());
            e.push(b.watchables.getItems());
            a && a(b)
        }, this))
    }
    ;
    n.clear = function() {
        this.model.watchables.clear()
    }
    ;
    n.getItemAt = function(a) {
        return this.model && this.model.watchables ? this.model.watchables.getItemAt(a) : j
    }
    ;
    n.findIndexOfItem = function(a, b) {
        var c = -1;
        this.model && this.model.watchables && this.model.watchables.getItems().some(function(e, f) {
            if (e[a] === b)
                return c = f,
                i
        });
        return c
    }
    ;
    n.getWatchables = function() {
        return this.model.watchables
    }
    ;
    n.offsetAbsoluteIndexBy = function(a) {
        this.absoluteIndex += a
    }
    ;
    n.shouldLoadPageByOffset = function() {
        return k
    }
    ;
    n.setActiveIndex = function(a) {
        this.activeIndex = a
    }
    ;
    var Sd = function() {
        this.rows = [];
        this.currentRowIndex = 0
    };
    Sd.prototype.getCurrentRow = function() {
        return this.rows ? this.rows[this.currentRowIndex] : j
    }
    ;
    Sd.prototype.getRows = function() {
        return this.rows
    }
    ;
    Sd.prototype.getLength = function() {
        return this.rows.length
    }
    ;
    Sd.prototype.addRow = function(a) {
        this.rows.push(a)
    }
    ;
    var Td = function() {
        this.loadedPages_ = [];
        Pd.call(this)
    };
    F(Td, Pd);
    var Ud = function(a, b, c, e, f, g) {
        var l = new Td;
        Qd(l, a, b, c, e, f, g);
        return l
    };
    n = Td.prototype;
    n.clear = function() {
        0 !== this.model.watchables.getLength() && (this.calibrateActiveIndex_(),
        this.loadedPages_.forEach(function(a) {
            a.collection = j
        }, this),
        Pd.prototype.clear.call(this))
    }
    ;
    n.calibrateActiveIndex_ = function() {
        for (var a = this.getCurrentPageIndex_() - 2; 0 <= a; --a)
            this.loadedPages_[a].collection && (this.activeIndex -= this.loadedPages_[a].collectionLength)
    }
    ;
    n.arePagesLoaded_ = function(a) {
        return a.every(function(a) {
            a = this.loadedPages_[a.index];
            return !(!a || !a.collection || a.error)
        }, this)
    }
    ;
    n.load = function(a) {
        var b = this.getPagesToLoad_();
        if (this.arePagesLoaded_(b))
            a();
        else {
            var c;
            b.forEach(function(e) {
                c = this.loadedPages_[e.index];
                (!c || !c.collection || c.error) && this.loadPage_(e, b, a)
            }, this)
        }
    }
    ;
    n.loadPage_ = function(a, b, c) {
        var e = {
            query: this.model.serviceQuery
        };
        e["start-index"] = 25 * a.index + 1;
        e["max-results"] = 25;
        angular.extend(e, this.serviceParams);
        this.service.load(e, z(this.pageLoadedHandler, this, a, b, c), z(this.pageErrorHandler_, this, a, b, c))
    }
    ;
    n.pageLoadedHandler = function(a, b, c, e) {
        a.collection = e;
        a.collectionLength = e.watchables.getLength();
        this.loadedPages_[a.index] = a;
        a.error = k;
        if (this.arePagesLoaded_(b)) {
            var f = this.model.watchables;
            if (0 === f.getLength())
                b.forEach(function(a) {
                    f.push(a.collection.watchables.getItems())
                });
            else {
                var g = this.getCurrentPageIndex_();
                b.forEach(function(a) {
                    a.index >= g ? f.push(a.collection.watchables.getItems()) : (f.unshift(a.collection.watchables.getItems()),
                    this.activeIndex += a.collectionLength)
                }, this)
            }
            c()
        }
    }
    ;
    n.pageErrorHandler_ = function(a, b, c) {
        this.pageLoadedHandler(a, b, c, new S);
        this.loadedPages_[a.index].error = i;
        b.some(function(a) {
            return this.loadedPages_[a.index].error
        }, this) && c()
    }
    ;
    n.getCurrentPageIndex_ = function() {
        if (0 === this.absoluteIndex)
            return 0;
        for (var a = 0, b = this.loadedPages_.length, c, e = 0; e < b; ++e)
            if (c = this.loadedPages_[e])
                if (a += c.collectionLength,
                this.absoluteIndex < a)
                    return c.index;
        return 0
    }
    ;
    n.getCurrentPage_ = function() {
        return this.loadedPages_[this.getCurrentPageIndex_()]
    }
    ;
    n.getPagesToLoad_ = function() {
        return [this.getPage_(-1), this.getPage_(), this.getPage_(1)].filter(function(a) {
            return 0 <= a.index && (a.error || !a.collection)
        })
    }
    ;
    n.getPage_ = function(a) {
        a = this.getCurrentPageIndex_() + (a || 0);
        var b = this.loadedPages_[a];
        return b ? b : {
            collection: j,
            collectionLength: 0,
            index: a
        }
    }
    ;
    n.shouldLoadPageByOffset = function(a) {
        return 0 < a ? this.activeIndex === this.getLength() - 4 : 4 === this.activeIndex && 4 < this.absoluteIndex
    }
    ;
    var Vd = function() {
        this.seeds_ = [];
        Td.call(this)
    };
    F(Vd, Td);
    Vd.prototype.addSeed = function(a) {
        this.seeds_.push(a)
    }
    ;
    Vd.prototype.pageLoadedHandler = function(a, b, c, e) {
        var f = z(function() {
            this.getWatchables().unshift(this.seeds_);
            c()
        }, this);
        Vd.superClass_.pageLoadedHandler.call(this, a, b, f, e)
    }
    ;
    var Wd = function(a, b, c, e, f, g, l) {
        Sd.call(this);
        this.authService_ = a;
        this.featuredService_ = b;
        this.personalDataService_ = c;
        this.csiService_ = e;
        this.settingsRowService_ = f;
        this.searchRowService_ = g;
        this.searchHistoryService_ = l;
        this.loginSettingsRow_ = j
    };
    F(Wd, Sd);
    n = Wd.prototype;
    n.load = function(a) {
        this.authService_.getAccessToken(z(function(b) {
            var c = z(function(c) {
                this.browseModelLoadedHandler_(c, b);
                a && a(b)
            }, this);
            b ? this.personalDataService_.load(b, c) : this.featuredService_.load({}, c)
        }, this))
    }
    ;
    n.browseModelLoadedHandler_ = function(a, b) {
        this.rows = a;
        this.loginSettingsRow_ || (this.loginSettingsRow_ = this.settingsRowService_.getRowDefinition());
        this.searchRow_ || (this.searchRow_ = this.searchRowService_.getRowDefinition());
        this.loginSettingsRow_.clear();
        this.rows.push(this.searchRow_);
        this.rows.push(this.loginSettingsRow_);
        this.csiService_.tick("browse_data", "bdr");
        this.csiService_.report("browse_data", {
            auth: !!b
        })
    }
    ;
    n.loadSettings = function() {
        this.loginSettingsRow_ && this.loginSettingsRow_.load()
    }
    ;
    n.attemptStoreSearchQuery = function(a) {
        if (a && a.service && ("searchService" === a.service.id || a instanceof Vd))
            this.searchHistoryService_.storeQuery(a.model.serviceQuery, a.getItemAt(0), a.model.totalResults),
            this.updateSearchRow_()
    }
    ;
    n.clearSearches = function() {
        this.searchHistoryService_.clear();
        this.updateSearchRow_()
    }
    ;
    n.updateSearchRow_ = function() {
        this.searchRow_.load();
        this.searchRow_.setActiveIndex(0)
    }
    ;
    Wd.$inject = "authService featuredService personalDataService csiService settingsRowService searchRowService searchHistoryService".split(" ");
    var Xd = function(a, b, c) {
        this.text = a;
        this.payload = angular.extend({
            type: b
        }, c)
    };
    var Yd = function() {
        K.call(this)
    };
    F(Yd, K);
    Nd(Yd, ["message"]);
    var Zd = function(a, b, c) {
        this.serviceId = a;
        this.serviceQuery = b;
        this.listType = c;
        this.listId = this.getListId();
        this.actionEventName = "request-playback";
        this.authorImageUrl = this.activityDescription = "";
        this.className = "video-tile";
        this.duration = 0;
        this.errorCode = j;
        this.imageUrls = {};
        this.imageUrl = R.htmlPath + "/../img/no_thumbnail.jpg";
        this.isHD = this.isClaimed = k;
        this.videoId = this.title = "";
        this.viewCount = 0;
        this.viewCountLabel = ""
    };
    Zd.prototype.getListId = function() {
        return xa[this.listType] ? this.listType : this.listType + (this.serviceQuery || "")
    }
    ;
    var $d = function() {
        this.startTime = 0;
        this.autoPlay = k
    };
    $d.prototype.build = function(a, b, c) {
        var e = {
            list: this.video.listId,
            start: this.startTime,
            video_id: this.video.videoId
        };
        this.autoPlay && (e.autoplay = 1);
        a && (e.oauth_token = a);
        b && (e.feature = b);
        c && c.length && (e.ytr = c.join(","));
        return e
    }
    ;
    $d.prototype.update = function(a, b, c) {
        this.reset();
        this.video = a;
        this.startTime = b || 0;
        this.autoPlay = !!c
    }
    ;
    $d.prototype.reset = function() {
        this.videoId = "";
        this.startTime = 0;
        this.autoPlay = k
    }
    ;
    var ae = function(a, b) {
        this.serviceId = a;
        this.serviceQuery = b;
        this.summary = this.id = this.author = this.videoId = this.title = "";
        this.videoCount = "0"
    };
    var be = function(a, b) {
        this.top = a || 0;
        this.left = b || 0
    };
    var ce = function() {
        K.call(this)
    };
    F(ce, K);
    Nd(ce, "currentTime duration percentageLoadedStyle percentagePlayedStyle percentageLoaded percentagePlayed timeLeft".split(" "));
    var de = function() {
        this.imageClass = this.animationClass = this.className = this.message = this.id = "";
        this.showProgress = k;
        this.progress = 0
    };
    var ee = function() {
        K.call(this);
        this.percentageDisplayed = 0
    };
    F(ee, K);
    Nd(ee, ["percentageScrolled"]);
    var fe = function(a) {
        Sd.call(this);
        this.searchService_ = a
    };
    F(fe, Sd);
    fe.prototype.load = function() {
        this.rows.push(Ud(this.searchService_, "", "icon-search"))
    }
    ;
    fe.$inject = ["searchService"];
    var ge = function(a) {
        this.http_ = a;
        this.suggestions_ = {}
    };
    ge.prototype.get = function(a, b) {
        var c = a.replace(/ /g, "_");
        if (this.suggestions_[c])
            b(this.suggestions_[c].slice());
        else {
            var e = {
                q: a
            }
              , f = z(function(e) {
                var f = a.split("").pop() || "";
                this.suggestions_[c] = this.cleanResults_(e.results, f);
                for (var m in e.next_predictions)
                    this.suggestions_[c + m.toUpperCase()] = this.cleanResults_(e.next_predictions[m], f);
                b(this.suggestions_[c].slice())
            }, this);
            this.http_.jsonp("/quicksuggest_ajax", e, f, j, "jsonp")
        }
    }
    ;
    ge.prototype.cleanResults_ = function(a, b) {
        var c = [];
        a.forEach(function(a) {
            a = a.toUpperCase();
            switch (a) {
            case " ":
                c.push("_");
                break;
            case "":
            case b:
                break;
            default:
                c.push(a)
            }
        }, this);
        return c
    }
    ;
    ge.$inject = ["ytHttp"];
    var he = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$")
      , je = function(a) {
        if (ie) {
            ie = k;
            var b = p.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = je(c)[3] || j) && decodeURIComponent(c)) && c != b.hostname)
                    ie = i,
                    d(Error())
            }
        }
        return a.match(he)
    }
      , ie = M
      , ke = function(a) {
        if (a[1]) {
            var b = a[0]
              , c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)),
            a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = h)
        }
        return a.join("")
    }
      , le = function(a, b, c) {
        if (w(b))
            for (var e = 0; e < b.length; e++)
                le(a, String(b[e]), c);
        else
            b != j && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }
      , me = function(a, b) {
        for (var c in b)
            le(c, b[c], a);
        return a
    };
    var ne = function(a, b) {
        var c = a.split(b)
          , e = c.shift();
        c.forEach(function(a) {
            e += a && a.length ? a.charAt(0).toUpperCase() + a.slice(1) : a
        });
        return e
    }
      , oe = function(a, b) {
        if (isNaN(a))
            return "0%";
        b = isNaN(b) ? 100 : b;
        return Math.round(a * b) + "%"
    };
    var pe = function() {
        this.modelClass = Array
    };
    pe.prototype.parse = function(a, b) {
        if (b) {
            var c = j, e = j, f;
            for (f in b)
                e = ne(f, "_"),
                c = this.getParserMethod(e),
                c.call(this, a, e, b[f])
        }
        return a
    }
    ;
    pe.prototype.getParserMethod = function(a) {
        a = "parse" + (a && a.length ? a.charAt(0).toUpperCase() + a.slice(1) : a);
        return this[a] ? this[a] : this.defaultParserMethod
    }
    ;
    pe.prototype.defaultParserMethod = function(a, b, c) {
        b in a && (a[b] = this.getDataValue(c));
        return a
    }
    ;
    pe.prototype.getDataValue = function(a) {
        return a
    }
    ;
    var qe = function(a, b, c, e, f, g, l, m) {
        this.id = a;
        this.path = "";
        this.http = c;
        this.environment = e;
        this.parser = f;
        this.paramKey = g;
        this.defaultParams = l || {};
        this.locale = m
    };
    n = qe.prototype;
    n.getBaseUrl = function() {
        return ""
    }
    ;
    n.getFullUrl = function(a) {
        var b = this.getBaseUrl() + this.path;
        return b
    }
    ;
    n.getDefaultTransportMethod = function() {
        return "GET"
    }
    ;
    n.load = function(a, b) {
        return this.doLoad_(a, b)
    }
    ;
    n.doLoad_ = function(a, b, c, e) {
        var f = {};
        this.mixinLocale_(this.defaultParams);
        this.mixinRegion_(this.defaultParams);
        B(f, this.defaultParams);
        a && B(f, a);
        a = e ? e : this.createModel_();
        this.loadFromTransport(a, f, b, c);
        return a
    }
    ;
    n.createModel_ = function() {
        return new this.parser.modelClass
    }
    ;
    n.loadFromTransport = function(a, b, c, e) {
        c = c || v;
        var f = z(function(b) {
            this.parser.parse(a, b);
            c(a)
        }, this)
          , g = z(function() {
            c(a)
        }, this);
        "GET" === this.getDefaultTransportMethod() ? this.http.get(this.getBaseUrl() + this.path, b, f, e || g) : "JSONP" === this.getDefaultTransportMethod() && this.http.jsonp(this.getBaseUrl() + this.path, b, f, e || g)
    }
    ;
    n.rewriteParameterKey_ = function(a, b, c) {
        c[a] && (c[b] = c[a],
        delete c[a]);
        return c
    }
    ;
    n.mixinLocale_ = function(a) {
        a && "" === a.hl && (a.hl = this.locale.isoLocale,
        a.override_hl = 1)
    }
    ;
    n.mixinRegion_ = function(a) {
        a && ("" === a.regionId && this.environment.country && J(na, this.environment.country)) && (a.regionId = this.environment.country)
    }
    ;
    var re = function(a, b, c, e, f, g, l) {
        var m = {
            client: "youtube",
            ds: "yt"
        };
        l && angular.extend(m, l);
        qe.call(this, a, b, c, e, f, g, m)
    };
    F(re, qe);
    re.prototype.load = function(a, b) {
        var c = []
          , e = {};
        B(e, this.defaultParams);
        a && (a = this.rewriteParameterKey_("query", "q", a),
        B(e, a));
        this.http.jsonp(this.getFullUrl(), e, z(function(a) {
            a = a[1];
            for (var g = RegExp("^" + e.q, "i"), l = a.length, m = 0; m < l; ++m)
                g.test(a[m][0]) && c.push(a[m][0].toUpperCase());
            b && b(c)
        }, this));
        return c
    }
    ;
    re.prototype.getBaseUrl = function() {
        return "//clients1.google.com"
    }
    ;
    var se = function(a, b, c, e, f, g, l) {
        K.call(this);
        this.searchService_ = e;
        this.quickSuggestService_ = l;
        this.suggestionService_ = f;
        this.environment_ = b;
        this.debugCallService_ = c;
        this.defaultSearchDelay_ = b.searchDelay || 1500;
        this.searchDelay_ = g.createDelay(this.executeSearch, this.defaultSearchDelay_, this);
        this.titlePrefix_ = a("[[Results for|Tooltip for search results title. Followed by an actual search query]]")();
        this.query_ = "";
        this.results = j;
        this.suggestions_ = [];
        this.quickSuggestions_ = [];
        this.requestPending = k;
        this.enableQuickSuggest = !this.environment_.isExperimentActive(927900) && !this.environment_.isLgTv
    };
    F(se, K);
    Nd(se, ["query", "suggestions", "quickSuggestions"]);
    n = se.prototype;
    n.reset = function() {
        this.query = "";
        this.resetSuggestions();
        this.resetQuickSuggestions()
    }
    ;
    n.resetSuggestions = function() {
        this.suggestions.length = 0;
        this.trigger("suggestions:changed", this.suggestions)
    }
    ;
    n.resetQuickSuggestions = function() {
        this.quickSuggestions.length = 0;
        this.trigger("quickSuggestions:changed", this.quickSuggestions)
    }
    ;
    n.resetSearchResults = function() {
        this.results = new S
    }
    ;
    n.executeSearch = function() {
        this.query && (this.requestPending = i,
        this.searchService_.load({
            query: this.query
        }, this.getResultHandler_(this.query)))
    }
    ;
    n.isEmpty = function() {
        return !this.query
    }
    ;
    n.getResultHandler_ = function(a) {
        return z(function(b) {
            this.requestPending = k;
            this.query && this.query !== a || (b.serviceQuery = a,
            b.title = b.getLength() ? this.titlePrefix_ + ' "' + a + '"' : "",
            this.results = b,
            this.trigger("results:changed", b))
        }, this)
    }
    ;
    n.setQuery = function(a, b, c) {
        a != this.query && (a && (a = a.replace("\n", "")),
        this.query = (a = this.debugCallService_.process(a) ? "" : a) || "",
        this.resetQuickSuggestions(),
        this.resetSuggestions(),
        this.resetSearchResults(),
        c || this.fetchQuickSuggestions_(),
        !b && this.environment_.supportsSearchSuggestion && this.fetchSuggestions_(),
        this.searchDelay_.start())
    }
    ;
    n.addCharacters = function(a) {
        this.setQuery(this.query + a)
    }
    ;
    n.backspace = function() {
        this.query.length && this.setQuery(this.query.slice(0, -1), i, i)
    }
    ;
    n.fetchSuggestions_ = function() {
        this.query && this.suggestionService_.load({
            query: this.query
        }, z(function(a) {
            this.suggestions = a
        }, this))
    }
    ;
    n.fetchQuickSuggestions_ = function() {
        this.query && this.enableQuickSuggest && this.quickSuggestService_.get(this.query_, z(function(a) {
            this.quickSuggestions = a
        }, this))
    }
    ;
    se.$inject = "$interpolate environmentModel debugCallService searchService suggestionService timeService quickSuggestService".split(" ");
    var te = function(a, b) {
        this.templateUrl = a;
        this.data = b || {}
    };
    var ue = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    };
    var ve = function(a) {
        this.id = ue();
        this.firstActive = this.recentActive = a.startupTime;
        this.prevActive = 0;
        this.firstActiveGeo = a.country;
        this.prevLogin = this.firstLogin = this.recentLogin = this.loginState = 0;
        this.uga = "";
        this.cumulativeAppStarts = 1;
        this.cumulativeComments = this.cumulativeFavorites = this.cumulativeSubscriptions = this.cumulativePlaybacks = this.cumulativeViews = 0
    };
    ve.prototype.toJson = function() {
        return ub({
            id: this.id,
            recentActive: this.recentActive,
            firstActive: this.firstActive,
            prevActive: this.prevActive,
            firstActiveGeo: this.firstActiveGeo,
            loginState: this.loginState,
            recentLogin: this.recentLogin,
            firstLogin: this.firstLogin,
            prevLogin: this.prevLogin,
            uga: this.uga,
            cumulativeAppStarts: this.cumulativeAppStarts,
            cumulativeViews: this.cumulativeViews,
            cumulativePlaybacks: this.cumulativePlaybacks,
            cumulativeSubscriptions: this.cumulativeSubscriptions,
            cumulativeFavorites: this.cumulativeFavorites,
            cumulativeComments: this.cumulativeComments
        })
    }
    ;
    var we = function() {
        this.buffer_ = "";
        this.transliterated = []
    };
    we.prototype.getJoinedTransliteration = function() {
        return this.transliterated.join("")
    }
    ;
    we.prototype.setBuffer = function(a) {
        this.buffer_ = a
    }
    ;
    we.prototype.getBuffer = function() {
        return this.buffer_
    }
    ;
    var xe = function() {
        this.collection_ = new qb(25,i);
        this.watchedRows_ = {}
    };
    xe.prototype.load = function(a, b) {
        var c = new S;
        c.watchables.push(this.collection_.getValues());
        b && b(c);
        return c
    }
    ;
    xe.prototype.getWatchedRow = function(a) {
        return this.watchedRows_[a]
    }
    ;
    xe.prototype.addVideo = function(a, b) {
        this.collection_.set(a.videoId, a);
        if (b) {
            var c = new Td;
            c.setActiveIndex(b.activeIndex);
            this.watchedRows_[a.videoId] = c.copyFrom(b)
        }
    }
    ;
    xe.prototype.getLength = function() {
        return this.collection_.getCount()
    }
    ;
    var ye = function(a, b, c, e, f, g, l, m) {
        Sd.call(this);
        this.angularHelper_ = a;
        this.brandingService_ = b;
        this.playlistService_ = c;
        this.relatedVideosService_ = e;
        this.userUploadsService_ = f;
        this.vevoPlaylist_ = g;
        this.watchHistoryModel_ = l;
        this.playerVariablesModel_ = m;
        this.watchHistoryRow_ = this.createWatchHistoryRow_()
    };
    F(ye, Sd);
    n = ye.prototype;
    n.getCurrentItem = function() {
        var a = this.getCurrentRow();
        return a ? a.getCurrentItem() : j
    }
    ;
    n.createWatchHistoryRow_ = function() {
        var a = Rd(this.watchHistoryModel_, "[[Current Watch History|Displays previously watched videos.]]", "icon-hourglass");
        a.model.listType = "HL";
        return a
    }
    ;
    n.setCurrentVideo = function(a, b, c, e) {
        this.currentVideo = a;
        this.playerVariablesModel_.update(this.currentVideo, c, e);
        var f = b === this.watchHistoryRow_;
        f && (b = this.watchHistoryModel_.getWatchedRow(a.videoId));
        c = this.getUserUploadsRow_(a.channel);
        if (!b || "[[VEVO Featured Playlist|Title for playlist that contains video from VEVO. VEVO is a music brand name.]]" === b.model.title || b.service === this.relatedVideosService_ && !(b instanceof Vd))
            c.watchablesToAdd.push(a),
            b = c;
        e = [];
        this.rows.length = 1;
        b !== this.currentRow_ && (this.currentRow_ = this.rows[0] = b,
        this.currentRow_.load(v));
        f || this.updateActiveIndex(this.currentVideo.videoId);
        f = this.getRelatedVideosRow_(a);
        e.push(f);
        e.push(c);
        this.attemptFetchBrandingRow_(a);
        0 < this.watchHistoryModel_.getLength() && e.push(this.getHistoryRow());
        this.cleanWatchModel_(e, this.rows);
        this.resetActiveIndices([f, this.watchHistoryRow_]);
        this.angularHelper_.getActiveScope().$emit("active-item-changed", a);
        return b
    }
    ;
    n.updateHistory = function() {
        var a = this.currentRow_;
        this.currentVideo && a && this.watchHistoryModel_.addVideo(this.currentVideo, a)
    }
    ;
    n.clearCurrentVideo = function() {
        this.currentVideo = j
    }
    ;
    n.cleanWatchModel_ = function(a, b) {
        for (var c, e = a.length, f = 0; f < e; ++f)
            (c = a[f]) && (b.some(function(a) {
                return c.model.title === a.model.title
            }) || b.push(c))
    }
    ;
    n.getUserUploadsRow_ = function(a) {
        return Ud(this.userUploadsService_, "[[Uploads for channel:|sWqBGwb2WdBVvjLS_6hayw]] " + a.username, a.imageUrl, a.username)
    }
    ;
    n.getRelatedVideosRow_ = function(a) {
        return Ud(this.relatedVideosService_, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", "icon-related", a.videoId)
    }
    ;
    n.attemptFetchBrandingRow_ = function(a) {
        a.isClaimed && this.brandingService_.loadWithQuery(a.channel.username, z(function(b) {
            if (b.featuredPlaylistId.length) {
                var c = Ud(this.vevoPlaylist_, "[[VEVO Featured Playlist|Title for playlist that contains video from VEVO. VEVO is a music brand name.]]", "icon-playlozenge");
                c.serviceQuery = b.featuredPlaylistId;
                c.serviceParams = {
                    videoId: a.videoId,
                    playlistId: b.featuredPlaylistId
                };
                this.rows.push(c)
            }
        }, this))
    }
    ;
    n.getPlayerVariables = function() {
        return this.playerVariablesModel_
    }
    ;
    n.updateActiveIndex = function(a) {
        a = this.currentRow_.findIndexOfItem("videoId", a);
        this.currentRow_.setActiveIndex(Math.max(a, 0))
    }
    ;
    n.getHistoryRow = function() {
        return this.watchHistoryRow_
    }
    ;
    n.getVideoCollection = function() {
        return this.currentRow_ ? this.currentRow_.model : j
    }
    ;
    n.getPlayingRow_ = function() {
        return this.rows[0]
    }
    ;
    n.getNextVideo = function() {
        var a = this.getPlayingRow_()
          , b = a.findIndexOfItem("videoId", this.currentVideo.videoId);
        -1 == b && (b = a.activeIndex);
        return b < a.getLength() - 1 ? a.getItemAt(++b) : j
    }
    ;
    n.next = function(a) {
        var b = this.getNextVideo();
        if (b) {
            var c = this.getPlayingRow_();
            this.setCurrentVideo(b, c, 0, a);
            c.offsetAbsoluteIndexBy(1);
            c.shouldLoadPageByOffset(1) && c.load(v);
            return this.currentVideo.videoId
        }
        return ""
    }
    ;
    n.previous = function() {
        var a = this.currentRow_
          , b = a.findIndexOfItem("videoId", this.currentVideo.videoId);
        return 0 < b ? (this.setCurrentVideo(a.getItemAt(--b), a),
        a.offsetAbsoluteIndexBy(-1),
        a.shouldLoadPageByOffset(-1) && a.load(v),
        this.currentVideo.videoId) : ""
    }
    ;
    n.resetActiveIndices = function(a) {
        (a || [this.getHistoryRow()]).forEach(function(a) {
            a.setActiveIndex(0)
        });
        this.currentRowIndex = 0
    }
    ;
    ye.$inject = "angularHelper brandingService playlistService relatedVideosService userUploadsService vevoPlaylistService watchHistoryModel playerVariablesModel".split(" ");
    var ze = function(a, b) {
        var c = b ? a.substr(2) : a;
        return "//i" + (Ka(c) % 4 + 1) + ".ytimg.com/i/" + c + "/1.jpg"
    };
    var Ae = function() {
        this.modelClass = Array
    };
    F(Ae, pe);
    n = Ae.prototype;
    n.parseFeed = function(a, b, c) {
        return this.parse(a, c)
    }
    ;
    n.parseOpenSearch$totalResults = function(a, b, c) {
        a.totalResults = this.getDataValue(c);
        return a
    }
    ;
    n.parseOpenSearch$startIndex = function(a, b, c) {
        a.startIndex = this.getDataValue(c);
        return a
    }
    ;
    n.parseOpenSearch$itemsPerPage = function(a, b, c) {
        a.itemsPerPage = this.getDataValue(c);
        return a
    }
    ;
    n.parseEntry = function(a, b, c) {
        a.entries = c;
        return a
    }
    ;
    n.getDataEntry = function(a) {
        return w(a) ? a[0] : a
    }
    ;
    n.getDataValue = function(a) {
        return (a = this.getDataEntry(a)) && a.$t ? a.$t : ""
    }
    ;
    n.generateVideoThumbnailUrl = function(a, b) {
        return "//i" + (Ka(a) % 4 + 1) + ".ytimg.com/vi/" + a + "/" + b + ".jpg"
    }
    ;
    n.generateChannelImageUrl = function(a, b) {
        return ze(a, b)
    }
    ;
    var Be = function(a) {
        this.modelClass = Array;
        this.modelClass = S;
        this.locale_ = a
    };
    F(Be, Ae);
    n = Be.prototype;
    n.parseTitle = function(a, b, c) {
        a.title = this.getDataValue(c);
        return a
    }
    ;
    n.parseLogo = function(a, b, c) {
        a.imageUrl = this.getDataValue(c);
        return a
    }
    ;
    n.parseEntry = function(a, b, c) {
        w(c) ? c.forEach(function(b) {
            this.pushVideo(a, b)
        }, this) : this.pushVideo(a, c);
        return a
    }
    ;
    n.pushVideo = function(a, b) {
        var c = this.parseVideoFromEntry(a, b);
        a && (a.watchables && c) && a.watchables.push(c)
    }
    ;
    n.parseVideoFromEntry = function(a, b) {
        var c = new Zd(a.serviceId,a.serviceQuery,a.listType)
          , e = new Bd(a.serviceId,a.serviceQuery);
        if (this.isBatchFailedFetch_(b))
            return this.fillBatchFailedFetchEntry_(c, b),
            this.fillBatchFailedFetchChannel_(e, b),
            c.channel = e,
            c;
        c.channel = this.getVideoChannel(e, b);
        c.duration = this.getVideoDuration(b);
        c.durationLabel = this.locale_.formatTime(c.duration);
        c.imageUrls = this.getVideoImageUrls(b);
        c.imageUrl = c.imageUrls.hqdefault;
        c.isHD = this.getVideoQuality(b);
        c.isClaimed = this.getClaimedStatus(b);
        c.title = this.getVideoName(b);
        c.videoId = this.getVideoId(b);
        c.viewCount = this.getViewCount(b);
        c.viewCountLabel = this.locale_.formatNumber(c.viewCount);
        c.uploadedDate = this.getUploadedDate(b);
        e = new Date(Date.parse(c.uploadedDate));
        c.uploadedDateLabel = this.locale_.formatDate(e);
        b.app$control && b.app$control.yt$state && (e = w(b.app$control.yt$state) ? b.app$control.yt$state : [b.app$control.yt$state],
        I(e, function(a) {
            "limitedSyndication" != a.reasonCode && "restricted" == a.name && (c.errorCode = a.reasonCode)
        }, this));
        return c
    }
    ;
    n.getUploadedDate = function(a) {
        return a && a.media$group && a.media$group.yt$uploaded ? new Date(this.getDataValue(a.media$group.yt$uploaded)) : j
    }
    ;
    n.getVideoId = function(a) {
        return a && a.media$group && a.media$group.yt$videoid && a.media$group.yt$videoid.$t ? a.media$group.yt$videoid.$t : ""
    }
    ;
    n.getVideoName = function(a) {
        return a && a.title && a.title.$t ? a.title.$t : ""
    }
    ;
    n.getVideoDuration = function(a) {
        return a.media$group && a.media$group.yt$duration && a.media$group.yt$duration.seconds ? parseInt(a.media$group.yt$duration.seconds, 10) : 0
    }
    ;
    n.getVideoImageUrls = function(a) {
        a = this.getVideoId(a);
        return {
            "default": this.generateVideoThumbnailUrl(a, "default"),
            mqdefault: this.generateVideoThumbnailUrl(a, "mqdefault"),
            hqdefault: this.generateVideoThumbnailUrl(a, "hqdefault"),
            sddefault: this.generateVideoThumbnailUrl(a, "sddefault")
        }
    }
    ;
    n.getVideoQuality = function(a) {
        return !!a.yt$hd
    }
    ;
    n.getClaimedStatus = function(a) {
        return !!a.yt$claimed
    }
    ;
    n.getVideoChannel = function(a, b) {
        b.media$group && b.media$group.yt$uploaderId && (a.userId = b.media$group.yt$uploaderId.$t);
        b.media$group && b.media$group.media$credit && (a.username = this.getDataEntry(b.media$group.media$credit).$t,
        a.displayName = this.getDataEntry(b.media$group.media$credit).yt$display);
        a.userId && (a.imageUrl = this.generateChannelImageUrl(a.userId, i));
        return a
    }
    ;
    n.getViewCount = function(a) {
        return a.yt$statistics && a.yt$statistics.viewCount ? a.yt$statistics.viewCount : 0
    }
    ;
    n.isBatchFailedFetch_ = function(a) {
        return a.batch$status && "200" != a.batch$status.code
    }
    ;
    n.fillBatchFailedFetchEntry_ = function(a, b) {
        a.videoId = b.batch$id.$t;
        a.errorCode = "private"
    }
    ;
    n.fillBatchFailedFetchChannel_ = function(a, b) {
        a.videoId = b.batch$id.$t
    }
    ;
    Be.$inject = ["locale"];
    var Ce = function(a) {
        Be.call(this, a)
    };
    F(Ce, Be);
    n = Ce.prototype;
    n.parseVideoFromEntry = function(a, b) {
        for (var c = this.getEntryLinks(b), e = c.length, f = 0; f < e; ++f) {
            var g = c[f];
            if (this.isVideoSchema(g))
                return c = Be.prototype.parseVideoFromEntry.call(this, a, g.entry[0]),
                c.activityDescription = this.getActivityDescription(b),
                c.authorName = this.getAuthorName(b),
                e = this.getAuthorId(b),
                c.authorImageUrl = this.generateChannelImageUrl(e, k),
                c
        }
        return j
    }
    ;
    n.getAuthorId = function(a) {
        return a.author && a.author[0] ? this.getDataValue(a.author[0].yt$userId) : ""
    }
    ;
    n.getAuthorName = function(a) {
        return a.author && a.author[0] ? this.getDataValue(a.author[0].name) : ""
    }
    ;
    n.getVideoId = function(a) {
        return a && a.id && a.id.$t ? a.id.$t : ""
    }
    ;
    n.getVideoDuration = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration, 10) : 0
    }
    ;
    n.isVideoSchema = function(a) {
        return a.rel && "http://gdata.youtube.com/schemas/2007#video" === a.rel
    }
    ;
    n.getEntryLinks = function(a) {
        return a && a.link ? a.link : []
    }
    ;
    n.getActivityDescription = function(a) {
        var b = a.author && this.getDataValue(a.author[0].name)
          , c = a.category && a.category[1] && a.category[1].term;
        return b && c && ya[c.toUpperCase()] || this.getDataValue(a.title)
    }
    ;
    Ce.$inject = ["locale"];
    var De = function() {
        this.modelClass = Array;
        this.modelClass = Ad
    };
    F(De, pe);
    n = De.prototype;
    n.parseEntry = function(a, b, c) {
        a.watermarkUrl = this.getBrandingWatermarkUrl(c);
        a.brandingBannerUrl = this.getBrandingBannerUrl(c);
        a.featuredPlaylistId = this.getBrandingFeaturedPlaylistId(c);
        a.promotedVideoId = this.getBrandingPromotedVideoId(c);
        return a
    }
    ;
    n.getBrandingWatermarkUrl = function(a) {
        return a && a.yt$option ? this.getOptionValue(a.yt$option, "device_watchpage.watermark.image.url") : ""
    }
    ;
    n.getBrandingBannerUrl = function(a) {
        return a && a.yt$option ? this.getOptionValue(a.yt$option, "generictv_watchpage.banner.image.url") : ""
    }
    ;
    n.getBrandingFeaturedPlaylistId = function(a) {
        return a && a.yt$option ? this.getOptionValue(a.yt$option, "watchpage.global.featured_playlist.id") : ""
    }
    ;
    n.getBrandingPromotedVideoId = function(a) {
        return a && a.yt$option ? this.getOptionValue(a.yt$option, "channel.featured_video_module.video_id.string") : ""
    }
    ;
    n.getOptionValue = function(a, b) {
        for (var c = a.length, e, f = 0; f < c; ++f)
            if (e = a[f],
            e.name === b)
                return e.$t;
        return ""
    }
    ;
    var Ee = function() {
        this.modelClass = Array;
        this.modelClass = S
    };
    F(Ee, pe);
    Ee.prototype.parseChannels = function(a, b, c) {
        c.forEach(function(b) {
            a.watchables.push(this.createChannel(a, b))
        }, this);
        return a
    }
    ;
    Ee.prototype.createChannel = function(a, b) {
        var c = new Bd(a.serviceId,a.serviceQuery);
        this.parse(c, b);
        c.userId = b.user_id;
        c.username = b.username;
        var e;
        (e = c.lastUpdatedThumbnail) ? (e = e.split("/"),
        e = (e = e[e.length - 2]) ? e : "") : e = "";
        c.videoId = e;
        c.serviceId = "channelSearchService";
        c.serviceQuery = c.username;
        c.imageUrl = c.imageUrl;
        c.title = c.title || c.displayName || c.username;
        return c
    }
    ;
    Ee.prototype.parseProfileImageUrl = function(a, b, c) {
        a.imageUrl = c;
        return a
    }
    ;
    var Fe = function() {
        this.modelClass = Array
    };
    F(Fe, Ae);
    n = Fe.prototype;
    n.parseEntry = function(a, b, c) {
        c.forEach(function(b) {
            a.push(this.parseChannelFromEntry(a, b))
        }, this);
        return a
    }
    ;
    n.parseChannelFromEntry = function(a, b) {
        var c = new Bd(a.serviceId,a.serviceQuery);
        this.parse(c, b);
        c.username = this.getChannelUsername(b);
        c.summary = this.getChannelSummary(b);
        c.userId = this.getChannelUserId(b);
        c.imageUrl = this.generateChannelImageUrl(c.userId, i);
        return c
    }
    ;
    n.getChannelUsername = function(a) {
        return a && a.author && a.author[0] ? this.getDataValue(a.author[0].name) : ""
    }
    ;
    n.getChannelUserId = function(a) {
        return a && a.author && a.author[0] ? this.getDataValue(a.author[0].yt$userId) : ""
    }
    ;
    n.getChannelSummary = function(a) {
        return a && a.summary ? this.getDataValue(a.summary) : ""
    }
    ;
    var Ge = function() {
        this.modelClass = Array;
        this.modelClass = S
    };
    F(Ge, Ae);
    Ge.prototype.parseEntry = function(a, b, c) {
        c.forEach(function(b) {
            var c = new Bd(a.serviceId,a.serviceQuery);
            this.parse(c, b);
            a.watchables.push(this.parseChannelFromEntry_(c, b))
        }, this);
        return a
    }
    ;
    Ge.prototype.parseChannelFromEntry_ = function(a, b) {
        a.displayName = this.getChannelDisplayName_(b) || a.username;
        a.id = this.getChannelId_(b);
        return a
    }
    ;
    Ge.prototype.getChannelDisplayName_ = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.getDataValue(a.content.entry[0].title) : ""
    }
    ;
    Ge.prototype.getChannelId_ = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.getDataValue(a.content.entry[0].yt$channelId) : ""
    }
    ;
    var He = function(a) {
        this.modelClass = Array;
        this.injector_ = a;
        this.feedIconClassNames_ = {
            FLtrends: "icon-trends",
            SFon_the_web: "icon-trends",
            FLYTOTVAllMusic: "icon-music",
            FLYTOTVmusic: "icon-music",
            STmost_popular_Music: "icon-music",
            FLYTOTVgaming: "icon-gaming",
            STmost_popular_Games: "icon-gaming",
            FLYTOTVsports: "icon-sport",
            STmost_popular_Sports: "icon-sports",
            FLYTOTVfilm: "icon-film",
            STmost_popular_Film: "icon-film",
            STmost_popular_Entertainment: "icon-entertainment",
            STmost_popular_Comedy: "icon-lol",
            STmost_popular_News: "icon-news",
            STmost_popular_People: "icon-people",
            STmost_popular_Tech: "icon-rocket",
            STmost_popular_Howto: "icon-lips",
            STmost_popular_Education: "icon-education",
            STmost_popular_Animals: "icon-pets",
            STmost_popular: "icon-star"
        }
    };
    F(He, pe);
    He.prototype.parseSets = function(a, b, c) {
        c.forEach(function(b) {
            this.loadFeaturedSet_(a, b)
        }, this);
        return a
    }
    ;
    He.prototype.loadFeaturedSet_ = function(a, b) {
        var c = b.title
          , e = b.gdata_list_id
          , f = e.substr(0, 2)
          , g = e.substr(2);
        try {
            var l = this.injector_.get(f)
              , m = Ud(l, c || "", this.getImageForFeed_(e, g), g);
            a.push(m)
        } catch (s) {}
    }
    ;
    He.prototype.getImageForFeed_ = function(a, b) {
        var c = this.feedIconClassNames_[a];
        !c && a.match(/^UU.+/) && (c = ze(b, k));
        return c
    }
    ;
    He.$inject = ["$injector"];
    var Ie = function(a) {
        Be.call(this, a)
    };
    F(Ie, Be);
    Ie.prototype.parseVideoFromEntry = function(a, b) {
        var c = Be.prototype.parseVideoFromEntry.call(this, a, b);
        c.activityDescription = "[[{{username}} has uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]";
        c.authorName = c.channel.displayName;
        return c
    }
    ;
    Ie.$inject = ["locale"];
    var Je = function() {
        this.modelClass = Array;
        this.modelClass = S
    };
    F(Je, Ae);
    n = Je.prototype;
    n.parseEntry = function(a, b, c) {
        c.forEach(function(b) {
            var c = new ae(a.serviceId,a.serviceQuery);
            this.parse(c, b);
            a.watchables.push(this.parsePlaylistFromEntry_(c, b))
        }, this);
        return a
    }
    ;
    n.parsePlaylistFromEntry_ = function(a, b) {
        a.id = this.getPlaylistId_(b);
        a.serviceQuery = a.id;
        a.imageUrl = this.getFirstVideoThumbnail_(b);
        a.videoCount = this.getPlaylistVideoCount_(b);
        a.author = this.getPlaylistAuthor_(b);
        a.imageUrl && (a.videoId = this.getFirstVideoIdFromThumbnail_(a));
        return a
    }
    ;
    n.getPlaylistId_ = function(a) {
        if (a.yt$playlistId)
            return this.getDataValue(a.yt$playlistId)
    }
    ;
    n.getFirstVideoThumbnail_ = function(a) {
        return a.media$group && a.media$group.media$thumbnail ? a.media$group.media$thumbnail[0].url : ""
    }
    ;
    n.getPlaylistVideoCount_ = function(a) {
        if (a.yt$countHint)
            return this.getDataValue(a.yt$countHint)
    }
    ;
    n.getPlaylistAuthor_ = function(a) {
        if (a.author && a.author[0].name)
            return this.getDataValue(a.author[0].name)
    }
    ;
    n.getFirstVideoIdFromThumbnail_ = function(a) {
        a = a.imageUrl.split("/");
        return a[a.length - 2]
    }
    ;
    var Ke = function() {
        this.modelClass = Array;
        this.modelClass = S
    };
    F(Ke, Ae);
    n = Ke.prototype;
    n.parseEntry = function(a, b, c) {
        c.forEach(function(b) {
            var c = new Bd(a.serviceId,a.serviceQuery);
            this.parse(c, b);
            a.watchables.push(this.parseChannelFromEntry_(c, b))
        }, this);
        return a
    }
    ;
    n.parseChannelFromEntry_ = function(a, b) {
        a.id = this.getChannelId_(b);
        a.unreadCount = this.getUnreadCount_(b);
        a.displayName = this.getChannelDisplayName_(b) || a.username;
        return a
    }
    ;
    n.getChannelDisplayName_ = function(a) {
        return a && a.yt$username && a.yt$username.display ? a.yt$username.display : ""
    }
    ;
    n.getChannelId_ = function(a) {
        return this.getDataValue(a.yt$channelId)
    }
    ;
    n.getUnreadCount_ = function(a) {
        return this.getDataValue(a.yt$unreadCount) || 0
    }
    ;
    var Le = function() {
        this.modelClass = Bd
    };
    n = Le.prototype;
    n.parse = function(a, b) {
        if (!b || !b.entry)
            return a;
        var c = b.entry;
        a.username = this.getUserName(c);
        a.displayName = this.getDisplayName(c) || this.getTitle(c);
        a.imageUrl = this.getUserThumbnail(c);
        a.subscriberCount = this.getSubscriberCount(c);
        a.viewCount = this.getTotalUploadViews(c);
        a.title = this.getTitle(c);
        a.userId = this.getUserId(c);
        return a
    }
    ;
    n.getUserName = function(a) {
        if (a.yt$username)
            return a.yt$username.$t
    }
    ;
    n.getDisplayName = function(a) {
        if (a.yt$username)
            return a.yt$username.display
    }
    ;
    n.getUserId = function(a) {
        if (a.yt$userId)
            return a.yt$userId.$t
    }
    ;
    n.getTitle = function(a) {
        if (a.title)
            return a.title.$t
    }
    ;
    n.getUserThumbnail = function(a) {
        if (a.media$thumbnail)
            return a.media$thumbnail.url
    }
    ;
    n.getSubscriberCount = function(a) {
        return a.yt$statistics ? a.yt$statistics.subscriberCount : 0
    }
    ;
    n.getTotalUploadViews = function(a) {
        return a.yt$statistics ? a.yt$statistics.totalUploadViews : 0
    }
    ;
    var Me = function(a) {
        this.modelClass = Array;
        this.modelClass = Zd;
        this.locale_ = a
    };
    F(Me, Ae);
    n = Me.prototype;
    n.parseEntry = function(a, b, c) {
        return this.parseVideoFromEntry(a, c)
    }
    ;
    n.parseVideoFromEntry = function(a, b) {
        a.description = this.getVideoDescription(b);
        var c = this.getVideoLikes(b)
          , e = this.getVideoDislikes(b)
          , f = c + e;
        0 < f ? (a.dislikesPercent = e / f,
        a.likesPercent = c / f) : (a.dislikesPercent = 0,
        a.likesPercent = 0);
        a.dislikes = e;
        a.dislikesLabel = this.locale_.formatNumber(a.dislikes);
        a.dislikesStyle = {
            width: oe(a.dislikesPercent)
        };
        a.likes = c;
        a.likesLabel = this.locale_.formatNumber(a.likes);
        a.likesStyle = {
            width: oe(a.likesPercent)
        };
        return a
    }
    ;
    n.getVideoDislikes = function(a) {
        if (a && a.yt$rating && a.yt$rating.numDislikes)
            return parseInt(a.yt$rating.numDislikes, 10)
    }
    ;
    n.getVideoLikes = function(a) {
        if (a && a.yt$rating && a.yt$rating.numLikes)
            return parseInt(a.yt$rating.numLikes, 10)
    }
    ;
    n.getVideoDescription = function(a) {
        return a && a.media$group && a.media$group.media$description ? this.getDataValue(a.media$group.media$description) : j
    }
    ;
    Me.$inject = ["locale"];
    var Ne = function() {};
    n = Ne.prototype;
    n.disposed_ = k;
    n.isDisposed = function() {
        return this.disposed_
    }
    ;
    n.getDisposed = Ne.prototype.isDisposed;
    n.dispose = function() {
        this.disposed_ || (this.disposed_ = i,
        this.disposeInternal())
    }
    ;
    n.registerDisposable = function(a) {
        this.dependentDisposables_ || (this.dependentDisposables_ = []);
        this.dependentDisposables_.push(a)
    }
    ;
    n.addOnDisposeCallback = function(a, b) {
        this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []);
        this.onDisposeCallbacks_.push(z(a, b))
    }
    ;
    n.disposeInternal = function() {
        this.dependentDisposables_ && Oe.apply(j, this.dependentDisposables_);
        if (this.onDisposeCallbacks_)
            for (; this.onDisposeCallbacks_.length; )
                this.onDisposeCallbacks_.shift()()
    }
    ;
    var Pe = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    }
      , Oe = function(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var e = arguments[b];
            da(e) ? Oe.apply(j, e) : Pe(e)
        }
    };
    var T = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    n = T.prototype;
    n.disposeInternal = function() {}
    ;
    n.dispose = function() {}
    ;
    n.propagationStopped_ = k;
    n.defaultPrevented = k;
    n.returnValue_ = i;
    n.stopPropagation = function() {
        this.propagationStopped_ = i
    }
    ;
    n.preventDefault = function() {
        this.defaultPrevented = i;
        this.returnValue_ = k
    }
    ;
    var Qe = function(a) {
        Qe[" "](a);
        return a
    };
    Qe[" "] = v;
    var Re = !L || O(9)
      , Se = !L || O(9)
      , Te = L && !N("9");
    !M || N("528");
    Lb && N("1.9b") || L && N("8") || Kb && N("9.5") || M && N("528");
    Lb && !N("8") || L && N("9");
    var Ue = function(a, b) {
        a && this.init(a, b)
    };
    F(Ue, T);
    var Ve = [1, 4, 2];
    n = Ue.prototype;
    n.target = j;
    n.relatedTarget = j;
    n.offsetX = 0;
    n.offsetY = 0;
    n.clientX = 0;
    n.clientY = 0;
    n.screenX = 0;
    n.screenY = 0;
    n.button = 0;
    n.keyCode = 0;
    n.charCode = 0;
    n.ctrlKey = k;
    n.altKey = k;
    n.shiftKey = k;
    n.metaKey = k;
    n.platformModifierKey = k;
    n.event_ = j;
    n.init = function(a, b) {
        var c = this.type = a.type;
        T.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (Lb) {
                var f;
                a: {
                    try {
                        Qe(e.nodeName);
                        f = i;
                        break a
                    } catch (g) {}
                    f = k
                }
                f || (e = j)
            }
        } else
            "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        this.offsetX = M || a.offsetX !== h ? a.offsetX : a.layerX;
        this.offsetY = M || a.offsetY !== h ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== h ? a.clientX : a.pageX;
        this.clientY = a.clientY !== h ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.platformModifierKey = Fb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.event_ = a;
        a.defaultPrevented && this.preventDefault();
        delete this.propagationStopped_
    }
    ;
    n.isButton = function(a) {
        return Re ? this.event_.button == a : "click" == this.type ? 0 == a : !!(this.event_.button & Ve[a])
    }
    ;
    n.isMouseActionButton = function() {
        return this.isButton(0) && !(M && Fb && this.ctrlKey)
    }
    ;
    n.stopPropagation = function() {
        Ue.superClass_.stopPropagation.call(this);
        this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = i
    }
    ;
    n.preventDefault = function() {
        Ue.superClass_.preventDefault.call(this);
        var a = this.event_;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = k,
        Te)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    n.getBrowserEvent = function() {
        return this.event_
    }
    ;
    n.disposeInternal = function() {}
    ;
    var We = function() {}
      , Xe = 0;
    n = We.prototype;
    n.key = 0;
    n.removed = k;
    n.callOnce = k;
    n.init = function(a, b, c, e, f, g) {
        fa(a) ? this.isFunctionListener_ = i : a && a.handleEvent && fa(a.handleEvent) ? this.isFunctionListener_ = k : d(Error("Invalid listener argument"));
        this.listener = a;
        this.proxy = b;
        this.src = c;
        this.type = e;
        this.capture = !!f;
        this.handler = g;
        this.callOnce = k;
        this.key = ++Xe;
        this.removed = k
    }
    ;
    n.handleEvent = function(a) {
        return this.isFunctionListener_ ? this.listener.call(this.handler || this.src, a) : this.listener.handleEvent.call(this.listener, a)
    }
    ;
    var Ye = {}
      , Ze = {}
      , $e = {}
      , af = {}
      , bf = function(a, b, c, e, f) {
        if (w(b)) {
            for (var g = 0; g < b.length; g++)
                bf(a, b[g], c, e, f);
            return j
        }
        return cf(a, b, c, k, e, f)
    }
      , cf = function(a, b, c, e, f, g) {
        b || d(Error("Invalid event type"));
        f = !!f;
        var l = Ze;
        b in l || (l[b] = {
            count_: 0,
            remaining_: 0
        });
        l = l[b];
        f in l || (l[f] = {
            count_: 0,
            remaining_: 0
        },
        l.count_++);
        var l = l[f], m = ja(a), s;
        l.remaining_++;
        if (l[m]) {
            s = l[m];
            for (var r = 0; r < s.length; r++)
                if (l = s[r],
                l.listener == c && l.handler == g) {
                    if (l.removed)
                        break;
                    e || (s[r].callOnce = k);
                    return s[r].key
                }
        } else
            s = l[m] = [],
            l.count_++;
        var A = df
          , u = Se ? function(a) {
            return A.call(u.src, u.key, a)
        }
        : function(a) {
            a = A.call(u.src, u.key, a);
            if (!a)
                return a
        }
          , r = u;
        r.src = a;
        l = new We;
        l.init(c, r, a, b, f, g);
        l.callOnce = e;
        c = l.key;
        r.key = c;
        s.push(l);
        Ye[c] = l;
        $e[m] || ($e[m] = []);
        $e[m].push(l);
        a.addEventListener ? (a == p || !a.customEvent_) && a.addEventListener(b, r, f) : a.attachEvent(b in af ? af[b] : af[b] = "on" + b, r);
        return c
    }
      , ef = function(a, b, c, e, f) {
        if (w(b)) {
            for (var g = 0; g < b.length; g++)
                ef(a, b[g], c, e, f);
            return j
        }
        return cf(a, b, c, i, e, f)
    }
      , ff = function(a, b, c, e, f) {
        if (w(b)) {
            for (var g = 0; g < b.length; g++)
                ff(a, b[g], c, e, f);
            return j
        }
        e = !!e;
        a = gf(a, b, e);
        if (!a)
            return k;
        for (g = 0; g < a.length; g++)
            if (a[g].listener == c && a[g].capture == e && a[g].handler == f)
                return hf(a[g].key);
        return k
    }
      , hf = function(a) {
        if (!Ye[a])
            return k;
        var b = Ye[a];
        if (b.removed)
            return k;
        var c = b.src
          , e = b.type
          , f = b.proxy
          , g = b.capture;
        c.removeEventListener ? (c == p || !c.customEvent_) && c.removeEventListener(e, f, g) : c.detachEvent && c.detachEvent(e in af ? af[e] : af[e] = "on" + e, f);
        c = ja(c);
        $e[c] && (f = $e[c],
        Sa(f, b),
        0 == f.length && delete $e[c]);
        b.removed = i;
        if (b = Ze[e][g][c])
            b.needsCleanup_ = i,
            jf(e, g, c, b);
        delete Ye[a];
        return i
    }
      , jf = function(a, b, c, e) {
        if (!e.locked_ && e.needsCleanup_) {
            for (var f = 0, g = 0; f < e.length; f++)
                e[f].removed ? e[f].proxy.src = j : (f != g && (e[g] = e[f]),
                g++);
            e.length = g;
            e.needsCleanup_ = k;
            0 == g && (delete Ze[a][b][c],
            Ze[a][b].count_--,
            0 == Ze[a][b].count_ && (delete Ze[a][b],
            Ze[a].count_--),
            0 == Ze[a].count_ && delete Ze[a])
        }
    }
      , gf = function(a, b, c) {
        var e = Ze;
        return b in e && (e = e[b],
        c in e && (e = e[c],
        a = ja(a),
        e[a])) ? e[a] : j
    }
      , lf = function(a, b, c, e, f) {
        var g = 1;
        b = ja(b);
        if (a[b]) {
            a.remaining_--;
            a = a[b];
            a.locked_ ? a.locked_++ : a.locked_ = 1;
            try {
                for (var l = a.length, m = 0; m < l; m++) {
                    var s = a[m];
                    s && !s.removed && (g &= kf(s, f) !== k)
                }
            } finally {
                a.locked_--,
                jf(c, e, b, a)
            }
        }
        return Boolean(g)
    }
      , kf = function(a, b) {
        a.callOnce && hf(a.key);
        return a.handleEvent(b)
    }
      , df = function(a, b) {
        if (!Ye[a])
            return i;
        var c = Ye[a]
          , e = c.type
          , f = Ze;
        if (!(e in f))
            return i;
        var f = f[e], g, l;
        if (!Se) {
            g = b || ba("window.event");
            var m = i in f
              , s = k in f;
            if (m) {
                if (0 > g.keyCode || g.returnValue != h)
                    return i;
                a: {
                    var r = k;
                    if (0 == g.keyCode)
                        try {
                            g.keyCode = -1;
                            break a
                        } catch (A) {
                            r = i
                        }
                    if (r || g.returnValue == h)
                        g.returnValue = i
                }
            }
            r = new Ue;
            r.init(g, this);
            g = i;
            try {
                if (m) {
                    for (var u = [], D = r.currentTarget; D; D = D.parentNode)
                        u.push(D);
                    l = f[i];
                    l.remaining_ = l.count_;
                    for (var x = u.length - 1; !r.propagationStopped_ && 0 <= x && l.remaining_; x--)
                        r.currentTarget = u[x],
                        g &= lf(l, u[x], e, i, r);
                    if (s) {
                        l = f[k];
                        l.remaining_ = l.count_;
                        for (x = 0; !r.propagationStopped_ && x < u.length && l.remaining_; x++)
                            r.currentTarget = u[x],
                            g &= lf(l, u[x], e, k, r)
                    }
                } else
                    g = kf(c, r)
            } finally {
                u && (u.length = 0)
            }
            return g
        }
        e = new Ue(b,this);
        return g = kf(c, e)
    }
      , mf = 0;
    var nf = function() {};
    F(nf, Ne);
    n = nf.prototype;
    n.customEvent_ = i;
    n.parentEventTarget_ = j;
    n.getParentEventTarget = function() {
        return this.parentEventTarget_
    }
    ;
    n.setParentEventTarget = function(a) {
        this.parentEventTarget_ = a
    }
    ;
    n.addEventListener = function(a, b, c, e) {
        bf(this, a, b, c, e)
    }
    ;
    n.removeEventListener = function(a, b, c, e) {
        ff(this, a, b, c, e)
    }
    ;
    n.dispatchEvent = function(a) {
        var b = a.type || a
          , c = Ze;
        if (b in c) {
            if (y(a))
                a = new T(a,this);
            else if (a instanceof T)
                a.target = a.target || this;
            else {
                var e = a;
                a = new T(b,this);
                jb(a, e)
            }
            var e = 1, f, c = c[b], b = i in c, g;
            if (b) {
                f = [];
                for (g = this; g; g = g.getParentEventTarget())
                    f.push(g);
                g = c[i];
                g.remaining_ = g.count_;
                for (var l = f.length - 1; !a.propagationStopped_ && 0 <= l && g.remaining_; l--)
                    a.currentTarget = f[l],
                    e &= lf(g, f[l], a.type, i, a) && a.returnValue_ != k
            }
            if (k in c)
                if (g = c[k],
                g.remaining_ = g.count_,
                b)
                    for (l = 0; !a.propagationStopped_ && l < f.length && g.remaining_; l++)
                        a.currentTarget = f[l],
                        e &= lf(g, f[l], a.type, k, a) && a.returnValue_ != k;
                else
                    for (f = this; !a.propagationStopped_ && f && g.remaining_; f = f.getParentEventTarget())
                        a.currentTarget = f,
                        e &= lf(g, f, a.type, k, a) && a.returnValue_ != k;
            a = Boolean(e)
        } else
            a = i;
        return a
    }
    ;
    n.disposeInternal = function() {
        nf.superClass_.disposeInternal.call(this);
        var a = 0;
        if (this != j) {
            var b = ja(this);
            if ($e[b])
                for (var b = $e[b], c = b.length - 1; 0 <= c; c--)
                    hf(b[c].key),
                    a++
        } else
            cb(Ye, function(b, c) {
                hf(c);
                a++
            });
        this.parentEventTarget_ = j
    }
    ;
    var qf = function(a, b) {
        this.interval_ = a || 1;
        this.timerObject_ = b || of;
        this.boundTick_ = z(this.tick_, this);
        this.last_ = E()
    };
    F(qf, nf);
    qf.prototype.enabled = k;
    var of = p.window;
    n = qf.prototype;
    n.timer_ = j;
    n.getInterval = function() {
        return this.interval_
    }
    ;
    n.setInterval = function(a) {
        this.interval_ = a;
        this.timer_ && this.enabled ? (this.stop(),
        this.start()) : this.timer_ && this.stop()
    }
    ;
    n.tick_ = function() {
        if (this.enabled) {
            var a = E() - this.last_;
            0 < a && a < 0.8 * this.interval_ ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.dispatchTick(),
            this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_),
            this.last_ = E()))
        }
    }
    ;
    n.dispatchTick = function() {
        this.dispatchEvent("tick")
    }
    ;
    n.start = function() {
        this.enabled = i;
        this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_),
        this.last_ = E())
    }
    ;
    n.stop = function() {
        this.enabled = k;
        this.timer_ && (this.timerObject_.clearTimeout(this.timer_),
        this.timer_ = j)
    }
    ;
    n.disposeInternal = function() {
        qf.superClass_.disposeInternal.call(this);
        this.stop();
        delete this.timerObject_
    }
    ;
    var rf = function(a, b, c) {
        fa(a) ? c && (a = z(a, c)) : a && "function" == typeof a.handleEvent ? a = z(a.handleEvent, a) : d(Error("Invalid listener argument"));
        return 2147483647 < b ? -1 : of.setTimeout(a, b || 0)
    };
    var sf = function(a, b, c) {
        this.listener_ = a;
        this.interval_ = b || 0;
        this.handler_ = c;
        this.callback_ = z(this.doAction_, this)
    };
    F(sf, Ne);
    n = sf.prototype;
    n.id_ = 0;
    n.disposeInternal = function() {
        sf.superClass_.disposeInternal.call(this);
        this.stop();
        delete this.listener_;
        delete this.handler_
    }
    ;
    n.start = function(a) {
        this.stop();
        this.id_ = rf(this.callback_, q(a) ? a : this.interval_)
    }
    ;
    n.stop = function() {
        this.isActive() && of.clearTimeout(this.id_);
        this.id_ = 0
    }
    ;
    n.fire = function() {
        this.stop();
        this.doAction_()
    }
    ;
    n.fireIfActive = function() {
        this.isActive() && this.fire()
    }
    ;
    n.isActive = function() {
        return 0 != this.id_
    }
    ;
    n.doAction_ = function() {
        this.id_ = 0;
        this.listener_ && this.listener_.call(this.handler_)
    }
    ;
    var tf = function(a, b, c) {
        this.listener_ = a;
        this.interval_ = b;
        this.handler_ = c;
        this.callback_ = z(this.onTimer_, this)
    };
    F(tf, Ne);
    n = tf.prototype;
    n.shouldFire_ = k;
    n.pauseCount_ = 0;
    n.timer_ = j;
    n.fire = function() {
        !this.timer_ && !this.pauseCount_ ? this.doAction_() : this.shouldFire_ = i
    }
    ;
    n.stop = function() {
        this.timer_ && (of.clearTimeout(this.timer_),
        this.timer_ = j,
        this.shouldFire_ = k)
    }
    ;
    n.pause = function() {
        this.pauseCount_++
    }
    ;
    n.resume = function() {
        this.pauseCount_--;
        !this.pauseCount_ && (this.shouldFire_ && !this.timer_) && (this.shouldFire_ = k,
        this.doAction_())
    }
    ;
    n.disposeInternal = function() {
        tf.superClass_.disposeInternal.call(this);
        this.stop()
    }
    ;
    n.onTimer_ = function() {
        this.timer_ = j;
        this.shouldFire_ && !this.pauseCount_ && (this.shouldFire_ = k,
        this.doAction_())
    }
    ;
    n.doAction_ = function() {
        this.timer_ = rf(this.callback_, this.interval_);
        this.listener_.call(this.handler_)
    }
    ;
    var uf = function() {};
    n = uf.prototype;
    n.createDelay = function(a, b, c) {
        return new sf(a,b,c)
    }
    ;
    n.createThrottle = function(a, b, c) {
        return new tf(a,b,c)
    }
    ;
    n.getCurrentTime = function() {
        return new Date
    }
    ;
    n.setInterval = function(a, b) {
        return setInterval(a, b)
    }
    ;
    n.clearInterval = function(a) {
        clearInterval(a)
    }
    ;
    n.setTimeout = function(a, b) {
        return setTimeout(a, b)
    }
    ;
    n.clearTimeout = function(a) {
        clearTimeout(a)
    }
    ;
    var vf = function(a, b, c) {
        this.http_ = a;
        this.timeService_ = b;
        this.localStorage_ = c;
        this.cancelPollingDelay_ = this.pollingTimer_ = 0;
        this.secret_ = "SboVhoG9s0rNafixCSGGKXAT";
        this.loginListeners_ = [];
        this.lastLoginStatus_ = k
    };
    n = vf.prototype;
    n.addLoginListener = function(a) {
        this.loginListeners_.push(a);
        var b = this.getAccessToken_();
        a(!!b)
    }
    ;
    n.removeLoginListener = function(a) {
        Sa(this.loginListeners_, a)
    }
    ;
    n.getAccessToken = function(a) {
        var b = this.getRefreshToken_();
        if (b) {
            var c = this.getAccessToken_();
            c ? a(c) : this.fetchNewAccessToken_(b, a)
        } else
            a(j)
    }
    ;
    n.deauthorize = function() {
        this.cancelPolling();
        this.removeRefreshToken_();
        this.removeAccessToken_()
    }
    ;
    n.cancelPolling = function() {
        this.timeService_.clearTimeout(this.pollingTimer_)
    }
    ;
    n.cancelPollingAfterDelay = function(a) {
        a = a || 15;
        this.timeService_.clearTimeout(this.cancelPollingDelay_);
        this.cancelPollingDelay_ = this.timeService_.setTimeout(z(function() {
            this.cancelPolling()
        }, this), 1E3 * a)
    }
    ;
    n.fetchNewAccessToken_ = function(a, b) {
        this.http_.post("/o/oauth2/token", {
            client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
            client_secret: this.secret_,
            refresh_token: a,
            grant_type: "refresh_token"
        }, z(function(a) {
            this.accessTokenReceivedHandler_(a, b)
        }, this), z(function(a) {
            this.accessTokenFailureHandler_(a, b)
        }, this))
    }
    ;
    n.accessTokenReceivedHandler_ = function(a, b) {
        var c = a.access_token
          , e = Math.round(0.9 * a.expires_in);
        this.persistAccessToken_(c, e);
        b(c)
    }
    ;
    n.accessTokenFailureHandler_ = function(a, b) {
        this.deauthorize();
        b(j)
    }
    ;
    n.getPairingCode = function(a, b) {
        this.cancelPolling();
        this.http_.post("/o/oauth2/device/code", {
            client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
            scope: "http://gdata.youtube.com"
        }, z(function(c) {
            this.pairingCodeSuccessHandler_(c, a, b)
        }, this))
    }
    ;
    n.pairingCodeSuccessHandler_ = function(a, b, c) {
        this.pollForRefreshToken_(a.device_code, 1E3 * a.interval, c);
        b(a.user_code)
    }
    ;
    n.pollForRefreshToken_ = function(a, b, c) {
        var e = {
            client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
            client_secret: this.secret_,
            code: a,
            grant_type: "http://oauth.net/grant_type/device/1.0"
        }
          , f = z(function(e) {
            this.refreshTokenFetchHandler_(e, a, b, c)
        }, this);
        this.http_.post("/o/oauth2/token", e, f)
    }
    ;
    n.refreshTokenFetchHandler_ = function(a, b, c, e) {
        var f = "slow_down" == a.error;
        "authorization_pending" == a.error || f ? (f && (c *= 2),
        this.pollingTimer_ = this.timeService_.setTimeout(z(function() {
            this.pollForRefreshToken_(b, c, e)
        }, this), c)) : (this.persistRefreshToken_(a.refresh_token),
        this.accessTokenReceivedHandler_(a, e))
    }
    ;
    n.persistRefreshToken_ = function(a) {
        this.localStorage_.set("tv-refresh-token", a)
    }
    ;
    n.getRefreshToken_ = function() {
        var a = this.localStorage_.get("tv-refresh-token");
        a || (a = this.migrateRefreshTokenFromV3_());
        return a
    }
    ;
    n.migrateRefreshTokenFromV3_ = function() {
        var a = this.localStorage_.get("leanback_oauth_renew");
        a && (this.localStorage_.remove("leanback_oauth_renew"),
        this.persistRefreshToken_(a));
        return a
    }
    ;
    n.removeRefreshToken_ = function() {
        this.localStorage_.remove("tv-refresh-token")
    }
    ;
    n.persistAccessToken_ = function(a, b) {
        this.localStorage_.set("tv-access-token", a, b);
        this.notifyLoginListeners_(i)
    }
    ;
    n.getAccessToken_ = function() {
        return this.localStorage_.get("tv-access-token")
    }
    ;
    n.removeAccessToken_ = function() {
        this.localStorage_.remove("tv-access-token");
        this.notifyLoginListeners_(k)
    }
    ;
    n.notifyLoginListeners_ = function(a) {
        var b = this.lastLoginStatus_;
        this.loginListeners_.forEach(function(c) {
            c(a, b)
        });
        this.lastLoginStatus_ = a
    }
    ;
    vf.$inject = ["ytHttp", "timeService", "localStorage"];
    var wf = function(a, b, c) {
        this.environment_ = a;
        this.statsService_ = c;
        this.privateDataService_ = b;
        this.startupPingListeners_ = [z(this.sendRetentionPing, this)]
    };
    wf.prototype.sendRetentionPing = function() {
        var a = this.environment_.asDeviceParameters();
        B(a, this.statsService_.getRetentionPingData());
        this.privateDataService_.makeRequest("//www.youtube-nocookie.com/device_204", a, j, i)
    }
    ;
    wf.prototype.sendCohortPing = function() {
        var a = this.environment_.asDeviceParameters();
        B(a, this.statsService_.getCohortPingData());
        this.privateDataService_.makeRequest("/device_204", a)
    }
    ;
    wf.prototype.sendStartupPings = function() {
        this.startupPingListeners_.forEach(function(a) {
            a()
        }, this)
    }
    ;
    wf.prototype.addStartupHandler = function(a) {
        this.startupPingListeners_.push(a)
    }
    ;
    wf.$inject = ["environmentModel", "privateDataService", "statsService"];
    var xf = function(a, b, c, e, f) {
        this.model_ = j;
        this.privateDataService_ = b;
        this.reportingService_ = c;
        this.authService_ = a;
        this.timeService_ = e;
        this.environment_ = f;
        this.privateDataService_.addClearDataListener(z(this.clearPrivateData_, this));
        this.reportingService_.addStartupHandler(z(this.initialize, this))
    };
    n = xf.prototype;
    n.initialize = function() {
        (this.model_ = this.privateDataService_.loadModel(this.storageKey)) && this.privateDataService_.makeRequest("/gen_204", this.decoratePayload());
        this.clearPrivateData_();
        this.authService_.addLoginListener(z(function(a) {
            this.setLoggedIn(a)
        }, this));
        this.model_.startTime = this.environment_.startupTime
    }
    ;
    n.addToken = function(a) {
        a && this.model_.history.push(a);
        this.model_.historyTimes.push(this.timeService_.getCurrentTime().valueOf());
        this.storeModel_()
    }
    ;
    n.setLoggedIn = function(a) {
        this.model_.isLoggedIn != a && (this.model_.isLoggedIn = a,
        this.storeModel_())
    }
    ;
    n.storeModel_ = function() {
        this.privateDataService_.storeModel(this.storageKey, this.model_)
    }
    ;
    n.clearPrivateData_ = function() {
        this.model_ = {
            isLoggedIn: this.model_ ? this.model_.isLoggedIn : k,
            history: [],
            historyTimes: []
        }
    }
    ;
    n.decoratePayload = function() {
        var a = this.getPayload();
        a.logged_in = this.model_.isLoggedIn ? 1 : 0;
        a.a = this.namespaceKey;
        a.times = this.serializeTimeDeltas_(this.model_.historyTimes);
        a.start = this.model_.startTime;
        a.hl = this.environment_.locale;
        B(a, this.environment_.asDeviceParameters());
        return a
    }
    ;
    n.getPayload = function() {
        return {}
    }
    ;
    n.serializeTimeDeltas_ = function(a) {
        if (!a)
            return "";
        for (var b = [], c = 1; c < a.length; ++c)
            b.push((a[c] - a[c - 1]) / 1E3);
        return b.join("-")
    }
    ;
    n.serializeEventTokens_ = function(a) {
        return !a ? "" : a.map(this.tokenMapFunction, this).join("-")
    }
    ;
    n.tokenMapFunction = function(a) {
        return a.event
    }
    ;
    xf.$inject = ["authService", "privateDataService", "reportingService", "timeService", "environmentModel"];
    var yf = function(a, b, c, e, f) {
        this.namespaceKey = "yttv_activity_path";
        this.storageKey = "activity-path";
        xf.call(this, a, b, c, e, f)
    };
    F(yf, xf);
    yf.prototype.getPayload = function() {
        var a = {};
        a.ui = this.serializeEventTokens_(this.model_.history);
        return a
    }
    ;
    yf.prototype.tokenMapFunction = function(a) {
        return a.mode ? a.state + ":" + a.mode : a.state
    }
    ;
    yf.$inject = ["authService", "privateDataService", "reportingService", "timeService", "environmentModel"];
    var zf = function(a) {
        return function() {
            return a
        }
    };
    zf(k);
    var Af = zf(i);
    zf(j);
    /*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
    var Bf = function(a, b) {
        var c = b || [];
        a && c.push(a);
        return c
    }
      , Cf = M && "BackCompat" == document.compatMode
      , Df = document.firstChild.children ? "children" : "childNodes"
      , Ef = k
      , Ff = function(a) {
        a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
        for (var b = function(b, c) {
            return Ca(a.slice(b, c))
        }, c = [], e = -1, f = -1, g = -1, l = -1, m = -1, s = -1, r = -1, A = "", u = "", D, x = 0, pf = a.length, C = j, Q = j, $a = function() {
            0 <= s && (C.id = b(s, x).replace(/\\/g, ""),
            s = -1);
            if (0 <= r) {
                var a = r == x ? j : b(r, x);
                0 > ">~+".indexOf(a) ? C.tag = a : C.oper = a;
                r = -1
            }
            0 <= m && (C.classes.push(b(m + 1, x).replace(/\\/g, "")),
            m = -1)
        }; A = u,
        u = a.charAt(x),
        x < pf; x++)
            if ("\\" != A)
                if (C || (D = x,
                C = {
                    query: j,
                    pseudos: [],
                    attrs: [],
                    classes: [],
                    tag: j,
                    oper: j,
                    id: j,
                    getTag: function() {
                        return Ef ? this.otag : this.tag
                    }
                },
                r = x),
                0 <= e)
                    if ("]" == u) {
                        Q.attr ? Q.matchFor = b(g || e + 1, x) : Q.attr = b(e + 1, x);
                        if ((e = Q.matchFor) && ('"' == e.charAt(0) || "'" == e.charAt(0)))
                            Q.matchFor = e.slice(1, -1);
                        C.attrs.push(Q);
                        Q = j;
                        e = g = -1
                    } else
                        "=" == u && (g = 0 <= "|~^$*".indexOf(A) ? A : "",
                        Q.type = g + u,
                        Q.attr = b(e + 1, x - g.length),
                        g = x + 1);
                else
                    0 <= f ? ")" == u && (0 <= l && (Q.value = b(f + 1, x)),
                    l = f = -1) : "#" == u ? ($a(),
                    s = x + 1) : "." == u ? ($a(),
                    m = x) : ":" == u ? ($a(),
                    l = x) : "[" == u ? ($a(),
                    e = x,
                    Q = {}) : "(" == u ? (0 <= l && (Q = {
                        name: b(l + 1, x),
                        value: j
                    },
                    C.pseudos.push(Q)),
                    f = x) : " " == u && A != u && ($a(),
                    0 <= l && C.pseudos.push({
                        name: b(l + 1, x)
                    }),
                    C.loops = C.pseudos.length || C.attrs.length || C.classes.length,
                    C.oquery = C.query = b(D, x),
                    C.otag = C.tag = C.oper ? j : C.tag || "*",
                    C.tag && (C.tag = C.tag.toUpperCase()),
                    c.length && c[c.length - 1].oper && (C.infixOper = c.pop(),
                    C.query = C.infixOper.query + " " + C.query),
                    c.push(C),
                    C = j);
        return c
    }
      , Gf = function(a, b) {
        return !a ? b : !b ? a : function() {
            return a.apply(window, arguments) && b.apply(window, arguments)
        }
    }
      , Hf = function(a) {
        return 1 == a.nodeType
    }
      , If = function(a, b) {
        return !a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Ef ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
    }
      , Jf = {
        "*=": function(a, b) {
            return function(c) {
                return 0 <= If(c, a).indexOf(b)
            }
        },
        "^=": function(a, b) {
            return function(c) {
                return 0 == If(c, a).indexOf(b)
            }
        },
        "$=": function(a, b) {
            return function(c) {
                c = " " + If(c, a);
                return c.lastIndexOf(b) == c.length - b.length
            }
        },
        "~=": function(a, b) {
            var c = " " + b + " ";
            return function(b) {
                return 0 <= (" " + If(b, a) + " ").indexOf(c)
            }
        },
        "|=": function(a, b) {
            b = " " + b;
            return function(c) {
                c = " " + If(c, a);
                return c == b || 0 == c.indexOf(b + "-")
            }
        },
        "=": function(a, b) {
            return function(c) {
                return If(c, a) == b
            }
        }
    }
      , Kf = "undefined" == typeof document.firstChild.nextElementSibling
      , Lf = !Kf ? "nextElementSibling" : "nextSibling"
      , Mf = !Kf ? "previousElementSibling" : "previousSibling"
      , Nf = Kf ? Hf : Af
      , _lookLeft$$inline_251 = function(a) {
        for (; a = a[Mf]; )
            if (Nf(a))
                return k;
        return i
    }
      , _lookRight$$inline_252 = function(a) {
        for (; a = a[Lf]; )
            if (Nf(a))
                return k;
        return i
    }
      , Of = function(a) {
        var b = a.parentNode
          , c = 0
          , e = b[Df]
          , f = a._i || -1
          , g = b._l || -1;
        if (!e)
            return -1;
        e = e.length;
        if (g == e && 0 <= f && 0 <= g)
            return f;
        b._l = e;
        f = -1;
        for (b = b.firstElementChild || b.firstChild; b; b = b[Lf])
            Nf(b) && (b._i = ++c,
            a === b && (f = c));
        return f
    }
      , Pf = function(a) {
        return !(Of(a) % 2)
    }
      , Qf = function(a) {
        return Of(a) % 2
    }
      , Sf = {
        checked: function() {
            return function(a) {
                return a.checked || a.attributes.checked
            }
        },
        "first-child": function() {
            return _lookLeft$$inline_251
        },
        "last-child": function() {
            return _lookRight$$inline_252
        },
        "only-child": function() {
            return function(a) {
                return !_lookLeft$$inline_251(a) || !_lookRight$$inline_252(a) ? k : i
            }
        },
        empty: function() {
            return function(a) {
                var b = a.childNodes;
                for (a = a.childNodes.length - 1; 0 <= a; a--) {
                    var c = b[a].nodeType;
                    if (1 === c || 3 == c)
                        return k
                }
                return i
            }
        },
        contains: function(a, b) {
            var c = b.charAt(0);
            if ('"' == c || "'" == c)
                b = b.slice(1, -1);
            return function(a) {
                return 0 <= a.innerHTML.indexOf(b)
            }
        },
        not: function(a, b) {
            var c = Ff(b)[0]
              , e = {
                el: 1
            };
            "*" != c.tag && (e.tag = 1);
            c.classes.length || (e.classes = 1);
            var f = Rf(c, e);
            return function(a) {
                return !f(a)
            }
        },
        "nth-child": function(a, b) {
            if ("odd" == b)
                return Qf;
            if ("even" == b)
                return Pf;
            if (-1 != b.indexOf("n")) {
                var c = b.split("n", 2)
                  , e = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1
                  , f = c[1] ? parseInt(c[1], 10) : 0
                  , g = 0
                  , l = -1;
                0 < e ? 0 > f ? f = f % e && e + f % e : 0 < f && (f >= e && (g = f - f % e),
                f %= e) : 0 > e && (e *= -1,
                0 < f && (l = f,
                f %= e));
                if (0 < e)
                    return function(a) {
                        a = Of(a);
                        return a >= g && (0 > l || a <= l) && a % e == f
                    }
                    ;
                b = f
            }
            var m = parseInt(b, 10);
            return function(a) {
                return Of(a) == m
            }
        }
    }
      , Tf = L ? function(a) {
        var b = a.toLowerCase();
        "class" == b && (a = "className");
        return function(c) {
            return Ef ? c.getAttribute(a) : c[a] || c[b]
        }
    }
    : function(a) {
        return function(b) {
            return b && b.getAttribute && b.hasAttribute(a)
        }
    }
      , Rf = function(a, b) {
        if (!a)
            return Af;
        b = b || {};
        var c = j;
        b.el || (c = Gf(c, Hf));
        b.tag || "*" != a.tag && (c = Gf(c, function(b) {
            return b && b.tagName == a.getTag()
        }));
        b.classes || I(a.classes, function(a, b) {
            var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
            c = Gf(c, function(a) {
                return g.test(a.className)
            });
            c.count = b
        });
        b.pseudos || I(a.pseudos, function(a) {
            var b = a.name;
            Sf[b] && (c = Gf(c, Sf[b](b, a.value)))
        });
        b.attrs || I(a.attrs, function(a) {
            var b, g = a.attr;
            a.type && Jf[a.type] ? b = Jf[a.type](g, a.matchFor) : g.length && (b = Tf(g));
            b && (c = Gf(c, b))
        });
        b.id || a.id && (c = Gf(c, function(b) {
            return !!b && b.id == a.id
        }));
        c || "default"in b || (c = Af);
        return c
    }
      , _childElements$$inline_261 = function(a) {
        a = a || Af;
        return function(b, c, e) {
            for (var f = 0, g = b[Df]; b = g[f++]; )
                Nf(b) && ((!e || _isUnique$$inline_273(b, e)) && a(b, f)) && c.push(b);
            return c
        }
    }
      , _isDescendant$$inline_262 = function(a, b) {
        for (var c = a.parentNode; c && c != b; )
            c = c.parentNode;
        return !!c
    }
      , _getElementsFuncCache$$inline_263 = {}
      , Uf = function(a) {
        var b = _getElementsFuncCache$$inline_263[a.query];
        if (b)
            return b;
        var c = a.infixOper
          , c = c ? c.oper : ""
          , e = Rf(a, {
            el: 1
        })
          , f = "*" == a.tag
          , g = document.getElementsByClassName;
        if (c)
            if (g = {
                el: 1
            },
            f && (g.tag = 1),
            e = Rf(a, g),
            "+" == c)
                var l = e
                  , b = function(a, b, c) {
                    for (; a = a[Lf]; )
                        if (!Kf || Hf(a)) {
                            (!c || _isUnique$$inline_273(a, c)) && l(a) && b.push(a);
                            break
                        }
                    return b
                };
            else if ("~" == c)
                var m = e
                  , b = function(a, b, c) {
                    for (a = a[Lf]; a; ) {
                        if (Nf(a)) {
                            if (c && !_isUnique$$inline_273(a, c))
                                break;
                            m(a) && b.push(a)
                        }
                        a = a[Lf]
                    }
                    return b
                };
            else
                ">" == c && (b = _childElements$$inline_261(e));
        else if (a.id)
            e = !a.loops && f ? Af : Rf(a, {
                el: 1,
                id: 1
            }),
            b = function(b, c) {
                var f = zc(b).getElement(a.id);
                if (f && e(f) && (9 == b.nodeType || _isDescendant$$inline_262(f, b)))
                    return Bf(f, c)
            }
            ;
        else if (g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.classes.length && !Cf)
            var e = Rf(a, {
                el: 1,
                classes: 1,
                id: 1
            })
              , s = a.classes.join(" ")
              , b = function(a, b) {
                for (var c = Bf(0, b), f, g = 0, l = a.getElementsByClassName(s); f = l[g++]; )
                    e(f, a) && c.push(f);
                return c
            };
        else
            !f && !a.loops ? b = function(b, c) {
                for (var e = Bf(0, c), f, g = 0, l = b.getElementsByTagName(a.getTag()); f = l[g++]; )
                    e.push(f);
                return e
            }
            : (e = Rf(a, {
                el: 1,
                tag: 1,
                id: 1
            }),
            b = function(b, c) {
                for (var f = Bf(0, c), g, l = 0, m = b.getElementsByTagName(a.getTag()); g = m[l++]; )
                    e(g, b) && f.push(g);
                return f
            }
            );
        return _getElementsFuncCache$$inline_263[a.query] = b
    }
      , _queryFuncCacheDOM$$inline_266 = {}
      , _queryFuncCacheQSA$$inline_267 = {}
      , Vf = function(a) {
        var b = Ff(Ca(a));
        if (1 == b.length) {
            var c = Uf(b[0]);
            return function(a) {
                if (a = c(a, []))
                    a.nozip = i;
                return a
            }
        }
        return function(a) {
            a = Bf(a);
            for (var c, g, l = b.length, m, s, r = 0; r < l; r++) {
                s = [];
                c = b[r];
                g = a.length - 1;
                0 < g && (m = {},
                s.nozip = i);
                g = Uf(c);
                for (var A = 0; c = a[A]; A++)
                    g(c, s, m);
                if (!s.length)
                    break;
                a = s
            }
            return s
        }
    }
      , Wf = !!document.querySelectorAll && (!M || N("526"))
      , Xf = function(a, b) {
        if (Wf) {
            var c = _queryFuncCacheQSA$$inline_267[a];
            if (c && !b)
                return c
        }
        if (c = _queryFuncCacheDOM$$inline_266[a])
            return c;
        var c = a.charAt(0)
          , e = -1 == a.indexOf(" ");
        0 <= a.indexOf("#") && e && (b = i);
        if (Wf && !b && -1 == ">~+".indexOf(c) && (!L || -1 == a.indexOf(":")) && !(Cf && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
            var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
            return _queryFuncCacheQSA$$inline_267[a] = function(b) {
                try {
                    9 == b.nodeType || e || d("");
                    var c = b.querySelectorAll(f);
                    L ? c.commentStrip = i : c.nozip = i;
                    return c
                } catch (g) {
                    return Xf(a, i)(b)
                }
            }
        }
        var g = a.split(/\s*,\s*/);
        return _queryFuncCacheDOM$$inline_266[a] = 2 > g.length ? Vf(a) : function(a) {
            for (var b = 0, c = [], e; e = g[b++]; )
                c = c.concat(Vf(e)(a));
            return c
        }
    }
      , _zipIdx$$inline_271 = 0
      , _nodeUID$$inline_272 = L ? function(a) {
        return Ef ? a.getAttribute("_uid") || a.setAttribute("_uid", ++_zipIdx$$inline_271) || _zipIdx$$inline_271 : a.uniqueID
    }
    : function(a) {
        return a._uid || (a._uid = ++_zipIdx$$inline_271)
    }
      , _isUnique$$inline_273 = function(a, b) {
        if (!b)
            return 1;
        var c = _nodeUID$$inline_272(a);
        return !b[c] ? b[c] = 1 : 0
    }
      , _zipIdxName$$inline_274 = "_zipIdx"
      , _zip$$inline_275 = function(a) {
        if (a && a.nozip)
            return a;
        var b = [];
        if (!a || !a.length)
            return b;
        a[0] && b.push(a[0]);
        if (2 > a.length)
            return b;
        _zipIdx$$inline_271++;
        if (L && Ef) {
            var c = _zipIdx$$inline_271 + "";
            a[0].setAttribute(_zipIdxName$$inline_274, c);
            for (var e = 1, f; f = a[e]; e++)
                a[e].getAttribute(_zipIdxName$$inline_274) != c && b.push(f),
                f.setAttribute(_zipIdxName$$inline_274, c)
        } else if (L && a.commentStrip)
            try {
                for (e = 1; f = a[e]; e++)
                    Hf(f) && b.push(f)
            } catch (g) {}
        else {
            a[0] && (a[0][_zipIdxName$$inline_274] = _zipIdx$$inline_271);
            for (e = 1; f = a[e]; e++)
                a[e][_zipIdxName$$inline_274] != _zipIdx$$inline_271 && b.push(f),
                f[_zipIdxName$$inline_274] = _zipIdx$$inline_271
        }
        return b
    }
      , Yf = function(a, b) {
        if (!a)
            return [];
        if (a.constructor == Array)
            return a;
        if (!y(a))
            return [a];
        if (y(b) && (b = Ac(b),
        !b))
            return [];
        b = b || document;
        var c = b.ownerDocument || b.documentElement;
        Ef = b.contentType && "application/xml" == b.contentType || Kb && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (L ? c.xml : b.xmlVersion || c.xmlVersion);
        return (c = Xf(a)(b)) && c.nozip ? c : _zip$$inline_275(c)
    };
    Yf.pseudos = Sf;
    t("goog.dom.query", Yf, h);
    t("goog.dom.query.pseudos", Yf.pseudos, h);
    var U = function(a, b, c) {
        this.id = b.attr("id") || "";
        this.name = this.name || this.id || "directive";
        this.scope = a;
        this.element = b;
        this.attrs = c;
        this.isActive = k;
        this.isFocusable = this.isFocusable || c.ytFocusable || k;
        this.children = {};
        this.childList = [];
        this.eventHandlers = [];
        this.scope[this.name] = this;
        this.scope.focusable = this;
        this.scope.controller = this;
        this.isFocusable && this.element.attr("tabindex", -1);
        this.attrs.activateWhen && this.scope.$watch(this.attrs.activateWhen, z(this.activateWhenHandler_, this));
        this.attrs.data && this.scope.$watch(this.attrs.data, z(this.dataChangedHandler, this));
        this.scope.$on("$destroy", z(this.destroy, this))
    };
    n = U.prototype;
    n.initialize = function() {
        this.scope.$emit("added", this);
        this.scope.$on("added", z(this.childAddedHandler, this))
    }
    ;
    n.destroy = function() {
        this.data = j;
        this.scope[this.name] = j;
        this.scope.focusable = j;
        this.scope.controller = j;
        this.scope.$$watchers = j;
        this.scope.$$listeners = {};
        for (var a = 0; a < this.eventHandlers.length; ++a)
            this.eventHandlers[a]();
        this.eventHandlers.length = 0;
        this.clearChildren()
    }
    ;
    n.dataChangedHandler = function(a) {
        this.data = a
    }
    ;
    n.setData = function(a) {
        this.data = a
    }
    ;
    n.createChildren = function() {
        return this.shouldCreateChildren()
    }
    ;
    n.shouldCreateChildren = function() {
        return i
    }
    ;
    n.render = function() {}
    ;
    n.activate = function() {
        var a = this.isActive;
        this.isActive = i;
        this.element.addClass("active");
        !a && this.isFocusable && this.focus()
    }
    ;
    n.deactivate = function() {
        this.isActive = k;
        this.activeChildName = j;
        this.element.removeClass("active");
        this.deactivateChild_(this.activeChild)
    }
    ;
    n.deactivateChild_ = function(a) {
        a && (a.deactivate(),
        this.activeChild = j)
    }
    ;
    n.activateChild_ = function(a) {
        a && (this.activeChild && this.activeChild.deactivate(),
        a.activate(),
        this.activeChild = a)
    }
    ;
    n.activateWhenHandler_ = function(a) {
        a ? this.activate() : this.isActive && this.deactivate()
    }
    ;
    n.focus = function() {
        this.element[0].focus()
    }
    ;
    n.childAddedHandler = function(a, b) {
        var c = b.element.attr("id");
        c && (this.children[c] = b);
        a.stopPropagation();
        this.childList.push(b)
    }
    ;
    n.clearChildren = function() {
        for (var a = this.childList.length, b = 0; b < a; ++b)
            this.childList[b].element.remove();
        this.childList.length = 0;
        this.children = {}
    }
    ;
    n.digestSingleScope = function(a) {
        var b = a.$$childHead;
        a.$$childHead = j;
        this.safeDigest(a);
        a.$$childHead = b
    }
    ;
    n.digestChildScope = function(a) {
        a in this.children && this.safeDigest(this.children[a].scope)
    }
    ;
    n.safeDigest = function(a) {
        a || (a = this.scope.$root);
        a.$$phase || a.$digest()
    }
    ;
    n.elementIdEquals = function(a) {
        return this.id === a
    }
    ;
    n.getChildElement = function(a) {
        a = this.getChildElements(a);
        return 0 < a.length ? a[0] : j
    }
    ;
    n.getChildElements = function(a) {
        return Yf(a, this.element[0])
    }
    ;
    n.setElementText = function(a, b) {
        a.textContent = b || ""
    }
    ;
    n.setElementHtml = function(a, b) {
        a.innerHTML = b || ""
    }
    ;
    n.showElementIf = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    n.getChildAt_ = function(a) {
        return this.childList[a]
    }
    ;
    U.$inject = ["$scope", "$element", "$attrs"];
    var V = function(a, b, c) {
        this.name = this.name || "focusable";
        this.isFocusable = i;
        U.call(this, a, b, c)
    };
    F(V, U);
    V.$inject = ["$scope", "$element", "$attrs"];
    var Zf = function(a, b, c) {
        this.name = "gamepad";
        V.call(this, a, b, c)
    };
    F(Zf, V);
    Zf.$inject = ["$scope", "$element", "$attrs"];
    var $f = function(a, b, c, e, f, g, l, m) {
        this.compile_ = a;
        this.rootScope_ = b;
        this.window_ = c;
        this.playerService_ = e;
        this.angularHelper_ = f;
        this.environment_ = g;
        this.gestureService_ = l;
        this.searchQueryModel_ = m;
        this.initialize_()
    };
    n = $f.prototype;
    n.initialize_ = function() {
        !this.window_.nsf && this.window_.require && this.window_.require("all");
        this.window_.nsf && (this.window_.requestAnimationFrame = this.window_.requestAnimationFrame || this.window_.webkitRequestAnimationFrame,
        this.playerService_.on("state:changed", z(this.playerStateChangedHandler_, this)),
        this.window_.nsf.system.WiiUSystem.getInstance().screenCaptureEnabled = k,
        this.displayManager_ = this.window_.nsf.display.DisplayManager.getInstance(),
        this.initializeGamePad_(),
        this.setPowerSave(k));
        this.environment_.isWiiU && this.initializeGamePadDisplay_()
    }
    ;
    n.playerStateChangedHandler_ = function() {
        this.setAutoDimming(1 !== this.playerService_.state)
    }
    ;
    n.initializeGamePad_ = function() {
        var a = this.window_.nsf.input;
        a.WiiUGamePad.navigationEnabled = k;
        a.WiiUGamePad.scrollEnabled = k;
        this.gamePadInput_ = a.WiiUGamePad.getController(a.WiiUGamePad.DRC_1);
        this.gamePadKeys_ = this.createGamePadKeys_();
        this.leftStick_ = new za(this.gamePadInput_.leftStick,this.angularHelper_);
        this.loop_()
    }
    ;
    n.createGamePadKeys_ = function() {
        var a = this.window_.nsf.input.ControllerButton
          , b = this.angularHelper_;
        return [new G(a.DRC_A,13,b), new G(a.DRC_B,27,b), new G(a.DRC_DOWN,40,b), new G(a.DRC_L,37,b), new G(a.DRC_LEFT,37,b), new G(a.DRC_MINUS,40,b), new G(a.DRC_PLUS,38,b), new G(a.DRC_R,39,b), new G(a.DRC_RIGHT,39,b), new G(a.DRC_UP,38,b), new G(a.DRC_X,71,b), new G(a.DRC_Y,83,b), new G(a.DRC_ZL,227,b), new G(a.DRC_ZR,228,b)]
    }
    ;
    n.updateKeys_ = function() {
        this.updateKeysFor_(this.gamePadInput_, this.gamePadKeys_);
        this.loop_()
    }
    ;
    n.loop_ = function() {
        this.window_.requestAnimationFrame(z(this.updateKeys_, this))
    }
    ;
    n.updateKeysFor_ = function(a, b) {
        !this.isReloading_ && (a && a.connected) && (this.leftStick_.update(),
        b.forEach(z(function(b) {
            a && a.buttons && a.buttons.isButtonPressed(b.buttonCode) ? b.pressed() : b.released()
        }, this)))
    }
    ;
    n.initializeGamePadDisplay_ = function() {
        this.gamePadDisplay_ = this.window_.nsf ? this.createRealGamePad_() : this.createFakeGamePad_();
        this.gamePadDisplay_.load(R.htmlPath + "/wii/game_pad_shell.html");
        this.rootScope_.$on("row-loaded", z(this.attemptGamePadConfig_, this));
        this.rootScope_.$on("active-item-changed", z(this.attemptGamePadConfig_, this));
        this.rootScope_.$on("active-item-changed", z(this.activeItemChangedHandler_, this));
        this.rootScope_.$on("search-input-focused", z(this.searchInputFocusedHandler_, this));
        this.rootScope_.$on("search-input-blurred", z(this.searchInputBlurredHandler_, this))
    }
    ;
    n.searchInputBlurredHandler_ = function() {
        if (this.window_.nsf) {
            var a = this.window_.nsf.input.SoftwareKeyboard;
            a.dismiss(a.DISMISS_CANCEL);
            this.gamePadScope_.isOskVisible = k;
            this.angularHelper_.safeDigest(this.gamePadScope_)
        }
    }
    ;
    n.searchInputFocusedHandler_ = function() {
        if (this.window_.nsf) {
            var a = this.window_.nsf.input.SoftwareKeyboard;
            a.invoke(z(this.keyPressedHandler_, this), {
                display: a.DISPLAY_DRC_0,
                fullscreen: k,
                max_chars: 1024,
                text: this.searchQueryModel_.query
            });
            this.gamePadScope_.isOskVisible = i;
            this.angularHelper_.safeDigest(this.gamePadScope_)
        }
    }
    ;
    n.keyPressedHandler_ = function(a) {
        var b = a.text;
        switch (a.user_select) {
        case "ok":
            this.gestureService_.emitKeyPress(13);
            break;
        case "cancel":
            this.gestureService_.emitKeyPress(40);
            break;
        case "backspace":
            this.searchQueryModel_.backspace();
            break;
        case "char":
            this.searchQueryModel_.addCharacters(b)
        }
    }
    ;
    n.attemptGamePadConfig_ = function() {
        if (!this.gamePadScope_ && this.createApplicationScope_()) {
            this.gamePadScope_ = this.applicationScope_.$new();
            if (!this.hasScrollListener_) {
                var a = this.gamePadDisplay_.window.document.body
                  , b = angular.element(a)
                  , c = k
                  , e = 0;
                b.bind("mousedown", function(a) {
                    c = i;
                    e = a.pageY;
                    a.stopPropagation();
                    a.preventDefault()
                });
                b.bind("mouseup", function() {
                    c = k;
                    e = NaN
                });
                b.bind("mousemove", function(b) {
                    if (c) {
                        var g = Math.min(a.scrollHeight, Math.max(0, a.scrollTop + (e - b.pageY)));
                        a.scrollTop = g;
                        b.stopPropagation();
                        b.preventDefault()
                    }
                });
                this.hasScrollListener_ = i
            }
            this.compile_(this.gamePadDisplay_.window.document)(this.gamePadScope_)
        }
    }
    ;
    n.createApplicationScope_ = function() {
        this.applicationScope_ || (this.applicationScope_ = angular.element(this.window_.document.getElementById("app-markup")).scope());
        return this.applicationScope_
    }
    ;
    n.createRealGamePad_ = function() {
        return this.displayManager_.getDRCDisplay(0)
    }
    ;
    n.createFakeGamePad_ = function() {
        var a = {};
        a.load = z(function(b) {
            b = angular.element('<iframe id="drc" src="' + b + '" width="854" height="480" style="position:absolute;z-index:10000;bottom:0;"></iframe>');
            angular.element(this.window_.document.body).append(b);
            a.window = b[0].contentWindow
        }, this);
        a.connected = i;
        return a
    }
    ;
    n.activeItemChangedHandler_ = function(a, b) {
        this.isGamePadReady_() && (b = b instanceof Zd ? b : j,
        b !== this.gamePadScope_.data && (this.gamePadScope_.hasLoadedOnce = i,
        this.gamePadScope_.data = b,
        this.angularHelper_.safeDigest(this.gamePadScope_)))
    }
    ;
    n.isGamePadReady_ = function() {
        return this.gamePadScope_ && this.gamePadDisplay_ && (this.gamePadDisplay_.connected || this.gamePadInput_.connected)
    }
    ;
    n.setAutoDimming = function(a) {
        this.displayManager_.getTVDisplay().dimmingEnabled = a;
        var b = this.displayManager_.getDRCDisplay(0);
        b && (b.dimmingEnabled = a)
    }
    ;
    n.setPowerSave = function(a) {
        var b = this.window_.nsf.system.APD;
        a ? b.enable() : b.disable()
    }
    ;
    $f.$inject = "$compile $rootScope $window playerService angularHelper environmentModel gestureService searchQueryModel".split(" ");
    var ag = function(a, b, c) {
        this.environment_ = a;
        this.authService_ = b;
        this.http_ = c
    };
    ag.prototype.initialize = function() {
        this.authService_.addLoginListener(z(this.sendSigninBountyPing_, this))
    }
    ;
    ag.prototype.sendSigninBountyPing_ = function(a) {
        a && this.environment_.bountyVendor && this.authService_.getAccessToken(z(function(a) {
            this.http_.get("/vendor_signin", {
                access_token: a,
                vendor: this.environment_.bountyVendor
            })
        }, this))
    }
    ;
    ag.$inject = ["environmentModel", "authService", "ytHttp"];
    var bg = function(a, b, c) {
        this.environment_ = a;
        this.privateDataService_ = b;
        this.reportingService_ = c;
        this.reportingService_.addStartupHandler(z(this.initialize, this))
    };
    n = bg.prototype;
    n.initialize = function() {
        this.shouldReportCrash_() && (this.pushToService_(),
        this.storeLastCrashCount_())
    }
    ;
    n.shouldReportCrash_ = function() {
        return this.getLastCrashCount_() < this.environment_.getCrashCount()
    }
    ;
    n.getLastCrashCount_ = function() {
        var a = this.privateDataService_.getFromLocalStorage("crash-count");
        if (!a || isNaN(a))
            a = 0;
        return a
    }
    ;
    n.pushToService_ = function() {
        this.privateDataService_.makeRequest("/gen_204", this.getPayload_())
    }
    ;
    n.getPayload_ = function() {
        var a = {
            a: "yttv_crash",
            crash: i
        };
        a.first_time = 0 === this.getLastCrashCount_();
        return a
    }
    ;
    n.storeLastCrashCount_ = function() {
        this.privateDataService_.saveToLocalStorage("crash-count", this.environment_.getCrashCount())
    }
    ;
    bg.$inject = ["environmentModel", "privateDataService", "reportingService"];
    var cg = function(a) {
        this.window_ = a;
        this.timers_ = {}
    };
    cg.prototype.startTimer = function(a) {
        var b = new this.window_.jstiming.Timer;
        b.name = a;
        this.timers_[a] = b;
        b.tick("_start_label")
    }
    ;
    cg.prototype.tick = function(a, b) {
        this.timers_[a].tick(b, "_start_label")
    }
    ;
    cg.prototype.report = function(a, b) {
        var c = this.timers_[a];
        c && this.window_.jstiming.report(c, b || {})
    }
    ;
    cg.$inject = ["$window"];
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var dg = function(a, b) {
        this.sequence_ = [];
        this.onCancelFunction_ = a;
        this.defaultScope_ = b || j
    };
    n = dg.prototype;
    n.fired_ = k;
    n.hadError_ = k;
    n.blocked_ = k;
    n.blocking_ = k;
    n.silentlyCancelled_ = k;
    n.branches_ = 0;
    n.cancel = function(a) {
        if (this.hasFired())
            this.result_ instanceof dg && this.result_.cancel();
        else {
            if (this.parent_) {
                var b = this.parent_;
                delete this.parent_;
                a ? b.cancel(a) : b.branchCancel_()
            }
            this.onCancelFunction_ ? this.onCancelFunction_.call(this.defaultScope_, this) : this.silentlyCancelled_ = i;
            this.hasFired() || this.errback(new eg(this))
        }
    }
    ;
    n.branchCancel_ = function() {
        this.branches_--;
        0 >= this.branches_ && this.cancel()
    }
    ;
    n.continue_ = function(a, b) {
        this.blocked_ = k;
        this.updateResult_(a, b)
    }
    ;
    n.updateResult_ = function(a, b) {
        this.fired_ = i;
        this.result_ = b;
        this.hadError_ = !a;
        this.fire_()
    }
    ;
    n.check_ = function() {
        this.hasFired() && (this.silentlyCancelled_ || d(new fg(this)),
        this.silentlyCancelled_ = k)
    }
    ;
    n.callback = function(a) {
        this.check_();
        this.assertNotDeferred_(a);
        this.updateResult_(i, a)
    }
    ;
    n.errback = function(a) {
        this.check_();
        this.assertNotDeferred_(a);
        this.updateResult_(k, a)
    }
    ;
    n.assertNotDeferred_ = function() {}
    ;
    n.addCallback = function(a, b) {
        return this.addCallbacks(a, j, b)
    }
    ;
    n.addErrback = function(a, b) {
        return this.addCallbacks(j, a, b)
    }
    ;
    n.addBoth = function(a, b) {
        return this.addCallbacks(a, a, b)
    }
    ;
    n.addCallbacks = function(a, b, c) {
        this.sequence_.push([a, b, c]);
        this.hasFired() && this.fire_();
        return this
    }
    ;
    n.chainDeferred = function(a) {
        this.addCallbacks(a.callback, a.errback, a);
        return this
    }
    ;
    n.awaitDeferred = function(a) {
        return this.addCallback(z(a.branch, a))
    }
    ;
    n.branch = function(a) {
        var b = new dg;
        this.chainDeferred(b);
        a && (b.parent_ = this,
        this.branches_++);
        return b
    }
    ;
    n.hasFired = function() {
        return this.fired_
    }
    ;
    n.isError = function(a) {
        return a instanceof Error
    }
    ;
    n.hasErrback_ = function() {
        return Oa(this.sequence_, function(a) {
            return fa(a[1])
        })
    }
    ;
    n.fire_ = function() {
        this.unhandledExceptionTimeoutId_ && (this.hasFired() && this.hasErrback_()) && (p.clearTimeout(this.unhandledExceptionTimeoutId_),
        delete this.unhandledExceptionTimeoutId_);
        this.parent_ && (this.parent_.branches_--,
        delete this.parent_);
        for (var a = this.result_, b = k, c = k; this.sequence_.length && !this.blocked_; ) {
            var e = this.sequence_.shift()
              , f = e[0]
              , g = e[1]
              , e = e[2];
            if (f = this.hadError_ ? g : f)
                try {
                    var l = f.call(e || this.defaultScope_, a);
                    q(l) && (this.hadError_ = this.hadError_ && (l == a || this.isError(l)),
                    this.result_ = a = l);
                    a instanceof dg && (this.blocked_ = c = i)
                } catch (m) {
                    a = m,
                    this.hadError_ = i,
                    this.hasErrback_() || (b = i)
                }
        }
        this.result_ = a;
        c && (a.addCallbacks(z(this.continue_, this, i), z(this.continue_, this, k)),
        a.blocking_ = i);
        b && (this.unhandledExceptionTimeoutId_ = p.setTimeout(function() {
            d(a)
        }, 0))
    }
    ;
    var fg = function(a) {
        Aa.call(this);
        this.deferred = a
    };
    F(fg, Aa);
    fg.prototype.message = "Deferred has already fired";
    fg.prototype.name = "AlreadyCalledError";
    var eg = function(a) {
        Aa.call(this);
        this.deferred = a
    };
    F(eg, Aa);
    eg.prototype.message = "Deferred was cancelled";
    eg.prototype.name = "CancelledError";
    var jg = function(a, b) {
        var c = b || {}
          , e = c.document || document
          , f = document.createElement("SCRIPT")
          , g = {
            script_: f,
            timeout_: h
        }
          , l = new dg(gg,g)
          , m = j
          , s = c.timeout != j ? c.timeout : 5E3;
        0 < s && (m = window.setTimeout(function() {
            hg(f, i);
            l.errback(new ig(1,"Timeout reached for loading script " + a))
        }, s),
        g.timeout_ = m);
        f.onload = f.onreadystatechange = function() {
            if (!f.readyState || "loaded" == f.readyState || "complete" == f.readyState)
                hg(f, c.cleanupWhenDone || k, m),
                l.callback(j)
        }
        ;
        f.onerror = function() {
            hg(f, i, m);
            l.errback(new ig(0,"Error while loading script " + a))
        }
        ;
        Fc(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        g = e.getElementsByTagName("HEAD");
        (!g || 0 == g.length ? e.documentElement : g[0]).appendChild(f);
        return l
    }
      , gg = function() {
        if (this && this.script_) {
            var a = this.script_;
            a && "SCRIPT" == a.tagName && hg(a, i, this.timeout_)
        }
    }
      , hg = function(a, b, c) {
        c != j && p.clearTimeout(c);
        a.onload = v;
        a.onerror = v;
        a.onreadystatechange = v;
        b && window.setTimeout(function() {
            Nc(a)
        }, 0)
    }
      , ig = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Aa.call(this, c);
        this.code = a
    };
    F(ig, Aa);
    var kg = function(a, b) {
        this.window_ = a;
        this.rootScope_ = b;
        this.activated_ = k;
        this.commandMap_ = {
            f5: z(this.reloadPage_, this),
            http: z(this.reloadToHttp_, this),
            keys: z(this.loadKeyCodePage_, this),
            lbl: z(this.handleLabel_, this),
            mdiag: z(this.loadMediaDiagnostics_, this)
        }
    }
      , lg = /^[a-z0-9]{8}$|^dogfood$|^live$/;
    n = kg.prototype;
    n.isActive = function() {
        return this.activated_
    }
    ;
    n.process = function(a) {
        if (a && " " == a[a.length - 1]) {
            var b = a.toLowerCase().split(" ");
            if (a = b[0])
                if (this.isActive()) {
                    if (a in this.commandMap_)
                        return b = b.slice(1, b.length - 1),
                        this.commandMap_[a](b)
                } else
                    return this.attemptToActivate_(a)
        }
        return k
    }
    ;
    n.attemptToActivate_ = function(a) {
        this.activated_ = "mcvpanta" == a;
        return this.isActive()
    }
    ;
    n.reloadPage_ = function(a) {
        return 0 == a.length ? (this.rootScope_.$emit("search-input-blurred"),
        this.window_.location.hash = "",
        this.window_.location.reload(i),
        i) : k
    }
    ;
    n.reloadToHttp_ = function() {
        this.navigateTo_("http://www.youtube.com/tv")
    }
    ;
    n.loadKeyCodePage_ = function(a) {
        return 0 == a.length ? (this.navigateTo_("https://kcdsfrdvcs.appspot.com"),
        i) : k
    }
    ;
    n.handleLabel_ = function(a) {
        return 1 == a.length && (label = a[0],
        lg.test(label)) ? (a = fd("https://www.youtube.com/tv", {
            label: label
        }),
        this.navigateTo_(a),
        i) : k
    }
    ;
    n.navigateTo_ = function(a) {
        this.rootScope_.$emit("search-input-blurred");
        this.window_.location.href = a
    }
    ;
    n.loadMediaDiagnostics_ = function(a) {
        return 0 == a.length ? (jg(R.appPath + "/modules/media-diagnostics.js"),
        i) : k
    }
    ;
    kg.$inject = ["$window", "$rootScope"];
    var mg = function(a, b, c, e, f, g, l, m) {
        var s = {
            alt: "json",
            key: "AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            v: "2.1"
        };
        m && angular.extend(s, m);
        this.authService_ = f;
        qe.call(this, a, b, c, e, g, l, s)
    };
    F(mg, qe);
    n = mg.prototype;
    n.getBaseUrl = function() {
        return "https://yt2009.truehosting.net/feeds/api"
    }
    ;
    n.getDefaultTransportMethod = function() {
        return this.environment.supportsCors ? "GET" : "JSONP"
    }
    ;
    n.load = function(a, b, c) {
        var e;
        a && (e = a.query,
        delete a.query);
        return this.loadWithQuery(e, b, a, c)
    }
    ;
    n.loadWithQuery = function(a, b, c, e, f) {
        c = c || {};
        c[this.paramKey] = a;
        b = this.doLoad_(c, b, e, f);
        f || (b.serviceQuery = a);
        return b
    }
    ;
    n.loadFromTransport = function(a, b, c, e) {
        this.authService_.getAccessToken(z(function(f) {
            f && (b.access_token = f);
            qe.prototype.loadFromTransport.call(this, a, b, c, e)
        }, this))
    }
    ;
    var ng = function(a, b, c) {
        this.rootScope_ = a;
        this.document_ = b;
        this.documentElement_ = b[0];
        this.route_ = c
    };
    n = ng.prototype;
    n.safeDigest = function(a) {
        a = a || this.rootScope_;
        a.$$phase || a.$digest()
    }
    ;
    n.getActiveScope = function() {
        return this.getActiveElementScope() || this.getCurrentRouteScope() || this.getNullScope()
    }
    ;
    n.getActiveElementScope = function() {
        var a = this.documentElement_.activeElement !== this.documentElement_.body ? this.documentElement_.activeElement : j
          , b = this.getNearestScope(a);
        return a && b && !b.neverFocus ? b : j
    }
    ;
    n.getNearestScope = function(a) {
        return angular.element(a).scope()
    }
    ;
    n.getNullScope = function() {
        return {
            $emit: function() {},
            $root: {}
        }
    }
    ;
    n.getCurrentRouteScope = function() {
        return this.route_ && this.route_.current && this.route_.current.scope ? this.route_.current.scope : j
    }
    ;
    ng.$inject = ["$rootScope", "$document", "$route"];
    var og = function(a, b, c, e) {
        this.documentElement = a[0];
        this.route_ = b;
        this.angularHelper_ = c;
        this.environment_ = e;
        this.initialize_()
    };
    n = og.prototype;
    n.initialize_ = function() {
        this.documentElement.addEventListener("keydown", z(this.keyEventHandler_, this), k);
        this.documentElement.addEventListener("keyup", z(this.keyEventHandler_, this), k);
        this.documentElement.addEventListener("mousedown", z(this.mouseEventHandler_, this), k);
        this.documentElement.addEventListener("mouseup", z(this.mouseEventHandler_, this), k);
        this.documentElement.addEventListener("mouseout", z(this.mouseOutOverEventHandler_, this), k);
        this.documentElement.addEventListener("mouseover", z(this.mouseOutOverEventHandler_, this), k);
        this.documentElement.addEventListener("mousemove", pg(2, z(this.mouseMoveEventHandler_, this)), k);
        this.documentElement.addEventListener("mousewheel", pg(10, z(this.mouseWheelEventHandler_, this)), k)
    }
    ;
    n.keyEventHandler_ = function(a) {
        var b = this.environment_.getApplicationKeyCode(a.keyCode)
          , c = this.angularHelper_.getActiveScope();
        this.emitEventFromScope_(c, {
            type: a.type,
            keyCode: b,
            currentTarget: a.currentTarget,
            baseEvent: a
        })
    }
    ;
    n.mouseEventHandler_ = function(a) {
        var b = this.angularHelper_.getNearestScope(a.target);
        this.emitEventFromScope_(b, {
            type: a.type.replace("mouse", "key"),
            keyCode: 13,
            currentTarget: a.target,
            baseEvent: a
        })
    }
    ;
    n.mouseWheelEventHandler_ = function(a) {
        var b = this.angularHelper_.getNearestScope(a.target);
        this.emitEventFromScope_(b, {
            type: "keydown",
            keyCode: 0 < a.wheelDelta ? 38 : 40,
            currentTarget: a.target,
            baseEvent: a
        })
    }
    ;
    n.mouseMoveEventHandler_ = function(a) {
        var b = this.angularHelper_.getNearestScope(a.target);
        this.emitEventFromScope_(b, {
            type: "mousemove",
            keyCode: 0,
            currentTarget: a.target,
            baseEvent: a
        })
    }
    ;
    n.mouseOutOverEventHandler_ = function(a) {
        var b = this.angularHelper_.getNearestScope(a.target);
        this.emitEventFromScope_(b, {
            type: a.type,
            keyCode: 0,
            currentTarget: a.target,
            baseEvent: a
        })
    }
    ;
    n.emitKeyPress = function(a, b) {
        var c = b || this.documentElement.activeElement
          , e = this.angularHelper_.getActiveScope();
        this.emitEventFromScope_(e, {
            type: "keydown",
            keyCode: a,
            currentTarget: c
        });
        this.emitEventFromScope_(e, {
            type: "keyup",
            keyCode: a,
            currentTarget: c
        })
    }
    ;
    n.emitEventFromScope_ = function(a, b) {
        if (a) {
            b.baseEvent && (b.preventDefault = z(b.baseEvent.preventDefault, b.baseEvent));
            var c = a.$emit(b.type, b.keyCode, b.currentTarget, b.baseEvent);
            c && c.defaultPrevented && b.preventDefault && b.preventDefault()
        }
    }
    ;
    og.$inject = ["$document", "$route", "angularHelper", "environmentModel"];
    var qg = function(a, b) {
        this.location_ = a;
        this.helper_ = b
    };
    qg.prototype.state = function(a, b) {
        var c = k;
        a !== h && (this.location_.path("/" + a),
        c = i);
        b && (this.location_.search(b),
        c = i);
        c && this.helper_.safeDigest();
        (c = this.location_.path()) && (c = c.split("/").join(""));
        return c
    }
    ;
    qg.prototype.mode = function(a) {
        a !== h && (this.location_.search("mode", a),
        this.helper_.safeDigest());
        return this.location_.search().mode
    }
    ;
    qg.prototype.url = function(a) {
        a !== h && (this.location_.url(a),
        this.helper_.safeDigest());
        return this.location_.url()
    }
    ;
    qg.prototype.modeEquals = function(a) {
        return this.mode() === a
    }
    ;
    qg.$inject = ["$location", "angularHelper"];
    var rg = function(a) {
        this.history_ = [];
        this.activityPathService_ = a
    };
    n = rg.prototype;
    n.getHistory = function() {
        return this.history_
    }
    ;
    n.addHistory = function(a) {
        this.isValidToken_(a) && (this.removeHistory(a),
        this.history_.push(a))
    }
    ;
    n.popHistory = function() {
        this.history_.pop();
        return this.history_.pop()
    }
    ;
    n.removeHistory = function(a) {
        this.isValidToken_(a) && (this.history_ = this.history_.filter(function(b) {
            return !this.tokensSimilar_(b, a)
        }, this))
    }
    ;
    n.clearHistory = function() {
        this.history_.length = 0
    }
    ;
    n.addSequence = function(a) {
        this.isValidToken_(a) && this.activityPathService_.addToken(a)
    }
    ;
    n.isValidToken_ = function(a) {
        return "state"in a && "mode"in a
    }
    ;
    n.tokensSimilar_ = function(a, b) {
        var c = a.mode
          , e = b.mode
          , f = c === e
          , g = "" !== c && "" !== e
          , l = a.state === b.state;
        return l && f || f && g || l && g && c !== e
    }
    ;
    rg.$inject = ["activityPathService"];
    var sg = function(a, b, c, e, f, g, l, m, s, r, A, u, D) {
        this.riverService_ = a;
        this.recommendedVideosService_ = b;
        this.watchLaterService_ = c;
        this.userUploadsService_ = e;
        this.userFavoritesService_ = f;
        this.watchHistoryService_ = g;
        this.activityService_ = l;
        this.userPlaylistsService_ = m;
        this.userSubscriptionsService_ = s;
        this.playlistService_ = r;
        this.itemSuggestionService_ = A;
        this.featuredService_ = u;
        this.newSubscriptionsService_ = D
    };
    sg.prototype.load = function(a, b) {
        var c = [];
        c[0] = [this.createRowDefinitionForService_({
            serviceInstance: this.riverService_,
            title: "[[What to Watch|Title of a list of videos which mix therecommendations and the subscriptions of a user.]]",
            feedIconUrl: "icon-playlozenge"
        }), this.createRowDefinitionForService_({
            serviceInstance: this.newSubscriptionsService_,
            title: "[[My Subscriptions|Title for a list of videos that includes all of the channels that this user has subscribed to.|9186267]]",
            feedIconUrl: "icon-upload"
        })];
        c[5] = [{
            serviceInstance: this.recommendedVideosService_,
            title: "[[Recommended Videos for You|Title of playlist with videos recommended to a user.]]",
            feedIconUrl: "icon-reward"
        }, {
            serviceInstance: this.userUploadsService_,
            title: "[[My Uploads|Playlist title for videos uploaded by the current user.]]",
            feedIconUrl: "icon-upload"
        }, {
            serviceInstance: this.watchHistoryService_,
            title: "[[My Watch History|Title of a playlist with recently watched videos.]]",
            feedIconUrl: "icon-hourglass"
        }, {
            serviceInstance: this.activityService_,
            title: "[[My Activity|Title of a playlist with videos a user recently liked, or subscribed to.]]",
            feedIconUrl: "icon-speechbubble"
        }, {
            serviceInstance: this.watchLaterService_,
            title: "[[My Watch Later Videos|Title of a playlist with videos a user was planning to watch later.]]",
            feedIconUrl: "icon-player-watchlater"
        }].map(z(this.createRowDefinitionForService_, this));
        var e = 4
          , f = z(function(a, f, m, s, r) {
            c[s] = a.watchables.getItems().map(function(a) {
                var b = a.unreadCount || 0;
                return Ud(f, a[m], r(a.id), a.id, {}, b)
            }, this);
            0 == --e && b(Xa(c))
        }, this);
        this.userSubscriptionsService_.loadWithQuery("default", z(function(a) {
            f(a, this.userUploadsService_, "displayName", 1, function(a) {
                return ze(a, i)
            })
        }, this));
        this.userPlaylistsService_.loadWithQuery("default", z(function(a) {
            f(a, this.playlistService_, "title", 2, function() {
                return "icon-playlist"
            })
        }, this));
        this.featuredService_.load({
            lite: 1
        }, z(function(a) {
            c[3] = a;
            0 == --e && b(Xa(c))
        }, this));
        this.itemSuggestionService_.load({
            query: "default",
            type: "channel"
        }, z(function(a) {
            f(a, this.activityService_, "displayName", 4, function(a) {
                return ze(a, i)
            })
        }, this))
    }
    ;
    sg.prototype.createRowDefinitionForService_ = function(a) {
        return Ud(a.serviceInstance, a.title, a.feedIconUrl, "default")
    }
    ;
    sg.$inject = "riverService recommendedVideosService watchLaterService userUploadsService userFavoritesService watchHistoryService activityService userPlaylistsService userSubscriptionsService playlistService itemSuggestionService featuredService newSubscriptionsService".split(" ");
    var tg = function() {};
    tg.prototype.embedPlayer = function(a, b) {
        return ba("yt.player.embed")(a, b)
    }
    ;
    var ug = function(a, b, c, e, f, g, l, m) {
        K.call(this);
        this.window_ = a;
        this.angularHelper_ = b;
        this.environment_ = c;
        this.authService_ = e;
        this.playerVariablesModel_ = f;
        this.playerFactoryService_ = g;
        this.timeService_ = l;
        this.progressModel_ = m;
        this.connectedRemoteApps_ = [];
        this.remoteFeature_ = j;
        this.dequeueing_ = k;
        this.queuedMessages_ = [];
        this.player_ = this.deferredPlayerCommand_ = j;
        this.isPlayerReady_ = k;
        this.adVideoId = j;
        this.errorMessage = "";
        this.isPlayingAd_ = this.isPlaying_ = this.needsLogin = k;
        this.adState_ = this.mainState_ = this.state_ = -1;
        this.hasPlayedOnce_ = k;
        this.markers_ = {};
        this.virtualCurrentTime_ = NaN;
        this.playerInvocationThrottle_ = this.timeService_.createThrottle(this.invokeDeferredPlayerCommand_, 800, this);
        this.progressIntervalId_ = -1;
        this.subtitlesModuleGeneration = 0;
        this.subtitlesTrack = j;
        this.boundUpdateProgress_ = z(this.updateProgress_, this);
        this.environment_.isEureka && document.addEventListener("webkitvisibilitychange", z(function() {
            document.webkitHidden ? this.pause() : 2 === this.state && this.play()
        }, this), k);
        this.resetProgress_()
    };
    F(ug, K);
    t("yt.tv.services.PlayerService", ug, h);
    Nd(ug, ["isPlaying", "isPlayingAd", "state"]);
    n = ug.prototype;
    n.setRemoteApps = function(a) {
        this.connectedRemoteApps_ = a
    }
    ;
    n.setRemoteFeature = function(a) {
        this.remoteFeature_ = a
    }
    ;
    n.supportsSubtitles = function() {
        return this.hasModule_("cc")
    }
    ;
    n.loadSubtitles = function() {
        if (!this.supportsSubtitles())
            return k;
        this.player_.loadModule("cc");
        return i
    }
    ;
    n.unloadSubtitles = function() {
        var a = this.getPlayer_();
        a && a.unloadModule && this.player_.unloadModule("cc")
    }
    ;
    n.getSubtitleTracks = function() {
        return this.getOption_("cc", "tracklist") || []
    }
    ;
    n.getCurrentSubtitleTrack = function() {
        return this.getOption_("cc", "track") || {}
    }
    ;
    n.setCurrentSubtitleTrack = function(a) {
        var b = this.getPlayer_();
        b && b.setOption && this.player_.setOption("cc", "track", a)
    }
    ;
    n.getVolume = function() {
        var a = this.getPlayer_();
        return a && a.getVolume ? a.getVolume() : 0
    }
    ;
    n.setVolume = function(a) {
        var b = this.getPlayer_();
        if (b && b.setVolume && b.getVolume) {
            var c = b.getVolume();
            b.setVolume(a);
            if (c != a && b.getVolume() == a)
                return i
        }
        return k
    }
    ;
    n.getPlayer_ = function() {
        return this.isPlayerReady_ ? this.player_ : j
    }
    ;
    n.embed_ = function() {
        if (!this.player_) {
            var a = this.window_.swfConfig;
            B(a.args, {
                add_player_event_listeners: "0",
                autoplay: 0,
                BASE_YT_URL: j,
                controls: 0,
                el: "leanback",
                enablejsapi: 1,
                ps: "leanback",
                jsapicallback: z(this.playerReadyHandler_, this),
                iv_load_policy: 3,
                cc_load_policy: 3,
                video_container_override: this.getWindowSize_(),
                hl: this.environment_.locale,
                svt: this.environment_.requiresSingleVideoTag
            });
            B(a.args, this.environment_.asDeviceParameters());
            a.assets.css = j;
            a.html5 = i;
            a.disable = {
                flash: i
            };
            a.fallback = z(function() {
                this.errorHandler_()
            }, this);
            this.player_ = this.playerFactoryService_.embedPlayer("leanback-player-container", a)
        }
    }
    ;
    n.getWindowSize_ = function() {
        return this.environment_.is720pVideo ? "1280x720" : this.window_.innerWidth + "x" + this.window_.innerHeight
    }
    ;
    n.startTrackingVideoProgress_ = function() {
        this.stopTrackingVideoProgress_();
        this.progressIntervalId_ = this.timeService_.setInterval(this.boundUpdateProgress_, 500)
    }
    ;
    n.stopTrackingVideoProgress_ = function() {
        this.timeService_.clearInterval(this.progressIntervalId_);
        this.progressIntervalId_ = -1
    }
    ;
    n.clearDeferredPlayerCommand_ = function() {
        this.deferredPlayerCommand_ = j;
        this.virtualCurrentTime_ = NaN
    }
    ;
    n.resetProgress_ = function() {
        this.progressModel_.timeLeft = 0;
        this.progressModel_.currentTime = 0;
        this.progressModel_.duration = 0;
        this.progressModel_.percentageLoaded = 0;
        this.progressModel_.percentagePlayed = 0
    }
    ;
    n.updateProgress_ = function() {
        var a = this.getPlayer_();
        if (!a || !this.hasPlayedOnce_)
            this.resetProgress_();
        else {
            var a = a.getVideoLoadedFraction(), b = this.getDisplayDuration_(), c, e;
            0 == this.state ? (c = b,
            e = 1) : (c = this.getEffectiveCurrentTime(),
            e = !isNaN(c) && isFinite(c) && !isNaN(b) && isFinite(b) && 0 !== b ? c / b : c = b = 0);
            if (!this.isPlayingAd) {
                var f, g;
                for (g in this.markers_)
                    f = this.markers_[g],
                    c >= f.time && (f.handler(),
                    delete this.markers_[g])
            }
            0 !== b && (this.progressModel_.duration = b);
            this.progressModel_.currentTime = c;
            this.progressModel_.timeLeft = Math.max(Math.round(this.progressModel_.duration - this.progressModel_.currentTime), 1);
            this.progressModel_.percentageLoaded = this.cleanFloat_(a);
            this.progressModel_.percentagePlayed = this.cleanFloat_(e)
        }
    }
    ;
    n.cleanFloat_ = function(a) {
        return isNaN(a) || !isFinite(a) ? 0 : Math.round(1E3 * a) / 1E3
    }
    ;
    n.playerReadyHandler_ = function() {
        this.isPlayerReady_ = i;
        this.player_.addEventListener("onStateChange", z(this.stateChangeHandler_, this));
        this.player_.addEventListener("onAdStateChange", z(this.adStateChangeHandler_, this));
        this.player_.addEventListener("onDetailedError", z(this.errorHandler_, this));
        this.player_.addEventListener("onCaptionsTrackListChanged", z(this.captionsTrackListChangeHandler_, this));
        this.player_.addEventListener("captionschanged", z(this.captionsTrackChangeHandler_, this));
        this.dequeueMessages_()
    }
    ;
    n.adStateChangeHandler_ = function(a, b) {
        this.adVideoId = b || j;
        this.adState_ = a;
        this.updateState_();
        this.angularHelper_.safeDigest()
    }
    ;
    n.stateChangeHandler_ = function(a) {
        switch (a) {
        case 3:
            3 !== this.mainState_ && this.playerInvocationThrottle_.pause();
            break;
        case -1:
        case 0:
            this.playerInvocationThrottle_.stop()
        }
        3 === this.mainState_ && 3 !== a && this.playerInvocationThrottle_.resume();
        this.mainState_ = a;
        this.updateState_();
        this.angularHelper_.safeDigest()
    }
    ;
    n.updateAdPlaybackState_ = function() {
        var a = this.isPlayingAd;
        switch (this.adState_) {
        case 0:
        case -1:
            this.isPlayingAd = k;
            break;
        case 3:
        case 1:
            this.isPlayingAd = i
        }
        return a != this.isPlayingAd
    }
    ;
    n.updateState_ = function() {
        var a = this.updateAdPlaybackState_();
        this.state = this.isPlayingAd ? this.adState_ : this.mainState_;
        var b = this.hasPlayedOnce_;
        switch (this.state) {
        case 3:
            this.clearError_();
            break;
        case -1:
        case 0:
            this.updateProgress_();
            this.hasPlayedOnce_ = this.isPlaying = k;
            this.stopTrackingVideoProgress_();
            break;
        case 2:
            this.isPlaying = k;
            break;
        case 1:
            this.clearError_(),
            this.hasPlayedOnce_ = this.isPlaying = i
        }
        b = this.hasPlayedOnce_ && !b;
        if (a || b)
            this.updateProgress_(),
            -1 === this.progressIntervalId_ && this.startTrackingVideoProgress_()
    }
    ;
    n.errorHandler_ = function(a) {
        this.clearDeferredPlayerCommand_();
        this.resetProgress_();
        this.stopTrackingVideoProgress_();
        this.needsLogin = !!a && 1 == a.errorDetail;
        this.errorMessage = a && a.message ? this.needsLogin ? "[[To view this video, please confirm you are old enough by signing in.|Text message displayed when a user tries to watch age-restricted videos.]]" : a.message : "[[An error has occurred please try again later.|Text message displayed when a video cannot be played.]]";
        this.state = -1E3;
        this.angularHelper_.safeDigest()
    }
    ;
    n.clearError_ = function() {
        this.needsLogin = k;
        this.errorMessage = ""
    }
    ;
    n.hasModule_ = function(a) {
        var b = this.getPlayer_();
        a = b && b.getOptions && b.getOptions(a);
        return !(!a || !a.length)
    }
    ;
    n.getOption_ = function(a, b) {
        var c = this.getPlayer_();
        return c && c.getOption ? c.getOption(a, b) : j
    }
    ;
    n.captionsTrackChangeHandler_ = function(a) {
        this.subtitlesTrack = a
    }
    ;
    n.captionsTrackListChangeHandler_ = function() {
        this.subtitlesModuleGeneration++;
        this.angularHelper_.safeDigest()
    }
    ;
    n.enqueueMessage_ = function(a) {
        this.queuedMessages_.push(a);
        this.isPlayerReady_ ? this.dequeueMessages_() : this.embed_()
    }
    ;
    n.enqueueDisposableMessage_ = function(a) {
        this.isPlayerReady_ && this.enqueueMessage_(a)
    }
    ;
    n.dequeueMessages_ = function() {
        if (!this.dequeueing_) {
            this.dequeueing_ = i;
            for (var a = this.queuedMessages_.length, b = 0; b < a && this.isPlayerReady_; ++b)
                this.queuedMessages_[b]();
            this.queuedMessages_.splice(0, b);
            this.dequeueing_ = k
        }
    }
    ;
    n.getDisplayDuration_ = function() {
        return Math.ceil(this.getActualDuration_())
    }
    ;
    n.getActualDuration_ = function() {
        var a = this.getPlayer_();
        return !a || !a.getDuration ? 0 : a.getDuration()
    }
    ;
    n.getEffectiveCurrentTime = function() {
        if (!isNaN(this.virtualCurrentTime_))
            return this.virtualCurrentTime_;
        var a = this.getPlayer_();
        return a && a.getCurrentTime ? this.cleanFloat_(a.getCurrentTime()) : 0
    }
    ;
    n.invokeDeferredPlayerCommand_ = function() {
        if (this.deferredPlayerCommand_) {
            var a = this.deferredPlayerCommand_;
            this.deferredPlayerCommand_ = j;
            this.enqueueMessage_(a)
        }
    }
    ;
    n.loadVideo = function() {
        this.stop();
        this.enqueueMessage_(z(function() {
            this.isPlayerReady_ = k;
            this.authService_.getAccessToken(z(function(a) {
                this.isPlayerReady_ = i;
                this.clearError_();
                a = this.playerVariablesModel_.build(a, this.remoteFeature_, this.connectedRemoteApps_);
                this.player_.loadVideoByPlayerVars(a);
                this.startTrackingVideoProgress_();
                this.dequeueMessages_()
            }, this))
        }, this))
    }
    ;
    n.togglePlaying = function() {
        this.isPlaying ? this.pause() : this.play()
    }
    ;
    n.play = function() {
        this.enqueueMessage_(z(function() {
            this.player_.playVideo();
            this.startTrackingVideoProgress_()
        }, this))
    }
    ;
    n.stop = function() {
        this.isPlayerReady_ && this.player_ && (this.stopTrackingVideoProgress_(),
        this.clearDeferredPlayerCommand_(),
        this.resetProgress_(),
        this.enqueueMessage_(z(function() {
            this.player_.pauseVideo();
            this.player_.stopVideo()
        }, this)),
        this.adVideoId = j,
        this.stateChangeHandler_(-1),
        this.adStateChangeHandler_(-1))
    }
    ;
    n.pause = function() {
        this.enqueueMessage_(z(function() {
            this.player_.pauseVideo()
        }, this))
    }
    ;
    n.seekTo = function(a, b) {
        a = Math.max(a, 0);
        a = Math.min(a, this.getActualDuration_());
        a = this.cleanFloat_(a);
        a = Math.max(a, 0.001);
        this.deferredPlayerCommand_ = z(function() {
            this.virtualCurrentTime_ = NaN;
            this.startTrackingVideoProgress_();
            this.player_.seekTo(a, b)
        }, this);
        this.startTrackingVideoProgress_();
        this.virtualCurrentTime_ = a;
        this.updateProgress_();
        this.playerInvocationThrottle_.fire()
    }
    ;
    n.seekRelative = function(a) {
        var b = isNaN(this.virtualCurrentTime_) ? this.progressModel_.currentTime : this.virtualCurrentTime_;
        a = 0 < a ? Math.min(this.getActualDuration_(), b + a) : Math.max(0, b + a);
        a != b && this.seekTo(a, i)
    }
    ;
    n.updatePlayerForActivity = function() {
        this.enqueueDisposableMessage_(z(function() {
            this.player_.updateLastActiveTime && this.player_.updateLastActiveTime()
        }, this))
    }
    ;
    n.addMarker = function(a, b, c) {
        this.progressModel_.currentTime >= b ? c() : this.markers_[a] = {
            time: b,
            handler: c
        }
    }
    ;
    n.hasMarker = function(a) {
        return a in this.markers_
    }
    ;
    n.clearMarkers = function() {
        this.markers_ = {}
    }
    ;
    ug.$inject = "$window angularHelper environmentModel authService playerVariablesModel playerFactoryService timeService progressModel".split(" ");
    var vg = function(a, b) {
        var c;
        a instanceof vg ? (this.ignoreCase_ = q(b) ? b : a.getIgnoreCase(),
        this.setScheme(a.getScheme()),
        this.setUserInfo(a.getUserInfo()),
        this.setDomain(a.getDomain()),
        this.setPort(a.getPort()),
        this.setPath(a.getPath()),
        this.setQueryData(a.getQueryData().clone()),
        this.setFragment(a.getFragment())) : a && (c = je(String(a))) ? (this.ignoreCase_ = !!b,
        this.setScheme(c[1] || "", i),
        this.setUserInfo(c[2] || "", i),
        this.setDomain(c[3] || "", i),
        this.setPort(c[4]),
        this.setPath(c[5] || "", i),
        this.setQueryData(c[6] || "", i),
        this.setFragment(c[7] || "", i)) : (this.ignoreCase_ = !!b,
        this.queryData_ = new wg(j,j,this.ignoreCase_))
    };
    n = vg.prototype;
    n.scheme_ = "";
    n.userInfo_ = "";
    n.domain_ = "";
    n.port_ = j;
    n.path_ = "";
    n.fragment_ = "";
    n.isReadOnly_ = k;
    n.ignoreCase_ = k;
    n.toString = function() {
        var a = []
          , b = this.getScheme();
        b && a.push(xg(b, yg), ":");
        if (b = this.getDomain()) {
            a.push("//");
            var c = this.getUserInfo();
            c && a.push(xg(c, yg), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.getPort();
            b != j && a.push(":", String(b))
        }
        if (b = this.getPath())
            this.hasDomain() && "/" != b.charAt(0) && a.push("/"),
            a.push(xg(b, "/" == b.charAt(0) ? zg : Ag));
        (b = this.getEncodedQuery()) && a.push("?", b);
        (b = this.getFragment()) && a.push("#", xg(b, Bg));
        return a.join("")
    }
    ;
    n.resolve = function(a) {
        var b = this.clone()
          , c = a.hasScheme();
        c ? b.setScheme(a.getScheme()) : c = a.hasUserInfo();
        c ? b.setUserInfo(a.getUserInfo()) : c = a.hasDomain();
        c ? b.setDomain(a.getDomain()) : c = a.hasPort();
        var e = a.getPath();
        if (c)
            b.setPort(a.getPort());
        else if (c = a.hasPath()) {
            if ("/" != e.charAt(0))
                if (this.hasDomain() && !this.hasPath())
                    e = "/" + e;
                else {
                    var f = b.getPath().lastIndexOf("/");
                    -1 != f && (e = b.getPath().substr(0, f + 1) + e)
                }
            f = e;
            if (".." == f || "." == f)
                e = "";
            else if (-1 == f.indexOf("./") && -1 == f.indexOf("/."))
                e = f;
            else {
                for (var e = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], l = 0; l < f.length; ) {
                    var m = f[l++];
                    "." == m ? e && l == f.length && g.push("") : ".." == m ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(),
                    e && l == f.length && g.push("")) : (g.push(m),
                    e = i)
                }
                e = g.join("/")
            }
        }
        c ? b.setPath(e) : c = a.hasQuery();
        c ? b.setQueryData(a.getDecodedQuery()) : c = a.hasFragment();
        c && b.setFragment(a.getFragment());
        return b
    }
    ;
    n.clone = function() {
        return new vg(this)
    }
    ;
    n.getScheme = function() {
        return this.scheme_
    }
    ;
    n.setScheme = function(a, b) {
        this.enforceReadOnly();
        if (this.scheme_ = b ? a ? decodeURIComponent(a) : "" : a)
            this.scheme_ = this.scheme_.replace(/:$/, "");
        return this
    }
    ;
    n.hasScheme = function() {
        return !!this.scheme_
    }
    ;
    n.getUserInfo = function() {
        return this.userInfo_
    }
    ;
    n.setUserInfo = function(a, b) {
        this.enforceReadOnly();
        this.userInfo_ = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    n.hasUserInfo = function() {
        return !!this.userInfo_
    }
    ;
    n.getDomain = function() {
        return this.domain_
    }
    ;
    n.setDomain = function(a, b) {
        this.enforceReadOnly();
        this.domain_ = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    n.hasDomain = function() {
        return !!this.domain_
    }
    ;
    n.getPort = function() {
        return this.port_
    }
    ;
    n.setPort = function(a) {
        this.enforceReadOnly();
        a ? (a = Number(a),
        (isNaN(a) || 0 > a) && d(Error("Bad port number " + a)),
        this.port_ = a) : this.port_ = j;
        return this
    }
    ;
    n.hasPort = function() {
        return this.port_ != j
    }
    ;
    n.getPath = function() {
        return this.path_
    }
    ;
    n.setPath = function(a, b) {
        this.enforceReadOnly();
        this.path_ = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    n.hasPath = function() {
        return !!this.path_
    }
    ;
    n.hasQuery = function() {
        return "" !== this.queryData_.toString()
    }
    ;
    n.setQueryData = function(a, b) {
        this.enforceReadOnly();
        a instanceof wg ? (this.queryData_ = a,
        this.queryData_.setIgnoreCase(this.ignoreCase_)) : (b || (a = xg(a, Cg)),
        this.queryData_ = new wg(a,j,this.ignoreCase_));
        return this
    }
    ;
    n.setQuery = function(a, b) {
        return this.setQueryData(a, b)
    }
    ;
    n.getEncodedQuery = function() {
        return this.queryData_.toString()
    }
    ;
    n.getDecodedQuery = function() {
        return this.queryData_.toDecodedString()
    }
    ;
    n.getQueryData = function() {
        return this.queryData_
    }
    ;
    n.getQuery = function() {
        return this.getEncodedQuery()
    }
    ;
    n.setParameterValue = function(a, b) {
        this.enforceReadOnly();
        this.queryData_.set(a, b);
        return this
    }
    ;
    n.setParameterValues = function(a, b) {
        this.enforceReadOnly();
        w(b) || (b = [String(b)]);
        this.queryData_.setValues(a, b);
        return this
    }
    ;
    n.getParameterValues = function(a) {
        return this.queryData_.getValues(a)
    }
    ;
    n.getParameterValue = function(a) {
        return this.queryData_.get(a)
    }
    ;
    n.getFragment = function() {
        return this.fragment_
    }
    ;
    n.setFragment = function(a, b) {
        this.enforceReadOnly();
        this.fragment_ = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    n.hasFragment = function() {
        return !!this.fragment_
    }
    ;
    n.hasSameDomainAs = function(a) {
        return (!this.hasDomain() && !a.hasDomain() || this.getDomain() == a.getDomain()) && (!this.hasPort() && !a.hasPort() || this.getPort() == a.getPort())
    }
    ;
    n.makeUnique = function() {
        this.enforceReadOnly();
        this.setParameterValue("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ E()).toString(36));
        return this
    }
    ;
    n.removeParameter = function(a) {
        this.enforceReadOnly();
        this.queryData_.remove(a);
        return this
    }
    ;
    n.setReadOnly = function(a) {
        this.isReadOnly_ = a;
        return this
    }
    ;
    n.isReadOnly = function() {
        return this.isReadOnly_
    }
    ;
    n.enforceReadOnly = function() {
        this.isReadOnly_ && d(Error("Tried to modify a read-only Uri"))
    }
    ;
    n.setIgnoreCase = function(a) {
        this.ignoreCase_ = a;
        this.queryData_ && this.queryData_.setIgnoreCase(a);
        return this
    }
    ;
    n.getIgnoreCase = function() {
        return this.ignoreCase_
    }
    ;
    var xg = function(a, b) {
        return y(a) ? encodeURI(a).replace(b, Dg) : j
    }
      , Dg = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , yg = /[#\/\?@]/g
      , Ag = /[\#\?:]/g
      , zg = /[\#\?]/g
      , Cg = /[\#\?@]/g
      , Bg = /#/g
      , wg = function(a, b, c) {
        this.encodedQuery_ = a || j;
        this.ignoreCase_ = !!c
    };
    n = wg.prototype;
    n.ensureKeyMapInitialized_ = function() {
        if (!this.keyMap_ && (this.keyMap_ = new mb,
        this.count_ = 0,
        this.encodedQuery_))
            for (var a = this.encodedQuery_.split("&"), b = 0; b < a.length; b++) {
                var c = a[b].indexOf("=")
                  , e = j
                  , f = j;
                0 <= c ? (e = a[b].substring(0, c),
                f = a[b].substring(c + 1)) : e = a[b];
                e = Da(e);
                e = this.getKeyName_(e);
                this.add(e, f ? Da(f) : "")
            }
    }
    ;
    n.keyMap_ = j;
    n.count_ = j;
    n.getCount = function() {
        this.ensureKeyMapInitialized_();
        return this.count_
    }
    ;
    n.add = function(a, b) {
        this.ensureKeyMapInitialized_();
        this.invalidateCache_();
        a = this.getKeyName_(a);
        var c = this.keyMap_.get(a);
        c || this.keyMap_.set(a, c = []);
        c.push(b);
        this.count_++;
        return this
    }
    ;
    n.remove = function(a) {
        this.ensureKeyMapInitialized_();
        a = this.getKeyName_(a);
        return this.keyMap_.containsKey(a) ? (this.invalidateCache_(),
        this.count_ -= this.keyMap_.get(a).length,
        this.keyMap_.remove(a)) : k
    }
    ;
    n.clear = function() {
        this.invalidateCache_();
        this.keyMap_ = j;
        this.count_ = 0
    }
    ;
    n.isEmpty = function() {
        this.ensureKeyMapInitialized_();
        return 0 == this.count_
    }
    ;
    n.containsKey = function(a) {
        this.ensureKeyMapInitialized_();
        a = this.getKeyName_(a);
        return this.keyMap_.containsKey(a)
    }
    ;
    n.containsValue = function(a) {
        var b = this.getValues();
        return J(b, a)
    }
    ;
    n.getKeys = function() {
        this.ensureKeyMapInitialized_();
        for (var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], e = 0; e < b.length; e++)
            for (var f = a[e], g = 0; g < f.length; g++)
                c.push(b[e]);
        return c
    }
    ;
    n.getValues = function(a) {
        this.ensureKeyMapInitialized_();
        var b = [];
        if (a)
            this.containsKey(a) && (b = Ta(b, this.keyMap_.get(this.getKeyName_(a))));
        else {
            a = this.keyMap_.getValues();
            for (var c = 0; c < a.length; c++)
                b = Ta(b, a[c])
        }
        return b
    }
    ;
    n.set = function(a, b) {
        this.ensureKeyMapInitialized_();
        this.invalidateCache_();
        a = this.getKeyName_(a);
        this.containsKey(a) && (this.count_ -= this.keyMap_.get(a).length);
        this.keyMap_.set(a, [b]);
        this.count_++;
        return this
    }
    ;
    n.get = function(a, b) {
        var c = a ? this.getValues(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    n.setValues = function(a, b) {
        this.remove(a);
        0 < b.length && (this.invalidateCache_(),
        this.keyMap_.set(this.getKeyName_(a), Ua(b)),
        this.count_ += b.length)
    }
    ;
    n.toString = function() {
        if (this.encodedQuery_)
            return this.encodedQuery_;
        if (!this.keyMap_)
            return "";
        for (var a = [], b = this.keyMap_.getKeys(), c = 0; c < b.length; c++)
            for (var e = b[c], f = encodeURIComponent(String(e)), e = this.getValues(e), g = 0; g < e.length; g++) {
                var l = f;
                "" !== e[g] && (l += "=" + encodeURIComponent(String(e[g])));
                a.push(l)
            }
        return this.encodedQuery_ = a.join("&")
    }
    ;
    n.toDecodedString = function() {
        return this.toString() ? decodeURIComponent(this.toString()) : ""
    }
    ;
    n.invalidateCache_ = function() {
        this.encodedQuery_ = j
    }
    ;
    n.filterKeys = function(a) {
        this.ensureKeyMapInitialized_();
        lb(this.keyMap_, function(b, c) {
            J(a, c) || this.remove(c)
        }, this);
        return this
    }
    ;
    n.clone = function() {
        var a = new wg;
        a.encodedQuery_ = this.encodedQuery_;
        this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(),
        a.count_ = this.count_);
        return a
    }
    ;
    n.getKeyName_ = function(a) {
        a = String(a);
        this.ignoreCase_ && (a = a.toLowerCase());
        return a
    }
    ;
    n.setIgnoreCase = function(a) {
        a && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(),
        this.invalidateCache_(),
        lb(this.keyMap_, function(a, c) {
            var e = c.toLowerCase();
            c != e && (this.remove(c),
            this.setValues(e, a))
        }, this));
        this.ignoreCase_ = a
    }
    ;
    n.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            lb(arguments[b], function(a, b) {
                this.add(b, a)
            }, this)
    }
    ;
    var W = function() {
        this.subscriptions_ = [];
        this.topics_ = {}
    };
    F(W, Ne);
    n = W.prototype;
    n.key_ = 1;
    n.publishDepth_ = 0;
    n.subscribe = function(a, b, c) {
        var e = this.topics_[a];
        e || (e = this.topics_[a] = []);
        var f = this.key_;
        this.subscriptions_[f] = a;
        this.subscriptions_[f + 1] = b;
        this.subscriptions_[f + 2] = c;
        this.key_ = f + 3;
        e.push(f);
        return f
    }
    ;
    n.subscribeOnce = function(a, b, c) {
        var e = this.subscribe(a, function(a) {
            b.apply(c, arguments);
            this.unsubscribeByKey(e)
        }, this);
        return e
    }
    ;
    n.unsubscribe = function(a, b, c) {
        if (a = this.topics_[a]) {
            var e = this.subscriptions_;
            if (a = Ra(a, function(a) {
                return e[a + 1] == b && e[a + 2] == c
            }))
                return this.unsubscribeByKey(a)
        }
        return k
    }
    ;
    n.unsubscribeByKey = function(a) {
        if (0 != this.publishDepth_)
            return this.pendingKeys_ || (this.pendingKeys_ = []),
            this.pendingKeys_.push(a),
            k;
        var b = this.subscriptions_[a];
        if (b) {
            var c = this.topics_[b];
            c && Sa(c, a);
            delete this.subscriptions_[a];
            delete this.subscriptions_[a + 1];
            delete this.subscriptions_[a + 2]
        }
        return !!b
    }
    ;
    n.publish = function(a, b) {
        var c = this.topics_[a];
        if (c) {
            this.publishDepth_++;
            for (var e = Wa(arguments, 1), f = 0, g = c.length; f < g; f++) {
                var l = c[f];
                this.subscriptions_[l + 1].apply(this.subscriptions_[l + 2], e)
            }
            this.publishDepth_--;
            if (this.pendingKeys_ && 0 == this.publishDepth_)
                for (; c = this.pendingKeys_.pop(); )
                    this.unsubscribeByKey(c);
            return 0 != f
        }
        return k
    }
    ;
    n.clear = function(a) {
        if (a) {
            var b = this.topics_[a];
            b && (I(b, this.unsubscribeByKey, this),
            delete this.topics_[a])
        } else
            this.subscriptions_.length = 0,
            this.topics_ = {}
    }
    ;
    n.getCount = function(a) {
        if (a) {
            var b = this.topics_[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.topics_)
            a += this.getCount(b);
        return a
    }
    ;
    n.disposeInternal = function() {
        W.superClass_.disposeInternal.call(this);
        delete this.subscriptions_;
        delete this.topics_;
        delete this.pendingKeys_
    }
    ;
    t("yt.config_", window.yt && window.yt.config_ || {}, h);
    t("yt.tokens_", window.yt && window.yt.tokens_ || {}, h);
    t("yt.globals_", window.yt && window.yt.globals_ || {}, h);
    t("yt.msgs_", window.yt && window.yt.msgs_ || {}, h);
    var Eg = window.yt && window.yt.timeouts_ || [];
    t("yt.timeouts_", Eg, h);
    t("yt.intervals_", window.yt && window.yt.intervals_ || [], h);
    var Fg = function(a, b) {
        var c = window.setTimeout(a, b);
        Eg.push(c);
        return c
    };
    var Gg = ba("yt.pubsub.instance_") || new W;
    W.prototype.subscribe = W.prototype.subscribe;
    W.prototype.unsubscribeByKey = W.prototype.unsubscribeByKey;
    W.prototype.publish = W.prototype.publish;
    W.prototype.clear = W.prototype.clear;
    t("yt.pubsub.instance_", Gg, h);
    var Hg = function(a, b) {
        var c = ba("yt.pubsub.instance_");
        return c ? c.publish.apply(c, arguments) : k
    };
    var Ig = function() {
        this.relativeTimeStart_ = E()
    }
      , Jg = new Ig;
    Ig.prototype.set = function(a) {
        this.relativeTimeStart_ = a
    }
    ;
    Ig.prototype.reset = function() {
        this.set(E())
    }
    ;
    Ig.prototype.get = function() {
        return this.relativeTimeStart_
    }
    ;
    var Kg = function(a) {
        this.prefix_ = a || "";
        this.startTimeProvider_ = Jg
    };
    n = Kg.prototype;
    n.showAbsoluteTime = i;
    n.showRelativeTime = i;
    n.showLoggerName = i;
    n.showExceptionText = k;
    n.showSeverityLevel = k;
    n.setStartTimeProvider = function(a) {
        this.startTimeProvider_ = a
    }
    ;
    n.getStartTimeProvider = function() {
        return this.startTimeProvider_
    }
    ;
    n.resetRelativeTimeStart = function() {
        this.startTimeProvider_.reset()
    }
    ;
    var Mg = function(a) {
        a = new Date(a.getMillis());
        return Lg(a.getFullYear() - 2E3) + Lg(a.getMonth() + 1) + Lg(a.getDate()) + " " + Lg(a.getHours()) + ":" + Lg(a.getMinutes()) + ":" + Lg(a.getSeconds()) + "." + Lg(Math.floor(a.getMilliseconds() / 10))
    }
      , Lg = function(a) {
        return 10 > a ? "0" + a : String(a)
    }
      , Ng = function(a, b) {
        var c = (a.getMillis() - b) / 1E3
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
      , Og = function(a) {
        Kg.call(this, a)
    };
    F(Og, Kg);
    Og.prototype.formatRecord = function(a) {
        var b = [];
        b.push(this.prefix_, " ");
        this.showAbsoluteTime && b.push("[", Mg(a), "] ");
        this.showRelativeTime && b.push("[", Ng(a, this.startTimeProvider_.get()), "s] ");
        this.showLoggerName && b.push("[", a.getLoggerName(), "] ");
        this.showSeverityLevel && b.push("[", a.getLevel().name, "] ");
        b.push(a.getMessage(), "\n");
        this.showExceptionText && a.getException() && b.push(a.getExceptionText(), "\n");
        return b.join("")
    }
    ;
    var Qg = function(a, b) {
        try {
            var c;
            var e = ba("window.location.href");
            if (y(a))
                c = {
                    message: a,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: e,
                    stack: "Not available"
                };
            else {
                var f, g, l = k;
                try {
                    f = a.lineNumber || a.line || "Not available"
                } catch (m) {
                    f = "Not available",
                    l = i
                }
                try {
                    g = a.fileName || a.filename || a.sourceURL || e
                } catch (s) {
                    g = "Not available",
                    l = i
                }
                c = l || !a.lineNumber || !a.fileName || !a.stack ? {
                    message: a.message,
                    name: a.name,
                    lineNumber: f,
                    fileName: g,
                    stack: a.stack || "Not available"
                } : a
            }
            return "Message: " + Ja(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + Ja(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ja(Pg(b) + "-> ")
        } catch (r) {
            return "Exception trying to expose exception! You win, we lose. " + r
        }
    }
      , Pg = function(a) {
        return Rg(a || arguments.callee.caller, [])
    }
      , Rg = function(a, b) {
        var c = [];
        if (J(b, a))
            c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(Sg(a) + "(");
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
                    g = (g = Sg(g)) ? g : "[fn]";
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
                c.push(Rg(a.caller, b))
            } catch (l) {
                c.push("[exception trying to get caller]\n")
            }
        } else
            a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }
      , Sg = function(a) {
        if (Tg[a])
            return Tg[a];
        a = String(a);
        if (!Tg[a]) {
            var b = /function ([^\(]+)/.exec(a);
            Tg[a] = b ? b[1] : "[Anonymous]"
        }
        return Tg[a]
    }
      , Tg = {};
    var Ug = function(a, b, c, e, f) {
        this.reset(a, b, c, e, f)
    };
    Ug.prototype.sequenceNumber_ = 0;
    Ug.prototype.exception_ = j;
    Ug.prototype.exceptionText_ = j;
    var Vg = 0;
    n = Ug.prototype;
    n.reset = function(a, b, c, e, f) {
        this.sequenceNumber_ = "number" == typeof f ? f : Vg++;
        this.time_ = e || E();
        this.level_ = a;
        this.msg_ = b;
        this.loggerName_ = c;
        delete this.exception_;
        delete this.exceptionText_
    }
    ;
    n.getLoggerName = function() {
        return this.loggerName_
    }
    ;
    n.getException = function() {
        return this.exception_
    }
    ;
    n.setException = function(a) {
        this.exception_ = a
    }
    ;
    n.getExceptionText = function() {
        return this.exceptionText_
    }
    ;
    n.setExceptionText = function(a) {
        this.exceptionText_ = a
    }
    ;
    n.setLoggerName = function(a) {
        this.loggerName_ = a
    }
    ;
    n.getLevel = function() {
        return this.level_
    }
    ;
    n.setLevel = function(a) {
        this.level_ = a
    }
    ;
    n.getMessage = function() {
        return this.msg_
    }
    ;
    n.setMessage = function(a) {
        this.msg_ = a
    }
    ;
    n.getMillis = function() {
        return this.time_
    }
    ;
    n.setMillis = function(a) {
        this.time_ = a
    }
    ;
    n.getSequenceNumber = function() {
        return this.sequenceNumber_
    }
    ;
    var Wg = function(a) {
        this.name_ = a
    };
    Wg.prototype.parent_ = j;
    Wg.prototype.level_ = j;
    Wg.prototype.children_ = j;
    Wg.prototype.handlers_ = j;
    var Xg = function(a, b) {
        this.name = a;
        this.value = b
    };
    Xg.prototype.toString = function() {
        return this.name
    }
    ;
    new Xg("OFF",Infinity);
    var Yg = new Xg("SHOUT",1200)
      , Zg = new Xg("SEVERE",1E3)
      , $g = new Xg("WARNING",900)
      , ah = new Xg("INFO",800)
      , bh = new Xg("CONFIG",700)
      , ch = new Xg("FINE",500)
      , dh = new Xg("FINER",400)
      , eh = new Xg("FINEST",300);
    new Xg("ALL",0);
    n = Wg.prototype;
    n.getName = function() {
        return this.name_
    }
    ;
    n.addHandler = function(a) {
        this.handlers_ || (this.handlers_ = []);
        this.handlers_.push(a)
    }
    ;
    n.removeHandler = function(a) {
        var b = this.handlers_;
        return !!b && Sa(b, a)
    }
    ;
    n.getParent = function() {
        return this.parent_
    }
    ;
    n.getChildren = function() {
        this.children_ || (this.children_ = {});
        return this.children_
    }
    ;
    n.setLevel = function(a) {
        this.level_ = a
    }
    ;
    n.getLevel = function() {
        return this.level_
    }
    ;
    n.getEffectiveLevel = function() {
        return this.level_ ? this.level_ : this.parent_ ? this.parent_.getEffectiveLevel() : j
    }
    ;
    n.isLoggable = function(a) {
        return a.value >= this.getEffectiveLevel().value
    }
    ;
    n.log = function(a, b, c) {
        this.isLoggable(a) && this.doLogRecord_(this.getLogRecord(a, b, c))
    }
    ;
    n.getLogRecord = function(a, b, c) {
        var e = new Ug(a,String(b),this.name_);
        c && (e.setException(c),
        e.setExceptionText(Qg(c, arguments.callee.caller)));
        return e
    }
    ;
    n.shout = function(a, b) {
        this.log(Yg, a, b)
    }
    ;
    n.severe = function(a, b) {
        this.log(Zg, a, b)
    }
    ;
    n.warning = function(a, b) {
        this.log($g, a, b)
    }
    ;
    n.info = function(a, b) {
        this.log(ah, a, b)
    }
    ;
    n.config = function(a, b) {
        this.log(bh, a, b)
    }
    ;
    n.fine = function(a, b) {
        this.log(ch, a, b)
    }
    ;
    n.finer = function(a, b) {
        this.log(dh, a, b)
    }
    ;
    n.finest = function(a, b) {
        this.log(eh, a, b)
    }
    ;
    n.logRecord = function(a) {
        this.isLoggable(a.getLevel()) && this.doLogRecord_(a)
    }
    ;
    n.doLogRecord_ = function(a) {
        var b = "log:" + a.getMessage();
        p.console && (p.console.timeStamp ? p.console.timeStamp(b) : p.console.markTimeline && p.console.markTimeline(b));
        p.msWriteProfilerMark && p.msWriteProfilerMark(b);
        for (b = this; b; )
            b.callPublish_(a),
            b = b.getParent()
    }
    ;
    n.callPublish_ = function(a) {
        if (this.handlers_)
            for (var b = 0, c; c = this.handlers_[b]; b++)
                c(a)
    }
    ;
    n.setParent_ = function(a) {
        this.parent_ = a
    }
    ;
    n.addChild_ = function(a, b) {
        this.getChildren()[a] = b
    }
    ;
    var fh = {}
      , gh = j
      , hh = function(a) {
        gh || (gh = new Wg(""),
        fh[""] = gh,
        gh.setLevel(bh));
        var b;
        if (!(b = fh[a])) {
            b = new Wg(a);
            var c = a.lastIndexOf(".")
              , e = a.substr(0, c)
              , c = a.substr(c + 1)
              , e = hh(e);
            e.addChild_(c, b);
            b.setParent_(e);
            fh[a] = b
        }
        return b
    };
    var ih = function(a, b) {
        this.serializer_ = new tb(a);
        this.parser_ = b ? sb : rb
    };
    ih.prototype.stringify = function(a) {
        return this.serializer_.serialize(a)
    }
    ;
    ih.prototype.parse = function(a) {
        return this.parser_(a)
    }
    ;
    var jh = function(a) {
        this.maxSize_ = a || 100;
        this.buff_ = []
    };
    n = jh.prototype;
    n.nextPtr_ = 0;
    n.add = function(a) {
        this.buff_[this.nextPtr_] = a;
        this.nextPtr_ = (this.nextPtr_ + 1) % this.maxSize_
    }
    ;
    n.get = function(a) {
        a = this.normalizeIndex_(a);
        return this.buff_[a]
    }
    ;
    n.set = function(a, b) {
        a = this.normalizeIndex_(a);
        this.buff_[a] = b
    }
    ;
    n.getCount = function() {
        return this.buff_.length
    }
    ;
    n.isEmpty = function() {
        return 0 == this.buff_.length
    }
    ;
    n.clear = function() {
        this.nextPtr_ = this.buff_.length = 0
    }
    ;
    n.getValues = function() {
        return this.getNewestValues(this.getCount())
    }
    ;
    n.getNewestValues = function(a) {
        var b = this.getCount()
          , c = [];
        for (a = this.getCount() - a; a < b; a++)
            c[a] = this.get(a);
        return c
    }
    ;
    n.getKeys = function() {
        for (var a = [], b = this.getCount(), c = 0; c < b; c++)
            a[c] = c;
        return a
    }
    ;
    n.containsKey = function(a) {
        return a < this.getCount()
    }
    ;
    n.containsValue = function(a) {
        for (var b = this.getCount(), c = 0; c < b; c++)
            if (this.get(c) == a)
                return i;
        return k
    }
    ;
    n.getLast = function() {
        return 0 == this.getCount() ? j : this.get(this.getCount() - 1)
    }
    ;
    n.normalizeIndex_ = function(a) {
        a >= this.buff_.length && d(Error("Out of bounds exception"));
        return this.buff_.length < this.maxSize_ ? a : (this.nextPtr_ + Number(a)) % this.maxSize_
    }
    ;
    var kh = function(a) {
        this.handler_ = a;
        this.keys_ = []
    };
    F(kh, Ne);
    var lh = [];
    n = kh.prototype;
    n.listen = function(a, b, c, e, f) {
        w(b) || (lh[0] = b,
        b = lh);
        for (var g = 0; g < b.length; g++) {
            var l = bf(a, b[g], c || this, e || k, f || this.handler_ || this);
            this.keys_.push(l)
        }
        return this
    }
    ;
    n.listenOnce = function(a, b, c, e, f) {
        if (w(b))
            for (var g = 0; g < b.length; g++)
                this.listenOnce(a, b[g], c, e, f);
        else
            a = ef(a, b, c || this, e, f || this.handler_ || this),
            this.keys_.push(a);
        return this
    }
    ;
    n.listenWithWrapper = function(a, b, c, e, f) {
        b.listen(a, c, e, f || this.handler_ || this, this);
        return this
    }
    ;
    n.getListenerCount = function() {
        return this.keys_.length
    }
    ;
    n.unlisten = function(a, b, c, e, f) {
        if (w(b))
            for (var g = 0; g < b.length; g++)
                this.unlisten(a, b[g], c, e, f);
        else {
            a: {
                c = c || this;
                f = f || this.handler_ || this;
                e = !!e;
                if (a = gf(a, b, e))
                    for (b = 0; b < a.length; b++)
                        if (!a[b].removed && a[b].listener == c && a[b].capture == e && a[b].handler == f) {
                            a = a[b];
                            break a
                        }
                a = j
            }
            a && (a = a.key,
            hf(a),
            Sa(this.keys_, a))
        }
        return this
    }
    ;
    n.unlistenWithWrapper = function(a, b, c, e, f) {
        b.unlisten(a, c, e, f || this.handler_ || this, this);
        return this
    }
    ;
    n.removeAll = function() {
        I(this.keys_, hf);
        this.keys_.length = 0
    }
    ;
    n.disposeInternal = function() {
        kh.superClass_.disposeInternal.call(this);
        this.removeAll()
    }
    ;
    n.handleEvent = function() {
        d(Error("EventHandler.handleEvent not implemented"))
    }
    ;
    var mh = function() {};
    mh.prototype.cachedOptions_ = j;
    mh.prototype.getOptions = function() {
        return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
    }
    ;
    var nh, oh = function() {};
    F(oh, mh);
    oh.prototype.createInstance = function() {
        var a = this.getProgId_();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    }
    ;
    oh.prototype.internalGetOptions = function() {
        var a = {};
        this.getProgId_() && (a[0] = i,
        a[1] = i);
        return a
    }
    ;
    oh.prototype.getProgId_ = function() {
        if (!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c),
                    this.ieProgId_ = c
                } catch (e) {}
            }
            d(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
        }
        return this.ieProgId_
    }
    ;
    nh = new oh;
    var ph = function(a, b, c, e, f) {
        this.channel_ = a;
        this.channelDebug_ = b;
        this.sid_ = c;
        this.rid_ = e;
        this.retryId_ = f || 1;
        this.timeout_ = 45E3;
        this.eventHandler_ = new kh(this);
        this.pollingTimer_ = new qf;
        this.pollingTimer_.setInterval(250)
    };
    n = ph.prototype;
    n.extraHeaders_ = j;
    n.successful_ = k;
    n.watchDogTimerId_ = j;
    n.watchDogTimeoutTime_ = j;
    n.requestStartTime_ = j;
    n.type_ = j;
    n.baseUri_ = j;
    n.requestUri_ = j;
    n.postData_ = j;
    n.xmlHttp_ = j;
    n.xmlHttpChunkStart_ = 0;
    n.trident_ = j;
    n.verb_ = j;
    n.lastError_ = j;
    n.lastStatusCode_ = -1;
    n.sendClose_ = i;
    n.cancelled_ = k;
    n.readyStateChangeThrottleMs_ = 0;
    n.readyStateChangeThrottle_ = j;
    var qh = function(a, b) {
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
      , rh = {}
      , sh = {};
    n = ph.prototype;
    n.setExtraHeaders = function(a) {
        this.extraHeaders_ = a
    }
    ;
    n.setTimeout = function(a) {
        this.timeout_ = a
    }
    ;
    n.setReadyStateChangeThrottle = function(a) {
        this.readyStateChangeThrottleMs_ = a
    }
    ;
    n.xmlHttpPost = function(a, b, c) {
        this.type_ = 1;
        this.baseUri_ = a.clone().makeUnique();
        this.postData_ = b;
        this.decodeChunks_ = c;
        this.sendXmlHttp_(j)
    }
    ;
    n.xmlHttpGet = function(a, b, c, e) {
        this.type_ = 1;
        this.baseUri_ = a.clone().makeUnique();
        this.postData_ = j;
        this.decodeChunks_ = b;
        e && (this.sendClose_ = k);
        this.sendXmlHttp_(c)
    }
    ;
    n.sendXmlHttp_ = function(a) {
        this.requestStartTime_ = E();
        this.ensureWatchDogTimer_();
        this.requestUri_ = this.baseUri_.clone();
        this.requestUri_.setParameterValues("t", this.retryId_);
        this.xmlHttpChunkStart_ = 0;
        var b = this.channel_.shouldUseSecondaryDomains();
        this.xmlHttp_ = this.channel_.createXhrIo(b ? a : j);
        0 < this.readyStateChangeThrottleMs_ && (this.readyStateChangeThrottle_ = new tf(z(this.xmlHttpHandler_, this, this.xmlHttp_),this.readyStateChangeThrottleMs_));
        this.eventHandler_.listen(this.xmlHttp_, "readystatechange", this.readyStateChangeHandler_);
        var c;
        if (this.extraHeaders_) {
            a = this.extraHeaders_;
            b = {};
            for (c in a)
                b[c] = a[c];
            c = b
        } else
            c = {};
        this.postData_ ? (this.verb_ = "POST",
        c["Content-Type"] = "application/x-www-form-urlencoded",
        this.xmlHttp_.send(this.requestUri_, this.verb_, this.postData_, c)) : (this.verb_ = "GET",
        this.sendClose_ && !M && (c.Connection = "close"),
        this.xmlHttp_.send(this.requestUri_, this.verb_, j, c));
        this.channel_.notifyServerReachabilityEvent(1);
        this.channelDebug_.xmlHttpChannelRequest(this.verb_, this.requestUri_, this.rid_, this.retryId_, this.postData_)
    }
    ;
    n.readyStateChangeHandler_ = function(a) {
        a = a.target;
        var b = this.readyStateChangeThrottle_;
        b && 3 == a.getReadyState() ? (this.channelDebug_.debug("Throttling readystatechange."),
        b.fire()) : this.xmlHttpHandler_(a)
    }
    ;
    n.xmlHttpHandler_ = function(a) {
        try {
            if (a == this.xmlHttp_)
                this.onXmlHttpReadyStateChanged_();
            else
                this.channelDebug_.warning("Called back with an unexpected xmlhttp")
        } catch (b) {
            this.channelDebug_.debug("Failed call to OnXmlHttpReadyStateChanged_"),
            this.xmlHttp_ && this.xmlHttp_.getResponseText() ? this.channelDebug_.dumpException(b, "ResponseText: " + this.xmlHttp_.getResponseText()) : this.channelDebug_.dumpException(b, "No response text")
        } finally {}
    }
    ;
    n.onXmlHttpReadyStateChanged_ = function() {
        var a = this.xmlHttp_.getReadyState()
          , b = this.xmlHttp_.getLastErrorCode()
          , c = this.xmlHttp_.getStatus();
        if (L && !O(10) || M && !N("420+")) {
            if (4 > a)
                return
        } else if (3 > a || 3 == a && !Kb && !this.xmlHttp_.getResponseText())
            return;
        !this.cancelled_ && (4 == a && 7 != b) && (8 == b || 0 >= c ? this.channel_.notifyServerReachabilityEvent(3) : this.channel_.notifyServerReachabilityEvent(2));
        this.cancelWatchDogTimer_();
        this.lastStatusCode_ = b = this.xmlHttp_.getStatus();
        (c = this.xmlHttp_.getResponseText()) || this.channelDebug_.debug("No response text for uri " + this.requestUri_ + " status " + b);
        this.successful_ = 200 == b;
        this.channelDebug_.xmlHttpChannelResponseMetaData(this.verb_, this.requestUri_, this.rid_, this.retryId_, a, b);
        if (this.successful_) {
            if (4 == a && this.cleanup_(),
            this.decodeChunks_ ? (this.decodeNextChunks_(a, c),
            Kb && 3 == a && this.startPolling_()) : (this.channelDebug_.xmlHttpChannelResponseText(this.rid_, c, j),
            this.safeOnRequestData_(c)),
            this.successful_ && !this.cancelled_)
                if (4 == a)
                    this.channel_.onRequestComplete(this);
                else
                    this.successful_ = k,
                    this.ensureWatchDogTimer_()
        } else
            400 == b && 0 < c.indexOf("Unknown SID") ? (this.lastError_ = 3,
            X(13),
            this.channelDebug_.warning("XMLHTTP Unknown SID (" + this.rid_ + ")")) : (this.lastError_ = 0,
            X(14),
            this.channelDebug_.warning("XMLHTTP Bad status " + b + " (" + this.rid_ + ")")),
            this.cleanup_(),
            this.dispatchFailure_()
    }
    ;
    n.decodeNextChunks_ = function(a, b) {
        for (var c = i; !this.cancelled_ && this.xmlHttpChunkStart_ < b.length; ) {
            var e = this.getNextChunk_(b);
            if (e == sh) {
                4 == a && (this.lastError_ = 4,
                X(15),
                c = k);
                this.channelDebug_.xmlHttpChannelResponseText(this.rid_, j, "[Incomplete Response]");
                break
            } else if (e == rh) {
                this.lastError_ = 4;
                X(16);
                this.channelDebug_.xmlHttpChannelResponseText(this.rid_, b, "[Invalid Chunk]");
                c = k;
                break
            } else
                this.channelDebug_.xmlHttpChannelResponseText(this.rid_, e, j),
                this.safeOnRequestData_(e)
        }
        4 == a && 0 == b.length && (this.lastError_ = 1,
        X(17),
        c = k);
        this.successful_ = this.successful_ && c;
        c || (this.channelDebug_.xmlHttpChannelResponseText(this.rid_, b, "[Invalid Chunked Response]"),
        this.cleanup_(),
        this.dispatchFailure_())
    }
    ;
    n.pollResponse_ = function() {
        var a = this.xmlHttp_.getReadyState()
          , b = this.xmlHttp_.getResponseText();
        this.xmlHttpChunkStart_ < b.length && (this.cancelWatchDogTimer_(),
        this.decodeNextChunks_(a, b),
        this.successful_ && 4 != a && this.ensureWatchDogTimer_())
    }
    ;
    n.startPolling_ = function() {
        this.eventHandler_.listen(this.pollingTimer_, "tick", this.pollResponse_);
        this.pollingTimer_.start()
    }
    ;
    n.cancelRequestAsBrowserIsOffline_ = function() {
        this.successful_ && this.channelDebug_.severe("Received browser offline event even though request completed successfully");
        this.channelDebug_.browserOfflineResponse(this.requestUri_);
        this.cleanup_();
        this.lastError_ = 6;
        X(21);
        this.dispatchFailure_()
    }
    ;
    n.getNextChunk_ = function(a) {
        var b = this.xmlHttpChunkStart_
          , c = a.indexOf("\n", b);
        if (-1 == c)
            return sh;
        b = a.substring(b, c);
        b = Number(b);
        if (isNaN(b))
            return rh;
        c += 1;
        if (c + b > a.length)
            return sh;
        a = a.substr(c, b);
        this.xmlHttpChunkStart_ = c + b;
        return a
    }
    ;
    n.tridentGet = function(a, b) {
        this.type_ = 3;
        this.baseUri_ = a.clone().makeUnique();
        this.tridentGet_(b)
    }
    ;
    n.tridentGet_ = function(a) {
        this.requestStartTime_ = E();
        this.ensureWatchDogTimer_();
        var b = a ? window.location.hostname : "";
        this.requestUri_ = this.baseUri_.clone();
        this.requestUri_.setParameterValue("DOMAIN", b);
        this.requestUri_.setParameterValue("t", this.retryId_);
        try {
            this.trident_ = new ActiveXObject("htmlfile")
        } catch (c) {
            this.channelDebug_.severe("ActiveX blocked");
            this.cleanup_();
            this.lastError_ = 7;
            X(22);
            this.dispatchFailure_();
            return
        }
        var e = "<html><body>";
        a && (e += '<script>document.domain="' + b + '"\x3c/script>');
        e += "</body></html>";
        this.trident_.open();
        this.trident_.write(e);
        this.trident_.close();
        this.trident_.parentWindow.m = z(this.onTridentRpcMessage_, this);
        this.trident_.parentWindow.d = z(this.onTridentDone_, this, i);
        this.trident_.parentWindow.rpcClose = z(this.onTridentDone_, this, k);
        a = this.trident_.createElement("div");
        this.trident_.parentWindow.document.body.appendChild(a);
        a.innerHTML = '<iframe src="' + this.requestUri_ + '"></iframe>';
        this.channelDebug_.tridentChannelRequest("GET", this.requestUri_, this.rid_, this.retryId_);
        this.channel_.notifyServerReachabilityEvent(1)
    }
    ;
    n.onTridentRpcMessage_ = function(a) {
        th(z(this.onTridentRpcMessageAsync_, this, a), 0)
    }
    ;
    n.onTridentRpcMessageAsync_ = function(a) {
        this.cancelled_ || (this.channelDebug_.tridentChannelResponseText(this.rid_, a),
        this.cancelWatchDogTimer_(),
        this.safeOnRequestData_(a),
        this.ensureWatchDogTimer_())
    }
    ;
    n.onTridentDone_ = function(a) {
        th(z(this.onTridentDoneAsync_, this, a), 0)
    }
    ;
    n.onTridentDoneAsync_ = function(a) {
        this.cancelled_ || (this.channelDebug_.tridentChannelResponseDone(this.rid_, a),
        this.cleanup_(),
        this.successful_ = a,
        this.channel_.onRequestComplete(this),
        this.channel_.notifyServerReachabilityEvent(4))
    }
    ;
    n.sendUsingImgTag = function(a) {
        this.type_ = 2;
        this.baseUri_ = a.clone().makeUnique();
        this.imgTagGet_()
    }
    ;
    n.imgTagGet_ = function() {
        (new Image).src = this.baseUri_;
        this.requestStartTime_ = E();
        this.ensureWatchDogTimer_()
    }
    ;
    n.cancel = function() {
        this.cancelled_ = i;
        this.cleanup_()
    }
    ;
    n.ensureWatchDogTimer_ = function() {
        this.watchDogTimeoutTime_ = E() + this.timeout_;
        this.startWatchDogTimer_(this.timeout_)
    }
    ;
    n.startWatchDogTimer_ = function(a) {
        this.watchDogTimerId_ != j && d(Error("WatchDog timer not null"));
        this.watchDogTimerId_ = th(z(this.onWatchDogTimeout_, this), a)
    }
    ;
    n.cancelWatchDogTimer_ = function() {
        this.watchDogTimerId_ && (p.clearTimeout(this.watchDogTimerId_),
        this.watchDogTimerId_ = j)
    }
    ;
    n.onWatchDogTimeout_ = function() {
        this.watchDogTimerId_ = j;
        var a = E();
        0 <= a - this.watchDogTimeoutTime_ ? this.handleTimeout_() : (this.channelDebug_.warning("WatchDog timer called too early"),
        this.startWatchDogTimer_(this.watchDogTimeoutTime_ - a))
    }
    ;
    n.handleTimeout_ = function() {
        this.successful_ && this.channelDebug_.severe("Received watchdog timeout even though request loaded successfully");
        this.channelDebug_.timeoutResponse(this.requestUri_);
        2 != this.type_ && this.channel_.notifyServerReachabilityEvent(3);
        this.cleanup_();
        this.lastError_ = 2;
        X(18);
        this.dispatchFailure_()
    }
    ;
    n.dispatchFailure_ = function() {
        if (!this.channel_.isClosed() && !this.cancelled_)
            this.channel_.onRequestComplete(this)
    }
    ;
    n.cleanup_ = function() {
        this.cancelWatchDogTimer_();
        Pe(this.readyStateChangeThrottle_);
        this.readyStateChangeThrottle_ = j;
        this.pollingTimer_.stop();
        this.eventHandler_.removeAll();
        if (this.xmlHttp_) {
            var a = this.xmlHttp_;
            this.xmlHttp_ = j;
            a.abort();
            a.dispose()
        }
        this.trident_ && (this.trident_ = j)
    }
    ;
    n.getSuccess = function() {
        return this.successful_
    }
    ;
    n.getLastError = function() {
        return this.lastError_
    }
    ;
    n.getLastStatusCode = function() {
        return this.lastStatusCode_
    }
    ;
    n.getSessionId = function() {
        return this.sid_
    }
    ;
    n.getRequestId = function() {
        return this.rid_
    }
    ;
    n.getPostData = function() {
        return this.postData_
    }
    ;
    n.getRequestStartTime = function() {
        return this.requestStartTime_
    }
    ;
    n.safeOnRequestData_ = function(a) {
        try {
            this.channel_.onRequestData(this, a),
            this.channel_.notifyServerReachabilityEvent(4)
        } catch (b) {
            this.channelDebug_.dumpException(b, "Error in httprequest callback")
        }
    }
    ;
    var uh = function() {
        this.logger_ = hh("goog.net.BrowserChannel")
    };
    n = uh.prototype;
    n.getLogger = function() {
        return this.logger_
    }
    ;
    n.browserOfflineResponse = function(a) {
        this.info("BROWSER_OFFLINE: " + a)
    }
    ;
    n.xmlHttpChannelRequest = function(a, b, c, e, f) {
        this.info("XMLHTTP REQ (" + c + ") [attempt " + e + "]: " + a + "\n" + b + "\n" + this.maybeRedactPostData_(f))
    }
    ;
    n.xmlHttpChannelResponseMetaData = function(a, b, c, e, f, g) {
        this.info("XMLHTTP RESP (" + c + ") [ attempt " + e + "]: " + a + "\n" + b + "\n" + f + " " + g)
    }
    ;
    n.xmlHttpChannelResponseText = function(a, b, c) {
        this.info("XMLHTTP TEXT (" + a + "): " + this.redactResponse_(b) + (c ? " " + c : ""))
    }
    ;
    n.tridentChannelRequest = function(a, b, c, e) {
        this.info("TRIDENT REQ (" + c + ") [ attempt " + e + "]: " + a + "\n" + b)
    }
    ;
    n.tridentChannelResponseText = function(a, b) {
        this.info("TRIDENT TEXT (" + a + "): " + this.redactResponse_(b))
    }
    ;
    n.tridentChannelResponseDone = function(a, b) {
        this.info("TRIDENT TEXT (" + a + "): " + b ? "success" : "failure")
    }
    ;
    n.timeoutResponse = function(a) {
        this.info("TIMEOUT: " + a)
    }
    ;
    n.debug = function(a) {
        this.info(a)
    }
    ;
    n.dumpException = function(a, b) {
        this.severe((b || "Exception") + a)
    }
    ;
    n.info = function(a) {
        this.logger_.info(a)
    }
    ;
    n.warning = function(a) {
        this.logger_.warning(a)
    }
    ;
    n.severe = function(a) {
        this.logger_.severe(a)
    }
    ;
    n.redactResponse_ = function(a) {
        if (!a || "y2f%" == a)
            return a;
        try {
            var b = sb(a);
            if (b)
                for (var c = 0; c < b.length; c++)
                    w(b[c]) && this.maybeRedactArray_(b[c]);
            return ub(b)
        } catch (e) {
            return this.debug("Exception parsing expected JS array - probably was not JS"),
            a
        }
    }
    ;
    n.maybeRedactArray_ = function(a) {
        if (!(2 > a.length) && (a = a[1],
        w(a) && !(1 > a.length))) {
            var b = a[0];
            if ("noop" != b && "stop" != b)
                for (b = 1; b < a.length; b++)
                    a[b] = ""
        }
    }
    ;
    n.maybeRedactPostData_ = function(a) {
        if (!a)
            return j;
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
    var wh = function(a, b, c, e, f) {
        (new uh).debug("TestLoadImageWithRetries: " + f);
        if (0 == e)
            c(k);
        else {
            var g = f || 0;
            e--;
            vh(a, b, function(f) {
                f ? c(i) : p.setTimeout(function() {
                    wh(a, b, c, e, g)
                }, g)
            })
        }
    }
      , vh = function(a, b, c) {
        var e = new uh;
        e.debug("TestLoadImage: loading " + a);
        var f = new Image;
        f.onload = function() {
            try {
                e.debug("TestLoadImage: loaded"),
                xh(f),
                c(i)
            } catch (a) {
                e.dumpException(a)
            }
        }
        ;
        f.onerror = function() {
            try {
                e.debug("TestLoadImage: error"),
                xh(f),
                c(k)
            } catch (a) {
                e.dumpException(a)
            }
        }
        ;
        f.onabort = function() {
            try {
                e.debug("TestLoadImage: abort"),
                xh(f),
                c(k)
            } catch (a) {
                e.dumpException(a)
            }
        }
        ;
        f.ontimeout = function() {
            try {
                e.debug("TestLoadImage: timeout"),
                xh(f),
                c(k)
            } catch (a) {
                e.dumpException(a)
            }
        }
        ;
        p.setTimeout(function() {
            if (f.ontimeout)
                f.ontimeout()
        }, b);
        f.src = a
    }
      , xh = function(a) {
        a.onload = j;
        a.onerror = j;
        a.onabort = j;
        a.ontimeout = j
    };
    var yh = function(a, b) {
        this.channel_ = a;
        this.channelDebug_ = b;
        this.parser_ = new ih(j,i)
    };
    n = yh.prototype;
    n.extraHeaders_ = j;
    n.request_ = j;
    n.receivedIntermediateResult_ = k;
    n.startTime_ = j;
    n.firstTime_ = j;
    n.lastTime_ = j;
    n.path_ = j;
    n.state_ = j;
    n.lastStatusCode_ = -1;
    n.hostPrefix_ = j;
    n.blockedPrefix_ = j;
    n.setExtraHeaders = function(a) {
        this.extraHeaders_ = a
    }
    ;
    n.setParser = function(a) {
        this.parser_ = a
    }
    ;
    n.connect = function(a) {
        this.path_ = a;
        a = this.channel_.getForwardChannelUri(this.path_);
        X(3);
        a.setParameterValues("MODE", "init");
        this.request_ = new ph(this,this.channelDebug_,h,h,h);
        this.request_.setExtraHeaders(this.extraHeaders_);
        this.request_.xmlHttpGet(a, k, j, i);
        this.state_ = 0;
        this.startTime_ = E()
    }
    ;
    n.checkBlocked_ = function() {
        var a = this.channel_.createDataUri(this.blockedPrefix_, "/mail/images/cleardot.gif");
        a.makeUnique();
        wh(a.toString(), 5E3, z(this.checkBlockedCallback_, this), 3, 2E3);
        this.notifyServerReachabilityEvent(1)
    }
    ;
    n.checkBlockedCallback_ = function(a) {
        a ? (this.state_ = 2,
        this.connectStage2_()) : (X(4),
        this.channel_.testConnectionBlocked(this));
        a && this.notifyServerReachabilityEvent(2)
    }
    ;
    n.connectStage2_ = function() {
        this.channelDebug_.debug("TestConnection: starting stage 2");
        this.request_ = new ph(this,this.channelDebug_,h,h,h);
        this.request_.setExtraHeaders(this.extraHeaders_);
        var a = this.channel_.getBackChannelUri(this.hostPrefix_, this.path_);
        X(5);
        !L || O(10) ? (a.setParameterValues("TYPE", "xmlhttp"),
        this.request_.xmlHttpGet(a, k, this.hostPrefix_, k)) : (a.setParameterValues("TYPE", "html"),
        this.request_.tridentGet(a, Boolean(this.hostPrefix_)))
    }
    ;
    n.createXhrIo = function(a) {
        return this.channel_.createXhrIo(a)
    }
    ;
    n.abort = function() {
        this.request_ && (this.request_.cancel(),
        this.request_ = j);
        this.lastStatusCode_ = -1
    }
    ;
    n.isClosed = function() {
        return k
    }
    ;
    n.onRequestData = function(a, b) {
        this.lastStatusCode_ = a.getLastStatusCode();
        if (0 == this.state_)
            if (this.channelDebug_.debug("TestConnection: Got data for stage 1"),
            b) {
                try {
                    var c = this.parser_.parse(b)
                } catch (e) {
                    this.channelDebug_.dumpException(e);
                    this.channel_.testConnectionFailure(this, 4);
                    return
                }
                this.hostPrefix_ = this.channel_.correctHostPrefix(c[0]);
                this.blockedPrefix_ = c[1]
            } else
                this.channelDebug_.debug("TestConnection: Null responseText"),
                this.channel_.testConnectionFailure(this, 4);
        else
            2 == this.state_ && (this.receivedIntermediateResult_ ? (X(7),
            this.lastTime_ = E()) : "11111" == b ? (X(6),
            this.receivedIntermediateResult_ = i,
            this.firstTime_ = E(),
            this.checkForEarlyNonBuffered_() && (this.lastStatusCode_ = 200,
            this.request_.cancel(),
            this.channelDebug_.debug("Test connection succeeded; using streaming connection"),
            X(12),
            this.channel_.testConnectionFinished(this, i))) : (X(8),
            this.firstTime_ = this.lastTime_ = E(),
            this.receivedIntermediateResult_ = k))
    }
    ;
    n.onRequestComplete = function() {
        this.lastStatusCode_ = this.request_.getLastStatusCode();
        if (this.request_.getSuccess())
            if (0 == this.state_)
                this.channelDebug_.debug("TestConnection: request complete for initial check"),
                this.blockedPrefix_ ? (this.state_ = 1,
                this.checkBlocked_()) : (this.state_ = 2,
                this.connectStage2_());
            else {
                if (2 == this.state_) {
                    this.channelDebug_.debug("TestConnection: request complete for stage 2");
                    var a = k;
                    (a = !L || O(10) ? this.receivedIntermediateResult_ : 200 > this.lastTime_ - this.firstTime_ ? k : i) ? (this.channelDebug_.debug("Test connection succeeded; using streaming connection"),
                    X(12),
                    this.channel_.testConnectionFinished(this, i)) : (this.channelDebug_.debug("Test connection failed; not using streaming"),
                    X(11),
                    this.channel_.testConnectionFinished(this, k))
                }
            }
        else
            this.channelDebug_.debug("TestConnection: request failed, in state " + this.state_),
            0 == this.state_ ? X(9) : 2 == this.state_ && X(10),
            this.channel_.testConnectionFailure(this, this.request_.getLastError())
    }
    ;
    n.getLastStatusCode = function() {
        return this.lastStatusCode_
    }
    ;
    n.shouldUseSecondaryDomains = function() {
        return this.channel_.shouldUseSecondaryDomains()
    }
    ;
    n.isActive = function() {
        return this.channel_.isActive()
    }
    ;
    n.checkForEarlyNonBuffered_ = function() {
        var a = this.firstTime_ - this.startTime_;
        return !L || O(10) || 500 > a
    }
    ;
    n.notifyServerReachabilityEvent = function(a) {
        this.channel_.notifyServerReachabilityEvent(a)
    }
    ;
    var zh = function(a) {
        this.headers = new mb;
        this.xmlHttpFactory_ = a || j
    };
    F(zh, nf);
    zh.prototype.logger_ = hh("goog.net.XhrIo");
    var Ah = /^https?$/i;
    n = zh.prototype;
    n.active_ = k;
    n.xhr_ = j;
    n.xhrOptions_ = j;
    n.lastUri_ = "";
    n.lastMethod_ = "";
    n.lastErrorCode_ = 0;
    n.lastError_ = "";
    n.errorDispatched_ = k;
    n.inSend_ = k;
    n.inOpen_ = k;
    n.inAbort_ = k;
    n.timeoutInterval_ = 0;
    n.timeoutId_ = j;
    n.responseType_ = "";
    n.withCredentials_ = k;
    n.getTimeoutInterval = function() {
        return this.timeoutInterval_
    }
    ;
    n.setTimeoutInterval = function(a) {
        this.timeoutInterval_ = Math.max(0, a)
    }
    ;
    n.setResponseType = function(a) {
        this.responseType_ = a
    }
    ;
    n.getResponseType = function() {
        return this.responseType_
    }
    ;
    n.setWithCredentials = function(a) {
        this.withCredentials_ = a
    }
    ;
    n.getWithCredentials = function() {
        return this.withCredentials_
    }
    ;
    n.send = function(a, b, c, e) {
        this.xhr_ && d(Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + a));
        b = b ? b.toUpperCase() : "GET";
        this.lastUri_ = a;
        this.lastError_ = "";
        this.lastErrorCode_ = 0;
        this.lastMethod_ = b;
        this.errorDispatched_ = k;
        this.active_ = i;
        this.xhr_ = this.createXhr();
        this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : nh.getOptions();
        this.xhr_.onreadystatechange = z(this.onReadyStateChange_, this);
        try {
            this.logger_.fine(this.formatMsg_("Opening Xhr")),
            this.inOpen_ = i,
            this.xhr_.open(b, a, i),
            this.inOpen_ = k
        } catch (f) {
            this.logger_.fine(this.formatMsg_("Error opening Xhr: " + f.message));
            this.error_(5, f);
            return
        }
        a = c || "";
        var g = this.headers.clone();
        e && lb(e, function(a, b) {
            g.set(b, a)
        });
        e = p.FormData && a instanceof p.FormData;
        "POST" == b && (!g.containsKey("Content-Type") && !e) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        lb(g, function(a, b) {
            this.xhr_.setRequestHeader(b, a)
        }, this);
        this.responseType_ && (this.xhr_.responseType = this.responseType_);
        "withCredentials"in this.xhr_ && (this.xhr_.withCredentials = this.withCredentials_);
        try {
            this.timeoutId_ && (of.clearTimeout(this.timeoutId_),
            this.timeoutId_ = j),
            0 < this.timeoutInterval_ && (this.logger_.fine(this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete")),
            this.timeoutId_ = of.setTimeout(z(this.timeout_, this), this.timeoutInterval_)),
            this.logger_.fine(this.formatMsg_("Sending request")),
            this.inSend_ = i,
            this.xhr_.send(a),
            this.inSend_ = k
        } catch (l) {
            this.logger_.fine(this.formatMsg_("Send error: " + l.message)),
            this.error_(5, l)
        }
    }
    ;
    n.createXhr = function() {
        return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : nh.createInstance()
    }
    ;
    n.timeout_ = function() {
        "undefined" != typeof aa && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting",
        this.lastErrorCode_ = 8,
        this.logger_.fine(this.formatMsg_(this.lastError_)),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    n.error_ = function(a, b) {
        this.active_ = k;
        this.xhr_ && (this.inAbort_ = i,
        this.xhr_.abort(),
        this.inAbort_ = k);
        this.lastError_ = b;
        this.lastErrorCode_ = a;
        this.dispatchErrors_();
        this.cleanUpXhr_()
    }
    ;
    n.dispatchErrors_ = function() {
        this.errorDispatched_ || (this.errorDispatched_ = i,
        this.dispatchEvent("complete"),
        this.dispatchEvent("error"))
    }
    ;
    n.abort = function(a) {
        this.xhr_ && this.active_ && (this.logger_.fine(this.formatMsg_("Aborting")),
        this.active_ = k,
        this.inAbort_ = i,
        this.xhr_.abort(),
        this.inAbort_ = k,
        this.lastErrorCode_ = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        this.cleanUpXhr_())
    }
    ;
    n.disposeInternal = function() {
        this.xhr_ && (this.active_ && (this.active_ = k,
        this.inAbort_ = i,
        this.xhr_.abort(),
        this.inAbort_ = k),
        this.cleanUpXhr_(i));
        zh.superClass_.disposeInternal.call(this)
    }
    ;
    n.onReadyStateChange_ = function() {
        if (!this.inOpen_ && !this.inSend_ && !this.inAbort_)
            this.onReadyStateChangeEntryPoint_();
        else
            this.onReadyStateChangeHelper_()
    }
    ;
    n.onReadyStateChangeEntryPoint_ = function() {
        this.onReadyStateChangeHelper_()
    }
    ;
    n.onReadyStateChangeHelper_ = function() {
        if (this.active_ && "undefined" != typeof aa)
            if (this.xhrOptions_[1] && 4 == this.getReadyState() && 2 == this.getStatus())
                this.logger_.fine(this.formatMsg_("Local request error detected and ignored"));
            else if (this.inSend_ && 4 == this.getReadyState())
                of.setTimeout(z(this.onReadyStateChange_, this), 0);
            else if (this.dispatchEvent("readystatechange"),
            this.isComplete()) {
                this.logger_.fine(this.formatMsg_("Request complete"));
                this.active_ = k;
                try {
                    this.isSuccess() ? (this.dispatchEvent("complete"),
                    this.dispatchEvent("success")) : (this.lastErrorCode_ = 6,
                    this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]",
                    this.dispatchErrors_())
                } finally {
                    this.cleanUpXhr_()
                }
            }
    }
    ;
    n.cleanUpXhr_ = function(a) {
        if (this.xhr_) {
            var b = this.xhr_
              , c = this.xhrOptions_[0] ? v : j;
            this.xhrOptions_ = this.xhr_ = j;
            this.timeoutId_ && (of.clearTimeout(this.timeoutId_),
            this.timeoutId_ = j);
            a || this.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (e) {
                this.logger_.severe("Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    }
    ;
    n.isActive = function() {
        return !!this.xhr_
    }
    ;
    n.isComplete = function() {
        return 4 == this.getReadyState()
    }
    ;
    n.isSuccess = function() {
        var a = this.getStatus(), b;
        a: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            b = i;
            break a;
        default:
            b = k
        }
        return b || 0 === a && !this.isLastUriEffectiveSchemeHttp_()
    }
    ;
    n.isLastUriEffectiveSchemeHttp_ = function() {
        var a;
        a = je(String(this.lastUri_))[1] || j;
        !a && self.location && (a = self.location.protocol,
        a = a.substr(0, a.length - 1));
        a = a ? a.toLowerCase() : "";
        return Ah.test(a)
    }
    ;
    n.getReadyState = function() {
        return this.xhr_ ? this.xhr_.readyState : 0
    }
    ;
    n.getStatus = function() {
        try {
            return 2 < this.getReadyState() ? this.xhr_.status : -1
        } catch (a) {
            return this.logger_.warning("Can not get status: " + a.message),
            -1
        }
    }
    ;
    n.getStatusText = function() {
        try {
            return 2 < this.getReadyState() ? this.xhr_.statusText : ""
        } catch (a) {
            return this.logger_.fine("Can not get status: " + a.message),
            ""
        }
    }
    ;
    n.getLastUri = function() {
        return String(this.lastUri_)
    }
    ;
    n.getResponseText = function() {
        try {
            return this.xhr_ ? this.xhr_.responseText : ""
        } catch (a) {
            return this.logger_.fine("Can not get responseText: " + a.message),
            ""
        }
    }
    ;
    n.getResponseXml = function() {
        try {
            return this.xhr_ ? this.xhr_.responseXML : j
        } catch (a) {
            return this.logger_.fine("Can not get responseXML: " + a.message),
            j
        }
    }
    ;
    n.getResponseJson = function(a) {
        if (this.xhr_) {
            var b = this.xhr_.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return rb(b)
        }
    }
    ;
    n.getResponse = function() {
        try {
            if (!this.xhr_)
                return j;
            if ("response"in this.xhr_)
                return this.xhr_.response;
            switch (this.responseType_) {
            case "":
            case "text":
                return this.xhr_.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in this.xhr_)
                    return this.xhr_.mozResponseArrayBuffer
            }
            this.logger_.severe("Response type " + this.responseType_ + " is not supported on this browser");
            return j
        } catch (a) {
            return this.logger_.fine("Can not get response: " + a.message),
            j
        }
    }
    ;
    n.getResponseHeader = function(a) {
        return this.xhr_ && this.isComplete() ? this.xhr_.getResponseHeader(a) : h
    }
    ;
    n.getAllResponseHeaders = function() {
        return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : ""
    }
    ;
    n.getLastErrorCode = function() {
        return this.lastErrorCode_
    }
    ;
    n.getLastError = function() {
        return y(this.lastError_) ? this.lastError_ : String(this.lastError_)
    }
    ;
    n.formatMsg_ = function(a) {
        return a + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
    }
    ;
    var Bh = function(a) {
        this.clientVersion_ = a || j;
        this.state_ = 1;
        this.outgoingMaps_ = [];
        this.pendingMaps_ = [];
        this.channelDebug_ = new uh;
        this.parser_ = new ih(j,i)
    }
      , Ch = function(a, b, c) {
        this.mapId = a;
        this.map = b;
        this.context = c || j
    };
    n = Bh.prototype;
    n.extraHeaders_ = j;
    n.extraParams_ = j;
    n.forwardChannelRequest_ = j;
    n.backChannelRequest_ = j;
    n.path_ = j;
    n.forwardChannelUri_ = j;
    n.backChannelUri_ = j;
    n.hostPrefix_ = j;
    n.allowHostPrefix_ = i;
    n.nextRid_ = 0;
    n.nextMapId_ = 0;
    n.failFast_ = k;
    n.handler_ = j;
    n.forwardChannelTimerId_ = j;
    n.backChannelTimerId_ = j;
    n.deadBackChannelTimerId_ = j;
    n.connectionTest_ = j;
    n.useChunked_ = j;
    n.allowChunkedMode_ = i;
    n.lastArrayId_ = -1;
    n.lastPostResponseArrayId_ = -1;
    n.lastStatusCode_ = -1;
    n.forwardChannelRetryCount_ = 0;
    n.backChannelRetryCount_ = 0;
    n.baseRetryDelayMs_ = 5E3;
    n.retryDelaySeedMs_ = 1E4;
    n.forwardChannelMaxRetries_ = 2;
    n.forwardChannelRequestTimeoutMs_ = 2E4;
    n.readyStateChangeThrottleMs_ = 0;
    n.supportsCrossDomainXhrs_ = k;
    n.channelVersion_ = 8;
    var Dh = new nf
      , Eh = function(a, b) {
        T.call(this, "statevent", a);
        this.stat = b
    };
    F(Eh, T);
    var Fh = function(a, b, c, e) {
        T.call(this, "timingevent", a);
        this.size = b;
        this.rtt = c;
        this.retries = e
    };
    F(Fh, T);
    var Gh = function(a, b) {
        T.call(this, "serverreachability", a);
        this.reachabilityType = b
    };
    F(Gh, T);
    n = Bh.prototype;
    n.getChannelDebug = function() {
        return this.channelDebug_
    }
    ;
    n.setChannelDebug = function(a) {
        a != j && (this.channelDebug_ = a)
    }
    ;
    n.connect = function(a, b, c, e, f) {
        this.channelDebug_.debug("connect()");
        X(0);
        this.path_ = b;
        this.extraParams_ = c || {};
        e && q(f) && (this.extraParams_.OSID = e,
        this.extraParams_.OAID = f);
        this.connectTest_(a)
    }
    ;
    n.disconnect = function() {
        this.channelDebug_.debug("disconnect()");
        this.cancelRequests_();
        if (3 == this.state_) {
            var a = this.nextRid_++
              , b = this.forwardChannelUri_.clone();
            b.setParameterValue("SID", this.sid_);
            b.setParameterValue("RID", a);
            b.setParameterValue("TYPE", "terminate");
            this.addAdditionalParams_(b);
            (new ph(this,this.channelDebug_,this.sid_,a,h)).sendUsingImgTag(b)
        }
        this.onClose_()
    }
    ;
    n.getSessionId = function() {
        return this.sid_
    }
    ;
    n.connectTest_ = function(a) {
        this.channelDebug_.debug("connectTest_()");
        this.okToMakeRequest_() && (this.connectionTest_ = new yh(this,this.channelDebug_),
        this.connectionTest_.setExtraHeaders(this.extraHeaders_),
        this.connectionTest_.setParser(this.parser_),
        this.connectionTest_.connect(a))
    }
    ;
    n.connectChannel_ = function() {
        this.channelDebug_.debug("connectChannel_()");
        this.ensureInState_(1, 0);
        this.forwardChannelUri_ = this.getForwardChannelUri(this.path_);
        this.ensureForwardChannel_()
    }
    ;
    n.cancelRequests_ = function() {
        this.connectionTest_ && (this.connectionTest_.abort(),
        this.connectionTest_ = j);
        this.backChannelRequest_ && (this.backChannelRequest_.cancel(),
        this.backChannelRequest_ = j);
        this.backChannelTimerId_ && (p.clearTimeout(this.backChannelTimerId_),
        this.backChannelTimerId_ = j);
        this.clearDeadBackchannelTimer_();
        this.forwardChannelRequest_ && (this.forwardChannelRequest_.cancel(),
        this.forwardChannelRequest_ = j);
        this.forwardChannelTimerId_ && (p.clearTimeout(this.forwardChannelTimerId_),
        this.forwardChannelTimerId_ = j)
    }
    ;
    n.getExtraHeaders = function() {
        return this.extraHeaders_
    }
    ;
    n.setExtraHeaders = function(a) {
        this.extraHeaders_ = a
    }
    ;
    n.setReadyStateChangeThrottle = function(a) {
        this.readyStateChangeThrottleMs_ = a
    }
    ;
    n.setSupportsCrossDomainXhrs = function(a) {
        this.supportsCrossDomainXhrs_ = a
    }
    ;
    n.getHandler = function() {
        return this.handler_
    }
    ;
    n.setHandler = function(a) {
        this.handler_ = a
    }
    ;
    n.getAllowHostPrefix = function() {
        return this.allowHostPrefix_
    }
    ;
    n.setAllowHostPrefix = function(a) {
        this.allowHostPrefix_ = a
    }
    ;
    n.isBuffered = function() {
        return !this.useChunked_
    }
    ;
    n.getAllowChunkedMode = function() {
        return this.allowChunkedMode_
    }
    ;
    n.setAllowChunkedMode = function(a) {
        this.allowChunkedMode_ = a
    }
    ;
    n.sendMap = function(a, b) {
        0 == this.state_ && d(Error("Invalid operation: sending map when state is closed"));
        1E3 == this.outgoingMaps_.length && this.channelDebug_.severe("Already have 1000 queued maps upon queueing " + ub(a));
        this.outgoingMaps_.push(new Ch(this.nextMapId_++,a,b));
        (2 == this.state_ || 3 == this.state_) && this.ensureForwardChannel_()
    }
    ;
    n.setFailFast = function(a) {
        this.failFast_ = a;
        this.channelDebug_.info("setFailFast: " + a);
        if ((this.forwardChannelRequest_ || this.forwardChannelTimerId_) && this.forwardChannelRetryCount_ > this.getForwardChannelMaxRetries())
            this.channelDebug_.info("Retry count " + this.forwardChannelRetryCount_ + " > new maxRetries " + this.getForwardChannelMaxRetries() + ". Fail immediately!"),
            this.forwardChannelRequest_ ? (this.forwardChannelRequest_.cancel(),
            this.onRequestComplete(this.forwardChannelRequest_)) : (p.clearTimeout(this.forwardChannelTimerId_),
            this.forwardChannelTimerId_ = j,
            this.signalError_(2))
    }
    ;
    n.getForwardChannelMaxRetries = function() {
        return this.failFast_ ? 0 : this.forwardChannelMaxRetries_
    }
    ;
    n.setForwardChannelMaxRetries = function(a) {
        this.forwardChannelMaxRetries_ = a
    }
    ;
    n.setForwardChannelRequestTimeout = function(a) {
        this.forwardChannelRequestTimeoutMs_ = a
    }
    ;
    n.getBackChannelMaxRetries = function() {
        return 3
    }
    ;
    n.isClosed = function() {
        return 0 == this.state_
    }
    ;
    n.getState = function() {
        return this.state_
    }
    ;
    n.getLastStatusCode = function() {
        return this.lastStatusCode_
    }
    ;
    n.getLastArrayId = function() {
        return this.lastArrayId_
    }
    ;
    n.hasOutstandingRequests = function() {
        return 0 != this.outstandingRequests_()
    }
    ;
    n.setParser = function(a) {
        this.parser_ = a
    }
    ;
    n.outstandingRequests_ = function() {
        var a = 0;
        this.backChannelRequest_ && a++;
        this.forwardChannelRequest_ && a++;
        return a
    }
    ;
    n.ensureForwardChannel_ = function() {
        !this.forwardChannelRequest_ && !this.forwardChannelTimerId_ && (this.forwardChannelTimerId_ = th(z(this.onStartForwardChannelTimer_, this), 0),
        this.forwardChannelRetryCount_ = 0)
    }
    ;
    n.maybeRetryForwardChannel_ = function(a) {
        if (this.forwardChannelRequest_ || this.forwardChannelTimerId_)
            return this.channelDebug_.severe("Request already in progress"),
            k;
        if (1 == this.state_ || this.forwardChannelRetryCount_ >= this.getForwardChannelMaxRetries())
            return k;
        this.channelDebug_.debug("Going to retry POST");
        this.forwardChannelTimerId_ = th(z(this.onStartForwardChannelTimer_, this, a), this.getRetryTime_(this.forwardChannelRetryCount_));
        this.forwardChannelRetryCount_++;
        return i
    }
    ;
    n.onStartForwardChannelTimer_ = function(a) {
        this.forwardChannelTimerId_ = j;
        this.startForwardChannel_(a)
    }
    ;
    n.startForwardChannel_ = function(a) {
        this.channelDebug_.debug("startForwardChannel_");
        this.okToMakeRequest_() && (1 == this.state_ ? a ? this.channelDebug_.severe("Not supposed to retry the open") : (this.open_(),
        this.state_ = 2) : 3 == this.state_ && (a ? this.makeForwardChannelRequest_(a) : 0 == this.outgoingMaps_.length ? this.channelDebug_.debug("startForwardChannel_ returned: nothing to send") : this.forwardChannelRequest_ ? this.channelDebug_.severe("startForwardChannel_ returned: connection already in progress") : (this.makeForwardChannelRequest_(),
        this.channelDebug_.debug("startForwardChannel_ finished, sent request"))))
    }
    ;
    n.open_ = function() {
        this.channelDebug_.debug("open_()");
        this.nextRid_ = Math.floor(1E5 * Math.random());
        var a = this.nextRid_++
          , b = new ph(this,this.channelDebug_,"",a,h);
        b.setExtraHeaders(this.extraHeaders_);
        var c = this.dequeueOutgoingMaps_()
          , e = this.forwardChannelUri_.clone();
        e.setParameterValue("RID", a);
        this.clientVersion_ && e.setParameterValue("CVER", this.clientVersion_);
        this.addAdditionalParams_(e);
        b.xmlHttpPost(e, c, i);
        this.forwardChannelRequest_ = b
    }
    ;
    n.makeForwardChannelRequest_ = function(a) {
        var b;
        a ? 6 < this.channelVersion_ ? (this.requeuePendingMaps_(),
        b = this.nextRid_ - 1,
        a = this.dequeueOutgoingMaps_()) : (b = a.getRequestId(),
        a = a.getPostData()) : (b = this.nextRid_++,
        a = this.dequeueOutgoingMaps_());
        var c = this.forwardChannelUri_.clone();
        c.setParameterValue("SID", this.sid_);
        c.setParameterValue("RID", b);
        c.setParameterValue("AID", this.lastArrayId_);
        this.addAdditionalParams_(c);
        b = new ph(this,this.channelDebug_,this.sid_,b,this.forwardChannelRetryCount_ + 1);
        b.setExtraHeaders(this.extraHeaders_);
        b.setTimeout(Math.round(0.5 * this.forwardChannelRequestTimeoutMs_) + Math.round(0.5 * this.forwardChannelRequestTimeoutMs_ * Math.random()));
        this.forwardChannelRequest_ = b;
        b.xmlHttpPost(c, a, i)
    }
    ;
    n.addAdditionalParams_ = function(a) {
        if (this.handler_) {
            var b = this.handler_.getAdditionalParams(this);
            b && lb(b, function(b, e) {
                a.setParameterValue(e, b)
            })
        }
    }
    ;
    n.dequeueOutgoingMaps_ = function() {
        var a = Math.min(this.outgoingMaps_.length, 1E3), b = ["count=" + a], c;
        6 < this.channelVersion_ && 0 < a ? (c = this.outgoingMaps_[0].mapId,
        b.push("ofs=" + c)) : c = 0;
        for (var e = 0; e < a; e++) {
            var f = this.outgoingMaps_[e].mapId
              , g = this.outgoingMaps_[e].map
              , f = 6 >= this.channelVersion_ ? e : f - c;
            try {
                lb(g, function(a, c) {
                    b.push("req" + f + "_" + c + "=" + encodeURIComponent(a))
                })
            } catch (l) {
                b.push("req" + f + "_type=" + encodeURIComponent("_badmap")),
                this.handler_ && this.handler_.badMapError(this, g)
            }
        }
        this.pendingMaps_ = this.pendingMaps_.concat(this.outgoingMaps_.splice(0, a));
        return b.join("&")
    }
    ;
    n.requeuePendingMaps_ = function() {
        this.outgoingMaps_ = this.pendingMaps_.concat(this.outgoingMaps_);
        this.pendingMaps_.length = 0
    }
    ;
    n.ensureBackChannel_ = function() {
        !this.backChannelRequest_ && !this.backChannelTimerId_ && (this.backChannelAttemptId_ = 1,
        this.backChannelTimerId_ = th(z(this.onStartBackChannelTimer_, this), 0),
        this.backChannelRetryCount_ = 0)
    }
    ;
    n.maybeRetryBackChannel_ = function() {
        if (this.backChannelRequest_ || this.backChannelTimerId_)
            return this.channelDebug_.severe("Request already in progress"),
            k;
        if (this.backChannelRetryCount_ >= this.getBackChannelMaxRetries())
            return k;
        this.channelDebug_.debug("Going to retry GET");
        this.backChannelAttemptId_++;
        this.backChannelTimerId_ = th(z(this.onStartBackChannelTimer_, this), this.getRetryTime_(this.backChannelRetryCount_));
        this.backChannelRetryCount_++;
        return i
    }
    ;
    n.onStartBackChannelTimer_ = function() {
        this.backChannelTimerId_ = j;
        this.startBackChannel_()
    }
    ;
    n.startBackChannel_ = function() {
        if (this.okToMakeRequest_()) {
            this.channelDebug_.debug("Creating new HttpRequest");
            this.backChannelRequest_ = new ph(this,this.channelDebug_,this.sid_,"rpc",this.backChannelAttemptId_);
            this.backChannelRequest_.setExtraHeaders(this.extraHeaders_);
            this.backChannelRequest_.setReadyStateChangeThrottle(this.readyStateChangeThrottleMs_);
            var a = this.backChannelUri_.clone();
            a.setParameterValue("RID", "rpc");
            a.setParameterValue("SID", this.sid_);
            a.setParameterValue("CI", this.useChunked_ ? "0" : "1");
            a.setParameterValue("AID", this.lastArrayId_);
            this.addAdditionalParams_(a);
            !L || O(10) ? (a.setParameterValue("TYPE", "xmlhttp"),
            this.backChannelRequest_.xmlHttpGet(a, i, this.hostPrefix_, k)) : (a.setParameterValue("TYPE", "html"),
            this.backChannelRequest_.tridentGet(a, Boolean(this.hostPrefix_)));
            this.channelDebug_.debug("New Request created")
        }
    }
    ;
    n.okToMakeRequest_ = function() {
        if (this.handler_) {
            var a = this.handler_.okToMakeRequest(this);
            if (0 != a)
                return this.channelDebug_.debug("Handler returned error code from okToMakeRequest"),
                this.signalError_(a),
                k
        }
        return i
    }
    ;
    n.testConnectionFinished = function(a, b) {
        this.channelDebug_.debug("Test Connection Finished");
        this.useChunked_ = this.allowChunkedMode_ && b;
        this.lastStatusCode_ = a.getLastStatusCode();
        this.connectChannel_()
    }
    ;
    n.testConnectionFailure = function(a) {
        this.channelDebug_.debug("Test Connection Failed");
        this.lastStatusCode_ = a.getLastStatusCode();
        this.signalError_(2)
    }
    ;
    n.testConnectionBlocked = function() {
        this.channelDebug_.debug("Test Connection Blocked");
        this.lastStatusCode_ = this.connectionTest_.getLastStatusCode();
        this.signalError_(9)
    }
    ;
    n.onRequestData = function(a, b) {
        if (!(0 == this.state_ || this.backChannelRequest_ != a && this.forwardChannelRequest_ != a))
            if (this.lastStatusCode_ = a.getLastStatusCode(),
            this.forwardChannelRequest_ == a && 3 == this.state_)
                if (7 < this.channelVersion_) {
                    var c;
                    try {
                        c = this.parser_.parse(b)
                    } catch (e) {
                        c = j
                    }
                    w(c) && 3 == c.length ? this.handlePostResponse_(c) : (this.channelDebug_.debug("Bad POST response data returned"),
                    this.signalError_(11))
                } else
                    "y2f%" != b && (this.channelDebug_.debug("Bad data returned - missing/invald magic cookie"),
                    this.signalError_(11));
            else
                this.backChannelRequest_ == a && this.clearDeadBackchannelTimer_(),
                /^[\s\xa0]*$/.test(b) || (c = this.parser_.parse(b),
                w(c),
                this.onInput_(c))
    }
    ;
    n.handlePostResponse_ = function(a) {
        if (0 == a[0])
            this.handleBackchannelMissing_();
        else {
            this.lastPostResponseArrayId_ = a[1];
            var b = this.lastPostResponseArrayId_ - this.lastArrayId_;
            0 < b && (a = a[2],
            this.channelDebug_.debug(a + " bytes (in " + b + " arrays) are outstanding on the BackChannel"),
            this.shouldRetryBackChannel_(a) && !this.deadBackChannelTimerId_ && (this.deadBackChannelTimerId_ = th(z(this.onBackChannelDead_, this), 6E3)))
        }
    }
    ;
    n.handleBackchannelMissing_ = function() {
        this.channelDebug_.debug("Server claims our backchannel is missing.");
        if (this.backChannelTimerId_)
            this.channelDebug_.debug("But we are currently starting the request.");
        else {
            if (this.backChannelRequest_)
                if (this.backChannelRequest_.getRequestStartTime() + 3E3 < this.forwardChannelRequest_.getRequestStartTime())
                    this.clearDeadBackchannelTimer_(),
                    this.backChannelRequest_.cancel(),
                    this.backChannelRequest_ = j;
                else
                    return;
            else
                this.channelDebug_.warning("We do not have a BackChannel established");
            this.maybeRetryBackChannel_();
            X(19)
        }
    }
    ;
    n.shouldRetryBackChannel_ = function(a) {
        return 37500 > a && !this.isBuffered() && 0 == this.backChannelRetryCount_
    }
    ;
    n.correctHostPrefix = function(a) {
        return this.allowHostPrefix_ ? this.handler_ ? this.handler_.correctHostPrefix(a) : a : j
    }
    ;
    n.onBackChannelDead_ = function() {
        this.deadBackChannelTimerId_ != j && (this.deadBackChannelTimerId_ = j,
        this.backChannelRequest_.cancel(),
        this.backChannelRequest_ = j,
        this.maybeRetryBackChannel_(),
        X(20))
    }
    ;
    n.clearDeadBackchannelTimer_ = function() {
        this.deadBackChannelTimerId_ != j && (p.clearTimeout(this.deadBackChannelTimerId_),
        this.deadBackChannelTimerId_ = j)
    }
    ;
    n.onRequestComplete = function(a) {
        this.channelDebug_.debug("Request complete");
        var b;
        if (this.backChannelRequest_ == a)
            this.clearDeadBackchannelTimer_(),
            this.backChannelRequest_ = j,
            b = 2;
        else if (this.forwardChannelRequest_ == a)
            this.forwardChannelRequest_ = j,
            b = 1;
        else
            return;
        this.lastStatusCode_ = a.getLastStatusCode();
        if (0 != this.state_)
            if (a.getSuccess())
                1 == b ? (b = a.getPostData() ? a.getPostData().length : 0,
                a = E() - a.getRequestStartTime(),
                Dh.dispatchEvent(new Fh(Dh,b,a,this.forwardChannelRetryCount_)),
                this.ensureForwardChannel_(),
                this.onSuccess_(),
                this.pendingMaps_.length = 0) : this.ensureBackChannel_();
            else {
                var c = a.getLastError();
                if (3 == c || 7 == c || 0 == c && 0 < this.lastStatusCode_)
                    this.channelDebug_.debug("Not retrying due to error type");
                else {
                    this.channelDebug_.debug("Maybe retrying, last error: " + qh(c, this.lastStatusCode_));
                    if (1 == b && this.maybeRetryForwardChannel_(a) || 2 == b && this.maybeRetryBackChannel_())
                        return;
                    this.channelDebug_.debug("Exceeded max number of retries")
                }
                this.channelDebug_.debug("Error: HTTP request failed");
                switch (c) {
                case 1:
                    this.signalError_(5);
                    break;
                case 4:
                    this.signalError_(10);
                    break;
                case 3:
                    this.signalError_(6);
                    break;
                case 7:
                    this.signalError_(12);
                    break;
                default:
                    this.signalError_(2)
                }
            }
    }
    ;
    n.getRetryTime_ = function(a) {
        var b = this.baseRetryDelayMs_ + Math.floor(Math.random() * this.retryDelaySeedMs_);
        this.isActive() || (this.channelDebug_.debug("Inactive channel"),
        b *= 2);
        return b * a
    }
    ;
    n.setRetryDelay = function(a, b) {
        this.baseRetryDelayMs_ = a;
        this.retryDelaySeedMs_ = b
    }
    ;
    n.onInput_ = function(a) {
        for (var b = this.handler_ && this.handler_.channelHandleMultipleArrays ? [] : j, c = 0; c < a.length; c++) {
            var e = a[c];
            this.lastArrayId_ = e[0];
            e = e[1];
            2 == this.state_ ? "c" == e[0] ? (this.sid_ = e[1],
            this.hostPrefix_ = this.correctHostPrefix(e[2]),
            e = e[3],
            this.channelVersion_ = e != j ? e : 6,
            this.state_ = 3,
            this.handler_ && this.handler_.channelOpened(this),
            this.backChannelUri_ = this.getBackChannelUri(this.hostPrefix_, this.path_),
            this.ensureBackChannel_()) : "stop" == e[0] && this.signalError_(7) : 3 == this.state_ && ("stop" == e[0] ? (b && b.length && (this.handler_.channelHandleMultipleArrays(this, b),
            b.length = 0),
            this.signalError_(7)) : "noop" != e[0] && (b ? b.push(e) : this.handler_ && this.handler_.channelHandleArray(this, e)),
            this.backChannelRetryCount_ = 0)
        }
        b && b.length && this.handler_.channelHandleMultipleArrays(this, b)
    }
    ;
    n.ensureInState_ = function(a) {
        J(arguments, this.state_) || d(Error("Unexpected channel state: " + this.state_))
    }
    ;
    n.signalError_ = function(a) {
        this.channelDebug_.info("Error code " + a);
        if (2 == a || 9 == a) {
            var b = j;
            this.handler_ && (b = this.handler_.getNetworkTestImageUri(this));
            var c = z(this.testGoogleComCallback_, this);
            b || (b = new vg("//www.google.com/images/cleardot.gif"),
            b.makeUnique());
            vh(b.toString(), 1E4, c)
        } else
            X(2);
        this.onError_(a)
    }
    ;
    n.testGoogleComCallback_ = function(a) {
        a ? (this.channelDebug_.info("Successfully pinged google.com"),
        X(2)) : (this.channelDebug_.info("Failed to ping google.com"),
        X(1),
        this.onError_(8))
    }
    ;
    n.onSuccess_ = function() {
        this.handler_ && this.handler_.channelSuccess(this, this.pendingMaps_)
    }
    ;
    n.onError_ = function(a) {
        this.channelDebug_.debug("HttpChannel: error - " + a);
        this.state_ = 0;
        this.handler_ && this.handler_.channelError(this, a);
        this.onClose_();
        this.cancelRequests_()
    }
    ;
    n.onClose_ = function() {
        this.state_ = 0;
        this.lastStatusCode_ = -1;
        if (this.handler_)
            if (0 == this.pendingMaps_.length && 0 == this.outgoingMaps_.length)
                this.handler_.channelClosed(this);
            else {
                this.channelDebug_.debug("Number of undelivered maps, pending: " + this.pendingMaps_.length + ", outgoing: " + this.outgoingMaps_.length);
                var a = Ua(this.pendingMaps_)
                  , b = Ua(this.outgoingMaps_);
                this.pendingMaps_.length = 0;
                this.outgoingMaps_.length = 0;
                this.handler_.channelClosed(this, a, b)
            }
    }
    ;
    n.getForwardChannelUri = function(a) {
        a = this.createDataUri(j, a);
        this.channelDebug_.debug("GetForwardChannelUri: " + a);
        return a
    }
    ;
    n.getBackChannelUri = function(a, b) {
        var c = this.createDataUri(this.shouldUseSecondaryDomains() ? a : j, b);
        this.channelDebug_.debug("GetBackChannelUri: " + c);
        return c
    }
    ;
    n.createDataUri = function(a, b, c) {
        var e = b instanceof vg ? b.clone() : new vg(b,h);
        if ("" != e.getDomain())
            a && e.setDomain(a + "." + e.getDomain()),
            e.setPort(c || e.getPort());
        else {
            var f = window.location
              , g = f.protocol;
            a = a ? a + "." + f.hostname : f.hostname;
            c = c || f.port;
            f = new vg(j,h);
            g && f.setScheme(g);
            a && f.setDomain(a);
            c && f.setPort(c);
            b && f.setPath(b);
            e = f
        }
        this.extraParams_ && lb(this.extraParams_, function(a, b) {
            e.setParameterValue(b, a)
        });
        e.setParameterValue("VER", this.channelVersion_);
        this.addAdditionalParams_(e);
        return e
    }
    ;
    n.createXhrIo = function(a) {
        a && !this.supportsCrossDomainXhrs_ && d(Error("Can't create secondary domain capable XhrIo object."));
        a = new zh;
        a.setWithCredentials(this.supportsCrossDomainXhrs_);
        return a
    }
    ;
    n.isActive = function() {
        return !!this.handler_ && this.handler_.isActive(this)
    }
    ;
    var th = function(a, b) {
        fa(a) || d(Error("Fn must not be null and must be a function"));
        return p.setTimeout(function() {
            a()
        }, b)
    };
    Bh.prototype.notifyServerReachabilityEvent = function(a) {
        Dh.dispatchEvent(new Gh(Dh,a))
    }
    ;
    var X = function(a) {
        Dh.dispatchEvent(new Eh(Dh,a))
    };
    Bh.prototype.shouldUseSecondaryDomains = function() {
        return this.supportsCrossDomainXhrs_ || !(!L || O(10))
    }
    ;
    new jh(1E3);
    new Og;
    var Hh = function() {};
    n = Hh.prototype;
    n.channelHandleMultipleArrays = j;
    n.okToMakeRequest = function() {
        return 0
    }
    ;
    n.channelOpened = function() {}
    ;
    n.channelHandleArray = function() {}
    ;
    n.channelSuccess = function() {}
    ;
    n.channelError = function() {}
    ;
    n.channelClosed = function() {}
    ;
    n.getAdditionalParams = function() {
        return {}
    }
    ;
    n.getNetworkTestImageUri = function() {
        return j
    }
    ;
    n.isActive = function() {
        return i
    }
    ;
    n.badMapError = function() {}
    ;
    n.correctHostPrefix = function(a) {
        return a
    }
    ;
    var Ih = function(a, b) {
        qf.call(this);
        fa(a) ? b && (a = z(a, b)) : a && fa(a.handleEvent) ? a = z(a.handleEvent, a) : d(Error("Invalid listener argument"));
        this.listener_ = a;
        bf(this, "tick", z(this.onTick_, this));
        this.resetExpMode()
    };
    F(Ih, qf);
    Ih.prototype.onTick_ = function() {
        if (this.isExpMode()) {
            this.stop();
            var a = this.getInterval();
            24E4 > 2 * a && (a *= 2);
            this.setInterval(a);
            this.start()
        }
        this.listener_()
    }
    ;
    Ih.prototype.resetExpMode = function() {
        this.stop();
        var a = 5E3 + 2E4 * Math.random();
        this.setInterval(a)
    }
    ;
    Ih.prototype.resetImmMode = function() {
        this.stop();
        this.setInterval(500)
    }
    ;
    Ih.prototype.isExpMode = function() {
        return 500 < this.getInterval()
    }
    ;
    var Jh = function(a, b) {
        T.call(this, "REMOTE_EVENT");
        this.action = a;
        this.params = b || j
    };
    F(Jh, T);
    var Kh = function(a, b) {
        this.pathPrefix_ = a;
        this.defaultQueryParams_ = b;
        this.pubsub_ = new W;
        this.reconnectTimer_ = new Ih(this.reconnect_,this);
        this.channel_ = j
    };
    F(Kh, Hh);
    n = Kh.prototype;
    n.sCookie_ = "";
    n.debug = function() {}
    ;
    n.getDefaultQueryParams = function() {
        return this.defaultQueryParams_
    }
    ;
    n.getPubSub = function() {
        return this.pubsub_
    }
    ;
    n.getChannel = function() {
        return this.channel_
    }
    ;
    n.isAuthFailed = function(a) {
        return 2 == a && 401 == this.channel_.getLastStatusCode()
    }
    ;
    n.connect = function(a) {
        if (!(this.channel_ && 2 == this.channel_.getState())) {
            this.sCookie_ = "";
            this.reconnectTimer_.stop();
            this.reconnectParams_ = a || j;
            a = this.pathPrefix_ + "/test";
            var b = this.pathPrefix_ + "/bind"
              , c = new Bh("1")
              , e = this.channel_;
            e && e.setHandler(j);
            c.setHandler(this);
            this.channel_ = c;
            c = {};
            jb(c, this.defaultQueryParams_);
            this.reconnectParams_ && jb(c, this.reconnectParams_);
            e ? ((3 == e.getState() || e.hasOutstandingRequests()) && this.debug("BrowserChannelServices.Channel: unexpected reconnect state: " + e.getState()),
            this.channel_.connect(a, b, c, e.getSessionId(), e.getLastArrayId())) : this.channel_.connect(a, b, c)
        }
    }
    ;
    n.disconnect = function() {
        this.reconnectTimer_.stop();
        this.channel_ && 0 != this.channel_.getState() && this.channel_.disconnect()
    }
    ;
    n.sendMessage = function(a, b) {
        if (!this.channel_ || !(2 == this.channel_.getState() || 3 == this.channel_.getState()) && !this.reconnectTimer_.enabled)
            this.debug("Ignoring message: " + a);
        else {
            var c = {
                _sc: a
            };
            b && jb(c, b);
            this.debug("Sending message: " + ub(c));
            this.getChannel().sendMap(c)
        }
    }
    ;
    n.channelOpened = function() {
        this.reconnectTimer_.resetExpMode();
        this.reconnectParams_ = j;
        this.pubsub_.publish("onStateOpened")
    }
    ;
    n.channelError = function(a, b) {
        this.pubsub_.publish("onError", b);
        4 == b || this.isAuthFailed(b) || (6 == b && this.reconnectTimer_.resetImmMode(),
        this.reconnectTimer_.start())
    }
    ;
    n.channelClosed = function() {
        this.pubsub_.publish("onStateClosed")
    }
    ;
    n.getAdditionalParams = function() {
        var a = {
            v: 2
        };
        this.sCookie_ && (a.gsessionid = this.sCookie_);
        return a
    }
    ;
    n.channelHandleArray = function(a, b) {
        this.debug("Channel received array: " + b);
        if ("S" == b[0])
            this.sCookie_ = b[1];
        else {
            var c = this.createRemoteEvent(b[0], b[1]);
            Hg("REMOTE_EVENT", c);
            this.pubsub_.publish("onMessage", c)
        }
    }
    ;
    n.createRemoteEvent = function(a, b) {
        return new Jh(a,b)
    }
    ;
    n.reconnect_ = function() {
        this.reconnectTimer_.stop();
        this.channel_.hasOutstandingRequests() ? this.reconnectTimer_.start() : this.connect(this.reconnectParams_)
    }
    ;
    var Lh = function(a, b, c) {
        Kh.call(this, a, {
            device: "LOUNGE_SCREEN",
            id: b.id,
            name: b.name,
            app: b.app,
            loungeIdToken: c
        });
        this.connectionCallbackQueue_ = [];
        this.getPubSub().subscribe("onStateOpened", this.notify_, this);
        this.getPubSub().subscribe("onError", this.notify_, this)
    };
    F(Lh, Kh);
    n = Lh.prototype;
    n.notify_ = function() {
        var a = 3 == this.getChannel().getState();
        if (0 < this.connectionCallbackQueue_.length) {
            var b = this.connectionCallbackQueue_;
            this.connectionCallbackQueue_ = [];
            I(b, function(b) {
                b(a)
            })
        }
    }
    ;
    n.connectWithCallback = function(a, b) {
        this.getChannel() && 3 == this.getChannel().getState() ? a(i) : (this.connectionCallbackQueue_.push(a),
        this.connect(),
        b && this.getChannel().setExtraHeaders({
            Authorization: "OAuth " + b
        }))
    }
    ;
    n.parseVideoId_ = function(a) {
        return a.videoId || a.video_id || ""
    }
    ;
    n.parseVideoIds_ = function(a) {
        a = a.videoIds || a.video_ids || "";
        return 0 < a.length ? a.split(",") : []
    }
    ;
    n.parseVideoSources_ = function(a) {
        a = a.videoSources || "";
        return 0 < a.length ? a.split(",") : []
    }
    ;
    n.parseCurrentTime_ = function(a) {
        a = parseInt(a.currentTime || a.newTime, 10);
        if (isNaN(a) || 0 > a)
            a = 0;
        return a
    }
    ;
    n.createRemoteEvent = function(a, b) {
        var c = b || {}
          , e = {};
        switch (a) {
        case "play":
        case "pause":
        case "stopVideo":
            break;
        case "seekTo":
            e.currentTime = this.parseCurrentTime_(c);
            break;
        case "setVideo":
            e.videoId = this.parseVideoId_(c);
            e.currentTime = this.parseCurrentTime_(c);
            break;
        case "setPlaylist":
            e.videoIds = this.parseVideoIds_(c);
            e.currentTime = this.parseCurrentTime_(c);
            e.currentIndex = parseInt(c.currentIndex, 10);
            e.videoSources = this.parseVideoSources_(c);
            if (isNaN(e.currentIndex) || -1 == e.currentIndex) {
                var f = this.parseVideoId_(c);
                f && e.videoIds ? (this.debug("Using deprecated version of setPlaylist with videoId."),
                e.currentIndex = Qa(e.videoIds, function(a) {
                    return a == f
                })) : e.currentIndex = -1
            }
            break;
        case "updatePlaylist":
            e.videoIds = this.parseVideoIds_(c);
            e.videoSources = this.parseVideoSources_(c);
            break;
        case "setVolume":
            e.volume = parseInt(c.volume, 10);
            break;
        case "getNowPlaying":
        case "getPlaylist":
            e.recipientDevice = c.recipientDevice || "";
            e.addContextParams = function(a) {
                e.recipitentDevice && (a.recipientDevice = e.recipientDevice)
            }
            ;
            break;
        case "remoteConnected":
        case "remoteDisconnected":
            e.device = new Fd(c);
            break;
        case "loungeStatus":
            c = rb(c.devices);
            e.devices = w(c) ? Na(c, function(a) {
                return new Fd(a)
            }) : [];
            break;
        case "showQrCode":
            e.url = c.url || "";
            break;
        case "hideQrCode":
            break;
        default:
            this.debug("Unknown or deprecated action: " + a)
        }
        return new Jh(a,e)
    }
    ;
    var Mh = function(a) {
        this.name = a.name || "";
        this.loungeToken = a.loungeToken || "";
        this.screenId = a.screenId || j;
        this.hasBeenPaired = !!a.hasBeenPaired;
        this.expiration = this.loungeToken ? a.expiration ? a.expiration : this.isPermanent() ? E() + 11232E5 : E() + 18E6 : E() - 6E4
    };
    Mh.prototype.isPermanent = function() {
        return !!this.screenId
    }
    ;
    Mh.prototype.isExpired = function() {
        return this.expiration < E()
    }
    ;
    Mh.prototype.getData = function() {
        var a = {
            name: this.name,
            loungeToken: this.loungeToken,
            expiration: this.expiration,
            hasBeenPaired: this.hasBeenPaired
        };
        this.screenId && (a.screenId = this.screenId);
        return a
    }
    ;
    Mh.prototype.equals = function(a) {
        return !a ? k : !!this.screenId && this.screenId == a.screenId || this.loungeToken == a.loungeToken
    }
    ;
    var Nh = function(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, e = a.length; c < e; c++) {
            var f = a[c].split("=");
            if (1 == f.length && f[0] || 2 == f.length) {
                var g = Da(f[0] || "")
                  , f = Da(f[1] || "");
                g in b ? w(b[g]) ? Va(b[g], f) : b[g] = [b[g], f] : b[g] = f
            }
        }
        return b
    }
      , Oh = function(a, b) {
        var c = a.split("?", 2);
        a = c[0];
        var c = Nh(c[1] || ""), e;
        for (e in b)
            c[e] = b[e];
        return ke(me([a], c))
    };
    var Ph = j;
    "undefined" != typeof XMLHttpRequest ? Ph = function() {
        return new XMLHttpRequest
    }
    : "undefined" != typeof ActiveXObject && (Ph = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    var Qh = function(a, b, c, e, f, g) {
        var l = Ph && Ph();
        if ("open"in l) {
            l.onreadystatechange = function() {
                4 == (l && "readyState"in l ? l.readyState : 0) && b && b(l)
            }
            ;
            c = (c || "GET").toUpperCase();
            e = e || "";
            l.open(c, a, i);
            g && (l.responseType = g);
            a = "POST" == c;
            if (f)
                for (var m in f)
                    l.setRequestHeader(m, f[m]),
                    "content-type" == m.toLowerCase() && (a = k);
            a && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            l.send(e);
            return l
        }
    }
      , Rh = function(a, b) {
        var c = b.format || "JSON";
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var e = b.urlParams;
        e && (a = Oh(a, e));
        var f = b.postBody || "";
        if (e = b.postParams)
            f = Nh(f),
            jb(f, e),
            e = me([], f),
            e[0] = "",
            f = e.join("");
        var g = k, l, m = Qh(a, function(a) {
            if (!g) {
                g = i;
                l && window.clearTimeout(l);
                var e;
                a: switch (a && "status"in a ? a.status : -1) {
                case 0:
                case 200:
                case 204:
                case 304:
                    e = i;
                    break a;
                default:
                    e = k
                }
                var f = j;
                if (e || 400 <= a.status && 500 > a.status) {
                    var m = j;
                    switch (c) {
                    case "JSON":
                        var f = a.responseText
                          , D = a.getResponseHeader("Content-Type") || "";
                        f && 0 <= D.indexOf("json") && (m = sb(f));
                        break;
                    case "XML":
                        f = (f = a.responseXML) ? f ? (f = ("responseXML"in f ? f.responseXML : f).getElementsByTagName("root")) && 0 < f.length ? f[0] : j : j : j,
                        f && (m = {},
                        f = f.getElementsByTagName("*"),
                        I(f, function(a) {
                            var b = m
                              , c = a.tagName
                              , e = "";
                            I(a.childNodes, function(a) {
                                e += a.nodeValue
                            });
                            b[c] = e
                        }))
                    }
                    f = m
                }
                if (e)
                    a: {
                        e = f;
                        switch (c) {
                        case "XML":
                            e = 0 == parseInt(e && e.return_code, 10);
                            break a;
                        case "RAW":
                            e = i;
                            break a
                        }
                        e = !!e
                    }
                f = f || {};
                D = b.context || p;
                e ? b.onSuccess && b.onSuccess.call(D, a, f) : b.onError && b.onError.call(D, a, f);
                b.onFinish && b.onFinish.call(D, a, f)
            }
        }, b.method, f, b.headers, b.responseType);
        b.onTimeout && 0 < b.timeout && (l = Fg(function() {
            g || (g = i,
            m.abort(),
            window.clearTimeout(l),
            b.onTimeout.call(b.context || p, m))
        }, b.timeout));
        return m
    };
    var Sh = function(a) {
        this.screen_ = j;
        this.localStorage_ = a || new mc("yt.leanback");
        if (a = this.localStorage_.get("yt_mdx_screen", i))
            this.screen_ = new Mh(a);
        this.getInitializedScreenQueue_ = [];
        this.getPairingCodeQueue_ = []
    };
    n = Sh.prototype;
    n.onRemoteConnected = function() {
        this.screen_.hasBeenPaired || (this.screen_.hasBeenPaired = i,
        this.storeScreenStatus_())
    }
    ;
    n.getScreen = function() {
        return this.screen_
    }
    ;
    n.getInitializedScreen = function(a) {
        if (0 < this.getInitializedScreenQueue_.length)
            this.getInitializedScreenQueue_.push(a);
        else {
            var b = z(function(a) {
                a || (this.screen_.loungeToken = "");
                this.storeScreenStatus_();
                a = this.getInitializedScreenQueue_;
                this.getInitializedScreenQueue_ = [];
                I(a, function(a) {
                    a(this.screen_)
                }, this)
            }, this);
            this.screen_ ? "" == this.screen_.loungeToken || this.screen_.isExpired() ? (this.getInitializedScreenQueue_.push(a),
            this.updateLoungeToken_(this.screen_.screenId, b)) : a(this.screen_) : (this.getInitializedScreenQueue_.push(a),
            this.generateScreenId_(z(function(a) {
                this.updateLoungeToken_(a, b)
            }, this)))
        }
    }
    ;
    n.getPairingCode = function(a, b) {
        this.getPairingCodeQueue_.push(b);
        if (!(1 < this.getPairingCodeQueue_.length)) {
            var c = z(function(a) {
                var b = this.getPairingCodeQueue_;
                this.getPairingCodeQueue_ = [];
                I(b, function(b) {
                    b(a)
                })
            }, this);
            this.getInitializedScreen(z(this.generatePairingCode_, this, a, z(function(b) {
                b ? c(b) : (this.screen_.loungeToken = "",
                this.getInitializedScreen(z(this.generatePairingCode_, this, a, c)))
            }, this)))
        }
    }
    ;
    n.registerReversePairingCode = function(a, b) {
        this.getInitializedScreen(z(this.registerPairingCode_, this, a, i, b))
    }
    ;
    n.resetScreen = function() {
        this.screen_ = j;
        this.storeScreenStatus_()
    }
    ;
    n.storeScreenStatus_ = function() {
        this.screen_ ? this.localStorage_.set("yt_mdx_screen", this.screen_.getData(), h, i) : this.localStorage_.remove("yt_mdx_screen")
    }
    ;
    n.getRequestPath = function(a) {
        var b = Number(je(document.location.href)[4] || j) || j || "";
        b && (b = ":" + b);
        var c = je(document.location.href)[3] || j;
        return "https://" + (c && decodeURIComponent(c)) + b + a
    }
    ;
    n.generateScreenId_ = function(a) {
        Qh(this.getRequestPath("/api/lounge/pairing/generate_screen_id"), function(b) {
            a(b.responseText)
        })
    }
    ;
    n.generatePairingCode_ = function(a, b) {
        var c = {
            lounge_token: this.screen_.loungeToken,
            access_type: a ? "permanent" : "temporary",
            screen_id: this.screen_.screenId || ""
        };
        Rh(this.getRequestPath("/api/lounge/pairing/get_pairing_code"), {
            postParams: c,
            method: "POST",
            format: "RAW",
            onSuccess: function(a) {
                b(a.responseText)
            },
            onError: ma(b, "")
        })
    }
    ;
    n.registerPairingCode_ = function(a, b, c) {
        Rh(this.getRequestPath("/api/lounge/pairing/register_pairing_code"), {
            postParams: {
                screen_id: this.screen_.screenId,
                pairing_code: a,
                access_type: b ? "permanent" : "temporary"
            },
            method: "POST",
            format: "RAW",
            onSuccess: z(c, this, i),
            onError: z(c, this, k)
        })
    }
    ;
    n.updateLoungeToken_ = function(a, b) {
        var c = z(function(c) {
            c = rb(c.responseText);
            var f = k;
            c.screens && I(c.screens, function(b) {
                b.screenId == a && (this.screen_ ? (this.screen_.loungeToken = b.loungeToken,
                this.screen_.expiration = b.expiration ? b.expiration : E() + 11232E5) : this.screen_ = new Mh(b),
                f = i)
            }, this);
            b(f)
        }, this);
        Rh(this.getRequestPath("/api/lounge/pairing/get_lounge_token_batch"), {
            postParams: {
                screen_ids: a
            },
            method: "POST",
            onSuccess: c,
            onError: ma(b, k)
        })
    }
    ;
    var Th = "sc_" + mf++
      , Uh = "vc_" + mf++
      , Vh = "pc_" + mf++
      , Wh = function(a) {
        a = a || {};
        this.videoId = a.videoId || "";
        this.reason = a.reason || "";
        this.error = a.error || "NOT_PLAYABLE"
    };
    Wh.prototype.getData = function() {
        return {
            videoId: this.videoId,
            reason: this.reason,
            error: this.error
        }
    }
    ;
    var Xh = function(a, b, c) {
        this.player_ = b;
        this.oauthToken_ = c;
        this.pairing_ = new Sh(a);
        this.handler_ = j;
        var e = z(this.handleRemoteEvent_, this);
        (a = ba("yt.pubsub.instance_")) && a.subscribe("REMOTE_EVENT", function() {
            var a = arguments;
            Fg(function() {
                e.apply(p, a)
            }, 0)
        }, h);
        bf(window, "unload", z(this.disconnectOnShutdown_, this));
        bf(window, "beforeunload", z(this.disconnectOnShutdown_, this))
    }
      , Yh = "mdx-toast-topic_" + mf++
      , Zh = "mdx-pairing-page-update_" + mf++;
    n = Xh.prototype;
    n.getRemoteApps = function() {
        var a = [];
        cb(this.remotes_, function(b) {
            a.push(b)
        });
        return a.sort()
    }
    ;
    n.setOauthToken = function(a) {
        this.oauthToken_ = a;
        this.handler_ && this.handler_.getChannel().setExtraHeaders(a ? {
            Authorization: "OAuth " + a
        } : {})
    }
    ;
    n.shouldConnectAtStartup = function() {
        var a = this.pairing_.getScreen();
        return !!this.oauthToken_ || !!a && a.hasBeenPaired
    }
    ;
    n.connect = function(a) {
        this.pairing_.getInitializedScreen(z(this.connectToScreen_, this, a || v))
    }
    ;
    n.disconnect = function() {
        this.handler_ && (this.handler_.getChannel().startForwardChannel_(),
        this.handler_.getChannel().disconnect(),
        this.handler_ = j)
    }
    ;
    n.resetScreen = function(a) {
        this.disconnect();
        this.pairing_.resetScreen();
        this.dispatch(Zh, new Jh("manualReset"));
        (a || this.shouldConnectAtStartup()) && this.connect()
    }
    ;
    n.getPairingCode = function(a) {
        this.pairing_.getPairingCode(i, a)
    }
    ;
    n.registerReversePairingCode = function(a, b) {
        this.pairing_.registerReversePairingCode(a, b)
    }
    ;
    n.onStateChange = function(a) {
        a = a !== h ? a : this.player_.getPlayerState();
        this.sendMessage_("onStateChange", {
            currentTime: this.player_.getCurrentTime(),
            state: a
        })
    }
    ;
    n.onVideoChange = function() {
        this.sendNowPlaying_()
    }
    ;
    n.onPlaylistChange = function(a) {
        this.sendNowPlayingPlaylist_(a || [])
    }
    ;
    n.getLoungeStatus = function() {
        this.sendMessage_("getLoungeStatus")
    }
    ;
    n.sendUpdateUsername = function(a) {
        this.sendMessage_("updateUsername", {
            username: a
        })
    }
    ;
    n.sendMessage_ = function(a, b) {
        this.remotes_ && (!gb(this.remotes_) && this.handler_) && this.handler_.sendMessage(a, b)
    }
    ;
    n.sendNowPlaying_ = function(a) {
        var b = {};
        this.addNowPlayingParams_(b);
        a && a.params.addContextParams && a.params.addContextParams(b);
        this.sendMessage_("nowPlaying", b)
    }
    ;
    n.sendNowPlayingPlaylist_ = function(a, b) {
        var c = {};
        this.addNowPlayingParams_(c);
        var e = this.player_.getPlaylist()
          , f = this.player_.getSources();
        0 < e.length && (c.video_ids = e.join(","),
        f.length == e.length ? c.videoSources = f.join(",") : this.handler_.debug("Sources and playlist length differ."));
        b && b.params.addContextParams && b.params.addContextParams(c);
        0 < a.length && (e = Na(a, function(a) {
            return a.getData()
        }),
        c.errors = ub(e));
        this.sendMessage_("nowPlayingPlaylist", c)
    }
    ;
    n.disconnectOnShutdown_ = function() {
        this.sendNowPlaying_();
        this.disconnect()
    }
    ;
    n.connectToScreen_ = function(a, b) {
        b && !this.handler_ ? (this.handler_ = new Lh("/api/lounge/bc",this.makeDevice_(),b.loungeToken),
        this.handler_.getPubSub().subscribe("onError", function(a) {
            if (this.handler_.isAuthFailed(a))
                this.onAuthenticationFailed_()
        }, this),
        this.handler_.connectWithCallback(a, this.oauthToken_ || h)) : a(!!this.handler_)
    }
    ;
    n.onAuthenticationFailed_ = function() {
        this.oauthToken_ = j;
        this.pairing_.getScreen().loungeToken = "";
        this.disconnect();
        this.connect()
    }
    ;
    n.handleRemoteEvent_ = function(a) {
        switch (a.action) {
        case "play":
            this.player_.play();
            break;
        case "pause":
            this.player_.pause();
            break;
        case "seekTo":
            this.player_.seekTo(a.params.currentTime);
            break;
        case "stopVideo":
            this.player_.stop();
            break;
        case "setVideo":
            var b = this.player_.getPlaylist()
              , b = Qa(b, function(b) {
                return b == a.params.videoId
            });
            if (0 <= b) {
                var c = this.player_.getCurrentVideoId() != a.params.videoId ? -1 : this.player_.getPlayerState();
                this.sendMessage_("nowPlaying", {
                    video_id: a.params.videoId,
                    current_time: a.params.currentTime,
                    state: c
                });
                this.player_.setVideo(a.params.videoId, b, a.params.currentTime)
            }
            break;
        case "setPlaylist":
            this.player_.setPlaylist(z(this.handlePlaylistError_, this), a.params.videoIds, a.params.videoSources, a.params.currentIndex, a.params.currentTime);
            break;
        case "updatePlaylist":
            var e = this.player_.getCurrentVideoId()
              , b = Qa(a.params.videoIds, function(a) {
                return a == e
            })
              , c = k;
            if ("" == e || 0 <= b)
                c = i,
                this.player_.setPlaylist(z(this.handlePlaylistError_, this), a.params.videoIds, a.params.videoSources);
            this.sendMessage_("confirmPlaylistUpdate", {
                updated: c
            });
            break;
        case "setVolume":
            this.player_.setVolume(a.params.volume) && this.dispatch(Yh, a);
            break;
        case "getNowPlaying":
            this.sendNowPlaying_(a);
            break;
        case "getPlaylist":
            this.player_.getErrors(z(function(b) {
                this.sendNowPlayingPlaylist_(b, a)
            }, this));
            break;
        case "remoteConnected":
            this.pairing_.onRemoteConnected();
            this.remotes_[a.params.device.id] = a.params.device.app;
            this.dispatch(Zh, a);
            this.dispatch(Yh, a);
            break;
        case "remoteDisconnected":
            delete this.remotes_[a.params.device.id];
            this.dispatch(Zh, a);
            this.dispatch(Yh, a);
            break;
        case "loungeStatus":
            a.params.devices = Ma(a.params.devices, function(a) {
                return "REMOTE_CONTROL" == a.type
            });
            this.handleLoungeStatus_(a.params.devices);
            this.dispatch(Zh, a);
            break;
        case "showQrCode":
        case "hideQrCode":
            this.dispatch(Yh, a)
        }
    }
    ;
    n.handleLoungeStatus_ = function(a) {
        this.remotes_ = {};
        I(a, function(a) {
            this.remotes_[a.id] = a.app
        }, this);
        if (!gb(this.remotes_))
            this.pairing_.onRemoteConnected()
    }
    ;
    n.addNowPlayingParams_ = function(a) {
        var b = this.player_.getCurrentVideoId();
        b && (a.video_id = b,
        a.current_time = this.player_.getCurrentTime(),
        a.state = this.player_.getPlayerState())
    }
    ;
    n.handlePlaylistError_ = function(a) {
        0 < a.length && (a = Na(a, function(a) {
            return a.getData()
        }),
        this.sendMessage_("onError", {
            errors: ub(a)
        }))
    }
    ;
    n.makeDevice_ = function() {
        return new Fd({
            id: this.getDeviceId(),
            name: this.getScreenName(),
            type: "LOUNGE_SCREEN",
            app: this.getAppName()
        })
    }
    ;
    var $h = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && a.setAttribute(c, b[c])
    }
      , ai = function() {
        var a = new ActiveXObject("MSXML2.DOMDocument");
        if (a) {
            a.resolveExternals = k;
            a.validateOnParse = k;
            try {
                a.setProperty("ProhibitDTD", i),
                a.setProperty("MaxXMLSize", 2048),
                a.setProperty("MaxElementDepth", 256)
            } catch (b) {}
        }
        return a
    };
    var bi = function(a) {
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
                e = bi(a)),
                c in b ? (w(b[c]) || (b[c] = [b[c]]),
                b[c].push(e)) : b[c] = e,
                a = a.nextSibling;
        return b
    };
    var ci = function(a, b, c, e, f, g, l, m, s) {
        this.serviceId = a;
        this.authService_ = f;
        this.listType_ = g;
        this.cacheService_ = new qb;
        this.videoIds_ = [];
        this.listIds_ = {};
        this.nextSequenceNumber_ = 1;
        this.lastSequenceNumber_ = 0;
        var r;
        a: if (document.implementation && document.implementation.createDocument)
            r = document.implementation.createDocument("http://www.w3.org/2005/Atom", "feed", j);
        else {
            if ("undefined" != typeof ActiveXObject && (f = ai())) {
                f.appendChild(f.createNode(1, "feed", "http://www.w3.org/2005/Atom"));
                r = f;
                break a
            }
            d(Error("Your browser does not support creating new documents"))
        }
        this.domHelper_ = new xc(r);
        qe.call(this, a, b, c, e, l, m, s)
    };
    F(ci, qe);
    n = ci.prototype;
    n.setVideoIds = function(a, b) {
        this.videoIds_ = a;
        return this.load({}, b)
    }
    ;
    n.setListIds = function(a) {
        this.listIds_ = a
    }
    ;
    n.getVideoIds = function() {
        return this.videoIds_
    }
    ;
    n.getFullUrl = function(a) {
        a = a || {};
        a.vpsid = this.serviceId;
        return "https://yt2009.truehosting.net/feeds/api" + a;
    }
    ;
    n.getBaseUrl = function() {
        return "https://yt2009.truehosting.net/feeds/api"
    }
    ;
    n.loadFromGdata_ = function(a, b, c, e, f) {
        var g = this.getVideoIds()
          , l = this.nextSequenceNumber_++;
        this.authService_.getAccessToken(z(function(m) {
            m && (c.access_token = m);
            this.parallelFetch_(c, e, z(function(c) {
                this.lastSequenceNumber_ > l || (this.lastSequenceNumber_ = l,
                b.watchables.clear(),
                I(c, function(a) {
                    var c = a;
                    "string" == typeof c && (a = c,
                    "undefined" != typeof DOMParser ? c = (new DOMParser).parseFromString(a, "application/xml") : "undefined" != typeof ActiveXObject ? (c = ai(),
                    c.loadXML(a)) : d(Error("Your browser does not support loading xml documents")));
                    a = bi(c);
                    this.parser.parse(b, a)
                }, this),
                this.rebuildModel_(b, g, a));
                f && f(b)
            }, this))
        }, this))
    }
    ;
    n.loadFromTransport = function(a, b, c) {
        var e = {}
          , f = this.getIdsToFetch_(e);
        a.listType = this.listType_;
        0 < f.length ? this.loadFromGdata_(e, a, b, f, c) : (a.watchables.clear(),
        this.lastSequenceNumber_ = this.nextSequenceNumber_++,
        this.rebuildModel_(a, this.getVideoIds(), e),
        c && c(a))
    }
    ;
    n.getVideoUrl_ = function(a) {
        a = this.getBaseUrl() + "/videos/" + a;
        return ke(me([a], this.defaultParams || {}))
    }
    ;
    n.getIdsToFetch_ = function(a) {
        var b = [];
        I(this.videoIds_, function(c) {
            var e = this.getVideoUrl_(c)
              , f = this.cacheService_.get(e);
            f ? a[e] = f : b.push(c)
        }, this);
        return b
    }
    ;
    n.parallelFetch_ = function(a, b, c) {
        for (var e = [], f = 0; f < b.length; ) {
            var g = Math.min(f + 50, b.length);
            e.push(Wa(b, f, g));
            f += 50
        }
        var l = 0
          , m = []
          , s = function(a, b) {
            m[a] = b;
            ++l == e.length && c(m)
        }
          , r = this.getFullUrl(a);
        I(e, function(a, b) {
            var c = ma(s, b);
            this.http.post(r, this.getPostData_(r, a), c, j, {
                "Content-Type": "application/atom+xml"
            })
        }, this)
    }
    ;
    n.rebuildModel_ = function(a, b, c) {
        a.serviceId = this.serviceId;
        0 < a.watchables.getLength() && (I(a.watchables.getItems(), function(a) {
            var b = this.getVideoUrl_(a.videoId);
            this.cacheService_.set(b, a);
            c[b] = a
        }, this),
        a.watchables.clear());
        I(b, function(b) {
            var f = this.getVideoUrl_(b)
              , f = c[f];
            this.listIds_[b] && (f.listId = this.listIds_[b]);
            a.watchables.push(f)
        }, this);
        a.title = "[[Queued Videos|Title above a list of videos that are queued up to be viewed.]]";
        a.feedIconUrl = "icon-playlist"
    }
    ;
    n.makeEntry_ = function(a) {
        var b = this.getVideoUrl_(a)
          , c = this.domHelper_.createElement("entry")
          , e = this.domHelper_.createElement("id");
        this.domHelper_.append(e, b);
        var f = this.domHelper_.createElement("batch:id");
        this.domHelper_.append(f, a);
        a = this.domHelper_.createElement("link");
        $h(a, {
            rel: "http://schemas.google.com/g/2005#batch",
            type: "application/atom+xml",
            href: b
        });
        this.domHelper_.appendChild(c, e);
        this.domHelper_.appendChild(c, f);
        this.domHelper_.appendChild(c, a);
        return c
    }
    ;
    n.getPostData_ = function(a, b) {
        var c = this.domHelper_.createElement("feed");
        $h(c, {
            xmlns: "http://www.w3.org/2005/Atom",
            "xmlns:batch": "http://schemas.google.com/gdata/batch"
        });
        var e = this.domHelper_.createElement("id");
        this.domHelper_.append(e, a);
        var f = this.domHelper_.createElement("batch:operation");
        $h(f, {
            type: "query"
        });
        this.domHelper_.appendChild(c, e);
        this.domHelper_.appendChild(c, f);
        I(b, function(a) {
            this.domHelper_.appendChild(c, this.makeEntry_(a))
        }, this);
        var g;
        "undefined" != typeof XMLSerializer ? g = (new XMLSerializer).serializeToString(c) : (e = c.xml) ? g = e : d(Error("Your browser does not support serializing XML documents"));
        return '<?xml version="1.0" encoding="UTF-8"?>' + g
    }
    ;
    var di = function(a, b, c, e, f, g, l, m, s, r) {
        Xh.call(this, e.localStorage, this, "");
        this.location_ = b;
        this.angularHelper_ = c;
        this.localStorage_ = e;
        this.playerService_ = f;
        this.progressModel_ = g;
        this.authService_ = m;
        this.remoteQueue_ = l;
        this.remoteQueueRow_ = j;
        this.watchModel_ = s;
        this.currentRow_ = j;
        this.currentVideoId_ = "";
        this.environment_ = r;
        this.connectedDevices_ = new Gd;
        deviceId = this.localStorage_.get("mdx-device-id");
        deviceId || (deviceId = ue(),
        this.localStorage_.set("mdx-device-id", deviceId));
        this.pairedDevices_ = new Gd;
        if (b = this.localStorage_.get("mdx-paired-devices", i))
            this.pairedDevices_.setItems(b.map(function(a) {
                return new Fd(a)
            })),
            this.ensureDevicePairing_(j);
        this.deviceId_ = deviceId;
        a.$on(Th, z(this.handleStateChange_, this));
        a.$on(Uh, z(this.handleVideoChange_, this));
        a.$on(Vh, z(this.handlePlaylistChange_, this));
        a.$on(Zh, z(this.onPairingUpdate_, this));
        this.lastReportedVideoId_ = "";
        this.lastCurrentTime_ = 0;
        this.remoteFeature_ = "ytremote";
        this.progressModel_.on("currentTime:changed", z(function() {
            var a = this.getCurrentTime();
            if (2 <= Math.abs(this.lastCurrentTime_ - a))
                this.onStateChange(this.getPlayerState());
            this.lastCurrentTime_ = a
        }, this))
    };
    F(di, Xh);
    n = di.prototype;
    n.onSystemStartup = function() {
        var a = (new vg(window.location)).getParameterValue("pairingCode");
        this.remoteFeature_ = a ? "ytremote_d" : "ytremote";
        this.authService_.getAccessToken(z(function(b) {
            this.setOauthToken(b || "");
            (a || this.shouldConnectAtStartup()) && this.connect(z(function() {
                a && this.registerReversePairingCode(a, v)
            }, this))
        }, this))
    }
    ;
    n.resetScreen = function() {
        this.localStorage_.remove("mdx-paired-devices");
        this.pairedDevices_.clear();
        this.connectedDevices_.clear();
        di.superClass_.resetScreen.call(this)
    }
    ;
    n.dispatch = function(a, b) {
        this.angularHelper_.getActiveScope().$emit(a, b)
    }
    ;
    n.getDeviceId = function() {
        return this.deviceId_
    }
    ;
    n.getAppName = function() {
        return "lb-v4"
    }
    ;
    n.getScreenName = function() {
        return this.environment_.isBoxee ? "Boxee" : this.environment_.isEureka ? "Eureka" : this.environment_.isPs3 ? "PlayStation/3" : this.environment_.isViera ? "Viera" : this.environment_.isWiiU ? "Wii U" : "YouTube Leanback"
    }
    ;
    n.play = function() {
        this.ensurePlayerFocus_(this.getCurrentVideoId()) && (this.playerService_.play(),
        this.showControls_())
    }
    ;
    n.pause = function() {
        this.playerService_.pause();
        this.showControls_()
    }
    ;
    n.stop = function() {
        this.playerService_.stop();
        this.currentRow_ = j;
        this.ensurePlayerFocus_("")
    }
    ;
    n.seekTo = function(a) {
        this.playerService_.seekTo(a, i);
        this.showControls_()
    }
    ;
    n.setVideo = function(a, b, c) {
        this.ensurePlayerFocus_(a, c) && (this.playerService_.play(),
        this.playerService_.seekTo(c, i))
    }
    ;
    n.setVolume = function(a) {
        return this.playerService_.setVolume(a)
    }
    ;
    n.getCurrentTime = function() {
        return this.currentVideoId_ != this.lastReportedVideoId_ || this.playerService_.isAdPlaying ? 0 : 1 == this.playerService_.state || 2 == this.playerService_.state || 3 == this.playerService_.state || 0 == this.playerService_.state ? this.progressModel_.currentTime : 0
    }
    ;
    n.getPlayerState = function() {
        return this.playerService_.isAdPlaying ? 1081 : this.currentVideoId_ != this.lastReportedVideoId_ ? -1 : this.playerService_.state
    }
    ;
    n.getCurrentVideoId = function() {
        return this.currentVideoId_ || ""
    }
    ;
    n.setCurrentVideoId = function(a) {
        return a != this.currentVideoId_ ? (this.currentVideoId_ = a || "",
        i) : k
    }
    ;
    n.setPlaylist = function(a, b, c, e, f) {
        if (0 == b.length)
            this.stop(),
            a([]);
        else {
            this.remoteQueueRow_ || (this.remoteQueueRow_ = Rd(this.remoteQueue_, "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]", "icon-remote", "rq"));
            var g = ""
              , l = e;
            e = k;
            if (!this.currentRow_ || this.currentRow_ !== this.remoteQueueRow_)
                this.currentRow_ = this.remoteQueueRow_,
                e = i;
            l === h ? (l = (current = this.getCurrentVideoId()) ? b.indexOf(current) : -1,
            e && current && this.watchModel_.setCurrentVideo(this.watchModel_.currentVideo, this.currentRow_)) : 0 > l ? (this.setCurrentVideoId(""),
            this.lastReportedVideoId_ = "",
            this.ensurePlayerFocus_("")) : (g = b[l],
            this.setCurrentVideoId(g));
            var m = {};
            c.forEach(function(a, c) {
                m[b[c]] = a
            });
            0 <= l && this.remoteQueueRow_.setActiveIndex(l);
            this.remoteQueue_.setListIds(m);
            this.remoteQueue_.setVideoIds(b, z(function(b) {
                this.remoteQueueRow_.model = b;
                this.playerService_.setRemoteFeature(this.remoteFeature_);
                if (g && this.ensurePlayerFocus_(g, f))
                    if (oldModel = this.watchModel_.getVideoCollection(),
                    !oldModel || oldModel.serviceId != this.remoteQueue_.serviceId) {
                        var c = b.watchables.getItemAt(l);
                        this.watchModel_.setCurrentVideo(c, this.currentRow_)
                    } else
                        this.playerService_.play(),
                        f !== h && this.seekTo(f);
                a(this.getErrorsFromCollection_(b))
            }, this))
        }
    }
    ;
    n.getPlaylist = function() {
        return this.currentRow_ ? this.currentRow_.model.serviceId == this.remoteQueue_.serviceId ? this.remoteQueue_.getVideoIds() : this.currentRow_.model.watchables.getItems().map(function(a) {
            return a.videoId
        }) : []
    }
    ;
    n.getSources = function() {
        return this.currentRow_ ? this.currentRow_.model.watchables.getItems().map(function(a) {
            return a.listId.substring(0, 2)
        }) : []
    }
    ;
    n.getErrors = function(a) {
        this.currentRow_ ? a(this.getErrorsFromCollection_(this.currentRow_.model)) : a([])
    }
    ;
    n.handleStateChange_ = function(a, b) {
        this.lastCurrentTime_ = this.getCurrentTime();
        if (this.playerService_.isPlayingAd)
            this.onStateChange(1081);
        else if (this.lastReportedVideoId_ != this.currentVideoId_)
            this.onStateChange(-1);
        else
            -1E3 == b && (b = -1),
            this.onStateChange(b)
    }
    ;
    n.handleVideoChange_ = function(a, b) {
        this.setCurrentVideoId(b) || this.lastReportedVideoId_ != b ? (this.lastReportedVideoId_ = b || "",
        this.lastCurrentTime_ = b ? this.getCurrentTime() : 0,
        this.onVideoChange()) : (this.lastCurrentTime_ = this.getCurrentTime(),
        this.onStateChange(this.getPlayerState()))
    }
    ;
    n.handlePlaylistChange_ = function(a, b) {
        if (!this.currentRow_ || !this.currentRow_.equals(b)) {
            var c = "";
            b && b != this.remoteQueueRow_ && (c = (c = b.getCurrentItem()) ? c.videoId || "" : "");
            this.setCurrentVideoId(c);
            this.lastReportedVideoId_ = c;
            this.lastCurrentTime_ = 0
        }
        this.playerService_.setRemoteFeature(b.service && "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]" == b.service.serviceId ? this.remoteFeature_ : j);
        this.currentRow_ = b;
        this.onPlaylistChange(this.getErrorsFromCollection_(this.currentRow_.model))
    }
    ;
    n.ensurePlayerFocus_ = function(a, b) {
        var c = angular.element(document.getElementById("app-markup")).scope().application;
        if (!a)
            return this.setCurrentVideoId(""),
            c.isWatchActive() && (this.location_.state("browse", {}),
            this.angularHelper_.safeDigest()),
            this.onVideoChange(),
            k;
        if (c.isWatchActive() && this.watchModel_.currentVideo && this.watchModel_.currentVideo.videoId == a)
            return i;
        if (!this.currentRow_)
            return k;
        this.setCurrentVideoId(a);
        var e = this.currentRow_
          , f = Ra(e.model.watchables.getItems(), function(b) {
            return b.videoId == a
        });
        if (!f)
            return this.remoteQueue_.load({
                q: "rq"
            }, z(function(f) {
                if (!(this.getCurrentVideoId() != a || e != this.currentRow_))
                    if (f = Ra(f.watchables.getItems(), function(b) {
                        return b.videoId == a
                    }))
                        c.scope.$emit("request-playback", f, e, b),
                        this.angularHelper_.safeDigest()
            }, this)),
            k;
        c.scope.$emit("request-playback", f, e, b);
        this.angularHelper_.safeDigest();
        return k
    }
    ;
    n.getErrorsFromCollection_ = function(a) {
        var b = [];
        a.watchables.getItems().forEach(function(a) {
            a.errorCode && b.push(new Wh({
                videoId: a.videoId,
                reason: a.errorCode
            }))
        }, this);
        return b
    }
    ;
    n.showControls_ = function() {
        var a = this.angularHelper_.getActiveScope().application;
        a.isWatchActive() && !a.currentMode && this.location_.mode("transport")
    }
    ;
    n.ensureDevicePairing_ = function(a) {
        if (a) {
            var b = k
              , c = this.pairedDevices_.getItems();
            this.pairedDevices_.setItems(c.map(function(c) {
                return c.id == a.id ? (b = i,
                a) : c
            }));
            b || (this.pairedDevices_.unshift(a),
            this.localStorage_.set("mdx-paired-devices", this.pairedDevices_.getItems().map(function(a) {
                return a.getData()
            }), 31536E4, i))
        }
        this.pairedDevices_.sort(function(a, b) {
            var c = (a.connected ? 0 : 1) - (b.connected ? 0 : 1);
            return 0 != c ? c : a.displayString().localeCompare(b.displayString())
        })
    }
    ;
    n.onPairingUpdate_ = function(a, b) {
        switch (b.action) {
        case "loungeStatus":
            this.pairedDevices_.getItems().forEach(function(a) {
                a.connected = k
            });
            this.connectedDevices_.setItems(b.params.devices);
            this.connectedDevices_.getItems().forEach(z(function(a) {
                a.connected = i;
                this.ensureDevicePairing_(a)
            }, this));
            break;
        case "remoteConnected":
            this.connectedDevices_.setItems(this.connectedDevices_.getItems().filter(function(a) {
                return a.id != b.params.device.id
            }));
            b.params.device.connected = i;
            this.connectedDevices_.unshift(b.params.device);
            this.ensureDevicePairing_(b.params.device);
            break;
        case "remoteDisconnected":
            this.connectedDevices_.setItems(this.connectedDevices_.getItems().filter(function(a) {
                return a.id != b.params.device.id
            })),
            this.pairedDevices_.getItems().forEach(function(a) {
                a.id == b.params.device.id && (a.connected = k)
            }),
            this.ensureDevicePairing_(j)
        }
        this.playerService_.setRemoteApps(this.getRemoteApps())
    }
    ;
    n.getConnectedDevices = function() {
        return this.connectedDevices_
    }
    ;
    n.getPairedDevices = function() {
        return this.pairedDevices_
    }
    ;
    di.$inject = "$rootScope locationService angularHelper localStorage playerService progressModel remoteQueueService authService watchModel environmentModel".split(" ");
    var ei = function(a) {
        this.body_ = angular.element(a.document.body);
        a.addEventListener("resize", z(this.handleResize_, this));
        this.handleResize_()
    };
    ei.prototype.handleResize_ = function() {
        this.body_.css("fontSize", oe(this.body_[0].offsetHeight / 720))
    }
    ;
    ei.$inject = ["$window"];
    var fi = function(a, b, c, e) {
        this.rootScope_ = a;
        this.window_ = b;
        this.playerService_ = c;
        this.timeService_ = e;
        this.pollingTimer_ = 0;
        this.pollingInterval_ = 5E3;
        this.networkPluginObject_ = this.pluginObject_ = j;
        this.initialize_()
    };
    fi.prototype.initialize_ = function() {
        if (this.window_.Common && this.window_.Common.API && (this.pluginObject_ = new Common.API.Plugin,
        this.playerService_.on("state:changed", z(this.playerStateChangedHandler_, this)),
        this.networkPluginObject_ = this.window_.document.getElementById("pluginObjectNetwork")))
            this.pollingTimer_ = this.timeService_.setInterval(z(function() {
                this.pollNetworkPlugin_()
            }, this), this.pollingInterval_)
    }
    ;
    fi.prototype.playerStateChangedHandler_ = function() {
        1 !== this.playerService_.state ? this.pluginObject_.setOffScreenSaver() : this.pluginObject_.setOnScreenSaver()
    }
    ;
    fi.prototype.pollNetworkPlugin_ = function() {
        this.checkConnection_() || this.rootScope_.$emit("network_failure")
    }
    ;
    fi.prototype.checkConnection_ = function() {
        var a = 0
          , a = 0
          , b = this.networkPluginObject_.GetActiveType();
        if (-1 === b)
            return k;
        a = this.networkPluginObject_.CheckPhysicalConnection(b);
        if (1 !== a)
            return k;
        a = networkPlugin.CheckHTTP(b);
        return 1 !== a ? k : i
    }
    ;
    fi.$inject = ["$rootScope", "$window", "playerService", "timeService"];
    var gi = function(a) {
        this.localStorage_ = a;
        this.recentSearches_ = new qb(10,i);
        this.initializeRecentSearches_()
    };
    n = gi.prototype;
    n.storeQuery = function(a, b, c) {
        this.recentSearches_.set(a, this.getEntryForValues_(a, b, c));
        a = this.recentSearches_.map(function(a, b) {
            return this.getEntryForValues_(b, a.video, a.totalResults)
        }, this);
        this.localStorage_.set("recent-searches", a)
    }
    ;
    n.load = function() {
        return this.recentSearches_.getValues()
    }
    ;
    n.clear = function() {
        this.recentSearches_.clear();
        this.localStorage_.remove("recent-searches")
    }
    ;
    n.getEntryForValues_ = function(a, b, c) {
        return {
            query: a,
            video: b,
            totalResults: c,
            className: "video-tile recent-search-tile"
        }
    }
    ;
    n.initializeRecentSearches_ = function() {
        for (var a = this.localStorage_.get("recent-searches") || [], b = a.length, a = y(a) ? a.split("") : a, b = b - 1; 0 <= b; --b)
            if (b in a) {
                var c = a[b];
                this.recentSearches_.set(c.query, c)
            }
    }
    ;
    gi.$inject = ["localStorage"];
    var hi = function(a, b, c) {
        this.rootScope_ = a;
        this.interpolate_ = b;
        this.searchHistoryService_ = c;
        this.clearSearchesTile_ = new Ld(R.htmlPath + "/tiles/clear_searches_tile.html","request-clear-searches")
    };
    hi.prototype.load = function(a, b) {
        var c = new S
          , e = this.searchHistoryService_.load();
        c.watchables.push(new Ld(R.htmlPath + "/tiles/search_tile.html","request-search",{
            resultCount: e.length
        }));
        e.forEach(function(a) {
            c.watchables.push(new Ld(R.htmlPath + "/tiles/recent_search_tile.html","request-search",a))
        });
        0 < e.length && c.watchables.push(this.clearSearchesTile_);
        b && b(c)
    }
    ;
    hi.prototype.getRowDefinition = function() {
        var a = this.interpolate_("[[Search|Clicking this launches the search interface.]]")(this.rootScope_);
        return Rd(this, a, "icon-search", "searchRow", j, j, "actiontile")
    }
    ;
    hi.$inject = ["$rootScope", "$interpolate", "searchHistoryService"];
    var ii = function(a, b, c, e, f, g, l, m, s) {
        mg.call(this, a, b, c, e, f, l, m, s);
        this.listType_ = g
    };
    F(ii, mg);
    ii.prototype.loadFromTransport = function(a, b, c, e) {
        a.listType = this.listType_;
        mg.prototype.loadFromTransport.call(this, a, b, c, e)
    }
    ;
    var ji = function(a, b, c, e, f, g, l, m, s) {
        ii.call(this, a, b, c, e, f, g, l, m, s);
        this.filters = {};
        this.sort = "relevance";
        this.serviceQuery = ""
    };
    F(ji, ii);
    ji.prototype.load = function(a, b) {
        var c = this.buildParameters_(a);
        return !c.query ? (c = new this.parser.modelClass,
        b && b(c),
        c) : ii.prototype.load.call(this, c, b)
    }
    ;
    ji.prototype.buildParameters_ = function(a) {
        var b = {};
        B(b, this.filters);
        b.hd === k && delete b.hd;
        a && B(b, a);
        this.sort && (b.orderby = this.sort);
        return b
    }
    ;
    ji.prototype.clearQuery = function() {
        this.serviceQuery = ""
    }
    ;
    var ki = function(a, b, c, e, f, g, l, m, s) {
        this.serviceId = "settingsRowService";
        this.rootScope_ = a;
        this.interpolate_ = b;
        this.location_ = c;
        this.angularHelper_ = e;
        this.authService_ = f;
        this.userProfileService_ = g;
        this.remoteService_ = l;
        this.environment_ = m;
        this.privateDataService_ = s;
        this.cache_ = {};
        this.remotePair_ = this.environment_.supportsPairing && new Ld(R.htmlPath + "/tiles/remote_pairing_tile.html","request-pairing",{
            devices: this.remoteService_.getConnectedDevices().getLength()
        }) || j;
        this.remoteReset_ = this.environment_.supportsPairing && new Ld(R.htmlPath + "/tiles/remote_reset_tile.html","request-remote-reset",{
            devices: this.remoteService_.getPairedDevices().getLength()
        }) || j;
        this.credits_ = new Ld(R.htmlPath + "/tiles/credits_tile.html","request-view-credits");
        this.tos_ = new Ld(R.htmlPath + "/tiles/tos_and_privacy_tile.html","request-view-tos");
        this.kenkoTile_ = new Ld(R.htmlPath + "/tiles/kenko_tile.html","request-view-kenko");
        this.shiyojoTile_ = new Ld(R.htmlPath + "/tiles/shiyojo_tile.html","request-view-shiyojo");
        this.environment_.supportsPairing && a.$on(Zh, z(this.pairingUpdateHandler_, this))
    };
    n = ki.prototype;
    n.pairingUpdateHandler_ = function() {
        this.updateConnectedDevices_();
        this.angularHelper_.safeDigest()
    }
    ;
    n.updateConnectedDevices_ = function() {
        this.environment_.supportsPairing && (this.remotePair_.actionData.devices = this.remoteService_.getConnectedDevices().getLength(),
        this.remoteReset_.actionData.devices = this.remoteService_.getPairedDevices().getLength())
    }
    ;
    n.load = function(a, b) {
        var c = new S;
        this.authService_.getAccessToken(z(function(a) {
            a ? this.userProfileService_.loadWithQuery("default", z(function(a) {
                this.environment_.providePlatformData(a);
                this.loginTileDataReadyHandler("/tiles/logout_tile.html", "request-logout", c, a, b)
            }, this)) : this.loginTileDataReadyHandler("/tiles/login_tile.html", "request-login", c, j, b)
        }, this))
    }
    ;
    n.loginTileDataReadyHandler = function(a, b, c, e, f) {
        a = new Ld(R.htmlPath + a,b,e);
        c.watchables.clear();
        c.watchables.push(a);
        this.environment_.supportsPairing && (c.watchables.push(this.remotePair_),
        0 < this.remoteReset_.actionData.devices && c.watchables.push(this.remoteReset_));
        c.watchables.push(new Ld(R.htmlPath + "/tiles/device_retention_tile.html","request-device-retention",{
            privateDataService: this.privateDataService_
        }));
        (this.environment_.isPs3 || this.environment_.isWiiU) && c.watchables.push(this.credits_);
        this.environment_.isPs3 && 0 == this.environment_.platformLicenseArea && (c.watchables.push(this.kenkoTile_),
        c.watchables.push(this.shiyojoTile_));
        c.watchables.push(this.tos_);
        f && f(c)
    }
    ;
    n.getRowDefinition = function() {
        var a = this.interpolate_("[[Sign In & Settings|Menu item title that allows a user to sign in or change settings of the application.|18105560]]")(this.rootScope_);
        return Rd(this, a, "icon-player-settings", "settingsRowService", j, j, "actiontile")
    }
    ;
    ki.$inject = "$rootScope $interpolate locationService angularHelper authService userProfileService remoteService environmentModel privateDataService".split(" ");
    var li = function(a, b, c, e, f) {
        this.namespaceKey = "yttv_spinner";
        this.storageKey = "spinner_log";
        xf.call(this, a, b, c, e, f)
    };
    F(li, xf);
    li.$inject = ["authService", "privateDataService", "reportingService", "timeService", "environmentModel"];
    var mi = function(a, b) {
        this.stats_ = new ve(a);
        this.environment_ = a;
        this.privateDataService_ = b;
        this.privateDataService_.addClearDataListener(z(this.clearStats_, this))
    };
    n = mi.prototype;
    n.onSystemStartup = function() {
        var a = this.loadSavedStats_();
        a && this.updateStatsForNewStart_(rb(a));
        this.save_()
    }
    ;
    n.updateLoginInfo = function(a, b) {
        if (this.stats_.loginState = a)
            this.stats_.uga = b || this.stats_.uga,
            this.stats_.prevLogin = this.stats_.recentLogin,
            this.stats_.recentLogin = this.environment_.startupTime,
            this.stats_.firstLogin || (this.stats_.firstLogin = this.stats_.recentLogin);
        this.save_()
    }
    ;
    n.incrementViews = function() {
        this.stats_.cumulativeViews++;
        this.stats_.cumulativePlaybacks++;
        this.save_()
    }
    ;
    n.incrementPlaybacks = function() {
        this.stats_.cumulativePlaybacks++;
        this.save_()
    }
    ;
    n.incrementSubscriptions = function() {
        this.stats_.cumulativeSubscriptions++;
        this.save_()
    }
    ;
    n.incrementFavorites = function() {
        this.stats_.cumulativeFavorites++;
        this.save_()
    }
    ;
    n.incrementComments = function() {
        this.stats_.cumulativeComments++;
        this.save_()
    }
    ;
    n.getCohortPingData = function() {
        return {
            firstactive: this.stats_.firstActive,
            prevactive: this.stats_.prevActive,
            firstactivegeo: this.stats_.firstActiveGeo,
            loginstate: this.stats_.loginState,
            firstlogin: this.stats_.firstLogin,
            prevlogin: this.stats_.prevLogin,
            uga: this.stats_.uga,
            cum_appstarts: this.stats_.cumulativeAppStarts,
            cum_views: this.stats_.cumulativeViews,
            cum_playbacks: this.stats_.cumulativePlaybacks,
            cum_subscriptions: this.stats_.cumulativeSubscriptions,
            cum_favorites: this.stats_.cumulativeFavorites,
            cum_comments: this.stats_.cumulativeComments
        }
    }
    ;
    n.getRetentionPingData = function() {
        return {
            app_anon_id: this.stats_.id,
            firstactive: this.stats_.firstActive,
            prevactive: this.stats_.prevActive,
            firstactivegeo: this.stats_.firstActiveGeo,
            loginstate: this.stats_.loginState,
            firstlogin: this.stats_.firstLogin,
            prevlogin: this.stats_.prevLogin,
            uga: this.stats_.uga
        }
    }
    ;
    n.save_ = function() {
        this.privateDataService_.saveToLocalStorage("device-statistics", this.stats_.toJson())
    }
    ;
    n.loadSavedStats_ = function() {
        return this.privateDataService_.getFromLocalStorage("device-statistics")
    }
    ;
    n.updateStatsForNewStart_ = function(a) {
        this.stats_.id = a.id;
        this.stats_.firstActive = a.firstActive;
        this.stats_.firstActiveGeo = a.firstActiveGeo;
        this.stats_.recentLogin = a.recentLogin;
        this.stats_.loginState = a.loginState;
        this.stats_.firstLogin = a.firstLogin;
        this.stats_.prevLogin = a.prevLogin;
        this.stats_.uga = a.uga;
        this.stats_.cumulativeViews = a.cumulativeViews;
        this.stats_.cumulativePlaybacks = a.cumulativePlaybacks;
        this.stats_.cumulativeSubscriptions = a.cumulativeSubscriptions;
        this.stats_.cumulativeFavorites = a.cumulativeFavorites;
        this.stats_.cumulativeComments = a.cumulativeComments;
        this.stats_.prevActive = a.recentActive;
        this.stats_.cumulativeAppStarts = ++a.cumulativeAppStarts
    }
    ;
    n.clearStats_ = function() {
        this.stats_ = new ve(this.environment_)
    }
    ;
    mi.$inject = ["environmentModel", "privateDataService"];
    String.fromCharCode(160);
    var ni = {};
    var oi = function(a, b) {
        this.sourceLangCode = a;
        this.targetLangCode = b;
        this.string_ = [a, b].join("|")
    }
      , pi = {}
      , qi = function(a, b) {
        "iw" == a ? a = "he" : "iw" == b && (b = "he");
        var c = [a, b].join("|");
        return pi[c] || (pi[c] = new oi(a,b))
    };
    oi.prototype.toString = function() {
        return this.string_
    }
    ;
    oi.prototype.inverse = function() {
        return qi(this.targetLangCode, this.sourceLangCode)
    }
    ;
    var ri = {
        INPUTMETHOD_PINYIN_CHINESE_SIMPLIFIED: "zh-t-i0-pinyin",
        INPUTMETHOD_PINYIN_CHINESE_TRADITIONAL: "zh-hant-t-i0-pinyin",
        INPUTMETHOD_TRANSLITERATION_AMHARIC: "am-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_ARABIC: "ar-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_BELARUSIAN: "be-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_BENGALI: "bn-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_BULGARIAN: "bg-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_ENGLISH: "en-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_GREEK: "el-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_GUJARATI: "gu-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_HEBREW: "he-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_HINDI: "hi-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_HIRAGANA: "ja-hira-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_JAPANESE: "ja-t-ja-hira-i0-und",
        INPUTMETHOD_TRANSLITERATION_KANNADA: "kn-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_MALAYALAM: "ml-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_MARATHI: "mr-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_NEPALI: "ne-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_ORIYA: "or-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_PERSIAN: "fa-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_PUNJABI: "pa-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_RUSSIAN: "ru-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_SANSKRIT: "sa-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_SERBIAN: "sr-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_SINHALESE: "si-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_TAMIL: "ta-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_TELUGU: "te-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_TIGRINYA: "ti-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_UKRAINE: "uk-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_URDU: "ur-t-i0-und",
        INPUTMETHOD_TRANSLITERATION_VIETNAMESE: "vi-t-i0-und",
        INPUTMETHOD_WUBI_CHINESE_SIMPLIFIED: "zh-t-i0-wubi-1986",
        INPUTMETHOD_ZHUYIN_CHINESE_TRADITIONAL: "zh-hant-t-i0-und",
        KEYBOARD_ALBANIAN: "sq-t-k0-und",
        KEYBOARD_ARABIC: "ar-t-k0-und",
        KEYBOARD_ARMENIAN_EASTERN: "hy-hyr-t-k0-und",
        KEYBOARD_ARMENIAN_WESTERN: "hy-hyt-t-k0-und",
        KEYBOARD_BASQUE: "eu-t-k0-und",
        KEYBOARD_BELARUSIAN: "be-t-k0-und",
        KEYBOARD_BENGALI_INSCRIPT: "bn-t-k0-und",
        KEYBOARD_BENGALI_PHONETIC: "bn-t-und-latn-k0-und",
        KEYBOARD_BOSNIAN: "bs-t-k0-und",
        KEYBOARD_BRAZILIAN_PORTUGUESE: "pt-br-t-k0-und",
        KEYBOARD_BULGARIAN: "bg-t-k0-und",
        KEYBOARD_BULGARIAN_PHONETIC: "bg-t-k0-qwerty",
        KEYBOARD_CATALAN: "ca-t-k0-und",
        KEYBOARD_CHEROKEE: "chr-t-k0-und",
        KEYBOARD_CROATIAN: "hr-t-k0-und",
        KEYBOARD_CZECH: "cs-t-k0-und",
        KEYBOARD_CZECH_QWERTZ: "cs-t-k0-qwertz",
        KEYBOARD_DANISH: "da-t-k0-und",
        KEYBOARD_DARI: "prs-t-k0-und",
        KEYBOARD_DEVANAGARI_PHONETIC: "hi-t-k0-qwerty",
        KEYBOARD_DUTCH: "nl-t-k0-und",
        KEYBOARD_DZONGKHA: "dz-t-k0-und",
        KEYBOARD_ENGLISH: "en-t-k0-und",
        KEYBOARD_ENGLISH_DVORAK: "en-t-k0-dvorak",
        KEYBOARD_ESTONIAN: "et-t-k0-und",
        KEYBOARD_ETHIOPIC: "und-ethi-t-k0-und",
        KEYBOARD_FINNISH: "fi-t-k0-und",
        KEYBOARD_FRENCH: "fr-t-k0-und",
        KEYBOARD_GALICIAN: "gl-t-k0-und",
        KEYBOARD_GEORGIAN_QWERTY: "ka-t-k0-und",
        KEYBOARD_GEORGIAN_TYPEWRITER: "ka-t-k0-legacy",
        KEYBOARD_GERMAN: "de-t-k0-und",
        KEYBOARD_GREEK: "el-t-k0-und",
        KEYBOARD_GUJARATI_INSCRIPT: "gu-t-k0-und",
        KEYBOARD_GUJARATI_PHONETIC: "gu-t-und-latn-k0-qwerty",
        KEYBOARD_GURMUKHI_INSCRIPT: "pa-guru-t-k0-und",
        KEYBOARD_GURMUKHI_PHONETIC: "pa-guru-t-und-latn-k0-und",
        KEYBOARD_HEBREW: "he-t-k0-und",
        KEYBOARD_HINDI: "hi-t-k0-und",
        KEYBOARD_HUNGARIAN_101: "hu-t-k0-101key",
        KEYBOARD_ICELANDIC: "is-t-k0-und",
        KEYBOARD_ITALIAN: "it-t-k0-und",
        KEYBOARD_KANNADA_INSCRIPT: "kn-t-k0-und",
        KEYBOARD_KANNADA_PHONETIC: "kn-t-und-latn-k0-und",
        KEYBOARD_KAZAKH: "kk-t-k0-und",
        KEYBOARD_KHMER: "km-t-k0-und",
        KEYBOARD_KOREAN: "ko-t-k0-und",
        KEYBOARD_KYRGYZ: "ky-cyrl-t-k0-und",
        KEYBOARD_LAO: "lo-t-k0-und",
        KEYBOARD_LATVIAN: "lv-t-k0-und",
        KEYBOARD_LITHUANIAN: "lt-t-k0-und",
        KEYBOARD_MACEDONIAN: "mk-t-k0-und",
        KEYBOARD_MALAYALAM_INSCRIPT: "ml-t-k0-und",
        KEYBOARD_MALAYALAM_PHONETIC: "ml-t-und-latn-k0-und",
        KEYBOARD_MALTESE: "mt-t-k0-und",
        KEYBOARD_MAORI: "mi-t-k0-und",
        KEYBOARD_MONGOLIAN_CYRILLIC: "mn-cyrl-t-k0-und",
        KEYBOARD_MONTENEGRIN: "srp-t-k0-und",
        KEYBOARD_NORWEGIAN: "no-t-k0-und",
        KEYBOARD_ORIYA_INSCRIPT: "or-t-k0-und",
        KEYBOARD_ORIYA_PHONETIC: "or-t-und-latn-k0-und",
        KEYBOARD_PAN_AFRICA_LATIN: "latn-002-t-k0-und",
        KEYBOARD_PASHTO: "ps-t-k0-und",
        KEYBOARD_PERSIAN: "fa-t-k0-und",
        KEYBOARD_POLISH: "pl-t-k0-und",
        KEYBOARD_PORTUGUESE: "pt-pt-t-k0-und",
        KEYBOARD_ROMANI: "rom-t-k0-und",
        KEYBOARD_ROMANIAN: "ro-t-k0-und",
        KEYBOARD_ROMANIAN_SR13392_PRIMARY: "ro-t-k0-legacy",
        KEYBOARD_ROMANIAN_SR13392_SECONDARY: "ro-t-k0-extended",
        KEYBOARD_RUSSIAN: "ru-t-k0-und",
        KEYBOARD_SANSKRIT_PHONETIC: "sa-t-und-latn-k0-und",
        KEYBOARD_SERBIAN_CYRILLIC: "sr-cyrl-t-k0-und",
        KEYBOARD_SERBIAN_LATIN: "sr-latn-t-k0-und",
        KEYBOARD_SINHALA: "si-t-k0-und",
        KEYBOARD_SLOVAK: "sk-t-k0-und",
        KEYBOARD_SLOVAK_QWERTY: "sk-t-k0-qwerty",
        KEYBOARD_SLOVENIAN: "sl-t-k0-und",
        KEYBOARD_SOUTHERN_UZBEK: "uzs-t-k0-und",
        KEYBOARD_SPANISH: "es-t-k0-und",
        KEYBOARD_SWEDISH: "sv-t-k0-und",
        KEYBOARD_SWISS_GERMAN: "de-ch-t-k0-und",
        KEYBOARD_TAMIL_99: "ta-t-k0-ta99",
        KEYBOARD_TAMIL_INSCRIPT: "ta-t-k0-und",
        KEYBOARD_TAMIL_PHONETIC: "ta-t-und-latn-k0-und",
        KEYBOARD_TATAR: "tt-t-k0-und",
        KEYBOARD_TELUGU_INSCRIPT: "te-t-k0-und",
        KEYBOARD_TELUGU_PHONETIC: "te-t-und-latn-k0-und",
        KEYBOARD_THAI: "th-t-k0-und",
        KEYBOARD_TURKISH_F: "tr-t-k0-legacy",
        KEYBOARD_TURKISH_Q: "tr-t-k0-und",
        KEYBOARD_UIGHUR: "ug-t-k0-und",
        KEYBOARD_UKRAINIAN_101: "uk-t-k0-101key",
        KEYBOARD_URDU: "ur-t-k0-und",
        KEYBOARD_UZBEK_CYRILLIC_PHONETIC: "uz-cyrl-t-k0-und",
        KEYBOARD_UZBEK_CYRILLIC_TYPEWRITTER: "uz-cyrl-t-k0-legacy",
        KEYBOARD_UZBEK_LATIN: "uz-latn-t-k0-und",
        KEYBOARD_VIETNAMESE_TCVN: "vi-t-k0-und",
        KEYBOARD_VIETNAMESE_TELEX: "vi-t-k0-legacy",
        KEYBOARD_VIETNAMESE_VIQR: "vi-t-k0-viqr",
        KEYBOARD_YIDDISH: "yi-t-k0-und",
        HANDWRIT_AFRIKAANS: "af-t-i0-handwrit",
        HANDWRIT_BELARUSIAN: "be-t-i0-handwrit",
        HANDWRIT_BULGARIAN: "bg-t-i0-handwrit",
        HANDWRIT_CATALAN: "ca-t-i0-handwrit",
        HANDWRIT_CZECH: "cs-t-i0-handwrit",
        HANDWRIT_WELSH: "cy-t-i0-handwrit",
        HANDWRIT_DANISH: "da-t-i0-handwrit",
        HANDWRIT_GERMAN: "de-t-i0-handwrit",
        HANDWRIT_ENGLISH: "en-t-i0-handwrit",
        HANDWRIT_SPANISH: "es-t-i0-handwrit",
        HANDWRIT_ESTONIAN: "et-t-i0-handwrit",
        HANDWRIT_BASQUE: "eu-t-i0-handwrit",
        HANDWRIT_FINNISH: "fi-t-i0-handwrit",
        HANDWRIT_FILIPINO: "fil-t-i0-handwrit",
        HANDWRIT_FRENCH: "fr-t-i0-handwrit",
        HANDWRIT_IRISH: "ga-t-i0-handwrit",
        HANDWRIT_GALICIAN: "gl-t-i0-handwrit",
        HANDWRIT_CROATIAN: "hr-t-i0-handwrit",
        HANDWRIT_HAITIAN: "ht-t-i0-handwrit",
        HANDWRIT_HUNGARIAN: "hu-t-i0-handwrit",
        HANDWRIT_INDONESIAN: "id-t-i0-handwrit",
        HANDWRIT_ICELANDIC: "is-t-i0-handwrit",
        HANDWRIT_ITALIAN: "it-t-i0-handwrit",
        HANDWRIT_JAPANESE: "ja-t-i0-handwrit",
        HANDWRIT_LATIN: "la-t-i0-handwrit",
        HANDWRIT_LITHUANIAN: "lt-t-i0-handwrit",
        HANDWRIT_LATVIAN: "lv-t-i0-handwrit",
        HANDWRIT_MACEDONIAN: "mk-t-i0-handwrit",
        HANDWRIT_MALAY: "ms-t-i0-handwrit",
        HANDWRIT_NORWEGIAN_BOKMAL: "nb-t-i0-handwrit",
        HANDWRIT_DUTCH: "nl-t-i0-handwrit",
        HANDWRIT_NORWEGIAN_NYNORSK: "nn-t-i0-handwrit",
        HANDWRIT_NORWEGIAN: "no-t-i0-handwrit",
        HANDWRIT_POLISH: "pl-t-i0-handwrit",
        HANDWRIT_PORTUGUESE_BRAZIL: "pt-br-t-i0-handwrit",
        HANDWRIT_PORTUGUESE_PORTUGAL: "pt-pt-t-i0-handwrit",
        HANDWRIT_ROMANIAN: "ro-t-i0-handwrit",
        HANDWRIT_RUSSIAN: "ru-t-i0-handwrit",
        HANDWRIT_SLOVAK: "sk-t-i0-handwrit",
        HANDWRIT_SLOVENIAN: "sl-t-i0-handwrit",
        HANDWRIT_ALBANIAN: "sq-t-i0-handwrit",
        HANDWRIT_SERBIAN: "sr-t-i0-handwrit",
        HANDWRIT_SWEDISH: "sv-t-i0-handwrit",
        HANDWRIT_SWAHILI: "sw-t-i0-handwrit",
        HANDWRIT_TAGALOG: "tl-t-i0-handwrit",
        HANDWRIT_TURKISH: "tr-t-i0-handwrit",
        HANDWRIT_UKRAINIAN: "uk-t-i0-handwrit",
        HANDWRIT_CHINESE: "zh-t-i0-handwrit",
        HANDWRIT_CHINESE_SIMPLIFIED: "zh-hans-t-i0-handwrit",
        HANDWRIT_CHINESE_TRADITIONAL: "zh-hant-t-i0-handwrit"
    }
      , si = function(a) {
        this.code = a;
        this.type = j;
        this.sourceLanguageCode = this.languageCode = "en";
        this.parseInputToolCode_();
        this.codeInBCP = a
    }
      , ti = "ar-t-k0-und prs-t-k0-und he-t-k0-und ps-t-k0-und fa-t-k0-und uzs-t-k0-und ug-t-k0-und ur-t-k0-und yi-t-k0-und".split(" ")
      , ui = {}
      , wi = function(a) {
        if (!a)
            return j;
        fb(ri, a) || (a = vi(a));
        a = a.replace(/_/g, "-");
        fb(ri, a) || (a = vi(a + "-und"));
        return ui[a] ? ui[a] : fb(ri, a) ? (ui[a] = new si(a),
        ui[a]) : j
    }
      , xi = "bn gu pa kn ml or sa ta te".split(" ")
      , yi = {
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
        vkd_tr_f: "tr-t-k0-legacy",
        vkd_tr_q: "tr-t-k0-und",
        vkd_uk_101: "uk-t-k0-101key",
        vkd_uz_cyrl_phone: "uz-cyrl-t-k0-und",
        vkd_uz_cyrl_type: "uz-cyrl-t-k0-legacy",
        vkd_vi_tcvn: "vi-t-k0-und",
        vkd_vi_telex: "vi-t-k0-legacy",
        vkd_vi_viqr: "vi-t-k0-viqr"
    }
      , zi = hb(yi)
      , vi = function(a) {
        if (yi[a])
            return yi[a];
        if ("vkd_iw" == a)
            return "he-t-k0-und";
        if ("im_t13n_iw" == a)
            return "he-t-i0-und";
        if ("tr-t-k0-lagacy" == a)
            return "tr-t-k0-legacy";
        var b = a.split("_")
          , b = 0 == a.lastIndexOf("im_t13n", 0) ? b[2] + "-t-i0-und" : 2 == b.length ? b[1] + "-t-k0-und" : J(xi, b[1]) ? "inscript" == b[2] ? b[1] + "-t-k0-und" : b[1] + "-t-und-latn-k0-und" : b[1] + "-" + b[2] + "-t-k0-und";
        return fb(ri, b) ? b : a
    };
    n = si.prototype;
    n.parseLayoutCode_ = function() {
        if (zi[this.code])
            this.layoutCode = zi[this.code].slice(4);
        else {
            var a = this.code.split("-t-")
              , b = a[0]
              , a = a[1]
              , b = b.replace(/-/g, "_");
            J(xi, b) && ("und-latn-k0-und" == a || "k0-und" == a) ? this.layoutCode = b + ("k0-und" == a ? "_inscript" : "_phone") : "k0-und" == a && (this.layoutCode = b)
        }
    }
    ;
    n.parseInputToolCode_ = function() {
        0 <= this.code.indexOf("-i0") ? (this.type = "im",
        Ba(this.code, "-handwrit") && (this.type = "hw")) : 0 <= this.code.indexOf("-k0") && (this.type = "vkd");
        var a = this.code.split(/-t|-i0|-k0/);
        this.languageCode = "zh" == a[0] ? "zh-hans" : a[0];
        a[1] && (this.sourceLanguageCode = a[1]);
        "vkd" == this.type && this.parseLayoutCode_()
    }
    ;
    n.toString = function() {
        return this.code
    }
    ;
    n.getLanguagePair = function() {
        return "im" == this.type ? "ja" == this.languageCode ? qi("ja-Hira", this.languageCode) : qi("en", this.languageCode) : j
    }
    ;
    n.getDirection = function() {
        return this.isRightToLeft() ? "rtl" : "ltr"
    }
    ;
    n.isRightToLeft = function() {
        if ("im" == this.type) {
            var a = ni[this.languageCode];
            return a ? a.isRightToLeft() : k
        }
        return J(ti, this.code)
    }
    ;
    var Ai = function(a, b) {
        this.url = a;
        this.payload = b
    };
    var Bi = function(a, b, c) {
        this.text = w(a) ? a : [a];
        this.isReverse = !!b;
        this.priority = c == h ? 0 : c;
        this.status = "i"
    };
    Bi.prototype.getText = function() {
        return this.text[0]
    }
    ;
    Bi.prototype.isComplete = function() {
        return "s" == this.status || "f" == this.status
    }
    ;
    var Ci = function(a, b) {
        a != j && this.append.apply(this, arguments)
    };
    n = Ci.prototype;
    n.buffer_ = "";
    n.set = function(a) {
        this.buffer_ = "" + a
    }
    ;
    n.append = function(a, b, c) {
        this.buffer_ += a;
        if (b != j)
            for (var e = 1; e < arguments.length; e++)
                this.buffer_ += arguments[e];
        return this
    }
    ;
    n.clear = function() {
        this.buffer_ = ""
    }
    ;
    n.getLength = function() {
        return this.buffer_.length
    }
    ;
    n.toString = function() {
        return this.buffer_
    }
    ;
    var Di = function(a, b, c, e) {
        Bi.call(this, a, c);
        this.queriedSugCount = this.requiredSugCount = 1;
        this.isBulk = !!e;
        this.requestToSegment = this.isMultiSegment = k;
        this.historyText_ = "";
        this.useCache_ = i;
        this.inputTool = j;
        this.inputTool = b instanceof si ? b : "zh" == b.targetLangCode || "zh-hans" == b.targetLangCode ? wi("zh-t-i0-pinyin") : "zh-hant" == b.targetLangCode ? wi("zh-hant-t-i0-und") : "ja" == b.targetLangCode ? wi("ja-t-ja-hira-i0-und") : wi(b.targetLangCode + "-t-i0-und")
    };
    F(Di, Bi);
    n = Di.prototype;
    n.isMultiSegmentQuery = function() {
        return this.isMultiSegment
    }
    ;
    n.useCache = function() {
        return this.useCache_
    }
    ;
    n.setUseCache = function(a) {
        this.useCache_ = a
    }
    ;
    n.setHistoryText = function(a) {
        this.historyText_ = a
    }
    ;
    n.getQueriedSugCount = function() {
        return this.queriedSugCount || 0
    }
    ;
    n.setQueriedSugCount = function(a) {
        this.queriedSugCount = 0 < a ? a : 0
    }
    ;
    n.getRequiredSugCount = function() {
        return this.requiredSugCount || 0
    }
    ;
    n.setRequiredSugCount = function(a) {
        this.requiredSugCount = 0 < a ? a : 0
    }
    ;
    n.getText = function() {
        return this.isMultiSegment ? this.requestToSegment ? this.text.join("") : this.text.join(",") + "," : Di.superClass_.getText.call(this)
    }
    ;
    n.hashKey = function() {
        return [this.inputTool.toString()]
    }
    ;
    n.merge = function(a) {
        return this.inputTool == a.inputTool && !this.isBulk && !a.isBulk && !this.isReverse && !a.isReverse && 5 > this.text.length + a.text.length && 0 == this.priority && 0 == a.priority ? (J(this.text, a.text) || Va(this.text, a.text),
        a.getRequiredSugCount() > this.getRequiredSugCount() && this.setRequiredSugCount(a.getRequiredSugCount()),
        i) : k
    }
    ;
    n.satisfies = function(a) {
        return Pa(a.text, function(b) {
            return J(this.text, b) && 0 == a.priority
        }, this) && this.requiredSugCount >= a.getRequiredSugCount()
    }
    ;
    n.getIMEName = function() {
        switch (this.inputTool.code) {
        case "zh-t-i0-pinyin":
            return "pinyin";
        case "zh-hant-t-i0-pinyin":
            return "pinyin_hant";
        case "zh-hant-t-i0-und":
            return "bopomofo";
        case "zh-t-i0-wubi-1986":
            return "wubi86";
        case "ja-hira-t-i0-und":
        case "ja-t-ja-hira-i0-und":
            return "transliteration_ja-Hira_ja"
        }
        return "transliteration_en_" + this.inputTool.languageCode
    }
    ;
    n.replaceSpecialChar = function(a) {
        for (var b = new Ci, c = 0; c < a.length; c++) {
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
    n.buildRequest = function(a, b) {
        var c = "";
        switch (this.inputTool.languageCode) {
        case "ja-Hira":
        case "ja":
            c = this.requestToSegment ? "||t:1" : ",||t:1"
        }
        var e = new Ci;
        this.historyText_ && (e.append("|"),
        e.append(this.replaceSpecialChar(this.historyText_)),
        e.append(","));
        I(this.text, function(a, b) {
            e.append(this.replaceSpecialChar(a));
            b != this.text.length - 1 && e.append(",")
        }, this);
        e.append(c);
        c = this.inputTool.code;
        "ja-hira-t-i0-und" == c && (c = "ja-t-ja-hira-i0-und");
        Ba(c, "-und") && (c = c.slice(0, c.length - 4));
        c = {
            text: e.toString(),
            ime: c,
            num: this.queriedSugCount,
            cp: "0",
            cs: "1",
            ie: "utf-8",
            oe: "utf-8",
            app: "jsapi"
        };
        a.securityToken && (c.sct = a.securityToken);
        jb(c, b);
        return new Ai("/inputtools/request",c)
    }
    ;
    n.getSingleTextQuery = function(a) {
        var b = "";
        0 <= a && a < this.text.length && (b = this.text[a]);
        a = new Di(b,this.inputTool,this.isReverse,this.isBulk);
        a.setQueriedSugCount(this.queriedSugCount);
        a.setRequiredSugCount(this.requiredSugCount);
        return a
    }
    ;
    var Ei = function(a) {
        this.http_ = a
    };
    Ei.prototype.getTransliterationUrl = function(a, b) {
        var c = new Di(a,b);
        c.setQueriedSugCount(15);
        c = c.buildRequest({}, {});
        c.payload.app = "youtubetv";
        return Oh("//www.youtube.com" + c.url, c.payload)
    }
    ;
    Ei.prototype.transliterate = function(a, b, c) {
        this.http_.jsonp(this.getTransliterationUrl(a, b), j, c, j, "cb")
    }
    ;
    Ei.$inject = ["ytHttp"];
    var Fi = function(a, b) {
        this.playlistService_ = a;
        this.relatedVideosService_ = b
    };
    Fi.prototype.load = function(a, b) {
        var c = new S;
        this.playlistService_.load({
            query: a.playlistId
        }, z(function(e) {
            c.watchables.push(e.watchables.getItems());
            this.relatedVideosService_.load({
                query: a.videoId
            }, z(function(a) {
                c.watchables.push(a.watchables.getItems());
                b && b(c)
            }, this))
        }, this))
    }
    ;
    Fi.$inject = ["playlistService", "relatedVideosService"];
    for (var Gi = "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" "), Hi = {
        "\u1104": "\u1104",
        "\u1108": "\u1108",
        "\u110d": "\u110d"
    }, Ii = 0; Ii < Gi.length; ++Ii)
        Hi[Gi[Ii]] = String.fromCharCode(4520 + Ii);
    var Ji = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
    }
      , Ki = /[\u11a8-\u11c3]/g
      , Li = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g")
      , Mi = /[\uac00-\ud7af]/g
      , Ni = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g
      , Oi = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])", "g")
      , Pi = RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))", "g")
      , Qi = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))", "g")
      , Ri = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))", "g")
      , Si = function(a) {
        a = a.charCodeAt(0) - 44032;
        var b = 4449 + a % 588 / 28
          , c = 4519 + a % 28;
        return String.fromCharCode(4352 + a / 588) + String.fromCharCode(b) + (4519 == c ? "" : String.fromCharCode(c))
    }
      , Ti = function(a) {
        var b = a.charCodeAt(0) - 4352
          , c = a.charCodeAt(1) - 4449;
        a = 3 <= a.length ? a.charCodeAt(2) - 4519 : 0;
        return String.fromCharCode(28 * (21 * b + c) + a + 44032)
    }
      , Ui = function(a, b, c, e) {
        return b + Hi[c] + e
    };
    var Vi = angular.module("localization", ["ng"]);
    Vi.config(["$provide", "$httpProvider", "$interpolateProvider", function(a, b, c) {
        a.service("locale", gd);
        a.value("applicationPath", "");
        a.decorator("$interpolate", ["$delegate", "locale", function(a, f) {
            b.defaults.transformResponse.push(function(a) {
                return angular.isString(a) ? f.localize(a) : a
            });
            var g = function(b, c) {
                var g = f.localize(b)
                  , r = a(g, g === b && c);
                if (r)
                    return function(a) {
                        a = r(a);
                        return f.localize(a)
                    }
            };
            g.startSymbol = c.startSymbol;
            g.endSymbol = c.endSymbol;
            return g
        }
        ])
    }
    ]);
    var pg = function(a, b, c) {
        var e, f = 1E3 / a;
        return function(a) {
            var l = new Date - (e || 0)
              , m = i;
            c && (m = c.apply(this, arguments));
            m && (!isNaN(l) && l <= f ? a.stopPropagation() : (b.apply(this, arguments),
            e = new Date))
        }
    };
    var Wi = function(a, b, c, e) {
        sd.call(this, a, b);
        this.locale_ = c;
        this.templateCache_ = e
    };
    F(Wi, sd);
    Wi.prototype.get = function(a, b, c, e) {
        var f = this.templateCache_.get(a);
        f && c ? c(this.locale_.localize(f)) : sd.prototype.get.call(this, a, b, c, e)
    }
    ;
    Wi.prototype.transformResponse = function(a) {
        a = sd.prototype.transformResponse.call(this, a);
        return this.locale_.localize(a)
    }
    ;
    Wi.$inject = ["xhrBackend", "jsonpBackend", "locale", "$templateCache", "$injector"];
    var Xi = function(a, b, c) {
        this.name = "tile";
        V.call(this, a, b, c);
        this.scope.$on("keyup", z(this.keyUpHandler_, this))
    };
    F(Xi, V);
    Xi.prototype.keyUpHandler_ = function(a, b) {
        13 === b && (a.stopPropagation(),
        this.data && this.scope.$emit(this.data.actionEventName, this.data))
    }
    ;
    Xi.$inject = ["$scope", "$element", "$attrs"];
    var Yi = function(a, b, c, e, f, g) {
        Xi.call(this, a, b, c);
        this.interpolate_ = f;
        this.templateClient_ = g;
        this.renderMap_ = {};
        this.rendererName = "actiontile";
        a = R.htmlPath;
        this.renderMap_[a + "/tiles/device_retention_tile.html"] = this.renderDeviceRetentionTile_;
        this.renderMap_[a + "/tiles/logout_tile.html"] = this.renderLogoutTile_;
        this.renderMap_[a + "/tiles/recent_search_tile.html"] = this.renderRecentSearchTile_;
        this.renderMap_[a + "/tiles/remote_pairing_tile.html"] = this.renderRemotePairingTile_;
        this.renderMap_[a + "/tiles/remote_reset_tile.html"] = this.renderRemoteResetTile_;
        this.renderMap_[a + "/tiles/search_tile.html"] = this.renderSearchTile_
    };
    F(Yi, Xi);
    n = Yi.prototype;
    n.setData = function(a) {
        Yi.superClass_.setData.call(this, a);
        this.render()
    }
    ;
    n.render = function() {
        this.showElementIf(this.element[0], this.data);
        this.data && (this.templateClient_.get(this.data.templateUrl, {}, z(this.applyTileContents_, this)),
        this.element.addClass(this.data.className))
    }
    ;
    n.applyTileContents_ = function(a) {
        this.setElementHtml(this.element[0], a);
        (a = this.renderMap_[this.data.templateUrl]) && a.call(this)
    }
    ;
    n.renderDeviceRetentionTile_ = function() {
        var a = this.getChildElements(".device-retention-permission")
          , b = this.data.actionData.privateDataService.shouldRetainTrackingData;
        this.showElementIf(a[0], b);
        this.showElementIf(a[1], !b)
    }
    ;
    n.renderLogoutTile_ = function() {
        this.setElementText(this.getChildElement(".title"), this.data.actionData.displayName);
        this.setElementText(this.getChildElement(".platform-user-name"), this.data.actionData.platformUserName);
        this.getChildElement(".platform-user-icon").style.backgroundImage = "url(" + this.data.actionData.platformUserIcon + ")";
        this.getChildElement(".sign-out-user-icon").style.backgroundImage = "url(" + this.data.actionData.imageUrl + ")"
    }
    ;
    n.renderRecentSearchTile_ = function() {
        var a = this.data.actionData.video;
        if (a) {
            this.setElementText(this.getChildElement(".title"), a.serviceQuery.toLowerCase());
            var b = this.data.actionData.totalResults;
            b && 0 < b && (b = this.interpolate_("[[{{tile.data.actionData.totalResults | formatNumber}} results|Displays how many different searches a user has performed.]]")({
                tile: this
            }),
            this.setElementText(this.getChildElement(".overlay"), b));
            this.getChildElement(".video-thumb").style.backgroundImage = "url(" + a.imageUrl + ")"
        }
    }
    ;
    n.renderRemotePairingTile_ = function() {
        this.showElementIf(this.getChildElement(".title"), 1 > this.data.actionData.devices);
        this.showElementIf(this.getChildElement(".long-title"), 1 <= this.data.actionData.devices)
    }
    ;
    n.renderRemoteResetTile_ = function() {
        this.setElementHtml(this.getChildElement(".remote-count"), this.data.actionData.devices)
    }
    ;
    n.renderSearchTile_ = function() {
        var a = this.interpolate_("[[{{tile.data.actionData.resultCount | formatNumber}} recent search(es)|Displays how many search a user has performed recently.|15991617]]")({
            tile: this
        });
        this.setElementText(this.getChildElement(".search-tile-subtitle"), a)
    }
    ;
    Yi.$inject = "$scope $element $attrs $compile $interpolate templateClient".split(" ");
    var Zi = function(a, b, c, e, f, g) {
        this.name = "advertisementCallout";
        U.call(this, a, b, c);
        this.interpolate_ = e;
        this.playerService_ = f;
        this.progressModel_ = g;
        this.timeLeftElement_ = this.getChildElement(".time-left");
        this.timeLeftNotice_ = "[[Your video will play in {{seconds}}s|Tooltip that says when the currently playing ad will finish, and when the main video will begin.]]";
        this.playerService_.on("isPlayingAd:changed", z(this.adStateChangedHandler_, this))
    };
    F(Zi, U);
    Zi.prototype.adStateChangedHandler_ = function(a) {
        this.showElementIf(this.element[0], a);
        a ? this.timeLeftDeRegistrationFn_ = this.progressModel_.on("timeLeft:changed", z(this.timeLeftChangedHandler_, this)) : (this.timeLeftDeRegistrationFn_(),
        this.timeLeftDeRegistrationFn_ = j)
    }
    ;
    Zi.prototype.timeLeftChangedHandler_ = function(a) {
        this.setElementText(this.timeLeftElement_, this.interpolate_(this.timeLeftNotice_)({
            seconds: a
        }))
    }
    ;
    Zi.$inject = "$scope $element $attrs $interpolate playerService progressModel".split(" ");
    var $i = function(a, b, c, e, f, g, l, m, s, r, A, u, D, x, pf, C, Q, $a, cj, dj, Tj, Uj, Vj, Wj) {
        this.name = "application";
        U.call(this, a, b, c);
        this.videoInfoService_ = x;
        this.videoPlaybackInfoService_ = pf;
        this.remoteService_ = D;
        this.locationService_ = s;
        this.rootScope = e;
        this.route_ = f;
        this.timeout_ = g;
        this.playerService_ = A;
        this.browseModel_ = Tj;
        this.searchModel_ = Uj;
        this.searchQueryModel_ = Vj;
        this.watchModel = Q;
        this.authService_ = l;
        this.environment_ = m;
        this.watchHistoryModel_ = C;
        this.environment = m;
        this.navigationService_ = r;
        this.playlistService_ = u;
        this.csiService_ = $a;
        this.privateDataService_ = cj;
        this.timeService_ = dj;
        this.progressModel_ = Wj;
        this.legendTemplatePath = R.htmlPath + "/legend.html";
        this.navigationMap_ = this.createNavigationMap_();
        this.searchRow_ = this.relatedVideosRow_ = j;
        this.relatedVideosRowIndex_ = 0;
        this.isHistoryAdded_ = k;
        this.searchQuery = this.backgroundClass_ = "";
        this.spinnerElement_ = this.getChildElement("#spinner-container");
        this.initialize_()
    };
    F($i, U);
    n = $i.prototype;
    n.initialize_ = function() {
        this.csiService_.startTimer("browse_data");
        this.initializeWatchers_();
        this.initializeListeners_();
        this.initializeExperimentStyles_();
        this.searchModel_.load();
        this.browseModel_.load(z(function() {
            this.setBrowseModel_()
        }, this));
        this.afterRouteChangeHandler_(j, j);
        var a = Yf("#loader")[0];
        a.parentNode.removeChild(a);
        this.setBackgroundClass_();
        this.updateApplicationStyles_()
    }
    ;
    n.initializeExperimentStyles_ = function() {
        this.experimentStyles_ = this.environment.experiments.map(function(a) {
            return "exp-" + a
        }).join(" ")
    }
    ;
    n.createNavigationMap_ = function() {
        return {
            browse: {
                search: {
                    down: this.focusBrowse_,
                    up: this.focusSearch_,
                    enter: this.focusBrowse_,
                    esc: this.hideMode_
                },
                none: {
                    esc: z(this.environment_.exitApplication, this.environment_)
                }
            },
            watch: {
                browse: {
                    esc: this.playNextVideoOrShowTransport_
                },
                search: {
                    down: this.focusBrowse_,
                    up: this.focusSearch_,
                    enter: this.focusBrowse_,
                    esc: this.playNextVideoOrGoBackInHistory_
                },
                title: {
                    down: this.showWatchBrowse_,
                    esc: this.goBackInHistory_,
                    enter: this.showWatchTransport_,
                    fastforward: this.showWatchTransport_,
                    rewind: this.showWatchTransport_
                },
                transport: {
                    up: this.hideMode_,
                    down: this.showWatchBrowse_,
                    esc: this.goBackInHistory_
                },
                none: {
                    up: this.showWatchTransport_,
                    down: this.showWatchBrowse_,
                    esc: this.emitNullVideoAndGoBackInHistory_,
                    enter: this.showWatchTransport_,
                    pause: this.showWatchTransport_,
                    fastforward: this.showWatchTransport_,
                    rewind: this.showWatchTransport_,
                    mousemove: this.showWatchTransport_
                }
            }
        }
    }
    ;
    n.initializeWatchers_ = function() {
        this.scope.$watch(z(function() {
            return this.playerService_.state
        }, this), z(function(a) {
            switch (a) {
            case 1:
                this.playerPlayingHandler_();
                break;
            case 0:
                this.attemptToPlayNextVideo_()
            }
        }, this))
    }
    ;
    n.initializeListeners_ = function() {
        this.scope.$on("active-item-changed", z(this.activeItemChangedHandler_, this));
        this.scope.$on("$routeChangeSuccess", z(this.afterRouteChangeHandler_, this));
        this.scope.$on("keydown", z(this.keyDownHandler_, this));
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.scope.$on("mousemove", z(this.mouseMoveHandler_, this));
        this.scope.$on("loaded", z(this.searchLoadedHandler_, this));
        this.scope.$on("row-changed", z(this.rowOrItemChangedHandler_, this));
        this.scope.$on("item-changed", z(this.rowOrItemChangedHandler_, this));
        this.scope.$on("toggle-loading", z(this.toggleLoadingIndicator_, this));
        this.scope.$on("row-loaded", z(this.rowLoadedHandler_, this));
        this.scope.$on("next-video", z(function() {
            this.playNextVideo_()
        }, this));
        this.scope.$on("previous-video", z(this.playPreviousVideo_, this));
        this.scope.$on("request-login", z(this.requestLoginHandler_, this));
        this.scope.$on("request-logout", z(this.requestLogoutHandler_, this));
        this.scope.$on("request-playback", z(this.requestPlaybackHandler_, this));
        this.scope.$on("request-view-credits", z(this.requestViewCreditsHandler_, this));
        this.scope.$on("request-view-kenko", z(this.requestViewKenkoHandler_, this));
        this.scope.$on("request-view-shiyojo", z(this.requestViewShiyojoHandler_, this));
        this.scope.$on("request-view-tos", z(this.requestViewTosHandler_, this));
        this.scope.$on("request-pairing", z(this.requestRemotePairingHandler_, this));
        this.scope.$on("request-remote-reset", z(this.requestRemoteResetHandler_, this));
        this.scope.$on("request-device-retention", z(this.requestDeviceRetentionHandler_, this));
        this.scope.$on("request-search", z(this.requestSearchHandler_, this));
        this.scope.$on("request-clear-searches", z(this.requestClearSearchesHandler_, this));
        this.scope.$on("request-flag-options", z(this.requestFlagHandler_, this));
        this.scope.$on("request-flag-video", z(this.requestFlagVideoHandler_, this));
        this.scope.$on("request-flag-claim", z(this.requestFlagClaimHandler_, this));
        this.scope.$on("request-age-gate-login", z(this.requestAgeGateLoginHandler_, this));
        this.scope.$on("request-player-error", z(this.requestPlayerErrorHandler_, this));
        this.scope.$on("request-cc-options", z(this.requestClosedCaptionsHandler_, this));
        this.scope.$on("request-dialog", z(this.requestDialogHandler_, this));
        this.scope.$on("request-confirm-dialog", z(this.requestConfirmDialogHandler_, this));
        this.scope.$on("request-close-dialog", z(this.requestCloseDialogHandler_, this));
        this.scope.$on("focus-search", z(this.focusSearch_, this));
        this.scope.$on(Zh, z(this.pairingUpdateHandler_, this));
        this.rootScope.$on("network_failure", z(this.requestNetworkErrorDialog_, this));
        this.authService_.addLoginListener(z(this.loginStateChangeHandler_, this))
    }
    ;
    n.getBrowseModel = function() {
        return this.isSearchActive() ? this.searchModel_ : this.isWatchActive() ? this.watchModel : this.browseModel_
    }
    ;
    n.toggleLoadingIndicator_ = function(a, b) {
        this.timeout_.cancel(this.timeoutToggleLoadingIndicator_);
        var c = z(function(a) {
            this.showElementIf(this.spinnerElement_, a)
        }, this);
        b ? this.timeoutToggleLoadingIndicator_ = this.timeout_(function() {
            c(i)
        }, 40, k) : c(k)
    }
    ;
    n.playerPlayingHandler_ = function() {
        this.inBrowseState() ? this.stopPlayback_() : this.timeout_(z(function() {
            var a = this.progressModel_.duration;
            0 < a && (a = Math.min(a / 4, 10),
            this.playerService_.addMarker("add-to-history", a, z(this.addToHistoryHandler_, this)))
        }, this), 500, k)
    }
    ;
    n.addToHistoryHandler_ = function() {
        this.watchModel.updateHistory();
        !this.isHistoryAdded_ && 0 < this.watchHistoryModel_.getLength() && (this.browseModel_.addRow(this.watchModel.getHistoryRow()),
        this.isHistoryAdded_ = i)
    }
    ;
    n.searchLoadedHandler_ = function(a, b) {
        var c = this.searchModel_.getRows()[0];
        c.model = b ? b.clone() : new S;
        c.model.feedIconUrl = "icon-search";
        c.setActiveIndex(0);
        this.isSearchActive() && this.scope.$emit("active-item-changed", this.searchModel_.getRows()[0].getCurrentItem());
        this.timeService_.setTimeout(z(this.safeDigest, this), 0)
    }
    ;
    n.rowLoadedHandler_ = function(a, b) {
        (this.isBrowseActive() || this.isSearchActive()) && this.scope.$emit("active-item-changed", b.getCurrentItem())
    }
    ;
    n.activeItemChangedHandler_ = function(a, b) {
        this.environment_.isWiiU && (b && b instanceof Zd && !b.description) && this.videoInfoService_.loadWithQuery(b.videoId, z(function() {
            this.safeDigest()
        }, this), j, j, b)
    }
    ;
    n.rowOrItemChangedHandler_ = function(a, b, c) {
        if (this.isBrowseActive() || this.isSearchActive())
            (a = this.getBrowseModel().getRows()[b].getItemAt(c)) && this.scope.$emit("active-item-changed", a)
    }
    ;
    n.handleNavigation_ = function(a) {
        var b = this.navigationMap_[this.currentState][this.currentMode || "none"][a];
        b && (b.call(this, a),
        this.safeDigest())
    }
    ;
    n.focusSearch_ = function() {
        this.activeChildName = "search";
        this.updateApplicationStyles_();
        this.activateChild_(this.children.search)
    }
    ;
    n.focusBrowse_ = function() {
        this.activeChildName = "browse";
        this.updateApplicationStyles_()
    }
    ;
    n.focusWatch_ = function() {
        this.activeChildName = "watch";
        this.updateApplicationStyles_()
    }
    ;
    n.emitNullVideoAndGoBackInHistory_ = function() {
        this.scope.$emit(Uh, j);
        this.goBackInHistory_()
    }
    ;
    n.goBackInHistory_ = function() {
        var a = this.navigationService_.popHistory();
        a && a.url ? this.locationService_.url(a.url) : this.showBrowse_()
    }
    ;
    n.showSearch_ = function() {
        this.locationService_.mode("search")
    }
    ;
    n.showBrowse_ = function(a) {
        this.locationService_.state("browse", {});
        this.locationService_.mode(a)
    }
    ;
    n.showWatchBrowse_ = function() {
        this.locationService_.mode("browse")
    }
    ;
    n.showWatchTransport_ = function(a) {
        if ("mousemove" !== a || this.locationService_.modeEquals("transport"))
            this.timeout_.cancel(this.showTransportTimeout_),
            this.showTransportTimeout_ = this.timeout_(z(function() {
                this.isWatchActive() && this.locationService_.mode("transport")
            }, this), 250, k)
    }
    ;
    n.showWatchTitle_ = function() {
        this.timeout_.cancel(this.showTitleTimeout_);
        this.showTitleTimeout_ = this.timeout_(z(function() {
            this.isWatchActive() && this.locationService_.mode("title")
        }, this), 250, k)
    }
    ;
    n.playNextVideoOrGoBackInHistory_ = function() {
        0 === this.playerService_.state ? this.playNextVideo_() : this.goBackInHistory_()
    }
    ;
    n.playNextVideoOrShowTransport_ = function() {
        0 === this.playerService_.state ? this.playNextVideo_() : this.showWatchTransport_()
    }
    ;
    n.attemptToPlayNextVideo_ = function() {
        "watch" == this.currentState && (!this.isBrowseActive() && !this.isSearchActive()) && this.playNextVideo_(i)
    }
    ;
    n.playPreviousVideo_ = function() {
        var a = this.watchModel.previous();
        a && (this.setWatchState_(a),
        this.showWatchTitle_())
    }
    ;
    n.playNextVideo_ = function(a) {
        (a = this.watchModel.next(a)) ? (this.setWatchState_(a),
        this.showWatchTitle_()) : (this.environment_.isChromelessContext && this.environment_.exitApplication(),
        this.showWatchTransport_())
    }
    ;
    n.hideMode_ = function() {
        this.locationService_.mode(j)
    }
    ;
    n.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 40:
            this.handleNavigation_("down");
            break;
        case 38:
            this.handleNavigation_("up");
            break;
        case 37:
            this.handleNavigation_("left");
            break;
        case 39:
            this.handleNavigation_("right");
            break;
        case 19:
            this.handleNavigation_("pause");
            break;
        case 228:
            this.handleNavigation_("fastforward");
            break;
        case 227:
            this.handleNavigation_("rewind");
            break;
        case 8:
        case 27:
            this.isRootActive() || (a.stopPropagation(),
            a.preventDefault())
        }
    }
    ;
    n.keyUpHandler_ = function(a, b, c) {
        switch (b) {
        case 170:
        case 83:
            this.isSearchActive() ? this.goBackInHistory_() : this.showSearch_();
            break;
        case 172:
        case 71:
            this.showBrowse_();
            break;
        case 8:
        case 27:
            this.isRootActive() || (a.stopPropagation(),
            a.preventDefault());
            this.handleNavigation_("esc");
            break;
        case 13:
            a.stopPropagation();
            this.isHandledAsLegendClick_(c) || this.handleNavigation_("enter");
            break;
        case 178:
            this.isWatchActive() && this.showBrowse_()
        }
        this.playerService_.updatePlayerForActivity()
    }
    ;
    n.isHandledAsLegendClick_ = function(a) {
        return !(!a || !Zc(a, z(function(a) {
            a = (a.className || "").split(" ");
            return J(a, "more") ? (this.handleNavigation_("down"),
            i) : J(a, "back") || J(a, "reversed-back") ? (this.handleNavigation_("esc"),
            i) : J(a, "search") ? (this.showSearch_(),
            i) : J(a, "home") ? (this.showBrowse_(),
            i) : J(a, "delete") ? (this.searchQueryModel_.backspace(),
            i) : k
        }, this)))
    }
    ;
    n.mouseMoveHandler_ = function() {
        this.handleNavigation_("mousemove")
    }
    ;
    n.updateSettingsRow_ = function() {
        this.browseModel_.loadSettings()
    }
    ;
    n.setWatchState_ = function(a) {
        this.requestCloseDialogHandler_();
        this.locationService_.state("watch", {
            v: a
        })
    }
    ;
    n.afterRouteChangeHandler_ = function(a, b) {
        if (this.route_.current && (b = b || this.route_.current) && b.$route && b.$route.state) {
            var c = this.currentMode
              , e = this.currentState;
            this.currentMode = b.params.mode;
            this.currentState = b.$route.state;
            b.scope = this.children[this.currentState].scope;
            this.checkInitParams_();
            var f = i;
            this.isSearchActive() ? this.focusSearch_() : this.isBrowseActive() ? this.focusBrowse_() : this.isDialogActive() ? this.activeChildName = "dialog" : (this.focusWatch_(),
            f = k);
            if (this.inBrowseState())
                this.stopPlayback_(),
                this.isSearchActive() || (this.searchQuery = "",
                this.watchModel.resetActiveIndices());
            else if ("watch" === this.currentState)
                if ("browse" !== this.currentMode && !("watch" === e && "browse" !== c))
                    this.watchModel.currentVideo && this.scope.$emit("active-item-changed", this.watchModel.currentVideo);
                else if ("browse" === this.currentMode) {
                    var g = this.watchModel.getCurrentItem();
                    g && this.scope.$emit("active-item-changed", g)
                }
            this.shouldSetBrowseModel_(e, c) && this.setBrowseModel_();
            this.updateApplicationStyles_();
            this.showElementIf(this.getChildElement("#browse"), f)
        }
    }
    ;
    n.shouldSetBrowseModel_ = function(a, b) {
        return a !== this.currentState || this.transitionIncludesSearch_(b)
    }
    ;
    n.transitionIncludesSearch_ = function(a) {
        return this.isSearchActive() || "search" === a
    }
    ;
    n.checkInitParams_ = function() {
        var a = this.route_.current.params
          , b = a.v
          , c = a.q
          , e = a.p
          , f = parseInt(a.t, 10);
        b && this.isWatchActive() ? this.watchModel.currentVideo || this.videoPlaybackInfoService_.loadWithQuery(b, z(function(a) {
            if (a && a.watchables) {
                var b = a.watchables.getItemAt(0)
                  , c = Rd(this.videoPlaybackInfoService_, b.title, b.channel.imageUrl);
                a.title = b.title;
                c.model = a;
                c.model.feedIconUrl = b.channel.imageUrl;
                this.requestPlaybackHandler_(j, b, c, f || 0)
            } else
                this.scope.$emit("request-dialog", "[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]")
        }, this)) : e && this.isWatchActive() ? this.watchModel.currentVideo || this.playlistService_.loadWithQuery(e, z(function(a) {
            var b = Rd(this.playlistService_, a.title, a.serviceQuery);
            b.model = a;
            this.requestPlaybackHandler_(j, b.getItemAt(0), b, f || 0)
        }, this)) : c && this.isSearchActive() && (this.searchQuery = c.toUpperCase(),
        this.showSearch_())
    }
    ;
    n.stopPlayback_ = function() {
        this.playerService_.stop();
        this.watchModel.clearCurrentVideo()
    }
    ;
    n.updateApplicationStyles_ = function() {
        var a = [this.experimentStyles_, (this.currentState || "no") + "-state", (this.currentMode || "no") + "-mode", this.activeChildName + "-active"];
        this.inBrowseState() && a.push(this.backgroundClass_);
        this.element[0].className = a.join(" ")
    }
    ;
    n.setBackgroundClass_ = function() {
        this.backgroundClass_ = "bg bg-" + Math.floor(9 * Math.random() + 1)
    }
    ;
    n.isRootActive = function() {
        return this.isBrowseActive() && !this.isSearchActive() && !this.isDialogActive() && !this.isWatchActive()
    }
    ;
    n.isBrowseActive = function() {
        return "browse" === this.currentMode || "browse" === this.currentState
    }
    ;
    n.isSearchActive = function() {
        return "search" === this.currentMode
    }
    ;
    n.isWatchActive = function() {
        return "watch" === this.currentState
    }
    ;
    n.isDialogActive = function() {
        return "dialog" === this.activeChildName
    }
    ;
    n.inBrowseState = function() {
        return "browse" === this.currentState
    }
    ;
    n.toggleDialog_ = function(a, b) {
        this.activeChildName = a ? "dialog" : this.currentState;
        this.dialogModel = b ? b : j;
        this.updateApplicationStyles_();
        this.safeDigest();
        this.showElementIf(this.getChildElement("#legend"), !a)
    }
    ;
    n.toggleScrollableDialog_ = function(a, b) {
        var c = new Id(a,b);
        this.toggleDialog_(i, c)
    }
    ;
    n.toggleSimpleDialog_ = function(a, b) {
        var c = new Kd(a,b);
        this.toggleDialog_(i, c)
    }
    ;
    n.getCurrentDialogType = function() {
        return this.isDialogActive() ? this.dialogModel : j
    }
    ;
    n.requestLoginHandler_ = function() {
        this.toggleDialog_(i, new zd(z(this.onLoginCompleteHandler_, this)))
    }
    ;
    n.requestAgeGateLoginHandler_ = function(a, b) {
        this.toggleDialog_(i, new zd(z(this.onAgeGateLoginCompleteHandler_, this),b,z(this.onAgeGateLoginCancelHandler_, this)))
    }
    ;
    n.onAgeGateLoginCompleteHandler_ = function() {
        this.onLoginCompleteHandler_();
        this.playerService_.clearMarkers();
        this.playerService_.loadVideo()
    }
    ;
    n.onAgeGateLoginCancelHandler_ = function() {
        this.toggleDialog_(k);
        this.goBackInHistory_()
    }
    ;
    n.onLoginCompleteHandler_ = function() {
        this.toggleDialog_(k);
        this.remoteService_.sendUpdateUsername("default");
        this.browseModel_.load(z(function(a) {
            this.remoteService_.setOauthToken(a);
            this.browseModel_.currentRowIndex = this.browseModel_.getLength() - 1;
            this.setBrowseModel_()
        }, this))
    }
    ;
    n.requestLogoutHandler_ = function(a, b) {
        var c = b.actionData;
        this.environment.providePlatformData(c);
        this.toggleDialog_(i, new Cd(c,z(this.onLogoutCompleteHandler_, this)))
    }
    ;
    n.onLogoutCompleteHandler_ = function() {
        this.toggleDialog_(k);
        this.authService_.deauthorize();
        this.remoteService_.setOauthToken("");
        this.remoteService_.sendUpdateUsername("");
        this.browseModel_.load(z(function() {
            this.browseModel_.currentRowIndex = this.browseModel_.getLength() - 1;
            this.setBrowseModel_()
        }, this))
    }
    ;
    n.requestPlaybackHandler_ = function(a, b, c, e) {
        this.toggleDialog_(k);
        this.browseModel_.attemptStoreSearchQuery(c);
        a = this.watchModel.setCurrentVideo(b, c, e);
        this.scope.$emit(Vh, a);
        this.setWatchState_(b.videoId);
        this.showWatchTransport_()
    }
    ;
    n.setBrowseModel_ = function() {
        this.isSearchActive() ? this.children.browse.setData(this.searchModel_) : this.isWatchActive() ? this.children.browse.setData(this.watchModel) : this.children.browse.setData(this.browseModel_)
    }
    ;
    n.requestRemotePairingHandler_ = function() {
        this.toggleDialog_(i, new Ed)
    }
    ;
    n.requestRemoteResetHandler_ = function() {
        this.toggleDialog_(i, new Hd(this.remoteService_,z(this.onRemoteResetCompleteHandler_, this)))
    }
    ;
    n.onRemoteResetCompleteHandler_ = function() {
        this.remoteService_.resetScreen();
        this.toggleDialog_(k);
        this.updateSettingsRow_()
    }
    ;
    n.requestDeviceRetentionHandler_ = function() {
        this.toggleDialog_(i, new vd(this.privateDataService_,z(this.onDeviceRetentionCompleteHandler_, this)))
    }
    ;
    n.requestSearchHandler_ = function(a, b) {
        this.searchQuery = b && b.actionData ? b.actionData.query : j;
        this.showSearch_()
    }
    ;
    n.requestClearSearchesHandler_ = function() {
        this.browseModel_.clearSearches()
    }
    ;
    n.onDeviceRetentionCompleteHandler_ = function() {
        this.privateDataService_.setDeviceRetentionPermission(!this.privateDataService_.shouldRetainTrackingData);
        this.privateDataService_.clearPrivateData();
        this.toggleDialog_(k);
        this.updateSettingsRow_()
    }
    ;
    n.requestFlagHandler_ = function(a) {
        this.toggleDialog_(i, new xd);
        a && a.stopPropagation()
    }
    ;
    n.requestClosedCaptionsHandler_ = function(a) {
        this.toggleDialog_(i, new rd);
        a && a.stopPropagation()
    }
    ;
    n.requestFlagVideoHandler_ = function(a) {
        this.toggleDialog_(i, new yd(this.watchModel.currentVideo,z(this.requestFlagHandler_, this)));
        a.stopPropagation()
    }
    ;
    n.requestFlagClaimHandler_ = function(a) {
        this.toggleDialog_(i, new wd(this.watchModel.currentVideo,z(this.requestFlagHandler_, this)));
        a.stopPropagation()
    }
    ;
    n.pairingUpdateHandler_ = function() {
        this.updateSettingsRow_()
    }
    ;
    n.requestDialogHandler_ = function(a, b) {
        var c = new P;
        c.title = b;
        this.toggleDialog_(i, c);
        a.stopPropagation()
    }
    ;
    n.requestPlayerErrorHandler_ = function(a, b) {
        this.isWatchActive() && this.toggleDialog_(i, new Dd(b,z(this.onPlayerErrorCompleteHandler_, this),z(this.goBackInHistory_, this)));
        a.stopPropagation()
    }
    ;
    n.onPlayerErrorCompleteHandler_ = function() {
        this.toggleDialog_(k);
        this.playNextVideo_()
    }
    ;
    n.requestViewCreditsHandler_ = function() {
        this.toggleScrollableDialog_("[[Credits|Dialog title that shows credit information, giving credit to all open-source software used in building this product.]]", R.htmlPath + "/dialogs/" + (this.environment_.isPs3 ? "licenses.html" : "bamboo_licenses.html"))
    }
    ;
    n.requestViewKenkoHandler_ = function() {
        this.toggleScrollableDialog_("\u5065\u5eb7\u306e\u305f\u3081\u306e\u3054\u6ce8\u610f", R.htmlPath + "/dialogs/kenko_warning.html")
    }
    ;
    n.requestViewShiyojoHandler_ = function() {
        this.toggleScrollableDialog_("\u4f7f\u7528\u4e0a\u306e\u3054\u6ce8\u610f", R.htmlPath + "/dialogs/shiyojo_warning.html")
    }
    ;
    n.requestViewTosHandler_ = function() {
        this.toggleSimpleDialog_("[[Terms of Service and Privacy Policy|Dialog title that shows links to terms of use and privacy documents on youtube.com.]]", R.htmlPath + "/dialogs/tos_info.html")
    }
    ;
    n.loginStateChangeHandler_ = function(a, b) {
        !a && b && this.toggleDialog_(i, new Jd(z(this.requestLoginHandler_, this)))
    }
    ;
    n.requestCloseDialogHandler_ = function() {
        this.toggleDialog_(k)
    }
    ;
    n.requestConfirmDialogHandler_ = function() {}
    ;
    n.requestNetworkErrorDialog_ = function() {
        this.stopPlayback_();
        this.toggleSimpleDialog_("[[A network error has occurred|Dialog title that tells the user that a network error has occurred]]", R.htmlPath + "/dialogs/network_error_info.html")
    }
    ;
    $i.$inject = "$scope $element $attrs $rootScope $route $timeout authService environmentModel locationService navigationService playerService playlistService remoteService videoInfoService videoPlaybackInfoService watchHistoryModel watchModel csiService privateDataService timeService browseModel searchModel searchQueryModel progressModel".split(" ");
    var aj = function(a, b, c) {
        if (c.ytBackgroundImage) {
            var e = new Image;
            a.$watch(c.ytBackgroundImage, function(a) {
                b.css("background-image", "");
                a && (e.onload = function() {
                    e.src = "";
                    b.css("background-image", "url(" + a + ")")
                }
                ,
                e.src = a)
            })
        }
    };
    aj.$inject = ["$scope", "$element", "$attrs", "angularHelper"];
    var Y = function(a, b, c, e, f, g) {
        V.call(this, a, b, c);
        this.locationService_ = e;
        this.navigationService_ = f;
        this.messageModel_ = g
    };
    F(Y, V);
    n = Y.prototype;
    n.activate = function() {
        V.prototype.activate.call(this);
        var a = this.getNavigationToken();
        this.shouldBeAddedToNavHistory() && this.navigationService_.addHistory(a);
        this.shouldBeAddedToNavSequence() && this.addNavigationSequence(a)
    }
    ;
    n.deactivate = function() {
        V.prototype.deactivate.call(this);
        this.updateMessage()
    }
    ;
    n.shouldBeAddedToNavHistory = function() {
        return i
    }
    ;
    n.shouldBeAddedToNavSequence = function() {
        return i
    }
    ;
    n.addNavigationSequence = function(a) {
        a = a || this.getNavigationToken();
        this.navigationService_.addSequence(a)
    }
    ;
    n.getNavigationToken = function() {
        var a = this.locationService_.state() || ""
          , b = this.locationService_.mode() || "";
        return {
            state: a,
            mode: b,
            url: this.locationService_.url()
        }
    }
    ;
    n.updateMessage = function(a) {
        this.messageModel_.message = a || ""
    }
    ;
    var bj = function(a, b, c, e, f, g, l, m, s, r) {
        this.name = "browse";
        Y.call(this, a, b, c, e, f, g);
        this.timeout_ = l;
        this.scrollbarModel_ = m;
        this.environment_ = s;
        this.relatedVideosService_ = r;
        this.navArrowsEnabledClassName_ = "nav-arrows-enabled";
        this.currentRowIndex = 0;
        this.environment_.supportsPointer && this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.scope.$on("button-click", z(this.clickHandler_, this));
        this.scope.$on("mousemove", z(this.mouseMoveHandler_, this));
        this.scope.$on("request-playback", z(this.requestPlaybackHandler_, this));
        this.addKeyDownHandler_(100, this.verticalKeyDownHandler_);
        this.addKeyDownHandler_(8, this.horizontalKeyDownHandler_);
        this.element[0].addEventListener("scroll", z(function() {
            this.element[0].scrollTop = 0;
            this.element[0].scrollLeft = 0
        }, this))
    };
    F(bj, Y);
    n = bj.prototype;
    n.activate = function() {
        "browse" == this.locationService_.state() && !this.locationService_.mode() && this.navigationService_.clearHistory();
        Y.prototype.activate.call(this);
        this.activateChild_(this.getBrowseRow_());
        this.data && this.setData(this.data)
    }
    ;
    n.shouldBeAddedToNavHistory = function() {
        return "browse" == this.locationService_.state()
    }
    ;
    n.shouldBeAddedToNavSequence = function() {
        return "search" != this.locationService_.mode()
    }
    ;
    n.setData = function(a) {
        this.data = a;
        (a = this.getSuperScroller_()) && a.setData(this.data.getRows());
        this.updateCurrentRow_(this.data.currentRowIndex);
        (a = this.getBrowseRow_()) && a.setData(this.getCurrentRow_())
    }
    ;
    n.setCurrentRowIndex = function(a) {
        this.data && (this.data.currentRowIndex = a)
    }
    ;
    n.keyUpHandler_ = function(a, b, c) {
        switch (b) {
        case 38:
        case 40:
        case 37:
        case 39:
            a.stopPropagation();
            this.hideNavArrows_();
            break;
        case 13:
            this.processNavArrow_(c)
        }
    }
    ;
    n.clickHandler_ = function(a, b) {
        for (var c = 0, e = this.data.rows.length, f; c < e; c++)
            if (f = this.data.rows[c],
            f.equals(b)) {
                c -= this.data.currentRowIndex;
                0 != c && this.processVerticalKeyDownEvent_(c);
                break
            }
    }
    ;
    n.mouseMoveHandler_ = function() {
        this.showNavArrows_()
    }
    ;
    n.addKeyDownHandler_ = function(a, b) {
        this.scope.$on("keydown", pg(a, z(b, this)))
    }
    ;
    n.horizontalKeyDownHandler_ = function(a, b) {
        switch (b) {
        case 37:
            this.processHorizontalKeyDownEvent_(-1);
            break;
        case 39:
            this.processHorizontalKeyDownEvent_(1)
        }
    }
    ;
    n.processHorizontalKeyDownEvent_ = function(a) {
        var b = this.getCurrentRow_()
          , c = this.getCurrentItemIndex_()
          , e = c + a
          , f = b.getLength() - 1;
        0 <= e && e <= f && (this.setCurrentItemIndex_(c + a, a),
        b.shouldLoadPageByOffset(a) && this.loadRowsAfterDelay_())
    }
    ;
    n.verticalKeyDownHandler_ = function(a, b) {
        switch (b) {
        case 38:
            this.processVerticalKeyDownEvent_(-1);
            break;
        case 40:
            this.processVerticalKeyDownEvent_(1)
        }
    }
    ;
    n.processVerticalKeyDownEvent_ = function(a) {
        this.showScrollerElements_(i);
        this.updateCurrentRow_(this.data.currentRowIndex, a)
    }
    ;
    n.updateCurrentRow_ = function(a, b) {
        if (this.data) {
            b = b || 0;
            var c = this.data.getLength()
              , e = (a + b) % c || 0;
            0 > e && (e += c);
            this.getSuperScroller_().setActiveIndex(e);
            e != this.data.currentRowIndex && (this.getBrowseRow_().element.toggleClass("disabled", i),
            0 !== this.data.currentRowIndex && this.clearCurrentRow_(),
            this.data.currentRowIndex = e);
            this.updateScrollbar_();
            this.loadRowsAfterDelay_()
        }
    }
    ;
    n.updateScrollbar_ = function() {
        var a = 100 / this.data.length;
        this.scrollbarModel_.percentageDisplayed = a;
        this.scrollbarModel_.percentageScrolled = a * this.data.currentRowIndex
    }
    ;
    n.getRelativeRow = function(a) {
        a = this.data.currentRowIndex + a;
        var b = this.data.length;
        0 > a ? a += b : a >= b && (a %= b);
        return this.data.getRows()[a]
    }
    ;
    n.isActiveRow = function(a) {
        return this.isActive && this.getCurrentRow_() === a
    }
    ;
    n.getCurrentRow_ = function() {
        return this.data.getCurrentRow()
    }
    ;
    n.getCurrentItemIndex_ = function() {
        var a = this.getCurrentRow_();
        return a ? a.activeIndex : 0
    }
    ;
    n.isRowLoaded_ = function(a) {
        return !!this.data.getRows()[a].getLength()
    }
    ;
    n.showNavArrows_ = function() {
        vc(this.element[0], this.navArrowsEnabledClassName_);
        this.timeout_.cancel(this.navArrowDisplayTimeout_);
        this.navArrowDisplayTimeout_ = this.timeout_(z(function() {
            this.hideNavArrows_()
        }, this), 3E3, k)
    }
    ;
    n.hideNavArrows_ = function() {
        this.timeout_.cancel(this.navArrowDisplayTimeout_);
        wc(this.element[0], this.navArrowsEnabledClassName_)
    }
    ;
    n.processNavArrow_ = function(a) {
        this.showNavArrows_();
        switch (a.id) {
        case "up-arrow":
            this.processVerticalKeyDownEvent_(-1);
            break;
        case "down-arrow":
            this.processVerticalKeyDownEvent_(1);
            break;
        case "left-arrow":
            this.processHorizontalKeyDownEvent_(-2);
            break;
        case "right-arrow":
            this.processHorizontalKeyDownEvent_(2)
        }
    }
    ;
    n.clearCurrentRow_ = function() {
        var a = this.getCurrentRow_();
        a && (a.clear(),
        this.focus())
    }
    ;
    n.setCurrentItemIndex_ = function(a, b) {
        var c = this.getCurrentRow_();
        c.setActiveIndex(a);
        c.offsetAbsoluteIndexBy(b);
        this.scope.$emit("item-changed", this.data.currentRowIndex, this.getCurrentItemIndex_())
    }
    ;
    n.loadRowsAfterDelay_ = function() {
        this.timeout_.cancel(this.rowLoadTimeout_);
        this.rowLoadTimeout_ = this.timeout_(z(function() {
            this.doLoadRowAfterDelay_()
        }, this), 1E3, k);
        this.isActive && this.updateMessage()
    }
    ;
    n.doLoadRowAfterDelay_ = function() {
        var a = this.getCurrentRow_();
        a && (this.isActive && this.scope.$emit("toggle-loading", i),
        a.load(z(this.rowLoadedHandler_, this, this.data.currentRowIndex)))
    }
    ;
    n.rowLoadedHandler_ = function(a) {
        a == this.data.currentRowIndex && (a = this.getCurrentRow_(),
        a.model.unreadCount = 0,
        this.scope.$emit("row-loaded", a),
        0 == a.getLength() && this.isActive && this.updateMessage("[[No videos are available|The message shown when a row has no videos to show.]]"),
        this.showScrollerElements_(k),
        a = this.getBrowseRow_(),
        a.setData(this.getCurrentRow_()),
        this.scope.$emit("toggle-loading", k),
        this.scope.$emit("row-changed", this.data.currentRowIndex, this.getCurrentItemIndex_()),
        a.element.toggleClass("disabled", k),
        this.isActive && this.activateChild_(this.children["browse-row"]))
    }
    ;
    n.showScrollerElements_ = function(a) {
        this.getScrollbar_().element.toggleClass("enabled", a);
        this.getSuperScroller_().element.toggleClass("enabled", a)
    }
    ;
    n.requestPlaybackHandler_ = function(a, b) {
        if (a.targetScope !== this.scope) {
            a.stopPropagation();
            var c;
            if ((this.environment_.isExperimentActive(927902) || this.environment_.isExperimentActive(927903)) && "search" == this.locationService_.mode()) {
                c = this.relatedVideosService_;
                var e = R.imgPath + "/icon-related.png"
                  , f = b.videoId
                  , g = new Vd;
                Qd(g, c, "[[Now Playing|Title for currently playing playlists.]]", e, f, h, h);
                c = g;
                c.addSeed(b)
            } else
                c = this.getCurrentRow_();
            c && this.scope.$emit("request-playback", b, c)
        }
    }
    ;
    n.getBrowseRow_ = function() {
        return this.children["browse-row"]
    }
    ;
    n.getSuperScroller_ = function() {
        return this.children["super-scroller"]
    }
    ;
    n.getScrollbar_ = function() {
        return this.children["browse-scrollbar"]
    }
    ;
    bj.$inject = "$scope $element $attrs locationService navigationService messageModel $timeout scrollbarModel environmentModel relatedVideosService".split(" ");
    var Z = function(a, b, c, e) {
        this.name = this.name || "list";
        V.call(this, a, b, c);
        this.compile_ = e;
        this.activeIndex = 0;
        this.itemRenderer = c.itemRenderer || "";
        this.orientation = c.orientation || "vertical";
        this.loop_ = c.loop !== h ? this.scope.$eval(c.loop) : k;
        this.paging_ = c.paging !== h ? this.scope.$eval(c.paging) : i;
        this.childScope_ = j;
        this.displayCount = this.scope.$eval(c.displayCount);
        c.activeIndex && this.scope.$watch(c.activeIndex, z(this.setActiveIndex, this));
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        c.repeatRate ? this.scope.$on("keydown", pg(this.scope.$eval(c.repeatRate), z(this.keyDownHandler, this))) : this.scope.$on("keydown", z(this.keyDownHandler, this));
        this.scope.list = this
    };
    F(Z, V);
    n = Z.prototype;
    n.activate = function() {
        Z.superClass_.activate.call(this);
        this.activeIndexChangedHandler(this.activeIndex, k)
    }
    ;
    n.deactivate = function() {
        Z.superClass_.deactivate.call(this);
        this.deactivateChild_(this.getChildAt_(this.activeIndex))
    }
    ;
    n.dataChangedHandler = function(a) {
        a && this.data && a.length === this.data.length ? this.data = a : (this.data = a,
        this.activateDefaultItem(),
        this.data && this.createChildren())
    }
    ;
    n.setData = function(a) {
        Z.superClass_.setData.call(this, a);
        this.createChildren() || (this.setDataOnChildren(),
        this.isActive && this.activateDefaultItem())
    }
    ;
    n.setDataOnChildren = function() {
        for (var a = this.childList.length, b = 0; b < a; ++b)
            this.childList[b].setData(this.getItemAt(b))
    }
    ;
    n.createChildren = function() {
        if (!Z.superClass_.createChildren.call(this))
            return k;
        for (var a = "", b = Math.min(this.displayCount ? this.displayCount : this.data.length, this.data.length), c = 0; c < b; ++c)
            a += this.createChild(this.data[c], c);
        this.childScope_ && (this.childScope_.$destroy(),
        this.clearChildren());
        this.childScope_ = this.scope.$new();
        this.element.html(a);
        this.compile_(this.element.contents())(this.childScope_);
        this.safeDigest();
        this.isActive && this.activateDefaultItem();
        return i
    }
    ;
    n.createChild = function(a) {
        a = a.itemRenderer || this.itemRenderer;
        return "<" + a + ' class="item"></' + a + ">"
    }
    ;
    n.childAddedHandler = function(a, b) {
        Z.superClass_.childAddedHandler.call(this, a, b);
        var c = this.childList.length - 1;
        b.setData(this.getItemAt(c));
        b.scope.childIndex = c;
        this.isActive && c == this.activeIndex && this.activateChild_(b)
    }
    ;
    n.setActiveIndex = function(a) {
        a != this.activeIndex && this.updateActiveIndex_(j, a, k)
    }
    ;
    n.keyDownHook = function() {}
    ;
    n.keyUpHook = function() {}
    ;
    n.keyUpHandler_ = function(a, b, c) {
        switch (b) {
        case 37:
        case 39:
            this.isVertical_() || a.stopPropagation()
        }
        this.keyUpHook(a, b, c)
    }
    ;
    n.keyDownHandler = function(a, b, c) {
        var e = this.offsetFromKeyCode_(b);
        0 !== e && this.updateActiveIndex_(a, this.activeIndex + e, i);
        this.keyDownHook(a, b, c)
    }
    ;
    n.offsetFromKeyCode_ = function(a) {
        if (this.isVertical_())
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
        if (this.paging_)
            switch (a) {
            case 176:
                return 8;
            case 177:
                return -8
            }
        return 0
    }
    ;
    n.isActivatable = function() {
        return i
    }
    ;
    n.isValidActivationTarget_ = function(a) {
        return this.isActivatable(a) && this.activeIndex !== a
    }
    ;
    n.activateDefaultItem = function() {
        this.activateChild_(this.getChildAt_(this.activeIndex))
    }
    ;
    n.activeIndexChangedHandler = function(a, b) {
        this.activeIndex = a;
        this.activateChild_(this.getChildAt_(this.activeIndex));
        b && this.scope.$emit("list-item-index-change", this.activeIndex)
    }
    ;
    n.updateActiveIndex_ = function(a, b, c) {
        var e = this.data ? this.data.length : 0
          , f = this.loop_ ? (b + e) % e : Math.min(Math.max(b, 0), e - 1);
        if (f != this.activeIndex) {
            b = b < this.activeIndex ? -1 : 1;
            for (var e = this.loop_ ? e : 0 > b ? f + 1 : e - f, g = 0; g < e; ++g) {
                var l = f + g * b;
                if (this.isValidActivationTarget_(l)) {
                    this.stopEventPropagation_(a);
                    this.activeIndexChangedHandler(l, c);
                    break
                }
            }
        }
    }
    ;
    n.stopEventPropagation_ = function(a) {
        a && a.stopPropagation()
    }
    ;
    n.getItemAt = function(a) {
        return this.data ? this.data[a] : j
    }
    ;
    n.toggleEnabled = function(a) {
        this.childList[this.activeIndex].toggleEnabled(a)
    }
    ;
    n.isVertical_ = function() {
        return "vertical" === this.orientation
    }
    ;
    Z.$inject = ["$scope", "$element", "$attrs", "$compile"];
    var ej = function(a, b, c, e, f) {
        Z.call(this, a, b, c, e);
        this.environmentModel_ = f;
        this.displayCount = 3;
        this.orientation = "horizontal";
        this.rendererName_ = ""
    };
    F(ej, Z);
    n = ej.prototype;
    n.activate = function() {
        ej.superClass_.activate.call(this);
        this.activateChild_(this.childList[0])
    }
    ;
    n.deactivate = function() {
        ej.superClass_.deactivate.call(this);
        this.deactivateChild_(this.childList[0])
    }
    ;
    n.shouldCreateChildren = function() {
        var a = this.scope.$eval(this.attrs.itemRenderer);
        return this.rendererName_ !== a && 0 < this.data.length ? (this.rendererName_ = a,
        i) : k
    }
    ;
    n.createChild = function(a, b) {
        var c = this.scope.$eval(this.attrs.itemRenderer)
          , e = "item";
        0 !== b && (e += " " + this.getLowPerformingClassName_());
        return "<yt:" + c + '  class="' + e + '"></yt:' + c + ">"
    }
    ;
    n.keyDownHandler = function() {}
    ;
    n.childAddedHandler = function(a, b) {
        ej.superClass_.childAddedHandler.call(this, a, b);
        this.isActive && this.activateChild_(this.getChildAt_(0))
    }
    ;
    n.setActiveIndex = function(a) {
        this.activeIndex = a;
        this.setDataOnChildren();
        this.isActive && this.activateChild_(this.childList[0])
    }
    ;
    n.getItemAt = function(a) {
        return this.data ? this.data[this.activeIndex + a] : j
    }
    ;
    n.getLowPerformingClassName_ = function() {
        return this.environmentModel_.isLowPeformingSony ? "hide-background" : ""
    }
    ;
    ej.$inject = ["$scope", "$element", "$attrs", "$compile", "environmentModel"];
    var fj = function(a, b, c, e, f) {
        this.name = "browseRow";
        U.call(this, a, b, c);
        this.watchModel_ = e;
        this.timeService_ = f;
        this.nowPlayingTitle = "[[Now Playing:|Tooltip that indicates what video is currently playing. This is followed by a video title.]]";
        this.unreadLabelTitle = "[[New|Label that follows the unread count number.]]"
    };
    F(fj, U);
    n = fj.prototype;
    n.activate = function() {
        fj.superClass_.activate.call(this);
        this.activateChild_(this.children["tile-row"])
    }
    ;
    n.deactivate = function() {
        fj.superClass_.deactivate.call(this);
        this.deactivateChild_(this.children["tile-row"])
    }
    ;
    n.setData = function(a) {
        a && a !== this.data && (this.data = a,
        this.watchableCollectionDeregister_ && (this.watchableCollectionDeregister_(),
        this.watchablesDeregister_(),
        this.activeIndexDeregister_()),
        this.watchableCollectionDeregister_ = a.on("model:changed", z(this.watchableCollectionChangedHandler_, this)),
        this.watchablesDeregister_ = a.model.watchables.on("items:changed", z(this.setDataOnChildren_, this)),
        this.activeIndexDeregister_ = a.on("activeIndex:changed", z(this.activeIndexChangedHandler_, this)),
        this.activeIndexChangedHandler_(a.activeIndex),
        this.setDataOnChildren_())
    }
    ;
    n.activeIndexChangedHandler_ = function(a) {
        var b = this.children["tile-row"];
        b && b.setActiveIndex(a)
    }
    ;
    n.watchableCollectionChangedHandler_ = function(a) {
        this.watchablesDeregister_ && this.watchablesDeregister_();
        this.watchablesDeregister_ = a.watchables.on("items:changed", z(this.setDataOnChildren_, this));
        this.setDataOnChildren_()
    }
    ;
    n.setDataOnChildren_ = function() {
        var a = this.data.model.watchables.getItems()
          , b = this.children["tile-row"];
        b && (b.setData(a),
        this.isActive && b.activate())
    }
    ;
    fj.$inject = ["$scope", "$element", "$attrs", "watchModel", "timeService"];
    var gj = function(a, b, c, e) {
        this.name = "button";
        V.call(this, a, b, c);
        this.interpolate_ = e;
        this.scope.$on("keyup", z(this.keyUpHandler_, this))
    };
    F(gj, V);
    gj.prototype.dataChangedHandler = function(a) {
        a && (this.data = new Xd(a.text,a.payload.type,a.payload),
        this.setElementText(this.element[0], this.interpolate_(a.text || "")(this.scope)))
    }
    ;
    gj.prototype.setData = function(a) {
        gj.superClass_.setData.call(this, a);
        this.dataChangedHandler(a)
    }
    ;
    gj.prototype.keyUpHandler_ = function(a, b) {
        switch (b) {
        case 13:
            this.scope.$emit("button-click", this.data.payload),
            a.stopPropagation()
        }
    }
    ;
    gj.$inject = ["$scope", "$element", "$attrs", "$interpolate"];
    var hj = function(a, b, c, e, f) {
        this.name = "carousel";
        V.call(this, a, b, c);
        this.activeIndex = 0;
        this.environment_ = e;
        this.compile_ = f;
        this.displayCount_ = 7;
        this.percentMargin_ = 4;
        this.scrollIndex_ = 2;
        this.shouldAnimate_ = k;
        this.childScope_ = j;
        this.animationDuration_ = "200ms";
        this.rendererName_ = "";
        a.$on("keydown", z(function() {
            this.shouldAnimate_ = this.environment_.supportsAnimation
        }, this))
    };
    F(hj, V);
    n = hj.prototype;
    n.activate = function() {
        hj.superClass_.activate.call(this);
        var a = this.getRelativeActiveIndex_();
        this.activateChild_(this.childList[a])
    }
    ;
    n.deactivate = function() {
        hj.superClass_.deactivate.call(this);
        this.deactivateChild_(this.childList[this.getRelativeActiveIndex_()])
    }
    ;
    n.setData = function(a) {
        hj.superClass_.setData.call(this, a);
        this.createChildren() || this.childList.forEach(this.setDataOnChild_, this)
    }
    ;
    n.shouldCreateChildren = function() {
        var a = this.scope.$eval(this.attrs.itemRenderer);
        if (this.rendererName_ === a)
            return k;
        this.rendererName_ = a;
        return i
    }
    ;
    n.createChildren = function() {
        if (!hj.superClass_.createChildren.call(this))
            return k;
        for (var a = 0, b = ""; this.displayCount_ > a; )
            b += "<yt:" + this.rendererName_ + '>" class="item"</yt:' + this.rendererName_ + ">",
            a++;
        this.childScope_ && (this.childScope_.$destroy(),
        this.clearChildren());
        this.childScope_ = this.scope.$new();
        this.element.html(b);
        this.compile_(this.element.contents())(this.childScope_);
        this.safeDigest();
        return i
    }
    ;
    n.setDataOnChild_ = function(a, b) {
        a.setData(this.getItemAt_(b));
        this.setPositionOnChild_(a, b)
    }
    ;
    n.positionChildren_ = function() {
        this.childList.forEach(this.setPositionOnChild_, this)
    }
    ;
    n.setPositionOnChild_ = function(a, b) {
        var c = this.getRelativeActiveIndex_();
        a.element[0].className = this.getChildClassAt_(b);
        this.setChildStyleAt_(a, b);
        c === b && this.isActive && this.activateChild_(a)
    }
    ;
    n.childAddedHandler = function(a, b) {
        b.rendererName === this.rendererName_ && (hj.superClass_.childAddedHandler.call(this, a, b),
        this.setDataOnChild_(b, this.childList.length - 1))
    }
    ;
    n.setActiveIndex = function(a) {
        this.activeIndex = a;
        this.childList.forEach(this.setDataOnChild_, this)
    }
    ;
    n.getItemAt_ = function(a) {
        var b = Math.max(0, this.activeIndex - this.scrollIndex_);
        a = this.getPositionalIndex(a) - this.getPositionOffset();
        return this.data ? this.data[b + a] : j
    }
    ;
    n.getChildClassAt_ = function(a) {
        var b = this.getItemAt_(a)
          , b = b && b.className ? [b.className] : [];
        b.push("item");
        0 > this.getPositionalIndex(a) && b.push("obscured");
        return b.join(" ")
    }
    ;
    n.setChildStyleAt_ = function(a, b) {
        b = this.getPositionalIndex(b);
        var c = this.environment_.supportsAnimation && !this.environment_.isOpera ? "translateZ(0)" : ""
          , e = this.environment_.cssPrefix + "-transform"
          , c = "translateX(" + oe(b * (100 + this.percentMargin_), 1) + ") " + c
          , f = this.environment_.cssPrefix + "-transition"
          , g = this.shouldAnimateChild_(b) ? e + " " + this.animationDuration_ : "none 0s"
          , l = {};
        l[e] = c;
        l[f] = g;
        a.element.css(l)
    }
    ;
    n.getPositionOffset = function() {
        return Math.max(-this.activeIndex, -this.scrollIndex_)
    }
    ;
    n.getEffectiveScrollIndex = function() {
        return Math.min(this.activeIndex, this.scrollIndex_)
    }
    ;
    n.shouldAnimateChild_ = function(a) {
        return this.shouldAnimate_ && a != -this.scrollIndex_ && a != this.displayCount_ - 1 - this.getEffectiveScrollIndex()
    }
    ;
    n.getPositionalIndex = function(a) {
        a -= this.getRelativeActiveIndex_();
        a += this.getEffectiveScrollIndex();
        a %= this.displayCount_;
        0 > a && (a += this.displayCount_);
        return a += this.getPositionOffset()
    }
    ;
    n.getRelativeActiveIndex_ = function() {
        return this.activeIndex % this.displayCount_
    }
    ;
    hj.$inject = ["$scope", "$element", "$attrs", "environmentModel", "$compile"];
    var $ = function(a, b, c, e, f, g) {
        this.name = "keyboard";
        V.call(this, a, b, c);
        this.environmentModel_ = e;
        this.locale_ = f;
        this.searchQueryModel_ = g;
        this.letterSets_ = [];
        this.selectedLanguageIndex_ = 0;
        this.currentPoint = new be;
        this.activeItemRect_ = j;
        this.scope.$on("keyup", z(this.keyUpHandler, this));
        this.scope.$on("keydown", pg(20, z(this.keyDownHandler, this)));
        this.scope.$on("letter-tile-key-press", z(this.letterTilePressHandler, this));
        this.scope.$on("grid-point-change", z(this.gridPointChangeHandler_, this));
        this.scope.$on("mouseover", z(this.mouseOverHandler_, this));
        this.searchQueryModel_.on("quickSuggestions:changed", z(function(a) {
            0 < a.length && this.positionLetterSuggest_(this.getCurrentLetter());
            this.getLetterSuggestList_().setData(this.getLetterSuggestions())
        }, this));
        this.fillLetters_();
        this.element[0].className = this.getLanguage().toLowerCase()
    };
    F($, V);
    n = $.prototype;
    n.activate = function() {
        $.superClass_.activate.call(this);
        this.activateGrid_();
        0 < this.getLetterSuggestions().length && (this.getLetterSuggestList_().setData(this.getLetterSuggestions()),
        this.positionLetterSuggest_(this.getCurrentLetter()))
    }
    ;
    n.activateGrid_ = function() {
        var a = this.getGrid_();
        a.isActive || this.activateChild_(a)
    }
    ;
    n.deactivateGrid_ = function() {
        this.deactivateChild_(this.getGrid_())
    }
    ;
    n.activateLetterSuggest_ = function() {
        this.activateChild_(this.getLetterSuggestList_())
    }
    ;
    n.getGrid_ = function() {
        return this.children.keyboard
    }
    ;
    n.getLetterSuggestList_ = function() {
        return this.children["letter-suggest"]
    }
    ;
    n.getLetterSuggestions = function() {
        return this.searchQueryModel_.quickSuggestions
    }
    ;
    n.getKeyRepeatRate = function() {
        return this.environmentModel_.isLowPeformingSearch ? 4 : 20
    }
    ;
    n.isKeyboardActive = function() {
        return this.getGrid_().isActive
    }
    ;
    n.isLetterSuggestActive = function() {
        return this.getLetterSuggestList_().isActive
    }
    ;
    n.isLetterSuggestVisible = function() {
        var a = this.getLetterSuggestions();
        return !(!this.isLetterSuggestClassApplied_() || !a || !a.length)
    }
    ;
    n.isLetterSuggestClassApplied_ = function() {
        return this.children["letter-suggest"].element.hasClass("enabled")
    }
    ;
    n.isDefaultLanguage = function() {
        return "EN" == this.getLanguage()
    }
    ;
    n.getLanguage = function() {
        return this.letterSets_[this.selectedLanguageIndex_].language
    }
    ;
    n.getLetters = function() {
        return this.letterSets_[this.selectedLanguageIndex_].letters
    }
    ;
    n.getCurrentLetter = function() {
        return this.getLetters()[this.currentPoint.top][this.currentPoint.left]
    }
    ;
    n.keyUpHandler = function(a, b) {
        switch (b) {
        case 83:
            this.hideLetterSuggest_();
            break;
        case 8:
        case 27:
            this.isLetterSuggestVisible() && (a.stopPropagation(),
            a.preventDefault(),
            this.hideLetterSuggest_())
        }
    }
    ;
    n.keyDownHandler = function(a, b) {
        switch (b) {
        case 37:
            this.moveLeft() && a.stopPropagation();
            break;
        case 39:
            this.moveRight() && a.stopPropagation();
            break;
        case 40:
            this.moveDown() && a.stopPropagation();
            break;
        case 38:
            this.moveUp() && a.stopPropagation();
            break;
        case 172:
        case 71:
            this.hideLetterSuggest_()
        }
    }
    ;
    n.mouseOverHandler_ = function(a) {
        if (a.targetScope.tile) {
            var b = a.targetScope.childIndex;
            a = a.targetScope.$parent.$parent.childIndex;
            ea(b) && ea(a) && (this.scope.$emit("focus-search"),
            this.currentPoint.left = b,
            this.currentPoint.top = a,
            b = this.getGrid_(),
            b.setActivePoint(this.currentPoint),
            b.toggleEnabled(i),
            this.activateGrid_(),
            this.attemptEnableLetterSuggestion_(),
            this.safeDigest())
        }
    }
    ;
    n.letterTilePressHandler = function(a, b) {
        this.hideLetterSuggest_();
        this.handleLanguageKeyPress(a, b) || (b != this.getCurrentLetter() && this.activateLetter_(b),
        this.attemptEnableLetterSuggestion_())
    }
    ;
    n.gridPointChangeHandler_ = function(a, b) {
        this.currentPoint.top = b.top;
        this.currentPoint.left = b.left;
        this.isActive && this.attemptEnableLetterSuggestion_()
    }
    ;
    n.moveHorizontal_ = function(a) {
        if (this.isLetterSuggestActive()) {
            var b = this.getGrid_();
            b.toggleEnabled(i);
            this.currentPoint.left += a;
            b.setActivePoint(this.currentPoint);
            (a = this.getLetterSuggestions()) && a.length && b.toggleEnabled(k);
            this.attemptEnableLetterSuggestion_();
            return i
        }
        return k
    }
    ;
    n.handleLanguageKeyPress = function(a, b) {
        return this.isLanguageToggleKey_(b) ? (this.selectedLanguageIndex_ = ++this.selectedLanguageIndex_ % this.letterSets_.length,
        this.element[0].className = this.getLanguage().toLowerCase(),
        this.safeDigest(),
        a.stopPropagation(),
        this.currentPoint.left = 0,
        this.getGrid_().setActivePoint(this.currentPoint),
        i) : k
    }
    ;
    n.hideLetterSuggest_ = function() {
        this.setLetterSuggestActiveIndex_(0);
        this.getGrid_().toggleEnabled(i);
        this.activateGrid_();
        this.toggleLetterSuggestion_(k)
    }
    ;
    n.setLetterSuggestActiveIndex_ = function(a) {
        this.getLetterSuggestList_().setActiveIndex(a)
    }
    ;
    n.moveDown = function() {
        if (this.isKeyboardActive() && this.isLetterSuggestVisible())
            return this.setLetterSuggestActiveIndex_(0),
            this.activateLetterSuggest_(),
            this.getGrid_().toggleEnabled(k),
            i;
        this.hideLetterSuggestAndGrid_();
        return k
    }
    ;
    n.moveLeft = function() {
        return this.moveHorizontal_(-1)
    }
    ;
    n.moveRight = function() {
        return this.moveHorizontal_(1)
    }
    ;
    n.moveUp = function() {
        if (this.isLetterSuggestActive())
            return this.hideLetterSuggest_(),
            i;
        this.hideLetterSuggestAndGrid_();
        return k
    }
    ;
    n.hideLetterSuggestAndGrid_ = function() {
        this.hideLetterSuggest_();
        this.deactivateChild_(this.getGrid_())
    }
    ;
    n.positionLetterSuggest_ = function() {
        this.toggleLetterSuggestion_(i);
        var a = this.getGrid_().getItemAt(this.currentPoint);
        if (a) {
            var a = a.element[0].getBoundingClientRect()
              , b = Ac("letter-suggest");
            b.style.left = a.left + "px";
            b.style.top = a.bottom + "px"
        }
    }
    ;
    n.attemptEnableLetterSuggestion_ = function() {
        this.searchQueryModel_.resetQuickSuggestions();
        var a = this.getLetterSuggestions();
        a && a.length ? (this.positionLetterSuggest_(this.getCurrentLetter()),
        this.getLetterSuggestList_().setData(a)) : this.hideLetterSuggest_()
    }
    ;
    n.activateLetter_ = function(a) {
        I(this.getLetters(), function(b, c) {
            if (w(b)) {
                var e = La(b, a);
                0 <= e && (this.currentPoint.left = e,
                this.currentPoint.top = c,
                e = this.getGrid_(),
                e.setActivePoint(this.currentPoint),
                e.toggleEnabled(i),
                this.activateGrid_())
            }
        }, this)
    }
    ;
    n.fillLetters_ = function() {
        var a = [], b, c;
        switch (this.locale_.isoLocale) {
        case "ru_RU":
        case "uk_UA":
            a.push("RU");
            break;
        case "ko_KR":
            a.push("KO");
            break;
        case "ja_JP":
            a.push("JP")
        }
        a.push("EN");
        for (b = 0; b < a.length; ++b)
            c = this.buildLettersByLanguage(a[b]),
            c[c.length - 1].push({
                icon: "delete-icon"
            }),
            1 < a.length && c[c.length - 1].push({
                icon: "language-toggle-icon"
            }),
            this.letterSets_.push({
                language: a[b],
                letters: c
            })
    }
    ;
    n.buildLettersByLanguage = function(a) {
        var b;
        b = "" + wa[a];
        "JP" !== a && (b += "1234567890_");
        a = b.split("\n");
        return Na(a, function(a) {
            return a.split("")
        })
    }
    ;
    n.isLanguageToggleKey_ = function(a) {
        return !!(a && "language-toggle-icon" === a.icon)
    }
    ;
    n.toggleLetterSuggestion_ = function(a) {
        var b = "letter-suggest";
        a && (b += " enabled");
        this.getLetterSuggestList_().element[0].className = b
    }
    ;
    $.$inject = "$scope $element $attrs environmentModel locale searchQueryModel".split(" ");
    var ij = function(a, b, c, e, f, g, l) {
        $.call(this, a, b, c, e, f, g);
        this.lastActiveChildName_ = "keyboard";
        this.transliterationModel_ = l;
        g.enableQuickSuggest = k;
        this.getChildElement("#transliteration-container").style.display = "block";
        this.scope.$on("transliteration-selected", z(function() {
            this.activateGrid_();
            this.attemptEnableLetterSuggestion_()
        }, this))
    };
    F(ij, $);
    ij.prototype.isTransliterationActive = function() {
        return this.getChildAt_(0).isActive
    }
    ;
    ij.prototype.activate = function() {
        $.prototype.activate.call(this);
        this.children.keyboard.toggleEnabled(i);
        "keyboard" === this.lastActiveChildName_ ? this.activateGrid_() : "transliteration" === this.lastActiveChildName_ && this.activateChild_(this.children.transliteration);
        this.activeChildName = this.lastActiveChildName_
    }
    ;
    ij.prototype.moveDown = function() {
        if (this.isTransliterationActive())
            return this.activateGrid_(),
            this.attemptEnableLetterSuggestion_(),
            i;
        if (this.isKeyboardActive() && this.isLetterSuggestVisible())
            return this.setLetterSuggestActiveIndex_(0),
            this.activateLetterSuggest_(),
            this.children.keyboard.toggleEnabled(k),
            i;
        this.lastActiveChildName_ = "keyboard";
        this.hideLetterSuggestAndGrid_();
        return k
    }
    ;
    ij.prototype.moveUp = function() {
        if (this.isKeyboardActive() && this.transliterationModel_.getBuffer())
            return this.hideLetterSuggest_(),
            this.activateChild_(this.children.transliteration),
            i;
        if (this.isLetterSuggestActive())
            return this.activateGrid_(),
            this.children.keyboard.toggleEnabled(i),
            i;
        this.isTransliterationActive() ? this.lastActiveChildName_ = "transliteration" : (this.lastActiveChildName_ = "keyboard",
        this.hideLetterSuggestAndGrid_());
        return k
    }
    ;
    ij.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");
    var jj = function(a, b, c, e, f, g, l) {
        ij.call(this, a, b, c, e, f, g, l);
        this.langCodePair = qi("en", "zh-hans")
    };
    F(jj, ij);
    jj.prototype.getLetterSuggestions = function() {
        return []
    }
    ;
    jj.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");
    var kj = function(a, b, c, e) {
        a.$on(e, pg(12, z(function(b, g) {
            13 === g && (a.$eval("keyup" === e ? c.ytClick : c.ytClickDown),
            b.stopPropagation())
        }, this)))
    };
    kj.$inject = ["$scope", "$element", "$attrs", "keyEventName"];
    var lj = function(a, b, c, e) {
        this.name = "closedCaptions";
        V.call(this, a, b, c);
        this.playerService_ = e;
        this.options = [];
        this.captionsNotAvailableElement_ = this.getChildElement("#captions-not-available");
        this.captionsLoadingElement_ = this.getChildElement("#captions-loading");
        this.currentPoint = new be;
        this.rowCount = 6;
        this.scope.$on("button-click", z(this.buttonClickHandler_, this));
        this.scope.$watch(z(function() {
            return this.playerService_.subtitlesModuleGeneration
        }, this), z(function(a, b) {
            a !== b && this.updateOptions_()
        }, this));
        this.playerService_.loadSubtitles() ? this.showElementIf(this.captionsNotAvailableElement_, k) : (this.showElementIf(this.captionsLoadingElement_, k),
        this.isActive = i)
    };
    F(lj, V);
    n = lj.prototype;
    n.activateGrid_ = function() {
        var a = this.getGrid_();
        a.isActive || this.activateChild_(a)
    }
    ;
    n.getGrid_ = function() {
        return this.children["cc-languages"]
    }
    ;
    n.updateOptions_ = function() {
        this.options = [];
        var a = this.playerService_.getSubtitleTracks()
          , b = this.playerService_.getCurrentSubtitleTrack()
          , c = !gb(b) && b || this.playerService_.subtitlesTrack || {};
        a && a.length && (a = Na(a, function(a) {
            return new Xd(a.languageName,"captions-language",{
                track: a
            })
        }),
        a.unshift(new Xd("[[Turn Captions Off|Button which is displayed on the subtitles settings dialog. Turns off on screen subtitles.]]","captions-off")),
        I(a, function(a, b) {
            0 == b % 3 && this.options.push([]);
            this.options[this.options.length - 1].push(a);
            a.payload && (a.payload.track && c && a.payload.track.languageName === c.languageName) && (this.currentPoint = new be(Math.floor(b / 3),b % 3))
        }, this));
        this.showElementIf(this.captionsLoadingElement_, k);
        this.showElementIf(this.captionsNotAvailableElement_, !this.options.length);
        this.activateGrid_();
        this.getGrid_().setActivePoint(this.currentPoint)
    }
    ;
    n.buttonClickHandler_ = function(a, b) {
        switch (b.type) {
        case "captions-off":
            this.playerService_.unloadSubtitles();
            break;
        case "captions-language":
            b.track && this.playerService_.setCurrentSubtitleTrack(b.track)
        }
        a.stopPropagation();
        this.requestDialogClose_()
    }
    ;
    n.requestDialogClose_ = function() {
        this.scope.$emit("request-close-dialog");
        this.playerService_.play()
    }
    ;
    lj.$inject = ["$scope", "$element", "$attrs", "playerService"];
    var mj = function(a, b, c, e) {
        V.call(this, a, b, c);
        this.timeout_ = e;
        this.deferredTimeoutPromise_ = 0;
        this.deferredTimeoutDelay = 5E3;
        this.boundHandler_ = z(this.deferredActivateHandler, this)
    };
    F(mj, V);
    mj.prototype.activate = function() {
        V.prototype.activate.call(this);
        this.deferredActivate()
    }
    ;
    mj.prototype.deactivate = function() {
        this.timeout_.cancel(this.deferredTimeoutPromise_);
        V.prototype.deactivate.call(this)
    }
    ;
    mj.prototype.deferredActivate = function() {
        this.timeout_.cancel(this.deferredTimeoutPromise_);
        this.deferredTimeoutPromise_ = this.timeout_(this.boundHandler_, this.deferredTimeoutDelay)
    }
    ;
    mj.prototype.deferredActivateHandler = function() {}
    ;
    var nj = function(a, b, c, e) {
        this.displayImageTimer_ = j;
        a.$on("$destroy", z(function() {
            e.cancel(this.displayImageTimer_)
        }, this));
        a.$watch(c.delay, z(function(a) {
            isNaN(a) || (this.delay_ = a)
        }, this));
        a.$watch(c.imagesrc, z(function(b) {
            b && !isNaN(this.delay_) && (this.displayImageTimer_ = e(function() {
                a.imageUrl = b
            }, this.delay_))
        }, this))
    };
    nj.$inject = ["$scope", "$element", "$attrs", "$timeout"];
    var oj = function(a, b, c, e, f, g) {
        this.name = "dialog";
        V.call(this, a, b, c);
        this.compile_ = e;
        this.interpolate_ = f;
        this.templateClient_ = g;
        this.childScope_ = j;
        this.containerElement_ = this.getChildElement("#inner-dialog-container");
        this.titleElement_ = this.getChildElement(".title");
        this.buttonsElement_ = this.getChildElement(".buttons");
        this.cancelButtonElement_ = this.getChildElement("#confirm-dialog-cancel-button");
        this.okButtonElement_ = this.getChildElement("#confirm-dialog-ok-button");
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.scope.$on("keydown", z(this.keyDownHandler_, this));
        this.scope.$on("request-close-dialog", z(this.closeDialog_, this));
        this.renderMap_ = {};
        a = R.htmlPath;
        this.renderMap_[a + "/dialogs/simple_dialog.html"] = this.compileContents_;
        this.renderMap_[a + "/dialogs/scrollable_dialog.html"] = this.compileContents_;
        this.renderMap_[a + "/dialogs/device_retention_info.html"] = this.renderDeviceRetentionDialog_;
        this.renderMap_[a + "/dialogs/flag_claim.html"] = this.renderFlagClaimDialog_;
        this.renderMap_[a + "/dialogs/flag_video.html"] = this.renderFlagVideoDialog_;
        this.renderMap_[a + "/dialogs/logout_info.html"] = this.renderLogoutInfoDialog_;
        this.renderMap_[a + "/dialogs/player_error_info.html"] = this.renderPlayerErrorDialog_;
        this.renderMap_[a + "/dialogs/remote_reset_info.html"] = this.renderRemoteResetDialog_
    };
    F(oj, V);
    n = oj.prototype;
    n.goBack_ = function() {
        this.data.cancelHandler();
        this.closeDialog_()
    }
    ;
    n.isConfirmDialog = function() {
        return !(!this.data || !this.data.isConfirmType)
    }
    ;
    n.dataChangedHandler = function(a) {
        V.prototype.dataChangedHandler.call(this, a);
        this.data && (this.isConfirmDialog() && (this.activeChildName = "confirm-dialog-cancel-button"),
        this.data.widgetName ? this.renderWidget_() : this.data.templateUrl && this.templateClient_.get(a.templateUrl, {}, z(this.applyDialogContents_, this)),
        this.lastDataClass_ && this.element.removeClass(this.lastDataClass_),
        this.element.addClass(this.data.className),
        this.lastDataClass_ = this.data.className,
        this.element.html() && (this.setElementText(this.titleElement_, this.interpolate_(this.data.title)(this.scope)),
        this.showElementIf(this.buttonsElement_, this.isConfirmDialog()),
        this.setElementText(this.cancelButtonElement_, this.interpolate_(this.data.cancelButtonName || "")(this.scope)),
        this.setElementText(this.okButtonElement_, this.interpolate_(this.data.completeButtonName || "")(this.scope))))
    }
    ;
    n.renderWidget_ = function() {
        this.setElementHtml(this.containerElement_, "<" + this.data.widgetName + ' activate-when="dialog.isActive" data="dialog.data"></' + this.data.widgetName + ">");
        this.compileContents_()
    }
    ;
    n.applyDialogContents_ = function(a) {
        this.setElementHtml(this.containerElement_, a);
        this.activate();
        this.focus();
        (a = this.renderMap_[this.data.templateUrl]) && a.call(this)
    }
    ;
    n.compileContents_ = function() {
        this.childScope_ && (this.childScope_.$destroy(),
        this.clearChildren());
        this.childScope_ = this.scope.$new();
        this.compile_(angular.element(this.containerElement_).contents())(this.childScope_);
        this.activate()
    }
    ;
    n.keyUpHandler_ = function(a, b, c) {
        a.stopPropagation();
        a.preventDefault();
        switch (b) {
        case 8:
        case 27:
            this.goBack_();
            break;
        case 13:
            c && ad(c, "back") && this.goBack_()
        }
        this.isConfirmDialog() && this.confirmDialogKeyUpHandler_(b, c);
        this.safeDigest(this.scope)
    }
    ;
    n.keyDownHandler_ = function(a) {
        a.preventDefault();
        a.stopPropagation()
    }
    ;
    n.confirmDialogKeyUpHandler_ = function(a, b) {
        switch (a) {
        case 39:
            this.activeChildName = "confirm-dialog-ok-button";
            break;
        case 37:
            this.activeChildName = "confirm-dialog-cancel-button";
            break;
        case 13:
            if ("confirm-dialog-ok-button" === this.activeChildName || b && "confirm-dialog-ok-button" === b.id)
                this.data.completeHandler(),
                this.scope.$emit("request-confirm-dialog");
            else if ("confirm-dialog-cancel-button" === this.activeChildName || b && "confirm-dialog-cancel-button" === b.id)
                this.data.cancelHandler(),
                this.closeDialog_()
        }
    }
    ;
    n.closeDialog_ = function(a) {
        this.childScope_ && (this.childScope_.$destroy(),
        this.childScope_ = j,
        this.clearChildren());
        a || this.scope.$parent.$emit("request-close-dialog")
    }
    ;
    n.renderDeviceRetentionDialog_ = function() {
        this.setElementText(this.getChildElement(".message"), this.interpolate_(this.data.getDisplayText())(this.scope))
    }
    ;
    n.renderFlagClaimDialog_ = function() {
        this.setElementText(this.getChildElement(".text"), this.interpolate_(this.data.video.title)(this.scope));
        this.setElementText(this.getChildElement(".url"), this.data.videoUrl)
    }
    ;
    n.renderFlagVideoDialog_ = function() {
        this.setElementText(this.getChildElement(".url"), this.data.videoUrl)
    }
    ;
    n.renderLogoutInfoDialog_ = function() {
        this.setElementText(this.getChildElement(".display-name"), this.data.user.displayName);
        this.setElementText(this.getChildElement(".platform-user-name"), this.data.user.platformUserName);
        this.getChildElement(".login-user-icon").style.backgroundImage = "url(" + this.data.user.imageUrl + ")";
        this.getChildElement(".platform-user-icon").style.backgroundImage = "url(" + this.data.user.platformUserIcon + ")";
        var a = this.interpolate_("[[<div>You're signed in as <strong>{{dialog.data.user.displayName}}&nbsp;</strong></div>|Tooltip displaying the YouTube username of the currently signed-in user.]]")({
            dialog: this
        });
        this.setElementHtml(this.getChildElement(".signed-in-message"), a)
    }
    ;
    n.renderPlayerErrorDialog_ = function() {
        this.setElementText(this.getChildElement(".player-error"), this.interpolate_(this.data.getErrorMessage())(this.scope))
    }
    ;
    n.renderRemoteResetDialog_ = function() {
        var a = this.data.getDevices().getItems();
        this.showElementIf(this.containerElement_, 0 < a.length);
        var b = "";
        a.forEach(function(a) {
            b += '<li class="' + a.deviceClass() + '">' + a.displayString() + "</li>"
        });
        this.setElementHtml(this.getChildElement(".devices"), b)
    }
    ;
    oj.$inject = "$scope $element $attrs $compile $interpolate templateClient".split(" ");
    var pj = function(a, b, c, e, f, g) {
        $.call(this, a, b, c, e, f, g)
    };
    F(pj, $);
    pj.$inject = "$scope $element $attrs environmentModel locale searchQueryModel".split(" ");
    var qj = function(a, b, c, e) {
        this.name = "feedIcon";
        U.call(this, a, b, c);
        this.interpolate_ = e;
        this.titleElement_ = this.getChildElement("h2");
        this.iconElement_ = this.getChildElement(".icon");
        this.scope.$on("keyup", z(this.keyUpHandler_, this))
    };
    F(qj, U);
    qj.prototype.setData = function(a) {
        qj.superClass_.setData.call(this, a);
        this.render()
    }
    ;
    qj.prototype.render = function() {
        this.data && (this.setElementText(this.titleElement_, this.interpolate_(this.data.model.title)(this.scope)),
        this.iconChangedHandler_(this.data.model.feedIconUrl))
    }
    ;
    qj.prototype.iconChangedHandler_ = function(a) {
        var b = ""
          , c = "icon";
        a && -1 !== a.indexOf(".jpg") ? b = "url(" + a + ")" : c += " " + a;
        this.iconElement_.className = c;
        this.iconElement_.style.backgroundImage = b
    }
    ;
    qj.prototype.keyUpHandler_ = function(a, b, c, e) {
        switch (b) {
        case 13:
            J(uc(e.target), "icon") && (this.scope.$emit("button-click", this.data),
            a.stopPropagation())
        }
    }
    ;
    qj.$inject = ["$scope", "$element", "$attrs", "$interpolate"];
    var rj = function(a, b, c) {
        this.name = "flag";
        V.call(this, a, b, c);
        this.activeItemIndex = this.activeIndex = 0;
        this.flagData = [[new Xd("[[Sexual Content|GTGC4NgMTyty-lg7bvKq5g]]","flag-normal"), new Xd("[[Violent or Repulsive Content|qhVb-TasMDalcVlh0-bVNQ]]","flag-normal"), new Xd("[[Hateful or Abusive Content|VlY1sRyrA4TwmawjC86xFw]]","flag-normal"), new Xd("[[Harmful Dangerous Acts|rCIBQRDFyfIBja9x497u6A]]","flag-normal")], [new Xd("[[Child Abuse|IngFQG4SEoOLkyKZJEPR6g]]","flag-normal"), new Xd("[[Spam|Pnw-OErhkCrqYT5klcLesw]]","flag-normal"), new Xd("[[Infringes My Rights|GwQ2vMHBH9Ls3VHHIixT-Q]]","flag-rights")]];
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.scope.$on("keydown", z(this.keyDownHandler_, this));
        this.scope.$on("list-item-index-change", z(this.listIndexChangeHandler_, this));
        this.scope.$on("button-click", z(this.buttonClickHandler_, this))
    };
    F(rj, V);
    n = rj.prototype;
    n.childAddedHandler = function(a, b) {
        rj.superClass_.childAddedHandler.call(this, a, b);
        b.setData(this.flagData[this.childList.length - 1])
    }
    ;
    n.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 37:
        case 39:
            a.stopPropagation()
        }
    }
    ;
    n.keyUpHandler_ = function(a, b) {
        switch (b) {
        case 37:
            this.activeIndex = Math.max(this.activeIndex - 1, 0);
            this.safeDigest(this.scope);
            a.stopPropagation();
            break;
        case 39:
            this.activeIndex = Math.min(++this.activeIndex, this.flagData.length - 1);
            this.safeDigest(this.scope);
            a.stopPropagation();
            break;
        case 38:
        case 40:
            a.stopPropagation()
        }
    }
    ;
    n.buttonClickHandler_ = function(a, b) {
        switch (b.type) {
        case "flag-normal":
            this.scope.$emit("request-flag-video");
            a.stopPropagation();
            break;
        case "flag-rights":
            this.scope.$emit("request-flag-claim"),
            a.stopPropagation()
        }
    }
    ;
    n.listIndexChangeHandler_ = function(a, b) {
        this.activeItemIndex = b
    }
    ;
    n.activeIndexEquals = function(a) {
        return this.activeIndex === a
    }
    ;
    rj.$inject = ["$scope", "$element", "$attrs"];
    var sj = function(a, b, c, e, f) {
        this.name = "grid";
        V.call(this, a, b, c);
        this.compile_ = e;
        this.scrollbarModel_ = f;
        this.activePoint = new be;
        this.itemRenderer = c.itemRenderer || "";
        this.loop_ = c.loop || k;
        this.rowCount_ = this.scope.$eval(c.rowCount) || j;
        this.repeatRate_ = c.repeatRate;
        this.scope.$on("keydown", z(this.keyDownHandler_, this));
        this.scope.$on("list-item-index-change", z(this.listIndexChangeHandler_, this))
    };
    F(sj, V);
    n = sj.prototype;
    n.activate = function() {
        sj.superClass_.activate.call(this);
        this.activateChild_(this.childList[this.activePoint.top])
    }
    ;
    n.deactivate = function() {
        sj.superClass_.deactivate.call(this);
        this.deactivateChild_(this.childList[this.activePoint.top])
    }
    ;
    n.dataChangedHandler = function(a) {
        if (a && this.data && a.length === this.data.length)
            this.data = a;
        else if (this.data = a,
        this.updatePoint_(0, 0),
        this.data) {
            a = "";
            for (var b = 0, c = this.data.length; b < c; ++b)
                a += this.renderItem(this.data[b], b);
            this.shouldShowScrollbar() && (a += this.renderScrollbar());
            this.childScope_ && (this.childScope_.$destroy(),
            this.clearChildren());
            this.childScope_ = this.scope.$new();
            this.element.html(a);
            this.compile_(this.element.contents())(this.childScope_);
            this.updateScrollbar_()
        }
    }
    ;
    n.setActivePoint = function(a) {
        a && this.activePoint != a && this.updatePoint_(a.top, a.left, i)
    }
    ;
    n.renderItem = function(a, b) {
        var c = [];
        c.push('class="grid-row"');
        c.push('data="grid.getDataRow(' + b + ')"');
        c.push('item-renderer="' + this.itemRenderer + '"');
        c.push('loop="' + this.loop_ + '"');
        c.push('orientation="horizontal"');
        this.repeatRate_ && c.push('repeat-rate="' + this.repeatRate_ + '"');
        return "<yt:list " + c.join(" ") + "></yt:list>"
    }
    ;
    n.renderScrollbar = function() {
        return '<yt:scrollbar class="grid-scrollbar"></yt:scrollbar>'
    }
    ;
    n.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 40:
            this.moveWithOffset_(1) && (a.stopPropagation(),
            a.preventDefault());
            break;
        case 38:
            this.moveWithOffset_(-1) && (a.stopPropagation(),
            a.preventDefault())
        }
    }
    ;
    n.moveWithOffset_ = function(a) {
        if (this.attrs.consumeKeys === h || this.scope.$eval(this.attrs.consumeKeys))
            if (a = this.activePoint.top + a,
            this.data[a])
                return this.updatePoint_(a, this.activePoint.left),
                i;
        return k
    }
    ;
    n.listIndexChangeHandler_ = function(a, b) {
        this.updatePoint_(this.activePoint.top, b, k, i);
        a.stopPropagation()
    }
    ;
    n.updatePoint_ = function(a, b, c, e) {
        this.activePoint.top = a;
        this.activePoint.left = b;
        this.clampCoordinates_();
        e || this.setChildActiveIndex_();
        c || this.scope.$emit("grid-point-change", this.activePoint);
        this.updateScrollbar_()
    }
    ;
    n.updateScrollbar_ = function() {
        if (this.shouldShowScrollbar()) {
            var a = 100 / this.data.length;
            this.scrollbarModel_.percentageDisplayed = a;
            this.scrollbarModel_.percentageScrolled = this.activePoint.top * a
        }
    }
    ;
    n.childAddedHandler = function(a, b) {
        sj.superClass_.childAddedHandler.call(this, a, b);
        var c = this.childList.length - 1;
        b.scope.childIndex = c;
        this.isActive && c == this.activePoint.top && this.setChildActiveIndex_();
        b.element.hasClass("scrollbar") && this.updateScrollbar_()
    }
    ;
    n.setChildActiveIndex_ = function() {
        var a = this.getChildAt_(this.activePoint.top);
        a && (this.activateChild_(a),
        a.setActiveIndex(this.activePoint.left))
    }
    ;
    n.clampCoordinates_ = function() {
        this.data.length && (this.activePoint.top = Math.min(Math.max(this.activePoint.top, 0), this.data.length - 1),
        this.activePoint.left = Math.min(Math.max(this.activePoint.left, 0), this.data[this.activePoint.top].length - 1))
    }
    ;
    n.getDataRow = function(a) {
        return this.data.length && this.data[a]
    }
    ;
    n.toggleEnabled = function(a) {
        var b = this.childList[this.activePoint.top];
        b && (b = b.getChildAt_(this.activePoint.left)) && b.toggleEnabled(a)
    }
    ;
    n.getItemAt = function(a) {
        var b = this.getChildAt_(a.top);
        return b ? b.getChildAt_(a.left) : j
    }
    ;
    n.shouldShowScrollbar = function() {
        return !(!this.rowCount_ || !(this.data && this.data.length > this.rowCount_))
    }
    ;
    sj.$inject = ["$scope", "$element", "$attrs", "$compile", "scrollbarModel"];
    var tj = function(a, b, c, e, f, g, l) {
        ij.call(this, a, b, c, e, f, g, l);
        this.langCodePair = qi("ja-Hira", "ja")
    };
    F(tj, ij);
    tj.prototype.letterTilePressHandler = function(a, b) {
        if (!this.handleLanguageKeyPress(a, b)) {
            if (this.isModifierToggleKey_(b)) {
                var c = this.searchQueryModel_.query
                  , e = c.slice(-1);
                if (e = sa[b][e])
                    c = c.slice(0, c.length - 1) + e,
                    this.searchQueryModel_.setQuery(c),
                    this.scope.$emit("letter-tile-key-press");
                a.stopPropagation()
            }
            this.getLetterSuggestions() && this.positionLetterSuggest_(this.getCurrentLetter())
        }
    }
    ;
    tj.prototype.getLetterSuggestions = function() {
        return pa[this.getCurrentLetter()] || []
    }
    ;
    tj.prototype.isModifierToggleKey_ = function(a) {
        return J(oa, a)
    }
    ;
    tj.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");
    var uj = function(a, b, c, e, f, g) {
        $.call(this, a, b, c, e, f, g);
        this.jamoToHangul_ = hb(ra);
        this.scope.$watch(z(function() {
            return this.searchQueryModel_.query
        }, this), z(this.applyFoldingRules_, this))
    };
    F(uj, $);
    n = uj.prototype;
    n.applyFoldingRules_ = function(a) {
        a = Na(a.split(""), function(a) {
            return ra[a] || a
        }).join("").replace("\u001d", "").replace(Mi, Si).replace(Ki, function(a) {
            return Gi[a.charCodeAt(0) - 4519 - 1]
        }).replace(Li, function(a) {
            return Ji[a]
        }).replace(Oi, Ui).replace(Oi, Ui).replace(Pi, Ui).replace(Qi, Ui).replace(Ri, Ui).replace(Ni, Ti);
        a = Na(a.split(""), function(a) {
            return this.jamoToHangul_[a] || a
        }, this).join("");
        this.searchQueryModel_.setQuery(a)
    }
    ;
    n.moveDown = function() {
        return this.isLetterSuggestActive() && this.moveVertical_(1) || $.prototype.moveDown.call(this)
    }
    ;
    n.moveUp = function() {
        return this.isKeyboardActive() && this.moveVertical_(-1) || $.prototype.moveUp.call(this)
    }
    ;
    n.moveVertical_ = function(a) {
        return this.getLetters() && this.getLetters()[this.currentPoint.top + a] ? (this.hideLetterSuggest_(),
        this.currentPoint.top += a,
        this.children.keyboard.setActivePoint(this.currentPoint),
        this.attemptEnableLetterSuggestion_(),
        i) : k
    }
    ;
    n.getLetterSuggestions = function() {
        var a = qa[this.getCurrentLetter()];
        return a && a.length ? a : $.prototype.getLetterSuggestions.call(this)
    }
    ;
    n.letterTilePressHandler = function(a, b) {
        this.isDefaultLanguage() ? $.prototype.letterTilePressHandler.call(this, a, b) : (this.hideLetterSuggest_(),
        this.handleLanguageKeyPress(a, b))
    }
    ;
    uj.$inject = "$scope $element $attrs environmentModel locale searchQueryModel locale".split(" ");
    var vj = function(a, b, c, e) {
        Z.call(this, a, b, c, e)
    };
    F(vj, Z);
    vj.prototype.activateDefaultItem = function() {
        if (!this.data || this.activeIndex >= this.data.length)
            this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.data.length - 1);
        vj.superClass_.activateDefaultItem.call(this)
    }
    ;
    vj.prototype.shouldCreateChildren = function() {
        return this.data.length !== this.childList.length
    }
    ;
    vj.$inject = ["$scope", "$element", "$attrs", "$compile"];
    var wj = function(a, b, c) {
        this.name = "tile";
        V.call(this, a, b, c);
        this.className_ = "letter-tile";
        this.labelElement_ = this.element[0].children[0];
        this.scope.$on("keydown", z(function(a, b) {
            switch (b) {
            case 13:
                this.scope.$emit("letter-tile-key-press", this.data)
            }
        }, this))
    };
    F(wj, V);
    n = wj.prototype;
    n.setData = function(a) {
        wj.superClass_.setData.call(this, a);
        this.render()
    }
    ;
    n.dataChangedHandler = function(a) {
        wj.superClass_.dataChangedHandler.call(this, a);
        this.render()
    }
    ;
    n.render = function() {
        this.showElementIf(this.element[0], this.data);
        if (this.data) {
            var a, b = [this.className_];
            this.data.icon ? (b.push(this.data.icon),
            a = "\u00a0") : a = this.data;
            this.setElementText(this.element[0], a);
            this.classNameChangedHandler_(b)
        }
    }
    ;
    n.classNameChangedHandler_ = function(a) {
        var b = this.element[0].className.split(" ");
        b.push.apply(b, a);
        a = {};
        for (var c = 0, e = 0; e < b.length; ) {
            var f = b[e++]
              , g = ga(f) ? "o" + ja(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(a, g) || (a[g] = i,
            b[c++] = f)
        }
        b.length = c;
        this.element[0].className = b.join(" ")
    }
    ;
    n.toggleEnabled = function(a) {
        this.element.toggleClass("disabled", !a)
    }
    ;
    wj.$inject = ["$scope", "$element", "$attrs"];
    var xj = function(a, b, c, e, f, g) {
        this.name = "loginInfo";
        V.call(this, a, b, c);
        this.interpolate_ = e;
        this.authService_ = f;
        this.userProfileService_ = g;
        this.pairingCode = "";
        this.loginState = "guest";
        this.pairingCodeContainer_ = this.getChildElement("#pairing-code-container");
        this.scope.$on("keyup", z(this.keyUpHandler_, this))
    };
    F(xj, V);
    n = xj.prototype;
    n.activate = function() {
        this.initiateAuthenticationFlow_();
        xj.superClass_.activate.call(this)
    }
    ;
    n.keyUpHandler_ = function(a, b) {
        switch (b) {
        case 8:
        case 27:
            this.cancelPolling_()
        }
    }
    ;
    n.initiateAuthenticationFlow_ = function() {
        this.authService_.getPairingCode(z(this.pairingCodeFetchedHandler_, this), z(this.refreshTokenFetchedHandler_, this, this.scope.dialog.data))
    }
    ;
    n.pairingCodeFetchedHandler_ = function(a) {
        this.pairingCode = a;
        a = this.interpolate_('[[<h4>Enter</h4> <div class="pairing-code">{{loginInfo.pairingCode}}</div>|Step that a user needs to perform in order to pair her YouTube account with the application.]]')({
            loginInfo: {
                pairingCode: a
            }
        });
        this.setElementHtml(this.pairingCodeContainer_, a)
    }
    ;
    n.refreshTokenFetchedHandler_ = function(a) {
        this.userProfileService_.loadWithQuery("default", z(function(b) {
            this.user = b;
            this.loginState = "authenticated";
            a.title = "";
            a.completeHandler()
        }, this))
    }
    ;
    n.cancelPolling_ = function() {
        this.authService_.cancelPollingAfterDelay()
    }
    ;
    xj.$inject = "$scope $element $attrs $interpolate authService userProfileService".split(" ");
    var yj = function(a, b, c, e, f) {
        this.name = "message";
        U.call(this, a, b, c);
        this.interpolate_ = e;
        this.data = f;
        this.messageChangedHandler_(this.data.message);
        this.data.on("message:changed", z(this.messageChangedHandler_, this))
    };
    F(yj, U);
    yj.prototype.messageChangedHandler_ = function(a) {
        this.setElementText(this.element[0], this.interpolate_(a || "")(this.scope))
    }
    ;
    yj.$inject = ["$scope", "$element", "$attrs", "$interpolate", "messageModel"];
    var zj = function(a, b, c, e, f, g, l) {
        this.name = "pair";
        U.call(this, a, b, c);
        this.interpolate_ = f;
        this.remoteService_ = g;
        this.angularHelper_ = l;
        this.timeout_ = e;
        this.pairingCodeRefetcher_ = 0;
        this.displayPairingCode = "[[Loading...|Tooltip displayed while mobile devices are connecting with the application.]]";
        this.qrCodeImageUrl = "";
        this.phoneContentElement_ = this.getChildElement(".phone-content");
        this.connectedListElement_ = this.getChildElement(".connected-list");
        this.devicesListElement_ = this.getChildElement(".devices");
        this.remoteService_.getConnectedDevices().on("items:changed", z(this.itemsChangedHandler_, this));
        this.itemsChangedHandler_()
    };
    F(zj, U);
    n = zj.prototype;
    n.activate = function() {
        this.displayPairingCode = "[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]";
        this.qrCodeImageUrl = "";
        this.remoteService_.connect(z(function() {
            this.remoteService_.getLoungeStatus();
            this.fetchPairingCode_()
        }, this))
    }
    ;
    n.deactivate = function() {
        U.prototype.deactivate.call(this);
        0 != this.pairingCodeRefetcher_ && (this.timeout_.cancel(this.pairingCodeRefetcher_),
        this.pairingCodeRefetcher_ = 0)
    }
    ;
    n.formatPairingCode_ = function(a) {
        return a.match(/.../g).join(" ")
    }
    ;
    n.fetchPairingCode_ = function() {
        this.pairingCodeRefetcher_ = this.timeout_(z(this.fetchPairingCode_, this), 3E5, k);
        this.remoteService_.getPairingCode(z(function(a) {
            this.displayPairingCode = this.formatPairingCode_(a);
            this.qrCodeImageUrl = "http://chart.apis.google.com/chart?cht=qr&chs=350x350&chl=http%3A%2F%2Fm.youtube.com%2Fpair%3FpairingCode%3D" + a;
            this.renderDialog_()
        }, this))
    }
    ;
    n.renderDialog_ = function() {
        var a = this.interpolate_('[[<div class="step1">Go To</div> <div class="pair-url">youtube.com/pair</div> <div class="step2">Enter</div> <div class="pair-code">{{pair.displayPairingCode}}</div>|Steps that a user needs to perform in order to pair her mobile device with the application.]]')({
            pair: this
        });
        this.setElementHtml(this.phoneContentElement_, a)
    }
    ;
    n.itemsChangedHandler_ = function() {
        this.showElementIf(this.connectedListElement_, 0 < this.getDevices().getLength());
        var a = "";
        this.getDevices().getItems().forEach(function(b) {
            a += '<li class="' + b.deviceClass() + '">' + b.displayString() + "</li>"
        }, this);
        this.setElementHtml(this.devicesListElement_, a)
    }
    ;
    n.getDevices = function() {
        return this.remoteService_.getConnectedDevices()
    }
    ;
    zj.$inject = "$scope $element $attrs $timeout $interpolate remoteService angularHelper".split(" ");
    var Aj = function(a, b, c) {
        U.call(this, a, b, c);
        setInterval(z(this.logChangedHandler, this), 3E3)
    };
    F(Aj, U);
    Aj.prototype.logChangedHandler = function() {
        var a = (this.scope.$root.$perfLog || []).slice(-15);
        this.element[0].innerHTML = a.map(function(a) {
            return "<li>" + a + "</li>"
        }, this).join("")
    }
    ;
    Aj.$inject = ["$scope", "$element", "$attrs"];
    var Bj = function(a, b, c, e, f) {
        U.call(this, a, b, c);
        this.progressModel_ = e;
        this.playerService_ = f;
        this.loadedElement_ = this.getChildElement(".player-seek-buffer");
        this.playedElement_ = this.getChildElement(".player-seek-active");
        this.listeners_ = []
    };
    F(Bj, U);
    n = Bj.prototype;
    n.enable = function() {
        this.percentageChangedHandler_(this.loadedElement_, this.progressModel_.percentageLoaded);
        this.percentageChangedHandler_(this.playedElement_, this.progressModel_.percentagePlayed);
        this.adStateChangedHandler_(this.playerService_.isPlayingAd);
        this.initializeListeners_()
    }
    ;
    n.disable = function() {
        this.destroyListeners_()
    }
    ;
    n.initializeListeners_ = function() {
        this.destroyListeners_();
        this.listeners_.push(this.playerService_.on("isPlayingAd:changed", z(this.adStateChangedHandler_, this)));
        this.listeners_.push(this.progressModel_.on("percentageLoaded:changed", z(this.percentageChangedHandler_, this, this.loadedElement_)));
        this.listeners_.push(this.progressModel_.on("percentagePlayed:changed", z(this.percentageChangedHandler_, this, this.playedElement_)));
        this.listeners_.push(this.scope.$on("keyup", z(function(a, b, c, e) {
            if (this.isProgressBarClick_(e.target))
                this.onProgressBarClicked(e)
        }, this)))
    }
    ;
    n.destroyListeners_ = function() {
        this.listeners_.forEach(function(a) {
            a()
        });
        this.listeners_.length = 0
    }
    ;
    n.percentageChangedHandler_ = function(a, b) {
        a.style.width = oe(b)
    }
    ;
    n.adStateChangedHandler_ = function(a) {
        this.playedElement_.className = a ? "player-seek-ad" : "player-seek-active";
        this.loadedElement_.className = "player-seek-buffer"
    }
    ;
    n.isProgressBarClick_ = function(a) {
        return "progress-bar" === a.id || "player-seek-buffer" === a.className || "player-seek-active" === a.className
    }
    ;
    n.onProgressBarClicked = function(a) {
        this.playerService_.seekTo(this.progressModel_.duration * (a.offsetX / this.element[0].offsetWidth), i)
    }
    ;
    Bj.$inject = ["$scope", "$element", "$attrs", "progressModel", "playerService"];
    var Cj = function(a, b, c, e) {
        Z.call(this, a, b, c, e);
        this.scrollIndex = 2;
        this.displayCount = 12
    };
    F(Cj, Z);
    Cj.prototype.keyDownHandler = function() {}
    ;
    Cj.prototype.getItemAt = function(a) {
        a = a + this.activeIndex - this.scrollIndex;
        0 > a && (a += this.data.length);
        a %= this.data.length;
        return this.data ? this.data[a] : j
    }
    ;
    Cj.prototype.activeIndexChangedHandler = function(a, b) {
        this.activeIndex = a;
        b && this.scope.$emit("list-item-index-change", this.activeIndex)
    }
    ;
    Cj.prototype.setActiveIndex = function(a) {
        Cj.superClass_.setActiveIndex.call(this, a);
        this.setDataOnChildren()
    }
    ;
    Cj.$inject = ["$scope", "$element", "$attrs", "$compile"];
    var Dj = function(a, b, c) {
        V.call(this, a, b, c);
        this.scope.$on("keydown", z(this.keyDownHandler_, this))
    };
    F(Dj, V);
    Dj.prototype.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 40:
            this.scroll_(1);
            break;
        case 38:
            this.scroll_(-1)
        }
    }
    ;
    Dj.prototype.scroll_ = function(a) {
        var b = this.element[0]
          , c = Math.min(b.scrollHeight / 100, 0.5 * b.offsetHeight);
        b.scrollTop += a * c
    }
    ;
    Dj.$inject = ["$scope", "$element", "$attrs"];
    var Ej = function(a, b, c, e) {
        this.name = "scrollbar";
        U.call(this, a, b, c);
        this.scrollbarModel_ = e;
        this.handleElement_ = this.getChildElement(".handle");
        this.eventHandlers.push(this.scrollbarModel_.on("percentageScrolled:changed", z(this.percentageChangedHandler_, this)))
    };
    F(Ej, U);
    Ej.prototype.percentageChangedHandler_ = function() {
        this.adjustedElementHeight_ || (this.adjustedElementHeight_ = 0.01 * this.element[0].offsetHeight);
        var a = Math.floor(this.adjustedElementHeight_ * this.scrollbarModel_.percentageScrolled);
        this.handleElement_.style.height = Math.floor(this.adjustedElementHeight_ * this.scrollbarModel_.percentageDisplayed) + "px";
        this.handleElement_.style.top = a + "px"
    }
    ;
    Ej.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];
    var Fj = function(a, b, c, e, f, g, l, m) {
        this.name = "search";
        Y.call(this, a, b, c, f, g, l);
        this.searchQueryModel_ = m;
        this.emptyQueryLabel_ = e("[[search|A tooltip indicating that a user can start searching within a text box]] . . . ")(a);
        this.videosAvailable_ = k;
        this.suggestionContainer_ = this.getChildElement(".suggestion");
        this.suggestionElement_ = this.getChildElement(".suggestion-text");
        this.suggestionTriggerElement_ = this.getChildElement(".suggestion-trigger");
        this.searchQueryElement_ = this.getChildElement("#search-query");
        this.scope.$watch(c.query, z(function(a) {
            a && this.searchQueryModel_.setQuery(a)
        }, this));
        this.scope.$on("letter-tile-key-press", z(function(a, b) {
            this.updateSearchModel_(b)
        }, this));
        this.scope.$on("keydown", z(this.keyDownHandler_, this));
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.searchQueryModel_.on("suggestions:changed", z(this.suggestionsChangedHandler_, this));
        this.searchQueryModel_.on("query:changed", z(this.queryChangedHandler_, this));
        this.searchQueryModel_.on("results:changed", z(this.searchResultsChangedHandler_, this));
        this.queryChangedHandler_();
        this.suggestionsChangedHandler_()
    };
    F(Fj, Y);
    n = Fj.prototype;
    n.activate = function() {
        Y.prototype.activate.call(this);
        this.activeChildName = "search-keyboard";
        this.updateMessage()
    }
    ;
    n.keyUpHandler_ = function(a, b, c) {
        switch (b) {
        case 13:
            if (this.isTextBoxActive() || c && J(uc(c), "suggestion-trigger"))
                this.searchQueryModel_.setQuery(this.getTopSuggestion_()),
                this.activeChildName = "search-keyboard";
            a.stopPropagation();
            break;
        case 172:
        case 71:
            a.stopPropagation()
        }
    }
    ;
    n.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 40:
            if (this.searchQueryModel_.isEmpty() || !this.videosAvailable_ || this.moveDown_())
                this.activateChild_(this.children["search-keyboard"]),
                a.stopPropagation();
            break;
        case 38:
            this.moveUp_() && a.stopPropagation();
            break;
        case 172:
        case 71:
            a.stopPropagation(),
            this.searchQueryModel_.backspace()
        }
    }
    ;
    n.isKeyboardActive = function() {
        return "search-keyboard" == this.activeChildName
    }
    ;
    n.isTextBoxActive = function() {
        return "search-text-box" == this.activeChildName
    }
    ;
    n.moveDown_ = function() {
        return this.isTextBoxActive() ? (this.activeChildName = "search-keyboard",
        this.safeDigest(this.scope),
        i) : k
    }
    ;
    n.moveUp_ = function() {
        var a = this.isKeyboardActive()
          , b = this.shouldShowSuggestionTrigger_();
        a && b ? (this.activeChildName = "search-text-box",
        this.safeDigest(this.scope)) : a && !b && this.children["search-keyboard"].activate();
        return i
    }
    ;
    n.getInputStyle = function() {
        return !this.searchQueryModel_.isEmpty() ? "query" : "empty"
    }
    ;
    n.getQueryLabel = function() {
        return this.searchQueryModel_.isEmpty() ? this.emptyQueryLabel_ : this.searchQueryModel_.query.toUpperCase()
    }
    ;
    n.isEmptyResponse = function() {
        return !!this.searchQueryModel_.results && 0 === this.searchQueryModel_.results.getLength()
    }
    ;
    n.shouldShowSuggestionTrigger_ = function() {
        return !(this.searchQueryModel_.isEmpty() || !(this.getTopSuggestion_() && this.getTopSuggestion_() !== this.searchQueryModel_.query))
    }
    ;
    n.getTopSuggestion_ = function() {
        return this.searchQueryModel_.suggestions[0]
    }
    ;
    n.updateSearchModel_ = function(a) {
        "string" == typeof a ? this.searchQueryModel_.addCharacters(a.replace("_", " ")) : this.isDeleteKey_(a) && this.searchQueryModel_.backspace()
    }
    ;
    n.isDeleteKey_ = function(a) {
        return !!(a && "delete-icon" === a.icon)
    }
    ;
    n.queryChangedHandler_ = function() {
        this.isTextBoxActive() && !this.shouldShowSuggestionTrigger_() && (this.activeChildName = "search-keyboard");
        this.setElementText(this.searchQueryElement_, this.getQueryLabel());
        this.searchQueryElement_.className = this.getInputStyle();
        this.showElementIf(this.getChildElement("#search-pairing-help"), this.searchQueryModel_.isEmpty());
        this.showElementIf(this.suggestionContainer_, !this.searchQueryModel_.isEmpty());
        this.updateMessage();
        this.scope.$emit("toggle-loading", !this.searchQueryModel_.isEmpty());
        this.scope.$emit("loaded")
    }
    ;
    n.searchResultsChangedHandler_ = function(a) {
        this.scope.$emit("toggle-loading", k);
        this.scope.$emit("loaded", a);
        0 === a.getLength() ? (this.videosAvailable_ = k,
        this.searchQueryModel_.isEmpty() || this.updateMessage("[[No videos are available|The message shown when a row has no videos to show.]]")) : this.videosAvailable_ = i
    }
    ;
    n.suggestionsChangedHandler_ = function() {
        this.renderSuggestionElements_(this.getTopSuggestion_())
    }
    ;
    n.renderSuggestionElements_ = function(a) {
        this.setElementText(this.suggestionElement_, a || "\u00a0");
        this.showElementIf(this.suggestionTriggerElement_, this.shouldShowSuggestionTrigger_())
    }
    ;
    Fj.$inject = "$scope $element $attrs $interpolate locationService navigationService messageModel searchQueryModel".split(" ");
    var Gj = function(a, b, c, e, f, g, l, m, s) {
        this.name = "search";
        this.isFocusable = k;
        Y.call(this, a, b, c, f, g, l);
        this.timeService_ = s;
        this.searchQueryModel_ = m;
        this.emptyQueryLabel_ = e("[[search|A tooltip indicating that a user can start searching within a text box]] . . . ")(a);
        this.emptyQueryMessage_ = e("[[Use your GamePad to search.|A message that tells Wii U users to use their GamePad controller to enter a search.]]")(a);
        this.isSearchQueryElementFocused_ = this.videosAvailable_ = k;
        this.searchQueryElement = this.getChildElement("#search-query");
        this.scope.$watch(c.query, z(function(a) {
            a && this.searchQueryModel_.setQuery(a)
        }, this));
        this.scope.$on("keydown", z(this.keyDownHandler_, this));
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.searchQueryModel_.on("query:changed", z(this.queryChangedHandler_, this));
        this.searchQueryModel_.on("results:changed", z(this.searchResultsChangedHandler_, this));
        this.searchQueryElement.addEventListener("focus", z(function() {
            this.scope.$emit("search-input-focused")
        }, this), k);
        this.searchQueryElement.addEventListener("blur", z(function() {
            this.scope.$emit("search-input-blurred")
        }, this), k);
        this.queryChangedHandler_()
    };
    F(Gj, Y);
    n = Gj.prototype;
    n.keyUpHandler_ = function(a, b) {
        switch (b) {
        case 40:
        case 37:
        case 39:
        case 38:
            a.stopPropagation();
            a.preventDefault();
            break;
        case 13:
        case 27:
            break;
        default:
            this.searchQueryModel_.setQuery(this.searchQueryElement.textContent, i, i),
            a.stopPropagation()
        }
    }
    ;
    n.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 40:
            if (this.searchQueryModel_.isEmpty() || !this.videosAvailable_)
                a.stopPropagation(),
                a.preventDefault();
            break;
        case 38:
            a.stopPropagation();
            a.preventDefault();
            break;
        case 27:
            break;
        default:
            a.stopPropagation()
        }
    }
    ;
    n.isTextBoxActive = function() {
        return "search-query" === this.activeChildName
    }
    ;
    n.activate = function() {
        Gj.superClass_.activate.call(this);
        this.searchQueryScope_ = angular.element(this.searchQueryElement).scope();
        this.activateChild_(this.searchQueryScope_.focusable);
        this.videosAvailable_ || this.updateMessage(this.emptyQueryMessage_)
    }
    ;
    n.queryChangedHandler_ = function(a) {
        this.isActive && this.updateMessage(a ? "" : this.emptyQueryMessage_);
        this.searchQueryElement.textContent = a || "";
        this.scope.$emit("toggle-loading", !this.searchQueryModel_.isEmpty());
        this.scope.$emit("loaded")
    }
    ;
    n.searchResultsChangedHandler_ = function(a) {
        this.scope.$emit("toggle-loading", k);
        this.scope.$emit("loaded", a);
        0 === a.getLength() ? (this.videosAvailable_ = k,
        this.searchQueryModel_.isEmpty() || this.updateMessage("[[No videos are available|The message shown when a row has no videos to show.]]")) : this.videosAvailable_ = i
    }
    ;
    Gj.$inject = "$scope $element $attrs $interpolate locationService navigationService messageModel searchQueryModel timeService".split(" ");
    var Hj = function(a, b, c, e, f, g) {
        this.name = "toasts";
        V.call(this, a, b, c);
        this.timeService_ = e;
        this.templateClient_ = g;
        this.rollingToasts_ = [];
        this.staticToast_ = j;
        this.staticToastsElement_ = this.getChildElement(".static-toasts");
        this.rollingToasts_Element_ = this.getChildElement(".rolling-toasts");
        f.$on(Yh, z(this.handleRemoteToast_, this));
        this.showElementIf(this.staticToastsElement_, k)
    };
    F(Hj, V);
    n = Hj.prototype;
    n.hasToasts = function() {
        return 0 < this.rollingToasts_.length || this.staticToast_ != j
    }
    ;
    n.handleRemoteToast_ = function(a, b) {
        switch (b.action) {
        case "remoteConnected":
            if ("remote-pair" != this.data && "remote-reset" != this.data) {
                var c = b.params.device;
                this.showConnectedToast_(c, i)
            }
            break;
        case "remoteDisconnected":
            "remote-pair" != this.data && "remote-reset" != this.data && (c = b.params.device,
            this.showConnectedToast_(c, k));
            break;
        case "setVolume":
            this.showVolumeToast_(b.params.volume);
            break;
        case "showQrCode":
            this.staticToast_ && this.staticToast_.nextAction && this.timeService_.clearTimeout(this.staticToast_.nextAction);
            this.staticToast_ = new te(R.htmlPath + "/remote_share_toast.html",{
                qrCodeClass: "shown",
                qrCodeImage: b.params.url
            });
            this.fetchStaticToast_();
            break;
        case "hideQrCode":
            this.staticToast_ && "shown" == this.staticToast_.data.qrCodeClass && (this.showElementIf(this.staticToastsElement_, k),
            this.staticToast_.data.qrCodeClass = "",
            this.staticToast_.nextAction = this.timeService_.setTimeout(z(function() {
                this.staticToast_ && "" === this.staticToast_.qrCodeClass && (this.staticToast_ = j)
            }, this), 700));
            break;
        default:
            return
        }
        this.fetchRollingToasts_();
        this.showElementIf(this.element[0], this.hasToasts())
    }
    ;
    n.fetchStaticToast_ = function() {
        this.templateClient_.get(this.staticToast_.templateUrl, {}, z(this.renderStaticToast_, this))
    }
    ;
    n.renderStaticToast_ = function(a) {
        this.setElementHtml(this.staticToastsElement_, a);
        this.getChildElement(".qr-code-container").className += " " + this.staticToast_.data.qrCodeClass;
        this.getChildElement(".qr-code-image").src = this.staticToast_.data.qrCodeImage;
        this.showElementIf(this.staticToastsElement_, i)
    }
    ;
    n.fetchRollingToasts_ = function() {
        0 < this.rollingToasts_.length && this.templateClient_.get(R.htmlPath + "/rolling_toast.html", {}, z(this.renderRollingToasts_, this))
    }
    ;
    n.renderRollingToasts_ = function(a) {
        this.setElementHtml(this.rollingToasts_Element_, "");
        var b, c, e, f, g;
        this.rollingToasts_.forEach(function(l) {
            this.rollingToasts_Element_.innerHTML += a;
            var m = this.rollingToasts_Element_.children;
            b = m[m.length - 1];
            b.id = this.getToastId_(l.id);
            b.className += " " + l.className + " " + (l.animationClass || "");
            c = Yf(".toast-icon", b)[0];
            c.className += " " + l.imageClass;
            e = Yf(".toast-progress", b)[0];
            e.style.display = l.showProgress ? "" : "none";
            f = Yf(".progress", e)[0];
            f.style.width = l.progress + "%";
            g = Yf(".toast-msg", b)[0];
            this.setElementHtml(g, l.message)
        }, this)
    }
    ;
    n.showVolumeToast_ = function(a) {
        var b = this.getToast_("vol", i, 7500)
          , c = Math.round(a / 10);
        b.className = "volume-toast";
        b.showProgress = i;
        b.progress = a;
        b.message = "" + c;
        b.imageClass = 8 <= c ? "volume-high" : 4 <= c ? "volume-mid" : 1 <= c ? "volume-low" : "volume-muted"
    }
    ;
    n.showConnectedToast_ = function(a, b) {
        var c = this.getToast_(a.id, k, 5E3);
        c.className = "remote-connect";
        c.imageClass = b ? "remote-connected" : "remote-disconnected";
        c.message = a.displayString()
    }
    ;
    n.getToast_ = function(a, b, c) {
        var e = a ? Ra(this.rollingToasts_, function(b) {
            return b.id === a
        }) : j;
        e ? (this.timeService_.clearTimeout(e.nextAction),
        (b = document.getElementById(this.getToastId_(e.id))) && wc(b, e.animationClass)) : (e = new de,
        e.id = a || ja(e).toString(),
        b ? this.rollingToasts_.unshift(e) : this.rollingToasts_.push(e));
        e.nextAction = this.timeService_.setTimeout(z(this.removeToastBegin_, this, e), c);
        return e
    }
    ;
    n.removeToastBegin_ = function(a) {
        var b = document.getElementById(this.getToastId_(a.id));
        vc(b, "toast-roll");
        a.nextAction = this.timeService_.setTimeout(z(this.removeToastEnd_, this, a.id), 700)
    }
    ;
    n.removeToastEnd_ = function(a) {
        this.rollingToasts_ = this.rollingToasts_.filter(function(b) {
            return b.id != a
        });
        Nc(document.getElementById(this.getToastId_(a)))
    }
    ;
    n.getToastId_ = function(a) {
        return "toast-" + a
    }
    ;
    Hj.$inject = "$scope $element $attrs timeService $rootScope templateClient".split(" ");
    var Ij = function(a, b, c, e, f, g, l) {
        this.name = "transliteration";
        U.call(this, a, b, c);
        this.searchQueryModel_ = e;
        this.transliterationService_ = f;
        this.transliterationModel_ = g;
        this.langCodePair_ = this.scope.$eval(c.langCodePair);
        this.transliterateThrottle_ = new sf(this.executeTransliteration_,500,this);
        this.activeItemIndex = 0;
        this.results = [];
        this.previousSearch_ = this.queryToTransliterate_ = "";
        l.requiresTransliteration() && this.scope.$watch(z(function() {
            return this.searchQueryModel_.query.toLowerCase()
        }, this), z(this.handleSearchQueryChange_, this));
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.scope.$on("list-item-index-change", z(this.listIndexChangeHandler_, this))
    };
    F(Ij, U);
    n = Ij.prototype;
    n.activate = function() {
        Ij.superClass_.activate.call(this);
        this.activateChild_(this.children.transliteration)
    }
    ;
    n.deactivate = function() {
        Ij.superClass_.deactivate.call(this);
        this.deactivateChild_(this.children.transliteration)
    }
    ;
    n.handleSearchQueryChange_ = function(a) {
        if (a) {
            var b = a.length < this.previousSearch_.length
              , c = this.extractBuffer_(a);
            !c && b && (c = this.getPreviousBuffer_(a));
            this.transliterationModel_.setBuffer(c);
            (this.queryToTransliterate_ = c) && this.transliterateThrottle_.start();
            this.previousSearch_ = a
        } else
            this.clearResults_(),
            this.transliterationModel_.setBuffer(""),
            this.queryToTransliterate_ = ""
    }
    ;
    n.executeTransliteration_ = function() {
        this.transliterationService_.transliterate(this.queryToTransliterate_, this.langCodePair_, z(this.handleResults_, this))
    }
    ;
    n.extractBuffer_ = function(a) {
        var b = ""
          , c = this.transliterationModel_.getJoinedTransliteration();
        -1 != a.indexOf(c) && (b = a.replace(c, ""));
        return b
    }
    ;
    n.getPreviousBuffer_ = function(a) {
        for (var b = ""; !b && 0 < this.transliterationModel_.transliterated.length; )
            this.transliterationModel_.transliterated.pop(),
            b = this.extractBuffer_(a);
        return b
    }
    ;
    n.handleResults_ = function(a) {
        0 < a[1][0].length && this.queryToTransliterate_ ? (this.results = a[1][0][1],
        this.children.transliteration.setData(this.results),
        this.activeItemIndex = 0) : this.clearResults_()
    }
    ;
    n.clearResults_ = function() {
        this.results.length = 0;
        this.transliterateThrottle_.stop();
        this.children.transliteration.setData(this.results)
    }
    ;
    n.keyUpHandler_ = function(a, b) {
        13 === b && (this.transliterationModel_.transliterated.push(this.results[this.activeItemIndex]),
        this.previousSearch_ = this.transliterationModel_.getJoinedTransliteration(),
        this.searchQueryModel_.setQuery(this.previousSearch_),
        this.clearResults_(),
        this.scope.$emit("transliteration-selected"),
        a.stopPropagation())
    }
    ;
    n.listIndexChangeHandler_ = function(a, b) {
        this.activeItemIndex = b
    }
    ;
    Ij.$inject = "$scope $element $attrs searchQueryModel transliterationService transliterationModel locale".split(" ");
    var Jj = function(a, b, c) {
        var e;
        a: if (e = String(c).replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        }),
        a.style[e] === h) {
            var f = M ? "Webkit" : Lb ? "Moz" : L ? "ms" : Kb ? "O" : j
              , g = y(h) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            c = c.replace(RegExp("(^" + (g ? "|[" + g + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
                return b + c.toUpperCase()
            });
            f += c;
            if (a.style[f] !== h) {
                e = f;
                break a
            }
        }
        e && (a.style[e] = b)
    };
    var Kj = function(a, b, c, e, f, g, l, m) {
        this.name = "transport";
        mj.call(this, a, b, c, e);
        this.playerService_ = f;
        this.locale_ = g;
        this.location_ = l;
        this.progressModel_ = m;
        this.deferredTimeoutDelay = 4250;
        this.listeners_ = [];
        this.controlsListData = [{
            id: "transport-browse-button",
            className: "icon-home",
            clickHandler: z(function() {
                this.scope.transport.onBrowseClicked()
            }, this)
        }, {
            id: "transport-search-button",
            className: "icon-search",
            clickHandler: z(function() {
                this.scope.transport.onSearchClicked()
            }, this)
        }, {
            disabled: i,
            id: "transport-rw-button",
            className: "icon-player-rew",
            downHandler: z(function() {
                this.scope.transport.onRewindClicked()
            }, this)
        }, {
            defaultActive: i,
            id: "transport-playpause-button",
            className: "icon-player-pause",
            clickHandler: z(function() {
                this.scope.transport.togglePlaying()
            }, this)
        }, {
            disabled: i,
            id: "transport-ff-button",
            className: "icon-player-ff",
            downHandler: z(function() {
                this.scope.transport.onFastForwardClicked()
            }, this)
        }, {
            highlighted: k,
            id: "transport-closed-captions-button",
            className: "icon-player-closedcaptions",
            clickHandler: z(function() {
                this.scope.transport.onCcClicked()
            }, this)
        }, {
            disabled: i,
            id: "transport-flag-button",
            className: "icon-flag",
            clickHandler: z(function() {
                this.scope.transport.onFlagClicked()
            }, this)
        }];
        this.transportControlsElement_ = Ac("player-controls-container");
        this.inPlayerControlsElement_ = Dc("html5-video-controls");
        this.timeElapsedElement_ = this.getChildElement(".player-time-elapsed");
        this.totalTimeElement_ = this.getChildElement(".player-time-total");
        this.initializeListeners_()
    };
    F(Kj, mj);
    n = Kj.prototype;
    n.initializeListeners_ = function() {
        this.destroyListeners_();
        this.listeners_.push(this.scope.$on("keydown", z(function(a, b) {
            this.deferredActivate();
            switch (b) {
            case 37:
            case 39:
                a.stopPropagation()
            }
        }, this)));
        this.listeners_.push(this.scope.$on("keyup", z(function(a, b) {
            this.deferredActivate();
            switch (b) {
            case 37:
            case 39:
                a.stopPropagation()
            }
        }, this)));
        this.listeners_.push(this.scope.$root.$on("mousemove", z(this.mouseMoveHandler_, this)));
        this.listeners_.push(this.playerService_.on("isPlaying:changed", z(this.videoPlayingHandler_, this)));
        this.listeners_.push(this.playerService_.on("isPlayingAd:changed", z(this.adStateChangedHandler_, this)));
        this.listeners_.push(this.playerService_.on("state:changed", z(this.playerStateChangedHandler_, this)));
        this.listeners_.push(this.progressModel_.on("duration:changed", z(this.timeChangedHandler_, this, this.totalTimeElement_)));
        this.listeners_.push(this.progressModel_.on("currentTime:changed", z(this.timeChangedHandler_, this, this.timeElapsedElement_)))
    }
    ;
    n.destroyListeners_ = function() {
        this.listeners_.forEach(function(a) {
            a()
        });
        this.listeners_.length = 0
    }
    ;
    n.activate = function() {
        this.playerService_.isPlaying ? mj.prototype.activate.call(this) : V.prototype.activate.call(this);
        this.shiftPlayerControls_();
        this.activateChild_(this.children["player-controls"]);
        this.enable()
    }
    ;
    n.deactivate = function() {
        mj.prototype.deactivate.call(this);
        this.shiftPlayerControls_();
        this.deactivateChild_(this.children["player-controls"]);
        this.disable()
    }
    ;
    n.enable = function() {
        this.adStateChangedHandler_(this.playerService_.isPlayingAd);
        this.videoPlayingHandler_(this.playerService_.isPlaying);
        this.playerStateChangedHandler_(this.playerService_.state);
        this.timeChangedHandler_(this.totalTimeElement_, this.progressModel_.duration);
        this.timeChangedHandler_(this.timeElapsedElement_, this.progressModel_.currentTime);
        this.initializeListeners_();
        var a = this.children["progress-bar"];
        a && a.enable()
    }
    ;
    n.disable = function() {
        this.destroyListeners_();
        this.children["progress-bar"].disable()
    }
    ;
    n.deferredActivateHandler = function() {
        this.playerService_.isPlaying && this.isActive && (this.location_.mode(j),
        this.scope.$emit("hidden"))
    }
    ;
    n.childAddedHandler = function(a, b) {
        Kj.superClass_.childAddedHandler.call(this, a, b);
        "player-controls" === b.id && this.setDataOnControls_()
    }
    ;
    n.adStateChangedHandler_ = function(a) {
        this.toggleVideoControls_(!a)
    }
    ;
    n.timeChangedHandler_ = function(a, b) {
        this.setElementText(a, this.locale_.formatTime(b))
    }
    ;
    n.videoPlayingHandler_ = function(a) {
        a && this.deferredActivate();
        this.toggleVideoControls_(!this.playerService_.isPlayingAd);
        this.updateClosedCaptionsControl_();
        this.getControlModelById_("transport-playpause-button").className = a ? "icon-player-pause" : "icon-player-play";
        this.setDataOnControls_()
    }
    ;
    n.playerStateChangedHandler_ = function(a) {
        -1E3 === a && this.toggleVideoControls_(k);
        this.updateClosedCaptionsControl_()
    }
    ;
    n.mouseMoveHandler_ = function() {
        this.deferredActivate()
    }
    ;
    n.updateClosedCaptionsControl_ = function() {
        var a = this.playerService_.supportsSubtitles();
        this.getControlModelById_("transport-closed-captions-button").disabled = !a;
        a && (a = this.playerService_.getCurrentSubtitleTrack(),
        this.getControlModelById_("transport-closed-captions-button").highlighted = !gb(a))
    }
    ;
    n.toggleVideoControls_ = function(a) {
        this.getControlModelById_("transport-ff-button").disabled = !a;
        this.getControlModelById_("transport-rw-button").disabled = !a;
        this.getControlModelById_("transport-flag-button").disabled = !a;
        this.setDataOnControls_()
    }
    ;
    n.togglePlaying = function() {
        this.getPlayerService_().togglePlaying()
    }
    ;
    n.onBrowseClicked = function() {
        this.location_.state("browse", {});
        this.safeDigest()
    }
    ;
    n.onFastForwardClicked = function() {
        this.deferredActivate();
        this.getPlayerService_().seekRelative(10)
    }
    ;
    n.onRewindClicked = function() {
        this.deferredActivate();
        this.getPlayerService_().seekRelative(-10)
    }
    ;
    n.onSearchClicked = function() {
        this.location_.mode("search");
        this.safeDigest()
    }
    ;
    n.onFlagClicked = function() {
        this.playerService_.pause();
        this.scope.$emit("request-flag-options")
    }
    ;
    n.onCcClicked = function() {
        this.playerService_.pause();
        this.scope.$emit("request-cc-options")
    }
    ;
    n.getPlayerService_ = function() {
        return this.playerService_
    }
    ;
    n.getControlModelById_ = function(a) {
        return Ra(this.controlsListData, function(b) {
            return b.id === a
        })
    }
    ;
    n.markControlModelDirty_ = function() {
        this.controlsListData = this.controlsListData.slice()
    }
    ;
    n.setDataOnControls_ = function() {
        this.children["player-controls"].setData(this.controlsListData)
    }
    ;
    n.getDuration = function() {
        return this.playerService_.duration
    }
    ;
    n.getCurrentTime = function() {
        return this.playerService_.currentTime
    }
    ;
    n.shiftPlayerControls_ = function() {
        if (this.transportControlsElement_ && this.inPlayerControlsElement_) {
            var a = this.transportControlsElement_.getBoundingClientRect()
              , b = "2em";
            a.top && (b = Math.round(Ic(window) - a.top) + "px");
            a = this.inPlayerControlsElement_;
            y("bottom") ? Jj(a, b, "bottom") : cb("bottom", ma(Jj, a))
        }
    }
    ;
    Kj.$inject = "$scope $element $attrs $timeout playerService locale locationService progressModel".split(" ");
    var Lj = function(a, b, c, e) {
        this.name = "transportControlsList";
        Z.call(this, a, b, c, e)
    };
    F(Lj, Z);
    n = Lj.prototype;
    n.activate = function() {
        Z.prototype.activate.call(this);
        this.activateDefaultItem()
    }
    ;
    n.shouldCreateChildren = function() {
        return 0 === this.element.children().length
    }
    ;
    n.createChild = function() {
        return "<div yt:focusable></div>"
    }
    ;
    n.setDataOnChildren = function() {
        for (var a = this.element.children(), b = a.length, c = 0; c < b; ++c)
            a[c].className = this.getItemClass(c)
    }
    ;
    n.getItemClass = function(a) {
        var b = ["item"];
        if (this.data) {
            var c = this.data[a];
            c && (b.push(c.className),
            c.disabled && b.push("disabled-button"),
            c.highlighted && b.push("highlighted"))
        }
        a === this.activeIndex && b.push("active");
        return b.join(" ")
    }
    ;
    n.keyDownHook = function(a, b, c) {
        if (this.isActive)
            switch (this.scope.transport.deferredActivate(),
            b) {
            case 37:
            case 39:
                a.stopPropagation();
                break;
            case 13:
                this.downHandler_(this.data[this.getEventTargetIndex_(c)]),
                a.stopPropagation()
            }
    }
    ;
    n.keyUpHook = function(a, b, c) {
        if (this.isActive)
            switch (this.scope.transport.deferredActivate(),
            b) {
            case 37:
            case 39:
                a.stopPropagation();
                break;
            case 13:
                this.clickHandler_(this.data[this.getEventTargetIndex_(c)]),
                a.stopPropagation()
            }
    }
    ;
    n.getEventTargetIndex_ = function(a) {
        if (a && a.className) {
            a = a.className.split(" ");
            for (var b = a.length, c = this.data, e = c.length, f, g = 0; g < e; ++g) {
                f = c[g];
                for (var l = 0; l < b; ++l)
                    if (f.className === a[l])
                        return g
            }
        }
        return this.activeIndex
    }
    ;
    n.clickHandler_ = function(a) {
        a && !a.disabled && a.clickHandler && a.clickHandler()
    }
    ;
    n.downHandler_ = function(a) {
        a && !a.disabled && a.downHandler && a.downHandler()
    }
    ;
    n.isActivatable = function(a) {
        return !this.data[a].disabled
    }
    ;
    n.activateDefaultItem = function() {
        for (var a = this.scope.transport.controlsListData.length, b = 0; b < a; ++b)
            if (this.data[b].defaultActive) {
                this.activeIndexChangedHandler(b, k);
                break
            }
    }
    ;
    n.activeIndexChangedHandler = function(a) {
        var b = this.element.children()
          , c = this.activeIndex;
        this.activeIndex = a;
        if (a = b[c])
            a.className = this.getItemClass(c);
        if (b = b[this.activeIndex])
            b.className = this.getItemClass(this.activeIndex),
            b.focus()
    }
    ;
    Lj.$inject = ["$scope", "$element", "$attrs", "$compile"];
    var Mj = function(a, b, c, e, f, g) {
        this.name = "videoTile";
        Xi.call(this, a, b, c);
        this.interpolate_ = e;
        this.titleElement_ = this.getChildElement(".title");
        this.uploaderElement_ = this.getChildElement(".name");
        this.updatedElement_ = this.getChildElement(".updated");
        this.activityContainerElement_ = this.getChildElement(".activity");
        this.durationElement_ = this.getChildElement(".duration");
        this.videoThumbElement_ = this.getChildElement(".video-thumb");
        this.activityThumbElement_ = this.getChildElement(".activity");
        this.environmentModel_ = f;
        this.timeService_ = g;
        this.rendererName = "videotile"
    };
    F(Mj, Xi);
    Mj.prototype.setData = function(a) {
        Mj.superClass_.setData.call(this, a);
        this.render()
    }
    ;
    Mj.prototype.render = function() {
        this.showElementIf(this.element[0], this.data);
        this.data ? (this.element.addClass(this.data.className),
        this.setElementText(this.titleElement_, this.data.title),
        this.setElementText(this.uploaderElement_, this.data.channel.displayName),
        this.setElementText(this.updatedElement_, this.data.uploadedDateLabel),
        this.showElementIf(this.activityContainerElement_, this.data.activityDescription),
        this.setElementText(this.activityContainerElement_, this.interpolate_(this.data.activityDescription)({
            username: this.data.authorName
        })),
        this.showElementIf(this.durationElement_, this.data.durationLabel),
        this.setElementText(this.durationElement_, this.data.durationLabel),
        this.environmentModel_.isOpera ? (this.videoThumbElement_.style.backgroundImage = "url(" + R.imgPath + "/clear.png)",
        this.imageTimeout_ = this.timeService_.setTimeout(z(this.setImages_, this), 200)) : this.setImages_()) : this.imageTimeout_ && (this.timeService_.clearTimeout(this.imageTimeout_),
        this.imageTimeout_ = NaN)
    }
    ;
    Mj.prototype.setImages_ = function() {
        this.videoThumbElement_.style.backgroundImage = "url(" + this.data.imageUrl + ")";
        this.data.authorImageUrl && (this.activityThumbElement_.style.backgroundImage = "url(" + this.data.authorImageUrl + ")")
    }
    ;
    Mj.$inject = "$scope $element $attrs $interpolate environmentModel timeService".split(" ");
    var Nj = function(a, b, c, e, f, g, l, m, s, r, A, u, D, x) {
        this.name = "watch";
        Y.call(this, a, b, c, m, s, e);
        this.attrs_ = c;
        this.videoInfoService_ = l;
        this.brandingService_ = f;
        this.userProfileService_ = g;
        this.spinnerTrackingService_ = A;
        this.timeService_ = u;
        this.environment_ = D;
        this.watchModel_ = x;
        this.currentVideo_ = this.currentAd_ = j;
        this.trayLastHiddenTime_ = 0;
        this.adProfileModel = j;
        this.playerService_ = r;
        this.brandingContainer_ = this.getChildElement("#branding-container");
        this.watermarkElement_ = this.brandingBannerOverlay_ = this.brandingBannerImage_ = this.brandingBannerElement_ = j;
        this.initializeListeners_()
    };
    F(Nj, Y);
    n = Nj.prototype;
    n.activate = function() {
        this.locationService_.modeEquals("transport") && (this.activeChildName = "transport");
        Y.prototype.activate.call(this)
    }
    ;
    n.shouldBeAddedToNavHistory = function() {
        return this.locationService_.modeEquals("search") || !this.locationService_.mode()
    }
    ;
    n.shouldBeAddedToNavSequence = function() {
        return k
    }
    ;
    n.deactivate = function() {
        Y.prototype.deactivate.call(this);
        this.scope.$emit("toggle-loading", k)
    }
    ;
    n.dataChangedHandler = function(a) {
        (this.currentVideo_ = a) ? (this.addNavigationSequence(),
        this.videoId_ = a.videoId,
        this.updateBrandingModel_(),
        this.loadVideo_(),
        this.scope.$emit(Uh, a.videoId)) : (this.videoId_ = "",
        this.getPlayerService().stop())
    }
    ;
    n.loadVideo_ = function() {
        this.scope.$emit("toggle-loading", i);
        this.playerService_.clearMarkers();
        this.getPlayerService().loadVideo()
    }
    ;
    n.startTimeChangeHandler_ = function(a) {
        this.startTime_ = a || 0
    }
    ;
    n.isTransportActive = function() {
        return this.isActive && "transport" === this.activeChildName
    }
    ;
    n.isTitleMode = function() {
        return this.locationService_.modeEquals("title")
    }
    ;
    n.initializeListeners_ = function() {
        this.scope.$on("$routeChangeSuccess", z(this.afterRouteChangeHandler_, this));
        this.scope.$on("hidden", z(this.transportHiddenHandler_, this));
        this.scope.$on("keyup", z(this.keyUpHandler_, this));
        this.scope.$on("keydown", pg(5, z(this.keyDownHandler_, this), function(a, b) {
            return 228 === b || 227 === b
        }));
        this.playerService_.on("isPlayingAd:changed", z(this.isPlayingAdHandler_, this));
        this.playerService_.on("state:changed", z(this.stateChangedHandler_, this))
    }
    ;
    n.afterRouteChangeHandler_ = function(a, b) {
        b && b.params && b.params.mode && "transport" === b.params.mode ? this.activeChildName = "transport" : this.isActive && (this.activeChildName = j,
        this.focus())
    }
    ;
    n.transportHiddenHandler_ = function() {
        this.trayLastHiddenTime_ = this.timeService_.getCurrentTime().getTime()
    }
    ;
    n.isPlayingAdHandler_ = function(a) {
        if (a) {
            this.brandingContainer_.style.display = "none";
            var b = this.playerService_.adVideoId;
            b && this.loadAdData_(b);
            this.scope.$emit(Th, 1081)
        } else
            this.brandingContainer_.style.display = "block",
            this.clearAdData_();
        this.showElementIf(Yf(".advertisement-callout", this.element[0])[0], a)
    }
    ;
    n.stateChangedHandler_ = function(a) {
        switch (a) {
        case 3:
            this.spinnerTrackingService_.addToken();
            this.scope.$emit("toggle-loading", i);
            break;
        case 2:
            this.togglePlayStateClass_(k);
            this.scope.$emit("toggle-loading", k);
            break;
        case 1:
            this.togglePlayStateClass_(i);
            this.scope.$emit("toggle-loading", k);
            break;
        case -1E3:
            this.scope.$emit("toggle-loading", k),
            this.onPlayerError_()
        }
        this.scope.$emit(Th, a)
    }
    ;
    n.togglePlayStateClass_ = function(a) {
        this.element.toggleClass("play", a);
        this.element.toggleClass("pause", !a)
    }
    ;
    n.loadAdData_ = function(a) {
        this.videoInfoService_.loadWithQuery(a, z(function(a) {
            a.watchables.getItemAt(0) && (this.currentAd_ = a.watchables.getItemAt(0),
            this.adProfileModel = this.userProfileService_.loadWithQuery(this.currentAd_.channel.username))
        }, this))
    }
    ;
    n.clearAdData_ = function() {
        this.adProfileModel = this.currentAd_ = j
    }
    ;
    n.keyDownHandler_ = function(a, b) {
        switch (b) {
        case 228:
            this.playerService_.seekRelative(10);
            break;
        case 227:
            this.playerService_.seekRelative(-10)
        }
    }
    ;
    n.keyUpHandler_ = function(a, b) {
        switch (b) {
        case 39:
        case 176:
            this.playerService_.isPlayingAd || this.scope.$emit("next-video");
            a.stopPropagation();
            break;
        case 37:
        case 177:
            this.playerService_.isPlayingAd || this.scope.$emit("previous-video");
            a.stopPropagation();
            break;
        case 179:
            this.playerService_.togglePlaying();
            a.stopPropagation();
            break;
        case 19:
            this.playerService_.pause();
            break;
        case 250:
            this.playerService_.play();
            a.stopPropagation();
            break;
        case 8:
        case 27:
            this.playerService_.isPlaying && this.isTransportActive() && (this.locationService_.mode(j),
            a.stopPropagation(),
            a.preventDefault())
        }
        if ((27 === b || 8 === b) && this.trayLastHiddenTime_ + 1E3 > this.timeService_.getCurrentTime().getTime())
            a.stopPropagation(),
            a.preventDefault()
    }
    ;
    n.getBranding = function() {
        return this.getCurrentVideo() && this.getCurrentVideo().channel ? this.getCurrentVideo().channel.branding : j
    }
    ;
    n.updateBrandingModel_ = function() {
        var a = this.getCurrentVideo();
        a && (this.hideAllBranding_(),
        this.playerService_.clearMarkers(),
        this.getCurrentVideo().channel.branding = this.brandingService_.loadWithQuery(a.channel.username, z(this.initializeBrandingForVideo_, this)))
    }
    ;
    n.ensureBrandingElements_ = function() {
        this.brandingBannerElement_ || (this.brandingBannerElement_ = this.getChildElement("#branding-banner"),
        this.brandingBannerImage_ = this.getChildElement("#branding-banner-image"),
        this.brandingBannerOverlay_ = this.getChildElement("#branding-banner-overlay"));
        this.watermarkElement_ || (this.watermarkElement_ = this.getChildElement("#branding-watermark"))
    }
    ;
    n.initializeBrandingForVideo_ = function() {
        var a = this.getBranding()
          , b = 15;
        this.ensureBrandingElements_();
        this.playerService_.clearMarkers();
        if (a && a.brandingBannerUrl)
            this.playerService_.addMarker("show-branding-banner-start", 0.1, z(this.showBrandingBannerHandler_, this)),
            this.playerService_.addMarker("hide-branding-banner", 5, z(this.hideBrandingBannerHandler_, this));
        else if (this.environment_.isExperimentActive(927901) || this.environment_.isExperimentActive(927903)) {
            b = this.watchModel_.getNextVideo();
            if (!b || !b.channel)
                return;
            a = new Ad;
            a.hasOverlay = i;
            a.brandingBannerUrl = b.imageUrls.mqdefault;
            this.getCurrentVideo().channel.branding = a;
            b = 8
        } else {
            this.hideAllBranding_();
            this.playerService_.clearMarkers();
            return
        }
        this.playerService_.addMarker("show-branding-banner-end", this.getCurrentVideo().duration - b, z(this.showBrandingBannerHandler_, this))
    }
    ;
    n.hideAllBranding_ = function() {
        this.ensureBrandingElements_();
        this.brandingBannerElement_.style.display = "none";
        this.watermarkElement_.style.display = "none"
    }
    ;
    n.hideBrandingBannerHandler_ = function() {
        this.brandingBannerElement_.style.display = "none";
        this.brandingBannerOverlay_.style.display = "none";
        var a = this.getBranding();
        this.watermarkElement_.style.display = a && a.watermarkUrl ? "block" : "none"
    }
    ;
    n.showBrandingBannerHandler_ = function() {
        var a = this.getBranding();
        this.watermarkElement_.src = a.watermarkUrl;
        this.brandingBannerImage_.src = a.brandingBannerUrl;
        this.watermarkElement_.style.display = "none";
        this.brandingBannerElement_.style.display = "block";
        this.brandingBannerOverlay_.style.display = a.hasOverlay ? "block" : "none"
    }
    ;
    n.onPlayerError_ = function() {
        this.scope.$emit(this.playerService_.needsLogin ? "request-age-gate-login" : "request-player-error", this.playerService_.errorMessage)
    }
    ;
    n.getPlayerService = function() {
        return this.playerService_
    }
    ;
    n.getCurrentVideo = function() {
        return this.playerService_.isPlayingAd ? this.getCurrentAd() : this.currentVideo_
    }
    ;
    n.getCurrentAd = function() {
        return this.currentAd_
    }
    ;
    Nj.$inject = "$scope $element $attrs messageModel brandingService userProfileService videoInfoService locationService navigationService playerService spinnerTrackingService timeService environmentModel watchModel".split(" ");
    var Oj = function(a, b, c, e, f, g) {
        this.name = "title";
        mj.call(this, a, b, c, e);
        this.location_ = f;
        this.deferredTimeoutDelay = 4250;
        this.channelAvatarElement_ = this.getChildElement("img");
        this.videoTitleElement_ = this.getChildElement(".player-video-title");
        this.channelNameElement_ = this.getChildElement(".username");
        this.uploadedDateElement_ = this.getChildElement(".uploaded-date");
        this.viewCountElement_ = this.getChildElement(".view-count-value");
        g.on("isPlayingAd:changed", z(function(a) {
            this.showElementIf(this.element[0], !a)
        }, this))
    };
    F(Oj, mj);
    Oj.prototype.deferredActivateHandler = function() {
        this.location_.mode(j)
    }
    ;
    Oj.prototype.dataChangedHandler = function(a) {
        a && (this.channelAvatarElement_.src = a.channel.imageUrl,
        this.setElementText(this.videoTitleElement_, a.title),
        this.setElementText(this.channelNameElement_, a.channel.displayName),
        this.setElementText(this.uploadedDateElement_, a.uploadedDateLabel),
        this.setElementText(this.viewCountElement_, a.viewCountLabel),
        this.showElementIf(this.viewCountElement_, a.viewCountLabel))
    }
    ;
    Oj.$inject = "$scope $element $attrs $timeout locationService playerService".split(" ");
    var R = angular.module("leanback-app", ["leanback-templates", "ngResource", "localization"]);
    R.config(["$routeProvider", "$locationProvider", function(a) {
        a.when("/browse", {
            state: "browse"
        });
        a.when("/watch", {
            state: "watch"
        });
        a.otherwise({
            redirectTo: "/browse",
            state: "browse"
        })
    }
    ]);
    R.run(["gestureService", "remoteService", "storageSchema", "$window", "resizeService", "$timeout", "environmentModel", "bambooService", "reportingService", "spinnerTrackingService", "activityPathService", "crashReportingService", "statsService", "bountyService", "samsungService", function(a, b, c, e, f, g, l, m, s, r, A, u, D, x) {
        angular.element(e.document.body).addClass(l.styleName);
        c.upgradeSchema();
        D.onSystemStartup();
        b.onSystemStartup();
        s.sendStartupPings();
        x.initialize()
    }
    ]);
    R.filters = function(a) {
        a.filter("formatTime", ["locale", function(a) {
            return function(c) {
                return a.formatTime(c)
            }
        }
        ]);
        a.filter("truncate", function() {
            return function(a, c, e) {
                var f = 4 <= c ? c - 4 : c;
                a = a ? a.length < c ? a : e ? " . . . " + a.substr(a.length - f, a.length) : a.substr(0, f) + " . . . " : h;
                return a
            }
        });
        a.filter("formatNumber", ["locale", function(a) {
            return function(c) {
                return a.formatNumber(c)
            }
        }
        ]);
        a.filter("toEncodedUrl", function() {
            return function(a) {
                a = a ? encodeURI(a) : h;
                return a
            }
        })
    }
    ;
    var Pj = function(a, b) {
        this.uri_ = new vg(a);
        this.callbackParamName_ = b ? b : "callback";
        this.timeout_ = 5E3
    }
      , Qj = 0;
    Pj.prototype.setRequestTimeout = function(a) {
        this.timeout_ = a
    }
    ;
    Pj.prototype.getRequestTimeout = function() {
        return this.timeout_
    }
    ;
    Pj.prototype.send = function(a, b, c, e) {
        var f = a || j
          , g = e || "_" + (Qj++).toString(36) + E().toString(36);
        p._callbacks_ || (p._callbacks_ = {});
        a = this.uri_.clone();
        if (f)
            for (var l in f)
                (!f.hasOwnProperty || f.hasOwnProperty(l)) && a.setParameterValues(l, f[l]);
        b && (p._callbacks_[g] = function(a) {
            Rj(g, i);
            b.apply(h, arguments)
        }
        ,
        a.setParameterValues(this.callbackParamName_, "_callbacks_." + g));
        l = jg(a.toString(), {
            timeout: this.timeout_,
            cleanupWhenDone: i
        });
        l.addErrback(function() {
            Rj(g, k);
            c && c(f)
        });
        return {
            id_: g,
            deferred_: l
        }
    }
    ;
    Pj.prototype.cancel = function(a) {
        a && (a.deferred_ && a.deferred_.cancel(),
        a.id_ && Rj(a.id_, k))
    }
    ;
    var Rj = function(a, b) {
        p._callbacks_[a] && (b ? delete p._callbacks_[a] : p._callbacks_[a] = v)
    };
    t("yt.tv.initializer", function(a) {
        hh("goog.net.BrowserChannel").setLevel(Zg);
        R.appPath = a;
        R.htmlPath = a + "/html";
        R.imgPath = a + "/img";
        sb = rb = JSON.parse;
        ub = JSON.stringify;
        ih.prototype.parse = function(a) {
            return JSON.parse(a)
        }
        ;
        Vi.value("applicationPath", a);
        a = angular.injector(["localization"]).get("locale");
        var b = R;
        R.filters(b);
        R.value("locale", a);
        [{
            name: "activityParser",
            constructor: Ce
        }, {
            name: "activityPathService",
            constructor: yf
        }, {
            name: "angularHelper",
            constructor: ng
        }, {
            name: "authService",
            constructor: vf
        }, {
            name: "bambooService",
            constructor: $f
        }, {
            name: "bountyService",
            constructor: ag
        }, {
            name: "brandingParser",
            constructor: De
        }, {
            name: "browseModel",
            constructor: Wd
        }, {
            name: "channelParser",
            constructor: Ee
        }, {
            name: "channelSearchParser",
            constructor: Fe
        }, {
            name: "channelSuggestionParser",
            constructor: Ge
        }, {
            name: "crashReportingService",
            constructor: bg
        }, {
            name: "csiService",
            constructor: cg
        }, {
            name: "debugCallService",
            constructor: kg
        }, {
            name: "environmentModel",
            constructor: id
        }, {
            name: "featuredParser",
            constructor: He
        }, {
            name: "gestureService",
            constructor: og
        }, {
            name: "localStorage",
            constructor: jd
        }, {
            name: "locationService",
            constructor: qg
        }, {
            name: "messageModel",
            constructor: Yd
        }, {
            name: "navigationService",
            constructor: rg
        }, {
            name: "newSubscriptionsParser",
            constructor: Ie
        }, {
            name: "personalDataService",
            constructor: sg
        }, {
            name: "playerFactoryService",
            constructor: tg
        }, {
            name: "playerService",
            constructor: ug
        }, {
            name: "playerVariablesModel",
            constructor: $d
        }, {
            name: "playlistParser",
            constructor: Je
        }, {
            name: "privateDataService",
            constructor: ud
        }, {
            name: "progressModel",
            constructor: ce
        }, {
            name: "quickSuggestService",
            constructor: ge
        }, {
            name: "remoteService",
            constructor: di
        }, {
            name: "reportingService",
            constructor: wf
        }, {
            name: "resizeService",
            constructor: ei
        }, {
            name: "samsungService",
            constructor: fi
        }, {
            name: "scrollbarModel",
            constructor: ee
        }, {
            name: "settingsRowService",
            constructor: ki
        }, {
            name: "searchModel",
            constructor: fe
        }, {
            name: "searchRowService",
            constructor: hi
        }, {
            name: "searchHistoryService",
            constructor: gi
        }, {
            name: "searchQueryModel",
            constructor: se
        }, {
            name: "spinnerTrackingService",
            constructor: li
        }, {
            name: "statsService",
            constructor: mi
        }, {
            name: "storageSchema",
            constructor: td
        }, {
            name: "subscriptionsParser",
            constructor: Ke
        }, {
            name: "templateClient",
            constructor: Wi
        }, {
            name: "timeService",
            constructor: uf
        }, {
            name: "transliterationModel",
            constructor: we
        }, {
            name: "transliterationService",
            constructor: Ei
        }, {
            name: "userProfileParser",
            constructor: Le
        }, {
            name: "vevoPlaylistService",
            constructor: Fi
        }, {
            name: "videoInfoParser",
            constructor: Me
        }, {
            name: "videoParser",
            constructor: Be
        }, {
            name: "watchHistoryModel",
            constructor: xe
        }, {
            name: "watchModel",
            constructor: ye
        }, {
            name: "ytHttp",
            constructor: sd
        }].forEach(function(a) {
            b.factory(a.name, ["$injector", function(b) {
                return b.instantiate(a.constructor, a.constructor_args)
            }
            ])
        });
        var c = function(a, c) {
            b.factory(a.name, ["$injector", function(b) {
                return b.instantiate(c, a)
            }
            ]);
            a.altName && b.factory(a.altName, [a.name, function(a) {
                return a
            }
            ])
        };
        [{
            name: "brandingService",
            path: "/partners/:userName/branding/default",
            parser: "brandingParser",
            paramKey: "userName",
            params: {}
        }, {
            name: "channelSearchService",
            path: "/channels",
            parser: "channelSearchParser",
            paramKey: "q",
            params: {
                fields: "entry(summary,author,title)"
            }
        }, {
            name: "userPlaylistsService",
            path: "/users/:userName/playlists",
            parser: "playlistParser",
            paramKey: "userName",
            params: {
                fields: "entry(yt:playlistId,title,summary,author,yt:countHint)"
            }
        }, {
            name: "userSubscriptionsService",
            path: "/users/:userName/subscriptions",
            parser: "subscriptionsParser",
            paramKey: "userName",
            params: {
                fields: "entry(yt:username,yt:channelId,yt:unreadCount)"
            }
        }, {
            name: "userProfileService",
            path: "/users/:userName",
            parser: "userProfileParser",
            paramKey: "userName",
            params: {
                fields: "yt:userId,yt:username,title,media:thumbnail,yt:statistics"
            }
        }, {
            name: "videoInfoService",
            path: "/videos/:videoId",
            parser: "videoInfoParser",
            paramKey: "videoId",
            params: {
                fields: "yt:rating,media:group(media:description)"
            }
        }, {
            name: "itemSuggestionService",
            path: "/users/:userName/suggestion",
            parser: "channelSuggestionParser",
            paramKey: "userName",
            params: {
                fields: "entry",
                inline: i,
                "max-results": 3
            }
        }].forEach(function(a) {
            c(a, ["name", "path", "ytHttp", "environmentModel", "authService", a.parser, "paramKey", "params", "locale", a.altConstructor || mg])
        });
        [{
            altConstructor: ci,
            listType: "RQ",
            name: "remoteQueueService",
            path: "/videos/batch",
            paramKey: j,
            params: {
                v: "2.1"
            }
        }, {
            altConstructor: ji,
            listType: "SR",
            name: "searchService",
            path: "/videos",
            paramKey: "q",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaded,yt:uploaderId,media:credit)),openSearch:totalResults",
                "max-results": 50
            }
        }, {
            altName: "FL",
            listType: "FL",
            name: "userFavoritesService",
            path: "/users/:userName/favorites",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            altName: "UU",
            listType: "UU",
            name: "userUploadsService",
            path: "/users/:userName/uploads",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            altName: "SF",
            listType: "SF",
            name: "videoService",
            path: "/standardfeeds/:regionId/:feedName",
            paramKey: "feedName",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults",
                regionId: ""
            }
        }, {
            name: "newSubscriptionsService",
            listType: "SU",
            path: "/users/default/newsubscriptionvideos",
            paramKey: "noParamKeyRequired",
            parser: "newSubscriptionsParser",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            altName: "ST",
            listType: "SF",
            name: "standardFeedService",
            path: "/standardfeeds/:regionId/:feedName",
            paramKey: "feedName",
            params: {
                time: "today",
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults",
                regionId: ""
            }
        }, {
            name: "activityService",
            listType: "AF",
            path: "/users/:userName/events",
            parser: "activityParser",
            paramKey: "userName",
            params: {
                inline: i
            }
        }, {
            name: "riverService",
            listType: "HP",
            path: "/users/:userName/river",
            parser: "activityParser",
            paramKey: "userName",
            params: {
                inline: i
            }
        }, {
            name: "playlistService",
            altName: "PL",
            listType: "PL",
            path: "/playlists/:playlistId",
            paramKey: "playlistId",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            name: "relatedVideosService",
            listType: "RV",
            path: "/videos/:relatedId/related",
            paramKey: "relatedId",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            name: "videoPlaybackInfoService",
            listType: "VI",
            path: "/videos/:videoId",
            paramKey: "videoId",
            params: {
                fields: "title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)"
            }
        }, {
            name: "recommendedVideosService",
            listType: "RC",
            path: "/users/:userName/recommendations",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            name: "watchLaterService",
            listType: "WL",
            path: "/users/:userName/watch_later",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }, {
            name: "watchHistoryService",
            listType: "HL",
            path: "/users/:userName/watch_history",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[not(app:control/yt:state) and not(media:group/media:price/@price) and media:group/yt:duration/@seconds>0](title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)),openSearch:totalResults"
            }
        }].forEach(function(a) {
            c(a, ["name", "path", "ytHttp", "environmentModel", "authService", "listType", a.parser || "videoParser", "paramKey", "params", "locale", a.altConstructor || ii])
        });
        [{
            name: "featuredChannelService",
            path: "/leanback_ajax",
            parser: "channelParser",
            paramKey: j,
            params: {
                action_featured_channels: 1,
                hl: ""
            }
        }, {
            name: "featuredService",
            path: "/leanback.json",
            parser: "featuredParser",
            paramKey: j,
            params: {
                action_featured: 1,
                client: "lb4",
                hl: ""
            }
        }, {
            name: "relatedChannelsService",
            path: "/leanback_ajax",
            parser: "channelParser",
            paramKey: j,
            params: {
                action_related_channels: 1,
                hl: ""
            }
        }, {
            altConstructor: re,
            name: "suggestionService",
            path: "/complete/search",
            parser: "videoParser",
            paramKey: "q",
            params: {}
        }].forEach(function(a) {
            c(a, ["name", "path", "ytHttp", "environmentModel", a.parser, "paramKey", "params", "locale", a.altConstructor || qe])
        });
        var e = function(a) {
            a.controller.initialize()
        };
        [{
            name: "ytActiontile",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/tiles/action_tile.html",
            controller: Yi
        }, {
            name: "ytAdvertisementcallout",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/advertisement_callout.html",
            controller: Zi
        }, {
            name: "ytApplication",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/app.html",
            controller: $i
        }, {
            name: "ytBackgroundImage",
            restrict: "A",
            replace: k,
            scope: i,
            controller: aj
        }, {
            name: "ytBrowse",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/browse.html",
            controller: bj
        }, {
            name: "ytBrowserow",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/browse_row.html",
            controller: fj
        }, {
            name: "ytButton",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/button.html",
            controller: gj
        }, {
            name: "ytClosedcaptions",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/dialogs/closed_captions.html",
            controller: lj
        }, {
            name: "ytDelayedimage",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/delayed_image.html",
            controller: nj
        }, {
            name: "ytDialog",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/dialogs/dialog.html",
            controller: oj
        }, {
            name: "ytFeedicon",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/feed_icon.html",
            controller: qj
        }, {
            name: "ytFlagoptions",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/dialogs/flag_options.html",
            controller: rj
        }, {
            name: "ytFocusable",
            restrict: "A",
            replace: k,
            scope: i,
            controller: V
        }, {
            name: "ytGrid",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/grid.html",
            controller: sj
        }, {
            name: "ytLettertile",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/letter_tile.html",
            controller: wj
        }, {
            name: "ytLettersuggestlist",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/list.html",
            controller: vj
        }, {
            name: "ytList",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/list.html",
            controller: Z
        }, {
            name: "ytLogininfo",
            restrict: "E",
            replace: i,
            scope: k,
            templateUrl: R.htmlPath + "/dialogs/login_info.html",
            controller: xj
        }, {
            name: "ytMessage",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/message.html",
            controller: yj
        }, {
            name: "ytPerflog",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/perflog.html",
            controller: Aj
        }, {
            name: "ytProgressbar",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/progress_bar.html",
            controller: Bj
        }, {
            name: "ytPair",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/dialogs/remote_pairing_info.html",
            controller: zj
        }, {
            name: "ytRotatelist",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/list.html",
            controller: Cj
        }, {
            name: "ytScrollpane",
            restrict: "A",
            replace: k,
            scope: i,
            controller: Dj
        }, {
            name: "ytScrollbar",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/scrollbar.html",
            controller: Ej
        }, {
            name: "ytToasts",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/toasts.html",
            controller: Hj
        }, {
            name: "ytVideotile",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/tiles/video_tile.html",
            controller: Mj
        }, {
            name: "ytTransliteration",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/transliteration.html",
            controller: Ij
        }, {
            name: "ytTransliterationresult",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/transliteration_result.html",
            controller: U
        }, {
            name: "ytTransportcontrols",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/transport_controls.html",
            controller: Kj
        }, {
            name: "ytTransportcontrolslist",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/list.html",
            controller: Lj
        }, {
            name: "ytWatch",
            restrict: "E",
            replace: k,
            scope: i,
            templateUrl: R.htmlPath + "/watch.html",
            controller: Nj
        }, {
            name: "ytWatchtitletray",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/watch_title_tray.html",
            controller: Oj
        }, {
            name: "ytWiigamepad",
            restrict: "E",
            replace: i,
            scope: i,
            templateUrl: R.htmlPath + "/wii/game_pad.html",
            controller: Zf
        }].forEach(function(a) {
            b.directive(a.name, function() {
                var b = {
                    restrict: a.restrict,
                    replace: a.replace,
                    scope: a.scope,
                    templateUrl: a.templateUrl,
                    controller: a.controller
                };
                "E" === a.restrict && (b.link = e);
                return b
            })
        });
        b.directive("ytClickDown", ["$injector", function(a) {
            return {
                restrict: "A",
                link: function(b, c, e) {
                    return a.instantiate(kj, {
                        keyEventName: "keydown",
                        $scope: b,
                        $element: c,
                        $attrs: e
                    })
                }
            }
        }
        ]);
        b.directive("ytClick", ["$injector", function(a) {
            return {
                restrict: "A",
                link: function(b, c, e) {
                    return a.instantiate(kj, {
                        keyEventName: "keyup",
                        $scope: b,
                        $element: c,
                        $attrs: e
                    })
                }
            }
        }
        ]);
        b.directive("ytSearch", ["$injector", "environmentModel", function(a, b) {
            var c = {
                restrict: "E",
                replace: k,
                scope: i,
                controller: Fj,
                templateUrl: R.htmlPath + "/search.html",
                link: e
            };
            b.isWiiU && (c.templateUrl = R.htmlPath + "/search_bamboo.html",
            c.controller = Gj);
            return c
        }
        ]);
        b.directive("ytKeyboard", ["$injector", "locale", function(a, b) {
            var c = pj;
            switch (b.isoLocale) {
            case "ja_JP":
                c = tj;
                break;
            case "ko_KR":
                c = uj;
                break;
            case "zh_CN":
            case "zh_HK":
            case "zh_TW":
                c = jj
            }
            return {
                restrict: "E",
                replace: i,
                scope: i,
                templateUrl: R.htmlPath + "/keyboard.html",
                controller: c,
                link: e
            }
        }
        ]);
        b.directive("ytTilerow", ["environmentModel", function(a) {
            var b = hj
              , c = "/carousel.html";
            a.isLimitedGraphics && (b = ej,
            c = "/list.html");
            return {
                restrict: "E",
                replace: i,
                scope: i,
                templateUrl: R.htmlPath + c,
                controller: b,
                link: e
            }
        }
        ]);
        b.directive("ytBind", ["$injector", "$interpolate", function(a, b) {
            return function(a, c, e) {
                a.$watch(e.ytBind, function(e) {
                    c.text(e == h ? "" : b(e)(a))
                })
            }
        }
        ]);
        b.value("xhrBackend", zh);
        b.value("jsonpBackend", Pj);
        a.loadMessages(Sj)
    }, h);
    var Sj = function() {
        var a = [];
        0 <= Gb().indexOf("PS3") && a.push('<object id="devicePlugin" type="x-youtube/x-device"></object>');
        0 <= Gb().indexOf("SmartHub") && (a.push('<object id="pluginObjectTV" border=0 classid="clsid:SAMSUNG-INFOLINK-TV" style="opacity:0.0; background-color:#000000; width:0px; height:0px;"></object>'),
        a.push('<object id="pluginObjectWindow" border=0 classid="clsid:SAMSUNG-INFOLINK-WINDOW" style="opacity:0.0; background-color:#000000; width:0px; height:0px;"></object>'),
        a.push('<object id="pluginObjectTVMW" border=0 classid="clsid:SAMSUNG-INFOLINK-TVMW" style="opacity:0.0; background-color:#000000; width:0px; height:0px;"></object>'),
        a.push('<object id="pluginObjectNNavi" border=0 classid="clsid:SAMSUNG-INFOLINK-NNAVI" style="opacity:0.0; background-color:#000000; width:0px; height:0px;"></object>'),
        a.push('<object id="pluginObjectNetwork" border="0" classid="clsid:SAMSUNG-INFOLINK-NETWORK" style="opacity:0.0; background-color:#000000; width:0px; height:0px;"></object>'));
        a.push('<div id="app-container">');
        a.push("<yt:application></yt:application>");
        a.push("</div>");
        var b = document.getElementById("leanback");
        angular.element(b).html(a.join(""));
        angular.bootstrap(b, ["leanback-app"])
    };
    if (window.jstiming) {
        window.jstiming.beaconImageReferences_ = {};
        window.jstiming.reportCounter_ = 1;
        var Xj = function(a, b, c) {
            var e = a.t[b]
              , f = a.t.start;
            if (e && (f || c))
                return e = a.t[b][0],
                c != h ? f = c : f = f[0],
                e - f
        }
          , Yj = function(a, b, c) {
            var e = "";
            window.jstiming.pt && (e += "&srt=" + window.jstiming.pt,
            delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? e += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? e += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (e += "&tran=" + window.chrome.csi().tran)
            } catch (f) {}
            var g = window.chrome;
            if (g && (g = g.loadTimes)) {
                g().wasFetchedViaSpdy && (e += "&p=s");
                if (g().wasNpnNegotiated) {
                    var e = e + "&npn=1"
                      , l = g().npnNegotiatedProtocol;
                    l && (e += "&npnv=" + (encodeURIComponent || escape)(l))
                }
                g().wasAlternateProtocolAvailable && (e += "&apa=1")
            }
            var m = a.t, s = m.start, g = [], l = [], r;
            for (r in m)
                if ("start" != r && 0 != r.indexOf("_")) {
                    var A = m[r][1];
                    A ? m[A] && l.push(r + "." + Xj(a, r, m[A][0])) : s && g.push(r + "." + Xj(a, r))
                }
            delete m.start;
            if (b)
                for (var u in b)
                    e += "&" + u + "=" + b[u];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            a = [b, "?v=3", "&s=" + (window.jstiming.sn || "youtube_tv") + "&action=", a.name, l.length ? "&it=" + l.join(",") : "", "", e, "&rt=", g.join(",")].join("");
            if (!a)
                return "";
            var e = new Image
              , D = window.jstiming.reportCounter_++;
            window.jstiming.beaconImageReferences_[D] = e;
            e.onload = e.onerror = function() {
                window.jstiming && delete window.jstiming.beaconImageReferences_[D]
            }
            ;
            e.src = a;
            e = j;
            return a
        };
        window.jstiming.report = function(a, b, c) {
            if ("prerender" == document.webkitVisibilityState) {
                var e = k
                  , f = function() {
                    if (!e) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        var g;
                        "prerender" == document.webkitVisibilityState ? g = k : (Yj(a, b, c),
                        g = i);
                        g && (e = i,
                        document.removeEventListener("webkitvisibilitychange", f, k))
                    }
                };
                document.addEventListener("webkitvisibilitychange", f, k);
                return ""
            }
            return Yj(a, b, c)
        }
    }
    ;angular.module("leanback-templates", []).run(["$templateCache", function(a) {
        a.put(R.htmlPath + "/advertisement_callout.html", '<div class="advertisement-callout" style="display: none">  [[Advertisement|Tooltip says that the video currently playing is an advertisement.]]  <div class="time-left"></div></div>');
        a.put(R.htmlPath + "/app.html", '<div id="app-markup">  <yt:watch id="watch" activate-when="focusable.elementIdEquals(application.activeChildName)" data="application.watchModel.currentVideo"></yt:watch>  <yt:browse id="browse" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:browse>  <yt:search id="search" activate-when="focusable.elementIdEquals(application.activeChildName)" query="application.searchQuery"></yt:search>  <yt:toasts data="application.getCurrentDialogType()"></yt:toasts>  <div class="logo-container"></div>  <div ng-include="application.legendTemplatePath" id="legend" class="legend"></div>  <yt:message id="message"></yt:message>  <div id="spinner-container">    <div class="fallback-loading-indicator">[[LOADING...|Indicator that content is loading from the network.]]</div>    <div class="carousel-loading-indicator"></div>  </div>  <yt:dialog id="dialog" activate-when="focusable.elementIdEquals(application.activeChildName)" data="application.dialogModel"></yt:dialog></div>');
        a.put(R.htmlPath + "/browse.html", '<div>  <yt:browserow id="browse-row" class="item"></yt:browserow>  <yt:rotatelist id="super-scroller" item-renderer="yt:feedicon" orientation="vertical"></yt:rotatelist>  <yt:scrollbar id="browse-scrollbar"></yt:scrollbar>  <div id="up-arrow" class="nav-arrow"></div>  <div id="down-arrow" class="nav-arrow"></div>  <div id="left-arrow" class="nav-arrow"></div>  <div id="right-arrow" class="nav-arrow"></div>  <div id="scroller-background"></div></div>');
        a.put(R.htmlPath + "/browse_row.html", '<div class="browse-row">  <h2>{{browseRow.data.model.title}}</h2> <yt:tilerow id="tile-row" class="feed-row" item-renderer="browseRow.data.widgetName"></yt:tilerow></div>');
        a.put(R.htmlPath + "/button.html", "<div></div>");
        a.put(R.htmlPath + "/carousel.html", '<ul class="carousel">  \x3c!-- Item renderers inserted here by compile phase. --\x3e</ul>');
        a.put(R.htmlPath + "/delayed_image.html", '<img ng-src="{{imageUrl}}" />');
        a.put(R.htmlPath + "/dialogs/closed_captions.html", '<div id="closed-captions-widget">  <yt:grid id="cc-languages" class="cc-list" item-renderer="yt:button" data="closedCaptions.options" row-count="closedCaptions.rowCount"></yt:grid>  <h3 id="captions-not-available">[[Captions are not available for this video|Tooltip displayed when there is no subtitles available for this video.]]</h3>  <h3 id="captions-loading">[[Loading...|Tooltip displayed when some data is loading.]]</h3></div>');
        a.put(R.htmlPath + "/dialogs/device_retention_info.html", '<div class="message"></div>');
        a.put(R.htmlPath + "/dialogs/dialog.html", '<div>  <div id="dialog-wrapper">    <div class="title"></div>    <div id="inner-dialog-container"></div>    <div class="buttons">      <div id="confirm-dialog-cancel-button" yt:focusable activate-when="focusable.elementIdEquals(dialog.activeChildName)"></div>      <div id="confirm-dialog-ok-button" yt:focusable activate-when="focusable.elementIdEquals(dialog.activeChildName)"></div>    </div>    <div ng-include="application.legendTemplatePath" id="dialog-legend" class="legend"></div>  </div></div>');
        a.put(R.htmlPath + "/dialogs/flag_claim.html", '<div class="flag-claim">  <div class="metadata">    <span class="text"></span>    <div class="url"></div>  </div>  <div class="copyright-infringment">    [[<div class="subtitle">Infringes my copyright</div> youtube.com/t/dmca_policy <div class="email">or email</div> copyright@youtube.com|Provides a way, via email or web site, to claim that a video infringes the current user\'s copyright.]]  </div>  <div class="privacy-invasion">    [[<div class="subtitle">Invades my privacy</div> youtube.com/t/privacy_guidelines|Provides a way to claim, via email or web site, that a given video invades the current user\'s privacy.]]  </div></div>');
        a.put(R.htmlPath + "/dialogs/flag_options.html", '<div class="flag-list-container">  <yt:list class="flag-list" data="flag.flagData[0]" item-renderer="yt:button" activate-when="flag.activeIndexEquals(0)" active-index="flag.activeItemIndex"></yt:list>  <yt:list class="flag-list" data="flag.flagData[1]" item-renderer="yt:button" activate-when="flag.activeIndexEquals(1)" active-index="flag.activeItemIndex"></yt:list></div>');
        a.put(R.htmlPath + "/dialogs/flag_video.html", '<div class="flag-video">  [[Visit this video on your computer or laptop and click the flag icon to submit a claim:|Provides a URL which a user can access in order to flag the video as inappropriate. Followed by actual URL.]]  <span class="url"></span></div><div class="flag-example"></div>');
        a.put(R.htmlPath + "/dialogs/kenko_warning.html", '\x3c!--  Kenko is a health warning required for PS3 devices licensed in JAPAN.  - The first warning is about flashing lights and seizures.  - The second warning is about fatigue and pain.  - The third warning is about limiting exposure of young children to 3D content.  - The last warning is about sleep deprivation.//--\x3e<div>  <div id="kenko">    <div>      <p><div class="warning"></div>\u8b66\u544a</p>      <p>\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u5f15\u304d\u8d77\u3053\u3055\u308c\u308b\u767a\u4f5c\u306b\u3064\u3044\u3066</p>      <p>\u70b9\u6ec5\u3092\u7e70\u308a\u8fd4\u3059\u753b\u9762\u3084\u3001\u305d\u306e\u4ed6\u306e\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u3001\u307e\u308c\u306b\u3001\u76ee\u306e\u75db\u307f\u3001\u8996\u899a\u7570\u5e38\u3001\u504f\u982d\u75db\u3001\u3051\u3044\u308c\u3093\u3084\u610f\u8b58\u969c\u5bb3\uff08\u5931\u795e\u306a\u3069\uff09\u306a\u3069\u306e\u75c7\u72b6\uff08\u5149\u611f\u53d7\u6027\u767a\u4f5c\uff09\u304c\u8d77\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3057\u305f\u75c7\u72b6\u306e\u3042\u308b\u65b9\u306f\u3001\u4e8b\u524d\u306b\u5fc5\u305a\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044</p>    </div>    <div>      <p><div class="warning"></div>\u6ce8\u610f</p>      <p>\u3053\u3093\u306a\u3068\u304d\u306f\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3059\u308b</p>      <p>\u4e0a\u8a18\u306e\u75c7\u72b6\u306b\u52a0\u3048\u3001\u982d\u75db\u3001\u3081\u307e\u3044\u3001\u5410\u304d\u6c17\u3001\u75b2\u52b4\u611f\u3001\u4e57\u308a\u7269\u9154\u3044\u306b\u4f3c\u305f\u75c7\u72b6\u306a\u3069\u3092\u611f\u3058\u305f\u3068\u304d\u3084\u3001\u76ee\u3001\u8033\u3001\u624b\u3001\u8155\u3001\u8db3\u306a\u3069\u3001\u8eab\u4f53\u306e\u4e00\u90e8\u306b\u4e0d\u5feb\u611f\u3084\u75db\u307f\u3092\u611f\u3058\u305f\u3068\u304d\u306f\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u3082\u6cbb\u3089\u306a\u3044\u3068\u304d\u306f\u3001\u533b\u5e2b\u306e\u8a3a\u5bdf\u3092\u53d7\u3051\u3066\u304f\u3060\u3055\u3044\u3002</p>    </div>    <div>      <p>3D\u6620\u50cf\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u306b\u3064\u3044\u3066</p>    3D\u6620\u50cf\u306e\u898b\u3048\u65b9\u306b\u306f\u500b\u4eba\u5dee\u304c\u3042\u308a\u307e\u3059\u3002\u9055\u548c\u611f\u3092\u611f\u3058\u305f\u308a\u3001\u7acb\u4f53\u306b\u898b\u3048\u306a\u3044\u5834\u5408\u306f\u30013D\u6a5f\u80fd\u306e\u3054\u4f7f\u7528\u3092\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002\u6700\u65b0\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18URL\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002    http://www.jp.playstation.com/support/</p>      <p>\u306a\u304a\u3001\u304a\u5b50\u3055\u307e\uff08\u7279\u306b6\u6b73\u672a\u6e80\u306e\u5b50\uff09\u306e\u8996\u899a\u306f\u767a\u9054\u6bb5\u968e\u306b\u3042\u308a\u307e\u3059\u3002\u304a\u5b50\u3055\u307e\u304c3D\u6620\u50cf\u3092\u8996\u8074\u3057\u305f\u308a\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u3092\u30d7\u30ec\u30a4\u3059\u308b\u524d\u306b\u3001\u5c0f\u5150\u79d1\u3084\u773c\u79d1\u306a\u3069\u306e\u533b\u5e2b\u306b\u3054\u76f8\u8ac7\u3044\u305f\u3060\u304f\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002</p>    </div>    <div>      <p>\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u632f\u52d5\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u3064\u3044\u3066</p>      <p>\u632f\u52d5\u969c\u5bb3\u306e\u3042\u308b\u65b9\u306f\u3001\u30d0\u30a4\u30d6\u30ec\u30fc\u30b7\u30e7\u30f3\uff08\u632f\u52d5\uff09\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</p>      <p>\u203b\u632f\u52d5\u6a5f\u80fd\u306e\u5165\uff0f\u5207\u306f\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306ePS\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>    </div>    <div>      <ul class="ul">        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u3001\u90e8\u5c4b\u3092\u660e\u308b\u304f\u3057\u3001\u3067\u304d\u308b\u3060\u3051\u753b\u9762\u304b\u3089\u96e2\u308c\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u75b2\u308c\u3066\u3044\u308b\u3068\u304d\u3084\u7761\u7720\u4e0d\u8db3\u306e\u3068\u304d\u306f\u3001\u30d7\u30ec\u30a4\u3092\u907f\u3051\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u5065\u5eb7\u306e\u305f\u3081\u30011\u6642\u9593\u3054\u3068\u306b15\u5206\u7a0b\u5ea6\u306e\u4f11\u61a9\u3092\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u4e2d\u306b\u4f53\u8abf\u304c\u60aa\u304f\u306a\u3063\u305f\u3089\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u3084\u3081\u3066\u304f\u3060\u3055\u3044\u3002</li>      </ul>    </div>  </div></div>');
        a.put(R.htmlPath + "/dialogs/login_info.html", '<div>  <div class="login-guest-info">    <ul class="login-instructions">      <li>        [[<h4>Go To</h4> <div class="activate-url">www.youtube.com/activate</div>|Step that a user needs to perform in order to pair her YouTube account with the application.]]      </li>      <li id="pairing-code-container"></li>    </ul>    <span class="login-helper-text">      [[We\'ll do the rest and confirm on screen shortly.|Tooltip displayed below steps that a user should perform in order to pair her YouTube account with the application.]]    </span>  </div></div>');
        a.put(R.htmlPath + "/dialogs/logout_info.html", '<div>  <div class="logout-authenticated-info">    <div class="login-user-icon"></div>    <div class="login-user-info">      <h3 class="display-name"></h3>      <div class="platform-container">        <div class="platform-user-icon"></div>        <span class="platform-user-name"></span>      </div>      <div class="signed-in-message"></div>    </div>  </div></div>');
        a.put(R.htmlPath + "/dialogs/network_error_info.html", "<div>[[A network error has occurred. Please check your network connection.|Dialog subtitle telling user that a network error has occurred, and asking the user to check their network connection]]</div>");
        a.put(R.htmlPath + "/dialogs/player_error_info.html", '<span class="player-error"></span>');
        a.put(R.htmlPath + "/dialogs/remote_pairing_info.html", '<div class="pairing">  <div class="pairing-area">    <div class="alternatives">      <div class="phone-content"></div>      \x3c!-- TODO(mcudich): remove comments once the QR-code URL is whitelisted                          by the PS3.      <div class="or-box">OR</div>      <div class="qr-code">        <div class="scan">Scan</div>        <img ng-src="{{pair.qrCodeImageUrl}}" alt="Qr Code" />      </div>      --\x3e      <div class="connected-list">        <div class="connected-header">[[Connected|Tooltip showing status of a device connected to the application.]]</div>        <ul class="devices"></ul>      </div>    </div>    <div class="search-message">      <div class="title">[[Did you know?|Search pairing hint title]]</div>      [[You can use your phone or tablet to find and play videos on your TV.|Search pairing hint details.]]    </div>  </div></div>');
        a.put(R.htmlPath + "/dialogs/remote_reset_info.html", '<div class="connected-list">  <div class="connected-header">[[Paired Devices|Tooltip showing status of paired devices, connected to the application or not.]]</div>  <ul class="devices"></ul></div><span class="reset-help">[[Selecting \'OK\' will disconnect all paired devices.|Tooltip displayed when a user is going to disconnect her mobile device from the application.]]</span>');
        a.put(R.htmlPath + "/dialogs/scrollable_dialog.html", '<div yt-scrollpane activate-when="dialog.isActive" class="scrolling-text" ng-include="dialog.data.contentUrl"></div>');
        a.put(R.htmlPath + "/dialogs/shiyojo_warning.html", '\x3c!--  Shiyojo is a warning required for PS3 devices licensed in Japan.  - This is a PS3 only app.  - When displayed in a TV other than an LCD TV an afterimage may be burned  into the device if the game/app is left paused for too long.//--\x3e<div id="shiyojo">  <ul>    <li>\u3053\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306fPlayStation&#174;3\u5c02\u7528\u3067\u3059\u3002</li>    <li>PlayStation&#174;3\u3092\u30d7\u30e9\u30ba\u30de\u30c6\u30ec\u30d3\u3084\u3001\u6db2\u6676\u65b9\u5f0f\u4ee5\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30c6\u30ec\u30d3\uff08\u30b9\u30af\u30ea\u30fc\u30f3\u6295\u5f71\u65b9\u5f0f\u30c6\u30ec\u30d3\uff09\u306b\u3064\u306a\u3050\u3068\u3001\u753b\u50cf\u306e\u713c\u304d\u4ed8\u304d\uff08\u6b8b\u50cf\u6620\u50cf\uff09\u304c\u8d77\u3053\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u306b\u3001\u9759\u6b62\u753b\u3092\u30c6\u30ec\u30d3\u753b\u9762\u306b\u8868\u793a\u3057\u305f\u307e\u307e\u9577\u6642\u9593\u653e\u7f6e\u3059\u308b\u3068\u3001\u713c\u304d\u4ed8\u304d\u304c\u8d77\u3053\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002</li>    <li>PlayStation&#174;3\u306e\u30b7\u30b9\u30c6\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u5e38\u306b\u6700\u65b0\u306e\u3082\u306e\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002</li>  </ul>  <div class="small-print">    "<div class="playstation-logo"></div>", "PlayStation", "<div class="ps3-logo"></div>", "PSN logo", "DUALSHOCK" and "SIXAXIS" are registered trademarks of Sony Computer Entertainment Inc.    <p>"XMB" and "\u30af\u30ed\u30b9\u30e1\u30c7\u30a3\u30a2\u30d0\u30fc" are trademarks of Sony Corporation and Sony Computer Entertainment Inc.</p>    <p>Library programs &#169;Sony Computer Entertainment Inc.</p>    "<div class="playstation-logo"></div>"&#169;1994 Sony Computer Entertainment Inc.</p>  <div></div>');
        a.put(R.htmlPath + "/dialogs/signed_out_info.html", "<div>  [[You have been signed out by the application.|Message that tells the user that they have been signed out by the application]]</div><div>  [[Would you like to sign in again?|Message that asks the user if they would like to sign in again]]</div>");
        a.put(R.htmlPath + "/dialogs/simple_dialog.html", '<div ng-include="dialog.data.contentUrl"></div>');
        a.put(R.htmlPath + "/dialogs/tos_info.html", "<div>[[To view the Terms of Service go to:|Dialog subtitle telling user to go to the following URL to view youtube terms of service.]]</div><div class='url'>http://www.youtube.com/terms</div><div>[[To view the Privacy Policy go to:|Dialog subtitle telling user to go to the following URL to view youtube privacy policy document]]</div><div class='url'>http://www.youtube.com/privacy</div>");
        a.put(R.htmlPath + "/feed_icon.html", '<div class="feed-icon">  <div class="icon"></div>  <h2></h2></div>');
        a.put(R.htmlPath + "/grid.html", '<div class="grid-content"></div>');
        a.put(R.htmlPath + "/keyboard.html", '<div>  <div id="transliteration-container">    <yt:transliteration id="transliteration" lang-code-pair="keyboard.langCodePair"></yt:transliteration>  </div>  <yt:grid id="keyboard" class="keyboard" item-renderer="yt:lettertile" data="keyboard.getLetters()" loop="true" consume-keys="!keyboard.isLetterSuggestVisible()" repeat-rate="keyboard.getKeyRepeatRate()"></yt:grid>  <yt:lettersuggestlist id="letter-suggest" class="letter-suggest" item-renderer="yt:lettertile" orientation="vertical"></yt:lettersuggestlist></div>');
        a.put(R.htmlPath + "/legend.html", '<div class="more"><span class="icon dpad-down"></span><span class="title">[[More|A button that shows more content in the application.]]</span></div><div class="back"><span class="icon"></span><span class="title">[[Back|A button that navigates to the previous screen a user has visited.]]</span></div><div class="reversed-back"><span class="icon cross"></span><span class="title">[[Back|A button that navigates to the previous screen a user has visited.]]</span></div><div class="search"><span class="icon"></span><span class="title">[[Search|Clicking this launches the search interface.]]</span></div><div class="home"><span class="icon"></span><span class="title">[[Home|Clicking this navigates to the main screen.]]</span></div><div class="delete"><span class="icon"></span><span class="title">[[Delete|A button that deletes a video from a user\'s playlist.]]</span></div>');
        a.put(R.htmlPath + "/letter_tile.html", "<li></li>");
        a.put(R.htmlPath + "/list.html", '<div class="list-content"></div>');
        a.put(R.htmlPath + "/message.html", "<div></div>");
        a.put(R.htmlPath + "/perflog.html", "<ul></ul>");
        a.put(R.htmlPath + "/progress_bar.html", '<div>  <div class="player-seek-buffer"></div>  <div class="player-seek-active"></div></div>');
        a.put(R.htmlPath + "/remote_share_toast.html", '<div class="qr-code-container">  <img class="qr-code-image" alt="QR Code" /></div>');
        a.put(R.htmlPath + "/rolling_toast.html", '<div class="toast">  <div class="toast-container">    <div class="toast-icon">&nbsp;</div>    <div class="toast-progress">      <div class="progress">&nbsp;</div>    </div>    <div class="toast-msg"></div>  </div></div>');
        a.put(R.htmlPath + "/scrollbar.html", '<div class="scrollbar">  <div class="handle"></div></div>');
        a.put(R.htmlPath + "/search.html", '<div class="controls">  <div id="search-text-box" yt:focusable activate-when="focusable.elementIdEquals(search.activeChildName)">    <div class="input">      <span id="search-query"></span>      <span class="suggestion"><span class="suggestion-text"></span><div class="suggestion-trigger"></div></span>    </div>  </div>  <yt:keyboard id="search-keyboard" activate-when="focusable.elementIdEquals(search.activeChildName)"></yt:keyboard></div>\x3c!-- TODO(lbayes): Remove reference to private var. --\x3e<yt:pair id="search-pairing-help" activate-when="search.isActive && search.searchQueryModel_.isEmpty()"></yt:pair>');
        a.put(R.htmlPath + "/search_bamboo.html", '<div class="controls">  <div id="search-text-box">    <span id="search-query" yt:focusable></span>    <span id="search-query-cursor"></span>  </div></div>');
        a.put(R.htmlPath + "/tiles/action_tile.html", "<div></div>");
        a.put(R.htmlPath + "/tiles/clear_searches_tile.html", '<div class="content">  <div class="title">[[CLEAR|A button that clears all of a users recent searches.]]</div>  <div class="large-action-icon clear-search-icon"></div>  <div class="search-tile-subtitle">    [[Clear search history|Displayed as menu item subtitle. Explains to a user that this item will clear previous search history.]]  </div></div>');
        a.put(R.htmlPath + "/tiles/credits_tile.html", '<div class="content">  <div class="title">[[CREDITS|Button that shows credit information, giving credit to all open-source software used in building this product.]]</div></div>');
        a.put(R.htmlPath + "/tiles/device_retention_tile.html", '<div class="content">  <div class="title">[[Improve YouTube|Title for a dialog that indicates whether a user can enable or disable whether the application gathers statistics about them.]]</div>    <div class="device-retention-permission">      <div>[[Currently Enabled|Displayed as an explanatory text in a dialog popup. Says that feature is currently Enabled. Followed by an option to Disable this feature.]]</div>      <div class="action">[[Disable?|Displayed in a dialog popup. Asks whether a user wants to disable specific feature.]]</div>    </div>    <div class="device-retention-permission">      <div>[[Currently Disabled|Displayed as an explanatory text in a dialog popup. Says that feature is currently Disabled. Followed by an option to Enable this feature.]]</div>      <div class="action">[[Enable?|Displayed in a dialog popup. Asks whether a user wants to enable specific feature.]]</div>    </div></div>');
        a.put(R.htmlPath + "/tiles/kenko_tile.html", '<div class="content">  <div class="title">\u5065\u5eb7\u306e\u305f\u3081\u306e<br>\u3054\u6ce8\u610f</div></div>');
        a.put(R.htmlPath + "/tiles/login_tile.html", '<div class="content">  <div class="title">[[SIGN IN|Title of menu item which allows a user to sign in to the application with a YouTube account and see personalized content.]]</div>  <div class="sign-in-user-icon"></div>  <div class="sign-in-help-text">[[View your subscriptions, uploads, playlists, likes and more.|Explanatory text on a menu item. Explains access to what features a user will get access when she logs in.]]</div></div>');
        a.put(R.htmlPath + "/tiles/logout_tile.html", '<div class="content">  <div class="title display-name">&nbsp;</div>  <div class="platform-container">    <div class="platform-user-icon"></div>    <span class="platform-user-name">&nbsp;</span>  </div>  <div class="sign-out-user-icon"></div>  <div class="sign-out-help-text">[[Sign Out?|Tooltip in a dialog when a user is going to sign out.]]</div></div>');
        a.put(R.htmlPath + "/tiles/recent_search_tile.html", '<div class="top">  <div class="title"></div>  <div class="overlay"></div></div><div class="bottom">  <div class="video-thumb"></div></div>');
        a.put(R.htmlPath + "/tiles/remote_pairing_tile.html", '<div class="content">  <div class="title">[[PAIR DEVICE|Title of menu item that allows a user to pair one mobile device with the application.]]</div>  <div class="long-title">[[PAIR ANOTHER DEVICE|Title of menu item that allows a user to pair an additional mobile device with the application.]]</div>  <div class="remote-pair-icon"></div>  <div class="remote-pair-text">[[Find videos on your mobile device and watch on your TV.|Tooltip explains that a user will be able to use their mobile device to find videos and watch them via the application.]]</div></div>');
        a.put(R.htmlPath + "/tiles/remote_reset_tile.html", '<div class="content">  <div class="title">[[DELETE|Title of the button that disconnects mobile phones from the application]]</div>  <div class="remote-reset-phone">    <div class="remote-count"></div>  </div>  <div class="remote-reset-help">[[Delete all paired devices?|Button that allows a user to disconnect mobile phones from the application.]]</div></div>');
        a.put(R.htmlPath + "/tiles/search_tile.html", '<div class="content">  <div class="title">[[Search|Clicking this launches the search interface.]]</div>  <div class="large-action-icon search-icon"></div>  <div class="search-tile-subtitle"></div></div>');
        a.put(R.htmlPath + "/tiles/shiyojo_tile.html", '<div class="content">  <div class="title">\u4f7f\u7528\u4e0a\u306e<br>\u3054\u6ce8\u610f</div></div>');
        a.put(R.htmlPath + "/tiles/tos_and_privacy_tile.html", '<div class="content">  <div class="title">[[Terms of Service and Privacy|Title of menu item which shows links to terms of service and privacy documents on youtube.com]]</div></div>');
        a.put(R.htmlPath + "/tiles/video_tile.html", '<div>  <div class="top">    <div class="title"></div>    <div class="overlay">      [[Published on <span class="updated"></span> by <span class="name"></span>|Label that represents the date when a video was uploaded.]]    </div>    <div class="activity"></div>  </div>  <div class="bottom">    <div class="video-thumb"></div>    <div class="duration"></div>  </div></div>');
        a.put(R.htmlPath + "/toasts.html", '<div id="toast">  <div class="static-toasts"></div>  <div class="rolling-toasts"></div></div>');
        a.put(R.htmlPath + "/transliteration.html", '<div>  <yt:list id="transliteration" orientation="horizontal" item-renderer="yt:transliterationresult yt:focusable" loop="true"></yt:list></div>');
        a.put(R.htmlPath + "/transliteration_result.html", "<span>{{directive.data}}</span>");
        a.put(R.htmlPath + "/transport_controls.html", '<div id="player-controls-container">  <div class="player-controls-widget">    <yt:transportcontrolslist id="player-controls" class="player-controls" orientation="horizontal" paging="false"></yt:transportcontrolslist>    <div class="player-seekbar">      <yt:progressbar id="progress-bar"></yt:progressbar>      <div class="player-time-elapsed"></div>      <div class="player-time-total"></div>    </div>  </div></div>');
        a.put(R.htmlPath + "/watch.html", '<div id="leanback-player-container"></div><yt:watchtitletray id="watch-title" activate-when="watch.isTitleMode()" data="watch.getCurrentVideo()"></yt:watchtitletray><div id="eureka-player-controls"></div><yt:transportcontrols activate-when="watch.isTransportActive()"></yt:transportcontrols><yt:advertisementcallout></yt:advertisementcallout><div id="branding-container">  <div class="branding-element">    <div id="branding-banner">      <img id="branding-banner-image" />      <div id="branding-banner-overlay">[[Up Next|Message indicating what video is coming next.]]</div>    </div>  </div>  <img id="branding-watermark" class="branding-element" /></div>');
        a.put(R.htmlPath + "/watch_title_tray.html", '<div class="title-card">  <div class="player-meta">    <div class="player-video-avatar">      <img />    </div>    <div class="player-video-title">&nbsp;</div>    <div class="player-video-details">      <div class="username">&nbsp;</div>      <div class="uploaded-date"></div>      <div class="view-count"><span>[[Views:|VIEWS]] </span><span class="view-count-value"></span></div>    </div>  </div></div>');
        a.put(R.htmlPath + "/wii/game_pad.html", '<div id="drc-widget" ng-show="data" ng-class="application.applicationStyles">  <div id="media-details">    <div id="drc-title">      <h2 class="no-select">[[Active Video|A page title that refers to a focused, selected or playing video.]]</h2>    </div>    <div id="drc-content">      <div>        <div class="left" yt-background-image="data.imageUrl"></div>        <div class="right">          <div id="view-count">{{data.viewCountLabel}}</div>          <div class="likes-dislikes-bar">            <div class="likes-bar" ng-style="data.likesStyle"></div>            <div class="dislikes-bar" ng-style="data.dislikesStyle"></div>          </div>          <div id="likes-label">{{data.likesLabel}}<span class="label">[[likes|A label describing the number of YouTube likes.]]</span></div>          <div id="dislikes-label">{{data.dislikesLabel}}<span class="label">[[dislikes|A label describing the number of YouTube dislikes.]]</span></div>        </div>        <div class="center">          <div id="video-title" class="title">{{data.title}}</div>          <div id="uploaded-by" class="uploader">{{data.channel.displayName}}</div>          <div id="uploaded-at" class="uploaded-at">{{data.uploadedDateLabel}}</div>          <div id="video-description" class="description">{{data.description}}</div>        </div>      </div>    </div>    <div id="drc-footer"></div>  </div></div>');
        a.put(R.htmlPath + "/wii/game_pad_shell.html", "<!DOCTYPE html><html><head>  <title>YouTube</title>  \x3c!-- TODO(lbayes): Extract CSS to a separate file. --\x3e  <style>    @font-face {      font-family: 'roboto-condensed-regular';      /** NOTE(lbayes): Removed local() declarations. These fail on Wii U */      src: url('../../img/RobotoCondensed-Regular.ttf') format('truetype');    }    body, html {      background-color: #fff;      font-family: 'roboto-condensed-regular', arial, sans-serif;      font-size: 100%;      margin: auto;      padding: 0;      overflow: hidden;    }    #logo {      background-position: center center;      background-repeat: no-repeat;      background-image: url(data:image/gif;base64,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);      height: 100%;      left: 0;      position: absolute;      top: 0;      width: 100%;      z-index: 0;    }    body > div {      -webkit-overflow-scrolling: auto;    }    h1, h2, h3, h4 {      font-weight: bold;      margin: 0;      padding: 0;    }    .ng-binding, .no-select {      -webkit-touch-callout: none;      -webkit-user-select: none;      user-select: none;    }    #drc {      height: 100%;      position: absolute;      width: 100%;    }    #drc-title {      background: rgba(230, 230, 230, 1);      color: rgba(102, 102, 102, 1);      height: 10%;      text-align: center;      text-shadow: 0 2px 0 rgba(250, 250, 250, 1);    }    #drc-title > div {      height: 100%;    }    #drc-title h2 {      border-bottom: 1px solid #aaa;      box-shadow: 0px 0px 20pt #CCC;      font-size: 120%;      font-weight: normal;      padding: 1.2% 0 1.2%;      text-align: center;    }    #drc-content {      height: 70%;      width: 100%;    }    #drc-footer {      height: 20%;      width: 100%;    }    #drc-content > div {      position: absolute;      width: 100%;      top: 4.5em;    }    #drc-content > div > div {      position: relative;    }    #drc-content .left {      background-position: center;      background-repeat: no-repeat;      background-size: 100%;      border: 1px solid #ccc;      font-size: 92%;      height: 7.2em;      left: 3%;      position: absolute;      width: 12.8em;    }    #drc-content .center {      margin: 0 auto;      width: 46%;    }    #drc-content .center .title {      font-size: 240%;      font-weight: 300;    }    #drc-content .center .uploader {      color: rgba(133, 0, 0, .9);      font-size: 150%;      margin-top: 5%;    }    #drc-content .center .uploaded-at {      font-size: 104%;    }    #drc-content .center .description {      color: rgb(102, 102, 102);      font-size: 100%;      font-weight: normal;      margin: 10% 0;    }    #drc-content .right {      position: absolute;      right: 3%;      top: 5%;      width: 20%;    }    #view-count {      font-size: 150%;      text-align: right;    }    #drc-content .right .likes-dislikes-bar {      height: .4em;      margin-bottom: .2em;      width: 100%;    }    #drc-content .right .likes-bar {      background: rgba(68, 110, 34, 1);      float: left;      height: 100%;      top: 0;    }    #drc-content .right .dislikes-bar {      background: rgba(102, 102, 102, .2);      float: right;      height: 100%;    }    #likes-label {      float: left;      font-size: 150%;      font-weight: 300;      text-transform: uppercase;    }    #dislikes-label {      float: right;      font-size: 140%;      font-weight: 300;      text-align: right;      text-transform: uppercase;    }    #drc-content .right .label {      display: block;      font-size: 60%;    }    #media-details {      display: block;    }    #spinner {      background-position: center center;      background-repeat: no-repeat;      background-image: url(data:image/gif;base64,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);      width: 100px;      height: 100px;      bottom: 1em;      right: 1em;      position: absolute;    }  </style></head><body>  <yt:wiigamepad></yt:wiigamepad>  <div ng-hide=\"data || isOskVisible\">    <div id=\"logo\"></div>    <div id=\"spinner\" ng-hide=\"hasLoadedOnce\"></div>  </div></body></html>")
    }
    ]);
}
)();
