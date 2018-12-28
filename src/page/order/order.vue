<template>
    <div class="order-container">
        <headerTop/>
        <div class="receiving-container">
            <header>
                收货信息
            </header>
            <div class="information-container">
                <!-- <div class="information-box">
                    <p>收货人：陈先生</p>
                    <p>收货电话：110110110</p>
                    <p>收货地址：中国深圳</p>
                    <div class="modify-box">
                        <span>修改</span>
                        <span>删除</span>
                    </div>
                </div> -->
                <div class="add-container" v-for="(item , index) in lists" :key="index">
                    <p v-for="(item , k) in item" :key="k">
                        <span>{{item.name}}：</span>
                        <span  ref="nameBox">{{item.prop}}</span>
                    </p>
                        <!-- <input v-model="item.prop" > -->
                    <div :class="{modifyBox: lists.length>=1}" >
                        <span data-toggle="modal" data-target="#myModal" @click='dataXiu(index)'>修改</span>
                        <span @click="deleteData(index)">删除</span>
                    </div>
                </div>
                <div class="add-box"  data-toggle="modal" data-target=".bs-example-modal-sm">
                    <span class="iconfont icon-jia"></span>
                    <p>增加新地址</p>
                </div>
            </div>
        </div>
        <!-- ==  模态框  ===-->
        <div class="modal-frame">
            <!-- Small modal -->
            <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button> -->

            <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-cd" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">新增收货地址</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="input-container">
                            <div class="header-box">
                                <p>
                                    <span>收件姓名</span>
                                    <input v-model="name">
                                </p>
                                <p>
                                    <span>收件电话</span>
                                    <input v-model="phone">
                                </p>
                                <p>
                                    <span>收件地址</span>
                                    <input v-model="address">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <!-- <div type="button" class="btn btn-primary" @click="add" data-dismiss="modal" :disabled="isdisabled">保存</div> -->
                        <!-- <el-button :plain="true" @click="open">打开消息提示</el-button> -->
                        <div ref="baocun" type="button" class="btn btn-primary" @click="add"  data-dismiss="modal" :disabled="isdisabled">保存</div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        Launch demo modal
        </button> -->

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                 <h4 class="modal-title" id="myModalLabel">修改收货地址</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="modal-body">
                        <div class="input-container">
                            <div class="header-box">
                                <p>
                                    <span>收件姓名</span>
                                    <input v-model="endname">
                                </p>
                                <p>
                                    <span>收件电话</span>
                                    <input v-model="endphone">
                                </p>
                                <p>
                                    <span>收件地址</span>
                                    <input v-model="endaddress">
                                </p>
                            </div>
                            <!-- <button class="preservation btn btn-info btn-md" type="button" @click="add">保存</button> -->
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button ref="baocun2" type="button" class="btn btn-primary" data-dismiss="modal" @click="modify">保存</button>
            </div>
            </div>
        </div>
        </div>


        <div class="detailed-container">
            <header>
                全部清单
            </header>
            <div class="commodity-container">
                <ul class="header-top">
                    <li>
                        <span>商品信息</span>
                        <span>单价</span>
                        <span>数量</span>
                        <span>小计</span>
                    </li>
                </ul>
                <ul class="commodity-row">
                    <li>
                        <span class="left-box">
                            <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_01_1280.jpg" alt="">
                            <span class="img-title">女士灯笼袖珍珠装饰后抽绳侧开叉毛呢外套</span>
                        </span>
                        <span>￥399</span>
                        <span>x1</span>
                        <span>￥399</span>
                    </li>
                </ul>
                <div class="price-container">
                    <span>应付总额：￥399</span>
                    <button @click="Order" class="btn btn-primary">
                        提交订单
                    </button>
                </div>
            </div>
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
            // text:'',
            // str:'',
            name:null,
            phone: null,
            address:null,
            endname:null,
            endphone: null,
            endaddress:null,
            num:0,
            lists:[],
            isdisabled: true,
        }
    },
    methods:{
        //删除一个属性
        remoClass(){
            this.$refs.baocun.removeAttribute("data-dismiss")
        },
        //添加一个属性
        setClass(){
            this.$refs.baocun.setAttribute("data-dismiss",'modal')
        },
        // open() {
        //     this.$message('这是一条消息提示');
        // },
        add(){
            if(this.name==null){
                this.$notify({
                    title: '警告',
                    message: '收件人姓名不能为空',
                    type: 'warning'
                });
                this.remoClass()
                // this.$refs.baocun.removeAttribute("data-dismiss")
                return
            }else if(this.phone==null){
                this.$notify({
                    title: '警告',
                    message: '收件人电话不能为空',
                    type: 'warning'
                });
                this.remoClass()
                // this.$refs.baocun.removeAttribute("data-dismiss")
                return
            }else if(this.address==null){
                this.$notify({
                    title: '警告',
                    message: '收件人地址不能为空',
                    type: 'warning'
                });
                this.remoClass()
                // this.$refs.baocun.removeAttribute("data-dismiss")
                return
            }else{
                this.lists.push([
                    {name:'收件姓名',prop:this.name},
                    {name:'收件电话',prop:this.phone},
                    {name:'收件地址',prop:this.address}]
                )
                if(this.lists.length>0){
                    this.name = null,
                    this.phone = null
                    this.address = null
                }
                this.setClass()
                // this.$refs.baocun.setAttribute("data-dismiss",'modal')
            }
        },
        modify(){
            this.lists[this.num][0].prop = this.endname;
            this.lists[this.num][1].prop = this.endphone;
            this.lists[this.num][2].prop = this.endaddress;
            if(this.lists.length>0){
                this.endname=''
                this.endphone=''
                this.endaddress=''
            }
            //删除对应下标的数组
            if((this.lists[this.num][0].prop == null)&&(this.lists[this.num][1].prop == null)&&(this.lists[this.num][2].prop == null)){
                this.lists.splice(this.num,1);
            } 
        },
        dataXiu(index){
            this.num = index
        },
        //删除对应下标的数组
        deleteData(index){
            if(this.lists.length>1){
                this.lists.splice(index,1);
            }else{
                this.$notify({
                    title: '警告',
                    message: '至少有一个收件地址',
                    type: 'warning'
                });
            }
        },
        Order(){
            if(this.lists.length==0){
                this.$message.error('请填写收件地址');
            }else{
                this.$router.push({path:'/payment'});
            }
        }
        
    },
    
}
</script>

