(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{639:function(s,e,t){"use strict";t.r(e);var n=t(30),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"pipeline-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-是什么"}},[s._v("#")]),s._v(" pipeline 是什么")]),s._v(" "),t("p",[s._v("从某种抽象层次上讲，部署流水线(Deployment pipeline)是指从软件版本控制库到用户手中这一过程的自动化表现形式。")]),s._v(" "),t("p",[s._v("Jenkins 2.x 支持 pipeline as code，可以通过”代码“来描述部署流水线。")]),s._v(" "),t("p",[s._v('使用"代码”而不是UI的意义在于:')]),s._v(" "),t("ul",[t("li",[s._v("更好地版本化:将pipeline提交到软件版本库中进行版本控制。")]),s._v(" "),t("li",[s._v("更好地协作: pipeline的每次修改对所有人都是可见的。除此之外，还可以对pipeline进行代码审查。")]),s._v(" "),t("li",[s._v("更好的重用性:手动操作没法重用，但是代码可以重用。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("总结：创建Jenkins 项目尽量使用 pipeline 风格。是2.x最大特别，也是官方主推的特性，是发展趋势。")])]),s._v(" "),t("h3",{attrs:{id:"jenkinsfile-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkinsfile-是什么"}},[s._v("#")]),s._v(" Jenkinsfile 是什么")]),s._v(" "),t("p",[s._v("Jenkinsfile就是一个文本文件，也就是部署流水线概念在Jenkins中的表现形式。像Dockerfile之于Docker。所有部署流水线的逻辑都写在Jenkinsfile中。\n建议把Jenkinsfile跟项目源码一块加入到版本控制中，这样方便项目成员了解构建构建和流程。当然出于安全，有些环境变量和参数等可以管理在Jenkins管理平台上。具体后续会有介绍。")]),s._v(" "),t("h3",{attrs:{id:"pipeline-基本构成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-基本构成"}},[s._v("#")]),s._v(" pipeline 基本构成")]),s._v(" "),t("p",[s._v("写 pipeline 就是写 Groovy 代码，Jenkins pipeline 其实就是基于Groovy语言实现的一种领域DSL(Domain Specific Language)。")]),s._v(" "),t("p",[s._v("Jenkins pipeline支持两种语法，声明式和脚本式，前者简单，结构化好，后者灵活，扩展性好，但是需要对Groovy比较熟练。\n声明式语法更符合阅读习惯，所有示例都会使用声明式语法。")]),s._v(" "),t("p",[s._v("pipeline的内容包含执行编译、打包、测试、输出测试报告等步骤。")]),s._v(" "),t("p",[s._v("如下图，声明式pipeline的语法结构概览，粗线边框的表示必需的")]),s._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-0179c7d94aa620db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),t("p",[s._v("例1   一个最简单的声明式pipeline")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  agent any\n   // stages 包含一个或多个阶段"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("的容器\n  stages "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     // stage 阶段，pipleline流水线由一个或多个阶段"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("组成，每个阶段必须有名称，这里build就是此阶段的名称\n     stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       // steps，阶段中的一个或多个具体步骤"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("step"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("的容器\n       steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是是具体的步骤，真正”做事“的，不可再拆分的最小操作")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[s._v("所有的声明必须包含在 pipeline 语句块中。")]),s._v(" "),t("li",[s._v("块只能由 stage, directives (指令，后续会讲到) 或 steps 组成。")]),s._v(" "),t("li",[s._v("agent：指定流水线的执行位置，流水线中的每个阶段都必须在某个地方（物理机，虚拟机或 Docker 容器）执行，agent 部分即指定具体在哪里执行。")]),s._v(" "),t("li",[s._v("echo 是内置命令，用来输出一段文本，还有些命令是安装插件后才有的，参见"),t("a",{attrs:{href:"https://jenkins.io/doc/pipeline/steps/workflow-basic-steps/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("step： 步骤，可拆分最小单元，真正“做事”的语句。如"),t("code",[s._v('echo "hello world"')]),s._v("表示输出一句话。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("有些插件安装后可以直接在pipeline中使用，如发送邮件的"),t("code",[s._v("Extended E-mail Notification")]),s._v("，安装后可以直接")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('steps { \n    emailext to: \'mafeifan@qq.com\', subject: "test", body:  "email content"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("来发送邮件")])]),s._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[s._v("https://blog.csdn.net/u011541946/article/details/78220110")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://jenkins.io/zh/doc/book/pipeline/",target:"_blank",rel:"noopener noreferrer"}},[s._v("流水线"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://jenkins.io/zh/doc/book/pipeline/syntax/",target:"_blank",rel:"noopener noreferrer"}},[s._v("流水线语法"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);