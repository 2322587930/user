<template>
  <div>
       <p class="p1"><el-button type="primary" @click='add()'>添加</el-button></p>
      <v-ad :isfalse='istrue' ref='chid'></v-ad>
      <v-list :isf='istrue' @gai='gais()'></v-list>
  </div>
</template>

<script>
import vAd from './components/add'
import vList from './components/list'
export default {
  components:{
    vAd,
     vList
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
    gais(){
      this.$refs.chid.fn8()
    }
  }
}
</script>

<style scoped>
.p1{
  margin-top: 15px;
}
</style>