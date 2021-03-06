var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : X[Y.call(t)] || "object"
    }
    function e(e) {
        return "function" == t(e)
    }
    function n(t) {
        return null != t && t == t.window
    }
    function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function r(e) {
        return "object" == t(e)
    }
    function o(t) {
        return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function a(t) {
        return "number" == typeof t.length
    }
    function s(t) {
        return N.call(t, function(t) {
            return null != t
        })
    }
    function c(t) {
        return t.length > 0 ? S.fn.concat.apply([], t) : t
    }
    function u(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(t) {
        return t in D ? D[t] : D[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function f(t, e) {
        return "number" != typeof e || I[u(t)] ? e : e + "px"
    }
    function h(t) {
        var e, n;
        return j[t] || (e = M.createElement(t),
        M.body.appendChild(e),
        n = getComputedStyle(e, "").getPropertyValue("display"),
        e.parentNode.removeChild(e),
        "none" == n && (n = "block"),
        j[t] = n),
        j[t]
    }
    function d(t) {
        return "children"in t ? P.call(t.children) : S.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0
        })
    }
    function p(t, e) {
        var n, i = t ? t.length : 0;
        for (n = 0; i > n; n++)
            this[n] = t[n];
        this.length = i,
        this.selector = e || ""
    }
    function m(t, e, n) {
        for (T in e)
            n && (o(e[T]) || K(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}),
            K(e[T]) && !K(t[T]) && (t[T] = []),
            m(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T])
    }
    function g(t, e) {
        return null == e ? S(t) : S(t).filter(e)
    }
    function v(t, n, i, r) {
        return e(n) ? n.call(t, i, r) : n
    }
    function y(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function w(t, e) {
        var n = t.className || ""
          , i = n && n.baseVal !== E;
        return e === E ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e)
    }
    function b(t) {
        try {
            return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }
    function x(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++)
            x(t.childNodes[n], e)
    }
    var E, T, S, O, C, k, A = [], L = A.concat, N = A.filter, P = A.slice, M = window.document, j = {}, D = {}, I = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, B = /^\s*<(\w+|!)[^>]*>/, H = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, R = /^(?:body|html)$/i, q = /([A-Z])/g, U = ["val", "css", "html", "text", "data", "width", "height", "offset"], Z = ["after", "prepend", "before", "append"], _ = M.createElement("table"), W = M.createElement("tr"), z = {
        tr: M.createElement("tbody"),
        tbody: _,
        thead: _,
        tfoot: _,
        td: W,
        th: W,
        "*": M.createElement("div")
    }, $ = /complete|loaded|interactive/, G = /^[\w-]*$/, X = {}, Y = X.toString, V = {}, J = M.createElement("div"), Q = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, K = Array.isArray || function(t) {
        return t instanceof Array
    }
    ;
    return V.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType)
            return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)
            return n.call(t, e);
        var i, r = t.parentNode, o = !r;
        return o && (r = J).appendChild(t),
        i = ~V.qsa(r, e).indexOf(t),
        o && J.removeChild(t),
        i
    }
    ,
    C = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }
    ,
    k = function(t) {
        return N.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }
    ,
    V.fragment = function(t, e, n) {
        var i, r, a;
        return H.test(t) && (i = S(M.createElement(RegExp.$1))),
        i || (t.replace && (t = t.replace(F, "<$1></$2>")),
        e === E && (e = B.test(t) && RegExp.$1),
        e in z || (e = "*"),
        a = z[e],
        a.innerHTML = "" + t,
        i = S.each(P.call(a.childNodes), function() {
            a.removeChild(this)
        })),
        o(n) && (r = S(i),
        S.each(n, function(t, e) {
            U.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
        })),
        i
    }
    ,
    V.Z = function(t, e) {
        return new p(t,e)
    }
    ,
    V.isZ = function(t) {
        return t instanceof V.Z
    }
    ,
    V.init = function(t, n) {
        var i;
        if (!t)
            return V.Z();
        if ("string" == typeof t)
            if (t = t.trim(),
            "<" == t[0] && B.test(t))
                i = V.fragment(t, RegExp.$1, n),
                t = null ;
            else {
                if (n !== E)
                    return S(n).find(t);
                i = V.qsa(M, t)
            }
        else {
            if (e(t))
                return S(M).ready(t);
            if (V.isZ(t))
                return t;
            if (K(t))
                i = s(t);
            else if (r(t))
                i = [t],
                t = null ;
            else if (B.test(t))
                i = V.fragment(t.trim(), RegExp.$1, n),
                t = null ;
            else {
                if (n !== E)
                    return S(n).find(t);
                i = V.qsa(M, t)
            }
        }
        return V.Z(i, t)
    }
    ,
    S = function(t, e) {
        return V.init(t, e)
    }
    ,
    S.extend = function(t) {
        var e, n = P.call(arguments, 1);
        return "boolean" == typeof t && (e = t,
        t = n.shift()),
        n.forEach(function(n) {
            m(t, n, e)
        }),
        t
    }
    ,
    V.qsa = function(t, e) {
        var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = G.test(o);
        return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : P.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }
    ,
    S.contains = M.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    }
    : function(t, e) {
        for (; e && (e = e.parentNode); )
            if (e === t)
                return !0;
        return !1
    }
    ,
    S.type = t,
    S.isFunction = e,
    S.isWindow = n,
    S.isArray = K,
    S.isPlainObject = o,
    S.isEmptyObject = function(t) {
        var e;
        for (e in t)
            return !1;
        return !0
    }
    ,
    S.inArray = function(t, e, n) {
        return A.indexOf.call(e, t, n)
    }
    ,
    S.camelCase = C,
    S.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }
    ,
    S.uuid = 0,
    S.support = {},
    S.expr = {},
    S.noop = function() {}
    ,
    S.map = function(t, e) {
        var n, i, r, o = [];
        if (a(t))
            for (i = 0; i < t.length; i++)
                n = e(t[i], i),
                null != n && o.push(n);
        else
            for (r in t)
                n = e(t[r], r),
                null != n && o.push(n);
        return c(o)
    }
    ,
    S.each = function(t, e) {
        var n, i;
        if (a(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1)
                    return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1)
                    return t;
        return t
    }
    ,
    S.grep = function(t, e) {
        return N.call(t, e)
    }
    ,
    window.JSON && (S.parseJSON = JSON.parse),
    S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    }),
    S.fn = {
        constructor: V.Z,
        length: 0,
        forEach: A.forEach,
        reduce: A.reduce,
        push: A.push,
        sort: A.sort,
        splice: A.splice,
        indexOf: A.indexOf,
        concat: function() {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++)
                e = arguments[t],
                n[t] = V.isZ(e) ? e.toArray() : e;
            return L.apply(V.isZ(this) ? this.toArray() : this, n)
        },
        map: function(t) {
            return S(S.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return S(P.apply(this, arguments))
        },
        ready: function(t) {
            return $.test(M.readyState) && M.body ? t(S) : M.addEventListener("DOMContentLoaded", function() {
                t(S)
            }, !1),
            this
        },
        get: function(t) {
            return t === E ? P.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return A.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function(t) {
            return e(t) ? this.not(this.not(t)) : S(N.call(this, function(e) {
                return V.matches(e, t)
            }))
        },
        add: function(t, e) {
            return S(k(this.concat(S(t, e))))
        },
        is: function(t) {
            return this.length > 0 && V.matches(this[0], t)
        },
        not: function(t) {
            var n = [];
            if (e(t) && t.call !== E)
                this.each(function(e) {
                    t.call(this, e) || n.push(this)
                });
            else {
                var i = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? P.call(t) : S(t);
                this.forEach(function(t) {
                    i.indexOf(t) < 0 && n.push(t)
                })
            }
            return S(n)
        },
        has: function(t) {
            return this.filter(function() {
                return r(t) ? S.contains(this, t) : S(this).find(t).size()
            })
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !r(t) ? t : S(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !r(t) ? t : S(t)
        },
        find: function(t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? S(t).filter(function() {
                var t = this;
                return A.some.call(n, function(e) {
                    return S.contains(e, t)
                })
            }) : 1 == this.length ? S(V.qsa(this[0], t)) : this.map(function() {
                return V.qsa(this, t)
            }) : S()
        },
        closest: function(t, e) {
            var n = this[0]
              , r = !1;
            for ("object" == typeof t && (r = S(t)); n && !(r ? r.indexOf(n) >= 0 : V.matches(n, t)); )
                n = n !== e && !i(n) && n.parentNode;
            return S(n)
        },
        parents: function(t) {
            for (var e = [], n = this; n.length > 0; )
                n = S.map(n, function(t) {
                    return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t),
                    t) : void 0
                });
            return g(e, t)
        },
        parent: function(t) {
            return g(k(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return g(this.map(function() {
                return d(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return this.contentDocument || P.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return g(this.map(function(t, e) {
                return N.call(d(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return S.map(this, function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var n = e(t);
            if (this[0] && !n)
                var i = S(t).get(0)
                  , r = i.parentNode || this.length > 1;
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                S(this[0]).before(t = S(t));
                for (var e; (e = t.children()).length; )
                    t = e.first();
                S(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
                var i = S(this)
                  , r = i.contents()
                  , o = n ? t.call(this, e) : t;
                r.length ? r.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                S(this).replaceWith(S(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var e = S(this);
                (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function(t) {
            return S(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return S(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = this.innerHTML;
                S(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                if (1 === this.nodeType)
                    if (r(t))
                        for (T in t)
                            y(this, T, t[T]);
                    else
                        y(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    y(this, t)
                }, this)
            })
        },
        prop: function(t, e) {
            return t = Q[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, e) {
            var n = "data-" + t.replace(q, "-$1").toLowerCase()
              , i = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== i ? b(i) : E
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t)
                return this.each(function(e) {
                    var n = S(this)
                      , i = v(this, t, e, n.offset())
                      , r = n.offsetParent().offset()
                      , o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == n.css("position") && (o.position = "relative"),
                    n.css(o)
                });
            if (!this.length)
                return null ;
            if (!S.contains(M.documentElement, this[0]))
                return {
                    top: 0,
                    left: 0
                };
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2) {
                var i, r = this[0];
                if (!r)
                    return;
                if (i = getComputedStyle(r, ""),
                "string" == typeof e)
                    return r.style[C(e)] || i.getPropertyValue(e);
                if (K(e)) {
                    var o = {};
                    return S.each(e, function(t, e) {
                        o[e] = r.style[C(e)] || i.getPropertyValue(e)
                    }),
                    o
                }
            }
            var a = "";
            if ("string" == t(e))
                n || 0 === n ? a = u(e) + ":" + f(e, n) : this.each(function() {
                    this.style.removeProperty(u(e))
                });
            else
                for (T in e)
                    e[T] || 0 === e[T] ? a += u(T) + ":" + f(T, e[T]) + ";" : this.each(function() {
                        this.style.removeProperty(u(T))
                    });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },
        index: function(t) {
            return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return !!t && A.some.call(this, function(t) {
                return this.test(w(t))
            }, l(t))
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className"in this) {
                    O = [];
                    var n = w(this)
                      , i = v(this, t, e, n);
                    i.split(/\s+/g).forEach(function(t) {
                        S(this).hasClass(t) || O.push(t)
                    }, this),
                    O.length && w(this, n + (n ? " " : "") + O.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(e) {
                if ("className"in this) {
                    if (t === E)
                        return w(this, "");
                    O = w(this),
                    v(this, t, e, O).split(/\s+/g).forEach(function(t) {
                        O = O.replace(l(t), " ")
                    }),
                    w(this, O.trim())
                }
            })
        },
        toggleClass: function(t, e) {
            return t ? this.each(function(n) {
                var i = S(this)
                  , r = v(this, t, n, w(this));
                r.split(/\s+/g).forEach(function(t) {
                    (e === E ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop"in this[0];
                return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                    this.scrollTop = t
                }
                : function() {
                    this.scrollTo(this.scrollX, t)
                }
                )
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft"in this[0];
                return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                    this.scrollLeft = t
                }
                : function() {
                    this.scrollTo(t, this.scrollY)
                }
                )
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0]
                  , e = this.offsetParent()
                  , n = this.offset()
                  , i = R.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return n.top -= parseFloat(S(t).css("margin-top")) || 0,
                n.left -= parseFloat(S(t).css("margin-left")) || 0,
                i.top += parseFloat(S(e[0]).css("border-top-width")) || 0,
                i.left += parseFloat(S(e[0]).css("border-left-width")) || 0,
                {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || M.body; t && !R.test(t.nodeName) && "static" == S(t).css("position"); )
                    t = t.offsetParent;
                return t
            })
        }
    },
    S.fn.detach = S.fn.remove,
    ["width", "height"].forEach(function(t) {
        var e = t.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        S.fn[t] = function(r) {
            var o, a = this[0];
            return r === E ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                a = S(this),
                a.css(t, v(this, r, e, a[t]()))
            })
        }
    }),
    Z.forEach(function(e, n) {
        var i = n % 2;
        S.fn[e] = function() {
            var e, r, o = S.map(arguments, function(n) {
                return e = t(n),
                "object" == e || "array" == e || null == n ? n : V.fragment(n)
            }), a = this.length > 1;
            return o.length < 1 ? this : this.each(function(t, e) {
                r = i ? e : e.parentNode,
                e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null ;
                var s = S.contains(M.documentElement, r);
                o.forEach(function(t) {
                    if (a)
                        t = t.cloneNode(!0);
                    else if (!r)
                        return S(t).remove();
                    r.insertBefore(t, e),
                    s && x(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }
        ,
        S.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
            return S(t)[e](this),
            this
        }
    }),
    V.Z.prototype = p.prototype = S.fn,
    V.uniq = k,
    V.deserializeValue = b,
    S.zepto = V,
    S
}();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function e(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i),
        !r.isDefaultPrevented()
    }
    function n(t, n, i, r) {
        return t.global ? e(n || y, i, r) : void 0
    }
    function i(e) {
        e.global && 0 === t.active++ && n(e, null , "ajaxStart")
    }
    function r(e) {
        e.global && !--t.active && n(e, null , "ajaxStop")
    }
    function o(t, e) {
        var i = e.context;
        return e.beforeSend.call(i, t, e) !== !1 && n(e, i, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, i, "ajaxSend", [t, e])
    }
    function a(t, e, i, r) {
        var o = i.context
          , a = "success";
        i.success.call(o, t, a, e),
        r && r.resolveWith(o, [t, a, e]),
        n(i, o, "ajaxSuccess", [e, i, t]),
        c(a, e, i)
    }
    function s(t, e, i, r, o) {
        var a = r.context;
        r.error.call(a, i, e, t),
        o && o.rejectWith(a, [i, e, t]),
        n(r, a, "ajaxError", [i, r, t || e]),
        c(e, i, r)
    }
    function c(t, e, i) {
        var o = i.context;
        i.complete.call(o, e, t),
        n(i, o, "ajaxComplete", [e, i]),
        r(i)
    }
    function u() {}
    function l(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == T ? "html" : t == E ? "json" : b.test(t) ? "script" : x.test(t) && "xml") || "text"
    }
    function f(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function h(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data),
        e.data = void 0)
    }
    function d(e, n, i, r) {
        return t.isFunction(n) && (r = i,
        i = n,
        n = void 0),
        t.isFunction(i) || (r = i,
        i = void 0),
        {
            url: e,
            data: n,
            success: i,
            dataType: r
        }
    }
    function p(e, n, i, r) {
        var o, a = t.isArray(n), s = t.isPlainObject(n);
        t.each(n, function(n, c) {
            o = t.type(c),
            r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"),
            !r && a ? e.add(c.name, c.value) : "array" == o || !i && "object" == o ? p(e, c, i, n) : e.add(n, c)
        })
    }
    var m, g, v = 0, y = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, b = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, E = "application/json", T = "text/html", S = /^\s*$/, O = y.createElement("a");
    O.href = window.location.href,
    t.active = 0,
    t.ajaxJSONP = function(e, n) {
        if (!("type"in e))
            return t.ajax(e);
        var i, r, c = e.jsonpCallback, u = (t.isFunction(c) ? c() : c) || "jsonp" + ++v, l = y.createElement("script"), f = window[u], h = function(e) {
            t(l).triggerHandler("error", e || "abort")
        }, d = {
            abort: h
        };
        return n && n.promise(d),
        t(l).on("load error", function(o, c) {
            clearTimeout(r),
            t(l).off().remove(),
            "error" != o.type && i ? a(i[0], d, e, n) : s(null , c || "error", d, e, n),
            window[u] = f,
            i && t.isFunction(f) && f(i[0]),
            f = i = void 0
        }),
        o(d, e) === !1 ? (h("abort"),
        d) : (window[u] = function() {
            i = arguments
        }
        ,
        l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u),
        y.head.appendChild(l),
        e.timeout > 0 && (r = setTimeout(function() {
            h("timeout")
        }, e.timeout)),
        d)
    }
    ,
    t.ajaxSettings = {
        type: "GET",
        beforeSend: u,
        success: u,
        error: u,
        complete: u,
        context: null ,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: E,
            xml: "application/xml, text/xml",
            html: T,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(e) {
        var n, r, c = t.extend({}, e || {}), d = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings)
            void 0 === c[m] && (c[m] = t.ajaxSettings[m]);
        i(c),
        c.crossDomain || (n = y.createElement("a"),
        n.href = c.url,
        n.href = n.href,
        c.crossDomain = O.protocol + "//" + O.host != n.protocol + "//" + n.host),
        c.url || (c.url = window.location.toString()),
        (r = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, r)),
        h(c);
        var p = c.dataType
          , v = /\?.+=\?/.test(c.url);
        if (v && (p = "jsonp"),
        c.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (c.url = f(c.url, "_=" + Date.now())),
        "jsonp" == p)
            return v || (c.url = f(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")),
            t.ajaxJSONP(c, d);
        var w, b = c.accepts[p], x = {}, E = function(t, e) {
            x[t.toLowerCase()] = [t, e]
        }, T = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol, C = c.xhr(), k = C.setRequestHeader;
        if (d && d.promise(C),
        c.crossDomain || E("X-Requested-With", "XMLHttpRequest"),
        E("Accept", b || "*/*"),
        (b = c.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]),
        C.overrideMimeType && C.overrideMimeType(b)),
        (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && E("Content-Type", c.contentType || "application/x-www-form-urlencoded"),
        c.headers)
            for (g in c.headers)
                E(g, c.headers[g]);
        if (C.setRequestHeader = E,
        C.onreadystatechange = function() {
            if (4 == C.readyState) {
                C.onreadystatechange = u,
                clearTimeout(w);
                var e, n = !1;
                if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == T) {
                    p = p || l(c.mimeType || C.getResponseHeader("content-type")),
                    e = C.responseText;
                    try {
                        "script" == p ? (0,
                        eval)(e) : "xml" == p ? e = C.responseXML : "json" == p && (e = S.test(e) ? null : t.parseJSON(e))
                    } catch (i) {
                        n = i
                    }
                    n ? s(n, "parsererror", C, c, d) : a(e, C, c, d)
                } else
                    s(C.statusText || null , C.status ? "error" : "abort", C, c, d)
            }
        }
        ,
        o(C, c) === !1)
            return C.abort(),
            s(null , "abort", C, c, d),
            C;
        if (c.xhrFields)
            for (g in c.xhrFields)
                C[g] = c.xhrFields[g];
        var A = !("async"in c) || c.async;
        C.open(c.type, c.url, A, c.username, c.password);
        for (g in x)
            k.apply(C, x[g]);
        return c.timeout > 0 && (w = setTimeout(function() {
            C.onreadystatechange = u,
            C.abort(),
            s(null , "timeout", C, c, d)
        }, c.timeout)),
        C.send(c.data ? c.data : null ),
        C
    }
    ,
    t.get = function() {
        return t.ajax(d.apply(null , arguments))
    }
    ,
    t.post = function() {
        var e = d.apply(null , arguments);
        return e.type = "POST",
        t.ajax(e)
    }
    ,
    t.getJSON = function() {
        var e = d.apply(null , arguments);
        return e.dataType = "json",
        t.ajax(e)
    }
    ,
    t.fn.load = function(e, n, i) {
        if (!this.length)
            return this;
        var r, o = this, a = e.split(/\s/), s = d(e, n, i), c = s.success;
        return a.length > 1 && (s.url = a[0],
        r = a[1]),
        s.success = function(e) {
            o.html(r ? t("<div>").html(e.replace(w, "")).find(r) : e),
            c && c.apply(o, arguments)
        }
        ,
        t.ajax(s),
        this
    }
    ;
    var C = encodeURIComponent;
    t.param = function(e, n) {
        var i = [];
        return i.add = function(e, n) {
            t.isFunction(n) && (n = n()),
            null == n && (n = ""),
            this.push(C(e) + "=" + C(n))
        }
        ,
        p(i, e, n),
        i.join("&").replace(/%20/g, "+")
    }
}(Zepto),
function(t) {
    var e, n = [];
    t.fn.remove = function() {
        return this.each(function() {
            this.parentNode && ("IMG" === this.tagName && (n.push(this),
            this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
            e && clearTimeout(e),
            e = setTimeout(function() {
                n = []
            }, 6e4)),
            this.parentNode.removeChild(this))
        })
    }
}(Zepto),
function(t) {
    t.Callbacks = function(e) {
        e = t.extend({}, e);
        var n, i, r, o, a, s, c = [], u = !e.once && [], l = function(t) {
            for (n = e.memory && t,
            i = !0,
            s = o || 0,
            o = 0,
            a = c.length,
            r = !0; c && a > s; ++s)
                if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            r = !1,
            c && (u ? u.length && l(u.shift()) : n ? c.length = 0 : f.disable())
        }, f = {
            add: function() {
                if (c) {
                    var i = c.length
                      , s = function(n) {
                        t.each(n, function(t, n) {
                            "function" == typeof n ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" != typeof n && s(n)
                        })
                    };
                    s(arguments),
                    r ? a = c.length : n && (o = i,
                    l(n))
                }
                return this
            },
            remove: function() {
                return c && t.each(arguments, function(e, n) {
                    for (var i; (i = t.inArray(n, c, i)) > -1; )
                        c.splice(i, 1),
                        r && (a >= i && --a,
                        s >= i && --s)
                }),
                this
            },
            has: function(e) {
                return !(!c || !(e ? t.inArray(e, c) > -1 : c.length))
            },
            empty: function() {
                return a = c.length = 0,
                this
            },
            disable: function() {
                return c = u = n = void 0,
                this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                return u = void 0,
                n || f.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, e) {
                return !c || i && !u || (e = e || [],
                e = [t, e.slice ? e.slice() : e],
                r ? u.push(e) : l(e)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments)
            },
            fired: function() {
                return !!i
            }
        };
        return f
    }
}(Zepto),
function(t) {
    function e(e, i) {
        var c = e[s]
          , u = c && r[c];
        if (void 0 === i)
            return u || n(e);
        if (u) {
            if (i in u)
                return u[i];
            var l = a(i);
            if (l in u)
                return u[l]
        }
        return o.call(t(e), i)
    }
    function n(e, n, o) {
        var c = e[s] || (e[s] = ++t.uuid)
          , u = r[c] || (r[c] = i(e));
        return void 0 !== n && (u[a(n)] = o),
        u
    }
    function i(e) {
        var n = {};
        return t.each(e.attributes || c, function(e, i) {
            0 == i.name.indexOf("data-") && (n[a(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
        }),
        n
    }
    var r = {}
      , o = t.fn.data
      , a = t.camelCase
      , s = t.expando = "Zepto" + +new Date
      , c = [];
    t.fn.data = function(i, r) {
        return void 0 === r ? t.isPlainObject(i) ? this.each(function(e, r) {
            t.each(i, function(t, e) {
                n(r, t, e)
            })
        }) : 0 in this ? e(this[0], i) : void 0 : this.each(function() {
            n(this, i, r)
        })
    }
    ,
    t.fn.removeData = function(e) {
        return "string" == typeof e && (e = e.split(/\s+/)),
        this.each(function() {
            var n = this[s]
              , i = n && r[n];
            i && t.each(e || i, function(t) {
                delete i[e ? a(this) : t]
            })
        })
    }
    ,
    ["remove", "empty"].forEach(function(e) {
        var n = t.fn[e];
        t.fn[e] = function() {
            var t = this.find("*");
            return "remove" === e && (t = t.add(this)),
            t.removeData(),
            n.call(this)
        }
    })
}(Zepto),
function(t) {
    function e(n) {
        var i = [["resolve", "done", t.Callbacks({
            once: 1,
            memory: 1
        }), "resolved"], ["reject", "fail", t.Callbacks({
            once: 1,
            memory: 1
        }), "rejected"], ["notify", "progress", t.Callbacks({
            memory: 1
        })]]
          , r = "pending"
          , o = {
            state: function() {
                return r
            },
            always: function() {
                return a.done(arguments).fail(arguments),
                this
            },
            then: function() {
                var n = arguments;
                return e(function(e) {
                    t.each(i, function(i, r) {
                        var s = t.isFunction(n[i]) && n[i];
                        a[r[1]](function() {
                            var n = s && s.apply(this, arguments);
                            if (n && t.isFunction(n.promise))
                                n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
                            else {
                                var i = this === o ? e.promise() : this
                                  , a = s ? [n] : arguments;
                                e[r[0] + "With"](i, a)
                            }
                        })
                    }),
                    n = null
                }).promise()
            },
            promise: function(e) {
                return null != e ? t.extend(e, o) : o
            }
        }
          , a = {};
        return t.each(i, function(t, e) {
            var n = e[2]
              , s = e[3];
            o[e[1]] = n.add,
            s && n.add(function() {
                r = s
            }, i[1 ^ t][2].disable, i[2][2].lock),
            a[e[0]] = function() {
                return a[e[0] + "With"](this === a ? o : this, arguments),
                this
            }
            ,
            a[e[0] + "With"] = n.fireWith
        }),
        o.promise(a),
        n && n.call(a, a),
        a
    }
    var n = Array.prototype.slice;
    t.when = function(i) {
        var r, o, a, s = n.call(arguments), c = s.length, u = 0, l = 1 !== c || i && t.isFunction(i.promise) ? c : 0, f = 1 === l ? i : e(), h = function(t, e, i) {
            return function(o) {
                e[t] = this,
                i[t] = arguments.length > 1 ? n.call(arguments) : o,
                i === r ? f.notifyWith(e, i) : --l || f.resolveWith(e, i)
            }
        };
        if (c > 1)
            for (r = new Array(c),
            o = new Array(c),
            a = new Array(c); c > u; ++u)
                s[u] && t.isFunction(s[u].promise) ? s[u].promise().done(h(u, a, s)).fail(f.reject).progress(h(u, o, r)) : --l;
        return l || f.resolveWith(a, s),
        f.promise()
    }
    ,
    t.Deferred = e
}(Zepto),
function(t) {
    function e(t, e) {
        var n = this.os = {}
          , i = this.browser = {}
          , r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
          , o = t.match(/(Android);?[\s\/]+([\d.]+)?/)
          , a = !!t.match(/\(Macintosh\; Intel /)
          , s = t.match(/(iPad).*OS\s([\d_]+)/)
          , c = t.match(/(iPod)(.*OS\s([\d_]+))?/)
          , u = !s && t.match(/(iPhone\sOS)\s([\d_]+)/)
          , l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
          , f = /Win\d{2}|Windows/.test(e)
          , h = t.match(/Windows Phone ([\d.]+)/)
          , d = l && t.match(/TouchPad/)
          , p = t.match(/Kindle\/([\d.]+)/)
          , m = t.match(/Silk\/([\d._]+)/)
          , g = t.match(/(BlackBerry).*Version\/([\d.]+)/)
          , v = t.match(/(BB10).*Version\/([\d.]+)/)
          , y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
          , w = t.match(/PlayBook/)
          , b = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/)
          , x = t.match(/Firefox\/([\d.]+)/)
          , E = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/)
          , T = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
          , S = !b && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
          , O = S || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        (i.webkit = !!r) && (i.version = r[1]),
        o && (n.android = !0,
        n.version = o[2]),
        u && !c && (n.ios = n.iphone = !0,
        n.version = u[2].replace(/_/g, ".")),
        s && (n.ios = n.ipad = !0,
        n.version = s[2].replace(/_/g, ".")),
        c && (n.ios = n.ipod = !0,
        n.version = c[3] ? c[3].replace(/_/g, ".") : null ),
        h && (n.wp = !0,
        n.version = h[1]),
        l && (n.webos = !0,
        n.version = l[2]),
        d && (n.touchpad = !0),
        g && (n.blackberry = !0,
        n.version = g[2]),
        v && (n.bb10 = !0,
        n.version = v[2]),
        y && (n.rimtabletos = !0,
        n.version = y[2]),
        w && (i.playbook = !0),
        p && (n.kindle = !0,
        n.version = p[1]),
        m && (i.silk = !0,
        i.version = m[1]),
        !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0),
        b && (i.chrome = !0,
        i.version = b[1]),
        x && (i.firefox = !0,
        i.version = x[1]),
        E && (n.firefoxos = !0,
        n.version = E[1]),
        T && (i.ie = !0,
        i.version = T[1]),
        O && (a || n.ios || f) && (i.safari = !0,
        n.ios || (i.version = O[1])),
        S && (i.webview = !0),
        n.tablet = !!(s || w || o && !t.match(/Mobile/) || x && t.match(/Tablet/) || T && !t.match(/Phone/) && t.match(/Touch/)),
        n.phone = !(n.tablet || n.ipod || !(o || u || l || g || v || b && t.match(/Android/) || b && t.match(/CriOS\/([\d.]+)/) || x && t.match(/Mobile/) || T && t.match(/Touch/)))
    }
    e.call(t, navigator.userAgent, navigator.platform),
    t.__detect = e
}(Zepto),
function(t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }
    function n(t, n, o, a) {
        if (n = i(n),
        n.ns)
            var s = r(n.ns);
        return (g[e(t)] || []).filter(function(t) {
            return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
        })
    }
    function i(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function r(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(t, e) {
        return t.del && !y && t.e in w || !!e
    }
    function a(t) {
        return b[t] || y && w[t] || t
    }
    function s(n, r, s, c, l, h, d) {
        var p = e(n)
          , m = g[p] || (g[p] = []);
        r.split(/\s/).forEach(function(e) {
            if ("ready" == e)
                return t(document).ready(s);
            var r = i(e);
            r.fn = s,
            r.sel = l,
            r.e in b && (s = function(e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0
            }
            ),
            r.del = h;
            var p = h || s;
            r.proxy = function(t) {
                if (t = u(t),
                !t.isImmediatePropagationStopped()) {
                    t.data = c;
                    var e = p.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(),
                    t.stopPropagation()),
                    e
                }
            }
            ,
            r.i = m.length,
            m.push(r),
            "addEventListener"in n && n.addEventListener(a(r.e), r.proxy, o(r, d))
        })
    }
    function c(t, i, r, s, c) {
        var u = e(t);
        (i || "").split(/\s/).forEach(function(e) {
            n(t, e, r, s).forEach(function(e) {
                delete g[u][e.i],
                "removeEventListener"in t && t.removeEventListener(a(e.e), e.proxy, o(e, c))
            })
        })
    }
    function u(e, n) {
        return (n || !e.isDefaultPrevented) && (n || (n = e),
        t.each(S, function(t, i) {
            var r = n[t];
            e[t] = function() {
                return this[i] = x,
                r && r.apply(n, arguments)
            }
            ,
            e[i] = E
        }),
        (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue"in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)),
        e
    }
    function l(t) {
        var e, n = {
            originalEvent: t
        };
        for (e in t)
            T.test(e) || t[e] === f || (n[e] = t[e]);
        return u(n, t)
    }
    var f, h = 1, d = Array.prototype.slice, p = t.isFunction, m = function(t) {
        return "string" == typeof t
    }, g = {}, v = {}, y = "onfocusin"in window, w = {
        focus: "focusin",
        blur: "focusout"
    }, b = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents",
    t.event = {
        add: s,
        remove: c
    },
    t.proxy = function(n, i) {
        var r = 2 in arguments && d.call(arguments, 2);
        if (p(n)) {
            var o = function() {
                return n.apply(i, r ? r.concat(d.call(arguments)) : arguments)
            };
            return o._zid = e(n),
            o
        }
        if (m(i))
            return r ? (r.unshift(n[i], n),
            t.proxy.apply(null , r)) : t.proxy(n[i], n);
        throw new TypeError("expected function")
    }
    ,
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    }
    ,
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    }
    ,
    t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1)
    }
    ;
    var x = function() {
        return !0
    }
      , E = function() {
        return !1
    }
      , T = /^([A-Z]|returnValue$|layer[XY]$)/
      , S = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    }
    ,
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    }
    ,
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    }
    ,
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    }
    ,
    t.fn.on = function(e, n, i, r, o) {
        var a, u, h = this;
        return e && !m(e) ? (t.each(e, function(t, e) {
            h.on(t, n, i, e, o)
        }),
        h) : (m(n) || p(r) || r === !1 || (r = i,
        i = n,
        n = f),
        (r === f || i === !1) && (r = i,
        i = f),
        r === !1 && (r = E),
        h.each(function(f, h) {
            o && (a = function(t) {
                return c(h, t.type, r),
                r.apply(this, arguments)
            }
            ),
            n && (u = function(e) {
                var i, o = t(e.target).closest(n, h).get(0);
                return o && o !== h ? (i = t.extend(l(e), {
                    currentTarget: o,
                    liveFired: h
                }),
                (a || r).apply(o, [i].concat(d.call(arguments, 1)))) : void 0
            }
            ),
            s(h, e, r, i, n, u || a)
        }))
    }
    ,
    t.fn.off = function(e, n, i) {
        var r = this;
        return e && !m(e) ? (t.each(e, function(t, e) {
            r.off(t, n, e)
        }),
        r) : (m(n) || p(i) || i === !1 || (i = n,
        n = f),
        i === !1 && (i = E),
        r.each(function() {
            c(this, e, i, n)
        }))
    }
    ,
    t.fn.trigger = function(e, n) {
        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e),
        e._args = n,
        this.each(function() {
            e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }
    ,
    t.fn.triggerHandler = function(e, i) {
        var r, o;
        return this.each(function(a, s) {
            r = l(m(e) ? t.Event(e) : e),
            r._args = i,
            r.target = s,
            t.each(n(s, e.type || e), function(t, e) {
                return o = e.proxy(r),
                !r.isImmediatePropagationStopped() && void 0
            })
        }),
        o
    }
    ,
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }),
    t.Event = function(t, e) {
        m(t) || (e = t,
        t = e.type);
        var n = document.createEvent(v[t] || "Events")
          , i = !0;
        if (e)
            for (var r in e)
                "bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0),
        u(n)
    }
}(Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var e, n, i = [], r = function(t) {
            return t.forEach ? t.forEach(r) : void i.push({
                name: e,
                value: t
            })
        };
        return this[0] && t.each(this[0].elements, function(i, o) {
            n = o.type,
            e = o.name,
            e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
        }),
        i
    }
    ,
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }),
        t.join("&")
    }
    ,
    t.fn.submit = function(e) {
        if (0 in arguments)
            this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto),
