/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_USER_INFO, 	//改变用户名
	RECEIVE_CART_COUNT, //改变购物车数量
	INIT_CART_COUNT,    //改变购物车数量  点击加入购物车时调用
	RECEIVE_USER_ID,    //用户id

} from './mutation-types'

export default {
  
	//改变用户名信息
  [RECEIVE_USER_INFO] (state, userInfo) {
  	state.userInfo = userInfo
	console.log('mutations==='+userInfo)
  },
	
	//改变购物车数量 页面刷新时调用
	[RECEIVE_CART_COUNT] (state, cartCount) {
		state.cartCount += cartCount
		console.log('cartCount==='+cartCount)
	},
	
	//改变购物车数量  点击加入购物车时调用
	[INIT_CART_COUNT] (state, cartCount) {
		state.cartCount = cartCount
	},
	
	//用户id
	[RECEIVE_USER_ID] (state, userId) {
		state.userId = userId
		console.log('userIdmm======'+userId)
	},
}