<template>
    <div>
		<div>orders</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'orders',
	data(){
		return{
		}
	},
	methods:{
// 		orderInfo(){
// 			axios.get("/users/orders").then((response) =>{
// 				let res = response.data;
// 				if(res.status == "0"){					
// 					console.log('orders成功')
// 				}else if(res.status == '10020'){
// 					this.notLogin = true
// 					console.log('失败'+res.msg)
// 				}
// 			})
// 		}
	},
	mounted(){
		// this.orderInfo()
	}
}
</script>

<style lang="scss" scoped>

</style>
