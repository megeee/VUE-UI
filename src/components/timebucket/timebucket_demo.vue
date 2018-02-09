<template>
    <div class="demo_block">

        <h2>自然月选择：</h2>
        <div class="source">
            <month-Select :changeSegment="changeDate" width="50%"></month-Select>
        </div>
        <h2>自然周选择：</h2>
        <div class="source">
            <week-Select :changeSegment="changeDate" :maxDay="new Date()" width="50%"></week-Select>
        </div>

    </div>
</template>

<script>
import monthSelect from './month'
import weekSelect from './week'
export default {
    methods:{
        changeDate(val){
            console.log(val)
        }
    },
    components: {
        monthSelect,weekSelect
    }
}
</script>