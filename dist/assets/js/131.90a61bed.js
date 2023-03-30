(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{569:function(s,a,e){"use strict";e.r(a);var n=e(30),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("ansible 的安装有很多方式，这里以Mac为例")]),s._v(" "),e("ol",[e("li",[s._v("安装 "),e("code",[s._v("brew install ansible")]),s._v("\n他会顺便安装依赖的python3\n打 "),e("code",[s._v("ansible --version")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("➜ ansible --version\nansible 2.7.1\n  config file = /Users/mafei/.ansible.cfg\n  configured module search path = ['/Users/mafei/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']\n  ansible python module location = /usr/local/Cellar/ansible/2.7.1/libexec/lib/python3.7/site-packages/ansible\n  executable location = /usr/local/bin/ansible\n  python version = 3.7.1 (default, Nov  6 2018, 18:46:03) [Clang 10.0.0 (clang-1000.11.45.5)]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("创建目录和配置文件\n"),e("code",[s._v("/etc/ansible/hosts")])]),s._v(" "),e("li",[s._v("添加要连接的 host 主机节点信息，内容如下：\n[主机组名称]\nip:端口 ansible_user=登录的用户名")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[cloud]\n140.122.182.183:1234 ansible_user=ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[e("code",[s._v("ansible <host-pattern> [options]")]),s._v(" 为一组主机运行单一task\n下面的命令检查指定主机的连通性\n"),e("code",[s._v("ansible all -m ping -vvv")]),s._v("\n看能否访问到所有主机\n也可以用指定主机 "),e("code",[s._v("ansible cloud -m ping -vvv")])])]),s._v(" "),e("p",[s._v("-m 等于 --module-name\nping 就是模块名")]),s._v(" "),e("blockquote",[e("p",[s._v("可以使用 "),e("code",[s._v("ansible-doc <模块名>")]),s._v(" 查看模块的帮助信息。 如 "),e("code",[s._v("ansible-doc ping")]),s._v(" 非常方便。")])]),s._v(" "),e("p",[s._v("使用ping模块测试被管节点。能成功，说明ansible能控制该节点。")]),s._v(" "),e("blockquote",[e("p",[s._v('如果要指定非root用户运行ansible命令，则加上"--sudo"或"-s"来提升为sudo_user配置项所指定用户的权限。'),e("code",[s._v("ansible webservers -m ping -u ubuntu --sudo")]),s._v(" ；或者使用 become 提升权限 "),e("code",[s._v("ansible webservers -m ping -b --become-user=root --become-method=sudo")])])]),s._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[s._v("我们更新下host文件，添加一组主机")])]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("140.122")]),s._v(".182.183:1234 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fxa"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("145.130")]),s._v(".287.79:22 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devuser\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("145.130")]),s._v(".287.79:25 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devuser\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("145.130")]),s._v(".287.79:31 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devuser\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("也可以用下面的写法")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.122")]),s._v(".182.183  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("merch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nmer22 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_host")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("145.130")]),s._v(".287.79 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devuser\nmer25 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_host")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("145.130")]),s._v(".287.79 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devuser\nmer31 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_host")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("145.130")]),s._v(".287.79 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devuser\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fuelx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("135.104")]),s._v(".35.167 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("maf "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_private_key_file")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),s._v("/.ssh/github_id_rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("然后针对某主机进行操作")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("➜ ansible mer31 -a uptime\nmer31 | CHANGED | rc=0 >>\n 11:14:38 up 485 days, 15:52,  2 users,  load average: 1.57, 0.58, 0.28\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);