(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{825:function(e,t,r){"use strict";r.r(t);var a=r(30),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文地址"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("在本系列的"),r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-1/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("第一篇"),r("OutboundLink")],1),e._v("文章中着重介绍了 Git 的基础特性。本文作为本系列的第二篇文章将介绍 Git 和 GitHub 的基础配置，包括 Git 安装、使用 Git 克隆 GitHub 上的代码库、使用 Git 克隆远端代码仓库、Git 的基本配置和设置忽略提交规则。您在阅读完本文将有能力完成本地 Git 环境的基础配置，为接下来的 Git 日常使用做基础。")]),e._v(" "),r("p",[e._v("GitHub 是一个代码托管平台，如果开发者想要在本地进行开发工作，那么就需要使用到 Git 的客户端工具来连接到 GitHub，再克隆代码到本地。如果您是重度的 GUI 使用者，那么有很多 GUI 客户端可以选择，在 Git 的官网就专门有个页面列出了业内的"),r("a",{attrs:{href:"https://git-scm.com/downloads/guis/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" GUI 客户端"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("但遗憾的是往往 GUI 客户端只能提供 Git 部分的功能，如果想要享受到 Git 自底向上强大的功能，使用命令行的方式来操作 Git 是不二之选。建议无论您是否擅长使用命令行工作，都可以尝试使用命令行方式来操作 Git。本文将只介绍如何从命令行来连接到 GitHub。")]),e._v(" "),r("h2",{attrs:{id:"安装-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[e._v("#")]),e._v(" 安装 Git")]),e._v(" "),r("p",[e._v('使用命令行方式操作 Git 工具，需要本地安装 Git。注意，这里没有使用 "Git 客户端" 一词，因为 Git 作为一个开源版本控制系统，本身既可以作为客户端工具，也可以用于建立服务器端代码库，所以本质上 Git 作为工具来讲没有客户端和服务器端之分。')]),e._v(" "),r("p",[e._v("本地安装 Git 十分简单。")]),e._v(" "),r("p",[e._v("对于 Windows 用户，可以下载 "),r("a",{attrs:{href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git For Windows"),r("OutboundLink")],1),e._v(" 工具。下载安装成功之后，我们可以得到一个 Git Bash 工具，它是一个类 Linux Bash 工具。在该工具中我们可以直接执行 Git 相关命令。如图 1 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-1-git-bash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-1-git-bash"}},[e._v("#")]),e._v(" 图 1. Git Bash")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-8fbb7bd4ddd34b12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N10089",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("对于 Mac 和 Linux 用户，只需通过对应的包管理工具安装即可，如清单 1 所示：\n清单 1. Mac 和 Linux 下安装 Git")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ brew install git         # For Mac\n$ apt-get install git      # For Ubuntu\n# yum install git          # For RedHat EL, CentOS\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("h2",{attrs:{id:"使用-git-克隆-github-代码库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-克隆-github-代码库"}},[e._v("#")]),e._v(" 使用 Git 克隆 GitHub 代码库")]),e._v(" "),r("p",[e._v("安装 Git 成功之后，我们就可以使用 Git 克隆 GitHub 上的代码库，本节仍然以我的代码库"),r("a",{attrs:{href:"https://github.com/caozhi/repo-for-developerworks",target:"_blank",rel:"noopener noreferrer"}},[e._v(" repo-for-developerworks "),r("OutboundLink")],1),e._v("为例。")]),e._v(" "),r("p",[e._v("GitHub 提供了两种克隆方式：HTTPS 和 SSH。我们可以点击仓库页面上的 **Clone or download **按钮来查看用于克隆的链接，同时可以点击浮动框右上角的 "),r("strong",[e._v("Use SSH/Use HTTPS")]),e._v(" 换我们想要克隆的 link，如图 2 和 图 3 所示。注意，这里只是切换查看不同的链接，而不是设置代码库不同的链接方式。")]),e._v(" "),r("h5",{attrs:{id:"图-2-查看-https-克隆链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-2-查看-https-克隆链接"}},[e._v("#")]),e._v(" 图 2. 查看 HTTPS 克隆链接")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-363a4b5bc4090d80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N100B1",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("h5",{attrs:{id:"图-3-查看-ssh-克隆链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-3-查看-ssh-克隆链接"}},[e._v("#")]),e._v(" 图 3. 查看 SSH 克隆链接")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-df49141b06c7bf3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N100BB",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("由此我们可以获得两个 URL：")]),e._v(" "),r("ul",[r("li",[e._v("HTTPS 链接："),r("code",[e._v("https://github.com/caozhi/repo-for-developerworks.git")])]),e._v(" "),r("li",[e._v("SSH 链接："),r("code",[e._v("git@github.com:caozhi/repo-for-developerworks.git")])])]),e._v(" "),r("h3",{attrs:{id:"使用-https-进行克隆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-https-进行克隆"}},[e._v("#")]),e._v(" 使用 HTTPS 进行克隆")]),e._v(" "),r("p",[e._v("由于代码库是开放的，因此使用 HTTPS 方式克隆时，无需 GitHub 用户名密码，如清单 2 所示：")]),e._v(" "),r("h5",{attrs:{id:"清单-2-使用-https-进行克隆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清单-2-使用-https-进行克隆"}},[e._v("#")]),e._v(" 清单 2. 使用 HTTPS 进行克隆")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("caozhi@ clone$ git clone https://github.com/caozhi/repo-for-developerworks.git\nCloning into 'repo-for-developerworks'...\nremote: Counting objects: 14, done.\nremote: Compressing objects: 100% (9/9), done.\nremote: Total 14 (delta 3), reused 5 (delta 1), pack-reused 0\nUnpacking objects: 100% (14/14), done.\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("p",[e._v("顺便提一下，进行 pull 和 fetch 操作时也无需用户名密码认证。因为 GitHub 的机制允许随意免费下载任何公开的代码库，如若要 push 代码需经过认证或者经过作者同意才可。当要进行 push 时，会出现提示要求输入用户名密码，如清单 3 所示：\n清单 3. HTTPS 方式下 push 代码")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("caozhi@ repo-for-developerworks$ echo change >> README.md   ## make some modification\ncaozhi@ repo-for-developerworks$ git add .\ncaozhi@ repo-for-developerworks$ git commit -m \"changes\"\n[master d774ecf] changes\n 1 file changed, 1 insertion(+)\ncaozhi@ repo-for-developerworks$ git push\nUsername for 'https://github.com': caozhi0321@gmail.com    ## Enter GitHub account name\nPassword for 'https://caozhi0321@gmail.com@github.com':   ## Enter Password\nCounting objects: 6, done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (4/4), done.\nWriting objects: 100% (6/6), 528 bytes | 528.00 KiB/s, done.\nTotal 6 (delta 2), reused 0 (delta 0)\nremote: Resolving deltas: 100% (2/2), completed with 1 local object.\nTo https://github.com/caozhi/repo-for-developerworks.git\n   075c130..d774ecf  master -> master\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br")])]),r("p",[e._v("使用 SSH 进行克隆\n使用 SSH 方式进行克隆，需要一步额外的配置 SSH-KEY 的操作。首先需要本地生成一个 SSH Key。我们可以借助 ssh-keygen 工具生成一对 RSA 的秘钥：私钥 id_rsa 和公钥 id_rsa.pub。生成的秘钥文件会默认放在 home 目录下的 .ssh 目录下，如图 4 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-4-使用-ssh-keygen-生成-rsa-秘钥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-4-使用-ssh-keygen-生成-rsa-秘钥"}},[e._v("#")]),e._v(" 图 4. 使用 ssh-keygen 生成 RSA 秘钥")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-d661d82aee2699bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N100FB",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("先将 "),r("code",[e._v("id_rsa.pub")]),e._v(" 公钥文件的内容复制到剪贴板，如图 5 所示，使用 "),r("code",[e._v("cat id_rsa.pub")]),e._v(" 命令可以查看公钥内容，随后将该公钥导入到 GitHub 里的账户之下。")]),e._v(" "),r("h5",{attrs:{id:"图-5-查看-id-rsa-pub-公钥文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-5-查看-id-rsa-pub-公钥文件"}},[e._v("#")]),e._v(" 图 5. 查看 id_rsa.pub 公钥文件")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-4be399c862e5e47e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N1010D",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在 GitHub 页面右上角的头像里点击展开一个下拉菜单，点击 "),r("strong",[e._v("Settings")]),e._v(" 可以打开个设置页面，如图 6 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-6-打开-github-设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-6-打开-github-设置"}},[e._v("#")]),e._v(" 图 6. 打开 GitHub 设置")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-4b9c763f68af2725.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N1011C",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("打开 **SSH and GPG keys **的配置页面，点击右上角的 "),r("strong",[e._v("New SSH key")]),e._v(" 按钮，如图 7 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-7-打开-ssh-and-gpg-keys-的配置页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-7-打开-ssh-and-gpg-keys-的配置页面"}},[e._v("#")]),e._v(" 图 7. 打开 SSH and GPG keys 的配置页面")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-0062406fdac85fac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N1012E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在打开的页面中先设置一个您想导入的公钥的名称，再将前面复制的公钥内容粘贴到大文本框中，点击 "),r("strong",[e._v("Add SSH key")]),e._v(" 即可，如图 8 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-8-输入-key-的名称及其内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-8-输入-key-的名称及其内容"}},[e._v("#")]),e._v(" 图 8. 输入 Key 的名称及其内容")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-5143176619d5deea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[e._v("页面自动跳转回 "),r("strong",[e._v("SSH and GPG keys")]),e._v(" 设置页面，您可以看到在我的账号下成功新增了一个 SSH Key，如图 9 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-9-查看已经添加的-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-9-查看已经添加的-key"}},[e._v("#")]),e._v(" 图 9. 查看已经添加的 Key")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-63956f5dea65ec3c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N1014C",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("此时我们可以使用 SSH 的方式进行代码克隆，还可以使用 "),r("code",[e._v("ssh -T")]),e._v(" 命令检测是否配置成功, 如清单 4 和 5 所示：")]),e._v(" "),r("h5",{attrs:{id:"清单-4-使用-ssh-方式克隆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清单-4-使用-ssh-方式克隆"}},[e._v("#")]),e._v(" 清单 4. 使用 SSH 方式克隆")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("caozhi@ $ git clone git@github.com:caozhi/repo-for-developerworks.git\nCloning into 'repo-for-developerworks'...\nremote: Counting objects: 20, done.\nremote: Compressing objects: 100% (12/12), done.\nremote: Total 20 (delta 5), reused 10 (delta 2), pack-reused 0\nReceiving objects: 100% (20/20), done.\nResolving deltas: 100% (5/5), done.\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br")])]),r("h5",{attrs:{id:"清单-5-检测-ssh-是否配置成功"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清单-5-检测-ssh-是否配置成功"}},[e._v("#")]),e._v(" 清单 5. 检测 SSH 是否配置成功")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("caozhi@bogon:~$ ssh -T git@github.com\nHi caozhi! You've successfully authenticated, but GitHub does not provide shell access.\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("使用 SSH 的方式进行克隆，将使得我们本地与 GitHub 之间建立了信任连接，也就意味着之后所有需要进行用户认证的地方都不再需要显式地用户名密码认证。例如 "),r("code",[e._v("git push")]),e._v(" 会直接通过 SSH 进行认证。经验表明，使用 SSH 的另一个好处是在网络环境较差的情况下，其稳定性要高于 HTTPS 连接。")]),e._v(" "),r("p",[e._v("至此，我们成功地使用 Git 命令行方式克隆了代码库，之后就可以进行正常的日常开发。")]),e._v(" "),r("h2",{attrs:{id:"使用-git-克隆远程仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-克隆远程仓库"}},[e._v("#")]),e._v(" 使用 Git 克隆远程仓库")]),e._v(" "),r("p",[e._v("当一个开发者刚进入某一项目，一般来说他所要做的第一件事是克隆远程仓库到本地，以进行本地开发工作。远程仓库可以是来自于 GitHub 或者 GitLab 等代码托管服务，也可以是项目组自己所搭设的 Git 服务器。无论是哪种远程仓库，都可以使用 "),r("code",[e._v("git clone")]),e._v(" 命令 "),r("code",[e._v("git clone <repository> [local_path]")]),e._v(" 将其从远端克隆到本地。命令中间的 "),r("code",[e._v("<repository>")]),e._v(" 根据远端仓库提供的连接方式不同，其形式可能不同，例如：")]),e._v(" "),r("ul",[r("li",[e._v("GitHub 的 HTTPS 连接：\n"),r("code",[e._v("https://github.com/caozhi/repo-for-developerworks.git")])]),e._v(" "),r("li",[e._v("GitHub 的 SSH 连接：\n"),r("code",[e._v("git@github.com:caozhi/repo-for-developerworks.git")])]),e._v(" "),r("li",[e._v("自建仓库的 SSH 连接：\n"),r("code",[e._v("git_user@192.168.0.1:/usr/local/repo-for-developerworks.git")])])]),e._v(" "),r("p",[e._v("其中前两种 GitHub 的连接方式，其仓库的连接字符串可以在 GitHub 的对应仓库页面中找到，如前"),r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#1%E5%9B%BE2%E6%9F%A5%E7%9C%8BHTTPS%E5%85%8B%E9%9A%86%E9%93%BE%E6%8E%A5outline",target:"_blank",rel:"noopener noreferrer"}},[e._v("图 2"),r("OutboundLink")],1),e._v(" 和"),r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#1%E5%9B%BE3%E6%9F%A5%E7%9C%8BSSH%E5%85%8B%E9%9A%86%E9%93%BE%E6%8E%A5outline",target:"_blank",rel:"noopener noreferrer"}},[e._v("图 3"),r("OutboundLink")],1),e._v("所示。")]),e._v(" "),r("p",[e._v("第三种自建仓库的 URL 一般需要提供远端服务器上的账号、host 和路径。以上面例子中的连接字符串"),r("code",[e._v("git_user@192.168.0.1:/usr/local/repo-for-developerworks.git")]),e._v(" 为例：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("git_user")]),e._v(" 是服务器上对代码库目录有访问权限的账号。")]),e._v(" "),r("li",[r("code",[e._v("192.168.0.1")]),e._v(" 是远端服务器的 IP，也可以是主机名或者 URL。")]),e._v(" "),r("li",[r("code",[e._v("/usr/local/repo-for-developerworks.git")]),e._v(" 是服务器上代码库的根目录。")])]),e._v(" "),r("p",[r("code",[e._v("git clone")]),e._v(" 命令中的 "),r("code",[e._v("local_path")]),e._v(" 指定了本地想要存放代码库的地址。该参数是可选参数，如果不指定该参数就会在本地新建一个以远程仓库名为命名的目录，然后以该目录为代码库根目录。图 10 展示了在空目录 "),r("code",[e._v("clone_demo")]),e._v(" 中执行不带 "),r("code",[e._v("local_path")]),e._v("参数的 clone 命令：")]),e._v(" "),r("h5",{attrs:{id:"图-10-local-path-为空"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-10-local-path-为空"}},[e._v("#")]),e._v(" 图 10. local_path 为空")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-01f1cea644abbc4e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N101BC",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("从截图可以看到，"),r("code",[e._v("git clone")]),e._v(" 命令在 "),r("code",[e._v("clone_demo")]),e._v(" 目录中创建了一个 "),r("code",[e._v("repo-for-developerworks")]),e._v(" 的代码库目录。")]),e._v(" "),r("p",[e._v("图 11 展示了在目录 "),r("code",[e._v("clone_demo")]),e._v(" 中执行带 "),r("code",[e._v("local_path")]),e._v(" 参数的 clone 命令：")]),e._v(" "),r("h5",{attrs:{id:"图-11-local-path-参数为指定路径"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-11-local-path-参数为指定路径"}},[e._v("#")]),e._v(" 图 11. local_path 参数为指定路径")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-ed1d0d5f68062f17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N101D9",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("从截图可以看到，"),r("code",[e._v("git clone")]),e._v(" 命令在 "),r("code",[e._v("clone_demo")]),e._v(" 目录中新建了一个我们指定的 "),r("code",[e._v("local_dev-repo")]),e._v(" 目录，并将其作为本地代码库的根目录。")]),e._v(" "),r("p",[e._v("图 12 展示了在空目录 "),r("code",[e._v("clone_demo2")]),e._v(" 中执行 "),r("code",[e._v("local_path")]),e._v(" 为当前目录的 clone 命令：")]),e._v(" "),r("h5",{attrs:{id:"图-12-local-path-参数为当前目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-12-local-path-参数为当前目录"}},[e._v("#")]),e._v(" 图 12. local_path 参数为当前目录")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-d1db7788f850cbfa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N101F6",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("我们知道一般操作系统将一个英文句点表示当前目录，因此从截图可以看出，当 "),r("code",[e._v("local_path")]),e._v(" 指定为当前目录时，"),r("code",[e._v("git clone")]),e._v("命令会直接将当前目录作为本地代码库的根目录。")]),e._v(" "),r("p",[e._v("当然 Git 还提供其它的连接方式如 File、FTP。感兴趣的读者可以自己使用 Git 搭一个 Git 服务器尝试使用 File 和 FTP 方式进行连接。")]),e._v(" "),r("p",[e._v("默认情况下，"),r("code",[e._v("git clone")]),e._v(" 会将远端代码库全部克隆到本地。Git 还支持只克隆特定分支到本地。我们可以使用 "),r("code",[e._v("git clone -b**branchname** --single-branch git@URL local_path")]),e._v(" 命令, 如图 13 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-13-克隆特定分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-13-克隆特定分支"}},[e._v("#")]),e._v(" 图 13. 克隆特定分支")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-593ee8304b605e81.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N10215",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"git-的基本配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-的基本配置"}},[e._v("#")]),e._v(" Git 的基本配置")]),e._v(" "),r("p",[e._v("在克隆了代码库之后，我们一般仍需要对 Git 做一些基本的配置才能使用 Git 进行日常工作。Git 配置的作用域主要有三种：System、Global 和 Local，分别对应的配置文件地址为：")]),e._v(" "),r("ul",[r("li",[e._v("System："),r("code",[e._v("/etc/gitconfig")]),e._v("。系统级别有效。")]),e._v(" "),r("li",[e._v("Global：home 目录下的 "),r("code",[e._v("~/.gitconfig")]),e._v(" 文件。用户级别有效。")]),e._v(" "),r("li",[e._v("Local：代码库目录的 "),r("code",[e._v(".git/config")]),e._v(" 文件。代码库级别有效。")])]),e._v(" "),r("p",[e._v("另外我们也可以使用 "),r("code",[e._v("git config --system -l")]),e._v("，"),r("code",[e._v("git config --global -l")]),e._v("，"),r("code",[e._v("git config --local -l")]),e._v(" 命令分别列出三个作用域下的配置。跟 Linux 操作系统的环境变量配置类似，Git 在执行命令中会首先查看 local 配置，如果没有找到所需配置会再查看 global 配置，最后再查看 system 配置。")]),e._v(" "),r("p",[e._v("在使用 "),r("code",[e._v("git config")]),e._v(" 命令进行配置的时候，也可以使用 "),r("code",[e._v("git config --system")]),e._v("，"),r("code",[e._v("git config --global")]),e._v("，"),r("code",[e._v("git config --local")]),e._v(" 三种不同的选项来修改不同作用域的配置。")]),e._v(" "),r("p",[e._v("下面介绍一些重要或有用的 Git 配置。")]),e._v(" "),r("h3",{attrs:{id:"配置-user-信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-user-信息"}},[e._v("#")]),e._v(" 配置 user 信息")]),e._v(" "),r("p",[e._v("配置 user 信息在 Git 中是十分重要的一个步骤, username 和 email 不能为空，它们将会被记录在每一条该 user 的 commit 信息中，如图 14 所示:")]),e._v(" "),r("h5",{attrs:{id:"图-14-查看-commit-的-user-信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-14-查看-commit-的-user-信息"}},[e._v("#")]),e._v(" 图 14. 查看 commit 的 user 信息")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-fa49188e5985bb8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[e._v("我们可以配置 "),r("code",[e._v("user.name")]),e._v(" 和 "),r("code",[e._v("user.email")]),e._v(" 的值来配置 user 信息，如清单 6 所示:")]),e._v(" "),r("h5",{attrs:{id:"清单-6-配置-user-name-和-user-email"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清单-6-配置-user-name-和-user-email"}},[e._v("#")]),e._v(" 清单 6. 配置 user.name 和 user.email")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('git config --global user.name "caozhi"\ngit config --global user.email "caozhi0321@gmail.com"\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("也可以将上述命令中的 --global改成 --local来修改只对代码库作用域有效的配置。")]),e._v(" "),r("p",[e._v('配置命令的别名\nGit 提供了很多有用的命令，我们可以将一些比较常用的命令设置上别名，提高工作效率。例如我们可以将 git log --abbrev-commit 设置一个别名 lg，使得查看 log 时只需要显示 commit id 的短名称，如: git config --global alias.lg "log --abbrev-commit"')]),e._v(" "),r("p",[e._v("设置成功后就可以使用 git lg 来查看 commit 日志，如图 15 所示:")]),e._v(" "),r("h5",{attrs:{id:"图-15-短名称的日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-15-短名称的日志"}},[e._v("#")]),e._v(" 图 15. 短名称的日志")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-fb2eba79af6f3d71.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N1028B",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("当然还可以设置一些其它的别名，如清单 7 所示:")]),e._v(" "),r("h5",{attrs:{id:"清单-7-配置-st-和-cm-别名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清单-7-配置-st-和-cm-别名"}},[e._v("#")]),e._v(" 清单 7. 配置 st 和 cm 别名")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('git config --global alias.st "status"\ngit config --global alias.cm "commit"\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("别名可以根据自己的喜好和习惯去设置。将常用的命令设为短别名将大大提高工作效率。")]),e._v(" "),r("h3",{attrs:{id:"查看配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看配置"}},[e._v("#")]),e._v(" 查看配置")]),e._v(" "),r("p",[e._v("配置成功后可以使用 "),r("code",[e._v("git config --global -l")]),e._v(" 命令查看配置，如图 16 所示：")]),e._v(" "),r("h5",{attrs:{id:"图-16-查看配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-16-查看配置"}},[e._v("#")]),e._v(" 图 16. 查看配置")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-12dd3b3b603e5fb1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N102AC",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"使用-config-文件进行配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-config-文件进行配置"}},[e._v("#")]),e._v(" 使用 Config 文件进行配置")]),e._v(" "),r("p",[e._v("除了使用命令之外，也可以直接编辑 config 文件进行相关配置，如图 17 所示:")]),e._v(" "),r("h5",{attrs:{id:"图-17-gitconfig-文件里的配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-17-gitconfig-文件里的配置"}},[e._v("#")]),e._v(" 图 17. ~/.gitconfig 文件里的配置")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-84715d6b24cc170b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("h2",{attrs:{id:"设置-git-忽略提交规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置-git-忽略提交规则"}},[e._v("#")]),e._v(" 设置 Git 忽略提交规则")]),e._v(" "),r("p",[e._v("在进行完代码库克隆和简单的配置之后，接下来我们可以根据项目需要配置一些文件忽略规则。跟大多数的代码库管理工具一样，Git 也可以对不需要被代码库所管理的文件或文件类型进行配置，使得提交代码时，这些文件不会被提交到代码库中。Git 是通过忽略清单"),r("code",[e._v(".gitignore")]),e._v(" 文件进行配置的。")]),e._v(" "),r("p",[e._v("通常我们会考虑将如下类型的文件添加到忽略清单中:")]),e._v(" "),r("ul",[r("li",[e._v("编译过程的中间文件，例如 "),r("code",[e._v("*.class")]),e._v(" 文件、"),r("code",[e._v("*.o")]),e._v(" 文件、"),r("code",[e._v("*.obj")]),e._v(" 文件等。")]),e._v(" "),r("li",[e._v("外部依赖的包或者工程编译的包，例如 jar 包、lib 包、dll 包或 war 包等。在有的项目实践中，可能会将这类依赖包也放到代码库中进行管理，通常这不是一个很好的策略，因为这样会显著地增加代码库的大小，降低开发者的工作效率。比较合理的方式是通过构建工具的依赖管理功能来管理这些依赖包，例如 Maven、Gradle 等。")]),e._v(" "),r("li",[e._v("编译过程中，通过某种机制自动生成的代码。某些项目中，可能会使用脚本或者 "),r("code",[e._v("xsd schema")]),e._v(" 文件来生成代码；这类代码只需要将用于自动生成的脚本或者 schema 文件管理起来即可。")]),e._v(" "),r("li",[e._v("项目的配置文件。同一项目组的不同开发者可能有不同的项目配置，或者配置中包含敏感信息，例如账号密码等，这类配置文件也应该放到 ignore 清单里。")]),e._v(" "),r("li",[e._v("某些 IDE 的工程配置文件，例如 Eclipse 的 "),r("code",[e._v("setting")]),e._v(" 和 "),r("code",[e._v("project")]),e._v(" 文件、Idea 的 "),r("code",[e._v(".idea")]),e._v(" 目录等。")]),e._v(" "),r("li",[e._v("一些自动生成的系统文件，例如 Windows 的 "),r("code",[e._v("Thumbs.db")]),e._v(" 或者 MacOS 的"),r("code",[e._v(".DS_Store")]),e._v(" 文件等。")]),e._v(" "),r("li",[e._v("项目或者 IDE 的日志文件。")])]),e._v(" "),r("p",[r("code",[e._v(".gitignore")]),e._v(" 文件每行表示一个匹配模式（"),r("code",[e._v("#")]),e._v(" 开头的行或者空行除外，"),r("code",[e._v("#")]),e._v(" 用于注释）。它使用 glob 模式来进行匹配，glob 模式是一种简化的正则表达式，常用于来进行路径的模式匹配。我们可以在代码库的根目录或者任意子目录添加"),r("code",[e._v(".gitignore")]),e._v(" 文件，特定目录下的"),r("code",[e._v(".gitignore")]),e._v(" 文件使得忽略规则只在该目录及其子目录下有效。表 1 列出了常用的一些匹配模式的写法：")]),e._v(" "),r("h5",{attrs:{id:"表-1-常用匹配模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表-1-常用匹配模式"}},[e._v("#")]),e._v(" 表 1. 常用匹配模式")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[e._v("模式")])]),e._v(" "),r("th",[r("strong",[e._v("含义")])]),e._v(" "),r("th",[r("strong",[e._v("示例")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("完整路径")]),e._v(" "),r("td",[e._v("忽略完整路径所定义的文件")]),e._v(" "),r("td",[r("code",[e._v("dev/dev.conf")])])]),e._v(" "),r("tr",[r("td",[e._v("/path")]),e._v(" "),r("td",[e._v("以 / 开头，只匹配当前目录下路径为 path 的文件")]),e._v(" "),r("td",[e._v("`/a.java")])]),e._v(" "),r("tr",[r("td",[e._v("/a.cpp`")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("path")]),e._v(" "),r("td",[e._v("不以 / 开头，匹配当前目录及其子目录下所有文件")]),e._v(" "),r("td",[e._v("`*.o")])]),e._v(" "),r("tr",[r("td",[e._v("web.xml`")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("path/")]),e._v(" "),r("td",[e._v("以 / 结尾，用以只匹配目录；path 目录及其子目录和文件会被忽略；如果 path 是个文件，则不会被忽略")]),e._v(" "),r("td",[r("code",[e._v(".settings/")])])]),e._v(" "),r("tr",[r("td",[e._v("带 * 号的模式")]),e._v(" "),r("td",[e._v("置于文件中，用于匹配所有满足规则的文件")]),e._v(" "),r("td",[e._v("`*.zip")])]),e._v(" "),r("tr",[r("td",[e._v("*.jar`")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("带 ** 的模式")]),e._v(" "),r("td",[e._v("置于路径中，用于匹配满足 ** 前后的所有路径")]),e._v(" "),r("td",[e._v("`Dev/**/dev.conf")])]),e._v(" "),r("tr",[r("td",[e._v("**/*.jar`")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("!path")]),e._v(" "),r("td",[e._v("在 ignore 文件中如果前面已经定义了某个模式，但是又有一些特殊文件我们不想被忽略，我们可以用 ! 来匹配")]),e._v(" "),r("td",[r("code",[e._v("*.jar ##")]),e._v(" 忽略所有 jar 包  "),r("code",[e._v("!server.jar ##")]),e._v(" 希望"),r("code",[e._v("server.jar")]),e._v(" 仍被跟踪")])])])]),e._v(" "),r("p",[e._v("注意：")]),e._v(" "),r("ul",[r("li",[e._v("当某个文件已经被提交到代码库中被 Git 所管理起来之后，将该文件再添加进 "),r("code",[e._v(".gitignore")]),e._v(" 文件是无效的，对该文件进行修改时，执行 "),r("code",[e._v("git status")]),e._v(" 操作之后仍然会提示该文件已被修改。针对已经提交代码库的文件我们又想忽略其修改的场景，将会在本系列第四篇文章中介绍。")]),e._v(" "),r("li",[e._v("每个目录下都可以放单独的 "),r("code",[e._v(".gitignore")]),e._v(" 文件以控制子目录的忽略规则。")]),e._v(" "),r("li",[e._v("即使已经在忽略列表里，当我们确实想要提交一些符合忽略规则的文件时，仍可以使用 "),r("code",[e._v("git -f add")]),e._v(" 加具体的文件路径的方式将这些文件提交到库中。如图 18 所示：")])]),e._v(" "),r("h5",{attrs:{id:"图-18-强制添加被忽略的文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图-18-强制添加被忽略的文件"}},[e._v("#")]),e._v(" 图 18. 强制添加被忽略的文件")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-9d9e0ed5a39de51c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-git-and-github-2/index.html#N10385",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看大图"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("GitHub 有一个十分详细的针对数十种项目及语言的 "),r("code",[e._v(".gitignore")]),e._v(" 文件列表模板，可以在 "),r("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/github/gitignore"),r("OutboundLink")],1),e._v(" 找到它。")])]),e._v(" "),r("h2",{attrs:{id:"结束语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[e._v("#")]),e._v(" 结束语")]),e._v(" "),r("p",[e._v("为使用 Git 和 GitHub 进行日常开发做准备，本文详细通过一些列演示向读者讲解了如何采用 SSH 和 HTTPS 两种方式从 GitHub 克隆代码库，如何进行本地 Git 开发环境的基础配置，如何配置 "),r("code",[e._v(".gitignore")]),e._v(" 文件等。相信您在阅读完本文之后将有能力自己初始化一套本地的 Git 环境。")]),e._v(" "),r("h2",{attrs:{id:"参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资源"}},[e._v("#")]),e._v(" 参考资源")]),e._v(" "),r("ul",[r("li",[e._v("访问我的 GitHub 主页，可以获取文章中所涉及的代码库"),r("a",{attrs:{href:"https://github.com/caozhi/repo-for-developerworks",target:"_blank",rel:"noopener noreferrer"}},[e._v(" repo-for-developerworks"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[e._v("查看 Git 官网 "),r("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git-SCM"),r("OutboundLink")],1),e._v("，可获得 Git 相关的资源。")]),e._v(" "),r("li",[e._v("可从"),r("a",{attrs:{href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Git-For-Windows"),r("OutboundLink")],1),e._v(" 官网上下载 Git Windows 版的安装包。")]),e._v(" "),r("li",[e._v("参考 "),r("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProGit（中文版）"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProGit（英文版）"),r("OutboundLink")],1),e._v("一书，可以了解 Git 操作使用详细的讲解。")]),e._v(" "),r("li",[e._v("访问 "),r("a",{attrs:{href:"https://help.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Online Help"),r("OutboundLink")],1),e._v(" 可检索关于 GitHub 的相关帮助。")]),e._v(" "),r("li",[e._v("访问 "),r("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub gitignore"),r("OutboundLink")],1),e._v(" 查看 GitHub 提供的 "),r("code",[e._v(".gitignore")]),e._v(" 文件示例。")])])])}),[],!1,null,null,null);t.default=o.exports}}]);