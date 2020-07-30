import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use((res)=>{
    console.log(res)
    return res
})
const baseurl='/api'

export const shuju=()=>{
return  axios({
      url:baseurl+'/api/menulist',
      method:'get',
      params:{
        istree:true
      }
})
}
export const addshu=(paas)=>{
    return axios({
        url:baseurl+'/api/menuadd',
        method:'post',
        data:qs.stringify(paas)
    })
}
export const yidiao=(id)=>{
    return axios({
        url:baseurl+'/api/menuinfo',
        method:'get',
        params:id
    })
}
export const geng=(pas)=>{
    return axios({
        url:baseurl+'/api/menuedit',
        method:'post',
        data:pas
    })
}
export const shan=(pe)=>{
    return axios({
        url:baseurl+'/api/menudelete',
        method:'post',
        data:pe
    })
}
//角色数据
export const jiaose=()=>{
    return axios({
        url:baseurl+'/api/rolelist',
        method:'get',
        params:{}
    })
}
//角色数据添加
export const addjiao=(params)=>{
    return axios({
        url:baseurl+'/api/roleadd',
        method:'post',
        data:params
    })
}
//请求一条数据
export const yige=(params)=>{
    return axios({
        url:baseurl+'/api/roleinfo',
        method:'get',
        params:params
    })

}
//修改数据
export const xiugai=(params)=>{
    return axios({
        url:baseurl+'/api/roleedit',
        method:'post',
        data:params
    })
}
//删除数据
export const shanchu=(params)=>{
    return axios({
        url:baseurl+'/api/roledelete',
        method:'post',
        data:params
    })
}
//管理员管理
//添加
export const addguan=(params)=>{
    return axios({
        url:baseurl+'/api/useradd',
        method:'post',
        data:params
    })
}
//请求数据
export const guanli=(params)=>{
    return axios({
        url:baseurl+'/api/userlist',
        method:'get',
        params:params
    })
}
//总条数
export const zongshu=()=>{
    return axios({
        url:baseurl+'/api/usercount',
        method:'get',
        params:{}
    })
}
//管理员请求一条
export const ji=(params)=>{
    return axios({
        url:baseurl+'/api/userinfo',
        method:'get',
        params
    })
}
//管理员删除数据
export const chuchu=(params)=>{
    return axios({
        url:baseurl+'/api/userdelete',
        method:'post',
        data:params
    })
}
//管理员修改
export const gianlixiu=(params)=>{
    return axios({
        url:baseurl+'/api/useredit',
        method:'post',
        data: qs.stringify(params)
    })
}


