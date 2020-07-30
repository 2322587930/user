<template>
  <div>
    <el-table :data="guanli" border style="width: 100%">
      <el-table-column prop="id" label="用户编号" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="rolename" label="所属角色" width="180"></el-table-column>
      <el-table-column prop="address" label="状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click='fn3(scope.row.uid)'>编辑</el-button>
  
          <v-bn  @del='dells(scope.row.uid)'></v-bn>
        </template>
      </el-table-column>
    </el-table>
  
    <el-pagination background layout="prev, pager, next" :total="title" :page-size='size'  @current-change=fn></el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {chuchu} from '../../../uilt/index'
export default {
  data() {
    return {
       currentPage:1
    };
  },
  methods: {
    ...mapActions({
      chang2: "chang2",
      chang3:'chang3'
    }),
    fn(a){
      this.$store.state.page=a
       this.chang2()
        
    },
    fn3(id){
      console.log(id)
      this.$store.state.id2=id
      this.$emit('kuai')
    },
    dells(uid){
      chuchu({uid:uid}).then(res=>{
         if(res.data.code==200){
                   success(res.data.msg)
                    this.chang2()
               }else{
                   err('失败')
               }
      })
    }
  },
  computed: {
    ...mapGetters({
      guanli: "guanli",
      title:'title',
      size:'size'
    }),
  },
  mounted() {
    this.chang2();
    this.chang3()
  },
};
</script>

<style>
</style>