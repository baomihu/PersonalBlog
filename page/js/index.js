var everyDay = new Vue({
    el: "#every-day",
    data: {
        content: "It is always the simple that produces the marvelous.",
        Ccontent: "非凡皆源于至简。",
        writer: "———— Amelia Barr"
    },
    computed: {
        getContent: function () {
            return this.content;
        },
        getCcontent: function () {
            return this.Ccontent;
        },
        getWriter: function () {
            return this.writer;
        }
    },
    // created: fucntion () {
    //     //请求数据，给content赋值
    // }
});

var articalList = new Vue({
    el: "#artical_list",
    data: {
        articalList: [
            {   title: "Vue.js 是什么",
                content: "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结...",
                data: "2018-10-10",
                view: "102",
                tags: "Vue Vuex",
                id: "1",
                link: "/blog-detail.html"
            },
            {   title: "mySql从入门到精通",
                content: "MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件。...",
                data: "2018-09-9",
                view: "501",
                tags: "MySql js",
                id: "1",
                link: "/blog-detail.html"
            },
            {   title: "new assert.AssertionError(options)",
                content: "options <Object> message <string> 如果提供，则将错误消息设置为此值。actual <any> 错误实例上的 actual 属性将包含此值。由于其社区版的性能卓越，搭配 PHP 和 Apache 可组成良好的开发环境,支持多种存储引擎.与其他的大型数据库 LAMP LAMP例如 Oracle、DB2、SQL Server等相比，MySQL [1]  自有它的不足之处，但是这丝毫也没有减少它受欢迎的程度。对于一般的个人使用者和中小型企业来说，MySQL提供的功能已经绰绰有余，而且由于 MySQL是开放源码软件，因此可以大大降低总体拥有成本...",
                data: "2018-10-10",
                view: "102",
                tags: "c++ js",
                id: "1",
                link: "/blog-detail.html"
            },
            {   title: "jQuery的核心特性和发展历程",
                content: "jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等...",
                data: "2018-10-10",
                view: "102",
                tags: "c++ js",
                id: "1",
                link: "/blog-detail.html"
            },
            {   title: "PC端微信(2.6.6.28)防撤回",
                content: "此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其变为74。保存文件...",
                data: "2018-10-10",
                view: "102",
                tags: "c++ js",
                id: "1",
                link: "/blog-detail.html"
            },
            {   title: "Vue Router路由 嵌套路由与守卫",
                content: "由于状态零散地分布在许多组件和组件之间的交互中，大型应用复杂度也经常逐渐增长。为了解决这个问题，Vue 提供 vuex：我们有受到 Elm 启发的状态管理库。vuex 甚至集成到 vue-devtools，无需配置即可进行时光旅行调试 (time travel debugging)。如果你是来自 React 的开发者，你可能会对 Vuex 和 Redux 间的差异表示关注，Redux 是 React 生态环境中最流行的 Flux 实现。Redux 事实上无法感知视图层，所以它能够轻松的通过一些简单绑定和 Vue 一起使用。Vuex 区别在于它是一个专门为 Vue 应用所设计。这使得它能够更好地和 Vue 进行整合，同时提供简洁的 API 和改善过的开发体验。简单状态管理起步使用...",
                data: "2018-10-10",
                view: "102",
                tags: "c++ js",
                id: "1",
                link: "/blog-detail.html"
            }
        ]
    },
    computed: {

    },
    created: function () {

    }
});
