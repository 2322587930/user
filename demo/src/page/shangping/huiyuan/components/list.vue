<template>
  <div>
    <el-table
      :data="huiyuan"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="用户编号" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
     
    
      </el-table-column>

      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="fn2(scope.row.uid)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../../uilt/alert";
import { guikezong,guikeshan } from "../../../../uilt/index";
export default {
  props: ["isb"],
  data(){
      return {
          
      }

  },
  methods: {
    ...mapActions({
       
      chang9:'chang9'
    }),
    fn(a){
        console.log(a)
        this.$store.state.page1=a
        this.chang5()
    },
     fn2(a){
           this.$store.state.id6=a
        
           this.isb.show3=true
           this.$emit('fen')
        },
    
  },
  computed: {
    ...mapGetters({
       
        huiyuan:'huiyuan'
    })
  },
  mounted() {
      this.chang9()
      
  },
};
</script>

<style>
</style>