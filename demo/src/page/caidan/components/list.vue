<template>
  <div>
    <el-table
      :data="shu"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="菜单编号" width="180"></el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="icon" label="菜单图标" width="180"></el-table-column>
      <el-table-column prop="url" label="菜单地址" width="180"></el-table-column>
      <el-table-column  label="状态" width="180">
          <template slot-scope="scope">
               <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
          </template>
      </el-table-column>
      <el-table-column  label="操作">
           <template slot-scope="scope">
              <el-button type="primary" @click='fn2(scope.row.id)'>编辑</el-button>
             <v-bn  @del='dells(scope.row.id)'></v-bn>
          </template>
      </el-table-column>
    </el-table>
    <p></p>
  </div>
</template>

<script>
 import {shuju,yidiao,shan} from '../../../uilt/index'
 import { success, err } from "../../../uilt/alert";
 import {mapGetters,mapActions} from "vuex"
export default {
   mounted(){
      this.reqs()
   },
  data() {
    return {
      tableData: [
        
      ],
    };
  },
  computed:{
     ...mapGetters({
      shu: "shu",
    }),
  },
  methods:{
     ...mapActions({
                reqs:'chang',
                
           }),
    fn2(a){
      this.$store.state.id=a
      this.$emit('zhuan')
    },
     dells(id){
     shan({id:id}).then(res=>{
         if(res.data.code==200){
                   success(res.data.msg)
                    this.reqs()
               }else{
                   err('失败')
               }
      })
    }
  }
}
</script>

<style>
</style>