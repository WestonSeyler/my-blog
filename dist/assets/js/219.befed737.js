(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{656:function(s,n,t){"use strict";t.r(n);var a=t(30),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"pipeline支持的指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipeline支持的指令"}},[s._v("#")]),s._v(" pipeline支持的指令")]),s._v(" "),t("p",[s._v("显然，基本结构满足不了现实多变的需求。所以，Jenkins pipeline通过各种指令(directive) 来丰富自己。指令可以被理解为对Jenkins pipeline基本结构的补充。")]),s._v(" "),t("p",[s._v("Jenkins pipeline支持的指令有:")]),s._v(" "),t("ul",[t("li",[s._v("environment: 用于设置环境变量，可定义在stage或pipeline部分。")]),s._v(" "),t("li",[s._v("tools: 可定义在pipeline或stage部分。它会自动下载并安装我们指定的工具，并将其加入PATH变量中。")]),s._v(" "),t("li",[s._v("input: 定义在stage部分，会暂停 pipeline，提示你输入内容。")]),s._v(" "),t("li",[s._v("options: 用于配置 Jenkins pipeline 本身的选项，比如 "),t("code",[s._v("options {retry (3) }")]),s._v("指当pipeline失败时再重试2次。options指令 可定义在stage或pipeline部分。")]),s._v(" "),t("li",[s._v("parallel: 并行执行多个step。在pipeline插件 1.2版本后，parallel开始支 持对多个阶段进行并行执行。")]),s._v(" "),t("li",[s._v("parameters: 与input不同，parameters是 执行pipeline前传入的一些参数。")]),s._v(" "),t("li",[s._v("triggers: 用于定义执行pipeline的触发器。")]),s._v(" "),t("li",[s._v("when: 当满足when定义的条件时，阶段才执行。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("parameters 和 when 的使用会在后面详情介绍")]),s._v(" "),t("p",[s._v('在使用指令时，需要注意的是每个指令都有自己的"作用域"。如果指令使用的位置不正确，Jenkins将会报错。')])]),s._v(" "),t("p",[s._v("options指令用于配置整个Jenkins pipeline本身的选项")]),s._v(" "),t("p",[s._v("例子")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("pipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n    options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOURS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("disableConcurrentBuilds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[s._v("整个pipeline执行超过一个小时将中止")]),s._v(" "),t("li",[s._v("禁止pipeline同时执行，避免抢占资源或调用冲突")])]),s._v(" "),t("p",[s._v("stage 的 options 指令类似于流水线根目录上的 options。")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("pipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n    stages "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOURS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[s._v("指定 Example 阶段的执行超时时间, 在此之后，Jenkins 将中止流水线运行。")])]),s._v(" "),t("p",[s._v("options指令具体包含的参数比较多，不一一介绍了，见"),t("a",{attrs:{href:"https://jenkins.io/zh/doc/book/pipeline/syntax/#options",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://jenkins.io/zh/doc/book/pipeline/syntax/#options",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://jenkins.io/zh/doc/book/pipeline/syntax/#options"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);