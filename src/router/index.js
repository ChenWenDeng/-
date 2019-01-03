import Vue from 'vue'
import Router from 'vue-router'
// import Msite from '../page/msite/msite'
// import Details from '../page/details/details'
// import Login from '../page/login/login'
// import Order from '../page/order/order'
// import Register from '../page/register/register'
// import Shopping from '../page/shopping/shopping'
// import Payment from '../page/payment/payment'


const msite = () => import('../page/msite/msite')  //首页
const details = () => import('../page/details/details')  //详情页
const login = () => import('../page/login/login') //登录页
const order = () => import('../page/order/order') //订单页
const register = () => import('../page/register/register') //注册页
const shopping = () => import('../page/shopping/shopping') //购物车
const payment = () => import('../page/payment/payment') //支付
const personal = () => import('../page/personal/personal') //个人中心
const personalOrders = () => import('../page/personal/orders/orders')
const personalAccount = () => import('../page/personal/account/account')
const personalAddress = () => import('../page/personal/address/address')
const commodity = () => import('../page/commodity/commodity')  //商品页


const addresses = () => import('../page/order/addresses') //订单页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'msite',
      component: msite
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      children:[
        {
          path:'/personal/orders',
          component: personalOrders
        },
        {
          path:'/personal/account',
          component: personalAccount
        },
        {
          path:'/personal/address',
          component: personalAddress
        },
        {
          path: '',
          redirect: '/personal/orders'
        }
      ]
    },
		{
			path: '/commodity',
			name: 'commodity',
			component: commodity
		},
		{
			path: '/addresses',
			name: 'addresses',
			component: addresses
		},
  ]
})
