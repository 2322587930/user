import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {shuju,jiaose,guanli,zongshu,fenleireq,guikereq,guikezong,shangpingreq,shangzong,huireq,lunreq,miaoreq} from '../uilt/index'
const state={
    shu:[],
    id:{},
    jiaose:[],
    id1:{},
    guanli:[],
    guike:[],
    shangping:[],
    //管理总数
    title:0,
    //规格总数
    title1:0,
    //几页
    title2:0,
    //商品总数
    
    size:2,
    page:1,
    page1:1,
    page2:1,
    id2:{},
    fenlei:[],
    huiyuan:[],
    lunbo:[],
    //分类编辑的ID
    id3:{},
    //规格编辑的ID
    id4:{},
    //商品管理编辑的ID
    id5:{},
    id6:{},
    id7:{},
    id8:{},
    miaosha:[],
    users:null
}
const mutations={
    chang(state,arr){
      state.shu=arr
    },
//角色
   chang1(state,arr){
       state.jiaose=arr
   },
   //管理
   chang2(state,arr){
       state.guanli=arr
   },
   //管理zongshu
   chang3(state,a){
       state.title=a
   },
   chang4(state,a){
       state.fenlei=a
   },
   chang5(state,a){
       a.forEach(i=>{
        i.attrs= JSON.parse(i.attrs)
       })
    state.guike=a
},
   chang6(state,a){
    state.title1=a
},
   chang7(state,a){
       console.log(a)
    state.title2=a
},
chang8(state,a){
    a.forEach(i=>{
        console.log(i.specsattr)
    //  i.specsattr= JSON.parse(i.specsattr)
    })
    state.shangping=a
},
changuse(state,a){
   state.users=a
},
chang9(state,a){
    state.huiyuan=a
},
chang10(state,a){
    state.lunbo=a
},
chang11(state,a){
    state.miaosha=a
},

}
const  actions={
    chang(context){
       shuju().then(res=>{
           
           context.commit('chang',res.data.list)
       })
    },
    //角色
    chang1(context){
        jiaose().then(res=>{
            console.log(res)
            context.commit('chang1',res.data.list)
        })
    },
    //管理
    chang2(context){
        let params={
            page:context.state.page,
            size:2
        }
        guanli(params).then(res=>{
            console.log(res)
            console.log(context.state.page)
            context.commit('chang2',res.data.list)
        })
    },
    //管理总数
    chang3(context){
        zongshu().then(res=>{
            context.commit('chang3',res.data.list[0].total)
        })
    },
    //分类数据请求
    chang4(context){
        fenleireq().then(res=>{
            console.log(res.data.list)
            context.commit('chang4',res.data.list)
        })
    },
    //商品规格数据请求
    chang5(context,bool){
        let params={}
        if(bool){
            params={}
            console.log(1)
        }else{
             params={
                page:context.state.page1,
                size:2
            }
        }
      
        guikereq(params).then(res=>{
            context.commit('chang5',res.data.list)
        })
    },
    //商品规格总数
    chang6(context){
        guikezong().then(res=>{
            context.commit('chang6',res.data.list[0].total)
        })
    },
    //商品管理总数
    chang7(context){
        shangzong().then(res=>{
            context.commit('chang7',res.data.list[0].total)
        })
    },
    //商品管理数据
    chang8(context,bool){
        console.log(1)
        let params={}
        if(bool){
            params={}
            console.log(1)
        }else{
             params={
                page:context.state.page2,
                size:2
            }
        }
        shangpingreq(params).then(res=>{
        
            context.commit('chang8',res.data.list)
        })
    },
      changuse(context,params){
        context.commit('changuse',params)
      },
      chang9(context){
        huireq().then(res=>{
            console.log(res)
            context.commit('chang9',res.data.list)
        })
      
      },
      chang10(context){
        lunreq().then(res=>{
            console.log(res)
            context.commit('chang10',res.data.list)
        })
      
      },
      chang11(context){
        miaoreq().then(res=>{
            console.log(res)
            context.commit('chang11',res.data.list)
        })
      
      },
}

const  getters={
    shu(state){
        return  state.shu
    },
    //角色
    jiaose(state){
        return state.jiaose
    },
    //管理
    guanli(state){
        return state.guanli
    },
    //管理总数
    title(state){
        return state.title
    },
    //几页
    size(state){
        return state.size
    },
    fenlei(state){
        return state.fenlei
    },
    //规格总数
    title1(state){
        return state.title1
    },
    //规格数据
    guike(state){
        return state.guike
    },
    title2(state){
        console.log(state.title2)
        return state.title2
    },
    shangping(state){
        return state.shangping
    },
    //登录者的信息
    users(state){
        return state.users

    },
    //会员的信息
    huiyuan(state){
        return state.huiyuan
    },
    //轮播图的信息
    lunbo(state){
        return state.lunbo
    },
    //秒杀的信息
    miaosha(state){
        return state.miaosha
    },
}
const store= new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    namespaced:true
})
export default store