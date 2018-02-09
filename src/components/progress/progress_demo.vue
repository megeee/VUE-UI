<template>
    <div class="demo_block">
        <h2>基本用法：</h2>
        <div class="source">
            <lz-progress
                :percentage="percentage"
                :status="status"
                stroke-width="50%"
            ></lz-progress>
        </div>
        <h2>进度成功：</h2>
        <div class="source">
            <lz-progress
                    :percentage="percentage_success"
                    :status="status_success"
                    stroke-width="50%"
            ></lz-progress>
        </div>
        <h2>进度失败：</h2>
        <div class="source">
            <lz-progress
                    :percentage="percentage_fail"
                    :status="status_fail"
                    stroke-width="50%"
            ></lz-progress>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
import lzProgress from './progress'
    export default {
        data () {
            return {
                percentage:0,
                percentage_success:0,
                percentage_fail:0,

                status:"",
                status_success:"",
                status_fail:""

            }
        },
        created () {
            let timer =  setInterval(()=>{
                if(this.percentage < 100){
                    this.percentage++
                } else {
                    clearInterval(timer);
                }
            },100);

            //成功
            let timer_success =  setInterval(()=>{
                if(this.percentage_success < 100){
                    this.percentage_success++
                } else {
                    clearInterval(timer_success);
                    this.status_success = "success"
                }
            },150);

            //失败
            let timer_fail =  setInterval(()=>{
                if(this.percentage_fail < 100){
                    this.percentage_fail++
                } else {
                    clearInterval(timer_fail);
                    this.status_fail = "fail"
                }
            },50);
        },
        methods: {
            //方法
        },
        components: {
            lzProgress
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>