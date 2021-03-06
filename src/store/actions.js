/**
 * 通过mutation间接更新status的多个方法的对象
 */

import {
// 	RECEIVE_ADDRESS,
// 	RECEIVE_CATEGORYS,
// 	RECEIVE_SHOPS,
//   RECEIVE_USER_INFO,
//   RESET_USER_INFO
} from './mutation-types'

import {
// 	reqAddress,
// 	reqFoodCategorys,
// 	reqShops,
//   reqUser,
//   reqLogout
} from '../API'

export default{
// 	//异步获取地址
// 	async getAddress({commit,state}){
// 		//发送异步ajax请求
// 		const geohash = state.latitude + ',' + state.longitude
// 		const result = await reqAddress(geohash)
// 		//根据结果提交mutation
// 		if(result.code===0){
// 			const address = result.data
// 			commit(RECEIVE_ADDRESS,{address})
// 		}
// 	},
// 	
// 	//异步获取食品分类列表
// 	async getFoodCategorys({commit}){
// 		//发送异步ajax请求
// 		const result = await reqFoodCategorys()
// 		//根据结果提交mutation
// 		if(result.code===0){
// 			const categorys = result.data
// 			commit(RECEIVE_CATEGORYS,{categorys})
// 		}
// 	},
// 	
// 	//异步获取商家列表
// 	async getShops({commit,state}){
// 		//发送异步ajax请求
// 		const {latitude, longitude} = state
// 		const result = await reqShops(latitude, longitude)
// 		//根据结果提交mutation
// 		if(result.code===0){
// 			const shops = result.data
// 			commit(RECEIVE_SHOPS,{shops})
// 		}
// 	},
// 
// 	//同步记录用户信息
//   recordUser({commit}, userInfo) {
//     commit(RECEIVE_USER_INFO, {userInfo})
//   },
// 
//   // 异步获取用户信息
//   async getUserInfo({commit}) {
//     const result = await reqUser()
//     if(result.code===0) {
//       commit(RECEIVE_USER_INFO, {userInfo: result.data})
//     }
//   },
// 
//   //异步登出
//   async logout({commit}){
//     const result = await reqLogout()
//     if(result.code===0) {
//       commit(RESET_USER_INFO)
//     }
//   }
	
}
