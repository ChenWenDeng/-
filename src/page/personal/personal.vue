<template>
    <div>
        <headerTop/>
        <div class="personal-container" v-if="userId != 0">
            <ul class="personal-ul">
                <div>
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3969814012,482639741&fm=27&gp=0.jpg" alt="">
                    <p>用户名</p>
                </div>
                <router-link tag="li" to="/personal/orders">我的订单</router-link>
                <router-link tag="li" to="/personal/account">账户资料</router-link>
                <router-link tag="li" to="/personal/address">收货地址</router-link>
            </ul>
            <div class="view-container">
                <router-view></router-view>
            </div>
        </div>
		<h2 v-if="userId == 0">
			<i class="iconfont icon-cuowu"></i>
			当前为登录，无法查看！
		</h2>
        <Footer/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    components:{
        headerTop,
        Footer
    },
	computed:{
		...mapState(['userId'])
	}
}
</script>

<style lang="scss" scoped>
.personal-container{
    width: 100%;
    min-height: 700px;
    display: flex;
    .personal-ul{
        width: 18%;
        margin: 50px;
        padding: 0;
        border: 0.0625rem solid #ccc;
        border-radius: 0.625rem;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1.25rem;
            img{
                width: 6.25rem;
                height: 6.25rem;
            }
        }
        li{
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 0.625rem;
            list-style-type:none;
        }
        li:hover{
            background: #f3f3f3;
            text-decoration: none;
            cursor:pointer;
        }
    }
    .view-container{
        width: 85%;
        margin: 50px;
        margin-left: 0;
        border: 0.0625rem solid #ccc;
    }
}
h2{
	min-height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 35px;
	.icon-cuowu{
		font-size: 70px;
		color: red;
	}
}
</style>
