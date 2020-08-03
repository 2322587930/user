<template>
  <div>
    <el-dialog :title="isfalse.txt" :visible.sync="isfalse.show3">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="80px">
          <el-input v-model="form.title" autocomplete="off"></el-input>
          
        </el-form-item>
       
        <el-form-item label="活动名称" label-width="80px">
          <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                :start-placeholder="form.begintime |cc"
                :end-placeholder="form.endtime|cc"
                @change="getSTime"
              ></el-date-picker>
            </div>
          </template>
        </el-form-item>
        <el-form-item label="一级分类" label-width="80px">
          <el-select v-model="form.first_cateid" placeholder="请选择"  @change='change'>
            <el-option
             v-for="item in fenlei"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" label-width="80px">
          <el-select v-model="form.second_cateid" placeholder="请选择" @change='changs'>
            <el-option
               v-for="item in second"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品" label-width="80px">
          <el-select v-model="form.goodsid" placeholder="请选择">
          
            <el-option
              v-for="item in three"
              :key="item.id"
              :label="item.id"
              :value="item.id"
            ></el-option>
          </el-select>
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
import {  miaoadd,miaoyi, miaoxiu } from "../../../../uilt/index";
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../../uilt/alert";
export default {
  props: ["isfalse"],
  data() {
    return {
      show: true,
      fristarr:[],
      second:[],
      three:[],
      form: {
        first_cateid: "",
        second_cateid:"",
        status: 1,
        goodsid:'',
        begintime:0,
        endtime:0,
      },
   
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        
    }

  },
  methods: {
    getSTime(a){
      this.form.begintime=new Date(a[0]).getTime()
      this.form.endtime=new Date(a[1]).getTime()
   
    },
     change(){
       let index1 = this.fenlei.findIndex((item) => {
        return item.id == this.form.first_cateid;
      });
  
      this.second=this.fenlei[index1].children
    
        this.form.second_cateid = "";

    },
    changs(){
        this.three = this.shangping.map((item) => {
        if(item.second_cateid == this.form.second_cateid){
          return item
        }
      });
      console.log(this.three)
      this.form.goodsid=''
      //  this.thee=this.shangping[index1]
      // console.log(this.three)
    },
    ...mapActions({
      chang4: "chang4",
      chang8:'chang8',
      chang11:'chang11'
    }),
    add() {
       miaoadd(this.form).then((res) => {
        if (res.data.code == 200) {
          success("添加成功");
          this.isfalse.show3 = false;
          this.chang11();
        } else {
          err(res.data.msg);
        }
      });
    },
    fn2() {
  
      let id = this.$store.state.id8;
  
      miaoyi({ id: id }).then((res) => {
        this.form = res.data.list;
        this.isfalse.show4 = false;
        this.isfalse.txt = "编辑分类";
      });
    },
    xiu() {
      this.form.id = this.$store.state.id8;
      console.log(this.form)
      miaoxiu(this.form).then((res) => {
        if (res.data.code == 200) {
          success(res.data.msg);
          this.chang11();
          this.isfalse.show3 = false;
        } else {
          err(res.data.msg);
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      fenlei: "fenlei",
      shangping:'shangping'
    }),
  },
  mounted(){
    this.chang4()
    this.chang8()
    this.chang11()
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