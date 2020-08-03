

//用户名正则
export const shou=(a)=>{
    var reg = /^\d+$|^\d+[.]?\d+$/
   return reg.test(a)
}
