<template>
	<div class="msite-container">
		<!--================== header  ===================-->
		<headerTop />
		<!--================== header  ===================-->
		<div class="bg-container">
			<div class="bg-img"></div>
		</div>
		<div class="Advertisement">
			<h1 class="title reveal-bottom">
				<span class="reveal-right">Leading</span>
				<span class="reveal-bottom">the</span>
				<span class="reveal-bottom">fashion</span>
				<span class="reveal-left">trend</span>
			</h1>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(swiper, index) in swipers" :key="index">
						<img class="img-responsive " :src="swiper.urlImg" alt="">
					</div>
				</div>
			</div>
		</div>

		<div class="jumbotron">
			<h1 class="display-4 reveal-top">Eend商城——全球设计师原创服装平台</h1>
			<p class="lead reveal-right">Eend商城汇聚了全球原创服装设计师作品的设计与展示，是国内新一代设计师原创服装电商平台，集设计师时尚产品销售展示、品牌推广于一体，致力于为都市女性提供高性价比的原创设计服装品牌及个性潮流服装，帮助并引导终端用户找到与自身气质品味相匹配的原创时装</p>
			<hr class="my-4">
			<p class="reveal-bottom">Developed by Eend of the Post-90s Youtht</p>
			<p class="lead">
				<a class="btn btn-primary btn-lg reveal-left" href="#" role="button">Learn more</a>
			</p>
		</div>

		<div class="classification">
			<div class="popular-container">
				<h1 class="Popular-title reveal-top">热门推荐</h1>
				<div class="Popular-text-box">
					<p class="reveal-right">我不追随时尚，我本身就是时尚</p>
					<p class="reveal-left">别随大流，不要让时尚左右你，而是自己去决定自己是什么样的，用自己的穿衣风格和生活方式来表达自己。</p>
				</div>
			</div>
			<div class="swiper-container-row">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(official,index) in officials " :key="index" @click="getdetails(official.productId)">
						<div class="item col-lg-12 col-sm-4 col-xs-6">
							<div class="dtl31">
								<!-- <router-link tag="a" target="_blank" to="/details"> -->
								<img v-lazy="official.productImage" :key="official.productImage">
								<div class="dtl">
									<h3>{{official.productName}}</h3>
									<p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec
										arcu eget, sodales feugiat ligula.</p>
									<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
								</div>
								<!-- </router-link> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



		<!-- 官方============================================================== -->
		<div class="official-container1">
			<header>
				<span class="reveal-right">官</span>
				<span class="reveal-bottom">方</span>
				<span class="reveal-top">精</span>
				<span class="reveal-left">选</span>
			</header>
			<ul>
				<li class="li-container" v-for="(official,index) in filteredItems(0,10) " :key="index" @click="getdetails(official.productId)">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif"
					 alt="">
					<div :class="'reveal-'+official.direction">
						<img v-lazy="official.productImage" alt="" >
						<div class="Price-container">
							<p class="title ellipsis">{{official.productName}}</p>
							<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<!-- 品牌============================================================== -->

		<div class="brand-container1">
			<header>
				<span class="reveal-left">品</span>
				<span class="reveal-top">牌</span>
				<span class="reveal-right">精</span>
				<span class="reveal-bottom">选</span>
			</header>
			<ul>
				<li class="li-container libox" v-for="(official,index) in filteredItems(10,18) " :key="index" @click="getdetails(official.productId)">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif">
					<i :class="'reveal-'+official.direction">
						<img v-lazy="official.productImage" alt="">
						<div class="Price-container">
							<p class="title ellipsis">{{official.productName}}</p>
							<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
						</div>
					</i>
				</li>
			</ul>
		</div>
		<!-- 女装============================================================== -->

		<div class="female-container">
			<header class="header-container">
				<span class="reveal-right">潮</span>
				<span class="reveal-bottom">流</span>
				<span class="reveal-top">女</span>
				<span class="reveal-left">装</span>
			</header>
			<ul>
				<li class="li-container li-box" v-for="(official,index) in filteredItems(18,26) " :key="index" @click="getdetails(official.productId)">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif">
					<div :class="'reveal-'+official.direction">
						<img v-lazy="official.productImage" alt="">
						<div class="Price-container">
							<p class="title ellipsis">{{official.productName}}</p>
							<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
						</div>
					</div>
				</li>
			</ul>
		</div>


		<!--  男装=========================================================  -->
		<div class="male-container">
			<header class="header-container">
				<span class="reveal-right">潮</span>
				<span class="reveal-bottom">流</span>
				<span class="reveal-top">男</span>
				<span class="reveal-left">装</span>
			</header>
			<ul>
				<li class="li-container li-box" v-for="(official,index) in filteredItems(26,34) " :key="index" @click="getdetails(official.productId)">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif">
					<div :class="'reveal-'+official.direction">
						<img v-lazy="official.productImage" alt="" >
						<div class="Price-container">
							<p class="title ellipsis">{{official.productName}}</p>
							<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 鞋子============================================================== -->
		<div class="brand-container" style="background: #fff;">
			<header>
				<span class="reveal-left">潮</span>
				<span class="reveal-top">流</span>
				<span class="reveal-right">鞋</span>
				<span class="reveal-bottom">子</span>
			</header>
			<ul>
				<li class="li-container libox" v-for="(official,index) in filteredItems(34,42) " :key="index" @click="getdetails(official.productId)">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif">
					<i :class="'reveal-'+official.direction">
						<img v-lazy="official.productImage" alt="">
						<div class="Price-container">
							<p class="title ellipsis">{{official.productName}}</p>
							<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
						</div>
					</i>
				</li>
			</ul>
		</div>
		<!--  裤子=========================================================  -->
		<div class="male-container">
			<header class="header-container">
				<span class="reveal-right">潮</span>
				<span class="reveal-bottom">流</span>
				<span class="reveal-top">包</span>
				<span class="reveal-left">包</span>
			</header>
			<ul>
				<li class="li-container li-box" v-for="(official,index) in filteredItems(42,50) " :key="index" @click="getdetails(official.productId)">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif">
					<div :class="'reveal-'+official.direction">
						<img v-lazy="official.productImage" alt="">
						<div class="Price-container">
							<p class="title ellipsis">{{official.productName}}</p>
							<p class="Price"><span>￥</span>{{official.salePrice}}元</p>
						</div>
					</div>
				</li>
			</ul>
		</div>


		<!--- ========================  footer  ============================-->
		<Footer />
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import headerTop from '../../components/headerTop/headerTop'
	import Footer from '../../components/footer/footer'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import scrollReveal from 'scrollreveal'
	export default {
		name: 'msite',
		components: {
			headerTop,
			Footer,
		},
		data() {
			return {
				officials: [], //接收到的数据
				isMask: true, //
				detailss: [], //详情页数据
				scrollReveal: scrollReveal(),
				/*****  轮播广告   ******/
				swipers: [{
						id: 1,
						urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1425900/201811271817539788.jpg'
					},
					{
						id: 2,
						urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1417957/201811271759202476.jpg'
					},
					{
						id: 3,
						urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1362147/201811271757561033.jpg'
					},
					{
						id: 4,
						urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/379/201811271755466475.jpg'
					},
					{
						id: 5,
						urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811271753487916.jpg'
					}
				],
			}
		},
		methods: {
			displayMask(index) {
				this.isMask = !this.isMask
			},
			animations(direc, direction) {
				this.scrollReveal.reveal(direc, {
					// 动画的时长
					duration: 500,
					// 延迟时间
					delay: 500,
					// 动画开始的位置，'bottom', 'left', 'top', 'right'
					origin: direction,
					// 回滚的时候是否再次触发动画
					reset: false,
					// 在移动端是否使用动画
					mobile: false,
					// 滚动的距离，单位可以用%，rem等
					distance: '200px',
					// 其他可用的动画效果
					opacity: 0.001,
					easing: 'linear',
					scale: 0.9,
				});
			},
			getdetails(index) {
				//跳转
				const {
					href
				} = this.$router.resolve({
					path: '/details',
					query: {
						productId: index
					}
				})
				window.open(href, '_blank')
			}
		},
		computed: {
			//根据传入的参数计算要渲染多少条数据
			filteredItems() {
				return function(start, end) {
					return this.officials.slice(start, end)
				}
			}
		},
		mounted() {
			//一打开页面发送请求并接收数据
			axios.get('/goods').then((response) => {
				let res = response.data;
				if (res.status == '0') {
					this.officials = res.result.list;
					console.log(this.officials)

					this.$nextTick(function() {
						var mySwiper1 = new Swiper('.swiper-container-row', {
							slidesPerView: 3,
							spaceBetween: 20,
							loop: true, // 循环模式选项
							//spaceBetween : '10%',按container的百分比
							autoplay: {
								delay: 1000, //1秒切换一次
								disableOnInteraction: false, //用户操作后也自动轮播
							},
						})
						
						this.animations('.reveal-top', 'top')
						this.animations('.reveal-bottom', 'bottom')
						this.animations('.reveal-left', 'left')
						this.animations('.reveal-right', 'right')
					})

				} else {
					this.officials = []
				}
			})
			this.$nextTick(function() {
				var mySwiper = new Swiper('.swiper-container', {
					loop: true,
					effect: 'coverflow',
					slidesPerView: 3,
					centeredSlides: true,
					coverflowEffect: {
						rotate: 30,
						stretch: 10,
						depth: 60,
						modifier: 2,
						slideShadows: true
					},
					autoplay: {
						delay: 2000, //1秒切换一次
						disableOnInteraction: false,
					},

				});
			})
		}
	}
