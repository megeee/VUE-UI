<template>
    <div class="demo_block">
        <h2>基本用法：</h2>
        <div class="source">
            <lz-Pagination
                :page-count="pageCount"
                :margin-pages="marginPages"
                :page-range="pageRange"
                :initial-page="0"
                prevText="上一页"
                nextText="下一页"
                :click-handler="setPage"
            ></lz-Pagination>
        </div>
        <h2>小型分页：</h2>
        <div class="source">
            <lz-Pagination
                    :page-count="5"
                    :margin-pages="4"
                    :page-range="5"
                    :initial-page="0"
                    prevText="上一页"
                    nextText="下一页"
                    :click-handler="setPage"
            ></lz-Pagination>
        </div>
        <h2>设置确省页：</h2>
        <div class="source">
            <lz-Pagination
                    :page-count="200"
                    :margin-pages="2"
                    :page-range="2"
                    :initialPage="2"
                    :initial-page="0"
                    prevText="上一页"
                    nextText="下一页"
                    :click-handler="setPage"
            ></lz-Pagination>
        </div>
        <h2>可自定义跳转页：</h2>
        <div class="source">
            <lz-Pagination
                    :page-count="200"
                    :margin-pages="2"
                    :page-range="2"
                    :initialPage="2"
                    :initial-page="0"
                    prevText="上一页"
                    nextText="下一页"
                    :skip="true"
                    :click-handler="setPage"
            ></lz-Pagination>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import lzPagination from './pagination'
    export default {
        data () {
            return {
                pageCount: 2,
                marginPages: 5,
                pageRange: 6
            }
        },
        methods: {
            setPage(v) {
                console.log(v);//返回页码
            }
        },
        components: {
            lzPagination
        }
    }
</script>