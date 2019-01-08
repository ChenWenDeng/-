/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_USER_INFO, 	//改变用户名
  RECEIVE_CART_COUNT, //改变购物车数量
  INIT_CART_COUNT,    //改变购物车数量  点击加入购物车时调用
	RECEIVE_USER_ID,    //用户id
	

} from './mutation-types'

export default {
  //同步记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,userInfo)
	console.log('actions==='+userInfo)
  },
	
// 	recordUseres({commit},userInfo){
// 		commit(RECEIVE_USER_INFO,userInfo)
// 	console.log('actions==='+userInfo)
// 	},
	
	//改变购物车数量
	recordCartCount({commit},cartCount){
		commit(RECEIVE_CART_COUNT,cartCount)
	console.log('actions==='+cartCount)
	},
	
	//改变购物车数量  点击加入购物车时调用
	initCartCount({commit},cartCount){
		commit(INIT_CART_COUNT,cartCount)
	},
	
	//用户id
	recordUserId({commit},userId){
		commit(RECEIVE_USER_ID,userId)
		console.log('userIdaa======'+userId)
	},
	
	
}