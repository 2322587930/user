<template>
  <div>
    <p class="p1"><el-button type="primary" @click="fn">添加</el-button></p>
      <v-add :inf='inf' ref="childd"></v-add>
      <v-lis @kuai='hao'></v-lis>
  </div>
</template>

<script>
import vAdd from './components/add'
import vLis from './components/list'
export default {
  components:{
    vAdd,
    vLis
  },
  data(){
    return {
        inf:{
            show:false,
            title:"管理员添加"
        },
    }
  },
  methods:{
    fn(){
this.inf.show=true
this.inf.show5=true
    },
    hao(){
      this.$refs.childd.fn9()
     this.inf.title='管理员修改'
     this.inf.show5=false
      this.inf.show=true
    }
  }
}
</script>

<style scoped>
.p1{
  margin-top: 15px;
}
</style>