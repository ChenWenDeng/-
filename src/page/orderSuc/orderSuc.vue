<template>
    <div class="payment-container">
        <headerTop/>
        <div class="main-container">
            <div class="left-box">
				<i class="iconfont icon-chenggong"></i>
			</div>
			<div class="right-box">
				<p>订单成功，我们将尽量安排为您发货！</p>
				<p>
					<span class="left-span">订单号: {{orderSuc.orderId}}</span>
					|<span class="right-span">已付金额: <b>{{ordertotal}}元</b></span>
				</p>
				<p>下单时间：{{orderSuc.createDate}}</p>
			</div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    components:{
        headerTop,
        Footer
    },
    data(){
        return{
			modes : '', //接收是购物车方式还是立即购买方式
			subAddressId: 0,//选中的本次购物的地址id
			orderSuc: []
        }
    },
    methods:{
       orderSucInit(){
		   axios.post('/users/payMent', {
		   	modes: this.modes,
			addressId: this.subAddressId
		   }).then((response) => {
		   	let res = response.data;
		   	if (res.status == '0') {
		   		console.log('成功')
				this.orderSuc = res.result
				// console.log(this.orderSuc)
				
				console.log(this.orderSuc.goodsList)
		   	} else {
		   		console.log('失败' + res.msg)
		   	}
		   })
	   }
    },
	mounted(){
		//接收addresses页的参数判断显示购物车列表还是立即购买列表
		this.modes = this.$route.query.modes;
		this.subAddressId = this.$route.query.subAddressId;
		console.log('modes===' + this.modes)
		console.log('subAddressId===' + this.subAddressId)
		this.orderSucInit()
	},
	computed: {
		ordertotal() {
			var total = 0
			this.orderSuc.goodsList.forEach((item) => {
				total += item.salePrice * item.num
				console.log(item)
			})
			return total
		},
	}
}
</script>

<style lang="scss" scoped>
.payment-container{
    width: 100%;
    .main-container{
        width: 90%;
        min-height: 700px;
        display: flex;
		margin: 0 auto;
        justify-content: center;
        align-items: center;
		.left-box{
			width: 100px;
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			i{
				font-size: 70px;
				color:#67c23a;
			}
		}
		.right-box{
			min-height: 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			p{
				margin-bottom: 0;
				margin: 3px 0;
				.left-span{
					margin-right: 15px;
				}
				.right-span{
					margin-left: 15px;
					b{
						color: red;
					}
				}
			}
		}
    }
}
</style>
