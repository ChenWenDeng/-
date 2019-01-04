<template>
    <div class="shopping">
        <headerTop/>
        <div class="main-container">
            <div class="empty-container" v-if="cartList.length==0">
                <h1>购物车空空如也~~~~</h1>
            </div>
            <table v-else class="cartTable">
                <thead>
                    <tr>
                        <!-- <th><label><input class="check-all check" type="checkbox"/>&nbsp;全选</label></th> -->
                        <th>商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(goods,index) in cartList"  :key="index">
                        <!-- <td class="checkbox"><input class="check-one check" type="checkbox"/></td> -->
                        <td class="goods"><img :src="goods.details[0].smImg[0]" alt=""/><span>{{goods.details[0].productName}}</span></td>
                        <td class="price">{{goods.details[0].salePrice}}</td>
                        <td class="count"><span class="reduce"><i v-show="goods.details[0].num>1" @click="editCart('minu',goods)">-</i></span><input class="count-input" type="text" v-model="goods.details[0].num"/><span class="add"@click="editCart('add',goods)">+</span></td>
                        <td class="subtotal">{{goods.details[0].salePrice * goods.details[0].num}}</td>
                        <td class="operation"><span class="delete btn btn-danger" @click="dele(goods._id)" >删除</span></td>
                    </tr>
                    <tr class="total-box">
                        <td  colspan="5" >
                            总价：<span>{{totalPrice}}</span>
                            <router-link class="btn btn-primary" tag="button" to="/addresses">
                                去结算
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            cart_id: null, //保存商品要删除的id
        }
    },
    methods:{
        editCart(flag,goods){
            if(flag == 'add'){
							goods.details[0].num++;
						}else{
							goods.details[0].num--;
						}
						
						axios.post('/users/cartEdit',{
								productId : goods.details[0].productId,
								num 			: goods.details[0].num
							}).then((response) =>{
							let res = response.data;
							if(res.status == '0'){
								console.log('成功')
							}else{
								console.log('失败'+res.msg)
							}
						})
        },
//         reduce(index){
//             this.goodsList[index].num--
//         },
				//删除购物车
        dele(cart_id){
            this.dialogVisible = true
            this.cart_id = cart_id
						console.log(this.cart_id)
						
// 						axios.post('/users/cartDel',{
// 								cart_id:cart_id,
// 							}).then((response) =>{
// 							let res = response.data;
// 							if(res.status == '0'){
// 								console.log('成功')
// 								this.init()
// 							}else{
// 								console.log('失败'+res.msg)
// 							}
// 						})
        },
        del(){
						axios.post('/users/cartDel',{
								cart_id:this.cart_id,
							}).then((response) =>{
							let res = response.data;
							if(res.status == '0'){
								console.log('删除成功')
								this.init()
							}else{
								console.log('失败'+res.msg)
							}
						})
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
				init(){
					axios.get('/users/cartList').then((response) =>{
						let res = response.data;
						if(res.status == '0'){
							this.cartList = res.result;
							console.log(this.cartList[0].details[0].smImg[0])
							// console.log(this.cartList[0]._id)
						}else{
							console.log('失败'+res.msg)
						}
					})
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
    computed:{
        totalPrice(){
            var total = 0
            this.cartList.forEach((goods,index)=>{
                total += goods.details[0].salePrice * goods.details[0].num
            })
            return total
        }
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
                        /*border: 1px solid #ccc;*/
                        margin-right: 10px;
                        float: left;
                    }
                }
                .total-box{
                    text-align: right;
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
