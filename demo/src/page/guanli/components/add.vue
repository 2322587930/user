<template>
  <div>
    <el-dialog :title="inf.title" :visible.sync="inf.show">
      <el-form :model="form">
        <el-form-item label="所属角色" :label-width="formLabelWidth">
          <el-select v-model="form.roleid" placeholder="请选择所属角色">
        
            <el-option v-for="item in lisss" :key="item.id" :label="item.rolename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
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
          
        <el-button @click='inf.show=false'>取 消</el-button>
        <el-button type="primary" @click="fn1()" v-if="inf.show5">确 定</el-button>
        <el-button type="primary" @click="gaigai()"  v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../uilt/alert";
import {addguan,ji,gianlixiu} from '../../../uilt/index'
export default {
  props: ["inf"],
  data() {
    return {
      form: {
        roleid:'',
        username:'',
        password:'',
        status:1
      },
      formLabelWidth: "80px",
    };
  },
  methods: {
    fn1() {
        console.log(this.form.roleid)
       addguan(this.form).then(res=>{
           if(res.data.code==200){
               success(res.data.msg)
               this.chang2()
           }else{
               err('失败')
           }
       })
      this.inf.show = false;
    },
    ...mapActions({
        chang1:"chang1",
        chang2:'chang2'
    }),
      fn9(){
        let id2=this.$store.state.id2
        ji({uid:id2}).then(res=>{
          console.log(res)
          this.form=res.data.list
        })
      },
      gaigai(){
        this.form.uid=this.$store.state.id2
        console.log(this.form)
        gianlixiu(this.form).then(res=>{
          console.log(res)
          if(res.data.code==200){
             success('修改成功')
             this.inf.show=false
             this.chang2()
          }else{
             err('失败')
          }
        })
      }
  },
  computed:{
      ...mapGetters({
       lisss:'jiaose',
       lise:'guanli'
      })
  },
  mounted(){
      this.chang1()
  }
};
</script>

<style>
</style>