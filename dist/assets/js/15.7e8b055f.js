(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{450:function(t,e,a){"use strict";a.r(e);var r=a(30),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("MQTT v5 带来了很多新的特性，我们会尽量以通俗易懂的方式展示这些特性，并探讨这些特性对开发者的影响。到目前为止，我们已经探讨过这些 "),a("a",{attrs:{href:"https://www.emqx.cn/mqtt/mqtt5",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT v5 新特性"),a("OutboundLink")],1),t._v("，今天我们将继续讨论： "),a("strong",[t._v("请求响应")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"请求响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求响应"}},[t._v("#")]),t._v(" 请求响应")]),t._v(" "),a("p",[t._v("我们知道，在 "),a("a",{attrs:{href:"https://www.emqx.cn/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT"),a("OutboundLink")],1),t._v(" 中客户端可以向指定主题发布消息，也可以订阅指定主题以接收感兴趣的消息。在明确有人订阅的情况下，大于 0 的 QoS 可以保证消息送达至订阅端 [^1]。但如果结合一些业务场景，即不仅仅是将消息投递至订阅端，可能需要订阅端触发一些行为并返回结果，又或者是需要向订阅端请求一些信息，发布订阅模式下的实现就会稍显笨重，通信双方需要事先协商好请求主题和响应主题。")]),t._v(" "),a("p",[t._v("如果同一个请求主题存在多个请求方，为了将响应正确地返回给请求方，需要多个不同的响应主题，最常见的办法就是在 Payload 首部或是其他位置插入客户端标识符（Client ID）等能够唯一标识该请求客户端的字段，响应方在收到请求后按照事先约定的规则提取这些字段以及真正的 Payload，并将这些字段用于构造响应主题。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/69291346e45e2e0d3ccb0ad455d9378e.png",alt:"image20200901155125123.png"}})]),t._v(" "),a("p",[t._v("但显然这不是一个好的实现，我们期望请求接收方只需要关注怎么处理请求即可，而不用花费额外的精力考虑怎么将响应正确返回给请求方。因此，MQTT 5.0 新增了 "),a("strong",[t._v("响应主题（Response Topic）")]),t._v(" 属性，并定义了以下请求响应交互过程：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.emqx.cn/blog/mqtt-client-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT 客户端"),a("OutboundLink")],1),t._v("（请求方）向请求主题发布包含 "),a("strong",[t._v("响应主题")]),t._v(" 属性的请求消息。")]),t._v(" "),a("li",[t._v("假如有其他 MQTT 客户端（响应方）订阅了与请求消息发布时使用的主题名相匹配的主题过滤器，那么将收到该请求消息。")]),t._v(" "),a("li",[t._v("响应方根据请求消息采取适当的操作，然后向该 "),a("strong",[t._v("响应主题")]),t._v(" 属性指定的主题发布响应消息。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/2a9ac9bf360343097e9f6264bb4dd106.png",alt:"image20200901155200573.png"}})]),t._v(" "),a("h4",{attrs:{id:"对比数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比数据"}},[t._v("#")]),t._v(" 对比数据")]),t._v(" "),a("p",[t._v("与 HTTP 的请求响应模式不同，MQTT 的请求响应是异步的，这带来了一个问题，即响应消息与请求消息如何关联。最常用的办法就是在请求消息中携带一个特征字段，响应方在响应时将收到的字段原封不动地返回，请求方在收到响应消息时就可以根据其中的特征字段来匹配相应的请求。很显然 MQTT 也是这么考虑的，所以为 PUBLISH 报文新增了一个 "),a("strong",[t._v("对比数据（Correlation Data）")]),t._v(" 属性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/70e08cb4bcc0343ad5cd98fb4fbebe99.png",alt:"image20200901154600805.png"}})]),t._v(" "),a("h4",{attrs:{id:"响应信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应信息"}},[t._v("#")]),t._v(" 响应信息")]),t._v(" "),a("p",[t._v("前面已经提到，可能存在多个请求方同时发起请求的情况，为避免不同请求方之间的冲突，请求方客户端使用的响应主题最好对于该客户端是唯一的。由于请求方和响应方通常都需要对这些主题进行授权，因此使用随机主题名称将会对授权造成挑战。")]),t._v(" "),a("p",[t._v("为了解决此问题，MQTT 5.0 在 CONNACK 报文中定义了一个名为响应信息的属性。服务端可以使用此属性指导客户端如何选择使用的响应主题。此机制对于服务端和客户端都是可选的。连接时，客户端通过设置 CONNECT 报文中的请求响应信息属性来请求服务端发送响应信息。这会导致服务端在 CONNACK 报文中插入响应信息属性，请求方可以使用响应信息来构建响应主题。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.emqx.net/images/59b495acf6b75924c8392035d802484e.png",alt:"image20200901161153410.png"}})]),t._v(" "),a("h3",{attrs:{id:"使用建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用建议"}},[t._v("#")]),t._v(" 使用建议")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("由于发布订阅模式本身的一些局限性，使用大于 0 的 QoS 也只能保证消息到达了对端而不是订阅端，如果发布消息时订阅端还未完成订阅，那么消息就会丢失，但发布方却无法得知。因此，对于一些投递要求比较严格的消息，可以通过请求响应来确认消息是否到达订阅端。")])]),t._v(" "),a("li",[a("p",[t._v("某些数据上报类的应用，当你感觉上报时间间隔设置得太长太短都不合适时，也许你可以尝试改成通过请求响应主动请求数据。但需要注意，如果请求方过多，导致数据实际上报频率大大超过原先的话，反而得不偿失，所以还是需要根据实际场景进行考量。")])]),t._v(" "),a("li",[a("p",[t._v("如果你已经正确地使用了 "),a("strong",[t._v("对比数据")]),t._v(" 属性，那么你可以放心地为响应方使用共享订阅。")])]),t._v(" "),a("li",[a("p",[t._v("要特别注意多个响应方订阅同一个请求主题和多个请求方订阅同一个响应主题的情况，请确保你能够正确处理这些情况。")])])]),t._v(" "),a("p",[t._v("[^1]: QoS 大于 0 时，发布者保证消息投递给服务端，服务端保留消息投递给订阅者。")])])}),[],!1,null,null,null);e.default=s.exports}}]);