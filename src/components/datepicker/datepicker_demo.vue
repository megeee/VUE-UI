<template>

    <div class="demo_block">
        <h2>基本用法：</h2>
        <div class="source">
            <lz-datepicker
                @change="pickDate"
                format="yyyy-MM-dd"
                :default-value="date"
                placeholder="请选择日期">
            </lz-datepicker>
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
                    <td>default-value</td>
                    <td>可选，默认显示的时间</td>
                    <td>String</td>
                    <td>可被new Date()解析</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>组件宽度</td>
                    <td>String</td>
                    <td>-</td>
                    <td>242px</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>占位内容</td>
                    <td>String</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>定义输出日期的格式</td>
                    <td>String</td>
                    <td>'yyyy-MM-dd','yyyy.MM.dd','yyyy/MM/dd'</td>
                    <td>yyyy-MM-dd</td>
                </tr>
                <tr>
                    <td>is-close</td>
                    <td>是否在选取日期后关闭选择层</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>true</td>
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
                    <td>change</td>
                    <td>当input的值改变时触发，返回值和文本框一致</td>
                    <td>格式化后的值，如: "2017-08-21"</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script type="text/ecmascript-6">
import lzDatepicker from "./datepicker"
    export default {
        data () {
            return {
                date:"2017-08-20"
            }
        },
        methods: {
            pickDate (v) {
                console.log(v)
            }
        },
        components: {
            lzDatepicker
        }
    }
</script>