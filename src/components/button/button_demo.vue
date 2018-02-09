<template>
    <div class="demo_block">
          <h2>登录:</h2>
        <div class="source">
         用户名：<input type="text" v-model="testValue"></br>
         密码：<input type="password" v-model="testPass"></br>
          <lz-button
            ladel="登录" 
            :disabled="!testValue || !testPass ? true : false"
            :loading="Register"
            type = "login"
             @click.native="setRegister"
          ></lz-button>
        </div>
        <h2>提交:</h2>
         <div class="source">
          <lz-button
            ladel = "提交"
            :loading="loading"
            type = "submit"
            @click.native="setStatus"
          ></lz-button>
        </div>
         <h2>删除:</h2>
         <div class="source">
          <lz-button
            ladel = "删除"
            :loading="loading"
            type = "remove"
            @click.native="setStatus"
          ></lz-button>
        </div>
         <h2>修改:</h2>
         <div class="source">
          <lz-button
            ladel = "修改"
            :loading="loading"
            type = "alter"
            @click.native="setStatus"
          ></lz-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import lzButton from './button.vue'
    export default {
        data () {
            return {
                Register:false,
                loading:false,
                testValue:"",
                testPass:"",
            }
        },
        created () {
            
        },

        methods: {
            setStatus () {
                this.loading = true;
                //提交
                setTimeout(() => {
                    this.loading = false;
                },3000)
                
            },
            setRegister(){
                 this.Register = true;
                //提交
                setTimeout(() => {
                    this.Register = false;
                },3000)
            }
        },
        components: {
            lzButton
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
