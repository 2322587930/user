<template>
  
  <div>
     <p class="p1"><el-button type="primary" @click='add()'>添加</el-button></p>
      <v-a :isfalse='istrue' ref="child"></v-a>
      <v-list :isb='istrue' @fen='fn'></v-list>
  </div>
</template>

<script>
import vA from './components/add'
import vList from './components/list'
export default {
 components:{
      vA,vList
    },
     data(){
    return {
      istrue:{
        show3:false,
        txt:'添加角色',
        show4:false
      }
    }
  },
  methods:{
     add(){
      this.istrue.show3=true,
      this.istrue.txt='添加角色',
      this.istrue.show4=true
    },
     fn(){
      this.$refs.child.fn2()
    },
  }
}
</script>

<style scoped>
.p1{
  margin-top: 10px;
}

</style>