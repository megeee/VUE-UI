<!--
* @Time Bucket 周时间段选择组件
* @author: Jeff Guo
-->
<template>
    <div class="time_bucket" :style="{width:width}">
        <div @click="dataSegment().pre()">上一周</div>
        <span>{{ segmentStr[0] }} ~ {{ segmentStr[1] }}</span>
        <div :class="{'none':compareDate(segmentStr[1],maxDay)}" @click="dataSegment().next()">下一周</div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    data () {
        return {
            segmentStr : "",
            currentFirstDate: ""
        }
    },
    created (){
        this.dataSegment().init(new Date()); //初始化
    },
    props: {
        changeSegment: { 
            type: Function 
        },
        maxDay:{ //最大可选日期，留空即不限制范围
            default: "" 
        },
        width: {
            type: String,
            default:"100%"
        }
    },
    methods : {

        dataSegment () {

            let formatDate = date => {
                let year = date.getFullYear()+'-'
                ,   month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) + '-' : (date.getMonth()+1) + '-'
                ,   day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                return year+month+day;
            };

            let getNDate = (date,n) => {
                date.setDate(date.getDate()+n);
                return date;
            };

            let setWeek = date => {
                let nowDay = date.getDay()-1;
                date = nowDay < 0 ? getNDate(date,nowDay*+6) : getNDate(date,nowDay*-1);
                this.currentFirstDate = new Date(date);
                this.segmentStr = [formatDate(date),formatDate(getNDate(date,6))]
                this.changeSegment(this.segmentStr); //数据回调
            };

            let Export = {}; 
            Export.init = now => {
                setWeek(now);
            };
            Export.pre = () => {
                setWeek(getNDate(this.currentFirstDate,-7));
            };
            Export.next = () => {
                setWeek(getNDate(this.currentFirstDate,7));
            };
            return Export;
        },
        //对比日期
        compareDate (d1,d2) {
            let newD = new Date(d2);
            return new Date(d1) >= new Date(newD.getFullYear(),newD.getMonth(),newD.getDate());
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.time_bucket
    height 30px
    display flex
    justify-content space-between
    align-items center
    color #333
    margin-bottom 3px
    & > div
        line-height 30px
        padding 0 10px
        cursor pointer
        border-radius 5px
        border 1px solid #ccc
        user-select none
        transition border .3s
    & > div:hover
        border 1px solid #20a0ff
        color #20a0ff
    & > .none
        pointer-events none
        color #ccc    
</style>