//商品分类添加
export const fenleiadd=(params)=>{
    var formData = new FormData()
    for(let i in params){
        formData.append(i,params[i])
    }
    return axios({
        url:baseurl+'/api/cateadd',
        method:'post',
        data:formData
    })
}
//商品分类数据请求
export const fenleireq=()=>{
    return axios({
        url:baseurl+'/api/catelist',
        method:'get',
        params:{
            istree:true
        }
    })
}
//商品请求一条数据
export const fenleiyi=(params)=>{
    return axios({
        url:baseurl+'/api/cateinfo',
        method:'get',
        params:params
    })
}
//分类修改一条数据
export const fenleixiu=(params)=>{
    var formData = new FormData()
    for(let i in params){
        formData.append(i,params[i])
    }
    return axios({
        url:baseurl+'/api/cateedit',
        method:'post',
        data:formData
    })
}
//删除一条数据
export const fenleishan=(params)=>{
    return axios({
        url:baseurl+'/api/catedelete',
        method:'post',
        data:params
    })
}
//商品guige添加
export const guikeadd=(params)=>{
    return axios({
        url:baseurl+'/api/specsadd',
        method:'post',
        data:params
    })
}
//商品规格数据请求
export const guikereq=(params)=>{
    return axios({
        url:baseurl+'/api/specslist',
        method:'get',
        params:params
    })
}
//商品规格总数
export const guikezong=(params)=>{
    return axios({
        url:baseurl+'/api/specscount',
        method:'get',
        params:{

        }
    })
}
//商品请求一条数据
export const guikeyi=(params)=>{
    return axios({
        url:baseurl+'/api/specsinfo',
        method:'get',
        params:params
    })
}
//规格修改数据
export const guikexiu=(params)=>{
    return axios({
        url:baseurl+'/api/specsedit',
        method:'post',
        data:params
    })
}
//规格删除数据
export const guikeshan=(params)=>{
    return axios({
        url:baseurl+'/api/specsdelete',
        method:'post',
        data:params
    })
}
//商品管理
//商品管理添加
export const shangadd=(params)=>{
   let formData=new FormData()
   for(let i in params){
       formData.append(i,params[i])
   }
    return axios({
        url:baseurl+'/api/goodsadd',
        method:'post',
        data:formData
    })
}
//商品管理数据请求
export const shangpingreq=(params)=>{
    return axios({
        url:baseurl+'/api/goodslist',
        method:'get',
        params:params
    })
}
//商品总数请求
export const shangzong=()=>{
    return axios({
        url:baseurl+'/api/goodscount',
        method:'get',
        params:{
              
        }
    })
}
//商品编辑请求一条数据
export const shangyi=(params)=>{
    return axios({
        url:baseurl+'/api/goodsinfo',
        method:'get',
        params:params
    })
}
//商品修改数据
export const shangxiu=(params)=>{
    let formData=new FormData()
    for(let i in params){
        formData.append(i,params[i])
    }
    return axios({
        url:baseurl+'/api/goodsedit',
        method:'post',
        data:formData
    })
}
//商品删除
export const shangshan=(params)=>{
    return axios({
        url:baseurl+'/api/goodsdelete',
        method:'post',
        data:params
    })
}
//管理员登录
export const quanxian=(params)=>{
    return axios({
       
        url:baseurl+'/api/userlogin',
        method:'post',
        data:qs.stringify(params)
    })
}
//会员数据请求
export const huireq=()=>{
    return axios({
        url:baseurl+'/api/memberlist',
        method:'get',
        params:{}
    })
}
//会员请求一条数据
export const huiyi=(params)=>{
    return axios({
        url:baseurl+'/api/memberinfo',
        method:'get',
        params:params
    })
}
//会员编辑
export const huixiu=(params)=>{
  
    return axios({
        url:baseurl+'/api/memberedit',
        method:'post',
        data:params
    })
}
//轮播图添加
export const lunadd=(params)=>{
    let formData=new FormData()
    for(let i in params){
        formData.append(i,params[i])
    }
     return axios({
         url:baseurl+'/api/banneradd',
         method:'post',
         data:formData
     })
 }
 //轮播图请求数据
 export const lunreq=(params)=>{
    return axios({
        url:baseurl+'/api/bannerlist',
        method:'get',
        params:{

        }
    })
}
//轮播图请求一条数据
export const lunyi=(params)=>{
    return axios({
        url:baseurl+'/api/bannerinfo',
        method:'get',
        params:params
    })
}
//轮播图修改一条数据
export const lunxiu=(params)=>{
    let formData=new FormData()
    for(let i in params){
        formData.append(i,params[i])
    }
    return axios({
        url:baseurl+'/api/banneredit',
        method:'post',
        data:formData
    })
}
//轮播图删除
export const lunshan=(params)=>{
    return axios({
        url:baseurl+'/api/bannerdelete',
        method:'post',
        data:qs.stringify(params)
    })
}
//秒杀
//添加数据
export const miaoadd=(params)=>{
    
     return axios({
         url:baseurl+'/api/seckadd',
         method:'post',
         data:qs.stringify(params)
     })
 }
 //请求数据
 export const miaoreq=()=>{
    return axios({
        url:baseurl+'/api/secklist',
        method:'get',
        params:{

        }
    })
}
//请求一条数据
export const miaoyi=(params)=>{
    return axios({
        url:baseurl+'/api/seckinfo',
        method:'get',
        params:params
    })
}