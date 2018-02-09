<template>
    <div>
        <vue-file-upload
            url="http://upload.lz/index3.php" 
            ref="vueFileUploader"
            v-bind:events = 'cbEvents'
            v-bind:request-options = "reqopts" 
            name = "file"
            v-on:onAdd = "onAddItem"
            style="margin:10px">
        </vue-file-upload>
        <div>
            <ul  class="fileList">
                <li v-for="file in files">

                    {{ file.name }}  ---{{ (file.size/1000).toFixed(2) }} KB<br>

                    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="'width: '+file.progress+'%'">
                        <span class="sr-only">40% Complete (success)</span>
                    </div>

                </li>
            </ul>
        </div>
        <button type='button' @click="uploadAll">上传</button>

    </div>
</template>

<script type="text/ecmascript-6">
import VueFileUpload from './upload';
export default{
    data(){
        return{
            files:[],

            //文件过滤器，只能上传图片
            filters:[
                {
                    name:"imageFilter",
                    fn(file){
                        var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                        return '|jpg|png|jpeg|csv|gif|zip|'.indexOf(type) !== -1;
                    }
                }
            ],
            //回调函数绑定
            cbEvents:{
                onCompleteUpload:(file,response,status,header)=>{
                    console.log(file,response,status,header);
                    console.log("finish upload;")
                },
                onAddFileSuccess:(file)=>{
                    console.log(file);
                    console.log("success add to queue");
                }
            },
            //xhr请求附带参数
            reqopts:{
                label:{
                     default:'选择文件1'
                },
                formData:{
                    tokens:'tttttttttttttt'
                },                
                // headers:{
                //     "token":"dgadfhtrs554423h3ert24h5"
                // },
                responseType:'json',
                withCredentials:false
            }
        }
    },
    methods:{
        //上传状态
        onStatus(file){
            if(file.isSuccess){
                return "上传成功";
            } else if (file.isError){
                return "上传失败";
            } else if (file.isUploading){
                return "正在上传…";
            } else  {
                return "待上传";
            }
        },
        onAddItem(files){
            console.log(files);
            this.files = files;
        },
        uploadItem(file){
            //单个文件上传
            file.upload();
        },
        uploadAll(){
            //上传所有文件
            this.$refs.vueFileUploader.uploadAll();
        },
        clearAll(){
            //清空所有文件
            this.$refs.vueFileUploader.clearAll();
        }
    },
    components:{
        VueFileUpload
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
button[type='button']
    width 100px
    height 40px
    margin 10px
.fileList
    margin 0 10px
</style>