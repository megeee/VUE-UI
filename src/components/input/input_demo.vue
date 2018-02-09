<template>
  <div class="demo_block">
        <h2>基本用法：</h2>
        <div class="source">
           <lz-input
            :disabled = "true"
            :readonly = "true"
            maxlength =30
            minlength = 5 
            width="300px"
            default="am"
           ></lz-input>
        </div>
        <h2>用户名：</h2>
        <div class="source">
           <lz-input
            @chenge = "nameData"
            placeholder = "请您输入用户名"
            :disabled = "false"
            :readonly = "false"
            :matching = "userName"
            text="用户名格式错误"
            maxlength =30
            minlength = 5 
            width="400px"
           ></lz-input>
        </div>
        <h2>密码：</h2>
        <div class="source">
           <lz-input
            @chenge ="passwordData"
            placeholder = "请您输入密码"
            :disabled = "false"
            :readonly = "false"
            :matching = "password"
            text="密码格式错误"
            maxlength =30
            minlength = 5 
            width="400px"
           ></lz-input>
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
                    <td>placeholder</td>
                    <td>占位符</td>
                    <td>String</td>
                    <td>-</td>
                    <td>请输入</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>是否可读</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>matching</td>
                    <td>正则</td>
                    <td>Object</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>提示文本</td>
                    <td>String</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>maxlength</td>
                    <td>最大输入字符</td>
                    <td>Number</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>minlength</td>
                    <td>最小输入字符</td>
                    <td>Number</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>default</td>
                    <td>缺省值</td>
                    <td>String</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>组件宽度</td>
                    <td>String</td>
                    <td>-</td>
                    <td>200px</td>
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
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

 <script type="text/ecmascript-6">
import lzInput from './input.vue'
export default {
  data() {
    return {
      userName:/^[a-zA-Z0-9_-]{4,16}$/,
      password:/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
    }
  },
  created() {
   
  },
  methods: {
   nameData(val){
   console.log(val)
   },
   passwordData(val){
    console.log(val)
   }
  },
  props: {
   
  },
  components:{
    lzInput
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>