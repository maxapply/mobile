import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/index.vue'), // 布局组件
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('../views/home/index.vue') }, // 首页
      {
        path: '/question',
        component: () => import('../views/question/index.vue') // 问答
      },
      {
        path: '/video',
        component: () => import('../views/video/index.vue') // 视频
      },
      {
        path: '/user',
        component: () => import('../views/user/index.vue') // 个人
      }
    ]
  },
  {
    path: '/user/profile',
    component: () => import('../views/user/profile.vue') // 编辑资料
  },
  {
    path: '/user/chat',
    component: () => import('../views/user/chat.vue') // 小智同学
  },
  {
    path: '/login',
    component: () => import('../views/user/login.vue') // 登录
  },
  {
    path: '/search',
    component: () => import('../views/search/index.vue') // 搜索中心
  },
  {
    path: '/search/result',
    component: () => import('../views/search/result.vue') // 搜索结果
  },
  {
    path: '/article',
    component: () => import('../views/article/index.vue') // 文章详情
  }
]

const router = new VueRouter({
  routes
})

export default router
