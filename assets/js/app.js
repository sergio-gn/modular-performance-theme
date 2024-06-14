/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
function setTime() {
    let e = new Date,
        t = e.getHours(),
        i = e.getMinutes(),
        n = e.getSeconds();
    $(".current-time").html(t + ":" + i + ":" + n)
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var i = [],
        n = Object.getPrototypeOf,
        o = i.slice,
        s = i.flat ? function(e) {
            return i.flat.call(e)
        } : function(e) {
            return i.concat.apply([], e)
        },
        r = i.push,
        a = i.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        u = d.toString,
        p = u.call(Object),
        h = {},
        f = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function(e) {
            return null != e && e === e.window
        },
        m = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, i) {
        var n, o, s = (i = i || m).createElement("script");
        if (s.text = e, t)
            for (n in v)(o = t[n] || t.getAttribute && t.getAttribute(n)) && s.setAttribute(n, o);
        i.head.appendChild(s).parentNode.removeChild(s)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var _ = "3.6.0",
        w = function(e, t) {
            return new w.fn.init(e, t)
        };

    function T(e) {
        var t = !!e && "length" in e && e.length,
            i = b(e);
        return !f(e) && !g(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, (function(t, i) {
                return e.call(t, i, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: i.sort,
        splice: i.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || f(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = e[t], "__proto__" !== t && r !== n && (c && n && (w.isPlainObject(n) || (o = Array.isArray(n))) ? (i = r[t], s = o && !Array.isArray(i) ? [] : o || w.isPlainObject(i) ? i : {}, o = !1, r[t] = w.extend(c, s, n)) : void 0 !== n && (r[t] = n));
        return r
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== c.call(e) || (t = n(e)) && ("function" != typeof(i = d.call(t, "constructor") && t.constructor) || u.call(i) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, i) {
            y(e, {
                nonce: t && t.nonce
            }, i)
        },
        each: function(e, t) {
            var i, n = 0;
            if (T(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (T(Object(e)) ? w.merge(i, "string" == typeof e ? [e] : e) : r.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : a.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, o, r = 0,
                a = [];
            if (T(e))
                for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && a.push(o);
            else
                for (r in e) null != (o = t(e[r], r, i)) && a.push(o);
            return s(a)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var k = function(e) {
        var t, i, n, o, s, r, a, l, c, d, u, p, h, f, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            k = 0,
            x = le(),
            S = le(),
            C = le(),
            E = le(),
            A = function(e, t) {
                return e === t && (u = !0), 0
            },
            $ = {}.hasOwnProperty,
            L = [],
            D = L.pop,
            N = L.push,
            O = L.push,
            j = L.slice,
            P = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            q = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
            z = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            R = new RegExp(H + "+", "g"),
            W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            F = new RegExp("^" + H + "*," + H + "*"),
            B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            U = new RegExp(H + "|>"),
            X = new RegExp(z),
            Y = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
            ie = function(e, t) {
                var i = "0x" + e.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = function() {
                p()
            },
            re = _e((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(L = j.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (t) {
            O = {
                apply: L.length ? function(e, t) {
                    N.apply(e, j.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function ae(e, t, n, o) {
            var s, a, c, d, u, f, v, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return n;
            if (!o && (p(t), t = t || h, g)) {
                if (11 !== w && (u = Z.exec(e)))
                    if (s = u[1]) {
                        if (9 === w) {
                            if (!(c = t.getElementById(s))) return n;
                            if (c.id === s) return n.push(c), n
                        } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return n.push(c), n
                    } else {
                        if (u[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(s)), n
                    }
                if (i.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === w && (U.test(e) || B.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && i.scope || ((d = t.getAttribute("id")) ? d = d.replace(ne, oe) : t.setAttribute("id", d = _)), a = (f = r(e)).length; a--;) f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                        v = f.join(",")
                    }
                    try {
                        return O.apply(n, y.querySelectorAll(v)), n
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        d === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, n, o)
        }

        function le() {
            var e = [];
            return function t(i, o) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o
            }
        }

        function ce(e) {
            return e[_] = !0, e
        }

        function de(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var i = e.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = t
        }

        function pe(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce((function(t) {
                return t = +t, ce((function(i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = ae.support = {}, s = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    i = e && (e.ownerDocument || e).documentElement;
                return !K.test(t || i && i.nodeName || "HTML")
            }, p = ae.setDocument = function(e) {
                var t, o, r = e ? e.ownerDocument || e : w;
                return r != h && 9 === r.nodeType && r.documentElement && (f = (h = r).documentElement, g = !s(h), w != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", se, !1) : o.attachEvent && o.attachEvent("onunload", se)), i.scope = de((function(e) {
                    return f.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), i.attributes = de((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), i.getElementsByTagName = de((function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                })), i.getElementsByClassName = J.test(h.getElementsByClassName), i.getById = de((function(e) {
                    return f.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                })), i.getById ? (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(e) {
                    var t = e.replace(te, ie);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var i, n, o, s = t.getElementById(e);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                            for (o = t.getElementsByName(e), n = 0; s = o[n++];)
                                if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (i.qsa = J.test(h.querySelectorAll)) && (de((function(e) {
                    var t;
                    f.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                })), de((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (i.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de((function(e) {
                    i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", z)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : d ? P(d, e) - P(d, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i, n = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        r = [e],
                        a = [t];
                    if (!o || !s) return e == h ? -1 : t == h ? 1 : o ? -1 : s ? 1 : d ? P(d, e) - P(d, t) : 0;
                    if (o === s) return pe(e, t);
                    for (i = e; i = i.parentNode;) r.unshift(i);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (; r[n] === a[n];) n++;
                    return n ? pe(r[n], a[n]) : r[n] == w ? -1 : a[n] == w ? 1 : 0
                }), h
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (p(e), i.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    E(t, !0)
                }
                return 0 < ae(t, h, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != h && p(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != h && p(e);
                var o = n.attrHandle[t.toLowerCase()],
                    s = o && $.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== s ? s : i.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ne, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    s = 0;
                if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(A), u) {
                    for (; t = e[s++];) t === e[s] && (o = n.push(s));
                    for (; o--;) e.splice(n[o], 1)
                }
                return d = null, e
            }, o = ae.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += o(t);
                return i
            }, (n = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ie).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && x(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var o = ae.attr(n, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && -1 < o.indexOf(i) : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? -1 < (" " + o.replace(R, " ") + " ").indexOf(i) : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, o) {
                        var s = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var c, d, u, p, h, f, g = s !== r ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        f = g = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (b = (h = (c = (d = (u = (p = m)[_] || (p[_] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || f.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            d[e] = [T, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (c = (d = (u = (p = t)[_] || (p[_] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
                                    for (;
                                        (p = ++h && p && p[g] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[_] || (p[_] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, b]), p !== t)););
                                return (b -= o) === n || b % n == 0 && 0 <= b / n
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[_] ? o(t) : 1 < o.length ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, i) {
                            for (var n, s = o(e, t), r = s.length; r--;) e[n = P(e, s[r])] = !(i[n] = s[r])
                        })) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = [],
                            i = [],
                            n = a(e.replace(W, "$1"));
                        return n[_] ? ce((function(e, t, i, o) {
                            for (var s, r = n(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                        })) : function(e, o, s) {
                            return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
                        }
                    })),
                    has: ce((function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    })),
                    contains: ce((function(e) {
                        return e = e.replace(te, ie),
                            function(t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    })),
                    lang: ce((function(e) {
                        return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me((function() {
                        return [0]
                    })),
                    last: me((function(e, t) {
                        return [t - 1]
                    })),
                    eq: me((function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    })),
                    even: me((function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    })),
                    odd: me((function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    })),
                    lt: me((function(e, t, i) {
                        for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n;) e.push(n);
                        return e
                    })),
                    gt: me((function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    }))
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = fe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function _e(e, t, i) {
            var n = t.dir,
                o = t.next,
                s = o || n,
                r = i && "parentNode" === s,
                a = k++;
            return t.first ? function(t, i, o) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, o);
                return !1
            } : function(t, i, l) {
                var c, d, u, p = [T, a];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r)
                            if (d = (u = t[_] || (t[_] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((c = d[s]) && c[0] === T && c[1] === a) return p[2] = c[2];
                                if ((d[s] = p)[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function Te(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
            return r
        }

        function ke(e, t, i, n, o, s) {
            return n && !n[_] && (n = ke(n)), o && !o[_] && (o = ke(o, s)), ce((function(s, r, a, l) {
                var c, d, u, p = [],
                    h = [],
                    f = r.length,
                    g = s || function(e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) ae(e, t[n], i);
                        return i
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !s && t ? g : Te(g, p, e, a, l),
                    v = i ? o || (s ? e : f || n) ? [] : r : m;
                if (i && i(m, v, a, l), n)
                    for (c = Te(v, h), n(c, [], a, l), d = c.length; d--;)(u = c[d]) && (v[h[d]] = !(m[h[d]] = u));
                if (s) {
                    if (o || e) {
                        if (o) {
                            for (c = [], d = v.length; d--;)(u = v[d]) && c.push(m[d] = u);
                            o(null, v = [], c, l)
                        }
                        for (d = v.length; d--;)(u = v[d]) && -1 < (c = o ? P(s, u) : p[d]) && (s[c] = !(r[c] = u))
                    }
                } else v = Te(v === r ? v.splice(f, v.length) : v), o ? o(null, r, v, l) : O.apply(r, v)
            }))
        }

        function xe(e) {
            for (var t, i, o, s = e.length, r = n.relative[e[0].type], a = r || n.relative[" "], l = r ? 1 : 0, d = _e((function(e) {
                    return e === t
                }), a, !0), u = _e((function(e) {
                    return -1 < P(t, e)
                }), a, !0), p = [function(e, i, n) {
                    var o = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                    return t = null, o
                }]; l < s; l++)
                if (i = n.relative[e[l].type]) p = [_e(we(p), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (o = ++l; o < s && !n.relative[e[o].type]; o++);
                        return ke(1 < l && we(p), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), i, l < o && xe(e.slice(l, o)), o < s && xe(e = e.slice(o)), o < s && be(e))
                    }
                    p.push(i)
                }
            return we(p)
        }
        return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye, r = ae.tokenize = function(e, t) {
            var i, o, s, r, a, l, c, d = S[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], c = n.preFilter; a;) {
                for (r in i && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = B.exec(a)) && (i = o.shift(), s.push({
                        value: i,
                        type: o[0].replace(W, " ")
                    }), a = a.slice(i.length)), n.filter) !(o = V[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
                    value: i,
                    type: r,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? ae.error(e) : S(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var i, o, s, a, l, d, u = [],
                f = [],
                m = C[e + " "];
            if (!m) {
                for (t || (t = r(e)), i = t.length; i--;)(m = xe(t[i]))[_] ? u.push(m) : f.push(m);
                (m = C(e, (o = f, a = 0 < (s = u).length, l = 0 < o.length, d = function(e, t, i, r, d) {
                    var u, f, m, v = 0,
                        y = "0",
                        b = e && [],
                        _ = [],
                        w = c,
                        k = e || l && n.find.TAG("*", d),
                        x = T += null == w ? 1 : Math.random() || .1,
                        S = k.length;
                    for (d && (c = t == h || t || d); y !== S && null != (u = k[y]); y++) {
                        if (l && u) {
                            for (f = 0, t || u.ownerDocument == h || (p(u), i = !g); m = o[f++];)
                                if (m(u, t || h, i)) {
                                    r.push(u);
                                    break
                                }
                            d && (T = x)
                        }
                        a && ((u = !m && u) && v--, e && b.push(u))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; m = s[f++];) m(b, _, t, i);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || _[y] || (_[y] = D.call(r));
                            _ = Te(_)
                        }
                        O.apply(r, _), d && !e && 0 < _.length && 1 < v + s.length && ae.uniqueSort(r)
                    }
                    return d && (T = x, c = w), b
                }, a ? ce(d) : d))).selector = e
            }
            return m
        }, l = ae.select = function(e, t, i, o) {
            var s, l, c, d, u, p = "function" == typeof e && e,
                h = !o && r(e = p.selector || e);
            if (i = i || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (s = V.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !n.relative[d = c.type]);)
                    if ((u = n.find[d]) && (o = u(c.matches[0].replace(te, ie), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(s, 1), !(e = o.length && be(l))) return O.apply(i, o), i;
                        break
                    }
            }
            return (p || a(e, h))(o, t, !g, i, !t || ee.test(e) && ve(t.parentNode) || t), i
        }, i.sortStable = _.split("").sort(A).join("") === _, i.detectDuplicates = !!u, p(), i.sortDetached = de((function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        })), de((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ue("type|href|height|width", (function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), i.attributes && de((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ue("value", (function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), de((function(e) {
            return null == e.getAttribute("disabled")
        })) || ue(I, (function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        })), ae
    }(e);
    w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
    var x = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        S = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        C = w.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function $(e, t, i) {
        return f(t) ? w.grep(e, (function(e, n) {
            return !!t.call(e, n, e) !== i
        })) : t.nodeType ? w.grep(e, (function(e) {
            return e === t !== i
        })) : "string" != typeof t ? w.grep(e, (function(e) {
            return -1 < a.call(t, e) !== i
        })) : w.filter(t, e, i)
    }
    w.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? w.find.matchesSelector(n, e) ? [n] : [] : w.find.matches(e, w.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                for (t = 0; t < n; t++)
                    if (w.contains(o[t], this)) return !0
            })));
            for (i = this.pushStack([]), t = 0; t < n; t++) w.find(e, o[t], i);
            return 1 < n ? w.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack($(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack($(this, e || [], !0))
        },
        is: function(e) {
            return !!$(this, "string" == typeof e && C.test(e) ? w(e) : e || [], !1).length
        }
    });
    var L, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || L, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(n[1]) && w.isPlainObject(t))
                    for (n in t) f(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (o = m.getElementById(n[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : f(e) ? void 0 !== i.ready ? i.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, L = w(m);
    var N = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                i = t.length;
            return this.filter((function() {
                for (var e = 0; e < i; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var i, n = 0,
                o = this.length,
                s = [],
                r = "string" != typeof e && w(e);
            if (!C.test(e))
                for (; n < o; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && w.find.matchesSelector(i, e))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(1 < s.length ? w.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return x(e, "parentNode", i)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return x(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return x(e, "previousSibling", i)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function(e, t) {
        w.fn[e] = function(i, n) {
            var o = w.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = w.filter(n, o)), 1 < this.length && (O[e] || w.uniqueSort(o), N.test(e) && o.reverse()), this.pushStack(o)
        }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function M(e, t, i, n) {
        var o;
        try {
            e && f(o = e.promise) ? o.call(e).done(t).fail(i) : e && f(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, i;
        e = "string" == typeof e ? (t = e, i = {}, w.each(t.match(P) || [], (function(e, t) {
            i[t] = !0
        })), i) : w.extend({}, e);
        var n, o, s, r, a = [],
            l = [],
            c = -1,
            d = function() {
                for (r = r || e.once, s = n = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && e.stopOnFalse && (c = a.length, o = !1);
                e.memory || (o = !1), n = !1, r && (a = o ? [] : "")
            },
            u = {
                add: function() {
                    return a && (o && !n && (c = a.length - 1, l.push(o)), function t(i) {
                        w.each(i, (function(i, n) {
                            f(n) ? e.unique && u.has(n) || a.push(n) : n && n.length && "string" !== b(n) && t(n)
                        }))
                    }(arguments), o && !n && d()), this
                },
                remove: function() {
                    return w.each(arguments, (function(e, t) {
                        for (var i; - 1 < (i = w.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
                    })), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = o = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], o || n || (a = o = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), n || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return u
    }, w.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred((function(t) {
                            w.each(i, (function(i, n) {
                                var o = f(e[n[4]]) && e[n[4]];
                                s[n[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, o ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, n, o) {
                        var s = 0;

                        function r(t, i, n, o) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < s)) {
                                            if ((e = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, f(c) ? o ? c.call(e, r(s, i, I, o), r(s, i, H, o)) : (s++, c.call(e, r(s, i, I, o), r(s, i, H, o), r(s, i, I, i.notifyWith))) : (n !== I && (a = void 0, l = [e]), (o || i.resolveWith)(a, l))
                                        }
                                    },
                                    d = o ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, d.stackTrace), s <= t + 1 && (n !== H && (a = void 0, l = [e]), i.rejectWith(a, l))
                                        }
                                    };
                                t ? d() : (w.Deferred.getStackHook && (d.stackTrace = w.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        return w.Deferred((function(e) {
                            i[0][3].add(r(0, e, f(o) ? o : I, e.notifyWith)), i[1][3].add(r(0, e, f(t) ? t : I)), i[2][3].add(r(0, e, f(n) ? n : H))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, o) : o
                    }
                },
                s = {};
            return w.each(i, (function(e, t) {
                var r = t[2],
                    a = t[5];
                o[t[1]] = r.add, a && r.add((function() {
                    n = a
                }), i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), r.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = r.fireWith
            })), o.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                s = o.call(arguments),
                r = w.Deferred(),
                a = function(e) {
                    return function(i) {
                        n[e] = this, s[e] = 1 < arguments.length ? o.call(arguments) : i, --t || r.resolveWith(n, s)
                    }
                };
            if (t <= 1 && (M(e, r.done(a(i)).resolve, r.reject, !t), "pending" === r.state() || f(s[i] && s[i].then))) return r.then();
            for (; i--;) M(s[i], a(i), r.reject);
            return r.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, w.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var z = w.Deferred();

    function R() {
        m.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), w.ready()
    }
    w.fn.ready = function(e) {
        return z.then(e).catch((function(e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || z.resolveWith(m, [w])
        }
    }), w.ready.then = z.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));
    var W = function(e, t, i, n, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === b(i))
                for (a in o = !0, i) W(e, t, a, i[a], !0, s, r);
            else if (void 0 !== n && (o = !0, f(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(w(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
        },
        F = /^-ms-/,
        B = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(F, "ms-").replace(B, U)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = w.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[X(t)] = i;
            else
                for (n in t) o[X(n)] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in n ? [t] : t.match(P) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || w.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var K = new V,
        Q = new V,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, i) {
        var n, o;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                Q.set(e, t, i)
            } else i = void 0;
        return i
    }
    w.extend({
        hasData: function(e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function(e, t, i) {
            return Q.access(e, t, i)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, i) {
            return K.access(e, t, i)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var i, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = Q.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = X(n.slice(5)), Z(s, n, o[n]));
                    K.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            })) : W(this, (function(t) {
                var i;
                if (s && void 0 === t) return void 0 !== (i = Q.get(s, e)) || void 0 !== (i = Z(s, e)) ? i : void 0;
                this.each((function() {
                    Q.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = K.get(e, t), i && (!n || Array.isArray(i) ? n = K.access(e, t, w.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = w.queue(e, t),
                n = i.length,
                o = i.shift(),
                s = w._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, (function() {
                w.dequeue(e, t)
            }), s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return K.get(e, i) || K.access(e, i, {
                empty: w.Callbacks("once memory").add((function() {
                    K.remove(e, [t + "queue", i])
                }))
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var i = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = w.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = K.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = m.documentElement,
        oe = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    ne.getRootNode && (oe = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
    };

    function ae(e, t, i, n) {
        var o, s, r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return w.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (w.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; r--;) w.style(e, t, d + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), d /= s;
            d *= 2, w.style(e, t, d + c), i = i || []
        }
        return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
    }
    var le = {};

    function ce(e, t) {
        for (var i, n, o, s, r, a, l, c = [], d = 0, u = e.length; d < u; d++)(n = e[d]).style && (i = n.style.display, t ? ("none" === i && (c[d] = K.get(n, "display") || null, c[d] || (n.style.display = "")), "" === n.style.display && re(n) && (c[d] = (l = r = s = void 0, r = (o = n).ownerDocument, a = o.nodeName, (l = le[a]) || (s = r.body.appendChild(r.createElement(a)), l = w.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), le[a] = l)))) : "none" !== i && (c[d] = "none", K.set(n, "display", i)));
        for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
        return e
    }
    w.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                re(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var de, ue, pe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i;
    de = m.createDocumentFragment().appendChild(m.createElement("div")), (ue = m.createElement("input")).setAttribute("type", "radio"), ue.setAttribute("checked", "checked"), ue.setAttribute("name", "t"), de.appendChild(ue), h.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", h.option = !!de.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? w.merge([e], i) : i
    }

    function ve(e, t) {
        for (var i = 0, n = e.length; i < n; i++) K.set(e[i], "globalEval", !t || K.get(t[i], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, h.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, i, n, o) {
        for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if ((s = e[h]) || 0 === s)
                if ("object" === b(s)) w.merge(p, s.nodeType ? [s] : s);
                else if (ye.test(s)) {
            for (r = r || u.appendChild(t.createElement("div")), a = (he.exec(s) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, r.innerHTML = l[1] + w.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
            w.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(s));
        for (u.textContent = "", h = 0; s = p[h++];)
            if (n && -1 < w.inArray(s, n)) o && o.push(s);
            else if (c = oe(s), r = me(u.appendChild(s), "script"), c && ve(r), i)
            for (d = 0; s = r[d++];) fe.test(s.type || "") && i.push(s);
        return u
    }
    var _e = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function xe(e, t, i, n, o, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) xe(e, a, i, n, t[a], s);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = Te;
        else if (!o) return e;
        return 1 === s && (r = o, (o = function(e) {
            return w().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = w.guid++)), e.each((function() {
            w.event.add(this, t, o, n, i)
        }))
    }

    function Se(e, t, i) {
        i ? (K.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, s, r = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = o.call(arguments), K.set(this, t, r), n = i(this, t), this[t](), r !== (s = K.get(this, t)) || n ? K.set(this, t, !1) : s = {}, r !== s) return e.stopImmediatePropagation(), e.preventDefault(), s && s.value
                } else r.length && (K.set(this, t, {
                    value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, p, h, f, g, m = K.get(e);
            if (Y(e))
                for (i.handler && (i = (s = i).handler, o = s.selector), o && w.find.matchesSelector(ne, o), i.guid || (i.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(P) || [""]).length; c--;) h = g = (a = _e.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (u = w.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = w.event.special[h] || {}, d = w.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, s), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(h, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), w.event.global[h] = !0)
        },
        remove: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, p, h, f, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;)
                    if (h = g = (a = _e.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = w.event.special[h] || {}, p = l[h = (n ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        r && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, m.handle) || w.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) w.event.remove(e, h + t[c], i, n, !0);
                w.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, o, s, r, a = new Array(arguments.length),
                l = w.event.fix(e),
                c = (K.get(this, "events") || Object.create(null))[l.type] || [],
                d = w.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                for (r = w.event.handlers.call(this, l, c), t = 0;
                    (o = r[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, i = 0;
                        (s = o.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (n = ((w.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, s, r, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (s = [], r = {}, i = 0; i < l; i++) void 0 === r[o = (n = t[i]).selector + " "] && (r[o] = n.needsContext ? -1 < w(o, this).index(c) : w.find(o, this, null, [c]).length), r[o] && s.push(n);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: f(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && E(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && E(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && E(t, "input") && K.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Se(this, e, ke), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget,
                    o = e.handleObj;
                return n && (n === this || w.contains(this, n)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    })), w.fn.extend({
        on: function(e, t, i, n) {
            return xe(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return xe(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Te), this.each((function() {
                w.event.remove(this, e, i, t)
            }))
        }
    });
    var Ce = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $e(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var i, n, o, s, r, a;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.get(e).events))
                for (o in K.remove(t, "handle events"), a)
                    for (i = 0, n = a[o].length; i < n; i++) w.event.add(t, o, a[o][i]);
            Q.hasData(e) && (s = Q.access(e), r = w.extend({}, s), Q.set(t, r))
        }
    }

    function Oe(e, t, i, n) {
        t = s(t);
        var o, r, a, l, c, d, u = 0,
            p = e.length,
            g = p - 1,
            m = t[0],
            v = f(m);
        if (v || 1 < p && "string" == typeof m && !h.checkClone && Ee.test(m)) return e.each((function(o) {
            var s = e.eq(o);
            v && (t[0] = m.call(this, o, s.html())), Oe(s, t, i, n)
        }));
        if (p && (r = (o = be(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
            for (l = (a = w.map(me(o, "script"), Le)).length; u < p; u++) c = o, u !== g && (c = w.clone(c, !0, !0), l && w.merge(a, me(c, "script"))), i.call(e[u], c, u);
            if (l)
                for (d = a[a.length - 1].ownerDocument, w.map(a, De), u = 0; u < l; u++) c = a[u], fe.test(c.type || "") && !K.access(c, "globalEval") && w.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, d) : y(c.textContent.replace(Ae, ""), c, d))
        }
        return e
    }

    function je(e, t, i) {
        for (var n, o = t ? w.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || w.cleanData(me(n)), n.parentNode && (i && oe(n) && ve(me(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, i) {
            var n, o, s, r, a, l, c, d = e.cloneNode(!0),
                u = oe(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (r = me(d), n = 0, o = (s = me(e)).length; n < o; n++) a = s[n], "input" === (c = (l = r[n]).nodeName.toLowerCase()) && pe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (s = s || me(e), r = r || me(d), n = 0, o = s.length; n < o; n++) Ne(s[n], r[n]);
                else Ne(e, d);
            return 0 < (r = me(d, "script")).length && ve(r, !u && me(e, "script")), d
        },
        cleanData: function(e) {
            for (var t, i, n, o = w.event.special, s = 0; void 0 !== (i = e[s]); s++)
                if (Y(i)) {
                    if (t = i[K.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? w.event.remove(i, n) : w.removeEvent(i, n, t.handle);
                        i[K.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return je(this, e, !0)
        },
        remove: function(e) {
            return je(this, e)
        },
        text: function(e) {
            return W(this, (function(e) {
                return void 0 === e ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Oe(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = $e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Oe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Oe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return w.clone(this, e, t)
            }))
        },
        html: function(e) {
            return W(this, (function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Oe(this, arguments, (function(t) {
                var i = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), i && i.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        w.fn[e] = function(e) {
            for (var i, n = [], o = w(e), s = o.length - 1, a = 0; a <= s; a++) i = a === s ? this : this.clone(!0), w(o[a])[t](i), r.apply(n, i.get());
            return this.pushStack(n)
        }
    }));
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        He = function(e, t, i) {
            var n, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in n = i.call(e), t) e.style[o] = s[o];
            return n
        },
        Me = new RegExp(ie.join("|"), "i");

    function qe(e, t, i) {
        var n, o, s, r, a = e.style;
        return (i = i || Ie(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || oe(e) || (r = w.style(e, t)), !h.pixelBoxStyles() && Pe.test(r) && Me.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                n = "1%" !== t.top, l = 12 === i(t.marginLeft), d.style.right = "60%", r = 36 === i(t.right), o = 36 === i(t.width), d.style.position = "absolute", s = 12 === i(d.offsetWidth / 3), ne.removeChild(c), d = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var n, o, s, r, a, l, c = m.createElement("div"),
            d = m.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === d.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), r
            },
            pixelPosition: function() {
                return t(), n
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            },
            reliableTrDimensions: function() {
                var t, i, n, o;
                return null == a && (t = m.createElement("table"), i = m.createElement("tr"), n = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", i.style.cssText = "border:1px solid", i.style.height = "1px", n.style.height = "9px", n.style.display = "block", ne.appendChild(t).appendChild(i).appendChild(n), o = e.getComputedStyle(i), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === i.offsetHeight, ne.removeChild(t)), a
            }
        }))
    }();
    var Re = ["Webkit", "Moz", "ms"],
        We = m.createElement("div").style,
        Fe = {};

    function Be(e) {
        return w.cssProps[e] || Fe[e] || (e in We ? e : Fe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = Re.length; i--;)
                if ((e = Re[i] + t) in We) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ke(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Qe(e, t, i, n, o, s) {
        var r = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += w.css(e, i + ie[r], !0, o)), n ? ("content" === i && (l -= w.css(e, "padding" + ie[r], !0, o)), "margin" !== i && (l -= w.css(e, "border" + ie[r] + "Width", !0, o))) : (l += w.css(e, "padding" + ie[r], !0, o), "padding" !== i ? l += w.css(e, "border" + ie[r] + "Width", !0, o) : a += w.css(e, "border" + ie[r] + "Width", !0, o));
        return !n && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l
    }

    function Ge(e, t, i) {
        var n = Ie(e),
            o = (!h.boxSizingReliable() || i) && "border-box" === w.css(e, "boxSizing", !1, n),
            s = o,
            r = qe(e, t, n),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && E(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, n)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, n), (s = a in e) && (r = e[a])), (r = parseFloat(r) || 0) + Qe(e, t, i || (o ? "border" : "content"), s, n, r) + "px"
    }

    function Je(e, t, i, n, o) {
        return new Je.prototype.init(e, t, i, n, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = qe(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = X(t),
                    l = Xe.test(t),
                    c = e.style;
                if (l || (t = Be(a)), r = w.cssHooks[t] || w.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : c[t];
                "string" == (s = typeof i) && (o = te.exec(i)) && o[1] && (i = ae(e, t, o), s = "number"), null != i && i == i && ("number" !== s || l || (i += o && o[3] || (w.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var o, s, r, a = X(t);
            return Xe.test(t) || (t = Be(a)), (r = w.cssHooks[t] || w.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = qe(e, t, n)), "normal" === o && t in Ve && (o = Ve[t]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
        }
    }), w.each(["height", "width"], (function(e, t) {
        w.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return !Ue.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, n) : He(e, Ye, (function() {
                    return Ge(e, t, n)
                }))
            },
            set: function(e, i, n) {
                var o, s = Ie(e),
                    r = !h.scrollboxSize() && "absolute" === s.position,
                    a = (r || n) && "border-box" === w.css(e, "boxSizing", !1, s),
                    l = n ? Qe(e, t, n, a, s) : 0;
                return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Qe(e, t, "border", !1, s) - .5)), l && (o = te.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = w.css(e, t)), Ke(0, i, l)
            }
        }
    })), w.cssHooks.marginLeft = ze(h.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + ie[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    })), w.fn.extend({
        css: function(e, t) {
            return W(this, (function(e, t, i) {
                var n, o, s = {},
                    r = 0;
                if (Array.isArray(t)) {
                    for (n = Ie(e), o = t.length; r < o; r++) s[t[r]] = w.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? w.style(e, t, i) : w.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((w.Tween = Je).prototype = {
        constructor: Je,
        init: function(e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (w.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Be(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = Je.prototype.init, w.fx.step = {};
    var Ze, et, tt, it, nt = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function st() {
        et && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick())
    }

    function rt() {
        return e.setTimeout((function() {
            Ze = void 0
        })), Ze = Date.now()
    }

    function at(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ie[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function lt(e, t, i) {
        for (var n, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (n = o[s].call(i, t, e)) return n
    }

    function ct(e, t, i) {
        var n, o, s = 0,
            r = ct.prefilters.length,
            a = w.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (o) return !1;
                for (var t = Ze || rt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(n);
                return a.notifyWith(e, [c, n, i]), n < 1 && r ? i : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Ze || rt(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = w.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var i, n, o, s, r;
                for (i in e)
                    if (o = t[n = X(i)], s = e[i], Array.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = w.cssHooks[n]) && "expand" in r)
                        for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
                    else t[n] = o
            }(d, c.opts.specialEasing); s < r; s++)
            if (n = ct.prefilters[s].call(c, e, d, c.opts)) return f(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return w.map(d, lt, c), f(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ct, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return ae(i.elem, e, te.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            f(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var i, n = 0, o = e.length; n < o; n++) i = e[n], ct.tweeners[i] = ct.tweeners[i] || [], ct.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, o, s, r, a, l, c, d, u = "width" in t || "height" in t,
                p = this,
                h = {},
                f = e.style,
                g = e.nodeType && re(e),
                m = K.get(e, "fxshow");
            for (n in i.queue || (null == (r = w._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || a()
                }), r.unqueued++, p.always((function() {
                    p.always((function() {
                        r.unqueued--, w.queue(e, "fx").length || r.empty.fire()
                    }))
                }))), t)
                if (o = t[n], nt.test(o)) {
                    if (delete t[n], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[n]) continue;
                        g = !0
                    }
                    h[n] = m && m[n] || w.style(e, n)
                }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (d = w.css(e, "display")) && (c ? d = c : (ce([e], !0), c = e.style.display || c, d = w.css(e, "display"), ce([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === w.css(e, "float") && (l || (p.done((function() {
                        f.display = c
                    })), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always((function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                    display: c
                }), s && (m.hidden = !g), g && ce([e], !0), p.done((function() {
                    for (n in g || ce([e]), K.remove(e, "fxshow"), h) w.style(e, n, h[n])
                }))), l = lt(g ? m[n] : 0, n, p), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), w.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? w.extend({}, e) : {
            complete: i || !i && t || f(e) && e,
            duration: e,
            easing: i && t || t && !f(t) && t
        };
        return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            f(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue)
        }, n
    }, w.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var o = w.isEmptyObject(e),
                s = w.speed(t, i, n),
                r = function() {
                    var t = ct(this, w.extend({}, e), s);
                    (o || K.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    s = w.timers,
                    r = K.get(this);
                if (o) r[o] && r[o].stop && n(r[o]);
                else
                    for (o in r) r[o] && r[o].stop && ot.test(o) && n(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
                !t && i || w.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, i = K.get(this),
                    n = i[e + "queue"],
                    o = i[e + "queueHooks"],
                    s = w.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function(e, t) {
        var i = w.fn[t];
        w.fn[t] = function(e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(t, !0), e, n, o)
        }
    })), w.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        w.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    })), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            i = w.timers;
        for (Ze = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || w.fx.stop(), Ze = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        et || (et = !0, st())
    }, w.fx.stop = function() {
        et = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, i) {
        return t = w.fx && w.fx.speeds[t] || t, i = i || "fx", this.queue(i, (function(i, n) {
            var o = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(o)
            }
        }))
    }, tt = m.createElement("input"), it = m.createElement("select").appendChild(m.createElement("option")), tt.type = "checkbox", h.checkOn = "" !== tt.value, h.optSelected = it.selected, (tt = m.createElement("input")).value = "t", tt.type = "radio", h.radioValue = "t" === tt.value;
    var dt, ut = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? w.prop(e, t, i) : (1 === s && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== i ? null === i ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = w.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && E(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; i = o[n++];) e.removeAttribute(i)
        }
    }), dt = {
        set: function(e, t, i) {
            return !1 === t ? w.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var i = ut[t] || w.find.attr;
        ut[t] = function(e, t, n) {
            var o, s, r = t.toLowerCase();
            return n || (s = ut[r], ut[r] = o, o = null != i(e, t, n) ? r : null, ut[r] = s), o
        }
    }));
    var pt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function(e) {
            var t, i, n, o, s, r, a, l = 0;
            if (f(e)) return this.each((function(t) {
                w(this).addClass(e.call(this, t, gt(this)))
            }));
            if ((t = mt(e)).length)
                for (; i = this[l++];)
                    if (o = gt(i), n = 1 === i.nodeType && " " + ft(o) + " ") {
                        for (r = 0; s = t[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o !== (a = ft(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, s, r, a, l = 0;
            if (f(e)) return this.each((function(t) {
                w(this).removeClass(e.call(this, t, gt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; i = this[l++];)
                    if (o = gt(i), n = 1 === i.nodeType && " " + ft(o) + " ") {
                        for (r = 0; s = t[r++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        o !== (a = ft(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : f(e) ? this.each((function(i) {
                w(this).toggleClass(e.call(this, i, gt(this), t), t)
            })) : this.each((function() {
                var t, o, s, r;
                if (n)
                    for (o = 0, s = w(this), r = mt(e); t = r[o++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + ft(gt(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = f(e), this.each((function(i) {
                var o;
                1 === this.nodeType && (null == (o = n ? e.call(this, i, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(vt, "") : null == i ? "" : i : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : ft(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, o = e.options,
                        s = e.selectedIndex,
                        r = "select-one" === e.type,
                        a = r ? null : [],
                        l = r ? s + 1 : o.length;
                    for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                        if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))) {
                            if (t = w(i).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, s = w.makeArray(t), r = o.length; r--;)((n = o[r]).selected = -1 < w.inArray(w.valHooks.option.get(n), s)) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), h.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, i, n, o) {
            var s, r, a, l, c, u, p, h, v = [n || m],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = h = a = n = n || m, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : w.makeArray(i, [t]), p = w.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, i))) {
                if (!o && !p.noBubble && !g(n)) {
                    for (l = p.delegateType || y, yt.test(l + y) || (r = r.parentNode); r; r = r.parentNode) v.push(r), a = r;
                    a === (n.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e)
                }
                for (s = 0;
                    (r = v[s++]) && !t.isPropagationStopped();) h = r, t.type = 1 < s ? l : p.bindType || y, (u = (K.get(r, "events") || Object.create(null))[t.type] && K.get(r, "handle")) && u.apply(r, i), (u = c && r[c]) && u.apply && Y(r) && (t.result = u.apply(r, i), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), i) || !Y(n) || c && f(n[y]) && !g(n) && ((a = n[c]) && (n[c] = null), w.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, bt), n[y](), t.isPropagationStopped() && h.removeEventListener(y, bt), w.event.triggered = void 0, a && (n[c] = a)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = w.extend(new w.Event, i, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(n, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return w.event.trigger(e, t, i, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var i = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this,
                    o = K.access(n, t);
                o || n.addEventListener(e, i, !0), K.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this,
                    o = K.access(n, t) - 1;
                o ? K.access(n, t, o) : (n.removeEventListener(e, i, !0), K.remove(n, t))
            }
        }
    }));
    var _t = e.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    w.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return n = i && i.getElementsByTagName("parsererror")[0], i && !n || w.error("Invalid XML: " + (n ? w.map(n.childNodes, (function(e) {
            return e.textContent
        })).join("\n") : t)), i
    };
    var kt = /\[\]$/,
        xt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, i, n) {
        var o;
        if (Array.isArray(t)) w.each(t, (function(t, o) {
            i || kt.test(e) ? n(e, o) : Et(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
        }));
        else if (i || "object" !== b(t)) n(e, t);
        else
            for (o in t) Et(e + "[" + o + "]", t[o], i, n)
    }
    w.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                var i = f(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
            o(this.name, this.value)
        }));
        else
            for (i in e) Et(i, e[i], t, o);
        return n.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            })).map((function(e, t) {
                var i = w(this).val();
                return null == i ? null : Array.isArray(i) ? w.map(i, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: i.replace(xt, "\r\n")
                }
            })).get()
        }
    });
    var At = /%20/g,
        $t = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        jt = {},
        Pt = {},
        It = "*/".concat("*"),
        Ht = m.createElement("a");

    function Mt(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                s = t.toLowerCase().match(P) || [];
            if (f(i))
                for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function qt(e, t, i, n) {
        var o = {},
            s = e === Pt;

        function r(a) {
            var l;
            return o[a] = !0, w.each(e[a] || [], (function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            })), l
        }
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function zt(e, t) {
        var i, n, o = w.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && w.extend(!0, e, n), e
    }
    Ht.href = _t.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(jt),
        ajaxTransport: Mt(Pt),
        ajax: function(t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var n, o, s, r, a, l, c, d, u, p, h = w.ajaxSetup({}, i),
                f = h.context || h,
                g = h.context && (f.nodeType || f.jquery) ? w(f) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = h.statusCode || {},
                _ = {},
                T = {},
                k = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!r)
                                for (r = {}; t = Dt.exec(s);) r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = r[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) x.always(e[x.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || k;
                        return n && n.abort(t), S(0, t), this
                    }
                };
            if (v.promise(x), h.url = ((t || h.url || _t.href) + "").replace(Ot, _t.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), qt(jt, h, i, x), c) return x;
            for (u in (d = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Nt.test(h.type), o = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Tt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), p = (Tt.test(o) ? "&" : "?") + "_=" + wt.guid++ + p), h.url = o + p), h.ifModified && (w.lastModified[o] && x.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && x.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, x, h) || c)) return x.abort();
            if (k = "abort", y.add(h.complete), x.done(h.success), x.fail(h.error), n = qt(Pt, h, i, x)) {
                if (x.readyState = 1, d && g.trigger("ajaxSend", [x, h]), c) return x;
                h.async && 0 < h.timeout && (a = e.setTimeout((function() {
                    x.abort("timeout")
                }), h.timeout));
                try {
                    c = !1, n.send(_, S)
                } catch (t) {
                    if (c) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, i, r, l) {
                var u, p, m, _, T, k = i;
                c || (c = !0, a && e.clearTimeout(a), n = void 0, s = l || "", x.readyState = 0 < t ? 4 : 0, u = 200 <= t && t < 300 || 304 === t, r && (_ = function(e, t, i) {
                    for (var n, o, s, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(h, x, r)), !u && -1 < w.inArray("script", h.dataTypes) && w.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), _ = function(e, t, i, n) {
                    var o, s, r, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;)
                        if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, _, x, u), u ? (h.ifModified && ((T = x.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = x.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = _.state, p = _.data, u = !(m = _.error))) : (m = k, !t && k || (k = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (i || k) + "", u ? v.resolveWith(f, [p, k, x]) : v.rejectWith(f, [x, k, m]), x.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [x, h, u ? p : m]), y.fireWith(f, [x, k]), d && (g.trigger("ajaxComplete", [x, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, i) {
            return w.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function(e, t) {
        w[t] = function(e, i, n, o) {
            return f(i) && (o = o || n, n = i, i = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            }, w.isPlainObject(e) && e))
        }
    })), w.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), w._evalUrl = function(e, t, i) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t, i)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (f(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return f(e) ? this.each((function(t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = w(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = f(e);
            return this.each((function(i) {
                w(this).wrapAll(t ? e.call(this, i) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        Wt = w.ajaxSettings.xhr();
    h.cors = !!Wt && "withCredentials" in Wt, h.ajax = Wt = !!Wt, w.ajaxTransport((function(t) {
        var i, n;
        if (h.cors || Wt && !t.crossDomain) return {
            send: function(o, s) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(r, o[r]);
                i = function(e) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        i && n()
                    }))
                }, i = i("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (i) throw o
                }
            },
            abort: function() {
                i && i()
            }
        }
    })), w.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function(e) {
        var t, i;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(n, o) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    }));
    var Ft, Bt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || w.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function(t, i, n) {
        var o, s, r, a = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + o) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || w.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, n.always((function() {
            void 0 === s ? w(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, Bt.push(o)), r && f(s) && s(r[0]), r = s = void 0
        })), "script"
    })), h.createHTMLDocument = ((Ft = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), w.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (h.createHTMLDocument ? ((n = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(n)) : t = m), s = !i && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
        var n, o, s
    }, w.fn.load = function(e, t, i) {
        var n, o, s, r = this,
            a = e.indexOf(" ");
        return -1 < a && (n = ft(e.slice(a)), e = e.slice(0, a)), f(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            s = arguments, r.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e)
        })).always(i && function(e, t) {
            r.each((function() {
                i.apply(this, s || [e.responseText, t, e])
            }))
        }), this
    }, w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, (function(t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function(e, t, i) {
            var n, o, s, r, a, l, c = w.css(e, "position"),
                d = w(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (n = d.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), f(t) && (t = t.call(e, i, w.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(n, "marginTop", !0),
                    left: t.left - o.left - w.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ne
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var i = "pageYOffset" === t;
        w.fn[e] = function(n) {
            return W(this, (function(e, n, o) {
                var s;
                if (g(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === o) return s ? s[t] : e[n];
                s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : e[n] = o
            }), e, n, arguments.length)
        }
    })), w.each(["top", "left"], (function(e, t) {
        w.cssHooks[t] = ze(h.pixelPosition, (function(e, i) {
            if (i) return i = qe(e, t), Pe.test(i) ? w(e).position()[t] + "px" : i
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(i, n) {
            w.fn[n] = function(o, s) {
                var r = arguments.length && (i || "boolean" != typeof o),
                    a = i || (!0 === o || !0 === s ? "margin" : "border");
                return W(this, (function(t, i, o) {
                    var s;
                    return g(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? w.css(t, i, a) : w.style(t, i, o, a)
                }), t, r ? o : void 0, r)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), w.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        w.fn[t] = function(e, i) {
            return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
        }
    }));
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function(e, t) {
        var i, n, s;
        if ("string" == typeof t && (i = e[t], t = e, e = i), f(e)) return n = o.call(arguments, 2), (s = function() {
            return e.apply(t || this, n.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, s
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = E, w.isFunction = f, w.isWindow = g, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }));
    var Yt = e.jQuery,
        Vt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Vt), t && e.jQuery === w && (e.jQuery = Yt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper)
}(this, (function(e) {
    "use strict";
    const t = function(e) {
            if (e && e.__esModule) return e;
            const t = Object.create(null);
            if (e)
                for (const i in e)
                    if ("default" !== i) {
                        const n = Object.getOwnPropertyDescriptor(e, i);
                        Object.defineProperty(t, i, n.get ? n : {
                            enumerable: !0,
                            get: () => e[i]
                        })
                    }
            return t.default = e, Object.freeze(t)
        }(e),
        i = "transitionend",
        n = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let i = e.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), t = i && "#" !== i ? i.trim() : null
            }
            return t
        },
        o = e => {
            const t = n(e);
            return t && document.querySelector(t) ? t : null
        },
        s = e => {
            const t = n(e);
            return t ? document.querySelector(t) : null
        },
        r = e => {
            e.dispatchEvent(new Event(i))
        },
        a = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        l = e => a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
        c = (e, t, i) => {
            Object.keys(i).forEach((n => {
                const o = i[n],
                    s = t[n],
                    r = s && a(s) ? "element" : null == (l = s) ? `${l}` : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                var l;
                if (!new RegExp(o).test(r)) throw new TypeError(`${e.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${o}".`)
            }))
        },
        d = e => !(!a(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        u = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
        p = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? p(e.parentNode) : null
        },
        h = () => {},
        f = e => {
            e.offsetHeight
        },
        g = () => {
            const {
                jQuery: e
            } = window;
            return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
        },
        m = [],
        v = () => "rtl" === document.documentElement.dir,
        y = e => {
            var t;
            t = () => {
                const t = g();
                if (t) {
                    const i = e.NAME,
                        n = t.fn[i];
                    t.fn[i] = e.jQueryInterface, t.fn[i].Constructor = e, t.fn[i].noConflict = () => (t.fn[i] = n, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => {
                m.forEach((e => e()))
            })), m.push(t)) : t()
        },
        b = e => {
            "function" == typeof e && e()
        },
        _ = (e, t, n = !0) => {
            if (!n) return void b(e);
            const o = (e => {
                if (!e) return 0;
                let {
                    transitionDuration: t,
                    transitionDelay: i
                } = window.getComputedStyle(e);
                const n = Number.parseFloat(t),
                    o = Number.parseFloat(i);
                return n || o ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0
            })(t) + 5;
            let s = !1;
            const a = ({
                target: n
            }) => {
                n === t && (s = !0, t.removeEventListener(i, a), b(e))
            };
            t.addEventListener(i, a), setTimeout((() => {
                s || r(t)
            }), o)
        },
        w = (e, t, i, n) => {
            let o = e.indexOf(t);
            if (-1 === o) return e[!i && n ? e.length - 1 : 0];
            const s = e.length;
            return o += i ? 1 : -1, n && (o = (o + s) % s), e[Math.max(0, Math.min(o, s - 1))]
        },
        T = /[^.]*(?=\..*)\.|.*/,
        k = /\..*/,
        x = /::\d+$/,
        S = {};
    let C = 1;
    const E = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        A = /^(mouseenter|mouseleave)/i,
        $ = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function L(e, t) {
        return t && `${t}::${C++}` || e.uidEvent || C++
    }

    function D(e) {
        const t = L(e);
        return e.uidEvent = t, S[t] = S[t] || {}, S[t]
    }

    function N(e, t, i = null) {
        const n = Object.keys(e);
        for (let o = 0, s = n.length; o < s; o++) {
            const s = e[n[o]];
            if (s.originalHandler === t && s.delegationSelector === i) return s
        }
        return null
    }

    function O(e, t, i) {
        const n = "string" == typeof t,
            o = n ? i : t;
        let s = I(e);
        return $.has(s) || (s = e), [n, o, s]
    }

    function j(e, t, i, n, o) {
        if ("string" != typeof t || !e) return;
        if (i || (i = n, n = null), A.test(t)) {
            const e = e => function(t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            };
            n ? n = e(n) : i = e(i)
        }
        const [s, r, a] = O(t, i, n), l = D(e), c = l[a] || (l[a] = {}), d = N(c, r, s ? i : null);
        if (d) return void(d.oneOff = d.oneOff && o);
        const u = L(r, t.replace(T, "")),
            p = s ? function(e, t, i) {
                return function n(o) {
                    const s = e.querySelectorAll(t);
                    for (let {
                            target: r
                        } = o; r && r !== this; r = r.parentNode)
                        for (let a = s.length; a--;)
                            if (s[a] === r) return o.delegateTarget = r, n.oneOff && H.off(e, o.type, t, i), i.apply(r, [o]);
                    return null
                }
            }(e, i, n) : function(e, t) {
                return function i(n) {
                    return n.delegateTarget = e, i.oneOff && H.off(e, n.type, t), t.apply(e, [n])
                }
            }(e, i);
        p.delegationSelector = s ? i : null, p.originalHandler = r, p.oneOff = o, p.uidEvent = u, c[u] = p, e.addEventListener(a, p, s)
    }

    function P(e, t, i, n, o) {
        const s = N(t[i], n, o);
        s && (e.removeEventListener(i, s, Boolean(o)), delete t[i][s.uidEvent])
    }

    function I(e) {
        return e = e.replace(k, ""), E[e] || e
    }
    const H = {
            on(e, t, i, n) {
                j(e, t, i, n, !1)
            },
            one(e, t, i, n) {
                j(e, t, i, n, !0)
            },
            off(e, t, i, n) {
                if ("string" != typeof t || !e) return;
                const [o, s, r] = O(t, i, n), a = r !== t, l = D(e), c = t.startsWith(".");
                if (void 0 !== s) {
                    if (!l || !l[r]) return;
                    return void P(e, l, r, s, o ? i : null)
                }
                c && Object.keys(l).forEach((i => {
                    ! function(e, t, i, n) {
                        const o = t[i] || {};
                        Object.keys(o).forEach((s => {
                            if (s.includes(n)) {
                                const n = o[s];
                                P(e, t, i, n.originalHandler, n.delegationSelector)
                            }
                        }))
                    }(e, l, i, t.slice(1))
                }));
                const d = l[r] || {};
                Object.keys(d).forEach((i => {
                    const n = i.replace(x, "");
                    if (!a || t.includes(n)) {
                        const t = d[i];
                        P(e, l, r, t.originalHandler, t.delegationSelector)
                    }
                }))
            },
            trigger(e, t, i) {
                if ("string" != typeof t || !e) return null;
                const n = g(),
                    o = I(t),
                    s = t !== o,
                    r = $.has(o);
                let a, l = !0,
                    c = !0,
                    d = !1,
                    u = null;
                return s && n && (a = n.Event(t, i), n(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (u = document.createEvent("HTMLEvents"), u.initEvent(o, l, !0)) : u = new CustomEvent(t, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== i && Object.keys(i).forEach((e => {
                    Object.defineProperty(u, e, {
                        get: () => i[e]
                    })
                })), d && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && void 0 !== a && a.preventDefault(), u
            }
        },
        M = new Map,
        q = {
            set(e, t, i) {
                M.has(e) || M.set(e, new Map);
                const n = M.get(e);
                n.has(t) || 0 === n.size ? n.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (e, t) => M.has(e) && M.get(e).get(t) || null,
            remove(e, t) {
                if (!M.has(e)) return;
                const i = M.get(e);
                i.delete(t), 0 === i.size && M.delete(e)
            }
        };
    class z {
        constructor(e) {
            (e = l(e)) && (this._element = e, q.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            q.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e => {
                this[e] = null
            }))
        }
        _queueCallback(e, t, i = !0) {
            _(e, t, i)
        }
        static getInstance(e) {
            return q.get(l(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const R = (e, t = "hide") => {
        const i = `click.dismiss${e.EVENT_KEY}`,
            n = e.NAME;
        H.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this)) return;
            const o = s(this) || this.closest(`.${n}`);
            e.getOrCreateInstance(o)[t]()
        }))
    };
    class W extends z {
        static get NAME() {
            return "alert"
        }
        close() {
            if (H.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, e)
        }
        _destroyElement() {
            this._element.remove(), H.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = W.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    R(W, "close"), y(W);
    const F = '[data-bs-toggle="button"]';
    class B extends z {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = B.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            }))
        }
    }

    function U(e) {
        return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
    }

    function X(e) {
        return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
    }
    H.on(document, "click.bs.button.data-api", F, (e => {
        e.preventDefault();
        const t = e.target.closest(F);
        B.getOrCreateInstance(t).toggle()
    })), y(B);
    const Y = {
            setDataAttribute(e, t, i) {
                e.setAttribute(`data-bs-${X(t)}`, i)
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${X(t)}`)
            },
            getDataAttributes(e) {
                if (!e) return {};
                const t = {};
                return Object.keys(e.dataset).filter((e => e.startsWith("bs"))).forEach((i => {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = U(e.dataset[i])
                })), t
            },
            getDataAttribute: (e, t) => U(e.getAttribute(`data-bs-${X(t)}`)),
            offset(e) {
                const t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset,
                    left: t.left + window.pageXOffset
                }
            },
            position: e => ({
                top: e.offsetTop,
                left: e.offsetLeft
            })
        },
        V = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
            parents(e, t) {
                const i = [];
                let n = e.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(t) && i.push(n), n = n.parentNode;
                return i
            },
            prev(e, t) {
                let i = e.previousElementSibling;
                for (; i;) {
                    if (i.matches(t)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let i = e.nextElementSibling;
                for (; i;) {
                    if (i.matches(t)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(e) {
                const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(", ");
                return this.find(t, e).filter((e => !u(e) && d(e)))
            }
        },
        K = "carousel",
        Q = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        G = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        J = "next",
        Z = "prev",
        ee = "left",
        te = "right",
        ie = {
            ArrowLeft: te,
            ArrowRight: ee
        },
        ne = "slid.bs.carousel",
        oe = "active",
        se = ".active.carousel-item";
    class re extends z {
        constructor(e, t) {
            super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return Q
        }
        static get NAME() {
            return K
        }
        next() {
            this._slide(J)
        }
        nextWhenVisible() {
            !document.hidden && d(this._element) && this.next()
        }
        prev() {
            this._slide(Z)
        }
        pause(e) {
            e || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(e) {
            this._activeElement = V.findOne(se, this._element);
            const t = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding) return void H.one(this._element, ne, (() => this.to(e)));
            if (t === e) return this.pause(), void this.cycle();
            const i = e > t ? J : Z;
            this._slide(i, this._items[e])
        }
        _getConfig(e) {
            return e = { ...Q,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, c(K, e, G), e
        }
        _handleSwipe() {
            const e = Math.abs(this.touchDeltaX);
            if (e <= 40) return;
            const t = e / this.touchDeltaX;
            this.touchDeltaX = 0, t && this._slide(t > 0 ? te : ee)
        }
        _addEventListeners() {
            this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (e => this._keydown(e))), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (e => this.pause(e))), H.on(this._element, "mouseleave.bs.carousel", (e => this.cycle(e)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const e = e => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
                t = t => {
                    e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
                },
                i = e => {
                    this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
                },
                n = t => {
                    e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e => this.cycle(e)), 500 + this._config.interval))
                };
            V.find(".carousel-item img", this._element).forEach((e => {
                H.on(e, "dragstart.bs.carousel", (e => e.preventDefault()))
            })), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", (e => t(e))), H.on(this._element, "pointerup.bs.carousel", (e => n(e))), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", (e => t(e))), H.on(this._element, "touchmove.bs.carousel", (e => i(e))), H.on(this._element, "touchend.bs.carousel", (e => n(e))))
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = ie[e.key];
            t && (e.preventDefault(), this._slide(t))
        }
        _getItemIndex(e) {
            return this._items = e && e.parentNode ? V.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
        }
        _getItemByOrder(e, t) {
            const i = e === J;
            return w(this._items, t, i, this._config.wrap)
        }
        _triggerSlideEvent(e, t) {
            const i = this._getItemIndex(e),
                n = this._getItemIndex(V.findOne(se, this._element));
            return H.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: n,
                to: i
            })
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = V.findOne(".active", this._indicatorsElement);
                t.classList.remove(oe), t.removeAttribute("aria-current");
                const i = V.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < i.length; t++)
                    if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                        i[t].classList.add(oe), i[t].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || V.findOne(se, this._element);
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(e, t) {
            const i = this._directionToOrder(e),
                n = V.findOne(se, this._element),
                o = this._getItemIndex(n),
                s = t || this._getItemByOrder(i, n),
                r = this._getItemIndex(s),
                a = Boolean(this._interval),
                l = i === J,
                c = l ? "carousel-item-start" : "carousel-item-end",
                d = l ? "carousel-item-next" : "carousel-item-prev",
                u = this._orderToDirection(i);
            if (s && s.classList.contains(oe)) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(s, u).defaultPrevented) return;
            if (!n || !s) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s;
            const p = () => {
                H.trigger(this._element, ne, {
                    relatedTarget: s,
                    direction: u,
                    from: o,
                    to: r
                })
            };
            if (this._element.classList.contains("slide")) {
                s.classList.add(d), f(s), n.classList.add(c), s.classList.add(c);
                const e = () => {
                    s.classList.remove(c, d), s.classList.add(oe), n.classList.remove(oe, d, c), this._isSliding = !1, setTimeout(p, 0)
                };
                this._queueCallback(e, n, !0)
            } else n.classList.remove(oe), s.classList.add(oe), this._isSliding = !1, p();
            a && this.cycle()
        }
        _directionToOrder(e) {
            return [te, ee].includes(e) ? v() ? e === ee ? Z : J : e === ee ? J : Z : e
        }
        _orderToDirection(e) {
            return [J, Z].includes(e) ? v() ? e === Z ? ee : te : e === Z ? te : ee : e
        }
        static carouselInterface(e, t) {
            const i = re.getOrCreateInstance(e, t);
            let {
                _config: n
            } = i;
            "object" == typeof t && (n = { ...n,
                ...t
            });
            const o = "string" == typeof t ? t : n.slide;
            if ("number" == typeof t) i.to(t);
            else if ("string" == typeof o) {
                if (void 0 === i[o]) throw new TypeError(`No method named "${o}"`);
                i[o]()
            } else n.interval && n.ride && (i.pause(), i.cycle())
        }
        static jQueryInterface(e) {
            return this.each((function() {
                re.carouselInterface(this, e)
            }))
        }
        static dataApiClickHandler(e) {
            const t = s(this);
            if (!t || !t.classList.contains("carousel")) return;
            const i = { ...Y.getDataAttributes(t),
                    ...Y.getDataAttributes(this)
                },
                n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1), re.carouselInterface(t, i), n && re.getInstance(t).to(n), e.preventDefault()
        }
    }
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", re.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", (() => {
        const e = V.find('[data-bs-ride="carousel"]');
        for (let t = 0, i = e.length; t < i; t++) re.carouselInterface(e[t], re.getInstance(e[t]))
    })), y(re);
    const ae = "collapse",
        le = {
            toggle: !0,
            parent: null
        },
        ce = {
            toggle: "boolean",
            parent: "(null|element)"
        },
        de = "show",
        ue = "collapse",
        pe = "collapsing",
        he = "collapsed",
        fe = ":scope .collapse .collapse",
        ge = '[data-bs-toggle="collapse"]';
    class me extends z {
        constructor(e, t) {
            super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = [];
            const i = V.find(ge);
            for (let e = 0, t = i.length; e < t; e++) {
                const t = i[e],
                    n = o(t),
                    s = V.find(n).filter((e => e === this._element));
                null !== n && s.length && (this._selector = n, this._triggerArray.push(t))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return le
        }
        static get NAME() {
            return ae
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e, t = [];
            if (this._config.parent) {
                const e = V.find(fe, this._config.parent);
                t = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((t => !e.includes(t)))
            }
            const i = V.findOne(this._selector);
            if (t.length) {
                const n = t.find((e => i !== e));
                if (e = n ? me.getInstance(n) : null, e && e._isTransitioning) return
            }
            if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            t.forEach((t => {
                i !== t && me.getOrCreateInstance(t, {
                    toggle: !1
                }).hide(), e || q.set(t, "bs.collapse", null)
            }));
            const n = this._getDimension();
            this._element.classList.remove(ue), this._element.classList.add(pe), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const o = `scroll${n[0].toUpperCase()+n.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(pe), this._element.classList.add(ue, de), this._element.style[n] = "", H.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[n] = `${this._element[o]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const e = this._getDimension();
            this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, f(this._element), this._element.classList.add(pe), this._element.classList.remove(ue, de);
            const t = this._triggerArray.length;
            for (let e = 0; e < t; e++) {
                const t = this._triggerArray[e],
                    i = s(t);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(pe), this._element.classList.add(ue), H.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }
        _isShown(e = this._element) {
            return e.classList.contains(de)
        }
        _getConfig(e) {
            return (e = { ...le,
                ...Y.getDataAttributes(this._element),
                ...e
            }).toggle = Boolean(e.toggle), e.parent = l(e.parent), c(ae, e, ce), e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const e = V.find(fe, this._config.parent);
            V.find(ge, this._config.parent).filter((t => !e.includes(t))).forEach((e => {
                const t = s(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }))
        }
        _addAriaAndCollapsedClass(e, t) {
            e.length && e.forEach((e => {
                t ? e.classList.remove(he) : e.classList.add(he), e.setAttribute("aria-expanded", t)
            }))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = {};
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                const i = me.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                    i[e]()
                }
            }))
        }
    }
    H.on(document, "click.bs.collapse.data-api", ge, (function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        const t = o(this);
        V.find(t).forEach((e => {
            me.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
        }))
    })), y(me);
    const ve = "dropdown",
        ye = "Escape",
        be = "Space",
        _e = "ArrowUp",
        we = "ArrowDown",
        Te = new RegExp("ArrowUp|ArrowDown|Escape"),
        ke = "click.bs.dropdown.data-api",
        xe = "keydown.bs.dropdown.data-api",
        Se = "show",
        Ce = '[data-bs-toggle="dropdown"]',
        Ee = ".dropdown-menu",
        Ae = v() ? "top-end" : "top-start",
        $e = v() ? "top-start" : "top-end",
        Le = v() ? "bottom-end" : "bottom-start",
        De = v() ? "bottom-start" : "bottom-end",
        Ne = v() ? "left-start" : "right-start",
        Oe = v() ? "right-start" : "left-start",
        je = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        Pe = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class Ie extends z {
        constructor(e, t) {
            super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return je
        }
        static get DefaultType() {
            return Pe
        }
        static get NAME() {
            return ve
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (u(this._element) || this._isShown(this._menu)) return;
            const e = {
                relatedTarget: this._element
            };
            if (H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) return;
            const t = Ie.getParentFromElement(this._element);
            this._inNavbar ? Y.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e => H.on(e, "mouseover", h))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Se), this._element.classList.add(Se), H.trigger(this._element, "shown.bs.dropdown", e)
        }
        hide() {
            if (u(this._element) || !this._isShown(this._menu)) return;
            const e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(e) {
            H.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => H.off(e, "mouseover", h))), this._popper && this._popper.destroy(), this._menu.classList.remove(Se), this._element.classList.remove(Se), this._element.setAttribute("aria-expanded", "false"), Y.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", e))
        }
        _getConfig(e) {
            if (e = { ...this.constructor.Default,
                    ...Y.getDataAttributes(this._element),
                    ...e
                }, c(ve, e, this.constructor.DefaultType), "object" == typeof e.reference && !a(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }
        _createPopper(e) {
            if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let i = this._element;
            "parent" === this._config.reference ? i = e : a(this._config.reference) ? i = l(this._config.reference) : "object" == typeof this._config.reference && (i = this._config.reference);
            const n = this._getPopperConfig(),
                o = n.modifiers.find((e => "applyStyles" === e.name && !1 === e.enabled));
            this._popper = t.createPopper(i, this._menu, n), o && Y.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(e = this._element) {
            return e.classList.contains(Se)
        }
        _getMenuElement() {
            return V.next(this._element, Ee)[0]
        }
        _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains("dropend")) return Ne;
            if (e.classList.contains("dropstart")) return Oe;
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? $e : Ae : t ? De : Le
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: e,
            target: t
        }) {
            const i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d);
            i.length && w(i, t, e === we, !i.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Ie.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
        static clearMenus(e) {
            if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
            const t = V.find(Ce);
            for (let i = 0, n = t.length; i < n; i++) {
                const n = Ie.getInstance(t[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const o = {
                    relatedTarget: n._element
                };
                if (e) {
                    const t = e.composedPath(),
                        i = t.includes(n._menu);
                    if (t.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    "click" === e.type && (o.clickEvent = e)
                }
                n._completeHide(o)
            }
        }
        static getParentFromElement(e) {
            return s(e) || e.parentNode
        }
        static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? e.key === be || e.key !== ye && (e.key !== we && e.key !== _e || e.target.closest(Ee)) : !Te.test(e.key)) return;
            const t = this.classList.contains(Se);
            if (!t && e.key === ye) return;
            if (e.preventDefault(), e.stopPropagation(), u(this)) return;
            const i = this.matches(Ce) ? this : V.prev(this, Ce)[0],
                n = Ie.getOrCreateInstance(i);
            if (e.key !== ye) return e.key === _e || e.key === we ? (t || n.show(), void n._selectMenuItem(e)) : void(t && e.key !== be || Ie.clearMenus());
            n.hide()
        }
    }
    H.on(document, xe, Ce, Ie.dataApiKeydownHandler), H.on(document, xe, Ee, Ie.dataApiKeydownHandler), H.on(document, ke, Ie.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", Ie.clearMenus), H.on(document, ke, Ce, (function(e) {
        e.preventDefault(), Ie.getOrCreateInstance(this).toggle()
    })), y(Ie);
    const He = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Me = ".sticky-top";
    class qe {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t => t + e)), this._setElementAttributes(He, "paddingRight", (t => t + e)), this._setElementAttributes(Me, "marginRight", (t => t - e))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(e, (e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + n) return;
                this._saveInitialAttribute(e, t);
                const o = window.getComputedStyle(e)[t];
                e.style[t] = `${i(Number.parseFloat(o))}px`
            }))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(He, "paddingRight"), this._resetElementAttributes(Me, "marginRight")
        }
        _saveInitialAttribute(e, t) {
            const i = e.style[t];
            i && Y.setDataAttribute(e, t, i)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e => {
                const i = Y.getDataAttribute(e, t);
                void 0 === i ? e.style.removeProperty(t) : (Y.removeDataAttribute(e, t), e.style[t] = i)
            }))
        }
        _applyManipulationCallback(e, t) {
            a(e) ? t(e) : V.find(e, this._element).forEach(t)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const ze = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        Re = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        },
        We = "show",
        Fe = "mousedown.bs.backdrop";
    class Be {
        constructor(e) {
            this._config = this._getConfig(e), this._isAppended = !1, this._element = null
        }
        show(e) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add(We), this._emulateAnimation((() => {
                b(e)
            }))) : b(e)
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(We), this._emulateAnimation((() => {
                this.dispose(), b(e)
            }))) : b(e)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }
        _getConfig(e) {
            return (e = { ...ze,
                ..."object" == typeof e ? e : {}
            }).rootElement = l(e.rootElement), c("backdrop", e, Re), e
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), H.on(this._getElement(), Fe, (() => {
                b(this._config.clickCallback)
            })), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (H.off(this._element, Fe), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(e) {
            _(e, this._getElement(), this._config.isAnimated)
        }
    }
    const Ue = {
            trapElement: null,
            autofocus: !0
        },
        Xe = {
            trapElement: "element",
            autofocus: "boolean"
        },
        Ye = ".bs.focustrap",
        Ve = "backward";
    class Ke {
        constructor(e) {
            this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
        }
        activate() {
            const {
                trapElement: e,
                autofocus: t
            } = this._config;
            this._isActive || (t && e.focus(), H.off(document, Ye), H.on(document, "focusin.bs.focustrap", (e => this._handleFocusin(e))), H.on(document, "keydown.tab.bs.focustrap", (e => this._handleKeydown(e))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, H.off(document, Ye))
        }
        _handleFocusin(e) {
            const {
                target: t
            } = e, {
                trapElement: i
            } = this._config;
            if (t === document || t === i || i.contains(t)) return;
            const n = V.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === Ve ? n[n.length - 1].focus() : n[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Ve : "forward")
        }
        _getConfig(e) {
            return e = { ...Ue,
                ..."object" == typeof e ? e : {}
            }, c("focustrap", e, Xe), e
        }
    }
    const Qe = "modal",
        Ge = "Escape",
        Je = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        Ze = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        et = "hidden.bs.modal",
        tt = "show.bs.modal",
        it = "resize.bs.modal",
        nt = "click.dismiss.bs.modal",
        ot = "keydown.dismiss.bs.modal",
        st = "mousedown.dismiss.bs.modal",
        rt = "modal-open",
        at = "show",
        lt = "modal-static";
    class ct extends z {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new qe
        }
        static get Default() {
            return Je
        }
        static get NAME() {
            return Qe
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || H.trigger(this._element, tt, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(rt), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._dialog, st, (() => {
                H.one(this._element, "mouseup.dismiss.bs.modal", (e => {
                    e.target === this._element && (this._ignoreBackdropClick = !0)
                }))
            })), this._showBackdrop((() => this._showElement(e))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(at), H.off(this._element, nt), H.off(this._dialog, st), this._queueCallback((() => this._hideModal()), this._element, e)
        }
        dispose() {
            [window, this._dialog].forEach((e => H.off(e, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Be({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Ke({
                trapElement: this._element
            })
        }
        _getConfig(e) {
            return e = { ...Je,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, c(Qe, e, Ze), e
        }
        _showElement(e) {
            const t = this._isAnimated(),
                i = V.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), t && f(this._element), this._element.classList.add(at), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, H.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }), this._dialog, t)
        }
        _setEscapeEvent() {
            this._isShown ? H.on(this._element, ot, (e => {
                this._config.keyboard && e.key === Ge ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== Ge || this._triggerBackdropTransition()
            })) : H.off(this._element, ot)
        }
        _setResizeEvent() {
            this._isShown ? H.on(window, it, (() => this._adjustDialog())) : H.off(window, it)
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(rt), this._resetAdjustments(), this._scrollBar.reset(), H.trigger(this._element, et)
            }))
        }
        _showBackdrop(e) {
            H.on(this._element, nt, (e => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            })), this._backdrop.show(e)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: e,
                scrollHeight: t,
                style: i
            } = this._element, n = t > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || e.contains(lt) || (n || (i.overflowY = "hidden"), e.add(lt), this._queueCallback((() => {
                e.remove(lt), n || this._queueCallback((() => {
                    i.overflowY = ""
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                i = t > 0;
            (!i && e && !v() || i && !e && v()) && (this._element.style.paddingLeft = `${t}px`), (i && !e && !v() || !i && e && v()) && (this._element.style.paddingRight = `${t}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each((function() {
                const i = ct.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                    i[e](t)
                }
            }))
        }
    }
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(e) {
        const t = s(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), H.one(t, tt, (e => {
            e.defaultPrevented || H.one(t, et, (() => {
                d(this) && this.focus()
            }))
        }));
        const i = V.findOne(".modal.show");
        i && ct.getInstance(i).hide(), ct.getOrCreateInstance(t).toggle(this)
    })), R(ct), y(ct);
    const dt = "offcanvas",
        ut = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        pt = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        },
        ht = "show",
        ft = ".offcanvas.show",
        gt = "hidden.bs.offcanvas";
    class mt extends z {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get NAME() {
            return dt
        }
        static get Default() {
            return ut
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new qe).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ht), this._queueCallback((() => {
                this._config.scroll || this._focustrap.activate(), H.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(ht), this._backdrop.hide(), this._queueCallback((() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new qe).reset(), H.trigger(this._element, gt)
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _getConfig(e) {
            return e = { ...ut,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, c(dt, e, pt), e
        }
        _initializeBackDrop() {
            return new Be({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Ke({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            H.on(this._element, "keydown.dismiss.bs.offcanvas", (e => {
                this._config.keyboard && "Escape" === e.key && this.hide()
            }))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = mt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(e) {
        const t = s(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
        H.one(t, gt, (() => {
            d(this) && this.focus()
        }));
        const i = V.findOne(ft);
        i && i !== t && mt.getInstance(i).hide(), mt.getOrCreateInstance(t).toggle(this)
    })), H.on(window, "load.bs.offcanvas.data-api", (() => V.find(ft).forEach((e => mt.getOrCreateInstance(e).show())))), R(mt), y(mt);
    const vt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        yt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        bt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        _t = (e, t) => {
            const i = e.nodeName.toLowerCase();
            if (t.includes(i)) return !vt.has(i) || Boolean(yt.test(e.nodeValue) || bt.test(e.nodeValue));
            const n = t.filter((e => e instanceof RegExp));
            for (let e = 0, t = n.length; e < t; e++)
                if (n[e].test(i)) return !0;
            return !1
        };

    function wt(e, t, i) {
        if (!e.length) return e;
        if (i && "function" == typeof i) return i(e);
        const n = (new window.DOMParser).parseFromString(e, "text/html"),
            o = [].concat(...n.body.querySelectorAll("*"));
        for (let e = 0, i = o.length; e < i; e++) {
            const i = o[e],
                n = i.nodeName.toLowerCase();
            if (!Object.keys(t).includes(n)) {
                i.remove();
                continue
            }
            const s = [].concat(...i.attributes),
                r = [].concat(t["*"] || [], t[n] || []);
            s.forEach((e => {
                _t(e, r) || i.removeAttribute(e.nodeName)
            }))
        }
        return n.body.innerHTML
    }
    const Tt = "tooltip",
        kt = new Set(["sanitize", "allowList", "sanitizeFn"]),
        xt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        St = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: v() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: v() ? "right" : "left"
        },
        Ct = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Et = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        At = "fade",
        $t = "show",
        Lt = "show",
        Dt = "out",
        Nt = ".tooltip-inner",
        Ot = ".modal",
        jt = "hide.bs.modal",
        Pt = "hover",
        It = "focus";
    class Ht extends z {
        constructor(e, i) {
            if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(i), this.tip = null, this._setListeners()
        }
        static get Default() {
            return Ct
        }
        static get NAME() {
            return Tt
        }
        static get Event() {
            return Et
        }
        static get DefaultType() {
            return xt
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(e) {
            if (this._isEnabled)
                if (e) {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                } else {
                    if (this.getTipElement().classList.contains($t)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), H.off(this._element.closest(Ot), jt, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const e = H.trigger(this._element, this.constructor.Event.SHOW),
                i = p(this._element),
                n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
            if (e.defaultPrevented || !n) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Nt).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const o = this.getTipElement(),
                s = (e => {
                    do {
                        e += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                })(this.constructor.NAME);
            o.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && o.classList.add(At);
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
                a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const {
                container: l
            } = this._config;
            q.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(o), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = t.createPopper(this._element, o, this._getPopperConfig(a)), o.classList.add($t);
            const c = this._resolvePossibleFunction(this._config.customClass);
            c && o.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => {
                H.on(e, "mouseover", h)
            }));
            const d = this.tip.classList.contains(At);
            this._queueCallback((() => {
                const e = this._hoverState;
                this._hoverState = null, H.trigger(this._element, this.constructor.Event.SHOWN), e === Dt && this._leave(null, this)
            }), this.tip, d)
        }
        hide() {
            if (!this._popper) return;
            const e = this.getTipElement();
            if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            e.classList.remove($t), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => H.off(e, "mouseover", h))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const t = this.tip.classList.contains(At);
            this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._hoverState !== Lt && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), H.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
            }), this.tip, t), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const e = document.createElement("div");
            e.innerHTML = this._config.template;
            const t = e.children[0];
            return this.setContent(t), t.classList.remove(At, $t), this.tip = t, this.tip
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), Nt)
        }
        _sanitizeAndSetContent(e, t, i) {
            const n = V.findOne(i, e);
            t || !n ? this.setElementContent(n, t) : n.remove()
        }
        setElementContent(e, t) {
            if (null !== e) return a(t) ? (t = l(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = wt(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
        }
        getTitle() {
            const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(e)
        }
        updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e
        }
        _initializeOnDelegatedTarget(e, t) {
            return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: e => this._handlePopperPlacementChange(e)
                }],
                onFirstUpdate: e => {
                    e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                }
            };
            return { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)
        }
        _getAttachment(e) {
            return St[e.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((e => {
                if ("click" === e) H.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e => this.toggle(e)));
                else if ("manual" !== e) {
                    const t = e === Pt ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        i = e === Pt ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    H.on(this._element, t, this._config.selector, (e => this._enter(e))), H.on(this._element, i, this._config.selector, (e => this._leave(e)))
                }
            })), this._hideModalHandler = () => {
                this._element && this.hide()
            }, H.on(this._element.closest(Ot), jt, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const e = this._element.getAttribute("title"),
                t = typeof this._element.getAttribute("data-bs-original-title");
            (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
        }
        _enter(e, t) {
            t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? It : Pt] = !0), t.getTipElement().classList.contains($t) || t._hoverState === Lt ? t._hoverState = Lt : (clearTimeout(t._timeout), t._hoverState = Lt, t._config.delay && t._config.delay.show ? t._timeout = setTimeout((() => {
                t._hoverState === Lt && t.show()
            }), t._config.delay.show) : t.show())
        }
        _leave(e, t) {
            t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? It : Pt] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Dt, t._config.delay && t._config.delay.hide ? t._timeout = setTimeout((() => {
                t._hoverState === Dt && t.hide()
            }), t._config.delay.hide) : t.hide())
        }
        _isWithActiveTrigger() {
            for (const e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }
        _getConfig(e) {
            const t = Y.getDataAttributes(this._element);
            return Object.keys(t).forEach((e => {
                kt.has(e) && delete t[e]
            })), (e = { ...this.constructor.Default,
                ...t,
                ..."object" == typeof e && e ? e : {}
            }).container = !1 === e.container ? document.body : l(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c(Tt, e, this.constructor.DefaultType), e.sanitize && (e.template = wt(e.template, e.allowList, e.sanitizeFn)), e
        }
        _getDelegateConfig() {
            const e = {};
            for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e
        }
        _cleanTipClass() {
            const e = this.getTipElement(),
                t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                i = e.getAttribute("class").match(t);
            null !== i && i.length > 0 && i.map((e => e.trim())).forEach((t => e.classList.remove(t)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(e) {
            const {
                state: t
            } = e;
            t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Ht.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    y(Ht);
    const Mt = { ...Ht.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        qt = { ...Ht.DefaultType,
            content: "(string|element|function)"
        },
        zt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class Rt extends Ht {
        static get Default() {
            return Mt
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return zt
        }
        static get DefaultType() {
            return qt
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Rt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    y(Rt);
    const Wt = "scrollspy",
        Ft = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Bt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Ut = "active",
        Xt = ".nav-link, .list-group-item, .dropdown-item",
        Yt = "position";
    class Vt extends z {
        constructor(e, t) {
            super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, H.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
        }
        static get Default() {
            return Ft
        }
        static get NAME() {
            return Wt
        }
        refresh() {
            const e = this._scrollElement === this._scrollElement.window ? "offset" : Yt,
                t = "auto" === this._config.method ? e : this._config.method,
                i = t === Yt ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(Xt, this._config.target).map((e => {
                const n = o(e),
                    s = n ? V.findOne(n) : null;
                if (s) {
                    const e = s.getBoundingClientRect();
                    if (e.width || e.height) return [Y[t](s).top + i, n]
                }
                return null
            })).filter((e => e)).sort(((e, t) => e[0] - t[0])).forEach((e => {
                this._offsets.push(e[0]), this._targets.push(e[1])
            }))
        }
        dispose() {
            H.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(e) {
            return (e = { ...Ft,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            }).target = l(e.target) || document.documentElement, c(Wt, e, Bt), e
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                i = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), e >= i) {
                const e = this._targets[this._targets.length - 1];
                this._activeTarget !== e && this._activate(e)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
            }
        }
        _activate(e) {
            this._activeTarget = e, this._clear();
            const t = Xt.split(",").map((t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),
                i = V.findOne(t.join(","), this._config.target);
            i.classList.add(Ut), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ut) : V.parents(i, ".nav, .list-group").forEach((e => {
                V.prev(e, ".nav-link, .list-group-item").forEach((e => e.classList.add(Ut))), V.prev(e, ".nav-item").forEach((e => {
                    V.children(e, ".nav-link").forEach((e => e.classList.add(Ut)))
                }))
            })), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        _clear() {
            V.find(Xt, this._config.target).filter((e => e.classList.contains(Ut))).forEach((e => e.classList.remove(Ut)))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Vt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    H.on(window, "load.bs.scrollspy.data-api", (() => {
        V.find('[data-bs-spy="scroll"]').forEach((e => new Vt(e)))
    })), y(Vt);
    const Kt = "active",
        Qt = "fade",
        Gt = "show",
        Jt = ".active",
        Zt = ":scope > li > .active";
    class ei extends z {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Kt)) return;
            let e;
            const t = s(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const t = "UL" === i.nodeName || "OL" === i.nodeName ? Zt : Jt;
                e = V.find(t, i), e = e[e.length - 1]
            }
            const n = e ? H.trigger(e, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (H.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== n && n.defaultPrevented) return;
            this._activate(this._element, i);
            const o = () => {
                H.trigger(e, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), H.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: e
                })
            };
            t ? this._activate(t, t.parentNode, o) : o()
        }
        _activate(e, t, i) {
            const n = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? V.children(t, Jt) : V.find(Zt, t))[0],
                o = i && n && n.classList.contains(Qt),
                s = () => this._transitionComplete(e, n, i);
            n && o ? (n.classList.remove(Gt), this._queueCallback(s, e, !0)) : s()
        }
        _transitionComplete(e, t, i) {
            if (t) {
                t.classList.remove(Kt);
                const e = V.findOne(":scope > .dropdown-menu .active", t.parentNode);
                e && e.classList.remove(Kt), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            e.classList.add(Kt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains(Qt) && e.classList.add(Gt);
            let n = e.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const t = e.closest(".dropdown");
                t && V.find(".dropdown-toggle", t).forEach((e => e.classList.add(Kt))), e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = ei.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this) || ei.getOrCreateInstance(this).show()
    })), y(ei);
    const ti = "toast",
        ii = "hide",
        ni = "show",
        oi = "showing",
        si = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ri = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class ai extends z {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return si
        }
        static get Default() {
            return ri
        }
        static get NAME() {
            return ti
        }
        show() {
            H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ii), f(this._element), this._element.classList.add(ni), this._element.classList.add(oi), this._queueCallback((() => {
                this._element.classList.remove(oi), H.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(ni) && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi), this._queueCallback((() => {
                this._element.classList.add(ii), this._element.classList.remove(oi), this._element.classList.remove(ni), H.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(ni) && this._element.classList.remove(ni), super.dispose()
        }
        _getConfig(e) {
            return e = { ...ri,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            }, c(ti, e, this.constructor.DefaultType), e
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            const i = e.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            H.on(this._element, "mouseover.bs.toast", (e => this._onInteraction(e, !0))), H.on(this._element, "mouseout.bs.toast", (e => this._onInteraction(e, !1))), H.on(this._element, "focusin.bs.toast", (e => this._onInteraction(e, !0))), H.on(this._element, "focusout.bs.toast", (e => this._onInteraction(e, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = ai.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    return R(ai), y(ai), {
        Alert: W,
        Button: B,
        Carousel: re,
        Collapse: me,
        Dropdown: Ie,
        Modal: ct,
        Offcanvas: mt,
        Popover: Rt,
        ScrollSpy: Vt,
        Tab: ei,
        Toast: ai,
        Tooltip: Ht
    }
})),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(i, n) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
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
            }, s.initials = {
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
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, i) {
            e(i).attr("data-slick-index", t)
        })), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function() {
            o.disableTransition(), i.call()
        }), o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t
    }, t.prototype.asNavFor = function(t) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        }))
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * r + (t * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d))
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
    }, t.prototype.checkResponsive = function(t, i) {
        var n, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function(t, i) {
        var n, o, s = this,
            r = e(t.currentTarget);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            e(this).attr("style", e(this).data("originalStyling"))
        })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout((function() {
            i.disableTransition(e), t.call()
        }), i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout((function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
            }), 0)
        }))
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++n;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, t.prototype.getLeft = function(e) {
        var t, i, n, o, s = this,
            r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function(o, s) {
            if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1
        })), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            i = Math.ceil(t.slideCount / t.options.slidesToShow),
            n = t.getNavigableIndexes().filter((function(e) {
                return e >= 0 && e < t.slideCount
            }));
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i) {
            var o = n.indexOf(i);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + i,
                tabindex: -1
            }), -1 !== o && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + o
            })
        })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
            var s = n[o];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + s,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        })).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each((function() {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    n = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, (function() {
                        n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
                            opacity: 1
                        }, 200, (function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        })), s.$slider.trigger("lazyLoaded", [s, t, i])
                    }))
                }, r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
                }, r.src = i
            }))
        }
        var i, n, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad)
            for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
        t(i), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, o, s, r, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(t + 1)
            }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, i, n, o = this,
            s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            for (t in o.respondTo = o.options.respondTo || "window", s)
                if (n = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
                    for (i = s[t].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
                }
            o.breakpoints.sort((function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            }))
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }), 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, i, n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each((function(n, o) {
            t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        })), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, n, o, s, r = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
        else if ("multiple" === s) e.each(n, (function(e, t) {
            r.options[e] = t
        }));
        else if ("responsive" === s)
            for (i in o)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
                else {
                    for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                    r.options.responsive.push(o[i])
                }
        a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, i, n, o, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < n + o.slideCount; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                e(this).attr("id", "")
            }))
        }
    }, t.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var i = this,
            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, i) {
        var n, o, s, r, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, (function() {
                c.postSlide(n)
            })) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, (function() {
            c.postSlide(n)
        })) : c.postSlide(n));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, (function() {
                c.postSlide(o)
            }))) : c.postSlide(o), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, (function() {
                c.postSlide(o)
            })) : c.postSlide(o)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, i, n, o, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, i, n = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = n.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), void 0 !== i) return i;
        return n
    }
})), document.querySelectorAll('a[href="#form"]').forEach((function(e) {
    e.addEventListener("click", (function(e) {
        e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    }))
})), $((() => {
    $(".banner-slider").slick({
        slidesToShow: 1,
        arrows: !1,
        autoplay: !0
    }), $(".service-slider-nav").slick({
        slidesToShow: 5,
        centerMode: !0,
        arrows: !1,
        centerPadding: "220px",
        autoplay: !0,
        focusOnSelect: !0,
        asNavFor: ".service-slider",
        responsive: [{
            breakpoint: 1550,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                centerPadding: 0
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                centerPadding: 0,
                centerMode: !1
            }
        }]
    }), $(".service-slider").slick({
        slidesToShow: 1,
        asNavFor: ".service-slider-nav",
        arrows: !1
    })
})), setInterval(setTime, 1e3), $(window).on("scroll", (() => {
    $(this).scrollTop() >= 600 ? $("#return-to-top").fadeIn(300) : $("#return-to-top").fadeOut(300)
})), $("#return-to-top").on("click", (() => {
    $("body,html").animate({
        scrollTop: 0
    }, 500)
}));