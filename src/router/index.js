import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const MyLayer = () => import("@/components/Layer") // 提供给有children的路由组件（并且没有要展示视图的容器展示）。特别说明：如果没有，则该路由组件的子路由

export default new Router({
  base:'retention',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/NewIndex',
      component: MyLayer
    } ,
    {
      path: '/frontdesk',
      name:'前台',
      redirect:'/frontdesk/NewIndex',
      component: MyLayer,
      children:[ // 使用 children 属性，实现子路由，同时，子路由的 path 前面，不要带 / ，否则永远以根路径开始请求，这样不方便我们用户去理解URL地址
        {
          path: 'NewIndex',//默认子组件首页
          name:'疫情上报',
          component: () => import("@/views/frontdesk/NewIndex.vue")
        },
        {
          path: '/Success',
          name:'提交成功',
          component: () => import("@/views/frontdesk/Success.vue")
        }
        ]
    },
    {path:'*',redirect:'/frontdesk/NewIndex'},//如果要跳转的路由不存在，则跳转到404页面
  ]
})
