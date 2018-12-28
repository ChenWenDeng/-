<template>
    <div class="shopping">
        <headerTop/>
        <div class="main-container">
            <div class="empty-container" v-if="goodsList.length==0">
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
                    <tr v-for="(goods,index) in goodsList"  :key="index">
                        <!-- <td class="checkbox"><input class="check-one check" type="checkbox"/></td> -->
                        <td class="goods"><img :src="goods.urlImg" alt=""/><span>{{goods.name}}</span></td>
                        <td class="price">{{goods.price}}</td>
                        <td class="count"><span class="reduce"><i v-show="goods.num>1" @click="reduce(index)">-</i></span><input class="count-input" type="text" v-model="goods.num"/><span class="add" @click="add(index)">+</span></td>
                        <td class="subtotal">{{goods.price*goods.num}}</td>
                        <!-- <td class="operation"><span class="delete" @click="del(index)">删除</span></td> -->
                        <!-- <td class="operation"><span class="delete btn btn-danger" @click="dialogVisible = true;" >删除</span></td> -->
                        <td class="operation"><span class="delete btn btn-danger" @click="dele(index)" >删除</span></td>
                    </tr>
                    <tr class="total-box">
                        <td  colspan="5" >
                            总价：<span>{{totalPrice}}</span>
                            <router-link class="btn btn-primary" tag="button" to="/order">
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
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    components:{
        headerTop,
        Footer
    },
    data(){
        return{
            allChecked:true,//全选状态,
            dialogVisible: false,
            indexs: null,
            goodsList:[
                       {    id:1,
                            urlImg:'http://p3.vanclimg.com/232/232/product/6/3/7/6373824/mid/6373824-1j201709151927089726.jpg',
                            name:'凡客棉线衫 绞花套衫 男款 米白色',
                            price:999,
                            num:1
                       },
                       {    id:2,
                            urlImg:'http://p3.vanclimg.com/232/232/product/6/3/7/6375158/mid/6375158-1j201709190939204939.jpg',
                            name:'凡客棉线衫 绞花套衫 男款 米白色',
                            price:1999,
                            num:1
                       },
                       {    id:3,
                            urlImg:'http://p3.vanclimg.com/232/232/product/6/3/7/6373824/mid/6373824-1j201709151927089726.jpg',
                            name:'凡客棉线衫 绞花套衫 男款 米白色',
                            price:939,
                            num:1
                       },
                       {    id:4,
                            urlImg:'http://p3.vanclimg.com/232/232/product/6/3/7/6375736/mid/6375736-1j201703161122076681.jpg',
                            name:'凡客棉线衫 绞花套衫 男款 米白色',
                            price:459,
                            num:1
                       },
                       {    id:5,
                            urlImg:'http://p3.vanclimg.com/232/232/product/6/3/7/6377950/mid/6377950-1j201709181637233065.jpg',
                            name:'凡客棉线衫 绞花套衫 男款 米白色',
                            price:555,
                            num:1
                       },
                       {    id:6,
                            urlImg:'//h2.appsimg.com/a.appsimg.com/upcb/2018/12/03/9/ias_154380537062855.jpg.webp',
                            name:'凡客棉线衫 绞花套衫 男款 米白色',
                            price:669,
                            num:1
                       },   
                    ]
        }
    },
    methods:{
        add(index){
            this.goodsList[index].num++
        },
        reduce(index){
            this.goodsList[index].num--
        },
        dele(index){
            this.dialogVisible = true
            this.indexs = index
        },
        del(){
            this.goodsList.splice(this.indexs,1)
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
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
    },
    computed:{
        totalPrice(){
            var total = 0
            this.goodsList.forEach((goods,index)=>{
                total += goods.num * goods.price
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
