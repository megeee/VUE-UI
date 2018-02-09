<!--
* @pagination 分页组件
* @author: Jeff Guo
-->
<template>
    <div v-if="pageCount>1">
        <ul :class="type">
            <li :class="{ disabled: firstPageSelected() }">
                <a @click="prevPage()" @keyup.enter="prevPage()">{{ prevText }}</a>
            </li>
            <li v-for="page in pages" :class="{ active: page.selected, disabled: page.disabled }">
                <a v-if="page.disabled">{{ page.content }}</a>
                <a v-else @click="handlePageSelected(page.index)" @keyup.enter="handlePageSelected(page.index)">{{ page.content }}</a>
            </li>
            <li :class="{ disabled: lastPageSelected() }">
                <a @click="nextPage()" @keyup.enter="nextPage()">{{ nextText }}</a>
            </li>
            <li class="pagination_skip" v-if="skip">前往第 <input type="number" @keydown="skipPage($event)"> 页</li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import './pagination.styl'
    export default {
        data() {
            return {
                selected: this.initialPage
            }
        },
        props: {
            //一共有多少页，总页数,这里应该在组件里面计算，后面再完善
            pageCount: {
                type: Number,
                required: true
            },
            //初始显示页
            initialPage: {
                type: Number,
                default: 0
            },
            forcePage: {
                type: Number
            },
            //切换页面回调事件
            clickHandler: {
                type: Function,
                default: () => { }
            },
            //显示多少页，以最前面的页优先
            pageRange: {
                type: Number,
                default: 3
            },
            //...与外围显示的页数
            marginPages: {
                type: Number,
                default: 1
            },
            //上一页文字
            prevText: {
                type: String,
                default: 'Prev'
            },
            //下一页文字
            nextText: {
                type: String,
                default: 'Next'
            },
            //自定义样式
            type: {
                type: String,
                default: 'pagination'
            },
            skip: {
                type: Boolean,
                default: false
            }
        },
        beforeUpdate() {
            if(this.forcePage === undefined) return;
            if(this.forcePage !== this.selected) {
                this.selected = this.forcePage
            }
        },
        created(){
            console.log(this.pages)
        },
        computed: {
            pages: function () {
                let items = {};
                if(this.pageCount <= this.pageRange) {

                    for(let index = 0; index < this.pageCount; index++) {
                        let page = {
                            index: index,
                            content: index + 1,
                            selected: index === this.selected
                        };
                        items[index] = page
                    }

                } else {

                    let leftPart = this.pageRange / 2;
                    let rightPart = this.pageRange - leftPart;
                    if(this.selected < leftPart) {
                        leftPart = this.selected;
                        rightPart = this.pageRange - leftPart
                    } else if (this.selected > this.pageCount - this.pageRange / 2) {
                        rightPart = this.pageCount - this.selected;
                        leftPart = this.pageRange - rightPart
                    }
                    //页码列表逻辑
                    let mapItems = index => {
                        let page = {
                            index: index,
                            content: index + 1,
                            selected: index === this.selected
                        };
                        if(index <= this.marginPages - 1 || index >= this.pageCount - this.marginPages) {
                            items[index] = page;
                            return
                        }
                        let breakView = {
                            content: '...',
                            disabled: true
                        };
                        if((this.selected - leftPart) > this.marginPages && items[this.marginPages] !== breakView) {
                            items[this.marginPages] = breakView
                        }
                        if((this.selected + rightPart) < (this.pageCount - this.marginPages - 1) && items[this.pageCount - this.marginPages - 1] !== breakView) {
                            items[this.pageCount - this.marginPages - 1] = breakView
                        }
                        let overCount = this.selected + rightPart - this.pageCount + 1;
                        if(overCount > 0 && index === this.selected - leftPart - overCount) {
                            items[index] = page
                        }
                        if((index >= this.selected - leftPart) && (index <= this.selected + rightPart)) {
                            items[index] = page;
                            return false
                        }
                    };
                    //
                    for(let i = 0; i < this.marginPages; i++){
                        mapItems(i);
                    }
                    //
                    for(let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--){
                        mapItems(i);
                    }
                    //
                    let selectedRangeLow = 0;
                    if(this.selected - this.pageRange > 0) {
                        selectedRangeLow = this.selected - this.pageRange;
                    }
                    let selectedRangeHigh = this.pageCount;
                    if(this.selected + this.pageRange < this.pageCount) {
                        selectedRangeHigh = this.selected + this.pageRange;
                    }
                    for(let i = selectedRangeLow; i < selectedRangeHigh; i++){
                        mapItems(i);
                    }
                }
                return items
            }
        },
        methods: {
            handlePageSelected(selected) {
                if(this.selected === selected) return;
                this.selected = selected;
                this.clickHandler(this.selected + 1)
            },
            prevPage() {
                if(this.selected <= 0) return;
                this.selected--;
                this.clickHandler(this.selected + 1)
            },
            nextPage() {
                if(this.selected >= this.pageCount - 1) return;
                this.selected++;
                this.clickHandler(this.selected + 1)
            },
            firstPageSelected() {
                return this.selected === 0
            },
            lastPageSelected() {
                return (this.selected === this.pageCount - 1) || (this.pageCount === 0)
            },
            skipPage (ev) {
                 if(ev.keyCode === 13){
                     let currentPage = parseInt(ev.target.value);
                     if(currentPage){
                         if(currentPage > 0 && currentPage <= this.pageCount){
                             this.selected = currentPage-1;
                             this.clickHandler(this.selected+1);
                         } else {
                             console.warn("No current page");
                         }
                     }
                 }
            }
        }
    }
</script>