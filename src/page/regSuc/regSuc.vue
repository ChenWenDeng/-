<template>
	<div class="regSuc-container">
		<headerTop/>
		<div class="icon-container">
			<i class="iconfont icon-chenggong1"></i>
			恭喜您，注册成功!
			<div>
				<router-link class="btn btn-info" to="/">去首页</router-link>
				<router-link class="btn btn-primary" to="/login">去登录</router-link>
			</div>
		</div>
		<Footer/>
	</div>
</template>

<script>

import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    name: "regSuc",
	components:{
		headerTop,
		Footer
	}
}
</script>


<style lang="scss" scoped>
	.regSuc-container{
		.icon-container{
			min-height: 700px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size:30px;
			.icon-chenggong1{
				color: #3CB371;
				font-size: 100px;
			}
			.btn{
				margin-top: 20px;
				padding: 10px 40px;
			}
		}
	}
</style>
