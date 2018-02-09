<template>
    <div>

        <div class="header">
            <div>
                <div class="logo">LZ-UI 组件库</div>
            </div>
        </div>

        <div class="wrap">

            <div class="sidebar">
                <h2>版本： 1.0.0</h2>
                <ul>
                    <li v-for="link in routes">
                        <router-link :to="link.path">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="view">
                <div class="title">
                    <h1>{{ title }}</h1>
                </div>
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                routes:[],
                title:""
            }
        },
        created () {
            //获取当前路由全部数组
            this.routes = this.$router.options.routes[0].children;
            //监控页面跳转，取路由元信息
            this.$router.beforeEach((to, from, next) => {
                this.title =  to.meta.title;
                next();
            });
            //解决刷新为空，应该还有其它办法
            if(this.title === "") 
                this.title = this.$route.meta.title
        },
        methods: {
            
        },
        components: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header    
    width 100%
    min-width 1200px
    background #20a0ff
    >div
        width 1200px
        height 80px
        margin 0 auto
        display flex
        justify-content space-between
        .logo
            width 20%
            font-size 32px
            line-height 80px
            color #fff
            padding 0 20px
.wrap
    width 1200px
    overflow hidden
    min-height 800px
    margin 50px auto
    display flex
    justify-content space-between
    .sidebar
        width 20%
        border 1px solid #f5f5f5
        >h2
            font-size 16px
            height 50px
            line-height 50px
            margin 0
            text-indent 1em
            border-bottom 1px solid #f5f5f5
        ul
        margin 30px 0
        li
            height 40px
            border-bottom 1px solid #f5f5f5
            a
                text-decoration none
                color #1a2d40
                display block
                text-indent 23px
                line-height 40px
                transition background .3s
                &.router-link-active
                    color #20a0ff
                &:hover
                    color #20a0ff
                    outline-right 1px solid red
    .title
        height 50px
        border-bottom 1px solid #f5f5f5
        margin-bottom 30px
        >h1
            font-size 28px
    .view
        width 76%
        padding 0 20px 20px 20px
        box-sizing border-box    
</style>