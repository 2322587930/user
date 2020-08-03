<template>
  <div>
      <el-dialog :title="title" :visible.sync="chuxian.show">
  <el-form :model="form">
    <el-form-item label="菜单名称" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="上级菜单" :label-width="formLabelWidth">
      <el-select v-model="form.pid" placeholder="请选择">
        <el-option label="顶级菜单" :value="0"></el-option>
          <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="菜单类型" :label-width="formLabelWidth">
         <el-radio v-model="form.type" :label="1">目录</el-radio>
        <el-radio v-model="form.type" :label="2">菜单</el-radio>
     </el-form-item>
      <el-form-item label="菜单图标" :label-width="formLabelWidth">
          <el-select v-model="form.icon">
            <el-option v-for="item in icons" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单地址" :label-width="formLabelWidth" >
          <el-select v-model="form.url">
            <el-option v-for="item in urls" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
     <el-form-item label="状态" :label-width="formLabelWidth">
         
         <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
     </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click='chuxian.show= false'>取 消</el-button>
    <el-button type="primary" @click=fn v-if='show1'>确 定</el-button>
    <el-button type="primary" @click=fn5 v-else>修 改</el-button>

  </div>
</el-dialog>
  </div>
</template>

<script>
import {addshu,yidiao,geng,shuju} from '../../../uilt/index'
 import {mapGetters,mapActions} from "vuex"
export default {
    props:['chuxian'],
data(){
    return {
         form: {
          title: '',
          pid : 0,
          icon :'',
          type:1,
          url:'',
          status:1
        },
        icons:[
          "el-icon-setting",
        "el-icon-s-help",
        "el-icon-s-operation",
        "el-icon-s-grid",
        ],
        title:'添加菜单',
        show1:true,
        urls:[
            '/caidan',
            '/jiaose',
            '/guanli',
            '/fenlei',
            '/fenlei',
            '/kuige',
            '/shangping',
            '/huiyuan',
            '/lunbo',
            '/miaosha'
        ],
        formLabelWidth: '120px',
       
         radio: '1',
         value:true
      };
    
},
computed:{
  ...mapGetters({
    list:'shu'
  })
},
methods:{
  ...mapActions({
    chang:'chang'
  }),
   fn(){
       var url=this.form
       
       addshu(url).then(res=>{
             this.chang()
           this.chuxian.show=false
       })
   },
   fn4(){
       console.log(this.$store.state.id)
       var id=this.$store.state.id
       yidiao({id:id}).then(res=>{
           this.form=res.data.list
           this.title='修改菜单'
           this.show1=false
       })
   },
   fn5(){
      this.form.id=this.$store.state.id
       console.log(this.form)
      geng(this.form).then(res=>{
        //   var a=this.form.id-1
        //       console.log(a)
        //      this.$store.state.zong[a]=res.data.list
          this.chang()
          this.chuxian.show=false
      })
   }
},


}
</script>

<style>

</style>