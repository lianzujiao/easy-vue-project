import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Navigation'
import Home from '@/components/Home.vue'
import Heritage from '@/components/Heritage.vue'
import Festival from '@/components/Festival.vue'
import Newscontent from '@/components/Newscontent.vue'
import Xiuqiu from '@/components/Xiuqiu.vue'
import Song from '@/components/Song.vue'




Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path:'/',//根路由
      name:'navigation',
      component:Navigation,
      children:[
        {
          path:'/',
          name:'home',
          component:Home,
          
        },{
          path:'/home',
          component:Home,
          },{
          path:'/heritage',
          component:Heritage,
        },{
          path:'/festival',
          component:Festival,
        }
      ]
    },
    {
      path: '/newscontent/:aid',//动态路由匹配
      name: 'newscontent',
      component: Newscontent ,
    },
    {
      path:'/home/xiuqiu',
      name:'xiuqiu',
      component:Xiuqiu,
    },
    {
      path:'/home/song',
      name:'song',
      component:Song,
    }
    
  ]
})
