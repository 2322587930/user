<template>
  <div>
    <el-table
      :data="lunbo"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="title" label="轮播图标题" width="180"></el-table-column>
      <el-table-column prop="img" label="图片" width="180">
           <template slot-scope="scope">
              <img :src="$imgpre+scope.row.img" alt="">
          </template>
      </el-table-column>
     
      <el-table-column  label="状态" width="180">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
          </template>
      </el-table-column>
      <el-table-column  label="操作">
           <template slot-scope="scope">
              <el-button type="primary" @click='fn2(scope.row.id)'>编辑</el-button>
              <v-bn @del='dell(scope.row.id)'></v-bn>
          </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import {success,err} from '../../../../uilt/alert'
import {lunshan} from '../../../../uilt/index'
export default {
    props:['isb'],
    methods:{
        ...mapActions({
           chang10:'chang10'
        }),
        fn2(a){
           this.$store.state.id7=a
           this.isb.show3=true
           this.$emit('fen')
        },
        dell(a){
            if(this.lunbo.length==1){
                err('轮播图至少要有一条数据')
                return
            }
              lunshan({id:a}).then(res=>{
                
               if(res.data.code==200){
                   success(res.data.msg)
                   this.chang10()
               }else{
                   err(res.data.msg)
               }
           })
        }
        
    },
    computed:{
        ...mapGetters({
             lunbo:'lunbo'
        })
    },
    mounted(){
        this.chang10()
    }
}
</script>

<style scoped>
img{
    width: 80px;
    height: 80px;
}

</style>