<template>
  <div>
     <p class="p1"><el-button type="primary" @click=fn>添加</el-button></p>
      <a-dd :chuxian='chuxian' ref='chid'></a-dd>
      <a-list @zhuan='fn3' @tai='fn7'></a-list>
    
  </div>
</template>

<script>
import aDd from './components/add'
import aList from './components/list'
import {shan} from '../../uilt/index'
import {mapGetters,mapActions} from "vuex"
export default {
  components:{
    aDd,aList
  },
  data(){
    return {
     chuxian:{
       show:false 
     }
    }
  },
  methods:{
    ...mapActions({
      chang:'chang'
    }),
    fn(){
      this.chuxian.show=true
    },
    fn3(){
      this.$refs.chid.fn4()
      this.chuxian.show=true

    },
    fn7(){
      var c=this.$store.state.id
      shan({id:c}).then(res=>{
       this.chang()
      })
    }
   
  },
 
  mounted(){
      
  }
}
</script>

<style scoped>
.p1{
    margin-top: 10px;
}
</style>