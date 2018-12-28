<template>
    <div class="details-container">
        <headerTop/>
        <!--  商品列表=========================================================  -->
				<h2 v-if="!commodityList.length">皇上，臣妾找不到哪！呜呜呜呜呜~~~~~~</h2>
        		<div class="male-container" v-else>
        				<header class="header-container">
        						<span class="reveal-right">潮</span>
        						<span class="reveal-bottom">流</span>
        						<span class="reveal-top">商</span>
        						<span class="reveal-left">品</span>
        				</header>
        				<ul>
        						<li class="li-container li-box"  v-for="(official,index) in commodityList " :key="index" @click="getdetails(official.productId)">
        								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545678090464&di=f1f01b61d4ac2661faa607454e6fe8c2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ce7f5b34f5aba80120b959da4bab.gif" alt="">
        								<router-link target="_blank" to="/details" >
        										<img v-lazy="official.productImage" alt="" >
        										<div class="Price-container">
        												<p class="title ellipsis">{{official.productName}}</p>
        												<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
        										</div>
        								</router-link >
        						</li>
        				</ul>
        		</div>
        <!-- =====================  footer  ===========================-->
        <Footer/>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    name:'detail',
    components:{
        headerTop,
        Footer
    },
    data() {
        return {
			keyWord:null,//接收上个页面传来的搜索参数
			commodityList:[],//接收到的后台数据
        }
    },
    methods:{
		getdetails(index){
			const {href} = this.$router.resolve({
				path: '/details',
				query: {
					productId:index
				}
			})
			window.open(href, '_blank')
		}
        
    },
	mounted() {
		//获取msite页面传来的参数保存在detailss
		this.keyWord = this.$route.query.keyWord
		console.log(this.keyWord)
		
		
		if(this.keyWord == '全部' || this.keyWord == '全部商品'){  //如果收到的搜索关键字是全部则不传查询参数到后台就会返回所有数据
			axios.get('/goods').then((response) =>{
				let res = response.data;
				if(res.status == '0'){
					// this.detailsArr = res.result.list;
					this.commodityList = res.result.list;
					console.log(this.commodityList)
				}else{
					this.commodityList = []
				}
			})	
		}else{							//如果收到的搜索关键字,传到后台查询对应的数据
			//需要传的参数，搜索文字条件
			var param = {
				keyWord:this.keyWord
			}
			//发请求，并把搜索关键字传到后台
			axios.get('/goods',{
					params:param
				}).then((response) =>{
				let res = response.data;
				if(res.status == '0'){
					// this.detailsArr = res.result.list;
					this.commodityList = res.result.list;
					console.log(this.commodityList)
				}else{
					this.commodityList = []
				}
			})
		}
		
		
		
// 		//需要传的参数，搜索文字条件
// 		var param = {
// 			keyWord:this.keyWord
// 		}
// 		//发请求，并把搜索关键字传到后台
// 		axios.get('/goods',{
// 				params:param
// 			}).then((response) =>{
// 			let res = response.data;
// 			if(res.status == '0'){
// 				// this.detailsArr = res.result.list;
// 				this.commodityList = res.result.list;
// 				console.log(this.commodityList)
// 			}else{
// 				this.commodityList = []
// 			}
// 		})
	}
    
}
</script>

<style lang="scss" scoped>
    .details-container{
        width: 100%;
		h2{
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 700px;
		}
        .male-container{
        		width: 100%;
				min-height: 700px;
        		padding: 50px;
        		background: #F5F5F5;
        		// margin:50px 0;
        		overflow: hidden;
        		span{
        				display: inline-block;
        		}
        		header{
        				width: 100%;
        				padding-bottom: 30px;
        				color: #000;
        				font-size: 30px;
						border-top: 2px solid #000;
						padding-left: 20px;
						padding-top: 10px;
						// border-bottom: none;
        		}
        		ul{
        				width: 90%;
        				margin: 0 auto;
        				display: flex;
        				flex-wrap: wrap;
						justify-content: center;
        				padding: 10px;
        				li{
        						position:relative; 
        						float:left; 
        						margin:2px; 
        						width:20%; 
        						min-height: 400px;
        						margin:0; 
        						padding:0; 
        						list-style:none;
        						img{ 
        								width:100%; 
        								height:400px;
        								position:absolute; 
        								top:0; 
        								left:0; 
        								display:block; 
        								transition:all 400ms ease; 
        								-moz-transition:all 400ms ease; 
        								-webkit-transition:all 400ms ease; 
        								-o-transition:all 400ms ease}
        								
        						&.li-container img:hover{
        								-webkit-transform: scale(1.1);
        								-moz-transform: scale(1.1);
        								-ms-transform: scale(1.1);
        								-o-transform: scale(1.1);
        								transition: all .5s;
        								border: 3px solid #aaa;
        								box-shadow:0px 0px  10px 5px #aaa; 
        								z-index:9999999
        								
        						}
        						&.li-container a{
        							display: block; 
        							width: 100%; 
        							height:100%;
        						}
        						.Price-container{
        								position: absolute;
        								z-index: 1111;
        								bottom: 0;
        								left: 0;
        								right: 0;
        								width: 100%;
        								padding: 10px;
        								background: rgba(51, 51, 51, 0.5);
        								display: flex;
        								flex-direction: column;
        								justify-content: center;
        								align-items: center;
        								.title{
        										width: 200px;
        										height: 20px;
        										color: #fff;
        										font-size: 16px;
        										overflow: hidden;
        										text-overflow: ellipsis;
        										white-space: nowrap;
        								}
        								.Price{
        										font-size: 18px;
        										font-weight: bold;
        										margin: 0;
        										color: #fff;
        										span{
        												font-size: 12px;
        										}
        								}
        						}
        						&.li-container:hover{
        								-webkit-transform: scale(1.1);
        								-moz-transform: scale(1.1);
        								-ms-transform: scale(1.1);
        								-o-transform: scale(1.1);
        								transition: all .5s;
        								border: 3px solid #aaa;
        								box-shadow:0px 0px  10px 5px #aaa; 
        								z-index:9999999;
        								cursor:pointer
        						}
								&.li-box{
									width: 20%;
									height: 100%;
									margin: 15px;
								&.li-box:nth-child(2){
									margin-top:50px;
								}
								&.li-box:nth-child(5){
									margin-top:50px;
								}
								&.li-box:nth-child(8){
									margin-top:50px;
								}
								&.li-box:nth-child(4){
									margin-top:50px;
								}
								&.li-box:nth-child(10){
									margin-top:50px;
								}
								&.li-box:nth-child(11){
									margin-top:50px;
								}
								&.li-box:nth-child(13){
									margin-top:50px;
								}
								&.li-box:nth-child(12){
									margin-top:50px;
								}
								&.li-box:nth-child(16){
									margin-top:50px;
								}
								&.li-box:nth-child(17){
									margin-top:50px;
								}
								&.li-box:nth-child(20){
									margin-top:50px;
								}
								&.li-box:nth-child(22){
									margin-top:50px;
								}
								&.li-box:hover{
									box-shadow:none;
								}
								&.li-box img:hover{
									box-shadow:none;
								}
							}
        				}
        		}
        }
    }
</style>

