<template>
    <div class="demo_block">
        <h2>基本用法：</h2>
        <div class="source">
            <a href="javascriot:void(0)" @click="show = true">弹出</a>

            <lz-dialog title="添加管理员" v-model="show" width="50%" @on-close="isClose">

                <lz-input
                    placeholder = "用户名"
                    :disabled = "false"
                    :readonly = "false"
                    maxlength = 40
                    minlength = 5
                    width="230px">
                </lz-input>
                <br>
                <lz-datepicker
                    @change="changeDate"
                    :disabled="false"
                    :default-value="date"
                    placeholder="请选择日期">
                </lz-datepicker>
            </lz-dialog>

        </div>

        <h2>参数：</h2>
        <table class="default-table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>visible</td>
                    <td>显示与隐藏Dialog,v-model绑定</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>标题</td>
                    <td>String</td>
                    <td>-</td>
                    <td>提示</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>Dialog宽度</td>
                    <td>String</td>
                    <td>-</td>
                    <td>280px</td>
                </tr>
                <tr>
                    <td>top</td>
                    <td>Dialog离页面顶部的距离</td>
                    <td>String</td>
                    <td>-</td>
                    <td>18%</td>
                </tr>
                <tr>
                    <td>custom-class</td>
                    <td>Dialog 的自定义类名</td>
                    <td>String</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <h2>事件：</h2>
        <table class="default-table">
            <thead>
            <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>on-close</td>
                <td>当Dialog关闭时触发</td>
                <td>无</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>
<script type="text/ecmascript-6">
import lzDialog from "./dialog"
import lzDatepicker from "../datepicker/datepicker"
import lzInput from "../input/input"
export default {
    data () {
        return {
            show:false,
            date:"2017-09-08",
            username:"admin"
        }
    },
    methods: {
        changeDate (v) {
            console.log(v,111)
        },
        isClose (){
            console.info("This dialog has been closed.")
        }
    },
    components: {
        lzDialog,lzDatepicker,lzInput
    }
}
</script>