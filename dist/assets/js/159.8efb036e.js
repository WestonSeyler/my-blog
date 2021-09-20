(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{597:function(e,t,o){"use strict";o.r(t);var r=o(30),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("来源：https://docker-curriculum.com/\n这篇文章不错，可以作为第一篇 docker 的入门，我简单总结了下。顺便重温下之前的内容。\n如果你是刚学docker，最好跟着敲一遍。")]),e._v(" "),o("ol",[o("li",[e._v("安装Docker，略，自己去官方文档查")]),e._v(" "),o("li",[e._v("执行 "),o("code",[e._v("docker pull busybox")]),e._v(" 去官方拉镜像\nBusyBox 是一个集成了三百多个最常用Linux命令和工具的软件。\n简单的说BusyBox就好像是个大工具箱，它集成压缩了 Linux 的许多工具和命令，也包含了 Android 系统的自带的shell。")]),e._v(" "),o("li",[e._v("使用 "),o("code",[e._v("docker images")]),e._v(" 查看镜像")]),e._v(" "),o("li",[e._v("创建容器启动 "),o("code",[e._v("docker run busybox")]),e._v("\n会看到啥都没有发生，因为没有提供任何命令，容器启动后，运行个空命令就退出了。")]),e._v(" "),o("li",[e._v("如果提供个命令呢 "),o("code",[e._v('docker run busybox echo "hello from busybox"')]),e._v("\n这个能看到输出了，但是容器执行完依然退出了。")]),e._v(" "),o("li",[e._v("我想查看正在运行的容器 "),o("code",[e._v("docker ps")]),e._v("\n没有任何输出\n试试 "),o("code",[e._v("docker ps -a")]),e._v(" 可以看到刚刚运行过的容器了，注意 status 列")])]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-d2b328d30cc4fd03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),o("ol",{attrs:{start:"7"}},[o("li",[e._v("如果想以交互式方式运行容器，并进入容器终端，就用 "),o("code",[e._v("docker run -it busybox sh")]),e._v(" 注意 -it 一般是同时出现的")])]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-cd0c5ba98c0a9f31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("-t")]),e._v("  tty的缩写 终端控制台")]),e._v(" "),o("li",[o("code",[e._v("-i")]),e._v("  interactive 可交互缩写")])]),e._v(" "),o("p",[e._v("如果想知道 run 后面都能带什么参数及含义，请使用 "),o("code",[e._v("docker run --help")])])]),e._v(" "),o("ol",{attrs:{start:"8"}},[o("li",[e._v("一些术语：")])]),e._v(" "),o("ul",[o("li",[e._v("Docker Daemon - Docker为C/S架构，服务端为docker daemon，在后台运行，用于管理，构建，分发容器")]),e._v(" "),o("li",[e._v("Docker Client - 就是咱们用的命令行工具，还有 GUI 图形化的"),o("a",{attrs:{href:"https://kitematic.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kitematic"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Docker Hub - 分享，查找镜像资源的网站")])]),e._v(" "),o("h2",{attrs:{id:"webapps-with-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webapps-with-docker"}},[e._v("#")]),e._v(" WEBAPPS WITH DOCKER")]),e._v(" "),o("ol",{attrs:{start:"9"}},[o("li",[e._v("我们运行一个容器 "),o("code",[e._v("docker run --rm prakhar1989/static-site")]),o("br"),e._v(" "),o("a",{attrs:{href:"https://hub.docker.com/r/prakhar1989/static-site/",target:"_blank",rel:"noopener noreferrer"}},[e._v("prakhar1989/static-site"),o("OutboundLink")],1),e._v(" 是作者维护的镜像\n"),o("code",[e._v("--rm 当退出容器时自动移除")]),e._v("\n这里容器启动会显示了 nginx is running，但没有告诉更多的信息")])]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-48370494e43ee722.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}}),e._v("\n按 ctrl+c 退出")])]),e._v(" "),o("ol",{attrs:{start:"10"}},[o("li",[e._v("使用  "),o("code",[e._v("docker run -d -P --name static-site prakhar1989/static-site")]),e._v("\n-d  放到后台运行\n-P 将容器内应用运行使用的端口暴露出来 （ Publish all exposed ports to random ports）\n--name 给容器起个名字")])]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-7fcb7ac5b3b368cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),o("p",[e._v("端口有了，可以打开站点了，还可以使用 "),o("code",[e._v("docker run -p 8888:80 prakhar1989/static-site")]),e._v(" 指定端口")]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-8372f40ed3291b96.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),o("p",[e._v("同时运行了两个容器")]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-6e2b30efb61a838f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),o("ol",{attrs:{start:"11"}},[o("li",[e._v("暂停容器用 "),o("code",[e._v("docker stop static-site")]),e._v(" static-site 是我们给运行时给容器起的名字，也可以用ID")]),e._v(" "),o("li",[e._v("后面内容是使用 Dockerfile 构建自己的镜像并上传到AWS。由于之前讲过而且aws国内使用不方便，此处略过。")]),e._v(" "),o("li",[e._v("当docker安装后，会自动创建三个网络")])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\nc2c695315b3a        bridge              bridge              local\na875bec5d6fd        host                host                local\nead0e804a67b        none                null                local\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br")])]),o("p",[e._v("默认使用的是 bridge 桥接。使用 "),o("code",[e._v("docker network inspect bridge")]),e._v(" 在 Containers 下面看到正在使用该网络方式的所有容器。默认所有的容器都会使用bridge，通过刚才的命令还可以看到每个容器分配到的内部IP。 一般是 172.17.0.xx。 为了安全及方便，我们需要使某几个容器之间使用自己的桥接网络，如何做到呢？\n14. 使用 "),o("code",[e._v("docker network")]),e._v(" 创建一个新的bridge网络，比如 "),o("code",[e._v("docker network create foodtrucks-net")])]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-91bd41ce9bebd25f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),o("ol",{attrs:{start:"15"}},[o("li",[e._v("运行 Elasticsearch 容器并把刚创建的网络分配给他\n"),o("code",[e._v('docker run -d --name es --net foodtrucks-net -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.3.2')])]),e._v(" "),o("li",[e._v("然后运行Python Flask 容器，并进到bash终端\n"),o("code",[e._v("docker run -it --rm --net foodtrucks-net finleyma/foodtrucks-web bash")]),e._v("\n来测试下能否访问到 Elasticsearch 容器\n"),o("code",[e._v("curl es:9200")]),o("br"),e._v("\ntips: 访问容器网络没有输入容器的IP地址，用的容器名称表示，这种能力叫 automatic service discovery")])]),e._v(" "),o("p",[e._v("备注：elasticsearch挺占内存的，我服务器4G内存，在docker运行启动后出现了警告")])])}),[],!1,null,null,null);t.default=a.exports}}]);