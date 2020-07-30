<template>
  <div>
    <el-dialog :title="isfalse.txt" :visible.sync="isfalse.show3">
      <el-form :model="form">
        <el-form-item label="上级分类" label-width="80px">
          <el-select v-model="form.pid" placeholder="请选择所属角色">
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option v-for="item in fenlei" :key="item.id" :label="item.catename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" label-width="80px">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片上传" label-width="80px" v-if='form.pid'>
          <el-upload class="avatar-uploader" action="#" :show-file-list="false" :on-change="fn">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import { fenleiadd, fenleiyi,fenleixiu} from "../../../../uilt/index";
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../../uilt/alert";
export default {
  props: ["isfalse"],
  data() {
    return {
      show: true,
      form: {
        pid: 0,
        catename: "",
        img: null,
        status: 1,
      },
      imageUrl: "",
    };
  },
  methods: {
    fn(a) {
      console.log(a);
      if (a.size > 2 * 1024 * 1024) {
        err("文件不能超过2M");
        return;
      }
      var arr = [".jpg", ".png", ".gif", ".jpeg"];
      var file = a.raw;
      var b = a.name.slice(a.name.lastIndexOf("."));
      if (!arr.some((item) => item === b)) {
        err("文件必须是图片");
        return;
      }
      this.imageUrl = URL.createObjectURL(a.raw);
      this.form.img = file;
    },
    ...mapActions({
      chang4: "chang4",
    }),
    add() {
      fenleiadd(this.form).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          success("添加成功");
          this.isfalse.show3=false
          this.chang4();
        } else {
          err(res.data.msg);
        }
      });
    },
    fn2(){
      let id=this.$store.state.id3
      fenleiyi({id:id}).then(res=>{
        this.form=res.data.list
        this.imageUrl=this.$imgpre+res.data.list.img
        this.isfalse.show4=false
        this.isfalse.txt='编辑分类'
      })
    },
    xiu(){
      this.form.id=this.$store.state.id3
      fenleixiu(this.form).then(res=>{
        if(res.data.code==200){
          success(res.data.msg)
           this.chang4()
        this.isfalse.show3=false
        }else{
          err(res.data.msg)
        }
       
      })
    }
  },
  computed:{
   ...mapGetters({
      fenlei:'fenlei'
   })
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>