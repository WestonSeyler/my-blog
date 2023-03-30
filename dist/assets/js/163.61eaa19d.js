(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{601:function(o,t,e){"use strict";e.r(t);var a=e(30),i=Object(a.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("上一节我们构建了一个Node镜像。\n这里我有一台已经安装了docker的Linux主机，比如 IP 是154.8.100.124。\n我只需在主机上执行 "),e("code",[o._v("docker run -d -p 3000:3000 finleyma/express")]),o._v("，就会部署并运行项目\n然后浏览器中输入154.8.100.100:3000 就可以访问了。\n这里牵涉到两个问题：")]),o._v(" "),e("ol",[e("li",[o._v("每次修改了项目代码需要重新构建新的镜像，然后push到仓库。")]),o._v(" "),e("li",[o._v("每次还得登录服务器从仓库拉最新的镜像重新运行 ，这样才能反映出变化。")])]),o._v(" "),e("p",[o._v("持续集成就能帮我们做到自动化。\n不过有几个条件：")]),o._v(" "),e("ol",[e("li",[o._v("需要一个提供持续集成服务的平台，这里我使用国内的 "),e("a",{attrs:{href:"https://www.daocloud.io/",target:"_blank",rel:"noopener noreferrer"}},[o._v("daocloud"),e("OutboundLink")],1),o._v("\n他可以接入我们的主机，提供在线 web 的方式管理运行在主机上面的容器。")]),o._v(" "),e("li",[o._v("需要一台能访问的且安装了docker的主机（最好是Linux）。")]),o._v(" "),e("li",[o._v("代码要部署到 github，coding 等 daocloud 支持的代码托管商。")])]),o._v(" "),e("p",[o._v("下面介绍下流程：\n去daocloud绑定仓库，和主机\n根据仓库构建镜像\n配置")]),o._v(" "),e("ol",[e("li",[o._v("去 "),e("a",{attrs:{href:"https://www.daocloud.io/",target:"_blank",rel:"noopener noreferrer"}},[o._v("daocloud"),e("OutboundLink")],1),o._v(" 申请账号，过程略。")]),o._v(" "),e("li",[o._v("去 "),e("a",{attrs:{href:"https://dashboard.daocloud.io",target:"_blank",rel:"noopener noreferrer"}},[o._v("管理面板"),e("OutboundLink")],1),o._v(" 添加我们的主机")])]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-6b7dc9bd1d35ac9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[o._v("查看主机上运行的 docker相关的信息\n在主机上我们得敲 docker info, docker inspect 等。这里直观的多。")])]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-111ea176fbbf81bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[o._v("添加应用")])]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-14db44b23ce8f765.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[o._v("添加项目，需要绑定 github 或 coding代码源\n代码源就是上节的express项目，仓库地址是：https://coding.net/u/finley/p/docker-express-demo。\n里面有Dockerfile。我们让daocloud帮忙构建，并且发布到主机上面。")])]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-9054bde008ae9a3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("p",[o._v("在流程定义中构建阶段后面添加发布阶段，选择发布到自有主机")]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-3a8bf596d2b0be5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("p",[o._v("这个过程就是push代码之后，daocloud要根据Dockerfile去构建镜像，构建之前可以要运行测试脚本，构建成功之后可能要发送提醒。\n默认是图形化的配置，也可以切换到yaml形式，编写流程定义 daocloud.yml 文件。\n这里有个细节，如果你切换到了yaml格式，内容为空。push代码不会触发自动构建的。\n稍微吐槽下daocloud做的不够人性化，流程定义没有帮助提示。比如匹配分支，满足条件那块，我不知道能填哪些，你弄个问号，鼠标指上去显示几行描述也好啊")]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-10d244b22070de1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[o._v("这样就实现了，每当本地push代码到仓库，daocloud会重新构建镜像然后发布到主机。")])]),o._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-594d11ea70358017.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),o._v(" "),e("p",[o._v("有很多细节没有讲到，请自行查看提供的文档。")]),o._v(" "),e("p",[o._v("参考：")]),o._v(" "),e("ul",[e("li",[o._v("http://guide.daocloud.io/dcs/ci-9863687.html")]),o._v(" "),e("li",[o._v("https://github.com/Ye-Ting/docker-ci/blob/master/daocloud.md")])])])}),[],!1,null,null,null);t.default=i.exports}}]);