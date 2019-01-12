<template>
  <div class="nav-container">
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo nav-box"
			mode="horizontal"
			@select="handleSelect"
		>     
					<!-- <div class="d1"> -->
					<el-menu-item index="99">
						<router-link to="/" tag="h1">
							Eend商城
						</router-link>
					</el-menu-item>
					<el-menu-item index="1">
						<router-link to="/login" tag="span" v-if="!userInfo">
							登录
						</router-link>
						<span v-if="userInfo">{{userInfo}}</span>
						<!-- <router-link @click="logout" to="/personal" tag="span" v-if="userName">
							登出
						</router-link> -->
						<span @click="logout" v-if="userInfo">
							登出
						</span>
					</el-menu-item>
					<el-menu-item index="2">
						<router-link to="/Register" tag="span">
							注册
						</router-link>
					</el-menu-item>
					<!-- <el-menu-item index="3">我的订单</el-menu-item> -->
					<el-menu-item index="3">
						<router-link to="/shopping" tag="span">
							我的购物车
							<span class="cartNum" v-if="cartCount>0"><i>{{cartCount}}</i></span>
						</router-link>
					</el-menu-item>
					<el-submenu index="4">
					<template slot="title">
						<router-link to="/personal" tag="span">
							个人中心
						</router-link>
					</template>
					<el-menu-item index="4-1">用户名</el-menu-item>
					<el-menu-item index="4-2">积分商城</el-menu-item>
					<el-menu-item index="4-3">我的会员</el-menu-item>
					</el-submenu>
					<el-menu-item index="5" disabled>在线客服</el-menu-item>
		</el-menu>
		<div class="search-container">
		<input type="text" class="input-container" placeholder="请输入搜索内容" v-model="keyWord" clearable @keyup.enter="getSerch">
		<el-button class="search-btn" type="success" @click="getSerch">搜索</el-button>
		</div>
   </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name: "headerTop",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        keyWord: '',
				productAarr:[],
				userId:0,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
			
			//点击搜索，查询关键字
			getSerch(){
				//如果搜索框没有关键字，弹出提示框
				if(!this.keyWord){
					this.$message({
						message: '请输入搜索关键字',
						type: 'warning'
					});
				}else if((this.keyWord == '全部商品')){  //如果搜索框输入全部，把关键字 '全部' 传到 commodity 页面
					console.log(this.keyWord)
					const {href} = this.$router.resolve({
						path: '/commodity',
						query: {
							keyWord:this.keyWord
						}
					})
					window.open(href, '_blank')
				}else{  											//如果搜索框输入关键字，把关键字传到 commodity 页面
					console.log(this.keyWord)
					const {href} = this.$router.resolve({
						path: '/commodity',
						query: {
							keyWord:this.keyWord
						}
					})
					window.open(href, '_blank')
				}
			},
			//用户登出功能
			logout(){
				axios.post("/users/logout").then((response) =>{
					let res = response.data;
					if(res.status == "0"){					
						//修改用户名状态 修改为空 退出功能
						this.$store.dispatch('recordUser','')
						
						//修改用户id状态 修改为0 退出功能
						this.$store.dispatch('recordUserId',0)
						
						//如果用户退出登录，修改购物车数量为0
						this.$store.dispatch('initCartCount',0)
						
						//跳转到login登录页
						this.$router.push({path:'/'});
					}else{
						console.log('失败'+res.msg)
					}
				})
			},
			//更新用户名的状态， 得到用户名
			checkLogin(){
				axios.get("/users/checkLogin").then((response) =>{
					let res = response.data;
					if(res.status == "0"){
						this.userName = res.result.userName;
						this.userId = res.result.userId;
						console.log('this.userName===' +this.userName)

						//修改用户名状态 拿到用户名 登录功能
						this.$store.dispatch('recordUser',this.userName)
						
						this.$store.dispatch('recordUserId',this.userId)
					}
				})
			},
			//增加购物车数量
			getCartCount(){
				axios.get("/users/getCartCount").then((response) =>{
					let res = response.data;
					if(res.status == "0"){
						//增加购物车数量状态
						this.$store.dispatch('initCartCount',res.result)
					}
				})
			}
    },
		mounted(){
				this.checkLogin();
				this.getCartCount();
		},
		computed:{
			...mapState(['userInfo','cartCount'])
		}
};
</script>


<style lang="scss" scoped>
.nav-container{
	width: 100%!important;
	.nav-box{
			position: relative;
			height: 200px;
			background: #000;
			padding: 30px;
			.cartNum{
				position: relative;
				display: inline-block;
				border-radius: 50%;
				width: 25px;
				height: 25px;
				margin-bottom: 3px;
				background: red;
				i{
					position: absolute;
					top: -1px;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					font-size: 14px;
				}
			}
			.input-container{
					width: 400px;
					margin: 30px auto;
			}
	}	
	.search-container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 120px;
		margin-top: 80px;
		.input-container{	
			z-index: 1;
			position: relative;
			width: 600px;
			height: 40px;
			margin: 30px 0;
			margin-left: 390px;
			border-radius: 0;
			z-index: 1;
			outline: none;
			background: #000;
			border: 1px solid #fff;
			color: #fff;
			padding: 0 30px;
			text-align: center;
		}
		.search-btn{
			z-index: 2;
			position: absolute;
			top: 30px;
			left: 987px;
			width: 150px;
			height: 40px;
			border-radius: 0;
			outline: none;
			background: #000;
			border: 1px solid #fff;
		}
	}
}

</style>
