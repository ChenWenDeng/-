<template>
	<div class="details-container">
		<headerTop />
		<div class="goodDetails-container">
			<div class="goodDetails-left">
				<div class="sm-container">
					<ul>
						<li class="sm-li" v-for="(img,index) in detailsArr.smImg" :key="index" ref='listImg' v-on:mouseover='getIndex(img)'>
							<img v-lazy="img">
						</li>        
					</ul>
					    </div>
				<div class="magnifier-container">
					<pic-zoom class="magnifier-img" :url="ImgUrl" :scale="2"></pic-zoom>
				</div>
			</div>
			<div class="goodDetails-right">
				<h5 class="title">{{this.detailsArr.productName}}</h5>
				<p class="price-container"><span class="price-title">价格：</span><span class="price"><i>￥</i>{{this.detailsArr.salePrice}}</span></p>
				<div class="number-container">
					<el-input-number v-model="num1" @change="handleChange" :min="this.detailsArr.num" :max="10" label="描述文字"></el-input-number>
				</div>
				<ul class="goodDetails-right-ul">
					<span v-if="detailsArr.colours.length!=0">颜色：</span> 
					<li :class="{check:coloursCheck==index}" v-for="(colour,index) in detailsArr.colours" :key="index" @click="btnColours($event,index)">{{colour}}</li>
				</ul>
				<ul class="goodDetails-right-ul">
					<span v-if="detailsArr.sizes.length!=0">尺寸：</span> 
					<li :class="{check:sizesCheck==index}" v-for="(size,index) in detailsArr.sizes" :key="index" @click="btnSizes($event,index)">{{size}}</li>
				</ul>
				<div class="button-container">
					<button class="btn btn-danger" @click="addCart(detailsArr.productId)">加入购物车</button>
					<!-- <button class="btn btn-primary">加入购物车</button> -->
					<button class="btn btn-primary" @click="purchase(detailsArr.productId)">
						立即购买
					</button>
				</div>
			</div>
		</div>
		<div class="product-container">
			<header>
				产品信息
			</header>
			<div class="img-container">
				<img v-for="(img,index) in detailsArr.detailsImagebag" alt="" v-lazy="img" :key="index">
			</div>
		</div>

		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
			<span class="modal-text-box" v-if="!reqText">
				<i class="iconfont icon-chenggong"></i>
				成功添加到购物车
			</span>
			<span class="modal-text-box2" v-if="reqText">
				<i class="iconfont iconfont icon-cuowu"></i>
				当前未登录，请先登录！
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false" v-if="!reqText">继续购物</el-button>
				<router-link tag="el-button" to="/shopping" @click="centerDialogVisible = false" v-if="!reqText">查看购物车</router-link>
				
				<router-link tag="el-button" to="/login" @click="centerDialogVisible = false" v-if="reqText">去登录</router-link>
			</span>
		</el-dialog>
		<!-- =====================  footer  ===========================-->
		<Footer />
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import {mapState} from 'vuex'
	import headerTop from '../../components/headerTop/headerTop'
	import Footer from '../../components/footer/footer'
	import PicZoom from 'vue-piczoom'
	export default {
		name: 'detail',
		components: {
			headerTop,
			PicZoom,
			Footer,
		},
		data() {
			return {
				centerDialogVisible: false,
				// details:1,
				num1: 1, //保存加入购物车数量
				detailss: 0, //msite页面传来的参数
				detailsArr: [], //存放后台传来的数据
				ImgUrl: [],//大图片默认显示第一张
				reqText:'',//未登录信息
				colours:'',//选择的颜色
				coloursCheck:-1,//选择的颜色样式
				sizes:'',//选择的尺寸
				sizesCheck:-1,//选择的尺寸样式
				coloursTitle:'',//点击同一个颜色样式
				sizeTitle:''//点击同一个尺寸样式
			}
		},
		computed:{
			...mapState(['userId'])
		},
		methods: {
			open3() {
				this.$message({
					message: '请选择颜色和尺寸！',
					type: 'warning'
				});
			},
			btnColours(e,index) {
				if(this.coloursTitle!=e.target.innerHTML){
				this.colours = e.target.innerHTML
				this.coloursCheck=index
				this.coloursTitle = e.target.innerHTML
				}else{
					this.colours = ''
					this.coloursCheck=-1
					this.coloursTitle = ''
				}

			},
			btnSizes(e,index) {
				if(this.sizeTitle!=e.target.innerHTML){
				this.sizes = e.target.innerHTML
				this.sizesCheck=index
				this.sizeTitle = e.target.innerHTML
				}else{
					this.sizes = ''
					this.sizesCheck=-1
					this.sizeTitle = ''
				}
			},

			//点击小图片时将图片路径赋值给大图
			getIndex(imgUrl) {
				this.ImgUrl = imgUrl;
			},
			handleChange(value) {
				console.log(value);
			},

			//点击加入购物车
			addCart(index) {
				if(this.userId!=0){
					if(!this.colours || !this.sizes){
						this.open3()
					}else{
						axios.post('/goods/addCart', {
							userId    : this.userId,
							productId : index,
							num       : this.num1,
							colours   : this.colours,
							sizes     : this.sizes
						}).then((response) => {
							let res = response.data;
							if (res.status == '0') {
								this.centerDialogVisible = true;
								this.cart_id = res.result.list._id
								console.log(res.result.list._id)
								//增加购物车数量
								this.$store.dispatch('recordCartCount',this.num1)
							} else {
								if(res.status === '10001'){
									this.reqText = res.msg
									this.centerDialogVisible =true
								}
							}
						})
					}
				}else{
					this.reqText = '当前未登录'
					this.centerDialogVisible =true
				}
			},
			
			//立即购买功能
			purchase(index){
				if(this.userId!=0){
					if(!this.colours || !this.sizes){
						this.open3()
					}else{
						//查看购买列表是否有数据，有的话就清空
						axios.post('/users/delPurchaseList',{
								productId: index,
							}).then((response) =>{
							let res = response.data;
							if(res.status == '0'){
								//加入购买列表里
								axios.post('/users/purchase',{
										productId: index,
										num: this.num1,
										colours   : this.colours,
										sizes     : this.sizes
									}).then((response) =>{
									let res = response.data;
									if(res.status == '0'){
										console.log('立即购买成功')
									}else{
										console.log('失败'+res.msg)
									}
								})
								this.$router.push({path: '/addresses', query: {modes: 'purchase'}})
							}else{
								console.log('失败'+res.msg)
								if(res.status === '10001'){
									this.reqText = res.msg
									this.centerDialogVisible =true
								}
							}
						})
					}
				}else{
					this.reqText = '当前未登录'
					this.centerDialogVisible =true
				}
			},
        
		},
		mounted() {
			//获取msite页面传来的参数保存在detailss
			this.detailss = this.$route.query.productId
			console.log(this.detailss)

			//需要传的参数
			var param = {
				detailsId: this.detailss
			}

			//发请求
			axios.get('/goods/list', {
				params: param
			}).then((response) => {
				let res = response.data;
				if (res.status == '0') {
					this.detailsArr = res.result.list[0].details[0];
					console.log(this.detailsArr)
					//大图片默认显示第一张
					this.ImgUrl = this.detailsArr.smImg[0]
				} else {
					this.detailsArr = []
				}
			})
		},

	}
