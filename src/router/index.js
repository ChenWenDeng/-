import Vue from 'vue'
import Router from 'vue-router'

const msite 					= () => import('../page/msite/msite')  //首页
const login 					= () => import('../page/login/login') //登录页
const regSuc 					= () => import('../page/regSuc/regSuc') //注册成功页
const details 				= () => import('../page/details/details')  //详情页
const payment 				= () => import('../page/payment/payment') //支付
const register 				= () => import('../page/register/register') //注册页
const shopping 				= () => import('../page/shopping/shopping') //购物车
const personal 				= () => import('../page/personal/personal') //个人中心
const orderSuc 				= () => import('../page/orderSuc/orderSuc') //订单成功页
const commodity 			= () => import('../page/commodity/commodity')  //商品页
const addresses 			= () => import('../page/addresses/addresses') //地址页
const personalOrders 	= () => import('../page/personal/orders/orders') //个人中心  订单
const personalAccount = () => import('../page/personal/account/account') //个人中心  用户资料
const personalAddress = () => import('../page/personal/address/address') //个人中心  地址




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
		{
			path: '/regSuc',
			name: 'regSuc',
			component: regSuc
		},
		{
			path: '/orderSuc',
			name: 'orderSuc',
			component: orderSuc
		},
  ]
})
