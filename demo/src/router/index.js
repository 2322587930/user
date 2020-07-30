import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/login',
     component:()=>import('../page/login/login')
   },
   {
     path:'/',
     component:()=>import('../page/index/index'),
     children:[
       {
         path:'caidan',
         component:()=>import('../page/caidan/caidan'),
         name:'菜单列表'
       },
       {
         path:'jiaose',
         component:()=>import('../page/jiaose/jiao'),
         name:'角色列表'
       },
       {
        path:'guanli',
        component:()=>import('../page/guanli/guanli'),
        name:'管理员列表'
       },
       {
        path:'fenlei',
        component:()=>import('../page/shangping/fenlei/fenlei')
       },
       {
        path:'kuige',
        component:()=>import('../page/shangping/kuige/kuige')
       },
       {
        path:'shangping',
        component:()=>import('../page/shangping/shangping/shangping')
       },
       {
        path:'huiyuan',
        component:()=>import('../page/shangping/huiyuan/huiyuan')
       },
       {
        path:'lunbo',
        component:()=>import('../page/shangping/lunbo/lunbo')
       },
       {
        path:'miaosha',
        component:()=>import('../page/shangping/miaosha/miaosha')
       },
       {
        path:'home',
        component:()=>import('../page/home/home')
       },
       {
        path:"",
        redirect:"home"
      }
     ]
   },
   {
     path:'*',
     redirect:'/login'
   }
  ]
})
