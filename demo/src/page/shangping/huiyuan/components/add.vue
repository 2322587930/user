<template>
  <div class="add">
    <el-dialog :title="isfalse.txt" :visible.sync="isfalse.show3">
      <el-form :model="form">
        <el-form-item label="手机号" label-width="80px">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" label-width="80px">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="留空不修改" label-width="100px">
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
        <el-button type="primary"  @click="xiu()">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {guikeadd,huiyi,huixiu} from "../../../../uilt/index";
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../../uilt/alert";
export default {
  props: ["isfalse"],
  data() {
    return {
      show: true,
       form: {
        phone: "",
        nickname:'',
        status: 1,
        password:''
      },
    };
  },
  methods: {
       fn2(){
      let id=this.$store.state.id6
       huiyi({uid:id}).then(res=>{
       this.form=res.data.list
        this.isfalse.show4=false
        this.isfalse.txt='编辑分类'
      })
    },
    xiu(){
        this.form.id=this.$store.state.id6

        huixiu(this.form).then(res=>{
         if(res.data.code==200){
         success(res.data.msg)
         this.isfalse.show3=false
         this.chang9()
     }else{
         err(res.data.msg)
     }
     })
    },
    ...mapActions({
        chang9:'chang9'
    }),
  
  
     
         
    
    
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