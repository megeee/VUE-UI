<template>

    <div class="demo_block">
        <h2>基本用法：</h2>
        <div class="source">
            <lz-select 
                @change="changeDate" 
                :item="itemData" 
                width="220px"
                :disabled="false"
                placeholder="请选择岗位">
            </lz-select>
        </div>
        <h2>禁用状态</h2>
        <div class="source">
            <lz-select 
                @change="changeDate" 
                :item="itemData" 
                width="220px"
                :disabled="true"
                placeholder="请选择岗位">
            </lz-select>
        </div>

    </div>
    
</template>

<script type="text/ecmascript-6">
import lzSelect from "./select"
    export default {
        data () {
            return {
                loading:false,
                changeValue:"",
                itemData:[
                    {
                        value:"前端开发工程师",
                        label:"前端开发工程师"
                    },
                    {
                        value:"Java开发工程师",
                        label:"Java开发工程师"
                    }
                ]
            }
        },
        methods: {
            changeDate(val){
                this.changeValue = val;
                console.log(this.changeValue)
            }
        },
        components: {
            lzSelect
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>