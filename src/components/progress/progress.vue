<!--
* @Progress 进度条组件
* @author: Jeff Guo
-->
<template>
    <div class="progress" :style="'width:' + strokeWidth">
        <div class="progress-bar" :class="nowStatus()"
             :style="'width:' + percentage +'%'">
            {{ percentage }}%
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                nowStatus:function(){
                    switch(this.status) {
                        case "success":
                            return "progress-bar-success";
                            break;
                        case "fail":
                            return "progress-bar-fail";
                            break;
                        default:
                            return "info"
                    }
                }
            }
        },
        props: {
            percentage: { type: Number,default: 0 }, //进度条百分比
            strokeWidth: {type: String, default: "100%"}, //进度条宽度
            status: {type: String, default: ""}, //状态
            type: {type:String}
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.progress
    height 20px
    overflow hidden
    background-color #f5f5f5
    border-radius 4px
    -webkit-box-shadow 0 1px 2px rgba(0,0,0,.1) inset
    box-shadow 0 1px 2px rgba(0,0,0,.1) inset
    .progress-bar
        float: left
        width: 0
        height: 100%
        font-size: 12px
        line-height: 20px
        color: #fff
        text-align: center
        background-color: #337ab7
        -webkit-box-shadow:  0 -1px 0 rgba(0,0,0,.15) inset
        box-shadow: 0 -1px 0 rgba(0,0,0,.15) inset
        -webkit-transition: width .6s ease
        -o-transition: width .6s ease
        transition: width .6s ease
    .progress-bar-fail //失败
        background #d9534f
    .progress-bar-success //成功
        background #5cb85c
    .progress-bar-info //初始
        background #337ab7
</style>
