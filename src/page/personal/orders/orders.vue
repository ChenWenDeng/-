<template>
    <div class="rating_page">
		<ul class="header-ul">
			<li class="liOne">宝贝</li>
			<li>单价</li>
			<li>数量</li>
			<li>商品操作</li>
			<li>实付款</li>
			<li>交易状态</li>
		</ul>
		<ul class="body-ul" v-for="(item, index) in filteredItems(this.startIndex,this.endIndex)" :key="index">
			<p>
				<span class="date-text">{{item.createDate}}</span>
				<span>订单号：{{item.orderId}}</span>
			</p>
			<ul v-for="(goods, index) in item.goodsList" :key="index">
				<li>
					<img :src="goods.smImg[0]" alt="">
					<span class="productTitle">{{goods.productName}}</span>
				</li>
				<li>{{goods.salePrice}}</li>
				<li>{{goods.num}}</li>
				<li>商品操作</li>
			</ul>
			<li class="payment-li" v-for="(goods, index) in item.goodsList" :key="index">
				<li>实付款</li>
			</li>
			<li class="state-li">交易状态</li>
		</ul>
		<el-pagination
			@current-change="handleCurrentChange"
			:current-page="page"
			:page-sizes="[4]" 
							
			layout="total, sizes, prev, pager, next, jumper"
			:total="ordersList.length">    
		</el-pagination>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'orders',
	data(){
		return{
			ordersList:[],//订单列表数据
			
			totalList:0,//数据总长度
			page: 1, //分页
			pageSize: 5, //每页8条数据
			startIndex : 0,
			endIndex: 4,
			goods: []
		}
	},
	methods:{
		orderInfo(){
			axios.post("/users/ordersList",{
				page: this.page,
				pageSize: this.pageSize,
			}).then((response) =>{
				let res = response.data;
				if(res.status == "0"){					
					console.log('orders成功')
					this.ordersList = res.result
					console.log(this.ordersList)		
				}else if(res.status == '10020'){
					this.notLogin = true
					console.log('失败'+res.msg)
				}
			})
		},
		handleCurrentChange(cpage) {
			this.endIndex  = cpage * 4;
			this.startIndex = this.endIndex - 4;
		}
	},
	computed: {
		//根据传入的参数计算要渲染多少条数据
		filteredItems() {
			return function(start, end) {
				return this.ordersList.slice(start, end)
			}
		},
	},
	mounted(){
		this.orderInfo()
	}
}
</script>

<style lang="scss" scoped>
.rating_page{
	z-index: -1;
	.header-ul{
		list-style:none;
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		padding:10px 20px;
		background-color: #f2f2f2;
		margin-bottom: 0;
		li{
			font-weight: bold;
		}
		.liOne{
			width: 400px;
			display: flex;
			justify-content: center;
		}
	}
	.body-ul{
		list-style:none;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-left: 0;
		padding-top: 0;
		border: 1px solid #f1f1f1;
		margin-top: 10PX;
		p{
			width: 100%;
			background: #f3f3f3;
			padding: 5px 20px;
			.date-text{
				margin-right: 20px;
			}
		}
		ul{
			list-style:none;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 836px;
			padding: 0 20px 20px 20px;
			li{
				img{
					width: 80px;
					height: 80px;
				}
				.productTitle{
					display: inline-block;
					width: 310px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		.payment-li{
			width: 17%;
			display: flex;
			justify-content: center;
		}
		.state-li{
			width: 8%;
			display: flex;
			justify-content: center;
		}
	}
	.el-pagination {
		white-space: nowrap;
		padding: 30px 5px;
		color: #303133;
		font-weight: 700;
		margin: 50px;
		text-align: right;
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
