import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
function fn(url){
  return store.state.users.menus_url.some(i=>i==url)
}
let router= new Router({
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
         name:'菜单列表',
         beforeEnter(to,from,next){
         fn('/caidan')?next():next('/home')
         }
       },
       {
         path:'jiaose',
         component:()=>import('../page/jiaose/jiao'),
         name:'角色列表',
         beforeEnter(to,from,next){
          fn('/jiaose')?next():next('/home')
          }
        
       },
       {
        path:'guanli',
        component:()=>import('../page/guanli/guanli'),
        name:'管理员列表',
        beforeEnter(to,from,next){
          fn('/guanli')?next():next('/home')
          }
        },
       {
        path:'fenlei',
        component:()=>import('../page/shangping/fenlei/fenlei'),
        beforeEnter(to,from,next){
          fn('/fenlei')?next():next('/home')
          }
        
       },
       {
        path:'kuige',
        component:()=>import('../page/shangping/kuige/kuige'),
        beforeEnter(to,from,next){
          fn('/kuige')?next():next('/home')
          }
        
       },
       {
        path:'shangping',
        component:()=>import('../page/shangping/shangping/shangping'),
        beforeEnter(to,from,next){
          fn('/shangping')?next():next('/home')
          }
        },
       {
        path:'huiyuan',
        component:()=>import('../page/shangping/huiyuan/huiyuan'),
        beforeEnter(to,from,next){
          fn('/huiyuan')?next():next('/home')
          }
        },
       
       {
        path:'lunbo',
        component:()=>import('../page/shangping/lunbo/lunbo'),
        beforeEnter(to,from,next){
          fn('/lunbo')?next():next('/home')
          }
        },
       
       {
        path:'miaosha',
        component:()=>import('../page/shangping/miaosha/miaosha'),
        beforeEnter(to,from,next){
          fn('/miaosha')?next():next('/home')
          }
        
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
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next()
    return 
  }
if(store.state.users){
  next()
   return
}else{
  next('/login')
}
})
export default router