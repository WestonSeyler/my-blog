(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{724:function(n,s,e){"use strict";e.r(s);var a=e(30),r=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("开发人员在开发过程中有意无意的在代码中使用console.log查看变量内容进行调试。\n在正式环境最好屏蔽掉这些信息。更好的习惯是console.log用完就删掉，多使用断点调试。")]),n._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-f6e07b446cf2d1b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),n._v(" "),e("p",[n._v("如果不想一个个删掉console.log，需要在正式环境屏蔽log信息。可按如下方法：\n修改根目录的main.ts文件，添加disableConsole方法")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\nimport { environment } from './environments/environment';\nimport 'hammerjs';\n\nif (environment.production) {\n  enableProdMode();\n  // 只在正式正式环境调用\n  disableConsole();\n}\n\nplatformBrowserDynamic().bootstrapModule(AppModule)\n  .catch(err => console.error(err));\n\n// 覆盖console方法为空函数\nfunction disableConsole() {\n  Object.keys(window.console).forEach(v => {\n    window.console[v] = function() { };\n  });\n}\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);