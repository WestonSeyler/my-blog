(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{607:function(e,v,o){"use strict";o.r(v);var t=o(30),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,o=e._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"docker容器的数据管理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker容器的数据管理"}},[e._v("#")]),e._v(" Docker容器的数据管理")]),e._v(" "),o("p",[e._v("在使用Docker的过程中，必然会涉及到容器的数据管理操作，例如查看容器内应用生成或更新的数据，容器内数据的备份／恢复，容器之间进行数据共享等操作。Docker中数据管理等方式主要有两种：")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("数据卷(Data volumes)")])]),e._v(" "),o("li",[o("p",[e._v("数据卷容器(Data volume containers)")])])]),e._v(" "),o("h3",{attrs:{id:"数据卷和数据卷容器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#数据卷和数据卷容器"}},[e._v("#")]),e._v(" 数据卷和数据卷容器")]),e._v(" "),o("p",[e._v("数据卷是一个供容器使用的特殊目录，用来存放持久化或共享数据的地方，而数据卷容器其实就是一个普通容器，只是这个容器专门提供数据卷给其它容器挂载使用，因此，数据卷和数据卷容器之间有着密切的联系，并不是两个完全不相关的概念。")]),e._v(" "),o("p",[e._v("当使用"),o("code",[e._v("docker run")]),e._v("或者"),o("code",[e._v("docker create")]),e._v("命令时，使用"),o("code",[e._v("-v")]),e._v("就可以在容器内创建一个数据卷，默认情况下，Docker Engine会在宿主机上的"),o("code",[e._v("/var/lib/docker/volumes/")]),e._v("目录下创建一个特殊目录，供容器挂载使用，而挂载了这个数据卷的容器便可以称为数据卷容器。我们将这种方式，称为在容器里创建一个数据卷，此外，我们还可以指定挂载一个宿主机的本地目录到容器中作为数据卷。")]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-38430ee64a6f1ddb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),e._v(" "),o("p",[e._v("如上图所示，volume container1分别挂载了容器内创建的数据卷/vol1以及指定挂载了一个宿主机中的本地目录作为数据卷/vol2。而volume container2则只挂载了数据卷/vol2。通过这样，当我们修改Docker默认数据目录以及修改挂载的本地宿主机目录时，数据卷容器中挂载的数据卷/vol1和数据卷vol2中的数据也都会进行变更，反之亦然。")]),e._v(" "),o("p",[e._v("除了上述创建数据卷的方式外，我们还可以使用"),o("code",[e._v("--volume-from")]),e._v("的方式，指定数据卷容器，从而挂载其中的数据卷。还是上图中，containerA和containerB在使用"),o("code",[e._v("docker run")]),e._v("创建容器时，通过"),o("code",[e._v("--volume-from")]),e._v("选项指定直接使用volume container2中的数据卷/vol2。")]),e._v(" "),o("h3",{attrs:{id:"数据卷的特性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#数据卷的特性"}},[e._v("#")]),e._v(" 数据卷的特性")]),e._v(" "),o("p",[e._v("通过前面所述，我们理解了什么是数据卷和数据卷容器，接下来，简要总结数据卷的特性：")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("当我们在创建容器时，数据卷就会自动初始化。")])]),e._v(" "),o("li",[o("p",[e._v("数据卷可以在容器之间共享和复用。")])]),e._v(" "),o("li",[o("p",[e._v("对数据卷的数据的更新，不会影响到镜像。")])]),e._v(" "),o("li",[o("p",[e._v("对数据卷的修改会立刻生效。")])]),e._v(" "),o("li",[o("p",[e._v("数据卷中的数据会一直存在，直到删除最后一个挂载该数据卷的容器被删除时，还需要显示指定删除关联的数据卷。")])])]),e._v(" "),o("p",[e._v("通过Docker提供的数据卷和数据卷容器的特性和机制，我们可以对容器内的数据进行共享、备份和恢复，增加了容器的容灾能力。即使容器在运行过程中发生故障也不用担心，只需要快速重新创建容器，挂载数据卷即可。当然，在实际生产环境中，还是需要配合支持诸如RAID、DRBD、以及ceph和HDFS等分布式存储技术来的达到数据的安全性和高可用性。")]),e._v(" "),o("p",[e._v("https://docs.docker.com/storage/volumes/")])])}),[],!1,null,null,null);v.default=r.exports}}]);