function(t, e) {
    function n(t) {
        return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function i(t) {
        return r ? r + t : t.toLowerCase()
    }
    var r, o, a, s, c, u, l, f, h, d, p = "", m = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, g = document.createElement("div"), v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, y = {};
    t.each(m, function(t, n) {
        return g.style[t + "TransitionProperty"] !== e ? (p = "-" + t.toLowerCase() + "-",
        r = n,
        !1) : void 0
    }),
    o = p + "transform",
    y[a = p + "transition-property"] = y[s = p + "transition-duration"] = y[u = p + "transition-delay"] = y[c = p + "transition-timing-function"] = y[l = p + "animation-name"] = y[f = p + "animation-duration"] = y[d = p + "animation-delay"] = y[h = p + "animation-timing-function"] = "",
    t.fx = {
        off: r === e && g.style.transitionProperty === e,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: p,
        transitionEnd: i("TransitionEnd"),
        animationEnd: i("AnimationEnd")
    },
    t.fn.animate = function(n, i, r, o, a) {
        return t.isFunction(i) && (o = i,
        r = e,
        i = e),
        t.isFunction(r) && (o = r,
        r = e),
        t.isPlainObject(i) && (r = i.easing,
        o = i.complete,
        a = i.delay,
        i = i.duration),
        i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3),
        a && (a = parseFloat(a) / 1e3),
        this.anim(n, i, r, o, a)
    }
    ,
    t.fn.anim = function(i, r, p, m, g) {
        var w, b, x, E = {}, T = "", S = this, O = t.fx.transitionEnd, C = !1;
        if (r === e && (r = t.fx.speeds._default / 1e3),
        g === e && (g = 0),
        t.fx.off && (r = 0),
        "string" == typeof i)
            E[l] = i,
            E[f] = r + "s",
            E[d] = g + "s",
            E[h] = p || "linear",
            O = t.fx.animationEnd;
        else {
            b = [];
            for (w in i)
                v.test(w) ? T += w + "(" + i[w] + ") " : (E[w] = i[w],
                b.push(n(w)));
            T && (E[o] = T,
            b.push(o)),
            r > 0 && "object" == typeof i && (E[a] = b.join(", "),
            E[s] = r + "s",
            E[u] = g + "s",
            E[c] = p || "linear")
        }
        return x = function(e) {
            if ("undefined" != typeof e) {
                if (e.target !== e.currentTarget)
                    return;
                t(e.target).unbind(O, x)
            } else
                t(this).unbind(O, x);
            C = !0,
            t(this).css(y),
            m && m.call(this)
        }
        ,
        r > 0 && (this.bind(O, x),
        setTimeout(function() {
            C || x.call(S)
        }, 1e3 * (r + g) + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(E),
        0 >= r && setTimeout(function() {
            S.each(function() {
                x.call(this)
            })
        }, 0),
        this
    }
    ,
    g = null
}(Zepto),
function(t, e) {
    function n(n, i, r, o, a) {
        "function" != typeof i || a || (a = i,
        i = e);
        var s = {
            opacity: r
        };
        return o && (s.scale = o,
        n.css(t.fx.cssPrefix + "transform-origin", "0 0")),
        n.animate(s, i, null , a)
    }
    function i(e, i, r, o) {
        return n(e, i, 0, r, function() {
            a.call(t(this)),
            o && o.call(this)
        })
    }
    var r = window.document
      , o = (r.documentElement,
    t.fn.show)
      , a = t.fn.hide
      , s = t.fn.toggle;
    t.fn.show = function(t, i) {
        return o.call(this),
        t === e ? t = 0 : this.css("opacity", 0),
        n(this, t, 1, "1,1", i)
    }
    ,
    t.fn.hide = function(t, n) {
        return t === e ? a.call(this) : i(this, t, "0,0", n)
    }
    ,
    t.fn.toggle = function(n, i) {
        return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
            var e = t(this);
            e["none" == e.css("display") ? "show" : "hide"](n, i)
        })
    }
    ,
    t.fn.fadeTo = function(t, e, i) {
        return n(this, t, e, null , i)
    }
    ,
    t.fn.fadeIn = function(t, e) {
        var n = this.css("opacity");
        return n > 0 ? this.css("opacity", 0) : n = 1,
        o.call(this).fadeTo(t, n, e)
    }
    ,
    t.fn.fadeOut = function(t, e) {
        return i(this, t, null , e)
    }
    ,
    t.fn.fadeToggle = function(e, n) {
        return this.each(function() {
            var i = t(this);
            i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
        })
    }
}(Zepto),
function(t) {
    function e(t) {
        return "tagName"in t ? t : t.parentNode
    }
    if (t.os.ios) {
        var n, i = {};
        t(document).bind("gesturestart", function(t) {
            var r = Date.now();
            r - (i.last || r),
            i.target = e(t.target),
            n && clearTimeout(n),
            i.e1 = t.scale,
            i.last = r
        }).bind("gesturechange", function(t) {
            i.e2 = t.scale
        }).bind("gestureend", function(e) {
            i.e2 > 0 ? (0 != Math.abs(i.e1 - i.e2) && t(i.target).trigger("pinch") && t(i.target).trigger("pinch" + (i.e1 - i.e2 > 0 ? "In" : "Out")),
            i.e1 = i.e2 = i.last = 0) : "last"in i && (i = {})
        }),
        ["pinch", "pinchIn", "pinchOut"].forEach(function(e) {
            t.fn[e] = function(t) {
                return this.bind(e, t)
            }
        })
    }
}(Zepto),
function() {
    try {
        getComputedStyle(void 0)
    } catch (t) {
        var e = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return e(t)
            } catch (n) {
                return null
            }
        }
    }
}(),
function(t) {
    String.prototype.trim === t && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
    ),
    Array.prototype.reduce === t && (Array.prototype.reduce = function(e) {
        if (void 0 === this || null === this)
            throw new TypeError;
        var n, i = Object(this), r = i.length >>> 0, o = 0;
        if ("function" != typeof e)
            throw new TypeError;
        if (0 == r && 1 == arguments.length)
            throw new TypeError;
        if (arguments.length >= 2)
            n = arguments[1];
        else
            for (; ; ) {
                if (o in i) {
                    n = i[o++];
                    break
                }
                if (++o >= r)
                    throw new TypeError
            }
        for (; r > o; )
            o in i && (n = e.call(t, n, i[o], o, i)),
            o++;
        return n
    }
    )
}(),
function(t) {
    function e(e) {
        return e = t(e),
        !(!e.width() && !e.height()) && "none" !== e.css("display")
    }
    function n(t, e) {
        t = t.replace(/=#\]/g, '="#"]');
        var n, i, r = s.exec(t);
        if (r && r[2]in a && (n = a[r[2]],
        i = r[3],
        t = r[1],
        i)) {
            var o = Number(i);
            i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
        }
        return e(t, n, i)
    }
    var i = t.zepto
      , r = i.qsa
      , o = i.matches
      , a = t.expr[":"] = {
        visible: function() {
            return e(this) ? this : void 0
        },
        hidden: function() {
            return e(this) ? void 0 : this
        },
        selected: function() {
            return this.selected ? this : void 0
        },
        checked: function() {
            return this.checked ? this : void 0
        },
        parent: function() {
            return this.parentNode
        },
        first: function(t) {
            return 0 === t ? this : void 0
        },
        last: function(t, e) {
            return t === e.length - 1 ? this : void 0
        },
        eq: function(t, e, n) {
            return t === n ? this : void 0
        },
        contains: function(e, n, i) {
            return t(this).text().indexOf(i) > -1 ? this : void 0
        },
        has: function(t, e, n) {
            return i.qsa(this, n).length ? this : void 0
        }
    }
      , s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*")
      , c = /^\s*>/
      , u = "Zepto" + +new Date;
    i.qsa = function(e, o) {
        return n(o, function(n, a, s) {
            try {
                var l;
                !n && a ? n = "*" : c.test(n) && (l = t(e).addClass(u),
                n = "." + u + " " + n);
                var f = r(e, n)
            } catch (h) {
                throw console.error("error performing selector: %o", o),
                h
            } finally {
                l && l.removeClass(u)
            }
            return a ? i.uniq(t.map(f, function(t, e) {
                return a.call(t, e, f, s)
            })) : f
        })
    }
    ,
    i.matches = function(t, e) {
        return n(e, function(e, n, i) {
            return (!e || o(t, e)) && (!n || n.call(t, null , i) === t)
        })
    }
}(Zepto),
function(t) {
    t.fn.end = function() {
        return this.prevObject || t()
    }
    ,
    t.fn.andSelf = function() {
        return this.add(this.prevObject || t())
    }
    ,
    "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
        var n = t.fn[e];
        t.fn[e] = function() {
            var t = n.apply(this, arguments);
            return t.prevObject = this,
            t
        }
    })
}(Zepto),
function(t) {
    function e(t, e, n, i) {
        return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
    }
    function n() {
        l = null ,
        h.last && (h.el.trigger("longTap"),
        h = {})
    }
    function i() {
        l && clearTimeout(l),
        l = null
    }
    function r() {
        s && clearTimeout(s),
        c && clearTimeout(c),
        u && clearTimeout(u),
        l && clearTimeout(l),
        s = c = u = l = null ,
        h = {}
    }
    function o(t) {
        return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
    }
    function a(t, e) {
        return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
    }
    var s, c, u, l, f, h = {}, d = 750;
    t(document).ready(function() {
        var p, m, g, v, y = 0, w = 0;
        "MSGesture"in window && (f = new MSGesture,
        f.target = document.body),
        t(document).bind("MSGestureEnd", function(t) {
            var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null ;
            e && (h.el.trigger("swipe"),
            h.el.trigger("swipe" + e))
        }).on("touchstart MSPointerDown pointerdown", function(e) {
            (!(v = a(e, "down")) || o(e)) && (g = v ? e : e.touches[0],
            e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0,
            h.y2 = void 0),
            p = Date.now(),
            m = p - (h.last || p),
            h.el = t("tagName"in g.target ? g.target : g.target.parentNode),
            s && clearTimeout(s),
            h.x1 = g.pageX,
            h.y1 = g.pageY,
            m > 0 && 250 >= m && (h.isDoubleTap = !0),
            h.last = p,
            l = setTimeout(n, d),
            f && v && f.addPointer(e.pointerId))
        }).on("touchmove MSPointerMove pointermove", function(t) {
            (!(v = a(t, "move")) || o(t)) && (g = v ? t : t.touches[0],
            i(),
            h.x2 = g.pageX,
            h.y2 = g.pageY,
            y += Math.abs(h.x1 - h.x2),
            w += Math.abs(h.y1 - h.y2))
        }).on("touchend MSPointerUp pointerup", function(n) {
            (!(v = a(n, "up")) || o(n)) && (i(),
            h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? u = setTimeout(function() {
                h.el.trigger("swipe"),
                h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)),
                h = {}
            }, 0) : "last"in h && (30 > y && 30 > w ? c = setTimeout(function() {
                var e = t.Event("tap");
                e.cancelTouch = r,
                h.el.trigger(e),
                h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"),
                h = {}) : s = setTimeout(function() {
                    s = null ,
                    h.el && h.el.trigger("singleTap"),
                    h = {}
                }, 250)
            }, 0) : h = {}),
            y = w = 0)
        }).on("touchcancel MSPointerCancel pointercancel", r),
        t(window).on("scroll", r)
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
        t.fn[e] = function(t) {
            return this.on(e, t)
        }
    })
}(Zepto),
!function() {
    "use strict";
    function t(e, i) {
        function r(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var o;
        if (i = i || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null ,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = i.touchBoundary || 10,
        this.layer = e,
        this.tapDelay = i.tapDelay || 200,
        this.tapTimeout = i.tapTimeout || 700,
        !t.notNeeded(e)) {
            for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, c = 0, u = a.length; u > c; c++)
                s[a[c]] = r(s[a[c]], s);
            n && (e.addEventListener("mouseover", this.onMouse, !0),
            e.addEventListener("mousedown", this.onMouse, !0),
            e.addEventListener("mouseup", this.onMouse, !0)),
            e.addEventListener("click", this.onClick, !0),
            e.addEventListener("touchstart", this.onTouchStart, !1),
            e.addEventListener("touchmove", this.onTouchMove, !1),
            e.addEventListener("touchend", this.onTouchEnd, !1),
            e.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
            }
            ,
            e.addEventListener = function(t, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(t) {
                    t.propagationStopped || n(t)
                }
                ), i) : r.call(e, t, n, i)
            }
            ),
            "function" == typeof e.onclick && (o = e.onclick,
            e.addEventListener("click", function(t) {
                o(t)
            }, !1),
            e.onclick = null )
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0
      , n = navigator.userAgent.indexOf("Android") > 0 && !e
      , i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e
      , r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent)
      , o = i && /OS [6-7]_\d/.test(navigator.userAgent)
      , a = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled)
                return !0;
            break;
        case "input":
            if (i && "file" === t.type || t.disabled)
                return !0;
            break;
        case "label":
        case "iframe":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }
    ,
    t.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !n;
        case "input":
            switch (t.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
        }
    }
    ,
    t.prototype.sendClick = function(t, e) {
        var n, i;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(),
        i = e.changedTouches[0],
        n = document.createEvent("MouseEvents"),
        n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null ),
        n.forwardedTouchEvent = !0,
        t.dispatchEvent(n)
    }
    ,
    t.prototype.determineEventType = function(t) {
        return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    t.prototype.focus = function(t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length,
        t.setSelectionRange(e, e)) : t.focus()
    }
    ,
    t.prototype.updateScrollParent = function(t) {
        var e, n;
        if (e = t.fastClickScrollParent,
        !e || !e.contains(t)) {
            n = t;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    e = n,
                    t.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }
    ,
    t.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }
    ,
    t.prototype.onTouchStart = function(t) {
        var e, n, o;
        if (t.targetTouches.length > 1)
            return !0;
        if (e = this.getTargetElementFromEventTarget(t.target),
        n = t.targetTouches[0],
        i) {
            if (o = window.getSelection(),
            o.rangeCount && !o.isCollapsed)
                return !0;
            if (!r) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier)
                    return t.preventDefault(),
                    !1;
                this.lastTouchIdentifier = n.identifier,
                this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = t.timeStamp,
        this.targetElement = e,
        this.touchStartX = n.pageX,
        this.touchStartY = n.pageY,
        t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
        !0
    }
    ,
    t.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0]
          , n = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
    }
    ,
    t.prototype.onTouchMove = function(t) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
        this.targetElement = null ),
        !0)
    }
    ,
    t.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    t.prototype.onTouchEnd = function(t) {
        var e, a, s, c, u, l = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0,
            !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
            return !0;
        if (this.cancelNextClick = !1,
        this.lastClickTime = t.timeStamp,
        a = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        o && (u = t.changedTouches[0],
        l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l,
        l.fastClickScrollParent = this.targetElement.fastClickScrollParent),
        s = l.tagName.toLowerCase(),
        "label" === s) {
            if (e = this.findControl(l)) {
                if (this.focus(l),
                n)
                    return !1;
                l = e
            }
        } else if (this.needsFocus(l))
            return t.timeStamp - a > 100 || i && window.top !== window && "input" === s ? (this.targetElement = null ,
            !1) : (this.focus(l),
            this.sendClick(l, t),
            i && "select" === s || (this.targetElement = null ,
            t.preventDefault()),
            !1);
        return !(!i || r || (c = l.fastClickScrollParent,
        !c || c.fastClickLastScrollTop === c.scrollTop)) || (this.needsClick(l) || (t.preventDefault(),
        this.sendClick(l, t)),
        !1)
    }
    ,
    t.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    }
    ,
    t.prototype.onMouse = function(t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
        t.stopPropagation(),
        t.preventDefault(),
        !1)))
    }
    ,
    t.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null ,
        this.trackingClick = !1,
        !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t),
        e || (this.targetElement = null ),
        e)
    }
    ,
    t.prototype.destroy = function() {
        var t = this.layer;
        n && (t.removeEventListener("mouseover", this.onMouse, !0),
        t.removeEventListener("mousedown", this.onMouse, !0),
        t.removeEventListener("mouseup", this.onMouse, !0)),
        t.removeEventListener("click", this.onClick, !0),
        t.removeEventListener("touchstart", this.onTouchStart, !1),
        t.removeEventListener("touchmove", this.onTouchMove, !1),
        t.removeEventListener("touchend", this.onTouchEnd, !1),
        t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    t.notNeeded = function(t) {
        var e, i, r, o;
        if ("undefined" == typeof window.ontouchstart)
            return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n)
                return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no"))
                    return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        if (a && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
        r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no"))
                return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
        !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"),
        e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
    }
    ,
    t.attach = function(e, n) {
        return new t(e,n)
    }
    ,
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach,
    module.exports.FastClick = t) : window.FastClick = t
}(),
!function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.WebStorageCache = e()
}(this, function() {
    "use strict";
    function t(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function e(t) {
        var e = !1;
        if (t && t.setItem) {
            e = !0;
            var n = "__" + Math.round(1e7 * Math.random());
            try {
                t.setItem(n, n),
                t.removeItem(n)
            } catch (i) {
                e = !1
            }
        }
        return e
    }
    function n(t) {
        var e = typeof t;
        return "string" === e && window[t]instanceof Storage ? window[t] : t
    }
    function i(t) {
        return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
    }
    function r(t, e) {
        if (e = e || new Date,
        "number" == typeof t ? t = t === 1 / 0 ? f : new Date(e.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)),
        t && !i(t))
            throw new Error("`expires` parameter cannot be converted to a valid Date instance");
        return t
    }
    function o(t) {
        var e = !1;
        if (t)
            if (t.code)
                switch (t.code) {
                case 22:
                    e = !0;
                    break;
                case 1014:
                    "NS_ERROR_DOM_QUOTA_REACHED" === t.name && (e = !0)
                }
            else
                -2147024882 === t.number && (e = !0);
        return e
    }
    function a(t, e) {
        this.c = (new Date).getTime(),
        e = e || f;
        var n = r(e);
        this.e = n.getTime(),
        this.v = t
    }
    function s(t) {
        return !!(t && "c"in t && "e"in t && "v"in t)
    }
    function c(t) {
        var e = (new Date).getTime();
        return e < t.e
    }
    function u(t) {
        return "string" != typeof t && (console.warn(t + " used as a key, but it is not a string."),
        t = String(t)),
        t
    }
    function l(i) {
        var r = {
            storage: "localStorage",
            exp: 1 / 0
        }
          , o = t(r, i)
          , a = n(o.storage)
          , s = e(a);
        this.isSupported = function() {
            return s
        }
        ,
        s ? (this.storage = a,
        this.quotaExceedHandler = function(t, e, n) {
            if (console.warn("Quota exceeded!"),
            n && n.force === !0) {
                var i = this.deleteAllExpires();
                console.warn("delete all expires CacheItem : [" + i + "] and try execute `set` method again!");
                try {
                    n.force = !1,
                    this.set(t, e, n)
                } catch (r) {
                    console.warn(r)
                }
            }
        }
        ) : t(this, d)
    }
    var f = new Date("Fri, 31 Dec 9999 23:59:59 UTC")
      , h = {
        serialize: function(t) {
            return JSON.stringify(t)
        },
        deserialize: function(t) {
            return t && JSON.parse(t)
        }
    }
      , d = {
        set: function() {},
        get: function() {},
        "delete": function() {},
        deleteAllExpires: function() {},
        clear: function() {},
        add: function() {},
        replace: function() {},
        touch: function() {}
    }
      , p = {
        set: function(e, n, i) {
            if (e = u(e),
            i = t({
                force: !0
            }, i),
            void 0 === n)
                return this["delete"](e);
            var r = h.serialize(n)
              , s = new a(r,i.exp);
            try {
                this.storage.setItem(e, h.serialize(s))
            } catch (c) {
                o(c) ? this.quotaExceedHandler(e, r, i, c) : console.error(c)
            }
            return n
        },
        get: function(t) {
            t = u(t);
            var e = null ;
            try {
                e = h.deserialize(this.storage.getItem(t))
            } catch (n) {
                return null
            }
            if (s(e)) {
                if (c(e)) {
                    var i = e.v;
                    return h.deserialize(i)
                }
                this["delete"](t)
            }
            return null
        },
        "delete": function(t) {
            return t = u(t),
            this.storage.removeItem(t),
            t
        },
        deleteAllExpires: function() {
            for (var t = this.storage.length, e = [], n = this, i = 0; t > i; i++) {
                var r = this.storage.key(i)
                  , o = null ;
                try {
                    o = h.deserialize(this.storage.getItem(r))
                } catch (a) {}
                if (null !== o && void 0 !== o.e) {
                    var s = (new Date).getTime();
                    s >= o.e && e.push(r)
                }
            }
            return e.forEach(function(t) {
                n["delete"](t)
            }),
            e
        },
        clear: function() {
            this.storage.clear()
        },
        add: function(e, n, i) {
            e = u(e),
            i = t({
                force: !0
            }, i);
            try {
                var r = h.deserialize(this.storage.getItem(e));
                if (!s(r) || !c(r))
                    return this.set(e, n, i),
                    !0
            } catch (o) {
                return this.set(e, n, i),
                !0
            }
            return !1
        },
        replace: function(t, e, n) {
            t = u(t);
            var i = null ;
            try {
                i = h.deserialize(this.storage.getItem(t))
            } catch (r) {
                return !1
            }
            if (s(i)) {
                if (c(i))
                    return this.set(t, e, n),
                    !0;
                this["delete"](t)
            }
            return !1
        },
        touch: function(t, e) {
            t = u(t);
            var n = null ;
            try {
                n = h.deserialize(this.storage.getItem(t))
            } catch (i) {
                return !1
            }
            if (s(n)) {
                if (c(n))
                    return this.set(t, this.get(t), {
                        exp: e
                    }),
                    !0;
                this["delete"](t)
            }
            return !1
        }
    };
    return l.prototype = p,
    l
}),
function(t) {
    if ("function" == typeof define && define.amd)
        define(t);
    else if ("object" == typeof exports)
        module.exports = t();
    else {
        var e = window.Cookies
          , n = window.Cookies = t();
        n.noConflict = function() {
            return window.Cookies = e,
            n
        }
    }
}(function() {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                e[i] = n[i]
        }
        return e
    }
    function e(n) {
        function i(e, r, o) {
            var a;
            if (arguments.length > 1) {
                if (o = t({
                    path: "/"
                }, i.defaults, o),
                "number" == typeof o.expires) {
                    var s = new Date;
                    s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires),
                    o.expires = s
                }
                try {
                    a = JSON.stringify(r),
                    /^[\{\[]/.test(a) && (r = a)
                } catch (c) {}
                return r = n.write ? n.write(r, e) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                e = encodeURIComponent(String(e)),
                e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                e = e.replace(/[\(\)]/g, escape),
                document.cookie = [e, "=", r, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
            }
            e || (a = {});
            for (var u = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, f = 0; f < u.length; f++) {
                var h = u[f].split("=")
                  , d = h[0].replace(l, decodeURIComponent)
                  , p = h.slice(1).join("=");
                '"' === p.charAt(0) && (p = p.slice(1, -1));
                try {
                    if (p = n.read ? n.read(p, d) : n(p, d) || p.replace(l, decodeURIComponent),
                    this.json)
                        try {
                            p = JSON.parse(p)
                        } catch (c) {}
                    if (e === d) {
                        a = p;
                        break
                    }
                    e || (a[d] = p)
                } catch (c) {}
            }
            return a
        }
        return i.get = i.set = i,
        i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        i.defaults = {},
        i.remove = function(e, n) {
            i(e, "", t(n, {
                expires: -1
            }))
        }
        ,
        i.withConverter = e,
        i
    }
    return e(function() {})
});
try {
    Array.prototype.contains || (Array.prototype.contains = function(t) {
        for (var e = 0; e < this.length; e++)
            if (this[e] === t)
                return !0
    }
    )
} catch (e) {
    console.error(e)
}
try {
    Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
        var n, i;
        if (null === this)
            throw new TypeError(" this is null or not defined");
        var r = Object(this)
          , o = r.length >>> 0;
        if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
        for (arguments.length > 1 && (n = e),
        i = 0; i < o; ) {
            var a;
            i in r && (a = r[i],
            t.call(n, a, i, r)),
            i++
        }
    }
    )
} catch (e) {
    console.error(e)
}
var GLOBAL = {};
GLOBAL.namespace = function(t) {
    for (var e = t.split("."), n = GLOBAL, i = "GLOBAL" === e[0] ? 1 : 0; i < e.length; i++)
        n[e[i]] = n[e[i]] || {},
        n = n[e[i]]
}
,
GLOBAL.namespace("Util"),
GLOBAL.namespace("Js"),
GLOBAL.namespace("Cookie"),
GLOBAL.namespace("Array"),
GLOBAL.namespace("Os"),
GLOBAL.namespace("Browser"),
GLOBAL.Util = {
    getRandom: function(t, e) {
        return Math.floor(Math.random() * (e - t) + t)
    },
    getScript: function(t, e, n) {
        var i = document.getElementsByTagName("head")[0]
          , r = document.createElement("script");
        r.setAttribute("type", "text/javascript"),
        r.setAttribute("src", t),
        n ? n.appendChild(r) : i.appendChild(r);
        var o = function() {
            "function" == typeof e && e()
        };
        document.all ? r.onreadystatechange = function() {
            "loaded" !== r.readyState && "complete" !== r.readyState || o()
        }
        : r.onload = function() {
            o()
        }
    },
    createScript: function(t, e, n) {
        if (t) {
            var i = document.getElementsByTagName("head")[0]
              , r = document.createElement("script");
            r.setAttribute("type", "text/javascript"),
            r.innerHTML = t,
            n ? n.appendChild(r) : i.appendChild(r),
            e()
        }
    },
    filterHtmlTags: function(t) {
        if (t && "string" == typeof t)
            return t.replace(/<\/?[^>]*>/g, "")
    },
    getQueryString: function(t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
          , n = window.location.search.substr(1).match(e);
        return null != n ? decodeURI(n[2]) : null
    },
    dislocateArr: function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    },
    getSpecialCountStr: function(t) {
        return "string" != typeof t && "number" != typeof t ? t : (t = parseInt(t, 10),
        t > 9999 ? Math.ceil(t / 1e4) + "万" : "" + t)
    },
    getSpecialTimeStr: function(t) {
        var e = this.strToTime(t);
        if (!e)
            return !1;
        var n = (new Date).getTime()
          , i = Number(n - e)
          , r = 864e5
          , o = 36e5
          , a = 6e4;
        if (i >= r) {
            var s = i / r;
            return s > 2 ? this.timeToString(e) : s > 1 ? "前天" : "昨天"
        }
        return i >= o ? Math.floor(i / o) + "小时前" : i >= a ? Math.floor(i / a) + "分钟前" : "最新"
    },
    strToTime: function(t) {
        try {
            return Date.parse(t.replace(/-/g, "/"))
        } catch (e) {
            return console.error(e),
            !1
        }
    },
    timeToString: function(t, e) {
        return this.dateToString(this.timeToDate(t), e)
    },
    timeToDate: function(t) {
        return new Date(t)
    },
    dateToString: function(t, e) {
        var n = (t.getFullYear().toString(),
        (t.getMonth() + 1).toString())
          , i = t.getDate().toString()
          , r = t.getHours().toString()
          , o = t.getMinutes().toString();
        n = n.length > 1 ? n : "0" + n,
        i = i.length > 1 ? i : "0" + i,
        r = r.length > 1 ? r : "0" + r,
        o = o.length > 1 ? o : "0" + o;
        var a = n + "-" + i + " " + r + ":" + o;
        return e && (a = a.replace(/-/g, e)),
        a
    },
    msToTimestr: function(t, e) {
        var n = t ? Number(t) / 1e3 : 0;
        return GLOBAL.Util.secondsToTimestr(n, e)
    },
    secondsToTimestr: function(t, e) {
        var n, i, r;
        if (!(null == t || t < 0))
            return t = Math.ceil(t),
            n = t / 3600 | 0,
            t = parseInt(t) - 3600 * n,
            parseInt(n) < 10 && (n = "0" + n),
            i = t / 60 | 0,
            parseInt(i) < 10 && (i = "0" + i),
            r = parseInt(t) - 60 * i,
            r < 10 && (r = "0" + r),
            e ? n + ":" + i + ":" + r : i + ":" + r
    },
    getScrollTop: function() {
        var t = 0
          , e = 0
          , n = 0;
        try {
            document.body && (e = document.body.scrollTop),
            document.documentElement && (n = document.documentElement.scrollTop)
        } catch (i) {}
        return t = e - n > 0 ? e : n
    },
    getScrollHeight: function() {
        var t = 0
          , e = 0
          , n = 0;
        try {
            document.body && (e = document.body.scrollHeight),
            document.documentElement && (n = document.documentElement.scrollHeight)
        } catch (i) {}
        return t = e - n > 0 ? e : n
    },
    getClientHeight: function() {
        return document.body.clientHeight && document.documentElement.clientHeight ? document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight : document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight
    },
    getWindowHeight: function() {
        var t = 0;
        return t = "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
    },
    getBrowserType: function() {
        var t = navigator.userAgent.toLowerCase()
          , e = "";
        return t.indexOf("msie") > 0 && (e = "IE"),
        t.indexOf("firefox") > 0 && (e = "firefox"),
        t.indexOf("chrome") > 0 && t.indexOf("mb2345browser") < 0 && t.indexOf("360 aphone browser") < 0 && (e = "chrome"),
        (t.indexOf("360 aphone browser") > 0 || t.indexOf("qhbrowser") > 0) && (e = "360"),
        t.indexOf("ucbrowser") > 0 && (e = "UC"),
        t.indexOf("micromessenger") > 0 && (e = "WeChat"),
        (t.indexOf("mqqbrowser") > 0 || t.indexOf("qq") > 0) && t.indexOf("micromessenger") < 0 && (e = "QQ"),
        t.indexOf("miuibrowser") > 0 && (e = "MIUI"),
        t.indexOf("mb2345browser") > 0 && (e = "2345"),
        t.indexOf("sogoumobilebrowser") > 0 && (e = "sogou"),
        t.indexOf("liebaofast") > 0 && (e = "liebao"),
        t.indexOf("safari") > 0 && t.indexOf("chrome") < 0 && t.indexOf("ucbrowser") < 0 && t.indexOf("micromessenger") < 0 && t.indexOf("mqqbrowser") < 0 && t.indexOf("miuibrowser") < 0 && t.indexOf("mb2345browser") < 0 && t.indexOf("sogoumobilebrowser") < 0 && t.indexOf("liebaofast") < 0 && t.indexOf("qhbrowser") < 0 && (e = "safari"),
        e
    },
    getOsType: function() {
        var t = navigator.userAgent.toLowerCase()
          , e = "";
        if (/android/i.test(navigator.userAgent)) {
            var n = t.indexOf("android");
            version = t.substr(n + 8, 3),
            e = "Android " + version
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            var n = t.indexOf("os");
            version = t.substr(n + 3, 3),
            e = "iOS " + version
        }
        return !/Linux/i.test(navigator.userAgent) || /android/i.test(navigator.userAgent) || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || (e = "Linux"),
        /windows|win32/i.test(navigator.userAgent) && (e = "windows32"),
        /windows|win32/i.test(navigator.userAgent) && (e = "windows64"),
        e
    },
    getPixel: function() {
        var t = window.screen.width
          , e = window.screen.height;
        return {
            w: t,
            h: e
        }
    },
    getBytes: function(t) {
        var e = 0
          , n = t.length;
        if (t) {
            for (var i = 0; i < n; i++)
                t.charCodeAt(i) > 255 ? e += 2 : e++;
            return e
        }
        return 0
    },
    getReferrer: function() {
        var t = "";
        try {
            t = window.top.document.referrer
        } catch (e) {
            if (window.parent)
                try {
                    t = window.parent.document.referrer
                } catch (n) {
                    t = ""
                }
        }
        return "" === t && (t = document.referrer),
        t
    },
    getUrlNoParams: function() {
        var t = window.location.href
          , e = 0;
        return t.indexOf("?") >= 0 ? (e = t.indexOf("?"),
        t.substring(0, e)) : t.indexOf("#") >= 0 ? (e = t.indexOf("#"),
        t.substring(0, e)) : t
    },
    getUrl: function() {
        var t = window.location.href
          , e = 0;
        return t.indexOf("?") >= 0 ? (e = t.indexOf("?"),
        t.substring(0, e)) : t.indexOf("#") >= 0 ? (e = t.indexOf("#"),
        t.substring(0, e)) : t
    },
    setIframe: function(t) {
        var t = t || window.frames.iframe || document.getElementById("iframe") || null ;
        if (t) {
            var e = document.frames ? document.frames.iframe.document : t.contentDocument;
            null != t && null != e && (t.height = e.body.scrollHeight,
            t.width = e.body.scrollWidth)
        }
    },
    setIframeContent: function(t) {
        var t = t || window.frames.iframe || document.getElementById("iframe") || null ;
        if (t) {
            var e = document.frames ? document.frames.iframe.document : t.contentDocument;
            null != t && null != e && (e.documentElement.width = t.parentNode.offsetWidth,
            e.documentElement.height = t.parentNode.offsetHeight,
            e.body.setAttribute("width", t.parentNode.offsetWidth),
            e.body.setAttribute("height", t.parentNode.offsetHeight))
        }
    },
    createStyle: function(t, e, n) {
        if (t) {
            var i = document.getElementsByTagName("head")[0]
              , r = document.createElement("style");
            r.innerHTML = t,
            n ? n.appendChild(r) : i.appendChild(r),
            e && e()
        }
    }
},
GLOBAL.Js = {
    trim: function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    },
    isNumber: function(t) {
        return !isNaN(t)
    },
    isString: function(t) {
        return "string" == typeof t
    },
    isBoolean: function(t) {
        return "boolean" == typeof t
    },
    isFunction: function(t) {
        return "function" == typeof t
    },
    isNull: function(t) {
        return null === t
    },
    isUndefined: function(t) {
        return "undefined" == typeof t
    },
    isEmpty: function(t) {
        return /^\s*$/.test(t)
    },
    isArray: function(t) {
        return t instanceof Array
    }
},
GLOBAL.Cookie = {
    set: function(t, e, n) {
        var i = n ? 60 * Number(n) * 60 * 1e3 : 864e5
          , r = new Date;
        r.setTime(r.getTime() + i);
        var o = n ? "; expires=" + r.toUTCString() : ""
          , a = "; path=/";
        document.cookie = t + "=" + encodeURI(e) + o + a
    },
    get: function(t) {
        var e = "; " + document.cookie + "; "
          , n = e.indexOf("; " + t + "=");
        if (n !== -1) {
            var i = e.substring(n + t.length + 3, e.length);
            return decodeURI(i.substring(0, i.indexOf("; ")))
        }
        return null
    },
    del: function(t) {
        var e = new Date((new Date).getTime() - 1)
          , n = this.read(t);
        null !== n && (document.cookie = t + "=" + n + "; expires=" + e.toUTCString + "; path=/")
    }
},
GLOBAL.Array = {
    difference: function(t, e) {
        try {
            var n = []
              , i = 0
              , r = t.length;
            for (i = 0; i < r; i++)
                e.contains(t[i]) || n.push(t[i]);
            return n
        } catch (o) {
            return console.error(o),
            t
        }
    }
},
GLOBAL.Os = function() {
    for (var t = navigator.userAgent, e = new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"), n = !1, i = 0; i < e.length; i++)
        if (t.indexOf(e[i]) > -1) {
            n = !0;
            break
        }
    return {
        mobile: n,
        ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
        iphone: t.indexOf("iPhone") > -1,
        ipad: t.indexOf("iPad") > -1,
        webapp: t.indexOf("Safari") === -1
    }
}(),
GLOBAL.Browser = function() {
    var t = navigator.userAgent
      , e = GLOBAL.Os.mobile;
    return e ? {
        wechat: t.indexOf("MicroMessenger") > -1,
        weibo: t.toLowerCase().indexOf("weibo") > -1,
        qq: t.indexOf("QQ/") > -1,
        qqbrowser: t.indexOf("MQQBrowser") > -1
    } : {}
}();
