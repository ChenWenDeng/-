<template>
    <div class="details-container">
        <headerTop/>
        <div class="goodDetails-container">
            <div class="goodDetails-left">
                <div class="sm-container" >
                    <ul>
						<li class="sm-li" v-for="(img,index) in detailsArr.smImg" :key="index" ref='listImg' v-on:mouseover='getIndex(img)'>
						      <img v-lazy="img" >
			            </li>
                    </ul>
                </div>
                <div class="magnifier-container">
                    <pic-zoom class="magnifier-img" :url="ImgUrl"  :scale="2"></pic-zoom>
                </div>
            </div>
            <div class="goodDetails-right">
				<h5 class="title">{{this.detailsArr.productName}}</h5>
                <p class="price-container"><span class="price-title">价格：</span><span class="price"><i>￥</i>{{this.detailsArr.salePrice}}</span></p>
                <div class="number-container">
                    <el-input-number v-model="num1" @change="handleChange" :min="this.detailsArr.num" :max="10" label="描述文字"></el-input-number>
                </div>
                <div class="button-container">
                    <router-link class="btn btn-danger" tag="button" to="/shopping">
                        <!-- <button class="btn btn-danger">加入购物车</button> -->
                        加入购物车
                    </router-link>
					<button  @click="addCart(detailsArr.productId)">点击</button>
                    <router-link class="btn btn-primary" tag="button" to="/order">
                        <!-- <button class="btn btn-primary">加入购物车</button> -->
                        立即购买
                    </router-link>
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
        <!-- =====================  footer  ===========================-->
        <Footer/>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
import PicZoom from 'vue-piczoom'
export default {
    name:'detail',
    components:{
        headerTop,
        PicZoom,
        Footer
    },
    data() {
        return {
			// details:1,
            num1: 1,
			detailss: 0, //msite页面传来的参数
			detailsArr:[],  //存放后台传来的数据
//             imgUrl: [
//                 { index:1, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192462761649_1280.jpg' },
//                 { index:2, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192477717937_1280.jpg' },
//                 { index:1, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192494906650_1280.jpg' },
//                 { index:2, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192511524855_1280.jpg' },
//                 { index:1, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192527198747_1280.jpg' },
// 
// //                 { index:3, url: require('http://i3.vanclimg.com/cms/20181130/pc2_06.jpg') },
// //                 { index:4, url: require('http://i3.vanclimg.com/cms/20181130/pc2_07.jpg') },
//             ],
            //大图片默认显示第一张
            ImgUrl:[],
        }
    },
    methods:{
        //点击小图片时将图片路径赋值给大图
        getIndex(imgUrl){
            this.ImgUrl = imgUrl;
        },
        handleChange(value) {
            console.log(value);
        },
		
		//点击加入购物车
		addCart(index){
			//需要传的参数
// 			var param = {
// 				productId:index,
// 				num:this.num1
// 			}
// 			axios.post('/goods/addCart',{
// 				productId:index,
// 				num:this.num1
// 			}).then((res)=>{
// 				if(res.status == '0'){
// 					alert('成功加入')
// 				}else{
// 					console.log('失败'+res.msg)
// 				}
// 			})
			
			axios.post('/goods/addCart',{
					productId:index,
					num:this.num1
				}).then((response) =>{
				let res = response.data;
				if(res.status == '0'){
					alert('加入成功')
				}else{
					console.log('失败'+res.msg)
				}
			})
		}
    },
	mounted() {
		//获取msite页面传来的参数保存在detailss
		this.detailss = this.$route.query.productId
		console.log(this.detailss)
		
		//需要传的参数
		var param = {
			detailsId:this.detailss
		}
		
		//发请求
		axios.get('/goods',{
				params:param
			}).then((response) =>{
			let res = response.data;
			if(res.status == '0'){
				// this.detailsArr = res.result.list;
				this.detailsArr = res.result.list[0].details[0];
				console.log(this.detailsArr)
				//大图片默认显示第一张
				this.ImgUrl = this.detailsArr.smImg[0]
			}else{
				this.detailsArr = []
			}
		})
	}
    
}
</script>

<style lang="scss" scoped>
    .details-container{
        width: 100%;
        .goodDetails-container{
            width: 90%;
            padding: 3.125rem;
            display: flex;
            margin: 1.875rem auto;
             background:#000;
            .goodDetails-left{
                width: 50%;
                display: flex;
                .sm-container{
                    width: 5rem;
                    // height:28.125rem;
					height:600px;
                    margin-right: 1.875rem;
                    ul{
                        width: 100%;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        li{
                            width: 100%;
                            height: 18%;
                            list-style-type:none;
                            border: 0.0625rem solid #000;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                            &.sm-li:hover{
                                cursor:pointer;
                                border: 0.125rem solid salmon;
                            }
                        }
                    }
                }
                .magnifier-container{
                    width: 28.125rem;
                    // height:28.125rem;
					height:600px;
                    .magnifier-img{
                        border: 0.0625rem solid #000;
                    }
                }
            }
            .goodDetails-right{
                width: 50%;
                .title{
                    width: 80%;
                    height: 3.75rem;
                    padding: 0.625rem;
                    color: #fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .price-container{
                    width: 100%;
                    padding: 0.625rem;
                    .price-title{
                        font-size: 0.875rem;
                        color: #fff;
                    }
                    .price{
                        color: rgb(253, 76, 32);
                        font-size: 1.25rem;
                        i{
                            font-size: 0.75rem;
                            margin-right: 0.3125rem;
                        }
                    }
                }
                .number-container{
                    width: 100%;
                    padding: 10px;
                    display: flex;
                    .icon-jian{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        color: #fff;
                        font-size: 25px;
                    }
                    input{
                        width: 80px;
                        margin: 0 10px;
                        margin-top: 4px;
                        outline:none;
                        text-align: center;
                        padding: 0 3px;
                    }
                    .icon-jia{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        color: #fff;
                        font-size: 25px;
                    }
                }
                .button-container{
                    width: 100%;
                    padding: 50px 10px;
                    .btn-danger{
                        margin-right: 10px;
                    }
                }
            }
        }
        .product-container{
            width: 100%;
            background: #fff;
            padding: 30px;
            margin: 50px 0;
            header{
                width: 90%;
                // margin: 0 auto;
                padding: 20px;
                margin: 10px auto;
                font-size: 20px;
                border: 5px solid #fff;
                background: #000;
                color: #fff;
            }
            .img-container{
                width: 90%;
                margin: 0 auto;
                padding: 40px 0;
                text-align: center;
                background: #000;
            }
        }
    }
</style>

