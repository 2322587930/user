<template>
  <div>
    <el-table
      :data="shangping"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="商品编号" ></el-table-column>
      <el-table-column prop="goodsname" label="商品名称" ></el-table-column>
      <el-table-column prop="price" label="商品价格" ></el-table-column>
      <el-table-column prop="market_price" label="市场价格" ></el-table-column>
      <el-table-column prop="img" label="图片" >
           <template slot-scope="scope">
              <img :src="$imgpre+scope.row.img" alt="">
          </template>
      </el-table-column>
      <el-table-column prop="isnew" label="是否新品" >
          <template slot-scope="scope">
              <el-button v-if="scope.row.isnew==1" type="primary">是</el-button>
              <el-button v-else type="danger">否</el-button>
          </template>
          
      </el-table-column>
      <el-table-column prop="id" label="是否热卖">
          <template slot-scope="scope">
             <el-button v-if="scope.row.ishot==1" type="primary">是</el-button>
              <el-button v-else type="danger">否</el-button>
          </template>
          
      </el-table-column>
      <el-table-column  label="状态" >
          <template slot-scope="scope">
            <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
          </template>
      </el-table-column>
      <el-table-column  label="操作" width="200px">
           <template slot-scope="scope">
              <el-button type="primary" @click='fn2(scope.row.id)'>编辑</el-button>
              <v-bn @del='dell(scope.row.id)'></v-bn>
          </template>
      </el-table-column>
    </el-table>
     <el-pagination
      background
      layout="prev, pager, next"
      :total="title2"
      :page-size="size"
      @current-change="fn"
    ></el-pagination>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import {success,err} from '../../../../uilt/alert'
import {shangshan} from '../../../../uilt/index'
export default {
    props:['isb'],
    methods:{
        ...mapActions({
           chang7:'chang7',
           chang8:'chang8'
        }),
        fn2(a){

           this.$store.state.id5=a
           this.isb.show3=true
           this.$emit('fen')
        },
        fn(a){
        console.log(a)
        this.$store.state.page2=a
        this.chang8()
        },
        dell(a){
            console.log(a)
          shangshan({id:a}).then(res=>{
               if(res.data.code==200){
                   success(res.data.msg)
                   this.chang8()
               }else{
                   err(res.data.msg)
               }
           })
        }
        
    },
    computed:{
        ...mapGetters({
             shangping:'shangping',
             title2:'title2',
             size:'size'
        })
    },
    mounted(){
        this.chang7()
        this.chang8()
    }
}
</script>

<style scoped>
img{
    width: 80px;
    height: 80px;
}

</style>