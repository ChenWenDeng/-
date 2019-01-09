<template>
    <div class="payment-container">
        <headerTop/>
        <div class="main-container">
            <p>未接入支付接口，{{computeTime}}秒后自动生成本次购物订单</p>
        </div>
        <Footer/>
    </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    components:{
        headerTop,
        Footer
    },
    data(){
        return{
			computeTime: 0,
			modes : '', //接收是购物车方式还是立即购买方式
			subAddressId: 0,//选中的本次购物的地址id
        }
    },
    methods:{
       
    },
	mounted(){
		this.computeTime = 3
		this.intervalId = setInterval(()=>{
			this.computeTime--
			if(this.computeTime<=0){
				//停止计时
				clearInterval(this.intervalId)
				this.$router.push({path: '/orderSuc', query: {modes: this.modes,subAddressId:this.subAddressId}})
			}
		},1000)
		
		//接收addresses页的参数判断显示购物车列表还是立即购买列表
		this.modes = this.$route.query.modes;
		this.subAddressId = this.$route.query.subAddressId;
		console.log('modes===' + this.modes)
		console.log('subAddressId===' + this.subAddressId)
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
}
</style>
