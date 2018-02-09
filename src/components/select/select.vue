<!--
* @select选择器组件
* @author: Jeff Guo
-->
<template>
    <span class="select-box" :style="'width:'+width">
        <select :class="disabled ? 'select disabled':'select'" size="1" :style="css" v-model="selectValue" :disabled="disabled">
            <option value="" disabled  selected>{{ placeholder }}</option>
            <option value="" v-if="selectValue !='' ">全部</option>
            <option v-for="app in item" :value="app.value">{{ app.label }}</option>
        </select>
    </span>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                selectValue:""
            }
        },
        props: {
            item: { type: Array },
            disabled: {type: Boolean, default: false},
            placeholder: {type: String, default: "请选择"},
            css: {type:String},
            width: {type:String}
        },
        watch: {
            selectValue(val) {
                this.$emit('change',val);
            }
        },
        methods: {

        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    /*选择列表*/
    .select-box
        border solid 1px #ddd
        box-sizing border-box
        vertical-align middle
        width 200px
        display inline-block
        padding 4px 5px
        margin-right 15px
        border-radius 3px
        .select
            border none
            box-sizing border-box
            cursor pointer
            line-height normal
            font-weight normal
            width 100%
            white-space nowrap
            font-size 14px
            &.disabled
                color #ccc
                cursor not-allowed
</style>
