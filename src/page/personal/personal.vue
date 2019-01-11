<template>
    <div class="personal-box">
        <headerTop/>
        <div class="personal-container" v-if="userId != 0">
            <ul class="personal-ul">
                <div>
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3969814012,482639741&fm=27&gp=0.jpg" alt="">
                    <p>用户名</p>
                </div>
                <router-link :class="{check:indexs==0}" tag="li" to="/personal/orders"  @click.native="indexs=0">我的订单</router-link>
                <router-link :class="{check:indexs==1}" tag="li" to="/personal/account" @click.native="indexs=1">账户资料</router-link>
                <router-link :class="{check:indexs==2}" tag="li" to="/personal/address" @click.native="indexs=2">收货地址</router-link>
            </ul>
			<div class="view-container">
				<transition name="router-slid" mode="out-in">
					<router-view>
					</router-view>
				</transition>
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
	data(){
		return{
			indexs:0
		}
	},
	methods: {
	},
	computed:{
		...mapState(['userId'])
	}
}
</script>

<style lang="scss" scoped>
.personal-box{
	min-width: 1519px;
	background: #f3f3f3;
}
.personal-container{
    width: 100%;
    min-height: 700px;
    display: flex;
    .personal-ul{
        width: 18%;
		min-width: 240px;
        margin: 50px;
        padding: 0;
        border: 0.0625rem solid #ccc;
        border-radius: 0.625rem;
		background: #fff;
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
			&.check{
				background: #f3f3f3;
			}
        }
        li:hover{
            background: #f3f3f3;
            text-decoration: none;
            cursor:pointer;
        }
    }
    .view-container{
		overflow: hidden;
        width: 85%;
		min-width: 1127px;
		min-height: 700px;
        margin: 50px;
        margin-left: 0;
        border: 0.0625rem solid #ccc;
		background: #fff;
		.router-slid-enter-active, .router-slid-leave-active {
				transition: all .6s;
		}
		.router-slid-enter, .router-slid-leave-active {
				transform: translate3d(60rem, 0, 0);
				opacity: 0;
		}
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
