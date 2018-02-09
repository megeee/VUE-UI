/*
 * @路由配置
 * @author: Jeff Guo
 */
import Vue from 'vue'
import Router from 'vue-router'
import nopage from '../pages/404'
import home from '../pages/home'
import main from '@/components/main'
import upload from '@/components/upload/upload_demo'
import select from '@/components/select/select_demo'
import pagination from '@/components/pagination/pagination_demo'
import progress from '@/components/progress/progress_demo'
import datepicker from '@/components/datepicker/datepicker_demo'
import timebucket from '@/components/timebucket/timebucket_demo'
import dialog from '@/components/dialog/dialog_demo'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path:'/',
            name:'main',
            component: main,
            children:[
                {
                    path:'/upload',
                    name:'Upload',
                    component:upload,
                    meta:{
                        title:"Upload 上传"
                    }
                },
                {
                    path:'/select',
                    name:'Select',
                    component: select,
                    meta: {
                        title:"Select 选择器"
                    }
                },
                {
                    path:'/pagination',
                    name:'Pagination',
                    component: pagination,
                    meta: {
                        title:"Pagination 分页组件"
                    }
                },
                {
                    path:'/progress',
                    name:'Progress',
                    component: progress,
                    meta: {
                        title:"Progress 进度条"
                    }
                },
                {
                    path:'/datepicker',
                    name:'Datepicker',
                    component: datepicker,
                    meta: {
                        title:"DatePicker 日期选择器"
                    }
                },
                {
                    path:'/timebucket',
                    name:'TimeBucket',
                    component: timebucket,
                    meta: {
                        title:"TimeBucket 时间段选择组件"
                    }
                },
                {
                    path:'/dialog',
                    name:'Dialog',
                    component: dialog,
                    meta: {
                        title:"Dialog 对话框组件"
                    }
                }

            ]
        }
    ]
});

export default router