</script>

<style lang="scss" scoped>
	.details-container {
		width: 100%;

		.goodDetails-container {
			width: 90%;
			padding: 3.125rem;
			display: flex;
			margin: 1.875rem auto;
			background: #000;

			.goodDetails-left {
				width: 50%;
				display: flex;

				.sm-container {
					width: 5rem;
					height: 600px;
					margin-right: 1.875rem;

					ul {
						width: 100%;
						height: 100%;
						padding: 0;
						margin: 0;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						li {
							width: 100%;
							height: 18%;
							list-style-type: none;
							border: 0.0625rem solid #000;

							img {
								width: 100%;
								height: 100%;
							}

							&.sm-li:hover {
								cursor: pointer;
								border: 0.125rem solid salmon;
							}
						}
					}
				}

				.magnifier-container {
					width: 28.125rem;
					height: 600px;

					.magnifier-img {
						border: 0.0625rem solid #000;
					}
				}
			}

			.goodDetails-right {
				width: 50%;
				.title {
					width: 80%;
					height: 3.75rem;
					padding: 0.625rem;
					color: #fff;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.price-container {
					width: 100%;
					padding: 0.625rem;

					.price-title {
						font-size: 0.875rem;
						color: #fff;
					}

					.price {
						color: rgb(253, 76, 32);
						font-size: 1.25rem;

						i {
							font-size: 0.75rem;
							margin-right: 0.3125rem;
						}
					}
				}

				.number-container {
					width: 100%;
					padding: 10px;
					display: flex;
					margin-bottom: 15px;
					.icon-jian {
						display: inline-block;
						width: 20px;
						height: 20px;
						color: #fff;
						font-size: 25px;
					}

					input {
						width: 80px;
						margin: 0 10px;
						margin-top: 4px;
						outline: none;
						text-align: center;
						padding: 0 3px;
					}

					.icon-jia {
						display: inline-block;
						width: 20px;
						height: 20px;
						color: #fff;
						font-size: 25px;
					}
				}
				.goodDetails-right-ul{
					width: 100%;
					height: 50px;
					display: flex;
					align-items: center;
					list-style-type:none;
					color: #fff;
					padding-left: 10px;
					li{
						min-width: 50px;
						color: #fff;
						border:1px solid #fff;
						height: 40px;
						display: flex;
						justify-content: center;
						align-items: center;
						padding-bottom: 4px;
						margin-right: 5px;
						padding: 0 10px;
						cursor:pointer;
						&.check{
							height: 42px;
							border: 2px solid rgb(53, 80, 138);
						}
					}
				}
				.button-container {
					width: 100%;
					padding: 50px 10px;

					.btn-danger {
						margin-right: 10px;
					}
				}
			}
		}

		.product-container {
			width: 100%;
			background: #fff;
			padding: 30px;
			margin: 50px 0;

			header {
				width: 90%;
				padding: 20px;
				margin: 10px auto;
				font-size: 20px;
				border: 5px solid #fff;
				background: #000;
				color: #fff;
			}

			.img-container {
				width: 90%;
				margin: 0 auto;
				padding: 40px 0;
				text-align: center;
				background: #000;
			}
		}

		.modal-text-box {
			margin-left: 140px;
			color: orangered;
		}
		.modal-text-box2{
			color: orangered;
			margin-left: 120px;
		}
		.el-button{
			padding: 10px 50px;
		}
	}
</style>
