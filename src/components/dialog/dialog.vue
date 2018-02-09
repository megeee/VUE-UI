<template>
    <transition name="fade">
        <div class="dialog-wrap" v-if="visible" :class="customClass">
            <div class="dialog" :style="{width:width,top:top}">
                <div class="dialog-header">               
                    <span class="dialog-title"><slot name="title">{{ title }}</slot></span>                
                    <span class="dialog-close" @click="cancel">
                        <icon name="close" scale="1.5"></icon>
                    </span>
                </div>
                <div class="dialog-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'dialog',
    data () {
        return {
            visible:false
        }
    },
    props: {
        width: { 
            type: String, 
            default: '280px' 
            },
        title: { 
            type: String, 
            default: '提示' 
            },
        value: {
            type: Boolean,
            default: false
        },
        top: {
            type: String,
            default: "18%"
        },
        customClass: {
            type: String,
            default: ""
        },
        onClose: {
            type: Function
        }
    },
    watch:{
        value (val) {
            console.log(val);
            this.visible = val;
        },
        visible (val) {
            this.$emit('input', val);
        }
    },
    methods:{
        cancel () {
            this.$emit("on-close");
            this.visible = false;
        }
    },
    mounted () {
        if (this.value) {
            this.visible = true;
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.dialog-wrap
    position fixed
    overflow auto
    top 0
    left 0
    right 0
    bottom 0
    background rgba(0,0,0,.1)
    .dialog
        position absolute
        left 50%
        top 20%
        min-width 360px
        padding 0 0 20px 0
        transform  translateX(-50%)
        background #fff
        border-radius 3px
        transition all .3s ease
        box-shadow 0 1px 3px rgba(0,0,0,.5)
        box-sizing border-box
        z-index 999
        .dialog-header
            overflow hidden
            padding 20px 20px 0
            .dialog-title
                float left
                line-height 1
                font-size 16px
                font-weight 700
                color #1f2d3d
            .dialog-close
                float right
                font-size 26px
                color #ccc
                margin -10px -5px 0 0
                transition color .3s ease
                cursor pointer
                &:hover
                    color #20a0ff
        .dialog-body
            height auto
            padding 20px
.fade-enter-active
    transition all .2s ease
.fade-leave-active
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.fade-enter,.fade-leave-to
    transform translateY(-10px)
    opacity 0
</style>