<style lang="scss" scoped>
.order-container{
    width: 100%;
    background: #f3f3f3;
    .receiving-container{
        width: 80%;
        margin: 20px auto;
        //background: #000;
        header{
            width: 100%;
            padding: 20px;
            font-size: 18px;
            background: #000;
            color: #fff;
            border: 1px solid #ccc;
        }
        .information-container{
            width: 100%;
            padding: 10px 0;
            border: 1px solid #ccc;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            background: #fff;
            .add-container{
                width: 23%;
                height: 192px;
                padding: 20px;
                //padding-bottom: 50px;
                margin: 20px 10px 0 10px;
                border: 1px solid #ccc;
                position: relative;
            // }
            // .information-box{
                .modifyBox{
                    height: 30px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: #f3f3f3;
                    display: flex;
                    opacity: 0;
                    visibility: hidden;
                    -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.6s;
                    span{
                        display: flex;
                        justify-content: center;
                        flex: 1;
                        padding: 5px 0;
                        background: #fff;
                        border-top: 1px solid #ccc; 
                        font-size: 12px;
                    }
                    span:hover{
                        background: #f3f3f3;
                    }
                    span:nth-child(1){
                        border-right: 1px solid #ccc; 
                    }
                }
                &.add-container:hover .modifyBox{
                    visibility: visible;
                            opacity: 1;
                            transform:translateY(-5%);
                }
            }
            .add-box{
                width: 23%;
                min-height: 192px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                //padding: 80px;
                margin: 20px 10px;
                border: 1px solid #ccc;
                .icon-jia{
                    font-size: 25px;
                }
            }
            .add-box:hover{
                background: #f3f3f3;
            }
        }
    }
    .modal-frame{
        .input-container{
            width: 100%;
            padding: 20px;
            .header-box{
                width: 100%;
                p{
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    input{
                        width: 60%;
                        margin-left: 15px;
                    }
                }
            }
        }
    }
    .detailed-container{
        width: 80%;
        margin: 20px auto;
        background: #fff;
        // color: #fff;
        header{
            width: 100%;
            padding: 20px;
            font-size: 18px;
            background: #000;
            color: #fff;
            border: 1px solid #fff;
        }
        .commodity-container{
            width: 100%;
            padding: 30px;
            .header-top,.commodity-row{
                width: 100%;
                padding-left: 0;
                margin: 0; 
                li{
                    width: 100%;
                    list-style:none;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #000;
                    span{
                        text-align: center;
                        display: inline-block;
                        width: 15%;
                    }
                    span:nth-child(1){
                        flex: 1;
                        text-align: left;
                    }
                }
            }
            .commodity-row{
                .left-box{
                    display: flex;
                    align-items: center;
                    img{
                        width: 80px;
                        height:80px;
                    }
                    .img-title{
                        width: 300px;
                        margin-left: 10px;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                li:nth-child(1){
                    padding: 30px 20px;
                }
            }
            .price-container{
                width: 100%;
                text-align: right;
                padding: 20px 50px;
                .btn{
                    margin-left: 40px
                }
            }
        }
    }
}
</style>
