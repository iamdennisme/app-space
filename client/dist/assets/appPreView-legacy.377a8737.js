!function () {
  var t = document.createElement("style");
  t.innerHTML = '@charset "UTF-8";html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,menu,nav,output,ruby,section,summary,time,mark,audio,video,input{margin:0;padding:0;border:0;font-size:100%;font-weight:400;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}a{color:#7e8c8d;-webkit-backface-visibility:hidden;text-decoration:none}li{list-style:none}body{-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body,html{line-height:1;font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif,Droid Sans Fallback;user-select:none;-webkit-tap-highlight-color:transparent}textarea{resize:none;outline:0}input,button{outline:0}.main-container,.app-container{padding:0 1px;background-color:#f9fafc}.components-container{margin:30px 50px;position:relative}body{background:#F9FAFC;margin:0;padding:0}.nowrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.canwrap{word-wrap:break-word;word-break:normal}.button-style-main{padding:0;background:#229FFC;border-width:0px;outline:0;font-size:14px;color:#fff;height:48px;border-radius:24px}.button-style-border{padding:0;background:white;border:solid 1px #229FFC;outline:0;font-size:12px;color:#229ffc;height:48px;border-radius:24px;cursor:pointer}.elbutton-style{width:96px!important;height:36px!important;border:solid 1px #229FFC!important;color:#229ffc!important;background-color:#fff!important;padding:0!important;font-size:12px!important}.borderLine-input{height:24px;border-bottom:solid 1px #eee;padding:0 8px;box-sizing:border-box;font-size:14px;color:#354052}body{background-color:#fff}.preview-app-wrapper{background-color:#fff;width:100vw;height:100%;position:absolute;background-size:cover;display:flex;align-items:center;flex-direction:column}.preview-app-wrapper .phoneDownLoadWrapper{max-width:800px;text-align:center}.preview-app-wrapper .phoneDownLoadWrapper .app-icon{width:126px;height:126px;border-radius:15px;margin-top:100px}.preview-app-wrapper .phoneDownLoadWrapper .title{color:#354052;font-weight:700;font-size:26px;height:37px;line-height:37px;margin-top:13px}.preview-app-wrapper .phoneDownLoadWrapper .info{display:flex;flex-direction:row;justify-content:center;color:#242a34;font-size:14px;line-height:20px;margin-top:5px;opacity:.5}.preview-app-wrapper .phoneDownLoadWrapper .info .desc{margin-right:12px}.preview-app-wrapper .phoneDownLoadWrapper .qrcode .tips{color:#585f69;font-size:14px;text-align:center}.preview-app-wrapper .phoneDownLoadWrapper .qrcode .qrcodeImg{margin:10px 0;width:150px;height:auto}.preview-app-wrapper .phoneDownLoadWrapper .pwd{width:200px;height:40px;border-radius:6px;margin-top:20px;background-color:transparent}.preview-app-wrapper .phoneDownLoadWrapper .downloadBtn{background-color:#229ffc;width:200px;height:44px;color:#fff;font-size:15px;margin-top:15px;font-weight:500;border-color:transparent}.preview-app-wrapper .phoneDownLoadWrapper .downloadBtn i:before{color:#fff;font-size:16px}.preview-app-wrapper .merge-wrapper{width:820px;display:flex;margin-top:20px;border-top:solid 1px #e6e6e6;padding:20px 0}.preview-app-wrapper .merge-wrapper .left{flex:1;text-align:center}.preview-app-wrapper .merge-wrapper .line{height:100px;width:1px;background-color:#e6e6e6}.preview-app-wrapper .merge-wrapper .right{flex:1;text-align:center}.preview-app-wrapper .merge-wrapper .info{display:flex;flex-direction:row;justify-content:center;color:#242a34;font-size:14px;line-height:20px;margin-top:5px;opacity:.5}.preview-app-wrapper .merge-wrapper .info .desc{margin-right:12px}.preview-app-wrapper .merge-wrapper .mergeDown{margin-top:20px}.preview-app-wrapper .history-wrapper{width:100%;margin-top:16px}.preview-app-wrapper .history-wrapper ul{padding:16px 32px}.preview-app-wrapper .history-wrapper ul li{padding:12px 0;display:flex;justify-content:space-around;font-size:12px;background:#f2f5fb}\n', document.head.appendChild(t), System.register(["./index-legacy.d570f714.js", "./vue-qr-legacy.54e8db8e.js"], (function (t) {
    "use strict";
    var e, o, n, r, i, a, p;
    return {
      setters: [function (t) {
        e = t.n, o = t.I, n = t.i, r = t.a, i = t.r, a = t.b
      }, function (t) {
        p = t.V
      }], execute: function () {
        var s = {}, d = e({
          components: {VueQr: p}, data: function () {
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
            isIos: function () {
              return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            }, isAndroid: function () {
              var t = !!navigator.userAgent.match(/(Android)\s+([\d.]+)/);
              return t
            }, showDownLoadBtn: function () {
              return !this.showPasswordInput && (this.isPhone || 1 == this.dataInfo.length)
            }, showMergeBtn: function () {
              return !this.showPasswordInput && !this.isPhone && this.dataInfo.length > 1
            }, showPasswordInput: function () {
              return this.installWithPwd
            }, showHistoryList: function () {
              return !this.showPasswordInput && this.curInfo.history.length > 0
            }
          }, mounted: function () {
            this.getAppInfo(this.$route.params.id, this.pwd), this.isIos || this.isAndroid ? this.isPhone = !0 : this.isPhone = !1
          }, created: function () {
            this.$nextTick((function () {
            }))
          }, methods: {
            formatTime: function (t) {
              return new Date(t).toFormat()
            }, getTableBackground: function (t) {
              return t % 2 == 0 ? "backgroundColor: rgb(244, 245, 247)" : "backgroundColor: white"
            }, getAppInfo: function (t, e) {
              var n = this;
              o(t, e).then((function (t) {
                console.log(t), null != t.data ? (n.installWithPwd = t.data.needAuth, n.dataInfo = t.data.list, n.isPhone && n.dataInfo.length > 1 ? n.isAndroid && "android" == n.dataInfo[0].appInfo.platform ? n.curInfo = n.dataInfo[0] : n.curInfo = n.dataInfo[1] : n.curInfo = n.dataInfo[0], n.qrCodeUrl = "".concat(window.origin).concat(n.$route.fullPath), n.loading = !1) : n.$message.error("未检测到版本信息")
              }), (function (t) {
                n.loading = !1, n.pwd = ""
              }))
            }, setDefaultIcon: function (t, e) {
              "ios" == e.platform ? t.target.src = n : "android" == e.platform ? t.target.src = r : "rn" == e.platform && (t.target.src = i)
            }, historyClickDownLoadBtn: function (t) {
              if (t.grayScaleLimit && t.grayScaleSize <= t.downloadCount) return this.$message.error("已达到灰度上限"), void this.getAppInfo(this.$route.params.id, this.pwd);
              if (this.isIos) {
                var e = document.createElement("a");
                e.setAttribute("href", t.installUrl), e.click()
              } else {
                var o = document.createElement("a"), n = t.downloadUrl;
                o.setAttribute("href", n), o.click(), fetch(n).then((function (e) {
                  var o = e.body.getReader(), n = e.headers.get("Content-Length"), r = 0;
                  o.read().then((function e(i) {
                    if (!i.done) return r += i.value.length, console.log("progress: ".concat(r / n * 100, "%")), o.read().then(e);
                    a(t._id).then((function () {
                    }), (function (t) {
                    }))
                  }))
                }))
              }
            }, clickDownLoadBtn: function (t) {
              if (t.versionInfo.grayScaleLimit && t.versionInfo.grayScaleSize <= t.versionInfo.downloadCount) return this.$message.error("已达到灰度上限"), void this.getAppInfo(this.$route.params.id, this.pwd);
              if (this.isIos) {
                var e = document.createElement("a");
                e.setAttribute("href", t.versionInfo.installUrl), e.click()
              } else {
                var o = document.createElement("a"), n = t.versionInfo.downloadUrl;
                o.setAttribute("href", n), o.click(), fetch(n).then((function (e) {
                  var o = e.body.getReader(), n = e.headers.get("Content-Length"), r = 0;
                  o.read().then((function e(i) {
                    return i.done ? (console.log("下载完成"), void a(t.versionInfo._id).then((function () {
                    }), (function (t) {
                    }))) : (r += i.value.length, console.log("progress: ".concat(r / n * 100, "%")), o.read().then(e))
                  }))
                }))
              }
            }, formatDate: function (t) {
              return t ? new Date(t).toFormat() : ""
            }, clickSure: function () {
              this.pwd ? (this.loading = !0, this.getAppInfo(this.$route.params.id, this.pwd)) : this.$message.info("请输入密码")
            }
          }
        }, (function () {
          var t = this, e = this, o = e.$createElement, n = e._self._c || o;
          return n("div", {staticClass: "preview-app-wrapper"}, [e.dataInfo.length > 0 ? n("div", {staticClass: "phoneDownLoadWrapper"}, [n("img", {
            staticClass: "app-icon",
            attrs: {src: this.curInfo.appInfo.icon || "", alt: ""},
            on: {
              error: function (o) {
                return e.setDefaultIcon(o, t.curInfo.appInfo)
              }
            }
          }), n("p", {staticClass: "title"}, [e._v(e._s(this.curInfo.appInfo.appName))]), "rn" != this.curInfo.appInfo.platform ? n("div", {staticClass: "info"}, [n("p", {staticClass: "desc"}, [e._v("版本：" + e._s(this.curInfo.versionInfo.versionName) + "(" + e._s(this.curInfo.versionInfo.versionCode) + ")")]), n("span", [e._v("大小：" + e._s((this.curInfo.versionInfo.size / 1024 / 1024).toFixed(1)) + "M")])]) : e._e(), "rn" == this.curInfo.appInfo.platform ? n("div", {staticClass: "info"}, [n("p", {staticClass: "desc"}, [e._v("版本：" + e._s(this.curInfo.versionInfo.appVersion))]), n("span", [e._v("大小：" + e._s((this.curInfo.versionInfo.size / 1024 / 1024).toFixed(2)) + "M")])]) : e._e(), n("p", {staticClass: "info"}, [e._v("发布日期： " + e._s(e.formatDate(this.curInfo.versionInfo.uploadAt)) + " ")]), n("div", {staticClass: "qrcode"}, [n("vue-qr", {
            staticClass: "qrcodeImg",
            attrs: {colorDark: "#585F69", text: e.qrCodeUrl, margin: 15}
          }), n("p", {staticClass: "tips"}, [e._v("用手机扫描二维码" + e._s("rn" == this.curInfo.appInfo.platform ? "下载" : "安装"))])], 1), e.showPasswordInput ? n("div", [n("div", [n("el-input", {
            staticClass: "pwd",
            attrs: {type: "password", placeholder: "请输入密码"},
            model: {
              value: e.pwd, callback: function (t) {
                e.pwd = t
              }, expression: "pwd"
            }
          })], 1), n("div", [n("el-button", {
            staticClass: "downloadBtn sureBtn",
            attrs: {loading: e.loading, type: "primary", round: ""},
            on: {click: e.clickSure}
          }, [e._v("确定")])], 1)]) : e._e(), "rn" != e.curInfo.appInfo.platform && e.showDownLoadBtn ? n("el-button", {
            staticClass: "downloadBtn",
            attrs: {type: "primary", round: ""},
            on: {
              click: function (t) {
                return e.clickDownLoadBtn(e.curInfo)
              }
            }
          }, [n("i", {class: "ios" === this.curInfo.appInfo.platform ? "icon-ic_ios" : "icon-ic_andr"}), e._v(" 下载安装")]) : e._e(), "rn" == e.curInfo.appInfo.platform && e.showDownLoadBtn ? n("el-button", {
            staticClass: "downloadBtn",
            attrs: {type: "primary", round: ""},
            on: {
              click: function (t) {
                return e.clickDownLoadBtn(e.curInfo)
              }
            }
          }, [e._v("下载")]) : e._e()], 1) : e._e(), e.showMergeBtn ? n("div", {staticClass: "merge-wrapper"}, [n("div", {staticClass: "left"}, [n("div", {staticClass: "info"}, [n("p", {staticClass: "desc"}, [e._v("版本：" + e._s(e.dataInfo[0].versionInfo.versionName) + "(" + e._s(e.dataInfo[0].versionInfo.versionCode) + ")")]), n("span", [e._v("大小：" + e._s((e.dataInfo[0].versionInfo.size / 1024 / 1024).toFixed(1)) + "M")])]), n("p", {staticClass: "info"}, [e._v("发布日期： " + e._s(e.formatDate(e.dataInfo[0].versionInfo.uploadAt)) + " ")]), n("el-button", {
            staticClass: "downloadBtn mergeDown",
            attrs: {type: "primary", round: ""},
            on: {
              click: function (t) {
                return e.clickDownLoadBtn(e.dataInfo[0])
              }
            }
          }, [e._v(e._s("下载 ".concat(e.dataInfo[0].appInfo.platform, " 版")))])], 1), n("div", {staticClass: "line"}), n("div", {staticClass: "right"}, [n("div", {staticClass: "info"}, [n("p", {staticClass: "desc"}, [e._v("版本：" + e._s(e.dataInfo[1].versionInfo.versionName) + "(" + e._s(e.dataInfo[1].versionInfo.versionCode) + ")")]), n("span", [e._v("大小：" + e._s((e.dataInfo[1].versionInfo.size / 1024 / 1024).toFixed(1)) + "M")])]), n("p", {staticClass: "info"}, [e._v("发布日期： " + e._s(e.formatDate(e.dataInfo[1].versionInfo.uploadAt)) + " ")]), n("el-button", {
            staticClass: "downloadBtn mergeDown",
            attrs: {type: "primary", round: ""},
            on: {
              click: function (t) {
                return e.clickDownLoadBtn(e.dataInfo[1])
              }
            }
          }, [e._v(e._s("下载 ".concat(e.dataInfo[1].appInfo.platform, " 版")))])], 1)]) : e._e(), e.showHistoryList ? n("div", {staticClass: "history-wrapper"}, [n("ul", e._l(this.curInfo.history, (function (t, o) {
            return n("li", {
              key: o, on: {
                click: function (o) {
                  return e.historyClickDownLoadBtn(t)
                }
              }
            }, ["rn" != e.curInfo.appInfo.platform ? n("div", [e._v("V" + e._s(t.versionName) + "(build " + e._s(t.versionCode) + ")")]) : e._e(), "rn" == e.curInfo.appInfo.platform ? n("div", [e._v("V" + e._s(t.appVersion))]) : e._e(), n("div", [e._v(e._s(e.formatTime(t.uploadAt)))])])
          })), 0)]) : e._e()], 1)
        }), [], !1, c, null, null, null);

        function c(t) {
          for (var e in s) this[e] = s[e]
        }

        t("default", function () {
          return d.exports
        }())
      }
    }
  }))
}();
