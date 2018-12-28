<template>
  <div class="nav-container">
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo nav-box"
    mode="horizontal"
    @select="handleSelect"
  >     
        <el-menu-item index="99">
          <router-link to="/" tag="h1">
            Eend商城
          </router-link>
        </el-menu-item>
        <el-menu-item index="1">
          <router-link to="/login" tag="span">
            登录
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/Register" tag="span">
            注册
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">我的订单</el-menu-item>
        <el-submenu index="4">
        <template slot="title">
          <router-link to="/personal" tag="span">
            个人中心
          </router-link>
        </template>
        <el-menu-item index="4-1">购物车</el-menu-item>
        <el-menu-item index="4-2">积分商城</el-menu-item>
        <el-menu-item index="4-3">我的会员</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" disabled>在线客服</el-menu-item>
        <el-input class="input-container"
            placeholder="请输入内容"
            v-model="keyWord"
            clearable>
        </el-input>
        <el-button class="search-btn" type="success" @click="getSerch">搜索</el-button>
  </el-menu>
   </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
    name: "headerTop",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        keyWord: '',
				productAarr:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
			
			//点击搜索，查询关键字
			getSerch(){
				//如果搜索框没有关键字，弹出提示框
				if(!this.keyWord){
					this.$message({
						message: '请输入搜索关键字',
						type: 'warning'
					});
				}else if((this.keyWord == '全部商品')){  //如果搜索框输入全部，把关键字 '全部' 传到 commodity 页面
					console.log(this.keyWord)
					const {href} = this.$router.resolve({
						path: '/commodity',
						query: {
							keyWord:this.keyWord
						}
					})
					window.open(href, '_blank')
				}else{  											//如果搜索框输入关键字，把关键字传到 commodity 页面
					console.log(this.keyWord)
					const {href} = this.$router.resolve({
						path: '/commodity',
						query: {
							keyWord:this.keyWord
						}
					})
					window.open(href, '_blank')
				}
			}
    },
		mounted(){
			
		}
};
</script>


<style lang="scss" scoped>
	.nav-container{
		width: 100%!important;
	}
.nav-box{
    background: #000;
    padding: 30px;
    .input-container{
        width: 90%;
//         margin-top:10px;
//         margin-left: 28%;
				margin: 30px auto;
				
    }
}

</style>
