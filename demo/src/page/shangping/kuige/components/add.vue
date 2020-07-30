<template>
  <div class="add">
    <el-dialog :title="isfalse.txt" :visible.sync="isfalse.show3">
      <el-form :model="form">
        <el-form-item label="规格名称" label-width="80px">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格属性" label-width="80px" v-for="(item,index) in attrarr" :key="index">
          <el-input v-model="item.value" autocomplete="off"></el-input>
          <el-button type="primary" v-if="index==0" @click="addattr">新增规格属性</el-button>
          <el-button type="danger" v-else @click="deltattr(index)">删除</el-button>
        </el-form-item>

        <el-form-item label="状态" label-width="80px">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isfalse.show3= false">取 消</el-button>
        <el-button type="primary" @click="add()" v-if="isfalse.show4">添加</el-button>
        <el-button type="primary" v-else @click="xiu()">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {guikeadd,guikeyi,guikexiu} from "../../../../uilt/index";
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../../uilt/alert";
export default {
  props: ["isfalse"],
  data() {
    return {
      show: true,
      form: {
        specsname: "",
        status: 1,
        attrs:''
      },
      attrarr: [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
      ],
    };
  },
  methods: {
       fn2(){
      let id=this.$store.state.id4
     
      guikeyi({id:id}).then(res=>{
        
    let b=JSON.parse(res.data.list[0].attrs)
        this.attrarr.map((item,index)=>{
          this.attrarr[index].value=b[index]
      })
        this.form=res.data.list[0]
        this.isfalse.show4=false
        this.isfalse.txt='编辑分类'
      })
    },
    xiu(){
        this.form.id=this.$store.state.id4
         if(this.attrarr.some(item=>item.value=='')){
            err('所选择的属性不能为空')
            return
        }
       var c= this.attrarr.map(item=>{
         return item.value
     })
     this.form.attrs=JSON.stringify(c)
     guikexiu(this.form).then(res=>{
         if(res.data.code==200){
         success(res.data.msg)
         this.isfalse.show3=false
         this.chang5()
     }else{
         err(res.data.msg)
     }
     })

    },
    ...mapActions({
        chang5:'chang5'
    }),
    addattr() {
      this.attrarr.push({
        value: "",
      });
    },
    deltattr(a){
      this.attrarr.splice(a,1)
    },
    add(){
        if(this.attrarr.some(item=>item.value=='')){
            err('所选择的属性不能为空')
            return
        }
   var b= this.attrarr.map(item=>{
         return item.value
     })
     this.form.attrs=JSON.stringify(b)
    
     guikeadd(this.form).then(res=>{
     if(res.data.code==200){
         success(res.data.msg)
          this.isfalse.show3=false
         this.chang5()
     }else{
         err(res.data.msg)
     }
         
     })
    }
  }
};
</script>
<style scoped lang='stylus'>
.add >>> .el-form-item__content {
  display: flex;
}

.add >>> .el-input {
  flex: 1;
}

.add >>> .el-button {
  width: auto;
}
</style>