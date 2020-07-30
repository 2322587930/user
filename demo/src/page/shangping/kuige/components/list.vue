<template>
  <div>
    <el-table
      :data="guike"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="规格编号" width="180"></el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"></el-table-column>
      <el-table-column prop="attrs" label="规格属性" width="180">
     
       <template slot-scope="scope">
       <el-tag v-for="(item,index) in scope.row.attrs " :key='index'>{{item}}</el-tag>
       </template>
      </el-table-column>

      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="fn2(scope.row.id)">编辑</el-button>
          <v-bn @del="dell(scope.row.id)"></v-bn>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="title1"
      :page-size="size"
      @current-change="fn"
    ></el-pagination>
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
        chang5:'chang5',
      chang6: "chang6",
    }),
    fn(a){
        console.log(a)
        this.$store.state.page1=a
        this.chang5()
    },
     fn2(a){
           this.$store.state.id4=a
           this.isb.show3=true
           this.$emit('fen')
        },
     dell(a){
            console.log(a)
           guikeshan({id:a}).then(res=>{
               if(res.data.code==200){
                   success(res.data.msg)
                   this.chang5()
               }else{
                   err(res.data.msg)
               }
           })
        }
  },
  computed: {
    ...mapGetters({
        title1:'title1',
        size:'size',
        guike:'guike'
    })
  },
  mounted() {
      this.chang5()
      this.chang6()
  },
};
</script>

<style>
</style>