</script>

<style lang="scss" scoped>
	.msite-container {
		.navbar {
			padding-top: 20px;
			padding-bottom: 20px;
			background: #000 !important;
			color: #fff !important;
		}

		.bg-container {
			.bg-img {
				z-index: -1;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				//background-image: url(http://p0.meituan.net/dpdeal/535e6f3eeec64e782f4eb2bac3426eac1375188.jpg);
				background-image: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1432676133,1440846621&fm=26&gp=0.jpg);
					background-size: 100% 100%;
			}
		}

		.Advertisement {
			margin: 3.125rem 0;
			text-align: center;

			.title {
				margin: 1.875rem 0;
				color: #fff;
				font-size: 2.5rem;

				span {
					display: inline-block;
				}
			}

			.swiper-container {
				width: 95%;
				height: 300px;

				.swiper-slide {
					width: 33%;
					height: 100%;
					background: none;

					img {
						// width: 25rem;
						width: 100%;
						// height: 18.75rem;
						height: 100%;
					}
				}
			}
		}

		.jumbotron {
			width: 90%;
			margin: 3.125rem auto;
			opacity: .8;
			box-shadow: 0px 0px 15px 5px #000;
		}

		.classification {
			width: 100%;
			display: flex;
			padding: 20px;
			background: #000;

			.popular-container {
				display: flex;
				justify-content: center;
				width: 30%;
				padding: 20px;

				.Popular-title {
					margin-left: 5%;
					color: #fff !important;
					//font-size: 20px;
				}

				.Popular-text-box {
					display: flex;
					justify-content: flex-end;
					flex-direction: column;

					p {
						color: #fff;
					}
				}
			}

			.swiper-container-row {
				width: 70%;
				overflow: hidden;

				.swiper-slide {
					width: 40%;

					.item {
						width: 100%;

						.dtl31 {
							width: 100%;
							background: green;
							position: relative;
							overflow: hidden;
							-webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
							-moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
							box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
							cursor: pointer;

							&.dtl31:hover img {
								-webkit-transform: scale(1.1);
								-moz-transform: scale(1.1);
								-ms-transform: scale(1.1);
								-o-transform: scale(1.1);
								//transform: scale(1.1);
								transition: all .3s;
							}

							&.dtl31:hover .dtl {
								visibility: visible;
								opacity: 1;
								transform: translateY(-100%);
								cursor: pointer;
							}

							img {
								position: relative;
								width: 100%;
								height: 450px;
								top: 0;
								left: 0;
								-webkit-transition: all 0.3s;
								-moz-transition: all 0.3s;
								-o-transition: all 0.3s;
								transition: all 0.3s;
							}

							.dtl {
								background: rgba(51, 51, 51, 0.5);
								width: 100%;
								position: absolute;
								height: 100%;
								bottom: -100%;
								left: 0;
								opacity: 0;
								padding-top: 50%;
								visibility: hidden;
								-webkit-transition: all 0.3s;
								-moz-transition: all 0.3s;
								-o-transition: all 0.3s;
								transition: all 0.3s;

								h3 {
									opacity: .5;
									padding: 10px 15px;
									width: 100%;
									background: #333;
									color: #fff;
									font-size: 16px;
									font-weight: normal;
									margin-top: 20px;
									margin-bottom: 10px;
									text-decoration: underline;
								}

								p {
									padding: 0 15px;
									font-size: 14px;
									margin-bottom: 10px;
									line-height: 1.2;
									color: #fff;
									text-indent: 10px;
								}

								a {
									margin-right: 15px;
									background: #fff;
									border: 1px solid #ccc;
									border-radius: 2px;
									color: #333;
									float: right;
									font-size: 13px;
									padding: 2px 5px;
									text-align: center;
									text-decoration: none;

									&.a:hover {
										background: #e6e6e6;
										border: 1px solid #adadad;
									}
								}
							}
						}
					}
				}
			}
		}

		.official-container1, .female-container, .male-container {
			width: 100%;
			padding: 50px;
			background: #0e3342;
			margin-top: 20px;
			overflow: hidden;

			span {
				display: inline-block;
			}

			header {
				width: 100%;
				padding-bottom: 30px;
				color: #ccc;
				font-size: 30px;
			}

			ul {
				width: 90%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				padding: 50px;

				li {
					position: relative;
					float: left;
					margin: 2px;
					width: 20%;
					min-height: 400px;
					margin: 0;
					padding: 0;
					list-style: none;

					img {
						width: 100%;
						height: 400px;
						position: absolute;
						top: 0;
						left: 0;
						display: block;
						transition: all 400ms ease;
						-moz-transition: all 400ms ease;
						-webkit-transition: all 400ms ease;
						-o-transition: all 400ms ease
					}

					&.li-container img:hover {
						-webkit-transform: scale(1.1);
						-moz-transform: scale(1.1);
						-ms-transform: scale(1.1);
						-o-transform: scale(1.1);
						transition: all .5s;
						border: 3px solid #aaa;
						box-shadow: 0px 0px 10px 5px #aaa;
						z-index: 9999999
					}

					&.li-container a {
						display: block;
						width: 100%;
						height: 100%;
					}

					.Price-container {
						position: absolute;
						z-index: 1111;
						// bottom: 0;
						top: 318px;
						left: 0;
						right: 0;
						width: 100%;
						padding: 10px;
						background: rgba(51, 51, 51, 0.5);
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						.title {
							width: 200px;
							height: 20px;
							color: #fff;
							font-size: 16px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.Price {
							font-size: 18px;
							font-weight: bold;
							margin: 0;
							color: #fff;

							span {
								font-size: 12px;
							}
						}
					}

					&.li-container:hover {
						-webkit-transform: scale(1.1);
						-moz-transform: scale(1.1);
						-ms-transform: scale(1.1);
						-o-transform: scale(1.1);
						transition: all .5s;
						border: 3px solid #aaa;
						box-shadow: 0px 0px 10px 5px #aaa;
						z-index: 9999999;
						cursor: pointer
					}
				}
			}
		}

		.brand-container1, .brand-container{
			width: 100%;
			padding: 50px;
			background: #333;
			margin-top: 20px;
			overflow: hidden;

			span {
				display: inline-block;
			}

			header {
				width: 100%;
				padding-bottom: 30px;
				color: #ccc;
				font-size: 30px;
			}

			ul {
				width: 90%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				padding: 0;

				li {
					float: left;
					position: relative;
					margin: 2px;
					position: relative;
					width: 25%;
					min-height: 400px;
					margin: 0;
					padding: 0;
					list-style: none;

					img {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						display: block;
						transition: all 400ms ease;
						-moz-transition: all 400ms ease;
						-webkit-transition: all 400ms ease;
						-o-transition: all 400ms ease;
					}

					&.li-container img:hover {
						-webkit-transform: scale(0.6.1);
						-moz-transform: scale(1.1);
						-ms-transform: scale(1.1);
						-o-transform: scale(1.1);
						transition: all .8s;
						border: 3px solid #aaa;
						box-shadow: 0px 0px 10px 5px #aaa;
						z-index: 9999999;
						cursor:pointer;
					}

					.Price-container {
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

						.title {
							width: 200px;
							height: 20px;
							color: #fff;
							font-size: 16px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.Price {
							font-size: 18px;
							font-weight: bold;
							margin: 0;
							color: #fff;

							span {
								font-size: 12px;
							}
						}
					}
				}
			}
		}
		.brand-container{
			header{
				width: 300px;
				height: 50px;
				margin: 0 auto;
				color: #fff;
				display: flex;
				justify-content: center;
				margin-bottom: 50px;
				background: #000;
				border: 2px solid #000;
				
			}
			ul{
				li{
					transition: bottom .8 linear 0s;
					bottom:  0px;
				}
				li:hover{
					-webkit-transform: scale(0.6.1);
					-moz-transform: scale(1.1);
					-ms-transform: scale(1.1);
					-o-transform: scale(1.1);
					transition: all .8s;
					bottom: 4px;
					z-index: 9999;
					img:hover{
						border: none;
						cursor:pointer;
					}
				}
			}
		}

		.female-container {
			width: 100%;
			background: #000;

			.header-container {
				width: 300px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #000;
				padding: 2px;
				border: 2px solid #fff;
				margin: 30px auto;
				color: #fff;
			}

			ul {
				display: flex;
				justify-content: center;
				background: #fff;

				.li-box {
					width: 20%;
					height: 100%;
					margin: 15px;

					&.li-box:nth-child(2) {
						margin-top: 50px;
					}

					&.li-box:nth-child(5) {
						margin-top: 50px;
					}

					&.li-box:nth-child(8) {
						margin-top: 50px;
					}

					&.li-box:nth-child(4) {
						margin-top: 50px;
					}

					&.li-box:nth-child(10) {
						margin-top: 50px;
					}

					&.li-box:nth-child(11) {
						margin-top: 50px;
					}

					&.li-box:hover {
						box-shadow: none;
					}

					&.li-box img:hover {
						box-shadow: none;
					}
				}
			}
		}

		.male-container {
			background: #fff;

			.header-container {
				width: 300px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #fff;
				padding: 2px;
				border: 2px solid #000;
				margin: 30px auto;
				color: #000;
			}

			ul {
				display: flex;
				justify-content: center;
				background: #000;

				.li-box {
					width: 20%;
					height: 100%;
					margin: 15px;

					&.li-box:nth-child(1) {
						margin-top: 50px;
					}

					&.li-box:nth-child(3) {
						margin-top: 50px;
					}

					&.li-box:nth-child(6) {
						margin-top: 50px;
					}

					&.li-box:nth-child(8) {
						margin-top: 50px;
					}

					&.li-box:nth-child(9) {
						margin-top: 50px;
					}

					&.li-box:nth-child(12) {
						margin-top: 50px;
					}

					&.li-box:hover {
						box-shadow: none;
					}

					&.li-box img:hover {
						box-shadow: none;
					}
				}
			}
		}
	}
</style>
