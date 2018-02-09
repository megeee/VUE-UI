<template>
 
      <button class="buttons" type="button" :disabled="disabled || loading "
      :class="nowStatus()"
      >
        {{ladel}}
      <icon name="refresh" spin v-show="loading"></icon>
      </button>
</template>

 <script type="text/ecmascript-6">

export default {
  data() {
    return {
      nowStatus:function(){
        switch(this.type){
          case "login" :
              return "btn-type-login";
              break;
          case "submit" :
              return "btn-type-submit";
              break;
          case "remove" :
              return "btn-type-remove";
              break;
          case "alter" :
              return "btn-type-alter";
              break;        
        }
      }
    }
  },
  created() {

  },
  methods: {


  },
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean },
    ladel: { type: String, default: "确定" },
    type:{type:String,default:""}
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.buttons 
      border:none
      padding 5px 40px
      border-radius: 5px
      text-align: center
      line-height: 30px
      outline: none
      position: relative
      color:#fff
      cursor:pointer
      &:hover
        background rgba(0,0,0,.5) 
      .fa-icon
          position:absolute
          right:20px
          top:12px
.btn-type-login
    background -webkit-linear-gradient(top,#5cb85c 0,#419641 100%)
.btn-type-submit
    background -webkit-linear-gradient(top,#5bc0de 0,#2aabd2 100%)
.btn-type-remove
    background -webkit-linear-gradient(top,#fff 0,#e0e0e0 100%)
.btn-type-alter
    background -webkit-linear-gradient(top,#f0ad4e 0,#eb9316 100%)

</style>