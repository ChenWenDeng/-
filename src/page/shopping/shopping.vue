<template>
    <div class="shopping">
        <headerTop/>
        <div class="main-container">
            <table class="cartTable" v-if="cartList.length!=0">
                <thead>
                    <tr>
												<th>选择</th>
                        <th>商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(goods,index) in cartList"  :key="index">
                        <td class="checkbox" >
													<i class="iconfont icon-danxuanfuxuan" :class="{check: goods.details[0].checked == 1}" @click="editCart('checked',goods)"></i>
												</td>
                        <td class="goods"><img :src="goods.details[0].smImg[0]" alt=""/><span>{{goods.details[0].productName}}</span></td>
                        <td class="price">{{goods.details[0].salePrice}}</td>
                        <td class="count"><span class="reduce"><i v-show="goods.details[0].num>1" @click="editCart('minu',goods)">-</i></span><input class="count-input" type="text" v-model="goods.details[0].num"/><span class="add" @click="editCart('add',goods)">+</span></td>
                        <td class="subtotal">{{goods.details[0].salePrice * goods.details[0].num}}</td>
                        <td class="operation"><span class="delete btn btn-danger" @click="dele(goods._id,goods.details[0].num)" >删除</span></td>
                    </tr>
                    <tr class="total-box">
                        <td  colspan="6" >
														<div class="allCheck">
															<i class="iconfont icon-danxuanfuxuan" :class="{check:checkAllFlag}" @click="toggleCheckAll"></i>
															全选
														</div>
                            总价：<span>{{totalPrice}}</span>
                            <!-- <router-link class="btn btn-primary" tag="button" to="/addresses" @click="jiesuan">
                                去结算
                            </router-link> -->
														<button class="btn btn-primary" @click="jiesuan">
																去结算
														</button>
                        </td>
                    </tr>
                </tbody>
            </table>
						<div class="empty-container" v-else>
								<h1 class="logtext" v-if="loginText">
									<i class="iconfont icon-cuowu"></i>
									当前未登录，查看失败！
								</h1>
								<h1 v-if="!loginText">购物车空空如也~~~~</h1>
						</div>
            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>确定删除吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="del();dialogVisible = false" >
                    确 定
                </el-button>
            </span>
            </el-dialog>
        </div>
        <Footer class="footer"/>
    </div>
</template>

<script>
import Vue from 'vue'
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
						cartList:[],
						// cartListDetails:[],
            // allChecked:true,//全选状态,
            dialogVisible: false,
            cart_id: null, //保存商品要删除的id,
						cart_num: 0, //删除商品的数量
						loginText: '',//未登录信息
        }
    },
		mounted(){
				if(this.goodsList){
						this.$notify({
								title: '成功',
								message: '已添加到购物车',
								type: 'success'
						});
				}
				this.init()
		},
    methods:{
				jiesuan(){
					var num = 0;
					this.cartList.forEach((item)=>{
						if(item.details[0].checked == '1'){
							num++
						};
					})
					if(num > 0){
						this.$router.push({path: '/addresses', query: {modes: 'cart'}})
					}
				},
				//点击加减按钮进行修改购物车数量
        editCart(flag,goods){
            if(flag == 'add'){
							goods.details[0].num++;
						}else if( flag == 'minu'){
							goods.details[0].num--;
						}else{
							goods.details[0].checked = goods.details[0].checked == "1" ? "0" : "1";
						}
						
						axios.post('/users/cartEdit',{
								productId : goods.details[0].productId,
								num 			: goods.details[0].num,
								checked 	: goods.details[0].checked
							}).then((response) =>{
							let res = response.data;
							if(res.status == '0'){
								console.log('成功')

								//修改购物车数量状态
								let num = 0;
								if(flag == 'add'){
									num = 1;
								}else{
									num = -1
								}
								this.$store.dispatch('recordCartCount',num)
							}else{
								console.log('失败'+res.msg)
							}
						})
        },
				//点击模态框的删除按钮弹出模态框
        dele(cart_id,cart_num){
            this.dialogVisible = true;
            this.cart_id = cart_id;
						this.cart_num = cart_num;
						console.log(this.cart_id)
        },
				//点击模态框的确定按钮进行删除
        del(){
						axios.post('/users/cartDel',{
								cart_id:this.cart_id,
							}).then((response) =>{
							let res = response.data;
							if(res.status == '0'){
								console.log('删除成功')
								this.init()
								//减购物车数量
								this.$store.dispatch('recordCartCount',-this.cart_num)
							}else{
								console.log('失败'+res.msg)
							}
						})
        },
				//关闭模态框
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
				//渲染购物车数据
				init(){
					axios.get('/users/cartList').then((response) =>{
						let res = response.data;
						if(res.status == '0'){
							this.cartList = res.result;
							console.log(this.cartList[0].details[0].smImg[0])
						}else{
							//未登录的信息
							this.loginText = res.msg
							console.log(res.msg)
						}
					})
				},
				//全选功能
				toggleCheckAll(){
					//checkAllFlag 是计算属性不能再次赋值 所以要再声明一个变量
					var flag = !this.checkAllFlag;
					this.cartList.forEach((item)=>{
						item.details[0].checked = flag ? '1' : '0';
					})
					axios.post('/users/editCheckAll',{
							checkAll : flag
						}).then((response) =>{
						let res = response.data;
						if(res.status == '0'){
							console.log('全选成功')
							// this.init()
						}else{
							console.log('失败'+res.msg)
						}
					})
				}
    },
    computed:{
				//控制全选的状态
				checkAllFlag(){
					return this.checkedCount == this.cartList.length;
				},
				//当前商品选中的数量
				checkedCount(){
					var i = 0;
					this.cartList.forEach((item)=>{
						if(item.details[0].checked == '1'){
							i++
						};
					})
					return i
				},
				totalPrice(){
						var total = 0
						this.cartList.forEach((goods)=>{
							if(goods.details[0].checked == '1'){
								total += goods.details[0].salePrice * goods.details[0].num
							}
						})
						return total
				},
    }
}
</script>

