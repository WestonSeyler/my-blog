(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{447:function(t,e,a){"use strict";a.r(e);var _=a(30),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("共享订阅是 MQTT 5.0 协议引入的新特性，相当于是订阅端的负载均衡功能。")]),t._v(" "),a("p",[t._v("我们知道一般的非共享订阅的消息发布流程是这样的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/87f2594bb38d81feb0441a5ac54aa339.png",alt:"WechatIMG316.png"}})]),t._v(" "),a("p",[t._v("在这种结构下，如果订阅节点发生故障，就会导致发布者的消息丢失（QoS 0）或者堆积在 Server 中（QoS 1, 2）。一般情况下，解决这个问题的办法都是直接增加订阅节点，但这样又产生了大量的重复消息，不仅浪费性能，在某些业务场景下，订阅节点还需要自行去重，进一步增加了业务的复杂度。")]),t._v(" "),a("p",[t._v("其次，当发布者的生产能力较强时，可能会出现订阅者的消费能力无法及时跟上的情况，此时只能由订阅者自行实现负载均衡来解决，又一次增加了用户的开发成本。")]),t._v(" "),a("h3",{attrs:{id:"协议规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议规范"}},[t._v("#")]),t._v(" 协议规范")]),t._v(" "),a("p",[t._v("现在，在 MQTT 5.0 协议中，你可以通过共享订阅特性解决上面提到的问题。当你使用共享订阅时，消息的流向就会变为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/7b172accff520fef7a48586b5aa0ba0b.png",alt:"WechatIMG317.png"}})]),t._v(" "),a("p",[t._v("同非共享订阅一样，共享订阅包含一个主题过滤器和订阅选项，唯一的区别在于共享订阅的主题过滤器格式必须是 "),a("code",[t._v("$share/{ShareName}/{filter}")]),t._v(" 这种形式。这几个的字段的含义分别是：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$share")]),t._v(" 前缀表明这将是一个共享订阅")]),t._v(" "),a("li",[a("code",[t._v("{ShareName}")]),t._v(' 是一个不包含 "/", "+" 以及 "#" 的字符串。订阅会话通过使用相同的 '),a("code",[t._v("{ShareName}")]),t._v(" 表示共享同一个订阅，匹配该订阅的消息每次只会发布给其中一个会话")]),t._v(" "),a("li",[a("code",[t._v("{filter}")]),t._v(" 即非共享订阅中的主题过滤器")])]),t._v(" "),a("p",[t._v("需要注意的是，如果服务端正在向其选中的订阅端发送 QoS 2 消息，并且在分发完成之前网络中断，服务端会在订阅端重新连接时继续完成该消息的分发。如果订阅端的会话在其重连之前终止，服务!端将丢弃该消息而不尝试发送给其他订阅端。如果是 QoS 1 消息，服务端可以等订阅端重新连接之后继续完成分发，也可以在订阅端断开连接时就立即尝试将消息分发给其他订阅端，MQTT 协议没有强制规定，因此需要视服务器的具体实现而定。但如果在等待订阅端重连期间其会话终止，服务端则会将消息尝试发送给其他订阅端。")]),t._v(" "),a("h3",{attrs:{id:"共享策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享策略"}},[t._v("#")]),t._v(" 共享策略")]),t._v(" "),a("p",[t._v("虽然共享订阅使得订阅端能够负载均衡地消费消息，但 MQTT 协议并没有规定 Server 应当使用什么负载均衡策略。作为参考，EMQ X 提供了 random, round_robin, sticky, hash 四种策略供用户自行选择。")]),t._v(" "),a("ul",[a("li",[t._v("random: 在所有共享订阅会话中随机选择一个发送消息")]),t._v(" "),a("li",[t._v("round_robin: 按照订阅顺序轮流选择")]),t._v(" "),a("li",[t._v("sticky: 使用 random 策略随机选择一个订阅会话，持续使用至该会话取消订阅或断开连接再重复这一流程")]),t._v(" "),a("li",[t._v("hash: 对发送者的 ClientID 进行 hash 操作，根据 hash 结果选择订阅会话")])]),t._v(" "),a("h3",{attrs:{id:"效果演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果演示"}},[t._v("#")]),t._v(" 效果演示")]),t._v(" "),a("p",[t._v("最后，我们通过一个综合性的示例来演示共享订阅的效果。")]),t._v(" "),a("p",[t._v("服务端使用 "),a("a",{attrs:{href:"https://github.com/emqx/emqx/tree/v3.2.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqx-v3.2.4"),a("OutboundLink")],1),t._v("，客户端使用 "),a("a",{attrs:{href:"https://github.com/emqx/emqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqtt"),a("OutboundLink")],1),t._v("，emqx 的共享订阅分发策略为默认的 random：")]),t._v(" "),a("p",[a("code",[t._v("broker.shared_subscription_strategy = random")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("./emqx start")]),t._v(" 启动 emqx，然后使用 emqtt 启动三个订阅客户端，分别订阅 "),a("code",[t._v("$share/a/topic")]),t._v(", "),a("code",[t._v("$share/a/topic")]),t._v(", "),a("code",[t._v("$share/b/topic")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/a7b660ce3af15d21c8759ca340cb7257.png",alt:"image20191111142037391.png"}})]),t._v(" "),a("p",[t._v("启动一个发布客户端，向 "),a("code",[t._v("topic")]),t._v(" 主题发布消息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/972770b0363d9d20ebda00137c955dcd.png",alt:"image20191111144814890.png"}})]),t._v(" "),a("p",[a("code",[t._v("$share/a/topic")]),t._v(" 与 "),a("code",[t._v("$share/b/topic")]),t._v(" 属于不同的会话组，非共享订阅主题 "),a("code",[t._v("topic")]),t._v(" 会在所有的会话组中进行负载均衡。客户端 "),a("code",[t._v("sub3")]),t._v(" 因为组内只有自己一个会话，所以收到了所有消息，而客户端 "),a("code",[t._v("sub1")]),t._v(" 与 "),a("code",[t._v("sub2")]),t._v(" 则是遵循我们配置的 random 策略随机接收消息。")])])}),[],!1,null,null,null);e.default=v.exports}}]);