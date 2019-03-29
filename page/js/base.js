var randomTags = new Vue({
    el: "#random-tags",
    data: {
        tags: ["html/css","CSS/DIV","ES6","git","javacript","Linux","Mac","PC技术","PHP","Python","Raspberry","Ubuntu","wordpress","webpack","git","Vue","jQuery","json","nodejs","CSS3","HTML5","Bootstrap","Webpack"]
    },
    computed: {
        randomColor: function () {
            return function () {
                var red = Math.random()*255 + 10;
                var green = Math.random()*255;
                var blue = Math.random()*255;
                return "rgb(" + red + " , " + green + " , " + blue + ")";
            }
        },
        randomSize: function() {
            return function () {
                var size = (Math.random() * 20 + 12) + "px";
                return size;
            }
        }
    },
    created: function() {

    }
});

var newHot = new Vue({
    el: "#new-hot",
    data: {
        titleList:[
            {
                title: "new assert.AssertionError(options)",
                link: "/blog-detail.html"
            },
            {
                title: "Vue.js 是什么",
                link: "/blog-detail.html"
            },
            {
                title: "PC端微信(2.6.6.28)防撤回",
                link: "/blog-detail.html"
            },
            {
                title: "Vue Router路由 嵌套路由与守卫",
                link: "/blog-detail.html"
            },
            {
                title: "jQuery的核心特性和发展历程",
                link: "/blog-detail.html"
            },
            {
                title: "在模块系统中局部注册计算属性和侦听器",
                link: "/blog-detail.html"
            },
            {
                title: "new assert.AssertionError(options)",
                link: "/blog-detail.html"
            }

        ]
    }
});

var newComments = new Vue({
    el: "#new-comments",
    data: {
        commentsList: [
            {
                name:"爆米花",
                comment: "哈哈不错",
                data: "2天前"
            },
            {
                name:"lucy",
                comment: "给个联系方式，深入交流一下",
                data: "5天前"
            },
            {
                name:"可乐",
                comment: "欢迎多多分享",
                data: "2天前"
            },
            {
                name:"芬达",
                comment: "良心好内容，给个联系方式，深入交流一下",
                data: "3天前"
            },
            {
                name:"雪碧",
                comment: "给个联系方式，深入交流一下",
                data: "2天前"
            },
            {
                name:"七喜",
                comment: "给个联系方式，探讨下",
                data: "2天前"
            },
        ]
    }
})