<style lang="scss" scoped>
    .shopping{
        width: 100%;
        .main-container{
            min-height: 700px;
            display: flex;
            align-items: center;
            .empty-container{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
								.logtext{
									display: flex;
									align-items: center;
									font-size: 35px;
									i{
										display: inline-block;
										font-size: 70px;
										color: red;
									}
								}
            }
            .cartTable{
                width: 80%;
                border-collapse: collapse;
                border-spacing: 0;
                border: 0;
                text-align: center;
                margin: 50px auto;
                th, td {
                    // border: 1px solid #CADEFF;
                    border: 1px solid #f3f3f3;
                }
                th {
                    // background: #e2f2ff;
                    background: rgba(5, 0, 0, 0.1);
                    border-top: 3px solid rgba(5, 0, 0, 0.5);;
                    height: 30px;
                }
                td {
                    padding: 10px;
                    color: #444;
                }
                tbody tr:hover {
                    // background: RGB(238,246,255);
                     background: rgba(5, 0, 0, 0.1);
                }
                tr{
                    .checkbox {
                        width: 60px;
												color: #ccc;
												.check{
													font-size: 20px;
													color: mediumseagreen;
												}
                    }
                    .goods {
                        width: 300px;
                    }
                    .price {
                        width: 130px;
                    }
                    .count {
                        width: 90px;
                        .add,input,.reduce {
                            float: left;
                            margin-right: -1px;
                            position: relative;
                            z-index: 0;
                        }
                        .reduce{
                            i{
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .add, .reduce {
                            height: 23px;
                            width: 17px;
                            border: 1px solid #e5e5e5;
                            background: #f0f0f0;
                            text-align: center;
                            line-height: 16px;
                            color: #444;
                        }
                        .add:hover, .reduce:hover {
                            color: #f50;
                            z-index: 3;
                            border-color: #f60;
                            cursor: pointer;
                        }
                        input {
                            width: 70px;
                            height: 23px;
                            line-height: 15px;
                            border: 1px solid #aaa;
                            color: #343434;
                            text-align: center;
                            padding: 4px 0;
                            background-color: #fff;
                            z-index: 2;
                        }
                    }
                    .subtotal {
                        width: 150px;
                        color: red;
                        font-weight: bold;
                    }
                    .operation {
                        width: 80px;
                    }
                    .operation span:hover, a:hover {
                        cursor: pointer;
                        color: #000;
                        text-decoration: underline;
                        text-decoration:none;
                    }
                    img {
                        width: 100px;
                        height: 80px;
                        margin-right: 10px;
                        float: left;
                    }
                }
                .total-box{
                    text-align: right;
										position: relative;
										.allCheck{
											display: inline-block;
											position: absolute;
											left: 185px;
											display: flex;
											align-items: center;
											margin-top: 10px;
											text-align: center;
											.icon-danxuanfuxuan{
												display: inline-block;
												width: 25px;
												height: 25px;
												margin-top: 2px;
												color: #ccc;
												&.check{
													font-size: 20px;
													margin-top: -6px;
													color: mediumseagreen;
												}
											}
										}
                    span{
                        width: 150px;
                        color: red;
                        font-weight: bold;
                    }
                    .btn{
                        padding: 10px 40px;
                        margin-left: 50px;
                    }
                }
            }
        }
       
    }
</style>
