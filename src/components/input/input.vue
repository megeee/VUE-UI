<template>
  <div>
    <input type="text" v-model="setValue" :class="{success:mistake,forbid:disabled || readonly}" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :maxlength="maxlength" :minlength="minlength" :style="'width:'+width" @blur="setMatching">
    <span v-show="mistake">{{text}}</span>
    <span v-show="correct"><icon name="check"></icon></span> 
  </div>
</template>

 <script type="text/ecmascript-6">

export default {
  data() {
    return {
      setValue:this.default,
      mistake:false,
      correct:false
    }
  },
  created() {
   
  },
  methods: {
    setMatching:function(){
      if(!this.matching) return
        this.correct = this.matching.test(this.setValue)
        this.mistake = !this.matching.test(this.setValue)  && this.setValue
    }
  },
  props: {
      placeholder: { type: String, default: "请输入" },
      disabled: { type: Boolean },
      matching: {},
      readonly: { type: Boolean },
      width: { type: String },
      maxlength: { type: String },
      minlength: { type: String },
      text:{type:String},
      default:{type:String,default:""}
  },
  watch: {
    setValue(val) {
      this.$emit("chenge", val)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
input
    display inline-block
    border none
    border 1px solid #ddd
    outline none
    width 200px
    height 35px
    border-radius 5px
    padding-left 10px    
    &:focus
        border 1px solid skyblue
        box-shadow 0 0 10px 0 skyblue
.success
    border 1px solid red
    box-shadow 0 0 10px 0 red
.forbid
    cursor not-allowed    
span
    display inline-block
    margin-left 10px
    color red
    font-size 12px
    &:nth-of-type(2)
        color green
</style>