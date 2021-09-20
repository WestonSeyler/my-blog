(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{643:function(s,t,n){"use strict";n.r(t);var a=n(30),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("原文："),n("a",{attrs:{href:"https://showme.codes/2019-03-10/electronjs-pipeline-demo/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Electron 应用的流水线设计"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("面向读者：需要了解 Jenkins 流水线的基本语法。")]),s._v(" "),n("p",[s._v("Electron 是由 Github 开发，用 HTML，CSS 和 JavaScript 来构建跨平台桌面应用程序的一个开源库。")]),s._v(" "),n("p",[s._v("本文将介绍 Electron 桌面应用的流水线的设计。")]),s._v(" "),n("p",[s._v("但是如何介绍呢？倒是个大问题。笔者尝试直接贴代码，在代码注释中讲解。这是一次尝试，希望得到你的反馈。")]),s._v(" "),n("h4",{attrs:{id:"完整代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完整代码"}},[s._v("#")]),s._v(" 完整代码")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们决定每一个阶段指定 agent，所以，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 流水线的 agent 设置为 none，这样不会占用 agent")]),s._v("\nagent none\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定整条流水线的环境变量")]),s._v("\nenvironment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  APP_VERSION "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('""')]),s._v("\n  APP_NAME "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"electron-webpack-quick-start"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nstages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"生成版本号"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("label "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"linux"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    steps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          APP_VERSION "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          echo "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"version is '),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'并行构建'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快速失败，只要其中一个平台构建失败，")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 整次构建算失败")]),s._v("\n    failFast "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parallel 闭包内的阶段将并行执行")]),s._v("\n    parallel "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Windows平台下构建'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("label "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"windows && nodejs"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          echo "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Linux平台下构建'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("label  "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"linux && nodejs"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不同平台可能存在不同的环境变量")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// environment 支持阶段级的环境变量")]),s._v("\n        environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            SUFFIX "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"tar.xz"')]),s._v("\n            APP_PLATFORM "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"linux"')]),s._v("\n            ARTIFACT_PATH "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"dist/'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("-"),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_PLATFORM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("-"),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("."),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SUFFIX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Jenkins nodejs 插件提供的 nodejs 包装器")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包装器内可以执行 npm 命令。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// nodejs10.15.2 是在 Jenkins 的全局工具配置中添加的 NodeJS 安装器")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nodejs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nodeJSInstallationName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nodejs10.15.2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行具体的构建命令")]),s._v("\n              sh "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"npm install yarn"')]),s._v("\n              sh "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"yarn version --new-version '),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n              sh "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"yarn install"')]),s._v("\n              sh "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"yarn dist --linux deb '),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SUFFIX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上传制品")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uploadArtifact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("APP_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ARTIFACT_PATH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将括号合并是为了让代码看起来紧凑，提升阅读体验。下同。")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mac平台下构建'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("label "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"mac && nodejs"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mac 下阶段1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" echo "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"staging 1"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mac 下阶段2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" echo "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"staging 2"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"其它阶段，读者可根据情况自行添加"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("label "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"linux"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    steps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        echo "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"发布"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\npost "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  always "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cleanWs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清理工作空间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" ver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" gitCommitId "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GIT_COMMIT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("take")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("-"),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gitCommitId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("."),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BUILD_NUMBER"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uploadArtifact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" appName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" appVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" artifactPath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  echo "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"根据参数将制品上传到制品库中，待测试"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br")])]),n("h4",{attrs:{id:"代码补充说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码补充说明"}},[s._v("#")]),s._v(" 代码补充说明")]),s._v(" "),n("p",[s._v("因为 Electron 是跨平台的，我们需要将构建过程分别放到 Windows、Linux、Mac 各平台下执行。所以，不同平台的构建任务需要执行在不同的 agent 上。我们通过在 stage 内定义 agent 实现。如在“Mac平台下构建”的阶段中，"),n("code",[s._v('agent {label "mac && nodejs" }')]),s._v(" 指定了只有 label 同时包括了 mac 和 nodejs 的 agent 才能执行构建。")]),s._v(" "),n("p",[s._v("多平台的构建应该是并行的，以提升流水线的效率。我们通过 parallel 指令实现。")]),s._v(" "),n("p",[s._v("另外，默认 Electron 应用使用的三段式版本号设计，即 Major.Minor.Patch。但是笔者认为三段式的版本号信息还不够追踪应用与构建之间的关系。笔者希望版本号能反应出构建号和源代码的 commit id。函数 generateVersion 用于生成此类版本号。生成的版本号，看起来类似这样：1.0.0-f7b06d0.28。")]),s._v(" "),n("p",[s._v("完整源码地址：https://github.com/zacker330/electronjs-pipeline-demo")]),s._v(" "),n("h4",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),n("p",[s._v("上例中，Electron 应用的流水线设计思路，不只是针对 Electron 应用，所有的跨平台应用的流水线都可以参考此思路进行设计。设计思路大概如下：")]),s._v(" "),n("p",[s._v("多平台构建并行化。本文只有操作系统的类型这个维度进行了说明。现实中，还需要考虑其它维度，如系统位数（32位、64位）、各操作系统下的各版本。\n各平台下的构建只做一次编译打包。并将制品上传到制品库，以方便后续步骤或阶段使用。\n全局变量与平台相关变量进行分离。\n最后，希望能给读者带来一些启发。")]),s._v(" "),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考：")]),s._v(" "),n("ul",[n("li",[s._v("持续交付的八大原则："),n("a",{attrs:{href:"https://blog.csdn.net/tony1130/article/details/6673741",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/tony1130/article/details/6673741"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("Jenkins nodejs 插件："),n("a",{attrs:{href:"https://plugins.jenkins.io/nodejs",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://plugins.jenkins.io/nodejs"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("Electron 版本管理："),n("a",{attrs:{href:"https://electronjs.org/docs/tutorial/electron-versioning#semver",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://electronjs.org/docs/tutorial/electron-versioning#semver"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);