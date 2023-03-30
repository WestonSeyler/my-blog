(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{580:function(e,t,s){"use strict";s.r(t);var a=s(30),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("PHPStorm整合一些了Docker相关的功能，并有官方的"),s("a",{attrs:{href:"https://hub.docker.com/r/phpstorm/php-71-apache-xdebug/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker镜像"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("下面介绍怎么通过PHPStorm创建并运行一个docker容器项目并启用xdebug，以Windows系统为例")]),e._v(" "),s("ol",[s("li",[e._v('运行 Docker for Windows，Docker运行成功后桌面右下角有图标，右键选择Settings\n勾选 "Expose daemon on tcp://localhost:2375" 就是暴露守护进程。')])]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-32abe015ec6f0d83.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v("比如有一个空项目叫 Docker-compose-demo，用PHPStorm打开\n新建 "),s("code",[e._v("docker-compose.yml")]),e._v("文件")])]),e._v(" "),s("li",[s("p",[e._v("内容如下：")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("version: '2'\nservices:\n  webserver:\n    image: phpstorm/php-71-apache-xdebug-26\n    ports:\n      - \"6080:80\"\n    volumes:\n      - ./:/var/www/html\n    environment:\n      #change the line below with your IP address\n      XDEBUG_CONFIG: remote_host=host.docker.internal\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("host.docker.internal 指运行IDE的本机IP\n4.  PHPStorm 中菜单项 'Run - Edit Configurations' 配置Docker信息。因为之前我们开放了docker的守护进行，可以通过TCP协议，地址localhost:2372进行连接。PHPStorm连接上会显示 success")]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-11055592fc40363b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("鼠标右键选择 "),s("code",[e._v("Run 'docker-compose.yml'")]),e._v("，通过PHPStorm下载镜像并运行容器")])]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-158940ebd3c8d5ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("p",[e._v("可以看到本机安装过的Docker的容器和镜像。\n当前正在执行 docker-compose.yml")]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-2f5f6d49f0b7819f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("p",[e._v("运行成功了，可以直观的看到容器的相关信息")]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-09b95cb716bf5062.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[e._v("项目根目录创建index.php，浏览器打开 "),s("code",[e._v("localhost:6080")]),e._v(" 查看效果")]),e._v(" "),s("li",[e._v("因为已经配置了xdebug，直接就可以用。\n具体 chrome浏览器安装 xdebug helper\n新建index.php\n内容：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$arr = ['jack', 'smith', 'www'];\nforeach ($arr as $item) {\n   # 在下面的 echo 处打断点\n    echo $item;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-7056ab428f86095d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}}),e._v("\n如图，每点一次步进就显示当前运行时的相关变量信息。非常方便。")])]),e._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结：")]),e._v(" "),s("p",[e._v("使用docker大大方便了咱们的环境搭建流程。")]),e._v(" "),s("p",[e._v("这篇文章我是看了"),s("a",{attrs:{href:"https://www.youtube.com/watch?v=bWbXMy_mxxE",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方的视频"),s("OutboundLink")],1),e._v("(需翻墙) 后写的。\n还有配置文件只配置了apache服务器，关于mysql等官方镜像中其实也提供了。请自行修改docker-compose.yml。")]),e._v(" "),s("p",[e._v("PHPStorm官方镜像：\nhttps://github.com/JetBrains/phpstorm-docker-images/blob/master/docker-compose.yml")])])}),[],!1,null,null,null);t.default=r.exports}}]);