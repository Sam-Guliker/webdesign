/*! (c) Andrea Giammarchi (ISC) */var hyperHTML = function (e) { "use strict"; var t = document.defaultView, r = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i, l = "ownerSVGElement", c = "http://www.w3.org/2000/svg", s = "connected", f = "dis" + s, d = /^style|textarea$/i, b = "_hyper: " + (Math.random() * new Date | 0) + ";", h = "\x3c!--" + b + "--\x3e", v = t.Event; try { new v("Event") } catch (e) { v = function (e) { var t = document.createEvent("Event"); return t.initEvent(e, !1, !1), t } } var n, i = t.Map || function () { var n = [], r = []; return { get: function (e) { return r[n.indexOf(e)] }, set: function (e, t) { r[n.push(e) - 1] = t } } }, o = 0, p = t.WeakMap || function () { var n = b + o++; return { get: function (e) { return e[n] }, set: function (e, t) { Object.defineProperty(e, n, { configurable: !0, value: t }) } } }, a = t.WeakSet || function () { var t = new p; return { add: function (e) { t.set(e, !0) }, has: function (e) { return !0 === t.get(e) } } }, m = Array.isArray || (n = {}.toString, function (e) { return "[object Array]" === n.call(e) }), g = b.trim || function () { return this.replace(/^\s+|\s+$/g, "") }; function w() { return this } var u = function (e, t) { var n = "_" + e + "$"; return { get: function () { return this[n] || (this[e] = t.call(this, e)) }, set: function (e) { Object.defineProperty(this, n, { configurable: !0, value: e }) } } }, y = {}, N = [], x = y.hasOwnProperty, E = 0, C = function (e, t) { e in y || (E = N.push(e)), y[e] = t }, j = function (e, t) { for (var n = 0; n < E; n++) { var r = N[n]; if (x.call(e, r)) return y[r](e[r], t) } }, A = function (e, t) { return T(e).createElement(t) }, T = function (e) { return e.ownerDocument || e }, S = function (e) { return T(e).createDocumentFragment() }, L = function (e, t) { return T(e).createTextNode(t) }, O = " \\f\\n\\r\\t", k = "[^ " + O + "\\/>\"'=]+", M = "[ " + O + "]+" + k, D = "<([A-Za-z]+[A-Za-z0-9:_-]*)((?:", $ = "(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|" + k + "))?)", P = new RegExp(D + M + $ + "+)([ " + O + "]*/?>)", "g"), B = new RegExp(D + M + $ + "*)([ " + O + "]*/>)", "g"), R = S(document), H = "append" in R, _ = "content" in A(document, "template"); R.appendChild(L(R, "g")), R.appendChild(L(R, "")); var z = 1 === R.cloneNode(!0).childNodes.length, F = "importNode" in document, Z = H ? function (e, t) { e.append.apply(e, t) } : function (e, t) { for (var n = t.length, r = 0; r < n; r++)e.appendChild(t[r]) }, I = new RegExp("(" + M + "=)(['\"]?)" + h + "\\2", "gi"), V = function (e, t, n, r) { return "<" + t + n.replace(I, W) + r }, W = function (e, t, n) { return t + (n || '"') + b + (n || '"') }, q = function (e, t) { return (l in e ? Y : X)(e, t.replace(P, V)) }, G = z ? function (e) { for (var t = e.cloneNode(), n = e.childNodes || [], r = n.length, i = 0; i < r; i++)t.appendChild(G(n[i])); return t } : function (e) { return e.cloneNode(!0) }, J = F ? function (e, t) { return e.importNode(t, !0) } : function (e, t) { return G(t) }, K = [].slice, Q = function (e) { return U(e) }, U = function (e) { if (e.propertyIsEnumerable("raw") || /Firefox\/(\d+)/.test((t.navigator || {}).userAgent) && parseFloat(RegExp.$1) < 55) { var n = {}; U = function (e) { var t = "^" + e.join("^"); return n[t] || (n[t] = e) } } else U = function (e) { return e }; return U(e) }, X = _ ? function (e, t) { var n = A(e, "template"); return n.innerHTML = t, n.content } : function (e, t) { var n = A(e, "template"), r = S(e); if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)) { var i = RegExp.$1; n.innerHTML = "<table>" + t + "</table>", Z(r, K.call(n.querySelectorAll(i))) } else n.innerHTML = t, Z(r, K.call(n.childNodes)); return r }, Y = _ ? function (e, t) { var n = S(e), r = T(e).createElementNS(c, "svg"); return r.innerHTML = t, Z(n, K.call(r.childNodes)), n } : function (e, t) { var n = S(e), r = A(e, "div"); return r.innerHTML = '<svg xmlns="' + c + '">' + t + "</svg>", Z(n, K.call(r.firstChild.childNodes)), n }; function ee(e) { this.childNodes = e, this.length = e.length, this.first = e[0], this.last = e[this.length - 1] } ee.prototype.insert = function () { var e = S(this.first); return Z(e, this.childNodes), e }, ee.prototype.remove = function () { var e = this.first, t = this.last; if (2 === this.length) t.parentNode.removeChild(t); else { var n = T(e).createRange(); n.setStartBefore(this.childNodes[1]), n.setEndAfter(t), n.deleteContents() } return e }; var te = function (e, t, n) { e.unshift(e.indexOf.call(t.childNodes, n)) }, ne = function (e, t, n) { return { type: e, name: n, node: t, path: function (e) { var t = [], n = void 0; switch (e.nodeType) { case 1: case 11: n = e; break; case 8: n = e.parentNode, te(t, n, e); break; default: n = e.ownerElement }for (e = n; n = n.parentNode; e = n)te(t, n, e); return t }(t) } }, re = function (e, t) { for (var n = t.length, r = 0; r < n; r++)e = e.childNodes[t[r]]; return e }, ie = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, oe = function (o, a) { var u = void 0, l = void 0; return function (e) { switch (typeof e) { case "object": if (e) { if ("object" === u) { if (!a && l !== e) for (var t in l) t in e || (o[t] = "") } else a ? o.value = "" : o.cssText = ""; var n = a ? {} : o; for (var r in e) { var i = e[r]; n[r] = "number" != typeof i || ie.test(r) ? i : i + "px" } u = "object", a ? o.value = le(l = n) : l = e; break } default: l != e && (u = "string", l = e, a ? o.value = e || "" : o.cssText = e || "") } } }, ae = /([^A-Z])([A-Z]+)/g, ue = function (e, t, n) { return t + "-" + n.toLowerCase() }, le = function (e) { var t = []; for (var n in e) t.push(n.replace(ae, ue), ":", e[n], ";"); return t.join("") }, ce = function (e, t) { return e == t }, se = function (e) { return e }, fe = function (e, t, n, r) { if (null == r) t.removeChild(e(n, -1)); else { var i = t.ownerDocument.createRange(); i.setStartBefore(e(n, -1)), i.setEndAfter(e(r, -1)), i.deleteContents() } }, de = function (e, t, n, r) { r || (r = {}); for (var i = r.compare || ce, o = r.node || se, a = null == r.before ? null : o(r.before, 0), u = 0, l = 0, c = t.length - 1, s = t[0], f = t[c], d = n.length - 1, h = n[0], v = n[d]; u <= c && l <= d;)if (null == s) s = t[++u]; else if (null == f) f = t[--c]; else if (null == h) h = n[++l]; else if (null == v) v = n[--d]; else if (i(s, h)) s = t[++u], h = n[++l]; else if (i(f, v)) f = t[--c], v = n[--d]; else if (i(s, v)) e.insertBefore(o(s, 1), o(f, -0).nextSibling), s = t[++u], v = n[--d]; else if (i(f, h)) e.insertBefore(o(f, 1), o(s, 0)), f = t[--c], h = n[++l]; else { var p = t.indexOf(h); if (p < 0) e.insertBefore(o(h, 1), o(s, 0)), h = n[++l]; else { for (var m = p, g = l; m <= c && g <= d && t[m] === n[g];)m++ , g++; if (1 < m - p)--p === u ? e.removeChild(o(s, -1)) : fe(o, e, s, t[p]), l = g, s = t[u = m], h = n[g]; else { var b = t[p]; t[p] = null, e.insertBefore(o(b, 1), o(s, 0)), h = n[++l] } } } if (u <= c || l <= d) if (c < u) { var w = n[d + 1], y = null == w ? a : o(w, 0); if (l === d) e.insertBefore(o(n[l], 1), y); else { for (var N = e.ownerDocument.createDocumentFragment(); l <= d;)N.appendChild(o(n[l++], 1)); e.insertBefore(N, y) } } else null == t[u] && u++ , u === c ? e.removeChild(o(t[u], -1)) : fe(o, e, t[u], t[c]); return n }, he = new a; function ve() { } ve.prototype = Object.create(null); var pe = function (e) { return { html: e } }, me = function e(t, n) { return "ELEMENT_NODE" in t ? t : t.constructor === ee ? 1 / n < 0 ? n ? t.remove() : t.last : n ? t.insert() : t.first : e(t.render(), n) }, ge = function (e, t, n) { for (var r = new ve, i = e.attributes, o = K.call(i), a = [], u = o.length, l = 0; l < u; l++) { var c = o[l]; if (c.value === b) { var s = c.name; if (!(s in r)) { var f = n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, "$1"); r[s] = i[f] || i[f.toLowerCase()], t.push(ne("attr", r[s], f)) } a.push(c) } } for (var d = a.length, h = 0; h < d; h++) { var v = a[h]; /^id$/i.test(v.name) ? e.removeAttribute(v.name) : e.removeAttributeNode(a[h]) } var p = e.nodeName; if (/^script$/i.test(p)) { for (var m = document.createElement(p), g = 0; g < i.length; g++)m.setAttributeNode(i[g].cloneNode(!0)); m.textContent = e.textContent, e.parentNode.replaceChild(m, e) } }, be = function (e, t) { t(e.placeholder), "text" in e ? Promise.resolve(e.text).then(String).then(t) : "any" in e ? Promise.resolve(e.any).then(t) : "html" in e ? Promise.resolve(e.html).then(pe).then(t) : Promise.resolve(j(e, t)).then(t) }, we = function (e) { return null != e && "then" in e }, ye = function (r, i) { var o = { node: me, before: r }, a = !1, u = void 0; return function e(t) { switch (typeof t) { case "string": case "number": case "boolean": a ? u !== t && (u = t, i[0].textContent = t) : (a = !0, u = t, i = de(r.parentNode, i, [L(r, t)], o)); break; case "object": case "undefined": if (null == t) { a = !1, i = de(r.parentNode, i, [], o); break } default: if (a = !1, m(u = t)) if (0 === t.length) i.length && (i = de(r.parentNode, i, [], o)); else switch (typeof t[0]) { case "string": case "number": case "boolean": e({ html: t }); break; case "object": if (m(t[0]) && (t = t.concat.apply([], t)), we(t[0])) { Promise.all(t).then(e); break } default: i = de(r.parentNode, i, t, o) } else "ELEMENT_NODE" in (n = t) || n instanceof ee || n instanceof w ? i = de(r.parentNode, i, 11 === t.nodeType ? K.call(t.childNodes) : [t], o) : we(t) ? t.then(e) : "placeholder" in t ? be(t, e) : "text" in t ? e(String(t.text)) : "any" in t ? e(t.any) : "html" in t ? i = de(r.parentNode, i, K.call(q(r, [].concat(t.html).join("")).childNodes), o) : e("length" in t ? K.call(t) : j(t, e)) }var n } }, Ne = function (t, n, e) { var r = l in t, i = void 0; if ("style" === n) return function (e, t, n) { if (n) { var r = t.cloneNode(!0); return r.value = "", e.setAttributeNode(r), oe(r, n) } return oe(e.style, n) }(t, e, r); if (/^on/.test(n)) { var o = n.slice(2); return o === s || o === f ? (Ce && (Ce = !1, function () { var i = function (e, t) { for (var n = new v(t), r = e.length, i = 0; i < r; i++) { var o = e[i]; 1 === o.nodeType && a(o, n) } }, a = function e(t, n) { he.has(t) && t.dispatchEvent(n); for (var r = t.children || function (e) { for (var t = [], n = e.childNodes, r = n.length, i = 0; i < r; i++)1 === n[i].nodeType && t.push(n[i]); return t }(t), i = r.length, o = 0; o < i; o++)e(r[o], n) }; try { new MutationObserver(function (e) { for (var t = e.length, n = 0; n < t; n++) { var r = e[n]; i(r.removedNodes, f), i(r.addedNodes, s) } }).observe(document, { subtree: !0, childList: !0 }) } catch (e) { document.addEventListener("DOMNodeRemoved", function (e) { i([e.target], f) }, !1), document.addEventListener("DOMNodeInserted", function (e) { i([e.target], s) }, !1) } }()), he.add(t)) : n.toLowerCase() in t && (o = o.toLowerCase()), function (e) { i !== e && (i && t.removeEventListener(o, i, !1), (i = e) && t.addEventListener(o, e, !1)) } } if ("data" === n || !r && n in t) return function (e) { i !== e && (i = e, t[n] !== e && null == (t[n] = e) && t.removeAttribute(n)) }; var a = !1, u = e.cloneNode(!0); return function (e) { i !== e && (i = e, u.value !== e && (null == e ? (a && (a = !1, t.removeAttributeNode(u)), u.value = e) : (u.value = e, a || (a = !0, t.setAttributeNode(u))))) } }, xe = function (n) { var r = void 0; return function e(t) { r !== t && ("object" == typeof (r = t) && t ? we(t) ? t.then(e) : "placeholder" in t ? be(t, e) : e("text" in t ? String(t.text) : "any" in t ? t.any : "html" in t ? [].concat(t.html).join("") : "length" in t ? K.call(t).join("") : j(t, e)) : n.textContent = null == t ? "" : t) } }, Ee = { create: function (e, t) { for (var n = [], r = t.length, i = 0; i < r; i++) { var o = t[i], a = re(e, o.path); switch (o.type) { case "any": n.push(ye(a, [])); break; case "attr": n.push(Ne(a, o.name, o.node)); break; case "text": n.push(xe(a)), a.textContent = "" } } return n }, find: function e(t, n, r) { for (var i = t.childNodes, o = i.length, a = 0; a < o; a++) { var u = i[a]; switch (u.nodeType) { case 1: ge(u, n, r), e(u, n, r); break; case 8: u.textContent === b && (r.shift(), n.push(d.test(t.nodeName) ? ne("text", t) : ne("any", u))); break; case 3: d.test(t.nodeName) && g.call(u.textContent) === h && (r.shift(), n.push(ne("text", t))) } } } }, Ce = !0; var je = new p, Ae = function () { try { var e = new p, t = Object.freeze([]); if (e.set(t, !0), !e.get(t)) throw t; return e } catch (t) { return new i } }(); function Te(e) { var t = je.get(this); return t && t.template === Q(e) ? Se.apply(t.updates, arguments) : function (e) { e = Q(e); var t = Ae.get(e) || function (e) { var t = [], n = e.join(h).replace(De, $e), r = q(this, n); Ee.find(r, t, e.slice()); var i = { fragment: r, paths: t }; return Ae.set(e, i), i }.call(this, e), n = J(this.ownerDocument, t.fragment), r = Ee.create(n, t.paths); je.set(this, { template: e, updates: r }), Se.apply(r, arguments), this.textContent = "", this.appendChild(n) }.apply(this, arguments), this } function Se() { for (var e = arguments.length, t = 1; t < e; t++)this[t - 1](arguments[t]) } var Le, Oe, ke, Me, De = B, $e = function (e, t, n) { return r.test(t) ? e : "<" + t + n + "></" + t + ">" }, Pe = new p, Be = function (n) { var r = void 0, i = void 0, o = void 0, a = void 0, u = void 0; return function (e) { e = Q(e); var t = a !== e; return t && (a = e, o = S(document), i = "svg" === n ? document.createElementNS(c, "svg") : o, u = Te.bind(i)), u.apply(null, arguments), t && ("svg" === n && Z(o, K.call(i.childNodes)), r = He(o)), r } }, Re = function (e, t) { var n = t.indexOf(":"), r = Pe.get(e), i = t; return -1 < n && (i = t.slice(n + 1), t = t.slice(0, n) || "html"), r || Pe.set(e, r = {}), r[i] || (r[i] = Be(t)) }, He = function (e) { for (var t = e.childNodes, n = t.length, r = [], i = 0; i < n; i++) { var o = t[i]; 1 !== o.nodeType && 0 === g.call(o.textContent).length || r.push(o) } return 1 === r.length ? r[0] : new ee(r) }, _e = C; function ze(e) { return arguments.length < 2 ? null == e ? Be("html") : "string" == typeof e ? ze.wire(null, e) : "raw" in e ? Be("html")(e) : "nodeType" in e ? ze.bind(e) : Re(e, "html") : ("raw" in e ? Be("html") : ze.wire).apply(null, arguments) } return ze.Component = w, ze.bind = function (e) { return Te.bind(e) }, ze.define = _e, ze.diff = de, (ze.hyper = ze).wire = function (e, t) { return null == e ? Be(t || "html") : Re(e, t || "html") }, Le = Be, Oe = new p, ke = Object.create, Me = function (e, t) { var n = { w: null, p: null }; return t.set(e, n), n }, Object.defineProperties(w, { for: { configurable: !0, value: function (e, t) { return function (e, t, n, r) { var i, o, a, u = t.get(e) || Me(e, t); switch (typeof r) { case "object": case "function": var l = u.w || (u.w = new p); return l.get(r) || (i = l, o = r, a = new e(n), i.set(o, a), a); default: var c = u.p || (u.p = ke(null)); return c[r] || (c[r] = new e(n)) } }(this, Oe.get(e) || (n = e, r = new i, Oe.set(n, r), r), e, null == t ? "default" : t); var n, r } } }), Object.defineProperties(w.prototype, { handleEvent: { value: function (e) { var t = e.currentTarget; this["getAttribute" in t && t.getAttribute("data-call") || "on" + e.type](e) } }, html: u("html", Le), svg: u("svg", Le), state: u("state", function () { return this.defaultState }), defaultState: { get: function () { return {} } }, setState: { value: function (e, t) { var n = this.state, r = "function" == typeof e ? e.call(this, n) : e; for (var i in r) n[i] = r[i]; return !1 !== t && this.render(), this } } }), ze }(window);/*! (c) Andrea Giammarchi (ISC) */var hyperHTML = function (e) { "use strict"; var t = document.defaultView, r = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i, l = "ownerSVGElement", c = "http://www.w3.org/2000/svg", s = "connected", f = "dis" + s, d = /^style|textarea$/i, b = "_hyper: " + (Math.random() * new Date | 0) + ";", h = "\x3c!--" + b + "--\x3e", v = t.Event; try { new v("Event") } catch (e) { v = function (e) { var t = document.createEvent("Event"); return t.initEvent(e, !1, !1), t } } var n, i = t.Map || function () { var n = [], r = []; return { get: function (e) { return r[n.indexOf(e)] }, set: function (e, t) { r[n.push(e) - 1] = t } } }, o = 0, p = t.WeakMap || function () { var n = b + o++; return { get: function (e) { return e[n] }, set: function (e, t) { Object.defineProperty(e, n, { configurable: !0, value: t }) } } }, a = t.WeakSet || function () { var t = new p; return { add: function (e) { t.set(e, !0) }, has: function (e) { return !0 === t.get(e) } } }, m = Array.isArray || (n = {}.toString, function (e) { return "[object Array]" === n.call(e) }), g = b.trim || function () { return this.replace(/^\s+|\s+$/g, "") }; function w() { return this } var u = function (e, t) { var n = "_" + e + "$"; return { get: function () { return this[n] || (this[e] = t.call(this, e)) }, set: function (e) { Object.defineProperty(this, n, { configurable: !0, value: e }) } } }, y = {}, N = [], x = y.hasOwnProperty, E = 0, C = function (e, t) { e in y || (E = N.push(e)), y[e] = t }, j = function (e, t) { for (var n = 0; n < E; n++) { var r = N[n]; if (x.call(e, r)) return y[r](e[r], t) } }, A = function (e, t) { return T(e).createElement(t) }, T = function (e) { return e.ownerDocument || e }, S = function (e) { return T(e).createDocumentFragment() }, L = function (e, t) { return T(e).createTextNode(t) }, O = " \\f\\n\\r\\t", k = "[^ " + O + "\\/>\"'=]+", M = "[ " + O + "]+" + k, D = "<([A-Za-z]+[A-Za-z0-9:_-]*)((?:", $ = "(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|" + k + "))?)", P = new RegExp(D + M + $ + "+)([ " + O + "]*/?>)", "g"), B = new RegExp(D + M + $ + "*)([ " + O + "]*/>)", "g"), R = S(document), H = "append" in R, _ = "content" in A(document, "template"); R.appendChild(L(R, "g")), R.appendChild(L(R, "")); var z = 1 === R.cloneNode(!0).childNodes.length, F = "importNode" in document, Z = H ? function (e, t) { e.append.apply(e, t) } : function (e, t) { for (var n = t.length, r = 0; r < n; r++)e.appendChild(t[r]) }, I = new RegExp("(" + M + "=)(['\"]?)" + h + "\\2", "gi"), V = function (e, t, n, r) { return "<" + t + n.replace(I, W) + r }, W = function (e, t, n) { return t + (n || '"') + b + (n || '"') }, q = function (e, t) { return (l in e ? Y : X)(e, t.replace(P, V)) }, G = z ? function (e) { for (var t = e.cloneNode(), n = e.childNodes || [], r = n.length, i = 0; i < r; i++)t.appendChild(G(n[i])); return t } : function (e) { return e.cloneNode(!0) }, J = F ? function (e, t) { return e.importNode(t, !0) } : function (e, t) { return G(t) }, K = [].slice, Q = function (e) { return U(e) }, U = function (e) { if (e.propertyIsEnumerable("raw") || /Firefox\/(\d+)/.test((t.navigator || {}).userAgent) && parseFloat(RegExp.$1) < 55) { var n = {}; U = function (e) { var t = "^" + e.join("^"); return n[t] || (n[t] = e) } } else U = function (e) { return e }; return U(e) }, X = _ ? function (e, t) { var n = A(e, "template"); return n.innerHTML = t, n.content } : function (e, t) { var n = A(e, "template"), r = S(e); if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)) { var i = RegExp.$1; n.innerHTML = "<table>" + t + "</table>", Z(r, K.call(n.querySelectorAll(i))) } else n.innerHTML = t, Z(r, K.call(n.childNodes)); return r }, Y = _ ? function (e, t) { var n = S(e), r = T(e).createElementNS(c, "svg"); return r.innerHTML = t, Z(n, K.call(r.childNodes)), n } : function (e, t) { var n = S(e), r = A(e, "div"); return r.innerHTML = '<svg xmlns="' + c + '">' + t + "</svg>", Z(n, K.call(r.firstChild.childNodes)), n }; function ee(e) { this.childNodes = e, this.length = e.length, this.first = e[0], this.last = e[this.length - 1] } ee.prototype.insert = function () { var e = S(this.first); return Z(e, this.childNodes), e }, ee.prototype.remove = function () { var e = this.first, t = this.last; if (2 === this.length) t.parentNode.removeChild(t); else { var n = T(e).createRange(); n.setStartBefore(this.childNodes[1]), n.setEndAfter(t), n.deleteContents() } return e }; var te = function (e, t, n) { e.unshift(e.indexOf.call(t.childNodes, n)) }, ne = function (e, t, n) { return { type: e, name: n, node: t, path: function (e) { var t = [], n = void 0; switch (e.nodeType) { case 1: case 11: n = e; break; case 8: n = e.parentNode, te(t, n, e); break; default: n = e.ownerElement }for (e = n; n = n.parentNode; e = n)te(t, n, e); return t }(t) } }, re = function (e, t) { for (var n = t.length, r = 0; r < n; r++)e = e.childNodes[t[r]]; return e }, ie = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, oe = function (o, a) { var u = void 0, l = void 0; return function (e) { switch (typeof e) { case "object": if (e) { if ("object" === u) { if (!a && l !== e) for (var t in l) t in e || (o[t] = "") } else a ? o.value = "" : o.cssText = ""; var n = a ? {} : o; for (var r in e) { var i = e[r]; n[r] = "number" != typeof i || ie.test(r) ? i : i + "px" } u = "object", a ? o.value = le(l = n) : l = e; break } default: l != e && (u = "string", l = e, a ? o.value = e || "" : o.cssText = e || "") } } }, ae = /([^A-Z])([A-Z]+)/g, ue = function (e, t, n) { return t + "-" + n.toLowerCase() }, le = function (e) { var t = []; for (var n in e) t.push(n.replace(ae, ue), ":", e[n], ";"); return t.join("") }, ce = function (e, t) { return e == t }, se = function (e) { return e }, fe = function (e, t, n, r) { if (null == r) t.removeChild(e(n, -1)); else { var i = t.ownerDocument.createRange(); i.setStartBefore(e(n, -1)), i.setEndAfter(e(r, -1)), i.deleteContents() } }, de = function (e, t, n, r) { r || (r = {}); for (var i = r.compare || ce, o = r.node || se, a = null == r.before ? null : o(r.before, 0), u = 0, l = 0, c = t.length - 1, s = t[0], f = t[c], d = n.length - 1, h = n[0], v = n[d]; u <= c && l <= d;)if (null == s) s = t[++u]; else if (null == f) f = t[--c]; else if (null == h) h = n[++l]; else if (null == v) v = n[--d]; else if (i(s, h)) s = t[++u], h = n[++l]; else if (i(f, v)) f = t[--c], v = n[--d]; else if (i(s, v)) e.insertBefore(o(s, 1), o(f, -0).nextSibling), s = t[++u], v = n[--d]; else if (i(f, h)) e.insertBefore(o(f, 1), o(s, 0)), f = t[--c], h = n[++l]; else { var p = t.indexOf(h); if (p < 0) e.insertBefore(o(h, 1), o(s, 0)), h = n[++l]; else { for (var m = p, g = l; m <= c && g <= d && t[m] === n[g];)m++ , g++; if (1 < m - p)--p === u ? e.removeChild(o(s, -1)) : fe(o, e, s, t[p]), l = g, s = t[u = m], h = n[g]; else { var b = t[p]; t[p] = null, e.insertBefore(o(b, 1), o(s, 0)), h = n[++l] } } } if (u <= c || l <= d) if (c < u) { var w = n[d + 1], y = null == w ? a : o(w, 0); if (l === d) e.insertBefore(o(n[l], 1), y); else { for (var N = e.ownerDocument.createDocumentFragment(); l <= d;)N.appendChild(o(n[l++], 1)); e.insertBefore(N, y) } } else null == t[u] && u++ , u === c ? e.removeChild(o(t[u], -1)) : fe(o, e, t[u], t[c]); return n }, he = new a; function ve() { } ve.prototype = Object.create(null); var pe = function (e) { return { html: e } }, me = function e(t, n) { return "ELEMENT_NODE" in t ? t : t.constructor === ee ? 1 / n < 0 ? n ? t.remove() : t.last : n ? t.insert() : t.first : e(t.render(), n) }, ge = function (e, t, n) { for (var r = new ve, i = e.attributes, o = K.call(i), a = [], u = o.length, l = 0; l < u; l++) { var c = o[l]; if (c.value === b) { var s = c.name; if (!(s in r)) { var f = n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, "$1"); r[s] = i[f] || i[f.toLowerCase()], t.push(ne("attr", r[s], f)) } a.push(c) } } for (var d = a.length, h = 0; h < d; h++) { var v = a[h]; /^id$/i.test(v.name) ? e.removeAttribute(v.name) : e.removeAttributeNode(a[h]) } var p = e.nodeName; if (/^script$/i.test(p)) { for (var m = document.createElement(p), g = 0; g < i.length; g++)m.setAttributeNode(i[g].cloneNode(!0)); m.textContent = e.textContent, e.parentNode.replaceChild(m, e) } }, be = function (e, t) { t(e.placeholder), "text" in e ? Promise.resolve(e.text).then(String).then(t) : "any" in e ? Promise.resolve(e.any).then(t) : "html" in e ? Promise.resolve(e.html).then(pe).then(t) : Promise.resolve(j(e, t)).then(t) }, we = function (e) { return null != e && "then" in e }, ye = function (r, i) { var o = { node: me, before: r }, a = !1, u = void 0; return function e(t) { switch (typeof t) { case "string": case "number": case "boolean": a ? u !== t && (u = t, i[0].textContent = t) : (a = !0, u = t, i = de(r.parentNode, i, [L(r, t)], o)); break; case "object": case "undefined": if (null == t) { a = !1, i = de(r.parentNode, i, [], o); break } default: if (a = !1, m(u = t)) if (0 === t.length) i.length && (i = de(r.parentNode, i, [], o)); else switch (typeof t[0]) { case "string": case "number": case "boolean": e({ html: t }); break; case "object": if (m(t[0]) && (t = t.concat.apply([], t)), we(t[0])) { Promise.all(t).then(e); break } default: i = de(r.parentNode, i, t, o) } else "ELEMENT_NODE" in (n = t) || n instanceof ee || n instanceof w ? i = de(r.parentNode, i, 11 === t.nodeType ? K.call(t.childNodes) : [t], o) : we(t) ? t.then(e) : "placeholder" in t ? be(t, e) : "text" in t ? e(String(t.text)) : "any" in t ? e(t.any) : "html" in t ? i = de(r.parentNode, i, K.call(q(r, [].concat(t.html).join("")).childNodes), o) : e("length" in t ? K.call(t) : j(t, e)) }var n } }, Ne = function (t, n, e) { var r = l in t, i = void 0; if ("style" === n) return function (e, t, n) { if (n) { var r = t.cloneNode(!0); return r.value = "", e.setAttributeNode(r), oe(r, n) } return oe(e.style, n) }(t, e, r); if (/^on/.test(n)) { var o = n.slice(2); return o === s || o === f ? (Ce && (Ce = !1, function () { var i = function (e, t) { for (var n = new v(t), r = e.length, i = 0; i < r; i++) { var o = e[i]; 1 === o.nodeType && a(o, n) } }, a = function e(t, n) { he.has(t) && t.dispatchEvent(n); for (var r = t.children || function (e) { for (var t = [], n = e.childNodes, r = n.length, i = 0; i < r; i++)1 === n[i].nodeType && t.push(n[i]); return t }(t), i = r.length, o = 0; o < i; o++)e(r[o], n) }; try { new MutationObserver(function (e) { for (var t = e.length, n = 0; n < t; n++) { var r = e[n]; i(r.removedNodes, f), i(r.addedNodes, s) } }).observe(document, { subtree: !0, childList: !0 }) } catch (e) { document.addEventListener("DOMNodeRemoved", function (e) { i([e.target], f) }, !1), document.addEventListener("DOMNodeInserted", function (e) { i([e.target], s) }, !1) } }()), he.add(t)) : n.toLowerCase() in t && (o = o.toLowerCase()), function (e) { i !== e && (i && t.removeEventListener(o, i, !1), (i = e) && t.addEventListener(o, e, !1)) } } if ("data" === n || !r && n in t) return function (e) { i !== e && (i = e, t[n] !== e && null == (t[n] = e) && t.removeAttribute(n)) }; var a = !1, u = e.cloneNode(!0); return function (e) { i !== e && (i = e, u.value !== e && (null == e ? (a && (a = !1, t.removeAttributeNode(u)), u.value = e) : (u.value = e, a || (a = !0, t.setAttributeNode(u))))) } }, xe = function (n) { var r = void 0; return function e(t) { r !== t && ("object" == typeof (r = t) && t ? we(t) ? t.then(e) : "placeholder" in t ? be(t, e) : e("text" in t ? String(t.text) : "any" in t ? t.any : "html" in t ? [].concat(t.html).join("") : "length" in t ? K.call(t).join("") : j(t, e)) : n.textContent = null == t ? "" : t) } }, Ee = { create: function (e, t) { for (var n = [], r = t.length, i = 0; i < r; i++) { var o = t[i], a = re(e, o.path); switch (o.type) { case "any": n.push(ye(a, [])); break; case "attr": n.push(Ne(a, o.name, o.node)); break; case "text": n.push(xe(a)), a.textContent = "" } } return n }, find: function e(t, n, r) { for (var i = t.childNodes, o = i.length, a = 0; a < o; a++) { var u = i[a]; switch (u.nodeType) { case 1: ge(u, n, r), e(u, n, r); break; case 8: u.textContent === b && (r.shift(), n.push(d.test(t.nodeName) ? ne("text", t) : ne("any", u))); break; case 3: d.test(t.nodeName) && g.call(u.textContent) === h && (r.shift(), n.push(ne("text", t))) } } } }, Ce = !0; var je = new p, Ae = function () { try { var e = new p, t = Object.freeze([]); if (e.set(t, !0), !e.get(t)) throw t; return e } catch (t) { return new i } }(); function Te(e) { var t = je.get(this); return t && t.template === Q(e) ? Se.apply(t.updates, arguments) : function (e) { e = Q(e); var t = Ae.get(e) || function (e) { var t = [], n = e.join(h).replace(De, $e), r = q(this, n); Ee.find(r, t, e.slice()); var i = { fragment: r, paths: t }; return Ae.set(e, i), i }.call(this, e), n = J(this.ownerDocument, t.fragment), r = Ee.create(n, t.paths); je.set(this, { template: e, updates: r }), Se.apply(r, arguments), this.textContent = "", this.appendChild(n) }.apply(this, arguments), this } function Se() { for (var e = arguments.length, t = 1; t < e; t++)this[t - 1](arguments[t]) } var Le, Oe, ke, Me, De = B, $e = function (e, t, n) { return r.test(t) ? e : "<" + t + n + "></" + t + ">" }, Pe = new p, Be = function (n) { var r = void 0, i = void 0, o = void 0, a = void 0, u = void 0; return function (e) { e = Q(e); var t = a !== e; return t && (a = e, o = S(document), i = "svg" === n ? document.createElementNS(c, "svg") : o, u = Te.bind(i)), u.apply(null, arguments), t && ("svg" === n && Z(o, K.call(i.childNodes)), r = He(o)), r } }, Re = function (e, t) { var n = t.indexOf(":"), r = Pe.get(e), i = t; return -1 < n && (i = t.slice(n + 1), t = t.slice(0, n) || "html"), r || Pe.set(e, r = {}), r[i] || (r[i] = Be(t)) }, He = function (e) { for (var t = e.childNodes, n = t.length, r = [], i = 0; i < n; i++) { var o = t[i]; 1 !== o.nodeType && 0 === g.call(o.textContent).length || r.push(o) } return 1 === r.length ? r[0] : new ee(r) }, _e = C; function ze(e) { return arguments.length < 2 ? null == e ? Be("html") : "string" == typeof e ? ze.wire(null, e) : "raw" in e ? Be("html")(e) : "nodeType" in e ? ze.bind(e) : Re(e, "html") : ("raw" in e ? Be("html") : ze.wire).apply(null, arguments) } return ze.Component = w, ze.bind = function (e) { return Te.bind(e) }, ze.define = _e, ze.diff = de, (ze.hyper = ze).wire = function (e, t) { return null == e ? Be(t || "html") : Re(e, t || "html") }, Le = Be, Oe = new p, ke = Object.create, Me = function (e, t) { var n = { w: null, p: null }; return t.set(e, n), n }, Object.defineProperties(w, { for: { configurable: !0, value: function (e, t) { return function (e, t, n, r) { var i, o, a, u = t.get(e) || Me(e, t); switch (typeof r) { case "object": case "function": var l = u.w || (u.w = new p); return l.get(r) || (i = l, o = r, a = new e(n), i.set(o, a), a); default: var c = u.p || (u.p = ke(null)); return c[r] || (c[r] = new e(n)) } }(this, Oe.get(e) || (n = e, r = new i, Oe.set(n, r), r), e, null == t ? "default" : t); var n, r } } }), Object.defineProperties(w.prototype, { handleEvent: { value: function (e) { var t = e.currentTarget; this["getAttribute" in t && t.getAttribute("data-call") || "on" + e.type](e) } }, html: u("html", Le), svg: u("svg", Le), state: u("state", function () { return this.defaultState }), defaultState: { get: function () { return {} } }, setState: { value: function (e, t) { var n = this.state, r = "function" == typeof e ? e.call(this, n) : e; for (var i in r) n[i] = r[i]; return !1 !== t && this.render(), this } } }), ze }(window);