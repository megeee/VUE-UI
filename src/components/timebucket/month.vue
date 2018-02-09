<!--
* @Time Bucket 月时间段选择组件
* @author: Jeff Guo
-->
<template>
    <div class="time_bucket" :style="{width:width}">
        <div @click="dataSegment().pre()">上个月</div>
        <span>{{ segmentStr[0] }} ~ {{ segmentStr[1] }}</span>
        <div @click="dataSegment().next()" :class="{'none':compareDate(segmentStr[1],new Date())}">下个月</div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            segmentStr : [],
            nowMonth:0
        }
    },
    created (){
        this.dataSegment().init();
    },
    props: {
        changeSegment: {
            type: Function
        },
        width: {
            type: String,
            default:"100%"
        } 
    },
    methods : {
        dataSegment () { //获取时间段数据

            let getLastDay = (year,month) => {
                return new Date(year,month,0).getDate()
            };

            let formatDate = date => {
                let year = date.getFullYear()+'-'
                ,   month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) + '-' : (date.getMonth()+1) + '-'
                ,   day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                return year+month+day;
            };

            let showMonth = newData => {
                let Y = newData.getFullYear()
                ,   M = newData.getMonth()+1
                ,   LastDay = getLastDay(Y,M)
                ,   dateStr = [Y + "-" + (M < 10 ? "0" + M : M) + '-01',Y + '-' + (M < 10 ? "0" + M : M) + '-'+ LastDay];
                this.segmentStr = dateStr;
                this.changeSegment(dateStr);
            };
            //切换月份方法
            let changeMonth = n => {
                let now = new Date();
                return new Date( now.getFullYear(), now.getMonth()+n, now.getDate() );
            };
            let Export = {};
            //初始化
            Export.init = now => {
                showMonth(changeMonth(this.nowMonth));
            };
            //下一个月
            Export.pre = () => {
                this.nowMonth--;
                showMonth(changeMonth(this.nowMonth));
            };
            //上一个月
            Export.next = () => {
                this.nowMonth++;
                showMonth(changeMonth(this.nowMonth));
            };
            return Export;
        },
        //对比月份
        compareDate (d1,d2) {
            let date1 = new Date(d1)
            ,   date2 = new Date(d2);
            return date1.getMonth() >= date2.getMonth() && date1.getFullYear() >= date2.getFullYear();
        }
    }
}
</script>