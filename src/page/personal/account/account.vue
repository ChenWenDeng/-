<template>
    <div class="rating_page">
		<div class="personal-data">
			<h2>个人资料</h2>
			<p><span>用户账号：</span>{{account.userName}}</p>
			<p><span>手机号码：</span>{{account.phone}}</p>
			<p><span>邮箱地址：</span>{{account.eliam}}</p>
			<p><span>创建时间：</span>{{account.createDate}}</p>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'account',
	data(){
		return{
			account:{}
		}
	},
	methods:{
		accountInfo(){
			axios.get("/users/account").then((response) =>{
				let res = response.data;
				if(res.status == "0"){					
					console.log('orders成功')
					this.account = res.result		
					
				}else if(res.status == '10020'){
					this.notLogin = true
					console.log('失败'+res.msg)
				}
			})
		}
	},
	mounted(){
		this.accountInfo()
		
	}
}
</script>

<style lang="scss" scoped>
.rating_page{
	.personal-data{
		padding: 50px ;
		h2{
			// width: 128px;
			margin-bottom: 20px;
			color: cornflowerblue;
			border-bottom: 2px solid cornflowerblue;
		}
		p{
			span{
				color: #999;
			}
		}
	}
	.router-slid-enter-active, .router-slid-leave-active {
		transition: all .4s;
	}
	.router-slid-enter, .router-slid-leave-active {
		transform: translate3d(2rem, 0, 0);
		opacity: 0;
	}
}
</style>
