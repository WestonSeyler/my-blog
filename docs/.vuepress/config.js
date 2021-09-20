module.exports = {
  title: 'wjn 的技术博客',
  port: '8099',
  base:'my-blog/dist',
  head: [
    // ico
    ["link", {rel: "icon", href: `/favicon.ico`}],
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "FinleyMa"}],
    ["meta", {name: "description", content: "wjn 的技术博客"}],
    ["meta", {name: "keywords", content: "Laravel,Laravel教程,Jenkins系列教程,Docker系列教程,开发基础"}],
    ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
        title: "wjn 的技术博客",
        description: "Laravel,Laravel教程,Jenkins系列教程,Docker系列教程,开发基础"
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: {
    '@vuepress/search': {
      searchMaxSuggestions: 10
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',
      // 其他的 Vssue 配置
      owner: 'mafeifan',
      repo: 'vue-press',
      clientId: 'e424b739bd81e2a94d69',
      clientSecret: '3af1dd0ab1bc289d671fbeeb5c30daa2410400ce ',
    },
    // https://analytics.google.com/
    '@vuepress/google-analytics': {
      'ga': 'G-41D2WLZSSB' //替换成自己实际申请的ID
    },
    // https://vuepress-theme-hope.github.io/
    '@mr-hope/comment': {
      type: "valine",
      appId: 'pT5Dm6XHXWS6FjSEPyaRTJWk-gzGzoHsz',
      appKey: 'q79hf9yQSynaxYNMmR0IY9JY',
    },
    '@vuepress/nprogress': {},
    '@vuepress/back-to-top': {},
    '@vuepress/medium-zoom': {
      delay: 500,
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    },
  },
  themeConfig: {
    lastUpdated: '上次更新',
    activeHeaderLinks: true,
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true,  // 启用页面滚动效果
    // sidebar: 'auto',
    nav: [
      {
        text: 'CI/CD',
        items: [
          {text: 'Jenkins', link: '/DevOps/Jenkins/Jenkins2-学习系列1----使用Docker方式安装最新版Jenkins'},
          {text: 'Docker', link: '/DevOps/Docker/Docker-学习系列1--使用-Docker-快速实现多版本PHP切换'},
          {text: 'Ansible', link: '/DevOps/Ansible/Ansible-2----1-介绍与使用场景'},
          {text: 'Github Actions', link: '/DevOps/GithubActions/入门'},
          {text: 'Linux', link: '/DevOps/Linux/SSH--技巧'}
        ]
      },
      {
        text: 'Tools',
        items: [
          {text: 'Git', link: '/Tools/Git/Git-和-GitHub：从入门到实践1-Git-和-GitHub-基础简介'},
          {text: 'Other', link: '/Tools/Other/使用frp内网穿透工具'},
        ]
      },
      {
        text: 'Frontend',
        items: [
          {text: 'Html & CSS', link: '/Frontend/HTML5/'},
          {text: 'JavaScript', link: '/Frontend/JavaScript/'},
          {text: 'Angular', link: '/Frontend/Angular/'},
          {text: 'GraphQL', link: '/Frontend/GraphQL/GraphQL-分享-理论篇'},
          {text: 'RxJS6', link: '/Frontend/RxJS-6/RxJS-学习系列-1--认识-RxJS'},
          // {text: 'React', link: '/React/'}
        ]
      },
      {
        text: 'Backend',
        items: [{
          text: 'Laravel',
          items: [
            {text: 'Model', link: '/Backend/Laravel/Laravel-model/Laravel-model-tips'},
            {text: '实时通信', link: '/Backend/Laravel/Laravel-echo-server/Laravel-echo构建实时应用'},
            {text: '类库使用', link: '/Backend/Laravel/Laravel-3rd-party/Laravel-常用第三方类库'},
            {text: '开发收集', link: '/Backend/Laravel/Laravel-feature/Laravel-best-practices'},
          ]
        },
          {
            text: 'Database',
            items: [
              {text: 'MySQL', link: '/Backend/Database/MySQL/总结'},
              {text: 'MQTT', link: '/Backend/Database/MQTT/MQTT系列-MQTT基础概念'},
              // {text: 'RabbitMQ', link: '/Backend/MQ/1-RabbitMQ入门基础'},
            ]
          }],
      },
      {
        text: 'Links',
        items: [
          {text: 'Links', link: '/Friend-links/'},
          {text: 'Markdown', link: '/_DEMO/'},
        ],
      },
      {
        text: 'Home', link: '/'
      },
    ],

    sidebar: {
      '/DevOps/Jenkins/': [
        ['Jenkins2-学习系列1----使用Docker方式安装最新版Jenkins', '1 使用Docker方式安装最新版Jenkins'],
        ['Jenkins2-学习系列2----Pipeline-介绍及基础', '2 Pipeline 介绍及基础'],
        ['Jenkins2-学习系列3----Groovy语法介绍', '3 Groovy语法介绍'],
        ['Jenkins2-学习系列4----Pipeline-post-部分', '4 Pipeline post 部分'],
        ['Jenkins2-学习系列5----Pipeline-中的指令', '5 Pipeline 中的指令'],
        ['Jenkins2-学习系列6----环境变量', '6 环境变量'],
        ['Jenkins2-学习系列7----构建工具', '7 构建工具'],
        ['Jenkins2-学习系列8----实战-使用-Generic-Webhook-Trigger-插件自动构建个人博客', '8 实战: 使用 Generic Webhook Trigger 插件自动构建个人博客'],
        ['Jenkins2-学习系列9----Generic-Webhook-Trigger-插件详讲', '9 Generic-Webhook-Trigger 插件详讲'],
        ['Jenkins2-学习系列10----多分支pipeline构建', '10 多分支pipeline构建'],
        ['Jenkins2-学习系列11----参数化构建', '11 参数化构建'],
        ['Jenkins2-学习系列12----创建和使用共享库', '12 创建和使用共享库'],
        ['Jenkins2-学习系列13----邮件和Slack通知', '13 邮件和Slack通知'],
        ['Jenkins2-学习系列14----使用-Config-File-Provider-添加邮件模板', '14 使用 Config-File-Provider 添加邮件模板'],
        ['Jenkins2-学习系列15----声明式Pipeline补充', '15 声明式Pipeline补充'],
        ['Jenkins2-学习系列16----Jenkins权限控制插件（Role-based-Authorization-Strategy）', '16 Jenkins权限控制插件(Role-based-Authorization-Strategy)'],
        ['Jenkins2-学习系列17----制品管理', '17 制品管理'],
        ['Jenkins2-学习系列18----凭证管理', '18 凭证管理'],
        ['Jenkins2-学习系列19----使用-Script-Console-批量修改Jenkins任务', '19 使用 Script-Console 批量修改Jenkins任务'],
        ['Jenkins2-学习系列20----通过SSH方法添加Slave节点', '20 通过SSH方法添加Slave节点'],
        ['Jenkins2-学习系列21----通过JNLP协议添加Slave节点', '21 通过JNLP协议添加Slave节点'],
        ['Jenkins2-学习系列22----pipeline-中-agent-使用介绍', '22 pipeline 中 agent 使用介绍'],
        ['Jenkins2-学习系列23----Jenkins-定期备份', '23 Jenkins 定期备份'],
        ['Jenkins2-学习系列24----Electron-应用的流水线设计', '24 Electron-应用的流水线设计'],
        ['Jenkins2-学习系列25----添加-Docker-Cloud-并构建镜像', '25 添加 Docker Cloud 并构建镜像'],
        ['Jenkins2-学习系列26----使用阿里云容器镜像服务', '26 使用阿里云容器镜像服务'],
        ['Jenkins2-学习系列27----pipeline-中-Docker-操作', '27 pipeline 中 Docker 操作'],
        ['Jenkins2-学习系列28----优化多分支流水线任务', '28 优化多分支流水线任务'],
        ['Jenkins2-学习系列29----安装指定版本插件', '29 安装指定版本插件'],
        ['Jenkins2-学习系列30----从Jenkins迁移到GitHubActions', '30 从Jenkins迁移到GitHub Actions'],
        ['Jenkins2-学习系列31---DockerInDocker', '31 DockerInDocker'],
        ['Jenkins2-学习系列32---访问宿主机并执行命令', '32 访问宿主机并执行命令'],
        ['Jenkins-学习资源', 'Jenkins资源收集'],
        ['Jenkins-sh-step', 'Jenkins内置sh详讲'],
      ],

      '/DevOps/Docker/': [
        ['Docker-学习系列1--使用-Docker-快速实现多版本PHP切换', '1 使用-Docker-快速实现多版本PHP切换'],
        ['Docker-学习系列2--保存对容器的修改', '2 保存对容器的修改'],
        ['Docker-学习系列3--提交并分享自己的镜像', '3 提交并分享自己的镜像'],
        ['Docker-学习系列4--简单总结-docker-curriculum', '4 简单总结 docker-curriculum'],
        ['Docker-学习系列5--nginx-容器', '5 Nginx-容器'],
        ['Docker-学习系列6--Docker-Compose-中的环境变量使用注意事项', '6 Docker Compose 中的环境变量使用注意事项'],
        ['Docker-学习系列7--容器化Node项目', '7 容器化Node项目'],
        ['Docker-学习系列8--结合daocloud实现持续集成', '8 结合daocloud实现持续集成'],
        ['Docker-学习系列9--Docker的技术原理介绍', '9 Docker的技术原理介绍'],
        ['Docker-学习系列10-开源图形化管理系统', '10 开源图形化管理系统'],
        ['Docker-学习系列11-多阶段镜像构建', '11 多阶段镜像构建'],
        ['Docker-学习系列12-轻松实现-MySQL-主从同步', '12 轻松实现MySQL主从同步'],
        ['Docker-学习系列13-实现-基于pxc-的mysql-多节点主主同步', '13 实现基于pxc的mysql多节点主主同步'],
        ['Docker-学习系列14-使用haproxy实现mysql集群的负载均衡', '14 使用haproxy实现mysql集群的负载均衡'],
        ['Docker-学习系列15-Docker使用xdebug配合PHPStorm调试PHP', '15 Docker使用xdebug配合PHPStorm调试PHP'],
        ['Docker-学习系列16-使用过程的一些经验总结', '16 使用过程的一些经验总结'],
        ['Docker-学习系列17-镜像和容器的导入导出', '17 镜像和容器的导入导出'],
        ['Docker-学习系列18-关于PHP5-6', '18 关于PHP5.6'],
        ['Docker-学习系列19-容器化Angular项目', '19 容器化Angular项目'],
        ['Docker-学习系列20-工具推荐，dive--分析镜像层的工具', '20 工具推荐，dive--分析镜像层的工具'],
        ['Docker-学习系列21-配置远程访问Docker', '21 配置远程访问Docker'],
        ['Docker-学习系列22-Docker-Layer-Caching.md', '22 Docker-Layer-Caching.md'],
        ['Docker-学习系列23-推荐一款自动更新 Docker 镜像与容器的神器 Watchtower.md', '23 推荐一款自动更新 Docker 镜像与容器的神器 Watchtower'],
        ['Docker-学习系列24-Docker-及-docker-compose-使用总结', '24 Docker 及 Docker-compose 使用总结'],
        ['Docker-学习系列25-Dockerfile-中的-COPY-与-ADD-命令', '25 Dockerfile 中的 COPY 与 ADD 命令'],
        ['Docker-学习系列26-hub-tool', '26-hub-tool工具介绍'],
        ['Docker-学习系列27-Docker-in-Docker', '27-Docker-in-Docker'],
        ['Docker-学习系列28-网络故障调试工具的瑞士军刀-netshoot', '28-网络故障调试工具的瑞士军刀-netshoot'],
        ['Docker-学习系列29-使用 Docker Buildx 构建多种系统架构镜像', '29-使用 Docker Buildx 构建多种系统架构镜像'],
        ['Docker-学习资源', 'Docker学习资源'],
        ['Docker-常见问题', 'Docker常见问题'],
      ],

      '/DevOps/Ansible/': [
        ['Ansible-2----1-介绍与使用场景', '1 介绍与使用场景'],
        ['Ansible-2----2-安装与配置', '2 安装与配置'],
        ['Ansible-2----3-配置文件', '3 配置文件'],
        ['Ansible-2----4-常用模块及常用API', '4 常用模块及常用API'],
        ['Ansible-2----5-playbook-语法', '5 playbook 语法'],
        ['Ansible-2----6-playbook-管理', '6 playbook 管理'],
      ],

      '/DevOps/GithubActions/': [
        ['入门', '入门'],
        ['如何手动触发构建', '如何手动触发构建'],
        ['自用github-actions-workflow', '自用github-actions-workflow'],
        ['只针对某些提交触发构建', '只针对某些提交触发构建'],
        ['相关资源', '相关资源'],
      ],

      '/DevOps/Linux/': [
        ['SSH--无密码登录', 'SSH--无密码登录'],
        ['SSH--技巧', 'SSH--技巧'],
        ['SSH--Gitlab中的使用', 'Gitlab配置CI/CD 使用ssh完成自动化部署'],
        ["前端项目打包总结", "前端项目打包总结"],
      ],

      '/Tools/Git/': [
        ['Git-和-GitHub：从入门到实践1-Git-和-GitHub-基础简介', 'Git-和-GitHub-基础简介'],
        ['Git-和-GitHub：从入门到实践2-Git-和-GitHub-基础配置', 'Git-和-GitHub-基础配置'],
        ['Git-和-GitHub：从入门到实践3-Git-分支简介、Git-和-GitHub-日常操作', 'Git-分支简介、Git-和-GitHub-日常操作'],
        ['Git-和-GitHub：从入门到实践4-Git 进阶-比较、回滚、撤销、分支合并和冲突解决', 'Git 进阶：比较、回滚、撤销、分支合并和冲突解决'],
        ['Git-和-GitHub：从入门到实践5-分支策略管理', 'Git 进阶：分支策略管理']
      ],

      '/Tools/Other/': [
        ['Firebase消息推送', 'Firebase消息推送'],
        ['当有个服务器可以干哪些事情', '当有个服务器可以干哪些事情?'],
        ['使用frp内网穿透工具', '使用frp内网穿透工具'],
        ['storybook-介绍和使用-比较火的响应式UI开发及测试环境', 'storybook-介绍和使用-响应式UI开发及测试环境'],
        ['强大的Postman-----API管理工具', '强大的Postman--API管理工具'],
        ['说下browserslist', '说下browserslist'],
        ['Amazon-S3-工具及使用', 'Amazon-S3-工具及使用'],
      ],

      '/Frontend/HTML5/': [
        ['CSS3实现未知宽高元素的垂直居中和水平居中', 'CSS3 实现未知宽高元素的垂直居中和水平居中'],
        ['巧解checkbox未选中不提交数据', '巧解checkbox未选中不提交数据'],
        ['禁止内部元素的事件响应', '禁止内部元素的事件响应'],
        ['前端安全', '前端安全总结'],
      ],

      '/Frontend/JavaScript/': [
        ['ES6技巧总结', 'ES6技巧总结'],
        ['JavaScript中reduce的使用', 'JavaScript中reduce的使用'],
        ['JavaScript中的事件相关', 'JavaScript中的事件相关'],
        ['说下js中的bind', '说下JavaScript中的bind'],
        ['说说JSON和JSONP，也许你会豁然开朗', '说说JSON和JSONP，也许你会豁然开朗'],
        ['解决setTimeout中的this指向问题', '解决setTimeout中的this指向问题'],
        ['使用-StorageEvent-解决浏览器Tab数据同步问题', '使用StorageEvent解决浏览器标签页数据同步问题'],
        ['关于JS中的循环', '关于JS中的循环'],
        ['JS-面试总结-理论篇', 'JS-面试总结-理论篇'],
        ['前端路由原理之 hash 模式和 history 模式', '前端路由原理之 hash 模式和 history 模式'],
        ['Typescript-技巧，补充中', 'Typescript-技巧，补充中'],
      ],

      '/Frontend/GraphQL/': [
        ['GraphQL-分享-理论篇', 'GraphQL-分享-理论篇'],
        ['GraphQL-分享-实战篇', 'GraphQL-分享-实战篇'],
      ],

      '/Frontend/RxJS-6/': [
        ['RxJS-学习系列-1--认识-RxJS', '1--认识-RxJS'],
        ['RxJS-学习系列-2--函数式编程', '2--函数式编程'],
        ['RxJS-学习系列-3--认识观察者模式和迭代器模式', '3--认识观察者模式和迭代器模式'],
        ['RxJS-学习系列-4--RxJS-介绍及注意事项', '4--RxJS-介绍及注意事项'],
        ['RxJS-学习系列-5--创建-Observable', '5--创建-Observable'],
        ['RxJS-学习系列-6--Observable-和-数组的区别', '6--Observable-和-数组的区别'],
        ['RxJS-学习系列-7--创建操作符-from,-of,-range,-interval,-timer,-empty', '7--创建操作符'],
        ['RxJS-学习系列-8--过滤操作符-startWith,filter,-last,-first,-skip,-take', '8--过滤操作符3-1'],
        ['RxJS-学习系列-9--过滤操作符-takeUntil，takeWhile，skipUntil，skipWhile', '9--过滤操作符3-2'],
        ['RxJS-学习系列-10--过滤操作符-debounce，debounceTime，throttle，throttleTime', '10--过滤操作符3-3'],
        ['RxJS-学习系列-11--合并操作符-concat,-merge,-concatAll', '11--合并操作符3-1'],
        ['RxJS-学习系列-12--合并操作符-concatAll,-mergeAll,-switchAll', '12--合并操作符3-2'],
        ['RxJS-学习系列-13--合并打平操作符-switchMap,-mergeMap,-concatMap', '12--合并操作符3-3'],
        ['RxJS-学习系列-14--Subject-基本概念', '14--Subject基本概念'],
        ['RxJS-学习系列-15--Subject-示例', '15--Subject示例'],
        ['RxJS-学习系列-16---Subject-的变形,-BehaviorSubject,-ReplaySubject,-AsyncSubject', '16-Subject的变形'],
        ['RxJS-学习系列-RxJS-5-到-6迁移指导', 'RxJS-5-到-6迁移指导'],
        ['RxJS-学习系列-RxJS-在-Angular-中的使用', 'RxJS在Angular中的使用'],
        ['RxJS-学习系列-使用-RxJS-要注意的问题', '使用RxJS要注意的问题'],
        ['RxJS-学习系列-资料推荐', '资料推荐']
      ],

      '/Frontend/Angular/': [
        ['Angular-共享数据', 'Angular-共享数据'],
        ['Angular-样式使用注意事项', 'Angular-样式使用注意事项'],
        ['Angular-模板变量', 'Angular-模板变量'],
        ['Angular-pipe管道介绍及使用', 'Angular-pipe管道介绍及使用'],
        ['Angular-component-组件内使用原生pipe', 'Angular-component-组件内使用原生pipe'],
        ['Angular-使用-RxJS-优化处理Http请求', 'Angular-使用-RxJS-优化处理Http请求'],
        ['Angular-表单1--响应式表单', 'Angular-表单1--响应式表单'],
        ['Angular-表单2--响应式表单-处理异步数据', 'Angular-表单2--响应式表单-处理异步数据'],
        ['Angular-表单3--响应式表单-复杂验证', 'Angular-表单3--响应式表单-复杂验证'],
        ['Angular-依赖注入-初认', 'Angular-依赖注入-初认'],
        ['Angular-依赖注入-运用', 'Angular-依赖注入-运用'],
        ['Angular-实现一个Dialog组件', 'Angular-实现一个Dialog组件'],
        ['Angular-修改build后的静态资源目录路径', 'Angular-修改build后的静态资源目录路径'],
        ['使用CircleCI持续集成Angular项目', '使用CircleCI持续集成Angular项目'],
      ],

      '/Backend/Laravel/Laravel-core/': [
        ['Laravel-Macroable', '使用Laravel Macroable宏'],
        ['Laravel-pipeline', 'Laravel Pipeline管道'],
        ['Laravel-tap', 'Laravel tap'],
      ],

      '/Backend/Laravel/Laravel-echo-server/': [
        ['Laravel-echo构建实时应用', 'Laravel-echo构建实时应用'],
        ['Laravel-结合Pusher搭建实时应用-1', 'Laravel-结合Pusher搭建实时应用-1'],
        ['Laravel-结合Pusher搭建实时应用-2', 'Laravel-结合Pusher搭建实时应用-2'],
      ],

      '/Backend/Laravel/Laravel-feature/': [
        ['Laravel-best-practices', 'Laravel 开发最佳实践'],
        ['Laravel-translate功能', 'Laravel结合VueJs多语言处理'],
        ['Laravel-实现多语言切换', 'Laravel-实现多语言切换'],
        ['Laravel-Route-Model-Binding', 'Laravel-路由模型的使用'],
        ['Laravel-记录邮件发送日志', 'Laravel-记录邮件发送日志'],
        ['Laravel-事件的使用1', 'Laravel-事件的使用1'],
        ['Laravel-事件的使用2', 'Laravel-事件的使用2'],
        ['Laravel-view-composers', 'Laravel 视图合成器的使用场景'],
        ['Laravel-Server-Fetched-Partials-片段渲染', 'Laravel 片段渲染'],
        ['Laravel-collection', 'Laravel 集合与实例'],
        ['Laravel-redis', 'Redis 在 Laravel 项目中的使用场景'],
      ],

      '/Backend/Laravel/Laravel-model/': [
        ['Laravel-model-tips', 'Laravel model使用技巧'],
        ['Laravel-Fix-non-object', '避免 Trying to get property of non-object 错误的几种方法'],
        ['Laravel-useful-attribute', '模型常用属性'],
        ['Laravel-Eloquent-提示和技巧', 'Eloquent提示和技巧'],
        ['Laravel-relation-select', '关联查询指定表的字段'],
      ],

      '/Backend/Laravel/Laravel-3rd-party/': [
        ['Laravel-常用第三方类库', 'Laravel-常用第三方类库'],
        ['Laravel-mix', 'Laravel Mix介绍'],
        ['Laravel-snappy生成PDF', 'Laravel-snappy生成PDF'],
        ['Laravel-ingnition', 'Laravel Ignition异常详情组件介绍'],
        ['Laravel-multitenancy', 'Laravel 多租户解决方案'],
        ['Laravel-medialibrary', 'Laravel 媒体库'],
      ],

      '/Backend/Database/MySQL/': [
        ['总结', '总结'],
        ['索引', '索引'],
      ],

      '/Backend/Database/MQTT/': [
        ['MQTT系列-MQTT基础概念', 'MQTT基础概念'],
        ['MQTT系列-MQTT的QoS介绍', 'MQTT的QoS介绍'],
        ['MQTT系列-遗嘱消息', 'MQTT的遗嘱消息(Will Message)'],
        ['MQTT系列-保留消息', 'MQTT系列-保留消息'],
        ['MQTT系列-代码示例', '代码示例'],
        ['MQTT5.0介绍', 'MQTT5.0介绍'],
        ['MQTT5.0新特性-Clean Start 与 Session Expiry Interval', 'MQTT5.0新特性-Clean Start 与 Session Expiry Interval'],
        ['MQTT5.0新特性-Inflight Window & Message Queue', 'MQTT5.0新特性-Inflight Window & Message Queue'],
        ['MQTT5.0新特性-共享订阅', 'MQTT5.0新特性-共享订阅'],
        ['MQTT5.0新特性-增强认证', 'MQTT5.0新特性-增强认证'],
        ['MQTT5.0新特性-属性与载荷', 'MQTT5.0新特性-属性与载荷'],
        ['MQTT5.0新特性-流量控制', 'MQTT5.0新特性-流量控制码示例'],
        ['MQTT5.0新特性-订阅标识符与订阅选项', 'MQTT5.0新特性-订阅标识符与订阅选项'],
        ['MQTT5.0新特性-请求响应', 'MQTT5.0新特性-请求响应'],
      ],

      // '/Backend/MQ/': [
      //     ['1-RabbitMQ入门基础.md', '1-安装入门'],
      //     ['2-RabbitMQ基本操作.md', '2-基本操作'],
      // ],

      // fallback
      // '': [
      //   '',
      //   // ['/DevOps/Jenkins/', 'Jenkins2系列'],
      //   // // ['/Javascript-animate/', 'Javascript动画'],
      //   // ['/DevOps/Docker/', 'Docker系列'],
      //   // ['/Frontend/HTML5/', 'HTML5&CSS3'],
      //   // ['/Backend/Laravel/', 'Laravel系列'],
      //   // ['/Backend/Database/MQTT/', 'MQTT系列'],
      // ]
    }
  }
};
