define(function (require, exports, module) {
    ! function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Netcall = t() : e.Netcall = t() }(window, function () { return function (e) { var t = {};

            function n(i) { if (t[i]) return t[i].exports; var r = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = e, n.c = t, n.d = function (e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: i }) }, n.r = function (e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 487) }([function (e, t, n) { "use strict"; var i, r = n(9),
                o = (i = r) && i.__esModule ? i : { default: i }; var a = n(73),
                s = n(67);
            n(91); var c, u, l = n(11),
                d = l.getGlobal(),
                f = /\s+/;
            l.deduplicate = function (e) { var t = []; return e.forEach(function (e) {-1 === t.indexOf(e) && t.push(e) }), t }, l.capFirstLetter = function (e) { return e ? (e = "" + e).slice(0, 1).toUpperCase() + e.slice(1) : "" }, l.guid = (c = function () { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }, function () { return c() + c() + c() + c() + c() + c() + c() + c() }), l.extend = function (e, t, n) { for (var i in t) void 0 !== e[i] && !0 !== n || (e[i] = t[i]) }, l.filterObj = function (e, t) { var n = {}; return l.isString(t) && (t = t.split(f)), t.forEach(function (t) { e.hasOwnProperty(t) && (n[t] = e[t]) }), n }, l.copy = function (e, t) { return t = t || {}, e ? (Object.keys(e).forEach(function (n) { l.exist(e[n]) && (t[n] = e[n]) }), t) : t }, l.copyWithNull = function (e, t) { return t = t || {}, e ? (Object.keys(e).forEach(function (n) {
                    (l.exist(e[n]) || l.isnull(e[n])) && (t[n] = e[n]) }), t) : t }, l.findObjIndexInArray = function (e, t) { e = e || []; var n = t.keyPath || "id",
                    i = -1; return e.some(function (e, r) { if (s(e, n) === t.value) return i = r, !0 }), i }, l.findObjInArray = function (e, t) { var n = l.findObjIndexInArray(e, t); return -1 === n ? null : e[n] }, l.mergeObjArray = function () { var e = [],
                    t = [].slice.call(arguments, 0, -1),
                    n = arguments[arguments.length - 1];
                l.isArray(n) && (t.push(n), n = {}); var i, r = n.keyPath = n.keyPath || "id"; for (n.sortPath = n.sortPath || r; !e.length && t.length;) e = (e = t.shift() || []).slice(0); return t.forEach(function (t) { t && t.forEach(function (t) {-1 !== (i = l.findObjIndexInArray(e, { keyPath: r, value: s(t, r) })) ? e[i] = l.merge({}, e[i], t) : e.push(t) }) }), n.notSort || (e = l.sortObjArray(e, n)), e }, l.cutObjArray = function (e) { var t = e.slice(0),
                    n = arguments.length,
                    i = [].slice.call(arguments, 1, n - 1),
                    r = arguments[n - 1];
                l.isObject(r) || (i.push(r), r = {}); var o, a = r.keyPath = r.keyPath || "id"; return i.forEach(function (e) { l.isArray(e) || (e = [e]), e.forEach(function (e) { e && (r.value = s(e, a), -1 !== (o = l.findObjIndexInArray(t, r)) && t.splice(o, 1)) }) }), t }, l.sortObjArray = function (e, t) { var n = (t = t || {}).sortPath || "id";
                a.insensitive = !!t.insensitive; var i, r, o, c = !!t.desc; return o = l.isFunction(t.compare) ? t.compare : function (e, t) { return i = s(e, n), r = s(t, n), c ? a(r, i) : a(i, r) }, e.sort(o) }, l.emptyFunc = function () {}, l.isEmptyFunc = function (e) { return e === l.emptyFunc }, l.notEmptyFunc = function (e) { return e !== l.emptyFunc }, l.splice = function (e, t, n) { return [].splice.call(e, t, n) }, l.reshape2d = function (e, t) { if (Array.isArray(e)) { l.verifyParamType("type", t, "number", "util::reshape2d"); var n = e.length; if (n <= t) return [e]; for (var i = Math.ceil(n / t), r = [], o = 0; o < i; o++) r.push(e.slice(o * t, (o + 1) * t)); return r } return e }, l.flatten2d = function (e) { if (Array.isArray(e)) { var t = []; return e.forEach(function (e) { t = t.concat(e) }), t } return e }, l.dropArrayDuplicates = function (e) { if (Array.isArray(e)) { for (var t = {}, n = []; e.length > 0;) { t[e.shift()] = !0 } for (var i in t) !0 === t[i] && n.push(i); return n } return e }, l.onError = function (e) { throw new function (e) { "object" === (void 0 === e ? "undefined" : (0, o.default)(e)) ? (this.callFunc = e.callFunc || null, this.message = e.message || "UNKNOW ERROR") : this.message = e, this.time = new Date, this.timetag = +this.time }(e) }, l.verifyParamPresent = function (e, t, n, i) { n = n || ""; var r = !1; switch (l.typeOf(t)) {
                    case "undefined":
                    case "null":
                        r = !0; break;
                    case "string":
                        "" === t && (r = !0); break;
                    case "StrStrMap":
                    case "object":
                        Object.keys(t).length || (r = !0); break;
                    case "array":
                        t.length ? t.some(function (e) { if (l.notexist(e)) return r = !0, !0 }) : r = !0 }
                r && l.onParamAbsent(n + e, i) }, l.onParamAbsent = function (e, t) { l.onParamError("缺少参数 " + e + ", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined", t) }, l.verifyParamAbsent = function (e, t, n, i) { n = n || "", void 0 !== t && l.onParamPresent(n + e, i) }, l.onParamPresent = function (e, t) { l.onParamError("多余的参数 " + e, t) }, l.verifyParamType = function (e, t, n, i) { var r = l.typeOf(t).toLowerCase();
                l.isArray(n) || (n = [n]); var o = !0; switch (-1 === (n = n.map(function (e) { return e.toLowerCase() })).indexOf(r) && (o = !1), r) {
                    case "number":
                        isNaN(t) && (o = !1); break;
                    case "string":
                        "numeric or numeric string" === n.join("") && (o = !!/^[0-9]+$/.test(t)) }
                o || l.onParamInvalidType(e, n, "", i) }, l.onParamInvalidType = function (e, t, n, i) { n = n || "", t = l.isArray(t) ? (t = t.map(function (e) { return '"' + e + '"' })).join(", ") : '"' + t + '"', l.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]", i) }, l.verifyParamValid = function (e, t, n, i) { l.isArray(n) || (n = [n]), -1 === n.indexOf(t) && l.onParamInvalidValue(e, n, i) }, l.onParamInvalidValue = function (e, t, n) { l.isArray(t) || (t = [t]), t = t.map(function (e) { return '"' + e + '"' }), l.isArray(t) && (t = t.join(", ")), l.onParamError("参数 " + e + "值错误, 合法的值包括: [" + JSON.stringify(t) + "]", n) }, l.verifyParamMin = function (e, t, n, i) { t < n && l.onParamError("参数" + e + "的值不能小于" + n, i) }, l.verifyParamMax = function (e, t, n, i) { t > n && l.onParamError("参数" + e + "的值不能大于" + n, i) }, l.verifyArrayMax = function (e, t, n, i) { t.length > n && l.onParamError("参数" + e + "的长度不能大于" + n, i) }, l.verifyEmail = (u = /^\S+@\S+$/, function (e, t, n) { u.test(t) || l.onParamError("参数" + e + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符", n) }), l.verifyTel = function () { var e = /^[+\-()\d]+$/; return function (t, n, i) { e.test(n) || l.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字", i) } }(), l.verifyBirth = function () { var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/; return function (t, n, i) { e.test(n) || l.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"', i) } }(), l.onParamError = function (e, t) { l.onError({ message: e, callFunc: t }) }, l.verifyOptions = function (e, t, n, i, r) { if (e = e || {}, t && (l.isString(t) && (t = t.split(f)), l.isArray(t))) { "boolean" != typeof n && (r = n || null, n = !0, i = ""); var o = n ? l.verifyParamPresent : l.verifyParamAbsent;
                    t.forEach(function (t) { o.call(l, t, e[t], i, r) }) } return e }, l.verifyParamAtLeastPresentOne = function (e, t, n) { t && (l.isString(t) && (t = t.split(f)), l.isArray(t) && (t.some(function (t) { return l.exist(e[t]) }) || l.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个", n))) }, l.verifyParamPresentJustOne = function (e, t, n) { t && (l.isString(t) && (t = t.split(f)), l.isArray(t) && 1 !== t.reduce(function (t, n) { return l.exist(e[n]) && t++, t }, 0) && l.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个", n)) }, l.verifyBooleanWithDefault = function (e, t, n, i, r) { l.undef(n) && (n = !0), f.test(t) && (t = t.split(f)), l.isArray(t) ? t.forEach(function (t) { l.verifyBooleanWithDefault(e, t, n, i, r) }) : void 0 === e[t] ? e[t] = n : l.isBoolean(e[t]) || l.onParamInvalidType(t, "boolean", i, r) }, l.verifyFileInput = function (e, t) { return l.verifyParamPresent("fileInput", e, "", t), l.isString(e) && ((e = document.getElementById(e)) || l.onParamError("找不到要上传的文件对应的input, 请检查fileInput id " + e, t)), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || l.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:" + e.tagName + ", filetype:" + e.type, t), e }, l.verifyFileType = function (e, t) { l.verifyParamValid("type", e, l.validFileTypes, t) }, l.verifyCallback = function (e, t, n) { f.test(t) && (t = t.split(f)), l.isArray(t) ? t.forEach(function (t) { l.verifyCallback(e, t, n) }) : e[t] ? l.isFunction(e[t]) || l.onParamInvalidType(t, "function", "", n) : e[t] = l.emptyFunc }, l.verifyFileUploadCallback = function (e, t) { l.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel", t) }, l.validFileTypes = ["image", "audio", "video", "file"], l.validFileExts = { image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"], audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"], video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"] }, l.filterFiles = function (e, t) { var n, i, r = "file" === (t = t.toLowerCase()),
                    o = []; return [].forEach.call(e, function (e) { if (r) o.push(e);
                    else if (n = e.name.slice(e.name.lastIndexOf(".") + 1), (i = e.type.split("/"))[0] && i[1]) {
                        (i[0].toLowerCase() === t || -1 !== l.validFileExts[t].indexOf(n)) && o.push(e) } }), o }; var p, h, m = l.supportFormData = l.notundef(d.FormData);
            l.getFileName = function (e) { return e = l.verifyFileInput(e), m ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1) }, l.getFileInfo = (p = { ppt: 1, pptx: 2, pdf: 3 }, function (e) { var t = {}; if (!(e = l.verifyFileInput(e)).files) return t; var n = e.files[0]; return m && (t.name = n.name, t.size = n.size, t.type = n.name.match(/\.(\w+)$/), t.type = t.type && t.type[1].toLowerCase(), t.transcodeType = p[t.type] || 0), t }), l.sizeText = (h = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"], function (e) { var t, n = 0;
                do { t = (e = Math.floor(100 * e) / 100) + h[n], e /= 1024, n++ } while (e > 1); return t }), l.promises2cmds = function (e) { return e.map(function (e) { return e.cmd }) }, l.objs2accounts = function (e) { return e.map(function (e) { return e.account }) }, l.teams2ids = function (e) { return e.map(function (e) { return e.teamId }) }, l.objs2ids = function (e) { return e.map(function (e) { return e.id }) }, l.getMaxUpdateTime = function (e) { var t = e.map(function (e) { return +e.updateTime }); return Math.max.apply(Math, t) }, l.genCheckUniqueFunc = function (e, t) { return e = e || "id", t = t || 1e3,
                    function (t) { this.uniqueSet = this.uniqueSet || {}, this.uniqueSet[e] = this.uniqueSet[e] || {}; var n = this.uniqueSet[e],
                            i = t[e]; return !n[i] && (n[i] = !0, !0) } }, l.fillPropertyWithDefault = function (e, t, n) { return !!l.undef(e[t]) && (e[t] = n, !0) }, e.exports = l }, function (e, t, n) { "use strict";
            t.__esModule = !0, t.default = function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function (e, t, n) { "use strict";
            t.__esModule = !0; var i = a(n(165)),
                r = a(n(161)),
                o = a(n(9));

            function a(e) { return e && e.__esModule ? e : { default: e } }
            t.default = function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, o.default)(t)));
                e.prototype = (0, r.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t) } }, function (e, t, n) { "use strict";
            t.__esModule = !0; var i, r = n(9),
                o = (i = r) && i.__esModule ? i : { default: i };
            t.default = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t } }, function (e, t, n) { "use strict";
            t.__esModule = !0; var i, r = n(122),
                o = (i = r) && i.__esModule ? i : { default: i };
            t.default = function () {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(e, i.key, i) } } return function (t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }() }, function (e, t, n) { "use strict"; var i = { info: { hash: "72a05ab157b45e124943cbce31cd2ae438f8f577", shortHash: "72a05ab1", version: "6.1.0", sdkVersion: "52", nrtcVersion: "4.4.0", nrtcSdkVersion: "1", protocolVersion: 1 }, agentVersion: "2.8.0.906", lbsUrl: "https://lbs.netease.im/lbs/webconf.jsp", roomserver: "roomserver.netease.im", connectTimeout: 8e3, xhrTimeout: 8e3, socketTimeout: 8e3, reconnectionDelay: 1600, reconnectionDelayMax: 8e3, reconnectionJitter: .01, reconnectiontimer: null, heartbeatInterval: 8e3, cmdTimeout: 8e3, defaultReportUrl: "https://dr.netease.im/1.gif", isWeixinApp: !1, isNodejs: !1, isRN: !1, PUSHTOKEN: "", PUSHCONFIG: {}, CLIENTTYPE: 16, PushPermissionAsked: !1, iosPushConfig: null, androidPushConfig: null, netDetectAddr: "https://roomserver-dev.netease.im/v1/sdk/detect/local", weixinNetcall: { checkSumUrl: "https://nrtc.netease.im/demo/getChecksum.action", getChannelInfoUrl: "https://nrtc.netease.im/nrtc/getChannelInfos.action" }, formatSocketUrl: function (e) { var t = e.url,
                        n = e.secure ? "https" : "http"; return -1 === t.indexOf("http") ? n + "://" + t : t }, uploadUrl: "https://nos.netease.com", replaceUrl: "https://{bucket}-nosdn.netease.im/{object}", downloadHost: "nos.netease.com", downloadUrl: "https://{bucket}-nosdn.netease.im/{object}", httpsEnabled: !1, threshold: 0, genUploadUrl: function (e) { return i.uploadUrl + "/" + e }, genDownloadUrl: function (e, t) { var n = e.bucket,
                        r = (e.tag, e.expireSec),
                        o = +new Date,
                        a = r ? "&survivalTime=" + r : "",
                        s = i.replaceUrl + "?createTime=" + o + a; return /^http/.test(s) ? i.httpsEnabled && (s = s.replace("http", "https")) : s = i.httpsEnabled ? "https://" + s : "http://" + s, s.replace("{bucket}", n).replace("{object}", t) } };
            e.exports = i }, function (e, t, n) { var i = n(41)("wks"),
                r = n(28),
                o = n(8).Symbol,
                a = "function" == typeof o;
            (e.exports = function (e) { return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e)) }).store = i }, function (e, t) { var n = e.exports = { version: "2.5.5" }; "number" == typeof __e && (__e = n) }, function (e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function (e, t, n) { "use strict";
            t.__esModule = !0; var i = a(n(110)),
                r = a(n(100)),
                o = "function" == typeof r.default && "symbol" == typeof i.default ? function (e) { return typeof e } : function (e) { return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e };

            function a(e) { return e && e.__esModule ? e : { default: e } }
            t.default = "function" == typeof r.default && "symbol" === o(i.default) ? function (e) { return void 0 === e ? "undefined" : o(e) } : function (e) { return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e) } }, function (e, t, n) { "use strict"; var i = Object.prototype.hasOwnProperty,
                r = "~";

            function o() {}

            function a(e, t, n) { this.fn = e, this.context = t, this.once = n || !1 }

            function s() { this._events = new o, this._eventsCount = 0 }
            Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), s.prototype.eventNames = function () { var e, t, n = []; if (0 === this._eventsCount) return n; for (t in e = this._events) i.call(e, t) && n.push(r ? t.slice(1) : t); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n }, s.prototype.listeners = function (e, t) { var n = r ? r + e : e,
                    i = this._events[n]; if (t) return !!i; if (!i) return []; if (i.fn) return [i.fn]; for (var o = 0, a = i.length, s = new Array(a); o < a; o++) s[o] = i[o].fn; return s }, s.prototype.emit = function (e, t, n, i, o, a) { var s = r ? r + e : e; if (!this._events[s]) return !1; var c, u, l = this._events[s],
                    d = arguments.length; if (l.fn) { switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, n), !0;
                        case 4:
                            return l.fn.call(l.context, t, n, i), !0;
                        case 5:
                            return l.fn.call(l.context, t, n, i, o), !0;
                        case 6:
                            return l.fn.call(l.context, t, n, i, o, a), !0 } for (u = 1, c = new Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
                    l.fn.apply(l.context, c) } else { var f, p = l.length; for (u = 0; u < p; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d) {
                        case 1:
                            l[u].fn.call(l[u].context); break;
                        case 2:
                            l[u].fn.call(l[u].context, t); break;
                        case 3:
                            l[u].fn.call(l[u].context, t, n); break;
                        case 4:
                            l[u].fn.call(l[u].context, t, n, i); break;
                        default:
                            if (!c)
                                for (f = 1, c = new Array(d - 1); f < d; f++) c[f - 1] = arguments[f];
                            l[u].fn.apply(l[u].context, c) } } return !0 }, s.prototype.on = function (e, t, n) { var i = new a(t, n || this),
                    o = r ? r + e : e; return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this }, s.prototype.once = function (e, t, n) { var i = new a(t, n || this, !0),
                    o = r ? r + e : e; return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this }, s.prototype.removeListener = function (e, t, n, i) { var a = r ? r + e : e; if (!this._events[a]) return this; if (!t) return 0 == --this._eventsCount ? this._events = new o : delete this._events[a], this; var s = this._events[a]; if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new o : delete this._events[a]);
                else { for (var c = 0, u = [], l = s.length; c < l; c++)(s[c].fn !== t || i && !s[c].once || n && s[c].context !== n) && u.push(s[c]);
                    u.length ? this._events[a] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new o : delete this._events[a] } return this }, s.prototype.removeAllListeners = function (e) { var t; return e ? (t = r ? r + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new o : delete this._events[t])) : (this._events = new o, this._eventsCount = 0), this }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function () { return this }, s.prefixed = r, s.EventEmitter = s, e.exports = s }, function (e, t, n) { "use strict";
            (function (e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0; var i, r = n(9),
                    o = (i = r) && i.__esModule ? i : { default: i };
                t.getGlobal = a, t.detectCSSFeature = function (e) { var t = !1,
                        n = "Webkit Moz ms O".split(" "),
                        i = document.createElement("div"),
                        r = null;
                    e = e.toLowerCase(), void 0 !== i.style[e] && (t = !0); if (!1 === t) { r = e.charAt(0).toUpperCase() + e.substr(1); for (var o = 0; o < n.length; o++)
                            if (void 0 !== i.style[n[o] + r]) { t = !0; break } } return t }, t.fix = s, t.getYearStr = c, t.getMonthStr = u, t.getDayStr = l, t.getHourStr = d, t.getMinuteStr = f, t.getSecondStr = p, t.getMillisecondStr = h, t.dateFromDateTimeLocal = function (e) { return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " ")) }, t.getClass = g, t.typeOf = y, t.isString = _, t.isNumber = function (e) { return "number" === y(e) }, t.isBoolean = function (e) { return "boolean" === y(e) }, t.isArray = S, t.isFunction = b, t.isDate = C, t.isRegExp = function (e) { return "regexp" === y(e) }, t.isError = function (e) { return "error" === y(e) }, t.isnull = w, t.notnull = T, t.undef = k, t.notundef = x, t.exist = O, t.notexist = A, t.isObject = E, t.isEmpty = function (e) { return A(e) || (_(e) || S(e)) && 0 === e.length }, t.containsNode = function (e, t) { if (e === t) return !0; for (; t.parentNode;) { if (t.parentNode === e) return !0;
                        t = t.parentNode } return !1 }, t.calcHeight = function (e) { var t = e.parentNode || document.body;
                    (e = e.cloneNode(!0)).style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e); var n = e.offsetHeight; return t.removeChild(e), n }, t.remove = function (e) { e.parentNode && e.parentNode.removeChild(e) }, t.dataset = function (e, t, n) { if (!O(n)) return e.getAttribute("data-" + t);
                    e.setAttribute("data-" + t, n) }, t.target = function (e) { return e.target || e.srcElement }, t.createIframe = function (e) { var t; if ((e = e || {}).name) try {
                        (t = document.createElement('<iframe name="' + e.name + '"></iframe>')).frameBorder = 0 } catch (n) {
                        (t = document.createElement("iframe")).name = e.name } else t = document.createElement("iframe");
                    e.visible || (t.style.display = "none");
                    b(e.onload) && P(t, "load", function n(i) { if (!t.src) return;
                        e.multi || L(t, "load", n);
                        e.onload(i) });
                    (e.parent || document.body).appendChild(t); var n = e.src || "about:blank"; return setTimeout(function () { t.src = n }, 0), t }, t.html2node = function (e) { var t = document.createElement("div");
                    t.innerHTML = e; var n = [],
                        i = void 0,
                        r = void 0; if (t.children)
                        for (i = 0, r = t.children.length; i < r; i++) n.push(t.children[i]);
                    else
                        for (i = 0, r = t.childNodes.length; i < r; i++) { var o = t.childNodes[i];
                            1 === o.nodeType && n.push(o) }
                    return n.length > 1 ? t : n[0] }, t.scrollTop = function (e) { O(e) && (document.documentElement.scrollTop = document.body.scrollTop = e); return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 }, t.forOwn = R, t.mixin = D, t.isJSON = j, t.parseJSON = function e(t) { try { j(t) && (t = JSON.parse(t)), E(t) && R(t, function (n, i) { switch (y(i)) {
                                case "string":
                                case "object":
                                    t[n] = e(i) } }) } catch (e) { console.log("error:", e) } return t }, t.simpleClone = function (e) { var t = [],
                        n = JSON.stringify(e, function (e, n) { if ("object" === (void 0 === n ? "undefined" : (0, o.default)(n)) && null !== n) { if (-1 !== t.indexOf(n)) return;
                                t.push(n) } return n }); return JSON.parse(n) }, t.merge = function () { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; return n.forEach(function (t) { D(e, t) }), e }, t.fillUndef = function (e, t) { return R(t, function (t, n) { k(e[t]) && (e[t] = n) }), e }, t.checkWithDefault = function (e, t, n) { var i = e[t] || e[t.toLowerCase()];
                    A(i) && (i = n, e[t] = i); return i }, t.fetch = function (e, t) { return R(e, function (n, i) { O(t[n]) && (e[n] = t[n]) }), e }, t.string2object = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",",
                        n = {}; return e.split(t).forEach(function (e) { var t = e.split("="),
                            i = t.shift();
                        i && (n[decodeURIComponent(i)] = decodeURIComponent(t.join("="))) }), n }, t.object2string = F, t.genUrlSep = function (e) { return e.indexOf("?") < 0 ? "?" : "&" }, t.object2query = function (e) { return F(e, "&", !0) }, t.isFileInput = U, t.getKeys = function (e, t) { var n = Object.keys(e);
                    t && n.sort(function (t, n) { var i = U(e[t]),
                            r = U(e[n]); return i === r ? 0 : i ? 1 : -1 }); return n };
                t.o = {}, t.emptyObj = {}, t.f = function () {}, t.emptyFunc = function () {}, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi;

                function a() { return "undefined" != typeof window ? window : void 0 !== e ? e : {} }

                function s(e, t) { t = t || 2; for (var n = "" + e; n.length < t;) n = "0" + n; return n }

                function c(e) { return "" + e.getFullYear() }

                function u(e) { return s(e.getMonth() + 1) }

                function l(e) { return s(e.getDate()) }

                function d(e) { return s(e.getHours()) }

                function f(e) { return s(e.getMinutes()) }

                function p(e) { return s(e.getSeconds()) }

                function h(e) { return s(e.getMilliseconds(), 3) } var m, v;
                t.format = (m = /yyyy|MM|dd|hh|mm|ss|SSS/g, v = { yyyy: c, MM: u, dd: l, hh: d, mm: f, ss: p, SSS: h }, function (e, t) { return e = new Date(e), isNaN(+e) ? "invalid date" : (t = t || "yyyy-MM-dd").replace(m, function (t) { return v[t](e) }) });

                function g(e) { return Object.prototype.toString.call(e).slice(8, -1) }

                function y(e) { return g(e).toLowerCase() }

                function _(e) { return "string" === y(e) }

                function S(e) { return "array" === y(e) }

                function b(e) { return "function" === y(e) }

                function C(e) { return "date" === y(e) }

                function w(e) { return null === e }

                function T(e) { return null !== e }

                function k(e) { return void 0 === e }

                function x(e) { return void 0 !== e }

                function O(e) { return x(e) && T(e) }

                function A(e) { return k(e) || w(e) }

                function E(e) { return O(e) && "object" === y(e) } var I = t.addEventListener = function (e, t, n) { e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n) },
                    P = t.on = I,
                    M = t.removeEventListener = function (e, t, n) { e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n) },
                    L = t.off = M;

                function R() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
                        n = arguments[2]; for (var i in e) e.hasOwnProperty(i) && t.call(n, i, e[i]) }

                function D(e, t) { R(t, function (t, n) { e[t] = n }) } var N;
                t.uniqueID = (N = 0, function () { return "" + N++ });

                function j(e) { return _(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1 }

                function F(e, t, n) { if (!e) return ""; var i = []; return R(e, function (e, t) { b(t) || (C(t) ? t = t.getTime() : S(t) ? t = t.join(",") : E(t) && (t = JSON.stringify(t)), n && (t = encodeURIComponent(t)), i.push(encodeURIComponent(e) + "=" + t)) }), i.join(t || ",") }
                t.url2origin = function () { var e = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function (t) { return e.test(t || "") ? RegExp.$1.toLowerCase() : "" } }();

                function U(e) { var t = a(); return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob } }).call(this, n(30)) }, function (e, t, n) { var i = n(15),
                r = n(62),
                o = n(43),
                a = Object.defineProperty;
            t.f = n(14) ? Object.defineProperty : function (e, t, n) { if (i(e), t = o(t, !0), i(n), r) try { return a(e, t, n) } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } }, function (e, t) { var n = {}.hasOwnProperty;
            e.exports = function (e, t) { return n.call(e, t) } }, function (e, t, n) { e.exports = !n(20)(function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7 } }).a }) }, function (e, t, n) { var i = n(18);
            e.exports = function (e) { if (!i(e)) throw TypeError(e + " is not an object!"); return e } }, function (e, t, n) { var i = n(8),
                r = n(7),
                o = n(36),
                a = n(19),
                s = n(13),
                c = function (e, t, n) { var u, l, d, f = e & c.F,
                        p = e & c.G,
                        h = e & c.S,
                        m = e & c.P,
                        v = e & c.B,
                        g = e & c.W,
                        y = p ? r : r[t] || (r[t] = {}),
                        _ = y.prototype,
                        S = p ? i : h ? i[t] : (i[t] || {}).prototype; for (u in p && (n = t), n)(l = !f && S && void 0 !== S[u]) && s(y, u) || (d = l ? S[u] : n[u], y[u] = p && "function" != typeof S[u] ? n[u] : v && l ? o(d, i) : g && S[u] == d ? function (e) { var t = function (t, n, i) { if (this instanceof e) { switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t, n) } return new e(t, n, i) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(d) : m && "function" == typeof d ? o(Function.call, d) : d, m && ((y.virtual || (y.virtual = {}))[u] = d, e & c.R && _ && !_[u] && a(_, u, d))) };
            c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c }, function (e, t, n) { var i = n(59),
                r = n(44);
            e.exports = function (e) { return i(r(e)) } }, function (e, t) { e.exports = function (e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function (e, t, n) { var i = n(12),
                r = n(26);
            e.exports = n(14) ? function (e, t, n) { return i.f(e, t, r(1, n)) } : function (e, t, n) { return e[t] = n, e } }, function (e, t) { e.exports = function (e) { try { return !!e() } catch (e) { return !0 } } }, function (e, t, n) { "use strict";
            (function (t) { var i, r = n(9),
                    o = (i = r) && i.__esModule ? i : { default: i }; var a = function () { var e = "object" === (void 0 === t ? "undefined" : (0, o.default)(t)) ? t : window,
                        n = Math.pow(2, 53) - 1,
                        i = /\bOpera/,
                        r = Object.prototype,
                        a = r.hasOwnProperty,
                        s = r.toString;

                    function c(e) { return (e = String(e)).charAt(0).toUpperCase() + e.slice(1) }

                    function u(e) { return e = h(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e) }

                    function l(e, t) { for (var n in e) a.call(e, n) && t(e[n], n, e) }

                    function d(e) { return null == e ? c(e) : s.call(e).slice(8, -1) }

                    function f(e) { return String(e).replace(/([ -])(?!$)/g, "$1?") }

                    function p(e, t) { var i = null; return function (e, t) { var i = -1,
                                r = e ? e.length : 0; if ("number" == typeof r && r > -1 && r <= n)
                                for (; ++i < r;) t(e[i], i, e);
                            else l(e, t) }(e, function (n, r) { i = t(i, n, r, e) }), i }

                    function h(e) { return String(e).replace(/^ +| +$/g, "") } return function t(n) { var r = e,
                            a = n && "object" === (void 0 === n ? "undefined" : (0, o.default)(n)) && "String" != d(n);
                        a && (r = n, n = null); var c = r.navigator || {},
                            m = c.userAgent || "";
                        n || (n = m); var v, g, y, _, S, b = a ? !!c.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(s.toString()),
                            C = a ? "Object" : "ScriptBridgingProxyObject",
                            w = a ? "Object" : "Environment",
                            T = a && r.java ? "JavaPackage" : d(r.java),
                            k = a ? "Object" : "RuntimeObject",
                            x = /\bJava/.test(T) && r.java,
                            O = x && d(r.environment) == w,
                            A = x ? "a" : "α",
                            E = x ? "b" : "β",
                            I = r.document || {},
                            P = r.operamini || r.opera,
                            M = i.test(M = a && P ? P["[[Class]]"] : d(P)) ? M : P = null,
                            L = n,
                            R = [],
                            D = null,
                            N = n == m,
                            j = N && P && "function" == typeof P.version && P.version(),
                            F = p([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (e, t) { return e || RegExp("\\b" + (t.pattern || f(t)) + "\\b", "i").exec(n) && (t.label || t) }),
                            U = function (e) { return p(e, function (e, t) { return e || RegExp("\\b" + (t.pattern || f(t)) + "\\b", "i").exec(n) && (t.label || t) }) }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "Edge" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chrome", { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"]),
                            B = G([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"]),
                            V = function (e) { return p(e, function (e, t, i) { return e || (t[B] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp("\\b" + f(i) + "(?:\\b|\\w*\\d)", "i").exec(n)) && i }) }({ Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { PlayStation: 1, "PlayStation Vita": 1 } }),
                            W = function (e) { return p(e, function (e, t) { var i = t.pattern || f(t); return !e && (e = RegExp("\\b" + i + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (e = function (e, t, n) { var i = { "10.0": "10", 6.4: "10 Technical Preview", 6.3: "8.1", 6.2: "8", 6.1: "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", 5.2: "Server 2003 / XP 64-bit", 5.1: "XP", 5.01: "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" }; return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (i = i[/[\d.]+$/.exec(e)]) && (e = "Windows " + i), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = u(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]) }(e, i, t.label || t)), e }) }(["Windows Phone", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                        function G(e) { return p(e, function (e, t) { var i = t.pattern || f(t); return !e && (e = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((e = String(t.label && !RegExp(i, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = u(e[0].replace(RegExp(i, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e }) } if (F && (F = [F]), V && !B && (B = G([V])), (v = /\bGoogle TV\b/.exec(B)) && (B = v[0]), /\bSimulator\b/i.test(n) && (B = (B ? B + " " : "") + "Simulator"), "Opera Mini" == U && /\bOPiOS\b/.test(n) && R.push("running in Turbo/Uncompressed mode"), "IE" == U && /\blike iPhone OS\b/.test(n) ? (V = (v = t(n.replace(/like iPhone OS/, ""))).manufacturer, B = v.product) : /^iP/.test(B) ? (U || (U = "Safari"), W = "iOS" + ((v = / OS ([\d_]+)/i.exec(n)) ? " " + v[1].replace(/_/g, ".") : "")) : "Konqueror" != U || /buntu/i.test(W) ? V && "Google" != V && (/Chrome/.test(U) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(B)) || /\bAndroid\b/.test(W) && /^Chrome/.test(U) && /\bVersion\//i.test(n) ? (U = "Android Browser", W = /\bAndroid\b/.test(W) ? W : "Android") : "Silk" == U ? (/\bMobi/i.test(n) || (W = "Android", R.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && R.unshift("accelerated")) : "PaleMoon" == U && (v = /\bFirefox\/([\d.]+)\b/.exec(n)) ? R.push("identifying as Firefox " + v[1]) : "Firefox" == U && (v = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (W || (W = "Firefox OS"), B || (B = v[1])) : !U || (v = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(U)) ? (U && !B && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(v + "/") + 8)) && (U = null), (v = B || V || W) && (B || V || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(W)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(W) ? W : v) + " Browser")) : "Electron" == U && (v = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && R.push("Chromium " + v) : W = "Kubuntu", j || (j = p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(U), "(?:Firefox|Minefield|NetFront)"], function (e, t) { return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null })), (v = ("iCab" == F && parseFloat(j) > 3 ? "WebKit" : /\bOpera\b/.test(U) && (/\bOPR\b/.test(n) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(n) && ("Mac OS" == W ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront") && (F = [v]), "IE" == U && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (U += " Mobile", W = "Windows Phone " + (/\+$/.test(v) ? v : v + ".x"), R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (U = "IE Mobile", W = "Windows Phone 8.x", R.unshift("desktop mode"), j || (j = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : "IE" != U && "Trident" == F && (v = /\brv:([\d.]+)/.exec(n)) && (U && R.push("identifying as " + U + (j ? " " + j : "")), U = "IE", j = v[1]), N) { if (_ = "global", S = null != (y = r) ? (0, o.default)(y[_]) : "number", /^(?:boolean|number|string|undefined)$/.test(S) || "object" == S && !y[_]) d(v = r.runtime) == C ? (U = "Adobe AIR", W = v.flash.system.Capabilities.os) : d(v = r.phantom) == k ? (U = "PhantomJS", j = (v = v.version || null) && v.major + "." + v.minor + "." + v.patch) : "number" == typeof I.documentMode && (v = /\bTrident\/(\d+)/i.exec(n)) ? (j = [j, I.documentMode], (v = +v[1] + 4) != j[1] && (R.push("IE " + j[1] + " mode"), F && (F[1] = ""), j[1] = v), j = "IE" == U ? String(j[1].toFixed(1)) : j[0]) : "number" == typeof I.documentMode && /^(?:Chrome|Firefox)\b/.test(U) && (R.push("masking as " + U + " " + j), U = "IE", j = "11.0", F = ["Trident"], W = "Windows");
                            else if (x && (L = (v = x.lang.System).getProperty("os.arch"), W = W || v.getProperty("os.name") + " " + v.getProperty("os.version")), O) { try { j = r.require("ringo/engine").version.join("."), U = "RingoJS" } catch (e) {
                                    (v = r.system) && v.global.system == r.system && (U = "Narwhal", W || (W = v[0].os || null)) }
                                U || (U = "Rhino") } else "object" === (0, o.default)(r.process) && !r.process.browser && (v = r.process) && ("object" === (0, o.default)(v.versions) && ("string" == typeof v.versions.electron ? (R.push("Node " + v.versions.node), U = "Electron", j = v.versions.electron) : "string" == typeof v.versions.nw && (R.push("Chromium " + j, "Node " + v.versions.node), U = "NW.js", j = v.versions.nw)), U || (U = "Node.js", L = v.arch, W = v.platform, j = (j = /[\d.]+/.exec(v.version)) ? j[0] : null));
                            W = W && u(W) } if (j && (v = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(j) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (N && c.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (D = /b/i.test(v) ? "beta" : "alpha", j = j.replace(RegExp(v + "\\+?$"), "") + ("beta" == D ? E : A) + (/\d+\+?/.exec(v) || "")), "Fennec" == U || "Firefox" == U && /\b(?:Android|Firefox OS)\b/.test(W)) U = "Firefox Mobile";
                        else if ("Maxthon" == U && j) j = j.replace(/\.[\d.]+/, ".x");
                        else if (/\bXbox\b/i.test(B)) "Xbox 360" == B && (W = null), "Xbox 360" == B && /\bIEMobile\b/.test(n) && R.unshift("mobile mode");
                        else if (!/^(?:Chrome|IE|Opera)$/.test(U) && (!U || B || /Browser|Mobi/.test(U)) || "Windows CE" != W && !/Mobi/i.test(n))
                            if ("IE" == U && N) try { null === r.external && R.unshift("platform preview") } catch (e) { R.unshift("embedded") } else(/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(n)) && (v = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || j) ? (W = ((v = [v, /BB10/.test(n)])[1] ? (B = null, V = "BlackBerry") : "Device Software") + " " + v[0], j = null) : this != l && "Wii" != B && (N && P || /Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(n) || "Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(W) || "IE" == U && (W && !/^Win/.test(W) && j > 5.5 || /\bWindows XP\b/.test(W) && j > 8 || 8 == j && !/\bTrident\b/.test(n))) && !i.test(v = t.call(l, n.replace(i, "") + ";")) && v.name && (v = "ing as " + v.name + ((v = v.version) ? " " + v : ""), i.test(U) ? (/\bIE\b/.test(v) && "Mac OS" == W && (W = null), v = "identify" + v) : (v = "mask" + v, U = M ? u(M.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(v) && (W = null), N || (j = null)), F = ["Presto"], R.push(v));
                            else U += " Mobile";
                            (v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (v = [parseFloat(v.replace(/\.(\d)$/, ".0$1")), v], "Safari" == U && "+" == v[1].slice(-1) ? (U = "WebKit Nightly", D = "alpha", j = v[1].slice(0, -1)) : j != v[1] && j != (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1]) || (j = null), v[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1], 537.36 == v[0] && 537.36 == v[2] && parseFloat(v[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), N && (b || v[1]) ? (F && (F[1] = "like Chrome"), v = v[1] || ((v = v[0]) < 530 ? 1 : v < 532 ? 2 : v < 532.05 ? 3 : v < 533 ? 4 : v < 534.03 ? 5 : v < 534.07 ? 6 : v < 534.1 ? 7 : v < 534.13 ? 8 : v < 534.16 ? 9 : v < 534.24 ? 10 : v < 534.3 ? 11 : v < 535.01 ? 12 : v < 535.02 ? "13+" : v < 535.07 ? 15 : v < 535.11 ? 16 : v < 535.19 ? 17 : v < 536.05 ? 18 : v < 536.1 ? 19 : v < 537.01 ? 20 : v < 537.11 ? "21+" : v < 537.13 ? 23 : v < 537.18 ? 24 : v < 537.24 ? 25 : v < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), v = (v = v[0]) < 400 ? 1 : v < 500 ? 2 : v < 526 ? 3 : v < 533 ? 4 : v < 534 ? "4+" : v < 535 ? 5 : v < 537 ? 6 : v < 538 ? 7 : v < 601 ? 8 : "8"), F && (F[1] += " " + (v += "number" == typeof v ? ".x" : /[.+]/.test(v) ? "" : "+")), "Safari" == U && (!j || parseInt(j) > 45) && (j = v)), "Opera" == U && (v = /\bzbov|zvav$/.exec(W)) ? (U += " ", R.unshift("desktop mode"), "zvav" == v ? (U += "Mini", j = null) : U += "Mobile", W = W.replace(RegExp(" *" + v + "$"), "")) : "Safari" == U && /\bChrome\b/.exec(F && F[1]) && (R.unshift("desktop mode"), U = "Chrome Mobile", j = null, /\bOS X\b/.test(W) ? (V = "Apple", W = "iOS 4.3+") : W = null), j && 0 == j.indexOf(v = /[\d.]+$/.exec(W)) && n.indexOf("/" + v + "-") > -1 && (W = h(W.replace(v, ""))), F && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || "Safari" != U && /^iOS/.test(W) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(U) && F[1]) && (v = F[F.length - 1]) && R.push(v), R.length && (R = ["(" + R.join("; ") + ")"]), V && B && B.indexOf(V) < 0 && R.push("on " + V), B && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + B), W && (v = / ([\d.+]+)$/.exec(W), g = v && "/" == W.charAt(W.length - v[0].length - 1), W = { architecture: 32, family: v && !g ? W.replace(v[0], "") : W, version: v ? v[1] : null, toString: function () { var e = this.version; return this.family + (e && !g ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "") } }), (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L) ? (W && (W.architecture = 64, W.family = W.family.replace(RegExp(" *" + v), "")), U && (/\bWOW64\b/i.test(n) || N && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(n)) && R.unshift("32-bit")) : W && /^OS X/.test(W.family) && "Chrome" == U && parseFloat(j) >= 39 && (W.architecture = 64), n || (n = null); var H = {}; return H.description = n, H.layout = F && F[0], H.manufacturer = V, H.name = U, H.prerelease = D, H.product = B, H.ua = n, H.version = U && j, H.os = W || { architecture: null, family: null, version: null, toString: function () { return "null" } }, H.parse = t, H.toString = function () { return this.description || "" }, H.version && R.unshift(j), H.name && R.unshift(U), W && U && (W != String(W).split(" ")[0] || W != U.split(" ")[0] && !B) && R.push(B ? "(" + W + ")" : "on " + W), R.length && (H.description = R.join(" ")), H }() }();
                e.exports = a }).call(this, n(30)) }, , function (e, t) { e.exports = {} }, , , function (e, t) { e.exports = function (e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function (e, t) { t.f = {}.propertyIsEnumerable }, function (e, t) { var n = 0,
                i = Math.random();
            e.exports = function (e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36)) } }, function (e, t, n) { var i = n(60),
                r = n(40);
            e.exports = Object.keys || function (e) { return i(e, r) } }, function (e, t) { var n;
            n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(222);
            Object.defineProperty(t, "element", { enumerable: !0, get: function () { return i.element } }); var r = n(221);
            Object.defineProperty(t, "ajax", { enumerable: !0, get: function () { return r.ajax } }); var o = n(220);
            Object.defineProperty(t, "tool", { enumerable: !0, get: function () { return o.tool } }); var a = n(115);
            Object.defineProperty(t, "ApiInvokeData", { enumerable: !0, get: function () { return a.ApiInvokeData } }), Object.defineProperty(t, "DataRtc", { enumerable: !0, get: function () { return a.DataRtc } }), Object.defineProperty(t, "DataStats", { enumerable: !0, get: function () { return a.DataStats } }); var s = n(215);
            Object.defineProperty(t, "Device", { enumerable: !0, get: function () { return s.Device } }), Object.defineProperty(t, "MDevices", { enumerable: !0, get: function () { return s.MDevices } }), Object.defineProperty(t, "Recorder", { enumerable: !0, get: function () { return s.Recorder } }), Object.defineProperty(t, "MStream", { enumerable: !0, get: function () { return s.MStream } }); var c = n(78);
            Object.defineProperty(t, "RtcUtil", { enumerable: !0, get: function () { return c.RtcUtil } }), Object.defineProperty(t, "SdpUtil", { enumerable: !0, get: function () { return c.SdpUtil } }), Object.defineProperty(t, "RtcStats", { enumerable: !0, get: function () { return c.RtcStats } }), Object.defineProperty(t, "RtcStatsNew", { enumerable: !0, get: function () { return c.RtcStatsNew } }), Object.defineProperty(t, "RtcSupport", { enumerable: !0, get: function () { return c.RtcSupport } }); var u = n(127);
            Object.defineProperty(t, "WebAudio", { enumerable: !0, get: function () { return u.WebAudio } }) }, , function (e, t) { var n = {}.toString;
            e.exports = function (e) { return n.call(e).slice(8, -1) } }, function (e, t, n) { var i = n(12).f,
                r = n(13),
                o = n(6)("toStringTag");
            e.exports = function (e, t, n) { e && !r(e = n ? e : e.prototype, o) && i(e, o, { configurable: !0, value: t }) } }, function (e, t) { e.exports = !0 }, function (e, t, n) { var i = n(55);
            e.exports = function (e, t, n) { if (i(e), void 0 === t) return e; switch (n) {
                    case 1:
                        return function (n) { return e.call(t, n) };
                    case 2:
                        return function (n, i) { return e.call(t, n, i) };
                    case 3:
                        return function (n, i, r) { return e.call(t, n, i, r) } } return function () { return e.apply(t, arguments) } } }, function (e, t) { t.f = Object.getOwnPropertySymbols }, function (e, t, n) { var i = n(8),
                r = n(7),
                o = n(35),
                a = n(39),
                s = n(12).f;
            e.exports = function (e) { var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {}); "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) }) } }, function (e, t, n) { t.f = n(6) }, function (e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function (e, t, n) { var i = n(8),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            e.exports = function (e) { return r[e] || (r[e] = {}) } }, function (e, t, n) { var i = n(41)("keys"),
                r = n(28);
            e.exports = function (e) { return i[e] || (i[e] = r(e)) } }, function (e, t, n) { var i = n(18);
            e.exports = function (e, t) { if (!i(e)) return e; var n, r; if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r; if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r; if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") } }, function (e, t) { e.exports = function (e) { if (null == e) throw TypeError("Can't call method on  " + e); return e } }, function (e, t) { var n = Math.ceil,
                i = Math.floor;
            e.exports = function (e) { return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e) } }, , function (e, t, n) { var i = n(44);
            e.exports = function (e) { return Object(i(e)) } }, function (e, t, n) { var i = n(15),
                r = n(106),
                o = n(40),
                a = n(42)("IE_PROTO"),
                s = function () {},
                c = function () { var e, t = n(52)("iframe"),
                        i = o.length; for (t.style.display = "none", n(76).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; i--;) delete c.prototype[o[i]]; return c() };
            e.exports = Object.create || function (e, t) { var n; return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[a] = e) : n = c(), void 0 === t ? n : r(n, t) } }, function (e, t, n) { "use strict"; var i = n(108)(!0);
            n(63)(String, "String", function (e) { this._t = String(e), this._i = 0 }, function () { var e, t = this._t,
                    n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = i(t, n), this._i += e.length, { value: e, done: !1 }) }) }, , , function (e, t, n) { var i = n(18),
                r = n(8).document,
                o = i(r) && i(r.createElement);
            e.exports = function (e) { return o ? r.createElement(e) : {} } }, , function (e, t, n) { n(103); for (var i = n(8), r = n(19), o = n(23), a = n(6)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) { var u = s[c],
                    l = i[u],
                    d = l && l.prototype;
                d && !d[a] && r(d, a, u), o[u] = o.Array } }, function (e, t) { e.exports = function (e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, , function (e, t, n) { var i = n(27),
                r = n(26),
                o = n(17),
                a = n(43),
                s = n(13),
                c = n(62),
                u = Object.getOwnPropertyDescriptor;
            t.f = n(14) ? u : function (e, t) { if (e = o(e), t = a(t, !0), c) try { return u(e, t) } catch (e) {}
                if (s(e, t)) return r(!i.f.call(e, t), e[t]) } }, function (e, t, n) { var i = n(60),
                r = n(40).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) { return i(e, r) } }, function (e, t, n) { var i = n(33);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) { return "String" == i(e) ? e.split("") : Object(e) } }, function (e, t, n) { var i = n(13),
                r = n(17),
                o = n(105)(!1),
                a = n(42)("IE_PROTO");
            e.exports = function (e, t) { var n, s = r(e),
                    c = 0,
                    u = []; for (n in s) n != a && i(s, n) && u.push(n); for (; t.length > c;) i(s, n = t[c++]) && (~o(u, n) || u.push(n)); return u } }, function (e, t, n) { e.exports = n(19) }, function (e, t, n) { e.exports = !n(14) && !n(20)(function () { return 7 != Object.defineProperty(n(52)("div"), "a", { get: function () { return 7 } }).a }) }, function (e, t, n) { "use strict"; var i = n(35),
                r = n(16),
                o = n(61),
                a = n(19),
                s = n(23),
                c = n(107),
                u = n(34),
                l = n(75),
                d = n(6)("iterator"),
                f = !([].keys && "next" in [].keys()),
                p = function () { return this };
            e.exports = function (e, t, n, h, m, v, g) { c(n, t, h); var y, _, S, b = function (e) { if (!f && e in k) return k[e]; switch (e) {
                            case "keys":
                            case "values":
                                return function () { return new n(this, e) } } return function () { return new n(this, e) } },
                    C = t + " Iterator",
                    w = "values" == m,
                    T = !1,
                    k = e.prototype,
                    x = k[d] || k["@@iterator"] || m && k[m],
                    O = x || b(m),
                    A = m ? w ? b("entries") : O : void 0,
                    E = "Array" == t && k.entries || x; if (E && (S = l(E.call(new e))) !== Object.prototype && S.next && (u(S, C, !0), i || "function" == typeof S[d] || a(S, d, p)), w && x && "values" !== x.name && (T = !0, O = function () { return x.call(this) }), i && !g || !f && !T && k[d] || a(k, d, O), s[t] = O, s[C] = p, m)
                    if (y = { values: w ? O : b("values"), keys: v ? O : b("keys"), entries: A }, g)
                        for (_ in y) _ in k || o(k, _, y[_]);
                    else r(r.P + r.F * (f || T), t, y);
                return y } }, function (e, t, n) { "use strict";
            t.__esModule = !0; var i, r = n(89),
                o = (i = r) && i.__esModule ? i : { default: i };
            t.default = o.default || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e } }, , , function (e, t) { e.exports = function (e, t) { var n = t.split("."); for (; n.length;) { var i = n.shift(),
                        r = !1; if ("?" == i[i.length - 1] && (i = i.slice(0, -1), r = !0), !(e = e[i]) && r) return e } return e } }, function (e, t, n) { var i = n(45),
                r = Math.min;
            e.exports = function (e) { return e > 0 ? r(i(e), 9007199254740991) : 0 } }, , , , , function (e, t) { e.exports = function e(t, n) { "use strict"; var i, r, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                    a = /(^[ ]*|[ ]*$)/g,
                    s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                    c = /^0x[0-9a-f]+$/i,
                    u = /^0/,
                    l = function (t) { return e.insensitive && ("" + t).toLowerCase() || "" + t },
                    d = l(t).replace(a, "") || "",
                    f = l(n).replace(a, "") || "",
                    p = d.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    h = f.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    m = parseInt(d.match(c), 16) || 1 !== p.length && d.match(s) && Date.parse(d),
                    v = parseInt(f.match(c), 16) || m && f.match(s) && Date.parse(f) || null; if (v) { if (m < v) return -1; if (m > v) return 1 } for (var g = 0, y = Math.max(p.length, h.length); g < y; g++) { if (i = !(p[g] || "").match(u) && parseFloat(p[g]) || p[g] || 0, r = !(h[g] || "").match(u) && parseFloat(h[g]) || h[g] || 0, isNaN(i) !== isNaN(r)) return isNaN(i) ? 1 : -1; if (typeof i != typeof r && (i += "", r += ""), i < r) return -1; if (i > r) return 1 } return 0 } }, function (e, t) {}, function (e, t, n) { var i = n(13),
                r = n(47),
                o = n(42)("IE_PROTO"),
                a = Object.prototype;
            e.exports = Object.getPrototypeOf || function (e) { return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } }, function (e, t, n) { var i = n(8).document;
            e.exports = i && i.documentElement }, , function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(198);
            Object.defineProperty(t, "RtcUtil", { enumerable: !0, get: function () { return s(i).default } }); var r = n(195);
            Object.defineProperty(t, "SdpUtil", { enumerable: !0, get: function () { return s(r).default } }); var o = n(187);
            Object.defineProperty(t, "RtcStatsNew", { enumerable: !0, get: function () { return s(o).default } }); var a = n(143);

            function s(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(t, "RtcSupport", { enumerable: !0, get: function () { return s(a).default } }) }, function (e, t, n) { var i = n(33),
                r = n(6)("toStringTag"),
                o = "Arguments" == i(function () { return arguments }());
            e.exports = function (e) { var t, n, a; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) { try { return e[t] } catch (e) {} }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a } }, function (e, t, n) { "use strict"; var i = { link: { id: 1, heartbeat: 2 }, sync: { id: 5, sync: 1, syncTeamMembers: 2 }, misc: { id: 6, getSimpleNosToken: 1, getNosToken: 2, notifyUploadLog: 3, uploadSdkLogUrl: 4, audioToText: 5, processImage: 6, getNosTokenTrans: 7, notifyTransLog: 8, fetchFile: 9, fetchFileList: 10, removeFile: 11, getClientAntispam: 17, fileQuickTransfer: 18 }, avSignal: { id: 15, signalingCreate: 1, signalingDelay: 2, signalingClose: 3, signalingJoin: 4, signalingLeave: 5, signalingInvite: 6, signalingCancel: 7, signalingReject: 8, signalingAccept: 9, signalingControl: 10, signalingNotify: 11, signalingMutilClientSyncNotify: 12, signalingUnreadMessageSyncNotify: 13, signalingChannelsSyncNotify: 14 } },
                r = { heartbeat: { sid: i.link.id, cid: i.link.heartbeat }, getSimpleNosToken: { sid: i.misc.id, cid: i.misc.getSimpleNosToken, params: [{ type: "int", name: "num" }] }, getNosToken: { sid: i.misc.id, cid: i.misc.getNosToken, params: [{ type: "String", name: "responseBody" }, { type: "Property", name: "nosToken", entity: "nosToken" }] }, uploadSdkLogUrl: { sid: i.misc.id, cid: i.misc.uploadSdkLogUrl, params: [{ type: "string", name: "url" }] }, audioToText: { sid: i.misc.id, cid: i.misc.audioToText, params: [{ type: "Property", name: "audioToText" }] }, processImage: { sid: i.misc.id, cid: i.misc.processImage, params: [{ type: "String", name: "url" }, { type: "PropertyArray", name: "imageOps", entity: "imageOp" }] }, getClientAntispam: { sid: i.misc.id, cid: i.misc.getClientAntispam, params: [{ type: "Property", name: "clientAntispam" }] }, fileQuickTransfer: { sid: i.misc.id, cid: i.misc.fileQuickTransfer, params: [{ type: "Property", name: "fileQuickTransfer" }] }, getNosTokenTrans: { sid: i.misc.id, cid: i.misc.getNosTokenTrans, params: [{ type: "Property", name: "transToken" }] }, fetchFile: { sid: i.misc.id, cid: i.misc.fetchFile, params: [{ type: "String", name: "docId" }] }, fetchFileList: { sid: i.misc.id, cid: i.misc.fetchFileList, params: [{ type: "Property", name: "fileListParam" }] }, removeFile: { sid: i.misc.id, cid: i.misc.removeFile, params: [{ type: "String", name: "docId" }] }, signalingCreate: { sid: i.avSignal.id, cid: i.avSignal.signalingCreate, params: [{ type: "Property", name: "avSignalTag" }] }, signalingDelay: { sid: i.avSignal.id, cid: i.avSignal.signalingDelay, params: [{ type: "Property", name: "avSignalTag" }] }, signalingClose: { sid: i.avSignal.id, cid: i.avSignal.signalingClose, params: [{ type: "Property", name: "avSignalTag" }] }, signalingJoin: { sid: i.avSignal.id, cid: i.avSignal.signalingJoin, params: [{ type: "Property", name: "avSignalTag" }] }, signalingLeave: { sid: i.avSignal.id, cid: i.avSignal.signalingLeave, params: [{ type: "Property", name: "avSignalTag" }] }, signalingInvite: { sid: i.avSignal.id, cid: i.avSignal.signalingInvite, params: [{ type: "Property", name: "avSignalTag" }] }, signalingCancel: { sid: i.avSignal.id, cid: i.avSignal.signalingCancel, params: [{ type: "Property", name: "avSignalTag" }] }, signalingReject: { sid: i.avSignal.id, cid: i.avSignal.signalingReject, params: [{ type: "Property", name: "avSignalTag" }] }, signalingAccept: { sid: i.avSignal.id, cid: i.avSignal.signalingAccept, params: [{ type: "Property", name: "avSignalTag" }] }, signalingControl: { sid: i.avSignal.id, cid: i.avSignal.signalingControl, params: [{ type: "Property", name: "avSignalTag" }] } };
            e.exports = { idMap: i, cmdConfig: r, packetConfig: { "1_2": { service: "link", cmd: "heartbeat" }, "6_1": { service: "misc", cmd: "getSimpleNosToken", response: [{ type: "PropertyArray", name: "nosTokens", entity: "nosToken" }] }, "6_2": { service: "misc", cmd: "getNosToken", response: [{ type: "Property", name: "nosToken" }] }, "6_3": { service: "misc", cmd: "notifyUploadLog" }, "6_5": { service: "misc", cmd: "audioToText", response: [{ type: "String", name: "text" }] }, "6_6": { service: "misc", cmd: "processImage", response: [{ type: "String", name: "url" }] }, "6_7": { service: "misc", cmd: "getNosTokenTrans", response: [{ type: "Property", name: "nosToken" }, { type: "String", name: "docId" }] }, "6_8": { service: "misc", cmd: "notifyTransLog", response: [{ type: "Property", name: "transInfo" }] }, "6_9": { service: "misc", cmd: "fetchFile", response: [{ type: "Property", name: "info", entity: "transInfo" }] }, "6_10": { service: "misc", cmd: "fetchFileList", response: [{ type: "PropertyArray", name: "list", entity: "transInfo" }, { type: "Number", name: "totalCount" }] }, "6_11": { service: "misc", cmd: "removeFile", response: [{ type: "String", name: "res" }] }, "6_17": { service: "misc", cmd: "getClientAntispam", response: [{ type: "Property", name: "clientAntispam" }] }, "6_18": { service: "misc", cmd: "fileQuickTransfer", response: [{ type: "Property", name: "fileQuickTransfer" }] }, "15_1": { service: "avSignal", cmd: "signalingCreate", response: [{ type: "Property", name: "avSignalTag" }] }, "15_2": { service: "avSignal", cmd: "signalingDelay", response: [{ type: "Property", name: "avSignalTag" }] }, "15_3": { service: "avSignal", cmd: "signalingClose", response: [{ type: "Property", name: "avSignalTag" }] }, "15_4": { service: "avSignal", cmd: "signalingJoin", response: [{ type: "Property", name: "avSignalTag" }] }, "15_5": { service: "avSignal", cmd: "signalingLeave", response: [] }, "15_6": { service: "avSignal", cmd: "signalingInvite", response: [] }, "15_7": { service: "avSignal", cmd: "signalingCancel", response: [] }, "15_8": { service: "avSignal", cmd: "signalingReject", response: [] }, "15_9": { service: "avSignal", cmd: "signalingAccept", response: [] }, "15_10": { service: "avSignal", cmd: "signalingControl", response: [] }, "15_11": { service: "avSignal", cmd: "signalingNotify", response: [{ type: "Property", name: "avSignalTag" }] }, "15_12": { service: "avSignal", cmd: "signalingMutilClientSyncNotify", response: [{ type: "Property", name: "avSignalTag" }] }, "15_13": { service: "avSignal", cmd: "signalingUnreadMessageSyncNotify", response: [{ type: "PropertyArray", name: "avSignalTag" }] }, "15_14": { service: "avSignal", cmd: "signalingChannelsSyncNotify", response: [{ type: "PropertyArray", name: "avSignalTag" }] } } } }, , function (e, t, n) { "use strict";
            t.__esModule = !0; var i, r = n(212),
                o = (i = r) && i.__esModule ? i : { default: i };
            t.default = function (e) { return function () { var t = e.apply(this, arguments); return new o.default(function (e, n) { return function i(r, a) { try { var s = t[r](a),
                                    c = s.value } catch (e) { return void n(e) } if (!s.done) return o.default.resolve(c).then(function (e) { i("next", e) }, function (e) { i("throw", e) });
                            e(c) }("next") }) } } }, function (e, t, n) { e.exports = n(214) }, , , function (e, t, n) { "use strict"; var i = n(29),
                r = n(37),
                o = n(27),
                a = n(47),
                s = n(59),
                c = Object.assign;
            e.exports = !c || n(20)(function () { var e = {},
                    t = {},
                    n = Symbol(),
                    i = "abcdefghijklmnopqrst"; return e[n] = 7, i.split("").forEach(function (e) { t[e] = e }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != i }) ? function (e, t) { for (var n = a(e), c = arguments.length, u = 1, l = r.f, d = o.f; c > u;)
                    for (var f, p = s(arguments[u++]), h = l ? i(p).concat(l(p)) : i(p), m = h.length, v = 0; m > v;) d.call(p, f = h[v++]) && (n[f] = p[f]); return n } : c }, function (e, t, n) { var i = n(16);
            i(i.S + i.F, "Object", { assign: n(86) }) }, function (e, t, n) { n(87), e.exports = n(7).Object.assign }, function (e, t, n) { e.exports = { default: n(88), __esModule: !0 } }, , function (e, t, n) { "use strict"; var i = n(5); "undefined" != typeof window && (window.console || i.isWeixinApp || (window.console = { log: function () {}, info: function () {}, warn: function () {}, error: function () {} })) }, function (e, t, n) { n(38)("observable") }, function (e, t, n) { n(38)("asyncIterator") }, function (e, t, n) { var i = n(17),
                r = n(58).f,
                o = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) { return a && "[object Window]" == o.call(e) ? function (e) { try { return r(e) } catch (e) { return a.slice() } }(e) : r(i(e)) } }, function (e, t, n) { var i = n(33);
            e.exports = Array.isArray || function (e) { return "Array" == i(e) } }, function (e, t, n) { var i = n(29),
                r = n(37),
                o = n(27);
            e.exports = function (e) { var t = i(e),
                    n = r.f; if (n)
                    for (var a, s = n(e), c = o.f, u = 0; s.length > u;) c.call(e, a = s[u++]) && t.push(a); return t } }, function (e, t, n) { var i = n(28)("meta"),
                r = n(18),
                o = n(13),
                a = n(12).f,
                s = 0,
                c = Object.isExtensible || function () { return !0 },
                u = !n(20)(function () { return c(Object.preventExtensions({})) }),
                l = function (e) { a(e, i, { value: { i: "O" + ++s, w: {} } }) },
                d = e.exports = { KEY: i, NEED: !1, fastKey: function (e, t) { if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!o(e, i)) { if (!c(e)) return "F"; if (!t) return "E";
                            l(e) } return e[i].i }, getWeak: function (e, t) { if (!o(e, i)) { if (!c(e)) return !0; if (!t) return !1;
                            l(e) } return e[i].w }, onFreeze: function (e) { return u && d.NEED && c(e) && !o(e, i) && l(e), e } } }, function (e, t, n) { "use strict"; var i = n(8),
                r = n(13),
                o = n(14),
                a = n(16),
                s = n(61),
                c = n(97).KEY,
                u = n(20),
                l = n(41),
                d = n(34),
                f = n(28),
                p = n(6),
                h = n(39),
                m = n(38),
                v = n(96),
                g = n(95),
                y = n(15),
                _ = n(18),
                S = n(17),
                b = n(43),
                C = n(26),
                w = n(48),
                T = n(94),
                k = n(57),
                x = n(12),
                O = n(29),
                A = k.f,
                E = x.f,
                I = T.f,
                P = i.Symbol,
                M = i.JSON,
                L = M && M.stringify,
                R = p("_hidden"),
                D = p("toPrimitive"),
                N = {}.propertyIsEnumerable,
                j = l("symbol-registry"),
                F = l("symbols"),
                U = l("op-symbols"),
                B = Object.prototype,
                V = "function" == typeof P,
                W = i.QObject,
                G = !W || !W.prototype || !W.prototype.findChild,
                H = o && u(function () { return 7 != w(E({}, "a", { get: function () { return E(this, "a", { value: 7 }).a } })).a }) ? function (e, t, n) { var i = A(B, t);
                    i && delete B[t], E(e, t, n), i && e !== B && E(B, t, i) } : E,
                z = function (e) { var t = F[e] = w(P.prototype); return t._k = e, t },
                Y = V && "symbol" == typeof P.iterator ? function (e) { return "symbol" == typeof e } : function (e) { return e instanceof P },
                q = function (e, t, n) { return e === B && q(U, t, n), y(e), t = b(t, !0), y(n), r(F, t) ? (n.enumerable ? (r(e, R) && e[R][t] && (e[R][t] = !1), n = w(n, { enumerable: C(0, !1) })) : (r(e, R) || E(e, R, C(1, {})), e[R][t] = !0), H(e, t, n)) : E(e, t, n) },
                Q = function (e, t) { y(e); for (var n, i = v(t = S(t)), r = 0, o = i.length; o > r;) q(e, n = i[r++], t[n]); return e },
                $ = function (e) { var t = N.call(this, e = b(e, !0)); return !(this === B && r(F, e) && !r(U, e)) && (!(t || !r(this, e) || !r(F, e) || r(this, R) && this[R][e]) || t) },
                J = function (e, t) { if (e = S(e), t = b(t, !0), e !== B || !r(F, t) || r(U, t)) { var n = A(e, t); return !n || !r(F, t) || r(e, R) && e[R][t] || (n.enumerable = !0), n } },
                K = function (e) { for (var t, n = I(S(e)), i = [], o = 0; n.length > o;) r(F, t = n[o++]) || t == R || t == c || i.push(t); return i },
                X = function (e) { for (var t, n = e === B, i = I(n ? U : S(e)), o = [], a = 0; i.length > a;) !r(F, t = i[a++]) || n && !r(B, t) || o.push(F[t]); return o };
            V || (s((P = function () { if (this instanceof P) throw TypeError("Symbol is not a constructor!"); var e = f(arguments.length > 0 ? arguments[0] : void 0),
                    t = function (n) { this === B && t.call(U, n), r(this, R) && r(this[R], e) && (this[R][e] = !1), H(this, e, C(1, n)) }; return o && G && H(B, e, { configurable: !0, set: t }), z(e) }).prototype, "toString", function () { return this._k }), k.f = J, x.f = q, n(58).f = T.f = K, n(27).f = $, n(37).f = X, o && !n(35) && s(B, "propertyIsEnumerable", $, !0), h.f = function (e) { return z(p(e)) }), a(a.G + a.W + a.F * !V, { Symbol: P }); for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) p(Z[ee++]); for (var te = O(p.store), ne = 0; te.length > ne;) m(te[ne++]);
            a(a.S + a.F * !V, "Symbol", { for: function (e) { return r(j, e += "") ? j[e] : j[e] = P(e) }, keyFor: function (e) { if (!Y(e)) throw TypeError(e + " is not a symbol!"); for (var t in j)
                        if (j[t] === e) return t }, useSetter: function () { G = !0 }, useSimple: function () { G = !1 } }), a(a.S + a.F * !V, "Object", { create: function (e, t) { return void 0 === t ? w(e) : Q(w(e), t) }, defineProperty: q, defineProperties: Q, getOwnPropertyDescriptor: J, getOwnPropertyNames: K, getOwnPropertySymbols: X }), M && a(a.S + a.F * (!V || u(function () { var e = P(); return "[null]" != L([e]) || "{}" != L({ a: e }) || "{}" != L(Object(e)) })), "JSON", { stringify: function (e) { for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]); if (n = t = i[1], (_(t) || void 0 !== e) && !Y(e)) return g(t) || (t = function (e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !Y(t)) return t }), i[1] = t, L.apply(M, i) } }), P.prototype[D] || n(19)(P.prototype, D, P.prototype.valueOf), d(P, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0) }, function (e, t, n) { n(98), n(74), n(93), n(92), e.exports = n(7).Symbol }, function (e, t, n) { e.exports = { default: n(99), __esModule: !0 } }, function (e, t) { e.exports = function (e, t) { return { value: t, done: !!e } } }, function (e, t) { e.exports = function () {} }, function (e, t, n) { "use strict"; var i = n(102),
                r = n(101),
                o = n(23),
                a = n(17);
            e.exports = n(63)(Array, "Array", function (e, t) { this._t = a(e), this._i = 0, this._k = t }, function () { var e = this._t,
                    t = this._k,
                    n = this._i++; return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]) }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries") }, function (e, t, n) { var i = n(45),
                r = Math.max,
                o = Math.min;
            e.exports = function (e, t) { return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t) } }, function (e, t, n) { var i = n(17),
                r = n(68),
                o = n(104);
            e.exports = function (e) { return function (t, n, a) { var s, c = i(t),
                        u = r(c.length),
                        l = o(a, u); if (e && n != n) { for (; u > l;)
                            if ((s = c[l++]) != s) return !0 } else
                        for (; u > l; l++)
                            if ((e || l in c) && c[l] === n) return e || l || 0; return !e && -1 } } }, function (e, t, n) { var i = n(12),
                r = n(15),
                o = n(29);
            e.exports = n(14) ? Object.defineProperties : function (e, t) { r(e); for (var n, a = o(t), s = a.length, c = 0; s > c;) i.f(e, n = a[c++], t[n]); return e } }, function (e, t, n) { "use strict"; var i = n(48),
                r = n(26),
                o = n(34),
                a = {};
            n(19)(a, n(6)("iterator"), function () { return this }), e.exports = function (e, t, n) { e.prototype = i(a, { next: r(1, n) }), o(e, t + " Iterator") } }, function (e, t, n) { var i = n(45),
                r = n(44);
            e.exports = function (e) { return function (t, n) { var o, a, s = String(r(t)),
                        c = i(n),
                        u = s.length; return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536 } } }, function (e, t, n) { n(49), n(54), e.exports = n(39).f("iterator") }, function (e, t, n) { e.exports = { default: n(109), __esModule: !0 } }, function (e, t, n) { var i = n(79),
                r = n(6)("iterator"),
                o = n(23);
            e.exports = n(7).getIteratorMethod = function (e) { if (null != e) return e[r] || e["@@iterator"] || o[i(e)] } }, function (e, t, n) { var i = n(197),
                r = n(196);
            t.write = r, t.parse = i.parse, t.parseFmtpConfig = i.parseFmtpConfig, t.parseParams = i.parseParams, t.parsePayloads = i.parsePayloads, t.parseRemoteCandidates = i.parseRemoteCandidates, t.parseImageAttributes = i.parseImageAttributes, t.parseSimulcastStreamList = i.parseSimulcastStreamList }, function (e, t, n) { "use strict"; var i = n(55);
            e.exports.f = function (e) { return new function (e) { var t, n;
                    this.promise = new e(function (e, i) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = i }), this.resolve = i(t), this.reject = i(n) }(e) } }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = o(n(83)),
                r = o(n(82));

            function o(e) { return e && e.__esModule ? e : { default: e } }
            t.default = { getDevices: function () { var e = this; return (0, r.default)(i.default.mark(function t() { var n; return i.default.wrap(function (e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (WEBRTCLOG.log("开始获取设备列表"), n = null, navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) { e.next = 4; break } return e.abrupt("return", Promise.reject("your browser not support this feature, see https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices"));
                                case 4:
                                    return e.next = 6, navigator.mediaDevices.enumerateDevices().then(function (e) { 0 !== e.length && (n = { video: [], audioIn: [], audioOut: [] }, e.forEach(function (e) { "videoinput" === e.kind ? n.video.push({ deviceId: e.deviceId, label: e.label ? e.label : "camera " + (n.video.length + 1) }) : "audioinput" === e.kind ? n.audioIn.push({ deviceId: e.deviceId, label: e.label ? e.label : "microphone " + (n.audioIn.length + 1) }) : "audiooutput" === e.kind && n.audioOut.push({ deviceId: e.deviceId, label: e.label ? e.label : "speaker " + (n.audioOut.length + 1) }) })) });
                                case 6:
                                    return e.abrupt("return", n);
                                case 7:
                                case "end":
                                    return e.stop() } }, t, e) }))() } }, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = s(n(219)),
                r = s(n(218)),
                o = s(n(217)),
                a = s(n(216));

            function s(e) { return e && e.__esModule ? e : { default: e } }
            t.default = { ApiInvokeData: function (e) { return new i.default(e) }, LogData: function (e) { return new r.default(e) }, FormatDataFromStats: function (e) { return new o.default(e) }, RawDataFromStats: function (e) { return new a.default(e) } }, e.exports = t.default }, , , , , , , function (e, t, n) { e.exports = { default: n(167), __esModule: !0 } }, , , , , function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.WebAudio = void 0; var i = n(78).RtcSupport.checkWebAudio();

            function r() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.stream,
                    n = e.uid,
                    r = e.isAnalyze,
                    o = e.isRemote;
                this.support = i.WebAudio && i.MediaStream, this.gain = 1, this.stream = t, this.support && (this.audioIn = {}, this.uid = n || 0, this.isAnalyze = r, this.isRemote = o || !1, this.instant = 0, this.slow = 0, this.clip = 0, this.init()) }
            r.ac = i.WebAudio && i.MediaStream ? new window.AudioContext : {}, r.destination = r.ac.createMediaStreamDestination ? r.ac.createMediaStreamDestination() : {}; var o = r.prototype;
            o.context = r.ac, o.init = function () { this.validateInput() && (this.isAnalyze && this.initMonitor(), this.formatStreams(), this.initWebAudio(), this.initAudioIn()) }, o.validateInput = function () { return /(Array|MediaStream|LocalMediaStream)/.test(this.stream.constructor) }, o.initMonitor = function () { var e = this;
                (this.script = this.context.createScriptProcessor(0, 1, 1)).onaudioprocess = function (t) { var n, i = t.inputBuffer.getChannelData(0),
                        r = 0,
                        o = 0; for (n = 0; n < i.length; ++n) r += Math.abs(i[n]), Math.abs(i[n]) > .99 && (o += 1);
                    e.instant = Math.sqrt(r / i.length), e.slow = .95 * e.slow + .05 * e.instant, e.clip = o / i.length } }, o.initWebAudio = function () { var e = this.context;
                this.gainFilter = e.createGain(), this.destination = this.isRemote ? r.destination : e.createMediaStreamDestination(), this.gainFilter.gain.value = this.gain, this.gainFilter.connect(this.destination) }, o.initAudioIn = function () { var e = this,
                    t = this,
                    n = this.stream,
                    i = this.context,
                    r = void 0; if (/(MediaStream|LocalMediaStream)/.test(n.constructor)) return o(n), void(this.outputStream = this.destination.stream);

                function o(e) { if (!/(MediaStream|LocalMediaStream)/.test(e.constructor)) return null; if (0 === e.getAudioTracks().length) return null; var n = i.createMediaStreamSource(e); return t.isAnalyze && t.script && (n.connect(t.script), t.script.connect(t.gainFilter)), n.connect(t.gainFilter), n }
                n.constructor === Array && (n.forEach(function (t) {
                    (r = o(t)) && (e.audioIn[t.id] = r) }), this.outputStream = this.destination.stream), WEBRTCLOG.log("初始化音频 state: ", i.state), "running" != i.state && i.resume().then(function () { WEBRTCLOG.log("状态变更成功 state: ", i.state) }).catch(function (e) { WEBRTCLOG.log("状态变更出错: ", e), i.resume() }) }, o.formatStreams = function () { var e = this.stream,
                    t = []; if (/(MediaStream|LocalMediaStream)/.test(e.constructor)) return e.getAudioTracks().map(function (e) { t.push(new MediaStream([e])) }), void(this.stream = t);
                e.constructor === Array && (e.map(function (e) { e.getAudioTracks().map(function (e) { t.push(new MediaStream([e])) }) }), this.stream = t) }, o.addStream = function (e) { var t = this.context; if (0 !== e.getAudioTracks().length) { var n = t.createMediaStreamSource(e);
                    this.isAnalyze && this.script && n.connect(this.script), n.connect(this.gainFilter), this.audioIn[e.id] = n, this.outputStream = this.destination.stream } }, o.updateStream = function (e) { if (this.audioIn)
                    for (var t in this.audioIn) this.audioIn[t] && this.audioIn[t].disconnect(0), this.audioIn[t] = null;
                this.audioIn = {}, this.stream = e, this.initAudioIn() }, o.setGain = function (e) { this.support && (this.gainFilter.gain.value = e, this.gain = e) }, o.getGain = function () { return this.gain }, o.off = function () { return this.setGain(0) }, o.on = function () { this.setGain(1) }, o.destroy = function () { if (this.instant = 0, this.slow = 0, this.clip = 0, this.gainFilter && this.gainFilter.disconnect(0), this.script && this.script.disconnect(0), this.audioIn)
                    for (var e in this.audioIn) this.audioIn[e] && this.audioIn[e].disconnect(0);
                this.audioIn = {}; var t = this.stream;

                function n(e) { e && e.getTracks().forEach(function (t) { e.removeTrack(t) }) } /(MediaStream|LocalMediaStream)/.test(t.constructor) && n(t), t.constructor === Array && t.forEach(function (e) { n(e) }), this.stream = null, this.outputStream = null }, o.getVolumeData = function () { return this.instant.toFixed(2) }, t.WebAudio = r }, , , , , function (e, t, n) { var i = n(6)("iterator"),
                r = !1; try { var o = [7][i]();
                o.return = function () { r = !0 }, Array.from(o, function () { throw 2 }) } catch (e) {}
            e.exports = function (e, t) { if (!t && !r) return !1; var n = !1; try { var o = [7],
                        a = o[i]();
                    a.next = function () { return { done: n = !0 } }, o[i] = function () { return a }, e(o) } catch (e) {} return n } }, function (e, t, n) { var i = n(23),
                r = n(6)("iterator"),
                o = Array.prototype;
            e.exports = function (e) { return void 0 !== e && (i.Array === e || o[r] === e) } }, function (e, t, n) { var i = n(15);
            e.exports = function (e, t, n, r) { try { return r ? t(i(n)[0], n[1]) : t(n) } catch (t) { var o = e.return; throw void 0 !== o && i(o.call(e)), t } } }, , , , , , , , function (e, t) { var n = e.exports = { v: [{ name: "version", reg: /^(\d*)$/ }], o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }], s: [{ name: "name" }], i: [{ name: "description" }], u: [{ name: "uri" }], e: [{ name: "email" }], p: [{ name: "phone" }], z: [{ name: "timezones" }], r: [{ name: "repeats" }], t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }], c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }], b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }], m: [{ reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }], a: [{ push: "rtp", reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/, names: ["payload", "codec", "rate", "encoding"], format: function (e) { return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s" } }, { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" }, { name: "control", reg: /^control:(.*)/, format: "control:%s" }, { name: "rtcp", reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/, names: ["port", "netType", "ipVer", "address"], format: function (e) { return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d" } }, { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%d trr-int %d" }, { push: "rtcpFb", reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/, names: ["payload", "type", "subtype"], format: function (e) { return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s" } }, { push: "ext", reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/, names: ["value", "direction", "uri", "config"], format: function (e) { return "extmap:%d" + (e.direction ? "/%s" : "%v") + " %s" + (e.config ? " %s" : "") } }, { push: "crypto", reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/, names: ["id", "suite", "config", "sessionConfig"], format: function (e) { return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s" } }, { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" }, { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" }, { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" }, { name: "ptime", reg: /^ptime:(\d*)/, format: "ptime:%d" }, { name: "maxptime", reg: /^maxptime:(\d*)/, format: "maxptime:%d" }, { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ }, { name: "icelite", reg: /^(ice-lite)/ }, { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" }, { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" }, { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" }, { push: "candidates", reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/, names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"], format: function (e) { var t = "candidate:%s %d %s %d %s %d typ %s"; return t += null != e.raddr ? " raddr %s rport %d" : "%v%v", t += null != e.tcptype ? " tcptype %s" : "%v", null != e.generation && (t += " generation %d"), t += null != e["network-id"] ? " network-id %d" : "%v", t += null != e["network-cost"] ? " network-cost %d" : "%v" } }, { name: "endOfCandidates", reg: /^(end-of-candidates)/ }, { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" }, { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" }, { push: "ssrcs", reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/, names: ["id", "attribute", "value"], format: function (e) { var t = "ssrc:%d"; return null != e.attribute && (t += " %s", null != e.value && (t += ":%s")), t } }, { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" }, { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" }, { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" }, { name: "rtcpMux", reg: /^(rtcp-mux)/ }, { name: "rtcpRsize", reg: /^(rtcp-rsize)/ }, { name: "sctpmap", reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/, names: ["sctpmapNumber", "app", "maxMessageSize"], format: function (e) { return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s" } }, { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" }, { push: "rids", reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/, names: ["id", "direction", "params"], format: function (e) { return e.params ? "rid:%s %s %s" : "rid:%s %s" } }, { push: "imageattrs", reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"), names: ["pt", "dir1", "attrs1", "dir2", "attrs2"], format: function (e) { return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "") } }, { name: "simulcast", reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"), names: ["dir1", "list1", "dir2", "list2"], format: function (e) { return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "") } }, { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" }, { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" }, { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" }, { push: "invalid", names: ["value"] }] };
            Object.keys(n).forEach(function (e) { n[e].forEach(function (e) { e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s") }) }) }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(n(83)),
                r = a(n(82)),
                o = a(n(114));

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = n(21),
                c = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,
                u = window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext,
                l = window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection,
                d = window.RTCDataChannel = window.RTCDataChannel || window.DataChannel,
                f = window.MediaStream = window.MediaStream || window.webkitMediaStream;

            function p(e) { var t = void 0; return t || (t = document.createElement("video")), !!t.canPlayType({ ogg: 'video/ogg; codecs="theora"', h264: 'video/mp4; codecs="avc1.42E01E"', webm: 'video/webm; codecs="vp8, vorbis"', vp9: 'video/webm; codecs="vp9"', hls: 'application/x-mpegURL; codecs="avc1.42E01E"' }[e] || e) } var h = { WebRTC: !!l && !!f, RTCPeerConnection: !!l, Vp8: p("webm"), Vp9: p("vp9"), H264: p("h264"), GetUserMedia: !!c && !!navigator.mediaDevices, DataChannel: !!(l && d && l.prototype && l.prototype.createDataChannel), WebAudio: !(!u || !u.prototype.createMediaStreamSource), MediaStream: !!f };

            function m() { var e = s && s.name,
                    t = s && s.version; return console.log("platform", s), { prefix: e, version: t = (t = t && t.match(/(\d|\.)+/)[0]) && t.match(/\d+/)[0] } }
            t.default = { checkWebAudio: function () { return { WebAudio: h.WebAudio, MediaStream: h.MediaStream } }, checkCompatibility: function () { var e = Object.assign(m(), { system: s && s.os.family + " " + s.os.version, browser: s && s.name, version: s && s.version }); return new Promise(function (t, n) { var a = this;
                        (0, r.default)(i.default.mark(function n() { var r, s; return i.default.wrap(function (n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = Object.assign(e, h, { ScreenSharing: !1 }), n.next = 3, o.default.getDevices().catch(function (e) { return console.warn(e), t(r) });
                                    case 3:
                                        return s = n.sent, r.MicrophoneList = s && s.audioIn || [], r.CameraList = s && s.video || [], r.Microphone = s && s.audioIn && s.audioIn.length > 0 || !1, r.Camera = s && s.video && s.video.length > 0 || !1, n.abrupt("return", t(r));
                                    case 9:
                                    case "end":
                                        return n.stop() } }, n, a) }))() }) }, checkVersion: function () { return m() } }, e.exports = t.default }, function (e, t, n) { var i = n(15),
                r = n(18),
                o = n(113);
            e.exports = function (e, t) { if (i(e), r(t) && t.constructor === e) return t; var n = o.f(e); return (0, n.resolve)(t), n.promise } }, function (e, t) { e.exports = function (e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } } }, function (e, t, n) { var i, r, o, a = n(36),
                s = n(207),
                c = n(76),
                u = n(52),
                l = n(8),
                d = l.process,
                f = l.setImmediate,
                p = l.clearImmediate,
                h = l.MessageChannel,
                m = l.Dispatch,
                v = 0,
                g = {},
                y = function () { var e = +this; if (g.hasOwnProperty(e)) { var t = g[e];
                        delete g[e], t() } },
                _ = function (e) { y.call(e.data) };
            f && p || (f = function (e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return g[++v] = function () { s("function" == typeof e ? e : Function(e), t) }, i(v), v }, p = function (e) { delete g[e] }, "process" == n(33)(d) ? i = function (e) { d.nextTick(a(y, e, 1)) } : m && m.now ? i = function (e) { m.now(a(y, e, 1)) } : h ? (o = (r = new h).port2, r.port1.onmessage = _, i = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function (e) { l.postMessage(e + "", "*") }, l.addEventListener("message", _, !1)) : i = "onreadystatechange" in u("script") ? function (e) { c.appendChild(u("script")).onreadystatechange = function () { c.removeChild(this), y.call(e) } } : function (e) { setTimeout(a(y, e, 1), 0) }), e.exports = { set: f, clear: p } }, function (e, t, n) { var i = n(15),
                r = n(55),
                o = n(6)("species");
            e.exports = function (e, t) { var n, a = i(e).constructor; return void 0 === a || null == (n = i(a)[o]) ? t : r(n) } }, , , , , , , , , , , function (e, t, n) { "use strict";
            t.__esModule = !0; var i, r = n(122),
                o = (i = r) && i.__esModule ? i : { default: i };
            t.default = function (e, t, n) { return t in e ? (0, o.default)(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } }, function (e, t, n) { var i = n(16);
            i(i.S, "Object", { create: n(48) }) }, function (e, t, n) { n(159); var i = n(7).Object;
            e.exports = function (e, t) { return i.create(e, t) } }, function (e, t, n) { e.exports = { default: n(160), __esModule: !0 } }, function (e, t, n) { var i = n(18),
                r = n(15),
                o = function (e, t) { if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
            e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, i) { try {
                        (i = n(36)(Function.call, n(57).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function (e, n) { return o(e, n), t ? e.__proto__ = n : i(e, n), e } }({}, !1) : void 0), check: o } }, function (e, t, n) { var i = n(16);
            i(i.S, "Object", { setPrototypeOf: n(162).set }) }, function (e, t, n) { n(163), e.exports = n(7).Object.setPrototypeOf }, function (e, t, n) { e.exports = { default: n(164), __esModule: !0 } }, function (e, t, n) { var i = n(16);
            i(i.S + i.F * !n(14), "Object", { defineProperty: n(12).f }) }, function (e, t, n) { n(166); var i = n(7).Object;
            e.exports = function (e, t, n) { return i.defineProperty(e, t, n) } }, , , , , function (e, t) {
            function n(e) { e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0 }
            e.exports = n, n.prototype.duration = function () { var e = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) { var t = Math.random(),
                        n = Math.floor(t * this.jitter * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n } return 0 | Math.min(e, this.max) }, n.prototype.reset = function () { this.attempts = 0 }, n.prototype.setMin = function (e) { this.ms = e }, n.prototype.setMax = function (e) { this.max = e }, n.prototype.setJitter = function (e) { this.jitter = e } }, , , , , , , , , , , , , , function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = { framesEncoded: 1, qpSum: 1, audioOutputLevel: 1, googDecodingCTN: 1, googDecodingNormal: 1, googAvailableSendBandwidth: 1, googTargetEncBitrate: 1, googActualEncBitrate: 1, googRetransmitBitrate: 1, googTransmitBitrate: 1 },
                r = { googCaptureStartNtpTimeMs: 1 };
            t.default = { getStats: function (e) { var t = this; if (e && !/(failed|closed)/gi.test(e.iceConnectionState)) return navigator.mozGetUserMedia ? this.getStatsFirefox(e) : /^((?!chrome).)*safari((?!chrome).)*$/gi.test(navigator.userAgent) ? this.getStatsSafari(e) : new Promise(function (n, i) { e.getStats(function (i) { var r = {};
                            i.result().forEach(function (e) { var t = {};
                                e.names().forEach(function (n) { t[n] = e.stat(n) }), t.id = e.id, t.type = e.type, t.timestamp = e.timestamp, r[t.id] = t }), e.lastStats = e.lastStats || {}, r = t.format(e, r), n(r) }) }) }, getStatsFirefox: function (e) { var t = this; return e.getStats(null).then(function (n) { return e.lastStats = e.lastStats || {}, n = t.format(e, n), Promise.resolve(n) }) }, getStatsSafari: function (e) { var t = this; return e.getStats().then(function (n) { return e.lastStats = e.lastStats || {}, n = t._formatSSRC_S(e, n), Promise.resolve(n) }) }, format: function (e, t) { return !e || /(failed|closed)/gi.test(e.iceConnectionState) ? {} : t = parseInt(e.uid) - parseInt(e.targetUid) == 0 ? this.ssrcLocal(e, t) : this.ssrcRemote(e, t) }, formatSSRC: function (e, t, n, i) { return this[navigator.mozGetUserMedia ? "_formatSSRC_F" : "_formatSSRC_G"](e, t, n, i) }, _formatSSRC_G: function (e, t, n, i) { var r = this,
                        o = {}; return Object.values(t).map(function (t) { if (("recv" !== i || /^ssrc_/gi.test(t.id)) && ("send" !== i || /^(bweforvideo|Conn-audio-1-0|ssrc_)/gi.test(t.id))) { t = r.formatData(t); var n = new RegExp("ssrc_(\\d+)_" + i),
                                a = t.id.match(n),
                                s = t.id;
                            o[s] = t, a && a[1] && ("recv" !== i || 0 !== e.uid ? (t.id = "ssrc_" + e.uid + "_" + i + "_" + ("recv" === i ? e.targetUid : 0) + "_" + t.mediaType, -1 == (t = r.computeData(e, t)).googInterframeDelayMax && (t.googInterframeDelayMax = 0), o[t.id] = t, delete o[s]) : delete o[s]) } }), o }, _formatSSRC_F: function (e, t, n, i) { var r = this,
                        o = {},
                        a = new RegExp("^" + ("send" === i ? "outbound" : "inbound") + "_", "i"); return Object.values(t).map(function (t) { if (a.test(t.id)) { var n = t.id;
                            t.id = t.id.replace(/\d+/, e.uid + "_" + i + "_" + ("recv" === i ? e.targetUid : 0)), t = r.computeData(e, t), o[t.id] = t, delete o[n] } }), o }, _formatSSRC_S: function (e, t) { var n = this,
                        i = {},
                        r = null; return t.forEach(function (t) { if ("inbound-rtp" === t.type || "inboundrtp" === t.type) { if (-1 != t.id.indexOf("Video")) { var o = "ssrc_" + ((t = n.computeData(e, t)).ssrc || "123456") + "_recv_0_video";
                                r = o, i[o] = {}, i[o].bitsReceivedPerSecond = t.bitsReceivedPerSecond || 0, i[o].bytesReceived = t.bytesReceived || 0, i[o].packetsLost = t.packetsLost || 0, i[o].packetsReceived = t.packetsReceived || 0, i[o].packetsReceivedPerSecond = t.packetsReceivedPerSecond || 0, i[o].framesDecoded = t.framesDecoded || 0, i[o].googFrameRateOutput = t.framesDecoded || 0 } } else if ("outbound-rtp" === t.type || "outboundrtp" === t.type) { if (-1 != t.id.indexOf("Video")) { var a = "ssrc_" + ((t = n.computeData(e, t)).ssrc || "123456") + "_send_0_video";
                                i[a] = {}, i[a].bitsSentPerSecond = t.bitsSentPerSecond || 0, i[a].bytesSent = t.bytesSent || 0, i[a].packetsLost = t.packetsLost || 0, i[a].packetsSent = t.packetsSent || 0, i[a].packetsSentPerSecond = t.packetsSentPerSecond || 0, i[a].framesEncoded = t.framesEncoded || 0, i[a].googFrameRateSent = t.framesEncoded || 0 } } else "track" === t.type && (i.track = t) }), i.track && r && (i[r].googFrameHeightReceived = i.track.frameHeight, i[r].googFrameWidthReceived = i.track.frameWidth), i }, formatData: function (e) { return Object.keys(e).map(function (t) { i[t] && (e[t] = (e[t] / 1024).toFixed(2)), r[t] && (e[t] = (e[t] / 1024 / 1024).toFixed(2)) }), e }, computeData: function (e, t) { var n = { peer: e, ssrcKey: t.ssrc, currentItem: t }; return t.bytesSent && (t.bitsSentPerSecond = this.getLastStats(Object.assign({}, n, { valueKey: "bytesSent" }))), t.packetsSent && (t.packetsSentPerSecond = this.getLastStats(Object.assign({}, n, { valueKey: "packetsSent" }))), t.bytesReceived && (t.bitsReceivedPerSecond = this.getLastStats(Object.assign({}, n, { valueKey: "bytesReceived" }))), t.packetsReceived && (t.packetsReceivedPerSecond = this.getLastStats(Object.assign({}, n, { valueKey: "packetsReceived" }))), t }, ssrcLocal: function (e, t) { if (e && e.localDescription) { var n = e.localDescription; return this.formatSSRC(e, t, n.sdp, "send") } }, ssrcRemote: function (e, t) { if (e && e.remoteDescription) { var n = e.remoteDescription; return this.formatSSRC(e, t, n.sdp, "recv") } }, getLastStats: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.peer,
                        n = e.ssrcKey,
                        i = e.valueKey,
                        r = e.currentItem,
                        o = 0; return t.lastStats[n] && t.lastStats[n][i] ? r[i] > t.lastStats[n][i] && (o = r[i] - t.lastStats[n][i]) : (t.lastStats[n] || (t.lastStats[n] = {}), o = r[i]), o = /bytes/gi.test(i) ? Math.round(8 * o / 1e3) : o, t.lastStats[n][i] = r[i], o } }, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = d(n(83)),
                r = d(n(82)),
                o = d(n(1)),
                a = d(n(4)),
                s = d(n(3)),
                c = d(n(2)),
                u = n(10),
                l = d(n(186));

            function d(e) { return e && e.__esModule ? e : { default: e } } var f = function (e) {
                function t(e) {
                    (0, o.default)(this, t); var n = (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return n.webrtcBusiness = e.webrtcBusiness || null, n.interval = e.interval || 1e3, n } return (0, c.default)(t, e), (0, a.default)(t, [{ key: "reset", value: function () { this.times = 0, this.timer && clearInterval(this.timer), this.timer = null, this.webrtcBusiness = null } }, { key: "start", value: function () { this.timer = setInterval(this.getStats.bind(this), this.interval) } }, { key: "stop", value: function () { this.reset() } }, { key: "getStats", value: function () { var e = (0, r.default)(i.default.mark(function e() { var t; return i.default.wrap(function (e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.webrtcBusiness && this.webrtcBusiness.selfWebRtcInstance && this.webrtcBusiness.selfWebRtcInstance.rtcConnection) { e.next = 2; break } return e.abrupt("return");
                                    case 2:
                                        if (!this.webrtcBusiness.adapterRef.imInfo || !this.webrtcBusiness.adapterRef.imInfo.netDetect || this.webrtcBusiness.adapterRef.instance._isDetectNetwork()) { e.next = 4; break } return e.abrupt("return");
                                    case 4:
                                        return t = {}, e.next = 7, this.getLocalStats();
                                    case 7:
                                        return t.self = e.sent, e.next = 10, this.getRemoteStats();
                                    case 10:
                                        t.other = e.sent, Object.keys(t.other).map(function (e) { t.self = Object.assign(t.self, t.other[e]) }), this.times = (this.times || 0) + 1, this.emit("stats", t.self, this.times);
                                    case 14:
                                    case "end":
                                        return e.stop() } }, e, this) })); return function () { return e.apply(this, arguments) } }() }, { key: "getLocalStats", value: function () { var e = (0, r.default)(i.default.mark(function e() { var t; return i.default.wrap(function (e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = this.webrtcBusiness) && t.selfWebRtcInstance) { e.next = 3; break } return e.abrupt("return", {});
                                    case 3:
                                        return e.next = 5, l.default.getStats(t.selfWebRtcInstance.rtcConnection);
                                    case 5:
                                        return e.abrupt("return", e.sent);
                                    case 6:
                                    case "end":
                                        return e.stop() } }, e, this) })); return function () { return e.apply(this, arguments) } }() }, { key: "getRemoteStats", value: function () { var e = (0, r.default)(i.default.mark(function e() { var t, n, o, a, s, c, u, d, f, p, h = this; return i.default.wrap(function (e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = this.webrtcBusiness) && t.remoteWebRtcInstanceMap) { e.next = 3; break } return e.abrupt("return", {});
                                    case 3:
                                        n = {}, o = t.remoteWebRtcInstanceMap, a = Object.keys(o).map(function () { var e = (0, r.default)(i.default.mark(function e(t) { return i.default.wrap(function (e) { for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!o[t] || !o[t].rtcConnection) { e.next = 5; break } return e.next = 3, l.default.getStats(o[t].rtcConnection);
                                                        case 3:
                                                            return n[t] = e.sent, e.abrupt("return", n[t]);
                                                        case 5:
                                                        case "end":
                                                            return e.stop() } }, e, h) })); return function (t) { return e.apply(this, arguments) } }()), s = !0, c = !1, u = void 0, e.prev = 9, d = a[Symbol.iterator]();
                                    case 11:
                                        if (s = (f = d.next()).done) { e.next = 18; break } return p = f.value, e.next = 15, p;
                                    case 15:
                                        s = !0, e.next = 11; break;
                                    case 18:
                                        e.next = 24; break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(9), c = !0, u = e.t0;
                                    case 24:
                                        e.prev = 24, e.prev = 25, !s && d.return && d.return();
                                    case 27:
                                        if (e.prev = 27, !c) { e.next = 30; break } throw u;
                                    case 30:
                                        return e.finish(27);
                                    case 31:
                                        return e.finish(24);
                                    case 32:
                                        return e.abrupt("return", n);
                                    case 33:
                                    case "end":
                                        return e.stop() } }, e, this, [
                                [9, 20, 24, 32],
                                [25, , 27, 31]
                            ]) })); return function () { return e.apply(this, arguments) } }() }]), t }(u.EventEmitter);
            t.default = f, e.exports = t.default }, function (e, t, n) { var i = n(15),
                r = n(111);
            e.exports = n(7).getIterator = function (e) { var t = r(e); if ("function" != typeof t) throw TypeError(e + " is not iterable!"); return i(t.call(e)) } }, function (e, t, n) { n(54), n(49), e.exports = n(188) }, function (e, t, n) { e.exports = { default: n(189), __esModule: !0 } }, function (e, t, n) { var i = n(79),
                r = n(6)("iterator"),
                o = n(23);
            e.exports = n(7).isIterable = function (e) { var t = Object(e); return void 0 !== t[r] || "@@iterator" in t || o.hasOwnProperty(i(t)) } }, function (e, t, n) { n(54), n(49), e.exports = n(191) }, function (e, t, n) { e.exports = { default: n(192), __esModule: !0 } }, function (e, t, n) { "use strict";
            t.__esModule = !0; var i = o(n(193)),
                r = o(n(190));

            function o(e) { return e && e.__esModule ? e : { default: e } }
            t.default = function () { return function (e, t) { if (Array.isArray(e)) return e; if ((0, i.default)(Object(e))) return function (e, t) { var n = [],
                            i = !0,
                            o = !1,
                            a = void 0; try { for (var s, c = (0, r.default)(e); !(i = (s = c.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0); } catch (e) { o = !0, a = e } finally { try {!i && c.return && c.return() } finally { if (o) throw a } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }() }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i, r = n(194),
                o = (i = r) && i.__esModule ? i : { default: i };
            t.default = { randomSSRC: function () { var e = Math.floor(1e8 * Math.random()) + 1e7; return e > 1e8 ? 99999999 : e }, _createLocalDescription: function (e, t) { var n = {},
                        i = this._iceGatherer.getLocalParameters(),
                        r = this._iceGatherer.getLocalCandidates(),
                        a = this._dtlsTransport.getLocalParameters(),
                        s = this._dtlsTransport.getRemoteParameters(),
                        c = this._localCapabilities,
                        u = this._localTrackInfos; "offer" === t && this._sdpGlobalFields.version++, n.version = 0, n.origin = { address: "127.0.0.1", ipVer: 4, netType: "IN", sessionId: this._sdpGlobalFields.id, sessionVersion: this._sdpGlobalFields.version, username: "jitsi-ortc-webrtc-shim" }, n.name = "-", n.timing = { start: 0, stop: 0 }, n.msidSemantic = { semantic: "WMS", token: "*" }, n.groups = [{ mids: Array.from(this._mids.keys()).join(" "), type: "BUNDLE" }], n.media = [], n.fingerprint = { hash: a.fingerprints[0].value, type: a.fingerprints[0].algorithm }; var l = !1,
                        d = !0,
                        f = !1,
                        p = void 0; try { for (var h, m = c.codecs[Symbol.iterator](); !(d = (h = m.next()).done); d = !0) { var v = h.value; if ("video" === v.kind && "rtx" === v.name) { l = !0; break } } } catch (e) { f = !0, p = e } finally { try {!d && m.return && m.return() } finally { if (f) throw p } } var g = !0,
                        y = !1,
                        _ = void 0; try { for (var S, b = this._mids[Symbol.iterator](); !(g = (S = b.next()).done); g = !0) { var C = S.value,
                                w = (0, o.default)(C, 2),
                                T = w[0],
                                k = w[1];
                            x.call(this, T, k) } } catch (e) { y = !0, _ = e } finally { try {!g && b.return && b.return() } finally { if (y) throw _ } } return new RTCSessionDescription({ type: t, _sdpObject: n });

                    function x(e, o) { var a = {}; switch (a.type = o, o) {
                            case "audio":
                            case "video":
                                a.protocol = "RTP/SAVPF", a.port = 9, a.direction = "sendrecv"; break;
                            case "application":
                                a.protocol = "DTLS/SCTP", a.port = 0, a.payloads = "0", a.direction = "inactive" }
                        a.connection = { ip: "127.0.0.1", version: 4 }, a.mid = e, a.iceUfrag = i.usernameFragment, a.icePwd = i.password, a.candidates = []; var d = !0,
                            f = !1,
                            p = void 0; try { for (var h, m = r[Symbol.iterator](); !(d = (h = m.next()).done); d = !0) { var v = h.value,
                                    g = { component: 1 };
                                g.foundation = v.foundation, g.ip = v.ip, g.port = v.port, g.priority = v.priority, g.transport = v.protocol.toLowerCase(), g.type = v.type, "tcp" === g.transport && (g.tcptype = v.tcpType), a.candidates.push(g) } } catch (e) { f = !0, p = e } finally { try {!d && m.return && m.return() } finally { if (f) throw p } } if (a.endOfCandidates = "end-of-candidates", a.setup = "offer" === t ? "actpass" : "server" === s.role ? "active" : "passive", "audio" === o || "video" === o) { a.rtp = [], a.rtcpFb = [], a.fmtp = []; var y = [],
                                _ = !0,
                                S = !1,
                                b = void 0; try { for (var C, w = c.codecs[Symbol.iterator](); !(_ = (C = w.next()).done); _ = !0) { var T = C.value; if (!T.kind || T.kind === o) { y.push(T.preferredPayloadType); var k = { codec: T.name, payload: T.preferredPayloadType, rate: T.clockRate }; if (T.numChannels > 1 && (k.encoding = T.numChannels), a.rtp.push(k), T.parameters) { var x = { config: "", payload: T.preferredPayloadType },
                                                O = !0,
                                                A = !1,
                                                E = void 0; try { for (var I, P = Object.keys(T.parameters)[Symbol.iterator](); !(O = (I = P.next()).done); O = !0) { var M = I.value;
                                                    x.config && (x.config += ";"), x.config += M + "=" + T.parameters[M] } } catch (e) { A = !0, E = e } finally { try {!O && P.return && P.return() } finally { if (A) throw E } }
                                            x.config && a.fmtp.push(x) } var L = !0,
                                            R = !1,
                                            D = void 0; try { for (var N, j = (T.rtcpFeedback || [])[Symbol.iterator](); !(L = (N = j.next()).done); L = !0) { var F = N.value;
                                                a.rtcpFb.push({ payload: T.preferredPayloadType, subtype: F.parameter || void 0, type: F.type }) } } catch (e) { R = !0, D = e } finally { try {!L && j.return && j.return() } finally { if (R) throw D } } } } } catch (e) { S = !0, b = e } finally { try {!_ && w.return && w.return() } finally { if (S) throw b } }
                            0 === y.length ? (a.payloads = "9", a.port = 0, a.direction = "inactive") : a.payloads = y.join(" "), a.ssrcs = [], a.ssrcGroups = []; var U = !0,
                                B = !1,
                                V = void 0; try { for (var W, G = u.values()[Symbol.iterator](); !(U = (W = G.next()).done); U = !0) { var H = W.value,
                                        z = H.rtpSender,
                                        Y = H.stream.id,
                                        q = z.track; if ("ended" !== q.readyState && q.kind === o) { H.ssrc || (H.ssrc = this.randomSSRC()); var Q = l && "video" === q.kind;
                                        Q && !H.rtxSsrc && (H.rtxSsrc = H.ssrc + 1), a.ssrcs.push({ attribute: "cname", id: H.ssrc, value: CNAME }), a.ssrcs.push({ attribute: "msid", id: H.ssrc, value: Y + " " + q.id }), a.ssrcs.push({ attribute: "mslabel", id: H.ssrc, value: Y }), a.ssrcs.push({ attribute: "label", id: H.ssrc, value: q.id }), Q && (a.ssrcs.push({ attribute: "cname", id: H.rtxSsrc, value: CNAME }), a.ssrcs.push({ attribute: "msid", id: H.rtxSsrc, value: Y + " " + q.id }), a.ssrcs.push({ attribute: "mslabel", id: H.rtxSsrc, value: Y }), a.ssrcs.push({ attribute: "label", id: H.rtxSsrc, value: q.id }), a.ssrcGroups.push({ semantics: "FID", ssrcs: H.ssrc + " " + H.rtxSsrc })) } } } catch (e) { B = !0, V = e } finally { try {!U && G.return && G.return() } finally { if (B) throw V } }
                            a.ext = []; var $ = !0,
                                J = !1,
                                K = void 0; try { for (var X, Z = c.headerExtensions[Symbol.iterator](); !($ = (X = Z.next()).done); $ = !0) { var ee = X.value;
                                    ee.kind && ee.kind !== o || a.ext.push({ value: ee.preferredId, uri: ee.uri }) } } catch (e) { J = !0, K = e } finally { try {!$ && Z.return && Z.return() } finally { if (J) throw K } }
                            a.rtcpMux = "rtcp-mux", a.rtcpRsize = "rtcp-rsize" }
                        n.media.push(a) } }, mergeConstraints: function (e, t) { if (!e || !t) return e || t; var n = e; for (var i in t) n[i] = t[i]; return n }, iceCandidateType: function (e) { return e.split(" ")[7] }, formatTypePreference: function (e) { if (/Chrome\/\d+/.test(navigator.userAgent)) switch (e) {
                            case 0:
                                return "TURN/TLS";
                            case 1:
                                return "TURN/TCP";
                            case 2:
                                return "TURN/UDP" } else if (/Firefox\/\d+/.test(navigator.userAgent)) switch (e) {
                            case 0:
                                return "TURN/TCP";
                            case 5:
                                return "TURN/UDP" }
                        return "" }, maybeSetOpusOptions: function (e, t) { return "true" === t.opusStereo ? e = this.setCodecParam(e, "opus/48000", "stereo", "1") : "false" === t.opusStereo && (e = this.removeCodecParam(e, "opus/48000", "stereo")), "true" === t.opusFec ? e = this.setCodecParam(e, "opus/48000", "useinbandfec", "1") : "false" === t.opusFec && (e = this.removeCodecParam(e, "opus/48000", "useinbandfec")), "true" === t.opusDtx ? e = this.setCodecParam(e, "opus/48000", "usedtx", "1") : "false" === t.opusDtx && (e = this.removeCodecParam(e, "opus/48000", "usedtx")), t.opusMaxPbr && (e = this.setCodecParam(e, "opus/48000", "maxplaybackrate", t.opusMaxPbr)), e }, maybeSetAudioSendBitRate: function (e, t) { return t.audioSendBitrate ? (WEBRTCLOG.log("Prefer audio send bitrate: " + t.audioSendBitrate), this.preferBitRate(e, t.audioSendBitrate, "audio")) : e }, maybeSetAudioReceiveBitRate: function (e, t) { return t.audioRecvBitrate ? (WEBRTCLOG.log("Prefer audio receive bitrate: " + t.audioRecvBitrate), this.preferBitRate(e, t.audioRecvBitrate, "audio")) : e }, maybeSetVideoSendBitRate: function (e, t) { return t.videoSendBitrate ? (WEBRTCLOG.log("Prefer video send bitrate: " + t.videoSendBitrate), this.preferBitRate(e, t.videoSendBitrate, "video")) : e }, maybeSetVideoReceiveBitRate: function (e, t) { return t.videoRecvBitrate ? (WEBRTCLOG.log("Prefer video receive bitrate: " + t.videoRecvBitrate), this.preferBitRate(e, t.videoRecvBitrate, "video")) : e }, preferBitRate: function (e, t, n) { var i = e.split("\r\n"),
                        r = this.findLine(i, "m=", n); if (null === r) return WEBRTCLOG.log("Failed to add bandwidth line to sdp, as no m-line found"), e; var o = this.findLineInRange(i, r + 1, -1, "m=");
                    null === o && (o = i.length); var a = this.findLineInRange(i, r + 1, o, "c="); if (null === a) return WEBRTCLOG.log("Failed to add bandwidth line to sdp, as no c-line found"), e; var s = this.findLineInRange(i, a + 1, o, "b=AS");
                    s && i.splice(s, 1); var c = "b=AS:" + t; return i.splice(a + 1, 0, c), e = i.join("\r\n") }, maybeSetVideoSendInitialBitRate: function (e, t) { var n = t.videoSendInitialBitrate; if (!n) return e; var i = n,
                        r = t.videoSendBitrate;
                    r && (n > r && (WEBRTCLOG.log("Clamping initial bitrate to max bitrate of " + r + " kbps."), n = r, t.videoSendInitialBitrate = n), i = r); var o = e.split("\r\n"); if (null === this.findLine(o, "m=", "video")) return WEBRTCLOG.log("Failed to find video m-line"), e; var a = t.videoRecvCodec; return e = this.setCodecParam(e, a, "x-google-min-bitrate", t.videoSendInitialBitrate.toString()), e = this.setCodecParam(e, a, "x-google-max-bitrate", i.toString()) }, removePayloadTypeFromMline: function (e, t) { e = e.split(" "); for (var n = 0; n < e.length; ++n) e[n] === t.toString() && e.splice(n, 1); return e.join(" ") }, removeCodecByName: function (e, t) { var n = this.findLine(e, "a=rtpmap", t); if (null === n) return e; var i = this.getCodecPayloadTypeFromLine(e[n]);
                    e.splice(n, 1); var r = this.findLine(e, "m=", "video"); return null === r ? e : (e[r] = this.removePayloadTypeFromMline(e[r], i), e) }, removeCodecByPayloadType: function (e, t) { var n = this.findLine(e, "a=rtpmap", t.toString()); if (null === n) return e;
                    e.splice(n, 1); var i = this.findLine(e, "m=", "video"); return null === i ? e : (e[i] = this.removePayloadTypeFromMline(e[i], t), e) }, maybeRemoveVideoFec: function (e, t) { if ("false" !== t.videoFec) return e; var n = e.split("\r\n"),
                        i = this.findLine(n, "a=rtpmap", "red"); if (null === i) return e; var r = this.getCodecPayloadTypeFromLine(n[i]); if (n = this.removeCodecByPayloadType(n, r), n = this.removeCodecByName(n, "ulpfec"), null === (i = this.findLine(n, "a=fmtp", r.toString()))) return e; var o = this.parseFmtpLine(n[i]).pt; return null === o ? e : (n.splice(i, 1), (n = this.removeCodecByPayloadType(n, o)).join("\r\n")) }, maybePreferAudioSendCodec: function (e, t) { return this.maybePreferCodec(e, "audio", "send", t.audioSendCodec) }, maybePreferAudioReceiveCodec: function (e, t) { return this.maybePreferCodec(e, "audio", "receive", t.audioRecvCodec) }, maybePreferVideoSendCodec: function (e, t) { return this.maybePreferCodec(e, "video", "send", t.videoSendCodec) }, maybePreferVideoReceiveCodec: function (e, t) { return this.maybePreferCodec(e, "video", "receive", t.videoRecvCodec) }, maybePreferCodec: function (e, t, n, i) { var r = t + " " + n + " codec"; if (!i) return WEBRTCLOG.log("No preference on " + r + "."), e;
                    WEBRTCLOG.log("Prefer " + r + ": " + i); var o = e.split("\r\n"),
                        a = this.findLine(o, "m=", t); if (null === a) return e; var s = this.getCodecPayloadType(o, i); return s ? o[a] = this.setDefaultCodec(o[a], s) : WEBRTCLOG.error("no prefered codec found for ", i), e = o.join("\r\n") }, setCodecParam: function (e, t, n, i) { var r = e.split("\r\n"),
                        o = this.findFmtpLine(r, t),
                        a = {}; if (null === o) { var s = this.findLine(r, "a=rtpmap", t); if (null === s) return e; var c = this.getCodecPayloadTypeFromLine(r[s]);
                        a.pt = c.toString(), a.params = {}, a.params[n] = i, r.splice(s + 1, 0, this.writeFmtpLine(a)) } else(a = this.parseFmtpLine(r[o])).params[n] = i, r[o] = this.writeFmtpLine(a); return e = r.join("\r\n") }, removeCodecParam: function (e, t, n) { var i = e.split("\r\n"),
                        r = this.findFmtpLine(i, t); if (null === r) return e; var o = this.parseFmtpLine(i[r]);
                    delete o.params[n]; var a = this.writeFmtpLine(o); return null === a ? i.splice(r, 1) : i[r] = a, e = i.join("\r\n") }, parseFmtpLine: function (e) { var t = {},
                        n = e.indexOf(" "),
                        i = e.substring(n + 1).split("; "),
                        r = new RegExp("a=fmtp:(\\d+)"),
                        o = e.match(r); if (!o || 2 !== o.length) return null;
                    t.pt = o[1]; for (var a = {}, s = 0; s < i.length; ++s) { var c = i[s].split("=");
                        2 === c.length && (a[c[0]] = c[1]) } return t.params = a, t }, writeFmtpLine: function (e) { if (!e.hasOwnProperty("pt") || !e.hasOwnProperty("params")) return null; var t = e.pt,
                        n = e.params,
                        i = [],
                        r = 0; for (var o in n) i[r] = o + "=" + n[o], ++r; return 0 === r ? null : "a=fmtp:" + t.toString() + " " + i.join("; ") }, findFmtpLine: function (e, t) { var n = this.getCodecPayloadType(e, t); return n ? this.findLine(e, "a=fmtp:" + n.toString()) : null }, findLine: function (e, t, n) { return this.findLineInRange(e, 0, -1, t, n) }, findLineInRange: function (e, t, n, i, r) { for (var o = -1 !== n ? n : e.length, a = t; a < o; ++a)
                        if (0 === e[a].indexOf(i) && (!r || -1 !== e[a].toLowerCase().indexOf(r.toLowerCase()))) return a;
                    return null }, getCodecPayloadType: function (e, t) { var n = this.findLine(e, "a=rtpmap", t); return n ? this.getCodecPayloadTypeFromLine(e[n]) : null }, getCodecPayloadTypeFromLine: function (e) { var t = new RegExp("a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+"),
                        n = e.match(t); return n && 2 === n.length ? n[1] : null }, setDefaultCodec: function (e, t) { var n = e.split(" "),
                        i = n.slice(0, 3);
                    i.push(t); for (var r = 3; r < n.length; r++) n[r] !== t && i.push(n[r]); return i.join(" ") } }, e.exports = t.default }, function (e, t, n) { var i = n(142),
                r = /%[sdv%]/g,
                o = function (e, t, n) { var i = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)]; if (t.names)
                        for (var o = 0; o < t.names.length; o += 1) { var a = t.names[o];
                            t.name ? i.push(n[t.name][a]) : i.push(n[t.names[o]]) } else i.push(n[t.name]); return function (e) { var t = 1,
                            n = arguments,
                            i = n.length; return e.replace(r, function (e) { if (t >= i) return e; var r = n[t]; switch (t += 1, e) {
                                case "%%":
                                    return "%";
                                case "%s":
                                    return String(r);
                                case "%d":
                                    return Number(r);
                                case "%v":
                                    return "" } }) }.apply(null, i) },
                a = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                s = ["i", "c", "b", "a"];
            e.exports = function (e, t) { t = t || {}, null == e.version && (e.version = 0), null == e.name && (e.name = " "), e.media.forEach(function (e) { null == e.payloads && (e.payloads = "") }); var n = t.outerOrder || a,
                    r = t.innerOrder || s,
                    c = []; return n.forEach(function (t) { i[t].forEach(function (n) { n.name in e && null != e[n.name] ? c.push(o(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach(function (e) { c.push(o(t, n, e)) }) }) }), e.media.forEach(function (e) { c.push(o("m", i.m[0], e)), r.forEach(function (t) { i[t].forEach(function (n) { n.name in e && null != e[n.name] ? c.push(o(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach(function (e) { c.push(o(t, n, e)) }) }) }) }), c.join("\r\n") + "\r\n" } }, function (e, t, n) { var i = function (e) { return String(Number(e)) === e ? Number(e) : e },
                r = function (e, t, n) { var r = e.name && e.names;
                    e.push && !t[e.push] ? t[e.push] = [] : r && !t[e.name] && (t[e.name] = {}); var o = e.push ? {} : r ? t[e.name] : t;! function (e, t, n, r) { if (r && !n) t[r] = i(e[1]);
                        else
                            for (var o = 0; o < n.length; o += 1) null != e[o + 1] && (t[n[o]] = i(e[o + 1])) }(n.match(e.reg), o, e.names, e.name), e.push && t[e.push].push(o) },
                o = n(142),
                a = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            t.parse = function (e) { var t = {},
                    n = [],
                    i = t; return e.split(/(\r\n|\r|\n)/).filter(a).forEach(function (e) { var t = e[0],
                        a = e.slice(2); "m" === t && (n.push({ rtp: [], fmtp: [] }), i = n[n.length - 1]); for (var s = 0; s < (o[t] || []).length; s += 1) { var c = o[t][s]; if (c.reg.test(a)) return r(c, i, a) } }), t.media = n, t }; var s = function (e, t) { var n = t.split(/=(.+)/, 2); return 2 === n.length ? e[n[0]] = i(n[1]) : 1 === n.length && t.length > 1 && (e[n[0]] = void 0), e };
            t.parseParams = function (e) { return e.split(/\;\s?/).reduce(s, {}) }, t.parseFmtpConfig = t.parseParams, t.parsePayloads = function (e) { return e.split(" ").map(Number) }, t.parseRemoteCandidates = function (e) { for (var t = [], n = e.split(" ").map(i), r = 0; r < n.length; r += 3) t.push({ component: n[r], ip: n[r + 1], port: n[r + 2] }); return t }, t.parseImageAttributes = function (e) { return e.split(" ").map(function (e) { return e.substring(1, e.length - 1).split(",").reduce(s, {}) }) }, t.parseSimulcastStreamList = function (e) { return e.split(";").map(function (e) { return e.split(",").map(function (e) { var t, n = !1; return "~" !== e[0] ? t = i(e) : (t = i(e.substring(1, e.length)), n = !0), { scid: t, paused: n } }) }) } }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i, r = n(143),
                o = (i = r) && i.__esModule ? i : { default: i }; var a = n(112),
                s = o.default.checkVersion(),
                c = {};
            t.default = { fnShake: function (e) { var t = this,
                        n = e.fn,
                        i = e.peer,
                        r = void 0 === i ? {} : i; if (n) { if (r) return r.id || (r.id = Object.keys(c).length + 1), n = "_" + n, c[r.id] || (c[r.id] = {}), c[r.id] && c[r.id][n] && (WEBRTCLOG.log("destroy " + n + " timer"), clearTimeout(c[r.id][n]), c[r.id][n] = null), WEBRTCLOG.log("create " + n + " timer"), new Promise(function (i) { c[r.id][n] = setTimeout(function () { c[r.id][n] = null, i(t[n](e)) }, 200) });
                        WEBRTCLOG.error("RtcUtil:fnShake peer is null") } }, createOffer: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.fnShake({ peer: e, fn: "createOffer" }) }, _createOffer: function () { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).peer; if (e) { WEBRTCLOG.log("------ do createoffer ------"); var t = { offerToReceiveVideo: 1, offerToReceiveAudio: 1 }; if (e.uid - e.targetUid != 0) { var n = e.getLocalStreams(),
                                i = n[0] && n[0].getTracks() || !1;
                            i && 0 !== i.length || e.addTransceiver && "Safari" === s.prefix && (e.addTransceiver("audio"), e.addTransceiver("video")) } return WEBRTCLOG.log("iceConnectionState :", e.iceConnectionState), e.iceConnectionState && "failed" == e.iceConnectionState ? t.iceRestart = !0 : "connected" != e.iceConnectionState && "completed" != e.iceConnectionState && "closed" != e.iceConnectionState && (t.iceRestart = !0), e.createOffer(t) } }, formatSdp: function () { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.offerOrAnswer,
                        i = t.uid,
                        r = t.highAudio,
                        o = t.stero,
                        c = t.targetUid,
                        u = t.netDetect,
                        l = t.codec,
                        d = t.chromeScreenShareOpened,
                        f = t.stream || new MediaStream,
                        p = n.sdp,
                        h = n.type,
                        m = [],
                        v = [],
                        g = a.parse(p);
                    WEBRTCLOG.log(c + " 原始sdp " + h + " \n", p); var y = f.getAudioTracks()[0],
                        _ = f.getVideoTracks()[0]; return g.rtcpXr = "rcvr-rtt=all:10000", g.media && g.media.map(function (t) { if (t.candidates && delete t.candidates, t.direction = c !== i ? "recvonly" : /recvonly/.test(t.direction) ? "recvonly" : "sendonly", (/audio/.test(t.type) && !y || /video/.test(t.type) && !_) && delete t.ssrcs && delete t.ssrcGroups && delete t.msid, "audio" === t.type && (v.push(t.mid), t, t.rtcpFb && 1 == t.rtcpFb.length && t.rtcpFb.push({ payload: t.rtcpFb[0].payload, type: "nack" })), "video" === t.type && _) { if (!/h264/i.test(p)) return void WEBRTCLOG.error("该机型浏览器不支持H264编码"); var a = []; if (t.rtp && t.rtp.length && t.rtp.map(function (e) { "H264" === e.codec && a.push(e.payload) }), t.fmtp && t.fmtp.length && t.fmtp.map(function (e) { d ? -1 != a.indexOf(e.payload) && e.config && (e.config.indexOf("x-google-min-bitrate=512") > 0 && (e.config = e.config.replace(";x-google-max-bitrate=2048;x-google-min-bitrate=512;x-google-start-bitrate=1024", "")), -1 === e.config.indexOf("x-google-min-bitrate=1024") && (e.config += ";x-google-min-bitrate=1024")) : -1 != a.indexOf(e.payload) && e.config && (e.config.indexOf("x-google-min-bitrate=1024") > 0 && (e.config = e.config.replace(";x-google-min-bitrate=1024", "")), -1 === e.config.indexOf("x-google-min-bitrate=512") && (e.config += ";x-google-max-bitrate=2048;x-google-min-bitrate=512;x-google-start-bitrate=1024")) }), t.ssrcs.map(function (e) { /^label$/.test(e.attribute) && e.value !== _.id && m.push(e.id) }), "Firefox" === s.prefix && t.msid) { var u = t.msid.split(" "); if (u[1] == _.id) { u[1] = u[1].replace(/([\da-zA-Z]{4})/, function (e, t, n) { var i = "",
                                            r = t,
                                            o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                                        e && (r = Math.round(Math.random() * (n - t)) + t); for (var a = 0; a < r; a++) i += o[Math.round(Math.random() * (o.length - 1))]; return i }(!1, 4)) } else u[1] = _.id;
                                t.msid = u.join(" ") } } if ("audio" === t.type && (t.ptime = 60, t.maxptime = 60, t.fmtp && t.fmtp.length)) { var l = !1,
                                f = r ? 48e3 : 16e3;
                            t.fmtp.map(function (e) { e.config && -1 !== e.config.indexOf("minptime=") && (e.config = e.config.replace(/minptime=\d+/, "minptime=60")), e.config && -1 !== e.config.indexOf("sprop-maxcapturerate=") && -1 !== e.config.indexOf("maxplaybackrate") && (l = !0, e.config = e.config.replace(/sprop-maxcapturerate=\d+/, "sprop-maxcapturerate=" + f), e.config = e.config.replace(/maxplaybackrate=\d+/, "maxplaybackrate=" + f)), l || (e.config += ";maxplaybackrate=" + f + ";sprop-maxcapturerate=" + f), o && (e.config += ";maxaveragebitrate=131072;stereo=1;sprop-stereo=1;cbr=1") }) } if ("offer" === n.type) { var h = t.mid;
                            g.groups && g.groups.map(function (e) { var n = e.mids.split(" "); - 1 !== n.indexOf(h) && (n.splice(n.indexOf(h), 1, t.mid), e.mids = n.join(" ")) }) }
                        t.fmtp = e.limitFrame(t.fmtp) }), u && (g = this.deleteCodec(g, l)), n.sdp = a.write(g), n.sdp = n.sdp.replace(/t=([0-9 ]*)\r\n/, "t=$1\r\na=rtcp-xr:rcvr-rtt=all:10000\r\n"), m.length > 0 && m.map(function (e) { var t = new RegExp("a=ssrc:" + e + ".+\\r\\n", "gi");
                        n.sdp = n.sdp.replace(t, "") }), n }, deleteCodec: function (e, t) { if (t && e) { var n = []; return e.media.map(function (e) { if ("video" === e.type && (e.rtp && e.rtp.length && e.rtp.map(function (e) { var i = e.codec.toLowerCase();
                                    i !== t && "red" !== i && "ulpfec" !== i || n.push(e.payload) }), n.length && e.fmtp && e.fmtp.length && e.fmtp.map(function (e) { var t = /apt=(\d*)/gi.exec(e.config);
                                    t && t.length && n.map(function (i) { i === parseInt(t[t.length - 1], 10) && n.push(e.payload) }) }), n.length)) { var r = [],
                                    o = e.payloads.split(" ");
                                o && o.length && o.map(function (e) { n.map(function (t) { e === t && r.push(e) }) }), r.length && (e.payloads = r.join(" ")), e.fmtp = i(e.fmtp, n), e.rtcpFb = i(e.rtcpFb, n), e.rtp = i(e.rtp, n) } }), e }

                    function i(e, t) { var n = []; if (e.map(function (e) { t.map(function (t) { e.payload === t && n.push(e) }) }), n.length) return n }
                    WEBRTCLOG.log("deleteCodec: Invalid Argument") }, limitFrame: function (e) { return e.map(function (e) { /42e01f/gi.test(e.config) && (e.config += ";max-fs=12288") }), e }, setMediaBitrates: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.sdp,
                        n = e.bit,
                        i = void 0 === n ? {} : n,
                        r = i.video,
                        o = void 0 === r ? 500 : r,
                        s = i.audio,
                        c = void 0 === s ? 500 : s,
                        u = a.parse(t); return u.media && u.media.map(function (e) { e.bandwidth = [{ type: navigator.mozGetUserMedia ? "TIAS" : "AS", limit: "audio" === e.type ? c : o }] }), a.write(u) }, formatSSRCChrome: function (e, t, n) { return e.map(function (e, i) { return e.id = t + "0" + n + "0" + Math.floor(i / 4), e.id -= 0, e }) }, formatSSRCFirefox: function (e, t, n) { return e.map(function (e, i) { return e.id = t + "0" + n + "0" + Math.floor(i / 4), e.id -= 0, e }) }, formatSdpRemote: function (e, t, n) { return /Chrome/gi.test(navigator.userAgent) ? this.formatSdpRemoteChrome(e, t, n) : this.formatSdpRemoteFirefox(e, t) }, formatSdpRemoteChrome: function (e, t) { return -1 === (e = e.replace(/a=msid:.+\r\na=ssrc:\d+ cname:.+/gi, function (e) { var t = e.match(/a=ssrc:(\d+)/),
                            n = e.match(/a=msid:(.+) (.+)/); return t[1] && (e = e.replace("a=msid", "a=ssrc:" + t[1] + " msid")), n[1] && t[1] && (e = e + "\r\na=ssrc:" + t[1] + " mslabel:" + n[1]), n[2] && t[1] && (e = e + "\r\na=ssrc:" + t[1] + " label:" + n[2]), e })).indexOf("b=AS:1024") && t && (e += "b=AS:1024\r\n"), WEBRTCLOG.log("formated: \n", e), e }, formatSdpRemoteFirefox: function (e, t) { if (e = e.replace(/\r\na=msid:.+\r\na=ssrc:\d+ cname:.+/gi, function (e) { var t = e.match(/\r\na=ssrc:\d+ cname:.+/); return e = (e = e.replace(/a=ssrc:\d+ cname:.+/, "")).replace("a=msid", t[0] + "\r\na=msid") }), t && t.sdp) { var n = a.parse(e),
                            i = a.parse(t.sdp);
                        n.media.length, i.media.length } return WEBRTCLOG.log("formated: \n", e), e }, parse: function (e) { var t = a.parse(e);
                    WEBRTCLOG.log("原始sdp\n", e), WEBRTCLOG.log(t) }, updateMediaStream: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return e.fn = "updateMediaStream", this.fnShake(e) }, _updateMediaStream: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    WEBRTCLOG.log("_updateMediaStream"); var t = e.peer,
                        n = e.currStream,
                        i = e.streams,
                        r = void 0 === i ? [] : i,
                        o = this.checkCurrStream(t),
                        a = {},
                        c = t,
                        u = n || new MediaStream;
                    r.map(function (e) { e.getTracks().map(function (e) { a[e.id] = e }) }); var l = Object.keys(o.tracks).filter(function (e) { return !a[e] });
                    WEBRTCLOG.log("webrtc-rtc::获取移除的列表", l); var d = Object.keys(a).filter(function (e) { return !o.tracks[e] }); return WEBRTCLOG.log("webrtc-rtc::获取新加的列表", d), l && l.map(function (e) { var n = o.tracks[e].sender,
                            i = o.tracks[e].track; if (i && WEBRTCLOG.log("remove old track ", i.id), "Firefox" === s.prefix) { var r = "audio" === i.kind ? t.audioSender : t.videoSender;
                            r && r.replaceTrack(null) } else c.removeTrack(n);
                        u.removeTrack(i) }), d && d.map(function (e) { var n = a[e];
                        WEBRTCLOG.log("add new track: ", n && n.id), u.addTrack(n), "Firefox" === s.prefix ? "audio" === n.kind ? t.audioSender ? t.audioSender.replaceTrack(n) : t.audioSender = c.addTrack(n, u) : "video" === n.kind && (t.videoSender ? (WEBRTCLOG.info("open the camera"), t.videoSender.replaceTrack(n)) : t.videoSender = c.addTrack(n, u)) : c.addTrack(n, u) }), this.checkCurrStream(t), Promise.resolve(u) }, removeTrack: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.peer,
                        n = e.currStream,
                        i = e.tracks,
                        r = void 0 === i ? [] : i; if (0 !== r.length) { var o = this.checkCurrStream(t);
                        r.map(function (e) { o.tracks[e.id] && (WEBRTCLOG.log("====remove track", e, e.readyState, o.tracks[e.id].sender), n.removeTrack(e), t.removeTrack(o.tracks[e.id].sender)) }) } }, checkCurrStream: function (e) { var t = {},
                        n = [],
                        i = e.getSenders(); return i && i.map(function (e) { var i = e.track;
                        i ? (t[i.id] = { sender: e, track: i }, WEBRTCLOG.log(" --\x3e track id:", i.kind + ":" + i.id)) : n.push(e) }), { tracks: t, empty: n } }, checkMediaStatus: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.videoTrack,
                        n = e.sdp,
                        i = (e.uid, { video: !1 }); return i.video = new RegExp(t.id).test(n), WEBRTCLOG.log("checkMediaStatus ----\x3e result", i), i }, validMediaStream: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.sdp,
                        n = e.msid,
                        i = e.trackid; if (!n || !i) return !1; var r = !1; return n && (r = new RegExp(n).test(t)), r ? (i && (r = new RegExp(i).test(t)), r) : r } }, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = r; var i = n(78).RtcSupport.checkWebAudio();

            function r() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.stream,
                    n = e.uid,
                    r = e.isAnalyze,
                    o = e.isRemote;
                this.support = i.WebAudio && i.MediaStream, this.gain = 1, this.stream = t, this.support && (this.audioIn = {}, this.uid = n || 0, this.isAnalyze = r, this.isRemote = o || !1, this.instant = 0, this.slow = 0, this.clip = 0, this.init()) }
            r.ac = i.WebAudio && i.MediaStream ? new window.AudioContext : {}, r.destination = r.ac.createMediaStreamDestination ? r.ac.createMediaStreamDestination() : {}; var o = r.prototype;
            o.context = r.ac, o.init = function () { this.validateInput() && (this.isAnalyze && this.initMonitor(), this.formatStreams(), this.initWebAudio(), this.initAudioIn()) }, o.validateInput = function () { return /(Array|MediaStream|LocalMediaStream)/.test(this.stream.constructor) }, o.initMonitor = function () { var e = this;
                (this.script = this.context.createScriptProcessor(0, 1, 1)).onaudioprocess = function (t) { var n, i = t.inputBuffer.getChannelData(0),
                        r = 0,
                        o = 0; for (n = 0; n < i.length; ++n) r += Math.abs(i[n]), Math.abs(i[n]) > .99 && (o += 1);
                    e.instant = Math.sqrt(r / i.length), e.slow = .95 * e.slow + .05 * e.instant, e.clip = o / i.length } }, o.initWebAudio = function () { var e = this.context;
                this.gainFilter = e.createGain(), this.destination = this.isRemote ? r.destination : e.createMediaStreamDestination(), this.gainFilter.gain.value = this.gain, this.gainFilter.connect(this.destination) }, o.initAudioIn = function () { var e = this,
                    t = this,
                    n = this.stream,
                    i = this.context,
                    r = void 0; if (/(MediaStream|LocalMediaStream)/.test(n.constructor)) return o(n), void(this.outputStream = this.destination.stream);

                function o(e) { if (!/(MediaStream|LocalMediaStream)/.test(e.constructor)) return null; if (0 === e.getAudioTracks().length) return null; var n = i.createMediaStreamSource(e); return t.isAnalyze && t.script && (n.connect(t.script), t.script.connect(t.gainFilter)), n.connect(t.gainFilter), n }
                n.constructor === Array && (n.forEach(function (t) {
                    (r = o(t)) && (e.audioIn[t.id] = r) }), this.outputStream = this.destination.stream) }, o.formatStreams = function () { var e = this.stream,
                    t = []; if (/(MediaStream|LocalMediaStream)/.test(e.constructor)) return e.getAudioTracks().map(function (e) { t.push(new MediaStream([e])) }), void(this.stream = t);
                e.constructor === Array && (e.map(function (e) { e.getAudioTracks().map(function (e) { t.push(new MediaStream([e])) }) }), this.stream = t) }, o.addStream = function (e) { var t = this.context; if (0 !== e.getAudioTracks().length) { var n = t.createMediaStreamSource(e);
                    this.isAnalyze && this.script && n.connect(this.script), n.connect(this.gainFilter), this.audioIn[e.id] = n, this.outputStream = this.destination.stream } }, o.updateStream = function (e) { if (this.audioIn)
                    for (var t in this.audioIn) this.audioIn[t] && this.audioIn[t].disconnect(0), this.audioIn[t] = null;
                this.audioIn = {}, this.stream = e, this.initAudioIn() }, o.setGain = function (e) { this.support && (this.gainFilter.gain.value = e, this.gain = e) }, o.getGain = function () { return this.gain }, o.off = function () { return this.setGain(0) }, o.on = function () { this.setGain(1) }, o.destroy = function () { if (this.instant = 0, this.slow = 0, this.clip = 0, this.gainFilter && this.gainFilter.disconnect(0), this.script && this.script.disconnect(0), this.audioIn)
                    for (var e in this.audioIn) this.audioIn[e] && this.audioIn[e].disconnect(0);
                this.audioIn = {}; var t = this.stream;

                function n(e) { e && e.getTracks().forEach(function (t) { e.removeTrack(t) }) } /(MediaStream|LocalMediaStream)/.test(t.constructor) && n(t), t.constructor === Array && t.forEach(function (e) { n(e) }), this.stream = null, this.outputStream = null }, o.getVolumeData = function () { return this.instant.toFixed(2) }, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = c(n(1)),
                r = c(n(4)),
                o = c(n(3)),
                a = c(n(2)),
                s = c(n(199));

            function c(e) { return e && e.__esModule ? e : { default: e } } var u = n(10),
                l = function (e) {
                    function t() {
                        (0, i.default)(this, t); var e = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.recordedChunks = [], e.isRecording = !1, e.contentTypes = ["video/mp4;codecs=opus", "video/webm", "video/webm;codecs=h264", "video/x-matroska;codecs=opus", "video/invalid"], e } return (0, a.default)(t, e), (0, r.default)(t, [{ key: "validation", value: function (e) { return e.filter(function (e) { return MediaRecorder.isTypeSupported(e) }) } }, { key: "format", value: function () { var e = this,
                                t = this.stream,
                                n = this.option; return new Promise(function (i, r) { if (/(MediaStream)/.test(t.constructor) && (t = [t]), t.constructor !== Array) return r("音视频录制输入错误"); if ("audio" === n.type) return e.audioController = new s.default({ stream: t, uid: e.uid }), e.opStream = e.audioController.outputStream, i(); var o = new MediaStream; if (t.forEach(function (e) { e && /(MediaStream)/.test(e.constructor) && e.getTracks().forEach(function (e) { o.addTrack(e) }) }), 0 === o.getTracks().length) return r("当前没有任何音视频数据，无法进行录制");
                                e.opStream = o, i() }) } }, { key: "start", value: function (e) { var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { type: "video" }; return n.uid || n.account ? e ? window.MediaRecorder && MediaRecorder.isTypeSupported ? (this.stream = e, this.option = n, "audio" === n.type && (this.contentTypes = ["audio/wav", "audio/ogg", "audio/pcm", "audio/webm"]), (this.mimeType = this.validation(this.contentTypes)[0]) ? this.isRecording ? Promise.reject("音视频正在录制中，请勿重复操作") : this.format().then(function () { return t._start() }).catch(function (e) { return Promise.reject(e) }) : Promise.reject("当前浏览器不支持对应格式的视频录制")) : Promise.reject("当前浏览器不支持音视频录制功能") : Promise.reject("获取视频流失败") : Promise.reject("需要录制的帐号缺失") } }, { key: "_start", value: function () { var e = { audioBitsPerSecond: 128e3, videoBitsPerSecond: 25e5, mimeType: this.mimeType },
                                t = this.recorder = new MediaRecorder(this.opStream, e); return t.ondataavailable = this.ondataavailable.bind(this), t.onstop = this.onstop.bind(this), this.isRecording = !0, this.status = "started", this.recorder.start(), this.startTimer(), Promise.resolve(this.option) } }, { key: "stop", value: function (e) { if (!this.isRecording || !this.recorder) return Promise.reject("请先开启音视频录制"); if (this.status = "stopped", WEBRTCLOG.log("MediaRecorder: stop event", this.recorder.state), "inactive" === this.recorder.state) return WEBRTCLOG.warn("MediaRecorder already stopped:", this.recorder.state), Promise.reject("音视频录制已结束，请勿重复操作"); var t = (this.option.account || this.option.uid) + "--" + Date.now() + "--" + (this.option.type || "video"); return this.fileName = e || t, this.recorder.stop(), Promise.resolve() } }, { key: "leave", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (this.isRecording && this.recorder) { var t = e.uid;
                                t && this.option && this.option && t == this.option.uid && this.stop() } } }, { key: "ondataavailable", value: function (e) { if (WEBRTCLOG.log("MediaRecorder: data received"), !(e.data.size > 0)) return this.stop(), Promise.reject("获取视频流失败");
                            this.recordedChunks.push(e.data) } }, { key: "onstop", value: function () { if (WEBRTCLOG.log("MediaRecorder: onstop"), "stopped" !== this.status) return this._start(); var e = new Blob(this.recordedChunks, { type: this.mimeType }),
                                t = URL.createObjectURL(e),
                                n = document.createElement("a");
                            document.body.appendChild(n), n.style = "display: none", n.href = t, n.download = (this.fileName || Date.now()) + ".webm", n.click(), window.URL.revokeObjectURL(t), this.destroy(), this.clearTimer(), this.emit("stopRecord") } }, { key: "pause", value: function () { this.recorder && this.recorder.pause() } }, { key: "resume", value: function () { this.recorder && this.recorder.resume() } }, { key: "destroy", value: function () { this.stream = null, this.recorder = null, this.recordedChunks = [], this.isRecording = !1, this.audioController && this.audioController.destroy(), this.audioController = null, this.fileName = this.fileNameDefault = "", this.option = {}, this.status = "" } }, { key: "startTimer", value: function () { var e = this;
                            this.timer || (this.timer = setInterval(function () { WEBRTCLOG.log((new Date).toLocaleString() + " --\x3e MediaRecorder status: " + e.recorder.state) }, 2e3)) } }, { key: "clearTimer", value: function () { this.timer && (clearInterval(this.timer), this.timer = null) } }], [{ key: "init", value: function (e) { e || window.Logger } }]), t }(u);
            t.default = l, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = u(n(83)),
                r = u(n(82)),
                o = u(n(1)),
                a = u(n(3)),
                s = u(n(2)),
                c = u(n(114));

            function u(e) { return e && e.__esModule ? e : { default: e } } var l = function (e) {
                function t() {
                    (0, o.default)(this, t); var e = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.init(), e } return (0, s.default)(t, e), t }(n(10));
            t.default = l; var d = l.prototype;
            d.init = function () { if (this.getDevices().catch(function (e) { WEBRTCLOG.warn(e) }), navigator.mediaDevices && navigator.mediaDevices.addEventListener) { var e = void 0,
                        t = this;
                    navigator.mediaDevices.ondevicechange = function (n) { e && (clearTimeout(e), e = null); var i = Object.assign({}, t.devicesCache);
                        e = setTimeout(function () { e = null, t.getDevices(!0).then(function () { t.emit("deviceStatus", t.devicesCache), t.filterDeviceChange(t.devicesCache, i) }).catch(function () {}) }, 500) } } }, d.filterDeviceChange = function (e, t) {
                function n(e) { var t = {}; return Object.keys(e).forEach(function (n) { e[n].forEach(function (e) { t[n + e.deviceId] = Object.assign({}, e, { type: n }) }) }), t } var i = n(e),
                    r = n(t),
                    o = Object.keys(i),
                    a = Object.keys(r); if (o.length > a.length) { var s = [];
                    o.forEach(function (e) {-1 === a.indexOf(e) && s.push(i[e]) }), s.length && this.emit("deviceAdd", s) } else { var c = [];
                    a.forEach(function (e) {-1 === o.indexOf(e) && c.push(r[e]) }), c.length && this.emit("deviceRemove", c) } }, d.getDevicesOfType = function (e) { return void 0 !== e ? this.getDevices().then(function (t) { return t[e] }) : this.getDevices() }, d.getDevices = function (e) { var t = this,
                    n = void 0; return !e && this.devicesCache ? Promise.resolve(this.devicesCache) : new Promise(function (e, o) { var a = this;
                    (0, r.default)(i.default.mark(function r() { return i.default.wrap(function (i) { for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, c.default.getDevices().catch(function (e) { return o(e) });
                                case 2:
                                    if (n = i.sent) { i.next = 5; break } return i.abrupt("return", o("没有找到可用设备"));
                                case 5:
                                    return t.devicesCache = n, i.abrupt("return", e(n));
                                case 7:
                                case "end":
                                    return i.stop() } }, r, a) }))() }) }, d.getDeviceStatus = function () { return { hasAudio: this.devicesCache && this.devicesCache.audioIn.length > 0 || !1, hasVideo: this.devicesCache && this.devicesCache.video.length > 0 || !1 } }, e.exports = t.default }, function (e, t, n) { "use strict"; var i = n(16),
                r = n(113),
                o = n(145);
            i(i.S, "Promise", { try: function (e) { var t = r.f(this),
                        n = o(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } }) }, function (e, t, n) { "use strict"; var i = n(16),
                r = n(7),
                o = n(8),
                a = n(147),
                s = n(144);
            i(i.P + i.R, "Promise", { finally: function (e) { var t = a(this, r.Promise || o.Promise),
                        n = "function" == typeof e; return this.then(n ? function (n) { return s(t, e()).then(function () { return n }) } : e, n ? function (n) { return s(t, e()).then(function () { throw n }) } : e) } }) }, function (e, t, n) { "use strict"; var i = n(8),
                r = n(7),
                o = n(12),
                a = n(14),
                s = n(6)("species");
            e.exports = function (e) { var t = "function" == typeof r[e] ? r[e] : i[e];
                a && t && !t[s] && o.f(t, s, { configurable: !0, get: function () { return this } }) } }, function (e, t, n) { var i = n(19);
            e.exports = function (e, t, n) { for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]); return e } }, function (e, t, n) { var i = n(8),
                r = n(146).set,
                o = i.MutationObserver || i.WebKitMutationObserver,
                a = i.process,
                s = i.Promise,
                c = "process" == n(33)(a);
            e.exports = function () { var e, t, n, u = function () { var i, r; for (c && (i = a.domain) && i.exit(); e;) { r = e.fn, e = e.next; try { r() } catch (i) { throw e ? n() : t = void 0, i } }
                    t = void 0, i && i.enter() }; if (c) n = function () { a.nextTick(u) };
                else if (!o || i.navigator && i.navigator.standalone)
                    if (s && s.resolve) { var l = s.resolve();
                        n = function () { l.then(u) } } else n = function () { r.call(i, u) };
                else { var d = !0,
                        f = document.createTextNode("");
                    new o(u).observe(f, { characterData: !0 }), n = function () { f.data = d = !d } } return function (i) { var r = { fn: i, next: void 0 };
                    t && (t.next = r), e || (e = r, n()), t = r } } }, function (e, t) { e.exports = function (e, t, n) { var i = void 0 === n; switch (t.length) {
                    case 0:
                        return i ? e() : e.call(n);
                    case 1:
                        return i ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) } }, function (e, t, n) { var i = n(36),
                r = n(134),
                o = n(133),
                a = n(15),
                s = n(68),
                c = n(111),
                u = {},
                l = {};
            (t = e.exports = function (e, t, n, d, f) { var p, h, m, v, g = f ? function () { return e } : c(e),
                    y = i(n, d, t ? 2 : 1),
                    _ = 0; if ("function" != typeof g) throw TypeError(e + " is not iterable!"); if (o(g)) { for (p = s(e.length); p > _; _++)
                        if ((v = t ? y(a(h = e[_])[0], h[1]) : y(e[_])) === u || v === l) return v } else
                    for (m = g.call(e); !(h = m.next()).done;)
                        if ((v = r(m, y, h.value, t)) === u || v === l) return v }).BREAK = u, t.RETURN = l }, function (e, t) { e.exports = function (e, t, n, i) { if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!"); return e } }, function (e, t, n) { "use strict"; var i, r, o, a, s = n(35),
                c = n(8),
                u = n(36),
                l = n(79),
                d = n(16),
                f = n(18),
                p = n(55),
                h = n(209),
                m = n(208),
                v = n(147),
                g = n(146).set,
                y = n(206)(),
                _ = n(113),
                S = n(145),
                b = n(144),
                C = c.TypeError,
                w = c.process,
                T = c.Promise,
                k = "process" == l(w),
                x = function () {},
                O = r = _.f,
                A = !! function () { try { var e = T.resolve(1),
                            t = (e.constructor = {})[n(6)("species")] = function (e) { e(x, x) }; return (k || "function" == typeof PromiseRejectionEvent) && e.then(x) instanceof t } catch (e) {} }(),
                E = function (e) { var t; return !(!f(e) || "function" != typeof (t = e.then)) && t },
                I = function (e, t) { if (!e._n) { e._n = !0; var n = e._c;
                        y(function () { for (var i = e._v, r = 1 == e._s, o = 0, a = function (t) { var n, o, a, s = r ? t.ok : t.fail,
                                        c = t.resolve,
                                        u = t.reject,
                                        l = t.domain; try { s ? (r || (2 == e._h && L(e), e._h = 1), !0 === s ? n = i : (l && l.enter(), n = s(i), l && (l.exit(), a = !0)), n === t.promise ? u(C("Promise-chain cycle")) : (o = E(n)) ? o.call(n, c, u) : c(n)) : u(i) } catch (e) { l && !a && l.exit(), u(e) } }; n.length > o;) a(n[o++]);
                            e._c = [], e._n = !1, t && !e._h && P(e) }) } },
                P = function (e) { g.call(c, function () { var t, n, i, r = e._v,
                            o = M(e); if (o && (t = S(function () { k ? w.emit("unhandledRejection", r, e) : (n = c.onunhandledrejection) ? n({ promise: e, reason: r }) : (i = c.console) && i.error && i.error("Unhandled promise rejection", r) }), e._h = k || M(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v }) },
                M = function (e) { return 1 !== e._h && 0 === (e._a || e._c).length },
                L = function (e) { g.call(c, function () { var t;
                        k ? w.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
                R = function (e) { var t = this;
                    t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0)) },
                D = function (e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw C("Promise can't be resolved itself");
                            (t = E(e)) ? y(function () { var i = { _w: n, _d: !1 }; try { t.call(e, u(D, i, 1), u(R, i, 1)) } catch (e) { R.call(i, e) } }): (n._v = e, n._s = 1, I(n, !1)) } catch (e) { R.call({ _w: n, _d: !1 }, e) } } };
            A || (T = function (e) { h(this, T, "Promise", "_h"), p(e), i.call(this); try { e(u(D, this, 1), u(R, this, 1)) } catch (e) { R.call(this, e) } }, (i = function (e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = n(205)(T.prototype, { then: function (e, t) { var n = O(v(this, T)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = k ? w.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise }, catch: function (e) { return this.then(void 0, e) } }), o = function () { var e = new i;
                this.promise = e, this.resolve = u(D, e, 1), this.reject = u(R, e, 1) }, _.f = O = function (e) { return e === T || e === a ? new o(e) : r(e) }), d(d.G + d.W + d.F * !A, { Promise: T }), n(34)(T, "Promise"), n(204)("Promise"), a = n(7).Promise, d(d.S + d.F * !A, "Promise", { reject: function (e) { var t = O(this); return (0, t.reject)(e), t.promise } }), d(d.S + d.F * (s || !A), "Promise", { resolve: function (e) { return b(s && this === a ? T : this, e) } }), d(d.S + d.F * !(A && n(132)(function (e) { T.all(e).catch(x) })), "Promise", { all: function (e) { var t = this,
                        n = O(t),
                        i = n.resolve,
                        r = n.reject,
                        o = S(function () { var n = [],
                                o = 0,
                                a = 1;
                            m(e, !1, function (e) { var s = o++,
                                    c = !1;
                                n.push(void 0), a++, t.resolve(e).then(function (e) { c || (c = !0, n[s] = e, --a || i(n)) }, r) }), --a || i(n) }); return o.e && r(o.v), n.promise }, race: function (e) { var t = this,
                        n = O(t),
                        i = n.reject,
                        r = S(function () { m(e, !1, function (e) { t.resolve(e).then(n.resolve, i) }) }); return r.e && i(r.v), n.promise } }) }, function (e, t, n) { n(74), n(49), n(54), n(210), n(203), n(202), e.exports = n(7).Promise }, function (e, t, n) { e.exports = { default: n(211), __esModule: !0 } }, function (e, t) {! function (t) { "use strict"; var n, i = Object.prototype,
                    r = i.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag",
                    u = "object" == typeof e,
                    l = t.regeneratorRuntime; if (l) u && (e.exports = l);
                else {
                    (l = t.regeneratorRuntime = u ? e.exports : {}).wrap = S; var d = "suspendedStart",
                        f = "suspendedYield",
                        p = "executing",
                        h = "completed",
                        m = {},
                        v = {};
                    v[a] = function () { return this }; var g = Object.getPrototypeOf,
                        y = g && g(g(P([])));
                    y && y !== i && r.call(y, a) && (v = y); var _ = T.prototype = C.prototype = Object.create(v);
                    w.prototype = _.constructor = T, T.constructor = w, T[c] = w.displayName = "GeneratorFunction", l.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name)) }, l.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, T) : (e.__proto__ = T, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(_), e }, l.awrap = function (e) { return { __await: e } }, k(x.prototype), x.prototype[s] = function () { return this }, l.AsyncIterator = x, l.async = function (e, t, n, i) { var r = new x(S(e, t, n, i)); return l.isGeneratorFunction(t) ? r : r.next().then(function (e) { return e.done ? e.value : r.next() }) }, k(_), _[c] = "Generator", _[a] = function () { return this }, _.toString = function () { return "[object Generator]" }, l.keys = function (e) { var t = []; for (var n in e) t.push(n); return t.reverse(),
                            function n() { for (; t.length;) { var i = t.pop(); if (i in e) return n.value = i, n.done = !1, n } return n.done = !0, n } }, l.values = P, I.prototype = { constructor: I, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(E), !e)
                                for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n) }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function (e) { if (this.done) throw e; var t = this;

                            function i(i, r) { return s.type = "throw", s.arg = e, t.next = i, r && (t.method = "next", t.arg = n), !!r } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var a = this.tryEntries[o],
                                    s = a.completion; if ("root" === a.tryLoc) return i("end"); if (a.tryLoc <= this.prev) { var c = r.call(a, "catchLoc"),
                                        u = r.call(a, "finallyLoc"); if (c && u) { if (this.prev < a.catchLoc) return i(a.catchLoc, !0); if (this.prev < a.finallyLoc) return i(a.finallyLoc) } else if (c) { if (this.prev < a.catchLoc) return i(a.catchLoc, !0) } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < a.finallyLoc) return i(a.finallyLoc) } } } }, abrupt: function (e, t) { for (var n = this.tryEntries.length - 1; n >= 0; --n) { var i = this.tryEntries[n]; if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) { var o = i; break } }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null); var a = o ? o.completion : {}; return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a) }, complete: function (e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), m } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var i = n.completion; if ("throw" === i.type) { var r = i.arg;
                                        E(n) } return r } } throw new Error("illegal catch attempt") }, delegateYield: function (e, t, i) { return this.delegate = { iterator: P(e), resultName: t, nextLoc: i }, "next" === this.method && (this.arg = n), m } } }

                function S(e, t, n, i) { var r = t && t.prototype instanceof C ? t : C,
                        o = Object.create(r.prototype),
                        a = new I(i || []); return o._invoke = function (e, t, n) { var i = d; return function (r, o) { if (i === p) throw new Error("Generator is already running"); if (i === h) { if ("throw" === r) throw o; return M() } for (n.method = r, n.arg = o;;) { var a = n.delegate; if (a) { var s = O(a, n); if (s) { if (s === m) continue; return s } } if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) { if (i === d) throw i = h, n.arg;
                                    n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg);
                                i = p; var c = b(e, t, n); if ("normal" === c.type) { if (i = n.done ? h : f, c.arg === m) continue; return { value: c.arg, done: n.done } } "throw" === c.type && (i = h, n.method = "throw", n.arg = c.arg) } } }(e, n, a), o }

                function b(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }

                function C() {}

                function w() {}

                function T() {}

                function k(e) {
                    ["next", "throw", "return"].forEach(function (t) { e[t] = function (e) { return this._invoke(t, e) } }) }

                function x(e) { var t;
                    this._invoke = function (n, i) {
                        function o() { return new Promise(function (t, o) {! function t(n, i, o, a) { var s = b(e[n], e, i); if ("throw" !== s.type) { var c = s.arg,
                                            u = c.value; return u && "object" == typeof u && r.call(u, "__await") ? Promise.resolve(u.__await).then(function (e) { t("next", e, o, a) }, function (e) { t("throw", e, o, a) }) : Promise.resolve(u).then(function (e) { c.value = e, o(c) }, a) }
                                    a(s.arg) }(n, i, t, o) }) } return t = t ? t.then(o, o) : o() } }

                function O(e, t) { var i = e.iterator[t.method]; if (i === n) { if (t.delegate = null, "throw" === t.method) { if (e.iterator.return && (t.method = "return", t.arg = n, O(e, t), "throw" === t.method)) return m;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method") } return m } var r = b(i, e.iterator, t.arg); if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, m; var o = r.arg; return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, m) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m) }

                function A(e) { var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

                function E(e) { var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t }

                function I(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(A, this), this.reset(!0) }

                function P(e) { if (e) { var t = e[a]; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var i = -1,
                                o = function t() { for (; ++i < e.length;)
                                        if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
                                    return t.value = n, t.done = !0, t }; return o.next = o } } return { next: M } }

                function M() { return { value: n, done: !0 } } }(function () { return this }() || Function("return this")()) }, function (e, t, n) { var i = function () { return this }() || Function("return this")(),
                r = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
                o = r && i.regeneratorRuntime; if (i.regeneratorRuntime = void 0, e.exports = n(213), r) i.regeneratorRuntime = o;
            else try { delete i.regeneratorRuntime } catch (e) { i.regeneratorRuntime = void 0 } }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(114);
            Object.defineProperty(t, "Device", { enumerable: !0, get: function () { return a(i).default } }); var r = n(201);
            Object.defineProperty(t, "MDevices", { enumerable: !0, get: function () { return a(r).default } }); var o = n(200);

            function a(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(t, "Recorder", { enumerable: !0, get: function () { return a(o).default } }) }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(n(1)),
                r = a(n(4)),
                o = n(31);

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = n(5),
                c = s.info.nrtcVersion,
                u = n(21),
                l = "//statistic.live.126.net/webrtc/stat",
                d = function () {
                    function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, i.default)(this, e); var n = t.appkey;
                        this.infos = {}, this.init(n), this.resetStatus() } return (0, r.default)(e, [{ key: "resetStatus", value: function () {} }, { key: "init", value: function (e) { this.infos = Object.assign(this.infos, { interval: 30, ver: 2, platform: f.convertPlatform(u.os.family) + "-" + u.os.version, browser: u.name + "-" + u.version, sdk_ver: c || "3.6.0", uid: null, appkey: e, time: null, data: {} }) } }, { key: "clear", value: function () { this.infos.data = {} } }, { key: "start", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.infos.appkey = e.appKey || e.appkey || this.infos.appkey, this.infos.cid = e.cid, this.infos.uid = e.uid } }, { key: "stop", value: function () { this.clear() } }, { key: "update", value: function (e) { this.infos.data["stat_" + Date.now()] = e, Object.keys(this.infos.data).length === this.infos.interval && this.send() } }, { key: "send", value: function () { var e = this;
                            0 !== Object.keys(this.infos.data).length && (this.infos.time = Date.now(), s.wssServer && (l = l.replace("statistic.live.126.net", s.wssServer)), (0, o.ajax)({ type: "post", url: l, data: this.infos }).then(function (t) { e.clear() }).catch(function (e) { WEBRTCLOG.log("err", e) })) } }]), e }();
            t.default = d; var f = { convertNetwork: function (e) { return { wlan: "wifi", lan: "ethernet" }[e] || "unknown" }, convertPlatform: function (e) { var t = void 0; return t = /Windows/i.test(e) ? "Win" : e, t = /OS X/i.test(t) ? "Mac" : t } };
            e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(n(1)),
                r = a(n(4)),
                o = n(31);

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = n(5),
                c = s.info.nrtcVersion,
                u = n(21),
                l = "https://statistic.live.126.net/statistic/realtime/sdkinfo",
                d = "https://statistic.live.126.net/statics/report/webrtc/networkProbeLog",
                f = function () {
                    function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, i.default)(this, e); var n = t.appkey;
                        this.infos = {}, this.userlist = [], this.localVolumn = 0, this.local = {}, this.remote = {}, this.audioBwe = { bitsSentCurrent: 0, bitsRecvCurrent: [] }, this.videoBwe = { bitsSentCurrent: 0, bitsRecvCurrent: [] }, this.netDetectDownData = { v_lost: [], rtt: [], real_v_res: [], real_v_kbps_n: [], v_fps: [] }, this.publicIP = "", this.init(n), this.resetStatus() } return (0, r.default)(e, [{ key: "init", value: function (e) { this.infos = Object.assign(this.infos, { ver: 2, device: -1, isp: -1, platform: p.convertPlatform(u.os.family) + "-" + u.os.version, browser: u.name + "-" + u.version, sdk_ver: c || "3.6.0", appkey: e, interval: 60, samples: 30, time: null, qos_algorithm: -1, fec_algorithm: -1, qos_scene: -1, qos_strategy: -1 }) } }, { key: "resetStatus", value: function () { this.infos = Object.assign(this.infos, { uid: null, cid: null, push_url: null, turn_ip: null, proxy_ip: null, meeting: !1, live: !1 }), this.clearInfoData(), this.uidSsrcMap = {}, this.userlist = [], this.audioBwe = { bitsSentCurrent: 0, bitsRecvCurrent: [] }, this.videoBwe = { bitsSentCurrent: 0, bitsRecvCurrent: [] } } }, { key: "initInfoData", value: function (e) { var t = { uid: e, cid: this.imInfo && this.imInfo.cid || -1, push_url: this.sessionConfig && this.sessionConfig.rtmpUrl || -1, turn_ip: this.imInfo && this.imInfo.turnMap || -1, proxy_ip: this.imInfo && this.imInfo.turnMap || -1, meeting: /^meeting$/gi.test(this.imInfo.sessionMode), live: this.sessionConfig && this.sessionConfig.liveEnable || !1, p2p: !1, isp: -1, net: -1, connect_state: this.imInfo && this.imInfo.code || 200, signalling_time: (this.sessionConfig && this.sessionConfig.signalEndTime || 0) - (this.sessionConfig && this.sessionConfig.signalStartTime || 0), connect_time: (this.sessionConfig && this.sessionConfig.rtcEndTime || 0) - (this.sessionConfig && this.sessionConfig.rtcStartTime || 0) };
                            this.infos = Object.assign(this.infos, t) } }, { key: "clearInfoData", value: function () { this.localVolumn = 0, this.infos = Object.assign(this.infos, { rx: { audio: [], video: [] }, tx: { a_lost: [], v_lost: [], rtt: [], rtt_mdev: [], set_v_fps: [], qos_v_fps: [], v_fps: [], set_v_quality: [], real_v_res: [], real_v_kbps: [], real_v_kbps_n: [], real_a_kbps: [], real_a_kbps_n: [], set_v_kbps: [], qos_v_kbps: [], tx_bw_kbps: [], a_volume: [] } }) } }, { key: "start", value: function (e) { var t = e.imInfo,
                                n = e.sessionConfig,
                                i = e.videoConfig;
                            t && (this.infos.appkey = this.infos.appkey, this.imInfo = t || {}, this.infos.cid = this.imInfo.cid, this.infos.uid = this.imInfo.uid, this.sessionConfig = n || {}, this.videoConfig = i || {}, this.clearSecond(), this.getTurnMap(), this.initInfoData(this.infos.uid)) } }, { key: "stop", value: function () { this.resetStatus() } }, { key: "clearSecond", value: function () { this.paramSecond = { packetsLostAudio: "", packetsLostAudioList: [], packetsSentPerSecondAudio: [], packetsLostVideo: "", packetsLostVideoList: [], packetsSentPerSecondVideo: [], googInterframeDelayMaxList: [], vrdolr: "", vrdohr: "", downPacketsLostVideo: "", downPacketsLostVideoList: [], downPpacketsSentPerSecondVideo: [] } } }, { key: "update", value: function (e, t) { this.imInfo.netDetect && console.log("sdk数据上报更新 data: ", e); var n = [],
                                i = [],
                                r = [],
                                o = []; for (var a in e) - 1 !== a.indexOf("_send_") && -1 !== a.indexOf("_audio") ? n.push(e[a]) : -1 !== a.indexOf("_send_") && -1 !== a.indexOf("_video") ? i.push(e[a]) : -1 !== a.indexOf("_recv_") && -1 !== a.indexOf("_audio") ? r.push(e[a]) : -1 !== a.indexOf("_recv_") && -1 !== a.indexOf("_video") ? o.push(e[a]) : -1 !== a.indexOf("Conn-audio-1-0") ? this.publicIP = e[a] && e[a].googLocalAddress.match(/([0-9\.]+)/)[1] : this.network = e[a] && e[a].network; if (3 === this.paramSecond.packetsLostAudioList.length && this.paramSecond.packetsLostAudioList.shift(), 3 === this.paramSecond.packetsLostVideoList.length && this.paramSecond.packetsLostVideoList.shift(), 3 === this.paramSecond.packetsSentPerSecondAudio.length && this.paramSecond.packetsSentPerSecondAudio.shift(), 3 === this.paramSecond.packetsSentPerSecondVideo.length && this.paramSecond.packetsSentPerSecondVideo.shift(), 3 === this.paramSecond.googInterframeDelayMaxList.length && this.paramSecond.googInterframeDelayMaxList.shift(), this.paramSecond.packetsLostAudioList.push(parseFloat(n[0] && n[0].packetsLost || 0)), this.paramSecond.packetsLostVideoList.push(parseFloat(i[0] && i[0].packetsLost || 0)), this.paramSecond.downPacketsLostVideoList.push(parseFloat(o[0] && o[0].packetsLost || 0)), this.paramSecond.packetsSentPerSecondAudio.push(parseFloat(n[0] && n[0].packetsSent || 0)), this.paramSecond.packetsSentPerSecondVideo.push(parseFloat(i[0] && i[0].packetsSent || 0)), this.paramSecond.downPpacketsSentPerSecondVideo.push(parseFloat(o[0] && o[0].packetsReceived || 0)), this.paramSecond.googInterframeDelayMaxList.push(parseFloat(o[0] && o[0].googInterframeDelayMax || 0)), 1 !== t) { if (2 === t) { this.paramSecond.packetsLostAudio = (this.paramSecond.packetsLostAudioList[1] - this.paramSecond.packetsLostAudioList[0]) / (this.paramSecond.packetsSentPerSecondAudio[0] + this.paramSecond.packetsSentPerSecondAudio[1]) / 2 * 100, this.paramSecond.packetsLostVideo = ((this.paramSecond.packetsLostVideoList[1] - this.paramSecond.packetsLostVideoList[0]) / (this.paramSecond.packetsSentPerSecondVideo[0] + this.paramSecond.packetsSentPerSecondVideo[1]) / 2 * 100).toFixed(1), this.paramSecond.downPacketsLostVideo = (this.paramSecond.downPacketsLostVideoList[1] - this.paramSecond.downPacketsLostVideoList[0]) / (this.paramSecond.downPpacketsSentPerSecondVideo[0] + this.paramSecond.downPpacketsSentPerSecondVideo[1]) / 2 * 100; var s = 0,
                                        c = 0,
                                        u = 0,
                                        l = 0;
                                    this.paramSecond.googInterframeDelayMaxList[0] > 200 && this.paramSecond.googInterframeDelayMaxList[0] < 400 && (s = this.paramSecond.googInterframeDelayMaxList[0] / 2e3), this.paramSecond.googInterframeDelayMaxList[1] > 200 && this.paramSecond.googInterframeDelayMaxList[1] < 400 && (c = this.paramSecond.googInterframeDelayMaxList[1] / 2e3), this.paramSecond.googInterframeDelayMaxList[0] > 400 && (u = this.paramSecond.googInterframeDelayMaxList[0] / 2e3), this.paramSecond.googInterframeDelayMaxList[1] > 400 && (l = this.paramSecond.googInterframeDelayMaxList[0] / 2e3), this.paramSecond.vrdolr = s + c, this.paramSecond.vrdohr = u + l } else if (t % 2 == 1) { var d = this.paramSecond.packetsLostAudioList.length,
                                        f = this.paramSecond.packetsSentPerSecondAudio.length,
                                        p = this.paramSecond.packetsLostAudioList[d - 1],
                                        h = this.paramSecond.packetsSentPerSecondAudio[f - 1];
                                    this.paramSecond.packetsLostAudio = p / (p + h) * 100, d = this.paramSecond.packetsLostVideoList.length, f = this.paramSecond.packetsSentPerSecondVideo.length, p = this.paramSecond.packetsLostVideoList[d - 1], h = this.paramSecond.packetsSentPerSecondVideo[f - 1], this.paramSecond.packetsLostVideo = (p / (p + h) * 100).toFixed(1), d = this.paramSecond.downPacketsLostVideoList.length, f = this.paramSecond.downPpacketsSentPerSecondVideo.length, p = this.paramSecond.downPacketsLostVideoList[d - 1], h = this.paramSecond.downPpacketsSentPerSecondVideo[f - 1], this.paramSecond.downPacketsLostVideo = (p / (p + h) * 100).toFixed(1); var m = 0,
                                        v = 0,
                                        g = 0,
                                        y = 0;
                                    this.paramSecond.googInterframeDelayMaxList[1] > 200 && this.paramSecond.googInterframeDelayMaxList[1] < 400 && (m = this.paramSecond.googInterframeDelayMaxList[1] / 2e3), this.paramSecond.googInterframeDelayMaxList[2] > 200 && this.paramSecond.googInterframeDelayMaxList[2] < 400 && (v = this.paramSecond.googInterframeDelayMaxList[2] / 2e3), this.paramSecond.googInterframeDelayMaxList[1] > 400 && (g = this.paramSecond.googInterframeDelayMaxList[1] / 2e3), this.paramSecond.googInterframeDelayMaxList[2] > 400 && (y = this.paramSecond.googInterframeDelayMaxList[2] / 2e3), this.paramSecond.vrdolr = m + v, this.paramSecond.vrdohr = g + y }
                                t % 2 == 0 && (this.updateTxMediaInfo(n, i), this.updateRxMediaInfo(r, o), Object.keys(this.infos.rx.audio).length === this.infos.interval / 2 && this.send()) } } }, { key: "updateOnce", value: function (e) { var t = e.imInfo,
                                n = e.sessionConfig,
                                i = e.rtcConnection;
                            t && (this.imInfo = t || {}, this.sessionConfig = n || {}, this.rtcConnection = i || {}, this.videoConfig = e.videoConfig || {}, this.getTurnMap(), this.initInfoData(), this.send()) } }, { key: "updateLocalVolumn", value: function (e) { this.localVolumn = e } }, { key: "updateRxMediaInfo", value: function (e, t) { var n = this; if (this.imInfo.netDetect) { var i = { v_lost: this.paramSecond.downPacketsLostVideo || 0, rtt: parseFloat(t[0] && t[0].googRtt || 0) || 0, real_v_kbps_n: t.length && t[0].bitsReceivedPerSecond || 0, v_fps: parseFloat(t[0] && t[0].googFrameRateOutput || 0) || 0, real_v_res: (t[0] && t[0].googFrameWidthReceived || 0) + "x" + (t[0] && t[0].googFrameHeightReceived || 0) }; for (var r in i) this.netDetectDownData[r].push(i[r]) } var o = { u: [], g: [], c: [], bn: [], bc: [] },
                                a = { u: [], i: [], bn: [], bc: [], r: [], f: [], vrdolr: [], vrdohr: [] };
                            e.map(function (e) { e.id && o.u.push(parseFloat(e.id.split("_")[3])), o.g.push(-1), o.c.push(-1), o.bn.push(e.bitsReceivedPerSecond || 0), o.bc.push(-1) }), t.map(function (e) { e.id && a.u.push(parseFloat(e.id.split("_")[3])), a.i.push(parseFloat(e.googInterframeDelayMax)), a.bn.push(e.bitsReceivedPerSecond || 0), a.bc.push(-1), a.r.push((e.googFrameWidthReceived || 0) + "x" + (e.googFrameHeightReceived || 0)), a.f.push(parseFloat(e.googFrameRateReceived)), a.vrdolr.push(n.paramSecond.vrdolr || -1), a.vrdohr.push(n.paramSecond.vrdohr || -1) }), this.infos.rx.audio.push(o), this.infos.rx.video.push(a) } }, { key: "getLocalMediaStats", value: function (e, t) { return { a_lost: this.paramSecond.packetsLostAudio || 0, v_lost: parseFloat(this.paramSecond.packetsLostVideo) || 0, rtt: parseFloat(t[0] && t[0].googRtt || 0) || 0, rtt_mdev: -1, set_v_fps: this.videoConfig.frameRate || 0, qos_v_fps: parseFloat(t[0] && t[0].googFrameRateInput || 0) || 0, v_fps: parseFloat(t[0] && t[0].googFrameRateSent || 0) || 0, set_v_quality: this.sessionConfig.videoQuality, real_v_res: (t[0] && t[0].googFrameWidthSent || 0) + "x" + (t[0] && t[0].googFrameHeightSent || 0), real_v_kbps: parseFloat(t[0] && t[0].googEncodeUsagePercent || 0) || 0, real_v_kbps_n: t[0] && t[0].bitsSentPerSecond || 0, real_a_kbps: -1, real_a_kbps_n: t[0] && t[0].bitsSentPerSecond || 0, set_v_kbps: -1, qos_v_kbps: 0, tx_bw_kbps: t[0] && t[0].bitsSentPerSecond || 0, a_volume: parseFloat(this.localVolumn) || 0 } } }, { key: "updateTxMediaInfo", value: function (e, t) { var n = this.getLocalMediaStats(e, t); for (var i in n) this.infos.tx[i].push(n[i]); var r = ((navigator.connection || {}).type || "unknown").toString().toLowerCase();
                            this.infos.net = p.convertNetwork(this.network || r) } }, { key: "getTurnMap", value: function () { if (this.imInfo) { var e = this.imInfo;
                                e.serverMap && (e.serverMap.constructor === Object ? e.turnMap = e.serverMap || null : e.turnMap = JSON.parse(e.serverMap || null), e.turnMap = e.turnMap && e.turnMap.turnaddrs, e.turnMap = e.turnMap && e.turnMap[0], e.turnMap = e.turnMap.constructor === Array ? e.turnMap[0] : e.turnMap, e.turnMap = e.turnMap && e.turnMap.match(/\d+\.\d+.\d+\.\d+/), e.turnMap = e.turnMap[0]) } else WEBRTCLOG.warn("尚未连接网关，不统计") } }, { key: "send", value: function () { var e = this;
                            this.infos.uid && this.infos.cid && (this.imInfo.netDetect || (this.infos.time = Date.now(), this.infos.samples = this.infos.rx.audio.length, s.wssServer && (l = l.replace("statistic.live.126.net", s.wssServer)), (0, o.ajax)({ type: "post", url: l, data: this.infos }).then(function (t) { e.clearInfoData() }).catch(function (t) { WEBRTCLOG.log("data uploader send", t), e.clearInfoData() }))) } }, { key: "disposalDataForNetDetect", value: function (e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; return this.NetDetectData = {}, this.NetDetectData.cid = this.infos.cid, this.NetDetectData.user_ip = this.publicIP || "127.0.0.1", this.NetDetectData.browser = u.name + "-" + u.version, this.NetDetectData.server_ip = this.imInfo.wssArr && this.imInfo.wssArr.length && this.imInfo.wssArr[0], this.NetDetectData.upload_network_status = [], this.NetDetectData.download_network_status = [], this.imInfo.netDetect && (WEBRTCLOG.log("整理网络探测的数据: 计算RTT: ", this.infos.tx.rtt), WEBRTCLOG.log("整理网络探测的数据: 计算上行帧率: ", this.infos.tx.v_fps), WEBRTCLOG.log("整理网络探测的数据: 计算下行帧率: ", this.netDetectDownData.v_fps), WEBRTCLOG.log("整理网络探测的数据: 计算上行丢包率: ", this.infos.tx.v_lost), WEBRTCLOG.log("整理网络探测的数据: 计算下行丢包率: ", this.netDetectDownData.v_lost), WEBRTCLOG.log("整理网络探测的数据: 计算上行带宽: ", this.infos.tx.real_v_kbps_n), WEBRTCLOG.log("整理网络探测的数据: 计算下行带宽: ", this.netDetectDownData.real_v_kbps_n)), this.NetDetectData.upload_network_status.push({ up_rtt: p.getRealValue(this.infos.tx.rtt) || 0, up_loss: parseInt(p.getRealValue(this.infos.tx.v_lost)) || 0, up_bwe: p.calculateAverage(this.infos.tx.real_v_kbps_n, 0) || 0, up_framerate: p.getRealValue(this.infos.tx.v_fps) || 0, up_resolution: p.getRealValue(this.infos.tx.real_v_res) || "0x0", codec: this.imInfo.codec, network_status: "", up_status: t ? "success" : "failed" }), this.NetDetectData.download_network_status.push({ down_rtt: this.NetDetectData.upload_network_status[this.NetDetectData.upload_network_status.length - 1].up_rtt || 0, down_loss: parseInt(p.getRealValue(this.netDetectDownData.v_lost)) || 0, down_bwe: p.calculateAverage(this.netDetectDownData.real_v_kbps_n, 0) || 0, down_framerate: p.getRealValue(this.netDetectDownData.v_fps) || 0, down_resolution: p.getRealValue(this.netDetectDownData.real_v_res) || "0X0", codec: this.imInfo.codec, network_status: "", down_status: n ? "success" : "failed" }), e && (WEBRTCLOG.log("Safari自己计算的统计结果: ", JSON.stringify(this.NetDetectData, null, " ")), WEBRTCLOG.log("服务器反馈后的统计结果: ", JSON.stringify(e, null, " ")), this.NetDetectData.user_ip = e.user_ip, e.upload_network_status && (this.NetDetectData.upload_network_status[0].up_rtt = e.upload_network_status.up_rtt, this.NetDetectData.upload_network_status[0].up_loss = e.upload_network_status.up_loss), e.download_network_status && (this.NetDetectData.download_network_status[0].down_rtt = e.download_network_status.down_rtt), this.NetDetectData.download_network_status[0].down_rtt && this.NetDetectData.upload_network_status[0].up_rtt ? this.NetDetectData.download_network_status[0].down_rtt > this.NetDetectData.upload_network_status[0].up_rtt ? this.NetDetectData.download_network_status[0].down_rtt = this.NetDetectData.upload_network_status[0].up_rtt : this.NetDetectData.upload_network_status[0].up_rtt = this.NetDetectData.download_network_status[0].down_rtt : this.NetDetectData.download_network_status[0].down_rtt ? this.NetDetectData.upload_network_status[0].up_rtt = this.NetDetectData.download_network_status[0].down_rtt : this.NetDetectData.upload_network_status[0].up_rtt && (this.NetDetectData.download_network_status[0].down_rtt = this.NetDetectData.upload_network_status[0].up_rtt), this.NetDetectData.upload_network_status[0].up_framerate = p.calculateFrameRate(this.infos.tx.v_fps) || 0, this.NetDetectData.download_network_status[0].down_framerate = p.calculateFrameRate(this.netDetectDownData.v_fps) || 0, WEBRTCLOG.log("safar自己统计并且结合服务器反馈后的重合结果: ", JSON.stringify(this.NetDetectData, null, " "))), this.NetDetectData = p.assignResolution(this.NetDetectData), this.NetDetectData = this.computeNetStatus(this.NetDetectData), this.transportTime = 0, this.sendNetDetectData(this.NetDetectData), this.NetDetectData } }, { key: "computeNetStatus", value: function (e) { if (e) { if (e.download_network_status) { e.download_network_status[0].down_loss > e.upload_network_status[0].up_loss ? (e.loss_rate = e.download_network_status[0].down_loss, e.download_network_status[0].down_loss = e.download_network_status[0].down_loss - e.upload_network_status[0].up_loss) : e.download_network_status[0].down_loss - e.upload_network_status[0].up_loss <= 3 && e.download_network_status[0].down_loss - e.upload_network_status[0].up_loss >= -3 ? (WEBRTCLOG.log("差距少于等于3"), e.download_network_status[0].down_loss = 0, e.loss_rate = e.upload_network_status[0].up_loss) : (WEBRTCLOG.log("差距大"), e.download_network_status[0].down_loss = 0, e.loss_rate = e.upload_network_status[0].up_loss); var t = e.loss_rate / 20 * .5 + e.download_network_status[0].down_rtt / 1200 * .25 + 50 / 150 * .25;
                                    WEBRTCLOG.log("网络探测计算结果：", t), e.download_network_status[0].network_status = t <= .2625 ? "网络状况非常好，音视频通话流畅" : t < .55 ? "网络状况好，音视频通话偶有卡顿" : t <= 1 ? "网络状况差, 音频通话流畅" : "网络状况非常差，音频通话偶有卡顿", e.upload_network_status[0].up_bwe && e.upload_network_status[0].up_framerate && e.upload_network_status[0].up_rtt || (WEBRTCLOG.log("统计信息，没有获取到上行行带宽、帧率或者時延"), e.download_network_status[0].network_status = "网络状况非常糟糕，无法进行音视频通话"), e.upload_network_status[0].network_status = e.download_network_status[0].network_status } return e }
                            WEBRTCLOG.log("computeNetStatus: Invalid Parameter") } }, { key: "sendNetDetectData", value: function (e) { var t = this;
                            s.wssServer && (d = d.replace("statistic.live.126.net", s.wssServer)), (0, o.ajax)({ type: "post", url: d, data: e }).then(function (e) { e && e.code && 200 == e.code && console.warn("网络探测结果发送成功：", e) }).catch(function (e) { WEBRTCLOG.log("网络探测结果发送失败：", e), t.transportTime < 2 ? (t.sendNetDetectData(t.NetDetectData), t.transportTime++) : t.transportTime = 0 }) } }]), e }();
            t.default = f; var p = { convertNetwork: function (e) { return { wlan: "wifi", lan: "ethernet" }[e] || "unknown" }, convertPlatform: function (e) { var t = void 0; return t = /Windows/i.test(e) ? "Win" : e, t = /OS X/i.test(t) ? "Mac" : t }, calculateAverage: function (e, t) { if (e && 0 != e.length) return e.length < 3 && e.length > 1 ? e[e.length - 1] || e[e.length - 2] : 1 == e.length ? e[0] : ((e = e.slice(2)).sort(function (e, t) { return e - t }), 0 == t ? Math.round(e.reduce(n) / e.length) : (e.reduce(n) / e.length).toFixed(t));

                    function n(e, t) { return e + t } }, getRealValue: function (e) { if (e && 0 != e.length) { for (var t = e.length; t > 0; t--)
                            if (e[t]) return e[t];
                        return 0 } }, calculateFrameRate: function (e) { if (!e || 0 == e.length) return 0; if (1 == e.length) return e[0]; for (var t = null, n = null, i = e.length; i >= 0; i--) { if (n && n > e[i]) { t = e[i]; break }
                        e[i] && !n && (n = e[i]) } return n && t ? Math.round((n - t) / 2) : 0 }, assignResolution: function (e) { return e && e.upload_network_status && 0 != e.upload_network_status.length && e.download_network_status && 0 != e.download_network_status.length ? "0x0" != e.upload_network_status[0].up_resolution && "0X0" != e.download_network_status[0].down_resolution ? e : "0x0" != e.download_network_status[0].down_resolution ? (e.upload_network_status[0].up_resolution = e.download_network_status[0].down_resolution, e) : "0x0" != e.upload_network_status[0].up_resolution ? (e.download_network_status[0].down_resolution = e.upload_network_status[0].up_resolution, e) : e : e } };
            e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(n(1)),
                r = a(n(4)),
                o = n(31);

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = n(5),
                c = (s.info.nrtcVersion, "https://statistic.live.126.net/statics/report/webrtc/global"),
                u = function () {
                    function e() { arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (0, i.default)(this, e), this.data = {}, this.init() } return (0, r.default)(e, [{ key: "init", value: function () { this.calling = !1, this.data = Object.assign(this.data, { account: "", uid: 0, cid: 0, deviceList: [], sessionInfo: {}, mediaConstraint: {}, peerConnections: [], mediaPlay: {}, ext: "" }) } }, { key: "update", value: function (e) { Object.assign(this.data, e) } }, { key: "send", value: function (e) { var t = this;
                            WEBRTCLOG.log("----- send apiData ------", e), s.wssServer && (c = c.replace("statistic.live.126.net", s.wssServer)), (0, o.ajax)({ type: "post", url: c, data: e }).then(function (e) { t.init() }).catch(function (e) { WEBRTCLOG.log("err", e), t.init() }) } }]), e }();
            t.default = u, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(n(1)),
                r = a(n(4)),
                o = n(31);

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = n(5),
                c = s.info.nrtcVersion,
                u = "https://statistic.live.126.net/statistic/realtime/sdkFunctioninfo",
                l = function () {
                    function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, i.default)(this, e); var n = t.appkey,
                            r = t.platform;
                        this.apis = {}, this.isRtc = /WebRTC/.test(r), this.init(n, r), this.resetStatus() } return (0, r.default)(e, [{ key: "init", value: function (e, t) { this.apis = Object.assign(this.apis, { ver: 1, platform: t, sdk_ver: c || "v4.4.0", uid: null, appkey: e, time: null }) } }, { key: "start", value: function (e) { this.calling = !0, this.apis = Object.assign(this.apis, e) } }, { key: "resetStatus", value: function () { this.calling = !1, this.apis = Object.assign(this.apis, { p2p: { value: 0 }, meeting: { value: 0 }, bypass: { value: 0 }, call_control_type: { value: 0 }, self_mute: { value: -1 }, self_mic_mute: { value: -1 }, switch_p2p_type: { value: 0 }, set_speaker: { value: -1 }, net_detect: { value: this.isRtc ? -1 : 0 }, beautify: { value: -1 }, water_mark: { value: -1 }, audio_samples: { value: -1 }, video_samples: { value: -1 }, pre_view_mirror: { value: -1 }, code_mirror: { value: -1 }, custom_audio: { value: -1 }, custom_video: { value: -1 }, audio_mix: { value: -1 }, snap_shot: { value: -1 }, record: { value: 0 }, audio_record: { value: 0 }, display: { value: 0 }, android_compatibility: { value: -1 }, hd_audio: { value: 0 }, video_quality: { value: 0 }, fps: { value: 0 }, prefered_video_encoder: { value: -1 }, prefered_video_decoder: { value: -1 }, video_max_encode_bitrate: { value: this.isRtc ? -1 : 0 }, audio_scene: { value: -1 }, video_adaptive_strategy: { value: this.isRtc ? -1 : 0 }, ans: { value: this.isRtc ? -1 : 0 }, agc: { value: -1 }, dtx: { value: -1 }, aec: { value: this.isRtc ? -1 : 0 }, awc: { value: this.isRtc ? -1 : 0 }, actor: { value: 0 }, always_keep_calling: { value: 0 }, server_record_audio: { value: 0 }, server_record_video: { value: 0 }, server_record_single_user: { value: 0 }, screen_sharing_module: { value: 0 }, video_crop: { value: 0 } }) } }, { key: "update", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments[1],
                                n = e.key,
                                i = e.ext;
                            e.constructor === String && (n = e), i = i || t, this.apis[n] && (this.apis[n].value = 1, void 0 !== i && (this.apis[n].ext = i), /(p2p|meeting)/.test(n) && (this.calling = !0)) } }, { key: "send", value: function () { var e = this;
                            this.calling && (this.calling = !1, this.apis.time = Date.now(), s.wssServer && (u = u.replace("statistic.live.126.net", s.wssServer)), (0, o.ajax)({ type: "post", url: u, data: this.apis }).then(function (t) { e.resetStatus() }).catch(function (t) { WEBRTCLOG.log("err", t), e.resetStatus() })) } }]), e }();
            t.default = l, e.exports = t.default }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i;
            t.tool = { merge: function () { var e = arguments; return e[0] = Object.assign.apply(Object.assign, arguments), e[0] }, verifyOptions: function () { var e = arguments; if (e[0] && e[0].constructor === Object)
                        for (var t = 1; t < arguments.length; t++) { var n = e[t];
                            (n = n.split(" ")).map(function (t) { if (!e[0][t]) throw Error("参数缺失 " + t) }) } }, guid: (i = function () { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }, function () { return i() + i() + i() + i() + i() + i() + i() + i() }), sortDevices: function (e) { e && e.length > 1 && e.sort(function (e, t) { var n = -1 !== e.name.toLowerCase().indexOf("virtual"),
                            i = -1 !== e.path.toLowerCase().indexOf("virtual"),
                            r = -1 !== t.name.toLowerCase().indexOf("virtual"),
                            o = -1 !== t.path.toLowerCase().indexOf("virtual"); return i ? 1 : o ? -1 : n && r ? 0 : n ? 1 : r ? -1 : 0 }) }, randomNum: function (e, t) { var n = t - e,
                        i = Math.random(); return 0 == Math.round(i * n) ? e + 1 : Math.round(i * t) == t ? (index++, t - 1) : e + Math.round(i * n) - 1 }, isString: function (e) { return e.constructor === String }, isNumber: function (e) { return e.constructor === Number }, isBoolean: function (e) { return e.constructor === Boolean }, isObject: function (e) { return e.constructor === Object }, isArray: function (e) { return e.constructor === Array }, isFunction: function (e) { return e.constructor === Function }, isDate: function (e) { return e.constructor === Date }, isRegExp: function (e) { return e.constructor === RegExp }, isNull: function (e) { return null === e }, isUndefined: function (e) { return void 0 === e }, exist: function (e) { return !isNull(e) && !isUndefined(e) } } }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.ajax = function (e) { if (!e.url || !e.data) return Promise.reject("参数不完整，无法发起请求");
                e.dataType = e.dataType || "json"; var t = new XMLHttpRequest; return t.open(e.type || "GET", e.url, !0), t.responseType = "" + e.dataType, e.contentType, t.setRequestHeader("Content-type", "application/json;charset=UTF-8"), e.header && Object.keys(e.header).map(function (n) { t.setRequestHeader(n, e.header[n]) }), new Promise(function (n, i) { t.onload = function () { var e = t.response;
                        n(e) }, t.onerror = function (e) { i(e) }, t.send(JSON.stringify(e.data)) }) } }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.element = { html2node: function (e) { var t = document.createElement("div");
                    t.innerHTML = e; var n = [],
                        i = void 0,
                        r = void 0; if (t.children)
                        for (i = 0, r = t.children.length; i < r; i++) n.push(t.children[i]);
                    else
                        for (i = 0, r = t.childNodes.length; i < r; i++) { var o = t.childNodes[i];
                            1 == o.nodeType && n.push(o) }
                    return n.length > 1 ? t : n[0] }, n2node: function (e) { return e ? /HTML.+Element/gi.test(e) ? e : e[0] && /HTML.+Element/gi.test(e[0]) ? e[0] : null : null } } }, function (e, t, n) { "use strict"; var i = n(11),
                r = n(21),
                o = i.getGlobal();

            function a(e, t) { for (var n in t) e[n] = t[n]; return e }
            o.Object.assign || (console.log("Object.assign polyfill"), o.Object.assign = function () { for (var e = arguments, t = 1; t < e.length; t++) e[0] = a(e[0], e[t]); return e[0] }), o.platform = r }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { var t = e.util; return i = t.notundef, r }; var i = void 0;

            function r(e) { i(e.enable) && (this.enable = e.enable ? 1 : 0), i(e.needBadge) && (this.needBadge = e.needBadge ? 1 : 0), i(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0), i(e.pushContent) && (this.pushContent = "" + e.pushContent), i(e.custom) && (this.custom = "" + e.custom), i(e.pushPayload) && (this.pushPayload = "" + e.pushPayload), i(e.sound) && (this.sound = "" + e.sound), i(e.webrtcEnable) && (this.webrtcEnable = e.webrtcEnable ? 1 : 0), i(e.forceKeepCalling) && (this.forceKeepCalling = e.forceKeepCalling ? 1 : 0) }
            e.exports = t.default }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i, r, o, a = n(158),
                s = (i = a) && i.__esModule ? i : { default: i }; var c = { NETCALL_TYPE_AUDIO: 1, NETCALL_TYPE_VIDEO: 2, NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON: 1, NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF: 2, NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_ON: 3, NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_OFF: 4, NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO: 5, NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_AGREE: 6, NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_REJECT: 7, NETCALL_CONTROL_COMMAND_SWITCH_VIDEO_TO_AUDIO: 8, NETCALL_CONTROL_COMMAND_BUSY: 9, NETCALL_CONTROL_COMMAND_SELF_CAMERA_INVALID: 10, NETCALL_CONTROL_COMMAND_SELF_AUDIO_INVALID: 11, NETCALL_CONTROL_COMMAND_SELF_ON_BACKGROUND: 12, NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13, NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_START: 14, NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_STOP: 15, DEVICE_TYPE_AUDIO_IN: 0, DEVICE_TYPE_AUDIO_OUT_LOCAL: 1, DEVICE_TYPE_AUDIO_OUT_CHAT: 2, DEVICE_TYPE_VIDEO: 3, DEVICE_STATUS_NO_CHANGE: 0, DEVICE_STATUS_CHANGE: 1, DEVICE_STATUS_WORK_REMOVE: 2, DEVICE_STATUS_RESET: 4, DEVICE_STATUS_START: 8, DEVICE_STATUS_END: 16, CHAT_VIDEO_QUALITY_NORMAL: 0, CHAT_VIDEO_QUALITY_LOW: 1, CHAT_VIDEO_QUALITY_MEDIUM: 2, CHAT_VIDEO_QUALITY_HIGH: 3, CHAT_VIDEO_QUALITY_480P: 4, CHAT_VIDEO_QUALITY_720P: 5, CHAT_VIDEO_QUALITY_540P: 6, CHAT_VIDEO_ENCODEMODE_NORMAL: 0, CHAT_VIDEO_ENCODEMODE_SMOOTH: 1, CHAT_VIDEO_ENCODEMODE_QUALITY: 2, CHAT_VIDEO_ENCODEMODE_SCREEN: 3, CHAT_VIDEO_FRAME_RATE_NORMAL: 0, CHAT_VIDEO_FRAME_RATE_5: 1, CHAT_VIDEO_FRAME_RATE_10: 2, CHAT_VIDEO_FRAME_RATE_15: 3, CHAT_VIDEO_FRAME_RATE_20: 4, CHAT_VIDEO_FRAME_RATE_25: 5, CHAT_VIDEO_SCALE_None: 0, CHAT_VIDEO_SCALE_1x1: 1, CHAT_VIDEO_SCALE_4x3: 2, CHAT_VIDEO_SCALE_16x9: 3, CHAT_USER_LEFT_TIMEOUT: -1, CHAT_USER_LEFT_NORMAL: 0, CHAT_NET_STATUS_VERY_GOOD: 0, CHAT_NET_STATUS_GOOD: 1, CHAT_NET_STATUS_POOR: 2, CHAT_NET_STATUS_BAD: 3, CHAT_NET_STATUS_VERY_BAD: 4, CHAT_NET_STATUS_VERY_BAD_VIDEO_CLOSE: -1, CLIENT_TYPE_AOS: 1, CLIENT_TYPE_IOS: 2, CLIENT_TYPE_PC: 4, CLIENT_TYPE_WINPHONE: 8, CLIENT_TYPE_WEB: 16, CLIENT_TYPE_REST: 32, LAYOUT_SPLITBOTTOMHORFLOATING: 0, LAYOUT_SPLITTOPHORFLOATING: 1, LAYOUT_SPLITLATTICETILE: 2, LAYOUT_SPLITLATTICECUTTINGTILE: 3, LAYOUT_SPLITCUSTOMLAYOUT: 4, LAYOUT_SPLITAUDIOLAYOUT: 5, NETDETECT_AUDIO: 0, NETDETECT_VIDEO: 1 };
            c.deviceTypeMap = (r = {}, (0, s.default)(r, c.DEVICE_TYPE_AUDIO_IN, "audioIn"), (0, s.default)(r, c.DEVICE_TYPE_AUDIO_OUT_CHAT, "audioOut"), (0, s.default)(r, c.DEVICE_TYPE_VIDEO, "video"), r), c.getDeviceTypeStr = function (e) { return c.deviceTypeMap[e] }, c.deviceStatusMap = (o = {}, (0, s.default)(o, c.DEVICE_STATUS_NO_CHANGE, "noChange"), (0, s.default)(o, c.DEVICE_STATUS_CHANGE, "change"), (0, s.default)(o, c.DEVICE_STATUS_WORK_REMOVE, "workRemove"), (0, s.default)(o, c.DEVICE_STATUS_RESET, "reset"), (0, s.default)(o, c.DEVICE_STATUS_START, "start"), (0, s.default)(o, c.DEVICE_STATUS_END, "end"), o), c.getDeviceStatusStr = function (e) { return c.deviceStatusMap[e] }, t.default = c, e.exports = t.default }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) { "use strict";
            e.exports = { pushConfig: { 1: "enable", 2: "needBadge", 3: "needPushNick", 4: "pushContent", 5: "custom", 6: "pushPayload", 7: "sound", 9: "forceKeepCalling", 10: "webrtcEnable" }, liveOption: { 1: "liveEnable", 2: "webrtcEnable" } } }, function (e, t, n) { "use strict";
            e.exports = { pushConfig: { enable: 1, needBadge: 2, needPushNick: 3, pushContent: 4, custom: 5, pushPayload: 6, sound: 7, forceKeepCalling: 9, webrtcEnable: 10 }, liveOption: { liveEnable: 1, webrtcEnable: 2 } } }, function (e, t, n) { "use strict"; var i = n(0),
                r = n(80),
                o = i.merge({}, r.idMap, { netcall: { id: 9, initNetcall: 1, keepCalling: 3, calleeAck: 4, notifyCalleeAck: 5, hangup: 6, notifyHangup: 7, netcallControl: 8, notifyNetcallControl: 9, verifyChannelId: 10, createChannel: 13, joinChannel: 14, queryAccountUidMap: 16 } }),
                a = { initNetcall: { sid: o.netcall.id, cid: o.netcall.initNetcall, params: [{ type: "byte", name: "type" }, { type: "StrArray", name: "accounts" }, { type: "String", name: "pushContent" }, { type: "String", name: "custom" }, { type: "Property", name: "pushConfig" }] }, keepCalling: { sid: o.netcall.id, cid: o.netcall.keepCalling, params: [{ type: "byte", name: "type" }, { type: "StrArray", name: "accounts" }, { type: "long", name: "channelId" }] }, calleeAck: { sid: o.netcall.id, cid: o.netcall.calleeAck, params: [{ type: "string", name: "account" }, { type: "long", name: "channelId" }, { type: "byte", name: "type" }, { type: "bool", name: "accepted" }] }, hangup: { sid: o.netcall.id, cid: o.netcall.hangup, params: [{ type: "long", name: "channelId" }] }, netcallControl: { sid: o.netcall.id, cid: o.netcall.netcallControl, params: [{ type: "long", name: "channelId" }, { type: "byte", name: "type" }] }, verifyChannelId: { sid: o.netcall.id, cid: o.netcall.verifyChannelId, params: [{ type: "long", name: "channelId" }, { type: "String", name: "account" }] }, createChannel: { sid: o.netcall.id, cid: o.netcall.createChannel, params: [{ type: "String", name: "channelName" }, { type: "String", name: "custom" }, { type: "String", name: "webrtcEnable" }] }, joinChannel: { sid: o.netcall.id, cid: o.netcall.joinChannel, params: [{ type: "String", name: "channelName" }, { type: "Property", name: "liveOption" }] }, queryAccountUidMap: { sid: o.netcall.id, cid: o.netcall.queryAccountUidMap, params: [{ type: "String", name: "channelName" }, { type: "LongArray", name: "uids" }] } };
            e.exports = { idMap: o, cmdConfig: a, packetConfig: { "9_1": { service: "netcall", cmd: "initNetcall", response: [{ type: "Number", name: "timetag" }, { type: "Number", name: "uid" }, { type: "Number", name: "channelId" }, { type: "StrArray", name: "turnServerList" }, { type: "StrArray", name: "sturnServerList" }, { type: "StrArray", name: "proxyServerList" }, { type: "StrArray", name: "keepCallingAccounts" }, { type: "StrLongMap", name: "accountUidMap" }, { type: "String", name: "clientConfig" }, { type: "String", name: "serverMap" }] }, "9_2": { service: "netcall", cmd: "beCalled", response: [{ type: "Number", name: "timetag" }, { type: "Number", name: "type" }, { type: "Number", name: "channelId" }, { type: "String", name: "account" }, { type: "Number", name: "uid" }, { type: "StrArray", name: "turnServerList" }, { type: "StrArray", name: "sturnServerList" }, { type: "StrArray", name: "proxyServerList" }, { type: "StrLongMap", name: "accountUidMap" }, { type: "String", name: "clientConfig" }, { type: "String", name: "custom" }, { type: "Property", name: "pushConfig" }, { type: "String", name: "serverMap" }] }, "9_3": { service: "netcall", cmd: "keepCalling", response: [{ type: "StrArr", name: "accounts" }] }, "9_4": { service: "netcall", cmd: "calleeAck", response: [] }, "9_5": { service: "netcall", cmd: "notifyCalleeAck", response: [{ type: "String", name: "account" }, { type: "long", name: "channelId" }, { type: "byte", name: "type" }, { type: "bool", name: "accepted" }] }, "9_6": { service: "netcall", cmd: "hangup", response: [] }, "9_7": { service: "netcall", cmd: "notifyHangup", response: [{ type: "long", name: "channelId" }, { type: "String", name: "account" }, { type: "long", name: "timetag" }] }, "9_8": { service: "netcall", cmd: "netcallControl", response: [] }, "9_9": { service: "netcall", cmd: "notifyNetcallControl", response: [{ type: "String", name: "account" }, { type: "byte", name: "type" }, { type: "long", name: "channelId" }] }, "9_10": { service: "netcall", cmd: "verifyChannelId", response: [] }, "9_11": { service: "netcall", cmd: "notifyNetcallRecord", response: [{ type: "Property", name: "msg" }] }, "9_12": { service: "netcall", cmd: "notifyCalleeAckSync", response: [{ type: "String", name: "timetag" }, { type: "long", name: "channelId" }, { type: "byte", name: "type" }, { type: "bool", name: "accepted" }, { type: "byte", name: "fromClientType" }] }, "9_13": { service: "netcall", cmd: "createChannel", response: [{ type: "long", name: "timetag" }] }, "9_14": { service: "netcall", cmd: "joinChannel", response: [{ type: "long", name: "timetag" }, { type: "long", name: "channelId" }, { type: "StrLongMap", name: "accountUidMap" }, { type: "String", name: "serverMap" }, { type: "String", name: "clientConfig" }, { type: "String", name: "custom" }] }, "9_15": { service: "netcall", cmd: "notifyJoin", response: [{ type: "Long", name: "channelId" }, { type: "StrLongMap", name: "accountUidMap" }] }, "9_16": { service: "netcall", cmd: "queryAccountUidMap", response: [] } } } }, function (e, t, n) { "use strict"; var i = { install: function (e) { var t = e.Protocol.fn;
                    t.processNetcall = function (e) { switch (e.cmd) {
                            case "initNetcall":
                                this.onInitNetcall(e); break;
                            case "beCalled":
                                this.onBeCalled(e); break;
                            case "keepCalling":
                                this.onKeepCalling(e); break;
                            case "calleeAck":
                                break;
                            case "notifyCalleeAck":
                                this.onNotifyCalleeAck(e); break;
                            case "hangup":
                                break;
                            case "notifyHangup":
                                this.onNotifyHangup(e); break;
                            case "notifyNetcallControl":
                                this.onNetcallControl(e); break;
                            case "notifyCalleeAckSync":
                                this.onNotifyCalleeAckSync(e); break;
                            case "notifyNetcallRecord":
                                this.onMsg(e); break;
                            case "createChannel":
                                break;
                            case "joinChannel":
                                this.joinChannel(e); break;
                            case "notifyJoin":
                                this.notifyJoin(e) } }, t.onInitNetcall = function (e) { if (!e.error) { var t = e.obj.type;
                            e.obj = e.content, e.obj.type = t, e.obj.accounts = e.obj.keepCallingAccounts, this.setCurrentNetcall(e.obj.channelId), this.keepCalling(e) } }, t.setCurrentNetcall = function (e) { this.currentNetcallChannelId = e }, t.onKeepCalling = function (e) { e.error || e.content.accounts.length && this.keepCalling(e) }, t.keepCalling = function (e) { var t = this,
                            n = e.obj,
                            i = n.type,
                            r = n.accounts,
                            o = n.channelId;
                        r && r.length && setTimeout(function () { t.currentNetcallChannelId && t.currentNetcallChannelId === o && t.api.keepCalling({ type: i, accounts: r, channelId: o }).catch(function () {}) }, 3e3) }, t.onBeCalled = function (e) { e.error || this.emitAPI({ type: "beCalled", obj: e.content }) }, t.onNotifyCalleeAck = function (e) { e.error || this.emitAPI({ type: "notifyCalleeAck", obj: e.content }) }, t.onNotifyHangup = function (e) { e.error || this.emitAPI({ type: "notifyHangup", obj: e.content }) }, t.onNetcallControl = function (e) { e.error || this.emitAPI({ type: "netcallControl", obj: e.content }) }, t.onNotifyCalleeAckSync = function (e) { e.error || this.emitAPI({ type: "notifyCalleeAckSync", obj: e.content }) }, t.notifyJoin = function (e) { e.error || this.emitAPI({ type: "notifyJoin", obj: e.content }) }, t.joinChannel = function (e) { e.obj = e.content } } };
            e.exports = i }, function (e, t, n) { "use strict"; var i = n(224),
                r = { install: function (e) { var t = e.fn,
                            n = e.util,
                            r = i({ util: n });
                        t.initNetcall = function (e) { return n.verifyOptions(e, "type accounts", "netcall::initNetcall"), e.pushContent = "", e.custom = "", e.pushConfig || (e.pushConfig = {}), e.pushConfig.webrtcEnable = e.webrtcEnable, e.pushConfig = new r(e.pushConfig), this.cbAndSendCmd("initNetcall", e) }, t.keepCalling = function (e) { return n.verifyOptions(e, "type accounts channelId", "netcall::keepCalling"), this.cbAndSendCmd("keepCalling", e) }, t.calleeAck = function (e) { return n.verifyOptions(e, "account channelId type accepted", "netcall::calleeAck"), this.cbAndSendCmd("calleeAck", e) }, t.hangup = function (e) { return n.verifyOptions(e, "channelId", "netcall::hangup"), this.cbAndSendCmd("hangup", e) }, t.netcallControl = function (e) { return n.verifyOptions(e, "channelId type", "netcall::netcallControl"), this.cbAndSendCmd("netcallControl", e) }, t.createChannel = function (e) { return this.cbAndSendCmd("createChannel", e) }, t.joinChannel = function (e) { return n.verifyOptions(e, "channelName", "netcall::joinChannel"), n.verifyBooleanWithDefault(e, "liveEnable", !1, "", "netcall::joinChannel"), n.verifyBooleanWithDefault(e, "webrtcEnable", !1, "", "netcall::joinChannel"), this.cbAndSendCmd("joinChannel", { channelName: e.channelName, liveOption: { liveEnable: e.liveEnable ? 1 : 0, webrtcEnable: e.webrtcEnable ? 1 : 0 } }) }, t.queryAccountUidMap = function (e, t) { return this.cbAndSendCmd("queryAccountUidMap", { channelName: e, uids: t }) } } };
            e.exports = r }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) { "use strict"; var i = a(n(1)),
                r = a(n(3)),
                o = a(n(2));

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = void 0,
                c = n(10),
                u = n(474),
                l = n(481),
                d = n(480),
                f = function (e) {
                    function t(e) {
                        (0, i.default)(this, t); var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return s.merge(n, e), n.init(), n } return (0, o.default)(t, e), t }(c);
            f.install = function (e) { s = e.util }; var p = f.prototype;
            p.init = function () { this.reset() }, p.reset = function () { this.width = 0, this.height = 0 }, p.initCanvas = function (e) { s.merge(this, e); var t = this.container || document.body,
                    n = this.canvas;
                n || (n = this.canvas = document.createElement("canvas"), t.appendChild(n)), n.width = this.width, n.height = this.height; var i = this.gl; if (i || (i = this.gl = u.getWebGLContext(n)), i) i.viewport(0, 0, this.width, this.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT), u.initShaders(i, l, d), this.initBuffer(i), this.initTextures(i);
                else { this.emit("error", { code: "notSupportWebGl" }) } }, p.initBuffer = function (e) { this.positionLocation = e.getAttribLocation(e.program, "a_position"), this.texCoordLocation = e.getAttribLocation(e.program, "a_texCoord"), this.texCoordBuffer = e.createBuffer() }, p.initTextures = function (e) { this.yTexture = this.createTexture(e.TEXTURE0), this.uTexture = this.createTexture(e.TEXTURE1), this.vTexture = this.createTexture(e.TEXTURE2); var t = e.getUniformLocation(e.program, "Ytex");
                e.uniform1i(t, 0); var n = e.getUniformLocation(e.program, "Utex");
                e.uniform1i(n, 1); var i = e.getUniformLocation(e.program, "Vtex");
                e.uniform1i(i, 2) }, p.createTexture = function (e) { var t = this.gl,
                    n = t.createTexture(); return t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, n), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), n }, p.destroyTextures = function () { var e = this.gl;
                e && (e.deleteTexture(this.yTexture), e.deleteTexture(this.uTexture), e.deleteTexture(this.vTexture)), this.yTexture = null, this.uTexture = null, this.vTexture = null }, p.destroyBuffer = function () { var e = this.gl;
                e && this.texCoordBuffer && e.deleteBuffer(this.texCoordBuffer), this.texCoordBuffer = null }, p.updateShaders = function () { var e = this.gl,
                    t = void 0;
                t = this.mirror ? new Float32Array([-1, 1, 1, 0, -1, -1, 1, 1, 1, 1, 0, 0, 1, -1, 0, 1]) : new Float32Array([-1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1]), e.bindBuffer(e.ARRAY_BUFFER, this.texCoordBuffer), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW); var n = t.BYTES_PER_ELEMENT;
                e.vertexAttribPointer(this.positionLocation, 2, e.FLOAT, !1, 4 * n, 0), e.vertexAttribPointer(this.texCoordLocation, 2, e.FLOAT, !1, 4 * n, 2 * n), e.enableVertexAttribArray(this.positionLocation), e.enableVertexAttribArray(this.texCoordLocation) }, p.updateTextures = function (e) { var t = e.y,
                    n = e.u,
                    i = e.v,
                    r = this.gl,
                    o = this.width,
                    a = this.height;
                this.updateTexture(r.TEXTURE0, this.yTexture, t, o, a), this.updateTexture(r.TEXTURE1, this.uTexture, n, o / 2, a / 2), this.updateTexture(r.TEXTURE2, this.vTexture, i, o / 2, a / 2), r.finish() }, p.updateTexture = function (e, t, n, i, r) { var o = this.gl;
                o.activeTexture(e), o.bindTexture(o.TEXTURE_2D, t), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, i, r, 0, o.LUMINANCE, o.UNSIGNED_BYTE, n) }, p.drawImage = function (e) { if (!this.destroyed) { var t = e.width,
                        n = e.height,
                        i = e.y,
                        r = e.u,
                        o = e.v;
                    t === this.width && n === this.height || (this.width = t, this.height = n, this.clean(), this.initCanvas({ width: t, height: n }), this.emit("resize", { width: t, height: n, isRemote: this.isRemote, container: this.container })), this.updateShaders(), this.updateTextures({ y: i, u: r, v: o }); var a = this.gl;
                    a.drawArrays(a.TRIANGLE_STRIP, 0, 4) } }, p.destroy = function () { this.destroyed || (this.destroyed = !0, this.clean(), this.reset()) }, p.clean = function () { this.destroyTextures(), this.destroyBuffer(), this.removeGl() }, p.removeGl = function () { this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.canvas = null, this.canvasInited = !1, this.gl = null }, e.exports = f }, function (e, t, n) { "use strict"; var i = u(n(64)),
                r = u(n(1)),
                o = u(n(3)),
                a = u(n(2)),
                s = n(31),
                c = u(n(486));

            function u(e) { return e && e.__esModule ? e : { default: e } } var l = void 0,
                d = n(10),
                f = n(485),
                p = n(5),
                h = n(484),
                m = n(482),
                v = n(472),
                g = n(262),
                y = p.agentVersion,
                _ = function (e) {
                    function t(e) {
                        (0, r.default)(this, t); var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.container = s.element.n2node(e.container), e.remoteContainer = s.element.n2node(e.remoteContainer), n.setUtil(l), l.undef(e.heartbeat) && (e.heartbeat = !0), l.merge(n, e), n.init(), n } return (0, a.default)(t, e), t }(d);
            _.install = function (e) { l = e.util, h.install(e), m.install(e), v.install(e) }; var S = _.prototype;
            S.init = function () { this.signal = null, this.signalInited = !1, this.localStreamInfo = null, this.resetStatus(), this.initProtocol(), this.dataApi = new s.ApiInvokeData({ appkey: this.nim.options.appKey, platform: "PC-Agent" }) }, S.resetStatus = function () { this.channelId = null, this.channelName = null, this.type = null, this.target = null, this.sessionMode = null, this.sessionConfig = {}, this.isCaller = !1, this.callee = null, this.remoteStreamInfo = {}, this.calling = !1, this.callAccepted = !1, this.callerInfo = null, this.nim.protocol.setCurrentNetcall(), this.needQueryAccountMap = {} }, S.initProtocol = function () { var e = this.nim;
                this.account = this.nim.account, e.on("beCalled", this.onBeCalled.bind(this)), e.on("notifyCalleeAck", this.onCalleeAck.bind(this)), e.on("notifyHangup", this.onHangup.bind(this)), e.on("notifyUploadLog", this.uploadLog.bind(this)), e.on("netcallControl", this.onNetcallControl.bind(this)), e.on("notifyCalleeAckSync", this.onCalleeAckSync.bind(this)), e.on("notifyJoin", this.onNotifyJoin.bind(this)) }, S.getAccount = function () { return this.nim.account }, S.getUid = function () { return this.accountUidMap && this.accountUidMap[this.nim.account] || "-1" }, S.isCurrentChannelId = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.channelId && this.channelId === e.channelId }, S.notCurrentChannelId = function (e) { return !this.isCurrentChannelId(e) }, S.rejectWithNoSignal = function () { return this.resetWhenHangup(), Promise.reject({ code: "noConnection" }) }, S.initSignal = function () { var e = this; return this.signal ? this.stopSignal().then(function () { return e._initSignal() }) : this._initSignal() }, S._initSignal = function () { var e = this; return new Promise(function (t, n) { var i = e.signal = new h({ url: f.signalUrl, client: e, kickLast: e.kickLast, account: e.getAccount(), heartbeat: e.heartbeat, appkey: e.nim.options.appKey });
                    i.on("init", function (i) { if (e.log(i), !e.checkAgentVersion(i.version)) return e.log("插件版本有更新，请下载最新的插件再使用音视频功能"), e.stopSignal(), i.error = "请安装最新版插件，方可使用视频功能", i.errorType = "agent_update", void n(i);
                        e.localStreamInfo = i, e.signalInited = !0, t() }), i.on("initError", function (t) { e.log(t), 417 === (t = t || {}).code && (t.error = "设备被别的程序占用中, 请检查重试", t.errorType = "device_busy"), "noPC" === t.code && (t.error = "请安装插件PC Agent，方可使用音视频功能", t.errorType = "agent_empty"), n(t), e.rejectWithNoSignal() }), i.on("close", function () { e.emit("signalClosed"), e.stopSignal() }), i.on("devices", function (t) { e.emit("devices", t) }), i.on("login", function (t) { e.emit("sessionStarted", t) }), i.on("deviceStatus", function (t) { e.emit("deviceStatus", t) }), i.on("userJoined", e.onUserJoin.bind(e)), i.on("userLeft", e.onUserLeft.bind(e)), i.on("logUploaded", e.onLogUploaded.bind(e)), i.on("netStatus", function (t) { var n = t.id,
                            i = t.status;
                        e.emit("netStatus", { account: e.getAccountWithUid(n), status: i }) }), i.on("statistics", function (t) { e.emit("statistics", t) }), i.on("audioVolume", function (t) { var n = t.self,
                            i = t.receiver,
                            r = { self: n };
                        i && i.forEach(function (t) { var n = t.id,
                                i = t.status;
                            r[e.getAccountWithUid(n)] = { status: i } }), e.emit("audioVolume", r) }), i.on("error", e.onError.bind(e)), i.on("recordMp4", e.onRecordMp4.bind(e)), i.on("heartBeatError", e.onError.bind(e)) }) }, S.checkAgentVersion = function () { for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0.0.0.0").split("."), t = y.split("."), n = 0; n < e.length; n++) { if (+e[n] > +t[n]) return !0; if (+e[n] < +t[n]) return !1 } return !0 }, S.stopSignal = function () { var e = this; return this.stopLocalStream(), this.stopRemoteStream(), this.signal ? this.signal.stopSession().then(function () { e.signal.destroy(), e.signal = null, e.signalInited = !1 }) : Promise.resolve() }, S.initNetcall = function () { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.type,
                    i = t.pushConfig; return this.type = n, this.sessionMode = "p2p", this.nim.initNetcall({ type: n, accounts: [this.callee], webrtcEnable: !0, pushConfig: i }).then(function (t) { return e.callerInfo = t, e.channelId = t.channelId, Promise.resolve(t) }, function (t) { throw e.resetWhenHangup(), t }) }, S.initSession = function () { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (this.signalInited) { var n = this.isCaller ? this.callerInfo : t.beCalledInfo;
                    this.parseAccountUidMap(n.accountUidMap); var r = this.sessionConfig || {}; return r.ans && this.dataApi.update({ key: "ans" }), r.aec && this.dataApi.update({ key: "aec" }), this.signal.startSession((0, i.default)({}, n, r)).then(function () { return { channelId: e.channelId } }) } return this.rejectWithNoSignal() }, S.call = function () { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.dataApi.update("p2p"), new Promise(function (n, i) { if (!e.signalInited || e.calling) return e.resetStatus(), i({ type: "statusNotMatch", error: "呼叫失败: 当前正在通话中或者Agent唤起失败，请排查" }); var r = t.account,
                        o = t.type,
                        a = t.pushConfig,
                        s = t.sessionConfig,
                        c = void 0 === s ? {} : s; if (e.calling = !0, e.isCaller = !0, e.callee = e.target = r, e.sessionConfig = c, c.highAudio && e.dataApi.update("hd_audio"), void 0 !== c.videoFrameRate && e.dataApi.update("fps", 0 == +c.videoFrameRate ? 0 : +c.videoFrameRate + 1), void 0 !== c.videoEncodeMode && e.dataApi.update("video_adaptive_strategy", c.videoEncodeMode || 0), void 0 !== c.videoBitrate && e.dataApi.update("video_max_encode_bitrate", c.videoBitrate || ""), void 0 !== c.recordType && e.dataApi.update("recordType", c.recordType || 0), c.isHostSpeaker && e.dataApi.update("isHostSpeaker"), void 0 !== c.videoQuality) { var u = c.videoQuality;
                        u === g.CHAT_VIDEO_QUALITY_540P ? u = g.CHAT_VIDEO_QUALITY_720P : u === g.CHAT_VIDEO_QUALITY_720P && (u = g.CHAT_VIDEO_QUALITY_540P), e.dataApi.update("video_quality", u || 0) } if (r) return e.initNetcall({ type: o, pushConfig: a }).then(function (e) { n(e) }).catch(function (e) { i(e) });
                    e.resetStatus(), i({ code: "noCalleeAccount" }) }) }, S.onBeCalled = function (e) { this.log("beCalling", e), this.emit("beCalling", e) }, S.response = function () { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.dataApi.update("p2p"); var n = t.beCalledInfo; if (!n) return Promise.resolve(); var i = n.accepted = !1 !== t.accepted,
                    r = this.sessionConfig = t.sessionConfig || {}; if (r.highAudio && this.dataApi.update("hd_audio"), void 0 !== r.videoFrameRate && this.dataApi.update("fps", 0 == +r.videoFrameRate ? 0 : +r.videoFrameRate + 1), void 0 !== r.videoEncodeMode && this.dataApi.update("video_adaptive_strategy", r.videoEncodeMode || 0), void 0 !== r.videoBitrate && this.dataApi.update("video_max_encode_bitrate", r.videoBitrate || ""), void 0 !== r.recordType && this.dataApi.update("recordType", r.recordType || 0), r.isHostSpeaker && this.dataApi.update("isHostSpeaker"), void 0 !== r.videoQuality) { var o = r.videoQuality;
                    o === g.CHAT_VIDEO_QUALITY_540P ? o = g.CHAT_VIDEO_QUALITY_720P : o === g.CHAT_VIDEO_QUALITY_720P && (o = g.CHAT_VIDEO_QUALITY_540P), this.dataApi.update("video_quality", o || 0) } return i ? (this.type = n.type, this.channelId = n.channelId, this.target = n.account, this.calling = !0) : (this.log("rejectNetcall", n), this.packNetcallRecord({ type: n.type, channelId: n.channelId, isCaller: !1, target: n.account, recordType: "rejectNetcall" })), this.sessionMode = "p2p", this.nim.calleeAck(n).then(function () { if (i) return e.initSession({ beCalledInfo: n }) }, function (t) { throw e.log(t), t }) }, S.onCalleeAck = function (e) { if (!this.notCurrentChannelId(e)) return e.accepted ? this.initSession({ type: e.type }) : (this.log("netcallRejected", e), this.packNetcallRecord({ type: e.type, channelId: e.channelId, isCaller: !0, target: e.account, recordType: "netcallRejected" }), this.resetWhenHangup(), void this.emit("callRejected", e)) }, S.onUserJoin = function (e) { this.log("onUserJoin ", e); var t = e.account,
                    n = e.uid;!t && n && (e.account = t = this.getAccountWithUid(n)), t ? this.emitUserJoin(e) : (this.needQueryAccountMap[n] = e, this.nim.queryAccountUidMap(this.channelName, [n])) }, S.emitUserJoin = function (e) { var t = e.uid,
                    n = e.isMeeting;
                this.remoteStreamInfo[t] = e, this.dataApi.start({ uid: this.getUid() }), n ? this.emit("joinChannel", { type: e.type, uid: e.uid, account: e.account }) : (this.callAccepted || (this.callAccepted = !0), this.emit("callAccepted", { type: e.type, account: e.account, uid: e.uid })) }, S.onUserLeft = function (e) { var t = this,
                    n = e.account,
                    i = e.uid;
                e.isMeeting ? (!n && i && (e.account = this.getAccountWithUid(i)), this.emit("leaveChannel", { account: e.account })) : (this.log("on user left", e), this.calling && setTimeout(function () { e.account = t.getAccountWithUid(e.uid), t.onHangup(e) }, 1e3)) }, S.onNetcallControl = function (e) { this.emit("control", e) }, S.onCalleeAckSync = function (e) { this.emit("callerAckSync", e), this.isCurrentChannelId(e) && this.resetWhenHangup() }, S.onNotifyJoin = function (e) { var t = e.accountUidMap,
                    n = this.needQueryAccountMap; for (var i in this.parseAccountUidMap(t), t) { var r = i,
                        o = t[i]; if (o in n) { var a = n[o];
                        a.account = r, this.emitUserJoin(a), delete n[o] } } }, S.onHangup = function (e) { this.dataApi.send(), this.emit("hangup", e), this.isCurrentChannelId(e) && this.resetWhenHangup() }, S.hangup = function () { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).channelId;!e && this.calling && this.channelId && (e = this.channelId), e && (this.dataApi.send(), this.nim.hangup({ channelId: e })), e === this.channelId && (this.isCaller && !this.callAccepted && (this.log("cancelNetcallBeforeAccept", { channelId: e }), this.packNetcallRecord({ recordType: "cancelNetcallBeforeAccept" })), this.resetWhenHangup()) }, S.packNetcallRecord = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.recordType,
                    n = l.exist(e.type) ? e.type : this.type,
                    i = l.exist(e.channelId) ? e.channelId : this.channelId,
                    r = l.exist(e.duration) ? e.duration : 0,
                    o = l.exist(e.isCaller) ? e.isCaller : this.isCaller,
                    a = l.exist(e.target) ? e.target : this.target,
                    s = this.getAccount(),
                    c = o ? s : a,
                    u = o ? a : s,
                    d = +new Date;
                this.nim.protocol.onMsg({ content: { msg: { attach: JSON.stringify({ data: { calltype: n, channel: i, duration: r, ids: [s, a], time: d }, id: t }), from: c, fromClientType: o ? 16 : 0, fromDeviceId: "", fromNick: "", idClient: l.guid(), idServer: l.guid(), scene: 0, time: d, to: u, type: 5 } } }) }, S.resetWhenHangup = function () { this.resetStatus(), this.signalInited && this.signal.stopSession() }, S.control = function () { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.command,
                    i = t.channelId; if (i || (i = this.channelId), n && i) return this.dataApi.update("call_control_type"), this.nim.netcallControl({ channelId: i, type: n }).catch(function (t) { throw e.log(t), t }) }, S.setVideoViewSize = function (e) { return this.dataApi.update("video_crop"), this.signalInited ? this.signal.setVideoViewSize(e) : this.rejectWithNoSignal() }, S.setVideoViewRemoteSize = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.signalInited ? (e.account && (e.id = this.getUidWithAccount(e.account)), this.signal.setVideoViewRemoteSize(e)) : this.rejectWithNoSignal() }, S.setVideoScale = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.signalInited ? (e.account && (e.id = this.getUidWithAccount(e.account)), this.signal.setVideoScale(e)) : this.rejectWithNoSignal() }, S.startLocalStream = function (e) { var t = this; if (this.dataApi.update("display"), this.signalInited && !this.stream && this.localStreamInfo) { var n = e || this.container,
                        i = this.localStreamInfo.port;
                    this.stream = new m({ client: this, url: f.genStreamUrl(i), container: n, mirror: this.mirror }), this.stream.on("resize", function (e) { t.emit("streamResize", e) }), this.stream.on("error", function (e) { t.emit("error", e) }) } }, S.stopLocalStream = function () { this.stream && (this.stream.destroy(), this.stream = null) }, S.startRemoteStream = function () { var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; "p2p" === this.sessionMode ? (e = this.getUidWithAccount(this.target), this.remoteContainer || this.target || this.nim.logger.error("不传参数且点对点模式实例化Netcall必须设置remoteContainer与target；传参数必须包含account，node"), !this.getRemoteStream(e) && this.remoteStreamInfo[e] && this.addRemoteStream(this.remoteStreamInfo[e])) : (e = t.uid || this.getUidWithAccount(t.account), t.node = s.element.n2node(t.node), e && t.node ? this.addRemoteStream(this.remoteStreamInfo[e], t.node) : this.nim.logger.error("不传参数且点对点模式实例化Netcall必须设置remoteContainer与target；传参数必须包含account，node")) }, S.stopRemoteStream = function (e) { return e ? this.removeRemoteStream(e) : this.removeRemoteStreams() }, S.addRemoteStream = function (e, t) { var n = this,
                    i = e.uid,
                    r = e.port;
                this.remoteStreams || (this.remoteStreams = {}); var o = this.remoteStreams[i];
                o && o.destroy(), (o = this.remoteStreams[i] = new m({ client: this, isRemote: !0, url: f.genStreamUrl(r), container: t || this.remoteContainer, mirror: this.mirrorRemote })).on("resize", function (e) { n.emit("remoteStreamResize", e) }), o.on("error", function (e) { n.emit("error", e) }) }, S.removeRemoteStreams = function () { var e = this;
                this.remoteStreams && Object.keys(this.remoteStreams).forEach(function (t) { e.remoteStreams[t].destroy() }), this.remoteStreams = {} }, S.removeRemoteStream = function (e) { var t = this.getUidWithAccount(e); if (!this.remoteStreams[t]) { throw { code: "accountNotMatch" } }
                this.remoteStreams[t].destroy() }, S.getRemoteStream = function (e) { var t = this.getUidWithAccount(e); return this.remoteStreams && this.remoteStreams[t] }, S.suspendLocalStream = function () { this.stream && this.stream.suspend() }, S.resumeLocalStream = function () { this.stream && this.stream.resume() }, S.suspendRemoteStream = function (e) { var t = this.getRemoteStream(e || this.target);
                t && t.suspend() }, S.resumeRemoteStream = function (e) { var t = this.getRemoteStream(e || this.target);
                t && t.resume() }, S.switchVideoToAudio = function () { var e = this; return this.signalInited ? (this.dataApi.update("switch_p2p_type"), this.signal.switchVideoToAudio().then(function () { e.type = g.NETCALL_TYPE_AUDIO })) : this.rejectWithNoSignal() }, S.switchAudioToVideo = function () { var e = this; return this.signalInited ? (this.dataApi.update("switch_p2p_type"), this.signal.switchAudioToVideo().then(function () { e.type = g.NETCALL_TYPE_VIDEO })) : this.rejectWithNoSignal() }, S.getDevicesOfType = function (e) { return this.signalInited ? this.signal.getDevicesOfType(e) : this.rejectWithNoSignal() }, S.getStoredDevicesOfType = function (e) { if (this.signalInited) return (e = +e) === g.DEVICE_TYPE_AUDIO_OUT_LOCAL && (e = g.DEVICE_TYPE_AUDIO_OUT_CHAT), this.signal.devicesMap[e];
                this.rejectWithNoSignal() }, S.hasDevicesOfType = function (e) { return this.getStoredDevicesOfType(e) }, S.getStartedDeviceOfType = function (e) { return this.signalInited ? this.signal.deviceMap[e] : this.rejectWithNoSignal() }, S.hasStartedDeviceOfType = function (e) { return this.getStartedDeviceOfType(e) }, S.stopDevice = function (e) { return this.signalInited ? this.hasStartedDeviceOfType(e) ? this.signal.stopDevice(e) : Promise.resolve() : this.rejectWithNoSignal() }, S.startDevice = function (e) { var t = e.type,
                    n = e.device; if (this.signalInited) { if (l.exist(t) && !n) { if (this.hasStartedDeviceOfType(t)) return Promise.resolve();
                        this.hasDevicesOfType(t) && (n = e.device = this.getStoredDevicesOfType(t)[0]) } return n ? this.signal.startDevice(e) : Promise.reject((0, i.default)({ type: "noDevice" }, e)) } return this.rejectWithNoSignal() }, S.setSessionVideoQuality = function (e) { if (this.signalInited) { if (void 0 !== e) { var t = e;
                        t === g.CHAT_VIDEO_QUALITY_540P ? t = g.CHAT_VIDEO_QUALITY_720P : t === g.CHAT_VIDEO_QUALITY_720P && (t = g.CHAT_VIDEO_QUALITY_540P), this.dataApi.update("video_quality", t || 0) } return this.signal.setVideoQuality(e) } return this.rejectWithNoSignal() }, S.setSessionVideoFrameRate = function (e) { return this.signalInited ? (this.dataApi.update("fps", void 0 !== e ? +e + 1 : 0), this.signal.setVideoFrameRate(e)) : this.rejectWithNoSignal() }, S.setSessionVideoBitrate = function (e) { return this.signalInited ? (this.dataApi.update("video_max_encode_bitrate", e || ""), this.signal.setVideoBitrate(e)) : this.rejectWithNoSignal() }, S.setCaptureVolume = function (e) { return (e = void 0 === e ? 255 : e).constructor === String && (e = +e || 255), this.signalInited ? this.signal.setCaptureVolume(e) : this.rejectWithNoSignal() }, S.setPlayVolume = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; /(Number|String)/.test(e.constructor) && (e = { volume: e }); var t = e.volume; return t = void 0 === t ? 255 : t, this.signalInited ? this.signal.setPlayVolume(t) : this.rejectWithNoSignal() }, S.netDetect = function (e, t) { return this.dataApi.update({ key: "net_detect" }), e = void 0 === e ? g.NETDETECT_AUDIO : e, t = t || g.CHAT_VIDEO_QUALITY_480P, this.signalInited ? this.signal.netDetect({ appKey: this.nim.options.appKey, type: e, quality: t }) : this.rejectWithNoSignal() }, S.uploadLog = function () { var e = this;
                this.signalInited && this.nim.getSimpleNosToken().then(function (t) { e.signal.uploadLog(t) }, function (t) { e.log(t) }) }, S.onLogUploaded = function (e) { this.nim.uploadSdkLogUrl(e) }, S.log = function () { var e = this.nim.logger;
                e.log.apply(e, arguments) }, S.info = function () { var e = this.nim.logger;
                e.info.apply(e, arguments) }, S.destroy = function () {}, S = Object.assign(S, c.default), e.exports = _, n(478) }, function (e, t, n) { "use strict"; var i = {},
                r = i.create3DContext = function (e, t) { for (var n = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], i = null, r = 0; r < n.length; ++r) { try { i = e.getContext(n[r], t) } catch (e) {} if (i) { console.log("use", n[r]); break } } return i };
            i.initShaders = function (e, t, n) { var i = o(e, t, n); return i ? (e.useProgram(i), e.program = i, !0) : (console.log("Failed to create program"), !1) }; var o = i.createProgram = function (e, t, n) { var i = a(e, e.VERTEX_SHADER, t),
                        r = a(e, e.FRAGMENT_SHADER, n); if (!i || !r) return null; var o = e.createProgram(); if (!o) return null; if (e.attachShader(o, i), e.attachShader(o, r), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) { var s = e.getProgramInfoLog(o); return console.log("Failed to link program: " + s), e.deleteProgram(o), e.deleteShader(r), e.deleteShader(i), null } return o },
                a = i.loadShader = function (e, t, n) { var i = e.createShader(t); return null == i ? (console.log("unable to create shader"), null) : (e.shaderSource(i, n), e.compileShader(i), i) };
            i.getWebGLContext = function (e, t) { var n = r(e); return n || null }, window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { window.setTimeout(e, 1e3 / 60) }), window.cancelAnimationFrame || (window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.clearTimeout), e.exports = i }, , , , function (e, t, n) { "use strict"; var i, r = n(64),
                o = (i = r) && i.__esModule ? i : { default: i }; var a = n(473),
                s = n(262),
                c = a.prototype,
                u = void 0;
            c.setUtil = function (e) { u = e }, c.createChannel = function (e) { return u.verifyOptions(e, "channelName"), e.custom = e.custom || "", this.dataApi.update("meeting"), e.webrtcEnable = !0, this.nim.createChannel(e) }, c.joinChannel = function (e) { var t = this;
                this.dataApi.update("meeting"), u.verifyOptions(e, "channelName type"); var n = e.type,
                    i = e.sessionConfig,
                    r = void 0 === i ? {} : i; if (r.bypassRtmp = e.liveEnable, r.customLayout = e.sessionConfig.layout || e.sessionConfig.customLayout, r.recordType = e.sessionConfig.recordType, r.isHostSpeaker = e.sessionConfig.isHostSpeaker, e.liveEnable && this.dataApi.update("bypass", void 0 !== r.splitMode ? +r.splitMode + 1 : 0), r.highAudio && this.dataApi.update("hd_audio"), void 0 !== r.videoFrameRate && this.dataApi.update("fps", 0 == +r.videoFrameRate ? 0 : +r.videoFrameRate + 1), void 0 !== r.videoEncodeMode && this.dataApi.update("video_adaptive_strategy", r.videoEncodeMode || 0), void 0 !== r.videoBitrate && this.dataApi.update("video_max_encode_bitrate", r.videoBitrate || ""), void 0 !== r.recordType && this.dataApi.update("recordType", r.recordType || 0), r.isHostSpeaker && this.dataApi.update("isHostSpeaker"), void 0 !== r.videoQuality) { var a = r.videoQuality;
                    a === s.CHAT_VIDEO_QUALITY_540P ? a = s.CHAT_VIDEO_QUALITY_720P : a === s.CHAT_VIDEO_QUALITY_720P && (a = s.CHAT_VIDEO_QUALITY_540P), this.dataApi.update("video_quality", a || 0) } if (r.ans && this.dataApi.update({ key: "ans" }), r.aec && this.dataApi.update({ key: "aec" }), this.signalInited) return this.nim.joinChannel({ channelName: e.channelName, liveEnable: e.liveEnable, webrtcEnable: !0 }).then(function (i) { return i.serverInfo = JSON.parse(i.serverMap), t.callerInfo = i, t.channelId = i.channelId, t.channelName = e.channelName, t.sessionMode = "meeting", t.parseAccountUidMap(i.accountUidMap), i.uid = t.getUidWithAccount(t.account), t.dataApi.start({ uid: i.uid }), t.signal.startSession((0, o.default)({}, i, { type: n }, e.sessionConfig), !0).then(function (e) { return e.custom = i.custom, e }) }); return Promise.reject({ code: "noConnection" }) }, c.leaveChannel = function () { if (this.signalInited) return this.dataApi.send(), this.signal.stopSession(); return Promise.reject({ code: "noConnection" }) }, c.changeRoleToPlayer = function () { return this.dataApi.update("actor"), this.signal.setRole(0) }, c.changeRoleToAudience = function () { return this.signal.setRole(1) }, c.updateRtmpUrl = function (e) { return this.signal.updateRtmpUrl(e) } }, function (e, t) { e.exports = "'use strict';\n\n/* 该web worker 职能为向 websocket 发送指令及数据*/\n\nvar that = {};\n\nthat.init = function (data) {\n  if (!that.socket) {\n    var url = that.url = data.info.url;\n    var socket = that.socket = new WebSocket(url);\n    socket.onopen = function (event) {\n      postMessage({\n        cmd: 'open'\n      });\n    };\n    socket.onmessage = function (event) {\n      postMessage({\n        cmd: 'message',\n        data: event.data\n      }, [event.data]);\n    };\n    socket.onerror = function (event) {\n      postMessage({\n        cmd: 'error'\n      });\n    };\n    socket.onclose = function (event) {\n      postMessage({ // web 端被动结束\n        cmd: 'close'\n      });\n    };\n    socket.binaryType = 'arraybuffer';\n  }\n};\n\nthat.close = function () {\n  if (that.socket) {\n    that.socket.onopen = null;\n    that.socket.onmessage = null;\n    that.socket.onerror = null;\n    that.socket.onclose = null;\n    that.socket.close(); // 结束socket\n    that.socket = null;\n  }\n  self.close(); // 结束worker，web端主动\n};\n\nthat.send = function (obj) {\n  if (that.socket && that.socket.readyState === WebSocket.OPEN) {\n    that.socket.send(JSON.stringify(obj));\n  }\n};\n// 侦听主线程的worker消息\nself.addEventListener('message', function (event) {\n  var data = event.data;\n  switch (data.cmd) {\n    case 'init':\n      // worker第一步2\n      that.init(data);\n      break;\n    case 'close':\n      // web发起，结束worker及相应socket\n      that.send(data.info);\n      that.close(data);\n      break;\n    case 'msg':\n      that.send(data.info);\n      break;\n  }\n});" }, function (e, t) { e.exports = "precision mediump float;\nuniform sampler2D Ytex, Utex, Vtex;\nvarying vec2 v_texCoord;\nvoid main(void) {\n  float r, g, b, y, u, v;\n  vec4 yuv, rgb;\n  y = texture2D(Ytex, v_texCoord).r;\n  u = texture2D(Utex, v_texCoord).r;\n  v = texture2D(Vtex, v_texCoord).r;\n  yuv = vec4(y, u, v, 1.0);\n  yuv = yuv - vec4(0.0625, 0.5, 0.5, 0.0);\n  yuv = mat4(\n    1.1643, 0.0, 0.0, 0.0,\n    0.0, 1.0, 0.0, 0.0,\n    0.0, 0.0, 1.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  ) * yuv;\n  rgb = mat4(\n    1.0, 1.0, 1.0, 0.0,\n    0.0, -0.3917, 2.017, 0.0,\n    1.5958, -0.8129, 0.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  ) * yuv;\n  gl_FragColor = rgb;\n  // y = 1.1643 * (y - 0.0625);\n  // u = u - 0.5;\n  // v = v - 0.5;\n  // r = y + 1.5958 * v;\n  // g = y - 0.39173 * u - 0.81290 * v;\n  // b = y + 2.017 * u;\n  // gl_FragColor = vec4(r, g, b, 1.0);\n}\n" }, function (e, t) { e.exports = "attribute vec4 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main () {\n  gl_Position = a_position;\n  v_texCoord = a_texCoord;\n}\n" }, function (e, t, n) { "use strict"; var i = a(n(1)),
                r = a(n(3)),
                o = a(n(2));

            function a(e) { return e && e.__esModule ? e : { default: e } } var s = void 0,
                c = n(10),
                u = n(472),
                l = n(479),
                d = function (e) {
                    function t(e) {
                        (0, i.default)(this, t); var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return s.merge(n, e), n.init(), n } return (0, o.default)(t, e), t }(c);
            d.install = function (e) { s = e.util }; var f = d.prototype;
            f.init = function () { this.reset(), this.initRender(), this.initWorker(), window.addEventListener("beforeunload", this.destroy.bind(this)) }, f.initRender = function () { var e = this;
                this.render = new u({ client: this.client, stream: this, isRemote: this.isRemote, container: this.container, mirror: this.mirror }), this.render.on("resize", function (t) { e.emit("resize", t) }), this.render.on("error", function (t) { e.emit("error", t) }) }, f.reset = function () { this.currFrameCount = 0, this.width = 0, this.height = 0, this.timetag = 0, this.worker = null, this.render = null }, f.initWorker = function () { var e = this,
                    t = new Blob([l], { type: "application/javascript" });
                (this.worker = new Worker(URL.createObjectURL(t))).addEventListener("message", function (t) { var n = t.data; switch (n.cmd) {
                        case "open":
                            e.onOpen(); break;
                        case "error":
                            e.onError(); break;
                        case "close":
                            e.onClose(); break;
                        case "message":
                            e.onMessage(n) } }), this.sendWorkerCmd({ cmd: "init", info: { url: this.url } }) }, f.destroyWorker = function () { this.worker && this.worker.terminate() }, f.sendWorkerCmd = function (e) { this.worker && this.worker.postMessage(e) }, f.getName = function () { return (this.isRemote ? "remote " : "") + "stream socket " + this.url }, f.onOpen = function (e) { var t = this.getName() + " open -> stream.js";
                this.logToConsole(t), this.logToPC(t) }, f.startStatisticsTimer = function () { var e = this;
                this.statisticsTimer = setInterval(function () { var t = e.currFrameCount - e.lastFrameCount;
                    e.sendWorkerCmd({ cmd: "msg", info: { cmd: "statistics", info: { lastFrameCount: e.lastFrameCount, fps: t, latency: e.latency } } }), e.lastFrameCount = e.currFrameCount, e.latency = 0 }, 1e3) }, f.onError = function (e) { if (!this.destroyed) { var t = this.getName() + " error -> stream.js";
                    this.logToConsole(t), this.logToPC(t), this.destroy() } }, f.onClose = function (e) { this.destroy(e) }, f.onMessage = function (e) { var t = e.data; if (!this.destroyed && t instanceof ArrayBuffer) { var n = t.byteLength;
                    this.render && !this.suspended && this.renderFrame(t, n) } }, f.renderFrame = function (e, t) { var n = new DataView(e),
                    i = this.width = n.getUint32(0),
                    r = this.height = n.getUint32(4),
                    o = n.getUint32(8),
                    a = n.getUint32(12);
                this.timetag = 1e3 * o + a; var s = i * r,
                    c = s / 4,
                    u = s / 4; if (16 + s + c + u !== t) { var l = "yuv数据长度不匹配: total " + t + ", meta 16, width " + i + ", height " + r + ", yLength " + s + " uLength " + c + " vLength " + u; return this.logToConsole(l), void this.logToPC(l) }
                this.currFrameCount++, this.scheduleRender({ id: this.currFrameCount, width: i, height: r, y: new Uint8Array(e, 16, s), u: new Uint8Array(e, 16 + s, c), v: new Uint8Array(e, 16 + s + c) }) }, f.scheduleRender = function (e) { this.render && !this.suspended && this.render.drawImage(e) }, f.suspend = function () { this.suspended = !0 }, f.resume = function () { this.suspended = !1 }, f.destroy = function (e) { this.sendWorkerCmd({ cmd: "close", info: { cmd_type: "on_clear_media" } }), this.destroyed = !0, this.render && this.render.destroy(), this.reset(); var t = e && e.constructor === Object ? e.code : "",
                    n = this.getName() + " destroy: code - " + t + " -> stream.js";
                this.logToConsole(n), this.logToPC(n) }, f.logToConsole = function () { var e = this.client;
                e && e.log.apply(e, arguments) }, f.logToPC = function () { var e = this.client; if (e) { var t = e.signal;
                    t && t.log.apply(t, arguments) } }, e.exports = d }, function (e, t, n) { "use strict"; var i = { sortDevices: function (e) { e && e.length > 1 && e.sort(function (e, t) { var n = -1 !== e.name.toLowerCase().indexOf("virtual"),
                            i = -1 !== e.path.toLowerCase().indexOf("virtual"),
                            r = -1 !== t.name.toLowerCase().indexOf("virtual"),
                            o = -1 !== t.path.toLowerCase().indexOf("virtual"); return i ? 1 : o ? -1 : n && r ? 0 : n ? 1 : r ? -1 : 0 }) } };
            e.exports = i }, function (e, t, n) { "use strict"; var i = s(n(64)),
                r = s(n(1)),
                o = s(n(3)),
                a = s(n(2));

            function s(e) { return e && e.__esModule ? e : { default: e } } var c = void 0,
                u = n(10),
                l = n(262),
                d = n(483),
                f = n(172),
                p = function (e) {
                    function t(e) {
                        (0, r.default)(this, t); var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return c.merge(n, e), n.reset(), window.addEventListener("beforeunload", function () { n.destroy() }), n } return (0, a.default)(t, e), t }(u);
            p.install = function (e) { c = e.util }; var h = p.prototype;
            h.reset = function () { this.inited = !1, this.isMeeting = !1, this.hasInvokePC = !1, this.cmdId = 1, this.cmdTasksMap = {}, this.sessionStopped = !1, this.devicesMap = {}, this.deviceMap = {}, this.initSocket(), this.audioGroup = { aec: 1, ns: 1, vad: 1, awc: 0 } }, h.initSocket = function () { var e = this.socket = new WebSocket(this.url);
                e.onopen = this.onOpen.bind(this), e.onmessage = this.onMessage.bind(this), e.onerror = this.onError.bind(this), e.onclose = this.onClose.bind(this) }, h.onOpen = function (e) { var t = this,
                    n = this.heartbeat ? 1 : 0,
                    i = this.getName() + " open -> signal.js";
                this.inited = !0, this.logToConsole(i), this.log(i), this.emit("open"), this.sendCmd({ type: "on_init", info: { account: this.account, type: this.kickLast ? 1 : 0, heartbeat: n, app_key: this.appkey } }).then(this.onInit.bind(this)).catch(function (e) { t.logToConsole("init error -> signal.js", e), t.emit("initError", e) }) }, h.onError = function (e) { if (!this.destroyed && this.inited) { var t = this.getName() + " error -> signal.js";
                    this.logToConsole(t) } }, h.onClose = function (e) { var t = this; if (!this.destroyed)
                    if (this.inited) { var n = this.getName() + " close -> signal.js : " + e.code;
                        this.logToConsole(n), this.inited = !1, this.emit("close") } else { this.hasInvokePC || (this.hasInvokePC = !0, this.invokePC()); var i = this.backoff;
                        i || (i = this.backoff = new f({ min: 1e3, max: 2e3 })), 3 === i.attempts ? this.emit("initError", { code: "noPC" }) : setTimeout(function () { t.initSocket() }, i.duration()) } }, h.invokePC = function () { var e = document.createElement("iframe");
                e.src = "NIMWebAgent:invokePC", document.body.appendChild(e), setTimeout(function () { e.parentNode && e.parentNode.removeChild(e) }, 0) }, h.onMessage = function (e) { if (!this.destroyed) { var t = JSON.parse(e.data),
                        n = t.cmd_id,
                        i = t.cmd_type,
                        r = t.cmd_info;
                    this.shouldPrintMsg({ cmdType: i, cmdInfo: r }) && "on_heartbeat_notify" !== i && this.client.info("signal socket msg", t); var o = this.cmdTasksMap[n]; if (o) delete this.cmdTasksMap[n], 200 === r.code ? o.resolve(r) : o.reject(r);
                    else switch (i) {
                        case "device_status_notify":
                            this.onDeviceStatus(r); break;
                        case "session_notify":
                            this.onSessionNotify(r); break;
                        case "upload_log_notify":
                            this.onUploadLogNotify(r) } } }, h.shouldPrintMsg = function (e) { var t = e.cmdType,
                    n = e.cmdInfo; return "session_notify" !== t || !n.audio_volume && !n.net && !n.static_info }, h.sendCmd = function (e) { var t = this; return new Promise(function (n, r) { var o = "on_heartbeat" === e.type ? 0 : t.cmdId++,
                        a = (0, i.default)({ cmd_id: o, cmd_type: e.type, cmd_info: e.info || {} }, e.extra);
                    t.socket && t.socket.readyState === WebSocket.OPEN ? ("on_heartbeat" !== e.type && t.logToConsole("send signal cmd", a), t.cmdTasksMap[o] = { resolve: n, reject: r }, t.socket.send(JSON.stringify(a))) : r({ code: "noConnection" }) }) }, h.onInit = function (e) { var t = e.code,
                    n = e.version,
                    i = e.port,
                    r = e.device_list_notify;
                200 === t && (r.forEach(this.onDevices, this), this.emit("init", { port: i, version: n, code: t }), this.startHeartBeat()) }, h.startHeartBeat = function () { var e = this;
                this.heartBeatTimer && this.stopHeartBeat(), this.heartBeatTimer = setInterval(function () { e.sendCmd({ type: "on_heartbeat", info: {} }).catch(function () { e.emit("heartBeatError", { type: "heartbeatError" }) }) }, 15e3) }, h.stopHeartBeat = function () { clearInterval(this.heartBeatTimer), this.heartBeatTimer = null }, h.setVideoViewSize = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = parseInt(e.width) || 0,
                    n = parseInt(e.height) || 0,
                    i = void 0 === e.cut ? 1 : ~~e.cut; return this.sendCmd({ type: "on_capture_video_size", info: { width: t, height: n, cut: i } }) }, h.setVideoViewRemoteSize = function (e) { var t = parseInt(e.width) || 0,
                    n = parseInt(e.height) || 0,
                    i = e.id || 0,
                    r = void 0 === e.cut ? 1 : ~~e.cut; return this.sendCmd({ type: "on_rec_video_size", info: { id: i, width: t, height: n, cut: r } }) }, h.setVideoScale = function (e) { var t = e.type,
                    n = void 0 === t ? l.CHAT_VIDEO_SCALE_None : t,
                    i = e.id; return this.sendCmd({ type: "on_send_video_Scale", info: { id: i, type: n } }) }, h.getDevicesOfType = function (e) { var t = this; return this.sendCmd({ type: "on_get_devices", info: { type: e } }).then(function (e) { return e.devices = e.devices || [], t.onDevices(e), e }).catch(function (e) { throw e }) }, h.onDevices = function (e) { var t = e.type,
                    n = e.devices; if (n && n.length) { d.sortDevices(n); var i = l.getDeviceTypeStr(t);
                    i && (this.devicesMap[t] = n, this.emit("devices", { type: t, typeStr: i, devices: n })) } }, h.startAllDevices = function () { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.videoQuality,
                    i = t.audioOutType;
                Object.keys(this.devicesMap).forEach(function (t) {
                    (t = +t) === l.DEVICE_TYPE_AUDIO_OUT_CHAT && i === l.DEVICE_TYPE_AUDIO_OUT_LOCAL && (t = i); var r = e.devicesMap[t];
                    e.startDevice({ device: r[0], type: t, videoQuality: n }) }) }, h.startDevice = function (e) { var t = this,
                    n = e.device,
                    i = e.type,
                    r = e.width,
                    o = e.height; if (n) { var a = { type: i = +i, path: n.path }; return i === l.DEVICE_TYPE_VIDEO && (a.width = parseInt(r) || 0, a.height = parseInt(o) || 0), this.deviceMap[i] = n, this.sendCmd({ type: "on_start_device", info: a }).catch(function () { throw delete t.deviceMap[i], a }) } }, h.stopDevice = function (e) { var t = this,
                    n = this.deviceMap[e]; return delete this.deviceMap[e], this.sendCmd({ type: "on_stop_device", info: { type: e } }).catch(function () { t.deviceMap[e] = n }) }, h.onDeviceStatus = function (e) { var t = e.type,
                    n = e.status,
                    r = 1 == (1 & n),
                    o = 4 == (4 & n),
                    a = 16 == (16 & n);
                8 == (8 & n) && (this.deviceMap[t] = e, this.emit("deviceStatus", (0, i.default)({}, e, { status: "started" }))), a && (delete this.deviceMap[t], this.emit("deviceStatus", (0, i.default)({}, e, { status: "stopped" }))), o && (this.deviceMap[t] = e, this.emit("deviceStatus", (0, i.default)({}, e, { status: "reset" }))), r && this.emit("deviceStatus", (0, i.default)({}, e, { status: "change" })) }, h.startSession = function (e, t) { var n = this;
                this.sessionStopped = !1; var i = c.guid();
                this.sessionId = i; var r = e.type;
                this.type = r; var o = { id: e.uid, cid: e.channelId, type: r, p2p_connect: 1, dispatch: e.serverMap, config: e.clientConfig, v_encode_mode: this.normalizeVideoEncodeMode(e.videoEncodeMode), video_quality: this.normalizeVideoQuality(e.videoQuality), video_record: e.recordVideo ? 1 : 0, record: e.recordAudio ? 1 : 0, high_rate: e.highAudio ? 1 : 0, record_type: e.recordType, r_host_speaker: e.isHostSpeaker ? 1 : 0, frame_rate: this.normalizeVideoFrameRate(e.videoFrameRate), max_video_rate: this.normalizeVideoBitrate(e.videoBitrate), custom_layout: e.customLayout }; return console.log("pcagent info", o), t && (o.meeting_mode = 1, o.bypass_rtmp = e.bypassRtmp ? 1 : 0, o.rtmp_url = e.rtmpUrl || "", o.rtmp_record = e.rtmpRecord ? 1 : 0, o.split_mode = e.splitMode || 0, o.single_record = e.singleRecord || 0), o.dispatch && o.dispatch.constructor !== String && (o.dispatch = JSON.stringify(o.dispatch)), this.sendCmd({ type: "on_start_chat", info: o, extra: { session_id: i } }).then(function (i) { var r = i.login,
                        o = i.error; if (o) throw o; return n.isMeeting = t, void 0 !== e.ns && n.audioControl({ ns: e.ns }), void 0 !== e.vad && n.audioControl({ vad: e.vad }), void 0 !== e.aec && n.audioControl({ aec: e.aec }), { login: r } }) }, h.stopSession = function () { return this.sessionStopped ? Promise.resolve() : (this.sessionStopped = !0, this.isMeeting = !1, this.sendCmd({ type: "on_stop_chat" })) }, h.clear = function () { this.sendCmd({ type: "on_clear" }) }, h.switchVideoToAudio = function () { return this.sendCmd({ type: "on_set_chat_mode", info: { type: l.NETCALL_TYPE_AUDIO } }) }, h.switchAudioToVideo = function () { return this.sendCmd({ type: "on_set_chat_mode", info: { type: l.NETCALL_TYPE_VIDEO } }) }, h.logToConsole = function () { var e = this.client;
                e && e.log.apply(e, arguments) }, h.log = function (e) { e && this.doLog({ msg: e, level: 3 }) }, h.warn = function (e) { e && this.doLog({ msg: e, level: 2 }) }, h.err = function (e) { e && this.doLog({ msg: e, level: 1 }) }, h.doLog = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.msg,
                    n = e.level; return this.sendCmd({ type: "on_log", info: { type: n, content: "" + t } }).catch(function () {}) }, h.uploadLog = function (e) { var t = e.bucket,
                    n = e.objectName,
                    i = e.token; return this.sendCmd({ type: "on_upload_log", info: { nos_bucket: t, nos_object: n, nos_header_token: i } }).catch(function () {}) }, h.normalizeVideoEncodeMode = function (e) { return parseInt(e) || l.CHAT_VIDEO_ENCODEMODE_NORMAL }, h.normalizeVideoQuality = function (e) { return parseInt(e) || l.CHAT_VIDEO_QUALITY_480P }, h.setVideoQuality = function (e) { return this.sendCmd({ type: "on_set_video_quality", info: { type: this.normalizeVideoQuality(e) } }) }, h.normalizeVideoFrameRate = function (e) { return parseInt(e) || l.CHAT_VIDEO_FRAME_RATE_NORMAL }, h.setVideoFrameRate = function (e) { return this.sendCmd({ type: "on_set_video_frame_rate", info: { type: this.normalizeVideoFrameRate(e) } }) }, h.normalizeVideoBitrate = function (e) { return parseInt(e) || 0 }, h.setVideoBitrate = function (e) { return this.sendCmd({ type: "on_set_video_bitrate", info: { code: this.normalizeVideoBitrate(e) } }) }, h.netDetect = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.appKey,
                    n = e.type,
                    i = e.quality,
                    r = void 0 === i ? 0 : i; return this.sendCmd({ type: "on_net_detect", info: { app_key: t, type: n, quality: r } }) }, h.normalizeVolumn = function (e) { return e = +e, c.isNumber(e) && !isNaN(e) || (e = 255), e < 0 && (e = 0), e > 255 && (e = 255), e }, h.setCaptureVolume = function (e) { return e = this.normalizeVolumn(e), this.sendCmd({ type: "on_capture_volume", info: { status: e } }) }, h.setPlayVolume = function (e) { return e = this.normalizeVolumn(e), this.sendCmd({ type: "on_play_volume", info: { status: e } }) }, h.setRole = function (e) { return this.sendCmd({ type: "on_set_viewer", info: { status: e } }) }, h.setAudioBlack = function (e, t) { return this.sendCmd({ type: "on_set_audio_black", info: { id: e, status: t } }) }, h.setVideoBlack = function (e, t) { return this.sendCmd({ type: "on_set_video_black", info: { id: e, status: t } }) }, h.updateRtmpUrl = function (e) { return this.sendCmd({ type: "on_update_rtmp_url", info: { content: e } }) }, h.startRecordMp4 = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.path,
                    n = e.id,
                    i = void 0 === n ? "" : n,
                    r = e.aac,
                    o = void 0 !== r && r,
                    a = e.recode,
                    s = void 0 === a || a,
                    c = e.width,
                    u = void 0 === c ? 0 : c,
                    l = e.height,
                    d = void 0 === l ? 0 : l; return console.log("startRecordMp4", o, s, u, d), this.sendCmd({ type: "on_record_mp4", info: { path: t, id: i, mp4_audio: ~~o, mp4_recode: !!s, mp4_width: +u, mp4_height: +d } }) }, h.stopRecordMp4 = function (e) { var t = e.id,
                    n = void 0 === t ? 0 : t; return this.sendCmd({ type: "on_stop_record_mp4", info: { id: n } }) }, h.startRecordAac = function (e) { var t = e.path; return this.sendCmd({ type: "on_record_aac", info: { path: t } }) }, h.stopRecordAac = function () { return this.sendCmd({ type: "on_stop_record_aac", info: {} }) }, h.onSessionNotify = function (e) { e && (e.user_joined ? (console.log("onSessionNotify ", e), this.emit("userJoined", { uid: e.user_joined.id, port: e.user_joined.port, type: this.type, isMeeting: this.isMeeting })) : e.user_left ? this.emit("userLeft", { uid: e.user_left.id, type: e.user_left.status, isMeeting: this.isMeeting }) : e.net ? this.emit("netStatus", e.net) : e.static_info ? this.emit("statistics", e.static_info) : e.audio_volume ? this.emit("audioVolume", e.audio_volume) : e.error ? this.emit("error", e.error) : e.mp4_start ? this.emit("recordMp4", e.mp4_start, "start") : e.mp4_close && this.emit("recordMp4", e.mp4_close, "close")) }, h.onUploadLogNotify = function (e) { var t = e.code,
                    n = e.url;
                200 === t && this.emit("logUploaded", { url: n }) }, h.getName = function () { return "signal socket " + this.url }, h.destroy = function () { this.destroyed = !0, this.stopHeartBeat();
                this.logToConsole("signal close -> signal.js"), this.socket && (this.socket.onopen = null, this.socket.onmessage = null, this.socket.onerror = null, this.socket.onclose = null, this.socket.readyState === WebSocket.OPEN && (this.clear(), this.socket.close()), this.socket = null) }, h.audioControl = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return c.merge(this.audioGroup, e), this.sendCmd({ type: "on_audio_process", info: this.audioGroup, id: ++this.cmdId }) }, h.awc = function (e) { return this.sendCmd({ type: "on_audio_howling", info: { status: ~~e }, id: ++this.cmdId }) }, e.exports = p }, function (e, t, n) { "use strict"; var i = "wss://localhost.netease.im:",
                r = { baseUrl: i, signalUrl: i + "30000", streamUrl: i + "40000", genStreamUrl: function (e) { return "" + i + e } };
            e.exports = r }, function (e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = o(n(64)),
                r = n(31);

            function o(e) { return e && e.__esModule ? e : { default: e } } var a = "//" + o(n(5)).default.roomserver + "/v1/sdk/command/rooms/";
            t.default = { parseAccountUidMap: function (e) { var t = this;
                    Object.keys(e).forEach(function (n) { t.addAccountUidMap({ account: n, uid: e[n] }) }) }, addAccountUidMap: function (e) { var t = e.account,
                        n = e.uid;
                    this.uidAccountMap || (this.uidAccountMap = {}), this.uidAccountMap[n] = t, this.accountUidMap || (this.accountUidMap = {}), this.accountUidMap[t] = n }, getAccountWithUid: function (e) { if (this.uidAccountMap) return this.uidAccountMap[e] }, getUidWithAccount: function (e) { if (this.accountUidMap) return this.accountUidMap[e] }, onError: function (e) { this.emit("error", e) }, setAudioBlack: function (e) { if (this.getUidWithAccount(e)) return this.signal.setAudioBlack(this.getUidWithAccount(e), 1); return Promise.reject({ code: "accountNotMatch" }) }, setAudioStart: function (e) { if (this.getUidWithAccount(e)) return this.signal.setAudioBlack(this.getUidWithAccount(e), 0); return Promise.reject({ code: "accountNotMatch" }) }, setVideoBlack: function (e) { return this.signal.setVideoBlack(this.getUidWithAccount(e), 1) }, setVideoShow: function (e) { return this.signal.setVideoBlack(this.getUidWithAccount(e), 0) }, startRecordMp4: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.dataApi.update({ key: "record" }), r.tool.verifyOptions(e, "path"), e.account && (e.id = e.account === this.account ? 0 : this.getUidWithAccount(e.account)), this.signal.startRecordMp4(e) }, stopRecordMp4: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return e.account && (e.id = e.account === this.account ? 0 : this.getUidWithAccount(e.account)), this.signal.stopRecordMp4(e) }, startRecordAac: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.dataApi.update({ key: "audio_record" }), r.tool.verifyOptions(e, "path"), this.signal.startRecordAac(e) }, stopRecordAac: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.signal.stopRecordAac(e) }, onRecordMp4: function (e, t) { e.type = t, this.emit("recordMp4", e) }, setNetcallSession: function (e) { return this.calling ? Promise.reject({ type: "statusNotMatch", error: "开启会话失败: 当前正在通话中" }) : (this.calling = !0, this.channelId = e.channelId, this.type = +e.netcallType, this.imInfo = e, this.imInfo.rtcUrls = e.rtcServerMap, this.beCalledInfo = this.imInfo, this.target = e.target.account, this.parseAccountUidMap(e.accountUidMap), this.signal.startSession((0, i.default)({}, this.imInfo, { type: this.type }, this.imInfo.sessionConfig), !1)) }, ans: function (e) { return this.signal ? (this.dataApi.update({ key: "ans" }), this.sessionConfig.ns = ~~e, this.signal.audioControl({ ns: this.sessionConfig.ns })) : Promise.reject({ code: "noConnection" }) }, aec: function (e) { return this.signal ? (this.dataApi.update({ key: "aec" }), this.sessionConfig.aec = ~~e, this.signal.audioControl({ aec: this.sessionConfig.aec })) : Promise.reject({ code: "noConnection" }) }, voiceDetection: function (e) { return this.signal ? (this.sessionConfig.vad = ~~e, this.signal.audioControl({ vad: this.sessionConfig.vad })) : Promise.reject({ code: "noConnection" }) }, awc: function (e) { return this.signal ? (this.sessionConfig.awc = ~~e, this.signal.awc(this.sessionConfig.awc)) : Promise.reject({ code: "noConnection" }) }, updateRtmpHostVideo: function (e) { var t = e.account,
                        n = e.uid; if (t && (n = this.getUidWithAccount(t)), !n) return Promise.reject("账号不在房间中，无法进行操作"); var i = a + this.channelId,
                        o = this.callerInfo && this.callerInfo.serverInfo && this.callerInfo.serverInfo.token || ""; return (0, r.ajax)({ type: "post", url: i, data: { suid: this.getUid(), cid: this.channelId, uid: +n, cmd: 10001 }, header: { Token: o } }).then(function (e) { if (200 === e.code) return Promise.resolve(); var t = void 0; switch (e.code) {
                            case 404:
                                t = "房间不存在"; break;
                            case 405:
                                t = "目标用户不在房间中"; break;
                            case 406:
                                t = "没有权限"; break;
                            case 417:
                                t = "请求数据不对"; break;
                            case 600:
                                t = "服务器内部错误"; break;
                            default:
                                t = "请求参数不正确" } return Promise.reject(t) }) } }, e.exports = t.default }, function (e, t, n) { "use strict"; var i, r = n(64),
                o = (i = r) && i.__esModule ? i : { default: i };
            n(223); var a = n(474),
                s = n(387),
                c = n(386),
                u = n(473),
                l = n(262),
                d = n(385),
                f = n(384),
                p = n(383),
                h = void 0,
                m = n(5),
                v = (0, o.default)({ version: m.info.version, versionAgent: m.agentVersion }, l, { webgl: a, install: function (e, t) { s.install(e, t), c.install(e, t), e.parser.mixin({ configMap: d, serializeMap: f, unserializeMap: p }), u.install(e, t) }, getInstance: function (e) { return h || (h = new u(e)), h }, destroy: function () { h && (h.destroy(), h = null) } });
            e.exports = v }]) });
});