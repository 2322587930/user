<template>
  <el-table :data="lis" border style="width: 100%">
    <el-table-column prop="id" label="角色编号" width="180"></el-table-column>
    <el-table-column prop="rolename" label="角色名称" width="180"></el-table-column>
    <el-table-column prop="status" label="状态">
         <template slot-scope="scope">
              <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
          </template>
    </el-table-column>
    <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
              <el-button type="primary" @click='bian(scope.row.id)'>编辑</el-button>
              <v-bn @del='dell(scope.row.id)'></v-bn>
              
          </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import {success,err} from '../../../uilt/alert'
import {shanchu} from '../../../uilt/index'

export default {
    props:['isf'],
    methods:{
        ...mapActions({
            chang1:'chang1'
        }),
        bian(a){
            console.log(a)
            this.$store.state.id1=a
            console.log(this.$store.state.id1)
            this.$emit('gai')
            this.isf.show3=true
            this.isf.txt='编辑角色'
            this.isf.show4=false
        },
        dell(id){
           shanchu({id:id}).then(res=>{
               console.log(res)
               if(res.data.code==200){
                   success(res.data.msg)
                    this.chang1()
               }else{
                   err('失败')
               }
              
           })
        }
    },
    computed:{
        ...mapGetters({
       lis:'jiaose'
        })
    },
  data() {
    return {
      
    };
  },
  mounted(){
      this.chang1()
  }
};
</script>

<style>
</style>