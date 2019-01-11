<template>
	<div>
		<headerTop/>
    <div class="login-container">
        <div class="login-box">
            <div class="header-container">
                <div>E</div>
                <p>使用 Eend 账号 登录官网</p>
            </div>
            <div class="input-container">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm form-container">
                    <el-form-item class="input-box" label="用户账号" prop="name">
                        <el-input class="input-con" type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-box" label="用户密码" prop="pass">
                        <el-input class="input-con" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-box input-buttom" label="确认密码" prop="checkPass">
                        <el-input class="input-con" type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
										<div class="go-container">
											<router-link class="Gologin" tag="span" to="/">去首页>>></router-link>
											<router-link class="Gologin" tag="span" to="/register">未注册Eend商城账号，去注册？</router-link>
										</div>
                    <el-form-item class="input-box">
                        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                        <el-button class="reset-btn" @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
		<Footer/>
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
    data() {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账户不能为空'));
        }
        // var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
				var uPattern = /^(?!\d+$)[A-Za-z0-9_\u4e00-\u9fa5]{3,16}$/;
        if(uPattern.test(value)){
            callback();
        }else{
            return callback(new Error('账户要求3-16位由字母、数字、_或汉字组成、不能由纯数字组成'));
        }
      };
      var validatePass = (rule, value, callback) => {
				var uPattern = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/;

				if (value === '') {
					callback(new Error('请输入密码'));
				}else if(uPattern.test(value)){
					callback()
				} else {
						return callback(new Error('密码要在6~20位之间同时包含数字和字母'));
				}
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
				nickName:'',
				userId: 0,
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkUser, trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						//发请求，把用户名，密码和确认密码发过去
						axios.post("/users/login",{
								userName   : this.ruleForm2.name,
								userPwd    : this.ruleForm2.pass,
								confirmPwd : this.ruleForm2.checkPass
							}).then((response) =>{
							let res = response.data;
							if(res.status == '0'){
								
								// 保存用户名在 nickName 中
								this.nickName = res.result.userName;
								
								this.userId = res.result.userId;
								
								//修改用户名状态 拿到用户名 登录功能
								this.$store.dispatch('recordUser',this.nickName)
								//修改用户id状态
								this.$store.dispatch('recordUserId',this.userId)
								
								this.$router.push({path:'/'});
							}else{
								this.open6()
							}
						})
							console.log(this.ruleForm2.name)
							console.log(this.ruleForm2.pass)
							console.log(this.ruleForm2.checkPass)
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			open6() {
        this.$notify.error({
          title: '错误',
          message: '用户名或密码不正确'
        });
      },
    },
		mounted(){
			//街道到headerTop参数把nickName的用户名清空
			this.nickName = this.$route.query.userName
		}
  }
</script>

<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 750px;
    display: flex;
		background: #f1f1f1;
    .login-box{
        width: 40%;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        background: #000;
        padding-top: 50px;
        border-radius: 20px;
        padding: 30px;
				box-shadow: 0px 0px 10px 5px #aaa;
        .header-container{
            width: 100%;;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            div{
            		width: 65px;
								height: 60px;
								margin-bottom: 10px;
            		font-size: 50px;
            		display: flex;
            		justify-content: center;
            		align-items: center;
            		padding-bottom: 2px;
            		
            }
        }
				.input-container:hover{
					box-shadow: 0px 0px 10px 5px cadetblue;
					-webkit-transform: scale(0.6.1);
					-moz-transform: scale(1.1);
					-ms-transform: scale(1.1);
					-o-transform: scale(1.1);
					transition: all .8s;
					z-index: 9999;
					margin-bottom: 4px;
				}
        .input-container{
            width: 100%;
            padding: 20px;
						background: #fff;
						transition: bottom .8 linear 0s;
            .form-container{
                width: 100%;
                .input-box{
                    display: flex;
                    justify-content: space-between;
										&.input-buttom{
											margin-bottom: 0;
										}
                    .input-con{
                        width: 350px;
                    }
                }
                .login-btn,.reset-btn{
                    width: 200px;
                }
            }
						.go-container{
							display: flex;
							justify-content: space-between;
							padding: 5px 30px 30px 30px;
							.Gologin{
								font-size: 13px;
								color: #c3c3c3;
								cursor:pointer;
							}
							.Gologin:hover{
								color: #999;
							}
						}
        }
    }
}
</style>
