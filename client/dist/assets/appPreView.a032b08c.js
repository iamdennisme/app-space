import {n as p, I as h, i as I, a as v, r as _, b as d} from "./index.4d4590a9.js";
import {V as w} from "./vue-qr.4cc29d34.js";

var g = function () {
  var n = this, t = this, a = t.$createElement, o = t._self._c || a;
  return o("div", {staticClass: "preview-app-wrapper"}, [t.dataInfo.length > 0 ? o("div", {staticClass: "phoneDownLoadWrapper"}, [o("img", {
    staticClass: "app-icon",
    attrs: {src: this.curInfo.appInfo.icon || "", alt: ""},
    on: {
      error: function (r) {
        return t.setDefaultIcon(r, n.curInfo.appInfo)
      }
    }
  }), o("p", {staticClass: "title"}, [t._v(t._s(this.curInfo.appInfo.appName))]), this.curInfo.appInfo.platform != "rn" ? o("div", {staticClass: "info"}, [o("p", {staticClass: "desc"}, [t._v("\u7248\u672C\uFF1A" + t._s(this.curInfo.versionInfo.versionName) + "(" + t._s(this.curInfo.versionInfo.versionCode) + ")")]), o("span", [t._v("\u5927\u5C0F\uFF1A" + t._s((this.curInfo.versionInfo.size / 1024 / 1024).toFixed(1)) + "M")])]) : t._e(), this.curInfo.appInfo.platform == "rn" ? o("div", {staticClass: "info"}, [o("p", {staticClass: "desc"}, [t._v("\u7248\u672C\uFF1A" + t._s(this.curInfo.versionInfo.appVersion))]), o("span", [t._v("\u5927\u5C0F\uFF1A" + t._s((this.curInfo.versionInfo.size / 1024 / 1024).toFixed(2)) + "M")])]) : t._e(), o("p", {staticClass: "info"}, [t._v("\u53D1\u5E03\u65E5\u671F\uFF1A " + t._s(t.formatDate(this.curInfo.versionInfo.uploadAt)) + " ")]), o("div", {staticClass: "qrcode"}, [o("vue-qr", {
    staticClass: "qrcodeImg",
    attrs: {colorDark: "#585F69", text: t.qrCodeUrl, margin: 15}
  }), o("p", {staticClass: "tips"}, [t._v("\u7528\u624B\u673A\u626B\u63CF\u4E8C\u7EF4\u7801" + t._s(this.curInfo.appInfo.platform == "rn" ? "\u4E0B\u8F7D" : "\u5B89\u88C5"))])], 1), t.showPasswordInput ? o("div", [o("div", [o("el-input", {
    staticClass: "pwd",
    attrs: {type: "password", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"},
    model: {
      value: t.pwd, callback: function (r) {
        t.pwd = r
      }, expression: "pwd"
    }
  })], 1), o("div", [o("el-button", {
    staticClass: "downloadBtn sureBtn",
    attrs: {loading: t.loading, type: "primary", round: ""},
    on: {click: t.clickSure}
  }, [t._v("\u786E\u5B9A")])], 1)]) : t._e(), t.curInfo.appInfo.platform != "rn" && t.showDownLoadBtn ? o("el-button", {
    staticClass: "downloadBtn",
    attrs: {type: "primary", round: ""},
    on: {
      click: function (r) {
        return t.clickDownLoadBtn(t.curInfo)
      }
    }
  }, [o("i", {class: this.curInfo.appInfo.platform === "ios" ? "icon-ic_ios" : "icon-ic_andr"}), t._v(" \u4E0B\u8F7D\u5B89\u88C5")]) : t._e(), t.curInfo.appInfo.platform == "rn" && t.showDownLoadBtn ? o("el-button", {
    staticClass: "downloadBtn",
    attrs: {type: "primary", round: ""},
    on: {
      click: function (r) {
        return t.clickDownLoadBtn(t.curInfo)
      }
    }
  }, [t._v("\u4E0B\u8F7D")]) : t._e()], 1) : t._e(), t.showMergeBtn ? o("div", {staticClass: "merge-wrapper"}, [o("div", {staticClass: "left"}, [o("div", {staticClass: "info"}, [o("p", {staticClass: "desc"}, [t._v("\u7248\u672C\uFF1A" + t._s(t.dataInfo[0].versionInfo.versionName) + "(" + t._s(t.dataInfo[0].versionInfo.versionCode) + ")")]), o("span", [t._v("\u5927\u5C0F\uFF1A" + t._s((t.dataInfo[0].versionInfo.size / 1024 / 1024).toFixed(1)) + "M")])]), o("p", {staticClass: "info"}, [t._v("\u53D1\u5E03\u65E5\u671F\uFF1A " + t._s(t.formatDate(t.dataInfo[0].versionInfo.uploadAt)) + " ")]), o("el-button", {
    staticClass: "downloadBtn mergeDown",
    attrs: {type: "primary", round: ""},
    on: {
      click: function (r) {
        return t.clickDownLoadBtn(t.dataInfo[0])
      }
    }
  }, [t._v(t._s("\u4E0B\u8F7D ".concat(t.dataInfo[0].appInfo.platform, " \u7248")))])], 1), o("div", {staticClass: "line"}), o("div", {staticClass: "right"}, [o("div", {staticClass: "info"}, [o("p", {staticClass: "desc"}, [t._v("\u7248\u672C\uFF1A" + t._s(t.dataInfo[1].versionInfo.versionName) + "(" + t._s(t.dataInfo[1].versionInfo.versionCode) + ")")]), o("span", [t._v("\u5927\u5C0F\uFF1A" + t._s((t.dataInfo[1].versionInfo.size / 1024 / 1024).toFixed(1)) + "M")])]), o("p", {staticClass: "info"}, [t._v("\u53D1\u5E03\u65E5\u671F\uFF1A " + t._s(t.formatDate(t.dataInfo[1].versionInfo.uploadAt)) + " ")]), o("el-button", {
    staticClass: "downloadBtn mergeDown",
    attrs: {type: "primary", round: ""},
    on: {
      click: function (r) {
        return t.clickDownLoadBtn(t.dataInfo[1])
      }
    }
  }, [t._v(t._s("\u4E0B\u8F7D ".concat(t.dataInfo[1].appInfo.platform, " \u7248")))])], 1)]) : t._e(), t.showHistoryList ? o("div", {staticClass: "history-wrapper"}, [o("ul", t._l(this.curInfo.history, function (s, r) {
    return o("li", {
      key: r, on: {
        click: function (c) {
          return t.historyClickDownLoadBtn(s)
        }
      }
    }, [t.curInfo.appInfo.platform != "rn" ? o("div", [t._v("V" + t._s(s.versionName) + "(build " + t._s(s.versionCode) + ")")]) : t._e(), t.curInfo.appInfo.platform == "rn" ? o("div", [t._v("V" + t._s(s.appVersion))]) : t._e(), o("div", [t._v(t._s(t.formatTime(s.uploadAt)))])])
  }), 0)]) : t._e()], 1)
}, m = [];
const C = {
  components: {VueQr: w}, data() {
    return {
      dataInfo: [],
      curInfo: {appInfo: {}, versionInfo: {}, history: []},
      qrCodeUrl: "",
      pwd: "",
      installWithPwd: !1,
      isPhone: !1,
      loading: !1
    }
  }, computed: {
    isIos() {
      return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }, isAndroid() {
      return !!navigator.userAgent.match(/(Android)\s+([\d.]+)/)
    }, showDownLoadBtn() {
      return !this.showPasswordInput && (this.isPhone || this.dataInfo.length == 1)
    }, showMergeBtn() {
      return !this.showPasswordInput && !this.isPhone && this.dataInfo.length > 1
    }, showPasswordInput() {
      return this.installWithPwd
    }, showHistoryList() {
      return !this.showPasswordInput && this.curInfo.history.length > 0
    }
  }, mounted() {
    this.getAppInfo(this.$route.params.id, this.pwd), this.isIos || this.isAndroid ? this.isPhone = !0 : this.isPhone = !1
  }, created() {
    this.$nextTick(() => {
    })
  }, methods: {
    formatTime(e) {
      return new Date(e).toFormat()
    }, getTableBackground(e) {
      return e % 2 === 0 ? "backgroundColor: rgb(244, 245, 247)" : "backgroundColor: white"
    }, getAppInfo(e, n) {
      h(e, n).then(t => {
        if (console.log(t), t.data == null) {
          this.$message.error("\u672A\u68C0\u6D4B\u5230\u7248\u672C\u4FE1\u606F");
          return
        }
        this.installWithPwd = t.data.needAuth, this.dataInfo = t.data.list, this.isPhone && this.dataInfo.length > 1 ? this.isAndroid && this.dataInfo[0].appInfo.platform == "android" ? this.curInfo = this.dataInfo[0] : this.curInfo = this.dataInfo[1] : this.curInfo = this.dataInfo[0], this.qrCodeUrl = `${window.origin}${this.$route.fullPath}`, this.loading = !1
      }, t => {
        this.loading = !1, this.pwd = ""
      })
    }, setDefaultIcon(e, n) {
      n.platform == "ios" ? e.target.src = I : n.platform == "android" ? e.target.src = v : n.platform == "rn" && (e.target.src = _)
    }, historyClickDownLoadBtn(e) {
      if (e.grayScaleLimit && e.grayScaleSize <= e.downloadCount) {
        this.$message.error("\u5DF2\u8FBE\u5230\u7070\u5EA6\u4E0A\u9650"), this.getAppInfo(this.$route.params.id, this.pwd);
        return
      }
      if (this.isIos) {
        const n = document.createElement("a");
        n.setAttribute("href", e.installUrl), n.click()
      } else {
        const n = document.createElement("a");
        let t = e.downloadUrl;
        n.setAttribute("href", t), n.click(), fetch(t).then(a => {
          let o = a.body.getReader(), r = a.headers.get("Content-Length"), i = 0;
          o.read().then(function c(l) {
            if (l.done) {
              d(e._id).then(() => {
              }, u => {
              });
              return
            }
            return i += l.value.length, console.log(`progress: ${i / r * 100}%`), o.read().then(c)
          })
        })
      }
    }, clickDownLoadBtn(e) {
      if (e.versionInfo.grayScaleLimit && e.versionInfo.grayScaleSize <= e.versionInfo.downloadCount) {
        this.$message.error("\u5DF2\u8FBE\u5230\u7070\u5EA6\u4E0A\u9650"), this.getAppInfo(this.$route.params.id, this.pwd);
        return
      }
      if (this.isIos) {
        const n = document.createElement("a");
        n.setAttribute("href", e.versionInfo.installUrl), n.click()
      } else {
        const n = document.createElement("a");
        let t = e.versionInfo.downloadUrl;
        n.setAttribute("href", t), n.click(), fetch(t).then(a => {
          let o = a.body.getReader(), r = a.headers.get("Content-Length"), i = 0;
          o.read().then(function c(l) {
            if (l.done) {
              console.log("\u4E0B\u8F7D\u5B8C\u6210"), d(e.versionInfo._id).then(() => {
              }, u => {
              });
              return
            }
            return i += l.value.length, console.log(`progress: ${i / r * 100}%`), o.read().then(c)
          })
        })
      }
    }, formatDate(e) {
      return e ? new Date(e).toFormat() : ""
    }, clickSure() {
      if (!this.pwd) {
        this.$message.info("\u8BF7\u8F93\u5165\u5BC6\u7801");
        return
      }
      this.loading = !0, this.getAppInfo(this.$route.params.id, this.pwd)
    }
  }
}, f = {};
var y = p(C, g, m, !1, k, null, null, null);

function k(e) {
  for (let n in f) this[n] = f[n]
}

var A = function () {
  return y.exports
}();
export {A as default};
