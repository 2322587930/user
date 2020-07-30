<template>
  <div>
    <el-dialog :title="isfalse.txt" :visible.sync="isfalse.show3" @opened='ch'>
      <el-form :model="form">
        <el-form-item label="一级分类" label-width="80px">
          <el-select v-model="form.first_cateid" @change="changes">
            <el-option label="请选择" disabled value></el-option>
            <el-option
              v-for="item in fenlei"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" label-width="80px">
          <el-select v-model="form.second_cateid">
            <el-option label="请选择" disabled value=''></el-option>
            <el-option
              v-for="item in secondarr"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" label-width="80px">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" label-width="80px">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" label-width="80px">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片上传" label-width="80px" >
          <el-upload class="avatar-uploader" action="#" :show-file-list="false" :on-change="fn">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品规格" label-width="80px">
          <el-select placeholder="请选择" v-model='form.specsid' @change='change'>
            <el-option label="请选择" disabled value></el-option>
            <el-option
              v-for="item in guike"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格属性" label-width="80px">
          <el-select placeholder="请选择" v-model="form.specsattr" multiple>
            <el-option label="请选择" disabled value></el-option>
            <el-option
              v-for="(item,index) in attrrs"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否新品" label-width="80px">
          <el-radio :label="1" v-model="form.isnew">是</el-radio>
          <el-radio :label="2" v-model="form.isnew">否</el-radio>
        </el-form-item>
        <el-form-item label="是否热卖" label-width="80px">
          <el-radio :label="1" v-model="form.ishot">是</el-radio>
          <el-radio :label="2" v-model="form.ishot">否</el-radio>
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
        <el-form-item label="商品描述" label-width="80px">
               <div id="editor">
        
    </div>
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
import { shangadd, shangyi, shangxiu } from "../../../../uilt/index";
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../../uilt/alert";
import E from 'wangeditor'
export default {
  props: ["isfalse"],
  data() {
    return {
      show: true,
      imageUrl: "",
      secondarr: [],
      attrrs:[],
      editor:null,
      form:{
        first_cateid: "",
        second_cateid: '',
        goodsname: "",
        price: 0,
        market_price:0,
        img: "",
       specsid:'',
       specsattr:[],
       isnew:1,
       ishot:1,
       status:1,
       description:''
      },
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
      chang5:'chang5',
      chang8:'chang8'
    }),
    add() {
      this.form.description=this.editor.txt.html()
      this.form.specsattr=JSON.stringify(this.form.specsattr)
      console.log(typeof  this.form.specsattr)
      shangadd(this.form).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          success("添加成功");
           this.chang8();
          this.isfalse.show3 = false;
         
        } else {
          err(res.data.msg);
        }
      });
    },
    fn2() {
      let id = this.$store.state.id5;
     shangyi({ id: id }).then((res) => {
        this.form = res.data.list;
        this.imageUrl = this.$imgpre + res.data.list.img;
       this.attrrs=JSON.parse(this.form.specsattr)
       this.form.specsattr=JSON.parse(this.form.specsattr)
       
        this.secondarr=JSON.parse(res.data.list.second_cateid)
        this.isfalse.show4 = false;
        this.isfalse.txt = "编辑分类";
      });
    },
    xiu() {
      this.form.id = this.$store.state.id5;
       this.form.description=this.editor.txt.html()
     shangxiu(this.form).then((res) => {
        if (res.data.code == 200) {
          success(res.data.msg);
           this.chang8();
          this.isfalse.show3 = false;
        } else {
          err(res.data.msg);
        }
      });
    },
    changes() {
      let index = this.fenlei.findIndex((item) => {
        return item.id == this.form.first_cateid;
      });
      this.secondarr = this.fenlei[index].children;
      this.form.second_cateid = "";
    },
    change(){
       let index1 = this.guike.findIndex((item) => {
        return item.id == this.form.specsid;
      });
       this.attrrs=this.guike[index1].attrs
      this.form.specsattr=[]
    },
    ch(){
        this.editor = new E('#editor')
        // 或者 var editor = new E( document.getElementById('editor') )
        this.editor.create()
       this.editor.txt.html(this.form.description)
    }
  },
  computed: {
    ...mapGetters({
      fenlei: "fenlei",
      guike:'guike',
      shangping:'shangping'
    }),
  },
  mounted() {
    if (this.fenlei.length == 0) {
      this.chang4();
    }
      this.chang5(true)
    
  },
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